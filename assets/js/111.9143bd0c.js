(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{333:function(t,v,_){t.exports=_.p+"assets/img/markdown-img-paste-20190519112250644.fffa8c71.png"},846:function(t,v,_){"use strict";_.r(v);var o=_(19),r=Object(o.a)({},(function(){var t=this,v=t.$createElement,o=t._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"_064-大白话讲并行度和流分组"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_064-大白话讲并行度和流分组"}},[t._v("#")]),t._v(" 064. 大白话讲并行度和流分组")]),t._v(" "),o("p",[t._v("对于 java 工程师来说，先不说精通 storm ，本教程希望达到的一个效果如下：")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("对 storm 的核心的基本原理要清楚：集群架构、核心概念、并行度和流分组")])]),t._v(" "),o("li",[o("p",[t._v("掌握最常见的 storm 开发范式")]),t._v(" "),o("p",[t._v("spout 消费 kafka，后面跟一堆 bolt，bolt 之间设定好流分组的策略，\nbolt 中填充各种代码逻辑")])]),t._v(" "),o("li",[o("p",[t._v("了解如何将 storm 拓扑打包后提交到 storm 集群上去运行")])]),t._v(" "),o("li",[o("p",[t._v("掌握如何能够通过 storm ui 去查看你的实时计算拓扑的运行现状")])])]),t._v(" "),o("p",[t._v("如果你所在公司有大数据团队并且维护了一个 storm 集群，那么掌握如何开发和部署即可，\n如果没有，那么你就需要去深入学习下 storm 了。如果你的场景不是特别复杂，\n整个数据量也不是特别大，其实自己主要研究一下，怎么部署 storm 集群也可以，本教程也会讲解")]),t._v(" "),o("p",[t._v("Storm 的并行度以及流分组是重要的一个概念，但是没有几个人能说的清楚。")]),t._v(" "),o("p",[t._v("好多年前，我第一次接触 storm 的时候，真的我觉得都没几个人能彻底讲清楚，用一句话讲清楚什么是并行度，什么是流分组，\n很多时候，你以外你明白了，其实你不明白，比如我经常面试一些做过 storm 的人过来，我就问一个问题，\n就知道它的水深水浅，流分组的时候，数据在 storm 集群中的流向，你画一下，比如你自己随便设想一个拓扑结果出来，\n几个 spout，几个 bolt，各种流分组情况下，数据是怎么流向的，要求具体画出集群架构中的流向，\nworker，executor，task，supervisor，数据是怎么流转的；几乎没几个人能画对，为什么呢，\n很多人就没搞明白这个并行度和流分组到底是什么")]),t._v(" "),o("p",[t._v("那么这里一句话总结：")]),t._v(" "),o("p",[o("img",{attrs:{src:_(333),alt:""}})]),t._v(" "),o("ul",[o("li",[o("p",[o("strong",[t._v("并行度：Worker->Executor->Task，没错，是 Task")])]),t._v(" "),o("p",[t._v("默认情况下，一个 Executor 对应一个 Task")]),t._v(" "),o("p",[t._v("简单说就是 task 越多，并行度越高")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("流分组：Task 与 Task 之间的数据流向关系")])]),t._v(" "),o("p",[t._v("一个拓扑中，可以有很多 Spout + Bolt，那么 bolt1 的数据流向 bolt2 的时候的一个策略\n就是流分组")]),t._v(" "),o("p",[t._v("流分组策略：")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Shuffle Grouping：随机发射，负载均衡")])]),t._v(" "),o("li",[o("p",[t._v("Fields Grouping：根据一个或多个字段进行分组")]),t._v(" "),o("p",[t._v("那一个或者多个 fields 如果值完全相同的话，那么这些 tuple，就会发送给下游 bolt 的其中固定的一个 task")]),t._v(" "),o("p",[t._v("你发射的每条数据是一个 tuple，每个 tuple 中有多个 field 作为字段")]),t._v(" "),o("p",[t._v("比如 tuple 3 个字段，name，age，salary")]),t._v(" "),o("p",[o("code",[t._v('{"name": "tom", "age": 25, "salary": 10000}')]),t._v(" -> tuple -> 3个 field，name，age，salary")])]),t._v(" "),o("li",[o("p",[t._v("All Grouping：广播分发")])]),t._v(" "),o("li",[o("p",[t._v("Global Grouping：选择其中一个 task 最小的 id 分发")])]),t._v(" "),o("li",[o("p",[t._v("None Grouping：与 shuffle 类似")])]),t._v(" "),o("li",[o("p",[t._v("Direct Grouping：指定一个 task id 发送")])]),t._v(" "),o("li",[o("p",[t._v("Local or Shuffle Grouping： 只在本地同一个进程（worker）中国随机分发")])])]),t._v(" "),o("p",[t._v("最常用的是前两种")])])])])}),[],!1,null,null,null);v.default=r.exports}}]);