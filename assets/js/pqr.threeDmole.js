//Namespaces
var pqr = pqr || {};

pqr.htmlUtilities = pqr.htmlUtilities || {}; //General DOM maniplating and such mostly using jquery 
pqr.bindevents = pqr.bindevents || {}; //Any event binding should be done here if possible 
pqr.propertiesFormatter = pqr.propertiesFormatter || {}; //Functions to properly format various ascpets of the molecules  
pqr.typeahead = pqr.typeahead || {}; //Everything relating to typeahead plugin 

pqr.threeDMole = {
	all_viewers: [],
	data_type: 'mol2',
	default_style: 'stick',
	backgroundColor: 0xffffff,
	backgroundOpacity: 1.0,
	rotationTime: 9,
	rotationXDegree: 1, //How many degrees to move every rotationTime
	rotationYDegree: 1,
	showSurface: true
};


/**
 * Update viewers
 *
 * @param  {Object} config optional config to override default settings
 */
pqr.threeDMole.initializeViewers = function(config) {
	this.all_viewers = $3Dmol.viewers;

	$.each(this.all_viewers, function(index, viewer) {
		pqr.threeDMole.clearBackgrounds(viewer);
		pqr.threeDMole.rotate(viewer);
		pqr.threeDMole.toggleSurface(viewer);
	});

};

/**
 * Set all of the background color alpha channel to 0
 *
 * @param  {GLviewer}
 */
pqr.threeDMole.clearBackgrounds = function(viewer) {
	viewer.setBackgroundColor(this.backgroundColor, 0);
	viewer.resize();
	viewer.render();

	if (pqr.debug) console.log("Clearing Background: ", viewer);
}

/**
 * Rotate a molecule viewer
 *
 * @param  {GLViewer}
 */
pqr.threeDMole.rotate = function(viewer) {
	window.setInterval(function() {
		viewer.rotate(pqr.threeDMole.rotationYDegree, 'y');
		viewer.rotate(pqr.threeDMole.rotationXDegree, 'x');
		viewer.render();
	}, this.rotationTime, viewer);

	if (pqr.debug) console.log("Adding Rotation: ", viewer);
}

/**
 * Toggle the surface of this viewer
 *
 * @param  {GLViewer}
 */
pqr.threeDMole.toggleSurface = function(viewer) {

	if (pqr.debug) console.log("Removing Surface: ", viewer);

	this.removeSurface(viewer);


}

/**
 * Remove all of the surfaces for this viewere
 *
 * @param  {GLViewer}
 */
pqr.threeDMole.removeSurface = function(viewer) {
	viewer.removeAllSurfaces();
	viewer.render();
}

/**
 * Reset the viewer to the default zoom level
 *
 * @param  {GLViewer}
 */
pqr.threeDMole.resetView = function(viewer) {
	pqr.threeDMole.all_viewers[0].zoomTo();
}


/**
 *	Changet the layout style of selected viewer (currently just the first viewer)
 *		--Viewer must exist at this point !
 *
 */
pqr.threeDMole.changeStyle = function(newStyle) {
	var viewer = this.all_viewers[0]; //Currently only getting the first viewer that exists 
	if (viewer) {
		if (newStyle == "sphere") {
			viewer.setStyle({}, {
				sphere: {}
			});
		} else if (newStyle == "stick") {
			viewer.setStyle({}, {
				stick: {}
			});
		} else if (newStyle == "cross") {
			viewer.setStyle({}, {
				cross: {}
			});
		} else if (newStyle == "line") {
			viewer.setStyle({}, {
				line: {}
			});
		}

		viewer.render();
	}
};

/**
 *	Change whether or not to display the surface
 *
 *
 */
pqr.threeDMole.changeSurface = function(surface, viewer) {
	var viewer = $3Dmol.viewers[0]; //Currently only getting the first viewer that exists 
	if (viewer) {

		if (surface === true) { //We want to turn on the surface 

		} else { //Disable the surface 

		}

		if (newStyle == "sphere") {
			viewer.setStyle({}, {
				sphere: {}
			});
		} else if (newStyle == "stick") {
			viewer.setStyle({}, {
				stick: {}
			});
		} else if (newStyle == "cross") {
			viewer.setStyle({}, {
				cross: {}
			});
		} else if (newStyle == "line") {
			viewer.setStyle({}, {
				line: {}
			});
		}

		viewer.render();
	}
};



/**
 *	Attempt to get responsiveness working.
 *	Try redrawing the item over and over on width/height changes
 *		-Expensive function
 *
 */
pqr.threeDMole.activateResponsive = function() {
	console.log("Hello");
	console.log($3Dmol.viewers[0]);
	// pqr.threeDMole.updateContainerSize($("#molecule-properties").css("height")); //Check for the id
	// pqr.threeDMole.redraw($3Dmol.viewers[0]);

	// $(window).resize(function() { //Can be more efficient 
	// 	//For the main molecule page get the height of the molecule properties
	// 	pqr.threeDMole.updateContainerSize($("#molecule-properties").css("height")); //Check for the id
	// 	var viewer = $3Dmol.viewers[0];
	// 	pqr.threeDMole.redraw(viewer);
	// });

};

/**
 *	Change the height and width of this element and render it
 *	Doesn't seem to be neccessary but can play around with the zoom level
 */
pqr.threeDMole.redraw = function(viewer) {
	// viewer.resize();
	viewer.zoomTo(1);
	// viewer.render();
	// console.log(viewer); 
}



/**
 *
 *
 */
pqr.threeDMole.updateContainerSize = function(height) {
	// $("#molecule-viewer canvas").css("height", height);
	// $("#molecule-viewer div").css("height", height);
}