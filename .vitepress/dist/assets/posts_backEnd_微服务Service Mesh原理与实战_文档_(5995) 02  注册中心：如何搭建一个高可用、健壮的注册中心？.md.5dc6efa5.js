import{_ as o,D as a,o as n,g as i,J as p,h as t,Q as r,m as e}from"./chunks/framework.f67d7268.js";const A=JSON.parse('{"title":"02注册中心：如何搭建一个高可用、健壮的注册中心？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/微服务Service Mesh原理与实战_文档/(5995) 02  注册中心：如何搭建一个高可用、健壮的注册中心？.md","filePath":"posts/backEnd/微服务Service Mesh原理与实战_文档/(5995) 02  注册中心：如何搭建一个高可用、健壮的注册中心？.md","lastUpdated":1696682708000}'),_={name:"posts/backEnd/微服务Service Mesh原理与实战_文档/(5995) 02  注册中心：如何搭建一个高可用、健壮的注册中心？.md"},c=r('<h1 id="_02注册中心-如何搭建一个高可用、健壮的注册中心" tabindex="-1">02注册中心：如何搭建一个高可用、健壮的注册中心？ <a class="header-anchor" href="#_02注册中心-如何搭建一个高可用、健壮的注册中心" aria-label="Permalink to &quot;02注册中心：如何搭建一个高可用、健壮的注册中心？&quot;">​</a></h1><p>今天我要和你分享的内容是：注册中心如何做到高可用以及 Service Mesh 中的注册中心与微服务架构有什么差别。通过上一讲的学习你已经掌握了注册中心组件的基础知识，下面我们进一步学习一下搭建一个高可用、健壮的注册中心会遇到哪些问题。</p><h3 id="搭建一个高可用、健壮的注册中心" tabindex="-1">搭建一个高可用、健壮的注册中心 <a class="header-anchor" href="#搭建一个高可用、健壮的注册中心" aria-label="Permalink to &quot;搭建一个高可用、健壮的注册中心&quot;">​</a></h3><p>当你完全理解了注册中心后，可以很容易自己实现一个简单的注册中心。但是作为微服务最核心的组件，想要做到工业级产品，生产高可用，并不是那么容易的一件事。我们先来思考下，在引入注册中心后，可能会遇到哪些问题。</p><ul><li><p>注册中心完全故障了，服务是否还能正常访问？</p></li><li><p>注册中心因为高负载，推送了异常的数据，服务是否还能正常访问？</p></li><li><p>新加入的机器，出现了网络连通性问题（注册中心和机器网络正常，但服务机器之间网络异常），应该怎样应对？</p></li><li><p>服务是否应该完全信任注册中心推送的数据？</p></li><li><p>服务发布后，节点频繁变更造成 N×M 次事件通知，形成广播风暴，该如何解决？</p></li></ul><p>看到上面的问题，你还认为注册中心是一件简单的事情吗? 不要慌，我们一起来看看，思考下如何解决。</p><p>实际上前面四个问题，无论是注册中心完全故障，还是推送了异常数据，都可以总结为是否应该完全信任注册中心的数据。</p><p>在传统的观念中，我们肯定会选择信任引入的第三方基础设施，比如 MySQL 、Redis ，这种数据层的中间件，我们肯定是要完全信任其中的数据的。但对于注册中心，信任推送数据的风险非常大。</p><p>下面我们具体聊一聊这五个问题，你就能理解我这么说的原因了。</p><p><strong>1. 注册中心完全故障了，服务是否还能正常访问？</strong></p><p>这是一个相对简单的问题，实际上注册中心完全故障的情况，大家或多或少会考虑到。另外在程序进程中缓存访问服务的节点，几乎是一件必然的事情，总不能每个请求都去一次注册中心拿相应服务的注册信息吧。</p><p>所以只要在进程中缓存服务的节点，影响面就可控。但你要注意，<strong>当注册中心完全故障的时候，服务注册功能是失效的，此时的扩容操作无法进行</strong>。如果在容器中，因为 Pod 滚动升级的原因造成会先启动新的 Pod，一定要在程序启动注册失败时抛出异常，使程序无法启动，否则容器 IP 的变化也会导致服务的访问异常。</p><p><strong>2. 注册中心因为高负载，推送了异常的数据，服务是否还能正常访问？</strong></p><p>如果服务节点不是特别多，很难遇到这个问题，但随着微服务规模的增大，注册中心很有可能遇到瓶颈。一旦出现高负载，会使服务和注册中心之间的健康检查或保活出现问题，注册中心使节点异常下线，只推送部分节点数据到订阅的服务。</p><p>这个问题看似不严重，但一旦推送了过少的节点到服务，会导致主调服务打挂被调服务，长时间不能恢复，甚至会导致整个微服务集群雪崩。</p><p>解决此类问题，<strong>我们可以在客户端的服务发现 SDK 中加入自我保护机制：一旦服务的节点数量下降超过一定阈值，就进入自我保护状态，放弃使用新推送过来的服务注册信息</strong>。</p><p><strong>3. 新加入的机器，出现了网络连通性问题（注册中心和机器网络正常，但服务机器之间网络异常），应该怎样应对？</strong></p><p>实际上网络连通性问题是比较容易发生的，往往出于安全考虑，各个部门之间可能会处在不同的 VPC ，但现实中又有互相访问的情况，一旦网络规则维护不好，很容易出现<strong>新添加的机器注册中心的网段可以访问，但是服务之间却无法访问的情况</strong>。在注册中心的使用场景中，网络故障是我们最优先考虑的问题，如果发生了分区故障，问题 2 描述的情况也会发生。</p><p>如何解决此类问题呢，这个就要发挥负载均衡器模块的作用了：<strong>在负载均衡中我们可以加入被动健康检查（节点熔断）和主动健康检查来在客户端主动剔除失效的节点</strong>。</p><p><strong>4. 服务是否应该完全信任注册中心推送的数据？</strong></p><p>看完了上面三个问题，我相信这个问题你已经有了自己的答案。我比较倾向 Service Mesh 数据面之一 Envoy 的做法：相比注册中心的数据，更信任本地数据，所以 Envoy 设计了 2×2 矩阵来决定节点是否应该路由。</p>',21),l=r('<p>如上表所示，只有在健康检查失败和注册中心未发现的情况才会删除节点，只要健康检查成功，无论是否发现此节点，都会路由。</p><p>实际上采用了这种方式，我前面说的三个问题，都可以迎刃而解了。当然实现一个健壮的负载均衡器可没这么简单，还有很多边缘情况你需要考虑，具体内容我将会在负载均衡器的章节详细展开。</p><p>我们说一下最后一个问题。如果我们有了前面问题的解决方案，实际上第 5 个问题出现了我们也不必慌张，因为它对线上服务的影响非常小，但这里我还需要说一下如何避免问题 5 的发生。</p><p><strong>5. 服务发布后，节点频繁变更造成 N×M 次事件通知，形成广播风暴，该如何解决？</strong></p><p>实际上此问题也可能导致问题 2 的发生。大量广播事件的发生，挤占网络带宽，甚至会导致网络带宽占满，此时注册中心和服务间的健康检查或保活，都会因为带宽不足造成信息丢失，使注册中心推送错误的数据。</p><p>如何解决呢？其实很简单，我们可以将事件消息合并推送。在 Istio 的 Pilot 的模块中，实现了一种合并机制，100ms 内有新的事件消息时，便会继续等待下一条，最多等待 1s，当然时间的参数是可以配置的，这里我们说的是默认参数。</p><p>虽然这个解决方案会影响事件通知的时效性，但相对于收益来说，它是一个非常好的解决方案，可想而知，如果进一步增加时效性，那么付出的研发成本和机器资源成本都将呈指数级增加，显然是得不偿失的。</p><h3 id="service-mesh-中的注册中心" tabindex="-1">Service Mesh 中的注册中心 <a class="header-anchor" href="#service-mesh-中的注册中心" aria-label="Permalink to &quot;Service Mesh 中的注册中心&quot;">​</a></h3><p>实际上在 Service Mesh 方案中，服务节点发现的问题用传统的注册中心方案也是可以解决的，但如果涉及 Kubernetes 和 ECS 跨集群访问，最好还是支持 Envoy 定义的 xDS 协议中的 EDS 协议。EDS是 endpoint discovery service 的缩写，无论是 Istio，还是最新版本的 gRPC，都已经默认支持了 EDS 协议，可以说<strong>EDS 实际上已经是服务发现的规范了</strong>。</p><p>在 Service Mesh 方案中，因为大多是和 Kubernetes 集群结合的方案，所以你<strong>要特别注意发版或者自动扩缩容引起的节点 IP 变化的问题</strong>。节点的频繁变化，对注册中心的健壮性提出了更高的要求，这些问题我在本讲前半部分已经详细说过了，这里就不再赘述了。</p><p>除了用传统的注册中心组件外，Kubernetes 内部的发现机制在 Service Mesh 中也得到了广泛应用，例如 Istio通过监听 Kubernetes Pod 的变化，实现服务发现的功能，这样就不需要服务自身来做服务注册了。</p><p>那么 Service Mesh 中实现的注册发现功能，相比传统微服务有哪些优势呢？</p><p><strong>1. 无须服务自身注册，由 sidecar 代理注册</strong></p><p>sidecar 通过接受控制面下发的配置信息，进行服务注册。相对于服务自身注册，这样可以<strong>减少服务自身开发的工作量，同时也很容易做到注册的配置信息一致化</strong>。比如如果服务自己注册，其实很难控制服务注册的 metadata 信息，在 SDK 中很难约束和升级，比如运行环境、地域、健康检查方式等。</p><p>sidecar 代理还带来了可以<strong>随时更新 meta 信息</strong>的好处。在传统的 SDK 模式中，你想要动态调整服务的权重、metadata 等信息的时候，需要重新发布版本，或者依靠配置中心的能力，但这些控制信息往往散落在各个服务中，不方便管理，在 Service Mesh 中你只需要依靠控制面的能力，就可以轻松做到了。</p><p><strong>2. 通过控制面聚合多种、多个注册中心数据</strong></p><p>像 Istio 的 pilot 模块，在 1.1 版本就支持了单控制面多集群的功能，通过 pilot 将多个注册中心的数据聚合，可以<strong>有效降低单一注册中心的读写压力，使注册中心更容易水平扩展</strong>。</p><p>比如在实践中，我就将多个 Consul 数据中心的数据通过 pilot 模块聚合，然后提供 xDS 协议，供服务发现使用，实现了虚拟机到 Kubernetes 环境的无缝迁移。</p><p><strong>3. 通过 sidecar 提供服务正确性 check 功能</strong></p><p>上一讲我们提到过，在注册中心中，有一种健康检查方式是注册中心主动 ping 服务的模式。实际上如果服务 IP 发生变化，又用了同样的 ping 接口时，健康检查会出现错误。而通过 sidecar 模式，当发现服务 ping 接口过来的流量时，进行服务名称的检测，<strong>通过 header 中增加服务名称与本地服务名称做校验的方式进行检测，可以有效避免这样的错误</strong>。</p><h3 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h3><p>这一章我主要讲解了注册中心的进阶知识，包括如何搭建一个高可用的注册中心，以及 Service Mesh 的方案中注册中心的优势。</p>',22),h=e("p",null,"本节内容到这里就结束了，下一小节我会讲解在 Service Mesh 中如何做负载均衡，以及常用的负载均衡算法。",-1),g=e("p",null,"经过这节内容的讲解，如果让你为注册中心设计一种健康检查方式，你会如何选择呢？欢迎在留言区和我分享你的观点。",-1),d=e("hr",null,null,-1),S=e("p",null,"[",-1),u=e("p",null,[t("]("),e("a",{href:"https://shenceyun.lagou.com/t/Mka",target:"_blank",rel:"noreferrer"},"https://shenceyun.lagou.com/t/Mka"),t(")")],-1),m=e("p",null,[e("a",{href:"https://shenceyun.lagou.com/t/Mka",target:"_blank",rel:"noreferrer"},"拉勾背书内推 + 硬核实战技术干货，帮助每位 Java 工程师达到阿里 P7 技术能力。点此链接，快来领取！")],-1);function v(M,P,b,k,E,f){const s=a("Image");return n(),i("div",null,[c,p(s,{alt:"Lark20201222-151335.png",src:"https://s0.lgstatic.com/i/image/M00/8B/E2/CgqCHl_hnMWAfcU3AABeokS81x4751.png"}),t(),l,p(s,{alt:"Lark20201222-154447.png",src:"https://s0.lgstatic.com/i/image/M00/8B/E4/CgqCHl_hpE6AStCaAAJG1429zDw760.png"}),t(),h,g,d,S,p(s,{alt:"java_高薪训练营.png",src:"https://s0.lgstatic.com/i/image/M00/8B/BD/Ciqc1F_gEFiAcnCNAAhXSgFweBY589.png"}),t(),u,m])}const D=o(_,[["render",v]]);export{A as __pageData,D as default};
