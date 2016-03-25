'use strict';

/**
 * @fileoverview PQR related misc JS functions
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 * @author jjnaughton93@gmail.com (JJ Naughton)
 */
module.exports = (function() {
    //TODO: boostrap plugins seem unnecessary (and depend on jquery)
    //require('bootstrap-notify');
    require('bootstrap');
    let //$ = require('jquery'), //jquery already included with 3dmol
        accessibility = require('../helpers/accessibility'),
        classie = require('./classie'),
        modernizr = require('browsernizr');
    let util = {
        elementSymbols: ['h','he','li','be','b','c','n','o','f','ne','na','mg',
            'al','si','p','s','cl','ar','k','ca','sc','ti','v','cr','mn','fe',
            'co','ni','cu','zn','ga','ge','as','se','br','kr','rb','sr','y',
            'zr','nb','mo','tc','ru','rh','pd','ag','cd','in','sn','sb','te',
            'i','xe','cs','ba','la','ce','pr','nd','pm','sm','eu','gd','tb',
            'dy','ho','er','tm','yb','lu','hf','ta','w','re','os','ir','pt',
            'au','hg','tl','pb','bi','po','at','rn','fr','ra','ac','th','pa',
            'u','np','pu','am','cm','bk','cf','es','fm','md','no','lr','rf',
            'db','sg','bh','hs','mt','ds','rg','cp','uut','uuq','uup','uuh',
            'uus','uuo']
    };

/**
 * Get the INCHI key. Used to generate the QR Code
 * @return {String} The INCHI key value in the properties table
 */

util.getINCHIKey = function() {
    var key = "";
    if ($(".molecule-inchikey").length) {
        key = $(".molecule-inchikey").children().next().html();
    }
    else{
        return false;
    }
    return $.trim(key);
};

/**
 * Reterieve the QR code url. Try to get the short URL first, then
 * the long url, finally by the base INCHI key. If all fails redirect
 * to the home page.
 * @return {String} The entire URL for the QR Code
 */

util.getQRURL = function(){
    var DOI_BASE = "http://doi.org/",
        url = null;
    if ($(".molecule-doi-short").length) {
        url = DOI_BASE + $(".molecule-doi-short").text();
    }
    else if($(".molecule-doi-long").length){
        url = DOI_BASE + $(".molecule-doi-long").text();
    }
    else if(this.getINCHIKey()){
        url = util.getRootURL();
        url += "/mol/" + this.getINCHIKey();
    }
    else{
        return util.getRootURL(); //Default to home page
    }
    return $.trim(url);
};

/**
 * Attempt to restore the users last font size.
 * @return {String} Font size
 */
util.initFontSize = function() {
    accessibility.changeFontSize(util.getCurrentFontSize());
};

/**
 * Increase or decrease the base font size.
 * @param {int} type either 1 = increase, 0 = default, -1 = decrease
 */
util.updateFont = function(type) {
    var newBaseSize = null;
    if (type === -1) {
        newBaseSize = accessibility
            .fontSizeChanger(-1, util.getCurrentFontSize());
        util.bootstrapFeedback("Decrease Font Size to " + newBaseSize,
            "feedback", "fa-font");
    }
    else if (type === 0) {
        newBaseSize = accessibility
            .changeFontSize(accessibility.defaultFontSize);
        util.bootstrapFeedback("Reset Font Size to " + newBaseSize,
            "feedback", "fa-font");
    }
    else if (type === 1) {
        newBaseSize = accessibility.fontSizeChanger(1,
            util.getCurrentFontSize());
        util.bootstrapFeedback("Increased Font Size to " + newBaseSize,
            "feedback", "fa-font");
    }
    if (modernizr.localstorage) {
        localStorage.setItem("baseFontSize", newBaseSize);
    }
    //Send PQR Message
};

/**
 * Get the current font size
 * @return {String} The current font size
 */

util.getCurrentFontSize = function() {
    if (modernizr.localstorage) {
        var fontSize = localStorage.getItem("baseFontSize");
        if (fontSize !== null) {
            return fontSize;
        } else {
            localStorage.setItem("baseFontSize", accessibility.defaultFontSize);
            return accessibility.defaultFontSize;
        }
    } else {
        return accessibility.defaultFontSize;
    }
};

/**
 * If there is no WebGL redirect the user.
 */
util.redirectNoWebGL = function() {
    if (!modernizr.webGL) {
        var msg = "<div class='alert alert-danger' role='alert'> <strong> <a href='http://get.webgl.org/'>WebGL</a> </strong> is not supported on your device! </div";
        $("#main").prepend(msg);
        //Currently sending them to get web gl page
        window.location.replace("https://get.webgl.org/");
    }
};

/**
 * Updates the property viewer if there was a pervious value in localstorage
 */
util.updatePropertiesViewer = function() {
    if (modernizr.localstorage) {
        if (localStorage.getItem("moleculeLayout") === "detailed") {
            //Probably not necessary
            $("#molecule-details table .detailed").removeClass("hidden");
        }
        else {
            $("#molecule-details table .detailed").addClass("hidden");
        }
    }
};

/**
 * Update the element name size to fit on the line
 * @param  String selector Jquery selector string
 * @param  Objet options  Contains the options for the quickfit plugin
 */
util.initQuickFit = function(selector, options) {

    //where is this supposed to come from? Because it doesn't... vvv
    /*
    $(selector).quickfit(options);
    //Update on window resize
    $(window).resize(function() {
        $(selector).quickfit(options);
    });
    */
};

/**
 * Add a fille effect to the forms on focus and remove on blur
 * @return {[type]} [description]
 */
util.formStyleHelper = (function() {
    [].slice.call(document.querySelectorAll('.input-field'))
        .forEach(function(inputEl) {
        // in case the input is already filled..
        if (inputEl.value.trim() !== '') {
            classie.add(inputEl.parentNode, 'input--filled');
        }

        // events:
        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur);
    });

    function onInputFocus(ev) {
        classie.add(ev.target.parentNode.parentNode, 'input--filled');
    }

    function onInputBlur(ev) {
        if (ev.target.value.trim() === '') {
            classie.remove(ev.target.parentNode.parentNode, 'input--filled');
            classie.remove(ev.target.parentNode, 'input--filled');
        }
    }
})();

/**
 * Returns true if the string is likely an inchi key
 * @param  {[type]}  string [description]
 * @return {Boolean}        [description]
 * @source https://gist.github.com/lsauer/1312860 (slightly modified)
 */
util.isINCHI = function(string){
    string = $.trim(string).toLowerCase();
    return 27===string.length && '-'===string[14] && '-'===string[25] &&
        !!string.match(/^([0-9A-Za-z\-]+)$/);
};

/**
 * Returns true if the string is likely a formula
 * @param  {[type]}  string [description]
 * @return {Boolean}        [description]
 */
util.isFormula = function(string){
    string = $.trim(string).toLowerCase();
    var numbers = string.match(/\d+/g);
    var letters = string.match(/[a-zA-Z]+/g);
    var isFormula = true;
    //Has Numbers
    if (numbers !== null) {
        if(letters !== null){
            $.each(letters, function(index, value){
                if(!util.isSymbol(value)) {
                    isFormula = false;
                    return false;
                }
            });
        }
        else{
            return false;
        }
    }
    else{
        //No Number
        if(letters !== null){
            $.each(letters, function(index, value){
                if(!util.isSymbol(value)) {
                    isFormula = false;
                    return false;
                }
            });
            return isFormula;
        }
        return false;
    }
    return isFormula; 
};

/**
 * [isSymbol description]
 * @param  {[type]}  symbol [description]
 * @return {Boolean}        [description]
 */
util.isSymbol = function(symbol){
    symbol = $.trim(symbol).toLowerCase();
    return $.inArray(symbol, this.elementSymbols) !== -1;
};

//TODO: fix how this is set up
util.feedbackNum = 0; //Counter for the number of feedback items
util.feedbackTimeout = 1500; //Time for the feedback message to stay up
//Flag to turn on or off the feedback closer event
util.activeFeedbackCloser = false;
util.debug = true;

/**
 * Get the base URL of the current page.
 * If you are on 'http://melwood.jcubedworld.com/baseball/?type=dog'
 * 'http://melwood.jcubedworld.com' will be returned.
 * The protocal and domain will be returned.
 * @return {String} The base URL of the current page including the protocal. 
 */
util.getRootURL = function() {
    if (!location.origin) {
        location.origin = location.protocol + "//" + location.host;
    }
    return location.origin;
};
/**
 * When using anchors have smooth scrolling
 * 
 */
util.smoothScrollingAnchors = function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
};

