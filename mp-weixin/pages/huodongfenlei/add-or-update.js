(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/huodongfenlei/add-or-update"],{"1f99":function(e,t,n){},"478e":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},o=[]},"53f9":function(e,t,n){"use strict";var r=n("1f99"),a=n.n(r);a.a},"600d":function(e,t,n){"use strict";n.r(t);var r=n("478e"),a=n("e845");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("53f9");var u,i=n("f0c5"),c=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"c41d32b6",null,!1,r["a"],u);t["default"]=c.exports},"9c70":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,r,a,o,u){try{var i=e[o](u),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function i(e){o(u,r,a,i,c,"next",e)}function c(e){o(u,r,a,i,c,"throw",e)}i(void 0)}))}}var i=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("baa7"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{cross:"",ruleForm:{huodongfenlei:""},user:{},ro:{huodongfenlei:!1}}},components:{wPicker:i},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var n=this;return u(r.default.mark((function a(){var o,u,i,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=e.getStorageSync("nowTable"),a.next=3,n.$api.session(o);case 3:if(u=a.sent,n.user=u.data,n.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(n.ruleForm.refid=t.refid,n.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){a.next=13;break}return n.ruleForm.id=t.id,a.next=11,n.$api.info("huodongfenlei",n.ruleForm.id);case 11:u=a.sent,n.ruleForm=u.data;case 13:if(n.cross=t.cross,!t.cross){a.next=25;break}i=e.getStorageSync("crossObj"),a.t0=r.default.keys(i);case 17:if((a.t1=a.t0()).done){a.next=25;break}if(c=a.t1.value,"huodongfenlei"!=c){a.next=23;break}return n.ruleForm.huodongfenlei=i[c],n.ro.huodongfenlei=!0,a.abrupt("continue",17);case 23:a.next=17;break;case 25:n.styleChange();case 26:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return u(r.default.mark((function n(){var a,o,u,i,c,s,f,l,d,g;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.cross){n.next=16;break}if(i=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==i){n.next=16;break}if(s=e.getStorageSync("crossObj"),i.startsWith("[")){n.next=12;break}for(f in s)f==i&&(s[f]=c);return l=e.getStorageSync("crossTable"),n.next=10,t.$api.update("".concat(l),s);case 10:n.next=16;break;case 12:a=Number(e.getStorageSync("userid")),o=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!o||!a){n.next=38;break}return t.ruleForm.crossuserid=a,t.ruleForm.crossrefid=o,d={page:1,limit:10,crossuserid:a,crossrefid:o},n.next=22,t.$api.list("huodongfenlei",d);case 22:if(g=n.sent,!(g.data.total>=u)){n.next=28;break}return t.$utils.msg(e.getStorageSync("tips")),n.abrupt("return",!1);case 28:if(!t.ruleForm.id){n.next=33;break}return n.next=31,t.$api.update("huodongfenlei",t.ruleForm);case 31:n.next=35;break;case 33:return n.next=35,t.$api.add("huodongfenlei",t.ruleForm);case 35:t.$utils.msgBack("提交成功");case 36:n.next=46;break;case 38:if(!t.ruleForm.id){n.next=43;break}return n.next=41,t.$api.update("huodongfenlei",t.ruleForm);case 41:n.next=45;break;case 43:return n.next=45,t.$api.add("huodongfenlei",t.ruleForm);case 45:t.$utils.msgBack("提交成功");case 46:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(n,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},a382:function(e,t,n){"use strict";(function(e){n("cb25");r(n("66fd"));var t=r(n("600d"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},e845:function(e,t,n){"use strict";n.r(t);var r=n("9c70"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a}},[["a382","common/runtime","common/vendor"]]]);