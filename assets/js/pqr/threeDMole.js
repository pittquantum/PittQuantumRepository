/**
 * @fileoverview PQR related 3Dmol manipulations
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */

pqr.threeDMole = {
	all_viewers: [],
	rotation_timers: [],
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
pqr.threeDMole.initViewers = function(config) {
	this.all_viewers = $3Dmol.viewers;

	$.each(this.all_viewers, function(index, viewer) {
		pqr.threeDMole.clearBackgrounds(viewer);
		// pqr.threeDMole.rotate(viewer);
	});
};


/**
 * Set all of the background color alpha channel to 0. Cannot be done
 * with data attributes.
 *
 * @param  {GLviewer}
 */
pqr.threeDMole.clearBackgrounds = function(viewer) {
	viewer.setBackgroundColor(this.backgroundColor, 0);
	viewer.resize();
	viewer.render();

	if (pqr.debug) console.log("Clearing Background: ", viewer);
};

/**
 * Rotate a molecule viewer
 *
 * @param  {GLViewer}
 */
pqr.threeDMole.rotate = function(viewer) {
	var rotation_timers = window.setInterval(function() {
		viewer.rotate(pqr.threeDMole.rotationYDegree, 'y');
		viewer.rotate(pqr.threeDMole.rotationXDegree, 'x');
		viewer.render();
	}, this.rotationTime, viewer);

	this.rotation_timers.push(rotation_timers);

	if (pqr.debug) console.log("Adding Rotation: ", viewer);
};

/**
 * Toggle the rotation of the viewer. Only hanldes one viewer.
 *
 * @param  {GLViewer} the viewer to toggle the rotation
 */
pqr.threeDMole.toggleRotation = function(viewer) {
	var rotation_timer = this.rotation_timers.pop();
	if (pqr.debug) console.log("The rotation time is: ", rotation_timer);
	if (rotation_timer !== undefined) {
		if (pqr.debug) console.log("Rotation timer not null. Clearing interval");
		clearInterval(rotation_timer);
	} else {
		if (pqr.debug) console.log("Rotation timer is null. Restarting rotation");
		this.rotate(this.all_viewers[0]);
	}
};

/**
 * Update the surface color to the correct value 
 * 
 * @param  {GLViewer} the viewer to set the surfaceColor on 
 */
pqr.threeDMole.setSurfaceColor = function(viewer) {

};

/**
 * Toggle the surface of this viewer.
 *
 * @param  {GLViewer}
 */
pqr.threeDMole.toggleSurface = function(viewer) {
	viewer = typeof viewer !== 'undefined' ? viewer : this.all_viewers[0];

	if (pqr.debug) console.log("Toggling the surface of ", viewer);

	this.removeSurface(viewer);
};

/**
 * Remove all of the surfaces for this viewere
 *
 * @param  {GLViewer}
 */
pqr.threeDMole.removeSurface = function(viewer) {
	viewer.removeAllSurfaces();
	viewer.render();
	if (pqr.debug) console.log("Surface Removed");
};

/**
 * Reset the viewer to the default zoom level
 *
 * @param  {GLViewer}
 */
pqr.threeDMole.resetView = function(viewer) {
	pqr.threeDMole.all_viewers[0].zoomTo();
};


/**
 * Change the layout style of the selected viewer
 *
 * @param  {String} newStyle - the type of style to change this viewer to
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