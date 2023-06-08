"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[800],{61001:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(42169),a=t(39504),i=t(9585),s=t(20890),l=t(81918),o=t(66608),c=t(80184);function u(e){var n=e.imageSrc,t=e.imageSrcSet,a=e.title,i=e.handleImageLoad;return(0,c.jsx)(r.Z,{component:"img",src:n,srcSet:t,alt:a,sx:{textAlign:"center",objectFit:"cover",height:{lg:350,md:300,xs:250}},onLoad:i})}function d(e){var n=e.title,t=e.date,r=e.avatar,o=e.shared;return(0,c.jsx)(a.Z,{children:(0,c.jsx)(i.Z,{disableTypography:!0,avatar:r,title:(0,c.jsxs)(s.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:[n,""!==o?(0,c.jsxs)(c.Fragment,{children:[" ",(0,c.jsx)(l.Z,{label:o,size:"small",variant:"filled",color:"Shared"===o?"success":"default",sx:{height:"auto"}})]}):null]}),subheader:(0,c.jsx)(s.Z,{sx:{color:"muted.main"},children:t}),sx:{padding:0,color:"faded.black"}})})}function h(e){var n=e.title,t=e.date,r=e.avatar,a=e.shared,i=e.thumbnailImage,s=e.thumbnailImageSrcSet,l=e.handleClick,h=e.handleImageLoad;return(0,c.jsxs)(o.Z,{handleClick:l,children:[(0,c.jsx)(u,{imageSrc:i,imageSrcSet:s,title:n,handleImageLoad:h}),(0,c.jsx)(d,{title:n,date:t,avatar:r,shared:a})]})}d.defaultProps={title:"Memory Thumbnail Image",date:"Memory Date",avatar:"",shared:""},u.defaultProps={title:"Memory Thumbnail Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},h.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){},avatar:"",shared:""}},66608:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(57621),a=t(66647),i=t(80184);function s(e){var n=e.handleClick,t=e.children;return(0,i.jsx)(a.Z,{onClick:n,children:(0,i.jsx)(r.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:{lg:430,md:380,xs:330},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:t})})}},16682:function(e,n,t){t.r(n),t.d(n,{default:function(){return Se}});var r=t(29439),a=t(72791),i=t(52766),s=t(64554),l=t(94721),o=t(90388),c=t(72466),u=t(20890),d=t(80184);function h(e){var n=e.mode,t=e.handleModeChange,r=e.modes;return(0,d.jsx)(l.Z,{children:(0,d.jsx)(s.Z,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,d.jsx)(c.Z,{exclusive:!0,value:n,"aria-label":"view-change",color:"primary",sx:{bgcolor:"button.main"},children:r.map((function(e){return(0,d.jsx)(o.Z,{value:e,onClick:function(){return t("".concat(e))},sx:{border:2,borderColor:"primary.main"},children:(0,d.jsx)(u.Z,{variant:"h6",children:e})},e)}))})})})}var x=t(74165),m=t(15861),f=t(57689),g=t(61889),p=t(70242),Z=t(74512),v=t(15825);function j(e){var n=e.titles,t=e.activeStep,r=e.handleClick;return(0,d.jsx)(p.Z,{activeStep:t,alternativeLabel:!0,sx:{py:4},children:n.map((function(e,n){return(0,d.jsx)(Z.Z,{onClick:r(n),children:(0,d.jsx)(v.Z,{children:e})},e)}))})}var y=t(85899);function b(e,n,t,r,a,i,s){var l=a.map((function(e,n){var r=i[n];return{Key:["memories",t,"images",e.name].join("/"),Body:r,ContentType:r.type}})),o=y.Z.uploadMultipleImages(e,n,l,s);return Promise.allSettled(o)}function C(e,n,t){return S.apply(this,arguments)}function S(){return(S=(0,m.Z)((0,x.Z)().mark((function e(n,t,r){var a,i;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify(r),e.next=3,y.Z.validateDetails(n,t,a);case 3:if("error"!==(i=e.sent).status){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",!0===i.Valid);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,n,t){return w.apply(this,arguments)}function w(){return(w=(0,m.Z)((0,x.Z)().mark((function e(n,t,r){var a,i,s;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify(r),i=["memories",r.key,"details.json"].join("/"),e.next=4,y.Z.upload(n,t,i,a);case 4:return s=e.sent,e.abrupt("return",s&&!0===s.ok);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(){var e=(0,m.Z)((0,x.Z)().mark((function e(n,t,r,a,i,s){var l,o;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(0),s("Initializing memory",!1),e.next=4,C(n,t,r);case 4:if(!0!==(l=e.sent)){e.next=13;break}return e.next=8,k(n,t,r);case 8:o=e.sent,i("Initializing Memory",o),a(10),e.next=14;break;case 13:i("Initializing Memory","failed");case 14:return e.abrupt("return",l);case 15:case"end":return e.stop()}}),e)})));return function(n,t,r,a,i,s){return e.apply(this,arguments)}}(),M=function(){var e=(0,m.Z)((0,x.Z)().mark((function e(n,t,r,a,i,s,l,o){var c,u;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(n,t,r,0,i,s,l);case 2:c=e.sent,u=0;case 4:if(!(u<c.length)){e.next=10;break}if("rejected"!==c[u].status&&!0===c[u].value.ok){e.next=7;break}return e.abrupt("return",!1);case 7:u+=1,e.next=4;break;case 10:return o(95),e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)})));return function(n,t,r,a,i,s,l,o){return e.apply(this,arguments)}}(),P=function(){var e=(0,m.Z)((0,x.Z)().mark((function e(n,t,r,a,i,s,l,o){var c;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(n,t,r,a,i,s);case 2:if(!0!==e.sent){e.next=15;break}return e.next=6,M(n,t,r.key,r.title,r.imageDetails,l,o,a);case 6:if(!0!==e.sent){e.next=14;break}return e.next=10,y.Z.finalizeMemory(n,t,r.key);case 10:if(c=e.sent,parseInt(c.MemoryID,10)===r.key){e.next=13;break}return e.abrupt("return",!1);case 13:return e.abrupt("return",!0);case 14:i("Uploading Original Images","failed");case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e)})));return function(n,t,r,a,i,s,l,o){return e.apply(this,arguments)}}(),T={CreateMemory:P},F=t(72168),D=t(94125),L=t(1413),R=t(93433);var N=t(91619);var z=t(61001),E=t(58035),W=t(9585);function U(e){var n=e.title;return(0,d.jsx)(W.Z,{title:n,sx:{border:0,borderColor:"primary.main",textAlign:"center",width:1,mb:1,bgcolor:"button.main",p:0,py:2,borderRadius:2}})}var q=t(27391),A=t(87089),O=t(36571),H=t(20041),V=t(62797),B=t(36151);function J(e){var n=e.label,t=e.handleClick,r=e.disabled;return(0,d.jsx)(B.Z,{onClick:t,disabled:r,sx:{m:2,border:2,borderColor:r?"muted.main":"ternary.main",borderRadius:5,bgcolor:"input.background"},children:n})}function _(e){var n=e.handleNext,t=e.handlePrevious,r=e.isLast,a=e.isFirst;return(0,d.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"row",pt:2,width:1,justifyContent:"space-evenly"},children:[a?(0,d.jsx)(J,{disabled:!0,handleClick:function(){},label:"Back"}):(0,d.jsx)(J,{handleClick:t,label:"Back"}),r?(0,d.jsx)(J,{handleClick:n,label:"Create Memory"}):(0,d.jsx)(J,{handleClick:n,label:"Next"})]})}function G(e){var n=e.children;return(0,d.jsx)(s.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,maxWidth:"90%",width:"45ch"},"& .MuiOutlinedInput-root":{backgroundColor:"form.input",borderRadius:5},flexDirection:"column",display:"flex",alignItems:"center",width:"auto",pt:2},autoComplete:"true",children:n})}J.defaultProps={disabled:!1};var K=t(9052);function Q(e){var n=e.title,t=e.date,i=e.handleTitleChange,s=e.handleDateChange,l=e.handleNext,o=e.handlePrevious,c=e.isLast,u=e.isFirst,h=e.activeStep,f=(0,a.useState)(""),g=(0,r.Z)(f,2),p=g[0],Z=g[1],v=(0,a.useState)(""),j=(0,r.Z)(v,2),y=j[0],b=j[1],C=(0,a.useState)(!1),S=(0,r.Z)(C,2),k=S[0],w=S[1],I=(0,a.useState)(!1),M=(0,r.Z)(I,2),P=M[0],T=M[1],F=V.Ry({title:V.Z_().required("Memory Title is required").max(40,"Maximum length of memory title is 40")}).required(),D=V.Ry({date:V.hT("Enter date by clicking calendar icon on the right end of date picker").required("Memory Date is required").nullable()}).required(),R=function(){var e=(0,m.Z)((0,x.Z)().mark((function e(){var r,a;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.Z.isFieldValid("title",n,Z,F);case 2:return r=e.sent,e.next=5,K.Z.isFieldValid("date",t,b,D);case 5:return a=e.sent,e.abrupt("return",r&&a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){k&&K.Z.isFieldValid("title",n,Z,F),P&&K.Z.isFieldValid("date",t,b,D)}),[n,t]);var N=function(){var e=(0,m.Z)((0,x.Z)().mark((function e(n){return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:e.sent&&n();case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,d.jsxs)(G,{children:[(0,d.jsx)(q.Z,{required:!0,onChange:function(e){w(!0),i(e)},id:"outlined-required",label:"Memory Name",defaultValue:n,helperText:p||"E.g. Gogol's 2nd Birthday",error:!!p}),(0,d.jsx)(O._,{dateAdapter:H.H,children:(0,d.jsx)(A.M,{label:"Memory Date",value:t,onChange:function(e){T(!0),s(e)},placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return(0,d.jsx)(q.Z,(0,L.Z)((0,L.Z)({readOnly:!0,required:!0},e),{},{error:!!y,helperText:y||""}))}})}),(0,d.jsx)(_,{activeStep:h,handleNext:function(){return N(l)},handlePrevious:o,isLast:c,isFirst:u})]})}Q.defaultProps={date:""};var X=t(53767),Y=t(5574),$=t(57621),ee=t(39504);function ne(e){var n=e.text;return(0,d.jsx)(u.Z,{sx:{color:"error.main"},children:n})}var te=t(44768),re=t(45987),ae=t(57900),ie=t(3191),se=t(68664),le=t(4166),oe=t(63291),ce=["alt","style","title"];function ue(e){var n=e.imageDetails,t=e.handleRemoveImage,i=e.thumbnail,o=e.handleThumbnailChange,c=e.handleCaptionChange;console.log(n);var h=(0,a.useState)([]),x=(0,r.Z)(h,2),m=x[0],f=x[1],g=(0,a.useState)(null),p=(0,r.Z)(g,2),Z=p[0],v=p[1],j=(0,a.useState)(!1),y=(0,r.Z)(j,2),b=y[0],C=y[1],S=function(){return n.map((function(e,n){return{alt:n,src:e.url,width:e.width,height:e.height,caption:e.caption||""}}))};(0,a.useEffect)((function(){return f(S)}),[n]),console.log(m);return console.log(Z),m.length?(0,d.jsxs)(s.Z,{component:"div",sx:{py:2},children:[(0,d.jsx)(l.Z,{}),(0,d.jsx)(u.Z,{sx:{p:2},variant:"h6",align:"center",children:"Selected Images"}),(0,d.jsx)(oe.Z,{images:m,renderPhoto:function(e){var n=e.layout,r=e.imageProps,a=r.alt,s=r.style,l=(r.title,(0,re.Z)(r,ce));return(0,d.jsxs)(B.Z,{component:"div",sx:{padding:"2px"},children:[(0,d.jsx)("img",(0,L.Z)({alt:a,style:(0,L.Z)((0,L.Z)({},s),{},{width:n.width,padding:0})},l)),n.index!==i?(0,d.jsx)(le.Z,{index:n.index,handleRemoveImage:t}):null,(0,d.jsx)(ae.Z,{index:n.index,thumbnail:i,handleThumbnailChange:o}),(0,d.jsx)(se.Z,{handleClick:function(){return e=n.index,v(e),void C(!0);var e},caption:"caption"in m[n.index]?m[n.index].caption:""})]})}}),null!==Z?(0,d.jsx)(ie.Z,{imageCaption:"caption"in m[Z]?m[Z].caption:"",index:Z,src:n[Z].url,open:b,handleClose:function(){v(null),C(!1)},handleSubmit:c}):null]}):null}function de(e){var n=e.imageDetails,t=e.thumbnail,i=e.handleSelectedImageChange,s=e.handleThumbnailChange,o=e.removeSelectedImage,c=e.handleNext,h=e.handlePrevious,x=e.isLast,m=e.isFirst,f=e.handleCaptionChange,p=(0,a.useState)(""),Z=(0,r.Z)(p,2),v=Z[0],j=Z[1],y=(0,a.useState)(!1),b=(0,r.Z)(y,2),C=b[0],S=b[1],k=(0,a.useState)(0),w=(0,r.Z)(k,2),I=w[0],M=w[1],P=(0,a.useState)(!1),T=(0,r.Z)(P,2),F=T[0],D=T[1];function L(){var e=!0;return j(""),n.length<1&&(j("Need atleast one image to create a memory"),e=!1),n.length>15&&(j("Maximum Allowed Images per Memory: ".concat(15)),e=!1),e}(0,a.useEffect)((function(){C&&L()}),[n,C]),(0,a.useEffect)((function(){I<n.length&&M(n.length),I>n.length&&D(!0),I===n.length&&D(!1)}),[n,I]);return(0,d.jsxs)(G,{children:[(0,d.jsx)(g.ZP,{item:!0,children:(0,d.jsx)(te.Z,{handleChange:function(e){S(!0),e.target.files&&M(e.target.files.length+n.length),i(e,L)}})}),(0,d.jsxs)(g.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",children:[(0,d.jsxs)(u.Z,{color:"gray",sx:{marginTop:2},children:["Total Images Selected: ",n.length,"/",15]}),(0,d.jsx)(ne,{text:v})]}),(0,d.jsx)(_,{handleNext:function(){return e=c,void(L()&&e());var e},handlePrevious:h,isLast:x,isFirst:m}),(0,d.jsx)(g.ZP,{item:!0,children:(0,d.jsx)(ue,{imageDetails:n,handleRemoveImage:function(e){M((function(e){return e-1})),o(e)},thumbnail:t,handleThumbnailChange:s,handleCaptionChange:f})}),(0,d.jsx)(Y.Z,{open:F,fullWidth:!0,sx:{p:1},children:(0,d.jsxs)($.Z,{sx:{maxWidth:1,p:1},children:[(0,d.jsx)(W.Z,{title:"Adding Images",sx:{textAlign:"center"}}),(0,d.jsx)(l.Z,{}),(0,d.jsxs)(ee.Z,{children:[(0,d.jsxs)(u.Z,{variant:"h6",sx:{color:"muted.main"},children:["Total Images Selected:",n.length,"/",15]}),(0,d.jsx)(X.Z,{justifyContent:"center",sx:{py:2},children:(0,d.jsx)(u.Z,{variant:"h5",color:"error",children:v})})]})]})})]})}var he=t(71747);function xe(e){var n=e.storyError,t=e.story,r=e.handleStoryChange,i=(0,a.useRef)();return(0,a.useEffect)((function(){i.current.focus()}),[]),(0,d.jsx)(s.Z,{sx:{p:2,m:1,my:2,border:1,borderColor:n?"error.main":"primary.main",bgcolor:"input.background",minHeight:"200px",borderRadius:5},onClick:function(){return i.current.focus()},children:(0,d.jsx)(he.Z,{autoFocus:!0,"aria-label":"minimum height",placeholder:"Tell your story...",value:t,onChange:r,style:{width:"100%",minHeight:"184px",maxHeight:"70vh",boxSizing:"border-box",paddingTop:"5px",border:0,overflow:"auto",outline:"none",resize:"vertical",borderRadius:5,"&:focus":{border:0}},ref:i})})}function me(e){var n=e.story,t=e.handleStoryChange,i=e.handleNext,l=e.handlePrevious,o=e.isLast,c=e.isFirst,u=e.progressDialog,h=1e5,x=(0,a.useState)(""),m=(0,r.Z)(x,2),f=m[0],g=m[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(xe,{storyError:f,story:n,handleStoryChange:t}),(0,d.jsx)(s.Z,{sx:{p:1,m:1},children:(0,d.jsx)(ne,{text:f})}),(0,d.jsx)(_,{handleNext:function(){return e=i,void(n.length<=h?(g(""),e()):g("Maximum story length is: ".concat(h)));var e},handlePrevious:l,isLast:o,isFirst:c}),u]})}var fe=t(57482),ge=t(13239),pe=t(98946),Ze=t(15146);function ve(e){var n=e.value;return(0,d.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",mb:1},children:[(0,d.jsx)(s.Z,{sx:{width:"100%",mr:1},children:(0,d.jsx)(fe.Z,{variant:"determinate",value:n})}),(0,d.jsx)(s.Z,{sx:{minWidth:35},children:(0,d.jsx)(u.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(n),"%")})})]})}function je(e){var n,t=e.message,r=e.done;return n="failed"===r?(0,d.jsx)(u.Z,{color:"error.main",children:"Failed"}):!0===r?(0,d.jsx)(u.Z,{color:"success.main",children:"Done"}):(0,d.jsx)(ge.Z,{size:30}),(0,d.jsxs)(s.Z,{sx:{display:"flex",alignItems:"space-between"},children:[(0,d.jsx)(s.Z,{sx:{width:"100%",mr:1},children:(0,d.jsx)(u.Z,{children:t})}),(0,d.jsx)(s.Z,{sx:{minWidth:35},children:n})]})}function ye(e){var n=e.progress,t=e.counter;return 100===n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",m:2},children:[(0,d.jsx)(pe.Z,{color:"success",fontSize:"large",sx:{mr:2}}),(0,d.jsx)(u.Z,{variant:"h5",color:"primary.main",children:"Memory Created Successfully"})]}),(0,d.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,d.jsx)(s.Z,{children:(0,d.jsx)(u.Z,{children:"Navigating to memories page in "})}),(0,d.jsx)(s.Z,{sx:{mx:1},children:(0,d.jsx)(u.Z,{variant:"h6",color:"success.main",children:t})}),(0,d.jsx)(s.Z,{children:(0,d.jsx)(u.Z,{children:"seconds"})})]})]}):-1===n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",m:2},children:[(0,d.jsx)(Ze.Z,{color:"error",fontSize:"large",sx:{mr:2}}),(0,d.jsx)(u.Z,{variant:"h5",color:"primary.main",children:"Memory Creation Failed"})]}),(0,d.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,d.jsx)(s.Z,{children:(0,d.jsx)(u.Z,{children:"Navigating to memories page in "})}),(0,d.jsx)(s.Z,{sx:{mx:1},children:(0,d.jsx)(u.Z,{variant:"h6",color:"success.main",children:t})}),(0,d.jsx)(s.Z,{children:(0,d.jsx)(u.Z,{children:"seconds"})})]})]}):null}function be(e){var n=e.open,t=e.progress,i=e.messages,s=(0,a.useState)(0),o=(0,r.Z)(s,2),c=o[0],u=o[1];return(0,a.useEffect)((function(){var e;return c>0&&(e=setTimeout((function(){return u(c-1)}),1e3)),function(){return clearTimeout(e)}}),[c]),(0,a.useEffect)((function(){100!==t&&-1!==t||u(3)}),[t]),(0,d.jsx)(Y.Z,{open:n,fullWidth:!0,sx:{p:1},children:(0,d.jsxs)($.Z,{sx:{maxWidth:1,p:1},children:[(0,d.jsx)(W.Z,{title:"Creating Memory",sx:{textAlign:"center"}}),(0,d.jsx)(l.Z,{}),(0,d.jsxs)(ee.Z,{children:[(0,d.jsx)(ve,{value:t>0?t:0}),i.map((function(e){return(0,d.jsx)(je,{message:e.message,done:e.done},e.message)})),(0,d.jsx)(ye,{progress:t,counter:c})]})]})})}function Ce(e){var n=e.mode,t=e.bucket,i=e.authURL,o=(0,f.s0)(),c=["Enter memory title and date","Upload Pictures","Write story"],u=function(e){var n=(0,a.useState)(0),t=(0,r.Z)(n,2),i=t[0],s=t[1];return[i,function(){s((i+1)%e)},function(){s((i-1+e)%e)},i===e-1,0===i]}(c.length),h=(0,r.Z)(u,5),p=h[0],Z=h[1],v=h[2],y=h[3],b=h[4],C=(0,F.Z)(""),S=(0,r.Z)(C,3),k=S[0],w=S[2],I=(0,D.Z)(""),M=(0,r.Z)(I,3),P=M[0],W=M[2],q=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],i=n[1],s=(0,a.useState)([]),l=(0,r.Z)(s,2),o=l[0],c=l[1],u=(0,a.useState)(0),d=(0,r.Z)(u,2),h=d[0],x=d[1],m=[500,1e3,1500],f=function(e){x(e)};return[t,h,function(e){if(e.target.files){var n=Array.from(e.target.files);n.forEach((function(e){var n=new Image;n.onload=function(n){var t=Date.now(),r="".concat(t,"-").concat(e.name),a=m.map((function(e){return{height:e,width:Math.ceil(e*n.target.naturalWidth/n.target.naturalHeight)}}));i((function(t){return t.concat([{name:r,size:e.size/1048576,url:n.target.src,height:n.target.naturalHeight,width:n.target.naturalWidth,imageFile:e,images:a}])}))},n.src=URL.createObjectURL(e)})),c((function(e){return e.concat(n)})),n.map((function(e){return URL.revokeObjectURL(e)}))}},function(e){i([].concat((0,R.Z)(t.slice(0,e)),(0,R.Z)(t.slice(e+1)))),c([].concat((0,R.Z)(o.slice(0,e)),(0,R.Z)(o.slice(e+1)))),e<h?f(h-1):e===h&&f(0)},f,function(e,n){i([].concat((0,R.Z)(t.slice(0,e)),[(0,L.Z)((0,L.Z)({},t[e]),{},{caption:n})],(0,R.Z)(t.slice(e+1))))}]}(),A=(0,r.Z)(q,6),O=A[0],H=A[1],V=A[2],B=A[3],J=A[4],_=A[5],G=(0,N.Z)(""),K=(0,r.Z)(G,3),X=K[0],Y=K[2],$=(0,a.useState)(!1),ee=(0,r.Z)($,2),ne=ee[0],te=ee[1],re=(0,a.useState)(0),ae=(0,r.Z)(re,2),ie=ae[0],se=ae[1],le=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],i=n[1];return[t,function(e,n){var t=[{message:e,done:n}];i((function(e){return e.concat(t)}))},function(e,n){var t=[{message:e,done:n}];i((function(e){return e.slice(0,-1).concat(t)}))}]}(),oe=(0,r.Z)(le,3),ce=oe[0],ue=oe[1],he=oe[2],xe=(0,a.useState)(0),fe=(0,r.Z)(xe,2),ge=fe[0],pe=fe[1],Ze=function(e){return se(e)},ve=function(){return pe((function(e){return e+1}))},je=O.map((function(e){return e.imageFile}));(0,a.useEffect)((function(){var e="Uploading Images (".concat(ge,"/").concat(O.length,")");ge>=0&&ie>=10&&(0===ge?ue(e,!1):he(e,!1),O.length===ge&&he(e,!0))}),[ge,ie]);var ye,Ce=(0,d.jsx)(Q,{activeStep:p,handleNext:Z,handlePrevious:v,isLast:y,isFirst:b,title:k,date:P,handleTitleChange:w,handleDateChange:W}),Se=(0,d.jsx)(de,{imageDetails:O,handleSelectedImageChange:V,removeSelectedImage:B,thumbnail:H,handleThumbnailChange:J,handleNext:Z,handlePrevious:v,isLast:y,isFirst:b,handleCaptionChange:_}),ke=function(){var e=(0,m.Z)((0,x.Z)().mark((function e(){var n,r,a;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Date(2100,1,1).getTime()-Date.now(),r={key:n,title:k,date:P,lastModified:new Date,imageDetails:O,story:X,thumbnail:O[H],totalSize:(s=O,s.reduce((function(e,n){return e+n.size}),0))},te(!0),e.next=5,T.CreateMemory(t,i,r,Ze,he,ue,je,ve);case 5:a=e.sent,Ze(!0===a?100:-1),setTimeout((function(){return o("/memories")}),3e3);case 8:case"end":return e.stop()}var s}),e)})));return function(){return e.apply(this,arguments)}}(),we=(0,d.jsx)(be,{open:ne,progress:ie,messages:ce}),Ie=function(e,n,t,r,a){return(0,d.jsx)(g.ZP,{container:!0,justifyContent:"center",children:(0,d.jsx)(g.ZP,{item:!0,lg:6,xs:12,sx:{boxShadow:10,borderRadius:5,bgcolor:"button.main",mb:2},children:(0,d.jsxs)(s.Z,{children:[(0,d.jsx)(j,{titles:n,activeStep:a,handleClick:function(){}}),(0,d.jsx)(l.Z,{}),t[a]]})})})}(0,c,[Ce,Se,(0,d.jsx)(me,{story:X,handleStoryChange:Y,handleNext:ke,handlePrevious:v,isLast:y,isFirst:b,progressDialog:we})],0,p),Me=function(e,n,t,r,a){return(0,d.jsxs)(g.ZP,{container:!0,justifyContent:"space-evenly",sx:{p:0},children:[(0,d.jsxs)(g.ZP,{item:!0,xs:6,sm:4,md:4,lg:3,xl:2,sx:{px:1,mb:1},children:[(0,d.jsx)(U,{title:"Thumbnail Preview"}),(0,d.jsx)(z.Z,{title:e,date:n||"",thumbnailImage:t.length>0?t[r].url:"",handleClick:function(){}})]}),(0,d.jsxs)(g.ZP,{item:!0,xs:12,lg:9,xl:10,children:[(0,d.jsx)(U,{title:"Memory Preview"}),(0,d.jsx)(E.Z,{memType:"preview",memTitle:e,memDate:n,memStory:a,memImages:t.map((function(e){return{src:e.url,width:e.width,height:e.height,caption:e.caption||""}})),imageNames:t.map((function(e){return e.name}))})]})]})}(k,P,O,H,X);return"Create"===n&&(ye=Ie),"Preview"===n&&(ye=Me),ye}function Se(e){var n=e.bucket,t=e.authURL,s=["Create","Preview"],l=(0,a.useState)(s[0]),o=(0,r.Z)(l,2),c=o[0],u=o[1],x=(0,a.useRef)(null);return(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(h,{mode:c,handleModeChange:u,modes:s}),(0,d.jsx)(Ce,{mode:c,formRef:x,bucket:n,authURL:t})]})}be.defaultProps={messages:[]}}}]);
//# sourceMappingURL=800.fbd8267e.chunk.js.map