import{_ as o,D as e,o as t,g as c,J as l,h as s,Q as p,m as a}from"./chunks/framework.f67d7268.js";const R=JSON.parse('{"title":"第02讲：链路追踪利器，快速上手SkyWalking","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(1722) 第02讲：链路追踪利器，快速上手 SkyWalking.md","filePath":"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(1722) 第02讲：链路追踪利器，快速上手 SkyWalking.md","lastUpdated":1696682708000}'),r={name:"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(1722) 第02讲：链路追踪利器，快速上手 SkyWalking.md"},y=p("",18),E=p("",9),i=p("",4),g=p("",11),d=p("",5),F=p("",28),h=p("",15),D=a("p",null,[s("最后，启动 demo-webapp 项目，通过浏览器访问 "),a("a",{href:"http://localhost:8000/hello/xxx",target:"_blank",rel:"noreferrer"},"http://localhost:8000/hello/xxx"),s(" 地址得到正常相应，访问 "),a("a",{href:"http://localhost:8000/err",target:"_blank",rel:"noreferrer"},"http://localhost:8000/err"),s(" 得到 500 响应，即表示启动成功。")],-1),A=a("p",null,"到此为止，SkyWalking Agent 的基本接入方式就介绍完了，在后面分析和改造 SkyWalking 源码时，还可以使用 demo-webapp 和 demo-provider 这两个应用来产生 Trace 和 Metrics 数据。",-1),u=a("h3",{id:"skywalking-rocketbot-使用",tabindex:"-1"},[s("SkyWalking Rocketbot 使用 "),a("a",{class:"header-anchor",href:"#skywalking-rocketbot-使用","aria-label":'Permalink to "SkyWalking Rocketbot 使用"'},"​")],-1),k=a("p",null,"搭建完 SkyWalking 环境以及相关示例之后，我们来看如何使用 SkyWalking 提供的 UI 界面------ Skywalking Rocketbot。在前面执行的 ./bin/startup.sh 脚本，除了启动后端 OAP 服务，同时还会启动 Skywalking Rocketbot（位于 webapp 目录下的 skywalking-webapp.jar）。",-1),v=a("p",null,"如下图所示，在 Skywalking Rocketbot 首页顶部（1）处，有四个主 Tab 页，在【仪表盘】这个 Tab 中，（2）处可以选择查询的服务（Service）、端点（Endpoint） 以及服务实例（ServiceInstance）。在（3）处可以选择展示的不同维度，下图展示了 Global 这个全局视图：",-1),f=p("",4),b=p("",3),B=a("p",null,"在 ServiceInstance 面板中展示了很多 ServiceInstance 相关的监控信息，例如，JVM 内存使用情况、GC 次数、GC 耗时、CPU 使用率、ServiceInstance SLA 等等信息，这里不再一一展开介绍。",-1),m=a("p",null,"下面我们切换到【拓扑图】这个主 Tab，如下图所示，在（1）处展示当前整个业务服务的拓扑图。点击拓扑图中的任意节点，可在（2）处看到服务相应的状态信息，其中包括响应的平均耗时、SLA 等监控信息。点击拓扑图中任意一条边，可在（3）处看到一条调用链路的监控信息，其中会分别从客户端（上游调用方）和服务端（下游接收方）来观测这条调用链路的状态，其中展示了该条链路的耗时、吞吐量、SLA 等信息：",-1),C=a("p",null,'下面我们切换到【追踪】这个主 Tab来查询 Trace 信息，如下图所示。在（1）、（2）处可以选择 Trace 的查询条件，其中可以指定 Trace 涉及到的 Service、ServiceInstance、Endpoint 以及Trace 的状态继续模糊查询，还可以指定 TraceId 和时间范围进行精确查询。在（3）处展示了 Trace 的简略信息，下图中 "/err" 接口这条 Trace 被显示为红色表示该 Trace 关联的请求出现了异常。在（4）和（5）处展示了 Trace 的具体信息以及所有 Span 信息，我们可以通过（6）处按钮调整 Span 的展示方式：',-1),_=a("p",null,'点击 Trace 中的 Span，就可以将该 Span 的具体信息展示出来，如下下图所示，点击"/err" 接口相关 Trace 中的 Span，即可看到相应的 TRuntimeException 异常信息：',-1),S=a("p",null,"最后，我们将主 Tab 也切换到【告警】，这里展示了 Skywalking 发出来的告警信息，如下图所示，这里也提供了相应的查询条件和关键字搜索框。",-1),I=a("h3",{id:"总结",tabindex:"-1"},[s("总结 "),a("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),w=a("p",null,"本课时搭建 SkyWalking 的运行环境，完成 ElasticSearch、Kibana、Skywalking 等的安装，并搭建了 skywalking-demo 项目作为演示示例，带同学们上手体验了 Skywalking Agent 的接入的流程。",-1),x=a("p",null,"最后介绍了 SkyWalking Rocketbot UI 界面强大的功能，包括 Service、Endpoint、ServiceInstance 等不同级别的监控，展示了整个服务的拓扑图、Trace 查询以及告警信息查询等功能。",-1);function T(q,j,P,M,W,z){const n=e("Image");return t(),c("div",null,[y,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/71/BD/CgpOIF5nHMCAYb-sAABorqyP-yg322.png"}),s(),E,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/71/BD/Cgq2xl5nHMCAABXxAAEuKrTbLVw100.png"}),s(),i,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/71/BD/CgpOIF5nHMCAH0O5AAfpg2pNpsw425.png"}),s(),g,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/71/BD/Cgq2xl5nHMCAB9f7AAB00fhMQNk918.png"}),s(),d,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/71/BD/CgpOIF5nHMCALuSFAADAqK6QHPc083.png"}),s(),F,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/71/BD/Cgq2xl5nHMCAPGmdAAJd59aKb9w948.png"}),s(),h,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/71/BD/CgpOIF5nHMCAJ8EKAAIq6sznBy0160.png"}),s(),D,A,u,k,v,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/71/BD/Cgq2xl5nHMCASh6sAAFikMiwg_o077.png"}),s(),f,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/71/BD/CgpOIF5nHMGACMCRAAEzi1SuLKw557.png"}),s(),b,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/71/BD/Cgq2xl5nHMGAGZlwAAHCkizkpVs483.png"}),s(),B,m,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/71/BD/CgpOIF5nHMGAceZOAAHozO2Mq14310.png"}),s(),C,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/71/BD/Cgq2xl5nHMGAUPpGAAEyWm6Aqo8753.png"}),s(),_,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/71/BD/CgpOIF5nHMGAb41NAAHBIhP98Z0352.png"}),s(),S,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/71/BD/Cgq2xl5nHMGAVek0AAM9HlRD-nQ059.png"}),s(),I,w,x])}const V=o(r,[["render",T]]);export{R as __pageData,V as default};
