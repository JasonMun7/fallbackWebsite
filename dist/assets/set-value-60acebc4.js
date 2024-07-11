import{s as c}from"./split-string-3256e5f1.js";import{e as l}from"./extend-shallow-7b2b1bde.js";import{i as d}from"./is-plain-object-0bb0a31c.js";/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var p=function(r){return typeof r<"u"&&r!==null&&(typeof r=="object"||typeof r=="function")};/*!
 * set-value <https://github.com/jonschlinkert/set-value>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */var m=c,v=l,o=d,u=p,h=function(t,r,n){if(!u(t)||(Array.isArray(r)&&(r=[].concat.apply([],r).join(".")),typeof r!="string"))return t;for(var s=m(r,{sep:".",brackets:!0}).filter(x),f=s.length,a=-1,i=t;++a<f;){var e=s[a];if(a!==f-1){u(i[e])||(i[e]={}),i=i[e];continue}o(i[e])&&o(n)?i[e]=v({},i[e],n):i[e]=n}return t};function x(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"}export{h as s};
//# sourceMappingURL=set-value-60acebc4.js.map
