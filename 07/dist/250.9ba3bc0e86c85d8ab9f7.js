"use strict";(self.webpackChunk_08=self.webpackChunk_08||[]).push([[250],{6739:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(7294),a=n(9669),l=n.n(a),i=n(244),s=n(3727),u=n(2780);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(){var e=o((0,r.useState)(!1),2),t=e[0],n=e[1],a=o((0,r.useState)([!1,!1]),2),c=a[0],m=a[1],d=o((0,r.useState)(new Array(2)),2),y=d[0],g=d[1],f=o((0,r.useState)(new Array(2)),2),p=f[0],h=f[1],x=(0,r.useRef)(),E=(0,r.useRef)();function w(e,t){if(!(0===e.clientX||e.keyCode&&13!==e.keyCode)){var n=e.target.parentNode.childNodes[1].value;""!==n.trim()&&(c[t]||function(e,t){c[t]?u.ZP.warning("已经请求过数据"):l().get("https://api.github.com/users/"+e).then((function(n){var r=y.slice();r[t]="https://avatars.githubusercontent.com/u/".concat(n.data.id,"?s=200&v=4"),g(r);var a=p.slice();a[t]=e,h(a)})).then((function(){var e=c.slice();e[t]=!0,m(e)})).catch((function(e){console.log("error",e.message),u.ZP.error("用户查找失败")}))}(n,t?1:0))}}var M=(0,i.TA)({initialValues:{user1:"",user2:""},onSubmit:function(){(c[0]||c[1])&&n(!0)},validate:function(e){n(!1);var t={};return e.user1||(t.message="请输入用户名"),t}});return r.createElement("div",{style:{width:"80%",display:"flex",flexDirection:"column",alignItems:"center",margin:"0 auto"}},r.createElement("h2",null,"Instructions"),r.createElement("div",{style:{width:"80%",display:"flex",justifyContent:"space-between"}},r.createElement("div",null,r.createElement("h3",{style:{textAlign:"center"}},"Enter two Github users"),r.createElement("i",{style:{color:"orange",width:"200px",height:"200px",backgroundColor:"#eee",display:"flex",justifyContent:"center",alignItems:"center"},className:"fas fa-users fa-8x"},r.createElement("img",{src:"",alt:""}))),r.createElement("div",null,r.createElement("h3",{style:{textAlign:"center"}},"Battle"),r.createElement("i",{style:{color:"#666",width:"200px",height:"200px",backgroundColor:"#eee",display:"flex",justifyContent:"center",alignItems:"center"},className:"fas fa-fighter-jet fa-8x"},r.createElement("img",{src:"",alt:""}))),r.createElement("div",null,r.createElement("h3",{style:{textAlign:"center"}},"See the winner"),r.createElement("i",{style:{color:"yellow",width:"200px",height:"200px",backgroundColor:"#eee",display:"flex",justifyContent:"center",alignItems:"center"},className:"fas fa-trophy fa-8x"},r.createElement("img",{src:"",alt:""})))),r.createElement("h2",{style:{marginTop:"100px"}},"Players"),r.createElement("form",{style:{width:"100%"},onSubmit:M.handleSubmit},r.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-around"}},r.createElement("div",null,r.createElement("h3",{style:{textAlign:"center"}},"Player One"),r.createElement("input",{onKeyDown:function(e){w(e,0)},ref:x,name:"user1",type:"text",defaultValue:M.values.user1,onChange:M.handleChange}),r.createElement("button",{onClick:function(e){w(e,0)},style:{marginLeft:"20px",cursor:""===M.values.user1.trim()?"not-allowed":"pointer"},disabled:""===M.values.user1.trim()||c[0]?"disabled":"",type:"submit"},"SUBMIT")),r.createElement("div",null,r.createElement("h3",{style:{textAlign:"center"}},"Player Two"),r.createElement("input",{onKeyDown:function(e){w(e,1)},ref:E,name:"user2",type:"text",defaultValue:M.values.user2,onChange:M.handleChange}),r.createElement("button",{onClick:function(e){w(e,1)},style:{marginLeft:"20px",cursor:""===M.values.user2.trim()?"not-allowed":"pointer"},disabled:""===M.values.user2.trim()||c[1]?"disabled":"",type:"submit"},"SUBMIT")))),r.createElement("div",{style:{width:"74%",position:"relative"}},c.map((function(e,t){return r.createElement("div",{key:t,style:{display:c[t]?"flex":"none",margin:"20px 0",position:"absolute",right:1===t?"0":"",alignItems:"center",fontSize:"28px",color:"#1890ff"}},r.createElement("img",{style:{width:"64px",height:"64px",marginRight:"20px"},src:y[t],alt:""}),r.createElement("div",null,p[t]),r.createElement("span",{onClick:function(){var e,r;e=t,(r=c.slice())[e]=!1,m(r),n(!1),e?(M.values.user2="",E.current.value=""):(M.values.user1="",x.current.value="")},style:{marginLeft:"15px",height:"36px",width:"36px",fontSize:"48px",display:"inline-block",borderRadius:"50%",color:"#fff",cursor:"pointer"}},r.createElement("i",{style:{fontSize:"36px",position:"absolute",color:"red"},className:"fas fa-times-circle"})))}))),r.createElement("button",{style:{display:t?"block":"none",marginTop:"100px",width:"100px",height:"40px"}},r.createElement(s.rU,{style:{textDecoration:"none",color:"#333",padding:"12px 18px"},to:"/battle/result?user1=".concat(p[0],"&user2=").concat(p[1])},"BATTLE")))}n(6946)},2445:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="}}]);
//# sourceMappingURL=250.9ba3bc0e86c85d8ab9f7.js.map