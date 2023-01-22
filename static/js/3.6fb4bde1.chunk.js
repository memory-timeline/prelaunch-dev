"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[3],{487:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(3400),a=t(9823),i=t(2065),o=t(184);function s(e){var n=e.size,t=e.handleClick;return(0,o.jsx)(r.Z,{size:n,sx:{color:"black",bgcolor:(0,i.Fq)("#fff",.4),position:"absolute",top:10,right:12},onClick:t,children:(0,o.jsx)(a.Z,{size:n})})}s.defaultProps={size:"small"}},4700:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(9439),a=t(2791),i=t(5646),o=t(3400),s=t(9823),c=t(3767),l=t(1428),u=t(890),d=t(184);function f(e){var n=e.message;return!0===e.error?(0,d.jsxs)(c.Z,{direction:"row",spacing:2,justifyContents:"space-between",alignItems:"center",children:[(0,d.jsx)(s.Z,{fontSize:"small",color:"error"}),(0,d.jsx)(u.Z,{children:n})]}):(0,d.jsxs)(c.Z,{direction:"row",spacing:2,justifyContents:"space-between",alignItems:"center",children:[(0,d.jsx)(l.Z,{fontSize:"small",color:"success"}),(0,d.jsx)(u.Z,{children:n})]})}function h(e){var n=e.snackBarOpen,t=e.message,c=e.onClose,l=e.error,u=(0,a.useState)(n),h=(0,r.Z)(u,2),x=h[0],m=h[1],p=(0,a.useState)(t),Z=(0,r.Z)(p,2),g=Z[0],j=Z[1];(0,a.useEffect)((function(){return m(n)}),[n]),(0,a.useEffect)((function(){return j(t)}),[t]);var v=function(){m(!1),j(null),c()},b=(0,d.jsx)(o.Z,{size:"small","aria-label":"close",color:"inherit",onClick:v,children:(0,d.jsx)(s.Z,{fontSize:"small"})});return(0,d.jsx)(i.Z,{open:x,autoHideDuration:3e3,onClose:v,message:(0,d.jsx)(f,{message:g,error:l}),action:b,anchorOrigin:{vertical:"top",horizontal:"center"}})}h.defaultProps={error:!1}},4125:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9439),a=t(2791);function i(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];return[i,o,function(e){var n=new Date(e);if(e){var t=n.toLocaleDateString("en-in",{day:"numeric",month:"long",year:"numeric"});o(t)}else o(null)}]}},1619:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9439),a=t(2791);function i(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];return[i,o,function(e){return o(e.target.value)}]}},2168:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9439),a=t(2791);function i(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];(0,a.useEffect)((function(){return o(e)}),[e]);return[i,o,function(e){o(e.target.value)}]}},8413:function(e,n,t){t.d(n,{Z:function(){return q}});var r=t(9439),a=t(2791),i=t(7689),o=t(7621),s=t(9585),c=t(4554),l=t(2898),u=t(4721),d=t(3967),f=t(5193),h=t(4700),x=t(4165),m=t(5861),p=t(3400),Z=t(184);function g(e){var n=e.icon,t=e.label;return(0,Z.jsxs)(c.Z,{sx:{alignItems:"center"},children:[(0,Z.jsx)(p.Z,{"aria-label":"delete",sx:{bgcolor:"form.input"},children:n}),t]})}var j=t(5574),v=t(6151),b=t(890),y=t(3767),k=t(5661);function C(e){var n=e.confirm,t=e.handleCallback,i=e.handleCloseCallback,o=e.title,s=e.message,l=(0,a.useState)(n),u=(0,r.Z)(l,2),d=u[0],f=u[1];(0,a.useEffect)((function(){return f(n)}),[n]);var h=function(){f(!1),i()};return(0,Z.jsxs)(j.Z,{open:d,sx:{backgroundColor:"faded.black"},children:[(0,Z.jsx)(k.Z,{children:o}),(0,Z.jsxs)(c.Z,{sx:{p:2},children:[(0,Z.jsx)(b.Z,{sx:{pb:2},children:s}),(0,Z.jsxs)(y.Z,{spacing:2,direction:"row",children:[(0,Z.jsx)(v.Z,{variant:"contained",onClick:h,children:"Cancel"}),(0,Z.jsx)(v.Z,{variant:"outlined",onClick:function(){h(),t()},children:"OK"})]})]})]})}var w=t(7247),S=t(5899);function E(){return(0,Z.jsx)(g,{icon:(0,Z.jsx)(w.Z,{}),label:"Delete"})}function D(e){var n=e.callback,t=e.open,r=e.closeCallback;return(0,Z.jsx)(C,{confirm:t,title:"Delete Memory",handleCallback:n,handleCloseCallback:function(){return r()},message:"Do you want to delete this memory?"})}function z(){return(z=(0,m.Z)((0,x.Z)().mark((function e(n,t,r,a){var i;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.Z.deleteMemory(n,t,r);case 3:i=e.sent,a(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var P=t(580),M=t(7254),I=t(1918),T=t(1889);function R(e){var n=e.items,t=e.value,r=e.error,a=e.handleKeyDown,i=e.handleChange,o=e.handleDelete,s=e.handlePaste;return(0,Z.jsxs)(y.Z,{direction:"column",spacing:2,sx:{mb:3},children:[(0,Z.jsx)(M.Z,{id:"outlined-error",value:t,label:"Email List",placeholder:"Type or paste email addresses and press `Enter`...",onKeyDown:a,onChange:i,onPaste:s,helperText:r||"Type or paste email addresses and press `Enter`...",error:!!r,sx:{my:1}}),(0,Z.jsx)(T.ZP,{container:!0,spacing:2,children:n.map((function(e){return(0,Z.jsx)(I.Z,{label:e,variant:"outlined",onDelete:function(){return o(e)},sx:{margin:.5},size:"small"},e)}))})]})}var U=t(3433);function L(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],i=n[1],o=(0,a.useState)(""),s=(0,r.Z)(o,2),c=s[0],l=s[1],u=(0,a.useState)(null),d=(0,r.Z)(u,2),f=d[0],h=d[1],x=function(e){return t.includes(e)};return[t,c,f,function(e){if(["Enter","Tab",","].includes(e.key)){e.preventDefault();var n=c.trim();n&&function(e){var n=null;return x(e)&&(n="".concat(e," has already been added.")),function(e){return/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(e)}(e)||(n="".concat(e," is not a valid email address.")),!n||(h(n),!1)}(n)&&(i([].concat((0,U.Z)(t),[c])),l(""))}},function(e){l(e.target.value),h(null)},function(e){i((function(n){return n.filter((function(n){return n!==e}))}))},function(e){e.preventDefault();var n=e.clipboardData.getData("text").match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);if(n){var r=n.filter((function(e){return!x(e)}));i([].concat((0,U.Z)(t),(0,U.Z)(r)))}}]}function O(){return(0,Z.jsx)(g,{icon:(0,Z.jsx)(P.Z,{}),label:"Share"})}function F(e){var n=e.confirm,t=e.callback,i=e.closeCallback,o=L(),s=(0,r.Z)(o,7),l=s[0],d=s[1],f=s[2],h=s[3],x=s[4],m=s[5],p=s[6],g=(0,a.useState)(n),b=(0,r.Z)(g,2),C=b[0],w=b[1];(0,a.useEffect)((function(){return w(n)}),[n]);var S=function(){w(!1),i()};return(0,Z.jsxs)(j.Z,{fullWidth:!0,open:C,sx:{backgroundColor:"faded.black"},children:[(0,Z.jsx)(k.Z,{children:"Share Memory"}),(0,Z.jsx)(u.Z,{}),(0,Z.jsxs)(c.Z,{sx:{p:2},children:[(0,Z.jsx)(R,{items:l,value:d,error:f,handleKeyDown:h,handleChange:x,handleDelete:m,handlePaste:p}),(0,Z.jsxs)(y.Z,{spacing:2,direction:"row",children:[(0,Z.jsx)(v.Z,{variant:"outlined",onClick:S,children:"Cancel"}),(0,Z.jsx)(v.Z,{variant:"contained",onClick:function(){S(),t(l)},children:"Share"})]})]})]})}function B(){return(B=(0,m.Z)((0,x.Z)().mark((function e(n,t,r,a,i){return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log("share memory",n,t,r,a),i()}catch(o){console.log(o)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=t(5422),Y=t(3786),A=t(1286);function N(){return(0,Z.jsx)(g,{icon:(0,Z.jsx)(A.Z,{}),label:"Edit"})}function W(e){var n,t=e.snackBar,i=e.handleDelete,o=e.handleShare,s=e.handleEditClick,c=(0,a.useState)(null),u=(0,r.Z)(c,2),d=u[0],f=u[1],h=(0,a.useState)(null),x=(0,r.Z)(h,2),m=x[0],p=x[1],g=Boolean(d),j=function(){return f(null)};"delete"===m&&(n=(0,Z.jsx)(D,{open:!0,callback:i,closeCallback:function(){return p(null)}})),"share"===m&&(n=(0,Z.jsx)(F,{confirm:!0,callback:function(e){return o(e)},closeCallback:function(){return p(null)}}));return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(l.Z,{onClick:function(e){return f(e.currentTarget)}}),(0,Z.jsxs)(H.Z,{id:"memory-actions",anchorEl:d,open:g,onClose:j,MenuListProps:{"aria-labelledby":"basic-button"},sx:{borderRadius:"10px"},children:[(0,Z.jsx)(Y.Z,{onClick:function(){s(),j()},children:(0,Z.jsx)(N,{})}),(0,Z.jsx)(Y.Z,{onClick:function(){p("share"),j()},children:(0,Z.jsx)(O,{})}),(0,Z.jsx)(Y.Z,{onClick:function(){p("delete"),j()},children:(0,Z.jsx)(E,{})})]}),n,t]})}function q(e){var n,t=e.header,x=e.subheader,m=e.photoLayout,p=e.storyLayout,g=e.bucket,j=e.memoryID,v=e.authURL,b=e.handleEditClick,y=e.preview,k=(0,a.useState)(null),C=(0,r.Z)(k,2),w=C[0],S=C[1],E=(0,a.useState)(null),D=(0,r.Z)(E,2),P=D[0],M=D[1],I=(0,a.useState)(null),T=(0,r.Z)(I,2),R=T[0],U=T[1],L=(0,d.Z)();n=(0,f.Z)(L.breakpoints.down("lg"))?"":"vertical-scroll";var O=function(e,n){M(e),U(n)},F=function(e){"ok"===e.status?O("Memory deleted successfully",!1):O("Error while deleting memory",!0),S(!0)},H=function(){O("Memory shared successfully",!1),S(!0)},Y=(0,Z.jsx)(h.Z,{snackBarOpen:w,message:P,onClose:function(){S(!1),M(null),U(null)},error:R}),A=y?(0,Z.jsx)(l.Z,{}):(0,Z.jsx)(W,{snackBar:Y,handleDelete:function(){!function(e,n,t,r){z.apply(this,arguments)}(g,v,j,F)},handleShare:function(e){!function(e,n,t,r,a){B.apply(this,arguments)}(g,v,j,e,H)},handleEditClick:b});return!1===w?(0,Z.jsx)(i.Fg,{to:"/memories",replace:!0}):(0,Z.jsxs)(o.Z,{sx:{boxShadow:0,bgcolor:"button.main",p:1},children:[(0,Z.jsx)(s.Z,{title:t,subheader:x,action:A}),(0,Z.jsx)(u.Z,{}),(0,Z.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"flex-start",flexDirection:{lg:"row",xs:"column"},height:{lg:"72vh"},my:1},children:[(0,Z.jsx)(c.Z,{sx:{width:{lg:"70%",xs:"100%"},overflowY:"scroll",borderRadius:5},className:n,children:m}),(0,Z.jsx)(c.Z,{sx:{width:{lg:"30%",sx:"100%"},overflowY:"scroll",mt:{lg:0,xs:2},p:{lg:1},px:1},className:n,children:p})]})]})}},8003:function(e,n,t){t.d(n,{Z:function(){return fe}});var r=t(7762),a=t(4165),i=t(5861),o=t(9439),s=t(2791),c=t(7689),l=t(6151),u=t(533),d=t(1428),f=t(7394),h=t(890),x=t(3767),m=t(5574),p=t(7621),Z=t(9585),g=t(9504),j=t(4721),v=t(4554),b=t(1133),y=t(5397),k=t(3400),C=t(487),w=t(1065),S=t(8894),E=t(184),D=(0,S.yP)((0,S.bH)((0,S.p6)(w.ZP)));function z(e){var n=e.ind,t=e.images,r=e.handleNext,a=e.handleStepChange,i=(0,s.useState)(n),c=(0,o.Z)(i,2),l=c[0],u=c[1],d=(0,s.useState)(0),f=(0,o.Z)(d,2),h=f[0],x=f[1],m=(0,s.useState)(null),p=(0,o.Z)(m,2),Z=p[0],g=p[1];(0,s.useEffect)((function(){u(n)}),[n]),(0,s.useEffect)((function(){h<t.length?g("none"):g("flex")}),[h]);var j=function(){return x((function(e){return e+1}))};return(0,E.jsx)(D,{index:l,onChangeIndex:a,enableMouseEvents:!0,animateTransitions:!0,interval:1e4,onClick:r,style:{backgroundColor:"muted.main"},slideRenderer:function(e){var n=e.index,r=e.key,a=function(e,n){var t=e%n;return t<0?t+n:t}(n,t.length),i=(t[a].images?t[a].images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",");return(0,E.jsx)(v.Z,{component:"img",onLoad:j,sx:{display:{display:Z},justifyContents:"center",width:"100%",bgcolor:"#1c1c1c"},src:t[a].src,srcSet:i,style:{display:"block",boxSizing:"content-box",cursor:"pointer",objectFit:"contain",height:"100vh"},alt:t[a].src},r)}})}function P(e){var n=e.handleClick;return(0,E.jsx)(k.Z,{edge:"start",color:"primary","aria-label":"close",onClick:n,sx:{position:"absolute",top:"50%",right:0,transform:"translate(0%, -50%)"},children:(0,E.jsx)(y.Z,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function M(e){var n=e.handleClick;return(0,E.jsx)(k.Z,{edge:"start",color:"primary","aria-label":"close",onClick:n,sx:{position:"absolute",top:"50%",left:0,transform:"translate(0%, -50%)"},children:(0,E.jsx)(b.Z,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function I(e){var n=e.open,t=e.title,r=e.date,a=e.images,i=e.index,o=e.handleNext,s=e.handleBack,c=e.handleClose,l=e.handleChange;return(0,E.jsxs)(m.Z,{open:n,fullScreen:!0,children:[(0,E.jsx)(z,{images:a,ind:i,handleNext:o,handleStepChange:l}),(0,E.jsx)(Z.Z,{title:t,subheader:r,sx:{position:"absolute",top:10,left:10,bgcolor:"button.main",borderRadius:3,padding:1}}),(0,E.jsx)(M,{handleClick:s}),(0,E.jsx)(P,{handleClick:o}),(0,E.jsx)(C.Z,{size:"large",handleClick:c})]})}z.defaultProps={ind:0},I.defaultProps={index:0};var T=t(8413),R=t(7254),U=t(9906),L=t(5130),O=t(1286),F=t(2168);function B(e){var n=e.editable,t=e.text,r=e.handleTitleUpdate,a=(0,F.Z)(t),i=(0,o.Z)(a,3),c=i[0],l=i[1],u=i[2],d=(0,s.useState)(n),f=(0,o.Z)(d,2),m=f[0],p=f[1],Z=(0,s.useState)(!1),g=(0,o.Z)(Z,2),j=g[0],v=g[1];return(0,s.useEffect)((function(){p(n),l(t),v(!1)}),[n]),m||j?m&&!j?(0,E.jsxs)(x.Z,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[(0,E.jsx)(h.Z,{variant:"h6",children:c}),(0,E.jsx)(O.Z,{fontSize:"medium",onClick:function(){return v(!0)}})]}):m&&j?(0,E.jsxs)(x.Z,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start"},spacing:2,children:[(0,E.jsx)(R.Z,{id:"standard-basic",size:"small",label:"Title",onChange:u,variant:"standard",defaultValue:c,sx:{maxWidth:"200px"}}),(0,E.jsx)(U.Z,{fontSize:"medium",onClick:function(){r(c),v(!1)}}),(0,E.jsx)(L.Z,{fontSize:"medium",onClick:function(){l(t),v(!1)}})]}):void 0:(0,E.jsx)(h.Z,{variant:"h6",children:c})}var H=t(1413),Y=t(8239),A=t(6571),N=t(41),W=t(4125);function q(e){var n=e.editable,t=e.prevDate,r=e.handleDateUpdate,a=(0,s.useState)(n),i=(0,o.Z)(a,2),c=i[0],l=i[1],u=(0,s.useState)(!1),d=(0,o.Z)(u,2),f=d[0],m=d[1],p=(0,W.Z)(t),Z=(0,o.Z)(p,3),g=Z[0],j=Z[1],v=Z[2];return(0,s.useEffect)((function(){l(n),j(t),m(!1)}),[n,t]),c||f?c&&!f?(0,E.jsxs)(x.Z,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[(0,E.jsx)(h.Z,{children:g}),(0,E.jsx)(O.Z,{fontSize:"medium",onClick:function(){return m(!0)}})]}):c&&f?(0,E.jsxs)(x.Z,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start",mt:3},spacing:2,children:[(0,E.jsx)(A._,{dateAdapter:N.H,children:(0,E.jsx)(Y.M,{label:"Memory Date",value:g,onChange:v,placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return(0,E.jsx)(R.Z,(0,H.Z)({readOnly:!0,required:!0},e))}})}),(0,E.jsx)(U.Z,{fontSize:"medium",onClick:function(){r(g),m(!1)}}),(0,E.jsx)(L.Z,{fontSize:"medium",onClick:function(){j(t),m(!1)}})]}):void 0:(0,E.jsx)(h.Z,{children:g})}var K=t(1747),X=t(1619);function V(e){var n=e.editable,t=e.prevStory,r=e.handleStoryUpdate,a=(0,s.useState)(n),i=(0,o.Z)(a,2),c=i[0],l=i[1],u=(0,s.useState)(!1),d=(0,o.Z)(u,2),f=d[0],m=d[1],p=(0,X.Z)(t),Z=(0,o.Z)(p,3),g=Z[0],b=Z[1],y=Z[2],k=(0,s.useRef)();return(0,s.useEffect)((function(){l(n),b(t),m(!1)}),[n,t]),c||f?c&&!f?(0,E.jsxs)(x.Z,{direction:"column",spacing:2,children:[(0,E.jsxs)(x.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,E.jsx)(h.Z,{sx:{color:"muted.main"},children:"Edit Story"}),(0,E.jsx)(O.Z,{fontSize:"medium",onClick:function(){m(!0)}})]}),(0,E.jsx)(j.Z,{sx:{width:1}}),(0,E.jsx)(h.Z,{style:{whiteSpace:"pre-wrap"},children:g})]}):c&&f?(0,E.jsxs)(x.Z,{direction:"column",spacing:2,children:[(0,E.jsxs)(x.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,E.jsx)(h.Z,{sx:{color:"muted.main"},children:"Editing Story"}),(0,E.jsx)(U.Z,{fontSize:"medium",onClick:function(){r(g),m(!1)}}),(0,E.jsx)(L.Z,{fontSize:"medium",onClick:function(){b(t),m(!1)}})]}),(0,E.jsx)(j.Z,{sx:{width:1}}),(0,E.jsx)(v.Z,{sx:{p:2,m:1,my:2,border:1,borderColor:"primary.main",bgcolor:"input.background",minHeight:"70vh",borderRadius:5,width:"90%"},onClick:function(){return k.current.focus()},children:(0,E.jsx)(K.Z,{autoFocus:!0,"aria-label":"minimum height",placeholder:"Tell your story...",value:g,onChange:y,style:{width:"100%",minHeight:"184px",maxHeight:"70vh",boxSizing:"border-box",paddingTop:"5px",border:0,overflow:"auto",outline:"none",resize:"vertical",borderRadius:5,"&:focus":{border:0}},ref:k})})]}):void 0:(0,E.jsx)(h.Z,{style:{whiteSpace:"pre-wrap"},children:g})}var _=t(5987),G=t(5684),J=t(7262),Q=t(5523),$=t(7247),ee=t(2913),ne=t(9823),te=t(2065),re=["alt","style"],ae=["alt","style"];function ie(e){var n=e.children,t=e.onClick,r=e.name,a=e.updateOp;return(0,E.jsx)(l.Z,{id:r,variant:"contained",component:"label",onClick:t,sx:{color:a===r?"button.main":"muted.main",borderRadius:5,backgroundColor:a===r?"primary.main":"button.main",padding:"6px 8px","&:hover":{color:a===r?"button.main":"muted.main",backgroundColor:a===r?"primary.main":"button.main"}},children:n})}function oe(e){var n=e.handleChange,t=e.onClick,r=e.updateOp;return(0,E.jsxs)(ie,{onClick:t,name:"add",updateOp:r,children:[(0,E.jsx)("input",{type:"file",hidden:!0,multiple:!0,accept:"image/*",onChange:n}),(0,E.jsx)(ee.Z,{sx:{fontSize:"1.5rem"}}),"Add"]})}function se(e){var n=e.images,t=e.handlePhotoClick,r=e.renderPhoto,a=(0,s.useState)(null),i=(0,o.Z)(a,2),c=i[0],l=i[1];return(0,s.useEffect)((function(){var e=0,t=0;n.forEach((function(n){n.height>n.width?t+=1:e+=1})),l(e>t?"rows":"columns")}),[n]),r?(0,E.jsx)(G.Z,{layout:c,photos:n,onClick:t,spacing:2,renderPhoto:r}):(0,E.jsx)(G.Z,{layout:c,photos:n,onClick:t,spacing:2})}function ce(e){var n=e.editable,t=e.images,r=e.handlePhotoClick,a=e.handleThumbnailUpdate,i=e.deleteImage,c=e.addImage,u=(0,s.useState)(n),d=(0,o.Z)(u,2),f=d[0],m=d[1],p=(0,s.useState)(null),Z=(0,o.Z)(p,2),g=Z[0],j=Z[1],v=(0,s.useState)(null),b=(0,o.Z)(v,2),y=b[0],C=b[1],w=function(e){j(g===e?null:e)};(0,s.useEffect)((function(){m(n),j(null)}),[n]);var S=(0,E.jsxs)(x.Z,{direction:"row",spacing:2,children:[(0,E.jsx)(oe,{handleChange:c,onClick:function(){return w("add")},updateOp:g}),(0,E.jsxs)(ie,{onClick:function(){return w("delete")},name:"delete",updateOp:g,children:[(0,E.jsx)($.Z,{sx:{fontSize:"1.5rem"}}),"Delete"]}),(0,E.jsx)(ie,{onClick:function(){return w("thumbnail")},name:"thumbnail",updateOp:g,children:"Set Thumbnail"})]}),D=(0,E.jsx)(x.Z,{direction:"row",children:(0,E.jsxs)(h.Z,{variant:"h6",color:"muted.main",children:["Images:",t.length]})});return f?f&&"delete"===g?(0,E.jsxs)(x.Z,{direction:"column",spacing:2,sx:{p:2},children:[D,S,(0,E.jsx)(se,{images:t,handlePhotoClick:r,renderPhoto:function(e){var n=e.layout,r=e.imageProps,a=r.alt,o=r.style,s=(0,_.Z)(r,re);return(0,E.jsxs)(l.Z,{component:"div",children:[(0,E.jsx)("img",(0,H.Z)({alt:a,style:(0,H.Z)((0,H.Z)({},o),{},{width:n.width,padding:0})},s)),(0,E.jsx)(k.Z,{size:"medium",sx:{color:"black",bgcolor:(0,te.Fq)("#fff",.4),position:"absolute",top:10,right:12},onClick:function(){return function(e){var n=t.find((function(n){return n.alt===e}));i(n)}(a)},children:(0,E.jsx)(ne.Z,{size:"medium"})})]})}})]}):f&&"thumbnail"===g?(0,E.jsxs)(x.Z,{direction:"column",spacing:2,sx:{p:2},children:[D,S,(0,E.jsx)(se,{images:t,handlePhotoClick:r,renderPhoto:function(e){var n=e.layout,r=e.imageProps,i=r.alt,o=r.style,s=(0,_.Z)(r,ae);return(0,E.jsxs)(l.Z,{component:"div",children:[(0,E.jsx)("img",(0,H.Z)({alt:i,style:(0,H.Z)((0,H.Z)({},o),{},{width:n.width,padding:0})},s)),(0,E.jsx)(Q.Z,{control:(0,E.jsx)(J.Z,{}),label:"",checked:i===y,onChange:function(){return function(e){C(e);var n=t.find((function(n){return n.alt===e}));a(n)}(i)},sx:{pr:1,position:"absolute",bgcolor:(0,te.Fq)("#fff",.6),color:"black",borderRadius:"0px 5px 5px 0px",borderColor:"secondary.main",borderLeft:0,bottom:20,left:15}})]})}})]}):f&&"add"===g||f&&!g?(0,E.jsxs)(x.Z,{direction:"column",spacing:2,sx:{p:2},children:[D,S,(0,E.jsx)(se,{images:t,handlePhotoClick:r})]}):void 0:(0,E.jsx)(se,{images:t,handlePhotoClick:r})}se.defaultProps={renderPhoto:null},ie.defaultProps={onClick:function(){}};var le=t(5899),ue=t(4700);function de(e){return!1===e.preview?(0,E.jsx)(x.Z,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:(0,E.jsx)(u.Z,{href:"/",underline:"none",children:(0,E.jsxs)(l.Z,{variant:"contained",component:"label",sx:{color:"primary.main",backgroundColor:"button.main",padding:"6px 8px",boxShadow:0,"&:hover":{backgroundColor:"button.main"}},children:[(0,E.jsx)(f.Z,{size:"medium",sx:{paddingRight:1}}),(0,E.jsx)(h.Z,{variant:"body1",color:"muted.main",children:"Memories"})]})})}):null}function fe(e){var n=e.memTitle,t=e.memDate,u=e.memStory,f=e.memImages,b=e.bucket,y=e.memoryID,k=e.authURL,C=e.preview,w=(0,s.useState)(!1),S=(0,o.Z)(w,2),D=S[0],z=S[1],P=(0,s.useState)(!1),M=(0,o.Z)(P,2),R=M[0],U=M[1],L=(0,s.useState)(0),O=(0,o.Z)(L,2),F=O[0],H=O[1],Y=(0,s.useState)(n),A=(0,o.Z)(Y,2),N=A[0],W=A[1],K=(0,s.useState)(t),X=(0,o.Z)(K,2),_=X[0],G=X[1],J=(0,s.useState)(u),Q=(0,o.Z)(J,2),$=Q[0],ee=Q[1],ne=(0,s.useState)(f),te=(0,o.Z)(ne,2),re=te[0],ae=te[1],ie=(0,s.useState)(null),oe=(0,o.Z)(ie,2),se=oe[0],fe=oe[1],he=(0,s.useState)(null),xe=(0,o.Z)(he,2),me=xe[0],pe=xe[1],Ze=(0,s.useState)([]),ge=(0,o.Z)(Ze,2),je=ge[0],ve=ge[1],be=(0,s.useState)(null),ye=(0,o.Z)(be,2),ke=ye[0],Ce=ye[1],we=(0,s.useState)([]),Se=(0,o.Z)(we,2),Ee=Se[0],De=Se[1],ze=(0,s.useState)(!1),Pe=(0,o.Z)(ze,2),Me=Pe[0],Ie=Pe[1],Te=(0,s.useState)(null),Re=(0,o.Z)(Te,2),Ue=Re[0],Le=Re[1],Oe=(0,s.useState)(null),Fe=(0,o.Z)(Oe,2),Be=Fe[0],He=Fe[1],Ye=(0,s.useState)(null),Ae=(0,o.Z)(Ye,2),Ne=Ae[0],We=Ae[1],qe=(0,s.useState)(!1),Ke=(0,o.Z)(qe,2),Xe=Ke[0],Ve=Ke[1],_e=re.length;(0,s.useEffect)((function(){return W(n)}),[n]),(0,s.useEffect)((function(){return G(t)}),[t]),(0,s.useEffect)((function(){return ee(u)}),[u]),(0,s.useEffect)((function(){return ae(f)}),[f]);var Ge=function(e,n){pe(e),We(n)},Je=function(e,n,t){401===e.status?Ge("You have been logged out. Please login to continue.",!0):403===e.status?Ge("You do not have permissions to do this operation.",!0):Ge("Unknown error occured while ".concat(n),!0),t(e.status)},Qe=function(e){fe(!0),Ve(e)},$e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n,t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le.Z.updateMemoryDetails(b,k,y,n,t);case 3:return(r=e.sent).ok?Ge("Memory ".concat(n," updated successfully"),!1):Je(r,"updating ".concat(n),Qe),fe(!0),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}(),en=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le.Z.updateMemoryImage(b,k,y,"thumbnail",n);case 3:return(t=e.sent).ok?(Ge("Thumbnail updated successfully",!1),fe(!0)):Je(t,"updating thumbnail",Qe),e.abrupt("return",t);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),nn=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(re.length>1)){e.next=8;break}return e.next=4,le.Z.updateMemoryImage(b,k,y,"delete",n);case 4:(t=e.sent).ok?(Ge("Memory image deleted successfully",!1),ae(re.filter((function(e){return e.title!==n.title})))):Je(t,"deleting image",Qe),e.next=9;break;case 8:Ge("Atleast 1 image is needed for memory. Unable to delete",!0);case 9:return fe(!0),e.abrupt("return",t);case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),tn=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le.Z.updateMemoryImage(b,k,y,"add",n);case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),rn=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n,t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(0,r.Z)(je.entries()),e.prev=1,i=(0,a.Z)().mark((function e(){var n,r,i,s,c,l,u,d,f,h;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,o.Z)(t.value,2),r=n[0],i=n[1],s=(0,o.Z)(i,3),c=s[0],l=s[1],u=s[2],e.next=4,tn(c).then((function(e){return e.ok?e.text():(Je(e,"adding image",Qe),"")}));case 4:return d=e.sent,f={key:"memories/".concat(y,"/images/").concat(c.name),src:u,alt:c.name,title:c.name,width:c.width,height:c.height,images:[]},e.next=8,fetch(d,{body:l,method:"PUT"});case 8:(h=e.sent).ok?(Le("Images uploaded: ".concat(r+1," / ").concat(ke," ")),ae((function(e){return e.concat([f])}))):(He("Error while uploading memory image"),De((function(e){return e.concat([c.name])})),Je(h,"deleting image",Qe));case 10:case"end":return e.stop()}}),e)})),n.s();case 4:if((t=n.n()).done){e.next=8;break}return e.delegateYield(i(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),n.e(e.t1);case 13:return e.prev=13,n.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(je.length>0&&(Ie(!0),Le("Preparing images for upload....")),je.length!==ke){e.next=9;break}return e.next=4,rn();case 4:Ee.length>0?He("Error while uploading ".concat(Ee.length," images")):He("".concat(je.length," image(s) uploaded successfully")),De([]),Ce(null),ve([]),setTimeout((function(){Ie(!1),He(null),Le(null)}),3e3);case 9:case"end":return e.stop()}}),e)}))),[je]);var an=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.target.files&&(t=Array.from(n.target.files),Ce(t.length),re.length+t.length<=15?(t.forEach((function(e){var n=new Image;n.onload=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t){var r,i,o,s,c,l,u,d;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.target.naturalHeight,i=t.target.naturalWidth,o=e.size/1048576,s=e.name,c=[500,1e3,1500].map((function(e){return{height:e,width:Math.ceil(e*i/r)}})),l=Date.now(),u="".concat(l,"-").concat(s),d=[{name:u,size:o,height:r,width:i,images:c},e,t.target.src],ve((function(e){return e.concat([d])}));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),n.src=URL.createObjectURL(e)})),t.map((function(e){return URL.revokeObjectURL(e)}))):(Ge("Unable to add ".concat(t.length," images. Maximum images allowed per memory is 15"),!0),fe(!0)));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),on=(0,E.jsx)(B,{editable:R,text:N,handleTitleUpdate:function(e){$e("title",e)&&W(e)}}),sn=(0,E.jsx)(q,{editable:R,prevDate:_,handleDateUpdate:function(e){$e("date",e)&&G(e)}}),cn=(0,E.jsx)(V,{editable:R,prevStory:$,handleStoryUpdate:function(e){$e("story",e)&&ee(e)}}),ln=(0,E.jsx)(ce,{editable:R,images:re,handlePhotoClick:function(e,n,t){z(!0),H(t)},handleThumbnailUpdate:en,deleteImage:nn,addImage:an}),un=(0,E.jsxs)(l.Z,{variant:"contained",component:"label",onClick:function(){return U(!1)},sx:{color:"primary.main",borderRadius:5,backgroundColor:"button.main",padding:"6px 8px"},children:[(0,E.jsx)(d.Z,{size:"medium",sx:{paddingRight:1}}),(0,E.jsx)(h.Z,{variant:"body1",color:"muted.main",children:"Edit"})]});return 401===Xe&&!1===se?(0,E.jsx)(c.Fg,{to:"/login"}):(0,E.jsxs)(E.Fragment,{children:[R?(0,E.jsx)(x.Z,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:un}):(0,E.jsx)(de,{preview:C}),(0,E.jsx)(v.Z,{component:"div",sx:{backgroundColor:"button.main",margin:R?"5px":0},children:(0,E.jsx)(T.Z,{header:on,subheader:sn,photoLayout:ln,storyLayout:cn,memoryID:y,bucket:b,authURL:k,handleEditClick:function(){return U(!0)},preview:C})}),(0,E.jsx)(I,{open:D,title:N,date:_,images:re,index:F,handleNext:function(){H((function(e){return(e+1)%_e}))},handleBack:function(){H((function(e){return(e-1+_e)%_e}))},handleClose:function(){return z(!1)},handleChange:function(e){return H(e)}}),(0,E.jsx)(ue.Z,{snackBarOpen:se,message:me,onClose:function(){fe(!1),pe(null),We(null)},error:Ne}),(0,E.jsx)(m.Z,{open:Me,fullWidth:!0,sx:{p:1},children:(0,E.jsxs)(p.Z,{sx:{maxWidth:1,p:1},children:[(0,E.jsx)(Z.Z,{title:"Adding Images",sx:{textAlign:"center"}}),(0,E.jsx)(j.Z,{}),(0,E.jsxs)(g.Z,{children:[(0,E.jsx)(h.Z,{variant:"h6",sx:{color:"muted.main"},children:Ue}),(0,E.jsx)(x.Z,{justifyContent:"center",sx:{py:2},children:(0,E.jsx)(h.Z,{variant:"h5",children:Be})})]})]})})]})}fe.defaultProps={memTitle:"Memory Title",memDate:"Memory Date",memStory:"Memory Text"}}}]);
//# sourceMappingURL=3.6fb4bde1.chunk.js.map