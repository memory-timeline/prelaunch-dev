(this.webpackJsonpprelaunch=this.webpackJsonpprelaunch||[]).push([[9],{163:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(10),c=n(0),r=n(676),o=n(687),i=n(140),s=n.n(i),l=n(3);function u(e){var t=e.snackBarOpen,n=e.message,i=e.onClose,u=Object(c.useState)(t),d=Object(a.a)(u,2),j=d[0],b=d[1],h=Object(c.useState)(n),m=Object(a.a)(h,2),x=m[0],O=m[1];Object(c.useEffect)((function(){return b(t)}),[t]),Object(c.useEffect)((function(){return O(n)}),[n]);var f=function(){b(!1),O(null),i()},g=Object(l.jsx)(o.a,{size:"small","aria-label":"close",color:"inherit",onClick:f,children:Object(l.jsx)(s.a,{fontSize:"small"})});return console.log("in snackbar",j,n),Object(l.jsx)(r.a,{open:j,autoHideDuration:3e3,onClose:f,message:x,action:g,anchorOrigin:{vertical:"top",horizontal:"center"}})}},177:function(e,t,n){},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(10),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];Object(c.useEffect)((function(){return o(e)}),[e]);return[r,o,function(e){o(e.target.value)}]}},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(10),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];return[r,o,function(e){var t=new Date(e);if(e){var n=t.toLocaleDateString("en-in",{day:"numeric",month:"long",year:"numeric"});o(n)}else o(null)}]}},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(10),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];return[r,o,function(e){return o(e)}]}},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(687),c=n(140),r=n.n(c),o=n(106),i=n(3);function s(e){var t=e.size,n=e.handleClick;return Object(i.jsx)(a.a,{size:t,sx:{color:"black",bgcolor:Object(o.a)("#fff",.4),position:"absolute",top:10,right:12},onClick:n,children:Object(i.jsx)(r.a,{size:t})})}s.defaultProps={size:"small"}},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var a=n(10),c=n(134),r=n(135),o=n.n(r),i=n(0),s=n(4),l=n(693),u=n(691),d=n(94),j=n(209),b=n.n(j),h=n(665),m=n(142),x=n(652),O=n(687),f=n(145),g=n.n(f),p=n(3);function y(){return Object(p.jsxs)(d.a,{sx:{alignItems:"center"},onClick:function(){},children:[Object(p.jsx)(O.a,{"aria-label":"update",sx:{bgcolor:"form.input"},onClick:function(){},children:Object(p.jsx)(g.a,{})}),"Edit"]})}var v=n(208),k=n.n(v);function w(){return Object(p.jsxs)(d.a,{sx:{alignItems:"center"},children:[Object(p.jsx)(O.a,{"aria-label":"delete",sx:{bgcolor:"form.input"},children:Object(p.jsx)(k.a,{})}),"Delete"]})}var C=n(163),S=n(621),E=n(694),I=n(692),M=n(682),z=n(50),D=n(653),P=n(662);function R(e){var t=e.confirm,n=e.handleCallback,c=e.handleCloseCallback,r=e.title,o=e.message,s=Object(i.useState)(t),l=Object(a.a)(s,2),u=l[0],j=l[1];Object(i.useEffect)((function(){return j(t)}),[t]);var b=function(){j(!1),c()};return console.log("in confirm",u),Object(p.jsxs)(I.a,{open:u,sx:{backgroundColor:"faded.black"},children:[Object(p.jsx)(P.a,{children:r}),Object(p.jsxs)(d.a,{sx:{p:2},children:[Object(p.jsx)(z.a,{sx:{pb:2},children:o}),Object(p.jsxs)(D.a,{spacing:2,direction:"row",children:[Object(p.jsx)(M.a,{variant:"contained",onClick:b,children:"Cancel"}),Object(p.jsx)(M.a,{variant:"outlined",onClick:function(){b(),n()},children:"OK"})]})]})]})}function U(e){var t=e.deleteItem,n=e.updateItem,c=e.snackBar,r=e.confirmMessage,o=e.handleDeleteObject,s=e.handleEditClick,l=Object(i.useState)(!1),u=Object(a.a)(l,2),d=u[0],j=u[1],h=Object(i.useState)(null),m=Object(a.a)(h,2),x=m[0],O=m[1],f=Boolean(x),g=function(){return O(null)};return Object(p.jsxs)("div",{children:[Object(p.jsx)(b.a,{onClick:function(e){return O(e.currentTarget)}}),Object(p.jsxs)(S.a,{id:"basic-menu",anchorEl:x,open:f,onClose:g,MenuListProps:{"aria-labelledby":"basic-button"},sx:{borderRadius:"10px"},children:[Object(p.jsx)(E.a,{onClick:function(){s(),g()},children:n}),Object(p.jsx)(E.a,{onClick:function(){j(!0),g()},children:t})]}),Object(p.jsx)(R,{title:"Delete Memory",confirm:d,handleCallback:o,handleCloseCallback:function(){return j(!1)},message:r}),c]})}var L=n(146);function T(){return(T=Object(c.a)(o.a.mark((function e(t,n,a,c){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.deleteMemory(t,n,a);case 3:r=e.sent,c(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function B(e){var t,n=e.header,c=e.subheader,r=e.photoLayout,o=e.storyLayout,j=e.bucket,O=e.memoryID,f=e.authURL,g=e.handleEditClick,v=e.preview,k=Object(i.useState)(null),S=Object(a.a)(k,2),E=S[0],I=S[1],M=Object(i.useState)(null),z=Object(a.a)(M,2),D=z[0],P=z[1],R=Object(m.a)();t=Object(x.a)(R.breakpoints.down("lg"))?"":"vertical-scroll";var L=function(e){return P(e)},B=function(e){"ok"===e.status?L("Memory deleted successfully"):L("Error while deleting memory"),I(!0)},N=Object(p.jsx)(C.a,{snackBarOpen:E,message:D,onClose:function(){I(!1)}}),A=v?Object(p.jsx)(b.a,{}):Object(p.jsx)(U,{confirmMessage:"Do you want to delete this memory?",snackBar:N,handleDeleteObject:function(){!function(e,t,n,a){T.apply(this,arguments)}(j,f,O,B)},deleteItem:Object(p.jsx)(w,{}),updateItem:Object(p.jsx)(y,{}),handleEditClick:g});return console.log("Rendering",E,D),!1===E?Object(p.jsx)(s.a,{to:"/memories",replace:!0}):Object(p.jsxs)(l.a,{sx:{boxShadow:0,bgcolor:"button.main",p:1},children:[Object(p.jsx)(u.a,{title:n,subheader:c,action:A}),Object(p.jsx)(h.a,{}),Object(p.jsxs)(d.a,{sx:{display:"flex",justifyContent:"flex-start",flexDirection:{lg:"row",xs:"column"},height:{lg:"72vh"},my:1},children:[Object(p.jsx)(d.a,{sx:{width:{lg:"70%",xs:"100%"},overflowY:"scroll",borderRadius:5},className:t,children:r}),Object(p.jsx)(d.a,{sx:{width:{lg:"30%",sx:"100%"},overflowY:"scroll",mt:{lg:0,xs:2},p:{lg:1},px:1},className:t,children:o})]})]})}},258:function(e,t,n){"use strict";n.d(t,"a",(function(){return ye}));var a=n(53),c=n(134),r=n(10),o=n(135),i=n.n(o),s=n(0),l=n(143),u=n(682),d=n(690),j=n(325),b=n.n(j),h=n(324),m=n.n(h),x=n(50),O=n(653),f=n(94),g=n(692),p=n(691),y=n(321),v=n.n(y),k=n(320),w=n.n(k),C=n(687),S=n(314),E=n.n(S),I=n(317),M=n(3),z=Object(I.autoPlay)(E.a);function D(e){var t=e.index,n=e.images,a=e.handleNext,c=s.useState(t),o=Object(r.a)(c,2),i=o[0],l=o[1];s.useEffect((function(){l(t)}),[t]);var u=n.map((function(e){var t=(e.images?e.images.map((function(e){var t=e.src,n=e.width;return"".concat(t," ").concat(n,"w")})):[]).join(",");return Object(M.jsx)(f.a,{component:"img",sx:{display:"flex",justifyContents:"center",width:"100%",bgcolor:"#1c1c1c"},src:e.src,srcSet:t,style:{display:"block",boxSizing:"content-box",cursor:"pointer",objectFit:"contain",height:"100vh"},alt:e.src},e.src)}));return Object(M.jsx)(z,{index:i,onChangeIndex:function(e){l(e)},enableMouseEvents:!0,animateTransitions:!0,interval:1e4,onClick:a,springConfig:{duration:"0.7s",easeFunction:"cubic-bezier(0.83, 0, 0.17, 1)",delay:"0s"},style:{backgroundColor:"muted.main"},children:u})}D.defaultProps={index:0};var P=n(207);function R(e){var t=e.handleClick;return Object(M.jsx)(C.a,{edge:"start",color:"primary","aria-label":"close",onClick:t,sx:{position:"absolute",top:"50%",right:0,transform:"translate(0%, -50%)"},children:Object(M.jsx)(w.a,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function U(e){var t=e.handleClick;return Object(M.jsx)(C.a,{edge:"start",color:"primary","aria-label":"close",onClick:t,sx:{position:"absolute",top:"50%",left:0,transform:"translate(0%, -50%)"},children:Object(M.jsx)(v.a,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function L(e){var t=e.open,n=e.title,a=e.date,c=e.images,r=e.index,o=e.handleNext,i=e.handleBack,s=e.handleClose;return Object(M.jsxs)(g.a,{open:t,fullScreen:!0,children:[Object(M.jsx)(D,{images:c,index:r,handleNext:o}),Object(M.jsx)(p.a,{title:n,subheader:a,sx:{position:"absolute",top:10,left:10,bgcolor:"button.main",borderRadius:3,padding:1}}),Object(M.jsx)(U,{handleClick:i}),Object(M.jsx)(R,{handleClick:o}),Object(M.jsx)(P.a,{size:"large",handleClick:s})]})}L.defaultProps={index:0};var T=n(219),B=n(671),N=n(164),A=n.n(N),F=n(165),Y=n.n(F),W=n(145),H=n.n(W),J=n(198);function X(e){var t=e.editable,n=e.text,a=e.handleTitleUpdate,c=Object(J.a)(n),o=Object(r.a)(c,3),i=o[0],l=o[1],u=o[2],d=Object(s.useState)(t),j=Object(r.a)(d,2),b=j[0],h=j[1],m=Object(s.useState)(!1),f=Object(r.a)(m,2),g=f[0],p=f[1];return Object(s.useEffect)((function(){h(t),l(n),p(!1)}),[t]),console.log("Memory Title ",b,g,i),b||g?b&&!g?Object(M.jsxs)(O.a,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[Object(M.jsx)(x.a,{variant:"h6",children:i}),Object(M.jsx)(H.a,{fontSize:"medium",onClick:function(){return p(!0)}})]}):b&&g?Object(M.jsxs)(O.a,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start"},spacing:2,children:[Object(M.jsx)(B.a,{id:"standard-basic",size:"small",label:"Title",onChange:u,variant:"standard",defaultValue:i,sx:{maxWidth:"200px"}}),Object(M.jsx)(A.a,{fontSize:"medium",onClick:function(){console.log(i),a(i),p(!1)}}),Object(M.jsx)(Y.a,{fontSize:"medium",onClick:function(){l(n),p(!1)}})]}):void 0:Object(M.jsx)(x.a,{variant:"h6",children:i})}var q=n(51),K=n(669),V=n(511),G=n(668),Q=n(199);function Z(e){var t=e.editable,n=e.prevDate,a=e.handleDateUpdate,c=Object(s.useState)(t),o=Object(r.a)(c,2),i=o[0],l=o[1],u=Object(s.useState)(!1),d=Object(r.a)(u,2),j=d[0],b=d[1],h=Object(Q.a)(n),m=Object(r.a)(h,3),f=m[0],g=m[1],p=m[2];return Object(s.useEffect)((function(){l(t),g(n),b(!1)}),[t,n]),console.log("Memory Date ",i,j,f),i||j?i&&!j?Object(M.jsxs)(O.a,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[Object(M.jsx)(x.a,{children:f}),Object(M.jsx)(H.a,{fontSize:"medium",onClick:function(){return b(!0)}})]}):i&&j?Object(M.jsxs)(O.a,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start",mt:3},spacing:2,children:[Object(M.jsx)(V.a,{dateAdapter:G.a,children:Object(M.jsx)(K.a,{label:"Memory Date",value:f,onChange:p,placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return Object(M.jsx)(B.a,Object(q.a)({readOnly:!0,required:!0},e))}})}),Object(M.jsx)(A.a,{fontSize:"medium",onClick:function(){a(f),b(!1)}}),Object(M.jsx)(Y.a,{fontSize:"medium",onClick:function(){g(n),b(!1)}})]}):void 0:Object(M.jsx)(x.a,{children:f})}var $=n(665),_=n(200);n(177);function ee(e){var t=e.editable,n=e.prevEditorState,a=e.handleEditorStateUpdate,c=Object(s.useState)(t),o=Object(r.a)(c,2),i=o[0],u=o[1],d=Object(s.useState)(!1),j=Object(r.a)(d,2),b=j[0],h=j[1],m=Object(_.a)(n),g=Object(r.a)(m,3),p=g[0],y=g[1],v=g[2],k=Object(s.useRef)();return Object(s.useEffect)((function(){u(t),y(n),h(!1)}),[t,n]),console.log("Memory Title ",i,b),i||b?i&&!b?Object(M.jsxs)(O.a,{direction:"column",spacing:2,children:[Object(M.jsxs)(O.a,{direction:"row",spacing:2,justifyContent:"flex-end",children:[Object(M.jsx)(x.a,{sx:{color:"muted.main"},children:"Edit Story"}),Object(M.jsx)(H.a,{fontSize:"medium",onClick:function(){h(!0)}})]}),Object(M.jsx)($.a,{sx:{width:1}}),Object(M.jsx)(l.Editor,{readOnly:!0,editorState:p})]}):i&&b?Object(M.jsxs)(O.a,{direction:"column",spacing:2,children:[Object(M.jsxs)(O.a,{direction:"row",spacing:2,justifyContent:"flex-end",children:[Object(M.jsx)(x.a,{sx:{color:"muted.main"},children:"Editing Story"}),Object(M.jsx)(A.a,{fontSize:"medium",onClick:function(){a(JSON.stringify(Object(l.convertToRaw)(p.getCurrentContent())),p),h(!1)}}),Object(M.jsx)(Y.a,{fontSize:"medium",onClick:function(){y(n),h(!1)}})]}),Object(M.jsx)($.a,{sx:{width:1}}),Object(M.jsx)(f.a,{sx:{p:2,m:1,my:2,border:1,borderColor:"primary.main",bgcolor:"input.background",minHeight:"200px",borderRadius:5,width:"90%"},onClick:function(){return k.current.focus()},children:Object(M.jsx)(l.Editor,{autoFocus:!0,onChange:v,editorState:p,ref:k})})]}):void 0:Object(M.jsx)(l.Editor,{readOnly:!0,editorState:p})}var te=n(248),ne=n(249),ae=n(674),ce=n(695),re=n(208),oe=n.n(re),ie=n(323),se=n.n(ie),le=n(140),ue=n.n(le),de=n(106),je=["alt","style"],be=["alt","style"];function he(e){var t=e.children,n=e.onClick,a=e.name,c=e.updateOp;return Object(M.jsx)(u.a,{id:a,variant:"contained",component:"label",onClick:n,sx:{color:c===a?"button.main":"muted.main",borderRadius:5,backgroundColor:c===a?"primary.main":"button.main",padding:"6px 8px"},children:t})}function me(e){var t=e.handleChange,n=e.onClick,a=e.updateOp;return Object(M.jsxs)(he,{onClick:n,name:"add",updateOp:a,children:[Object(M.jsx)("input",{type:"file",hidden:!0,multiple:!0,accept:"image/*",onChange:t}),Object(M.jsx)(se.a,{sx:{fontSize:"1.5rem"}}),"Add"]})}function xe(e){var t=e.images,n=e.handlePhotoClick,a=e.renderPhoto,c=Object(s.useState)(null),o=Object(r.a)(c,2),i=o[0],l=o[1];return Object(s.useEffect)((function(){var e=0,n=0;t.forEach((function(t){t.height>t.width?n+=1:e+=1})),l(e>n?"rows":"columns")}),[t]),a?Object(M.jsx)(ne.a,{layout:i,photos:t,onClick:n,spacing:2,renderPhoto:a}):Object(M.jsx)(ne.a,{layout:i,photos:t,onClick:n,spacing:2})}function Oe(e){var t=e.editable,n=e.images,a=e.handlePhotoClick,c=e.handleThumbnailUpdate,o=e.deleteImage,i=e.addImage,l=Object(s.useState)(t),d=Object(r.a)(l,2),j=d[0],b=d[1],h=Object(s.useState)(null),m=Object(r.a)(h,2),f=m[0],g=m[1],p=Object(s.useState)(null),y=Object(r.a)(p,2),v=y[0],k=y[1];console.log("memory images",f,j),Object(s.useEffect)((function(){b(t),g(null)}),[t]);var w=Object(M.jsxs)(O.a,{direction:"row",spacing:2,children:[Object(M.jsx)(me,{handleChange:i,onClick:function(){return g("add")},updateOp:f}),Object(M.jsxs)(he,{onClick:function(){return g("delete")},name:"delete",updateOp:f,children:[Object(M.jsx)(oe.a,{sx:{fontSize:"1.5rem"}}),"Delete"]}),Object(M.jsx)(he,{onClick:function(){return g("thumbnail")},name:"thumbnail",updateOp:f,children:"Set Thumbnail"})]}),S=Object(M.jsx)(O.a,{direction:"row",children:Object(M.jsxs)(x.a,{variant:"h6",color:"muted.main",children:["Images:",n.length]})});return j?j&&"delete"===f?Object(M.jsxs)(O.a,{direction:"column",spacing:2,sx:{p:2},children:[S,w,Object(M.jsx)(xe,{images:n,handlePhotoClick:a,renderPhoto:function(e){var t=e.layout,a=e.layoutOptions,c=e.imageProps,r=c.alt,i=c.style,s=Object(te.a)(c,je);return console.log(t,a),Object(M.jsxs)(u.a,{component:"div",children:[Object(M.jsx)("img",Object(q.a)({alt:r,style:Object(q.a)(Object(q.a)({},i),{},{width:t.width,padding:0})},s)),Object(M.jsx)(C.a,{size:"medium",sx:{color:"black",bgcolor:Object(de.a)("#fff",.4),position:"absolute",top:10,right:12},onClick:function(){return function(e){var t=n.find((function(t){return t.alt===e}));o(t)}(r)},children:Object(M.jsx)(ue.a,{size:"medium"})})]})}})]}):j&&"thumbnail"===f?Object(M.jsxs)(O.a,{direction:"column",spacing:2,sx:{p:2},children:[S,w,Object(M.jsx)(xe,{images:n,handlePhotoClick:a,renderPhoto:function(e){var t=e.layout,a=e.layoutOptions,r=e.imageProps,o=r.alt,i=r.style,s=Object(te.a)(r,be);return console.log(a),Object(M.jsxs)(u.a,{component:"div",children:[Object(M.jsx)("img",Object(q.a)({alt:o,style:Object(q.a)(Object(q.a)({},i),{},{width:t.width,padding:0})},s)),Object(M.jsx)(ce.a,{control:Object(M.jsx)(ae.a,{}),label:"",checked:o===v,onChange:function(){return function(e){console.log("name",e),console.log("images",n),k(e);var t=n.find((function(t){return t.alt===e}));console.log("thumbnail image",t),c(t)}(o)},sx:{pr:1,position:"absolute",bgcolor:Object(de.a)("#fff",.6),color:"black",borderRadius:"0px 5px 5px 0px",borderColor:"secondary.main",borderLeft:0,bottom:20,left:15}})]})}})]}):j&&"add"===f||j&&!f?Object(M.jsxs)(O.a,{direction:"column",spacing:2,sx:{p:2},children:[S,w,Object(M.jsx)(xe,{images:n,handlePhotoClick:a})]}):void 0:Object(M.jsx)(xe,{images:n,handlePhotoClick:a})}xe.defaultProps={renderPhoto:null},he.defaultProps={onClick:function(){}};var fe=n(146),ge=n(163);function pe(e){return!1===e.preview?Object(M.jsx)(O.a,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:Object(M.jsx)(d.a,{href:"/",underline:"none",children:Object(M.jsxs)(u.a,{variant:"contained",component:"label",sx:{color:"primary.main",backgroundColor:"button.main",padding:"6px 8px",boxShadow:0,"&:hover":{backgroundColor:"button.main"}},children:[Object(M.jsx)(m.a,{size:"medium",sx:{paddingRight:1}}),Object(M.jsx)(x.a,{variant:"body1",color:"muted.main",children:"Memories"})]})})}):null}function ye(e){var t=e.memTitle,n=e.memDate,o=e.memEditorState,l=e.memImages,d=e.bucket,j=e.memoryID,h=e.authURL,m=e.preview,g=Object(s.useState)(!1),p=Object(r.a)(g,2),y=p[0],v=p[1],k=Object(s.useState)(!1),w=Object(r.a)(k,2),C=w[0],S=w[1],E=Object(s.useState)(0),I=Object(r.a)(E,2),z=I[0],D=I[1],P=Object(s.useState)(t),R=Object(r.a)(P,2),U=R[0],B=R[1],N=Object(s.useState)(n),A=Object(r.a)(N,2),F=A[0],Y=A[1],W=Object(s.useState)(o),H=Object(r.a)(W,2),J=H[0],q=H[1],K=Object(s.useState)(l),V=Object(r.a)(K,2),G=V[0],Q=V[1],$=Object(s.useState)(null),_=Object(r.a)($,2),te=_[0],ne=_[1],ae=Object(s.useState)(null),ce=Object(r.a)(ae,2),re=ce[0],oe=ce[1],ie=Object(s.useState)([]),se=Object(r.a)(ie,2),le=se[0],ue=se[1],de=Object(s.useState)(null),je=Object(r.a)(de,2),be=je[0],he=je[1],me=Object(s.useState)([]),xe=Object(r.a)(me,2),ye=xe[0],ve=xe[1],ke=Object(s.useState)(!1),we=Object(r.a)(ke,2),Ce=we[0],Se=we[1],Ee=Object(s.useState)(null),Ie=Object(r.a)(Ee,2),Me=Ie[0],ze=Ie[1],De=Object(s.useState)(null),Pe=Object(r.a)(De,2),Re=Pe[0],Ue=Pe[1];console.log("images",G);var Le=G.length;Object(s.useEffect)((function(){return B(t)}),[t]),Object(s.useEffect)((function(){return Y(n)}),[n]),Object(s.useEffect)((function(){return q(o)}),[o]),Object(s.useEffect)((function(){return Q(l)}),[l]);var Te=function(e){console.log("Setting snack message",e),oe(e)},Be=function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe.a.updateMemoryDetails(d,h,j,t,n);case 3:return a=e.sent,Te(a?"Memory ".concat(t," updated successfully"):"Error while updating memory ".concat(t)),ne(!0),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe.a.updateMemoryImage(d,h,j,"thumbnail",t);case 3:return n=e.sent,console.log("Response",n),n.ok?Te("Memory thumbnail updated successfully"):Te("Error while updating memory thumbnail"),ne(!0),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(G.length>1)){e.next=9;break}return e.next=4,fe.a.updateMemoryImage(d,h,j,"delete",t);case 4:n=e.sent,console.log("Response",n),n?(console.log("set snack message - successfully deleted memory image"),Te("Memory image deleted successfully"),Q(G.filter((function(e){return e.title!==t.title})))):(console.log("set snack message - error while deleting memory image"),Te("Error while deleting memory image")),e.next=11;break;case 9:console.log("set snack message - atleast one image is needed for memory"),Te("Atleast 1 image is needed for memory. Unable to delete");case 11:return ne(!0),e.abrupt("return",n);case 15:return e.prev=15,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("addImage details",t),e.next=4,fe.a.updateMemoryImage(d,h,j,"add",t);case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Ye=function(){var e=Object(c.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(a.a)(le.entries()),e.prev=1,c=i.a.mark((function e(){var t,a,c,o,s,l,u,d,b,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(r.a)(n.value,2),a=t[0],c=t[1],o=Object(r.a)(c,3),s=o[0],l=o[1],u=o[2],console.log(s.name,u),e.next=5,Fe(s).then((function(e){return e.text()}));case 5:return d=e.sent,console.log("response for ",s.name,d),b={key:"memories/".concat(j,"/images/").concat(s.name),src:u,alt:s.name,title:s.name,width:s.width,height:s.height,images:[]},e.next=10,fetch(d,{body:l,method:"PUT"});case 10:h=e.sent,console.log("upload response",h),h.ok?(console.log("Setting snack message - image ".concat(s.name," add success")),Te("Memory image ".concat(a+1," / ").concat(be," added successfully")),ze("Memory image ".concat(a+1," / ").concat(be," added successfully")),ne(!0),Q((function(e){return e.concat([b])}))):(console.log("Setting snack message - error uploading image"),Te("Error while uploading memory image"),Ue("Error while uploading memory image"),ne(!0),ve((function(e){return e.concat([s.name])})));case 13:case"end":return e.stop()}}),e)})),t.s();case 4:if((n=t.n()).done){e.next=8;break}return e.delegateYield(c(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),t.e(e.t1);case 13:return e.prev=13,t.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)(Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(le.length!==be){e.next=14;break}return Se(!0),console.log(le,be),e.next=5,Ye();case 5:console.log("Resetting new image count and images"),console.log("Add done"),ye.length>0?(Te("Error while uploading ".concat(ye.length," memory images")),Ue("Error while uploading ".concat(ye.length," memory images")),ne(!0)):(Te("".concat(le.length," image(s) uploaded successfully")),Ue("".concat(le.length," image(s) uploaded successfully")),ne(!0)),ve([]),he(null),ue([]),Se(!1),e.next=15;break;case 14:le.length>0&&(Te("Preparing images for upload. Please wait..."),Ue("Preparing images for upload. Please wait..."),ne(!0));case 15:case"end":return e.stop()}}),e)}))),[le]);var We=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.files&&(n=Array.from(t.target.files),console.log("files to add:",n.length,"exsting images:",G.length),he(n.length),G.length+n.length<=15?(n.forEach((function(e){var t=new Image;t.onload=function(){var t=Object(c.a)(i.a.mark((function t(n){var a,c,r,o,s,l,u,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.target.naturalHeight,c=n.target.naturalWidth,r=e.size/1048576,o=e.name,s=[500,1e3,1500].map((function(e){return{height:e,width:Math.ceil(e*c/a)}})),l=Date.now(),u="".concat(l,"-").concat(o),d=[{name:u,size:r,height:a,width:c,images:s},e,n.target.src],ue((function(e){return e.concat([d])}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.src=URL.createObjectURL(e)})),n.map((function(e){return URL.revokeObjectURL(e)}))):(console.log("Setting snack message - error adding image as exceeding 15"),Te("Unable to add ".concat(n.length," images. Maximum images allowed pre memory is 15")),ne(!0)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),He=Object(M.jsx)(X,{editable:C,text:U,handleTitleUpdate:function(e){Be("title",e)&&B(e)}}),Je=Object(M.jsx)(Z,{editable:C,prevDate:F,handleDateUpdate:function(e){Be("date",e)&&Y(e)}}),Xe=Object(M.jsx)(ee,{editable:C,prevEditorState:J,handleEditorStateUpdate:function(e,t){Be("story",e)&&q(t)}}),qe=Object(M.jsx)(Oe,{editable:C,images:G,handlePhotoClick:function(e,t,n){v(!0),D(n)},handleThumbnailUpdate:Ne,deleteImage:Ae,addImage:We}),Ke=Object(M.jsxs)(u.a,{variant:"contained",component:"label",onClick:function(){return S(!1)},sx:{color:"primary.main",borderRadius:5,backgroundColor:"button.main",padding:"6px 8px"},children:[Object(M.jsx)(b.a,{size:"medium",sx:{paddingRight:1}}),Object(M.jsx)(x.a,{variant:"body1",color:"muted.main",children:"Edit"})]});return console.log("preview",m),Object(M.jsxs)(M.Fragment,{children:[C?Object(M.jsx)(O.a,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:Ke}):Object(M.jsx)(pe,{preview:m}),Object(M.jsx)(f.a,{component:"div",sx:{backgroundColor:"button.main",margin:C?"5px":0},children:Object(M.jsx)(T.a,{header:He,subheader:Je,photoLayout:qe,storyLayout:Xe,memoryID:j,bucket:d,authURL:h,handleEditClick:function(){return S(!0)},preview:m})}),Object(M.jsx)(L,{open:y,title:U,date:F,images:G,index:z,handleNext:function(){D((function(e){return(e+1)%Le}))},handleBack:function(){D((function(e){return(e-1+Le)%Le}))},handleClose:function(){return v(!1)}}),Object(M.jsx)(ge.a,{snackBarOpen:te,message:re,onClose:function(){console.log("snack close, set snack false, message null"),ne(!1),oe(null)}}),Object(M.jsx)(Dialog,{open:Ce,fullWidth:!0,sx:{p:1},children:Object(M.jsxs)(Card,{sx:{maxWidth:1,p:1},children:[Object(M.jsx)(CardHeader,{title:"Adding Images",sx:{textAlign:"center"}}),Object(M.jsx)(Divider,{}),Object(M.jsxs)(CardContent,{children:[Object(M.jsx)(x.a,{children:Me}),Object(M.jsx)(x.a,{children:Re})]})]})})]})}ye.defaultProps={memTitle:"Memory Title",memDate:"Memory Date",memEditorState:l.EditorState.createWithText("Memory Text")}},680:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(10),c=n(134),r=n(135),o=n.n(r),i=n(4),s=n(0),l=n(143),u=n(146),d=n(218),j=n(258),b=n(686),h=n(249),m=n(219),x=n(349),O=[{key:1,src:x.a,width:667,height:500},{key:2,src:x.a,width:667,height:500},{key:3,src:x.a,width:375,height:500},{key:4,src:x.a,width:667,height:500},{key:5,src:x.a,width:375,height:500},{key:6,src:x.a,width:667,height:500},{key:7,src:x.a,width:667,height:500},{key:8,src:x.a,width:667,height:500},{key:9,src:x.a,width:667,height:500},{key:10,src:x.a,width:667,height:500},{key:11,src:x.a,width:375,height:500},{key:12,src:x.a,width:375,height:500},{key:13,src:x.a,width:375,height:500},{key:14,src:x.a,width:375,height:500},{key:15,src:x.a,width:667,height:500}],f=n(3);function g(){return Object(f.jsx)(m.a,{header:Object(f.jsx)(b.a,{type:"rectangular",sx:{width:{lg:"20%",md:"30%",xs:"70%"}}}),subheader:Object(f.jsx)(b.a,{type:"rectangular",sx:{width:{lg:"15%",md:"20%",xs:"60%"}}}),photoLayout:Object(f.jsx)(h.a,{layout:"rows",photos:O,spacing:2}),storyLayout:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}})]})})}var p=n(163);function y(e,t,n,a,c){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(o.a.mark((function e(t,n,a,c,r){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.viewMemory(t,n,a);case 3:if(i=e.sent,console.log(i),!i.status){e.next=8;break}return r(i),e.abrupt("return");case 8:c(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function k(e){var t=e.bucket,n=e.authURL,c=Object(i.h)().memoryId,r=Object(s.useState)(),o=Object(a.a)(r,2),u=o[0],b=o[1],h=Object(s.useState)(null),m=Object(a.a)(h,2),x=m[0],O=m[1],v=Object(s.useState)(null),k=Object(a.a)(v,2),w=k[0],C=k[1],S=function(e){return b(e)},E=Object(s.useState)(null),I=Object(a.a)(E,2),M=I[0],z=I[1],D=function(e){console.log("Setting snack message",e),C(e)},P=function(){console.log("snack close, set snack false, message null"),O(!1),C(null)},R=function(e){"unauthenticated"===e.status&&(D("You have been logged out. Navigating to login page"),O(!0),setInterval((function(){return z("unauthenticated")}),3e3)),"forbidden"===e.status&&(D("You do not have access to this memory. Navigating to memories page"),O(!0),setInterval((function(){return z("forbidden")}),3e3))};return Object(s.useEffect)((function(){y(t,n,c,S,R);var e=setInterval((function(){return y(t,n,c,S,R)}),3e5);return function(){return clearInterval(e)}}),[]),"unauthenticated"===M?Object(f.jsx)(i.a,{to:"/login"}):"forbidden"===M?Object(f.jsx)(i.a,{to:"/memories"}):(console.log("memory",u,"memError",M),u?Object(f.jsxs)(d.a,{children:[Object(f.jsx)(j.a,{memTitle:u.title,memDate:u.date,memImages:u.pictures.photos,memEditorState:l.EditorState.createWithContent(Object(l.convertFromRaw)(u.contentState)),memoryID:c,bucket:t,authURL:n,preview:!1}),Object(f.jsx)(p.a,{snackBarOpen:x,message:w,onClose:P})]}):Object(f.jsxs)(d.a,{children:[Object(f.jsx)(g,{}),Object(f.jsx)(p.a,{snackBarOpen:x,message:w,onClose:P})]}))}}}]);
//# sourceMappingURL=9.508f12fa.chunk.js.map