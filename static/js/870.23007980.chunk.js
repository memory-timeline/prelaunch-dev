"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[870],{94606:function(t,e,n){var r=n(74165),a=n(15861),o=n(17381);function i(){return(i=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a={body:n,method:"PUT"},t.next=4,fetch(e,a).then((function(t){return t}));case 4:return o=t.sent,t.abrupt("return",o);case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}e.Z={newCollage:function(t,e){try{var n={collage_id:t};return o.Z.post("authbridge-stage.mymemorystore.in","/api/collage/new",n,JSON.stringify(e))}catch(r){return console.log(r),r}},saveCollage:function(t,e){try{var n={collage_id:t};return o.Z.post("authbridge-stage.mymemorystore.in","/api/collage/save",n,JSON.stringify(e))}catch(r){return console.log(r),r}},upload:function(t,e){return i.apply(this,arguments)},listCollages:function(t){try{var e={next_token:t};return o.Z.get("authbridge-stage.mymemorystore.in","/api/collage/list",e)}catch(n){return console.log(n),n}},getThumbnail:function(t){try{var e={collage_id:t};return o.Z.get("authbridge-stage.mymemorystore.in","/api/collage/thumbnail",e)}catch(n){return console.log(n),n}},getCollage:function(t){try{var e={collage_id:t};return o.Z.get("authbridge-stage.mymemorystore.in","/api/collage/get",e)}catch(n){return console.log(n),n}},deleteCollage:function(t){try{var e={collage_id:t};return o.Z.deleteMethod("authbridge-stage.mymemorystore.in","/api/collage/delete",e)}catch(n){return console.log(n),n}}}},17381:function(t,e,n){var r=n(74165),a=n(15861),o=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,o,i,c,s=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.length>2&&void 0!==s[2]?s[2]:{},o="https://".concat(e).concat(n),i={method:"GET",credentials:"include",headers:new Headers({"content-type":"application/json"})},o+="?".concat(new URLSearchParams(a).toString()),t.next=6,fetch(o,i);case 6:if((c=t.sent).ok){t.next=13;break}if(401!==c.status){t.next=11;break}return document.cookie="userInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",t.abrupt("return",{status:"unauthenticated"});case 11:if(403!==c.status){t.next=13;break}return t.abrupt("return",{status:"forbidden"});case 13:return t.abrupt("return",c.json());case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),i=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e,n,a,o){var i,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i="https://".concat(e).concat(n),i+="?".concat(new URLSearchParams(a).toString()),c={method:"POST",credentials:"include",headers:new Headers({"content-type":"application/json"}),body:o},t.abrupt("return",fetch(i,c).then((function(t){return t.ok?t.json():{status:"error"}})));case 4:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),c=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e,n,a){var o,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="https://".concat(e).concat(n),o+="?".concat(new URLSearchParams(a).toString()),i={method:"DELETE",credentials:"include",headers:new Headers({"content-type":"application/json"})},t.abrupt("return",fetch(o,i).then((function(t){return t.ok?t.json():{status:"error"}})));case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();e.Z={get:o,post:i,deleteMethod:c}},20903:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(95193),a=n(61889),o=n(20890),i=n(58054),c=n(32067),s=n(80184);function l(t){var e=t.message,n=t.handleClick,l=(0,r.Z)((function(t){return t.breakpoints.down("md")}));return(0,s.jsx)(a.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,s.jsxs)(c.Z,{handleClick:n,children:[(0,s.jsx)(o.Z,{variant:l?"body1":"h5",color:"button.main",sx:{p:1,color:"secondary.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0},children:e}),(0,s.jsx)(i.Z,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"create")}},92674:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(61889),a=n(36194),o=n(51687),i=n(20890),c=n(32067),s=n(80184);function l(t){var e=t.handleMoreClick;return(0,s.jsx)(r.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,s.jsx)(c.Z,{handleClick:e,children:(0,s.jsx)(i.Z,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:"30px",borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}function u(t){var e=t.items,n=t.handleMoreClick,i=t.nextToken,c=t.handleImageLoad,u=t.createComponent,d=t.handleClick;return(0,s.jsxs)(r.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[u,e.map((function(t){return(0,s.jsx)(r.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,s.jsx)(o.Z,{title:t.title,date:t.date,avatar:t.owner?(0,s.jsx)(a.S,{name:t.owner.name,picture:t.owner.picture,email:t.owner.email}):null,shared:t.shared,thumbnailImage:t.photo.src,thumbnailImageSrcSet:(e=t.photo,(e.images?e.images.map((function(t){var e=t.src,n=t.width;return"".concat(e," ").concat(n,"w")})):[]).join(",")),handleClick:function(){return d(t)},handleImageLoad:c})},t.title);var e})),i&&(0,s.jsx)(l,{handleMoreClick:n})]})}u.defaultProps={items:[],createComponent:""}},90767:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(61889),a=n(33402),o=n(51687),i=n(64586),c=n(80184);function s(t){var e=t.memory;return(0,c.jsx)(r.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,c.jsx)(o.Z,{title:(0,c.jsx)(a.Z,{type:"rectangular",sx:{width:"60%"}}),date:(0,c.jsx)(a.Z,{type:"rectangular",sx:{width:"50%"}}),thumbnailImage:i,handleClick:function(){}})},e)}},81307:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(61889),a=n(80184);function o(t){var e=t.children;return(0,a.jsx)(r.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:e})}o.defaultProps={children:""}},51687:function(t,e,n){n.d(e,{Z:function(){return h}});var r=n(42169),a=n(39504),o=n(9585),i=n(20890),c=n(81918),s=n(32067),l=n(80184);function u(t){var e=t.imageSrc,n=t.imageSrcSet,a=t.title,o=t.handleImageLoad;return(0,l.jsx)(r.Z,{component:"img",src:e,srcSet:n,alt:a,sx:{textAlign:"center",objectFit:"cover",height:{lg:350,md:300,xs:250}},onLoad:o})}function d(t){var e=t.title,n=t.date,r=t.avatar,s=t.shared;return(0,l.jsx)(a.Z,{children:(0,l.jsx)(o.Z,{disableTypography:!0,avatar:r,title:(0,l.jsxs)(i.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:[e,""!==s?(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)(c.Z,{label:s,size:"small",variant:"filled",color:"Shared"===s?"success":"default",sx:{height:"auto"}})]}):null]}),subheader:(0,l.jsx)(i.Z,{sx:{color:"muted.main"},children:n}),sx:{padding:0,color:"faded.black"}})})}function h(t){var e=t.title,n=t.date,r=t.avatar,a=t.shared,o=t.thumbnailImage,i=t.thumbnailImageSrcSet,c=t.handleClick,h=t.handleImageLoad;return(0,l.jsxs)(s.Z,{handleClick:c,children:[(0,l.jsx)(u,{imageSrc:o,imageSrcSet:i,title:e,handleImageLoad:h}),(0,l.jsx)(d,{title:e,date:n,avatar:r,shared:a})]})}d.defaultProps={title:"Memory Thumbnail Image",date:"",avatar:"",shared:""},u.defaultProps={title:"Memory Thumbnail Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},h.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){},avatar:"",shared:""}},32067:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(57621),a=n(66647),o=n(80184);function i(t){var e=t.handleClick,n=t.children;return(0,o.jsx)(a.Z,{onClick:e,children:(0,o.jsx)(r.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:{lg:430,md:380,xs:330},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:n})})}},36870:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r=n(74165),a=n(29439),o=n(15861),i=n(1413),c=n(72791),s=n(57689),l=n(64554),u=n(20903),d=n(92674),h=n(90767),f=n(81307),m=n(94606),p=n(52766),g=n(80184);function v(t){return t.map((function(t){return(0,i.Z)((0,i.Z)({},t),{},{photo:{title:t.collage_id,src:t.thumbnail_url}})}))}function b(){return b=(0,o.Z)((0,r.Z)().mark((function t(e,n,a){var o,i,c,s,l=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=l.length>3&&void 0!==l[3]?l[3]:"",t.prev=1,t.next=4,m.Z.listCollages(o);case 4:return i=t.sent,e(i.collage_ids),n(i.next_token),c=i.collage_ids.map((function(t){return m.Z.getThumbnail(t)})),t.next=10,Promise.all(c);case 10:s=t.sent,a(v(s)),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,14]])}))),b.apply(this,arguments)}function x(){var t=(0,s.s0)(),e=(0,c.useState)(0),n=(0,a.Z)(e,2),r=n[0],o=n[1],i=(0,c.useState)(""),m=(0,a.Z)(i,2),v=m[0],x=m[1],Z=(0,c.useState)([]),y=(0,a.Z)(Z,2),w=y[0],j=y[1],C=(0,c.useState)([]),k=(0,a.Z)(C,2),S=k[0],P=k[1],O=function(t){return P((function(e){return e.concat(t)}))},I=function(t){return j((function(e){return e.concat(t)}))},R=function(){return function(t,e,n){return b.apply(this,arguments)}(O,x,I,v)},M=(0,g.jsx)(u.Z,{message:"Create a collage",handleClick:function(){return t("/collage/create")}}),A=w.sort((function(t,e){return parseInt(t.collage_id,10)>parseInt(e.collage_id,10)?1:-1}));(0,c.useEffect)(R,[]);var L=(0,g.jsx)(d.Z,{createComponent:M,handleClick:function(e){t("/collage/".concat(e.collage_id))},handleImageLoad:function(){return o((function(t){return t+1}))},handleMoreClick:R,items:A,nextToken:v}),_=(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(f.Z,{children:[M,w.map((function(t){return(0,g.jsx)(h.Z,{memory:t})}))]}),(0,g.jsx)(l.Z,{component:"div",sx:{display:"none"},children:L})]});return(0,g.jsx)(p.Z,{children:w.length===S.length&&r>=w.length?L:_})}},66647:function(t,e,n){n.d(e,{Z:function(){return Z}});var r=n(4942),a=n(87462),o=n(63366),i=n(72791),c=n(28182),s=n(94419),l=n(93736),u=n(47630),d=n(75878),h=n(21217);function f(t){return(0,h.Z)("MuiCardActionArea",t)}var m=(0,d.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),p=n(95080),g=n(80184),v=["children","className","focusVisibleClassName"],b=(0,u.ZP)(p.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(t){var e,n=t.theme;return e={display:"block",textAlign:"inherit",width:"100%"},(0,r.Z)(e,"&:hover .".concat(m.focusHighlight),{opacity:(n.vars||n).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,r.Z)(e,"&.".concat(m.focusVisible," .").concat(m.focusHighlight),{opacity:(n.vars||n).palette.action.focusOpacity}),e})),x=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(t,e){return e.focusHighlight}})((function(t){var e=t.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}})),Z=i.forwardRef((function(t,e){var n=(0,l.Z)({props:t,name:"MuiCardActionArea"}),r=n.children,i=n.className,u=n.focusVisibleClassName,d=(0,o.Z)(n,v),h=n,m=function(t){var e=t.classes;return(0,s.Z)({root:["root"],focusHighlight:["focusHighlight"]},f,e)}(h);return(0,g.jsxs)(b,(0,a.Z)({className:(0,c.Z)(m.root,i),focusVisibleClassName:(0,c.Z)(u,m.focusVisible),ref:e,ownerState:h},d,{children:[r,(0,g.jsx)(x,{className:m.focusHighlight,ownerState:h})]}))}))},33402:function(t,e,n){n.d(e,{Z:function(){return R}});var r=n(30168),a=n(63366),o=n(87462),i=n(72791),c=n(28182),s=n(52554),l=n(94419),u=n(61572),d=n(12065),h=n(47630),f=n(93736),m=n(75878),p=n(21217);function g(t){return(0,p.Z)("MuiSkeleton",t)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v,b,x,Z,y,w,j,C,k=n(80184),S=["animation","className","component","height","style","variant","width"],P=(0,s.F4)(y||(y=v||(v=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),O=(0,s.F4)(w||(w=b||(b=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),I=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((function(t){var e=t.theme,n=t.ownerState,r=(0,u.Wy)(e.shape.borderRadius)||"px",a=(0,u.YL)(e.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,d.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(e.vars||e).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(t){return"pulse"===t.ownerState.animation&&(0,s.iv)(j||(j=x||(x=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),P)}),(function(t){var e=t.ownerState,n=t.theme;return"wave"===e.animation&&(0,s.iv)(C||(C=Z||(Z=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),O,(n.vars||n).palette.action.hover)})),R=i.forwardRef((function(t,e){var n=(0,f.Z)({props:t,name:"MuiSkeleton"}),r=n.animation,i=void 0===r?"pulse":r,s=n.className,u=n.component,d=void 0===u?"span":u,h=n.height,m=n.style,p=n.variant,v=void 0===p?"text":p,b=n.width,x=(0,a.Z)(n,S),Z=(0,o.Z)({},n,{animation:i,component:d,variant:v,hasChildren:Boolean(x.children)}),y=function(t){var e=t.classes,n=t.variant,r=t.animation,a=t.hasChildren,o=t.width,i=t.height,c={root:["root",n,r,a&&"withChildren",a&&!o&&"fitContent",a&&!i&&"heightAuto"]};return(0,l.Z)(c,g,e)}(Z);return(0,k.jsx)(I,(0,o.Z)({as:d,ref:e,className:(0,c.Z)(y.root,s),ownerState:Z},x,{style:(0,o.Z)({width:b,height:h},m)}))}))},64586:function(t,e,n){t.exports=n.p+"static/media/image-loading.f1b4462988545d9c460a.png"},1413:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(4942);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}}}]);
//# sourceMappingURL=870.23007980.chunk.js.map