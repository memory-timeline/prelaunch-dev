"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[807],{1001:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(2169),a=t(9504),i=t(9585),s=t(890),o=t(6608),l=t(184);function c(e){var n=e.imageSrc,t=e.imageSrcSet,a=e.title,i=e.handleImageLoad;return(0,l.jsx)(r.Z,{component:"img",src:n,srcSet:t,alt:a,sx:{borderColor:"muted.main",borderRadius:4,textAlign:"center",objectFit:"cover",height:{lg:270,sm:220,xs:170}},onLoad:i})}function u(e){var n=e.title,t=e.date;return(0,l.jsx)(a.Z,{children:(0,l.jsx)(i.Z,{disableTypography:!0,title:(0,l.jsx)(s.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:n}),subheader:(0,l.jsx)(s.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function d(e){var n=e.title,t=e.date,r=e.thumbnailImage,a=e.thumbnailImageSrcSet,i=e.handleClick,s=e.handleImageLoad;return(0,l.jsxs)(o.Z,{handleClick:i,children:[(0,l.jsx)(c,{imageSrc:r,imageSrcSet:a,title:n,handleImageLoad:s}),(0,l.jsx)(u,{title:n,date:t})]})}u.defaultProps={title:"Memory Thumbnail Image",date:"Memory Date"},c.defaultProps={title:"Memory Thumbnail Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},d.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){}}},6608:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(7621),a=t(6647),i=t(184);function s(e){var n=e.handleClick,t=e.children;return(0,i.jsx)(a.Z,{onClick:n,children:(0,i.jsx)(r.Z,{elevation:0,sx:{bgcolor:"#fff",borderRadius:5,border:"2px solid gray",color:"black",position:"relative",height:{lg:350,sm:300,xs:250},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:t})})}},8566:function(e,n,t){t.r(n),t.d(n,{default:function(){return ke}});var r=t(9439),a=t(2791),i=t(4733),s=t(4554),o=t(4721),l=t(388),c=t(3238),u=t(890),d=t(184);function h(e){var n=e.mode,t=e.handleModeChange,r=e.modes;return(0,d.jsx)(o.Z,{children:(0,d.jsx)(s.Z,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,d.jsx)(c.Z,{exclusive:!0,value:n,"aria-label":"view-change",color:"primary",sx:{bgcolor:"button.main"},children:r.map((function(e){return(0,d.jsx)(l.Z,{value:e,onClick:function(){return t("".concat(e))},sx:{border:2,borderColor:"primary.main"},children:(0,d.jsx)(u.Z,{variant:"h6",children:e})},e)}))})})})}var m=t(4165),x=t(5861),f=t(7689),g=t(2168),p=t(4125),Z=t(1413),j=t(3433);var v=t(1619);var b=t(1889),y=t(242),C=t(4512),k=t(5825);function S(e){var n=e.titles,t=e.activeStep,r=e.handleClick;return(0,d.jsx)(y.Z,{activeStep:t,alternativeLabel:!0,sx:{py:4},children:n.map((function(e,n){return(0,d.jsx)(C.Z,{onClick:r(n),children:(0,d.jsx)(k.Z,{children:e})},e)}))})}var w=t(1001),I=t(2591),M=t(9585);function P(e){var n=e.title;return(0,d.jsx)(M.Z,{title:n,sx:{border:0,borderColor:"primary.main",textAlign:"center",width:1,mb:1,bgcolor:"button.main",p:0,py:2,borderRadius:2}})}var D=t(4942),T=t(7254),L=t(3070),R=t(3915),F=t(1465),z=t(2797),N=t(6151);function E(e){var n=e.label,t=e.handleClick,r=e.disabled;return(0,d.jsx)(N.Z,{onClick:t,disabled:r,sx:{m:2,border:2,borderColor:r?"muted.main":"ternary.main",borderRadius:5,bgcolor:"input.background"},children:n})}function W(e){var n=e.handleNext,t=e.handlePrevious,r=e.isLast,a=e.isFirst;return(0,d.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"row",pt:2,width:1,justifyContent:"space-evenly"},children:[a?(0,d.jsx)(E,{disabled:!0,handleClick:function(){},label:"Back"}):(0,d.jsx)(E,{handleClick:t,label:"Back"}),r?(0,d.jsx)(E,{handleClick:n,label:"Create Memory"}):(0,d.jsx)(E,{handleClick:n,label:"Next"})]})}function H(e){var n=e.children;return(0,d.jsx)(s.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,maxWidth:"90%",width:"45ch"},"& .MuiOutlinedInput-root":{backgroundColor:"form.input",borderRadius:5},flexDirection:"column",display:"flex",alignItems:"center",width:"auto",pt:2},autoComplete:"true",children:n})}function q(e){var n=e.title,t=e.date,i=e.handleTitleChange,s=e.handleDateChange,o=e.handleNext,l=e.handlePrevious,c=e.isLast,u=e.isFirst,h=e.activeStep,f=(0,a.useState)(""),g=(0,r.Z)(f,2),p=g[0],j=g[1],v=(0,a.useState)(""),b=(0,r.Z)(v,2),y=b[0],C=b[1],k=(0,a.useState)(!1),S=(0,r.Z)(k,2),w=S[0],I=S[1],M=(0,a.useState)(!1),P=(0,r.Z)(M,2),N=P[0],E=P[1],q=z.Ry({title:z.Z_().required("Memory Title is required").max(40,"Maximum length of memory title is 40")}).required(),U=z.Ry({date:z.hT("Enter date by clicking calendar icon on the right end of date picker").required("Memory Date is required").nullable()}).required(),A=function(){var e=(0,x.Z)((0,m.Z)().mark((function e(n,t,r,a){var i,s;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=!1,e.next=3,a.validate((0,D.Z)({},n,t),{abortEarly:!1}).catch((function(e){return e}));case 3:return s=e.sent,r(""),s.inner&&(s.inner.forEach((function(e){return r(e.message)})),i=!0),e.abrupt("return",!i);case 7:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}(),O=function(){var e=(0,x.Z)((0,m.Z)().mark((function e(){var r,a;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A("title",n,j,q);case 2:return r=e.sent,e.next=5,A("date",t,C,U);case 5:return a=e.sent,e.abrupt("return",r&&a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){w&&A("title",n,j,q),N&&A("date",t,C,U)}),[n,t]);var B=function(){var e=(0,x.Z)((0,m.Z)().mark((function e(n){return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:e.sent&&n();case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,d.jsxs)(H,{children:[(0,d.jsx)(T.Z,{required:!0,onChange:function(e){I(!0),i(e)},id:"outlined-required",label:"Memory Name",defaultValue:n,helperText:p||"E.g. Gogol's 2nd Birthday",error:!!p}),(0,d.jsx)(R.Z,{dateAdapter:F.Z,children:(0,d.jsx)(L.Z,{label:"Memory Date",value:t,onChange:function(e){E(!0),s(e)},placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return(0,d.jsx)(T.Z,(0,Z.Z)((0,Z.Z)({readOnly:!0,required:!0},e),{},{error:!!y,helperText:y||""}))}})}),(0,d.jsx)(W,{activeStep:h,handleNext:function(){return B(o)},handlePrevious:l,isLast:c,isFirst:u})]})}E.defaultProps={disabled:!1},q.defaultProps={date:""};var U=t(3767),A=t(5289),O=t(7621),B=t(9504),J=t(8086);function V(e){var n=e.handleChange;return(0,d.jsx)(s.Z,{sx:{display:"flex",justifyContent:"center",pb:1},children:(0,d.jsxs)(N.Z,{variant:"contained",component:"label",color:"button",sx:{borderRadius:5,border:2,borderColor:"primary.main",backgroundColor:"input.background"},children:[(0,d.jsx)("input",{type:"file",hidden:!0,multiple:!0,accept:"image/*",onChange:n}),(0,d.jsx)(u.Z,{variant:"h6",children:"Add Pictures"}),(0,d.jsx)(J.Z,{sx:{fontSize:"2.5rem"}})]})})}var G=t(206),K=t(5523),_=t(7262),Q=t(2065);function X(e){var n=e.index,t=e.thumbnail,r=e.handleThumbnailChange;return(0,d.jsx)(K.Z,{control:(0,d.jsx)(_.Z,{}),label:"Thumbnail",checked:t===n,onChange:function(){return r(n)},sx:{pr:1,position:"absolute",bgcolor:(0,Q.Fq)("#fff",.6),color:"black",borderRadius:"0px 5px 5px 0px",borderColor:"secondary.main",borderLeft:0,bottom:20,left:15}})}function Y(e){var n=e.photo,t=e.index,r=e.setDimensions,a=e.thumbnail,i=e.resizeHeights;return(0,d.jsx)(s.Z,{component:"img",onLoad:function(e){return function(e,n){var a=e.target.naturalWidth,i=e.target.naturalHeight,s=n.map((function(e){return{height:e,width:Math.ceil(e*a/i)}}));r(t,s)}(e,i)},sx:{border:a===t?4:0,borderColor:"primary.main",borderRadius:a===t?5:0,mb:1,"&:hover":{border:5,borderColor:"secondary.main"}},src:n,alt:n.name,height:"140px",width:"140px",fit:"crop",auto:"format",loading:"lazy"})}function $(e){var n=e.imageDetails,t=e.handleRemoveImage,r=e.thumbnail,a=e.handleThumbnailChange,i=e.setDimensions,s=e.resizeHeights;return n.length?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Z,{}),(0,d.jsx)(u.Z,{sx:{p:2},variant:"h6",align:"center",children:"Selected Images"}),(0,d.jsx)(b.ZP,{container:!0,alignItems:"center",justifyContent:"space-around",sx:{p:1},children:n.map((function(e,n){return(0,d.jsxs)(N.Z,{component:"div",children:[(0,d.jsx)(Y,{photo:e.url,index:n,setDimensions:i,thumbnail:r,resizeHeights:s}),(0,d.jsx)(G.Z,{handleClick:function(){return t(n)}}),(0,d.jsx)(X,{index:n,thumbnail:r,handleThumbnailChange:a})]},e.url)}))})]}):null}function ee(e){var n=e.text;return(0,d.jsx)(u.Z,{sx:{color:"error.main"},children:n})}function ne(e){var n=e.imageDetails,t=e.thumbnail,i=e.handleSelectedImageChange,s=e.handleThumbnailChange,l=e.removeSelectedImage,c=e.handleNext,h=e.handlePrevious,m=e.isLast,x=e.isFirst,f=e.setDimensions,g=e.resizeHeights,p=(0,a.useState)(""),Z=(0,r.Z)(p,2),j=Z[0],v=Z[1],y=(0,a.useState)(!1),C=(0,r.Z)(y,2),k=C[0],S=C[1],w=(0,a.useState)(0),I=(0,r.Z)(w,2),P=I[0],D=I[1],T=(0,a.useState)(!1),L=(0,r.Z)(T,2),R=L[0],F=L[1];function z(){var e=!0;return v(""),n.length<1&&(v("Need atleast one image to create a memory"),e=!1),n.length>15&&(v("Maximum Allowed Images per Memory: ".concat(15)),e=!1),e}(0,a.useEffect)((function(){k&&z()}),[n,k]),(0,a.useEffect)((function(){P<n.length&&D(n.length),P>n.length&&F(!0),P===n.length&&F(!1)}),[n,P]);return(0,d.jsxs)(H,{children:[(0,d.jsx)(b.ZP,{item:!0,children:(0,d.jsx)(V,{handleChange:function(e){S(!0),e.target.files&&D(e.target.files.length+n.length),i(e,z)}})}),(0,d.jsxs)(b.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",children:[(0,d.jsxs)(u.Z,{children:["Total Images Selected:",n.length,"/",15]}),(0,d.jsx)(ee,{text:j})]}),(0,d.jsx)(W,{handleNext:function(){return e=c,void(z()&&e());var e},handlePrevious:h,isLast:m,isFirst:x}),(0,d.jsx)(b.ZP,{item:!0,children:(0,d.jsx)($,{imageDetails:n,handleRemoveImage:function(e){D((function(e){return e-1})),l(e)},thumbnail:t,handleThumbnailChange:s,setDimensions:f,resizeHeights:g})}),(0,d.jsx)(A.Z,{open:R,fullWidth:!0,sx:{p:1},children:(0,d.jsxs)(O.Z,{sx:{maxWidth:1,p:1},children:[(0,d.jsx)(M.Z,{title:"Adding Images",sx:{textAlign:"center"}}),(0,d.jsx)(o.Z,{}),(0,d.jsxs)(B.Z,{children:[(0,d.jsxs)(u.Z,{variant:"h6",sx:{color:"muted.main"},children:["Total Images Selected:",n.length,"/",15]}),(0,d.jsx)(U.Z,{justifyContent:"center",sx:{py:2},children:(0,d.jsx)(u.Z,{variant:"h5",color:"error",children:j})})]})]})})]})}var te=t(1747);function re(e){var n=e.storyError,t=e.story,r=e.handleStoryChange,i=(0,a.useRef)();return(0,a.useEffect)((function(){i.current.focus()}),[]),(0,d.jsx)(s.Z,{sx:{p:2,m:1,my:2,border:1,borderColor:n?"error.main":"primary.main",bgcolor:"input.background",minHeight:"200px",borderRadius:5},onClick:function(){return i.current.focus()},children:(0,d.jsx)(te.Z,{autoFocus:!0,"aria-label":"minimum height",placeholder:"Tell your story...",value:t,onChange:r,style:{width:"100%",minHeight:"184px",maxHeight:"70vh",boxSizing:"border-box",paddingTop:"5px",border:0,overflow:"auto",outline:"none",resize:"vertical",borderRadius:5,"&:focus":{border:0}},ref:i})})}function ae(e){var n=e.story,t=e.handleStoryChange,i=e.handleNext,o=e.handlePrevious,l=e.isLast,c=e.isFirst,u=e.progressDialog,h=1e5,m=(0,a.useState)(""),x=(0,r.Z)(m,2),f=x[0],g=x[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(re,{storyError:f,story:n,handleStoryChange:t}),(0,d.jsx)(s.Z,{sx:{p:1,m:1},children:(0,d.jsx)(ee,{text:f})}),(0,d.jsx)(W,{handleNext:function(){return e=i,void(n.length<=h?(g(""),e()):g("Maximum story length is: ".concat(h)));var e},handlePrevious:o,isLast:l,isFirst:c}),u]})}var ie=t(7482),se=t(3239),oe=t(8946),le=t(5146);function ce(e){var n=e.value;return(0,d.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",mb:1},children:[(0,d.jsx)(s.Z,{sx:{width:"100%",mr:1},children:(0,d.jsx)(ie.Z,{variant:"determinate",value:n})}),(0,d.jsx)(s.Z,{sx:{minWidth:35},children:(0,d.jsx)(u.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(n),"%")})})]})}function ue(e){var n,t=e.message,r=e.done;return n="failed"===r?(0,d.jsx)(u.Z,{color:"error.main",children:"Failed"}):!0===r?(0,d.jsx)(u.Z,{color:"success.main",children:"Done"}):(0,d.jsx)(se.Z,{size:30}),(0,d.jsxs)(s.Z,{sx:{display:"flex",alignItems:"space-between"},children:[(0,d.jsx)(s.Z,{sx:{width:"100%",mr:1},children:(0,d.jsx)(u.Z,{children:t})}),(0,d.jsx)(s.Z,{sx:{minWidth:35},children:n})]})}function de(e){var n=e.progress,t=e.counter;return 100===n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",m:2},children:[(0,d.jsx)(oe.Z,{color:"success",fontSize:"large",sx:{mr:2}}),(0,d.jsx)(u.Z,{variant:"h5",color:"primary.main",children:"Memory Created Successfully"})]}),(0,d.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,d.jsx)(s.Z,{children:(0,d.jsx)(u.Z,{children:"Navigating to memories page in "})}),(0,d.jsx)(s.Z,{sx:{mx:1},children:(0,d.jsx)(u.Z,{variant:"h6",color:"success.main",children:t})}),(0,d.jsx)(s.Z,{children:(0,d.jsx)(u.Z,{children:"seconds"})})]})]}):-1===n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",m:2},children:[(0,d.jsx)(le.Z,{color:"error",fontSize:"large",sx:{mr:2}}),(0,d.jsx)(u.Z,{variant:"h5",color:"primary.main",children:"Memory Creation Failed"})]}),(0,d.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,d.jsx)(s.Z,{children:(0,d.jsx)(u.Z,{children:"Navigating to memories page in "})}),(0,d.jsx)(s.Z,{sx:{mx:1},children:(0,d.jsx)(u.Z,{variant:"h6",color:"success.main",children:t})}),(0,d.jsx)(s.Z,{children:(0,d.jsx)(u.Z,{children:"seconds"})})]})]}):null}function he(e){var n=e.open,t=e.progress,i=e.messages,s=(0,a.useState)(0),l=(0,r.Z)(s,2),c=l[0],u=l[1];return(0,a.useEffect)((function(){var e;return c>0&&(e=setTimeout((function(){return u(c-1)}),1e3)),function(){return clearTimeout(e)}}),[c]),(0,a.useEffect)((function(){100!==t&&-1!==t||u(3)}),[t]),(0,d.jsx)(A.Z,{open:n,fullWidth:!0,sx:{p:1},children:(0,d.jsxs)(O.Z,{sx:{maxWidth:1,p:1},children:[(0,d.jsx)(M.Z,{title:"Creating Memory",sx:{textAlign:"center"}}),(0,d.jsx)(o.Z,{}),(0,d.jsxs)(B.Z,{children:[(0,d.jsx)(ce,{value:t>0?t:0}),i.map((function(e){return(0,d.jsx)(ue,{message:e.message,done:e.done},e.message)})),(0,d.jsx)(de,{progress:t,counter:c})]})]})})}he.defaultProps={messages:[]};var me=t(5899);function xe(e,n,t,r,a,i,s){var o=a.map((function(e,n){var r=i[n];return{Key:["memories",t,"images",e.name].join("/"),Body:r,ContentType:r.type}})),l=me.Z.uploadMultipleImages(e,n,o,s);return Promise.allSettled(l)}function fe(e,n,t){return ge.apply(this,arguments)}function ge(){return(ge=(0,x.Z)((0,m.Z)().mark((function e(n,t,r){var a,i;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify(r),e.next=3,me.Z.validateDetails(n,t,a);case 3:if("error"!==(i=e.sent).status){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",!0===i.Valid);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(e,n,t){return Ze.apply(this,arguments)}function Ze(){return(Ze=(0,x.Z)((0,m.Z)().mark((function e(n,t,r){var a,i,s;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify(r),i=["memories",r.key,"details.json"].join("/"),e.next=4,me.Z.upload(n,t,i,a);case 4:return s=e.sent,e.abrupt("return",s&&!0===s.ok);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var je=function(){var e=(0,x.Z)((0,m.Z)().mark((function e(n,t,r,a,i,s){var o,l;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(0),s("Initializing memory",!1),e.next=4,fe(n,t,r);case 4:if(!0!==(o=e.sent)){e.next=13;break}return e.next=8,pe(n,t,r);case 8:l=e.sent,i("Initializing Memory",l),a(10),e.next=14;break;case 13:i("Initializing Memory","failed");case 14:return e.abrupt("return",o);case 15:case"end":return e.stop()}}),e)})));return function(n,t,r,a,i,s){return e.apply(this,arguments)}}(),ve=function(){var e=(0,x.Z)((0,m.Z)().mark((function e(n,t,r,a,i,s,o,l){var c,u;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe(n,t,r,0,i,s,o);case 2:c=e.sent,u=0;case 4:if(!(u<c.length)){e.next=10;break}if("rejected"!==c[u].status&&!0===c[u].value.ok){e.next=7;break}return e.abrupt("return",!1);case 7:u+=1,e.next=4;break;case 10:return l(95),e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)})));return function(n,t,r,a,i,s,o,l){return e.apply(this,arguments)}}(),be=function(){var e=(0,x.Z)((0,m.Z)().mark((function e(n,t,r,a,i,s,o,l){var c;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je(n,t,r,a,i,s);case 2:if(!0!==e.sent){e.next=15;break}return e.next=6,ve(n,t,r.key,r.title,r.imageDetails,o,l,a);case 6:if(!0!==e.sent){e.next=14;break}return e.next=10,me.Z.finalizeMemory(n,t,r.key);case 10:if(c=e.sent,parseInt(c.MemoryID,10)===r.key){e.next=13;break}return e.abrupt("return",!1);case 13:return e.abrupt("return",!0);case 14:i("Uploading Original Images","failed");case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e)})));return function(n,t,r,a,i,s,o,l){return e.apply(this,arguments)}}(),ye={CreateMemory:be};function Ce(e){var n=e.mode,t=e.bucket,i=e.authURL,l=(0,f.s0)(),c=["Enter memory title and date","Upload Pictures","Write story"],u=function(e){var n=(0,a.useState)(0),t=(0,r.Z)(n,2),i=t[0],s=t[1];return[i,function(){s((i+1)%e)},function(){s((i-1+e)%e)},i===e-1,0===i]}(c.length),h=(0,r.Z)(u,5),y=h[0],C=h[1],k=h[2],M=h[3],D=h[4],T=(0,g.Z)(""),L=(0,r.Z)(T,3),R=L[0],F=L[2],z=(0,p.Z)(""),N=(0,r.Z)(z,3),E=N[0],W=N[2],H=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],i=n[1],s=(0,a.useState)([]),o=(0,r.Z)(s,2),l=o[0],c=o[1],u=(0,a.useState)(0),d=(0,r.Z)(u,2),h=d[0],m=d[1],x=function(e){m(e)};return[t,h,function(e){if(e.target.files){var n=Array.from(e.target.files);n.forEach((function(e){var n=new Image;n.onload=function(n){var t=Date.now(),r="".concat(t,"-").concat(e.name);i((function(t){return t.concat([{name:r,size:e.size/1048576,url:n.target.src,height:n.target.naturalHeight,width:n.target.naturalWidth,imageFile:e}])}))},n.src=URL.createObjectURL(e)})),c((function(e){return e.concat(n)})),n.map((function(e){return URL.revokeObjectURL(e)}))}},function(e){i([].concat((0,j.Z)(t.slice(0,e)),(0,j.Z)(t.slice(e+1)))),c([].concat((0,j.Z)(l.slice(0,e)),(0,j.Z)(l.slice(e+1)))),e<h?x(h-1):e===h&&x(0)},x,function(e,n){i([].concat((0,j.Z)(t.slice(0,e)),[(0,Z.Z)((0,Z.Z)({},t[e]),{},{images:n})],(0,j.Z)(t.slice(e+1))))}]}(),U=(0,r.Z)(H,6),A=U[0],O=U[1],B=U[2],J=U[3],V=U[4],G=U[5],K=(0,v.Z)(""),_=(0,r.Z)(K,3),Q=_[0],X=_[2],Y=(0,a.useState)(!1),$=(0,r.Z)(Y,2),ee=$[0],te=$[1],re=(0,a.useState)(0),ie=(0,r.Z)(re,2),se=ie[0],oe=ie[1],le=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],i=n[1];return[t,function(e,n){var t=[{message:e,done:n}];i((function(e){return e.concat(t)}))},function(e,n){var t=[{message:e,done:n}];i((function(e){return e.slice(0,-1).concat(t)}))}]}(),ce=(0,r.Z)(le,3),ue=ce[0],de=ce[1],me=ce[2],xe=(0,a.useState)(0),fe=(0,r.Z)(xe,2),ge=fe[0],pe=fe[1],Ze=function(e){return oe(e)},je=function(){return pe((function(e){return e+1}))},ve=A.map((function(e){return e.imageFile}));(0,a.useEffect)((function(){var e="Uploading Images (".concat(ge,"/").concat(A.length,")");ge>=0&&se>=10&&(0===ge?de(e,!1):me(e,!1),A.length===ge&&me(e,!0))}),[ge,se]);var be,Ce=(0,d.jsx)(q,{activeStep:y,handleNext:C,handlePrevious:k,isLast:M,isFirst:D,title:R,date:E,handleTitleChange:F,handleDateChange:W}),ke=(0,d.jsx)(ne,{imageDetails:A,handleSelectedImageChange:B,removeSelectedImage:J,thumbnail:O,handleThumbnailChange:V,handleNext:C,handlePrevious:k,isLast:M,isFirst:D,setDimensions:G,resizeHeights:[500,1e3,1500]}),Se=function(){var e=(0,x.Z)((0,m.Z)().mark((function e(){var n,r,a;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Date(2100,1,1).getTime()-Date.now(),r={key:n,title:R,date:E,lastModified:new Date,imageDetails:A,story:Q,thumbnail:A[O],totalSize:(s=A,s.reduce((function(e,n){return e+n.size}),0))},te(!0),e.next=5,ye.CreateMemory(t,i,r,Ze,me,de,ve,je);case 5:a=e.sent,Ze(!0===a?100:-1),setTimeout((function(){return l("/memories")}),3e3);case 8:case"end":return e.stop()}var s}),e)})));return function(){return e.apply(this,arguments)}}(),we=(0,d.jsx)(he,{open:ee,progress:se,messages:ue}),Ie=function(e,n,t,r,a){return(0,d.jsx)(b.ZP,{container:!0,justifyContent:"center",children:(0,d.jsx)(b.ZP,{item:!0,lg:6,xs:12,sx:{boxShadow:10,borderRadius:5,bgcolor:"button.main",mb:2},children:(0,d.jsxs)(s.Z,{children:[(0,d.jsx)(S,{titles:n,activeStep:a,handleClick:function(){}}),(0,d.jsx)(o.Z,{}),t[a]]})})})}(0,c,[Ce,ke,(0,d.jsx)(ae,{story:Q,handleStoryChange:X,handleNext:Se,handlePrevious:k,isLast:M,isFirst:D,progressDialog:we})],0,y),Me=function(e,n,t,r,a){return(0,d.jsxs)(b.ZP,{container:!0,justifyContent:"space-evenly",sx:{p:0},children:[(0,d.jsxs)(b.ZP,{item:!0,xs:6,sm:4,md:4,lg:3,xl:2,sx:{px:1,mb:1},children:[(0,d.jsx)(P,{title:"Thumbnail Preview"}),(0,d.jsx)(w.Z,{title:e,date:n||"",thumbnailImage:t.length>0?t[r].url:"",handleClick:function(){}})]}),(0,d.jsxs)(b.ZP,{item:!0,xs:12,lg:9,xl:10,children:[(0,d.jsx)(P,{title:"Memory Preview"}),(0,d.jsx)(I.Z,{memTitle:e,memDate:n,memStory:a,memImages:t.map((function(e){return{src:e.url,width:e.width,height:e.height}})),imageNames:t.map((function(e){return e.name})),preview:!0})]})]})}(R,E,A,O,Q);return"Create"===n&&(be=Ie),"Preview"===n&&(be=Me),be}function ke(e){var n=e.bucket,t=e.authURL,s=["Create","Preview"],o=(0,a.useState)(s[0]),l=(0,r.Z)(o,2),c=l[0],u=l[1],m=(0,a.useRef)(null);return(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(h,{mode:c,handleModeChange:u,modes:s}),(0,d.jsx)(Ce,{mode:c,formRef:m,bucket:n,authURL:t})]})}}}]);
//# sourceMappingURL=807.2c4d0d3c.chunk.js.map