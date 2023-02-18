"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[730],{61001:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(1867),a=t(22492),o=t(6718),i=t(4567),c=t(66608),l=t(80184);function s(e){var n=e.imageSrc,t=e.imageSrcSet,a=e.title,o=e.handleImageLoad;return(0,l.jsx)(r.Z,{component:"img",src:n,srcSet:t,alt:a,sx:{borderColor:"muted.main",borderRadius:4,textAlign:"center",objectFit:"cover",height:{lg:270,sm:220,xs:170}},onLoad:o})}function u(e){var n=e.title,t=e.date;return(0,l.jsx)(a.Z,{children:(0,l.jsx)(o.Z,{disableTypography:!0,title:(0,l.jsx)(i.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:n}),subheader:(0,l.jsx)(i.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function d(e){var n=e.title,t=e.date,r=e.thumbnailImage,a=e.thumbnailImageSrcSet,o=e.handleClick,i=e.handleImageLoad;return(0,l.jsxs)(c.Z,{handleClick:o,children:[(0,l.jsx)(s,{imageSrc:r,imageSrcSet:a,title:n,handleImageLoad:i}),(0,l.jsx)(u,{title:n,date:t})]})}u.defaultProps={title:"Memory Thumbnail Image",date:"Memory Date"},s.defaultProps={title:"Memory Thumbnail Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},d.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){}}},66608:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(88588),a=t(81374),o=t(80184);function i(e){var n=e.handleClick,t=e.children;return(0,o.jsx)(a.Z,{onClick:n,children:(0,o.jsx)(r.Z,{elevation:0,sx:{bgcolor:"#fff",borderRadius:5,border:"2px solid gray",color:"black",position:"relative",height:{lg:350,sm:300,xs:250},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:t})})}},15730:function(e,n,t){t.r(n),t.d(n,{default:function(){return ae}});var r=t(29439),a=t(72791),o=t(57689),i=t(11087),c=t(43146),l=t(32234),s=t(53767),u=t(58751),d=t(52766),m=t(74165),h=t(15861),x=t(81153),f=t(64554),g=t(85239),p=t(61001),Z=t(95193),b=t(4567),j=t(58054),v=t(66608),y=t(80184);function k(){var e=(0,o.s0)(),n=(0,Z.Z)((function(e){return e.breakpoints.down("md")}));return(0,y.jsx)(x.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,y.jsxs)(v.Z,{handleClick:function(){e("/memory/create")},children:[(0,y.jsx)(b.Z,{variant:n?"body1":"h5",color:"button.main",sx:{p:1,color:"secondary.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0},children:"Create a memory"}),(0,y.jsx)(j.Z,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"creatememory")}function S(e){var n=e.handleMoreClick;return(0,y.jsx)(x.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,y.jsx)(v.Z,{handleClick:n,children:(0,y.jsx)(b.Z,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:{md:10,xs:"50%"},borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}function C(e){var n=e.memories,t=e.handleMoreClick,r=e.nextToken,a=e.handleImageLoad,o=e.create,i=e.handleClick,c=n.sort((function(e,n){return e.memory_id>n.memory_id?1:-1}));return(0,y.jsxs)(x.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[o?(0,y.jsx)(k,{}):null,c.map((function(e){return(0,y.jsx)(x.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,y.jsx)(p.Z,{title:e.title,date:e.date,thumbnailImage:e.photo.src,thumbnailImageSrcSet:(n=e.photo,(n.images?n.images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",")),handleClick:function(){return i(e)},handleImageLoad:a})},e.title);var n})),r&&(0,y.jsx)(S,{handleMoreClick:t})]})}C.defaultProps={memories:[]};var w=t(85899),I=t(37846);function P(e,n,t){return M.apply(this,arguments)}function M(){return M=(0,h.Z)((0,m.Z)().mark((function e(n,t,r){var a,o,i,c=arguments;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>3&&void 0!==c[3]?c[3]:"",e.prev=1,e.next=4,w.Z.getMemories(a);case 4:if(!(o=e.sent)){e.next=13;break}if(!o.memories){e.next=13;break}return r(o.memories),e.next=10,Promise.all(w.Z.getThumbnails(o.memories));case 10:i=e.sent,n(i),t(o.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),M.apply(this,arguments)}function L(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],i=n[1],c=(0,a.useState)([]),l=(0,r.Z)(c,2),s=l[0],u=l[1],d=(0,a.useState)([]),m=(0,r.Z)(d,2),h=m[0],Z=m[1],b=(0,a.useState)(0),j=(0,r.Z)(b,2),v=j[0],S=j[1],w=(0,a.useState)(null),M=(0,r.Z)(w,2),L=M[0],_=M[1],R=(0,o.s0)(),D=function(e){R("/memory/".concat(e.memory_id),{state:e})},T=function(){S((function(e){return e+1}))},E=function(e){return i(e)},A=function(e){Z((function(n){return n.concat(e)}))},W=function(e){u((function(n){return n.concat(e)}))};return(0,a.useEffect)((function(){P(A,E,W,t)}),[]),(0,a.useEffect)((function(){_((0,y.jsx)(C,{create:!0,memories:h,nextToken:t,handleMoreClick:function(){return P(A,E,W,t)},handleImageLoad:T,handleClick:D}))}),[h,t]),h.length===s.length&&v>=s.length?L:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(x.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[(0,y.jsx)(k,{}),s.map((function(e){return(0,y.jsx)(x.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,y.jsx)(p.Z,{title:(0,y.jsx)(g.Z,{type:"rectangular",sx:{width:"60%"}}),date:(0,y.jsx)(g.Z,{type:"rectangular",sx:{width:"50%"}}),thumbnailImage:I,handleClick:function(){}})},e)}))]}),(0,y.jsx)(f.Z,{component:"div",sx:{display:"none"},children:L})]})}function _(e,n,t){return R.apply(this,arguments)}function R(){return R=(0,h.Z)((0,m.Z)().mark((function e(n,t,r){var a,o,i,c=arguments;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>3&&void 0!==c[3]?c[3]:"",e.prev=1,e.next=4,w.Z.getAcceptedMemories(a);case 4:if(!(o=e.sent)){e.next=13;break}if(!o.memories){e.next=13;break}return r(o.memories),e.next=10,Promise.all(w.Z.getAcceptedThumbnails(o.memories));case 10:i=e.sent,n(i),t(o.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),R.apply(this,arguments)}function D(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],i=n[1],c=(0,a.useState)([]),l=(0,r.Z)(c,2),s=l[0],u=l[1],d=(0,a.useState)([]),m=(0,r.Z)(d,2),h=m[0],Z=m[1],b=(0,a.useState)(0),j=(0,r.Z)(b,2),v=j[0],k=j[1],S=(0,a.useState)(null),w=(0,r.Z)(S,2),P=w[0],M=w[1],L=(0,o.s0)(),R=function(e){L("/memory/shared/".concat(e.memory_id),{state:e})},D=function(){k((function(e){return e+1}))},T=function(e){return i(e)},E=function(e){e.map((function(e){return Z((function(n){return n.concat([e.thumbnail])}))}))},A=function(e){u((function(n){return n.concat(e)}))};return(0,a.useEffect)((function(){_(E,T,A,t)}),[]),(0,a.useEffect)((function(){M((0,y.jsx)(C,{create:!1,memories:h,nextToken:t,handleMoreClick:function(){return _(E,T,A,t)},handleImageLoad:D,handleClick:R}))}),[h,t]),h.length===s.length&&v>=s.length?P:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(x.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:s.map((function(e){return(0,y.jsx)(x.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,y.jsx)(p.Z,{title:(0,y.jsx)(g.Z,{type:"rectangular",sx:{width:"60%"}}),date:(0,y.jsx)(g.Z,{type:"rectangular",sx:{width:"50%"}}),thumbnailImage:I,handleClick:function(){}})},e)}))}),(0,y.jsx)(f.Z,{component:"div",sx:{display:"none"},children:P})]})}var T=t(5849);function E(e){var n=e.label,t=e.handleClick;return(0,y.jsx)(T.Z,{variant:"contained",color:"primary",sx:{m:1},onClick:t,children:(0,y.jsx)(b.Z,{variant:"h6",children:n})})}var A=t(11968),W=t.n(A),F=t(1867),O=t(22492),U=t(6718),z=t(88588),B=t(81374);function V(e){var n=e.handleClick,t=e.children;return(0,y.jsx)(B.Z,{onClick:n,children:(0,y.jsx)(z.Z,{elevation:0,sx:{bgcolor:"#fff",borderRadius:5,position:"relative"},children:t})})}function q(e){var n=e.imageSrc,t=e.imageSrcSet,r=e.title,a=e.handleImageLoad;return(0,y.jsx)(F.Z,{component:"img",src:n,srcSet:t,alt:r,sx:{borderColor:"muted.main",borderRadius:4,textAlign:"center",objectFit:"cover",height:{lg:400,sm:350,xs:350}},onLoad:a})}function G(e){var n=e.title,t=e.date;return(0,y.jsx)(O.Z,{children:(0,y.jsx)(U.Z,{disableTypography:!0,title:(0,y.jsx)(b.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:n}),subheader:(0,y.jsx)(b.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function H(e){var n=e.title,t=e.date,r=e.thumbnailImage,a=e.thumbnailImageSrcSet,o=e.handleClick,i=e.handleImageLoad;return(0,y.jsxs)(V,{handleClick:o,children:[(0,y.jsx)(q,{imageSrc:r,imageSrcSet:a,title:n,handleImageLoad:i}),(0,y.jsx)(G,{title:n,date:t})]})}function J(e){var n=e.memories,t=e.handleIndexChange;return(0,y.jsx)(W(),{sx:{maxWidth:"700px",width:"95%"},indicators:!1,onChange:function(e){return t(e)},navButtonsAlwaysVisible:!0,autoPlay:!1,children:n.map((function(e){return(0,y.jsx)(s.Z,{direction:"column",spacing:1,alignItems:"center",children:(0,y.jsx)(H,{title:e.thumbnail.title,date:e.thumbnail.date,thumbnailImage:e.thumbnail.photo.src,thumbnailImageSrcSet:(n=e.thumbnail.photo,(n.images?n.images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",")),handleImageLoad:function(){},handleClick:function(){}})},e.thumbnail.memory_id);var n}))})}G.defaultProps={title:"Review Image",date:"Memory Date"},q.defaultProps={title:"Review Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},H.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){}};var K=t(36194);function N(e){var n=e.name,t=e.email,r=e.picture;return(0,y.jsxs)(s.Z,{direction:"row",justifyContent:"center",sx:{width:"100%"},children:[(0,y.jsx)(K.S,{name:n,email:t,picture:r}),(0,y.jsx)(b.Z,{variant:"h6",sx:{px:1},children:n})]})}var Q=t(44700),X=t(9052);function Y(){return Y=(0,h.Z)((0,m.Z)().mark((function e(n,t){var r,a,o,i=arguments;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>2&&void 0!==i[2]?i[2]:"",e.prev=1,e.next=4,w.Z.getPendingMemories(r);case 4:if(!(a=e.sent)){e.next=13;break}if(!a.memories){e.next=13;break}return console.log("review memories",a),e.next=10,Promise.all(w.Z.getPendingThumbnails(a.memories));case 10:o=e.sent,n(o),t(a.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),Y.apply(this,arguments)}function $(){return($=(0,h.Z)((0,m.Z)().mark((function e(n,t){var r,a;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=X.Z.getUserInfo(),e.next=4,w.Z.acceptShare(n,r.email);case 4:a=e.sent,console.log(a),t(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function ee(){return(ee=(0,h.Z)((0,m.Z)().mark((function e(n,t){var r,a;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=X.Z.getUserInfo(),e.next=4,w.Z.rejectShare(n,r.email);case 4:a=e.sent,console.log(a),t(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function ne(e){var n=e.memoryID,t=(0,a.useState)(0),o=(0,r.Z)(t,2),i=o[0],c=o[1],l=(0,a.useState)(""),u=(0,r.Z)(l,2),d=u[0],m=u[1],h=(0,a.useState)([]),x=(0,r.Z)(h,2),g=x[0],p=x[1];console.log(n);var Z=(0,a.useState)(null),j=(0,r.Z)(Z,2),v=j[0],k=j[1],S=(0,a.useState)(null),C=(0,r.Z)(S,2),w=C[0],I=C[1],P=(0,a.useState)(null),M=(0,r.Z)(P,2),L=M[0],_=M[1],R=function(e,n){k(!0),I(e),_(n)},D=function(e){return m(e)},T=function(e){p((function(n){return n.concat(e)}))};(0,a.useEffect)((function(){!function(e,n){Y.apply(this,arguments)}(T,D,d)}),[]);var A=function(e){console.log("accept response",e),e.ok?R("Memory share accepted",!1):R("Error while accepting memory share",!0)},W=function(e){console.log("reject response",e),e.ok?R("Memory share rejected",!1):R("Error while rejecting memory share",!0)};return console.log("pending memories",g),g.length>0?(0,y.jsxs)(f.Z,{sx:{display:"flex",width:"100%",backgroundColor:"transparent",backgroundSize:"cover",backgroundImage:"linear-gradient(white, #0e516a)",justifyContent:"center"},children:[(0,y.jsxs)(s.Z,{direction:"column",alignItems:"center",sx:{width:"100%",my:3},children:[(0,y.jsx)(N,{name:g[i].owner_details.name,email:g[i].owner_details.email,picture:g[i].owner_details.picture}),(0,y.jsx)(b.Z,{sx:{mb:2},children:"has shared a memory with you"}),(0,y.jsx)(J,{memories:g,handleIndexChange:c}),(0,y.jsxs)(s.Z,{direction:"row",sx:{m:1},children:[(0,y.jsx)(E,{label:"Accept",color:"primary",handleClick:function(){var e=g[i].thumbnail.memory_id;!function(e,n){$.apply(this,arguments)}(e,A),console.log("accepting memoryID",e)}}),(0,y.jsx)(E,{label:"Reject",color:"error",handleClick:function(){var e=g[i].thumbnail.memory_id;!function(e,n){ee.apply(this,arguments)}(e,W),console.log("rejecting memoryID",e)}})]})]}),(0,y.jsx)(Q.Z,{snackBarOpen:v,message:w,onClose:function(){k(!1),I(null),_(null)},error:L})]}):null}function te(e){var n=e.mode,t=e.handleChange;return(0,y.jsx)(s.Z,{direction:"row",justifyContent:"center",sx:{py:1,backgroundColor:"button.main"},children:(0,y.jsxs)(l.Z,{color:"primary",value:n,exclusive:!0,"aria-label":"Memory Modes",children:[(0,y.jsx)(c.Z,{value:"own",sx:{borderRadius:"30px"},onClick:t,children:"My Memories"}),(0,y.jsx)(c.Z,{value:"shared",onClick:t,children:"Shared With Me"}),(0,y.jsx)(c.Z,{value:"review",sx:{borderRadius:"30px"},onClick:t,children:(0,y.jsx)(u.Z,{badgeContent:99,color:"primary",children:"Review"})})]})})}function re(e){var n=e.mode,t=e.memoryID;return"own"===n?(0,y.jsx)(L,{}):"shared"===n?(0,y.jsx)(D,{}):"review"===n?(0,y.jsx)(ne,{memoryID:t}):void 0}function ae(e){var n=e.initMode,t=(0,o.UO)(),c=t.memoryMode,l=(0,i.lr)(),u=(0,r.Z)(l,1)[0],m=(0,a.useState)(n),h=(0,r.Z)(m,2),x=h[0],f=h[1];(0,a.useEffect)((function(){f(c||n)}),[c,n]),console.log(n,c,t,u);return(0,y.jsx)(d.Z,{children:(0,y.jsxs)(s.Z,{direction:"column",children:[(0,y.jsx)(te,{mode:x,handleChange:function(e,n){f(n)}}),(0,y.jsx)(re,{mode:x,memoryID:u.get("memoryID")})]})})}ne.defaultProps={memoryID:""},re.defaultProps={memoryID:""}},37846:function(e,n,t){e.exports=t.p+"static/media/image-loading.b17d2768891dfe3ceb9d.gif"}}]);
//# sourceMappingURL=730.b3182178.chunk.js.map