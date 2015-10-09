/**
 * @fileoverview Autocomplete search related functions 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */
pqr.autocomplete = {
    debug: true, 
    results_selector: '.autocomplete-results',
    input_selector: '.autocomplete-results',
    database: [],
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
    fast_suggestion_db: [
    	{
	    	input: ['c', 'ca'],
	    	name: "Carbon Monoxide", 
			formula: "CH2O",
			InChIKey: "UGFAIRIUMAVXCW-UHFFFAOYSA-N",
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
	this.database = this.getAutoCompleteObject();
	
	$('.autocomplete-search-form .search input').on('keyup', function(){
		pqr.autocomplete.findMatches($(this).val());
	});


	return true; 
};

/**
 * Create an object to allow auto complete
 * @return Object An object containing data to determine search results
 */
pqr.autocomplete.getAutoCompleteObject = function(){
	var object = {}; 

	return object;
};

/**
 * Find the best matches to suggest
 * @param  {String} input      String entered in the query so far
 * @param  {Integer} max_return Maximium amount of suggestions to return
 * @return {Array}            Array of objects to be updated on the dom 
 */
pqr.autocomplete.findMatches = function(input, max_return){
	//Case insensitive
	input = input.toLowerCase();

	var matches = [];

	if(input.length < 3){
		//Use a predefined list of suggestion that match the first two charceters
		// Array.prototype.push.apply(matches, this.find_fast_suggestions(input)); 
		suggestions = this.find_fast_suggestions(input); 
		matches = matches.concat(suggestions); 

	}
	else{
		//Formula Match (Try to check for just numbers first)
	

		//Find matched text from the front


		//Find matched text anywhere
		

		//Look at tags
	}



	
	


	
	
	
	


	
	


	


	//Sort matches or index (Must be very high performance)
	
	console.log("Current Matches: ", matches); 
	return matches; 
};

/**
 * Find matches using the fast_suggestion_db array of objects 
 * @param  {[type]} input [description]
 * @return {[type]}       [description]
 */
pqr.autocomplete.find_fast_suggestions = function(input){
	var results = []; 
	if(this.debug || pqr.debug) console.log("Check the value [" + input + "]");
	
	$.each(this.fast_suggestion_db, function(index, suggestion){
		$.each(suggestion.input, function(index, value){
			if(value == input){
				results.push(suggestion); 
			}
		});
	});


	 
	return results;
};


/**
 * Look at this result and previous results and determine how it should rank
 * 
 * @param  {[type]} result A potential candiate		
 * @return Integer        Some scale to determine it's relevancy (Current 0-100)
 */
pqr.autocomplete.precentMatchQuick = function(result){

	return 0;
};

/**
 * Look at this result MORE INDEPTH and previous results and determine how it should rank
 * 
 * @param  {[type]} result A potential candiate		
 * @return Integer        Some scale to determine it's relevancy (Current 0-100)
 */
pqr.autocomplete.precentMatchFull = function(result){

	return 0;
};

/**
 * Add the new elements to the DOM
 * @param  {Array} results Array of objects to update the dom
 * @return {[type]}         [description]
 */
pqr.autocomplete.updateDOM = function(results){
	$.each(results, function( index, value ) {
	  console.log(index, value);

	  $(this.results_selector).append(renderHTML(value));
	});

};


/**
 * Render the HTML for one result to be added to the DOM
 * @param  {Object} result Parse the object and generate HTMl 
 * @return {String} HTML string to be added to the Dom
 *
 * NOTE: this can be threaded
 */
pqr.autocomplete.renderHTML = function(result){
	var html = "<li>"; 



	html += "</li>"; 

	return html; 
};

