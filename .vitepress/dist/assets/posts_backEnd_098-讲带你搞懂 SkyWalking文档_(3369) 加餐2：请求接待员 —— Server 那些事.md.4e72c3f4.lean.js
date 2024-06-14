import{_ as p,D as r,o,g as t,J as n,h as a,m as s,Q as l}from"./chunks/framework.f67d7268.js";const N=JSON.parse('{"title":"加餐2：请求接待员——Server那些事","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(3369) 加餐2：请求接待员 —— Server 那些事.md","filePath":"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(3369) 加餐2：请求接待员 —— Server 那些事.md","lastUpdated":1696682708000}'),c={name:"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(3369) 加餐2：请求接待员 —— Server 那些事.md"},y=s("h1",{id:"加餐2-请求接待员——server那些事",tabindex:"-1"},[a("加餐2：请求接待员——Server那些事 "),s("a",{class:"header-anchor",href:"#加餐2-请求接待员——server那些事","aria-label":'Permalink to "加餐2：请求接待员——Server那些事"'},"​")],-1),E=s("p",null,"我在介绍 SkyWalking Agent 核心原理时提到，用户可以在 agent.config 文件中的 collector.backend_service 配置项指定多个 OAP 服务的地址（逗号分隔），SkyWalking Agent 会切分该配置项，得到 OAP 服务列表，然后从其中随机选择一个 OAP 服务创建长连接，实现后续的数据上报。",-1),i=s("p",null,"在后端的 OAP 服务实例中，会启动一个 Server 来监听 Agent 发起的连接，本课时我们就来一起看看 Server 组件的具体实现。",-1),d=s("h4",{id:"server-核心实现",tabindex:"-1"},[a("Server 核心实现 "),s("a",{class:"header-anchor",href:"#server-核心实现","aria-label":'Permalink to "Server 核心实现"'},"​")],-1),v=s("p",null,"Server 接口以及实现类位于 server-library 模块下的 library-server 子模块中，如下图所示：",-1),g=s("p",null,"这里有两个核心接口： Server 接口和 ServerHandler 接口。Server 接口有 GRPCServer 和 JettyServer 两个实现类，如下图所示：",-1),S=l("",8),C=s("p",null,"通过下图我们可以看出， SkyWalking Agent 发出的每种 gRPC 请求，都有一个对应的 GRPCHandler 实现，这些实现同时也继承了 PB 生成的服务端辅助类，实现了 BindableService接口。",-1),h=s("p",null,"在后面介绍 OAP 中其他上层模块时会看到，在启动时都会将对应的 GRPCHandler 实现（也是 BindableServer 实现）添加到 GRPCServer 上。这样，GRPCServer 在收到 gRPC 请求时才能找到相应的处理模块，这些 GRPCHandler 实现（BindableServer 实现）即为相应上层模块入口。",-1),A=s("p",null,"JettyServer 也是类似的，在后面介绍 SkyWalking Rocketbot 查询请求的相关模块时会看到，前端的请求是通过 GraphQL​QueryHandler 进行处理的，它本身是个 HttpServlet 实现，同时实现了 ServerHandler 接口，如下图所示。",-1),u=s("p",null,"在低版本中，SkyWalking Agent 与后端 OAP 的交互还可以通过 Http 请求完成，每种类型的请求都对应一个 JettyHandler 实现，如下图所示。",-1),P=s("p",null,"如果 OAP 中的一个模块需要处理 Http 请求，就需要提供一个 JettyHandler 实现并注册到 JettyServer 中。",-1),F=s("h4",{id:"相关-service-实现",tabindex:"-1"},[a("相关 Service 实现 "),s("a",{class:"header-anchor",href:"#相关-service-实现","aria-label":'Permalink to "相关 Service 实现"'},"​")],-1),R=s("p",null,"通过上一节的介绍我们知道，library-server 是一个相对独立的模块，没有绑定任何 SkyWalking 中的概念，所以它是可以单独打成 jar 包给其他应用使用的（前面介绍的 DataCarrier 模块也是如此）。",-1),H=s("p",null,"OAP 其他模块在使用 library-server 模块提供的 Server 组件时，需要对其进行一层封装，如下图所示：",-1),k=s("p",null,"OAP 的 server-core 模块中定义了一个 GRPCHandlerRegister 接口，其实现中封装了一个 GRPCServer，并继承了 Service 接口，这样就将 library-server 模块引入到 OAP 的体系中，server-core 模块同样也为 JettyServer 进行了相应的封装，如下图所示：",-1),m=l("",24),_=s("p",null,"如果使用了独立的 Server 实例，则与 CoreModuleProvider 相同，会在SharingServerModuleProvider 的 notifyAfterCompleted() 方法中启动，代码不再重复。",-1),D=s("h4",{id:"server-的相关配置",tabindex:"-1"},[a("Server 的相关配置 "),s("a",{class:"header-anchor",href:"#server-的相关配置","aria-label":'Permalink to "Server 的相关配置"'},"​")],-1),G=s("p",null,"本课时最后，看一下 application.yml 中与 Server 相关的配置项。下图展示了 CoreModuleProvider 中启动的 Server 实例的配置以及 CoreModuleConfig 中的对应字段。 restHost、restPort、restContextPath 是 JettyServer 监听的 host 地址、端口号以及处理的 URL Path，gRPCHost、gRPCPort 是 GRPCServer 监听的 host 地址和端口号。maxConcurrentCallsPerConnection、maxMessageSize 是 GRPCServer 中单个连接的最大请求数以及单个消息的最大长度。",-1),b=s("p",null,"下图展示了 SharingServerModuleProvider 中启动的 Server 实例的配置以及 SharingServerConfig 中的对应字段，具体含义与 server-core 模块相同，不再重复。",-1),B=s("h4",{id:"总结",tabindex:"-1"},[a("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),M=s("p",null,"本课时深入介绍了 OAP 中接收 gRPC 请求的 GRPCServer 组件以及接收 Http 请求的 JettyServer 组件，分析了 server-core 模块如何对 library-server 模块的 Server 进行封装并引入到 OAP 体系。然后剖析了 OAP 在初始化流程中启动 Server 组件的核心流程（其中包括 server-core 以及 sharing-server-plugin 模块中的两组 Server），还介绍了这两组 Server 实例对应的配置信息。",-1);function w(J,x,I,f,O,j){const e=r("Image");return o(),t("div",null,[y,E,i,d,v,n(e,{alt:"image (4).png",src:"https://s0.lgstatic.com/i/image/M00/0E/A9/CgqCHl7GH8qAYLAAAAB7Hh0Zq6U618.png"}),a(),g,n(e,{alt:"Server继承关系.png",src:"https://s0.lgstatic.com/i/image/M00/0E/9D/Ciqc1F7GH9GAf3gRAAAeem8rA0s935.png"}),a(),S,n(e,{alt:"image (5).png",src:"https://s0.lgstatic.com/i/image/M00/0E/9D/Ciqc1F7GH9yAJDw0AADhn-9G47E874.png"}),a(),C,n(e,{alt:"image (6).png",src:"https://s0.lgstatic.com/i/image/M00/0E/A9/CgqCHl7GH-SAfec0AAHpmMYGuCk769.png"}),a(),h,A,n(e,{alt:"GraphQLQueryHandler.png",src:"https://s0.lgstatic.com/i/image/M00/0E/A9/CgqCHl7GH-2AT3uCAADSyb16jy0664.png"}),a(),u,n(e,{alt:"JettyHandler.png",src:"https://s0.lgstatic.com/i/image/M00/0E/A9/CgqCHl7GH_SALGuQAAI7EvvVlKg105.png"}),a(),P,F,R,H,n(e,{alt:"image (7).png",src:"https://s0.lgstatic.com/i/image/M00/0E/9E/Ciqc1F7GH_2AY1ESAAA-AcXju3w625.png"}),a(),k,n(e,{alt:"image (8).png",src:"https://s0.lgstatic.com/i/image/M00/0E/A9/CgqCHl7GIASAZhbOAAA_KXoo8XI235.png"}),a(),m,n(e,{alt:"image (9).png",src:"https://s0.lgstatic.com/i/image/M00/0E/A9/CgqCHl7GIBaARC57AAJ11UYHvq8272.png"}),a(),_,D,G,n(e,{alt:"image (10).png",src:"https://s0.lgstatic.com/i/image/M00/0E/9E/Ciqc1F7GIB6ANSDJABPfQZGq5oU867.png"}),a(),b,n(e,{alt:"image (11).png",src:"https://s0.lgstatic.com/i/image/M00/0E/A9/CgqCHl7GICWAd2pVAA4OF-xGTK0682.png"}),a(),B,M])}const W=p(c,[["render",w]]);export{N as __pageData,W as default};
