function h(i,c,n,u){function t(e){return e instanceof n?e:new n(function(a){a(e)})}return new(n||(n=Promise))(function(e,a){function f(l){try{r(u.next(l))}catch(s){a(s)}}function o(l){try{r(u.throw(l))}catch(s){a(s)}}function r(l){l.done?e(l.value):t(l.value).then(f,o)}r((u=u.apply(i,c||[])).next())})}function d(i,c){var n={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},u,t,e,a;return a={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function f(r){return function(l){return o([r,l])}}function o(r){if(u)throw new TypeError("Generator is already executing.");for(;a&&(a=0,r[0]&&(n=0)),n;)try{if(u=1,t&&(e=r[0]&2?t.return:r[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,r[1])).done)return e;switch(t=0,e&&(r=[r[0]&2,e.value]),r[0]){case 0:case 1:e=r;break;case 4:return n.label++,{value:r[1],done:!1};case 5:n.label++,t=r[1],r=[0];continue;case 7:r=n.ops.pop(),n.trys.pop();continue;default:if(e=n.trys,!(e=e.length>0&&e[e.length-1])&&(r[0]===6||r[0]===2)){n=0;continue}if(r[0]===3&&(!e||r[1]>e[0]&&r[1]<e[3])){n.label=r[1];break}if(r[0]===6&&n.label<e[1]){n.label=e[1],e=r;break}if(e&&n.label<e[2]){n.label=e[2],n.ops.push(r);break}e[2]&&n.ops.pop(),n.trys.pop();continue}r=c.call(i,n)}catch(l){r=[6,l],t=0}finally{u=e=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}}function y(i,c){var n=typeof Symbol=="function"&&i[Symbol.iterator];if(!n)return i;var u=n.call(i),t,e=[],a;try{for(;(c===void 0||c-- >0)&&!(t=u.next()).done;)e.push(t.value)}catch(f){a={error:f}}finally{try{t&&!t.done&&(n=u.return)&&n.call(u)}finally{if(a)throw a.error}}return e}function b(){for(var i=[],c=0;c<arguments.length;c++)i=i.concat(y(arguments[c]));return i}export{h as _,d as a,b};
//# sourceMappingURL=tslib-bba439c1.js.map