(this["webpackJsonpshop-cart"]=this["webpackJsonpshop-cart"]||[]).push([[0],{222:function(t,e,c){var a={"./0.jpg":395,"./1.jpg":396,"./10.jpg":397,"./11.jpg":398,"./12.jpg":399,"./13.jpg":400,"./14.jpg":401,"./15.jpg":402,"./16.jpg":403,"./17.jpg":404,"./2.jpg":405,"./3.jpg":406,"./4.jpg":407,"./5.jpg":408,"./6.jpg":409,"./7.jpg":410,"./8.jpg":411,"./9.jpg":412};function n(t){var e=s(t);return c(e)}function s(t){if(!c.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=s,t.exports=n,n.id=222},237:function(t,e,c){"use strict";c.r(e);var a=c(35),n=c.n(a)()();n.model(c(419).default),n.model(c(389).default),n.router(c(418).default),n.start("#root")},298:function(t,e){},389:function(t,e,c){"use strict";c.r(e);var a=c(22),n=c(232),s=c(55);e.default={namespace:"cart",state:{shopCart:[],isEject:!1},reducers:{addToCart:function(t,e){var c,i=e.payload,r=t.shopCart,o=!1,l=Object(s.a)(r);try{for(l.s();!(c=l.n()).done;){var d=c.value;if(d.id===i.id){d.quantity++,o=!0;break}}}catch(j){l.e(j)}finally{l.f()}return o||(i.quantity=1,r.push(i)),t.shopCart=Object(n.a)(r),t.isEject||(t.isEject=!0),Object(a.a)({},t)},openShop:function(t){return t.isEject||(t.isEject=!0),Object(a.a)({},t)},closeShop:function(t){return t.isEject&&(t.isEject=!1),Object(a.a)({},t)},deleteCart:function(t,e){var c=e.payload,n=t.shopCart;for(var s in n)if(n[s].id===c){n.splice(s,1);break}return 0===n.length&&(t.isEject=!1),t.shopCart=n.slice(),Object(a.a)({},t)},addOneGood:function(t,e){var c,n=e.payload,i=t.shopCart,r=Object(s.a)(i);try{for(r.s();!(c=r.n()).done;){var o=c.value;if(o.id===n){o.quantity++;break}}}catch(l){r.e(l)}finally{r.f()}return t.shopCart=i.slice(),Object(a.a)({},t)},subtrackGood:function(t,e){var c,n=e.payload,i=t.shopCart,r=Object(s.a)(i);try{for(r.s();!(c=r.n()).done;){var o=c.value;if(o.id===n){o.quantity--;break}}}catch(l){r.e(l)}finally{r.f()}return t.shopCart=i.slice(),Object(a.a)({},t)},clearShopCart:function(t){return t.shopCart=[],t.isEject=!1,Object(a.a)({},t)},getShopCart:function(t){return t.shopCart=JSON.parse(localStorage.getItem("shopCart")),Object(a.a)({},t)}}}},390:function(t,e,c){},391:function(t,e,c){},393:function(t,e,c){},394:function(t,e,c){},395:function(t,e,c){t.exports=c.p+"static/media/0.96badb6f.jpg"},396:function(t,e,c){t.exports=c.p+"static/media/1.bfdc616c.jpg"},397:function(t,e,c){t.exports=c.p+"static/media/10.c23ce225.jpg"},398:function(t,e,c){t.exports=c.p+"static/media/11.ebf63603.jpg"},399:function(t,e,c){t.exports=c.p+"static/media/12.1250c07d.jpg"},400:function(t,e,c){t.exports=c.p+"static/media/13.054e6832.jpg"},401:function(t,e,c){t.exports=c.p+"static/media/14.0d58ff93.jpg"},402:function(t,e,c){t.exports=c.p+"static/media/15.be081f68.jpg"},403:function(t,e,c){t.exports=c.p+"static/media/16.27b63c57.jpg"},404:function(t,e,c){t.exports=c.p+"static/media/17.96badb6f.jpg"},405:function(t,e,c){t.exports=c.p+"static/media/2.eeca77d9.jpg"},406:function(t,e,c){t.exports=c.p+"static/media/3.9cb24054.jpg"},407:function(t,e,c){t.exports=c.p+"static/media/4.96badb6f.jpg"},408:function(t,e,c){t.exports=c.p+"static/media/5.e86f32a0.jpg"},409:function(t,e,c){t.exports=c.p+"static/media/6.6487e09e.jpg"},410:function(t,e,c){t.exports=c.p+"static/media/7.7ec39881.jpg"},411:function(t,e,c){t.exports=c.p+"static/media/8.310ac226.jpg"},412:function(t,e,c){t.exports=c.p+"static/media/9.5a25035a.jpg"},413:function(t,e,c){},415:function(t,e,c){},418:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c(143),s=(c(390),c(35)),i=c(40),r=(c(391),c(6));var o=Object(s.connect)((function(t){return{sizes:t.data.sizes}}))((function(t){var e=Object(a.useState)(!0),c=Object(i.a)(e,2),n=c[0],s=c[1];return Object(r.jsxs)("div",{className:"filters",children:[Object(r.jsx)("h4",{className:"title",children:"\u5c3a\u7801\uff1a"}),t.sizes&&Object.entries(t.sizes).map((function(e,c){return Object(r.jsx)("div",{className:"filters-btn",children:Object(r.jsxs)("label",{htmlFor:e[0],children:[Object(r.jsx)("input",{type:"checkbox",value:e[0],id:e[0]}),Object(r.jsx)("span",{onClick:function(){!function(e,c){var a=t.dispatch,i=t.sizes,r=JSON.parse(JSON.stringify(i));if(!Object.values(r).filter((function(t){return!1===t})).length&&n){for(var o in r)o!==e&&(r[o]=!1);s(!1)}else for(var l in r)l===e&&(r[l]=!c);if(0===Object.values(r).filter((function(t){return!0===t})).length){for(var d in r)r[d]=!0;s(!0)}a({type:"data/filterSize",payload:{sizes:r}})}(e[0],e[1])},className:"checkmark",children:e[0]})]})},c)}))]})})),l=(c(393),c(423)),d=c(424),j=(c(221),c(55));c(394);var u=Object(s.connect)((function(t){return{data:t.data.data,sizes:t.data.sizes}}))((function(t){var e=Object(a.useRef)(),n=t.dispatch;if(Object(a.useEffect)((function(){e.current&&t.getNum(e.current.childNodes.length)}),[t]),!t.data)return null;var s=t.data,i=t.sizes,o=Object.entries(i).filter((function(t){return!0===t[1]})).map((function(t){return t[0]}));return Object(r.jsx)("div",{ref:e,className:"item-container",children:s.map((function(t,e){var a,i=Object(j.a)(s[e].availableSizes);try{for(i.s();!(a=i.n()).done;){var l=a.value;if(o.includes(l))return Object(r.jsxs)("div",{className:"item",children:[Object(r.jsx)("div",{className:"item-title",children:"\u514d\u8fd0\u8d39"}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{className:"item-img",src:c(222)("./".concat(s[e].id,".jpg")),alt:""})}),Object(r.jsx)("p",{className:"item-name",children:s[e].title}),Object(r.jsxs)("p",{style:{marginBottom:"0"},children:["\u5c3a\u7801\uff1a",s[e].availableSizes.join(" , ")]}),Object(r.jsxs)("div",{className:"item-price",children:[Object(r.jsxs)("div",{className:"val",children:[Object(r.jsx)("span",{children:"$"}),Object(r.jsx)("b",{children:s[e].price.toString().split(".")[0]}),Object(r.jsxs)("span",{style:{fontSize:"16px"},children:[".",((s[e].price.toString().split(".")[1]||"")+"00").substr(0,2)]})]}),0!==s[e].installments&&Object(r.jsxs)("div",{className:"installment",children:[Object(r.jsxs)("span",{style:{fontSize:"16px"},children:["\u6216 ",s[e].installments," x "]}),Object(r.jsxs)("b",{style:{fontSize:"16px"},children:["$",(s[e].price/s[e].installments).toFixed(2)]})]})]}),Object(r.jsx)("div",{onClick:function(){return t=s[e],void n({type:"cart/addToCart",payload:t});var t},className:"item-btn",children:"\u6dfb\u52a0\u81f3\u8d2d\u7269\u8f66"})]},s[e].id)}}catch(d){i.e(d)}finally{i.f()}return null}))})}));c(413);function p(t){var e=t.isSpin;return Object(r.jsx)("div",{style:{display:e?"flex":"none"},className:"spinContainer",children:Object(r.jsxs)("div",{className:"sk-folding-cube",children:[Object(r.jsx)("div",{className:"sk-cube1 sk-cube"}),Object(r.jsx)("div",{className:"sk-cube2 sk-cube"}),Object(r.jsx)("div",{className:"sk-cube4 sk-cube"}),Object(r.jsx)("div",{className:"sk-cube3 sk-cube"})]})})}var f=Object(s.connect)((function(t){return{data:t.data.data,sizes:t.data.sizes,error:t.data.error,isSpin:t.data.isSpin}}))((function(t){var e=Object(a.useState)(0),c=Object(i.a)(e,2),n=c[0],s=c[1],o=Object(a.useState)("\u70b9\u51fb\u9009\u62e9"),j=Object(i.a)(o,2),f=j[0],b=j[1],O=Object(r.jsxs)(l.a,{onClick:function(e){return function(e){console.log(e);var c=JSON.parse(JSON.stringify(t.data));"0"===e.key?(c.sort((function(t,e){return t.id-e.id})),b("\u9ed8\u8ba4\u6392\u5e8f")):"1"===e.key?(c.sort((function(t,e){return t.price-e.price})),b("\u4ef7\u683c\u4ece\u4f4e\u5230\u9ad8")):"2"===e.key&&(c.sort((function(t,e){return e.price-t.price})),b("\u4ef7\u683c\u4ece\u9ad8\u5230\u4f4e")),(0,t.dispatch)({type:"data/sort",payload:{data:c}})}(e)},children:[Object(r.jsx)(l.a.Item,{children:"\u9ed8\u8ba4\u6392\u5e8f"},"0"),Object(r.jsx)(l.a.Divider,{}),Object(r.jsx)(l.a.Item,{children:"\u4ef7\u683c\u4ece\u4f4e\u5230\u9ad8"},"1"),Object(r.jsx)(l.a.Divider,{}),Object(r.jsx)(l.a.Item,{children:"\u4ef7\u683c\u4ece\u9ad8\u5230\u4f4e"},"2")]});return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"header",children:[Object(r.jsxs)("span",{className:"information",children:["\u5171\u67e5\u627e\u5230 ",n," \u4ef6\u5546\u54c1\u3002"]}),Object(r.jsxs)("div",{className:"sort",children:["\u6839\u636e\xa0\xa0",Object(r.jsx)(d.a,{overlay:O,trigger:["click"],children:Object(r.jsxs)("span",{className:"select ant-dropdown-link",onClick:function(t){return t.preventDefault()},children:[" ",f," "]})}),"\xa0\xa0\u6392\u5e8f"]})]}),Object(r.jsx)(u,{getNum:function(t){s(t)}}),Object(r.jsxs)("h1",{style:{display:null===t.error?"none":"block",color:"red"},children:["\u6570\u636e\u83b7\u53d6\u5931\u8d25: ",t.error&&t.error.toString()]}),Object(r.jsx)(p,{isSpin:t.isSpin})]})})),b=(c(415),c(236)),O=c(231),h=c(422);var x=Object(s.connect)((function(t){return console.log("float",t),{shopCart:t.cart.shopCart,isEject:t.cart.isEject}}))((function(t){var e=t.dispatch,n=t.isEject,s=t.shopCart,o=Object(a.useState)(0),l=Object(i.a)(o,2),d=l[0],u=l[1],p=Object(a.useState)(0),f=Object(i.a)(p,2),x=f[0],m=f[1],v=Object(a.useState)(!1),g=Object(i.a)(v,2),y=g[0],N=g[1],S=Object(a.useRef)(),k=Object(a.useRef)(),C=Object(a.useRef)(),E=Object(a.useRef)(),z=Object(a.useRef)(),D=function(){e({type:"cart/openShop"}),S.current.classList.add("float-open"),k.current.style.display="none",E.current.style.display="inline-block"},q=function(){e({type:"cart/closeShop"}),S.current.classList.remove("float-open"),E.current.style.display="none",k.current.style.display="inline-block"};Object(a.useEffect)((function(){var t=document.querySelectorAll(".float-item-del");if(t.length){var e,c=Object(j.a)(t);try{for(c.s();!(e=c.n()).done;){var a=e.value;a.addEventListener("mouseenter",(function(t){t.target.parentNode.style.backgroundColor="#0c0b10",t.target.parentNode.childNodes[3].childNodes[0].style.textDecoration="line-through",t.target.parentNode.childNodes[3].childNodes[1].style.textDecoration="line-through",t.target.parentNode.childNodes[4].childNodes[0].style.textDecoration="line-through",t.target.style.color="#fff"})),a.addEventListener("mouseleave",(function(t){t.target.parentNode.style.backgroundColor="#1b1a20",t.target.parentNode.childNodes[3].childNodes[0].style.textDecoration="none",t.target.parentNode.childNodes[3].childNodes[1].style.textDecoration="none",t.target.parentNode.childNodes[4].childNodes[0].style.textDecoration="none",t.target.style.color="#000"}))}}catch(n){c.e(n)}finally{c.f()}}}),[t]),Object(a.useEffect)((function(){var t=(s||[]).reduce((function(t,e){return t+e.quantity}),0);u(t);var e=(s||[]).reduce((function(t,e){return t+e.quantity*e.price}),0);m(e.toFixed(2))}),[t]),Object(a.useEffect)((function(){n?D():q()}),[t.isEject]);var L=Object(a.useState)(!1),w=Object(i.a)(L,2),R=w[0],J=w[1];return Object(a.useEffect)((function(){R?localStorage.setItem("shopCart",JSON.stringify(t.shopCart)):J(!0)}),[t.shopCart]),Object(r.jsxs)("div",{ref:S,className:"float-cart",children:[Object(r.jsx)("span",{onClick:function(){return D()},ref:k,className:"float-control float-control-close",children:Object(r.jsx)("span",{ref:C,className:"cart-quantity",children:d})}),Object(r.jsx)("div",{onClick:function(){return q()},ref:E,className:"float-control float-control-open",children:"\xd7"}),Object(r.jsxs)("div",{className:"float-container",children:[Object(r.jsxs)("div",{className:"float-header",children:[Object(r.jsx)("span",{className:"float-bag",children:Object(r.jsx)("span",{className:"cart-quantity offset",children:d})}),Object(r.jsx)("span",{className:"header-title",children:"\u8d2d\u7269\u8f66"})]}),Object(r.jsx)("div",{className:"float-content",children:!s.length&&Object(r.jsxs)("p",{children:["\u8d2d\u7269\u8f66\u662f\u7a7a\u7684",Object(r.jsx)("br",{}),"\ud83d\ude9a"]})||s.map((function(t,a){return Object(r.jsxs)("div",{className:"float-item",children:[Object(r.jsx)("i",{ref:z,onClick:function(){return c=t.id,void e({type:"cart/deleteCart",payload:c});var c},className:"float-item-del fas fa-times"}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{className:"float-item-image",children:Object(r.jsx)("img",{src:c(222)("./".concat(t.id,".jpg")),alt:""})}),Object(r.jsxs)("div",{className:"float-item-details",children:[Object(r.jsx)("p",{className:"float-item-title",children:t.title}),Object(r.jsxs)("p",{className:"float-item-content",children:[t.availableSizes[0]," | ",t.style,Object(r.jsx)("br",{}),"Quantity: ",t.quantity]})]}),Object(r.jsxs)("div",{className:"float-item-price",children:[Object(r.jsxs)("p",{children:["$ ",parseFloat(t.price+(void 0===t.price.toString().split(".")[1]?".00":"00")).toFixed(2)]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){return c=t.id,void e({type:"cart/subtrackGood",payload:c});var c},disabled:1===t.quantity?"disbaled":"",className:"subtrack",children:"-"}),Object(r.jsx)("button",{onClick:function(){return c=t.id,void e({type:"cart/addOneGood",payload:c});var c},className:"add",children:"+"})]})]})]},t.id)}))}),Object(r.jsxs)("div",{className:"float-footer",children:[Object(r.jsx)("div",{className:"subtotal",children:"\u5408\u8ba1"}),Object(r.jsxs)("div",{className:"sub-price",children:[Object(r.jsxs)("p",{className:"sub-val",children:["$ ",x]}),Object(r.jsx)("small",{className:"sub-installment",children:function(t){return t-0===0?null:Object(r.jsxs)("span",{style:{fontSize:"16px"},children:["OR UP TO 9 x $ ",(t/9).toFixed(2)]})}(x)})]}),Object(r.jsx)("div",{onClick:function(){if(!s.length)return t="warning",void b.a[t]({message:"\u8d2d\u7269\u8f66\u662f\u7a7a\u7684",description:"\u4f60\u9700\u8981\u6dfb\u52a0\u4e00\u4e9b\u5546\u54c1\u5230\u8d2d\u7269\u8f66"});var t;N(!0)},className:"bought",children:"\u652f\u4ed8"}),Object(r.jsx)(h.a,{title:"\u63d0\u793a",okText:"\u786e\u8ba4\u63d0\u4ea4",cancelText:"\u6211\u518d\u60f3\u60f3",visible:y,onOk:function(){N(!1),O.b.success("\u8d2d\u4e70\u6210\u529f"),e({type:"cart/clearShopCart"})},onCancel:function(){N(!1)},children:Object(r.jsxs)("p",{children:["\u5171\u8ba1 ",x," \u7f8e\u5143"]})})]})]})]})}));var m=Object(s.connect)()((function(t){return Object(a.useEffect)((function(){var e=t.dispatch;e({type:"data/getListHttp"}),e({type:"cart/getShopCart"})}),[]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{}),Object(r.jsx)(f,{}),Object(r.jsx)(x,{})]})}));e.default=function(t){var e=t.history;return Object(r.jsx)(n.Router,{history:e,children:Object(r.jsx)(n.Switch,{children:Object(r.jsx)(n.Route,{path:"/",exact:!0,component:m})})})}},419:function(t,e,c){"use strict";c.r(e);var a=c(22),n=c(176),s=c.n(n);function i(){return fetch("https://react-shopping-cart-67954.firebaseio.com/products.json").then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){return new Error(t)}))}e.default={namespace:"data",state:{sizes:{XS:!0,S:!0,M:!0,ML:!0,L:!0,XL:!0,XXL:!0},data:null,error:null,isSpin:!0},effects:{getListHttp:s.a.mark((function t(e,c){var a,n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.call,n=c.put,t.next=3,a(i);case 3:return r=t.sent,t.next=6,n({type:"getData",payload:{data:r}});case 6:case"end":return t.stop()}}),t)}))},reducers:{getData:function(t,e){var c=e.payload;return t.isSpin=!1,c.data.toString().includes("Error")?Object(a.a)(Object(a.a)({},t),{},{error:c.data}):Object(a.a)(Object(a.a)({},t),{},{data:c.data.products})},get:function(t){return Object(a.a)({},t)},filterSize:function(t,e){var c=e.payload;return Object(a.a)(Object(a.a)({},t),c)},sort:function(t,e){var c=e.payload;return Object(a.a)(Object(a.a)({},t),c)}}}}},[[237,1,2]]]);
//# sourceMappingURL=main.0c479169.chunk.js.map