/**
 * @fileoverview Misc. DOM manipulation utilites
 * @author JoshJRogan@gmail.com (Josh Rogan)
 */
var htmlutilities = htmlutilities || {
    feedback_num: 0, //Counter for the number of feedback items
    feedback_timeout: 1500, //Time for the feedback message to stay up
    active_feedback_closer: false, //Flag to turn on or off the feedback closer event
    debug: true,
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

/**
 * Keep the footer at the bottom of the page regardless of the content size.
 * @param  {Selector} footer_selector  JQuery Selector for the footer
 * @param  {Selector} content_selector JQuery Selector for the main content
 */
htmlutilities.footerToBottom = function(footer_selector, content_selector){
    if($(footer_selector).length && $(content_selector).length){

       this.updateFooterHeight(footer_selector, content_selector);

       setInterval(function(){ htmlutilities.updateFooterHeight(footer_selector, content_selector); }, 200);

    }
    else{
        if(this.debug) console.log("Sectors not found - FooterToBottom"); 
    }
    
};

/**
 * Update the margin above the footer to allow more space. Helper function for 
 * footerToBottom
 * @param  {Integer} window_height  Height of the window 
 * @param  {Integer} footer_height  Height of the footer
 * @param  {Integer} content_height Height of the content
 */
htmlutilities.updateFooterHeight = function(footer_selector, content_selector){
    var window_height = $(window).height(); 
    var footer_height = $(footer_selector).height();
    var footer_top = $(footer_selector).position().top + footer_height;
    var content_height = $(content_selector).height();

    if(footer_top < window_height){ 
        $(footer_selector).css('margin-top', 10 + (window_height - footer_top) + 'px');
    }
    else{ 
        $(footer_selector).css('margin-top', '10px');
    }
};