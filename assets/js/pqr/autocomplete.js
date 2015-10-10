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
    results: [], //Hold the results that are currently displayed
    database: [],
    has_results: false, 
    //Temporary database
    placeholder_database: [
    	{	
    		name: "Carbon Monoxide", 
    		formula: "CH2O",
    		InChIKey: "UGFAIRIUMAVXCW-UHFFFAOYSA-N",
    		prefix: "UG", //Not neccessary
    	},
    	{	
    		name: "Carbonic Acid", 
    		formula: "CO3",
    		InChIKey: "BVKZGUZCCUSVTD-UHFFFAOYSA-N",
    		prefix: "BV", //Not neccessary
    	},
    	{	
    		name: "Dimethyl Carbonate", 
    		formula: "C3H6O3",
    		InChIKey: "IEJIGPNLZYLLBP-UHFFFAOYSA-N",
    		prefix: "IE", //Not neccessary
    	},
    	{	
    		name: "4,6-O-[(1R)-1-Carboxyethylidene]-α-D-Galactopyranose", 
    		formula: "CH2O",
    		InChIKey: "UGFAIRIUMAVXCW-UHFFFAOYSA-N",
    		prefix: "UG", //Not neccessary
    	}
    ],
    //Load some default suggestions to suggest on short inputs 
    fast_suggestion_db: [
    	{
	    	name: 'Ethyl Carbonate', 
			formula: "C5H10O3",
			InChIKey: "OIFBSDVPJOWBCH-UHFFFAOYSA-N",
		},
		{
	    	name: "Iron Pentacarbonyl", 
			formula: "C5FeO5",
			InChIKey: "FYOFOKCECDGJBF-UHFFFAOYSA-N",
		},
		{
	    	name: "Carbon Dioxide", 
			formula: "CH2O",
			InChIKey: "UGFAIRIUMAVXCW-UHFFFAOYSA-N",
		},
		    	{
	    	name: "Hydrofluoric Acid", 
			formula: "FH",
			InChIKey: "KRHYYFGTRYWZRS-UHFFFAOYSA-N",
		},
		{
	    	name: "Boric Acid", 
			formula: "BH3O3",
			InChIKey: "KGBXLFKZBHKPEV-UHFFFAOYSA-N",
		},
		{
	    	name: "Bta", 
			formula: "C6H5N3",
			InChIKey: "QRUDEWIWKLJBPS-UHFFFAOYSA-N",
		},
		{	
    		name: "Almokalant",
    		formula: "C18H28N2O3S",
    		InChIKey: "ZMHOBBKJBYLXFR-MZNJEOGPSA-N",
    	}
    ]
};


/**
 * 
 * @return {[type]} [description]
 */
pqr.autocomplete.init = function(input_selector){
	$(this.results_selector).slideUp();
	var input_selector = '.autocomplete-search-form .search input';
	this.typeahead(); 
};


/**
 * Tokenize a formula by breaking into it's molecular components
 * @param  {String} formula string representing a formula
 * @return {ARray}         tokenized results
 */
pqr.autocomplete.formulaTokenizer = function(formula){
	 formula = formula.toLowerCase();
	 formula = formula.replace(/([a-z])/g, ' $1').trim()
	 return formula ? formula.split(/\s+/) : [];
};

