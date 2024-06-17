import{_ as t,F as k,g as l,K as n,h as i,l as s,ar as h,o as p}from"./chunks/framework.VlluEs-f.js";const I=JSON.parse('{"title":"04如何利用Repoitory中的方法返回值解决实际问题？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Spring Data JPA 原理与实战_文档/(4704) 04  如何利用 Repoitory 中的方法返回值解决实际问题？.md","filePath":"posts/backEnd/Spring Data JPA 原理与实战_文档/(4704) 04  如何利用 Repoitory 中的方法返回值解决实际问题？.md","lastUpdated":1718371218000}'),e={name:"posts/backEnd/Spring Data JPA 原理与实战_文档/(4704) 04  如何利用 Repoitory 中的方法返回值解决实际问题？.md"},E=s("h1",{id:"_04如何利用repoitory中的方法返回值解决实际问题",tabindex:"-1"},[i("04如何利用Repoitory中的方法返回值解决实际问题？ "),s("a",{class:"header-anchor",href:"#_04如何利用repoitory中的方法返回值解决实际问题","aria-label":'Permalink to "04如何利用Repoitory中的方法返回值解决实际问题？"'},"​")],-1),r=s("p",null,"上一课时，我们着重讲了方法名和参数的使用方法，这一课时我们来看下Repository 支持的返回结果有哪些，以及 DTO 类型的返回结果如何自定义，及其在实际工作场景中我们如何做。通过本课时的学习，你将了解到 Repository 的几种返回结果，以及如何返回 DTO。我们先看一下返回结果有哪些。",-1),d=s("h3",{id:"repository-的返回结果有哪些",tabindex:"-1"},[i("Repository 的返回结果有哪些？ "),s("a",{class:"header-anchor",href:"#repository-的返回结果有哪些","aria-label":'Permalink to "Repository 的返回结果有哪些？"'},"​")],-1),g=s("p",null,"我们之前已经介绍过了 Repository 的接口，那么现在来看一下这些接口支持的返回结果有哪些，如下图所示：",-1),y=h("",17),F=h("",42),o=s("p",null,"相信到这里你能感受到 Spring Data Common 的强大支持，对 Repository 接口的不同实现也有了一定的认识。对于以上讲述的返回结果，你可以自己测试一下加以理解并运用，那么接下来我们进行一个总结。",-1),c=s("h4",{id:"返回结果支持总结",tabindex:"-1"},[i("返回结果支持总结 "),s("a",{class:"header-anchor",href:"#返回结果支持总结","aria-label":'Permalink to "返回结果支持总结"'},"​")],-1),u=s("p",null,"下面打开 ResultProcessor 类的源码看一下支持的类型有哪些。",-1),C=s("p",null,"从上图可以看出 processResult 的时候分别对 PageQuery、Stream、Reactiv 有了各自的判断，我们 debug 到这里的时候来看一下 convert，进入到类里面。",-1),m=s("p",null,"可以看到 QueryExecutorConverters 里面对 JDK8、Guava、vavr 也做了各种支持，如果你有兴趣可以课后去仔细看看源码。",-1),B=s("p",null,"这里我们先用表格总结一下返回值，下表列出了 Spring Data JPA Query Method 机制支持的方法的返回值类型：",-1),A=h("",29),D=h("",15),q=s("p",null,"图一：是返回 DTO 接口形式的 query 生成的 JPQL。",-1),b=s("p",null,"图二：是返回 DTO 类的时候 QueryStructure 生成的 JPQL 语句。",-1),v=s("p",null,"两种最大的区别是 DTO 类需要构造方法 new 一个对象出来，这就是我们第二种方法里面需要注意的 DTO 构造函数的问题；而通过图一我们可以看到接口直接通过 as 别名，映射成 hashmap 即可，非常灵活。这里我顺带给你提一个 tips。",-1),_=s("h4",{id:"这里说一个小技巧",tabindex:"-1"},[i("这里说一个小技巧 "),s("a",{class:"header-anchor",href:"#这里说一个小技巧","aria-label":'Permalink to "这里说一个小技巧"'},"​")],-1),f=s("p",null,"当我们去写userRepositor 的定义方法的时候，IDA 会为我们提供满足 JPA 语法的提示，这也是用 Spring Data JPA 的好处之一，因为这些一旦约定死了（这里是指遵守 JPA 协议），周边的工具会越来越成熟，其中 MyBatis 太灵活了，就会导致周边的工具没办法跟上。创建 defining query method 的时候就会提示，如下图所示：",-1),j=s("p",null,"以上就是返回 DTO 的几种常见的方法了，你在实际应用时，要不断 debug 和仔细体会。当然除了这些外，还有 @Query 注解也是可以做到，下一节会有介绍。",-1),S=s("h3",{id:"总结",tabindex:"-1"},[i("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),x=s("p",null,'本课时我为你讲解了返回结果的类型有哪些，也为你重点介绍了返回 DTO 的实战经验和方式，其中返回 DTO 以及第一种方式，我在下一课时"@Query 帮我们解决了什么问题？什么时候应该选择 @Query？"中再详细讲，方便你做实际参考。',-1),R=s("p",null,'实际工作中可能返回结果会比这个更复杂，但是你要掌握学习的"套路"，可以举一反三，学会看源码，就可以轻松应对工作中遇到的任何问题。',-1),P=s("p",null,"你是不是通过老师的课学会了如何利用 Repository 的返回结果解决实际问题了？如果学会了就分享吧，也欢迎你在下方留言，说出自己的观点。",-1),U=s("blockquote",null,[s("p",null,[i("点击下方链接查看源码（不定时更新）"),s("br"),s("a",{href:"https://github.com/zhangzhenhuajack/spring-boot-guide/tree/master/spring-data/spring-data-jpa",target:"_blank",rel:"noreferrer"},"https://github.com/zhangzhenhuajack/spring-boot-guide/tree/master/spring-data/spring-data-jpa")])],-1);function O(T,N,L,w,J,M){const a=k("Image");return p(),l("div",null,[E,r,d,g,n(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/56/1A/Ciqc1F9rCruAArlKAANX2obUD_A764.png"}),i(),y,n(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/56/1A/Ciqc1F9rCteAD_ysAADP7mUlfak673.png"}),i(),F,n(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/56/1C/Ciqc1F9rC-uAWLY5AASQJuG5If0280.png"}),i(),o,c,u,n(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/56/27/CgqCHl9rC7uAOiNSAAGT0qXVLyY891.png"}),i(),C,n(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/56/1C/Ciqc1F9rC_-AOhtnAALvuoaT4mw230.png"}),i(),m,B,n(a,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/56/1D/Ciqc1F9rDAiARh9tAAQVFWlht1s532.png"}),i(),A,n(a,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/56/28/CgqCHl9rDDKAPKAIAASfIaP3unE060.png"}),i(),D,n(a,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image/M00/56/28/CgqCHl9rDD6AWKs9AAE8kGFOxmo130.png"}),i(),q,n(a,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image/M00/56/28/CgqCHl9rDEWAdoxmAARwd1XSUzo704.png"}),i(),b,v,_,f,n(a,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image/M00/56/28/CgqCHl9rDE-AYIBqAADX_Pwf0QE948.png"}),i(),j,S,x,R,P,U])}const V=t(e,[["render",O]]);export{I as __pageData,V as default};
