"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[148],{41148:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(29439),a=n(74165),u=n(1413),i=n(45987),c=n(15861),s=n(57689),l=n(94606),o=n(83860),f=n(80184),p=["src","originalSRC","file"];function g(e){return h.apply(this,arguments)}function h(){return(h=(0,c.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},console.time("downloading images"),e.next=4,Promise.allSettled(Object.entries(t).map((function(e){var t=(0,r.Z)(e,2),a=t[0],u=t[1];return fetch(u).then((function(e){return e.blob()})).then((function(e){n[a]=e}))})));case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,n,r){return m.apply(this,arguments)}function m(){return(m=(0,c.Z)((0,a.Z)().mark((function e(t,n,r,u){var i,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(n);case 2:return i=e.sent,u(),e.next=6,Promise.allSettled(t.map((function(e){return new Promise((function(t){var n=e.naturalWidth,a=e.naturalHeight,u=e.title,c=e.aspectRatio,s=e.type,l=i[u],o=new Image;o.onload=function(e){var i=e.target.src,o={title:u,src:i,naturalHeight:a,naturalWidth:n,aspectRatio:c,type:s,file:l};r(o),t(o)},o.src=URL.createObjectURL(l)}))})));case 6:return c=e.sent,e.abrupt("return",c.map((function(e){return e.value})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(){var e=(0,s.UO)().collageID,t=function(){var t=(0,c.Z)((0,a.Z)().mark((function t(n,r,c){var s,o,f;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.Z.getCollage(e);case 2:return s=t.sent,t.next=5,d(s.details.images,s.urls,c,(function(){n(s.details.images.length),r(s.details.images.length)}));case 5:return o=t.sent,f=o.map((function(e){e.src,e.originalSRC,e.file;return(0,i.Z)(e,p)})),t.abrupt("return",{details:(0,u.Z)((0,u.Z)({},s.details),{},{images:f}),images:o});case 8:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();return(0,f.jsx)(o.default,{getCollage:t,clearCollage:function(){return l.Z.deleteCollage(e)},saveType:"existing"})}}}]);
//# sourceMappingURL=148.b292e64e.chunk.js.map