(this["webpackJsonpshop-cart"]=this["webpackJsonpshop-cart"]||[]).push([[0],{222:function(t,e,c){var n={"./0.jpg":395,"./1.jpg":396,"./10.jpg":397,"./11.jpg":398,"./12.jpg":399,"./13.jpg":400,"./14.jpg":401,"./15.jpg":402,"./16.jpg":403,"./17.jpg":404,"./2.jpg":405,"./3.jpg":406,"./4.jpg":407,"./5.jpg":408,"./6.jpg":409,"./7.jpg":410,"./8.jpg":411,"./9.jpg":412};function a(t){var e=s(t);return c(e)}function s(t){if(!c.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=s,t.exports=a,a.id=222},237:function(t,e,c){"use strict";c.r(e);var n=c(35),a=c.n(n)()();a.model(c(419).default),a.model(c(389).default),a.router(c(418).default),a.start("#root")},298:function(t,e){},389:function(t,e,c){"use strict";c.r(e);var n=c(22),a=c(232),s=c(55),r=c(59),i=c.n(r);e.default={namespace:"cart",state:{shopCart:[],isEject:!1},effects:{getShopCart:i.a.mark((function t(e,c){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.call,n=c.put,t.next=3,JSON.parse(localStorage.getItem("shopCart"));case 3:return a=t.sent,t.next=6,n({type:"setShopCart",payload:a});case 6:case"end":return t.stop()}}),t)}))},reducers:{addToCart:function(t,e){var c,r=e.payload,i=t.shopCart,o=!1,l=Object(s.a)(i);try{for(l.s();!(c=l.n()).done;){var d=c.value;if(d.id===r.id){d.quantity++,o=!0;break}}}catch(u){l.e(u)}finally{l.f()}return o||(r.quantity=1,i.push(r)),t.shopCart=Object(a.a)(i),t.isEject||(t.isEject=!0),Object(n.a)({},t)},openShop:function(t){return t.isEject||(t.isEject=!0),Object(n.a)({},t)},closeShop:function(t){return t.isEject&&(t.isEject=!1),Object(n.a)({},t)},deleteCart:function(t,e){var c=e.payload,a=t.shopCart;for(var s in a)if(a[s].id===c){a.splice(s,1);break}return 0===a.length&&(t.isEject=!1),t.shopCart=a.slice(),Object(n.a)({},t)},addOneGood:function(t,e){var c,a=e.payload,r=t.shopCart,i=Object(s.a)(r);try{for(i.s();!(c=i.n()).done;){var o=c.value;if(o.id===a){o.quantity++;break}}}catch(l){i.e(l)}finally{i.f()}return t.shopCart=r.slice(),Object(n.a)({},t)},subtrackGood:function(t,e){var c,a=e.payload,r=t.shopCart,i=Object(s.a)(r);try{for(i.s();!(c=i.n()).done;){var o=c.value;if(o.id===a){o.quantity--;break}}}catch(l){i.e(l)}finally{i.f()}return t.shopCart=r.slice(),Object(n.a)({},t)},clearShopCart:function(t){return t.shopCart=[],t.isEject=!1,Object(n.a)({},t)},setShopCart:function(t,e){var c=e.payload;return Object(n.a)(Object(n.a)({},t),{},{shopCart:c})}}}},390:function(t,e,c){},391:function(t,e,c){},393:function(t,e,c){},394:function(t,e,c){},395:function(t,e,c){t.exports=c.p+"static/media/0.96badb6f.jpg"},396:function(t,e,c){t.exports=c.p+"static/media/1.bfdc616c.jpg"},397:function(t,e,c){t.exports=c.p+"static/media/10.c23ce225.jpg"},398:function(t,e,c){t.exports=c.p+"static/media/11.ebf63603.jpg"},399:function(t,e,c){t.exports=c.p+"static/media/12.1250c07d.jpg"},400:function(t,e,c){t.exports=c.p+"static/media/13.054e6832.jpg"},401:function(t,e,c){t.exports=c.p+"static/media/14.0d58ff93.jpg"},402:function(t,e,c){t.exports=c.p+"static/media/15.be081f68.jpg"},403:function(t,e,c){t.exports=c.p+"static/media/16.27b63c57.jpg"},404:function(t,e,c){t.exports=c.p+"static/media/17.96badb6f.jpg"},405:function(t,e,c){t.exports=c.p+"static/media/2.eeca77d9.jpg"},406:function(t,e,c){t.exports=c.p+"static/media/3.9cb24054.jpg"},407:function(t,e,c){t.exports=c.p+"static/media/4.96badb6f.jpg"},408:function(t,e,c){t.exports=c.p+"static/media/5.e86f32a0.jpg"},409:function(t,e,c){t.exports=c.p+"static/media/6.6487e09e.jpg"},410:function(t,e,c){t.exports=c.p+"static/media/7.7ec39881.jpg"},411:function(t,e,c){t.exports=c.p+"static/media/8.310ac226.jpg"},412:function(t,e,c){t.exports=c.p+"static/media/9.5a25035a.jpg"},413:function(t,e,c){},415:function(t,e,c){},418:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(144),s=(c(390),c(35)),r=c(40),i=(c(391),c(6));var o=Object(s.connect)((function(t){return{sizes:t.products.sizes}}))((function(t){var e=Object(n.useState)(!0),c=Object(r.a)(e,2),a=c[0],s=c[1];return Object(i.jsxs)("div",{className:"filters",children:[Object(i.jsx)("h4",{className:"title",children:"\u5c3a\u7801\uff1a"}),t.sizes&&Object.entries(t.sizes).map((function(e,c){return Object(i.jsx)("div",{className:"filters-btn",children:Object(i.jsxs)("label",{htmlFor:e[0],children:[Object(i.jsx)("input",{type:"checkbox",value:e[0],id:e[0]}),Object(i.jsx)("span",{onClick:function(){!function(e,c){var n=t.dispatch,r=t.sizes,i=JSON.parse(JSON.stringify(r));if(!Object.values(i).filter((function(t){return!1===t})).length&&a){for(var o in i)o!==e&&(i[o]=!1);s(!1)}else for(var l in i)l===e&&(i[l]=!c);if(0===Object.values(i).filter((function(t){return!0===t})).length){for(var d in i)i[d]=!0;s(!0)}n({type:"products/filterSize",payload:{sizes:i}})}(e[0],e[1])},className:"checkmark",children:e[0]})]})},c)}))]})})),l=(c(393),c(423)),d=c(424),u=(c(221),c(55));c(394);var j=Object(s.connect)((function(t){return{data:t.products.data,sizes:t.products.sizes}}))((function(t){var e=Object(n.useRef)(),a=t.dispatch;if(Object(n.useEffect)((function(){e.current&&t.getNum(e.current.childNodes.length)}),[t]),!t.data)return null;var s=t.data,r=t.sizes,o=Object.entries(r).filter((function(t){return!0===t[1]})).map((function(t){return t[0]}));return Object(i.jsx)("div",{ref:e,className:"item-container",children:s.map((function(t,e){var n,r=Object(u.a)(s[e].availableSizes);try{for(r.s();!(n=r.n()).done;){var l=n.value;if(o.includes(l))return Object(i.jsxs)("div",{className:"item",children:[Object(i.jsx)("div",{className:"item-title",children:"\u514d\u8fd0\u8d39"}),Object(i.jsx)("div",{children:Object(i.jsx)("img",{className:"item-img",src:c(222)("./".concat(s[e].id,".jpg")),alt:""})}),Object(i.jsx)("p",{className:"item-name",children:s[e].title}),Object(i.jsxs)("p",{style:{marginBottom:"0"},children:["\u5c3a\u7801\uff1a",s[e].availableSizes.join(" , ")]}),Object(i.jsxs)("div",{className:"item-price",children:[Object(i.jsxs)("div",{className:"val",children:[Object(i.jsx)("span",{children:"$"}),Object(i.jsx)("b",{children:s[e].price.toString().split(".")[0]}),Object(i.jsxs)("span",{style:{fontSize:"16px"},children:[".",((s[e].price.toString().split(".")[1]||"")+"00").substr(0,2)]})]}),0!==s[e].installments&&Object(i.jsxs)("div",{className:"installment",children:[Object(i.jsxs)("span",{style:{fontSize:"16px"},children:["\u6216 ",s[e].installments," x "]}),Object(i.jsxs)("b",{style:{fontSize:"16px"},children:["$",(s[e].price/s[e].installments).toFixed(2)]})]})]}),Object(i.jsx)("div",{onClick:function(){return t=s[e],void a({type:"cart/addToCart",payload:t});var t},className:"item-btn",children:"\u6dfb\u52a0\u81f3\u8d2d\u7269\u8f66"})]},s[e].id)}}catch(d){r.e(d)}finally{r.f()}return null}))})}));c(413);function p(t){var e=t.isSpin;return Object(i.jsx)("div",{style:{display:e?"flex":"none"},className:"spinContainer",children:Object(i.jsxs)("div",{className:"sk-folding-cube",children:[Object(i.jsx)("div",{className:"sk-cube1 sk-cube"}),Object(i.jsx)("div",{className:"sk-cube2 sk-cube"}),Object(i.jsx)("div",{className:"sk-cube4 sk-cube"}),Object(i.jsx)("div",{className:"sk-cube3 sk-cube"})]})})}var f=Object(s.connect)((function(t){return{data:t.products.data,sizes:t.products.sizes,error:t.products.error,isSpin:t.products.isSpin}}))((function(t){var e=Object(n.useState)(0),c=Object(r.a)(e,2),a=c[0],s=c[1],o=Object(n.useState)("\u70b9\u51fb\u9009\u62e9"),u=Object(r.a)(o,2),f=u[0],b=u[1],h=Object(i.jsxs)(l.a,{onClick:function(e){return function(e){"0"===e.key?b("\u9ed8\u8ba4\u6392\u5e8f"):"1"===e.key?b("\u4ef7\u683c\u4ece\u4f4e\u5230\u9ad8"):"2"===e.key&&b("\u4ef7\u683c\u4ece\u9ad8\u5230\u4f4e"),(0,t.dispatch)({type:"products/sortCarts",payload:{key:e.key}})}(e)},children:[Object(i.jsx)(l.a.Item,{children:"\u9ed8\u8ba4\u6392\u5e8f"},"0"),Object(i.jsx)(l.a.Divider,{}),Object(i.jsx)(l.a.Item,{children:"\u4ef7\u683c\u4ece\u4f4e\u5230\u9ad8"},"1"),Object(i.jsx)(l.a.Divider,{}),Object(i.jsx)(l.a.Item,{children:"\u4ef7\u683c\u4ece\u9ad8\u5230\u4f4e"},"2")]});return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"header",children:[Object(i.jsxs)("span",{className:"information",children:["\u5171\u67e5\u627e\u5230 ",a," \u4ef6\u5546\u54c1\u3002"]}),Object(i.jsxs)("div",{className:"sort",children:["\u6839\u636e\xa0\xa0",Object(i.jsx)(d.a,{overlay:h,trigger:["click"],children:Object(i.jsxs)("span",{className:"select ant-dropdown-link",onClick:function(t){return t.preventDefault()},children:[" ",f," "]})}),"\xa0\xa0\u6392\u5e8f"]})]}),Object(i.jsx)(j,{getNum:function(t){s(t)}}),Object(i.jsxs)("h1",{style:{display:null===t.error?"none":"block",color:"red"},children:["\u6570\u636e\u83b7\u53d6\u5931\u8d25: ",t.error&&t.error.toString()]}),Object(i.jsx)(p,{isSpin:t.isSpin})]})})),b=(c(415),c(236)),h=c(231),O=c(422);var x=Object(s.connect)((function(t){return{shopCart:t.cart.shopCart,isEject:t.cart.isEject}}))((function(t){var e=t.dispatch,a=t.isEject,s=t.shopCart,o=Object(n.useState)(0),l=Object(r.a)(o,2),d=l[0],j=l[1],p=Object(n.useState)(0),f=Object(r.a)(p,2),x=f[0],m=f[1],v=Object(n.useState)(!1),y=Object(r.a)(v,2),g=y[0],N=y[1],k=Object(n.useRef)(),S=Object(n.useRef)(),C=Object(n.useRef)(),E=Object(n.useRef)(),z=Object(n.useRef)(),w=function(){e({type:"cart/openShop"}),k.current.classList.add("float-open"),S.current.style.display="none",E.current.style.display="inline-block"},D=function(){e({type:"cart/closeShop"}),k.current.classList.remove("float-open"),E.current.style.display="none",S.current.style.display="inline-block"};Object(n.useEffect)((function(){var t=document.querySelectorAll(".float-item-del");if(t.length){var e,c=Object(u.a)(t);try{for(c.s();!(e=c.n()).done;){var n=e.value;n.addEventListener("mouseenter",(function(t){t.target.parentNode.style.backgroundColor="#0c0b10",t.target.parentNode.childNodes[3].childNodes[0].style.textDecoration="line-through",t.target.parentNode.childNodes[3].childNodes[1].style.textDecoration="line-through",t.target.parentNode.childNodes[4].childNodes[0].style.textDecoration="line-through",t.target.style.color="#fff"})),n.addEventListener("mouseleave",(function(t){t.target.parentNode.style.backgroundColor="#1b1a20",t.target.parentNode.childNodes[3].childNodes[0].style.textDecoration="none",t.target.parentNode.childNodes[3].childNodes[1].style.textDecoration="none",t.target.parentNode.childNodes[4].childNodes[0].style.textDecoration="none",t.target.style.color="#000"}))}}catch(a){c.e(a)}finally{c.f()}}}),[t]),Object(n.useEffect)((function(){var t=(s||[]).reduce((function(t,e){return t+e.quantity}),0);j(t);var e=(s||[]).reduce((function(t,e){return t+e.quantity*e.price}),0);m(e.toFixed(2))}),[t]),Object(n.useEffect)((function(){a?w():D()}),[t.isEject]);var q=Object(n.useState)(!1),L=Object(r.a)(q,2),R=L[0],F=L[1];return Object(n.useEffect)((function(){R?localStorage.setItem("shopCart",JSON.stringify(t.shopCart)):F(!0)}),[t.shopCart]),Object(i.jsxs)("div",{ref:k,className:"float-cart",children:[Object(i.jsx)("span",{onClick:function(){return w()},ref:S,className:"float-control float-control-close",children:Object(i.jsx)("span",{ref:C,className:"cart-quantity",children:d})}),Object(i.jsx)("div",{onClick:function(){return D()},ref:E,className:"float-control float-control-open",children:"\xd7"}),Object(i.jsxs)("div",{className:"float-container",children:[Object(i.jsxs)("div",{className:"float-header",children:[Object(i.jsx)("span",{className:"float-bag",children:Object(i.jsx)("span",{className:"cart-quantity offset",children:d})}),Object(i.jsx)("span",{className:"header-title",children:"\u8d2d\u7269\u8f66"})]}),Object(i.jsx)("div",{className:"float-content",children:!(null===s||void 0===s?void 0:s.length)&&Object(i.jsxs)("p",{children:["\u8d2d\u7269\u8f66\u662f\u7a7a\u7684",Object(i.jsx)("br",{}),"\ud83d\ude9a"]})||s.map((function(t,n){return Object(i.jsxs)("div",{className:"float-item",children:[Object(i.jsx)("i",{ref:z,onClick:function(){return c=t.id,void e({type:"cart/deleteCart",payload:c});var c},className:"float-item-del fas fa-times"}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{className:"float-item-image",children:Object(i.jsx)("img",{src:c(222)("./".concat(t.id,".jpg")),alt:""})}),Object(i.jsxs)("div",{className:"float-item-details",children:[Object(i.jsx)("p",{className:"float-item-title",children:t.title}),Object(i.jsxs)("p",{className:"float-item-content",children:[t.availableSizes[0]," | ",t.style,Object(i.jsx)("br",{}),"Quantity: ",t.quantity]})]}),Object(i.jsxs)("div",{className:"float-item-price",children:[Object(i.jsxs)("p",{children:["$ ",parseFloat(t.price+(void 0===t.price.toString().split(".")[1]?".00":"00")).toFixed(2)]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{onClick:function(){return c=t.id,void e({type:"cart/subtrackGood",payload:c});var c},disabled:1===t.quantity?"disbaled":"",className:"subtrack",children:"-"}),Object(i.jsx)("button",{onClick:function(){return c=t.id,void e({type:"cart/addOneGood",payload:c});var c},className:"add",children:"+"})]})]})]},t.id)}))}),Object(i.jsxs)("div",{className:"float-footer",children:[Object(i.jsx)("div",{className:"subtotal",children:"\u5408\u8ba1"}),Object(i.jsxs)("div",{className:"sub-price",children:[Object(i.jsxs)("p",{className:"sub-val",children:["$ ",x]}),Object(i.jsx)("small",{className:"sub-installment",children:function(t){return t-0===0?null:Object(i.jsxs)("span",{style:{fontSize:"16px"},children:["OR UP TO 9 x $ ",(t/9).toFixed(2)]})}(x)})]}),Object(i.jsx)("div",{onClick:function(){if(!s.length)return t="warning",void b.a[t]({message:"\u8d2d\u7269\u8f66\u662f\u7a7a\u7684",description:"\u4f60\u9700\u8981\u6dfb\u52a0\u4e00\u4e9b\u5546\u54c1\u5230\u8d2d\u7269\u8f66"});var t;N(!0)},className:"bought",children:"\u652f\u4ed8"}),Object(i.jsx)(O.a,{title:"\u63d0\u793a",okText:"\u786e\u8ba4\u63d0\u4ea4",cancelText:"\u6211\u518d\u60f3\u60f3",visible:g,onOk:function(){N(!1),h.b.success("\u8d2d\u4e70\u6210\u529f"),e({type:"cart/clearShopCart"})},onCancel:function(){N(!1)},children:Object(i.jsxs)("p",{children:["\u5171\u8ba1 ",x," \u7f8e\u5143"]})})]})]})]})}));var m=Object(s.connect)()((function(t){return Object(n.useEffect)((function(){var e=t.dispatch;e({type:"products/getListHttp"}),e({type:"cart/getShopCart"})}),[]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(f,{}),Object(i.jsx)(x,{})]})}));e.default=function(t){var e=t.history;return Object(i.jsx)(a.Router,{history:e,children:Object(i.jsx)(a.Switch,{children:Object(i.jsx)(a.Route,{path:"/",exact:!0,component:m})})})}},419:function(t,e,c){"use strict";c.r(e);var n=c(22),a=c(59),s=c.n(a);function r(){return fetch("https://react-shopping-cart-67954.firebaseio.com/products.json").then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){return new Error(t)}))}function i(t,e){return"0"===t?e.sort((function(t,e){return t.id-e.id})):"1"===t?e.sort((function(t,e){return t.price-e.price})):"2"===t&&e.sort((function(t,e){return e.price-t.price})),e}e.default={namespace:"products",state:{sizes:{XS:!0,S:!0,M:!0,ML:!0,L:!0,XL:!0,XXL:!0},data:null,error:null,isSpin:!0},effects:{getListHttp:s.a.mark((function t(e,c){var n,a,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.call,a=c.put,t.next=3,n(r);case 3:return i=t.sent,t.next=6,a({type:"setData",payload:{data:i}});case 6:case"end":return t.stop()}}),t)})),sortCarts:s.a.mark((function t(e,c){var n,a,r,o,l,d;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,a=c.call,r=c.put,o=c.select,t.next=4,o((function(t){return t.products.data}));case 4:return l=t.sent,t.next=7,a(i,n.key,l);case 7:return d=t.sent,t.next=10,r({type:"sort",payload:{data:d}});case 10:case"end":return t.stop()}}),t)}))},reducers:{setData:function(t,e){var c=e.payload;return t.isSpin=!1,c.data.toString().includes("Error")?Object(n.a)(Object(n.a)({},t),{},{error:c.data}):Object(n.a)(Object(n.a)({},t),{},{data:c.data.products})},get:function(t){return Object(n.a)({},t)},filterSize:function(t,e){var c=e.payload;return Object(n.a)(Object(n.a)({},t),c)},sort:function(t,e){var c=e.payload;return console.log("sort",c),Object(n.a)(Object(n.a)({},t),c)}}}}},[[237,1,2]]]);
//# sourceMappingURL=main.7ce6cfa4.chunk.js.map