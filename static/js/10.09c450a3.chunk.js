(this.webpackJsonpprelaunch=this.webpackJsonpprelaunch||[]).push([[10],{177:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(689),r=n(622),o=n(3);function c(e){var t=e.handleClick,n=e.children;return Object(o.jsx)(r.a,{onClick:t,children:Object(o.jsx)(a.a,{elevation:0,sx:{bgcolor:"#fff",borderRadius:5,border:"2px solid gray",color:"black",position:"relative",height:{lg:350,sm:300,xs:250},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:n})})}},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(690),r=n(691),o=n(693),c=n(50),i=n(177),s=n(3);function l(e){var t=e.imageSrc,n=e.imageSrcSet,r=e.title,o=e.handleImageLoad;return Object(s.jsx)(a.a,{component:"img",src:t,srcSet:n,alt:r,sx:{borderColor:"muted.main",borderRadius:4,textAlign:"center",objectFit:"cover",height:{lg:270,sm:220,xs:170}},onLoad:o})}function u(e){var t=e.title,n=e.date;return Object(s.jsx)(r.a,{children:Object(s.jsx)(o.a,{disableTypography:!0,title:Object(s.jsx)(c.a,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:t}),subheader:Object(s.jsx)(c.a,{sx:{color:"muted.main"},children:n}),sx:{padding:0,color:"faded.black"}})})}function d(e){var t=e.title,n=e.date,a=e.thumbnailImage,r=e.thumbnailImageSrcSet,o=e.handleClick,c=e.handleImageLoad;return Object(s.jsxs)(i.a,{handleClick:o,children:[Object(s.jsx)(l,{imageSrc:a,imgSrcSet:r,title:t,handleImageLoad:c}),Object(s.jsx)(u,{title:t,date:n})]})}u.defaultProps={title:"Memory Thumbnail Image",date:"Memory Date"},l.defaultProps={title:"Memory Thumbnail Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},d.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){}}},619:function(e,t,n){"use strict";var a=n(121);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(122)),o=n(3),c=(0,r.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddOutlined");t.default=c},622:function(e,t,n){"use strict";var a=n(6),r=n(1),o=n(5),c=n(0),i=n(7),s=n(108),l=n(17),u=n(13),d=n(87),b=n(109);function m(e){return Object(d.a)("MuiCardActionArea",e)}var h=Object(b.a)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),j=n(112),f=n(3),g=["children","className","focusVisibleClassName"],x=Object(u.a)(j.a,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,n=e.theme;return t={display:"block",textAlign:"inherit",width:"100%"},Object(a.a)(t,"&:hover .".concat(h.focusHighlight),{opacity:n.palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),Object(a.a)(t,"&.".concat(h.focusVisible," .").concat(h.focusHighlight),{opacity:n.palette.action.focusOpacity}),t})),p=Object(u.a)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,t){return t.focusHighlight}})((function(e){var t=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}})),O=c.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiCardActionArea"}),a=n.children,c=n.className,u=n.focusVisibleClassName,d=Object(o.a)(n,g),b=n,h=function(e){var t=e.classes;return Object(s.a)({root:["root"],focusHighlight:["focusHighlight"]},m,t)}(b);return Object(f.jsxs)(x,Object(r.a)({className:Object(i.a)(h.root,c),focusVisibleClassName:Object(i.a)(u,h.focusVisible),ref:t,ownerState:b},d,{children:[a,Object(f.jsx)(p,{className:h.focusHighlight,ownerState:b})]}))}));t.a=O},677:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n(10),r=n(135),o=n(136),c=n.n(o),i=n(0),s=n(681),l=n(94),u=n(686),d=n(218),b=n(4),m=n(202),h=n(652),j=n(50),f=n(619),g=n.n(f),x=n(177),p=n(3);function O(){var e=Object(b.g)(),t=Object(h.a)((function(e){return e.breakpoints.down("md")}));return Object(p.jsx)(s.a,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:Object(p.jsxs)(x.a,{handleClick:function(){e("/memory/create")},children:[Object(p.jsx)(j.a,{variant:t?"body1":"h5",color:"button.main",sx:{p:1,color:"secondary.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0},children:"Create a memory"}),Object(p.jsx)(g.a,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"creatememory")}function v(e){var t=e.handleMoreClick;return Object(p.jsx)(s.a,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:Object(p.jsx)(x.a,{handleClick:t,children:Object(p.jsx)(j.a,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:{md:10,xs:"50%"},borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}function y(e){var t=e.memories,n=e.handleMoreClick,a=e.nextToken,r=e.handleImageLoad,o=Object(b.g)(),c=t.sort((function(e,t){return e.memory_id>t.memory_id?1:-1}));return Object(p.jsxs)(s.a,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[Object(p.jsx)(O,{}),c.map((function(e){return Object(p.jsx)(s.a,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:Object(p.jsx)(m.a,{title:e.title,date:e.date,thumbnailImage:e.photo.src,thumbnailImageSrcSet:(t=e.photo,(t.images?t.images.map((function(e){var t=e.src,n=e.width;return"".concat(t," ").concat(n,"w")})):[]).join(",")),handleClick:function(){var t;o("/memory/".concat((t=e).memory_id),{state:t})},handleImageLoad:r})},e.title);var t})),a&&Object(p.jsx)(v,{handleMoreClick:n})]})}y.defaultProps={memories:[]};var C=n(149),k=n(349);function S(e,t,n,a,r){return I.apply(this,arguments)}function I(){return I=Object(r.a)(c.a.mark((function e(t,n,a,r,o){var i,s,l,u=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>5&&void 0!==u[5]?u[5]:"",e.prev=1,e.next=4,C.a.getMemories(t,n,i);case 4:if(s=e.sent,console.log(s),!s){e.next=13;break}return o(s),e.next=10,Promise.all(C.a.getThumbnails(t,n,s));case 10:l=e.sent,a(l),r(s.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),I.apply(this,arguments)}function w(e){var t=e.bucket,n=e.authURL,r=Object(i.useState)(""),o=Object(a.a)(r,2),c=o[0],b=o[1],h=Object(i.useState)([]),j=Object(a.a)(h,2),f=j[0],g=j[1],x=Object(i.useState)([]),v=Object(a.a)(x,2),C=v[0],I=v[1],w=Object(i.useState)(0),M=Object(a.a)(w,2),A=M[0],L=M[1],R=Object(i.useState)(null),H=Object(a.a)(R,2),N=H[0],V=H[1],_=function(){console.log("Image loaded",A),L((function(e){return e+1}))},P=function(e){return b(e)},T=function(e){I((function(t){return t.concat(e)}))},E=function(e){g((function(t){return t.concat(e)}))};return Object(i.useEffect)((function(){S(t,n,T,P,E,c)}),[]),Object(i.useEffect)((function(){return function(){console.log(C,c);var e=Object(p.jsx)(d.a,{children:Object(p.jsx)(y,{memories:C,nextToken:c,handleMoreClick:function(){return S(t,n,T,P,c)},handleImageLoad:_})});V(e)}()}),[C,c]),console.log(C.length,f.length,A),C.length===f.length&&A>=f.length?N:Object(p.jsxs)(d.a,{children:[Object(p.jsxs)(s.a,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[Object(p.jsx)(O,{}),f.map((function(e){return Object(p.jsx)(s.a,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:Object(p.jsx)(m.a,{title:Object(p.jsx)(u.a,{type:"rectangular",sx:{width:"60%"}}),date:Object(p.jsx)(u.a,{type:"rectangular",sx:{width:"50%"}}),thumbnailImage:k.a,handleClick:function(){}})},e)}))]}),Object(p.jsx)(l.a,{component:"div",sx:{display:"none"},children:N})]})}}}]);
//# sourceMappingURL=10.09c450a3.chunk.js.map