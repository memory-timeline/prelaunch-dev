"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[870],{94606:function(e,t,n){var r=n(74165),o=n(15861),a=n(17381);function i(){return(i=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o={body:n,method:"PUT"},e.next=4,fetch(t,o).then((function(e){return e}));case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}t.Z={newCollage:function(e,t){try{var n={collage_id:e};return a.Z.post("authbridge-stage.mymemorystore.in","/api/collage/new",n,JSON.stringify(t))}catch(r){return console.log(r),r}},saveCollage:function(e,t){try{var n={collage_id:e};return a.Z.post("authbridge-stage.mymemorystore.in","/api/collage/save",n,JSON.stringify(t))}catch(r){return console.log(r),r}},upload:function(e,t){return i.apply(this,arguments)},listCollages:function(e){try{var t={next_token:e};return a.Z.get("authbridge-stage.mymemorystore.in","/api/collage/list",t)}catch(n){return console.log(n),n}},getThumbnail:function(e){try{var t={collage_id:e};return a.Z.get("authbridge-stage.mymemorystore.in","/api/collage/thumbnail",t)}catch(n){return console.log(n),n}},getCollage:function(e){try{var t={collage_id:e};return a.Z.get("authbridge-stage.mymemorystore.in","/api/collage/get",t)}catch(n){return console.log(n),n}},deleteCollage:function(e){try{var t={collage_id:e};return a.Z.deleteMethod("authbridge-stage.mymemorystore.in","/api/collage/delete",t)}catch(n){return console.log(n),n}},checkOptimizeStatus:function(e){try{var t={collage_id:e};return a.Z.get("authbridge-stage.mymemorystore.in","/api/collage/resized-count",t)}catch(n){return console.log(n),n}}}},17381:function(e,t,n){var r=n(74165),o=n(15861),a=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o,a,i,c,s=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=s.length>2&&void 0!==s[2]?s[2]:{},a="https://".concat(t).concat(n),i={method:"GET",credentials:"include",headers:new Headers({"content-type":"application/json"})},a+="?".concat(new URLSearchParams(o).toString()),e.next=6,fetch(a,i);case 6:if((c=e.sent).ok){e.next=13;break}if(401!==c.status){e.next=11;break}return document.cookie="userInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",e.abrupt("return",{status:"unauthenticated"});case 11:if(403!==c.status){e.next=13;break}return e.abrupt("return",{status:"forbidden"});case 13:return e.abrupt("return",c.json());case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n,o,a){var i,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="https://".concat(t).concat(n),i+="?".concat(new URLSearchParams(o).toString()),c={method:"POST",credentials:"include",headers:new Headers({"content-type":"application/json"}),body:a},e.abrupt("return",fetch(i,c).then((function(e){return e.ok?e.json():{status:"error"}})));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}(),c=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n,o){var a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://".concat(t).concat(n),a+="?".concat(new URLSearchParams(o).toString()),i={method:"DELETE",credentials:"include",headers:new Headers({"content-type":"application/json"})},e.abrupt("return",fetch(a,i).then((function(e){return e.ok?e.json():{status:"error"}})));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();t.Z={get:a,post:i,deleteMethod:c}},44423:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(61889),o=n(20890),a=n(32067),i=n(80184);function c(e){var t=e.handleMoreClick;return(0,i.jsx)(r.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,i.jsx)(a.Z,{handleClick:t,children:(0,i.jsx)(o.Z,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:"30px",borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}},81307:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(61889),o=n(80184);function a(e){var t=e.children;return(0,o.jsx)(r.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:t})}a.defaultProps={children:""}},32067:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(57621),o=n(66647),a=n(80184);function i(e){var t=e.handleClick,n=e.children;return(0,a.jsx)(o.Z,{onClick:t,children:(0,a.jsx)(r.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:{lg:430,md:380,xs:330},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:n})})}},36870:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var r=n(93433),o=n(74165),a=n(29439),i=n(15861),c=n(1413),s=n(72791),l=n(57689),u=n(12065),d=n(64554),h=n(20890),p=n(81307),f=n(94606),g=n(52766),m=n(76476),v=n(61889),b=n(33402),Z=n(64586),x=n(5574),y=n(53767),k=n(13239),w=n(39157),C=n(44423),j=n(57621),S=n(42169),P=n(39504),O=n(9585),R=n(66647),z=n(95193),A=n(58054),I=n(80184);function M(e){var t=e.message,n=e.handleClick,r=(0,z.Z)((function(e){return e.breakpoints.down("md")}));return(0,I.jsx)(v.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:0},children:(0,I.jsxs)(T,{handleClick:n,children:[(0,I.jsx)(h.Z,{variant:r?"body1":"h5",color:"button.main",sx:{p:1,color:"muted.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0,fontWeight:"bold"},children:t}),(0,I.jsx)(A.Z,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"create")}function _(e){var t=e.title;return(0,I.jsx)(P.Z,{children:(0,I.jsx)(O.Z,{disableTypography:!0,title:(0,I.jsx)(h.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",fontWeight:600,textAlign:"center"},children:t}),sx:{padding:0,color:"faded.black"}})})}function L(e){var t=e.imageSrc,n=e.title,r=e.handleImageLoad;return(0,I.jsx)(S.Z,{component:"img",src:t,alt:n,sx:{textAlign:"center",objectFit:"cover",height:"85%"},onLoad:r})}function T(e){var t=e.handleClick,n=e.children;return(0,I.jsx)(R.Z,{onClick:t,children:(0,I.jsx)(j.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:"40vh","&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:n})})}function N(e){var t=e.title,n=e.thumbnailImage,r=e.handleClick,o=e.handleImageLoad;return(0,I.jsxs)(T,{handleClick:r,children:[(0,I.jsx)(L,{imageSrc:n,title:t,handleImageLoad:o}),(0,I.jsx)(_,{title:t})]})}function H(e){var t=e.items,n=e.handleMoreClick,r=e.nextToken,o=e.handleImageLoad,a=e.createComponent,i=e.handleClick;return console.log("items",t),(0,I.jsxs)(v.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[a,t.map((function(e){return(0,I.jsxs)(v.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1,position:"relative"},children:[(0,I.jsx)(N,{title:e.title,thumbnailImage:e.photo.src,handleClick:function(){return!0===e.optimized?i(e):{}},handleImageLoad:o}),!1===e.optimized?(0,I.jsx)(h.Z,{variant:"h6",color:"success",sx:{position:"absolute",top:"50%",width:"100%",backgroundColor:(0,u.Fq)("#fff",.6),textAlign:"center",fontWeight:"bold",transform:"translate(0,-50%)"},children:"Optimizing ..."}):null]},e.title)})),r&&(0,I.jsx)(C.Z,{handleMoreClick:n})]})}function E(e){return e.map((function(e){return(0,c.Z)((0,c.Z)({},e),{},{photo:{title:e.collage_id,src:e.thumbnail_url}})}))}function F(e,t,n){return V.apply(this,arguments)}function V(){return V=(0,i.Z)((0,o.Z)().mark((function e(t,n,r){var a,i,c,s,l=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>3&&void 0!==l[3]?l[3]:"",e.prev=1,e.next=4,f.Z.listCollages(a);case 4:return i=e.sent,t(i.collage_ids),n(i.next_token),c=i.collage_ids.map((function(e){return f.Z.getThumbnail(e)})),e.next=10,Promise.all(c);case 10:s=e.sent,r(E(s)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])}))),V.apply(this,arguments)}function W(){var e=(0,l.s0)(),t=(0,s.useState)(0),n=(0,a.Z)(t,2),u=n[0],C=n[1],j=(0,s.useState)(""),S=(0,a.Z)(j,2),P=S[0],O=S[1],R=(0,s.useState)([]),z=(0,a.Z)(R,2),A=z[0],_=z[1],L=(0,s.useState)([]),T=(0,a.Z)(L,2),E=T[0],V=T[1],W=(0,s.useState)(!1),D=(0,a.Z)(W,2),U=D[0],X=D[1],J=(0,s.useState)(""),q=(0,a.Z)(J,2),B=q[0],G=q[1],Y=function(e){return V((function(t){return t.concat(e)}))},K=function(e){return _((function(t){return t.concat(e)}))},Q=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="Loading collages",console.log("opening common dialog with message",t),""!==t&&(G(t),X(!0)),e.next=3,F(Y,O,K,P);case 3:console.log("closing common dialog",B),X(!1),G("");case 4:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}(),$=(0,I.jsx)(M,{message:"Create a collage",handleClick:function(){return e("/collage/create")}}),ee=A.sort((function(e,t){return parseInt(e.collage_id,10)>parseInt(t.collage_id,10)?1:-1}));(0,s.useEffect)(Q,[]);var te=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Checking optimization status",A),t=!0,n=!1,a=(0,r.Z)(A),e.next=6,Promise.allSettled(a.map(function(){var e=(0,i.Z)((0,o.Z)().mark((function e(r){var a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Checking optimization",r.optimized),!1!==r.optimized){e.next=13;break}return console.log("Checking optimization, not optimized"),e.next=5,f.Z.checkOptimizeStatus(r.collage_id);case 5:if(a=e.sent,console.log("Checking optimization current status",a),!0!==a.optimized){e.next=11;break}return console.log("Checking optimization changed, changing to true"),n=!0,e.abrupt("return",(0,c.Z)((0,c.Z)({},r),{},{optimized:!0}));case 11:return t=!1,e.abrupt("return",r);case 13:return e.abrupt("return",r);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:s=e.sent,console.log("Checking optimization newThumbnails",s),!0===n&&(console.log("Checking optimization changed"),_(s.map((function(e){return e.value})))),!1===t&&setTimeout((function(){return te()}),2e3);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)(te,[A]);var ne=(0,I.jsx)(H,{createComponent:$,handleClick:function(t){e("/collage/".concat(t.collage_id))},handleImageLoad:function(){return C((function(e){return e+1}))},handleMoreClick:Q,items:ee,nextToken:P}),re=(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(p.Z,{children:[$,A.map((function(e){return(0,I.jsx)(v.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,I.jsx)(N,{title:(0,I.jsx)(b.Z,{type:"rectangular",sx:{width:"60%"}}),thumbnailImage:Z,handleClick:function(){}})},e)}))]}),(0,I.jsx)(d.Z,{component:"div",sx:{display:"none"},children:ne})]});return(0,I.jsxs)(g.Z,{children:[(0,I.jsx)(m.Z,{children:A.length===E.length&&u>=A.length?ne:re}),(0,I.jsx)(x.Z,{open:U,children:(0,I.jsx)(w.Z,{children:(0,I.jsxs)(y.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,I.jsx)(k.Z,{}),(0,I.jsx)(h.Z,{variant:"h6",children:B})]})})})]})}H.defaultProps={items:[],createComponent:""},_.defaultProps={title:"Thumbnail Image"},L.defaultProps={title:"Thumbnail Image",imageSrc:"",handleImageLoad:function(){}},N.defaultProps={handleImageLoad:function(){}}},66647:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(4942),o=n(87462),a=n(63366),i=n(72791),c=n(28182),s=n(94419),l=n(93736),u=n(47630),d=n(75878),h=n(21217);function p(e){return(0,h.Z)("MuiCardActionArea",e)}var f=(0,d.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),g=n(95080),m=n(80184),v=["children","className","focusVisibleClassName"],b=(0,u.ZP)(g.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,n=e.theme;return t={display:"block",textAlign:"inherit",width:"100%"},(0,r.Z)(t,"&:hover .".concat(f.focusHighlight),{opacity:(n.vars||n).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,r.Z)(t,"&.".concat(f.focusVisible," .").concat(f.focusHighlight),{opacity:(n.vars||n).palette.action.focusOpacity}),t})),Z=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,t){return t.focusHighlight}})((function(e){var t=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}})),x=i.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiCardActionArea"}),r=n.children,i=n.className,u=n.focusVisibleClassName,d=(0,a.Z)(n,v),h=n,f=function(e){var t=e.classes;return(0,s.Z)({root:["root"],focusHighlight:["focusHighlight"]},p,t)}(h);return(0,m.jsxs)(b,(0,o.Z)({className:(0,c.Z)(f.root,i),focusVisibleClassName:(0,c.Z)(u,f.focusVisible),ref:t,ownerState:h},d,{children:[r,(0,m.jsx)(Z,{className:f.focusHighlight,ownerState:h})]}))}))},33402:function(e,t,n){n.d(t,{Z:function(){return z}});var r=n(30168),o=n(63366),a=n(87462),i=n(72791),c=n(28182),s=n(52554),l=n(94419),u=n(61572),d=n(12065),h=n(47630),p=n(93736),f=n(75878),g=n(21217);function m(e){return(0,g.Z)("MuiSkeleton",e)}(0,f.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v,b,Z,x,y,k,w,C,j=n(80184),S=["animation","className","component","height","style","variant","width"],P=(0,s.F4)(y||(y=v||(v=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),O=(0,s.F4)(k||(k=b||(b=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),R=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((function(e){var t=e.theme,n=e.ownerState,r=(0,u.Wy)(t.shape.borderRadius)||"px",o=(0,u.YL)(t.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,d.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(o).concat(r,"/").concat(Math.round(o/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,s.iv)(w||(w=Z||(Z=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),P)}),(function(e){var t=e.ownerState,n=e.theme;return"wave"===t.animation&&(0,s.iv)(C||(C=x||(x=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),O,(n.vars||n).palette.action.hover)})),z=i.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiSkeleton"}),r=n.animation,i=void 0===r?"pulse":r,s=n.className,u=n.component,d=void 0===u?"span":u,h=n.height,f=n.style,g=n.variant,v=void 0===g?"text":g,b=n.width,Z=(0,o.Z)(n,S),x=(0,a.Z)({},n,{animation:i,component:d,variant:v,hasChildren:Boolean(Z.children)}),y=function(e){var t=e.classes,n=e.variant,r=e.animation,o=e.hasChildren,a=e.width,i=e.height,c={root:["root",n,r,o&&"withChildren",o&&!a&&"fitContent",o&&!i&&"heightAuto"]};return(0,l.Z)(c,m,t)}(x);return(0,j.jsx)(R,(0,a.Z)({as:d,ref:t,className:(0,c.Z)(y.root,s),ownerState:x},Z,{style:(0,a.Z)({width:b,height:h},f)}))}))},64586:function(e,t,n){e.exports=n.p+"static/media/image-loading.f1b4462988545d9c460a.png"},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=870.de79765d.chunk.js.map