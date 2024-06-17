import{_ as l,F as t,g as p,K as n,h as i,l as s,ar as h,o as e}from"./chunks/framework.VlluEs-f.js";const q=JSON.parse('{"title":"05配置驱动：ShardingSphere中的配置体系是如何设计的？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/ShardingSphere 核心原理精讲_文档/(3564) 05  配置驱动：ShardingSphere 中的配置体系是如何设计的？.md","filePath":"posts/backEnd/ShardingSphere 核心原理精讲_文档/(3564) 05  配置驱动：ShardingSphere 中的配置体系是如何设计的？.md","lastUpdated":1718371218000}'),k={name:"posts/backEnd/ShardingSphere 核心原理精讲_文档/(3564) 05  配置驱动：ShardingSphere 中的配置体系是如何设计的？.md"},r=s("h1",{id:"_05配置驱动-shardingsphere中的配置体系是如何设计的",tabindex:"-1"},[i("05配置驱动：ShardingSphere中的配置体系是如何设计的？ "),s("a",{class:"header-anchor",href:"#_05配置驱动-shardingsphere中的配置体系是如何设计的","aria-label":'Permalink to "05配置驱动：ShardingSphere中的配置体系是如何设计的？"'},"​")],-1),E=s("p",null,"在上一课时中，我们介绍了在业务系统中应用 ShardingSphere 的几种方法。事实上，我们发现，除了掌握 Spring、Spring Boot、Mybatis 等常见框架的功能特性之外，使用 ShardingSphere 的主要工作在于根据业务需求完成各种分片操作相关配置项的设置。今天，我就来带领你剖析 ShardingSphere 中的配置体系到底是如何进行设计并实现的，这也是我们介绍 ShardingSphere 核心功能的前提。",-1),g=s("h3",{id:"什么是行表达式",tabindex:"-1"},[i("什么是行表达式？ "),s("a",{class:"header-anchor",href:"#什么是行表达式","aria-label":'Permalink to "什么是行表达式？"'},"​")],-1),d=s("p",null,"在引入配置体系的学习之前，我们先来介绍 ShardingSphere 框架为开发人员提供的一个辅助功能，这个功能就是行表达式。",-1),o=s("p",null,[s("strong",null,"行表达式是 ShardingSphere 中用于实现简化和统一配置信息的一种工具，在日常开发过程中应用得非常广泛。"),i(" 它的使用方式非常直观，只需要在配置中使用 ${expression} 或 $->{expression} 表达式即可。")],-1),y=s("p",null,'例如上一课时中使用的"ds${0..1}.user${0..1}"就是一个行表达式，用来设置可用的数据源或数据表名称。基于行表达式语法，${begin..end} 表示的是一个从"begin"到"end"的范围区间，而多个 ${expression} 之间可以用"."符号进行连接，代表多个表达式数值之间的一种笛卡尔积关系。这样，如果采用图形化的表现形式，"ds${0..1}.user${0..1}"表达式最终会解析成这样一种结果：',-1),u=h("",8),c=h("",13),F=h("",57),S=h("",14);function C(m,D,A,b,f,v){const a=t("Image");return e(),p("div",null,[r,E,g,d,o,y,n(a,{alt:"image (4).png",src:"https://s0.lgstatic.com/i/image/M00/28/F9/CgqCHl75rReAY_fbAACRt1sYKS0524.png"}),i(),u,n(a,{alt:"image (5).png",src:"https://s0.lgstatic.com/i/image/M00/28/EE/Ciqc1F75rTaADRO6AAD5MCLrohA562.png"}),i(),c,n(a,{alt:"3.png",src:"https://s0.lgstatic.com/i/image/M00/28/FA/CgqCHl75rUiACYZ1AAA8JV6ve54396.png"}),i(),F,n(a,{alt:"image (6).png",src:"https://s0.lgstatic.com/i/image/M00/28/F0/Ciqc1F75rqaAGL8qAABR8QxogB0683.png"}),i(),S])}const R=l(k,[["render",C]]);export{q as __pageData,R as default};
