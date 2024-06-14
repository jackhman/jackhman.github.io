import{_ as o,D as s,o as n,g as l,J as _,h as t,Q as p,m as a}from"./chunks/framework.f67d7268.js";const D=JSON.parse('{"title":"第23讲：分库分表以后，如何实现扩容？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/分布式技术原理与实战45讲_文档/(1924) 第23讲：分库分表以后，如何实现扩容？.md","filePath":"posts/backEnd/分布式技术原理与实战45讲_文档/(1924) 第23讲：分库分表以后，如何实现扩容？.md","lastUpdated":1696682708000}'),r={name:"posts/backEnd/分布式技术原理与实战45讲_文档/(1924) 第23讲：分库分表以后，如何实现扩容？.md"},i=p("",12),c=p("",14),h=a("p",null,"规则示意图",-1),d=a("p",null,"可以看到，基于数据范围进行路由的规则，当进行扩容时，可以直接增加新的存储，将新生成的数据区间映射到新添加的存储节点中，不需要进行节点之间的调整，也不需要迁移历史数据。",-1),g=a("p",null,"但是这种方式的缺点就是数据访问不均匀。如果按照这种规则，另外一个数据库在很长一段时间内都得不到应用，导致数据节点负荷不均，在极端情况下，当前热点库可能出现性能瓶颈，无法发挥分库分表带来的性能优势。",-1),m=a("h4",{id:"_3-结合数据范围和哈希取模",tabindex:"-1"},[t("3. 结合数据范围和哈希取模 "),a("a",{class:"header-anchor",href:"#_3-结合数据范围和哈希取模","aria-label":'Permalink to "3. 结合数据范围和哈希取模"'},"​")],-1),u=a("p",null,"现在考虑，如果结合以上两种方式数据范围和哈希取模，那么是不是可以实现数据均匀分布，也可以更好地进行扩容？",-1),T=a("p",null,"我们设计这样的一个路由规则，首先对订单 ID 进行哈希取模，然后对取模后的数据再次进行范围分区。",-1),A=p("",9);function b(f,I,q,P,x,C){const e=s("Image");return n(),l("div",null,[i,_(e,{alt:"3.png",src:"https://s0.lgstatic.com/i/image/M00/26/60/CgqCHl7x0eOAWkmIAACs_WhYNh0680.png"}),t(),c,_(e,{alt:"4.png",src:"https://s0.lgstatic.com/i/image/M00/26/54/Ciqc1F7x0fSADRFMAACumaYaTOo201.png"}),t(),h,d,g,m,u,T,_(e,{alt:"5.png",src:"https://s0.lgstatic.com/i/image/M00/26/60/CgqCHl7x0gGARLrYAAEBoh985X0406.png"}),t(),A])}const S=o(r,[["render",b]]);export{D as __pageData,S as default};
