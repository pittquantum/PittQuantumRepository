/**
 * @fileoverview Polyfills 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 */

var polyfill = polyfill || {};

polyfill.trim = function(){
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '');
            };
        })();
    }
}();
  