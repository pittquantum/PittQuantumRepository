/**
 * @fileoverview PQR related misc JS functions 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */
pqr.htmlUtilities = {
	element_symbols: ['h','he','li','be','b','c','n','o','f','ne','na','mg','al','si','p','s','cl','ar','k','ca','sc','ti','v','cr','mn','fe','co','ni','cu','zn','ga','ge','as','se','br','kr','rb','sr','y','zr','nb','mo','tc','ru','rh','pd','ag','cd','in','sn','sb','te','i','xe','cs','ba','la','ce','pr','nd','pm','sm','eu','gd','tb','dy','ho','er','tm','yb','lu','hf','ta','w','re','os','ir','pt','au','hg','tl','pb','bi','po','at','rn','fr','ra','ac','th','pa','u','np','pu','am','cm','bk','cf','es','fm','md','no','lr','rf','db','sg','bh','hs','mt','ds','rg','cp','uut','uuq','uup','uuh','uus','uuo'],
};

/**
 * Get the INCHI key. Used to generate the QR Code
 * 
 * @return {String} The INCHI key value in the properties table
 */
pqr.htmlUtilities.getINCHIKey = function() {
	var key = "";
	if ($(".molecule-inchikey").length) {
		var key = $(".molecule-inchikey").children().next().html();
	}
	else{
		return false; 
	}
	return $.trim(key)
};

/**
 * Reterieve the QR code url. Try to get the short URL first, then 
 * the long url, finally by the base INCHI key. If all fails redirect
 * to the home page. 
 * 
 * @return {String} The entire URL for the QR Code
 */
pqr.htmlUtilities.getQRURL = function(){
	var DOI_BASE = "http://doi.org/";

	if ($(".molecule-doi-short").length) {
		var url = DOI_BASE + $(".molecule-doi-short").text();
	}
	else if($(".molecule-doi-long").length){
		var url = DOI_BASE + $(".molecule-doi-long").text();
	}
	else if(this.getINCHIKey()){
		var url = htmlutilities.getRootURL();
		url += "/mol/" + this.getINCHIKey(); 
	}
	else{
		return htmlutilities.getRootURL(); //Default to home page 
	}

	return $.trim(url);
};

/**
 * Attempt to restore the users last font size.
 * 
 * @return {String} Font size 
 */
pqr.htmlUtilities.initFontSize = function() {
	accessibility.changeFontSize(pqr.htmlUtilities.getCurrentFontSize());
};

/**
 * Increase or decrease the base font size.
 * 
 * @param {int} type either 1 = increase, 0 = default, -1 = decrease 
 */
pqr.htmlUtilities.updateFont = function(type) {
	if (type === -1) {
		var newBaseSize = accessibility.fontSizeChanger(-1, pqr.htmlUtilities.getCurrentFontSize());
		htmlutilities.bootstrapFeedback("Decrease Font Size to " + newBaseSize, "feedback", "fa-font");
	} else if (type === 0) {
		var newBaseSize = accessibility.changeFontSize(accessibility.defaultFontSize);
		htmlutilities.bootstrapFeedback("Reset Font Size to " + newBaseSize, "feedback", "fa-font");
	} else if (type === 1) {
		var newBaseSize = accessibility.fontSizeChanger(1, pqr.htmlUtilities.getCurrentFontSize());
		htmlutilities.bootstrapFeedback("Increased Font Size to " + newBaseSize, "feedback", "fa-font");
	}

	if (pqr.features.localstorage) {
		localStorage.setItem("baseFontSize", newBaseSize);
	}

	//Send PQR Message 
	 
	
};


/**
 * Get the current font size 
 * @return {String} The current font size 
 */
pqr.htmlUtilities.getCurrentFontSize = function() {
	if (pqr.features.localstorage) {
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
}


/**
 * If there is no WebGL redirect the user. 
 */
pqr.htmlUtilities.redirectNoWebGL = function() {
	if (!pqr.features.webGL) {
		var msg = "<div class='alert alert-danger' role='alert'> <strong> <a href='http://get.webgl.org/'>WebGL</a> </strong> is not supported on your device! </div";
		$("#main").prepend(msg);

		//Currently sending them to get web gl page 
		window.location.replace("https://get.webgl.org/");
	} else {
		if (pqr.debug) console.log("WebGL Supported");
	}
}


/**
 * Updates the property viewer if there was a pervious value in localstorage 
 * 
 */
pqr.htmlUtilities.updatePropertiesViewer = function() {
	if (pqr.features.localstorage) {
		if (localStorage.getItem("moleculeLayout") == "detailed") {
			$("#molecule-details table .detailed").removeClass("hidden"); //Probably not necessary 
		} else {
			$("#molecule-details table .detailed").addClass("hidden");
		}
	}
};

/**
 * Update the element name size to fit on the line 
 * @param  String selector Jquery selector string 
 * @param  Objet options  Contains the options for the quickfit plugin
 */
pqr.htmlUtilities.initQuickFit = function(selector, options) {
	$(selector).quickfit(options);

	//Update on window resize 
	$(window).resize(function() {
		$(selector).quickfit(options);
	});
};

/**
 * Add a fille effect to the forms on focus and remove on blur
 * @return {[type]} [description]
 */
pqr.htmlUtilities.formStyleHelper = function() {
	[].slice.call(document.querySelectorAll('.input-field')).forEach(function(inputEl) {
		// in case the input is already filled..
		if (inputEl.value.trim() !== '') {
			classie.add(inputEl.parentNode, 'input--filled');
		}

		// events:
		inputEl.addEventListener('focus', onInputFocus);
		inputEl.addEventListener('blur', onInputBlur);
	});

	function onInputFocus(ev) {
		classie.add(ev.target.parentNode.parentNode, 'input--filled');
	}

	function onInputBlur(ev) {
		if (ev.target.value.trim() === '') {
			classie.remove(ev.target.parentNode.parentNode, 'input--filled');
			classie.remove(ev.target.parentNode, 'input--filled');
		}
	}
	
}();

/**
 * Returns true if the string is likely an inchi key
 * @param  {[type]}  string [description]
 * @return {Boolean}        [description]
 * @source https://gist.github.com/lsauer/1312860 (slightly modified)
 */
pqr.htmlUtilities.isINCHI = function(string){
	string = $.trim(string).toLowerCase(); 

	return 27===string.length && '-'===string[14] && '-'===string[25]
	&& !!string.match(/^([0-9A-Za-z\-]+)$/);
	
};

/**
 * Returns true if the string is likely a formula
 * @param  {[type]}  string [description]
 * @return {Boolean}        [description]
 */
pqr.htmlUtilities.isFormula = function(string){
	string = $.trim(string).toLowerCase(); 
	var numbers = string.match(/\d+/g);
	var letters = string.match(/[a-zA-Z]+/g);
	var isFormula = true; 

	//Has Numbers
	if (numbers != null) {
		if(letters != null){
			$.each(letters, function(index, value){
				if(!pqr.htmlUtilities.isSymbol(value)) {
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
		if(letters != null){
			$.each(letters, function(index, value){ 
				if(!pqr.htmlUtilities.isSymbol(value)) {
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
pqr.htmlUtilities.isSymbol = function(symbol){
	symbol = $.trim(symbol).toLowerCase(); 
	return $.inArray(symbol, this.element_symbols) !== -1;
};
