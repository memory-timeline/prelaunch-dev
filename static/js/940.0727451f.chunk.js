"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[940],{55715:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(1470),a=n(82041),i=n(47134),s=n(64586),o=[{key:1,src:s,width:667,height:500},{key:2,src:s,width:667,height:500},{key:3,src:s,width:375,height:500},{key:4,src:s,width:667,height:500},{key:5,src:s,width:375,height:500},{key:6,src:s,width:667,height:500},{key:7,src:s,width:667,height:500},{key:8,src:s,width:667,height:500},{key:9,src:s,width:667,height:500},{key:10,src:s,width:667,height:500},{key:11,src:s,width:375,height:500},{key:12,src:s,width:375,height:500},{key:13,src:s,width:375,height:500},{key:14,src:s,width:375,height:500},{key:15,src:s,width:667,height:500}],h=n(46417);function u(){return(0,h.jsx)(i.Z,{header:(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:{lg:"20%",md:"30%",xs:"70%"}}}),subheader:(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:{lg:"15%",md:"20%",xs:"60%"}}}),photoLayout:(0,h.jsx)(a.Z,{layout:"rows",photos:o,spacing:2}),storyLayout:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"50%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"50%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"50%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"98%"}}),(0,h.jsx)(r.Z,{type:"rectangular",sx:{width:"50%"}})]})})}},33805:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r=n(74165),a=n(29439),i=n(15861),s=n(58467),o=n(47313),h=n(38344),u=n(12862),c=n(98278),d=n(55715),l=n(46417);function g(t,e,n){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)((0,r.Z)().mark((function t(e,n,a){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.Z.viewSharedMemory(e);case 3:if(!(i=t.sent).status){t.next=7;break}return a(i),t.abrupt("return");case 7:n(i),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function x(){var t=(0,s.UO)().memoryId,e=(0,o.useState)(),n=(0,a.Z)(e,2),r=n[0],i=n[1],h=(0,o.useState)(null),p=(0,a.Z)(h,2),x=p[0],w=p[1],m=(0,o.useState)(null),y=(0,a.Z)(m,2),f=y[0],Z=y[1],v=(0,o.useState)(null),j=(0,a.Z)(v,2),k=j[0],b=j[1],C=function(t){return i(t)},S=(0,o.useState)(null),F=(0,a.Z)(S,2),R=F[0],I=F[1],M=function(t,e){Z(t),b(e)},N=function(){w(!1),Z(null),b(null)},A=function(t){"unauthenticated"===t.status&&(M("You have been logged out. Navigating to login page",!0),w(!0),setInterval((function(){return I("unauthenticated")}),3e3)),"forbidden"===t.status&&(M("You do not have access to this memory. Navigating to memories page",!0),w(!0),setInterval((function(){return I("forbidden")}),3e3))};return(0,o.useEffect)((function(){g(t,C,A);var e=setInterval((function(){return g(t,C,A)}),3e5);return function(){return clearInterval(e)}}),[]),"unauthenticated"===R?(0,l.jsx)(s.Fg,{to:"/login"}):"forbidden"===R?(0,l.jsx)(s.Fg,{to:"/memories/shared"}):r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Z,{memType:"shared",memTitle:r.title,memDate:r.date,memImages:r.pictures.photos,memStory:r.story,memoryID:t}),(0,l.jsx)(c.Z,{snackBarOpen:x,message:f,onClose:N,error:k})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.Z,{}),(0,l.jsx)(c.Z,{snackBarOpen:x,message:f,onClose:N})]})}},1470:function(t,e,n){n.d(e,{Z:function(){return M}});var r=n(30168),a=n(63366),i=n(87462),s=n(47313),o=n(83061),h=n(30686),u=n(21921),c=n(30570),d=n(17551),l=n(88564),g=n(25469),p=n(77430),x=n(32298);function w(t){return(0,x.Z)("MuiSkeleton",t)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var m,y,f,Z,v,j,k,b,C=n(46417),S=["animation","className","component","height","style","variant","width"],F=(0,h.F4)(v||(v=m||(m=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),R=(0,h.F4)(j||(j=y||(y=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),I=(0,l.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((function(t){var e=t.theme,n=t.ownerState,r=(0,c.Wy)(e.shape.borderRadius)||"px",a=(0,c.YL)(e.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,d.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(e.vars||e).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(t){return"pulse"===t.ownerState.animation&&(0,h.iv)(k||(k=f||(f=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),F)}),(function(t){var e=t.ownerState,n=t.theme;return"wave"===e.animation&&(0,h.iv)(b||(b=Z||(Z=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),R,(n.vars||n).palette.action.hover)})),M=s.forwardRef((function(t,e){var n=(0,g.Z)({props:t,name:"MuiSkeleton"}),r=n.animation,s=void 0===r?"pulse":r,h=n.className,c=n.component,d=void 0===c?"span":c,l=n.height,p=n.style,x=n.variant,m=void 0===x?"text":x,y=n.width,f=(0,a.Z)(n,S),Z=(0,i.Z)({},n,{animation:s,component:d,variant:m,hasChildren:Boolean(f.children)}),v=function(t){var e=t.classes,n=t.variant,r=t.animation,a=t.hasChildren,i=t.width,s=t.height,o={root:["root",n,r,a&&"withChildren",a&&!i&&"fitContent",a&&!s&&"heightAuto"]};return(0,u.Z)(o,w,e)}(Z);return(0,C.jsx)(I,(0,i.Z)({as:d,ref:e,className:(0,o.Z)(v.root,h),ownerState:Z},f,{style:(0,i.Z)({width:y,height:l},p)}))}))},64586:function(t,e,n){t.exports=n.p+"static/media/image-loading.f1b4462988545d9c460a.png"}}]);