/**
 * @fileoverview Polyfills 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author jjnaughton93@gmail.com (JJ Naughton)
 */

module.exports = (function() {
    var polyfill = polyfill || {};

    //TODO: altering global String object; might be better served calling as method of polyfill obj
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        // Make sure we trim BOM and NBSP
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function() {
            return this.replace(rtrim, '');
        };
    }

    return polyfill;
})();
