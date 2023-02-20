"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[907],{61001:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(1867),a=t(22492),i=t(6718),s=t(4567),o=t(85771),l=t(66608),c=t(80184);function u(e){var n=e.imageSrc,t=e.imageSrcSet,a=e.title,i=e.handleImageLoad;return(0,c.jsx)(r.Z,{component:"img",src:n,srcSet:t,alt:a,sx:{textAlign:"center",objectFit:"cover",height:{lg:350,md:300,xs:250}},onLoad:i})}function d(e){var n=e.title,t=e.date,r=e.avatar,l=e.shared;return(0,c.jsx)(a.Z,{children:(0,c.jsx)(i.Z,{disableTypography:!0,avatar:r,title:(0,c.jsxs)(s.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:[n,""!==l?(0,c.jsxs)(c.Fragment,{children:[" ",(0,c.jsx)(o.Z,{label:l,size:"small",variant:"filled",color:"Shared"===l?"green":"gray",sx:{height:"auto"}})]}):null]}),subheader:(0,c.jsx)(s.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function h(e){var n=e.title,t=e.date,r=e.avatar,a=e.shared,i=e.thumbnailImage,s=e.thumbnailImageSrcSet,o=e.handleClick,h=e.handleImageLoad;return(0,c.jsxs)(l.Z,{handleClick:o,children:[(0,c.jsx)(u,{imageSrc:i,imageSrcSet:s,title:n,handleImageLoad:h}),(0,c.jsx)(d,{title:n,date:t,avatar:r,shared:a})]})}d.defaultProps={title:"Memory Thumbnail Image",date:"Memory Date",avatar:"",shared:""},u.defaultProps={title:"Memory Thumbnail Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},h.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){},avatar:"",shared:""}},66608:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(88588),a=t(81374),i=t(80184);function s(e){var n=e.handleClick,t=e.children;return(0,i.jsx)(a.Z,{onClick:n,children:(0,i.jsx)(r.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:{lg:430,md:380,xs:330},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:t})})}},94104:function(e,n,t){t.r(n),t.d(n,{default:function(){return ke}});var r=t(29439),a=t(72791),i=t(52766),s=t(64554),o=t(94721),l=t(43146),c=t(32234),u=t(4567),d=t(80184);function h(e){var n=e.mode,t=e.handleModeChange,r=e.modes;return(0,d.jsx)(o.Z,{children:(0,d.jsx)(s.Z,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,d.jsx)(c.Z,{exclusive:!0,value:n,"aria-label":"view-change",color:"primary",sx:{bgcolor:"button.main"},children:r.map((function(e){return(0,d.jsx)(l.Z,{value:e,onClick:function(){return t("".concat(e))},sx:{border:2,borderColor:"primary.main"},children:(0,d.jsx)(u.Z,{variant:"h6",children:e})},e)}))})})})}var m=t(74165),x=t(15861),f=t(57689),g=t(81153),p=t(99947),Z=t(85982),v=t(36053);function j(e){var n=e.titles,t=e.activeStep,r=e.handleClick;return(0,d.jsx)(p.Z,{activeStep:t,alternativeLabel:!0,sx:{py:4},children:n.map((function(e,n){return(0,d.jsx)(Z.Z,{onClick:r(n),children:(0,d.jsx)(v.Z,{children:e})},e)}))})}var b=t(85899);function y(e,n,t,r,a,i,s){var o=a.map((function(e,n){var r=i[n];return{Key:["memories",t,"images",e.name].join("/"),Body:r,ContentType:r.type}})),l=b.Z.uploadMultipleImages(e,n,o,s);return Promise.allSettled(l)}function C(e,n,t){return k.apply(this,arguments)}function k(){return(k=(0,x.Z)((0,m.Z)().mark((function e(n,t,r){var a,i;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify(r),e.next=3,b.Z.validateDetails(n,t,a);case 3:if("error"!==(i=e.sent).status){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",!0===i.Valid);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,n,t){return w.apply(this,arguments)}function w(){return(w=(0,x.Z)((0,m.Z)().mark((function e(n,t,r){var a,i,s;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify(r),i=["memories",r.key,"details.json"].join("/"),e.next=4,b.Z.upload(n,t,i,a);case 4:return s=e.sent,e.abrupt("return",s&&!0===s.ok);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(){var e=(0,x.Z)((0,m.Z)().mark((function e(n,t,r,a,i,s){var o,l;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(0),s("Initializing memory",!1),e.next=4,C(n,t,r);case 4:if(!0!==(o=e.sent)){e.next=13;break}return e.next=8,S(n,t,r);case 8:l=e.sent,i("Initializing Memory",l),a(10),e.next=14;break;case 13:i("Initializing Memory","failed");case 14:return e.abrupt("return",o);case 15:case"end":return e.stop()}}),e)})));return function(n,t,r,a,i,s){return e.apply(this,arguments)}}(),M=function(){var e=(0,x.Z)((0,m.Z)().mark((function e(n,t,r,a,i,s,o,l){var c,u;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(n,t,r,0,i,s,o);case 2:c=e.sent,u=0;case 4:if(!(u<c.length)){e.next=10;break}if("rejected"!==c[u].status&&!0===c[u].value.ok){e.next=7;break}return e.abrupt("return",!1);case 7:u+=1,e.next=4;break;case 10:return l(95),e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)})));return function(n,t,r,a,i,s,o,l){return e.apply(this,arguments)}}(),P=function(){var e=(0,x.Z)((0,m.Z)().mark((function e(n,t,r,a,i,s,o,l){var c;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(n,t,r,a,i,s);case 2:if(!0!==e.sent){e.next=15;break}return e.next=6,M(n,t,r.key,r.title,r.imageDetails,o,l,a);case 6:if(!0!==e.sent){e.next=14;break}return e.next=10,b.Z.finalizeMemory(n,t,r.key);case 10:if(c=e.sent,parseInt(c.MemoryID,10)===r.key){e.next=13;break}return e.abrupt("return",!1);case 13:return e.abrupt("return",!0);case 14:i("Uploading Original Images","failed");case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e)})));return function(n,t,r,a,i,s,o,l){return e.apply(this,arguments)}}(),D={CreateMemory:P},T=t(72168),L=t(94125),F=t(1413),R=t(93433);var z=t(91619);var N=t(61001),E=t(48003),H=t(6718);function W(e){var n=e.title;return(0,d.jsx)(H.Z,{title:n,sx:{border:0,borderColor:"primary.main",textAlign:"center",width:1,mb:1,bgcolor:"button.main",p:0,py:2,borderRadius:2}})}var q=t(4942),U=t(93006),A=t(58377),O=t(36571),B=t(20041),J=t(62797),V=t(5849);function _(e){var n=e.label,t=e.handleClick,r=e.disabled;return(0,d.jsx)(V.Z,{onClick:t,disabled:r,sx:{m:2,border:2,borderColor:r?"muted.main":"ternary.main",borderRadius:5,bgcolor:"input.background"},children:n})}function G(e){var n=e.handleNext,t=e.handlePrevious,r=e.isLast,a=e.isFirst;return(0,d.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"row",pt:2,width:1,justifyContent:"space-evenly"},children:[a?(0,d.jsx)(_,{disabled:!0,handleClick:function(){},label:"Back"}):(0,d.jsx)(_,{handleClick:t,label:"Back"}),r?(0,d.jsx)(_,{handleClick:n,label:"Create Memory"}):(0,d.jsx)(_,{handleClick:n,label:"Next"})]})}function K(e){var n=e.children;return(0,d.jsx)(s.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,maxWidth:"90%",width:"45ch"},"& .MuiOutlinedInput-root":{backgroundColor:"form.input",borderRadius:5},flexDirection:"column",display:"flex",alignItems:"center",width:"auto",pt:2},autoComplete:"true",children:n})}function Q(e){var n=e.title,t=e.date,i=e.handleTitleChange,s=e.handleDateChange,o=e.handleNext,l=e.handlePrevious,c=e.isLast,u=e.isFirst,h=e.activeStep,f=(0,a.useState)(""),g=(0,r.Z)(f,2),p=g[0],Z=g[1],v=(0,a.useState)(""),j=(0,r.Z)(v,2),b=j[0],y=j[1],C=(0,a.useState)(!1),k=(0,r.Z)(C,2),S=k[0],w=k[1],I=(0,a.useState)(!1),M=(0,r.Z)(I,2),P=M[0],D=M[1],T=J.Ry({title:J.Z_().required("Memory Title is required").max(40,"Maximum length of memory title is 40")}).required(),L=J.Ry({date:J.hT("Enter date by clicking calendar icon on the right end of date picker").required("Memory Date is required").nullable()}).required(),R=function(){var e=(0,x.Z)((0,m.Z)().mark((function e(n,t,r,a){var i,s;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=!1,e.next=3,a.validate((0,q.Z)({},n,t),{abortEarly:!1}).catch((function(e){return e}));case 3:return s=e.sent,r(""),s.inner&&(s.inner.forEach((function(e){return r(e.message)})),i=!0),e.abrupt("return",!i);case 7:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}(),z=function(){var e=(0,x.Z)((0,m.Z)().mark((function e(){var r,a;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("title",n,Z,T);case 2:return r=e.sent,e.next=5,R("date",t,y,L);case 5:return a=e.sent,e.abrupt("return",r&&a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){S&&R("title",n,Z,T),P&&R("date",t,y,L)}),[n,t]);var N=function(){var e=(0,x.Z)((0,m.Z)().mark((function e(n){return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:e.sent&&n();case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,d.jsxs)(K,{children:[(0,d.jsx)(U.Z,{required:!0,onChange:function(e){w(!0),i(e)},id:"outlined-required",label:"Memory Name",defaultValue:n,helperText:p||"E.g. Gogol's 2nd Birthday",error:!!p}),(0,d.jsx)(O._,{dateAdapter:B.H,children:(0,d.jsx)(A.M,{label:"Memory Date",value:t,onChange:function(e){D(!0),s(e)},placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return(0,d.jsx)(U.Z,(0,F.Z)((0,F.Z)({readOnly:!0,required:!0},e),{},{error:!!b,helperText:b||""}))}})}),(0,d.jsx)(G,{activeStep:h,handleNext:function(){return N(o)},handlePrevious:l,isLast:c,isFirst:u})]})}_.defaultProps={disabled:!1},Q.defaultProps={date:""};var X=t(53767),Y=t(5574),$=t(88588),ee=t(22492);function ne(e){var n=e.text;return(0,d.jsx)(u.Z,{sx:{color:"error.main"},children:n})}var te=t(50487),re=t(25801),ae=t(65639),ie=t(12065);function se(e){var n=e.index,t=e.thumbnail,r=e.handleThumbnailChange;return(0,d.jsx)(re.Z,{control:(0,d.jsx)(ae.Z,{}),label:"Thumbnail",checked:t===n,onChange:function(){return r(n)},sx:{pr:1,position:"absolute",bgcolor:(0,ie.Fq)("#fff",.6),color:"black",borderRadius:"0px 5px 5px 0px",borderColor:"secondary.main",borderLeft:0,bottom:20,left:15}})}function oe(e){var n=e.photo,t=e.index,r=e.setDimensions,a=e.thumbnail,i=e.resizeHeights;return(0,d.jsx)(s.Z,{component:"img",onLoad:function(e){return function(e,n){var a=e.target.naturalWidth,i=e.target.naturalHeight,s=n.map((function(e){return{height:e,width:Math.ceil(e*a/i)}}));r(t,s)}(e,i)},sx:{border:a===t?4:0,borderColor:"primary.main",borderRadius:a===t?5:0,mb:1,"&:hover":{border:5,borderColor:"secondary.main"}},src:n,alt:n.name,height:"140px",width:"140px",fit:"crop",auto:"format",loading:"lazy"})}function le(e){var n=e.imageDetails,t=e.handleRemoveImage,r=e.thumbnail,a=e.handleThumbnailChange,i=e.setDimensions,s=e.resizeHeights;return n.length?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Z,{}),(0,d.jsx)(u.Z,{sx:{p:2},variant:"h6",align:"center",children:"Selected Images"}),(0,d.jsx)(g.ZP,{container:!0,alignItems:"center",justifyContent:"space-around",sx:{p:1},children:n.map((function(e,n){return(0,d.jsxs)(V.Z,{component:"div",children:[(0,d.jsx)(oe,{photo:e.url,index:n,setDimensions:i,thumbnail:r,resizeHeights:s}),(0,d.jsx)(te.Z,{handleClick:function(){return t(n)}}),(0,d.jsx)(se,{index:n,thumbnail:r,handleThumbnailChange:a})]},e.url)}))})]}):null}var ce=t(98086);function ue(e){var n=e.handleChange;return(0,d.jsx)(s.Z,{sx:{display:"flex",justifyContent:"center",pb:1},children:(0,d.jsxs)(V.Z,{variant:"contained",component:"label",color:"button",sx:{borderRadius:5,border:2,borderColor:"primary.main",backgroundColor:"input.background"},children:[(0,d.jsx)("input",{type:"file",hidden:!0,multiple:!0,accept:"image/*",onChange:n}),(0,d.jsx)(u.Z,{variant:"h6",children:"Add Pictures"}),(0,d.jsx)(ce.Z,{sx:{fontSize:"2.5rem"}})]})})}function de(e){var n=e.imageDetails,t=e.thumbnail,i=e.handleSelectedImageChange,s=e.handleThumbnailChange,l=e.removeSelectedImage,c=e.handleNext,h=e.handlePrevious,m=e.isLast,x=e.isFirst,f=e.setDimensions,p=e.resizeHeights,Z=(0,a.useState)(""),v=(0,r.Z)(Z,2),j=v[0],b=v[1],y=(0,a.useState)(!1),C=(0,r.Z)(y,2),k=C[0],S=C[1],w=(0,a.useState)(0),I=(0,r.Z)(w,2),M=I[0],P=I[1],D=(0,a.useState)(!1),T=(0,r.Z)(D,2),L=T[0],F=T[1];function R(){var e=!0;return b(""),n.length<1&&(b("Need atleast one image to create a memory"),e=!1),n.length>15&&(b("Maximum Allowed Images per Memory: ".concat(15)),e=!1),e}(0,a.useEffect)((function(){k&&R()}),[n,k]),(0,a.useEffect)((function(){M<n.length&&P(n.length),M>n.length&&F(!0),M===n.length&&F(!1)}),[n,M]);return(0,d.jsxs)(K,{children:[(0,d.jsx)(g.ZP,{item:!0,children:(0,d.jsx)(ue,{handleChange:function(e){S(!0),e.target.files&&P(e.target.files.length+n.length),i(e,R)}})}),(0,d.jsxs)(g.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",children:[(0,d.jsxs)(u.Z,{children:["Total Images Selected:",n.length,"/",15]}),(0,d.jsx)(ne,{text:j})]}),(0,d.jsx)(G,{handleNext:function(){return e=c,void(R()&&e());var e},handlePrevious:h,isLast:m,isFirst:x}),(0,d.jsx)(g.ZP,{item:!0,children:(0,d.jsx)(le,{imageDetails:n,handleRemoveImage:function(e){P((function(e){return e-1})),l(e)},thumbnail:t,handleThumbnailChange:s,setDimensions:f,resizeHeights:p})}),(0,d.jsx)(Y.Z,{open:L,fullWidth:!0,sx:{p:1},children:(0,d.jsxs)($.Z,{sx:{maxWidth:1,p:1},children:[(0,d.jsx)(H.Z,{title:"Adding Images",sx:{textAlign:"center"}}),(0,d.jsx)(o.Z,{}),(0,d.jsxs)(ee.Z,{children:[(0,d.jsxs)(u.Z,{variant:"h6",sx:{color:"muted.main"},children:["Total Images Selected:",n.length,"/",15]}),(0,d.jsx)(X.Z,{justifyContent:"center",sx:{py:2},children:(0,d.jsx)(u.Z,{variant:"h5",color:"error",children:j})})]})]})})]})}var he=t(71747);function me(e){var n=e.storyError,t=e.story,r=e.handleStoryChange,i=(0,a.useRef)();return(0,a.useEffect)((function(){i.current.focus()}),[]),(0,d.jsx)(s.Z,{sx:{p:2,m:1,my:2,border:1,borderColor:n?"error.main":"primary.main",bgcolor:"input.background",minHeight:"200px",borderRadius:5},onClick:function(){return i.current.focus()},children:(0,d.jsx)(he.Z,{autoFocus:!0,"aria-label":"minimum height",placeholder:"Tell your story...",value:t,onChange:r,style:{width:"100%",minHeight:"184px",maxHeight:"70vh",boxSizing:"border-box",paddingTop:"5px",border:0,overflow:"auto",outline:"none",resize:"vertical",borderRadius:5,"&:focus":{border:0}},ref:i})})}function xe(e){var n=e.story,t=e.handleStoryChange,i=e.handleNext,o=e.handlePrevious,l=e.isLast,c=e.isFirst,u=e.progressDialog,h=1e5,m=(0,a.useState)(""),x=(0,r.Z)(m,2),f=x[0],g=x[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(me,{storyError:f,story:n,handleStoryChange:t}),(0,d.jsx)(s.Z,{sx:{p:1,m:1},children:(0,d.jsx)(ne,{text:f})}),(0,d.jsx)(G,{handleNext:function(){return e=i,void(n.length<=h?(g(""),e()):g("Maximum story length is: ".concat(h)));var e},handlePrevious:o,isLast:l,isFirst:c}),u]})}var fe=t(40986),ge=t(71554),pe=t(98946),Ze=t(15146);function ve(e){var n=e.value;return(0,d.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",mb:1},children:[(0,d.jsx)(s.Z,{sx:{width:"100%",mr:1},children:(0,d.jsx)(fe.Z,{variant:"determinate",value:n})}),(0,d.jsx)(s.Z,{sx:{minWidth:35},children:(0,d.jsx)(u.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(n),"%")})})]})}function je(e){var n,t=e.message,r=e.done;return n="failed"===r?(0,d.jsx)(u.Z,{color:"error.main",children:"Failed"}):!0===r?(0,d.jsx)(u.Z,{color:"success.main",children:"Done"}):(0,d.jsx)(ge.Z,{size:30}),(0,d.jsxs)(s.Z,{sx:{display:"flex",alignItems:"space-between"},children:[(0,d.jsx)(s.Z,{sx:{width:"100%",mr:1},children:(0,d.jsx)(u.Z,{children:t})}),(0,d.jsx)(s.Z,{sx:{minWidth:35},children:n})]})}function be(e){var n=e.progress,t=e.counter;return 100===n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",m:2},children:[(0,d.jsx)(pe.Z,{color:"success",fontSize:"large",sx:{mr:2}}),(0,d.jsx)(u.Z,{variant:"h5",color:"primary.main",children:"Memory Created Successfully"})]}),(0,d.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,d.jsx)(s.Z,{children:(0,d.jsx)(u.Z,{children:"Navigating to memories page in "})}),(0,d.jsx)(s.Z,{sx:{mx:1},children:(0,d.jsx)(u.Z,{variant:"h6",color:"success.main",children:t})}),(0,d.jsx)(s.Z,{children:(0,d.jsx)(u.Z,{children:"seconds"})})]})]}):-1===n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",m:2},children:[(0,d.jsx)(Ze.Z,{color:"error",fontSize:"large",sx:{mr:2}}),(0,d.jsx)(u.Z,{variant:"h5",color:"primary.main",children:"Memory Creation Failed"})]}),(0,d.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,d.jsx)(s.Z,{children:(0,d.jsx)(u.Z,{children:"Navigating to memories page in "})}),(0,d.jsx)(s.Z,{sx:{mx:1},children:(0,d.jsx)(u.Z,{variant:"h6",color:"success.main",children:t})}),(0,d.jsx)(s.Z,{children:(0,d.jsx)(u.Z,{children:"seconds"})})]})]}):null}function ye(e){var n=e.open,t=e.progress,i=e.messages,s=(0,a.useState)(0),l=(0,r.Z)(s,2),c=l[0],u=l[1];return(0,a.useEffect)((function(){var e;return c>0&&(e=setTimeout((function(){return u(c-1)}),1e3)),function(){return clearTimeout(e)}}),[c]),(0,a.useEffect)((function(){100!==t&&-1!==t||u(3)}),[t]),(0,d.jsx)(Y.Z,{open:n,fullWidth:!0,sx:{p:1},children:(0,d.jsxs)($.Z,{sx:{maxWidth:1,p:1},children:[(0,d.jsx)(H.Z,{title:"Creating Memory",sx:{textAlign:"center"}}),(0,d.jsx)(o.Z,{}),(0,d.jsxs)(ee.Z,{children:[(0,d.jsx)(ve,{value:t>0?t:0}),i.map((function(e){return(0,d.jsx)(je,{message:e.message,done:e.done},e.message)})),(0,d.jsx)(be,{progress:t,counter:c})]})]})})}function Ce(e){var n=e.mode,t=e.bucket,i=e.authURL,l=(0,f.s0)(),c=["Enter memory title and date","Upload Pictures","Write story"],u=function(e){var n=(0,a.useState)(0),t=(0,r.Z)(n,2),i=t[0],s=t[1];return[i,function(){s((i+1)%e)},function(){s((i-1+e)%e)},i===e-1,0===i]}(c.length),h=(0,r.Z)(u,5),p=h[0],Z=h[1],v=h[2],b=h[3],y=h[4],C=(0,T.Z)(""),k=(0,r.Z)(C,3),S=k[0],w=k[2],I=(0,L.Z)(""),M=(0,r.Z)(I,3),P=M[0],H=M[2],q=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],i=n[1],s=(0,a.useState)([]),o=(0,r.Z)(s,2),l=o[0],c=o[1],u=(0,a.useState)(0),d=(0,r.Z)(u,2),h=d[0],m=d[1],x=function(e){m(e)};return[t,h,function(e){if(e.target.files){var n=Array.from(e.target.files);n.forEach((function(e){var n=new Image;n.onload=function(n){var t=Date.now(),r="".concat(t,"-").concat(e.name);i((function(t){return t.concat([{name:r,size:e.size/1048576,url:n.target.src,height:n.target.naturalHeight,width:n.target.naturalWidth,imageFile:e}])}))},n.src=URL.createObjectURL(e)})),c((function(e){return e.concat(n)})),n.map((function(e){return URL.revokeObjectURL(e)}))}},function(e){i([].concat((0,R.Z)(t.slice(0,e)),(0,R.Z)(t.slice(e+1)))),c([].concat((0,R.Z)(l.slice(0,e)),(0,R.Z)(l.slice(e+1)))),e<h?x(h-1):e===h&&x(0)},x,function(e,n){i([].concat((0,R.Z)(t.slice(0,e)),[(0,F.Z)((0,F.Z)({},t[e]),{},{images:n})],(0,R.Z)(t.slice(e+1))))}]}(),U=(0,r.Z)(q,6),A=U[0],O=U[1],B=U[2],J=U[3],V=U[4],_=U[5],G=(0,z.Z)(""),K=(0,r.Z)(G,3),X=K[0],Y=K[2],$=(0,a.useState)(!1),ee=(0,r.Z)($,2),ne=ee[0],te=ee[1],re=(0,a.useState)(0),ae=(0,r.Z)(re,2),ie=ae[0],se=ae[1],oe=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],i=n[1];return[t,function(e,n){var t=[{message:e,done:n}];i((function(e){return e.concat(t)}))},function(e,n){var t=[{message:e,done:n}];i((function(e){return e.slice(0,-1).concat(t)}))}]}(),le=(0,r.Z)(oe,3),ce=le[0],ue=le[1],he=le[2],me=(0,a.useState)(0),fe=(0,r.Z)(me,2),ge=fe[0],pe=fe[1],Ze=function(e){return se(e)},ve=function(){return pe((function(e){return e+1}))},je=A.map((function(e){return e.imageFile}));(0,a.useEffect)((function(){var e="Uploading Images (".concat(ge,"/").concat(A.length,")");ge>=0&&ie>=10&&(0===ge?ue(e,!1):he(e,!1),A.length===ge&&he(e,!0))}),[ge,ie]);var be,Ce=(0,d.jsx)(Q,{activeStep:p,handleNext:Z,handlePrevious:v,isLast:b,isFirst:y,title:S,date:P,handleTitleChange:w,handleDateChange:H}),ke=(0,d.jsx)(de,{imageDetails:A,handleSelectedImageChange:B,removeSelectedImage:J,thumbnail:O,handleThumbnailChange:V,handleNext:Z,handlePrevious:v,isLast:b,isFirst:y,setDimensions:_,resizeHeights:[500,1e3,1500]}),Se=function(){var e=(0,x.Z)((0,m.Z)().mark((function e(){var n,r,a;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Date(2100,1,1).getTime()-Date.now(),r={key:n,title:S,date:P,lastModified:new Date,imageDetails:A,story:X,thumbnail:A[O],totalSize:(s=A,s.reduce((function(e,n){return e+n.size}),0))},te(!0),e.next=5,D.CreateMemory(t,i,r,Ze,he,ue,je,ve);case 5:a=e.sent,Ze(!0===a?100:-1),setTimeout((function(){return l("/memories")}),3e3);case 8:case"end":return e.stop()}var s}),e)})));return function(){return e.apply(this,arguments)}}(),we=(0,d.jsx)(ye,{open:ne,progress:ie,messages:ce}),Ie=function(e,n,t,r,a){return(0,d.jsx)(g.ZP,{container:!0,justifyContent:"center",children:(0,d.jsx)(g.ZP,{item:!0,lg:6,xs:12,sx:{boxShadow:10,borderRadius:5,bgcolor:"button.main",mb:2},children:(0,d.jsxs)(s.Z,{children:[(0,d.jsx)(j,{titles:n,activeStep:a,handleClick:function(){}}),(0,d.jsx)(o.Z,{}),t[a]]})})})}(0,c,[Ce,ke,(0,d.jsx)(xe,{story:X,handleStoryChange:Y,handleNext:Se,handlePrevious:v,isLast:b,isFirst:y,progressDialog:we})],0,p),Me=function(e,n,t,r,a){return(0,d.jsxs)(g.ZP,{container:!0,justifyContent:"space-evenly",sx:{p:0},children:[(0,d.jsxs)(g.ZP,{item:!0,xs:6,sm:4,md:4,lg:3,xl:2,sx:{px:1,mb:1},children:[(0,d.jsx)(W,{title:"Thumbnail Preview"}),(0,d.jsx)(N.Z,{title:e,date:n||"",thumbnailImage:t.length>0?t[r].url:"",handleClick:function(){}})]}),(0,d.jsxs)(g.ZP,{item:!0,xs:12,lg:9,xl:10,children:[(0,d.jsx)(W,{title:"Memory Preview"}),(0,d.jsx)(E.Z,{memType:"preview",memTitle:e,memDate:n,memStory:a,memImages:t.map((function(e){return{src:e.url,width:e.width,height:e.height}})),imageNames:t.map((function(e){return e.name}))})]})]})}(S,P,A,O,X);return"Create"===n&&(be=Ie),"Preview"===n&&(be=Me),be}function ke(e){var n=e.bucket,t=e.authURL,s=["Create","Preview"],o=(0,a.useState)(s[0]),l=(0,r.Z)(o,2),c=l[0],u=l[1],m=(0,a.useRef)(null);return(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(h,{mode:c,handleModeChange:u,modes:s}),(0,d.jsx)(Ce,{mode:c,formRef:m,bucket:n,authURL:t})]})}ye.defaultProps={messages:[]}}}]);
//# sourceMappingURL=907.c076c2f1.chunk.js.map