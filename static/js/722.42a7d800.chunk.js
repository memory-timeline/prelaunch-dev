"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[722],{95739:function(e,t,n){var r=n(74165),a=n(15861),o=n(79105);function i(){return(i=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={body:n,method:"PUT"},e.next=4,fetch(t,a).then((function(e){return e}));case 4:return o=e.sent,e.abrupt("return",o);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}t.Z={newCollage:function(e,t){try{var n={collage_id:e};return o.Z.post("authbridge-stage.mymemorystore.in","/api/collage/new",n,JSON.stringify(t))}catch(r){return console.log(r),r}},saveCollage:function(e,t){try{var n={collage_id:e};return o.Z.post("authbridge-stage.mymemorystore.in","/api/collage/save",n,JSON.stringify(t))}catch(r){return console.log(r),r}},upload:function(e,t){return i.apply(this,arguments)},listCollages:function(e){try{var t={next_token:e};return o.Z.get("authbridge-stage.mymemorystore.in","/api/collage/list",t)}catch(n){return console.log(n),n}},getThumbnail:function(e){try{var t={collage_id:e};return o.Z.get("authbridge-stage.mymemorystore.in","/api/collage/thumbnail",t)}catch(n){return console.log(n),n}},getCollage:function(e){try{var t={collage_id:e};return o.Z.get("authbridge-stage.mymemorystore.in","/api/collage/get",t)}catch(n){return console.log(n),n}},deleteCollage:function(e){try{var t={collage_id:e};return o.Z.deleteMethod("authbridge-stage.mymemorystore.in","/api/collage/delete",t)}catch(n){return console.log(n),n}},checkOptimizeStatus:function(e){try{var t={collage_id:e};return o.Z.get("authbridge-stage.mymemorystore.in","/api/collage/resized-count",t)}catch(n){return console.log(n),n}}}},79105:function(e,t,n){var r=n(74165),a=n(15861),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,o,i,c,s=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>2&&void 0!==s[2]?s[2]:{},o="https://".concat(t).concat(n),i={method:"GET",credentials:"include",headers:new Headers({"content-type":"application/json"})},o+="?".concat(new URLSearchParams(a).toString()),e.next=6,fetch(o,i);case 6:if((c=e.sent).ok){e.next=13;break}if(401!==c.status){e.next=11;break}return document.cookie="userInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",e.abrupt("return",{status:"unauthenticated"});case 11:if(403!==c.status){e.next=13;break}return e.abrupt("return",{status:"forbidden"});case 13:return e.abrupt("return",c.json());case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a,o){var i,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="https://".concat(t).concat(n),i+="?".concat(new URLSearchParams(a).toString()),c={method:"POST",credentials:"include",headers:new Headers({"content-type":"application/json"}),body:o},e.abrupt("return",fetch(i,c).then((function(e){return e.ok?e.json():{status:"error"}})));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var o,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="https://".concat(t).concat(n),o+="?".concat(new URLSearchParams(a).toString()),i={method:"DELETE",credentials:"include",headers:new Headers({"content-type":"application/json"})},e.abrupt("return",fetch(o,i).then((function(e){return e.ok?e.json():{status:"error"}})));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();t.Z={get:o,post:i,deleteMethod:c}},90325:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(9019),a=n(61113),o=n(56746),i=n(46417);function c(e){var t=e.handleMoreClick;return(0,i.jsx)(r.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,i.jsx)(o.Z,{handleClick:t,children:(0,i.jsx)(a.Z,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:"30px",borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}},82295:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(9019),a=n(46417);function o(e){var t=e.children;return(0,a.jsx)(r.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:t})}o.defaultProps={children:""}},56746:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(73428),a=n(44183),o=n(46417);function i(e){var t=e.handleClick,n=e.children;return(0,o.jsx)(a.Z,{onClick:t,children:(0,o.jsx)(r.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:{lg:430,md:380,xs:330},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:n})})}},28722:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var r=n(93433),a=n(74165),o=n(29439),i=n(15861),c=n(1413),s=n(47313),l=n(58467),u=n(17551),d=n(57829),h=n(61113),f=n(82295),p=n(95739),m=n(9019),g=n(1470),v=n(64586),b=n(94469),x=n(35898),Z=n(85281),y=n(96467),w=n(90325),k=n(73428),j=n(16957),C=n(93405),S=n(54641),P=n(44183),O=n(24813),R=n(41434),I=n(46417);function A(e){var t=e.message,n=e.handleClick,r=(0,O.Z)((function(e){return e.breakpoints.down("md")}));return(0,I.jsx)(m.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,I.jsxs)(L,{handleClick:n,children:[(0,I.jsx)(h.Z,{variant:r?"body1":"h5",color:"button.main",sx:{p:1,color:"muted.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0,fontWeight:"bold"},children:t}),(0,I.jsx)(R.Z,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"create")}function M(e){var t=e.title;return(0,I.jsx)(C.Z,{children:(0,I.jsx)(S.Z,{disableTypography:!0,title:(0,I.jsx)(h.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",fontWeight:600,textAlign:"center"},children:t}),sx:{padding:0,color:"faded.black"}})})}function _(e){var t=e.imageSrc,n=e.title,r=e.handleImageLoad;return(0,I.jsx)(j.Z,{component:"img",src:t,alt:n,sx:{textAlign:"center",objectFit:"cover",height:"85%"},onLoad:r})}function L(e){var t=e.handleClick,n=e.children;return(0,I.jsx)(P.Z,{onClick:t,children:(0,I.jsx)(k.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:"40vh","&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:n})})}function T(e){var t=e.title,n=e.thumbnailImage,r=e.handleClick,a=e.handleImageLoad;return(0,I.jsxs)(L,{handleClick:r,children:[(0,I.jsx)(_,{imageSrc:n,title:t,handleImageLoad:a}),(0,I.jsx)(M,{title:t})]})}function N(e){var t=e.items,n=e.handleMoreClick,r=e.nextToken,a=e.handleImageLoad,o=e.createComponent,i=e.handleClick;return(0,I.jsxs)(m.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[o,t.map((function(e){return(0,I.jsxs)(m.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1,position:"relative"},children:[(0,I.jsx)(T,{title:e.title,thumbnailImage:e.photo.src,handleClick:function(){return!0===e.optimized?i(e):{}},handleImageLoad:a}),!1===e.optimized?(0,I.jsxs)(x.Z,{direction:"row",justifyContent:"center",alignItems:"center",spacing:2,sx:{position:"absolute",top:"50%",width:"100%",backgroundColor:(0,u.Fq)("#fff",.6),py:1,transform:"translate(0,-50%)"},children:[(0,I.jsx)(Z.Z,{}),(0,I.jsx)(h.Z,{variant:"h6",color:"success",sx:{textAlign:"center",fontWeight:"bold"},children:"Optimizing ..."})]}):null]},e.title)})),r&&(0,I.jsx)(w.Z,{handleMoreClick:n})]})}function H(e){return e.map((function(e){return(0,c.Z)((0,c.Z)({},e),{},{photo:{title:e.collage_id,src:e.thumbnail_url}})}))}function z(e,t,n){return E.apply(this,arguments)}function E(){return E=(0,i.Z)((0,a.Z)().mark((function e(t,n,r){var o,i,c,s,l=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=l.length>3&&void 0!==l[3]?l[3]:"",e.prev=1,e.next=4,p.Z.listCollages(o);case 4:return i=e.sent,t(i.collage_ids),n(i.next_token),c=i.collage_ids.map((function(e){return p.Z.getThumbnail(e)})),e.next=10,Promise.all(c);case 10:s=e.sent,r(H(s)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])}))),E.apply(this,arguments)}function F(){var e=(0,l.s0)(),t=(0,s.useState)(0),n=(0,o.Z)(t,2),u=n[0],w=n[1],k=(0,s.useState)(""),j=(0,o.Z)(k,2),C=j[0],S=j[1],P=(0,s.useState)([]),O=(0,o.Z)(P,2),R=O[0],M=O[1],_=(0,s.useState)([]),L=(0,o.Z)(_,2),H=L[0],E=L[1],F=(0,s.useState)(!1),V=(0,o.Z)(F,2),W=V[0],D=V[1],U=(0,s.useState)(""),X=(0,o.Z)(U,2),J=X[0],q=X[1],B=function(e){return E((function(t){return t.concat(e)}))},G=function(e){return M((function(t){return t.concat(e)}))},Y=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""!==(t="Loading collages")&&(q(t),D(!0)),e.next=3,z(B,S,G,C);case 3:D(!1),q("");case 4:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}(),K=(0,I.jsx)(A,{message:"Create a collage",handleClick:function(){return e("/collage/create")}}),Q=R.sort((function(e,t){return parseInt(e.collage_id,10)>parseInt(t.collage_id,10)?-1:1}));(0,s.useEffect)(Y,[]);var $=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,n,o,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!0,n=!1,o=(0,r.Z)(R),e.next=5,Promise.allSettled(o.map(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==r.optimized){e.next=9;break}return e.next=3,p.Z.checkOptimizeStatus(r.collage_id);case 3:if(!0!==e.sent.optimized){e.next=7;break}return n=!0,e.abrupt("return",(0,c.Z)((0,c.Z)({},r),{},{optimized:!0}));case 7:return t=!1,e.abrupt("return",r);case 9:return e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:s=e.sent,!0===n&&M(s.map((function(e){return e.value}))),!1===t&&setTimeout((function(){return $()}),2e3);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)($,[R]);var ee=(0,I.jsx)(N,{createComponent:K,handleClick:function(t){e("/collage/".concat(t.collage_id))},handleImageLoad:function(){return w((function(e){return e+1}))},handleMoreClick:Y,items:Q,nextToken:C}),te=(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(f.Z,{children:[K,R.map((function(e){return(0,I.jsx)(m.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,I.jsx)(T,{title:(0,I.jsx)(g.Z,{type:"rectangular",sx:{width:"60%"}}),thumbnailImage:v,handleClick:function(){}})},e)}))]}),(0,I.jsx)(d.Z,{component:"div",sx:{display:"none"},children:ee})]});return(0,I.jsxs)(I.Fragment,{children:[R.length===H.length&&u>=R.length?ee:te,(0,I.jsx)(b.Z,{open:W,children:(0,I.jsx)(y.Z,{children:(0,I.jsxs)(x.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,I.jsx)(Z.Z,{}),(0,I.jsx)(h.Z,{variant:"h6",children:J})]})})})]})}N.defaultProps={items:[],createComponent:""},M.defaultProps={title:"Thumbnail Image"},_.defaultProps={title:"Thumbnail Image",imageSrc:"",handleImageLoad:function(){}},T.defaultProps={handleImageLoad:function(){}}},44183:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(4942),a=n(87462),o=n(63366),i=n(47313),c=n(83061),s=n(21921),l=n(25469),u=n(88564),d=n(77430),h=n(32298);function f(e){return(0,h.Z)("MuiCardActionArea",e)}var p=(0,d.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),m=n(38743),g=n(46417),v=["children","className","focusVisibleClassName"],b=(0,u.ZP)(m.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,n=e.theme;return t={display:"block",textAlign:"inherit",width:"100%"},(0,r.Z)(t,"&:hover .".concat(p.focusHighlight),{opacity:(n.vars||n).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,r.Z)(t,"&.".concat(p.focusVisible," .").concat(p.focusHighlight),{opacity:(n.vars||n).palette.action.focusOpacity}),t})),x=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,t){return t.focusHighlight}})((function(e){var t=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}})),Z=i.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiCardActionArea"}),r=n.children,i=n.className,u=n.focusVisibleClassName,d=(0,o.Z)(n,v),h=n,p=function(e){var t=e.classes;return(0,s.Z)({root:["root"],focusHighlight:["focusHighlight"]},f,t)}(h);return(0,g.jsxs)(b,(0,a.Z)({className:(0,c.Z)(p.root,i),focusVisibleClassName:(0,c.Z)(u,p.focusVisible),ref:t,ownerState:h},d,{children:[r,(0,g.jsx)(x,{className:p.focusHighlight,ownerState:h})]}))}))},1470:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(30168),a=n(63366),o=n(87462),i=n(47313),c=n(83061),s=n(30686),l=n(21921),u=n(30570),d=n(17551),h=n(88564),f=n(25469),p=n(77430),m=n(32298);function g(e){return(0,m.Z)("MuiSkeleton",e)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v,b,x,Z,y,w,k,j,C=n(46417),S=["animation","className","component","height","style","variant","width"],P=(0,s.F4)(y||(y=v||(v=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),O=(0,s.F4)(w||(w=b||(b=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),R=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((function(e){var t=e.theme,n=e.ownerState,r=(0,u.Wy)(t.shape.borderRadius)||"px",a=(0,u.YL)(t.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,d.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,s.iv)(k||(k=x||(x=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),P)}),(function(e){var t=e.ownerState,n=e.theme;return"wave"===t.animation&&(0,s.iv)(j||(j=Z||(Z=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),O,(n.vars||n).palette.action.hover)})),I=i.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiSkeleton"}),r=n.animation,i=void 0===r?"pulse":r,s=n.className,u=n.component,d=void 0===u?"span":u,h=n.height,p=n.style,m=n.variant,v=void 0===m?"text":m,b=n.width,x=(0,a.Z)(n,S),Z=(0,o.Z)({},n,{animation:i,component:d,variant:v,hasChildren:Boolean(x.children)}),y=function(e){var t=e.classes,n=e.variant,r=e.animation,a=e.hasChildren,o=e.width,i=e.height,c={root:["root",n,r,a&&"withChildren",a&&!o&&"fitContent",a&&!i&&"heightAuto"]};return(0,l.Z)(c,g,t)}(Z);return(0,C.jsx)(R,(0,o.Z)({as:d,ref:t,className:(0,c.Z)(y.root,s),ownerState:Z},x,{style:(0,o.Z)({width:b,height:h},p)}))}))},64586:function(e,t,n){e.exports=n.p+"static/media/image-loading.f1b4462988545d9c460a.png"},1413:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);