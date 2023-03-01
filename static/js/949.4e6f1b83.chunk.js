"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[949],{61001:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(1867),a=t(22492),o=t(6718),i=t(4567),c=t(85771),s=t(66608),l=t(80184);function u(e){var n=e.imageSrc,t=e.imageSrcSet,a=e.title,o=e.handleImageLoad;return(0,l.jsx)(r.Z,{component:"img",src:n,srcSet:t,alt:a,sx:{textAlign:"center",objectFit:"cover",height:{lg:350,md:300,xs:250}},onLoad:o})}function m(e){var n=e.title,t=e.date,r=e.avatar,s=e.shared;return(0,l.jsx)(a.Z,{children:(0,l.jsx)(o.Z,{disableTypography:!0,avatar:r,title:(0,l.jsxs)(i.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:[n,""!==s?(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)(c.Z,{label:s,size:"small",variant:"filled",color:"Shared"===s?"success":"default",sx:{height:"auto"}})]}):null]}),subheader:(0,l.jsx)(i.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function d(e){var n=e.title,t=e.date,r=e.avatar,a=e.shared,o=e.thumbnailImage,i=e.thumbnailImageSrcSet,c=e.handleClick,d=e.handleImageLoad;return(0,l.jsxs)(s.Z,{handleClick:c,children:[(0,l.jsx)(u,{imageSrc:o,imageSrcSet:i,title:n,handleImageLoad:d}),(0,l.jsx)(m,{title:n,date:t,avatar:r,shared:a})]})}m.defaultProps={title:"Memory Thumbnail Image",date:"Memory Date",avatar:"",shared:""},u.defaultProps={title:"Memory Thumbnail Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},d.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){},avatar:"",shared:""}},66608:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(88588),a=t(81374),o=t(80184);function i(e){var n=e.handleClick,t=e.children;return(0,o.jsx)(a.Z,{onClick:n,children:(0,o.jsx)(r.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:{lg:430,md:380,xs:330},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:t})})}},84949:function(e,n,t){t.r(n),t.d(n,{default:function(){return ce}});var r=t(29439),a=t(72791),o=t(57689),i=t(11087),c=t(43146),s=t(32234),l=t(53767),u=t(52766),m=t(74165),d=t(15861),h=t(64554),f=t(95193),x=t(81153),g=t(85239),p=t(61001),v=t(64586),Z=t(80184);function j(e){var n=e.memory;return(0,Z.jsx)(x.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,Z.jsx)(p.Z,{title:(0,Z.jsx)(g.Z,{type:"rectangular",sx:{width:"60%"}}),date:(0,Z.jsx)(g.Z,{type:"rectangular",sx:{width:"50%"}}),thumbnailImage:v,handleClick:function(){}})},n)}function b(e){var n=e.children;return(0,Z.jsx)(x.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:n})}b.defaultProps={children:""};var y=t(36194),k=t(4567),S=t(58054),w=t(66608);function I(){var e=(0,o.s0)(),n=(0,f.Z)((function(e){return e.breakpoints.down("md")}));return(0,Z.jsx)(x.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,Z.jsxs)(w.Z,{handleClick:function(){e("/memory/create")},children:[(0,Z.jsx)(k.Z,{variant:n?"body1":"h5",color:"button.main",sx:{p:1,color:"secondary.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0},children:"Create a memory"}),(0,Z.jsx)(S.Z,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"creatememory")}function C(e){var n=e.handleMoreClick;return(0,Z.jsx)(x.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,Z.jsx)(w.Z,{handleClick:n,children:(0,Z.jsx)(k.Z,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:{md:10,xs:"50%"},borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}function M(e){var n=e.memories,t=e.handleMoreClick,r=e.nextToken,a=e.handleImageLoad,o=e.create,i=e.handleClick,c=n.sort((function(e,n){return e.memory_id>n.memory_id?1:-1}));return(0,Z.jsxs)(x.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[o?(0,Z.jsx)(I,{}):null,c.map((function(e){return(0,Z.jsx)(x.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,Z.jsx)(p.Z,{title:e.title,date:e.date,avatar:e.owner?(0,Z.jsx)(y.S,{name:e.owner.name,picture:e.owner.picture,email:e.owner.email}):null,shared:e.shared,thumbnailImage:e.photo.src,thumbnailImageSrcSet:(n=e.photo,(n.images?n.images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",")),handleClick:function(){return i(e)},handleImageLoad:a})},e.title);var n})),r&&(0,Z.jsx)(C,{handleMoreClick:t})]})}M.defaultProps={memories:[]};var P=t(85899);function L(e,n,t){return _.apply(this,arguments)}function _(){return _=(0,d.Z)((0,m.Z)().mark((function e(n,t,r){var a,o,i,c=arguments;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>3&&void 0!==c[3]?c[3]:"",e.prev=1,e.next=4,P.Z.getMemories(a);case 4:if(!(o=e.sent)){e.next=13;break}if(!o.memories){e.next=13;break}return r(o.memories),e.next=10,Promise.all(P.Z.getThumbnails(o.memories));case 10:i=e.sent,n(i),t(o.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),_.apply(this,arguments)}function R(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],i=n[1],c=(0,a.useState)([]),s=(0,r.Z)(c,2),l=s[0],u=s[1],m=(0,a.useState)([]),d=(0,r.Z)(m,2),x=d[0],g=d[1],p=(0,a.useState)(0),v=(0,r.Z)(p,2),y=v[0],k=v[1],S=(0,a.useState)(null),w=(0,r.Z)(S,2),C=w[0],P=w[1],_=(0,o.s0)(),R=(0,f.Z)((function(e){return e.breakpoints.up("sm")})),D=function(e){_("/memory/".concat(e.memory_id),{state:e})},E=function(){return k((function(e){return e+1}))},T=function(e){return i(e)},A=function(e){return g((function(n){return n.concat(e)}))},W=function(e){return u((function(n){return n.concat(e)}))};return(0,a.useEffect)((function(){return L(A,T,W,t)}),[]),(0,a.useEffect)((function(){return console.log("above sm",R),void P((0,Z.jsx)(M,{create:R,memories:x,nextToken:t,handleMoreClick:function(){return L(A,T,W,t)},handleImageLoad:E,handleClick:D}))}),[x,t,R]),console.log("I am in own memory",x),x.length===l.length&&y>=l.length?C:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(b,{children:[R?(0,Z.jsx)(I,{}):null,l.map((function(e){return(0,Z.jsx)(j,{memory:e})}))]}),(0,Z.jsx)(h.Z,{component:"div",sx:{display:"none"},children:C})]})}function D(e,n,t){return E.apply(this,arguments)}function E(){return E=(0,d.Z)((0,m.Z)().mark((function e(n,t,r){var a,o,i,c=arguments;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>3&&void 0!==c[3]?c[3]:"",e.prev=1,e.next=4,P.Z.getAcceptedMemories(a);case 4:if(!(o=e.sent)){e.next=13;break}if(!o.memories){e.next=13;break}return r(o.memories),e.next=10,Promise.all(P.Z.getAcceptedThumbnails(o.memories));case 10:i=e.sent,n(i),t(o.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),E.apply(this,arguments)}function T(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],i=n[1],c=(0,a.useState)([]),s=(0,r.Z)(c,2),l=s[0],u=s[1],m=(0,a.useState)([]),d=(0,r.Z)(m,2),f=d[0],x=d[1],g=(0,a.useState)(0),p=(0,r.Z)(g,2),v=p[0],y=p[1],k=(0,a.useState)(null),S=(0,r.Z)(k,2),w=S[0],I=S[1],C=(0,o.s0)(),P=function(e){C("/memory/shared/".concat(e.memory_id),{state:e})},L=function(){return y((function(e){return e+1}))},_=function(e){return i(e)},R=function(e){e.map((function(e){var n=e.thumbnail;return n.owner=e.owner_details,console.log("combined shared memory details",n),x((function(e){return e.concat([n])})),0}))},E=function(e){return u((function(n){return n.concat(e)}))};return(0,a.useEffect)((function(){return D(R,_,E,t)}),[]),(0,a.useEffect)((function(){I((0,Z.jsx)(M,{create:!1,memories:f,nextToken:t,handleMoreClick:function(){return D(R,_,E,t)},handleImageLoad:L,handleClick:P}))}),[f,t]),f.length===l.length&&v>=l.length?w:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(b,{children:l.map((function(e){return(0,Z.jsx)(j,{memory:e})}))}),(0,Z.jsx)(h.Z,{component:"div",sx:{display:"none"},children:w})]})}var A=t(93433),W=t(71554),F=t(5849);function O(e){var n=e.label,t=e.handleClick,r=e.color;return(0,Z.jsx)(F.Z,{variant:"contained",color:r,sx:{m:1},onClick:t,children:(0,Z.jsx)(k.Z,{variant:"h6",children:n})})}var z=t(11968),U=t.n(z),B=t(1867),V=t(22492),q=t(6718),G=t(88588),H=t(81374);function J(e){var n=e.handleClick,t=e.children;return(0,Z.jsx)(H.Z,{onClick:n,children:(0,Z.jsx)(G.Z,{elevation:0,sx:{bgcolor:"#fff",borderRadius:5,position:"relative"},children:t})})}function K(e){var n=e.imageSrc,t=e.imageSrcSet,r=e.title,a=e.handleImageLoad;return(0,Z.jsx)(B.Z,{component:"img",src:n,srcSet:t,alt:r,sx:{borderColor:"muted.main",borderRadius:4,textAlign:"center",objectFit:"cover",height:{lg:400,sm:350,xs:350}},onLoad:a})}function N(e){var n=e.title,t=e.date;return(0,Z.jsx)(V.Z,{children:(0,Z.jsx)(q.Z,{disableTypography:!0,title:(0,Z.jsx)(k.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:n}),subheader:(0,Z.jsx)(k.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function Q(e){var n=e.title,t=e.date,r=e.thumbnailImage,a=e.thumbnailImageSrcSet,o=e.handleClick,i=e.handleImageLoad;return console.log("rendering review item"),(0,Z.jsxs)(J,{handleClick:o,children:[(0,Z.jsx)(K,{imageSrc:r,imageSrcSet:a,title:n,handleImageLoad:i}),(0,Z.jsx)(N,{title:n,date:t})]})}function X(e){var n=e.memories,t=e.handleIndexChange,o=e.picIndex,i=e.handleImageLoad,c=(0,a.useState)(n),s=(0,r.Z)(c,2),u=s[0],m=s[1];(0,a.useEffect)((function(){m(n)}),[n]),console.log("carousel items",u,o);return(0,Z.jsx)(U(),{sx:{maxWidth:"700px",width:"95%"},indicators:!1,index:o,onChange:function(e){return t(e)},navButtonsAlwaysVisible:!0,autoPlay:!1,children:u.map((function(e){return(0,Z.jsx)(l.Z,{direction:"column",spacing:1,alignItems:"center",children:(0,Z.jsx)(Q,{title:e.thumbnail.title,date:e.thumbnail.date,thumbnailImage:e.thumbnail.photo.src,thumbnailImageSrcSet:(n=e.thumbnail.photo,(n.images?n.images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",")),handleImageLoad:i,handleClick:function(){}})},e.thumbnail.memory_id);var n}))})}function Y(e){var n=e.name,t=e.email,r=e.picture;return(0,Z.jsxs)(l.Z,{direction:"row",justifyContent:"center",alignItems:"center",sx:{width:"100%"},children:[(0,Z.jsx)(y.S,{name:n,email:t,picture:r}),(0,Z.jsx)(k.Z,{variant:"h6",sx:{px:1},children:n})]})}N.defaultProps={title:"Review Image",date:"Memory Date"},K.defaultProps={title:"Review Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},Q.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){}};var $=t(44700),ee=t(9052);function ne(){return ne=(0,d.Z)((0,m.Z)().mark((function e(n,t,r){var a,o,i,c=arguments;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>3&&void 0!==c[3]?c[3]:"",e.prev=1,e.next=4,P.Z.getPendingMemories(a);case 4:if(!(o=e.sent)){e.next=14;break}if(!o.memories){e.next=14;break}return r(o.memories),console.log("review memories",o),e.next=11,Promise.all(P.Z.getPendingThumbnails(o.memories));case 11:i=e.sent,n(i),t(o.next_continuation_token||"");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])}))),ne.apply(this,arguments)}function te(){return(te=(0,d.Z)((0,m.Z)().mark((function e(n,t){var r,a;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=ee.Z.getUserInfo(),e.next=4,P.Z.acceptShare(n,r.email);case 4:a=e.sent,console.log(a),t(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function re(){return(re=(0,d.Z)((0,m.Z)().mark((function e(n,t){var r,a;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=ee.Z.getUserInfo(),e.next=4,P.Z.rejectShare(n,r.email);case 4:a=e.sent,console.log(a),t(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function ae(e){var n=e.memoryID,t=(0,a.useState)(0),o=(0,r.Z)(t,2),i=o[0],c=o[1],s=(0,a.useState)([]),u=(0,r.Z)(s,2),m=u[0],d=u[1],f=(0,a.useState)(0),x=(0,r.Z)(f,2),g=x[0],p=x[1],v=(0,a.useState)(""),j=(0,r.Z)(v,2),b=j[0],y=j[1],S=(0,a.useState)([]),w=(0,r.Z)(S,2),I=w[0],C=w[1],M=(0,a.useState)(null),P=(0,r.Z)(M,2),L=P[0],_=P[1],R=(0,a.useState)(null),D=(0,r.Z)(R,2),E=D[0],T=D[1],F=(0,a.useState)(null),z=(0,r.Z)(F,2),U=z[0],B=z[1];(0,a.useEffect)((function(){if(I.length>0){var e=I.findIndex((function(e){return e.thumbnail.memory_id.toString()===n}));e>=0&&p(e)}}),[n,I]),console.log(n);var V=function(e,n){_(!0),T(e),B(n)},q=function(e){return y(e)},G=function(e){return d((function(n){return n.concat(e)}))},H=function(e){return C((function(n){return n.concat(e)}))},J=function(){var e=I.length;if(console.log(e,g),1===e)C([]);else{var n=g;n===e-1&&p((function(e){return e-1})),C([].concat((0,A.Z)(I.slice(0,n)),(0,A.Z)(I.slice(n+1))))}};(0,a.useEffect)((function(){!function(e,n,t){ne.apply(this,arguments)}(H,q,G,b)}),[]);var K=function(e){console.log("accept response",e),e.ok?(V("Memory share accepted",!1),J()):V("Error while accepting memory share",!0)},N=function(e){console.log("reject response",e),e.ok?(V("Memory share rejected",!1),J()):V("Error while rejecting memory share",!0)};return console.log("pending memories",I,"picIndex",g,"memories count",I.length),I.length===m.length&&i>=m.length?(0,Z.jsxs)(h.Z,{sx:{display:"flex",width:"100%",backgroundColor:"transparent",backgroundSize:"cover",backgroundImage:"linear-gradient(white, #0e516a)",justifyContent:"center"},children:[(0,Z.jsxs)(l.Z,{direction:"column",alignItems:"center",sx:{width:"100%",my:3},children:[(0,Z.jsx)(Y,{name:I.length>0?I[g].owner_details.name:"",email:I.length>0?I[g].owner_details.email:"",picture:I.length>0?I[g].owner_details.picture:""}),(0,Z.jsx)(k.Z,{sx:{mb:2},children:"has shared a memory with you"}),(0,Z.jsx)(X,{memories:I,handleIndexChange:p,picIndex:g,handleImageLoad:function(){return c((function(e){return e+1}))}}),(0,Z.jsxs)(l.Z,{direction:"row",sx:{m:1},children:[(0,Z.jsx)(O,{label:"Accept",color:"primary",handleClick:function(){var e=I[g].thumbnail.memory_id;!function(e,n){te.apply(this,arguments)}(e,K),console.log("accepting memoryID",e)}}),(0,Z.jsx)(O,{label:"Reject",color:"error",handleClick:function(){var e=I[g].thumbnail.memory_id;!function(e,n){re.apply(this,arguments)}(e,N),console.log("rejecting memoryID",e)}})]})]}),(0,Z.jsx)($.Z,{snackBarOpen:L,message:E,onClose:function(){_(!1),T(null),B(null)},error:U})]}):(0,Z.jsxs)(l.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,sx:{position:"absolute",top:"50vh",right:"50vw",transform:"translate(50%, -50%)",backgroundColor:"form.input",boxShadow:10,padding:2},children:[(0,Z.jsx)(W.Z,{}),(0,Z.jsx)(k.Z,{variant:"h6",children:"Loading ..."})]})}function oe(e){var n=e.mode,t=e.handleChange;return console.log("I am in memory modes"),(0,Z.jsx)(l.Z,{direction:"row",justifyContent:"center",sx:{py:1,backgroundColor:"button.main"},children:(0,Z.jsxs)(s.Z,{color:"primary",value:n,exclusive:!0,"aria-label":"Memory Modes",children:[(0,Z.jsx)(c.Z,{value:"own",sx:{borderRadius:"30px"},onClick:t,children:"My Memories"}),(0,Z.jsx)(c.Z,{value:"shared",onClick:t,children:"Shared With Me"}),(0,Z.jsx)(c.Z,{value:"review",sx:{borderRadius:"30px"},onClick:t,children:"Review"})]})})}function ie(e){var n=e.mode,t=e.memoryID;return"own"===n?(0,Z.jsx)(R,{}):"shared"===n?(0,Z.jsx)(T,{}):"review"===n?(0,Z.jsx)(ae,{memoryID:t}):void 0}function ce(e){var n=e.initMode,t=(0,o.UO)(),c=t.memoryMode,s=(0,i.lr)(),m=(0,r.Z)(s,1)[0],d=(0,a.useState)(n),h=(0,r.Z)(d,2),f=h[0],x=h[1];(0,a.useEffect)((function(){x(c||n)}),[c,n]),console.log(n,c,t,m);return(0,Z.jsx)(u.Z,{create:!0,children:(0,Z.jsxs)(l.Z,{direction:"column",children:[(0,Z.jsx)(oe,{mode:f,handleChange:function(e,n){x(n)}}),(0,Z.jsx)(ie,{mode:f,memoryID:m.get("memoryID")})]})})}ae.defaultProps={memoryID:""},ie.defaultProps={memoryID:""}},64586:function(e,n,t){e.exports=t.p+"static/media/image-loading.f1b4462988545d9c460a.png"}}]);
//# sourceMappingURL=949.4e6f1b83.chunk.js.map