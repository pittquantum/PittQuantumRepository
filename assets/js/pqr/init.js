/**
 * @fileoverview Initialize the app on document ready. Should be the last file. 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */

/**
 * Initialize the app on document ready
 *  
 */
pqr.init = function() {
	$(document).ready(function() {
		if(pqr.debug) console.log("Loading PQR Web App....");  

		//All page initializer 
		pqr.checkFeatures(); 
		bootstrapUtilities.FullToolTipOptIn();
		pqr.htmlUtilities.initFontSize(); 
		pqr.bindevents.bindFontSwitchers();
		// htmlutilities.footerToBottom('footer', '#main');
		loadCSS("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
		// loadCSS("//fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,700");

		if ($("#main").hasClass("page-home")) {
			pqr.threeDMole.initViewers();
			pqr.bindevents.moleculeReset('#reset-molecule');
			pqr.bindevents.moleculeToggleRotation('#rotationSwitch');
		}
		else if ($("#main").hasClass("page-molecule")) {
			pqr.threeDMole.initViewers();
			pqr.htmlUtilities.updatePropertiesViewer();
			pqr.htmlUtilities.initQuickFit("#molecule-name", {min: 12, max:36}); 

			pqr.bindevents.propertiesViewerHandler();
			pqr.bindevents.moleculeStyleChanger();
			pqr.bindevents.moleculeReset('#reset-molecule');
			pqr.bindevents.moleculeToggleRotation('#rotationSwitch');
			pqr.bindevents.moleculeToggleSurface('.surfaceSwitch');
			pqr.bindevents.printButton('#print-molecule');

			pqr.qrgen.addQRCode("#qrcode", pqr.htmlUtilities.getQRURL());
			pqr.qrgen.addQRCode("#qr-print-wrapper", pqr.htmlUtilities.getQRURL());
		}
		else if($("#main").hasClass("page-browse")){
			
			if($('#molecule-browser').attr('data-has-results') === "true"){
				pqr.masonary.init(); 
				pqr.molecules.init_ajax_search(); 
				$('.molecule-results-masonary').removeClass('translucent'); 
				pqr.bindevents.ajax_timer();
				pqr.bindevents.on_scoll_load_molecules();
				pqr.bindevents.ajax_load_button();
				pqr.bindevents.result_touch_helper();
			}
			else{
				if(pqr.debug) console.log("Search Resulted in no results");
			}
			
		}

		if(pqr.debug) console.log("Finished loading PQR Web App!"); 
	});
}();
