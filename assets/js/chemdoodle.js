'use strict';

/**
 * @fileoverview ChemDoodle helper for 2D chemical sketch search
 * @author jjnaughton93@gmail.com (JJ Naughton)
 */

module.exports = (function() {
    let chemdoodle = {};

    /**
     * Initializes the chemdoodle canvas
     */
    chemdoodle.init = function() {
        console.log('init chem doodle');
        let myCanvas = new ChemDoodle.ViewerCanvas('chemdoodle', 150, 150);
        console.log(myCanvas);
        myCanvas.emptyMessage = 'No Data Loaded!';
        myCanvas.repaint();
        console.log("hit here...");
    };
    return chemdoodle;
})();

