'use strict';

/**
 * @fileoverview Any event binding functions.
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 * @author jjnaughton93@gmail.com (JJ Naughton)
 */
module.exports = (function() {
    //TODO: this is ugly...
    //modernizr/browsernizr tests
    require('browsernizr/test/webgl');
    require('browsernizr/test/storage/localstorage');

    let util = require('./util'),
        //Shouldnt even rely on DOM objects on its own! Should be passed nodes
        //TODO: probably don't need this lib, either
        threeDMole = require('./threeDMole'),
        modernizr = require('browsernizr'),
        molecule = require('./molecule'),
        autocomplete = require('./autocomplete');

    let bindevents = {};

    /**
     * Bind the events to the proper font switching buttons for accessibility.
     */
    bindevents.bindFontSwitchers = function() {
        var increaseButtonSelector = "#increasefont";
        var decreaseButtonSelector = "#reducefont";
        var resetButtonSelector = "#defaultfont";
        $(increaseButtonSelector).on("click vclick", function(event) {
            event.preventDefault();
            util.updateFont(1);
        });
        $(decreaseButtonSelector).on("click vclick", function(event) {
            event.preventDefault();
            util.updateFont(-1);
        });
        $(resetButtonSelector).on("click vclick", function(event) {
            event.preventDefault();
            util.updateFont(0);
        });
    };

    /**
     * Reset the zoom level of the viewer
     * @param  {String} selector an html selector to bind the reset button
     */
    bindevents.moleculeReset = function(selector) {
        if ($(selector).length) {
            $(selector).on("click vclick", function(event) {
                event.preventDefault();
                threeDMole.resetView();
                util.bootstrapFeedback("Molecule viewer reset", "feedback",
                    "fa-crosshairs");
            });
        }
    };

    /**
     * Toggle rotation of the current viewer
     * @param  {String} an html selector to bind to a toggle rotation button
     */
    bindevents.moleculeToggleRotation = function(selector) {
        if ($(selector).length) {
            $(selector).on("click vclick", function(event) {
                event.preventDefault();
                threeDMole.toggleRotation();
                var toggle = $(this).children();
                if (toggle.hasClass('fa-toggle-on')) {
                    toggle.removeClass('fa-toggle-on');
                    toggle.addClass('fa-toggle-off');
                    util.bootstrapFeedback("Rotation deactivated", "fa-refresh");
                } else {
                    toggle.removeClass('fa-toggle-off');
                    toggle.addClass('fa-toggle-on');
                    util.bootstrapFeedback("Rotation activated", "fa-refresh");
                }
            });
        }
    };

    /**
     *  Handle the clickng of detailed and simple layouts and update
     *  the local storate to reflect the changes.
     */
    bindevents.propertiesViewerHandler = function() {
        $("#simpleView").on("click vclick", function(event) {
            event.preventDefault();
            $("#molecule-details table .detailed").fadeOut('fast');
            if (modernizr.localstorage) {
                localStorage.setItem("moleculeLayout", "simple");
                localStorage.setItem("moleculeLayout", "simple");
            }
            util.bootstrapFeedback("Switched to simple view",
            "feedback", "fa-desktop");
        });
        $("#detailedView").on("click vclick", function(event) {
            event.preventDefault();
            $("#molecule-details table .detailed").removeClass('hidden');
            $("#molecule-details table .detailed").fadeIn('fast');
            if (modernizr.localstorage) {
                localStorage.setItem("moleculeLayout", "detailed");
            }
            util.bootstrapFeedback("Switched to detailed view ",
                "feedback", "fa-desktop");
        });
    };

    /**
     * Binds the buttons to change the style of the molecule beeweten spheres,
     * lines or crosses.
     */
    bindevents.moleculeStyleChanger = function() {
        if ($('.changeStyleSphere').length) {
            $('.changeStyleSphere').on("click vclick", function(event) {
                event.preventDefault();
                threeDMole.changeStyle("sphere");
                /*
                //TODO: this was commented out
                    if (modernizr.localstorage) {
                        localStorage.setItem("moleculeViewerlayout", "spheres");
                    }
                */
                util.bootstrapFeedback("Switched to sphere display ",
                    "feedback", "fa-desktop");
            });
        }
        if ($('.changeStyleLine').length) {
            $('.changeStyleLine').on("click vclick", function(event) {
                event.preventDefault();
                threeDMole.changeStyle("line");
                /*
                //TODO: this was commented out
                if (modernizr.localstorage) {
                    localStorage.setItem("moleculeViewerlayout", "lines");
                }
                */
                util.bootstrapFeedback("Switched to line display ",
                    "feedback", "fa-desktop");
            });
        }
        if ($('.changeStyleCross').length) {
            $('.changeStyleCross').on("click vclick", function(event) {
                event.preventDefault();
                threeDMole.changeStyle("cross");
                /*
                TODO: this was commented out...
                if (modernizr.localstorage) {
                    localStorage.setItem("moleculeViewerlayout", "crosses");
                }
                */
                util.bootstrapFeedback("Switched to cross display ",
                    "feedback", "fa-desktop");
            });
        }
        if ($('.changeStyleStick').length) {
            $('.changeStyleStick').on("click vclick", function(event) {
                event.preventDefault();
                threeDMole.changeStyle("stick");
                if (modernizr.localstorage) {
                    localStorage.setItem("moleculeViewerlayout", "sticks");
                }

                util.bootstrapFeedback("Switched to stick display ",
                    "feedback", "fa-desktop");
            });
        }
    };
    /**
     * Deactive the surface of the viewer.
     * @param  {String} an html selector to bind to a toggle surface button
     */
    bindevents.moleculeToggleSurface = function(selector) {
        if ($(selector).length) {
            $(selector).on("click vclick", function(event) {
                event.preventDefault();
                if $(this).text()=="Remove Surface"{
                    threeDMole.toggleSurface();
                    $(this).addClass('btn-success');
                    $(this).removeClass('btn-danger');
                    $(this).html('Add Surface');
                    //"feedback", "fa-desktop");
                }
                else {
                    threeDMole.toggleSurface2();
                    $(this).addClass('btn-danger');
                    $(this).removeClass('btn-success');
                    $(this).html('Remove Surface');
                }
            });
        }
    };

    /**
     * Bind an event to print on click
     * @param  {[type]} selector [description]
     * @return {[type]}          [description]
     */
    bindevents.printButton = function(selector) {
        if ($(selector).length) {
            $(selector).on("click vclick", function(event) {
                event.preventDefault();
                window.print();
                util.bootstrapFeedback("Printing molecule data",
                    "feedback", "fa-print");
            });
        }
    };

    /**
     * Force Loading of AJAX call
     */
    bindevents.ajaxLoadButton = function(){
        $('#molecule-ajax-loader').on('click', function(){
            // TODO: this was commented out; molecules.show_results(10);
            molecule.ajaxSearch();
        });
    };

    /**
     * Load more items the longer the person is on the browse page
     */
    bindevents.ajaxTimer = function(){
        //Fire a search on page load no matter what
        molecule.ajaxSearch();
        var ajaxLoader = setInterval(function(){
            //Limit the number of active requests to five and stored 10
            if(molecule.requestToLoad()){
                if(!molecule.ajaxSearch()){
                    clearInterval(ajaxLoader);
                }
            }
        }, 1000);
    };

    /**
     * Activate the auto complete checker when a user
     * inputs on the selector.
     * @param {Selector} The jquery selector of the input item to watch
     * @return {[type]} [description]
     */
    bindevents.checkAutocomplete = function(inputSelector){
        $(inputSelector).on('keyup', function(){
            var inputValue = $.trim($(this).val());
            //Run it again to make sure everything is cleared 
            setTimeout(function() {
                autocomplete.findMatches(inputValue);
                //Run it again to make sure everything is cleared
                setTimeout(function() {
                    autocomplete.findMatches(inputValue);
                }, 250);
            }, 50);
        });
        //Set timer to auto check
    };

    return bindevents;

})();
