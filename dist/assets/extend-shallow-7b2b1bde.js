/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var i=function(n){return typeof n<"u"&&n!==null&&(typeof n=="object"||typeof n=="function")},f=i,s=function(n){f(n)||(n={});for(var t=arguments.length,r=1;r<t;r++){var a=arguments[r];f(a)&&o(n,a)}return n};function o(e,n){for(var t in n)u(n,t)&&(e[t]=n[t])}function u(e,n){return Object.prototype.hasOwnProperty.call(e,n)}export{s as e};
//# sourceMappingURL=extend-shallow-7b2b1bde.js.map
