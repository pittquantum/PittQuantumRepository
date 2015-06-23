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

	$(increaseButtonSelector).on("click", function(event) {
		event.preventDefault();
		pqr.htmlUtilities.updateFont(1);
	});

	$(decreaseButtonSelector).on("click", function(event) {
		event.preventDefault();
		pqr.htmlUtilities.updateFont(-1);
	});

	$(resetButtonSelector).on("click", function(event) {
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
		$(selector).on("click", function(event) {
			event.preventDefault();
			pqr.threeDMole.resetView();
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
		$(selector).on("click", function(event) {
			event.preventDefault();
			pqr.threeDMole.toggleRotation();
			var toggle = $(this).children();

			if (toggle.hasClass('fa-toggle-on')) {
				toggle.removeClass('fa-toggle-on');
				toggle.addClass('fa-toggle-off');
			} else {
				toggle.removeClass('fa-toggle-off');
				toggle.addClass('fa-toggle-on');
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
	$("#simpleView").on("click", function(event) {
		event.preventDefault();
		$("#molecule-details table .detailed").addClass("hidden");
		if (pqr.features.localstorage) localStorage.setItem("moleculeLayout", "simple");
	});

	$("#detailedView").on("click", function(event) {
		event.preventDefault();
		$("#molecule-details table .detailed").removeClass("hidden");
		if (pqr.features.localstorage) localStorage.setItem("moleculeLayout", "detailed");
	});
};


/**
 * Binds the buttons to change the style of the molecule beeweten spheres, lines or crosses. 
 * 
 */
pqr.bindevents.moleculeStyleChanger = function() {

	if ($('#changeStyleSphere').length) {
		$('#changeStyleSphere').on("click", function(event) {
			event.preventDefault();
			pqr.threeDMole.changeStyle("sphere");
			// if (pqr.features.localstorage) localStorage.setItem("moleculeViewerlayout", "spheres");
		});
	}


	if ($('#changeStyleLine').length) {
		$('#changeStyleLine').on("click", function(event) {
			event.preventDefault();
			pqr.threeDMole.changeStyle("line");
			// if (pqr.features.localstorage) localStorage.setItem("moleculeViewerlayout", "lines");
		});
	}

	if ($('#changeStyleCross').length) {
		$('#changeStyleCross').on("click", function(event) {
			event.preventDefault();
			pqr.threeDMole.changeStyle("cross");
			// if (pqr.features.localstorage) localStorage.setItem("moleculeViewerlayout", "crosses");
		});
	}

	if ($('#changeStyleStick').length) {
		$('#changeStyleStick').on("click", function(event) {
			event.preventDefault();
			pqr.threeDMole.changeStyle("stick");
			// if (pqr.features.localstorage) localStorage.setItem("moleculeViewerlayout", "sticks");
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
		$(selector).on("click", function(event) {
			event.preventDefault();
			pqr.threeDMole.toggleSurface();
			$(this).addClass('disabled btn-success');
			$(this).removeClass('btn-danger');
			$(this).html('Surface Removed');
		});
	}
};