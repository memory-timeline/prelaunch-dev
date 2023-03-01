"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[949],{61001:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(1867),a=t(22492),o=t(6718),i=t(4567),c=t(85771),s=t(66608),l=t(80184);function u(e){var n=e.imageSrc,t=e.imageSrcSet,a=e.title,o=e.handleImageLoad;return(0,l.jsx)(r.Z,{component:"img",src:n,srcSet:t,alt:a,sx:{textAlign:"center",objectFit:"cover",height:{lg:350,md:300,xs:250}},onLoad:o})}function m(e){var n=e.title,t=e.date,r=e.avatar,s=e.shared;return(0,l.jsx)(a.Z,{children:(0,l.jsx)(o.Z,{disableTypography:!0,avatar:r,title:(0,l.jsxs)(i.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:[n,""!==s?(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)(c.Z,{label:s,size:"small",variant:"filled",color:"Shared"===s?"success":"default",sx:{height:"auto"}})]}):null]}),subheader:(0,l.jsx)(i.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function d(e){var n=e.title,t=e.date,r=e.avatar,a=e.shared,o=e.thumbnailImage,i=e.thumbnailImageSrcSet,c=e.handleClick,d=e.handleImageLoad;return(0,l.jsxs)(s.Z,{handleClick:c,children:[(0,l.jsx)(u,{imageSrc:o,imageSrcSet:i,title:n,handleImageLoad:d}),(0,l.jsx)(m,{title:n,date:t,avatar:r,shared:a})]})}m.defaultProps={title:"Memory Thumbnail Image",date:"Memory Date",avatar:"",shared:""},u.defaultProps={title:"Memory Thumbnail Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},d.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){},avatar:"",shared:""}},66608:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(88588),a=t(81374),o=t(80184);function i(e){var n=e.handleClick,t=e.children;return(0,o.jsx)(a.Z,{onClick:n,children:(0,o.jsx)(r.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:{lg:430,md:380,xs:330},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:t})})}},84949:function(e,n,t){t.r(n),t.d(n,{default:function(){return se}});var r=t(29439),a=t(72791),o=t(57689),i=t(11087),c=t(43146),s=t(32234),l=t(53767),u=t(58751),m=t(52766),d=t(74165),h=t(15861),f=t(64554),x=t(95193),g=t(81153),p=t(85239),v=t(61001),Z=t(64586),j=t(80184);function b(e){var n=e.memory;return(0,j.jsx)(g.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,j.jsx)(v.Z,{title:(0,j.jsx)(p.Z,{type:"rectangular",sx:{width:"60%"}}),date:(0,j.jsx)(p.Z,{type:"rectangular",sx:{width:"50%"}}),thumbnailImage:Z,handleClick:function(){}})},n)}function y(e){var n=e.children;return(0,j.jsx)(g.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:n})}y.defaultProps={children:""};var k=t(36194),w=t(4567),S=t(58054),I=t(66608);function C(){var e=(0,o.s0)(),n=(0,x.Z)((function(e){return e.breakpoints.down("md")}));return(0,j.jsx)(g.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,j.jsxs)(I.Z,{handleClick:function(){e("/memory/create")},children:[(0,j.jsx)(w.Z,{variant:n?"body1":"h5",color:"button.main",sx:{p:1,color:"secondary.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0},children:"Create a memory"}),(0,j.jsx)(S.Z,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"creatememory")}function M(e){var n=e.handleMoreClick;return(0,j.jsx)(g.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,j.jsx)(I.Z,{handleClick:n,children:(0,j.jsx)(w.Z,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:{md:10,xs:"50%"},borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}function P(e){var n=e.memories,t=e.handleMoreClick,r=e.nextToken,a=e.handleImageLoad,o=e.create,i=e.handleClick,c=n.sort((function(e,n){return e.memory_id>n.memory_id?1:-1}));return(0,j.jsxs)(g.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[o?(0,j.jsx)(C,{}):null,c.map((function(e){return(0,j.jsx)(g.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,j.jsx)(v.Z,{title:e.title,date:e.date,avatar:e.owner?(0,j.jsx)(k.S,{name:e.owner.name,picture:e.owner.picture,email:e.owner.email}):null,shared:e.shared,thumbnailImage:e.photo.src,thumbnailImageSrcSet:(n=e.photo,(n.images?n.images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",")),handleClick:function(){return i(e)},handleImageLoad:a})},e.title);var n})),r&&(0,j.jsx)(M,{handleMoreClick:t})]})}P.defaultProps={memories:[]};var L=t(85899);function _(e,n,t){return R.apply(this,arguments)}function R(){return R=(0,h.Z)((0,d.Z)().mark((function e(n,t,r){var a,o,i,c=arguments;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>3&&void 0!==c[3]?c[3]:"",e.prev=1,e.next=4,L.Z.getMemories(a);case 4:if(!(o=e.sent)){e.next=13;break}if(!o.memories){e.next=13;break}return r(o.memories),e.next=10,Promise.all(L.Z.getThumbnails(o.memories));case 10:i=e.sent,n(i),t(o.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),R.apply(this,arguments)}function D(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],i=n[1],c=(0,a.useState)([]),s=(0,r.Z)(c,2),l=s[0],u=s[1],m=(0,a.useState)([]),d=(0,r.Z)(m,2),h=d[0],g=d[1],p=(0,a.useState)(0),v=(0,r.Z)(p,2),Z=v[0],k=v[1],w=(0,a.useState)(null),S=(0,r.Z)(w,2),I=S[0],M=S[1],L=(0,o.s0)(),R=(0,x.Z)((function(e){return e.breakpoints.up("sm")})),D=function(e){L("/memory/".concat(e.memory_id),{state:e})},E=function(){return k((function(e){return e+1}))},T=function(e){return i(e)},A=function(e){return g((function(n){return n.concat(e)}))},W=function(e){return u((function(n){return n.concat(e)}))};return(0,a.useEffect)((function(){return _(A,T,W,t)}),[]),(0,a.useEffect)((function(){return console.log("above sm",R),void M((0,j.jsx)(P,{create:R,memories:h,nextToken:t,handleMoreClick:function(){return _(A,T,W,t)},handleImageLoad:E,handleClick:D}))}),[h,t,R]),console.log("I am in own memory",h),h.length===l.length&&Z>=l.length?I:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(y,{children:[R?(0,j.jsx)(C,{}):null,l.map((function(e){return(0,j.jsx)(b,{memory:e})}))]}),(0,j.jsx)(f.Z,{component:"div",sx:{display:"none"},children:I})]})}function E(e,n,t){return T.apply(this,arguments)}function T(){return T=(0,h.Z)((0,d.Z)().mark((function e(n,t,r){var a,o,i,c=arguments;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>3&&void 0!==c[3]?c[3]:"",e.prev=1,e.next=4,L.Z.getAcceptedMemories(a);case 4:if(!(o=e.sent)){e.next=13;break}if(!o.memories){e.next=13;break}return r(o.memories),e.next=10,Promise.all(L.Z.getAcceptedThumbnails(o.memories));case 10:i=e.sent,n(i),t(o.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),T.apply(this,arguments)}function A(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],i=n[1],c=(0,a.useState)([]),s=(0,r.Z)(c,2),l=s[0],u=s[1],m=(0,a.useState)([]),d=(0,r.Z)(m,2),h=d[0],x=d[1],g=(0,a.useState)(0),p=(0,r.Z)(g,2),v=p[0],Z=p[1],k=(0,a.useState)(null),w=(0,r.Z)(k,2),S=w[0],I=w[1],C=(0,o.s0)(),M=function(e){C("/memory/shared/".concat(e.memory_id),{state:e})},L=function(){return Z((function(e){return e+1}))},_=function(e){return i(e)},R=function(e){e.map((function(e){var n=e.thumbnail;return n.owner=e.owner_details,console.log("combined shared memory details",n),x((function(e){return e.concat([n])})),0}))},D=function(e){return u((function(n){return n.concat(e)}))};return(0,a.useEffect)((function(){return E(R,_,D,t)}),[]),(0,a.useEffect)((function(){I((0,j.jsx)(P,{create:!1,memories:h,nextToken:t,handleMoreClick:function(){return E(R,_,D,t)},handleImageLoad:L,handleClick:M}))}),[h,t]),h.length===l.length&&v>=l.length?S:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(y,{children:l.map((function(e){return(0,j.jsx)(b,{memory:e})}))}),(0,j.jsx)(f.Z,{component:"div",sx:{display:"none"},children:S})]})}var W=t(93433),F=t(71554),O=t(5849);function z(e){var n=e.label,t=e.handleClick,r=e.color;return(0,j.jsx)(O.Z,{variant:"contained",color:r,sx:{m:1},onClick:t,children:(0,j.jsx)(w.Z,{variant:"h6",children:n})})}var U=t(11968),B=t.n(U),V=t(1867),q=t(22492),G=t(6718),H=t(88588),J=t(81374);function K(e){var n=e.handleClick,t=e.children;return(0,j.jsx)(J.Z,{onClick:n,children:(0,j.jsx)(H.Z,{elevation:0,sx:{bgcolor:"#fff",borderRadius:5,position:"relative"},children:t})})}function N(e){var n=e.imageSrc,t=e.imageSrcSet,r=e.title,a=e.handleImageLoad;return(0,j.jsx)(V.Z,{component:"img",src:n,srcSet:t,alt:r,sx:{borderColor:"muted.main",borderRadius:4,textAlign:"center",objectFit:"cover",height:{lg:400,sm:350,xs:350}},onLoad:a})}function Q(e){var n=e.title,t=e.date;return(0,j.jsx)(q.Z,{children:(0,j.jsx)(G.Z,{disableTypography:!0,title:(0,j.jsx)(w.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:n}),subheader:(0,j.jsx)(w.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function X(e){var n=e.title,t=e.date,r=e.thumbnailImage,a=e.thumbnailImageSrcSet,o=e.handleClick,i=e.handleImageLoad;return console.log("rendering review item"),(0,j.jsxs)(K,{handleClick:o,children:[(0,j.jsx)(N,{imageSrc:r,imageSrcSet:a,title:n,handleImageLoad:i}),(0,j.jsx)(Q,{title:n,date:t})]})}function Y(e){var n=e.memories,t=e.handleIndexChange,o=e.picIndex,i=(0,a.useState)(n),c=(0,r.Z)(i,2),s=c[0],u=c[1];(0,a.useEffect)((function(){u(n)}),[n]),console.log("carousel items",s,o);return(0,j.jsx)(B(),{sx:{maxWidth:"700px",width:"95%"},indicators:!1,index:o,onChange:function(e){return t(e)},navButtonsAlwaysVisible:!0,autoPlay:!1,children:s.map((function(e){return(0,j.jsx)(l.Z,{direction:"column",spacing:1,alignItems:"center",children:(0,j.jsx)(X,{title:e.thumbnail.title,date:e.thumbnail.date,thumbnailImage:e.thumbnail.photo.src,thumbnailImageSrcSet:(n=e.thumbnail.photo,(n.images?n.images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",")),handleImageLoad:function(){},handleClick:function(){}})},e.thumbnail.memory_id);var n}))})}function $(e){var n=e.name,t=e.email,r=e.picture;return(0,j.jsxs)(l.Z,{direction:"row",justifyContent:"center",sx:{width:"100%"},children:[(0,j.jsx)(k.S,{name:n,email:t,picture:r}),(0,j.jsx)(w.Z,{variant:"h6",sx:{px:1},children:n})]})}Q.defaultProps={title:"Review Image",date:"Memory Date"},N.defaultProps={title:"Review Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},X.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){}};var ee=t(44700),ne=t(9052);function te(){return te=(0,h.Z)((0,d.Z)().mark((function e(n,t){var r,a,o,i=arguments;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>2&&void 0!==i[2]?i[2]:"",e.prev=1,e.next=4,L.Z.getPendingMemories(r);case 4:if(!(a=e.sent)){e.next=13;break}if(!a.memories){e.next=13;break}return console.log("review memories",a),e.next=10,Promise.all(L.Z.getPendingThumbnails(a.memories));case 10:o=e.sent,n(o),t(a.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),te.apply(this,arguments)}function re(){return(re=(0,h.Z)((0,d.Z)().mark((function e(n,t){var r,a;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=ne.Z.getUserInfo(),e.next=4,L.Z.acceptShare(n,r.email);case 4:a=e.sent,console.log(a),t(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function ae(){return(ae=(0,h.Z)((0,d.Z)().mark((function e(n,t){var r,a;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=ne.Z.getUserInfo(),e.next=4,L.Z.rejectShare(n,r.email);case 4:a=e.sent,console.log(a),t(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function oe(e){var n=e.memoryID,t=(0,a.useState)(0),o=(0,r.Z)(t,2),i=o[0],c=o[1],s=(0,a.useState)(""),u=(0,r.Z)(s,2),m=u[0],d=u[1],h=(0,a.useState)([]),x=(0,r.Z)(h,2),g=x[0],p=x[1],v=(0,a.useState)(null),Z=(0,r.Z)(v,2),b=Z[0],y=Z[1],k=(0,a.useState)(null),S=(0,r.Z)(k,2),I=S[0],C=S[1],M=(0,a.useState)(null),P=(0,r.Z)(M,2),L=P[0],_=P[1];(0,a.useEffect)((function(){if(g.length>0){var e=g.findIndex((function(e){return e.thumbnail.memory_id.toString()===n}));e>=0&&c(e)}}),[n,g]),console.log(n);var R=function(e,n){y(!0),C(e),_(n)},D=function(e){return d(e)},E=function(e){p((function(n){return n.concat(e)}))},T=function(){var e=g.length;if(console.log(e,i),1===e)p([]);else{var n=i;n===e-1&&c((function(e){return e-1})),p([].concat((0,W.Z)(g.slice(0,n)),(0,W.Z)(g.slice(n+1))))}};(0,a.useEffect)((function(){return function(e,n){return te.apply(this,arguments)}(E,D,m)}),[]);var A=function(e){console.log("accept response",e),e.ok?(R("Memory share accepted",!1),T()):R("Error while accepting memory share",!0)},O=function(e){console.log("reject response",e),e.ok?(R("Memory share rejected",!1),T()):R("Error while rejecting memory share",!0)};return console.log("pending memories",g,"picIndex",i,"memories count",g.length),g.length>0?(0,j.jsxs)(f.Z,{sx:{display:"flex",width:"100%",backgroundColor:"transparent",backgroundSize:"cover",backgroundImage:"linear-gradient(white, #0e516a)",justifyContent:"center"},children:[(0,j.jsxs)(l.Z,{direction:"column",alignItems:"center",sx:{width:"100%",my:3},children:[(0,j.jsx)($,{name:g[i].owner_details.name,email:g[i].owner_details.email,picture:g[i].owner_details.picture}),(0,j.jsx)(w.Z,{sx:{mb:2},children:"has shared a memory with you"}),(0,j.jsx)(Y,{memories:g,handleIndexChange:c,picIndex:i}),(0,j.jsxs)(l.Z,{direction:"row",sx:{m:1},children:[(0,j.jsx)(z,{label:"Accept",color:"primary",handleClick:function(){var e=g[i].thumbnail.memory_id;!function(e,n){re.apply(this,arguments)}(e,A),console.log("accepting memoryID",e)}}),(0,j.jsx)(z,{label:"Reject",color:"error",handleClick:function(){var e=g[i].thumbnail.memory_id;!function(e,n){ae.apply(this,arguments)}(e,O),console.log("rejecting memoryID",e)}})]})]}),(0,j.jsx)(ee.Z,{snackBarOpen:b,message:I,onClose:function(){y(!1),C(null),_(null)},error:L})]}):(0,j.jsxs)(l.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,sx:{position:"absolute",top:"50vh",right:"50vw",transform:"translate(50%, -50%)",backgroundColor:"form.input",boxShadow:10,padding:2},children:[(0,j.jsx)(F.Z,{}),(0,j.jsx)(w.Z,{variant:"h6",children:"Loading memories to review..."})]})}function ie(e){var n=e.mode,t=e.handleChange;return console.log("I am in memory modes"),(0,j.jsx)(l.Z,{direction:"row",justifyContent:"center",sx:{py:1,backgroundColor:"button.main"},children:(0,j.jsxs)(s.Z,{color:"primary",value:n,exclusive:!0,"aria-label":"Memory Modes",children:[(0,j.jsx)(c.Z,{value:"own",sx:{borderRadius:"30px"},onClick:t,children:"My Memories"}),(0,j.jsx)(c.Z,{value:"shared",onClick:t,children:"Shared With Me"}),(0,j.jsx)(c.Z,{value:"review",sx:{borderRadius:"30px"},onClick:t,children:(0,j.jsx)(u.Z,{badgeContent:99,color:"primary",children:"Review"})})]})})}function ce(e){var n=e.mode,t=e.memoryID;return"own"===n?(0,j.jsx)(D,{}):"shared"===n?(0,j.jsx)(A,{}):"review"===n?(0,j.jsx)(oe,{memoryID:t}):void 0}function se(e){var n=e.initMode,t=(0,o.UO)(),c=t.memoryMode,s=(0,i.lr)(),u=(0,r.Z)(s,1)[0],d=(0,a.useState)(n),h=(0,r.Z)(d,2),f=h[0],x=h[1];(0,a.useEffect)((function(){x(c||n)}),[c,n]),console.log(n,c,t,u);return(0,j.jsx)(m.Z,{create:!0,children:(0,j.jsxs)(l.Z,{direction:"column",children:[(0,j.jsx)(ie,{mode:f,handleChange:function(e,n){x(n)}}),(0,j.jsx)(ce,{mode:f,memoryID:u.get("memoryID")})]})})}oe.defaultProps={memoryID:""},ce.defaultProps={memoryID:""}},64586:function(e,n,t){e.exports=t.p+"static/media/image-loading.f1b4462988545d9c460a.png"}}]);
//# sourceMappingURL=949.e5d0ca63.chunk.js.map