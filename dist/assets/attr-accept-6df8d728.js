var v=function(a,t){if(a&&t){var n=Array.isArray(t)?t:t.split(","),o=a.name||"",e=(a.type||"").toLowerCase(),u=e.replace(/\/.*$/,"");return n.some(function(s){var r=s.trim().toLowerCase();return r.charAt(0)==="."?o.toLowerCase().endsWith(r):r.endsWith("/*")?u===r.replace(/\/.*$/,""):e===r})}return!0};export{v as _};
//# sourceMappingURL=attr-accept-6df8d728.js.map
