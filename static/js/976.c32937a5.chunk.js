"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[976],{63976:function(e,t,r){r.r(t),r.d(t,{default:function(){return he}});var n=r(74165),s=r(15861),i=r(29439),a=r(47313),o=r(2135),c=r(58587),d=r(22095),l=r(67098);var x=r(32195),u=r(56854),h=r(1470),Z=r(73428),p=r(54641),g=r(70501),j=r(73984),f=(r(4507),r(70262)),b=r(89856),m=r(89237),v=r(15919),w=r(57983),y=r(20647),k=r(46417);function S(){var e=(0,a.useState)(-1),t=(0,i.Z)(e,2),r=t[0],n=t[1];return(0,k.jsx)(g.Z,{sx:{position:"fixed",bottom:0,left:0,right:0,m:1,borderRadius:"20px",bgcolor:"#0e0d12"},elevation:5,children:(0,k.jsxs)(b.Z,{value:r,onChange:function(e,t){return n(t)},sx:{borderRadius:"20px",bgcolor:"transparent",color:"gray","& .Mui-selected":{color:"white"}},children:[(0,k.jsx)(m.Z,{label:"Home",icon:(0,k.jsx)(v.Z,{}),sx:{color:"gray"}}),(0,k.jsx)(m.Z,{label:"Search",icon:(0,k.jsx)(w.Z,{}),sx:{color:"gray"}}),(0,k.jsx)(m.Z,{label:"Nearby",icon:(0,k.jsx)(y.Z,{}),sx:{color:"gray"}})]})})}var L=r(19860),R=r(31798),C=r(41806),P=r(7003),I=r(25486),W=r(5935),z=r(6145);function D(e){var t=e.product,r=e.height,n=e.width;return console.log("width",n),(0,k.jsxs)(u.Z,{children:[(0,k.jsx)(o.rU,{to:"/gift/".concat(t.id),children:(0,k.jsx)(C.Z,{component:"img",srcSet:R.ZP.getSrcSet(t.thumbnail),src:t.thumbnail.src,alt:t.title,loading:"lazy",sx:{borderRadius:"20px",width:n,height:r,objectFit:"cover"}})}),(0,k.jsx)(P.Z,{position:"below",title:t.name,subtitle:(0,k.jsx)(z.Z,{price:t.price,size:"list"}),sx:{fontWeight:"bold",width:n,px:1},actionIcon:(0,k.jsx)(C.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:(0,k.jsx)(I.Z,{item:t,text:(0,k.jsx)(W.Z,{})})})})]},t.thumbnail.title)}function E(e){var t=e.products,r=(0,L.Z)(),n=(0,c.Z)(),s=(0,i.Z)(n,2),o=s[0],d=s[1],l=(0,a.useState)(0),x=(0,i.Z)(l,2),u=x[0],h=x[1],Z=(0,a.useState)(0),p=(0,i.Z)(Z,2),g=p[0],f=p[1],b=function(e){return console.log("width",e,r.breakpoints),e<350?1:e>r.breakpoints.values.sm?3:2},m=function(){var e,t=b(o),r=(e=o)<350?.9*o:e<600?.45*o:.3*o;f(t),h(r)},v=b(o);return console.log("columns",v),(0,a.useEffect)((function(){return m()}),[]),(0,a.useEffect)((function(){return m()}),[o,d]),(0,k.jsx)(j.Z,{variant:"standard",cols:g,gap:8,sx:{pb:4,m:"auto",width:"fit-content",mt:2,height:"fit-content"},children:t.map((function(e){return(0,k.jsx)(D,{product:e,height:250,width:u})}))})}var F=r(8455);function H(){return(0,k.jsx)(u.Z,{children:(0,k.jsxs)(x.Z,{direction:"column",spacing:1,children:[(0,k.jsx)(h.Z,{sx:{borderRadius:"10px",p:1},variant:"rounded",height:250}),(0,k.jsxs)(x.Z,{direction:"column",children:[(0,k.jsx)(h.Z,{sx:{borderRadius:"5px",p:1},variant:"rounded",height:20,width:"70%"}),(0,k.jsx)(h.Z,{sx:{borderRadius:"5px",p:1},variant:"text",height:20,width:"40%"})]})]})})}function M(e){var t=e.products,r=e.categoryLoading,n=e.productLoading,s=e.header,a=e.categoryList,o=(0,c.Z)(),d=(0,i.Z)(o,2),l=d[0],u=d[1];console.log("mobile list gifts",t,n);var h=(0,k.jsx)(j.Z,{variant:"woven",cols:2,gap:8,sx:{pb:4},children:(0,k.jsx)(f.Z,{node:(0,k.jsx)(H,{}),times:6})}),b=(0,k.jsx)(x.Z,{direction:"row",justifyContent:"space-between",spacing:2,sx:{p:1,px:2},children:(0,k.jsx)(f.Z,{node:(0,k.jsx)(F.Z,{}),times:4})});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(Z.Z,{sx:{bgcolor:"white",borderRadius:0,minHeight:u,width:l},children:[(0,k.jsx)(p.Z,{disableTypography:!0,title:s}),(0,k.jsx)(g.Z,{elevation:3,sx:{borderRadius:0,bgcolor:"background.paper"},children:r?b:a}),n?h:(0,k.jsx)(E,{products:t})]}),(0,k.jsx)(S,{})]})}var T=r(93405),A=r(17379),G=r(1413),N=r(33947),U=r(62481),q=r(48310),B=r(61113),J=r(19536),K=r(47131),O=r(61317),Q=r(89790),V=r(54045),X=r(67216),Y=r(89840),$=r(74748),_=r(83213),ee=r(31904),te=r(26362),re=r(21023);function ne(){var e=(0,L.Z)(),t=(0,a.useState)(!1),r=(0,i.Z)(t,2),n=r[0],s=r[1];return(0,k.jsxs)(C.Z,{children:[(0,k.jsx)(U.ZP,{}),(0,k.jsxs)(x.Z,{direction:"row",alignItems:"center",children:[n?(0,k.jsx)(K.Z,{onClick:function(){return s(!1)},sx:{"&:focus":{outline:0}},children:"ltr"===e.direction?(0,k.jsx)(Q.Z,{}):(0,k.jsx)(V.Z,{})}):(0,k.jsx)(K.Z,{color:"inherit","aria-label":"open drawer",onClick:function(){return s(!0)},edge:"start",sx:(0,G.Z)({mx:1,"&:focus":{outline:0}},n&&{display:"none"}),children:(0,k.jsx)(O.Z,{})}),(0,k.jsx)(B.Z,{variant:"h6",noWrap:!0,component:"div",children:"Filters"})]}),(0,k.jsxs)(N.ZP,{sx:{mt:1,width:240,flexShrink:0,"& .MuiDrawer-paper":{position:"relative",width:240,boxSizing:"border-box",border:n?"2px solid gray":"none",borderLeft:0,borderRadius:"0 10px 10px 0"}},variant:"persistent",anchor:"left",open:n,children:[(0,k.jsx)(J.Z,{}),(0,k.jsxs)(x.Z,{direction:"row",alignItems:"center",spacing:2,sx:{p:1},children:[(0,k.jsx)(re.Z,{}),(0,k.jsx)(B.Z,{noWrap:!0,component:"div",color:"gray",sx:{fontWeight:"bold"},children:"Price Range"})]}),(0,k.jsx)(J.Z,{}),(0,k.jsx)(q.Z,{children:["Inbox","Starred","Send email","Drafts"].map((function(e,t){return(0,k.jsx)(X.ZP,{disablePadding:!0,children:(0,k.jsxs)(Y.Z,{children:[(0,k.jsx)($.Z,{children:t%2===0?(0,k.jsx)(ee.Z,{}):(0,k.jsx)(te.Z,{})}),(0,k.jsx)(_.Z,{primary:e})]})},e)}))}),(0,k.jsx)(J.Z,{}),(0,k.jsx)(q.Z,{children:["All mail","Trash","Spam"].map((function(e,t){return(0,k.jsx)(X.ZP,{disablePadding:!0,children:(0,k.jsxs)(Y.Z,{children:[(0,k.jsx)($.Z,{children:t%2===0?(0,k.jsx)(ee.Z,{}):(0,k.jsx)(te.Z,{})}),(0,k.jsx)(_.Z,{primary:e})]})},e)}))})]})]})}function se(){return(0,k.jsxs)(u.Z,{children:[(0,k.jsx)(h.Z,{variant:"rounded",width:300,height:250,sx:{borderRadius:"20px",mb:1}}),(0,k.jsx)(h.Z,{variant:"rounded",width:150,height:25,sx:{borderRadius:"10px",mb:1}}),(0,k.jsx)(h.Z,{variant:"rounded",width:50,height:20,sx:{borderRadius:"5px",mb:1}})]})}function ie(e){var t,r=e.products,n=(0,L.Z)(),s=(0,c.Z)(),a=(0,i.Z)(s,1)[0],o=(t=a,console.log("width",t,n.breakpoints),t>n.breakpoints.values.xl?5:t>n.breakpoints.values.lg?4:t>n.breakpoints.values.md?3:2);return console.log("columns",o),(0,k.jsx)(j.Z,{variant:"standard",cols:o,gap:8,sx:{pb:4},children:r.map((function(e){return(0,k.jsx)(D,{product:e,height:250,width:300},e.name)}))})}function ae(e){var t=e.products,r=e.categoryLoading,n=e.productLoading,s=e.header;console.log("Desktop list gifts",r);var i=(0,k.jsx)(j.Z,{variant:"standard",cols:4,gap:8,sx:{pb:4},children:(0,k.jsx)(f.Z,{node:(0,k.jsx)(se,{}),times:10})});return(0,k.jsx)(A.Z,{children:(0,k.jsxs)(Z.Z,{sx:{bgcolor:"white",borderRadius:0},children:[s,(0,k.jsx)(T.Z,{sx:{pl:0},children:(0,k.jsxs)(x.Z,{direction:"row",justifyContent:"space-between",spacing:2,children:[(0,k.jsx)(ne,{}),n?i:(0,k.jsx)(ie,{products:t})]})})]})})}var oe=r(27389),ce=r(77306),de=r(50613),le=r(47466),xe=r(53545),ue=r(50720);function he(){var e=(0,c.Z)(),t=(0,i.Z)(e,2),r=t[0],u=t[1],h=function(){var e=(0,a.useState)({data:[],total:0}),t=(0,i.Z)(e,2),r=t[0],o=t[1],c=(0,a.useState)(!0),d=(0,i.Z)(c,2),x=d[0],u=d[1],h=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,l.Z.getProductList(t);case 3:r=e.sent,o(r),u(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return[r,x,h]}(),Z=(0,i.Z)(h,3),p=Z[0],g=Z[1],j=Z[2],f=(0,d.Z)(),b=(0,i.Z)(f,2),m=b[0],v=b[1],w=(0,o.lr)(),y=(0,i.Z)(w,2),S=y[0],L=y[1],R=S.get("category"),C=(0,a.useState)(0),P=(0,i.Z)(C,2),I=P[0],W=P[1];console.log("category params",S,m,R,I,v,g);var z=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(m.data.length<=t)){e.next=2;break}return e.abrupt("return");case 2:console.log("Category changed to ",m.data[t]),W(t),L({category:m.data[t].name}),j(m.data[t].id);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=(0,k.jsx)(xe.Z,{categories:m.data,handleCategoryChange:z,selectedCategory:I}),E=(0,k.jsxs)(x.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:2,children:[(0,k.jsxs)(x.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,k.jsx)(de.Z,{backPath:ue.Sd}),(0,k.jsx)(ce.Z,{title:"Gifts"})]}),(0,k.jsx)(oe.Z,{})]}),F=(0,k.jsx)(le.Z,{categoryLoading:v,backPath:ue.Sd,categoryList:D});return(0,a.useEffect)((0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!v&&m.data.length>=0&&((t=m.data.findIndex((function(e){return e.name===R})))<0&&(t=0),z(t));case 1:case"end":return e.stop()}}),e)}))),[m]),r<u?(0,k.jsx)(M,{products:p.data,categoryLoading:v,productLoading:g,header:E,categoryList:D}):(0,k.jsx)(ae,{products:p.data,categoryLoading:v,productLoading:g,header:F})}}}]);