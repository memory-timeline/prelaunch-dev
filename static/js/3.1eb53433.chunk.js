(this.webpackJsonpprelaunch=this.webpackJsonpprelaunch||[]).push([[3],{144:function(e,t,n){"use strict";var r=n(132),a=n(133),i=n.n(a),o=function(){var e=Object(r.a)(i.a.mark((function e(t,n){var r,a,o,c,s=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>2&&void 0!==s[2]?s[2]:{},a="https://".concat(t).concat(n),o={method:"GET",credentials:"include",headers:new Headers({"content-type":"application/json"})},a+="?".concat(new URLSearchParams(r).toString()),e.next=6,fetch(a,o);case 6:if((c=e.sent).ok){e.next=13;break}if(401!==c.status){e.next=11;break}return document.cookie="userInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",e.abrupt("return",{status:"unauthenticated"});case 11:if(403!==c.status){e.next=13;break}return e.abrupt("return",{status:"forbidden"});case 13:return e.abrupt("return",c.json());case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function c(e,t,n,r){try{return o(t,"/api/presigned-url",{key:n,bucket:e,method:r}).then((function(e){return e.Error?(console.log(e.Error),""):e.URL}))}catch(a){return a}}function s(){return(s=Object(r.a)(i.a.mark((function e(t,n,r){var a,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/api/details/validate",a={bucket:t},o="https://".concat(n).concat("/api/details/validate"),o+="?".concat(new URLSearchParams(a).toString()),c={method:"POST",credentials:"include",headers:new Headers({"content-type":"application/json"}),body:r},e.next=8,fetch(o,c).then((function(e){return console.log(e),e.ok?e.json():{status:"error"}}));case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function l(e,t,n,r){return u.apply(this,arguments)}function u(){return(u=Object(r.a)(i.a.mark((function e(t,n,r,a){var o,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(t,n,r,"PUT");case 3:return o=e.sent,s={body:a,method:"PUT"},e.next=7,fetch(o,s).then((function(e){return e}));case 7:return l=e.sent,e.abrupt("return",l);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function j(){return(j=Object(r.a)(i.a.mark((function e(t,n,r){var a,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/api/memory",a={bucket:t,memory_id:r},o="https://".concat(n).concat("/api/memory"),o+="?".concat(new URLSearchParams(a).toString()),c={method:"DELETE",credentials:"include",headers:new Headers({"content-type":"application/json"})},e.next=8,fetch(o,c).then((function(e){return console.log(e),e.ok?{status:"ok",body:e.json()}:{status:"error"}}));case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function d(){return(d=Object(r.a)(i.a.mark((function e(t,n,r,a,o){var c,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/api/memory",c={bucket:t,memory_id:r},s="https://".concat(n).concat("/api/memory"),s+="?".concat(new URLSearchParams(c).toString()),l={method:"PATCH",credentials:"include",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({item:a,value:o})},e.next=8,fetch(s,l).then((function(e){return console.log(e),!!e.ok}));case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function h(){return(h=Object(r.a)(i.a.mark((function e(t,n,r,a,o){var c,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/api/memory",c={bucket:t,memory_id:r},s="https://".concat(n).concat("/api/memory"),s+="?".concat(new URLSearchParams(c).toString()),l={method:"PATCH",credentials:"include",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({item:"image",action:a,image:o})},e.next=8,fetch(s,l).then((function(e){return e}));case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}t.a={getObjectUrl:c,validateDetails:function(e,t,n){return s.apply(this,arguments)},upload:l,uploadMultipleImages:function(e,t,n,a){try{return n.map(function(){var n=Object(r.a)(i.a.mark((function n(r){var o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l(e,t,r.Key,r.Body);case 2:return o=n.sent,a(),n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}catch(o){return console.log(o),o}},getMemories:function(e,t,n){try{var r={bucket:e};return n&&(r.next_token=n),o(t,"/api/memories",r)}catch(a){return a}},viewMemory:function(e,t,n){try{return o(t,"/api/memory",{bucket:e,memory_id:n})}catch(r){return console.log("lord, I have erred",r),r}},getThumbnails:function(e,t,n){try{return console.log("Memories = ",n),n.map(function(){var n=Object(r.a)(i.a.mark((function n(r){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={bucket:e,memory_id:r},n.abrupt("return",o(t,"/api/memory/thumbnail",a));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}catch(a){return console.log(a),a}},finalizeMemory:function(e,t,n){try{return o(t,"/api/memory/finalize",{bucket:e,memory_id:n})}catch(r){return r}},deleteMemory:function(e,t,n){return j.apply(this,arguments)},updateMemoryDetails:function(e,t,n,r,a){return d.apply(this,arguments)},updateMemoryImage:function(e,t,n,r,a){return h.apply(this,arguments)}}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(50),a=n(679),i=n(92),o=n(0),c=["title","titleId"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function u(e,t){var n=e.title,r=e.titleId,a=l(e,c);return o.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 80 80",fill:"#ffc745",id:"svg_icon.primary",x:60,y:41,width:40,height:40,ref:t,"aria-labelledby":r},a),n?o.createElement("title",{id:r},n):null,o.createElement("g",{id:"surface1"},o.createElement("path",{style:{},d:"M 12 11 C 11.640625 10.996094 11.304688 11.183594 11.121094 11.496094 C 10.941406 11.808594 10.941406 12.191406 11.121094 12.503906 C 11.304688 12.816406 11.640625 13.003906 12 13 L 12 15 L 10 15 C 7.25 15 5 17.25 5 20 L 5 62 C 5 64.75 7.25 67 10 67 L 70 67 C 72.75 67 75 64.75 75 62 L 75 20 C 75 17.25 72.75 15 70 15 L 35 15 L 35 13 C 35.359375 13.003906 35.695313 12.816406 35.878906 12.503906 C 36.058594 12.191406 36.058594 11.808594 35.878906 11.496094 C 35.695313 11.183594 35.359375 10.996094 35 11 L 24 11 C 23.640625 10.996094 23.304688 11.183594 23.121094 11.496094 C 22.941406 11.808594 22.941406 12.191406 23.121094 12.503906 C 23.304688 12.816406 23.640625 13.003906 24 13 L 24 15 L 19 15 L 19 13 C 19.359375 13.003906 19.695313 12.816406 19.878906 12.503906 C 20.058594 12.191406 20.058594 11.808594 19.878906 11.496094 C 19.695313 11.183594 19.359375 10.996094 19 11 Z M 14 13 L 17 13 L 17 15 L 14 15 Z M 26 13 L 33 13 L 33 15 L 26 15 Z M 10 17 L 70 17 C 71.667969 17 73 18.332031 73 20 L 73 62 C 73 63.667969 71.667969 65 70 65 L 10 65 C 8.332031 65 7 63.667969 7 62 L 7 20 C 7 18.332031 8.332031 17 10 17 Z M 61 21 L 61 24 L 70 24 L 70 21 Z M 46 23 C 36.621094 23 29 30.621094 29 40 C 29 49.378906 36.621094 57 46 57 C 55.378906 57 63 49.378906 63 40 C 63 30.621094 55.378906 23 46 23 Z M 46 25 C 54.296875 25 61 31.703125 61 40 C 61 48.296875 54.296875 55 46 55 C 37.703125 55 31 48.296875 31 40 C 31 31.703125 37.703125 25 46 25 Z M 10 28 C 9.449219 28 9 28.449219 9 29 C 9 29.550781 9.449219 30 10 30 C 10.550781 30 11 29.550781 11 29 C 11 28.449219 10.550781 28 10 28 Z M 14 28 C 13.449219 28 13 28.449219 13 29 C 13 29.550781 13.449219 30 14 30 C 14.550781 30 15 29.550781 15 29 C 15 28.449219 14.550781 28 14 28 Z M 18 28 C 17.449219 28 17 28.449219 17 29 C 17 29.550781 17.449219 30 18 30 C 18.550781 30 19 29.550781 19 29 C 19 28.449219 18.550781 28 18 28 Z M 22 28 C 21.449219 28 21 28.449219 21 29 C 21 29.550781 21.449219 30 22 30 C 22.550781 30 23 29.550781 23 29 C 23 28.449219 22.550781 28 22 28 Z M 26 28 C 25.449219 28 25 28.449219 25 29 C 25 29.550781 25.449219 30 26 30 C 26.550781 30 27 29.550781 27 29 C 27 28.449219 26.550781 28 26 28 Z M 30 28 C 29.449219 28 29 28.449219 29 29 C 29 29.550781 29.449219 30 30 30 C 30.550781 30 31 29.550781 31 29 C 31 28.449219 30.550781 28 30 28 Z M 46 28 C 39.382813 28 34 33.382813 34 40 C 34 46.617188 39.382813 52 46 52 C 52.617188 52 58 46.617188 58 40 C 58 33.382813 52.617188 28 46 28 Z M 62 28 C 61.449219 28 61 28.449219 61 29 C 61 29.550781 61.449219 30 62 30 C 62.550781 30 63 29.550781 63 29 C 63 28.449219 62.550781 28 62 28 Z M 66 28 C 65.449219 28 65 28.449219 65 29 C 65 29.550781 65.449219 30 66 30 C 66.550781 30 67 29.550781 67 29 C 67 28.449219 66.550781 28 66 28 Z M 70 28 C 69.449219 28 69 28.449219 69 29 C 69 29.550781 69.449219 30 70 30 C 70.550781 30 71 29.550781 71 29 C 71 28.449219 70.550781 28 70 28 Z M 46 30 C 51.535156 30 56 34.464844 56 40 C 56 45.535156 51.535156 50 46 50 C 40.464844 50 36 45.535156 36 40 C 36 34.464844 40.464844 30 46 30 Z M 25 38 C 23.894531 38 23 38.894531 23 40 C 23 41.105469 23.894531 42 25 42 C 26.105469 42 27 41.105469 27 40 C 27 38.894531 26.105469 38 25 38 Z M 10 60 C 9.449219 60 9 60.449219 9 61 C 9 61.550781 9.449219 62 10 62 C 10.550781 62 11 61.550781 11 61 C 11 60.449219 10.550781 60 10 60 Z M 14 60 C 13.449219 60 13 60.449219 13 61 C 13 61.550781 13.449219 62 14 62 C 14.550781 62 15 61.550781 15 61 C 15 60.449219 14.550781 60 14 60 Z M 18 60 C 17.449219 60 17 60.449219 17 61 C 17 61.550781 17.449219 62 18 62 C 18.550781 62 19 61.550781 19 61 C 19 60.449219 18.550781 60 18 60 Z M 22 60 C 21.449219 60 21 60.449219 21 61 C 21 61.550781 21.449219 62 22 62 C 22.550781 62 23 61.550781 23 61 C 23 60.449219 22.550781 60 22 60 Z M 26 60 C 25.449219 60 25 60.449219 25 61 C 25 61.550781 25.449219 62 26 62 C 26.550781 62 27 61.550781 27 61 C 27 60.449219 26.550781 60 26 60 Z M 30 60 C 29.449219 60 29 60.449219 29 61 C 29 61.550781 29.449219 62 30 62 C 30.550781 62 31 61.550781 31 61 C 31 60.449219 30.550781 60 30 60 Z M 34 60 C 33.449219 60 33 60.449219 33 61 C 33 61.550781 33.449219 62 34 62 C 34.550781 62 35 61.550781 35 61 C 35 60.449219 34.550781 60 34 60 Z M 38 60 C 37.449219 60 37 60.449219 37 61 C 37 61.550781 37.449219 62 38 62 C 38.550781 62 39 61.550781 39 61 C 39 60.449219 38.550781 60 38 60 Z M 42 60 C 41.449219 60 41 60.449219 41 61 C 41 61.550781 41.449219 62 42 62 C 42.550781 62 43 61.550781 43 61 C 43 60.449219 42.550781 60 42 60 Z M 46 60 C 45.449219 60 45 60.449219 45 61 C 45 61.550781 45.449219 62 46 62 C 46.550781 62 47 61.550781 47 61 C 47 60.449219 46.550781 60 46 60 Z M 50 60 C 49.449219 60 49 60.449219 49 61 C 49 61.550781 49.449219 62 50 62 C 50.550781 62 51 61.550781 51 61 C 51 60.449219 50.550781 60 50 60 Z M 54 60 C 53.449219 60 53 60.449219 53 61 C 53 61.550781 53.449219 62 54 62 C 54.550781 62 55 61.550781 55 61 C 55 60.449219 54.550781 60 54 60 Z M 58 60 C 57.449219 60 57 60.449219 57 61 C 57 61.550781 57.449219 62 58 62 C 58.550781 62 59 61.550781 59 61 C 59 60.449219 58.550781 60 58 60 Z M 62 60 C 61.449219 60 61 60.449219 61 61 C 61 61.550781 61.449219 62 62 62 C 62.550781 62 63 61.550781 63 61 C 63 60.449219 62.550781 60 62 60 Z M 66 60 C 65.449219 60 65 60.449219 65 61 C 65 61.550781 65.449219 62 66 62 C 66.550781 62 67 61.550781 67 61 C 67 60.449219 66.550781 60 66 60 Z M 70 60 C 69.449219 60 69 60.449219 69 61 C 69 61.550781 69.449219 62 70 62 C 70.550781 62 71 61.550781 71 61 C 71 60.449219 70.550781 60 70 60 Z "})))}var j=o.forwardRef(u),d=(n.p,n(3));function h(e){var t=e.width,n=e.height;return Object(d.jsx)(j,{width:t,height:n})}function b(e){var t=e.fontSize;return Object(d.jsx)(r.a,{color:"secondary",variant:"badscript",sx:{paddingX:1,fontSize:t,display:"inline"},children:"myMemoryStore"})}function m(e){var t=e.fontSize,n=e.width,r=e.height;return Object(d.jsx)(a.a,{item:!0,children:Object(d.jsxs)(i.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(d.jsx)(h,{width:n,height:r}),Object(d.jsx)(b,{fontSize:t})]})})}m.defaultProps={width:"64px",height:"64px",fontSize:"2em"}},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return Ie}));var r=n(35),a=n(92),i=n(651),o=n(685),c=n(650),s=n(273),l=n.n(s),u=n(680),j=n(679),d=n(179),h=n(10),b=n(0),m=n(50),p=n(689),x=n(138),f=n.n(x),O=n(660),C=n(695),g=n(3);function v(e){var t=e.children;return Object(g.jsx)(j.a,{container:!0,alignItems:"center",sx:{p:0,pb:1,borderBottom:4,borderColor:"secondary.main",flexShrink:0,justifyContent:{sm:"space-between",xs:"space-between"}},children:t})}function y(e){var t=e.text,n=e.onClick,r=e.borderColor,a=Object(c.a)((function(e){return e.breakpoints.down("md")}))?"body1":"h6";return Object(g.jsx)(u.a,{sx:{color:"button.main",border:2,borderColor:r,borderRadius:5},variant:"outlined",onClick:n,children:Object(g.jsx)(m.a,{variant:a,children:t})})}function w(e){var t=e.onClick;return Object(g.jsx)(o.a,{edge:"start",onClick:t,"aria-label":"close",sx:{fontSize:"3.5rem",position:"absolute",top:0,right:0},children:Object(g.jsx)(f.a,{sx:{fontSize:"3rem",fill:"muted.main"}})})}function k(e){var t=e.text,n=e.open,r=e.onClose,a=e.onClick,i=e.children,o=e.wdth;return Object(g.jsxs)(p.a,{open:n,onClose:r,fullWidth:!0,maxWidth:o,children:[Object(g.jsxs)(O.a,{children:[t,Object(g.jsx)(w,{onClick:a})]}),Object(g.jsx)(C.a,{dividers:!0,children:i})]})}y.defaultProps={borderColor:"transparent"};var M=n(38),z=n(690),S=n(687),Z=n(686),L=n.p+"static/media/gogol.56b2d6a2.jpg",P=n.p+"static/media/sagnika.5dbc30e1.jpg",I={gogol:{name:"Shlok Chatterjee (Gogol)",image:L,text:["CMO (Chief Motivation Officer)","CCC (Chief Chaos Creator)"]},nabarun:{name:"Nabarun Chatterjee",image:n.p+"static/media/blog_pic.0071f886.jpg",text:["Full time father to my 1 year old son and husband to my loving wife . Site Reliability Engineer by profession. Memory making travel and finger licking food are what I live for."]},sagnika:{name:"Sagnika Dasgupta",image:P,text:["I don't remember my life from 1 year back. Now it is mostly Gogol and a little bit of food, travel, painting, writing and other things."]}};function R(e){var t=e.data;return Object(g.jsxs)(z.a,{sx:{minWidth:250,maxWidth:350,p:{md:1,xs:0},m:{md:1,xs:0}},children:[Object(g.jsx)(Z.a,{component:"img",height:"350",image:t.image,alt:t.name,sx:{border:{md:5,xs:0},borderColor:"primary.main"}}),Object(g.jsxs)(S.a,{children:[Object(g.jsx)(m.a,{variant:"h6",sx:{py:1},children:t.name}),t.text.map((function(e){return Object(g.jsx)(m.a,{variant:"body2",color:"text.secondary",children:e},e)}))]})]})}var T=function(){return Object(c.a)((function(e){return e.breakpoints.down("lg")}))?Object(g.jsxs)(j.a,{container:!0,justifyContent:"center",alignItems:"center",children:[Object(g.jsx)(j.a,{item:!0,align:"center",children:Object(g.jsx)(R,{data:I.gogol},"gogol")}),Object(g.jsx)(j.a,{item:!0,align:"center",children:Object(g.jsx)(R,{data:I.nabarun},"nabarun")}),Object(g.jsx)(j.a,{item:!0,align:"center",children:Object(g.jsx)(R,{data:I.sagnika},"sagnika")})]}):Object(g.jsxs)(j.a,{container:!0,justifyContent:"space-between",children:[Object(g.jsx)(j.a,{item:!0,align:"center",children:Object(g.jsx)(R,{data:I.nabarun},"nabarun")}),Object(g.jsx)(j.a,{item:!0,align:"center",children:Object(g.jsx)(R,{data:I.gogol},"gogol")}),Object(g.jsx)(j.a,{item:!0,align:"center",children:Object(g.jsx)(R,{data:I.sagnika},"sagnika")})]})},E=n(51),U=n(218),A=n(184),_=n(696),N=n(270),F=n(52);function D(e){var t=e.size;return Object(g.jsx)(U.a,{icon:N.e,size:t})}function B(e){var t=e.size;return Object(g.jsx)(U.a,{icon:N.a,size:t})}function H(e){var t=e.size;return Object(g.jsx)(U.a,{icon:N.d,size:t})}function W(e){var t=e.size;return Object(g.jsx)(U.a,{icon:N.b,size:t})}function X(){return Object(g.jsx)(U.a,{icon:N.c})}function J(){return Object(g.jsx)(U.a,{icon:A.b})}function G(e){var t=e.size,n=e.color;return Object(g.jsx)($,{to:"https://en.wikipedia.org/wiki/Love",color:n,children:Object(g.jsx)(J,{size:t})})}function Y(e){var t=e.size,n=e.color;return Object(g.jsx)($,{to:"https://reactjs.org/",color:n,children:Object(g.jsx)(X,{size:t})})}function K(e){var t=e.size,n=e.color;return Object(g.jsx)($,{to:"https://www.youtube.com/channel/UCabGr_w5PLFIg1rcmKPbeVg",color:n,children:Object(g.jsx)(D,{size:t})})}function q(e){var t=e.size,n=e.color;return Object(g.jsx)($,{to:"https://www.facebook.com/mymemorystore.in",color:n,children:Object(g.jsx)(B,{size:t})})}function V(e){var t=e.size,n=e.color;return Object(g.jsx)($,{to:"https://twitter.com/mymymemorystore/",color:n,children:Object(g.jsx)(H,{size:t})})}function Q(e){var t=e.size,n=e.color;return Object(g.jsx)($,{to:"https://www.instagram.com/mymemorystore.in/",color:n,children:Object(g.jsx)(W,{size:t})})}function $(e){var t=e.to,n=e.color,r=e.children;return Object(g.jsx)(_.a,{underline:"none",href:t,rel:"noreferrer noopener",target:"_blank",sx:{px:1,color:"".concat(n)},children:r})}function ee(e){var t=e.size;return Object(g.jsxs)(j.a,{item:!0,children:[Object(g.jsx)(F.a,{children:"Follow Us"}),Object(g.jsx)(K,{color:"social.youtube",size:t}),Object(g.jsx)(q,{color:"social.facebook",size:t}),Object(g.jsx)(V,{color:"social.twitter",size:t}),Object(g.jsx)(Q,{color:"social.instagram",size:t})]})}G.defaultProps={size:"1x"},Y.defaultProps={size:"1x"},ee.defaultProps={size:"1x"};var te={display:"flex",justifyContent:"center",m:1,borderRadius:1};var ne=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(m.a,{variant:"h6",align:"center",className:"text-muted",children:"To share your queries or feedback"}),Object(g.jsx)(_.a,{underline:"none",href:"mailto:support@mymemorystore.in",children:Object(g.jsxs)(a.a,{sx:Object(E.a)({},te),children:[Object(g.jsx)(U.a,{icon:A.a,className:"black-icon",size:"2x"}),Object(g.jsx)(m.a,{variant:"h6",className:"px-1",sx:{fontSize:"1.5rem"},children:"Email Us"})]})}),Object(g.jsx)("hr",{}),Object(g.jsx)(a.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(g.jsx)(m.a,{variant:"h6",className:"text-muted",sx:{p:1},children:"Follow Us"})}),Object(g.jsxs)(a.a,{sx:{display:"flex",justifyContent:"space-between",m:1,borderRadius:1},children:[Object(g.jsx)(K,{color:"social.youtube",size:"2x"}),Object(g.jsx)(q,{color:"social.facebook",size:"2x"}),Object(g.jsx)(V,{color:"social.twitter",size:"2x"}),Object(g.jsx)(Q,{color:"social.instagram",size:"2x"})]}),Object(g.jsx)("hr",{})]})},re=n(681),ae=n(618),ie=n(691),oe=n(664),ce=n(663),se=n(682),le=n(271),ue=n.n(le),je=n(662),de=n(58);function he(e){var t=e.name,n=e.picture,r=e.email,a=Array.from(r)[0].toUpperCase();return Object(g.jsx)(re.a,{alt:t,src:n,sx:{referrerPolicy:"no-referrer"},children:a})}function be(e){var t=e.name,n=e.email,r=e.open,i=e.handleClick,c=e.avatar;return console.log(t,n,r,c),Object(g.jsx)(a.a,{sx:{display:"flex",alignItems:"center",textAlign:"center",marginRight:"10px"},children:Object(g.jsx)(se.a,{title:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(m.a,{children:t}),Object(g.jsx)(m.a,{children:n})]}),children:Object(g.jsx)(o.a,{onClick:i,size:"small",sx:{ml:2},"aria-controls":r?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,children:c})})})}function me(e){var t=e.name,n=e.open,r=e.handleClose,a=e.anchorEl,i=e.avatar,o=e.email,c=t||o;return console.log("profile identifier",c),Object(g.jsxs)(ae.a,{anchorEl:a,id:"account-menu",open:n,onClose:r,onClick:r,PaperProps:{elevation:0,sx:{filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[Object(g.jsxs)(ie.a,{children:[i,Object(g.jsx)(je.a,{children:c})]}),Object(g.jsx)(ce.a,{}),Object(g.jsx)(_.a,{href:"https://auth-stage.mymemorystore.in/oauth2/logout",underline:"none",sx:{alignItems:"center",display:"flex"},children:Object(g.jsxs)(ie.a,{children:[Object(g.jsx)(oe.a,{children:Object(g.jsx)(ue.a,{fontSize:"small"})}),Object(g.jsx)(m.a,{sx:{color:"muted.main"},children:"Logout"})]})})]})}function pe(){var e=b.useState(null),t=Object(h.a)(e,2),n=t[0],r=t[1],a=Boolean(n),i=de.a.getUserInfo(),o=Object(g.jsx)(he,{name:i.name,picture:i.picture,email:i.email});return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(be,{avatar:o,open:a,email:i.email,handleClick:function(e){return r(e.currentTarget)},name:i.name}),Object(g.jsx)(me,{anchorEl:n,avatar:o,handleClose:function(){return r(null)},name:i.name,email:i.email,open:a})]})}function xe(){var e=Object(M.a)(pe);return Object(g.jsx)(j.a,{item:!0,sx:{paddingTop:"0.3rem"},children:Object(g.jsx)(e,{})})}var fe=n(4),Oe=n(272),Ce=n.n(Oe);function ge(){var e=Object(fe.g)(),t=b.useState(null),n=Object(h.a)(t,2),r=n[0],i=n[1],c=Boolean(r),s=b.useState(!1),l=Object(h.a)(s,2),u=l[0],j=l[1],d=b.useState(!1),m=Object(h.a)(d,2),p=m[0],x=m[1],f=function(){return j(!1)},O=function(){return x(!1)},C=function(){return i(null)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(a.a,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:Object(g.jsx)(o.a,{onClick:function(e){return i(e.currentTarget)},size:"small",sx:{ml:2},"aria-controls":c?"burger-menu":void 0,"aria-haspopup":"true","aria-expanded":c?"true":void 0,children:Object(g.jsx)(Ce.a,{sx:{width:45,height:45,color:"button.main"}})})}),Object(g.jsxs)(ae.a,{anchorEl:r,id:"burger-menu",open:c,onClose:C,onClick:C,PaperProps:{backgroundColor:"form.input",elevation:0,sx:{filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[Object(g.jsx)(ie.a,{onClick:function(){return e("/memories")},children:"My Memories"}),Object(g.jsx)(ie.a,{onClick:function(){return j(!0)},children:"About"}),Object(g.jsx)(ie.a,{onClick:function(){return x(!0)},children:"Contact Us"})]}),Object(g.jsx)(k,{text:"About",wdth:"lg",open:u,onClose:f,onClick:f,children:Object(g.jsx)(T,{})}),Object(g.jsx)(k,{text:"Contact",wdth:"sm",open:p,onClose:O,onClick:O,children:Object(g.jsx)(ne,{})})]})}function ve(){var e=Object(c.a)((function(e){return e.breakpoints.down("sm")}))?Object(g.jsx)(d.a,{width:"55px",height:"55px",fontSize:"1.55rem"}):Object(g.jsx)(d.a,{});return Object(g.jsx)(r.b,{style:{textDecoration:"none"},to:"/memories",children:Object(g.jsx)(u.a,{children:e})})}function ye(){return Object(g.jsx)(j.a,{item:!0,sx:{paddingTop:"0.55rem",position:"fixed",left:"50vw",transform:"translate(-50%)"},children:Object(g.jsx)(r.b,{style:{textDecoration:"none"},to:"/memories",children:Object(g.jsx)(y,{text:"My Memories",borderColor:"secondary.main",onClick:function(){}})})})}function we(){var e=Object(c.a)((function(e){return e.breakpoints.down("md")}));return Object(c.a)((function(e){return e.breakpoints.down("sm")}))?Object(g.jsx)(v,{children:Object(g.jsx)(ve,{})}):e?Object(g.jsxs)(v,{children:[Object(g.jsx)(ge,{}),Object(g.jsx)(ve,{}),Object(g.jsx)(xe,{})]}):Object(g.jsxs)(v,{children:[Object(g.jsx)(ve,{}),Object(g.jsx)(ye,{}),Object(g.jsx)(xe,{})]})}function ke(){return Object(g.jsxs)(j.a,{item:!0,children:[Object(g.jsx)(F.a,{children:"Made with"}),Object(g.jsx)(G,{color:"social.heart"}),Object(g.jsx)(F.a,{children:"&"}),Object(g.jsx)(Y,{color:"social.react"})]})}function Me(){return Object(g.jsx)(j.a,{item:!0,children:Object(g.jsxs)(F.a,{children:["\xa9 myMemoryStore",(new Date).getFullYear()]})})}function ze(e){var t=e.justify,n=e.children;return Object(g.jsx)(j.a,{container:!0,alignItems:"center",justifyContent:t,sx:{borderTop:4,borderColor:"secondary.main",bgcolor:"primary.main",bottom:0,overflow:"hidden",flexShrink:0,padding:1},children:n})}function Se(){return Object(c.a)((function(e){return e.breakpoints.down("md")}))?Object(g.jsxs)(ze,{justify:"center",children:[Object(g.jsx)(Me,{}),Object(g.jsx)(ee,{})]}):Object(g.jsxs)(ze,{justify:"space-between",children:[Object(g.jsx)(Me,{}),Object(g.jsx)(ke,{}),Object(g.jsx)(ee,{})]})}function Ze(e){var t=e.children;return Object(g.jsx)(a.a,{sx:{backgroundColor:"basepage.background",overflow:"auto",flex:1,width:1},children:t})}function Le(){return Object(g.jsx)(r.b,{style:{textDecoration:"none"},to:"/memories",children:Object(g.jsx)(o.a,{sx:{paddingTop:"0.3rem"},children:Object(g.jsx)(l.a,{fontSize:"medium",sx:{width:45,height:45,color:"button.main"}})})})}function Pe(){return Object(g.jsxs)(i.a,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{borderTop:4,borderColor:"secondary.main"},children:[Object(g.jsx)(ge,{}),Object(g.jsx)(Le,{}),Object(g.jsx)(xe,{})]})}function Ie(e){var t=e.children,n=Object(c.a)((function(e){return e.breakpoints.down("sm")}));return Object(g.jsxs)(a.a,{sx:{display:"flex",flexDirection:"column",flexWrap:"no-wrap",height:"100vh",width:"100vw"},children:[Object(g.jsx)(we,{}),Object(g.jsx)(Ze,{children:t}),n?Object(g.jsx)(Pe,{}):null,Object(g.jsx)(Se,{})]})}},346:function(e,t,n){"use strict";t.a=n.p+"static/media/image-loading.b17d2768.gif"},684:function(e,t,n){"use strict";var r=n(29),a=n(6),i=n(1),o=n(0),c=n(7),s=n(27),l=n(107),u=n(23),j=n(105),d=n(16),h=n(17),b=n(85),m=n(108);function p(e){return Object(b.a)("MuiSkeleton",e)}Object(m.a)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var x,f,O,C,g,v,y,w,k=n(3),M=["animation","className","component","height","style","variant","width"],z=Object(s.c)(g||(g=x||(x=Object(r.a)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),S=Object(s.c)(v||(v=f||(f=Object(r.a)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),Z=Object(d.a)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((function(e){var t=e.theme,n=e.ownerState,r=Object(u.d)(t.shape.borderRadius)||"px",a=Object(u.g)(t.shape.borderRadius);return Object(i.a)({display:"block",backgroundColor:Object(j.a)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&Object(s.b)(y||(y=O||(O=Object(r.a)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),z)}),(function(e){var t=e.ownerState,n=e.theme;return"wave"===t.animation&&Object(s.b)(w||(w=C||(C=Object(r.a)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ",", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),S,n.palette.action.hover)})),L=o.forwardRef((function(e,t){var n=Object(h.a)({props:e,name:"MuiSkeleton"}),r=n.animation,o=void 0===r?"pulse":r,s=n.className,u=n.component,j=void 0===u?"span":u,d=n.height,b=n.style,m=n.variant,x=void 0===m?"text":m,f=n.width,O=Object(a.a)(n,M),C=Object(i.a)({},n,{animation:o,component:j,variant:x,hasChildren:Boolean(O.children)}),g=function(e){var t=e.classes,n=e.variant,r=e.animation,a=e.hasChildren,i=e.width,o=e.height,c={root:["root",n,r,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]};return Object(l.a)(c,p,t)}(C);return Object(k.jsx)(Z,Object(i.a)({as:j,ref:t,className:Object(c.a)(g.root,s),ownerState:C},O,{style:Object(i.a)({width:f,height:d},b)}))}));t.a=L}}]);
//# sourceMappingURL=3.1eb53433.chunk.js.map