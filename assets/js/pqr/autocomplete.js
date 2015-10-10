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
	var input_selector = '.autocomplete-search-form .search input';
	this.typeahead();
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
 * Setup typeahead for autocomplete and suggested search
 * @return {[type]} [description]
 */
pqr.autocomplete.typeahead = function() {
	var data = auto_complete;

	this.engine = new Bloodhound({
		datumTokenizer: function(data) {
			var nameTokens = Bloodhound.tokenizers.whitespace(data.name);
			var formulaTokens = pqr.autocomplete.formulaTokenizer(data.formula);


			return nameTokens.concat(formulaTokens);
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		local: auto_complete
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
		limit: 10,
		source: this.engine.ttAdapter(),
		templates: {
			suggestion: function(data) {
				return pqr.autocomplete.renderHTML(data);
			}
		}
	});

	
	//If using they keyboard following links on select
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
		'<div class="col-xs-2">' +
		'<img class="img-responsive" src="/static/data/svg/' + result.inchikey.substring(0, 2) + '/' + result.inchikey + '.svg" alt="preview">' +
		'</div> ' +
		'<div class="col-xs-9">' +
		'<h3>' + result.name.substring(0, 36) + '</h3>' +
		'<h4>' +  formula + '</h4>' +
	'</div>' +
	'</a>' +
	'</div> ';
	
	return html;
};