//Namespaces
var pqr = pqr || {};
pqr.htmlUtilities = pqr.htmlUtilities || {}; //General DOM maniplating and such mostly using jquery 
pqr.bindevents = pqr.bindevents || {}; //Any event binding should be done here if possible 
pqr.propertiesFormatter = pqr.propertiesFormatter || {}; //Functions to properly format various ascpets of the molecules  
pqr.threeDMole = pqr.threeDMole || {}; //Everything relating to 3dmol FILE: pqr.threedmol.js
pqr.typeahead = pqr.typeahead || {}; //Everything relating to typeahead plugin 

pqr.qrgen = pqr.qrgen || {

	element: null

}; //QR Code generator 

/**
 *	Add a QR code to a html element with a jquery selector
 *		-Currently creates an image AND a canvas
 */
pqr.qrgen.addQRCode = function(selector, url){
	new QRCode(document.getElementById(selector), {
    text: "permurl.com/mol" + url,
    colorDark : "#f16b1d", //Primary Orange
    colorLight : "#fff"
});  
}


