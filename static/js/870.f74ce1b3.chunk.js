"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[870],{94606:function(e,t,r){var n=r(74165),o=r(15861),a=r(17381);function i(){return(i=(0,o.Z)((0,n.Z)().mark((function e(t,r){var o,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o={body:r,method:"PUT"},e.next=4,fetch(t,o).then((function(e){return e}));case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}t.Z={newCollage:function(e,t){try{var r={collage_id:e};return a.Z.post("authbridge-stage.mymemorystore.in","/api/collage/new",r,JSON.stringify(t))}catch(n){return console.log(n),n}},upload:function(e,t){return i.apply(this,arguments)},listCollages:function(e){try{var t={next_token:e};return a.Z.get("authbridge-stage.mymemorystore.in","/api/collage/list",t)}catch(r){return console.log(r),r}},getThumbnail:function(e){try{var t={collage_id:e};return a.Z.get("authbridge-stage.mymemorystore.in","/api/collage/thumbnail",t)}catch(r){return console.log(r),r}}}},17381:function(e,t,r){var n=r(74165),o=r(15861),a=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r){var o,a,i,s,c=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>2&&void 0!==c[2]?c[2]:{},a="https://".concat(t).concat(r),i={method:"GET",credentials:"include",headers:new Headers({"content-type":"application/json"})},a+="?".concat(new URLSearchParams(o).toString()),e.next=6,fetch(a,i);case 6:if((s=e.sent).ok){e.next=13;break}if(401!==s.status){e.next=11;break}return document.cookie="userInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",e.abrupt("return",{status:"unauthenticated"});case 11:if(403!==s.status){e.next=13;break}return e.abrupt("return",{status:"forbidden"});case 13:return e.abrupt("return",s.json());case 14:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),i=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r,o,a){var i,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="https://".concat(t).concat(r),i+="?".concat(new URLSearchParams(o).toString()),s={method:"POST",credentials:"include",headers:new Headers({"content-type":"application/json"}),body:a},e.abrupt("return",fetch(i,s).then((function(e){return e.ok?e.json():{status:"error"}})));case 4:case"end":return e.stop()}}),e)})));return function(t,r,n,o){return e.apply(this,arguments)}}();t.Z={get:a,post:i}},36870:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(74165),o=r(15861),a=r(29439),i=r(72791),s=r(61889),c=r(57621),u=r(42169),l=r(66647),d=r(9585),p=r(39504),f=r(20890),m=r(94606),h=r(80184);function v(){var e=(0,i.useState)(""),t=(0,a.Z)(e,2),r=t[0],v=t[1],Z=(0,i.useState)([]),g=(0,a.Z)(Z,2),b=g[0],y=g[1];return(0,i.useEffect)((0,o.Z)((0,n.Z)().mark((function e(){var t,o,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.listCollages(r);case 2:return t=e.sent,o=t.collage_ids.map((function(e){return m.Z.getThumbnail(e)})),v(t.next_token),e.next=7,Promise.all(o);case 7:a=e.sent,y(a),console.log(t,a);case 10:case"end":return e.stop()}}),e)}))),[]),(0,h.jsx)(s.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:b.map((function(e){return(0,h.jsx)(s.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,sx:{p:1},children:(0,h.jsx)(l.Z,{children:(0,h.jsxs)(c.Z,{elevation:2,sx:{bgcolor:"#fff",borderRadius:5,color:"black",position:"relative",height:{lg:430,md:380,xs:330},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:[(0,h.jsx)(u.Z,{component:"img",src:e.thumbnail_url,alt:e.title,sx:{textAlign:"center",objectFit:"cover",height:{lg:350,md:300,xs:250}}}),(0,h.jsx)(p.Z,{children:(0,h.jsx)(d.Z,{disableTypography:!0,title:(0,h.jsx)(f.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:e.title}),sx:{padding:0,color:"faded.black"}})})]})})},e.title)}))})}},57621:function(e,t,r){r.d(t,{Z:function(){return Z}});var n=r(87462),o=r(63366),a=r(72791),i=r(28182),s=r(94419),c=r(47630),u=r(93736),l=r(35527),d=r(75878),p=r(21217);function f(e){return(0,p.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var m=r(80184),h=["className","raised"],v=(0,c.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),Z=a.forwardRef((function(e,t){var r=(0,u.Z)({props:e,name:"MuiCard"}),a=r.className,c=r.raised,l=void 0!==c&&c,d=(0,o.Z)(r,h),p=(0,n.Z)({},r,{raised:l}),Z=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},f,t)}(p);return(0,m.jsx)(v,(0,n.Z)({className:(0,i.Z)(Z.root,a),elevation:l?8:void 0,ref:t,ownerState:p},d))}))},66647:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(4942),o=r(87462),a=r(63366),i=r(72791),s=r(28182),c=r(94419),u=r(93736),l=r(47630),d=r(75878),p=r(21217);function f(e){return(0,p.Z)("MuiCardActionArea",e)}var m=(0,d.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),h=r(95080),v=r(80184),Z=["children","className","focusVisibleClassName"],g=(0,l.ZP)(h.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,r=e.theme;return t={display:"block",textAlign:"inherit",width:"100%"},(0,n.Z)(t,"&:hover .".concat(m.focusHighlight),{opacity:(r.vars||r).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,n.Z)(t,"&.".concat(m.focusVisible," .").concat(m.focusHighlight),{opacity:(r.vars||r).palette.action.focusOpacity}),t})),b=(0,l.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,t){return t.focusHighlight}})((function(e){var t=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}})),y=i.forwardRef((function(e,t){var r=(0,u.Z)({props:e,name:"MuiCardActionArea"}),n=r.children,i=r.className,l=r.focusVisibleClassName,d=(0,a.Z)(r,Z),p=r,m=function(e){var t=e.classes;return(0,c.Z)({root:["root"],focusHighlight:["focusHighlight"]},f,t)}(p);return(0,v.jsxs)(g,(0,o.Z)({className:(0,s.Z)(m.root,i),focusVisibleClassName:(0,s.Z)(l,m.focusVisible),ref:t,ownerState:p},d,{children:[n,(0,v.jsx)(b,{className:m.focusHighlight,ownerState:p})]}))}))},39504:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(87462),o=r(63366),a=r(72791),i=r(28182),s=r(94419),c=r(47630),u=r(93736),l=r(75878),d=r(21217);function p(e){return(0,d.Z)("MuiCardContent",e)}(0,l.Z)("MuiCardContent",["root"]);var f=r(80184),m=["className","component"],h=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),v=a.forwardRef((function(e,t){var r=(0,u.Z)({props:e,name:"MuiCardContent"}),a=r.className,c=r.component,l=void 0===c?"div":c,d=(0,o.Z)(r,m),v=(0,n.Z)({},r,{component:l}),Z=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},p,t)}(v);return(0,f.jsx)(h,(0,n.Z)({as:l,className:(0,i.Z)(Z.root,a),ownerState:v,ref:t},d))}))},9585:function(e,t,r){r.d(t,{Z:function(){return C}});var n=r(4942),o=r(63366),a=r(87462),i=r(72791),s=r(28182),c=r(94419),u=r(20890),l=r(93736),d=r(47630),p=r(75878),f=r(21217);function m(e){return(0,f.Z)("MuiCardHeader",e)}var h=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),v=r(80184),Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var r;return(0,a.Z)((r={},(0,n.Z)(r,"& .".concat(h.title),t.title),(0,n.Z)(r,"& .".concat(h.subheader),t.subheader),r),t.root)}})({display:"flex",alignItems:"center",padding:16}),b=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),y=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),x=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),C=i.forwardRef((function(e,t){var r=(0,l.Z)({props:e,name:"MuiCardHeader"}),n=r.action,i=r.avatar,d=r.className,p=r.component,f=void 0===p?"div":p,h=r.disableTypography,C=void 0!==h&&h,w=r.subheader,M=r.subheaderTypographyProps,k=r.title,j=r.titleTypographyProps,R=(0,o.Z)(r,Z),N=(0,a.Z)({},r,{component:f,disableTypography:C}),P=function(e){var t=e.classes;return(0,c.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},m,t)}(N),S=k;null==S||S.type===u.Z||C||(S=(0,v.jsx)(u.Z,(0,a.Z)({variant:i?"body2":"h5",className:P.title,component:"span",display:"block"},j,{children:S})));var H=w;return null==H||H.type===u.Z||C||(H=(0,v.jsx)(u.Z,(0,a.Z)({variant:i?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},M,{children:H}))),(0,v.jsxs)(g,(0,a.Z)({className:(0,s.Z)(P.root,d),as:f,ref:t,ownerState:N},R,{children:[i&&(0,v.jsx)(b,{className:P.avatar,ownerState:N,children:i}),(0,v.jsxs)(x,{className:P.content,ownerState:N,children:[S,H]}),n&&(0,v.jsx)(y,{className:P.action,ownerState:N,children:n})]}))}))},42169:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(63366),o=r(87462),a=r(72791),i=r(28182),s=r(94419),c=r(93736),u=r(47630),l=r(75878),d=r(21217);function p(e){return(0,d.Z)("MuiCardMedia",e)}(0,l.Z)("MuiCardMedia",["root","media","img"]);var f=r(80184),m=["children","className","component","image","src","style"],h=(0,u.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState,n=r.isMediaComponent,o=r.isImageComponent;return[t.root,n&&t.media,o&&t.img]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),v=["video","audio","picture","iframe","img"],Z=["picture","img"],g=a.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiCardMedia"}),a=r.children,u=r.className,l=r.component,d=void 0===l?"div":l,g=r.image,b=r.src,y=r.style,x=(0,n.Z)(r,m),C=-1!==v.indexOf(d),w=!C&&g?(0,o.Z)({backgroundImage:'url("'.concat(g,'")')},y):y,M=(0,o.Z)({},r,{component:d,isMediaComponent:C,isImageComponent:-1!==Z.indexOf(d)}),k=function(e){var t=e.classes,r={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,s.Z)(r,p,t)}(M);return(0,f.jsx)(h,(0,o.Z)({className:(0,i.Z)(k.root,u),as:d,role:!C&&g?"img":void 0,ref:t,style:w,ownerState:M,src:C?g||b:void 0},x,{children:a}))}))}}]);
//# sourceMappingURL=870.f74ce1b3.chunk.js.map