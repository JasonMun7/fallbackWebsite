var t=Uint8Array,k=Uint16Array,P=Uint32Array,L=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),d=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),lr=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),rr=function(r,a){for(var e=new k(31),i=0;i<31;++i)e[i]=a+=1<<r[i-1];for(var v=new P(e[30]),i=1;i<30;++i)for(var l=e[i];l<e[i+1];++l)v[l]=l-e[i]<<5|i;return[e,v]},er=rr(L,2),ar=er[0],wr=er[1];ar[28]=258,wr[258]=28;var tr=rr(d,0),ur=tr[0],Q=new k(32768);for(var f=0;f<32768;++f){var A=(f&43690)>>>1|(f&21845)<<1;A=(A&52428)>>>2|(A&13107)<<2,A=(A&61680)>>>4|(A&3855)<<4,Q[f]=((A&65280)>>>8|(A&255)<<8)>>>1}var U=function(r,a,e){for(var i=r.length,v=0,l=new k(a);v<i;++v)++l[r[v]-1];var g=new k(a);for(v=0;v<a;++v)g[v]=g[v-1]+l[v-1]<<1;var F;if(e){F=new k(1<<a);var n=15-a;for(v=0;v<i;++v)if(r[v])for(var o=v<<4|r[v],h=a-r[v],x=g[r[v]-1]++<<h,b=x|(1<<h)-1;x<=b;++x)F[Q[x]>>>n]=o}else for(F=new k(i),v=0;v<i;++v)r[v]&&(F[v]=Q[g[r[v]-1]++]>>>15-r[v]);return F},D=new t(288);for(var f=0;f<144;++f)D[f]=8;for(var f=144;f<256;++f)D[f]=9;for(var f=256;f<280;++f)D[f]=7;for(var f=280;f<288;++f)D[f]=8;var nr=new t(32);for(var f=0;f<32;++f)nr[f]=5;var hr=U(D,9,1),cr=U(nr,5,1),K=function(r){for(var a=r[0],e=1;e<r.length;++e)r[e]>a&&(a=r[e]);return a},u=function(r,a,e){var i=a/8|0;return(r[i]|r[i+1]<<8)>>(a&7)&e},N=function(r,a){var e=a/8|0;return(r[e]|r[e+1]<<8|r[e+2]<<16)>>(a&7)},Fr=function(r){return(r/8|0)+(r&7&&1)},xr=function(r,a,e){(a==null||a<0)&&(a=0),(e==null||e>r.length)&&(e=r.length);var i=new(r instanceof k?k:r instanceof P?P:t)(e-a);return i.set(r.subarray(a,e)),i},gr=function(r,a,e){var i=r.length;if(!i||e&&!e.l&&i<5)return a||new t(0);var v=!a||e,l=!e||e.i;e||(e={}),a||(a=new t(i*3));var g=function(m){var j=a.length;if(m>j){var s=new t(Math.max(j*2,m));s.set(a),a=s}},F=e.f||0,n=e.p||0,o=e.b||0,h=e.l,x=e.d,b=e.m,E=e.n,S=i*8;do{if(!h){e.f=F=u(r,n,1);var T=u(r,n+1,3);if(n+=3,T)if(T==1)h=hr,x=cr,b=9,E=5;else if(T==2){var q=u(r,n,31)+257,R=u(r,n+10,15)+4,V=q+u(r,n+5,31)+1;n+=14;for(var O=new t(V),G=new t(19),w=0;w<R;++w)G[lr[w]]=u(r,n+w*3,7);n+=R*3;for(var W=K(G),vr=(1<<W)-1,ir=U(G,W,1),w=0;w<V;){var X=ir[u(r,n,vr)];n+=X&15;var c=X>>>4;if(c<16)O[w++]=c;else{var z=0,M=0;for(c==16?(M=3+u(r,n,3),n+=2,z=O[w-1]):c==17?(M=3+u(r,n,7),n+=3):c==18&&(M=11+u(r,n,127),n+=7);M--;)O[w++]=z}}var Y=O.subarray(0,q),p=O.subarray(q);b=K(Y),E=K(p),h=U(Y,b,1),x=U(p,E,1)}else throw"invalid block type";else{var c=Fr(n)+4,B=r[c-4]|r[c-3]<<8,_=c+B;if(_>i){if(l)throw"unexpected EOF";break}v&&g(o+B),a.set(r.subarray(c,_),o),e.b=o+=B,e.p=n=_*8;continue}if(n>S){if(l)throw"unexpected EOF";break}}v&&g(o+131072);for(var fr=(1<<b)-1,or=(1<<E)-1,H=n;;H=n){var z=h[N(r,n)&fr],C=z>>>4;if(n+=z&15,n>S){if(l)throw"unexpected EOF";break}if(!z)throw"invalid length/literal";if(C<256)a[o++]=C;else if(C==256){H=n,h=null;break}else{var Z=C-254;if(C>264){var w=C-257,y=L[w];Z=u(r,n,(1<<y)-1)+ar[w],n+=y}var I=x[N(r,n)&or],J=I>>>4;if(!I)throw"invalid distance";n+=I&15;var p=ur[J];if(J>3){var y=d[J];p+=N(r,n)&(1<<y)-1,n+=y}if(n>S){if(l)throw"unexpected EOF";break}v&&g(o+131072);for(var $=o+Z;o<$;o+=4)a[o]=a[o-p],a[o+1]=a[o+1-p],a[o+2]=a[o+2-p],a[o+3]=a[o+3-p];o=$}}e.l=h,e.p=H,e.b=o,h&&(F=1,e.m=b,e.d=x,e.n=E)}while(!F);return o==a.length?a:xr(a,0,o)},pr=new t(0),Ar=function(r){if((r[0]&15)!=8||r[0]>>>4>7||(r[0]<<8|r[1])%31)throw"invalid zlib data";if(r[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function zr(r,a){return gr((Ar(r),r.subarray(2,-4)),a)}var kr=typeof TextDecoder<"u"&&new TextDecoder,br=0;try{kr.decode(pr,{stream:!0}),br=1}catch{}export{zr as u};
//# sourceMappingURL=fflate-dcdcf726.js.map