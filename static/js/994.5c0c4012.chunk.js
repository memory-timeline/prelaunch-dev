"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[994],{20903:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(95193),a=t(61889),i=t(20890),o=t(58054),s=t(32067),c=t(80184);function l(e){var n=e.message,t=e.handleClick,l=(0,r.Z)((function(e){return e.breakpoints.down("md")}));return(0,c.jsx)(a.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,c.jsxs)(s.Z,{handleClick:t,children:[(0,c.jsx)(i.Z,{variant:l?"body1":"h5",color:"button.main",sx:{p:1,color:"secondary.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0},children:n}),(0,c.jsx)(o.Z,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"create")}},92674:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(61889),a=t(36194),i=t(51687),o=t(20890),s=t(32067),c=t(80184);function l(e){var n=e.handleMoreClick;return(0,c.jsx)(r.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,c.jsx)(s.Z,{handleClick:n,children:(0,c.jsx)(o.Z,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:"30px",borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}function u(e){var n=e.items,t=e.handleMoreClick,o=e.nextToken,s=e.handleImageLoad,u=e.createComponent,d=e.handleClick;return(0,c.jsxs)(r.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[u,n.map((function(e){return(0,c.jsx)(r.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,c.jsx)(i.Z,{title:e.title,date:e.date,avatar:e.owner?(0,c.jsx)(a.S,{name:e.owner.name,picture:e.owner.picture,email:e.owner.email}):null,shared:e.shared,thumbnailImage:e.photo.src,thumbnailImageSrcSet:(n=e.photo,(n.images?n.images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",")),handleClick:function(){return d(e)},handleImageLoad:s})},e.title);var n})),o&&(0,c.jsx)(l,{handleMoreClick:t})]})}u.defaultProps={items:[],createComponent:""}},90767:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(61889),a=t(33402),i=t(51687),o=t(64586),s=t(80184);function c(e){var n=e.memory;return(0,s.jsx)(r.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,s.jsx)(i.Z,{title:(0,s.jsx)(a.Z,{type:"rectangular",sx:{width:"60%"}}),date:(0,s.jsx)(a.Z,{type:"rectangular",sx:{width:"50%"}}),thumbnailImage:o,handleClick:function(){}})},n)}},81307:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(61889),a=t(80184);function i(e){var n=e.children;return(0,a.jsx)(r.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:n})}i.defaultProps={children:""}},51687:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(42169),a=t(39504),i=t(9585),o=t(20890),s=t(81918),c=t(32067),l=t(80184);function u(e){var n=e.imageSrc,t=e.imageSrcSet,a=e.title,i=e.handleImageLoad;return(0,l.jsx)(r.Z,{component:"img",src:n,srcSet:t,alt:a,sx:{textAlign:"center",objectFit:"cover",height:{lg:350,md:300,xs:250}},onLoad:i})}function d(e){var n=e.title,t=e.date,r=e.avatar,c=e.shared;return(0,l.jsx)(a.Z,{children:(0,l.jsx)(i.Z,{disableTypography:!0,avatar:r,title:(0,l.jsxs)(o.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:[n,""!==c?(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)(s.Z,{label:c,size:"small",variant:"filled",color:"Shared"===c?"success":"default",sx:{height:"auto"}})]}):null]}),subheader:(0,l.jsx)(o.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function m(e){var n=e.title,t=e.date,r=e.avatar,a=e.shared,i=e.thumbnailImage,o=e.thumbnailImageSrcSet,s=e.handleClick,m=e.handleImageLoad;return(0,l.jsxs)(c.Z,{handleClick:s,children:[(0,l.jsx)(u,{imageSrc:i,imageSrcSet:o,title:n,handleImageLoad:m}),(0,l.jsx)(d,{title:n,date:t,avatar:r,shared:a})]})}d.defaultProps={title:"Memory Thumbnail Image",date:"",avatar:"",shared:""},u.defaultProps={title:"Memory Thumbnail Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},m.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){},avatar:"",shared:""}},32067:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(57621),a=t(66647),i=t(80184);function o(e){var n=e.handleClick,t=e.children;return(0,i.jsx)(a.Z,{onClick:n,children:(0,i.jsx)(r.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:{lg:430,md:380,xs:330},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:t})})}},72994:function(e,n,t){t.r(n),t.d(n,{default:function(){return ee}});var r=t(29439),a=t(76476),i=t(72791),o=t(57689),s=t(11087),c=t(90388),l=t(72466),u=t(53767),d=t(52766),m=t(74165),h=t(15861),f=t(64554),x=t(90767),p=t(81307),g=t(92674),Z=t(629),v=t(20903),b=t(80184);function j(e,n,t){return y.apply(this,arguments)}function y(){return y=(0,h.Z)((0,m.Z)().mark((function e(n,t,r){var a,i,o,s=arguments;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>3&&void 0!==s[3]?s[3]:"",e.prev=1,e.next=4,Z.Z.getMemories(a);case 4:if(!(i=e.sent)){e.next=13;break}if(!i.memories){e.next=13;break}return r(i.memories),e.next=10,Promise.all(Z.Z.getThumbnails(i.memories));case 10:o=e.sent,n(o),t(i.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),y.apply(this,arguments)}function w(){var e=(0,i.useState)(""),n=(0,r.Z)(e,2),t=n[0],a=n[1],s=(0,i.useState)([]),c=(0,r.Z)(s,2),l=c[0],u=c[1],d=(0,i.useState)([]),m=(0,r.Z)(d,2),h=m[0],Z=m[1],y=(0,i.useState)(0),w=(0,r.Z)(y,2),k=w[0],S=w[1],C=(0,i.useState)(null),I=(0,r.Z)(C,2),M=I[0],P=I[1],R=(0,o.s0)(),L=function(e){R("/memory/".concat(e.memory_id),{state:e})},_=function(){return S((function(e){return e+1}))},A=function(e){return a(e)},F=function(e){return Z((function(n){return n.concat(e)}))},T=function(e){return u((function(n){return n.concat(e)}))},E=(0,b.jsx)(v.Z,{message:"Create a memory",handleClick:function(){return R("/memory/create")}}),W=function(){return j(F,A,T,t)},D=h.sort((function(e,n){return e.memory_id>n.memory_id?1:-1}));return(0,i.useEffect)((function(){return j(F,A,T,t)}),[]),(0,i.useEffect)((function(){return function(){var e=(0,b.jsx)(g.Z,{createComponent:E,handleClick:L,handleImageLoad:_,handleMoreClick:W,items:D,nextToken:t});P(e)}()}),[h,t]),h.length===l.length&&k>=l.length?M:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(p.Z,{children:[E,l.map((function(e){return(0,b.jsx)(x.Z,{memory:e})}))]}),(0,b.jsx)(f.Z,{component:"div",sx:{display:"none"},children:M})]})}var k=t(20890),S=t(36151),C=t(36489);function I(e){var n=e.message,t=(0,o.s0)();return(0,b.jsxs)(u.Z,{direction:"column",justifyContent:"center",alignItems:"center",sx:{width:"95%",maxWidth:"500px",position:"fixed",top:"50%",right:"50%",transform:"translate(50%, -50%)",border:"2px solid gray",height:"60%",borderRadius:"10px"},children:[(0,b.jsx)(C.r,{fill:"gray",width:"64px",height:"64px"}),(0,b.jsx)(k.Z,{color:"gray",sx:{fontSize:"1.3rem"},children:n}),(0,b.jsx)(k.Z,{color:"gray",sx:{pb:8,fontSize:"1.3rem"},children:"Check again later."}),(0,b.jsx)(k.Z,{color:"primary",children:"In the mean time, you can"}),(0,b.jsx)(S.Z,{variant:"contained",onClick:function(){return t("/memory/create")},children:"Create a Memory"})]})}function M(e,n,t){return P.apply(this,arguments)}function P(){return P=(0,h.Z)((0,m.Z)().mark((function e(n,t,r){var a,i,o,s=arguments;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>3&&void 0!==s[3]?s[3]:"",e.prev=1,e.next=4,Z.Z.getAcceptedMemories(a);case 4:if(!(i=e.sent)){e.next=13;break}if(!i.memories){e.next=13;break}return r(i.memories),e.next=10,Promise.all(Z.Z.getAcceptedThumbnails(i.memories));case 10:o=e.sent,n(o),t(i.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),P.apply(this,arguments)}function R(){var e=(0,i.useState)(""),n=(0,r.Z)(e,2),t=n[0],a=n[1],s=(0,i.useState)([]),c=(0,r.Z)(s,2),l=c[0],u=c[1],d=(0,i.useState)([]),m=(0,r.Z)(d,2),h=m[0],Z=m[1],v=(0,i.useState)(0),j=(0,r.Z)(v,2),y=j[0],w=j[1],k=(0,i.useState)(null),S=(0,r.Z)(k,2),C=S[0],P=S[1],R=(0,o.s0)(),L=function(e){R("/memory/shared/".concat(e.memory_id),{state:e})},_=function(){return w((function(e){return e+1}))},A=function(e){return a(e)},F=function(e){e.map((function(e){var n=e.thumbnail;return n.owner=e.owner_details,Z((function(e){return e.concat([n])})),0}))},T=function(e){return u((function(n){return n.concat(e)}))},E=h.sort((function(e,n){return e.memory_id>n.memory_id?1:-1})),W=function(){return M(F,A,T,t)};return(0,i.useEffect)((function(){return M(F,A,T,t)}),[]),(0,i.useEffect)((function(){return function(){if(h.length>0){var e=(0,b.jsx)(g.Z,{handleClick:L,handleImageLoad:_,handleMoreClick:W,items:E,nextToken:t});P(e)}else P((0,b.jsx)(I,{message:"No shared memories right now."}))}()}),[h,t]),h.length===l.length&&y>=l.length?C:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p.Z,{children:l.map((function(e){return(0,b.jsx)(x.Z,{memory:e})}))}),(0,b.jsx)(f.Z,{component:"div",sx:{display:"none"},children:C})]})}function L(e){var n=e.label,t=e.handleClick,r=e.color,a=e.disabled;return(0,b.jsx)(S.Z,{variant:"contained",color:r,sx:{m:1},onClick:t,disabled:a,children:(0,b.jsx)(k.Z,{variant:"h6",children:n})})}var _=t(36194);function A(e){var n=e.name,t=e.email,r=e.picture;return(0,b.jsxs)(u.Z,{direction:"row",justifyContent:"center",alignItems:"center",sx:{width:"100%"},children:[(0,b.jsx)(_.S,{name:n,email:t,picture:r}),(0,b.jsx)(k.Z,{variant:"h6",sx:{px:1},children:n})]})}var F=t(44700),T=t(33402),E=t(64586),W=t(9052),D=t(42169),z=t(39504),O=t(9585),N=t(57621),B=t(66647);function X(e){var n=e.handleClick,t=e.children;return(0,b.jsx)(B.Z,{onClick:n,sx:{display:"flex"},children:(0,b.jsx)(N.Z,{elevation:0,sx:{bgcolor:"#fff",borderRadius:5,position:"relative",maxWidth:"700px",width:"95%"},children:t})})}function U(e){var n=e.imageSrc,t=e.imageSrcSet,r=e.title,a=e.handleImageLoad;return(0,b.jsx)(D.Z,{component:"img",src:n,srcSet:t,alt:r,sx:{borderColor:"muted.main",borderRadius:4,textAlign:"center",objectFit:"cover",height:{lg:400,sm:350,xs:350}},onLoad:a})}function q(e){var n=e.title,t=e.date;return(0,b.jsx)(z.Z,{children:(0,b.jsx)(O.Z,{disableTypography:!0,title:(0,b.jsx)(k.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:n}),subheader:(0,b.jsx)(k.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function Y(e){var n=e.title,t=e.date,r=e.thumbnailImage,a=e.thumbnailImageSrcSet,i=e.handleClick,o=e.handleImageLoad;return(0,b.jsxs)(X,{handleClick:i,children:[(0,b.jsx)(U,{imageSrc:r,imageSrcSet:a,title:n,handleImageLoad:o}),(0,b.jsx)(q,{title:n,date:t})]})}q.defaultProps={title:"",date:""},U.defaultProps={title:"Review Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},Y.defaultProps={title:"",date:"",thumbnailImageSrcSet:"",handleImageLoad:function(){}};function G(e,n,t){return H.apply(this,arguments)}function H(){return H=(0,h.Z)((0,m.Z)().mark((function e(n,t,r){var a,i,o,s=arguments;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>3&&void 0!==s[3]?s[3]:"",e.prev=1,e.next=4,Z.Z.getPendingMemories(a);case 4:if(!(i=e.sent)){e.next=13;break}if(r(i.count),!i.memory){e.next=13;break}return t(i.memory),e.next=11,Z.Z.getPendingThumbnails(i.memory);case 11:o=e.sent,n(o);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),H.apply(this,arguments)}function J(){return(J=(0,h.Z)((0,m.Z)().mark((function e(n,t){var r,a;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=W.Z.getUserInfo(),e.next=4,Z.Z.acceptShare(n,r.email);case 4:a=e.sent,t(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function K(){return(K=(0,h.Z)((0,m.Z)().mark((function e(n,t){var r,a;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=W.Z.getUserInfo(),e.next=4,Z.Z.rejectShare(n,r.email);case 4:a=e.sent,t(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function Q(e){var n=e.memoryID,t=(0,i.useState)(null),a=(0,r.Z)(t,2),o=a[0],s=a[1],c=(0,i.useState)(!1),l=(0,r.Z)(c,2),d=l[0],m=l[1],h=(0,i.useState)(null),x=(0,r.Z)(h,2)[1],p=(0,i.useState)(null),g=(0,r.Z)(p,2),Z=g[0],v=g[1],j=(0,i.useState)(null),y=(0,r.Z)(j,2),w=y[0],S=y[1],C=(0,i.useState)(null),M=(0,r.Z)(C,2),P=M[0],R=M[1],_=(0,i.useState)(null),W=(0,r.Z)(_,2),D=W[0],z=W[1],O=(0,i.useState)(null),N=(0,r.Z)(O,2),B=N[0],X=N[1],U=(0,i.useState)(!1),q=(0,r.Z)(U,2),H=q[0],Q=q[1],V=(0,i.useState)(!1),$=(0,r.Z)(V,2),ee=$[0],ne=$[1],te=(0,i.useState)(null),re=(0,r.Z)(te,2),ae=re[0],ie=re[1],oe=function(){ie(null),Q(!1),ne(!1)},se=function(e,n){R(!0),z(e),X(n)},ce=function(){R(!1),z(null),X(null)},le=function(){v(null),S(null),G(v,x,s,n)};(0,i.useEffect)((function(){return G(v,x,s,n)}),[]);var ue=function(e){e.ok?(se("Memory share accepted",!1),m(!1),le()):se("Error while accepting memory share",!0)},de=function(e){e.ok?(se("Memory share rejected",!1),m(!1),le()):se("Error while rejecting memory share",!0)},me=function(){ie("Accepting memory. Please wait..."),Q(!0),function(e,n){J.apply(this,arguments)}(Z.thumbnail.memory_id,ue),oe()},he=function(){ie("Rejecting memory. Please wait..."),ne(!0),function(e,n){K.apply(this,arguments)}(Z.thumbnail.memory_id,de),oe()},fe=function(){return m(!0)};return 0===o&&null===w&&S((0,b.jsx)(I,{message:"Nothing to review right now."})),(0,i.useEffect)((function(){return function(){if(null!==Z){var e=(0,b.jsx)(f.Z,{sx:{display:"flex",width:"100%",backgroundColor:"transparent",backgroundSize:"cover",backgroundImage:"linear-gradient(white, #0e516a)",justifyContent:"center"},children:(0,b.jsxs)(u.Z,{direction:"column",alignItems:"center",sx:{width:"100%",my:3},children:[(0,b.jsx)(A,{name:Z.owner_details.name||"",email:Z.owner_details.email||"P",picture:Z.owner_details.picture||""}),(0,b.jsx)(k.Z,{sx:{mb:2},children:"has shared a memory with you"}),(0,b.jsx)(u.Z,{direction:"column",spacing:1,alignItems:"center",children:(0,b.jsx)(Y,{title:Z.thumbnail.title,date:Z.thumbnail.date,thumbnailImage:Z.thumbnail.photo.src,thumbnailImageSrcSet:(n=Z.thumbnail.photo,(n.images?n.images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",")),handleImageLoad:fe,handleClick:function(){}})},Z.thumbnail.memory_id),(0,b.jsxs)(u.Z,{direction:"row",sx:{m:1},children:[(0,b.jsx)(L,{label:"Accept",color:"primary",handleClick:me,disabled:H||ee}),(0,b.jsx)(L,{label:"Reject",color:"error",handleClick:he,disabled:H||ee})]})]})});S(e)}var n}()}),[Z,n,H,ee]),null!==Z&&d||0===o?(0,b.jsxs)(b.Fragment,{children:[!0===H||!0===ee?(0,b.jsx)(k.Z,{variant:"h6",sx:{p:2,color:"white"},children:ae}):null,w,(0,b.jsx)(F.Z,{snackBarOpen:P,message:D,onClose:ce,error:B})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.Z,{sx:{display:"flex",width:"100%",backgroundColor:"transparent",backgroundSize:"cover",backgroundImage:"linear-gradient(white, #0e516a)",justifyContent:"center"},children:(0,b.jsxs)(u.Z,{direction:"column",alignItems:"center",sx:{width:"100%",my:3},children:[(0,b.jsx)(A,{name:(0,b.jsx)(T.Z,{type:"rectangular",sx:{width:"35%"}}),email:"P",picture:""}),(0,b.jsx)(k.Z,{sx:{mb:2},children:"has shared a memory with you"}),(0,b.jsx)(u.Z,{direction:"column",spacing:1,alignItems:"center",children:(0,b.jsx)(Y,{title:"",date:"",thumbnailImage:E,thumbnailImageSrcSet:"",handleImageLoad:function(){},handleClick:function(){}})},"loading"),(0,b.jsxs)(u.Z,{direction:"row",sx:{m:1},children:[(0,b.jsx)(L,{label:"Accept",color:"primary",handleClick:function(){},disabled:!0}),(0,b.jsx)(L,{label:"Reject",color:"error",handleClick:function(){},disabled:!0})]})]})}),(0,b.jsx)(F.Z,{snackBarOpen:P,message:D,onClose:ce,error:B}),(0,b.jsx)(f.Z,{component:"div",sx:{display:"none"},children:w})]})}function V(e){var n=e.mode,t=e.handleChange;return(0,b.jsx)(u.Z,{direction:"row",justifyContent:"center",sx:{py:1,backgroundColor:"button.main"},children:(0,b.jsxs)(l.Z,{color:"primary",value:n,exclusive:!0,"aria-label":"Memory Modes",children:[(0,b.jsx)(c.Z,{value:"own",sx:{borderRadius:"30px"},onClick:t,children:"My Memories"}),(0,b.jsx)(c.Z,{value:"shared",onClick:t,children:"Shared With Me"}),(0,b.jsx)(c.Z,{value:"review",sx:{borderRadius:"30px"},onClick:t,children:"Review"})]})})}function $(e){var n=e.mode,t=e.memoryID;return"own"===n?(0,b.jsx)(w,{}):"shared"===n?(0,b.jsx)(R,{}):"review"===n?(0,b.jsx)(Q,{memoryID:t}):void 0}function ee(e){var n=e.initMode,t=(0,o.UO)().memoryMode,c=(0,s.lr)(),l=(0,r.Z)(c,1)[0],m=(0,i.useState)(n),h=(0,r.Z)(m,2),f=h[0],x=h[1];(0,i.useEffect)((function(){x(t||n)}),[t,n]);return(0,b.jsx)(d.Z,{create:!0,children:(0,b.jsx)(a.Z,{children:(0,b.jsxs)(u.Z,{direction:"column",children:[(0,b.jsx)(V,{mode:f,handleChange:function(e,n){x(n)}}),(0,b.jsx)($,{mode:f,memoryID:l.get("memoryID")})]})})})}Q.defaultProps={memoryID:""},$.defaultProps={memoryID:""}},33402:function(e,n,t){t.d(n,{Z:function(){return R}});var r=t(30168),a=t(63366),i=t(87462),o=t(72791),s=t(28182),c=t(52554),l=t(94419),u=t(61572),d=t(12065),m=t(47630),h=t(93736),f=t(75878),x=t(21217);function p(e){return(0,x.Z)("MuiSkeleton",e)}(0,f.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g,Z,v,b,j,y,w,k,S=t(80184),C=["animation","className","component","height","style","variant","width"],I=(0,c.F4)(j||(j=g||(g=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),M=(0,c.F4)(y||(y=Z||(Z=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),P=(0,m.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],!1!==t.animation&&n[t.animation],t.hasChildren&&n.withChildren,t.hasChildren&&!t.width&&n.fitContent,t.hasChildren&&!t.height&&n.heightAuto]}})((function(e){var n=e.theme,t=e.ownerState,r=(0,u.Wy)(n.shape.borderRadius)||"px",a=(0,u.YL)(n.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:n.vars?n.vars.palette.Skeleton.bg:(0,d.Fq)(n.palette.text.primary,"light"===n.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(n.vars||n).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,c.iv)(w||(w=v||(v=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),I)}),(function(e){var n=e.ownerState,t=e.theme;return"wave"===n.animation&&(0,c.iv)(k||(k=b||(b=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),M,(t.vars||t).palette.action.hover)})),R=o.forwardRef((function(e,n){var t=(0,h.Z)({props:e,name:"MuiSkeleton"}),r=t.animation,o=void 0===r?"pulse":r,c=t.className,u=t.component,d=void 0===u?"span":u,m=t.height,f=t.style,x=t.variant,g=void 0===x?"text":x,Z=t.width,v=(0,a.Z)(t,C),b=(0,i.Z)({},t,{animation:o,component:d,variant:g,hasChildren:Boolean(v.children)}),j=function(e){var n=e.classes,t=e.variant,r=e.animation,a=e.hasChildren,i=e.width,o=e.height,s={root:["root",t,r,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]};return(0,l.Z)(s,p,n)}(b);return(0,S.jsx)(P,(0,i.Z)({as:d,ref:n,className:(0,s.Z)(j.root,c),ownerState:b},v,{style:(0,i.Z)({width:Z,height:m},f)}))}))},64586:function(e,n,t){e.exports=t.p+"static/media/image-loading.f1b4462988545d9c460a.png"}}]);
//# sourceMappingURL=994.5c0c4012.chunk.js.map