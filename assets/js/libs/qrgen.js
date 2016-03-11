'use strict';

/**
 * @fileoverview QR code related functions
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 * @author jjnaughton93@gmail.com (JJ Naughton)
 */
module.exports = (function() {
    //let $ = require('jquery');

    let config = {
        element: null,
        defaultOptions: {
            render: 'image',
            minVersion: 1,
            maxVersion: 5,
            ecLevel: 'M',
            fill: '#000',
            mode: 2, //Show the label
            label: 'PQR',
            fontname: `"Source Sans Pro",
            "Helvetica Neue",Helvetica, Arial,sans-serif`,
            fontcolor: '#f16b1d' //Primary Orange Color
        }
    },
        qrgen = {};

    /**
     * Add a QR code to a html element with a jquery selector
     * @param {String} The selector the element to place the generated QR Code
     * @param {String} url      The end of the URL to send to
     */
    qrgen.addQRCode = function(selector, url) {
        // var baseURL = htmlutilities.getRootURL();
        if ($(selector).length) {
            config.defaultOptions.text = url;
            $(selector).qrcode(config.defaultOptions);
        } else {
            console.log("Couldn't find the selector", selector);
        }
    };
    return qrgen;
})();
