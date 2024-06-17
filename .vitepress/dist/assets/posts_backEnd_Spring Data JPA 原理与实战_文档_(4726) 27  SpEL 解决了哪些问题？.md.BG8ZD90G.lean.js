import{_ as h,F as p,g as l,K as n,h as i,ar as t,l as s,o as k}from"./chunks/framework.VlluEs-f.js";const j=JSON.parse('{"title":"27SpEL解决了哪些问题？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Spring Data JPA 原理与实战_文档/(4726) 27  SpEL 解决了哪些问题？.md","filePath":"posts/backEnd/Spring Data JPA 原理与实战_文档/(4726) 27  SpEL 解决了哪些问题？.md","lastUpdated":1718371218000}'),e={name:"posts/backEnd/Spring Data JPA 原理与实战_文档/(4726) 27  SpEL 解决了哪些问题？.md"},E=t("",5),r=s("p",null,"从核心引用来看，SpEL 贯穿所有 Spring 的核心功能。当然了，SpEL 可以脱离 Spring 工程独立使用，其项目里有三个重要的接口：ExpressionParser、Expression、EvaluationContext，我从官方文档中找了一张图来说明它们之间的关系。",-1),d=t("",7),g=s("p",null,"而它的这些方法中，最重的一个参数就是 EvaluationContext。",-1),y=s("p",null,[s("strong",null,"EvaluationContext")],-1),o=s("p",null,"表示解析 String 表达式所需要的上下文，例如寻找 ROOT 是谁，反射解析的 Method、Field、Constructor 的解析器和取值所需要的上下文。我们看一下其接口提供的方法，如下图所示。",-1),F=t("",27),c=t("",5),u=t("",18),A=t("",10),D=s("p",null,"由于 SecurityExpressionRoot 是 rootObject，根据我们上面介绍的 SpEL 的基本用法，SecurityExpressionRoot 里面的各种属性和方法都可以在 SpEL 中使用，如下图所示。",-1),C=t("",9),m=s("h3",{id:"总结",tabindex:"-1"},[i("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),q=s("p",null,"本讲内容到这里就结束了。这一讲我们通过 SpEL 的基本语法介绍，分别介绍了其在 @Value、@Query、@Cache 注解里面的使用场景和方法，其中 # 和 $ 是容易在 @Value 里面犯错的地方；@Param 的用法 : 和 # 也是 @Query 里面容易犯错的地方，你要注意一下。",-1),B=s("p",null,"其实任何形式的 SpEL 的变化都离不开它基本的三个接口：ExpressionParser、Expression、EvaluationContext，只不过框架提供了不同形式的封装，你也可以根据实际场景自由扩展。",-1),b=s("p",null,"关于这一讲内容，希望你能认真去思考，有问题可以在下方留言，我们一起讨论。下一讲我们来聊聊 Hibernate 中一级缓存的概念，到时见。",-1),v=s("blockquote",null,[s("p",null,[i("点击下方链接查看源码（不定时更新）"),s("br"),s("a",{href:"https://github.com/zhangzhenhuajack/spring-boot-guide/tree/master/spring-data/spring-data-jpa",target:"_blank",rel:"noreferrer"},"https://github.com/zhangzhenhuajack/spring-boot-guide/tree/master/spring-data/spring-data-jpa")])],-1);function S(_,x,f,P,L,V){const a=p("Image");return k(),l("div",null,[E,n(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/84/88/Ciqc1F_TZgOAeZinAAWQDYZICUE395.png"}),i(),r,n(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/84/93/CgqCHl_TZg6AAkIJAADdShpwElA350.png"}),i(),d,n(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/84/88/Ciqc1F_TZhaAXrP7AAH3T5PfIR8675.png"}),i(),g,y,o,n(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/84/93/CgqCHl_TZhyAfk9oAADDsWDvRJM660.png"}),i(),F,n(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/84/93/CgqCHl_TZjOAeGv_AATHsCZz1as768.png"}),i(),n(a,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/84/93/CgqCHl_TZjmAW5suAARIid5TtLA365.png"}),i(),c,n(a,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/84/93/CgqCHl_TZkSAcGUfAAIDnxtLZsQ409.png"}),i(),u,n(a,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image/M00/84/88/Ciqc1F_TZlOAIupqAALzhPEi9nM327.png"}),i(),A,n(a,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image/M00/84/93/CgqCHl_TZl2AIjYgAAYG1kqP1Zw860.png"}),i(),D,n(a,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image/M00/84/88/Ciqc1F_TZmKAbFerAAHOBNbwd44831.png"}),i(),C,n(a,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image/M00/84/93/CgqCHl_TZm6AaOt5AAFe2hVbtrM473.png"}),i(),m,q,B,b,v])}const w=h(e,[["render",S]]);export{j as __pageData,w as default};
