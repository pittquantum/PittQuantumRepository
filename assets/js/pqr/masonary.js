/**
 * @fileoverview Masonary Related Functions 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */

pqr.masonary = { //Config
	grid: null, 
    default_options: {
        itemSelector: '.grid-item', 
        columnWidth: 200,
        container: '.grid'
    }
};

/**
 * Initialize a masonary page 
 * @return {[type]} [description]
 */
pqr.masonary.init = function(container, itemSelector, columnWidth) {
	var options = this.default_options; 
	options.columnWidth = '.grid-sizer';
	options.percentPosition = true;

	this.grid = $('.grid').masonry(options);
	this.imagesLoadedInit(); 
};


/**
 * Use the images loaded plugin 
 */
pqr.masonary.imagesLoadedInit = function(){
	// layout Masonry after each image loads 
	var $grid = this.grid; 
	$grid.imagesLoaded().progress( function() {
	  $grid.masonry('layout');
	});
};


