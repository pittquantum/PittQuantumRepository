'use strict';

/**
 * @fileoverview PQR related 3Dmol manipulations
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 * @author jjnaughton93@gmail.com (JJ Naughton)
 */

//TODO: modularize 3dmol lib at the end of its file

module.exports = (function() {
    //TODO: this should be a module..
    //let 3Dmol = require('../3Dmol/3Dmol-nojquery');
    //TODO: these should be vars..
    let threeDMole = {
        allViewers: [],
        rotationTimers: [],
        dataType: 'mol2',
        defaultStyle: 'stick',
        backgroundColor: 0xffffff,
        backgroundOpacity: 1.0,
        rotationTime: 9,
        rotationXDegree: 1, //How many degrees to move every rotationTime
        rotationYDegree: 1,
        showSurface: true
    };

    /**
     * Update viewers
     * @param  {Object} config optional config to override default settings
     */
    threeDMole.initViewers = function() {
        $3Dmol.syncSurface = false;

        threeDMole.allViewers = $3Dmol.viewers;
        $.each(threeDMole.allViewers, function(index, viewer) {
            threeDMole.clearBackgrounds(viewer);
            viewer.setViewStyle({style: "outline", color: "black", width: 0.03});
            viewer.render();
/*
            if ($('#dipoleOne').length) {
                var dipoleOne = $('#dipoleOne').data()["value"];
                var dipoleTwo = $('#dipoleTwo').data()["value"];
                var dipoleThree = $('#dipoleThree').data()["value"];

                threeDMole.addArrow(viewer, dipoleOne, dipoleTwo, dipoleThree);
                viewer.render();
            }*/
            // pqr.threeDMole.rotate(viewer);
        });
    };

    /**
     * Set all of the background color alpha channel to 0. Cannot be done
     * with data attributes.
     * @param  {GLviewer}
     */
    threeDMole.clearBackgrounds = function(viewer) {
        viewer.setBackgroundColor(threeDMole.backgroundColor, 0);
        viewer.resize();
        viewer.render();
    };

    /**
     * Rotate a molecule viewer
     * @param  {GLViewer}
     */
    threeDMole.rotate = function(viewer) {
        var rotationTimers = window.setInterval(function() {
            viewer.rotate(threeDMole.rotationYDegree, 'y');
            viewer.rotate(threeDMole.rotationXDegree, 'x');
            viewer.render();
        }, threeDMole.rotationTime, viewer);
        threeDMole.rotationTimers.push(rotationTimers);
    };

    /**
     * Toggle the rotation of the viewer. Only hanldes one viewer.
     * @param  {GLViewer} the viewer to toggle the rotation
     */
    threeDMole.toggleRotation = function() {
        var rotationTimer = threeDMole.rotationTimers.pop();
        if (rotationTimer !== undefined) {
            clearInterval(rotationTimer);
        } else {
            threeDMole.rotate(threeDMole.allViewers[0]);
        }
    };

    /**
     * Update the surface color to the correct value
     * @param  {GLViewer} the viewer to set the surfaceColor on
     */
    threeDMole.setSurfaceColor = function(viewer) {

    };

    /**
     * Toggle the surface of this viewer.
     * @param  {GLViewer}
     */
    threeDMole.toggleSurface = function(viewer) {
        viewer = typeof viewer !== 'undefined' ?
            viewer : threeDMole.allViewers[0];
        threeDMole.removeSurface(viewer);
    };

    /**
     * Remove all of the surfaces for this viewere
     * @param  {GLViewer}
     */
    threeDMole.removeSurface = function(viewer) {
        viewer.removeAllSurfaces();
        viewer.render();
    };
    /**
     * Toggle the surface of this viewer.
     * @param  {GLViewer}
     */
    threeDMole.toggleSurface2 = function(viewer) {
        viewer = typeof viewer !== 'undefined' ?
            viewer : threeDMole.allViewers[0];
        threeDMole.addSurface(viewer);
    };
    /**
    * Add all the surface to this viewer
    * @param  {GLViewer}
    */
    threeDMole.addSurface = function(viewer) {
        viewer.addSurface($3Dmol.SurfaceType.MS, {color: "white", opacity: 0.80});
        viewer.render();
    };
    /**
     * Reset the viewer to the default zoom level
     */
    threeDMole.resetView = function() {
        threeDMole.allViewers[0].zoomTo();
    };

    threeDMole.addArrow = function(viewer, x, y, z) {
        threeDMole.allViewers[0].addArrow({
            end: new $3Dmol.Vector3(x, y, z),
            color: "black", wireframe: false
        });
        threeDMole.allViewers[0].render();
    };

    /**
     * Change the layout style of the selected viewer
     * @param  {String} newStyle - the type of style to change this viewer to
     */
    threeDMole.changeStyle = function(newStyle) {
        //Currently only getting the first viewer that exists
        var viewer = threeDMole.allViewers[0];
        if (viewer) {
            if (newStyle === "sphere") {
                viewer.setStyle({}, {
                    sphere: {}
                });
            }
            else if (newStyle === "stick") {
                viewer.setStyle({}, {
                    stick: {}
                });
            }
            else if (newStyle === "cross") {
                viewer.setStyle({}, {
                    cross: {}
                });
            }
            else if (newStyle === "line") {
                viewer.setStyle({}, {
                    line: {}
                });
            }
            else if (newStyle === "ballstick") {
                viewer.setStyle({}, {
                    stick: {radius: 0.15},
                    sphere: {radius: 0.40}
                });
            }
            viewer.render();
        }
    };

    return threeDMole;
})();

