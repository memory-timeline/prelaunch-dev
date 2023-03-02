"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[26],{61001:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(1867),a=t(22492),o=t(6718),i=t(4567),c=t(85771),l=t(66608),s=t(80184);function u(e){var n=e.imageSrc,t=e.imageSrcSet,a=e.title,o=e.handleImageLoad;return(0,s.jsx)(r.Z,{component:"img",src:n,srcSet:t,alt:a,sx:{textAlign:"center",objectFit:"cover",height:{lg:350,md:300,xs:250}},onLoad:o})}function d(e){var n=e.title,t=e.date,r=e.avatar,l=e.shared;return(0,s.jsx)(a.Z,{children:(0,s.jsx)(o.Z,{disableTypography:!0,avatar:r,title:(0,s.jsxs)(i.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:[n,""!==l?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)(c.Z,{label:l,size:"small",variant:"filled",color:"Shared"===l?"success":"default",sx:{height:"auto"}})]}):null]}),subheader:(0,s.jsx)(i.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function m(e){var n=e.title,t=e.date,r=e.avatar,a=e.shared,o=e.thumbnailImage,i=e.thumbnailImageSrcSet,c=e.handleClick,m=e.handleImageLoad;return(0,s.jsxs)(l.Z,{handleClick:c,children:[(0,s.jsx)(u,{imageSrc:o,imageSrcSet:i,title:n,handleImageLoad:m}),(0,s.jsx)(d,{title:n,date:t,avatar:r,shared:a})]})}d.defaultProps={title:"Memory Thumbnail Image",date:"Memory Date",avatar:"",shared:""},u.defaultProps={title:"Memory Thumbnail Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},m.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){},avatar:"",shared:""}},66608:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(88588),a=t(81374),o=t(80184);function i(e){var n=e.handleClick,t=e.children;return(0,o.jsx)(a.Z,{onClick:n,children:(0,o.jsx)(r.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:{lg:430,md:380,xs:330},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:t})})}},92026:function(e,n,t){t.r(n),t.d(n,{default:function(){return le}});var r=t(29439),a=t(72791),o=t(57689),i=t(11087),c=t(43146),l=t(32234),s=t(53767),u=t(52766),d=t(74165),m=t(15861),h=t(64554),x=t(95193),f=t(81153),g=t(85239),p=t(61001),j=t(64586),v=t(80184);function Z(e){var n=e.memory;return(0,v.jsx)(f.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,v.jsx)(p.Z,{title:(0,v.jsx)(g.Z,{type:"rectangular",sx:{width:"60%"}}),date:(0,v.jsx)(g.Z,{type:"rectangular",sx:{width:"50%"}}),thumbnailImage:j,handleClick:function(){}})},n)}function b(e){var n=e.children;return(0,v.jsx)(f.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:n})}b.defaultProps={children:""};var y=t(36194),k=t(4567),w=t(58054),S=t(66608);function I(){var e=(0,o.s0)(),n=(0,x.Z)((function(e){return e.breakpoints.down("md")}));return(0,v.jsx)(f.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,v.jsxs)(S.Z,{handleClick:function(){e("/memory/create")},children:[(0,v.jsx)(k.Z,{variant:n?"body1":"h5",color:"button.main",sx:{p:1,color:"secondary.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0},children:"Create a memory"}),(0,v.jsx)(w.Z,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"creatememory")}function C(e){var n=e.handleMoreClick;return(0,v.jsx)(f.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,v.jsx)(S.Z,{handleClick:n,children:(0,v.jsx)(k.Z,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:{md:10,xs:"50%"},borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}function P(e){var n=e.memories,t=e.handleMoreClick,r=e.nextToken,a=e.handleImageLoad,o=e.create,i=e.handleClick,c=n.sort((function(e,n){return e.memory_id>n.memory_id?1:-1}));return(0,v.jsxs)(f.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[o?(0,v.jsx)(I,{}):null,c.map((function(e){return(0,v.jsx)(f.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,v.jsx)(p.Z,{title:e.title,date:e.date,avatar:e.owner?(0,v.jsx)(y.S,{name:e.owner.name,picture:e.owner.picture,email:e.owner.email}):null,shared:e.shared,thumbnailImage:e.photo.src,thumbnailImageSrcSet:(n=e.photo,(n.images?n.images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",")),handleClick:function(){return i(e)},handleImageLoad:a})},e.title);var n})),r&&(0,v.jsx)(C,{handleMoreClick:t})]})}P.defaultProps={memories:[]};var M=t(85899);function _(e,n,t){return L.apply(this,arguments)}function L(){return L=(0,m.Z)((0,d.Z)().mark((function e(n,t,r){var a,o,i,c=arguments;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>3&&void 0!==c[3]?c[3]:"",e.prev=1,e.next=4,M.Z.getMemories(a);case 4:if(!(o=e.sent)){e.next=13;break}if(!o.memories){e.next=13;break}return r(o.memories),e.next=10,Promise.all(M.Z.getThumbnails(o.memories));case 10:i=e.sent,n(i),t(o.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),L.apply(this,arguments)}function R(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],i=n[1],c=(0,a.useState)([]),l=(0,r.Z)(c,2),s=l[0],u=l[1],d=(0,a.useState)([]),m=(0,r.Z)(d,2),f=m[0],g=m[1],p=(0,a.useState)(0),j=(0,r.Z)(p,2),y=j[0],k=j[1],w=(0,a.useState)(null),S=(0,r.Z)(w,2),C=S[0],M=S[1],L=(0,o.s0)(),R=(0,x.Z)((function(e){return e.breakpoints.up("sm")})),E=function(e){L("/memory/".concat(e.memory_id),{state:e})},T=function(){return k((function(e){return e+1}))},D=function(e){return i(e)},A=function(e){return g((function(n){return n.concat(e)}))},W=function(e){return u((function(n){return n.concat(e)}))};return(0,a.useEffect)((function(){return _(A,D,W,t)}),[]),(0,a.useEffect)((function(){return console.log("above sm",R),void M((0,v.jsx)(P,{create:R,memories:f,nextToken:t,handleMoreClick:function(){return _(A,D,W,t)},handleImageLoad:T,handleClick:E}))}),[f,t,R]),console.log("I am in own memory",f),f.length===s.length&&y>=s.length?C:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(b,{children:[R?(0,v.jsx)(I,{}):null,s.map((function(e){return(0,v.jsx)(Z,{memory:e})}))]}),(0,v.jsx)(h.Z,{component:"div",sx:{display:"none"},children:C})]})}var E=t(5849),T=t(36489);function D(e){var n=e.message,t=(0,o.s0)();return(0,v.jsxs)(s.Z,{direction:"column",justifyContent:"center",alignItems:"center",sx:{width:"95%",maxWidth:"500px",position:"fixed",top:"50%",right:"50%",transform:"translate(50%, -50%)",border:"2px solid gray",height:"60%",borderRadius:"10px"},children:[(0,v.jsx)(T.r,{fill:"gray",width:"64px",height:"64px"}),(0,v.jsx)(k.Z,{color:"gray",sx:{fontSize:"1.3rem"},children:n}),(0,v.jsx)(k.Z,{color:"gray",sx:{pb:8,fontSize:"1.3rem"},children:"Check again later."}),(0,v.jsx)(k.Z,{color:"primary",children:"In the mean time, you can"}),(0,v.jsx)(E.Z,{variant:"contained",onClick:function(){return t("/memory/create")},children:"Create a Memory"})]})}function A(e,n,t){return W.apply(this,arguments)}function W(){return W=(0,m.Z)((0,d.Z)().mark((function e(n,t,r){var a,o,i,c=arguments;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>3&&void 0!==c[3]?c[3]:"",e.prev=1,e.next=4,M.Z.getAcceptedMemories(a);case 4:if(!(o=e.sent)){e.next=13;break}if(!o.memories){e.next=13;break}return r(o.memories),e.next=10,Promise.all(M.Z.getAcceptedThumbnails(o.memories));case 10:i=e.sent,n(i),t(o.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),W.apply(this,arguments)}function z(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],i=n[1],c=(0,a.useState)([]),l=(0,r.Z)(c,2),s=l[0],u=l[1],d=(0,a.useState)([]),m=(0,r.Z)(d,2),x=m[0],f=m[1],g=(0,a.useState)(0),p=(0,r.Z)(g,2),j=p[0],y=p[1],k=(0,a.useState)(null),w=(0,r.Z)(k,2),S=w[0],I=w[1],C=(0,o.s0)(),M=function(e){C("/memory/shared/".concat(e.memory_id),{state:e})},_=function(){return y((function(e){return e+1}))},L=function(e){return i(e)},R=function(e){e.map((function(e){var n=e.thumbnail;return n.owner=e.owner_details,console.log("combined shared memory details",n),f((function(e){return e.concat([n])})),0}))},E=function(e){return u((function(n){return n.concat(e)}))};return(0,a.useEffect)((function(){return A(R,L,E,t)}),[]),(0,a.useEffect)((function(){x.length>0?I((0,v.jsx)(P,{create:!1,memories:x,nextToken:t,handleMoreClick:function(){return A(R,L,E,t)},handleImageLoad:_,handleClick:M})):I((0,v.jsx)(D,{message:"No shared memories right now."}))}),[x,t]),x.length===s.length&&j>=s.length?S:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b,{children:s.map((function(e){return(0,v.jsx)(Z,{memory:e})}))}),(0,v.jsx)(h.Z,{component:"div",sx:{display:"none"},children:S})]})}var F=t(93433);function O(e){var n=e.label,t=e.handleClick,r=e.color;return(0,v.jsx)(E.Z,{variant:"contained",color:r,sx:{m:1},onClick:t,children:(0,v.jsx)(k.Z,{variant:"h6",children:n})})}var U=t(11968),B=t.n(U),N=t(1867),V=t(22492),q=t(6718),G=t(88588),H=t(81374);function J(e){var n=e.handleClick,t=e.children;return(0,v.jsx)(H.Z,{onClick:n,children:(0,v.jsx)(G.Z,{elevation:0,sx:{bgcolor:"#fff",borderRadius:5,position:"relative"},children:t})})}function K(e){var n=e.imageSrc,t=e.imageSrcSet,r=e.title,a=e.handleImageLoad;return(0,v.jsx)(N.Z,{component:"img",src:n,srcSet:t,alt:r,sx:{borderColor:"muted.main",borderRadius:4,textAlign:"center",objectFit:"cover",height:{lg:400,sm:350,xs:350}},onLoad:a})}function Q(e){var n=e.title,t=e.date;return console.log("title, date",n,t),(0,v.jsx)(V.Z,{children:(0,v.jsx)(q.Z,{disableTypography:!0,title:(0,v.jsx)(k.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:n}),subheader:(0,v.jsx)(k.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function X(e){var n=e.title,t=e.date,r=e.thumbnailImage,a=e.thumbnailImageSrcSet,o=e.handleClick,i=e.handleImageLoad;return console.log("rendering review item"),(0,v.jsxs)(J,{handleClick:o,children:[(0,v.jsx)(K,{imageSrc:r,imageSrcSet:a,title:n,handleImageLoad:i}),(0,v.jsx)(Q,{title:n,date:t})]})}function Y(e){var n=e.memories,t=e.handleIndexChange,o=e.picIndex,i=e.handleImageLoad,c=(0,a.useState)(n),l=(0,r.Z)(c,2),u=l[0],d=l[1];(0,a.useEffect)((function(){d(n)}),[n]),console.log("carousel items",u,o);return(0,v.jsx)(B(),{sx:{maxWidth:"700px",width:"95%"},indicators:!1,index:o,onChange:function(e){return t(e)},navButtonsAlwaysVisible:!0,autoPlay:!1,children:u.map((function(e){return(0,v.jsx)(s.Z,{direction:"column",spacing:1,alignItems:"center",children:(0,v.jsx)(X,{title:e.thumbnail.title,date:e.thumbnail.date,thumbnailImage:e.thumbnail.photo.src,thumbnailImageSrcSet:(n=e.thumbnail.photo,(n.images?n.images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",")),handleImageLoad:i,handleClick:function(){}})},e.thumbnail.memory_id);var n}))})}function $(e){var n=e.name,t=e.email,r=e.picture;return(0,v.jsxs)(s.Z,{direction:"row",justifyContent:"center",alignItems:"center",sx:{width:"100%"},children:[(0,v.jsx)(y.S,{name:n,email:t,picture:r}),(0,v.jsx)(k.Z,{variant:"h6",sx:{px:1},children:n})]})}Q.defaultProps={title:"",date:""},K.defaultProps={title:"Review Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},X.defaultProps={title:"",date:"",thumbnailImageSrcSet:"",handleImageLoad:function(){}};var ee=t(44700),ne=t(9052);function te(){return te=(0,m.Z)((0,d.Z)().mark((function e(n,t,r){var a,o,i,c=arguments;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>3&&void 0!==c[3]?c[3]:"",e.prev=1,e.next=4,M.Z.getPendingMemories(a);case 4:if(!(o=e.sent)){e.next=14;break}if(!o.memories){e.next=14;break}return r(o.memories),console.log("review memories",o),e.next=11,Promise.all(M.Z.getPendingThumbnails(o.memories));case 11:i=e.sent,n(i),t(o.next_continuation_token||"");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])}))),te.apply(this,arguments)}function re(){return(re=(0,m.Z)((0,d.Z)().mark((function e(n,t){var r,a;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=ne.Z.getUserInfo(),e.next=4,M.Z.acceptShare(n,r.email);case 4:a=e.sent,console.log(a),t(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function ae(){return(ae=(0,m.Z)((0,d.Z)().mark((function e(n,t){var r,a;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=ne.Z.getUserInfo(),e.next=4,M.Z.rejectShare(n,r.email);case 4:a=e.sent,console.log(a),t(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function oe(e){var n=e.memoryID,t=(0,a.useState)(0),o=(0,r.Z)(t,2),i=o[0],c=o[1],l=(0,a.useState)([]),u=(0,r.Z)(l,2),d=u[0],m=u[1],x=(0,a.useState)(0),f=(0,r.Z)(x,2),p=f[0],Z=f[1],b=(0,a.useState)(""),y=(0,r.Z)(b,2),w=y[0],S=y[1],I=(0,a.useState)([]),C=(0,r.Z)(I,2),P=C[0],M=C[1],_=(0,a.useState)(null),L=(0,r.Z)(_,2),R=L[0],E=L[1],T=(0,a.useState)(null),A=(0,r.Z)(T,2),W=A[0],z=A[1],U=(0,a.useState)(null),B=(0,r.Z)(U,2),N=B[0],V=B[1],q=(0,a.useState)(null),G=(0,r.Z)(q,2),H=G[0],J=G[1];(0,a.useEffect)((function(){if(P.length>0){var e=P.findIndex((function(e){return e.thumbnail.memory_id.toString()===n}));e>=0&&Z(e)}}),[n,P]),console.log(n);var K=function(e,n){z(!0),V(e),J(n)},Q=function(){z(!1),V(null),J(null)},X=function(e){return S(e)},ne=function(){return c((function(e){return e+1}))},oe=function(e){return m((function(n){return n.concat(e)}))},ie=function(e){return M((function(n){return n.concat(e)}))},ce=function(){var e=P.length;if(console.log(e,p),1===e)M([]),m([]);else{var n=p,t=P[p].thumbnail.memory_id.toString(),r=d.filter((function(e){return e.memory_id!==t}));console.log(p,t,r),m(r),n===e-1&&Z((function(e){return e-1})),M([].concat((0,F.Z)(P.slice(0,n)),(0,F.Z)(P.slice(n+1))))}};(0,a.useEffect)((function(){!function(e,n,t){te.apply(this,arguments)}(ie,X,oe,w)}),[]);var le=function(e){console.log("accept response",e),e.ok?(K("Memory share accepted",!1),ce()):K("Error while accepting memory share",!0)},se=function(e){console.log("reject response",e),e.ok?(K("Memory share rejected",!1),ce()):K("Error while rejecting memory share",!0)},ue=function(){var e=P[p].thumbnail.memory_id;!function(e,n){re.apply(this,arguments)}(e,le),console.log("accepting memoryID",e)},de=function(){var e=P[p].thumbnail.memory_id;!function(e,n){ae.apply(this,arguments)}(e,se),console.log("rejecting memoryID",e)};return console.log("pending memories",P,"picIndex",p,"memories count",P.length),(0,a.useEffect)((function(){return function(){if(P.length>0){var e=(0,v.jsxs)(h.Z,{sx:{display:"flex",width:"100%",backgroundColor:"transparent",backgroundSize:"cover",backgroundImage:"linear-gradient(white, #0e516a)",justifyContent:"center"},children:[(0,v.jsxs)(s.Z,{direction:"column",alignItems:"center",sx:{width:"100%",my:3},children:[(0,v.jsx)($,{name:P.length>0?P[p].owner_details.name:"",email:P.length>0?P[p].owner_details.email:"P",picture:P.length>0?P[p].owner_details.picture:""}),(0,v.jsx)(k.Z,{sx:{mb:2},children:"has shared a memory with you"}),(0,v.jsx)(Y,{memories:P,handleIndexChange:Z,picIndex:p,handleImageLoad:ne}),(0,v.jsxs)(s.Z,{direction:"row",sx:{m:1},children:[(0,v.jsx)(O,{label:"Accept",color:"primary",handleClick:ue}),(0,v.jsx)(O,{label:"Reject",color:"error",handleClick:de})]})]}),(0,v.jsx)(ee.Z,{snackBarOpen:W,message:N,onClose:Q,error:H})]});E(e)}else E((0,v.jsx)(D,{message:"Nothing to review right now."}))}()}),[P,d,w]),console.log(P,d,i,P.length===d.length&&i>=d.length),P.length===d.length&&i>=d.length?R:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h.Z,{sx:{display:"flex",width:"100%",backgroundColor:"transparent",backgroundSize:"cover",backgroundImage:"linear-gradient(white, #0e516a)",justifyContent:"center"},children:(0,v.jsxs)(s.Z,{direction:"column",alignItems:"center",sx:{width:"100%",my:3},children:[(0,v.jsx)($,{name:(0,v.jsx)(g.Z,{type:"rectangular",sx:{width:"15%"}}),email:"P",picture:""}),(0,v.jsx)(k.Z,{sx:{mb:2},children:"has shared a memory with you"}),(0,v.jsx)(Y,{memories:[{thumbnail:{memory_id:2430549012,title:"default",date:"default",photo:{key:"key",src:j,width:667,height:500,alt:"alt",title:"Title",images:[]},shared:"Shared"},owner_details:{}}],handleIndexChange:function(){},picIndex:p,handleImageLoad:function(){}}),(0,v.jsxs)(s.Z,{direction:"row",sx:{m:1},children:[(0,v.jsx)(O,{label:"Accept",color:"primary",handleClick:ue}),(0,v.jsx)(O,{label:"Reject",color:"error",handleClick:de})]})]})}),(0,v.jsx)(h.Z,{component:"div",sx:{display:"none"},children:R})]})}function ie(e){var n=e.mode,t=e.handleChange;return console.log("I am in memory modes"),(0,v.jsx)(s.Z,{direction:"row",justifyContent:"center",sx:{py:1,backgroundColor:"button.main"},children:(0,v.jsxs)(l.Z,{color:"primary",value:n,exclusive:!0,"aria-label":"Memory Modes",children:[(0,v.jsx)(c.Z,{value:"own",sx:{borderRadius:"30px"},onClick:t,children:"My Memories"}),(0,v.jsx)(c.Z,{value:"shared",onClick:t,children:"Shared With Me"}),(0,v.jsx)(c.Z,{value:"review",sx:{borderRadius:"30px"},onClick:t,children:"Review"})]})})}function ce(e){var n=e.mode,t=e.memoryID;return"own"===n?(0,v.jsx)(R,{}):"shared"===n?(0,v.jsx)(z,{}):"review"===n?(0,v.jsx)(oe,{memoryID:t}):void 0}function le(e){var n=e.initMode,t=(0,o.UO)(),c=t.memoryMode,l=(0,i.lr)(),d=(0,r.Z)(l,1)[0],m=(0,a.useState)(n),h=(0,r.Z)(m,2),x=h[0],f=h[1];(0,a.useEffect)((function(){f(c||n)}),[c,n]),console.log(n,c,t,d);return(0,v.jsx)(u.Z,{create:!0,children:(0,v.jsxs)(s.Z,{direction:"column",children:[(0,v.jsx)(ie,{mode:x,handleChange:function(e,n){f(n)}}),(0,v.jsx)(ce,{mode:x,memoryID:d.get("memoryID")})]})})}oe.defaultProps={memoryID:""},ce.defaultProps={memoryID:""}},64586:function(e,n,t){e.exports=t.p+"static/media/image-loading.f1b4462988545d9c460a.png"}}]);
//# sourceMappingURL=26.6721884c.chunk.js.map