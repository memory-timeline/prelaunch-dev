(this.webpackJsonpprelaunch=this.webpackJsonpprelaunch||[]).push([[9],{165:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(11),c=n(0),r=n(676),o=n(687),i=n(144),s=n.n(i),l=n(2);function u(e){var t=e.snackBarOpen,n=e.message,i=e.onClose,u=Object(c.useState)(t),d=Object(a.a)(u,2),j=d[0],b=d[1],h=Object(c.useState)(n),m=Object(a.a)(h,2),x=m[0],O=m[1];Object(c.useEffect)((function(){return b(t)}),[t]),Object(c.useEffect)((function(){return O(n)}),[n]);var f=function(){b(!1),O(null),i()},g=Object(l.jsx)(o.a,{size:"small","aria-label":"close",color:"inherit",onClick:f,children:Object(l.jsx)(s.a,{fontSize:"small"})});return console.log("in snackbar",j,n),Object(l.jsx)(r.a,{open:j,autoHideDuration:3e3,onClose:f,message:x,action:g,anchorOrigin:{vertical:"top",horizontal:"center"}})}},179:function(e,t,n){},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(11),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];Object(c.useEffect)((function(){return o(e)}),[e]);return[r,o,function(e){o(e.target.value)}]}},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(11),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];return[r,o,function(e){var t=new Date(e);if(e){var n=t.toLocaleDateString("en-in",{day:"numeric",month:"long",year:"numeric"});o(n)}else o(null)}]}},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(11),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];return[r,o,function(e){return o(e)}]}},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(687),c=n(144),r=n.n(c),o=n(108),i=n(2);function s(e){var t=e.size,n=e.handleClick;return Object(i.jsx)(a.a,{size:t,sx:{color:"black",bgcolor:Object(o.a)("#fff",.4),position:"absolute",top:10,right:12},onClick:n,children:Object(i.jsx)(r.a,{size:t})})}s.defaultProps={size:"small"}},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var a=n(11),c=n(136),r=n(137),o=n.n(r),i=n(0),s=n(4),l=n(689),u=n(693),d=n(94),j=n(210),b=n.n(j),h=n(665),m=n(146),x=n(653),O=n(687),f=n(149),g=n.n(f),p=n(2);function y(){return Object(p.jsxs)(d.a,{sx:{alignItems:"center"},onClick:function(){},children:[Object(p.jsx)(O.a,{"aria-label":"update",sx:{bgcolor:"form.input"},onClick:function(){},children:Object(p.jsx)(g.a,{})}),"Edit"]})}var v=n(209),k=n.n(v);function w(){return Object(p.jsxs)(d.a,{sx:{alignItems:"center"},children:[Object(p.jsx)(O.a,{"aria-label":"delete",sx:{bgcolor:"form.input"},children:Object(p.jsx)(k.a,{})}),"Delete"]})}var C=n(165),S=n(622),E=n(694),I=n(688),z=n(682),M=n(50),D=n(113),P=n(662);function R(e){var t=e.confirm,n=e.handleCallback,c=e.handleCloseCallback,r=e.title,o=e.message,s=Object(i.useState)(t),l=Object(a.a)(s,2),u=l[0],j=l[1];Object(i.useEffect)((function(){return j(t)}),[t]);var b=function(){j(!1),c()};return console.log("in confirm",u),Object(p.jsxs)(I.a,{open:u,sx:{backgroundColor:"faded.black"},children:[Object(p.jsx)(P.a,{children:r}),Object(p.jsxs)(d.a,{sx:{p:2},children:[Object(p.jsx)(M.a,{sx:{pb:2},children:o}),Object(p.jsxs)(D.a,{spacing:2,direction:"row",children:[Object(p.jsx)(z.a,{variant:"contained",onClick:b,children:"Cancel"}),Object(p.jsx)(z.a,{variant:"outlined",onClick:function(){b(),n()},children:"OK"})]})]})]})}function U(e){var t=e.deleteItem,n=e.updateItem,c=e.snackBar,r=e.confirmMessage,o=e.handleDeleteObject,s=e.handleEditClick,l=Object(i.useState)(!1),u=Object(a.a)(l,2),d=u[0],j=u[1],h=Object(i.useState)(null),m=Object(a.a)(h,2),x=m[0],O=m[1],f=Boolean(x),g=function(){return O(null)};return Object(p.jsxs)("div",{children:[Object(p.jsx)(b.a,{onClick:function(e){return O(e.currentTarget)}}),Object(p.jsxs)(S.a,{id:"basic-menu",anchorEl:x,open:f,onClose:g,MenuListProps:{"aria-labelledby":"basic-button"},sx:{borderRadius:"10px"},children:[Object(p.jsx)(E.a,{onClick:function(){s(),g()},children:n}),Object(p.jsx)(E.a,{onClick:function(){j(!0),g()},children:t})]}),Object(p.jsx)(R,{title:"Delete Memory",confirm:d,handleCallback:o,handleCloseCallback:function(){return j(!1)},message:r}),c]})}var T=n(150);function L(){return(L=Object(c.a)(o.a.mark((function e(t,n,a,c){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.deleteMemory(t,n,a);case 3:r=e.sent,c(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function B(e){var t,n=e.header,c=e.subheader,r=e.photoLayout,o=e.storyLayout,j=e.bucket,O=e.memoryID,f=e.authURL,g=e.handleEditClick,v=e.preview,k=Object(i.useState)(null),S=Object(a.a)(k,2),E=S[0],I=S[1],z=Object(i.useState)(null),M=Object(a.a)(z,2),D=M[0],P=M[1],R=Object(m.a)();t=Object(x.a)(R.breakpoints.down("lg"))?"":"vertical-scroll";var T=function(e){return P(e)},B=function(e){"ok"===e.status?T("Memory deleted successfully"):T("Error while deleting memory"),I(!0)},N=Object(p.jsx)(C.a,{snackBarOpen:E,message:D,onClose:function(){I(!1)}}),A=v?Object(p.jsx)(b.a,{}):Object(p.jsx)(U,{confirmMessage:"Do you want to delete this memory?",snackBar:N,handleDeleteObject:function(){!function(e,t,n,a){L.apply(this,arguments)}(j,f,O,B)},deleteItem:Object(p.jsx)(w,{}),updateItem:Object(p.jsx)(y,{}),handleEditClick:g});return console.log("Rendering",E,D),!1===E?Object(p.jsx)(s.a,{to:"/memories",replace:!0}):Object(p.jsxs)(l.a,{sx:{boxShadow:0,bgcolor:"button.main",p:1},children:[Object(p.jsx)(u.a,{title:n,subheader:c,action:A}),Object(p.jsx)(h.a,{}),Object(p.jsxs)(d.a,{sx:{display:"flex",justifyContent:"flex-start",flexDirection:{lg:"row",xs:"column"},height:{lg:"72vh"},my:1},children:[Object(p.jsx)(d.a,{sx:{width:{lg:"70%",xs:"100%"},overflowY:"scroll",borderRadius:5},className:t,children:r}),Object(p.jsx)(d.a,{sx:{width:{lg:"30%",sx:"100%"},overflowY:"scroll",mt:{lg:0,xs:2},p:{lg:1},px:1},className:t,children:o})]})]})}},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return ke}));var a=n(53),c=n(136),r=n(11),o=n(137),i=n.n(o),s=n(0),l=n(147),u=n(682),d=n(692),j=n(326),b=n.n(j),h=n(325),m=n.n(h),x=n(50),O=n(113),f=n(688),g=n(689),p=n(693),y=n(691),v=n(665),k=n(94),w=n(322),C=n.n(w),S=n(321),E=n.n(S),I=n(687),z=n(315),M=n.n(z),D=n(318),P=n(2),R=Object(D.autoPlay)(M.a);function U(e){var t=e.index,n=e.images,a=e.handleNext,c=s.useState(t),o=Object(r.a)(c,2),i=o[0],l=o[1];s.useEffect((function(){l(t)}),[t]);var u=n.map((function(e){var t=(e.images?e.images.map((function(e){var t=e.src,n=e.width;return"".concat(t," ").concat(n,"w")})):[]).join(",");return Object(P.jsx)(k.a,{component:"img",sx:{display:"flex",justifyContents:"center",width:"100%",bgcolor:"#1c1c1c"},src:e.src,srcSet:t,style:{display:"block",boxSizing:"content-box",cursor:"pointer",objectFit:"contain",height:"100vh"},alt:e.src},e.src)}));return Object(P.jsx)(R,{index:i,onChangeIndex:function(e){l(e)},enableMouseEvents:!0,animateTransitions:!0,interval:1e4,onClick:a,springConfig:{duration:"0.7s",easeFunction:"cubic-bezier(0.83, 0, 0.17, 1)",delay:"0s"},style:{backgroundColor:"muted.main"},children:u})}U.defaultProps={index:0};var T=n(208);function L(e){var t=e.handleClick;return Object(P.jsx)(I.a,{edge:"start",color:"primary","aria-label":"close",onClick:t,sx:{position:"absolute",top:"50%",right:0,transform:"translate(0%, -50%)"},children:Object(P.jsx)(E.a,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function B(e){var t=e.handleClick;return Object(P.jsx)(I.a,{edge:"start",color:"primary","aria-label":"close",onClick:t,sx:{position:"absolute",top:"50%",left:0,transform:"translate(0%, -50%)"},children:Object(P.jsx)(C.a,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function N(e){var t=e.open,n=e.title,a=e.date,c=e.images,r=e.index,o=e.handleNext,i=e.handleBack,s=e.handleClose;return Object(P.jsxs)(f.a,{open:t,fullScreen:!0,children:[Object(P.jsx)(U,{images:c,index:r,handleNext:o}),Object(P.jsx)(p.a,{title:n,subheader:a,sx:{position:"absolute",top:10,left:10,bgcolor:"button.main",borderRadius:3,padding:1}}),Object(P.jsx)(B,{handleClick:i}),Object(P.jsx)(L,{handleClick:o}),Object(P.jsx)(T.a,{size:"large",handleClick:s})]})}N.defaultProps={index:0};var A=n(220),F=n(671),Y=n(166),W=n.n(Y),H=n(167),J=n.n(H),X=n(149),q=n.n(X),K=n(199);function V(e){var t=e.editable,n=e.text,a=e.handleTitleUpdate,c=Object(K.a)(n),o=Object(r.a)(c,3),i=o[0],l=o[1],u=o[2],d=Object(s.useState)(t),j=Object(r.a)(d,2),b=j[0],h=j[1],m=Object(s.useState)(!1),f=Object(r.a)(m,2),g=f[0],p=f[1];return Object(s.useEffect)((function(){h(t),l(n),p(!1)}),[t]),console.log("Memory Title ",b,g,i),b||g?b&&!g?Object(P.jsxs)(O.a,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[Object(P.jsx)(x.a,{variant:"h6",children:i}),Object(P.jsx)(q.a,{fontSize:"medium",onClick:function(){return p(!0)}})]}):b&&g?Object(P.jsxs)(O.a,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start"},spacing:2,children:[Object(P.jsx)(F.a,{id:"standard-basic",size:"small",label:"Title",onChange:u,variant:"standard",defaultValue:i,sx:{maxWidth:"200px"}}),Object(P.jsx)(W.a,{fontSize:"medium",onClick:function(){console.log(i),a(i),p(!1)}}),Object(P.jsx)(J.a,{fontSize:"medium",onClick:function(){l(n),p(!1)}})]}):void 0:Object(P.jsx)(x.a,{variant:"h6",children:i})}var G=n(51),Q=n(669),Z=n(512),$=n(668),_=n(200);function ee(e){var t=e.editable,n=e.prevDate,a=e.handleDateUpdate,c=Object(s.useState)(t),o=Object(r.a)(c,2),i=o[0],l=o[1],u=Object(s.useState)(!1),d=Object(r.a)(u,2),j=d[0],b=d[1],h=Object(_.a)(n),m=Object(r.a)(h,3),f=m[0],g=m[1],p=m[2];return Object(s.useEffect)((function(){l(t),g(n),b(!1)}),[t,n]),console.log("Memory Date ",i,j,f),i||j?i&&!j?Object(P.jsxs)(O.a,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[Object(P.jsx)(x.a,{children:f}),Object(P.jsx)(q.a,{fontSize:"medium",onClick:function(){return b(!0)}})]}):i&&j?Object(P.jsxs)(O.a,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start",mt:3},spacing:2,children:[Object(P.jsx)(Z.a,{dateAdapter:$.a,children:Object(P.jsx)(Q.a,{label:"Memory Date",value:f,onChange:p,placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return Object(P.jsx)(F.a,Object(G.a)({readOnly:!0,required:!0},e))}})}),Object(P.jsx)(W.a,{fontSize:"medium",onClick:function(){a(f),b(!1)}}),Object(P.jsx)(J.a,{fontSize:"medium",onClick:function(){g(n),b(!1)}})]}):void 0:Object(P.jsx)(x.a,{children:f})}var te=n(201);n(179);function ne(e){var t=e.editable,n=e.prevEditorState,a=e.handleEditorStateUpdate,c=Object(s.useState)(t),o=Object(r.a)(c,2),i=o[0],u=o[1],d=Object(s.useState)(!1),j=Object(r.a)(d,2),b=j[0],h=j[1],m=Object(te.a)(n),f=Object(r.a)(m,3),g=f[0],p=f[1],y=f[2],w=Object(s.useRef)();return Object(s.useEffect)((function(){u(t),p(n),h(!1)}),[t,n]),console.log("Memory Title ",i,b),i||b?i&&!b?Object(P.jsxs)(O.a,{direction:"column",spacing:2,children:[Object(P.jsxs)(O.a,{direction:"row",spacing:2,justifyContent:"flex-end",children:[Object(P.jsx)(x.a,{sx:{color:"muted.main"},children:"Edit Story"}),Object(P.jsx)(q.a,{fontSize:"medium",onClick:function(){h(!0)}})]}),Object(P.jsx)(v.a,{sx:{width:1}}),Object(P.jsx)(l.Editor,{readOnly:!0,editorState:g})]}):i&&b?Object(P.jsxs)(O.a,{direction:"column",spacing:2,children:[Object(P.jsxs)(O.a,{direction:"row",spacing:2,justifyContent:"flex-end",children:[Object(P.jsx)(x.a,{sx:{color:"muted.main"},children:"Editing Story"}),Object(P.jsx)(W.a,{fontSize:"medium",onClick:function(){a(JSON.stringify(Object(l.convertToRaw)(g.getCurrentContent())),g),h(!1)}}),Object(P.jsx)(J.a,{fontSize:"medium",onClick:function(){p(n),h(!1)}})]}),Object(P.jsx)(v.a,{sx:{width:1}}),Object(P.jsx)(k.a,{sx:{p:2,m:1,my:2,border:1,borderColor:"primary.main",bgcolor:"input.background",minHeight:"200px",borderRadius:5,width:"90%"},onClick:function(){return w.current.focus()},children:Object(P.jsx)(l.Editor,{autoFocus:!0,onChange:y,editorState:g,ref:w})})]}):void 0:Object(P.jsx)(l.Editor,{readOnly:!0,editorState:g})}var ae=n(249),ce=n(250),re=n(674),oe=n(695),ie=n(209),se=n.n(ie),le=n(324),ue=n.n(le),de=n(144),je=n.n(de),be=n(108),he=["alt","style"],me=["alt","style"];function xe(e){var t=e.children,n=e.onClick,a=e.name,c=e.updateOp;return Object(P.jsx)(u.a,{id:a,variant:"contained",component:"label",onClick:n,sx:{color:c===a?"button.main":"muted.main",borderRadius:5,backgroundColor:c===a?"primary.main":"button.main",padding:"6px 8px"},children:t})}function Oe(e){var t=e.handleChange,n=e.onClick,a=e.updateOp;return Object(P.jsxs)(xe,{onClick:n,name:"add",updateOp:a,children:[Object(P.jsx)("input",{type:"file",hidden:!0,multiple:!0,accept:"image/*",onChange:t}),Object(P.jsx)(ue.a,{sx:{fontSize:"1.5rem"}}),"Add"]})}function fe(e){var t=e.images,n=e.handlePhotoClick,a=e.renderPhoto,c=Object(s.useState)(null),o=Object(r.a)(c,2),i=o[0],l=o[1];return Object(s.useEffect)((function(){var e=0,n=0;t.forEach((function(t){t.height>t.width?n+=1:e+=1})),l(e>n?"rows":"columns")}),[t]),a?Object(P.jsx)(ce.a,{layout:i,photos:t,onClick:n,spacing:2,renderPhoto:a}):Object(P.jsx)(ce.a,{layout:i,photos:t,onClick:n,spacing:2})}function ge(e){var t=e.editable,n=e.images,a=e.handlePhotoClick,c=e.handleThumbnailUpdate,o=e.deleteImage,i=e.addImage,l=Object(s.useState)(t),d=Object(r.a)(l,2),j=d[0],b=d[1],h=Object(s.useState)(null),m=Object(r.a)(h,2),f=m[0],g=m[1],p=Object(s.useState)(null),y=Object(r.a)(p,2),v=y[0],k=y[1];console.log("memory images",f,j),Object(s.useEffect)((function(){b(t),g(null)}),[t]);var w=Object(P.jsxs)(O.a,{direction:"row",spacing:2,children:[Object(P.jsx)(Oe,{handleChange:i,onClick:function(){return g("add")},updateOp:f}),Object(P.jsxs)(xe,{onClick:function(){return g("delete")},name:"delete",updateOp:f,children:[Object(P.jsx)(se.a,{sx:{fontSize:"1.5rem"}}),"Delete"]}),Object(P.jsx)(xe,{onClick:function(){return g("thumbnail")},name:"thumbnail",updateOp:f,children:"Set Thumbnail"})]}),C=Object(P.jsx)(O.a,{direction:"row",children:Object(P.jsxs)(x.a,{variant:"h6",color:"muted.main",children:["Images:",n.length]})});return j?j&&"delete"===f?Object(P.jsxs)(O.a,{direction:"column",spacing:2,sx:{p:2},children:[C,w,Object(P.jsx)(fe,{images:n,handlePhotoClick:a,renderPhoto:function(e){var t=e.layout,a=e.layoutOptions,c=e.imageProps,r=c.alt,i=c.style,s=Object(ae.a)(c,he);return console.log(t,a),Object(P.jsxs)(u.a,{component:"div",children:[Object(P.jsx)("img",Object(G.a)({alt:r,style:Object(G.a)(Object(G.a)({},i),{},{width:t.width,padding:0})},s)),Object(P.jsx)(I.a,{size:"medium",sx:{color:"black",bgcolor:Object(be.a)("#fff",.4),position:"absolute",top:10,right:12},onClick:function(){return function(e){var t=n.find((function(t){return t.alt===e}));o(t)}(r)},children:Object(P.jsx)(je.a,{size:"medium"})})]})}})]}):j&&"thumbnail"===f?Object(P.jsxs)(O.a,{direction:"column",spacing:2,sx:{p:2},children:[C,w,Object(P.jsx)(fe,{images:n,handlePhotoClick:a,renderPhoto:function(e){var t=e.layout,a=e.layoutOptions,r=e.imageProps,o=r.alt,i=r.style,s=Object(ae.a)(r,me);return console.log(a),Object(P.jsxs)(u.a,{component:"div",children:[Object(P.jsx)("img",Object(G.a)({alt:o,style:Object(G.a)(Object(G.a)({},i),{},{width:t.width,padding:0})},s)),Object(P.jsx)(oe.a,{control:Object(P.jsx)(re.a,{}),label:"",checked:o===v,onChange:function(){return function(e){console.log("name",e),console.log("images",n),k(e);var t=n.find((function(t){return t.alt===e}));console.log("thumbnail image",t),c(t)}(o)},sx:{pr:1,position:"absolute",bgcolor:Object(be.a)("#fff",.6),color:"black",borderRadius:"0px 5px 5px 0px",borderColor:"secondary.main",borderLeft:0,bottom:20,left:15}})]})}})]}):j&&"add"===f||j&&!f?Object(P.jsxs)(O.a,{direction:"column",spacing:2,sx:{p:2},children:[C,w,Object(P.jsx)(fe,{images:n,handlePhotoClick:a})]}):void 0:Object(P.jsx)(fe,{images:n,handlePhotoClick:a})}fe.defaultProps={renderPhoto:null},xe.defaultProps={onClick:function(){}};var pe=n(150),ye=n(165);function ve(e){return!1===e.preview?Object(P.jsx)(O.a,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:Object(P.jsx)(d.a,{href:"/",underline:"none",children:Object(P.jsxs)(u.a,{variant:"contained",component:"label",sx:{color:"primary.main",backgroundColor:"button.main",padding:"6px 8px",boxShadow:0,"&:hover":{backgroundColor:"button.main"}},children:[Object(P.jsx)(m.a,{size:"medium",sx:{paddingRight:1}}),Object(P.jsx)(x.a,{variant:"body1",color:"muted.main",children:"Memories"})]})})}):null}function ke(e){var t=e.memTitle,n=e.memDate,o=e.memEditorState,l=e.memImages,d=e.bucket,j=e.memoryID,h=e.authURL,m=e.preview,w=Object(s.useState)(!1),C=Object(r.a)(w,2),S=C[0],E=C[1],I=Object(s.useState)(!1),z=Object(r.a)(I,2),M=z[0],D=z[1],R=Object(s.useState)(0),U=Object(r.a)(R,2),T=U[0],L=U[1],B=Object(s.useState)(t),F=Object(r.a)(B,2),Y=F[0],W=F[1],H=Object(s.useState)(n),J=Object(r.a)(H,2),X=J[0],q=J[1],K=Object(s.useState)(o),G=Object(r.a)(K,2),Q=G[0],Z=G[1],$=Object(s.useState)(l),_=Object(r.a)($,2),te=_[0],ae=_[1],ce=Object(s.useState)(null),re=Object(r.a)(ce,2),oe=re[0],ie=re[1],se=Object(s.useState)(null),le=Object(r.a)(se,2),ue=le[0],de=le[1],je=Object(s.useState)([]),be=Object(r.a)(je,2),he=be[0],me=be[1],xe=Object(s.useState)(null),Oe=Object(r.a)(xe,2),fe=Oe[0],ke=Oe[1],we=Object(s.useState)([]),Ce=Object(r.a)(we,2),Se=Ce[0],Ee=Ce[1],Ie=Object(s.useState)(!1),ze=Object(r.a)(Ie,2),Me=ze[0],De=ze[1],Pe=Object(s.useState)(null),Re=Object(r.a)(Pe,2),Ue=Re[0],Te=Re[1],Le=Object(s.useState)(null),Be=Object(r.a)(Le,2),Ne=Be[0],Ae=Be[1];console.log("images",te);var Fe=te.length;Object(s.useEffect)((function(){return W(t)}),[t]),Object(s.useEffect)((function(){return q(n)}),[n]),Object(s.useEffect)((function(){return Z(o)}),[o]),Object(s.useEffect)((function(){return ae(l)}),[l]);var Ye=function(e){console.log("Setting snack message",e),de(e)},We=function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe.a.updateMemoryDetails(d,h,j,t,n);case 3:return a=e.sent,Ye(a?"Memory ".concat(t," updated successfully"):"Error while updating memory ".concat(t)),ie(!0),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),He=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe.a.updateMemoryImage(d,h,j,"thumbnail",t);case 3:return n=e.sent,console.log("Response",n),n.ok?Ye("Memory thumbnail updated successfully"):Ye("Error while updating memory thumbnail"),ie(!0),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),Je=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(te.length>1)){e.next=9;break}return e.next=4,pe.a.updateMemoryImage(d,h,j,"delete",t);case 4:n=e.sent,console.log("Response",n),n?(console.log("set snack message - successfully deleted memory image"),Ye("Memory image deleted successfully"),ae(te.filter((function(e){return e.title!==t.title})))):(console.log("set snack message - error while deleting memory image"),Ye("Error while deleting memory image")),e.next=11;break;case 9:console.log("set snack message - atleast one image is needed for memory"),Ye("Atleast 1 image is needed for memory. Unable to delete");case 11:return ie(!0),e.abrupt("return",n);case 15:return e.prev=15,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),Xe=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("addImage details",t),e.next=4,pe.a.updateMemoryImage(d,h,j,"add",t);case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),qe=function(){var e=Object(c.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(a.a)(he.entries()),e.prev=1,c=i.a.mark((function e(){var t,a,c,o,s,l,u,d,b,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(r.a)(n.value,2),a=t[0],c=t[1],o=Object(r.a)(c,3),s=o[0],l=o[1],u=o[2],console.log(s.name,u),e.next=5,Xe(s).then((function(e){return e.text()}));case 5:return d=e.sent,console.log("response for ",s.name,d),b={key:"memories/".concat(j,"/images/").concat(s.name),src:u,alt:s.name,title:s.name,width:s.width,height:s.height,images:[]},e.next=10,fetch(d,{body:l,method:"PUT"});case 10:h=e.sent,console.log("upload response",h),h.ok?(console.log("Setting snack message - image ".concat(s.name," add success")),Ye("Memory image ".concat(a+1," / ").concat(fe," added successfully")),Te("Images uploaded: ".concat(a+1," / ").concat(fe," ")),ie(!0),ae((function(e){return e.concat([b])}))):(console.log("Setting snack message - error uploading image"),Ye("Error while uploading memory image"),Ae("Error while uploading memory image"),ie(!0),Ee((function(e){return e.concat([s.name])})));case 13:case"end":return e.stop()}}),e)})),t.s();case 4:if((n=t.n()).done){e.next=8;break}return e.delegateYield(c(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),t.e(e.t1);case 13:return e.prev=13,t.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)(Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(he.length!==fe){e.next=14;break}return De(!0),console.log(he,fe),e.next=5,qe();case 5:console.log("Resetting new image count and images"),console.log("Add done"),Se.length>0?(Ye("Error while uploading ".concat(Se.length," memory images")),Ae("Error while uploading ".concat(Se.length," images")),ie(!0)):(Ye("".concat(he.length," image(s) uploaded successfully")),Ae("".concat(he.length," image(s) uploaded successfully")),ie(!0)),Ee([]),ke(null),me([]),setTimeout((function(){De(!1),Ae(null),Te(null)}),3e3),e.next=15;break;case 14:he.length>0&&(Ye("Preparing images for upload. Please wait..."),Te("Preparing images for upload...."),ie(!0));case 15:case"end":return e.stop()}}),e)}))),[he]);var Ke=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.files&&(n=Array.from(t.target.files),console.log("files to add:",n.length,"exsting images:",te.length),ke(n.length),te.length+n.length<=15?(n.forEach((function(e){var t=new Image;t.onload=function(){var t=Object(c.a)(i.a.mark((function t(n){var a,c,r,o,s,l,u,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.target.naturalHeight,c=n.target.naturalWidth,r=e.size/1048576,o=e.name,s=[500,1e3,1500].map((function(e){return{height:e,width:Math.ceil(e*c/a)}})),l=Date.now(),u="".concat(l,"-").concat(o),d=[{name:u,size:r,height:a,width:c,images:s},e,n.target.src],me((function(e){return e.concat([d])}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.src=URL.createObjectURL(e)})),n.map((function(e){return URL.revokeObjectURL(e)}))):(console.log("Setting snack message - error adding image as exceeding 15"),Ye("Unable to add ".concat(n.length," images. Maximum images allowed pre memory is 15")),ie(!0)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ve=Object(P.jsx)(V,{editable:M,text:Y,handleTitleUpdate:function(e){We("title",e)&&W(e)}}),Ge=Object(P.jsx)(ee,{editable:M,prevDate:X,handleDateUpdate:function(e){We("date",e)&&q(e)}}),Qe=Object(P.jsx)(ne,{editable:M,prevEditorState:Q,handleEditorStateUpdate:function(e,t){We("story",e)&&Z(t)}}),Ze=Object(P.jsx)(ge,{editable:M,images:te,handlePhotoClick:function(e,t,n){E(!0),L(n)},handleThumbnailUpdate:He,deleteImage:Je,addImage:Ke}),$e=Object(P.jsxs)(u.a,{variant:"contained",component:"label",onClick:function(){return D(!1)},sx:{color:"primary.main",borderRadius:5,backgroundColor:"button.main",padding:"6px 8px"},children:[Object(P.jsx)(b.a,{size:"medium",sx:{paddingRight:1}}),Object(P.jsx)(x.a,{variant:"body1",color:"muted.main",children:"Edit"})]});return console.log("preview",m),Object(P.jsxs)(P.Fragment,{children:[M?Object(P.jsx)(O.a,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:$e}):Object(P.jsx)(ve,{preview:m}),Object(P.jsx)(k.a,{component:"div",sx:{backgroundColor:"button.main",margin:M?"5px":0},children:Object(P.jsx)(A.a,{header:Ve,subheader:Ge,photoLayout:Ze,storyLayout:Qe,memoryID:j,bucket:d,authURL:h,handleEditClick:function(){return D(!0)},preview:m})}),Object(P.jsx)(N,{open:S,title:Y,date:X,images:te,index:T,handleNext:function(){L((function(e){return(e+1)%Fe}))},handleBack:function(){L((function(e){return(e-1+Fe)%Fe}))},handleClose:function(){return E(!1)}}),Object(P.jsx)(ye.a,{snackBarOpen:oe,message:ue,onClose:function(){console.log("snack close, set snack false, message null"),ie(!1),de(null)}}),Object(P.jsx)(f.a,{open:Me,fullWidth:!0,sx:{p:1},children:Object(P.jsxs)(g.a,{sx:{maxWidth:1,p:1},children:[Object(P.jsx)(p.a,{title:"Adding Images",sx:{textAlign:"center"}}),Object(P.jsx)(v.a,{}),Object(P.jsxs)(y.a,{children:[Object(P.jsx)(x.a,{variant:"h6",sx:{color:"muted.main"},children:Ue}),Object(P.jsx)(O.a,{justifyContent:"center",sx:{py:2},children:Object(P.jsx)(x.a,{variant:"h5",children:Ne})})]})]})})]})}ke.defaultProps={memTitle:"Memory Title",memDate:"Memory Date",memEditorState:l.EditorState.createWithText("Memory Text")}},680:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(11),c=n(136),r=n(137),o=n.n(r),i=n(4),s=n(0),l=n(147),u=n(150),d=n(219),j=n(259),b=n(686),h=n(250),m=n(220),x=n(350),O=[{key:1,src:x.a,width:667,height:500},{key:2,src:x.a,width:667,height:500},{key:3,src:x.a,width:375,height:500},{key:4,src:x.a,width:667,height:500},{key:5,src:x.a,width:375,height:500},{key:6,src:x.a,width:667,height:500},{key:7,src:x.a,width:667,height:500},{key:8,src:x.a,width:667,height:500},{key:9,src:x.a,width:667,height:500},{key:10,src:x.a,width:667,height:500},{key:11,src:x.a,width:375,height:500},{key:12,src:x.a,width:375,height:500},{key:13,src:x.a,width:375,height:500},{key:14,src:x.a,width:375,height:500},{key:15,src:x.a,width:667,height:500}],f=n(2);function g(){return Object(f.jsx)(m.a,{header:Object(f.jsx)(b.a,{type:"rectangular",sx:{width:{lg:"20%",md:"30%",xs:"70%"}}}),subheader:Object(f.jsx)(b.a,{type:"rectangular",sx:{width:{lg:"15%",md:"20%",xs:"60%"}}}),photoLayout:Object(f.jsx)(h.a,{layout:"rows",photos:O,spacing:2}),storyLayout:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}})]})})}var p=n(165);function y(e,t,n,a,c){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(o.a.mark((function e(t,n,a,c,r){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.viewMemory(t,n,a);case 3:if(i=e.sent,console.log(i),!i.status){e.next=8;break}return r(i),e.abrupt("return");case 8:c(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function k(e){var t=e.bucket,n=e.authURL,c=Object(i.h)().memoryId,r=Object(s.useState)(),o=Object(a.a)(r,2),u=o[0],b=o[1],h=Object(s.useState)(null),m=Object(a.a)(h,2),x=m[0],O=m[1],v=Object(s.useState)(null),k=Object(a.a)(v,2),w=k[0],C=k[1],S=function(e){return b(e)},E=Object(s.useState)(null),I=Object(a.a)(E,2),z=I[0],M=I[1],D=function(e){console.log("Setting snack message",e),C(e)},P=function(){console.log("snack close, set snack false, message null"),O(!1),C(null)},R=function(e){"unauthenticated"===e.status&&(D("You have been logged out. Navigating to login page"),O(!0),setInterval((function(){return M("unauthenticated")}),3e3)),"forbidden"===e.status&&(D("You do not have access to this memory. Navigating to memories page"),O(!0),setInterval((function(){return M("forbidden")}),3e3))};return Object(s.useEffect)((function(){y(t,n,c,S,R);var e=setInterval((function(){return y(t,n,c,S,R)}),3e5);return function(){return clearInterval(e)}}),[]),"unauthenticated"===z?Object(f.jsx)(i.a,{to:"/login"}):"forbidden"===z?Object(f.jsx)(i.a,{to:"/memories"}):(console.log("memory",u,"memError",z),u?Object(f.jsxs)(d.a,{children:[Object(f.jsx)(j.a,{memTitle:u.title,memDate:u.date,memImages:u.pictures.photos,memEditorState:l.EditorState.createWithContent(Object(l.convertFromRaw)(u.contentState)),memoryID:c,bucket:t,authURL:n,preview:!1}),Object(f.jsx)(p.a,{snackBarOpen:x,message:w,onClose:P})]}):Object(f.jsxs)(d.a,{children:[Object(f.jsx)(g,{}),Object(f.jsx)(p.a,{snackBarOpen:x,message:w,onClose:P})]}))}}}]);
//# sourceMappingURL=9.8ad20a25.chunk.js.map