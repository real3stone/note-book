(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{1389:function(a,s,e){"use strict";e.r(s);var t=e(20),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"_023-redis-哨兵的多个核心底层原理的深入解析-包含-slave-选举算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_023-redis-哨兵的多个核心底层原理的深入解析-包含-slave-选举算法"}},[a._v("#")]),a._v(" 023. redis 哨兵的多个核心底层原理的深入解析（包含 slave 选举算法）")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#sdown-和-odown-转换机制"}},[a._v("sdown 和 odown 转换机制")])]),e("li",[e("a",{attrs:{href:"#哨兵集群的自动发现机制"}},[a._v("哨兵集群的自动发现机制")])]),e("li",[e("a",{attrs:{href:"#slave-配置的自动纠正"}},[a._v("slave 配置的自动纠正")])]),e("li",[e("a",{attrs:{href:"#slave-master-选举算法"}},[a._v("slave->master 选举算法")])]),e("li",[e("a",{attrs:{href:"#quorum-和-majority"}},[a._v("quorum 和 majority")])]),e("li",[e("a",{attrs:{href:"#configuration-epoch"}},[a._v("configuration epoch")])]),e("li",[e("a",{attrs:{href:"#configuraiton-传播"}},[a._v("configuraiton 传播")])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"sdown-和-odown-转换机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sdown-和-odown-转换机制"}},[a._v("#")]),a._v(" sdown 和 odown 转换机制")]),a._v(" "),e("p",[a._v("sdown 和 odown 是两种失败状态")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("sdown 是主观宕机")]),a._v(" "),e("p",[a._v("一个哨兵如果自己觉得一个 master 宕机了，那么就是主观宕机")])]),a._v(" "),e("li",[e("p",[a._v("odown 是客观宕机\n如果 quorum 数量的哨兵都觉得一个 master 宕机了，那么就是客观宕机")])])]),a._v(" "),e("p",[a._v("sdown 达成的条件很简单，如果一个哨兵 ping 一个 master，超过了 is-master-down-after-milliseconds（在哨兵配置文件中配置的） 指定的毫秒数之后，就主观认为 master 宕机")]),a._v(" "),e("p",[a._v("sdown 到 odown 转换的条件很简单，如果一个哨兵在指定时间内，收到了 quorum 指定数量的其他哨兵也认为那个 master 是 sdown 了，那么就认为是 odown 了，客观认为 master 宕机")]),a._v(" "),e("h2",{attrs:{id:"哨兵集群的自动发现机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#哨兵集群的自动发现机制"}},[a._v("#")]),a._v(" 哨兵集群的自动发现机制")]),a._v(" "),e("p",[a._v("哨兵互相之间的发现，是通过 redis 的 pub/sub 系统实现的，每个哨兵都会往 "),e("code",[a._v("__sentinel__:hello")]),a._v(" 这个 channel 里发送一个消息，这时候所有其他哨兵都可以消费到这个消息，并感知到其他的哨兵的存在")]),a._v(" "),e("p",[a._v("每隔两秒钟，每个哨兵都会往自己监控的某个 master+slaves 对应的 "),e("code",[a._v("__sentinel__:hello channel")]),a._v(" 里发送一个消息，内容是自己的 host、ip和 runid 还有对这个 master 的监控配置")]),a._v(" "),e("p",[a._v("每个哨兵也会去监听自己监控的每个 master+slaves 对应的 "),e("code",[a._v("__sentinel__:hello channel")]),a._v("，然后去感知到同样在监听这个 master+slaves 的其他哨兵的存在")]),a._v(" "),e("p",[a._v("每个哨兵还会跟其他哨兵交换对 master 的监控配置，互相进行监控配置的同步")]),a._v(" "),e("h2",{attrs:{id:"slave-配置的自动纠正"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slave-配置的自动纠正"}},[a._v("#")]),a._v(" slave 配置的自动纠正")]),a._v(" "),e("p",[a._v("哨兵会负责自动纠正 slave 的一些配置，比如 slave 如果要成为潜在的 master 候选人，哨兵会确保 slave 在复制现有 master 的数据; 如果 slave 连接到了一个错误的 master 上，比如故障转移之后，那么哨兵会确保它们连接到正确的 master 上")]),a._v(" "),e("h2",{attrs:{id:"slave-master-选举算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slave-master-选举算法"}},[a._v("#")]),a._v(" slave->master 选举算法")]),a._v(" "),e("p",[a._v("如果一个 master 被认为 odown 了，而且 majority 哨兵都允许了主备切换，那么某个哨兵就会执行主备切换操作，此时首先要选举一个 slave 来")]),a._v(" "),e("p",[a._v("会考虑 slave 的一些信息")]),a._v(" "),e("ul",[e("li",[a._v("跟 master 断开连接的时长")]),a._v(" "),e("li",[a._v("slave 优先级")]),a._v(" "),e("li",[a._v("复制 offset")]),a._v(" "),e("li",[a._v("run id")])]),a._v(" "),e("p",[a._v("如果一个 slave 跟 master 断开连接已经超过了 down-after-milliseconds的 10 倍，外加 master 宕机的时长，那么 slave 就被认为不适合选举为 master，公式如下")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("(down-after-milliseconds * 10) + milliseconds_since_master_is_in_SDOWN_state\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("接下来会对 slave 进行排序")]),a._v(" "),e("ol",[e("li",[a._v("按照 slave 优先级进行排序，slave priority（redis 配置文件中的属性配置，默认为 100） 越低，优先级就越高")]),a._v(" "),e("li",[a._v("如果 slave priority 相同，那么看 replica offset，哪个 slave 复制了越多的数据，offset 越靠后，优先级就越高")]),a._v(" "),e("li",[a._v("如果上面两个条件都相同，那么选择一个 run id 比较小的那个 slave")])]),a._v(" "),e("h2",{attrs:{id:"quorum-和-majority"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quorum-和-majority"}},[a._v("#")]),a._v(" quorum 和 majority")]),a._v(" "),e("p",[a._v("每次一个哨兵要做主备切换，首先需要 quorum 数量的哨兵认为 odown，然后选举出一个哨兵来做切换，这个哨兵还得得到 majority 哨兵的授权，才能正式执行切换")]),a._v(" "),e("p",[a._v("如果 quorum < majority，比如 5 个哨兵，majority=3，quorum=2，那么就 3 个哨兵授权就可以执行切换")]),a._v(" "),e("p",[a._v("但是如果 quorum >= majority，那么必须 quorum 数量的哨兵都授权；比如 5个哨兵，quorum=5，那么必须 5 个哨兵都同意授权，才能执行切换")]),a._v(" "),e("h2",{attrs:{id:"configuration-epoch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-epoch"}},[a._v("#")]),a._v(" configuration epoch")]),a._v(" "),e("p",[a._v("哨兵会对一套 redis master+slave 进行监控，有相应的监控的配置")]),a._v(" "),e("p",[a._v("执行切换的那个哨兵，会从要切换到的新 master（salve->master）那里得到一个 configuration epoch，这就是一个 version 号，每次切换的 version 号都必须是唯一的")]),a._v(" "),e("p",[a._v("如果第一个选举出的哨兵切换失败了，那么其他哨兵，会等待 failover-timeout 时间，然后接替继续执行切换，此时会重新获取一个新的 configuration epoch，作为新的 version 号")]),a._v(" "),e("h2",{attrs:{id:"configuraiton-传播"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuraiton-传播"}},[a._v("#")]),a._v(" configuraiton 传播")]),a._v(" "),e("p",[a._v("哨兵完成切换之后，会在自己本地更新生成最新的 master 配置，然后同步给其他的哨兵，就是通过之前说的 pub/sub 消息机制")]),a._v(" "),e("p",[a._v("这里之前的 version 号就很重要了，因为各种消息都是通过一个 channel 去发布和监听的，所以一个哨兵完成一次新的切换之后，新的 master 配置是跟着新的 version 号的")]),a._v(" "),e("p",[a._v("其他的哨兵都是根据版本号的大小来更新自己的 master 配置的")])])}),[],!1,null,null,null);s.default=r.exports}}]);