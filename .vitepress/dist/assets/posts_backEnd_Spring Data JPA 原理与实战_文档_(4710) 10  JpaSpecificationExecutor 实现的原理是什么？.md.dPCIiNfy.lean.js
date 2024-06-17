import{_ as t,F as p,g as k,K as n,h as i,ar as h,l as s,o as l}from"./chunks/framework.VlluEs-f.js";const w=JSON.parse('{"title":"10JpaSpecificationExecutor实现的原理是什么？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Spring Data JPA 原理与实战_文档/(4710) 10  JpaSpecificationExecutor 实现的原理是什么？.md","filePath":"posts/backEnd/Spring Data JPA 原理与实战_文档/(4710) 10  JpaSpecificationExecutor 实现的原理是什么？.md","lastUpdated":1718371218000}'),e={name:"posts/backEnd/Spring Data JPA 原理与实战_文档/(4710) 10  JpaSpecificationExecutor 实现的原理是什么？.md"},E=h("",16),r=h("",5),d=h("",12),g=h("",11),y=h("",2),c=s("p",null,"如上图所示，我们加入 groupyBy 某个字段，SQL 也会有相应的变化。那么我们再来看第三个参数。",-1),F=s("h4",{id:"criteriabuilder-cb",tabindex:"-1"},[i("CriteriaBuilder cb "),s("a",{class:"header-anchor",href:"#criteriabuilder-cb","aria-label":'Permalink to "CriteriaBuilder cb"'},"​")],-1),o=s("p",null,"CriteriaBuilder 是用来构建 CritiaQuery 的构建器对象，其实就相当于条件或者条件组合，并以 Predicate 的形式返回。它基本上提供了所有常用的方法，如下所示：",-1),A=s("p",null,"我们直接通过此类的 Structure 视图就可以看到都有哪些方法。其中，and、any 等用来做查询条件的组合；类似 between、equal、exist、ge、gt、isEmpty、isTrue、in 等用来做查询条件的查询，类似下图的一些方法。",-1),u=h("",8),D=s("p",null,"从图中我们可以看得出来：",-1),C=s("ol",null,[s("li",null,[s("p",null,"JpaSpecificationExecutor 和 JpaRepository 是平级接口，而它们对应的实现类都是 SimpleJpaRepository；")]),s("li",null,[s("p",null,"Specification 被 ExampleSpecification 和 JpaSpecificationExector 使用，用来创建查询；")]),s("li",null,[s("p",null,"Predicate 是 JPA 协议里面提供的查询条件的根基；")]),s("li",null,[s("p",null,"SimpleJpaRepository 利用 EntityManager 和 criteria 来实现由 JpaSpecificationExector 组合的 query。")])],-1),B=s("p",null,"那么我们再直观地看一下 JpaSpecificationExecutor 接口里面的方法 findAll 对应的 SimpleJpaRepository 里面的实现方法 findAl，我们通过工具可以很容易地看到相应的实现方法，如下所示：",-1),m=s("p",null,"你要知道，得到 TypeQuery 就可以直接操作JPA协议里面相应的方法了，那么我们看下 getQuery（spec，pageable）的实现过程。",-1),b=s("p",null,"之后一步一步 debug 就可以了。",-1),v=h("",28);function S(_,f,q,x,j,T){const a=p("Image");return l(),k("div",null,[E,n(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/5E/C7/Ciqc1F-Hw4GAVwjvAACBlHuTFN0497.png"}),i(),r,n(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/5E/C7/Ciqc1F-Hw4uAGaD2AADHMlVN_q0440.png"}),i(),d,n(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/5E/C7/Ciqc1F-Hw5SAeoXKAAMzN3mF_8I181.png"}),i(),g,n(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/5E/C7/Ciqc1F-Hw6uAJmdyAALVLoSlnLQ418.png"}),i(),y,n(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/5E/D2/CgqCHl-Hw7SAYWLnAAEIg0u_SOc872.png"}),i(),c,F,o,n(a,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/5E/C7/Ciqc1F-Hw7yAZgOYAASXGLn8fS0352.png"}),i(),A,n(a,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/5E/D3/CgqCHl-Hw8KAS41dAAKQ7MNjups722.png"}),i(),u,n(a,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image/M00/5E/C7/Ciqc1F-Hw9KAPLUnAAEGAy5X1Y8192.png"}),i(),D,C,B,n(a,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image/M00/5E/D3/CgqCHl-Hw9uAHAiHAAFZTdcBw2Y564.png"}),i(),m,n(a,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image/M00/5E/C7/Ciqc1F-Hw-qAcTArAACqAeHRq3M302.png"}),i(),b,n(a,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image/M00/5E/D3/CgqCHl-Hw_KAU1wCAAW1BokuNt8728.png"}),i(),v])}const J=t(e,[["render",S]]);export{w as __pageData,J as default};
