import{_ as e,D as o,o as n,g as r,J as a,h as i,Q as t,m as l}from"./chunks/framework.f67d7268.js";const Q=JSON.parse('{"title":"第03讲：高性能数据库表该如何设计？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/040_高性能MySQL实战/(51) 第03讲：高性能数据库表该如何设计？.md","filePath":"posts/backEnd/040_高性能MySQL实战/(51) 第03讲：高性能数据库表该如何设计？.md","lastUpdated":1696682708000}'),_={name:"posts/backEnd/040_高性能MySQL实战/(51) 第03讲：高性能数据库表该如何设计？.md"},s=t("",21),u=t("",36),h=t("",46),c=l("ol",null,[l("li",null,[l("p",null,"主键列，无负数，建议使用 INT UNSIGNED 或者 BIGINT UNSIGNED；预估字段数字取值会超过 42 亿，使用 BIGINT 类型。")]),l("li",null,[l("p",null,"短数据使用 TINYINT 或 SMALLINT，比如：人类年龄，城市代码。")]),l("li",null,[l("p",null,"使用 UNSIGNED 存储非负数值，扩大正数的范围。")])],-1),d=l("h2",{id:"int-3-int-5-区别",tabindex:"-1"},[i("int(3)/int(5) 区别 "),l("a",{class:"header-anchor",href:"#int-3-int-5-区别","aria-label":'Permalink to "int(3)/int(5) 区别"'},"​")],-1),T=l("p",null,"int(3)/int(5) 的区别，如下图所示。",-1),m=l("ul",null,[l("li",null,[l("p",null,"正常显示没有区别。")]),l("li",null,[l("p",null,"3 和 5 仅是最小显示宽度而已。")]),l("li",null,[l("p",null,"有 zerofill 等扩展属性时则显示有区别。")])],-1),A=l("h2",{id:"浮点数与定点数区别",tabindex:"-1"},[i("浮点数与定点数区别 "),l("a",{class:"header-anchor",href:"#浮点数与定点数区别","aria-label":'Permalink to "浮点数与定点数区别"'},"​")],-1),N=l("p",null,"浮点数与定点数区别，如下图所示。",-1),b=t("",13),q=t("",9),S=l("p",null,"将 IP 的存储从字符型转换成整形，转化后数字是连续的，提高了查询性能，使查询更快，占用空间更小。",-1),I=l("h2",{id:"timestamp-处理",tabindex:"-1"},[i("TIMESTAMP 处理 "),l("a",{class:"header-anchor",href:"#timestamp-处理","aria-label":'Permalink to "TIMESTAMP 处理"'},"​")],-1),g=l("p",null,"同样的方法，我们使用 MySQL 内置的函数(FROM_UNIXTIME()，UNIX_TIMESTAMP())，可以将日期转化为数字，用 INT UNSIGNED 存储日期和时间。",-1),P=l("br",null,null,-1),M=l("p",null,"下图示所示，时间 2007-11-30 10:30:19 与整数之间的转换，转化后数字是连续的，占用空间更小，并且可以使用索引提升查询性能。",-1),E=l("p",null,"本案例展示的是，不当的数字类型，导致表无法插入新数据，如下图所示。",-1),C=t("",12),x=l("p",null,"我们使用主键来定位唯一一条记录，因此主键的列名就应该更加便于理解，如下图所示。",-1),L=t("",6);function f(U,k,O,D,V,F){const p=o("Image");return n(),r("div",null,[s,a(p,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/C0/CgoB5l14nkOAGCKWAAFmA3Z6YKY830.png"}),i(),u,a(p,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/0D/CgotOV13OUyAEEFVAAD5jwl3kR0869.png"}),i(),h,a(p,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/89/ED/CgoB5l13OUyATsQnAAA4g1UgnXs652.png"}),i(),c,d,T,a(p,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/0D/CgotOV13OUyAHP8wAAGqIw0bt-Q508.png"}),i(),m,A,N,a(p,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/89/ED/CgoB5l13OUyAeWc1AAOJ7yjHSvE323.png"}),i(),b,a(p,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/0D/CgotOV13OUyAXwFVAAA0nOrMqC4728.png"}),i(),q,a(p,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/89/ED/CgoB5l13OUyAaa7WAAMXMykWJTQ418.png"}),i(),S,I,g,P,M,a(p,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/0D/CgotOV13OU2AUqvlAAMhnvLoP8c575.png"}),i(),E,a(p,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/89/ED/CgoB5l13OU2AOxkSAABmRJMVIEE248.png"}),i(),C,a(p,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/0D/CgotOV13OU2ATwrqAAXfmFaSYKY123.png"}),i(),x,a(p,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/89/ED/CgoB5l13OU2AP4Z8AALWmJYqBBY555.png"}),i(),L])}const B=e(_,[["render",f]]);export{Q as __pageData,B as default};
