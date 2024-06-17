import{_ as k,F as l,g as p,K as n,h as i,l as s,ar as h,o as t}from"./chunks/framework.VlluEs-f.js";const T=JSON.parse('{"title":"12简易版RPC框架实现（下）","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Dubbo源码解读与实战_文档/(4603) 12  简易版 RPC 框架实现（下）.md","filePath":"posts/backEnd/Dubbo源码解读与实战_文档/(4603) 12  简易版 RPC 框架实现（下）.md","lastUpdated":1718371218000}'),e={name:"posts/backEnd/Dubbo源码解读与实战_文档/(4603) 12  简易版 RPC 框架实现（下）.md"},E=s("h1",{id:"_12简易版rpc框架实现-下",tabindex:"-1"},[i("12简易版RPC框架实现（下） "),s("a",{class:"header-anchor",href:"#_12简易版rpc框架实现-下","aria-label":'Permalink to "12简易版RPC框架实现（下）"'},"​")],-1),r=s("p",null,"在上一课时中，我们介绍了整个简易 RPC 框架项目的结构和工作原理，并且介绍了简易 RPC 框架底层的协议结构、序列化/反序列化实现、压缩实现以及编解码器的具体实现。本课时我们将继续自底向上，介绍简易 RPC 框架的剩余部分实现。",-1),d=s("h3",{id:"transport-相关实现",tabindex:"-1"},[i("transport 相关实现 "),s("a",{class:"header-anchor",href:"#transport-相关实现","aria-label":'Permalink to "transport 相关实现"'},"​")],-1),g=s("p",null,"正如前文介绍 Netty 线程模型的时候提到，我们不能在 Netty 的 I/O 线程中执行耗时的业务逻辑。在 Demo RPC 框架的 Server 端接收到请求时，首先会通过上面介绍的 DemoRpcDecoder 反序列化得到请求消息，之后我们会通过一个自定义的 ChannelHandler（DemoRpcServerHandler）将请求提交给业务线程池进行处理。",-1),y=s("p",null,"在 Demo RPC 框架的 Client 端接收到响应消息的时候，也是先通过 DemoRpcDecoder 反序列化得到响应消息，之后通过一个自定义的 ChannelHandler（DemoRpcClientHandler）将响应返回给上层业务。",-1),F=s("p",null,"DemoRpcServerHandler 和 DemoRpcClientHandler 都继承自 SimpleChannelInboundHandler，如下图所示：",-1),c=h("",11),o=h("",5),D=s("p",null,"服务端 ChannelHandler 结构图",-1),A=s("h3",{id:"registry-相关实现",tabindex:"-1"},[i("registry 相关实现 "),s("a",{class:"header-anchor",href:"#registry-相关实现","aria-label":'Permalink to "registry 相关实现"'},"​")],-1),C=s("p",null,"介绍完客户端和服务端的通信之后，我们再来看简易 RPC 框架的另一个基础能力------服务注册与服务发现能力，对应 demo-rpc 项目源码中的 registry 包。",-1),u=s("p",null,"registry 包主要是依赖 Apache Curator 实现了一个简易版本的 ZooKeeper 客户端，并基于 ZooKeeper 实现了注册中心最基本的两个功能：Provider 注册以及 Consumer 订阅。",-1),B=s("p",null,"这里我们先定义一个 Registry 接口，其中提供了注册以及查询服务实例的方法，如下图所示：",-1),v=h("",14),m=h("",13);function b(S,_,R,I,x,P){const a=l("Image");return t(),p("div",null,[E,r,d,g,y,F,n(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/4A/7F/Ciqc1F9R3QOAbbKRAAD4lAEEjtg767.png"}),i(),c,n(a,{alt:"Lark20200904-143159.png",src:"https://s0.lgstatic.com/i/image/M00/4A/81/Ciqc1F9R35eARBOdAAEUxDl6DGE227.png"}),i(),o,n(a,{alt:"Lark20200904-143204.png",src:"https://s0.lgstatic.com/i/image/M00/4A/8C/CgqCHl9R34eAEosNAAEZMNHAB1c561.png"}),i(),D,A,C,u,B,n(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/4A/7F/Ciqc1F9R3WuAd1UPAAA82c309GI280.png"}),i(),v,n(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/4A/7F/Ciqc1F9R3YiAXV8hAAAtXArd3J0997.png"}),i(),m])}const f=k(e,[["render",b]]);export{T as __pageData,f as default};
