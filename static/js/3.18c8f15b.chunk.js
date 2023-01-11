"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[3],{487:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(3400),a=t(9823),i=t(2065),o=t(184);function s(e){var n=e.size,t=e.handleClick;return(0,o.jsx)(r.Z,{size:n,sx:{color:"black",bgcolor:(0,i.Fq)("#fff",.4),position:"absolute",top:10,right:12},onClick:t,children:(0,o.jsx)(a.Z,{size:n})})}s.defaultProps={size:"small"}},4700:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(9439),a=t(2791),i=t(5646),o=t(3400),s=t(9823),c=t(3767),u=t(1428),l=t(890),d=t(184);function f(e){var n=e.message;return!0===e.error?(0,d.jsxs)(c.Z,{direction:"row",spacing:2,justifyContents:"space-between",alignItems:"center",children:[(0,d.jsx)(s.Z,{fontSize:"small",color:"error"}),(0,d.jsx)(l.Z,{children:n})]}):(0,d.jsxs)(c.Z,{direction:"row",spacing:2,justifyContents:"space-between",alignItems:"center",children:[(0,d.jsx)(u.Z,{fontSize:"small",color:"success"}),(0,d.jsx)(l.Z,{children:n})]})}function h(e){var n=e.snackBarOpen,t=e.message,c=e.onClose,u=e.error,l=(0,a.useState)(n),h=(0,r.Z)(l,2),x=h[0],m=h[1],p=(0,a.useState)(t),Z=(0,r.Z)(p,2),g=Z[0],j=Z[1];(0,a.useEffect)((function(){return m(n)}),[n]),(0,a.useEffect)((function(){return j(t)}),[t]);var b=function(){m(!1),j(null),c()},v=(0,d.jsx)(o.Z,{size:"small","aria-label":"close",color:"inherit",onClick:b,children:(0,d.jsx)(s.Z,{fontSize:"small"})});return(0,d.jsx)(i.Z,{open:x,autoHideDuration:3e3,onClose:b,message:(0,d.jsx)(f,{message:g,error:u}),action:v,anchorOrigin:{vertical:"top",horizontal:"center"}})}h.defaultProps={error:!1}},4125:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9439),a=t(2791);function i(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];return[i,o,function(e){var n=new Date(e);if(e){var t=n.toLocaleDateString("en-in",{day:"numeric",month:"long",year:"numeric"});o(t)}else o(null)}]}},1619:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9439),a=t(2791);function i(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];return[i,o,function(e){return o(e.target.value)}]}},2168:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9439),a=t(2791);function i(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];(0,a.useEffect)((function(){return o(e)}),[e]);return[i,o,function(e){o(e.target.value)}]}},1137:function(e,n,t){t.d(n,{Z:function(){return O}});var r=t(9439),a=t(2791),i=t(7689),o=t(7621),s=t(9585),c=t(4554),u=t(2898),l=t(4721),d=t(3967),f=t(5193),h=t(4700),x=t(4165),m=t(5861),p=t(3400),Z=t(184);function g(e){var n=e.icon,t=e.label;return(0,Z.jsxs)(c.Z,{sx:{alignItems:"center"},children:[(0,Z.jsx)(p.Z,{"aria-label":"delete",sx:{bgcolor:"form.input"},children:n}),t]})}var j=t(7247),b=t(5899);function v(){return(0,Z.jsx)(g,{icon:(0,Z.jsx)(j.Z,{}),label:"Delete"})}function y(){return(y=(0,m.Z)((0,x.Z)().mark((function e(n,t,r,a){var i;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.Z.deleteMemory(n,t,r);case 3:i=e.sent,a(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var k=t(5422),C=t(3786),w=t(5574),S=t(6151),z=t(890),E=t(3767),P=t(5661);function D(e){var n=e.confirm,t=e.handleCallback,i=e.handleCloseCallback,o=e.title,s=e.message,u=(0,a.useState)(n),l=(0,r.Z)(u,2),d=l[0],f=l[1];(0,a.useEffect)((function(){return f(n)}),[n]);var h=function(){f(!1),i()};return(0,Z.jsxs)(w.Z,{open:d,sx:{backgroundColor:"faded.black"},children:[(0,Z.jsx)(P.Z,{children:o}),(0,Z.jsxs)(c.Z,{sx:{p:2},children:[(0,Z.jsx)(z.Z,{sx:{pb:2},children:s}),(0,Z.jsxs)(E.Z,{spacing:2,direction:"row",children:[(0,Z.jsx)(S.Z,{variant:"contained",onClick:h,children:"Cancel"}),(0,Z.jsx)(S.Z,{variant:"outlined",onClick:function(){h(),t()},children:"OK"})]})]})]})}var I=t(1286);function M(){return(0,Z.jsx)(g,{icon:(0,Z.jsx)(I.Z,{}),label:"Edit"})}var R=t(580);function U(){return(0,Z.jsx)(g,{icon:(0,Z.jsx)(R.Z,{}),label:"Share"})}function T(e){var n=e.snackBar,t=e.handleDeleteObject,i=e.handleEditClick,o=(0,a.useState)(null),s=(0,r.Z)(o,2),c=s[0],l=s[1],d=(0,a.useState)(!1),f=(0,r.Z)(d,2),h=f[0],x=f[1],m=(0,a.useState)(""),p=(0,r.Z)(m,2),g=p[0],j=p[1],b=(0,a.useState)(""),y=(0,r.Z)(b,2),w=y[0],S=y[1],z=(0,a.useState)((function(){})),E=(0,r.Z)(z,2),P=E[0],I=E[1],R=Boolean(c),T=function(){return l(null)},O=function(e,n,t){j(e),S(n),I(t),x(!0),T()};return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(u.Z,{onClick:function(e){return l(e.currentTarget)}}),(0,Z.jsxs)(k.Z,{id:"memory-actions",anchorEl:c,open:R,onClose:T,MenuListProps:{"aria-labelledby":"basic-button"},sx:{borderRadius:"10px"},children:[(0,Z.jsx)(C.Z,{onClick:function(){i(),T()},children:(0,Z.jsx)(M,{})}),(0,Z.jsx)(C.Z,{onClick:function(){return O("Share Memory","Do you want to share this memory?",(function(){}))},children:(0,Z.jsx)(U,{})}),(0,Z.jsx)(C.Z,{onClick:function(){return O("Delete Memory","Do you want to delete this memory?",(function(){return t()}))},children:(0,Z.jsx)(v,{})})]}),(0,Z.jsx)(D,{title:g,confirm:h,handleCallback:P,handleCloseCallback:function(){return x(!1)},message:w}),n]})}function O(e){var n,t=e.header,x=e.subheader,m=e.photoLayout,p=e.storyLayout,g=e.bucket,j=e.memoryID,b=e.authURL,v=e.handleEditClick,k=e.preview,C=(0,a.useState)(null),w=(0,r.Z)(C,2),S=w[0],z=w[1],E=(0,a.useState)(null),P=(0,r.Z)(E,2),D=P[0],I=P[1],M=(0,a.useState)(null),R=(0,r.Z)(M,2),U=R[0],O=R[1],L=(0,d.Z)();n=(0,f.Z)(L.breakpoints.down("lg"))?"":"vertical-scroll";var F=function(e,n){I(e),O(n)},B=function(e){"ok"===e.status?F("Memory deleted successfully",!1):F("Error while deleting memory",!0),z(!0)},H=(0,Z.jsx)(h.Z,{snackBarOpen:S,message:D,onClose:function(){z(!1),I(null),O(null)},error:U}),Y=k?(0,Z.jsx)(u.Z,{}):(0,Z.jsx)(T,{snackBar:H,handleDeleteObject:function(){!function(e,n,t,r){y.apply(this,arguments)}(g,b,j,B)},handleEditClick:v});return!1===S?(0,Z.jsx)(i.Fg,{to:"/memories",replace:!0}):(0,Z.jsxs)(o.Z,{sx:{boxShadow:0,bgcolor:"button.main",p:1},children:[(0,Z.jsx)(s.Z,{title:t,subheader:x,action:Y}),(0,Z.jsx)(l.Z,{}),(0,Z.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"flex-start",flexDirection:{lg:"row",xs:"column"},height:{lg:"72vh"},my:1},children:[(0,Z.jsx)(c.Z,{sx:{width:{lg:"70%",xs:"100%"},overflowY:"scroll",borderRadius:5},className:n,children:m}),(0,Z.jsx)(c.Z,{sx:{width:{lg:"30%",sx:"100%"},overflowY:"scroll",mt:{lg:0,xs:2},p:{lg:1},px:1},className:n,children:p})]})]})}},8003:function(e,n,t){t.d(n,{Z:function(){return fe}});var r=t(7762),a=t(4165),i=t(5861),o=t(9439),s=t(2791),c=t(7689),u=t(6151),l=t(533),d=t(1428),f=t(7394),h=t(890),x=t(3767),m=t(5574),p=t(7621),Z=t(9585),g=t(9504),j=t(4721),b=t(4554),v=t(1133),y=t(5397),k=t(3400),C=t(487),w=t(1065),S=t(8894),z=t(184),E=(0,S.yP)((0,S.bH)((0,S.p6)(w.ZP)));function P(e){var n=e.ind,t=e.images,r=e.handleNext,a=e.handleStepChange,i=(0,s.useState)(n),c=(0,o.Z)(i,2),u=c[0],l=c[1],d=(0,s.useState)(0),f=(0,o.Z)(d,2),h=f[0],x=f[1],m=(0,s.useState)(null),p=(0,o.Z)(m,2),Z=p[0],g=p[1];(0,s.useEffect)((function(){l(n)}),[n]),(0,s.useEffect)((function(){h<t.length?g("none"):g("flex")}),[h]);var j=function(){return x((function(e){return e+1}))};return(0,z.jsx)(E,{index:u,onChangeIndex:a,enableMouseEvents:!0,animateTransitions:!0,interval:1e4,onClick:r,style:{backgroundColor:"muted.main"},slideRenderer:function(e){var n=e.index,r=e.key,a=function(e,n){var t=e%n;return t<0?t+n:t}(n,t.length),i=(t[a].images?t[a].images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",");return(0,z.jsx)(b.Z,{component:"img",onLoad:j,sx:{display:{display:Z},justifyContents:"center",width:"100%",bgcolor:"#1c1c1c"},src:t[a].src,srcSet:i,style:{display:"block",boxSizing:"content-box",cursor:"pointer",objectFit:"contain",height:"100vh"},alt:t[a].src},r)}})}function D(e){var n=e.handleClick;return(0,z.jsx)(k.Z,{edge:"start",color:"primary","aria-label":"close",onClick:n,sx:{position:"absolute",top:"50%",right:0,transform:"translate(0%, -50%)"},children:(0,z.jsx)(y.Z,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function I(e){var n=e.handleClick;return(0,z.jsx)(k.Z,{edge:"start",color:"primary","aria-label":"close",onClick:n,sx:{position:"absolute",top:"50%",left:0,transform:"translate(0%, -50%)"},children:(0,z.jsx)(v.Z,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function M(e){var n=e.open,t=e.title,r=e.date,a=e.images,i=e.index,o=e.handleNext,s=e.handleBack,c=e.handleClose,u=e.handleChange;return(0,z.jsxs)(m.Z,{open:n,fullScreen:!0,children:[(0,z.jsx)(P,{images:a,ind:i,handleNext:o,handleStepChange:u}),(0,z.jsx)(Z.Z,{title:t,subheader:r,sx:{position:"absolute",top:10,left:10,bgcolor:"button.main",borderRadius:3,padding:1}}),(0,z.jsx)(I,{handleClick:s}),(0,z.jsx)(D,{handleClick:o}),(0,z.jsx)(C.Z,{size:"large",handleClick:c})]})}P.defaultProps={ind:0},M.defaultProps={index:0};var R=t(1137),U=t(7254),T=t(9906),O=t(5130),L=t(1286),F=t(2168);function B(e){var n=e.editable,t=e.text,r=e.handleTitleUpdate,a=(0,F.Z)(t),i=(0,o.Z)(a,3),c=i[0],u=i[1],l=i[2],d=(0,s.useState)(n),f=(0,o.Z)(d,2),m=f[0],p=f[1],Z=(0,s.useState)(!1),g=(0,o.Z)(Z,2),j=g[0],b=g[1];return(0,s.useEffect)((function(){p(n),u(t),b(!1)}),[n]),m||j?m&&!j?(0,z.jsxs)(x.Z,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[(0,z.jsx)(h.Z,{variant:"h6",children:c}),(0,z.jsx)(L.Z,{fontSize:"medium",onClick:function(){return b(!0)}})]}):m&&j?(0,z.jsxs)(x.Z,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start"},spacing:2,children:[(0,z.jsx)(U.Z,{id:"standard-basic",size:"small",label:"Title",onChange:l,variant:"standard",defaultValue:c,sx:{maxWidth:"200px"}}),(0,z.jsx)(T.Z,{fontSize:"medium",onClick:function(){r(c),b(!1)}}),(0,z.jsx)(O.Z,{fontSize:"medium",onClick:function(){u(t),b(!1)}})]}):void 0:(0,z.jsx)(h.Z,{variant:"h6",children:c})}var H=t(1413),Y=t(8239),A=t(6571),N=t(41),q=t(4125);function W(e){var n=e.editable,t=e.prevDate,r=e.handleDateUpdate,a=(0,s.useState)(n),i=(0,o.Z)(a,2),c=i[0],u=i[1],l=(0,s.useState)(!1),d=(0,o.Z)(l,2),f=d[0],m=d[1],p=(0,q.Z)(t),Z=(0,o.Z)(p,3),g=Z[0],j=Z[1],b=Z[2];return(0,s.useEffect)((function(){u(n),j(t),m(!1)}),[n,t]),c||f?c&&!f?(0,z.jsxs)(x.Z,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[(0,z.jsx)(h.Z,{children:g}),(0,z.jsx)(L.Z,{fontSize:"medium",onClick:function(){return m(!0)}})]}):c&&f?(0,z.jsxs)(x.Z,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start",mt:3},spacing:2,children:[(0,z.jsx)(A._,{dateAdapter:N.H,children:(0,z.jsx)(Y.M,{label:"Memory Date",value:g,onChange:b,placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return(0,z.jsx)(U.Z,(0,H.Z)({readOnly:!0,required:!0},e))}})}),(0,z.jsx)(T.Z,{fontSize:"medium",onClick:function(){r(g),m(!1)}}),(0,z.jsx)(O.Z,{fontSize:"medium",onClick:function(){j(t),m(!1)}})]}):void 0:(0,z.jsx)(h.Z,{children:g})}var X=t(1747),K=t(1619);function V(e){var n=e.editable,t=e.prevStory,r=e.handleStoryUpdate,a=(0,s.useState)(n),i=(0,o.Z)(a,2),c=i[0],u=i[1],l=(0,s.useState)(!1),d=(0,o.Z)(l,2),f=d[0],m=d[1],p=(0,K.Z)(t),Z=(0,o.Z)(p,3),g=Z[0],v=Z[1],y=Z[2],k=(0,s.useRef)();return(0,s.useEffect)((function(){u(n),v(t),m(!1)}),[n,t]),c||f?c&&!f?(0,z.jsxs)(x.Z,{direction:"column",spacing:2,children:[(0,z.jsxs)(x.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,z.jsx)(h.Z,{sx:{color:"muted.main"},children:"Edit Story"}),(0,z.jsx)(L.Z,{fontSize:"medium",onClick:function(){m(!0)}})]}),(0,z.jsx)(j.Z,{sx:{width:1}}),(0,z.jsx)(h.Z,{style:{whiteSpace:"pre-wrap"},children:g})]}):c&&f?(0,z.jsxs)(x.Z,{direction:"column",spacing:2,children:[(0,z.jsxs)(x.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,z.jsx)(h.Z,{sx:{color:"muted.main"},children:"Editing Story"}),(0,z.jsx)(T.Z,{fontSize:"medium",onClick:function(){r(g),m(!1)}}),(0,z.jsx)(O.Z,{fontSize:"medium",onClick:function(){v(t),m(!1)}})]}),(0,z.jsx)(j.Z,{sx:{width:1}}),(0,z.jsx)(b.Z,{sx:{p:2,m:1,my:2,border:1,borderColor:"primary.main",bgcolor:"input.background",minHeight:"70vh",borderRadius:5,width:"90%"},onClick:function(){return k.current.focus()},children:(0,z.jsx)(X.Z,{autoFocus:!0,"aria-label":"minimum height",placeholder:"Tell your story...",value:g,onChange:y,style:{width:"100%",minHeight:"184px",maxHeight:"70vh",boxSizing:"border-box",paddingTop:"5px",border:0,overflow:"auto",outline:"none",resize:"vertical",borderRadius:5,"&:focus":{border:0}},ref:k})})]}):void 0:(0,z.jsx)(h.Z,{style:{whiteSpace:"pre-wrap"},children:g})}var _=t(5987),G=t(5684),J=t(7262),Q=t(5523),$=t(7247),ee=t(2913),ne=t(9823),te=t(2065),re=["alt","style"],ae=["alt","style"];function ie(e){var n=e.children,t=e.onClick,r=e.name,a=e.updateOp;return(0,z.jsx)(u.Z,{id:r,variant:"contained",component:"label",onClick:t,sx:{color:a===r?"button.main":"muted.main",borderRadius:5,backgroundColor:a===r?"primary.main":"button.main",padding:"6px 8px","&:hover":{color:a===r?"button.main":"muted.main",backgroundColor:a===r?"primary.main":"button.main"}},children:n})}function oe(e){var n=e.handleChange,t=e.onClick,r=e.updateOp;return(0,z.jsxs)(ie,{onClick:t,name:"add",updateOp:r,children:[(0,z.jsx)("input",{type:"file",hidden:!0,multiple:!0,accept:"image/*",onChange:n}),(0,z.jsx)(ee.Z,{sx:{fontSize:"1.5rem"}}),"Add"]})}function se(e){var n=e.images,t=e.handlePhotoClick,r=e.renderPhoto,a=(0,s.useState)(null),i=(0,o.Z)(a,2),c=i[0],u=i[1];return(0,s.useEffect)((function(){var e=0,t=0;n.forEach((function(n){n.height>n.width?t+=1:e+=1})),u(e>t?"rows":"columns")}),[n]),r?(0,z.jsx)(G.Z,{layout:c,photos:n,onClick:t,spacing:2,renderPhoto:r}):(0,z.jsx)(G.Z,{layout:c,photos:n,onClick:t,spacing:2})}function ce(e){var n=e.editable,t=e.images,r=e.handlePhotoClick,a=e.handleThumbnailUpdate,i=e.deleteImage,c=e.addImage,l=(0,s.useState)(n),d=(0,o.Z)(l,2),f=d[0],m=d[1],p=(0,s.useState)(null),Z=(0,o.Z)(p,2),g=Z[0],j=Z[1],b=(0,s.useState)(null),v=(0,o.Z)(b,2),y=v[0],C=v[1],w=function(e){j(g===e?null:e)};(0,s.useEffect)((function(){m(n),j(null)}),[n]);var S=(0,z.jsxs)(x.Z,{direction:"row",spacing:2,children:[(0,z.jsx)(oe,{handleChange:c,onClick:function(){return w("add")},updateOp:g}),(0,z.jsxs)(ie,{onClick:function(){return w("delete")},name:"delete",updateOp:g,children:[(0,z.jsx)($.Z,{sx:{fontSize:"1.5rem"}}),"Delete"]}),(0,z.jsx)(ie,{onClick:function(){return w("thumbnail")},name:"thumbnail",updateOp:g,children:"Set Thumbnail"})]}),E=(0,z.jsx)(x.Z,{direction:"row",children:(0,z.jsxs)(h.Z,{variant:"h6",color:"muted.main",children:["Images:",t.length]})});return f?f&&"delete"===g?(0,z.jsxs)(x.Z,{direction:"column",spacing:2,sx:{p:2},children:[E,S,(0,z.jsx)(se,{images:t,handlePhotoClick:r,renderPhoto:function(e){var n=e.layout,r=e.imageProps,a=r.alt,o=r.style,s=(0,_.Z)(r,re);return(0,z.jsxs)(u.Z,{component:"div",children:[(0,z.jsx)("img",(0,H.Z)({alt:a,style:(0,H.Z)((0,H.Z)({},o),{},{width:n.width,padding:0})},s)),(0,z.jsx)(k.Z,{size:"medium",sx:{color:"black",bgcolor:(0,te.Fq)("#fff",.4),position:"absolute",top:10,right:12},onClick:function(){return function(e){var n=t.find((function(n){return n.alt===e}));i(n)}(a)},children:(0,z.jsx)(ne.Z,{size:"medium"})})]})}})]}):f&&"thumbnail"===g?(0,z.jsxs)(x.Z,{direction:"column",spacing:2,sx:{p:2},children:[E,S,(0,z.jsx)(se,{images:t,handlePhotoClick:r,renderPhoto:function(e){var n=e.layout,r=e.imageProps,i=r.alt,o=r.style,s=(0,_.Z)(r,ae);return(0,z.jsxs)(u.Z,{component:"div",children:[(0,z.jsx)("img",(0,H.Z)({alt:i,style:(0,H.Z)((0,H.Z)({},o),{},{width:n.width,padding:0})},s)),(0,z.jsx)(Q.Z,{control:(0,z.jsx)(J.Z,{}),label:"",checked:i===y,onChange:function(){return function(e){C(e);var n=t.find((function(n){return n.alt===e}));a(n)}(i)},sx:{pr:1,position:"absolute",bgcolor:(0,te.Fq)("#fff",.6),color:"black",borderRadius:"0px 5px 5px 0px",borderColor:"secondary.main",borderLeft:0,bottom:20,left:15}})]})}})]}):f&&"add"===g||f&&!g?(0,z.jsxs)(x.Z,{direction:"column",spacing:2,sx:{p:2},children:[E,S,(0,z.jsx)(se,{images:t,handlePhotoClick:r})]}):void 0:(0,z.jsx)(se,{images:t,handlePhotoClick:r})}se.defaultProps={renderPhoto:null},ie.defaultProps={onClick:function(){}};var ue=t(5899),le=t(4700);function de(e){return!1===e.preview?(0,z.jsx)(x.Z,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:(0,z.jsx)(l.Z,{href:"/",underline:"none",children:(0,z.jsxs)(u.Z,{variant:"contained",component:"label",sx:{color:"primary.main",backgroundColor:"button.main",padding:"6px 8px",boxShadow:0,"&:hover":{backgroundColor:"button.main"}},children:[(0,z.jsx)(f.Z,{size:"medium",sx:{paddingRight:1}}),(0,z.jsx)(h.Z,{variant:"body1",color:"muted.main",children:"Memories"})]})})}):null}function fe(e){var n=e.memTitle,t=e.memDate,l=e.memStory,f=e.memImages,v=e.bucket,y=e.memoryID,k=e.authURL,C=e.preview,w=(0,s.useState)(!1),S=(0,o.Z)(w,2),E=S[0],P=S[1],D=(0,s.useState)(!1),I=(0,o.Z)(D,2),U=I[0],T=I[1],O=(0,s.useState)(0),L=(0,o.Z)(O,2),F=L[0],H=L[1],Y=(0,s.useState)(n),A=(0,o.Z)(Y,2),N=A[0],q=A[1],X=(0,s.useState)(t),K=(0,o.Z)(X,2),_=K[0],G=K[1],J=(0,s.useState)(l),Q=(0,o.Z)(J,2),$=Q[0],ee=Q[1],ne=(0,s.useState)(f),te=(0,o.Z)(ne,2),re=te[0],ae=te[1],ie=(0,s.useState)(null),oe=(0,o.Z)(ie,2),se=oe[0],fe=oe[1],he=(0,s.useState)(null),xe=(0,o.Z)(he,2),me=xe[0],pe=xe[1],Ze=(0,s.useState)([]),ge=(0,o.Z)(Ze,2),je=ge[0],be=ge[1],ve=(0,s.useState)(null),ye=(0,o.Z)(ve,2),ke=ye[0],Ce=ye[1],we=(0,s.useState)([]),Se=(0,o.Z)(we,2),ze=Se[0],Ee=Se[1],Pe=(0,s.useState)(!1),De=(0,o.Z)(Pe,2),Ie=De[0],Me=De[1],Re=(0,s.useState)(null),Ue=(0,o.Z)(Re,2),Te=Ue[0],Oe=Ue[1],Le=(0,s.useState)(null),Fe=(0,o.Z)(Le,2),Be=Fe[0],He=Fe[1],Ye=(0,s.useState)(null),Ae=(0,o.Z)(Ye,2),Ne=Ae[0],qe=Ae[1],We=(0,s.useState)(!1),Xe=(0,o.Z)(We,2),Ke=Xe[0],Ve=Xe[1],_e=re.length;(0,s.useEffect)((function(){return q(n)}),[n]),(0,s.useEffect)((function(){return G(t)}),[t]),(0,s.useEffect)((function(){return ee(l)}),[l]),(0,s.useEffect)((function(){return ae(f)}),[f]);var Ge=function(e,n){pe(e),qe(n)},Je=function(e,n,t){401===e.status?Ge("You have been logged out. Please login to continue.",!0):403===e.status?Ge("You do not have permissions to do this operation.",!0):Ge("Unknown error occured while ".concat(n),!0),t(e.status)},Qe=function(e){fe(!0),Ve(e)},$e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n,t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.Z.updateMemoryDetails(v,k,y,n,t);case 3:return(r=e.sent).ok?Ge("Memory ".concat(n," updated successfully"),!1):Je(r,"updating ".concat(n),Qe),fe(!0),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}(),en=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.Z.updateMemoryImage(v,k,y,"thumbnail",n);case 3:return(t=e.sent).ok?(Ge("Thumbnail updated successfully",!1),fe(!0)):Je(t,"updating thumbnail",Qe),e.abrupt("return",t);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),nn=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(re.length>1)){e.next=8;break}return e.next=4,ue.Z.updateMemoryImage(v,k,y,"delete",n);case 4:(t=e.sent).ok?(Ge("Memory image deleted successfully",!1),ae(re.filter((function(e){return e.title!==n.title})))):Je(t,"deleting image",Qe),e.next=9;break;case 8:Ge("Atleast 1 image is needed for memory. Unable to delete",!0);case 9:return fe(!0),e.abrupt("return",t);case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),tn=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.Z.updateMemoryImage(v,k,y,"add",n);case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),rn=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n,t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(0,r.Z)(je.entries()),e.prev=1,i=(0,a.Z)().mark((function e(){var n,r,i,s,c,u,l,d,f,h;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,o.Z)(t.value,2),r=n[0],i=n[1],s=(0,o.Z)(i,3),c=s[0],u=s[1],l=s[2],e.next=4,tn(c).then((function(e){return e.ok?e.text():(Je(e,"adding image",Qe),"")}));case 4:return d=e.sent,f={key:"memories/".concat(y,"/images/").concat(c.name),src:l,alt:c.name,title:c.name,width:c.width,height:c.height,images:[]},e.next=8,fetch(d,{body:u,method:"PUT"});case 8:(h=e.sent).ok?(Oe("Images uploaded: ".concat(r+1," / ").concat(ke," ")),ae((function(e){return e.concat([f])}))):(He("Error while uploading memory image"),Ee((function(e){return e.concat([c.name])})),Je(h,"deleting image",Qe));case 10:case"end":return e.stop()}}),e)})),n.s();case 4:if((t=n.n()).done){e.next=8;break}return e.delegateYield(i(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),n.e(e.t1);case 13:return e.prev=13,n.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(je.length>0&&(Me(!0),Oe("Preparing images for upload....")),je.length!==ke){e.next=9;break}return e.next=4,rn();case 4:ze.length>0?He("Error while uploading ".concat(ze.length," images")):He("".concat(je.length," image(s) uploaded successfully")),Ee([]),Ce(null),be([]),setTimeout((function(){Me(!1),He(null),Oe(null)}),3e3);case 9:case"end":return e.stop()}}),e)}))),[je]);var an=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.target.files&&(t=Array.from(n.target.files),Ce(t.length),re.length+t.length<=15?(t.forEach((function(e){var n=new Image;n.onload=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t){var r,i,o,s,c,u,l,d;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.target.naturalHeight,i=t.target.naturalWidth,o=e.size/1048576,s=e.name,c=[500,1e3,1500].map((function(e){return{height:e,width:Math.ceil(e*i/r)}})),u=Date.now(),l="".concat(u,"-").concat(s),d=[{name:l,size:o,height:r,width:i,images:c},e,t.target.src],be((function(e){return e.concat([d])}));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),n.src=URL.createObjectURL(e)})),t.map((function(e){return URL.revokeObjectURL(e)}))):(Ge("Unable to add ".concat(t.length," images. Maximum images allowed per memory is 15"),!0),fe(!0)));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),on=(0,z.jsx)(B,{editable:U,text:N,handleTitleUpdate:function(e){$e("title",e)&&q(e)}}),sn=(0,z.jsx)(W,{editable:U,prevDate:_,handleDateUpdate:function(e){$e("date",e)&&G(e)}}),cn=(0,z.jsx)(V,{editable:U,prevStory:$,handleStoryUpdate:function(e){$e("story",e)&&ee(e)}}),un=(0,z.jsx)(ce,{editable:U,images:re,handlePhotoClick:function(e,n,t){P(!0),H(t)},handleThumbnailUpdate:en,deleteImage:nn,addImage:an}),ln=(0,z.jsxs)(u.Z,{variant:"contained",component:"label",onClick:function(){return T(!1)},sx:{color:"primary.main",borderRadius:5,backgroundColor:"button.main",padding:"6px 8px"},children:[(0,z.jsx)(d.Z,{size:"medium",sx:{paddingRight:1}}),(0,z.jsx)(h.Z,{variant:"body1",color:"muted.main",children:"Edit"})]});return 401===Ke&&!1===se?(0,z.jsx)(c.Fg,{to:"/login"}):(0,z.jsxs)(z.Fragment,{children:[U?(0,z.jsx)(x.Z,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:ln}):(0,z.jsx)(de,{preview:C}),(0,z.jsx)(b.Z,{component:"div",sx:{backgroundColor:"button.main",margin:U?"5px":0},children:(0,z.jsx)(R.Z,{header:on,subheader:sn,photoLayout:un,storyLayout:cn,memoryID:y,bucket:v,authURL:k,handleEditClick:function(){return T(!0)},preview:C})}),(0,z.jsx)(M,{open:E,title:N,date:_,images:re,index:F,handleNext:function(){H((function(e){return(e+1)%_e}))},handleBack:function(){H((function(e){return(e-1+_e)%_e}))},handleClose:function(){return P(!1)},handleChange:function(e){return H(e)}}),(0,z.jsx)(le.Z,{snackBarOpen:se,message:me,onClose:function(){fe(!1),pe(null),qe(null)},error:Ne}),(0,z.jsx)(m.Z,{open:Ie,fullWidth:!0,sx:{p:1},children:(0,z.jsxs)(p.Z,{sx:{maxWidth:1,p:1},children:[(0,z.jsx)(Z.Z,{title:"Adding Images",sx:{textAlign:"center"}}),(0,z.jsx)(j.Z,{}),(0,z.jsxs)(g.Z,{children:[(0,z.jsx)(h.Z,{variant:"h6",sx:{color:"muted.main"},children:Te}),(0,z.jsx)(x.Z,{justifyContent:"center",sx:{py:2},children:(0,z.jsx)(h.Z,{variant:"h5",children:Be})})]})]})})]})}fe.defaultProps={memTitle:"Memory Title",memDate:"Memory Date",memStory:"Memory Text"}}}]);
//# sourceMappingURL=3.18c8f15b.chunk.js.map