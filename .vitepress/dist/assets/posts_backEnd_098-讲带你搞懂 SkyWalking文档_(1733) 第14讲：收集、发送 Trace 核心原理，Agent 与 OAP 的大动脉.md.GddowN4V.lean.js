import{_ as t,F as p,g as h,K as n,h as s,l as i,ar as e,o as l}from"./chunks/framework.VlluEs-f.js";const x=JSON.parse('{"title":"第14讲：收集、发送Trace核心原理，Agent与OAP的大动脉","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(1733) 第14讲：收集、发送 Trace 核心原理，Agent 与 OAP 的大动脉.md","filePath":"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(1733) 第14讲：收集、发送 Trace 核心原理，Agent 与 OAP 的大动脉.md","lastUpdated":1718371218000}'),k={name:"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(1733) 第14讲：收集、发送 Trace 核心原理，Agent 与 OAP 的大动脉.md"},r=i("h1",{id:"第14讲-收集、发送trace核心原理-agent与oap的大动脉",tabindex:"-1"},[s("第14讲：收集、发送Trace核心原理，Agent与OAP的大动脉 "),i("a",{class:"header-anchor",href:"#第14讲-收集、发送trace核心原理-agent与oap的大动脉","aria-label":'Permalink to "第14讲：收集、发送Trace核心原理，Agent与OAP的大动脉"'},"​")],-1),E=i("p",null,"在前面的课时中，我们深入介绍了 SkyWalking 对 Trace 基本概念的实现。本课时我们将继续深入学习 Trace 相关的 BootService 接口实现类以及 Trace 收集和发送的核心逻辑。Trace 相关的 BootService 接口实现类如下图所示：",-1),g=e("",12),d=e("",5),c=e("",6),o=e("",5),y=i("h4",{id:"总结",tabindex:"-1"},[s("总结 "),i("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),C=i("p",null,"本课时我们重点介绍了 Trace 相关的 BootService 接口实现。首先介绍了 ContextManager 的核心实现，理清了它是如何将 TracingContext 与当前线程关联起来的。接下来介绍了 SamplingService 实现客户端 Trace 采样的逻辑。最后介绍了上报 Trace 的 gRPC 接口，深入分析了 TraceSegmentServiceClient 收集和上报 Trace 数据的核心逻辑。",-1);function m(S,A,F,T,_,v){const a=p("Image");return l(),h("div",null,[r,E,n(a,{alt:"sw0.png",src:"https://s0.lgstatic.com/i/image3/M01/14/4A/Ciqah16hMVaAatgbAABGB3yEwak805.png"}),s(),g,n(a,{alt:"sw1.png",src:"https://s0.lgstatic.com/i/image3/M01/14/49/Ciqah16hMHmAT7-VAALHNKUBOhU815.png"}),s(),d,n(a,{alt:"sw2.png",src:"https://s0.lgstatic.com/i/image3/M01/14/4A/Ciqah16hMNGAO2HOAAEZleWtX24011.png"}),s(),c,n(a,{alt:"sw3.png",src:"https://s0.lgstatic.com/i/image3/M01/14/4A/Ciqah16hMPmAaAOWAAPeM8ggypA230.png"}),s(),o,n(a,{alt:"sw4.png",src:"https://s0.lgstatic.com/i/image3/M01/07/1B/CgoCgV6hMS2AQpyZAAFcVM04dCk973.png"}),s(),y,C])}const u=t(k,[["render",m]]);export{x as __pageData,u as default};
