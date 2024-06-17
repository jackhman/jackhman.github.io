import{_ as h,F as e,g as t,K as n,h as i,l as s,ar as l,o as k}from"./chunks/framework.VlluEs-f.js";const R=JSON.parse('{"title":"第11讲：BootService核心实现解析，Agent的“地基”原来是这样的","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(1731) 第11讲：BootService 核心实现解析，Agent 的“地基”原来是这样的.md","filePath":"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(1731) 第11讲：BootService 核心实现解析，Agent 的“地基”原来是这样的.md","lastUpdated":1718371218000}'),p={name:"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(1731) 第11讲：BootService 核心实现解析，Agent 的“地基”原来是这样的.md"},E=s("h1",{id:"第11讲-bootservice核心实现解析-agent的-地基-原来是这样的",tabindex:"-1"},[i("第11讲：BootService核心实现解析，Agent的“地基”原来是这样的 "),s("a",{class:"header-anchor",href:"#第11讲-bootservice核心实现解析-agent的-地基-原来是这样的","aria-label":'Permalink to "第11讲：BootService核心实现解析，Agent的“地基”原来是这样的"'},"​")],-1),r=s("p",null,'在 08 课时"SkyWalking Agent 启动流程剖析"中我详细介绍了 ServiceManager 加载并初始化 BootService 实现的核心逻辑。下图展示了 BootService 接口的所有实现类，本课时将深入分析这些 BootService 实现类的具体逻辑：',-1),d=s("h3",{id:"网络连接管理",tabindex:"-1"},[i("网络连接管理 "),s("a",{class:"header-anchor",href:"#网络连接管理","aria-label":'Permalink to "网络连接管理"'},"​")],-1),g=s("p",null,"在前面的介绍中提到 SkyWalking Agent 会定期将收集到的 JVM 监控和 Trace 数据定期发送到后端的 OAP 集群，GRPCChannelManager 负责维护 Agent 与后端 OAP 集群通信时使用的网络连接。这里首先说一下 gRPC 里面的两个组件：",-1),y=s("ul",null,[s("li",null,"**ManagedChanne l：它是 gRPC 客户端的核心类之一，它逻辑上表示一个 Channel，底层持有一个 TCP 链接，并负责维护此连接的活性。也就是说，在 RPC 调用的任何时机，如果检测到底层连接处于关闭状态（terminated），将会尝试重建连接。通常情况下，我们不需要在 RPC 调用结束后就关闭 Channel ，该 Channel 可以被一直重用，直到整个客户端程序关闭。当然，我们可以在客户端内以连接池的方式使用多个 ManagedChannel ，在每次 RPC 请求时选择使用轮训或是随机等算法选择一个可用的 Channel，这样可以提高客户端整体的并发能力。"),s("li",null,"**ManagedChannelBuilder：**它负责创建客户端 Channel，ManagedChannelBuilder 使用了 provider 机制，具体是创建了哪种 Channel 由 provider 决定，常用的 ManagedChannelBuilder 有三种：NettyChannelBuilder、OkHttpChannelBuilder、InProcessChannelBuilder，如下图所示：")],-1),c=l("",7),o=s("p",null,"最后，GRPCChannelManager 对外提供了 reportError() 方法，在其他依赖该网络连接的 BootService 实现发送请求失败时，可以通过该方法将 reconnect 字段设置为 true，并由后台线程重新创建 GRPCChannel。",-1),C=s("h3",{id:"注册协议及实现",tabindex:"-1"},[i("注册协议及实现 "),s("a",{class:"header-anchor",href:"#注册协议及实现","aria-label":'Permalink to "注册协议及实现"'},"​")],-1),F=s("p",null,"介绍完 Agent 与后端 OAP 集群基本的连接方式之后，还需要了解 Agent 和 Server 交互的流程和协议。在 Agent 与后端 OAP 创建连接成功后的第一件事是进行注册流程。",-1),A=s("p",null,"首先来介绍注册协议涉及的 proto 的定义------ Register.proto 文件，其位置如下：",-1),u=l("",32),D=l("",13),v=l("",10);function B(S,m,b,M,_,I){const a=e("Image");return k(),t("div",null,[E,r,n(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/85/D6/Cgq2xl6OzXqACRPAAAEm5IQEH5Y241.png"}),i(),d,g,y,n(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0C/C0/Ciqah16OzXqAYIu0AABBDZDMT8c843.png"}),i(),c,n(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/85/D6/Cgq2xl6OzXqAXhA7AACNDBlVUrQ730.png"}),i(),o,C,F,A,n(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0C/C0/Ciqah16OzXuAO6enAAJXETLoQmo373.png"}),i(),u,n(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/85/D6/Cgq2xl6OzXuAWM3MAAHZFmJeMwM515.png"}),i(),D,n(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0C/C0/Ciqah16OzXuAH1obAACj_oQjWi4810.png"}),i(),v])}const N=h(p,[["render",B]]);export{R as __pageData,N as default};
