'use strict';
    //TODO: For 3dmol, at least on personal copy: module-ize
    //TODO: sub a PR for 3dmol repo, publish to NPM
    //TODO: all lib functions should be module-system agnostic...
    //So set to var and use a mod export like mithril does...
    //add 'use strict' to everything
    //TODO: add unit simple unit tests and hook up with gulp

/**
 * @fileoverview main entry point for pqr site.
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 * @author jjnaughton93@gmail.com (JJ Naughton)
 */

//TODO: this is ugly...
require('./polyfill');
//modernizr/browsernizr tests
require('browsernizr/test/webgl');
require('browsernizr/test/storage/localstorage');
require('browsernizr/test/css/animations');

let //$ = require('jquery'),
    modernizr = require('browsernizr'),
    bindevents = require('./bindevents'),
    autocomplete = require('./autocomplete'),
    qrgen = require('./qrgen'),
    scrollload = require('./scrollload'),
    molecule = require('./molecule'),
    util = require('./util'),
    threeDMole = require('./threeDMole');

/**
 * Initializes the application.
 */
function init() {
    util.FullToolTipOptIn();
    util.initFontSize();
    bindevents.bindFontSwitchers();
    //TODO: lots of stuff runs on all conditions?
    if ($("#main").hasClass("page-home")) {
        threeDMole.initViewers();
        /*
         //is this necessary
         //TODO: is this broken on dev?
        bindevents.moleculeReset('#reset-molecule');
        bindevents.moleculeToggleRotation('#rotationSwitch');
         */
        //autocomplete.init();
        util.updatePropertiesViewer();
        //TODO: should probably pass in DOM instead of accessors...
        //at least should pass in vars instead of strings.
        util.initQuickFit("#molecule-name", {
            min: 12,
            max:36
        });
        bindevents.propertiesViewerHandler();
        bindevents.moleculeStyleChanger();
        bindevents.moleculeReset('#reset-molecule');
        bindevents.moleculeToggleRotation('#rotationSwitch');
        bindevents.moleculeToggleSurface('.surfaceSwitch');
        bindevents.printButton('#print-molecule');
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
        qrgen.addQRCodeMolecule(util.getQRURL());
        qrgen.addQRCodePrint(util.getQRURL());
    }
    else if($("#main").hasClass("page-browse")){
        //autocomplete.init();
        //Only Start AJAX if there are results
        if($('#molecule-browser').attr('data-has-results') === "true"){
            scrollload.init();
            molecule.initAjaxSearch();
            $('.molecule-results-masonary').removeClass('translucent');
            bindevents.ajaxTimer();
            bindevents.ajaxLoadButton();
        }
    }
}

// onready: init
$(document).ready(function() {
    //no webgl support
    if (!modernizr.localstorage || !modernizr.webgl) {
        util.redirectNoWebGL();
    }
    else {
        init();
    }
});




