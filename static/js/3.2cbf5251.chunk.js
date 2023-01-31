"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[3],{487:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(3400),a=t(9823),i=t(2065),o=t(184);function s(e){var n=e.size,t=e.handleClick;return(0,o.jsx)(r.Z,{size:n,sx:{color:"black",bgcolor:(0,i.Fq)("#fff",.4),position:"absolute",top:10,right:12},onClick:t,children:(0,o.jsx)(a.Z,{size:n})})}s.defaultProps={size:"small"}},4700:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(9439),a=t(2791),i=t(5646),o=t(3400),s=t(9823),l=t(3767),c=t(1428),u=t(890),d=t(184);function h(e){var n=e.message;return!0===e.error?(0,d.jsxs)(l.Z,{direction:"row",spacing:2,justifyContents:"space-between",alignItems:"center",children:[(0,d.jsx)(s.Z,{fontSize:"small",color:"error"}),(0,d.jsx)(u.Z,{children:n})]}):(0,d.jsxs)(l.Z,{direction:"row",spacing:2,justifyContents:"space-between",alignItems:"center",children:[(0,d.jsx)(c.Z,{fontSize:"small",color:"success"}),(0,d.jsx)(u.Z,{children:n})]})}function f(e){var n=e.snackBarOpen,t=e.message,l=e.onClose,c=e.error,u=(0,a.useState)(n),f=(0,r.Z)(u,2),x=f[0],m=f[1],p=(0,a.useState)(t),Z=(0,r.Z)(p,2),g=Z[0],j=Z[1];(0,a.useEffect)((function(){return m(n)}),[n]),(0,a.useEffect)((function(){return j(t)}),[t]);var v=function(){m(!1),j(null),l()},b=(0,d.jsx)(o.Z,{size:"small","aria-label":"close",color:"inherit",onClick:v,children:(0,d.jsx)(s.Z,{fontSize:"small"})});return(0,d.jsx)(i.Z,{open:x,autoHideDuration:3e3,onClose:v,message:(0,d.jsx)(h,{message:g,error:c}),action:b,anchorOrigin:{vertical:"top",horizontal:"center"}})}f.defaultProps={error:!1}},4125:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9439),a=t(2791);function i(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];return[i,o,function(e){var n=new Date(e);if(e){var t=n.toLocaleDateString("en-in",{day:"numeric",month:"long",year:"numeric"});o(t)}else o(null)}]}},1619:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9439),a=t(2791);function i(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];return[i,o,function(e){return o(e.target.value)}]}},2168:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9439),a=t(2791);function i(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];(0,a.useEffect)((function(){return o(e)}),[e]);return[i,o,function(e){o(e.target.value)}]}},8127:function(e,n,t){t.d(n,{Z:function(){return he}});var r=t(9439),a=t(2791),i=t(7689),o=t(7621),s=t(9585),l=t(4554),c=t(2898),u=t(4721),d=t(3967),h=t(5193),f=t(4700),x=t(4165),m=t(5861),p=t(3400),Z=t(184);function g(e){var n=e.icon,t=e.label;return(0,Z.jsxs)(l.Z,{sx:{alignItems:"center"},children:[(0,Z.jsx)(p.Z,{"aria-label":"delete",sx:{bgcolor:"form.input"},children:n}),t]})}var j=t(5574),v=t(6151),b=t(890),k=t(3767),y=t(5661);function C(e){var n=e.confirm,t=e.handleCallback,i=e.handleCloseCallback,o=e.title,s=e.message,c=(0,a.useState)(n),u=(0,r.Z)(c,2),d=u[0],h=u[1];(0,a.useEffect)((function(){return h(n)}),[n]);var f=function(){h(!1),i()};return(0,Z.jsxs)(j.Z,{open:d,sx:{backgroundColor:"faded.black"},children:[(0,Z.jsx)(y.Z,{children:o}),(0,Z.jsxs)(l.Z,{sx:{p:2},children:[(0,Z.jsx)(b.Z,{sx:{pb:2},children:s}),(0,Z.jsxs)(k.Z,{spacing:2,direction:"row",children:[(0,Z.jsx)(v.Z,{variant:"contained",onClick:f,children:"Cancel"}),(0,Z.jsx)(v.Z,{variant:"outlined",onClick:function(){f(),t()},children:"OK"})]})]})]})}var S=t(7247),w=t(5899);function D(){return(0,Z.jsx)(g,{icon:(0,Z.jsx)(S.Z,{}),label:"Delete"})}function E(e){var n=e.callback,t=e.open,r=e.closeCallback;return(0,Z.jsx)(C,{confirm:t,title:"Delete Memory",handleCallback:n,handleCloseCallback:function(){return r()},message:"Do you want to delete this memory?"})}function z(){return(z=(0,m.Z)((0,x.Z)().mark((function e(n,t,r,a){var i;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.Z.deleteMemory(n,t,r);case 3:i=e.sent,a(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var P=t(580),I=t(3433);function M(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],i=n[1],o=(0,a.useState)(""),s=(0,r.Z)(o,2),l=s[0],c=s[1],u=(0,a.useState)(null),d=(0,r.Z)(u,2),h=d[0],f=d[1],x=function(e){return t.includes(e)};return[t,l,h,function(e){if(["Enter","Tab",","].includes(e.key)){e.preventDefault();var n=l.trim();n&&function(e){var n=null;return x(e)&&(n="".concat(e," has already been added.")),function(e){return/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(e)}(e)||(n="".concat(e," is not a valid email address.")),!n||(f(n),!1)}(n)&&(i([].concat((0,I.Z)(t),[l])),c(""))}},function(e){c(e.target.value),f(null)},function(e){i((function(n){return n.filter((function(n){return n!==e}))}))},function(e){e.preventDefault();var n=e.clipboardData.getData("text").match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);if(n){var r=n.filter((function(e){return!x(e)}));i([].concat((0,I.Z)(t),(0,I.Z)(r)))}}]}var T=t(7254),U=t(1918),R=t(1889);function A(e){var n=e.items,t=e.value,r=e.error,a=e.handleKeyDown,i=e.handleChange,o=e.handleDelete,s=e.handlePaste;return(0,Z.jsxs)(k.Z,{direction:"column",spacing:2,sx:{mb:3},children:[(0,Z.jsx)(T.Z,{id:"outlined-error",value:t,label:"Email List",placeholder:"Type or paste email addresses and press `Enter`...",onKeyDown:a,onChange:i,onPaste:s,helperText:r||"Type or paste email addresses and press `Enter`...",error:!!r,sx:{my:1}}),(0,Z.jsx)(R.ZP,{container:!0,spacing:2,children:n.map((function(e){return(0,Z.jsx)(U.Z,{label:e,variant:"outlined",onDelete:function(){return o(e)},sx:{margin:.5},size:"small"},e)}))})]})}function L(e){var n=e.items,t=e.value,r=e.error,a=e.handleKeyDown,i=e.handleChange,o=e.handleDelete,s=e.handlePaste,c=e.handleClose,u=e.handleSubmit;return(0,Z.jsxs)(l.Z,{sx:{p:2},children:[(0,Z.jsx)(A,{items:n,value:t,error:r,handleKeyDown:a,handleChange:i,handleDelete:o,handlePaste:s}),(0,Z.jsxs)(k.Z,{spacing:2,direction:"row",children:[(0,Z.jsx)(v.Z,{variant:"outlined",onClick:c,children:"Cancel"}),(0,Z.jsx)(v.Z,{variant:"contained",onClick:u,children:"Share"})]})]})}var O=t(9836),B=t(3382),F=t(9281),W=t(5527),H=t(6125),N=t(5855),Y=t(3994),K=t(6890);function q(e){var n=e.invitation,t=e.accept,r={pending:"warning",sent:"success",failed:"error",rejected:"error",accepted:"success"};return(0,Z.jsxs)(O.Z,{size:"small","aria-label":"statuses",children:[(0,Z.jsx)(K.Z,{children:(0,Z.jsxs)(N.Z,{children:[(0,Z.jsx)(Y.Z,{align:"left",children:"Invitation"}),(0,Z.jsx)(Y.Z,{align:"left",children:"Accepted"})]})}),(0,Z.jsx)(B.Z,{children:(0,Z.jsxs)(N.Z,{children:[(0,Z.jsx)(Y.Z,{align:"left",children:(0,Z.jsx)(U.Z,{color:r[n],size:"small",label:n})}),(0,Z.jsx)(Y.Z,{align:"left",children:(0,Z.jsx)(U.Z,{color:r[t],size:"small",label:t})})]},new Date)})]})}var X=t(4454);function V(e){var n=e.selected,t=e.handleChange,i=(0,a.useState)(n),o=(0,r.Z)(i,2),s=o[0],l=o[1];return(0,a.useEffect)((function(){l(n)}),[n]),console.log("check box cell",n,s,t),(0,Z.jsx)(Y.Z,{padding:"checkbox",children:(0,Z.jsx)(X.Z,{color:"primary",checked:s,onChange:t})},"checkbox")}var _=t(3044);function G(e){var n=e.email,t=e.picture,r=e.name;return(0,Z.jsx)(Y.Z,{component:"th",scope:"row",sx:{p:1},children:(0,Z.jsx)(U.Z,{avatar:(0,Z.jsx)(_.Z,{alt:n,src:t,sx:{referrerPolicy:"no-referrer"}}),label:r,sx:{b:1,maxWidth:170},color:"primary",variant:"outlined"})},"personal-details")}var J=t(1283),Q=t(2885);function $(e){var n=e.open,t=e.handleClick;return(0,Z.jsx)(Y.Z,{align:"center",style:{paddingBottom:0,paddingTop:0},colSpan:6,onClick:t,children:(0,Z.jsx)(p.Z,{"aria-label":"expand row",size:"small",children:n?(0,Z.jsx)(Q.Z,{}):(0,Z.jsx)(J.Z,{})})},"expand-status")}function ee(e){var n=e.name,t=e.email,i=e.picture,o=e.invitation,s=e.accept,c=e.isSelected,u=e.onCheckBoxClick,d=(0,a.useState)(!1),h=(0,r.Z)(d,2),f=h[0],x=h[1];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(N.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(V,{selected:c,handleChange:u}),(0,Z.jsx)(G,{email:t,picture:i,name:n}),(0,Z.jsx)($,{open:f,handleClick:function(){return x(!f)}})]},"".concat({email:t},"details")),(0,Z.jsx)(N.Z,{children:(0,Z.jsx)(Y.Z,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:(0,Z.jsx)(H.Z,{in:f,timeout:"auto",unmountOnExit:!0,children:(0,Z.jsxs)(l.Z,{sx:{margin:1},children:[(0,Z.jsx)(b.Z,{variant:"h6",gutterBottom:!0,component:"div",children:"Status"}),(0,Z.jsx)(q,{invitation:o,accept:s})]})})})},"".concat({email:t},"status"))]})}function ne(e){var n=e.numSelected,t=e.rowCount,r=e.onSelectAllClick;return(0,Z.jsx)(Y.Z,{padding:"checkbox",children:(0,Z.jsx)(X.Z,{color:"primary",indeterminate:n>0&&n<t,checked:t>0&&n===t,onChange:r})},"selectAll")}function te(e){var n=e.numSelected,t=e.rowCount,r=e.onSelectAllClick,a=e.handleUnshareClick;return(0,Z.jsx)(K.Z,{children:(0,Z.jsxs)(N.Z,{children:[(0,Z.jsx)(ne,{numSelected:n,rowCount:t,onSelectAllClick:r},"selectAll"),(0,Z.jsx)(Y.Z,{align:"center",sx:{fontWeight:"bold",fontSize:"1em"},children:0===n?"Shared With":"".concat(n," selected")},"message"),(0,Z.jsx)(Y.Z,{align:"center",sx:{fontWeight:"bold"},children:(0,Z.jsx)(v.Z,{variant:"contained",color:"error",sx:{textTransform:"none"},disabled:0===n,onClick:a,children:"Unshare"})},"action")]})})}function re(e){var n=e.shareData,t=(0,a.useState)(0),i=(0,r.Z)(t,2),o=i[0],s=i[1],l=(0,a.useState)([]),c=(0,r.Z)(l,2),u=c[0],d=c[1];console.log("share data",n,u),(0,a.useEffect)((function(){u===[]&&"sharees"in n&&d(Array(n.sharees.length).fill(0))}),[n]);return"sharees"in n?(0,Z.jsx)(F.Z,{component:W.Z,children:(0,Z.jsxs)(O.Z,{"aria-label":"memory share table",children:[(0,Z.jsx)(te,{numSelected:o,rowCount:n.sharees.length,onSelectAllClick:function(){u.length>0&&o<u.length?(d(Array(n.sharees.length).fill(1)),s(u.length)):(d(Array(n.sharees.length).fill(0)),s(0))},handleUnshareClick:function(){for(var e=[],t=0;t<u.length;t+=1)1===u[t]&&e.push(n.sharees[t].email)}}),(0,Z.jsx)(B.Z,{children:n.sharees.map((function(e,n){var t,r;return"details"in e?(t="name"in e.details?e.details.name:"username"in e.details?e.details.username:e.email,r="picture"in e.details?e.details.picture:""):(t=e.Email,r=""),console.log("name, picture",t,r),(0,Z.jsx)(ee,{email:e.email,name:t,picture:r,invitation:e.status.invitation,accept:e.status.accept,isSelected:1===u[n],onCheckBoxClick:function(){return e=n,console.log("handle click index",e),1===u[e]?s((function(e){return e-1})):s((function(e){return e+1})),void d([].concat((0,I.Z)(u.slice(0,e)),[1-u[e]],(0,I.Z)(u.slice(e+1))));var e}},e.email)}))})]})}):null}function ae(){return(0,Z.jsx)(g,{icon:(0,Z.jsx)(P.Z,{}),label:"Share"})}function ie(e){var n=e.confirm,t=e.callback,i=e.closeCallback,o=e.memoryID,s=M(),l=(0,r.Z)(s,7),c=l[0],d=l[1],h=l[2],f=l[3],p=l[4],g=l[5],v=l[6],k=(0,a.useState)({}),C=(0,r.Z)(k,2),S=C[0],D=C[1];(0,a.useEffect)((0,m.Z)((0,x.Z)().mark((function e(){var n;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.Z.getShareData(o);case 3:n=e.sent,D(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]);var E=(0,a.useState)(n),z=(0,r.Z)(E,2),P=z[0],I=z[1];(0,a.useEffect)((function(){return I(n)}),[n]);var T=function(){I(!1),i()};return(0,Z.jsxs)(j.Z,{open:P,sx:{"& .MuiPaper-root":{m:0},backgroundColor:"faded.black"},children:[(0,Z.jsx)(y.Z,{children:"Share Memory"}),(0,Z.jsx)(u.Z,{}),(0,Z.jsxs)(b.Z,{children:["New Shares (",c.length,"added)"]}),(0,Z.jsx)(L,{items:c,value:d,error:h,handleKeyDown:f,handleChange:p,handleDelete:g,handlePaste:v,handleClose:T,handleSubmit:function(){T(),t(c)}}),(0,Z.jsx)(u.Z,{}),(0,Z.jsx)(b.Z,{children:"Existing Shares"}),(0,Z.jsx)(re,{shareData:S})]})}function oe(){return(oe=(0,m.Z)((0,x.Z)().mark((function e(n,t,r,a,i){var o;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("share memory",n,t,r,a),e.next=4,w.Z.shareMemory(n,t,r,a);case 4:o=e.sent,i(o),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var se=t(5422),le=t(3786),ce=t(1286);function ue(){return(0,Z.jsx)(g,{icon:(0,Z.jsx)(ce.Z,{}),label:"Edit"})}function de(e){var n,t=e.snackBar,i=e.handleDelete,o=e.handleShare,s=e.handleEditClick,l=e.memoryID,u=(0,a.useState)(null),d=(0,r.Z)(u,2),h=d[0],f=d[1],x=(0,a.useState)(null),m=(0,r.Z)(x,2),p=m[0],g=m[1],j=Boolean(h),v=function(){return f(null)};"delete"===p&&(n=(0,Z.jsx)(E,{open:!0,callback:i,closeCallback:function(){return g(null)}})),"share"===p&&(n=(0,Z.jsx)(ie,{confirm:!0,callback:function(e){return o(e)},closeCallback:function(){return g(null)},memoryID:l}));return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(c.Z,{onClick:function(e){return f(e.currentTarget)}}),(0,Z.jsxs)(se.Z,{id:"memory-actions",anchorEl:h,open:j,onClose:v,MenuListProps:{"aria-labelledby":"basic-button"},sx:{borderRadius:"10px"},children:[(0,Z.jsx)(le.Z,{onClick:function(){s(),v()},children:(0,Z.jsx)(ue,{})}),(0,Z.jsx)(le.Z,{onClick:function(){g("share"),v()},children:(0,Z.jsx)(ae,{})}),(0,Z.jsx)(le.Z,{onClick:function(){g("delete"),v()},children:(0,Z.jsx)(D,{})})]}),n,t]})}function he(e){var n,t=e.header,x=e.subheader,m=e.photoLayout,p=e.storyLayout,g=e.bucket,j=e.memoryID,v=e.authURL,b=e.handleEditClick,k=e.preview,y=(0,a.useState)(null),C=(0,r.Z)(y,2),S=C[0],w=C[1],D=(0,a.useState)(null),E=(0,r.Z)(D,2),P=E[0],I=E[1],M=(0,a.useState)(null),T=(0,r.Z)(M,2),U=T[0],R=T[1],A=(0,d.Z)();n=(0,h.Z)(A.breakpoints.down("lg"))?"":"vertical-scroll";var L=function(e,n){I(e),R(n)},O=function(e){"ok"===e.status?L("Memory deleted successfully",!1):L("Error while deleting memory",!0),w(!0)},B=function(e){"ok"===e.status?L("Memory shared successfully",!1):L("Error while sharing memory",!0),w(!0)},F=(0,Z.jsx)(f.Z,{snackBarOpen:S,message:P,onClose:function(){w(!1),I(null),R(null)},error:U}),W=k?(0,Z.jsx)(c.Z,{}):(0,Z.jsx)(de,{snackBar:F,handleDelete:function(){!function(e,n,t,r){z.apply(this,arguments)}(g,v,j,O)},handleShare:function(e){!function(e,n,t,r,a){oe.apply(this,arguments)}(g,v,j,e,B)},memoryID:j,handleEditClick:b});return!1===S?(0,Z.jsx)(i.Fg,{to:"/memories",replace:!0}):(0,Z.jsxs)(o.Z,{sx:{boxShadow:0,bgcolor:"button.main",p:1},children:[(0,Z.jsx)(s.Z,{title:t,subheader:x,action:W}),(0,Z.jsx)(u.Z,{}),(0,Z.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"flex-start",flexDirection:{lg:"row",xs:"column"},height:{lg:"72vh"},my:1},children:[(0,Z.jsx)(l.Z,{sx:{width:{lg:"70%",xs:"100%"},overflowY:"scroll",borderRadius:5},className:n,children:m}),(0,Z.jsx)(l.Z,{sx:{width:{lg:"30%",sx:"100%"},overflowY:"scroll",mt:{lg:0,xs:2},p:{lg:1},px:1},className:n,children:p})]})]})}},8003:function(e,n,t){t.d(n,{Z:function(){return he}});var r=t(7762),a=t(4165),i=t(5861),o=t(9439),s=t(2791),l=t(7689),c=t(6151),u=t(533),d=t(1428),h=t(7394),f=t(890),x=t(3767),m=t(5574),p=t(7621),Z=t(9585),g=t(9504),j=t(4721),v=t(4554),b=t(1133),k=t(5397),y=t(3400),C=t(487),S=t(1065),w=t(8894),D=t(184),E=(0,w.yP)((0,w.bH)((0,w.p6)(S.ZP)));function z(e){var n=e.ind,t=e.images,r=e.handleNext,a=e.handleStepChange,i=(0,s.useState)(n),l=(0,o.Z)(i,2),c=l[0],u=l[1],d=(0,s.useState)(0),h=(0,o.Z)(d,2),f=h[0],x=h[1],m=(0,s.useState)(null),p=(0,o.Z)(m,2),Z=p[0],g=p[1];(0,s.useEffect)((function(){u(n)}),[n]),(0,s.useEffect)((function(){f<t.length?g("none"):g("flex")}),[f]);var j=function(){return x((function(e){return e+1}))};return(0,D.jsx)(E,{index:c,onChangeIndex:a,enableMouseEvents:!0,animateTransitions:!0,interval:1e4,onClick:r,style:{backgroundColor:"muted.main"},slideRenderer:function(e){var n=e.index,r=e.key,a=function(e,n){var t=e%n;return t<0?t+n:t}(n,t.length),i=(t[a].images?t[a].images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",");return(0,D.jsx)(v.Z,{component:"img",onLoad:j,sx:{display:{display:Z},justifyContents:"center",width:"100%",bgcolor:"#1c1c1c"},src:t[a].src,srcSet:i,style:{display:"block",boxSizing:"content-box",cursor:"pointer",objectFit:"contain",height:"100vh"},alt:t[a].src},r)}})}function P(e){var n=e.handleClick;return(0,D.jsx)(y.Z,{edge:"start",color:"primary","aria-label":"close",onClick:n,sx:{position:"absolute",top:"50%",right:0,transform:"translate(0%, -50%)"},children:(0,D.jsx)(k.Z,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function I(e){var n=e.handleClick;return(0,D.jsx)(y.Z,{edge:"start",color:"primary","aria-label":"close",onClick:n,sx:{position:"absolute",top:"50%",left:0,transform:"translate(0%, -50%)"},children:(0,D.jsx)(b.Z,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function M(e){var n=e.open,t=e.title,r=e.date,a=e.images,i=e.index,o=e.handleNext,s=e.handleBack,l=e.handleClose,c=e.handleChange;return(0,D.jsxs)(m.Z,{open:n,fullScreen:!0,children:[(0,D.jsx)(z,{images:a,ind:i,handleNext:o,handleStepChange:c}),(0,D.jsx)(Z.Z,{title:t,subheader:r,sx:{position:"absolute",top:10,left:10,bgcolor:"button.main",borderRadius:3,padding:1}}),(0,D.jsx)(I,{handleClick:s}),(0,D.jsx)(P,{handleClick:o}),(0,D.jsx)(C.Z,{size:"large",handleClick:l})]})}z.defaultProps={ind:0},M.defaultProps={index:0};var T=t(8127),U=t(7254),R=t(9906),A=t(5130),L=t(1286),O=t(2168);function B(e){var n=e.editable,t=e.text,r=e.handleTitleUpdate,a=(0,O.Z)(t),i=(0,o.Z)(a,3),l=i[0],c=i[1],u=i[2],d=(0,s.useState)(n),h=(0,o.Z)(d,2),m=h[0],p=h[1],Z=(0,s.useState)(!1),g=(0,o.Z)(Z,2),j=g[0],v=g[1];return(0,s.useEffect)((function(){p(n),c(t),v(!1)}),[n]),m||j?m&&!j?(0,D.jsxs)(x.Z,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[(0,D.jsx)(f.Z,{variant:"h6",children:l}),(0,D.jsx)(L.Z,{fontSize:"medium",onClick:function(){return v(!0)}})]}):m&&j?(0,D.jsxs)(x.Z,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start"},spacing:2,children:[(0,D.jsx)(U.Z,{id:"standard-basic",size:"small",label:"Title",onChange:u,variant:"standard",defaultValue:l,sx:{maxWidth:"200px"}}),(0,D.jsx)(R.Z,{fontSize:"medium",onClick:function(){r(l),v(!1)}}),(0,D.jsx)(A.Z,{fontSize:"medium",onClick:function(){c(t),v(!1)}})]}):void 0:(0,D.jsx)(f.Z,{variant:"h6",children:l})}var F=t(1413),W=t(8239),H=t(6571),N=t(41),Y=t(4125);function K(e){var n=e.editable,t=e.prevDate,r=e.handleDateUpdate,a=(0,s.useState)(n),i=(0,o.Z)(a,2),l=i[0],c=i[1],u=(0,s.useState)(!1),d=(0,o.Z)(u,2),h=d[0],m=d[1],p=(0,Y.Z)(t),Z=(0,o.Z)(p,3),g=Z[0],j=Z[1],v=Z[2];return(0,s.useEffect)((function(){c(n),j(t),m(!1)}),[n,t]),l||h?l&&!h?(0,D.jsxs)(x.Z,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[(0,D.jsx)(f.Z,{children:g}),(0,D.jsx)(L.Z,{fontSize:"medium",onClick:function(){return m(!0)}})]}):l&&h?(0,D.jsxs)(x.Z,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start",mt:3},spacing:2,children:[(0,D.jsx)(H._,{dateAdapter:N.H,children:(0,D.jsx)(W.M,{label:"Memory Date",value:g,onChange:v,placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return(0,D.jsx)(U.Z,(0,F.Z)({readOnly:!0,required:!0},e))}})}),(0,D.jsx)(R.Z,{fontSize:"medium",onClick:function(){r(g),m(!1)}}),(0,D.jsx)(A.Z,{fontSize:"medium",onClick:function(){j(t),m(!1)}})]}):void 0:(0,D.jsx)(f.Z,{children:g})}var q=t(1747),X=t(1619);function V(e){var n=e.editable,t=e.prevStory,r=e.handleStoryUpdate,a=(0,s.useState)(n),i=(0,o.Z)(a,2),l=i[0],c=i[1],u=(0,s.useState)(!1),d=(0,o.Z)(u,2),h=d[0],m=d[1],p=(0,X.Z)(t),Z=(0,o.Z)(p,3),g=Z[0],b=Z[1],k=Z[2],y=(0,s.useRef)();return(0,s.useEffect)((function(){c(n),b(t),m(!1)}),[n,t]),l||h?l&&!h?(0,D.jsxs)(x.Z,{direction:"column",spacing:2,children:[(0,D.jsxs)(x.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,D.jsx)(f.Z,{sx:{color:"muted.main"},children:"Edit Story"}),(0,D.jsx)(L.Z,{fontSize:"medium",onClick:function(){m(!0)}})]}),(0,D.jsx)(j.Z,{sx:{width:1}}),(0,D.jsx)(f.Z,{style:{whiteSpace:"pre-wrap"},children:g})]}):l&&h?(0,D.jsxs)(x.Z,{direction:"column",spacing:2,children:[(0,D.jsxs)(x.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,D.jsx)(f.Z,{sx:{color:"muted.main"},children:"Editing Story"}),(0,D.jsx)(R.Z,{fontSize:"medium",onClick:function(){r(g),m(!1)}}),(0,D.jsx)(A.Z,{fontSize:"medium",onClick:function(){b(t),m(!1)}})]}),(0,D.jsx)(j.Z,{sx:{width:1}}),(0,D.jsx)(v.Z,{sx:{p:2,m:1,my:2,border:1,borderColor:"primary.main",bgcolor:"input.background",minHeight:"70vh",borderRadius:5,width:"90%"},onClick:function(){return y.current.focus()},children:(0,D.jsx)(q.Z,{autoFocus:!0,"aria-label":"minimum height",placeholder:"Tell your story...",value:g,onChange:k,style:{width:"100%",minHeight:"184px",maxHeight:"70vh",boxSizing:"border-box",paddingTop:"5px",border:0,overflow:"auto",outline:"none",resize:"vertical",borderRadius:5,"&:focus":{border:0}},ref:y})})]}):void 0:(0,D.jsx)(f.Z,{style:{whiteSpace:"pre-wrap"},children:g})}var _=t(5987),G=t(5684),J=t(9055),Q=t(5523),$=t(7247),ee=t(2913),ne=t(9823),te=t(2065),re=["alt","style"],ae=["alt","style"];function ie(e){var n=e.children,t=e.onClick,r=e.name,a=e.updateOp;return(0,D.jsx)(c.Z,{id:r,variant:"contained",component:"label",onClick:t,sx:{color:a===r?"button.main":"muted.main",borderRadius:5,backgroundColor:a===r?"primary.main":"button.main",padding:"6px 8px","&:hover":{color:a===r?"button.main":"muted.main",backgroundColor:a===r?"primary.main":"button.main"}},children:n})}function oe(e){var n=e.handleChange,t=e.onClick,r=e.updateOp;return(0,D.jsxs)(ie,{onClick:t,name:"add",updateOp:r,children:[(0,D.jsx)("input",{type:"file",hidden:!0,multiple:!0,accept:"image/*",onChange:n}),(0,D.jsx)(ee.Z,{sx:{fontSize:"1.5rem"}}),"Add"]})}function se(e){var n=e.images,t=e.handlePhotoClick,r=e.renderPhoto,a=(0,s.useState)(null),i=(0,o.Z)(a,2),l=i[0],c=i[1];return(0,s.useEffect)((function(){var e=0,t=0;n.forEach((function(n){n.height>n.width?t+=1:e+=1})),c(e>t?"rows":"columns")}),[n]),r?(0,D.jsx)(G.Z,{layout:l,photos:n,onClick:t,spacing:2,renderPhoto:r}):(0,D.jsx)(G.Z,{layout:l,photos:n,onClick:t,spacing:2})}function le(e){var n=e.editable,t=e.images,r=e.handlePhotoClick,a=e.handleThumbnailUpdate,i=e.deleteImage,l=e.addImage,u=(0,s.useState)(n),d=(0,o.Z)(u,2),h=d[0],m=d[1],p=(0,s.useState)(null),Z=(0,o.Z)(p,2),g=Z[0],j=Z[1],v=(0,s.useState)(null),b=(0,o.Z)(v,2),k=b[0],C=b[1],S=function(e){j(g===e?null:e)};(0,s.useEffect)((function(){m(n),j(null)}),[n]);var w=(0,D.jsxs)(x.Z,{direction:"row",spacing:2,children:[(0,D.jsx)(oe,{handleChange:l,onClick:function(){return S("add")},updateOp:g}),(0,D.jsxs)(ie,{onClick:function(){return S("delete")},name:"delete",updateOp:g,children:[(0,D.jsx)($.Z,{sx:{fontSize:"1.5rem"}}),"Delete"]}),(0,D.jsx)(ie,{onClick:function(){return S("thumbnail")},name:"thumbnail",updateOp:g,children:"Set Thumbnail"})]}),E=(0,D.jsx)(x.Z,{direction:"row",children:(0,D.jsxs)(f.Z,{variant:"h6",color:"muted.main",children:["Images:",t.length]})});return h?h&&"delete"===g?(0,D.jsxs)(x.Z,{direction:"column",spacing:2,sx:{p:2},children:[E,w,(0,D.jsx)(se,{images:t,handlePhotoClick:r,renderPhoto:function(e){var n=e.layout,r=e.imageProps,a=r.alt,o=r.style,s=(0,_.Z)(r,re);return(0,D.jsxs)(c.Z,{component:"div",children:[(0,D.jsx)("img",(0,F.Z)({alt:a,style:(0,F.Z)((0,F.Z)({},o),{},{width:n.width,padding:0})},s)),(0,D.jsx)(y.Z,{size:"medium",sx:{color:"black",bgcolor:(0,te.Fq)("#fff",.4),position:"absolute",top:10,right:12},onClick:function(){return function(e){var n=t.find((function(n){return n.alt===e}));i(n)}(a)},children:(0,D.jsx)(ne.Z,{size:"medium"})})]})}})]}):h&&"thumbnail"===g?(0,D.jsxs)(x.Z,{direction:"column",spacing:2,sx:{p:2},children:[E,w,(0,D.jsx)(se,{images:t,handlePhotoClick:r,renderPhoto:function(e){var n=e.layout,r=e.imageProps,i=r.alt,o=r.style,s=(0,_.Z)(r,ae);return(0,D.jsxs)(c.Z,{component:"div",children:[(0,D.jsx)("img",(0,F.Z)({alt:i,style:(0,F.Z)((0,F.Z)({},o),{},{width:n.width,padding:0})},s)),(0,D.jsx)(Q.Z,{control:(0,D.jsx)(J.Z,{}),label:"",checked:i===k,onChange:function(){return function(e){C(e);var n=t.find((function(n){return n.alt===e}));a(n)}(i)},sx:{pr:1,position:"absolute",bgcolor:(0,te.Fq)("#fff",.6),color:"black",borderRadius:"0px 5px 5px 0px",borderColor:"secondary.main",borderLeft:0,bottom:20,left:15}})]})}})]}):h&&"add"===g||h&&!g?(0,D.jsxs)(x.Z,{direction:"column",spacing:2,sx:{p:2},children:[E,w,(0,D.jsx)(se,{images:t,handlePhotoClick:r})]}):void 0:(0,D.jsx)(se,{images:t,handlePhotoClick:r})}se.defaultProps={renderPhoto:null},ie.defaultProps={onClick:function(){}};var ce=t(5899),ue=t(4700);function de(e){return!1===e.preview?(0,D.jsx)(x.Z,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:(0,D.jsx)(u.Z,{href:"/",underline:"none",children:(0,D.jsxs)(c.Z,{variant:"contained",component:"label",sx:{color:"primary.main",backgroundColor:"button.main",padding:"6px 8px",boxShadow:0,"&:hover":{backgroundColor:"button.main"}},children:[(0,D.jsx)(h.Z,{size:"medium",sx:{paddingRight:1}}),(0,D.jsx)(f.Z,{variant:"body1",color:"muted.main",children:"Memories"})]})})}):null}function he(e){var n=e.memTitle,t=e.memDate,u=e.memStory,h=e.memImages,b=e.bucket,k=e.memoryID,y=e.authURL,C=e.preview,S=(0,s.useState)(!1),w=(0,o.Z)(S,2),E=w[0],z=w[1],P=(0,s.useState)(!1),I=(0,o.Z)(P,2),U=I[0],R=I[1],A=(0,s.useState)(0),L=(0,o.Z)(A,2),O=L[0],F=L[1],W=(0,s.useState)(n),H=(0,o.Z)(W,2),N=H[0],Y=H[1],q=(0,s.useState)(t),X=(0,o.Z)(q,2),_=X[0],G=X[1],J=(0,s.useState)(u),Q=(0,o.Z)(J,2),$=Q[0],ee=Q[1],ne=(0,s.useState)(h),te=(0,o.Z)(ne,2),re=te[0],ae=te[1],ie=(0,s.useState)(null),oe=(0,o.Z)(ie,2),se=oe[0],he=oe[1],fe=(0,s.useState)(null),xe=(0,o.Z)(fe,2),me=xe[0],pe=xe[1],Ze=(0,s.useState)([]),ge=(0,o.Z)(Ze,2),je=ge[0],ve=ge[1],be=(0,s.useState)(null),ke=(0,o.Z)(be,2),ye=ke[0],Ce=ke[1],Se=(0,s.useState)([]),we=(0,o.Z)(Se,2),De=we[0],Ee=we[1],ze=(0,s.useState)(!1),Pe=(0,o.Z)(ze,2),Ie=Pe[0],Me=Pe[1],Te=(0,s.useState)(null),Ue=(0,o.Z)(Te,2),Re=Ue[0],Ae=Ue[1],Le=(0,s.useState)(null),Oe=(0,o.Z)(Le,2),Be=Oe[0],Fe=Oe[1],We=(0,s.useState)(null),He=(0,o.Z)(We,2),Ne=He[0],Ye=He[1],Ke=(0,s.useState)(!1),qe=(0,o.Z)(Ke,2),Xe=qe[0],Ve=qe[1],_e=re.length;(0,s.useEffect)((function(){return Y(n)}),[n]),(0,s.useEffect)((function(){return G(t)}),[t]),(0,s.useEffect)((function(){return ee(u)}),[u]),(0,s.useEffect)((function(){return ae(h)}),[h]);var Ge=function(e,n){pe(e),Ye(n)},Je=function(e,n,t){401===e.status?Ge("You have been logged out. Please login to continue.",!0):403===e.status?Ge("You do not have permissions to do this operation.",!0):Ge("Unknown error occured while ".concat(n),!0),t(e.status)},Qe=function(e){he(!0),Ve(e)},$e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n,t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.Z.updateMemoryDetails(b,y,k,n,t);case 3:return(r=e.sent).ok?Ge("Memory ".concat(n," updated successfully"),!1):Je(r,"updating ".concat(n),Qe),he(!0),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}(),en=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.Z.updateMemoryImage(b,y,k,"thumbnail",n);case 3:return(t=e.sent).ok?(Ge("Thumbnail updated successfully",!1),he(!0)):Je(t,"updating thumbnail",Qe),e.abrupt("return",t);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),nn=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(re.length>1)){e.next=8;break}return e.next=4,ce.Z.updateMemoryImage(b,y,k,"delete",n);case 4:(t=e.sent).ok?(Ge("Memory image deleted successfully",!1),ae(re.filter((function(e){return e.title!==n.title})))):Je(t,"deleting image",Qe),e.next=9;break;case 8:Ge("Atleast 1 image is needed for memory. Unable to delete",!0);case 9:return he(!0),e.abrupt("return",t);case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),tn=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.Z.updateMemoryImage(b,y,k,"add",n);case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),rn=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n,t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(0,r.Z)(je.entries()),e.prev=1,i=(0,a.Z)().mark((function e(){var n,r,i,s,l,c,u,d,h,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,o.Z)(t.value,2),r=n[0],i=n[1],s=(0,o.Z)(i,3),l=s[0],c=s[1],u=s[2],e.next=4,tn(l).then((function(e){return e.ok?e.text():(Je(e,"adding image",Qe),"")}));case 4:return d=e.sent,h={key:"memories/".concat(k,"/images/").concat(l.name),src:u,alt:l.name,title:l.name,width:l.width,height:l.height,images:[]},e.next=8,fetch(d,{body:c,method:"PUT"});case 8:(f=e.sent).ok?(Ae("Images uploaded: ".concat(r+1," / ").concat(ye," ")),ae((function(e){return e.concat([h])}))):(Fe("Error while uploading memory image"),Ee((function(e){return e.concat([l.name])})),Je(f,"deleting image",Qe));case 10:case"end":return e.stop()}}),e)})),n.s();case 4:if((t=n.n()).done){e.next=8;break}return e.delegateYield(i(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),n.e(e.t1);case 13:return e.prev=13,n.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(je.length>0&&(Me(!0),Ae("Preparing images for upload....")),je.length!==ye){e.next=9;break}return e.next=4,rn();case 4:De.length>0?Fe("Error while uploading ".concat(De.length," images")):Fe("".concat(je.length," image(s) uploaded successfully")),Ee([]),Ce(null),ve([]),setTimeout((function(){Me(!1),Fe(null),Ae(null)}),3e3);case 9:case"end":return e.stop()}}),e)}))),[je]);var an=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.target.files&&(t=Array.from(n.target.files),Ce(t.length),re.length+t.length<=15?(t.forEach((function(e){var n=new Image;n.onload=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t){var r,i,o,s,l,c,u,d;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.target.naturalHeight,i=t.target.naturalWidth,o=e.size/1048576,s=e.name,l=[500,1e3,1500].map((function(e){return{height:e,width:Math.ceil(e*i/r)}})),c=Date.now(),u="".concat(c,"-").concat(s),d=[{name:u,size:o,height:r,width:i,images:l},e,t.target.src],ve((function(e){return e.concat([d])}));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),n.src=URL.createObjectURL(e)})),t.map((function(e){return URL.revokeObjectURL(e)}))):(Ge("Unable to add ".concat(t.length," images. Maximum images allowed per memory is 15"),!0),he(!0)));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),on=(0,D.jsx)(B,{editable:U,text:N,handleTitleUpdate:function(e){$e("title",e)&&Y(e)}}),sn=(0,D.jsx)(K,{editable:U,prevDate:_,handleDateUpdate:function(e){$e("date",e)&&G(e)}}),ln=(0,D.jsx)(V,{editable:U,prevStory:$,handleStoryUpdate:function(e){$e("story",e)&&ee(e)}}),cn=(0,D.jsx)(le,{editable:U,images:re,handlePhotoClick:function(e,n,t){z(!0),F(t)},handleThumbnailUpdate:en,deleteImage:nn,addImage:an}),un=(0,D.jsxs)(c.Z,{variant:"contained",component:"label",onClick:function(){return R(!1)},sx:{color:"primary.main",borderRadius:5,backgroundColor:"button.main",padding:"6px 8px"},children:[(0,D.jsx)(d.Z,{size:"medium",sx:{paddingRight:1}}),(0,D.jsx)(f.Z,{variant:"body1",color:"muted.main",children:"Edit"})]});return 401===Xe&&!1===se?(0,D.jsx)(l.Fg,{to:"/login"}):(0,D.jsxs)(D.Fragment,{children:[U?(0,D.jsx)(x.Z,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:un}):(0,D.jsx)(de,{preview:C}),(0,D.jsx)(v.Z,{component:"div",sx:{backgroundColor:"button.main",margin:U?"5px":0},children:(0,D.jsx)(T.Z,{header:on,subheader:sn,photoLayout:cn,storyLayout:ln,memoryID:k,bucket:b,authURL:y,handleEditClick:function(){return R(!0)},preview:C})}),(0,D.jsx)(M,{open:E,title:N,date:_,images:re,index:O,handleNext:function(){F((function(e){return(e+1)%_e}))},handleBack:function(){F((function(e){return(e-1+_e)%_e}))},handleClose:function(){return z(!1)},handleChange:function(e){return F(e)}}),(0,D.jsx)(ue.Z,{snackBarOpen:se,message:me,onClose:function(){he(!1),pe(null),Ye(null)},error:Ne}),(0,D.jsx)(m.Z,{open:Ie,fullWidth:!0,sx:{p:1},children:(0,D.jsxs)(p.Z,{sx:{maxWidth:1,p:1},children:[(0,D.jsx)(Z.Z,{title:"Adding Images",sx:{textAlign:"center"}}),(0,D.jsx)(j.Z,{}),(0,D.jsxs)(g.Z,{children:[(0,D.jsx)(f.Z,{variant:"h6",sx:{color:"muted.main"},children:Re}),(0,D.jsx)(x.Z,{justifyContent:"center",sx:{py:2},children:(0,D.jsx)(f.Z,{variant:"h5",children:Be})})]})]})})]})}he.defaultProps={memTitle:"Memory Title",memDate:"Memory Date",memStory:"Memory Text"}}}]);
//# sourceMappingURL=3.2cbf5251.chunk.js.map