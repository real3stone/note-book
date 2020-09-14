(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{1471:function(s,t,a){"use strict";a.r(t);var e=a(20),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"分页搜索、deep-paging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分页搜索、deep-paging"}},[s._v("#")]),s._v(" 分页搜索、deep paging")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#分页语法"}},[s._v("分页语法")])]),e("li",[e("a",{attrs:{href:"#deep-paging"}},[s._v("deep paging")])])])]),e("p"),s._v(" "),e("ol",[e("li",[s._v("讲解如何使用es进行分页搜索的语法")]),s._v(" "),e("li",[s._v("什么是deep paging问题？为什么会产生这个问题，它的底层原理是什么？")])]),s._v(" "),e("h2",{attrs:{id:"分页语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分页语法"}},[s._v("#")]),s._v(" 分页语法")]),s._v(" "),e("p",[s._v("由以下两个参数控制：")]),s._v(" "),e("ul",[e("li",[s._v("from：从那一条数据开始？")]),s._v(" "),e("li",[s._v("size：获取多少条")])]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("GET /_search?size="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nGET /_search?size="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("&from="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nGET /_search?size="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("&from="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("GET /test_index/test_type/_search\n\n---------- 响应\n\n"),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hits"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"total"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"max_score"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hits"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("这里还是证明了前面某一章节解释 hits.total 解释错的。这里的数量就是这次你查询的总数量")])]),s._v(" "),e("p",[s._v("对于这 8 条数据进行每页 3 条数据的分页，大致是以下请求")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("GET /test_index/test_type/_search?from="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("&size="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nGET /test_index/test_type/_search?from="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("&size="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nGET /test_index/test_type/_search?from="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("&size="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"deep-paging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deep-paging"}},[s._v("#")]),s._v(" deep paging")]),s._v(" "),e("p",[s._v("什么是 deep paging ？")]),s._v(" "),e("p",[s._v("看下图，记住一个知识点：分页搜索 10 条数据，在搜索深分页（比如 10000 条以后的数据），\n每个节点会返回 10000+ 条数据进行排序后再选中其中的 10 条数据返回；")]),s._v(" "),e("p",[s._v("这资源耗费是很大的，就如同 mycat 中的分页是一个原理，需要协调节点来聚合并返回结果，但是这个 es 是怎么解决的呢?")]),s._v(" "),e("p",[e("img",{attrs:{src:a(597),alt:""}})])])}),[],!1,null,null,null);t.default=n.exports},597:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-20190112170019724.63319ce3.png"}}]);