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
    function addQRCode(id, size, url) {
        let parent = document.getElementById(id);
        if (parent) {
            //qr code data
            let qrCode = qr.qrcode(size, 'M');
            qrCode.addData(url);
            //generate code
            qrCode.make();
            //create img tag from code
            let table = qrCode.createImgTag(size);
            //add table to parent container
            parent.innerHTML = table;
        }
        else {
            console.log("Couldn't find the id: " + id);
        }
    }
    qrgen.addQRCodeMolecule = function(url) {
        let id = "qrcode";
        let size = 2;
        addQRCode(id, size, url);
    };
    qrgen.addQRCodePrint = function(url) {
        let id = "qr-print-wrapper";
        let size = 2;
        addQRCode(id, size, url);
    };
    return qrgen;
})();
