(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-order"],{"0434":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".uni-countdown[data-v-c794120e]{padding:%?2?% 0;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-countdown__splitor[data-v-c794120e]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?44?%;padding:0 %?5?%;font-size:%?28?%}.uni-countdown__number[data-v-c794120e]{line-height:%?44?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?44?%;border-radius:%?6?%;margin:0 %?5?%;font-size:%?28?%;border:1px solid #000;font-size:%?24?%;padding:0 %?10?%}",""]),e.exports=t},"0e84":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c5f6");var r={name:"rfCountDown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},created:function(e){var t=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(e,t,n,r){return 60*e*60*24+60*t*60+60*n+r},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var e=this.seconds,t=0,n=0,r=0,i=0;e>0?(t=Math.floor(e/86400),n=Math.floor(e/3600)-24*t,r=Math.floor(e/60)-24*t*60-60*n,i=Math.floor(e)-24*t*60*60-60*n*60-60*r):this.timeUp(),t<10&&(t="0"+t),n<10&&(n="0"+n),r<10&&(r="0"+r),i<10&&(i="0"+i),this.d=t,this.h=n,this.i=r,this.s=i}}};t.default=r},"13c2":function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("75fc"));n("96cf");var o=r(n("3b8d"));n("ac6a");var a=r(n("f97d")),s=r(n("5028")),d=n("802d"),c=r(n("18aa")),u=n("c4c8"),l=r(n("93f4")),v={components:{rfLoadMore:a.default,rfCountDown:c.default},data:function(){return{tabCurrentIndex:0,loadingType:"more",navList:this.$mConstDataConfig.orderNavList,orderList:[],page:1,loading:!0,isRefreshing:!0,guessYouLikeList:[]}},computed:{second:function(){return function(e){return Math.floor(890-(new Date/1e3-e))}}},filters:{time:function(e){return(0,s.default)(1e3*e).format("YYYY-MM-DD HH:mm:ss")},orderStatusFilter:function(e){var t;return l.default.orderStatus.forEach((function(n){n.key==parseInt(e,10)&&(t=n.value)})),t}},onShow:function(){this.page=1,this.orderList.length=0,this.initData()},onLoad:function(e){this.tabCurrentIndex=+e.state+1},onPullDownRefresh:function(){this.page=1,this.orderList.length=0,this.getOrderList("refresh")},onReachBottom:function(){this.page++,this.getOrderList()},methods:{timeUp:function(e){this.isRefreshing&&(this.isRefreshing=!1,this.handleOrderClose(e.id))},handleOrderOperation:function(e,t){switch(t){case"detail":this.navTo("/pages/order/detail?id=".concat(e.id));break;case"evaluation":this.navTo("/pages/order/evaluation/evaluation?order_id=".concat(e.id));break;case"close":this.handleOrderClose(e.id);break;case"delete":this.handleOrderDelete(e.id);break;case"shipping":this.navTo("/pages/order/shipping/shipping?id=".concat(e.id));break;case"delivery":this.handleOrderTakeDelivery(e.id);break}},navTo:function(e){this.$mRouter.push({route:e})},handleOrderClose:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("".concat(u.orderClose),{id:t}).then((function(){n.isRefreshing=!0,n.$mHelper.toast("订单取消成功"),setTimeout((function(){n.loading=!0,n.page=1,n.orderList.length=0,n.getOrderList()}),500)}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleOrderDelete:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.delete("".concat(d.orderDelete,"?id=").concat(t),{}).then((function(){n.$mHelper.toast("订单删除成功"),setTimeout((function(){n.page=1,n.orderList.length=0,n.getOrderList()}),500)}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleOrderTakeDelivery:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("".concat(d.orderTakeDelivery),{id:t}).then((function(){n.page=1,n.orderList.length=0,n.getOrderList()}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),initData:function(){this.getOrderList()},getOrderList:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t){var n,r,a,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.tabCurrentIndex,r=this.navList[n],a={},(r.state||0===r.state)&&(a.synthesize_status=r.state),a.page=this.page,e.next=7,this.$http.get("".concat(d.orderList),a).then(function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("refresh"===t&&uni.stopPullDownRefresh(),s.loadingType=10===n.data.length?"more":"nomore",s.orderList=[].concat((0,i.default)(s.orderList),(0,i.default)(n.data)),0!==s.orderList.length){e.next=6;break}return e.next=6,s.getGuessYouLikeList();case 6:s.loading=!1;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){s.loading=!1,"refresh"===t&&uni.stopPullDownRefresh()}));case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getGuessYouLikeList:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("".concat(u.guessYouLikeList)).then((function(e){t.guessYouLikeList=e.data}));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),changeTab:function(e){this.page=1,this.orderList.length=0,this.tabCurrentIndex=e.target.current,this.loading=!0,this.getOrderList()},tabClick:function(e){this.page=1,this.orderList.length=0,this.tabCurrentIndex=e},getMoreOrderList:function(){this.page++,this.getOrderList()}}};t.default=v},"18aa":function(e,t,n){"use strict";n.r(t);var r=n("bfdd"),i=n("3b59");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("d30f");var a,s=n("f0c5"),d=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"c794120e",null,!1,r["a"],a);t["default"]=d.exports},"1af6":function(e,t,n){var r=n("63b6");r(r.S,"Array",{isArray:n("9003")})},"20fd":function(e,t,n){"use strict";var r=n("d9f6"),i=n("aebd");e.exports=function(e,t,n){t in e?r.f(e,t,i(0,n)):e[t]=n}},"35c5":function(e,t,n){"use strict";var r=n("739c"),i=n.n(r);i.a},3773:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"rf-load-more"},["loading"===e.status&&e.showIcon?n("v-uni-view",{staticClass:"rf-load-more__img"},[n("v-uni-view",{staticClass:"load1"},[n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}})],1),n("v-uni-view",{staticClass:"load2"},[n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}})],1),n("v-uni-view",{staticClass:"load3"},[n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}}),n("v-uni-view",{style:{background:e.color}})],1)],1):e._e(),n("v-uni-view",{staticClass:"cu-load",class:"more"===e.status?"loading":"over"})],1)},o=[]},"3b59":function(e,t,n){"use strict";n.r(t);var r=n("0e84"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},"49fe":function(e,t,n){var r=n("b9f1");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("9c41e922",r,!0,{sourceMap:!1,shadowMode:!1})},"4f8d":function(e,t,n){"use strict";var r=n("49fe"),i=n.n(r);i.a},"549b":function(e,t,n){"use strict";var r=n("d864"),i=n("63b6"),o=n("241e"),a=n("b0dc"),s=n("3702"),d=n("b447"),c=n("20fd"),u=n("7cd6");i(i.S+i.F*!n("4ee1")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,i,l,v=o(e),f="function"==typeof this?this:Array,p=arguments.length,h=p>1?arguments[1]:void 0,b=void 0!==h,m=0,y=u(v);if(b&&(h=r(h,p>2?arguments[2]:void 0,2)),void 0==y||f==Array&&s(y))for(t=d(v.length),n=new f(t);t>m;m++)c(n,m,b?h(v[m],m):v[m]);else for(l=y.call(v),n=new f;!(i=l.next()).done;m++)c(n,m,b?a(l,h,[i.value,m],!0):i.value);return n.length=m,n}})},"54a1":function(e,t,n){n("6c1c"),n("1654"),e.exports=n("95d5")},"60c5":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".rf-load-more[data-v-6b77d1cb]{width:100vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center\n\t/*position: fixed;*/\n\t/*bottom: 5upx;*/\n\t/*text-align: center;*/}.rf-load-more__text[data-v-6b77d1cb]{font-size:%?28?%;color:#999}.rf-load-more__img[data-v-6b77d1cb]{height:24px;width:24px;margin-right:10px}.rf-load-more__img>uni-view[data-v-6b77d1cb]{position:absolute}.rf-load-more__img>uni-view uni-view[data-v-6b77d1cb]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-6b77d1cb 1.56s ease infinite;animation:load-data-v-6b77d1cb 1.56s ease infinite}.rf-load-more__img>uni-view uni-view[data-v-6b77d1cb]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.rf-load-more__img>uni-view uni-view[data-v-6b77d1cb]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.rf-load-more__img>uni-view uni-view[data-v-6b77d1cb]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.rf-load-more__img>uni-view uni-view[data-v-6b77d1cb]:nth-child(4){top:11px;left:0}.load1[data-v-6b77d1cb],\n.load2[data-v-6b77d1cb],\n.load3[data-v-6b77d1cb]{height:24px;width:24px}.load2[data-v-6b77d1cb]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-6b77d1cb]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-6b77d1cb]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-6b77d1cb]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-6b77d1cb]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-6b77d1cb]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-6b77d1cb]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-6b77d1cb]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-6b77d1cb]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-6b77d1cb]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-6b77d1cb]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-6b77d1cb]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-6b77d1cb]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-6b77d1cb]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-6b77d1cb{0%{opacity:1}100%{opacity:.2}}",""]),e.exports=t},6872:function(e,t,n){"use strict";n.r(t);var r=n("9088"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},"739c":function(e,t,n){var r=n("60c5");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("90487f64",r,!0,{sourceMap:!1,shadowMode:!1})},"75fc":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("a745"),i=n.n(r);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){if(i()(e))return o(e)}var s=n("774e"),d=n.n(s),c=n("c8bb"),u=n.n(c),l=n("67bb"),v=n.n(l);function f(e){if("undefined"!==typeof v.a&&u()(Object(e)))return d()(e)}function p(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?d()(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(e){return a(e)||f(e)||p(e)||h()}},"774e":function(e,t,n){e.exports=n("d2d5")},"802d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.orderProductIndex=t.orderCustomerRefundClose=t.orderCustomerRefundApply=t.orderCustomerSalesReturn=t.rechargeConfigIndex=t.thirdPartyAuthDelete=t.thirdPartyAuthList=t.opinionDetail=t.opinionCreate=t.opinionList=t.uploadImage=t.orderInvoiceList=t.invoiceDel=t.invoiceDefault=t.invoiceDetail=t.invoiceUpdate=t.invoiceCreate=t.invoiceList=t.evaluateAgain=t.evaluateCreate=t.creditsLogList=t.collectList=t.footPrintDel=t.footPrintList=t.couponReceive=t.orderTakeDelivery=t.orderDelete=t.orderDetail=t.orderProductSalesReturn=t.closeOrderRefundApply=t.orderRefundApply=t.orderList=t.couponDetail=t.couponClear=t.myCouponList=t.couponList=t.addressDelete=t.addressUpdate=t.addressDetail=t.addressDefault=t.addressCreate=t.addressList=t.memberUpdate=t.memberInfo=void 0;var r="/tiny-shop/v1/member/member/index";t.memberInfo=r;var i="/tiny-shop/v1/member/member/update";t.memberUpdate=i;var o="/tiny-shop/v1/member/address/index";t.addressList=o;var a="/tiny-shop/v1/member/address/default";t.addressDefault=a;var s="/tiny-shop/v1/member/address/view";t.addressDetail=s;var d="/tiny-shop/v1/member/address/create";t.addressCreate=d;var c="/tiny-shop/v1/member/address/update";t.addressUpdate=c;var u="/tiny-shop/v1/member/address/delete";t.addressDelete=u;var l="/tiny-shop/v1/marketing/coupon-type/index";t.couponList=l;var v="/tiny-shop/v1/member/coupon/index";t.myCouponList=v;var f="/tiny-shop/v1/marketing/coupon-type/view";t.couponDetail=f;var p="/tiny-shop/v1/marketing/coupon-type/create";t.couponReceive=p;var h="/tiny-shop/v1/member/coupon/clear";t.couponClear=h;var b="/tiny-shop/v1/member/order/index";t.orderList=b;var m="/tiny-shop/v1/member/order/take-delivery";t.orderTakeDelivery=m;var y="/tiny-shop/v1/member/order-product/refund-apply";t.orderRefundApply=y;var g="/tiny-shop/v1/member/order-product/refund-sales-return";t.orderProductSalesReturn=g;var w="/tiny-shop/v1/member/order-product/refund-close";t.closeOrderRefundApply=w;var _="/tiny-shop/v1/member/order/view";t.orderDetail=_;var x="/tiny-shop/v1/member/order/delete";t.orderDelete=x;var k="/tiny-shop/v1/member/footprint/index";t.footPrintList=k;var C="/tiny-shop/v1/member/footprint/delete";t.footPrintDel=C;var L="/tiny-shop/v1/member/collect/index";t.collectList=L;var D="/tiny-shop/v1/member/credits-log/index";t.creditsLogList=D;var O="/tiny-shop/v1/member/evaluate/create";t.evaluateCreate=O;var R="/tiny-shop/v1/member/evaluate/again";t.evaluateAgain=R;var I="/tiny-shop/v1/member/order-product/index";t.orderProductIndex=I;var $="/tiny-shop/v1/member/invoice/index";t.invoiceList=$;var A="/tiny-shop/v1/member/invoice/create";t.invoiceCreate=A;var P="/tiny-shop/v1/member/invoice/update";t.invoiceUpdate=P;var j="/tiny-shop/v1/member/invoice/view";t.invoiceDetail=j;var M="/tiny-shop/v1/member/invoice/default";t.invoiceDefault=M;var S="/tiny-shop/v1/member/invoice/delete";t.invoiceDel=S;var T="/tiny-shop/v1/member/order-invoice/index";t.orderInvoiceList=T;var E="/tiny-shop/v1/member/opinion/index";t.opinionList=E;var F="/tiny-shop/v1/member/opinion/create";t.opinionCreate=F;var U="/tiny-shop/v1/member/opinion/view";t.opinionDetail=U;var Y="/tiny-shop/v1/member/auth/index";t.thirdPartyAuthList=Y;var z="/tiny-shop/v1/member/auth/delete";t.thirdPartyAuthDelete=z;var N="/tiny-shop/v1/member/recharge-config/index";t.rechargeConfigIndex=N;var B="/tiny-shop/v1/member/order-customer/apply";t.orderCustomerRefundApply=B;var H="/tiny-shop/v1/member/order-customer/sales-return";t.orderCustomerSalesReturn=H;var G="/tiny-shop/v1/member/order-customer/close";t.orderCustomerRefundClose=G;var J="/tiny-shop/v1/common/file/images";t.uploadImage=J},9088:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"rf-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{}}}},data:function(){return{}}};t.default=r},9156:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var r={"rf-load-more":n("f97d").default,"rf-loading":n("a7c6").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"navbar"},e._l(e.navList,(function(t,r){return n("v-uni-view",{key:r,staticClass:"nav-item",class:{current:e.tabCurrentIndex===r},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tabClick(r)}}},[e._v(e._s(t.text))])})),1),n("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:e.tabCurrentIndex,duration:"300"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTab.apply(void 0,arguments)}}},e._l(e.navList,(function(t,r){return n("v-uni-swiper-item",{key:r,staticClass:"tab-content"},[n("v-uni-scroll-view",{staticClass:"list-scroll-content",attrs:{"scroll-y":!0},on:{scrolltolower:function(t){arguments[0]=t=e.$handleEvent(t),e.getMoreOrderList.apply(void 0,arguments)}}},[e._l(e.orderList,(function(t,r){return n("v-uni-view",{key:r,staticClass:"rf-order-item"},[n("v-uni-view",{staticClass:"i-top b-b"},[n("v-uni-text",{staticClass:"time in1line"},[e._v("订单号："+e._s(t.order_sn))]),0!==parseInt(t.order_status,10)?n("v-uni-text",{staticClass:"state"},[e._v(e._s(e._f("orderStatusFilter")(t.order_status)))]):n("v-uni-view",{staticClass:"example-body"},[n("rf-count-down",{attrs:{"show-day":!1,second:e.second(t.created_at),color:"#FFFFFF","background-color":"#fa436a","border-color":"#fa436a"},on:{timeup:function(n){arguments[0]=n=e.$handleEvent(n),e.timeUp(t)}}})],1)],1),e._l(t.product,(function(r,i){return n("v-uni-view",{key:i,staticClass:"goods-box-single",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.navTo("/pages/product/product?id="+r.product_id)}}},[n("v-uni-image",{staticClass:"goods-img",attrs:{src:r.product_picture,mode:"aspectFill"}}),n("v-uni-view",{staticClass:"right"},[n("v-uni-text",{staticClass:"title in2line"},[e._v(e._s(r.product_name))]),n("v-uni-text",{staticClass:"attr-box"},[e._v(e._s(r.sku_name||"基础版")+" * "+e._s(r.num))]),2==r.point_exchange_type||4==r.point_exchange_type?n("v-uni-text",[n("v-uni-text",{staticClass:"point"},[e._v(e._s(t.point)+"积分")])],1):n("v-uni-text",{staticClass:"price"},[n("v-uni-text",{staticClass:"red"},[e._v(e._s(r.product_money)),0===r.gift_flag?n("v-uni-text",[e._v("+ "+e._s(t.point+"积分"||!1))]):e._e()],1)],1)],1)],1)})),n("v-uni-view",{staticClass:"price-box"},[e._v("共"),n("v-uni-text",{staticClass:"num"},[e._v(e._s(t.product_count))]),e._v("件商品 实付款"),n("v-uni-text",{staticClass:"price"},[e._v(e._s(t.pay_money))])],1),n("v-uni-view",{staticClass:"action-box b-t"},[n("v-uni-button",{staticClass:"action-btn",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleOrderOperation(t,"detail")}}},[e._v("订单详情")]),0==t.order_status?n("v-uni-button",{staticClass:"action-btn",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleOrderOperation(t,"close")}}},[e._v("取消订单")]):e._e(),0==t.order_status?n("v-uni-button",{staticClass:"action-btn recom",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navTo("/pages/user/money/pay?id="+t.id)}}},[e._v("立即支付")]):e._e(),4!=t.order_status&&2!=t.order_status||1==t.product[0].is_virtual?e._e():n("v-uni-button",{staticClass:"action-btn",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleOrderOperation(t,"shipping")}}},[e._v("查看物流")]),2==t.order_status?n("v-uni-button",{staticClass:"action-btn recom",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleOrderOperation(t,"delivery")}}},[e._v("确认收货")]):e._e(),3==t.order_status&&0==t.is_evaluate?n("v-uni-button",{staticClass:"action-btn recom",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleOrderOperation(t,"evaluation")}}},[e._v("批量评价")]):e._e(),-4==t.order_status?n("v-uni-button",{staticClass:"action-btn recom",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleOrderOperation(t,"delete")}}},[e._v("删除订单")]):e._e()],1)],2)})),e.orderList.length>0?n("rf-load-more",{attrs:{status:e.loadingType}}):e._e(),0!==e.orderList.length||e.loading?e._e():n("rf-empty",{attrs:{list:e.guessYouLikeList,info:"暂无订单"}})],2)],1)})),1),e.loading?n("rf-loading"):e._e()],1)},o=[]},"95d5":function(e,t,n){var r=n("40c3"),i=n("5168")("iterator"),o=n("481b");e.exports=n("584a").isIterable=function(e){var t=Object(e);return void 0!==t[i]||"@@iterator"in t||o.hasOwnProperty(r(t))}},a745:function(e,t,n){e.exports=n("f410")},b9f1:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"uni-page-body[data-v-d69f22c2],.content[data-v-d69f22c2]{background:#f8f8f8;height:100%}.swiper-box[data-v-d69f22c2]{height:calc(100% - 40px)}.list-scroll-content[data-v-d69f22c2]{height:100%}.uni-swiper-item[data-v-d69f22c2]{height:auto}body.?%PAGE?%[data-v-d69f22c2]{background:#f8f8f8}",""]),e.exports=t},bfdd:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-countdown"},[e.showDay?n("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:e.borderColor,color:e.color,background:e.backgroundColor}},[e._v(e._s(e.d))]):e._e(),e.showDay?n("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:e.splitorColor}},[e._v("天")]):e._e(),n("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:e.borderColor,color:e.color,background:e.backgroundColor}},[e._v(e._s(e.h))]),n("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:e.splitorColor}},[e._v(e._s(e.showColon?":":"时"))]),n("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:e.borderColor,color:e.color,background:e.backgroundColor}},[e._v(e._s(e.i))]),n("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:e.splitorColor}},[e._v(e._s(e.showColon?":":"分"))]),n("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:e.borderColor,color:e.color,background:e.backgroundColor}},[e._v(e._s(e.s))]),e.showColon?e._e():n("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:e.splitorColor}},[e._v("秒")])],1)},o=[]},c8bb:function(e,t,n){e.exports=n("54a1")},d2d5:function(e,t,n){n("1654"),n("549b"),e.exports=n("584a").Array.from},d30f:function(e,t,n){"use strict";var r=n("e54c"),i=n.n(r);i.a},e54c:function(e,t,n){var r=n("0434");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("bd18dc56",r,!0,{sourceMap:!1,shadowMode:!1})},e8b3:function(e,t,n){"use strict";n.r(t);var r=n("13c2"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},ebc4:function(e,t,n){"use strict";n.r(t);var r=n("9156"),i=n("e8b3");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("4f8d");var a,s=n("f0c5"),d=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"d69f22c2",null,!1,r["a"],a);t["default"]=d.exports},f410:function(e,t,n){n("1af6"),e.exports=n("584a").Array.isArray},f97d:function(e,t,n){"use strict";n.r(t);var r=n("3773"),i=n("6872");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("35c5");var a,s=n("f0c5"),d=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"6b77d1cb",null,!1,r["a"],a);t["default"]=d.exports}}]);