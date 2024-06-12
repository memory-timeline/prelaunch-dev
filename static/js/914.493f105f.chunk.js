"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[914],{67098:function(e,t,r){var n=r(74165),i=r(15861),o=r(79105);t.Z={getProductList:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/product/list",r={method:"GET"},i={pagination:{page:1,perPage:24},sort:{field:"name",order:"ASC"},filter:{category_id:t}},e.next=5,o.Z.httpClient("/api/product/list",o.Z.encodeParams(i),r);case 5:return s=e.sent,console.log("product list resp ",s),e.abrupt("return",{data:s.json.products,total:s.json.count});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getProduct:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.httpClient("/api/product/get",{id:t},{method:"GET"});case 2:return r=e.sent,e.abrupt("return",{data:r.json});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCategories:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t,r,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={pagination:{page:1,perPage:24},sort:{field:"name",order:"ASC"}},"/api/category/list",r={method:"GET"},e.next=5,o.Z.httpClient("/api/category/list",o.Z.encodeParams(t),r);case 5:return i=e.sent,e.abrupt("return",{data:i.json.categories,total:i.json.count});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}},79105:function(e,t,r){var n=r(74165),i=r(1413),o=r(15861),s=r(31798),c=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r){var o,s,c,a,u,d=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=d.length>2&&void 0!==d[2]?d[2]:{},s="https://".concat(t).concat(r),c={method:"GET",credentials:"include",headers:new Headers({"content-type":"application/json"})},a=(0,i.Z)((0,i.Z)({},o),{},{client:"FRONTEND"}),s+="?".concat(new URLSearchParams(a).toString()),e.next=7,fetch(s,c);case 7:if((u=e.sent).ok){e.next=14;break}if(401!==u.status){e.next=12;break}return document.cookie="userInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",e.abrupt("return",{status:"unauthenticated"});case 12:if(403!==u.status){e.next=14;break}return e.abrupt("return",{status:"forbidden"});case 14:return e.abrupt("return",u.json());case 15:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),a=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r,o,s){var c,a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://".concat(t).concat(r),a=(0,i.Z)((0,i.Z)({},o),{},{client:"FRONTEND"}),c+="?".concat(new URLSearchParams(a).toString()),u={method:"POST",credentials:"include",headers:new Headers({"content-type":"application/json"}),body:s},e.abrupt("return",fetch(c,u).then((function(e){return e.ok?e.json():{status:"error"}})));case 5:case"end":return e.stop()}}),e)})));return function(t,r,n,i){return e.apply(this,arguments)}}(),u=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r,o){var s,c,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="https://".concat(t).concat(r),c=(0,i.Z)((0,i.Z)({},o),{},{client:"FRONTEND"}),s+="?".concat(new URLSearchParams(c).toString()),a={method:"DELETE",credentials:"include",headers:new Headers({"content-type":"application/json"})},e.abrupt("return",fetch(s,a).then((function(e){return e.ok?e.json():{status:"error"}})));case 5:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();t.Z={get:c,post:a,deleteMethod:u,httpClient:function(e,t,r){var n=(0,i.Z)({},t),o=(0,i.Z)({},r),c="https://".concat("authbridge-stage.mymemorystore.in").concat(e);return n.client="FRONTEND",c+="?".concat(new URLSearchParams(n).toString()),o.credentials="include",o.headers||(o.headers=new Headers({Accept:"application/json"})),s.Z.fetchJson(c,o)},encodeParams:function(e){return{pagination:encodeURIComponent(JSON.stringify(e.pagination)),filter:encodeURIComponent(JSON.stringify(e.filter)),sort:encodeURIComponent(JSON.stringify(e.sort))}}}},41953:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(61113),i=r(46417);function o(e){var t=e.title;return(0,i.jsx)(n.Z,{variant:"h5",sx:{fontWeight:"bold",m:1,marginTop:2,color:"white"},children:t})}},37168:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(35898),i=r(21023),o=r(61113),s=r(46417);function c(e){var t=e.price,r=e.size;return(0,s.jsxs)(n.Z,{direction:"row",justifyContent:"left",alignItems:"center",children:[(0,s.jsx)(i.Z,{}),(0,s.jsx)(o.Z,{sx:{fontSize:{list:"0.75rem",view:"1.2rem"}[r]},children:t})]})}},8689:function(e,t,r){var n=r(1413),i=r(75192),o=r.n(i),s={id:o().string.isRequired},c={width:o().number,height:o().number,title:o().string.isRequired,src:o().string.isRequired,size:o().number,lastModified:o().number,type:o().string},a=(0,n.Z)((0,n.Z)({},c),{},{resized:o().arrayOf(o().shape(c))});(0,n.Z)((0,n.Z)({},s),{},{name:o().string,picture:o().shape(a)}),(0,n.Z)((0,n.Z)({},s),{},{category_id:o().string,price:o().number,name:o().string,sales:o().number,thumbnail:o().shape(a),width:o().number,height:o().number})},4073:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(74165),i=r(15861),o=r(29439),s=r(58467),c=r(47313),a=r(73428),u=r(54641),d=r(93405),l=r(67098),p=r(35898),h=r(61113),f=r(69099),x=r(21411),g=r(41953),Z=r(57829),m=r(31798),j=r(31889),b=r(77782),w=(r(8689),r(22118),r(46417));function v(e){var t=e.ri;return(0,w.jsx)(Z.Z,{component:"img",src:t.src,srcSet:m.Z.getSrcSet(t),alt:t.title,sx:{borderRadius:"20px",p:1,height:"55vh",objectFit:"cover"}})}function y(e){var t=e.images;return console.log("product images",t),(0,w.jsxs)(j.sj,{visibleSlides:1,totalSlides:t.length,step:1,naturalSlideWidth:100,naturalSlideHeight:120,currentSlide:0,isPlaying:!0,touchEnabled:!0,onChange:function(e){console.log("on change",e)},children:[(0,w.jsx)(j.iR,{children:t.map((function(e,t){return(0,w.jsx)(j.Mi,{index:t,children:(0,w.jsx)(v,{ri:e})},e.src)}))}),(0,w.jsxs)(p.Z,{direction:"row",justifyContent:"center",alignItems:"center",spacing:1,children:[(0,w.jsx)(j.jp,{children:(0,w.jsx)(x.Z,{sx:{borderRadius:"5px",bgcolor:"transparent",color:"white"}})}),t.map((function(e,t){return(0,w.jsx)(Z.Z,{component:"img",src:e.src,srcSet:m.Z.getSrcSet(e),alt:e.title,sx:{borderRadius:"10px",p:1,height:"40px",objectFit:"cover",filter:0===t?"blur(1px)":"none"}},e.src)})),(0,w.jsx)(j.P1,{style:{margin:0},children:(0,w.jsx)(b.Z,{sx:{borderRadius:"5px",bgcolor:"transparent",color:"white"}})})]})]})}function S(e){var t=e.value,r=e.title,n=e.unit;return(0,w.jsxs)(p.Z,{direction:"column",sx:{border:"2px solid gray",px:1,borderRadius:"10px",width:"25%"},children:[(0,w.jsx)(h.Z,{sx:{color:"white",textAlign:"center",fontSize:"0.87rem",pt:"4px"},children:t}),(0,w.jsxs)(h.Z,{sx:{textAlign:"center",fontSize:"0.65rem",color:"gray",fontWeight:"bold"},children:[r," (",n,")"]})]})}var C=r(37168),R=r(5211),k=r(49476),T=r(47131);function P(e){var t=e.count,r=e.handleCountChange,n=t<=1;return(0,w.jsxs)(p.Z,{direction:"row",justifyContent:"right",alignItems:"center",children:[(0,w.jsx)(T.Z,{disabled:n,onClick:function(){return r(t>1?t-1:0)},children:(0,w.jsx)(k.Z,{sx:{color:n?"#736e91":"white",bgcolor:n?"gray":"#736e91",borderRadius:"5px"}})}),(0,w.jsx)(h.Z,{sx:{color:"white",px:1,textAlign:"center"},children:t}),(0,w.jsx)(T.Z,{onClick:function(){return r(t+1)},children:(0,w.jsx)(R.Z,{sx:{color:"white",bgcolor:"#736e91",borderRadius:"5px"}})})]})}function E(e){var t=e.text;return(0,w.jsxs)(h.Z,{sx:{color:"gray",pt:2,fontSize:"0.8rem"},children:["This HTML file is a template. If you open it directly in the browser, you will see an empty page. You can add webfonts, meta tags, or analytics to this file. The build step",t]})}function N(){var e=(0,s.UO)().productId,t=(0,c.useState)({}),r=(0,o.Z)(t,2),Z=r[0],m=r[1],j=(0,c.useState)(1),b=(0,o.Z)(j,2),v=b[0],R=b[1],k=(0,s.s0)();return(0,c.useEffect)((0,i.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.Z.getProduct(e);case 2:r=t.sent,m(r.data);case 4:case"end":return t.stop()}}),t)}))),[]),(0,w.jsxs)(a.Z,{sx:{bgcolor:"#1f1e2c",borderRadius:0,minHeight:"100vh"},children:[(0,w.jsx)(y,{images:Z.pictures}),(0,w.jsx)(u.Z,{subheaderTypographyProps:{color:"gray"},title:(0,w.jsx)(g.Z,{title:Z.name}),subheader:(0,w.jsxs)(p.Z,{direction:"row",justifyContent:"space-between",children:[(0,w.jsx)(C.Z,{price:Z.price,size:"view"}),(0,w.jsx)(P,{count:v,handleCountChange:R})]}),sx:{width:"100%","& .MuiTypography-root":{m:0},pb:1}}),(0,w.jsxs)(d.Z,{sx:{pt:1},children:[(0,w.jsxs)(p.Z,{direction:"row",spacing:2,children:[(0,w.jsx)(S,{value:Z.width,title:"Width",unit:"inch"}),(0,w.jsx)(S,{value:Z.height,title:"Height",unit:"inch"})]}),(0,w.jsx)(E,{text:Z.description})]}),(0,w.jsxs)(p.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{px:2,height:"100%"},children:[(0,w.jsxs)(p.Z,{direction:"column",sx:{width:"50%",color:"white"},children:[(0,w.jsx)(h.Z,{sx:{fontSize:"0.75rem",color:"gray"},children:"Total Price"}),(0,w.jsx)(C.Z,{price:Z.price,size:"view"})]}),(0,w.jsx)(f.Z,{variant:"contained",sx:{bgcolor:"#5c5874",borderRadius:"15px",width:"50%",display:"block"},children:"Add to Cart"})]}),(0,w.jsx)(x.Z,{sx:{borderRadius:"5px",position:"fixed",top:20,left:20,bgcolor:"#1f1e2c",color:"#736e91"},onClick:function(){return k("/gifts/list")}})]})}}}]);