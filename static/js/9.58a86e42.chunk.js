(this.webpackJsonpprelaunch=this.webpackJsonpprelaunch||[]).push([[9],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(11),c=n(0),r=n(505),o=n(516),i=n(134),s=n.n(i),l=n(113),u=n(179),d=n.n(u),j=n(50),b=n(3);function h(e){var t=e.message;return!0===e.error?Object(b.jsxs)(l.a,{direction:"row",spacing:2,justifyContents:"space-between",alignItems:"center",children:[Object(b.jsx)(s.a,{fontSize:"small",color:"error"}),Object(b.jsx)(j.a,{children:t})]}):Object(b.jsxs)(l.a,{direction:"row",spacing:2,justifyContents:"space-between",alignItems:"center",children:[Object(b.jsx)(d.a,{fontSize:"small",color:"success"}),Object(b.jsx)(j.a,{children:t})]})}function O(e){var t=e.snackBarOpen,n=e.message,i=e.onClose,l=e.error,u=Object(c.useState)(t),d=Object(a.a)(u,2),j=d[0],O=d[1],x=Object(c.useState)(n),m=Object(a.a)(x,2),f=m[0],g=m[1];Object(c.useEffect)((function(){return O(t)}),[t]),Object(c.useEffect)((function(){return g(n)}),[n]);var p=function(){O(!1),g(null),i()},y=Object(b.jsx)(o.a,{size:"small","aria-label":"close",color:"inherit",onClick:p,children:Object(b.jsx)(s.a,{fontSize:"small"})});return console.log("in snackbar",j,n),Object(b.jsx)(r.a,{open:j,autoHideDuration:3e3,onClose:p,message:Object(b.jsx)(h,{message:f,error:l}),action:y,anchorOrigin:{vertical:"top",horizontal:"center"}})}O.defaultProps={error:!1}},158:function(e,t,n){},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(11),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];Object(c.useEffect)((function(){return o(e)}),[e]);return[r,o,function(e){o(e.target.value)}]}},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(11),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];return[r,o,function(e){var t=new Date(e);if(e){var n=t.toLocaleDateString("en-in",{day:"numeric",month:"long",year:"numeric"});o(n)}else o(null)}]}},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(11),c=n(0);function r(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1];return[r,o,function(e){return o(e.target.value)}]}},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(516),c=n(134),r=n.n(c),o=n(108),i=n(3);function s(e){var t=e.size,n=e.handleClick;return Object(i.jsx)(a.a,{size:t,sx:{color:"black",bgcolor:Object(o.a)("#fff",.4),position:"absolute",top:10,right:12},onClick:n,children:Object(i.jsx)(r.a,{size:t})})}s.defaultProps={size:"small"}},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var a=n(11),c=n(128),r=n(129),o=n.n(r),i=n(0),s=n(4),l=n(518),u=n(522),d=n(94),j=n(180),b=n.n(j),h=n(493),O=n(136),x=n(481),m=n(516),f=n(137),g=n.n(f),p=n(3);function y(){return Object(p.jsxs)(d.a,{sx:{alignItems:"center"},onClick:function(){},children:[Object(p.jsx)(m.a,{"aria-label":"update",sx:{bgcolor:"form.input"},onClick:function(){},children:Object(p.jsx)(g.a,{})}),"Edit"]})}var v=n(178),k=n.n(v);function w(){return Object(p.jsxs)(d.a,{sx:{alignItems:"center"},children:[Object(p.jsx)(m.a,{"aria-label":"delete",sx:{bgcolor:"form.input"},children:Object(p.jsx)(k.a,{})}),"Delete"]})}var C=n(149),S=n(450),I=n(523),z=n(517),E=n(510),M=n(50),D=n(113),P=n(490);function R(e){var t=e.confirm,n=e.handleCallback,c=e.handleCloseCallback,r=e.title,o=e.message,s=Object(i.useState)(t),l=Object(a.a)(s,2),u=l[0],j=l[1];Object(i.useEffect)((function(){return j(t)}),[t]);var b=function(){j(!1),c()};return console.log("in confirm",u),Object(p.jsxs)(z.a,{open:u,sx:{backgroundColor:"faded.black"},children:[Object(p.jsx)(P.a,{children:r}),Object(p.jsxs)(d.a,{sx:{p:2},children:[Object(p.jsx)(M.a,{sx:{pb:2},children:o}),Object(p.jsxs)(D.a,{spacing:2,direction:"row",children:[Object(p.jsx)(E.a,{variant:"contained",onClick:b,children:"Cancel"}),Object(p.jsx)(E.a,{variant:"outlined",onClick:function(){b(),n()},children:"OK"})]})]})]})}function U(e){var t=e.deleteItem,n=e.updateItem,c=e.snackBar,r=e.confirmMessage,o=e.handleDeleteObject,s=e.handleEditClick,l=Object(i.useState)(!1),u=Object(a.a)(l,2),d=u[0],j=u[1],h=Object(i.useState)(null),O=Object(a.a)(h,2),x=O[0],m=O[1],f=Boolean(x),g=function(){return m(null)};return Object(p.jsxs)("div",{children:[Object(p.jsx)(b.a,{onClick:function(e){return m(e.currentTarget)}}),Object(p.jsxs)(S.a,{id:"basic-menu",anchorEl:x,open:f,onClose:g,MenuListProps:{"aria-labelledby":"basic-button"},sx:{borderRadius:"10px"},children:[Object(p.jsx)(I.a,{onClick:function(){s(),g()},children:n}),Object(p.jsx)(I.a,{onClick:function(){j(!0),g()},children:t})]}),Object(p.jsx)(R,{title:"Delete Memory",confirm:d,handleCallback:o,handleCloseCallback:function(){return j(!1)},message:r}),c]})}var L=n(138);function T(){return(T=Object(c.a)(o.a.mark((function e(t,n,a,c){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.deleteMemory(t,n,a);case 3:r=e.sent,c(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function B(e){var t,n=e.header,c=e.subheader,r=e.photoLayout,o=e.storyLayout,j=e.bucket,m=e.memoryID,f=e.authURL,g=e.handleEditClick,v=e.preview,k=Object(i.useState)(null),S=Object(a.a)(k,2),I=S[0],z=S[1],E=Object(i.useState)(null),M=Object(a.a)(E,2),D=M[0],P=M[1],R=Object(i.useState)(null),L=Object(a.a)(R,2),B=L[0],Y=L[1],N=Object(O.a)();t=Object(x.a)(N.breakpoints.down("lg"))?"":"vertical-scroll";var A=function(e,t){P(e),Y(t)},F=function(e){"ok"===e.status?A("Memory deleted successfully",!1):A("Error while deleting memory",!0),z(!0)},H=Object(p.jsx)(C.a,{snackBarOpen:I,message:D,onClose:function(){z(!1),P(null),Y(null)},error:B}),W=v?Object(p.jsx)(b.a,{}):Object(p.jsx)(U,{confirmMessage:"Do you want to delete this memory?",snackBar:H,handleDeleteObject:function(){!function(e,t,n,a){T.apply(this,arguments)}(j,f,m,F)},deleteItem:Object(p.jsx)(w,{}),updateItem:Object(p.jsx)(y,{}),handleEditClick:g});return console.log("Rendering",I,D),!1===I?Object(p.jsx)(s.a,{to:"/memories",replace:!0}):Object(p.jsxs)(l.a,{sx:{boxShadow:0,bgcolor:"button.main",p:1},children:[Object(p.jsx)(u.a,{title:n,subheader:c,action:W}),Object(p.jsx)(h.a,{}),Object(p.jsxs)(d.a,{sx:{display:"flex",justifyContent:"flex-start",flexDirection:{lg:"row",xs:"column"},height:{lg:"72vh"},my:1},children:[Object(p.jsx)(d.a,{sx:{width:{lg:"70%",xs:"100%"},overflowY:"scroll",borderRadius:5},className:t,children:r}),Object(p.jsx)(d.a,{sx:{width:{lg:"30%",sx:"100%"},overflowY:"scroll",mt:{lg:0,xs:2},p:{lg:1},px:1},className:t,children:o})]})]})}},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return we}));var a=n(53),c=n(128),r=n(11),o=n(129),i=n.n(o),s=n(0),l=n(4),u=n(510),d=n(521),j=n(179),b=n.n(j),h=n(249),O=n.n(h),x=n(50),m=n(113),f=n(517),g=n(518),p=n(522),y=n(520),v=n(493),k=n(94),w=n(246),C=n.n(w),S=n(245),I=n.n(S),z=n(516),E=n(239),M=n.n(E),D=n(242),P=n(3),R=Object(D.bindKeyboard)(Object(D.autoPlay)(Object(D.virtualize)(M.a)));function U(e){var t=e.ind,n=e.images,a=e.handleNext,c=e.handleStepChange,o=Object(s.useState)(t),i=Object(r.a)(o,2),l=i[0],u=i[1],d=Object(s.useState)(0),j=Object(r.a)(d,2),b=j[0],h=j[1],O=Object(s.useState)(null),x=Object(r.a)(O,2),m=x[0],f=x[1];Object(s.useEffect)((function(){u(t)}),[t]),Object(s.useEffect)((function(){b<n.length?f("none"):f("flex")}),[b]);var g=function(){return h((function(e){return e+1}))};return console.log(n,l,t),Object(P.jsx)(R,{index:l,onChangeIndex:c,enableMouseEvents:!0,animateTransitions:!0,interval:1e4,onClick:a,style:{backgroundColor:"muted.main"},slideRenderer:function(e){var t=e.index,a=e.key,c=function(e,t){var n=e%t;return n<0?n+t:n}(t,n.length);console.log(t,a,n.length,c);var r=(n[c].images?n[c].images.map((function(e){var t=e.src,n=e.width;return"".concat(t," ").concat(n,"w")})):[]).join(",");return Object(P.jsx)(k.a,{component:"img",onLoad:g,sx:{display:{display:m},justifyContents:"center",width:"100%",bgcolor:"#1c1c1c"},src:n[c].src,srcSet:r,style:{display:"block",boxSizing:"content-box",cursor:"pointer",objectFit:"contain",height:"100vh"},alt:n[c].src},a)}})}U.defaultProps={ind:0};var L=n(177);function T(e){var t=e.handleClick;return Object(P.jsx)(z.a,{edge:"start",color:"primary","aria-label":"close",onClick:t,sx:{position:"absolute",top:"50%",right:0,transform:"translate(0%, -50%)"},children:Object(P.jsx)(I.a,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function B(e){var t=e.handleClick;return Object(P.jsx)(z.a,{edge:"start",color:"primary","aria-label":"close",onClick:t,sx:{position:"absolute",top:"50%",left:0,transform:"translate(0%, -50%)"},children:Object(P.jsx)(C.a,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function Y(e){var t=e.open,n=e.title,a=e.date,c=e.images,r=e.index,o=e.handleNext,i=e.handleBack,s=e.handleClose,l=e.handleChange;return Object(P.jsxs)(f.a,{open:t,fullScreen:!0,children:[Object(P.jsx)(U,{images:c,ind:r,handleNext:o,handleStepChange:l}),Object(P.jsx)(p.a,{title:n,subheader:a,sx:{position:"absolute",top:10,left:10,bgcolor:"button.main",borderRadius:3,padding:1}}),Object(P.jsx)(B,{handleClick:i}),Object(P.jsx)(T,{handleClick:o}),Object(P.jsx)(L.a,{size:"large",handleClick:s})]})}Y.defaultProps={index:0};var N=n(190),A=n(500),F=n(150),H=n.n(F),W=n(151),J=n.n(W),K=n(137),X=n.n(K),q=n(168);function V(e){var t=e.editable,n=e.text,a=e.handleTitleUpdate,c=Object(q.a)(n),o=Object(r.a)(c,3),i=o[0],l=o[1],u=o[2],d=Object(s.useState)(t),j=Object(r.a)(d,2),b=j[0],h=j[1],O=Object(s.useState)(!1),f=Object(r.a)(O,2),g=f[0],p=f[1];return Object(s.useEffect)((function(){h(t),l(n),p(!1)}),[t]),console.log("Memory Title ",b,g,i),b||g?b&&!g?Object(P.jsxs)(m.a,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[Object(P.jsx)(x.a,{variant:"h6",children:i}),Object(P.jsx)(X.a,{fontSize:"medium",onClick:function(){return p(!0)}})]}):b&&g?Object(P.jsxs)(m.a,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start"},spacing:2,children:[Object(P.jsx)(A.a,{id:"standard-basic",size:"small",label:"Title",onChange:u,variant:"standard",defaultValue:i,sx:{maxWidth:"200px"}}),Object(P.jsx)(H.a,{fontSize:"medium",onClick:function(){console.log(i),a(i),p(!1)}}),Object(P.jsx)(J.a,{fontSize:"medium",onClick:function(){l(n),p(!1)}})]}):void 0:Object(P.jsx)(x.a,{variant:"h6",children:i})}var G=n(51),Q=n(498),Z=n(339),$=n(497),_=n(169);function ee(e){var t=e.editable,n=e.prevDate,a=e.handleDateUpdate,c=Object(s.useState)(t),o=Object(r.a)(c,2),i=o[0],l=o[1],u=Object(s.useState)(!1),d=Object(r.a)(u,2),j=d[0],b=d[1],h=Object(_.a)(n),O=Object(r.a)(h,3),f=O[0],g=O[1],p=O[2];return Object(s.useEffect)((function(){l(t),g(n),b(!1)}),[t,n]),console.log("Memory Date ",i,j,f),i||j?i&&!j?Object(P.jsxs)(m.a,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[Object(P.jsx)(x.a,{children:f}),Object(P.jsx)(X.a,{fontSize:"medium",onClick:function(){return b(!0)}})]}):i&&j?Object(P.jsxs)(m.a,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start",mt:3},spacing:2,children:[Object(P.jsx)(Z.a,{dateAdapter:$.a,children:Object(P.jsx)(Q.a,{label:"Memory Date",value:f,onChange:p,placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return Object(P.jsx)(A.a,Object(G.a)({readOnly:!0,required:!0},e))}})}),Object(P.jsx)(H.a,{fontSize:"medium",onClick:function(){a(f),b(!1)}}),Object(P.jsx)(J.a,{fontSize:"medium",onClick:function(){g(n),b(!1)}})]}):void 0:Object(P.jsx)(x.a,{children:f})}var te=n(496),ne=n(170);n(158);function ae(e){var t=e.editable,n=e.prevStory,a=e.handleStoryUpdate,c=Object(s.useState)(t),o=Object(r.a)(c,2),i=o[0],l=o[1],u=Object(s.useState)(!1),d=Object(r.a)(u,2),j=d[0],b=d[1],h=Object(ne.a)(n),O=Object(r.a)(h,3),f=O[0],g=O[1],p=O[2],y=Object(s.useRef)();return Object(s.useEffect)((function(){l(t),g(n),b(!1)}),[t,n]),console.log("Memory Title ",i,j),i||j?i&&!j?Object(P.jsxs)(m.a,{direction:"column",spacing:2,children:[Object(P.jsxs)(m.a,{direction:"row",spacing:2,justifyContent:"flex-end",children:[Object(P.jsx)(x.a,{sx:{color:"muted.main"},children:"Edit Story"}),Object(P.jsx)(X.a,{fontSize:"medium",onClick:function(){b(!0)}})]}),Object(P.jsx)(v.a,{sx:{width:1}}),Object(P.jsx)(x.a,{children:f})]}):i&&j?Object(P.jsxs)(m.a,{direction:"column",spacing:2,children:[Object(P.jsxs)(m.a,{direction:"row",spacing:2,justifyContent:"flex-end",children:[Object(P.jsx)(x.a,{sx:{color:"muted.main"},children:"Editing Story"}),Object(P.jsx)(H.a,{fontSize:"medium",onClick:function(){a(f),b(!1)}}),Object(P.jsx)(J.a,{fontSize:"medium",onClick:function(){g(n),b(!1)}})]}),Object(P.jsx)(v.a,{sx:{width:1}}),Object(P.jsx)(k.a,{sx:{p:2,m:1,my:2,border:1,borderColor:"primary.main",bgcolor:"input.background",minHeight:"70vh",borderRadius:5,width:"90%"},onClick:function(){return y.current.focus()},children:Object(P.jsx)(te.a,{autoFocus:!0,"aria-label":"minimum height",placeholder:"Tell your story...",value:f,onChange:p,style:{width:"100%",minHeight:"184px",maxHeight:"70vh",boxSizing:"border-box",paddingTop:"5px",border:0,overflow:"auto",outline:"none",resize:"vertical",borderRadius:5,"&:focus":{border:0}},ref:y})})]}):void 0:Object(P.jsx)(x.a,{children:f})}var ce=n(210),re=n(211),oe=n(503),ie=n(524),se=n(178),le=n.n(se),ue=n(248),de=n.n(ue),je=n(134),be=n.n(je),he=n(108),Oe=["alt","style"],xe=["alt","style"];function me(e){var t=e.children,n=e.onClick,a=e.name,c=e.updateOp;return Object(P.jsx)(u.a,{id:a,variant:"contained",component:"label",onClick:n,sx:{color:c===a?"button.main":"muted.main",borderRadius:5,backgroundColor:c===a?"primary.main":"button.main",padding:"6px 8px","&:hover":{color:c===a?"button.main":"muted.main",backgroundColor:c===a?"primary.main":"button.main"}},children:t})}function fe(e){var t=e.handleChange,n=e.onClick,a=e.updateOp;return Object(P.jsxs)(me,{onClick:n,name:"add",updateOp:a,children:[Object(P.jsx)("input",{type:"file",hidden:!0,multiple:!0,accept:"image/*",onChange:t}),Object(P.jsx)(de.a,{sx:{fontSize:"1.5rem"}}),"Add"]})}function ge(e){var t=e.images,n=e.handlePhotoClick,a=e.renderPhoto,c=Object(s.useState)(null),o=Object(r.a)(c,2),i=o[0],l=o[1];return Object(s.useEffect)((function(){var e=0,n=0;t.forEach((function(t){t.height>t.width?n+=1:e+=1})),l(e>n?"rows":"columns")}),[t]),a?Object(P.jsx)(re.a,{layout:i,photos:t,onClick:n,spacing:2,renderPhoto:a}):Object(P.jsx)(re.a,{layout:i,photos:t,onClick:n,spacing:2})}function pe(e){var t=e.editable,n=e.images,a=e.handlePhotoClick,c=e.handleThumbnailUpdate,o=e.deleteImage,i=e.addImage,l=Object(s.useState)(t),d=Object(r.a)(l,2),j=d[0],b=d[1],h=Object(s.useState)(null),O=Object(r.a)(h,2),f=O[0],g=O[1],p=Object(s.useState)(null),y=Object(r.a)(p,2),v=y[0],k=y[1],w=function(e){g(f===e?null:e)};console.log("memory images",f,j),Object(s.useEffect)((function(){b(t),g(null)}),[t]);var C=Object(P.jsxs)(m.a,{direction:"row",spacing:2,children:[Object(P.jsx)(fe,{handleChange:i,onClick:function(){return w("add")},updateOp:f}),Object(P.jsxs)(me,{onClick:function(){return w("delete")},name:"delete",updateOp:f,children:[Object(P.jsx)(le.a,{sx:{fontSize:"1.5rem"}}),"Delete"]}),Object(P.jsx)(me,{onClick:function(){return w("thumbnail")},name:"thumbnail",updateOp:f,children:"Set Thumbnail"})]}),S=Object(P.jsx)(m.a,{direction:"row",children:Object(P.jsxs)(x.a,{variant:"h6",color:"muted.main",children:["Images:",n.length]})});return j?j&&"delete"===f?Object(P.jsxs)(m.a,{direction:"column",spacing:2,sx:{p:2},children:[S,C,Object(P.jsx)(ge,{images:n,handlePhotoClick:a,renderPhoto:function(e){var t=e.layout,a=e.layoutOptions,c=e.imageProps,r=c.alt,i=c.style,s=Object(ce.a)(c,Oe);return console.log(t,a),Object(P.jsxs)(u.a,{component:"div",children:[Object(P.jsx)("img",Object(G.a)({alt:r,style:Object(G.a)(Object(G.a)({},i),{},{width:t.width,padding:0})},s)),Object(P.jsx)(z.a,{size:"medium",sx:{color:"black",bgcolor:Object(he.a)("#fff",.4),position:"absolute",top:10,right:12},onClick:function(){return function(e){var t=n.find((function(t){return t.alt===e}));o(t)}(r)},children:Object(P.jsx)(be.a,{size:"medium"})})]})}})]}):j&&"thumbnail"===f?Object(P.jsxs)(m.a,{direction:"column",spacing:2,sx:{p:2},children:[S,C,Object(P.jsx)(ge,{images:n,handlePhotoClick:a,renderPhoto:function(e){var t=e.layout,a=e.layoutOptions,r=e.imageProps,o=r.alt,i=r.style,s=Object(ce.a)(r,xe);return console.log(a),Object(P.jsxs)(u.a,{component:"div",children:[Object(P.jsx)("img",Object(G.a)({alt:o,style:Object(G.a)(Object(G.a)({},i),{},{width:t.width,padding:0})},s)),Object(P.jsx)(ie.a,{control:Object(P.jsx)(oe.a,{}),label:"",checked:o===v,onChange:function(){return function(e){console.log("name",e),console.log("images",n),k(e);var t=n.find((function(t){return t.alt===e}));console.log("thumbnail image",t),c(t)}(o)},sx:{pr:1,position:"absolute",bgcolor:Object(he.a)("#fff",.6),color:"black",borderRadius:"0px 5px 5px 0px",borderColor:"secondary.main",borderLeft:0,bottom:20,left:15}})]})}})]}):j&&"add"===f||j&&!f?Object(P.jsxs)(m.a,{direction:"column",spacing:2,sx:{p:2},children:[S,C,Object(P.jsx)(ge,{images:n,handlePhotoClick:a})]}):void 0:Object(P.jsx)(ge,{images:n,handlePhotoClick:a})}ge.defaultProps={renderPhoto:null},me.defaultProps={onClick:function(){}};var ye=n(138),ve=n(149);function ke(e){return!1===e.preview?Object(P.jsx)(m.a,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:Object(P.jsx)(d.a,{href:"/",underline:"none",children:Object(P.jsxs)(u.a,{variant:"contained",component:"label",sx:{color:"primary.main",backgroundColor:"button.main",padding:"6px 8px",boxShadow:0,"&:hover":{backgroundColor:"button.main"}},children:[Object(P.jsx)(O.a,{size:"medium",sx:{paddingRight:1}}),Object(P.jsx)(x.a,{variant:"body1",color:"muted.main",children:"Memories"})]})})}):null}function we(e){var t=e.memTitle,n=e.memDate,o=e.memStory,d=e.memImages,j=e.bucket,h=e.memoryID,O=e.authURL,w=e.preview,C=Object(s.useState)(!1),S=Object(r.a)(C,2),I=S[0],z=S[1],E=Object(s.useState)(!1),M=Object(r.a)(E,2),D=M[0],R=M[1],U=Object(s.useState)(0),L=Object(r.a)(U,2),T=L[0],B=L[1],A=Object(s.useState)(t),F=Object(r.a)(A,2),H=F[0],W=F[1],J=Object(s.useState)(n),K=Object(r.a)(J,2),X=K[0],q=K[1],G=Object(s.useState)(o),Q=Object(r.a)(G,2),Z=Q[0],$=Q[1],_=Object(s.useState)(d),te=Object(r.a)(_,2),ne=te[0],ce=te[1],re=Object(s.useState)(null),oe=Object(r.a)(re,2),ie=oe[0],se=oe[1],le=Object(s.useState)(null),ue=Object(r.a)(le,2),de=ue[0],je=ue[1],be=Object(s.useState)([]),he=Object(r.a)(be,2),Oe=he[0],xe=he[1],me=Object(s.useState)(null),fe=Object(r.a)(me,2),ge=fe[0],we=fe[1],Ce=Object(s.useState)([]),Se=Object(r.a)(Ce,2),Ie=Se[0],ze=Se[1],Ee=Object(s.useState)(!1),Me=Object(r.a)(Ee,2),De=Me[0],Pe=Me[1],Re=Object(s.useState)(null),Ue=Object(r.a)(Re,2),Le=Ue[0],Te=Ue[1],Be=Object(s.useState)(null),Ye=Object(r.a)(Be,2),Ne=Ye[0],Ae=Ye[1],Fe=Object(s.useState)(null),He=Object(r.a)(Fe,2),We=He[0],Je=He[1],Ke=Object(s.useState)(!1),Xe=Object(r.a)(Ke,2),qe=Xe[0],Ve=Xe[1];console.log("images",ne);var Ge=ne.length;Object(s.useEffect)((function(){return W(t)}),[t]),Object(s.useEffect)((function(){return q(n)}),[n]),Object(s.useEffect)((function(){return $(o)}),[o]),Object(s.useEffect)((function(){return ce(d)}),[d]);var Qe=function(e,t){console.log("Setting snack message",e),je(e),Je(t)},Ze=function(e,t,n){401===e.status?Qe("You have been logged out. Please login to continue.",!0):403===e.status?Qe("You do not have permissions to do this operation.",!0):Qe("Unknown error occured while ".concat(t),!0),n(e.status)},$e=function(e){se(!0),Ve(e)},_e=function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ye.a.updateMemoryDetails(j,O,h,t,n);case 3:return(a=e.sent).ok?Qe("Memory ".concat(t," updated successfully"),!1):Ze(a,"updating ".concat(t),$e),se(!0),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),et=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ye.a.updateMemoryImage(j,O,h,"thumbnail",t);case 3:return n=e.sent,console.log("Response",n),n.ok?(Qe("Memory thumbnail updated successfully",!1),se(!0)):Ze(n,"updating thumbnail",$e),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),tt=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(ne.length>1)){e.next=9;break}return e.next=4,ye.a.updateMemoryImage(j,O,h,"delete",t);case 4:n=e.sent,console.log("Response",n),n.ok?(console.log("set snack message - successfully deleted memory image"),Qe("Memory image deleted successfully",!1),ce(ne.filter((function(e){return e.title!==t.title})))):Ze(n,"deleting image",$e),e.next=11;break;case 9:console.log("set snack message - atleast one image is needed for memory"),Qe("Atleast 1 image is needed for memory. Unable to delete",!0);case 11:return se(!0),e.abrupt("return",n);case 15:return e.prev=15,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),nt=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("addImage details",t),e.next=4,ye.a.updateMemoryImage(j,O,h,"add",t);case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),at=function(){var e=Object(c.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(a.a)(Oe.entries()),e.prev=1,c=i.a.mark((function e(){var t,a,c,o,s,l,u,d,j,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(r.a)(n.value,2),a=t[0],c=t[1],o=Object(r.a)(c,3),s=o[0],l=o[1],u=o[2],console.log(s.name,u),e.next=5,nt(s).then((function(e){return e.ok?e.text():(Ze(e,"adding image",$e),"")}));case 5:return d=e.sent,console.log("response for ",s.name,d),j={key:"memories/".concat(h,"/images/").concat(s.name),src:u,alt:s.name,title:s.name,width:s.width,height:s.height,images:[]},e.next=10,fetch(d,{body:l,method:"PUT"});case 10:b=e.sent,console.log("upload response",b),b.ok?(console.log("Setting snack message - image ".concat(s.name," add success")),Te("Images uploaded: ".concat(a+1," / ").concat(ge," ")),ce((function(e){return e.concat([j])}))):(Ae("Error while uploading memory image"),ze((function(e){return e.concat([s.name])})),Ze(b,"deleting image",$e));case 13:case"end":return e.stop()}}),e)})),t.s();case 4:if((n=t.n()).done){e.next=8;break}return e.delegateYield(c(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),t.e(e.t1);case 13:return e.prev=13,t.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)(Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Oe.length>0&&(Pe(!0),Te("Preparing images for upload....")),Oe.length!==ge){e.next=12;break}return console.log(Oe,ge),e.next=5,at();case 5:console.log("Resetting new image count and images"),console.log("Add done"),Ie.length>0?Ae("Error while uploading ".concat(Ie.length," images")):Ae("".concat(Oe.length," image(s) uploaded successfully")),ze([]),we(null),xe([]),setTimeout((function(){Pe(!1),Ae(null),Te(null)}),3e3);case 12:case"end":return e.stop()}}),e)}))),[Oe]);var ct=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.files&&(n=Array.from(t.target.files),console.log("files to add:",n.length,"exsting images:",ne.length),we(n.length),ne.length+n.length<=15?(n.forEach((function(e){var t=new Image;t.onload=function(){var t=Object(c.a)(i.a.mark((function t(n){var a,c,r,o,s,l,u,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.target.naturalHeight,c=n.target.naturalWidth,r=e.size/1048576,o=e.name,s=[500,1e3,1500].map((function(e){return{height:e,width:Math.ceil(e*c/a)}})),l=Date.now(),u="".concat(l,"-").concat(o),d=[{name:u,size:r,height:a,width:c,images:s},e,n.target.src],xe((function(e){return e.concat([d])}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.src=URL.createObjectURL(e)})),n.map((function(e){return URL.revokeObjectURL(e)}))):(console.log("Setting snack message - error adding image as exceeding 15"),Qe("Unable to add ".concat(n.length," images. Maximum images allowed per memory is 15"),!0),se(!0)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rt=Object(P.jsx)(V,{editable:D,text:H,handleTitleUpdate:function(e){_e("title",e)&&W(e)}}),ot=Object(P.jsx)(ee,{editable:D,prevDate:X,handleDateUpdate:function(e){_e("date",e)&&q(e)}}),it=Object(P.jsx)(ae,{editable:D,prevStory:Z,handleStoryUpdate:function(e){_e("story",e)&&$(e)}}),st=Object(P.jsx)(pe,{editable:D,images:ne,handlePhotoClick:function(e,t,n){console.log(e,t,n),z(!0),B(n)},handleThumbnailUpdate:et,deleteImage:tt,addImage:ct}),lt=Object(P.jsxs)(u.a,{variant:"contained",component:"label",onClick:function(){return R(!1)},sx:{color:"primary.main",borderRadius:5,backgroundColor:"button.main",padding:"6px 8px"},children:[Object(P.jsx)(b.a,{size:"medium",sx:{paddingRight:1}}),Object(P.jsx)(x.a,{variant:"body1",color:"muted.main",children:"Edit"})]});return console.log("preview",w),401===qe&&!1===ie?Object(P.jsx)(l.a,{to:"/login"}):Object(P.jsxs)(P.Fragment,{children:[D?Object(P.jsx)(m.a,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:lt}):Object(P.jsx)(ke,{preview:w}),Object(P.jsx)(k.a,{component:"div",sx:{backgroundColor:"button.main",margin:D?"5px":0},children:Object(P.jsx)(N.a,{header:rt,subheader:ot,photoLayout:st,storyLayout:it,memoryID:h,bucket:j,authURL:O,handleEditClick:function(){return R(!0)},preview:w})}),Object(P.jsx)(Y,{open:I,title:H,date:X,images:ne,index:T,handleNext:function(){B((function(e){return(e+1)%Ge}))},handleBack:function(){B((function(e){return(e-1+Ge)%Ge}))},handleClose:function(){return z(!1)},handleChange:function(e){return B(e)}}),Object(P.jsx)(ve.a,{snackBarOpen:ie,message:de,onClose:function(){console.log("snack close, set snack false, message null"),se(!1),je(null),Je(null)},error:We}),Object(P.jsx)(f.a,{open:De,fullWidth:!0,sx:{p:1},children:Object(P.jsxs)(g.a,{sx:{maxWidth:1,p:1},children:[Object(P.jsx)(p.a,{title:"Adding Images",sx:{textAlign:"center"}}),Object(P.jsx)(v.a,{}),Object(P.jsxs)(y.a,{children:[Object(P.jsx)(x.a,{variant:"h6",sx:{color:"muted.main"},children:Le}),Object(P.jsx)(m.a,{justifyContent:"center",sx:{py:2},children:Object(P.jsx)(x.a,{variant:"h5",children:Ne})})]})]})})]})}we.defaultProps={memTitle:"Memory Title",memDate:"Memory Date",memStory:"Memory Text"}},509:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(11),c=n(128),r=n(129),o=n.n(r),i=n(4),s=n(0),l=n(138),u=n(189),d=n(220),j=n(515),b=n(211),h=n(190),O=n(273),x=[{key:1,src:O.a,width:667,height:500},{key:2,src:O.a,width:667,height:500},{key:3,src:O.a,width:375,height:500},{key:4,src:O.a,width:667,height:500},{key:5,src:O.a,width:375,height:500},{key:6,src:O.a,width:667,height:500},{key:7,src:O.a,width:667,height:500},{key:8,src:O.a,width:667,height:500},{key:9,src:O.a,width:667,height:500},{key:10,src:O.a,width:667,height:500},{key:11,src:O.a,width:375,height:500},{key:12,src:O.a,width:375,height:500},{key:13,src:O.a,width:375,height:500},{key:14,src:O.a,width:375,height:500},{key:15,src:O.a,width:667,height:500}],m=n(3);function f(){return Object(m.jsx)(h.a,{header:Object(m.jsx)(j.a,{type:"rectangular",sx:{width:{lg:"20%",md:"30%",xs:"70%"}}}),subheader:Object(m.jsx)(j.a,{type:"rectangular",sx:{width:{lg:"15%",md:"20%",xs:"60%"}}}),photoLayout:Object(m.jsx)(b.a,{layout:"rows",photos:x,spacing:2}),storyLayout:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"50%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"50%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"50%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"98%"}}),Object(m.jsx)(j.a,{type:"rectangular",sx:{width:"50%"}})]})})}var g=n(149);function p(e,t,n,a,c){return y.apply(this,arguments)}function y(){return(y=Object(c.a)(o.a.mark((function e(t,n,a,c,r){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.viewMemory(t,n,a);case 3:if(i=e.sent,console.log(i),!i.status){e.next=8;break}return r(i),e.abrupt("return");case 8:c(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function v(e){var t=e.bucket,n=e.authURL,c=Object(i.h)().memoryId,r=Object(s.useState)(),o=Object(a.a)(r,2),l=o[0],j=o[1],b=Object(s.useState)(null),h=Object(a.a)(b,2),O=h[0],x=h[1],y=Object(s.useState)(null),v=Object(a.a)(y,2),k=v[0],w=v[1],C=Object(s.useState)(null),S=Object(a.a)(C,2),I=S[0],z=S[1],E=function(e){return j(e)},M=Object(s.useState)(null),D=Object(a.a)(M,2),P=D[0],R=D[1],U=function(e,t){console.log("Setting snack message",e),w(e),z(t)},L=function(){console.log("snack close, set snack false, message null"),x(!1),w(null),z(null)},T=function(e){"unauthenticated"===e.status&&(U("You have been logged out. Navigating to login page",!0),x(!0),setInterval((function(){return R("unauthenticated")}),3e3)),"forbidden"===e.status&&(U("You do not have access to this memory. Navigating to memories page",!0),x(!0),setInterval((function(){return R("forbidden")}),3e3))};return Object(s.useEffect)((function(){p(t,n,c,E,T);var e=setInterval((function(){return p(t,n,c,E,T)}),3e5);return function(){return clearInterval(e)}}),[]),"unauthenticated"===P?Object(m.jsx)(i.a,{to:"/login"}):"forbidden"===P?Object(m.jsx)(i.a,{to:"/memories"}):(console.log("memory",l,"memError",P),l?Object(m.jsxs)(u.a,{children:[Object(m.jsx)(d.a,{memTitle:l.title,memDate:l.date,memImages:l.pictures.photos,memStory:l.story,memoryID:c,bucket:t,authURL:n,preview:!1}),Object(m.jsx)(g.a,{snackBarOpen:O,message:k,onClose:L,error:I})]}):Object(m.jsxs)(u.a,{children:[Object(m.jsx)(f,{}),Object(m.jsx)(g.a,{snackBarOpen:O,message:k,onClose:L})]}))}}}]);
//# sourceMappingURL=9.58a86e42.chunk.js.map