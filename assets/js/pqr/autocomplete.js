/**
 * @fileoverview Autocomplete search related functions 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */
pqr.autocomplete = {
    debug: true, 
    function_queue: [], //Array of arrays of function calls
    last_input: '', 
    input_selector: '.autocomplete-search-form .search input', 
    results_selector: '.autocomplete-results', 
    results_size_max: 10, //The limit of how many results to show in the list
    results: [], //Hold the results that are currently displayed
    database: [],
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
    fast_suggestion_length: 2, //The max length to look for fast suggestions

    //Load some default suggestions to suggest on short inputs 
    fast_suggestion_db: [
    	{
	    	input: ['c', 'ca'],
	    	name: "Carbon Monoxide", 
			formula: "CH2O",
			InChIKey: "UGFAIXRIUMAVXCW-UHFFFAOYSA-N",
			prefix: "UG", //Not neccessary
		},
		{
	    	input: ['c', 'ca'],
	    	name: "Carbon Fuck", 
			formula: "CH2O",
			InChIKey: "UGFAIRIUMAVXDCW-UHFFFAOYSA-N",
			prefix: "UG", //Not neccessary
		},
		{
	    	input: ['c', 'ca'],
	    	name: "Carbon Dioxide", 
			formula: "CH2O",
			InChIKey: "UGFAIRIUMAVXCW-UHFFFAOYSA-N",
			prefix: "UG", //Not neccessary
		},
		    	{
	    	input: ['c', 'cd'],
	    	name: "CDarbon Monoxide", 
			formula: "CH2O",
			InChIKey: "UGFeAIXRIUMAVXCW-UHFFFAdOYSA-N",
			prefix: "UG", //Not neccessary
		},
		{
	    	input: ['c', 'cd'],
	    	name: "CDarbon Fuck", 
			formula: "CH2O",
			InChIKey: "UGFAIRIUMAVXDCW-UHFFFAgOYSA-N",
			prefix: "UG", //Not neccessary
		},
		{
	    	input: ['c', 'cb'],
	    	name: "CBarbon Dioxide", 
			formula: "CH2O",
			InChIKey: "UGFAIRIfUMAVXCW-UHFFFAOYSA-N",
			prefix: "UG", //Not neccessary
		},
		{	
    		input: ['d', 'di'],
    		name: "Dimethyl Carbonate", 
    		formula: "C3H6O3",
    		InChIKey: "IEJIGPNLZYLLBP-UHFFFAOYSA-N",
    		prefix: "IE", //Not neccessary
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

	this.database = this.getAutoCompleteObject();
	pqr.bindevents.check_autocomplete(this.input_selector);

	return true; 
};

/**
 * Cancel everything for a new item
 * @return {[type]} [description]
 */
pqr.autocomplete.interrupt = function(){

};

/**
 * Create an object to allow auto complete
 * @return Object An object containing data to determine search results
 */
pqr.autocomplete.getAutoCompleteObject = function(){
	var object = {}; 

	// return object;
	return this.placeholder_database;
};

/**
 * Find the best matches to suggest
 * @param  {String} input      String entered in the query so far
 * @param  {Integer} max_return Maximium amount of suggestions to return
 * @return {Array}            Array of objects to be updated on the dom 
 */
pqr.autocomplete.findMatches = function(input, max_return){
	//Don't run if the input is the same
	input = input.toLowerCase();
	if(this.last_input == input){
		this.last_input = input;

		if(!this.results.length){
			this.hideDropDown();
		}

		return false; 
	}
	this.last_input = input; 

	//If input contains a number 
	var regex_has_number = /\d/;
	var contains_number = regex_has_number.test(input); 

	var matches = [];

	//Quick Suggestions
	if(!contains_number && input.length <= this.fast_suggestion_length){
		//Use a predefined list of suggestion that match the first two charceters
		// Array.prototype.push.apply(matches, this.find_fast_suggestions(input)); 
		suggestions = this.find_fast_suggestions(input); 
		matches = matches.concat(suggestions);  
	}
	else{
		//Formula Match 
		if(contains_number){
			matches.concat(this.find_formula_matches(input));
		}
		
		//Find matched text from the front
		matches.concat(this.find_matches_order(input));


		//Find matched text anywhere
		matches.concat(this.find_matches_any(input));

		//Look at tags
		
	}

	//Sort matches or index (Must be very high performance)
	var new_results = this.checkMatches(matches);
	this.addNewItems(new_results); 



	if(this.results.length > 0){
		this.showDropDown();
	}
	else{
		if(input.length == 0){
			this.hideDropDown(true);
		}
		else{
			this.hideDropDown();
		}
	}

	//Special case
	

	

	return true; 
};

/**
 * Find matches using the fast_suggestion_db array of objects 
 * @param  String input value in search box
 * @return Array       results
 */
pqr.autocomplete.find_fast_suggestions = function(input){
	var results = []; 
	// if(this.debug || pqr.debug) console.log("Check the value [" + input + "]");
	
	//More efficient way (Consider Map and Reduce)
	$.each(this.fast_suggestion_db, function(index, suggestion){
		$.each(suggestion.input, function(index, value){
			if(value == input){
				suggestion.percent_match = -1; //Quick match
				results.push(suggestion); 
			}
		});
	});

	return results;
};


/**
 * Find matches based on Formula
 * @param  String input value in search box
 * @return Array       results
 */
pqr.autocomplete.find_formula_matches = function(input){

};

/**
 * Find matches from in order
 * @param  String input value in search box
 * @return Array       results
 */
pqr.autocomplete.find_matches_order = function(input){

};

/**
 * Find matches anywhere
 * @param  String input value in search box
 * @return Array       results
 */
pqr.autocomplete.find_matches_any = function(input){

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
	}
};

/**
 * Add new items to the DOM
 */
pqr.autocomplete.addNewItems = function(new_results){
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

	// $(this.results_selector + ' li').fadeOut(200, function(){
	// 	$(this).remove(); 

	// 	$(pqr.autocomplete.results_selector).hide(200, function(){
 //        	$(pqr.autocomplete.results_selector).empty();
 //        });
	// });

};


/**
 * Show the dropdown 
 * 
 */
pqr.autocomplete.showDropDown = function(){
	$(this.results_selector).slideDown(100);
};




pqr.autocomplete.typeahead = function(){

};

/**
 * Render the HTML for one result to be added to the DOM
 * @param  {Object} result Parse the object and generate HTMl 
 * @return {String} HTML string to be added to the Dom
 *
 * NOTE: this can be threaded
 */
pqr.autocomplete.renderHTML = function(result){
	var html = '<li data-inchi="' + result. InChIKey + '">' +  
        '<a href="#">' +
            '<div class="col-xs-2">' +
                '<img class="img-responsive" src="/static/data/svg/' + result.InChIKey.substring(0, 2) + '/' + result.InChIKey + '.svg" alt="preview">' +
            '</div> ' +
            '<div class="col-xs-9">' +
                '<h3>' + result.name + '</h3>' +
                '<h4>' + result.formula + '</h4>' +
            '</div>' +
        '</a>' +
    '</li> ';

	return html; 
};

