(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{155:function(e,t,n){},232:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(27),r=n.n(a),i=(n(155),n(64)),l=n(112),o=function(e){if(e.ok)return e;var t=new Error(e.statusText);return t.response=e,Promise.reject(t)},j=n(237),d=n(46),u=n(244),b=n(105),h=n(238),O=n(138),x=n(38),m=n(51),f=n(240),g=n(247),p=n(245),y=n(246),S=n(239),w=n(248),v=n(48),I=n(249),k=n(250),T=n(251),E=n(252),A=n(253),C=n(85),F=n(243),N=n(241),P=n(235),D=n(236),B=n(242),L=n(143),M=function(e,t,n,c){c=c||"topRight",L.a[e]({message:t,description:n,placement:c})},R=function(e,t,n){return M("success",e,t,n)},z=function(e,t,n){return M("error",e,t,n)},H=n(7),J=C.a.Option,q=Object(H.jsx)(v.a,{style:{fontSize:24},spin:!0});var G=function(e){var t=e.showDrawer,n=e.setShowDrawer,s=e.fetchStudents,a=function(){return n(!1)},r=Object(c.useState)(!1),j=Object(i.a)(r,2),d=j[0],u=j[1];return Object(H.jsx)(F.a,{title:"Create new student",width:720,onClose:a,visible:t,bodyStyle:{paddingBottom:80},footer:Object(H.jsx)("div",{style:{textAlign:"right"},children:Object(H.jsx)(x.a,{onClick:a,style:{marginRight:8},children:"Cancel"})}),children:Object(H.jsxs)(N.a,{layout:"vertical",onFinishFailed:function(e){alert(JSON.stringify(e,null,2))},onFinish:function(e){u(!0),console.log(JSON.stringify(e,null,2)),function(e){return Object(l.a)("api/v1/students",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)}).then(o)}(e).then((function(){console.log("student added"),a(),R("Student successfully added","".concat(e.name," was added to the system")),s()})).catch((function(e){console.log(e),e.response.json().then((function(e){console.log(e),z("There was an issue","".concat(e.message," [").concat(e.status,"] [").concat(e.error,"]"),"bottomLeft")}))})).finally((function(){u(!1)}))},hideRequiredMark:!0,children:[Object(H.jsxs)(P.a,{gutter:16,children:[Object(H.jsx)(D.a,{span:12,children:Object(H.jsx)(N.a.Item,{name:"name",label:"Name",rules:[{required:!0,message:"Please enter student name"}],children:Object(H.jsx)(B.a,{placeholder:"Please enter student name"})})}),Object(H.jsx)(D.a,{span:12,children:Object(H.jsx)(N.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please enter student email"}],children:Object(H.jsx)(B.a,{placeholder:"Please enter student email"})})})]}),Object(H.jsx)(P.a,{gutter:16,children:Object(H.jsx)(D.a,{span:12,children:Object(H.jsx)(N.a.Item,{name:"gender",label:"gender",rules:[{required:!0,message:"Please select a gender"}],children:Object(H.jsxs)(C.a,{placeholder:"Please select a gender",children:[Object(H.jsx)(J,{value:"MALE",children:"MALE"}),Object(H.jsx)(J,{value:"FEMALE",children:"FEMALE"}),Object(H.jsx)(J,{value:"OTHER",children:"OTHER"})]})})})}),Object(H.jsx)(P.a,{children:Object(H.jsx)(D.a,{span:12,children:Object(H.jsx)(N.a.Item,{children:Object(H.jsx)(x.a,{type:"primary",htmlType:"submit",children:"Submit"})})})}),Object(H.jsx)(P.a,{children:d&&Object(H.jsx)(O.a,{indicator:q})})]})})},K=(n(232),j.a.Header),U=j.a.Content,Y=j.a.Footer,_=j.a.Sider,Q=d.a.SubMenu,V=function(e){var t=e.name,n=t.trim();return 0===n.length?Object(H.jsx)(u.a,{icon:Object(H.jsx)(w.a,{})}):1===n.split(" ").length?Object(H.jsx)(u.a,{children:t.charAt(0)}):Object(H.jsx)(u.a,{children:"".concat(t.charAt(0)).concat(t.charAt(t.length-1))})},W=function(e,t){(function(e){return Object(l.a)("api/v1/students/".concat(e),{method:"DELETE"}).then(o)})(e).then((function(){R("Student deleted","Student with ".concat(e," was deleted")),t()})).catch((function(e){e.response.json().then((function(e){console.log(e),z("There was an issue","".concat(e.message," [").concat(e.status,"] [").concat(e.error,"]"))}))}))},X=function(e){return[{title:"",dataIndex:"avatar",key:"avatar",render:function(e,t){return Object(H.jsx)(V,{name:t.name})}},{title:"Id",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Email",dataIndex:"email",key:"email"},{title:"Gender",dataIndex:"gender",key:"gender"},{title:"Actions",key:"actions",render:function(t,n){return Object(H.jsxs)(b.a.Group,{children:[Object(H.jsx)(h.a,{placement:"topRight",title:"Are you sure to delete ".concat(n.name),onConfirm:function(){return W(n.id,e)},okText:"Yes",cancelText:"No",children:Object(H.jsx)(b.a.Button,{value:"small",children:"Delete"})}),Object(H.jsx)(b.a.Button,{value:"small",children:"Edit"})]})}}]},Z=Object(H.jsx)(v.a,{style:{fontSize:24},spin:!0});var $=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),r=Object(i.a)(a,2),u=r[0],b=r[1],h=Object(c.useState)(!0),v=Object(i.a)(h,2),C=v[0],F=v[1],N=Object(c.useState)(!1),P=Object(i.a)(N,2),D=P[0],B=P[1],L=function(){return Object(l.a)("api/v1/students").then(o).then((function(e){return e.json()})).then((function(e){console.log(e),s(e)})).catch((function(e){console.log(e.response),e.response.json().then((function(e){console.log(e),z("There was an issue","".concat(e.message," [").concat(e.status,"] [").concat(e.error,"]"))}))})).finally((function(){return F(!1)}))};return Object(c.useEffect)((function(){console.log("component is mounted"),L()}),[]),Object(H.jsxs)(j.a,{style:{minHeight:"100vh"},children:[Object(H.jsxs)(_,{collapsible:!0,collapsed:u,onCollapse:b,children:[Object(H.jsx)("div",{className:"logo"}),Object(H.jsxs)(d.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",children:[Object(H.jsx)(d.a.Item,{icon:Object(H.jsx)(k.a,{}),children:"Option 1"},"1"),Object(H.jsx)(d.a.Item,{icon:Object(H.jsx)(T.a,{}),children:"Option 2"},"2"),Object(H.jsxs)(Q,{icon:Object(H.jsx)(w.a,{}),title:"User",children:[Object(H.jsx)(d.a.Item,{children:"Tom"},"3"),Object(H.jsx)(d.a.Item,{children:"Bill"},"4"),Object(H.jsx)(d.a.Item,{children:"Alex"},"5")]},"sub1"),Object(H.jsxs)(Q,{icon:Object(H.jsx)(E.a,{}),title:"Team",children:[Object(H.jsx)(d.a.Item,{children:"Team 1"},"6"),Object(H.jsx)(d.a.Item,{children:"Team 2"},"8")]},"sub2"),Object(H.jsx)(d.a.Item,{icon:Object(H.jsx)(A.a,{}),children:"Files"},"9")]})]}),Object(H.jsxs)(j.a,{className:"site-layout",children:[Object(H.jsx)(K,{className:"site-layout-background",style:{padding:0}}),Object(H.jsxs)(U,{style:{margin:"0 16px"},children:[Object(H.jsxs)(y.a,{style:{margin:"16px 0"},children:[Object(H.jsx)(y.a.Item,{children:"User"}),Object(H.jsx)(y.a.Item,{children:"Bill"})]}),Object(H.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:C?Object(H.jsx)(O.a,{indicator:Z}):n.length<=0?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(x.a,{onClick:function(){return B(!D)},type:"primary",shape:"round",icon:Object(H.jsx)(I.a,{}),size:"small",children:"Add New Student"}),Object(H.jsx)(G,{showDrawer:D,setShowDrawer:B,fetchStudents:L}),Object(H.jsx)(m.a,{})]}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(G,{showDrawer:D,setShowDrawer:B,fetchStudents:L}),Object(H.jsx)(f.a,{dataSource:n,columns:X(L),bordered:!0,title:function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(g.a,{children:"Number of students"}),Object(H.jsx)(p.a,{count:n.length,className:"site-badge-count-4"}),Object(H.jsx)("br",{}),Object(H.jsx)("br",{}),Object(H.jsx)(x.a,{onClick:function(){return B(!D)},type:"primary",shape:"round",icon:Object(H.jsx)(I.a,{}),size:"small",children:"Add New Student"})]})},pagination:{pageSize:50},scroll:{y:500},rowKey:function(e){return e.id}})]})})]}),Object(H.jsx)(Y,{style:{textAlign:"center"},children:"By Amigoscode"}),Object(H.jsx)(S.a,{children:Object(H.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://amigoscode.com",children:"Click here!!"})})]})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,254)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(H.jsx)(s.a.StrictMode,{children:Object(H.jsx)($,{})}),document.getElementById("root")),ee()}},[[233,1,2]]]);
//# sourceMappingURL=main.15452271.chunk.js.map