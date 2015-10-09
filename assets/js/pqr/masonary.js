/**
 * @fileoverview Masonary Related Functions 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */
pqr.masonary = { //Config
    grid: null,
    default_options: {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        container: '.grid'
    }
};

/**
 * Initialize a masonary page. All items will be the same height. 
 * Therefore we don't need masonary can just use bootsrap coulmns and 
 * animate on scroll. 
 * @return {[type]} [description]
 */
pqr.masonary.init = function(container, itemSelector, columnWidth) {
    var options = this.default_options;
    options.columnWidth = '.grid-sizer';
    options.percentPosition = true;
    // this.grid = $('.grid').masonry(options);
    // this.imagesLoadedInit();
    this.animateOnScroll();
};

/**
 * Use the images loaded plugin that doesn't load images until they are 
 * official loaded into the browser
 */
pqr.masonary.imagesLoadedInit = function() {
    // layout Masonry after each image loads 
    this.grid.imagesLoaded().progress(function() {
        pqr.masonary.grid.masonry('layout');
    });
};

/**
 * Activate animation when the user scrolls to the bottom 
 * 
 */
pqr.masonary.animateOnScroll = function() {
    new AnimOnScroll(document.getElementById('grid'), {
        minDuration: 0.4,
        maxDuration: 0.7,
        viewportFactor: 0.2
    });
};