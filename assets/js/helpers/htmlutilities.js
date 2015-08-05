/**
 * @fileoverview Misc. DOM manipulation utilites
 * @author JoshJRogan@gmail.com (Josh Rogan)
 */
var htmlutilities = htmlutilities || {
    feedback_num: 0, //Counter for the number of feedback items
    feedback_timeout: 1500, //Time for the feedback message to stay up
    active_feedback_closer: false, //Flag to turn on or off the feedback closer event
};
/**
 * Get the base URL of the current page. If you are on 'http://melwood.jcubedworld.com/baseball/?type=dog'
 * 	'http://melwood.jcubedworld.com' will be returned. The protocal and domain will be returned. 
 * 
 * @return {String} The base URL of the current page including the protocal. 
 */
htmlutilities.getRootURL = function() {
    if (!location.origin) location.origin = location.protocol + "//" + location.host;
    return location.origin;
};
/**
 * When using anchors have smooth scrolling
 * 
 */
htmlutilities.smoothScrollingAnchors = function() {
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
 * 
 * @return String the resulting html feedback
 */
htmlutilities.bootstrapFeedback = function(message, type, icon_class) {

    var html = '<i class="fa ' + icon_class + '"></i> ' + message; 

    $('.top-right').notify({
        message: {
            html: html
        },
        type: type, 
        fadeOut: { enabled: true, delay: this.feedback_timeout}

    }).show();

};
