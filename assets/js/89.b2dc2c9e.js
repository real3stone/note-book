(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1178:function(t,a,s){"use strict";s.r(a);var _=s(20),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_046-缓存数据生产服务的工作流程分析以及工程环境搭建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_046-缓存数据生产服务的工作流程分析以及工程环境搭建"}},[t._v("#")]),t._v(" 046. 缓存数据生产服务的工作流程分析以及工程环境搭建")]),t._v(" "),_("p",[t._v("接下来要做这个多级缓存架构，从底往上做，先做缓存数据的生产这一块")]),t._v(" "),_("h2",{attrs:{id:"商品详情页缓存数据生产服务的工作流程分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#商品详情页缓存数据生产服务的工作流程分析"}},[t._v("#")]),t._v(" 商品详情页缓存数据生产服务的工作流程分析")]),t._v(" "),_("p",[_("img",{attrs:{src:s(377),alt:""}})]),t._v(" "),_("p",[t._v("如上图")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("监听多个 kafka topic，每个 kafka topic 对应一个服务")]),t._v(" "),_("p",[t._v("简化一下，监听一个 kafka topic")])]),t._v(" "),_("li",[_("p",[t._v("如果一个服务发生了数据变更，那么就发送一个消息到 kafka topic 中")])]),t._v(" "),_("li",[_("p",[t._v("缓存数据生产服务监听到了消息以后，就发送请求到对应的服务中调用接口以及拉取数据，此时是从 mysql 中查询的")])]),t._v(" "),_("li",[_("p",[t._v("缓存数据生产服务拉取到了数据之后，会将数据在本地缓存中写入一份，就是 ehcache 中")])]),t._v(" "),_("li",[_("p",[t._v("同时会将数据在 redis 中写入一份")])])]),t._v(" "),_("p",[t._v("而缓存数据生产服务是前两层（nginx、redis）的基石")]),t._v(" "),_("h2",{attrs:{id:"创建缓存数据生产服务项目"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创建缓存数据生产服务项目"}},[t._v("#")]),t._v(" 创建缓存数据生产服务项目")]),t._v(" "),_("p",[t._v("项目名：eshop-cache")]),t._v(" "),_("p",[t._v("项目基础架子可以参考 "),_("RouterLink",{attrs:{to:"/cache-pdp/039.html"}},[t._v("039. 库存服务的开发框架整合与搭建：spring boot + mybatis + jedis")])],1),t._v(" "),_("p",[t._v("除了包名不同，基础架子就是 spring boot + mybatis + jedis 整合的架子")]),t._v(" "),_("p",[t._v("搭建好后：可以访问 http://localhost:6002/")])])}),[],!1,null,null,null);a.default=e.exports},377:function(t,a,s){t.exports=s.p+"assets/img/markdown-img-paste-20190406223623994.a14f8f5c.png"}}]);