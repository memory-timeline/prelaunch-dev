"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[53],{23129:function(e,r,t){t.d(r,{p6:function(){return d},_N:function(){return l},Kn:function(){return f},dy:function(){return i},y3:function(){return m}});var n=t(74165),a=t(15861),o=t(79105),s={get:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.httpClient("/api/address/get",{id:r},{method:"GET"});case 2:return t=e.sent,e.abrupt("return",t.json);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),delete:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.httpClient("/api/address/delete",{id:r},{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),list:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.httpClient("/api/address/list",{},{method:"GET"});case 2:return r=e.sent,e.abrupt("return",r.json);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),update:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t,a){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.httpClient("/api/address/update",{id:r},{method:"PUT",body:JSON.stringify({id:r,previousData:t,data:a})});case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),create:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.httpClient("/api/address/create",{},{method:"POST",body:JSON.stringify(r)});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()};function i(e,r){return c.apply(this,arguments)}function c(){return(c=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.list();case 3:a=e.sent,console.log("resp add",a),r(a.addresses),a.addresses.forEach((function(e){s.get(e.id).then((function(e){return t(e)}))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(e,r){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(r,!0,!0),e.next=4,s.delete(r);case 4:a=e.sent,console.log("remove address",a),200===a.status?t(r,!1,!0):t(r,!1,!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var d=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(!0,!0),e.next=4,s.create(r);case 4:a=e.sent,console.log("resp create",a),200===a.status?t(!1,!0):t(!1,!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r,t){return e.apply(this,arguments)}}();function f(e,r){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Getting address",r),e.next=4,s.get(r);case 4:return a=e.sent,t(a),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function m(e,r,t,n){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,n.Z)().mark((function e(r,t,a,o){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Getting address",r),e.next=4,s.update(r,t,a);case 4:200===e.sent.status?o(!1,!0):o(!1,!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},99478:function(e,r,t){t.d(r,{Z:function(){return l}});var n=t(73428),a=t(93405),o=t(19536),s=t(54641),i=t(56104),c=t(46417);function l(e){var r=e.action,t=e.component,l=e.content,u=e.componentActions;return(0,c.jsxs)(n.Z,{elevation:0,sx:{borderRadius:0,width:{sm:"100%",md:"max-content"},maxWidth:"1150px",bgcolor:"white",display:"flex",alignItems:"start",flexDirection:"column",justifyContent:"start"},children:[(0,c.jsx)(s.Z,{title:r,subheader:t,titleTypographyProps:{color:"primary.main"},subheaderTypographyProps:{fontWeight:"bold"},sx:{width:"100%","& .MuiCardHeader-action":{alignSelf:"center"}}}),(0,c.jsx)(o.Z,{sx:{borderBottomWidth:3,mb:2},flexItem:!0}),(0,c.jsx)(a.Z,{sx:{p:0},children:l}),(0,c.jsx)(i.Z,{sx:{px:2,pb:2},children:u})]})}},34573:function(e,r,t){t.d(r,{Z:function(){return v}});var n=t(29439),a=t(47313),o=t(32195),s=t(2135),i=t(58467),c=t(3404),l=t(61113),u=t(90891),d=t(21422),f=t(34953),p=t(85281),m=t(46417);function h(e){var r=e.pathnames,t=e.nameMap;return(0,m.jsxs)(c.Z,{"aria-label":"breadcrumb",sx:{py:1,pl:1},children:[(0,m.jsx)(u.Z,{underline:"hover",color:"inherit",to:"/",component:s.rU,children:"Home"}),r.map((function(e,n){var a=n===r.length-1,o="/".concat(r.slice(0,n+1).join("/"));return a?(0,m.jsx)(l.Z,{sx:{color:"primary.main"},children:o in t?t[o]:e},o):(0,m.jsx)(u.Z,{underline:"hover",color:"inherit",to:o,component:s.rU,children:t[o]},o)}))]})}function x(e){var r=e.message,t=e.messageType,o=(0,a.useState)(!0),s=(0,n.Z)(o,2),i=s[0],c=s[1];return(0,a.useEffect)((function(){return c(!0)}),[r,t]),(0,m.jsx)(d.Z,{open:i,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:5e3,onClose:function(){return c(!1)},children:(0,m.jsx)(f.Z,{iconMapping:{info:(0,m.jsx)(p.Z,{size:"1rem"})},severity:t,variant:"filled",sx:{width:"100%"},onClose:function(){c(!1)},children:r})})}function v(e){var r=e.notify,t=e.children,n=e.routeNameMap,a=(0,i.TH)().pathname.split("/").filter((function(e){return e}));return(0,m.jsxs)(o.Z,{direction:"column",justifyContent:"start",alignItems:"center",sx:{width:"100%",minHeight:"100%",backgroundColor:"rgba(255,255,255, 0.9)"},children:[(0,m.jsx)(h,{pathnames:a,nameMap:n}),r.open?(0,m.jsx)(x,{open:r.open,message:r.message,messageType:r.messageType}):null,t]})}v.defaultProps={notify:{open:!1,message:"",messageType:"info"}}},47344:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(29439),a=t(47313);function o(){var e=(0,a.useState)({open:!1,message:"",messageType:"info"}),r=(0,n.Z)(e,2),t=r[0],o=r[1];return[t,function(e,r){return o({open:!0,message:e,messageType:r})}]}},65053:function(e,r,t){t.r(r),t.d(r,{default:function(){return T}});var n=t(93433),a=t(29439),o=t(47313),s=t(58467),i=t(9019),c=t(73428),l=t(93405),u=t(32195),d=t(54641),f=t(19536),p=t(31095),m=t(66212),h=t(61113),x=t(23306),v=t(46417);function Z(e){var r=e.value,t=e.label;return r&&(0,v.jsxs)(u.Z,{direction:"column",justifyContent:"center",sx:{my:.5},children:[(0,v.jsx)(x.Z,{sx:{fontSize:"0.8rem",fontWeight:"bold"},children:t}),(0,v.jsx)(h.Z,{sx:{fontSize:"0.9rem"},children:r})]})}function b(e){var r=e.address,t=e.handleEdit,n=e.handleRemove,a=e.deleting;return(0,v.jsxs)(c.Z,{sx:{width:"350px",position:"relative",m:1},children:[(0,v.jsx)(d.Z,{title:r.default?(0,v.jsx)(m.Z,{label:"Default",color:"primary",variant:"outlined",sx:{fontWeight:"bold",fontColor:"gray"}}):"",action:(0,v.jsxs)(u.Z,{direction:"row",sx:{mr:1},children:[(0,v.jsx)(p.Z,{sx:{fontSize:"1rem"},disabled:a,onClick:function(){return t(r.id)},children:"Edit"}),(0,v.jsx)(f.Z,{orientation:"vertical",flexItem:!0}),(0,v.jsx)(p.Z,{sx:{fontSize:"1rem"},disabled:a,onClick:function(){return n(r.id)},children:"Remove"}),r.default?null:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.Z,{orientation:"vertical",flexItem:!0}),(0,v.jsx)(p.Z,{disabled:a,sx:{fontSize:"1rem"},children:"Set as Default"})]})]}),sx:{m:0,p:0,pl:2,py:1}}),(0,v.jsx)(f.Z,{sx:{borderBottomWidth:2}}),r&&(0,v.jsxs)(l.Z,{children:[(0,v.jsx)(Z,{label:"Receiver's Name",helpText:"e.g. Nabarun Chatterjee",value:r.name}),(0,v.jsx)(Z,{label:"House no, Street, Locality, etc",helpText:"e.g. 123, A.B. Avenue, Serampore",value:r.content}),(0,v.jsx)(Z,{label:"Landmark",value:r.landmark,helpText:"e.g. Behind Ganesh Temple"}),(0,v.jsxs)(u.Z,{direction:"row",justifyContent:"space-between",spacing:2,sx:{my:.5},children:[(0,v.jsx)(Z,{label:"City",value:r.city,helperText:"e.g. Kolkata"}),(0,v.jsx)(Z,{label:"State",value:r.state,helperText:"e.g. Karnataka"}),(0,v.jsx)(Z,{label:"Country",value:r.country}),(0,v.jsx)(Z,{label:"Pincode",value:r.pincode})]}),(0,v.jsx)(u.Z,{direction:"row",justifyContent:"flex-start",spacing:2,sx:{my:.5},children:(0,v.jsx)(Z,{label:"Mobile Number",value:r.mobile_number})})]})]})}Z.defaultProps={value:""};var g=t(5211);function y(e){var r=e.handleClick;return(0,v.jsx)(c.Z,{elevation:2,sx:{width:"350px",minHeight:"300px",border:"2px solid gray",backgroundColor:"transparent",cursor:"pointer",m:1},onClick:r,children:(0,v.jsxs)(u.Z,{direction:"column",justifyContent:"center",alignItems:"center",sx:{width:"100%",height:"100%"},children:[(0,v.jsx)(g.Z,{sx:{fontSize:"3.5rem",color:"gray"}}),(0,v.jsx)(h.Z,{sx:{fontSize:"2.5rem"},children:" Add Address"})]})})}var j=t(34573),k=t(99478),w=t(47344),C=t(23129),S=t(30033),z=function(e){var r=e.addrs,t=e.handleEdit,n=e.handleRemove,a=e.deleting;return r.map((function(e){return(0,v.jsx)(b,{address:e,handleEdit:t,handleRemove:n,deleting:a},e.id)}))};function T(){var e=(0,s.s0)(),r=(0,o.useState)([]),t=(0,a.Z)(r,2),c=t[0],l=t[1],u=(0,o.useState)([]),d=(0,a.Z)(u,2),f=d[0],p=d[1],m=(0,o.useState)(!1),h=(0,a.Z)(m,2),x=h[0],Z=h[1],b=(0,w.Z)(),g=(0,a.Z)(b,2),T=g[0],A=g[1],E=function(e){return l(e)},M=function(e){console.log("updating address",e.id),p((function(r){return[].concat((0,n.Z)(r),[e])}))};(0,o.useEffect)((function(){return(0,C.dy)(E,M)}),[]),console.log("addresses",f,x);var R=function(e,r,t){console.log("remove address status",e,r,t),Z(r),r?A("Deleting Address","info"):t?(A("Address Deleted!","success"),p(f.filter((function(r){return r.id!==e}))),l(c.filter((function(r){return r.id!==e})))):A("Address Deletion Failed!","error")},N=c.length&&c.length===f.length?f:c;return(0,v.jsx)(j.Z,{notify:T,routeNameMap:S.$,children:(0,v.jsx)(k.Z,{action:"Your",component:"Addressess",content:(0,v.jsxs)(i.ZP,{container:!0,sx:{maxWidth:"1150px",backgroundColor:"white",m:0,justifyContent:{xs:"center",md:"space-between"}},children:[(0,v.jsx)(y,{handleClick:function(){return e(S.j.ADDRESS_CREATE_URL)}},"add-address"),(0,v.jsx)(z,{addrs:N,handleEdit:function(r){return e("/address/".concat(r),{state:{address:f.find((function(e){return e.id===r}))}})},handleRemove:function(e){return(0,C._N)(e,R)},deleting:x},N)]}),componentActions:(0,v.jsx)("div",{})})})}},5211:function(e,r,t){var n=t(64836);r.Z=void 0;var a=n(t(45045)),o=t(46417),s=(0,a.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");r.Z=s},91397:function(e,r,t){var n=t(47313).createContext(void 0);r.Z=n},80300:function(e,r,t){function n(e){var r=e.props,t=e.states,n=e.muiFormControl;return t.reduce((function(e,t){return e[t]=r[t],n&&"undefined"===typeof r[t]&&(e[t]=n[t]),e}),{})}t.d(r,{Z:function(){return n}})},99008:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(47313),a=t(91397);function o(){return n.useContext(a.Z)}},23306:function(e,r,t){t.d(r,{Z:function(){return z}});var n=t(4942),a=t(63366),o=t(87462),s=t(47313),i=t(8007),c=t(2197),l=t(80300),u=t(99008),d=t(91615),f=t(31033),p=t(17592),m=t(14363),h=t(1167);function x(e){return(0,h.ZP)("MuiFormLabel",e)}var v=(0,m.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),Z=t(46417),b=["children","className","color","component","disabled","error","filled","focused","required"],g=(0,p.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return(0,o.Z)({},r.root,"secondary"===t.color&&r.colorSecondary,t.filled&&r.filled)}})((function(e){var r,t=e.theme,a=e.ownerState;return(0,o.Z)({color:(t.vars||t).palette.text.secondary},t.typography.body1,(r={lineHeight:"1.4375em",padding:0,position:"relative"},(0,n.Z)(r,"&.".concat(v.focused),{color:(t.vars||t).palette[a.color].main}),(0,n.Z)(r,"&.".concat(v.disabled),{color:(t.vars||t).palette.text.disabled}),(0,n.Z)(r,"&.".concat(v.error),{color:(t.vars||t).palette.error.main}),r))})),y=(0,p.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:function(e,r){return r.asterisk}})((function(e){var r=e.theme;return(0,n.Z)({},"&.".concat(v.error),{color:(r.vars||r).palette.error.main})})),j=s.forwardRef((function(e,r){var t=(0,f.i)({props:e,name:"MuiFormLabel"}),n=t.children,s=t.className,p=t.component,m=void 0===p?"label":p,h=(0,a.Z)(t,b),v=(0,u.Z)(),j=(0,l.Z)({props:t,muiFormControl:v,states:["color","required","focused","disabled","error","filled"]}),k=(0,o.Z)({},t,{color:j.color||"primary",component:m,disabled:j.disabled,error:j.error,filled:j.filled,focused:j.focused,required:j.required}),w=function(e){var r=e.classes,t=e.color,n=e.focused,a=e.disabled,o=e.error,s=e.filled,c=e.required,l={root:["root","color".concat((0,d.Z)(t)),a&&"disabled",o&&"error",s&&"filled",n&&"focused",c&&"required"],asterisk:["asterisk",o&&"error"]};return(0,i.Z)(l,x,r)}(k);return(0,Z.jsxs)(g,(0,o.Z)({as:m,ownerState:k,className:(0,c.Z)(w.root,s),ref:r},h,{children:[n,j.required&&(0,Z.jsxs)(y,{ownerState:k,"aria-hidden":!0,className:w.asterisk,children:["\u2009","*"]})]}))})),k=t(13727);function w(e){return(0,h.ZP)("MuiInputLabel",e)}(0,m.Z)("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);var C=["disableAnimation","margin","shrink","variant","className"],S=(0,p.ZP)(j,{shouldForwardProp:function(e){return(0,k.Z)(e)||"classes"===e},name:"MuiInputLabel",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[(0,n.Z)({},"& .".concat(v.asterisk),r.asterisk),r.root,t.formControl&&r.formControl,"small"===t.size&&r.sizeSmall,t.shrink&&r.shrink,!t.disableAnimation&&r.animated,t.focused&&r.focused,r[t.variant]]}})((function(e){var r=e.theme,t=e.ownerState;return(0,o.Z)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===t.size&&{transform:"translate(0, 17px) scale(1)"},t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!t.disableAnimation&&{transition:r.transitions.create(["color","transform","max-width"],{duration:r.transitions.duration.shorter,easing:r.transitions.easing.easeOut})},"filled"===t.variant&&(0,o.Z)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===t.size&&{transform:"translate(12px, 13px) scale(1)"},t.shrink&&(0,o.Z)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===t.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===t.variant&&(0,o.Z)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===t.size&&{transform:"translate(14px, 9px) scale(1)"},t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))})),z=s.forwardRef((function(e,r){var t=(0,f.i)({name:"MuiInputLabel",props:e}),n=t.disableAnimation,s=void 0!==n&&n,p=t.shrink,m=t.className,h=(0,a.Z)(t,C),x=(0,u.Z)(),v=p;"undefined"===typeof v&&x&&(v=x.filled||x.focused||x.adornedStart);var b=(0,l.Z)({props:t,muiFormControl:x,states:["size","variant","required","focused"]}),g=(0,o.Z)({},t,{disableAnimation:s,formControl:x,shrink:v,size:b.size,variant:b.variant,required:b.required,focused:b.focused}),y=function(e){var r=e.classes,t=e.formControl,n=e.size,a=e.shrink,s=e.disableAnimation,c=e.variant,l=e.required,u={root:["root",t&&"formControl",!s&&"animated",a&&"shrink",n&&"normal"!==n&&"size".concat((0,d.Z)(n)),c],asterisk:[l&&"asterisk"]},f=(0,i.Z)(u,w,r);return(0,o.Z)({},r,f)}(g);return(0,Z.jsx)(S,(0,o.Z)({"data-shrink":v,ownerState:g,ref:r,className:(0,c.Z)(y.root,m)},h,{classes:y}))}))}}]);