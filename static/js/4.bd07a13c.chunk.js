"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[4],{19238:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(85239),a=n(5684),i=n(56926),s=n(37846),o=[{key:1,src:s,width:667,height:500},{key:2,src:s,width:667,height:500},{key:3,src:s,width:375,height:500},{key:4,src:s,width:667,height:500},{key:5,src:s,width:375,height:500},{key:6,src:s,width:667,height:500},{key:7,src:s,width:667,height:500},{key:8,src:s,width:667,height:500},{key:9,src:s,width:667,height:500},{key:10,src:s,width:667,height:500},{key:11,src:s,width:375,height:500},{key:12,src:s,width:375,height:500},{key:13,src:s,width:375,height:500},{key:14,src:s,width:375,height:500},{key:15,src:s,width:667,height:500}],h=n(80184);function u(){return(0,h.jsx)(i.Z,{header:(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:{lg:"20%",md:"30%",xs:"70%"}}}),subheader:(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:{lg:"15%",md:"20%",xs:"60%"}}}),photoLayout:(0,h.jsx)(a.Z,{layout:"rows",photos:o,spacing:2}),storyLayout:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"50%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"50%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"50%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"50%"}})]})})}},81597:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var r=n(74165),a=n(29439),i=n(15861),s=n(57689),o=n(72791),h=n(85899),u=n(52766),c=n(48003),d=n(44700),l=n(19238),g=n(80184);function p(t,e,n){return x.apply(this,arguments)}function x(){return(x=(0,i.Z)((0,r.Z)().mark((function t(e,n,a){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.Z.viewSharedMemory(e);case 3:if(!(i=t.sent).status){t.next=7;break}return a(i),t.abrupt("return");case 7:n(i),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function w(){var t=(0,s.UO)().memoryId,e=(0,o.useState)(),n=(0,a.Z)(e,2),r=n[0],i=n[1],h=(0,o.useState)(null),x=(0,a.Z)(h,2),w=x[0],m=x[1],y=(0,o.useState)(null),f=(0,a.Z)(y,2),Z=f[0],v=f[1],j=(0,o.useState)(null),k=(0,a.Z)(j,2),b=k[0],C=k[1],S=function(t){return i(t)},R=(0,o.useState)(null),F=(0,a.Z)(R,2),I=F[0],B=F[1],M=function(t,e){v(t),C(e)},N=function(){m(!1),v(null),C(null)},A=function(t){"unauthenticated"===t.status&&(M("You have been logged out. Navigating to login page",!0),m(!0),setInterval((function(){return B("unauthenticated")}),3e3)),"forbidden"===t.status&&(M("You do not have access to this memory. Navigating to memories page",!0),m(!0),setInterval((function(){return B("forbidden")}),3e3))};return(0,o.useEffect)((function(){p(t,S,A);var e=setInterval((function(){return p(t,S,A)}),3e5);return function(){return clearInterval(e)}}),[]),"unauthenticated"===I?(0,g.jsx)(s.Fg,{to:"/login"}):"forbidden"===I?(0,g.jsx)(s.Fg,{to:"/memories/shared"}):r?(0,g.jsxs)(u.Z,{children:[(0,g.jsx)(c.Z,{memType:"shared",memTitle:r.title,memDate:r.date,memImages:r.pictures.photos,memStory:r.story,memoryID:t,preview:!0}),(0,g.jsx)(d.Z,{snackBarOpen:w,message:Z,onClose:N,error:b})]}):(0,g.jsxs)(u.Z,{children:[(0,g.jsx)(l.Z,{}),(0,g.jsx)(d.Z,{snackBarOpen:w,message:Z,onClose:N})]})}},85239:function(t,e,n){var r,a,i,s,o,h,u,c,d=n(30168),l=n(63366),g=n(87462),p=n(72791),x=n(28182),w=n(52554),m=n(94419),y=n(61572),f=n(12065),Z=n(66934),v=n(31402),j=n(88813),k=n(80184),b=["animation","className","component","height","style","variant","width"],C=(0,w.F4)(o||(o=r||(r=(0,d.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),S=(0,w.F4)(h||(h=a||(a=(0,d.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),R=(0,Z.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((function(t){var e=t.theme,n=t.ownerState,r=(0,y.Wy)(e.shape.borderRadius)||"px",a=(0,y.YL)(e.shape.borderRadius);return(0,g.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,f.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(e.vars||e).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(t){return"pulse"===t.ownerState.animation&&(0,w.iv)(u||(u=i||(i=(0,d.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),C)}),(function(t){var e=t.ownerState,n=t.theme;return"wave"===e.animation&&(0,w.iv)(c||(c=s||(s=(0,d.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),S,(n.vars||n).palette.action.hover)})),F=p.forwardRef((function(t,e){var n=(0,v.Z)({props:t,name:"MuiSkeleton"}),r=n.animation,a=void 0===r?"pulse":r,i=n.className,s=n.component,o=void 0===s?"span":s,h=n.height,u=n.style,c=n.variant,d=void 0===c?"text":c,p=n.width,w=(0,l.Z)(n,b),y=(0,g.Z)({},n,{animation:a,component:o,variant:d,hasChildren:Boolean(w.children)}),f=function(t){var e=t.classes,n=t.variant,r=t.animation,a=t.hasChildren,i=t.width,s=t.height,o={root:["root",n,r,a&&"withChildren",a&&!i&&"fitContent",a&&!s&&"heightAuto"]};return(0,m.Z)(o,j.B,e)}(y);return(0,k.jsx)(R,(0,g.Z)({as:o,ref:e,className:(0,x.Z)(f.root,i),ownerState:y},w,{style:(0,g.Z)({width:p,height:h},u)}))}));e.Z=F},88813:function(t,e,n){n.d(e,{B:function(){return i}});var r=n(75878),a=n(21217);function i(t){return(0,a.Z)("MuiSkeleton",t)}var s=(0,r.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);e.Z=s},37846:function(t,e,n){t.exports=n.p+"static/media/image-loading.b17d2768891dfe3ceb9d.gif"}}]);
//# sourceMappingURL=4.bd07a13c.chunk.js.map