/**
 * @fileoverview Various web accessibility functions 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */
var accessibility = accessibility || {
	fontSizeChangerIndex: 2,
	defaultFontSize: 16
};

/**
 * Increases the body font size by some units multiplied by the fontSizeChangerIndex
 * 
 * @param  {String} current Current size of the font or false if not set
 * @param  {int} type    default 0, increase 1, decrease -1, 
 * @return {String}      the value of the new font size
 */
accessibility.fontSizeChanger = function(type, current) {
	if (type === -1) {
		return this.changeFontSize(parseInt(current) - this.fontSizeChangerIndex);
	} else if (type === 0) {
		return this.changeFontSize(this.defaultFontSize);
	} else if (type === 1) {
		return this.changeFontSize(parseInt(current) + this.fontSizeChangerIndex);
	}
};

/**
 * Changes the body font size to the size passed. 
 * 
 * @param  {int} size The newly calculated size of the body font, in a valid font size.
 * @return {int} The value of the new font size
 */
accessibility.changeFontSize = function(size){
	$("body").css("font-size", size.toString() + "px");
	return size;
};



