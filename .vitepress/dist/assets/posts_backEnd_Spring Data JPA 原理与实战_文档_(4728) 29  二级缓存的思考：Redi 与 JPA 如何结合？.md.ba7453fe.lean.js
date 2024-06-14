import{_ as o,D as e,o as c,g as r,J as p,h as a,Q as l,m as s}from"./chunks/framework.f67d7268.js";const q=JSON.parse('{"title":"29二级缓存的思考：Redi与JPA如何结合？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Spring Data JPA 原理与实战_文档/(4728) 29  二级缓存的思考：Redi 与 JPA 如何结合？.md","filePath":"posts/backEnd/Spring Data JPA 原理与实战_文档/(4728) 29  二级缓存的思考：Redi 与 JPA 如何结合？.md","lastUpdated":1696682708000}'),t={name:"posts/backEnd/Spring Data JPA 原理与实战_文档/(4728) 29  二级缓存的思考：Redi 与 JPA 如何结合？.md"},E=l("",36),y=s("p",null,"可以看到，第二次请求之后，取数据就不会再请求数据库了。那么 redis 我们已经熟悉了，那么来看一下 Spring Cache 都做了哪些事情。",-1),i=s("h4",{id:"spring-cache-介绍",tabindex:"-1"},[a("Spring Cache 介绍 "),s("a",{class:"header-anchor",href:"#spring-cache-介绍","aria-label":'Permalink to "Spring Cache 介绍"'},"​")],-1),C=s("p",null,"Spring 3.1 之后引入了基于注释（annotation）的缓存（cache）技术，它本质上不是一个具体的缓存实现方案（例如 EHCache 或者 Redis），而是一个对缓存使用的抽象概念，通过在既有代码中添加少量它定义的各种 annotation，就能够达到缓存方法的返回对象的效果。",-1),u=s("p",null,"Spring 的缓存技术还具备相当的灵活性，不仅能够使用 SpEL（Spring Expression Language）来定义缓存的 key 和各种 condition，还提供开箱即用的缓存临时存储方案，也支持主流的专业缓存，例如 Redis，EHCache 集成。而 Spring Cache 属于 Spring framework 的一部分，在下面图片所示的这个包里面。",-1),F=l("",18),h=l("",4),d=s("p",null,[s("strong",null,"org.springframework.boot.autoconfigure.cache.RedisCacheConfiguration")],-1),g=s("p",null,"它是加载 Cache 的实现者，也是 redis 的实现类，关键源码如下图所示。",-1),A=s("p",null,"我们可以看得出来，它依赖本身的 Redis 的连接，并且加载了 RedisCacheManager；同时可以看到关于 Cache 和 Redis 的配置有哪些。",-1),D=s("p",null,'通过 CacheProperties 里面 redis 的配置，我们可以设置"key 的统一前缀、默认过期时间、是否缓存 null 值、是否使用前缀"这四个配置。',-1),b=l("",25);function f(m,B,v,k,S,R){const n=e("Image");return c(),r("div",null,[E,p(n,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image2/M01/03/A1/CgpVE1_gGfGAAYRDAAGxaGz4d8A668.png"}),a(),y,i,C,u,p(n,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image2/M01/03/9F/Cip5yF_gGfmAfvKbAAGFdPiyN9k521.png"}),a(),F,p(n,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image2/M01/03/9F/Cip5yF_gGgWAPkIYAAD6KrApZRs929.png"}),a(),h,p(n,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image2/M01/03/9F/Cip5yF_gGgyAJ21FAADMLk_C6ag487.png"}),a(),d,g,p(n,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/8B/BE/Ciqc1F_gGhKAQGL2AAIaDnIIDQQ607.png"}),a(),A,D,p(n,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/8B/C9/CgqCHl_gGhqAf6niAACSWTdYSNc168.png"}),a(),b])}const P=o(t,[["render",f]]);export{q as __pageData,P as default};