pqr.autocomplete.typeahead = function(){
	var data = pqr.autocomplete.fast_suggestion_db;

	this.engine = new Bloodhound({
		datumTokenizer: function(data){
			var nameTokens = Bloodhound.tokenizers.whitespace(data.name);
			var formulaTokens = pqr.autocomplete.formulaTokenizer(data.formula);

			return nameTokens.concat(formulaTokens);
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		local: pqr.autocomplete.fast_suggestion_db
	});

	this.TypeAhead = $(this.input_selector).typeahead({
		hint: false,
		minLength: 1,
		classNames: {
			dataset: 'autocomplete-results',
			suggestion: 'suggestion',
			// selectable: 'Typeahead-selectable'
		}
	}, {
		name: 'name',
		display: 'name',
		limit: 1000,
		source: this.engine.ttAdapter(),
		templates: {
			suggestion: function(data) { 
				return pqr.autocomplete.renderHTML(data);
				// return '<span class="hidden" data-inchi="' + data.InChIKey +'"></span>';
			}
		}

	});

	// $(this.input_selector).bind('typeahead:render', function() {
	// 	var suggestions = Array.prototype.slice.call(arguments);
	// 	suggestions.shift();
	// 	pqr.autocomplete.checkMatches(suggestions);

	// 	if(suggestions.length == 0){
	// 		pqr.autocomplete.hideDropDown();
	// 	}
	// });

	// $(this.input_selector).on('keyup', function() {
	// 	if($(this).val().length == 0){
	// 		pqr.autocomplete.hideDropDown();
	// 	}
	// });

	//Watch the results changing
	// $('.tt-dataset-results').contentChange(function(){
		// console.log($(this).children('span').length);

		// $.each($(this).children('span'))
	// });

	

};

/**
 * Create an object to allow auto complete
 * @return Object An object containing data to determine search results
 */
pqr.autocomplete.getData = function(){
	var object = {}; 

	// return object;
	return this.placeholder_database;
};


/**
 * Check to see which matches are valid
 * @param  {[type]} potential_matches Possible matches
 * @return {[type]}                   [description]
 */
pqr.autocomplete.checkMatches = function(potential_matches){
	var new_results = [];
	var all_results = [];

	$.each(potential_matches, function(index, value) {
	  //Add the value to the list
	  if(!pqr.autocomplete.inList(value)){
	  	new_results.push(value); 
	  }
	  all_results.push(value); 
	});

	//Determine the items that will be removed
	var toRemove = $.map(this.results, function(el){
	  return $.inArray(el, all_results) < 0 ? el : null;
	});

	this.removeItems(toRemove);
	this.results = all_results; 
	this.addNewItems(new_results);
	return new_results; 
};


/**
 * Determines if the item is already in the list or not
 * @param  Object result Potential item
 * @return Boolean        Is the result in the list
 */
pqr.autocomplete.inList = function(result){
	if($(this.results_selector + ' [data-inchi="' + result.InChIKey + '"]').length){
		return true; 
	}
	else{
		return false;
	}
};

/**
 * Remove the items from the DOM that don't belong anymore 
 * 
 * @param  Array toRemove Items to be removed
 */
pqr.autocomplete.removeItems = function(toRemove){
	$.each(toRemove, function(index, value){
		$(pqr.autocomplete.DOMFindByInchi(value.InChIKey)).removeAttr('data-inchi').fadeOut(200, function(){$(this).remove()}); 
	});

	//All elements removed
	if(toRemove.length == this.results.length){
		pqr.autocomplete.hideDropDown();
		this.has_results = false; 
	}
};

/**
 * Add new items to the DOM
 */
pqr.autocomplete.addNewItems = function(new_results){
	if(!this.has_results){
		this.showDropDown(); 
		this.has_results = true; 
	}

	$.each(new_results, function(index, value){
		$(pqr.autocomplete.results_selector).append(pqr.autocomplete.renderHTML(value));
	});
};


/**
 * Return a JQuery object in the DOM that has the data-inchi attribute
 * @param {[type]} inchi [description]
 */
pqr.autocomplete.DOMFindByInchi = function(inchi){
	return $(this.results_selector + ' [data-inchi="' + inchi + '"]');
};

/**
 * Hide the dropdown 
 * 
 */
pqr.autocomplete.hideDropDown = function(empty){
	$(pqr.autocomplete.results_selector).empty();
	$(pqr.autocomplete.results_selector).hide(200);
	this.has_results = false;
};


/**
 * Show the dropdown 
 * 
 */
pqr.autocomplete.showDropDown = function(){
	$(this.results_selector).slideDown(100);
};






/**
 * Render the HTML for one result to be added to the DOM
 * @param  {Object} result Parse the object and generate HTMl 
 * @return {String} HTML string to be added to the Dom
 *
 * NOTE: this can be threaded
 */
pqr.autocomplete.renderHTML = function(result){
	var html = '<div data-inchi="' + result. InChIKey + '">' +  
        '<a href="http://google.com">' +
            '<div class="col-xs-2">' +
                '<img class="img-responsive" src="/static/data/svg/' + result.InChIKey.substring(0, 2) + '/' + result.InChIKey + '.svg" alt="preview">' +
            '</div> ' +
            '<div class="col-xs-9">' +
                '<h3>' + result.name + '</h3>' +
                '<h4>' + result.formula.replace(/(\d+)/g, "<sub>$1</sub>"); + '</h4>' +
            '</div>' +
        '</a>' +
    '</div> ';

	return html; 
};

