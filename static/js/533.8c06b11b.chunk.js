"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[533],{1001:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(2169),a=t(9504),i=t(9585),o=t(890),l=t(1918),s=t(6608),c=t(184);function u(e){var n=e.imageSrc,t=e.imageSrcSet,a=e.title,i=e.handleImageLoad;return(0,c.jsx)(r.Z,{component:"img",src:n,srcSet:t,alt:a,sx:{textAlign:"center",objectFit:"cover",height:{lg:350,md:300,xs:250}},onLoad:i})}function d(e){var n=e.title,t=e.date,r=e.avatar,s=e.shared;return(0,c.jsx)(a.Z,{children:(0,c.jsx)(i.Z,{disableTypography:!0,avatar:r,title:(0,c.jsxs)(o.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:[n,""!==s?(0,c.jsxs)(c.Fragment,{children:[" ",(0,c.jsx)(l.Z,{label:s,size:"small",variant:"filled",color:"Shared"===s?"success":"default",sx:{height:"auto"}})]}):null]}),subheader:(0,c.jsx)(o.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function m(e){var n=e.title,t=e.date,r=e.avatar,a=e.shared,i=e.thumbnailImage,o=e.thumbnailImageSrcSet,l=e.handleClick,m=e.handleImageLoad;return(0,c.jsxs)(s.Z,{handleClick:l,children:[(0,c.jsx)(u,{imageSrc:i,imageSrcSet:o,title:n,handleImageLoad:m}),(0,c.jsx)(d,{title:n,date:t,avatar:r,shared:a})]})}d.defaultProps={title:"Memory Thumbnail Image",date:"Memory Date",avatar:"",shared:""},u.defaultProps={title:"Memory Thumbnail Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},m.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){},avatar:"",shared:""}},6608:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7621),a=t(6647),i=t(184);function o(e){var n=e.handleClick,t=e.children;return(0,i.jsx)(a.Z,{onClick:n,children:(0,i.jsx)(r.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:{lg:430,md:380,xs:330},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:t})})}},8533:function(e,n,t){t.r(n),t.d(n,{default:function(){return ie}});var r=t(9439),a=t(2791),i=t(7689),o=t(1087),l=t(388),s=t(3238),c=t(3767),u=t(2766),d=t(4165),m=t(5861),h=t(4554),f=t(1889),x=t(3402),g=t(1001),p=t(4586),v=t(184);function Z(e){var n=e.memory;return(0,v.jsx)(f.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,v.jsx)(g.Z,{title:(0,v.jsx)(x.Z,{type:"rectangular",sx:{width:"60%"}}),date:(0,v.jsx)(x.Z,{type:"rectangular",sx:{width:"50%"}}),thumbnailImage:p,handleClick:function(){}})},n)}function b(e){var n=e.children;return(0,v.jsx)(f.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:n})}b.defaultProps={children:""};var j=t(6194),y=t(5193),w=t(890),k=t(8054),S=t(6608);function C(){var e=(0,i.s0)(),n=(0,y.Z)((function(e){return e.breakpoints.down("md")}));return(0,v.jsx)(f.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,v.jsxs)(S.Z,{handleClick:function(){e("/memory/create")},children:[(0,v.jsx)(w.Z,{variant:n?"body1":"h5",color:"button.main",sx:{p:1,color:"secondary.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0},children:"Create a memory"}),(0,v.jsx)(k.Z,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"creatememory")}function I(e){var n=e.handleMoreClick;return(0,v.jsx)(f.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,v.jsx)(S.Z,{handleClick:n,children:(0,v.jsx)(w.Z,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:"30px",borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}function M(e){var n=e.memories,t=e.handleMoreClick,r=e.nextToken,a=e.handleImageLoad,i=e.create,o=e.handleClick,l=n.sort((function(e,n){return e.memory_id>n.memory_id?1:-1}));return(0,v.jsxs)(f.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[i||0===n.length?(0,v.jsx)(C,{}):null,l.map((function(e){return(0,v.jsx)(f.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,v.jsx)(g.Z,{title:e.title,date:e.date,avatar:e.owner?(0,v.jsx)(j.S,{name:e.owner.name,picture:e.owner.picture,email:e.owner.email}):null,shared:e.shared,thumbnailImage:e.photo.src,thumbnailImageSrcSet:(n=e.photo,(n.images?n.images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",")),handleClick:function(){return o(e)},handleImageLoad:a})},e.title);var n})),r&&(0,v.jsx)(I,{handleMoreClick:t})]})}M.defaultProps={memories:[]};var P=t(5899);function R(e,n,t){return L.apply(this,arguments)}function L(){return L=(0,m.Z)((0,d.Z)().mark((function e(n,t,r){var a,i,o,l=arguments;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>3&&void 0!==l[3]?l[3]:"",e.prev=1,e.next=4,P.Z.getMemories(a);case 4:if(!(i=e.sent)){e.next=13;break}if(!i.memories){e.next=13;break}return r(i.memories),e.next=10,Promise.all(P.Z.getThumbnails(i.memories));case 10:o=e.sent,n(o),t(i.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),L.apply(this,arguments)}function _(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],o=n[1],l=(0,a.useState)([]),s=(0,r.Z)(l,2),c=s[0],u=s[1],d=(0,a.useState)([]),m=(0,r.Z)(d,2),f=m[0],x=m[1],g=(0,a.useState)(0),p=(0,r.Z)(g,2),j=p[0],y=p[1],w=(0,a.useState)(null),k=(0,r.Z)(w,2),S=k[0],I=k[1],P=(0,i.s0)(),L=function(e){P("/memory/".concat(e.memory_id),{state:e})},_=function(){return y((function(e){return e+1}))},A=function(e){return o(e)},T=function(e){return x((function(n){return n.concat(e)}))},D=function(e){return u((function(n){return n.concat(e)}))};return(0,a.useEffect)((function(){return R(T,A,D,t)}),[]),(0,a.useEffect)((function(){I((0,v.jsx)(M,{create:!0,memories:f,nextToken:t,handleMoreClick:function(){return R(T,A,D,t)},handleImageLoad:_,handleClick:L}))}),[f,t]),console.log("I am in own memory",f),f.length===c.length&&j>=c.length?S:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(b,{children:[(0,v.jsx)(C,{}),c.map((function(e){return(0,v.jsx)(Z,{memory:e})}))]}),(0,v.jsx)(h.Z,{component:"div",sx:{display:"none"},children:S})]})}var A=t(6151),T=t(6489);function D(e){var n=e.message,t=(0,i.s0)();return(0,v.jsxs)(c.Z,{direction:"column",justifyContent:"center",alignItems:"center",sx:{width:"95%",maxWidth:"500px",position:"fixed",top:"50%",right:"50%",transform:"translate(50%, -50%)",border:"2px solid gray",height:"60%",borderRadius:"10px"},children:[(0,v.jsx)(T.r,{fill:"gray",width:"64px",height:"64px"}),(0,v.jsx)(w.Z,{color:"gray",sx:{fontSize:"1.3rem"},children:n}),(0,v.jsx)(w.Z,{color:"gray",sx:{pb:8,fontSize:"1.3rem"},children:"Check again later."}),(0,v.jsx)(w.Z,{color:"primary",children:"In the mean time, you can"}),(0,v.jsx)(A.Z,{variant:"contained",onClick:function(){return t("/memory/create")},children:"Create a Memory"})]})}function F(e,n,t){return E.apply(this,arguments)}function E(){return E=(0,m.Z)((0,d.Z)().mark((function e(n,t,r){var a,i,o,l=arguments;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>3&&void 0!==l[3]?l[3]:"",e.prev=1,e.next=4,P.Z.getAcceptedMemories(a);case 4:if(!(i=e.sent)){e.next=13;break}if(!i.memories){e.next=13;break}return r(i.memories),e.next=10,Promise.all(P.Z.getAcceptedThumbnails(i.memories));case 10:o=e.sent,n(o),t(i.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),E.apply(this,arguments)}function W(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],o=n[1],l=(0,a.useState)([]),s=(0,r.Z)(l,2),c=s[0],u=s[1],d=(0,a.useState)([]),m=(0,r.Z)(d,2),f=m[0],x=m[1],g=(0,a.useState)(0),p=(0,r.Z)(g,2),j=p[0],y=p[1],w=(0,a.useState)(null),k=(0,r.Z)(w,2),S=k[0],C=k[1],I=(0,i.s0)(),P=function(e){I("/memory/shared/".concat(e.memory_id),{state:e})},R=function(){return y((function(e){return e+1}))},L=function(e){return o(e)},_=function(e){e.map((function(e){var n=e.thumbnail;return n.owner=e.owner_details,console.log("combined shared memory details",n),x((function(e){return e.concat([n])})),0}))},A=function(e){return u((function(n){return n.concat(e)}))};return(0,a.useEffect)((function(){return F(_,L,A,t)}),[]),(0,a.useEffect)((function(){f.length>0?C((0,v.jsx)(M,{create:!1,memories:f,nextToken:t,handleMoreClick:function(){return F(_,L,A,t)},handleImageLoad:R,handleClick:P})):C((0,v.jsx)(D,{message:"No shared memories right now."}))}),[f,t]),f.length===c.length&&j>=c.length?S:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b,{children:c.map((function(e){return(0,v.jsx)(Z,{memory:e})}))}),(0,v.jsx)(h.Z,{component:"div",sx:{display:"none"},children:S})]})}function z(e){var n=e.label,t=e.handleClick,r=e.color;return(0,v.jsx)(A.Z,{variant:"contained",color:r,sx:{m:1},onClick:t,children:(0,v.jsx)(w.Z,{variant:"h6",children:n})})}function N(e){var n=e.name,t=e.email,r=e.picture;return(0,v.jsxs)(c.Z,{direction:"row",justifyContent:"center",alignItems:"center",sx:{width:"100%"},children:[(0,v.jsx)(j.S,{name:n,email:t,picture:r}),(0,v.jsx)(w.Z,{variant:"h6",sx:{px:1},children:n})]})}var O=t(4700),X=t(9052),B=t(2169),U=t(9504),q=t(9585),Y=t(7621),G=t(6647);function H(e){var n=e.handleClick,t=e.children;return(0,v.jsx)(G.Z,{onClick:n,sx:{display:"flex"},children:(0,v.jsx)(Y.Z,{elevation:0,sx:{bgcolor:"#fff",borderRadius:5,position:"relative",maxWidth:"700px",width:"95%"},children:t})})}function J(e){var n=e.imageSrc,t=e.imageSrcSet,r=e.title,a=e.handleImageLoad;return(0,v.jsx)(B.Z,{component:"img",src:n,srcSet:t,alt:r,sx:{borderColor:"muted.main",borderRadius:4,textAlign:"center",objectFit:"cover",height:{lg:400,sm:350,xs:350}},onLoad:a})}function K(e){var n=e.title,t=e.date;return console.log("title, date",n,t),(0,v.jsx)(U.Z,{children:(0,v.jsx)(q.Z,{disableTypography:!0,title:(0,v.jsx)(w.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:n}),subheader:(0,v.jsx)(w.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function Q(e){var n=e.title,t=e.date,r=e.thumbnailImage,a=e.thumbnailImageSrcSet,i=e.handleClick,o=e.handleImageLoad;return console.log("rendering review item"),(0,v.jsxs)(H,{handleClick:i,children:[(0,v.jsx)(J,{imageSrc:r,imageSrcSet:a,title:n,handleImageLoad:o}),(0,v.jsx)(K,{title:n,date:t})]})}K.defaultProps={title:"",date:""},J.defaultProps={title:"Review Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},Q.defaultProps={title:"",date:"",thumbnailImageSrcSet:"",handleImageLoad:function(){}};function V(e,n,t){return $.apply(this,arguments)}function $(){return $=(0,m.Z)((0,d.Z)().mark((function e(n,t,r){var a,i,o,l=arguments;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>3&&void 0!==l[3]?l[3]:"",e.prev=1,e.next=4,P.Z.getPendingMemories(a);case 4:if(!(i=e.sent)){e.next=14;break}if(r(i.count),!i.memory){e.next=14;break}return t(i.memory),console.log("review memories",i),e.next=12,P.Z.getPendingThumbnails(i.memory);case 12:o=e.sent,n(o);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])}))),$.apply(this,arguments)}function ee(){return(ee=(0,m.Z)((0,d.Z)().mark((function e(n,t){var r,a;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=X.Z.getUserInfo(),e.next=4,P.Z.acceptShare(n,r.email);case 4:a=e.sent,console.log(a),t(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function ne(){return(ne=(0,m.Z)((0,d.Z)().mark((function e(n,t){var r,a;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=X.Z.getUserInfo(),e.next=4,P.Z.rejectShare(n,r.email);case 4:a=e.sent,console.log(a),t(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function te(e){var n=e.memoryID,t=(0,a.useState)(null),i=(0,r.Z)(t,2),o=i[0],l=i[1],s=(0,a.useState)(!1),u=(0,r.Z)(s,2),d=u[0],m=u[1],f=(0,a.useState)(null),g=(0,r.Z)(f,2),Z=g[0],b=g[1],j=(0,a.useState)(null),y=(0,r.Z)(j,2),k=y[0],S=y[1],C=(0,a.useState)(null),I=(0,r.Z)(C,2),M=I[0],P=I[1],R=(0,a.useState)(null),L=(0,r.Z)(R,2),_=L[0],A=L[1],T=(0,a.useState)(null),F=(0,r.Z)(T,2),E=F[0],W=F[1],X=(0,a.useState)(null),B=(0,r.Z)(X,2),U=B[0],q=B[1];console.log(n);var Y=function(e,n){A(!0),W(e),q(n)},G=function(){A(!1),W(null),q(null)},H=function(){S(null),P(null),V(S,b,l,n)};(0,a.useEffect)((function(){return V(S,b,l,n)}),[]);var J=function(e){console.log("accept response",e),e.ok?(Y("Memory share accepted",!1),m(!1),H()):Y("Error while accepting memory share",!0)},K=function(e){console.log("reject response",e),e.ok?(Y("Memory share rejected",!1),m(!1),H()):Y("Error while rejecting memory share",!0)},$=function(){!function(e,n){ee.apply(this,arguments)}(k.thumbnail.memory_id,J),console.log("accepting memoryID",k.thumbnail.memory_id)},te=function(){!function(e,n){ne.apply(this,arguments)}(k.thumbnail.memory_id,K),console.log("rejecting memoryID",k.thumbnail.memory_id)},re=function(){return m(!0)};return console.log("pending memory",k),0===o&&null===M&&P((0,v.jsx)(D,{message:"Nothing to review right now."})),(0,a.useEffect)((function(){return function(){if(null!==k){var e=(0,v.jsxs)(h.Z,{sx:{display:"flex",width:"100%",backgroundColor:"transparent",backgroundSize:"cover",backgroundImage:"linear-gradient(white, #0e516a)",justifyContent:"center"},children:[(0,v.jsxs)(c.Z,{direction:"column",alignItems:"center",sx:{width:"100%",my:3},children:[(0,v.jsx)(N,{name:k.owner_details.name||"",email:k.owner_details.email||"P",picture:k.owner_details.picture||""}),(0,v.jsx)(w.Z,{sx:{mb:2},children:"has shared a memory with you"}),(0,v.jsx)(c.Z,{direction:"column",spacing:1,alignItems:"center",children:(0,v.jsx)(Q,{title:k.thumbnail.title,date:k.thumbnail.date,thumbnailImage:k.thumbnail.photo.src,thumbnailImageSrcSet:(n=k.thumbnail.photo,(n.images?n.images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",")),handleImageLoad:re,handleClick:function(){}})},k.thumbnail.memory_id),(0,v.jsxs)(c.Z,{direction:"row",sx:{m:1},children:[(0,v.jsx)(z,{label:"Accept",color:"primary",handleClick:$}),(0,v.jsx)(z,{label:"Reject",color:"error",handleClick:te})]})]}),(0,v.jsx)(O.Z,{snackBarOpen:_,message:E,onClose:G,error:U})]});P(e)}var n}()}),[k,n]),console.log(k,Z,d,null!==k&&d||0===o),null!==k&&d||0===o?M:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h.Z,{sx:{display:"flex",width:"100%",backgroundColor:"transparent",backgroundSize:"cover",backgroundImage:"linear-gradient(white, #0e516a)",justifyContent:"center"},children:(0,v.jsxs)(c.Z,{direction:"column",alignItems:"center",sx:{width:"100%",my:3},children:[(0,v.jsx)(N,{name:(0,v.jsx)(x.Z,{type:"rectangular",sx:{width:"35%"}}),email:"P",picture:""}),(0,v.jsx)(w.Z,{sx:{mb:2},children:"has shared a memory with you"}),(0,v.jsx)(c.Z,{direction:"column",spacing:1,alignItems:"center",children:(0,v.jsx)(Q,{title:"",date:"",thumbnailImage:p,thumbnailImageSrcSet:"",handleImageLoad:function(){},handleClick:function(){}})},"loading"),(0,v.jsxs)(c.Z,{direction:"row",sx:{m:1},children:[(0,v.jsx)(z,{label:"Accept",color:"primary",handleClick:$}),(0,v.jsx)(z,{label:"Reject",color:"error",handleClick:te})]})]})}),(0,v.jsx)(h.Z,{component:"div",sx:{display:"none"},children:M})]})}function re(e){var n=e.mode,t=e.handleChange;return console.log("I am in memory modes"),(0,v.jsx)(c.Z,{direction:"row",justifyContent:"center",sx:{py:1,backgroundColor:"button.main"},children:(0,v.jsxs)(s.Z,{color:"primary",value:n,exclusive:!0,"aria-label":"Memory Modes",children:[(0,v.jsx)(l.Z,{value:"own",sx:{borderRadius:"30px"},onClick:t,children:"My Memories"}),(0,v.jsx)(l.Z,{value:"shared",onClick:t,children:"Shared With Me"}),(0,v.jsx)(l.Z,{value:"review",sx:{borderRadius:"30px"},onClick:t,children:"Review"})]})})}function ae(e){var n=e.mode,t=e.memoryID;return"own"===n?(0,v.jsx)(_,{}):"shared"===n?(0,v.jsx)(W,{}):"review"===n?(0,v.jsx)(te,{memoryID:t}):void 0}function ie(e){var n=e.initMode,t=(0,i.UO)(),l=t.memoryMode,s=(0,o.lr)(),d=(0,r.Z)(s,1)[0],m=(0,a.useState)(n),h=(0,r.Z)(m,2),f=h[0],x=h[1];(0,a.useEffect)((function(){x(l||n)}),[l,n]),console.log(n,l,t,d);return(0,v.jsx)(u.Z,{create:!0,children:(0,v.jsxs)(c.Z,{direction:"column",children:[(0,v.jsx)(re,{mode:f,handleChange:function(e,n){x(n)}}),(0,v.jsx)(ae,{mode:f,memoryID:d.get("memoryID")})]})})}te.defaultProps={memoryID:""},ae.defaultProps={memoryID:""}},3402:function(e,n,t){t.d(n,{Z:function(){return R}});var r=t(168),a=t(3366),i=t(7462),o=t(2791),l=t(8182),s=t(2554),c=t(4419),u=t(1572),d=t(2065),m=t(7630),h=t(3736),f=t(5878),x=t(1217);function g(e){return(0,x.Z)("MuiSkeleton",e)}(0,f.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var p,v,Z,b,j,y,w,k,S=t(184),C=["animation","className","component","height","style","variant","width"],I=(0,s.F4)(j||(j=p||(p=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),M=(0,s.F4)(y||(y=v||(v=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),P=(0,m.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],!1!==t.animation&&n[t.animation],t.hasChildren&&n.withChildren,t.hasChildren&&!t.width&&n.fitContent,t.hasChildren&&!t.height&&n.heightAuto]}})((function(e){var n=e.theme,t=e.ownerState,r=(0,u.Wy)(n.shape.borderRadius)||"px",a=(0,u.YL)(n.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:n.vars?n.vars.palette.Skeleton.bg:(0,d.Fq)(n.palette.text.primary,"light"===n.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(n.vars||n).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,s.iv)(w||(w=Z||(Z=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),I)}),(function(e){var n=e.ownerState,t=e.theme;return"wave"===n.animation&&(0,s.iv)(k||(k=b||(b=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),M,(t.vars||t).palette.action.hover)})),R=o.forwardRef((function(e,n){var t=(0,h.Z)({props:e,name:"MuiSkeleton"}),r=t.animation,o=void 0===r?"pulse":r,s=t.className,u=t.component,d=void 0===u?"span":u,m=t.height,f=t.style,x=t.variant,p=void 0===x?"text":x,v=t.width,Z=(0,a.Z)(t,C),b=(0,i.Z)({},t,{animation:o,component:d,variant:p,hasChildren:Boolean(Z.children)}),j=function(e){var n=e.classes,t=e.variant,r=e.animation,a=e.hasChildren,i=e.width,o=e.height,l={root:["root",t,r,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]};return(0,c.Z)(l,g,n)}(b);return(0,S.jsx)(P,(0,i.Z)({as:d,ref:n,className:(0,l.Z)(j.root,s),ownerState:b},Z,{style:(0,i.Z)({width:v,height:m},f)}))}))},4586:function(e,n,t){e.exports=t.p+"static/media/image-loading.f1b4462988545d9c460a.png"}}]);
//# sourceMappingURL=533.8c06b11b.chunk.js.map