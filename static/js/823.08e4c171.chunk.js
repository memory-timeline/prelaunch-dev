"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[823],{61001:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1867),i=t(22492),a=t(6718),o=t(4567),l=t(66608),c=t(80184);function s(e){var n=e.imageSrc,t=e.imageSrcSet,i=e.title,a=e.handleImageLoad;return(0,c.jsx)(r.Z,{component:"img",src:n,srcSet:t,alt:i,sx:{borderColor:"muted.main",borderRadius:4,textAlign:"center",objectFit:"cover",height:{lg:270,sm:220,xs:170}},onLoad:a})}function d(e){var n=e.title,t=e.date;return(0,c.jsx)(i.Z,{children:(0,c.jsx)(a.Z,{disableTypography:!0,title:(0,c.jsx)(o.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:n}),subheader:(0,c.jsx)(o.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function u(e){var n=e.title,t=e.date,r=e.thumbnailImage,i=e.thumbnailImageSrcSet,a=e.handleClick,o=e.handleImageLoad;return(0,c.jsxs)(l.Z,{handleClick:a,children:[(0,c.jsx)(s,{imageSrc:r,imageSrcSet:i,title:n,handleImageLoad:o}),(0,c.jsx)(d,{title:n,date:t})]})}d.defaultProps={title:"Memory Thumbnail Image",date:"Memory Date"},s.defaultProps={title:"Memory Thumbnail Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},u.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){}}},66608:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(88588),i=t(81374),a=t(80184);function o(e){var n=e.handleClick,t=e.children;return(0,a.jsx)(i.Z,{onClick:n,children:(0,a.jsx)(r.Z,{elevation:0,sx:{bgcolor:"#fff",borderRadius:5,border:"2px solid gray",color:"black",position:"relative",height:{lg:350,sm:300,xs:250},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:t})})}},1823:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(29439),i=t(72791),a=t(57689),o=t(11087),l=t(43146),c=t(32234),s=t(53767),d=t(58751),u=t(52766),m=t(74165),h=t(15861),x=t(81153),f=t(64554),g=t(85239),p=t(61001),b=t(95193),j=t(4567),Z=t(58054),v=t(66608),y=t(80184);function S(){var e=(0,a.s0)(),n=(0,b.Z)((function(e){return e.breakpoints.down("md")}));return(0,y.jsx)(x.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,y.jsxs)(v.Z,{handleClick:function(){e("/memory/create")},children:[(0,y.jsx)(j.Z,{variant:n?"body1":"h5",color:"button.main",sx:{p:1,color:"secondary.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0},children:"Create a memory"}),(0,y.jsx)(Z.Z,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"creatememory")}function k(e){var n=e.handleMoreClick;return(0,y.jsx)(x.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,y.jsx)(v.Z,{handleClick:n,children:(0,y.jsx)(j.Z,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:{md:10,xs:"50%"},borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}function I(e){var n=e.memories,t=e.handleMoreClick,r=e.nextToken,i=e.handleImageLoad,o=(0,a.s0)(),l=n.sort((function(e,n){return e.memory_id>n.memory_id?1:-1}));return(0,y.jsxs)(x.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[(0,y.jsx)(S,{}),l.map((function(e){return(0,y.jsx)(x.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,y.jsx)(p.Z,{title:e.title,date:e.date,thumbnailImage:e.photo.src,thumbnailImageSrcSet:(n=e.photo,(n.images?n.images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",")),handleClick:function(){var n;o("/memory/".concat((n=e).memory_id),{state:n})},handleImageLoad:i})},e.title);var n})),r&&(0,y.jsx)(k,{handleMoreClick:t})]})}I.defaultProps={memories:[]};var w=t(85899),C=t(37846);function P(e,n,t){return M.apply(this,arguments)}function M(){return M=(0,h.Z)((0,m.Z)().mark((function e(n,t,r){var i,a,o,l=arguments;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>3&&void 0!==l[3]?l[3]:"",e.prev=1,e.next=4,w.Z.getMemories(i);case 4:if(!(a=e.sent)){e.next=13;break}if(!a.memories){e.next=13;break}return r(a.memories),e.next=10,Promise.all(w.Z.getThumbnails(a.memories));case 10:o=e.sent,n(o),t(a.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),M.apply(this,arguments)}function L(){var e=(0,i.useState)(""),n=(0,r.Z)(e,2),t=n[0],a=n[1],o=(0,i.useState)([]),l=(0,r.Z)(o,2),c=l[0],s=l[1],d=(0,i.useState)([]),u=(0,r.Z)(d,2),m=u[0],h=u[1],b=(0,i.useState)(0),j=(0,r.Z)(b,2),Z=j[0],v=j[1],k=(0,i.useState)(null),w=(0,r.Z)(k,2),M=w[0],L=w[1],R=function(){v((function(e){return e+1}))},_=function(e){return a(e)},D=function(e){h((function(n){return n.concat(e)}))},T=function(e){s((function(n){return n.concat(e)}))};return(0,i.useEffect)((function(){P(D,_,T,t)}),[]),(0,i.useEffect)((function(){L((0,y.jsx)(I,{memories:m,nextToken:t,handleMoreClick:function(){return P(D,_,T,t)},handleImageLoad:R}))}),[m,t]),m.length===c.length&&Z>=c.length?M:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(x.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[(0,y.jsx)(S,{}),c.map((function(e){return(0,y.jsx)(x.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,y.jsx)(p.Z,{title:(0,y.jsx)(g.Z,{type:"rectangular",sx:{width:"60%"}}),date:(0,y.jsx)(g.Z,{type:"rectangular",sx:{width:"50%"}}),thumbnailImage:C,handleClick:function(){}})},e)}))]}),(0,y.jsx)(f.Z,{component:"div",sx:{display:"none"},children:M})]})}function R(){return(0,y.jsx)(j.Z,{children:"Shared Memories"})}var _=t(11968),D=t.n(_),T=t(5849),W=t(36194),A=t(1867),E=t(22492),F=t(6718),O=t(88588),z=t(81374);function B(e){var n=e.handleClick,t=e.children;return(0,y.jsx)(z.Z,{onClick:n,children:(0,y.jsx)(O.Z,{elevation:0,sx:{bgcolor:"#fff",borderRadius:5,position:"relative"},children:t})})}function U(e){var n=e.imageSrc,t=e.imageSrcSet,r=e.title,i=e.handleImageLoad;return(0,y.jsx)(A.Z,{component:"img",src:n,srcSet:t,alt:r,sx:{borderColor:"muted.main",borderRadius:4,textAlign:"center",objectFit:"cover",height:{lg:400,sm:350,xs:350}},onLoad:i})}function V(e){var n=e.title,t=e.date;return(0,y.jsx)(E.Z,{children:(0,y.jsx)(F.Z,{disableTypography:!0,title:(0,y.jsx)(j.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:n}),subheader:(0,y.jsx)(j.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function q(e){var n=e.title,t=e.date,r=e.thumbnailImage,i=e.thumbnailImageSrcSet,a=e.handleClick,o=e.handleImageLoad;return(0,y.jsxs)(B,{handleClick:a,children:[(0,y.jsx)(U,{imageSrc:r,imageSrcSet:i,title:n,handleImageLoad:o}),(0,y.jsx)(V,{title:n,date:t})]})}function G(){return G=(0,h.Z)((0,m.Z)().mark((function e(n,t){var r,i,a,o=arguments;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>2&&void 0!==o[2]?o[2]:"",e.prev=1,e.next=4,w.Z.getPendingMemories(r);case 4:if(!(i=e.sent)){e.next=13;break}if(!i.memories){e.next=13;break}return console.log("review memories",i),e.next=10,Promise.all(w.Z.getPendingThumbnails(i.memories));case 10:a=e.sent,n(a),t(i.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),G.apply(this,arguments)}function H(e){var n=e.memoryID,t=(0,i.useState)(0),a=(0,r.Z)(t,2),o=a[0],l=a[1],c=(0,i.useState)(""),d=(0,r.Z)(c,2),u=d[0],m=d[1],h=(0,i.useState)(null),x=(0,r.Z)(h,2),g=x[0],p=x[1];console.log(n);var b=function(e){return m(e)},Z=function(e){p((function(n){return n.concat(e)}))};return(0,i.useEffect)((function(){!function(e,n){G.apply(this,arguments)}(Z,b,u)}),[]),g?(0,y.jsx)(f.Z,{sx:{display:"flex",width:"100%",backgroundColor:"transparent",backgroundSize:"cover",backgroundImage:"linear-gradient(white, #0e516a)",justifyContent:"center"},children:(0,y.jsxs)(s.Z,{direction:"column",alignItems:"center",sx:{width:"100%",my:3},children:[(0,y.jsxs)(s.Z,{direction:"row",justifyContent:"center",sx:{width:"100%"},children:[(0,y.jsx)(W.Z,{name:g[o].owner_details.name,email:g[o].owner_details.email,picture:g[o].owner_details.picture}),(0,y.jsx)(j.Z,{variant:"h6",sx:{px:1},children:g[o].owner_details.given_name})]}),(0,y.jsx)(j.Z,{sx:{mb:2},children:"has shared a memory with you"}),(0,y.jsx)(D(),{sx:{maxWidth:"700px",width:"95%"},indicators:!1,onChange:function(e){return l(e)},navButtonsAlwaysVisible:!0,autoPlay:!1,children:g.map((function(e){return(0,y.jsx)(s.Z,{direction:"column",spacing:1,alignItems:"center",children:(0,y.jsx)(q,{title:e.thumbnail.title,date:e.thumbnail.date,thumbnailImage:e.thumbnail.photo.src,thumbnailImageSrcSet:"",handleImageLoad:function(){},handleClick:function(){}})},e.thumbnail.memory_id)}))}),(0,y.jsxs)(s.Z,{direction:"row",sx:{m:1},children:[(0,y.jsx)(T.Z,{variant:"contained",color:"primary",sx:{m:1},children:(0,y.jsx)(j.Z,{variant:"h6",children:" Accept "})}),(0,y.jsx)(T.Z,{variant:"contained",color:"error",sx:{m:1},children:(0,y.jsx)(j.Z,{variant:"h6",children:" Reject "})})]})]})}):null}function J(e){var n=e.mode,t=e.handleChange;return(0,y.jsx)(s.Z,{direction:"row",justifyContent:"center",sx:{py:1,backgroundColor:"button.main"},children:(0,y.jsxs)(c.Z,{color:"primary",value:n,exclusive:!0,"aria-label":"Memory Modes",children:[(0,y.jsx)(l.Z,{value:"own",sx:{borderRadius:"30px"},onClick:t,children:"My Memories"}),(0,y.jsx)(l.Z,{value:"shared",onClick:t,children:"Shared With Me"}),(0,y.jsx)(l.Z,{value:"review",sx:{borderRadius:"30px"},onClick:t,children:(0,y.jsx)(d.Z,{badgeContent:99,color:"primary",children:"Review"})})]})})}function K(e){var n=e.mode,t=e.memoryID;return"own"===n?(0,y.jsx)(L,{}):"shared"===n?(0,y.jsx)(R,{}):"review"===n?(0,y.jsx)(H,{memoryID:t}):void 0}function N(e){var n=e.initMode,t=(0,a.UO)(),l=t.memoryMode,c=(0,o.lr)(),d=(0,r.Z)(c,1)[0],m=(0,i.useState)(n),h=(0,r.Z)(m,2),x=h[0],f=h[1];(0,i.useEffect)((function(){f(l||n)}),[l,n]),console.log(n,l,t,d);return(0,y.jsx)(u.Z,{children:(0,y.jsxs)(s.Z,{direction:"column",children:[(0,y.jsx)(J,{mode:x,handleChange:function(e,n){f(n)}}),(0,y.jsx)(K,{mode:x,memoryID:d.get("memoryID")})]})})}V.defaultProps={title:"Review Image",date:"Memory Date"},U.defaultProps={title:"Review Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},q.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){}},H.defaultProps={memoryID:""},K.defaultProps={memoryID:""}},37846:function(e,n,t){e.exports=t.p+"static/media/image-loading.b17d2768891dfe3ceb9d.gif"}}]);
//# sourceMappingURL=823.08e4c171.chunk.js.map