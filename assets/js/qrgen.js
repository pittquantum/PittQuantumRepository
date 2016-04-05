'use strict';

/**
 * @fileoverview QR code related functions
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 * @author jjnaughton93@gmail.com (JJ Naughton)
 */
module.exports = (function() {
    let qr = require('qrcode-npm');

    let qrgen = {};

    /**
     * Add a QR code to a html element with a jquery selector
     * @param {String} The selector the element to place the generated QR Code
     * @param {String} url      The end of the URL to send to
     */
    qrgen.addQRCode = function(id, url) {
        let parent = document.getElementById(id);
        if (parent) {
            //qr code data
            let qrCode = qr.qrcode(6, 'M');
            qrCode.addData(url);
            //generate code
            qrCode.make();
            //create img tag from code
            let table = qrCode.createImgTag(6);
            //add table to parent container
            parent.innerHTML = table;
        }
        else {
            console.log("Couldn't find the selector", selector);
        }
    };
    return qrgen;
})();
