(this.webpackJsonpprelaunch=this.webpackJsonpprelaunch||[]).push([[4],{38:function(e,n,t){"use strict";var a=t(51),r=t(4),c=t(56),o=t(3);n.a=function(e){return function(n){return!0===(""!==c.a.getUserInfo())?Object(o.jsx)(e,Object(a.a)({},n)):Object(o.jsx)(r.a,{to:"/login",replace:!0})}}},52:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s}));t(94);var a=t(50),r=(t(70),t(93),t(0)),c=t(4),o=t(3);function i(){var e=Object(c.f)().pathname;return Object(r.useEffect)((function(){window.scroll(0,0)}),[e]),null}function s(e){var n=e.children;return Object(o.jsx)(a.a,{sx:{paddingX:2,color:"muted.main",display:"inline"},children:n})}},56:function(e,n,t){"use strict";var a=function(e){return Object.fromEntries(e.split(";").map((function(e){return e.split("=",2)})))};n.a={parseCookie:a,getUserInfo:function(){var e=a(document.cookie);return"userInfo"in e?JSON.parse(atob(e.userInfo)):""}}},80:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(57),o=t.n(c),i=t(115),s=t(35),l=t(4),u=t(113),b=t(116),f=t(50),d=(t(80),t(68)),j=t(108),h=t(109),p=Object(d.a)({palette:{app:{background:"rgb(255, 253, 246)"},primary:{main:"#0e516a",inverse:"#F1AE95",cta:Object(j.a)("#0e516a",.4)},secondary:{main:"#ffc745"},ternary:{main:"#FFA500"},muted:{main:"#6c757d"},button:{main:"#ffffff"},faded:{black:Object(j.a)("#000",.7)},social:{youtube:"#CD201F",facebook:"#1877F2",twitter:"#1DA1F2",instagram:"#E4405F",heart:"#6b0000",react:"#61dbfb"},memorycard:{background:"#dff2f3"},form:{stepper:"#f1f1f1",body:"#f9ffff",input:Object(j.a)("#fff",.5)},basepage:{background:"#9e9e9e"}},typography:{badscript:{fontFamily:"BadScript",fontDisplay:"swap"},button:{textTransform:"none",fontSize:"1rem"}}}),m=Object(h.a)(p),O=t(52),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var v=t(38),w=(t.p,t(3)),k="mymemorystore-stage",y="authbridge-stage.mymemorystore.in",S=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,506))})),U=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(6),t.e(8)]).then(t.bind(null,505))})),L=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(9)]).then(t.bind(null,513))})),F=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(11)]).then(t.bind(null,510))})),W=Object(v.a)(F),E=Object(v.a)(U),I=Object(v.a)(L),R=Object(w.jsxs)(u.a,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,sx:{position:"absolute",top:"50vh",right:"50vw",transform:"translate(50%, -50%)",backgroundColor:"form.input",boxShadow:10,padding:2},children:[Object(w.jsx)(b.a,{}),Object(w.jsx)(f.a,{variant:"h6",children:"Loading ..."})]});o.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(i.a,{theme:m,children:Object(w.jsxs)(s.a,{basename:"",children:[Object(w.jsx)(O.b,{}),Object(w.jsxs)(l.d,{children:[Object(w.jsx)(l.b,{exact:!0,path:"/",element:Object(w.jsx)(a.Suspense,{fallback:R,children:Object(w.jsx)(W,{bucket:k,authURL:y})})}),Object(w.jsx)(l.b,{path:"/login",element:Object(w.jsx)(a.Suspense,{fallback:R,children:Object(w.jsx)(S,{authURL:y})})}),Object(w.jsx)(l.b,{exact:!0,path:"/memories",element:Object(w.jsx)(a.Suspense,{fallback:R,children:Object(w.jsx)(W,{bucket:k,authURL:y})})}),Object(w.jsx)(l.b,{path:"/memory/create",element:Object(w.jsx)(a.Suspense,{fallback:R,children:Object(w.jsx)(E,{bucket:k,authURL:y})})}),Object(w.jsx)(l.b,{path:"/memory/:memoryId",element:Object(w.jsx)(a.Suspense,{fallback:R,children:Object(w.jsx)(I,{bucket:k,authURL:y})})}),Object(w.jsx)(l.b,{path:"*",element:Object(w.jsx)(a.Suspense,{fallback:Object(w.jsx)("div",{children:"Loading..."}),children:Object(w.jsx)(S,{authURL:y})})})]})]})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");g?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):x(n,e)}))}}()}},[[85,5,7]]]);
//# sourceMappingURL=main.28c0598b.chunk.js.map