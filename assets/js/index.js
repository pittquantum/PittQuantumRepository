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
	if ($("#main").hasClass("page-home")) {
		// pqr.typeahead.activate("#molec-query");

		pqr.threeDMole.initializeViewers();


		pqr.bindevents.moleculeSearch('#home-molecule-query .molecule-query');
		if (pqr.debug) console.log("Home Page");
	}

	//Browse Page
	if ($("#main").hasClass("page-browse")) {
		// pqr.typeahead.activate("#molec-query");
		pqr.htmlUtilities.toolTipOptIn();


		pqr.qrgen.addQRCode("#qrcode", "www.google.com");


		pqr.bindevents.moleculeSearch('#splash-molecule-search .molecule-query');
		if (pqr.debug) console.log("Browse Page");
	}


	//Molecule Page
	if ($("#main").hasClass("page-molecule")) {
		// pqr.threeDMole
		pqr.threeDMole.initializeViewers();

		pqr.htmlUtilities.updateMoleculeView();

		//Binding 
		pqr.bindevents.moleculeSizeChanger();
		pqr.bindevents.moleculeStyleChanger();
		pqr.bindevents.moleculeReset('#reset-molecule');


		//2 = Default Value 
		pqr.qrgen.addQRCode("#qrcode", pqr.htmlUtilities.getINCHIKey());



	}


});