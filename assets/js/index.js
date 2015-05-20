//Loaded on everypage

//Namespaces (Might have to be on every js page)
var pqr = pqr || {
	debug: true //Show debugging info in the console if true 
};
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
	// pqr.typeahead.activate("#header-molecule-search");
	pqr.bindevents.moleculeSearch('.navbar-form .molecule-query');
	pqr.htmlUtilities.checkWebGL(); 


	//Home Page
	if($("#main").hasClass("page-home")){
		// pqr.typeahead.activate("#molec-query");
		pqr.bindevents.moleculeSearch('#home-molecule-query .molecule-query'); 
		if(pqr.debug) console.log("Home Page"); 
	}
	
	//Browse Page
	if($("#main").hasClass("page-browse")){
		// pqr.typeahead.activate("#molec-query");
		pqr.htmlUtilities.toolTipOptIn();


		pqr.qrgen.addQRCode("#qrcode", "www.google.com"); 


		pqr.bindevents.moleculeSearch('#splash-molecule-search .molecule-query');
		if(pqr.debug) console.log("Browse Page"); 
	}


	//Molecule Page
	if($("#main").hasClass("page-molecule")){
		
   	 	pqr.htmlUtilities.updateMoleculeView();

	    //Binding 
	    pqr.bindevents.moleculeSizeChanger(); 
	    pqr.bindevents.moleculeStyleChanger(); 




	    //2 = Default Value 
	    pqr.qrgen.addQRCode("#qrcode", pqr.htmlUtilities.getINCHIKey());



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


/**
 * 	Binds the Molecule style changer events to the buttons to change between 
 * 		spheres, lines, or crosses
 * 
 */
pqr.bindevents.moleculeStyleChanger = function(){
	
	if($('#changeStyleSphere').length){
		$('#changeStyleSphere').on("click", function(event){
			event.preventDefault();
			pqr.threeDMole.changeStyle("sphere");
			if (Modernizr.localstorage) localStorage.setItem("moleculeViewerlayout", "spheres");
		});
	}


	if($('#changeStyleLine').length){
		$('#changeStyleLine').on("click", function(event){
			event.preventDefault();
			pqr.threeDMole.changeStyle("line");
			if (Modernizr.localstorage) localStorage.setItem("moleculeViewerlayout", "lines");
		});
	}

	if($('#changeStyleCross').length){
		$('#changeStyleCross').on("click", function(event){
			event.preventDefault();
			pqr.threeDMole.changeStyle("cross");
			if (Modernizr.localstorage) localStorage.setItem("moleculeViewerlayout", "crosses");
			 
		});
	}	

	if($('#changeStyleStick').length){
		$('#changeStyleStick').on("click", function(event){
			event.preventDefault();
			pqr.threeDMole.changeStyle("stick");
			if (Modernizr.localstorage) localStorage.setItem("moleculeViewerlayout", "sticks");
		});
	}
}

/**
 * 	Binds the Molecule surface changer to the proper button. 
 * 		s
 * 
 */
pqr.bindevents.moleculeSurfaceChanger = function(){
	if($('#surfaceSwitch').length){
		$('#surfaceSwitch').on("click", function(event){
			event.preventDefault();

			pqr.threeDMole.changeSurface(true);
			if (Modernizr.localstorage) localStorage.setItem("moleculeViewerSurface", "true");
		});
	}

}


/**
 * 	Binds the Molecule style changer events to the buttons to change between 
 * 		spheres, lines, or crosses
 * 
 */
 pqr.bindevents.moleculeSearch = function(selector){
 	

 	if($(selector).length){

 		if(pqr.debug) console.log("selctor exists"); 
 		$(selector).on("click", function(event){
			//Get the query from the input box (parent, prev)
			var query = $(this).parent().prev().val();
			// console.log(query); 

			//Get the base URL and redirect 
			if (!location.origin) location.origin = location.protocol + "//" + location.host;
			window.location = location.origin + "/browse/" + encodeURIComponent(query);
			
			event.preventDefault();
		});
 	}
 }


