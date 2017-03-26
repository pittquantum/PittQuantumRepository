'use strict';

/**
 * @fileoverview PQR related misc JS functions
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 * @author jjnaughton93@gmail.com (JJ Naughton)
 */
module.exports = (function() {
    //TODO: boostrap plugins seem unnecessary (and depend on jquery)
    require('bootstrap');
    let canvasLib = require('./canvasLib');
    let accessibility = require('./accessibility'),
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
            util.bootstrapFeedback("Decrease Font Size to " + newBaseSize, "fa-font");
        }
        else if (type === 0) {
            newBaseSize = accessibility
                .changeFontSize(accessibility.defaultFontSize);
            util.bootstrapFeedback("Reset Font Size to " + newBaseSize, "fa-font");
        }
        else if (type === 1) {
            newBaseSize = accessibility.fontSizeChanger(1,
                util.getCurrentFontSize());
            util.bootstrapFeedback("Increased Font Size to " + newBaseSize, "fa-font");
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
            else if(localStorage.getItem("moleculeLayout") === "simple") {
                $("#molecule-details table .detailed").addClass("hidden");
            }
            else{
                $("#molecule-details table").hide();
                $("#molecule-details #orbitals").show();
            }
        }
    };

    /**
    * Generates the orbital diagram for the molecule.
    */
    util.generateOrbitalDiagram = function(homo_range,lumo_range) {
        function maxOfArray(numArray) {
          return Math.max.apply(null, numArray);
        }
        function minOfArray(numArray) {
          return Math.min.apply(null, numArray);
        }
        function convertRange(originalStart, originalEnd, newStart, newEnd, value, proportion){
            var originalRange = originalEnd - originalStart;
            var newRange = newEnd - newStart;
            var ratio = newRange / originalRange;
            var newValue = value * ratio * proportion;
            var finalValue = newValue + newStart;
            return finalValue;
        }

        function generateOrbitalsCoordinates(orbitals){
            var thresh = 0.02;

            // get the energy range
            var minE = orbitals[0];
            var maxE = orbitals[0];
            orbitals.forEach(function(e){
                minE = Math.min(minE, e);
                maxE = Math.max(maxE, e);
            });

            var spanE = maxE - minE;
            // add 10% margin
            minE = minE - spanE * 0.05;
            maxE = maxE + spanE * 0.05;

            var x = Array.apply(null, Array(orbitals.length)).map(Number.prototype.valueOf,0.0);
            var y = Array.apply(null, Array(orbitals.length)).map(Number.prototype.valueOf,0.0);
            for(var a=0; a< orbitals.length; a++){
                y[a] = (maxE - orbitals[a]);
                for(var b=a+1; b < orbitals.length; b++){
                    if(Math.abs(orbitals[a] - orbitals[b]) < thresh){
                        x[a] = x[a] - 3.5;
                        x[b] = x[b] + 3.5;
                    }

                }
            }


            var map = {}
            for(var a=0; a< orbitals.length; a++){
                map[Math.round(parseFloat(orbitals[a]) * 1000) / 1000] = {'x1':x[a],'y1':y[a]};
            }
            return map

        }

        //Draw orbitals within some energy range. Initially this will be between homo-5 and lumo+2
        function drawOrbitals(s,orbitalMap,homo,lumo,homo_range,lumo_range, factor, lastX, lastY){

            //var filtered = Object.keys(orbitalMap).filter(withinRange);
            var filtered = Object.keys(orbitalMap);
            var minX = orbitalMap[filtered[0]]['x1'];
            var maxX = minX;
            filtered.forEach(function(e){
                minX = Math.min(minX, orbitalMap[e]['x1']);
                maxX = Math.max(maxX, orbitalMap[e]['x1']);
            });

            var rangeX = maxX - minX;
            minX = minX - rangeX * 0.05;
            maxX = maxX + rangeX * 0.05
            rangeX = rangeX * 1.1;

            var maxE = maxOfArray(Object.keys(orbitalMap));
            var minE = minOfArray(Object.keys(orbitalMap));
            var spanE = maxE - minE;
            minE = minE - spanE * 0.05;
            maxE = maxE + spanE * 0.05;


            var lowE, highE,lowDist,highDist;
            Object.keys(orbitalMap).sort(function(a,b){return a-b}).forEach(function(e){
                e = parseFloat(e);
                if (!lowDist || Math.abs(e - (homo+homo_range)) < lowDist){
                    lowDist = Math.abs(e - (homo+homo_range));
                    lowE = e;
                }
                if (!highDist || Math.abs(e - (lumo+lumo_range)) < highDist){
                    highDist = Math.abs(e - (lumo+lumo_range));
                    highE = e;
                }
            });

            var cw=s.width;
            var ch=s.height;
            var coordinates = {};
            var scrWidthLow = 0;//cw*.25;
            var scrWidthHigh = cw;//cw*.75;
            var scrHeightLow = 0;
            var scrHeightHigh = ch;
            // var o = new rect("TEST",(0+lastX),(0+lastY),100*factor,.5*factor,'#0061ff','#0061ff',0,factor,lastX,lastY);
            // o.draw();
            //orbitalObjects.push(o);
            filtered.forEach(function(e){
                coordinates = orbitalMap[e];
                var x1 = convertRange(minX,maxX,scrWidthLow,scrWidthHigh,coordinates['x1']-minX-1,1);
                var x2 = convertRange(minX,maxX,scrWidthLow,scrWidthHigh,coordinates['x1']-minX+1,1);
                var y1 = convertRange(minE,maxE,scrHeightLow,scrHeightHigh,coordinates['y1'],1);
                // var x1 = ((x[a] - minX)-1)*(cw%rangeX);
                // var x2 = ((x[a] - minX)+1)*(cw%rangeX);
                // var y1 = y[a]*(ch%(maxE - minE));
                //console.log(x1,y1);
                if(parseFloat(e) === homo || parseFloat(e) === lowE){
                    var o = new canvasLib.Shape(e,x1,y1,x2-x1,factor,'#ff0000');
                }
                else if(parseFloat(e) === lumo || parseFloat(e) === highE){
                    var o = new canvasLib.Shape(e,x1,y1,x2-x1,factor,'#0061ff');
                }
                else{
                    var o = new canvasLib.Shape(e,x1,y1,x2-x1,factor,'#000000');
                } 
                s.addShape(o);
            });
            // $("#orbitalsCanvas").data('homo-range',homo_range);
            // $("#orbitalsCanvas").data('lumo-range',lumo_range);
        }

        function init() {
            var s = new canvasLib.CanvasState(document.getElementById('orbitalsCanvas'));
            var orbitalMap = generateOrbitalsCoordinates(orbitalData);
            drawOrbitals(s,orbitalMap,-9.059,1.06,-5.0,2.0);
            // var lowE, highE,lowDist,highDist, minE = minOfArray(Object.keys(orbitalMap)), maxE = maxOfArray(Object.keys(orbitalMap));
            // Object.keys(orbitalMap).sort(function(a,b){return a-b}).forEach(function(e){
            //     if (!lowDist || Math.abs(e - (homo+homo_range)) < lowDist){
            //         lowDist = Math.abs(e - (homo+homo_range));
            //         lowE = e;
            //     }
            //     if (!highDist || Math.abs(e - (lumo+lumo_range)) < highDist){
            //         highDist = Math.abs(e - (lumo+lumo_range));
            //         highE = e;
            //     }
            // });

            // var adjustedLow = convertRange(orbitalMap[maxE]['y1'],orbitalMap[minE]['y1'],0,s.height,orbitalMap[lowE]['y1'],1);
            // var adjustedHigh = convertRange(orbitalMap[maxE]['y1'],orbitalMap[minE]['y1'],0,s.height,orbitalMap[highE]['y1'],1);
            // var zoomExp = (adjustedLow + adjustedHigh)/s.height;
            // s.zoom(zoomExp,{},10);

            // var lastY = convertRange(orbitalMap[maxE]['y1'],orbitalMap[minE]['y1'],0,s.height,(orbitalMap[lumo]['y1']+s.height,orbitalMap[homo]['y1'])/2,1);
            // var lastX = s.width/2;
            // s.pan(-lastX,-lastY);
        }
        init();

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
                inputEl.parentNode.className += " input--filled";
            }

            // events:
            inputEl.addEventListener('focus', onInputFocus);
            inputEl.addEventListener('blur', onInputBlur);
        });

        function onInputFocus(ev) {
            ev.target.parentNode.parentNode.className += " input--filled";
        }

        function onInputBlur(ev) {
            if (ev.target.value.trim() === '') {
                let reg = new RegExp('(\\s|^)' + 'input--filled' + '(\\s|$)');
                ev.target.parentNode.parentNode.className = ev.target.parentNode.parentNode.className.replace(reg, ' ')
                ev.target.parentNode.className = ev.target.parentNode.className.replace(reg, ' ')
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
     * Display bootstrap-like notificaitons for a brief amount of time
     * @param  String message The message for the bootstrap feedback
     * @param  String type The Type/Style of the message
     * @param  Selector selector JQuery selector for the html message to be added
     * @param  String icon_class A font awesome icon class
     */
    util.bootstrapFeedback = function(message, iconClass) {
        let div = document.createElement("div");
            div.className = 'alert alert-success';
            div.innerHTML = '<i class="fa ' + iconClass + '"></i> ' + message;

        let parent = document.body.getElementsByClassName('top-right')[0];

        //show, then remove
        //add
        parent.appendChild(div);
        //remove on delay
        setTimeout(function() {
            parent.removeChild(div);
        }, util.feedbackTimeout);
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
