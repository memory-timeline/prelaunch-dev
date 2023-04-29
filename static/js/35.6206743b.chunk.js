"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[35],{68664:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(86360),a=t(13400),i=t(96874),o=t(12065),s=t(80184);function l(e){var n=e.handleClick,t=e.caption;return(0,s.jsxs)(a.Z,{size:"small",label:"T",sx:{color:(0,o.Fq)("#000",.7),bgcolor:(0,o.Fq)("#fff",.7),position:"absolute",top:5,left:2,borderRadius:"0 5px 5px 0",py:0},onClick:n,children:[(0,s.jsx)(r.Z,{}),t.length>0?(0,s.jsx)(i.Z,{color:"error",variant:"dot",sx:{pl:1}}):null]})}l.defaultProps={caption:""}},44768:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(32913),a=t(36151),i=t(80184);function o(e){var n=e.children,t=e.onClick,r=e.name;return(0,i.jsx)(a.Z,{id:r,variant:"contained",component:"label",onClick:t,sx:{color:"muted.main",borderRadius:15,backgroundColor:"button.main",padding:"6px 8px","&:hover":{color:"muted.main",backgroundColor:"button.main"}},children:n})}function s(e){var n=e.handleChange;return(0,i.jsxs)(o,{name:"add",children:[(0,i.jsx)("input",{type:"file",hidden:!0,multiple:!0,accept:"image/*",onChange:n}),(0,i.jsx)(r.Z,{sx:{fontSize:"2rem"}}),"Add Images"]})}o.defaultProps={onClick:function(){}}},3191:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(74165),a=t(15861),i=t(29439),o=t(72791),s=t(13400),l=t(29823),c=t(36151),u=t(5574),d=t(65661),h=t(27391),f=t(39157),x=t(97123),m=t(64554),p=t(12065),Z=t(62797),g=t(9052),v=t(80184);function j(e){var n=e.index,t=e.imageCaption,j=e.src,b=e.open,y=e.handleClose,C=e.handleSubmit;console.log(n);var k=(0,o.useState)(t),S=(0,i.Z)(k,2),w=S[0],D=S[1],E=(0,o.useState)(""),P=(0,i.Z)(E,2),T=P[0],z=P[1];(0,o.useEffect)((function(){return D(t)}),[t]);var I=Z.Ry({caption:Z.Z_().max(40,"Maximum length of image caption is 40")}).required();(0,o.useEffect)((function(){w.length>0&&g.Z.isFieldValid("caption",w,z,I)}),[w]);var U=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Z.isFieldValid("caption",w,z,I);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:e.sent&&(C(n,w),y());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)(u.Z,{open:b,sx:{border:"2px solid white",backgroundColor:(0,p.Fq)("#000",.8)},children:[(0,v.jsxs)(d.Z,{children:[(0,v.jsx)(s.Z,{"aria-label":"close",onClick:y,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,v.jsx)(l.Z,{})}),"Add Image Caption"]}),(0,v.jsxs)(f.Z,{dividers:!0,children:[(0,v.jsx)(m.Z,{component:"img",alt:"test",src:j,width:"100%",sx:{pb:2,borderRadius:3,height:"50vh"}}),(0,v.jsx)(h.Z,{variant:"outlined",label:"Image Caption",defaultValue:w,onChange:function(e){D(e.target.value)},sx:{width:"100%"},helperText:T||"E.g. Birthday Cake Cutting",error:!!T})]}),(0,v.jsxs)(x.Z,{children:[(0,v.jsx)(c.Z,{variant:"outlined",onClick:M,children:"OK"}),(0,v.jsx)(c.Z,{variant:"text",onClick:y,children:"Cancel"})]})]})}},63291:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(29439),a=t(5684),i=t(72791),o=t(9052),s=t(80184);function l(e){var n=e.images,t=e.handlePhotoClick,l=e.renderPhoto,c=(0,i.useState)(null),u=(0,r.Z)(c,2),d=u[0],h=u[1];return(0,i.useEffect)((function(){return o.Z.handleArrangement(n,h)}),[n]),l?(0,s.jsx)(a.Z,{layout:d,photos:n,onClick:t,spacing:1,renderPhoto:l,rowConstraints:o.Z.handleMaxPhotos,columns:o.Z.handleColumns}):(0,s.jsx)(a.Z,{layout:d,photos:n,onClick:t,spacing:1,rowConstraints:o.Z.handleMaxPhotos,columns:o.Z.handleColumns})}l.defaultProps={renderPhoto:null,handlePhotoClick:function(){}}},4166:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(13400),a=t(27247),i=t(20068),o=t(12065),s=t(80184);function l(e){var n=e.index,t=e.handleRemoveImage;return(0,s.jsx)(i.Z,{title:"Delete",children:(0,s.jsx)(r.Z,{size:"medium",sx:{color:(0,o.Fq)("#000",.7),bgcolor:(0,o.Fq)("#fff",.7),position:"absolute",top:5,right:2,padding:0,px:"4px",borderRadius:"5px 0 0 5px"},onClick:function(){return t(n)},children:(0,s.jsx)(a.Z,{size:"medium"})})})}},57900:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(85523),a=t(19055),i=t(12065),o=t(20890),s=t(80184);function l(e){var n=e.index,t=e.thumbnail,l=e.handleThumbnailChange;return(0,s.jsx)(r.Z,{control:(0,s.jsx)(a.Z,{sx:{padding:0}}),label:t===n?(0,s.jsx)(o.Z,{sx:{fontWeight:600,overflow:"hidden",fontSize:"0.8rem"},children:"Thumbnail"}):"",checked:t===n,onChange:function(){return l(n)},sx:{pr:1,position:"absolute",bgcolor:(0,i.Fq)("#fff",.7),color:(0,i.Fq)("#000",.7),borderRadius:"0px 5px 5px 0px",borderColor:"secondary.main",borderLeft:0,bottom:5,left:2,margin:0}})}},94125:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(29439),a=t(72791);function i(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];return[i,o,function(e){var n=new Date(e);if(e){var t=n.toLocaleDateString("en-in",{day:"numeric",month:"long",year:"numeric"});o(t)}else o(null)}]}},91619:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(29439),a=t(72791);function i(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];return[i,o,function(e){return o(e.target.value)}]}},72168:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(29439),a=t(72791);function i(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];(0,a.useEffect)((function(){return o(e)}),[e]);return[i,o,function(e){o(e.target.value)}]}},56926:function(e,n,t){t.d(n,{Z:function(){return me}});var r=t(29439),a=t(72791),i=t(57689),o=t(57621),s=t(9585),l=t(64554),c=t(94721),u=t(13967),d=t(95193),h=t(44700),f=t(74165),x=t(15861),m=t(13400),p=t(80184);function Z(e){var n=e.icon,t=e.label;return(0,p.jsxs)(l.Z,{sx:{alignItems:"center"},children:[(0,p.jsx)(m.Z,{"aria-label":"delete",sx:{bgcolor:"form.input"},children:n}),t]})}var g=t(5574),v=t(36151),j=t(20890),b=t(53767),y=t(65661);function C(e){var n=e.confirm,t=e.handleCallback,i=e.handleCloseCallback,o=e.title,s=e.message,c=(0,a.useState)(n),u=(0,r.Z)(c,2),d=u[0],h=u[1];(0,a.useEffect)((function(){return h(n)}),[n]);var f=function(){h(!1),i()};return(0,p.jsxs)(g.Z,{open:d,sx:{backgroundColor:"faded.black"},children:[(0,p.jsx)(y.Z,{children:o}),(0,p.jsxs)(l.Z,{sx:{p:2},children:[(0,p.jsx)(j.Z,{sx:{pb:2},children:s}),(0,p.jsxs)(b.Z,{spacing:2,direction:"row",children:[(0,p.jsx)(v.Z,{variant:"contained",onClick:f,children:"Cancel"}),(0,p.jsx)(v.Z,{variant:"outlined",onClick:function(){f(),t()},children:"OK"})]})]})]})}var k=t(27247),S=t(85899);function w(){return(0,p.jsx)(Z,{icon:(0,p.jsx)(k.Z,{}),label:"Delete"})}function D(e){var n=e.callback,t=e.open,r=e.closeCallback;return(0,p.jsx)(C,{confirm:t,title:"Delete Memory",handleCallback:n,handleCloseCallback:function(){return r()},message:"Do you want to delete this memory?"})}function E(){return(E=(0,x.Z)((0,f.Z)().mark((function e(n,t,r,a){var i;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.Z.deleteMemory(n,t,r);case 3:i=e.sent,a(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var P=t(52898),T=t(65422),z=t(23786),I=t(41286);function U(){return(0,p.jsx)(Z,{icon:(0,p.jsx)(I.Z,{}),label:"Edit"})}var M=t(90580),R=t(93433),F=t(9052);function A(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],i=n[1],o=(0,a.useState)(""),s=(0,r.Z)(o,2),l=s[0],c=s[1],u=(0,a.useState)(null),d=(0,r.Z)(u,2),h=d[0],f=d[1],x=function(e){return t.includes(e)},m=function(e){var n=null;return x(e)&&(n="".concat(e," has already been added.")),function(e){return/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(e)}(e)||(n="".concat(e," is not a valid email address.")),e===F.Z.getUserInfo().email&&(n="Cannot share memory with owner email."),!n||(f(n),!1)};return[t,l,h,i,function(e){if(["Enter","Tab",","].includes(e.key)){e.preventDefault();var n=l.trim();n&&m(n)&&(i([].concat((0,R.Z)(t),[n])),c(""))}},function(e){c(e.target.value.trim()),f(null)},function(e){i((function(n){return n.filter((function(n){return n!==e}))}))},function(e){e.preventDefault();var n=e.clipboardData.getData("text").match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);if(n){var r=n.filter((function(e){return!x(e.trim())}));i([].concat((0,R.Z)(t),(0,R.Z)(r)))}}]}var L=t(27391),B=t(81918),q=t(61889);function O(e){var n=e.items,t=e.value,r=e.error,a=e.handleKeyDown,i=e.handleChange,o=e.handleDelete,s=e.handlePaste;return(0,p.jsxs)(b.Z,{direction:"column",spacing:2,sx:{mb:3},children:[(0,p.jsx)(L.Z,{id:"outlined-error",value:t,label:"Email List",placeholder:"Type or paste email addresses and press `Enter`...",onKeyDown:a,onChange:i,onPaste:s,helperText:r||"Type or paste email addresses and press `Enter`...",error:!!r,sx:{my:1}}),(0,p.jsx)(q.ZP,{container:!0,spacing:2,children:n.map((function(e){return(0,p.jsx)(B.Z,{label:e,variant:"outlined",onDelete:function(){return o(e)},sx:{margin:.5},size:"small"},e)}))})]})}function W(e){var n=e.items,t=e.value,r=e.error,a=e.handleKeyDown,i=e.handleChange,o=e.handleDelete,s=e.handlePaste,c=e.handleClear,u=e.handleSubmit,d=e.sharing;return(0,p.jsxs)(l.Z,{sx:{p:2},children:[(0,p.jsx)(O,{items:n,value:t,error:r,handleKeyDown:a,handleChange:i,handleDelete:o,handlePaste:s}),!0===d?(0,p.jsx)(j.Z,{color:"primary",variant:"h6",sx:{pb:2},children:"Sharing Memory. Please wait..."}):null,(0,p.jsxs)(b.Z,{spacing:2,direction:"row",children:[(0,p.jsx)(v.Z,{variant:"outlined",onClick:c,children:"Clear"}),(0,p.jsx)(v.Z,{variant:"contained",onClick:u,disabled:0===n.length||!0===d,children:"Share"})]})]})}var H=t(79836),K=t(53382),N=t(39281),Y=t(94515),V=t(35527),X=t(56125),_=t(35855),G=t(53994),J=t(56890);function Q(e){var n=e.invitation,t=e.accept,r={pending:"warning",sent:"success",failed:"error",rejected:"error",accepted:"success"};return(0,p.jsxs)(H.Z,{size:"small","aria-label":"statuses",children:[(0,p.jsx)(J.Z,{children:(0,p.jsxs)(_.Z,{children:[(0,p.jsx)(G.Z,{align:"left",children:"Invitation"}),(0,p.jsx)(G.Z,{align:"left",children:"Accepted"})]})}),(0,p.jsx)(K.Z,{children:(0,p.jsxs)(_.Z,{children:[(0,p.jsx)(G.Z,{align:"left",children:(0,p.jsx)(B.Z,{color:r[n],size:"small",label:n})}),(0,p.jsx)(G.Z,{align:"left",children:(0,p.jsx)(B.Z,{color:r[t],size:"small",label:t})})]},new Date)})]})}var $=t(94454);function ee(e){var n=e.selected,t=e.handleChange,i=(0,a.useState)(n),o=(0,r.Z)(i,2),s=o[0],l=o[1];return(0,a.useEffect)((function(){l(n)}),[n]),(0,p.jsx)(G.Z,{padding:"checkbox",children:(0,p.jsx)($.Z,{color:"primary",checked:s,onChange:t})},"checkbox")}var ne=t(93044);function te(e){var n=e.email,t=e.picture,r=e.name;return(0,p.jsx)(G.Z,{component:"th",scope:"row",sx:{p:1},children:(0,p.jsx)(B.Z,{avatar:(0,p.jsx)(ne.Z,{alt:n,src:t,sx:{referrerPolicy:"no-referrer"}}),label:r,sx:{b:1,maxWidth:170},color:"primary",variant:"outlined"})},"personal-details")}var re=t(1283),ae=t(22885);function ie(e){var n=e.open,t=e.handleClick;return(0,p.jsx)(G.Z,{align:"center",style:{paddingBottom:0,paddingTop:0},colSpan:6,onClick:t,children:(0,p.jsx)(m.Z,{"aria-label":"expand row",size:"small",children:n?(0,p.jsx)(ae.Z,{}):(0,p.jsx)(re.Z,{})})},"expand-status")}function oe(e){var n=e.name,t=e.email,i=e.picture,o=e.invitation,s=e.accept,c=e.isSelected,u=e.onCheckBoxClick,d=(0,a.useState)(!1),h=(0,r.Z)(d,2),f=h[0],x=h[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(_.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,p.jsx)(ee,{selected:c,handleChange:u}),(0,p.jsx)(te,{email:t,picture:i,name:n}),(0,p.jsx)(ie,{open:f,handleClick:function(){return x(!f)}})]},"".concat({email:t},"details")),(0,p.jsx)(_.Z,{children:(0,p.jsx)(G.Z,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:(0,p.jsx)(X.Z,{in:f,timeout:"auto",unmountOnExit:!0,children:(0,p.jsxs)(l.Z,{sx:{margin:1},children:[(0,p.jsxs)(j.Z,{gutterBottom:!0,component:"div",children:["Email:"," ",t]}),(0,p.jsx)(j.Z,{variant:"h6",gutterBottom:!0,component:"div",children:"Status"}),(0,p.jsx)(Q,{invitation:o,accept:s})]})})})},"".concat({email:t},"status"))]})}function se(e){var n=e.numSelected,t=e.rowCount,r=e.onSelectAllClick;return(0,p.jsx)(G.Z,{padding:"checkbox",children:(0,p.jsx)($.Z,{color:"primary",indeterminate:n>0&&n<t,checked:t>0&&n===t,onChange:r})},"selectAll")}function le(e){var n=e.numSelected,t=e.rowCount,r=e.onSelectAllClick,a=e.handleUnshareClick,i=e.unsharing;return(0,p.jsx)(J.Z,{children:(0,p.jsxs)(_.Z,{children:[(0,p.jsx)(se,{numSelected:n,rowCount:t,onSelectAllClick:r},"selectAll"),(0,p.jsx)(G.Z,{align:"center",sx:{fontWeight:"bold",fontSize:"1em"},children:0===n?"Shared With":"".concat(n," selected")},"message"),(0,p.jsx)(G.Z,{align:"center",sx:{fontWeight:"bold"},children:(0,p.jsx)(v.Z,{variant:"contained",color:"error",sx:{textTransform:"none"},disabled:0===n||!0===i,onClick:a,children:"Unshare"})},"action")]})})}function ce(e){var n=e.shareData,t=e.onUnShare,i=e.unsharing,o=(0,a.useState)(0),s=(0,r.Z)(o,2),l=s[0],c=s[1],u=(0,a.useState)(0),d=(0,r.Z)(u,2),h=d[0],f=d[1],x=(0,a.useState)(Array(n.length).fill(0)),m=(0,r.Z)(x,2),Z=m[0],g=m[1];(0,a.useEffect)((function(){g(Array(n.length).fill(0)),f(0)}),[n]);return n.length>0?(0,p.jsxs)(p.Fragment,{children:[!0===i?(0,p.jsx)(j.Z,{color:"primary",variant:"h6",sx:{p:2},children:"UnSharing Memory. Please wait..."}):null,(0,p.jsx)(N.Z,{component:V.Z,children:(0,p.jsxs)(H.Z,{stickyHeader:!0,"aria-label":"memory share table",children:[(0,p.jsx)(le,{numSelected:h,rowCount:n.length,onSelectAllClick:function(){Z.length>0&&h<Z.length?(g(Array(n.length).fill(1)),f(Z.length)):(g(Array(n.length).fill(0)),f(0))},handleUnshareClick:function(){for(var e=[],r=0;r<Z.length;r+=1)1===Z[r]&&e.push(n[r].email);t(e)},unsharing:i}),(0,p.jsx)(K.Z,{children:n.slice(5*l,5*l+5).map((function(e,n){return(0,p.jsx)(oe,{email:e.email,name:e.name,picture:e.picture,invitation:e.status.invitation,accept:e.status.accept,isSelected:1===Z[5*l+n],onCheckBoxClick:function(){return 1===Z[e=5*l+n]?f((function(e){return e-1})):f((function(e){return e+1})),void g([].concat((0,R.Z)(Z.slice(0,e)),[1-Z[e]],(0,R.Z)(Z.slice(e+1))));var e}},e.email)}))})]})}),(0,p.jsx)(Y.Z,{rowsPerPageOptions:[5],component:"div",count:Z.length,rowsPerPage:5,page:l,onPageChange:function(e,n){c(n)}})]}):null}var ue=t(29823);function de(e){var n=e.handleClose;return(0,p.jsx)(m.Z,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,p.jsx)(ue.Z,{})})}function he(){return(0,p.jsx)(Z,{icon:(0,p.jsx)(M.Z,{}),label:"Share"})}function fe(e){var n=e.confirm,t=e.memoryShareCallback,i=e.memoryUnShareCallback,o=e.closeCallback,s=e.memoryID,l=A(),u=(0,r.Z)(l,8),d=u[0],h=u[1],m=u[2],Z=u[3],v=u[4],b=u[5],C=u[6],k=u[7],w=(0,a.useState)(null),D=(0,r.Z)(w,2),E=D[0],P=D[1],T=(0,a.useState)(!1),z=(0,r.Z)(T,2),I=z[0],U=z[1],M=(0,a.useState)(!1),R=(0,r.Z)(M,2),F=R[0],L=R[1];(0,a.useEffect)((0,x.Z)((0,f.Z)().mark((function e(){var n;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.Z.getShareData(s);case 3:n=e.sent,P(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]);var B=(0,a.useState)(n),q=(0,r.Z)(B,2),O=q[0],H=q[1];(0,a.useEffect)((function(){return H(n)}),[n]);var K=function(){var e=(0,x.Z)((0,f.Z)().mark((function e(){var n,r;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,U(!0),e.next=4,S.Z.shareMemory(s,d);case 4:return n=e.sent,t(n),e.next=8,n.json();case 8:r=e.sent,Z([]),P(r),U(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0),U(!1);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=(0,x.Z)((0,f.Z)().mark((function e(n){var t,r;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,L(!0),e.next=4,S.Z.revokeShare(s,n);case 4:return t=e.sent,console.log(t),i(t),e.next=9,t.json();case 9:r=e.sent,P(r),L(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0),L(!1);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),Y=null!==E?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(j.Z,{sx:{m:2,fontSize:"1.2rem"},children:"Existing Shares"}),(0,p.jsx)(ce,{shareData:E,onUnShare:N,unsharing:F})]}):null;return(0,p.jsxs)(g.Z,{open:O,sx:{"& .MuiPaper-root":{m:0},backgroundColor:"faded.black"},children:[(0,p.jsxs)(y.Z,{children:["Share Memory",(0,p.jsx)(de,{handleClose:function(){H(!1),o()}})]}),(0,p.jsx)(c.Z,{}),(0,p.jsxs)(j.Z,{sx:{m:2},children:["New Shares (",d.length," ","added)"]}),(0,p.jsx)(W,{items:d,value:h,error:m,handleKeyDown:v,handleChange:b,handleDelete:C,handlePaste:k,handleClear:function(){return Z([])},handleSubmit:K,sharing:I}),(0,p.jsx)(c.Z,{}),Y]})}function xe(e){var n,t=e.snackBar,i=e.handleDelete,o=e.memoryShareCallback,s=e.memoryUnShareCallback,l=e.handleEditClick,c=e.memoryID,u=(0,a.useState)(null),d=(0,r.Z)(u,2),h=d[0],f=d[1],x=(0,a.useState)(null),m=(0,r.Z)(x,2),Z=m[0],g=m[1],v=Boolean(h),j=function(){return f(null)};"delete"===Z&&(n=(0,p.jsx)(D,{open:!0,callback:i,closeCallback:function(){return g(null)}})),"share"===Z&&(n=(0,p.jsx)(fe,{confirm:!0,memoryShareCallback:o,memoryUnShareCallback:s,closeCallback:function(){return g(null)},memoryID:c}));return(0,p.jsxs)("div",{children:[(0,p.jsx)(P.Z,{onClick:function(e){return f(e.currentTarget)}}),(0,p.jsxs)(T.Z,{id:"memory-actions",anchorEl:h,open:v,onClose:j,MenuListProps:{"aria-labelledby":"basic-button"},sx:{borderRadius:"10px"},children:[(0,p.jsx)(z.Z,{onClick:function(){l(),j()},children:(0,p.jsx)(U,{})}),(0,p.jsx)(z.Z,{onClick:function(){g("share"),j()},children:(0,p.jsx)(he,{})}),(0,p.jsx)(z.Z,{onClick:function(){g("delete"),j()},children:(0,p.jsx)(w,{})})]}),n,t]})}function me(e){var n,t=e.header,f=e.subheader,x=e.photoLayout,m=e.storyLayout,Z=e.bucket,g=e.memoryID,v=e.authURL,j=e.handleEditClick,b=e.memType,y=(0,a.useState)(null),C=(0,r.Z)(y,2),k=C[0],S=C[1],w=(0,a.useState)(null),D=(0,r.Z)(w,2),P=D[0],T=D[1],z=(0,a.useState)(null),I=(0,r.Z)(z,2),U=I[0],M=I[1],R=(0,a.useState)(null),F=(0,r.Z)(R,2),A=F[0],L=F[1],B=(0,u.Z)();n=(0,d.Z)(B.breakpoints.down("lg"))?"":"vertical-scroll";var q=function(e,n){T(e),M(n)},O=function(e){"ok"===e.status?q("Memory deleted successfully",!1):q("Error while deleting memory",!0),S(!0),L(!0)},W=(0,p.jsx)(h.Z,{snackBarOpen:k,message:P,onClose:function(){S(!1),T(null),M(null)},error:U}),H="own"===b?(0,p.jsx)(xe,{snackBar:W,handleDelete:function(){!function(e,n,t,r){E.apply(this,arguments)}(Z,v,g,O)},memoryID:g,memoryShareCallback:function(e){!0===e.ok?q("Memory shared successfully",!1):q("Error while sharing memory",!0),S(!0)},memoryUnShareCallback:function(e){!0===e.ok?q("Memory unshared successfully",!1):q("Error while unsharing memory",!0),S(!0)},handleEditClick:j}):null;return!1===k&&!0===A?(0,p.jsx)(i.Fg,{to:"/memories",replace:!0}):(0,p.jsxs)(o.Z,{sx:{boxShadow:0,bgcolor:"button.main",p:1},children:[(0,p.jsx)(s.Z,{title:t,subheader:f,action:H}),(0,p.jsx)(c.Z,{}),(0,p.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"flex-start",flexDirection:{lg:"row",xs:"column"},height:{lg:"72vh"},my:1},children:[(0,p.jsx)(l.Z,{sx:{width:{lg:"70%",xs:"100%"},overflowY:"scroll",borderRadius:5},className:n,children:x}),(0,p.jsx)(l.Z,{sx:{width:{lg:"30%",sx:"100%"},overflowY:"scroll",mt:{lg:0,xs:2},p:{lg:1},px:1},className:n,children:m})]})]})}},58035:function(e,n,t){t.d(n,{Z:function(){return ue}});var r=t(37762),a=t(1413),i=t(93433),o=t(74165),s=t(15861),l=t(29439),c=t(72791),u=t(57689),d=t(64554),h=t(36151),f=t(57621),x=t(39504),m=t(9585),p=t(5574),Z=t(94721),g=t(1428),v=t(53767),j=t(20890),b=t(44700),y=t(50533),C=t(67394),k=t(80184);function S(e){var n=e.memType,t="/memories/".concat(n);return"preview"!==n?(0,k.jsx)(v.Z,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:(0,k.jsx)(y.Z,{href:t,underline:"none",children:(0,k.jsxs)(h.Z,{variant:"contained",component:"label",sx:{color:"primary.main",backgroundColor:"button.main",padding:"6px 8px",boxShadow:0,"&:hover":{backgroundColor:"button.main"}},children:[(0,k.jsx)(C.Z,{size:"medium",sx:{paddingRight:1}}),(0,k.jsx)(j.Z,{variant:"body1",color:"muted.main",children:"Memories"})]})})}):null}var w=t(41133),D=t(5397),E=t(13400),P=t(29823),T=t(12065);function z(e){var n=e.size,t=e.handleClick;return(0,k.jsx)(E.Z,{size:n,sx:{color:"black",bgcolor:(0,T.Fq)("#fff",.4),position:"absolute",top:10,right:12},onClick:t,children:(0,k.jsx)(P.Z,{size:n})})}z.defaultProps={size:"small"};var I=t(1065),U=t(18894),M=(0,U.yP)((0,U.bH)((0,U.p6)(I.ZP)));function R(e){var n=e.ind,t=e.images,r=e.handleNext,a=e.handleStepChange,i=(0,c.useState)(n),o=(0,l.Z)(i,2),s=o[0],u=o[1],f=(0,c.useState)(0),x=(0,l.Z)(f,2),p=x[0],Z=x[1],g=(0,c.useState)(null),v=(0,l.Z)(g,2),j=v[0],b=v[1];(0,c.useEffect)((function(){u(n)}),[n]),(0,c.useEffect)((function(){p<t.length?b("none"):b("flex")}),[p]);var y=function(){return Z((function(e){return e+1}))};return(0,k.jsx)(M,{index:s,onChangeIndex:a,enableMouseEvents:!0,animateTransitions:!0,interval:1e4,onClick:r,style:{backgroundColor:"muted.main"},slideRenderer:function(e){var n=e.index,r=e.key,a=function(e,n){var t=e%n;return t<0?t+n:t}(n,t.length),i=(t[a].images?t[a].images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(","),o={display:"block",boxSizing:"content-box",cursor:"pointer",objectFit:"contain",height:"100vh"};return(0,k.jsxs)(h.Z,{style:o,sx:{display:"flex",justifyContents:"center",width:"100%",bgcolor:"#1c1c1c",padding:0},children:[t[a].caption?(0,k.jsx)(m.Z,{title:t[a].caption,sx:{position:"absolute",bottom:40,left:"50%",bgcolor:(0,T.Fq)("#1c1c1c",.4),borderRadius:2,padding:1,color:"button.main",transform:"translate(-50%, 0)"},children:t[a].caption}):null,(0,k.jsx)(d.Z,{component:"img",onLoad:y,sx:{display:{display:j},justifyContents:"center",width:"100%",bgcolor:"#1c1c1c"},src:t[a].src,srcSet:i,style:o,alt:t[a].src},r)]},r)}})}function F(e){var n=e.handleClick;return(0,k.jsx)(E.Z,{edge:"start",color:"primary","aria-label":"close",onClick:n,sx:{position:"absolute",top:"50%",right:0,transform:"translate(0%, -50%)"},children:(0,k.jsx)(D.Z,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function A(e){var n=e.handleClick;return(0,k.jsx)(E.Z,{edge:"start",color:"primary","aria-label":"close",onClick:n,sx:{position:"absolute",top:"50%",left:0,transform:"translate(0%, -50%)"},children:(0,k.jsx)(w.Z,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function L(e){var n=e.open,t=e.title,r=e.date,a=e.images,i=e.index,o=e.handleNext,s=e.handleBack,l=e.handleClose,c=e.handleChange;return(0,k.jsxs)(p.Z,{open:n,fullScreen:!0,children:[(0,k.jsx)(R,{images:a,ind:i,handleNext:o,handleStepChange:c}),(0,k.jsx)(m.Z,{title:t,subheader:r,sx:{position:"absolute",top:10,left:10,bgcolor:"button.main",borderRadius:3,padding:1}}),(0,k.jsx)(A,{handleClick:s}),(0,k.jsx)(F,{handleClick:o}),(0,k.jsx)(z,{size:"large",handleClick:l})]})}R.defaultProps={ind:0},L.defaultProps={index:0};var B=t(56926),q=t(27391),O=t(69906),W=t(5130),H=t(41286),K=t(87089),N=t(36571),Y=t(20041),V=t(94125);function X(e){var n=e.editable,t=e.prevDate,r=e.handleDateUpdate,i=(0,c.useState)(n),o=(0,l.Z)(i,2),s=o[0],u=o[1],d=(0,c.useState)(!1),h=(0,l.Z)(d,2),f=h[0],x=h[1],m=(0,V.Z)(t),p=(0,l.Z)(m,3),Z=p[0],g=p[1],b=p[2];return(0,c.useEffect)((function(){u(n),g(t),x(!1)}),[n,t]),s||f?s&&!f?(0,k.jsxs)(v.Z,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[(0,k.jsx)(j.Z,{children:Z}),(0,k.jsx)(H.Z,{fontSize:"medium",onClick:function(){return x(!0)}})]}):s&&f?(0,k.jsxs)(v.Z,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start",mt:3},spacing:2,children:[(0,k.jsx)(N._,{dateAdapter:Y.H,children:(0,k.jsx)(K.M,{label:"Memory Date",value:Z,onChange:b,placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return(0,k.jsx)(q.Z,(0,a.Z)({readOnly:!0,required:!0},e))}})}),(0,k.jsx)(O.Z,{fontSize:"medium",onClick:function(){r(Z),x(!1)}}),(0,k.jsx)(W.Z,{fontSize:"medium",onClick:function(){g(t),x(!1)}})]}):void 0:(0,k.jsx)(j.Z,{children:Z})}var _=t(45987),G=t(57900),J=t(68664),Q=t(4166),$=t(3191),ee=t(63291),ne=t(44768),te=["alt","style","title"];function re(e){var n=e.editable,t=e.images,r=e.handlePhotoClick,i=e.handleThumbnailUpdate,o=e.deleteImage,s=e.addImage,u=e.memThumbnail,d=e.updateCaption,f=(0,c.useState)(n),x=(0,l.Z)(f,2),m=x[0],p=x[1],Z=(0,c.useState)(u),g=(0,l.Z)(Z,2),b=g[0],y=g[1],C=(0,c.useState)(null),S=(0,l.Z)(C,2),w=S[0],D=S[1],E=(0,c.useState)(!1),P=(0,l.Z)(E,2),T=P[0],z=P[1];(0,c.useEffect)((function(){return p(n)}),[n]),(0,c.useEffect)((function(){return y(u)}),[u]);var I=function(e){y(e),i(e)},U=function(e){return o(e)};console.log(b,I,U);var M=(0,k.jsxs)(v.Z,{direction:"row",spacing:2,justifyContent:"space-between",alignItems:"center",children:[(0,k.jsxs)(j.Z,{variant:"h6",color:"muted.main",children:["Images:"," ",t.length]}),(0,k.jsx)(ne.Z,{handleChange:s})]});return m?(0,k.jsxs)(v.Z,{direction:"column",spacing:2,sx:{p:2},children:[M,(0,k.jsx)(ee.Z,{images:t,renderPhoto:function(e){var n=e.layout,r=e.imageProps,i=r.alt,o=r.style,s=(r.title,(0,_.Z)(r,te));return(0,k.jsxs)(h.Z,{component:"div",sx:{padding:"2px"},children:[(0,k.jsx)("img",(0,a.Z)({alt:i,style:(0,a.Z)((0,a.Z)({},o),{},{width:n.width,padding:0})},s)),n.index!==b?(0,k.jsx)(Q.Z,{index:n.index,handleRemoveImage:U}):null,(0,k.jsx)(G.Z,{index:n.index,thumbnail:b,handleThumbnailChange:I}),(0,k.jsx)(J.Z,{handleClick:function(){D(n.index),z(!0)},caption:"caption"in t[n.index]?t[n.index].caption:""})]})}}),null!==w?(0,k.jsx)($.Z,{imageCaption:"caption"in t[w]?t[w].caption:"",index:w,src:t[w].src,open:T,handleClose:function(){z(!1),D(null)},handleSubmit:function(e,n){z(!1),d(e,n)}}):null]}):(0,k.jsx)(ee.Z,{images:t,handlePhotoClick:r})}var ae=t(71747),ie=t(91619);function oe(e){var n=e.editable,t=e.prevStory,r=e.handleStoryUpdate,a=(0,c.useState)(n),i=(0,l.Z)(a,2),o=i[0],s=i[1],u=(0,c.useState)(!1),h=(0,l.Z)(u,2),f=h[0],x=h[1],m=(0,ie.Z)(t),p=(0,l.Z)(m,3),g=p[0],b=p[1],y=p[2],C=(0,c.useRef)();return(0,c.useEffect)((function(){s(n),b(t),x(!1)}),[n,t]),o||f?o&&!f?(0,k.jsxs)(v.Z,{direction:"column",spacing:2,children:[(0,k.jsxs)(v.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,k.jsx)(j.Z,{sx:{color:"muted.main"},children:"Edit Story"}),(0,k.jsx)(H.Z,{fontSize:"medium",onClick:function(){x(!0)}})]}),(0,k.jsx)(Z.Z,{sx:{width:1}}),(0,k.jsx)(j.Z,{style:{whiteSpace:"pre-wrap"},children:g})]}):o&&f?(0,k.jsxs)(v.Z,{direction:"column",spacing:2,children:[(0,k.jsxs)(v.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,k.jsx)(j.Z,{sx:{color:"muted.main"},children:"Editing Story"}),(0,k.jsx)(O.Z,{fontSize:"medium",onClick:function(){r(g),x(!1)}}),(0,k.jsx)(W.Z,{fontSize:"medium",onClick:function(){b(t),x(!1)}})]}),(0,k.jsx)(Z.Z,{sx:{width:1}}),(0,k.jsx)(d.Z,{sx:{p:2,m:1,my:2,border:1,borderColor:"primary.main",bgcolor:"input.background",minHeight:"70vh",borderRadius:5,width:"90%"},onClick:function(){return C.current.focus()},children:(0,k.jsx)(ae.Z,{autoFocus:!0,"aria-label":"minimum height",placeholder:"Tell your story...",value:g,onChange:y,style:{width:"100%",minHeight:"184px",maxHeight:"70vh",boxSizing:"border-box",paddingTop:"5px",border:0,overflow:"auto",outline:"none",resize:"vertical",borderRadius:5,"&:focus":{border:0}},ref:C})})]}):void 0:(0,k.jsx)(j.Z,{style:{whiteSpace:"pre-wrap"},children:g})}var se=t(72168);function le(e){var n=e.editable,t=e.text,r=e.handleTitleUpdate,a=(0,se.Z)(t),i=(0,l.Z)(a,3),o=i[0],s=i[1],u=i[2],d=(0,c.useState)(n),h=(0,l.Z)(d,2),f=h[0],x=h[1],m=(0,c.useState)(!1),p=(0,l.Z)(m,2),Z=p[0],g=p[1];return(0,c.useEffect)((function(){x(n),s(t),g(!1)}),[n]),f||Z?f&&!Z?(0,k.jsxs)(v.Z,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[(0,k.jsx)(j.Z,{variant:"h6",children:o}),(0,k.jsx)(H.Z,{fontSize:"medium",onClick:function(){return g(!0)}})]}):f&&Z?(0,k.jsxs)(v.Z,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start"},spacing:2,children:[(0,k.jsx)(q.Z,{id:"standard-basic",size:"small",label:"Title",onChange:u,variant:"standard",defaultValue:o,sx:{maxWidth:"200px"}}),(0,k.jsx)(O.Z,{fontSize:"medium",onClick:function(){r(o),g(!1)}}),(0,k.jsx)(W.Z,{fontSize:"medium",onClick:function(){s(t),g(!1)}})]}):void 0:(0,k.jsx)(j.Z,{variant:"h6",children:o})}var ce=t(85899);function ue(e){var n=e.memType,t=e.memTitle,y=e.memDate,C=e.memStory,w=e.memImages,D=e.memThumbnail,E=e.bucket,P=e.memoryID,T=e.authURL,z=(0,c.useState)(!1),I=(0,l.Z)(z,2),U=I[0],M=I[1],R=(0,c.useState)(!1),F=(0,l.Z)(R,2),A=F[0],q=F[1],O=(0,c.useState)(0),W=(0,l.Z)(O,2),H=W[0],K=W[1],N=(0,c.useState)(t),Y=(0,l.Z)(N,2),V=Y[0],_=Y[1],G=(0,c.useState)(y),J=(0,l.Z)(G,2),Q=J[0],$=J[1],ee=(0,c.useState)(C),ne=(0,l.Z)(ee,2),te=ne[0],ae=ne[1],ie=(0,c.useState)(D),se=(0,l.Z)(ie,2),ue=se[0],de=se[1],he=(0,c.useState)(w),fe=(0,l.Z)(he,2),xe=fe[0],me=fe[1],pe=(0,c.useState)(null),Ze=(0,l.Z)(pe,2),ge=Ze[0],ve=Ze[1],je=(0,c.useState)(null),be=(0,l.Z)(je,2),ye=be[0],Ce=be[1],ke=(0,c.useState)([]),Se=(0,l.Z)(ke,2),we=Se[0],De=Se[1],Ee=(0,c.useState)(null),Pe=(0,l.Z)(Ee,2),Te=Pe[0],ze=Pe[1],Ie=(0,c.useState)([]),Ue=(0,l.Z)(Ie,2),Me=Ue[0],Re=Ue[1],Fe=(0,c.useState)(!1),Ae=(0,l.Z)(Fe,2),Le=Ae[0],Be=Ae[1],qe=(0,c.useState)(null),Oe=(0,l.Z)(qe,2),We=Oe[0],He=Oe[1],Ke=(0,c.useState)(null),Ne=(0,l.Z)(Ke,2),Ye=Ne[0],Ve=Ne[1],Xe=(0,c.useState)(null),_e=(0,l.Z)(Xe,2),Ge=_e[0],Je=_e[1],Qe=(0,c.useState)(!1),$e=(0,l.Z)(Qe,2),en=$e[0],nn=$e[1],tn=xe.length;(0,c.useEffect)((function(){return _(t)}),[t]),(0,c.useEffect)((function(){return $(y)}),[y]),(0,c.useEffect)((function(){return ae(C)}),[C]),(0,c.useEffect)((function(){return me(w)}),[w]),(0,c.useEffect)((function(){return de(D)}),[D]);var rn=function(e,n){Ce(e),Je(n)},an=function(e,n,t){401===e.status?rn("You have been logged out. Please login to continue.",!0):403===e.status?rn("You do not have permissions to do this operation.",!0):rn("Unknown error occured in ".concat(n),!0),t(e.status)},on=function(e){ve(!0),nn(e)},sn=function(e,n,t,r){e.ok?(rn("".concat(n," successful"),!1),ve(!0),r(t)):an(e,n,on)},ln=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.Z.updateTitle(P,n);case 2:t=e.sent,sn(t,"title update",n,_);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),cn=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.Z.updateDate(P,n);case 2:t=e.sent,sn(t,"date update",n,$);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),un=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.Z.updateStory(P,n);case 2:t=e.sent,sn(t,"story update",n,ae);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),dn=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.Z.updateThumbnail(P,xe[n].title);case 2:t=e.sent,sn(t,"thumbnail update",n,de);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),hn=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(n,t){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.Z.updateCaption(P,xe[n].title,t);case 2:r=e.sent,sn(r,"caption update",t,(function(){})),me([].concat((0,i.Z)(xe.slice(0,n)),[(0,a.Z)((0,a.Z)({},xe[n]),{},{caption:t})],(0,i.Z)(xe.slice(n+1))));case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),fn=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(n){var t,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=xe[n].title,1!==xe.length){e.next=6;break}rn("Atleast 1 image is needed for memory. Unable to delete",!0),e.next=11;break;case 6:return e.next=8,ce.Z.removeImage(P,r);case 8:t=e.sent,sn(t,"image delete",r,(function(){return me(xe.filter((function(e){return e.title!==r})))})),n<=ue&&ue>0&&de(ue-1);case 11:return ve(!0),e.abrupt("return",t);case 15:return e.prev=15,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(n){return e.apply(this,arguments)}}(),xn=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.Z.addImage(P,n);case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),mn=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var n,t,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(0,r.Z)(we.entries()),e.prev=1,a=(0,o.Z)().mark((function e(){var n,r,a,i,s,c,u,d,h,f;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,l.Z)(t.value,2),r=n[0],a=n[1],i=(0,l.Z)(a,3),s=i[0],c=i[1],u=i[2],e.next=4,xn(s).then((function(e){return e.ok?e.text():(an(e,"add image",on),"")}));case 4:return d=e.sent,h={key:"memories/".concat(P,"/images/").concat(s.name),src:u,alt:s.name,title:s.name,width:s.width,height:s.height,images:[]},e.next=8,fetch(d,{body:c,method:"PUT"});case 8:(f=e.sent).ok?(He("Images uploaded: ".concat(r+1," / ").concat(Te," ")),me((function(e){return e.concat([h])}))):(Ve("Error while uploading memory image"),Re((function(e){return e.concat([s.name])})),an(f,"deleting image",on));case 10:case"end":return e.stop()}}),e)})),n.s();case 4:if((t=n.n()).done){e.next=8;break}return e.delegateYield(a(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),n.e(e.t1);case 13:return e.prev=13,n.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(we.length>0&&(Be(!0),He("Preparing images for upload....")),we.length!==Te){e.next=9;break}return e.next=4,mn();case 4:Me.length>0?Ve("Error while uploading ".concat(Me.length," images")):Ve("".concat(we.length," image(s) uploaded successfully")),Re([]),ze(null),De([]),setTimeout((function(){Be(!1),Ve(null),He(null)}),3e3);case 9:case"end":return e.stop()}}),e)}))),[we]);var pn=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.target.files&&(t=Array.from(n.target.files),ze(t.length),xe.length+t.length<=15?(t.forEach((function(e){var n=new Image;n.onload=function(){var n=(0,s.Z)((0,o.Z)().mark((function n(t){var r,a,i,s,l,c,u,d;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.target.naturalHeight,a=t.target.naturalWidth,i=e.size/1048576,s=e.name,l=[500,1e3,1500].map((function(e){return{height:e,width:Math.ceil(e*a/r)}})),c=Date.now(),u="".concat(c,"-").concat(s),d=[{name:u,size:i,height:r,width:a,images:l},e,t.target.src],De((function(e){return e.concat([d])}));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),n.src=URL.createObjectURL(e)})),t.map((function(e){return URL.revokeObjectURL(e)}))):(rn("Unable to add ".concat(t.length," images. Maximum images allowed per memory is 15"),!0),ve(!0)));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Zn=(0,k.jsx)(le,{editable:A,text:V,handleTitleUpdate:ln}),gn=(0,k.jsx)(X,{editable:A,prevDate:Q,handleDateUpdate:cn}),vn=(0,k.jsx)(oe,{editable:A,prevStory:te,handleStoryUpdate:un}),jn=(0,k.jsx)(re,{editable:A,images:xe,memThumbnail:ue,handlePhotoClick:function(e,n,t){M(!0),K(t)},handleThumbnailUpdate:dn,deleteImage:fn,addImage:pn,updateCaption:hn}),bn=(0,k.jsxs)(h.Z,{variant:"contained",component:"label",onClick:function(){return q(!1)},sx:{color:"primary.main",borderRadius:5,backgroundColor:"button.main",padding:"6px 8px"},children:[(0,k.jsx)(g.Z,{size:"medium",sx:{paddingRight:1}}),(0,k.jsx)(j.Z,{variant:"body1",color:"muted.main",children:"Edit"})]});return 401===en&&!1===ge?(0,k.jsx)(u.Fg,{to:"/login"}):(0,k.jsxs)(k.Fragment,{children:[A?(0,k.jsx)(v.Z,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:bn}):(0,k.jsx)(S,{memType:n}),(0,k.jsx)(d.Z,{component:"div",sx:{backgroundColor:"button.main",margin:A?"5px":0},children:(0,k.jsx)(B.Z,{header:Zn,subheader:gn,photoLayout:jn,storyLayout:vn,memoryID:P,bucket:E,authURL:T,handleEditClick:function(){return q(!0)},memType:n})}),(0,k.jsx)(L,{open:U,title:V,date:Q,images:xe,index:H,handleNext:function(){K((function(e){return(e+1)%tn}))},handleBack:function(){K((function(e){return(e-1+tn)%tn}))},handleClose:function(){return M(!1)},handleChange:function(e){return K(e)}}),(0,k.jsx)(b.Z,{snackBarOpen:ge,message:ye,onClose:function(){ve(!1),Ce(null),Je(null)},error:Ge}),(0,k.jsx)(p.Z,{open:Le,fullWidth:!0,sx:{p:1},children:(0,k.jsxs)(f.Z,{sx:{maxWidth:1,p:1},children:[(0,k.jsx)(m.Z,{title:"Adding Images",sx:{textAlign:"center"}}),(0,k.jsx)(Z.Z,{}),(0,k.jsxs)(x.Z,{children:[(0,k.jsx)(j.Z,{variant:"h6",sx:{color:"muted.main"},children:We}),(0,k.jsx)(v.Z,{justifyContent:"center",sx:{py:2},children:(0,k.jsx)(j.Z,{variant:"h5",children:Ye})})]})]})})]})}ue.defaultProps={memTitle:"Memory Title",memDate:"Memory Date",memStory:"Memory Text"}}}]);
//# sourceMappingURL=35.6206743b.chunk.js.map