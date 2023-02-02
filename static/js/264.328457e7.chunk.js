"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[264],{1001:function(e,n,r){r.d(n,{Z:function(){return m}});var t=r(2169),o=r(9504),i=r(9585),a=r(890),s=r(6608),l=r(184);function c(e){var n=e.imageSrc,r=e.imageSrcSet,o=e.title,i=e.handleImageLoad;return(0,l.jsx)(t.Z,{component:"img",src:n,srcSet:r,alt:o,sx:{borderColor:"muted.main",borderRadius:4,textAlign:"center",objectFit:"cover",height:{lg:270,sm:220,xs:170}},onLoad:i})}function d(e){var n=e.title,r=e.date;return(0,l.jsx)(o.Z,{children:(0,l.jsx)(i.Z,{disableTypography:!0,title:(0,l.jsx)(a.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:n}),subheader:(0,l.jsx)(a.Z,{sx:{color:"muted.main"},children:r}),sx:{padding:0,color:"faded.black"}})})}function m(e){var n=e.title,r=e.date,t=e.thumbnailImage,o=e.thumbnailImageSrcSet,i=e.handleClick,a=e.handleImageLoad;return(0,l.jsxs)(s.Z,{handleClick:i,children:[(0,l.jsx)(c,{imageSrc:t,imageSrcSet:o,title:n,handleImageLoad:a}),(0,l.jsx)(d,{title:n,date:r})]})}d.defaultProps={title:"Memory Thumbnail Image",date:"Memory Date"},c.defaultProps={title:"Memory Thumbnail Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},m.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){}}},6608:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(7621),o=r(6647),i=r(184);function a(e){var n=e.handleClick,r=e.children;return(0,i.jsx)(o.Z,{onClick:n,children:(0,i.jsx)(t.Z,{elevation:0,sx:{bgcolor:"#fff",borderRadius:5,border:"2px solid gray",color:"black",position:"relative",height:{lg:350,sm:300,xs:250},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:r})})}},7264:function(e,n,r){r.r(n),r.d(n,{default:function(){return E}});var t=r(9439),o=r(2791),i=r(7689),a=r(1087),s=r(388),l=r(3238),c=r(3767),d=r(4697),m=r(8806),u=r(4165),h=r(5861),x=r(1889),f=r(4554),g=r(3402),p=r(1001),j=r(5193),b=r(890),Z=r(8054),v=r(6608),y=r(184);function k(){var e=(0,i.s0)(),n=(0,j.Z)((function(e){return e.breakpoints.down("md")}));return(0,y.jsx)(x.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,y.jsxs)(v.Z,{handleClick:function(){e("/memory/create")},children:[(0,y.jsx)(b.Z,{variant:n?"body1":"h5",color:"button.main",sx:{p:1,color:"secondary.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0},children:"Create a memory"}),(0,y.jsx)(Z.Z,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"creatememory")}function C(e){var n=e.handleMoreClick;return(0,y.jsx)(x.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,y.jsx)(v.Z,{handleClick:n,children:(0,y.jsx)(b.Z,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:{md:10,xs:"50%"},borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}function S(e){var n=e.memories,r=e.handleMoreClick,t=e.nextToken,o=e.handleImageLoad,a=(0,i.s0)(),s=n.sort((function(e,n){return e.memory_id>n.memory_id?1:-1}));return(0,y.jsxs)(x.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[(0,y.jsx)(k,{}),s.map((function(e){return(0,y.jsx)(x.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,y.jsx)(p.Z,{title:e.title,date:e.date,thumbnailImage:e.photo.src,thumbnailImageSrcSet:(n=e.photo,(n.images?n.images.map((function(e){var n=e.src,r=e.width;return"".concat(n," ").concat(r,"w")})):[]).join(",")),handleClick:function(){var n;a("/memory/".concat((n=e).memory_id),{state:n})},handleImageLoad:o})},e.title);var n})),t&&(0,y.jsx)(C,{handleMoreClick:r})]})}S.defaultProps={memories:[]};var I=r(5899),w=r(7846);function M(e,n,r){return P.apply(this,arguments)}function P(){return P=(0,h.Z)((0,u.Z)().mark((function e(n,r,t){var o,i,a,s=arguments;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=s.length>3&&void 0!==s[3]?s[3]:"",e.prev=1,e.next=4,I.Z.getMemories(o);case 4:if(!(i=e.sent)){e.next=13;break}if(!i.memories){e.next=13;break}return t(i.memories),e.next=10,Promise.all(I.Z.getThumbnails(i.memories));case 10:a=e.sent,n(a),r(i.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),P.apply(this,arguments)}function L(){var e=(0,o.useState)(""),n=(0,t.Z)(e,2),r=n[0],i=n[1],a=(0,o.useState)([]),s=(0,t.Z)(a,2),l=s[0],c=s[1],d=(0,o.useState)([]),m=(0,t.Z)(d,2),u=m[0],h=m[1],j=(0,o.useState)(0),b=(0,t.Z)(j,2),Z=b[0],v=b[1],C=(0,o.useState)(null),I=(0,t.Z)(C,2),P=I[0],L=I[1],R=function(){v((function(e){return e+1}))},D=function(e){return i(e)},T=function(e){h((function(n){return n.concat(e)}))},_=function(e){c((function(n){return n.concat(e)}))};return(0,o.useEffect)((function(){M(T,D,_,r)}),[]),(0,o.useEffect)((function(){L((0,y.jsx)(S,{memories:u,nextToken:r,handleMoreClick:function(){return M(T,D,_,r)},handleImageLoad:R}))}),[u,r]),u.length===l.length&&Z>=l.length?P:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(x.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[(0,y.jsx)(k,{}),l.map((function(e){return(0,y.jsx)(x.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,y.jsx)(p.Z,{title:(0,y.jsx)(g.Z,{type:"rectangular",sx:{width:"60%"}}),date:(0,y.jsx)(g.Z,{type:"rectangular",sx:{width:"50%"}}),thumbnailImage:w,handleClick:function(){}})},e)}))]}),(0,y.jsx)(f.Z,{component:"div",sx:{display:"none"},children:P})]})}function R(){return(0,y.jsx)(b.Z,{children:"Shared Memories"})}function D(e){var n=e.memoryID;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(b.Z,{children:"Review Memories"}),(0,y.jsxs)(b.Z,{children:["Start with:",n]})]})}function T(e){var n=e.mode,r=e.handleChange;return(0,y.jsx)(c.Z,{direction:"row",justifyContent:"center",sx:{my:1},children:(0,y.jsxs)(l.Z,{color:"primary",value:n,exclusive:!0,"aria-label":"Memory Modes",children:[(0,y.jsx)(s.Z,{value:"own",sx:{borderRadius:"30px"},onClick:r,children:"My Memories"}),(0,y.jsx)(s.Z,{value:"shared",onClick:r,children:"Shared With Me"}),(0,y.jsx)(s.Z,{value:"review",sx:{borderRadius:"30px"},onClick:r,children:(0,y.jsx)(d.Z,{badgeContent:99,color:"primary",children:"Review"})})]})})}function _(e){var n=e.mode,r=e.memoryID;return"own"===n?(0,y.jsx)(L,{}):"shared"===n?(0,y.jsx)(R,{}):"review"===n?(0,y.jsx)(D,{memoryID:r}):void 0}function E(e){var n=e.initMode,r=(0,i.UO)(),s=r.memoryMode,l=(0,a.lr)(),d=(0,t.Z)(l,1)[0],u=(0,o.useState)(s),h=(0,t.Z)(u,2),x=h[0],f=h[1];(0,o.useEffect)((function(){f(s||n)}),[s,n]),console.log(n,s,r,d);return(0,y.jsx)(m.Z,{children:(0,y.jsxs)(c.Z,{direction:"column",children:[(0,y.jsx)(T,{mode:x,handleChange:function(e,n){f(n)}}),(0,y.jsx)(_,{mode:x,memoryID:d.get("memID")})]})})}_.defaultProps={memoryID:null}},7846:function(e,n,r){e.exports=r.p+"static/media/image-loading.b17d2768891dfe3ceb9d.gif"}}]);
//# sourceMappingURL=264.328457e7.chunk.js.map