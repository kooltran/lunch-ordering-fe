(this["webpackJsonpfood-ordering"]=this["webpackJsonpfood-ordering"]||[]).push([[0],{148:function(e,t,a){e.exports=a.p+"static/media/cross.441d8611.svg"},201:function(e,t,a){},287:function(e,t,a){e.exports=a.p+"static/media/plus.311313cd.svg"},288:function(e,t,a){e.exports=a.p+"static/media/cart.890dce60.svg"},289:function(e,t,a){e.exports=a.p+"static/media/fobiden-order.6b4b70dc.svg"},296:function(e,t,a){e.exports=a.p+"static/media/congrats.211b8e65.svg"},297:function(e,t,a){e.exports=a.p+"static/media/checklist.80d775c4.svg"},307:function(e,t,a){e.exports=a.p+"static/media/logo.913ae04a.svg"},313:function(e,t,a){e.exports=a(617)},555:function(e,t,a){},557:function(e,t,a){},558:function(e,t,a){},591:function(e,t,a){},61:function(e,t,a){e.exports=a.p+"static/media/loading.546dec86.svg"},615:function(e,t,a){},617:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),l=a(118),s=a(19),u=a(6),o=a(9),d=a.n(o),m=a(26),E=a(3),p=a(286),O=a.n(p)()({menu:[function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_MENU_LOADING":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!0,menuList:[],getMenuFail:null});case"GET_MENU_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,menuList:t.payload,getMenuFail:null});case"GET_MENU_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,menuList:[],getMenuFail:t.payload.message});default:return e}},{menuList:[],isLoading:!1,getMenuFail:null}],users:[function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_CUR_USER_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{user:t.payload,getUserFail:null});case"GET_CUR_USER_FAIL":return Object(E.a)(Object(E.a)({},e),{},{user:{},getUserFail:t.payload.message});case"GET_USERS_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{users:t.payload,getUserFail:null});case"GET_USERS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{users:[],getUserFail:t.payload.message});default:return e}},{user:{},users:[],userFail:null}],cart:[function(e,t){switch(t.type){case"ADD_CART_ITEM":return Object(E.a)(Object(E.a)({},e),{},{cartList:t.payload,isAnimateCart:!0,isCartAdded:!0});case"REMOVE_CART_ADDED":return Object(E.a)(Object(E.a)({},e),{},{isCartAdded:!0,isAnimateCart:!1});case"DELETE_CART_ITEM":var a=e.cartList,n=t.payload;return Object(E.a)(Object(E.a)({},e),{},{cartList:a.filter((function(e){return e.id!==n.id})),isAnimateCart:!0,isCartAdded:!1});case"DELETE_CART":return Object(E.a)(Object(E.a)({},e),{},{cartList:[],isAnimateCart:!1,isCartAdded:!1});default:return e}},{cartList:[],isAnimateCart:!1,isCartAdded:!1}],submitOrder:[function(e,t){switch(t.type){case"SUBMIT_ORDERS_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{createOrderSuccess:!1,isLoading:!0,submitOrderFail:null});case"SUBMIT_ORDERS_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{createOrderSuccess:!0,isLoading:!1,submitOrderFail:null});case"SUBMIT_ORDERS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{createOrderSuccess:!1,isLoading:!1,submitOrderFail:t.payload});default:return e}},{createOrderSuccess:!1,isLoading:!1,submitOrderFail:null}],orders:[function(e,t){switch(t.type){case"GET_ORDERS_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!0,orderList:[],getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null});case"GET_ORDERS_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!1,orderList:t.payload,getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null});case"GET_ORDERS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!1,orderList:[],getOrdersFail:t.payload.message,deleteOrderRequest:!1,deleteOrderFail:null});case"DELETE_ORDER_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!1,getOrdersFail:null,deleteOrderRequest:!0,deleteOrderFail:null});case"DELETE_ORDER_SUCCESS":var a=t.payload,n=e.orderList;return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!1,orderList:n.filter((function(e){return e._id!==a._id})),getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null});case"DELETE_ORDER_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!1,orderList:[],getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:t.payload.message});default:return e}},{orderList:[],isOrdersLoading:!1,getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null}],orderTimeout:[function(e,t){switch(t.type){case"SET_ORDER_TIMEOUT":return Object(E.a)(Object(E.a)({},e),{},{isOrderTimeout:!0});case"RESET_ORDER_TIMEOUT":return Object(E.a)(Object(E.a)({},e),{},{isOrderTimeout:!1});default:return e}},{isOrderTimeout:!1}],allOrders:[function(e,t){switch(t.type){case"GET_ALL_ORDERS_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!0,allOrderList:[],getOrdersFail:null,isCheckingPaid:!1,checkPaidFail:null});case"GET_ALL_ORDERS_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,allOrderList:t.payload,getOrdersFail:null,isCheckingPaid:!1,checkPaidFail:null});case"GET_ALL_ORDERS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,allOrderList:[],getOrdersFail:t.payload.message,isCheckingPaid:!1,checkPaidFail:null});case"GET_ORDERS_HISTORY_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!0,allOrderList:[],getOrdersFail:null,isCheckingPaid:!1,checkPaidFail:null});case"GET_ORDERS_HISTORY_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,allOrderList:t.payload,getOrdersFail:null,isCheckingPaid:!1,checkPaidFail:null});case"GET_ORDERS_HISTORY_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,allOrderList:[],getOrdersFail:t.payload.message,isCheckingPaid:!1,checkPaidFail:null});case"CHECK_PROVIDER_PAID_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,getOrdersFail:null,isCheckingPaid:!0,checkPaidFail:null});case"CHECK_PROVIDER_PAID_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,getOrdersFail:null,isCheckingPaid:!1,allOrderList:t.payload,checkPaidFail:null});case"CHECK_PROVIDER_PAID_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,getOrdersFail:null,isCheckingPaid:!1,allOrderList:[],checkPaidFail:t.payload});case"CHECK_PAID_ALL_WEEK_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!0,checkPaidFail:null,isLoading:!1,getOrdersFail:null});case"CHECK_PAID_ALL_WEEK_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!1,allOrderList:t.payload,checkPaidFail:null,isLoading:!1,getOrdersFail:null});case"CHECK_PAID_ALL_WEEK_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!1,allOrderList:[],checkPaidFail:t.payload.message,isLoading:!1,getOrdersFail:null});case"CHECK_PAID_ORDER_ITEM_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!0});case"CHECK_PAID_ORDER_ITEM_SUCCESS":var a=e.allOrderList,n=t.payload,r=a.map((function(e){return e._id===n._id?Object(E.a)(Object(E.a)({},e),{},{orders:n.orders,isPaid:n.isPaid}):e}));return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!1,allOrderList:r});case"CHECK_PAID_ORDER_ITEM_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!1,allOrderList:[],checkPaidFail:t.payload});default:return e}},{allOrderList:[],isLoading:!1,getOrdersFail:null,isCheckingPaid:!1,checkPaidFail:null}]}),g=Object(u.a)(O,2),f=g[0],h=g[1],_=r.a.createContext({}),b=function(e){var t=e.children,a=Object(n.useReducer)(f,h),c=Object(u.a)(a,2),i=c[0],l=c[1];return r.a.createElement(_.Provider,{value:{data:i,setData:l}},t)},v=function(){var e=Object(n.useContext)(_),t=e.data,a=e.setData;return[t,Object(n.useCallback)((function(e){var t=e.type,n=e.payload;a({payload:n,type:t})}),[a])]},y=function(e){return{type:"GET_MENU_SUCCESS",payload:e}},C=a(67),S=a.n(C);console.log("production");var j="https://luch-ordering.herokuapp.com",R="https://luch-ordering.herokuapp.com/google",L=function(){var e=localStorage.getItem("token");return S.a.get("".concat(j,"/users/current"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.data}))},k=a(61),T=a.n(k),D=(a(555),a(310)),A=a(4),N=a.n(A),I=a(287),F=a.n(I),P=function(e){return{type:"ADD_CART_ITEM",payload:e}},w=function(e){var t=e.item,a=Object(n.useState)(1),c=Object(u.a)(a,2),i=c[0],l=c[1],s=v(),o=Object(u.a)(s,2),d=o[0],m=d.users,E=d.cart,p=d.orderTimeout,O=o[1],g=m.user,f=E.cartList;return r.a.createElement("div",{className:N()("menu-item",{"is-disabled":f.some((function(e){return e.id===t._id}))||p.isOrderTimeout})},r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"img-dish",src:t.img,alt:t.name}),r.a.createElement("div",{onClick:function(){var e={id:t._id,dish_name:t.name,quantity:i};if(g.username)if(0===f.length)O(P(f)),setTimeout((function(){return O({type:"REMOVE_CART_ADDED"})}),500),f.push(e);else{var a=[].concat(Object(D.a)(f),[e]);O(P(a)),setTimeout((function(){return O({type:"REMOVE_CART_ADDED"})}),500)}else window.open(R,"_self")}},r.a.createElement("img",{className:"icon-add",src:F.a,alt:""}))),r.a.createElement("div",{className:"desc"},r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"name"},t.name),r.a.createElement("span",{className:"price"},t.price)),r.a.createElement("div",{className:"quantity"},r.a.createElement("input",{type:"number",value:i,onChange:function(e){var t=e.target.value,a=parseInt(t);l(a<=0?1:a>5?5:a)}}))))},U=function(){var e=v(),t=Object(u.a)(e,2),a=t[0].menu,c=t[1],i=function(){var e=v(),t=Object(u.a)(e,2)[1];return Object(n.useCallback)(Object(m.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_MENU_LOADING"}),e.prev=1,e.next=4,S.a.get("".concat(j,"/menuList")).then((function(e){return e.data}));case 4:a=e.sent,t(y(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_MENU_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),[t])}(),l=a.isLoading,s=a.menuList;return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,localStorage.setItem("roles",t.roles),c({type:"GET_CUR_USER_SUCCESS",payload:t});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),i()}),[c,i]),r.a.createElement("div",{className:"menu-wrapper"},l&&r.a.createElement("img",{className:"icon-loading",src:T.a,alt:"loading-spinner"}),s.map((function(e){return r.a.createElement(w,{key:e._id,item:e})})))},x=a(147),M=a.n(x),G=a(148),q=a.n(G),H=function(e){var t=e.order,a=v(),n=Object(u.a)(a,2)[1];return r.a.createElement("div",{className:"cart-item"},r.a.createElement("div",{className:"name"},t.dish_name),r.a.createElement("div",{className:"desc"},r.a.createElement("div",{className:"qty"},t.quantity),r.a.createElement("span",{className:"remove",onClick:function(){n(function(e){return{type:"DELETE_CART_ITEM",payload:e}}(t))}},r.a.createElement("img",{src:q.a,alt:"remove-order"}))))},K=function(e){return{type:"SUBMIT_ORDERS_FAIL",payload:e}},Q=function(e){return{type:"GET_ORDERS_SUCCESS",payload:e}},B=function(e){return{type:"GET_ALL_ORDERS_SUCCESS",payload:e}},Y=function(e){return{type:"DELETE_ORDER_SUCCESS",payload:e}},V=function(e){return{type:"GET_ORDERS_HISTORY_SUCCESS",payload:e}},W=S.a.create({baseURL:j});W.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(localStorage.getItem("token")),e}));var z=W,J=function(e){return z.post("/orders/create",e).then((function(e){return e.data}))},X=function(e){return z.post("/orders/check-paid-provider",e).then((function(e){return e.data}))},$=function(e){return z.post("/orders/paid-allweeks",e).then((function(e){return e.data}))},Z=function(e){return z.post("/orders/delete",e).then((function(e){return e.data}))},ee=function(e){return z.get("/orders/payment-by-week",{params:{type:e}}).then((function(e){return e.data}))},te=function(e){return z.get("/orders/payments",{params:{type:e}}).then((function(e){return e.data}))},ae=a(288),ne=a.n(ae),re=(a(557),function(){var e=v(),t=Object(u.a)(e,1)[0],a=t.cart,c=t.submitOrder,i=a.cartList,l=a.isAnimateCart,s=a.isCartAdded,o=c.isLoading,E=Object(n.useState)(!1),p=Object(u.a)(E,2),O=p[0],g=p[1],f=function(){var e=v(),t=Object(u.a)(e,2)[1];return Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"SUBMIT_ORDERS_REQUEST"}),e.prev=1,e.next=4,J(a);case 4:e.sent,t({type:"SUBMIT_ORDERS_SUCCESS"}),t({type:"DELETE_CART"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(K(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),[t])}();Object(n.useEffect)((function(){s&&g(s)}),[s]);return r.a.createElement("div",{className:"cart-wrapper"},r.a.createElement("div",{className:N()("cart-icon",{shake:l}),onClick:function(){g(!O)}},r.a.createElement("img",{src:ne.a,alt:"cart-icon"}),r.a.createElement("span",{className:"cart-qty"},i.length)),r.a.createElement("div",{className:N()("cart-content",{show:O&&i.length})},o&&r.a.createElement("img",{className:"cart-loading",src:T.a,alt:""}),i.map((function(e){return r.a.createElement(H,{key:e.id,order:e})})),r.a.createElement("button",{className:"btn-order",onClick:function(){var e=i.map((function(e){return{dishId:e.id,quantity:e.quantity,date:(new Date).toDateString(),createdAt:M()().startOf("day"),paid:!1}}));f(e)}},"Order")))}),ce=a(619),ie=a(289),le=a.n(ie),se=(a(558),function(){var e=new Date,t=e.getFullYear(),a=e.getMonth(),c=e.getDate(),i=new Date(t,a,c,10,58,0,0).getTime(),l=new Date(t,a,c,8,30,0,0).getTime(),s=(new Date).getTime()>=l,o=Object(n.useState)({hours:0,minutes:0,seconds:0}),d=Object(u.a)(o,2),m=d[0],E=d[1],p=Object(n.useState)(i),O=Object(u.a)(p,1)[0],g=Object(n.useState)(!1),f=Object(u.a)(g,2),h=f[0],_=f[1],b=Object(n.useCallback)((function(){if(O){var e=(new Date).getTime(),t=O-e,a=Math.floor(t%36e5/6e4),n=Math.floor(t%6e4/1e3),r=[1,2,3,4,5,6,7,8,9],c=Math.floor(t%864e5/36e5);r.includes(c)&&(c="0".concat(c)),r.includes(a)&&(a="0".concat(a)),r.includes(n)&&(n="0".concat(n)),E({hours:c,minutes:a,seconds:n}),_(c<=0&&a<=0&&n<=0)}}),[O]);Object(n.useEffect)((function(){if(setInterval((function(){return b()}),1e3),h)return function(){return clearInterval(b)}}),[h,b]);var v=m.hours,y=m.minutes,C=m.seconds;return r.a.createElement("div",{className:"countdown"},v>=0&&y>=0&&C>0&&r.a.createElement("div",null,r.a.createElement("p",{className:"countdown-message"},"Th\u1eddi gian order c\u1ee7a b\u1ea1n c\xf2n l\u1ea1i"),r.a.createElement("span",null,v),r.a.createElement("span",null,y),r.a.createElement("span",null,C)),r.a.createElement(ce.a,{className:"timeout-modal",visible:h||!s,onCancel:function(){},width:"60vw",height:"60vh",footer:null},r.a.createElement("img",{className:"timeout-icon",src:le.a,alt:"forbiden-order"}),h&&r.a.createElement("div",{className:"timeout-message"},"Th\u1eddi gian order c\u01a1m h\xf4m nay \u0111\xe3 h\u1ebft, b\u1ea1n vui l\xf2ng quay l\u1ea1i v\xe0o l\xfac"," ",r.a.createElement("span",{className:"note"},"8h00")," ng\xe0y mai nh\xe9!!!"),!s&&r.a.createElement("div",{className:"timeout-message"},"Th\u1eddi gian order ch\u01b0a t\u1edbi, b\u1ea1n vui l\xf2ng quay l\u1ea1i v\xe0o l\xfac"," ",r.a.createElement("span",{className:"note"},"8h00")," nh\xe9!!!")))}),ue=a(296),oe=a.n(ue),de=a(297),me=a.n(de),Ee=(a(590),a(121)),pe=(a(591),function(){var e=v(),t=Object(u.a)(e,1)[0].submitOrder.createOrderSuccess,a=Object(n.useState)(t),c=Object(u.a)(a,2),i=c[0],l=c[1],o=Object(s.g)(),d="admin"===localStorage.getItem("roles");Object(n.useEffect)((function(){t&&l(t)}),[t]);var m=function(){l(!1)};return r.a.createElement("div",{className:"page"},r.a.createElement("h1",{className:"text-uppercase text-center"},"SP Team Lunch Ordering"),!d&&r.a.createElement(se,null),r.a.createElement("a",{href:"/lunch-ordering-fe/#/orders",className:"icon-orders"},r.a.createElement("img",{src:me.a,alt:"checklist"})),r.a.createElement(re,null),r.a.createElement(U,null),r.a.createElement(ce.a,{className:"congrats-modal",visible:i,onCancel:m,width:"60vw",height:"60vh",footer:[r.a.createElement(Ee.a,{size:"large",key:"back",onClick:m},"\u0110\xf3ng"),r.a.createElement(Ee.a,{key:"submit",size:"large",type:"primary",onClick:function(){o.push("/orders")}},"Xem Order")]},r.a.createElement("img",{className:"modal-icon",src:oe.a,alt:"forbiden-order"}),r.a.createElement("div",{className:"congrats-message"},"Thank you! B\u1ea1n \u0111\xe3 order th\xe0nh c\xf4ng!!",r.a.createElement("p",null,"Ch\xfac Ngon mi\u1ec7ng"))))}),Oe=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ge=setInterval((function(e,t,a){new Date(e,t,a,13,45,0,0).getTime()-(new Date).getTime()<0&&clearInterval(ge)}),1e3),fe=function(e){return{type:"CHECK_PAID_ORDER_ITEM_SUCCESS",payload:e}},he=function(e){return{type:"CHECK_PROVIDER_PAID_SUCCESS",payload:e}},_e=function(e){return{type:"CHECK_PROVIDER_PAID_FAIL",payload:e}},be=function(e){return{type:"CHECK_PAID_ALL_WEEK_SUCCESS",payload:e}},ve=function(e){return{type:"CHECK_PAID_ALL_WEEK_FAIL",payload:e}},ye=function(){var e=v(),t=Object(u.a)(e,2)[1];return{checkPaidOrderItem:Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_PAID_ORDER_ITEM_REQUEST"}),e.prev=1,e.next=4,r=a,z.post("/orders/check-paid",r).then((function(e){return e.data}));case 4:n=e.sent,t(fe(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t((e.t0,{type:"CHECK_PAID_ORDER_ITEM_FAIL"}));case 11:case"end":return e.stop()}var r}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]),checkProviderPaidOrder:Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_PROVIDER_PAID_REQUEST"}),e.prev=1,e.next=4,X(a);case 4:n=e.sent,t(he(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(_e(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]),checkPaidOrderAllWeek:Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_PAID_ALL_WEEK_REQUEST"}),e.prev=1,e.next=4,$(a);case 4:n=e.sent,t(be(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(ve(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[t])}},Ce=function(e){var t=e.order,a=e.isAdmin,c=e.isAllOrders,i=e.type,l=e.paymentId,s=Object(n.useState)(t.paid),o=Object(u.a)(s,2),E=o[0],p=o[1],O=ye().checkPaidOrderItem,g="date"===i,f=v(),h=Object(u.a)(f,1)[0].allOrders.isCheckingPaid,_=t.quantity,b=t.dish,y=b.name,C=b.price,S=t.user.username,j=t.date,R=v(),L=Object(u.a)(R,1)[0].orders.deleteOrderRequest,k=Object(n.useState)(!1),T=Object(u.a)(k,2),D=T[0],A=T[1],I=function(){var e=v(),t=Object(u.a)(e,2),a=(t[0].allOrders.allOrderList,t[1]);return Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"DELETE_ORDER_REQUEST"}),e.prev=1,e.next=4,Z(t);case 4:n=e.sent,a(Y(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a({type:"DELETE_ORDER_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[a])}(),F=function(){return A(!1)};return Object(n.useEffect)((function(){p(t.paid)}),[t.paid]),r.a.createElement("div",{key:t._id,className:"order-item"},r.a.createElement("span",{className:"name"},"".concat(g?S:j)),r.a.createElement("span",{className:"quantity"},_),r.a.createElement("span",{className:"dish-name"},y),!c&&r.a.createElement("span",{className:"date"},function(e){if(e){var t=new Date(e),a=t.getDate(),n=t.getMonth(),r=Oe[n],c=t.getFullYear();return"".concat(a," ").concat(r," ").concat(c)}}(j)),r.a.createElement("span",{className:"price"},"".concat(parseInt(C.slice(0,2))*_,",000\u0111")),a&&r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("div",{className:"paid"},r.a.createElement("span",{className:"order-checkbox"},r.a.createElement("input",{type:"checkbox",onChange:function(e){var a=e.target.checked,n={id:t._id,isPaid:a,type:i,paymentId:l};O(n),p(a)},checked:E||t.paid,disabled:h}),r.a.createElement("span",{className:N()("check-mask",{"is-disabled":h})}))),!c&&r.a.createElement("span",{className:"delete",onClick:function(){return A(!0)}},r.a.createElement("img",{src:q.a,alt:"delete-order"}))),r.a.createElement(ce.a,{className:"order-item__modal",visible:D,onCancel:F,footer:[r.a.createElement(Ee.a,{size:"large",key:"back",onClick:F},"\u0110\xf3ng"),r.a.createElement(Ee.a,{key:"submit",size:"large",type:"primary",loading:L,onClick:function(){I(t)}},"Xo\xe1")]},r.a.createElement("p",null,"B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n xo\xe1 ch\u1ee9???")))},Se=(a(201),function(){var e=v(),t=Object(u.a)(e,2),a=t[0].orders,c=a.orderList,i=a.isOrdersLoading,l=t[1],s="admin"===localStorage.getItem("roles");Object(n.useEffect)((function(){(function(){var e=Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l({type:"GET_ORDERS_REQUEST"}),e.prev=1,e.next=4,z.get("/orders/list").then((function(e){return e.data}));case 4:t=e.sent,l(Q(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"GET_ORDERS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[l]);var o=c.sort((function(e,t){return e.dish.name.localeCompare(t.name)})),E=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e.reduce((function(e,n){var r=n[t];return"object"===typeof r&&a?(e[r[a]]=e[r[a]]||[],e[r[a]].push(n)):(e[r]=e[r]||[],e[r].push(n)),e}),{})}(c.map((function(e){return{quantity:e.quantity,dishName:e.dish.name,price:35}})),"dishName"),p=Object.keys(E).map((function(e){return{name:e,qty:E[e].reduce((function(e,t){return e+t.quantity}),0),price:E[e].reduce((function(e,t){return e+t.price*t.quantity}),0)}})),O=p.reduce((function(e,t){return e+t.qty}),0),g=p.reduce((function(e,t){return e+t.price}),0);return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"order-wrapper"},r.a.createElement("h1",{className:"order-title"},"Orders List"),i&&r.a.createElement("img",{className:"icon-loading",src:T.a,alt:"loading-spinner"}),0!==o.length&&r.a.createElement("div",{className:"order-total"},r.a.createElement("h3",{className:"title"},"Total List"),r.a.createElement("div",{className:"header"},r.a.createElement("span",null,"T\xean m\xf3n"),r.a.createElement("span",null,"S\u1ed1 L\u01b0\u1ee3ng"),r.a.createElement("span",null,"Gi\xe1")),p.map((function(e){return r.a.createElement("div",{key:e.name,className:"item"},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.qty),r.a.createElement("span",null,"".concat(e.price,".000\u0111")))})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"T\u1ed5ng c\u1ed9ng"),r.a.createElement("span",null,O),r.a.createElement("span",null,"".concat(g,".000\u0111")))),0!==o.length&&r.a.createElement("div",{className:"order-content"},r.a.createElement("div",{className:"order-item__header"},r.a.createElement("span",null,"Ng\u01b0\u1eddi Order"),r.a.createElement("span",null,"S\u1ed1 L\u01b0\u1ee3ng"),r.a.createElement("span",{className:"dish-name"},"T\xean M\xf3n"),r.a.createElement("span",null,"Ng\xe0y Order"),r.a.createElement("span",null,"Gi\xe1"),s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"delete"}))),o.map((function(e){return r.a.createElement(Ce,{key:e._id,order:e,isAdmin:s,isAllOrders:!1,type:"date"})})))))}),je=a(618),Re=function(e){var t=e.handleChangeType,a=e.className,n=je.a.Option;return r.a.createElement(je.a,{defaultValue:"date",style:{width:120},onChange:t,className:a},r.a.createElement(n,{value:"date"},"Date"),r.a.createElement(n,{value:"user"},"User"))},Le=a(146),ke=function(e){var t=e.item,a=e.isAdmin,n=e.isAllOrders,c=e.type,i=e.isCheckingPaid,l=t.orders[0].user,s=Object(Le.a)({},l._id,l.username),u=ye(),o=u.checkProviderPaidOrder,d=u.checkPaidOrderAllWeek,m="date"===c;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"order-item__date-title",key:t._id},r.a.createElement("span",null,"".concat(m?M()(t.createdAt).format("ddd DD MMM YYYY"):s[t.user])),r.a.createElement("div",{className:"paid-provider"},r.a.createElement("span",{className:"order-checkbox"},r.a.createElement("input",{type:"checkbox",onChange:m?function(e){var a=e.target.checked;o({id:t._id,isPaid:a})}:function(e){var a=e.target.checked;d({id:t._id,isPaidAllWeek:a,userId:t.user})},checked:t.isPaid,disabled:i}),r.a.createElement("span",{className:N()("check-mask",{"is-disabled":i})})))),r.a.createElement("div",{className:"order-item__header"},r.a.createElement("span",null,"".concat(m?"Ng\u01b0\u1eddi Order":"Ng\xe0y Order")),r.a.createElement("span",null,"S\u1ed1 L\u01b0\u1ee3ng"),r.a.createElement("span",null,"T\xean M\xf3n"),r.a.createElement("span",null,"Gi\xe1"),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"paid"},"Paid"),!n&&r.a.createElement("span",{className:"delete"}))),t.orders.map((function(e){return r.a.createElement(Ce,{key:e._id,order:e,isAdmin:!0,isAllOrders:n,type:c,paymentId:t._id})})),r.a.createElement("div",{className:"order-item__total"},r.a.createElement("span",null,"T\u1ed4NG C\u1ed8NG"),r.a.createElement("span",null,t.totalQty),r.a.createElement("span",null),r.a.createElement("span",{className:"price"},"".concat(t.totalPrice,",000\u0111")),r.a.createElement("span",null)))},Te=function(){var e=v(),t=Object(u.a)(e,2),a=t[0].allOrders,c=a.allOrderList,i=a.isLoading,l=a.isCheckingPaid,s=t[1],o=Object(n.useState)("date"),p=Object(u.a)(o,2),O=p[0],g=p[1],f="admin"===localStorage.getItem("roles"),h=c.map((function(e){var t=e.orders.reduce((function(e,t){return e+35*t.quantity}),0),a=e.orders.reduce((function(e,t){return e+t.quantity}),0);return Object(E.a)(Object(E.a)({},e),{},{totalPrice:t,totalQty:a})})).sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})),_=function(){var e=Object(m.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"GET_ALL_ORDERS_REQUEST"}),e.prev=1,e.next=4,ee(t);case 4:a=e.sent,n=a.filter((function(e){return e.orders.length>0})),s(B(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),s({type:"GET_ALL_ORDERS_FAIL",payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){_("date")}),[s]);return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"order-wrapper"},r.a.createElement(Re,{handleChangeType:function(e){g(e),_(e)},className:"order-filter"}),r.a.createElement("h1",{className:"order-title"},"All Orders List"),i&&r.a.createElement("img",{className:"icon-loading",src:T.a,alt:"loading-spinner"}),0!==h.length&&h.map((function(e){return r.a.createElement(ke,{key:e._id,item:e,isAdmin:f,isAllOrders:!0,isCheckingPaid:l,type:O})}))))},De=function(){var e=v(),t=Object(u.a)(e,2),a=t[0].allOrders,c=a.allOrderList,i=a.isLoading,l=a.isCheckingPaid,s=t[1],o=Object(n.useState)("date"),p=Object(u.a)(o,2),O=p[0],g=p[1],f="admin"===localStorage.getItem("roles"),h=c.map((function(e){var t=e.orders.reduce((function(e,t){return e+35*t.quantity}),0),a=e.orders.reduce((function(e,t){return e+t.quantity}),0);return Object(E.a)(Object(E.a)({},e),{},{totalPrice:t,totalQty:a})})).sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})),_=function(){var e=Object(m.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"GET_ORDERS_HISTORY_REQUEST"}),e.prev=1,e.next=4,te(t);case 4:a=e.sent,n=a.filter((function(e){return e.orders.length>0})),s(V(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),s({type:"GET_ORDERS_HISTORY_FAIL",payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){_("date")}),[s]);return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"order-wrapper"},r.a.createElement(Re,{handleChangeType:function(e){g(e),_(e)},className:"order-filter"}),r.a.createElement("h1",{className:"order-title"},"Orders History"),i&&r.a.createElement("img",{className:"icon-loading",src:T.a,alt:"loading-spinner"}),0!==h.length&&h.map((function(e){return r.a.createElement(ke,{key:e._id,item:e,isAdmin:f,isAllOrders:!0,isCheckingPaid:l,type:O})}))))},Ae=a(306),Ne=a.n(Ae),Ie=function(e){var t=Object(s.h)().search,a=Object(s.g)(),n=Ne.a.parse(t).token||localStorage.getItem("token");return n?(localStorage.setItem("token",n),a.push("/")):window.open(R,"_self"),r.a.createElement("div",null)},Fe=a(312),Pe=function(e){var t=e.component,a=Object(Fe.a)(e,["component"]),n="admin"===localStorage.getItem("roles");return r.a.createElement(s.b,Object.assign({},a,{render:function(e){var a=e.location;return n?r.a.createElement(t,null):r.a.createElement(s.a,{to:{pathname:"/",state:{from:a}}})}}))},we=a(307),Ue=a.n(we),xe=(a(615),a(616),a(285),function(){return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/lunch-ordering-fe",className:"main-logo"},r.a.createElement("img",{src:Ue.a,alt:"logo"})),r.a.createElement(l.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(pe,null)),r.a.createElement(s.b,{path:"/orders"},r.a.createElement(Se,null)),r.a.createElement(s.b,{path:"/login"},r.a.createElement(Ie,null)),r.a.createElement(Pe,{path:"/all-orders",component:Te}),r.a.createElement(Pe,{path:"/orders-history",component:De})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null,r.a.createElement(xe,null)),document.getElementById("root"))}},[[313,1,2]]]);
//# sourceMappingURL=main.116a83ff.chunk.js.map