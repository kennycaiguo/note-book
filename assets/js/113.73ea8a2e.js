(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{334:function(s,a,r){s.exports=r.p+"assets/img/markdown-img-paste-20190519181720319.e0d43285.png"},847:function(s,a,r){"use strict";r.r(a);var o=r(19),t=Object(o.a)({},(function(){var s=this,a=s.$createElement,o=s._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[o("h1",{attrs:{id:"_067-基于集群运行计算拓扑"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_067-基于集群运行计算拓扑"}},[s._v("#")]),s._v(" 067. 基于集群运行计算拓扑")]),s._v(" "),o("h2",{attrs:{id:"打包"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[s._v("#")]),s._v(" 打包")]),s._v(" "),o("p",[s._v("之前配置的 jar 任务，把依赖也打到 jar 中")]),s._v(" "),o("p",[s._v("由于在提交到 storm 集群中遇到的一些坑，最后把调试通过后的 gradle 配置内容贴出来")]),s._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("//指定编译的编码\ntasks.withType(JavaCompile) {\n    options.encoding = \"UTF-8\"\n}\nversion = '1.0.0'\n// 打包与集群中的服务器中的 java 版本要一致\nsourceCompatibility = '1.7'\n\ndependencies {\n    // 打包的时候不打包该依赖，因为提交的作业是会被 storm 程序加载\n    // 所以 storm-core 已经被加载到程序中了\n    compileOnly 'org.apache.storm:storm-core:1.1.0'\n    compile 'commons-collections:commons-collections:3.2.1'\n}\n\njar {\n    manifestContentCharset 'utf-8'\n    metadataCharset 'utf-8'\n    manifest {\n        attributes(\n                \"Manifest-Version\": 1.0,\n                \"Main-Class\": \"cn.mrcode.cachepdp.storm.helloword.WordCountTopology\")\n    }\n    from { configurations.compile.collect { it.isDirectory() ? it : zipTree(it) } }\n}\n")])]),s._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[s._v("1")]),o("br"),o("span",{staticClass:"line-number"},[s._v("2")]),o("br"),o("span",{staticClass:"line-number"},[s._v("3")]),o("br"),o("span",{staticClass:"line-number"},[s._v("4")]),o("br"),o("span",{staticClass:"line-number"},[s._v("5")]),o("br"),o("span",{staticClass:"line-number"},[s._v("6")]),o("br"),o("span",{staticClass:"line-number"},[s._v("7")]),o("br"),o("span",{staticClass:"line-number"},[s._v("8")]),o("br"),o("span",{staticClass:"line-number"},[s._v("9")]),o("br"),o("span",{staticClass:"line-number"},[s._v("10")]),o("br"),o("span",{staticClass:"line-number"},[s._v("11")]),o("br"),o("span",{staticClass:"line-number"},[s._v("12")]),o("br"),o("span",{staticClass:"line-number"},[s._v("13")]),o("br"),o("span",{staticClass:"line-number"},[s._v("14")]),o("br"),o("span",{staticClass:"line-number"},[s._v("15")]),o("br"),o("span",{staticClass:"line-number"},[s._v("16")]),o("br"),o("span",{staticClass:"line-number"},[s._v("17")]),o("br"),o("span",{staticClass:"line-number"},[s._v("18")]),o("br"),o("span",{staticClass:"line-number"},[s._v("19")]),o("br"),o("span",{staticClass:"line-number"},[s._v("20")]),o("br"),o("span",{staticClass:"line-number"},[s._v("21")]),o("br"),o("span",{staticClass:"line-number"},[s._v("22")]),o("br"),o("span",{staticClass:"line-number"},[s._v("23")]),o("br"),o("span",{staticClass:"line-number"},[s._v("24")]),o("br"),o("span",{staticClass:"line-number"},[s._v("25")]),o("br")])]),o("h2",{attrs:{id:"提交作业到-storm-集群"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#提交作业到-storm-集群"}},[s._v("#")]),s._v(" 提交作业到 storm 集群")]),s._v(" "),o("p",[s._v("语法：storm jar path/to/allmycode.jar org.me.MyTopology arg1 arg2 arg3")]),s._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("# 本次练习，后面的参数是自定义的\n# StormSubmitter.submitTopologyWithProgressBar(args[0], conf, builder.createTopology());\n# 之前代码中用到了 第一个参数当做 提交的 topology 名称\nstorm jar storm-helloword-1.0.0.jar cn.mrcode.cachepdp.storm.helloword.WordCountTopology WordCountTopology\n")])]),s._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[s._v("1")]),o("br"),o("span",{staticClass:"line-number"},[s._v("2")]),o("br"),o("span",{staticClass:"line-number"},[s._v("3")]),o("br"),o("span",{staticClass:"line-number"},[s._v("4")]),o("br")])]),o("p",[s._v("启动过程中报错，"),o("code",[s._v("compileOnly 'org.apache.storm:storm-core:1.1.0'")]),s._v(" 使用 compileOnly 打包不把该依赖打包")]),s._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("Caused by: java.lang.RuntimeException: java.io.IOException: Found multiple defaults.yaml resources. You're probably bundling the Storm jars with your topology jar. [jar:file:/usr/local/storm/lib/storm-core-1.1.0.jar!/defaults.yaml, jar:file:/usr/local/storm/storm-helloword-0.0.1-SNAPSHOT.jar!/defaults.yaml]\nat org.apache.storm.utils.Utils.findAndReadConfigFile(Utils.java:383)\nat org.apache.storm.utils.Utils.readDefaultConfig(Utils.java:427)\nat org.apache.storm.utils.Utils.readStormConfig(Utils.java:463)\nat org.apache.storm.utils.Utils.<clinit>(Utils.java:177)\n... 39 more\n")])]),s._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[s._v("1")]),o("br"),o("span",{staticClass:"line-number"},[s._v("2")]),o("br"),o("span",{staticClass:"line-number"},[s._v("3")]),o("br"),o("span",{staticClass:"line-number"},[s._v("4")]),o("br"),o("span",{staticClass:"line-number"},[s._v("5")]),o("br"),o("span",{staticClass:"line-number"},[s._v("6")]),o("br")])]),o("p",[s._v("再次运行报错，有可能是你打包是用 1.8 ，运行是用 1.7")]),s._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v('Exception in thread "main" java.lang.UnsupportedClassVersionError: cn/mrcode/cachepdp/storm/helloword/WordCountTopology : Unsupported major.minor version 52.0\nat java.lang.ClassLoader.defineClass1(Native Method)\n')])]),s._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[s._v("1")]),o("br"),o("span",{staticClass:"line-number"},[s._v("2")]),o("br")])]),o("p",[s._v("运行成功显示")]),s._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v('[root@eshop-cache01 storm]# storm jar storm-helloword-1.0.0.jar cn.mrcode.cachepdp.storm.helloword.WordCountTopology WordCountTopology\nRunning: /usr/java/latest/bin/java -client -Ddaemon.name= -Dstorm.options= -Dstorm.home=/usr/local/storm -Dstorm.log.dir=/usr/local/storm/logs -Djava.library.path=/usr/local/lib:/opt/local/lib:/usr/lib -Dstorm.conf.file= -cp /usr/local/storm/storm-helloword-1.0.0.jar:/usr/local/storm/lib/log4j-over-slf4j-1.6.6.jar:/usr/local/storm/lib/reflectasm-1.10.1.jar:/usr/local/storm/lib/storm-core-1.1.0.jar:/usr/local/storm/lib/storm-rename-hack-1.1.0.jar:/usr/local/storm/lib/log4j-api-2.8.jar:/usr/local/storm/lib/ring-cors-0.1.5.jar:/usr/local/storm/lib/log4j-slf4j-impl-2.8.jar:/usr/local/storm/lib/clojure-1.7.0.jar:/usr/local/storm/lib/servlet-api-2.5.jar:/usr/local/storm/lib/asm-5.0.3.jar:/usr/local/storm/lib/objenesis-2.1.jar:/usr/local/storm/lib/disruptor-3.3.2.jar:/usr/local/storm/lib/minlog-1.3.0.jar:/usr/local/storm/lib/log4j-core-2.8.jar:/usr/local/storm/lib/slf4j-api-1.7.21.jar:/usr/local/storm/lib/kryo-3.0.3.jar:storm-helloword-1.0.0.jar:/usr/local/storm/conf:/usr/local/storm/bin -Dstorm.jar=storm-helloword-1.0.0.jar -Dstorm.dependency.jars= -Dstorm.dependency.artifacts={} cn.mrcode.cachepdp.storm.helloword.WordCountTopology WordCountTopology\n2228 [main] INFO  o.a.s.StormSubmitter - Generated ZooKeeper secret payload for MD5-digest: -6684020447691510709:-7027356525674661306\n2524 [main] INFO  o.a.s.u.NimbusClient - Found leader nimbus : eshop-cache01:6627\n2583 [main] INFO  o.a.s.s.a.AuthUtils - Got AutoCreds []\n2589 [main] INFO  o.a.s.u.NimbusClient - Found leader nimbus : eshop-cache01:6627\n2678 [main] INFO  o.a.s.StormSubmitter - Uploading dependencies - jars...\n2680 [main] INFO  o.a.s.StormSubmitter - Uploading dependencies - artifacts...\n2681 [main] INFO  o.a.s.StormSubmitter - Dependency Blob keys - jars : [] / artifacts : []\n2713 [main] INFO  o.a.s.StormSubmitter - Uploading topology jar storm-helloword-1.0.0.jar to assigned location: /var/storm/nimbus/inbox/stormjar-84efb0f9-e1a4-4d54-a55f-a4fe68adfd62.jar\nStart uploading file \'storm-helloword-1.0.0.jar\' to \'/var/storm/nimbus/inbox/stormjar-84efb0f9-e1a4-4d54-a55f-a4fe68adfd62.jar\' (581266 bytes)\n[==================================================] 581266 / 581266\nFile \'storm-helloword-1.0.0.jar\' uploaded to \'/var/storm/nimbus/inbox/stormjar-84efb0f9-e1a4-4d54-a55f-a4fe68adfd62.jar\' (581266 bytes)\n2836 [main] INFO  o.a.s.StormSubmitter - Successfully uploaded topology jar to assigned location: /var/storm/nimbus/inbox/stormjar-84efb0f9-e1a4-4d54-a55f-a4fe68adfd62.jar\n2837 [main] INFO  o.a.s.StormSubmitter - Submitting topology WordCountTopology in distributed mode with conf {"storm.zookeeper.topology.auth.scheme":"digest","storm.zookeeper.topology.auth.payload":"-6684020447691510709:-7027356525674661306","topology.workers":3,"topology.debug":false}\n3636 [main] INFO  o.a.s.StormSubmitter - Finished submitting topology: WordCountTopology\n')])]),s._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[s._v("1")]),o("br"),o("span",{staticClass:"line-number"},[s._v("2")]),o("br"),o("span",{staticClass:"line-number"},[s._v("3")]),o("br"),o("span",{staticClass:"line-number"},[s._v("4")]),o("br"),o("span",{staticClass:"line-number"},[s._v("5")]),o("br"),o("span",{staticClass:"line-number"},[s._v("6")]),o("br"),o("span",{staticClass:"line-number"},[s._v("7")]),o("br"),o("span",{staticClass:"line-number"},[s._v("8")]),o("br"),o("span",{staticClass:"line-number"},[s._v("9")]),o("br"),o("span",{staticClass:"line-number"},[s._v("10")]),o("br"),o("span",{staticClass:"line-number"},[s._v("11")]),o("br"),o("span",{staticClass:"line-number"},[s._v("12")]),o("br"),o("span",{staticClass:"line-number"},[s._v("13")]),o("br"),o("span",{staticClass:"line-number"},[s._v("14")]),o("br"),o("span",{staticClass:"line-number"},[s._v("15")]),o("br"),o("span",{staticClass:"line-number"},[s._v("16")]),o("br")])]),o("h2",{attrs:{id:"ui-查看"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ui-查看"}},[s._v("#")]),s._v(" ui 查看")]),s._v(" "),o("p",[s._v("访问 http://eshop-cache01:8080/index.html")]),s._v(" "),o("p",[s._v("进入 WordCountTopology 这个拓扑页面之后，点击端口号，可以看到这台机器上面的日志信息")]),s._v(" "),o("p",[o("img",{attrs:{src:r(334),alt:""}})]),s._v(" "),o("h2",{attrs:{id:"kill-掉某个-storm-作业"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#kill-掉某个-storm-作业"}},[s._v("#")]),s._v(" kill 掉某个 storm 作业")]),s._v(" "),o("p",[s._v("语法：storm kill topology-name")]),s._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("[root@eshop-cache01 storm]# storm kill WordCountTopology\nRunning: /usr/java/latest/bin/java -client -Ddaemon.name= -Dstorm.options= -Dstorm.home=/usr/local/storm -Dstorm.log.dir=/usr/local/storm/logs -Djava.library.path=/usr/local/lib:/opt/local/lib:/usr/lib -Dstorm.conf.file= -cp /usr/local/storm/storm-helloword-1.0.0.jar:/usr/local/storm/lib/log4j-over-slf4j-1.6.6.jar:/usr/local/storm/lib/reflectasm-1.10.1.jar:/usr/local/storm/lib/storm-core-1.1.0.jar:/usr/local/storm/lib/storm-rename-hack-1.1.0.jar:/usr/local/storm/lib/log4j-api-2.8.jar:/usr/local/storm/lib/ring-cors-0.1.5.jar:/usr/local/storm/lib/log4j-slf4j-impl-2.8.jar:/usr/local/storm/lib/clojure-1.7.0.jar:/usr/local/storm/lib/servlet-api-2.5.jar:/usr/local/storm/lib/asm-5.0.3.jar:/usr/local/storm/lib/objenesis-2.1.jar:/usr/local/storm/lib/disruptor-3.3.2.jar:/usr/local/storm/lib/minlog-1.3.0.jar:/usr/local/storm/lib/log4j-core-2.8.jar:/usr/local/storm/lib/slf4j-api-1.7.21.jar:/usr/local/storm/lib/kryo-3.0.3.jar:/usr/local/storm/conf:/usr/local/storm/bin org.apache.storm.command.kill_topology WordCountTopology\n13712 [main] INFO  o.a.s.u.NimbusClient - Found leader nimbus : eshop-cache01:6627\n16632 [main] INFO  o.a.s.c.kill-topology - Killed topology: WordCountTopology\n")])]),s._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[s._v("1")]),o("br"),o("span",{staticClass:"line-number"},[s._v("2")]),o("br"),o("span",{staticClass:"line-number"},[s._v("3")]),o("br"),o("span",{staticClass:"line-number"},[s._v("4")]),o("br")])]),o("p",[s._v("在 ui 上也可以操作")])])}),[],!1,null,null,null);a.default=t.exports}}]);