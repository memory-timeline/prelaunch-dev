"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[148],{41148:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(29439),a=n(74165),i=n(1413),u=n(45987),s=n(15861),c=n(57689),o=n(94606),l=n(74144),p=n(82621),f=n(80184),g=["src","originalSRC","file"];function h(e){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},console.time("downloading images"),e.next=4,Promise.allSettled(Object.entries(t).map((function(e){var t=(0,r.Z)(e,2),a=t[0],i=t[1];return fetch(i).then((function(e){return e.blob()})).then((function(e){n[a]=e}))})));case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,s.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},console.time("base64 images"),e.next=4,Promise.allSettled(Object.entries(t).map((function(e){var t=(0,r.Z)(e,2),a=t[0],i=t[1];return l.Z.convertBase64(i).then((function(e){n[a]=e}))})));case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t,n,r){return w.apply(this,arguments)}function w(){return(w=(0,s.Z)((0,a.Z)().mark((function e(t,n,r,i){var u,s,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n);case 2:return u=e.sent,e.next=5,d(u);case 5:return s=e.sent,i(),e.next=9,Promise.allSettled(t.map((function(e){return new Promise((function(t){var n=e.naturalWidth,a=e.naturalHeight,i=e.title,c=e.aspectRatio,o=e.type,p=u[i],f=s[i],g=new Image;g.onload=function(){var e={title:i,src:l.Z.optimizeImage(g,1500,1500/c),originalSRC:f,originalHeight:a,originalWidth:n,naturalHeight:1500/c,naturalWidth:1500,aspectRatio:c,type:o,file:p};r(e),t(e)},g.src=f}))})));case 9:return c=e.sent,e.abrupt("return",c.map((function(e){return e.value})));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){var e=(0,c.UO)().collageID,t=function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n,r,s){var c,l,p;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.getCollage(e);case 2:return c=t.sent,t.next=5,v(c.details.images,c.urls,s,(function(){n(c.details.images.length),r(c.details.images.length)}));case 5:return l=t.sent,p=l.map((function(e){e.src,e.originalSRC,e.file;return(0,u.Z)(e,g)})),t.abrupt("return",{details:(0,i.Z)((0,i.Z)({},c.details),{},{images:p}),images:l});case 8:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();return(0,f.jsx)(p.default,{getCollage:t,clearCollage:function(){return o.Z.deleteCollage(e)},saveType:"existing"})}}}]);
//# sourceMappingURL=148.635dccca.chunk.js.map