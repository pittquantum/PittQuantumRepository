'use strict';

/**
 * @fileoverview Molecule related functions 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 * @author jjnaughton93@gmail.com (JJ Naughton)
 */
module.exports = (function() {
    let //$ = require('jquery'),
        bindevents = require('./bindevents'),
        masonary = require('./masonary');
    let molecule = {
        debug: false,
        nextPageNum: 2, //Page number for the next query
        maxPageNum: -1, //Max number of searches to perform
        maxNumResults: -1, //Total number of results
        //Total number of results loaded to the DOM (100 from initial load)
        resultsVisible: 100,
        activeRequests: 0,
        maxActiveRequests: 5, //Threshold of active requests 
        results: [], //Loaded reuslts (not displayed)
        maxLoadedResults: 5, //Threshold of number of loaded results
        query: null,
        //How much scrolling is left on the page allowed for additional loads
        scrollLimit: 5000,
        //Total number of requests made (try to limit as much as possible)
        totalRequests: 0
    };

    /**
     * Setup ajax search
     */
    molecule.initAjaxSearch = function(){
        //Get the max page number to determine the limit of searches to perform
        if (this.maxPageNum === -1) {
            this.maxPageNum = parseInt($('.meta-data').attr('data-max-pages'));
        }

        //Get the total number of results we should try to retrieve 
        if(this.maxNumResults === -1){
            this.maxNumResults = parseInt($('.meta-data')
                .attr('data-total-results'));
        }

        //Inital button state
        $('#molecule-ajax-loader').show(300);
        $('.pagination .cogs').hide(300);
    };

    /**
     * Ajax Search Function.
     * As items are returned they are added to the results array
     * and displayed as the user scrolls down.
     * @return {Boolean}             If results are sent
     */
    molecule.ajaxSearch = function() {
        if (this.resultsVisible < this.maxNumResults) {
            let queryObject = this.getQuery();
            this.activeRequests++;
            this.totalRequests++;
            $('#molecule-ajax-loader').hide(300);
            $('.pagination .cogs').show(300);
            $.ajax({
                method: "GET",
                url: "/browse/" + this.nextPageNum + "/",
                data: queryObject
            }).done(function(response) {
                molecule.results.push(response);
                molecule.activeRequests--;
                //Should add 100 or less if last result
                molecule.resultsVisible += 100;
                //If there are not active requests show it as load more
                if(molecule.activeRequests === 0){
                    $('#molecule-ajax-loader').show(300);
                    $('.pagination .cogs').hide(300);
                }
                molecule.showResults(1);
            }).fail(function() {
                //If the search fails for some reason 
                console.log("Search Results Failed"); //Always show this
                return false;
            });
            this.nextPageNum++;
            return true;

        } else {
            //Deactive button and show message that all are loaded 
            $('#molecule-ajax-loader').addClass('disabled')
                .html('No More Results!');
            $('.pagination .cogs').hide();
            return false;
        }
    };
    /**
     * Show the results saved from ajax searches
     * @return {[type]} [description]
     */
    molecule.showResults = function(maxResults) {
        if (this.results.length > 0) {
            $.each(this.results.splice(0, maxResults), function(key, value) {
                $('#grid').append(value);
                masonary.animateOnScroll(); //Allow the new items to be animated
                //Add the event to the new items 
                //bindevents.resultTouchHelper();
            });
        }
    };

    /**
     * Get the current query
     * @return Object The query in an object 
     */
    molecule.getQuery = function() {
        if (this.query === null) {
            var element = $('#molecule-browser');
            this.query = {
                ajax: true,
                query: element.attr('data-query'),
                type: element.attr('data-type')
            };
        }
        return this.query;
    };

    /**
     * Determine if it is a good time to load more 
     * @return Boolean 
     */
    molecule.requestToLoad = function() {
        //User hasn't scrolled enough 
        if(($('body').height() - $(window).scrollTop()) > this.scrollLimit){
            return false; 
        }
        //To many simulatenous requests 
        if(this.activeRequests > this.maxActiveRequests){
            return false; 
        }

        //Too many loaded results
        if(this.results.length > this.maxLoadedResults){
            return false;
        }
        //Turn to false to disable ajax
        return true; 
    };

    /**
     * Determine the type of search 
     * @return {[type]} [description]
     */
    molecule.determineSearchType = function(){

    };

    return molecule;
})();
