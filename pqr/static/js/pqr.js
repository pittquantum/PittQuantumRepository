window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(S.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return r===!1?e[o]:a(i,"function")?i.bind(r||t):i}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+k.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?c(o,t):(o=(e+" "+T.join(r+" ")+r).split(" "),s(o,t,n))}function l(){p.input=function(n){for(var r=0,o=n.length;o>r;r++)j[n[r]]=!!(n[r]in E);return j.list&&(j.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,o,a,i=0,c=e.length;c>i;i++)E.setAttribute("type",o=e[i]),r="text"!==E.type,r&&(E.value=x,E.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&E.style.WebkitAppearance!==n?(g.appendChild(E),a=t.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(E,null).WebkitAppearance&&0!==E.offsetHeight,g.removeChild(E)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?E.checkValidity&&E.checkValidity()===!1:E.value!=x)),P[e[i]]=!!r;return P}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,m="2.8.3",p={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,E=t.createElement("input"),x=":)",w={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",k=C.split(" "),T=C.toLowerCase().split(" "),N={svg:"http://www.w3.org/2000/svg"},M={},P={},j={},$=[],D=$.slice,F=function(e,n,r,o){var a,i,c,s,u=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),u.appendChild(c);return a=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(l?u:d).innerHTML+=a,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",s=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),i=n(u,e),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),g.style.overflow=s),!!i},z=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return F("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},A=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=a(o[e],"function"),a(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty;f=a(L,"undefined")||a(L.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=D.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(D.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(D.call(arguments)))};return r}),M.flexbox=function(){return u("flexWrap")},M.flexboxlegacy=function(){return u("boxDirection")},M.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},M.canvastext=function(){return!(!p.canvas||!a(t.createElement("canvas").getContext("2d").fillText,"function"))},M.webgl=function(){return!!e.WebGLRenderingContext},M.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",S.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},M.geolocation=function(){return"geolocation"in navigator},M.postmessage=function(){return!!e.postMessage},M.websqldatabase=function(){return!!e.openDatabase},M.indexedDB=function(){return!!u("indexedDB",e)},M.hashchange=function(){return A("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},M.history=function(){return!(!e.history||!history.pushState)},M.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},M.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},M.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(b.backgroundColor,"rgba")},M.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(b.backgroundColor,"rgba")||i(b.backgroundColor,"hsla")},M.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},M.backgroundsize=function(){return u("backgroundSize")},M.borderimage=function(){return u("borderImage")},M.borderradius=function(){return u("borderRadius")},M.boxshadow=function(){return u("boxShadow")},M.textshadow=function(){return""===t.createElement("div").style.textShadow},M.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},M.cssanimations=function(){return u("animationName")},M.csscolumns=function(){return u("columnCount")},M.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),i(b.backgroundImage,"gradient")},M.cssreflections=function(){return u("boxReflect")},M.csstransforms=function(){return!!u("transform")},M.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},M.csstransitions=function(){return u("transition")},M.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},M.generatedcontent=function(){var e;return F(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},M.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},M.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},M.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},M.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},M.webworkers=function(){return!!e.Worker},M.applicationcache=function(){return!!e.applicationCache},M.svg=function(){return!!t.createElementNS&&!!t.createElementNS(N.svg,"svg").createSVGRect},M.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==N.svg},M.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(N.svg,"animate")))},M.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(N.svg,"clipPath")))};for(var H in M)f(M,H)&&(d=H.toLowerCase(),p[d]=M[H](),$.push((p[d]?"":"no-")+d));return p.input||l(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),y=E=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function a(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),s=c.length;s>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=o(e);return!y.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||c(e,r),e}var u,l,d="3.7.0",f=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:a,createDocumentFragment:i};e.html5=y,s(t)}(this,t),p._version=m,p._prefixes=S,p._domPrefixes=T,p._cssomPrefixes=k,p.mq=z,p.hasEvent=A,p.testProp=function(e){return c([e])},p.testAllProps=u,p.testStyles=F,p.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+$.join(" "):""),p}(this,this.document);;
/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
;
(function ($) {
  var Quickfit, QuickfitHelper, defaults, pluginName;

  pluginName = 'quickfit';

  defaults = {
    min: 8,
    max: 12,
    tolerance: 0.02,
    truncate: false,
    width: null,
    sampleNumberOfLetters: 10,
    sampleFontSize: 12
  };
  QuickfitHelper = (function () {

    var sharedInstance = null;

    QuickfitHelper.instance = function (options) {
      if (!sharedInstance) {
        sharedInstance = new QuickfitHelper(options);
      }
      return sharedInstance;
    };

    function QuickfitHelper(options) {
      this.options = options;

      this.item = $('<span id="meassure"></span>');
      this.item.css({
        position: 'absolute',
        left: '-1000px',
        top: '-1000px',
        'font-size': "" + this.options.sampleFontSize + "px"
      });
      $('body').append(this.item);

      this.meassures = {};
    }

    QuickfitHelper.prototype.getMeassure = function (letter) {
      var currentMeassure;
      currentMeassure = this.meassures[letter];
      if (!currentMeassure) {
        currentMeassure = this.setMeassure(letter);
      }
      return currentMeassure;
    };

    QuickfitHelper.prototype.setMeassure = function (letter) {
      var currentMeassure, index, sampleLetter, text, _ref;

      text = '';
      sampleLetter = letter === ' ' ? '&nbsp;' : letter;

      for (index = 0, _ref = this.options.sampleNumberOfLetters - 1; 0 <= _ref ? index <= _ref : index >= _ref; 0 <= _ref ? index++ : index--) {
        text += sampleLetter;
      }

      this.item.html(text);
      currentMeassure = this.item.width() / this.options.sampleNumberOfLetters / this.options.sampleFontSize;
      this.meassures[letter] = currentMeassure;

      return currentMeassure;
    };

    return QuickfitHelper;

  })();

  Quickfit = (function () {

    function Quickfit(element, options) {
      this.$element = element;
      this.options = $.extend({}, defaults, options);
      this.$element = $(this.$element);
      this._defaults = defaults;
      this._name = pluginName;
      this.quickfitHelper = QuickfitHelper.instance(this.options);
    }

    Quickfit.prototype.fit = function () {
      var elementWidth;
      if (!this.options.width) {
        elementWidth = this.$element.width();
        this.options.width = elementWidth - this.options.tolerance * elementWidth;
      }
      if (this.text = this.$element.attr('data-quickfit')) {
        this.previouslyTruncated = true;
      } else {
        this.text = this.$element.text();
      }
      this.calculateFontSize();

      if (this.options.truncate) this.truncate();

      return {
        $element: this.$element,
        size: this.fontSize
      };
    };

    Quickfit.prototype.calculateFontSize = function () {
      var letter, textWidth, i;

      textWidth = 0;
      for (i = 0; i < this.text.length; ++i) {
        letter = this.text.charAt(i);
        textWidth += this.quickfitHelper.getMeassure(letter);
      }

      this.targetFontSize = parseInt(this.options.width / textWidth);
      return this.fontSize = Math.max(this.options.min, Math.min(this.options.max, this.targetFontSize));
    };

    Quickfit.prototype.truncate = function () {
      var index, lastLetter, letter, textToAdd, textWidth;

      if (this.fontSize > this.targetFontSize) {
        textToAdd = '';
        textWidth = 3 * this.quickfitHelper.getMeassure('.') * this.fontSize;

        index = 0;
        while (textWidth < this.options.width && index < this.text.length) {
          letter = this.text[index++];
          if (lastLetter) textToAdd += lastLetter;
          textWidth += this.fontSize * this.quickfitHelper.getMeassure(letter);
          lastLetter = letter;
        }

        if (textToAdd.length + 1 === this.text.length) {
          textToAdd = this.text;
        } else {
          textToAdd += '...';
        }
        this.textWasTruncated = true;

        return this.$element.attr('data-quickfit', this.text).html(textToAdd);

      } else {
        if (this.previouslyTruncated) {
          return this.$element.html(this.text);
        }
      }
    };

    return Quickfit;

  })();

  return $.fn.quickfit = function (options) {
    var measurements = [];

    // Separate measurements from repaints
    // First calculate all measurements...
    var $elements = this.each(function () {
      var measurement = new Quickfit(this, options).fit();
      measurements.push(measurement);
      return measurement.$element;
    });

    // ... then apply the measurements.
    for (var i = 0; i < measurements.length; i++) {
      var measurement = measurements[i];

      measurement.$element.css({ fontSize: measurement.size + 'px' });
    }

    return $elements;
  };

})(jQuery, window);;
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=70f3d16e04922bcf6d3b)
 * Config saved to config.json and https://gist.github.com/70f3d16e04922bcf6d3b
 */
if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}
+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.4
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.4'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.4
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.4'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.4
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.4'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.4
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.4'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--                        // up
    if (e.which == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.4
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.4'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    // if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.4
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.4'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (self && self.$tip && self.$tip.is(':visible')) {
      self.hoverState = 'in'
      return
    }

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $container   = this.options.container ? $(this.options.container) : this.$element.parent()
        var containerDim = this.getPosition($container)

        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < containerDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > containerDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < containerDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.4
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.4'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.4
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.3.4'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.4
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.4'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = $(document.body).height()

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.4
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.4'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.4
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.4'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.4
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);
;
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



;
/**
 * @fileoverview Misc. boostrap helper functions
 * @author JoshJRogan@gmail.com (Josh Rogan)
 */

var bootstrapUtilities = bootstrapUtilities || {};


/**
 * When a tooltip toggle is click activate the tooltip. 
 * 
 */
bootstrapUtilities.FullToolTipOptIn = function() {
	$('[data-toggle="tooltip"]').on("click", function(event) {
		event.preventDefault();
	});
	$(function() {
		$('[data-toggle="tooltip"]').tooltip(); //Opt in to tool tips 
	});
};
/**
 * @fileoverview Misc. DOM manipulation utilites
 * @author JoshJRogan@gmail.com (Josh Rogan)
 */
var htmlutilities = htmlutilities || {
    feedback_num: 0, //Counter for the number of feedback items
    feedback_timeout: 1500, //Time for the feedback message to stay up
    active_feedback_closer: false, //Flag to turn on or off the feedback closer event
};
/**
 * Get the base URL of the current page. If you are on 'http://melwood.jcubedworld.com/baseball/?type=dog'
 * 	'http://melwood.jcubedworld.com' will be returned. The protocal and domain will be returned. 
 * 
 * @return {String} The base URL of the current page including the protocal. 
 */
htmlutilities.getRootURL = function() {
    if (!location.origin) location.origin = location.protocol + "//" + location.host;
    return location.origin;
};
/**
 * When using anchors have smooth scrolling
 * 
 */
htmlutilities.smoothScrollingAnchors = function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
};

/**
 * Display bootstrap like notificaitons for a brief amount of time
 * @param  String message The message for the bootstrap feedback
 * @param  String type The Type/Style of the message
 * @param  Selector selector JQuery selector for the html message to be added
 * @param  String icon_class A font awesome icon class
 * 
 * @return String the resulting html feedback
 */
htmlutilities.bootstrapFeedback = function(message, type, icon_class) {

    var html = '<i class="fa ' + icon_class + '"></i> ' + message; 

    $('.top-right').notify({
        message: {
            html: html
        },
        type: type, 
        fadeOut: { enabled: true, delay: this.feedback_timeout}

    }).show();

};
;
/**
 * @fileoverview Initialize all JS for the website. Must be the 
 * first file concated in the pqr folder. 
 * 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */

var pqr = pqr || {
	debug: false 
};

pqr.features = { //Default to false 
	localstorage: false, 
	webGL: false
};

//Name Spaces 
pqr.bindevents = pqr.bindevents || {};
pqr.threeDMole = pqr.threeDMole || {};
pqr.utilities = pqr.utilities || {};
pqr.qrgen = pqr.qrgen || {};

/**
 * Update the avaiable features flags for this user. 
 * 
 */
pqr.checkFeatures = function(){
	if (Modernizr.localstorage) {
		this.features.localstorage = true;
	}
	else {
		if(this.debug) console.log ("Local storage is not avaiable!"); 
		pqr.redirectNoWebGL(); 
	}


	if (Modernizr.webgl) {
		this.features.webGL = true; 
	}
	else if(this.debug){
		console.log ("Web GL is not avaiable!"); 
	} 
};



;
/*
 * math-like functionality
 * quaternion, vector, matrix
 */

var $3Dmol = $3Dmol || {};
$3Dmol.Math = {

    clamp: function(x, min, max) {
        return Math.min(Math.max(x, min), max);
    },

    degToRad: function() {
        var degreeToRadiansFactor = Math.PI / 180;

        return function(deg) {
            return deg * degreeToRadiansFactor;
        };

    }()

};


// Quaternion
/** @constructor */
$3Dmol.Quaternion = function(x, y, z, w) {

    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.w = (w !== undefined) ? w : 1;

};

$3Dmol.Quaternion.prototype = {

    constructor: $3Dmol.Quaternion,

    set: function(x, y, z, w) {

        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;

        return this;
    },

    copy: function(q) {

        this.x = q.x;
        this.y = q.y;
        this.z = q.z;
        this.w = q.w;

        return this;
    },

    conjugate: function() {

        this.x *= -1;
        this.y *= -1;
        this.z *= -1;

        return this;
    },

    inverse: function() {

        return this.conjugate().normalize();
    },

    length: function() {

        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    },

    normalize: function() {

        var l = this.length();

        if (l === 0) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 1;
        } else {
            l = 1 / l;

            this.x *= l;
            this.y *= l;
            this.z *= l;
            this.w *= l;
        }

        return this;

    },

    multiply: function(q) {

        return this.multiplyQuaternions(this, q);
    },

    multiplyQuaternions: function(a, b) {

        var qax = a.x,
            qay = a.y,
            qaz = a.z,
            qaw = a.w;
        var qbx = b.x,
            qby = b.y,
            qbz = b.z,
            qbw = b.w;

        this.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
        this.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
        this.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
        this.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

    }
};

//A 2 Vector
/** @constructor */
$3Dmol.Vector2 = function(x, y) {

    this.x = x || 0.0;
    this.y = y || 0.0;
};

$3Dmol.Vector2.prototype = {

    constructor: $3Dmol.Vector2,

    set: function(x, y) {

        this.x = x;
        this.y = y;

        return this;
    },

    subVectors: function(a, b) {

        this.x = a.x - b.x;
        this.y = a.y - b.y;

        return this;
    },

    copy: function(v) {

        this.x = v.x;
        this.y = v.y;

        return this;
    },

    clone: function() {

        return new $3Dmol.Vector2(this.x, this.y);
    }

};

//A 3 Vector

$3Dmol.Vector3 = function(x, y, z) {
    this.x = x || 0.0;
    this.y = y || 0.0;
    this.z = z || 0.0;
};
/** @this {$3Dmol.Vector3} */
$3Dmol.Vector3.prototype = {

    constructor: $3Dmol.Vector3,

    set: function(x, y, z) {

        this.x = x;
        this.y = y;
        this.z = z;

        return this;
    },

    copy: function(v) {

        this.x = v.x;
        this.y = v.y;
        this.z = v.z;

        return this;
    },

    add: function(v) {

        this.x += v.x;
        this.y += v.y;
        this.z += v.z;

        return this;
    },

    addVectors: function(a, b) {

        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;

        return this;
    },

    sub: function(v) {

        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;

        return this;
    },

    subVectors: function(a, b) {

        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;

        return this;
    },

    multiplyScalar: function(s) {

        this.x *= s;
        this.y *= s;
        this.z *= s;

        return this;
    },

    divideScalar: function(s) {

        if (s !== 0) {
            this.x /= s;
            this.y /= s;
            this.z /= s;
        } else {
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }

        return this;
    },


    distanceTo: function(v) {
        return Math.sqrt(this.distanceToSquared(v));
    },

    distanceToSquared: function(v) {
        var dx = this.x - v.x;
        var dy = this.y - v.y;
        var dz = this.z - v.z;

        return dx * dx + dy * dy + dz * dz;
    },

    applyMatrix4: function(m) {

        var x = this.x,
            y = this.y,
            z = this.z;

        var e = m.elements;

        this.x = e[0] * x + e[4] * y + e[8] * z + e[12];
        this.y = e[1] * x + e[5] * y + e[9] * z + e[13];
        this.z = e[2] * x + e[6] * y + e[10] * z + e[14];

        return this;
    },

    applyProjection: function(m) {

        //input: $3Dmol.Matrix4 projection matrix

        var x = this.x,
            y = this.y,
            z = this.z;

        var e = m.elements;
        var d = (e[3] * x + e[7] * y + e[11] * z + e[15]);

        this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) / d;
        this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) / d;
        this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) / d;

        return this;
    },

    applyQuaternion: function(q) {

        //save values
        var x = this.x;
        var y = this.y;
        var z = this.z;

        var qx = q.x;
        var qy = q.y;
        var qz = q.z;
        var qw = q.w;

        //compute this as
        //t = 2 * cross(q.xyz, v)
        //newv = v + q.w * t + cross(q.xyz, t)
        //this from molecularmusings
        //http://molecularmusings.wordpress.com/2013/05/24/a-faster-quaternion-vector-multiplication/
        var t = {};
        t.x = 2 * (y * qz - z * qy);
        t.y = 2 * (z * qx - x * qz);
        t.z = 2 * (x * qy - y * qx);

        //cross t with q
        var t2 = {};
        t2.x = t.y * qz - t.z * qy;
        t2.y = t.z * qx - t.x * qz;
        t2.z = t.x * qy - t.y * qx;

        this.x = x + q.w * t.x + t2.x;
        this.y = y + q.w * t.y + t2.y;
        this.z = z + q.w * t.z + t2.z;

        return this;
    },

    negate: function() {

        return this.multiplyScalar(-1);
    },

    dot: function(v) {

        return this.x * v.x + this.y * v.y + this.z * v.z;
    },

    length: function() {

        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },

    lengthSq: function() {

        return (this.x * this.x + this.y * this.y + this.z * this.z);
    },

    normalize: function() {

        return this.divideScalar(this.length());
    },

    cross: function(v) {

        var x = this.x,
            y = this.y,
            z = this.z;

        this.x = y * v.z - z * v.y;
        this.y = z * v.x - x * v.z;
        this.z = x * v.y - y * v.x;

        return this;
    },

    crossVectors: function(a, b) {

        this.x = a.y * b.z - a.z * b.y;
        this.y = a.z * b.x - a.x * b.z;
        this.z = a.x * b.y - a.y * b.x;

        return this;
    },

    getPositionFromMatrix: function(m) {

        this.x = m.elements[12];
        this.y = m.elements[13];
        this.z = m.elements[14];

        return this;
    },

    setEulerFromRotationMatrix: function(m, order) {

        // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

        var te = m.elements;
        var m11 = te[0],
            m12 = te[4],
            m13 = te[8];
        var m21 = te[1],
            m22 = te[5],
            m23 = te[9];
        var m31 = te[2],
            m32 = te[6],
            m33 = te[10];

        if (order === undefined || order === 'XYZ') {

            this.y = Math.asin($3Dmol.Math.clamp(m13, -1, 1));

            if (Math.abs(m13) < 0.99999) {

                this.x = Math.atan2(-m23, m33);
                this.z = Math.atan2(-m12, m11);

            } else {

                this.x = Math.atan2(m32, m22);
                this.z = 0;

            }
        } else {
            console.error("Error with vector's setEulerFromRotationMatrix: Unknown order: " + order);
        }

        return this;

    },

    clone: function() {
        return new $3Dmol.Vector3(this.x, this.y, this.z);
    }

};

//Matrices

//Matrix3
/** @constructor */
$3Dmol.Matrix3 = function(n11, n12, n13, n21, n22, n23, n31, n32, n33) {

    this.elements = new Float32Array(9);

    this.set(
        (n11 !== undefined) ? n11 : 1, n12 || 0, n13 || 0,
        n21 || 0, (n22 !== undefined) ? n22 : 1, n23 || 0,
        n31 || 0, n32 || 0, (n33 !== undefined) ? n33 : 1
    );

};

$3Dmol.Matrix3.prototype = {

    constructor: $3Dmol.Matrix3,

    set: function(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
        var te = this.elements;

        te[0] = n11;
        te[3] = n12;
        te[6] = n13;
        te[1] = n21;
        te[4] = n22;
        te[7] = n23;
        te[2] = n31;
        te[5] = n32;
        te[8] = n33;

        return this;
    },

    identity: function() {
        this.set(
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        );

        return this;
    },

    copy: function(m) {
        var me = m.elements;

        this.set(
            me[0], me[3], me[6],
            me[1], me[4], me[7],
            me[2], me[5], me[8]
        );
    },

    multiplyScalar: function(s) {
        var te = this.elements;

        te[0] *= s;
        te[3] *= s;
        te[6] *= s;
        te[1] *= s;
        te[4] *= s;
        te[7] *= s;
        te[2] *= s;
        te[5] *= s;
        te[8] *= s;

        return this;
    },

    getInverse: function(matrix, throwOnInvertible) {
        // input: Matrix4

        var me = matrix.elements;
        var te = this.elements;

        te[0] = me[10] * me[5] - me[6] * me[9];
        te[1] = -me[10] * me[1] + me[2] * me[9];
        te[2] = me[6] * me[1] - me[2] * me[5];
        te[3] = -me[10] * me[4] + me[6] * me[8];
        te[4] = me[10] * me[0] - me[2] * me[8];
        te[5] = -me[6] * me[0] + me[2] * me[4];
        te[6] = me[9] * me[4] - me[5] * me[8];
        te[7] = -me[9] * me[0] + me[1] * me[8];
        te[8] = me[5] * me[0] - me[1] * me[4];

        var det = me[0] * te[0] + me[1] * te[3] + me[2] * te[6];

        // no inverse

        if (det === 0) {

            var msg = "Matrix3.getInverse(): can't invert matrix, determinant is 0";

            if (throwOnInvertible || false) {

                throw new Error(msg);

            } else {

                console.warn(msg);

            }

            this.identity();

            return this;

        }

        this.multiplyScalar(1.0 / det);

        return this;
    },

    transpose: function() {
        var tmp, m = this.elements;

        tmp = m[1];
        m[1] = m[3];
        m[3] = tmp;
        tmp = m[2];
        m[2] = m[6];
        m[6] = tmp;
        tmp = m[5];
        m[5] = m[7];
        m[7] = tmp;

        return this;
    },

    clone: function() {
        var te = this.elements;

        return new $3Dmol.Matrix3(

            te[0], te[3], te[6],
            te[1], te[4], te[7],
            te[2], te[5], te[8]

        );
    }

};

//Matrix 4
/** @constructor */
$3Dmol.Matrix4 = function(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {

    var te = this.elements = new Float32Array(16);

    te[0] = (n11 !== undefined) ? n11 : 1;
    te[4] = n12 || 0;
    te[8] = n13 || 0;
    te[12] = n14 || 0;
    te[1] = n21 || 0;
    te[5] = (n22 !== undefined) ? n22 : 1;
    te[9] = n23 || 0;
    te[13] = n24 || 0;
    te[2] = n31 || 0;
    te[6] = n32 || 0;
    te[10] = (n33 !== undefined) ? n33 : 1;
    te[14] = n34 || 0;
    te[3] = n41 || 0;
    te[7] = n42 || 0;
    te[11] = n43 || 0;
    te[15] = (n44 !== undefined) ? n44 : 1;

};

$3Dmol.Matrix4.prototype = {

    constructor: $3Dmol.Matrix4,

    set: function(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
        var te = this.elements;

        te[0] = n11;
        te[4] = n12;
        te[8] = n13;
        te[12] = n14;
        te[1] = n21;
        te[5] = n22;
        te[9] = n23;
        te[13] = n24;
        te[2] = n31;
        te[6] = n32;
        te[10] = n33;
        te[14] = n34;
        te[3] = n41;
        te[7] = n42;
        te[11] = n43;
        te[15] = n44;

        return this;
    },

    identity: function() {
        this.set(

            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1

        );

        return this;
    },

    copy: function(m) {
        var me = m.elements;

        this.set(

            me[0], me[4], me[8], me[12],
            me[1], me[5], me[9], me[13],
            me[2], me[6], me[10], me[14],
            me[3], me[7], me[11], me[15]

        );

        return this;
    },

    setRotationFromEuler: function(v, order) {

        var te = this.elements;

        var x = v.x,
            y = v.y,
            z = v.z;
        var a = Math.cos(x),
            b = Math.sin(x);
        var c = Math.cos(y),
            d = Math.sin(y);
        var e = Math.cos(z),
            f = Math.sin(z);

        if (order === undefined || order === 'XYZ') {

            var ae = a * e,
                af = a * f,
                be = b * e,
                bf = b * f;

            te[0] = c * e;
            te[4] = -c * f;
            te[8] = d;

            te[1] = af + be * d;
            te[5] = ae - bf * d;
            te[9] = -b * c;

            te[2] = bf - ae * d;
            te[6] = be + af * d;
            te[10] = a * c;

        } else
            console.error("Error with matrix4 setRotationFromEuler. Order: " + order);

        return this;

    },

    setRotationFromQuaternion: function(q) {
        var te = this.elements;

        var x = q.x,
            y = q.y,
            z = q.z,
            w = q.w;
        var x2 = x + x,
            y2 = y + y,
            z2 = z + z;
        var xx = x * x2,
            xy = x * y2,
            xz = x * z2;
        var yy = y * y2,
            yz = y * z2,
            zz = z * z2;
        var wx = w * x2,
            wy = w * y2,
            wz = w * z2;

        te[0] = 1 - (yy + zz);
        te[4] = xy - wz;
        te[8] = xz + wy;

        te[1] = xy + wz;
        te[5] = 1 - (xx + zz);
        te[9] = yz - wx;

        te[2] = xz - wy;
        te[6] = yz + wx;
        te[10] = 1 - (xx + yy);

        return this;
    },

    lookAt: function() {
        var x = new $3Dmol.Vector3();
        var y = new $3Dmol.Vector3();
        var z = new $3Dmol.Vector3();

        return function(eye, target, up) {

            var te = this.elements;

            z.subVectors(eye, target).normalize();

            if (z.length() === 0) {

                z.z = 1;

            }

            x.crossVectors(up, z).normalize();

            if (x.length() === 0) {

                z.x += 0.0001;
                x.crossVectors(up, z).normalize();

            }

            y.crossVectors(z, x);


            te[0] = x.x;
            te[4] = y.x;
            te[8] = z.x;
            te[1] = x.y;
            te[5] = y.y;
            te[9] = z.y;
            te[2] = x.z;
            te[6] = y.z;
            te[10] = z.z;

            return this;
        };

    }(),

    multiplyMatrices: function(a, b) {
        var ae = a.elements;
        var be = b.elements;
        var te = this.elements;

        var a11 = ae[0],
            a12 = ae[4],
            a13 = ae[8],
            a14 = ae[12];
        var a21 = ae[1],
            a22 = ae[5],
            a23 = ae[9],
            a24 = ae[13];
        var a31 = ae[2],
            a32 = ae[6],
            a33 = ae[10],
            a34 = ae[14];
        var a41 = ae[3],
            a42 = ae[7],
            a43 = ae[11],
            a44 = ae[15];

        var b11 = be[0],
            b12 = be[4],
            b13 = be[8],
            b14 = be[12];
        var b21 = be[1],
            b22 = be[5],
            b23 = be[9],
            b24 = be[13];
        var b31 = be[2],
            b32 = be[6],
            b33 = be[10],
            b34 = be[14];
        var b41 = be[3],
            b42 = be[7],
            b43 = be[11],
            b44 = be[15];

        te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
        te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
        te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
        te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

        te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
        te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
        te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
        te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

        te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
        te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
        te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
        te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

        te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
        te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
        te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
        te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

        return this;
    },

    multiplyScalar: function(s) {
        var te = this.elements;

        te[0] *= s;
        te[4] *= s;
        te[8] *= s;
        te[12] *= s;
        te[1] *= s;
        te[5] *= s;
        te[9] *= s;
        te[13] *= s;
        te[2] *= s;
        te[6] *= s;
        te[10] *= s;
        te[14] *= s;
        te[3] *= s;
        te[7] *= s;
        te[11] *= s;
        te[15] *= s;

        return this;
    },

    transpose: function() {
        var te = this.elements;
        var tmp;

        tmp = te[1];
        te[1] = te[4];
        te[4] = tmp;
        tmp = te[2];
        te[2] = te[8];
        te[8] = tmp;
        tmp = te[6];
        te[6] = te[9];
        te[9] = tmp;

        tmp = te[3];
        te[3] = te[12];
        te[12] = tmp;
        tmp = te[7];
        te[7] = te[13];
        te[13] = tmp;
        tmp = te[11];
        te[11] = te[14];
        te[14] = tmp;

        return this;
    },

    getPosition: function() {
        var v1 = new $3Dmol.Vector3();

        return function() {

            console.warn('DEPRECATED: Matrix4\'s .getPosition() has been removed. Use Vector3.getPositionFromMatrix( matrix ) instead.');

            var te = this.elements;
            return v1.set(te[12], te[13], te[14]);
        };

    }(),

    setPosition: function(v) {
        var te = this.elements;

        te[12] = v.x;
        te[13] = v.y;
        te[14] = v.z;

        return this;
    },

    getInverse: function(m, throwOnInvertible) {
        // based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
        var te = this.elements;
        var me = m.elements;

        var n11 = me[0],
            n12 = me[4],
            n13 = me[8],
            n14 = me[12];
        var n21 = me[1],
            n22 = me[5],
            n23 = me[9],
            n24 = me[13];
        var n31 = me[2],
            n32 = me[6],
            n33 = me[10],
            n34 = me[14];
        var n41 = me[3],
            n42 = me[7],
            n43 = me[11],
            n44 = me[15];

        te[0] = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44;
        te[4] = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44;
        te[8] = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44;
        te[12] = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
        te[1] = n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44;
        te[5] = n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44;
        te[9] = n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44;
        te[13] = n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34;
        te[2] = n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44;
        te[6] = n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44;
        te[10] = n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44;
        te[14] = n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34;
        te[3] = n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43;
        te[7] = n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43;
        te[11] = n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43;
        te[15] = n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33;

        var det = me[0] * te[0] + me[1] * te[4] + me[2] * te[8] + me[3] * te[12];

        if (det === 0) {

            var msg = "Matrix4.getInverse(): can't invert matrix, determinant is 0";

            if (throwOnInvertible || false) {

                throw new Error(msg);

            } else {

                console.warn(msg);

            }

            this.identity();

            return this;
        }

        this.multiplyScalar(1 / det);

        return this;
    },

    compose: function() {
        var mRotation = new $3Dmol.Matrix4(),
            mScale = new $3Dmol.Matrix4();

        return function(translation, rotation, scale) {

            var te = this.elements;

            mRotation.identity();
            mRotation.setRotationFromQuaternion(rotation);

            mScale.makeScale(scale.x, scale.y, scale.z);

            this.multiplyMatrices(mRotation, mScale);

            te[12] = translation.x;
            te[13] = translation.y;
            te[14] = translation.z;

            return this;

        };
    }(),

    decompose: function() {
        var x = new $3Dmol.Vector3(),
            y = new $3Dmol.Vector3(),
            z = new $3Dmol.Vector3(),
            matrix = new $3Dmol.Matrix4();

        return function(translation, rotation, scale) {

            var te = this.elements;

            // grab the axis vectors
            x.set(te[0], te[1], te[2]);
            y.set(te[4], te[5], te[6]);
            z.set(te[8], te[9], te[10]);

            translation = (translation instanceof $3Dmol.Vector3) ? translation : new $3Dmol.Vector3();
            rotation = (rotation instanceof $3Dmol.Quaternion) ? rotation : new $3Dmol.Quaternion();
            scale = (scale instanceof $3Dmol.Vector3) ? scale : new $3Dmol.Vector3();

            scale.x = x.length();
            scale.y = y.length();
            scale.z = z.length();

            translation.x = te[12];
            translation.y = te[13];
            translation.z = te[14];

            // scale the rotation part

            matrix.copy(this);

            matrix.elements[0] /= scale.x;
            matrix.elements[1] /= scale.x;
            matrix.elements[2] /= scale.x;

            matrix.elements[4] /= scale.y;
            matrix.elements[5] /= scale.y;
            matrix.elements[6] /= scale.y;

            matrix.elements[8] /= scale.z;
            matrix.elements[9] /= scale.z;
            matrix.elements[10] /= scale.z;

            rotation.setFromRotationMatrix(matrix);

            return [translation, rotation, scale];

        };
    }(),

    scale: function(v) {
        var te = this.elements;
        var x = v.x,
            y = v.y,
            z = v.z;

        te[0] *= x;
        te[4] *= y;
        te[8] *= z;
        te[1] *= x;
        te[5] *= y;
        te[9] *= z;
        te[2] *= x;
        te[6] *= y;
        te[10] *= z;
        te[3] *= x;
        te[7] *= y;
        te[11] *= z;

        return this;
    },

    getMaxScaleOnAxis: function() {

        var te = this.elements;

        var scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
        var scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
        var scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];

        return Math.sqrt(Math.max(scaleXSq, Math.max(scaleYSq, scaleZSq)));

    },

    makeFrustum: function(left, right, bottom, top, near, far) {
        var te = this.elements;
        var x = 2 * near / (right - left);
        var y = 2 * near / (top - bottom);

        var a = (right + left) / (right - left);
        var b = (top + bottom) / (top - bottom);
        var c = -(far + near) / (far - near);
        var d = -2 * far * near / (far - near);

        te[0] = x;
        te[4] = 0;
        te[8] = a;
        te[12] = 0;
        te[1] = 0;
        te[5] = y;
        te[9] = b;
        te[13] = 0;
        te[2] = 0;
        te[6] = 0;
        te[10] = c;
        te[14] = d;
        te[3] = 0;
        te[7] = 0;
        te[11] = -1;
        te[15] = 0;

        return this;
    },

    makePerspective: function(fov, aspect, near, far) {
        var ymax = near * Math.tan($3Dmol.Math.degToRad(fov * 0.5));
        var ymin = -ymax;
        var xmin = ymin * aspect;
        var xmax = ymax * aspect;

        return this.makeFrustum(xmin, xmax, ymin, ymax, near, far);
    },

    isEqual: function(m) {
        var me = m.elements;
        var te = this.elements;

        if (te[0] == me[0] && te[4] == me[4] && te[8] == me[8] && te[12] == me[12] &&
            te[1] == me[1] && te[5] == me[5] && te[9] == me[9] && te[13] == me[13] &&
            te[2] == me[2] && te[6] == me[6] && te[10] == me[10] && te[14] == me[14] &&
            te[3] == me[3] && te[7] == me[7] && te[11] == me[11] && te[15] == me[15]) {
            return true;
        } else {
            return false;
        }
    },

    clone: function() {
        var te = this.elements;

        return new $3Dmol.Matrix4(

            te[0], te[4], te[8], te[12],
            te[1], te[5], te[9], te[13],
            te[2], te[6], te[10], te[14],
            te[3], te[7], te[11], te[15]

        );
    },

    isEqual: function(m) {
        var me = m.elements;
        var te = this.elements;

        if (te[0] == me[0] && te[4] == me[4] && te[8] == me[8] && te[12] == me[12] &&
            te[1] == me[1] && te[5] == me[5] && te[9] == me[9] && te[13] == me[13] &&
            te[2] == me[2] && te[6] == me[6] && te[10] == me[10] && te[14] == me[14] &&
            te[3] == me[3] && te[7] == me[7] && te[11] == me[11] && te[15] == me[15]) {
            return true;
        } else {
            return false;
        }
    }

};
/** @constructor */
$3Dmol.Ray = function(origin, direction) {

    this.origin = (origin !== undefined) ?
        origin : new $3Dmol.Vector3();

    this.direction = (direction !== undefined) ?
        direction : new $3Dmol.Vector3();

};

//TODO: Remove methods we don't need (intersectPlane ??)
$3Dmol.Ray.prototype = {

    constructor: $3Dmol.Ray,

    set: function(origin, direction) {

        this.origin.copy(origin);
        this.direction.copy(direction);

        return this;

    },

    copy: function(ray) {

        this.origin.copy(ray.origin);
        this.direction.copy(ray.direction);

        return this;

    },

    at: function(t, optionalTarget) {

        var result = optionalTarget || new $3Dmol.Vector3();

        return result.copy(this.direction).multiplyScalar(t).add(this.origin);

    },

    recast: function() {

        var v1 = new $3Dmol.Vector3();

        return function(t) {
            this.origin.copy(this.at(t, v1));

            return this;
        };

    }(),

    closestPointToPoint: function(point, optionalTarget) {

        var result = optionalTarget || new $3Dmol.Vector3();
        result.subVectors(point, this.origin);
        var directionDistance = result.dot(this.direction);

        //returns a point on this ray
        return result.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);

    },

    distanceToPoint: function() {

        var v1 = new $3Dmol.Vector3();

        return function(point) {
            var directionDistance = v1.subVectors(point, this.origin).dot(this.direction);
            v1.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);

            return v1.distanceTo(point);
        };

    }(),

    isIntersectionCylinder: function() {

    },

    isIntersectionSphere: function(sphere) {

        return (this.distanceToPoint(sphere.center) <= sphere.radius);

    },

    isIntersectionPlane: function(plane) {

        var denominator = plane.normal.dot(this.direction);

        //plane and ray are not perpendicular
        if (denominator !== 0)
            return true;

        if (plane.distanceToPoint(this.origin) === 0)
            return true;

        return false;

    },

    distanceToPlane: function(plane) {

        var denominator = plane.normal.dot(this.direction);
        if (denominator === 0) {

            //line is coplanar
            if (plane.distanceToPoint(this.origin) === 0)
                return 0;

            //ray is parallel
            return undefined;
        }

        var t = -(this.origin.dot(plane.normal) + plane.constant) / denominator;

        return t;

    },

    intersectPlane: function(plane, optionalTarget) {

        var t = this.distanceToPlane(plane);

        if (t === undefined)
            return undefined;

        return this.at(t, optionalTarget);

    },

    applyMatrix4: function(matrix4) {

        this.direction.add(this.origin).applyMatrix4(matrix4);
        this.origin.applyMatrix4(matrix4);
        this.direction.sub(this.origin);

        return this;

    },

    equals: function(ray) {

        return ray.origin.equals(this.origin) && ray.direction.equals(this.direction);

    },

    clone: function() {

        return new $3Dmol.Ray().copy(this);

    }


};

//Intersection sphere and box shapes.  


//Intersection sphere for sphere, stick render
/** @constructor */
$3Dmol.Sphere = function(center, radius) {

    this.center = (center !== undefined) ?
        center : new $3Dmol.Vector3();

    this.radius = (radius !== undefined) ?
        radius : 0;

};

$3Dmol.Sphere.prototype = {

    constructor: $3Dmol.Sphere,

    set: function(center, radius) {

        this.center.copy(center);
        this.radius = radius;

        return this;

    },

    copy: function(sphere) {

        this.center.copy(sphere.center);
        this.radius = sphere.radius;

        return this;

    },

    applyMatrix4: function(matrix) {

        this.center.applyMatrix4(matrix);
        this.radius = this.radius * matrix.getMaxScaleOnAxis();

        return this;

    },

    translate: function(offset) {

        this.center.add(offset);

        return this;

    },

    equals: function(sphere) {

        return sphere.center.equals(this.center) && (sphere.radius === this.radius);

    },

    clone: function() {

        return new $3Dmol.Sphere().copy(this);

    }

};


//Bounding cylinder for stick render  
/** @constructor */
$3Dmol.Cylinder = function(c1, c2, radius) {

    this.c1 = (c1 !== undefined) ?
        c1 : new $3Dmol.Vector3();

    this.c2 = (c2 !== undefined) ?
        c2 : new $3Dmol.Vector3();

    this.direction = new $3Dmol.Vector3().subVectors(this.c2, this.c1).normalize();

    this.radius = (radius !== undefined) ?
        radius : 0;

};

$3Dmol.Cylinder.prototype = {

    constructor: $3Dmol.Cylinder,

    copy: function(cylinder) {

        this.c1.copy(cylinder.c1);
        this.c2.copy(cylinder.c2);
        this.direction.copy(cylinder.direction);
        this.radius = cylinder.radius;

        return this;

    },

    lengthSq: function() {

        var vector = new $3Dmol.Vector3();

        return function() {
            return vector.subVectors(this.c2, this.c1).lengthSq();
        };

    }(),

    applyMatrix4: function(matrix) {

        this.direction.add(this.c1).applyMatrix4(matrix);
        this.c1.applyMatrix4(matrix);
        this.c2.applyMatrix4(matrix);
        this.direction.sub(this.c1).normalize();
        this.radius = this.radius * matrix.getMaxScaleOnAxis();

        return this;

    }

};


//plane specified by three points
/** @constructor */
$3Dmol.Triangle = function(a, b, c) {

    this.a = (a !== undefined) ?
        a : new $3Dmol.Vector3();

    this.b = (b !== undefined) ?
        b : new $3Dmol.Vector3();

    this.c = (c !== undefined) ?
        c : new $3Dmol.Vector3();

};

$3Dmol.Triangle.prototype = {

    constructor: $3Dmol.Triangle,

    copy: function(triangle) {

        this.a.copy(triangle.a);
        this.b.copy(triangle.b);
        this.c.copy(triangle.c);

        return this;

    },

    applyMatrix4: function(matrix) {

        this.a.applyMatrix4(matrix);
        this.b.applyMatrix4(matrix);
        this.c.applyMatrix4(matrix);

        return this;

    },

    getNormal: function() {

        var v1 = new $3Dmol.Vector3();

        return function() {

            var norm = this.a.clone();
            norm.sub(this.b);
            v1.subVectors(this.c, this.b);

            norm.cross(v1);
            norm.normalize();

            return norm;

        };

    }()

};


/* core Object3D
 * Base class for Scene, Camera, Geometry
 * Geometry class
 */

//Event Handling
/** @this {$3Dmol.EventDispatcher} */
$3Dmol.EventDispatcher = function() {

    var listeners = {};

    this.addEventListener = function(type, listener) {
        if (listeners[type] === undefined)
            listeners[type] = [];

        if (listeners[type].indexOf(listener) === -1)
            listeners[type].push(listener);
    };

    this.removeEventListener = function(type, listener) {

        var index = listeners[type].indexOf(listener);

        if (index !== -1)
            listeners[type].splice(index, 1);

    };

    this.dispatchEvent = function(event) {

        var listenerArray = listeners[event.type];

        if (listenerArray !== undefined) {
            event.target = this;

            for (var i = 0, l = listenerArray.length; i < l; i++)
                listenerArray[i].call(this, event);

        }

    };

};

$3Dmol.Color = function(color) {

    if (arguments.length > 1) {
        this.r = arguments[0] || 0.0;
        this.g = arguments[1] || 0.0;
        this.b = arguments[2] || 0.0;

        return this;
    }

    return this.set(color);

};

$3Dmol.Color.prototype = {

    constructor: $3Dmol.Color,

    r: 0.0,
    g: 0.0,
    b: 0.0,

    set: function(val) {

        if (val instanceof $3Dmol.Color)
            return val.clone();

        else if (typeof val === 'number')
            this.setHex(val);
    },

    setHex: function(hex) {

        hex = Math.floor(hex);

        this.r = (hex >> 16 & 255) / 255;
        this.g = (hex >> 8 & 255) / 255;
        this.b = (hex & 255) / 255;

        return this;
    },

    getHex: function() {
        var R = Math.round(this.r * 255);
        var G = Math.round(this.g * 255);
        var B = Math.round(this.b * 255);
        return R << 16 | G << 8 | B;
    },

    clone: function() {
        return new $3Dmol.Color(this.r, this.g, this.b);
    },

    copy: function(color) {
        this.r = color.r;
        this.g = color.g;
        this.b = color.b;

        return this;
    },

    //return object that represents color components from 0 to 255
    scaled: function() {
        var ret = {};
        ret.r = Math.round(this.r * 255);
        ret.g = Math.round(this.g * 255);
        ret.b = Math.round(this.b * 255);
        ret.a = 1.0;
        return ret;
    }

};

//Object3D base constructor function
/** @this {$3Dmol.Object3D} */
$3Dmol.Object3D = function() {

    this.id = $3Dmol.Object3DIDCount++;

    this.name = "";

    this.parent = undefined;
    this.children = [];

    this.position = new $3Dmol.Vector3();
    this.rotation = new $3Dmol.Vector3();
    this.matrix = new $3Dmol.Matrix4();
    this.matrixWorld = new $3Dmol.Matrix4();
    this.quaternion = new $3Dmol.Quaternion();
    this.eulerOrder = 'XYZ';

    this.up = new $3Dmol.Vector3(0, 1, 0);
    this.scale = new $3Dmol.Vector3(1, 1, 1);

    this.matrixAutoUpdate = true;
    this.matrixWorldNeedsUpdate = true;
    this.rotationAutoUpdate = true;
    this.useQuaternion = false;

    this.visible = true;

};

$3Dmol.Object3D.prototype = {

    constructor: $3Dmol.Object3D,

    lookAt: function(vector) {

        this.matrix.lookAt(vector, this.position, this.up);

        if (this.rotationAutoUpdate) {

            if (this.useQuaternion === true)
                this.quaternion.copy(this.matrix.decompose()[1]);
            else
                this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder);
        }
    },

    //add child object
    add: function(object) {
        if (object === this) {
            console.error("Can't add $3Dmol.Object3D to itself");
            return;
        }

        object.parent = this;
        this.children.push(object);

        //add to the scene (i.e. follow up this instance's parents until reach the top)

        var scene = this;

        while (scene.parent !== undefined)
            scene = scene.parent;

        if (scene !== undefined && scene instanceof $3Dmol.Scene)
            scene.__addObject(object);

    },

    remove: function(object) {

        var index = this.children.indexOf(object);

        if (index !== -1) {

            object.parent = undefined;
            this.children.splice(index, 1);

            //Remove from scene

            var scene = this;

            while (scene.parent !== undefined)
                scene = scene.parent;

            if (scene !== undefined && scene instanceof $3Dmol.Scene)
                scene.__removeObject(object);

        }
    },

    updateMatrix: function() {

        this.matrix.setPosition(this.position);

        if (this.useQuaternion === false)
            this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder);
        else
            this.matrix.setRotationFromQuaternion(this.quaternion);

        //TODO: Do I need this??
        if (this.scale.x !== 1 || this.scale.y !== 1 || this.scale.z !== 1)
            this.matrix.scale(this.scale);

        this.matrixWorldNeedsUpdate = true;

    },

    updateMatrixWorld: function(force) {

        if (this.matrixAutoUpdate === true)
            this.updateMatrix();

        if (this.matrixWorldNeedsUpdate === true || force === true) {

            if (this.parent === undefined)
                this.matrixWorld.copy(this.matrix);
            else
                this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);

        }

        this.matrixWorldNeedsUpdate = false;

        //Update matrices of all children
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].updateMatrixWorld(true);
        }
    },

    clone: function(object) {

        if (object === undefined)
            object = new $3Dmol.Object3D();

        object.name = this.name;

        object.up.copy(this.up);
        object.position.copy(this.position);
        object.rotation.copy(this.rotation);
        object.eulerOrder = this.eulerOrder;
        object.scale.copy(this.scale);

        object.rotationAutoUpdate = this.rotationAutoUpdate;
        object.matrix.copy(this.matrix);
        object.matrixWorld.copy(this.matrixWorld);
        object.quaternion.copy(this.quaternion);
        object.matrixAutoUpdate = this.matrixAutoUpdate;
        object.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate;

        object.useQuaternion = this.useQuaternion;

        object.visible = this.visible;

        for (var i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            object.add(child.clone());
        }

        return object;

    }

};

$3Dmol.Object3DIDCount = 0;

//Geometry class
//TODO: What can I remove - how can I optimize ?
$3Dmol.Geometry = (function() {

    var BUFFERSIZE = 65535; //limited to 16bit indices


    /** @constructor */
    var geometryGroup = function(id) {
        this.id = id || 0;
        //for performance reasons, callers must directly modify these
        this.vertexArray = null;
        this.colorArray = null;
        this.normalArray = null;
        this.faceArray = null;
        this.lineArray = null;
        this.vertices = 0;
        this.faceidx = 0;
        this.lineidx = 0;

    };

    geometryGroup.prototype.getNumVertices = function() {
        return this.vertices;
    };

    geometryGroup.prototype.getVertices = function() {
        return this.vertexArray;
    };


    geometryGroup.prototype.getCentroid = function() {

        var centroid = new $3Dmol.Vector3();
        var offset, x, y, z;

        for (var i = 0; i < this.vertices; ++i) {
            offset = i * 3;

            x = this.vertexArray[offset];
            y = this.vertexArray[offset + 1];
            z = this.vertexArray[offset + 2];

            centroid.x += x;
            centroid.y += y;
            centroid.z += z;
        }

        //divideScalar checks for 0 denom
        centroid.divideScalar(this.vertices);

        return centroid;
    };

    //setup normals - vertex and face array must exist
    geometryGroup.prototype.setNormals = function() {

        var faces = this.faceArray;
        var verts = this.vertexArray;
        var norms = this.normalArray;

        if (!this.vertices || !this.faceidx)
            return;

        //vertex indices
        var a, b, c, d,
            //and actual vertices
            vA, vB, vC, norm;

        for (var i = 0; i < faces.length / 3; ++i) {

            a = faces[i * 3] * 3;
            b = faces[i * 3 + 1] * 3;
            c = faces[i * 3 + 2] * 3;

            vA = new $3Dmol.Vector3(verts[a], verts[a + 1], verts[a + 2]);
            vB = new $3Dmol.Vector3(verts[b], verts[b + 1], verts[b + 2]);
            vC = new $3Dmol.Vector3(verts[c], verts[c + 1], verts[c + 2]);

            vA.subVectors(vA, vB);
            vC.subVectors(vC, vB);
            vC.cross(vA);

            //face normal
            norm = vC;
            norm.normalize();

            norms[a] += norm.x;
            norms[b] += norm.x;
            norms[c] += norm.x;
            norms[a + 1] += norm.y;
            norms[b + 1] += norm.y;
            norms[c + 1] += norm.y;
            norms[a + 2] += norm.z;
            norms[b + 2] += norm.z;
            norms[c + 2] += norm.z;

        }

    };

    //sets line index array from face arr
    //Note - assumes all faces are triangles (i.e. there will
    //be an extra diagonal for four-sided faces - user should 
    //specify linearr for custom shape generation to show wireframe squares
    //as rectangles rather than two triangles)
    geometryGroup.prototype.setLineIndices = function() {

        if (!this.faceidx)
            return;

        var faceArr = this.faceArray,
            lineArr = this.lineArray = new Uint16Array(this.faceidx * 2);
        this.lineidx = this.faceidx * 2;
        var faceoffset;

        for (var i = 0; i < this.faceidx / 3; ++i) {

            faceoffset = i * 3;
            lineoffset = faceoffset * 2;
            var a = faceArr[faceoffset],
                b = faceArr[faceoffset + 1],
                c = faceArr[faceoffset + 2];

            lineArr[lineoffset] = a;
            lineArr[lineoffset + 1] = b;
            lineArr[lineoffset + 2] = a;
            lineArr[lineoffset + 3] = c;
            lineArr[lineoffset + 4] = b;
            lineArr[lineoffset + 5] = c;

        }
    };

    geometryGroup.prototype.truncateArrayBuffers = function(mesh, reallocatemem) {

        mesh = (mesh === true) ? true : false;

        var vertexArr = this.vertexArray,
            colorArr = this.colorArray,
            normalArr = this.normalArray,
            faceArr = this.faceArray,
            lineArr = this.lineArray;

        //subarray to avoid copying and reallocating memory
        this.vertexArray = vertexArr.subarray(0, this.vertices * 3);
        this.colorArray = colorArr.subarray(0, this.vertices * 3);

        if (mesh) {
            this.normalArray = normalArr.subarray(0, this.vertices * 3);
            this.faceArray = faceArr.subarray(0, this.faceidx);

            if (this.lineidx > 0) //not always set so reclaim memory
                this.lineArray = lineArr.subarray(0, this.lineidx);
            else
                this.lineArray = new Uint16Array();
        } else {
            this.normalArray = new Float32Array();
            this.faceArray = new Uint16Array();
            this.lineArray = new Uint16Array();
        }

        if (reallocatemem) {
            //actually copy smaller arrays to save memory
            if (this.normalArray) this.normalArray = new Float32Array(this.normalArray);
            if (this.faceArray) this.faceArray = new Uint16Array(this.faceArray);
            if (this.lineArray) this.lineArray = new Uint16Array(this.lineArray);
            if (this.vertexArray) this.vertexArray = new Float32Array(this.vertexArray);
            if (this.colorArray) this.colorArray = new Float32Array(this.colorArray);

        }
        this.__inittedArrays = true;

    };

    var addGroup = function(geo) {
        var ret = new geometryGroup(geo.geometryGroups.length);
        geo.geometryGroups.push(ret);
        geo.groups = geo.geometryGroups.length;

        ret.vertexArray = new Float32Array(BUFFERSIZE * 3);
        ret.colorArray = new Float32Array(BUFFERSIZE * 3);

        //TODO: instantiating uint arrays according to max number of vertices
        // is dangerous, since there exists the possibility that there will be 
        // more face or line indices than vertex points - but so far that doesn't
        // seem to be the case for any of the renders 
        if (geo.mesh) {
            ret.normalArray = new Float32Array(BUFFERSIZE * 3);
            ret.faceArray = new Uint16Array(BUFFERSIZE * 6);
            ret.lineArray = new Uint16Array(BUFFERSIZE * 6);
        }


        return ret;
    };
    /** @constructor */
    var Geometry = function(mesh) {

        $3Dmol.EventDispatcher.call(this);

        this.id = $3Dmol.GeometryIDCount++;

        this.name = '';

        this.hasTangents = false;

        this.dynamic = true; // the intermediate typed arrays will be deleted when set to false
        this.mesh = (mesh === true) ? true : false; // Does this geometry represent a mesh (i.e. do we need Face/Line index buffers?)
        // update flags

        this.verticesNeedUpdate = false;
        this.elementsNeedUpdate = false;
        this.normalsNeedUpdate = false;
        this.colorsNeedUpdate = false;

        this.buffersNeedUpdate = false;

        this.geometryGroups = [];
        this.groups = 0;

    };

    Geometry.prototype = {

        constructor: Geometry,

        //Get geometry group to accomodate addVertices new vertices - create 
        // new group if necessary       
        updateGeoGroup: function(addVertices) {

            addVertices = addVertices || 0;

            var retGroup = this.groups > 0 ? this.geometryGroups[this.groups - 1] : null;

            if (!retGroup || retGroup.vertices + addVertices > BUFFERSIZE)
                retGroup = addGroup(this);

            return retGroup;

        },

        addGeoGroup: function() {
            return addGroup(this);
        },

        setUpNormals: function(three) {

            three = three || false;

            for (var g = 0; g < this.groups; g++) {

                var geoGroup = this.geometryGroups[g];

                geoGroup.setNormals(three);

            }

        },

        setUpWireframe: function() {
            for (var g = 0; g < this.groups; g++) {
                var geoGroup = this.geometryGroups[g];

                geoGroup.setLineIndices();
            }
        },

        //After vertices, colors, etc are collected in regular or typed arrays,
        //  create typed arrays from regular arrays if they don't already exist,
        initTypedArrays: function() {

            for (var g = 0; g < this.groups; g++) {

                var group = this.geometryGroups[g];

                if (group.__inittedArrays === true)
                    continue;

                //do not actually reallocate smaller memory here because
                //of the performance hit - if you know your geometry is small,
                //truncate manually with the second parameter true
                group.truncateArrayBuffers(this.mesh, false);
            }


        },

        dispose: function() {
            this.dispatchEvent({
                type: 'dispose'
            });
        }
    };


    return Geometry;

})();

Object.defineProperty($3Dmol.Geometry.prototype, "vertices", {

    /** @this {$3Dmol.Geometry} */
    get: function() {
        var vertices = 0;
        for (var g = 0; g < this.groups; g++)
            vertices += this.geometryGroups[g].vertices;

        return vertices;
    }

});

$3Dmol.GeometryIDCount = 0;


//Raycaster
/** @constructor */
$3Dmol.Raycaster = (function() {

    var Raycaster = function(origin, direction, far, near) {

        this.ray = new $3Dmol.Ray(origin, direction);

        if (this.ray.direction.lengthSq() > 0)
            this.ray.direction.normalize();

        this.near = near || 0;
        this.far = far || Infinity;

    };

    var sphere = new $3Dmol.Sphere();
    var cylinder = new $3Dmol.Cylinder();
    var triangle = new $3Dmol.Triangle();
    var w_0 = new $3Dmol.Vector3(); // for cylinders, cylinder.c1 - ray.origin
    var v1 = new $3Dmol.Vector3(); // all purpose local vector
    var v2 = new $3Dmol.Vector3();
    var v3 = new $3Dmol.Vector3();
    //var facePlane = new $3Dmol.Plane();
    var localRay = new $3Dmol.Ray();
    var intersectPoint = new $3Dmol.Vector3();
    var matrixPosition = new $3Dmol.Vector3();

    var inverseMatrix = new $3Dmol.Matrix4();

    var descSort = function(a, b) {
        return a.distance - b.distance;
    };

    // [-1, 1]
    var clamp = function(x) {
        return Math.min(Math.max(x, -1), 1);
    };

    //object is a Sphere or (Bounding) Box
    var intersectObject = function(group, clickable, raycaster, intersects) {

        matrixPosition.getPositionFromMatrix(group.matrixWorld);

        if ((clickable.clickable !== true) || (clickable.intersectionShape === undefined))
            return intersects;

        var intersectionShape = clickable.intersectionShape;
        var precision = raycaster.linePrecision;
        precision *= group.matrixWorld.getMaxScaleOnAxis();
        var precisionSq = precision * precision;

        //Check for intersection with clickable's bounding sphere, if it exists
        if (clickable.boundingSphere !== undefined && clickable.boundingSphere instanceof $3Dmol.Sphere) {
            sphere.copy(clickable.boundingSphere);
            sphere.applyMatrix4(group.matrixWorld);

            if (!raycaster.ray.isIntersectionSphere(sphere)) {
                return intersects;
            }
        }

        //Iterate through intersection objects
        var i, il,
            norm, normProj, cylProj, rayProj,
            distance, closestDistSq, denom, discriminant,
            s, t, s_c, t_c;
        //triangle faces
        for (i = 0, il = intersectionShape.triangle.length; i < il; i++) {

            if (intersectionShape.triangle[i] instanceof $3Dmol.Triangle) {

                triangle.copy(intersectionShape.triangle[i]);
                triangle.applyMatrix4(group.matrixWorld);

                norm = triangle.getNormal();

                normProj = raycaster.ray.direction.dot(norm);

                //face culling
                if (normProj >= 0)
                    continue;

                w_0.subVectors(triangle.a, raycaster.ray.origin);

                distance = (norm.dot(w_0)) / normProj;

                if (distance < 0)
                    continue;

                //intersects with plane, check if P inside triangle
                v1.copy(raycaster.ray.direction).multiplyScalar(distance).add(raycaster.ray.origin);
                v1.sub(triangle.a); // from pt a to intersection point P

                v2.copy(triangle.b).sub(triangle.a); // from pt a to b
                v3.copy(triangle.c).sub(triangle.a); // from pt a to c
                var b_dot_c = v2.dot(v3);
                var b_sq = v2.lengthSq();
                var c_sq = v3.lengthSq();

                // P = A + s(v2) + t(v3), inside trianle if 0 <= s, t <=1  and (s + t) <=0

                t = (b_sq * v1.dot(v3) - b_dot_c * v1.dot(v2)) / (b_sq * c_sq - b_dot_c * b_dot_c);

                if (t < 0 || t > 1)
                    continue;

                s = (v1.dot(v2) - t * b_dot_c) / b_sq;

                if ((s < 0 || s > 1) || s + t > 1)
                    continue;

                else
                    intersects.push({
                        clickable: clickable,
                        distance: distance
                    });
            }
        }

        //cylinders
        for (i = 0, il = intersectionShape.cylinder.length; i < il; i++) {

            if (intersectionShape.cylinder[i] instanceof $3Dmol.Cylinder) {

                cylinder.copy(intersectionShape.cylinder[i]);
                cylinder.applyMatrix4(group.matrixWorld);

                w_0.subVectors(cylinder.c1, raycaster.ray.origin);

                cylProj = w_0.dot(cylinder.direction); // Dela
                rayProj = w_0.dot(raycaster.ray.direction); // Epsilon

                normProj = clamp(raycaster.ray.direction.dot(cylinder.direction)); // Beta

                denom = 1 - normProj * normProj;

                if (denom === 0.0)
                    continue;

                s_c = (normProj * rayProj - cylProj) / denom;
                t_c = (rayProj - normProj * cylProj) / denom;

                v1.copy(cylinder.direction).multiplyScalar(s_c).add(cylinder.c1); // Q_c
                v2.copy(raycaster.ray.direction).multiplyScalar(t_c).add(raycaster.ray.origin); // P_c

                closestDistSq = v3.subVectors(v1, v2).lengthSq();
                var radiusSq = cylinder.radius * cylinder.radius;

                //Smoothing?
                //if (closestDistSq > radiusSq) radiusSq += precisionSq;

                // closest distance between ray and cylinder axis not greater than cylinder radius;
                // might intersect this cylinder between atom and bond midpoint
                if (closestDistSq <= radiusSq) {

                    //Find points where ray intersects sides of cylinder
                    discriminant = (normProj * cylProj - rayProj) * (normProj * cylProj - rayProj) -
                        denom * (w_0.lengthSq() - cylProj * cylProj - radiusSq);

                    // ray tangent to cylinder?
                    if (discriminant <= 0)
                        t = distance = Math.sqrt(closestDistSq);
                    else
                        t = distance = ((rayProj - normProj * cylProj) - Math.sqrt(discriminant)) / denom;

                    //find closest intersection point; make sure it's between atom's position and cylinder midpoint

                    s = normProj * t - cylProj;

                    //does not intersect cylinder between atom and midpoint,
                    // or intersects cylinder behind camera
                    if (s < 0 || s * s > cylinder.lengthSq() || t < 0)
                        continue;

                    else
                        intersects.push({
                            clickable: clickable,
                            distance: distance
                        });

                }


            }

        }

        //lines
        for (i = 0, il = intersectionShape.line.length; i < il; i += 2) {

            v1.copy(intersectionShape.line[i]);
            v1.applyMatrix4(group.matrixWorld);
            v2.copy(intersectionShape.line[i + 1]);
            v2.applyMatrix4(group.matrixWorld);

            v3.subVectors(v2, v1);
            var bondLengthSq = v3.lengthSq();
            v3.normalize();

            w_0.subVectors(v1, raycaster.ray.origin);

            lineProj = w_0.dot(v3);
            rayProj = w_0.dot(raycaster.ray.direction);

            normProj = clamp(raycaster.ray.direction.dot(v3));

            denom = 1 - normProj * normProj;

            if (denom === 0.0)
                continue;

            s_c = (normProj * rayProj - lineProj) / denom;
            t_c = (rayProj - normProj * lineProj) / denom;

            v1.add(v3.multiplyScalar(s_c)); // Q_c
            v2.copy(raycaster.ray.direction).multiplyScalar(t_c).add(raycaster.ray.origin); // P_c

            closestDistSq = v3.subVectors(v2, v1).lengthSq();

            if (closestDistSq < precisionSq && s_c * s_c < bondLengthSq)
                intersects.push({
                    clickable: clickable,
                    distance: t_c
                });

        }

        for (i = 0, il = intersectionShape.sphere.length; i < il; i++) {
            //sphere
            if (intersectionShape.sphere[i] instanceof $3Dmol.Sphere) {

                sphere.copy(intersectionShape.sphere[i]);
                sphere.applyMatrix4(group.matrixWorld);

                if (raycaster.ray.isIntersectionSphere(sphere)) {

                    v1.subVectors(sphere.center, raycaster.ray.origin);

                    //distance from ray origin to point on the ray normal to sphere's center
                    //must be less than sphere's radius (since ray intersects sphere)
                    var distanceToCenter = v1.dot(raycaster.ray.direction);

                    discriminant = distanceToCenter * distanceToCenter - (v1.lengthSq() - sphere.radius * sphere.radius);

                    //Don't select if sphere center behind camera
                    if (distanceToCenter < 0)
                        return intersects;

                    //ray tangent to sphere?
                    if (discriminant <= 0)
                        distance = distanceToCenter;

                    //This is reversed if sphere is closer than ray origin.  Do we have 
                    //to worry about handling that case?
                    else
                        distance = distanceToCenter - Math.sqrt(discriminant);

                    intersects.push({
                        clickable: clickable,
                        distance: distance
                    });
                    return intersects;
                }
            }
        }

    };

    Raycaster.prototype.precision = 0.0001;
    Raycaster.prototype.linePrecision = 0.2;

    Raycaster.prototype.set = function(origin, direction) {

        this.ray.set(origin, direction);

    };

    Raycaster.prototype.intersectObjects = function(group, objects) {

        var intersects = [];

        for (var i = 0, l = objects.length; i < l; i++)
            intersectObject(group, objects[i], this, intersects);

        intersects.sort(descSort);

        return intersects;

    };

    return Raycaster;

})();


//$3Dmol Projecion 
//TODO: can probably strip this down a lot (only used for selection handling)
/** @constructor */
$3Dmol.Projector = function() {

    var _viewMatrix = new $3Dmol.Matrix4(),
        _viewProjectionMatrix = new $3Dmol.Matrix4();

    this.projectVector = function(vector, camera) {

        camera.matrixWorldInverse.getInverse(camera.matrixWorld);

        _viewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);

        return vector.applyProjection(_viewProjectionMatrix);

    };

    this.unprojectVector = function(vector, camera) {

        camera.projectionMatrixInverse.getInverse(camera.projectionMatrix);

        _viewProjectionMatrix.multiplyMatrices(camera.matrixWorld, camera.projectionMatrixInverse);

        return vector.applyProjection(_viewProjectionMatrix);

    };

};
/*
 * Simplified Perspective Camera
 */

/** @constructor */
$3Dmol.Camera = function(fov, aspect, near, far) {

    $3Dmol.Object3D.call(this);

    this.fov = fov !== undefined ? fov : 50;
    this.aspect = aspect !== undefined ? aspect : 1;
    this.near = near !== undefined ? near : 0.1;
    this.far = far !== undefined ? far : 2000;

    this.projectionMatrix = new $3Dmol.Matrix4();
    this.projectionMatrixInverse = new $3Dmol.Matrix4();
    this.matrixWorldInverse = new $3Dmol.Matrix4();

    this.updateProjectionMatrix();

};

//Inherit Object3D's prototyped methods
$3Dmol.Camera.prototype = Object.create($3Dmol.Object3D.prototype);

$3Dmol.Camera.prototype.lookAt = function(vector) {

    //Why is the parameter order switched (compared to Object3D)?
    this.matrix.lookAt(this.position, vector, this.up);

    if (this.rotationAutoUpdate) {

        if (this.useQuaternion === false)
            this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder);
        else
            this.quaternion.copy(this.matrix.decompose()[1]);

    }

};

$3Dmol.Camera.prototype.updateProjectionMatrix = function() {

    this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far);

};


//Render plugins go here

/**
 * Sprite render plugin
 * @this {$3Dmol.SpritePlugin}
 */

$3Dmol.SpritePlugin = function() {

    var _gl, _renderer, _precision, _sprite = {};

    this.init = function(renderer) {

        _gl = renderer.context;
        _renderer = renderer;

        _precision = renderer.getPrecision();

        _sprite.vertices = new Float32Array(8 + 8);
        _sprite.faces = new Uint16Array(6);

        var i = 0;

        _sprite.vertices[i++] = -1;
        _sprite.vertices[i++] = -1; // vertex 0
        _sprite.vertices[i++] = 0;
        _sprite.vertices[i++] = 0; // uv 0

        _sprite.vertices[i++] = 1;
        _sprite.vertices[i++] = -1; // vertex 1
        _sprite.vertices[i++] = 1;
        _sprite.vertices[i++] = 0; // uv 1

        _sprite.vertices[i++] = 1;
        _sprite.vertices[i++] = 1; // vertex 2
        _sprite.vertices[i++] = 1;
        _sprite.vertices[i++] = 1; // uv 2

        _sprite.vertices[i++] = -1;
        _sprite.vertices[i++] = 1; // vertex 3
        _sprite.vertices[i++] = 0;
        _sprite.vertices[i++] = 1; // uv 3

        i = 0;

        _sprite.faces[i++] = 0;
        _sprite.faces[i++] = 1;
        _sprite.faces[i++] = 2;
        _sprite.faces[i++] = 0;
        _sprite.faces[i++] = 2;
        _sprite.faces[i++] = 3;

        _sprite.vertexBuffer = _gl.createBuffer();
        _sprite.elementBuffer = _gl.createBuffer();

        _gl.bindBuffer(_gl.ARRAY_BUFFER, _sprite.vertexBuffer);
        _gl.bufferData(_gl.ARRAY_BUFFER, _sprite.vertices, _gl.STATIC_DRAW);

        _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, _sprite.elementBuffer);
        _gl.bufferData(_gl.ELEMENT_ARRAY_BUFFER, _sprite.faces, _gl.STATIC_DRAW);

        _sprite.program = createProgram($3Dmol.ShaderLib.sprite, _precision);

        _sprite.attributes = {};
        _sprite.uniforms = {};

        _sprite.attributes.position = _gl.getAttribLocation(_sprite.program, "position");
        _sprite.attributes.uv = _gl.getAttribLocation(_sprite.program, "uv");

        _sprite.uniforms.uvOffset = _gl.getUniformLocation(_sprite.program, "uvOffset");
        _sprite.uniforms.uvScale = _gl.getUniformLocation(_sprite.program, "uvScale");

        _sprite.uniforms.rotation = _gl.getUniformLocation(_sprite.program, "rotation");
        _sprite.uniforms.scale = _gl.getUniformLocation(_sprite.program, "scale");
        _sprite.uniforms.alignment = _gl.getUniformLocation(_sprite.program, "alignment");

        _sprite.uniforms.color = _gl.getUniformLocation(_sprite.program, "color");
        _sprite.uniforms.map = _gl.getUniformLocation(_sprite.program, "map");
        _sprite.uniforms.opacity = _gl.getUniformLocation(_sprite.program, "opacity");

        _sprite.uniforms.useScreenCoordinates = _gl.getUniformLocation(_sprite.program, "useScreenCoordinates");
        _sprite.uniforms.screenPosition = _gl.getUniformLocation(_sprite.program, "screenPosition");
        _sprite.uniforms.modelViewMatrix = _gl.getUniformLocation(_sprite.program, "modelViewMatrix");
        _sprite.uniforms.projectionMatrix = _gl.getUniformLocation(_sprite.program, "projectionMatrix");

        _sprite.uniforms.fogType = _gl.getUniformLocation(_sprite.program, "fogType");
        _sprite.uniforms.fogDensity = _gl.getUniformLocation(_sprite.program, "fogDensity");
        _sprite.uniforms.fogNear = _gl.getUniformLocation(_sprite.program, "fogNear");
        _sprite.uniforms.fogFar = _gl.getUniformLocation(_sprite.program, "fogFar");
        _sprite.uniforms.fogColor = _gl.getUniformLocation(_sprite.program, "fogColor");

        _sprite.uniforms.alphaTest = _gl.getUniformLocation(_sprite.program, "alphaTest");

    };

    this.render = function(scene, camera, viewportWidth, viewportHeight) {

        var sprites = scene.__webglSprites,
            nSprites = sprites.length;

        if (!nSprites) return;

        var attributes = _sprite.attributes,
            uniforms = _sprite.uniforms;

        var invAspect = viewportHeight / viewportWidth;

        var halfViewportWidth = viewportWidth * 0.5,
            halfViewportHeight = viewportHeight * 0.5;

        // setup gl

        _gl.useProgram(_sprite.program);

        _gl.enableVertexAttribArray(attributes.position);
        _gl.enableVertexAttribArray(attributes.uv);

        _gl.disable(_gl.CULL_FACE);
        _gl.enable(_gl.BLEND);

        _gl.bindBuffer(_gl.ARRAY_BUFFER, _sprite.vertexBuffer);
        _gl.vertexAttribPointer(attributes.position, 2, _gl.FLOAT, false, 2 * 8, 0);
        _gl.vertexAttribPointer(attributes.uv, 2, _gl.FLOAT, false, 2 * 8, 8);

        _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, _sprite.elementBuffer);

        _gl.uniformMatrix4fv(uniforms.projectionMatrix, false, camera.projectionMatrix.elements);

        _gl.activeTexture(_gl.TEXTURE0);
        _gl.uniform1i(uniforms.map, 0);

        var oldFogType = 0;
        var sceneFogType = 0;
        var fog = scene.fog;

        if (fog) {

            _gl.uniform3f(uniforms.fogColor, fog.color.r, fog.color.g, fog.color.b);

            _gl.uniform1f(uniforms.fogNear, fog.near);
            _gl.uniform1f(uniforms.fogFar, fog.far);

            _gl.uniform1i(uniforms.fogType, 1);
            oldFogType = 1;
            sceneFogType = 1;


        } else {

            _gl.uniform1i(uniforms.fogType, 0);
            oldFogType = 0;
            sceneFogType = 0;

        }


        // update positions and sort

        var i, sprite, material, screenPosition, size, fogType, scale = [];

        for (i = 0; i < nSprites; i++) {

            sprite = sprites[i];
            material = sprite.material;

            if (!sprite.visible || material.opacity === 0) continue;

            if (!material.useScreenCoordinates) {

                sprite._modelViewMatrix.multiplyMatrices(camera.matrixWorldInverse, sprite.matrixWorld);
                sprite.z = -sprite._modelViewMatrix.elements[14];

            } else {

                sprite.z = -sprite.position.z;

            }

        }

        sprites.sort(painterSortStable);

        // render all sprites

        for (i = 0; i < nSprites; i++) {

            sprite = sprites[i];
            material = sprite.material;

            if (!sprite.visible || material.opacity === 0) continue;

            if (material.map && material.map.image && material.map.image.width) {

                _gl.uniform1f(uniforms.alphaTest, material.alphaTest);
                var w = material.map.image.width;
                var h = material.map.image.height;

                scale[0] = w * _renderer.devicePixelRatio / viewportWidth;
                scale[1] = h * _renderer.devicePixelRatio / viewportHeight;

                if (material.useScreenCoordinates === true) {

                    _gl.uniform1i(uniforms.useScreenCoordinates, 1);
                    _gl.uniform3f(
                        uniforms.screenPosition, ((sprite.position.x * _renderer.devicePixelRatio) - halfViewportWidth) / halfViewportWidth, (halfViewportHeight - (sprite.position.y * _renderer.devicePixelRatio)) / halfViewportHeight,
                        Math.max(0, Math.min(1, sprite.position.z))
                    );

                } else {

                    _gl.uniform1i(uniforms.useScreenCoordinates, 0);
                    _gl.uniformMatrix4fv(uniforms.modelViewMatrix, false, sprite._modelViewMatrix.elements);
                }

                if (scene.fog && material.fog) {

                    fogType = sceneFogType;

                } else {

                    fogType = 0;

                }

                if (oldFogType !== fogType) {

                    _gl.uniform1i(uniforms.fogType, fogType);
                    oldFogType = fogType;

                }

                size = 1 / (material.scaleByViewport ? viewportHeight : 1);

                scale[0] *= size * sprite.scale.x;
                scale[1] *= size * sprite.scale.y;

                _gl.uniform2f(uniforms.uvScale, material.uvScale.x, material.uvScale.y);
                _gl.uniform2f(uniforms.uvOffset, material.uvOffset.x, material.uvOffset.y);
                _gl.uniform2f(uniforms.alignment, material.alignment.x, material.alignment.y);

                _gl.uniform1f(uniforms.opacity, material.opacity);
                _gl.uniform3f(uniforms.color, material.color.r, material.color.g, material.color.b);

                _gl.uniform1f(uniforms.rotation, sprite.rotation);
                _gl.uniform2fv(uniforms.scale, scale);

                //_renderer.setBlending( material.blending, material.blendEquation, material.blendSrc, material.blendDst );
                _renderer.setDepthTest(material.depthTest);
                _renderer.setDepthWrite(material.depthWrite);
                _renderer.setTexture(material.map, 0);

                _gl.drawElements(_gl.TRIANGLES, 6, _gl.UNSIGNED_SHORT, 0);

            }

        }

        // restore gl

        _gl.enable(_gl.CULL_FACE);

    };

    function createProgram(shader, precision) {

        var program = _gl.createProgram();

        var fragmentShader = _gl.createShader(_gl.FRAGMENT_SHADER);
        var vertexShader = _gl.createShader(_gl.VERTEX_SHADER);

        var prefix = "precision " + precision + " float;\n";

        _gl.shaderSource(fragmentShader, prefix + shader.fragmentShader);
        _gl.shaderSource(vertexShader, prefix + shader.vertexShader);

        _gl.compileShader(fragmentShader);
        _gl.compileShader(vertexShader);

        if (!_gl.getShaderParameter(fragmentShader, _gl.COMPILE_STATUS) || !_gl.getShaderParameter(vertexShader, _gl.COMPILE_STATUS)) {

            console.error(_gl.getShaderInfoLog(fragmentShader));
            console.error("could not initialize shader");
            return null;
        }

        _gl.attachShader(program, fragmentShader);
        _gl.attachShader(program, vertexShader);

        _gl.linkProgram(program);

        if (!_gl.getProgramParameter(program, _gl.LINK_STATUS))
            console.error("Could not initialize shader");

        return program;

    }

    function painterSortStable(a, b) {

        if (a.z !== b.z) {

            return b.z - a.z;

        } else {

            return b.id - a.id;

        }

    }

};

$3Dmol.Light = function(hex, intensity) {

    $3Dmol.Object3D.call(this);

    this.color = new $3Dmol.Color(hex);
    this.position = new $3Dmol.Vector3(0, 1, 0);
    this.target = new $3Dmol.Object3D();

    this.intensity = (intensity !== undefined) ? intensity : 1;

    this.castShadow = false;
    this.onlyShadow = false;

};

$3Dmol.Light.prototype = Object.create($3Dmol.Object3D.prototype);
/**
 * Line and Mesh material types
 * @constructor
 */
$3Dmol.Material = function() {

    $3Dmol.EventDispatcher.call(this);

    this.id = $3Dmol.MaterialIdCount++;

    this.name = '';

    //TODO: Which of these instance variables can I remove??
    this.side = $3Dmol.FrontSide;

    this.opacity = 1;
    this.transparent = false;

    this.depthTest = true;
    this.depthWrite = true;

    this.polygonOffset = false;
    this.polygonOffsetFactor = 0;
    this.polygonOffsetUnits = 0;

    this.alphaTest = 0;

    this.visible = true;

    this.needsUpdate = true;

};


$3Dmol.Material.prototype.setValues = function(values) {

    if (values === undefined) return;

    for (var key in values) {

        var newValue = values[key];

        if (newValue === undefined) {

            console.warn('$3Dmol.Material: \'' + key + '\' parameter is undefined.');
            continue;

        }

        if (key in this) {

            var currentValue = this[key];

            if (currentValue instanceof $3Dmol.Color && newValue instanceof $3Dmol.Color) {

                currentValue.copy(newValue);

            } else if (currentValue instanceof $3Dmol.Color) {

                currentValue.set(newValue);

            } else if (currentValue instanceof $3Dmol.Vector3 && newValue instanceof $3Dmol.Vector3) {

                currentValue.copy(newValue);

            } else {

                this[key] = newValue;

            }

        }

    }

};
//TODO: might want to look into blending equations
$3Dmol.Material.prototype.clone = function(material) {

    if (material === undefined) material = new $3Dmol.Material();

    material.name = this.name;

    material.side = this.side;

    material.opacity = this.opacity;
    material.transparent = this.transparent;

    material.depthTest = this.depthTest;
    material.depthWrite = this.depthWrite;

    material.polygonOffset = this.polygonOffset;
    material.polygonOffsetFactor = this.polygonOffsetFactor;
    material.polygonOffsetUnits = this.polygonOffsetUnits;

    material.alphaTest = this.alphaTest;

    material.overdraw = this.overdraw;

    material.visible = this.visible;

    return material;

};

$3Dmol.Material.prototype.dispose = function() {

    this.dispatchEvent({
        type: 'dispose'
    });

};

$3Dmol.MaterialIdCount = 0;

//Line basic material
/** @constructor */
$3Dmol.LineBasicMaterial = function(parameters) {

    $3Dmol.Material.call(this);

    this.color = new $3Dmol.Color(0xffffff);

    this.linewidth = 1;
    this.linecap = 'round';
    this.linejoin = 'round';

    this.vertexColors = false;

    this.fog = true;
    this.shaderID = "basic";
    this.setValues(parameters);

};

$3Dmol.LineBasicMaterial.prototype = Object.create($3Dmol.Material.prototype);

$3Dmol.LineBasicMaterial.prototype.clone = function() {

    var material = new $3Dmol.LineBasicMaterial();

    $3Dmol.Material.prototype.clone.call(this, material);

    material.color.copy();
    return material;
};

//Mesh Lambert material
/** @constructor */
$3Dmol.MeshLambertMaterial = function(parameters) {

    $3Dmol.Material.call(this);

    this.color = new $3Dmol.Color(0xffffff);
    this.ambient = new $3Dmol.Color(0xfffff);
    this.emissive = new $3Dmol.Color(0x000000);

    //TODO: Which of these instance variables do I really need?
    this.wrapAround = false;
    this.wrapRGB = new $3Dmol.Vector3(1, 1, 1);

    this.map = null;

    this.lightMap = null;

    this.specularMap = null;

    this.envMap = null;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;

    this.fog = true;

    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = 'round';
    this.wireframeLinejoin = 'round';

    this.shading = $3Dmol.SmoothShading;
    this.shaderID = "lambert";
    this.vertexColors = $3Dmol.NoColors;

    this.skinning = false;

    this.setValues(parameters);

};

$3Dmol.MeshLambertMaterial.prototype = Object.create($3Dmol.Material.prototype);

$3Dmol.MeshLambertMaterial.prototype.clone = function(material) {

    if (typeof material === "undefined") material = new $3Dmol.MeshLambertMaterial();

    $3Dmol.Material.prototype.clone.call(this, material);

    material.color.copy(this.color);
    material.ambient.copy(this.ambient);
    material.emissive.copy(this.emissive);

    material.wrapAround = this.wrapAround;
    material.wrapRGB.copy(this.wrapRGB);

    material.map = this.map;

    material.lightMap = this.lightMap;

    material.specularMap = this.specularMap;

    material.envMap = this.envMap;
    material.combine = this.combine;
    material.reflectivity = this.reflectivity;
    material.refractionRatio = this.refractionRatio;

    material.fog = this.fog;

    material.shading = this.shading;
    material.shaderID = this.shaderID;
    material.vertexColors = this.vertexColors;

    material.skinning = this.skinning;
    material.morphTargets = this.morphTargets;
    material.morphNormals = this.morphNormals;

    return material;

};

//Double sided Mesh Lambert material
/** @constructor */
$3Dmol.MeshDoubleLambertMaterial = function(parameters) {

    $3Dmol.MeshLambertMaterial.call(this, parameters);

    this.shaderID = "lambertdouble";
    this.side = $3Dmol.DoubleSide;

};

$3Dmol.MeshDoubleLambertMaterial.prototype = Object.create($3Dmol.MeshLambertMaterial.prototype);

$3Dmol.MeshDoubleLambertMaterial.prototype.clone = function() {

    var material = new $3Dmol.MeshDoubleLambertMaterial();

    $3Dmol.MeshLambertMaterial.prototype.clone.call(this, material);

    return material;

};


//Imposter material
/** @constructor */
$3Dmol.ImposterMaterial = function(parameters) {

    $3Dmol.Material.call(this);

    this.color = new $3Dmol.Color(0xffffff);
    this.ambient = new $3Dmol.Color(0xfffff);
    this.emissive = new $3Dmol.Color(0x000000);

    //TODO: Which of these instance variables do I really need?
    this.wrapAround = false;
    this.wrapRGB = new $3Dmol.Vector3(1, 1, 1);

    this.map = null;

    this.lightMap = null;

    this.specularMap = null;

    this.envMap = null;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;

    this.fog = true;

    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = 'round';
    this.wireframeLinejoin = 'round';

    this.shading = $3Dmol.SmoothShading;
    this.shaderID = "sphereimposter";
    this.vertexColors = $3Dmol.NoColors;

    this.skinning = false;

    this.setValues(parameters);

};

$3Dmol.ImposterMaterial.prototype = Object.create($3Dmol.Material.prototype);

$3Dmol.ImposterMaterial.prototype.clone = function() {

    var material = new $3Dmol.ImposterMaterial();

    $3Dmol.Material.prototype.clone.call(this, material);

    material.color.copy(this.color);
    material.ambient.copy(this.ambient);
    material.emissive.copy(this.emissive);

    material.wrapAround = this.wrapAround;
    material.wrapRGB.copy(this.wrapRGB);

    material.map = this.map;

    material.lightMap = this.lightMap;

    material.specularMap = this.specularMap;

    material.envMap = this.envMap;
    material.combine = this.combine;
    material.reflectivity = this.reflectivity;
    material.refractionRatio = this.refractionRatio;

    material.fog = this.fog;

    material.shading = this.shading;
    material.shaderID = this.shaderID;
    material.vertexColors = this.vertexColors;

    material.skinning = this.skinning;
    material.morphTargets = this.morphTargets;
    material.morphNormals = this.morphNormals;

    return material;

};


//Sprite material
/** @constructor */
$3Dmol.SpriteMaterial = function(parameters) {

    $3Dmol.Material.call(this);

    this.color = new $3Dmol.Color(0xffffff);
    this.map = new $3Dmol.Texture();

    this.useScreenCoordinates = true;
    this.depthTest = !this.useScreenCoordinates;
    this.sizeAttenuation = !this.useScreenCoordinates;
    this.scaleByViewPort = !this.sizeAttenuation;
    this.alignment = $3Dmol.SpriteAlignment.center.clone();

    this.fog = false; // use scene fog

    this.uvOffset = new $3Dmol.Vector2(0, 0);
    this.uvScale = new $3Dmol.Vector2(1, 1);

    this.setValues(parameters);

    parameters = parameters || {};

    if (parameters.depthTest === undefined)
        this.depthTest = !this.useScreenCoordinates;
    if (parameters.sizeAttenuation === undefined)
        this.sizeAttenuation = !this.useScreenCoordinates;
    if (parameters.scaleByViewPort === undefined)
        this.scaleByViewPort = !this.sizeAttenuation;

};

$3Dmol.SpriteMaterial.prototype = Object.create($3Dmol.Material.prototype);

$3Dmol.SpriteMaterial.prototype.clone = function() {

    var material = new $3Dmol.SpriteMaterial();

    $3Dmol.Material.prototype.clone.call(this, material);

    material.color.copy(this.color);
    material.map = this.map;

    material.useScreenCoordinates = useScreenCoordinates;
    material.sizeAttenuation = this.sizeAttenuation;
    material.scaleByViewport = this.scaleByViewPort;
    material.alignment.copy(this.alignment);

    material.uvOffset.copy(this.uvOffset);

    return material;

};

//Alignment for Sprites

$3Dmol.SpriteAlignment = {};
$3Dmol.SpriteAlignment.topLeft = new $3Dmol.Vector2(1, -1);
$3Dmol.SpriteAlignment.topCenter = new $3Dmol.Vector2(0, -1);
$3Dmol.SpriteAlignment.topRight = new $3Dmol.Vector2(-1, -1);
$3Dmol.SpriteAlignment.centerLeft = new $3Dmol.Vector2(1, 0);
$3Dmol.SpriteAlignment.center = new $3Dmol.Vector2(0, 0);
$3Dmol.SpriteAlignment.centerRight = new $3Dmol.Vector2(-1, 0);
$3Dmol.SpriteAlignment.bottomLeft = new $3Dmol.Vector2(1, 1);
$3Dmol.SpriteAlignment.bottomCenter = new $3Dmol.Vector2(0, 1);
$3Dmol.SpriteAlignment.bottomRight = new $3Dmol.Vector2(-1, 1);


//Texture
//We really only create textures from 2d rendering contexts (to display text labels)
/** @constructor */
$3Dmol.Texture = function(image) {

    $3Dmol.EventDispatcher.call(this);

    this.id = $3Dmol.TextureIdCount++;

    this.name = "";

    this.image = image;
    this.mipmaps = [];

    this.mapping = new $3Dmol.UVMapping();

    this.wrapS = $3Dmol.ClampToEdgeWrapping;
    this.wrapT = $3Dmol.ClampToEdgeWrapping;

    this.magFilter = $3Dmol.LinearFilter;
    this.minFilter = $3Dmol.LinearMipMapLinearFilter;

    this.anisotropy = 1;

    this.format = $3Dmol.RGBAFormat;
    this.type = $3Dmol.UnsignedByteType;

    this.offset = new $3Dmol.Vector2(0, 0);
    this.repeat = new $3Dmol.Vector2(1, 1);

    this.generateMipmaps = true;
    this.premultiplyAlpha = false;
    this.flipY = true;
    this.unpackAlignment = 4;

    this.needsUpdate = false;
    this.onUpdate = null;

};

$3Dmol.Texture.prototype = {

    constructor: $3Dmol.Texture,

    clone: function(texture) {

        if (texture === undefined)
            texture = new $3Dmol.Texture();

        texture.image = this.image;
        texture.mipmaps = this.mipmaps.slice(0);

        texture.mapping = this.mapping;

        texture.wrapS = this.wrapS;
        texture.wrapT = this.wrapT;

        texture.magFilter = this.magFilter;
        texture.minFilter = this.minFilter;

        texture.anisotropy = this.anisotropy;

        texture.format = this.format;
        texture.type = this.type;

        texture.offset.copy(this.offset);
        texture.repeat.copy(this.repeat);

        texture.generateMipmaps = this.generateMipmaps;
        texture.premultiplyAlpha = this.premultiplyAlpha;
        texture.flipY = this.flipY;
        texture.unpackAlignment = this.unpackAlignment;

        return texture;

    },

    dispose: function() {

        this.dispatchEvent({
            type: 'dispose'
        });

    }

};

$3Dmol.TextureIdCount = 0;


// sides
$3Dmol.FrontSide = 0;
$3Dmol.BackSide = 1;
$3Dmol.DoubleSide = 2;

// shading
$3Dmol.NoShading = 0;
$3Dmol.FlatShading = 1;
$3Dmol.SmoothShading = 2;

// colors
$3Dmol.NoColors = 0;
$3Dmol.FaceColors = 1;
$3Dmol.VertexColors = 2;

//Texture constants
//TODO: Which of these do I need (since I only use textures to display label sprites) ?
$3Dmol.MultiplyOperation = 0;
$3Dmol.MixOperation = 1;
$3Dmol.AddOperation = 2;

// mapping modes

$3Dmol.UVMapping = function() {};

// wrapping modes
$3Dmol.ClampToEdgeWrapping = 1001;

//Filters
$3Dmol.LinearFilter = 1006;
$3Dmol.LinearMipMapLinearFilter = 1008;

//Data types
$3Dmol.UnsignedByteType = 1009;

//Pixel formats
$3Dmol.RGBAFormat = 1021;
/* 
 * $3Dmol Mesh and Line objects
 */


//Line Object
/** @constructor */
$3Dmol.Line = function(geometry, material, type) {

    $3Dmol.Object3D.call(this);

    this.geometry = geometry;
    //TODO: update material and type to webgl
    this.material = (material !== undefined) ? material : new $3Dmol.LineBasicMaterial({
        color: Math.random() * 0xffffff
    });
    this.type = (type !== undefined) ? type : $3Dmol.LineStrip;

};

$3Dmol.LineStrip = 0;
$3Dmol.LinePieces = 1;

$3Dmol.Line.prototype = Object.create($3Dmol.Object3D.prototype);

$3Dmol.Line.prototype.clone = function(object) {

    if (object === undefined) object = new $3Dmol.Line(this.geometry, this.material, this.type);

    $3Dmol.Object3D.prototype.clone.call(this, object);

    return object;

};


//Mesh Object
/** @constructor */
$3Dmol.Mesh = function(geometry, material) {

    $3Dmol.Object3D.call(this);

    this.geometry = geometry;
    this.material = (material !== undefined) ? material : new $3Dmol.MeshBasicMaterial({
        color: Math.random() * 0xffffff,
        wireframe: true
    });

};

$3Dmol.Mesh.prototype = Object.create($3Dmol.Object3D.prototype);

$3Dmol.Mesh.prototype.clone = function(object) {

    if (object === undefined) object = new $3Dmol.Mesh(this.geometry, this.material);

    $3Dmol.Object3D.prototype.clone.call(this, object);

    return object;

};


//Sprite object
/** @constructor */
$3Dmol.Sprite = function(material) {

    $3Dmol.Object3D.call(this);

    this.material = (material !== undefined) ? material : new $3Dmol.SpriteMaterial();

    this.rotation3d = this.rotation;
    this.rotation = 0;

};

$3Dmol.Sprite.prototype = Object.create($3Dmol.Object3D.prototype);

$3Dmol.Sprite.prototype.updateMatrix = function() {

    this.matrix.setPosition(this.position);

    this.rotation3d.set(0, 0, this.rotation);
    this.matrix.setRotationFromEuler(this.rotation3d);

    if (this.scale.x !== 1 || this.scale.y !== 1)
        this.matrix.scale(this.scale);

    this.matrixWorldNeedsUpdate = true;

};

$3Dmol.Sprite.prototype.clone = function(object) {

    if (object === undefined)
        object = new $3Dmol.Sprite(this.material);

    $3Dmol.Object3D.prototype.clone.call(this, object);

    return object;

};
/**
Simplified webGL renderer 
 */

$3Dmol.Renderer = function(parameters) {

    parameters = parameters || {};

    var _canvas = parameters.canvas !== undefined ? parameters.canvas : document.createElement('canvas'),

        _precision = parameters.precision !== undefined ? parameters.precision : 'highp',

        _alpha = parameters.alpha !== undefined ? parameters.alpha : true,
        _premultipliedAlpha = parameters.premultipliedAlpha !== undefined ? parameters.premultipliedAlpha : true,
        _antialias = parameters.antialias !== undefined ? parameters.antialias : false,
        _stencil = parameters.stencil !== undefined ? parameters.stencil : true,
        _preserveDrawingBuffer = parameters.preserveDrawingBuffer !== undefined ? parameters.preserveDrawingBuffer : false,

        _clearColor = parameters.clearColor !== undefined ? new $3Dmol.Color(parameters.clearColor) : new $3Dmol.Color(0x000000),
        _clearAlpha = parameters.clearAlpha !== undefined ? parameters.clearAlpha : 0;

    this.domElement = _canvas;
    this.context = null;
    this.devicePixelRatio = parameters.devicePixelRatio !== undefined ?
        parameters.devicePixelRatio : (self.devicePixelRatio !== undefined) ?
        self.devicePixelRatio : 1;

    // clearing

    this.autoClear = true;
    this.autoClearColor = true;
    this.autoClearDepth = true;
    this.autoClearStencil = true;

    // scene graph

    this.sortObjects = true;

    this.autoUpdateObjects = true;
    this.autoUpdateScene = true;

    this.renderPluginsPost = [];

    // info

    this.info = {

        memory: {

            programs: 0,
            geometries: 0,
            textures: 0

        },

        render: {

            calls: 0,
            vertices: 0,
            faces: 0,
            points: 0

        }

    };

    // internal properties

    var _this = this,

        _programs = [],
        _programs_counter = 0,

        // internal state cache

        _currentProgram = null,
        _currentFramebuffer = null,
        _currentMaterialId = -1,
        _currentGeometryGroupHash = null,
        _currentCamera = null,
        _geometryGroupCounter = 0,

        _usedTextureUnits = 0,

        // GL state cache

        _oldDoubleSided = -1,
        _oldFlipSided = -1,

        _oldBlending = -1,

        _oldBlendEquation = -1,
        _oldBlendSrc = -1,
        _oldBlendDst = -1,

        _oldDepthTest = -1,
        _oldDepthWrite = -1,

        _oldPolygonOffset = null,
        _oldPolygonOffsetFactor = null,
        _oldPolygonOffsetUnits = null,

        _oldLineWidth = null,

        _viewportX = 0,
        _viewportY = 0,
        _viewportWidth = 0,
        _viewportHeight = 0,
        _currentWidth = 0,
        _currentHeight = 0,

        _enabledAttributes = {},

        // camera matrices cache

        _projScreenMatrix = new $3Dmol.Matrix4(),

        _vector3 = new $3Dmol.Vector3(),

        // light arrays cache

        _direction = new $3Dmol.Vector3(),

        _lightsNeedUpdate = true,

        _lights = {

            ambient: [0, 0, 0],
            directional: {
                length: 0,
                colors: [],
                positions: []
            },
            point: {
                length: 0,
                colors: [],
                positions: [],
                distances: []
            },
            spot: {
                length: 0,
                colors: [],
                positions: [],
                distances: [],
                directions: [],
                anglesCos: [],
                exponents: []
            },
            hemi: {
                length: 0,
                skyColors: [],
                groundColors: [],
                positions: []
            }

        };

    // initialize

    var _gl;

    initGL();

    setDefaultGLState();

    this.context = _gl;

    // API

    this.getContext = function() {

        return _gl;

    };

    this.getPrecision = function() {

        return _precision;

    };

    this.setClearColorHex = function(hex, alpha) {

        _clearColor.setHex(hex);
        _clearAlpha = alpha;

        _gl.clearColor(_clearColor.r, _clearColor.g, _clearColor.b, _clearAlpha);

    };

    this.setSize = function(width, height) {

        _canvas.width = width * this.devicePixelRatio;
        _canvas.height = height * this.devicePixelRatio;

        _canvas.style.width = width + 'px';
        _canvas.style.height = height + 'px';

        this.setViewport(0, 0, _canvas.width, _canvas.height);

    };

    this.setViewport = function(x, y, width, height) {

        _viewportX = x !== undefined ? x : 0;
        _viewportY = y !== undefined ? y : 0;

        _viewportWidth = width !== undefined ? width : _canvas.width;
        _viewportHeight = height !== undefined ? height : _canvas.height;

        _gl.viewport(_viewportX, _viewportY, _viewportWidth, _viewportHeight);

    };

    this.clear = function(color, depth, stencil) {

        var bits = 0;

        if (color === undefined || color) bits |= _gl.COLOR_BUFFER_BIT;
        if (depth === undefined || depth) bits |= _gl.DEPTH_BUFFER_BIT;
        if (stencil === undefined || stencil) bits |= _gl.STENCIL_BUFFER_BIT;

        _gl.clear(bits);

    };

    this.clearTarget = function(color, depth, stencil) {


        this.clear(color, depth, stencil);

    };

    this.setMaterialFaces = function(material) {

        var doubleSided = material.side === $3Dmol.DoubleSide;
        var flipSided = material.side === $3Dmol.BackSide;

        if (_oldDoubleSided !== doubleSided) {

            if (doubleSided) {

                _gl.disable(_gl.CULL_FACE);

            } else {

                _gl.enable(_gl.CULL_FACE);

            }

            _oldDoubleSided = doubleSided;

        }

        if (_oldFlipSided !== flipSided) {

            if (flipSided) {

                _gl.frontFace(_gl.CW);

            } else {

                _gl.frontFace(_gl.CCW);

            }

            _oldFlipSided = flipSided;

        }

    };

    this.setDepthTest = function(depthTest) {

        if (_oldDepthTest !== depthTest) {

            if (depthTest) {

                _gl.enable(_gl.DEPTH_TEST);

            } else {

                _gl.disable(_gl.DEPTH_TEST);

            }

            _oldDepthTest = depthTest;

        }

    };

    this.setDepthWrite = function(depthWrite) {

        if (_oldDepthWrite !== depthWrite) {

            _gl.depthMask(depthWrite);
            _oldDepthWrite = depthWrite;

        }

    };

    this.setBlending = function(blending) {

        if (!blending) {
            _gl.disable(_gl.BLEND);

        } else {
            _gl.enable(_gl.BLEND);
            _gl.blendEquationSeparate(_gl.FUNC_ADD, _gl.FUNC_ADD);
            _gl.blendFuncSeparate(_gl.SRC_ALPHA, _gl.ONE_MINUS_SRC_ALPHA, _gl.ONE, _gl.ONE_MINUS_SRC_ALPHA);

        }

        _oldBlending = blending;
    };

    // Plugins

    this.addPostPlugin = function(plugin) {

        plugin.init(this);
        this.renderPluginsPost.push(plugin);

    };

    // Sorting

    function numericalSort(a, b) {

        return b[0] - a[0];

    }

    function enableAttribute(attribute) {

        if (!_enabledAttributes[attribute]) {

            _gl.enableVertexAttribArray(attribute);
            _enabledAttributes[attribute] = true;

        }

    }

    function disableAttributes() {

        for (var attribute in _enabledAttributes) {

            if (_enabledAttributes[attribute]) {

                _gl.disableVertexAttribArray(attribute);
                _enabledAttributes[attribute] = false;

            }

        }

    }

    function setPolygonOffset(polygonOffset, factor, units) {

        if (_oldPolygonOffset !== polygonOffset) {

            if (polygonOffset)
                _gl.enable(_gl.POLYGON_OFFSET_FILL);
            else
                _gl.disable(_gl.POLYGON_OFFSET_FILL);
        }
    }

    function setLineWidth(width) {

        if (width !== _oldLineWidth) {
            _gl.lineWidth(width);
            _oldLineWidth = width;
        }

    }

    var onGeometryDispose = function(event) {

        var geometry = event.target;
        geometry.removeEventListener('dispose', onGeometryDispose);

        deallocateGeometry(geometry);

        _this.info.memory.geometries--;

    };

    var onTextureDispose = function(event) {

        var texture = event.target;

        texture.removeEventListener('dispose', onTextureDispose);

        deallocateTexture(texture);

        _this.info.memory.textures--;


    };

    var onMaterialDispose = function(event) {

        var material = event.target;
        material.removeEventListener('dispose', onMaterialDispose);

        deallocateMaterial(material);

    };

    var deallocateGeometry = function(geometry) {

        geometry.__webglInit = undefined;

        if (geometry.__webglVertexBuffer !== undefined)
            _gl.deleteBuffer(geometry.__webglVertexBuffer);

        if (geometry.__webglColorBuffer !== undefined)
            _gl.deleteBuffer(geometry.__webglColorBuffer);

        if (geometry.geometryGroups !== undefined) {

            for (var g = 0, gl = geometry.groups; g < gl; g++) {

                var geometryGroup = geometry.geometryGroups[g];

                if (geometryGroup.__webglVertexBuffer !== undefined)
                    _gl.deleteBuffer(geometryGroup.__webglVertexBuffer);

                if (geometryGroup.__webglColorBuffer !== undefined)
                    _gl.deleteBuffer(geometryGroup.__webglColorBuffer);

                if (geometryGroup.__webglNormalBuffer !== undefined)
                    _gl.deleteBuffer(geometryGroup.__webglNormalBuffer);

                if (geometryGroup.__webglFaceBuffer !== undefined)
                    _gl.deleteBuffer(geometryGroup.__webglFaceBuffer);

                if (geometryGroup.__webglLineBuffer !== undefined)
                    _gl.deleteBuffer(geometryGroup.__webglLineBuffer);

            }
        }
    };

    var deallocateMaterial = function(material) {

        var program = material.program;

        if (program === undefined) return;

        material.program = undefined;

        // only deallocate GL program if this was the last use of shared program
        // assumed there is only single copy of any program in the _programs list
        // (that's how it's constructed)

        var i, il, programInfo;
        var deleteProgram = false;

        for (i = 0, il = _programs.length; i < il; i++) {

            programInfo = _programs[i];

            if (programInfo.program === program) {

                programInfo.usedTimes--;

                if (programInfo.usedTimes === 0) {

                    deleteProgram = true;

                }

                break;

            }

        }

        if (deleteProgram === true) {

            // avoid using array.splice, this is costlier than creating new array from scratch

            var newPrograms = [];

            for (i = 0, il = _programs.length; i < il; i++) {

                programInfo = _programs[i];

                if (programInfo.program !== program) {

                    newPrograms.push(programInfo);

                }

            }

            _programs = newPrograms;

            _gl.deleteProgram(program);

            _this.info.memory.programs--;

        }

    };

    var deallocateTexture = function(texture) {

        if (texture.image && texture.image.__webglTextureCube) {

            // cube texture

            _gl.deleteTexture(texture.image.__webglTextureCube);

        } else {

            // 2D texture

            if (!texture.__webglInit) return;

            texture.__webglInit = false;
            _gl.deleteTexture(texture.__webglTexture);

        }

    };

    //Compile and return shader
    function getShader(type, str) {

        var shader;

        if (type === "fragment")
            shader = _gl.createShader(_gl.FRAGMENT_SHADER);
        else if (type === "vertex")
            shader = _gl.createShader(_gl.VERTEX_SHADER);

        _gl.shaderSource(shader, str);
        _gl.compileShader(shader);

        if (!_gl.getShaderParameter(shader, _gl.COMPILE_STATUS)) {

            console.error(_gl.getShaderInfoLog(shader));
            console.error("could not initialize shader");
            return null;

        }

        return shader;

    }


    //Compile appropriate shaders (if necessary) from source code and attach to gl program.
    function buildProgram(fragmentShader, vertexShader, uniforms, parameters) {

        var p, pl, d, program, code;
        var chunks = [];

        chunks.push(fragmentShader);
        chunks.push(vertexShader);

        for (p in parameters) {
            chunks.push(p);
            chunks.push(parameters[p]);
        }

        code = chunks.join();

        //check if program has already been compiled

        for (p = 0, pl = _programs.length; p < pl; p++) {

            var programInfo = _programs[p];

            if (programInfo.code === code) {

                programInfo.usedTimes++;

                return programInfo.program;
            }
        }

        //Set up new program and compile shaders

        program = _gl.createProgram();

        //set up precision
        var precision = _precision;
        var prefix = "precision " + precision + " float;";

        var prefix_vertex = [
            prefix
        ].join("\n");

        var prefix_fragment = [
            parameters.wireframe ? "#define WIREFRAME 1" : "",
            prefix
        ].join("\n");

        var glFragmentShader = getShader("fragment", prefix_fragment + fragmentShader);
        var glVertexShader = getShader("vertex", prefix_vertex + vertexShader);

        _gl.attachShader(program, glVertexShader);
        _gl.attachShader(program, glFragmentShader);

        _gl.linkProgram(program);

        if (!_gl.getProgramParameter(program, _gl.LINK_STATUS))
            console.error("Could not initialize shader");

        //gather and cache uniform variables and attributes

        program.uniforms = {};
        program.attributes = {};

        var identifiers, u, a, i;

        //uniform vars
        identifiers =
            ['viewMatrix', 'modelViewMatrix', 'projectionMatrix', 'normalMatrix', 'modelMatrix', 'cameraPosition'];

        //custom uniform vars
        for (u in uniforms)
            identifiers.push(u);

        for (i = 0; i < identifiers.length; i++) {

            var uniformVar = identifiers[i];
            program.uniforms[uniformVar] = _gl.getUniformLocation(program, uniformVar);

        }

        //attributes
        identifiers =
            ['position', 'normal', 'color', 'lineDistance'];

        /*
        for (a in attributes)
                identifiers.push(a);
        */

        for (i = 0; i < identifiers.length; i++) {

            var attributeVar = identifiers[i];
            program.attributes[attributeVar] = _gl.getAttribLocation(program, attributeVar);
        }

        program.id = _programs_counter++;
        _programs.push({
            program: program,
            code: code,
            usedTimes: 1
        });
        _this.info.memory.programs = _programs.length;

        return program;
    }

    //TODO: need to set up shader attributes and uniforms as attributes on material object after attaching prgm
    //We need to attach appropriate uniform variables to material after shaders have been chosen
    this.initMaterial = function(material, lights, fog, object) {

        material.addEventListener('dispose', onMaterialDispose);

        var u, a, identifiers, i, parameters, maxLightCount, maxBones, maxShadows, shaderID;

        shaderID = material.shaderID;

        if (shaderID) {

            var shader = $3Dmol.ShaderLib[shaderID];
            material.vertexShader = shader.vertexShader;
            material.fragmentShader = shader.fragmentShader;
            material.uniforms = $3Dmol.ShaderUtils.clone(shader.uniforms);
            //TODO: set material uniforms to shader uniform variables

        }

        parameters = {
            wireframe: material.wireframe
        };

        material.program = buildProgram(material.fragmentShader, material.vertexShader, material.uniforms, parameters);

    };

    function setProgram(camera, lights, fog, material, object) {

        if (material.needsUpdate) {

            if (material.program)
                deallocateMaterial(material);

            _this.initMaterial(material, lights, fog, object);
            material.needsUpdate = false;
        }

        var refreshMaterial = false;

        //p_uniforms: uniformVarName => uniformLocation
        //m_uniforms: uniformVarName => uniformJsVal
        var program = material.program,
            p_uniforms = program.uniforms,
            m_uniforms = material.uniforms;

        if (program != _currentProgram) {
            _gl.useProgram(program);
            _currentProgram = program;

            refreshMaterial = true;
        }

        if (material.id != _currentMaterialId) {
            _currentMaterialId = material.id;
            refreshMaterial = true;
        }

        if (camera != _currentCamera) {
            _currentCamera = camera;
            refreshMaterial = true;
        }

        _gl.uniformMatrix4fv(p_uniforms.projectionMatrix, false, camera.projectionMatrix.elements);
        _gl.uniformMatrix4fv(p_uniforms.modelViewMatrix, false, object._modelViewMatrix.elements);
        _gl.uniformMatrix3fv(p_uniforms.normalMatrix, false, object._normalMatrix.elements);

        //Send projection matrix to uniform variable in shader
        if (refreshMaterial) {

            //Load projection, model-view matrices for perspective


            //Set up correct fog uniform vals
            m_uniforms.fogColor.value = fog.color;
            m_uniforms.fogNear.value = fog.near;
            m_uniforms.fogFar.value = fog.far;

            //Set up lights for lambert shader
            if (material.shaderID.lastIndexOf("lambert", 0) === 0) {

                //load view and normal matrices for directional and object lighting
                _gl.uniformMatrix4fv(p_uniforms.viewMatrix, false, camera.matrixWorldInverse.elements);
                //_gl.uniformMatrix4fv(p_uniforms.modelMatrix, false, object.matrixWorld.elements);

                if (_lightsNeedUpdate) {
                    setupLights(program, lights);
                    _lightsNeedUpdate = false;
                }

                //Set up correct light uniform var vals
                m_uniforms.ambientLightColor.value = _lights.ambient;
                m_uniforms.directionalLightColor.value = _lights.directional.colors;
                m_uniforms.directionalLightDirection.value = _lights.directional.positions;
                m_uniforms.ambient.value = material.ambient;
                m_uniforms.emissive.value = material.emissive;

            } else if (material.shaderID === "sphereimposter") {
                _gl.uniformMatrix4fv(p_uniforms.viewMatrix, false, camera.matrixWorldInverse.elements);
                _gl.uniformMatrix3fv(p_uniforms.normalMatrix, false, object._normalMatrix.elements);
            }


            //opacity, diffuse, emissive, etc
            m_uniforms.opacity.value = material.opacity;
            m_uniforms.diffuse.value = material.color;

            //Load any other material specific uniform variables to gl shaders
            loadMaterialUniforms(p_uniforms, m_uniforms);

        }

        return program;

    }

    function loadMaterialUniforms(p_uniforms, m_uniforms) {
        var uniformVar, type, uniformVal, uniformLoc;

        for (uniformVar in m_uniforms) {
            if (!p_uniforms[uniformVar])
                continue;

            type = m_uniforms[uniformVar].type;
            uniformVal = m_uniforms[uniformVar].value;
            uniformLoc = p_uniforms[uniformVar];

            //single float
            if (type === 'f')
                _gl.uniform1f(uniformLoc, uniformVal);
            //array of floats
            else if (type === 'fv')
                _gl.uniform3fv(uniformLoc, uniformVal);
            //color - r,g,b floats
            else if (type === 'c')
                _gl.uniform3f(uniformLoc, uniformVal.r, uniformVal.g, uniformVal.b);

        }

    }

    this.renderBuffer = function(camera, lights, fog, material, geometryGroup, object) {

        if (!material.visible)
            return;

        var program, attributes, linewidth, primitives, a, attribute, i, il;

        //Sets up proper vertex and fragment shaders and attaches them to webGL program
        //Also sets appropriate uniform variables 
        program = setProgram(camera, lights, fog, material, object);

        attributes = program.attributes;

        var updateBuffers = false,
            wireframeBit = material.wireframe ? 1 : 0,
            geometryGroupHash = (geometryGroup.id * 0xffffff) + (program.id * 2) + wireframeBit;

        if (geometryGroupHash !== _currentGeometryGroupHash) {
            _currentGeometryGroupHash = geometryGroupHash;
            updateBuffers = true;
        }

        //rebind shader attributes to appropriate (and already initialized) gl buffers
        if (updateBuffers) {

            disableAttributes();

            // Vertices
            if (attributes.position >= 0) {
                _gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglVertexBuffer);
                enableAttribute(attributes.position);
                _gl.vertexAttribPointer(attributes.position, 3, _gl.FLOAT, false, 0, 0);
            }

            // Colors
            if (attributes.color >= 0) {
                _gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglColorBuffer);
                enableAttribute(attributes.color);
                _gl.vertexAttribPointer(attributes.color, 3, _gl.FLOAT, false, 0, 0);
            }

            // Normals (lambert shader only)
            if (attributes.normal >= 0) {
                _gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglNormalBuffer);
                enableAttribute(attributes.normal);
                _gl.vertexAttribPointer(attributes.normal, 3, _gl.FLOAT, false, 0, 0);
            }

        }

        //Render
        var faceCount, lineCount;
        //lambert shaders - draw triangles
        //TODO: make sure geometryGroup's face count is setup correctly
        if (object instanceof $3Dmol.Mesh) {

            if (material.wireframe) {
                lineCount = geometryGroup.lineidx;
                setLineWidth(material.wireframeLinewidth);

                if (updateBuffers)
                    _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, geometryGroup.__webglLineBuffer);

                _gl.drawElements(_gl.LINES, lineCount, _gl.UNSIGNED_SHORT, 0);
            } else {
                faceCount = geometryGroup.faceidx;

                if (updateBuffers)
                    _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, geometryGroup.__webglFaceBuffer);

                _gl.drawElements(_gl.TRIANGLES, faceCount, _gl.UNSIGNED_SHORT, 0);

            }


            _this.info.render.calls++;
            _this.info.render.vertices += faceCount;
            _this.info.render.faces += faceCount / 3;
        }

        //basic shaders - draw lines
        else if (object instanceof $3Dmol.Line) {
            lineCount = geometryGroup.vertices;

            setLineWidth(material.linewidth);
            _gl.drawArrays(_gl.LINES, 0, lineCount);

            _this.info.render.calls++;
        }

    };

    //rendering
    function renderObjects(renderList, reverse, materialType, camera, lights, fog, useBlending, overrideMaterial) {

        var webglObject, object, buffer, material, start, end, delta;

        //Forward or backward render

        if (reverse) {
            start = renderList.length - 1;
            end = -1;
            delta = -1;
        } else {
            start = 0;
            end = renderList.length;
            delta = 1;
        }

        for (var i = start; i !== end; i += delta) {

            webglObject = renderList[i];

            if (webglObject.render) {

                object = webglObject.object;
                buffer = webglObject.buffer;
                material = webglObject[materialType];

                if (!material)
                    continue;

                if (useBlending)
                    _this.setBlending(true);

                _this.setDepthTest(material.depthTest);
                _this.setDepthWrite(material.depthWrite);
                setPolygonOffset(material.polygonOffset, material.polygonOffsetFactor, material.polygonOffsetUnits);

                _this.setMaterialFaces(material);

                _this.renderBuffer(camera, lights, fog, material, buffer, object);
            }
        }

    }

    this.render = function(scene, camera, forceClear) {

        if (camera instanceof $3Dmol.Camera === false) {

            console.error('$3Dmol.Renderer.render: camera is not an instance of $3Dmol.Camera.');
            return;

        }

        var i, il,

            webglObject, object,
            renderList,

            lights = scene.__lights,
            fog = scene.fog;

        // reset caching for this frame

        _currentMaterialId = -1;
        _lightsNeedUpdate = true;

        // update scene graph

        if (this.autoUpdateScene) scene.updateMatrixWorld();

        // update camera matrices
        //Pretty sure camera's parent is always going to be undefined for our purposes...
        if (camera.parent === undefined) camera.updateMatrixWorld();

        camera.matrixWorldInverse.getInverse(camera.matrixWorld);

        _projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);

        // update WebGL objects

        if (this.autoUpdateObjects) this.initWebGLObjects(scene);


        _this.info.render.calls = 0;
        _this.info.render.vertices = 0;
        _this.info.render.faces = 0;
        _this.info.render.points = 0;

        _currentWidth = _viewportWidth;
        _currentHeight = _viewportHeight;

        if (this.autoClear || forceClear) {

            this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);

        }

        // set matrices for regular objects (frustum culled)

        renderList = scene.__webglObjects;

        for (i = 0, il = renderList.length; i < il; i++) {

            webglObject = renderList[i];
            object = webglObject.object;

            webglObject.render = false;

            if (object.visible) {
                setupMatrices(object, camera);
                unrollBufferMaterial(webglObject);
                webglObject.render = true;
            }
        }

        // set matrices for immediate objects

        var material = null;

        // opaque pass (front-to-back order)

        this.setBlending(false);

        renderObjects(scene.__webglObjects, true, "opaque", camera, lights, fog, false, material);

        //prime depth buffer
        renderObjects(scene.__webglObjects, true, "blank", camera, lights, fog, true, material);

        // transparent pass (back-to-front order)

        renderObjects(scene.__webglObjects, false, "transparent", camera, lights, fog, true, material);

        // Render plugins (e.g. sprites), and reset state

        renderPlugins(this.renderPluginsPost, scene, camera);

        // Ensure depth buffer writing is enabled so it can be cleared on next render

        this.setDepthTest(true);
        this.setDepthWrite(true);

        //_gl.finish();

    };

    function renderPlugins(plugins, scene, camera) {

        //Reset state once regardless
        //This should also fix cartoon render bug (after transparent surface render)

        _currentGeometryGroupHash = -1;
        _currentProgram = null;
        _currentCamera = null;
        _oldBlending = -1;
        _oldDepthWrite = -1;
        _oldDepthTest = -1;
        _oldDoubleSided = -1;
        _currentMaterialId = -1;
        _oldFlipSided = -1;


        if (!plugins.length)
            return;

        for (var i = 0, il = plugins.length; i < il; i++) {

            _lightsNeedUpdate = true;

            plugins[i].render(scene, camera, _currentWidth, _currentHeight);

            //Reset state after plugin render
            _currentGeometryGroupHash = -1;
            _currentProgram = null;
            _currentCamera = null;
            _oldBlending = -1;
            _oldDepthWrite = -1;
            _oldDepthTest = -1;
            _oldDoubleSided = -1;
            _currentMaterialId = -1;
            _oldFlipSided = -1;

        }

    }

    this.initWebGLObjects = function(scene) {

        if (!scene.__webglObjects) {

            scene.__webglObjects = [];
            scene.__webglObjectsImmediate = [];
            scene.__webglSprites = [];
            scene.__webglFlares = [];

        }

        //Add objects; this sets up buffers for each geometryGroup
        if (scene.__objectsAdded.length) {

            while (scene.__objectsAdded.length) {
                addObject(scene.__objectsAdded[0], scene);
                scene.__objectsAdded.splice(0, 1);
            }

            //Force buffer update during render
            //Hackish fix for initial cartoon-render-then-transparent-surface bug
            _currentGeometryGroupHash = -1;

        }

        while (scene.__objectsRemoved.length) {

            removeObject(scene.__objectsRemoved[0], scene);
            scene.__objectsRemoved.splice(0, 1);

        }

        // update must be called after objects adding / removal
        //This sends typed arrays to GL buffers for each geometryGroup
        for (var o = 0, ol = scene.__webglObjects.length; o < ol; o++) {

            updateObject(scene.__webglObjects[o].object);

        }

    };

    // Objects adding

    function addObject(object, scene) {

        var g, gl, geometry, material, geometryGroup;

        if (!object.__webglInit) {

            object.__webglInit = true;

            object._modelViewMatrix = new $3Dmol.Matrix4();
            object._normalMatrix = new $3Dmol.Matrix3();

            if (object.geometry !== undefined && object.geometry.__webglInit === undefined) {

                object.geometry.__webglInit = true;
                object.geometry.addEventListener('dispose', onGeometryDispose);

            }

            if (object instanceof $3Dmol.Mesh || object instanceof $3Dmol.Line) {
                geometry = object.geometry;
                material = object.material;

                for (g = 0, gl = geometry.geometryGroups.length; g < gl; g++) {

                    geometryGroup = geometry.geometryGroups[g];

                    geometryGroup.id = _geometryGroupCounter++;

                    // initialise VBO on the first access

                    if (!geometryGroup.__webglVertexBuffer) {

                        if (object instanceof $3Dmol.Mesh) {
                            createMeshBuffers(geometryGroup);
                            geometry.elementsNeedUpdate = true;
                            geometry.normalsNeedUpdate = true;
                        } else if (object instanceof $3Dmol.Line)
                            createLineBuffers(geometryGroup);

                        geometry.verticesNeedUpdate = true;
                        geometry.colorsNeedUpdate = true;

                    }

                }

            }

        }

        if (!object.__webglActive) {

            if (object instanceof $3Dmol.Mesh || object instanceof $3Dmol.Line) {

                geometry = object.geometry;

                for (g = 0, gl = geometry.geometryGroups.length; g < gl; g++) {
                    geometryGroup = geometry.geometryGroups[g];

                    addBuffer(scene.__webglObjects, geometryGroup, object);
                }

            }

            //Sprite
            else if (object instanceof $3Dmol.Sprite)
                scene.__webglSprites.push(object);


            object.__webglActive = true;

        }

    }

    function updateObject(object) {

        var geometry = object.geometry,
            material = object.material,
            geometryGroup, customAttributesDirty;

        if (object instanceof $3Dmol.Mesh || object instanceof $3Dmol.Line) {

            for (var g = 0, gl = geometry.geometryGroups.length; g < gl; g++) {

                geometryGroup = geometry.geometryGroups[g];

                if (geometry.verticesNeedUpdate || geometry.elementsNeedUpdate || geometry.colorsNeedUpdate || geometry.normalsNeedUpdate) {
                    setBuffers(geometryGroup, _gl.STATIC_DRAW);
                }
            }

            geometry.verticesNeedUpdate = false;
            geometry.elementsNeedUpdate = false;
            geometry.normalsNeedUpdate = false;
            geometry.colorsNeedUpdate = false;

            geometry.buffersNeedUpdate = false;

        }

    }

    function removeObject(object, scene) {

        if (object instanceof $3Dmol.Mesh || object instanceof $3Dmol.Line)
            removeInstances(scene.__webglObjects, object);

        else if (object instanceof $3Dmol.Sprite)
            removeInstancesDirect(scene.__webglSprites, object);

        object.__webglActive = false;

    }

    function removeInstances(objList, object) {

        for (var o = objList.length - 1; o >= 0; --o) {

            if (objList[o].object === object)
                objList.splice(o, 1);

        }
    }

    function removeInstancesDirect(objList, object) {

        for (var o = objList.length - 1; o >= 0; --o) {

            if (objList[o] === object)
                objList.splice(o, 1);

        }
    }

    function unrollBufferMaterial(globject) {

        var object = globject.object;
        var material = object.material;

        if (material.transparent) {
            globject.opaque = null;
            globject.transparent = material;
            var blankMaterial = material.clone();
            blankMaterial.opacity = 0;
            globject.blank = blankMaterial;
        } else {
            globject.opaque = material;
            globject.transparent = null;
        }

    }

    function setBuffers(geometryGroup, hint, line) {

        var vertexArray = geometryGroup.vertexArray;
        var colorArray = geometryGroup.colorArray;

        //vertex buffers
        _gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglVertexBuffer);
        _gl.bufferData(_gl.ARRAY_BUFFER, vertexArray, hint);

        //color buffers
        _gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglColorBuffer);
        _gl.bufferData(_gl.ARRAY_BUFFER, colorArray, hint);


        //normal buffers
        if (geometryGroup.normalArray !== undefined && geometryGroup.__webglNormalBuffer !== undefined) {
            var normalArray = geometryGroup.normalArray;
            _gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglNormalBuffer);
            _gl.bufferData(_gl.ARRAY_BUFFER, normalArray, hint);

        }

        //face (index) buffers
        if (geometryGroup.faceArray !== undefined && geometryGroup.__webglFaceBuffer !== undefined) {
            var faceArray = geometryGroup.faceArray;
            _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, geometryGroup.__webglFaceBuffer);
            _gl.bufferData(_gl.ELEMENT_ARRAY_BUFFER, faceArray, hint);

        }

        //line (index) buffers (for wireframe)
        if (geometryGroup.lineArray !== undefined && geometryGroup.__webglLineBuffer !== undefined) {
            var lineArray = geometryGroup.lineArray;
            _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, geometryGroup.__webglLineBuffer);
            _gl.bufferData(_gl.ELEMENT_ARRAY_BUFFER, lineArray, hint);
        }

    }

    //Creates appropriate gl buffers for geometry chunk
    //TODO: do we need line buffer for mesh objects?
    //Also, can we integrate this with createLineBuffers?
    function createMeshBuffers(geometryGroup) {

        geometryGroup.__webglVertexBuffer = _gl.createBuffer();
        geometryGroup.__webglNormalBuffer = _gl.createBuffer();
        geometryGroup.__webglColorBuffer = _gl.createBuffer();

        geometryGroup.__webglFaceBuffer = _gl.createBuffer();
        geometryGroup.__webglLineBuffer = _gl.createBuffer();

        _this.info.memory.geometries++;
    }

    function createLineBuffers(geometry) {

        geometry.__webglVertexBuffer = _gl.createBuffer();
        geometry.__webglColorBuffer = _gl.createBuffer();

        _this.info.memory.geometries++;
    }

    function addBuffer(objlist, buffer, object) {

        objlist.push({
            buffer: buffer,
            object: object,
            opaque: null,
            transparent: null
        });

    }

    function setupMatrices(object, camera) {

        object._modelViewMatrix.multiplyMatrices(camera.matrixWorldInverse, object.matrixWorld);

        object._normalMatrix.getInverse(object._modelViewMatrix);
        object._normalMatrix.transpose();

    }

    function isPowerOfTwo(value) {

        return (value & (value - 1)) === 0;

    }

    // Fallback filters for non-power-of-2 textures

    function filterFallback(f) {

        return _gl.LINEAR;

    }

    function setTextureParameters(textureType, texture, isImagePowerOfTwo) {

        if (isImagePowerOfTwo) {

            _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_S, paramToGL(texture.wrapS));
            _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_T, paramToGL(texture.wrapT));

            _gl.texParameteri(textureType, _gl.TEXTURE_MAG_FILTER, paramToGL(texture.magFilter));
            _gl.texParameteri(textureType, _gl.TEXTURE_MIN_FILTER, paramToGL(texture.minFilter));

        } else {

            _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_S, _gl.CLAMP_TO_EDGE);
            _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_T, _gl.CLAMP_TO_EDGE);

            _gl.texParameteri(textureType, _gl.TEXTURE_MAG_FILTER, filterFallback(texture.magFilter));
            _gl.texParameteri(textureType, _gl.TEXTURE_MIN_FILTER, filterFallback(texture.minFilter));

        }

    }

    this.setTexture = function(texture, slot) {

        if (texture.needsUpdate) {

            if (!texture.__webglInit) {

                texture.__webglInit = true;

                texture.addEventListener('dispose', onTextureDispose);

                texture.__webglTexture = _gl.createTexture();

                _this.info.memory.textures++;

            }

            _gl.activeTexture(_gl.TEXTURE0 + slot);
            _gl.bindTexture(_gl.TEXTURE_2D, texture.__webglTexture);

            _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, texture.flipY);
            _gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultiplyAlpha);
            _gl.pixelStorei(_gl.UNPACK_ALIGNMENT, texture.unpackAlignment);

            var image = texture.image,
                isImagePowerOfTwo = isPowerOfTwo(image.width) && isPowerOfTwo(image.height),
                glFormat = paramToGL(texture.format),
                glType = paramToGL(texture.type);

            setTextureParameters(_gl.TEXTURE_2D, texture, isImagePowerOfTwo);

            var mipmap, mipmaps = texture.mipmaps;

            // regular Texture (image, video, canvas)

            // use manually created mipmaps if available
            // if there are no manual mipmaps
            // set 0 level mipmap and then use GL to generate other mipmap levels

            if (mipmaps.length > 0 && isImagePowerOfTwo) {

                for (var i = 0, il = mipmaps.length; i < il; i++) {
                    mipmap = mipmaps[i];
                    _gl.texImage2D(_gl.TEXTURE_2D, i, glFormat, glFormat, glType, mipmap);
                }

                texture.generateMipmaps = false;
            } else
                _gl.texImage2D(_gl.TEXTURE_2D, 0, glFormat, glFormat, glType, texture.image);


            if (texture.generateMipmaps && isImagePowerOfTwo) _gl.generateMipmap(_gl.TEXTURE_2D);

            texture.needsUpdate = false;

            if (texture.onUpdate) texture.onUpdate();

        } else {

            _gl.activeTexture(_gl.TEXTURE0 + slot);
            _gl.bindTexture(_gl.TEXTURE_2D, texture.__webglTexture);

        }

    };

    // Map constants to WebGL constants

    function paramToGL(p) {

        if (p === $3Dmol.UnsignedByteType) return _gl.UNSIGNED_BYTE;
        if (p === $3Dmol.RGBAFormat) return _gl.RGBA;

        return 0;

    }

    function setupLights(program, lights) {
        var l, ll, light, n,
            r = 0,
            g = 0,
            b = 0,
            color,
            position,
            intensity,
            distance,

            zlights = _lights,

            dirColors = zlights.directional.colors,
            dirPositions = zlights.directional.positions,

            dirCount = 0,
            dirLength = 0,
            dirOffset = 0;

        for (l = 0, ll = lights.length; l < ll; l++) {

            light = lights[l];

            color = light.color;
            intensity = light.intensity;
            distance = light.distance;

            if (light instanceof $3Dmol.Light) {

                dirCount++;

                _direction.getPositionFromMatrix(light.matrixWorld);
                _vector3.getPositionFromMatrix(light.target.matrixWorld);
                _direction.sub(_vector3);
                _direction.normalize();

                if (_direction.x === 0 && _direction.y === 0 && _direction.z === 0)
                    continue;

                dirPositions[dirOffset] = _direction.x;
                dirPositions[dirOffset + 1] = _direction.y;
                dirPositions[dirOffset + 2] = _direction.z;

                dirColors[dirOffset] = color.r * intensity;
                dirColors[dirOffset + 1] = color.g * intensity;
                dirColors[dirOffset + 2] = color.b * intensity;

                dirOffset += 3;

                dirLength++;
            }

        }

        zlights.ambient[0] = r;
        zlights.ambient[1] = g;
        zlights.ambient[2] = b;
        zlights.directional.length = dirLength;
    }

    function initGL() {

        try {

            if (!(_gl = _canvas.getContext('experimental-webgl', {
                    alpha: _alpha,
                    premultipliedAlpha: _premultipliedAlpha,
                    antialias: _antialias,
                    stencil: _stencil,
                    preserveDrawingBuffer: _preserveDrawingBuffer
                }))) {
                if (!(_gl = _canvas.getContext('webgl', {
                        alpha: _alpha,
                        premultipliedAlpha: _premultipliedAlpha,
                        antialias: _antialias,
                        stencil: _stencil,
                        preserveDrawingBuffer: _preserveDrawingBuffer
                    }))) {
                    throw 'Error creating WebGL context.';
                }
            }

        } catch (error) {

            console.error(error);
        }
        var ext = _gl.getExtension('EXT_frag_depth');
    }

    function setDefaultGLState() {

        _gl.clearColor(0, 0, 0, 1);
        _gl.clearDepth(1);
        _gl.clearStencil(0);

        _gl.enable(_gl.DEPTH_TEST);
        _gl.depthFunc(_gl.LEQUAL);

        _gl.frontFace(_gl.CCW);
        _gl.cullFace(_gl.BACK);
        _gl.enable(_gl.CULL_FACE);

        _gl.enable(_gl.BLEND);
        _gl.blendEquation(_gl.FUNC_ADD);
        _gl.blendFunc(_gl.SRC_ALPHA, _gl.ONE_MINUS_SRC_ALPHA);

        _gl.clearColor(_clearColor.r, _clearColor.g, _clearColor.b, _clearAlpha);
        var ext = _gl.getExtension('EXT_frag_depth');


    }

    this.addPostPlugin(new $3Dmol.SpritePlugin());

};

/*
 * Scene class
 */
/** @constructor */
$3Dmol.Scene = function() {

    $3Dmol.Object3D.call(this);

    this.fog = null;

    //May not need...
    this.overrideMaterial = null;

    this.matrixAutoUpdate = false;

    this.__objects = [];
    this.__lights = [];

    this.__objectsAdded = [];
    this.__objectsRemoved = [];

};

$3Dmol.Scene.prototype = Object.create($3Dmol.Object3D.prototype);

$3Dmol.Scene.prototype.__addObject = function(object) {

    //Directional Lighting
    if (object instanceof $3Dmol.Light) {

        if (this.__lights.indexOf(object) === -1)
            this.__lights.push(object);

        //TODO: Do I need this??
        if (object.target && object.target.parent === undefined)
            this.add(object.target);

    }

    //Rotation group
    else {

        if (this.__objects.indexOf(object) === -1) {

            this.__objects.push(object);
            this.__objectsAdded.push(object);

            //Check if previously removed

            var idx = this.__objectsRemoved.indexOf(object);

            if (idx !== -1)
                this.__objectsRemoved.splice(i, 1);

        }
    }

    //Add object's children

    for (var i = 0; i < object.children.length; i++)
        this.__addObject(object.children[i]);

};

$3Dmol.Scene.prototype.__removeObject = function(object) {

    var idx;
    if (object instanceof $3Dmol.Light) {

        idx = this.__lights.indexOf(object);

        if (idx !== -1)
            this.__lights.splice(idx, 1);

    }

    //Object3D
    else {

        idx = this.__objects.indexOf(object);

        if (idx !== -1) {

            this.__objects.splice(idx, 1);
            this.__objectsRemoved.push(object);

            //Check if previously added

            var ai = this.__objectsAdded.indexOf(object);

            if (ai !== -1)
                this.__objectsAdded.splice(idx, 1);

        }

    }

    //Remove object's children
    for (var i = 0; i < object.children.length; i++)
        this.__removeObject(object.children[i]);

};


/*
 * Fog Class
 */

/** @constructor */
$3Dmol.Fog = function(hex, near, far) {

    this.name = '';

    this.color = new $3Dmol.Color(hex);

    this.near = (near !== undefined) ? near : 1;
    this.far = (far !== undefined) ? far : 1000;

};

$3Dmol.Fog.prototype.clone = function() {

    return new $3Dmol.Fog(this.color.getHex(), this.near, this.far);

};
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$3Dmol.ShaderUtils = {

    clone: function(uniforms_src) {

        var u, p, parameter, parameter_src, uniforms_clone = {};

        for (u in uniforms_src) {
            uniforms_clone[u] = {};
            uniforms_clone[u].type = uniforms_src[u].type;

            var srcValue = uniforms_src[u].value;

            if (srcValue instanceof $3Dmol.Color)
                uniforms_clone[u].value = srcValue.clone();
            else if (typeof srcValue === "number")
                uniforms_clone[u].value = srcValue;
            else if (srcValue instanceof Array)
                uniforms_clone[u].value = [];
            else
                console.error("Error copying shader uniforms from ShaderLib: unknown type for uniform");

        }

        return uniforms_clone;
    }
};

$3Dmol.ShaderLib = {
    'basic': {
        fragmentShader: [
            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform vec3 diffuse;",
            "uniform float opacity;",

            "uniform vec3 fogColor;",
            "uniform float fogNear;",
            "uniform float fogFar;",

            "varying vec3 vColor;",

            "void main() {",

            "    gl_FragColor = vec4( diffuse, opacity );",
            "    gl_FragColor = gl_FragColor * vec4( vColor, opacity );",

            "    float depth = gl_FragCoord.z / gl_FragCoord.w;",
            "    float fogFactor = smoothstep( fogNear, fogFar, depth );",

            "    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );",

            "}"

        ].join("\n"),

        vertexShader: [

            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform mat4 viewMatrix;",
            "uniform mat3 normalMatrix;",
            "uniform vec3 cameraPosition;",

            "attribute vec3 position;",
            "attribute vec3 color;",

            "varying vec3 vColor;",

            "void main() {",

            "    vColor = color;",
            "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
            "    gl_Position = projectionMatrix * mvPosition;",

            "}"

        ].join("\n"),

        uniforms: {
            opacity: {
                type: 'f',
                value: 1.0
            },
            diffuse: {
                type: 'c',
                value: new $3Dmol.Color(1.0, 1.0, 1.0)
            },
            fogColor: {
                type: 'c',
                value: new $3Dmol.Color(1.0, 1.0, 1.0)
            },
            fogNear: {
                type: 'f',
                value: 1.0
            },
            fogFar: {
                type: 'f',
                value: 2000
            }
        }

    },

    'sphereimposter': {
        fragmentShader: [
            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform vec3 diffuse;",
            "uniform float opacity;",

            "uniform vec3 fogColor;",
            "uniform float fogNear;",
            "uniform float fogFar;",

            "varying vec3 vColor;",
            "varying vec2 mapping;",

            "void main() {",
            "    float lensqr = dot(mapping,mapping);",
            "    if(lensqr > 2.0)",
            "       discard;",
            "    float w = sqrt(2.0 - lensqr);",
            "    float z = sqrt(sqrt(2.0)-lensqr);",
            "    gl_FragDepthEXT = -.1*z;",
            "    gl_FragColor = vec4( w*vColor, 1 );",



            "}"

        ].join("\n"),

        vertexShader: [

            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform mat4 viewMatrix;",
            "uniform mat3 normalMatrix;",
            "uniform vec3 cameraPosition;",

            "attribute vec3 position;",
            "attribute vec3 normal;",
            "attribute vec3 color;",

            "varying vec2 mapping;",
            "varying vec3 vColor;",

            "void main() {",

            "    vColor = color;",
            "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
            "    vec4 projPosition = projectionMatrix * mvPosition;",
            "    vec4 adjust = projectionMatrix*vec4(normal, 1.0);  adjust.y *= -1.0; adjust.z = 0.0; adjust.w = 0.0;",
            "    mapping = normal.xy;",
            "    gl_Position = projPosition+adjust;",

            "}"

        ].join("\n"),

        uniforms: {
            opacity: {
                type: 'f',
                value: 1.0
            },
            diffuse: {
                type: 'c',
                value: new $3Dmol.Color(1.0, 1.0, 1.0)
            },
            fogColor: {
                type: 'c',
                value: new $3Dmol.Color(1.0, 1.0, 1.0)
            },
            fogNear: {
                type: 'f',
                value: 1.0
            },
            fogFar: {
                type: 'f',
                value: 2000
            }
        }

    },


    'lambert': {
        fragmentShader: [

            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform float opacity;",

            "uniform vec3 fogColor;",
            "uniform float fogNear;",
            "uniform float fogFar;",

            "varying vec3 vLightFront;",
            "varying vec3 vColor;",

            "void main() {",

            "    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );",

            "    #ifndef WIREFRAME",
            "    gl_FragColor.xyz *= vLightFront;",
            "    #endif",

            "    gl_FragColor = gl_FragColor * vec4( vColor, opacity );",
            "    float depth = gl_FragCoord.z / gl_FragCoord.w;",

            "    float fogFactor = smoothstep( fogNear, fogFar, depth );",

            "    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );",

            "}"


        ].join("\n"),

        vertexShader: [

            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform mat4 viewMatrix;",
            "uniform mat3 normalMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform vec3 ambient;",
            "uniform vec3 diffuse;",
            "uniform vec3 emissive;",
            "uniform vec3 ambientLightColor;",
            "uniform vec3 directionalLightColor[ 1 ];",
            "uniform vec3 directionalLightDirection[ 1 ];",

            "attribute vec3 position;",
            "attribute vec3 normal;",
            "attribute vec3 color;",

            "varying vec3 vColor;",
            "varying vec3 vLightFront;",

            "void main() {",

            "    vColor = color;",

            "    vec3 objectNormal = normal;",
            "    vec3 transformedNormal = normalMatrix * objectNormal;",
            "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",

            "    vLightFront = vec3( 0.0 );",

            "    transformedNormal = normalize( transformedNormal );",

            "    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );",
            "    vec3 dirVector = normalize( lDirection.xyz );",
            "    float dotProduct = dot( transformedNormal, dirVector );",
            "    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );",

            "    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;",
            "    vLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;",

            "    gl_Position = projectionMatrix * mvPosition;",
            "}"

        ].join("\n"),

        uniforms: {
            opacity: {
                type: 'f',
                value: 1.0
            },
            diffuse: {
                type: 'c',
                value: new $3Dmol.Color(1.0, 1.0, 1.0)
            },
            fogColor: {
                type: 'c',
                value: new $3Dmol.Color(1.0, 1.0, 1.0)
            },
            fogNear: {
                type: 'f',
                value: 1.0
            },
            fogFar: {
                type: 'f',
                value: 2000
            },
            ambient: {
                type: 'c',
                value: new $3Dmol.Color(1.0, 1.0, 1.0)
            },
            emissive: {
                type: 'c',
                value: new $3Dmol.Color(1.0, 1.0, 1.0)
            },
            ambientLightColor: {
                type: 'fv',
                value: []
            },
            directionalLightColor: {
                type: 'fv',
                value: []
            },
            directionalLightDirection: {
                type: 'fv',
                value: []
            }
        }

    },

    //for double sided lighting
    'lambertdouble': {
        fragmentShader: [

            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform float opacity;",

            "uniform vec3 fogColor;",
            "uniform float fogNear;",
            "uniform float fogFar;",

            "varying vec3 vLightFront;",
            "varying vec3 vLightBack;",

            "varying vec3 vColor;",

            "void main() {",

            "    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );",

            "    #ifndef WIREFRAME",
            "    if ( gl_FrontFacing )",
            "       gl_FragColor.xyz *= vLightFront;",
            "    else",
            "       gl_FragColor.xyz *= vLightBack;",
            "    #endif",

            "    gl_FragColor = gl_FragColor * vec4( vColor, opacity );",
            "    float depth = gl_FragCoord.z / gl_FragCoord.w;",

            "    float fogFactor = smoothstep( fogNear, fogFar, depth );",

            "    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );",

            "}"


        ].join("\n"),

        vertexShader: [

            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform mat4 viewMatrix;",
            "uniform mat3 normalMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform vec3 ambient;",
            "uniform vec3 diffuse;",
            "uniform vec3 emissive;",
            "uniform vec3 ambientLightColor;",
            "uniform vec3 directionalLightColor[ 1 ];",
            "uniform vec3 directionalLightDirection[ 1 ];",

            "attribute vec3 position;",
            "attribute vec3 normal;",
            "attribute vec3 color;",

            "varying vec3 vColor;",
            "varying vec3 vLightFront;",
            "varying vec3 vLightBack;",

            "void main() {",

            "    vColor = color;",

            "    vec3 objectNormal = normal;",
            "    vec3 transformedNormal = normalMatrix * objectNormal;",
            "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",

            "    vLightFront = vec3( 0.0 );",
            "    vLightBack = vec3( 0.0 );",

            "    transformedNormal = normalize( transformedNormal );",

            "    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );",
            "    vec3 dirVector = normalize( lDirection.xyz );",
            "    float dotProduct = dot( transformedNormal, dirVector );",
            "    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );",
            "    vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );",

            "    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;",
            "    vLightBack += directionalLightColor[ 0 ] * directionalLightWeightingBack;",

            "    vLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;",
            "    vLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;",

            "    gl_Position = projectionMatrix * mvPosition;",
            "}"

        ].join("\n"),

        uniforms: {
            opacity: {
                type: 'f',
                value: 1.0
            },
            diffuse: {
                type: 'c',
                value: new $3Dmol.Color(1.0, 1.0, 1.0)
            },
            fogColor: {
                type: 'c',
                value: new $3Dmol.Color(1.0, 1.0, 1.0)
            },
            fogNear: {
                type: 'f',
                value: 1.0
            },
            fogFar: {
                type: 'f',
                value: 2000
            },
            ambient: {
                type: 'c',
                value: new $3Dmol.Color(1.0, 1.0, 1.0)
            },
            emissive: {
                type: 'c',
                value: new $3Dmol.Color(1.0, 1.0, 1.0)
            },
            ambientLightColor: {
                type: 'fv',
                value: []
            },
            directionalLightColor: {
                type: 'fv',
                value: []
            },
            directionalLightDirection: {
                type: 'fv',
                value: []
            }
        }

    },


    'sprite': {

        fragmentShader: [

            "uniform vec3 color;",
            "uniform sampler2D map;",
            "uniform float opacity;",

            "uniform int fogType;",
            "uniform vec3 fogColor;",
            "uniform float fogDensity;",
            "uniform float fogNear;",
            "uniform float fogFar;",
            "uniform float alphaTest;",

            "varying vec2 vUV;",

            "void main() {",

            "    vec4 texture = texture2D(map, vUV);",

            "    if (texture.a < alphaTest) discard;",

            "    gl_FragColor = vec4(color * texture.xyz, texture.a * opacity);",

            "    if (fogType > 0) {",

            "        float depth = gl_FragCoord.z / gl_FragCoord.w;",
            "        float fogFactor = 0.0;",

            "        if (fogType == 1) {",
            "            fogFactor = smoothstep(fogNear, fogFar, depth);",
            "        }",

            "        else {",
            "            const float LOG2 = 1.442695;",
            "            float fogFactor = exp2(- fogDensity * fogDensity * depth * depth * LOG2);",
            "            fogFactor = 1.0 - clamp(fogFactor, 0.0, 1.0);",
            "        }",

            "        gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w), fogFactor);",

            "    }",
            "}"

        ].join("\n"),

        vertexShader: [

            "uniform int useScreenCoordinates;",
            "uniform vec3 screenPosition;",
            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform float rotation;",
            "uniform vec2 scale;",
            "uniform vec2 alignment;",
            "uniform vec2 uvOffset;",
            "uniform vec2 uvScale;",

            "attribute vec2 position;",
            "attribute vec2 uv;",

            "varying vec2 vUV;",

            "void main() {",

            "    vUV = uvOffset + uv * uvScale;",

            "    vec2 alignedPosition = position + alignment;",

            "    vec2 rotatedPosition;",
            "    rotatedPosition.x = ( cos(rotation) * alignedPosition.x - sin(rotation) * alignedPosition.y ) * scale.x;",
            "    rotatedPosition.y = ( sin(rotation) * alignedPosition.x + cos(rotation) * alignedPosition.y ) * scale.y;",

            "    vec4 finalPosition;",

            "    if(useScreenCoordinates != 0) {",
            "        finalPosition = vec4(screenPosition.xy + rotatedPosition, screenPosition.z, 1.0);",
            "    }",

            "    else {",
            "        finalPosition = projectionMatrix * modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); finalPosition /= finalPosition.w;",
            "        finalPosition.xy += rotatedPosition; ",
            "    }",

            "    gl_Position = finalPosition;",

            "}"

        ].join("\n"),

        uniforms: {

        }

    }

};
var $3Dmol = $3Dmol || {};

//properties for mapping

/* partial charges for proteins */
$3Dmol.partialCharges = {
    "ALA:N": -0.15,
    "ALA:CA": 0.10,
    "ALA:CB": 0.00,
    "ALA:C": 0.60,
    "ALA:O": -0.55,
    "ARG:N": -0.15,
    "ARG:CA": 0.10,
    "ARG:CB": 0.00,
    "ARG:CG": 0.00,
    "ARG:CD": 0.10,
    "ARG:NE": -0.10,
    "ARG:CZ": 0.50,
    "ARG:NH1": 0.25,
    "ARG:NH2": 0.25,
    "ARG:C": 0.60,
    "ARG:O": -0.55,
    "ASN:N": -0.15,
    "ASN:CA": 0.10,
    "ASN:CB": 0.00,
    "ASN:CG": 0.55,
    "ASN:OD1": -0.55,
    "ASN:ND2": 0.00,
    "ASN:C": 0.60,
    "ASN:O": -0.55,
    "ASP:N": -0.15,
    "ASP:CA": 0.10,
    "ASP:CB": 0.00,
    "ASP:CG": 0.14,
    "ASP:OD1": -0.57,
    "ASP:OD2": -0.57,
    "ASP:C": 0.60,
    "ASP:O": -0.55,
    "CYS:N": -0.15,
    "CYS:CA": 0.10,
    "CYS:CB": 0.19,
    "CYS:SG": -0.19,
    "CYS:C": 0.60,
    "CYS:O": -0.55,
    "GLN:N": -0.15,
    "GLN:CA": 0.10,
    "GLN:CB": 0.00,
    "GLN:CG": 0.00,
    "GLN:CD": 0.55,
    "GLN:OE1": -0.55,
    "GLN:NE2": 0.00,
    "GLN:C": 0.60,
    "GLN:O": -0.55,
    "GLU:N": -0.15,
    "GLU:CA": 0.10,
    "GLU:CB": 0.00,
    "GLU:CG": 0.00,
    "GLU:CD": 0.14,
    "GLU:OE1": -0.57,
    "GLU:OE2": -0.57,
    "GLU:C": 0.60,
    "GLU:O": -0.55,
    "GLY:N": -0.15,
    "GLY:CA": 0.10,
    "GLY:C": 0.60,
    "GLY:O": -0.55,
    "HIS:N": -0.15,
    "HIS:CA": 0.10,
    "HIS:CB": 0.00,
    "HIS:CG": 0.10,
    "HIS:ND1": -0.10,
    "HIS:CD2": 0.10,
    "HIS:NE2": -0.40,
    "HIS:CE1": 0.30,
    "HIS:C": 0.60,
    "HIS:O": -0.55,
    "ILE:N": -0.15,
    "ILE:CA": 0.10,
    "ILE:CB": 0.00,
    "ILE:CG2": 0.00,
    "ILE:CG1": 0.00,
    "ILE:CD": 0.00,
    "ILE:C": 0.60,
    "ILE:O": -0.55,
    "LEU:N": -0.15,
    "LEU:CA": 0.10,
    "LEU:CB": 0.00,
    "LEU:CG": 0.00,
    "LEU:CD1": 0.00,
    "LEU:CD2": 0.00,
    "LEU:C": 0.60,
    "LEU:O": -0.55,
    "LYS:N": -0.15,
    "LYS:CA": 0.10,
    "LYS:CB": 0.00,
    "LYS:CG": 0.00,
    "LYS:CD": 0.00,
    "LYS:CE": 0.25,
    "LYS:NZ": 0.75,
    "LYS:C": 0.60,
    "LYS:O": -0.55,
    "MET:N": -0.15,
    "MET:CA": 0.10,
    "MET:CB": 0.00,
    "MET:CG": 0.06,
    "MET:SD": -0.12,
    "MET:CE": 0.06,
    "MET:C": 0.60,
    "MET:O": -0.55,
    "PHE:N": -0.15,
    "PHE:CA": 0.10,
    "PHE:CB": 0.00,
    "PHE:CG": 0.00,
    "PHE:CD1": 0.00,
    "PHE:CD2": 0.00,
    "PHE:CE1": 0.00,
    "PHE:CE2": 0.00,
    "PHE:CZ": 0.00,
    "PHE:C": 0.60,
    "PHE:O": -0.55,
    "PRO:N": -0.25,
    "PRO:CD": 0.10,
    "PRO:CA": 0.10,
    "PRO:CB": 0.00,
    "PRO:CG": 0.00,
    "PRO:C": 0.60,
    "PRO:O": -0.55,
    "SER:N": -0.15,
    "SER:CA": 0.10,
    "SER:CB": 0.25,
    "SER:OG": -0.25,
    "SER:C": 0.60,
    "SER:O": -0.55,
    "THR:N": -0.15,
    "THR:CA": 0.10,
    "THR:CB": 0.25,
    "THR:OG1": -0.25,
    "THR:CG2": 0.00,
    "THR:C": 0.60,
    "THR:O": -0.55,
    "TRP:N": -0.15,
    "TRP:CA": 0.10,
    "TRP:CB": 0.00,
    "TRP:CG": -0.03,
    "TRP:CD2": 0.10,
    "TRP:CE2": -0.04,
    "TRP:CE3": -0.03,
    "TRP:CD1": 0.06,
    "TRP:NE1": -0.06,
    "TRP:CZ2": 0.00,
    "TRP:CZ3": 0.00,
    "TRP:CH2": 0.00,
    "TRP:C": 0.60,
    "TRP:O": -0.55,
    "TYR:N": -0.15,
    "TYR:CA": 0.10,
    "TYR:CB": 0.00,
    "TYR:CG": 0.00,
    "TYR:CD1": 0.00,
    "TYR:CE1": 0.00,
    "TYR:CD2": 0.00,
    "TYR:CE2": 0.00,
    "TYR:CZ": 0.25,
    "TYR:OH": -0.25,
    "TYR:C": 0.60,
    "TYR:O": -0.55,
    "VAL:N": -0.15,
    "VAL:CA": 0.10,
    "VAL:CB": 0.00,
    "VAL:CG1": 0.00,
    "VAL:CG2": 0.00,
    "VAL:C": 0.60,
    "VAL:O": -0.55
};

//this can be supplied to mapAtomProperties
$3Dmol.applyPartialCharges = function(atom, keepexisting) {
    if (!keepexisting || typeof(atom.partialCharge) === "undefined") {
        if (atom.resn && atom.atom) {
            var key = atom.resn + ":" + atom.atom;
            atom.properties['partialCharge'] = $3Dmol.partialCharges[key];
        }
    }
};
$3Dmol = $3Dmol || {};
//Encapsulate marching cube algorithm for isosurface generation
// (currently used by protein surface rendering and generic volumetric data reading)
$3Dmol.MarchingCube = (function() {

    //Marching cube algorithm - assume data has been pre-treated so isovalue is 0 
    // (i.e. select points greater than 0)
    //origin -  vector of origin of volumetric data (default is (0,0,0))
    // nX, nY, nZ - specifies number of voxels in each dimension
    // scale - cube diagonal unit vector scale (3Dmol vector) (specifying distance between data points); diagonal of cube
    // - default is 1 - assumes unit cube (1,1,1) diag)
    // fulltable - if true, use full marching cubes and tritables - else use trimmed table (e.g. surf render)
    // voxel - if true, draws with a blocky voxel style (default false)
    // verts, faces - vertex and face arrays to fill up

    //to match with protein surface...
    var ISDONE = 2;
    var my = {};

    my.march = function(data, verts, faces, spec) {

        var fulltable = !!(spec.fulltable);
        var origin = (spec.hasOwnProperty('origin') && spec.origin.hasOwnProperty('x')) ? spec.origin : {
            x: 0,
            y: 0,
            z: 0
        };
        var voxel = !!(spec.voxel);

        var nX = spec.nX || 0;
        var nY = spec.nY || 0;
        var nZ = spec.nZ || 0;

        var scale = spec.scale || 1.0;

        var unitCube = new $3Dmol.Vector3(1, 1, 1).multiplyScalar(scale);

        //keep track of calculated vertices to avoid repeats
        var vertnums = new Int32Array(nX * nY * nZ);

        var i, il;

        for (i = 0, il = vertnums.length; i < il; ++i)
            vertnums[i] = -1;

        // create (or retrieve) a vertex at the appropriate point for
        // the edge (p1,p2)

        var getVertex = function(i, j, k, code, p1, p2) {
            var pt = new $3Dmol.Vector3();
            pt.copy(origin);
            var val1 = !!(code & (1 << p1));
            var val2 = !!(code & (1 << p2));

            // p1 if they are the same or if !val1
            var p = p1;
            if (!val1 && val2)
                p = p2;

            // adjust i,j,k by p
            if (p & 1)
                k++;
            if (p & 2)
                j++;
            if (p & 4)
                i++;

            pt.x += unitCube.x * i;
            pt.y += unitCube.y * j;
            pt.z += unitCube.z * k;

            var index = ((nY * i) + j) * nZ + k;

            //Have to add option to do voxels
            if (!voxel) {

                if (vertnums[index] < 0) // not created yet
                {
                    vertnums[index] = verts.length;
                    verts.push(pt);
                }
                return vertnums[index];

            } else {
                verts.push(pt);
                return verts.length - 1;
            }

        };

        var intersects = new Int32Array(12);

        var etable = (fulltable) ? edgeTable2 : edgeTable;
        var tritable = (fulltable) ? triTable2 : triTable;

        //Run marching cubes algorithm
        for (i = 0; i < nX - 1; ++i) {

            for (var j = 0; j < nY - 1; ++j) {

                for (var k = 0; k < nZ - 1; ++k) {

                    var code = 0;

                    for (var p = 0; p < 8; ++p) {
                        var index = ((nY * (i + ((p & 4) >> 2))) + j + ((p & 2) >> 1)) *
                            nZ + k + (p & 1);

                        //TODO: Need to fix vpBits in protein surface for this to work
                        var val = !!(data[index] & ISDONE);
                        //var val = !!(data[index] > 0);   

                        code |= val << p;
                    }

                    if (code === 0 || code === 255)
                        continue;

                    var ecode = etable[code];

                    if (ecode === 0)
                        continue;

                    var ttable = tritable[code];

                    if (ecode & 1)
                        intersects[0] = getVertex(i, j, k, code, 0, 1);
                    if (ecode & 2)
                        intersects[1] = getVertex(i, j, k, code, 1, 3);
                    if (ecode & 4)
                        intersects[2] = getVertex(i, j, k, code, 3, 2);
                    if (ecode & 8)
                        intersects[3] = getVertex(i, j, k, code, 2, 0);
                    if (ecode & 16)
                        intersects[4] = getVertex(i, j, k, code, 4, 5);
                    if (ecode & 32)
                        intersects[5] = getVertex(i, j, k, code, 5, 7);
                    if (ecode & 64)
                        intersects[6] = getVertex(i, j, k, code, 7, 6);
                    if (ecode & 128)
                        intersects[7] = getVertex(i, j, k, code, 6, 4);
                    if (ecode & 256)
                        intersects[8] = getVertex(i, j, k, code, 0, 4);
                    if (ecode & 512)
                        intersects[9] = getVertex(i, j, k, code, 1, 5);
                    if (ecode & 1024)
                        intersects[10] = getVertex(i, j, k, code, 3, 7);
                    if (ecode & 2048)
                        intersects[11] = getVertex(i, j, k, code, 2, 6);

                    for (var t = 0; t < ttable.length; t += 3) {

                        var a = intersects[ttable[t]],
                            b = intersects[ttable[t + 1]],
                            c = intersects[ttable[t + 2]];

                        if (voxel && t >= 3) {
                            verts.push(verts[a]);
                            a = verts.length - 1;
                            verts.push(verts[b]);
                            b = verts.length - 1;
                            verts.push(verts[c]);
                            c = verts.length - 1;
                        }


                        faces.push(a);
                        faces.push(b);
                        faces.push(c);
                    }

                }

            }

        }


    };

    my.laplacianSmooth = function(numiter, verts, faces) {
        var tps = new Array(verts.length);
        var i, il, j, jl, k, kl;
        for (i = 0, il = verts.length; i < il; i++)
            tps[i] = {
                x: 0,
                y: 0,
                z: 0
            };
        var vertdeg = new Array(20);
        var flagvert;
        for (i = 0; i < 20; i++)
            vertdeg[i] = new Array(verts.length);
        for (i = 0, il = verts.length; i < il; i++)
            vertdeg[0][i] = 0;
        for (i = 0, il = faces.length / 3; i < il; i++) {
            var aoffset = i * 3,
                boffset = i * 3 + 1,
                coffset = i * 3 + 2;
            flagvert = true;
            for (j = 0, jl = vertdeg[0][faces[aoffset]]; j < jl; j++) {
                if (faces[boffset] == vertdeg[j + 1][faces[aoffset]]) {
                    flagvert = false;
                    break;
                }
            }
            if (flagvert) {
                vertdeg[0][faces[aoffset]] ++;
                vertdeg[vertdeg[0][faces[aoffset]]][faces[aoffset]] = faces[boffset];
            }
            flagvert = true;
            for (j = 0, jl = vertdeg[0][faces[aoffset]]; j < jl; j++) {
                if (faces[coffset] == vertdeg[j + 1][faces[aoffset]]) {
                    flagvert = false;
                    break;
                }
            }
            if (flagvert) {
                vertdeg[0][faces[aoffset]] ++;
                vertdeg[vertdeg[0][faces[aoffset]]][faces[aoffset]] = faces[coffset];
            }
            // b
            flagvert = true;
            for (j = 0, jl = vertdeg[0][faces[boffset]]; j < jl; j++) {
                if (faces[aoffset] == vertdeg[j + 1][faces[boffset]]) {
                    flagvert = false;
                    break;
                }
            }
            if (flagvert) {
                vertdeg[0][faces[boffset]] ++;
                vertdeg[vertdeg[0][faces[boffset]]][faces[boffset]] = faces[aoffset];
            }
            flagvert = true;
            for (j = 0, jl = vertdeg[0][faces[boffset]]; j < jl; j++) {
                if (faces[coffset] == vertdeg[j + 1][faces[boffset]]) {
                    flagvert = false;
                    break;
                }
            }
            if (flagvert) {
                vertdeg[0][faces[boffset]] ++;
                vertdeg[vertdeg[0][faces[boffset]]][faces[boffset]] = faces[coffset];
            }
            // c
            flagvert = true;
            for (j = 0; j < vertdeg[0][faces[coffset]]; j++) {
                if (faces[aoffset] == vertdeg[j + 1][faces[coffset]]) {
                    flagvert = false;
                    break;
                }
            }
            if (flagvert) {
                vertdeg[0][faces[coffset]] ++;
                vertdeg[vertdeg[0][faces[coffset]]][faces[coffset]] = faces[aoffset];
            }
            flagvert = true;
            for (j = 0, jl = vertdeg[0][faces[coffset]]; j < jl; j++) {
                if (faces[boffset] == vertdeg[j + 1][faces[coffset]]) {
                    flagvert = false;
                    break;
                }
            }
            if (flagvert) {
                vertdeg[0][faces[coffset]] ++;
                vertdeg[vertdeg[0][faces[coffset]]][faces[coffset]] = faces[boffset];
            }
        }

        var wt = 1.00;
        var wt2 = 0.50;
        var ssign;
        var scaleFactor = 1;
        var outwt = 0.75 / (scaleFactor + 3.5); // area-preserving
        for (k = 0; k < numiter; k++) {
            for (i = 0, il = verts.length; i < il; i++) {
                if (vertdeg[0][i] < 3) {
                    tps[i].x = verts[i].x;
                    tps[i].y = verts[i].y;
                    tps[i].z = verts[i].z;
                } else if (vertdeg[0][i] == 3 || vertdeg[0][i] == 4) {
                    tps[i].x = 0;
                    tps[i].y = 0;
                    tps[i].z = 0;
                    for (j = 0, jl = vertdeg[0][i]; j < jl; j++) {
                        tps[i].x += verts[vertdeg[j + 1][i]].x;
                        tps[i].y += verts[vertdeg[j + 1][i]].y;
                        tps[i].z += verts[vertdeg[j + 1][i]].z;
                    }
                    tps[i].x += wt2 * verts[i].x;
                    tps[i].y += wt2 * verts[i].y;
                    tps[i].z += wt2 * verts[i].z;
                    tps[i].x /= wt2 + vertdeg[0][i];
                    tps[i].y /= wt2 + vertdeg[0][i];
                    tps[i].z /= wt2 + vertdeg[0][i];
                } else {
                    tps[i].x = 0;
                    tps[i].y = 0;
                    tps[i].z = 0;
                    for (j = 0, jl = vertdeg[0][i]; j < jl; j++) {
                        tps[i].x += verts[vertdeg[j + 1][i]].x;
                        tps[i].y += verts[vertdeg[j + 1][i]].y;
                        tps[i].z += verts[vertdeg[j + 1][i]].z;
                    }
                    tps[i].x += wt * verts[i].x;
                    tps[i].y += wt * verts[i].y;
                    tps[i].z += wt * verts[i].z;
                    tps[i].x /= wt + vertdeg[0][i];
                    tps[i].y /= wt + vertdeg[0][i];
                    tps[i].z /= wt + vertdeg[0][i];
                }
            }
            for (i = 0, il = verts.length; i < il; i++) {
                verts[i].x = tps[i].x;
                verts[i].y = tps[i].y;
                verts[i].z = tps[i].z;
            }
            /*
             * computenorm(); for (var i = 0; i < vertnumber; i++) { if
             * (verts[i].inout) ssign = 1; else ssign = -1; verts[i].x += ssign *
             * outwt * verts[i].pn.x; verts[i].y += ssign * outwt *
             * verts[i].pn.y; verts[i].z += ssign * outwt * verts[i].pn.z; }
             */
        }
    };


    /*
     * These tables are based off those by Paul Bourke and Geoffrey Heller:
     * http://paulbourke.net/geometry/polygonise/
     * http://paulbourke.net/geometry/polygonise/table2.txt
     *
     * However, they have been substantially modified to reflect a more
     * sensible corner numbering scheme and the discrete nature of our voxel data
     * (resulting in fewer faces).
     */
    my.edgeTable = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
        0xb00, 0x0, 0x0, 0x0, 0x700, 0x0, 0xd00, 0xe00, 0xf00, 0x0, 0x0, 0x0,
        0x8a, 0x0, 0x15, 0x0, 0x86, 0x0, 0x0, 0x0, 0x28c, 0x0, 0x813, 0xf19,
        0xe10, 0x0, 0x0, 0x0, 0x2a, 0x0, 0x0, 0x0, 0x126, 0x0, 0x0, 0x15, 0x1c,
        0x0, 0xf23, 0x419, 0xd20, 0x0, 0xa8, 0xa2, 0xaa, 0x0, 0x285, 0x9ab,
        0x8a2, 0x0, 0x2af, 0x125, 0xac, 0xfaa, 0xea3, 0xda9, 0xca0, 0x0, 0x0,
        0x0, 0x0, 0x0, 0x45, 0x0, 0x384, 0x0, 0x0, 0x0, 0x700, 0x8a, 0x83,
        0x648, 0x780, 0x0, 0x51, 0x0, 0x81a, 0x54, 0x55, 0x54, 0x56, 0x0, 0x51,
        0x0, 0xe5c, 0x14a, 0x451, 0x759, 0x650, 0x0, 0x0, 0x0, 0x2a, 0x0, 0x45,
        0x0, 0x1f6, 0x0, 0x0, 0x15, 0xdfc, 0x8a, 0x7f3, 0x4f9, 0x5f0, 0xb00,
        0x68, 0x921, 0x6a, 0x348, 0x245, 0x16f, 0x66, 0xb00, 0xe6f, 0xd65,
        0xc6c, 0x76a, 0x663, 0x569, 0x460, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
        0xf46, 0x0, 0x0, 0x45, 0x24c, 0x2a, 0x823, 0x29, 0xb40, 0x0, 0x0, 0x0,
        0x6ba, 0x0, 0x8f5, 0xfff, 0xef6, 0x0, 0xff, 0x2f5, 0x2fc, 0x9ea, 0x8f3,
        0xbf9, 0xaf0, 0x0, 0x0, 0x51, 0x152, 0x0, 0xf55, 0x45f, 0xd56, 0x54,
        0x357, 0x55, 0x154, 0x852, 0xb53, 0x59, 0x950, 0x700, 0x2c8, 0xc2,
        0x48a, 0xfc4, 0xec5, 0xdcf, 0xcc6, 0x2c4, 0x2cf, 0xc5, 0xcc, 0xbca,
        0xac3, 0x9c9, 0x8c0, 0x0, 0x0, 0x0, 0x0, 0xa8, 0x1a4, 0xa8, 0x7a6,
        0xa2, 0xa2, 0x2a4, 0xbac, 0xaa, 0xa3, 0x2a8, 0x3a0, 0xd00, 0xc18,
        0xd00, 0xe3a, 0x34, 0x35, 0x73f, 0x636, 0x924, 0x83f, 0xb35, 0xa3c,
        0x12a, 0x33, 0x339, 0x230, 0xe00, 0xe00, 0xc12, 0xd9a, 0x684, 0x795,
        0x49f, 0x596, 0x92, 0xb9f, 0x815, 0x99c, 0x9a, 0x393, 0x99, 0x190,
        0xf00, 0xe08, 0xd01, 0xc0a, 0x704, 0x605, 0x50f, 0x406, 0xb02, 0xa0f,
        0x905, 0x80c, 0x30a, 0x203, 0x109, 0x0
    ];

    var edgeTable = new Uint32Array(my.edgeTable);

    var triTable = my.triTable = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [11, 9, 8],
        [],
        [],
        [],
        [8, 10, 9],
        [],
        [10, 8, 11],
        [9, 11, 10],
        [8, 10, 9, 8, 11, 10],
        [],
        [],
        [],
        [1, 7, 3],
        [],
        [4, 2, 0],
        [],
        [2, 1, 7],
        [],
        [],
        [],
        [2, 7, 3, 2, 9, 7],
        [],
        [1, 4, 11, 1, 0, 4],
        [3, 8, 0, 11, 9, 4, 11, 10, 9],
        [4, 11, 9, 11, 10, 9],
        [],
        [],
        [],
        [5, 3, 1],
        [],
        [],
        [],
        [2, 5, 8, 2, 1, 5],
        [],
        [],
        [2, 4, 0],
        [3, 2, 4],
        [],
        [0, 9, 1, 8, 10, 5, 8, 11, 10],
        [3, 4, 0, 3, 10, 4],
        [5, 8, 10, 8, 11, 10],
        [],
        [3, 5, 7],
        [7, 1, 5],
        [1, 7, 3, 1, 5, 7],
        [],
        [9, 2, 0, 9, 7, 2],
        [0, 3, 8, 1, 7, 11, 1, 5, 7],
        [11, 1, 7, 1, 5, 7],
        [],
        [9, 1, 0, 5, 3, 2, 5, 7, 3],
        [8, 2, 5, 8, 0, 2],
        [2, 5, 3, 5, 7, 3],
        [3, 9, 1, 3, 8, 9, 7, 11, 10, 7, 10, 5],
        [9, 1, 0, 10, 7, 11, 10, 5, 7],
        [3, 8, 0, 7, 10, 5, 7, 11, 10],
        [11, 5, 7, 11, 10, 5],
        [],
        [],
        [],
        [],
        [],
        [0, 6, 2],
        [],
        [7, 2, 9, 7, 9, 8],
        [],
        [],
        [],
        [8, 10, 9],
        [7, 1, 3],
        [7, 1, 0],
        [6, 9, 3, 6, 10, 9],
        [7, 10, 8, 10, 9, 8],
        [],
        [6, 0, 4],
        [],
        [11, 1, 4, 11, 3, 1],
        [2, 4, 6],
        [2, 0, 4, 2, 4, 6],
        [2, 4, 6],
        [1, 4, 2, 4, 6, 2],
        [],
        [6, 0, 4],
        [],
        [2, 11, 3, 6, 9, 4, 6, 10, 9],
        [8, 6, 1, 8, 1, 3],
        [10, 0, 6, 0, 4, 6],
        [8, 0, 3, 9, 6, 10, 9, 4, 6],
        [10, 4, 6, 10, 9, 4],
        [],
        [],
        [],
        [5, 3, 1],
        [],
        [0, 6, 2],
        [],
        [7, 4, 8, 5, 2, 1, 5, 6, 2],
        [],
        [],
        [2, 4, 0],
        [7, 4, 8, 2, 11, 3, 10, 5, 6],
        [7, 1, 3],
        [5, 6, 10, 0, 9, 1, 8, 7, 4],
        [5, 6, 10, 7, 0, 3, 7, 4, 0],
        [10, 5, 6, 4, 8, 7],
        [9, 11, 8],
        [3, 5, 6],
        [0, 5, 11, 0, 11, 8],
        [6, 3, 5, 3, 1, 5],
        [3, 9, 6, 3, 8, 9],
        [9, 6, 0, 6, 2, 0],
        [0, 3, 8, 2, 5, 6, 2, 1, 5],
        [1, 6, 2, 1, 5, 6],
        [9, 11, 8],
        [1, 0, 9, 6, 10, 5, 11, 3, 2],
        [6, 10, 5, 2, 8, 0, 2, 11, 8],
        [3, 2, 11, 10, 5, 6],
        [10, 5, 6, 9, 3, 8, 9, 1, 3],
        [0, 9, 1, 5, 6, 10],
        [8, 0, 3, 10, 5, 6],
        [10, 5, 6],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [1, 10, 2, 9, 11, 6, 9, 8, 11],
        [],
        [],
        [6, 0, 2],
        [3, 6, 9, 3, 2, 6],
        [3, 5, 1],
        [0, 5, 1, 0, 11, 5],
        [0, 3, 5],
        [6, 9, 11, 9, 8, 11],
        [],
        [],
        [],
        [4, 5, 9, 7, 1, 10, 7, 3, 1],
        [],
        [11, 6, 7, 2, 4, 5, 2, 0, 4],
        [11, 6, 7, 8, 0, 3, 1, 10, 2, 9, 4, 5],
        [6, 7, 11, 1, 10, 2, 9, 4, 5],
        [],
        [4, 1, 0, 4, 5, 1, 6, 7, 3, 6, 3, 2],
        [9, 4, 5, 0, 6, 7, 0, 2, 6],
        [4, 5, 9, 6, 3, 2, 6, 7, 3],
        [6, 7, 11, 5, 3, 8, 5, 1, 3],
        [6, 7, 11, 4, 1, 0, 4, 5, 1],
        [4, 5, 9, 3, 8, 0, 11, 6, 7],
        [9, 4, 5, 7, 11, 6],
        [],
        [],
        [0, 6, 4],
        [8, 6, 4, 8, 1, 6],
        [],
        [0, 10, 2, 0, 9, 10, 4, 8, 11, 4, 11, 6],
        [10, 2, 1, 6, 0, 3, 6, 4, 0],
        [10, 2, 1, 11, 4, 8, 11, 6, 4],
        [4, 2, 6],
        [1, 0, 9, 2, 4, 8, 2, 6, 4],
        [2, 4, 0, 2, 6, 4],
        [8, 2, 4, 2, 6, 4],
        [11, 4, 1, 11, 6, 4],
        [0, 9, 1, 4, 11, 6, 4, 8, 11],
        [3, 6, 0, 6, 4, 0],
        [8, 6, 4, 8, 11, 6],
        [10, 8, 9],
        [6, 3, 9, 6, 7, 3],
        [6, 7, 1],
        [10, 7, 1, 7, 3, 1],
        [7, 11, 6, 8, 10, 2, 8, 9, 10],
        [11, 6, 7, 10, 0, 9, 10, 2, 0],
        [2, 1, 10, 7, 11, 6, 8, 0, 3],
        [1, 10, 2, 6, 7, 11],
        [7, 2, 6, 7, 9, 2],
        [1, 0, 9, 3, 6, 7, 3, 2, 6],
        [7, 0, 6, 0, 2, 6],
        [2, 7, 3, 2, 6, 7],
        [7, 11, 6, 3, 9, 1, 3, 8, 9],
        [9, 1, 0, 11, 6, 7],
        [0, 3, 8, 11, 6, 7],
        [11, 6, 7],
        [],
        [],
        [],
        [],
        [5, 3, 7],
        [8, 5, 2, 8, 7, 5],
        [5, 3, 7],
        [1, 10, 2, 5, 8, 7, 5, 9, 8],
        [1, 7, 5],
        [1, 7, 5],
        [9, 2, 7, 9, 7, 5],
        [11, 3, 2, 8, 5, 9, 8, 7, 5],
        [1, 3, 7, 1, 7, 5],
        [0, 7, 1, 7, 5, 1],
        [9, 3, 5, 3, 7, 5],
        [9, 7, 5, 9, 8, 7],
        [8, 10, 11],
        [3, 4, 10, 3, 10, 11],
        [8, 10, 11],
        [5, 9, 4, 1, 11, 3, 1, 10, 11],
        [2, 4, 5],
        [5, 2, 4, 2, 0, 4],
        [0, 3, 8, 5, 9, 4, 10, 2, 1],
        [2, 1, 10, 9, 4, 5],
        [2, 8, 5, 2, 11, 8],
        [3, 2, 11, 1, 4, 5, 1, 0, 4],
        [9, 4, 5, 8, 2, 11, 8, 0, 2],
        [11, 3, 2, 9, 4, 5],
        [8, 5, 3, 5, 1, 3],
        [5, 0, 4, 5, 1, 0],
        [3, 8, 0, 4, 5, 9],
        [9, 4, 5],
        [11, 9, 10],
        [11, 9, 10],
        [1, 11, 4, 1, 10, 11],
        [8, 7, 4, 11, 1, 10, 11, 3, 1],
        [2, 7, 9, 2, 9, 10],
        [4, 8, 7, 0, 10, 2, 0, 9, 10],
        [2, 1, 10, 0, 7, 4, 0, 3, 7],
        [10, 2, 1, 8, 7, 4],
        [1, 7, 4],
        [3, 2, 11, 4, 8, 7, 9, 1, 0],
        [11, 4, 2, 4, 0, 2],
        [2, 11, 3, 7, 4, 8],
        [4, 1, 7, 1, 3, 7],
        [1, 0, 9, 8, 7, 4],
        [3, 4, 0, 3, 7, 4],
        [8, 7, 4],
        [8, 9, 10, 8, 10, 11],
        [3, 9, 11, 9, 10, 11],
        [0, 10, 8, 10, 11, 8],
        [10, 3, 1, 10, 11, 3],
        [2, 8, 10, 8, 9, 10],
        [9, 2, 0, 9, 10, 2],
        [8, 0, 3, 1, 10, 2],
        [10, 2, 1],
        [1, 11, 9, 11, 8, 9],
        [11, 3, 2, 0, 9, 1],
        [11, 0, 2, 11, 8, 0],
        [11, 3, 2],
        [8, 1, 3, 8, 9, 1],
        [9, 1, 0],
        [8, 0, 3],
        []
    ];

    var edgeTable2 = [0x0, 0x109, 0x203, 0x30a, 0x80c, 0x905, 0xa0f,
        0xb06, 0x406, 0x50f, 0x605, 0x70c, 0xc0a, 0xd03, 0xe09, 0xf00, 0x190,
        0x99, 0x393, 0x29a, 0x99c, 0x895, 0xb9f, 0xa96, 0x596, 0x49f, 0x795,
        0x69c, 0xd9a, 0xc93, 0xf99, 0xe90, 0x230, 0x339, 0x33, 0x13a, 0xa3c,
        0xb35, 0x83f, 0x936, 0x636, 0x73f, 0x435, 0x53c, 0xe3a, 0xf33, 0xc39,
        0xd30, 0x3a0, 0x2a9, 0x1a3, 0xaa, 0xbac, 0xaa5, 0x9af, 0x8a6, 0x7a6,
        0x6af, 0x5a5, 0x4ac, 0xfaa, 0xea3, 0xda9, 0xca0, 0x8c0, 0x9c9, 0xac3,
        0xbca, 0xcc, 0x1c5, 0x2cf, 0x3c6, 0xcc6, 0xdcf, 0xec5, 0xfcc, 0x4ca,
        0x5c3, 0x6c9, 0x7c0, 0x950, 0x859, 0xb53, 0xa5a, 0x15c, 0x55, 0x35f,
        0x256, 0xd56, 0xc5f, 0xf55, 0xe5c, 0x55a, 0x453, 0x759, 0x650, 0xaf0,
        0xbf9, 0x8f3, 0x9fa, 0x2fc, 0x3f5, 0xff, 0x1f6, 0xef6, 0xfff, 0xcf5,
        0xdfc, 0x6fa, 0x7f3, 0x4f9, 0x5f0, 0xb60, 0xa69, 0x963, 0x86a, 0x36c,
        0x265, 0x16f, 0x66, 0xf66, 0xe6f, 0xd65, 0xc6c, 0x76a, 0x663, 0x569,
        0x460, 0x460, 0x569, 0x663, 0x76a, 0xc6c, 0xd65, 0xe6f, 0xf66, 0x66,
        0x16f, 0x265, 0x36c, 0x86a, 0x963, 0xa69, 0xb60, 0x5f0, 0x4f9, 0x7f3,
        0x6fa, 0xdfc, 0xcf5, 0xfff, 0xef6, 0x1f6, 0xff, 0x3f5, 0x2fc, 0x9fa,
        0x8f3, 0xbf9, 0xaf0, 0x650, 0x759, 0x453, 0x55a, 0xe5c, 0xf55, 0xc5f,
        0xd56, 0x256, 0x35f, 0x55, 0x15c, 0xa5a, 0xb53, 0x859, 0x950, 0x7c0,
        0x6c9, 0x5c3, 0x4ca, 0xfcc, 0xec5, 0xdcf, 0xcc6, 0x3c6, 0x2cf, 0x1c5,
        0xcc, 0xbca, 0xac3, 0x9c9, 0x8c0, 0xca0, 0xda9, 0xea3, 0xfaa, 0x4ac,
        0x5a5, 0x6af, 0x7a6, 0x8a6, 0x9af, 0xaa5, 0xbac, 0xaa, 0x1a3, 0x2a9,
        0x3a0, 0xd30, 0xc39, 0xf33, 0xe3a, 0x53c, 0x435, 0x73f, 0x636, 0x936,
        0x83f, 0xb35, 0xa3c, 0x13a, 0x33, 0x339, 0x230, 0xe90, 0xf99, 0xc93,
        0xd9a, 0x69c, 0x795, 0x49f, 0x596, 0xa96, 0xb9f, 0x895, 0x99c, 0x29a,
        0x393, 0x99, 0x190, 0xf00, 0xe09, 0xd03, 0xc0a, 0x70c, 0x605, 0x50f,
        0x406, 0xb06, 0xa0f, 0x905, 0x80c, 0x30a, 0x203, 0x109, 0x0
    ];

    var triTable2 = [
        [],
        [8, 3, 0],
        [9, 0, 1],
        [8, 3, 1, 8, 1, 9],
        [11, 2, 3],
        [11, 2, 0, 11, 0, 8],
        [11, 2, 3, 0, 1, 9],
        [2, 1, 11, 1, 9, 11, 11, 9, 8],
        [10, 1, 2],
        [8, 3, 0, 1, 2, 10],
        [9, 0, 2, 9, 2, 10],
        [3, 2, 8, 2, 10, 8, 8, 10, 9],
        [10, 1, 3, 10, 3, 11],
        [1, 0, 10, 0, 8, 10, 10, 8, 11],
        [0, 3, 9, 3, 11, 9, 9, 11, 10],
        [8, 10, 9, 8, 11, 10],
        [8, 4, 7],
        [3, 0, 4, 3, 4, 7],
        [1, 9, 0, 8, 4, 7],
        [9, 4, 1, 4, 7, 1, 1, 7, 3],
        [2, 3, 11, 7, 8, 4],
        [7, 11, 4, 11, 2, 4, 4, 2, 0],
        [3, 11, 2, 4, 7, 8, 9, 0, 1],
        [2, 7, 11, 2, 1, 7, 1, 4, 7, 1, 9, 4],
        [10, 1, 2, 8, 4, 7],
        [2, 10, 1, 0, 4, 7, 0, 7, 3],
        [4, 7, 8, 0, 2, 10, 0, 10, 9],
        [2, 7, 3, 2, 9, 7, 7, 9, 4, 2, 10, 9],
        [8, 4, 7, 11, 10, 1, 11, 1, 3],
        [11, 4, 7, 1, 4, 11, 1, 11, 10, 1, 0, 4],
        [3, 8, 0, 7, 11, 4, 11, 9, 4, 11, 10, 9],
        [7, 11, 4, 4, 11, 9, 11, 10, 9],
        [9, 5, 4],
        [3, 0, 8, 4, 9, 5],
        [5, 4, 0, 5, 0, 1],
        [4, 8, 5, 8, 3, 5, 5, 3, 1],
        [11, 2, 3, 9, 5, 4],
        [9, 5, 4, 8, 11, 2, 8, 2, 0],
        [3, 11, 2, 1, 5, 4, 1, 4, 0],
        [8, 5, 4, 2, 5, 8, 2, 8, 11, 2, 1, 5],
        [2, 10, 1, 9, 5, 4],
        [0, 8, 3, 5, 4, 9, 10, 1, 2],
        [10, 5, 2, 5, 4, 2, 2, 4, 0],
        [3, 4, 8, 3, 2, 4, 2, 5, 4, 2, 10, 5],
        [5, 4, 9, 1, 3, 11, 1, 11, 10],
        [0, 9, 1, 4, 8, 5, 8, 10, 5, 8, 11, 10],
        [3, 4, 0, 3, 10, 4, 4, 10, 5, 3, 11, 10],
        [4, 8, 5, 5, 8, 10, 8, 11, 10],
        [9, 5, 7, 9, 7, 8],
        [0, 9, 3, 9, 5, 3, 3, 5, 7],
        [8, 0, 7, 0, 1, 7, 7, 1, 5],
        [1, 7, 3, 1, 5, 7],
        [11, 2, 3, 8, 9, 5, 8, 5, 7],
        [9, 2, 0, 9, 7, 2, 2, 7, 11, 9, 5, 7],
        [0, 3, 8, 2, 1, 11, 1, 7, 11, 1, 5, 7],
        [2, 1, 11, 11, 1, 7, 1, 5, 7],
        [1, 2, 10, 5, 7, 8, 5, 8, 9],
        [9, 1, 0, 10, 5, 2, 5, 3, 2, 5, 7, 3],
        [5, 2, 10, 8, 2, 5, 8, 5, 7, 8, 0, 2],
        [10, 5, 2, 2, 5, 3, 5, 7, 3],
        [3, 9, 1, 3, 8, 9, 7, 11, 10, 7, 10, 5],
        [9, 1, 0, 10, 7, 11, 10, 5, 7],
        [3, 8, 0, 7, 10, 5, 7, 11, 10],
        [11, 5, 7, 11, 10, 5],
        [11, 7, 6],
        [0, 8, 3, 11, 7, 6],
        [9, 0, 1, 11, 7, 6],
        [7, 6, 11, 3, 1, 9, 3, 9, 8],
        [2, 3, 7, 2, 7, 6],
        [8, 7, 0, 7, 6, 0, 0, 6, 2],
        [1, 9, 0, 3, 7, 6, 3, 6, 2],
        [7, 6, 2, 7, 2, 9, 2, 1, 9, 7, 9, 8],
        [1, 2, 10, 6, 11, 7],
        [2, 10, 1, 7, 6, 11, 8, 3, 0],
        [11, 7, 6, 10, 9, 0, 10, 0, 2],
        [7, 6, 11, 3, 2, 8, 8, 2, 10, 8, 10, 9],
        [6, 10, 7, 10, 1, 7, 7, 1, 3],
        [6, 10, 1, 6, 1, 7, 7, 1, 0, 7, 0, 8],
        [9, 0, 3, 6, 9, 3, 6, 10, 9, 6, 3, 7],
        [6, 10, 7, 7, 10, 8, 10, 9, 8],
        [8, 4, 6, 8, 6, 11],
        [11, 3, 6, 3, 0, 6, 6, 0, 4],
        [0, 1, 9, 4, 6, 11, 4, 11, 8],
        [1, 9, 4, 11, 1, 4, 11, 3, 1, 11, 4, 6],
        [3, 8, 2, 8, 4, 2, 2, 4, 6],
        [2, 0, 4, 2, 4, 6],
        [1, 9, 0, 3, 8, 2, 2, 8, 4, 2, 4, 6],
        [9, 4, 1, 1, 4, 2, 4, 6, 2],
        [10, 1, 2, 11, 8, 4, 11, 4, 6],
        [10, 1, 2, 11, 3, 6, 6, 3, 0, 6, 0, 4],
        [0, 2, 10, 0, 10, 9, 4, 11, 8, 4, 6, 11],
        [2, 11, 3, 6, 9, 4, 6, 10, 9],
        [8, 4, 6, 8, 6, 1, 6, 10, 1, 8, 1, 3],
        [1, 0, 10, 10, 0, 6, 0, 4, 6],
        [8, 0, 3, 9, 6, 10, 9, 4, 6],
        [10, 4, 6, 10, 9, 4],
        [9, 5, 4, 7, 6, 11],
        [4, 9, 5, 3, 0, 8, 11, 7, 6],
        [6, 11, 7, 4, 0, 1, 4, 1, 5],
        [6, 11, 7, 4, 8, 5, 5, 8, 3, 5, 3, 1],
        [4, 9, 5, 6, 2, 3, 6, 3, 7],
        [9, 5, 4, 8, 7, 0, 0, 7, 6, 0, 6, 2],
        [4, 0, 1, 4, 1, 5, 6, 3, 7, 6, 2, 3],
        [7, 4, 8, 5, 2, 1, 5, 6, 2],
        [6, 11, 7, 1, 2, 10, 9, 5, 4],
        [11, 7, 6, 8, 3, 0, 1, 2, 10, 9, 5, 4],
        [11, 7, 6, 10, 5, 2, 2, 5, 4, 2, 4, 0],
        [7, 4, 8, 2, 11, 3, 10, 5, 6],
        [4, 9, 5, 6, 10, 7, 7, 10, 1, 7, 1, 3],
        [5, 6, 10, 0, 9, 1, 8, 7, 4],
        [5, 6, 10, 7, 0, 3, 7, 4, 0],
        [10, 5, 6, 4, 8, 7],
        [5, 6, 9, 6, 11, 9, 9, 11, 8],
        [0, 9, 5, 0, 5, 3, 3, 5, 6, 3, 6, 11],
        [0, 1, 5, 0, 5, 11, 5, 6, 11, 0, 11, 8],
        [11, 3, 6, 6, 3, 5, 3, 1, 5],
        [9, 5, 6, 3, 9, 6, 3, 8, 9, 3, 6, 2],
        [5, 6, 9, 9, 6, 0, 6, 2, 0],
        [0, 3, 8, 2, 5, 6, 2, 1, 5],
        [1, 6, 2, 1, 5, 6],
        [1, 2, 10, 5, 6, 9, 9, 6, 11, 9, 11, 8],
        [1, 0, 9, 6, 10, 5, 11, 3, 2],
        [6, 10, 5, 2, 8, 0, 2, 11, 8],
        [3, 2, 11, 10, 5, 6],
        [10, 5, 6, 9, 3, 8, 9, 1, 3],
        [0, 9, 1, 5, 6, 10],
        [8, 0, 3, 10, 5, 6],
        [10, 5, 6],
        [10, 6, 5],
        [8, 3, 0, 10, 6, 5],
        [0, 1, 9, 5, 10, 6],
        [10, 6, 5, 9, 8, 3, 9, 3, 1],
        [3, 11, 2, 10, 6, 5],
        [6, 5, 10, 2, 0, 8, 2, 8, 11],
        [1, 9, 0, 6, 5, 10, 11, 2, 3],
        [1, 10, 2, 5, 9, 6, 9, 11, 6, 9, 8, 11],
        [1, 2, 6, 1, 6, 5],
        [0, 8, 3, 2, 6, 5, 2, 5, 1],
        [5, 9, 6, 9, 0, 6, 6, 0, 2],
        [9, 6, 5, 3, 6, 9, 3, 9, 8, 3, 2, 6],
        [11, 6, 3, 6, 5, 3, 3, 5, 1],
        [0, 5, 1, 0, 11, 5, 5, 11, 6, 0, 8, 11],
        [0, 5, 9, 0, 3, 5, 3, 6, 5, 3, 11, 6],
        [5, 9, 6, 6, 9, 11, 9, 8, 11],
        [10, 6, 5, 4, 7, 8],
        [5, 10, 6, 7, 3, 0, 7, 0, 4],
        [5, 10, 6, 0, 1, 9, 8, 4, 7],
        [4, 5, 9, 6, 7, 10, 7, 1, 10, 7, 3, 1],
        [7, 8, 4, 2, 3, 11, 10, 6, 5],
        [11, 6, 7, 10, 2, 5, 2, 4, 5, 2, 0, 4],
        [11, 6, 7, 8, 0, 3, 1, 10, 2, 9, 4, 5],
        [6, 7, 11, 1, 10, 2, 9, 4, 5],
        [7, 8, 4, 5, 1, 2, 5, 2, 6],
        [4, 1, 0, 4, 5, 1, 6, 7, 3, 6, 3, 2],
        [9, 4, 5, 8, 0, 7, 0, 6, 7, 0, 2, 6],
        [4, 5, 9, 6, 3, 2, 6, 7, 3],
        [6, 7, 11, 4, 5, 8, 5, 3, 8, 5, 1, 3],
        [6, 7, 11, 4, 1, 0, 4, 5, 1],
        [4, 5, 9, 3, 8, 0, 11, 6, 7],
        [9, 4, 5, 7, 11, 6],
        [10, 6, 4, 10, 4, 9],
        [8, 3, 0, 9, 10, 6, 9, 6, 4],
        [1, 10, 0, 10, 6, 0, 0, 6, 4],
        [8, 6, 4, 8, 1, 6, 6, 1, 10, 8, 3, 1],
        [2, 3, 11, 6, 4, 9, 6, 9, 10],
        [0, 10, 2, 0, 9, 10, 4, 8, 11, 4, 11, 6],
        [10, 2, 1, 11, 6, 3, 6, 0, 3, 6, 4, 0],
        [10, 2, 1, 11, 4, 8, 11, 6, 4],
        [9, 1, 4, 1, 2, 4, 4, 2, 6],
        [1, 0, 9, 3, 2, 8, 2, 4, 8, 2, 6, 4],
        [2, 4, 0, 2, 6, 4],
        [3, 2, 8, 8, 2, 4, 2, 6, 4],
        [1, 4, 9, 11, 4, 1, 11, 1, 3, 11, 6, 4],
        [0, 9, 1, 4, 11, 6, 4, 8, 11],
        [11, 6, 3, 3, 6, 0, 6, 4, 0],
        [8, 6, 4, 8, 11, 6],
        [6, 7, 10, 7, 8, 10, 10, 8, 9],
        [9, 3, 0, 6, 3, 9, 6, 9, 10, 6, 7, 3],
        [6, 1, 10, 6, 7, 1, 7, 0, 1, 7, 8, 0],
        [6, 7, 10, 10, 7, 1, 7, 3, 1],
        [7, 11, 6, 3, 8, 2, 8, 10, 2, 8, 9, 10],
        [11, 6, 7, 10, 0, 9, 10, 2, 0],
        [2, 1, 10, 7, 11, 6, 8, 0, 3],
        [1, 10, 2, 6, 7, 11],
        [7, 2, 6, 7, 9, 2, 2, 9, 1, 7, 8, 9],
        [1, 0, 9, 3, 6, 7, 3, 2, 6],
        [8, 0, 7, 7, 0, 6, 0, 2, 6],
        [2, 7, 3, 2, 6, 7],
        [7, 11, 6, 3, 9, 1, 3, 8, 9],
        [9, 1, 0, 11, 6, 7],
        [0, 3, 8, 11, 6, 7],
        [11, 6, 7],
        [11, 7, 5, 11, 5, 10],
        [3, 0, 8, 7, 5, 10, 7, 10, 11],
        [9, 0, 1, 10, 11, 7, 10, 7, 5],
        [3, 1, 9, 3, 9, 8, 7, 10, 11, 7, 5, 10],
        [10, 2, 5, 2, 3, 5, 5, 3, 7],
        [5, 10, 2, 8, 5, 2, 8, 7, 5, 8, 2, 0],
        [9, 0, 1, 10, 2, 5, 5, 2, 3, 5, 3, 7],
        [1, 10, 2, 5, 8, 7, 5, 9, 8],
        [2, 11, 1, 11, 7, 1, 1, 7, 5],
        [0, 8, 3, 2, 11, 1, 1, 11, 7, 1, 7, 5],
        [9, 0, 2, 9, 2, 7, 2, 11, 7, 9, 7, 5],
        [11, 3, 2, 8, 5, 9, 8, 7, 5],
        [1, 3, 7, 1, 7, 5],
        [8, 7, 0, 0, 7, 1, 7, 5, 1],
        [0, 3, 9, 9, 3, 5, 3, 7, 5],
        [9, 7, 5, 9, 8, 7],
        [4, 5, 8, 5, 10, 8, 8, 10, 11],
        [3, 0, 4, 3, 4, 10, 4, 5, 10, 3, 10, 11],
        [0, 1, 9, 4, 5, 8, 8, 5, 10, 8, 10, 11],
        [5, 9, 4, 1, 11, 3, 1, 10, 11],
        [3, 8, 4, 3, 4, 2, 2, 4, 5, 2, 5, 10],
        [10, 2, 5, 5, 2, 4, 2, 0, 4],
        [0, 3, 8, 5, 9, 4, 10, 2, 1],
        [2, 1, 10, 9, 4, 5],
        [8, 4, 5, 2, 8, 5, 2, 11, 8, 2, 5, 1],
        [3, 2, 11, 1, 4, 5, 1, 0, 4],
        [9, 4, 5, 8, 2, 11, 8, 0, 2],
        [11, 3, 2, 9, 4, 5],
        [4, 5, 8, 8, 5, 3, 5, 1, 3],
        [5, 0, 4, 5, 1, 0],
        [3, 8, 0, 4, 5, 9],
        [9, 4, 5],
        [7, 4, 11, 4, 9, 11, 11, 9, 10],
        [3, 0, 8, 7, 4, 11, 11, 4, 9, 11, 9, 10],
        [11, 7, 4, 1, 11, 4, 1, 10, 11, 1, 4, 0],
        [8, 7, 4, 11, 1, 10, 11, 3, 1],
        [2, 3, 7, 2, 7, 9, 7, 4, 9, 2, 9, 10],
        [4, 8, 7, 0, 10, 2, 0, 9, 10],
        [2, 1, 10, 0, 7, 4, 0, 3, 7],
        [10, 2, 1, 8, 7, 4],
        [2, 11, 7, 2, 7, 1, 1, 7, 4, 1, 4, 9],
        [3, 2, 11, 4, 8, 7, 9, 1, 0],
        [7, 4, 11, 11, 4, 2, 4, 0, 2],
        [2, 11, 3, 7, 4, 8],
        [9, 1, 4, 4, 1, 7, 1, 3, 7],
        [1, 0, 9, 8, 7, 4],
        [3, 4, 0, 3, 7, 4],
        [8, 7, 4],
        [8, 9, 10, 8, 10, 11],
        [0, 9, 3, 3, 9, 11, 9, 10, 11],
        [1, 10, 0, 0, 10, 8, 10, 11, 8],
        [10, 3, 1, 10, 11, 3],
        [3, 8, 2, 2, 8, 10, 8, 9, 10],
        [9, 2, 0, 9, 10, 2],
        [8, 0, 3, 1, 10, 2],
        [10, 2, 1],
        [2, 11, 1, 1, 11, 9, 11, 8, 9],
        [11, 3, 2, 0, 9, 1],
        [11, 0, 2, 11, 8, 0],
        [11, 3, 2],
        [8, 1, 3, 8, 9, 1],
        [9, 1, 0],
        [8, 0, 3],
        []
    ];

    return my;
})();



/*  ProteinSurface.js by biochem_fan

Ported and modified for Javascript based on EDTSurf,
  whose license is as follows.

Permission to use, copy, modify, and distribute this program for any
purpose, with or without fee, is hereby granted, provided that this
copyright notice and the reference information appear in all copies or
substantial portions of the Software. It is provided "as is" without
express or implied warranty. 

Reference:
http://zhanglab.ccmb.med.umich.edu/EDTSurf/
D. Xu, Y. Zhang (2009) Generating Triangulated Macromolecular Surfaces
by Euclidean Distance Transform. PLoS ONE 4(12): e8140.

=======

TODO: Improved performance on Firefox
      Reduce memory consumption
      Refactor!
 */


// dkoes
// Surface calculations.  This must be safe to use within a web worker.
if (typeof console === 'undefined') {
    // this should only be true inside of a webworker
    console = {
        log: function() {}
    };
}

$3Dmol.ProteinSurface = function() {

    // constants for vpbits bitmasks
    /** @const */
    var INOUT = 1;
    /** @const */
    var ISDONE = 2;
    /** @const */
    var ISBOUND = 4;

    var ptranx = 0,
        ptrany = 0,
        ptranz = 0;
    var probeRadius = 1.4;
    var defaultScaleFactor = 2;
    var scaleFactor = defaultScaleFactor; // 2 is .5A grid; if this is made user configurable,
    // also have to adjust offset used to find non-shown
    // atoms
    var pHeight = 0,
        pWidth = 0,
        pLength = 0;
    var cutRadius = 0;
    var vpBits = null; // uint8 array of bitmasks
    var vpDistance = null; // floatarray of _squared_ distances
    var vpAtomID = null; // intarray
    var vertnumber = 0,
        facenumber = 0;
    var pminx = 0,
        pminy = 0,
        pminz = 0,
        pmaxx = 0,
        pmaxy = 0,
        pmaxz = 0;

    var vdwRadii = {
        "H": 1.2,
        "Li": 1.82,
        "Na": 2.27,
        "K": 2.75,
        "C": 1.7,
        "N": 1.55,
        "O": 1.52,
        "F": 1.47,
        "P": 1.80,
        "S": 1.80,
        "CL": 1.75,
        "BR": 1.85,
        "SE": 1.90,
        "ZN": 1.39,
        "CU": 1.4,
        "NI": 1.63,
        "X": 2
    };

    /** @param {AtomSpec} atom */
    var getVDWIndex = function(atom) {
        if (!atom.elem || typeof(vdwRadii[atom.elem]) == "undefined") {
            return "X";
        }
        return atom.elem;
    };

    var depty = {},
        widxz = {};
    var faces, verts;
    var nb = [new Int32Array([1, 0, 0]), new Int32Array([-1, 0, 0]),
        new Int32Array([0, 1, 0]), new Int32Array([0, -1, 0]),
        new Int32Array([0, 0, 1]),
        new Int32Array([0, 0, -1]),
        new Int32Array([1, 1, 0]),
        new Int32Array([1, -1, 0]),
        new Int32Array([-1, 1, 0]),
        new Int32Array([-1, -1, 0]),
        new Int32Array([1, 0, 1]),
        new Int32Array([1, 0, -1]),
        new Int32Array([-1, 0, 1]),
        new Int32Array([-1, 0, -1]),
        new Int32Array([0, 1, 1]),
        new Int32Array([0, 1, -1]),
        new Int32Array([0, -1, 1]),
        new Int32Array([0, -1, -1]),
        new Int32Array([1, 1, 1]),
        new Int32Array([1, 1, -1]),
        new Int32Array([1, -1, 1]),
        new Int32Array([-1, 1, 1]),
        new Int32Array([1, -1, -1]),
        new Int32Array([-1, -1, 1]),
        new Int32Array([-1, 1, -1]),
        new Int32Array([-1, -1, -1])
    ];

    var origextent;

    var inOrigExtent = function(x, y, z) {
        if (x < origextent[0][0] || x > origextent[1][0])
            return false;
        if (y < origextent[0][1] || y > origextent[1][1])
            return false;
        if (z < origextent[0][2] || z > origextent[1][2])
            return false;
        return true;
    };

    this.getFacesAndVertices = function(atomlist) {
        var atomsToShow = {};
        var i, il;
        for (i = 0, il = atomlist.length; i < il; i++)
            atomsToShow[atomlist[i]] = true;
        var vertices = verts;
        for (i = 0, il = vertices.length; i < il; i++) {
            vertices[i].x = vertices[i].x / scaleFactor - ptranx;
            vertices[i].y = vertices[i].y / scaleFactor - ptrany;
            vertices[i].z = vertices[i].z / scaleFactor - ptranz;
        }

        var finalfaces = [];
        for (i = 0, il = faces.length; i < il; i += 3) {
            //var f = faces[i];
            var fa = faces[i],
                fb = faces[i + 1],
                fc = faces[i + 2];
            var a = vertices[fa]['atomid'],
                b = vertices[fb]['atomid'],
                c = vertices[fc]['atomid'];

            // must be a unique face for each atom
            var which = a;
            if (b < which)
                which = b;
            if (c < which)
                which = c;
            if (!atomsToShow[which]) {
                continue;
            }
            var av = vertices[faces[i]];
            var bv = vertices[faces[i + 1]];
            var cv = vertices[faces[i + 2]];

            if (fa !== fb && fb !== fc && fa !== fc) {
                finalfaces.push(fa);
                finalfaces.push(fb);
                finalfaces.push(fc);
            }

        }

        //try to help the garbage collector
        vpBits = null; // uint8 array of bitmasks
        vpDistance = null; // floatarray
        vpAtomID = null; // intarray

        return {
            'vertices': vertices,
            'faces': finalfaces
        };
    };


    this.initparm = function(extent, btype, volume) {
        if (volume > 1000000) //heuristical decrease resolution to avoid large memory consumption
            scaleFactor = defaultScaleFactor / 2;

        var margin = (1 / scaleFactor) * 5.5; // need margin to avoid
        // boundary/round off effects
        origextent = extent;
        pminx = extent[0][0];
        pmaxx = extent[1][0];
        pminy = extent[0][1];
        pmaxy = extent[1][1];
        pminz = extent[0][2];
        pmaxz = extent[1][2];

        if (!btype) {
            pminx -= margin;
            pminy -= margin;
            pminz -= margin;
            pmaxx += margin;
            pmaxy += margin;
            pmaxz += margin;
        } else {
            pminx -= probeRadius + margin;
            pminy -= probeRadius + margin;
            pminz -= probeRadius + margin;
            pmaxx += probeRadius + margin;
            pmaxy += probeRadius + margin;
            pmaxz += probeRadius + margin;
        }

        pminx = Math.floor(pminx * scaleFactor) / scaleFactor;
        pminy = Math.floor(pminy * scaleFactor) / scaleFactor;
        pminz = Math.floor(pminz * scaleFactor) / scaleFactor;
        pmaxx = Math.ceil(pmaxx * scaleFactor) / scaleFactor;
        pmaxy = Math.ceil(pmaxy * scaleFactor) / scaleFactor;
        pmaxz = Math.ceil(pmaxz * scaleFactor) / scaleFactor;

        ptranx = -pminx;
        ptrany = -pminy;
        ptranz = -pminz;

        pLength = Math.ceil(scaleFactor * (pmaxx - pminx)) + 1;
        pWidth = Math.ceil(scaleFactor * (pmaxy - pminy)) + 1;
        pHeight = Math.ceil(scaleFactor * (pmaxz - pminz)) + 1;

        this.boundingatom(btype);
        cutRadius = probeRadius * scaleFactor;

        vpBits = new Uint8Array(pLength * pWidth * pHeight);
        vpDistance = new Float64Array(pLength * pWidth * pHeight); // float 32
        // doesn't
        // play
        // nicely
        // with
        // native
        // floats
        vpAtomID = new Int32Array(pLength * pWidth * pHeight);
        console.log("Box size: ", pLength, pWidth, pHeight, vpBits.length);
    };

    this.boundingatom = function(btype) {
        var tradius = [];
        var txz, tdept, sradius, idx;
        flagradius = btype;

        for (var i in vdwRadii) {
            if (!vdwRadii.hasOwnProperty(i))
                continue;
            var r = vdwRadii[i];
            if (!btype)
                tradius[i] = r * scaleFactor + 0.5;
            else
                tradius[i] = (r + probeRadius) * scaleFactor + 0.5;

            sradius = tradius[i] * tradius[i];
            widxz[i] = Math.floor(tradius[i]) + 1;
            depty[i] = new Int32Array(widxz[i] * widxz[i]);
            indx = 0;
            for (j = 0; j < widxz[i]; j++) {
                for (k = 0; k < widxz[i]; k++) {
                    txz = j * j + k * k;
                    if (txz > sradius)
                        depty[i][indx] = -1; // outside
                    else {
                        tdept = Math.sqrt(sradius - txz);
                        depty[i][indx] = Math.floor(tdept);
                    }
                    indx++;
                }
            }
        }
    };

    this.fillvoxels = function(atoms, atomlist) { // (int seqinit,int
        // seqterm,bool
        // atomtype,atom*
        // proseq,bool bcolor)
        var i, il;
        for (i = 0, il = vpBits.length; i < il; i++) {
            vpBits[i] = 0;
            vpDistance[i] = -1.0;
            vpAtomID[i] = -1;
        }

        for (i in atomlist) {
            var atom = atoms[atomlist[i]];
            if (atom === undefined)
                continue;
            this.fillAtom(atom, atoms);
        }

        for (i = 0, il = vpBits.length; i < il; i++)
            if (vpBits[i] & INOUT)
                vpBits[i] |= ISDONE;

    };


    this.fillAtom = function(atom, atoms) {
        var cx, cy, cz, ox, oy, oz, mi, mj, mk, i, j, k, si, sj, sk;
        var ii, jj, kk, n;
        cx = Math.floor(0.5 + scaleFactor * (atom.x + ptranx));
        cy = Math.floor(0.5 + scaleFactor * (atom.y + ptrany));
        cz = Math.floor(0.5 + scaleFactor * (atom.z + ptranz));

        var at = getVDWIndex(atom);
        var nind = 0;
        var cnt = 0;
        var pWH = pWidth * pHeight;

        for (i = 0, n = widxz[at]; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (depty[at][nind] != -1) {
                    for (ii = -1; ii < 2; ii++) {
                        for (jj = -1; jj < 2; jj++) {
                            for (kk = -1; kk < 2; kk++) {
                                if (ii !== 0 && jj !== 0 && kk !== 0) {
                                    mi = ii * i;
                                    mk = kk * j;
                                    for (k = 0; k <= depty[at][nind]; k++) {
                                        mj = k * jj;
                                        si = cx + mi;
                                        sj = cy + mj;
                                        sk = cz + mk;
                                        if (si < 0 || sj < 0 ||
                                            sk < 0 ||
                                            si >= pLength ||
                                            sj >= pWidth ||
                                            sk >= pHeight)
                                            continue;
                                        var index = si * pWH + sj * pHeight + sk;

                                        if (!(vpBits[index] & INOUT)) {
                                            vpBits[index] |= INOUT;
                                            vpAtomID[index] = atom.serial;
                                        } else {
                                            var atom2 = atoms[vpAtomID[index]];
                                            ox = Math.floor(0.5 + scaleFactor *
                                                (atom2.x + ptranx));
                                            oy = Math.floor(0.5 + scaleFactor *
                                                (atom2.y + ptrany));
                                            oz = Math.floor(0.5 + scaleFactor *
                                                (atom2.z + ptranz));
                                            if (mi * mi + mj * mj + mk * mk < ox *
                                                ox + oy * oy + oz * oz)
                                                vpAtomID[index] = atom.serial;
                                        }

                                    } // k
                                } // if
                            } // kk
                        } // jj
                    } // ii
                } // if
                nind++;
            } // j
        } // i
    };

    this.fillvoxelswaals = function(atoms, atomlist) {
        var i, il;
        for (i = 0, il = vpBits.length; i < il; i++)
            vpBits[i] &= ~ISDONE; // not isdone

        for (i in atomlist) {
            var atom = atoms[atomlist[i]];
            if (atom === undefined)
                continue;

            this.fillAtomWaals(atom, atoms);
        }
    };

    this.fillAtomWaals = function(atom, atoms) {
        var cx, cy, cz, ox, oy, oz, nind = 0;
        var mi, mj, mk, si, sj, sk, i, j, k, ii, jj, kk, n;
        cx = Math.floor(0.5 + scaleFactor * (atom.x + ptranx));
        cy = Math.floor(0.5 + scaleFactor * (atom.y + ptrany));
        cz = Math.floor(0.5 + scaleFactor * (atom.z + ptranz));

        var at = getVDWIndex(atom);
        var pWH = pWidth * pHeight;
        for (i = 0, n = widxz[at]; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (depty[at][nind] != -1) {
                    for (ii = -1; ii < 2; ii++) {
                        for (jj = -1; jj < 2; jj++) {
                            for (kk = -1; kk < 2; kk++) {
                                if (ii !== 0 && jj !== 0 && kk !== 0) {
                                    mi = ii * i;
                                    mk = kk * j;
                                    for (k = 0; k <= depty[at][nind]; k++) {
                                        mj = k * jj;
                                        si = cx + mi;
                                        sj = cy + mj;
                                        sk = cz + mk;
                                        if (si < 0 || sj < 0 ||
                                            sk < 0 ||
                                            si >= pLength ||
                                            sj >= pWidth ||
                                            sk >= pHeight)
                                            continue;
                                        var index = si * pWH + sj * pHeight + sk;
                                        if (!(vpBits[index] & ISDONE)) {
                                            vpBits[index] |= ISDONE;
                                            vpAtomID[index] = atom.serial;
                                        } else {
                                            var atom2 = atoms[vpAtomID[index]];
                                            ox = Math.floor(0.5 + scaleFactor * (atom2.x + ptranx));
                                            oy = Math.floor(0.5 + scaleFactor * (atom2.y + ptrany));
                                            oz = Math.floor(0.5 + scaleFactor * (atom2.z + ptranz));
                                            if (mi * mi + mj * mj + mk * mk < ox *
                                                ox + oy * oy + oz * oz)
                                                vpAtomID[index] = atom.serial;
                                        }

                                    } // k
                                } // if
                            } // kk
                        } // jj
                    } // ii
                } // if
                nind++;
            } // j
        } // i
    };

    this.buildboundary = function() {
        var pWH = pWidth * pHeight;
        for (i = 0; i < pLength; i++) {
            for (j = 0; j < pHeight; j++) {
                for (k = 0; k < pWidth; k++) {
                    var index = i * pWH + k * pHeight + j;
                    if (vpBits[index] & INOUT) {
                        var flagbound = false;
                        var ii = 0;
                        while (ii < 26) {
                            var ti = i + nb[ii][0],
                                tj = j + nb[ii][2],
                                tk = k +
                                nb[ii][1];
                            if (ti > -1 &&
                                ti < pLength &&
                                tk > -1 &&
                                tk < pWidth &&
                                tj > -1 &&
                                tj < pHeight &&
                                !(vpBits[ti * pWH + tk * pHeight + tj] & INOUT)) {
                                vpBits[index] |= ISBOUND;
                                break;
                            } else
                                ii++;
                        }
                    }
                }
            }
        }
    };

    // a little class for 3d array, should really generalize this and
    // use throughout...
    var PointGrid = function(length, width, height) {
        // the standard says this is zero initialized
        var data = new Int32Array(length * width * height * 3);

        // set position x,y,z to pt, which has ix,iy,and iz
        this.set = function(x, y, z, pt) {
            var index = ((((x * width) + y) * height) + z) * 3;
            data[index] = pt.ix;
            data[index + 1] = pt.iy;
            data[index + 2] = pt.iz;
        };

        // return point at x,y,z
        this.get = function(x, y, z) {
            var index = ((((x * width) + y) * height) + z) * 3;
            return {
                ix: data[index],
                iy: data[index + 1],
                iz: data[index + 2]
            };
        };
    };

    this.fastdistancemap = function() {
        var eliminate = 0;
        var certificate;
        var i, j, k, n;

        var boundPoint = new PointGrid(pLength, pWidth, pHeight);
        var pWH = pWidth * pHeight;
        var cutRSq = cutRadius * cutRadius;

        var inarray = [];
        var outarray = [];

        var index;

        for (i = 0; i < pLength; i++) {
            for (j = 0; j < pWidth; j++) {
                for (k = 0; k < pHeight; k++) {
                    index = i * pWH + j * pHeight + k;
                    vpBits[index] &= ~ISDONE; // isdone = false
                    if (vpBits[index] & INOUT) {
                        if (vpBits[index] & ISBOUND) {
                            var triple = {
                                ix: i,
                                iy: j,
                                iz: k
                            };
                            boundPoint.set(i, j, k, triple);
                            inarray.push(triple);
                            vpDistance[index] = 0;
                            vpBits[index] |= ISDONE;
                            vpBits[index] &= ~ISBOUND;
                        }
                    }
                }
            }
        }

        do {
            outarray = this.fastoneshell(inarray, boundPoint);
            inarray = [];
            for (i = 0, n = outarray.length; i < n; i++) {
                index = pWH * outarray[i].ix + pHeight *
                    outarray[i].iy + outarray[i].iz;
                vpBits[index] &= ~ISBOUND;
                if (vpDistance[index] <= 1.0404 * cutRSq) {
                    inarray.push({
                        ix: outarray[i].ix,
                        iy: outarray[i].iy,
                        iz: outarray[i].iz
                    });
                }
            }
        } while (inarray.length !== 0);

        inarray = [];
        outarray = [];
        boundPoint = null;

        var cutsf = scaleFactor - 0.5;
        if (cutsf < 0)
            cutsf = 0;
        var cutoff = cutRSq - 0.50 / (0.1 + cutsf);
        for (i = 0; i < pLength; i++) {
            for (j = 0; j < pWidth; j++) {
                for (k = 0; k < pHeight; k++) {
                    index = i * pWH + j * pHeight + k;
                    vpBits[index] &= ~ISBOUND;
                    // ses solid
                    if (vpBits[index] & INOUT) {
                        if (!(vpBits[index] & ISDONE) ||
                            ((vpBits[index] & ISDONE) && vpDistance[index] >= cutoff)) {
                            vpBits[index] |= ISBOUND;
                        }
                    }
                }
            }
        }

    };

    this.fastoneshell = function(inarray, boundPoint) { // (int* innum,int
        // *allocout,voxel2
        // ***boundPoint, int*
        // outnum, int *elimi)
        var tx, ty, tz;
        var dx, dy, dz;
        var i, j, n;
        var square;
        var bp, index;
        var outarray = [];
        if (inarray.length === 0)
            return outarray;

        tnv = {
            ix: -1,
            iy: -1,
            iz: -1
        };
        var pWH = pWidth * pHeight;
        for (i = 0, n = inarray.length; i < n; i++) {
            tx = inarray[i].ix;
            ty = inarray[i].iy;
            tz = inarray[i].iz;
            bp = boundPoint.get(tx, ty, tz);

            for (j = 0; j < 6; j++) {
                tnv.ix = tx + nb[j][0];
                tnv.iy = ty + nb[j][1];
                tnv.iz = tz + nb[j][2];

                if (tnv.ix < pLength && tnv.ix > -1 && tnv.iy < pWidth &&
                    tnv.iy > -1 && tnv.iz < pHeight && tnv.iz > -1) {
                    index = tnv.ix * pWH + pHeight * tnv.iy + tnv.iz;

                    if ((vpBits[index] & INOUT) && !(vpBits[index] & ISDONE)) {

                        boundPoint.set(tnv.ix, tnv.iy, tz + nb[j][2], bp);
                        dx = tnv.ix - bp.ix;
                        dy = tnv.iy - bp.iy;
                        dz = tnv.iz - bp.iz;
                        square = dx * dx + dy * dy + dz * dz;
                        vpDistance[index] = square;
                        vpBits[index] |= ISDONE;
                        vpBits[index] |= ISBOUND;

                        outarray.push({
                            ix: tnv.ix,
                            iy: tnv.iy,
                            iz: tnv.iz
                        });
                    } else if ((vpBits[index] & INOUT) && (vpBits[index] & ISDONE)) {

                        dx = tnv.ix - bp.ix;
                        dy = tnv.iy - bp.iy;
                        dz = tnv.iz - bp.iz;
                        square = dx * dx + dy * dy + dz * dz;
                        if (square < vpDistance[index]) {
                            boundPoint.set(tnv.ix, tnv.iy, tnv.iz, bp);

                            vpDistance[index] = square;
                            if (!(vpBits[index] & ISBOUND)) {
                                vpBits[index] |= ISBOUND;
                                outarray.push({
                                    ix: tnv.ix,
                                    iy: tnv.iy,
                                    iz: tnv.iz
                                });
                            }
                        }
                    }
                }
            }
        }

        // console.log("part1", positout);

        for (i = 0, n = inarray.length; i < n; i++) {
            tx = inarray[i].ix;
            ty = inarray[i].iy;
            tz = inarray[i].iz;
            bp = boundPoint.get(tx, ty, tz);

            for (j = 6; j < 18; j++) {
                tnv.ix = tx + nb[j][0];
                tnv.iy = ty + nb[j][1];
                tnv.iz = tz + nb[j][2];

                if (tnv.ix < pLength && tnv.ix > -1 && tnv.iy < pWidth &&
                    tnv.iy > -1 && tnv.iz < pHeight && tnv.iz > -1) {
                    index = tnv.ix * pWH + pHeight * tnv.iy + tnv.iz;

                    if ((vpBits[index] & INOUT) && !(vpBits[index] & ISDONE)) {
                        boundPoint.set(tnv.ix, tnv.iy, tz + nb[j][2], bp);

                        dx = tnv.ix - bp.ix;
                        dy = tnv.iy - bp.iy;
                        dz = tnv.iz - bp.iz;
                        square = dx * dx + dy * dy + dz * dz;
                        vpDistance[index] = square;
                        vpBits[index] |= ISDONE;
                        vpBits[index] |= ISBOUND;

                        outarray.push({
                            ix: tnv.ix,
                            iy: tnv.iy,
                            iz: tnv.iz
                        });
                    } else if ((vpBits[index] & INOUT) && (vpBits[index] & ISDONE)) {
                        dx = tnv.ix - bp.ix;
                        dy = tnv.iy - bp.iy;
                        dz = tnv.iz - bp.iz;
                        square = dx * dx + dy * dy + dz * dz;
                        if (square < vpDistance[index]) {
                            boundPoint.set(tnv.ix, tnv.iy, tnv.iz, bp);
                            vpDistance[index] = square;
                            if (!(vpBits[index] & ISBOUND)) {
                                vpBits[index] |= ISBOUND;
                                outarray.push({
                                    ix: tnv.ix,
                                    iy: tnv.iy,
                                    iz: tnv.iz
                                });
                            }
                        }
                    }
                }
            }
        }

        // console.log("part2", positout);

        for (i = 0, n = inarray.length; i < n; i++) {
            tx = inarray[i].ix;
            ty = inarray[i].iy;
            tz = inarray[i].iz;
            bp = boundPoint.get(tx, ty, tz);

            for (j = 18; j < 26; j++) {
                tnv.ix = tx + nb[j][0];
                tnv.iy = ty + nb[j][1];
                tnv.iz = tz + nb[j][2];

                if (tnv.ix < pLength && tnv.ix > -1 && tnv.iy < pWidth &&
                    tnv.iy > -1 && tnv.iz < pHeight && tnv.iz > -1) {
                    index = tnv.ix * pWH + pHeight * tnv.iy + tnv.iz;

                    if ((vpBits[index] & INOUT) && !(vpBits[index] & ISDONE)) {
                        boundPoint.set(tnv.ix, tnv.iy, tz + nb[j][2], bp);

                        dx = tnv.ix - bp.ix;
                        dy = tnv.iy - bp.iy;
                        dz = tnv.iz - bp.iz;
                        square = dx * dx + dy * dy + dz * dz;
                        vpDistance[index] = square;
                        vpBits[index] |= ISDONE;
                        vpBits[index] |= ISBOUND;

                        outarray.push({
                            ix: tnv.ix,
                            iy: tnv.iy,
                            iz: tnv.iz
                        });
                    } else if ((vpBits[index] & INOUT) && (vpBits[index] & ISDONE)) {
                        dx = tnv.ix - bp.ix;
                        dy = tnv.iy - bp.iy;
                        dz = tnv.iz - bp.iz;
                        square = dx * dx + dy * dy + dz * dz;
                        if (square < vpDistance[index]) {
                            boundPoint.set(tnv.ix, tnv.iy, tnv.iz, bp);

                            vpDistance[index] = square;
                            if (!(vpBits[index] & ISBOUND)) {
                                vpBits[index] |= ISBOUND;
                                outarray.push({
                                    ix: tnv.ix,
                                    iy: tnv.iy,
                                    iz: tnv.iz
                                });
                            }
                        }
                    }
                }
            }
        }

        // console.log("part3", positout);
        return outarray;
    };

    this.marchingcubeinit = function(stype) {
        for (var i = 0, lim = vpBits.length; i < lim; i++) {
            if (stype == 1) { // vdw
                vpBits[i] &= ~ISBOUND;
            } else if (stype == 4) { // ses
                vpBits[i] &= ~ISDONE;
                if (vpBits[i] & ISBOUND)
                    vpBits[i] |= ISDONE;
                vpBits[i] &= ~ISBOUND;
            } else if (stype == 2) { // after vdw
                if ((vpBits[i] & ISBOUND) && (vpBits[i] & ISDONE))
                    vpBits[i] &= ~ISBOUND;
                else if ((vpBits[i] & ISBOUND) && !(vpBits[i] & ISDONE))
                    vpBits[i] |= ISDONE;
            } else if (stype == 3) { // sas
                vpBits[i] &= ~ISBOUND;
            }
        }
    };

    // this code allows me to empirically prune the marching cubes code tables
    // to more efficiently handle discrete data
    var counter = function() {
        var data = Array(256);
        for (var i = 0; i < 256; i++)
            data[i] = [];

        this.incrementUsed = function(i, j) {
            if (typeof data[i][j] === 'undefined')
                data[i][j] = {
                    used: 0,
                    unused: 0
                };
            data[i][j].used++;
        };

        this.incrementUnused = function(i, j) {
            if (typeof data[i][j] === 'undefined')
                data[i][j] = {
                    used: 0,
                    unused: 0
                };
            data[i][j].unused++;

        };

        var redoTable = function(triTable) {
            var str = "[";
            for (var i = 0; i < triTable.length; i++) {
                var code = 0;
                var table = triTable[i];
                for (var j = 0; j < table.length; j++) {
                    code |= (1 << (table[j]));
                }
                str += "0x" + code.toString(16) + ", ";
            }
            str += "]";
            console.log(str);
        };

        this.print = function() {

            var table = MarchingCube.triTable;
            var str;
            var newtable = [];
            for (var i = 0; i < table.length; i++) {
                var newarr = [];
                for (var j = 0; j < table[i].length; j += 3) {
                    var k = j / 3;
                    if (typeof data[i][k] === 'undefined' || !data[i][k].unused) {
                        newarr.push(table[i][j]);
                        newarr.push(table[i][j + 1]);
                        newarr.push(table[i][j + 2]);
                    }
                    if (typeof data[i][k] === 'undefined')
                        console.log("undef " + i + "," + k);
                }
                newtable.push(newarr);
            }
            console.log(JSON.stringify(newtable));
            redoTable(newtable);
        };
    };

    this.marchingcube = function(stype) {
        this.marchingcubeinit(stype);
        verts = [];
        faces = [];
        $3Dmol.MarchingCube.march(vpBits, verts, faces, {
            smooth: 1,
            nX: pLength,
            nY: pWidth,
            nZ: pHeight
        });

        var pWH = pWidth * pHeight;
        for (var i = 0, vlen = verts.length; i < vlen; i++) {
            verts[i]['atomid'] = vpAtomID[verts[i].x * pWH + pHeight *
                verts[i].y + verts[i].z];
        }

        $3Dmol.MarchingCube.laplacianSmooth(1, verts, faces);

    };


};

//This defines the $3Dmol object which is used to create viewers
//and configure system-wide settings

/** 
 * All of the functionality of $3Dmol.js is contained within the
 * $3Dmol global namespace
 * @namespace */
$3Dmol = (function(window) {

    var my = window['$3Dmol'] || {};
    //var $ = window['jQuery'];

    return my;

})(window);

/* The following code "phones home" to register that an ip 
   address has loaded 3Dmol.js.  Being able track this usage
   is very helpful when reporting to funding agencies.  Please
   leave this code in if you would like to increase the 
   likelihood of 3Dmo.js remaining supported.
*/
$.get("http://3dmol.csb.pitt.edu/track/report.cgi");

/**
 * Create and initialize an appropriate viewer at supplied HTML element using specification in config
 * @param {Object | string} element - Either HTML element or string identifier
 * @param {ViewerSpec} config Viewer specification
 * @return {$3Dmol.GLViewer} GLViewer, null if unable to instantiate WebGL
 *
 * @example
 * // Assume there exists an HTML div with id "gldiv"
 * var element = $("#gldiv");
 *
 * // Viewer config - properties 'defaultcolors' and 'callback'
 * var config = {defaultcolors: $3Dmol.rasmolElementColors };
 *
 * // Create GLViewer within 'gldiv'
 * var myviewer = $3Dmol.createViewer(element, config);
 * //'data' is a string containing molecule data in pdb format
 * myviewer.addModel(data, "pdb");
 * myviewer.zoomTo();
 * myviewer.render();
 *
 */
$3Dmol.createViewer = function(element, config) {
    if ($.type(element) === "string")
        element = $("#" + element);
    if (!element) return;

    config = config || {};


    if (!config.defaultcolors)
        config.defaultcolors = $3Dmol.elementColors.defaultColors;

    //try to create the  viewer
    try {
        return new $3Dmol.GLViewer(element, config.callback, config.defaultcolors, config.nomouse);
    } catch (e) {
        throw "error creating viewer: " + e;
    }

    return null;
};

/**
 * Contains a dictionary of embedded viewers created from HTML elements
 * with a the viewer_3Dmoljs css class indexed by their id (or numerically
 * if they do not have an id).
 */
$3Dmol.viewers = {};

/**
 * Load a PDB/PubChem structure into existing viewer. Automatically calls 'zoomTo' and 'render' on viewer after loading model
 *
 * @function $3Dmol.download
 * @param {string} query String specifying pdb or pubchem id; must be prefaced with "pdb: " or "cid: ", respectively
 * @param {$3Dmol.GLViewer} viewer - Add new model to existing viewer
 * @example
 * var myviewer = $3Dmol.createViewer(gldiv);
 *
 * // GLModel 'm' created and loaded into glviewer for PDB id 2POR
 * // Note that m will not contain the atomic data until after the network request is completed
 * var m = $3Dmol.download('pdb: 2POR', myviewer);
 *
 * @return {$3Dmol.GLModel} GLModel
 */
$3Dmol.download = function(query, viewer, options, callback) {
    var baseURL = '';
    var type = "";
    var m = viewer.addModel();
    if (query.substr(0, 4) === 'pdb:') {
        type = "pdb";
        query = query.substr(4).toUpperCase();
        if (!query.match(/^[1-9][A-Za-z0-9]{3}$/)) {
            alert("Wrong PDB ID");
            return;
        }
        uri = "http://www.pdb.org/pdb/files/" + query + ".pdb";
    } else if (query.substr(0, 4) == 'cid:') {
        type = "sdf";
        query = query.substr(4);
        if (!query.match(/^[1-9]+$/)) {
            alert("Wrong Compound ID");
            return;
        }
        uri = "http://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" + query +
            "/SDF?record_type=3d";
    }

    $.get(uri, function(ret) {
        m.addMolData(ret, type, options);
        viewer.zoomTo();
        viewer.render();
        if (callback) callback(m);

    });

    return m;
};


/**
 * $3Dmol surface types
 * @enum {number}
 */
$3Dmol.SurfaceType = {
    VDW: 1,
    MS: 2,
    SAS: 3,
    SES: 4
};


//Miscellaneous functions and classes - to be incorporated into $3Dmol proper
/**
 *
 * @param {$3Dmol.Geometry} geometry
 * @param {$3Dmol.Mesh} mesh
 * @returns {undefined}
 */
$3Dmol.mergeGeos = function(geometry, mesh) {

    var meshGeo = mesh.geometry;

    if (meshGeo === undefined)
        return;

    geometry.geometryGroups.push(meshGeo.geometryGroups[0]);

};

$3Dmol.multiLineString = function(f) {
    return f.toString()
        .replace(/^[^\/]+\/\*!?/, '')
        .replace(/\*\/[^\/]+$/, '');

};

/** 
 * Render surface synchronously if true
 * @param {boolean} [$3Dmol.SyncSurface=false]
 * @type {boolean} */
$3Dmol.syncSurface = false;

// Internet Explorer refuses to allow webworkers in data blobs.  I can find
// no way of checking for this feature directly, so must do a brower check
if (window.navigator.userAgent.indexOf('MSIE ') >= 0 ||
    window.navigator.userAgent.indexOf('Trident/') >= 0) {
    $3Dmol.syncSurface = true; // can't use webworkers
}

/**
 * Parse a string that represents a style or atom selection and convert it
 * into an object.  The goal is to make it easier to write out these specifications
 * without resorting to json. Objects cannot be defined recursively.
 * ; - delineates fields of the object
 * : - if the field has a value other than an empty object, it comes after a colon
 * , - delineates key/value pairs of a value object
 *     If the value object consists of ONLY keys (no = present) the keys are
 *     converted to a list.  Otherwise a object of key/value pairs is created with
 *     any missing values set to null
 * = OR ~ - separates key/value pairs of a value object, if not provided value is null
 *     twiddle is supported since = has special meaning in URLs
 * @param (String) str
 * @returns {Object}
 */
$3Dmol.specStringToObject = function(str) {
    if (typeof(str) === "object") {
        return str; //not string, assume was converted already
    } else if (typeof(str) === "undefined" || str == null) {
        return str;
    }
    var ret = {};
    var fields = str.split(';');
    for (var i = 0; i < fields.length; i++) {
        var fv = fields[i].split(':');
        var f = fv[0];
        var val = {};
        var vstr = fv[1];
        if (vstr) {
            vstr = vstr.replace(/~/g, "=");
            if (vstr.indexOf('=') !== -1) {
                //has key=value pairs, must be object
                var kvs = vstr.split(',');
                for (var j = 0; j < kvs.length; j++) {
                    var kv = kvs[j].split('=', 2);
                    val[kv[0]] = kv[1];
                }
            } else if (vstr.indexOf(',') !== -1) {
                //has multiple values, must list
                val = vstr.split(',');
            } else {
                val = vstr; //value itself
            }
        }
        ret[f] = val;
    }

    return ret;
}

// computes the bounding box around the provided atoms
/**
 * @param {AtomSpec[]} atomlist
 * @return {Array}
 */
$3Dmol.getExtent = function(atomlist) {
    var xmin, ymin, zmin, xmax, ymax, zmax, xsum, ysum, zsum, cnt;

    xmin = ymin = zmin = 9999;
    xmax = ymax = zmax = -9999;
    xsum = ysum = zsum = cnt = 0;

    if (atomlist.length === 0)
        return [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
    for (var i = 0; i < atomlist.length; i++) {
        var atom = atomlist[i];
        if (atom === undefined)
            continue;
        cnt++;
        xsum += atom.x;
        ysum += atom.y;
        zsum += atom.z;

        if (atom.symmetries) {
            for (var n = 0; n < atom.symmetries.length; n++) {
                xsum += atom.symmetries[n].x;
                ysum += atom.symmetries[n].y;
                zsum += atom.symmetries[n].x;
                cnt++;
                xmin = (xmin < atom.x) ? xmin : atom.x;
                ymin = (ymin < atom.y) ? ymin : atom.y;
                zmin = (zmin < atom.z) ? zmin : atom.z;
                xmax = (xmax > atom.x) ? xmax : atom.x;
                ymax = (ymax > atom.y) ? ymax : atom.y;
                zmax = (zmax > atom.z) ? zmax : atom.z;
            }
        }

        xmin = (xmin < atom.x) ? xmin : atom.x;
        ymin = (ymin < atom.y) ? ymin : atom.y;
        zmin = (zmin < atom.z) ? zmin : atom.z;
        xmax = (xmax > atom.x) ? xmax : atom.x;
        ymax = (ymax > atom.y) ? ymax : atom.y;
        zmax = (zmax > atom.z) ? zmax : atom.z;
    }

    return [
        [xmin, ymin, zmin],
        [xmax, ymax, zmax],
        [xsum / cnt, ysum / cnt, zsum / cnt]
    ];
};


/*
//Hackish way to create webworker (independent of $3Dmol namespace) within minified file
//Had to hard-code uglify-js minified version of worker string in order to work with closure compiler...
$3Dmol.workerString = function(){

    self.onmessage = function(oEvent) {
        var obj = oEvent.data;
        var type = obj.type;
        if (type < 0) // sending atom data, initialize
        {
            self.atomData = obj.atoms;
            self.volume = obj.volume;
            self.ps = new ProteinSurface();
        } else {
            var ps = self.ps;
            ps.initparm(obj.expandedExtent, (type == 1) ? false : true, self.volume);
            ps.fillvoxels(self.atomData, obj.extendedAtoms);
            ps.buildboundary();
            if (type === 4 || type === 2) {
                ps.fastdistancemap();
                ps.boundingatom(false);
                ps.fillvoxelswaals(self.atomData, obj.extendedAtoms);    
            }        
            ps.marchingcube(type);
            var VandF = ps.getFacesAndVertices(obj.atomsToShow);
            self.postMessage(VandF);
        }
    };
    
}.toString().replace(/(^.*?\{|\}$)/g, "");
$3Dmol.workerString += ";var Vector3=function(x,y,z){this.x=x||0,this.y=y||0,this.z=z||0};Vector3.prototype={constructor:Vector3,copy:function(v){return this.x=v.x,this.y=v.y,this.z=v.z,this},multiplyScalar:function(s){return this.x*=s,this.y*=s,this.z*=s,this}}"
$3Dmol.workerString += ";var ISDONE=2";
$3Dmol.workerString += ",ProteinSurface=" + $3Dmol.ProteinSurface.toString().replace(/$3Dmol.MarchingCube./g, "");
$3Dmol.workerString += ",march=" + $3Dmol.MarchingCube.march.toString().replace(/$3Dmol./g, "");
$3Dmol.workerString += ",laplacianSmooth=" + $3Dmol.MarchingCube.laplacianSmooth.toString();

$3Dmol.workerString += ",edgeTable=new Uint32Array([" + $3Dmol.MarchingCube.edgeTable.toString() + "])";

$3Dmol.workerString += ",triTable=[";

for (var i = 0, il = $3Dmol.MarchingCube.triTable.length; i < il - 1; i++)
    $3Dmol.workerString += "[" + $3Dmol.MarchingCube.triTable[i].toString() + "],";

$3Dmol.workerString += "[]]";
*/

//TODO: Make this dynamic
//Otherwise, must uncomment and run the above with 3Dmol-min.js, and cut and paste below everytime ProteinSurface or MarchingCube modified
$3Dmol.workerString = 'self.onmessage=function(oEvent){var obj=oEvent.data,type=obj.type;if(0>type)self.atomData=obj.atoms,self.volume=obj.volume,self.ps=new ProteinSurface;else{var ps=self.ps;ps.initparm(obj.expandedExtent,1==type?!1:!0,self.volume),ps.fillvoxels(self.atomData,obj.extendedAtoms),ps.buildboundary(),(4===type||2===type)&&(ps.fastdistancemap(),ps.boundingatom(!1),ps.fillvoxelswaals(self.atomData,obj.extendedAtoms)),ps.marchingcube(type);var VandF=ps.getFacesAndVertices(obj.atomsToShow);self.postMessage(VandF)}};var Vector3=function(x,y,z){this.x=x||0,this.y=y||0,this.z=z||0};Vector3.prototype={constructor:Vector3,copy:function(v){return this.x=v.x,this.y=v.y,this.z=v.z,this},multiplyScalar:function(s){return this.x*=s,this.y*=s,this.z*=s,this}};var ISDONE=2,ProteinSurface=function (){var faces,verts,origextent,INOUT=1,ISDONE=2,ISBOUND=4,ptranx=0,ptrany=0,ptranz=0,probeRadius=1.4,defaultScaleFactor=2,scaleFactor=defaultScaleFactor,pHeight=0,pWidth=0,pLength=0,cutRadius=0,vpBits=null,vpDistance=null,vpAtomID=null,pminx=0,pminy=0,pminz=0,pmaxx=0,pmaxy=0,pmaxz=0,vdwRadii={H:1.2,Li:1.82,Na:2.27,K:2.75,C:1.7,N:1.55,O:1.52,F:1.47,P:1.8,S:1.8,CL:1.75,BR:1.85,SE:1.9,ZN:1.39,CU:1.4,NI:1.63,X:2},getVDWIndex=function(atom){return atom.elem&&"undefined"!=typeof vdwRadii[atom.elem]?atom.elem:"X"},depty={},widxz={},nb=[new Int32Array([1,0,0]),new Int32Array([-1,0,0]),new Int32Array([0,1,0]),new Int32Array([0,-1,0]),new Int32Array([0,0,1]),new Int32Array([0,0,-1]),new Int32Array([1,1,0]),new Int32Array([1,-1,0]),new Int32Array([-1,1,0]),new Int32Array([-1,-1,0]),new Int32Array([1,0,1]),new Int32Array([1,0,-1]),new Int32Array([-1,0,1]),new Int32Array([-1,0,-1]),new Int32Array([0,1,1]),new Int32Array([0,1,-1]),new Int32Array([0,-1,1]),new Int32Array([0,-1,-1]),new Int32Array([1,1,1]),new Int32Array([1,1,-1]),new Int32Array([1,-1,1]),new Int32Array([-1,1,1]),new Int32Array([1,-1,-1]),new Int32Array([-1,-1,1]),new Int32Array([-1,1,-1]),new Int32Array([-1,-1,-1])];this.getFacesAndVertices=function(atomlist){var i,il,atomsToShow={};for(i=0,il=atomlist.length;il>i;i++)atomsToShow[atomlist[i]]=!0;var vertices=verts;for(i=0,il=vertices.length;il>i;i++)vertices[i].x=vertices[i].x/scaleFactor-ptranx,vertices[i].y=vertices[i].y/scaleFactor-ptrany,vertices[i].z=vertices[i].z/scaleFactor-ptranz;var finalfaces=[];for(i=0,il=faces.length;il>i;i+=3){var fa=faces[i],fb=faces[i+1],fc=faces[i+2],a=vertices[fa].atomid,b=vertices[fb].atomid,c=vertices[fc].atomid,which=a;if(which>b&&(which=b),which>c&&(which=c),atomsToShow[which]){{vertices[faces[i]],vertices[faces[i+1]],vertices[faces[i+2]]}fa!==fb&&fb!==fc&&fa!==fc&&(finalfaces.push(fa),finalfaces.push(fb),finalfaces.push(fc))}}return vpBits=null,vpDistance=null,vpAtomID=null,{vertices:vertices,faces:finalfaces}},this.initparm=function(extent,btype,volume){volume>1e6&&(scaleFactor=defaultScaleFactor/2);var margin=1/scaleFactor*5.5;origextent=extent,pminx=extent[0][0],pmaxx=extent[1][0],pminy=extent[0][1],pmaxy=extent[1][1],pminz=extent[0][2],pmaxz=extent[1][2],btype?(pminx-=probeRadius+margin,pminy-=probeRadius+margin,pminz-=probeRadius+margin,pmaxx+=probeRadius+margin,pmaxy+=probeRadius+margin,pmaxz+=probeRadius+margin):(pminx-=margin,pminy-=margin,pminz-=margin,pmaxx+=margin,pmaxy+=margin,pmaxz+=margin),pminx=Math.floor(pminx*scaleFactor)/scaleFactor,pminy=Math.floor(pminy*scaleFactor)/scaleFactor,pminz=Math.floor(pminz*scaleFactor)/scaleFactor,pmaxx=Math.ceil(pmaxx*scaleFactor)/scaleFactor,pmaxy=Math.ceil(pmaxy*scaleFactor)/scaleFactor,pmaxz=Math.ceil(pmaxz*scaleFactor)/scaleFactor,ptranx=-pminx,ptrany=-pminy,ptranz=-pminz,pLength=Math.ceil(scaleFactor*(pmaxx-pminx))+1,pWidth=Math.ceil(scaleFactor*(pmaxy-pminy))+1,pHeight=Math.ceil(scaleFactor*(pmaxz-pminz))+1,this.boundingatom(btype),cutRadius=probeRadius*scaleFactor,vpBits=new Uint8Array(pLength*pWidth*pHeight),vpDistance=new Float64Array(pLength*pWidth*pHeight),vpAtomID=new Int32Array(pLength*pWidth*pHeight)},this.boundingatom=function(btype){var txz,tdept,sradius,tradius=[];flagradius=btype;for(var i in vdwRadii)if(vdwRadii.hasOwnProperty(i)){var r=vdwRadii[i];for(tradius[i]=btype?(r+probeRadius)*scaleFactor+.5:r*scaleFactor+.5,sradius=tradius[i]*tradius[i],widxz[i]=Math.floor(tradius[i])+1,depty[i]=new Int32Array(widxz[i]*widxz[i]),indx=0,j=0;j<widxz[i];j++)for(k=0;k<widxz[i];k++)txz=j*j+k*k,txz>sradius?depty[i][indx]=-1:(tdept=Math.sqrt(sradius-txz),depty[i][indx]=Math.floor(tdept)),indx++}},this.fillvoxels=function(atoms,atomlist){var i,il;for(i=0,il=vpBits.length;il>i;i++)vpBits[i]=0,vpDistance[i]=-1,vpAtomID[i]=-1;for(i in atomlist){var atom=atoms[atomlist[i]];void 0!==atom&&this.fillAtom(atom,atoms)}for(i=0,il=vpBits.length;il>i;i++)vpBits[i]&INOUT&&(vpBits[i]|=ISDONE)},this.fillAtom=function(atom,atoms){var cx,cy,cz,ox,oy,oz,mi,mj,mk,i,j,k,si,sj,sk,ii,jj,kk,n;cx=Math.floor(.5+scaleFactor*(atom.x+ptranx)),cy=Math.floor(.5+scaleFactor*(atom.y+ptrany)),cz=Math.floor(.5+scaleFactor*(atom.z+ptranz));var at=getVDWIndex(atom),nind=0,pWH=pWidth*pHeight;for(i=0,n=widxz[at];n>i;i++)for(j=0;n>j;j++){if(-1!=depty[at][nind])for(ii=-1;2>ii;ii++)for(jj=-1;2>jj;jj++)for(kk=-1;2>kk;kk++)if(0!==ii&&0!==jj&&0!==kk)for(mi=ii*i,mk=kk*j,k=0;k<=depty[at][nind];k++)if(mj=k*jj,si=cx+mi,sj=cy+mj,sk=cz+mk,!(0>si||0>sj||0>sk||si>=pLength||sj>=pWidth||sk>=pHeight)){var index=si*pWH+sj*pHeight+sk;if(vpBits[index]&INOUT){var atom2=atoms[vpAtomID[index]];ox=Math.floor(.5+scaleFactor*(atom2.x+ptranx)),oy=Math.floor(.5+scaleFactor*(atom2.y+ptrany)),oz=Math.floor(.5+scaleFactor*(atom2.z+ptranz)),ox*ox+oy*oy+oz*oz>mi*mi+mj*mj+mk*mk&&(vpAtomID[index]=atom.serial)}else vpBits[index]|=INOUT,vpAtomID[index]=atom.serial}nind++}},this.fillvoxelswaals=function(atoms,atomlist){var i,il;for(i=0,il=vpBits.length;il>i;i++)vpBits[i]&=~ISDONE;for(i in atomlist){var atom=atoms[atomlist[i]];void 0!==atom&&this.fillAtomWaals(atom,atoms)}},this.fillAtomWaals=function(atom,atoms){var cx,cy,cz,ox,oy,oz,mi,mj,mk,si,sj,sk,i,j,k,ii,jj,kk,n,nind=0;cx=Math.floor(.5+scaleFactor*(atom.x+ptranx)),cy=Math.floor(.5+scaleFactor*(atom.y+ptrany)),cz=Math.floor(.5+scaleFactor*(atom.z+ptranz));var at=getVDWIndex(atom),pWH=pWidth*pHeight;for(i=0,n=widxz[at];n>i;i++)for(j=0;n>j;j++){if(-1!=depty[at][nind])for(ii=-1;2>ii;ii++)for(jj=-1;2>jj;jj++)for(kk=-1;2>kk;kk++)if(0!==ii&&0!==jj&&0!==kk)for(mi=ii*i,mk=kk*j,k=0;k<=depty[at][nind];k++)if(mj=k*jj,si=cx+mi,sj=cy+mj,sk=cz+mk,!(0>si||0>sj||0>sk||si>=pLength||sj>=pWidth||sk>=pHeight)){var index=si*pWH+sj*pHeight+sk;if(vpBits[index]&ISDONE){var atom2=atoms[vpAtomID[index]];ox=Math.floor(.5+scaleFactor*(atom2.x+ptranx)),oy=Math.floor(.5+scaleFactor*(atom2.y+ptrany)),oz=Math.floor(.5+scaleFactor*(atom2.z+ptranz)),ox*ox+oy*oy+oz*oz>mi*mi+mj*mj+mk*mk&&(vpAtomID[index]=atom.serial)}else vpBits[index]|=ISDONE,vpAtomID[index]=atom.serial}nind++}},this.buildboundary=function(){var pWH=pWidth*pHeight;for(i=0;pLength>i;i++)for(j=0;pHeight>j;j++)for(k=0;pWidth>k;k++){var index=i*pWH+k*pHeight+j;if(vpBits[index]&INOUT)for(var ii=0;26>ii;){var ti=i+nb[ii][0],tj=j+nb[ii][2],tk=k+nb[ii][1];if(ti>-1&&pLength>ti&&tk>-1&&pWidth>tk&&tj>-1&&pHeight>tj&&!(vpBits[ti*pWH+tk*pHeight+tj]&INOUT)){vpBits[index]|=ISBOUND;break}ii++}}};var PointGrid=function(length,width,height){var data=new Int32Array(length*width*height*3);this.set=function(x,y,z,pt){var index=3*((x*width+y)*height+z);data[index]=pt.ix,data[index+1]=pt.iy,data[index+2]=pt.iz},this.get=function(x,y,z){var index=3*((x*width+y)*height+z);return{ix:data[index],iy:data[index+1],iz:data[index+2]}}};this.fastdistancemap=function(){var i,j,k,n,index,boundPoint=new PointGrid(pLength,pWidth,pHeight),pWH=pWidth*pHeight,cutRSq=cutRadius*cutRadius,inarray=[],outarray=[];for(i=0;pLength>i;i++)for(j=0;pWidth>j;j++)for(k=0;pHeight>k;k++)if(index=i*pWH+j*pHeight+k,vpBits[index]&=~ISDONE,vpBits[index]&INOUT&&vpBits[index]&ISBOUND){var triple={ix:i,iy:j,iz:k};boundPoint.set(i,j,k,triple),inarray.push(triple),vpDistance[index]=0,vpBits[index]|=ISDONE,vpBits[index]&=~ISBOUND}do for(outarray=this.fastoneshell(inarray,boundPoint),inarray=[],i=0,n=outarray.length;n>i;i++)index=pWH*outarray[i].ix+pHeight*outarray[i].iy+outarray[i].iz,vpBits[index]&=~ISBOUND,vpDistance[index]<=1.0404*cutRSq&&inarray.push({ix:outarray[i].ix,iy:outarray[i].iy,iz:outarray[i].iz});while(0!==inarray.length);inarray=[],outarray=[],boundPoint=null;var cutsf=scaleFactor-.5;0>cutsf&&(cutsf=0);var cutoff=cutRSq-.5/(.1+cutsf);for(i=0;pLength>i;i++)for(j=0;pWidth>j;j++)for(k=0;pHeight>k;k++)index=i*pWH+j*pHeight+k,vpBits[index]&=~ISBOUND,vpBits[index]&INOUT&&(!(vpBits[index]&ISDONE)||vpBits[index]&ISDONE&&vpDistance[index]>=cutoff)&&(vpBits[index]|=ISBOUND)},this.fastoneshell=function(inarray,boundPoint){var tx,ty,tz,dx,dy,dz,i,j,n,square,bp,index,outarray=[];if(0===inarray.length)return outarray;tnv={ix:-1,iy:-1,iz:-1};var pWH=pWidth*pHeight;for(i=0,n=inarray.length;n>i;i++)for(tx=inarray[i].ix,ty=inarray[i].iy,tz=inarray[i].iz,bp=boundPoint.get(tx,ty,tz),j=0;6>j;j++)tnv.ix=tx+nb[j][0],tnv.iy=ty+nb[j][1],tnv.iz=tz+nb[j][2],tnv.ix<pLength&&tnv.ix>-1&&tnv.iy<pWidth&&tnv.iy>-1&&tnv.iz<pHeight&&tnv.iz>-1&&(index=tnv.ix*pWH+pHeight*tnv.iy+tnv.iz,vpBits[index]&INOUT&&!(vpBits[index]&ISDONE)?(boundPoint.set(tnv.ix,tnv.iy,tz+nb[j][2],bp),dx=tnv.ix-bp.ix,dy=tnv.iy-bp.iy,dz=tnv.iz-bp.iz,square=dx*dx+dy*dy+dz*dz,vpDistance[index]=square,vpBits[index]|=ISDONE,vpBits[index]|=ISBOUND,outarray.push({ix:tnv.ix,iy:tnv.iy,iz:tnv.iz})):vpBits[index]&INOUT&&vpBits[index]&ISDONE&&(dx=tnv.ix-bp.ix,dy=tnv.iy-bp.iy,dz=tnv.iz-bp.iz,square=dx*dx+dy*dy+dz*dz,square<vpDistance[index]&&(boundPoint.set(tnv.ix,tnv.iy,tnv.iz,bp),vpDistance[index]=square,vpBits[index]&ISBOUND||(vpBits[index]|=ISBOUND,outarray.push({ix:tnv.ix,iy:tnv.iy,iz:tnv.iz})))));for(i=0,n=inarray.length;n>i;i++)for(tx=inarray[i].ix,ty=inarray[i].iy,tz=inarray[i].iz,bp=boundPoint.get(tx,ty,tz),j=6;18>j;j++)tnv.ix=tx+nb[j][0],tnv.iy=ty+nb[j][1],tnv.iz=tz+nb[j][2],tnv.ix<pLength&&tnv.ix>-1&&tnv.iy<pWidth&&tnv.iy>-1&&tnv.iz<pHeight&&tnv.iz>-1&&(index=tnv.ix*pWH+pHeight*tnv.iy+tnv.iz,vpBits[index]&INOUT&&!(vpBits[index]&ISDONE)?(boundPoint.set(tnv.ix,tnv.iy,tz+nb[j][2],bp),dx=tnv.ix-bp.ix,dy=tnv.iy-bp.iy,dz=tnv.iz-bp.iz,square=dx*dx+dy*dy+dz*dz,vpDistance[index]=square,vpBits[index]|=ISDONE,vpBits[index]|=ISBOUND,outarray.push({ix:tnv.ix,iy:tnv.iy,iz:tnv.iz})):vpBits[index]&INOUT&&vpBits[index]&ISDONE&&(dx=tnv.ix-bp.ix,dy=tnv.iy-bp.iy,dz=tnv.iz-bp.iz,square=dx*dx+dy*dy+dz*dz,square<vpDistance[index]&&(boundPoint.set(tnv.ix,tnv.iy,tnv.iz,bp),vpDistance[index]=square,vpBits[index]&ISBOUND||(vpBits[index]|=ISBOUND,outarray.push({ix:tnv.ix,iy:tnv.iy,iz:tnv.iz})))));for(i=0,n=inarray.length;n>i;i++)for(tx=inarray[i].ix,ty=inarray[i].iy,tz=inarray[i].iz,bp=boundPoint.get(tx,ty,tz),j=18;26>j;j++)tnv.ix=tx+nb[j][0],tnv.iy=ty+nb[j][1],tnv.iz=tz+nb[j][2],tnv.ix<pLength&&tnv.ix>-1&&tnv.iy<pWidth&&tnv.iy>-1&&tnv.iz<pHeight&&tnv.iz>-1&&(index=tnv.ix*pWH+pHeight*tnv.iy+tnv.iz,vpBits[index]&INOUT&&!(vpBits[index]&ISDONE)?(boundPoint.set(tnv.ix,tnv.iy,tz+nb[j][2],bp),dx=tnv.ix-bp.ix,dy=tnv.iy-bp.iy,dz=tnv.iz-bp.iz,square=dx*dx+dy*dy+dz*dz,vpDistance[index]=square,vpBits[index]|=ISDONE,vpBits[index]|=ISBOUND,outarray.push({ix:tnv.ix,iy:tnv.iy,iz:tnv.iz})):vpBits[index]&INOUT&&vpBits[index]&ISDONE&&(dx=tnv.ix-bp.ix,dy=tnv.iy-bp.iy,dz=tnv.iz-bp.iz,square=dx*dx+dy*dy+dz*dz,square<vpDistance[index]&&(boundPoint.set(tnv.ix,tnv.iy,tnv.iz,bp),vpDistance[index]=square,vpBits[index]&ISBOUND||(vpBits[index]|=ISBOUND,outarray.push({ix:tnv.ix,iy:tnv.iy,iz:tnv.iz})))));return outarray},this.marchingcubeinit=function(stype){for(var i=0,lim=vpBits.length;lim>i;i++)1==stype?vpBits[i]&=~ISBOUND:4==stype?(vpBits[i]&=~ISDONE,vpBits[i]&ISBOUND&&(vpBits[i]|=ISDONE),vpBits[i]&=~ISBOUND):2==stype?vpBits[i]&ISBOUND&&vpBits[i]&ISDONE?vpBits[i]&=~ISBOUND:vpBits[i]&ISBOUND&&!(vpBits[i]&ISDONE)&&(vpBits[i]|=ISDONE):3==stype&&(vpBits[i]&=~ISBOUND)};this.marchingcube=function(stype){this.marchingcubeinit(stype),verts=[],faces=[],march(vpBits,verts,faces,{smooth:1,nX:pLength,nY:pWidth,nZ:pHeight});for(var pWH=pWidth*pHeight,i=0,vlen=verts.length;vlen>i;i++)verts[i].atomid=vpAtomID[verts[i].x*pWH+pHeight*verts[i].y+verts[i].z];laplacianSmooth(1,verts,faces)}},march=function (data,verts,faces,spec){var i,il,fulltable=!!spec.fulltable,origin=spec.hasOwnProperty("origin")&&spec.origin.hasOwnProperty("x")?spec.origin:{x:0,y:0,z:0},voxel=!!spec.voxel,nX=spec.nX||0,nY=spec.nY||0,nZ=spec.nZ||0,scale=spec.scale||1,unitCube=new Vector3(1,1,1).multiplyScalar(scale),vertnums=new Int32Array(nX*nY*nZ);for(i=0,il=vertnums.length;il>i;++i)vertnums[i]=-1;var getVertex=function(i,j,k,code,p1,p2){var pt=new Vector3;pt.copy(origin);var val1=!!(code&1<<p1),val2=!!(code&1<<p2),p=p1;!val1&&val2&&(p=p2),1&p&&k++,2&p&&j++,4&p&&i++,pt.x+=unitCube.x*i,pt.y+=unitCube.y*j,pt.z+=unitCube.z*k;var index=(nY*i+j)*nZ+k;return voxel?(verts.push(pt),verts.length-1):(vertnums[index]<0&&(vertnums[index]=verts.length,verts.push(pt)),vertnums[index])},intersects=new Int32Array(12),etable=fulltable?edgeTable2:edgeTable,tritable=fulltable?triTable2:triTable;for(i=0;nX-1>i;++i)for(var j=0;nY-1>j;++j)for(var k=0;nZ-1>k;++k){for(var code=0,p=0;8>p;++p){var index=(nY*(i+((4&p)>>2))+j+((2&p)>>1))*nZ+k+(1&p),val=!!(data[index]&ISDONE);code|=val<<p}if(0!==code&&255!==code){var ecode=etable[code];if(0!==ecode){var ttable=tritable[code];1&ecode&&(intersects[0]=getVertex(i,j,k,code,0,1)),2&ecode&&(intersects[1]=getVertex(i,j,k,code,1,3)),4&ecode&&(intersects[2]=getVertex(i,j,k,code,3,2)),8&ecode&&(intersects[3]=getVertex(i,j,k,code,2,0)),16&ecode&&(intersects[4]=getVertex(i,j,k,code,4,5)),32&ecode&&(intersects[5]=getVertex(i,j,k,code,5,7)),64&ecode&&(intersects[6]=getVertex(i,j,k,code,7,6)),128&ecode&&(intersects[7]=getVertex(i,j,k,code,6,4)),256&ecode&&(intersects[8]=getVertex(i,j,k,code,0,4)),512&ecode&&(intersects[9]=getVertex(i,j,k,code,1,5)),1024&ecode&&(intersects[10]=getVertex(i,j,k,code,3,7)),2048&ecode&&(intersects[11]=getVertex(i,j,k,code,2,6));for(var t=0;t<ttable.length;t+=3){var a=intersects[ttable[t]],b=intersects[ttable[t+1]],c=intersects[ttable[t+2]];voxel&&t>=3&&(verts.push(verts[a]),a=verts.length-1,verts.push(verts[b]),b=verts.length-1,verts.push(verts[c]),c=verts.length-1),faces.push(a),faces.push(b),faces.push(c)}}}}},laplacianSmooth=function (numiter,verts,faces){var i,il,j,jl,k,tps=new Array(verts.length);for(i=0,il=verts.length;il>i;i++)tps[i]={x:0,y:0,z:0};var flagvert,vertdeg=new Array(20);for(i=0;20>i;i++)vertdeg[i]=new Array(verts.length);for(i=0,il=verts.length;il>i;i++)vertdeg[0][i]=0;for(i=0,il=faces.length/3;il>i;i++){var aoffset=3*i,boffset=3*i+1,coffset=3*i+2;for(flagvert=!0,j=0,jl=vertdeg[0][faces[aoffset]];jl>j;j++)if(faces[boffset]==vertdeg[j+1][faces[aoffset]]){flagvert=!1;break}for(flagvert&&(vertdeg[0][faces[aoffset]]++,vertdeg[vertdeg[0][faces[aoffset]]][faces[aoffset]]=faces[boffset]),flagvert=!0,j=0,jl=vertdeg[0][faces[aoffset]];jl>j;j++)if(faces[coffset]==vertdeg[j+1][faces[aoffset]]){flagvert=!1;break}for(flagvert&&(vertdeg[0][faces[aoffset]]++,vertdeg[vertdeg[0][faces[aoffset]]][faces[aoffset]]=faces[coffset]),flagvert=!0,j=0,jl=vertdeg[0][faces[boffset]];jl>j;j++)if(faces[aoffset]==vertdeg[j+1][faces[boffset]]){flagvert=!1;break}for(flagvert&&(vertdeg[0][faces[boffset]]++,vertdeg[vertdeg[0][faces[boffset]]][faces[boffset]]=faces[aoffset]),flagvert=!0,j=0,jl=vertdeg[0][faces[boffset]];jl>j;j++)if(faces[coffset]==vertdeg[j+1][faces[boffset]]){flagvert=!1;break}for(flagvert&&(vertdeg[0][faces[boffset]]++,vertdeg[vertdeg[0][faces[boffset]]][faces[boffset]]=faces[coffset]),flagvert=!0,j=0;j<vertdeg[0][faces[coffset]];j++)if(faces[aoffset]==vertdeg[j+1][faces[coffset]]){flagvert=!1;break}for(flagvert&&(vertdeg[0][faces[coffset]]++,vertdeg[vertdeg[0][faces[coffset]]][faces[coffset]]=faces[aoffset]),flagvert=!0,j=0,jl=vertdeg[0][faces[coffset]];jl>j;j++)if(faces[boffset]==vertdeg[j+1][faces[coffset]]){flagvert=!1;break}flagvert&&(vertdeg[0][faces[coffset]]++,vertdeg[vertdeg[0][faces[coffset]]][faces[coffset]]=faces[boffset])}var wt=1,wt2=.5;for(k=0;numiter>k;k++){for(i=0,il=verts.length;il>i;i++)if(vertdeg[0][i]<3)tps[i].x=verts[i].x,tps[i].y=verts[i].y,tps[i].z=verts[i].z;else if(3==vertdeg[0][i]||4==vertdeg[0][i]){for(tps[i].x=0,tps[i].y=0,tps[i].z=0,j=0,jl=vertdeg[0][i];jl>j;j++)tps[i].x+=verts[vertdeg[j+1][i]].x,tps[i].y+=verts[vertdeg[j+1][i]].y,tps[i].z+=verts[vertdeg[j+1][i]].z;tps[i].x+=wt2*verts[i].x,tps[i].y+=wt2*verts[i].y,tps[i].z+=wt2*verts[i].z,tps[i].x/=wt2+vertdeg[0][i],tps[i].y/=wt2+vertdeg[0][i],tps[i].z/=wt2+vertdeg[0][i]}else{for(tps[i].x=0,tps[i].y=0,tps[i].z=0,j=0,jl=vertdeg[0][i];jl>j;j++)tps[i].x+=verts[vertdeg[j+1][i]].x,tps[i].y+=verts[vertdeg[j+1][i]].y,tps[i].z+=verts[vertdeg[j+1][i]].z;tps[i].x+=wt*verts[i].x,tps[i].y+=wt*verts[i].y,tps[i].z+=wt*verts[i].z,tps[i].x/=wt+vertdeg[0][i],tps[i].y/=wt+vertdeg[0][i],tps[i].z/=wt+vertdeg[0][i]}for(i=0,il=verts.length;il>i;i++)verts[i].x=tps[i].x,verts[i].y=tps[i].y,verts[i].z=tps[i].z}},edgeTable=new Uint32Array([0,0,0,0,0,0,0,2816,0,0,0,1792,0,3328,3584,3840,0,0,0,138,0,21,0,134,0,0,0,652,0,2067,3865,3600,0,0,0,42,0,0,0,294,0,0,21,28,0,3875,1049,3360,0,168,162,170,0,645,2475,2210,0,687,293,172,4010,3747,3497,3232,0,0,0,0,0,69,0,900,0,0,0,1792,138,131,1608,1920,0,81,0,2074,84,85,84,86,0,81,0,3676,330,1105,1881,1616,0,0,0,42,0,69,0,502,0,0,21,3580,138,2035,1273,1520,2816,104,2337,106,840,581,367,102,2816,3695,3429,3180,1898,1635,1385,1120,0,0,0,0,0,0,0,3910,0,0,69,588,42,2083,41,2880,0,0,0,1722,0,2293,4095,3830,0,255,757,764,2538,2291,3065,2800,0,0,81,338,0,3925,1119,3414,84,855,85,340,2130,2899,89,2384,1792,712,194,1162,4036,3781,3535,3270,708,719,197,204,3018,2755,2505,2240,0,0,0,0,168,420,168,1958,162,162,676,2988,170,163,680,928,3328,3096,3328,3642,52,53,1855,1590,2340,2111,2869,2620,298,51,825,560,3584,3584,3090,3482,1668,1941,1183,1430,146,2975,2069,2460,154,915,153,400,3840,3592,3329,3082,1796,1541,1295,1030,2818,2575,2309,2060,778,515,265,0]),triTable=[[],[],[],[],[],[],[],[11,9,8],[],[],[],[8,10,9],[],[10,8,11],[9,11,10],[8,10,9,8,11,10],[],[],[],[1,7,3],[],[4,2,0],[],[2,1,7],[],[],[],[2,7,3,2,9,7],[],[1,4,11,1,0,4],[3,8,0,11,9,4,11,10,9],[4,11,9,11,10,9],[],[],[],[5,3,1],[],[],[],[2,5,8,2,1,5],[],[],[2,4,0],[3,2,4],[],[0,9,1,8,10,5,8,11,10],[3,4,0,3,10,4],[5,8,10,8,11,10],[],[3,5,7],[7,1,5],[1,7,3,1,5,7],[],[9,2,0,9,7,2],[0,3,8,1,7,11,1,5,7],[11,1,7,1,5,7],[],[9,1,0,5,3,2,5,7,3],[8,2,5,8,0,2],[2,5,3,5,7,3],[3,9,1,3,8,9,7,11,10,7,10,5],[9,1,0,10,7,11,10,5,7],[3,8,0,7,10,5,7,11,10],[11,5,7,11,10,5],[],[],[],[],[],[0,6,2],[],[7,2,9,7,9,8],[],[],[],[8,10,9],[7,1,3],[7,1,0],[6,9,3,6,10,9],[7,10,8,10,9,8],[],[6,0,4],[],[11,1,4,11,3,1],[2,4,6],[2,0,4,2,4,6],[2,4,6],[1,4,2,4,6,2],[],[6,0,4],[],[2,11,3,6,9,4,6,10,9],[8,6,1,8,1,3],[10,0,6,0,4,6],[8,0,3,9,6,10,9,4,6],[10,4,6,10,9,4],[],[],[],[5,3,1],[],[0,6,2],[],[7,4,8,5,2,1,5,6,2],[],[],[2,4,0],[7,4,8,2,11,3,10,5,6],[7,1,3],[5,6,10,0,9,1,8,7,4],[5,6,10,7,0,3,7,4,0],[10,5,6,4,8,7],[9,11,8],[3,5,6],[0,5,11,0,11,8],[6,3,5,3,1,5],[3,9,6,3,8,9],[9,6,0,6,2,0],[0,3,8,2,5,6,2,1,5],[1,6,2,1,5,6],[9,11,8],[1,0,9,6,10,5,11,3,2],[6,10,5,2,8,0,2,11,8],[3,2,11,10,5,6],[10,5,6,9,3,8,9,1,3],[0,9,1,5,6,10],[8,0,3,10,5,6],[10,5,6],[],[],[],[],[],[],[],[1,10,2,9,11,6,9,8,11],[],[],[6,0,2],[3,6,9,3,2,6],[3,5,1],[0,5,1,0,11,5],[0,3,5],[6,9,11,9,8,11],[],[],[],[4,5,9,7,1,10,7,3,1],[],[11,6,7,2,4,5,2,0,4],[11,6,7,8,0,3,1,10,2,9,4,5],[6,7,11,1,10,2,9,4,5],[],[4,1,0,4,5,1,6,7,3,6,3,2],[9,4,5,0,6,7,0,2,6],[4,5,9,6,3,2,6,7,3],[6,7,11,5,3,8,5,1,3],[6,7,11,4,1,0,4,5,1],[4,5,9,3,8,0,11,6,7],[9,4,5,7,11,6],[],[],[0,6,4],[8,6,4,8,1,6],[],[0,10,2,0,9,10,4,8,11,4,11,6],[10,2,1,6,0,3,6,4,0],[10,2,1,11,4,8,11,6,4],[4,2,6],[1,0,9,2,4,8,2,6,4],[2,4,0,2,6,4],[8,2,4,2,6,4],[11,4,1,11,6,4],[0,9,1,4,11,6,4,8,11],[3,6,0,6,4,0],[8,6,4,8,11,6],[10,8,9],[6,3,9,6,7,3],[6,7,1],[10,7,1,7,3,1],[7,11,6,8,10,2,8,9,10],[11,6,7,10,0,9,10,2,0],[2,1,10,7,11,6,8,0,3],[1,10,2,6,7,11],[7,2,6,7,9,2],[1,0,9,3,6,7,3,2,6],[7,0,6,0,2,6],[2,7,3,2,6,7],[7,11,6,3,9,1,3,8,9],[9,1,0,11,6,7],[0,3,8,11,6,7],[11,6,7],[],[],[],[],[5,3,7],[8,5,2,8,7,5],[5,3,7],[1,10,2,5,8,7,5,9,8],[1,7,5],[1,7,5],[9,2,7,9,7,5],[11,3,2,8,5,9,8,7,5],[1,3,7,1,7,5],[0,7,1,7,5,1],[9,3,5,3,7,5],[9,7,5,9,8,7],[8,10,11],[3,4,10,3,10,11],[8,10,11],[5,9,4,1,11,3,1,10,11],[2,4,5],[5,2,4,2,0,4],[0,3,8,5,9,4,10,2,1],[2,1,10,9,4,5],[2,8,5,2,11,8],[3,2,11,1,4,5,1,0,4],[9,4,5,8,2,11,8,0,2],[11,3,2,9,4,5],[8,5,3,5,1,3],[5,0,4,5,1,0],[3,8,0,4,5,9],[9,4,5],[11,9,10],[11,9,10],[1,11,4,1,10,11],[8,7,4,11,1,10,11,3,1],[2,7,9,2,9,10],[4,8,7,0,10,2,0,9,10],[2,1,10,0,7,4,0,3,7],[10,2,1,8,7,4],[1,7,4],[3,2,11,4,8,7,9,1,0],[11,4,2,4,0,2],[2,11,3,7,4,8],[4,1,7,1,3,7],[1,0,9,8,7,4],[3,4,0,3,7,4],[8,7,4],[8,9,10,8,10,11],[3,9,11,9,10,11],[0,10,8,10,11,8],[10,3,1,10,11,3],[2,8,10,8,9,10],[9,2,0,9,10,2],[8,0,3,1,10,2],[10,2,1],[1,11,9,11,8,9],[11,3,2,0,9,1],[11,0,2,11,8,0],[11,3,2],[8,1,3,8,9,1],[9,1,0],[8,0,3],[]]';

$3Dmol.SurfaceWorker = window.URL.createObjectURL(new Blob([$3Dmol.workerString], {
    type: 'text/javascript'
}));

$3Dmol['workerString'] = $3Dmol.workerString;
$3Dmol['SurfaceWorker'] = $3Dmol.SurfaceWorker;
//auto-initialization
//Create embedded viewer from HTML attributes if true

$(document).ready(function() {

    if ($(".viewer_3Dmoljs")[0] !== undefined)
        $3Dmol.autoinit = true;

    if ($3Dmol.autoinit) {
        $3Dmol.viewers = {};
        var nviewers = 0;
        $(".viewer_3Dmoljs").each(function() {
            var viewerdiv = $(this);
            var datauri = null;


            var callback = (typeof(window[viewerdiv.data("callback")]) === 'function') ?
                window[viewerdiv.data("callback")] : null;

            var type = null;
            if (viewerdiv.data("pdb")) {
                datauri = "http://www.pdb.org/pdb/files/" + viewerdiv.data("pdb") + ".pdb";
                type = "pdb";
            } else if (viewerdiv.data("cid")) {
                //this doesn't actually work since pubchem does have CORS enabled
                type = "sdf";
                datauri = "http://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" + viewerdiv.data("cid") +
                    "/SDF?record_type=3d";
            } else if (viewerdiv.data("href"))
                datauri = viewerdiv.data("href");

            var bgcolor = Number(viewerdiv.data("backgroundcolor")) || 0x000000;
            var style = {
                line: {}
            };
            if (viewerdiv.data("style")) style = $3Dmol.specStringToObject(viewerdiv.data("style"));
            var select = {};
            if (viewerdiv.data("select")) select = $3Dmol.specStringToObject(viewerdiv.data("select"));
            var selectstylelist = [];
            var surfaces = [];
            var labels = [];
            var d = viewerdiv.data();

            //let users specify individual but matching select/style tags, eg.
            //data-select1 data-style1
            var stylere = /style(.+)/;
            var surfre = /surface(.*)/;
            var reslabre = /labelres(.*)/;
            var keys = [];
            for (var dataname in d) {
                if (d.hasOwnProperty(dataname)) {
                    keys.push(dataname);
                }
            }
            keys.sort();
            for (var i = 0; i < keys.length; i++) {
                var dataname = keys[i];
                var m = stylere.exec(dataname);
                if (m) {
                    var selname = "select" + m[1];
                    var newsel = $3Dmol.specStringToObject(d[selname]);
                    var styleobj = $3Dmol.specStringToObject(d[dataname]);
                    selectstylelist.push([newsel, styleobj]);
                }
                m = surfre.exec(dataname);
                if (m) {
                    var selname = "select" + m[1];
                    var newsel = $3Dmol.specStringToObject(d[selname]);
                    var styleobj = $3Dmol.specStringToObject(d[dataname]);
                    surfaces.push([newsel, styleobj]);
                }
                m = reslabre.exec(dataname);
                if (m) {
                    var selname = "select" + m[1];
                    var newsel = $3Dmol.specStringToObject(d[selname]);
                    var styleobj = $3Dmol.specStringToObject(d[dataname]);
                    labels.push([newsel, styleobj]);
                }
            }

            try {
                var glviewer = $3Dmol.viewers[this.id || nviewers++] = $3Dmol.createViewer(viewerdiv, {
                    defaultcolors: $3Dmol.rasmolElementColors,
                    callback: function(viewer) {
                        viewer.setBackgroundColor(bgcolor);
                    }
                });
            } catch (error) {
                //for autoload, provide a useful error message
                window.location = "http://get.webgl.org";
            }


            if (datauri) {

                type = viewerdiv.data("type") || viewerdiv.data("datatype") || type;
                if (!type) {
                    type = datauri.substr(datauri.lastIndexOf('.') + 1);
                }

                $.get(datauri, function(ret) {
                    glviewer.addModel(ret, type);
                    glviewer.setStyle(select, style);
                    for (var i = 0; i < selectstylelist.length; i++) {
                        var sel = selectstylelist[i][0] || {};
                        var sty = selectstylelist[i][1] || {
                            "line": {}
                        }
                        glviewer.setStyle(sel, sty);
                    }
                    for (var i = 0; i < surfaces.length; i++) {
                        var sel = surfaces[i][0] || {};
                        var sty = surfaces[i][1] || {}
                        glviewer.addSurface($3Dmol.SurfaceType.VDW, sty, sel, sel);
                    }
                    for (var i = 0; i < labels.length; i++) {
                        var sel = labels[i][0] || {};
                        var sty = labels[i][1] || {}
                        glviewer.addResLabels(sel, sty);
                    }
                    // Allowing us to fire callback after viewer has added model
                    if (callback)
                        callback(glviewer);

                    glviewer.zoomTo();
                    glviewer.render();

                }, 'text');

            } else {

                if (viewerdiv.data("element")) {
                    var moldata = $("#" + viewerdiv.data("element")).val() || "";
                    var type = viewerdiv.data("type") || viewerdiv.data("datatype");

                    if (!type) {

                        console.log("Warning: No type specified for embedded viewer with moldata from " + viewerdiv.data("element") +
                            "\n assuming type 'pdb'")

                        type = 'pdb';
                    }

                    glviewer.addModel(moldata, type);
                    glviewer.setStyle(select, style);
                    for (var i = 0; i < selectstylelist.length; i++) {
                        var sel = selectstylelist[i][0] || {};
                        var sty = selectstylelist[i][1] || {
                            "line": {}
                        }
                        glviewer.setStyle(sel, sty);
                    }
                }


                if (callback)
                    callback(glviewer);

                glviewer.zoomTo();
                glviewer.render();
            }

        });
    }
});



// in an attempt to reduce memory overhead, cache all $3Dmol.Colors
// this makes things a little faster
$3Dmol.CC = {
    cache: {},
    color: function(hex) {

        if (typeof(this.cache[hex]) !== "undefined") {
            return this.cache[hex];
        } else {
            hex = this.getHex(hex);
            var c = new $3Dmol.Color(hex);
            this.cache[hex] = c;
            return c;
        }
    },
    colorTab: {
        'white': 0xFFFFFF,
        'silver': 0xC0C0C0,
        'gray': 0x808080,
        'grey': 0x808080,
        'black': 0x000000,
        'red': 0xFF0000,
        'maroon': 0x800000,
        'yellow': 0xFFFF00,
        'orange': 0xFF6600,
        'olive': 0x808000,
        'lime': 0x00FF00,
        'green': 0x008000,
        'aqua': 0x00FFFF,
        'cyan': 0x00FFFF,
        'teal': 0x008080,
        'blue': 0x0000FF,
        'navy': 0x000080,
        'fuchsia': 0xFF00FF,
        'magenta': 0xFF00FF,
        'purple': 0x800080
    },
    getHex: function(hex) {
        if (parseInt(hex))
            return parseInt(hex);

        else if (typeof(hex) === 'string') {

            return this.colorTab[hex.trim().toLowerCase()] || 0x000000;
        }

    }

};


$3Dmol['CC'] = $3Dmol.CC;
$3Dmol['CC']['color'] = $3Dmol.CC.color;



/** Return proper color for atom given style
 * @param {AtomSpec} atom
 * @param {AtomStyle} style
 * @return {$3Dmol.Color}
 */
$3Dmol.getColorFromStyle = function(atom, style) {
    var color = atom.color;
    if (typeof(style.color) != "undefined" && style.color != "spectrum")
        color = style.color;
    if (typeof(style.colorscheme) != "undefined") {
        if (typeof($3Dmol.elementColors[style.colorscheme]) != "undefined") {
            //name of builtin colorscheme
            var scheme = $3Dmol.elementColors[style.colorscheme];
            if (typeof(scheme[atom.elem]) != "undefined") {
                color = scheme[atom.elem];
            }
        } else if (typeof(style.colorscheme[atom.elem]) != 'undefined') {
            //actual color scheme provided
            color = style.colorscheme[atom.elem];
        }
    }
    var C = $3Dmol.CC.color(color);
    return C;
}

/** Preset element coloring - from individual element colors to entire mappings (e.g. '$3Dmol.elementColors.Jmol' colors atoms with Jmol stylings)
 * @struct
 */
$3Dmol.elementColors = $3Dmol.elementColors || {};

$3Dmol.elementColors.defaultColor = 0xff1493;

/** @property Jmol-like element colors*/
$3Dmol.elementColors.Jmol = {
    'H': 0xFFFFFF,
    'He': 0xD9FFFF,
    'HE': 0xD9FFFF,
    'Li': 0xCC80FF,
    'LI': 0xCC80FF,
    'B': 0xFFB5B5,
    'C': 0x909090,
    'N': 0x3050F8,
    'O': 0xFF0D0D,
    'F': 0x90E050,
    'Na': 0xAB5CF2,
    'NA': 0xAB5CF2,
    'Mg': 0x8AFF00,
    'MG': 0x8AFF00,
    'Al': 0xBFA6A6,
    'AL': 0xBFA6A6,
    'Si': 0xF0C8A0,
    'SI': 0xF0C8A0,
    'P': 0xFF8000,
    'S': 0xFFFF30,
    'Cl': 0x1FF01F,
    'CL': 0x1FF01F,
    'Ca': 0x3DFF00,
    'CA': 0x3DFF00,
    'Ti': 0xBFC2C7,
    'TI': 0xBFC2C7,
    'Cr': 0x8A99C7,
    'CR': 0x8A99C7,
    'Mn': 0x9C7AC7,
    'MN': 0x9C7AC7,
    'Fe': 0xE06633,
    'FE': 0xE06633,
    'Ni': 0x50D050,
    'NI': 0x50D050,
    'Cu': 0xC88033,
    'CU': 0xC88033,
    'Zn': 0x7D80B0,
    'ZN': 0x7D80B0,
    'Br': 0xA62929,
    'BR': 0xA62929,
    'Ag': 0xC0C0C0,
    'AG': 0xC0C0C0,
    'I': 0x940094,
    'Ba': 0x00C900,
    'BA': 0x00C900,
    'Au': 0xFFD123,
    'AU': 0xFFD123
};

/** @property rasmol-like element colors */
$3Dmol.elementColors.rasmol = {
    'H': 0xFFFFFF,
    'He': 0xFFC0CB,
    'HE': 0xFFC0CB,
    'Li': 0xB22222,
    'LI': 0xB22222,
    'B': 0x00FF00,
    'C': 0xC8C8C8,
    'N': 0x8F8FFF,
    'O': 0xF00000,
    'F': 0xDAA520,
    'Na': 0x0000FF,
    'NA': 0x0000FF,
    'Mg': 0x228B22,
    'MG': 0x228B22,
    'Al': 0x808090,
    'AL': 0x808090,
    'Si': 0xDAA520,
    'SI': 0xDAA520,
    'P': 0xFFA500,
    'S': 0xFFC832,
    'Cl': 0x00FF00,
    'CL': 0x00FF00,
    'Ca': 0x808090,
    'CA': 0x808090,
    'Ti': 0x808090,
    'TI': 0x808090,
    'Cr': 0x808090,
    'CR': 0x808090,
    'Mn': 0x808090,
    'MN': 0x808090,
    'Fe': 0xFFA500,
    'FE': 0xFFA500,
    'Ni': 0xA52A2A,
    'NI': 0xA52A2A,
    'Cu': 0xA52A2A,
    'CU': 0xA52A2A,
    'Zn': 0xA52A2A,
    'ZN': 0xA52A2A,
    'Br': 0xA52A2A,
    'BR': 0xA52A2A,
    'Ag': 0x808090,
    'AG': 0x808090,
    'I': 0xA020F0,
    'Ba': 0xFFA500,
    'BA': 0xFFA500,
    'Au': 0xDAA520,
    'AU': 0xDAA520
};

$3Dmol.elementColors.defaultColors = $3Dmol.elementColors.rasmol;

$3Dmol.elementColors.greenCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.greenCarbon['C'] = 0x00ff00;

$3Dmol.elementColors.cyanCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.cyanCarbon['C'] = 0x00ffff;

$3Dmol.elementColors.magentaCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.magentaCarbon['C'] = 0xff00ff;

$3Dmol.elementColors.yellowCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.yellowCarbon['C'] = 0xffff00;

$3Dmol.elementColors.whiteCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.whiteCarbon['C'] = 0xffffff;

$3Dmol.elementColors.orangeCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.orangeCarbon['C'] = 0xff6600;

$3Dmol.elementColors.purpleCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.purpleCarbon['C'] = 0x800080;

$3Dmol.elementColors.blueCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.blueCarbon['C'] = 0x0000ff;
//glcartoon.js
//This contains all the routines for rendering a cartoon given a set
//of atoms with assigned secondary structure

//TODO: generate normals directly in drawStrip and drawThinStrip

var $3Dmol = $3Dmol || {};


/**@typedef CartoonStyleSpec
 * @prop {string} color - solid color, may specify as 'spectrum'
 * @prop {string} style - style of cartoon rendering (currently just default and trace)
 */

/**
 * @ignore
 * @param {$3Dmol.Object3D} group
 * @param {AtomSpec} atomlist
 * @param {$3Dmol.Gradient} gradientscheme
 */
$3Dmol.drawCartoon = (function() {

    var axisDIV = 5; // 3 still gives acceptable quality
    var strandDIV = 6;
    var nucleicAcidStrandDIV = 4;
    var tubeDIV = 8;
    var coilWidth = 0.3;
    var helixSheetWidth = 1.3;
    var nucleicAcidWidth = 0.8;
    var defaultThickness = 0.4;

    // helper functions

    // Catmull-Rom subdivision
    var subdivide = function(_points, DIV) { // points as Vector3
        var ret = [];
        var points = _points;
        points = []; // Smoothing test
        points.push(_points[0]);

        var i, lim, size;
        var p0, p1, p2, p3, v0, v1;

        for (i = 1, lim = _points.length - 1; i < lim; i++) {
            p1 = _points[i];
            p2 = _points[i + 1];
            if (p1.smoothen)
                points.push(new $3Dmol.Vector3((p1.x + p2.x) / 2, (p1.y + p2.y) / 2, (p1.z + p2.z) / 2));
            else
                points.push(p1);
        }
        points.push(_points[_points.length - 1]);


        for (i = -1, size = points.length; i <= size - 3; i++) {
            p0 = points[(i === -1) ? 0 : i];
            p1 = points[i + 1];
            p2 = points[i + 2];
            p3 = points[(i === size - 3) ? size - 1 : i + 3];
            v0 = new $3Dmol.Vector3().subVectors(p2, p0).multiplyScalar(0.5);
            v1 = new $3Dmol.Vector3().subVectors(p3, p1).multiplyScalar(0.5);

            for (var j = 0; j < DIV; j++) {
                var t = 1.0 / DIV * j;
                var x = p1.x + t * v0.x + t * t *
                    (-3 * p1.x + 3 * p2.x - 2 * v0.x - v1.x) + t * t * t *
                    (2 * p1.x - 2 * p2.x + v0.x + v1.x);
                var y = p1.y + t * v0.y + t * t *
                    (-3 * p1.y + 3 * p2.y - 2 * v0.y - v1.y) + t * t * t *
                    (2 * p1.y - 2 * p2.y + v0.y + v1.y);
                var z = p1.z + t * v0.z + t * t *
                    (-3 * p1.z + 3 * p2.z - 2 * v0.z - v1.z) + t * t * t *
                    (2 * p1.z - 2 * p2.z + v0.z + v1.z);

                var pt = new $3Dmol.Vector3(x, y, z);

                var atomIndex = Math.floor((ret.length + 2) / DIV);

                if (_points[atomIndex] !== undefined && _points[atomIndex].atom !== undefined)
                    pt.atom = _points[atomIndex].atom;

                ret.push(pt);
            }
        }
        ret.push(points[points.length - 1]);
        return ret;
    };

    var drawThinStrip = function(group, p1, p2, colors, div) {

        var geo = new $3Dmol.Geometry(true);
        var offset, vertoffset;
        var color;


        for (var i = 0, lim = p1.length; i < lim; i++) {

            color = $3Dmol.CC.color(colors[Math.round((i - 1) / div)]);

            geoGroup = geo.updateGeoGroup(2);
            var vertexArray = geoGroup.vertexArray;
            var colorArray = geoGroup.colorArray;
            var faceArray = geoGroup.faceArray;
            offset = geoGroup.vertices;
            vertoffset = offset * 3;

            vertexArray[vertoffset] = p1[i].x;
            vertexArray[vertoffset + 1] = p1[i].y;
            vertexArray[vertoffset + 2] = p1[i].z;

            vertexArray[vertoffset + 3] = p2[i].x;
            vertexArray[vertoffset + 4] = p2[i].y;
            vertexArray[vertoffset + 5] = p2[i].z;

            for (var j = 0; j < 6; ++j) {
                colorArray[vertoffset + 3 * j] = color.r;
                colorArray[vertoffset + 1 + 3 * j] = color.g;
                colorArray[vertoffset + 2 + 3 * j] = color.b;
            }

            if (i > 0) {
                var faces = [offset, offset + 1, offset - 1, offset - 2];
                var faceoffset = geoGroup.faceidx;

                faceArray[faceoffset] = faces[0];
                faceArray[faceoffset + 1] = faces[1];
                faceArray[faceoffset + 2] = faces[3];
                faceArray[faceoffset + 3] = faces[1];
                faceArray[faceoffset + 4] = faces[2];
                faceArray[faceoffset + 5] = faces[3];

                geoGroup.faceidx += 6;
            }

            geoGroup.vertices += 2;
        }

        geo.initTypedArrays();
        geo.setUpNormals();

        var material = new $3Dmol.MeshLambertMaterial();
        material.vertexColors = $3Dmol.FaceColors;
        material.side = $3Dmol.DoubleSide;
        var mesh = new $3Dmol.Mesh(geo, material);
        group.add(mesh);
    };

    var drawStrip = function(group, p1, p2, colors, div, thickness) {
        if ((p1.length) < 2)
            return;
        div = div || axisDIV;
        p1 = subdivide(p1, div);
        p2 = subdivide(p2, div);
        if (!thickness)
            return drawThinStrip(group, p1, p2, colors, div);

        var geo = new $3Dmol.Geometry(true);

        //var vs = geo.vertices, fs = geo.faces;
        var vs = [],
            fs = [];
        var axis, p1v, p2v, a1v, a2v;

        var faces = [
            [0, 2, -6, -8],
            [-4, -2, 6, 4],
            [7, -1, -5, 3],
            [-3, 5, 1, -7]
        ];

        var offset, vertoffset, faceoffset;
        var color;
        var currentAtom, lastAtom;
        var i, lim, j;
        var face1, face2, face3;
        var geoGroup;

        for (i = 0, lim = p1.length; i < lim; i++) {

            color = $3Dmol.CC.color(colors[Math.round((i - 1) / div)]);

            vs.push(p1v = p1[i]); // 0
            vs.push(p1v); // 1
            vs.push(p2v = p2[i]); // 2
            vs.push(p2v); // 3
            if (i < lim - 1) {
                var toNext = p1[i + 1].clone().sub(p1[i]);
                var toSide = p2[i].clone().sub(p1[i]);
                axis = toSide.cross(toNext).normalize().multiplyScalar(
                    thickness);
            }
            vs.push(a1v = p1[i].clone().add(axis)); // 4
            vs.push(a1v); // 5
            vs.push(a2v = p2[i].clone().add(axis)); // 6
            vs.push(a2v); // 7

            if (p1v.atom !== undefined)
                currentAtom = p1v.atom;

            geoGroup = geo.updateGeoGroup(8);
            var vertexArray = geoGroup.vertexArray;
            var colorArray = geoGroup.colorArray;
            var faceArray = geoGroup.faceArray;
            offset = geoGroup.vertices;
            vertoffset = offset * 3;

            vertexArray[vertoffset] = p1v.x;
            vertexArray[vertoffset + 1] = p1v.y;
            vertexArray[vertoffset + 2] = p1v.z;
            vertexArray[vertoffset + 3] = p1v.x;
            vertexArray[vertoffset + 4] = p1v.y;
            vertexArray[vertoffset + 5] = p1v.z;
            vertexArray[vertoffset + 6] = p2v.x;
            vertexArray[vertoffset + 7] = p2v.y;
            vertexArray[vertoffset + 8] = p2v.z;
            vertexArray[vertoffset + 9] = p2v.x;
            vertexArray[vertoffset + 10] = p2v.y;
            vertexArray[vertoffset + 11] = p2v.z;
            vertexArray[vertoffset + 12] = a1v.x;
            vertexArray[vertoffset + 13] = a1v.y;
            vertexArray[vertoffset + 14] = a1v.z;
            vertexArray[vertoffset + 15] = a1v.x;
            vertexArray[vertoffset + 16] = a1v.y;
            vertexArray[vertoffset + 17] = a1v.z;
            vertexArray[vertoffset + 18] = a2v.x;
            vertexArray[vertoffset + 19] = a2v.y;
            vertexArray[vertoffset + 20] = a2v.z;
            vertexArray[vertoffset + 21] = a2v.x;
            vertexArray[vertoffset + 22] = a2v.y;
            vertexArray[vertoffset + 23] = a2v.z;

            for (j = 0; j < 8; ++j) {
                colorArray[vertoffset + 3 * j] = color.r;
                colorArray[vertoffset + 1 + 3 * j] = color.g;
                colorArray[vertoffset + 2 + 3 * j] = color.b;
            }

            if (i > 0) {

                //both points have distinct atoms
                var diffAtoms = ((lastAtom !== undefined && currentAtom !== undefined) && lastAtom.serial !== currentAtom.serial);

                for (j = 0; j < 4; j++) {

                    var face = [offset + faces[j][0], offset + faces[j][1], offset + faces[j][2], offset + faces[j][3]];

                    faceoffset = geoGroup.faceidx;

                    faceArray[faceoffset] = face[0];
                    faceArray[faceoffset + 1] = face[1];
                    faceArray[faceoffset + 2] = face[3];
                    faceArray[faceoffset + 3] = face[1];
                    faceArray[faceoffset + 4] = face[2];
                    faceArray[faceoffset + 5] = face[3];

                    geoGroup.faceidx += 6;

                    if (currentAtom.clickable || lastAtom.clickable) {

                        var p1a = vs[face[3]].clone(),
                            p1b = vs[face[0]].clone(),
                            p2a = vs[face[2]].clone(),
                            p2b = vs[face[1]].clone();

                        p1a.atom = vs[face[3]].atom || null; //should be same
                        p2a.atom = vs[face[2]].atom || null;


                        p1b.atom = vs[face[0]].atom || null; //should be same                      
                        p2b.atom = vs[face[1]].atom || null;

                        if (diffAtoms) {
                            var m1 = p1a.clone().add(p1b).multiplyScalar(0.5);
                            var m2 = p2a.clone().add(p2b).multiplyScalar(0.5);
                            var m = p1a.clone().add(p2b).multiplyScalar(0.5);

                            if (j % 2 === 0) {
                                if (lastAtom.clickable) {
                                    face1 = new $3Dmol.Triangle(m1, m, p1a);
                                    face2 = new $3Dmol.Triangle(m2, p2a, m);
                                    face3 = new $3Dmol.Triangle(m, p2a, p1a);
                                    lastAtom.intersectionShape.triangle.push(face1);
                                    lastAtom.intersectionShape.triangle.push(face2);
                                    lastAtom.intersectionShape.triangle.push(face3);
                                }

                                if (currentAtom.clickable) {
                                    face1 = new $3Dmol.Triangle(p1b, p2b, m);
                                    face2 = new $3Dmol.Triangle(p2b, m2, m);
                                    face3 = new $3Dmol.Triangle(p1b, m, m1);
                                    currentAtom.intersectionShape.triangle.push(face1);
                                    currentAtom.intersectionShape.triangle.push(face2);
                                    currentAtom.intersectionShape.triangle.push(face3);
                                }
                            } else {
                                if (currentAtom.clickable) {
                                    face1 = new $3Dmol.Triangle(m1, m, p1a);
                                    face2 = new $3Dmol.Triangle(m2, p2a, m);
                                    face3 = new $3Dmol.Triangle(m, p2a, p1a);
                                    currentAtom.intersectionShape.triangle.push(face1);
                                    currentAtom.intersectionShape.triangle.push(face2);
                                    currentAtom.intersectionShape.triangle.push(face3);
                                }

                                if (lastAtom.clickable) {
                                    face1 = new $3Dmol.Triangle(p1b, p2b, m);
                                    face2 = new $3Dmol.Triangle(p2b, m2, m);
                                    face3 = new $3Dmol.Triangle(p1b, m, m1);
                                    lastAtom.intersectionShape.triangle.push(face1);
                                    lastAtom.intersectionShape.triangle.push(face2);
                                    lastAtom.intersectionShape.triangle.push(face3);
                                }
                            }

                        }

                        //face for single atom
                        else if (currentAtom.clickable) {
                            face1 = new $3Dmol.Triangle(p1b, p2b, p1a);
                            face2 = new $3Dmol.Triangle(p2b, p2a, p1a);
                            currentAtom.intersectionShape.triangle.push(face1);
                            currentAtom.intersectionShape.triangle.push(face2);
                        }

                    }

                }
            }

            geoGroup.vertices += 8;
            lastAtom = currentAtom;
        }


        var vsize = vs.length - 8; // Cap

        geoGroup = geo.updateGeoGroup(8);
        var vertexArray = geoGroup.vertexArray;
        var colorArray = geoGroup.colorArray;
        var faceArray = geoGroup.faceArray;
        offset = geoGroup.vertices;
        vertoffset = offset * 3;
        faceoffset = geoGroup.faceidx;

        for (i = 0; i < 4; i++) {
            vs.push(vs[i * 2]);
            vs.push(vs[vsize + i * 2]);

            var v1 = vs[i * 2],
                v2 = vs[vsize + i * 2];

            vertexArray[vertoffset + 6 * i] = v1.x;
            vertexArray[vertoffset + 1 + 6 * i] = v1.y;
            vertexArray[vertoffset + 2 + 6 * i] = v1.z;
            vertexArray[vertoffset + 3 + 6 * i] = v2.x;
            vertexArray[vertoffset + 4 + 6 * i] = v2.y;
            vertexArray[vertoffset + 5 + 6 * i] = v2.z;

            colorArray[vertoffset + 6 * i] = color.r;
            colorArray[vertoffset + 1 + 6 * i] = color.g;
            colorArray[vertoffset + 2 + 6 * i] = color.b;
            colorArray[vertoffset + 3 + 6 * i] = color.r;
            colorArray[vertoffset + 4 + 6 * i] = color.g;
            colorArray[vertoffset + 5 + 6 * i] = color.b;

        }

        vsize += 8;

        face1 = [offset, offset + 2, offset + 6, offset + 4];
        face2 = [offset + 1, offset + 5, offset + 7, offset + 3];

        faceArray[faceoffset] = face1[0];
        faceArray[faceoffset + 1] = face1[1];
        faceArray[faceoffset + 2] = face1[3];
        faceArray[faceoffset + 3] = face1[1];
        faceArray[faceoffset + 4] = face1[2];
        faceArray[faceoffset + 5] = face1[3];
        faceArray[faceoffset + 6] = face2[0];
        faceArray[faceoffset + 7] = face2[1];
        faceArray[faceoffset + 8] = face2[3];
        faceArray[faceoffset + 9] = face2[1];
        faceArray[faceoffset + 10] = face2[2];
        faceArray[faceoffset + 11] = face2[3];

        geoGroup.faceidx += 12;
        geoGroup.vertices += 8;

        //TODO: Add intersection planes for caps

        geo.initTypedArrays();
        geo.setUpNormals();

        var material = new $3Dmol.MeshLambertMaterial();
        material.vertexColors = $3Dmol.FaceColors;
        material.side = $3Dmol.DoubleSide;
        var mesh = new $3Dmol.Mesh(geo, material);
        group.add(mesh);

    };

    //TODO: Need to update this (will we ever use this?)
    var drawSmoothCurve = function(group, _points, width, colors, div) {
        if (_points.length === 0)
            return;

        div = (div === undefined) ? 5 : div;

        var geo = new $3Dmol.Geometry();
        var points = subdivide(_points, div);
        /*
        for ( var i = 0; i < points.length; i++) {
            geo.vertices.push(points[i]);
            geo.colors.push($3Dmol.color(colors[(i == 0) ? 0 : Math.round((i - 1)
                    / div)]));
        }
                */
        var lineMaterial = new $3Dmol.LineBasicMaterial({
            linewidth: width
        });
        lineMaterial.vertexColors = true;
        var line = new $3Dmol.Line(geo, lineMaterial);
        line.type = $3Dmol.LineStrip;
        group.add(line);
    };

    var drawStrand = function(group, atomlist, num, div, fill, coilWidth,
        helixSheetWidth, doNotSmoothen, gradientscheme) {
        num = num || strandDIV;
        div = div || axisDIV;
        doNotSmoothen = !!(doNotSmoothen);
        var points = [];
        var i, j, k;
        for (k = 0; k < num; k++)
            points[k] = [];
        var colors = [];
        var currentChain, currentReschain, currentResi, currentCA, currentAtom;
        var prevCO = null,
            ss = null,
            ssborder = false;
        var tracegeo = null;
        var atomcolor;
        var thickness = defaultThickness;

        for (i in atomlist) {
            var atom = atomlist[i];
            if (atom === undefined)
                continue;

            if ((atom.atom == 'O' || atom.atom == 'CA') && !atom.hetflag) {

                //get style
                var cstyle = atom.style.cartoon;
                if (atom.atom == 'CA') {
                    //set atom color
                    var prevatomcolor = atomcolor;
                    atomcolor = $3Dmol.getColorFromStyle(atom, cstyle).getHex();
                    if (gradientscheme) {
                        atomcolor = gradientscheme.valueToHex(atom.resi, gradientscheme.range());
                    }

                    if ($.isNumeric(cstyle.thickness)) {
                        thickness = cstyle.thickness;
                    } else {
                        thickness = defaultThickness;
                    }

                    if (cstyle.style == 'trace') { //trace draws every pair of atoms

                        //trace draws straight lines between CAs
                        if (currentChain != atom.chain || currentResi + 1 != atom.resi) {
                            //do not draw connections between chains; ignore differences
                            //in reschain to properly support CA only files
                            if (!tracegeo) tracegeo = new $3Dmol.Geometry(true);

                        } else if (currentCA) {
                            //if both atoms same color, draw single cylinder
                            if (prevatomcolor == atomcolor) {
                                var C = $3Dmol.CC.color(atomcolor);
                                $3Dmol.GLDraw.drawCylinder(tracegeo, currentCA, atom, thickness, C, true, true);
                            } else {
                                var mp = new $3Dmol.Vector3().addVectors(currentCA, atom).multiplyScalar(0.5);
                                var C1 = $3Dmol.CC.color(prevatomcolor);
                                var C2 = $3Dmol.CC.color(atomcolor);
                                $3Dmol.GLDraw.drawCylinder(tracegeo, currentCA, mp, thickness, C1, true, false);
                                $3Dmol.GLDraw.drawCylinder(tracegeo, mp, atom, thickness, C2, false, true);
                            }
                        }
                    } else if (currentChain != atom.chain || currentResi + 1 != atom.resi || currentReschain != atom.reschain) {
                        //end of chain of connected residues, draw accumulated points
                        for (j = 0; !thickness && j < num; j++)
                            drawSmoothCurve(group, points[j], 1, colors, div);
                        if (fill)
                            drawStrip(group, points[0], points[num - 1],
                                colors, div, thickness);

                        points = [];
                        for (k = 0; k < num; k++)
                            points[k] = [];
                        colors = [];
                        prevCO = null;
                        ss = null;
                        ssborder = false;
                    }

                    currentCA = new $3Dmol.Vector3(atom.x, atom.y, atom.z);
                    currentAtom = atom;
                    currentChain = atom.chain;
                    currentReschain = atom.reschain;
                    currentResi = atom.resi;
                    ss = atom.ss;
                    ssborder = atom.ssbegin || atom.ssend;

                    colors.push(atomcolor);

                    if (atom.clickable === true && (atom.intersectionShape === undefined || atom.intersectionShape.triangle === undefined))
                        atom.intersectionShape = {
                            sphere: null,
                            cylinder: [],
                            line: [],
                            triangle: []
                        };

                } else if (cstyle.style != 'trace') { // O, unneeded for trace style
                    //the oxygen atom is used to orient the direction of the draw strip
                    var O = new $3Dmol.Vector3(atom.x, atom.y, atom.z);
                    O.sub(currentCA);
                    O.normalize(); // can be omitted for performance
                    O.multiplyScalar((ss == 'c') ? coilWidth : helixSheetWidth);
                    if (prevCO !== null && O.dot(prevCO) < 0)
                        O.negate();
                    prevCO = O;
                    for (j = 0; j < num; j++) {
                        var delta = -1 + 2 / (num - 1) * j;
                        var v = new $3Dmol.Vector3(currentCA.x + prevCO.x * delta,
                            currentCA.y + prevCO.y * delta, currentCA.z + prevCO.z * delta);
                        v.atom = currentAtom;
                        if (!doNotSmoothen && ss == 's')
                            v.smoothen = true;
                        points[j].push(v);
                    }
                }
            }
        }
        for (j = 0; !thickness && j < num; j++)
            drawSmoothCurve(group, points[j], 1, colors, div);
        if (fill)
            drawStrip(group, points[0], points[num - 1], colors, div, thickness);

        if (tracegeo) {
            var material = new $3Dmol.MeshLambertMaterial();
            material.vertexColors = $3Dmol.FaceColors;
            material.side = $3Dmol.DoubleSide;
            var mesh = new $3Dmol.Mesh(tracegeo, material);
            group.add(mesh);
        }
    };

    // actual function call
    var drawCartoon = function(group, atomlist, gradientscheme) {

        drawStrand(group, atomlist, 2, undefined, true, coilWidth, helixSheetWidth,
            false, gradientscheme);
    };

    return drawCartoon;
})();
//

var $3Dmol = $3Dmol || {};

/**
 * Lower level utilities for creating WebGL shape geometries.
 * These are not intended for general consumption.
 * @namespace $3Dmol.GLDraw
 */
$3Dmol.GLDraw = (function() {

    var draw = {}; // object for exporting functions

    // Rotation matrix around z and x axis -
    // according to y basis vector
    // TODO: Try to optimize this (square roots?)
    var getRotationMatrix = function() {

        var d = new $3Dmol.Vector3();
        // var rot = new Float32Array(9);

        return function(dir) {

            d.set(dir[0], dir[1], dir[2]);

            var dx = d.x,
                dy = d.y,
                dz = d.z;

            var dxy = Math.sqrt(dx * dx + dy * dy);
            var dxz, dyz;

            var sinA, cosA, sinB, cosB, sinC, cosC;

            // about z axis - Phi
            if (dxy < 0.0001) {
                sinA = 0;
                cosA = 1;
            } else {
                sinA = -dx / dxy;
                cosA = dy / dxy;
            }

            // recast dy in terms of new axes - z is the same

            dy = -sinA * dx + cosA * dy;
            dyz = Math.sqrt(dy * dy + dz * dz);

            // about new x axis - Theta

            if (dyz < 0.0001) {
                sinB = 0;
                cosB = 1;
            } else {
                sinB = dz / dyz;
                cosB = dy / dyz;
            }

            var rot = new Float32Array(9);
            rot[0] = cosA;
            rot[1] = sinA;
            rot[2] = 0;
            rot[3] = -sinA * cosB;
            rot[4] = cosA * cosB;
            rot[5] = sinB;
            rot[6] = sinA * sinB;
            rot[7] = -cosA * sinB;
            rot[8] = cosB;

            return rot;

        };

    }();

    // Ortho normal vectors for cylinder radius/ sphere cap equator and cones
    // Direction is j basis (0,1,0)
    var basisVectors = function() {

        var ret = {
            vertices: [],
            norms: []
        };

        var nvecs = [];

        var subdivisions = 4; // including the initial 2, eg. 4 => 16 subintervals
        var N = Math.pow(2, subdivisions); // eg. 2**4 = 16 subintervals in total
        var i = 2; // start with 2 subdivisions already done
        var M = Math.pow(2, i); // 4
        var spacing = N / M; // 16/4 = 4; if there were 5 subdivs, then 32/4 = 8.
        var j;

        nvecs[0] = new $3Dmol.Vector3(-1, 0, 0);
        nvecs[spacing] = new $3Dmol.Vector3(0, 0, 1);
        nvecs[spacing * 2] = new $3Dmol.Vector3(1, 0, 0);
        nvecs[spacing * 3] = new $3Dmol.Vector3(0, 0, -1);

        for (i = 3; i <= subdivisions; i++) {
            // eg. i=3, we need to add 2**(3-1) = 4 new vecs. Call it M.
            // their spacing is N/M, eg. N=16, M=4, N/M=4; M=8, N/M=2.
            // they start off at half this spacing
            // and are equal to the average of the two vectors on either side
            M = Math.pow(2, (i - 1));
            spacing = N / M;
            for (j = 0; j < (M - 1); j++) {
                nvecs[spacing / 2 + j * spacing] = nvecs[j * spacing].clone().add(nvecs[(j + 1) * spacing]).normalize();
            }
            // treat the last one specially so it wraps around to zero
            j = M - 1;
            nvecs[spacing / 2 + j * spacing] = nvecs[j * spacing].clone().add(nvecs[0]).normalize();
        }

        /*
         * nvecs[0] = new $3Dmol.Vector3(-1,0,0); nvecs[1] = new
         * $3Dmol.Vector3(0,0,1); nvecs[2] = new $3Dmol.Vector3(1,0,0);
         * nvecs[3] = new $3Dmol.Vector3(0,0,-1);
         */
        return nvecs;

    }();

    // memoize capped cylinder for given radius
    var cylVertexCache = {

        cache: {},

        getVerticesForRadius: function(radius) {

            if (this.cache[radius] !== undefined)
                return this.cache[radius];

            var dir = new $3Dmol.Vector3(0, 1, 0);
            var w = basisVectors.length;
            var nvecs = [],
                norms = [];
            var n;

            for (var i = 0; i < w; i++) {
                // bottom
                nvecs.push(basisVectors[i].clone().multiplyScalar(radius));
                // top
                nvecs.push(basisVectors[i].clone().multiplyScalar(radius));

                // NOTE: this normal is used for constructing sphere caps -
                // cylinder normals taken care of in drawCylinder
                n = basisVectors[i].clone().normalize();
                norms.push(n);
                norms.push(n);
            }

            // norms[0]

            var verticesRows = [];

            // Require that heightSegments is even and >= 2
            // Equator points at h/2 (theta = pi/2)
            // (repeated) polar points at 0 and h (theta = 0 and pi)
            var heightSegments = 10,
                widthSegments = w; // 16 or however many
            // basis vectors for
            // cylinder

            if (heightSegments % 2 !== 0 || !heightSegments) {
                console.error("heightSegments must be even");

                return null;
            }

            var phiStart = 0;
            var phiLength = Math.PI * 2;

            var thetaStart = 0;
            var thetaLength = Math.PI;

            var x, y;
            var polar = false,
                equator = false;

            for (y = 0; y <= heightSegments; y++) {

                polar = (y === 0 || y === heightSegments) ? true : false;
                equator = (y === heightSegments / 2) ? true : false;

                var verticesRow = [],
                    toRow = [];

                for (x = 0; x <= widthSegments; x++) {

                    // Two vertices rows for equator pointing to previously
                    // constructed cyl points
                    if (equator) {
                        var xi = (x < widthSegments) ? 2 * x : 0;
                        toRow.push(xi + 1);
                        verticesRow.push(xi);

                        continue;
                    }

                    var u = x / widthSegments;
                    var v = y / heightSegments;

                    // Only push first polar point

                    if (!polar || x === 0) {

                        if (x < widthSegments) {
                            var vertex = new $3Dmol.Vector3();
                            vertex.x = -radius * Math.cos(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
                            vertex.y = radius * Math.cos(thetaStart + v * thetaLength);
                            vertex.z = radius * Math.sin(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);

                            if (Math.abs(vertex.x) < 1e-5)
                                vertex.x = 0;
                            if (Math.abs(vertex.y) < 1e-5)
                                vertex.y = 0;
                            if (Math.abs(vertex.z) < 1e-5)
                                vertex.z = 0;

                            n = new $3Dmol.Vector3(vertex.x, vertex.y, vertex.z);
                            n.normalize();

                            nvecs.push(vertex);
                            norms.push(n);

                            verticesRow.push(nvecs.length - 1);
                        }

                        // last point is just the first point for this row
                        else {
                            verticesRow.push(nvecs.length - widthSegments);
                        }

                    }

                    // x > 0; index to already added point
                    else if (polar)
                        verticesRow.push(nvecs.length - 1);

                }

                // extra equator row
                if (equator)
                    verticesRows.push(toRow);

                verticesRows.push(verticesRow);

            }

            var obj = {
                vertices: nvecs,
                normals: norms,
                verticesRows: verticesRows,
                w: widthSegments,
                h: heightSegments
            };

            this.cache[radius] = obj;

            return obj;

        }
    };

    // creates a cylinder
    var drawnC = 0;

    /** Create a cylinder 
     * @function $3Dmol.GLDraw.drawCylinder
     * @param {geometry}
     *            geo
     * @param {Point}
     *            from
     * @param {Point}
     *            to
     * @param {float}
     *            radius
     * @param {$3Dmol.Color}
     *            color
     * @param {boolean} fromCap
     * @param {boolean} toCap
     *
     * */
    draw.drawCylinder = function(geo, from, to, radius, color, fromCap, toCap) {
        if (!from || !to)
            return;
        drawnC++;
        // vertices
        var drawcaps = fromCap || toCap;
        color = color || {
            r: 0,
            g: 0,
            b: 0
        };

        /** @type {Array.<number>} */
        var dir = [to.x, to.y, to.z];
        dir[0] -= from.x;
        dir[1] -= from.y;
        dir[2] -= from.z;

        var e = getRotationMatrix(dir);
        // get orthonormal vectors from cache
        // TODO: Will have orient with model view matrix according to direction
        var vobj = cylVertexCache.getVerticesForRadius(radius);

        // w (n) corresponds to the number of orthonormal vectors for cylinder
        // (default 16)
        var n = vobj.w,
            h = vobj.h;
        var w = n;
        // get orthonormal vector
        var n_verts = (drawcaps) ? h * n + 2 : 2 * n;

        var geoGroup = geo.updateGeoGroup(n_verts);

        var vertices = vobj.vertices,
            normals = vobj.normals,
            verticesRows = vobj.verticesRows;
        var toRow = verticesRows[h / 2],
            fromRow = verticesRows[h / 2 + 1];

        var start = geoGroup.vertices;
        var offset, faceoffset;
        var i, x, y, z;

        var vertexArray = geoGroup.vertexArray;
        var normalArray = geoGroup.normalArray;
        var colorArray = geoGroup.colorArray;
        var faceArray = geoGroup.faceArray;
        // add vertices, opposing vertices paired together
        for (i = 0; i < n; ++i) {

            var vi = 2 * i;

            x = e[0] * vertices[vi].x + e[3] * vertices[vi].y + e[6] * vertices[vi].z;
            y = e[1] * vertices[vi].x + e[4] * vertices[vi].y + e[7] * vertices[vi].z;
            z = e[5] * vertices[vi].y + e[8] * vertices[vi].z;

            // var xn = x/radius, yn = y/radius, zn = z/radius;

            offset = 3 * (start + vi);
            faceoffset = geoGroup.faceidx;

            // from
            vertexArray[offset] = x + from.x;
            vertexArray[offset + 1] = y + from.y;
            vertexArray[offset + 2] = z + from.z;
            // to
            vertexArray[offset + 3] = x + to.x;
            vertexArray[offset + 4] = y + to.y;
            vertexArray[offset + 5] = z + to.z;

            // normals
            normalArray[offset] = x;
            normalArray[offset + 3] = x;
            normalArray[offset + 1] = y;
            normalArray[offset + 4] = y;
            normalArray[offset + 2] = z;
            normalArray[offset + 5] = z;

            // colors
            colorArray[offset] = color.r;
            colorArray[offset + 3] = color.r;
            colorArray[offset + 1] = color.g;
            colorArray[offset + 4] = color.g;
            colorArray[offset + 2] = color.b;
            colorArray[offset + 5] = color.b;

            // faces
            // 0 - 2 - 1
            faceArray[faceoffset] = fromRow[i] + start;
            faceArray[faceoffset + 1] = fromRow[i + 1] + start;
            faceArray[faceoffset + 2] = toRow[i] + start;
            // 1 - 2 - 3
            faceArray[faceoffset + 3] = toRow[i] + start;
            faceArray[faceoffset + 4] = fromRow[i + 1] + start;
            faceArray[faceoffset + 5] = toRow[i + 1] + start;

            geoGroup.faceidx += 6;

        }

        // SPHERE CAPS

        if (drawcaps) {

            // h - sphere rows, verticesRows.length - 2
            var ystart = (toCap) ? 0 : h / 2;
            var yend = (fromCap) ? h + 1 : h / 2 + 1;

            var v1, v2, v3, v4, x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, nx1, nx2, nx3, nx4, ny1, ny2, ny3, ny4, nz1, nz2, nz3, nz4, v1offset, v2offset, v3offset, v4offset;

            for (y = ystart; y < yend; y++) {
                if (y === h / 2)
                    continue;
                // n number of points for each level (verticesRows[i].length -
                // 1)
                var cap = (y <= h / 2) ? to : from;

                for (x = 0; x < n; x++) {

                    faceoffset = geoGroup.faceidx;

                    v1 = verticesRows[y][x + 1];
                    v1offset = (v1 + start) * 3;
                    v2 = verticesRows[y][x];
                    v2offset = (v2 + start) * 3;
                    v3 = verticesRows[y + 1][x];
                    v3offset = (v3 + start) * 3;
                    v4 = verticesRows[y + 1][x + 1];
                    v4offset = (v4 + start) * 3;

                    // rotate sphere vectors
                    x1 = e[0] * vertices[v1].x + e[3] * vertices[v1].y + e[6] * vertices[v1].z;
                    x2 = e[0] * vertices[v2].x + e[3] * vertices[v2].y + e[6] * vertices[v2].z;
                    x3 = e[0] * vertices[v3].x + e[3] * vertices[v3].y + e[6] * vertices[v3].z;
                    x4 = e[0] * vertices[v4].x + e[3] * vertices[v4].y + e[6] * vertices[v4].z;

                    y1 = e[1] * vertices[v1].x + e[4] * vertices[v1].y + e[7] * vertices[v1].z;
                    y2 = e[1] * vertices[v2].x + e[4] * vertices[v2].y + e[7] * vertices[v2].z;
                    y3 = e[1] * vertices[v3].x + e[4] * vertices[v3].y + e[7] * vertices[v3].z;
                    y4 = e[1] * vertices[v4].x + e[4] * vertices[v4].y + e[7] * vertices[v4].z;

                    z1 = e[5] * vertices[v1].y + e[8] * vertices[v1].z;
                    z2 = e[5] * vertices[v2].y + e[8] * vertices[v2].z;
                    z3 = e[5] * vertices[v3].y + e[8] * vertices[v3].z;
                    z4 = e[5] * vertices[v4].y + e[8] * vertices[v4].z;

                    vertexArray[v1offset] = x1 + cap.x;
                    vertexArray[v2offset] = x2 + cap.x;
                    vertexArray[v3offset] = x3 + cap.x;
                    vertexArray[v4offset] = x4 + cap.x;

                    vertexArray[v1offset + 1] = y1 + cap.y;
                    vertexArray[v2offset + 1] = y2 + cap.y;
                    vertexArray[v3offset + 1] = y3 + cap.y;
                    vertexArray[v4offset + 1] = y4 + cap.y;

                    vertexArray[v1offset + 2] = z1 + cap.z;
                    vertexArray[v2offset + 2] = z2 + cap.z;
                    vertexArray[v3offset + 2] = z3 + cap.z;
                    vertexArray[v4offset + 2] = z4 + cap.z;

                    colorArray[v1offset] = color.r;
                    colorArray[v2offset] = color.r;
                    colorArray[v3offset] = color.r;
                    colorArray[v4offset] = color.r;

                    colorArray[v1offset + 1] = color.g;
                    colorArray[v2offset + 1] = color.g;
                    colorArray[v3offset + 1] = color.g;
                    colorArray[v4offset + 1] = color.g;

                    colorArray[v1offset + 2] = color.b;
                    colorArray[v2offset + 2] = color.b;
                    colorArray[v3offset + 2] = color.b;
                    colorArray[v4offset + 2] = color.b;

                    nx1 = e[0] * normals[v1].x + e[3] * normals[v1].y + e[6] * normals[v1].z;
                    nx2 = e[0] * normals[v2].x + e[3] * normals[v2].y + e[6] * normals[v2].z;
                    nx3 = e[0] * normals[v3].x + e[3] * normals[v3].y + e[6] * normals[v3].z;
                    nx4 = e[0] * normals[v4].x + e[3] * normals[v4].y + e[6] * normals[v4].z;

                    ny1 = e[1] * normals[v1].x + e[4] * normals[v1].y + e[7] * normals[v1].z;
                    ny2 = e[1] * normals[v2].x + e[4] * normals[v2].y + e[7] * normals[v2].z;
                    ny3 = e[1] * normals[v3].x + e[4] * normals[v3].y + e[7] * normals[v3].z;
                    ny4 = e[1] * normals[v4].x + e[4] * normals[v4].y + e[7] * normals[v4].z;

                    nz1 = e[5] * normals[v1].y + e[8] * normals[v1].z;
                    nz2 = e[5] * normals[v2].y + e[8] * normals[v2].z;
                    nz3 = e[5] * normals[v3].y + e[8] * normals[v3].z;
                    nz4 = e[5] * normals[v4].y + e[8] * normals[v4].z;

                    // if (Math.abs(vobj.sphereVertices[v1].y) === radius) {
                    if (y === 0) {
                        // face = [v1, v3, v4];
                        // norm = [n1, n3, n4];

                        normalArray[v1offset] = nx1;
                        normalArray[v3offset] = nx3;
                        normalArray[v4offset] = nx4;
                        normalArray[v1offset + 1] = ny1;
                        normalArray[v3offset + 1] = ny3;
                        normalArray[v4offset + 1] = ny4;
                        normalArray[v1offset + 2] = nz1;
                        normalArray[v3offset + 2] = nz3;
                        normalArray[v4offset + 2] = nz4;

                        faceArray[faceoffset] = v1 + start;
                        faceArray[faceoffset + 1] = v3 + start;
                        faceArray[faceoffset + 2] = v4 + start;

                        geoGroup.faceidx += 3;

                    }

                    // else if (Math.abs(vobj.sphereVertices[v3].y) === radius)
                    // {
                    else if (y === yend - 1) {
                        // face = [v1, v2, v3];
                        // norm = [n1, n2, n3];

                        normalArray[v1offset] = nx1;
                        normalArray[v2offset] = nx2;
                        normalArray[v3offset] = nx3;
                        normalArray[v1offset + 1] = ny1;
                        normalArray[v2offset + 1] = ny2;
                        normalArray[v3offset + 1] = ny3;
                        normalArray[v1offset + 2] = nz1;
                        normalArray[v2offset + 2] = nz2;
                        normalArray[v3offset + 2] = nz3;

                        faceArray[faceoffset] = v1 + start;
                        faceArray[faceoffset + 1] = v2 + start;
                        faceArray[faceoffset + 2] = v3 + start;

                        geoGroup.faceidx += 3;

                    } else {
                        // face = [v1, v2, v3, v4];
                        // norm = [n1, n2, n3, n4];

                        normalArray[v1offset] = nx1;
                        normalArray[v2offset] = nx2;
                        normalArray[v4offset] = nx4;
                        normalArray[v1offset + 1] = ny1;
                        normalArray[v2offset + 1] = ny2;
                        normalArray[v4offset + 1] = ny4;
                        normalArray[v1offset + 2] = nz1;
                        normalArray[v2offset + 2] = nz2;
                        normalArray[v4offset + 2] = nz4;

                        normalArray[v2offset] = nx2;
                        normalArray[v3offset] = nx3;
                        normalArray[v4offset] = nx4;
                        normalArray[v2offset + 1] = ny2;
                        normalArray[v3offset + 1] = ny3;
                        normalArray[v4offset + 1] = ny4;
                        normalArray[v2offset + 2] = nz2;
                        normalArray[v3offset + 2] = nz3;
                        normalArray[v4offset + 2] = nz4;

                        faceArray[faceoffset] = v1 + start;
                        faceArray[faceoffset + 1] = v2 + start;
                        faceArray[faceoffset + 2] = v4 + start;

                        faceArray[faceoffset + 3] = v2 + start;
                        faceArray[faceoffset + 4] = v3 + start;
                        faceArray[faceoffset + 5] = v4 + start;

                        geoGroup.faceidx += 6;
                    }

                }
            }

        }

        geoGroup.vertices += n_verts;
    };

    /** Create a cone 
     * @function $3Dmol.GLDraw.drawCone
     * @param {geometry}
     *            geo
     * @param {Point}
     *            from
     * @param {Point}
     *            to
     * @param {float}
     *            radius
     * @param {$3Dmol.Color}
     *            color
     *            */
    draw.drawCone = function(geo, from, to, radius, color) {
        if (!from || !to)
            return;

        color = color || {
            r: 0,
            g: 0,
            b: 0
        };

        var dir = [to.x, to.y, to.z];
        dir.x -= from.x;
        dir.y -= from.y;
        dir.z -= from.z;

        var e = getRotationMatrix(dir);


        // n vertices around bottom plust the two points
        var n = basisVectors.length;
        var basis = basisVectors;
        var n_verts = n + 2;


        //setup geo structures
        var geoGroup = geo.updateGeoGroup(n_verts);
        var start = geoGroup.vertices;
        var offset, faceoffset;
        var i, x, y, z;
        var vertexArray = geoGroup.vertexArray;
        var normalArray = geoGroup.normalArray;
        var colorArray = geoGroup.colorArray;
        var faceArray = geoGroup.faceArray;

        var offset = start * 3;
        var ndir = new $3Dmol.Vector3(dir[0], dir[1], dir[2]).normalize();
        //base point first vertex
        vertexArray[offset] = from.x;
        vertexArray[offset + 1] = from.y;
        vertexArray[offset + 2] = from.z;
        normalArray[offset] = -ndir.x;
        normalArray[offset + 1] = -ndir.y;
        normalArray[offset + 2] = -ndir.z;
        colorArray[offset] = color.r;
        colorArray[offset + 1] = color.g;
        colorArray[offset + 2] = color.b;

        //second vertex top
        vertexArray[offset + 3] = to.x;
        vertexArray[offset + 4] = to.y;
        vertexArray[offset + 5] = to.z;

        normalArray[offset + 3] = ndir.x;
        normalArray[offset + 4] = ndir.y;
        normalArray[offset + 5] = ndir.z;
        colorArray[offset + 3] = color.r;
        colorArray[offset + 4] = color.g;
        colorArray[offset + 5] = color.b;

        offset += 6;

        // add circle vertices
        for (i = 0; i < n; ++i) {
            var vec = basis[i].clone();
            vec.multiplyScalar(radius);
            x = e[0] * vec.x + e[3] * vec.y + e[6] * vec.z;
            y = e[1] * vec.x + e[4] * vec.y + e[7] * vec.z;
            z = e[5] * vec.y + e[8] * vec.z;

            // from
            vertexArray[offset] = x + from.x;
            vertexArray[offset + 1] = y + from.y;
            vertexArray[offset + 2] = z + from.z;

            // normals
            normalArray[offset] = x;
            normalArray[offset + 1] = y;
            normalArray[offset + 2] = z;

            // colors
            colorArray[offset] = color.r;
            colorArray[offset + 1] = color.g;
            colorArray[offset + 2] = color.b;

            offset += 3;

        }
        geoGroup.vertices += (n + 2);
        //faces
        var faceoffset = geoGroup.faceidx;
        for (i = 0; i < n; i++) {
            //two neighboring circle vertices
            var v1 = start + 2 + i;
            var v2 = start + 2 + ((i + 1) % n);

            faceArray[faceoffset] = v1;
            faceArray[faceoffset + 1] = v2;
            faceArray[faceoffset + 2] = start;
            faceoffset += 3;
            faceArray[faceoffset] = v1;
            faceArray[faceoffset + 1] = v2;
            faceArray[faceoffset + 2] = start + 1;
            faceoffset += 3;
        }
        geoGroup.faceidx += 6 * n;
    };


    // Sphere component
    var sphereVertexCache = {
        cache: {},
        getVerticesForRadius: function(radius) {

            if (typeof(this.cache[radius]) !== "undefined")
                return this.cache[radius];

            var obj = {
                vertices: [],
                verticesRows: [],
                normals: []
            };
            // scale quality with radius heuristically
            var sphereQuality = 1;
            var widthSegments = 16 * sphereQuality;
            var heightSegments = 10 * sphereQuality;
            if (radius < 1) {
                widthSegments = 10 * sphereQuality;
                heightSegments = 8 * sphereQuality;
            }

            var phiStart = 0;
            var phiLength = Math.PI * 2;

            var thetaStart = 0;
            var thetaLength = Math.PI;

            var x, y, vertices = [],
                uvs = [];

            for (y = 0; y <= heightSegments; y++) {

                var verticesRow = [];
                for (x = 0; x <= widthSegments; x++) {

                    var u = x / widthSegments;
                    var v = y / heightSegments;

                    var vertex = {};
                    vertex.x = -radius * Math.cos(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
                    vertex.y = radius * Math.cos(thetaStart + v * thetaLength);
                    vertex.z = radius * Math.sin(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);

                    var n = new $3Dmol.Vector3(vertex.x, vertex.y, vertex.z);
                    n.normalize();

                    obj.vertices.push(vertex);
                    obj.normals.push(n);

                    verticesRow.push(obj.vertices.length - 1);

                }

                obj.verticesRows.push(verticesRow);

            }

            this.cache[radius] = obj;
            return obj;
        }

    };

    /** Create a sphere.
     * @function $3Dmol.GLDraw.drawSphere
     * @param {geometry}
     *            geo
     * @param {Point}
     *            pos
     * @param {float}
     *            radius
     * @param {$3Dmol.Color}
     *            color
     */
    draw.drawSphere = function(geo, pos, radius, color) {

        var center = new $3Dmol.Vector3(pos.x, pos.y, pos.z);

        var x, y;
        var vobj = sphereVertexCache.getVerticesForRadius(radius);

        var vertices = vobj.vertices;
        var normals = vobj.normals;

        var geoGroup = geo.updateGeoGroup(vertices.length);

        var start = geoGroup.vertices;
        var vertexArray = geoGroup.vertexArray;
        var colorArray = geoGroup.colorArray;
        var faceArray = geoGroup.faceArray;
        var lineArray = geoGroup.lineArray;
        var normalArray = geoGroup.normalArray;

        for (var i = 0, il = vertices.length; i < il; ++i) {
            var offset = 3 * (start + i);
            var v = vertices[i];

            vertexArray[offset] = (v.x + pos.x);
            vertexArray[offset + 1] = (v.y + pos.y);
            vertexArray[offset + 2] = (v.z + pos.z);

            colorArray[offset] = color.r;
            colorArray[offset + 1] = color.g;
            colorArray[offset + 2] = color.b;

        }

        geoGroup.vertices += vertices.length;

        var verticesRows = vobj.verticesRows;
        var h = verticesRows.length - 1;

        for (y = 0; y < h; y++) {
            var w = verticesRows[y].length - 1;
            for (x = 0; x < w; x++) {

                var faceoffset = geoGroup.faceidx,
                    lineoffset = geoGroup.lineidx;

                var v1 = verticesRows[y][x + 1] + start,
                    v1offset = v1 * 3;
                var v2 = verticesRows[y][x] + start,
                    v2offset = v2 * 3;
                var v3 = verticesRows[y + 1][x] + start,
                    v3offset = v3 * 3;
                var v4 = verticesRows[y + 1][x + 1] + start,
                    v4offset = v4 * 3;

                var n1 = normals[v1 - start];
                var n2 = normals[v2 - start];
                var n3 = normals[v3 - start];
                var n4 = normals[v4 - start];
                var face, norm;
                if (Math.abs(vertices[v1 - start].y) === radius) {
                    // face = [v1, v3, v4];
                    // norm = [n1, n3, n4];

                    normalArray[v1offset] = n1.x;
                    normalArray[v3offset] = n3.x;
                    normalArray[v4offset] = n4.x;
                    normalArray[v1offset + 1] = n1.y;
                    normalArray[v3offset + 1] = n3.y;
                    normalArray[v4offset + 1] = n4.y;
                    normalArray[v1offset + 2] = n1.z;
                    normalArray[v3offset + 2] = n3.z;
                    normalArray[v4offset + 2] = n4.z;

                    faceArray[faceoffset] = v1;
                    faceArray[faceoffset + 1] = v3;
                    faceArray[faceoffset + 2] = v4;

                    lineArray[lineoffset] = v1;
                    lineArray[lineoffset + 1] = v3;
                    lineArray[lineoffset + 2] = v1;
                    lineArray[lineoffset + 3] = v4;
                    lineArray[lineoffset + 4] = v3;
                    lineArray[lineoffset + 5] = v4;

                    geoGroup.faceidx += 3;
                    geoGroup.lineidx += 6;

                } else if (Math.abs(vertices[v3 - start].y) === radius) {
                    // face = [v1, v2, v3];
                    // norm = [n1, n2, n3];

                    normalArray[v1offset] = n1.x;
                    normalArray[v2offset] = n2.x;
                    normalArray[v3offset] = n3.x;
                    normalArray[v1offset + 1] = n1.y;
                    normalArray[v2offset + 1] = n2.y;
                    normalArray[v3offset + 1] = n3.y;
                    normalArray[v1offset + 2] = n1.z;
                    normalArray[v2offset + 2] = n2.z;
                    normalArray[v3offset + 2] = n3.z;

                    faceArray[faceoffset] = v1;
                    faceArray[faceoffset + 1] = v2;
                    faceArray[faceoffset + 2] = v3;

                    lineArray[lineoffset] = v1;
                    lineArray[lineoffset + 1] = v2;
                    lineArray[lineoffset + 2] = v1;
                    lineArray[lineoffset + 3] = v3;
                    lineArray[lineoffset + 4] = v2;
                    lineArray[lineoffset + 5] = v3;

                    geoGroup.faceidx += 3;
                    geoGroup.lineidx += 6;

                } else {
                    // face = [v1, v2, v3, v4];
                    // norm = [n1, n2, n3, n4];

                    normalArray[v1offset] = n1.x;
                    normalArray[v2offset] = n2.x;
                    normalArray[v4offset] = n4.x;
                    normalArray[v1offset + 1] = n1.y;
                    normalArray[v2offset + 1] = n2.y;
                    normalArray[v4offset + 1] = n4.y;
                    normalArray[v1offset + 2] = n1.z;
                    normalArray[v2offset + 2] = n2.z;
                    normalArray[v4offset + 2] = n4.z;

                    normalArray[v2offset] = n2.x;
                    normalArray[v3offset] = n3.x;
                    normalArray[v4offset] = n4.x;
                    normalArray[v2offset + 1] = n2.y;
                    normalArray[v3offset + 1] = n3.y;
                    normalArray[v4offset + 1] = n4.y;
                    normalArray[v2offset + 2] = n2.z;
                    normalArray[v3offset + 2] = n3.z;
                    normalArray[v4offset + 2] = n4.z;

                    faceArray[faceoffset] = v1;
                    faceArray[faceoffset + 1] = v2;
                    faceArray[faceoffset + 2] = v4;

                    faceArray[faceoffset + 3] = v2;
                    faceArray[faceoffset + 4] = v3;
                    faceArray[faceoffset + 5] = v4;

                    lineArray[lineoffset] = v1;
                    lineArray[lineoffset + 1] = v2;
                    lineArray[lineoffset + 2] = v1;
                    lineArray[lineoffset + 3] = v4;

                    lineArray[lineoffset + 4] = v2;
                    lineArray[lineoffset + 5] = v3;
                    lineArray[lineoffset + 6] = v3;
                    lineArray[lineoffset + 7] = v4;

                    geoGroup.faceidx += 6;
                    geoGroup.lineidx += 8;

                }

            }
        }

    };

    return draw;

})(); // A model is a collection of related atoms.  Bonds are only allowed between
//atoms in the same model.  An atom is uniquely specified by its model id and
//its serial number.
//A glmodel knows how to apply the styles on each atom to create a gl object

var $3Dmol = $3Dmol || {};

/**
 * GLModel represents a group of related atoms
 * @constructor
 * @param {number=} mid
 * @param {Object=} defaultcolors Object defining default atom colors as atom => color property value pairs
 * @see $3Dmol.download
 */
$3Dmol.GLModel = (function() {

    // class variables go here
    var defaultAtomStyle = {
        line: {}
    };

    var Nucleotides = ['  G', '  A', '  T', '  C', '  U', ' DG', ' DA', ' DT',
        ' DC', ' DU'
    ];

    var defaultlineWidth = 1.0;

    // Reference: A. Bondi, J. Phys. Chem., 1964, 68, 441.
    var vdwRadii = {
        "H": 1.2,
        "Li": 1.82,
        "LI": 1.82,
        "Na": 2.27,
        "NA": 2.27,
        "K": 2.75,
        "C": 1.7,
        "N": 1.55,
        "O": 1.52,
        "F": 1.47,
        "P": 1.80,
        "S": 1.80,
        "CL": 1.75,
        "Cl": 1.75,
        "BR": 1.85,
        "Br": 1.85,
        "SE": 1.90,
        "Se": 1.90,
        "ZN": 1.39,
        "Zn": 1.39,
        "CU": 1.4,
        "Cu": 1.4,
        "NI": 1.63,
        "Ni": 1.63
    };

    // class functions

    // return true if a and b represent the same style
    var sameObj = function(a, b) {
        if (a && b)
            return JSON.stringify(a) == JSON.stringify(b);
        else
            return a == b;
    };


    function GLModel(mid, defaultcolors) {
        // private variables
        var atoms = [];
        var id = mid;
        var molObj = null;
        var renderedMolObj = null;
        var lastColors = null;
        var copyMatrices = []; //transformation + rot matrices
        var idMatrix = new $3Dmol.Matrix4();
        idMatrix.identity();
        var noAssembly;
        var dontDuplicateAtoms;

        var defaultColor = $3Dmol.elementColors.defaultColor;

        var ElementColors = (defaultcolors) ? defaultcolors : $3Dmol.elementColors.defaultColors;


        // drawing functions must be associated with model object since
        // geometries can't span multiple canvases

        // sphere drawing
        var defaultSphereRadius = 1.5;

        // return proper radius for atom given style
        /** 
         *
         * @param {AtomSpec} atom
         * @param {atomstyle} style
         * @return {number}
         *
         */
        var getRadiusFromStyle = function(atom, style) {
            var r = defaultSphereRadius;
            if (typeof(style.radius) != "undefined")
                r = style.radius;
            else if (vdwRadii[atom.elem])
                r = vdwRadii[atom.elem];

            if (typeof(style.scale) != "undefined")
                r *= style.scale;
            return r;
        };

        // cross drawing
        /** @typedef CrossStyleSpec
         * @prop {boolean} hidden - do not show
         * @prop {number} linewidth
         * @prop {number} radius
         * @prop {string} colorscheme - element based coloring
         * @prop {string} color - fixed coloring, overrides colorscheme
         */

        /**
         *
         * @param {AtomSpec} atom
         * @param {$3Dmol.Geometry[]} geos
         */
        var drawAtomCross = function(atom, geos) {
            if (!atom.style.cross)
                return;
            var style = atom.style.cross;
            if (style.hidden)
                return;
            var linewidth = (style.linewidth || defaultlineWidth);
            if (!geos[linewidth])
                geos[linewidth] = new $3Dmol.Geometry();

            var geoGroup = geos[linewidth].updateGeoGroup(6);

            var delta = getRadiusFromStyle(atom, style);

            var points = [
                [delta, 0, 0],
                [-delta, 0, 0],
                [0, delta, 0],
                [0, -delta, 0],
                [0, 0, delta],
                [0, 0, -delta]
            ];

            var clickable = atom.clickable;
            if (clickable && atom.intersectionShape === undefined)
                atom.intersectionShape = {
                    sphere: [],
                    cylinder: [],
                    line: []
                };

            var c = $3Dmol.getColorFromStyle(atom, style);

            var vertexArray = geoGroup.vertexArray;
            var colorArray = geoGroup.colorArray;

            for (var j = 0; j < 6; j++) {

                var offset = geoGroup.vertices * 3;

                geoGroup.vertices++;
                vertexArray[offset] = atom.x + points[j][0];
                vertexArray[offset + 1] = atom.y + points[j][1];
                vertexArray[offset + 2] = atom.z + points[j][2];
                colorArray[offset] = c.r;
                colorArray[offset + 1] = c.g;
                colorArray[offset + 2] = c.b;

                if (clickable) {
                    var point = new $3Dmol.Vector3(points[j][0], points[j][1], points[j][2]);

                    //decrease cross size for selection to prevent misselection from atom overlap
                    point.multiplyScalar(0.1);
                    point.set(point.x + atom.x, point.y + atom.y, point.z + atom.z);
                    atom.intersectionShape.line.push(point);
                }

            }

        };

        //from atom, return a normalized vector v that is orthogonal and along which
        //it is appropraite to draw multiple bonds
        var getSideBondV = function(atom, atom2, i) {

            var p1 = new $3Dmol.Vector3(atom.x, atom.y, atom.z);
            var p2 = new $3Dmol.Vector3(atom2.x, atom2.y, atom2.z);

            var dir = p2.clone();
            var v = null;
            dir.sub(p1);

            var p1a, p1b, p2a, p2b;
            var i2, j2, atom3, p3, dir2;
            if (atom.bonds.length === 1) {
                if (atom2.bonds.length === 1) {
                    v = dir.clone();
                    if (Math.abs(v.x) > 0.0001)
                        v.y += 1;
                    else
                        v.x += 1;
                } else {
                    i2 = (i + 1) % atom2.bonds.length;
                    j2 = atom2.bonds[i2];
                    atom3 = atoms[j2];
                    p3 = new $3Dmol.Vector3(atom3.x, atom3.y, atom3.z);

                    dir2 = p3.clone();
                    dir2.sub(p1);

                    v = dir2.clone();
                    v.cross(dir);
                }
            } else {
                // get vector 2 different neighboring atom
                i2 = (i + 1) % atom.bonds.length;
                j2 = atom.bonds[i2];
                atom3 = atoms[j2];
                p3 = new $3Dmol.Vector3(atom3.x, atom3.y, atom3.z);

                dir2 = p3.clone();
                dir2.sub(p1);

                v = dir2.clone();
                v.cross(dir);
            }

            // especially for C#C (triple bond) dir and dir2
            // may be opposites resulting in a zero v
            if (v.lengthSq() < 0.01) {
                v = dir.clone();
                if (Math.abs(v.x) > 0.0001)
                    v.y += 1;
                else
                    v.x += 1;
            }

            v.cross(dir);
            v.normalize();

            return v;

            v.multiplyScalar(r * 1.5);

        }

        var getTripleBondPoints = function() {

            v.cross(dir);
            v.normalize();
            v.multiplyScalar(r * 3);

            p1a = p1.clone();
            p1a.add(v);
            p1b = p1.clone();
            p1b.sub(v);

            p2a = p1a.clone();
            p2a.add(dir);
            p2b = p1b.clone();
            p2b.add(dir);
        }

        var addLine = function(vertexArray, colorArray, offset, p1, p2, c1) {
            //make line from p1 to p2, does not incremeant counts
            vertexArray[offset] = p1.x;
            vertexArray[offset + 1] = p1.y;
            vertexArray[offset + 2] = p1.z;
            colorArray[offset] = c1.r;
            colorArray[offset + 1] = c1.g;
            colorArray[offset + 2] = c1.b;
            vertexArray[offset + 3] = p2.x;
            vertexArray[offset + 4] = p2.y;
            vertexArray[offset + 5] = p2.z;
            colorArray[offset + 3] = c1.r;
            colorArray[offset + 4] = c1.g;
            colorArray[offset + 5] = c1.b;
        }

        /**@typedef LineStyleSpec
         * @prop {boolean} hidden - do not show line
         * @prop {number} linewidth
         * @prop {string} colorscheme - element based coloring
         * @prop {string} color - fixed coloring, overrides colorscheme
         */

        // bonds - both atoms must match bond style
        // standardize on only drawing for lowest to highest
        /**
         *
         * @param {AtomSpec}
         *            atom
         * @param {AtomSpec[]} atoms
         * @param {$3Dmol.Geometry[]} geos
         */
        var drawBondLines = function(atom, atoms, geos) {
            if (!atom.style.line)
                return;
            var style = atom.style.line;
            if (style.hidden)
                return;

            // have a separate geometry for each linewidth
            var linewidth = (style.linewidth || defaultlineWidth);

            if (!geos[linewidth])
                geos[linewidth] = new $3Dmol.Geometry();
            /** @type {geometryGroup} */
            var geoGroup = geos[linewidth].updateGeoGroup(2 * atom.bonds.length);

            var vertexArray = geoGroup.vertexArray;
            var colorArray = geoGroup.colorArray;

            for (var i = 0; i < atom.bonds.length; i++) {
                var j = atom.bonds[i]; // our neighbor

                var atom2 = atoms[j];
                if (!atom2.style.line)
                    continue; // don't sweat the details

                if (atom.serial >= atom2.serial) // only draw if less, this way we can do multi bonds correctly
                    continue;
                var p1 = new $3Dmol.Vector3(atom.x, atom.y, atom.z);
                var p2 = new $3Dmol.Vector3(atom2.x, atom2.y, atom2.z);
                var mp = p1.clone().add(p2).multiplyScalar(0.5);
                var singleBond = false;

                if (atom.clickable) {
                    if (atom.intersectionShape === undefined)
                        atom.intersectionShape = {
                            sphere: [],
                            cylinder: [],
                            line: [],
                            triangle: []
                        };
                    atom.intersectionShape.line.push(p1);
                    atom.intersectionShape.line.push(p2);
                }

                var c1 = $3Dmol.getColorFromStyle(atom, atom.style.line);
                var c2 = $3Dmol.getColorFromStyle(atom2, atom2.style.line);

                if (atom.bondStyles && atom.bondStyles[i]) {
                    var bstyle = atom.bondStyles[i];
                    if (!bstyle.iswire) {
                        continue;
                    }
                    if (bstyle.radius) bondR = bstyle.radius;
                    if (bstyle.singleBond) singleBond = true;
                    if (typeof(bstyle.color1) != "undefined") {
                        c1 = $3Dmol.CC.color(bstyle.color1);
                    }
                    if (typeof(bstyle.color2) != "undefined") {
                        c2 = $3Dmol.CC.color(bstyle.color2);
                    }
                }

                var offset = geoGroup.vertices * 3;

                if (atom.bondOrder[i] > 1 && atom.bondOrder[i] < 4 && !singleBond) {
                    var v = getSideBondV(atom, atom2, i);
                    var dir = p2.clone();
                    dir.sub(p1);

                    if (atom.bondOrder[i] == 2) { //double

                        v.multiplyScalar(.1);
                        p1a = p1.clone();
                        p1a.add(v);
                        p1b = p1.clone();
                        p1b.sub(v);

                        p2a = p1a.clone();
                        p2a.add(dir);
                        p2b = p1b.clone();
                        p2b.add(dir);

                        if (c1 == c2) {
                            geoGroup.vertices += 4;
                            addLine(vertexArray, colorArray, offset, p1a, p2a, c1);
                            addLine(vertexArray, colorArray, offset + 6, p1b, p2b, c1);
                        } else {
                            geoGroup.vertices += 8;
                            dir.multiplyScalar(0.5);
                            var mpa = p1a.clone();
                            mpa.add(dir);
                            var mpb = p1b.clone();
                            mpb.add(dir);

                            addLine(vertexArray, colorArray, offset, p1a, mpa, c1);
                            addLine(vertexArray, colorArray, offset + 6, mpa, p2a, c2);
                            addLine(vertexArray, colorArray, offset + 12, p1b, mpb, c1);
                            addLine(vertexArray, colorArray, offset + 18, mpb, p2b, c2);
                        }
                    } else if (atom.bondOrder[i] == 3) { //triple

                        v.multiplyScalar(.1);
                        p1a = p1.clone();
                        p1a.add(v);
                        p1b = p1.clone();
                        p1b.sub(v);

                        p2a = p1a.clone();
                        p2a.add(dir);
                        p2b = p1b.clone();
                        p2b.add(dir);

                        if (c1 == c2) {
                            geoGroup.vertices += 6;
                            addLine(vertexArray, colorArray, offset, p1, p2, c1);
                            addLine(vertexArray, colorArray, offset + 6, p1a, p2a, c1);
                            addLine(vertexArray, colorArray, offset + 12, p1b, p2b, c1);
                        } else {
                            geoGroup.vertices += 12;
                            dir.multiplyScalar(0.5);
                            var mpa = p1a.clone();
                            mpa.add(dir);
                            var mpb = p1b.clone();
                            mpb.add(dir);

                            addLine(vertexArray, colorArray, offset, p1, mp, c1);
                            addLine(vertexArray, colorArray, offset + 6, mp, p2, c2);
                            addLine(vertexArray, colorArray, offset + 12, p1a, mpa, c1);
                            addLine(vertexArray, colorArray, offset + 18, mpa, p2a, c2);
                            addLine(vertexArray, colorArray, offset + 24, p1b, mpb, c1);
                            addLine(vertexArray, colorArray, offset + 30, mpb, p2b, c2);
                        }
                    }
                } else { //single bond                                    
                    if (c1 == c2) {
                        geoGroup.vertices += 2;
                        addLine(vertexArray, colorArray, offset, p1, p2, c1);
                    } else {
                        geoGroup.vertices += 4;
                        addLine(vertexArray, colorArray, offset, p1, mp, c1);
                        addLine(vertexArray, colorArray, offset + 6, mp, p2, c2);
                    }

                }
            }

        };

        // bonds as cylinders
        var defaultStickRadius = 0.25;

        /**@typedef SphereStyleSpec
         * @prop {boolean} hidden - do not show atom
         * @prop {number} radius - override van der waals radius
         * @prop {string} colorscheme - element based coloring
         * @prop {string} color - fixed coloring, overrides colorscheme
         */

        //sphere drawing
        //See also: drawCylinder
        /** 
         *
         * @param {AtomSpec} atom
         * @param {$3Dmol.Geometry} geo
         */
        var drawAtomSphere = function(atom, geo) {

            if (!atom.style.sphere)
                return;
            var style = atom.style.sphere;
            if (style.hidden)
                return;

            var C = $3Dmol.getColorFromStyle(atom, style);

            var x, y;
            var radius = getRadiusFromStyle(atom, style);

            if ((atom.clickable === true) && (atom.intersectionShape !== undefined)) {
                var center = new $3Dmol.Vector3(atom.x, atom.y, atom.z);
                atom.intersectionShape.sphere.push(new $3Dmol.Sphere(center, radius));
            }

            $3Dmol.GLDraw.drawSphere(geo, atom, radius, C);

        };

        //dkoes - test code for sphere imposters
        var drawAtomImposter = function(atom, geo) {

            if (!atom.style.spherei)
                return;
            var style = atom.style.spherei;
            if (style.hidden)
                return;

            var radius = getRadiusFromStyle(atom, style);
            var C = $3Dmol.getColorFromStyle(atom, style);

            //create flat square                       

            var geoGroup = geo.updateGeoGroup(4);
            var startv = geoGroup.vertices;
            var start = startv * 3;
            var vertexArray = geoGroup.vertexArray;
            var colorArray = geoGroup.colorArray;

            //use center point for each vertex
            for (var i = 0; i < 4; i++) {
                vertexArray[start + 3 * i] = atom.x;
                vertexArray[start + 3 * i + 1] = atom.y;
                vertexArray[start + 3 * i + 2] = atom.z;
            }


            //same colors for all 4 vertices
            var normalArray = geoGroup.normalArray;
            var colorArray = geoGroup.colorArray;
            for (var i = 0; i < 4; i++) {
                colorArray[start + 3 * i] = C.r;
                colorArray[start + 3 * i + 1] = C.g;
                colorArray[start + 3 * i + 2] = C.b;

            }

            normalArray[start + 0] = -radius;
            normalArray[start + 1] = -radius;
            normalArray[start + 2] = 0;

            normalArray[start + 3] = -radius;
            normalArray[start + 4] = radius;
            normalArray[start + 5] = 0;

            normalArray[start + 6] = radius;
            normalArray[start + 7] = radius;
            normalArray[start + 8] = 0;

            normalArray[start + 9] = radius;
            normalArray[start + 10] = -radius;
            normalArray[start + 11] = 0;

            geoGroup.vertices += 4;

            //two faces
            var faceArray = geoGroup.faceArray;
            var faceoffset = geoGroup.faceidx; //not number faces, but index
            faceArray[faceoffset + 0] = startv;
            faceArray[faceoffset + 1] = startv + 1;
            faceArray[faceoffset + 2] = startv + 2;
            faceArray[faceoffset + 3] = startv + 2;
            faceArray[faceoffset + 4] = startv + 3;
            faceArray[faceoffset + 5] = startv;
            geoGroup.faceidx += 6;

        };


        /**@typedef StickStyleSpec
         * @prop {boolean} hidden - do not show
         * @prop {number} radius
         * @prop {boolean} singleBonds - draw all bonds as single bonds if set
         * @prop {string} colorscheme - element based coloring
         * @prop {string} color - fixed coloring, overrides colorscheme
         */

        // draws cylinders and small spheres (at bond radius)
        var drawBondSticks = function(atom, atoms, geo) {
            if (!atom.style.stick)
                return;
            var style = atom.style.stick;
            if (style.hidden)
                return;

            var atomBondR = style.radius || defaultStickRadius;
            var bondR = atomBondR;
            var atomSingleBond = style.singleBonds || false;
            var fromCap = false,
                toCap = false;

            var C1 = $3Dmol.getColorFromStyle(atom, style);

            var mp, mp1, mp2;

            if (!atom.capDrawn && atom.bonds.length < 4)
                fromCap = true;

            for (var i = 0; i < atom.bonds.length; i++) {
                var j = atom.bonds[i]; // our neighbor
                var atom2 = atoms[j]; //parsePDB, etc should only add defined bonds

                if (atom.serial < atom2.serial) { // only draw if less, this
                    // lets us combine
                    // cylinders of the same
                    // color
                    var style2 = atom2.style;
                    if (!style2.stick)
                        continue; // don't sweat the details                     

                    var C2 = $3Dmol.getColorFromStyle(atom2, style2.stick);

                    //support bond specific styles
                    bondR = atomBondR;
                    var singleBond = atomSingleBond;
                    if (atom.bondStyles && atom.bondStyles[i]) {
                        var bstyle = atom.bondStyles[i];
                        if (bstyle.iswire) {
                            continue;
                        }
                        if (bstyle.radius) bondR = bstyle.radius;
                        if (bstyle.singleBond) singleBond = true;
                        if (typeof(bstyle.color1) != "undefined") {
                            C1 = $3Dmol.CC.color(bstyle.color1);
                        }
                        if (typeof(bstyle.color2) != "undefined") {
                            C2 = $3Dmol.CC.color(bstyle.color2);
                        }
                    }
                    var p1 = new $3Dmol.Vector3(atom.x, atom.y, atom.z);
                    var p2 = new $3Dmol.Vector3(atom2.x, atom2.y, atom2.z);

                    // draw cylinders
                    if (atom.bondOrder[i] === 1 || singleBond) {

                        if (!atom2.capDrawn && atom2.bonds.length < 4)
                            toCap = true;

                        if (C1 != C2) {
                            mp = new $3Dmol.Vector3().addVectors(p1, p2)
                                .multiplyScalar(0.5);
                            $3Dmol.GLDraw.drawCylinder(geo, p1, mp, bondR, C1, fromCap, false);
                            $3Dmol.GLDraw.drawCylinder(geo, mp, p2, bondR, C2, false, toCap);
                        } else {
                            $3Dmol.GLDraw.drawCylinder(geo, p1, p2, bondR, C1, fromCap, toCap);
                        }

                        if (atom.clickable || atom2.clickable) {
                            mp = new $3Dmol.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
                            if (atom.clickable) {
                                var cylinder1 = new $3Dmol.Cylinder(p1, mp, bondR);
                                var sphere1 = new $3Dmol.Sphere(p1, bondR);
                                atom.intersectionShape.cylinder.push(cylinder1);
                                atom.intersectionShape.sphere.push(sphere1);
                            }
                            if (atom2.clickable) {
                                var cylinder2 = new $3Dmol.Cylinder(p2, mp, bondR);
                                var sphere2 = new $3Dmol.Sphere(p2, bondR);
                                atom2.intersectionShape.cylinder.push(cylinder2);
                                atom2.intersectionShape.sphere.push(sphere2);
                            }

                        }

                    } else if (atom.bondOrder[i] > 1) {
                        var mfromCap = false;
                        mtoCap = false; //multi bond caps

                        if (bondR != atomBondR) {
                            //assume jmol style multiple bonds - the radius doesn't fit within atom sphere
                            mfromCap = true;
                            mtoCap = true;
                        }

                        var dir = p2.clone();
                        var v = null;
                        dir.sub(p1);

                        var r, p1a, p1b, p2a, p2b;
                        var v = getSideBondV(atom, atom2, i);

                        if (atom.bondOrder[i] == 2) {
                            var r = bondR / 2.5;
                            var v = getSideBondV(atom, atom2, i);

                            v.multiplyScalar(r * 1.5);
                            p1a = p1.clone();
                            p1a.add(v);
                            p1b = p1.clone();
                            p1b.sub(v);

                            p2a = p1a.clone();
                            p2a.add(dir);
                            p2b = p1b.clone();
                            p2b.add(dir);


                            if (C1 != C2) {
                                mp = new $3Dmol.Vector3().addVectors(p1a, p2a)
                                    .multiplyScalar(0.5);
                                mp2 = new $3Dmol.Vector3().addVectors(p1b, p2b)
                                    .multiplyScalar(0.5);
                                $3Dmol.GLDraw.drawCylinder(geo, p1a, mp, r, C1, mfromCap, false);
                                $3Dmol.GLDraw.drawCylinder(geo, mp, p2a, r, C2, false, mtoCap);
                                $3Dmol.GLDraw.drawCylinder(geo, p1b, mp2, r, C1, mfromCap, false);
                                $3Dmol.GLDraw.drawCylinder(geo, mp2, p2b, r, C2, false, mtoCap);
                            } else {
                                $3Dmol.GLDraw.drawCylinder(geo, p1a, p2a, r, C1, mfromCap, mtoCap);
                                $3Dmol.GLDraw.drawCylinder(geo, p1b, p2b, r, C1, mfromCap, mtoCap);
                            }
                            if (atom.clickable || atom2.clickable) {
                                mp = new $3Dmol.Vector3().addVectors(p1a, p2a)
                                    .multiplyScalar(0.5);
                                mp2 = new $3Dmol.Vector3().addVectors(p1b, p2b)
                                    .multiplyScalar(0.5);
                                if (atom.clickable) {
                                    cylinder1a = new $3Dmol.Cylinder(p1a, mp, r);
                                    cylinder1b = new $3Dmol.Cylinder(p1b, mp2, r);
                                    atom.intersectionShape.cylinder.push(cylinder1a);
                                    atom.intersectionShape.cylinder.push(cylinder1b);
                                }
                                if (atom2.clickable) {
                                    cylinder2a = new $3Dmol.Cylinder(p2a, mp, r);
                                    cylinder2b = new $3Dmol.Cylinder(p2b, mp2, r);
                                    atom2.intersectionShape.cylinder.push(cylinder2a);
                                    atom2.intersectionShape.cylinder.push(cylinder2b);
                                }
                            }
                        } else if (atom.bondOrder[i] == 3) {
                            r = bondR / 4;
                            v.cross(dir);
                            v.normalize();
                            v.multiplyScalar(r * 3);

                            p1a = p1.clone();
                            p1a.add(v);
                            p1b = p1.clone();
                            p1b.sub(v);

                            p2a = p1a.clone();
                            p2a.add(dir);
                            p2b = p1b.clone();
                            p2b.add(dir);

                            if (C1 != C2) {
                                mp = new $3Dmol.Vector3().addVectors(p1a, p2a)
                                    .multiplyScalar(0.5);
                                mp2 = new $3Dmol.Vector3().addVectors(p1b, p2b)
                                    .multiplyScalar(0.5);
                                mp3 = new $3Dmol.Vector3().addVectors(p1, p2)
                                    .multiplyScalar(0.5);
                                $3Dmol.GLDraw.drawCylinder(geo, p1a, mp, r, C1, mfromCap, false);
                                $3Dmol.GLDraw.drawCylinder(geo, mp, p2a, r, C2, false, mtoCap);
                                $3Dmol.GLDraw.drawCylinder(geo, p1, mp3, r, C1, fromCap, false);
                                $3Dmol.GLDraw.drawCylinder(geo, mp3, p2, r, C2, false, toCap);
                                $3Dmol.GLDraw.drawCylinder(geo, p1b, mp2, r, C1, mfromCap, false);
                                $3Dmol.GLDraw.drawCylinder(geo, mp2, p2b, r, C2, false, mtoCap);
                            } else {
                                $3Dmol.GLDraw.drawCylinder(geo, p1a, p2a, r, C1, mfromCap, mtoCap);
                                $3Dmol.GLDraw.drawCylinder(geo, p1, p2, r, C1, fromCap, toCap);
                                $3Dmol.GLDraw.drawCylinder(geo, p1b, p2b, r, C1, mfromCap, mtoCap);

                            }
                            if (atom.clickable || atom2.clickable) {
                                mp = new $3Dmol.Vector3().addVectors(p1a, p2a)
                                    .multiplyScalar(0.5);
                                mp2 = new $3Dmol.Vector3().addVectors(p1b, p2b)
                                    .multiplyScalar(0.5);
                                mp3 = new $3Dmol.Vector3().addVectors(p1, p2)
                                    .multiplyScalar(0.5);

                                if (atom.clickable) {
                                    cylinder1a = new $3Dmol.Cylinder(p1a.clone(), mp.clone(), r);
                                    cylinder1b = new $3Dmol.Cylinder(p1b.clone(), mp2.clone(), r);
                                    cylinder1c = new $3Dmol.Cylinder(p1.clone(), mp3.clone(), r);
                                    atom.intersectionShape.cylinder.push(cylinder1a);
                                    atom.intersectionShape.cylinder.push(cylinder1b);
                                    atom.intersectionShape.cylinder.push(cylinder1c);
                                }
                                if (atom2.clickable) {
                                    cylinder2a = new $3Dmol.Cylinder(p2a.clone(), mp.clone(), r);
                                    cylinder2b = new $3Dmol.Cylinder(p2b.clone(), mp2.clone(), r);
                                    cylinder2c = new $3Dmol.Cylinder(p2.clone(), mp3.clone(), r);
                                    atom2.intersectionShape.cylinder.push(cylinder2a);
                                    atom2.intersectionShape.cylinder.push(cylinder2b);
                                    atom2.intersectionShape.cylinder.push(cylinder2c);
                                }
                            }
                        }
                    }

                }

            }

            // draw non bonded heteroatoms as spheres
            var drawSphere = false;
            var numsinglebonds = 0;
            var differentradii = false;
            //also, if any bonds were drawn as multiples, need sphere
            for (var i = 0; i < atom.bonds.length; i++) {
                var singleBond = atomSingleBond;
                if (atom.bondStyles && atom.bondStyles[i]) {
                    var bstyle = atom.bondStyles[i];
                    if (bstyle.singleBond) singleBond = true;
                    if (bstyle.radius && bstyle.radius != atomBondR) {
                        differentradii = true;
                    }
                }
                if (singleBond || atom.bondOrder[i] == 1) {
                    numsinglebonds++;
                }
            }

            if (differentradii) { //jmol style double/triple bonds - no sphere
                if (numsinglebonds > 0) drawSphere = true; //unless needed as a cap
            } else if (numsinglebonds == 0 && atom.bonds.length > 0) {
                drawSphere = true;
            }

            if (drawSphere) {
                var savedstyle = atom.style;
                bondR = atomBondR;
                //do not use bond style as this can be variable, particularly
                //with jmol export of double/triple bonds
                $3Dmol.GLDraw.drawSphere(geo, atom, bondR, C1);
            }

        };

        // go through all the atoms and regenerate their geometries
        // we try to have one geometry for each style since this is much much
        // faster
        // at some point we should optimize this to avoid unnecessary
        // recalculation
        /** param {AtomSpec[]} atoms */
        var createMolObj = function(atoms) {

            //console.log("creating for "+id);
            var ret = new $3Dmol.Object3D();
            var cartoonAtoms = [];
            var lineGeometries = {};
            var crossGeometries = {};
            var sphereGeometry = new $3Dmol.Geometry(true);
            var imposterGeometry = new $3Dmol.Geometry(true);
            var stickGeometry = new $3Dmol.Geometry(true);
            var i, n;
            var range = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
            for (i = 0, n = atoms.length; i < n; i++) {
                var atom = atoms[i];
                // recreate gl info for each atom as necessary
                // set up appropriate intersection spheres for clickable atoms
                if (atom && atom.style) {
                    if (atom.clickable && atom.intersectionShape === undefined)
                        atom.intersectionShape = {
                            sphere: [],
                            cylinder: [],
                            line: [],
                            triangle: []
                        };
                    drawAtomSphere(atom, sphereGeometry);
                    drawAtomImposter(atom, imposterGeometry);
                    drawAtomCross(atom, crossGeometries);
                    drawBondLines(atom, atoms, lineGeometries);
                    drawBondSticks(atom, atoms, stickGeometry);
                    if (typeof(atom.style.cartoon) !== "undefined" && !atom.style.cartoon.hidden) {
                        //gradient color scheme range
                        if (atom.style.cartoon.color === 'spectrum' && typeof(atom.resi) === "number") {
                            if (atom.resi < range[0])
                                range[0] = atom.resi;
                            if (atom.resi > range[1])
                                range[1] = atom.resi;
                        }

                        cartoonAtoms.push(atom);
                    }


                }
            }
            // create cartoon if needed - this is a whole model analysis
            if (cartoonAtoms.length > 0) {
                var gradientscheme = null;
                //TODO: Should have an option to choose gradient type
                if (range[0] < range[1])
                    gradientscheme = new $3Dmol.Gradient.Sinebow(range[0], range[1]);

                $3Dmol.drawCartoon(ret, cartoonAtoms, gradientscheme);

                for (i = 0; i < ret.children.length; i++) {
                    var geo = ret.children[i].geometry;
                }
            }

            // add sphere geometry
            if (sphereGeometry.vertices > 0) {
                var sphereMaterial = new $3Dmol.MeshLambertMaterial({
                    ambient: 0x000000,
                    vertexColors: true,
                    reflectivity: 0,
                });

                //Initialize buffers in geometry                
                sphereGeometry.initTypedArrays();

                var sphere = new $3Dmol.Mesh(sphereGeometry, sphereMaterial);
                ret.add(sphere);
            }

            // add imposter geometry
            if (imposterGeometry.vertices > 0) {
                var imposterMaterial = new $3Dmol.ImposterMaterial({
                    ambient: 0x000000,
                    vertexColors: true,
                    reflectivity: 0
                });

                //Initialize buffers in geometry                
                imposterGeometry.initTypedArrays();

                var spherei = new $3Dmol.Mesh(imposterGeometry, imposterMaterial);
                console
                    .log("spherei geometry " + imposterGeometry.vertices.length);

                ret.add(spherei);
            }

            // add stick geometry
            if (stickGeometry.vertices > 0) {
                var cylinderMaterial = new $3Dmol.MeshLambertMaterial({
                    vertexColors: true,
                    ambient: 0x000000,
                    reflectivity: 0
                });

                //Initialize buffers in geometry                
                stickGeometry.initTypedArrays();

                if (cylinderMaterial.wireframe)
                    stickGeometry.setUpWireframe();

                var sticks = new $3Dmol.Mesh(stickGeometry, cylinderMaterial);
                ret.add(sticks);
            }

            //var linewidth;
            // add any line geometries, distinguished by line width
            for (i in lineGeometries) {
                if (lineGeometries.hasOwnProperty(i)) {
                    var linewidth = i;
                    var lineMaterial = new $3Dmol.LineBasicMaterial({
                        linewidth: linewidth,
                        vertexColors: true
                    });

                    lineGeometries[i].initTypedArrays();

                    var line = new $3Dmol.Line(lineGeometries[i], lineMaterial,
                        $3Dmol.LinePieces);

                    ret.add(line);
                }
            }

            // add any cross geometries
            for (i in crossGeometries) {
                if (crossGeometries.hasOwnProperty(i)) {
                    var linewidth = i;
                    var crossMaterial = new $3Dmol.LineBasicMaterial({
                        linewidth: linewidth,
                        vertexColors: true
                    });

                    crossGeometries[i].initTypedArrays();

                    var cross = new $3Dmol.Line(crossGeometries[i], crossMaterial,
                        $3Dmol.LinePieces);

                    ret.add(cross);
                }
            }

            //for BIOMT assembly
            if (dontDuplicateAtoms && !noAssembly) {
                var finalRet = new $3Dmol.Object3D();
                var t;
                for (t = 0; t < copyMatrices.length; t++) {
                    var transformedRet = new $3Dmol.Object3D();
                    transformedRet = ret.clone();
                    transformedRet.matrix.copy(copyMatrices[t]);
                    transformedRet.matrixAutoUpdate = false;
                    finalRet.add(transformedRet);
                }
                return finalRet;
            }

            return ret;
        };

        /**
         * Returns list of rotational/translational matrices if there is BIOMT data
         * Otherwise returns a list of just the ID matrix
         *
         * @function $3Dmol.GlModel#getSymmetries
         * @return {Array<$3Dmol.Matrix4>}
         *
         */
        this.getSymmetries = function() {
            if (copyMatrices.length > 1) {
                return copyMatrices; //returns copyMatrices, which has ID matrix as 1st entry
            } else {

                return idList;
            }
        };

        /**
         * Sets symmetries based on specified matrices in list
         *
         * @function $3Dmol.GlModel#setSymmetries
         * @param {Array<$3Dmol.Matrix4>} list
         *
         */
        this.setSymmetries = function(list) {
            if (typeof(list) == "undefined") { //delete sym data
                var idList = [idMatrix];
                copyMatrices = idList;
            } else {
                copyMatrices = list;
            }
        };

        /**
         * Returns model id number
         *
         * @function $3Dmol.GLMode#getID
         * @return {number} Model ID
         */
        this.getID = function() {
            return id;
        };

        // set default style and colors for atoms
        var setAtomDefaults = function(atoms, id) {
            for (var i = 0; i < atoms.length; i++) {
                var atom = atoms[i];
                if (atom) {
                    atom.style = atom.style || defaultAtomStyle;
                    atom.color = atom.color || ElementColors[atom.elem] || defaultColor;
                    atom.model = id;
                    if (atom.clickable)
                        atom.intersectionShape = {
                            sphere: [],
                            cylinder: [],
                            line: [],
                            triangle: []
                        };
                }
            }
        };

        /** add atoms to this model from molecular data string
         *
         * @function $3Dmol.GLModel#addMolData
         * @param {string} data - atom structure file input data string
         * @param {string} format - input file string format (e.g 'pdb', 'sdf', etc.)
         * @param {Object} options - format dependent options (e.g. 'options.keepH' to keep hydrogens)
         */
        this.addMolData = function(data, format, options) {
            options = options || {};
            if (!data)
                return; //leave an empty model
            if (typeof($3Dmol.Parsers[format]) == "undefined") {
                console.log("Unknown format: " + format);
                //try to guess correct format from data contents
                if (data.match(/^@<TRIPOS>MOLECULE/)) {
                    format = "mol2";
                } else if (data.match(/^HETATM/) || data.match(/^ATOM/)) {
                    format = "pdb";
                } else if (data.match(/^.*\n.*\n.\s*(\d+)\s+(\d+)/)) {
                    format = "sdf"; //could look at line 3
                } else {
                    format = "xyz";
                }
                console.log("Best guess: " + format);
            }
            var parse = $3Dmol.Parsers[format];
            parse(atoms, data, options, copyMatrices)
            noAssembly = !options.doAssembly; //for BIOMT uses
            dontDuplicateAtoms = !options.duplicateAssemblyAtoms;
            setAtomDefaults(atoms, id);
        };

        /** given a selection specification, return true if atom is selected
         *
         * @function $3Dmol.GLModel#atomIsSelected
         * @param {AtomSpec} atom
         * @param {AtomSelectionSpec} sel
         * @return {boolean}
         */
        this.atomIsSelected = function(atom, sel) {
            if (typeof(sel) === "undefined")
                return true; // undef gets all
            var invert = !!sel.invert;
            var ret = true;
            for (var key in sel) {
                if (key === 'predicate') { //a user supplied function for evaluating atoms
                    if (!sel['predicate'](atom)) {
                        ret = false;
                        break;
                    }
                } else if (sel.hasOwnProperty(key) && key != "props" && key != "invert" && key != "model" && key != "byres" && key != "expand" && key != "within") {

                    // if something is in sel, atom must have it                    
                    if (typeof(atom[key]) === "undefined") {
                        ret = false;
                        break;
                    }
                    var isokay = false;
                    if (key === "bonds") {
                        //special case counting number of bonds, for selecting nonbonded mostly
                        var val = sel[key];
                        if (val != atom.bonds.length) {
                            ret = false;
                            break;
                        }
                    } else if ($.isArray(sel[key])) {
                        // can be any of the listed values
                        var valarr = sel[key];
                        for (var i = 0; i < valarr.length; i++) {
                            if (atom[key] == valarr[i]) {
                                isokay = true;
                                break;
                            }
                        }
                        if (!isokay) {
                            ret = false;
                            break;
                        }
                    } else { // single match
                        var val = sel[key];
                        if (atom[key] != val) {
                            ret = false;
                            break;
                        }
                    }
                }
            }

            return invert ? !ret : ret;
        };


        /** return list of atoms selected by sel, this is specific to glmodel
         *
         * @function $3Dmol.GLModel#selectedAtoms
         * @param {AtomSelectionSpec} sel
         * @return {Array.<Object>}
         */
        this.selectedAtoms = function(sel, from) {
            var ret = [];
            if (!from) from = atoms;
            var aLength = from.length;
            for (var i = 0; i < aLength; i++) {
                var atom = from[i];
                if (atom) {
                    if (this.atomIsSelected(atom, sel))
                        ret.push(atom);
                }
            }

            // expand selection by some distance
            if (sel.hasOwnProperty("expand")) {

                // get atoms in expanded bounding box
                var expand = expandAtomList(ret, sel.expand)
                var retlen = ret.length
                for (var i = 0; i < expand.length; i++) {
                    for (var j = 0; j < retlen; j++) {

                        var dist = squaredDistance(expand[i], ret[j]);
                        var thresh = Math.pow(sel.expand, 2);
                        if (dist < thresh && dist > 0) {
                            ret.push(expand[i]);
                        }
                    }
                }
            }

            // selection within distance of sub-selection
            if (sel.hasOwnProperty("within") && sel.within.hasOwnProperty("sel") && sel.within.hasOwnProperty("distance")) {

                // get atoms in second selection
                var sel2 = this.selectedAtoms(sel.within.sel, atoms)
                var within = []
                for (var i = 0; i < sel2.length; i++) {
                    for (var j = 0; j < ret.length; j++) {

                        var dist = squaredDistance(sel2[i], ret[j]);
                        var thresh = Math.pow(sel.within.distance, 2);
                        if (dist < thresh && dist > 0) {
                            within.push(ret[j]);
                        }
                    }
                }
                ret = within;
            }

            // byres selection flag
            if (sel.hasOwnProperty("byres")) {

                // Keep track of visited residues, visited atoms, and atom stack
                var vResis = {};
                var vAtoms = [];
                var stack = [];

                for (var i = 0; i < ret.length; i++) {

                    // Check if atom is part of a residue, and that the residue hasn't been traversed yet
                    var atom = ret[i];
                    var c = atom.chain;
                    var r = atom.resi;
                    if (vResis[c] === undefined) vResis[c] = {};
                    if (atom.hasOwnProperty("resi") && vResis[c][r] === undefined) {

                        // Perform a depth-first search of atoms with the same resi
                        vResis[c][r] = true;
                        stack.push(atom);
                        while (stack.length > 0) {
                            atom = stack.pop();
                            c = atom.chain;
                            r = atom.resi;
                            if (vAtoms[atom.index] === undefined) {
                                vAtoms[atom.index] = true;
                                for (var j = 0; j < atom.bonds.length; j++) {
                                    var atom2 = atoms[atom.bonds[j]];
                                    if (vAtoms[atom2.index] === undefined && atom2.hasOwnProperty("resi") && atom2.chain == c && atom2.resi == r) {
                                        stack.push(atom2);
                                        ret.push(atom2);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            return ret;
        };

        var squaredDistance = function(atom1, atom2) {
            var xd = atom2.x - atom1.x;
            var yd = atom2.y - atom1.y;
            var zd = atom2.z - atom1.z;
            return (Math.pow(xd, 2) + Math.pow(yd, 2) + Math.pow(zd, 2));
        };

        /** returns a list of atoms in the expanded bounding box, but not in the current one
         *
         *  Bounding box:
         *
         *    [ [ xmin, ymin, zmin ],
         *      [ xmax, ymax, zmax ],
         *      [ xctr, yctr, zctr ] ]
         *
         **/
        var expandAtomList = function(atomList, amt) {

            var pb = $3Dmol.getExtent(atomList);
            var nb = [
                [],
                [],
                []
            ];

            for (var i = 0; i < 3; i++) {
                nb[0][i] = pb[0][i] - amt;
                nb[1][i] = pb[1][i] + amt;
                nb[2][i] = pb[2][i];
            }

            // look in added box "shell" for new atoms
            var expand = [];
            for (var i = 0; i < atoms.length; i++) {

                var x = atoms[i].x;
                var y = atoms[i].y;
                var z = atoms[i].z;

                if (x >= nb[0][0] && x < pb[0][0] || x > pb[1][0] && x <= nb[1][0]) {
                    if (y >= nb[0][1] && y < pb[0][1] || y > pb[1][1] && y <= nb[1][1]) {
                        if (z >= nb[0][2] && z < pb[0][2] || z > pb[1][2] && z <= nb[1][2]) {
                            expand.push(atoms[i]);
                        }
                    }
                }
            }
            return expand;
        };

        /** Add list of new atoms to model.  Adjusts bonds appropriately.
         *
         * @function $3Dmol.GLModel#addAtoms
         * @param {type} newatoms
         */
        this.addAtoms = function(newatoms) {
            molObj = null;
            var start = atoms.length;
            var indexmap = [];
            // mapping from old index to new index
            var i;
            for (i = 0; i < newatoms.length; i++) {
                indexmap[newatoms[i].index] = start + i;
            }

            // copy and push newatoms onto atoms
            for (i = 0; i < newatoms.length; i++) {
                var olda = newatoms[i];
                var nindex = indexmap[olda.index];
                var a = $.extend(false, {}, olda);
                a.index = nindex;
                a.bonds = [];
                a.bondOrder = [];
                // copy over all bonds contained in selection,
                // updating indices appropriately
                for (var j = 0; j < olda.bonds.length; j++) {
                    var neigh = indexmap[olda.bonds[j]];
                    if (typeof(neigh) != "undefined") {
                        a.bonds.push(neigh);
                        a.bondOrder.push(olda.bondOrder[j]);
                    }
                }
                atoms.push(a);
            }
        };

        /** Remove specified atoms from model
         *
         * @function $3Dmol.GLModel#removeAtoms
         * @param {type} badatoms
         * @return {removeAtoms}
         */
        this.removeAtoms = function(badatoms) {
            molObj = null;
            // make map of all baddies
            var baddies = [];
            var i;
            for (i = 0; i < badatoms.length; i++) {
                baddies[badatoms[i].index] = true;
            }

            // create list of good atoms
            var newatoms = [];
            for (i = 0; i < atoms.length; i++) {
                var a = atoms[i];
                if (!baddies[a.index])
                    newatoms.push(a);
            }

            // clear it all out
            atoms = [];
            // and add back in to get updated bonds
            this.addAtoms(newatoms);
        };


        /** Set atom style of selected atoms
         *
         * @function $3Dmol.GLModel#setStyle
         * @param {AtomSelectionSpec} sel
         * @param {AtomStyleSpec} style
         * @param {boolean} add - if true, add to current style, don't replace
         */
        this.setStyle = function(sel, style, add) {

            // do a copy to enforce style changes through this function
            var mystyle = $.extend(true, {}, style);
            var changedAtoms = false;
            // somethings we only calculate if there is a change in a certain
            // style, although these checks will only catch cases where both
            // are either null or undefined

            var selected = this.selectedAtoms(sel, atoms);
            for (var i = 0; i < atoms.length; i++) {
                if (atoms[i]) atoms[i].capDrawn = false; //reset for proper stick render
            }

            for (var i = 0; i < selected.length; i++) {
                changedAtoms = true;
                if (selected[i].clickable)
                    selected[i].intersectionShape = {
                        sphere: [],
                        cylinder: [],
                        line: [],
                        triangle: []
                    };

                if (!add) selected[i].style = {};
                for (var s in mystyle) {
                    if (mystyle.hasOwnProperty(s)) {
                        selected[i].style[s] = mystyle[s];
                    }
                }
            }

            if (changedAtoms)
                molObj = null; //force rebuild

        };

        /** given a mapping from element to color, set atom colors
         *
         * @function $3Dmol.GLModel#setColorByElement
         * @param {type} sel
         * @param {type} colors
         */
        this.setColorByElement = function(sel, colors) {

            if (molObj !== null && sameObj(colors, lastColors))
                return; // don't recompute
            lastColors = colors;
            var atoms = this.selectedAtoms(sel, atoms);
            if (atoms.length > 0)
                molObj = null; // force rebuild
            for (var i = 0; i < atoms.length; i++) {
                var a = atoms[i];
                if (typeof(colors[a.elem]) !== "undefined") {
                    a.color = colors[a.elem];
                }
            }
        };

        /**
         * @function $3Dmol.GLModel.setColorByProperty
         * @param {type} sel
         * @param {type} prop
         * @param {type} scheme
         */
        this.setColorByProperty = function(sel, prop, scheme) {
            var atoms = this.selectedAtoms(sel, atoms);
            lastColors = null; // don't bother memoizing
            if (atoms.length > 0)
                molObj = null; // force rebuild
            var min = Number.POSITIVE_INFINITY;
            var max = Number.NEGATIVE_INFINITY;
            var i, a;
            // compute the range            
            for (i = 0; i < atoms.length; i++) {
                a = atoms[i];
                if (a.properties && typeof(a.properties[prop]) !== undefined) {
                    var p = parseFloat(a.properties[prop]);
                    if (p < min) min = p;
                    if (p > max) max = p;
                }
            }
            // now apply colors using scheme
            for (i = 0; i < atoms.length; i++) {
                a = atoms[i];
                if (a.properties && typeof(a.properties[prop]) !== undefined) {
                    var c = scheme.valueToHex(parseFloat(a.properties[prop]), [min, max]);
                    a.color = c;
                }
            }
        };


        /** manage the globj for this model in the possed modelGroup - if it has to be regenerated, remove and add
         *
         * @function $3Dmol.GLModel#globj
         * @param {$3Dmol.Object3D} group
         */
        this.globj = function(group) {
            var time = new Date();
            if (molObj === null) { // have to regenerate
                molObj = createMolObj(atoms);
                var time2 = new Date();
                //console.log("object creation time: " + (time2 - time));
                if (renderedMolObj) { // previously rendered, remove
                    group.remove(renderedMolObj);
                    renderedMolObj = null;
                }
                renderedMolObj = molObj.clone();
                group.add(renderedMolObj);
            }
        };

        /** Remove any renderable mol object from scene
         *
         * @function $3Dmol.GLModel#removegl
         * @param {$3Dmol.Object3D} group
         */
        this.removegl = function(group) {
            if (renderedMolObj) {
                //dispose of geos and materials
                if (renderedMolObj.geometry !== undefined) renderedMolObj.geometry.dispose();
                if (renderedMolObj.material !== undefined) renderedMolObj.material.dispose();
                group.remove(renderedMolObj);
                renderedMolObj = null;
            }
            molObj = null;
        };

        /** Create labels for residues of selected atoms.
         * Will create a single label at the center of mass of all atoms
         * with the same chain,resn, and resi.
         * @function $3Dmol.GLModel#addResLabels
         *
         * @param {AtomSelectionSpec} sel
         * @param {$3Dmol.GLViewer} viewer
         */
        this.addResLabels = function(sel, viewer, style) {
            var atoms = this.selectedAtoms(sel, atoms);
            var bylabel = {}
                //collect by chain:resn:resi
            for (var i = 0; i < atoms.length; i++) {
                var a = atoms[i];
                var c = a.chain;
                var resn = a.resn;
                var resi = a.resi;
                var label = resn + '' + resi;
                if (!bylabel[c]) bylabel[c] = {};
                if (!bylabel[c][label]) bylabel[c][label] = []
                bylabel[c][label].push(a);
            }

            var mystyle = $.extend(true, {}, style);
            //now compute centers of mass
            for (var c in bylabel) {
                if (bylabel.hasOwnProperty(c)) {
                    var labels = bylabel[c];
                    for (var label in labels) {
                        if (labels.hasOwnProperty(label)) {
                            var atoms = labels[label];
                            var sum = new $3Dmol.Vector3(0, 0, 0);
                            for (var i = 0; i < atoms.length; i++) {
                                var a = atoms[i];
                                sum.x += a.x;
                                sum.y += a.y;
                                sum.z += a.z;
                            }
                            sum.divideScalar(atoms.length);
                            mystyle.position = sum;
                            viewer.addLabel(label, mystyle);
                        }
                    }
                }
            }
        }

    }

    return GLModel;

})();
/**
 * A GLShape is a collection of user specified shapes.
 *
 * @constructor $3Dmol.GLShape
 * @extends {ShapeSpec}
 * @param {number} sid - Unique identifier
 * @param {ShapeSpec} stylespec - shape style specification
 */
$3Dmol.GLShape = (function() {

    // Marching cube, to match with protein surface generation
    var ISDONE = 2;

    /**
     *
     * @param {$3Dmol.Geometry}
     *            geo
     * @param {$3Dmol.Color |
     *            colorlike} color
     */
    var updateColor = function(geo, color) {

        var C = color || $3Dmol.CC.color(color);
        geo.colorsNeedUpdate = true;

        for (var g in geo.geometryGroups) {

            var geoGroup = geo.geometryGroups[g];
            var colorArr = geoGroup.colorArray;

            for (var i = 0, il = geoGroup.vertices; i < il; ++i) {
                colorArr[i * 3] = C.r;
                colorArr[i * 3 + 1] = C.g;
                colorArr[i * 3 + 2] = C.b;
            }
        }

    };


    /**
     * @param {$3Dmol.GLShape}
     *            shape
     * @param {geometryGroup}
     *            geoGroup
     * @param {ArrowSpec}
     *            spec
     */
    var drawArrow = function(shape, geoGroup, spec) {

        var from = spec.start,
            end = spec.end,
            radius = spec.radius,
            radiusRatio = spec.radiusRatio,
            mid = spec.mid;

        if (!(from && end))
            return;

        // vertices

        var dir = end.clone();
        dir.sub(from).multiplyScalar(mid);
        var to = from.clone().add(dir);
        var negDir = dir.clone().negate();

        shape.intersectionShape.cylinder.push(new $3Dmol.Cylinder(from.clone(),
            to.clone(), radius));
        shape.intersectionShape.sphere.push(new $3Dmol.Sphere(from.clone(),
            radius));

        // get orthonormal vector
        var nvecs = [];
        nvecs[0] = dir.clone();
        if (Math.abs(nvecs[0].x) > 0.0001)
            nvecs[0].y += 1;
        else
            nvecs[0].x += 1;
        nvecs[0].cross(dir);
        nvecs[0].normalize();

        nvecs[0] = nvecs[0];
        // another orth vector
        nvecs[4] = nvecs[0].clone();
        nvecs[4].crossVectors(nvecs[0], dir);
        nvecs[4].normalize();
        nvecs[8] = nvecs[0].clone().negate();
        nvecs[12] = nvecs[4].clone().negate();

        // now quarter positions
        nvecs[2] = nvecs[0].clone().add(nvecs[4]).normalize();
        nvecs[6] = nvecs[4].clone().add(nvecs[8]).normalize();
        nvecs[10] = nvecs[8].clone().add(nvecs[12]).normalize();
        nvecs[14] = nvecs[12].clone().add(nvecs[0]).normalize();

        // eights
        nvecs[1] = nvecs[0].clone().add(nvecs[2]).normalize();
        nvecs[3] = nvecs[2].clone().add(nvecs[4]).normalize();
        nvecs[5] = nvecs[4].clone().add(nvecs[6]).normalize();
        nvecs[7] = nvecs[6].clone().add(nvecs[8]).normalize();
        nvecs[9] = nvecs[8].clone().add(nvecs[10]).normalize();
        nvecs[11] = nvecs[10].clone().add(nvecs[12]).normalize();
        nvecs[13] = nvecs[12].clone().add(nvecs[14]).normalize();
        nvecs[15] = nvecs[14].clone().add(nvecs[0]).normalize();

        // var start = geo.vertices.length;
        var start = geoGroup.vertices;
        var vertexArray = geoGroup.vertexArray;
        var colorArray = geoGroup.colorArray;
        var faceArray = geoGroup.faceArray;
        var normalArray = geoGroup.normalArray;
        var lineArray = geoGroup.lineArray;

        var offset, i, n;
        // add vertices, opposing vertices paired together
        for (i = 0, n = nvecs.length; i < n; ++i) {
            offset = 3 * (start + 3 * i);
            var bottom = nvecs[i].clone().multiplyScalar(radius).add(from);
            var top = nvecs[i].clone().multiplyScalar(radius).add(to);
            var conebase = nvecs[i].clone()
                .multiplyScalar(radius * radiusRatio).add(to);

            vertexArray[offset] = bottom.x;
            vertexArray[offset + 1] = bottom.y;
            vertexArray[offset + 2] = bottom.z;

            vertexArray[offset + 3] = top.x;
            vertexArray[offset + 4] = top.y;
            vertexArray[offset + 5] = top.z;

            vertexArray[offset + 6] = conebase.x;
            vertexArray[offset + 7] = conebase.y;
            vertexArray[offset + 8] = conebase.z;

            if (i > 0) {
                var prev_x = vertexArray[offset - 3];
                var prev_y = vertexArray[offset - 2];
                var prev_z = vertexArray[offset - 1];

                var c = new $3Dmol.Vector3(prev_x, prev_y, prev_z);
                var b = end.clone(),
                    b2 = to.clone();
                var a = new $3Dmol.Vector3(conebase.x, conebase.y, conebase.z);

                shape.intersectionShape.triangle.push(new $3Dmol.Triangle(a, b,
                    c));
                shape.intersectionShape.triangle.push(new $3Dmol.Triangle(c
                    .clone(), b2, a.clone()));
            }
        }

        geoGroup.vertices += 48;
        offset = geoGroup.vertices * 3;

        // caps
        vertexArray[offset] = from.x;
        vertexArray[offset + 1] = from.y;
        vertexArray[offset + 2] = from.z;

        vertexArray[offset + 3] = to.x;
        vertexArray[offset + 4] = to.y;
        vertexArray[offset + 5] = to.z;

        vertexArray[offset + 6] = end.x;
        vertexArray[offset + 7] = end.y;
        vertexArray[offset + 8] = end.z;

        geoGroup.vertices += 3;

        // now faces
        var face, norm, faceoffset, lineoffset;
        var t1, t2, t2b, t3, t3b, t4, t1offset, t2offset, t2boffset, t3offset, t3boffset, t4offset;
        var n1, n2, n3, n4;
        var n_vertices = 0;
        var fromi = geoGroup.vertices - 3,
            toi = geoGroup.vertices - 2,
            endi = geoGroup.vertices - 1;
        var fromoffset = fromi * 3,
            tooffset = toi * 3,
            endoffset = endi * 3;
        for (i = 0, n = nvecs.length - 1; i < n; ++i) {

            var ti = start + 3 * i;
            offset = ti * 3;
            faceoffset = geoGroup.faceidx;
            lineoffset = geoGroup.lineidx;

            t1 = ti;
            t1offset = t1 * 3;
            t2 = ti + 1;
            t2offset = t2 * 3;
            t2b = ti + 2;
            t2boffset = t2b * 3;
            t3 = ti + 4;
            t3offset = t3 * 3;
            t3b = ti + 5;
            t3boffset = t3b * 3;
            t4 = ti + 3;
            t4offset = t4 * 3;

            // face = [t1, t2, t4], [t2, t3, t4];
            // face = [t1, t2, t3, t4];

            norm = [nvecs[i], nvecs[i], nvecs[i + 1], nvecs[i + 1]];

            n1 = n2 = nvecs[i];
            n3 = n4 = nvecs[i + 1];

            normalArray[t1offset] = n1.x;
            normalArray[t2offset] = n2.x;
            normalArray[t4offset] = n4.x;
            normalArray[t1offset + 1] = n1.y;
            normalArray[t2offset + 1] = n2.y;
            normalArray[t4offset + 1] = n4.y;
            normalArray[t1offset + 2] = n1.z;
            normalArray[t2offset + 2] = n2.z;
            normalArray[t4offset + 2] = n4.z;

            normalArray[t2offset] = n2.x;
            normalArray[t3offset] = n3.x;
            normalArray[t4offset] = n4.x;
            normalArray[t2offset + 1] = n2.y;
            normalArray[t3offset + 1] = n3.y;
            normalArray[t4offset + 1] = n4.y;
            normalArray[t2offset + 2] = n2.z;
            normalArray[t3offset + 2] = n3.z;
            normalArray[t4offset + 2] = n4.z;

            normalArray[t2boffset] = n2.x;
            normalArray[t3boffset] = n3.x;
            normalArray[t2boffset + 1] = n2.y;
            normalArray[t3boffset + 1] = n3.y;
            normalArray[t2boffset + 2] = n2.z;
            normalArray[t3boffset + 2] = n3.z;

            // sides
            faceArray[faceoffset] = t1;
            faceArray[faceoffset + 1] = t2;
            faceArray[faceoffset + 2] = t4;
            faceArray[faceoffset + 3] = t2;
            faceArray[faceoffset + 4] = t3;
            faceArray[faceoffset + 5] = t4;
            // caps
            faceArray[faceoffset + 6] = t1;
            faceArray[faceoffset + 7] = t4;
            faceArray[faceoffset + 8] = fromi;
            faceArray[faceoffset + 9] = t2b;
            faceArray[faceoffset + 10] = toi;
            faceArray[faceoffset + 11] = t3b;
            // arrowhead
            faceArray[faceoffset + 12] = t2b;
            faceArray[faceoffset + 13] = endi;
            faceArray[faceoffset + 14] = t3b;

            // sides
            lineArray[lineoffset] = t1;
            lineArray[lineoffset + 1] = t2;
            lineArray[lineoffset + 2] = t1;
            lineArray[lineoffset + 3] = t4;
            // lineArray[lineoffset+4] = t2, lineArray[lineoffset+5] = t3;
            lineArray[lineoffset + 4] = t3;
            lineArray[lineoffset + 5] = t4;
            // caps
            lineArray[lineoffset + 6] = t1;
            lineArray[lineoffset + 7] = t4;
            // lineArray[lineoffset+10] = t1, lineArray[lineoffset+11] = fromi;
            // lineArray[lineoffset+12] = t4, lineArray[lineoffset+13] = fromi;

            lineArray[lineoffset + 8] = t2b;
            lineArray[lineoffset + 9] = t2; // toi
            lineArray[lineoffset + 10] = t2b;
            lineArray[lineoffset + 11] = t3b;
            lineArray[lineoffset + 12] = t3;
            lineArray[lineoffset + 13] = t3b; // toi
            // arrowhead
            lineArray[lineoffset + 14] = t2b;
            lineArray[lineoffset + 15] = endi;
            lineArray[lineoffset + 16] = t2b;
            lineArray[lineoffset + 17] = t3b;
            lineArray[lineoffset + 18] = endi;
            lineArray[lineoffset + 19] = t3b;

            geoGroup.faceidx += 15;
            geoGroup.lineidx += 20;

        }
        // final face

        face = [start + 45, start + 46, start + 1, start, start + 47,
            start + 2
        ];
        norm = [nvecs[15], nvecs[15], nvecs[0], nvecs[0]];

        faceoffset = geoGroup.faceidx;
        lineoffset = geoGroup.lineidx;

        t1 = face[0];
        t1offset = t1 * 3;
        t2 = face[1];
        t2offset = t2 * 3;
        t2b = face[4];
        t2boffset = t2b * 3;
        t3 = face[2];
        t3offset = t3 * 3;
        t3b = face[5];
        t3boffset = t3b * 3;
        t4 = face[3];
        t4offset = t4 * 3;

        n1 = n2 = nvecs[15];
        n3 = n4 = nvecs[0];

        normalArray[t1offset] = n1.x;
        normalArray[t2offset] = n2.x;
        normalArray[t4offset] = n4.x;
        normalArray[t1offset + 1] = n1.y;
        normalArray[t2offset + 1] = n2.y;
        normalArray[t4offset + 1] = n4.y;
        normalArray[t1offset + 2] = n1.z;
        normalArray[t2offset + 2] = n2.z;
        normalArray[t4offset + 2] = n4.z;

        normalArray[t2offset] = n2.x;
        normalArray[t3offset] = n3.x;
        normalArray[t4offset] = n4.x;
        normalArray[t2offset + 1] = n2.y;
        normalArray[t3offset + 1] = n3.y;
        normalArray[t4offset + 1] = n4.y;
        normalArray[t2offset + 2] = n2.z;
        normalArray[t3offset + 2] = n3.z;
        normalArray[t4offset + 2] = n4.z;

        normalArray[t2boffset] = n2.x;
        normalArray[t3boffset] = n3.x;
        normalArray[t2boffset + 1] = n2.y;
        normalArray[t3boffset + 1] = n3.y;
        normalArray[t2boffset + 2] = n2.z;
        normalArray[t3boffset + 2] = n3.z;

        // Cap normals
        dir.normalize();
        negDir.normalize();
        normalArray[fromoffset] = negDir.x;
        normalArray[tooffset] = normalArray[endoffset] = dir.x;
        normalArray[fromoffset + 1] = negDir.y;
        normalArray[tooffset + 1] = normalArray[endoffset + 1] = dir.y;
        normalArray[fromoffset + 2] = negDir.z;
        normalArray[tooffset + 2] = normalArray[endoffset + 2] = dir.z;

        // Final side
        faceArray[faceoffset] = t1;
        faceArray[faceoffset + 1] = t2;
        faceArray[faceoffset + 2] = t4;
        faceArray[faceoffset + 3] = t2;
        faceArray[faceoffset + 4] = t3;
        faceArray[faceoffset + 5] = t4;
        // final caps
        faceArray[faceoffset + 6] = t1;
        faceArray[faceoffset + 7] = t4;
        faceArray[faceoffset + 8] = fromi;
        faceArray[faceoffset + 9] = t2b;
        faceArray[faceoffset + 10] = toi;
        faceArray[faceoffset + 11] = t3b;
        // final arrowhead
        faceArray[faceoffset + 12] = t2b;
        faceArray[faceoffset + 13] = endi;
        faceArray[faceoffset + 14] = t3b;

        // sides
        lineArray[lineoffset] = t1;
        lineArray[lineoffset + 1] = t2;
        lineArray[lineoffset + 2] = t1;
        lineArray[lineoffset + 3] = t4;
        // lineArray[lineoffset+4] = t2, lineArray[lineoffset+5] = t3;
        lineArray[lineoffset + 4] = t3;
        lineArray[lineoffset + 5] = t4;
        // caps
        lineArray[lineoffset + 6] = t1;
        lineArray[lineoffset + 7] = t4;
        // lineArray[lineoffset+10] = t1, lineArray[lineoffset+11] = fromi;
        // lineArray[lineoffset+12] = t4, lineArray[lineoffset+13] = fromi;

        lineArray[lineoffset + 8] = t2b;
        lineArray[lineoffset + 9] = t2; // toi
        lineArray[lineoffset + 10] = t2b;
        lineArray[lineoffset + 11] = t3b;
        lineArray[lineoffset + 12] = t3;
        lineArray[lineoffset + 13] = t3b; // toi
        // arrowhead
        lineArray[lineoffset + 14] = t2b;
        lineArray[lineoffset + 15] = endi;
        lineArray[lineoffset + 16] = t2b;
        lineArray[lineoffset + 17] = t3b;
        lineArray[lineoffset + 18] = endi;
        lineArray[lineoffset + 19] = t3b;

        geoGroup.faceidx += 15;
        geoGroup.lineidx += 20;

    };

    // handles custom shape generation from user supplied arrays
    // May need to generate normal and/or line indices
    /**
     * @param {$3Dmol.GLShape}
     *            shape
     * @param {geometryGroup}
     *            geoGroup
     * @param {CustomSpec}
     *            customSpec
     */
    var drawCustom = function(shape, geoGroup, customSpec) {

        var vertexArr = customSpec.vertexArr,
            normalArr = customSpec.normalArr,
            faceArr = customSpec.faceArr,
            lineArr = customSpec.lineArr;

        if (vertexArr.length === 0 || faceArr.length === 0) {
            console
                .warn("Error adding custom shape component: No vertices and/or face indices supplied!");
        }

        geoGroup.vertices = vertexArr.length;
        geoGroup.faceidx = faceArr.length;

        var offset, v, a, b, c, i, il;

        for (i = 0, il = geoGroup.vertices; i < il; ++i) {
            offset = i * 3;
            v = vertexArr[i];
            geoGroup.vertexArray[offset] = v.x;
            geoGroup.vertexArray[offset + 1] = v.y;
            geoGroup.vertexArray[offset + 2] = v.z;
        }

        for (i = 0, il = geoGroup.faceidx / 3; i < il; ++i) {
            offset = i * 3;
            a = faceArr[offset];
            b = faceArr[offset + 1];
            c = faceArr[offset + 2];
            var vA = new $3Dmol.Vector3(),
                vB = new $3Dmol.Vector3(),
                vC = new $3Dmol.Vector3();
            shape.intersectionShape.triangle.push(new $3Dmol.Triangle(vA
                .copy(vertexArr[a]), vB.copy(vertexArr[b]), vC
                .copy(vertexArr[c])));
        }

        geoGroup.faceArray = new Uint16Array(faceArr);

        geoGroup.truncateArrayBuffers(true, true);

        if (normalArr.length < geoGroup.vertices)
            geoGroup.setNormals();
        else {

            geoGroup.normalArray = new Float32Array(geoGroup.vertices * 3);
            var n;
            for (i = 0, il = geoGroup.vertices; i < il; ++i) {
                offset = i * 3;
                n = normalArr[i];
                geoGroup.normalArray[offset] = n.x;
                geoGroup.normalArray[offset + 1] = n.y;
                geoGroup.normalArray[offset + 2] = n.z;
            }
        }

        if (!lineArr.length)
            geoGroup.setLineIndices();
        else
            geoGroup.lineArray = new Uint16Array(lineArr);

        geoGroup.lineidx = geoGroup.lineArray.length;

    };

    // Read a cube file - generate model and possibly shape(s)
    /**
     * @param {$3Dmol.GLShape}
     *            shape
     * @param {geometryGroup}
     *            geoGroup
     * @param {string}
     *            str
     * @param {number}
     *            isoval
     * @param {boolean}
     *            voxel
     */
    var parseCube = function(shape, geoGroup, str, isoval, voxel) {

        var lines = str.replace(/^\s+/, "").split(/[\n\r]+/);

        if (lines.length < 6)
            return;

        var lineArr = lines[2].replace(/^\s+/, "").replace(/\s+/g, " ").split(
            " ");

        var natoms = Math.abs(parseFloat(lineArr[0]));
        var origin = new $3Dmol.Vector3(parseFloat(lineArr[1]),
            parseFloat(lineArr[2]), parseFloat(lineArr[3]));

        lineArr = lines[3].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");

        // might have to convert from bohr units to angstroms
        var convFactor = (parseFloat(lineArr[0]) > 0) ? 0.529177 : 1;

        origin.multiplyScalar(convFactor);

        var nX = Math.abs(lineArr[0]);
        var xVec = new $3Dmol.Vector3(parseFloat(lineArr[1]),
                parseFloat(lineArr[2]), parseFloat(lineArr[3]))
            .multiplyScalar(convFactor);

        lineArr = lines[4].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");

        var nY = Math.abs(lineArr[0]);
        var yVec = new $3Dmol.Vector3(parseFloat(lineArr[1]),
                parseFloat(lineArr[2]), parseFloat(lineArr[3]))
            .multiplyScalar(convFactor);

        lineArr = lines[5].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");

        var nZ = Math.abs(lineArr[0]);
        var zVec = new $3Dmol.Vector3(parseFloat(lineArr[1]),
                parseFloat(lineArr[2]), parseFloat(lineArr[3]))
            .multiplyScalar(convFactor);

        // lines.splice(6, natoms).join("\n");

        lines = new Float32Array(lines.splice(natoms + 7).join(" ").replace(
            /^\s+/, "").split(/[\s\r]+/));

        var vertnums = new Int16Array(nX * nY * nZ);

        var i, il;

        for (i = 0, il = vertnums.length; i < il; ++i)
            vertnums[i] = -1;

        var bitdata = new Uint8Array(nX * nY * nZ);

        for (i = 0, il = lines.length; i < il; ++i) {
            var val = (isoval >= 0) ? lines[i] - isoval : isoval - lines[i];

            if (val > 0)
                bitdata[i] |= ISDONE;

        }

        var verts = [],
            faces = [];

        $3Dmol.MarchingCube.march(bitdata, verts, faces, {
            fulltable: true,
            voxel: voxel,
            scale: xVec.length(),
            origin: origin,
            nX: nX,
            nY: nY,
            nZ: nZ
        });

        if (!voxel)
            $3Dmol.MarchingCube.laplacianSmooth(10, verts, faces);

        drawCustom(shape, geoGroup, {
            vertexArr: verts,
            faceArr: faces,
            normalArr: [],
            lineArr: []
        });

    };

    // Update a bounding sphere's position and radius
    // from list of centroids and new points
    /**
     * @param {$3Dmol.Sphere}
     *            sphere
     * @param {Object}
     *            components
     * @param {Array}
     *            points
     */
    var updateBoundingFromPoints = function(sphere, components, points) {

        sphere.center.set(0, 0, 0);

        var i, il;

        if (components.length > 0) {

            for (i = 0, il = components.length; i < il; ++i) {
                var centroid = components[i].centroid;
                sphere.center.add(centroid);
            }

            sphere.center.divideScalar(components.length);
        }

        var maxRadiusSq = sphere.radius * sphere.radius;

        for (i = 0, il = points.length / 3; i < il; i++) {
            var x = points[i * 3],
                y = points[i * 3 + 1],
                z = points[i * 3 + 2];
            var radiusSq = sphere.center.distanceToSquared({
                x: x,
                y: y,
                z: z
            });
            maxRadiusSq = Math.max(maxRadiusSq, radiusSq);
        }

        sphere.radius = Math.sqrt(maxRadiusSq);

    };

    /**
     *
     * @param {$3Dmol.GLShape}
     *            shape
     * @param {ShapeSpec}
     *            stylespec
     * @returns {undefined}
     */
    var updateFromStyle = function(shape, stylespec) {
        shape.color = stylespec.color || new $3Dmol.Color();
        if (!(stylespec.color instanceof $3Dmol.Color))
            shape.color = $3Dmol.CC.color(stylespec.color);
        shape.wireframe = stylespec.wireframe ? true : false;
        shape.alpha = stylespec.alpha ? $3Dmol.Math.clamp(stylespec.alpha, 0.0,
            1.0) : 1.0;
        shape.side = (stylespec.side !== undefined) ? stylespec.side : $3Dmol.DoubleSide;
        shape.linewidth = typeof(stylespec.linewidth) == 'undefined' ? 1 : stylespec.linewidth;
        // Click handling
        shape.clickable = stylespec.clickable ? true : false;
        shape.callback = typeof(stylespec.callback) === "function" ? stylespec.callback : null;
    };

    /**
     * Custom renderable shape
     *
     * @constructor $3Dmol.GLShape
     *
     * @param {Object}
     *            stylespec
     * @returns {$3Dmol.GLShape}
     */
    function GLShape(stylespec) {

        stylespec = stylespec || {};
        $3Dmol.ShapeIDCount++;

        this.boundingSphere = new $3Dmol.Sphere();
        /** @type {IntersectionShapes} */
        this.intersectionShape = {
            sphere: [],
            cylinder: [],
            line: [],
            triangle: []
        };

        updateFromStyle(this, stylespec);

        // Keep track of shape components and their centroids
        var components = [];
        var shapeObj = null;
        var renderedShapeObj = null;

        var geo = new $3Dmol.Geometry(true);

        /** Update shape with new style specification
         * @param {ShapeSpec} newspec
         * @return {$3Dmol.GLShape}
         */
        this.updateStyle = function(newspec) {

            for (var prop in newspec) {
                stylespec[prop] = newspec[prop];
            }

            updateFromStyle(this, stylespec);
        };

        /**
         * Creates a custom shape from supplied vertex and face arrays
         * @param {CustomSpec} customSpec
         * @return {$3Dmol.GLShape}
         */
        this.addCustom = function(customSpec) {

            customSpec.vertexArr = customSpec.vertexArr || [];
            customSpec.faceArr = customSpec.faceArr || [];
            customSpec.normalArr = customSpec.normalArr || [];
            customSpec.lineArr = customSpec.lineArr || [];

            // Force creation of new geometryGroup for each added component
            var geoGroup = geo.addGeoGroup();
            drawCustom(this, geoGroup, customSpec);
            geoGroup.truncateArrayBuffers(true, true);

            for (var i = 0; i < geoGroup.colorArray.length / 3; ++i) {
                geoGroup.colorArray[i * 3] = this.color.r;
                geoGroup.colorArray[i * 3 + 1] = this.color.g;
                geoGroup.colorArray[i * 3 + 2] = this.color.b;
            }

            components.push({
                id: geoGroup.id,
                geoGroup: geoGroup,
                centroid: geoGroup.getCentroid()
            });

            updateBoundingFromPoints(this.boundingSphere, components,
                geoGroup.vertexArray);
        };

        /**
         * Creates a sphere shape
         * @param {SphereSpec} sphereSpec
         * @return {$3Dmol.GLShape}
         */
        this.addSphere = function(sphereSpec) {

            sphereSpec.center = sphereSpec.center || {
                x: 0,
                y: 0,
                z: 0
            };
            sphereSpec.radius = sphereSpec.radius ? $3Dmol.Math.clamp(
                sphereSpec.radius, 0, Infinity) : 1.5;
            sphereSpec.color = $3Dmol.CC.color(sphereSpec.color);

            this.intersectionShape.sphere.push(new $3Dmol.Sphere(
                sphereSpec.center, sphereSpec.radius));

            var geoGroup = geo.addGeoGroup();
            $3Dmol.GLDraw.drawSphere(geo, sphereSpec.center,
                sphereSpec.radius, sphereSpec.color);
            geoGroup.truncateArrayBuffers(true, true);

            components.push({
                id: geoGroup.id,
                geoGroup: geoGroup, // has to be last group added
                centroid: new $3Dmol.Vector3(sphereSpec.center.x,
                    sphereSpec.center.y, sphereSpec.center.z)
            });

            updateBoundingFromPoints(this.boundingSphere, components,
                geoGroup.vertexArray);
        };

        /**
         * Creates a cylinder shape
         * @param {CylinderSpec} cylinderSpec
         * @return {$3Dmol.GLShape}
         */
        this.addCylinder = function(cylinderSpec) {

            cylinderSpec.start = cylinderSpec.start || {};
            cylinderSpec.end = cylinderSpec.end || {};

            var start = new $3Dmol.Vector3(cylinderSpec.start.x || 0,
                cylinderSpec.start.y || 0, cylinderSpec.start.z || 0);
            var end = new $3Dmol.Vector3(cylinderSpec.end.x || 3,
                cylinderSpec.end.y || 0, cylinderSpec.end.z || 0);

            var radius = cylinderSpec.radius || 0.1;

            var color = $3Dmol.CC.color(cylinderSpec.color);


            var geoGroup = geo.addGeoGroup();

            $3Dmol.GLDraw.drawCylinder(geo, start, end, radius, color, cylinderSpec.fromCap, cylinderSpec.toCap);
            geoGroup.truncateArrayBuffers(true, true);

            var centroid = new $3Dmol.Vector3();
            components.push({
                id: geoGroup.id,
                geoGroup: geoGroup,
                centroid: centroid.addVectors(cylinderSpec.start,
                    cylinderSpec.end).multiplyScalar(0.5)
            });

            updateBoundingFromPoints(this.boundingSphere, components,
                geoGroup.vertexArray);

        };

        /**
         * Creates an arrow shape
         * @param {ArrowSpec} arrowSpec
         * @return {$3Dmol.GLShape}
         */
        this.addArrow = function(arrowSpec) {

            arrowSpec.start = arrowSpec.start || {};
            arrowSpec.end = arrowSpec.end || {};

            arrowSpec.start = new $3Dmol.Vector3(arrowSpec.start.x || 0,
                arrowSpec.start.y || 0, arrowSpec.start.z || 0);

            if (arrowSpec.dir instanceof $3Dmol.Vector3 && arrowSpec.length instanceof number) {
                var end = arrowSpec.dir.clone().multiplyScalar(arrowSpec.length).add(
                    start);
                arrowSpec.end = end;
            } else {
                arrowSpec.end = new $3Dmol.Vector3(arrowSpec.end.x || 3,
                    arrowSpec.end.y || 0, arrowSpec.end.z || 0);
            }

            arrowSpec.radius = arrowSpec.radius || 0.1;

            arrowSpec.radiusRatio = arrowSpec.radiusRatio || 1.618034;
            arrowSpec.mid = (0 < arrowSpec.mid && arrowSpec.mid < 1) ? arrowSpec.mid : 0.618034;

            var geoGroup = geo.addGeoGroup();

            drawArrow(this, geoGroup, arrowSpec);
            geoGroup.truncateArrayBuffers(true, true);

            var centroid = new $3Dmol.Vector3();
            components.push({
                id: geoGroup.id,
                geoGroup: geoGroup,
                centroid: centroid.addVectors(arrowSpec.start, arrowSpec.end)
                    .multiplyScalar(0.5)
            });

            updateBoundingFromPoints(this.boundingSphere, components,
                geoGroup.vertexArray);

        };

        /** 
         * Creates custom shape from volumetric data
         * @param {string} data - Volumetric input data
         * @param {string} fmt - Input data format (e.g. 'cube' for cube file format)
         * @param {VolSpec} volSpec - Volumetric data shape specification
         * @return {$3Dmol.GLShape}
         */
        this.addVolumetricData = function(data, fmt, volSpec) {

            // str, fmt, isoval, vxl
            var isoval = (volSpec.isoval !== undefined && typeof(volSpec.isoval) === "number") ? volSpec.isoval : 0.0;
            var vxl = (volSpec.voxel) ? true : false;

            var geoGroup = geo.addGeoGroup();

            // TODO: Initialize geometry group here (parseCube currently calls
            // addCustom...)
            switch (fmt) {
                case "cube":
                    parseCube(this, geoGroup, data, isoval, vxl);
                    break;
            }

            components.push({
                id: geoGroup.id,
                geoGroup: geoGroup,
                centroid: geoGroup.getCentroid()
            });

            this.updateStyle(volSpec);

            updateBoundingFromPoints(this.boundingSphere, components,
                geoGroup.vertexArray);

        };

        /**
         * Initialize webgl objects for rendering
         * @param {$3Dmol.Object3D} group
         *
         */
        this.globj = function(group) {

            geo.initTypedArrays();

            updateColor(geo, this.color);

            shapeObj = new $3Dmol.Object3D();
            var material = new $3Dmol.MeshLambertMaterial({
                wireframe: this.wireframe,
                vertexColors: true,
                ambient: 0x000000,
                reflectivity: 0,
                side: this.side,
                transparent: (this.alpha < 1) ? true : false,
                opacity: this.alpha,
                wireframeLinewidth: this.linewidth
            });

            var mesh = new $3Dmol.Mesh(geo, material);
            shapeObj.add(mesh);

            if (renderedShapeObj) {
                group.remove(renderedShapeObj);
                renderedShapeObj = null;
            }
            renderedShapeObj = shapeObj.clone();
            group.add(renderedShapeObj);

        };

        this.removegl = function(group) {
            if (renderedShapeObj) {
                // dispose of geos and materials
                if (renderedShapeObj.geometry !== undefined)
                    renderedShapeObj.geometry.dispose();
                if (renderedShapeObj.material !== undefined)
                    renderedShapeObj.material.dispose();
                group.remove(renderedShapeObj);
                renderedShapeObj = null;
            }
            shapeObj = null;
        };

    };

    Object.defineProperty(GLShape.prototype, "position", {

        get: function() {
            return this.boundingSphere.center;
        }

    });

    Object.defineProperty(GLShape.prototype, "x", {

        get: function() {
            return this.boundingSphere.center.x;
        }

    });

    Object.defineProperty(GLShape.prototype, "y", {

        get: function() {
            return this.boundingSphere.center.y;
        }

    });

    Object.defineProperty(GLShape.prototype, "z", {

        get: function() {
            return this.boundingSphere.center.z;
        }

    });

    return GLShape;

}());

$3Dmol.ShapeIDCount = 0; //a molecular viewer based on GLMol



/**
 * WebGL-based 3Dmol.js viewer
 * Note: The preferred method of instantiating a GLViewer is through {@link $3Dmol.createViewer}
 *
 * @constructor
 * @param {Object} element HTML element within which to create viewer
 * @param {function} callback - Callback function to be immediately executed on this viewer
 * @param {Object} defaultcolors - Object defining default atom colors as atom => color property value pairs for all models within this viewer
 */
$3Dmol.GLViewer = (function() {
    // private class variables
    var numWorkers = 4; // number of threads for surface generation
    var maxVolume = 64000; // how much to break up surface calculations

    // private class helper functions

    function GLViewer(element, callback, defaultcolors, nomouse) {
        // set variables
        var _viewer = this;
        var container = element;
        var id = container.id;

        var models = []; // atomistic molecular models
        var surfaces = [];
        var shapes = []; // Generic shapes
        var labels = [];
        var clickables = []; //things you can click on
        var WIDTH = container.width();
        var HEIGHT = container.height();

        // set dimensions
        // $(container).width(WIDTH);
        // $(container).height(HEIGHT);

        var ASPECT = WIDTH / HEIGHT;
        var NEAR = 1,
            FAR = 800;
        var CAMERA_Z = 150;
        var fov = 20;


        var renderer = new $3Dmol.Renderer({
            antialias: true,
            premultipliedAlpha: false
        });

        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        renderer.domElement.style.padding = "0";
        renderer.domElement.style.position = "absolute"; //TODO: get rid of this
        renderer.domElement.style.top = "0px";
        renderer.domElement.style.zIndex = "0";
        container.append(renderer.domElement);
        renderer.setSize(WIDTH, HEIGHT);
        var camera = new $3Dmol.Camera(fov, ASPECT, NEAR, FAR);
        camera.position = new $3Dmol.Vector3(0, 0, CAMERA_Z);
        var lookingAt = new $3Dmol.Vector3();
        camera.lookAt(lookingAt);

        var raycaster = new $3Dmol.Raycaster(new $3Dmol.Vector3(0, 0, 0),
            new $3Dmol.Vector3(0, 0, 0));
        var projector = new $3Dmol.Projector();
        var mouseVector = new $3Dmol.Vector3(0, 0, 0);

        var scene = null;
        var rotationGroup = null; // which contains modelGroup
        var modelGroup = null;

        var bgColor = 0x000000;
        var fogStart = 0.4;
        var slabNear = -50; // relative to the center of rotationGroup
        var slabFar = 50;

        // UI variables
        var cq = new $3Dmol.Quaternion(0, 0, 0, 1);
        var dq = new $3Dmol.Quaternion(0, 0, 0, 1);
        var isDragging = false;
        var mouseStartX = 0;
        var mouseStartY = 0;
        var touchDistanceStart = 0;
        var currentModelPos = 0;
        var cz = 0;
        var cslabNear = 0;
        var cslabFar = 0;

        var setSlabAndFog = function() {
            var center = camera.position.z - rotationGroup.position.z;
            if (center < 1)
                center = 1;
            camera.near = center + slabNear;
            if (camera.near < 1)
                camera.near = 1;
            camera.far = center + slabFar;
            if (camera.near + 1 > camera.far)
                camera.far = camera.near + 1;
            if (camera instanceof $3Dmol.Camera) {
                camera.fov = fov;
            } else {
                camera.right = center * Math.tan(Math.PI / 180 * fov);
                camera.left = -camera.right;
                camera.top = camera.right / ASPECT;
                camera.bottom = -camera.top;
            }
            camera.updateProjectionMatrix();
            scene.fog.near = camera.near + fogStart * (camera.far - camera.near);
            // if (scene.fog.near > center) scene.fog.near = center;
            scene.fog.far = camera.far;
        };

        // display scene
        var show = function() {
            if (!scene)
                return;

            // var time = new Date();
            setSlabAndFog();
            renderer.render(scene, camera);
            // console.log("rendered in " + (+new Date() - time) + "ms");
        };

        var initializeScene = function() {

            scene = new $3Dmol.Scene();
            scene.fog = new $3Dmol.Fog(bgColor, 100, 200);

            modelGroup = new $3Dmol.Object3D();
            rotationGroup = new $3Dmol.Object3D();
            rotationGroup.useQuaternion = true;
            rotationGroup.quaternion = new $3Dmol.Quaternion(0, 0, 0, 1);
            rotationGroup.add(modelGroup);

            scene.add(rotationGroup);

            // setup lights
            var directionalLight = new $3Dmol.Light(0xFFFFFF);
            directionalLight.position = new $3Dmol.Vector3(0.2, 0.2, 1)
                .normalize();
            directionalLight.intensity = 1.0;
            scene.add(directionalLight);
        };

        initializeScene();

        renderer.setClearColorHex(bgColor, 1.0);
        scene.fog.color = $3Dmol.CC.color(bgColor);

        var clickedAtom = null;
        // enable mouse support
        var glDOM = $(renderer.domElement);

        //regenerate the list of clickables
        var updateClickables = function() {
            clickables = [];
            var i, il;

            for (i = 0, il = models.length; i < il; i++) {
                var model = models[i];
                if (model) {
                    var atoms = model.selectedAtoms({
                        clickable: true
                    });
                    clickables = clickables.concat(atoms);
                }
            }

            for (i = 0, il = shapes.length; i < il; i++) {

                var shape = shapes[i];
                if (shape && shape.clickable) {
                    clickables.push(shape);
                }
            }
        };

        // Checks for selection intersects on mousedown
        var handleClickSelection = function(mouseX, mouseY) {
            if (clickables.length == 0) return;
            var mouse = {
                x: mouseX,
                y: mouseY,
                z: -1.0
            };
            mouseVector.set(mouse.x, mouse.y, mouse.z);
            projector.unprojectVector(mouseVector, camera);
            mouseVector.sub(camera.position).normalize();

            raycaster.set(camera.position, mouseVector);

            var intersects = [];

            intersects = raycaster.intersectObjects(modelGroup, clickables);

            if (intersects.length) {
                var selected = intersects[0].clickable;
                if (selected.callback !== undefined && typeof(selected.callback) === "function") {
                    selected.callback(selected, _viewer);
                }
            }
        };

        var calcTouchDistance = function(ev) { // distance between first two
            // fingers
            var xdiff = ev.originalEvent.targetTouches[0].pageX - ev.originalEvent.targetTouches[1].pageX;
            var ydiff = ev.originalEvent.targetTouches[0].pageY - ev.originalEvent.targetTouches[1].pageY;
            return Math.sqrt(xdiff * xdiff + ydiff * ydiff);
        }

        //check targetTouches as well
        var getXY = function(ev) {
            var x = ev.pageX,
                y = ev.pageY;
            if (ev.originalEvent.targetTouches && ev.originalEvent.targetTouches[0]) {
                x = ev.originalEvent.targetTouches[0].pageX;
                y = ev.originalEvent.targetTouches[0].pageY;
            } else if (ev.originalEvent.changedTouches && ev.originalEvent.changedTouches[0]) {
                x = ev.originalEvent.changedTouches[0].pageX;
                y = ev.originalEvent.changedTouches[0].pageY;
            }
            return [x, y];
        };

        //for a given screen (x,y) displacement return model displacement 
        var screenXY2model = function(x, y) {
            var dx = x / WIDTH;
            var dy = y / HEIGHT;
            var zpos = rotationGroup.position.z;
            var q = rotationGroup.quaternion;
            var t = new $3Dmol.Vector3(0, 0, zpos);
            projector.projectVector(t, camera);
            t.x += dx * 2;
            t.y -= dy * 2;
            projector.unprojectVector(t, camera);
            t.z = 0;
            t.applyQuaternion(q);
            return t;
        }

        if (!nomouse) {
            // user can request that the mouse handlers not be installed
            glDOM.bind('mousedown touchstart', function(ev) {
                ev.preventDefault();
                if (!scene)
                    return;
                var xy = getXY(ev);
                var x = xy[0];
                var y = xy[1];

                if (x === undefined)
                    return;
                isDragging = true;
                clickedAtom = null;
                mouseButton = ev.which;
                mouseStartX = x;
                mouseStartY = y;
                touchDistanceStart = 0;
                if (ev.originalEvent.targetTouches && ev.originalEvent.targetTouches.length == 2) {
                    touchDistanceStart = calcTouchDistance(ev);
                }
                cq = rotationGroup.quaternion;
                cz = rotationGroup.position.z;
                currentModelPos = modelGroup.position.clone();
                cslabNear = slabNear;
                cslabFar = slabFar;

            });

            glDOM.bind('DOMMouseScroll mousewheel', function(ev) { // Zoom
                ev.preventDefault();
                if (!scene)
                    return;
                var scaleFactor = (CAMERA_Z - rotationGroup.position.z) * 0.85;
                if (ev.originalEvent.detail) { // Webkit
                    rotationGroup.position.z += scaleFactor * ev.originalEvent.detail / 10;
                } else if (ev.originalEvent.wheelDelta) { // Firefox
                    rotationGroup.position.z -= scaleFactor * ev.originalEvent.wheelDelta / 400;
                }
                if (rotationGroup.position.z > CAMERA_Z) rotationGroup.position.z = CAMERA_Z * 0.999; //avoid getting stuck

                show();
            });

            glDOM.bind("contextmenu", function(ev) {
                ev.preventDefault();
            });
            $('body').bind('mouseup touchend', function(ev) {
                // handle selection
                if (isDragging && scene) { //saw mousedown, haven't moved
                    var xy = getXY(ev);
                    var x = xy[0];
                    var y = xy[1];
                    if (x == mouseStartX && y == mouseStartY) {
                        var mouseX = (x / $(window).width()) * 2 - 1;
                        var mouseY = -(y / HEIGHT) * 2 + 1;
                        handleClickSelection(mouseX, mouseY, ev, container);
                    }
                }

                isDragging = false;

            });

            glDOM.bind('mousemove touchmove', function(ev) { // touchmove
                ev.preventDefault();
                if (!scene)
                    return;
                if (!isDragging)
                    return;
                var mode = 0;

                var xy = getXY(ev);
                var x = xy[0];
                var y = xy[1];
                if (x === undefined)
                    return;
                var dx = (x - mouseStartX) / WIDTH;
                var dy = (y - mouseStartY) / HEIGHT;
                // check for pinch
                if (touchDistanceStart != 0 && ev.originalEvent.targetTouches && ev.originalEvent.targetTouches.length == 2) {
                    var newdist = calcTouchDistance(ev);
                    // change to zoom
                    mode = 2;
                    dy = (touchDistanceStart - newdist) * 2 / (WIDTH + HEIGHT);
                } else if (ev.originalEvent.targetTouches && ev.originalEvent.targetTouches.length == 3) {
                    // translate
                    mode = 1;
                }

                var r = Math.sqrt(dx * dx + dy * dy);
                var scaleFactor;
                if (mode == 3 || (mouseButton == 3 && ev.ctrlKey)) { // Slab
                    slabNear = cslabNear + dx * 100;
                    slabFar = cslabFar + dy * 100;
                } else if (mode == 2 || mouseButton == 3 || ev.shiftKey) { // Zoom
                    scaleFactor = (CAMERA_Z - rotationGroup.position.z) * 0.85;
                    if (scaleFactor < 80)
                        scaleFactor = 80;
                    rotationGroup.position.z = cz - dy * scaleFactor;
                    if (rotationGroup.position.z > CAMERA_Z) rotationGroup.position.z = CAMERA_Z * 0.999; //avoid getting stuck
                } else if (mode == 1 || mouseButton == 2 || ev.ctrlKey) { // Translate
                    var t = screenXY2model(x - mouseStartX, y - mouseStartY);
                    modelGroup.position.addVectors(currentModelPos, t);

                } else if ((mode === 0 || mouseButton == 1) && r !== 0) { // Rotate
                    var rs = Math.sin(r * Math.PI) / r;
                    dq.x = Math.cos(r * Math.PI);
                    dq.y = 0;
                    dq.z = rs * dx;
                    dq.w = -rs * dy;
                    rotationGroup.quaternion = new $3Dmol.Quaternion(
                        1, 0, 0, 0);
                    rotationGroup.quaternion.multiply(dq);
                    rotationGroup.quaternion.multiply(cq);
                }
                show();
            });
        }
        // public methods
        /**
         * Set the background color (default white)
         *
         * @function $3Dmol.GLViewer#setBackgroundColor
         * @param {number}
         *            hex Hexcode specified background color, or standard color spec
         * @param {number}
         *            a Alpha level (default 1.0)
         *
         * @example
         *
         * //Set 'myviewer' background color to white
         * myviewer.setBackgroundColor(0xffffff)
         *
         */
        this.setBackgroundColor = function(hex, a) {
            if (typeof(a) == "undefined") {
                a = 1.0; 
            } 
            else if (a < 0 || a > 1.0) {
                a = 1.0; 
            }

            var c = $3Dmol.CC.color(hex);
            scene.fog.color = c;
            bgColor = c.getHex();
            renderer.setClearColorHex(c.getHex(), a);
            show();
        };

        /**
         * Set viewer width
         *
         * @function $3Dmol.GLViewer#setWidth
         * @param {number}
         *            w Width in pixels
         */
        this.setWidth = function(w) {
            WIDTH = w || WIDTH;
            renderer.setSize(WIDTH, HEIGHT);
        };

        /**
         * Set viewer height
         *
         * @function $3Dmol.GLViewer#setHeight
         * @param {number}
         *            h Height in pixels
         */
        this.setHeight = function(h) {
            HEIGHT = h || HEIGHT;
            renderer.setSize(WIDTH, HEIGHT);
        };

        /**
         * Resize viewer according to containing HTML element's dimensions
         *
         * @function $3Dmol.GLViewer#resize
         */
        this.resize = function() {
            WIDTH = container.width();
            HEIGHT = container.height();
            ASPECT = WIDTH / HEIGHT;
            renderer.setSize(WIDTH, HEIGHT);
            camera.aspect = ASPECT;
            camera.updateProjectionMatrix();
            show();
        };

        $(window).resize(this.resize);

        /**
         * Return specified model
         *
         * @function $3Dmol.GLViewer#getModel
         * @param {number}
         *            [id=last model id] - Retrieve model with specified id
         * @default Returns last model added to viewer
         * @return {GLModel}
         *
         * @example // Retrieve reference to first GLModel added var m =
         *          glviewer.getModel(0);
         */
        this.getModel = function(id) {
            id = id || models.length - 1;
            return models[id];
        };

        /**
         * Rotate scene by angle degrees around axis
         *
         * @function $3Dmol.GLViewer#rotate
         * @param {number}
         *            [angle] - Angle, in degrees, to rotate by.
         * @param {string}
         *            [angle] - Axis ("x", "y", or "z") to rotate around.
         *            Default "y"
         *
         */
        this.rotate = function(angle, axis) {
            if (typeof(axis) === "undefined") {
                axis = "y";
            }
            var i = 0,
                j = 0,
                k = 0;
            var rangle = Math.PI * angle / 180.0;
            var s = Math.sin(rangle / 2.0);
            var c = Math.cos(rangle / 2.0);
            if (axis == "x")
                i = s;
            if (axis == "y")
                j = s;
            if (axis == "z")
                k = s;

            var q = new $3Dmol.Quaternion(i, j, k, c).normalize();
            rotationGroup.quaternion.multiply(q);
            show();
        };

        /** Returns an array representing the current viewpoint.
         * Translation, zoom, and rotation quaternion.
         * @function $3Dmol.GLViewer#getView
         * @returns {Array.<number>} arg
         *  */
        this.getView = function() {
            if (!modelGroup)
                return [0, 0, 0, 0, 0, 0, 0, 1];
            var pos = modelGroup.position;
            var q = rotationGroup.quaternion;
            return [pos.x, pos.y, pos.z, rotationGroup.position.z, q.x, q.y,
                q.z, q.w
            ];
        };

        /** Sets the view to the specified translation, zoom, and rotation.
         *
         * @function $3Dmol.GLViewer#setView
         * @param {Array.<number>} arg Array formatted identically to the return value of getView */
        this.setView = function(arg) {

            if (arg === undefined || !(arg instanceof Array || arg.length !== 8))
                return;

            if (!modelGroup || !rotationGroup)
                return;
            modelGroup.position.x = arg[0];
            modelGroup.position.y = arg[1];
            modelGroup.position.z = arg[2];
            rotationGroup.position.z = arg[3];
            rotationGroup.quaternion.x = arg[4];
            rotationGroup.quaternion.y = arg[5];
            rotationGroup.quaternion.z = arg[6];
            rotationGroup.quaternion.w = arg[7];
            if (typeof(arg[8]) != "undefined") {
                rotationGroup.position.x = arg[8];
                rotationGroup.position.y = arg[9];
            }
            show();
        };

        // apply styles, models, etc in viewer
        /**
         * Render current state of viewer, after
         * adding/removing models, applying styles, etc.
         *
         * @function $3Dmol.GLViewer#render
         */
        this.render = function() {

            updateClickables(); //must render for clickable styles to take effect
            var time1 = new Date();
            var view = this.getView();

            var i;
            for (i = 0; i < models.length; i++) {
                if (models[i]) {
                    models[i].globj(modelGroup);
                }
            }

            for (i = 0; i < shapes.length; i++) {
                if (shapes[i]) {
                    shapes[i].globj(modelGroup);
                }
            }

            for (i in surfaces) { // this is an array with possible holes
                if (surfaces.hasOwnProperty(i)) {
                    var geo = surfaces[i].geo;
                    // async surface generation can cause
                    // the geometry to be webgl initialized before it is fully
                    // formed; force various recalculations until full surface
                    // is
                    // available
                    if (!surfaces[i].finished) {
                        geo.verticesNeedUpdate = true;
                        geo.elementsNeedUpdate = true;
                        geo.normalsNeedUpdate = true;
                        geo.colorsNeedUpdate = true;
                        geo.buffersNeedUpdate = true;
                        geo.boundingSphere = null;

                        if (surfaces[i].done)
                            surfaces[i].finished = true;

                        // remove partially rendered surface
                        if (surfaces[i].lastGL)
                            modelGroup.remove(surfaces[i].lastGL);

                        // create new surface
                        var smesh = null;

                        if (surfaces[i].mat instanceof $3Dmol.LineBasicMaterial) {
                            //special case line meshes
                            smesh = new $3Dmol.Line(geo, surfaces[i].mat);
                        } else {
                            smesh = new $3Dmol.Mesh(geo, surfaces[i].mat);
                        }
                        if (surfaces[i].mat.transparent && surfaces[i].mat.opacity == 0) {
                            //don't bother with hidden surfaces
                            smesh.visible = false;
                        } else {
                            smesh.visible = true;
                        }
                        surfaces[i].lastGL = smesh;
                        modelGroup.add(smesh);
                    } // else final surface already there
                }
            }

            this.setView(view); // Calls show() => renderer render
            var time2 = new Date();
            //console.log("render time: " + (time2 - time1));
        };

        /**
         *
         * @param {AtomSelectionSpec}
         *            sel
         * @return {AtomSpec[]}
         */
        function getAtomsFromSel(sel) {
            var atoms = [];
            if (typeof(sel) === "undefined")
                sel = {};

            var ms = [];
            var i;

            if (typeof sel.model === "undefined") {
                for (i = 0; i < models.length; i++) {
                    if (models[i])
                        ms.push(models[i]);
                }
            } else { // specific to some models
                ms = sel.model;
                if (!$.isArray(ms))
                    ms = [ms];
            }

            for (i = 0; i < ms.length; i++) {
                atoms = atoms.concat(ms[i].selectedAtoms(sel));
            }

            return atoms;
        }

        /**
         *
         * @param {AtomSpec}
         *            atom
         * @param {AtomSpec}
         *            sel
         * @return {boolean}
         */
        function atomIsSelected(atom, sel) {
            if (typeof(sel) === "undefined")
                sel = {};

            var ms = [];
            var i;

            if (typeof sel.model === "undefined") {
                for (i = 0; i < models.length; i++) {
                    if (models[i])
                        ms.push(models[i]);
                }
            } else { // specific to some models
                ms = sel.model;
                if (!$.isArray(ms))
                    ms = [ms];
            }

            for (i = 0; i < ms.length; i++) {
                if (ms[i].atomIsSelected(atom, sel))
                    return true;
            }

            return false;
        }

        /**
         * Return pdb output of selected atoms (if atoms from pdb input)
         *
         * @function $3Dmol.GLViewer#pdbData
         * @param {Object=} [sel] - Selection specification specifying model and atom properties to select.  Default: all atoms in viewer
         * @return {string} PDB string of selected atoms
         */
        this.pdbData = function(sel) {
            var atoms = getAtomsFromSel(sel);
            var ret = "";
            for (var i = 0, n = atoms.length; i < n; ++i) {
                ret += atoms[i].pdbline + "\n";
            }
            return ret;
        };

        /**
         * Zoom current view by a constant factor
         *
         * @function $3Dmol.GLViewer#zoom
         * @param {number}
         *            [factor] - Magnification factor. Values greater than 1
         *            will zoom in, less than one will zoom out. Default 2.
         *
         */
        this.zoom = function(factor) {
            var factor = factor || 2;
            var scale = (CAMERA_Z - rotationGroup.position.z) / factor;
            rotationGroup.position.z = CAMERA_Z - scale;
            show();
        };

        /**
         * Translate current view by x,y screen coordinates
         * This pans the camera rather than translating the model.
         *
         * @function $3Dmol.GLViewer#translate
         * @param {number} x
         * @param {number} y
         *
         */
        this.translate = function(x, y) {

            var dx = x / WIDTH;
            var dy = y / HEIGHT;
            var v = new $3Dmol.Vector3(0, 0, -CAMERA_Z);

            projector.projectVector(v, camera);
            v.x -= dx;
            v.y -= dy;
            projector.unprojectVector(v, camera);
            v.z = 0;
            lookingAt.add(v);
            camera.lookAt(lookingAt);
            show();
        };


        /**
         * Zoom to center of atom selection
         *
         * @function $3Dmol.GLViewer#zoomTo
         * @param {Object}
         *            [sel] - Selection specification specifying model and atom
         *            properties to select. Default: all atoms in viewer
         * @example // Assuming we have created a model of a protein with
         *          multiple chains (e.g. from a PDB file), focus on atoms in
         *          chain B glviewer.zoomTo({chain: 'B'});
         *  // Focus on centroid of all atoms of all models in this
         * viewer glviewer.zoomTo(); // (equivalent to glviewer.zoomTo({}) )
         */
        this.zoomTo = function(sel) {
            var allatoms, alltmp;
            sel = sel || {};
            var atoms = getAtomsFromSel(sel);
            var tmp = $3Dmol.getExtent(atoms);

            if ($.isEmptyObject(sel)) {
                //include shapes when zooming to full scene
                //TODO: figure out a good way to specify shapes as part of a selection
                $.each(shapes, function(i, shape) {
                    atoms.push(shape);
                });
                allatoms = atoms;
                alltmp = tmp;

            } else {
                allatoms = getAtomsFromSel({});
                alltmp = $3Dmol.getExtent(allatoms);
            }

            // use selection for center
            var center = new $3Dmol.Vector3(tmp[2][0], tmp[2][1], tmp[2][2]);
            modelGroup.position = center.clone().multiplyScalar(-1);
            // but all for bounding box
            var x = alltmp[1][0] - alltmp[0][0],
                y = alltmp[1][1] - alltmp[0][1],
                z = alltmp[1][2] - alltmp[0][2];

            var maxD = Math.sqrt(x * x + y * y + z * z);
            if (maxD < 5)
                maxD = 5;

            // use full bounding box for slab/fog
            slabNear = -maxD / 1.9;
            slabFar = maxD / 2;

            // for zoom, use selection box
            x = tmp[1][0] - tmp[0][0];
            y = tmp[1][1] - tmp[0][1];
            z = tmp[1][2] - tmp[0][2];
            maxD = Math.sqrt(x * x + y * y + z * z);
            if (maxD < 5)
                maxD = 5;

            //find the farthest atom from center to get max distance needed for view
            var maxDsq = 25;
            for (var i = 0; i < atoms.length; i++) {
                if (atoms[i]) {
                    var dsq = center.distanceToSquared(atoms[i]);
                    if (dsq > maxDsq)
                        maxDsq = dsq;
                }
            }

            var maxD = Math.sqrt(maxDsq) * 2;

            rotationGroup.position.z = -(maxD * 0.5 / Math.tan(Math.PI / 180.0 * camera.fov / 2) - CAMERA_Z);

            show();
        };

        /**
         * Add label to viewer
         *
         * @function $3Dmol.GLViewer#addLabel
         * @param {string}
         *            text - Label text
         * @param {Object}
         *            data - Label style specification
         * @return {$3Dmol.Label}
         *
         * @example
         *  // Assuming glviewer contains a model representing a protein, label
         * all alpha carbons with their residue name
         *  // Select all alpha carbons (have property atom : "CA") from last
         * model added var atoms =
         * glviewer.getModel().selectedAtoms({atom:"CA"}); var labels = [];
         *
         * for (var a in atoms) { var atom = atoms[a];
         *  // Create label at alpha carbon's position displaying atom's residue
         * and residue number var labelText = atom.resname + " " + atom.resi;
         *
         * var l = glviewer.createLabel(labelText, {fontSize: 12, position: {x:
         * atom.x, y: atom.y, z: atom.z});
         *
         * labels.push(l); }
         *  // Render labels glviewer.render();
         */
        this.addLabel = function(text, data) {
            var label = new $3Dmol.Label(text, data);
            label.setContext();
            modelGroup.add(label.sprite);
            labels.push(label);
            show();
            return label;
        };

        /** Add residue labels.  This will generate one label per a
         * residue within the selected atoms.  The label will be at the
         * centroid of the atoms and styled according to the passed style.
         * The label text will be [resn][resi]
         *
         * @param {Object} sel
         * @param {Object} style
         */
        this.addResLabels = function(sel, style) {
            applyToModels("addResLabels", sel, this, style);
        }

        /**
         * Remove label from viewer
         *
         * @function $3Dmol.GLViewer#removeLabel
         * @param {$3Dmol.Label}
         *            label - $3Dmol label
         *
         * @example // Remove labels created in [addLabel example]{@link $3Dmol.GLViewer#addLabel}
         *
         * for (var i = 0; i < labels.length; i++) {
         * glviewer.removeLabel(label); }
         *
         * glviewer.render();
         */
        this.removeLabel = function(label) {
            //todo: don't do the linear search
            for (var i = 0; i < labels.length; i++) {
                if (labels[i] == label) {
                    labels.splice(i, 1);
                    label.dispose();
                    modelGroup.remove(label.sprite);
                    break;
                }
            }

        };

        /**
         * Remove all labels from viewer
         *
         * @function $3Dmol.GLViewer#removeAllLabels
         
         */
        this.removeAllLabels = function() {
            for (var i = 0; i < labels.length; i++) {
                modelGroup.remove(labels[i].sprite);
            }
            labels = [];
        };

        // Modify label style
        /**
         * Modify existing label's style
         *
         * @function $3Dmol.GLViewer#setLabelStyle
         * @param {$3Dmol.Label}
         *            label - $3Dmol label
         * @param {Object}
         *            stylespec - Label style specification
         * @return {$3Dmol.Label}
         */
        this.setLabelStyle = function(label, stylespec) {
            modelGroup.remove(label.sprite);
            label.dispose();
            label.stylespec = stylespec;
            label.setContext();
            modelGroup.add(label.sprite);
            show();
            return label;

        };

        // Change label text
        /**
         * Modify existing label's text
         *
         * @function $3Dmol.GLViewer#setLabelText
         * @param {$3Dmol.Label}
         *            label - $3Dmol label
         * @param {String}
         *            text - Label text
         * @return {$3Dmol.Label}
         */
        this.setLabelText = function(label, text) {
            modelGroup.remove(label.sprite);
            label.dispose();
            label.text = text;
            label.setContext();
            modelGroup.add(label.sprite);
            show();
            return label;

        };

        /**
         * Add shape object to viewer
         * @see {@link $3Dmol.GLShape}
         *
         * @function $3Dmol.GLViewer#addShape
         * @param {ShapeSpec} shapeSpec - style specification for label
         * @return {$3Dmol.GLShape}
         */
        this.addShape = function(shapeSpec) {
            shapeSpec = shapeSpec || {};
            var shape = new $3Dmol.GLShape(shapeSpec);
            shape.shapePosition = shapes.length;
            shapes.push(shape);

            return shape;

        };

        /**
         * Remove shape object from viewer
         *
         * @function $3Dmol.GLViewer#removeShape
         * @param {$3Dmol.GLShape} shape - Reference to shape object to remove
         */
        this.removeShape = function(shape) {
            if (!shape)
                return;
            shape.removegl(modelGroup);
            delete shapes[shape.shapePosition];
            // clear off back of model array
            while (shapes.length > 0 && typeof(shapes[shapes.length - 1]) === "undefined")
                shapes.pop();
        };

        /**
         * Remove all shape objects from viewer
         * @function $3Dmol.GLViewer#removeAllShapes
         */
        this.removeAllShapes = function() {
            for (var i = 0; i < shapes.length; i++) {
                var shape = shapes[i];
                shape.removegl(modelGroup);
            }
            shapes = [];
        }

        /**
         * Create and add sphere shape. This method provides a shorthand
         * way to create a spherical shape object
         *
         * @function $3Dmol.GLViewer#addSphere
         * @param {SphereSpec} spec - Sphere shape style specification
         * @return {$3Dmol.GLShape}
         */
        this.addSphere = function(spec) {
            spec = spec || {};
            var s = new $3Dmol.GLShape(spec);
            s.shapePosition = shapes.length;
            s.addSphere(spec);
            shapes.push(s);

            return s;
        };

        /**
         * Create and add arrow shape
         *
         * @function $3Dmol.GLViewer#addArrow
         * @param {ArrowSpec} spec - Style specification
         * @return {$3Dmol.GLShape}
         */
        this.addArrow = function(spec) {
            spec = spec || {};
            var s = new $3Dmol.GLShape(spec);
            s.shapePosition = shapes.length;
            s.addArrow(spec);
            shapes.push(s);

            return s;
        };

        /**
         * Create and add cylinder shape
         *
         * @function $3Dmol.GLViewer#addArrow
         * @param {CylinderSpec} spec - Style specification
         * @return {$3Dmol.GLShape}
         */
        this.addCylinder = function(spec) {
            spec = spec || {};
            var s = new $3Dmol.GLShape(spec);
            s.shapePosition = shapes.length;
            s.addCylinder(spec);
            shapes.push(s);

            return s;
        };

        /**
         * Add custom shape component from user supplied function
         *
         * @function $3Dmol.GLViewer#addCustom
         * @param {CustomSpec} spec - Style specification
         * @return {$3Dmol.GLShape}
         */
        this.addCustom = function(spec) {
            spec = spec || {};
            var s = new $3Dmol.GLShape(spec);
            s.shapePosition = shapes.length;
            s.addCustom(spec);
            shapes.push(s);

            return s;
        };

        /**
         * Construct isosurface from volumetric data in gaussian cube format
         *
         * @function $3Dmol.GLViewer#addVolumetricData
         * @param {String} data - Input file contents
         * @param {String} format - Input file format (currently only supports "cube")
         * @param {VolSpec} spec - Shape style specification
         * @return {$3Dmol.GLShape}
         */
        this.addVolumetricData = function(data, format, spec) {
            spec = spec || {};
            var s = new $3Dmol.GLShape(spec);
            s.shapePosition = shapes.length;
            s.addVolumetricData(data, format, spec);
            shapes.push(s);

            return s;
        };

        /**
         * Create and add model to viewer, given molecular data and its format
         * (pdb, sdf, xyz, or mol2)
         *
         * @function $3Dmol.GLViewer#addModel
         * @param {string} data - Input data
         * @param {string} format - Input format ('pdb', 'sdf', 'xyz', or 'mol2')
         * @return {$3Dmol.GLModel}
         */
        this.addModel = function(data, format, options) {

            var m = new $3Dmol.GLModel(models.length, defaultcolors);
            m.addMolData(data, format, options);
            models.push(m);

            return m;
        };

        /**
         * Delete specified model from viewer
         *
         * @function $3Dmol.GLViewer#removeModel
         * @param {$3Dmol.GLModel} model
         */
        this.removeModel = function(model) {
            if (!model)
                return;
            model.removegl(modelGroup);
            delete models[model.getID()];
            // clear off back of model array
            while (models.length > 0 && typeof(models[models.length - 1]) === "undefined")
                models.pop();
        };

        /** 
         * Delete all existing models
         * @function $3Dmol.GLViewer#removeAllModels
         */
        this.removeAllModels = function() {
            for (var i = 0; i < models.length; i++) {
                var model = models[i];
                model.removegl(modelGroup);

            }
            models = [];
        };

        /**
         * Create a new model from atoms specified by sel.
         * If extract, removes selected atoms from existing models
         *
         * @function $3Dmol.GLViewer#createModelFrom
         * @param {Object} sel - Atom selection specification
         * @param {boolean=} extract - If true, remove selected atoms from existing models
         * @return {$3Dmol.GLModel}
         */
        this.createModelFrom = function(sel, extract) {
            var m = new $3Dmol.GLModel(models.length, defaultcolors);
            for (var i = 0; i < models.length; i++) {
                if (models[i]) {
                    var atoms = models[i].selectedAtoms(sel);
                    m.addAtoms(atoms);
                    if (extract)
                        models[i].removeAtoms(atoms);
                }
            }
            models.push(m);
            return m;
        };

        function applyToModels(func, sel, value1, value2) {
            for (var i = 0; i < models.length; i++) {
                if (models[i]) {
                    models[i][func](sel, value1, value2);
                }
            }
        }

        /**
         * Set style properties to all selected atoms
         *
         * @function $3Dmol.GLViewer#setStyle
         * @param {AtomSelectionSpec} sel - Atom selection specification
         * @param {AtomStyleSpec} style - Style spec to apply to specified atoms
         *
         * @example
         * viewer.setStyle({}, {stick:{}}); //set all atoms to stick
         * viewer.setStyle({chain: 'B'}, {carton: {color: spectrum}}); //set chain B to rainbow cartoon
         */
        this.setStyle = function(sel, style) {
            applyToModels("setStyle", sel, style, false);
        };

        /**
         * Add style properties to all selected atoms
         *
         * @function $3Dmol.GLViewer#addStyle
         * @param {AtomSelectionSpec} sel - Atom selection specification
         * @param {AtomStyleSpec} style - style spec to add to specified atoms
         */
        this.addStyle = function(sel, style) {
            applyToModels("setStyle", sel, style, true);
        };

        /**
         * @function $3Dmol.GLViewer#setColorByProperty
         * @param {AtomSelectionSpec} sel
         * @param {type} prop
         * @param {type} scheme
         */
        this.setColorByProperty = function(sel, prop, scheme) {
            applyToModels("setColorByProperty", sel, prop, scheme);
        };

        /**
         * @function $3Dmol.GLViewer#setColorByElement
         * @param {AtomSelectionSpec} sel
         * @param {type} colors
         */
        this.setColorByElement = function(sel, colors) {
            applyToModels("setColorByElement", sel, colors);
        };

        /**
         *
         * @param {AtomSpec[]} atomlist
         * @param {Array}
         *            extent
         * @return {Array}
         */
        var getAtomsWithin = function(atomlist, extent) {
            var ret = [];

            for (var i = 0; i < atomlist.length; i++) {
                var atom = atomlist[i];
                if (typeof(atom) == "undefined")
                    continue;

                if (atom.x < extent[0][0] || atom.x > extent[1][0])
                    continue;
                if (atom.y < extent[0][1] || atom.y > extent[1][1])
                    continue;
                if (atom.z < extent[0][2] || atom.z > extent[1][2])
                    continue;
                ret.push(i);
            }
            return ret;
        };

        // return volume of extent
        var volume = function(extent) {
            var w = extent[1][0] - extent[0][0];
            var h = extent[1][1] - extent[0][1];
            var d = extent[1][2] - extent[0][2];
            return w * h * d;
        }; // volume
        /*
         * Break up bounding box/atoms into smaller pieces so we can parallelize
         * with webworkers and also limit the size of the working memory Returns
         * a list of bounding boxes with the corresponding atoms. These extents
         * are expanded by 4 angstroms on each side.
         */
        /**
         *
         * @param {Array}
         *            extent
         * @param {AtomSpec[]} atomlist
         * @param {AtomSpec[]} atomstoshow
         * @return {Array}
         */
        var carveUpExtent = function(extent, atomlist, atomstoshow) {
            var ret = [];

            var copyExtent = function(extent) {
                // copy just the dimensions
                var ret = [];
                ret[0] = [extent[0][0], extent[0][1], extent[0][2]];
                ret[1] = [extent[1][0], extent[1][1], extent[1][2]];
                return ret;
            }; // copyExtent
            var splitExtentR = function(extent) {
                // recursively split until volume is below maxVol
                if (volume(extent) < maxVolume) {
                    return [extent];
                } else {
                    // find longest edge
                    var w = extent[1][0] - extent[0][0];
                    var h = extent[1][1] - extent[0][1];
                    var d = extent[1][2] - extent[0][2];

                    var index;

                    if (w > h && w > d) {
                        index = 0;
                    } else if (h > w && h > d) {
                        index = 1;
                    } else {
                        index = 2;
                    }

                    // create two halves, splitting at index
                    var a = copyExtent(extent);
                    var b = copyExtent(extent);
                    var mid = (extent[1][index] - extent[0][index]) / 2 + extent[0][index];
                    a[1][index] = mid;
                    b[0][index] = mid;

                    var alist = splitExtentR(a);
                    var blist = splitExtentR(b);
                    return alist.concat(blist);
                }
            }; // splitExtentR

            // divide up extent
            var splits = splitExtentR(extent);
            // now compute atoms within expanded (this could be more efficient)
            var off = 6; // enough for water and 2*r, also depends on scale
            // factor
            for (var i = 0, n = splits.length; i < n; i++) {
                var e = copyExtent(splits[i]);
                e[0][0] -= off;
                e[0][1] -= off;
                e[0][2] -= off;
                e[1][0] += off;
                e[1][1] += off;
                e[1][2] += off;

                var atoms = getAtomsWithin(atomlist, e);
                var toshow = getAtomsWithin(atomstoshow, splits[i]);

                // ultimately, divide up by atom for best meshing
                ret.push({
                    extent: splits[i],
                    atoms: atoms,
                    toshow: toshow
                });
            }

            return ret;
        };

        // create a mesh defined from the passed vertices and faces and material
        // Just create a single geometry chunk - broken up whether sync or not
        /**
         *
         * @param {AtomSpec[]} atoms
         * @param {{vertices:number,faces:number}}
         *            VandF
         * @param {$3Dmol.MeshLambertMaterial}
         *            mat
         * @return {$3Dmol.Mesh}
         */
        var generateSurfaceMesh = function(atoms, VandF, mat) {

            var geo = new $3Dmol.Geometry(true);
            // Only one group per call to generate surface mesh (addSurface
            // should split up mesh render)
            var geoGroup = geo.updateGeoGroup(0);

            var vertexArray = geoGroup.vertexArray;
            // reconstruct vertices and faces
            var v = VandF['vertices'];
            var offset;
            var i, il;
            for (i = 0, il = v.length; i < il; i++) {
                offset = geoGroup.vertices * 3;
                vertexArray[offset] = v[i].x;
                vertexArray[offset + 1] = v[i].y;
                vertexArray[offset + 2] = v[i].z;
                geoGroup.vertices++;
            }

            var faces = VandF['faces'];
            geoGroup.faceidx = faces.length; // *3;
            geo.initTypedArrays();

            // set colors for vertices
            var colors = [];
            for (i = 0, il = atoms.length; i < il; i++) {
                var atom = atoms[i];
                if (atom) {
                    if (typeof(atom.surfaceColor) != "undefined") {
                        colors[i] = atom.surfaceColor;
                    } else if (atom.color) // map from atom
                        colors[i] = $3Dmol.CC.color(atom.color);
                }
            }

            var verts = geoGroup.vertexArray;
            var colorArray = geoGroup.colorArray;
            var normalArray = geoGroup.normalArray;
            var vA, vB, vC, norm;

            // Setup colors, faces, and normals
            for (i = 0, il = faces.length; i < il; i += 3) {

                // var a = faces[i].a, b = faces[i].b, c = faces[i].c;
                var a = faces[i],
                    b = faces[i + 1],
                    c = faces[i + 2];
                var A = v[a]['atomid'];
                var B = v[b]['atomid'];
                var C = v[c]['atomid'];

                var offsetA = a * 3,
                    offsetB = b * 3,
                    offsetC = c * 3;

                colorArray[offsetA] = colors[A].r;
                colorArray[offsetA + 1] = colors[A].g;
                colorArray[offsetA + 2] = colors[A].b;
                colorArray[offsetB] = colors[B].r;
                colorArray[offsetB + 1] = colors[B].g;
                colorArray[offsetB + 2] = colors[B].b;
                colorArray[offsetC] = colors[C].r;
                colorArray[offsetC + 1] = colors[C].g;
                colorArray[offsetC + 2] = colors[C].b;

                // setup Normals

                vA = new $3Dmol.Vector3(verts[offsetA], verts[offsetA + 1],
                    verts[offsetA + 2]);
                vB = new $3Dmol.Vector3(verts[offsetB], verts[offsetB + 1],
                    verts[offsetB + 2]);
                vC = new $3Dmol.Vector3(verts[offsetC], verts[offsetC + 1],
                    verts[offsetC + 2]);

                vC.subVectors(vC, vB);
                vA.subVectors(vA, vB);
                vC.cross(vA);

                // face normal
                norm = vC;
                norm.normalize();

                normalArray[offsetA] += norm.x;
                normalArray[offsetB] += norm.x;
                normalArray[offsetC] += norm.x;
                normalArray[offsetA + 1] += norm.y;
                normalArray[offsetB + 1] += norm.y;
                normalArray[offsetC + 1] += norm.y;
                normalArray[offsetA + 2] += norm.z;
                normalArray[offsetB + 2] += norm.z;
                normalArray[offsetC + 2] += norm.z;

            }
            geoGroup.faceArray = new Uint16Array(faces);
            var mesh = new $3Dmol.Mesh(geo, mat);
            mesh.doubleSided = true;

            return mesh;
        };

        // do same thing as worker in main thread
        /**
         *
         * @param {$3Dmol.SurfaceType}
         *            type
         * @param {Array}
         *            expandedExtent
         * @param {Array}
         *            extendedAtoms
         * @param {Array}
         *            atomsToShow
         * @param {AtomSpec[]} atoms
         * @param {number}
         *            vol
         * @return {Object}
         */
        var generateMeshSyncHelper = function(type, expandedExtent,
            extendedAtoms, atomsToShow, atoms, vol) {
            var time = new Date();
            var ps = new $3Dmol.ProteinSurface();
            ps.initparm(expandedExtent, (type === 1) ? false : true, vol);

            var time2 = new Date();
            //console.log("initialize " + (time2 - time) + "ms");

            ps.fillvoxels(atoms, extendedAtoms);

            var time3 = new Date();
            //console.log("fillvoxels " + (time3 - time2) + "  " + (time3 - time) + "ms");

            ps.buildboundary();

            if (type == $3Dmol.SurfaceType.SES) {
                ps.fastdistancemap();
                ps.boundingatom(false);
                ps.fillvoxelswaals(atoms, extendedAtoms);
            }

            var time4 = new Date();
            console.log("buildboundaryetc " + (time4 - time3) + "  " + (time4 - time) + "ms");

            ps.marchingcube(type);

            var time5 = new Date();
            //console.log("marching cube " + (time5 - time4) + "  "+ (time5 - time) + "ms");

            return ps.getFacesAndVertices(atomsToShow);
        };

        /**
         *
         * @param {matSpec}
         *            style
         * @return {$3Dmol.MeshLambertMaterial}
         */
        function getMatWithStyle(style) {
            var mat = new $3Dmol.MeshLambertMaterial();
            mat.vertexColors = $3Dmol.VertexColors;

            for (var prop in style) {
                if (prop === "color" || prop === "map") {
                    // ignore
                } else if (style.hasOwnProperty(prop))
                    mat[prop] = style[prop];
            }
            if (style.opacity !== undefined) {
                if (style.opacity === 1)
                    mat.transparent = false;
                else
                    mat.transparent = true;
            }

            return mat;
        }

        // get the min and max values of the specified property in the provided
        // atoms
        function getPropertyRange(atomlist, prop) {
            var min = Number.POSITIVE_INFINITY;
            var max = Number.NEGATIVE_INFINITY;

            for (var i = 0, n = atomlist.length; i < n; i++) {
                var atom = atomlist[i];
                if (atom.properties && typeof(atom.properties[prop]) != "undefined") {
                    var val = atom.properties[prop];
                    if (val < min)
                        min = val;
                    if (val > max)
                        max = val;
                }
            }

            if (!isFinite(min) && !isFinite(max))
                min = max = 0;
            else if (!isFinite(min))
                min = max;
            else if (!isFinite(max))
                max = min;

            return [min, max];
        }


        /**
         * Adds an explicit mesh as a surface object.
         *
         * @param {$3Dmol.Mesh}
         *            mesh
         * @param {Object}
         *            style
         * @returns {Number} surfid
         */
        this.addMesh = function(mesh) {
            var surfobj = {
                geo: mesh.geometry,
                mat: mesh.material,
                done: true,
                finished: false //the rendered finishes surfaces when they are done
            };
            var surfid = surfaces.length;
            surfaces[surfid] = surfobj;
            return surfid;
        }

        //return a shallow copy of list l, e.g., for atoms so we can
        //ignore superficial changes (ie surfacecolor, position) that happen
        //while we're surface building
        var shallowCopy = function(l) {
                var ret = [];
                $.each(l, function(k, v) {
                    ret[k] = $.extend({}, v);
                });
                return ret;
            }
            /**
             * Add surface representation to atoms
             *  @function $3Dmol.GLViewer#addSurface
             * @param {$3Dmol.SurfaceType} type - Surface type
             * @param {Object} style - optional style specification for surface material (e.g. for different coloring scheme, etc)
             * @param {AtomSelectionSpec} atomsel - Show surface for atoms in this selection
             * @param {AtomSelectionSpec} allsel - Use atoms in this selection to calculate surface; may be larger group than 'atomsel'
             * @param {AtomSelectionSpec} focus - Optionally begin rendering surface specified atoms
             *
             * @return {number} surfid - Identifying number for this surface
             */
        this.addSurface = function(type, style, atomsel, allsel, focus) {
            // type 1: VDW 3: SAS 4: MS 2: SES
            // if sync is true, does all work in main thread, otherwise uses
            // workers
            // with workers, must ensure group is the actual modelgroup since
            // surface
            // will get added asynchronously
            // all atoms in atomlist are used to compute surfaces, but only the
            // surfaces
            // of atomsToShow are displayed (e.g., for showing cavities)
            // if focusSele is specified, will start rending surface around the
            // atoms specified by this selection
            var atomlist = null,
                focusSele = null;
            //TODO: currently generating a shallow copy to avoid problems when atoms are chagned
            //during surface generation - come up with a better solution
            var atomsToShow = shallowCopy(getAtomsFromSel(atomsel));
            if (!allsel) {
                atomlist = atomsToShow;
            } else {
                atomlist = shallowCopy(getAtomsFromSel(allsel));
            }

            if (!focus) {
                focusSele = atomsToShow;
            } else {
                focusSele = shallowCopy(getAtomsFromSel(focus));
            }

            var atom;
            style = style || {};

            var time = new Date();

            var mat = getMatWithStyle(style);

            var extent = $3Dmol.getExtent(atomsToShow);

            var i, il;
            if (style['map'] && style['map']['prop']) {
                // map color space using already set atom properties
                /** @type {AtomSpec} */
                var prop = style['map']['prop'];
                /** @type {Gradient} */
                var scheme = style['map']['scheme'] || new $3Dmol.Gradient.RWB();
                var range = scheme.range();
                if (!range) {
                    range = getPropertyRange(atomsToShow, prop);
                }

                for (i = 0, il = atomlist.length; i < il; i++) {
                    atom = atomlist[i];
                    atom.surfaceColor = $3Dmol.CC.color(scheme.valueToHex(
                        atom.properties[prop], range));
                }
            } else if (typeof(style['color']) != 'undefined') {
                //explicitly set color, otherwise material color just blends
                for (i = 0, il = atomlist.length; i < il; i++) {
                    atom = atomlist[i];
                    atom.surfaceColor = $3Dmol.CC.color(style['color']);
                }
            } else if (typeof(style['colorscheme']) != 'undefined') {
                for (i = 0, il = atomlist.length; i < il; i++) {
                    atom = atomlist[i];
                    var scheme = $3Dmol.elementColors[style.colorscheme];
                    if (scheme && typeof(scheme[atom.elem]) != "undefined") {
                        atom.surfaceColor = $3Dmol.CC.color(scheme[atom.elem]);
                    }
                }
            }

            var totalVol = volume(extent); // used to scale resolution
            var extents = carveUpExtent(extent, atomlist, atomsToShow);

            if (focusSele && focusSele.length && focusSele.length > 0) {
                var seleExtent = $3Dmol.getExtent(focusSele);
                // sort by how close to center of seleExtent
                var sortFunc = function(a, b) {
                    var distSq = function(ex, sele) {
                        // distance from e (which has no center of mass) and
                        // sele which does
                        var e = ex.extent;
                        var x = e[1][0] - e[0][0];
                        var y = e[1][1] - e[0][1];
                        var z = e[1][2] - e[0][2];
                        var dx = (x - sele[2][0]);
                        dx *= dx;
                        var dy = (y - sele[2][1]);
                        dy *= dy;
                        var dz = (z - sele[2][2]);
                        dz *= dz;

                        return dx + dy + dz;
                    };
                    var d1 = distSq(a, seleExtent);
                    var d2 = distSq(b, seleExtent);
                    return d1 - d2;
                };
                extents.sort(sortFunc);
            }

            //console.log("Extents " + extents.length + "  "+ (+new Date() - time) + "ms");

            var surfobj = {
                geo: new $3Dmol.Geometry(true),
                mat: mat,
                done: false,
                finished: false
                    // also webgl initialized
            };
            var surfid = surfaces.length;
            surfaces[surfid] = surfobj;
            var reducedAtoms = [];
            // to reduce amount data transfered, just pass x,y,z,serial and elem
            for (i = 0, il = atomlist.length; i < il; i++) {
                atom = atomlist[i];
                reducedAtoms[i] = {
                    x: atom.x,
                    y: atom.y,
                    z: atom.z,
                    serial: i,
                    elem: atom.elem
                };
            }

            var sync = !!($3Dmol.syncSurface);
            if (sync) { // don't use worker, still break up for memory purposes

                // to keep the browser from locking up, call through setTimeout
                var callSyncHelper = function callSyncHelper(i) {
                    if (i >= extents.length)
                        return;

                    var VandF = generateMeshSyncHelper(type, extents[i].extent,
                        extents[i].atoms, extents[i].toshow, reducedAtoms,
                        totalVol);
                    var mesh = generateSurfaceMesh(atomlist, VandF, mat);
                    $3Dmol.mergeGeos(surfobj.geo, mesh);
                    _viewer.render();

                    setTimeout(callSyncHelper, 1, i + 1);
                }

                setTimeout(callSyncHelper, 1, 0);

                // TODO: Asynchronously generate geometryGroups (not separate
                // meshes) and merge them into a single geometry
            } else { // use worker

                var workers = [];
                if (type < 0)
                    type = 0; // negative reserved for atom data
                for (i = 0, il = numWorkers; i < il; i++) {
                    // var w = new Worker('3Dmol/SurfaceWorker.js');
                    var w = new Worker($3Dmol.SurfaceWorker);
                    workers.push(w);
                    w.postMessage({
                        'type': -1,
                        'atoms': reducedAtoms,
                        'volume': totalVol
                    });
                }
                var cnt = 0;

                var rfunction = function(event) {
                    var VandF = event.data;
                    var mesh = generateSurfaceMesh(atomlist, VandF, mat);
                    $3Dmol.mergeGeos(surfobj.geo, mesh);
                    _viewer.render();
                    //    console.log("async mesh generation " + (+new Date() - time) + "ms");
                    cnt++;
                    if (cnt == extents.length)
                        surfobj.done = true;
                };

                var efunction = function(event) {
                    console.log(event.message + " (" + event.filename + ":" + event.lineno + ")");
                };

                for (i = 0; i < extents.length; i++) {
                    var worker = workers[i % workers.length];
                    worker.onmessage = rfunction;

                    worker.onerror = efunction;

                    worker.postMessage({
                        'type': type,
                        'expandedExtent': extents[i].extent,
                        'extendedAtoms': extents[i].atoms,
                        'atomsToShow': extents[i].toshow
                    });
                }
            }

            // NOTE: This is misleading if 'async' mesh generation - returns
            // immediately
            //console.log("full mesh generation " + (+new Date() - time) + "ms");

            return surfid;
        };

        /**
         * Set the surface material to something else, must render change
         *
         * @param {number} surf - Surface ID to apply changes to
         * @param {matSpec} style - new material style specification
         */
        this.setSurfaceMaterialStyle = function(surf, style) {
            if (surfaces[surf]) {
                surfaces[surf].mat = getMatWithStyle(style);
                surfaces[surf].mat.side = $3Dmol.FrontSide;
                surfaces[surf].finished = false; // trigger redraw
            }
        };

        /**
         * Remove surface with given ID
         *
         * @param {number} surf - surface id
         */
        this.removeSurface = function(surf) {
            if (surfaces[surf] && surfaces[surf].lastGL) {
                if (surfaces[surf].geo !== undefined)
                    surfaces[surf].geo.dispose();
                if (surfaces[surf].mat !== undefined)
                    surfaces[surf].mat.dispose();
                modelGroup.remove(surfaces[surf].lastGL); // remove from scene
            }
            delete surfaces[surf];
            show();
        };

        /** Remove all surfaces.
         * @function $3Dmol.GLViewer#removeAllSurfaces */
        this.removeAllSurfaces = function() {
            for (var i = 0; i < surfaces.length; i++) {
                if (surfaces[i] && surfaces[i].lastGL) {
                    if (surfaces[i].geo !== undefined)
                        surfaces[i].geo.dispose();
                    if (surfaces[i].mat !== undefined)
                        surfaces[i].mat.dispose();
                    modelGroup.remove(surfaces[i].lastGL); // remove from scene
                }
                delete surfaces[i];
            }
            show();
        };

        /** return Jmol moveto command to position this scene */
        this.jmolMoveTo = function() {
            var pos = modelGroup.position;
            // center on same position
            var ret = "center { " + (-pos.x) + " " + (-pos.y) + " " + (-pos.z) + " }; ";
            // apply rotation
            var q = rotationGroup.quaternion;
            ret += "moveto .5 quaternion { " + q.x + " " + q.y + " " + q.z + " " + q.w + " };";
            // zoom is tricky.. maybe i would be best to let callee zoom on
            // selection?
            // can either do a bunch of math, or maybe zoom to the center with a
            // fixed
            // but reasonable percentage

            return ret;
        };

        /** Clear scene of all objects 
         * @function $3Dmol.GLViewer#clear
         * */
        this.clear = function() {
            this.removeAllSurfaces();
            this.removeAllModels();
            this.removeAllLabels();
            this.removeAllShapes();
            show();
        };

        // props is a list of objects that select certain atoms and enumerate
        // properties for those atoms
        /**
         * Add specified properties to all atoms matching input argument
         * @param {Object} props, either array of atom selectors with associated props, or function that takes atom and sets its properties
         * @param {AtomSelectionSpec} sel
         */
        this.mapAtomProperties = function(props, sel) {
            sel = sel || {};
            var atoms = getAtomsFromSel(sel);

            if (typeof(props) == "function") {
                for (var a = 0, numa = atoms.length; a < numa; a++) {
                    var atom = atoms[a];
                    props(atom);
                }
            } else {
                for (var a = 0, numa = atoms.length; a < numa; a++) {
                    var atom = atoms[a];
                    for (var i = 0, n = props.length; i < n; i++) {
                        var prop = props[i];
                        if (prop.props) {
                            for (var p in prop.props) {
                                if (prop.props.hasOwnProperty(p)) {
                                    // check the atom
                                    if (atomIsSelected(atom, prop)) {
                                        if (!atom.properties)
                                            atom.properties = {};
                                        atom.properties[p] = prop.props[p];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };

        var getModelGroup = function() {
            return modelGroup;
        };

        try {
            if (typeof(callback) === "function")
                callback(this);
        } catch (e) {
            // errors in callback shouldn't invalidate the viewer
            console.log("error with glviewer callback: " + e);
        }
    }

    return GLViewer;

})();

$3Dmol['glmolViewer'] = $3Dmol.GLViewer;
//color scheme mappings
var $3Dmol = $3Dmol || {};

/** Color mapping gradiens
 * @interface
 * @param {number} min
 * @param {number} max
 */
$3Dmol.Gradient = function(min, max) {};

/**
 * Map value to hex color
 * @param {number} val
 * @param {number} range
 * @returns {number}
 */
$3Dmol.Gradient.valueToHex = function(val, range) {};
$3Dmol.Gradient.jmolID = function() {};
//return range used for color mapping, null if none set
$3Dmol.Gradient.range = function() {};



/**
 * Color scheme red to white to blue, for charges
 * @constructor
 * @implements {$3Dmol.Gradient}
 */
$3Dmol.Gradient.RWB = function(min, max) {

    //map value to hex color, range is provided
    this.valueToHex = function(val, range) {
        var lo, hi;
        if (range) {
            lo = range[0];
            hi = range[1];
        } else {
            lo = min;
            hi = max;
        }

        if (val === undefined)
            return 0xffffff;

        if (val < lo) val = lo;
        if (val > hi) val = hi;

        var middle = (hi + lo) / 2;
        var scale, color;

        //scale bottom from red to white
        if (val <= middle) {
            scale = Math.floor(255 * Math.sqrt((val - lo) / (middle - lo)));
            color = 0xff0000 + 0x100 * scale + scale;
            return color;
        } else { //form white to blue
            scale = Math.floor(255 * Math.sqrt((1 - (val - middle) / (hi - middle))));
            color = 0x10000 * scale + 0x100 * scale + 0xff;
            return color;
        }
    };

    this.jmolID = function() {
        return "rwb";
    };

    //return range used for color mapping, null if none set
    this.range = function() {
        if (typeof(min) != "undefined" && typeof(max) != "undefined") {
            return [min, max];
        }
        return null;
    };

};

/**
 * rainbow gradient, but without purple to match jmol
 * @constructor
 * @implements {$3Dmol.Gradient}
 */
$3Dmol.Gradient.ROYGB = function(min, max) {

    //map value to hex color, range is provided
    this.valueToHex = function(val, range) {
        var lo, hi;
        if (range) {
            lo = range[0];
            hi = range[1];
        } else {
            lo = min;
            hi = max;
        }

        if (typeof(val) == "undefined")
            return 0xffffff;

        if (val < lo) val = lo;
        if (val > hi) val = hi;

        var mid = (lo + hi) / 2;
        var q1 = (lo + mid) / 2;
        var q3 = (mid + hi) / 2;

        var scale, color;

        if (val < q1) { //scale green up, red up, blue down
            scale = Math.floor(255 * Math.sqrt((val - lo) / (q1 - lo)));
            color = 0xff0000 + 0x100 * scale + 0;
            return color;
        } else if (val < mid) { //scale red down, green up, blue down
            scale = Math.floor(255 * Math.sqrt((1 - (val - q1) / (mid - q1))));
            color = 0x010000 * scale + 0xff00 + 0x0;
            return color;
        } else if (val < q3) { //scale blue up, red down, green up
            scale = Math.floor(255 * Math.sqrt((val - mid) / (q3 - mid)));
            color = 0x000000 + 0xff00 + 0x1 * scale;
            return color;
        } else { //scale green down, blue up, red down
            scale = Math.floor(255 * Math.sqrt((1 - (val - q3) / (hi - q3))));
            color = 0x000000 + 0x0100 * scale + 0xff;
            return color;
        }
    };

    this.jmolID = function() {
        return "roygb";
    };

    //return range used for color mapping, null if none set
    this.range = function() {
        if (typeof(min) != "undefined" && typeof(max) != "undefined") {
            return [min, max];
        }
        return null;
    };

};

/**
 * rainbow gradient with constant saturation, all the way to purple!
 * @constructor
 * @implements {$3Dmol.Gradient}
 */
$3Dmol.Gradient.Sinebow = function(min, max) {

    //map value to hex color, range is provided
    this.valueToHex = function(val, range) {
        var lo, hi;
        if (range) {
            lo = range[0];
            hi = range[1];
        } else {
            lo = min;
            hi = max;
        }

        if (typeof(val) == "undefined")
            return 0xffffff;

        if (val < lo) val = lo;
        if (val > hi) val = hi;

        var scale = (val - lo) / (hi - lo);
        var h = (5 * scale / 6.0 + 0.5);
        var r = Math.sin(Math.PI * h);
        r *= r * 255;
        var g = Math.sin(Math.PI * (h + 1 / 3.0));
        g *= g * 255;
        var b = Math.sin(Math.PI * (h + 2 / 3.0));
        b *= b * 255;

        return 0x10000 * Math.floor(r) + 0x100 * Math.floor(b) + 0x1 * Math.floor(g);
    };

    this.jmolID = function() {
        return "sinebow";
    };

    //return range used for color mapping, null if none set
    this.range = function() {
        if (typeof(min) != "undefined" && typeof(max) != "undefined") {
            return [min, max];
        }
        return null;
    };

};
//Adapted from the text sprite example from http://stemkoski.github.io/Three.js/index.html

$3Dmol.LabelCount = 0;

/**
 * Renderable labels
 * @constructor $3Dmol.Label
 * @param {string} tag - Label text
 * @param {LabelSpec} parameters Label style and font specifications
 */
$3Dmol.Label = function(text, parameters) {

    this.id = $3Dmol.LabelCount++;
    this.stylespec = parameters || {};

    this.canvas = document.createElement('canvas');
    //todo: implement resizing canvas..
    this.canvas.width = 134;
    this.canvas.height = 35;
    this.context = this.canvas.getContext('2d');
    this.sprite = new $3Dmol.Sprite();
    this.text = text;

};

$3Dmol.Label.prototype = {

    constructor: $3Dmol.Label,

    getStyle: function() {
        return this.stylespec;
    },

    setContext: function() {
        // function for drawing rounded rectangles - for Label drawing
        var roundRect = function(ctx, x, y, w, h, r, drawBorder) {

            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.lineTo(x + w - r, y);
            ctx.quadraticCurveTo(x + w, y, x + w, y + r);
            ctx.lineTo(x + w, y + h - r);
            ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
            ctx.lineTo(x + r, y + h);
            ctx.quadraticCurveTo(x, y + h, x, y + h - r);
            ctx.lineTo(x, y + r);
            ctx.quadraticCurveTo(x, y, x + r, y);
            ctx.closePath();
            ctx.fill();
            if (drawBorder)
                ctx.stroke();

        };

        //do all the checks to figure out what color is desired
        var getColor = function(style, stylealpha, init) {
            var ret = init;
            if (typeof(style) != 'undefined') {
                //convet regular colors
                if (style instanceof $3Dmol.Color)
                    ret = style.scaled();
                else //hex or name
                    ret = $3Dmol.CC.color(style).scaled();
            }
            if (typeof(stylealpha) != 'undefined') {
                ret.a = parseFloat(stylealpha);
            }
            return ret;
        }

        /**
         * Label type specification
         * @typedef LabelSpec
         * @struct
         * @prop {string} font - font name, default sans-serif
         * @prop {number} fontSize - height of text, default 18
         * @prop {string} fontColor - font color, default white
         * @prop {number} fontOpacity - font opacity, default 1
         * @prop {number} borderThickness - line width of border around label, default 0
         * @prop {string} borderColor - color of border, default backgroundColor
         * @prop {string} borderOpacity - color of border
         * @prop {string} backgroundColor - color of background, default black
         * @prop {string} backgroundOpacity - opacity of background, default 1
         * @prop {Object} position - x,y,z coordinates for label
         * @prop {boolean} inFront - always put labels in from of model
         * @prop {boolean} showBackground - show background rounded rectangle, default true
         */
        return function() {

            var style = this.stylespec;
            var useScreen = typeof(style.useScreen) == "undefined" ? false : style.useScreen;

            var showBackground = style.showBackground;
            if (showBackground === '0' || showBackground === 'false') showBackground = false;
            if (typeof(showBackground) == "undefined") showBackground = true; //default
            var font = style.font ? style.font : "sans-serif";

            var fontSize = parseInt(style.fontSize) ? parseInt(style.fontSize) : 18;

            var fontColor = getColor(style.fontColor, style.fontOpacity, {
                r: 255,
                g: 255,
                b: 255,
                a: 1.0
            });

            var padding = style.padding ? style.padding : 4;
            var borderThickness = style.borderThickness ? style.borderThickness : 0;

            var backgroundColor = getColor(style.backgroundColor, style.backgroundOpacity, {
                r: 0,
                g: 0,
                b: 0,
                a: 1.0
            });

            var borderColor = getColor(style.borderColor, style.borderOpacity, backgroundColor);


            var position = style.position ? style.position : {
                x: -10,
                y: 1,
                z: 1
            };

            // Should labels always be in front of model?
            var inFront = (style.inFront !== undefined) ? style.inFront : true;
            if (inFront === 'false' || inFront === '0') inFront = false;

            // clear canvas

            var spriteAlignment = style.alignment || $3Dmol.SpriteAlignment.topLeft;

            var bold = "";
            if (style.bold)
                bold = "bold ";
            this.context.font = bold + fontSize + "px  " + font;

            var metrics = this.context.measureText(this.text);
            var textWidth = metrics.width;

            if (!showBackground) borderThickness = 0;

            var width = textWidth + 2.5 * borderThickness + 2 * padding;
            var height = fontSize * 1.25 + 2 * borderThickness + 2 * padding; // 1.25 is extra height factor for text below baseline: g,j,p,q.


            if (style.backgroundImage) {
                var img = style.backgroundImage;
                var w = style.backgroundWidth ? style.backgroundWidth : img.width;
                var h = style.backgroundHeight ? style.backgroundHeight : img.height;
                if (w > width) width = w;
                if (h > height) height = h;
            }

            this.canvas.width = width;
            this.canvas.height = height;
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            var bold = "";
            if (style.bold)
                bold = "bold ";
            this.context.font = bold + fontSize + "px  " + font;

            // background color
            this.context.fillStyle = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
            // border color
            this.context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";

            this.context.lineWidth = borderThickness;
            if (showBackground) {
                roundRect(this.context, borderThickness, borderThickness, width - 2 * borderThickness, height - 2 * borderThickness, 6, borderThickness > 0);
            }

            if (style.backgroundImage) {
                var img = style.backgroundImage;
                var w = style.backgroundWidth ? style.backgroundWidth : img.width;
                var h = style.backgroundHeight ? style.backgroundHeight : img.height;
                this.context.drawImage(img, 0, 0, w, h);
            }


            // text color
            this.context.fillStyle = "rgba(" + fontColor.r + "," + fontColor.g + "," + fontColor.b + "," + fontColor.a + ")";

            this.context.fillText(this.text, borderThickness + padding,
                fontSize + borderThickness + padding, textWidth);

            // canvas contents will be used for a texture
            var texture = new $3Dmol.Texture(this.canvas);
            texture.needsUpdate = true;
            this.sprite.material = new $3Dmol.SpriteMaterial({
                map: texture,
                useScreenCoordinates: useScreen,
                alignment: spriteAlignment,
                depthTest: !inFront
            });

            this.sprite.scale.set(1, 1, 1);

            this.sprite.position.set(position.x, position.y, position.z);
        };

    }(),

    // clean up material and texture
    dispose: function() {

        if (this.sprite.material.map !== undefined)
            this.sprite.material.map.dispose();
        if (this.sprite.material !== undefined)
            this.sprite.material.dispose();
    }

};

/**
 * $3Dmol.Parsers stores functions for parsing molecular data.
 * The all take an atom list (which gets filled out) and a string.
 *
 * $3Dmol.Parsers.<ext> corresponds to the parsers for files with extension ext
 */
$3Dmol.Parsers = (function() {
    var parsers = {};

    /** @param {AtomSpec[]} atomsarray */
    var assignBonds = function(atomsarray) {
        // assign bonds - yuck, can't count on connect records
        var atoms = atomsarray.slice(0);
        var i, j, n;
        for (i = 0, n = atomsarray.length; i < n; i++) {
            //Don't reindex if atoms are already indexed 
            if (!atomsarray[i].index)
                atomsarray[i].index = i;
        }

        atoms.sort(function(a, b) {
            return a.z - b.z;
        });
        for (i = 0, n = atoms.length; i < n; i++) {
            var ai = atoms[i];

            for (j = i + 1; j < n; j++) {
                var aj = atoms[j];
                if (aj.z - ai.z > 1.9) // can't be connected
                    break;
                if (areConnected(ai, aj)) {
                    if (ai.bonds.indexOf(aj.index) == -1) {
                        // only add if not already there
                        ai.bonds.push(aj.index);
                        ai.bondOrder.push(1);
                        aj.bonds.push(ai.index);
                        aj.bondOrder.push(1);
                    }
                }
            }
        }
    };

    // this is optimized for proteins where it is assumed connected
    // atoms are on the same or next residue
    /** @param {AtomSpec[]} atomsarray */
    var assignPDBBonds = function(atomsarray) {
        // assign bonds - yuck, can't count on connect records
        var protatoms = [];
        var hetatoms = [];
        var i, n;
        for (i = 0, n = atomsarray.length; i < n; i++) {
            var atom = atomsarray[i];
            atom.index = i;
            if (atom.hetflag)
                hetatoms.push(atom);
            else
                protatoms.push(atom);
        }

        assignBonds(hetatoms);

        // sort by resid
        protatoms.sort(function(a, b) {
            if (a.chain != b.chain)
                return a.chain < b.chain ? -1 : 1;
            return a.resi - b.resi;
        });

        //for identifying connected residues
        var currentResi = -1;
        var reschain = -1;
        var lastResConnected;

        for (i = 0, n = protatoms.length; i < n; i++) {
            var ai = protatoms[i];

            if (ai.resi !== currentResi) {
                currentResi = ai.resi;
                if (!lastResConnected)
                    reschain++;

                lastResConnected = false;
            }

            ai.reschain = reschain;

            for (var j = i + 1; j < protatoms.length; j++) {
                var aj = protatoms[j];
                if (aj.chain != ai.chain)
                    break;
                if (aj.resi - ai.resi > 1) // can't be connected
                    break;
                if (areConnected(ai, aj)) {
                    if (ai.bonds.indexOf(aj.index) === -1) {
                        // only add if not already there
                        ai.bonds.push(aj.index);
                        ai.bondOrder.push(1);
                        aj.bonds.push(ai.index);
                        aj.bondOrder.push(1);
                    }

                    if (ai.resi !== aj.resi)
                        lastResConnected = true;

                }
            }
        }

    };

    // this will identify all hydrogen bonds between backbone
    // atoms; assume atom names are correct, only identifies
    // single closest hbond
    var assignBackboneHBonds = function(atomsarray) {
        var maxlength = 3.2;
        var maxlengthSq = 10.24;
        var atoms = [];
        var i, j, n;
        for (i = 0, n = atomsarray.length; i < n; i++) {
            atomsarray[i].index = i;
            // only consider 'N' and 'O'
            var atom = atomsarray[i];
            if (!atom.hetflag && (atom.atom === "N" || atom.atom === "O")) {
                atoms.push(atom);
                atom.hbondOther = null;
                atom.hbondDistanceSq = Number.POSITIVE_INFINITY;
            }
        }

        atoms.sort(function(a, b) {
            return a.z - b.z;
        });
        for (i = 0, n = atoms.length; i < n; i++) {
            var ai = atoms[i];

            for (j = i + 1; j < n; j++) {
                var aj = atoms[j];
                var zdiff = aj.z - ai.z;
                if (zdiff > maxlength) // can't be connected
                    break;
                if (aj.atom == ai.atom)
                    continue; //can't be connected, but later might be    
                var ydiff = Math.abs(aj.y - ai.y);
                if (ydiff > maxlength)
                    continue;
                var xdiff = Math.abs(aj.x - ai.x);
                if (xdiff > maxlength)
                    continue;
                var dist = xdiff * xdiff + ydiff * ydiff + zdiff * zdiff;
                if (dist > maxlengthSq)
                    continue;

                if (aj.chain == ai.chain && Math.abs(aj.resi - ai.resi) < 4)
                    continue; //ignore bonds between too close residues
                //select closest hbond
                if (dist < ai.hbondDistanceSq) {
                    ai.hbondOther = aj;
                    ai.hbondDistanceSq = dist;
                }
                if (dist < aj.hbondDistanceSq) {
                    aj.hbondOther = ai;
                    aj.hbondDistanceSq = dist;
                }
            }
        }
    };

    var computeSecondaryStructure = function(atomsarray) {
        assignBackboneHBonds(atomsarray);

        // compute, per residue, what the secondary structure is
        var chres = {}; // lookup by chain and resid
        var i, il, c, r;
        var atom, val;

        for (i = 0, il = atomsarray.length; i < il; i++) {
            atom = atomsarray[i];

            if (typeof(chres[atom.chain]) === "undefined")
                chres[atom.chain] = [];

            if (isFinite(atom.hbondDistanceSq)) {
                var other = atom.hbondOther;
                if (Math.abs(other.resi - atom.resi) === 4) {
                    // helix
                    chres[atom.chain][atom.resi] = 'h';
                } else { // otherwise assume sheet
                    chres[atom.chain][atom.resi] = 's';
                }
            }
        }

        // plug gaps and remove singletons
        for (c in chres) {
            for (r = 1; r < chres[c].length - 1; r++) {
                var valbefore = chres[c][r - 1];
                var valafter = chres[c][r + 1];
                val = chres[c][r];
                if (valbefore == valafter && val != valbefore) {
                    chres[c][r] = valbefore;
                }
            }
            for (r = 0; r < chres[c].length; r++) {
                val = chres[c][r];
                if (val == 'h' || val == 's') {
                    if (chres[c][r - 1] != val && chres[c][r + 1] != val)
                        delete chres[c][r];
                }
            }
        }

        // assign to all atoms in residue, keep track of start
        var curres = null;
        for (i = 0, il = atomsarray.length; i < il; i++) {
            atom = atomsarray[i];
            val = chres[atom.chain][atom.resi];
            if (typeof(val) == "undefined")
                continue;
            atom.ss = val;
            if (chres[atom.chain][atom.resi - 1] != val)
                atom.ssbegin = true;
            if (chres[atom.chain][atom.resi + 1] != val)
                atom.ssend = true;
        }
    };

    /**
     * @param {AtomSpec[]} atoms
     * @param {string} str
     */
    parsers.cube = parsers.CUBE = function(atoms, str, options) {
        var lines = str.replace(/^\s+/, "").split(/[\n\r]+/);

        if (lines.length < 6)
            return;

        var lineArr = lines[2].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");

        var natoms = Math.abs(parseFloat(lineArr[0]));

        lineArr = lines[3].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");

        //might have to convert from bohr units to angstroms
        var convFactor = (parseFloat(lineArr[0]) > 0) ? 0.529177 : 1;

        //Extract atom portion; send to new GLModel...
        lines = lines.splice(6, natoms);

        var start = atoms.length;
        var end = start + lines.length;

        for (var i = start; i < end; ++i) {
            var atom = {};
            atom.serial = i;
            var line = lines[i - start];
            var tokens = line.replace(/^\s+/, "").replace(/\s+/g, " ").split(
                " ");

            if (tokens[0] == 6)
                atom.elem = "C";

            else if (tokens[0] == 1)
                atom.elem = "H";

            else if (tokens[0] == 8)
                atom.elem = "O";

            else if (tokens[0] == 17)
                atom.elem = "CL";

            atom.x = parseFloat(tokens[2]) * convFactor;
            atom.y = parseFloat(tokens[3]) * convFactor;
            atom.z = parseFloat(tokens[4]) * convFactor;

            atom.hetflag = true;
            atom.bonds = [];
            atom.bondOrder = [];
            atom.properties = {};
            atoms.push(atom);

        }

        assignBonds(atoms);

        return true;
    };

    // read an XYZ file from str and put the result in atoms
    /**
     * @param {AtomSpec[]} atoms
     * @param {string} str
     */
    parsers.xyz = parsers.XYZ = function(atoms, str, options) {

        var lines = str.split("\n");
        if (lines.length < 3)
            return;
        var atomCount = parseInt(lines[0].substr(0, 3));
        if (isNaN(atomCount) || atomCount <= 0)
            return;
        if (lines.length < atomCount + 2)
            return;
        var offset = 2;
        var start = atoms.length;
        var end = start + atomCount;
        for (var i = start; i < end; i++) {
            var line = lines[offset++];
            var tokens = line.replace(/^\s+/, "").replace(/\s+/g, " ").split(
                " ");
            var atom = {};
            atom.serial = i;
            atom.atom = atom.elem = tokens[0];
            atom.x = parseFloat(tokens[1]);
            atom.y = parseFloat(tokens[2]);
            atom.z = parseFloat(tokens[3]);
            atom.hetflag = true;
            atom.bonds = [];
            atom.bondOrder = [];
            atom.properties = {};
            atoms[i] = atom;
        }
        assignBonds(atoms);

        return true;
    };

    // put atoms specified in sdf fromat in str into atoms
    // adds to atoms, does not replace
    /** 
     * @param {AtomSpec[]} atoms
     * @param {string} str
     */
    parsers.sdf = parsers.SDF = function(atoms, str, options) {

        var noH = false;
        if (typeof options.keepH !== "undefined")
            noH = !options.keepH;
        var lines = str.split("\n");
        if (lines.length < 4)
            return;
        var atomCount = parseInt(lines[3].substr(0, 3));
        if (isNaN(atomCount) || atomCount <= 0)
            return;
        var bondCount = parseInt(lines[3].substr(3, 3));
        var offset = 4;
        if (lines.length < 4 + atomCount + bondCount)
            return;

        // serial is atom's index in file; index is atoms index in 'atoms'
        var serialToIndex = [];
        var start = atoms.length;
        var end = start + atomCount;
        var i, line;
        for (i = start; i < end; i++) {
            line = lines[offset];
            offset++;
            var atom = {};
            atom.atom = atom.elem = line.substr(31, 3).replace(/ /g, "");

            if (atom.elem != 'H' || !noH) {
                atom.serial = i;
                serialToIndex[i] = atoms.length;
                atom.x = parseFloat(line.substr(0, 10));
                atom.y = parseFloat(line.substr(10, 10));
                atom.z = parseFloat(line.substr(20, 10));
                atom.hetflag = true;
                atom.bonds = [];
                atom.bondOrder = [];
                atom.properties = {};
                atoms.push(atom);
            }
        }

        for (i = 0; i < bondCount; i++) {
            line = lines[offset];
            offset++;
            var from = serialToIndex[parseInt(line.substr(0, 3)) - 1 + start];
            var to = serialToIndex[parseInt(line.substr(3, 3)) - 1 + start];
            var order = parseInt(line.substr(6, 3));
            if (typeof(from) != 'undefined' && typeof(to) != 'undefined') {
                atoms[from].bonds.push(to);
                atoms[from].bondOrder.push(order);
                atoms[to].bonds.push(from);
                atoms[to].bondOrder.push(order);
            }
        }

        return true;
    };

    // puts atoms specified in mmCIF fromat in str into atoms
    /**
     * @param {AtomSpec[]} atoms
     * @param {string} str
     */
    parsers.mcif = parsers.cif = function(atoms, str, options) {

        //Used to handle quotes correctly
        function splitRespectingQuotes(string, separator) {
            var sections = [];
            var sectionStart = 0;
            var sectionEnd = 0;
            while (sectionEnd < string.length) {
                while (string.substr(sectionEnd, separator.length) !== separator && sectionEnd < string.length) {
                    //currently does not support escaping quotes
                    if (string[sectionEnd] === "'") {
                        sectionEnd++;
                        while (sectionEnd < string.length && string[sectionEnd] !== "'") {
                            sectionEnd++;
                        }
                    } else if (string[sectionEnd] === '"') {
                        sectionEnd++;
                        while (sectionEnd < string.length && string[sectionEnd] !== '"') {
                            sectionEnd++;
                        }
                    }
                    sectionEnd++;

                }
                sections.push(string.substr(sectionStart, sectionEnd - sectionStart));
                sectionStart = sectionEnd = sectionEnd + separator.length;
            }
            return sections;
        }

        //Parser puts all of the data in the file in an object
        //uses getDataItem() to get an array for the category and data item given
        //The possible categories and data items in each category are defined in
        //the mmCIF specification
        function getDataItem(categoryName, dataItemName) {
            if (!(categoryName in mmCIF)) {
                mmCIF[categoryName] = {};
            }
            var category = mmCIF[categoryName];
            if (!(dataItemName in category)) {
                category[dataItemName] = [];
            }
            var dataItem = category[dataItemName];
            return dataItem;
        }

        var lines = str.split("\n");
        //Filter text to remove comments, trailing spaces, and empty lines
        var linesFiltered = [];
        var trimDisabled = false;
        for (var lineNum = 0; lineNum < lines.length; lineNum++) {
            //first remove comments
            //incorrect if #'s are allowed in strings
            //comments might only be allowed at beginning of line, not sure
            var line = lines[lineNum].split('#')[0];

            //inside data blocks, the string must be left verbatim
            //datablocks are started with a ';' at the beginning of a line
            //and ended with a ';' on its own line.
            if (trimDisabled) {
                if (line[0] === ';') {
                    trimDisabled = false;
                }
            } else {
                if (line[0] === ';') {
                    trimDisabled = true;
                }
            }

            if (trimDisabled) {
                linesFiltered.push(line);
            } else if (line !== "") {
                linesFiltered.push(line.trim());
            }
        }

        //Process the lines and puts all of the data into an object.
        var mmCIF = {};
        var lineNum = 0;
        while (lineNum < linesFiltered.length) {
            if (linesFiltered[lineNum][0] === undefined) {
                lineNum++;
            } else if (linesFiltered[lineNum][0] === '_') {
                var categoryName = linesFiltered[lineNum].split('.')[0];
                var dataItemName = linesFiltered[lineNum].split('.')[1].split(/\s/)[0];
                var dataItem = getDataItem(categoryName, dataItemName);


                //if nothing left on the line go to the next one
                var restOfLine = linesFiltered[lineNum].substr(linesFiltered[lineNum].indexOf(dataItemName) + dataItemName.length);
                if (restOfLine === "") {
                    lineNum++;
                    if (linesFiltered[lineNum][0] === ';') {
                        var dataBlock = linesFiltered[lineNum].substr(1);
                        lineNum++;
                        while (linesFiltered[lineNum] !== ';') {
                            dataBlock = dataBlock + '\n' + linesFiltered[lineNum];
                            lineNum++;
                        }
                        dataItem.push(dataBlock);
                    } else {
                        dataItem.push(linesFiltered[lineNum]);
                    }
                } else {
                    dataItem.push(restOfLine.trim());
                }
                lineNum++;
            } else if (linesFiltered[lineNum].substr(0, 5) === "loop_") {
                lineNum++;
                var dataItems = [];
                var dataItemNames = []
                while (linesFiltered[lineNum] === "" || linesFiltered[lineNum][0] === '_') {
                    if (linesFiltered[lineNum] !== "") {
                        var categoryName = linesFiltered[lineNum].split('.')[0];
                        var dataItemName = linesFiltered[lineNum].split('.')[1].split(/\s/)[0];
                        var dataItem = getDataItem(categoryName, dataItemName);
                        dataItems.push(dataItem);
                        dataItemNames.push(dataItemName);
                    }
                    lineNum++;
                }

                var currentDataItem = 0;
                while (lineNum < linesFiltered.length && linesFiltered[lineNum][0] !== '_' && linesFiltered[lineNum].substr(0, 5) !== "loop_") {
                    var line = splitRespectingQuotes(linesFiltered[lineNum], " ");
                    for (var field = 0; field < line.length; field++) {
                        if (line[field] !== "") {
                            dataItems[currentDataItem].push(line[field]);
                            currentDataItem = (currentDataItem + 1) % dataItems.length;
                        }
                    }
                    lineNum++;
                }
            } else {
                lineNum++;
            }
        }

        //Pulls atom information out of the data
        var atomsPreBonds = {};
        for (var i = 0; i < mmCIF._atom_site.id.length; i++) {
            if (mmCIF._atom_site.group_PDB[i] === "TER") continue;
            var atom = {};
            atom.id = parseFloat(mmCIF._atom_site.id[i]);
            atom.x = parseFloat(mmCIF._atom_site.cartn_x[i]);
            atom.y = parseFloat(mmCIF._atom_site.cartn_y[i]);
            atom.z = parseFloat(mmCIF._atom_site.cartn_z[i]);
            atom.hetflag = true; //need to figure out what this is group_PDB == HETA
            atom.elem = mmCIF._atom_site.type_symbol[i];
            atom.bonds = [];
            atom.bondOrder = [];
            atom.properties = {};
            atomsPreBonds[atom.id] = atom;
        }
        var atomsIndexed = [];
        var currentIndex = 0;
        for (var id in atomsPreBonds) {
            var atom = atomsPreBonds[id];
            atom.index = currentIndex;
            atomsIndexed[currentIndex] = atom;
            currentIndex++;
        }

        //create a hash table of the atoms using label and sequence as keys
        var atomHashTable = {};
        for (var i = 0; i < mmCIF._atom_site.id.length; i++) {
            var label_alt = mmCIF._atom_site.label_alt_id[i];
            var label_asym = mmCIF._atom_site.label_asym_id[i];
            var label_atom = mmCIF._atom_site.label_atom_id[i];
            var label_seq = mmCIF._atom_site.label_seq_id[i];
            var id = mmCIF._atom_site.id[i]; //If file is sorted, id will be i+1

            if (atomHashTable[label_alt] === undefined) {
                atomHashTable[label_alt] = {};
            }
            if (atomHashTable[label_alt][label_asym] === undefined) {
                atomHashTable[label_alt][label_asym] = {};
            }
            if (atomHashTable[label_alt][label_asym][label_atom] === undefined) {
                atomHashTable[label_alt][label_asym][label_atom] = {};
            }

            atomHashTable[label_alt][label_asym][label_atom][label_seq] = id;
        }

        for (var i = 0; i < mmCIF._struct_conn.id.length; i++) {
            var offset = atoms.length;
            var id1 = atomHashTable[mmCIF._struct_conn.ptnr1_label_alt_id[i]]
                [mmCIF._struct_conn.ptnr1_label_asym_id[i]]
                [mmCIF._struct_conn.ptnr1_label_atom_id[i]]
                [mmCIF._struct_conn.ptnr1_label_seq_id[i]];
            if (atomsPreBonds[id1] === undefined) continue;
            var index1 = atomsPreBonds[id1].index;

            var id2 = atomHashTable[mmCIF._struct_conn.ptnr2_label_alt_id[i]]
                [mmCIF._struct_conn.ptnr2_label_asym_id[i]]
                [mmCIF._struct_conn.ptnr2_label_atom_id[i]]
                [mmCIF._struct_conn.ptnr2_label_seq_id[i]];
            if (atomsPreBonds[id2] === undefined) continue;
            var index2 = atomsPreBonds[id2].index;

            atomsPreBonds[id1].bonds.push(index2 + offset);
            atomsPreBonds[id1].bondOrder.push(1);
            atomsPreBonds[id2].bonds.push(index1 + offset);
            atomsPreBonds[id2].bondOrder.push(1);
            console.log("connected " + index1 + " and " + index2);
        }

        //atoms = atoms.concat(atomsPreBonds);
        for (var i = 0; i < atomsIndexed.length; i++) {
            delete atomsIndexed[i].index;
            atoms.push(atomsIndexed[i]);
        }

        assignBonds(atoms);

        var matrices = [];
        for (var i = 0; i < mmCIF._atom_sites['fract_transf_matrix[1][1]'].length; i++) {
            var matrix = new $3Dmol.Matrix4(
                mmCIF._atom_sites['fract_transf_matrix[1][1]'],
                mmCIF._atom_sites['fract_transf_matrix[1][2]'],
                mmCIF._atom_sites['fract_transf_matrix[1][3]'],
                mmCIF._atom_sites['fract_transf_vector[1]'],
                mmCIF._atom_sites['fract_transf_matrix[2][1]'],
                mmCIF._atom_sites['fract_transf_matrix[2][2]'],
                mmCIF._atom_sites['fract_transf_matrix[2][3]'],
                mmCIF._atom_sites['fract_transf_vector[2]'],
                mmCIF._atom_sites['fract_transf_matrix[3][1]'],
                mmCIF._atom_sites['fract_transf_matrix[3][2]'],
                mmCIF._atom_sites['fract_transf_matrix[3][3]'],
                mmCIF._atom_sites['fract_transf_vector[3]']
            );
            matrices.push(matrix);
        }
    }

    // parse SYBYL mol2 file from string - assumed to only contain one molecule
    // tag
    // TODO: Figure out how to handle multi molecule files (for SDF, too)
    /**
     * @param {AtomSpec[]} atoms
     * @param {string} str
     * @param {Object} options - keepH (do not strip hydrogens)
     */
    parsers.mol2 = parsers.MOL2 = function(atoms, str, options) {

        var noH = false;
        if (typeof options.keepH !== "undefined")
            noH = !options.keepH;

        // Note: these regex's work, though they don't match '<TRIPOS>'
        // correctly - something to do with angle brackets
        var mol_pos = str.search(/@<TRIPOS>MOLECULE/);
        var atom_pos = str.search(/@<TRIPOS>ATOM/);

        // Assuming both Molecule and Atom sections exist
        if (mol_pos == -1 || atom_pos == -1)
            return;

        // serial is atom's index in file; index is atoms index in 'atoms'
        var serialToIndex = [];


        // assert (mol_pos < atom_pos), "Unexpected formatting of mol2 file
        // (expected 'molecule' section before 'atom' section)";


        var lines = str.substr(mol_pos, str.length).split("\n");
        var tokens = lines[2].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");
        var natoms = parseInt(tokens[0]);
        var nbonds = 0;

        if (tokens.length > 1)
            nbonds = parseInt(tokens[1]);

        var offset = 4;
        var i;
        // Continue until 'Atom' section
        for (i = 3; i < lines.length; i++) {
            if (lines[i] == "@<TRIPOS>ATOM") {
                offset = i + 1;
                break;
            }
        }

        var start = atoms.length;
        var end = start + natoms;
        var line;
        // Process ATOMS
        for (i = start; i < end; i++) {
            line = lines[offset++];
            tokens = line.replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");
            var atom = {};
            //get element
            atom.atom = atom.elem = tokens[5].split('.')[0];
            if (atom.elem == 'H' && noH) {
                //ignore
            } else {
                // 'index' is this atom's index in 'atoms'; 'serial' is this atom's
                // serial id in mol2 file
                var index = atoms.length;
                var serial = parseInt(tokens[0]);
                atom.serial = serial;
                // atom.serial = i;

                atom.x = parseFloat(tokens[2]);
                atom.y = parseFloat(tokens[3]);
                atom.z = parseFloat(tokens[4]);
                atom.atom = tokens[5];
                var charge = parseFloat(tokens[8]);

                atom.bonds = [];
                atom.bondOrder = [];
                atom.properties = {
                    'charge': charge,
                    'partialCharge': charge
                };

                serialToIndex[serial] = index;
                atoms.push(atom);
            }
        }

        // Process BONDS
        var bonds_found = false;
        while (offset < lines.length) {
            if (lines[offset++] == "@<TRIPOS>BOND") {
                bonds_found = true;
                break;
            }
        }

        if (bonds_found && nbonds) {
            for (i = 0; i < nbonds; i++) {
                line = lines[offset++];

                tokens = line.replace(/^\s+/, "").replace(/\s+/g, " ").split(
                    " ");
                var from = parseInt(tokens[1]);
                fromAtom = atoms[serialToIndex[from]];
                var to = parseInt(tokens[2]);
                toAtom = atoms[serialToIndex[to]];

                // Won't be able to read aromatic bonds correctly...
                var order = parseInt(tokens[3]);
                if (isNaN(order))
                    order = 1;

                if (fromAtom !== undefined && toAtom !== undefined) {
                    fromAtom.bonds.push(serialToIndex[to]);
                    fromAtom.bondOrder.push(order);
                    toAtom.bonds.push(serialToIndex[from]);
                    toAtom.bondOrder.push(order);
                }



            }
        }

        return true;

    };


    // return true if atom1 and atom2 are probably bonded to each other
    // based on distance alone
    var areConnected = function(atom1, atom2) {
        var maxsq = 3.6;

        var xdiff = atom1.x - atom2.x;
        xdiff *= xdiff;
        if (xdiff > maxsq)
            return false;
        var ydiff = atom1.y - atom2.y;
        ydiff *= ydiff;
        if (ydiff > maxsq)
            return false;
        var zdiff = atom1.z - atom2.z;
        zdiff *= zdiff;
        if (zdiff > maxsq)
            return false;

        var distSquared = xdiff + ydiff + zdiff;

        if (isNaN(distSquared))
            return false;
        if (distSquared < 0.5)
            return false; // maybe duplicate position.

        if (distSquared > 1.3 && (atom1.elem == 'H' || atom2.elem == 'H' || atom1.elem == 'D' || atom2.elem == 'D'))
            return false;
        if (distSquared < 3.6 && (atom1.elem == 'S' || atom2.elem == 'S'))
            return true;
        if (distSquared > 2.78)
            return false;
        return true;
    };

    // parse pdb file from str and create atoms
    //if computeStruct is true will always perform secondary structure analysis,
    //otherwise only do analysis of SHEET/HELIX comments are missing
    /**
     * @param {AtomSpec[]} atoms
     * @param {string} str
     * @param {Object} options - keepH (do not strip hydrogens), noSecondaryStructure (do not compute ss)
     */
    parsers.pdb = parsers.PDB = parsers.pdbqt = parsers.PDBQT = function(atoms, str, options, copyMatrices) {

        var atoms_cnt = 0;
        var noH = !options.keepH; // suppress hydrogens by default
        var computeStruct = !options.noSecondaryStructure;
        var noAssembly = !options.doAssembly; //don't assemble by default
        var copyMatrix = !options.duplicateAssemblyAtoms; //if not specified, default to copyMatrix true
        var allMatrices = [];
        var start = atoms.length;
        var atom;
        var protein = {
            sheet: [],
            helix: []
        }; // get secondary structure straight from pdb

        var hasStruct = false;
        var serialToIndex = []; // map from pdb serial to index in atoms
        var lines = str.split("\n");
        var i, j, k, line;
        for (i = 0; i < lines.length; i++) {
            line = lines[i].replace(/^\s*/, ''); // remove indent
            var recordName = line.substr(0, 6);
            var startChain, startResi, endChain, endResi;
            if (recordName == 'ATOM  ' || recordName == 'HETATM') {
                var resn, chain, resi, icode, x, y, z, hetflag, elem, serial, altLoc, b;
                altLoc = line.substr(16, 1);
                if (altLoc != ' ' && altLoc != 'A')
                    continue; // FIXME: ad hoc
                serial = parseInt(line.substr(6, 5));
                atom = line.substr(12, 4).replace(/ /g, "");
                resn = line.substr(17, 3);
                chain = line.substr(21, 1);
                resi = parseInt(line.substr(22, 4));
                icode = line.substr(26, 1);
                x = parseFloat(line.substr(30, 8));
                y = parseFloat(line.substr(38, 8));
                z = parseFloat(line.substr(46, 8));
                b = parseFloat(line.substr(60, 8));
                elem = line.substr(76, 2).replace(/ /g, "");
                if (elem === '') { // for some incorrect PDB files
                    elem = line.substr(12, 2).replace(/ /g, "");
                }
                if ((elem == 'H' || elem == 'HH' || elem == 'HD') && noH)
                    continue;
                if (line[0] == 'H')
                    hetflag = true;
                else
                    hetflag = false;
                serialToIndex[serial] = atoms.length;
                atoms.push({
                    'resn': resn,
                    'x': x,
                    'y': y,
                    'z': z,
                    'elem': elem,
                    'hetflag': hetflag,
                    'chain': chain,
                    'resi': resi,
                    'icode': icode,
                    'rescode': resi + (icode != ' ' ? "^" + icode : ""), // combo
                    // resi
                    // and
                    // icode
                    'serial': serial,
                    'atom': atom,
                    'bonds': [],
                    'ss': 'c',
                    'bondOrder': [],
                    'properties': {},
                    'b': b,
                    'pdbline': line
                });
            } else if (recordName == 'SHEET ') {
                hasStruct = true;
                startChain = line.substr(21, 1);
                startResi = parseInt(line.substr(22, 4));
                endChain = line.substr(32, 1);
                endResi = parseInt(line.substr(33, 4));
                protein.sheet
                    .push([startChain, startResi, endChain, endResi]);
            } else if (recordName == 'CONECT') {
                // MEMO: We don't have to parse SSBOND, LINK because both are
                // also
                // described in CONECT. But what about 2JYT???
                var from = parseInt(line.substr(6, 5));
                var fromAtom = atoms[serialToIndex[from]];
                for (j = 0; j < 4; j++) {
                    var to = parseInt(line.substr([11, 16, 21, 26][j], 5));
                    var toAtom = atoms[serialToIndex[to]];
                    if (fromAtom !== undefined && toAtom !== undefined) {
                        //minimal cleanup here - pymol likes to output duplicated conect records
                        var toindex = serialToIndex[to];
                        if (fromAtom.bonds[fromAtom.bonds.length - 1] != toindex) {
                            fromAtom.bonds.push(toindex);
                            fromAtom.bondOrder.push(1);
                        }
                    }
                }
            } else if (recordName == 'HELIX ') {
                hasStruct = true;
                startChain = line.substr(19, 1);
                startResi = parseInt(line.substr(21, 4));
                endChain = line.substr(31, 1);
                endResi = parseInt(line.substr(33, 4));
                protein.helix
                    .push([startChain, startResi, endChain, endResi]);
            } else if ((!noAssembly) && (recordName == 'REMARK') && (line.substr(13, 5) == 'BIOMT')) {
                var n;
                var matrix = new $3Dmol.Matrix4();
                for (n = 1; n <= 3; n++) {
                    line = lines[i].replace(/^\s*/, '');
                    if (parseInt(line.substr(18, 1)) == n) { //check for all three lines by matching # @ end of "BIOMT" to n
                        matrix.elements[(n - 1)] = parseFloat(line.substr(23, 10));
                        matrix.elements[(n - 1) + 4] = parseFloat(line.substr(33, 10));
                        matrix.elements[(n - 1) + 8] = parseFloat(line.substr(43, 10));
                        matrix.elements[(n - 1) + 12] = parseFloat(line.substr(53));
                        i++;
                    } else {
                        while (line.substr(13, 5) == 'BIOMT') { //increase "i" until you leave the REMARKs
                            i++;
                            line = lines[i].replace(/^\s*/, '');
                        }
                    }
                }
                matrix.elements[3] = 0;
                matrix.elements[7] = 0;
                matrix.elements[11] = 0;
                matrix.elements[15] = 1;
                allMatrices.push(matrix);
                copyMatrices.push(matrix);

                i--; //set i back
            }


        }

        var starttime = (new Date()).getTime();
        // assign bonds - yuck, can't count on connect records
        assignPDBBonds(atoms);
        //console.log("bond connecting " + ((new Date()).getTime() - starttime));

        var end = atoms.length;
        var offset = end;
        var idMatrix = new $3Dmol.Matrix4();
        idMatrix.identity();
        var t;
        var l;
        if (!copyMatrix) { //do full assembly
            for (t = 0; t < allMatrices.length; t++) {
                if (!allMatrices[t].isEqual(idMatrix)) {
                    var n;
                    var xyz = new $3Dmol.Vector3();
                    for (n = 0; n < end; n++) {
                        var bondsArr = [];
                        for (l = 0; l < atoms[n].bonds.length; l++) {
                            bondsArr.push(atoms[n].bonds[l] + offset);
                        }
                        xyz.set(atoms[n].x, atoms[n].y, atoms[n].z);
                        xyz.applyMatrix4(allMatrices[t]);
                        atoms.push({
                            'resn': atoms[n].resn,
                            'x': xyz.x,
                            'y': xyz.y,
                            'z': xyz.z,
                            'elem': atoms[n].elem,
                            'hetflag': atoms[n].hetflag,
                            'chain': atoms[n].chain,
                            'resi': atoms[n].resi,
                            'icode': atoms[n].icode,
                            'rescode': atoms[n].rescode,
                            'serial': atoms[n].serial,
                            'atom': atoms[n].atom,
                            'bonds': bondsArr,
                            'ss': atoms[n].ss,
                            'bondOrder': atoms[n].bondOrder,
                            'properties': atoms[n].properties,
                            'b': atoms[n].b,
                            'pdbline': atoms[n].pdbline,
                        });
                    }
                    offset = atoms.length;
                }
            }
        }
        //ELSE give all atoms a pointer to their symmetries 
        else {
            for (t = 0; t < atoms.length; t++) {
                var symmetries = [];
                for (l = 0; l < copyMatrices.length; l++) {
                    var newXYZ = new $3Dmol.Vector3();
                    newXYZ.set(atoms[t].x, atoms[t].y, atoms[t].x);
                    newXYZ.applyMatrix4(copyMatrices[l]);
                    symmetries.push(newXYZ);
                }
                atoms[t].symmetries = symmetries;
            }
        }


        if (computeStruct || !hasStruct) {
            starttime = (new Date()).getTime();
            computeSecondaryStructure(atoms);
            //console.log("secondary structure " + ((new Date()).getTime() - starttime));
        }

        // Assign secondary structures from pdb file
        for (i = start; i < atoms.length; i++) {
            atom = atoms[i];
            if (atom === undefined)
                continue;

            var found = false;
            // MEMO: Can start chain and end chain differ?
            for (j = 0; j < protein.sheet.length; j++) {
                if (atom.chain != protein.sheet[j][0])
                    continue;
                if (atom.resi < protein.sheet[j][1])
                    continue;
                if (atom.resi > protein.sheet[j][3])
                    continue;
                atom.ss = 's';
                if (atom.resi == protein.sheet[j][1])
                    atom.ssbegin = true;
                if (atom.resi == protein.sheet[j][3])
                    atom.ssend = true;
            }
            for (j = 0; j < protein.helix.length; j++) {
                if (atom.chain != protein.helix[j][0])
                    continue;
                if (atom.resi < protein.helix[j][1])
                    continue;
                if (atom.resi > protein.helix[j][3])
                    continue;
                atom.ss = 'h';
                if (atom.resi == protein.helix[j][1])
                    atom.ssbegin = true;
                else if (atom.resi == protein.helix[j][3])
                    atom.ssend = true;
            }
        }
        return true;
    };


    /** Parse a pqr file from str and create atoms.  A pqr file is assumed
     * to be a whitespace delimited PDB with charge and radius fields.
     
     *
     * @param {AtomSpec[]} atoms
     * @param {string} str
     * @param {Object} options -  noSecondaryStructure (do not compute ss)
     */
    parsers.pqr = parsers.PQR = function(atoms, str, options) {

        var atoms_cnt = 0;
        var start = atoms.length;
        var atom;
        var computeStruct = !options.noSecondaryStructure;

        var serialToIndex = []; // map from pdb serial to index in atoms
        var lines = str.split("\n");
        var i, j, k, line;
        for (i = 0; i < lines.length; i++) {
            line = lines[i].replace(/^\s*/, ''); // remove indent
            var recordName = line.substr(0, 6);
            var startChain, startResi, endChain, endResi;
            if (recordName == 'ATOM  ' || recordName == 'HETATM') {
                //I would have liked to split based solely on whitespace, but
                //it seems that there is no guarantee that all the fields will
                //be filled out (e.g. the chain) so this doesn't work
                var serial = parseInt(line.substr(6, 5));
                var atom = line.substr(12, 4).replace(/ /g, "");
                var resn = line.substr(17, 3);
                var chain = line.substr(21, 1);
                var resi = parseInt(line.substr(22, 4));
                //however let's split the coordinates, charge and radius by whitespace
                //to support extra precision
                var vals = line.substr(30).trim().split(/\s+/);
                var x = parseFloat(vals[0]);
                var y = parseFloat(vals[1]);
                var z = parseFloat(vals[2]);
                var charge = parseFloat(vals[3]);
                var radius = parseFloat(vals[4]);

                var elem = atom[0];
                if (atom.length > 1 && atom[1].toUpperCase() != atom[1]) {
                    //slight hack - identify two character elements by the
                    //second character in the atom name being lowercase
                    elem = atom.substr(0, 2);
                }

                if (line[0] == 'H')
                    hetflag = true;
                else
                    hetflag = false;
                serialToIndex[serial] = atoms.length;
                atoms.push({
                    'resn': resn,
                    'x': x,
                    'y': y,
                    'z': z,
                    'elem': elem,
                    'hetflag': hetflag,
                    'chain': chain,
                    'resi': resi,
                    'serial': serial,
                    'atom': atom,
                    'bonds': [],
                    'ss': 'c',
                    'bondOrder': [],
                    'properties': {
                        'charge': charge,
                        'partialCharge': charge,
                        'radius': radius
                    },
                    'pdbline': line
                });
            } else if (recordName == 'CONECT') {
                // MEMO: We don't have to parse SSBOND, LINK because both are
                // also
                // described in CONECT. But what about 2JYT???
                var from = parseInt(line.substr(6, 5));
                var fromAtom = atoms[serialToIndex[from]];
                for (j = 0; j < 4; j++) {
                    var to = parseInt(line.substr([11, 16, 21, 26][j], 5));
                    var toAtom = atoms[serialToIndex[to]];
                    if (fromAtom !== undefined && toAtom !== undefined) {
                        fromAtom.bonds.push(serialToIndex[to]);
                        fromAtom.bondOrder.push(1);
                    }
                }
            }
        }

        // assign bonds - yuck, can't count on connect records
        assignPDBBonds(atoms);
        if (computeStruct)
            computeSecondaryStructure(atoms);

        return true;
    };



    return parsers;
})();
var $3Dmol = $3Dmol || {};

//properties for mapping

/* partial charges for proteins */
$3Dmol.partialCharges = {
    "ALA:N": -0.15,
    "ALA:CA": 0.10,
    "ALA:CB": 0.00,
    "ALA:C": 0.60,
    "ALA:O": -0.55,
    "ARG:N": -0.15,
    "ARG:CA": 0.10,
    "ARG:CB": 0.00,
    "ARG:CG": 0.00,
    "ARG:CD": 0.10,
    "ARG:NE": -0.10,
    "ARG:CZ": 0.50,
    "ARG:NH1": 0.25,
    "ARG:NH2": 0.25,
    "ARG:C": 0.60,
    "ARG:O": -0.55,
    "ASN:N": -0.15,
    "ASN:CA": 0.10,
    "ASN:CB": 0.00,
    "ASN:CG": 0.55,
    "ASN:OD1": -0.55,
    "ASN:ND2": 0.00,
    "ASN:C": 0.60,
    "ASN:O": -0.55,
    "ASP:N": -0.15,
    "ASP:CA": 0.10,
    "ASP:CB": 0.00,
    "ASP:CG": 0.14,
    "ASP:OD1": -0.57,
    "ASP:OD2": -0.57,
    "ASP:C": 0.60,
    "ASP:O": -0.55,
    "CYS:N": -0.15,
    "CYS:CA": 0.10,
    "CYS:CB": 0.19,
    "CYS:SG": -0.19,
    "CYS:C": 0.60,
    "CYS:O": -0.55,
    "GLN:N": -0.15,
    "GLN:CA": 0.10,
    "GLN:CB": 0.00,
    "GLN:CG": 0.00,
    "GLN:CD": 0.55,
    "GLN:OE1": -0.55,
    "GLN:NE2": 0.00,
    "GLN:C": 0.60,
    "GLN:O": -0.55,
    "GLU:N": -0.15,
    "GLU:CA": 0.10,
    "GLU:CB": 0.00,
    "GLU:CG": 0.00,
    "GLU:CD": 0.14,
    "GLU:OE1": -0.57,
    "GLU:OE2": -0.57,
    "GLU:C": 0.60,
    "GLU:O": -0.55,
    "GLY:N": -0.15,
    "GLY:CA": 0.10,
    "GLY:C": 0.60,
    "GLY:O": -0.55,
    "HIS:N": -0.15,
    "HIS:CA": 0.10,
    "HIS:CB": 0.00,
    "HIS:CG": 0.10,
    "HIS:ND1": -0.10,
    "HIS:CD2": 0.10,
    "HIS:NE2": -0.40,
    "HIS:CE1": 0.30,
    "HIS:C": 0.60,
    "HIS:O": -0.55,
    "ILE:N": -0.15,
    "ILE:CA": 0.10,
    "ILE:CB": 0.00,
    "ILE:CG2": 0.00,
    "ILE:CG1": 0.00,
    "ILE:CD": 0.00,
    "ILE:C": 0.60,
    "ILE:O": -0.55,
    "LEU:N": -0.15,
    "LEU:CA": 0.10,
    "LEU:CB": 0.00,
    "LEU:CG": 0.00,
    "LEU:CD1": 0.00,
    "LEU:CD2": 0.00,
    "LEU:C": 0.60,
    "LEU:O": -0.55,
    "LYS:N": -0.15,
    "LYS:CA": 0.10,
    "LYS:CB": 0.00,
    "LYS:CG": 0.00,
    "LYS:CD": 0.00,
    "LYS:CE": 0.25,
    "LYS:NZ": 0.75,
    "LYS:C": 0.60,
    "LYS:O": -0.55,
    "MET:N": -0.15,
    "MET:CA": 0.10,
    "MET:CB": 0.00,
    "MET:CG": 0.06,
    "MET:SD": -0.12,
    "MET:CE": 0.06,
    "MET:C": 0.60,
    "MET:O": -0.55,
    "PHE:N": -0.15,
    "PHE:CA": 0.10,
    "PHE:CB": 0.00,
    "PHE:CG": 0.00,
    "PHE:CD1": 0.00,
    "PHE:CD2": 0.00,
    "PHE:CE1": 0.00,
    "PHE:CE2": 0.00,
    "PHE:CZ": 0.00,
    "PHE:C": 0.60,
    "PHE:O": -0.55,
    "PRO:N": -0.25,
    "PRO:CD": 0.10,
    "PRO:CA": 0.10,
    "PRO:CB": 0.00,
    "PRO:CG": 0.00,
    "PRO:C": 0.60,
    "PRO:O": -0.55,
    "SER:N": -0.15,
    "SER:CA": 0.10,
    "SER:CB": 0.25,
    "SER:OG": -0.25,
    "SER:C": 0.60,
    "SER:O": -0.55,
    "THR:N": -0.15,
    "THR:CA": 0.10,
    "THR:CB": 0.25,
    "THR:OG1": -0.25,
    "THR:CG2": 0.00,
    "THR:C": 0.60,
    "THR:O": -0.55,
    "TRP:N": -0.15,
    "TRP:CA": 0.10,
    "TRP:CB": 0.00,
    "TRP:CG": -0.03,
    "TRP:CD2": 0.10,
    "TRP:CE2": -0.04,
    "TRP:CE3": -0.03,
    "TRP:CD1": 0.06,
    "TRP:NE1": -0.06,
    "TRP:CZ2": 0.00,
    "TRP:CZ3": 0.00,
    "TRP:CH2": 0.00,
    "TRP:C": 0.60,
    "TRP:O": -0.55,
    "TYR:N": -0.15,
    "TYR:CA": 0.10,
    "TYR:CB": 0.00,
    "TYR:CG": 0.00,
    "TYR:CD1": 0.00,
    "TYR:CE1": 0.00,
    "TYR:CD2": 0.00,
    "TYR:CE2": 0.00,
    "TYR:CZ": 0.25,
    "TYR:OH": -0.25,
    "TYR:C": 0.60,
    "TYR:O": -0.55,
    "VAL:N": -0.15,
    "VAL:CA": 0.10,
    "VAL:CB": 0.00,
    "VAL:CG1": 0.00,
    "VAL:CG2": 0.00,
    "VAL:C": 0.60,
    "VAL:O": -0.55
};

//this can be supplied to mapAtomProperties
$3Dmol.applyPartialCharges = function(atom, keepexisting) {
    if (!keepexisting || typeof(atom.partialCharge) === "undefined") {
        if (atom.resn && atom.atom) {
            var key = atom.resn + ":" + atom.atom;
            atom.properties['partialCharge'] = $3Dmol.partialCharges[key];
        }
    }
}; // Specifications for various object types used in 3Dmol.js
// This is primarily for documentation 
(function() {
    /**
     * GLViewer input specification
     * @typedef ViewerSpec
     */
    var ViewerSpec = {};
    ViewerSpec.defaultcolors;
    ViewerSpec.callback;

    /**
     * Atom representation. Depending on the input file format, not all fields may be defined.
     * @typedef AtomSpec
     * @prop {string} resn - Parent residue name
     * @prop {number} x - Atom's x coordinate
     * @prop {number} y - Atom's y coordinate
     * @prop {number} z - Atom's z coordinate
     * @prop {number} color - Atom's color, as hex code
     * @prop {number} surfaceColor - Hex code for color to be used for surface patch over this atom
     * @prop {string} elem - Element abbreviation (e.g. 'H', 'Ca', etc)
     * @prop {boolean} hetflag - Set to true if atom is a heteroatom
     * @prop {string} chain - Chain this atom belongs to, if specified in input file (e.g 'A' for chain A)
     * @prop {number} resi - Residue number
     * @prop {number} icode
     * @prop {number} rescode
     * @prop {number} serial - Atom's serial id number
     * @prop {string} atom - Atom name; may be more specific than 'elem' (e.g 'CA' for alpha carbon)
     * @prop {Array.<number>} bonds - Array of atom ids this atom is bonded to
     * @prop {string} ss - Secondary structure identifier (for cartoon render; e.g. 'h' for helix)
     * @prop {boolean} singleBonds - true if this atom forms only single bonds or no bonds at all
     * @prop {Array.<number>} bondOrder - Array of this atom's bond orders, corresponding to bonds identfied by 'bonds'
     * @prop {Object} properties - Optional mapping of additional properties
     * @prop {number} b - Atom b factor data
     * @prop {string} pdbline - If applicable, this atom's record entry from the input PDB file (used to output new PDB from models)
     * @prop {boolean} clickable - Set this flag to true to enable click selection handling for this atom
     * @prop {function(this, $3Dmol.GLViewer)} callback - Callback click handler function to be executed on this atom and its parent viewer
     * @prop {boolean} invert - for selection, inverts the meaning of the selection
     */


    /**
     * Atom selection object. Used to specify what atoms should be selected.  Can include
     * any field from {@link AtomSpec} in which case atoms must equal the specified value.
     * All fields must match for the selection to hold. If values
     * are provided as a list, then only one value of the list must match.
     *
     * @example
     * viewer.addResLabels({resi: [1,2,3,4,5], atom: 'CA'}); // will label alpha carbons (CA) of residues 1-5
     *
     * @typedef AtomSelectionSpec
     * @prop {AtomSpec} ... - any field from {@link AtomSpec}, values may be singletons or lists
     * @prop {GLModel} model - a single model or list of models from which atoms should be selected
     * @prop {number} bonds - overloaded to select number of bonds, e.g. {bonds: 0} will select all nonbonded atoms
     * @prop {function} predicate - user supplied function that gets passed an {AtomSpec} and should return true if the atom should be selected
     * @prop {boolean} invert - if set, inverts the meaning of the selection
     * @prop {boolean} byres - if set, expands the selection to include all atoms of any residue that has any atom selected
     * @prop {number} expand - expands the selection to include all atoms within a given distance from the selection
     * @prop {WithinSelectionSpec} within - intersects the selection with the set of atoms within a given distance from another selection
     */

    /**
     * Within selection object. Used to find the subset of an atom selection that is within
     * some distance from another atom selection. When added as a field of an {@link AtomSelectionSpec},
     * intersects the set of atoms in that selection with the set of atoms within a given
     * distance from the given {@link AtomSelectionSpec}.
     *
     * @example
     * viewer.setStyle({chain: 'A', within:{distance: 10, sel:{chain: 'B'}}}, {sphere:{}}); // stylizes atoms in chain A that are within 10 angstroms of an atom in chain B
     *
     * @typedef WithinSelectionSpec
     * @prop {number} distance - the distance in angstroms away from the atom selection to include atoms in the parent selection
     * @prop {AtomSelectionSpec} sel - the selection of atoms against which to measure the distance from the parent atom selection
     */



    /** 
     * @typedef AtomStyleSpec
     * @prop {LineStyleSpec} line - draw bonds as lines
     * @prop {CrossStyleSpec} cross - draw atoms as crossed lines (aka stars)
     * @prop {StickStyleSpec} stick  - draw bonds as capped cylinders
     * @prop {SphereStyleSpec} sphere - draw atoms as spheres
     * @prop {CartoonStyleSpec} cartoon - draw cartoon representation of secondary structure
     */



    /** 
     * GLShape style specification
     * @typedef
     */
    var ShapeSpec = {};
    /** @type {$3Dmol.Color} */
    ShapeSpec.color;
    ShapeSpec.wireframe;
    ShapeSpec.alpha;
    ShapeSpec.side;
    ShapeSpec.clickable;
    /** @type {function($3Dmol.GLShape, $3Dmol.GLViewer)} */
    ShapeSpec.callback;

    /**
     * Specification for adding custom shape
     * @typedef
     */
    var CustomShapeSpec = {};
    CustomShapeSpec.vertexArr;
    CustomShapeSpec.faceArr;
    CustomShapeSpec.normalArr;
    CustomShapeSpec.lineArr;

    /**
     * Sphere shape specification
     * @typedef
     */
    var SphereSpec = {};
    SphereSpec.radius;
    /** @type {$3Dmol.Vector3} */
    SphereSpec.center;

    /**
     * Arrow shape specification
     * @typedef
     */
    var ArrowSpec = {};
    /** @var {$3Dmol.Vector3} ArrowSpec.start - Arrow start point*/
    ArrowSpec.start;
    /** @property {$3Dmol.Vector3} */
    ArrowSpec.end;
    ArrowSpec.radius;
    ArrowSpec.radiusRatio;
    ArrowSpec.mid;


    /**
     * Volumetric data specification
     * @typedef
     */
    var VolSpec = {};
    VolSpec.isoval;
    VolSpec.voxel;
})();;
/* jQuery.qrcode 0.11.0 - http://larsjung.de/jquery-qrcode/ - uses //github.com/kazuhikoarase/qrcode-generator (MIT) */
(function () {
'use strict';

var $ = jQuery;

// Wrapper for the original QR code generator.
function QRCode(text, level, version, quiet) {

    // `qrcode` is the single public function that will be defined by the `QR Code Generator`
    // at the end of the file.
    var qr = qrcode(version, level);
    qr.addData(text);
    qr.make();

    quiet = quiet || 0;

    var qrModuleCount = qr.getModuleCount();
    var quietModuleCount = qr.getModuleCount() + 2*quiet;

    function isDark(row, col) {
        
        row -= quiet;
        col -= quiet;

        if (row < 0 || row >= qrModuleCount || col < 0 || col >= qrModuleCount) {
            return false;
        }

        return qr.isDark(row, col);
    }

    var addBlank = function (l, t, r, b) {

        var prevIsDark = this.isDark;
        var moduleSize = 1 / quietModuleCount;

        this.isDark = function (row, col) {

            var ml = col * moduleSize;
            var mt = row * moduleSize;
            var mr = ml + moduleSize;
            var mb = mt + moduleSize;

            return prevIsDark(row, col) && (l > mr || ml > r || t > mb || mt > b);
        };
    };

    this.text = text;
    this.level = level;
    this.version = version;
    this.moduleCount = quietModuleCount;
    this.isDark = isDark;
    this.addBlank = addBlank;
}

// Check if canvas is available in the browser (as Modernizr does)
var hasCanvas = (function () {

        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }());
var hasArcTo = Object.prototype.toString.call(window.opera) !== '[object Opera]';

// Returns a minimal QR code for the given text starting with version `minVersion`.
// Returns `undefined` if `text` is too long to be encoded in `maxVersion`.
function createQRCode(text, level, minVersion, maxVersion, quiet) {

    minVersion = Math.max(1, minVersion || 1);
    maxVersion = Math.min(40, maxVersion || 40);
    for (var version = minVersion; version <= maxVersion; version += 1) {
        try {
            return new QRCode(text, level, version, quiet);
        } catch (err) {}
    }
}

function drawBackgroundLabel(qr, context, settings) {

    var size = settings.size;
    var font = "bold " + (settings.mSize * size) + "px " + settings.fontname;
    var ctx = $('<canvas/>')[0].getContext("2d");

    ctx.font = font;

    var w = ctx.measureText(settings.label).width;
    var sh = settings.mSize;
    var sw = w / size;
    var sl = (1 - sw) * settings.mPosX;
    var st = (1 - sh) * settings.mPosY;
    var sr = sl + sw;
    var sb = st + sh;
    var pad = 0.01;

    if (settings.mode === 1) {
        // Strip
        qr.addBlank(0, st - pad, size, sb + pad);
    } else {
        // Box
        qr.addBlank(sl - pad, st - pad, sr + pad, sb + pad);
    }

    context.fillStyle = settings.fontcolor;
    context.font = font;
    context.fillText(settings.label, sl*size, st*size + 0.75 * settings.mSize * size);
}

function drawBackgroundImage(qr, context, settings) {

    var size = settings.size;
    var w = settings.image.naturalWidth || 1;
    var h = settings.image.naturalHeight || 1;
    var sh = settings.mSize;
    var sw = sh * w / h;
    var sl = (1 - sw) * settings.mPosX;
    var st = (1 - sh) * settings.mPosY;
    var sr = sl + sw;
    var sb = st + sh;
    var pad = 0.01;

    if (settings.mode === 3) {
        // Strip
        qr.addBlank(0, st - pad, size, sb + pad);
    } else {
        // Box
        qr.addBlank(sl - pad, st - pad, sr + pad, sb + pad);
    }

    context.drawImage(settings.image, sl*size, st*size, sw*size, sh*size);
}

function drawBackground(qr, context, settings) {

    if ($(settings.background).is('img')) {
        context.drawImage(settings.background, 0, 0, settings.size, settings.size);
    } else if (settings.background) {
        context.fillStyle = settings.background;
        context.fillRect(settings.left, settings.top, settings.size, settings.size);
    }

    var mode = settings.mode;
    if (mode === 1 || mode === 2) {
        drawBackgroundLabel(qr, context, settings);
    } else if (mode === 3 || mode === 4) {
        drawBackgroundImage(qr, context, settings);
    }
}

function drawModuleDefault(qr, context, settings, left, top, width, row, col) {

    if (qr.isDark(row, col)) {
        context.rect(left, top, width, width);
    }
}

function drawModuleRoundedDark(ctx, l, t, r, b, rad, nw, ne, se, sw) {

    if (nw) {
        ctx.moveTo(l + rad, t);
    } else {
        ctx.moveTo(l, t);
    }

    if (ne) {
        ctx.lineTo(r - rad, t);
        ctx.arcTo(r, t, r, b, rad);
    } else {
        ctx.lineTo(r, t);
    }

    if (se) {
        ctx.lineTo(r, b - rad);
        ctx.arcTo(r, b, l, b, rad);
    } else {
        ctx.lineTo(r, b);
    }

    if (sw) {
        ctx.lineTo(l + rad, b);
        ctx.arcTo(l, b, l, t, rad);
    } else {
        ctx.lineTo(l, b);
    }

    if (nw) {
        ctx.lineTo(l, t + rad);
        ctx.arcTo(l, t, r, t, rad);
    } else {
        ctx.lineTo(l, t);
    }
}

function drawModuleRoundendLight(ctx, l, t, r, b, rad, nw, ne, se, sw) {

    if (nw) {
        ctx.moveTo(l + rad, t);
        ctx.lineTo(l, t);
        ctx.lineTo(l, t + rad);
        ctx.arcTo(l, t, l + rad, t, rad);
    }

    if (ne) {
        ctx.moveTo(r - rad, t);
        ctx.lineTo(r, t);
        ctx.lineTo(r, t + rad);
        ctx.arcTo(r, t, r - rad, t, rad);
    }

    if (se) {
        ctx.moveTo(r - rad, b);
        ctx.lineTo(r, b);
        ctx.lineTo(r, b - rad);
        ctx.arcTo(r, b, r - rad, b, rad);
    }

    if (sw) {
        ctx.moveTo(l + rad, b);
        ctx.lineTo(l, b);
        ctx.lineTo(l, b - rad);
        ctx.arcTo(l, b, l + rad, b, rad);
    }
}

function drawModuleRounded(qr, context, settings, left, top, width, row, col) {

    var isDark = qr.isDark;
    var right = left + width;
    var bottom = top + width;
    var radius = settings.radius * width;
    var rowT = row - 1;
    var rowB = row + 1;
    var colL = col - 1;
    var colR = col + 1;
    var center = isDark(row, col);
    var northwest = isDark(rowT, colL);
    var north = isDark(rowT, col);
    var northeast = isDark(rowT, colR);
    var east = isDark(row, colR);
    var southeast = isDark(rowB, colR);
    var south = isDark(rowB, col);
    var southwest = isDark(rowB, colL);
    var west = isDark(row, colL);

    if (center) {
        drawModuleRoundedDark(context, left, top, right, bottom, radius, !north && !west, !north && !east, !south && !east, !south && !west);
    } else {
        drawModuleRoundendLight(context, left, top, right, bottom, radius, north && west && northwest, north && east && northeast, south && east && southeast, south && west && southwest);
    }
}

function drawModules(qr, context, settings) {

    var moduleCount = qr.moduleCount;
    var moduleSize = settings.size / moduleCount;
    var fn = drawModuleDefault;
    var row, col;

    if (hasArcTo && settings.radius > 0 && settings.radius <= 0.5) {
        fn = drawModuleRounded;
    }

    context.beginPath();
    for (row = 0; row < moduleCount; row += 1) {
        for (col = 0; col < moduleCount; col += 1) {

            var l = settings.left + col * moduleSize,
                t = settings.top + row * moduleSize,
                w = moduleSize;

            fn(qr, context, settings, l, t, w, row, col);
        }
    }
    if ($(settings.fill).is('img')) {
        context.strokeStyle = 'rgba(0,0,0,0.5)';
        context.lineWidth = 2;
        context.stroke();
        var prev = context.globalCompositeOperation;
        context.globalCompositeOperation = "destination-out";
        context.fill();
        context.globalCompositeOperation = prev;

        context.clip();
        context.drawImage(settings.fill, 0, 0, settings.size, settings.size);
        context.restore();
    } else {
        context.fillStyle = settings.fill;
        context.fill();
    }
}

// Draws QR code to the given `canvas` and returns it.
function drawOnCanvas(canvas, settings) {

    var qr = createQRCode(settings.text, settings.ecLevel, settings.minVersion, settings.maxVersion, settings.quiet);
    if (!qr) {
        return null;
    }

    var $canvas = $(canvas).data('qrcode', qr);
    var context = $canvas[0].getContext('2d');

    drawBackground(qr, context, settings);
    drawModules(qr, context, settings);

    return $canvas;
}

// Returns a `canvas` element representing the QR code for the given settings.
function createCanvas(settings) {

    var $canvas = $('<canvas/>').attr('width', settings.size).attr('height', settings.size);
    return drawOnCanvas($canvas, settings);
}

// Returns an `image` element representing the QR code for the given settings.
function createImage(settings) {

    return $('<img/>').attr('src', createCanvas(settings)[0].toDataURL('image/png'));
}

// Returns a `div` element representing the QR code for the given settings.
function createDiv(settings) {

    var qr = createQRCode(settings.text, settings.ecLevel, settings.minVersion, settings.maxVersion, settings.quiet);
    if (!qr) {
        return null;
    }

    // some shortcuts to improve compression
    var settings_size = settings.size;
    var settings_bgColor = settings.background;
    var math_floor = Math.floor;

    var moduleCount = qr.moduleCount;
    var moduleSize = math_floor(settings_size / moduleCount);
    var offset = math_floor(0.5 * (settings_size - moduleSize * moduleCount));

    var row, col;

    var containerCSS = {
            position: 'relative',
            left: 0,
            top: 0,
            padding: 0,
            margin: 0,
            width: settings_size,
            height: settings_size
        };
    var darkCSS = {
            position: 'absolute',
            padding: 0,
            margin: 0,
            width: moduleSize,
            height: moduleSize,
            'background-color': settings.fill
        };

    var $div = $('<div/>').data('qrcode', qr).css(containerCSS);

    if (settings_bgColor) {
        $div.css('background-color', settings_bgColor);
    }

    for (row = 0; row < moduleCount; row += 1) {
        for (col = 0; col < moduleCount; col += 1) {
            if (qr.isDark(row, col)) {
                $('<div/>')
                    .css(darkCSS)
                    .css({
                        left: offset + col * moduleSize,
                        top: offset + row * moduleSize
                    })
                    .appendTo($div);
            }
        }
    }

    return $div;
}

function createHTML(settings) {

    if (hasCanvas && settings.render === 'canvas') {
        return createCanvas(settings);
    } else if (hasCanvas && settings.render === 'image') {
        return createImage(settings);
    }

    return createDiv(settings);
}

// Plugin
// ======

// Default settings
// ----------------
var defaults = {

        // render method: `'canvas'`, `'image'` or `'div'`
        render: 'canvas',

        // version range somewhere in 1 .. 40
        minVersion: 1,
        maxVersion: 40,

        // error correction level: `'L'`, `'M'`, `'Q'` or `'H'`
        ecLevel: 'L',

        // offset in pixel if drawn onto existing canvas
        left: 0,
        top: 0,

        // size in pixel
        size: 200,

        // code color or image element
        fill: '#000',

        // background color or image element, `null` for transparent background
        background: null,

        // content
        text: 'no text',

        // corner radius relative to module width: 0.0 .. 0.5
        radius: 0,

        // quiet zone in modules
        quiet: 0,

        // modes
        // 0: normal
        // 1: label strip
        // 2: label box
        // 3: image strip
        // 4: image box
        mode: 0,

        mSize: 0.1,
        mPosX: 0.5,
        mPosY: 0.5,

        label: 'no label',
        fontname: 'sans',
        fontcolor: '#000',

        image: null
    };

// Register the plugin
// -------------------
$.fn.qrcode = function(options) {

    var settings = $.extend({}, defaults, options);

    return this.each(function () {

        if (this.nodeName.toLowerCase() === 'canvas') {
            drawOnCanvas(this, settings);
        } else {
            $(this).append(createHTML(settings));
        }
    });
};

// jQuery.qrcode plug in code ends here


// QR Code Generator
// =================
//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

var qrcode = function() {

    //---------------------------------------------------------------------
    // qrcode
    //---------------------------------------------------------------------

    /**
     * qrcode
     * @param typeNumber 1 to 10
     * @param errorCorrectLevel 'L','M','Q','H'
     */
    var qrcode = function(typeNumber, errorCorrectLevel) {

        var PAD0 = 0xEC;
        var PAD1 = 0x11;

        var _typeNumber = typeNumber;
        var _errorCorrectLevel = QRErrorCorrectLevel[errorCorrectLevel];
        var _modules = null;
        var _moduleCount = 0;
        var _dataCache = null;
        var _dataList = new Array();

        var _this = {};

        var makeImpl = function(test, maskPattern) {

            _moduleCount = _typeNumber * 4 + 17;
            _modules = function(moduleCount) {
                var modules = new Array(moduleCount);
                for (var row = 0; row < moduleCount; row += 1) {
                    modules[row] = new Array(moduleCount);
                    for (var col = 0; col < moduleCount; col += 1) {
                        modules[row][col] = null;
                    }
                }
                return modules;
            }(_moduleCount);

            setupPositionProbePattern(0, 0);
            setupPositionProbePattern(_moduleCount - 7, 0);
            setupPositionProbePattern(0, _moduleCount - 7);
            setupPositionAdjustPattern();
            setupTimingPattern();
            setupTypeInfo(test, maskPattern);

            if (_typeNumber >= 7) {
                setupTypeNumber(test);
            }

            if (_dataCache == null) {
                _dataCache = createData(_typeNumber, _errorCorrectLevel, _dataList);
            }

            mapData(_dataCache, maskPattern);
        };

        var setupPositionProbePattern = function(row, col) {

            for (var r = -1; r <= 7; r += 1) {

                if (row + r <= -1 || _moduleCount <= row + r) continue;

                for (var c = -1; c <= 7; c += 1) {

                    if (col + c <= -1 || _moduleCount <= col + c) continue;

                    if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
                            || (0 <= c && c <= 6 && (r == 0 || r == 6) )
                            || (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
                        _modules[row + r][col + c] = true;
                    } else {
                        _modules[row + r][col + c] = false;
                    }
                }
            }
        };

        var getBestMaskPattern = function() {

            var minLostPoint = 0;
            var pattern = 0;

            for (var i = 0; i < 8; i += 1) {

                makeImpl(true, i);

                var lostPoint = QRUtil.getLostPoint(_this);

                if (i == 0 || minLostPoint > lostPoint) {
                    minLostPoint = lostPoint;
                    pattern = i;
                }
            }

            return pattern;
        };

        var setupTimingPattern = function() {

            for (var r = 8; r < _moduleCount - 8; r += 1) {
                if (_modules[r][6] != null) {
                    continue;
                }
                _modules[r][6] = (r % 2 == 0);
            }

            for (var c = 8; c < _moduleCount - 8; c += 1) {
                if (_modules[6][c] != null) {
                    continue;
                }
                _modules[6][c] = (c % 2 == 0);
            }
        };

        var setupPositionAdjustPattern = function() {

            var pos = QRUtil.getPatternPosition(_typeNumber);

            for (var i = 0; i < pos.length; i += 1) {

                for (var j = 0; j < pos.length; j += 1) {

                    var row = pos[i];
                    var col = pos[j];

                    if (_modules[row][col] != null) {
                        continue;
                    }

                    for (var r = -2; r <= 2; r += 1) {

                        for (var c = -2; c <= 2; c += 1) {

                            if (r == -2 || r == 2 || c == -2 || c == 2
                                    || (r == 0 && c == 0) ) {
                                _modules[row + r][col + c] = true;
                            } else {
                                _modules[row + r][col + c] = false;
                            }
                        }
                    }
                }
            }
        };

        var setupTypeNumber = function(test) {

            var bits = QRUtil.getBCHTypeNumber(_typeNumber);

            for (var i = 0; i < 18; i += 1) {
                var mod = (!test && ( (bits >> i) & 1) == 1);
                _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
            }

            for (var i = 0; i < 18; i += 1) {
                var mod = (!test && ( (bits >> i) & 1) == 1);
                _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
            }
        };

        var setupTypeInfo = function(test, maskPattern) {

            var data = (_errorCorrectLevel << 3) | maskPattern;
            var bits = QRUtil.getBCHTypeInfo(data);

            // vertical
            for (var i = 0; i < 15; i += 1) {

                var mod = (!test && ( (bits >> i) & 1) == 1);

                if (i < 6) {
                    _modules[i][8] = mod;
                } else if (i < 8) {
                    _modules[i + 1][8] = mod;
                } else {
                    _modules[_moduleCount - 15 + i][8] = mod;
                }
            }

            // horizontal
            for (var i = 0; i < 15; i += 1) {

                var mod = (!test && ( (bits >> i) & 1) == 1);

                if (i < 8) {
                    _modules[8][_moduleCount - i - 1] = mod;
                } else if (i < 9) {
                    _modules[8][15 - i - 1 + 1] = mod;
                } else {
                    _modules[8][15 - i - 1] = mod;
                }
            }

            // fixed module
            _modules[_moduleCount - 8][8] = (!test);
        };

        var mapData = function(data, maskPattern) {

            var inc = -1;
            var row = _moduleCount - 1;
            var bitIndex = 7;
            var byteIndex = 0;
            var maskFunc = QRUtil.getMaskFunction(maskPattern);

            for (var col = _moduleCount - 1; col > 0; col -= 2) {

                if (col == 6) col -= 1;

                while (true) {

                    for (var c = 0; c < 2; c += 1) {

                        if (_modules[row][col - c] == null) {

                            var dark = false;

                            if (byteIndex < data.length) {
                                dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
                            }

                            var mask = maskFunc(row, col - c);

                            if (mask) {
                                dark = !dark;
                            }

                            _modules[row][col - c] = dark;
                            bitIndex -= 1;

                            if (bitIndex == -1) {
                                byteIndex += 1;
                                bitIndex = 7;
                            }
                        }
                    }

                    row += inc;

                    if (row < 0 || _moduleCount <= row) {
                        row -= inc;
                        inc = -inc;
                        break;
                    }
                }
            }
        };

        var createBytes = function(buffer, rsBlocks) {

            var offset = 0;

            var maxDcCount = 0;
            var maxEcCount = 0;

            var dcdata = new Array(rsBlocks.length);
            var ecdata = new Array(rsBlocks.length);

            for (var r = 0; r < rsBlocks.length; r += 1) {

                var dcCount = rsBlocks[r].dataCount;
                var ecCount = rsBlocks[r].totalCount - dcCount;

                maxDcCount = Math.max(maxDcCount, dcCount);
                maxEcCount = Math.max(maxEcCount, ecCount);

                dcdata[r] = new Array(dcCount);

                for (var i = 0; i < dcdata[r].length; i += 1) {
                    dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
                }
                offset += dcCount;

                var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
                var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

                var modPoly = rawPoly.mod(rsPoly);
                ecdata[r] = new Array(rsPoly.getLength() - 1);
                for (var i = 0; i < ecdata[r].length; i += 1) {
                    var modIndex = i + modPoly.getLength() - ecdata[r].length;
                    ecdata[r][i] = (modIndex >= 0)? modPoly.get(modIndex) : 0;
                }
            }

            var totalCodeCount = 0;
            for (var i = 0; i < rsBlocks.length; i += 1) {
                totalCodeCount += rsBlocks[i].totalCount;
            }

            var data = new Array(totalCodeCount);
            var index = 0;

            for (var i = 0; i < maxDcCount; i += 1) {
                for (var r = 0; r < rsBlocks.length; r += 1) {
                    if (i < dcdata[r].length) {
                        data[index] = dcdata[r][i];
                        index += 1;
                    }
                }
            }

            for (var i = 0; i < maxEcCount; i += 1) {
                for (var r = 0; r < rsBlocks.length; r += 1) {
                    if (i < ecdata[r].length) {
                        data[index] = ecdata[r][i];
                        index += 1;
                    }
                }
            }

            return data;
        };

        var createData = function(typeNumber, errorCorrectLevel, dataList) {

            var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);

            var buffer = qrBitBuffer();

            for (var i = 0; i < dataList.length; i += 1) {
                var data = dataList[i];
                buffer.put(data.getMode(), 4);
                buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
                data.write(buffer);
            }

            // calc num max data.
            var totalDataCount = 0;
            for (var i = 0; i < rsBlocks.length; i += 1) {
                totalDataCount += rsBlocks[i].dataCount;
            }

            if (buffer.getLengthInBits() > totalDataCount * 8) {
                throw new Error('code length overflow. ('
                    + buffer.getLengthInBits()
                    + '>'
                    + totalDataCount * 8
                    + ')');
            }

            // end code
            if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
                buffer.put(0, 4);
            }

            // padding
            while (buffer.getLengthInBits() % 8 != 0) {
                buffer.putBit(false);
            }

            // padding
            while (true) {

                if (buffer.getLengthInBits() >= totalDataCount * 8) {
                    break;
                }
                buffer.put(PAD0, 8);

                if (buffer.getLengthInBits() >= totalDataCount * 8) {
                    break;
                }
                buffer.put(PAD1, 8);
            }

            return createBytes(buffer, rsBlocks);
        };

        _this.addData = function(data) {
            var newData = qr8BitByte(data);
            _dataList.push(newData);
            _dataCache = null;
        };

        _this.isDark = function(row, col) {
            if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
                throw new Error(row + ',' + col);
            }
            return _modules[row][col];
        };

        _this.getModuleCount = function() {
            return _moduleCount;
        };

        _this.make = function() {
            makeImpl(false, getBestMaskPattern() );
        };

        _this.createTableTag = function(cellSize, margin) {

            cellSize = cellSize || 2;
            margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

            var qrHtml = '';

            qrHtml += '<table style="';
            qrHtml += ' border-width: 0px; border-style: none;';
            qrHtml += ' border-collapse: collapse;';
            qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
            qrHtml += '">';
            qrHtml += '<tbody>';

            for (var r = 0; r < _this.getModuleCount(); r += 1) {

                qrHtml += '<tr>';

                for (var c = 0; c < _this.getModuleCount(); c += 1) {
                    qrHtml += '<td style="';
                    qrHtml += ' border-width: 0px; border-style: none;';
                    qrHtml += ' border-collapse: collapse;';
                    qrHtml += ' padding: 0px; margin: 0px;';
                    qrHtml += ' width: ' + cellSize + 'px;';
                    qrHtml += ' height: ' + cellSize + 'px;';
                    qrHtml += ' background-color: ';
                    qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
                    qrHtml += ';';
                    qrHtml += '"/>';
                }

                qrHtml += '</tr>';
            }

            qrHtml += '</tbody>';
            qrHtml += '</table>';

            return qrHtml;
        };

        _this.createImgTag = function(cellSize, margin) {

            cellSize = cellSize || 2;
            margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

            var size = _this.getModuleCount() * cellSize + margin * 2;
            var min = margin;
            var max = size - margin;

            return createImgTag(size, size, function(x, y) {
                if (min <= x && x < max && min <= y && y < max) {
                    var c = Math.floor( (x - min) / cellSize);
                    var r = Math.floor( (y - min) / cellSize);
                    return _this.isDark(r, c)? 0 : 1;
                } else {
                    return 1;
                }
            } );
        };

        return _this;
    };

    //---------------------------------------------------------------------
    // qrcode.stringToBytes
    //---------------------------------------------------------------------

    qrcode.stringToBytes = function(s) {
        var bytes = new Array();
        for (var i = 0; i < s.length; i += 1) {
            var c = s.charCodeAt(i);
            bytes.push(c & 0xff);
        }
        return bytes;
    };

    //---------------------------------------------------------------------
    // qrcode.createStringToBytes
    //---------------------------------------------------------------------

    /**
     * @param unicodeData base64 string of byte array.
     * [16bit Unicode],[16bit Bytes], ...
     * @param numChars
     */
    qrcode.createStringToBytes = function(unicodeData, numChars) {

        // create conversion map.

        var unicodeMap = function() {

            var bin = base64DecodeInputStream(unicodeData);
            var read = function() {
                var b = bin.read();
                if (b == -1) throw new Error();
                return b;
            };

            var count = 0;
            var unicodeMap = {};
            while (true) {
                var b0 = bin.read();
                if (b0 == -1) break;
                var b1 = read();
                var b2 = read();
                var b3 = read();
                var k = String.fromCharCode( (b0 << 8) | b1);
                var v = (b2 << 8) | b3;
                unicodeMap[k] = v;
                count += 1;
            }
            if (count != numChars) {
                throw new Error(count + ' != ' + numChars);
            }

            return unicodeMap;
        }();

        var unknownChar = '?'.charCodeAt(0);

        return function(s) {
            var bytes = new Array();
            for (var i = 0; i < s.length; i += 1) {
                var c = s.charCodeAt(i);
                if (c < 128) {
                    bytes.push(c);
                } else {
                    var b = unicodeMap[s.charAt(i)];
                    if (typeof b == 'number') {
                        if ( (b & 0xff) == b) {
                            // 1byte
                            bytes.push(b);
                        } else {
                            // 2bytes
                            bytes.push(b >>> 8);
                            bytes.push(b & 0xff);
                        }
                    } else {
                        bytes.push(unknownChar);
                    }
                }
            }
            return bytes;
        };
    };

    //---------------------------------------------------------------------
    // QRMode
    //---------------------------------------------------------------------

    var QRMode = {
        MODE_NUMBER :       1 << 0,
        MODE_ALPHA_NUM :    1 << 1,
        MODE_8BIT_BYTE :    1 << 2,
        MODE_KANJI :        1 << 3
    };

    //---------------------------------------------------------------------
    // QRErrorCorrectLevel
    //---------------------------------------------------------------------

    var QRErrorCorrectLevel = {
        L : 1,
        M : 0,
        Q : 3,
        H : 2
    };

    //---------------------------------------------------------------------
    // QRMaskPattern
    //---------------------------------------------------------------------

    var QRMaskPattern = {
        PATTERN000 : 0,
        PATTERN001 : 1,
        PATTERN010 : 2,
        PATTERN011 : 3,
        PATTERN100 : 4,
        PATTERN101 : 5,
        PATTERN110 : 6,
        PATTERN111 : 7
    };

    //---------------------------------------------------------------------
    // QRUtil
    //---------------------------------------------------------------------

    var QRUtil = function() {

        var PATTERN_POSITION_TABLE = [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
        ];
        var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
        var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
        var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

        var _this = {};

        var getBCHDigit = function(data) {
            var digit = 0;
            while (data != 0) {
                digit += 1;
                data >>>= 1;
            }
            return digit;
        };

        _this.getBCHTypeInfo = function(data) {
            var d = data << 10;
            while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
                d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
            }
            return ( (data << 10) | d) ^ G15_MASK;
        };

        _this.getBCHTypeNumber = function(data) {
            var d = data << 12;
            while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
                d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
            }
            return (data << 12) | d;
        };

        _this.getPatternPosition = function(typeNumber) {
            return PATTERN_POSITION_TABLE[typeNumber - 1];
        };

        _this.getMaskFunction = function(maskPattern) {

            switch (maskPattern) {

            case QRMaskPattern.PATTERN000 :
                return function(i, j) { return (i + j) % 2 == 0; };
            case QRMaskPattern.PATTERN001 :
                return function(i, j) { return i % 2 == 0; };
            case QRMaskPattern.PATTERN010 :
                return function(i, j) { return j % 3 == 0; };
            case QRMaskPattern.PATTERN011 :
                return function(i, j) { return (i + j) % 3 == 0; };
            case QRMaskPattern.PATTERN100 :
                return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
            case QRMaskPattern.PATTERN101 :
                return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
            case QRMaskPattern.PATTERN110 :
                return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
            case QRMaskPattern.PATTERN111 :
                return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };

            default :
                throw new Error('bad maskPattern:' + maskPattern);
            }
        };

        _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
            var a = qrPolynomial([1], 0);
            for (var i = 0; i < errorCorrectLength; i += 1) {
                a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
            }
            return a;
        };

        _this.getLengthInBits = function(mode, type) {

            if (1 <= type && type < 10) {

                // 1 - 9

                switch(mode) {
                case QRMode.MODE_NUMBER     : return 10;
                case QRMode.MODE_ALPHA_NUM  : return 9;
                case QRMode.MODE_8BIT_BYTE  : return 8;
                case QRMode.MODE_KANJI      : return 8;
                default :
                    throw new Error('mode:' + mode);
                }

            } else if (type < 27) {

                // 10 - 26

                switch(mode) {
                case QRMode.MODE_NUMBER     : return 12;
                case QRMode.MODE_ALPHA_NUM  : return 11;
                case QRMode.MODE_8BIT_BYTE  : return 16;
                case QRMode.MODE_KANJI      : return 10;
                default :
                    throw new Error('mode:' + mode);
                }

            } else if (type < 41) {

                // 27 - 40

                switch(mode) {
                case QRMode.MODE_NUMBER     : return 14;
                case QRMode.MODE_ALPHA_NUM  : return 13;
                case QRMode.MODE_8BIT_BYTE  : return 16;
                case QRMode.MODE_KANJI      : return 12;
                default :
                    throw new Error('mode:' + mode);
                }

            } else {
                throw new Error('type:' + type);
            }
        };

        _this.getLostPoint = function(qrcode) {

            var moduleCount = qrcode.getModuleCount();

            var lostPoint = 0;

            // LEVEL1

            for (var row = 0; row < moduleCount; row += 1) {
                for (var col = 0; col < moduleCount; col += 1) {

                    var sameCount = 0;
                    var dark = qrcode.isDark(row, col);

                    for (var r = -1; r <= 1; r += 1) {

                        if (row + r < 0 || moduleCount <= row + r) {
                            continue;
                        }

                        for (var c = -1; c <= 1; c += 1) {

                            if (col + c < 0 || moduleCount <= col + c) {
                                continue;
                            }

                            if (r == 0 && c == 0) {
                                continue;
                            }

                            if (dark == qrcode.isDark(row + r, col + c) ) {
                                sameCount += 1;
                            }
                        }
                    }

                    if (sameCount > 5) {
                        lostPoint += (3 + sameCount - 5);
                    }
                }
            };

            // LEVEL2

            for (var row = 0; row < moduleCount - 1; row += 1) {
                for (var col = 0; col < moduleCount - 1; col += 1) {
                    var count = 0;
                    if (qrcode.isDark(row, col) ) count += 1;
                    if (qrcode.isDark(row + 1, col) ) count += 1;
                    if (qrcode.isDark(row, col + 1) ) count += 1;
                    if (qrcode.isDark(row + 1, col + 1) ) count += 1;
                    if (count == 0 || count == 4) {
                        lostPoint += 3;
                    }
                }
            }

            // LEVEL3

            for (var row = 0; row < moduleCount; row += 1) {
                for (var col = 0; col < moduleCount - 6; col += 1) {
                    if (qrcode.isDark(row, col)
                            && !qrcode.isDark(row, col + 1)
                            &&  qrcode.isDark(row, col + 2)
                            &&  qrcode.isDark(row, col + 3)
                            &&  qrcode.isDark(row, col + 4)
                            && !qrcode.isDark(row, col + 5)
                            &&  qrcode.isDark(row, col + 6) ) {
                        lostPoint += 40;
                    }
                }
            }

            for (var col = 0; col < moduleCount; col += 1) {
                for (var row = 0; row < moduleCount - 6; row += 1) {
                    if (qrcode.isDark(row, col)
                            && !qrcode.isDark(row + 1, col)
                            &&  qrcode.isDark(row + 2, col)
                            &&  qrcode.isDark(row + 3, col)
                            &&  qrcode.isDark(row + 4, col)
                            && !qrcode.isDark(row + 5, col)
                            &&  qrcode.isDark(row + 6, col) ) {
                        lostPoint += 40;
                    }
                }
            }

            // LEVEL4

            var darkCount = 0;

            for (var col = 0; col < moduleCount; col += 1) {
                for (var row = 0; row < moduleCount; row += 1) {
                    if (qrcode.isDark(row, col) ) {
                        darkCount += 1;
                    }
                }
            }

            var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
            lostPoint += ratio * 10;

            return lostPoint;
        };

        return _this;
    }();

    //---------------------------------------------------------------------
    // QRMath
    //---------------------------------------------------------------------

    var QRMath = function() {

        var EXP_TABLE = new Array(256);
        var LOG_TABLE = new Array(256);

        // initialize tables
        for (var i = 0; i < 8; i += 1) {
            EXP_TABLE[i] = 1 << i;
        }
        for (var i = 8; i < 256; i += 1) {
            EXP_TABLE[i] = EXP_TABLE[i - 4]
                ^ EXP_TABLE[i - 5]
                ^ EXP_TABLE[i - 6]
                ^ EXP_TABLE[i - 8];
        }
        for (var i = 0; i < 255; i += 1) {
            LOG_TABLE[EXP_TABLE[i] ] = i;
        }

        var _this = {};

        _this.glog = function(n) {

            if (n < 1) {
                throw new Error('glog(' + n + ')');
            }

            return LOG_TABLE[n];
        };

        _this.gexp = function(n) {

            while (n < 0) {
                n += 255;
            }

            while (n >= 256) {
                n -= 255;
            }

            return EXP_TABLE[n];
        };

        return _this;
    }();

    //---------------------------------------------------------------------
    // qrPolynomial
    //---------------------------------------------------------------------

    function qrPolynomial(num, shift) {

        if (typeof num.length == 'undefined') {
            throw new Error(num.length + '/' + shift);
        }

        var _num = function() {
            var offset = 0;
            while (offset < num.length && num[offset] == 0) {
                offset += 1;
            }
            var _num = new Array(num.length - offset + shift);
            for (var i = 0; i < num.length - offset; i += 1) {
                _num[i] = num[i + offset];
            }
            return _num;
        }();

        var _this = {};

        _this.get = function(index) {
            return _num[index];
        };

        _this.getLength = function() {
            return _num.length;
        };

        _this.multiply = function(e) {

            var num = new Array(_this.getLength() + e.getLength() - 1);

            for (var i = 0; i < _this.getLength(); i += 1) {
                for (var j = 0; j < e.getLength(); j += 1) {
                    num[i + j] ^= QRMath.gexp(QRMath.glog(_this.get(i) ) + QRMath.glog(e.get(j) ) );
                }
            }

            return qrPolynomial(num, 0);
        };

        _this.mod = function(e) {

            if (_this.getLength() - e.getLength() < 0) {
                return _this;
            }

            var ratio = QRMath.glog(_this.get(0) ) - QRMath.glog(e.get(0) );

            var num = new Array(_this.getLength() );
            for (var i = 0; i < _this.getLength(); i += 1) {
                num[i] = _this.get(i);
            }

            for (var i = 0; i < e.getLength(); i += 1) {
                num[i] ^= QRMath.gexp(QRMath.glog(e.get(i) ) + ratio);
            }

            // recursive call
            return qrPolynomial(num, 0).mod(e);
        };

        return _this;
    };

    //---------------------------------------------------------------------
    // QRRSBlock
    //---------------------------------------------------------------------

    var QRRSBlock = function() {

        var RS_BLOCK_TABLE = [

            // L
            // M
            // Q
            // H

            // 1
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],

            // 2
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],

            // 3
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],

            // 4
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],

            // 5
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],

            // 6
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],

            // 7
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],

            // 8
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],

            // 9
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],

            // 10
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],

            // 11
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],

            // 12
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],

            // 13
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],

            // 14
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],

            // 15
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12],

            // 16
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],

            // 17
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],

            // 18
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],

            // 19
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],

            // 20
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],

            // 21
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],

            // 22
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],

            // 23
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],

            // 24
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],

            // 25
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],

            // 26
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],

            // 27
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],

            // 28
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],

            // 29
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],

            // 30
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],

            // 31
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],

            // 32
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],

            // 33
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],

            // 34
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],

            // 35
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],

            // 36
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],

            // 37
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],

            // 38
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],

            // 39
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],

            // 40
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16]
        ];

        var qrRSBlock = function(totalCount, dataCount) {
            var _this = {};
            _this.totalCount = totalCount;
            _this.dataCount = dataCount;
            return _this;
        };

        var _this = {};

        var getRsBlockTable = function(typeNumber, errorCorrectLevel) {

            switch(errorCorrectLevel) {
            case QRErrorCorrectLevel.L :
                return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
            case QRErrorCorrectLevel.M :
                return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
            case QRErrorCorrectLevel.Q :
                return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
            case QRErrorCorrectLevel.H :
                return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
            default :
                return undefined;
            }
        };

        _this.getRSBlocks = function(typeNumber, errorCorrectLevel) {

            var rsBlock = getRsBlockTable(typeNumber, errorCorrectLevel);

            if (typeof rsBlock == 'undefined') {
                throw new Error('bad rs block @ typeNumber:' + typeNumber +
                        '/errorCorrectLevel:' + errorCorrectLevel);
            }

            var length = rsBlock.length / 3;

            var list = new Array();

            for (var i = 0; i < length; i += 1) {

                var count = rsBlock[i * 3 + 0];
                var totalCount = rsBlock[i * 3 + 1];
                var dataCount = rsBlock[i * 3 + 2];

                for (var j = 0; j < count; j += 1) {
                    list.push(qrRSBlock(totalCount, dataCount) );
                }
            }

            return list;
        };

        return _this;
    }();

    //---------------------------------------------------------------------
    // qrBitBuffer
    //---------------------------------------------------------------------

    var qrBitBuffer = function() {

        var _buffer = new Array();
        var _length = 0;

        var _this = {};

        _this.getBuffer = function() {
            return _buffer;
        };

        _this.get = function(index) {
            var bufIndex = Math.floor(index / 8);
            return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
        };

        _this.put = function(num, length) {
            for (var i = 0; i < length; i += 1) {
                _this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
            }
        };

        _this.getLengthInBits = function() {
            return _length;
        };

        _this.putBit = function(bit) {

            var bufIndex = Math.floor(_length / 8);
            if (_buffer.length <= bufIndex) {
                _buffer.push(0);
            }

            if (bit) {
                _buffer[bufIndex] |= (0x80 >>> (_length % 8) );
            }

            _length += 1;
        };

        return _this;
    };

    //---------------------------------------------------------------------
    // qr8BitByte
    //---------------------------------------------------------------------

    var qr8BitByte = function(data) {

        var _mode = QRMode.MODE_8BIT_BYTE;
        var _data = data;
        var _bytes = qrcode.stringToBytes(data);

        var _this = {};

        _this.getMode = function() {
            return _mode;
        };

        _this.getLength = function(buffer) {
            return _bytes.length;
        };

        _this.write = function(buffer) {
            for (var i = 0; i < _bytes.length; i += 1) {
                buffer.put(_bytes[i], 8);
            }
        };

        return _this;
    };

    //=====================================================================
    // GIF Support etc.
    //

    //---------------------------------------------------------------------
    // byteArrayOutputStream
    //---------------------------------------------------------------------

    var byteArrayOutputStream = function() {

        var _bytes = new Array();

        var _this = {};

        _this.writeByte = function(b) {
            _bytes.push(b & 0xff);
        };

        _this.writeShort = function(i) {
            _this.writeByte(i);
            _this.writeByte(i >>> 8);
        };

        _this.writeBytes = function(b, off, len) {
            off = off || 0;
            len = len || b.length;
            for (var i = 0; i < len; i += 1) {
                _this.writeByte(b[i + off]);
            }
        };

        _this.writeString = function(s) {
            for (var i = 0; i < s.length; i += 1) {
                _this.writeByte(s.charCodeAt(i) );
            }
        };

        _this.toByteArray = function() {
            return _bytes;
        };

        _this.toString = function() {
            var s = '';
            s += '[';
            for (var i = 0; i < _bytes.length; i += 1) {
                if (i > 0) {
                    s += ',';
                }
                s += _bytes[i];
            }
            s += ']';
            return s;
        };

        return _this;
    };

    //---------------------------------------------------------------------
    // base64EncodeOutputStream
    //---------------------------------------------------------------------

    var base64EncodeOutputStream = function() {

        var _buffer = 0;
        var _buflen = 0;
        var _length = 0;
        var _base64 = '';

        var _this = {};

        var writeEncoded = function(b) {
            _base64 += String.fromCharCode(encode(b & 0x3f) );
        };

        var encode = function(n) {
            if (n < 0) {
                // error.
            } else if (n < 26) {
                return 0x41 + n;
            } else if (n < 52) {
                return 0x61 + (n - 26);
            } else if (n < 62) {
                return 0x30 + (n - 52);
            } else if (n == 62) {
                return 0x2b;
            } else if (n == 63) {
                return 0x2f;
            }
            throw new Error('n:' + n);
        };

        _this.writeByte = function(n) {

            _buffer = (_buffer << 8) | (n & 0xff);
            _buflen += 8;
            _length += 1;

            while (_buflen >= 6) {
                writeEncoded(_buffer >>> (_buflen - 6) );
                _buflen -= 6;
            }
        };

        _this.flush = function() {

            if (_buflen > 0) {
                writeEncoded(_buffer << (6 - _buflen) );
                _buffer = 0;
                _buflen = 0;
            }

            if (_length % 3 != 0) {
                // padding
                var padlen = 3 - _length % 3;
                for (var i = 0; i < padlen; i += 1) {
                    _base64 += '=';
                }
            }
        };

        _this.toString = function() {
            return _base64;
        };

        return _this;
    };

    //---------------------------------------------------------------------
    // base64DecodeInputStream
    //---------------------------------------------------------------------

    var base64DecodeInputStream = function(str) {

        var _str = str;
        var _pos = 0;
        var _buffer = 0;
        var _buflen = 0;

        var _this = {};

        _this.read = function() {

            while (_buflen < 8) {

                if (_pos >= _str.length) {
                    if (_buflen == 0) {
                        return -1;
                    }
                    throw new Error('unexpected end of file./' + _buflen);
                }

                var c = _str.charAt(_pos);
                _pos += 1;

                if (c == '=') {
                    _buflen = 0;
                    return -1;
                } else if (c.match(/^\s$/) ) {
                    // ignore if whitespace.
                    continue;
                }

                _buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
                _buflen += 6;
            }

            var n = (_buffer >>> (_buflen - 8) ) & 0xff;
            _buflen -= 8;
            return n;
        };

        var decode = function(c) {
            if (0x41 <= c && c <= 0x5a) {
                return c - 0x41;
            } else if (0x61 <= c && c <= 0x7a) {
                return c - 0x61 + 26;
            } else if (0x30 <= c && c <= 0x39) {
                return c - 0x30 + 52;
            } else if (c == 0x2b) {
                return 62;
            } else if (c == 0x2f) {
                return 63;
            } else {
                throw new Error('c:' + c);
            }
        };

        return _this;
    };

    //---------------------------------------------------------------------
    // gifImage (B/W)
    //---------------------------------------------------------------------

    var gifImage = function(width, height) {

        var _width = width;
        var _height = height;
        var _data = new Array(width * height);

        var _this = {};

        _this.setPixel = function(x, y, pixel) {
            _data[y * _width + x] = pixel;
        };

        _this.write = function(out) {

            //---------------------------------
            // GIF Signature

            out.writeString('GIF87a');

            //---------------------------------
            // Screen Descriptor

            out.writeShort(_width);
            out.writeShort(_height);

            out.writeByte(0x80); // 2bit
            out.writeByte(0);
            out.writeByte(0);

            //---------------------------------
            // Global Color Map

            // black
            out.writeByte(0x00);
            out.writeByte(0x00);
            out.writeByte(0x00);

            // white
            out.writeByte(0xff);
            out.writeByte(0xff);
            out.writeByte(0xff);

            //---------------------------------
            // Image Descriptor

            out.writeString(',');
            out.writeShort(0);
            out.writeShort(0);
            out.writeShort(_width);
            out.writeShort(_height);
            out.writeByte(0);

            //---------------------------------
            // Local Color Map

            //---------------------------------
            // Raster Data

            var lzwMinCodeSize = 2;
            var raster = getLZWRaster(lzwMinCodeSize);

            out.writeByte(lzwMinCodeSize);

            var offset = 0;

            while (raster.length - offset > 255) {
                out.writeByte(255);
                out.writeBytes(raster, offset, 255);
                offset += 255;
            }

            out.writeByte(raster.length - offset);
            out.writeBytes(raster, offset, raster.length - offset);
            out.writeByte(0x00);

            //---------------------------------
            // GIF Terminator
            out.writeString(';');
        };

        var bitOutputStream = function(out) {

            var _out = out;
            var _bitLength = 0;
            var _bitBuffer = 0;

            var _this = {};

            _this.write = function(data, length) {

                if ( (data >>> length) != 0) {
                    throw new Error('length over');
                }

                while (_bitLength + length >= 8) {
                    _out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
                    length -= (8 - _bitLength);
                    data >>>= (8 - _bitLength);
                    _bitBuffer = 0;
                    _bitLength = 0;
                }

                _bitBuffer = (data << _bitLength) | _bitBuffer;
                _bitLength = _bitLength + length;
            };

            _this.flush = function() {
                if (_bitLength > 0) {
                    _out.writeByte(_bitBuffer);
                }
            };

            return _this;
        };

        var getLZWRaster = function(lzwMinCodeSize) {

            var clearCode = 1 << lzwMinCodeSize;
            var endCode = (1 << lzwMinCodeSize) + 1;
            var bitLength = lzwMinCodeSize + 1;

            // Setup LZWTable
            var table = lzwTable();

            for (var i = 0; i < clearCode; i += 1) {
                table.add(String.fromCharCode(i) );
            }
            table.add(String.fromCharCode(clearCode) );
            table.add(String.fromCharCode(endCode) );

            var byteOut = byteArrayOutputStream();
            var bitOut = bitOutputStream(byteOut);

            // clear code
            bitOut.write(clearCode, bitLength);

            var dataIndex = 0;

            var s = String.fromCharCode(_data[dataIndex]);
            dataIndex += 1;

            while (dataIndex < _data.length) {

                var c = String.fromCharCode(_data[dataIndex]);
                dataIndex += 1;

                if (table.contains(s + c) ) {

                    s = s + c;

                } else {

                    bitOut.write(table.indexOf(s), bitLength);

                    if (table.size() < 0xfff) {

                        if (table.size() == (1 << bitLength) ) {
                            bitLength += 1;
                        }

                        table.add(s + c);
                    }

                    s = c;
                }
            }

            bitOut.write(table.indexOf(s), bitLength);

            // end code
            bitOut.write(endCode, bitLength);

            bitOut.flush();

            return byteOut.toByteArray();
        };

        var lzwTable = function() {

            var _map = {};
            var _size = 0;

            var _this = {};

            _this.add = function(key) {
                if (_this.contains(key) ) {
                    throw new Error('dup key:' + key);
                }
                _map[key] = _size;
                _size += 1;
            };

            _this.size = function() {
                return _size;
            };

            _this.indexOf = function(key) {
                return _map[key];
            };

            _this.contains = function(key) {
                return typeof _map[key] != 'undefined';
            };

            return _this;
        };

        return _this;
    };

    var createImgTag = function(width, height, getPixel, alt) {

        var gif = gifImage(width, height);
        for (var y = 0; y < height; y += 1) {
            for (var x = 0; x < width; x += 1) {
                gif.setPixel(x, y, getPixel(x, y) );
            }
        }

        var b = byteArrayOutputStream();
        gif.write(b);

        var base64 = base64EncodeOutputStream();
        var bytes = b.toByteArray();
        for (var i = 0; i < bytes.length; i += 1) {
            base64.writeByte(bytes[i]);
        }
        base64.flush();

        var img = '';
        img += '<img';
        img += '\u0020src="';
        img += 'data:image/gif;base64,';
        img += base64;
        img += '"';
        img += '\u0020width="';
        img += width;
        img += '"';
        img += '\u0020height="';
        img += height;
        img += '"';
        if (alt) {
            img += '\u0020alt="';
            img += alt;
            img += '"';
        }
        img += '/>';

        return img;
    };

    //---------------------------------------------------------------------
    // returns qrcode function.

    return qrcode;
}();


}());
;
/**
 * @fileoverview Any event binding functions.
 *  
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */

/**
 * Bind the events to the proper font switching buttons for web accessibility. 
 * 
 */
pqr.bindevents.bindFontSwitchers = function() {
	var increaseButtonSelector = "#increasefont";
	var decreaseButtonSelector = "#reducefont";
	var resetButtonSelector = "#defaultfont";

	$(increaseButtonSelector).on("click", function(event) {
		event.preventDefault();
		pqr.htmlUtilities.updateFont(1);
	});

	$(decreaseButtonSelector).on("click", function(event) {
		event.preventDefault();
		pqr.htmlUtilities.updateFont(-1);
	});

	$(resetButtonSelector).on("click", function(event) {
		event.preventDefault();
		pqr.htmlUtilities.updateFont(0);
	});
};


/**
 * Reset the zoom level of the viewer
 *
 * @param  {String} selector an html selector to bind the reset button
 */
pqr.bindevents.moleculeReset = function(selector) {
	if ($(selector).length) {
		$(selector).on("click", function(event) {
			event.preventDefault();
			pqr.threeDMole.resetView();
			htmlutilities.bootstrapFeedback("Molecule viewer reset", "feedback", "fa-crosshairs");
		});
	}
};

/**
 * Toggle rotation of the current viewer
 *
 * @param  {String} selector an html selector to bind to a toggle rotation button
 */
pqr.bindevents.moleculeToggleRotation = function(selector) {
	if ($(selector).length) {
		$(selector).on("click", function(event) {
			event.preventDefault();
			pqr.threeDMole.toggleRotation();
			var toggle = $(this).children();

			if (toggle.hasClass('fa-toggle-on')) {
				toggle.removeClass('fa-toggle-on');
				toggle.addClass('fa-toggle-off');
				htmlutilities.bootstrapFeedback("Rotation deactivated", "feedback", "fa-refresh");
			} else {
				toggle.removeClass('fa-toggle-off');
				toggle.addClass('fa-toggle-on');
				htmlutilities.bootstrapFeedback("Rotation activated", "feedback", "fa-refresh");
			}
		});
	}
};

/**
 *	Handle the clickng of detailed and simple layouts and update
 * 	the local storate to reflect the changes. 
 * 	
 */
pqr.bindevents.propertiesViewerHandler = function() {
	$("#simpleView").on("click", function(event) {
		event.preventDefault();
		$("#molecule-details table .detailed").addClass("hidden");
		if (pqr.features.localstorage) localStorage.setItem("moleculeLayout", "simple");
			htmlutilities.bootstrapFeedback("Switched to simple view", "feedback", "fa-desktop");
	});

	$("#detailedView").on("click", function(event) {
		event.preventDefault();
		$("#molecule-details table .detailed").removeClass("hidden");
		if (pqr.features.localstorage) localStorage.setItem("moleculeLayout", "detailed");
			htmlutilities.bootstrapFeedback("Switched to detailed view ", "feedback", "fa-desktop");
	});
};


/**
 * Binds the buttons to change the style of the molecule beeweten spheres, lines or crosses. 
 * 
 */
pqr.bindevents.moleculeStyleChanger = function() {

	if ($('#changeStyleSphere').length) {
		$('#changeStyleSphere').on("click", function(event) {
			event.preventDefault();
			pqr.threeDMole.changeStyle("sphere");
			// if (pqr.features.localstorage) localStorage.setItem("moleculeViewerlayout", "spheres");
			htmlutilities.bootstrapFeedback("Switched to sphere display ", "feedback", "fa-desktop");
		});
	}


	if ($('#changeStyleLine').length) {
		$('#changeStyleLine').on("click", function(event) {
			event.preventDefault();
			pqr.threeDMole.changeStyle("line");
			// if (pqr.features.localstorage) localStorage.setItem("moleculeViewerlayout", "lines");
			htmlutilities.bootstrapFeedback("Switched to line display ", "feedback", "fa-desktop");
		});
	}

	if ($('#changeStyleCross').length) {
		$('#changeStyleCross').on("click", function(event) {
			event.preventDefault();
			pqr.threeDMole.changeStyle("cross");
			// if (pqr.features.localstorage) localStorage.setItem("moleculeViewerlayout", "crosses");
			htmlutilities.bootstrapFeedback("Switched to cross display ", "feedback", "fa-desktop");
		});
	}

	if ($('#changeStyleStick').length) {
		$('#changeStyleStick').on("click", function(event) {
			event.preventDefault();
			pqr.threeDMole.changeStyle("stick");
			// if (pqr.features.localstorage) localStorage.setItem("moleculeViewerlayout", "sticks");
			htmlutilities.bootstrapFeedback("Switched to stick display ", "feedback", "fa-desktop");
		});
	}
};

/**
 * Deactive the surface of the viewer.
 *
 * @param  {String} selector an html selector to bind to a toggle surface button
 */
pqr.bindevents.moleculeToggleSurface = function(selector) {
	if ($(selector).length) {
		$(selector).on("click", function(event) {
			event.preventDefault();
			pqr.threeDMole.toggleSurface();
			$(this).addClass('disabled btn-success');
			$(this).removeClass('btn-danger');
			$(this).html('Surface Removed');
			htmlutilities.bootstrapFeedback("Surface removed. Reload to add surface ", "feedback", "fa-desktop");
		});
	}
};;
/**
 * @fileoverview Initialize the app on document ready. Should be the last file. 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */

/**
 * Initialize the app on document ready
 *  
 */
pqr.init = function() {
	$(document).ready(function() {
		if(pqr.debug) console.log("Loading PQR Web App....");  

		//All page initializer 
		pqr.checkFeatures(); 
		bootstrapUtilities.FullToolTipOptIn();
		pqr.htmlUtilities.initFontSize(); 
		pqr.bindevents.bindFontSwitchers();

		if ($("#main").hasClass("page-home")) {
			pqr.threeDMole.initViewers();
			pqr.bindevents.moleculeReset('#reset-molecule');
			pqr.bindevents.moleculeToggleRotation('#rotationSwitch');
		}


		if ($("#main").hasClass("page-molecule")) {
			pqr.threeDMole.initViewers();
			pqr.htmlUtilities.updatePropertiesViewer();
			pqr.htmlUtilities.initQuickFit("#molecule-name", {min: 12, max:36}); 

			pqr.bindevents.propertiesViewerHandler();
			pqr.bindevents.moleculeStyleChanger();
			pqr.bindevents.moleculeReset('#reset-molecule');
			pqr.bindevents.moleculeToggleRotation('#rotationSwitch');
			pqr.bindevents.moleculeToggleSurface('#surfaceSwitch');
			pqr.qrgen.addQRCode("#qrcode", pqr.htmlUtilities.getINCHIKey());
			pqr.qrgen.addQRCode("#qr-print-wrapper", pqr.htmlUtilities.getINCHIKey());

		}

		if(pqr.debug) console.log("Finished loading PQR Web App!"); 
	});
}();
;
/**
 * @fileoverview QR code related functions  
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */

pqr.qrgen = { //Config
    element: null,
    default_options: {
        render: 'image',
        minVersion: 1,
        maxVersion: 5,
        ecLevel: 'M',
        fill: '#000',
        mode: 2, //Show the label 
        label: 'PQR',
        fontname: '"Source Sans Pro","Helvetica Neue",Helvetica, Arial,sans-serif',
        fontcolor: '#f16b1d' //Primary Orange Color
    }
};

/**
 * Add a QR code to a html element with a jquery selector
 * @param {String} selector The selector the element to place the generated QR Code
 * @param {String} url      The end of the URL to send to
 */
pqr.qrgen.addQRCode = function(selector, url) {
    var baseURL = htmlutilities.getRootURL();

    if ($(selector).length) {
        this.default_options.text = baseURL + "/mol/" + url;
        $(selector).qrcode(this.default_options);
    } else {
        console.log("Couldn't find the selector", selector);
    }
};;
/**
 * @fileoverview PQR related 3Dmol manipulations
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */

pqr.threeDMole = {
	all_viewers: [],
	rotation_timers: [],
	data_type: 'mol2',
	default_style: 'stick',
	backgroundColor: 0xffffff,
	backgroundOpacity: 1.0,
	rotationTime: 9,
	rotationXDegree: 1, //How many degrees to move every rotationTime
	rotationYDegree: 1,
	showSurface: true
};

/**
 * Update viewers
 *
 * @param  {Object} config optional config to override default settings
 */
pqr.threeDMole.initViewers = function(config) {
	this.all_viewers = $3Dmol.viewers;

	$.each(this.all_viewers, function(index, viewer) {
		pqr.threeDMole.clearBackgrounds(viewer);
		// pqr.threeDMole.rotate(viewer);
	});
};


/**
 * Set all of the background color alpha channel to 0. Cannot be done
 * with data attributes.
 *
 * @param  {GLviewer}
 */
pqr.threeDMole.clearBackgrounds = function(viewer) {
	viewer.setBackgroundColor(this.backgroundColor, 0);
	viewer.resize();
	viewer.render();

	if (pqr.debug) console.log("Clearing Background: ", viewer);
};

/**
 * Rotate a molecule viewer
 *
 * @param  {GLViewer}
 */
pqr.threeDMole.rotate = function(viewer) {
	var rotation_timers = window.setInterval(function() {
		viewer.rotate(pqr.threeDMole.rotationYDegree, 'y');
		viewer.rotate(pqr.threeDMole.rotationXDegree, 'x');
		viewer.render();
	}, this.rotationTime, viewer);

	this.rotation_timers.push(rotation_timers);

	if (pqr.debug) console.log("Adding Rotation: ", viewer);
};

/**
 * Toggle the rotation of the viewer. Only hanldes one viewer.
 *
 * @param  {GLViewer} the viewer to toggle the rotation
 */
pqr.threeDMole.toggleRotation = function(viewer) {
	var rotation_timer = this.rotation_timers.pop();
	if (pqr.debug) console.log("The rotation time is: ", rotation_timer);
	if (rotation_timer !== undefined) {
		if (pqr.debug) console.log("Rotation timer not null. Clearing interval");
		clearInterval(rotation_timer);
	} else {
		if (pqr.debug) console.log("Rotation timer is null. Restarting rotation");
		this.rotate(this.all_viewers[0]);
	}
};

/**
 * Update the surface color to the correct value 
 * 
 * @param  {GLViewer} the viewer to set the surfaceColor on 
 */
pqr.threeDMole.setSurfaceColor = function(viewer) {

};

/**
 * Toggle the surface of this viewer.
 *
 * @param  {GLViewer}
 */
pqr.threeDMole.toggleSurface = function(viewer) {
	viewer = typeof viewer !== 'undefined' ? viewer : this.all_viewers[0];

	if (pqr.debug) console.log("Toggling the surface of ", viewer);

	this.removeSurface(viewer);
};

/**
 * Remove all of the surfaces for this viewere
 *
 * @param  {GLViewer}
 */
pqr.threeDMole.removeSurface = function(viewer) {
	viewer.removeAllSurfaces();
	viewer.render();
	if (pqr.debug) console.log("Surface Removed");
};

/**
 * Reset the viewer to the default zoom level
 *
 * @param  {GLViewer}
 */
pqr.threeDMole.resetView = function(viewer) {
	pqr.threeDMole.all_viewers[0].zoomTo();
};


/**
 * Change the layout style of the selected viewer
 *
 * @param  {String} newStyle - the type of style to change this viewer to
 */
pqr.threeDMole.changeStyle = function(newStyle) {
	var viewer = this.all_viewers[0]; //Currently only getting the first viewer that exists 
	if (viewer) {
		if (newStyle == "sphere") {
			viewer.setStyle({}, {
				sphere: {}
			});
		} else if (newStyle == "stick") {
			viewer.setStyle({}, {
				stick: {}
			});
		} else if (newStyle == "cross") {
			viewer.setStyle({}, {
				cross: {}
			});
		} else if (newStyle == "line") {
			viewer.setStyle({}, {
				line: {}
			});
		}

		viewer.render();
	}
};;
/**
 * @fileoverview PQR related misc JS functions 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */
pqr.htmlUtilities = {};

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
	return $.trim(key)
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
};;
/**
 * bootstrap-notify.js v1.0
 * --
  * Copyright 2012 Goodybag, Inc.
 * --
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function ($) {
  var Notification = function (element, options) {
    // Element collection
    this.$element = $(element);
    this.$note    = $('<div class="alert"></div>');
    this.options  = $.extend(true, {}, $.fn.notify.defaults, options);

    // Setup from options
    if(this.options.transition) {
      if(this.options.transition == 'fade')
        this.$note.addClass('in').addClass(this.options.transition);
      else
        this.$note.addClass(this.options.transition);
    } else
      this.$note.addClass('fade').addClass('in');

    if(this.options.type)
      this.$note.addClass('alert-' + this.options.type);
    else
      this.$note.addClass('alert-success');

    if(!this.options.message && this.$element.data("message") !== '') // dom text
      this.$note.html(this.$element.data("message"));
    else
      if(typeof this.options.message === 'object') {
        if(this.options.message.html)
          this.$note.html(this.options.message.html);
        else if(this.options.message.text)
          this.$note.text(this.options.message.text);
      } else
        this.$note.html(this.options.message);

    if(this.options.closable) {
      var link = $('<a class="close pull-right" href="#"><i class="fa fa-times"></i></a>');
      $(link).on('click', $.proxy(onClose, this));
      this.$note.prepend(link);
    }

    return this;
  };

  var onClose = function() {
    this.options.onClose();
    $(this.$note).remove();
    this.options.onClosed();
    return false;
  };

  Notification.prototype.show = function () {
    if(this.options.fadeOut.enabled)
      this.$note.delay(this.options.fadeOut.delay || 3000).fadeOut('slow', $.proxy(onClose, this));

    this.$element.append(this.$note);
    this.$note.alert();
  };

  Notification.prototype.hide = function () {
    if(this.options.fadeOut.enabled)
      this.$note.delay(this.options.fadeOut.delay || 3000).fadeOut('slow', $.proxy(onClose, this));
    else onClose.call(this);
  };

  $.fn.notify = function (options) {
    return new Notification(this, options);
  };

  $.fn.notify.defaults = {
    type: 'success',
    closable: true,
    transition: 'fade',
    fadeOut: {
      enabled: true,
      delay: 3000
    },
    message: null,
    onClose: function () {},
    onClosed: function () {}
  }
})(window.jQuery);