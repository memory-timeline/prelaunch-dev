"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[556],{52286:function(e,t,s){s.r(t),s.d(t,{default:function(){return V}});var a=s(24813),r=s(57829),l=s(53433),n=s(74165),o=s(15861),i=s(69099),c=s(17551),x=s(46417);function d(e){var t=e.authURL,s=e.next,a=e.handlePreLogin,r=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:r=""!==s?"https://".concat(t,"/oauth2/frontend/authorize?next=").concat(s):"https://".concat(t,"/oauth2/frontend/authorize"),window.location.replace(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,x.jsx)(i.Z,{type:"submit",variant:"outlined",onClick:r,sx:{borderRadius:"5px",borderColor:"white",fontWeight:"bold",color:"white","&:hover":{color:"white",borderColor:"white",backgroundColor:(0,c.Fq)("#fff",.1)}},children:"Login"})}d.defaultProps={handlePreLogin:function(){}};var m=s(31798),h=s(47313),u=s(2135),p=s(61113);s(55294),s(59193),s(14375);function g(){return(0,x.jsx)(i.Z,{type:"submit",variant:"contained",sx:{borderRadius:"5px",backgroundColor:"white","&:hover":{backgroundColor:"form.input"}},children:(0,x.jsx)(u.rU,{style:{textDecoration:"none"},to:"/memories",children:(0,x.jsx)(p.Z,{color:"primary",children:"My Memories"})})})}function f(e){var t=e.authURL,s=e.next,n=""!==m.ZP.getUserInfo(),o=(0,a.Z)((function(e){return e.breakpoints.down("md")})),i=!0===n?(0,x.jsx)(g,{}):(0,x.jsx)(d,{authURL:t,next:s}),c=!0===n&&o?(0,x.jsx)(l.Oc,{width:"64px",height:"64px"}):(0,x.jsx)(l.cd,{width:"50px",height:"50px",fontSize:"1.7rem"});return(0,x.jsx)(r.Z,{component:"div",className:"w-full px-4 py-3 mx-auto lg:py-3 md:px-24 lg:px-8",sx:{backgroundColor:"primary.main",borderBottom:"3px solid #ffc745"},children:(0,x.jsxs)("div",{className:"relative flex items-center justify-between max-w-6xl mx-auto lg:justify-between lg:space-x-16",children:[c,(0,x.jsx)("ul",{className:"flex items-center space-x-8 lg:flex",children:i})]})})}var b=s(29439),w=s.p+"static/media/b1.6d728861e29150121526.webp",j=s.p+"static/media/b2.68e43eeaf6524322a47d.webp",v=s.p+"static/media/b3.c8bcec18a36151e053a8.webp",y=s.p+"static/media/b4.fcc92fc0c88b981d1ae7.webp",N=s.p+"static/media/b1-2000.abb0a56866208a8b01c0.webp",Z=s.p+"static/media/b2-2000.a5a6e91b9df7aad1aefc.webp",k=s.p+"static/media/b3-2000.3d35df883b589c09d4b5.webp",C=s.p+"static/media/b4-2000.6981d2090bd47dd43dae.webp";function S(){var e=[[w,"".concat(N," 1500w, ").concat(w," 2000w")],[j,"".concat(Z," 1500w, ").concat(j," 2000w")],[v,"".concat(k," 1500w, ").concat(v," 2000w")],[y,"".concat(C," 1500w, ").concat(y," 2000w")]],t=(0,h.useState)(0),s=(0,b.Z)(t,2),a=s[0],l=s[1],n=(0,h.useState)("none"),o=(0,b.Z)(n,2),i=o[0],c=o[1];return(0,h.useEffect)((function(){var t=setTimeout((function(){return l((function(t){return(t+1)%e.length}))}),5e3);return function(){return clearTimeout(t)}})),(0,x.jsxs)("div",{className:"relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 w-full bg-gray-200",children:[(0,x.jsxs)("div",{className:"inset-y-0 top-0 right-0 z-0 w-full max-w-xl mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0",style:{display:i},children:[(0,x.jsx)("svg",{viewBox:"0 0 100 100",fill:"currentColor",preserveAspectRatio:"none slice",className:"absolute left-0 hidden h-full text-gray-200 transform -translate-x-1/2 lg:block",children:(0,x.jsx)("path",{d:"M50 0H100L50 100H0L50 0Z"})}),(0,x.jsx)(r.Z,{component:"img",src:e[a][0],srcSet:e[a][1],alt:"Background",onLoad:function(){return c("block")},sx:{objectFit:"cover",height:{lg:"100%",xs:"250px",sm:"350px",md:"450px"},width:"100%"}})]}),(0,x.jsx)("div",{className:"relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl",children:(0,x.jsxs)("div",{className:"mb-16 lg:my-40 lg:max-w-lg lg:pr-5",children:[(0,x.jsx)("h2",{className:"mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none",children:"Memories, not just photos"}),(0,x.jsx)("p",{className:"pr-5 mb-5 text-base text-gray-700 md:text-lg",children:"Memories, are much more than photos. They are the stories, feelings, smells, goosebumps, smiles, tears, the people and so much more. myMemoryStore is a platform for people who treat their memories as precious possessions."}),(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsx)(u.rU,{to:"/memory/create",className:"inline-flex items-center justify-center h-12 px-3 mr-3 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none",style:{color:"darkolivegreen"},children:"Create a Memory"}),(0,x.jsx)(u.rU,{to:"/collage/create",className:"inline-flex items-center justify-center h-12 px-3 mr-3 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none",style:{color:"darkslateblue",backgroundColor:"rgba(255, 255, 255, 0.2)"},children:"Create a Collage"})]})]})})]})}var z=s(35898),L=s(14e3),M=s(43638),R=s(19536),U=s(87807);function P(e){var t=e.title;return(0,x.jsx)("p",{className:"text-xl font-bold text-gray-900",children:t})}function A(e){var t=e.children;return(0,x.jsx)(p.Z,{sx:{color:"muted.text",fontWeight:400,width:{xs:"calc(90%)",sm:"calc(60%)",lg:"calc(100%)"},height:{lg:"15vh"}},children:t})}function O(e){var t=e.title,s=e.next,r=e.children;return(0,a.Z)((function(e){return e.breakpoints.down("lg")}))?(0,x.jsxs)(z.Z,{direction:"column",justifyContent:"flex-start",alignItems:"center",spacing:2,children:[(0,x.jsx)(P,{title:t}),(0,x.jsx)(R.Z,{sx:{width:{xs:"calc(90%)",sm:"calc(60%)"}}}),(0,x.jsx)(A,{children:r}),(0,x.jsx)(R.Z,{sx:{width:{xs:"calc(90%)",sm:"calc(60%)"}}}),!0===s?(0,x.jsx)(M.Z,{color:"primary",fontSize:"large"}):null]}):(0,x.jsxs)(z.Z,{direction:"row",justifyContent:"center",alignItems:"flex-start",spacing:2,children:[(0,x.jsxs)(z.Z,{direction:"column",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,x.jsx)(P,{title:t}),(0,x.jsx)(R.Z,{sx:{width:"100%"}}),(0,x.jsx)(A,{children:r}),(0,x.jsx)(R.Z,{sx:{width:"100%"}})]}),!0===s?(0,x.jsx)(L.Z,{color:"primary"}):null]})}function W(){return(0,x.jsxs)("div",{className:"px-4 py-16 mx-auto w-full bg-white md:px-24 lg:px-8 lg:py-20",children:[(0,x.jsxs)(r.Z,{component:"div",className:"max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12",sx:{textAlign:"center"},children:[(0,x.jsx)("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto",children:"myMemoryStore."}),(0,x.jsx)(p.Z,{variant:"h6",sx:{fontWeight:500,color:"primary.main"},children:"Never lose a precious memory again."}),(0,x.jsxs)(p.Z,{variant:"h6",children:["Capture ",(0,x.jsx)(U.Z,{sx:{fontSize:"1rem"}})," Personalize"," ",(0,x.jsx)(U.Z,{sx:{fontSize:"1rem"}})," Share"," ",(0,x.jsx)(U.Z,{sx:{fontSize:"1rem"}})," Relive"]})]}),(0,x.jsxs)("div",{className:"mx-auto max-w-6xl grid gap-10 lg:grid-cols-3 sm:grid-cols-1",children:[(0,x.jsx)(O,{title:"Upload",next:!0,children:"Upload your memory images. Ones that define you. Ones that will be as precious 20 years down the line."}),(0,x.jsx)(O,{title:"Personalize",next:!0,children:"Once uploaded, add captions and stories that will be saved forever along with the photos themselves so they are not just another set of pixels on a screen but something more tangible and personal."}),(0,x.jsx)(O,{title:"Share / Relive",next:!1,children:"Share it with other people or don't. Just sit back and relive your memories whenever."})]})]})}var F=s(50537),I=s.p+"static/media/gogol.01f2f155fbb6e8abc63b.webp",T=s.p+"static/media/sagnika.8df7e8a5062b2932a6ce.webp",B=s.p+"static/media/blog_pic.d2c203b868e19e1a223b.webp";function D(){var e=(0,h.useState)("Read Our Story"),t=(0,b.Z)(e,2),s=t[0],a=t[1],r=(0,h.useState)("none"),l=(0,b.Z)(r,2),n=l[0],o=l[1];return(0,x.jsxs)("div",{className:"px-4 py-16 mx-auto w-full bg-white md:px-24 lg:px-8 lg:py-20",children:[(0,x.jsxs)("div",{className:"max-w-xl mb-10 md:mx-auto xs:text-center lg:max-w-2xl md:mb-12",children:[(0,x.jsx)("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 xs:text-4xl md:mx-auto",style:{textAlign:"center"},children:"The family that built myMemoryStore"}),(0,x.jsxs)(z.Z,{direction:"column",alignItems:"center",justifyContent:"center",children:[(0,x.jsx)("div",{style:{display:n},children:(0,x.jsx)(p.Z,{children:"When our son was born 2 years back, we started clicking pictures like crazy. Sadly enough could not find them when related conversations arose. Most photo storage solutions out there felt like empty boxes where you dump all photos. We kept the most precious photos along with the misclicks, the hazy ones and the ones we could not remember why we took. We kept the photos but what we really wanted to keep were the memories. But what are photos without the associated emotions and the stories. That is why we started building myMemoryStore, where you can keep your precious photos and the stories related to them so that you can relive the memories whenever you want."})}),(0,x.jsxs)(i.Z,{sx:{textAlign:"center"},onClick:function(){"none"===n&&(a("Collapse Story"),o("block")),"block"===n&&(a("Read Our Story"),o("none"))},children:[s," ",(0,x.jsx)(F.Z,{})]})]})]}),(0,x.jsxs)("div",{className:"grid gap-10 mx-auto xs:grid-cols-1 md:grid-cols-3 lg:max-w-screen-lg",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"relative pb-56 mb-4 rounded shadow lg:pb-64",children:(0,x.jsx)("img",{src:B,alt:"Person",className:"absolute object-cover w-full h-full rounded"})}),(0,x.jsxs)("div",{className:"flex flex-col xs:text-center",children:[(0,x.jsx)("p",{className:"text-lg font-bold text-gray-900 text-center",children:"Nabarun Chatterjee"}),(0,x.jsx)("p",{className:"mb-5 text-xs text-gray-900 text-center",children:"Product"})]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"relative pb-56 mb-4 rounded shadow lg:pb-64",children:(0,x.jsx)("img",{src:I,alt:"Person",className:"absolute object-cover w-full h-full rounded"})}),(0,x.jsxs)("div",{className:"flex flex-col xs:text-center",children:[(0,x.jsx)("p",{className:"text-lg font-bold text-gray-900 text-center",children:"Shlok Chatterjee"}),(0,x.jsx)("p",{className:"mb-5 text-xs text-gray-900 text-center",children:"Chief Chaos Creator"})]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"relative pb-56 mb-4 rounded shadow lg:pb-64",children:(0,x.jsx)("img",{src:T,alt:"Person",className:"absolute object-cover w-full h-full rounded"})}),(0,x.jsxs)("div",{className:"flex flex-col sm:text-center",children:[(0,x.jsx)("p",{className:"text-lg font-bold text-gray-900 text-center",children:"Sagnika Dasgupta"}),(0,x.jsx)("p",{className:"mb-5 text-xs text-gray-900 text-center",children:"Creative Lead"})]})]})]})]})}var H=s(28938);function E(){return(0,x.jsxs)("div",{className:"bg-gray-100 px-4 pt-16 mx-auto w-full border-opacity-10 md:px-24 lg:px-8",children:[(0,x.jsxs)("div",{className:"max-w-6xl mx-auto grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4",children:[(0,x.jsxs)("div",{className:"sm:col-span-2 flex",children:[(0,x.jsx)(l.cd,{}),(0,x.jsx)("div",{className:"mt-6 lg:max-w-sm",children:(0,x.jsx)("p",{className:"text-sm text-gray-900"})})]}),(0,x.jsxs)("div",{className:"space-y-2 text-sm",children:[(0,x.jsx)("p",{className:"text-base font-bold tracking-wide text-gray-900",children:"Contacts"}),(0,x.jsxs)("div",{className:"flex",children:[(0,x.jsx)("p",{className:"mr-1 text-gray-900",children:"Email:"}),(0,x.jsx)("a",{href:"mailto:support@mymemorystore.in","aria-label":"Our email",title:"Our email",className:"transition-colors duration-300 text-indigo-500 hover:text-deep-purple-800",children:"support@mymemorystore.in"})]})]}),(0,x.jsxs)("div",{className:"space-y-2",children:[(0,x.jsx)("span",{className:"text-base font-bold tracking-wide text-gray-900",children:"Social"}),(0,x.jsx)(H.WG,{size:"lg"})]})]}),(0,x.jsx)("div",{className:"max-w-6xl mx-auto flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row",children:(0,x.jsxs)("p",{className:"text-sm text-gray-700",children:["\xa9 Copyright ",(new Date).getFullYear()," myMemoryStore. All rights reserved."]})})]})}var V=function(e){var t=e.authURL;return(0,x.jsxs)("div",{className:"App",children:[(0,x.jsx)(f,{authURL:t,next:"/"}),(0,x.jsx)(S,{}),(0,x.jsx)(W,{}),(0,x.jsx)(D,{}),(0,x.jsx)(E,{})]})}},50537:function(e,t,s){var a=s(64836);t.Z=void 0;var r=a(s(45045)),l=s(46417),n=(0,r.default)((0,l.jsx)("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-10 1H8v-2h4V8l4 4-4 4v-3z"}),"ArrowCircleRight");t.Z=n},43638:function(e,t,s){var a=s(64836);t.Z=void 0;var r=a(s(45045)),l=s(46417),n=(0,r.default)((0,l.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.Z=n},14e3:function(e,t,s){var a=s(64836);t.Z=void 0;var r=a(s(45045)),l=s(46417),n=(0,r.default)((0,l.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.Z=n},87807:function(e,t,s){var a=s(64836);t.Z=void 0;var r=a(s(45045)),l=s(46417),n=(0,r.default)((0,l.jsx)("circle",{cx:"12",cy:"12",r:"8"}),"FiberManualRecord");t.Z=n}}]);