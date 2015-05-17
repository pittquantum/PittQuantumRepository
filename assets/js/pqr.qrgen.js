//Namespaces
var pqr = pqr || {};
pqr.htmlUtilities = pqr.htmlUtilities || {}; //General DOM maniplating and such mostly using jquery 
pqr.bindevents = pqr.bindevents || {}; //Any event binding should be done here if possible 
pqr.propertiesFormatter = pqr.propertiesFormatter || {}; //Functions to properly format various ascpets of the molecules  
pqr.threeDMole = pqr.threeDMole || {}; //Everything relating to 3dmol FILE: pqr.threedmol.js
pqr.typeahead = pqr.typeahead || {}; //Everything relating to typeahead plugin 

pqr.qrgen = pqr.qrgen || {
	element: null, 
	default_options: {
		render: 'image', 
		minVersion: 1,
    	maxVersion: 5, 
    	ecLevel: 'M',
    	fill: '#000', 
    	mode: 2, //Show the label 
    	label: 'PQR',
    	fontname: '"Source Sans Pro","Helvetica Neue",Helvetica, Arial,sans-serif',
    	fontcolor: '#f16b1d'//Primary Orange 
	}
}; //QR Code generator 

/**
 *	Add a QR code to a html element with a jquery selector
 *		-Currently creates an image AND a canvas
 */
pqr.qrgen.addQRCode = function(selector, url){
	//Properly set the origin 
	if (!location.origin) location.origin = location.protocol + "//" + location.host;
	
	if($(selector).length){
		this.default_options.text = location.origin + "/mol/" + url;
		$(selector).qrcode(this.default_options); 
	}
	else{
		console.log("Couldn't find the selector", selector); 
	}


// 	new QRCode(document.getElementById(selector), {

//     text: location.origin + "/mol/" + url,
//     colorDark : "#f16b1d", //Primary Orange
//     colorLight : "#fff"
// });  






}


