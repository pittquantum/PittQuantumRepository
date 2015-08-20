/**
 * @fileoverview Any event binding functions.
 *  
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */

/**
 * Bind the events to the proper font switching buttons for web accessibility. 
 * 
 */
pqr.bindevents.bindFontSwitchers = function() {
	var increaseButtonSelector = "#increasefont";
	var decreaseButtonSelector = "#reducefont";
	var resetButtonSelector = "#defaultfont";

	$(increaseButtonSelector).on("vclick", function(event) {
		event.preventDefault();
		pqr.htmlUtilities.updateFont(1);
	});

	$(decreaseButtonSelector).on("vclick", function(event) {
		event.preventDefault();
		pqr.htmlUtilities.updateFont(-1);
	});

	$(resetButtonSelector).on("vclick", function(event) {
		event.preventDefault();
		pqr.htmlUtilities.updateFont(0);
	});
};


/**
 * Reset the zoom level of the viewer
 *
 * @param  {String} selector an html selector to bind the reset button
 */
pqr.bindevents.moleculeReset = function(selector) {
	if ($(selector).length) {
		$(selector).on("vclick", function(event) {
			event.preventDefault();
			pqr.threeDMole.resetView();
			htmlutilities.bootstrapFeedback("Molecule viewer reset", "feedback", "fa-crosshairs");
		});
	}
};

/**
 * Toggle rotation of the current viewer
 *
 * @param  {String} selector an html selector to bind to a toggle rotation button
 */
pqr.bindevents.moleculeToggleRotation = function(selector) {
	if ($(selector).length) {
		$(selector).on("vclick", function(event) {
			event.preventDefault();
			pqr.threeDMole.toggleRotation();
			var toggle = $(this).children();

			if (toggle.hasClass('fa-toggle-on')) {
				toggle.removeClass('fa-toggle-on');
				toggle.addClass('fa-toggle-off');
				htmlutilities.bootstrapFeedback("Rotation deactivated", "feedback", "fa-refresh");
			} else {
				toggle.removeClass('fa-toggle-off');
				toggle.addClass('fa-toggle-on');
				htmlutilities.bootstrapFeedback("Rotation activated", "feedback", "fa-refresh");
			}
		});
	}
};

/**
 *	Handle the clickng of detailed and simple layouts and update
 * 	the local storate to reflect the changes. 
 * 	
 */
pqr.bindevents.propertiesViewerHandler = function() {
	$("#simpleView").on("vclick", function(event) {
		event.preventDefault();
		$("#molecule-details table .detailed").fadeOut('fast');
		if (pqr.features.localstorage) localStorage.setItem("moleculeLayout", "simple");
			htmlutilities.bootstrapFeedback("Switched to simple view", "feedback", "fa-desktop");
	});

	$("#detailedView").on("vclick", function(event) {
		event.preventDefault();
		$("#molecule-details table .detailed").removeClass('hidden');
		$("#molecule-details table .detailed").fadeIn('fast');
		if (pqr.features.localstorage) localStorage.setItem("moleculeLayout", "detailed");
			htmlutilities.bootstrapFeedback("Switched to detailed view ", "feedback", "fa-desktop");
	});
};


/**
 * Binds the buttons to change the style of the molecule beeweten spheres, lines or crosses. 
 * 
 */
pqr.bindevents.moleculeStyleChanger = function() {

	if ($('.changeStyleSphere').length) {
		$('.changeStyleSphere').on("vclick", function(event) {
			event.preventDefault();
			pqr.threeDMole.changeStyle("sphere");
			// if (pqr.features.localstorage) localStorage.setItem("moleculeViewerlayout", "spheres");
			htmlutilities.bootstrapFeedback("Switched to sphere display ", "feedback", "fa-desktop");
		});
	}


	if ($('.changeStyleLine').length) {
		$('.changeStyleLine').on("vclick", function(event) {
			event.preventDefault();
			pqr.threeDMole.changeStyle("line");
			// if (pqr.features.localstorage) localStorage.setItem("moleculeViewerlayout", "lines");
			htmlutilities.bootstrapFeedback("Switched to line display ", "feedback", "fa-desktop");
		});
	}

	if ($('.changeStyleCross').length) {
		$('.changeStyleCross').on("vclick", function(event) {
			event.preventDefault();
			pqr.threeDMole.changeStyle("cross");
			// if (pqr.features.localstorage) localStorage.setItem("moleculeViewerlayout", "crosses");
			htmlutilities.bootstrapFeedback("Switched to cross display ", "feedback", "fa-desktop");
		});
	}

	if ($('.changeStyleStick').length) {
		$('.changeStyleStick').on("vclick", function(event) {
			event.preventDefault();
			pqr.threeDMole.changeStyle("stick");
			// if (pqr.features.localstorage) localStorage.setItem("moleculeViewerlayout", "sticks");
			htmlutilities.bootstrapFeedback("Switched to stick display ", "feedback", "fa-desktop");
		});
	}
};

/**
 * Deactive the surface of the viewer.
 *
 * @param  {String} selector an html selector to bind to a toggle surface button
 */
pqr.bindevents.moleculeToggleSurface = function(selector) {
	if ($(selector).length) {
		$(selector).on("vclick", function(event) {
			event.preventDefault();
			pqr.threeDMole.toggleSurface();
			$(this).addClass('disabled btn-success');
			$(this).removeClass('btn-danger');
			$(this).html('Surface Removed');
			htmlutilities.bootstrapFeedback("Surface removed. Reload to add surface ", "feedback", "fa-desktop");
		});
	}
};

/**
 * Bind an event to print on click 
 * @param  {[type]} selector [description]
 * @return {[type]}          [description]
 */
pqr.bindevents.printButton = function(selector){
	if ($(selector).length) {
		$(selector).on("vclick", function(event) {
			event.preventDefault(); 
			window.print(); 
			htmlutilities.bootstrapFeedback("Printing molecule data", "feedback", "fa-print");
		});
	}
};