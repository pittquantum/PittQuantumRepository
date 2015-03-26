//Loaded on everypage

//Namespaces (Might have to be on every js page)
var pqr = pqr || {};
pqr.htmlUtilities = pqr.htmlUtilities || {}; //General DOM maniplating and such mostly using jquery 
pqr.bindevents = pqr.bindevents || {}; //Any event binding should be done here if possible 
pqr.propertiesFormatter = pqr.propertiesFormatter || {}; //Functions to properly format various ascpets of the molecules  
pqr.threeDMole = pqr.threeDMole || {}; //Everything relating to 3dmol FILE: pqr.threedmol.js
pqr.typeahead = pqr.typeahead || {}; //Everything relating to typeahead plugin 

$(document).ready(function() {
	
	//All Pages 
	pqr.htmlUtilities.toolTipOptIn(); 
	pqr.htmlUtilities.fontSizeChanger(0); //Restore previous values 
	pqr.bindevents.fontSizeChanger("#reducefont", "#increasefont", "#defaultfont");
	pqr.typeahead.activate("#header-molecule-search");

	//Home Page
	if($("#main").hasClass("page-home")){
		pqr.typeahead.activate("#molec-query");
	}

	//Browse Page
	if($("#main").hasClass("page-browse")){
		pqr.typeahead.activate("#molec-query");
		pqr.htmlUtilities.toolTipOptIn(); 
	}


	//Molecule Page
	if($("#main").hasClass("page-molecule")){
		
   	 	pqr.htmlUtilities.updateMoleculeView();

	    //Binding 
	    pqr.bindevents.moleculeSizeChanger(); 

	    //3D Mole Stuff 
    	// pqr.threeDMole.activateResponsive();
	}

  
});	

/*************************Bind Events*************************/

/**
 * 	Binds the fontSize changer events to the fontSizeChanger function in 
 *		pqr.htmlUtilities  
 * 	@param {string} reduceSelector the selector for the reduce fontsize
 * 	@param {string} increaseSelector the selector for the increase fontsize
 */
pqr.bindevents.fontSizeChanger = function(reduceSelector, increaseSelector, defaultSelctor){
	$(reduceSelector).on("click", function(event){
		event.preventDefault();
		pqr.htmlUtilities.fontSizeChanger(-1); //-1 = reduce
	});

	$(increaseSelector).on("click", function(event){
		event.preventDefault();
		pqr.htmlUtilities.fontSizeChanger(1); //1 = increase
	});

	$(defaultSelctor).on("click", function(event){
		event.preventDefault();
		pqr.htmlUtilities.fontSizeChanger(2); //2 = Default Value 
	});
}

/**
 * 	Binds the Molecule size changer events between simple and detailed by 
 * 	adding classes. 
 * 
 */
pqr.bindevents.moleculeSizeChanger = function(){
	$("#simpleView").on("click", function(event){
		event.preventDefault();
		$("#molecule-details table .detailed").addClass("hidden"); 
		if (Modernizr.localstorage) localStorage.setItem("moleculeLayout", "simple");
	});

	$("#detailedView").on("click", function(event){
		event.preventDefault();
		$("#molecule-details table .detailed").removeClass("hidden"); 
		if (Modernizr.localstorage) localStorage.setItem("moleculeLayout", "detailed");
	});
}



/*************************Properties Formatter*************************/

/**
 * 	Correctly formats the molecule formula for display. Not implemneted 
 *		as it might not be neccessary. 
 * 	@param {string} formulaString Molecule formaula string (ex: C7H14O2)
 * 	@return {string} The string with proper subscripts (ex C<sub>7</sub>)
 */
pqr.propertiesFormatter.formula = function(formulaString){

}



/*************************HTML UTILTIES*************************/

/** 
 *	Adds the click events to the links and checks local storage
 *	to maintain previous set layout. 
 *	
 */
pqr.htmlUtilities.updateMoleculeView = function(){
	if($("#simpleView").length && $("#detailedView").length){
		//Check the localStorage for the moleculeLayout using modernizer
		if (Modernizr.localstorage){
			if(localStorage.getItem("moleculeLayout") == "detailed") $("#molecule-details table .detailed").removeClass("hidden"); //Probably not necessary 
			else $("#molecule-details table .detailed").addClass("hidden"); 
		}
	}
}

/**
 *	Activate bootstrap tooltips. 
 *		-Only do this on pages that tooltips exist for performance 
 */
pqr.htmlUtilities.toolTipOptIn = function(){
 	$('[data-toggle="tooltip"]').on("click", function(event){event.preventDefault();}); 
 	$(function() {
 		 $('[data-toggle="tooltip"]').tooltip(); //Opt in to tool tips 
 	});

     

 }

/**
 * 	Allows you to increase or decrease the body font size  
 *		Only should be used when pixels are the unit. 
 * 	@param {int} type either 0 = "init", 1 = "increase", -1 = "decrease", 2 = default
 * 	
 */
pqr.htmlUtilities.fontSizeChanger = function(type){
 	var DEFAULTSIZE = "14px"; 
 	var localstore = false; //Is localstorage avaiable 
 	var currentBaseSize, newBaseSize;
 	
 	if (Modernizr.localstorage) localstore = true; 

	if(type == 0){//Initizliaze by restoring the users settings  
	 	//Check the localStorage for the value 
		if(localstore){
			if(localStorage.getItem("baseFontSize") !== null){ //If set
				newBaseSize = localStorage.getItem("baseFontSize"); //Store the whole value e.g. = "14px" 
			}
		}
	}
	else{
		currentBaseSize = $("body").css("font-size");
		if(type == 1){//Increasing font
			newBaseSize = (parseInt(currentBaseSize) + 2).toString() + "px"; //Add two and concat "px"
		}
		else if(type == -1){//Decreasing font
			if(parseInt(currentBaseSize) >= 2){
				newBaseSize = (parseInt(currentBaseSize) - 2).toString() + "px"; //Subtract two and concat "px"
			}
		}
		else if(type == 2){ //Default Value 
			newBaseSize = DEFAULTSIZE;
		}
	}


	//Change the fontsize of the body tag
	$("body").css("font-size", newBaseSize);

	//Add the new value to the localstorage if avaiable 
	if(localstore){
		localStorage.setItem("baseFontSize", newBaseSize)
	}
}

