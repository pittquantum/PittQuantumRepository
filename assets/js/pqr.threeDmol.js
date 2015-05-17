//Namespaces
var pqr = pqr || {};
pqr.htmlUtilities = pqr.htmlUtilities || {}; //General DOM maniplating and such mostly using jquery 
pqr.bindevents = pqr.bindevents || {}; //Any event binding should be done here if possible 
pqr.propertiesFormatter = pqr.propertiesFormatter || {}; //Functions to properly format various ascpets of the molecules  
pqr.threeDMole = pqr.threeDMole || {}; //Everything relating to 3dmol FILE: pqr.threedmol.js
pqr.typeahead = pqr.typeahead || {}; //Everything relating to typeahead plugin 



/**
 *	Changet the layout style of selected viewer (currently just the first viewer)
 *		--Viewer must exist at this point !
 *
 */
pqr.threeDMole.changeStyle = function(newStyle, viewer){
	var viewer = $3Dmol.viewers[0]; //Currently only getting the first viewer that exists 
	if(viewer){
		if(newStyle == "sphere"){
			viewer.setStyle({}, {sphere:{}});
		}
		else if(newStyle == "stick"){
			viewer.setStyle({}, {stick:{}});
		}
		else if(newStyle == "cross"){
			viewer.setStyle({}, {cross:{}});
		}
		else if(newStyle == "line"){
			viewer.setStyle({}, {line:{}});
		}
		
		viewer.render();
	}
}

/**
 *	Change whether or not to display the surface
 *		
 *
 */
pqr.threeDMole.changeSurface = function(surface, viewer){
	var viewer = $3Dmol.viewers[0]; //Currently only getting the first viewer that exists 
	if(viewer){

		if(surface === true){ //We want to turn on the surface 

		}
		else{//Disable the surface 
			
		}

		if(newStyle == "sphere"){
			viewer.setStyle({}, {sphere:{}});
		}
		else if(newStyle == "stick"){
			viewer.setStyle({}, {stick:{}});
		}
		else if(newStyle == "cross"){
			viewer.setStyle({}, {cross:{}});
		}
		else if(newStyle == "line"){
			viewer.setStyle({}, {line:{}});
		}
		
		viewer.render();
	}


}








/**
 *	Attempt to get responsiveness working. 
 *	Try redrawing the item over and over on width/height changes 
 *		-Expensive function 
 *
 */
pqr.threeDMole.activateResponsive = function(){
	console.log("Hello"); 
	console.log($3Dmol.viewers[0]); 
	// pqr.threeDMole.updateContainerSize($("#molecule-properties").css("height")); //Check for the id
	// pqr.threeDMole.redraw($3Dmol.viewers[0]);

	// $(window).resize(function() { //Can be more efficient 
	// 	//For the main molecule page get the height of the molecule properties
	// 	pqr.threeDMole.updateContainerSize($("#molecule-properties").css("height")); //Check for the id
	// 	var viewer = $3Dmol.viewers[0];
	// 	pqr.threeDMole.redraw(viewer);
	// });

}

/**
 *	Change the height and width of this element and render it 
 *	Doesn't seem to be neccessary but can play around with the zoom level 
 */
pqr.threeDMole.redraw = function(viewer){
	// viewer.resize();
	viewer.zoomTo(1); 
	// viewer.render();
	// console.log(viewer); 
}



/**
 *
 *
 */
pqr.threeDMole.updateContainerSize = function(height){
	// $("#molecule-viewer canvas").css("height", height);
	// $("#molecule-viewer div").css("height", height);
}