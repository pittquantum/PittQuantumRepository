'use strict';
    //TODO: For 3dmol, at least on personal copy: module-ize
    //TODO: sub a PR for 3dmol repo, publish to NPM
    //TODO: all lib functions should be module-system agnostic...
    //So set to var and use a mod export like mithril does...
    //add 'use strict' to everything
    //remove vendors garbage asap
    //TODO: add unit simple unit tests and hook up with gulp
    //where is classie used...

/**
 * @fileoverview main entry point for pqr site.
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 * @author jjnaughton93@gmail.com (JJ Naughton)
 */


let $ = require('jquery'),
    //modernizr = require('modernizr');
    bindevents = require('./libs/bindevents'),
    autocomplete = require('./libs/autocomplete'),
    qrgen = require('./libs/autocomplete'),
    masonary = require('./libs/masonary'),
    molecule = require('./libs/molecule'),
    util = require('./libs/util'),
    threeDMole = require('./libs/threeDMole');

console.log('Testing gulp...');
/**
 * Initializes the application.
 */
function init() {
    util.FullToolTipOptIn();
    util.initFontSize();
    bindevents.bindFontSwitchers();
    //TODO: what is this:
    // htmlutilities.footerToBottom('footer', '#main');
    //TODO: lots of stuff runs on all conditions?
    if ($("#main").hasClass("page-home")) {
        threeDMole.initViewers();
        bindevents.moleculeReset('#reset-molecule');
        bindevents.moleculeToggleRotation('#rotationSwitch');
        autocomplete.init();
    }
    else if ($("#main").hasClass("page-molecule")) {
        threeDMole.initViewers();
        util.updatePropertiesViewer();
        //TODO: should probably pass in DOM instead of accessors...
        //at least should pass in vars instead of strings.
        util.initQuickFit("#molecule-name", {min: 12, max:36});
        bindevents.propertiesViewerHandler();
        bindevents.moleculeStyleChanger();
        bindevents.moleculeReset('#reset-molecule');
        bindevents.moleculeToggleRotation('#rotationSwitch');
        bindevents.moleculeToggleSurface('.surfaceSwitch');
        bindevents.printButton('#print-molecule');
        qrgen.addQRCode("#qrcode", util.getQRURL());
        qrgen.addQRCode("#qr-print-wrapper", util.getQRURL());
    }
    else if($("#main").hasClass("page-browse")){
        autocomplete.init();
        //Only Start AJAX if there are results
        if($('#molecule-browser').attr('data-has-results') === "true"){
            masonary.init();
            molecule.initAjaxSearch();
            $('.molecule-results-masonary').removeClass('translucent');
            bindevents.ajaxTimer();
            bindevents.onScollLoadMolecules();
            bindevents.ajaxLoadButton();
            bindevents.resultTouchHelper();
        }
    }
}

// onready: init
$(document).ready(function() {
    //no webgl support
    /*
    if (!modernizr.localstorage || !modernizr.webgl) {
        util.redirectNoWebGL();
    }
    else {
    */
        init();
    /*
    }
    */
});




