(this.webpackJsonpprelaunch=this.webpackJsonpprelaunch||[]).push([[9],{163:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(10),c=n(0),r=n(676),o=n(687),i=n(140),s=n.n(i),l=n(3);function u(e){var t=e.snackBarOpen,n=e.message,i=e.onClose,u=Object(c.useState)(t),d=Object(a.a)(u,2),j=d[0],b=d[1],h=Object(c.useState)(n),x=Object(a.a)(h,2),m=x[0],O=x[1];Object(c.useEffect)((function(){return b(t)}),[t]),Object(c.useEffect)((function(){return O(n)}),[n]);var f=function(){b(!1),O(null),i()},p=Object(l.jsx)(o.a,{size:"small","aria-label":"close",color:"inherit",onClick:f,children:Object(l.jsx)(s.a,{fontSize:"small"})});return console.log("in snackbar",j,n),Object(l.jsx)(r.a,{open:j,autoHideDuration:3e3,onClose:f,message:m,action:p,anchorOrigin:{vertical:"top",horizontal:"center"}})}},177:function(e,t,n){},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(10),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];Object(c.useEffect)((function(){return o(e)}),[e]);return[r,o,function(e){o(e.target.value)}]}},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(10),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];return[r,o,function(e){var t=new Date(e);if(e){var n=t.toLocaleDateString("en-in",{day:"numeric",month:"long",year:"numeric"});o(n)}else o(null)}]}},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(10),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];return[r,o,function(e){return o(e)}]}},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(687),c=n(140),r=n.n(c),o=n(106),i=n(3);function s(e){var t=e.size,n=e.handleClick;return Object(i.jsx)(a.a,{size:t,sx:{color:"black",bgcolor:Object(o.a)("#fff",.4),position:"absolute",top:10,right:12},onClick:n,children:Object(i.jsx)(r.a,{size:t})})}s.defaultProps={size:"small"}},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var a=n(10),c=n(134),r=n(135),o=n.n(r),i=n(0),s=n(4),l=n(693),u=n(691),d=n(94),j=n(209),b=n.n(j),h=n(665),x=n(142),m=n(652),O=n(687),f=n(145),p=n.n(f),g=n(3);function y(){return Object(g.jsxs)(d.a,{sx:{alignItems:"center"},onClick:function(){},children:[Object(g.jsx)(O.a,{"aria-label":"update",sx:{bgcolor:"form.input"},onClick:function(){},children:Object(g.jsx)(p.a,{})}),"Edit"]})}var v=n(208),k=n.n(v);function w(){return Object(g.jsxs)(d.a,{sx:{alignItems:"center"},children:[Object(g.jsx)(O.a,{"aria-label":"delete",sx:{bgcolor:"form.input"},children:Object(g.jsx)(k.a,{})}),"Delete"]})}var C=n(163),S=n(621),E=n(694),I=n(692),z=n(682),M=n(50),D=n(653),R=n(662);function P(e){var t=e.confirm,n=e.handleCallback,c=e.handleCloseCallback,r=e.title,o=e.message,s=Object(i.useState)(t),l=Object(a.a)(s,2),u=l[0],j=l[1];Object(i.useEffect)((function(){return j(t)}),[t]);var b=function(){j(!1),c()};return console.log("in confirm",u),Object(g.jsxs)(I.a,{open:u,sx:{backgroundColor:"faded.black"},children:[Object(g.jsx)(R.a,{children:r}),Object(g.jsxs)(d.a,{sx:{p:2},children:[Object(g.jsx)(M.a,{sx:{pb:2},children:o}),Object(g.jsxs)(D.a,{spacing:2,direction:"row",children:[Object(g.jsx)(z.a,{variant:"contained",onClick:b,children:"Cancel"}),Object(g.jsx)(z.a,{variant:"outlined",onClick:function(){b(),n()},children:"OK"})]})]})]})}function U(e){var t=e.deleteItem,n=e.updateItem,c=e.snackBar,r=e.confirmMessage,o=e.handleDeleteObject,s=e.handleEditClick,l=Object(i.useState)(!1),u=Object(a.a)(l,2),d=u[0],j=u[1],h=Object(i.useState)(null),x=Object(a.a)(h,2),m=x[0],O=x[1],f=Boolean(m),p=function(){return O(null)};return Object(g.jsxs)("div",{children:[Object(g.jsx)(b.a,{onClick:function(e){return O(e.currentTarget)}}),Object(g.jsxs)(S.a,{id:"basic-menu",anchorEl:m,open:f,onClose:p,MenuListProps:{"aria-labelledby":"basic-button"},sx:{borderRadius:"10px"},children:[Object(g.jsx)(E.a,{onClick:function(){s(),p()},children:n}),Object(g.jsx)(E.a,{onClick:function(){j(!0),p()},children:t})]}),Object(g.jsx)(P,{title:"Delete Memory",confirm:d,handleCallback:o,handleCloseCallback:function(){return j(!1)},message:r}),c]})}var L=n(146);function T(){return(T=Object(c.a)(o.a.mark((function e(t,n,a,c){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.deleteMemory(t,n,a);case 3:r=e.sent,c(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function B(e){var t,n=e.header,c=e.subheader,r=e.photoLayout,o=e.storyLayout,j=e.bucket,O=e.memoryID,f=e.authURL,p=e.handleEditClick,v=e.preview,k=Object(i.useState)(null),S=Object(a.a)(k,2),E=S[0],I=S[1],z=Object(i.useState)(null),M=Object(a.a)(z,2),D=M[0],R=M[1],P=Object(x.a)();t=Object(m.a)(P.breakpoints.down("lg"))?"":"vertical-scroll";var L=function(e){return R(e)},B=function(e){"ok"===e.status?L("Memory deleted successfully"):L("Error while deleting memory"),I(!0)},N=Object(g.jsx)(C.a,{snackBarOpen:E,message:D,onClose:function(){I(!1)}}),F=v?Object(g.jsx)(b.a,{}):Object(g.jsx)(U,{confirmMessage:"Do you want to delete this memory?",snackBar:N,handleDeleteObject:function(){!function(e,t,n,a){T.apply(this,arguments)}(j,f,O,B)},deleteItem:Object(g.jsx)(w,{}),updateItem:Object(g.jsx)(y,{}),handleEditClick:p});return console.log("Rendering",E,D),!1===E?Object(g.jsx)(s.a,{to:"/memories",replace:!0}):Object(g.jsxs)(l.a,{sx:{boxShadow:0,bgcolor:"button.main",p:1},children:[Object(g.jsx)(u.a,{title:n,subheader:c,action:F}),Object(g.jsx)(h.a,{}),Object(g.jsxs)(d.a,{sx:{display:"flex",justifyContent:"flex-start",flexDirection:{lg:"row",xs:"column"},height:{lg:"72vh"},my:1},children:[Object(g.jsx)(d.a,{sx:{width:{lg:"70%",xs:"100%"},overflowY:"scroll",borderRadius:5},className:t,children:r}),Object(g.jsx)(d.a,{sx:{width:{lg:"30%",sx:"100%"},overflowY:"scroll",mt:{lg:0,xs:2},p:{lg:1},px:1},className:t,children:o})]})]})}},258:function(e,t,n){"use strict";n.d(t,"a",(function(){return ge}));var a=n(134),c=n(10),r=n(135),o=n.n(r),i=n(0),s=n(143),l=n(682),u=n(690),d=n(325),j=n.n(d),b=n(324),h=n.n(b),x=n(50),m=n(653),O=n(94),f=n(692),p=n(691),g=n(321),y=n.n(g),v=n(320),k=n.n(v),w=n(687),C=n(314),S=n.n(C),E=n(317),I=n(3),z=Object(E.autoPlay)(S.a);function M(e){var t=e.index,n=e.images,a=e.handleNext,r=i.useState(t),o=Object(c.a)(r,2),s=o[0],l=o[1];i.useEffect((function(){l(t)}),[t]);var u=n.map((function(e){var t=(e.images?e.images.map((function(e){var t=e.src,n=e.width;return"".concat(t," ").concat(n,"w")})):[]).join(",");return Object(I.jsx)(O.a,{component:"img",sx:{display:"flex",justifyContents:"center",width:"100%",bgcolor:"#1c1c1c"},src:e.src,srcSet:t,style:{display:"block",boxSizing:"content-box",cursor:"pointer",objectFit:"contain",height:"100vh"},alt:e.src},e.src)}));return Object(I.jsx)(z,{index:s,onChangeIndex:function(e){l(e)},enableMouseEvents:!0,animateTransitions:!0,interval:1e4,onClick:a,springConfig:{duration:"0.7s",easeFunction:"cubic-bezier(0.83, 0, 0.17, 1)",delay:"0s"},style:{backgroundColor:"muted.main"},children:u})}M.defaultProps={index:0};var D=n(207);function R(e){var t=e.handleClick;return Object(I.jsx)(w.a,{edge:"start",color:"primary","aria-label":"close",onClick:t,sx:{position:"absolute",top:"50%",right:0,transform:"translate(0%, -50%)"},children:Object(I.jsx)(k.a,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function P(e){var t=e.handleClick;return Object(I.jsx)(w.a,{edge:"start",color:"primary","aria-label":"close",onClick:t,sx:{position:"absolute",top:"50%",left:0,transform:"translate(0%, -50%)"},children:Object(I.jsx)(y.a,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function U(e){var t=e.open,n=e.title,a=e.date,c=e.images,r=e.index,o=e.handleNext,i=e.handleBack,s=e.handleClose;return Object(I.jsxs)(f.a,{open:t,fullScreen:!0,children:[Object(I.jsx)(M,{images:c,index:r,handleNext:o}),Object(I.jsx)(p.a,{title:n,subheader:a,sx:{position:"absolute",top:10,left:10,bgcolor:"button.main",borderRadius:3,padding:1}}),Object(I.jsx)(P,{handleClick:i}),Object(I.jsx)(R,{handleClick:o}),Object(I.jsx)(D.a,{size:"large",handleClick:s})]})}U.defaultProps={index:0};var L=n(219),T=n(671),B=n(164),N=n.n(B),F=n(165),Y=n.n(F),A=n(145),W=n.n(A),H=n(198);function J(e){var t=e.editable,n=e.text,a=e.handleTitleUpdate,r=Object(H.a)(n),o=Object(c.a)(r,3),s=o[0],l=o[1],u=o[2],d=Object(i.useState)(t),j=Object(c.a)(d,2),b=j[0],h=j[1],O=Object(i.useState)(!1),f=Object(c.a)(O,2),p=f[0],g=f[1];return Object(i.useEffect)((function(){h(t),l(n),g(!1)}),[t]),console.log("Memory Title ",b,p,s),b||p?b&&!p?Object(I.jsxs)(m.a,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[Object(I.jsx)(x.a,{variant:"h6",children:s}),Object(I.jsx)(W.a,{fontSize:"medium",onClick:function(){return g(!0)}})]}):b&&p?Object(I.jsxs)(m.a,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start"},spacing:2,children:[Object(I.jsx)(T.a,{id:"standard-basic",size:"small",label:"Title",onChange:u,variant:"standard",defaultValue:s,sx:{maxWidth:"200px"}}),Object(I.jsx)(N.a,{fontSize:"medium",onClick:function(){console.log(s),a(s),g(!1)}}),Object(I.jsx)(Y.a,{fontSize:"medium",onClick:function(){l(n),g(!1)}})]}):void 0:Object(I.jsx)(x.a,{variant:"h6",children:s})}var X=n(51),q=n(669),K=n(511),V=n(668),G=n(199);function Q(e){var t=e.editable,n=e.prevDate,a=e.handleDateUpdate,r=Object(i.useState)(t),o=Object(c.a)(r,2),s=o[0],l=o[1],u=Object(i.useState)(!1),d=Object(c.a)(u,2),j=d[0],b=d[1],h=Object(G.a)(n),O=Object(c.a)(h,3),f=O[0],p=O[1],g=O[2];return Object(i.useEffect)((function(){l(t),p(n),b(!1)}),[t,n]),console.log("Memory Date ",s,j,f),s||j?s&&!j?Object(I.jsxs)(m.a,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[Object(I.jsx)(x.a,{children:f}),Object(I.jsx)(W.a,{fontSize:"medium",onClick:function(){return b(!0)}})]}):s&&j?Object(I.jsxs)(m.a,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start",mt:3},spacing:2,children:[Object(I.jsx)(K.a,{dateAdapter:V.a,children:Object(I.jsx)(q.a,{label:"Memory Date",value:f,onChange:g,placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return Object(I.jsx)(T.a,Object(X.a)({readOnly:!0,required:!0},e))}})}),Object(I.jsx)(N.a,{fontSize:"medium",onClick:function(){a(f),b(!1)}}),Object(I.jsx)(Y.a,{fontSize:"medium",onClick:function(){p(n),b(!1)}})]}):void 0:Object(I.jsx)(x.a,{children:f})}var Z=n(665),$=n(200);n(177);function _(e){var t=e.editable,n=e.prevEditorState,a=e.handleEditorStateUpdate,r=Object(i.useState)(t),o=Object(c.a)(r,2),l=o[0],u=o[1],d=Object(i.useState)(!1),j=Object(c.a)(d,2),b=j[0],h=j[1],f=Object($.a)(n),p=Object(c.a)(f,3),g=p[0],y=p[1],v=p[2],k=Object(i.useRef)();return Object(i.useEffect)((function(){u(t),y(n),h(!1)}),[t,n]),console.log("Memory Title ",l,b),l||b?l&&!b?Object(I.jsxs)(m.a,{direction:"column",spacing:2,children:[Object(I.jsxs)(m.a,{direction:"row",spacing:2,justifyContent:"flex-end",children:[Object(I.jsx)(x.a,{sx:{color:"muted.main"},children:"Edit Story"}),Object(I.jsx)(W.a,{fontSize:"medium",onClick:function(){h(!0)}})]}),Object(I.jsx)(Z.a,{sx:{width:1}}),Object(I.jsx)(s.Editor,{readOnly:!0,editorState:g})]}):l&&b?Object(I.jsxs)(m.a,{direction:"column",spacing:2,children:[Object(I.jsxs)(m.a,{direction:"row",spacing:2,justifyContent:"flex-end",children:[Object(I.jsx)(x.a,{sx:{color:"muted.main"},children:"Editing Story"}),Object(I.jsx)(N.a,{fontSize:"medium",onClick:function(){a(JSON.stringify(Object(s.convertToRaw)(g.getCurrentContent())),g),h(!1)}}),Object(I.jsx)(Y.a,{fontSize:"medium",onClick:function(){y(n),h(!1)}})]}),Object(I.jsx)(Z.a,{sx:{width:1}}),Object(I.jsx)(O.a,{sx:{p:2,m:1,my:2,border:1,borderColor:"primary.main",bgcolor:"input.background",minHeight:"200px",borderRadius:5,width:"90%"},onClick:function(){return k.current.focus()},children:Object(I.jsx)(s.Editor,{autoFocus:!0,onChange:v,editorState:g,ref:k})})]}):void 0:Object(I.jsx)(s.Editor,{readOnly:!0,editorState:g})}var ee=n(248),te=n(249),ne=n(674),ae=n(695),ce=n(208),re=n.n(ce),oe=n(323),ie=n.n(oe),se=n(140),le=n.n(se),ue=n(106),de=["alt","style"],je=["alt","style"];function be(e){var t=e.children,n=e.onClick,a=e.name,c=e.updateOp;return Object(I.jsx)(l.a,{id:a,variant:"contained",component:"label",onClick:n,sx:{color:c===a?"button.main":"muted.main",borderRadius:5,backgroundColor:c===a?"primary.main":"button.main",padding:"6px 8px"},children:t})}function he(e){var t=e.handleChange,n=e.onClick,a=e.updateOp;return Object(I.jsxs)(be,{onClick:n,name:"add",updateOp:a,children:[Object(I.jsx)("input",{type:"file",hidden:!0,multiple:!0,accept:"image/*",onChange:t}),Object(I.jsx)(ie.a,{sx:{fontSize:"1.5rem"}}),"Add"]})}function xe(e){var t=e.images,n=e.handlePhotoClick,a=e.renderPhoto,r=Object(i.useState)(null),o=Object(c.a)(r,2),s=o[0],l=o[1];return Object(i.useEffect)((function(){var e=0,n=0;t.forEach((function(t){t.height>t.width?n+=1:e+=1})),l(e>n?"rows":"columns")}),[t]),a?Object(I.jsx)(te.a,{layout:s,photos:t,onClick:n,spacing:2,renderPhoto:a}):Object(I.jsx)(te.a,{layout:s,photos:t,onClick:n,spacing:2})}function me(e){var t=e.editable,n=e.images,a=e.handlePhotoClick,r=e.handleThumbnailUpdate,o=e.deleteImage,s=e.addImage,u=Object(i.useState)(t),d=Object(c.a)(u,2),j=d[0],b=d[1],h=Object(i.useState)(null),O=Object(c.a)(h,2),f=O[0],p=O[1],g=Object(i.useState)(null),y=Object(c.a)(g,2),v=y[0],k=y[1];console.log("memory images",f,j),Object(i.useEffect)((function(){b(t),p(null)}),[t]);var C=Object(I.jsxs)(m.a,{direction:"row",spacing:2,children:[Object(I.jsx)(he,{handleChange:s,onClick:function(){return p("add")},updateOp:f}),Object(I.jsxs)(be,{onClick:function(){return p("delete")},name:"delete",updateOp:f,children:[Object(I.jsx)(re.a,{sx:{fontSize:"1.5rem"}}),"Delete"]}),Object(I.jsx)(be,{onClick:function(){return p("thumbnail")},name:"thumbnail",updateOp:f,children:"Set Thumbnail"})]}),S=Object(I.jsx)(m.a,{direction:"row",children:Object(I.jsxs)(x.a,{variant:"h6",color:"muted.main",children:["Images:",n.length]})});return j?j&&"delete"===f?Object(I.jsxs)(m.a,{direction:"column",spacing:2,sx:{p:2},children:[S,C,Object(I.jsx)(xe,{images:n,handlePhotoClick:a,renderPhoto:function(e){var t=e.layout,a=e.layoutOptions,c=e.imageProps,r=c.alt,i=c.style,s=Object(ee.a)(c,de);return console.log(t,a),Object(I.jsxs)(l.a,{component:"div",children:[Object(I.jsx)("img",Object(X.a)({alt:r,style:Object(X.a)(Object(X.a)({},i),{},{width:t.width,padding:0})},s)),Object(I.jsx)(w.a,{size:"medium",sx:{color:"black",bgcolor:Object(ue.a)("#fff",.4),position:"absolute",top:10,right:12},onClick:function(){return function(e){var t=n.find((function(t){return t.alt===e}));o(t)}(r)},children:Object(I.jsx)(le.a,{size:"medium"})})]})}})]}):j&&"thumbnail"===f?Object(I.jsxs)(m.a,{direction:"column",spacing:2,sx:{p:2},children:[S,C,Object(I.jsx)(xe,{images:n,handlePhotoClick:a,renderPhoto:function(e){var t=e.layout,a=e.layoutOptions,c=e.imageProps,o=c.alt,i=c.style,s=Object(ee.a)(c,je);return console.log(a),Object(I.jsxs)(l.a,{component:"div",children:[Object(I.jsx)("img",Object(X.a)({alt:o,style:Object(X.a)(Object(X.a)({},i),{},{width:t.width,padding:0})},s)),Object(I.jsx)(ae.a,{control:Object(I.jsx)(ne.a,{}),label:"",checked:o===v,onChange:function(){return function(e){console.log("name",e),console.log("images",n),k(e);var t=n.find((function(t){return t.alt===e}));console.log("thumbnail image",t),r(t)}(o)},sx:{pr:1,position:"absolute",bgcolor:Object(ue.a)("#fff",.6),color:"black",borderRadius:"0px 5px 5px 0px",borderColor:"secondary.main",borderLeft:0,bottom:20,left:15}})]})}})]}):j&&"add"===f||j&&!f?Object(I.jsxs)(m.a,{direction:"column",spacing:2,sx:{p:2},children:[S,C,Object(I.jsx)(xe,{images:n,handlePhotoClick:a})]}):void 0:Object(I.jsx)(xe,{images:n,handlePhotoClick:a})}xe.defaultProps={renderPhoto:null},be.defaultProps={onClick:function(){}};var Oe=n(146),fe=n(163);function pe(e){return!1===e.preview?Object(I.jsx)(m.a,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:Object(I.jsx)(u.a,{href:"/",underline:"none",children:Object(I.jsxs)(l.a,{variant:"contained",component:"label",sx:{color:"primary.main",backgroundColor:"button.main",padding:"6px 8px",boxShadow:0,"&:hover":{backgroundColor:"button.main"}},children:[Object(I.jsx)(h.a,{size:"medium",sx:{paddingRight:1}}),Object(I.jsx)(x.a,{variant:"body1",color:"muted.main",children:"Memories"})]})})}):null}function ge(e){var t=e.memTitle,n=e.memDate,r=e.memEditorState,s=e.memImages,u=e.bucket,d=e.memoryID,b=e.authURL,h=e.preview,f=Object(i.useState)(!1),p=Object(c.a)(f,2),g=p[0],y=p[1],v=Object(i.useState)(!1),k=Object(c.a)(v,2),w=k[0],C=k[1],S=Object(i.useState)(0),E=Object(c.a)(S,2),z=E[0],M=E[1],D=Object(i.useState)(t),R=Object(c.a)(D,2),P=R[0],T=R[1],B=Object(i.useState)(n),N=Object(c.a)(B,2),F=N[0],Y=N[1],A=Object(i.useState)(r),W=Object(c.a)(A,2),H=W[0],X=W[1],q=Object(i.useState)(s),K=Object(c.a)(q,2),V=K[0],G=K[1],Z=Object(i.useState)(null),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ne=Object(i.useState)(null),ae=Object(c.a)(ne,2),ce=ae[0],re=ae[1],oe=Object(i.useState)([]),ie=Object(c.a)(oe,2),se=ie[0],le=ie[1],ue=Object(i.useState)(null),de=Object(c.a)(ue,2),je=de[0],be=de[1];console.log("images",V);var he=V.length;Object(i.useEffect)((function(){return T(t)}),[t]),Object(i.useEffect)((function(){return Y(n)}),[n]),Object(i.useEffect)((function(){return X(r)}),[r]),Object(i.useEffect)((function(){return G(s)}),[s]);var xe=function(e){console.log("Setting snack message",e),re(e)},ge=function(){var e=Object(a.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Oe.a.updateMemoryDetails(u,b,d,t,n);case 3:return a=e.sent,xe(a?"Memory ".concat(t," updated successfully"):"Error while updating memory ".concat(t)),te(!0),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),ye=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Oe.a.updateMemoryImage(u,b,d,"thumbnail",t);case 3:return n=e.sent,console.log("Response",n),n.ok?xe("Memory thumbnail updated successfully"):xe("Error while updating memory thumbnail"),te(!0),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(V.length>1)){e.next=9;break}return e.next=4,Oe.a.updateMemoryImage(u,b,d,"delete",t);case 4:n=e.sent,console.log("Response",n),n?(console.log("set snack message - successfully deleted memory image"),xe("Memory image deleted successfully"),G(V.filter((function(e){return e.title!==t.title})))):(console.log("set snack message - error while deleting memory image"),xe("Error while deleting memory image")),e.next=11;break;case 9:console.log("set snack message - atleast one image is needed for memory"),xe("Atleast 1 image is needed for memory. Unable to delete");case 11:return te(!0),e.abrupt("return",n);case 15:return e.prev=15,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("addImage details",t),e.next=4,Oe.a.updateMemoryImage(u,b,d,"add",t);case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)(Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:se.length===je&&(C(!1),console.log(se,je),se.forEach(function(){var e=Object(a.a)(o.a.mark((function e(t){var n,a,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(c.a)(t,3),a=n[0],r=n[2],console.log(a.name,r),e.next=4,ke(a).then((function(e){return e.text()}));case 4:return i=e.sent,e.t0=console,e.t1=a.name,e.next=9,i;case 9:e.t2=e.sent,e.t0.log.call(e.t0,"response for ",e.t1,e.t2);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.log("Add done"),C(!0));case 1:case"end":return e.stop()}}),e)}))),[se]);var we=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.files&&(n=Array.from(t.target.files),console.log("files to add:",n.length,"exsting images:",V.length),be(n.length),V.length+n.length<=15?(n.forEach((function(e){var t=new Image;t.onload=function(){var t=Object(a.a)(o.a.mark((function t(n){var a,c,r,i,s,l,u,d;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.target.naturalHeight,c=n.target.naturalWidth,r=e.size/1048576,i=e.name,s=[500,1e3,1500].map((function(e){return{height:e,width:Math.ceil(e*c/a)}})),l=Date.now(),u="".concat(l,"-").concat(i),d=[{name:u,size:r,height:a,width:c,images:s},e,n.target.src],le((function(e){return e.concat([d])}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.src=URL.createObjectURL(e)})),n.map((function(e){return URL.revokeObjectURL(e)}))):(console.log("Setting snack message - error adding image as exceeding 15"),xe("Unable to add ".concat(n.length," images. Maximum images allowed pre memory is 15")),te(!0)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=Object(I.jsx)(J,{editable:w,text:P,handleTitleUpdate:function(e){ge("title",e)&&T(e)}}),Se=Object(I.jsx)(Q,{editable:w,prevDate:F,handleDateUpdate:function(e){ge("date",e)&&Y(e)}}),Ee=Object(I.jsx)(_,{editable:w,prevEditorState:H,handleEditorStateUpdate:function(e,t){ge("story",e)&&X(t)}}),Ie=Object(I.jsx)(me,{editable:w,images:V,handlePhotoClick:function(e,t,n){y(!0),M(n)},handleThumbnailUpdate:ye,deleteImage:ve,addImage:we}),ze=Object(I.jsxs)(l.a,{variant:"contained",component:"label",onClick:function(){return C(!1)},sx:{color:"primary.main",borderRadius:5,backgroundColor:"button.main",padding:"6px 8px"},children:[Object(I.jsx)(j.a,{size:"medium",sx:{paddingRight:1}}),Object(I.jsx)(x.a,{variant:"body1",color:"muted.main",children:"Edit"})]});return console.log("preview",h),Object(I.jsxs)(I.Fragment,{children:[w?Object(I.jsx)(m.a,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:ze}):Object(I.jsx)(pe,{preview:h}),Object(I.jsx)(O.a,{component:"div",sx:{backgroundColor:"button.main",margin:w?"5px":0},children:Object(I.jsx)(L.a,{header:Ce,subheader:Se,photoLayout:Ie,storyLayout:Ee,memoryID:d,bucket:u,authURL:b,handleEditClick:function(){return C(!0)},preview:h})}),Object(I.jsx)(U,{open:g,title:P,date:F,images:V,index:z,handleNext:function(){M((function(e){return(e+1)%he}))},handleBack:function(){M((function(e){return(e-1+he)%he}))},handleClose:function(){return y(!1)}}),Object(I.jsx)(fe.a,{snackBarOpen:ee,message:ce,onClose:function(){console.log("snack close, set snack false, message null"),te(!1),re(null)}})]})}ge.defaultProps={memTitle:"Memory Title",memDate:"Memory Date",memEditorState:s.EditorState.createWithText("Memory Text")}},680:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(10),c=n(134),r=n(135),o=n.n(r),i=n(4),s=n(0),l=n(143),u=n(146),d=n(218),j=n(258),b=n(686),h=n(249),x=n(219),m=n(349),O=[{key:1,src:m.a,width:667,height:500},{key:2,src:m.a,width:667,height:500},{key:3,src:m.a,width:375,height:500},{key:4,src:m.a,width:667,height:500},{key:5,src:m.a,width:375,height:500},{key:6,src:m.a,width:667,height:500},{key:7,src:m.a,width:667,height:500},{key:8,src:m.a,width:667,height:500},{key:9,src:m.a,width:667,height:500},{key:10,src:m.a,width:667,height:500},{key:11,src:m.a,width:375,height:500},{key:12,src:m.a,width:375,height:500},{key:13,src:m.a,width:375,height:500},{key:14,src:m.a,width:375,height:500},{key:15,src:m.a,width:667,height:500}],f=n(3);function p(){return Object(f.jsx)(x.a,{header:Object(f.jsx)(b.a,{type:"rectangular",sx:{width:{lg:"20%",md:"30%",xs:"70%"}}}),subheader:Object(f.jsx)(b.a,{type:"rectangular",sx:{width:{lg:"15%",md:"20%",xs:"60%"}}}),photoLayout:Object(f.jsx)(h.a,{layout:"rows",photos:O,spacing:2}),storyLayout:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"98%"}}),Object(f.jsx)(b.a,{type:"rectangular",sx:{width:"50%"}})]})})}var g=n(163);function y(e,t,n,a,c){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(o.a.mark((function e(t,n,a,c,r){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.viewMemory(t,n,a);case 3:if(i=e.sent,console.log(i),!i.status){e.next=8;break}return r(i),e.abrupt("return");case 8:c(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function k(e){var t=e.bucket,n=e.authURL,c=Object(i.h)().memoryId,r=Object(s.useState)(),o=Object(a.a)(r,2),u=o[0],b=o[1],h=Object(s.useState)(null),x=Object(a.a)(h,2),m=x[0],O=x[1],v=Object(s.useState)(null),k=Object(a.a)(v,2),w=k[0],C=k[1],S=function(e){return b(e)},E=Object(s.useState)(null),I=Object(a.a)(E,2),z=I[0],M=I[1],D=function(e){console.log("Setting snack message",e),C(e)},R=function(){console.log("snack close, set snack false, message null"),O(!1),C(null)},P=function(e){"unauthenticated"===e.status&&(D("You have been logged out. Navigating to login page"),O(!0),setInterval((function(){return M("unauthenticated")}),3e3)),"forbidden"===e.status&&(D("You do not have access to this memory. Navigating to memories page"),O(!0),setInterval((function(){return M("forbidden")}),3e3))};return Object(s.useEffect)((function(){y(t,n,c,S,P);var e=setInterval((function(){return y(t,n,c,S,P)}),3e5);return function(){return clearInterval(e)}}),[]),"unauthenticated"===z?Object(f.jsx)(i.a,{to:"/login"}):"forbidden"===z?Object(f.jsx)(i.a,{to:"/memories"}):(console.log("memory",u,"memError",z),u?Object(f.jsxs)(d.a,{children:[Object(f.jsx)(j.a,{memTitle:u.title,memDate:u.date,memImages:u.pictures.photos,memEditorState:l.EditorState.createWithContent(Object(l.convertFromRaw)(u.contentState)),memoryID:c,bucket:t,authURL:n,preview:!1}),Object(f.jsx)(g.a,{snackBarOpen:m,message:w,onClose:R})]}):Object(f.jsxs)(d.a,{children:[Object(f.jsx)(p,{}),Object(f.jsx)(g.a,{snackBarOpen:m,message:w,onClose:R})]}))}}}]);
//# sourceMappingURL=9.abf5860c.chunk.js.map