"use strict";(self.webpackChunk_08=self.webpackChunk_08||[]).push([[250],{6739:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(7294),l=n(9669),a=n.n(l),i=n(244),o=n(3727),s=n(2780);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,l=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(){var e,t,n=u((0,r.useState)(localStorage.getItem("isBtn")||!1),2),l=n[0],c=n[1],m=u((0,r.useState)(JSON.parse(localStorage.getItem("nameObj"))),1)[0],g=u((0,r.useState)([!1,!1]),2),d=g[0],y=g[1],f=u((0,r.useState)(new Array(2)),2),p=f[0],h=f[1],x=u((0,r.useState)(new Array(2)),2),E=x[0],v=x[1],w=(0,r.useRef)(),I=(0,r.useRef)();function M(e,t){if(!(0===e.clientX||e.keyCode&&13!==e.keyCode)){var n=e.target.parentNode.childNodes[1].value;""!==n.trim()&&function(e,t){d[t]?s.ZP.warning("已经请求过数据"):a().get("https://api.github.com/users/"+e).then((function(n){var r=p.slice();r[t]="https://avatars.githubusercontent.com/u/".concat(n.data.id,"?s=200&v=4"),h(r);var l=E.slice();l[t]=e,v(l)})).then((function(){var e=d.slice();e[t]=!0,y(e)})).catch((function(e){console.log("error",e.message),s.ZP.error("用户查找失败")}))}(n,t?1:0)}}var A=(0,i.TA)({initialValues:{user1:null!==(e=null==m?void 0:m.user1)&&void 0!==e?e:"",user2:null!==(t=null==m?void 0:m.user2)&&void 0!==t?t:""},onSubmit:function(){(d[0]||d[1])&&(c(!0),localStorage.setItem("isBtn",!0))},validate:function(e){localStorage.removeItem("isBtn"),c(!1),localStorage.setItem("nameObj",JSON.stringify(e));var t={};return e.user1||(t.message="请输入用户名"),t}});return r.createElement("div",{style:{width:"80%",display:"flex",flexDirection:"column",alignItems:"center",margin:"0 auto"}},r.createElement("h2",null,"Instructions"),r.createElement("div",{style:{width:"80%",display:"flex",justifyContent:"space-between"}},r.createElement("div",null,r.createElement("h3",{style:{textAlign:"center"}},"Enter two Github users"),r.createElement("i",{style:{color:"orange",width:"200px",height:"200px",backgroundColor:"#eee",display:"flex",justifyContent:"center",alignItems:"center"},className:"fas fa-users fa-8x"},r.createElement("img",{src:"",alt:""}))),r.createElement("div",null,r.createElement("h3",{style:{textAlign:"center"}},"Battle"),r.createElement("i",{style:{color:"#666",width:"200px",height:"200px",backgroundColor:"#eee",display:"flex",justifyContent:"center",alignItems:"center"},className:"fas fa-fighter-jet fa-8x"},r.createElement("img",{src:"",alt:""}))),r.createElement("div",null,r.createElement("h3",{style:{textAlign:"center"}},"See the winner"),r.createElement("i",{style:{color:"yellow",width:"200px",height:"200px",backgroundColor:"#eee",display:"flex",justifyContent:"center",alignItems:"center"},className:"fas fa-trophy fa-8x"},r.createElement("img",{src:"",alt:""})))),r.createElement("h2",{style:{marginTop:"100px"}},"Players"),r.createElement("form",{style:{width:"100%"},onSubmit:A.handleSubmit},r.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-around"}},r.createElement("div",null,r.createElement("h3",{style:{textAlign:"center"}},"Player One"),r.createElement("input",{onKeyDown:function(e){M(e,0)},ref:w,name:"user1",type:"text",defaultValue:A.values.user1,onChange:A.handleChange}),r.createElement("button",{onClick:function(e){M(e,0)},style:{marginLeft:"20px",cursor:""===A.values.user1.trim()?"not-allowed":"pointer"},disabled:""===A.values.user1.trim()?"disabled":"",type:"submit"},"SUBMIT")),r.createElement("div",null,r.createElement("h3",{style:{textAlign:"center"}},"Player Two"),r.createElement("input",{onKeyDown:function(e){M(e,1)},ref:I,name:"user2",type:"text",defaultValue:A.values.user2,onChange:A.handleChange}),r.createElement("button",{onClick:function(e){M(e,1)},style:{marginLeft:"20px",cursor:""===A.values.user2.trim()?"not-allowed":"pointer"},disabled:""===A.values.user2.trim()?"disabled":"",type:"submit"},"SUBMIT")))),r.createElement("div",{style:{width:"74%",position:"relative"}},d.map((function(e,t){return r.createElement("div",{key:t,style:{display:d[t]?"flex":"none",margin:"20px 0",position:"absolute",right:1===t?"0":"",alignItems:"center",fontSize:"28px",color:"#1890ff"}},r.createElement("img",{style:{width:"64px",height:"64px",marginRight:"20px"},src:p[t],alt:""}),r.createElement("div",null,E[t]),r.createElement("span",{onClick:function(){var e,n;e=t,(n=d.slice())[e]=!1,y(n),c(!1),e?(A.values.user2="",I.current.value=""):(A.values.user1="",w.current.value="")},style:{marginLeft:"15px",height:"36px",width:"36px",fontSize:"48px",display:"inline-block",borderRadius:"50%",color:"#fff",cursor:"pointer"}},r.createElement("i",{style:{fontSize:"36px",position:"absolute",color:"red"},className:"fas fa-times-circle"})))}))),r.createElement("button",{style:{display:l?"block":"none",marginTop:"100px",width:"100px",height:"40px"}},r.createElement(o.rU,{style:{textDecoration:"none",color:"#333",padding:"12px 18px"},to:"/battle/result?user1=".concat(E[0],"&user2=").concat(E[1])},"BATTLE")))}n(6946)},2445:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="}}]);
//# sourceMappingURL=250.fb3a67cc85f2f1dff119.js.map