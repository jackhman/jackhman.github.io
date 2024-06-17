import{_ as p,F as e,g as l,K as t,h as i,l as s,ar as n,o as h}from"./chunks/framework.VlluEs-f.js";const N=JSON.parse('{"title":"02SpringDataCommon之Repoitory如何全面掌握？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Spring Data JPA 原理与实战_文档/(4702) 02  Spring Data Common 之 Repoitory 如何全面掌握？.md","filePath":"posts/backEnd/Spring Data JPA 原理与实战_文档/(4702) 02  Spring Data Common 之 Repoitory 如何全面掌握？.md","lastUpdated":1718371218000}'),r={name:"posts/backEnd/Spring Data JPA 原理与实战_文档/(4702) 02  Spring Data Common 之 Repoitory 如何全面掌握？.md"},k=s("h1",{id:"_02springdatacommon之repoitory如何全面掌握",tabindex:"-1"},[i("02SpringDataCommon之Repoitory如何全面掌握？ "),s("a",{class:"header-anchor",href:"#_02springdatacommon之repoitory如何全面掌握","aria-label":'Permalink to "02SpringDataCommon之Repoitory如何全面掌握？"'},"​")],-1),o=s("p",null,"通过上一课时，我们知道了 Spring Data 对整个数据操作做了很好的封装，其中 Spring Data Common 定义了很多公用的接口和一些相对数据操作的公共实现（如分页排序、结果映射、Autiting 信息、事务等），而 Spring Data JPA 就是 Spring Data Common 的关系数据库的查询实现。",-1),g=s("p",null,"所以本课时我们来了解一下 Spring Data Common 的核心内容------Repository。我将从 Repository 的所有子类着手，带领你逐步掌握 CrudRepository、PageingAndSortingRepository、JpaRepository的使用。",-1),d=s("p",null,"在讲解 Repository 之前，我们先来看看 Spring Data JPA 所依赖的 jar 包关系是什么样的，看下 Spring Data Common 的 jar 依赖关系。",-1),E=s("h3",{id:"spring-data-common-的依赖关系",tabindex:"-1"},[i("Spring Data Common 的依赖关系 "),s("a",{class:"header-anchor",href:"#spring-data-common-的依赖关系","aria-label":'Permalink to "Spring Data Common 的依赖关系"'},"​")],-1),y=s("p",null,"我们通过 Gradle 看一下项目依赖，了解一下 Spring Data Common 的依赖关系。",-1),c=n("",12),A=s("p",null,"通过该层次结构视图，你就会明白基类 Repository 的用意，由此可知，存储库分为以下 4 个大类。",-1),F=s("ul",null,[s("li",null,[s("p",null,'ReactiveCrudRepository 这条线是响应式编程，主要支持当前 NoSQL 方面的操作，因为这方面大部分操作都是分布式的，所以由此我们可以看出 Spring Data 想统一数据操作的"野心"，即想提供关于所有 Data 方面的操作。目前 Reactive 主要有 Cassandra、MongoDB、Redis 的实现。')]),s("li",null,[s("p",null,"RxJava2CrudRepository 这条线是为了支持 RxJava 2 做的标准响应式编程的接口。")]),s("li",null,[s("p",null,"CoroutineCrudRepository 这条继承关系链是为了支持 Kotlin 语法而实现的。")]),s("li",null,[s("p",null,"CrudRepository 这条继承关系链正是本课时我要详细介绍的 JPA 相关的操作接口，你也可以把我的这种方法应用到另外 3 种继承关系链里面学习。")])],-1),D=s("p",null,'然后，通过 Intellij Idea，我们也可以打开类 UserRepository.java（第一课时"Spring Data JPA 初识"里面的案例），在此类里面，鼠标右键点击 Show Diagram 显示层次结构图，用图表的方式查看类的关系层次，打开后如下图（Repository 继承关系图）所示：',-1),u=n("",10),m=s("p",null,'这时，我在第 01 课时中"Spring Boot 和 Spring Data JPA 的 Demo 演示"的例子里，提到过的 Controller 中引用 userRepository 的 save 和 findAll 方法就会报错。',-1),C=s("p",null,"上面这个实例通过继承 Repository，使 Spring 容器知道 UserRepository 是 DB 操作的类，是我们可以对 User 对象进行 CURD 的操作。这时我们对 Repository 有了一定的掌握，接下来再来看看它的直接子类 CurdRepository 接口都为我们提供了哪些方法。",-1),R=s("h3",{id:"crudrepository-接口",tabindex:"-1"},[i("CrudRepository 接口 "),s("a",{class:"header-anchor",href:"#crudrepository-接口","aria-label":'Permalink to "CrudRepository 接口"'},"​")],-1),_=s("p",null,"下面我们通过 IDEA 工具，看下 CrudRepository 为我们提供的方法有哪些。",-1),S=n("",8),b=n("",22),B=n("",9),v=n("",5),P=n("",9),f=s("p",null,"并开启 annotation processing。",-1),T=s("blockquote",null,[s("p",null,[i("点击下方链接查看源码（不定时更新）"),s("br"),s("a",{href:"https://github.com/zhangzhenhuajack/spring-boot-guide/tree/master/spring-data/spring-data-jpa",target:"_blank",rel:"noreferrer"},"https://github.com/zhangzhenhuajack/spring-boot-guide/tree/master/spring-data/spring-data-jpa")])],-1);function J(I,x,q,U,j,w){const a=e("Image");return h(),l("div",null,[k,o,g,d,E,y,t(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/50/6F/Ciqc1F9i18OABIgzAAGVeUj3uCU674.png"}),i(),c,t(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/50/7B/CgqCHl9i1-eADg-VAAL1Uy4EvRE891.png"}),i(),A,F,D,t(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/50/70/Ciqc1F9i2AGAReiKAACJ2nYY8aw248.png"}),i(),u,t(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/50/7B/CgqCHl9i2BCAOCRBAADotul53XM199.png"}),i(),m,t(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/50/7B/CgqCHl9i2BWAKgsoAADcQgdoISs764.png"}),i(),C,R,_,t(a,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/50/7B/CgqCHl9i2B-AcA4zAADw4REfVrA348.png"}),i(),S,t(a,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/50/7C/CgqCHl9i2PKAdUmeAASdzFspsBQ747.png"}),i(),b,t(a,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image/M00/50/7C/CgqCHl9i2RKAfFGjAAGKTsMkBdw667.png"}),i(),B,t(a,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image/M00/50/7C/CgqCHl9i2SCAeilgAAZs6DPtWQM598.png"}),i(),v,t(a,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image/M00/50/7C/CgqCHl9i2S2AC9AXAAWAo3HVeSY110.png"}),i(),P,t(a,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image/M00/50/7C/CgqCHl9i2TWAJZg_AABb1DeHmt4363.png"}),i(),f,t(a,{alt:"Drawing 11.png",src:"https://s0.lgstatic.com/i/image/M00/50/7C/CgqCHl9i2TuAT9DcAACj394zaUc082.png"}),i(),T])}const V=p(r,[["render",J]]);export{N as __pageData,V as default};
