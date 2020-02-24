(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{687:function(s,t,a){"use strict";a.r(t);var n=a(19),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_144-商品详情页动态渲染系统：部署-mysql-数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_144-商品详情页动态渲染系统：部署-mysql-数据库"}},[s._v("#")]),s._v(" 144. 商品详情页动态渲染系统：部署 MySQL 数据库")]),s._v(" "),a("p",[s._v("这里使用用最简单的方式装一个 mysql 数据库，后面有数据库可以用来开发就可以了")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y mysql-server\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 跟随系统启动")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" mysqld on\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld start\nmysql -u root\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 root 账户密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" root@localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许远程连接")]),s._v("\ngrant all privileges on root.* to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified by "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql -uroot -proot\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户名密码修改")]),s._v("\nUPDATE user SET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" WHERE "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nFLUSH PRIVILEGES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);