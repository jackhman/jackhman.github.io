import{_ as t,F as k,g as l,K as h,h as s,l as i,ar as n,o as p}from"./chunks/framework.VlluEs-f.js";const L=JSON.parse('{"title":"12案例分析：并行计算让代码“飞”起来","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Java 性能优化实战 21 讲_文档/(4189) 12  案例分析：并行计算让代码“飞”起来.md","filePath":"posts/backEnd/Java 性能优化实战 21 讲_文档/(4189) 12  案例分析：并行计算让代码“飞”起来.md","lastUpdated":1718371218000}'),e={name:"posts/backEnd/Java 性能优化实战 21 讲_文档/(4189) 12  案例分析：并行计算让代码“飞”起来.md"},E=i("h1",{id:"_12案例分析-并行计算让代码-飞-起来",tabindex:"-1"},[s("12案例分析：并行计算让代码“飞”起来 "),i("a",{class:"header-anchor",href:"#_12案例分析-并行计算让代码-飞-起来","aria-label":'Permalink to "12案例分析：并行计算让代码“飞”起来"'},"​")],-1),r=i("p",null,"现在的电脑，往往都有多颗核，即使是一部手机，也往往配备了并行处理器，通过多进程和多线程的手段，就可以让多个 CPU 核同时工作，加快任务的执行。",-1),d=i("p",null,[s("Java 提供了非常丰富的 API，来支持多线程开发。对我们 Java 程序员来说，"),i("strong",null,"多线程是面试和工作中必备的技能"),s("。但它如何应用到业务场景中？又有哪些注意事项？本课时将从一个并行获取数据的例子开始，逐步讲解这个面试中最频繁的知识点。")],-1),g=i("h3",{id:"并行获取数据",tabindex:"-1"},[s("并行获取数据 "),i("a",{class:"header-anchor",href:"#并行获取数据","aria-label":'Permalink to "并行获取数据"'},"​")],-1),y=i("p",null,"考虑到下面一种场景。有一个用户数据接口，要求在 50ms 内返回数据。它的调用逻辑非常复杂，打交道的接口也非常多，需要从 20 多个接口汇总数据。这些接口，最小的耗时也要 20ms，哪怕全部都是最优状态，算下来也需要 20*20 = 400ms。",-1),o=i("p",null,"如下图，解决的方式只有并行，通过多线程同时去获取计算结果，最后进行结果拼接。",-1),c=n("",24),F=n("",18),u=n("",9),C=n("",3),A=n("",4),B=n("",8),m=i("p",null,"由于 Netty 对 ThreadLocal 的使用非常频繁，Netty 对它进行了专项的优化。它之所以快，是因为在底层数据结构上做了文章，使用常量下标对元素进行定位，而不是使用JDK 默认的探测性算法。",-1),_=i("p",null,"还记得《03 | 深入剖析：哪些资源，容易成为瓶颈？》提到的伪共享问题吗？底层的 InternalThreadLocalMap对cacheline 也做了相应的优化。",-1),D=n("",9),b=n("",9),T=n("",6);function v(S,q,x,P,f,I){const a=k("Image");return p(),l("div",null,[E,r,d,g,y,o,h(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/43/F4/CgqCHl8856-AdSNPAACjNbY02o4445.png"}),s(),c,h(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/43/E9/Ciqc1F8858qAEUHZAACDI8Y5Ehc385.png"}),s(),F,h(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/43/F4/CgqCHl88596AfI6BAAQTo7l7qJs148.png"}),s(),u,h(a,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/43/F4/CgqCHl885-eAAm9sAACoGWQZ14E564.png"}),s(),C,h(a,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/43/F4/CgqCHl885-6AEAKjAADZkiqqLtY077.png"}),s(),A,h(a,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image/M00/43/E9/Ciqc1F885_aAbF8qAAEC6dLMPo0828.png"}),s(),B,h(a,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image/M00/43/F4/CgqCHl886AKAV0BAAAOn46tA-8c161.png"}),s(),m,_,h(a,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image/M00/43/E9/Ciqc1F886AqAGmwzAAJh0-ZJljI401.png"}),s(),D,h(a,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image/M00/43/E9/Ciqc1F886BSASB_lAAC1lOQlBbE230.png"}),s(),b,h(a,{alt:"Drawing 11.png",src:"https://s0.lgstatic.com/i/image/M00/43/F5/CgqCHl886B6ADAe8AAFW13_eF1Q541.png"}),s(),T])}const M=t(e,[["render",v]]);export{L as __pageData,M as default};
