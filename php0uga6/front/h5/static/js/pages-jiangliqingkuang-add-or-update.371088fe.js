(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jiangliqingkuang-add-or-update"],{"0055":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-5747ae86]{padding:%?20?%}.content[data-v-5747ae86]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-5747ae86]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-5747ae86]{width:%?180?%}.avator[data-v-5747ae86]{width:%?150?%;height:%?60?%}.right-input[data-v-5747ae86]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-5747ae86]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-5747ae86]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-5747ae86]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-5747ae86]{border:0}.cu-form-group uni-input[data-v-5747ae86]{padding:0 %?30?%}.uni-input[data-v-5747ae86]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-5747ae86]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-5747ae86]::after{line-height:%?88?%}.select .uni-input[data-v-5747ae86]{line-height:%?88?%}.input .right-input[data-v-5747ae86]{line-height:%?110?%}',""]),e.exports=r},1440:function(e,r,t){"use strict";t.r(r);var i=t("76a8"),n=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(r,e,(function(){return i[e]}))}(o);r["default"]=n.a},"76a8":function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("a481"),t("c5f6"),t("f559"),t("ac6a"),t("96cf");var n=i(t("3b8d")),o=i(t("e2b1")),a={data:function(){return{cross:"",ruleForm:{shetuanmingcheng:"",huodongfenlei:"",huodongmingcheng:"",zhanghao:"",xingming:"",jianglijifen:"",dengjishijian:"",userid:""},user:{},ro:{shetuanmingcheng:!1,huodongfenlei:!1,huodongmingcheng:!1,zhanghao:!1,xingming:!1,jianglijifen:!1,dengjishijian:!1,userid:!1}}},components:{wPicker:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var t,i,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.dengjishijian=this.$utils.getCurDateTime(),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:if(i=e.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=14;break}return this.ruleForm.id=r.id,e.next=12,this.$api.info("jiangliqingkuang",this.ruleForm.id);case 12:i=e.sent,this.ruleForm=i.data;case 14:if(this.cross=r.cross,!r.cross){e.next=54;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 18:if((e.t1=e.t0()).done){e.next=54;break}if(o=e.t1.value,"shetuanmingcheng"!=o){e.next=24;break}return this.ruleForm.shetuanmingcheng=n[o],this.ro.shetuanmingcheng=!0,e.abrupt("continue",18);case 24:if("huodongfenlei"!=o){e.next=28;break}return this.ruleForm.huodongfenlei=n[o],this.ro.huodongfenlei=!0,e.abrupt("continue",18);case 28:if("huodongmingcheng"!=o){e.next=32;break}return this.ruleForm.huodongmingcheng=n[o],this.ro.huodongmingcheng=!0,e.abrupt("continue",18);case 32:if("zhanghao"!=o){e.next=36;break}return this.ruleForm.zhanghao=n[o],this.ro.zhanghao=!0,e.abrupt("continue",18);case 36:if("xingming"!=o){e.next=40;break}return this.ruleForm.xingming=n[o],this.ro.xingming=!0,e.abrupt("continue",18);case 40:if("jianglijifen"!=o){e.next=44;break}return this.ruleForm.jianglijifen=n[o],this.ro.jianglijifen=!0,e.abrupt("continue",18);case 44:if("dengjishijian"!=o){e.next=48;break}return this.ruleForm.dengjishijian=n[o],this.ro.dengjishijian=!0,e.abrupt("continue",18);case 48:if("userid"!=o){e.next=52;break}return this.ruleForm.userid=n[o],this.ro.userid=!0,e.abrupt("continue",18);case 52:e.next=18;break;case 54:this.styleChange();case 55:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},dengjishijianConfirm:function(e){console.log(e),this.ruleForm.dengjishijian=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var r,t,i,n,o,a,s,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.cross){e.next=16;break}if(n=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==n){e.next=16;break}if(a=uni.getStorageSync("crossObj"),n.startsWith("[")){e.next=12;break}for(s in a)s==n&&(a[s]=o);return u=uni.getStorageSync("crossTable"),e.next=10,this.$api.update("".concat(u),a);case 10:e.next=16;break;case 12:r=Number(uni.getStorageSync("userid")),t=a["id"],i=uni.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 16:if(!t||!r){e.next=38;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=t,l={page:1,limit:10,crossuserid:r,crossrefid:t},e.next=22,this.$api.list("jiangliqingkuang",l);case 22:if(d=e.sent,!(d.data.total>=i)){e.next=28;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 28:if(!this.ruleForm.id){e.next=33;break}return e.next=31,this.$api.update("jiangliqingkuang",this.ruleForm);case 31:e.next=35;break;case 33:return e.next=35,this.$api.add("jiangliqingkuang",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:e.next=46;break;case 38:if(!this.ruleForm.id){e.next=43;break}return e.next=41,this.$api.update("jiangliqingkuang",this.ruleForm);case 41:e.next=45;break;case 43:return e.next=45,this.$api.add("jiangliqingkuang",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,n=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=a},"7b51":function(e,r,t){var i=t("0055");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("4e0a8b12",i,!0,{sourceMap:!1,shadowMode:!1})},acce:function(e,r,t){"use strict";var i={"w-picker":t("e2b1").default},n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("社团名称")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.shetuanmingcheng,placeholder:"社团名称"},model:{value:e.ruleForm.shetuanmingcheng,callback:function(r){e.$set(e.ruleForm,"shetuanmingcheng",r)},expression:"ruleForm.shetuanmingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("活动分类")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.huodongfenlei,placeholder:"活动分类"},model:{value:e.ruleForm.huodongfenlei,callback:function(r){e.$set(e.ruleForm,"huodongfenlei",r)},expression:"ruleForm.huodongfenlei"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("活动名称")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.huodongmingcheng,placeholder:"活动名称"},model:{value:e.ruleForm.huodongmingcheng,callback:function(r){e.$set(e.ruleForm,"huodongmingcheng",r)},expression:"ruleForm.huodongmingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("账号")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.zhanghao,placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(r){e.$set(e.ruleForm,"zhanghao",r)},expression:"ruleForm.zhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(r){e.$set(e.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("奖励积分")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.jianglijifen,placeholder:"奖励积分"},model:{value:e.ruleForm.jianglijifen,callback:function(r){e.$set(e.ruleForm,"jianglijifen",r)},expression:"ruleForm.jianglijifen"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("登记时间")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{placeholder:"登记时间"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.toggleTab("dengjishijian")}},model:{value:e.ruleForm.dengjishijian,callback:function(r){e.$set(e.ruleForm,"dengjishijian",r)},expression:"ruleForm.dengjishijian"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"160rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),t("w-picker",{ref:"dengjishijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.dengjishijianConfirm.apply(void 0,arguments)}}})],1)},o=[];t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return o})),t.d(r,"a",(function(){return i}))},c5e4:function(e,r,t){"use strict";t.r(r);var i=t("acce"),n=t("1440");for(var o in n)"default"!==o&&function(e){t.d(r,e,(function(){return n[e]}))}(o);t("e14f");var a,s=t("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"5747ae86",null,!1,i["a"],a);r["default"]=u.exports},e14f:function(e,r,t){"use strict";var i=t("7b51"),n=t.n(i);n.a}}]);