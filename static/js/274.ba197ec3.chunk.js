"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[274],{90325:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(9019),a=t(61113),i=t(56746),o=t(46417);function s(e){var n=e.handleMoreClick;return(0,o.jsx)(r.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,o.jsx)(i.Z,{handleClick:n,children:(0,o.jsx)(a.Z,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:"30px",borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}},82295:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9019),a=t(46417);function i(e){var n=e.children;return(0,a.jsx)(r.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:n})}i.defaultProps={children:""}},19482:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(16957),a=t(93405),i=t(54641),o=t(61113),s=t(66212),l=t(56746),c=t(46417);function u(e){var n=e.imageSrc,t=e.imageSrcSet,a=e.title,i=e.handleImageLoad;return(0,c.jsx)(r.Z,{component:"img",src:n,srcSet:t,alt:a,sx:{textAlign:"center",objectFit:"cover",height:{lg:350,md:300,xs:250}},onLoad:i})}function d(e){var n=e.title,t=e.date,r=e.avatar,l=e.shared;return(0,c.jsx)(a.Z,{children:(0,c.jsx)(i.Z,{disableTypography:!0,avatar:r,title:(0,c.jsxs)(o.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:[n,""!==l?(0,c.jsxs)(c.Fragment,{children:[" ",(0,c.jsx)(s.Z,{label:l,size:"small",variant:"filled",color:"Shared"===l?"success":"default",sx:{height:"auto"}})]}):null]}),subheader:(0,c.jsx)(o.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function m(e){var n=e.title,t=e.date,r=e.avatar,a=e.shared,i=e.thumbnailImage,o=e.thumbnailImageSrcSet,s=e.handleClick,m=e.handleImageLoad;return(0,c.jsxs)(l.Z,{handleClick:s,children:[(0,c.jsx)(u,{imageSrc:i,imageSrcSet:o,title:n,handleImageLoad:m}),(0,c.jsx)(d,{title:n,date:t,avatar:r,shared:a})]})}d.defaultProps={title:"Memory Thumbnail Image",date:"",avatar:"",shared:""},u.defaultProps={title:"Memory Thumbnail Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},m.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){},avatar:"",shared:""}},56746:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(73428),a=t(44183),i=t(46417);function o(e){var n=e.handleClick,t=e.children;return(0,i.jsx)(a.Z,{onClick:n,children:(0,i.jsx)(r.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:{lg:430,md:380,xs:330},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:t})})}},22274:function(e,n,t){t.r(n),t.d(n,{default:function(){return oe}});var r=t(29439),a=t(78701),i=t(47313),o=t(58467),s=t(2135),l=t(43960),c=t(55719),u=t(32195),d=t(17379),m=t(74165),h=t(15861),f=t(41806),x=t(9019),p=t(1470),g=t(19482),v=t(64586),Z=t(46417);function b(e){var n=e.memory;return(0,Z.jsx)(x.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,Z.jsx)(g.Z,{title:(0,Z.jsx)(p.Z,{type:"rectangular",sx:{width:"60%"}}),date:(0,Z.jsx)(p.Z,{type:"rectangular",sx:{width:"50%"}}),thumbnailImage:v,handleClick:function(){}})},n)}var j=t(82295),y=t(12839),w=t(90325);function k(e){var n=e.items,t=e.handleMoreClick,r=e.nextToken,a=e.handleImageLoad,i=e.createComponent,o=e.handleClick;return(0,Z.jsxs)(x.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[i,n.map((function(e){return(0,Z.jsx)(x.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,Z.jsx)(g.Z,{title:e.title,date:e.date,avatar:e.owner?(0,Z.jsx)(y.S,{name:e.owner.name,picture:e.owner.picture,email:e.owner.email}):null,shared:e.shared,thumbnailImage:e.photo.src,thumbnailImageSrcSet:(n=e.photo,(n.images?n.images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",")),handleClick:function(){return o(e)},handleImageLoad:a})},e.title);var n})),r&&(0,Z.jsx)(w.Z,{handleMoreClick:t})]})}k.defaultProps={items:[],createComponent:""};var S=t(38344),C=t(15300),I=t(61113),P=t(41434),M=t(56746);function R(e){var n=e.message,t=e.handleClick,r=(0,C.Z)((function(e){return e.breakpoints.down("md")}));return(0,Z.jsx)(x.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,Z.jsxs)(M.Z,{handleClick:t,children:[(0,Z.jsx)(I.Z,{variant:r?"body1":"h5",color:"button.main",sx:{p:1,color:"secondary.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0},children:n}),(0,Z.jsx)(P.Z,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"create")}function L(e,n,t){return _.apply(this,arguments)}function _(){return _=(0,h.Z)((0,m.Z)().mark((function e(n,t,r){var a,i,o,s=arguments;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>3&&void 0!==s[3]?s[3]:"",e.prev=1,e.next=4,S.Z.getMemories(a);case 4:if(!(i=e.sent)){e.next=13;break}if(!i.memories){e.next=13;break}return r(i.memories),e.next=10,Promise.all(S.Z.getThumbnails(i.memories));case 10:o=e.sent,n(o),t(i.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),_.apply(this,arguments)}function A(){var e=(0,i.useState)(""),n=(0,r.Z)(e,2),t=n[0],a=n[1],s=(0,i.useState)([]),l=(0,r.Z)(s,2),c=l[0],u=l[1],d=(0,i.useState)([]),m=(0,r.Z)(d,2),h=m[0],x=m[1],p=(0,i.useState)(0),g=(0,r.Z)(p,2),v=g[0],y=g[1],w=(0,i.useState)(null),S=(0,r.Z)(w,2),C=S[0],I=S[1],P=(0,o.s0)(),M=function(e){P("/memory/".concat(e.memory_id),{state:e})},_=function(){return y((function(e){return e+1}))},A=function(e){return a(e)},F=function(e){return x((function(n){return n.concat(e)}))},T=function(e){return u((function(n){return n.concat(e)}))},E=(0,Z.jsx)(R,{message:"Create a memory",handleClick:function(){return P("/memory/create")}}),W=function(){return L(F,A,T,t)},D=h.sort((function(e,n){return e.memory_id>n.memory_id?1:-1}));return(0,i.useEffect)((function(){return L(F,A,T,t)}),[]),(0,i.useEffect)((function(){I((0,Z.jsx)(k,{createComponent:E,handleClick:M,handleImageLoad:_,handleMoreClick:W,items:D,nextToken:t}))}),[h,t]),h.length===c.length&&v>=c.length?C:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(j.Z,{children:[E,c.map((function(e){return(0,Z.jsx)(b,{memory:e})}))]}),(0,Z.jsx)(f.Z,{component:"div",sx:{display:"none"},children:C})]})}var F=t(31095),T=t(75746);function E(e){var n=e.message,t=(0,o.s0)();return(0,Z.jsxs)(u.Z,{direction:"column",justifyContent:"center",alignItems:"center",sx:{width:"95%",maxWidth:"500px",position:"fixed",top:"50%",right:"50%",transform:"translate(50%, -50%)",border:"2px solid gray",height:"60%",borderRadius:"10px"},children:[(0,Z.jsx)(T.r,{fill:"gray",width:"64px",height:"64px"}),(0,Z.jsx)(I.Z,{color:"gray",sx:{fontSize:"1.3rem"},children:n}),(0,Z.jsx)(I.Z,{color:"gray",sx:{pb:8,fontSize:"1.3rem"},children:"Check again later."}),(0,Z.jsx)(I.Z,{color:"primary",children:"In the mean time, you can"}),(0,Z.jsx)(F.Z,{variant:"contained",onClick:function(){return t("/memory/create")},children:"Create a Memory"})]})}function W(e,n,t){return D.apply(this,arguments)}function D(){return D=(0,h.Z)((0,m.Z)().mark((function e(n,t,r){var a,i,o,s=arguments;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>3&&void 0!==s[3]?s[3]:"",e.prev=1,e.next=4,S.Z.getAcceptedMemories(a);case 4:if(!(i=e.sent)){e.next=13;break}if(!i.memories){e.next=13;break}return r(i.memories),e.next=10,Promise.all(S.Z.getAcceptedThumbnails(i.memories));case 10:o=e.sent,n(o),t(i.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),D.apply(this,arguments)}function z(){var e=(0,i.useState)(""),n=(0,r.Z)(e,2),t=n[0],a=n[1],s=(0,i.useState)([]),l=(0,r.Z)(s,2),c=l[0],u=l[1],d=(0,i.useState)([]),m=(0,r.Z)(d,2),h=m[0],x=m[1],p=(0,i.useState)(0),g=(0,r.Z)(p,2),v=g[0],y=g[1],w=(0,i.useState)(null),S=(0,r.Z)(w,2),C=S[0],I=S[1],P=(0,o.s0)(),M=function(e){P("/memory/shared/".concat(e.memory_id),{state:e})},R=function(){return y((function(e){return e+1}))},L=function(e){return a(e)},_=function(e){e.map((function(e){var n=e.thumbnail;return n.owner=e.owner_details,x((function(e){return e.concat([n])})),0}))},A=function(e){return u((function(n){return n.concat(e)}))},F=h.sort((function(e,n){return e.memory_id>n.memory_id?1:-1})),T=function(){return W(_,L,A,t)};return(0,i.useEffect)((function(){return W(_,L,A,t)}),[]),(0,i.useEffect)((function(){h.length>0?I((0,Z.jsx)(k,{handleClick:M,handleImageLoad:R,handleMoreClick:T,items:F,nextToken:t})):I((0,Z.jsx)(E,{message:"No shared memories right now."}))}),[h,t]),h.length===c.length&&v>=c.length?C:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j.Z,{children:c.map((function(e){return(0,Z.jsx)(b,{memory:e})}))}),(0,Z.jsx)(f.Z,{component:"div",sx:{display:"none"},children:C})]})}function O(e){var n=e.label,t=e.handleClick,r=e.color,a=e.disabled;return(0,Z.jsx)(F.Z,{variant:"contained",color:r,sx:{m:1},onClick:t,disabled:a,children:(0,Z.jsx)(I.Z,{variant:"h6",children:n})})}function N(e){var n=e.name,t=e.email,r=e.picture;return(0,Z.jsxs)(u.Z,{direction:"row",justifyContent:"center",alignItems:"center",sx:{width:"100%"},children:[(0,Z.jsx)(y.S,{name:n,email:t,picture:r}),(0,Z.jsx)(I.Z,{variant:"h6",sx:{px:1},children:n})]})}var B=t(98278),X=t(31798),U=t(16957),q=t(93405),Y=t(54641),G=t(73428),H=t(44183);function J(e){var n=e.handleClick,t=e.children;return(0,Z.jsx)(H.Z,{onClick:n,sx:{display:"flex"},children:(0,Z.jsx)(G.Z,{elevation:0,sx:{bgcolor:"#fff",borderRadius:5,position:"relative",maxWidth:"700px",width:"95%"},children:t})})}function K(e){var n=e.imageSrc,t=e.imageSrcSet,r=e.title,a=e.handleImageLoad;return(0,Z.jsx)(U.Z,{component:"img",src:n,srcSet:t,alt:r,sx:{borderColor:"muted.main",borderRadius:4,textAlign:"center",objectFit:"cover",height:{lg:400,sm:350,xs:350}},onLoad:a})}function Q(e){var n=e.title,t=e.date;return(0,Z.jsx)(q.Z,{children:(0,Z.jsx)(Y.Z,{disableTypography:!0,title:(0,Z.jsx)(I.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:n}),subheader:(0,Z.jsx)(I.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function V(e){var n=e.title,t=e.date,r=e.thumbnailImage,a=e.thumbnailImageSrcSet,i=e.handleClick,o=e.handleImageLoad;return(0,Z.jsxs)(J,{handleClick:i,children:[(0,Z.jsx)(K,{imageSrc:r,imageSrcSet:a,title:n,handleImageLoad:o}),(0,Z.jsx)(Q,{title:n,date:t})]})}Q.defaultProps={title:"",date:""},K.defaultProps={title:"Review Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},V.defaultProps={title:"",date:"",thumbnailImageSrcSet:"",handleImageLoad:function(){}};function $(e,n,t){return ee.apply(this,arguments)}function ee(){return ee=(0,h.Z)((0,m.Z)().mark((function e(n,t,r){var a,i,o,s=arguments;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>3&&void 0!==s[3]?s[3]:"",e.prev=1,e.next=4,S.Z.getPendingMemories(a);case 4:if(!(i=e.sent)){e.next=13;break}if(r(i.count),!i.memory){e.next=13;break}return t(i.memory),e.next=11,S.Z.getPendingThumbnails(i.memory);case 11:o=e.sent,n(o);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),ee.apply(this,arguments)}function ne(){return(ne=(0,h.Z)((0,m.Z)().mark((function e(n,t){var r,a;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=X.ZP.getUserInfo(),e.next=4,S.Z.acceptShare(n,r.email);case 4:a=e.sent,t(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function te(){return(te=(0,h.Z)((0,m.Z)().mark((function e(n,t){var r,a;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=X.ZP.getUserInfo(),e.next=4,S.Z.rejectShare(n,r.email);case 4:a=e.sent,t(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function re(e){var n=e.memoryID,t=(0,i.useState)(null),a=(0,r.Z)(t,2),o=a[0],s=a[1],l=(0,i.useState)(!1),c=(0,r.Z)(l,2),d=c[0],m=c[1],h=(0,i.useState)(null),x=(0,r.Z)(h,2)[1],g=(0,i.useState)(null),b=(0,r.Z)(g,2),j=b[0],y=b[1],w=(0,i.useState)(null),k=(0,r.Z)(w,2),S=k[0],C=k[1],P=(0,i.useState)(null),M=(0,r.Z)(P,2),R=M[0],L=M[1],_=(0,i.useState)(null),A=(0,r.Z)(_,2),F=A[0],T=A[1],W=(0,i.useState)(null),D=(0,r.Z)(W,2),z=D[0],X=D[1],U=(0,i.useState)(!1),q=(0,r.Z)(U,2),Y=q[0],G=q[1],H=(0,i.useState)(!1),J=(0,r.Z)(H,2),K=J[0],Q=J[1],ee=(0,i.useState)(null),re=(0,r.Z)(ee,2),ae=re[0],ie=re[1],oe=function(){ie(null),G(!1),Q(!1)},se=function(e,n){L(!0),T(e),X(n)},le=function(){L(!1),T(null),X(null)},ce=function(){y(null),C(null),$(y,x,s,n)};(0,i.useEffect)((function(){return $(y,x,s,n)}),[]);var ue=function(e){e.ok?(se("Memory share accepted",!1),m(!1),ce()):se("Error while accepting memory share",!0)},de=function(e){e.ok?(se("Memory share rejected",!1),m(!1),ce()):se("Error while rejecting memory share",!0)},me=function(){ie("Accepting memory. Please wait..."),G(!0),function(e,n){ne.apply(this,arguments)}(j.thumbnail.memory_id,ue),oe()},he=function(){ie("Rejecting memory. Please wait..."),Q(!0),function(e,n){te.apply(this,arguments)}(j.thumbnail.memory_id,de),oe()},fe=function(){return m(!0)};return 0===o&&null===S&&C((0,Z.jsx)(E,{message:"Nothing to review right now."})),(0,i.useEffect)((function(){return function(){if(null!==j){var e=(0,Z.jsx)(f.Z,{sx:{display:"flex",width:"100%",backgroundColor:"transparent",backgroundSize:"cover",backgroundImage:"linear-gradient(white, #0e516a)",justifyContent:"center"},children:(0,Z.jsxs)(u.Z,{direction:"column",alignItems:"center",sx:{width:"100%",my:3},children:[(0,Z.jsx)(N,{name:j.owner_details.name||"",email:j.owner_details.email||"P",picture:j.owner_details.picture||""}),(0,Z.jsx)(I.Z,{sx:{mb:2},children:"has shared a memory with you"}),(0,Z.jsx)(u.Z,{direction:"column",spacing:1,alignItems:"center",children:(0,Z.jsx)(V,{title:j.thumbnail.title,date:j.thumbnail.date,thumbnailImage:j.thumbnail.photo.src,thumbnailImageSrcSet:(n=j.thumbnail.photo,(n.images?n.images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",")),handleImageLoad:fe,handleClick:function(){}})},j.thumbnail.memory_id),(0,Z.jsxs)(u.Z,{direction:"row",sx:{m:1},children:[(0,Z.jsx)(O,{label:"Accept",color:"primary",handleClick:me,disabled:Y||K}),(0,Z.jsx)(O,{label:"Reject",color:"error",handleClick:he,disabled:Y||K})]})]})});C(e)}var n}()}),[j,n,Y,K]),null!==j&&d||0===o?(0,Z.jsxs)(Z.Fragment,{children:[!0===Y||!0===K?(0,Z.jsx)(I.Z,{variant:"h6",sx:{p:2,color:"white"},children:ae}):null,S,(0,Z.jsx)(B.Z,{snackBarOpen:R,message:F,onClose:le,error:z})]}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(f.Z,{sx:{display:"flex",width:"100%",backgroundColor:"transparent",backgroundSize:"cover",backgroundImage:"linear-gradient(white, #0e516a)",justifyContent:"center"},children:(0,Z.jsxs)(u.Z,{direction:"column",alignItems:"center",sx:{width:"100%",my:3},children:[(0,Z.jsx)(N,{name:(0,Z.jsx)(p.Z,{type:"rectangular",sx:{width:"35%"}}),email:"P",picture:""}),(0,Z.jsx)(I.Z,{sx:{mb:2},children:"has shared a memory with you"}),(0,Z.jsx)(u.Z,{direction:"column",spacing:1,alignItems:"center",children:(0,Z.jsx)(V,{title:"",date:"",thumbnailImage:v,thumbnailImageSrcSet:"",handleImageLoad:function(){},handleClick:function(){}})},"loading"),(0,Z.jsxs)(u.Z,{direction:"row",sx:{m:1},children:[(0,Z.jsx)(O,{label:"Accept",color:"primary",handleClick:function(){},disabled:!0}),(0,Z.jsx)(O,{label:"Reject",color:"error",handleClick:function(){},disabled:!0})]})]})}),(0,Z.jsx)(B.Z,{snackBarOpen:R,message:F,onClose:le,error:z}),(0,Z.jsx)(f.Z,{component:"div",sx:{display:"none"},children:S})]})}function ae(e){var n=e.mode,t=e.handleChange;return(0,Z.jsx)(u.Z,{direction:"row",justifyContent:"center",sx:{py:1,backgroundColor:"button.main"},children:(0,Z.jsxs)(c.Z,{color:"primary",value:n,exclusive:!0,"aria-label":"Memory Modes",children:[(0,Z.jsx)(l.Z,{value:"own",sx:{borderRadius:"30px"},onClick:t,children:"My Memories"}),(0,Z.jsx)(l.Z,{value:"shared",onClick:t,children:"Shared With Me"}),(0,Z.jsx)(l.Z,{value:"review",sx:{borderRadius:"30px"},onClick:t,children:"Review"})]})})}function ie(e){var n=e.mode,t=e.memoryID;return"own"===n?(0,Z.jsx)(A,{}):"shared"===n?(0,Z.jsx)(z,{}):"review"===n?(0,Z.jsx)(re,{memoryID:t}):void 0}function oe(e){var n=e.initMode,t=(0,o.UO)().memoryMode,l=(0,s.lr)(),c=(0,r.Z)(l,1)[0],m=(0,i.useState)(n),h=(0,r.Z)(m,2),f=h[0],x=h[1];(0,i.useEffect)((function(){x(t||n)}),[t,n]);return(0,Z.jsx)(d.Z,{create:!0,children:(0,Z.jsx)(a.Z,{children:(0,Z.jsxs)(u.Z,{direction:"column",children:[(0,Z.jsx)(ae,{mode:f,handleChange:function(e,n){x(n)}}),(0,Z.jsx)(ie,{mode:f,memoryID:c.get("memoryID")})]})})})}re.defaultProps={memoryID:""},ie.defaultProps={memoryID:""}},1470:function(e,n,t){t.d(n,{Z:function(){return R}});var r=t(30168),a=t(63366),i=t(87462),o=t(47313),s=t(2197),l=t(30686),c=t(8007),u=t(30570),d=t(17551),m=t(17592),h=t(31033),f=t(14363),x=t(1167);function p(e){return(0,x.ZP)("MuiSkeleton",e)}(0,f.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g,v,Z,b,j,y,w,k,S=t(46417),C=["animation","className","component","height","style","variant","width"],I=(0,l.F4)(j||(j=g||(g=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),P=(0,l.F4)(y||(y=v||(v=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),M=(0,m.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],!1!==t.animation&&n[t.animation],t.hasChildren&&n.withChildren,t.hasChildren&&!t.width&&n.fitContent,t.hasChildren&&!t.height&&n.heightAuto]}})((function(e){var n=e.theme,t=e.ownerState,r=(0,u.Wy)(n.shape.borderRadius)||"px",a=(0,u.YL)(n.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:n.vars?n.vars.palette.Skeleton.bg:(0,d.Fq)(n.palette.text.primary,"light"===n.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(n.vars||n).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,l.iv)(w||(w=Z||(Z=(0,r.Z)(["\n      animation: "," 2s ease-in-out 0.5s infinite;\n    "]))),I)}),(function(e){var n=e.ownerState,t=e.theme;return"wave"===n.animation&&(0,l.iv)(k||(k=b||(b=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 2s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),P,(t.vars||t).palette.action.hover)})),R=o.forwardRef((function(e,n){var t=(0,h.i)({props:e,name:"MuiSkeleton"}),r=t.animation,o=void 0===r?"pulse":r,l=t.className,u=t.component,d=void 0===u?"span":u,m=t.height,f=t.style,x=t.variant,g=void 0===x?"text":x,v=t.width,Z=(0,a.Z)(t,C),b=(0,i.Z)({},t,{animation:o,component:d,variant:g,hasChildren:Boolean(Z.children)}),j=function(e){var n=e.classes,t=e.variant,r=e.animation,a=e.hasChildren,i=e.width,o=e.height,s={root:["root",t,r,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]};return(0,c.Z)(s,p,n)}(b);return(0,S.jsx)(M,(0,i.Z)({as:d,ref:n,className:(0,s.Z)(j.root,l),ownerState:b},Z,{style:(0,i.Z)({width:v,height:m},f)}))}))},64586:function(e,n,t){e.exports=t.p+"static/media/image-loading.f1b4462988545d9c460a.png"}}]);