/**
 * Display bootstrap like notificaitons for a brief amount of time
 * @param  String message The message for the bootstrap feedback
 * @param  String type The Type/Style of the message
 * @param  Selector selector JQuery selector for the html message to be added
 * @param  String icon_class A font awesome icon class
 */
util.bootstrapFeedback = function(message, type, iconClass) {
    var html = '<i class="fa ' + iconClass + '"></i> ' + message; 
    //TODO: replace bootstrap-notify
    $('.top-right').notify({
        message: {
            html: html
        },
        type: type, 
        fadeOut: {
            enabled: true,
            delay: util.feedbackTimeout
        }
    /*
    var $message = $('<i class="fa ' + iconClass + '"></i> ' + message); 
    $('.top-right').append($message);
    $message.slideDown(300, function() {
        window.setTimeout(function() {
            $message.slideUp(300, function() {
                $message.remove();
            });
        }, util.feedbackTimeout);
    });
     */
    }).show();
};
/**
 * Keep the footer at the bottom of the page regardless of the content size.
 * @param  {Selector} footer_selector  JQuery Selector for the footer
 * @param  {Selector} content_selector JQuery Selector for the main content
 */
util.footerToBottom = function(footerSelector, contentSelector){
    if($(footerSelector).length && $(contentSelector).length) {
        this.updateFooterHeight(footerSelector, contentSelector);
        setInterval(function(){
            util.updateFooterHeight(footerSelector, contentSelector);
        }, 200);
    }
};
/**
 * Update the margin above the footer to allow more space. Helper function for 
 * footerToBottom
 * @param  {Integer} window_height  Height of the window 
 * @param  {Integer} footer_height  Height of the footer
 * @param  {Integer} content_height Height of the content
 */
