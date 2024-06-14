import{_ as p,D as n,o as r,g as l,J as t,h as a,Q as e,m as s}from"./chunks/framework.f67d7268.js";const N=JSON.parse('{"title":"10可观测性之Trace：更快速定位问题","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/微服务Service Mesh原理与实战_文档/(6003) 10  可观测性之 Trace：更快速定位问题.md","filePath":"posts/backEnd/微服务Service Mesh原理与实战_文档/(6003) 10  可观测性之 Trace：更快速定位问题.md","lastUpdated":1696682708000}'),c={name:"posts/backEnd/微服务Service Mesh原理与实战_文档/(6003) 10  可观测性之 Trace：更快速定位问题.md"},i=e('<h1 id="_10可观测性之trace-更快速定位问题" tabindex="-1">10可观测性之Trace：更快速定位问题 <a class="header-anchor" href="#_10可观测性之trace-更快速定位问题" aria-label="Permalink to &quot;10可观测性之Trace：更快速定位问题&quot;">​</a></h1><p>今天我要和你分享的内容是微服务组件之一：提供可观测性功能的组件 Trace。早期系统架构基本是通过日志组件来观察服务的异常情况，而在云原生模式下，链路追踪、Metrics 和日志三者组成了可观测性组件。在微服务和 Service Mesh 架构中，可观测性组件的位置变得越来越重要，一般作为默认组件集成在方案中。</p><p>今天我们来讲解一下可观测性组件之一， Trace 链路追踪组件。在学习链路追踪之前，我们先看一下什么是可观测性。</p><p>可观测性的英文是 Observability，这是伴随着云原生技术发展产生的一个新兴词汇，在传统的 IT 中，并没有这种说法。简单来说，<strong>可观测性是通过系统输出信息到外部，以检测系统内部的运行状态</strong> 。比如我们这一讲中的<strong>Trace，通过内部打点的方式串联起微服务的各个组件</strong> ，再比如我们下一讲中的<strong>Metrics，通过输出服务的 Metrics 信息，达到外部监测的目的</strong>。</p><p>可观测性组件主要有如下三种：链路追踪、监控指标、日志。我们先来看看它们的区别和关联：</p>',5),u=e('<p><strong>链路追踪</strong> ：通过在程序内打点记录日志的方式，记录每次请求的调用链路信息。特点是<strong>数据精准、细致，适合查看某一次请求的调用链路，一般用于查看某些响应较慢的接口瓶颈</strong>。</p><p><strong>监控指标</strong> ：主要是用时序性数据库记录每个时间点的监控数据，一般通过主动拉取服务 Metrics 数据的方式记录，然后实时计算一段时间的数据，并通过图形界面的方式展现出来。它的特点是<strong>实时性强、可观测指标丰富，适合查看一段时间内的指标趋势</strong>。</p><p><strong>日志</strong> ：日志是比较传统的可观测性组件了，无论是在单体服务时代还是微服务时代，我们都会用日志排查问题。日志的特点是<strong>数据比较离散，之间没有关联</strong>。当然，我们可以通过在日志中打印 TraceId 和链路追踪关联起来。一般日志要通过日志收集系统使用，比如常见的 ELK 日志系统。</p><p>在微服务架构中，随着服务和中间件数量变多，往往一个接口要请求几十次服务和上百次 DB 才能返回数据，链路过长，很难定位到底是哪个环节出了问题；又或者某个接口延时过高，也很难排查到底是链路中的哪个环节出了问题，这个时候就需要链路追踪系统帮忙了。</p><h3 id="trace-链路追踪原理" tabindex="-1">Trace 链路追踪原理 <a class="header-anchor" href="#trace-链路追踪原理" aria-label="Permalink to &quot;Trace 链路追踪原理&quot;">​</a></h3><p>链路追踪系统基本源于 Google 的一篇 Dapper 论文，这篇论文详细解释了链路追踪的实现原理。</p><p>Dapper 通过一个全局唯一的 TraceId 表示请求调用链，并定义了 span，span 表示一次调用（可以是远程调用，也可以程序内的函数调用）。每个 span 包含了两个重要信息，一个是当前 SpanId，另外一个就是 ParentSpanId。</p>',7),g=e('<p>我们如何将 Trace 所需的信息传递给被调方服务呢？答案就是通过 HTTP 的 header 头传递下去，当然如果是其他协议，比如 Dubbo，就要想其他办法了。但 gRPC 和 HTTP 相对简单，只要通过 header 传递就可以了。</p><p>下面我们看一下这些 header 值的含义。</p><ul><li><p>X-Request-ID：请求 ID，一般 Sidecar 会在入口层生成统一的请求 ID，用于一次请求在内部服务之间传递，方便通过请求 ID 查询一次请求的所有日志。</p></li><li><p>X-B3-TraceId：链路追踪的唯一标识，长度为 64 位。由网关层生成，一次外部请求使用唯一的 TraceId 。</p></li><li><p>X-B3-SpanId：SpanId 的长度是 64 位，表示当前操作在跟踪树中的位置。</p></li><li><p>X-B3-ParentSpanId：父 SpanId，如果该值不存在，表示是根节点。</p></li><li><p>X-B3-Sampled：采样率，当设置为 1 时，表示采样。</p></li></ul><p>下面我们来看一个 Trace 的真实数据，方便我们更好的理解 Trace：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;duration&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">2065</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;operationName&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;/ping&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;parentSpanID&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;process.serviceName&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;negri.sidecarserverlistener.myapp&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;process.tags.hostname&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;MacBook-Pro-3.local&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;process.tags.ip&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;192.168.1.88&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;spanID&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;5f1db306ef459b2f&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;startTime&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">1609241265147010</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;tags.http.method&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;GET&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;tags.http.status_code&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;200&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;tags.http.url&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;/ping&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;tags.peer.address&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;http://127.0.0.1:8888&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;tags.span.kind&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;server&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;traceID&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;5f1db306ef459b2f&quot;</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;duration&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">2065</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;operationName&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;/ping&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;parentSpanID&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;process.serviceName&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;negri.sidecarserverlistener.myapp&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;process.tags.hostname&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;MacBook-Pro-3.local&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;process.tags.ip&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;192.168.1.88&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;spanID&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;5f1db306ef459b2f&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;startTime&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">1609241265147010</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;tags.http.method&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;GET&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;tags.http.status_code&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;200&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;tags.http.url&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;/ping&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;tags.peer.address&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;http://127.0.0.1:8888&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;tags.span.kind&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;server&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;traceID&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;5f1db306ef459b2f&quot;</span><span style="color:#24292E;">}</span></span></code></pre></div><p>通过上面的数据，可以了解这个接口的运行时间 duration，记录了服务名、TraceId、SpanId、ParentSpanId 等上面我们聊到的常用数据，另外还记录了我们所需要的一些自定义数据，放在了 Tags 字段中。</p><p>下面我们做一个简单的总结。</p><p>链路追踪系统，通过收集程序中的打点日志的方式，通常为我们提供了以下功能。</p><ul><li><p>排查根因：分析单次请求的调用链路，排查问题根因。</p></li><li><p>调用关系图：通过 Trace 中的服务信息，绘制服务调用关系图。</p></li><li><p>日志追踪：通过关联日志 RequestId，可以链接到日志系统，查看更详细的日志信息。</p></li></ul>',9),d=s("p",null,"单次请求调用链路",-1),q=s("p",null,"至此，我们介绍了链路追踪系统的原理，那么有哪些常见的链路追踪系统呢？它们又各自有什么特点呢？别着急，我们往下看。",-1),_=s("h3",{id:"常见的链路追踪系统",tabindex:"-1"},[a("常见的链路追踪系统 "),s("a",{class:"header-anchor",href:"#常见的链路追踪系统","aria-label":'Permalink to "常见的链路追踪系统"'},"​")],-1),y=s("h4",{id:"zipkin",tabindex:"-1"},[a("Zipkin "),s("a",{class:"header-anchor",href:"#zipkin","aria-label":'Permalink to "Zipkin"'},"​")],-1),h=s("p",null,"Zipkin是 Twitter 开源的分布式链路追踪系统，属于比较早的 Trace 系统，对 PHP、Golang、Java 都有不错的支持。它提供了一套 Web 图形化界面，供用户查看单条链路信息，也提供了查看调用关系图的功能。",-1),F=e('<h4 id="jaeger" tabindex="-1">Jaeger <a class="header-anchor" href="#jaeger" aria-label="Permalink to &quot;Jaeger&quot;">​</a></h4><p>Jaeger 是 Uber 公司开源的、采用 Go 语言开发的分布式链路追踪系统，由以下几个模块组成。</p><ul><li><p>jaeger-client：Jaeger 提供的符合 OpenTracing 标准的各种语言的 SDK，包括 Java、Go、Node.js 等。Client 负责收集 Trace 数据发送到 Agent。</p></li><li><p>jaeger-agent：jaeger-client 的代理程序，部署在所有宿主机上，这样的目的和 Sidecar 类似，屏蔽了一些路由和 Collector 节点发现的细节，让 Client 更加轻量化。Client 通过 UDP 协议和 Agent 通信，也避免了日志落盘再采集导致的一些性能问题。</p></li><li><p>jaeger-collector：负责收集 Agent 上报的链路追踪数据，并做一些数据验证工作，以及对数据做一些处理然后上报到存储系统。</p></li><li><p>jaeger-db：后端存储系统，支持 Cassandra 和 ElasticSearch。</p></li><li><p>jaeger-query：专门负责调用链查询的一个服务，提供一套独立的 UI 界面，用于绘制调用关系和展示服务链路。</p></li><li><p>spark-job：基于 Spark 的运算任务，可以计算服务的依赖关系、调用次数等。</p></li></ul>',3),E=s("p",null,"Jaeger 架构",-1),T=s("p",null,"现在，我们已经初步了解了链路追踪的相关信息，下面我们看看 Trace 系统中的常见问题，以及链路追踪引发的一些思考。",-1),A=s("h3",{id:"trace-系统中的常见问题",tabindex:"-1"},[a("Trace 系统中的常见问题 "),s("a",{class:"header-anchor",href:"#trace-系统中的常见问题","aria-label":'Permalink to "Trace 系统中的常见问题"'},"​")],-1),C=s("p",null,[s("strong",null,"TraceId 如何设计")],-1),m=s("p",null,[a("TraceId 只要全局唯一就可以了，这里我们可以"),s("strong",null,"参考 SOFATrace 中的设计"),a("，通过 8 位的 IP 地址和 13 位的时间戳，以及四位的自增序列，加上本身进程的 PID 号，这样组成的字符串就可以保证全局唯一了。")],-1),S=e('<p><strong>Trace 日志落盘</strong></p><p>在实际项目中，我并没有采用原生的 Jaeger Agent 的方式收集日志，而是采用了阿里云提供的 sls 作为链路追踪的存储系统。<strong>用 SDK 将数据直接落盘，以日志的方式存储在磁盘上，然后由 Logtail 将日志收集到 sls</strong>，但是这样就产生了日志写盘的性能问题。</p><p>如果每条日志都直接落盘，那么系统的 IO 消耗会非常大，所以实践中我采用了<strong>异步落盘</strong>的机制，减少对业务请求的影响，也同时减少了系统调用和系统 IO 的消耗。</p><p><strong>Service Mesh 中可以无感知接入 Trace 吗？</strong></p><p>实际上因为 Service Mesh 经常宣传无侵入的接入方式，这块造成了一定的误解，早期 Istio 文档描述得也不是很清楚，但后面的 Istio 文档做了更正，<strong>在 Service Mesh 中只要少量代码就可以接入 Trace 了</strong>。</p><p>Sidecar 依然依赖应用程序传递 Trace 所需要的 header，但通过 Sidecar 可以简化 Trace 的接入，Trace SDK 只要保证能够将应用程序的 Trace header 在每次请求中传递下去就可以了，而不用负责繁重的数据上报工作。但如果除了服务的链路信息，还希望收集一些 DB 中间件的调用信息，数据上报的工作还是无法避免的。</p><p><strong>Trace 组件如何在项目中落地？</strong></p><p>Trace 的落地一直是一个比较难的问题，即便用 Service Mesh 可以简化 Trace 落地的方式，但对一些语言来说，<strong>侵入性比较强</strong>是最大的痛点。对于 Java 相对来说比较容易，可以通过 Java Agent 无感知地接入，但对于其他语言就没那么容易了。</p><p>比如 PHP、Go、Node.js 等语言，都需要通过 SDK 的方式接入。如果是在微服务拆分的中后期，想要再增加 Trace 系统就十分困难了，所以这里建议<strong>在决定使用微服务架构的初期，在框架内集成 Trace SDK，并默认开启，免去后续的麻烦</strong>。另外 Trace 中的项目名称一定要和公司的服务注册名称统一，这样才有利于统一排查问题。</p><p><strong>采样率如何设置？</strong></p><p>实际上 Trace 的采样率一直是个头疼的问题，设置太低可能有些接口采集不到有效的信息，设置得太高又会造成成本过高的问题。<strong>在 Jaeger 中提供了动态采样率的功能</strong>，这样可以保证同一个服务中，低 QPS 的接口可以被有效采集，而高 QPS 的接口有较低的采样率。</p><p><strong>Trace 链路的连续性</strong></p><p>一般情况，我们会在网关中生成初始的 TraceId 和最上层的 SpanId，后续的服务只要拿到 downstream 集群，通过 header 传递下来的 Trace 信息，就可以继续生成本服务的 Trace 数据了。</p><p>像 Jaeger 之类的组件，在没有拿到 Trace 信息的情况下，会默认生成新的 TraceId 。实际上，<strong>我并不建议这样的做法，一是增加了 SDK 的复杂度，造成维护困难；二是链路一旦断掉，对于排查问题的帮助就不是很大了</strong>。</p><h3 id="关于链路追踪的一些思考" tabindex="-1">关于链路追踪的一些思考 <a class="header-anchor" href="#关于链路追踪的一些思考" aria-label="Permalink to &quot;关于链路追踪的一些思考&quot;">​</a></h3><h4 id="客户端链路追踪" tabindex="-1">客户端链路追踪 <a class="header-anchor" href="#客户端链路追踪" aria-label="Permalink to &quot;客户端链路追踪&quot;">​</a></h4><p>大部分情况下，我们所说的链路追踪，主要还是用于内部服务，以展示微服务的调用关系和排查微服务导致的链路复杂性问题。<strong>但实际上可以考虑在客户端就生成 client-traceid，然后将 client-traceid 和内部 TraceId 关联起来，这样就能够展示整个链路追踪中客户端耗时占比</strong>。</p><h4 id="rpc-sdk-的设计" tabindex="-1">RPC SDK 的设计 <a class="header-anchor" href="#rpc-sdk-的设计" aria-label="Permalink to &quot;RPC SDK 的设计&quot;">​</a></h4><p>实际上 Trace 系统需要将 Trace header 的信息一层层传递下去，所以 RPC 的 Client SDK 需要具备&quot;在请求的时候带上 Trace 所需信息&quot;的能力。</p><p>其实在微服务中，有很多场景需要我们将最顶层的网关层的数据传递下去，以保证上游（upstream）的微服务能够获取这些信息。比如客户端 IP、灰度流量标签等。所以在微服务 SDK 设计的时候最好定义一组 header，方便我们解析并向上游传递，比如 X-Mesh-Xxx。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>这一讲我主要介绍了微服务中链路追踪 Trace，通过今天的内容，相信你已经对服务的可观测性以及链路追踪的作用有了一定了解。在以往的传统认知中，可能经常错误地认为 Service Mesh 架构使得微服务的组件都可以无感知地接入，在这一讲中你可以了解到事实并非如此，链路追踪组件就是一个例外。</p>',22),D=s("p",null,"本讲内容到这里就结束了，下一讲我会讲解另一个可观测性组件 Metrics，看看如何通过有效的 Metrics 数据进行监控和告警。",-1),I=s("p",null,"通过这节内容的讲解，如果让你选择，你觉得我们能从海量的 Trace 数据中挖掘出哪些有价值的信息呢？欢迎在留言区和我分享你的观点。我们下一讲再见！",-1);function b(P,B,k,f,v,M){const o=n("Image");return r(),l("div",null,[i,t(o,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/8F/09/Ciqc1GAGqMeAYh7bAACzq2izWIY613.png"}),a(),u,t(o,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image2/M01/06/F5/CgpVE2AGqNCAZ2qmAAIfH6q6d4k552.png"}),a(),g,t(o,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image2/M01/06/F5/CgpVE2AGqN2AKIZaAAPN557polk911.png"}),a(),d,q,_,y,h,t(o,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image2/M01/06/F5/CgpVE2AGqOuABlEYAAFtYJVzoKQ218.png"}),a(),F,t(o,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image2/M01/06/F5/CgpVE2AGqPyAAmAmAADRVPhzW9Q508.png"}),a(),E,T,A,C,m,t(o,{alt:"Lark20210119-180720.png",src:"https://s0.lgstatic.com/i/image2/M01/06/F6/Cip5yGAGr3qAJ-bWAABwdaTrVMk578.png"}),a(),S,t(o,{alt:"Lark20210119-180730.png",src:"https://s0.lgstatic.com/i/image2/M01/06/F8/CgpVE2AGr3CAFxrjAAKoebHGeik261.png"}),a(),D,I])}const x=p(c,[["render",b]]);export{N as __pageData,x as default};
