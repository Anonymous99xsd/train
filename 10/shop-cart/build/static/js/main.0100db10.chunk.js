(this["webpackJsonpshop-cart"]=this["webpackJsonpshop-cart"]||[]).push([[0],{170:function(t,e,n){"use strict";n.r(e);var c=n(28),i=n.n(c)()();i.model(n(303).default),i.router(n(302).default),i.start("#root")},215:function(t,e){},276:function(t,e,n){},277:function(t,e,n){},279:function(t,e,n){},281:function(t,e,n){},282:function(t,e,n){var c={"./01.jpg":283,"./02.jpg":284,"./03.jpg":285,"./04.jpg":286,"./05.jpg":287,"./06.jpg":288,"./07.jpg":289,"./08.jpg":290,"./09.jpg":291,"./10.jpg":292,"./11.jpg":293,"./12.jpg":294,"./13.jpg":295,"./14.jpg":296,"./15.jpg":297,"./16.jpg":298,"./17.jpg":299};function i(t){var e=a(t);return n(e)}function a(t){if(!n.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}i.keys=function(){return Object.keys(c)},i.resolve=a,t.exports=i,i.id=282},283:function(t,e,n){t.exports=n.p+"static/media/01.bfdc616c.jpg"},284:function(t,e,n){t.exports=n.p+"static/media/02.eeca77d9.jpg"},285:function(t,e,n){t.exports=n.p+"static/media/03.9cb24054.jpg"},286:function(t,e,n){t.exports=n.p+"static/media/04.96badb6f.jpg"},287:function(t,e,n){t.exports=n.p+"static/media/05.e86f32a0.jpg"},288:function(t,e,n){t.exports=n.p+"static/media/06.6487e09e.jpg"},289:function(t,e,n){t.exports=n.p+"static/media/07.7ec39881.jpg"},290:function(t,e,n){t.exports=n.p+"static/media/08.310ac226.jpg"},291:function(t,e,n){t.exports=n.p+"static/media/09.5a25035a.jpg"},292:function(t,e,n){t.exports=n.p+"static/media/10.c23ce225.jpg"},293:function(t,e,n){t.exports=n.p+"static/media/11.ebf63603.jpg"},294:function(t,e,n){t.exports=n.p+"static/media/12.1250c07d.jpg"},295:function(t,e,n){t.exports=n.p+"static/media/13.054e6832.jpg"},296:function(t,e,n){t.exports=n.p+"static/media/14.0d58ff93.jpg"},297:function(t,e,n){t.exports=n.p+"static/media/15.be081f68.jpg"},298:function(t,e,n){t.exports=n.p+"static/media/16.27b63c57.jpg"},299:function(t,e,n){t.exports=n.p+"static/media/17.96badb6f.jpg"},302:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(96),a=(n(276),n(28)),s=n(73),r=(n(277),n(7));var o=Object(a.connect)((function(t){return{sizes:t.data.sizes}}))((function(t){var e=Object(c.useState)(!0),n=Object(s.a)(e,2),i=n[0],a=n[1];return Object(r.jsxs)("div",{className:"filters",children:[Object(r.jsx)("h4",{className:"title",children:"\u5c3a\u7801\uff1a"}),t.sizes&&Object.entries(t.sizes).map((function(e,n){return Object(r.jsx)("div",{className:"filters-btn",children:Object(r.jsxs)("label",{htmlFor:e[0],children:[Object(r.jsx)("input",{type:"checkbox",value:e[0],id:e[0]}),Object(r.jsx)("span",{onClick:function(){!function(e,n){console.log(n);var c=t.dispatch,s=t.sizes,r=JSON.parse(JSON.stringify(s));if(!Object.values(r).filter((function(t){return!1===t})).length&&i){for(var o in r)o!==e&&(r[o]=!1);a(!1)}else for(var j in r)j===e&&(r[j]=!n);if(0===Object.values(r).filter((function(t){return!0===t})).length){for(var l in r)r[l]=!0;a(!0)}c({type:"data/filterSize",payload:{sizes:r}})}(e[0],e[1])},className:"checkmark",children:e[0]})]})},n)}))]})})),j=(n(279),n(307)),l=n(309),p=(n(280),n(160));n(281);var u=Object(a.connect)((function(t){return{data:t.data.data,sizes:t.data.sizes}}))((function(t){var e=Object(c.useRef)();if(Object(c.useEffect)((function(){e.current&&t.getNum(e.current.childNodes.length)}),[t]),!t.data)return null;var i=t.data,a=t.sizes,s=Object.entries(a).filter((function(t){return!0===t[1]})).map((function(t){return t[0]}));return console.log("size",s,i),Object(r.jsx)("div",{ref:e,className:"item-container",children:i.map((function(t,e){var c,a=Object(p.a)(i[e].availableSizes);try{for(a.s();!(c=a.n()).done;){var o=c.value;if(s.includes(o))return Object(r.jsxs)("div",{className:"item",children:[Object(r.jsx)("div",{className:"item-title",children:"Free shipping"}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{className:"item-img",src:n(282)("./".concat(e+1<10?"0"+(e+1):e+1,".jpg")),alt:""})}),Object(r.jsx)("p",{className:"item-name",children:i[e].title}),Object(r.jsxs)("div",{className:"item-price",children:[Object(r.jsxs)("div",{className:"val",children:[Object(r.jsx)("span",{children:"$"}),Object(r.jsx)("b",{children:i[e].price.toString().split(".")[0]}),Object(r.jsxs)("span",{style:{fontSize:"16px"},children:[".",i[e].price.toString().split(".")[1]||"00"]})]}),Object(r.jsxs)("div",{className:"installment",children:[Object(r.jsxs)("span",{style:{fontSize:"16px"},children:["or ",i[e].installments," x "]}),Object(r.jsxs)("b",{style:{fontSize:"16px"},children:["$",(i[e].price/i[e].installments).toFixed(2)]})]})]}),Object(r.jsx)("div",{className:"item-btn",children:"Add to cart"})]},i[e].id)}}catch(j){a.e(j)}finally{a.f()}return null}))})}));var d=Object(a.connect)((function(t){return{data:t.data.data,sizes:t.data.sizes}}))((function(t){var e=Object(c.useState)(0),n=Object(s.a)(e,2),i=n[0],a=n[1],o=Object(c.useState)("\u70b9\u51fb\u9009\u62e9"),p=Object(s.a)(o,2),d=p[0],f=p[1],b=Object(r.jsxs)(j.a,{onClick:function(e){return function(e){console.log(e);var n=JSON.parse(JSON.stringify(t.data));"0"===e.key?(n.sort((function(t,e){return t.id-e.id})),f("\u9ed8\u8ba4\u6392\u5e8f")):"1"===e.key?(n.sort((function(t,e){return t.price-e.price})),f("\u4ef7\u683c\u4ece\u4f4e\u5230\u9ad8")):"2"===e.key&&(n.sort((function(t,e){return e.price-t.price})),f("\u4ef7\u683c\u4ece\u9ad8\u5230\u4f4e")),(0,t.dispatch)({type:"data/sort",payload:{data:n}})}(e)},children:[Object(r.jsx)(j.a.Item,{children:"\u9ed8\u8ba4\u6392\u5e8f"},"0"),Object(r.jsx)(j.a.Divider,{}),Object(r.jsx)(j.a.Item,{children:"\u4ef7\u683c\u4ece\u4f4e\u5230\u9ad8"},"1"),Object(r.jsx)(j.a.Divider,{}),Object(r.jsx)(j.a.Item,{children:"\u4ef7\u683c\u4ece\u9ad8\u5230\u4f4e"},"2")]});return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"header",children:[Object(r.jsxs)("span",{className:"information",children:["\u5171\u67e5\u627e\u5230 ",i," \u4ef6\u5546\u54c1\u3002"]}),Object(r.jsxs)("div",{className:"sort",children:["\u6839\u636e\xa0\xa0",Object(r.jsx)(l.a,{overlay:b,trigger:["click"],children:Object(r.jsxs)("span",{className:"select ant-dropdown-link",onClick:function(t){return t.preventDefault()},children:[" ",d," "]})}),"\xa0\xa0\u6392\u5e8f"]})]}),Object(r.jsx)(u,{getNum:function(t){a(t)}})]})}));var f=Object(a.connect)()((function(t){return Object(c.useEffect)((function(){(0,t.dispatch)({type:"data/getListHttp"})}),[]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{}),Object(r.jsx)(d,{})]})}));e.default=function(t){var e=t.history;return Object(r.jsx)(i.Router,{history:e,children:Object(r.jsx)(i.Switch,{children:Object(r.jsx)(i.Route,{path:"/",exact:!0,component:f})})})}},303:function(t,e,n){"use strict";n.r(e);var c=n(44),i=n(117),a=n.n(i);function s(){return fetch("http://localhost:8001/api/products").then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){throw new Error(t)}))}e.default={namespace:"data",state:{sizes:{XS:!0,S:!0,M:!0,ML:!0,L:!0,XL:!0,XXL:!0},data:null},effects:{getListHttp:a.a.mark((function t(e,n){var c,i,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.call,i=n.put,t.next=3,c(s);case 3:return r=t.sent,t.next=6,i({type:"getData",payload:{data:r.products}});case 6:case"end":return t.stop()}}),t)}))},reducers:{getData:function(t,e){var n=e.payload;return console.log("getData",t),Object(c.a)(Object(c.a)({},t),n)},get:function(t){return console.log("get",t),Object(c.a)({},t)},filterSize:function(t,e){var n=e.payload;return console.log("filterSize",n),Object(c.a)(Object(c.a)({},t),n)},sort:function(t,e){var n=e.payload;return console.log("sort",n),Object(c.a)(Object(c.a)({},t),n)}}}}},[[170,1,2]]]);
//# sourceMappingURL=main.0100db10.chunk.js.map