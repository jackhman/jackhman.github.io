import{_ as i,F as s,g as o,K as p,h as a,l as e,ar as n,o as r}from"./chunks/framework.VlluEs-f.js";const I=JSON.parse('{"title":"第07讲：大厂面试题：有了G1还需要其他垃圾回收器吗？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1031) 第07讲：大厂面试题：有了 G1 还需要其他垃圾回收器吗？.md","filePath":"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1031) 第07讲：大厂面试题：有了 G1 还需要其他垃圾回收器吗？.md","lastUpdated":1718371218000}'),l={name:"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1031) 第07讲：大厂面试题：有了 G1 还需要其他垃圾回收器吗？.md"},_=e("h1",{id:"第07讲-大厂面试题-有了g1还需要其他垃圾回收器吗",tabindex:"-1"},[a("第07讲：大厂面试题：有了G1还需要其他垃圾回收器吗？ "),e("a",{class:"header-anchor",href:"#第07讲-大厂面试题-有了g1还需要其他垃圾回收器吗","aria-label":'Permalink to "第07讲：大厂面试题：有了G1还需要其他垃圾回收器吗？"'},"​")],-1),c=e("p",null,"本课时我们主要来看下这两个高频的面试考题：",-1),g=e("ul",null,[e("li",null,[e("p",null,"G1 的回收原理是什么？为什么 G1 比传统 GC 回收性能好？")]),e("li",null,[e("p",null,"为什么 G1 如此完美仍然会有 ZGC？")])],-1),h=e("p",null,"我们在上一课时，简要的介绍了 CMS 垃圾回收器，下面我们简单回忆一下它的一个极端场景（而且是经常发生的场景）。",-1),d=e("br",null,null,-1),u=e("p",null,"在发生 Minor GC 时，由于 Survivor 区已经放不下了，多出的对象只能提升（promotion）到老年代。但是此时老年代因为空间碎片的缘故，会发生 concurrent mode failure 的错误。这个时候，就需要降级为 Serail Old 垃圾回收器进行收集。这就是比 concurrent mode failure 更加严重的 promotion failed 问题。",-1),C=n("",20),G=n("",23),m=n("",11),S=n("",19),b=n("",15),T=n("",20),R=n("",16),E=n("",14);function A(k,M,P,X,x,q){const t=s("Image");return r(),o("div",null,[_,c,g,h,d,u,p(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/62/75/Cgq2xl4lSamAVeyxAAAuIzs1H0M233.jpg"}),a(),C,p(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/62/74/CgpOIF4lSamARPiHAABC8ugXMK8124.jpg"}),a(),G,p(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/62/75/Cgq2xl4lSamAcuN5AAA9uBTIpvw935.jpg"}),a(),m,p(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/62/74/CgpOIF4lSamAXeymAABc7ztdEEU131.jpg"}),a(),S,p(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/62/75/Cgq2xl4lSaqAP6OGAABH2k_Jpog641.jpg"}),a(),b,p(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/62/74/CgpOIF4lSaqAPBcOAABEfIhFxnI679.jpg"}),a(),T,p(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/62/75/Cgq2xl4lSaqAcPP3AAAel8LUC1s541.jpg"}),a(),R,p(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/62/74/CgpOIF4lSaqAXfe5AAA_S1VhbdY081.jpg"}),a(),E])}const v=i(l,[["render",A]]);export{I as __pageData,v as default};
