'use strict';

//TODO: wth is Bloodhound
//TODO: this is especially messy

/**
 * @fileoverview Autocomplete search related functions 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 * @author jjnaughton93@gmail.com (JJ Naughton)
 */
module.exports = (function() {
    let util = require('./util'),
        $ = require('jquery');

    let autocomplete = {
        debug: true,
        inputSelector: '#search-bar-auto',
        resultsSelector: '.autocomplete-results',
        resultsSizeMax: 10, //The limit of how many results to show in the list
        database: []
    };

    /**
     * @return {[type]} [description]
     */
    autocomplete.init = function() {
        $(autocomplete.resultsSelector).slideUp();
        this.typeahead();
        this.isFormula = util.isFormula;
        this.isINCHI = util.isINCHI;
    };

    /**
     * Tokenize a formula by breaking into it's molecular components
     * @param  {String} formula string representing a formula
     * @return {ARray}         tokenized results
     */
    autocomplete.formulaTokenizer = function(formula) {
        formula = formula.toLowerCase();
        var splitFormula = formula.replace(/([a-z])/g, ' $1').trim();
        var tokens = splitFormula ? splitFormula.split(/\s+/) : [];
        tokens.push(formula); //Add the full string
        return tokens;
    };

    /**
     * Sort all of the items this happens in search and after filter
     * @param  {[type]} a [description]
     * @param  {[type]} b [description]
     * @return {[type]}   [description]
     */
    autocomplete.suggestionSorter = function(suggestions, query){
        var isFormula = this.isFormula(query);
        var noNumbers = query.match(/\d+/g) === null;
        suggestions = this.filter(suggestions, query);
        var topSuggestions = [];
        var topFormulas = [];
        suggestions = $.map(suggestions, function(value){
            //Difficult to tell before 3
            if(query.length > 2){
                //Prioritize Name
                if(noNumbers || !isFormula){
                    if(query === value.name.substring(0,query.length)
                        .toLowerCase()){
                        topSuggestions.push(value); 
                        return null; 
                    }
                }
            }
            //Prioritieze formulas by length
            if(query.length > 2 && isFormula){
                if(query === value.formula.substring(0,query.length)
                    .toLowerCase()){
                    // top_formulas.push(value); 
                    // return null; 
                }
            }
            return value;
        });

        //Add top name suggestions by closest match
        if(topSuggestions.length){
            topSuggestions.sort(function(a,b) {
                return b.name.length - a.name.length;
            });
            $.each(topSuggestions, function(index, obj){
                suggestions.unshift(obj);
            });
        }
        //Add top formula suggestions by closest match
        if(topFormulas.length){ 
            //Shortest formulas first
            topFormulas.sort(function(a,b) {
                return b.formula.length - a.formula.length;
            });

            $.each(topFormulas, function(index, obj){
                suggestions.unshift(obj);
            });
        }

        return suggestions.slice(0,this.resultsSizeMax);
    };

    autocomplete.filter = function(suggestions, query){
        var isFormula = this.isFormula(query);
        var isINCHI = this.isINCHI(query);
        var seenInchis = [];
        suggestions = $.map(suggestions, function(value){

            //Remove duplicate inchi values
            if(seenInchis.indexOf(value.inchikey) < 0){
                seenInchis.push(value.inchikey);
            }
            else{
                return null;
            }
            //Remove long names if they aren't formula or inchi
            if(!isINCHI && !isFormula && value.name.length > 20){
                return null;
            }
            /*
            //TODO: this was commented out
            //Length shortner
            if( value.name.length > 20 || value.name.match(/[,-]/g) === null){
                // return null;
            }
            */
            return value;
        });
        return suggestions;
    };

    /**
     * Setup typeahead for autocomplete and suggested search
     * @return {[type]} [description]
     */
    autocomplete.typeahead = function() {
        var data = autoComplete;
        this.engine = new Bloodhound({
            datumTokenizer: function(data) {
                // console.log(data);
                var nameTokens = Bloodhound.tokenizers.whitespace(data.name);
                var formulaTokens = autocomplete.formulaTokenizer(data.formula);
                var synonymTokens = data.synonyms; //Already in an array
                var tagsTokens = data.tags; //Already in an array
                var inchiTokens = data.inchikey; //Just one value
                //Quickly disabled tokens
                // nameTokens = [];
                // formulaTokens = [];
                // synonymTokens = [];
                tagsTokens = []; //Producing too many results
                //Combine all of the tokens
                return nameTokens.concat(formulaTokens).concat(synonymTokens)
                    .concat(tagsTokens).concat(inchiTokens);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: auto_complete,
            remote: {
                url: "/suggestions?partial=%QUERY",
                wildcard: '%QUERY'
            },
            cache: true,
            identify: function(obj){
                return obj.inchikey
            },
            // sorter: this.suggestionSorter
        });
        //Seperate engine for low ranking items
        this.lowRank = new Bloodhound({
            datumTokenizer: function(data) {
                var synonymTokens = data.synonyms;
                var tagsTokens = data.tags;
                synonymTokens = [];
                tagsTokens = [];
                //Combine all of the tokens
                return synonymTokens.concat(tagsTokens);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: auto_complete,
            identify: function(obj){
                return obj.inchikey;
            },
        });

        this.TypeAhead = $(this.inputSelector).typeahead({
            hint: false,
            minLength: 1,
            classNames: {
                dataset: 'autocomplete-results',
                suggestion: 'suggestion',
            }
        }, {
            name: 'name',
            display: 'name',
            limit: 1000,
            // source: this.engine,
            source: function(query, sync, async) {
                autocomplete.engine.search(
                    query,
                    function(suggestions) {
                        sync(autocomplete.suggestionSorter(suggestions,
                            query.toLowerCase()));
                    },
                    function(suggestions){
                        async(autocomplete.suggestionSorter(suggestions,
                            query.toLowerCase()));
                    }
                );
            },
            templates: {
                empty: function(data){
                    return "<div><a href='#'><div class='suggestion col-xs-12'><h3>Zero results. Search for <samp class='font-red'>" + data.query + "</samp></h3></div></a> </div>";
                },
                suggestion: function(data) {
                    return autocomplete.renderHTML(data);
                },
                pending: `<div><a href='#'>
                <div class='suggestion col-xs-12'><h3 class='text-center'>
                <i class='fa fa-spinner fa-pulse'></i></h3></div></a> </div>`,
            }
        });
        //If using the keyboard following links on select
        this.TypeAhead.bind('typeahead:select', function(ev, suggestion) {
            var element = $('.autocomplete-results [data-inchi="' +
            suggestion.inchikey + '"] a');
            if(element.length){
                element[0].click();
            }
        });
    };

    /**
     * Create an object to allow auto complete
     * @return Object An object containing data to determine search results
     */
    autocomplete.getData = function() {
        var object = {};
        // return object;
        return this.placeholderDatabase;
    };

    /**
     * Render the HTML for one result to be added to the DOM
     * @param  {Object} result Parse the object and generate HTMl
     * @return {String} HTML string to be added to the Dom
     */
    autocomplete.renderHTML = function(result) {
        var formula = result.formula.replace(/(\d+)/g, "<sub>$1</sub>");
        var html = '<div data-inchi="' + result.inchikey + '">' +
            '<a href="/mol/' + result.inchikey + '">' +
            '<div class="col-md-2">' +
            '<img class="img-responsive" src="/static/data/svg/' +
                result.inchikey.substring(0, 2) +
                '/' + result.inchikey +
                '.svg" alt="preview">' +
            '</div> ' +
            '<div class="col-md-10">' +
            '<h3>' + result.name.substring(0, 36).toProperCase()+ '</h3>' +
            '<h4>' +  formula + '</h4>' +
        '</div>' +
        '</a>' +
        '</div> ';

        return html;
    };

    return autocomplete;
})();

