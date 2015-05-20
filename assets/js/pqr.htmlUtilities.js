/** 
 *	Adds the click events to the links and checks local storage
 *	to maintain previous set layout. 
 *	
 */
pqr.htmlUtilities.updateMoleculeView = function(){

	//Check the localStorage for the moleculeLayout using modernizer
	if (Modernizr.localstorage){
		
		//Update the 
		if(localStorage.getItem("moleculeLayout") == "detailed") $("#molecule-details table .detailed").removeClass("hidden"); //Probably not necessary 
		else $("#molecule-details table .detailed").addClass("hidden"); 

		//Update style of the viewer
		var moleculeLayoutStyle = localStorage.getItem("moleculeViewerlayout");
		if(false){ //Not yet working 
			if(moleculeLayoutStyle = "spheres"){
				pqr.threeDMole.changeStyle("sphere");
			}
			else if(moleculeViewerlayout = "lines"){
				pqr.threeDMole.changeStyle("line");
			}
			else if(moleculeViewerlayout = "sticks"){
				pqr.threeDMole.changeStyle("stick");
			}
			else if(moleculeViewerlayout == "crosses"){
				pqr.threeDMole.changeStyle("cross");
			}
		}

	}
	
}

/** 
 *	Get the INCHI key. Used to generate the QR Code
 *	
 *	
 */
pqr.htmlUtilities.getINCHIKey = function(){
	var key = ""; 
	if($(".molecule-inchikey").length){
		var  key = $(".molecule-inchikey").children().next().html();
	}
	return $.trim(key)
}

/**
 *	Activate bootstrap tooltips. 
 *		-Only do this on pages that tooltips exist for performance 
 */
pqr.htmlUtilities.toolTipOptIn = function(){
 	$('[data-toggle="tooltip"]').on("click", function(event){event.preventDefault();}); 
 	$(function() {
 		 $('[data-toggle="tooltip"]').tooltip(); //Opt in to tool tips 
 	});

     

 }

/**
 * 	Allows you to increase or decrease the body font size  
 *		Only should be used when pixels are the unit. 
 * 	@param {int} type either 0 = "init", 1 = "increase", -1 = "decrease", 2 = default
 * 	
 */
pqr.htmlUtilities.fontSizeChanger = function(type){
 	var DEFAULTSIZE = "16px"; 
 	var localstore = false; //Is localstorage avaiable 
 	var currentBaseSize, newBaseSize;
 	
 	if (Modernizr.localstorage) localstore = true; 

	if(type == 0){//Initizliaze by restoring the users settings  
	 	//Check the localStorage for the value 
		if(localstore){
			if(localStorage.getItem("baseFontSize") !== null){ //If set
				newBaseSize = localStorage.getItem("baseFontSize"); //Store the whole value e.g. = "14px" 
			}
		}
	}
	else{
		currentBaseSize = $("body").css("font-size");
		if(type == 1){//Increasing font
			newBaseSize = (parseInt(currentBaseSize) + 2).toString() + "px"; //Add two and concat "px"
		}
		else if(type == -1){//Decreasing font
			if(parseInt(currentBaseSize) >= 2){
				newBaseSize = (parseInt(currentBaseSize) - 2).toString() + "px"; //Subtract two and concat "px"
			}
		}
		else if(type == 2){ //Default Value 
			newBaseSize = DEFAULTSIZE;
		}
	}


	//Change the fontsize of the body tag
	$("body").css("font-size", newBaseSize);

	//Add the new value to the localstorage if avaiable 
	if(localstore){
		localStorage.setItem("baseFontSize", newBaseSize)
	}
}

/**
 *	Returns true if webGl is avaiable otherwise false
 *
 *	@return boolean 
 */
 pqr.htmlUtilities.checkWebGL = function(){
 	if(!Modernizr.webgl){
 		var msg = "<div class='alert alert-danger' role='alert'> <strong> <a href='http://get.webgl.org/'>WebGL</a> </strong> is not supported on your device! </div"; 
 		$("#main").prepend(msg); 

 		//Currently sending them to get web gl page 
 		window.location.replace("https://get.webgl.org/");
 	}
 	else{
 		if(pqr.debug) console.log("WebGL Supported"); 
 	}

 }