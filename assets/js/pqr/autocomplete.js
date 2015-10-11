/**
 * @fileoverview Autocomplete search related functions 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */
pqr.autocomplete = {
	debug: true,
	input_selector: '#search-bar-auto',
	results_selector: '.autocomplete-results',
	results_size_max: 10, //The limit of how many results to show in the list
	database: []
};


/**
 * 
 * @return {[type]} [description]
 */
pqr.autocomplete.init = function(input_selector) {
	$(this.results_selector).slideUp();
	this.typeahead(); 
	this.isFormula = pqr.htmlUtilities.isFormula;
	this.isINCHI = pqr.htmlUtilities.isINCHI;
};


/**
 * Tokenize a formula by breaking into it's molecular components
 * @param  {String} formula string representing a formula
 * @return {ARray}         tokenized results
 */
pqr.autocomplete.formulaTokenizer = function(formula) {
	formula = formula.toLowerCase();
	var split_formula = formula.replace(/([a-z])/g, ' $1').trim()
	var tokens = split_formula ? split_formula.split(/\s+/) : [];
	tokens.push(formula); //Add the full string
	return tokens;
};

/**
 * Sort all of the items this happens in search and after filter
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @return {[type]}   [description]
 */
pqr.autocomplete.suggestionSorter = function(suggestions, query){
	var isFormula = this.isFormula(query);
	var isINCHI = this.isINCHI(query);
	var noNumbers = query.match(/\d+/g) == null;
	suggestions = this.filter(suggestions, query);
	
	var top_suggestions = [];
	var top_formulas = [];
	suggestions = $.map(suggestions, function(value, index){

		//Difficult to tell before 3
		if(query.length > 2){	
			//Prioritize Name
			if(noNumbers || !isFormula){
				if(query == value.name.substring(0,query.length).toLowerCase()){
					top_suggestions.push(value); 
					return null; 
				}
			}
		}

		//Prioritieze formulas by length
		if(query.length > 2 && isFormula){
			if(query == value.formula.substring(0,query.length).toLowerCase()){
				// top_formulas.push(value); 
				// return null; 
			}
		}

		return value; 
	});



	//Add top name suggestions by closest match
	if(top_suggestions.length){
		top_suggestions.sort(function(a,b){return b.name.length - a.name.length;});

		$.each(top_suggestions, function(index, obj){
			suggestions.unshift(obj);
		});
	}

	//Add top formula suggestions by closest match
	if(top_formulas.length){ 
		//Shortest formulas first
		top_formulas.sort(function(a,b){return b.formula.length - a.formula.length});

		$.each(top_formulas, function(index, obj){
			suggestions.unshift(obj);
		});
	}

	return suggestions.slice(0,this.results_size_max);
};

pqr.autocomplete.filter = function(suggestions, query){
	var isFormula = this.isFormula(query);
	var isINCHI = this.isINCHI(query);
	var noNumbers = query.match(/\d+/g) == null;
	// var noBS = 


	suggestions = $.map(suggestions, function(value, index){

		//Remove long names if they aren't formula or inchi
		if(!isINCHI && !isFormula && value.name.length > 20){ 
			// return null; 
		}

		//Length shortner
		if( value.name.length > 20 || value.name.match(/[,-]/g) == null){ 
			// return null; 
		}

		return value; 
	});

	return suggestions;
};

/**
 * Setup typeahead for autocomplete and suggested search
 * @return {[type]} [description]
 */
pqr.autocomplete.typeahead = function() {
	var data = auto_complete;

	this.engine = new Bloodhound({
		datumTokenizer: function(data) {
			// console.log(data); 
			var nameTokens = Bloodhound.tokenizers.whitespace(data.name);
			var formulaTokens = pqr.autocomplete.formulaTokenizer(data.formula);
			var synonymTokens = data.synonyms; //Already in an array
			var tagsTokens = data.tags; //Already in an array
			var inchiTokens = data.inchikey; //Just one value

			//Quickly disabled tokens
			// nameTokens = [];
			// formulaTokens = [];
			// synonymTokens = [];
			tagsTokens = []; //Producing too many results

			//Combine all of the tokens 
			return nameTokens.concat(formulaTokens).concat(synonymTokens).concat(tagsTokens).concat(inchiTokens);
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		local: auto_complete,
		identify: function(obj){return obj.inchikey},
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
		identify: function(obj){return obj.inchikey},
	});



	this.TypeAhead = $(this.input_selector).typeahead({
		hint: false,
		minLength: 1,
		classNames: {
			dataset: 'autocomplete-results',
			suggestion: 'suggestion',
		}
	}, {
		name: 'name',
		display: 'name',
		limit: 10000,
		source: function(query, cb) {
			pqr.autocomplete.engine.search(query, function(suggestions) {
                cb(pqr.autocomplete.suggestionSorter(suggestions, query.toLowerCase()));
            });
        },
		templates: {
			suggestion: function(data) {
				return pqr.autocomplete.renderHTML(data);
			}
		}
	});

	//If using the keyboard following links on select
	this.TypeAhead.bind('typeahead:select', function(ev, suggestion) {
		var element = $('.autocomplete-results [data-inchi="' + suggestion.inchikey + '"] a');
		if(element.length){
			console.log("HERE");
			element[0].click();
		}
	});

};

/**
 * Create an object to allow auto complete
 * @return Object An object containing data to determine search results
 */
pqr.autocomplete.getData = function() {
	var object = {};

	// return object;
	return this.placeholder_database;
};


/**
 * Render the HTML for one result to be added to the DOM
 * @param  {Object} result Parse the object and generate HTMl 
 * @return {String} HTML string to be added to the Dom
 */
pqr.autocomplete.renderHTML = function(result) {
	var formula = result.formula.replace(/(\d+)/g, "<sub>$1</sub>");

	var html = '<div data-inchi="' + result.inchikey + '">' +
		'<a href="/mol/' + result.inchikey + '">' +
		'<div class="col-md-2">' +
		'<img class="img-responsive" src="/static/data/svg/' + result.inchikey.substring(0, 2) + '/' + result.inchikey + '.svg" alt="preview">' +
		'</div> ' +
		'<div class="col-md-10">' +
		'<h3>' + result.name.substring(0, 36) + '</h3>' +
		'<h4>' +  formula + '</h4>' +
	'</div>' +
	'</a>' +
	'</div> ';
	
	return html;
};

