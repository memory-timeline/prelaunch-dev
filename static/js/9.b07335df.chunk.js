(this.webpackJsonpprelaunch=this.webpackJsonpprelaunch||[]).push([[9],{162:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(10),c=n(0),r=n(676),o=n(687),i=n(140),s=n.n(i),l=n(3);function u(e){var t=e.snackBarOpen,n=e.message,i=e.onClose,u=Object(c.useState)(t),d=Object(a.a)(u,2),j=d[0],b=d[1],h=Object(c.useState)(n),m=Object(a.a)(h,2),x=m[0],f=m[1];Object(c.useEffect)((function(){return b(t)}),[t]),Object(c.useEffect)((function(){return f(n)}),[n]);var g=function(){b(!1),f(null),i()},O=Object(l.jsx)(o.a,{size:"small","aria-label":"close",color:"inherit",onClick:g,children:Object(l.jsx)(s.a,{fontSize:"small"})});return console.log("in snackbar",j,n),Object(l.jsx)(r.a,{open:j,autoHideDuration:3e3,onClose:g,message:x,action:O,anchorOrigin:{vertical:"top",horizontal:"center"}})}},177:function(e,t,n){},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(10),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];Object(c.useEffect)((function(){return o(e)}),[e]);return[r,o,function(e){o(e.target.value)}]}},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(10),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];return[r,o,function(e){var t=new Date(e);if(e){var n=t.toLocaleDateString("en-in",{day:"numeric",month:"long",year:"numeric"});o(n)}else o(null)}]}},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(10),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];return[r,o,function(e){return o(e)}]}},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(687),c=n(140),r=n.n(c),o=n(106),i=n(3);function s(e){var t=e.size,n=e.handleClick;return Object(i.jsx)(a.a,{size:t,sx:{color:"black",bgcolor:Object(o.a)("#fff",.4),position:"absolute",top:10,right:12},onClick:n,children:Object(i.jsx)(r.a,{size:t})})}s.defaultProps={size:"small"}},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var a=n(10),c=n(134),r=n(135),o=n.n(r),i=n(0),s=n(4),l=n(692),u=n(690),d=n(94),j=n(209),b=n.n(j),h=n(665),m=n(142),x=n(652),f=n(687),g=n(145),O=n.n(g),p=n(3);function y(){return Object(p.jsxs)(d.a,{sx:{alignItems:"center"},onClick:function(){},children:[Object(p.jsx)(f.a,{"aria-label":"update",sx:{bgcolor:"form.input"},onClick:function(){},children:Object(p.jsx)(O.a,{})}),"Edit"]})}var v=n(208),k=n.n(v);function w(){return Object(p.jsxs)(d.a,{sx:{alignItems:"center"},children:[Object(p.jsx)(f.a,{"aria-label":"delete",sx:{bgcolor:"form.input"},children:Object(p.jsx)(k.a,{})}),"Delete"]})}var C=n(162),S=n(621),E=n(693),I=n(691),z=n(682),M=n(50),D=n(653),R=n(662);function P(e){var t=e.confirm,n=e.handleCallback,c=e.handleCloseCallback,r=e.title,o=e.message,s=Object(i.useState)(t),l=Object(a.a)(s,2),u=l[0],j=l[1];Object(i.useEffect)((function(){return j(t)}),[t]);var b=function(){j(!1),c()};return console.log("in confirm",u),Object(p.jsxs)(I.a,{open:u,sx:{backgroundColor:"faded.black"},children:[Object(p.jsx)(R.a,{children:r}),Object(p.jsxs)(d.a,{sx:{p:2},children:[Object(p.jsx)(M.a,{sx:{pb:2},children:o}),Object(p.jsxs)(D.a,{spacing:2,direction:"row",children:[Object(p.jsx)(z.a,{variant:"contained",onClick:b,children:"Cancel"}),Object(p.jsx)(z.a,{variant:"outlined",onClick:function(){b(),n()},children:"OK"})]})]})]})}function U(e){var t=e.deleteItem,n=e.updateItem,c=e.snackBar,r=e.confirmMessage,o=e.handleDeleteObject,s=e.handleEditClick,l=Object(i.useState)(!1),u=Object(a.a)(l,2),d=u[0],j=u[1],h=Object(i.useState)(null),m=Object(a.a)(h,2),x=m[0],f=m[1],g=Boolean(x),O=function(){return f(null)};return Object(p.jsxs)("div",{children:[Object(p.jsx)(b.a,{onClick:function(e){return f(e.currentTarget)}}),Object(p.jsxs)(S.a,{id:"basic-menu",anchorEl:x,open:g,onClose:O,MenuListProps:{"aria-labelledby":"basic-button"},sx:{borderRadius:"10px"},children:[Object(p.jsx)(E.a,{onClick:function(){s(),O()},children:n}),Object(p.jsx)(E.a,{onClick:function(){j(!0),O()},children:t})]}),Object(p.jsx)(P,{title:"Delete Memory",confirm:d,handleCallback:o,handleCloseCallback:function(){return j(!1)},message:r}),c]})}var L=n(146);function T(){return(T=Object(c.a)(o.a.mark((function e(t,n,a,c){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.deleteMemory(t,n,a);case 3:r=e.sent,c(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function B(e){var t,n=e.header,c=e.subheader,r=e.photoLayout,o=e.storyLayout,j=e.bucket,f=e.memoryID,g=e.authURL,O=e.handleEditClick,v=e.preview,k=Object(i.useState)(null),S=Object(a.a)(k,2),E=S[0],I=S[1],z=Object(i.useState)(null),M=Object(a.a)(z,2),D=M[0],R=M[1],P=Object(m.a)();t=Object(x.a)(P.breakpoints.down("lg"))?"":"vertical-scroll";var L=function(e){return R(e)},B=function(e){"ok"===e.status?L("Memory deleted successfully"):L("Error while deleting memory"),I(!0)},N=Object(p.jsx)(C.a,{snackBarOpen:E,message:D,onClose:function(){I(!1)}}),F=v?Object(p.jsx)(b.a,{}):Object(p.jsx)(U,{confirmMessage:"Do you want to delete this memory?",snackBar:N,handleDeleteObject:function(){!function(e,t,n,a){T.apply(this,arguments)}(j,g,f,B)},deleteItem:Object(p.jsx)(w,{}),updateItem:Object(p.jsx)(y,{}),handleEditClick:O});return console.log("Rendering",E,D),!1===E?Object(p.jsx)(s.a,{to:"/memories",replace:!0}):Object(p.jsxs)(l.a,{sx:{boxShadow:10,bgcolor:"button.main",p:1},children:[Object(p.jsx)(u.a,{title:n,subheader:c,action:F}),Object(p.jsx)(h.a,{}),Object(p.jsxs)(d.a,{sx:{display:"flex",justifyContent:"flex-start",flexDirection:{lg:"row",xs:"column"},height:{lg:"72vh"},my:1},children:[Object(p.jsx)(d.a,{sx:{width:{lg:"70%",xs:"100%"},overflowY:"scroll",borderRadius:5},className:t,children:r}),Object(p.jsx)(d.a,{sx:{width:{lg:"30%",sx:"100%"},overflowY:"scroll",mt:{lg:0,xs:2},p:{lg:1},px:1},className:t,children:o})]})]})}},258:function(e,t,n){"use strict";n.d(t,"a",(function(){return fe}));var a=n(134),c=n(10),r=n(135),o=n.n(r),i=n(0),s=n(143),l=n(682),u=n(324),d=n.n(u),j=n(325),b=n.n(j),h=n(50),m=n(653),x=n(94),f=n(691),g=n(690),O=n(321),p=n.n(O),y=n(320),v=n.n(y),k=n(687),w=n(314),C=n.n(w),S=n(317),E=n(3),I=Object(S.autoPlay)(C.a);function z(e){var t=e.index,n=e.images,a=e.handleNext,r=i.useState(t),o=Object(c.a)(r,2),s=o[0],l=o[1];i.useEffect((function(){l(t)}),[t]);var u=n.map((function(e){var t=(e.images?e.images.map((function(e){var t=e.src,n=e.width;return"".concat(t," ").concat(n,"w")})):[]).join(",");return Object(E.jsx)(x.a,{component:"img",sx:{display:"flex",justifyContents:"center",width:"100%",bgcolor:"#1c1c1c"},src:e.src,srcSet:t,style:{display:"block",boxSizing:"content-box",cursor:"pointer",objectFit:"contain",height:"100vh"},alt:e.src},e.src)}));return Object(E.jsx)(I,{index:s,onChangeIndex:function(e){l(e)},enableMouseEvents:!0,animateTransitions:!0,interval:1e4,onClick:a,springConfig:{duration:"0.7s",easeFunction:"cubic-bezier(0.83, 0, 0.17, 1)",delay:"0s"},style:{backgroundColor:"muted.main"},children:u})}z.defaultProps={index:0};var M=n(207);function D(e){var t=e.handleClick;return Object(E.jsx)(k.a,{edge:"start",color:"primary","aria-label":"close",onClick:t,sx:{position:"absolute",top:"50%",right:0,transform:"translate(0%, -50%)"},children:Object(E.jsx)(v.a,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function R(e){var t=e.handleClick;return Object(E.jsx)(k.a,{edge:"start",color:"primary","aria-label":"close",onClick:t,sx:{position:"absolute",top:"50%",left:0,transform:"translate(0%, -50%)"},children:Object(E.jsx)(p.a,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function P(e){var t=e.open,n=e.title,a=e.date,c=e.images,r=e.index,o=e.handleNext,i=e.handleBack,s=e.handleClose;return Object(E.jsxs)(f.a,{open:t,fullScreen:!0,children:[Object(E.jsx)(z,{images:c,index:r,handleNext:o}),Object(E.jsx)(g.a,{title:n,subheader:a,sx:{position:"absolute",top:10,left:10,bgcolor:"button.main",borderRadius:3,padding:1}}),Object(E.jsx)(R,{handleClick:i}),Object(E.jsx)(D,{handleClick:o}),Object(E.jsx)(M.a,{size:"large",handleClick:s})]})}P.defaultProps={index:0};var U=n(219),L=n(671),T=n(163),B=n.n(T),N=n(164),F=n.n(N),Y=n(145),A=n.n(Y),W=n(198);function H(e){var t=e.editable,n=e.text,a=e.handleTitleUpdate,r=Object(W.a)(n),o=Object(c.a)(r,3),s=o[0],l=o[1],u=o[2],d=Object(i.useState)(t),j=Object(c.a)(d,2),b=j[0],x=j[1],f=Object(i.useState)(!1),g=Object(c.a)(f,2),O=g[0],p=g[1];return Object(i.useEffect)((function(){x(t),l(n),p(!1)}),[t]),console.log("Memory Title ",b,O,s),b||O?b&&!O?Object(E.jsxs)(m.a,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[Object(E.jsx)(h.a,{variant:"h6",children:s}),Object(E.jsx)(A.a,{fontSize:"medium",onClick:function(){return p(!0)}})]}):b&&O?Object(E.jsxs)(m.a,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start"},spacing:2,children:[Object(E.jsx)(L.a,{id:"standard-basic",size:"small",label:"Title",onChange:u,variant:"standard",defaultValue:s,sx:{maxWidth:"200px"}}),Object(E.jsx)(B.a,{fontSize:"medium",onClick:function(){console.log(s),a(s),p(!1)}}),Object(E.jsx)(F.a,{fontSize:"medium",onClick:function(){l(n),p(!1)}})]}):void 0:Object(E.jsx)(h.a,{variant:"h6",children:s})}var J=n(51),X=n(669),q=n(511),K=n(668),V=n(199);function G(e){var t=e.editable,n=e.prevDate,a=e.handleDateUpdate,r=Object(i.useState)(t),o=Object(c.a)(r,2),s=o[0],l=o[1],u=Object(i.useState)(!1),d=Object(c.a)(u,2),j=d[0],b=d[1],x=Object(V.a)(n),f=Object(c.a)(x,3),g=f[0],O=f[1],p=f[2];return Object(i.useEffect)((function(){l(t),O(n),b(!1)}),[t,n]),console.log("Memory Date ",s,j,g),s||j?s&&!j?Object(E.jsxs)(m.a,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[Object(E.jsx)(h.a,{children:g}),Object(E.jsx)(A.a,{fontSize:"medium",onClick:function(){return b(!0)}})]}):s&&j?Object(E.jsxs)(m.a,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start",mt:3},spacing:2,children:[Object(E.jsx)(q.a,{dateAdapter:K.a,children:Object(E.jsx)(X.a,{label:"Memory Date",value:g,onChange:p,placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return Object(E.jsx)(L.a,Object(J.a)({readOnly:!0,required:!0},e))}})}),Object(E.jsx)(B.a,{fontSize:"medium",onClick:function(){a(g),b(!1)}}),Object(E.jsx)(F.a,{fontSize:"medium",onClick:function(){O(n),b(!1)}})]}):void 0:Object(E.jsx)(h.a,{children:g})}var Q=n(200);n(177);function Z(e){var t=e.editable,n=e.prevEditorState,a=e.handleEditorStateUpdate,r=Object(i.useState)(t),o=Object(c.a)(r,2),l=o[0],u=o[1],d=Object(i.useState)(!1),j=Object(c.a)(d,2),b=j[0],h=j[1],f=Object(Q.a)(n),g=Object(c.a)(f,3),O=g[0],p=g[1],y=g[2],v=Object(i.useRef)();return Object(i.useEffect)((function(){u(t),p(n),h(!1)}),[t,n]),console.log("Memory Title ",l,b),l||b?l&&!b?Object(E.jsxs)(m.a,{direction:"column",sx:{alignItems:"flex-end",justifyContent:"flex-end"},spacing:2,children:[Object(E.jsx)(A.a,{fontSize:"medium",onClick:function(){h(!0)}}),Object(E.jsx)(s.Editor,{readOnly:!0,editorState:O})]}):l&&b?Object(E.jsxs)(m.a,{direction:"column",sx:{alignItems:"flex-end",justifyContent:"flex-start"},spacing:2,children:[Object(E.jsxs)(m.a,{direction:"row",spacing:2,children:[Object(E.jsx)(B.a,{fontSize:"medium",onClick:function(){a(JSON.stringify(Object(s.convertToRaw)(O.getCurrentContent()))),h(!1)}}),Object(E.jsx)(F.a,{fontSize:"medium",onClick:function(){p(n),h(!1)}})]}),Object(E.jsx)(x.a,{sx:{p:2,m:1,my:2,border:1,borderColor:"primary.main",bgcolor:"input.background",minHeight:"200px",borderRadius:5,width:"90%"},onClick:function(){return v.current.focus()},children:Object(E.jsx)(s.Editor,{autoFocus:!0,onChange:y,editorState:O,ref:v})})]}):void 0:Object(E.jsx)(s.Editor,{readOnly:!0,editorState:O})}var $=n(248),_=n(249),ee=n(674),te=n(694),ne=n(208),ae=n.n(ne),ce=n(323),re=n.n(ce),oe=n(140),ie=n.n(oe),se=n(106),le=["alt","style"],ue=["alt","style"];function de(e){var t=e.children,n=e.onClick,a=e.name,c=e.updateOp;return Object(E.jsx)(l.a,{id:a,variant:"contained",component:"label",onClick:n,sx:{color:c===a?"button.main":"muted.main",borderRadius:5,backgroundColor:c===a?"primary.main":"button.main",padding:"6px 8px"},children:t})}function je(e){var t=e.handleChange,n=e.onClick,a=e.updateOp;return Object(E.jsxs)(de,{onClick:n,name:"add",updateOp:a,children:[Object(E.jsx)("input",{type:"file",hidden:!0,multiple:!0,accept:"image/*",onChange:t}),Object(E.jsx)(re.a,{sx:{fontSize:"1.5rem"}}),"Add"]})}function be(e){var t=e.images,n=e.handlePhotoClick,a=e.renderPhoto,r=Object(i.useState)(null),o=Object(c.a)(r,2),s=o[0],l=o[1];return Object(i.useEffect)((function(){var e=0,n=0;t.forEach((function(t){t.height>t.width?n+=1:e+=1})),l(e>n?"rows":"columns")}),[t]),a?Object(E.jsx)(_.a,{layout:s,photos:t,onClick:n,spacing:2,renderPhoto:a}):Object(E.jsx)(_.a,{layout:s,photos:t,onClick:n,spacing:2})}function he(e){var t=e.editable,n=e.images,a=e.handlePhotoClick,r=e.handleThumbnailUpdate,o=e.deleteImage,s=e.addImage,u=Object(i.useState)(t),d=Object(c.a)(u,2),j=d[0],b=d[1],x=Object(i.useState)(null),f=Object(c.a)(x,2),g=f[0],O=f[1],p=Object(i.useState)(null),y=Object(c.a)(p,2),v=y[0],w=y[1];console.log("memory images",g,j),Object(i.useEffect)((function(){b(t),O(null)}),[t]);var C=Object(E.jsxs)(m.a,{direction:"row",spacing:2,children:[Object(E.jsx)(je,{handleChange:s,onClick:function(){return O("add")},updateOp:g}),Object(E.jsxs)(de,{onClick:function(){return O("delete")},name:"delete",updateOp:g,children:[Object(E.jsx)(ae.a,{sx:{fontSize:"1.5rem"}}),"Delete"]}),Object(E.jsx)(de,{onClick:function(){return O("thumbnail")},name:"thumbnail",updateOp:g,children:"Set Thumbnail"})]}),S=Object(E.jsx)(m.a,{direction:"row",sx:{justifyContent:"flex-end"},alignItems:"center",children:Object(E.jsxs)(h.a,{variant:"body1",children:["Images:",n.length]})});return j?j&&"delete"===g?Object(E.jsxs)(m.a,{direction:"column",spacing:2,sx:{p:2},children:[S,C,Object(E.jsx)(be,{images:n,handlePhotoClick:a,renderPhoto:function(e){var t=e.layout,a=e.layoutOptions,c=e.imageProps,r=c.alt,i=c.style,s=Object($.a)(c,le);return console.log(t,a),Object(E.jsxs)(l.a,{component:"div",children:[Object(E.jsx)("img",Object(J.a)({alt:r,style:Object(J.a)(Object(J.a)({},i),{},{width:t.width,padding:0})},s)),Object(E.jsx)(k.a,{size:"medium",sx:{color:"black",bgcolor:Object(se.a)("#fff",.4),position:"absolute",top:10,right:12},onClick:function(){return function(e){var t=n.find((function(t){return t.alt===e}));o(t)}(r)},children:Object(E.jsx)(ie.a,{size:"medium"})})]})}})]}):j&&"thumbnail"===g?Object(E.jsxs)(m.a,{direction:"column",spacing:2,sx:{p:2},children:[S,C,Object(E.jsx)(be,{images:n,handlePhotoClick:a,renderPhoto:function(e){var t=e.layout,a=e.layoutOptions,c=e.imageProps,o=c.alt,i=c.style,s=Object($.a)(c,ue);return console.log(a),Object(E.jsxs)(l.a,{component:"div",children:[Object(E.jsx)("img",Object(J.a)({alt:o,style:Object(J.a)(Object(J.a)({},i),{},{width:t.width,padding:0})},s)),Object(E.jsx)(te.a,{control:Object(E.jsx)(ee.a,{}),label:"",checked:o===v,onChange:function(){return function(e){console.log("name",e),console.log("images",n),w(e);var t=n.find((function(t){return t.alt===e}));console.log("thumbnail image",t),r(t)}(o)},sx:{pr:1,position:"absolute",bgcolor:Object(se.a)("#fff",.6),color:"black",borderRadius:"0px 5px 5px 0px",borderColor:"secondary.main",borderLeft:0,bottom:20,left:15}})]})}})]}):j&&"add"===g||j&&!g?Object(E.jsxs)(m.a,{direction:"column",spacing:2,sx:{p:2},children:[S,C,Object(E.jsx)(be,{images:n,handlePhotoClick:a})]}):void 0:Object(E.jsx)(be,{images:n,handlePhotoClick:a})}be.defaultProps={renderPhoto:null},de.defaultProps={onClick:function(){}};var me=n(146),xe=n(162);function fe(e){var t=e.memTitle,n=e.memDate,r=e.memEditorState,s=e.memImages,u=e.bucket,j=e.memoryID,f=e.authURL,g=e.preview,O=Object(i.useState)(!1),p=Object(c.a)(O,2),y=p[0],v=p[1],k=Object(i.useState)(!1),w=Object(c.a)(k,2),C=w[0],S=w[1],I=Object(i.useState)(0),z=Object(c.a)(I,2),M=z[0],D=z[1],R=Object(i.useState)(t),L=Object(c.a)(R,2),T=L[0],B=L[1],N=Object(i.useState)(n),F=Object(c.a)(N,2),Y=F[0],A=F[1],W=Object(i.useState)(r),J=Object(c.a)(W,2),X=J[0],q=J[1],K=Object(i.useState)(s),V=Object(c.a)(K,2),Q=V[0],$=V[1],_=Object(i.useState)(null),ee=Object(c.a)(_,2),te=ee[0],ne=ee[1],ae=Object(i.useState)(null),ce=Object(c.a)(ae,2),re=ce[0],oe=ce[1];console.log("images",Q);var ie=Q.length;Object(i.useEffect)((function(){return B(t)}),[t]),Object(i.useEffect)((function(){return A(n)}),[n]),Object(i.useEffect)((function(){return q(r)}),[r]),Object(i.useEffect)((function(){return $(s)}),[s]);var se=function(e){console.log("Setting snack message",e),oe(e)},le=function(){var e=Object(a.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,me.a.updateMemoryDetails(u,f,j,t,n);case 3:return a=e.sent,se(a?"Memory ".concat(t," updated successfully"):"Error while updating memory ".concat(t)),ne(!0),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),ue=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,me.a.updateMemoryImage(u,f,j,"thumbnail",t);case 3:return n=e.sent,console.log("Response",n),n.ok?se("Memory thumbnail updated successfully"):se("Error while updating memory thumbnail"),ne(!0),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(Q.length>1)){e.next=9;break}return e.next=4,me.a.updateMemoryImage(u,f,j,"delete",t);case 4:n=e.sent,console.log("Response",n),n?(console.log("set snack message - successfully deleted memory image"),se("Memory image deleted successfully"),$(Q.filter((function(e){return e.title!==t.title})))):(console.log("set snack message - error while deleting memory image"),se("Error while deleting memory image")),e.next=11;break;case 9:console.log("set snack message - atleast one image is needed for memory"),se("Atleast 1 image is needed for memory. Unable to delete");case 11:return ne(!0),e.abrupt("return",n);case 15:return e.prev=15,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("addImage details",t),e.next=4,me.a.updateMemoryImage(u,f,j,"add",t);case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.files&&(n=Array.from(t.target.files),console.log("files to add:",n.length,"exsting images:",Q.length),Q.length+n.length<=15?(n.forEach((function(e){var t=new Image;t.onload=function(){var t=Object(a.a)(o.a.mark((function t(n){var a,c,r,i,s,l,u,d,b,h,m;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.target.naturalHeight,c=n.target.naturalWidth,r=e.size/1048576,i=e.name,s=[500,1e3,1500].map((function(e){return{height:e,width:Math.ceil(e*c/a)}})),l=Date.now(),u="".concat(l,"-").concat(i),d={name:u,size:r,height:a,width:c,images:s},t.next=10,je(d);case 10:if(!(b=t.sent).ok){t.next=32;break}return h={key:"memories/".concat(j,"/images/").concat(u),src:n.target.src,alt:u,title:u,width:c,height:a,images:[]},console.log("uploading photo",h),t.next=16,b.text();case 16:return m=t.sent,se("Uploading image. Please wait..."),ne(!0),t.next=21,fetch(m,{body:e,method:"PUT"}).then((function(e){return e}));case 21:if(!t.sent.ok){t.next=28;break}return $((function(e){return e.concat([h])})),console.log("Setting snack message - image add success"),se("Memory image added successfully"),ne(!0),t.abrupt("return");case 28:return console.log("Setting snack message - error uploading image"),se("Error while uploading memory image"),ne(!0),t.abrupt("return");case 32:console.log("Setting snack message - error adding image"),se("Error while adding memory image"),ne(!0);case 35:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.src=URL.createObjectURL(e)})),n.map((function(e){return URL.revokeObjectURL(e)}))):(console.log("Setting snack message - error adding image as exceeding 15"),se("Unable to add ".concat(n.length," images. Maximum images allowed pre memory is 15")),ne(!0)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=Object(E.jsx)(H,{editable:C,text:T,handleTitleUpdate:function(e){le("title",e)&&B(e)}}),ge=Object(E.jsx)(G,{editable:C,prevDate:Y,handleDateUpdate:function(e){le("date",e)&&A(e)}}),Oe=Object(E.jsx)(Z,{editable:C,prevEditorState:X,handleEditorStateUpdate:function(e){le("story",e)&&q(e)}}),pe=Object(E.jsx)(he,{editable:C,images:Q,handlePhotoClick:function(e,t,n){v(!0),D(n)},handleThumbnailUpdate:ue,deleteImage:de,addImage:be}),ye=Object(E.jsxs)(l.a,{variant:"contained",component:"label",onClick:function(){return S(!1)},sx:{color:"primary.main",borderRadius:5,backgroundColor:"button.main",padding:"6px 8px"},children:[Object(E.jsx)(d.a,{size:"medium",sx:{paddingRight:1}}),Object(E.jsx)(h.a,{variant:"body1",color:"muted.main",children:"Edit"})]});return Object(E.jsxs)(E.Fragment,{children:[C?Object(E.jsx)(m.a,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:3},children:ye}):Object(E.jsx)(m.a,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:Object(E.jsxs)(l.a,{variant:"contained",component:"label",sx:{color:"primary.main",borderRadius:5,backgroundColor:"button.main",padding:"6px 8px"},children:[Object(E.jsx)(b.a,{size:"medium",sx:{paddingRight:1}}),Object(E.jsx)(h.a,{variant:"body1",color:"muted.main",children:"Memories"})]})}),Object(E.jsx)(x.a,{component:"div",sx:{backgroundColor:"button.main",margin:C?"5px":0},children:Object(E.jsx)(U.a,{header:fe,subheader:ge,photoLayout:pe,storyLayout:Oe,memoryID:j,bucket:u,authURL:f,handleEditClick:function(){return S(!0)},preview:g})}),Object(E.jsx)(P,{open:y,title:T,date:Y,images:Q,index:M,handleNext:function(){D((function(e){return(e+1)%ie}))},handleBack:function(){D((function(e){return(e-1+ie)%ie}))},handleClose:function(){return v(!1)}}),Object(E.jsx)(xe.a,{snackBarOpen:te,message:re,onClose:function(){console.log("snack close, set snack false, message null"),ne(!1),oe(null)}})]})}fe.defaultProps={memTitle:"Memory Title",memDate:"Memory Date",memEditorState:s.EditorState.createWithText("Memory Text")}},680:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(10),c=n(134),r=n(135),o=n.n(r),i=n(4),s=n(0),l=n(143),u=n(146),d=n(218),j=n(258),b=n(686),h=n(249),m=n(219),x=n(349),f=[{key:1,src:x.a,width:667,height:500},{key:2,src:x.a,width:667,height:500},{key:3,src:x.a,width:375,height:500},{key:4,src:x.a,width:667,height:500},{key:5,src:x.a,width:375,height:500},{key:6,src:x.a,width:667,height:500},{key:7,src:x.a,width:667,height:500},{key:8,src:x.a,width:667,height:500},{key:9,src:x.a,width:667,height:500},{key:10,src:x.a,width:667,height:500},{key:11,src:x.a,width:375,height:500},{key:12,src:x.a,width:375,height:500},{key:13,src:x.a,width:375,height:500},{key:14,src:x.a,width:375,height:500},{key:15,src:x.a,width:667,height:500}],g=n(3);function O(){return Object(g.jsx)(m.a,{header:Object(g.jsx)(b.a,{type:"rectangular",sx:{width:{lg:"20%",md:"30%",xs:"70%"}}}),subheader:Object(g.jsx)(b.a,{type:"rectangular",sx:{width:{lg:"15%",md:"20%",xs:"60%"}}}),photoLayout:Object(g.jsx)(h.a,{layout:"rows",photos:f,spacing:2}),storyLayout:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(g.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}})]})})}var p=n(162);function y(e,t,n,a,c){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(o.a.mark((function e(t,n,a,c,r){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.viewMemory(t,n,a);case 3:if(i=e.sent,console.log(i),!i.status){e.next=8;break}return r(i),e.abrupt("return");case 8:c(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function k(e){var t=e.bucket,n=e.authURL,c=Object(i.h)().memoryId,r=Object(s.useState)(),o=Object(a.a)(r,2),u=o[0],b=o[1],h=Object(s.useState)(null),m=Object(a.a)(h,2),x=m[0],f=m[1],v=Object(s.useState)(null),k=Object(a.a)(v,2),w=k[0],C=k[1],S=function(e){return b(e)},E=Object(s.useState)(null),I=Object(a.a)(E,2),z=I[0],M=I[1],D=function(e){console.log("Setting snack message",e),C(e)},R=function(){console.log("snack close, set snack false, message null"),f(!1),C(null)},P=function(e){"unauthenticated"===e.status&&(D("You have been logged out. Navigating to login page"),f(!0),setInterval((function(){return M("unauthenticated")}),3e3)),"forbidden"===e.status&&(D("You do not have access to this memory. Navigating to memories page"),f(!0),setInterval((function(){return M("forbidden")}),3e3))};return Object(s.useEffect)((function(){y(t,n,c,S,P);var e=setInterval((function(){return y(t,n,c,S,P)}),3e5);return function(){return clearInterval(e)}}),[]),"unauthenticated"===z?Object(g.jsx)(i.a,{to:"/login"}):"forbidden"===z?Object(g.jsx)(i.a,{to:"/memories"}):(console.log("memory",u,"memError",z),u?Object(g.jsxs)(d.a,{children:[Object(g.jsx)(j.a,{memTitle:u.title,memDate:u.date,memImages:u.pictures.photos,memEditorState:l.EditorState.createWithContent(Object(l.convertFromRaw)(u.contentState)),memoryID:c,bucket:t,authURL:n,preview:!1}),Object(g.jsx)(p.a,{snackBarOpen:x,message:w,onClose:R})]}):Object(g.jsxs)(d.a,{children:[Object(g.jsx)(O,{}),Object(g.jsx)(p.a,{snackBarOpen:x,message:w,onClose:R})]}))}}}]);
//# sourceMappingURL=9.b07335df.chunk.js.map