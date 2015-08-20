/**
 * @fileoverview QR code related functions  
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */

pqr.qrgen = { //Config
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
        fontcolor: '#f16b1d' //Primary Orange Color
    }
};

/**
 * Add a QR code to a html element with a jquery selector
 * @param {String} selector The selector the element to place the generated QR Code
 * @param {String} url      The end of the URL to send to
 */
pqr.qrgen.addQRCode = function(selector, url) {
    // var baseURL = htmlutilities.getRootURL();

    if ($(selector).length) {
        this.default_options.text = url;
        $(selector).qrcode(this.default_options);
    } else {
        console.log("Couldn't find the selector", selector);
    }
};