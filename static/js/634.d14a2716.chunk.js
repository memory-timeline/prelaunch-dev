"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[634],{7866:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(4165),a=n(9439),i=n(5861),s=n(7689),o=n(2791),h=n(5899),u=n(8806),c=n(8003),d=n(4700),l=n(3402),g=n(5684),p=n(580),x=n(7846),w=[{key:1,src:x,width:667,height:500},{key:2,src:x,width:667,height:500},{key:3,src:x,width:375,height:500},{key:4,src:x,width:667,height:500},{key:5,src:x,width:375,height:500},{key:6,src:x,width:667,height:500},{key:7,src:x,width:667,height:500},{key:8,src:x,width:667,height:500},{key:9,src:x,width:667,height:500},{key:10,src:x,width:667,height:500},{key:11,src:x,width:375,height:500},{key:12,src:x,width:375,height:500},{key:13,src:x,width:375,height:500},{key:14,src:x,width:375,height:500},{key:15,src:x,width:667,height:500}],y=n(184);function m(){return(0,y.jsx)(p.Z,{header:(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:{lg:"20%",md:"30%",xs:"70%"}}}),subheader:(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:{lg:"15%",md:"20%",xs:"60%"}}}),photoLayout:(0,y.jsx)(g.Z,{layout:"rows",photos:w,spacing:2}),storyLayout:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"50%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"50%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"50%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"98%"}}),(0,y.jsx)(l.Z,{type:"rectangular",sx:{width:"50%"}})]})})}function f(t,e,n,r,a){return Z.apply(this,arguments)}function Z(){return(Z=(0,i.Z)((0,r.Z)().mark((function t(e,n,a,i,s){var o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.Z.viewMemory(e,n,a);case 3:if(!(o=t.sent).status){t.next=7;break}return s(o),t.abrupt("return");case 7:i(o),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function v(t){var e=t.bucket,n=t.authURL,r=(0,s.UO)().memoryId,i=(0,o.useState)(),h=(0,a.Z)(i,2),l=h[0],g=h[1],p=(0,o.useState)(null),x=(0,a.Z)(p,2),w=x[0],Z=x[1],v=(0,o.useState)(null),k=(0,a.Z)(v,2),j=k[0],b=k[1],C=(0,o.useState)(null),S=(0,a.Z)(C,2),R=S[0],F=S[1],I=function(t){return g(t)},M=(0,o.useState)(null),L=(0,a.Z)(M,2),N=L[0],A=L[1],B=function(t,e){b(t),F(e)},O=function(){Z(!1),b(null),F(null)},X=function(t){"unauthenticated"===t.status&&(B("You have been logged out. Navigating to login page",!0),Z(!0),setInterval((function(){return A("unauthenticated")}),3e3)),"forbidden"===t.status&&(B("You do not have access to this memory. Navigating to memories page",!0),Z(!0),setInterval((function(){return A("forbidden")}),3e3))};return(0,o.useEffect)((function(){f(e,n,r,I,X);var t=setInterval((function(){return f(e,n,r,I,X)}),3e5);return function(){return clearInterval(t)}}),[]),"unauthenticated"===N?(0,y.jsx)(s.Fg,{to:"/login"}):"forbidden"===N?(0,y.jsx)(s.Fg,{to:"/memories"}):l?(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(c.Z,{memTitle:l.title,memDate:l.date,memImages:l.pictures.photos,memStory:l.story,memoryID:r,bucket:e,authURL:n,preview:!1}),(0,y.jsx)(d.Z,{snackBarOpen:w,message:j,onClose:O,error:R})]}):(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(m,{}),(0,y.jsx)(d.Z,{snackBarOpen:w,message:j,onClose:O})]})}},3402:function(t,e,n){n.d(e,{Z:function(){return M}});var r=n(168),a=n(3366),i=n(7462),s=n(2791),o=n(8182),h=n(2554),u=n(4419),c=n(1572),d=n(2065),l=n(7630),g=n(3736),p=n(5878),x=n(1217);function w(t){return(0,x.Z)("MuiSkeleton",t)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var y,m,f,Z,v,k,j,b,C=n(184),S=["animation","className","component","height","style","variant","width"],R=(0,h.F4)(v||(v=y||(y=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),F=(0,h.F4)(k||(k=m||(m=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),I=(0,l.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((function(t){var e=t.theme,n=t.ownerState,r=(0,c.Wy)(e.shape.borderRadius)||"px",a=(0,c.YL)(e.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,d.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(e.vars||e).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(t){return"pulse"===t.ownerState.animation&&(0,h.iv)(j||(j=f||(f=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),R)}),(function(t){var e=t.ownerState,n=t.theme;return"wave"===e.animation&&(0,h.iv)(b||(b=Z||(Z=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),F,(n.vars||n).palette.action.hover)})),M=s.forwardRef((function(t,e){var n=(0,g.Z)({props:t,name:"MuiSkeleton"}),r=n.animation,s=void 0===r?"pulse":r,h=n.className,c=n.component,d=void 0===c?"span":c,l=n.height,p=n.style,x=n.variant,y=void 0===x?"text":x,m=n.width,f=(0,a.Z)(n,S),Z=(0,i.Z)({},n,{animation:s,component:d,variant:y,hasChildren:Boolean(f.children)}),v=function(t){var e=t.classes,n=t.variant,r=t.animation,a=t.hasChildren,i=t.width,s=t.height,o={root:["root",n,r,a&&"withChildren",a&&!i&&"fitContent",a&&!s&&"heightAuto"]};return(0,u.Z)(o,w,e)}(Z);return(0,C.jsx)(I,(0,i.Z)({as:d,ref:e,className:(0,o.Z)(v.root,h),ownerState:Z},f,{style:(0,i.Z)({width:m,height:l},p)}))}))},7846:function(t,e,n){t.exports=n.p+"static/media/image-loading.b17d2768891dfe3ceb9d.gif"}}]);
//# sourceMappingURL=634.d14a2716.chunk.js.map