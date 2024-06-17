import{_ as o,g as t,o as r,ar as n}from"./chunks/framework.VlluEs-f.js";const d=JSON.parse('{"title":"20运维集成：内部的OSS系统如何与观测相结合？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/分布式链路追踪实战_文档/(4341) 20  运维集成：内部的 OSS 系统如何与观测相结合？.md","filePath":"posts/backEnd/分布式链路追踪实战_文档/(4341) 20  运维集成：内部的 OSS 系统如何与观测相结合？.md","lastUpdated":1718371218000}'),s={name:"posts/backEnd/分布式链路追踪实战_文档/(4341) 20  运维集成：内部的 OSS 系统如何与观测相结合？.md"},g=n('<h1 id="_20运维集成-内部的oss系统如何与观测相结合" tabindex="-1">20运维集成：内部的OSS系统如何与观测相结合？ <a class="header-anchor" href="#_20运维集成-内部的oss系统如何与观测相结合" aria-label="Permalink to &quot;20运维集成：内部的OSS系统如何与观测相结合？&quot;">​</a></h1><p>上一节，我带你了解了阿里云 ARMS 服务中所提供的功能，它们能够对我们的系统进行全方位的观测。这一节，我将带你了解如何将观测系统与运维相结合。</p><h3 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h3><p>很多公司内部，都有属于自己的一套 OSS（Operation Support System），操作支持系统。<strong>它管理着系统内部的众多系统，比如我之前提过的 CMDB 系统，也会包含一些运营人员的业务后台系统；也负责将内部中的各种数据的收集汇总和管理控制。</strong></p><p>OSS 系统可以帮助我们做到 2 件事情。</p><ol><li><p><strong>统一入口：统一所有子系统的全局访问入口</strong> ，让寻找相关项目变得简单，方便研发和运维人员查看、管理相关的系统数据；<strong>使用统一的一套 UI 和用户系统</strong>，统一用户身份和展现方式，让用户使用起来体验更好。</p></li><li><p><strong>系统集成：子系统集成时，提供统一的 API 接口</strong> ，比如通过全局的 API 接口获取用户名称、组织架构等。<strong>需要对用户进行信息通知时，也可以通过 OSS 提供的接口进行更方便的处理</strong>。通过 OSS 让系统集成起来更加简单，便捷。</p></li></ol><h3 id="常见功能" tabindex="-1">常见功能 <a class="header-anchor" href="#常见功能" aria-label="Permalink to &quot;常见功能&quot;">​</a></h3><p>通过对 OSS 系统及其作用的介绍，你应该对它有了一个感性的认识。接下来，我再来带你了解它的功能，有哪些常见的系统会被集成到其中。</p><ol><li><p><strong>CMDB 系统</strong> ：这个系统我在&quot;<strong>14 | 告警处理：怎样才能更好地解决问题？</strong> &quot;中讲过，<strong>它主要负责存储我们的服务、实例、机器配置等信息</strong>。当研发人员进行服务的申请，机器资源的扩容或者缩容时，可以在这个平台中进行申请，并且交由审批处理。</p></li><li><p><strong>运营平台</strong> ：<strong>该系统主要用于处理技术运营中常见的功能</strong> ，比如我在&quot;<strong>14 课时</strong>&quot;讲到的 on-call 值班，就是在这里进行管理的。研发如果需要创建数据库、在 Git 上进行项目操作或是其他的行为，也可以通过运营平台进行相关的操作。</p></li><li><p><strong>上线系统</strong> ：<strong>主要是研发将系统上线时使用</strong>。通过上线系统，研发可以很方便地将程序逐步发送到线上环境，简化与统一上线流程，减少与运维的沟通成本。</p></li><li><p><strong>观测系统</strong> ：<strong>就是与可观测性的三大支柱，日志、统计指标、链路追踪相关的系统</strong>，比如 Kibana、Grafana、SkyWalking。除了外部可以看到的实现方式，有些系统内部可能还会有自己的，将可观测性中的内容相互结合展示的实现方式。</p></li><li><p><strong>告警系统</strong> ：<strong>收集所有观测的数据，通过在告警平台中配置相关告警规则，实现告警</strong> 。结合我在&quot;<strong>14 课时</strong>&quot;中讲的内容，如统一告警处理流程，通过界面化的形式查询等。</p></li></ol><h3 id="告警" tabindex="-1">告警 <a class="header-anchor" href="#告警" aria-label="Permalink to &quot;告警&quot;">​</a></h3><p>在可观测性与内部 OSS 系统集成时，其中最关键的就是<strong>如何收集数据内容，配置告警规则，完成最终的告警全流程</strong>。我带你依次了解它们。</p><h4 id="数据收集" tabindex="-1">数据收集 <a class="header-anchor" href="#数据收集" aria-label="Permalink to &quot;数据收集&quot;">​</a></h4><p><strong>数据收集指将各种观测到的数据内容，通过内容解析，然后进行聚合，最终组装成统计指标数据，并对其进行存储</strong>，以便在后面进行告警处理。在这里我会从链路追踪和日志这两个方面来说。因为数据最终都是存储到统计指标系统中的，所以无需介绍统计指标方面的内容。</p><ul><li><strong>日志</strong>：在日志中，我们可能需要统计各个系统中的 error 或者 warning 级别日志的次数，比如 error 级别的数据一段时间内超过 5 次就进行告警。</li></ul><p>你是否还记得我在&quot;<strong>15 | 日志收集：ELK 如何更高效地收集日志？</strong>&quot;中讲的 ELK？</p><p>我们可以利用 Kafka 集群启动一套新的 Consumer 集群和 Topic 来消费日志队列中的数据，然后解析日志中的日志等级信息、机器信息等数据，将其以服务或者实例的维度存储，以此来对指定的服务或者实例进行精确内容的告警。</p><p>当然，我们也可以在 Logstash 日志解析后续做日志内容消费，这样可以减少日志内容解析的成本。</p><ul><li><strong>链路追踪</strong> ：我在&quot;<strong>18 | 观测分析：SkyWalking 如何把观测和分析结合起来？</strong>&quot; 中讲到，我们可以通过解析链路数据，获取到链路中的访问量、耗时、依赖关系等数据。</li></ul><p>我们也可以将这部分数据同步至统计指标系统，以便于后续对指定的服务、实例进行告警操作。对于开源中并不支持链路分析的组件，如 Zipkin，则可以考虑通过 Kafka、gRPC 等中间件的手段收集其链路数据，并进行解析操作。不过这样的操作难度相对较高。</p><p>日志、链路追踪，以及存储数据的统计指标，以这 3 个维度中的数据为基础，我们就可以进行告警等操作。数据是告警处理的基础，也是我们后续告警的数据源。</p><h4 id="配置告警规则" tabindex="-1">配置告警规则 <a class="header-anchor" href="#配置告警规则" aria-label="Permalink to &quot;配置告警规则&quot;">​</a></h4><p>有了数据，我们再来看如何根据这些数据进行告警规则的配置。我在&quot;<strong>05 | 监控指标：如何通过分析数据快速定位系统隐患？（上）</strong> &quot;和&quot;<strong>06 | 监控指标：如何通过分析数据快速定位系统隐患？（下）</strong> &quot;中，把监控指标分为 4 个端，分别是<strong>端上访问</strong> 、<strong>应用程序</strong> 、<strong>组件</strong> 和<strong>机器信息</strong>。在这 2 个课时中，我介绍了这 4 个端分别有哪些指标，但不是所有的指标都适合在 OSS 系统中配置告警规则。这里我将带你了解，根据不同的端，应该如何去配置告警规则。我们首先来看端上访问。</p><p><strong>端上访问</strong><br><strong>端上访问指通过 App 或者浏览器进行的访问操作，这个层面的告警比较关注用户的使用体验</strong>。在告警配置中，App 的统计指标内容更多的是&quot;查看&quot;，因为浏览器更易于去迭代更新，所以一般会更多针对浏览器进行告警配置。</p><p>在浏览器的告警配置中，主要会关注两个方面：页面元素和接口访问。</p><ul><li><p><strong>页面元素</strong>：页面中的资源加载和页面的访问情况，比如常见的 JS 脚本错误数、资源错误数等。通过对页面元素的监控，我们可以快速感知页面的出现错误的可能性，比如大面积的脚本错误就可能导致用户无法与页面完成正常的交互操作。</p></li><li><p><strong>接口访问</strong>：与后端服务的接口访问交互情况，比如调用耗时时长、请求错误数。通过接口访问，可以感知用户操作时的体验。如果调用耗时较长则会出现等待现象。</p></li></ul><p><strong>应用程序</strong><br><strong>应用程序指请求流量到达服务器后端后，应用进行请求处理时的操作。这个层面我们会比较关注服务之间调用的情况、服务本身耗时情况、是否有异常产生等问题。</strong></p><p>在应用程序的告警配置中，通常会关注以下 4 点。</p><ol><li><p><strong>服务调用</strong> ：服务之间的 RPC 调用在微服务架构中可以说是最常见的，因此监控其中的调用关系就会变得至关重要。这一部分，我们通常会监控<strong>调用次数</strong> 、<strong>出现错误次数</strong> 、<strong>响应耗时</strong>等信息，并且通过生产者与消费者之间的关联关系，聚焦到具体的调用依赖上。如果响应耗时持续出现错误，则说明服务处理时出现超时或者业务异常等问题，要根据模块的重要程度及时反馈。</p></li><li><p><strong>数据库操作</strong> ：对数据库进行监控也是有必要的，因为我们的数据最终都会将其存储至数据库中，比如常见的 MySQL、Redis、ElasticSearch 等。我们一般会对<strong>调用次数</strong> 、<strong>执行耗时</strong>进行监控。如果出现执行耗时相对较长的情况，则可能会有接口响应缓慢，甚至于接口出错的问题。</p></li><li><p><strong>JVM</strong> ：<strong>在 Java 语言中，代码都是运行在 JVM 平台上的，JVM 性能的好坏决定着程序的运行效率</strong> 。我们都知道，Java 程序在出现 Full GC 时会先进行内存回收再恢复业务线程执行，因此会造成业务程序停顿。所以此时我们一般会监控<strong>堆空间使用占比</strong> 、<strong>GC 次数</strong> 、<strong>GC 耗时</strong>。当堆空间内存使用占比到达 90%甚至更高时，需要多加关注，防止其朝着不好的方向发展。</p></li><li><p><strong>限流熔断</strong> ：当系统请求量到达一定的阶段后，限流熔断可以对应用程序起到很好的保护作用。但我们仍要对限流熔断的次数进行监控。如果大量的请求都触发了限流熔断的保护措施，用户的使用体验就会受到影响。此时，我们可以统计<strong>触发限流或者熔断的次数与占比</strong>，比如占比超过 10%时，研发人员可以通过告警来确认，是否要限流或者调整熔断的规则，如果是程序引发的错误，则需要根据具体的业务场景来查询问题的原因。</p></li></ol><p><strong>组件</strong><br><strong>组件指我们经常使用到的中间件</strong> ，比如 Nginx、Kafka、Redis。<strong>这里的监控更偏向于运维层面</strong> ，<strong>通过监控这部分数据</strong> ，<strong>快速了解组件的整体运行情况</strong>。</p><p>在配置告警时，我们一般会按照<strong>网关层</strong> 、<strong>数据库</strong> 、<strong>队列</strong>、**缓存 **4 个类型进行相关告警的配置。</p><ol><li><p>网关层中有我们常见的 Nginx 等，<strong>在这个组件中我们更加关注于请求的耗时与响应时的状态</strong>。当请求中具体的某一个接口出现超时的情况，要进行告警，告知接口存在缓慢情况，然后进行及时的优化，减少对用户使用体验的伤害。如果响应状态码出现大面积的 500，相对而言，这一问题的重要级别就会很高，因为这代表有很多用户在使用程序时都出现了严重的问题。</p></li><li><p>数据库比较常见的有 MySQL、MongoDB。<strong>在应用程序中我讲到，需要关注其相应耗时等信息</strong> 。在组件中我们则会更加关注<strong>其他服务与本服务的链接情况</strong> ，<strong>本身所产生的慢查询情况</strong> ，也会关注<strong>常见主从架构中的主从延迟</strong>数。如果主从延迟数较高时，业务方在数据查询方面可能会有一些影响。</p></li><li><p>队列中常见的则有 Kafka、RocketMQ。<strong>在队列的监控中</strong> ，<strong>我们更关注生产者与消费者之间的队列的待消费数量</strong>，从而获取到数据的堆积情况。比如出现长时间的堆积，则可能导致业务受阻，严重时会影响用户的使用体验。</p></li><li><p>缓存中有我们常见的 Redis。由于缓存一般都会将数据存储至内存中加速读取的效率，所以<strong>内存的使用情况便是缓存中关注的重点</strong> 。通过监控内存的使用占比，我们可以快速得知内存的使用量，从而确定对缓存是否足够使用。<strong>我们还会关注缓存的命中率</strong>，如果长期存在命中率不高的情况，则要告知业务方，让业务方确认是否存在缓存穿透的问题。</p></li></ol><p><strong>机器信息</strong><br><strong>机器是应用程序和组件的运行基础。通过对机器信息进行深度告警配置，可以让我们感知到业务系统是否会出现错误。</strong></p><p>在配置告警时，我们一般会关注 <strong>CPU</strong> 、<strong>内存</strong> 、<strong>磁盘</strong> 和<strong>网络</strong>这 4 个方向。</p><ol><li><p><strong>CPU</strong> ：CPU 是数据计算的关键，如果 <strong>CPU 使用率</strong>较高，可能会导致业务程序执行缓慢，进而影响到业务的处理。</p></li><li><p><strong>内存</strong> ：内存代表我们程序可以操作的内存空间，我们会更加关注<strong>内存的使用占比</strong>。如果出现较高的内存占比并且保持持续地增速，此时就需要进行告警通知，防止系统检测到内存占用过高而关闭进程。</p></li><li><p><strong>磁盘</strong> ：磁盘在我们进行日志写入、业务临时文件使用时十分关键。我们关注<strong>磁盘的剩余空间</strong> 、<strong>磁盘写入负载</strong>等。比如服务磁盘写入负载到达一定的占比，则可能会堵塞程序运行。</p></li><li><p><strong>网络</strong> ：我们在进行系统之间的 RPC 或者是系统对接第三方时，通常会使用网络来通信，此时我们可以监控<strong>网卡流入和流出的数据量</strong>，如果超过了一定的占比，并且持续增长则可能会导致网络传输堵塞，影响程序执行。</p></li></ol><h4 id="告警流程" tabindex="-1">告警流程 <a class="header-anchor" href="#告警流程" aria-label="Permalink to &quot;告警流程&quot;">​</a></h4><p>将监控指标应用到 OSS 系统并配置完告警规则后，判定到达告警阈值时就可以进行告警的流程处理了。就如我在&quot;<strong>14 课时</strong>&quot;中讲到的与内部系统结合中的内容相互结合来使用。主要包含以下 3 个部分。</p><ol><li><p><strong>如何将告警处理与内部的 OSS 相互结合</strong>。我在&quot;常见功能&quot;中讲到了常见的，会集成到OSS中的系统，那我们再来看其中有哪些适合做告警流程的配置。</p><ol><li><p>CMDB 系统：从 CMDB 中我们可以快速获取到指定服务相关的负责人信息，通过负责人信息，我们可以快速找到通知对象。</p></li><li><p>上线系统：在上线系统中我们可以快速找到指定服务最近是否有上线单，如果最近有上线单则同样可以提供给通知对象，来判定是否和上线相关。</p></li><li><p>观测系统：从观测系统中，我们可以了解到相关告警的数据信息，来更快的让用户进行查询数据内容。</p></li></ol></li><li><p><strong>通过获取系统中组织架构的数据了解研发人员及其 TL</strong>。出现问题时，可以快速找到与项目相关的研发人员。</p></li><li><p>很多公司内部都会使用协同软件来进行同事之间交流的平台，常见的有钉钉、企业微信、飞书等。<strong>通过对接协同软件的 API</strong> ，<strong>在出现问题时</strong> ，<strong>快速联系到相关的同事</strong> ，<strong>共同协作</strong> ，<strong>处理问题</strong>。</p></li></ol><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>相信通过本篇文章，你对如何将观测系统与 OSS 系统相互结合有了一个清晰的认识。你一般都会对怎么样的指标配置告警呢？公司内部又是怎么样处理告警的呢？欢迎你在评论区分享。</p><p>到这里，咱们的课程就告一段落了，感谢你的学习，希望通过这门课，你可以对可观测性有一个完整的认识，并且可以将其运用在自己的业务开发中。当出现告警时，也可以有很好的流程去处理告警，不再手忙脚乱。</p><p>最后，我想邀请你为课程贡献自己的一份力，参与 <a href="https://wj.qq.com/s2/7286263/e81b/" target="_blank" rel="noreferrer">调查问卷</a> ，帮助我们做得更好。你的每一个意见，都是值得我们关注的。</p>',41),a=[g];function l(p,i,e,_,h,u){return r(),t("div",null,a)}const c=o(s,[["render",l]]);export{d as __pageData,c as default};
