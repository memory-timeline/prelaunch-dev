"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[222],{44469:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var a=r(9019),i=r.p+"static/media/collage_entry.d23c9fefdef630a98714.webp",o=r.p+"static/media/memories.0b310d345b4131d30e3f.webp",n=r.p+"static/media/gifts.5878dde818fb23e29561.jpg",s=r(73428),l=r(17551),c=r(61113),u=r(46417);function d(e){var t=e.quote,r=e.color;return(0,u.jsx)(c.Z,{sx:{p:1,position:"absolute",top:"50%",left:"50%",fontWeight:"bold",transform:"translate(-50%,-50%)",background:(0,l.Fq)("#fff",.8),textAlign:"center",color:{color:r},borderRadius:"10px"},children:t})}var g=r(54641);function f(e){var t=e.title;return(0,u.jsx)(g.Z,{title:t,titleTypographyProps:{variant:"h5"},sx:{backgroundColor:"white",color:"gray",fontWeight:"bold",textAlign:"center"}})}var h=r(16957);function m(e){var t=e.image;return(0,u.jsx)(h.Z,{component:"img",image:t,sx:{height:{xs:"25vh",md:"35vh",lg:"40vh"}}})}var p=r(58467),v=r(41434),x=r(59018),b=r(56104);function Z(e){var t=e.createPath,r=e.viewPath,a=(0,p.s0)();return(0,u.jsxs)(b.Z,{disableSpacing:!0,sx:{py:0,height:"calc(15%)"},children:[t?(0,u.jsx)(v.Z,{onClick:function(){a(t)},sx:{mx:1,border:2,borderRadius:"50%",fontSize:{xs:"2rem",xl:"2.5rem"},color:"gray","&:hover":{border:3}}}):null,(0,u.jsx)(x.Z,{onClick:function(){a(r)},sx:{m:1,border:2,borderRadius:"50%",fontSize:{xs:"2rem",xl:"2.5rem"},color:"gray",marginLeft:"auto","&:hover":{border:3}}})]})}function j(e){var t=e.quote,r=e.color,i=e.title,o=e.image,n=e.createPath,l=e.viewPath;return(0,u.jsx)(a.ZP,{item:!0,md:4,sm:6,xs:12,children:(0,u.jsxs)(s.Z,{elevation:10,sx:{m:2,borderRadius:"20px",position:"relative"},children:[(0,u.jsx)(d,{quote:t,color:r}),(0,u.jsx)(f,{title:i}),(0,u.jsx)(m,{image:o}),(0,u.jsx)(Z,{createPath:n,viewPath:l})]})})}function w(){return(0,u.jsxs)(a.ZP,{container:!0,sx:{background:'linear-gradient("whit", "gray")',height:"80vh"},justifyContent:"space-evenly",alignItems:"center",spacing:2,children:[(0,u.jsx)(j,{quote:"A good life is a collection of happy memories",color:"darkolivegreen",title:"Memory",image:o,createPath:"/memory/create",viewPath:"/memories/own"}),(0,u.jsx)(j,{quote:"A Gift's worth is the smile in return ",color:"wine",title:"Gift",image:n,viewPath:"/gifts/list"}),(0,u.jsx)(j,{quote:"A Collage is worth a thousand emotions",color:"darkslateblue",title:"Collage",image:i,createPath:"/collage/create",viewPath:"/collages"})]})}j.defaultProps={createPath:""}},59018:function(e,t,r){var a=r(64836);t.Z=void 0;var i=a(r(45045)),o=r(46417),n=(0,i.default)((0,o.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.Z=n},56104:function(e,t,r){r.d(t,{Z:function(){return p}});var a=r(63366),i=r(87462),o=r(47313),n=r(2197),s=r(8007),l=r(17592),c=r(31033),u=r(14363),d=r(1167);function g(e){return(0,d.ZP)("MuiCardActions",e)}(0,u.Z)("MuiCardActions",["root","spacing"]);var f=r(46417),h=["disableSpacing","className"],m=(0,l.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,!r.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return(0,i.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),p=o.forwardRef((function(e,t){var r=(0,c.i)({props:e,name:"MuiCardActions"}),o=r.disableSpacing,l=void 0!==o&&o,u=r.className,d=(0,a.Z)(r,h),p=(0,i.Z)({},r,{disableSpacing:l}),v=function(e){var t=e.classes,r={root:["root",!e.disableSpacing&&"spacing"]};return(0,s.Z)(r,g,t)}(p);return(0,f.jsx)(m,(0,i.Z)({className:(0,n.Z)(v.root,u),ownerState:p,ref:t},d))}))}}]);