import{_ as o,D as e,o as t,g as r,J as a,h as s,Q as p,m as l}from"./chunks/framework.f67d7268.js";const x=JSON.parse('{"title":"24如何实现熔断机制？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Go 微服务实战 38 讲_文档/(3819) 24  如何实现熔断机制？.md","filePath":"posts/backEnd/Go 微服务实战 38 讲_文档/(3819) 24  如何实现熔断机制？.md","lastUpdated":1696682708000}'),c={name:"posts/backEnd/Go 微服务实战 38 讲_文档/(3819) 24  如何实现熔断机制？.md"},E=p("",4),y=l("p",null,"微服务服务调用链示意图",-1),i=l("p",null,"通过该时序图，我们可以看到：客户端（Client）发起了一次请求 Request1，网关（Gateway）在接收到请求后将它转发（标记为 Request2）给 Service-A；由于这次请求涉及 Service-B 中的数据，所以 Service-A 又向 Service-B 发起了一次 Request3 获取对应的数据；处理结束后，将结果返回给网关，由网关将结果返回给客户端。这里的 Request2 和 Request3 就共同组成了这次调用的调用链。",-1),u=l("p",null,[s("至于服务雪崩，我们在第 22 课时曾讲解过，"),l("strong",null,"服务雪崩是指当调用链的某个环节（特别是服务提供方服务）不可用时，将会导致其上游环节不可用，并最终将这种影响扩大到整个系统中，导致整个系统的不可用"),s("。如下图所示：")],-1),d=p("",6),F=p("",13),q=p("",17),h=p("",6);function m(C,_,g,A,v,D){const n=e("Image");return t(),r("div",null,[E,a(n,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/4F/F7/CgqCHl9hoYyAd7J7AAAu6XVpTzE568.png"}),s(),y,i,u,a(n,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/4F/F7/CgqCHl9hoZqAaUmRAABYO2_cRvk414.png"}),s(),d,a(n,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/4F/EC/Ciqc1F9hoaiANJYgAAA_xMaFiWc181.png"}),s(),F,a(n,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/4F/F8/CgqCHl9hobqAJ0fBAABU7XC4gtY397.png"}),s(),q,a(n,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/4F/EC/Ciqc1F9hodmASLFTAADzDRuBp1g798.png"}),s(),h])}const S=o(c,[["render",m]]);export{x as __pageData,S as default};
