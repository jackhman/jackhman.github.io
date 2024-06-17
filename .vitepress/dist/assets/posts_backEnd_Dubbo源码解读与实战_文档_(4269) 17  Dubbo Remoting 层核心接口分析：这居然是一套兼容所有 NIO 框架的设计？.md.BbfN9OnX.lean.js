import{_ as l,F as e,g as p,K as a,h as i,l as s,ar as t,o as h}from"./chunks/framework.VlluEs-f.js";const V=JSON.parse('{"title":"17DubboRemoting层核心接口分析：这居然是一套兼容所有NIO框架的设计？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Dubbo源码解读与实战_文档/(4269) 17  Dubbo Remoting 层核心接口分析：这居然是一套兼容所有 NIO 框架的设计？.md","filePath":"posts/backEnd/Dubbo源码解读与实战_文档/(4269) 17  Dubbo Remoting 层核心接口分析：这居然是一套兼容所有 NIO 框架的设计？.md","lastUpdated":1718371218000}'),k={name:"posts/backEnd/Dubbo源码解读与实战_文档/(4269) 17  Dubbo Remoting 层核心接口分析：这居然是一套兼容所有 NIO 框架的设计？.md"},r=s("h1",{id:"_17dubboremoting层核心接口分析-这居然是一套兼容所有nio框架的设计",tabindex:"-1"},[i("17DubboRemoting层核心接口分析：这居然是一套兼容所有NIO框架的设计？ "),s("a",{class:"header-anchor",href:"#_17dubboremoting层核心接口分析-这居然是一套兼容所有nio框架的设计","aria-label":'Permalink to "17DubboRemoting层核心接口分析：这居然是一套兼容所有NIO框架的设计？"'},"​")],-1),E=s("p",null,"在本专栏的第二部分，我们深入介绍了 Dubbo 注册中心的相关实现，下面我们开始介绍 dubbo-remoting 模块，该模块提供了多种客户端和服务端通信的功能。在 Dubbo 的整体架构设计图中，我们可以看到最底层红色框选中的部分即为 Remoting 层，其中包括了 Exchange、Transport和Serialize 三个子层次。这里我们要介绍的 dubbo-remoting 模块主要对应 Exchange 和 Transport 两层。",-1),d=s("p",null,"Dubbo 整体架构设计图",-1),o=s("p",null,"Dubbo 并没有自己实现一套完整的网络库，而是使用现有的、相对成熟的第三方网络库，例如，Netty、Mina 或是 Grizzly 等 NIO 框架。我们可以根据自己的实际场景和需求修改配置，选择底层使用的 NIO 框架。",-1),g=s("p",null,"下图展示了 dubbo-remoting 模块的结构，其中每个子模块对应一个第三方 NIO 框架，例如，dubbo-remoting-netty4 子模块使用 Netty4 实现 Dubbo 的远程通信，dubbo-remoting-grizzly 子模块使用 Grizzly 实现 Dubbo 的远程通信。",-1),c=s("p",null,"其中的 dubbo-remoting-zookeeper，我们在前面第 15 课时介绍基于 Zookeeper 的注册中心实现时已经讲解过了，它使用 Apache Curator 实现了与 Zookeeper 的交互。",-1),y=s("h3",{id:"dubbo-remoting-api-模块",tabindex:"-1"},[i("dubbo-remoting-api 模块 "),s("a",{class:"header-anchor",href:"#dubbo-remoting-api-模块","aria-label":'Permalink to "dubbo-remoting-api 模块"'},"​")],-1),C=s("p",null,[i("需要注意的是，"),s("strong",null,"Dubbo 的 dubbo-remoting-api 是其他 dubbo-remoting-* 模块的顶层抽象，其他 dubbo-remoting 子模块都是依赖第三方 NIO 库实现 dubbo-remoting-api 模块的"),i("，依赖关系如下图所示：")],-1),_=s("p",null,"我们先来看一下 dubbo-remoting-api 中对整个 Remoting 层的抽象，dubbo-remoting-api 模块的结构如下图所示：",-1),b=t("",6),u=s("p",null,"如上图所示，这里的 get*() 方法是获得 Endpoint 本身的一些属性，其中包括获取 Endpoint 的本地地址、关联的 URL 信息以及底层 Channel 关联的 ChannelHandler。send() 方法负责数据发送，两个重载的区别在后面介绍 Endpoint 实现的时候我们再详细说明。最后两个 close() 方法的重载以及 startClose() 方法用于关闭底层 Channel ，isClosed() 方法用于检测底层 Channel 是否已关闭。",-1),F=s("p",null,"Channel 是对两个 Endpoint 连接的抽象，好比连接两个位置的传送带，两个 Endpoint 传输的消息就好比传送带上的货物，消息发送端会往 Channel 写入消息，而接收端会从 Channel 读取消息。这与第 10 课时介绍的 Netty 中的 Channel 基本一致。",-1),A=s("p",null,[i("下面是"),s("strong",null,"Channel 接口"),i("的定义，我们可以看出两点：一个是 Channel 接口继承了 Endpoint 接口，也具备开关状态以及发送数据的能力；另一个是可以在 Channel 上附加 KV 属性。")],-1),D=s("p",null,[s("strong",null,"ChannelHandler 是注册在 Channel 上的消息处理器"),i("，在 Netty 中也有类似的抽象，相信你对此应该不会陌生。下图展示了 ChannelHandler 接口的定义，在 ChannelHandler 中可以处理 Channel 的连接建立以及连接断开事件，还可以处理读取到的数据、发送的数据以及捕获到的异常。从这些方法的命名可以看到，它们都是动词的过去式，说明相应事件已经发生过了。")],-1),m=t("",6),T=s("p",null,"Client 和 Server 本身都是 Endpoint，只不过在语义上区分了请求和响应的职责，两者都具备发送的能力，所以都继承了 Endpoint 接口。Client 和 Server 的主要区别是 Client 只能关联一个 Channel，而 Server 可以接收多个 Client 发起的 Channel 连接。所以在 RemotingServer 接口中定义了查询 Channel 的相关方法，如下图所示：",-1),R=t("",4),v=s("p",null,"这些 Transporter 接口实现返回的 Client 和 RemotingServer 具体是什么呢？如下图所示，返回的是 NIO 库对应的 RemotingServer 实现和 Client 实现。",-1),N=t("",10),B=s("p",null,"Transporter 层整体结构图",-1),S=s("h3",{id:"总结",tabindex:"-1"},[i("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),I=s("p",null,"本课时我们首先介绍了 dubbo-remoting 模块在 Dubbo 架构中的位置，以及 dubbo-remoting 模块的结构。接下来分析了 dubbo-remoting 模块中各个子模块之间的依赖关系，并重点介绍了 dubbo-remoting-api 子模块中各个包的核心功能。最后我们还深入分析了整个 Transport 层的核心接口，以及这些接口抽象出来的 Transporter 架构。",-1),H=s("p",null,"关于本课时，你若还有什么疑问或想法，欢迎你留言跟我分享。",-1);function P(q,O,f,x,w,M){const n=e("Image");return h(),p("div",null,[r,E,a(n,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/55/06/CgqCHl9ptP2ADxEXAAuW94W_upc465.png"}),i(),d,o,g,a(n,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/54/FB/Ciqc1F9ptRqAJLQnAABcIxQfCkc811.png"}),i(),c,y,C,a(n,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/55/07/CgqCHl9ptY2ADzl8AAEVDPN3HVo908.png"}),i(),_,a(n,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/54/FD/Ciqc1F9ptduASJsQAACrkCpgiGg477.png"}),i(),b,a(n,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/55/08/CgqCHl9pteqACl0cAABxWeZ6ox0288.png"}),i(),u,F,a(n,{alt:"Lark20200922-162359.png",src:"https://s0.lgstatic.com/i/image/M00/55/09/CgqCHl9ptsaAeodMAACTIzdsI8g890.png"}),i(),A,a(n,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/54/FD/Ciqc1F9ptfKAeNrwAADvN7mxisw072.png"}),i(),D,a(n,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/55/08/CgqCHl9ptf-AM7HwAABIy1ahqFw153.png"}),i(),m,a(n,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image/M00/55/08/CgqCHl9ptgaAPRDbAAA7kgy1X5k082.png"}),i(),T,a(n,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image/M00/54/FD/Ciqc1F9pthSAPWv0AAA0yX1lW-Y033.png"}),i(),R,a(n,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image/M00/55/08/CgqCHl9pthuAFNMOAABRJaJXls0493.png"}),i(),v,a(n,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image/M00/54/FD/Ciqc1F9ptiCAHkUSAADCSKg5KhY994.png"}),i(),a(n,{alt:"Drawing 11.png",src:"https://s0.lgstatic.com/i/image/M00/55/08/CgqCHl9pti-AHj3DAACwPfuEgm8435.png"}),i(),N,a(n,{alt:"Lark20200922-162354.png",src:"https://s0.lgstatic.com/i/image/M00/55/09/CgqCHl9ptlyABsjpAAGGk7pFIzQ293.png"}),i(),B,S,I,H])}const K=l(k,[["render",P]]);export{V as __pageData,K as default};
