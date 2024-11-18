"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[163],{20431:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(32195),a=t(16783),s=t(46417);function o(e){var n=e.label,t=e.value,r=e.helpText,o=e.handleChange;return(0,s.jsx)(a.Z,{fullWidth:!0,variant:"standard",required:!0,id:"outlined-required",label:n,helperText:r,sx:{my:1,minWidth:"75px"},onChange:o,value:t})}function i(e){var n=e.address,t=e.handleChange;return(0,s.jsxs)(r.Z,{direction:"column",sx:{width:"100%",px:1},children:[(0,s.jsx)(o,{label:"Receiver's Name",helpText:"e.g. Nabarun Chatterjee",value:n.name,handleChange:function(e){return t("name",e.target.value)}}),(0,s.jsx)(o,{label:"House no, Street, Locality, etc",helpText:"e.g. 123, A.B. Avenue, Serampore",value:n.content,handleChange:function(e){return t("content",e.target.value)}}),(0,s.jsx)(o,{label:"Landmark",value:n.landmark,helpText:"e.g. Behind Ganesh Temple",handleChange:function(e){return t("landmark",e.target.value)}}),(0,s.jsxs)(r.Z,{direction:"row",justifyContent:"space-between",spacing:1,sx:{my:1},children:[(0,s.jsx)(o,{label:"City",value:n.city,helpText:"e.g. Kolkata",handleChange:function(e){return t("city",e.target.value)}}),(0,s.jsx)(o,{label:"State",value:n.state,helpText:"e.g. Karnataka",handleChange:function(e){return t("state",e.target.value)}})]}),(0,s.jsxs)(r.Z,{direction:"row",justifyContent:"space-between",spacing:1,sx:{my:1},children:[(0,s.jsx)(o,{label:"Country",value:n.country,handleChange:function(e){return t("country",e.target.value)}}),(0,s.jsx)(o,{label:"Pincode",value:n.pincode,handleChange:function(e){return t("pincode",e.target.value)}}),(0,s.jsx)(o,{label:"Mobile Number",value:n.mobile_number,handleChange:function(e){return t("mobile_number",e.target.value)}})]})]})}o.defaultProps={handleChange:function(){},helpText:"",value:""},i.defaultProps={address:{id:"",default:"",name:"",content:"",landmark:"",city:"",country:"",state:"",pincode:"",mobile_number:""}}},23129:function(e,n,t){t.d(n,{p6:function(){return d},_N:function(){return c},Kn:function(){return p},dy:function(){return i}});var r=t(74165),a=t(15861),s=t(79105),o={get:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.httpClient("/api/address/get",{id:n},{method:"GET"});case 2:return t=e.sent,e.abrupt("return",t.json);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),delete:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.httpClient("/api/address/delete",{id:n},{method:"DELETE"});case 2:return t=e.sent,e.abrupt("return",t.json);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),list:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.httpClient("/api/address/list",{},{method:"GET"});case 2:return n=e.sent,e.abrupt("return",n.json);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),update:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.httpClient("/api/address/update",{id:n},{method:"PUT",body:JSON.stringify({id:n,previousData:t,data:a})});case 2:return o=e.sent,e.abrupt("return",o.json);case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),create:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.httpClient("/api/address/create",{},{method:"POST",body:JSON.stringify(n)});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()};function i(e,n){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.list();case 3:a=e.sent,console.log("resp add",a),n(a.addresses),a.addresses.forEach((function(e){o.get(e.id).then((function(e){return t(e)}))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function c(e,n){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.delete(n);case 3:a=e.sent,console.log("remove address",a),t(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(!0,!0),e.next=4,o.create(n);case 4:a=e.sent,console.log("resp create",a),200===a.status?t(!1,!0):t(!1,!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}();function p(e,n){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Getting address",n),e.next=4,o.get(n);case 4:a=e.sent,t(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},99478:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(73428),a=t(93405),s=t(19536),o=t(54641),i=t(56104),u=t(46417);function c(e){var n=e.action,t=e.component,c=e.content,l=e.componentActions;return(0,u.jsxs)(r.Z,{elevation:0,sx:{borderRadius:0,width:{sm:"100%",md:"max-content"},maxWidth:"1150px",bgcolor:"white",display:"flex",alignItems:"start",flexDirection:"column",justifyContent:"start"},children:[(0,u.jsx)(o.Z,{title:n,subheader:t,titleTypographyProps:{color:"primary.main"},subheaderTypographyProps:{fontWeight:"bold"},sx:{width:"100%","& .MuiCardHeader-action":{alignSelf:"center"}}}),(0,u.jsx)(s.Z,{sx:{borderBottomWidth:3,mb:2},flexItem:!0}),(0,u.jsx)(a.Z,{sx:{p:0},children:c}),(0,u.jsx)(i.Z,{sx:{px:2,pb:2},children:l})]})}},34573:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(29439),a=t(47313),s=t(32195),o=t(2135),i=t(58467),u=t(3404),c=t(61113),l=t(90891),d=t(21422),p=t(34953),f=t(85281),h=t(46417);function m(e){var n=e.pathnames,t=e.nameMap;return(0,h.jsxs)(u.Z,{"aria-label":"breadcrumb",sx:{py:1,pl:1},children:[(0,h.jsx)(l.Z,{underline:"hover",color:"inherit",to:"/",component:o.rU,children:"Home"}),n.map((function(e,r){var a=r===n.length-1,s="/".concat(n.slice(0,r+1).join("/"));return a?(0,h.jsx)(c.Z,{sx:{color:"primary.main"},children:s in t?t[s]:e},s):(0,h.jsx)(l.Z,{underline:"hover",color:"inherit",to:s,component:o.rU,children:t[s]},s)}))]})}function x(e){var n=e.message,t=e.messageType,s=(0,a.useState)(!0),o=(0,r.Z)(s,2),i=o[0],u=o[1];return(0,a.useEffect)((function(){return u(!0)}),[n,t]),(0,h.jsx)(d.Z,{open:i,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,h.jsx)(p.Z,{iconMapping:{info:(0,h.jsx)(f.Z,{size:"1rem"})},severity:t,variant:"filled",sx:{width:"100%"},onClose:function(){u(!1)},children:n})})}function v(e){var n=e.notify,t=e.children,r=e.routeNameMap,a=(0,i.TH)().pathname.split("/").filter((function(e){return e}));return(0,h.jsxs)(s.Z,{direction:"column",justifyContent:"start",alignItems:"center",sx:{width:"100%",minHeight:"100%",backgroundColor:"rgba(255,255,255, 0.9)"},children:[(0,h.jsx)(m,{pathnames:a,nameMap:r}),n.open?(0,h.jsx)(x,{open:n.open,message:n.message,messageType:n.messageType}):null,t]})}v.defaultProps={notify:{open:!1,message:"",messageType:"info"}}},78163:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(4942),a=t(1413),s=t(29439),o=t(47313),i=t(58467),u=t(31095),c=t(20431),l=t(34573),d=t(99478),p=t(23129),f=t(30033),h=t(46417);function m(){var e=(0,i.s0)(),n={},t=(0,o.useState)(n),m=(0,s.Z)(t,2),x=m[0],v=m[1],g=(0,o.useState)(!1),Z=(0,s.Z)(g,2),y=Z[0],b=Z[1],j=(0,o.useState)({open:!1,message:"",messageType:"info"}),C=(0,s.Z)(j,2),w=C[0],T=C[1],k=!Object.values(x).every((function(e){return null===e||""===e})),S=function(e,n){return T({open:!0,message:e,messageType:n})},A=function(n,t){console.log("handle creating",n,t),b(n),n?S("Creating Address","info"):t?(S("Address Created!","success"),setTimeout((function(){S("Navigating to Your Addresses","info")}),2e3),setTimeout((function(){e(f.j.ADDRESS_LIST_URL)}),4e3)):t||(S("Address Creation Failed!","error"),setTimeout((function(){S("Navigating to Your Addresses","info")}),2e3),setTimeout((function(){e(f.j.ADDRESS_LIST_URL)}),4e3))};return console.log("Address",x,k,w),(0,h.jsx)(l.Z,{notify:w,routeNameMap:f.$,children:(0,h.jsx)(d.Z,{action:"Add",component:"Address",content:(0,h.jsx)(c.Z,{address:x,handleChange:function(e,n){v((function(t){return(0,a.Z)((0,a.Z)({},t),{},(0,r.Z)({},e,n))}))}},x),loading:y,loadingText:"Creating",componentActions:(0,h.jsxs)(h.Fragment,{children:[k?(0,h.jsx)(u.Z,{variant:"outlined",onClick:function(){return v(n)},disabled:y,children:"Clear"}):null,(0,h.jsx)(u.Z,{variant:"contained",disabled:!k||y,onClick:function(){return(0,p.p6)(x,A)},children:y?"Creating ...":"Create"})]})})})}}}]);