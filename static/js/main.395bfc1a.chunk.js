(this.webpackJsonpprelaunch=this.webpackJsonpprelaunch||[]).push([[4],{38:function(e,t,n){"use strict";var a=n(51),c=n(4),r=n(56),o=n(3);t.a=function(e){return function(t){return!0===(""!==r.a.getUserInfo())?Object(o.jsx)(e,Object(a.a)({},t)):Object(o.jsx)(c.a,{to:"/login",replace:!0})}}},52:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));n(94);var a=n(50),c=(n(70),n(93),n(0)),r=n(4),o=n(3);function i(){var e=Object(r.f)().pathname;return Object(c.useEffect)((function(){window.scroll(0,0)}),[e]),null}function s(e){var t=e.children;return Object(o.jsx)(a.a,{sx:{paddingX:2,color:"muted.main",display:"inline"},children:t})}},56:function(e,t,n){"use strict";var a=function(e){return Object.fromEntries(e.split(";").map((function(e){return e.split("=",2)})))};t.a={parseCookie:a,getUserInfo:function(){var e=a(document.cookie);return"userInfo"in e?JSON.parse(atob(e.userInfo)):""}}},80:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(57),o=n.n(r),i=n(115),s=n(35),b=n(4),l=n(113),u=n(116),j=n(50),f=(n(80),n(68)),d=n(108),m=n(109),h=Object(f.a)({palette:{primary:{main:"#0e516a",inverse:"#F1AE95",cta:Object(d.a)("#0e516a",.4)},secondary:{main:"#ffc745"},ternary:{main:"#FFA500"},muted:{main:"#6c757d"},button:{main:"#ffffff"},faded:{black:Object(d.a)("#000",.7)},social:{youtube:"#CD201F",facebook:"#1877F2",twitter:"#1DA1F2",instagram:"#E4405F",heart:"#6b0000",react:"#61dbfb"},memorycard:{background:"#dff2f3"},form:{stepper:"#f1f1f1",body:"#f9ffff",input:Object(d.a)("#fff",.5)},basepage:{background:"#9e9e9e"}},typography:{badscript:{fontFamily:"BadScript",fontDisplay:"swap"},button:{textTransform:"none",fontSize:"1rem"}}}),p=Object(m.a)(h),O=n(52);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=n(38),g=(n.p,n(3)),y="mymemorystore-stage",k="authbridge-stage.mymemorystore.in",v=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,502))})),w=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6),n.e(8)]).then(n.bind(null,501))})),S=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(9)]).then(n.bind(null,509))})),F=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(10)]).then(n.bind(null,506))})),L=Object(x.a)(F),U=Object(x.a)(w),I=Object(x.a)(S),R=Object(g.jsxs)(l.a,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,sx:{position:"absolute",top:"50vh",right:"50vw",transform:"translate(50%, -50%)",backgroundColor:"form.input",boxShadow:10,padding:2},children:[Object(g.jsx)(u.a,{}),Object(g.jsx)(j.a,{variant:"h6",children:"Loading ..."})]});o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(i.a,{theme:p,children:Object(g.jsxs)(s.a,{basename:"",children:[Object(g.jsx)(O.b,{}),Object(g.jsxs)(b.d,{children:[Object(g.jsx)(b.b,{exact:!0,path:"/",element:Object(g.jsx)(a.Suspense,{fallback:R,children:Object(g.jsx)(L,{bucket:y,authURL:k})})}),Object(g.jsx)(b.b,{path:"/login",element:Object(g.jsx)(a.Suspense,{fallback:R,children:Object(g.jsx)(v,{authURL:k})})}),Object(g.jsx)(b.b,{exact:!0,path:"/memories",element:Object(g.jsx)(a.Suspense,{fallback:R,children:Object(g.jsx)(L,{bucket:y,authURL:k})})}),Object(g.jsx)(b.b,{path:"/memory/create",element:Object(g.jsx)(a.Suspense,{fallback:R,children:Object(g.jsx)(U,{bucket:y,authURL:k})})}),Object(g.jsx)(b.b,{path:"/memory/:memoryId",element:Object(g.jsx)(a.Suspense,{fallback:R,children:Object(g.jsx)(I,{bucket:y,authURL:k})})}),Object(g.jsx)(b.b,{path:"*",element:Object(g.jsx)(a.Suspense,{fallback:Object(g.jsx)("div",{children:"Loading..."}),children:Object(g.jsx)(v,{authURL:k})})})]})]})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[85,5,7]]]);
//# sourceMappingURL=main.395bfc1a.chunk.js.map