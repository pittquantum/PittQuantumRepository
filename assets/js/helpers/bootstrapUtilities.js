/**
 * @fileoverview Misc. boostrap helper functions
 * @author JoshJRogan@gmail.com (Josh Rogan)
 */

var bootstrapUtilities = bootstrapUtilities || {};


/**
 * When a tooltip toggle is click activate the tooltip. 
 * 
 */
bootstrapUtilities.FullToolTipOptIn = function() {
	$('[data-toggle="tooltip"]').on("click", function(event) {
		event.preventDefault();
	});
	$(function() {
		$('[data-toggle="tooltip"]').tooltip(); //Opt in to tool tips 
	});
}