(this.webpackJsonpprelaunch=this.webpackJsonpprelaunch||[]).push([[9],{165:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(11),c=n(0),r=n(676),o=n(687),i=n(144),s=n.n(i),l=n(113),u=n(210),d=n.n(u),j=n(50),b=n(3);function h(e){var t=e.snackBarOpen,n=e.message,i=e.onClose,u=e.error,h=Object(c.useState)(t),m=Object(a.a)(h,2),x=m[0],O=m[1],f=Object(c.useState)(n),g=Object(a.a)(f,2),p=g[0],y=g[1];Object(c.useEffect)((function(){return O(t)}),[t]),Object(c.useEffect)((function(){return y(n)}),[n]);var v=function(){O(!1),y(null),i()},k=Object(b.jsx)(o.a,{size:"small","aria-label":"close",color:"inherit",onClick:v,children:Object(b.jsx)(s.a,{fontSize:"small"})});return console.log("in snackbar",x,n),Object(b.jsx)(r.a,{open:x,autoHideDuration:3e3,onClose:v,message:function(){return!0===u?Object(b.jsxs)(l.a,{direction:"row",spacing:2,justifyContents:"space-between",alignItems:"center",children:[Object(b.jsx)(s.a,{fontSize:"small",sx:{color:"error"}}),Object(b.jsx)(j.a,{children:p})]}):Object(b.jsxs)(l.a,{direction:"row",spacing:2,justifyContents:"space-between",alignItems:"center",children:[Object(b.jsx)(d.a,{fontSize:"small",sx:{color:"success"}}),Object(b.jsx)(j.a,{children:p})]})},action:k,anchorOrigin:{vertical:"top",horizontal:"center"}})}h.defaultProps={error:!1}},179:function(e,t,n){},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(11),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];Object(c.useEffect)((function(){return o(e)}),[e]);return[r,o,function(e){o(e.target.value)}]}},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(11),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];return[r,o,function(e){var t=new Date(e);if(e){var n=t.toLocaleDateString("en-in",{day:"numeric",month:"long",year:"numeric"});o(n)}else o(null)}]}},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(11),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];return[r,o,function(e){return o(e)}]}},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(687),c=n(144),r=n.n(c),o=n(108),i=n(3);function s(e){var t=e.size,n=e.handleClick;return Object(i.jsx)(a.a,{size:t,sx:{color:"black",bgcolor:Object(o.a)("#fff",.4),position:"absolute",top:10,right:12},onClick:n,children:Object(i.jsx)(r.a,{size:t})})}s.defaultProps={size:"small"}},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var a=n(11),c=n(136),r=n(137),o=n.n(r),i=n(0),s=n(4),l=n(689),u=n(693),d=n(94),j=n(211),b=n.n(j),h=n(665),m=n(146),x=n(653),O=n(687),f=n(149),g=n.n(f),p=n(3);function y(){return Object(p.jsxs)(d.a,{sx:{alignItems:"center"},onClick:function(){},children:[Object(p.jsx)(O.a,{"aria-label":"update",sx:{bgcolor:"form.input"},onClick:function(){},children:Object(p.jsx)(g.a,{})}),"Edit"]})}var v=n(209),k=n.n(v);function w(){return Object(p.jsxs)(d.a,{sx:{alignItems:"center"},children:[Object(p.jsx)(O.a,{"aria-label":"delete",sx:{bgcolor:"form.input"},children:Object(p.jsx)(k.a,{})}),"Delete"]})}var C=n(165),S=n(622),E=n(694),I=n(688),z=n(681),M=n(50),D=n(113),R=n(662);function P(e){var t=e.confirm,n=e.handleCallback,c=e.handleCloseCallback,r=e.title,o=e.message,s=Object(i.useState)(t),l=Object(a.a)(s,2),u=l[0],j=l[1];Object(i.useEffect)((function(){return j(t)}),[t]);var b=function(){j(!1),c()};return console.log("in confirm",u),Object(p.jsxs)(I.a,{open:u,sx:{backgroundColor:"faded.black"},children:[Object(p.jsx)(R.a,{children:r}),Object(p.jsxs)(d.a,{sx:{p:2},children:[Object(p.jsx)(M.a,{sx:{pb:2},children:o}),Object(p.jsxs)(D.a,{spacing:2,direction:"row",children:[Object(p.jsx)(z.a,{variant:"contained",onClick:b,children:"Cancel"}),Object(p.jsx)(z.a,{variant:"outlined",onClick:function(){b(),n()},children:"OK"})]})]})]})}function U(e){var t=e.deleteItem,n=e.updateItem,c=e.snackBar,r=e.confirmMessage,o=e.handleDeleteObject,s=e.handleEditClick,l=Object(i.useState)(!1),u=Object(a.a)(l,2),d=u[0],j=u[1],h=Object(i.useState)(null),m=Object(a.a)(h,2),x=m[0],O=m[1],f=Boolean(x),g=function(){return O(null)};return Object(p.jsxs)("div",{children:[Object(p.jsx)(b.a,{onClick:function(e){return O(e.currentTarget)}}),Object(p.jsxs)(S.a,{id:"basic-menu",anchorEl:x,open:f,onClose:g,MenuListProps:{"aria-labelledby":"basic-button"},sx:{borderRadius:"10px"},children:[Object(p.jsx)(E.a,{onClick:function(){s(),g()},children:n}),Object(p.jsx)(E.a,{onClick:function(){j(!0),g()},children:t})]}),Object(p.jsx)(P,{title:"Delete Memory",confirm:d,handleCallback:o,handleCloseCallback:function(){return j(!1)},message:r}),c]})}var L=n(150);function T(){return(T=Object(c.a)(o.a.mark((function e(t,n,a,c){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.deleteMemory(t,n,a);case 3:r=e.sent,c(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function B(e){var t,n=e.header,c=e.subheader,r=e.photoLayout,o=e.storyLayout,j=e.bucket,O=e.memoryID,f=e.authURL,g=e.handleEditClick,v=e.preview,k=Object(i.useState)(null),S=Object(a.a)(k,2),E=S[0],I=S[1],z=Object(i.useState)(null),M=Object(a.a)(z,2),D=M[0],R=M[1],P=Object(m.a)();t=Object(x.a)(P.breakpoints.down("lg"))?"":"vertical-scroll";var L=function(e){return R(e)},B=function(e){"ok"===e.status?L("Memory deleted successfully"):L("Error while deleting memory"),I(!0)},N=Object(p.jsx)(C.a,{snackBarOpen:E,message:D,onClose:function(){I(!1)}}),A=v?Object(p.jsx)(b.a,{}):Object(p.jsx)(U,{confirmMessage:"Do you want to delete this memory?",snackBar:N,handleDeleteObject:function(){!function(e,t,n,a){T.apply(this,arguments)}(j,f,O,B)},deleteItem:Object(p.jsx)(w,{}),updateItem:Object(p.jsx)(y,{}),handleEditClick:g});return console.log("Rendering",E,D),!1===E?Object(p.jsx)(s.a,{to:"/memories",replace:!0}):Object(p.jsxs)(l.a,{sx:{boxShadow:0,bgcolor:"button.main",p:1},children:[Object(p.jsx)(u.a,{title:n,subheader:c,action:A}),Object(p.jsx)(h.a,{}),Object(p.jsxs)(d.a,{sx:{display:"flex",justifyContent:"flex-start",flexDirection:{lg:"row",xs:"column"},height:{lg:"72vh"},my:1},children:[Object(p.jsx)(d.a,{sx:{width:{lg:"70%",xs:"100%"},overflowY:"scroll",borderRadius:5},className:t,children:r}),Object(p.jsx)(d.a,{sx:{width:{lg:"30%",sx:"100%"},overflowY:"scroll",mt:{lg:0,xs:2},p:{lg:1},px:1},className:t,children:o})]})]})}},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return ke}));var a=n(53),c=n(136),r=n(11),o=n(137),i=n.n(o),s=n(0),l=n(147),u=n(681),d=n(692),j=n(210),b=n.n(j),h=n(326),m=n.n(h),x=n(50),O=n(113),f=n(688),g=n(689),p=n(693),y=n(691),v=n(665),k=n(94),w=n(323),C=n.n(w),S=n(322),E=n.n(S),I=n(687),z=n(316),M=n.n(z),D=n(319),R=n(3),P=Object(D.bindKeyboard)(Object(D.autoPlay)(Object(D.virtualize)(M.a)));function U(e){var t=e.ind,n=e.images,a=e.handleNext,c=e.handleStepChange,o=Object(s.useState)(t),i=Object(r.a)(o,2),l=i[0],u=i[1],d=Object(s.useState)(0),j=Object(r.a)(d,2),b=j[0],h=j[1],m=Object(s.useState)(null),x=Object(r.a)(m,2),O=x[0],f=x[1];Object(s.useEffect)((function(){u(t)}),[t]),Object(s.useEffect)((function(){b<n.length?f("none"):f("flex")}),[b]);var g=function(){return h((function(e){return e+1}))};return console.log(n,l,t),Object(R.jsx)(P,{index:l,onChangeIndex:c,enableMouseEvents:!0,animateTransitions:!0,interval:1e4,onClick:a,style:{backgroundColor:"muted.main"},slideRenderer:function(e){var t=e.index,a=e.key,c=function(e,t){var n=e%t;return n<0?n+t:n}(t,n.length);console.log(t,a,n.length,c);var r=(n[c].images?n[c].images.map((function(e){var t=e.src,n=e.width;return"".concat(t," ").concat(n,"w")})):[]).join(",");return Object(R.jsx)(k.a,{component:"img",onLoad:g,sx:{display:{display:O},justifyContents:"center",width:"100%",bgcolor:"#1c1c1c"},src:n[c].src,srcSet:r,style:{display:"block",boxSizing:"content-box",cursor:"pointer",objectFit:"contain",height:"100vh"},alt:n[c].src},a)}})}U.defaultProps={ind:0};var L=n(208);function T(e){var t=e.handleClick;return Object(R.jsx)(I.a,{edge:"start",color:"primary","aria-label":"close",onClick:t,sx:{position:"absolute",top:"50%",right:0,transform:"translate(0%, -50%)"},children:Object(R.jsx)(E.a,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function B(e){var t=e.handleClick;return Object(R.jsx)(I.a,{edge:"start",color:"primary","aria-label":"close",onClick:t,sx:{position:"absolute",top:"50%",left:0,transform:"translate(0%, -50%)"},children:Object(R.jsx)(C.a,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function N(e){var t=e.open,n=e.title,a=e.date,c=e.images,r=e.index,o=e.handleNext,i=e.handleBack,s=e.handleClose,l=e.handleChange;return Object(R.jsxs)(f.a,{open:t,fullScreen:!0,children:[Object(R.jsx)(U,{images:c,ind:r,handleNext:o,handleStepChange:l}),Object(R.jsx)(p.a,{title:n,subheader:a,sx:{position:"absolute",top:10,left:10,bgcolor:"button.main",borderRadius:3,padding:1}}),Object(R.jsx)(B,{handleClick:i}),Object(R.jsx)(T,{handleClick:o}),Object(R.jsx)(L.a,{size:"large",handleClick:s})]})}N.defaultProps={index:0};var A=n(221),Y=n(671),F=n(166),W=n.n(F),H=n(167),J=n.n(H),K=n(149),X=n.n(K),q=n(199);function V(e){var t=e.editable,n=e.text,a=e.handleTitleUpdate,c=Object(q.a)(n),o=Object(r.a)(c,3),i=o[0],l=o[1],u=o[2],d=Object(s.useState)(t),j=Object(r.a)(d,2),b=j[0],h=j[1],m=Object(s.useState)(!1),f=Object(r.a)(m,2),g=f[0],p=f[1];return Object(s.useEffect)((function(){h(t),l(n),p(!1)}),[t]),console.log("Memory Title ",b,g,i),b||g?b&&!g?Object(R.jsxs)(O.a,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[Object(R.jsx)(x.a,{variant:"h6",children:i}),Object(R.jsx)(X.a,{fontSize:"medium",onClick:function(){return p(!0)}})]}):b&&g?Object(R.jsxs)(O.a,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start"},spacing:2,children:[Object(R.jsx)(Y.a,{id:"standard-basic",size:"small",label:"Title",onChange:u,variant:"standard",defaultValue:i,sx:{maxWidth:"200px"}}),Object(R.jsx)(W.a,{fontSize:"medium",onClick:function(){console.log(i),a(i),p(!1)}}),Object(R.jsx)(J.a,{fontSize:"medium",onClick:function(){l(n),p(!1)}})]}):void 0:Object(R.jsx)(x.a,{variant:"h6",children:i})}var G=n(51),Q=n(669),Z=n(512),$=n(668),_=n(200);function ee(e){var t=e.editable,n=e.prevDate,a=e.handleDateUpdate,c=Object(s.useState)(t),o=Object(r.a)(c,2),i=o[0],l=o[1],u=Object(s.useState)(!1),d=Object(r.a)(u,2),j=d[0],b=d[1],h=Object(_.a)(n),m=Object(r.a)(h,3),f=m[0],g=m[1],p=m[2];return Object(s.useEffect)((function(){l(t),g(n),b(!1)}),[t,n]),console.log("Memory Date ",i,j,f),i||j?i&&!j?Object(R.jsxs)(O.a,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[Object(R.jsx)(x.a,{children:f}),Object(R.jsx)(X.a,{fontSize:"medium",onClick:function(){return b(!0)}})]}):i&&j?Object(R.jsxs)(O.a,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start",mt:3},spacing:2,children:[Object(R.jsx)(Z.a,{dateAdapter:$.a,children:Object(R.jsx)(Q.a,{label:"Memory Date",value:f,onChange:p,placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return Object(R.jsx)(Y.a,Object(G.a)({readOnly:!0,required:!0},e))}})}),Object(R.jsx)(W.a,{fontSize:"medium",onClick:function(){a(f),b(!1)}}),Object(R.jsx)(J.a,{fontSize:"medium",onClick:function(){g(n),b(!1)}})]}):void 0:Object(R.jsx)(x.a,{children:f})}var te=n(201);n(179);function ne(e){var t=e.editable,n=e.prevEditorState,a=e.handleEditorStateUpdate,c=Object(s.useState)(t),o=Object(r.a)(c,2),i=o[0],u=o[1],d=Object(s.useState)(!1),j=Object(r.a)(d,2),b=j[0],h=j[1],m=Object(te.a)(n),f=Object(r.a)(m,3),g=f[0],p=f[1],y=f[2],w=Object(s.useRef)();return Object(s.useEffect)((function(){u(t),p(n),h(!1)}),[t,n]),console.log("Memory Title ",i,b),i||b?i&&!b?Object(R.jsxs)(O.a,{direction:"column",spacing:2,children:[Object(R.jsxs)(O.a,{direction:"row",spacing:2,justifyContent:"flex-end",children:[Object(R.jsx)(x.a,{sx:{color:"muted.main"},children:"Edit Story"}),Object(R.jsx)(X.a,{fontSize:"medium",onClick:function(){h(!0)}})]}),Object(R.jsx)(v.a,{sx:{width:1}}),Object(R.jsx)(l.Editor,{readOnly:!0,editorState:g})]}):i&&b?Object(R.jsxs)(O.a,{direction:"column",spacing:2,children:[Object(R.jsxs)(O.a,{direction:"row",spacing:2,justifyContent:"flex-end",children:[Object(R.jsx)(x.a,{sx:{color:"muted.main"},children:"Editing Story"}),Object(R.jsx)(W.a,{fontSize:"medium",onClick:function(){a(JSON.stringify(Object(l.convertToRaw)(g.getCurrentContent())),g),h(!1)}}),Object(R.jsx)(J.a,{fontSize:"medium",onClick:function(){p(n),h(!1)}})]}),Object(R.jsx)(v.a,{sx:{width:1}}),Object(R.jsx)(k.a,{sx:{p:2,m:1,my:2,border:1,borderColor:"primary.main",bgcolor:"input.background",minHeight:"200px",borderRadius:5,width:"90%"},onClick:function(){return w.current.focus()},children:Object(R.jsx)(l.Editor,{autoFocus:!0,onChange:y,editorState:g,ref:w})})]}):void 0:Object(R.jsx)(l.Editor,{readOnly:!0,editorState:g})}var ae=n(250),ce=n(251),re=n(674),oe=n(695),ie=n(209),se=n.n(ie),le=n(325),ue=n.n(le),de=n(144),je=n.n(de),be=n(108),he=["alt","style"],me=["alt","style"];function xe(e){var t=e.children,n=e.onClick,a=e.name,c=e.updateOp;return Object(R.jsx)(u.a,{id:a,variant:"contained",component:"label",onClick:n,sx:{color:c===a?"button.main":"muted.main",borderRadius:5,backgroundColor:c===a?"primary.main":"button.main",padding:"6px 8px","&:hover":{color:c===a?"button.main":"muted.main",backgroundColor:c===a?"primary.main":"button.main"}},children:t})}function Oe(e){var t=e.handleChange,n=e.onClick,a=e.updateOp;return Object(R.jsxs)(xe,{onClick:n,name:"add",updateOp:a,children:[Object(R.jsx)("input",{type:"file",hidden:!0,multiple:!0,accept:"image/*",onChange:t}),Object(R.jsx)(ue.a,{sx:{fontSize:"1.5rem"}}),"Add"]})}function fe(e){var t=e.images,n=e.handlePhotoClick,a=e.renderPhoto,c=Object(s.useState)(null),o=Object(r.a)(c,2),i=o[0],l=o[1];return Object(s.useEffect)((function(){var e=0,n=0;t.forEach((function(t){t.height>t.width?n+=1:e+=1})),l(e>n?"rows":"columns")}),[t]),a?Object(R.jsx)(ce.a,{layout:i,photos:t,onClick:n,spacing:2,renderPhoto:a}):Object(R.jsx)(ce.a,{layout:i,photos:t,onClick:n,spacing:2})}function ge(e){var t=e.editable,n=e.images,a=e.handlePhotoClick,c=e.handleThumbnailUpdate,o=e.deleteImage,i=e.addImage,l=Object(s.useState)(t),d=Object(r.a)(l,2),j=d[0],b=d[1],h=Object(s.useState)(null),m=Object(r.a)(h,2),f=m[0],g=m[1],p=Object(s.useState)(null),y=Object(r.a)(p,2),v=y[0],k=y[1],w=function(e){g(f===e?null:e)};console.log("memory images",f,j),Object(s.useEffect)((function(){b(t),g(null)}),[t]);var C=Object(R.jsxs)(O.a,{direction:"row",spacing:2,children:[Object(R.jsx)(Oe,{handleChange:i,onClick:function(){return w("add")},updateOp:f}),Object(R.jsxs)(xe,{onClick:function(){return w("delete")},name:"delete",updateOp:f,children:[Object(R.jsx)(se.a,{sx:{fontSize:"1.5rem"}}),"Delete"]}),Object(R.jsx)(xe,{onClick:function(){return w("thumbnail")},name:"thumbnail",updateOp:f,children:"Set Thumbnail"})]}),S=Object(R.jsx)(O.a,{direction:"row",children:Object(R.jsxs)(x.a,{variant:"h6",color:"muted.main",children:["Images:",n.length]})});return j?j&&"delete"===f?Object(R.jsxs)(O.a,{direction:"column",spacing:2,sx:{p:2},children:[S,C,Object(R.jsx)(fe,{images:n,handlePhotoClick:a,renderPhoto:function(e){var t=e.layout,a=e.layoutOptions,c=e.imageProps,r=c.alt,i=c.style,s=Object(ae.a)(c,he);return console.log(t,a),Object(R.jsxs)(u.a,{component:"div",children:[Object(R.jsx)("img",Object(G.a)({alt:r,style:Object(G.a)(Object(G.a)({},i),{},{width:t.width,padding:0})},s)),Object(R.jsx)(I.a,{size:"medium",sx:{color:"black",bgcolor:Object(be.a)("#fff",.4),position:"absolute",top:10,right:12},onClick:function(){return function(e){var t=n.find((function(t){return t.alt===e}));o(t)}(r)},children:Object(R.jsx)(je.a,{size:"medium"})})]})}})]}):j&&"thumbnail"===f?Object(R.jsxs)(O.a,{direction:"column",spacing:2,sx:{p:2},children:[S,C,Object(R.jsx)(fe,{images:n,handlePhotoClick:a,renderPhoto:function(e){var t=e.layout,a=e.layoutOptions,r=e.imageProps,o=r.alt,i=r.style,s=Object(ae.a)(r,me);return console.log(a),Object(R.jsxs)(u.a,{component:"div",children:[Object(R.jsx)("img",Object(G.a)({alt:o,style:Object(G.a)(Object(G.a)({},i),{},{width:t.width,padding:0})},s)),Object(R.jsx)(oe.a,{control:Object(R.jsx)(re.a,{}),label:"",checked:o===v,onChange:function(){return function(e){console.log("name",e),console.log("images",n),k(e);var t=n.find((function(t){return t.alt===e}));console.log("thumbnail image",t),c(t)}(o)},sx:{pr:1,position:"absolute",bgcolor:Object(be.a)("#fff",.6),color:"black",borderRadius:"0px 5px 5px 0px",borderColor:"secondary.main",borderLeft:0,bottom:20,left:15}})]})}})]}):j&&"add"===f||j&&!f?Object(R.jsxs)(O.a,{direction:"column",spacing:2,sx:{p:2},children:[S,C,Object(R.jsx)(fe,{images:n,handlePhotoClick:a})]}):void 0:Object(R.jsx)(fe,{images:n,handlePhotoClick:a})}fe.defaultProps={renderPhoto:null},xe.defaultProps={onClick:function(){}};var pe=n(150),ye=n(165);function ve(e){return!1===e.preview?Object(R.jsx)(O.a,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:Object(R.jsx)(d.a,{href:"/",underline:"none",children:Object(R.jsxs)(u.a,{variant:"contained",component:"label",sx:{color:"primary.main",backgroundColor:"button.main",padding:"6px 8px",boxShadow:0,"&:hover":{backgroundColor:"button.main"}},children:[Object(R.jsx)(m.a,{size:"medium",sx:{paddingRight:1}}),Object(R.jsx)(x.a,{variant:"body1",color:"muted.main",children:"Memories"})]})})}):null}function ke(e){var t=e.memTitle,n=e.memDate,o=e.memEditorState,l=e.memImages,d=e.bucket,j=e.memoryID,h=e.authURL,m=e.preview,w=Object(s.useState)(!1),C=Object(r.a)(w,2),S=C[0],E=C[1],I=Object(s.useState)(!1),z=Object(r.a)(I,2),M=z[0],D=z[1],P=Object(s.useState)(0),U=Object(r.a)(P,2),L=U[0],T=U[1],B=Object(s.useState)(t),Y=Object(r.a)(B,2),F=Y[0],W=Y[1],H=Object(s.useState)(n),J=Object(r.a)(H,2),K=J[0],X=J[1],q=Object(s.useState)(o),G=Object(r.a)(q,2),Q=G[0],Z=G[1],$=Object(s.useState)(l),_=Object(r.a)($,2),te=_[0],ae=_[1],ce=Object(s.useState)(null),re=Object(r.a)(ce,2),oe=re[0],ie=re[1],se=Object(s.useState)(null),le=Object(r.a)(se,2),ue=le[0],de=le[1],je=Object(s.useState)([]),be=Object(r.a)(je,2),he=be[0],me=be[1],xe=Object(s.useState)(null),Oe=Object(r.a)(xe,2),fe=Oe[0],ke=Oe[1],we=Object(s.useState)([]),Ce=Object(r.a)(we,2),Se=Ce[0],Ee=Ce[1],Ie=Object(s.useState)(!1),ze=Object(r.a)(Ie,2),Me=ze[0],De=ze[1],Re=Object(s.useState)(null),Pe=Object(r.a)(Re,2),Ue=Pe[0],Le=Pe[1],Te=Object(s.useState)(null),Be=Object(r.a)(Te,2),Ne=Be[0],Ae=Be[1];console.log("images",te);var Ye=te.length;Object(s.useEffect)((function(){return W(t)}),[t]),Object(s.useEffect)((function(){return X(n)}),[n]),Object(s.useEffect)((function(){return Z(o)}),[o]),Object(s.useEffect)((function(){return ae(l)}),[l]);var Fe=function(e){console.log("Setting snack message",e),de(e)},We=function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe.a.updateMemoryDetails(d,h,j,t,n);case 3:return a=e.sent,Fe(a?"Memory ".concat(t," updated successfully"):"Error while updating memory ".concat(t)),ie(!0),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),He=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe.a.updateMemoryImage(d,h,j,"thumbnail",t);case 3:return n=e.sent,console.log("Response",n),n.ok?Fe("Memory thumbnail updated successfully"):Fe("Error while updating memory thumbnail"),ie(!0),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),Je=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(te.length>1)){e.next=9;break}return e.next=4,pe.a.updateMemoryImage(d,h,j,"delete",t);case 4:n=e.sent,console.log("Response",n),n?(console.log("set snack message - successfully deleted memory image"),Fe("Memory image deleted successfully"),ae(te.filter((function(e){return e.title!==t.title})))):(console.log("set snack message - error while deleting memory image"),Fe("Error while deleting memory image")),e.next=11;break;case 9:console.log("set snack message - atleast one image is needed for memory"),Fe("Atleast 1 image is needed for memory. Unable to delete");case 11:return ie(!0),e.abrupt("return",n);case 15:return e.prev=15,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),Ke=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("addImage details",t),e.next=4,pe.a.updateMemoryImage(d,h,j,"add",t);case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Xe=function(){var e=Object(c.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(a.a)(he.entries()),e.prev=1,c=i.a.mark((function e(){var t,a,c,o,s,l,u,d,b,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(r.a)(n.value,2),a=t[0],c=t[1],o=Object(r.a)(c,3),s=o[0],l=o[1],u=o[2],console.log(s.name,u),e.next=5,Ke(s).then((function(e){return e.text()}));case 5:return d=e.sent,console.log("response for ",s.name,d),b={key:"memories/".concat(j,"/images/").concat(s.name),src:u,alt:s.name,title:s.name,width:s.width,height:s.height,images:[]},e.next=10,fetch(d,{body:l,method:"PUT"});case 10:h=e.sent,console.log("upload response",h),h.ok?(console.log("Setting snack message - image ".concat(s.name," add success")),Le("Images uploaded: ".concat(a+1," / ").concat(fe," ")),ae((function(e){return e.concat([b])}))):(console.log("Setting snack message - error uploading image"),Ae("Error while uploading memory image"),Ee((function(e){return e.concat([s.name])})));case 13:case"end":return e.stop()}}),e)})),t.s();case 4:if((n=t.n()).done){e.next=8;break}return e.delegateYield(c(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),t.e(e.t1);case 13:return e.prev=13,t.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)(Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(he.length!==fe){e.next=14;break}return De(!0),console.log(he,fe),e.next=5,Xe();case 5:console.log("Resetting new image count and images"),console.log("Add done"),Se.length>0?Ae("Error while uploading ".concat(Se.length," images")):Ae("".concat(he.length," image(s) uploaded successfully")),Ee([]),ke(null),me([]),setTimeout((function(){De(!1),Ae(null),Le(null)}),3e3),e.next=15;break;case 14:he.length>0&&Le("Preparing images for upload....");case 15:case"end":return e.stop()}}),e)}))),[he]);var qe=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.files&&(n=Array.from(t.target.files),console.log("files to add:",n.length,"exsting images:",te.length),ke(n.length),te.length+n.length<=15?(n.forEach((function(e){var t=new Image;t.onload=function(){var t=Object(c.a)(i.a.mark((function t(n){var a,c,r,o,s,l,u,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.target.naturalHeight,c=n.target.naturalWidth,r=e.size/1048576,o=e.name,s=[500,1e3,1500].map((function(e){return{height:e,width:Math.ceil(e*c/a)}})),l=Date.now(),u="".concat(l,"-").concat(o),d=[{name:u,size:r,height:a,width:c,images:s},e,n.target.src],me((function(e){return e.concat([d])}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.src=URL.createObjectURL(e)})),n.map((function(e){return URL.revokeObjectURL(e)}))):(console.log("Setting snack message - error adding image as exceeding 15"),Fe("Unable to add ".concat(n.length," images. Maximum images allowed per memory is 15")),ie(!0)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ve=Object(R.jsx)(V,{editable:M,text:F,handleTitleUpdate:function(e){We("title",e)&&W(e)}}),Ge=Object(R.jsx)(ee,{editable:M,prevDate:K,handleDateUpdate:function(e){We("date",e)&&X(e)}}),Qe=Object(R.jsx)(ne,{editable:M,prevEditorState:Q,handleEditorStateUpdate:function(e,t){We("story",e)&&Z(t)}}),Ze=Object(R.jsx)(ge,{editable:M,images:te,handlePhotoClick:function(e,t,n){console.log(e,t,n),E(!0),T(n)},handleThumbnailUpdate:He,deleteImage:Je,addImage:qe}),$e=Object(R.jsxs)(u.a,{variant:"contained",component:"label",onClick:function(){return D(!1)},sx:{color:"primary.main",borderRadius:5,backgroundColor:"button.main",padding:"6px 8px"},children:[Object(R.jsx)(b.a,{size:"medium",sx:{paddingRight:1}}),Object(R.jsx)(x.a,{variant:"body1",color:"muted.main",children:"Edit"})]});return console.log("preview",m),Object(R.jsxs)(R.Fragment,{children:[M?Object(R.jsx)(O.a,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:$e}):Object(R.jsx)(ve,{preview:m}),Object(R.jsx)(k.a,{component:"div",sx:{backgroundColor:"button.main",margin:M?"5px":0},children:Object(R.jsx)(A.a,{header:Ve,subheader:Ge,photoLayout:Ze,storyLayout:Qe,memoryID:j,bucket:d,authURL:h,handleEditClick:function(){return D(!0)},preview:m})}),Object(R.jsx)(N,{open:S,title:F,date:K,images:te,index:L,handleNext:function(){T((function(e){return(e+1)%Ye}))},handleBack:function(){T((function(e){return(e-1+Ye)%Ye}))},handleClose:function(){return E(!1)},handleChange:function(e){return T(e)}}),Object(R.jsx)(ye.a,{snackBarOpen:oe,message:ue,onClose:function(){console.log("snack close, set snack false, message null"),ie(!1),de(null)}}),Object(R.jsx)(f.a,{open:Me,fullWidth:!0,sx:{p:1},children:Object(R.jsxs)(g.a,{sx:{maxWidth:1,p:1},children:[Object(R.jsx)(p.a,{title:"Adding Images",sx:{textAlign:"center"}}),Object(R.jsx)(v.a,{}),Object(R.jsxs)(y.a,{children:[Object(R.jsx)(x.a,{variant:"h6",sx:{color:"muted.main"},children:Ue}),Object(R.jsx)(O.a,{justifyContent:"center",sx:{py:2},children:Object(R.jsx)(x.a,{variant:"h5",children:Ne})})]})]})})]})}ke.defaultProps={memTitle:"Memory Title",memDate:"Memory Date",memEditorState:l.EditorState.createWithText("Memory Text")}},680:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(11),c=n(136),r=n(137),o=n.n(r),i=n(4),s=n(0),l=n(147),u=n(150),d=n(220),j=n(260),b=n(686),h=n(251),m=n(221),x=n(350),O=[{key:1,src:x.a,width:667,height:500},{key:2,src:x.a,width:667,height:500},{key:3,src:x.a,width:375,height:500},{key:4,src:x.a,width:667,height:500},{key:5,src:x.a,width:375,height:500},{key:6,src:x.a,width:667,height:500},{key:7,src:x.a,width:667,height:500},{key:8,src:x.a,width:667,height:500},{key:9,src:x.a,width:667,height:500},{key:10,src:x.a,width:667,height:500},{key:11,src:x.a,width:375,height:500},{key:12,src:x.a,width:375,height:500},{key:13,src:x.a,width:375,height:500},{key:14,src:x.a,width:375,height:500},{key:15,src:x.a,width:667,height:500}],f=n(3);function g(){return Object(f.jsx)(m.a,{header:Object(f.jsx)(b.a,{type:"rectangular",sx:{width:{lg:"20%",md:"30%",xs:"70%"}}}),subheader:Object(f.jsx)(b.a,{type:"rectangular",sx:{width:{lg:"15%",md:"20%",xs:"60%"}}}),photoLayout:Object(f.jsx)(h.a,{layout:"rows",photos:O,spacing:2}),storyLayout:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}})]})})}var p=n(165);function y(e,t,n,a,c){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(o.a.mark((function e(t,n,a,c,r){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.viewMemory(t,n,a);case 3:if(i=e.sent,console.log(i),!i.status){e.next=8;break}return r(i),e.abrupt("return");case 8:c(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function k(e){var t=e.bucket,n=e.authURL,c=Object(i.h)().memoryId,r=Object(s.useState)(),o=Object(a.a)(r,2),u=o[0],b=o[1],h=Object(s.useState)(null),m=Object(a.a)(h,2),x=m[0],O=m[1],v=Object(s.useState)(null),k=Object(a.a)(v,2),w=k[0],C=k[1],S=function(e){return b(e)},E=Object(s.useState)(null),I=Object(a.a)(E,2),z=I[0],M=I[1],D=function(e){console.log("Setting snack message",e),C(e)},R=function(){console.log("snack close, set snack false, message null"),O(!1),C(null)},P=function(e){"unauthenticated"===e.status&&(D("You have been logged out. Navigating to login page"),O(!0),setInterval((function(){return M("unauthenticated")}),3e3)),"forbidden"===e.status&&(D("You do not have access to this memory. Navigating to memories page"),O(!0),setInterval((function(){return M("forbidden")}),3e3))};return Object(s.useEffect)((function(){y(t,n,c,S,P);var e=setInterval((function(){return y(t,n,c,S,P)}),3e5);return function(){return clearInterval(e)}}),[]),"unauthenticated"===z?Object(f.jsx)(i.a,{to:"/login"}):"forbidden"===z?Object(f.jsx)(i.a,{to:"/memories"}):(console.log("memory",u,"memError",z),u?Object(f.jsxs)(d.a,{children:[Object(f.jsx)(j.a,{memTitle:u.title,memDate:u.date,memImages:u.pictures.photos,memEditorState:l.EditorState.createWithContent(Object(l.convertFromRaw)(u.contentState)),memoryID:c,bucket:t,authURL:n,preview:!1}),Object(f.jsx)(p.a,{snackBarOpen:x,message:w,onClose:R})]}):Object(f.jsxs)(d.a,{children:[Object(f.jsx)(g,{}),Object(f.jsx)(p.a,{snackBarOpen:x,message:w,onClose:R})]}))}}}]);
//# sourceMappingURL=9.20b0e98a.chunk.js.map