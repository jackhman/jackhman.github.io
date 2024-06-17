import{_ as i,F as s,g as o,K as e,h as t,ar as n,l,o as r}from"./chunks/framework.VlluEs-f.js";const ll=JSON.parse('{"title":"第08讲：搭建SkyWalking源码环境，开启征途","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(1728) 第08讲：搭建 SkyWalking 源码环境，开启征途.md","filePath":"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(1728) 第08讲：搭建 SkyWalking 源码环境，开启征途.md","lastUpdated":1718371218000}'),p={name:"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(1728) 第08讲：搭建 SkyWalking 源码环境，开启征途.md"},g=n("",31),c=n("",15),k=n("",11),u=l("h1",{id:"skywalking源码结构",tabindex:"-1"},[t("SkyWalking源码结构 "),l("a",{class:"header-anchor",href:"#skywalking源码结构","aria-label":'Permalink to "SkyWalking源码结构"'},"​")],-1),d=l("p",null,"完成 SkyWalking 源码环境的搭建以及 Debug 的测试之后，我们回到 SkyWalking 源码项目，简单介绍一下 SkyWalking 源码中各模块的基本功能。",-1),h=l("br",null,null,-1),_=l("p",null,"SkyWalking 源码的整体结构如下图所示：",-1),b=l("br",null,null,-1),A=l("br",null,null,-1),m=l("ul",null,[l("li",null,[l("strong",null,"apm-application-toolkit 模块："),t(" SkyWalking 提供给用户调用的工具箱。该模块提供了对 log4j、log4j2、logback 等常见日志框架的接入接口，提供了 @Trace 注解等。apm-application-toolkit模块类似于暴露 API 定义，对应的处理逻辑在 apm-sniffer/apm-toolkit-activation 模块中实现，如下图所示：")])],-1),y=l("br",null,null,-1),S=l("br",null,null,-1),v=l("ul",null,[l("li",null,"**apm-commons 模块：**SkyWalking 的公共组件和工具类。如下图所示，其中包含两个子模块，apm-datacarrier 模块提供了一个生产者-消费者模式的缓存组件（DataCarrier），无论是在 Agent 端还是 OAP 端都依赖该组件。apm-util 模块则提供了一些常用的工具类，例如，字符串处理工具类（StringUtil）、占位符处理的工具类（PropertyPlaceholderHelper、PlaceholderConfigurerSupport）等等。")],-1),W=l("br",null,null,-1),E=l("br",null,null,-1),C=l("ul",null,[l("li",null,[l("p",null,[l("strong",null,"apache-skywalking-apm 目录"),t(" **：**SkyWalking 打包后使用的命令文件都在此目录中，例如，前文启动 OAP 和 SkyWalking Rocketbot 使用的 startup.sh 文件。")])]),l("li",null,[l("p",null,"**apm-protocol 模块：**该模块中只有一个 apm-network 模块，我们需要关注的是其中定义的 .proto 文件，定义 Agent 与后端 OAP 使用 gRPC 交互时的协议。")]),l("li",null,[l("p",null,"**apm-sniffer 模块：**apm-protocol 模块中有 4 个子模块，如下图所示：")])],-1),D=l("br",null,null,-1),q=l("br",null,null,-1),P=l("blockquote",null,[l("ul",null,[l("li",null,[l("p",null,"**apm-agent 模块：**其中包含了刚才使用的 SkyWalkingAgent 这个类，是整个 Agent 的入口。")]),l("li",null,[l("p",null,[l("strong",null,"apm-agent-core 模块"),t("：SkyWalking Agent 的核心实现都在该模块中，也是本课程第二部分重点分析的模块之一。")])]),l("li",null,[l("p",null,[l("strong",null,"apm-sdk-plugin 模块"),t("：SkyWalking Agent 使用了微内核+插件的架构，该模块下包含了 SkyWalking Agent 的全部插件，如下图所示：")])])])],-1),T=l("br",null,null,-1),j=l("br",null,null,-1),f=l("blockquote",null,[l("ul",null,[l("li",null,"**apm-toolkit-activation 模块：**apm-application-toolkit 模块的具体实现，不再赘述。")])],-1),x=l("ul",null,[l("li",null,[l("p",null,"**apm-webapp 模块：**SkyWalking Rocketbot 对应的后端。")]),l("li",null,[l("p",null,[l("strong",null,"oap-server 模块"),t("：SkyWalking OAP 的全部实现都在 oap-server 模块，其中包含了多个子模块，如下图所示：")])])],-1),w=l("br",null,null,-1),O=n("",3),I=l("br",null,null,-1),B=l("blockquote",null,[l("ul",null,[l("li",null,[l("strong",null,"server-configuration 模块"),t("：负责管理 OAP 的配置信息，也提供了接入多种配置管理组件的相关插件，如下图所示：")])])],-1),G=l("br",null,null,-1),M=n("",3),R=l("br",null,null,-1),V=l("blockquote",null,[l("ul",null,[l("li",null,[l("p",null,[l("strong",null,"server-starter 模块"),t("：OAP 服务启动的入口。")])]),l("li",null,[l("p",null,"**server-storage-plugin 模块：**OAP 服务底层可以使用多种存储来保存 Metrics 数据以及Trace 数据，该模块中包含了接入相关存储的插件，如下图所示：")])])],-1),N=l("br",null,null,-1),U=l("br",null,null,-1),F=l("ul",null,[l("li",null,[l("p",null,[l("strong",null,"skywalking-agent 目录"),t("：SkyWalking Agent 编译后生成的 jar 包都会放到该目录中。")])]),l("li",null,[l("p",null,[l("strong",null,"skywalking-ui 目录"),t("：SkyWalking Rocketbot 的前端。")])])],-1),H=l("h1",{id:"总结",tabindex:"-1"},[t("总结 "),l("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),Q=l("p",null,"本课时重点介绍了 SkyWalking 源码环境的搭建流程，并在搭建完成之后，启动 skywalking-demo 项目进行了简单的测试。之后深入介绍了 SkyWalking 源码中各个模块的核心功能，了解各模块的主要功能可以让你对后续的源码分析更加游刃有余。",-1);function J(X,L,Z,K,Y,$){const a=s("Image");return r(),o("div",null,[g,e(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/06/BA/Ciqah16DGjyAQXgGAAeBF-jQ5aw073.png"}),t(),c,e(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/7F/D0/Cgq2xl6DGj2AHgB8AAAjQ0VaZ8E159.png"}),t(),k,e(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/06/BA/Ciqah16DGj2AHzBqAAGUjaX3Mcg617.png"}),t(),u,d,h,_,b,e(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/7F/D0/Cgq2xl6DGj2AZaUkAABKcoi4_5c009.png"}),t(),A,m,y,e(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/06/BA/Ciqah16DGj2AYS6GAABWyHp4-sA345.png"}),t(),S,v,W,e(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/7F/D0/Cgq2xl6DGj2AKJXJAAALnVoaWe4943.png"}),t(),E,C,D,e(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/06/BA/Ciqah16DGj2AeTteAAATxoHTmQg700.png"}),t(),q,P,T,e(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/7F/D0/Cgq2xl6DGj2AZUcYAABRh7Zo8YU356.png"}),t(),j,f,x,w,e(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/06/BA/Ciqah16DGj2AXOXhAAAsDflYjvk001.png"}),t(),O,e(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/7F/D0/Cgq2xl6DGj2Ad7RDAAA3iUNIOfA774.png"}),t(),I,B,G,e(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/06/BA/Ciqah16DGj2AF3cKAAAzFmh2Hhw354.png"}),t(),M,e(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/7F/D0/Cgq2xl6DGj6Ab69uAAB3rQXuurE063.png"}),t(),R,V,N,e(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/06/BA/Ciqah16DGj6ADeNJAABfQxiOcoo599.png"}),t(),U,F,H,Q])}const tl=i(p,[["render",J]]);export{ll as __pageData,tl as default};
