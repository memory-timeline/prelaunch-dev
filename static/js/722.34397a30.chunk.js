"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[722],{95739:function(t,e,n){var r=n(74165),a=n(15861),o=n(79105);function i(){return(i=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a={body:n,method:"PUT"},t.next=4,fetch(e,a).then((function(t){return t}));case 4:return o=t.sent,t.abrupt("return",o);case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}e.Z={newCollage:function(t,e){try{var n={collage_id:t};return o.Z.post("authbridge-stage.mymemorystore.in","/api/collage/new",n,JSON.stringify(e))}catch(r){return console.log(r),r}},saveCollage:function(t,e){try{var n={collage_id:t};return o.Z.post("authbridge-stage.mymemorystore.in","/api/collage/save",n,JSON.stringify(e))}catch(r){return console.log(r),r}},upload:function(t,e){return i.apply(this,arguments)},listCollages:function(t){try{var e={next_token:t};return o.Z.get("authbridge-stage.mymemorystore.in","/api/collage/list",e)}catch(n){return console.log(n),n}},getThumbnail:function(t){try{var e={collage_id:t};return o.Z.get("authbridge-stage.mymemorystore.in","/api/collage/thumbnail",e)}catch(n){return console.log(n),n}},getCollage:function(t){try{var e={collage_id:t};return o.Z.get("authbridge-stage.mymemorystore.in","/api/collage/get",e)}catch(n){return console.log(n),n}},deleteCollage:function(t){try{var e={collage_id:t};return o.Z.deleteMethod("authbridge-stage.mymemorystore.in","/api/collage/delete",e)}catch(n){return console.log(n),n}},checkOptimizeStatus:function(t){try{var e={collage_id:t};return o.Z.get("authbridge-stage.mymemorystore.in","/api/collage/resized-count",e)}catch(n){return console.log(n),n}}}},79105:function(t,e,n){var r=n(74165),a=n(1413),o=n(15861),i=n(31798),c=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e,n){var o,i,c,s,l,u=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=u.length>2&&void 0!==u[2]?u[2]:{},i="https://".concat(e).concat(n),c={method:"GET",credentials:"include",headers:new Headers({"content-type":"application/json"})},s=(0,a.Z)((0,a.Z)({},o),{},{client:"FRONTEND"}),i+="?".concat(new URLSearchParams(s).toString()),t.next=7,fetch(i,c);case 7:if((l=t.sent).ok){t.next=14;break}if(401!==l.status){t.next=12;break}return document.cookie="userInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",t.abrupt("return",{status:"unauthenticated"});case 12:if(403!==l.status){t.next=14;break}return t.abrupt("return",{status:"forbidden"});case 14:return t.abrupt("return",l.json());case 15:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),s=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e,n,o,i){var c,s,l;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="https://".concat(e).concat(n),s=(0,a.Z)((0,a.Z)({},o),{},{client:"FRONTEND"}),c+="?".concat(new URLSearchParams(s).toString()),l={method:"POST",credentials:"include",headers:new Headers({"content-type":"application/json"}),body:i},t.abrupt("return",fetch(c,l).then((function(t){return t.ok?t.json():{status:"error"}})));case 5:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),l=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e,n,o){var i,c,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i="https://".concat(e).concat(n),c=(0,a.Z)((0,a.Z)({},o),{},{client:"FRONTEND"}),i+="?".concat(new URLSearchParams(c).toString()),s={method:"DELETE",credentials:"include",headers:new Headers({"content-type":"application/json"})},t.abrupt("return",fetch(i,s).then((function(t){return t.ok?t.json():{status:"error"}})));case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();e.Z={get:c,post:s,deleteMethod:l,httpClient:function(t,e,n){var r=(0,a.Z)({},e),o=(0,a.Z)({},n),c="https://".concat("authbridge-stage.mymemorystore.in").concat(t);return r.client="FRONTEND",c+="?".concat(new URLSearchParams(r).toString()),o.credentials="include",o.headers||(o.headers=new Headers({Accept:"application/json"})),i.ZP.fetchJson(c,o)},encodeParams:function(t){return{pagination:encodeURIComponent(JSON.stringify(t.pagination)),filter:encodeURIComponent(JSON.stringify(t.filter)),sort:encodeURIComponent(JSON.stringify(t.sort))}}}},90325:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(9019),a=n(61113),o=n(56746),i=n(46417);function c(t){var e=t.handleMoreClick;return(0,i.jsx)(r.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,i.jsx)(o.Z,{handleClick:e,children:(0,i.jsx)(a.Z,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:"30px",borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}},82295:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(9019),a=n(46417);function o(t){var e=t.children;return(0,a.jsx)(r.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:e})}o.defaultProps={children:""}},56746:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(73428),a=n(44183),o=n(46417);function i(t){var e=t.handleClick,n=t.children;return(0,o.jsx)(a.Z,{onClick:e,children:(0,o.jsx)(r.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:{lg:430,md:380,xs:330},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:n})})}},28722:function(t,e,n){n.r(e),n.d(e,{default:function(){return z}});var r=n(93433),a=n(74165),o=n(29439),i=n(15861),c=n(1413),s=n(47313),l=n(58467),u=n(17551),d=n(57829),h=n(61113),f=n(82295),p=n(95739),m=n(9019),g=n(1470),v=n(64586),Z=n(94469),x=n(35898),b=n(85281),y=n(96467),C=n(90325),k=n(73428),w=n(16957),j=n(93405),S=n(54641),R=n(44183),P=n(24813),I=n(41434),N=n(46417);function A(t){var e=t.message,n=t.handleClick,r=(0,P.Z)((function(t){return t.breakpoints.down("md")}));return(0,N.jsx)(m.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,N.jsxs)(M,{handleClick:n,children:[(0,N.jsx)(h.Z,{variant:r?"body1":"h5",color:"button.main",sx:{p:1,color:"muted.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0,fontWeight:"bold"},children:e}),(0,N.jsx)(I.Z,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"create")}function T(t){var e=t.title;return(0,N.jsx)(j.Z,{children:(0,N.jsx)(S.Z,{disableTypography:!0,title:(0,N.jsx)(h.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",fontWeight:600,textAlign:"center"},children:e}),sx:{padding:0,color:"faded.black"}})})}function L(t){var e=t.imageSrc,n=t.title,r=t.handleImageLoad;return(0,N.jsx)(w.Z,{component:"img",src:e,alt:n,sx:{textAlign:"center",objectFit:"cover",height:"85%"},onLoad:r})}function M(t){var e=t.handleClick,n=t.children;return(0,N.jsx)(R.Z,{onClick:e,children:(0,N.jsx)(k.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:"40vh","&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:n})})}function O(t){var e=t.title,n=t.thumbnailImage,r=t.handleClick,a=t.handleImageLoad;return(0,N.jsxs)(M,{handleClick:r,children:[(0,N.jsx)(L,{imageSrc:n,title:e,handleImageLoad:a}),(0,N.jsx)(T,{title:e})]})}function _(t){var e=t.items,n=t.handleMoreClick,r=t.nextToken,a=t.handleImageLoad,o=t.createComponent,i=t.handleClick;return(0,N.jsxs)(m.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[o,e.map((function(t){return(0,N.jsxs)(m.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1,position:"relative"},children:[(0,N.jsx)(O,{title:t.title,thumbnailImage:t.photo.src,handleClick:function(){return!0===t.optimized?i(t):{}},handleImageLoad:a}),!1===t.optimized?(0,N.jsxs)(x.Z,{direction:"row",justifyContent:"center",alignItems:"center",spacing:2,sx:{position:"absolute",top:"50%",width:"100%",backgroundColor:(0,u.Fq)("#fff",.6),py:1,transform:"translate(0,-50%)"},children:[(0,N.jsx)(b.Z,{}),(0,N.jsx)(h.Z,{variant:"h6",color:"success",sx:{textAlign:"center",fontWeight:"bold"},children:"Optimizing ..."})]}):null]},t.title)})),r&&(0,N.jsx)(C.Z,{handleMoreClick:n})]})}function F(t){return t.map((function(t){return(0,c.Z)((0,c.Z)({},t),{},{photo:{title:t.collage_id,src:t.thumbnail_url}})}))}function H(t,e,n){return E.apply(this,arguments)}function E(){return E=(0,i.Z)((0,a.Z)().mark((function t(e,n,r){var o,i,c,s,l=arguments;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=l.length>3&&void 0!==l[3]?l[3]:"",t.prev=1,t.next=4,p.Z.listCollages(o);case 4:return i=t.sent,e(i.collage_ids),n(i.next_token),c=i.collage_ids.map((function(t){return p.Z.getThumbnail(t)})),t.next=10,Promise.all(c);case 10:s=t.sent,r(F(s)),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,14]])}))),E.apply(this,arguments)}function z(){var t=(0,l.s0)(),e=(0,s.useState)(0),n=(0,o.Z)(e,2),u=n[0],C=n[1],k=(0,s.useState)(""),w=(0,o.Z)(k,2),j=w[0],S=w[1],R=(0,s.useState)([]),P=(0,o.Z)(R,2),I=P[0],T=P[1],L=(0,s.useState)([]),M=(0,o.Z)(L,2),F=M[0],E=M[1],z=(0,s.useState)(!1),U=(0,o.Z)(z,2),J=U[0],V=U[1],W=(0,s.useState)(""),D=(0,o.Z)(W,2),X=D[0],q=D[1],B=function(t){return E((function(e){return e.concat(t)}))},G=function(t){return T((function(e){return e.concat(t)}))},Y=function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return""!==(e="Loading collages")&&(q(e),V(!0)),t.next=3,H(B,S,G,j);case 3:V(!1),q("");case 4:case"end":return t.stop()}var e}),t)})));return function(){return t.apply(this,arguments)}}(),K=(0,N.jsx)(A,{message:"Create a collage",handleClick:function(){return t("/collage/create")}}),Q=I.sort((function(t,e){return parseInt(t.collage_id,10)>parseInt(e.collage_id,10)?-1:1}));(0,s.useEffect)(Y,[]);var $=function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){var e,n,o,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!0,n=!1,o=(0,r.Z)(I),t.next=5,Promise.allSettled(o.map(function(){var t=(0,i.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==r.optimized){t.next=9;break}return t.next=3,p.Z.checkOptimizeStatus(r.collage_id);case 3:if(!0!==t.sent.optimized){t.next=7;break}return n=!0,t.abrupt("return",(0,c.Z)((0,c.Z)({},r),{},{optimized:!0}));case 7:return e=!1,t.abrupt("return",r);case 9:return t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 5:s=t.sent,!0===n&&T(s.map((function(t){return t.value}))),!1===e&&setTimeout((function(){return $()}),2e3);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(0,s.useEffect)($,[I]);var tt=(0,N.jsx)(_,{createComponent:K,handleClick:function(e){t("/collage/".concat(e.collage_id))},handleImageLoad:function(){return C((function(t){return t+1}))},handleMoreClick:Y,items:Q,nextToken:j}),et=(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(f.Z,{children:[K,I.map((function(t){return(0,N.jsx)(m.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,N.jsx)(O,{title:(0,N.jsx)(g.Z,{type:"rectangular",sx:{width:"60%"}}),thumbnailImage:v,handleClick:function(){}})},t)}))]}),(0,N.jsx)(d.Z,{component:"div",sx:{display:"none"},children:tt})]});return(0,N.jsxs)(N.Fragment,{children:[I.length===F.length&&u>=I.length?tt:et,(0,N.jsx)(Z.Z,{open:J,children:(0,N.jsx)(y.Z,{children:(0,N.jsxs)(x.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,N.jsx)(b.Z,{}),(0,N.jsx)(h.Z,{variant:"h6",children:X})]})})})]})}_.defaultProps={items:[],createComponent:""},T.defaultProps={title:"Thumbnail Image"},L.defaultProps={title:"Thumbnail Image",imageSrc:"",handleImageLoad:function(){}},O.defaultProps={handleImageLoad:function(){}}},44183:function(t,e,n){n.d(e,{Z:function(){return b}});var r=n(4942),a=n(87462),o=n(63366),i=n(47313),c=n(83061),s=n(21921),l=n(25469),u=n(88564),d=n(77430),h=n(32298);function f(t){return(0,h.Z)("MuiCardActionArea",t)}var p=(0,d.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),m=n(38743),g=n(46417),v=["children","className","focusVisibleClassName"],Z=(0,u.ZP)(m.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(t){var e,n=t.theme;return e={display:"block",textAlign:"inherit",width:"100%"},(0,r.Z)(e,"&:hover .".concat(p.focusHighlight),{opacity:(n.vars||n).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,r.Z)(e,"&.".concat(p.focusVisible," .").concat(p.focusHighlight),{opacity:(n.vars||n).palette.action.focusOpacity}),e})),x=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(t,e){return e.focusHighlight}})((function(t){var e=t.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}})),b=i.forwardRef((function(t,e){var n=(0,l.Z)({props:t,name:"MuiCardActionArea"}),r=n.children,i=n.className,u=n.focusVisibleClassName,d=(0,o.Z)(n,v),h=n,p=function(t){var e=t.classes;return(0,s.Z)({root:["root"],focusHighlight:["focusHighlight"]},f,e)}(h);return(0,g.jsxs)(Z,(0,a.Z)({className:(0,c.Z)(p.root,i),focusVisibleClassName:(0,c.Z)(u,p.focusVisible),ref:e,ownerState:h},d,{children:[r,(0,g.jsx)(x,{className:p.focusHighlight,ownerState:h})]}))}))},1470:function(t,e,n){n.d(e,{Z:function(){return N}});var r=n(30168),a=n(63366),o=n(87462),i=n(47313),c=n(83061),s=n(30686),l=n(21921),u=n(30570),d=n(17551),h=n(88564),f=n(25469),p=n(77430),m=n(32298);function g(t){return(0,m.Z)("MuiSkeleton",t)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v,Z,x,b,y,C,k,w,j=n(46417),S=["animation","className","component","height","style","variant","width"],R=(0,s.F4)(y||(y=v||(v=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),P=(0,s.F4)(C||(C=Z||(Z=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),I=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((function(t){var e=t.theme,n=t.ownerState,r=(0,u.Wy)(e.shape.borderRadius)||"px",a=(0,u.YL)(e.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,d.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(e.vars||e).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(t){return"pulse"===t.ownerState.animation&&(0,s.iv)(k||(k=x||(x=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),R)}),(function(t){var e=t.ownerState,n=t.theme;return"wave"===e.animation&&(0,s.iv)(w||(w=b||(b=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),P,(n.vars||n).palette.action.hover)})),N=i.forwardRef((function(t,e){var n=(0,f.Z)({props:t,name:"MuiSkeleton"}),r=n.animation,i=void 0===r?"pulse":r,s=n.className,u=n.component,d=void 0===u?"span":u,h=n.height,p=n.style,m=n.variant,v=void 0===m?"text":m,Z=n.width,x=(0,a.Z)(n,S),b=(0,o.Z)({},n,{animation:i,component:d,variant:v,hasChildren:Boolean(x.children)}),y=function(t){var e=t.classes,n=t.variant,r=t.animation,a=t.hasChildren,o=t.width,i=t.height,c={root:["root",n,r,a&&"withChildren",a&&!o&&"fitContent",a&&!i&&"heightAuto"]};return(0,l.Z)(c,g,e)}(b);return(0,j.jsx)(I,(0,o.Z)({as:d,ref:e,className:(0,c.Z)(y.root,s),ownerState:b},x,{style:(0,o.Z)({width:Z,height:h},p)}))}))},64586:function(t,e,n){t.exports=n.p+"static/media/image-loading.f1b4462988545d9c460a.png"}}]);