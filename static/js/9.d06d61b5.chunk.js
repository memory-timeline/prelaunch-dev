(this.webpackJsonpprelaunch=this.webpackJsonpprelaunch||[]).push([[9],{166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(11),c=n(0),r=n(701),o=n(712),i=n(145),s=n.n(i),l=n(3);function u(e){var t=e.snackBarOpen,n=e.message,i=e.onClose,u=Object(c.useState)(t),d=Object(a.a)(u,2),j=d[0],b=d[1],h=Object(c.useState)(n),m=Object(a.a)(h,2),x=m[0],O=m[1];Object(c.useEffect)((function(){return b(t)}),[t]),Object(c.useEffect)((function(){return O(n)}),[n]);var f=function(){b(!1),O(null),i()},g=Object(l.jsx)(o.a,{size:"small","aria-label":"close",color:"inherit",onClick:f,children:Object(l.jsx)(s.a,{fontSize:"small"})});return console.log("in snackbar",j,n),Object(l.jsx)(r.a,{open:j,autoHideDuration:3e3,onClose:f,message:x,action:g,anchorOrigin:{vertical:"top",horizontal:"center"}})}},182:function(e,t,n){},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(11),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];Object(c.useEffect)((function(){return o(e)}),[e]);return[r,o,function(e){o(e.target.value)}]}},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(11),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];return[r,o,function(e){var t=new Date(e);if(e){var n=t.toLocaleDateString("en-in",{day:"numeric",month:"long",year:"numeric"});o(n)}else o(null)}]}},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(11),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];return[r,o,function(e){return o(e)}]}},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(712),c=n(145),r=n.n(c),o=n(108),i=n(3);function s(e){var t=e.size,n=e.handleClick;return Object(i.jsx)(a.a,{size:t,sx:{color:"black",bgcolor:Object(o.a)("#fff",.4),position:"absolute",top:10,right:12},onClick:n,children:Object(i.jsx)(r.a,{size:t})})}s.defaultProps={size:"small"}},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var a=n(11),c=n(136),r=n(137),o=n.n(r),i=n(0),s=n(4),l=n(714),u=n(718),d=n(94),j=n(212),b=n.n(j),h=n(690),m=n(147),x=n(678),O=n(712),f=n(150),g=n.n(f),p=n(3);function y(){return Object(p.jsxs)(d.a,{sx:{alignItems:"center"},onClick:function(){},children:[Object(p.jsx)(O.a,{"aria-label":"update",sx:{bgcolor:"form.input"},onClick:function(){},children:Object(p.jsx)(g.a,{})}),"Edit"]})}var v=n(211),k=n.n(v);function w(){return Object(p.jsxs)(d.a,{sx:{alignItems:"center"},children:[Object(p.jsx)(O.a,{"aria-label":"delete",sx:{bgcolor:"form.input"},children:Object(p.jsx)(k.a,{})}),"Delete"]})}var C=n(166),S=n(647),E=n(719),I=n(713),z=n(707),M=n(50),D=n(113),R=n(687);function P(e){var t=e.confirm,n=e.handleCallback,c=e.handleCloseCallback,r=e.title,o=e.message,s=Object(i.useState)(t),l=Object(a.a)(s,2),u=l[0],j=l[1];Object(i.useEffect)((function(){return j(t)}),[t]);var b=function(){j(!1),c()};return console.log("in confirm",u),Object(p.jsxs)(I.a,{open:u,sx:{backgroundColor:"faded.black"},children:[Object(p.jsx)(R.a,{children:r}),Object(p.jsxs)(d.a,{sx:{p:2},children:[Object(p.jsx)(M.a,{sx:{pb:2},children:o}),Object(p.jsxs)(D.a,{spacing:2,direction:"row",children:[Object(p.jsx)(z.a,{variant:"contained",onClick:b,children:"Cancel"}),Object(p.jsx)(z.a,{variant:"outlined",onClick:function(){b(),n()},children:"OK"})]})]})]})}function U(e){var t=e.deleteItem,n=e.updateItem,c=e.snackBar,r=e.confirmMessage,o=e.handleDeleteObject,s=e.handleEditClick,l=Object(i.useState)(!1),u=Object(a.a)(l,2),d=u[0],j=u[1],h=Object(i.useState)(null),m=Object(a.a)(h,2),x=m[0],O=m[1],f=Boolean(x),g=function(){return O(null)};return Object(p.jsxs)("div",{children:[Object(p.jsx)(b.a,{onClick:function(e){return O(e.currentTarget)}}),Object(p.jsxs)(S.a,{id:"basic-menu",anchorEl:x,open:f,onClose:g,MenuListProps:{"aria-labelledby":"basic-button"},sx:{borderRadius:"10px"},children:[Object(p.jsx)(E.a,{onClick:function(){s(),g()},children:n}),Object(p.jsx)(E.a,{onClick:function(){j(!0),g()},children:t})]}),Object(p.jsx)(P,{title:"Delete Memory",confirm:d,handleCallback:o,handleCloseCallback:function(){return j(!1)},message:r}),c]})}var L=n(151);function T(){return(T=Object(c.a)(o.a.mark((function e(t,n,a,c){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.deleteMemory(t,n,a);case 3:r=e.sent,c(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function B(e){var t,n=e.header,c=e.subheader,r=e.photoLayout,o=e.storyLayout,j=e.bucket,O=e.memoryID,f=e.authURL,g=e.handleEditClick,v=e.preview,k=Object(i.useState)(null),S=Object(a.a)(k,2),E=S[0],I=S[1],z=Object(i.useState)(null),M=Object(a.a)(z,2),D=M[0],R=M[1],P=Object(m.a)();t=Object(x.a)(P.breakpoints.down("lg"))?"":"vertical-scroll";var L=function(e){return R(e)},B=function(e){"ok"===e.status?L("Memory deleted successfully"):L("Error while deleting memory"),I(!0)},N=Object(p.jsx)(C.a,{snackBarOpen:E,message:D,onClose:function(){I(!1)}}),A=v?Object(p.jsx)(b.a,{}):Object(p.jsx)(U,{confirmMessage:"Do you want to delete this memory?",snackBar:N,handleDeleteObject:function(){!function(e,t,n,a){T.apply(this,arguments)}(j,f,O,B)},deleteItem:Object(p.jsx)(w,{}),updateItem:Object(p.jsx)(y,{}),handleEditClick:g});return console.log("Rendering",E,D),!1===E?Object(p.jsx)(s.a,{to:"/memories",replace:!0}):Object(p.jsxs)(l.a,{sx:{boxShadow:0,bgcolor:"button.main",p:1},children:[Object(p.jsx)(u.a,{title:n,subheader:c,action:A}),Object(p.jsx)(h.a,{}),Object(p.jsxs)(d.a,{sx:{display:"flex",justifyContent:"flex-start",flexDirection:{lg:"row",xs:"column"},height:{lg:"72vh"},my:1},children:[Object(p.jsx)(d.a,{sx:{width:{lg:"70%",xs:"100%"},overflowY:"scroll",borderRadius:5},className:t,children:r}),Object(p.jsx)(d.a,{sx:{width:{lg:"30%",sx:"100%"},overflowY:"scroll",mt:{lg:0,xs:2},p:{lg:1},px:1},className:t,children:o})]})]})}},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return Ce}));var a=n(53),c=n(136),r=n(11),o=n(137),i=n.n(o),s=n(0),l=n(148),u=n(707),d=n(717),j=n(341),b=n.n(j),h=n(340),m=n.n(h),x=n(50),O=n(113),f=n(713),g=n(714),p=n(718),y=n(716),v=n(690),k=n(94),w=n(337),C=n.n(w),S=n(336),E=n.n(S),I=n(712),z=n(319),M=n.n(z),D=n(330),R=n.n(D),P=n(333),U=n(3),L=M()([P.bindKeyboard,P.autoPlay,P.virtualized])(R.a);function T(e){var t=e.index,n=e.images,a=e.handleNext,c=Object(s.useState)(t),o=Object(r.a)(c,2),i=o[0],l=o[1],u=Object(s.useState)(0),d=Object(r.a)(u,2),j=d[0],b=d[1],h=Object(s.useState)(null),m=Object(r.a)(h,2),x=m[0],O=m[1];Object(s.useEffect)((function(){l(t)}),[t]),Object(s.useEffect)((function(){j<n.length?O("none"):O("flex")}),[j]);var f=function(){return b((function(e){return e+1}))},g=n.map((function(e){var t=(e.images?e.images.map((function(e){var t=e.src,n=e.width;return"".concat(t," ").concat(n,"w")})):[]).join(",");return Object(U.jsx)(k.a,{component:"img",onLoad:f,sx:{display:{display:x},justifyContents:"center",width:"100%",bgcolor:"#1c1c1c"},src:e.src,srcSet:t,style:{display:"block",boxSizing:"content-box",cursor:"pointer",objectFit:"contain",height:"100vh"},alt:e.src},e.src)}));return Object(U.jsx)(L,{index:i,onChangeIndex:function(e){l(e)},enableMouseEvents:!0,animateTransitions:!0,interval:1e4,onClick:a,style:{backgroundColor:"muted.main"},children:g})}T.defaultProps={index:0};var B=n(210);function N(e){var t=e.handleClick;return Object(U.jsx)(I.a,{edge:"start",color:"primary","aria-label":"close",onClick:t,sx:{position:"absolute",top:"50%",right:0,transform:"translate(0%, -50%)"},children:Object(U.jsx)(E.a,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function A(e){var t=e.handleClick;return Object(U.jsx)(I.a,{edge:"start",color:"primary","aria-label":"close",onClick:t,sx:{position:"absolute",top:"50%",left:0,transform:"translate(0%, -50%)"},children:Object(U.jsx)(C.a,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function Y(e){var t=e.open,n=e.title,a=e.date,c=e.images,r=e.index,o=e.handleNext,i=e.handleBack,s=e.handleClose;return Object(U.jsxs)(f.a,{open:t,fullScreen:!0,children:[Object(U.jsx)(T,{images:c,index:r,handleNext:o}),Object(U.jsx)(p.a,{title:n,subheader:a,sx:{position:"absolute",top:10,left:10,bgcolor:"button.main",borderRadius:3,padding:1}}),Object(U.jsx)(A,{handleClick:i}),Object(U.jsx)(N,{handleClick:o}),Object(U.jsx)(B.a,{size:"large",handleClick:s})]})}Y.defaultProps={index:0};var F=n(221),W=n(696),H=n(167),J=n.n(H),K=n(168),X=n.n(K),q=n(150),V=n.n(q),G=n(200);function Q(e){var t=e.editable,n=e.text,a=e.handleTitleUpdate,c=Object(G.a)(n),o=Object(r.a)(c,3),i=o[0],l=o[1],u=o[2],d=Object(s.useState)(t),j=Object(r.a)(d,2),b=j[0],h=j[1],m=Object(s.useState)(!1),f=Object(r.a)(m,2),g=f[0],p=f[1];return Object(s.useEffect)((function(){h(t),l(n),p(!1)}),[t]),console.log("Memory Title ",b,g,i),b||g?b&&!g?Object(U.jsxs)(O.a,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[Object(U.jsx)(x.a,{variant:"h6",children:i}),Object(U.jsx)(V.a,{fontSize:"medium",onClick:function(){return p(!0)}})]}):b&&g?Object(U.jsxs)(O.a,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start"},spacing:2,children:[Object(U.jsx)(W.a,{id:"standard-basic",size:"small",label:"Title",onChange:u,variant:"standard",defaultValue:i,sx:{maxWidth:"200px"}}),Object(U.jsx)(J.a,{fontSize:"medium",onClick:function(){console.log(i),a(i),p(!1)}}),Object(U.jsx)(X.a,{fontSize:"medium",onClick:function(){l(n),p(!1)}})]}):void 0:Object(U.jsx)(x.a,{variant:"h6",children:i})}var Z=n(51),$=n(694),_=n(548),ee=n(693),te=n(201);function ne(e){var t=e.editable,n=e.prevDate,a=e.handleDateUpdate,c=Object(s.useState)(t),o=Object(r.a)(c,2),i=o[0],l=o[1],u=Object(s.useState)(!1),d=Object(r.a)(u,2),j=d[0],b=d[1],h=Object(te.a)(n),m=Object(r.a)(h,3),f=m[0],g=m[1],p=m[2];return Object(s.useEffect)((function(){l(t),g(n),b(!1)}),[t,n]),console.log("Memory Date ",i,j,f),i||j?i&&!j?Object(U.jsxs)(O.a,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[Object(U.jsx)(x.a,{children:f}),Object(U.jsx)(V.a,{fontSize:"medium",onClick:function(){return b(!0)}})]}):i&&j?Object(U.jsxs)(O.a,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start",mt:3},spacing:2,children:[Object(U.jsx)(_.a,{dateAdapter:ee.a,children:Object(U.jsx)($.a,{label:"Memory Date",value:f,onChange:p,placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return Object(U.jsx)(W.a,Object(Z.a)({readOnly:!0,required:!0},e))}})}),Object(U.jsx)(J.a,{fontSize:"medium",onClick:function(){a(f),b(!1)}}),Object(U.jsx)(X.a,{fontSize:"medium",onClick:function(){g(n),b(!1)}})]}):void 0:Object(U.jsx)(x.a,{children:f})}var ae=n(202);n(182);function ce(e){var t=e.editable,n=e.prevEditorState,a=e.handleEditorStateUpdate,c=Object(s.useState)(t),o=Object(r.a)(c,2),i=o[0],u=o[1],d=Object(s.useState)(!1),j=Object(r.a)(d,2),b=j[0],h=j[1],m=Object(ae.a)(n),f=Object(r.a)(m,3),g=f[0],p=f[1],y=f[2],w=Object(s.useRef)();return Object(s.useEffect)((function(){u(t),p(n),h(!1)}),[t,n]),console.log("Memory Title ",i,b),i||b?i&&!b?Object(U.jsxs)(O.a,{direction:"column",spacing:2,children:[Object(U.jsxs)(O.a,{direction:"row",spacing:2,justifyContent:"flex-end",children:[Object(U.jsx)(x.a,{sx:{color:"muted.main"},children:"Edit Story"}),Object(U.jsx)(V.a,{fontSize:"medium",onClick:function(){h(!0)}})]}),Object(U.jsx)(v.a,{sx:{width:1}}),Object(U.jsx)(l.Editor,{readOnly:!0,editorState:g})]}):i&&b?Object(U.jsxs)(O.a,{direction:"column",spacing:2,children:[Object(U.jsxs)(O.a,{direction:"row",spacing:2,justifyContent:"flex-end",children:[Object(U.jsx)(x.a,{sx:{color:"muted.main"},children:"Editing Story"}),Object(U.jsx)(J.a,{fontSize:"medium",onClick:function(){a(JSON.stringify(Object(l.convertToRaw)(g.getCurrentContent())),g),h(!1)}}),Object(U.jsx)(X.a,{fontSize:"medium",onClick:function(){p(n),h(!1)}})]}),Object(U.jsx)(v.a,{sx:{width:1}}),Object(U.jsx)(k.a,{sx:{p:2,m:1,my:2,border:1,borderColor:"primary.main",bgcolor:"input.background",minHeight:"200px",borderRadius:5,width:"90%"},onClick:function(){return w.current.focus()},children:Object(U.jsx)(l.Editor,{autoFocus:!0,onChange:y,editorState:g,ref:w})})]}):void 0:Object(U.jsx)(l.Editor,{readOnly:!0,editorState:g})}var re=n(254),oe=n(255),ie=n(699),se=n(720),le=n(211),ue=n.n(le),de=n(339),je=n.n(de),be=n(145),he=n.n(be),me=n(108),xe=["alt","style"],Oe=["alt","style"];function fe(e){var t=e.children,n=e.onClick,a=e.name,c=e.updateOp;return Object(U.jsx)(u.a,{id:a,variant:"contained",component:"label",onClick:n,sx:{color:c===a?"button.main":"muted.main",borderRadius:5,backgroundColor:c===a?"primary.main":"button.main",padding:"6px 8px","&:hover":{backgroundColor:"button.main",color:"muted.main"}},children:t})}function ge(e){var t=e.handleChange,n=e.onClick,a=e.updateOp;return Object(U.jsxs)(fe,{onClick:n,name:"add",updateOp:a,children:[Object(U.jsx)("input",{type:"file",hidden:!0,multiple:!0,accept:"image/*",onChange:t}),Object(U.jsx)(je.a,{sx:{fontSize:"1.5rem"}}),"Add"]})}function pe(e){var t=e.images,n=e.handlePhotoClick,a=e.renderPhoto,c=Object(s.useState)(null),o=Object(r.a)(c,2),i=o[0],l=o[1];return Object(s.useEffect)((function(){var e=0,n=0;t.forEach((function(t){t.height>t.width?n+=1:e+=1})),l(e>n?"rows":"columns")}),[t]),a?Object(U.jsx)(oe.a,{layout:i,photos:t,onClick:n,spacing:2,renderPhoto:a}):Object(U.jsx)(oe.a,{layout:i,photos:t,onClick:n,spacing:2})}function ye(e){var t=e.editable,n=e.images,a=e.handlePhotoClick,c=e.handleThumbnailUpdate,o=e.deleteImage,i=e.addImage,l=Object(s.useState)(t),d=Object(r.a)(l,2),j=d[0],b=d[1],h=Object(s.useState)(null),m=Object(r.a)(h,2),f=m[0],g=m[1],p=Object(s.useState)(null),y=Object(r.a)(p,2),v=y[0],k=y[1],w=function(e){g(f===e?null:e)};console.log("memory images",f,j),Object(s.useEffect)((function(){b(t),g(null)}),[t]);var C=Object(U.jsxs)(O.a,{direction:"row",spacing:2,children:[Object(U.jsx)(ge,{handleChange:i,onClick:function(){return w("add")},updateOp:f}),Object(U.jsxs)(fe,{onClick:function(){return w("delete")},name:"delete",updateOp:f,children:[Object(U.jsx)(ue.a,{sx:{fontSize:"1.5rem"}}),"Delete"]}),Object(U.jsx)(fe,{onClick:function(){return w("thumbnail")},name:"thumbnail",updateOp:f,children:"Set Thumbnail"})]}),S=Object(U.jsx)(O.a,{direction:"row",children:Object(U.jsxs)(x.a,{variant:"h6",color:"muted.main",children:["Images:",n.length]})});return j?j&&"delete"===f?Object(U.jsxs)(O.a,{direction:"column",spacing:2,sx:{p:2},children:[S,C,Object(U.jsx)(pe,{images:n,handlePhotoClick:a,renderPhoto:function(e){var t=e.layout,a=e.layoutOptions,c=e.imageProps,r=c.alt,i=c.style,s=Object(re.a)(c,xe);return console.log(t,a),Object(U.jsxs)(u.a,{component:"div",children:[Object(U.jsx)("img",Object(Z.a)({alt:r,style:Object(Z.a)(Object(Z.a)({},i),{},{width:t.width,padding:0})},s)),Object(U.jsx)(I.a,{size:"medium",sx:{color:"black",bgcolor:Object(me.a)("#fff",.4),position:"absolute",top:10,right:12},onClick:function(){return function(e){var t=n.find((function(t){return t.alt===e}));o(t)}(r)},children:Object(U.jsx)(he.a,{size:"medium"})})]})}})]}):j&&"thumbnail"===f?Object(U.jsxs)(O.a,{direction:"column",spacing:2,sx:{p:2},children:[S,C,Object(U.jsx)(pe,{images:n,handlePhotoClick:a,renderPhoto:function(e){var t=e.layout,a=e.layoutOptions,r=e.imageProps,o=r.alt,i=r.style,s=Object(re.a)(r,Oe);return console.log(a),Object(U.jsxs)(u.a,{component:"div",children:[Object(U.jsx)("img",Object(Z.a)({alt:o,style:Object(Z.a)(Object(Z.a)({},i),{},{width:t.width,padding:0})},s)),Object(U.jsx)(se.a,{control:Object(U.jsx)(ie.a,{}),label:"",checked:o===v,onChange:function(){return function(e){console.log("name",e),console.log("images",n),k(e);var t=n.find((function(t){return t.alt===e}));console.log("thumbnail image",t),c(t)}(o)},sx:{pr:1,position:"absolute",bgcolor:Object(me.a)("#fff",.6),color:"black",borderRadius:"0px 5px 5px 0px",borderColor:"secondary.main",borderLeft:0,bottom:20,left:15}})]})}})]}):j&&"add"===f||j&&!f?Object(U.jsxs)(O.a,{direction:"column",spacing:2,sx:{p:2},children:[S,C,Object(U.jsx)(pe,{images:n,handlePhotoClick:a})]}):void 0:Object(U.jsx)(pe,{images:n,handlePhotoClick:a})}pe.defaultProps={renderPhoto:null},fe.defaultProps={onClick:function(){}};var ve=n(151),ke=n(166);function we(e){return!1===e.preview?Object(U.jsx)(O.a,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:Object(U.jsx)(d.a,{href:"/",underline:"none",children:Object(U.jsxs)(u.a,{variant:"contained",component:"label",sx:{color:"primary.main",backgroundColor:"button.main",padding:"6px 8px",boxShadow:0,"&:hover":{backgroundColor:"button.main"}},children:[Object(U.jsx)(m.a,{size:"medium",sx:{paddingRight:1}}),Object(U.jsx)(x.a,{variant:"body1",color:"muted.main",children:"Memories"})]})})}):null}function Ce(e){var t=e.memTitle,n=e.memDate,o=e.memEditorState,l=e.memImages,d=e.bucket,j=e.memoryID,h=e.authURL,m=e.preview,w=Object(s.useState)(!1),C=Object(r.a)(w,2),S=C[0],E=C[1],I=Object(s.useState)(!1),z=Object(r.a)(I,2),M=z[0],D=z[1],R=Object(s.useState)(0),P=Object(r.a)(R,2),L=P[0],T=P[1],B=Object(s.useState)(t),N=Object(r.a)(B,2),A=N[0],W=N[1],H=Object(s.useState)(n),J=Object(r.a)(H,2),K=J[0],X=J[1],q=Object(s.useState)(o),V=Object(r.a)(q,2),G=V[0],Z=V[1],$=Object(s.useState)(l),_=Object(r.a)($,2),ee=_[0],te=_[1],ae=Object(s.useState)(null),re=Object(r.a)(ae,2),oe=re[0],ie=re[1],se=Object(s.useState)(null),le=Object(r.a)(se,2),ue=le[0],de=le[1],je=Object(s.useState)([]),be=Object(r.a)(je,2),he=be[0],me=be[1],xe=Object(s.useState)(null),Oe=Object(r.a)(xe,2),fe=Oe[0],ge=Oe[1],pe=Object(s.useState)([]),Ce=Object(r.a)(pe,2),Se=Ce[0],Ee=Ce[1],Ie=Object(s.useState)(!1),ze=Object(r.a)(Ie,2),Me=ze[0],De=ze[1],Re=Object(s.useState)(null),Pe=Object(r.a)(Re,2),Ue=Pe[0],Le=Pe[1],Te=Object(s.useState)(null),Be=Object(r.a)(Te,2),Ne=Be[0],Ae=Be[1];console.log("images",ee);var Ye=ee.length;Object(s.useEffect)((function(){return W(t)}),[t]),Object(s.useEffect)((function(){return X(n)}),[n]),Object(s.useEffect)((function(){return Z(o)}),[o]),Object(s.useEffect)((function(){return te(l)}),[l]);var Fe=function(e){console.log("Setting snack message",e),de(e)},We=function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ve.a.updateMemoryDetails(d,h,j,t,n);case 3:return a=e.sent,Fe(a?"Memory ".concat(t," updated successfully"):"Error while updating memory ".concat(t)),ie(!0),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),He=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ve.a.updateMemoryImage(d,h,j,"thumbnail",t);case 3:return n=e.sent,console.log("Response",n),n.ok?Fe("Memory thumbnail updated successfully"):Fe("Error while updating memory thumbnail"),ie(!0),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),Je=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(ee.length>1)){e.next=9;break}return e.next=4,ve.a.updateMemoryImage(d,h,j,"delete",t);case 4:n=e.sent,console.log("Response",n),n?(console.log("set snack message - successfully deleted memory image"),Fe("Memory image deleted successfully"),te(ee.filter((function(e){return e.title!==t.title})))):(console.log("set snack message - error while deleting memory image"),Fe("Error while deleting memory image")),e.next=11;break;case 9:console.log("set snack message - atleast one image is needed for memory"),Fe("Atleast 1 image is needed for memory. Unable to delete");case 11:return ie(!0),e.abrupt("return",n);case 15:return e.prev=15,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),Ke=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("addImage details",t),e.next=4,ve.a.updateMemoryImage(d,h,j,"add",t);case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Xe=function(){var e=Object(c.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(a.a)(he.entries()),e.prev=1,c=i.a.mark((function e(){var t,a,c,o,s,l,u,d,b,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(r.a)(n.value,2),a=t[0],c=t[1],o=Object(r.a)(c,3),s=o[0],l=o[1],u=o[2],console.log(s.name,u),e.next=5,Ke(s).then((function(e){return e.text()}));case 5:return d=e.sent,console.log("response for ",s.name,d),b={key:"memories/".concat(j,"/images/").concat(s.name),src:u,alt:s.name,title:s.name,width:s.width,height:s.height,images:[]},e.next=10,fetch(d,{body:l,method:"PUT"});case 10:h=e.sent,console.log("upload response",h),h.ok?(console.log("Setting snack message - image ".concat(s.name," add success")),Le("Images uploaded: ".concat(a+1," / ").concat(fe," ")),te((function(e){return e.concat([b])}))):(console.log("Setting snack message - error uploading image"),Ae("Error while uploading memory image"),Ee((function(e){return e.concat([s.name])})));case 13:case"end":return e.stop()}}),e)})),t.s();case 4:if((n=t.n()).done){e.next=8;break}return e.delegateYield(c(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),t.e(e.t1);case 13:return e.prev=13,t.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)(Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(he.length!==fe){e.next=14;break}return De(!0),console.log(he,fe),e.next=5,Xe();case 5:console.log("Resetting new image count and images"),console.log("Add done"),Se.length>0?Ae("Error while uploading ".concat(Se.length," images")):Ae("".concat(he.length," image(s) uploaded successfully")),Ee([]),ge(null),me([]),setTimeout((function(){De(!1),Ae(null),Le(null)}),3e3),e.next=15;break;case 14:he.length>0&&Le("Preparing images for upload....");case 15:case"end":return e.stop()}}),e)}))),[he]);var qe=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.files&&(n=Array.from(t.target.files),console.log("files to add:",n.length,"exsting images:",ee.length),ge(n.length),ee.length+n.length<=15?(n.forEach((function(e){var t=new Image;t.onload=function(){var t=Object(c.a)(i.a.mark((function t(n){var a,c,r,o,s,l,u,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.target.naturalHeight,c=n.target.naturalWidth,r=e.size/1048576,o=e.name,s=[500,1e3,1500].map((function(e){return{height:e,width:Math.ceil(e*c/a)}})),l=Date.now(),u="".concat(l,"-").concat(o),d=[{name:u,size:r,height:a,width:c,images:s},e,n.target.src],me((function(e){return e.concat([d])}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.src=URL.createObjectURL(e)})),n.map((function(e){return URL.revokeObjectURL(e)}))):(console.log("Setting snack message - error adding image as exceeding 15"),Fe("Unable to add ".concat(n.length," images. Maximum images allowed per memory is 15")),ie(!0)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ve=Object(U.jsx)(Q,{editable:M,text:A,handleTitleUpdate:function(e){We("title",e)&&W(e)}}),Ge=Object(U.jsx)(ne,{editable:M,prevDate:K,handleDateUpdate:function(e){We("date",e)&&X(e)}}),Qe=Object(U.jsx)(ce,{editable:M,prevEditorState:G,handleEditorStateUpdate:function(e,t){We("story",e)&&Z(t)}}),Ze=Object(U.jsx)(ye,{editable:M,images:ee,handlePhotoClick:function(e,t,n){E(!0),T(n)},handleThumbnailUpdate:He,deleteImage:Je,addImage:qe}),$e=Object(U.jsxs)(u.a,{variant:"contained",component:"label",onClick:function(){return D(!1)},sx:{color:"primary.main",borderRadius:5,backgroundColor:"button.main",padding:"6px 8px"},children:[Object(U.jsx)(b.a,{size:"medium",sx:{paddingRight:1}}),Object(U.jsx)(x.a,{variant:"body1",color:"muted.main",children:"Edit"})]});return console.log("preview",m),Object(U.jsxs)(U.Fragment,{children:[M?Object(U.jsx)(O.a,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:$e}):Object(U.jsx)(we,{preview:m}),Object(U.jsx)(k.a,{component:"div",sx:{backgroundColor:"button.main",margin:M?"5px":0},children:Object(U.jsx)(F.a,{header:Ve,subheader:Ge,photoLayout:Ze,storyLayout:Qe,memoryID:j,bucket:d,authURL:h,handleEditClick:function(){return D(!0)},preview:m})}),Object(U.jsx)(Y,{open:S,title:A,date:K,images:ee,index:L,handleNext:function(){T((function(e){return(e+1)%Ye}))},handleBack:function(){T((function(e){return(e-1+Ye)%Ye}))},handleClose:function(){return E(!1)}}),Object(U.jsx)(ke.a,{snackBarOpen:oe,message:ue,onClose:function(){console.log("snack close, set snack false, message null"),ie(!1),de(null)}}),Object(U.jsx)(f.a,{open:Me,fullWidth:!0,sx:{p:1},children:Object(U.jsxs)(g.a,{sx:{maxWidth:1,p:1},children:[Object(U.jsx)(p.a,{title:"Adding Images",sx:{textAlign:"center"}}),Object(U.jsx)(v.a,{}),Object(U.jsxs)(y.a,{children:[Object(U.jsx)(x.a,{variant:"h6",sx:{color:"muted.main"},children:Ue}),Object(U.jsx)(O.a,{justifyContent:"center",sx:{py:2},children:Object(U.jsx)(x.a,{variant:"h5",children:Ne})})]})]})})]})}Ce.defaultProps={memTitle:"Memory Title",memDate:"Memory Date",memEditorState:l.EditorState.createWithText("Memory Text")}},705:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(11),c=n(136),r=n(137),o=n.n(r),i=n(4),s=n(0),l=n(148),u=n(151),d=n(220),j=n(263),b=n(711),h=n(255),m=n(221),x=n(361),O=[{key:1,src:x.a,width:667,height:500},{key:2,src:x.a,width:667,height:500},{key:3,src:x.a,width:375,height:500},{key:4,src:x.a,width:667,height:500},{key:5,src:x.a,width:375,height:500},{key:6,src:x.a,width:667,height:500},{key:7,src:x.a,width:667,height:500},{key:8,src:x.a,width:667,height:500},{key:9,src:x.a,width:667,height:500},{key:10,src:x.a,width:667,height:500},{key:11,src:x.a,width:375,height:500},{key:12,src:x.a,width:375,height:500},{key:13,src:x.a,width:375,height:500},{key:14,src:x.a,width:375,height:500},{key:15,src:x.a,width:667,height:500}],f=n(3);function g(){return Object(f.jsx)(m.a,{header:Object(f.jsx)(b.a,{type:"rectangular",sx:{width:{lg:"20%",md:"30%",xs:"70%"}}}),subheader:Object(f.jsx)(b.a,{type:"rectangular",sx:{width:{lg:"15%",md:"20%",xs:"60%"}}}),photoLayout:Object(f.jsx)(h.a,{layout:"rows",photos:O,spacing:2}),storyLayout:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}})]})})}var p=n(166);function y(e,t,n,a,c){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(o.a.mark((function e(t,n,a,c,r){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.viewMemory(t,n,a);case 3:if(i=e.sent,console.log(i),!i.status){e.next=8;break}return r(i),e.abrupt("return");case 8:c(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function k(e){var t=e.bucket,n=e.authURL,c=Object(i.h)().memoryId,r=Object(s.useState)(),o=Object(a.a)(r,2),u=o[0],b=o[1],h=Object(s.useState)(null),m=Object(a.a)(h,2),x=m[0],O=m[1],v=Object(s.useState)(null),k=Object(a.a)(v,2),w=k[0],C=k[1],S=function(e){return b(e)},E=Object(s.useState)(null),I=Object(a.a)(E,2),z=I[0],M=I[1],D=function(e){console.log("Setting snack message",e),C(e)},R=function(){console.log("snack close, set snack false, message null"),O(!1),C(null)},P=function(e){"unauthenticated"===e.status&&(D("You have been logged out. Navigating to login page"),O(!0),setInterval((function(){return M("unauthenticated")}),3e3)),"forbidden"===e.status&&(D("You do not have access to this memory. Navigating to memories page"),O(!0),setInterval((function(){return M("forbidden")}),3e3))};return Object(s.useEffect)((function(){y(t,n,c,S,P);var e=setInterval((function(){return y(t,n,c,S,P)}),3e5);return function(){return clearInterval(e)}}),[]),"unauthenticated"===z?Object(f.jsx)(i.a,{to:"/login"}):"forbidden"===z?Object(f.jsx)(i.a,{to:"/memories"}):(console.log("memory",u,"memError",z),u?Object(f.jsxs)(d.a,{children:[Object(f.jsx)(j.a,{memTitle:u.title,memDate:u.date,memImages:u.pictures.photos,memEditorState:l.EditorState.createWithContent(Object(l.convertFromRaw)(u.contentState)),memoryID:c,bucket:t,authURL:n,preview:!1}),Object(f.jsx)(p.a,{snackBarOpen:x,message:w,onClose:R})]}):Object(f.jsxs)(d.a,{children:[Object(f.jsx)(g,{}),Object(f.jsx)(p.a,{snackBarOpen:x,message:w,onClose:R})]}))}}}]);
//# sourceMappingURL=9.d06d61b5.chunk.js.map