util.updateFooterHeight = function(footerSelector){
    var windowHeight = $(window).height();
    var footerHeight = $(footerSelector).height();
    var footerTop = $(footerSelector).position().top + footerHeight;
    if(footerTop < windowHeight) {
        $(footerSelector).css('margin-top',
            10 + (windowHeight - footerTop) + 'px');
    }
    else{
        $(footerSelector).css('margin-top', '10px');
    }
};
/**
 * Fire an event when content is changed
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
// jQuery.fn.contentChange = function(callback){
//     var elms = jQuery(this);
//     elms.each(
//       function(i){
//         var elm = jQuery(this);
//         elm.data("lastContents", elm.html());
//         window.watchContentChange = window.watchContentChange ?
//              window.watchContentChange : [];
//         window.watchContentChange.push({"element": elm,
//              "callback": callback});
//       }
//     )
//     return elms;
//   }
//   setInterval(function(){
//     if(window.watchContentChange){
//       for( i in window.watchContentChange){
//         if(window.watchContentChange[i].element.data("lastContents")
//                !== window.watchContentChange[i].element.html()){
//           window.watchContentChange[i]
//              .callback.apply(window.watchContentChange[i].element);
//           window.watchContentChange[i]
//              .element.data("lastContents",
//                  window.watchContentChange[i].element.html())
//         };
//       }
//     }
//   },500);
util.toProperCase = (function(){
    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g,
            function(txt){return txt.charAt(0)
                .toUpperCase() + txt.substr(1).toLowerCase();});
    };
})();

/**
 * When a tooltip toggle is click activate the tooltip.
 */
util.FullToolTipOptIn = function() {
    $('[data-toggle="tooltip"]').on("click", function(event) {
        event.preventDefault();
    });
    $(function() {
        //where is this supposed to come from? Because it doesn't... vvv
        $('[data-toggle="tooltip"]').tooltip(); //Opt in to tool tips
    });
};

    return util;
})();
