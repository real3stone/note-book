(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1194:function(s,t,e){"use strict";e.r(t);var r=e(20),_=Object(r.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"_068-缓存冷启动问题-新系统上线-redis-彻底崩溃导致数据无法恢复"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_068-缓存冷启动问题-新系统上线-redis-彻底崩溃导致数据无法恢复"}},[s._v("#")]),s._v(" 068. 缓存冷启动问题：新系统上线 redis 彻底崩溃导致数据无法恢复")]),s._v(" "),r("p",[s._v("什么是缓存冷启动？简单说就是缓存中没有数据，考虑下面两个场景")]),s._v(" "),r("ol",[r("li",[s._v("新系统第一次上线，此时在缓存里可能是没有数据的")]),s._v(" "),r("li",[s._v("系统在线上稳定运行着，但是突然间重要的 redis 缓存全盘崩溃了，而且不幸的是，数据全都无法找回来")])]),s._v(" "),r("p",[s._v("系统第一次上线启动，系统在 redis 故障的情况下重新启动，在高并发的场景下就会出现所有的流量\n都会打到 mysql（原始数据库） 上去。可能导致 mysql 崩溃")]),s._v(" "),r("p",[s._v("以下是图示：")]),s._v(" "),r("p",[r("img",{attrs:{src:e(380),alt:""}})]),s._v(" "),r("p",[s._v("本章要主题的点是 "),r("strong",[s._v("「冷启动」")]),s._v("，是说缓存中没有数据但是缓存短时间又恢复正常后的流量被大量打到 mysql。")]),s._v(" "),r("p",[s._v("那么还有一种情况是「缓存雪崩」，可能是缓存失效、redis 挂了等，流量被大量打到 mysql 中")]),s._v(" "),r("p",[s._v("注意这两个场景的关注点是不同的。")])])}),[],!1,null,null,null);t.default=_.exports},380:function(s,t,e){s.exports=e.p+"assets/img/markdown-img-paste-20190519221440219.73ab659c.png"}}]);