/**
 * @fileoverview Initialize all JS for the website. Must be the 
 * first file concated in the pqr folder. 
 * 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */

var pqr = pqr || {
	debug: true 
};

pqr.features = { //Default to false 
	localstorage: false, 
	webGL: false
};

//Name Spaces 
pqr.bindevents = pqr.bindevents || {};
pqr.threeDMole = pqr.threeDMole || {};
pqr.utilities = pqr.utilities || {};
pqr.qrgen = pqr.qrgen || {};

/**
 * Update the avaiable features flags for this user. 
 * 
 */
pqr.checkFeatures = function(){
	if (Modernizr.localstorage) {
		this.features.localstorage = true;
	}
	else {
		if(this.debug) console.log ("Local storage is not avaiable!"); 
		pqr.redirectNoWebGL(); 
	}


	if (Modernizr.webgl) {
		this.features.webGL = true; 
	}
	else if(this.debug){
		console.log ("Web GL is not avaiable!"); 
	} 
};



