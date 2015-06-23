/**
 * @fileoverview Misc. DOM manipulation utilites
 * @author JoshJRogan@gmail.com (Josh Rogan)
 */

var htmlutilities = htmlutilities || {}; 

/**
 * Get the base URL of the current page. If you are on 'http://melwood.jcubedworld.com/baseball/?type=dog'
 * 	'http://melwood.jcubedworld.com' will be returned. The protocal and domain will be returned. 
 * 
 * @return {String} The base URL of the current page including the protocal. 
 */
htmlutilities.getRootURL = function(){
	if (!location.origin) location.origin = location.protocol + "//" + location.host;
	return location.origin; 
};


