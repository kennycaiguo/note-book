(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{755:function(t,s,a){"use strict";a.r(s);var r=a(19),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rescore-机制优化近似匹配搜索的性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rescore-机制优化近似匹配搜索的性能"}},[t._v("#")]),t._v(" rescore 机制优化近似匹配搜索的性能")]),t._v(" "),a("h2",{attrs:{id:"match-和-phrase-match（proximity-match）的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#match-和-phrase-match（proximity-match）的区别"}},[t._v("#")]),t._v(" match 和 phrase match（proximity match）的区别")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("match")]),t._v(" "),a("p",[t._v("只要简单的匹配到了一个 term，就可以理解将 term 对应的 doc 作为结果返回，扫描倒排索引，扫描到了就 ok")])]),t._v(" "),a("li",[a("p",[t._v("phrase match")]),t._v(" "),a("p",[t._v("首先扫描到所有 term 的 doc list;\n找到包含所有 term 的 doc list;\n然后对每个 doc 都计算每个 term 的 position，是否符合指定的范围;\nslop，需要进行复杂的运算，来判断能否通过 slop 移动，匹配一个 doc")])]),t._v(" "),a("li",[a("p",[t._v("match query 的性能比 phrase match 和 proximity match（有 slop）要高很多。因为后两者都要计算 position 的距离。")])]),t._v(" "),a("li",[a("p",[t._v("match query 比 phrase match 的性能要高10倍，比 proximity match 的性能要高20倍。")])])]),t._v(" "),a("p",[t._v("但是别太担心，因为 es 的性能一般都在毫秒级别，match query 一般就在几毫秒，或者几十毫秒，\n而 phrase match 和 proximity match 的性能在几十毫秒到几百毫秒之间，所以也是可以接受的。")]),t._v(" "),a("p",[t._v("优化 proximity match 的性能，一般就是减少要进行 proximity match 搜索的 document 数量。\n主要思路就是，用 match query 先过滤出需要的数据，然后再用 proximity match 来根据 term 距离提高 doc 的分数，\n同时 proximity match 只针对每个 shard 的分数排名前 n 个 doc 起作用，来重新调整它们的分数，\n这个过程称之为 rescoring，重计分。因为一般用户会分页查询，只会看到前几页的数据，所以不需要对所有结果进行 proximity match 操作。")]),t._v(" "),a("p",[t._v("用我们刚才的说法，match + proximity match同时实现召回率和精准度")]),t._v(" "),a("p",[t._v("默认情况下，match 也许匹配了 1000 个 doc，proximity match 全都需要对每个 doc 进行一遍运算，判断能否 slop 移动匹配上，然后去贡献自己的分数")]),t._v(" "),a("p",[t._v("但是很多情况下，match 出来也许 1000 个 doc，其实用户大部分情况下是分页查询的，\n所以可能最多只会看前几页，比如一页是10条，最多也许就看5页，就是50条，\nproximity match 只要对前 50 个 doc 进行 slop 移动去匹配，去贡献自己的分数即可，\n不需要对全部 1000 个 doc 都去进行计算和贡献分数")]),t._v(" "),a("h2",{attrs:{id:"rescore-重打分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rescore-重打分"}},[t._v("#")]),t._v(" rescore 重打分")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("GET /forum/article/_search\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"query"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"match"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java spark"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rescore"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"window_size"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"query"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rescore_query"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"match_phrase"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"query"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java spark"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"slop"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("此时应该都会有一个疑问，那么这样只重打分 50 个，最后结果正确吗？")]),t._v(" "),a("p",[t._v("肯定是不正确的，此时的重打分是在第一个 match 的返回的所有 doc list 上进行重打分，\n而且是指定个数，所以不在重打分个数内的不会被影响。")]),t._v(" "),a("p",[t._v("所以这个操作只符合部分场景")])])])}),[],!1,null,null,null);s.default=n.exports}}]);