"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[722],{95739:function(e,t,n){var r=n(74165),a=n(15861),i=n(79105);function o(){return(o=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={body:n,method:"PUT"},e.next=4,fetch(t,a).then((function(e){return e}));case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}t.Z={newCollage:function(e,t){try{var n={collage_id:e};return i.Z.post("authbridge-stage.mymemorystore.in","/api/collage/new",n,JSON.stringify(t))}catch(r){return console.log(r),r}},saveCollage:function(e,t){try{var n={collage_id:e};return i.Z.post("authbridge-stage.mymemorystore.in","/api/collage/save",n,JSON.stringify(t))}catch(r){return console.log(r),r}},upload:function(e,t){return o.apply(this,arguments)},listCollages:function(e){try{var t={next_token:e};return i.Z.get("authbridge-stage.mymemorystore.in","/api/collage/list",t)}catch(n){return console.log(n),n}},getThumbnail:function(e){try{var t={collage_id:e};return i.Z.get("authbridge-stage.mymemorystore.in","/api/collage/thumbnail",t)}catch(n){return console.log(n),n}},getCollage:function(e){try{var t={collage_id:e};return i.Z.get("authbridge-stage.mymemorystore.in","/api/collage/get",t)}catch(n){return console.log(n),n}},deleteCollage:function(e){try{var t={collage_id:e};return i.Z.deleteMethod("authbridge-stage.mymemorystore.in","/api/collage/delete",t)}catch(n){return console.log(n),n}},checkOptimizeStatus:function(e){try{var t={collage_id:e};return i.Z.get("authbridge-stage.mymemorystore.in","/api/collage/resized-count",t)}catch(n){return console.log(n),n}}}},90325:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(9019),a=n(61113),i=n(56746),o=n(46417);function s(e){var t=e.handleMoreClick;return(0,o.jsx)(r.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,o.jsx)(i.Z,{handleClick:t,children:(0,o.jsx)(a.Z,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:"30px",borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}},82295:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(9019),a=n(46417);function i(e){var t=e.children;return(0,a.jsx)(r.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:t})}i.defaultProps={children:""}},56746:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(73428),a=n(44183),i=n(46417);function o(e){var t=e.handleClick,n=e.children;return(0,i.jsx)(a.Z,{onClick:t,children:(0,i.jsx)(r.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:{lg:430,md:380,xs:330},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:n})})}},28722:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var r=n(93433),a=n(74165),i=n(29439),o=n(15861),s=n(1413),l=n(47313),c=n(58467),u=n(17551),d=n(41806),h=n(61113),f=n(82295),m=n(95739),g=n(9019),p=n(1470),v=n(64586),x=n(94469),b=n(32195),Z=n(85281),y=n(96467),C=n(90325),k=n(73428),w=n(16957),j=n(93405),S=n(54641),R=n(44183),A=n(15300),I=n(41434),P=n(46417);function _(e){var t=e.message,n=e.handleClick,r=(0,A.Z)((function(e){return e.breakpoints.down("md")}));return(0,P.jsx)(g.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,P.jsxs)(N,{handleClick:n,children:[(0,P.jsx)(h.Z,{variant:r?"body1":"h5",color:"button.main",sx:{p:1,color:"muted.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0,fontWeight:"bold"},children:t}),(0,P.jsx)(I.Z,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"create")}function M(e){var t=e.title;return(0,P.jsx)(j.Z,{children:(0,P.jsx)(S.Z,{disableTypography:!0,title:(0,P.jsx)(h.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",fontWeight:600,textAlign:"center"},children:t}),sx:{padding:0,color:"faded.black"}})})}function L(e){var t=e.imageSrc,n=e.title,r=e.handleImageLoad;return(0,P.jsx)(w.Z,{component:"img",src:t,alt:n,sx:{textAlign:"center",objectFit:"cover",height:"85%"},onLoad:r})}function N(e){var t=e.handleClick,n=e.children;return(0,P.jsx)(R.Z,{onClick:t,children:(0,P.jsx)(k.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:"40vh","&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:n})})}function z(e){var t=e.title,n=e.thumbnailImage,r=e.handleClick,a=e.handleImageLoad;return(0,P.jsxs)(N,{handleClick:r,children:[(0,P.jsx)(L,{imageSrc:n,title:t,handleImageLoad:a}),(0,P.jsx)(M,{title:t})]})}function T(e){var t=e.items,n=e.handleMoreClick,r=e.nextToken,a=e.handleImageLoad,i=e.createComponent,o=e.handleClick;return(0,P.jsxs)(g.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[i,t.map((function(e){return(0,P.jsxs)(g.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1,position:"relative"},children:[(0,P.jsx)(z,{title:e.title,thumbnailImage:e.photo.src,handleClick:function(){return!0===e.optimized?o(e):{}},handleImageLoad:a}),!1===e.optimized?(0,P.jsxs)(b.Z,{direction:"row",justifyContent:"center",alignItems:"center",spacing:2,sx:{position:"absolute",top:"50%",width:"100%",backgroundColor:(0,u.Fq)("#fff",.6),py:1,transform:"translate(0,-50%)"},children:[(0,P.jsx)(Z.Z,{}),(0,P.jsx)(h.Z,{variant:"h6",color:"success",sx:{textAlign:"center",fontWeight:"bold"},children:"Optimizing ..."})]}):null]},e.title)})),r&&(0,P.jsx)(C.Z,{handleMoreClick:n})]})}function F(e){return e.map((function(e){return(0,s.Z)((0,s.Z)({},e),{},{photo:{title:e.collage_id,src:e.thumbnail_url}})}))}function O(e,t,n){return H.apply(this,arguments)}function H(){return H=(0,o.Z)((0,a.Z)().mark((function e(t,n,r){var i,o,s,l,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>3&&void 0!==c[3]?c[3]:"",e.prev=1,e.next=4,m.Z.listCollages(i);case 4:return o=e.sent,t(o.collage_ids),n(o.next_token),s=o.collage_ids.map((function(e){return m.Z.getThumbnail(e)})),e.next=10,Promise.all(s);case 10:l=e.sent,r(F(l)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])}))),H.apply(this,arguments)}function V(){var e=(0,c.s0)(),t=(0,l.useState)(0),n=(0,i.Z)(t,2),u=n[0],C=n[1],k=(0,l.useState)(""),w=(0,i.Z)(k,2),j=w[0],S=w[1],R=(0,l.useState)([]),A=(0,i.Z)(R,2),I=A[0],M=A[1],L=(0,l.useState)([]),N=(0,i.Z)(L,2),F=N[0],H=N[1],V=(0,l.useState)(!1),W=(0,i.Z)(V,2),X=W[0],E=W[1],q=(0,l.useState)(""),B=(0,i.Z)(q,2),J=B[0],U=B[1],Y=function(e){return H((function(t){return t.concat(e)}))},D=function(e){return M((function(t){return t.concat(e)}))},G=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""!==(t="Loading collages")&&(U(t),E(!0)),e.next=3,O(Y,S,D,j);case 3:E(!1),U("");case 4:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}(),K=(0,P.jsx)(_,{message:"Create a collage",handleClick:function(){return e("/collage/create")}}),Q=I.sort((function(e,t){return parseInt(e.collage_id,10)>parseInt(t.collage_id,10)?-1:1}));(0,l.useEffect)(G,[]);var $=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var t,n,i,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!0,n=!1,i=(0,r.Z)(I),e.next=5,Promise.allSettled(i.map(function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==r.optimized){e.next=9;break}return e.next=3,m.Z.checkOptimizeStatus(r.collage_id);case 3:if(!0!==e.sent.optimized){e.next=7;break}return n=!0,e.abrupt("return",(0,s.Z)((0,s.Z)({},r),{},{optimized:!0}));case 7:return t=!1,e.abrupt("return",r);case 9:return e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:l=e.sent,!0===n&&M(l.map((function(e){return e.value}))),!1===t&&setTimeout((function(){return $()}),2e3);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)($,[I]);var ee=(0,P.jsx)(T,{createComponent:K,handleClick:function(t){e("/collage/".concat(t.collage_id))},handleImageLoad:function(){return C((function(e){return e+1}))},handleMoreClick:G,items:Q,nextToken:j}),te=(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(f.Z,{children:[K,I.map((function(e){return(0,P.jsx)(g.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,P.jsx)(z,{title:(0,P.jsx)(p.Z,{type:"rectangular",sx:{width:"60%"}}),thumbnailImage:v,handleClick:function(){}})},e)}))]}),(0,P.jsx)(d.Z,{component:"div",sx:{display:"none"},children:ee})]});return(0,P.jsxs)(P.Fragment,{children:[I.length===F.length&&u>=I.length?ee:te,(0,P.jsx)(x.Z,{open:X,children:(0,P.jsx)(y.Z,{children:(0,P.jsxs)(b.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,P.jsx)(Z.Z,{}),(0,P.jsx)(h.Z,{variant:"h6",children:J})]})})})]})}T.defaultProps={items:[],createComponent:""},M.defaultProps={title:"Thumbnail Image"},L.defaultProps={title:"Thumbnail Image",imageSrc:"",handleImageLoad:function(){}},z.defaultProps={handleImageLoad:function(){}}},44183:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(4942),a=n(87462),i=n(63366),o=n(47313),s=n(2197),l=n(8007),c=n(31033),u=n(17592),d=n(14363),h=n(1167);function f(e){return(0,h.ZP)("MuiCardActionArea",e)}var m=(0,d.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),g=n(38743),p=n(46417),v=["children","className","focusVisibleClassName"],x=(0,u.ZP)(g.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,n=e.theme;return t={display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%"},(0,r.Z)(t,"&:hover .".concat(m.focusHighlight),{opacity:(n.vars||n).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,r.Z)(t,"&.".concat(m.focusVisible," .").concat(m.focusHighlight),{opacity:(n.vars||n).palette.action.focusOpacity}),t})),b=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,t){return t.focusHighlight}})((function(e){var t=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}})),Z=o.forwardRef((function(e,t){var n=(0,c.i)({props:e,name:"MuiCardActionArea"}),r=n.children,o=n.className,u=n.focusVisibleClassName,d=(0,i.Z)(n,v),h=n,m=function(e){var t=e.classes;return(0,l.Z)({root:["root"],focusHighlight:["focusHighlight"]},f,t)}(h);return(0,p.jsxs)(x,(0,a.Z)({className:(0,s.Z)(m.root,o),focusVisibleClassName:(0,s.Z)(u,m.focusVisible),ref:t,ownerState:h},d,{children:[r,(0,p.jsx)(b,{className:m.focusHighlight,ownerState:h})]}))}))},1470:function(e,t,n){n.d(t,{Z:function(){return P}});var r=n(30168),a=n(63366),i=n(87462),o=n(47313),s=n(2197),l=n(30686),c=n(8007),u=n(30570),d=n(17551),h=n(17592),f=n(31033),m=n(14363),g=n(1167);function p(e){return(0,g.ZP)("MuiSkeleton",e)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v,x,b,Z,y,C,k,w,j=n(46417),S=["animation","className","component","height","style","variant","width"],R=(0,l.F4)(y||(y=v||(v=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),A=(0,l.F4)(C||(C=x||(x=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),I=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((function(e){var t=e.theme,n=e.ownerState,r=(0,u.Wy)(t.shape.borderRadius)||"px",a=(0,u.YL)(t.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,d.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,l.iv)(k||(k=b||(b=(0,r.Z)(["\n      animation: "," 2s ease-in-out 0.5s infinite;\n    "]))),R)}),(function(e){var t=e.ownerState,n=e.theme;return"wave"===t.animation&&(0,l.iv)(w||(w=Z||(Z=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 2s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),A,(n.vars||n).palette.action.hover)})),P=o.forwardRef((function(e,t){var n=(0,f.i)({props:e,name:"MuiSkeleton"}),r=n.animation,o=void 0===r?"pulse":r,l=n.className,u=n.component,d=void 0===u?"span":u,h=n.height,m=n.style,g=n.variant,v=void 0===g?"text":g,x=n.width,b=(0,a.Z)(n,S),Z=(0,i.Z)({},n,{animation:o,component:d,variant:v,hasChildren:Boolean(b.children)}),y=function(e){var t=e.classes,n=e.variant,r=e.animation,a=e.hasChildren,i=e.width,o=e.height,s={root:["root",n,r,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]};return(0,c.Z)(s,p,t)}(Z);return(0,j.jsx)(I,(0,i.Z)({as:d,ref:t,className:(0,s.Z)(y.root,l),ownerState:Z},b,{style:(0,i.Z)({width:x,height:h},m)}))}))},64586:function(e,t,n){e.exports=n.p+"static/media/image-loading.f1b4462988545d9c460a.png"}}]);