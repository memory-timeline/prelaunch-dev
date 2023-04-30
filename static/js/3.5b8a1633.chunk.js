"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[3],{487:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(3400),a=t(9823),o=t(2065),i=t(184);function l(e){var n=e.size,t=e.handleClick;return(0,i.jsx)(r.Z,{size:n,sx:{color:"black",bgcolor:(0,o.Fq)("#fff",.4),position:"absolute",top:10,right:12},onClick:t,children:(0,i.jsx)(a.Z,{size:n})})}l.defaultProps={size:"small"}},4125:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(9439),a=t(2791);function o(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),o=t[0],i=t[1];return[o,i,function(e){var n=new Date(e);if(e){var t=n.toLocaleDateString("en-in",{day:"numeric",month:"long",year:"numeric"});i(t)}else i(null)}]}},1619:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(9439),a=t(2791);function o(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),o=t[0],i=t[1];return[o,i,function(e){return i(e.target.value)}]}},2168:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(9439),a=t(2791);function o(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),o=t[0],i=t[1];(0,a.useEffect)((function(){return i(e)}),[e]);return[o,i,function(e){i(e.target.value)}]}},6926:function(e,n,t){t.d(n,{Z:function(){return xe}});var r=t(9439),a=t(2791),o=t(7689),i=t(7621),l=t(9585),s=t(4554),c=t(4721),u=t(3967),d=t(5193),h=t(4700),m=t(4165),f=t(5861),x=t(3400),p=t(184);function Z(e){var n=e.icon,t=e.label;return(0,p.jsxs)(s.Z,{sx:{alignItems:"center"},children:[(0,p.jsx)(x.Z,{"aria-label":"delete",sx:{bgcolor:"form.input"},children:n}),t]})}var g=t(5574),j=t(6151),v=t(890),b=t(3767),y=t(5661);function k(e){var n=e.confirm,t=e.handleCallback,o=e.handleCloseCallback,i=e.title,l=e.message,c=(0,a.useState)(n),u=(0,r.Z)(c,2),d=u[0],h=u[1];(0,a.useEffect)((function(){return h(n)}),[n]);var m=function(){h(!1),o()};return(0,p.jsxs)(g.Z,{open:d,sx:{backgroundColor:"faded.black"},children:[(0,p.jsx)(y.Z,{children:i}),(0,p.jsxs)(s.Z,{sx:{p:2},children:[(0,p.jsx)(v.Z,{sx:{pb:2},children:l}),(0,p.jsxs)(b.Z,{spacing:2,direction:"row",children:[(0,p.jsx)(j.Z,{variant:"contained",onClick:m,children:"Cancel"}),(0,p.jsx)(j.Z,{variant:"outlined",onClick:function(){m(),t()},children:"OK"})]})]})]})}var C=t(7247),S=t(5899);function w(){return(0,p.jsx)(Z,{icon:(0,p.jsx)(C.Z,{}),label:"Delete"})}function D(e){var n=e.callback,t=e.open,r=e.closeCallback;return(0,p.jsx)(k,{confirm:t,title:"Delete Memory",handleCallback:n,handleCloseCallback:function(){return r()},message:"Do you want to delete this memory?"})}function E(){return(E=(0,f.Z)((0,m.Z)().mark((function e(n,t,r,a){var o;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.Z.deleteMemory(n,t,r);case 3:o=e.sent,a(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var P=t(2898),z=t(5422),U=t(3786),T=t(1286);function I(){return(0,p.jsx)(Z,{icon:(0,p.jsx)(T.Z,{}),label:"Edit"})}var M=t(580),R=t(3433),A=t(9052);function L(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],o=n[1],i=(0,a.useState)(""),l=(0,r.Z)(i,2),s=l[0],c=l[1],u=(0,a.useState)(null),d=(0,r.Z)(u,2),h=d[0],m=d[1],f=function(e){return t.includes(e)},x=function(e){var n=null;return f(e)&&(n="".concat(e," has already been added.")),function(e){return/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(e)}(e)||(n="".concat(e," is not a valid email address.")),e===A.Z.getUserInfo().email&&(n="Cannot share memory with owner email."),!n||(m(n),!1)};return[t,s,h,o,function(e){if(["Enter","Tab",","].includes(e.key)){e.preventDefault();var n=s.trim();n&&x(n)&&(o([].concat((0,R.Z)(t),[s])),c(""))}},function(e){c(e.target.value),m(null)},function(e){o((function(n){return n.filter((function(n){return n!==e}))}))},function(e){e.preventDefault();var n=e.clipboardData.getData("text").match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);if(n){var r=n.filter((function(e){return!f(e)}));o([].concat((0,R.Z)(t),(0,R.Z)(r)))}}]}var O=t(9218),B=t(1918),F=t(1889);function W(e){var n=e.items,t=e.value,r=e.error,a=e.handleKeyDown,o=e.handleChange,i=e.handleDelete,l=e.handlePaste;return(0,p.jsxs)(b.Z,{direction:"column",spacing:2,sx:{mb:3},children:[(0,p.jsx)(O.Z,{id:"outlined-error",value:t,label:"Email List",placeholder:"Type or paste email addresses and press `Enter`...",onKeyDown:a,onChange:o,onPaste:l,helperText:r||"Type or paste email addresses and press `Enter`...",error:!!r,sx:{my:1}}),(0,p.jsx)(F.ZP,{container:!0,spacing:2,children:n.map((function(e){return(0,p.jsx)(B.Z,{label:e,variant:"outlined",onDelete:function(){return i(e)},sx:{margin:.5},size:"small"},e)}))})]})}function H(e){var n=e.items,t=e.value,r=e.error,a=e.handleKeyDown,o=e.handleChange,i=e.handleDelete,l=e.handlePaste,c=e.handleClear,u=e.handleSubmit;return(0,p.jsxs)(s.Z,{sx:{p:2},children:[(0,p.jsx)(W,{items:n,value:t,error:r,handleKeyDown:a,handleChange:o,handleDelete:i,handlePaste:l}),(0,p.jsxs)(b.Z,{spacing:2,direction:"row",children:[(0,p.jsx)(j.Z,{variant:"outlined",onClick:c,children:"Clear"}),(0,p.jsx)(j.Z,{variant:"contained",onClick:u,disabled:0===n.length,children:"Share"})]})]})}var N=t(9836),Y=t(3382),K=t(9281),q=t(4515),X=t(5527),V=t(6125),_=t(5855),G=t(3994),J=t(6890);function Q(e){var n=e.invitation,t=e.accept,r={pending:"warning",sent:"success",failed:"error",rejected:"error",accepted:"success"};return(0,p.jsxs)(N.Z,{size:"small","aria-label":"statuses",children:[(0,p.jsx)(J.Z,{children:(0,p.jsxs)(_.Z,{children:[(0,p.jsx)(G.Z,{align:"left",children:"Invitation"}),(0,p.jsx)(G.Z,{align:"left",children:"Accepted"})]})}),(0,p.jsx)(Y.Z,{children:(0,p.jsxs)(_.Z,{children:[(0,p.jsx)(G.Z,{align:"left",children:(0,p.jsx)(B.Z,{color:r[n],size:"small",label:n})}),(0,p.jsx)(G.Z,{align:"left",children:(0,p.jsx)(B.Z,{color:r[t],size:"small",label:t})})]},new Date)})]})}var $=t(4454);function ee(e){var n=e.selected,t=e.handleChange,o=(0,a.useState)(n),i=(0,r.Z)(o,2),l=i[0],s=i[1];return(0,a.useEffect)((function(){s(n)}),[n]),console.log("check box cell",n,l,t),(0,p.jsx)(G.Z,{padding:"checkbox",children:(0,p.jsx)($.Z,{color:"primary",checked:l,onChange:t})},"checkbox")}var ne=t(3044);function te(e){var n=e.email,t=e.picture,r=e.name;return(0,p.jsx)(G.Z,{component:"th",scope:"row",sx:{p:1},children:(0,p.jsx)(B.Z,{avatar:(0,p.jsx)(ne.Z,{alt:n,src:t,sx:{referrerPolicy:"no-referrer"}}),label:r,sx:{b:1,maxWidth:170},color:"primary",variant:"outlined"})},"personal-details")}var re=t(1283),ae=t(2885);function oe(e){var n=e.open,t=e.handleClick;return(0,p.jsx)(G.Z,{align:"center",style:{paddingBottom:0,paddingTop:0},colSpan:6,onClick:t,children:(0,p.jsx)(x.Z,{"aria-label":"expand row",size:"small",children:n?(0,p.jsx)(ae.Z,{}):(0,p.jsx)(re.Z,{})})},"expand-status")}function ie(e){var n=e.name,t=e.email,o=e.picture,i=e.invitation,l=e.accept,c=e.isSelected,u=e.onCheckBoxClick,d=(0,a.useState)(!1),h=(0,r.Z)(d,2),m=h[0],f=h[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(_.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,p.jsx)(ee,{selected:c,handleChange:u}),(0,p.jsx)(te,{email:t,picture:o,name:n}),(0,p.jsx)(oe,{open:m,handleClick:function(){return f(!m)}})]},"".concat({email:t},"details")),(0,p.jsx)(_.Z,{children:(0,p.jsx)(G.Z,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:(0,p.jsx)(V.Z,{in:m,timeout:"auto",unmountOnExit:!0,children:(0,p.jsxs)(s.Z,{sx:{margin:1},children:[(0,p.jsx)(v.Z,{variant:"h6",gutterBottom:!0,component:"div",children:"Status"}),(0,p.jsx)(Q,{invitation:i,accept:l})]})})})},"".concat({email:t},"status"))]})}function le(e){var n=e.numSelected,t=e.rowCount,r=e.onSelectAllClick;return(0,p.jsx)(G.Z,{padding:"checkbox",children:(0,p.jsx)($.Z,{color:"primary",indeterminate:n>0&&n<t,checked:t>0&&n===t,onChange:r})},"selectAll")}function se(e){var n=e.numSelected,t=e.rowCount,r=e.onSelectAllClick,a=e.handleUnshareClick;return(0,p.jsx)(J.Z,{children:(0,p.jsxs)(_.Z,{children:[(0,p.jsx)(le,{numSelected:n,rowCount:t,onSelectAllClick:r},"selectAll"),(0,p.jsx)(G.Z,{align:"center",sx:{fontWeight:"bold",fontSize:"1em"},children:0===n?"Shared With":"".concat(n," selected")},"message"),(0,p.jsx)(G.Z,{align:"center",sx:{fontWeight:"bold"},children:(0,p.jsx)(j.Z,{variant:"contained",color:"error",sx:{textTransform:"none"},disabled:0===n,onClick:a,children:"Unshare"})},"action")]})})}function ce(e){var n=e.shareData,t=e.onUnShare,o=(0,a.useState)(0),i=(0,r.Z)(o,2),l=i[0],s=i[1],c=(0,a.useState)(0),u=(0,r.Z)(c,2),d=u[0],h=u[1],m=(0,a.useState)(Array(n.length).fill(0)),f=(0,r.Z)(m,2),x=f[0],Z=f[1];console.log("share data",n,x),(0,a.useEffect)((function(){Z(Array(n.length).fill(0)),h(0)}),[n]);return n.length>0?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(K.Z,{component:X.Z,children:(0,p.jsxs)(N.Z,{stickyHeader:!0,"aria-label":"memory share table",children:[(0,p.jsx)(se,{numSelected:d,rowCount:n.length,onSelectAllClick:function(){x.length>0&&d<x.length?(Z(Array(n.length).fill(1)),h(x.length)):(Z(Array(n.length).fill(0)),h(0))},handleUnshareClick:function(){for(var e=[],r=0;r<x.length;r+=1)1===x[r]&&e.push(n[r].email);console.log("Unshare emails",e),t(e)}}),(0,p.jsx)(Y.Z,{children:n.slice(5*l,5*l+5).map((function(e,n){return(0,p.jsx)(ie,{email:e.email,name:e.name,picture:e.picture,invitation:e.status.invitation,accept:e.status.accept,isSelected:1===x[5*l+n],onCheckBoxClick:function(){return e=5*l+n,console.log("handle click index",e),1===x[e]?h((function(e){return e-1})):h((function(e){return e+1})),void Z([].concat((0,R.Z)(x.slice(0,e)),[1-x[e]],(0,R.Z)(x.slice(e+1))));var e}},e.email)}))})]})}),(0,p.jsx)(q.Z,{rowsPerPageOptions:[5],component:"div",count:x.length,rowsPerPage:5,page:l,onPageChange:function(e,n){console.log(l,n),s(n)}})]}):null}var ue=t(9823);function de(e){var n=e.handleClose;return(0,p.jsx)(x.Z,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,p.jsx)(ue.Z,{})})}function he(){return(0,p.jsx)(Z,{icon:(0,p.jsx)(M.Z,{}),label:"Share"})}function me(e){var n=e.confirm,t=e.memoryShareCallback,o=e.memoryUnShareCallback,i=e.closeCallback,l=e.memoryID,s=L(),u=(0,r.Z)(s,8),d=u[0],h=u[1],x=u[2],Z=u[3],j=u[4],b=u[5],k=u[6],C=u[7],w=(0,a.useState)(null),D=(0,r.Z)(w,2),E=D[0],P=D[1];(0,a.useEffect)((0,f.Z)((0,m.Z)().mark((function e(){var n;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.Z.getShareData(l);case 3:n=e.sent,P(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]);var z=(0,a.useState)(n),U=(0,r.Z)(z,2),T=U[0],I=U[1];(0,a.useEffect)((function(){return I(n)}),[n]);var M=function(){var e=(0,f.Z)((0,m.Z)().mark((function e(){var n,r;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("share memory",l,d),e.next=4,S.Z.shareMemory(l,d);case 4:return n=e.sent,console.log(n),t(n),e.next=9,n.json();case 9:r=e.sent,Z([]),P(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=(0,f.Z)((0,m.Z)().mark((function e(n){var t,r;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("share memory",l,n),e.next=4,S.Z.revokeShare(l,n);case 4:return t=e.sent,console.log(t),o(t),e.next=9,t.json();case 9:r=e.sent,P(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),A=null!==E?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v.Z,{sx:{m:2,fontSize:"1.2rem"},children:"Existing Shares"}),(0,p.jsx)(ce,{shareData:E,onUnShare:R})]}):null;return console.log(E),(0,p.jsxs)(g.Z,{open:T,sx:{"& .MuiPaper-root":{m:0},backgroundColor:"faded.black"},children:[(0,p.jsxs)(y.Z,{children:["Share Memory",(0,p.jsx)(de,{handleClose:function(){I(!1),i()}})]}),(0,p.jsx)(c.Z,{}),(0,p.jsxs)(v.Z,{sx:{m:2},children:["New Shares (",d.length," ","added)"]}),(0,p.jsx)(H,{items:d,value:h,error:x,handleKeyDown:j,handleChange:b,handleDelete:k,handlePaste:C,handleClear:function(){return Z([])},handleSubmit:M}),(0,p.jsx)(c.Z,{}),A]})}function fe(e){var n,t=e.snackBar,o=e.handleDelete,i=e.memoryShareCallback,l=e.memoryUnShareCallback,s=e.handleEditClick,c=e.memoryID,u=(0,a.useState)(null),d=(0,r.Z)(u,2),h=d[0],m=d[1],f=(0,a.useState)(null),x=(0,r.Z)(f,2),Z=x[0],g=x[1],j=Boolean(h),v=function(){return m(null)};"delete"===Z&&(n=(0,p.jsx)(D,{open:!0,callback:o,closeCallback:function(){return g(null)}})),"share"===Z&&(n=(0,p.jsx)(me,{confirm:!0,memoryShareCallback:i,memoryUnShareCallback:l,closeCallback:function(){return g(null)},memoryID:c}));return(0,p.jsxs)("div",{children:[(0,p.jsx)(P.Z,{onClick:function(e){return m(e.currentTarget)}}),(0,p.jsxs)(z.Z,{id:"memory-actions",anchorEl:h,open:j,onClose:v,MenuListProps:{"aria-labelledby":"basic-button"},sx:{borderRadius:"10px"},children:[(0,p.jsx)(U.Z,{onClick:function(){s(),v()},children:(0,p.jsx)(I,{})}),(0,p.jsx)(U.Z,{onClick:function(){g("share"),v()},children:(0,p.jsx)(he,{})}),(0,p.jsx)(U.Z,{onClick:function(){g("delete"),v()},children:(0,p.jsx)(w,{})})]}),n,t]})}function xe(e){var n,t=e.header,m=e.subheader,f=e.photoLayout,x=e.storyLayout,Z=e.bucket,g=e.memoryID,j=e.authURL,v=e.handleEditClick,b=e.memType,y=(0,a.useState)(null),k=(0,r.Z)(y,2),C=k[0],S=k[1],w=(0,a.useState)(null),D=(0,r.Z)(w,2),P=D[0],z=D[1],U=(0,a.useState)(null),T=(0,r.Z)(U,2),I=T[0],M=T[1],R=(0,a.useState)(null),A=(0,r.Z)(R,2),L=A[0],O=A[1],B=(0,u.Z)();n=(0,d.Z)(B.breakpoints.down("lg"))?"":"vertical-scroll";var F=function(e,n){z(e),M(n)},W=function(e){"ok"===e.status?F("Memory deleted successfully",!1):F("Error while deleting memory",!0),S(!0),O(!0)},H=(0,p.jsx)(h.Z,{snackBarOpen:C,message:P,onClose:function(){S(!1),z(null),M(null)},error:I}),N="own"===b?(0,p.jsx)(fe,{snackBar:H,handleDelete:function(){!function(e,n,t,r){E.apply(this,arguments)}(Z,j,g,W)},memoryID:g,memoryShareCallback:function(e){console.log(e),!0===e.ok?F("Memory shared successfully",!1):F("Error while sharing memory",!0),S(!0)},memoryUnShareCallback:function(e){console.log(e),!0===e.ok?F("Memory unshared successfully",!1):F("Error while unsharing memory",!0),S(!0)},handleEditClick:v}):null;return!1===C&&!0===L?(0,p.jsx)(o.Fg,{to:"/memories",replace:!0}):(0,p.jsxs)(i.Z,{sx:{boxShadow:0,bgcolor:"button.main",p:1},children:[(0,p.jsx)(l.Z,{title:t,subheader:m,action:N}),(0,p.jsx)(c.Z,{}),(0,p.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"flex-start",flexDirection:{lg:"row",xs:"column"},height:{lg:"72vh"},my:1},children:[(0,p.jsx)(s.Z,{sx:{width:{lg:"70%",xs:"100%"},overflowY:"scroll",borderRadius:5},className:n,children:f}),(0,p.jsx)(s.Z,{sx:{width:{lg:"30%",sx:"100%"},overflowY:"scroll",mt:{lg:0,xs:2},p:{lg:1},px:1},className:n,children:x})]})]})}},8003:function(e,n,t){t.d(n,{Z:function(){return he}});var r=t(7762),a=t(4165),o=t(5861),i=t(9439),l=t(2791),s=t(7689),c=t(6151),u=t(533),d=t(1428),h=t(7394),m=t(890),f=t(3767),x=t(5574),p=t(7621),Z=t(9585),g=t(9504),j=t(4721),v=t(4554),b=t(4700),y=t(1133),k=t(5397),C=t(3400),S=t(487),w=t(1065),D=t(8894),E=t(184),P=(0,D.yP)((0,D.bH)((0,D.p6)(w.ZP)));function z(e){var n=e.ind,t=e.images,r=e.handleNext,a=e.handleStepChange,o=(0,l.useState)(n),s=(0,i.Z)(o,2),c=s[0],u=s[1],d=(0,l.useState)(0),h=(0,i.Z)(d,2),m=h[0],f=h[1],x=(0,l.useState)(null),p=(0,i.Z)(x,2),Z=p[0],g=p[1];(0,l.useEffect)((function(){u(n)}),[n]),(0,l.useEffect)((function(){m<t.length?g("none"):g("flex")}),[m]);var j=function(){return f((function(e){return e+1}))};return(0,E.jsx)(P,{index:c,onChangeIndex:a,enableMouseEvents:!0,animateTransitions:!0,interval:1e4,onClick:r,style:{backgroundColor:"muted.main"},slideRenderer:function(e){var n=e.index,r=e.key,a=function(e,n){var t=e%n;return t<0?t+n:t}(n,t.length),o=(t[a].images?t[a].images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",");return(0,E.jsx)(v.Z,{component:"img",onLoad:j,sx:{display:{display:Z},justifyContents:"center",width:"100%",bgcolor:"#1c1c1c"},src:t[a].src,srcSet:o,style:{display:"block",boxSizing:"content-box",cursor:"pointer",objectFit:"contain",height:"100vh"},alt:t[a].src},r)}})}function U(e){var n=e.handleClick;return(0,E.jsx)(C.Z,{edge:"start",color:"primary","aria-label":"close",onClick:n,sx:{position:"absolute",top:"50%",right:0,transform:"translate(0%, -50%)"},children:(0,E.jsx)(k.Z,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function T(e){var n=e.handleClick;return(0,E.jsx)(C.Z,{edge:"start",color:"primary","aria-label":"close",onClick:n,sx:{position:"absolute",top:"50%",left:0,transform:"translate(0%, -50%)"},children:(0,E.jsx)(y.Z,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function I(e){var n=e.open,t=e.title,r=e.date,a=e.images,o=e.index,i=e.handleNext,l=e.handleBack,s=e.handleClose,c=e.handleChange;return(0,E.jsxs)(x.Z,{open:n,fullScreen:!0,children:[(0,E.jsx)(z,{images:a,ind:o,handleNext:i,handleStepChange:c}),(0,E.jsx)(Z.Z,{title:t,subheader:r,sx:{position:"absolute",top:10,left:10,bgcolor:"button.main",borderRadius:3,padding:1}}),(0,E.jsx)(T,{handleClick:l}),(0,E.jsx)(U,{handleClick:i}),(0,E.jsx)(S.Z,{size:"large",handleClick:s})]})}z.defaultProps={ind:0},I.defaultProps={index:0};var M=t(6926),R=t(9218),A=t(9906),L=t(5130),O=t(1286),B=t(2168);function F(e){var n=e.editable,t=e.text,r=e.handleTitleUpdate,a=(0,B.Z)(t),o=(0,i.Z)(a,3),s=o[0],c=o[1],u=o[2],d=(0,l.useState)(n),h=(0,i.Z)(d,2),x=h[0],p=h[1],Z=(0,l.useState)(!1),g=(0,i.Z)(Z,2),j=g[0],v=g[1];return(0,l.useEffect)((function(){p(n),c(t),v(!1)}),[n]),x||j?x&&!j?(0,E.jsxs)(f.Z,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[(0,E.jsx)(m.Z,{variant:"h6",children:s}),(0,E.jsx)(O.Z,{fontSize:"medium",onClick:function(){return v(!0)}})]}):x&&j?(0,E.jsxs)(f.Z,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start"},spacing:2,children:[(0,E.jsx)(R.Z,{id:"standard-basic",size:"small",label:"Title",onChange:u,variant:"standard",defaultValue:s,sx:{maxWidth:"200px"}}),(0,E.jsx)(A.Z,{fontSize:"medium",onClick:function(){r(s),v(!1)}}),(0,E.jsx)(L.Z,{fontSize:"medium",onClick:function(){c(t),v(!1)}})]}):void 0:(0,E.jsx)(m.Z,{variant:"h6",children:s})}var W=t(1413),H=t(8239),N=t(6571),Y=t(41),K=t(4125);function q(e){var n=e.editable,t=e.prevDate,r=e.handleDateUpdate,a=(0,l.useState)(n),o=(0,i.Z)(a,2),s=o[0],c=o[1],u=(0,l.useState)(!1),d=(0,i.Z)(u,2),h=d[0],x=d[1],p=(0,K.Z)(t),Z=(0,i.Z)(p,3),g=Z[0],j=Z[1],v=Z[2];return(0,l.useEffect)((function(){c(n),j(t),x(!1)}),[n,t]),s||h?s&&!h?(0,E.jsxs)(f.Z,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[(0,E.jsx)(m.Z,{children:g}),(0,E.jsx)(O.Z,{fontSize:"medium",onClick:function(){return x(!0)}})]}):s&&h?(0,E.jsxs)(f.Z,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start",mt:3},spacing:2,children:[(0,E.jsx)(N._,{dateAdapter:Y.H,children:(0,E.jsx)(H.M,{label:"Memory Date",value:g,onChange:v,placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return(0,E.jsx)(R.Z,(0,W.Z)({readOnly:!0,required:!0},e))}})}),(0,E.jsx)(A.Z,{fontSize:"medium",onClick:function(){r(g),x(!1)}}),(0,E.jsx)(L.Z,{fontSize:"medium",onClick:function(){j(t),x(!1)}})]}):void 0:(0,E.jsx)(m.Z,{children:g})}var X=t(1747),V=t(1619);function _(e){var n=e.editable,t=e.prevStory,r=e.handleStoryUpdate,a=(0,l.useState)(n),o=(0,i.Z)(a,2),s=o[0],c=o[1],u=(0,l.useState)(!1),d=(0,i.Z)(u,2),h=d[0],x=d[1],p=(0,V.Z)(t),Z=(0,i.Z)(p,3),g=Z[0],b=Z[1],y=Z[2],k=(0,l.useRef)();return(0,l.useEffect)((function(){c(n),b(t),x(!1)}),[n,t]),s||h?s&&!h?(0,E.jsxs)(f.Z,{direction:"column",spacing:2,children:[(0,E.jsxs)(f.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,E.jsx)(m.Z,{sx:{color:"muted.main"},children:"Edit Story"}),(0,E.jsx)(O.Z,{fontSize:"medium",onClick:function(){x(!0)}})]}),(0,E.jsx)(j.Z,{sx:{width:1}}),(0,E.jsx)(m.Z,{style:{whiteSpace:"pre-wrap"},children:g})]}):s&&h?(0,E.jsxs)(f.Z,{direction:"column",spacing:2,children:[(0,E.jsxs)(f.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,E.jsx)(m.Z,{sx:{color:"muted.main"},children:"Editing Story"}),(0,E.jsx)(A.Z,{fontSize:"medium",onClick:function(){r(g),x(!1)}}),(0,E.jsx)(L.Z,{fontSize:"medium",onClick:function(){b(t),x(!1)}})]}),(0,E.jsx)(j.Z,{sx:{width:1}}),(0,E.jsx)(v.Z,{sx:{p:2,m:1,my:2,border:1,borderColor:"primary.main",bgcolor:"input.background",minHeight:"70vh",borderRadius:5,width:"90%"},onClick:function(){return k.current.focus()},children:(0,E.jsx)(X.Z,{autoFocus:!0,"aria-label":"minimum height",placeholder:"Tell your story...",value:g,onChange:y,style:{width:"100%",minHeight:"184px",maxHeight:"70vh",boxSizing:"border-box",paddingTop:"5px",border:0,overflow:"auto",outline:"none",resize:"vertical",borderRadius:5,"&:focus":{border:0}},ref:k})})]}):void 0:(0,E.jsx)(m.Z,{style:{whiteSpace:"pre-wrap"},children:g})}var G=t(5987),J=t(5684),Q=t(9055),$=t(5523),ee=t(7247),ne=t(2913),te=t(9823),re=t(2065),ae=["alt","style"],oe=["alt","style"];function ie(e){var n=e.children,t=e.onClick,r=e.name,a=e.updateOp;return(0,E.jsx)(c.Z,{id:r,variant:"contained",component:"label",onClick:t,sx:{color:a===r?"button.main":"muted.main",borderRadius:5,backgroundColor:a===r?"primary.main":"button.main",padding:"6px 8px","&:hover":{color:a===r?"button.main":"muted.main",backgroundColor:a===r?"primary.main":"button.main"}},children:n})}function le(e){var n=e.handleChange,t=e.onClick,r=e.updateOp;return(0,E.jsxs)(ie,{onClick:t,name:"add",updateOp:r,children:[(0,E.jsx)("input",{type:"file",hidden:!0,multiple:!0,accept:"image/*",onChange:n}),(0,E.jsx)(ne.Z,{sx:{fontSize:"1.5rem"}}),"Add"]})}function se(e){var n=e.images,t=e.handlePhotoClick,r=e.renderPhoto,a=(0,l.useState)(null),o=(0,i.Z)(a,2),s=o[0],c=o[1];return(0,l.useEffect)((function(){var e=0,t=0;n.forEach((function(n){n.height>n.width?t+=1:e+=1})),c(e>t?"rows":"columns")}),[n]),r?(0,E.jsx)(J.Z,{layout:s,photos:n,onClick:t,spacing:2,renderPhoto:r}):(0,E.jsx)(J.Z,{layout:s,photos:n,onClick:t,spacing:2})}function ce(e){var n=e.editable,t=e.images,r=e.handlePhotoClick,a=e.handleThumbnailUpdate,o=e.deleteImage,s=e.addImage,u=(0,l.useState)(n),d=(0,i.Z)(u,2),h=d[0],x=d[1],p=(0,l.useState)(null),Z=(0,i.Z)(p,2),g=Z[0],j=Z[1],v=(0,l.useState)(null),b=(0,i.Z)(v,2),y=b[0],k=b[1],S=function(e){j(g===e?null:e)};(0,l.useEffect)((function(){x(n),j(null)}),[n]);var w=(0,E.jsxs)(f.Z,{direction:"row",spacing:2,children:[(0,E.jsx)(le,{handleChange:s,onClick:function(){return S("add")},updateOp:g}),(0,E.jsxs)(ie,{onClick:function(){return S("delete")},name:"delete",updateOp:g,children:[(0,E.jsx)(ee.Z,{sx:{fontSize:"1.5rem"}}),"Delete"]}),(0,E.jsx)(ie,{onClick:function(){return S("thumbnail")},name:"thumbnail",updateOp:g,children:"Set Thumbnail"})]}),D=(0,E.jsx)(f.Z,{direction:"row",children:(0,E.jsxs)(m.Z,{variant:"h6",color:"muted.main",children:["Images:",t.length]})});return h?h&&"delete"===g?(0,E.jsxs)(f.Z,{direction:"column",spacing:2,sx:{p:2},children:[D,w,(0,E.jsx)(se,{images:t,handlePhotoClick:r,renderPhoto:function(e){var n=e.layout,r=e.imageProps,a=r.alt,i=r.style,l=(0,G.Z)(r,ae);return(0,E.jsxs)(c.Z,{component:"div",children:[(0,E.jsx)("img",(0,W.Z)({alt:a,style:(0,W.Z)((0,W.Z)({},i),{},{width:n.width,padding:0})},l)),(0,E.jsx)(C.Z,{size:"medium",sx:{color:"black",bgcolor:(0,re.Fq)("#fff",.4),position:"absolute",top:10,right:12},onClick:function(){return function(e){var n=t.find((function(n){return n.alt===e}));o(n)}(a)},children:(0,E.jsx)(te.Z,{size:"medium"})})]})}})]}):h&&"thumbnail"===g?(0,E.jsxs)(f.Z,{direction:"column",spacing:2,sx:{p:2},children:[D,w,(0,E.jsx)(se,{images:t,handlePhotoClick:r,renderPhoto:function(e){var n=e.layout,r=e.imageProps,o=r.alt,i=r.style,l=(0,G.Z)(r,oe);return(0,E.jsxs)(c.Z,{component:"div",children:[(0,E.jsx)("img",(0,W.Z)({alt:o,style:(0,W.Z)((0,W.Z)({},i),{},{width:n.width,padding:0})},l)),(0,E.jsx)($.Z,{control:(0,E.jsx)(Q.Z,{}),label:"",checked:o===y,onChange:function(){return function(e){k(e);var n=t.find((function(n){return n.alt===e}));a(n)}(o)},sx:{pr:1,position:"absolute",bgcolor:(0,re.Fq)("#fff",.6),color:"black",borderRadius:"0px 5px 5px 0px",borderColor:"secondary.main",borderLeft:0,bottom:20,left:15}})]})}})]}):h&&"add"===g||h&&!g?(0,E.jsxs)(f.Z,{direction:"column",spacing:2,sx:{p:2},children:[D,w,(0,E.jsx)(se,{images:t,handlePhotoClick:r})]}):void 0:(0,E.jsx)(se,{images:t,handlePhotoClick:r})}se.defaultProps={renderPhoto:null},ie.defaultProps={onClick:function(){}};var ue=t(5899);function de(e){var n=e.memType,t="/#/memories/".concat(n);return"preview"!==n?(0,E.jsx)(f.Z,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:(0,E.jsx)(u.Z,{href:t,underline:"none",children:(0,E.jsxs)(c.Z,{variant:"contained",component:"label",sx:{color:"primary.main",backgroundColor:"button.main",padding:"6px 8px",boxShadow:0,"&:hover":{backgroundColor:"button.main"}},children:[(0,E.jsx)(h.Z,{size:"medium",sx:{paddingRight:1}}),(0,E.jsx)(m.Z,{variant:"body1",color:"muted.main",children:"Memories"})]})})}):null}function he(e){var n=e.memType,t=e.memTitle,u=e.memDate,h=e.memStory,y=e.memImages,k=e.bucket,C=e.memoryID,S=e.authURL,w=(0,l.useState)(!1),D=(0,i.Z)(w,2),P=D[0],z=D[1],U=(0,l.useState)(!1),T=(0,i.Z)(U,2),R=T[0],A=T[1],L=(0,l.useState)(0),O=(0,i.Z)(L,2),B=O[0],W=O[1],H=(0,l.useState)(t),N=(0,i.Z)(H,2),Y=N[0],K=N[1],X=(0,l.useState)(u),V=(0,i.Z)(X,2),G=V[0],J=V[1],Q=(0,l.useState)(h),$=(0,i.Z)(Q,2),ee=$[0],ne=$[1],te=(0,l.useState)(y),re=(0,i.Z)(te,2),ae=re[0],oe=re[1],ie=(0,l.useState)(null),le=(0,i.Z)(ie,2),se=le[0],he=le[1],me=(0,l.useState)(null),fe=(0,i.Z)(me,2),xe=fe[0],pe=fe[1],Ze=(0,l.useState)([]),ge=(0,i.Z)(Ze,2),je=ge[0],ve=ge[1],be=(0,l.useState)(null),ye=(0,i.Z)(be,2),ke=ye[0],Ce=ye[1],Se=(0,l.useState)([]),we=(0,i.Z)(Se,2),De=we[0],Ee=we[1],Pe=(0,l.useState)(!1),ze=(0,i.Z)(Pe,2),Ue=ze[0],Te=ze[1],Ie=(0,l.useState)(null),Me=(0,i.Z)(Ie,2),Re=Me[0],Ae=Me[1],Le=(0,l.useState)(null),Oe=(0,i.Z)(Le,2),Be=Oe[0],Fe=Oe[1],We=(0,l.useState)(null),He=(0,i.Z)(We,2),Ne=He[0],Ye=He[1],Ke=(0,l.useState)(!1),qe=(0,i.Z)(Ke,2),Xe=qe[0],Ve=qe[1],_e=ae.length;(0,l.useEffect)((function(){return K(t)}),[t]),(0,l.useEffect)((function(){return J(u)}),[u]),(0,l.useEffect)((function(){return ne(h)}),[h]),(0,l.useEffect)((function(){return oe(y)}),[y]);var Ge=function(e,n){pe(e),Ye(n)},Je=function(e,n,t){401===e.status?Ge("You have been logged out. Please login to continue.",!0):403===e.status?Ge("You do not have permissions to do this operation.",!0):Ge("Unknown error occured while ".concat(n),!0),t(e.status)},Qe=function(e){he(!0),Ve(e)},$e=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n,t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.Z.updateMemoryDetails(k,S,C,n,t);case 3:return(r=e.sent).ok?Ge("Memory ".concat(n," updated successfully"),!1):Je(r,"updating ".concat(n),Qe),he(!0),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}(),en=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.Z.updateMemoryImage(k,S,C,"thumbnail",n);case 3:return(t=e.sent).ok?(Ge("Thumbnail updated successfully",!1),he(!0)):Je(t,"updating thumbnail",Qe),e.abrupt("return",t);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),nn=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(ae.length>1)){e.next=8;break}return e.next=4,ue.Z.updateMemoryImage(k,S,C,"delete",n);case 4:(t=e.sent).ok?(Ge("Memory image deleted successfully",!1),oe(ae.filter((function(e){return e.title!==n.title})))):Je(t,"deleting image",Qe),e.next=9;break;case 8:Ge("Atleast 1 image is needed for memory. Unable to delete",!0);case 9:return he(!0),e.abrupt("return",t);case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),tn=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.Z.updateMemoryImage(k,S,C,"add",n);case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),rn=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var n,t,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(0,r.Z)(je.entries()),e.prev=1,o=(0,a.Z)().mark((function e(){var n,r,o,l,s,c,u,d,h,m;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,i.Z)(t.value,2),r=n[0],o=n[1],l=(0,i.Z)(o,3),s=l[0],c=l[1],u=l[2],e.next=4,tn(s).then((function(e){return e.ok?e.text():(Je(e,"adding image",Qe),"")}));case 4:return d=e.sent,h={key:"memories/".concat(C,"/images/").concat(s.name),src:u,alt:s.name,title:s.name,width:s.width,height:s.height,images:[]},e.next=8,fetch(d,{body:c,method:"PUT"});case 8:(m=e.sent).ok?(Ae("Images uploaded: ".concat(r+1," / ").concat(ke," ")),oe((function(e){return e.concat([h])}))):(Fe("Error while uploading memory image"),Ee((function(e){return e.concat([s.name])})),Je(m,"deleting image",Qe));case 10:case"end":return e.stop()}}),e)})),n.s();case 4:if((t=n.n()).done){e.next=8;break}return e.delegateYield(o(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),n.e(e.t1);case 13:return e.prev=13,n.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(je.length>0&&(Te(!0),Ae("Preparing images for upload....")),je.length!==ke){e.next=9;break}return e.next=4,rn();case 4:De.length>0?Fe("Error while uploading ".concat(De.length," images")):Fe("".concat(je.length," image(s) uploaded successfully")),Ee([]),Ce(null),ve([]),setTimeout((function(){Te(!1),Fe(null),Ae(null)}),3e3);case 9:case"end":return e.stop()}}),e)}))),[je]);var an=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.target.files&&(t=Array.from(n.target.files),Ce(t.length),ae.length+t.length<=15?(t.forEach((function(e){var n=new Image;n.onload=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(t){var r,o,i,l,s,c,u,d;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.target.naturalHeight,o=t.target.naturalWidth,i=e.size/1048576,l=e.name,s=[500,1e3,1500].map((function(e){return{height:e,width:Math.ceil(e*o/r)}})),c=Date.now(),u="".concat(c,"-").concat(l),d=[{name:u,size:i,height:r,width:o,images:s},e,t.target.src],ve((function(e){return e.concat([d])}));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),n.src=URL.createObjectURL(e)})),t.map((function(e){return URL.revokeObjectURL(e)}))):(Ge("Unable to add ".concat(t.length," images. Maximum images allowed per memory is 15"),!0),he(!0)));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),on=(0,E.jsx)(F,{editable:R,text:Y,handleTitleUpdate:function(e){$e("title",e)&&K(e)}}),ln=(0,E.jsx)(q,{editable:R,prevDate:G,handleDateUpdate:function(e){$e("date",e)&&J(e)}}),sn=(0,E.jsx)(_,{editable:R,prevStory:ee,handleStoryUpdate:function(e){$e("story",e)&&ne(e)}}),cn=(0,E.jsx)(ce,{editable:R,images:ae,handlePhotoClick:function(e,n,t){z(!0),W(t)},handleThumbnailUpdate:en,deleteImage:nn,addImage:an}),un=(0,E.jsxs)(c.Z,{variant:"contained",component:"label",onClick:function(){return A(!1)},sx:{color:"primary.main",borderRadius:5,backgroundColor:"button.main",padding:"6px 8px"},children:[(0,E.jsx)(d.Z,{size:"medium",sx:{paddingRight:1}}),(0,E.jsx)(m.Z,{variant:"body1",color:"muted.main",children:"Edit"})]});return 401===Xe&&!1===se?(0,E.jsx)(s.Fg,{to:"/login"}):(0,E.jsxs)(E.Fragment,{children:[R?(0,E.jsx)(f.Z,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:un}):(0,E.jsx)(de,{memType:n}),(0,E.jsx)(v.Z,{component:"div",sx:{backgroundColor:"button.main",margin:R?"5px":0},children:(0,E.jsx)(M.Z,{header:on,subheader:ln,photoLayout:cn,storyLayout:sn,memoryID:C,bucket:k,authURL:S,handleEditClick:function(){return A(!0)},memType:n})}),(0,E.jsx)(I,{open:P,title:Y,date:G,images:ae,index:B,handleNext:function(){W((function(e){return(e+1)%_e}))},handleBack:function(){W((function(e){return(e-1+_e)%_e}))},handleClose:function(){return z(!1)},handleChange:function(e){return W(e)}}),(0,E.jsx)(b.Z,{snackBarOpen:se,message:xe,onClose:function(){he(!1),pe(null),Ye(null)},error:Ne}),(0,E.jsx)(x.Z,{open:Ue,fullWidth:!0,sx:{p:1},children:(0,E.jsxs)(p.Z,{sx:{maxWidth:1,p:1},children:[(0,E.jsx)(Z.Z,{title:"Adding Images",sx:{textAlign:"center"}}),(0,E.jsx)(j.Z,{}),(0,E.jsxs)(g.Z,{children:[(0,E.jsx)(m.Z,{variant:"h6",sx:{color:"muted.main"},children:Re}),(0,E.jsx)(f.Z,{justifyContent:"center",sx:{py:2},children:(0,E.jsx)(m.Z,{variant:"h5",children:Be})})]})]})})]})}he.defaultProps={memTitle:"Memory Title",memDate:"Memory Date",memStory:"Memory Text"}}}]);
//# sourceMappingURL=3.5b8a1633.chunk.js.map