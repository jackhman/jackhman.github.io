import{_ as h,F as p,g as l,K as a,h as s,ar as n,l as t,o as e}from"./chunks/framework.VlluEs-f.js";const B=JSON.parse('{"title":"24如何实现熔断机制？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Go 微服务实战 38 讲_文档/(3819) 24  如何实现熔断机制？.md","filePath":"posts/backEnd/Go 微服务实战 38 讲_文档/(3819) 24  如何实现熔断机制？.md","lastUpdated":1718371218000}'),k={name:"posts/backEnd/Go 微服务实战 38 讲_文档/(3819) 24  如何实现熔断机制？.md"},r=n("",4),E=t("p",null,"微服务服务调用链示意图",-1),d=t("p",null,"通过该时序图，我们可以看到：客户端（Client）发起了一次请求 Request1，网关（Gateway）在接收到请求后将它转发（标记为 Request2）给 Service-A；由于这次请求涉及 Service-B 中的数据，所以 Service-A 又向 Service-B 发起了一次 Request3 获取对应的数据；处理结束后，将结果返回给网关，由网关将结果返回给客户端。这里的 Request2 和 Request3 就共同组成了这次调用的调用链。",-1),o=t("p",null,[s("至于服务雪崩，我们在第 22 课时曾讲解过，"),t("strong",null,"服务雪崩是指当调用链的某个环节（特别是服务提供方服务）不可用时，将会导致其上游环节不可用，并最终将这种影响扩大到整个系统中，导致整个系统的不可用"),s("。如下图所示：")],-1),g=n("",6),y=n("",13),c=n("",17),F=n("",6);function u(_,C,m,A,q,v){const i=p("Image");return e(),l("div",null,[r,a(i,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/4F/F7/CgqCHl9hoYyAd7J7AAAu6XVpTzE568.png"}),s(),E,d,o,a(i,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/4F/F7/CgqCHl9hoZqAaUmRAABYO2_cRvk414.png"}),s(),g,a(i,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/4F/EC/Ciqc1F9hoaiANJYgAAA_xMaFiWc181.png"}),s(),y,a(i,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/4F/F8/CgqCHl9hobqAJ0fBAABU7XC4gtY397.png"}),s(),c,a(i,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/4F/EC/Ciqc1F9hodmASLFTAADzDRuBp1g798.png"}),s(),F])}const x=h(k,[["render",u]]);export{B as __pageData,x as default};
