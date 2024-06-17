import{_ as a,F as t,g as n,K as p,h,ar as l,l as s,o as e}from"./chunks/framework.VlluEs-f.js";const C=JSON.parse('{"title":"05路由器：针对不同的流量实现多种路由策略","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/微服务Service Mesh原理与实战_文档/(5998) 05  路由器：针对不同的流量实现多种路由策略.md","filePath":"posts/backEnd/微服务Service Mesh原理与实战_文档/(5998) 05  路由器：针对不同的流量实现多种路由策略.md","lastUpdated":1718371218000}'),k={name:"posts/backEnd/微服务Service Mesh原理与实战_文档/(5998) 05  路由器：针对不同的流量实现多种路由策略.md"},r=l(`<h1 id="_05路由器-针对不同的流量实现多种路由策略" tabindex="-1">05路由器：针对不同的流量实现多种路由策略 <a class="header-anchor" href="#_05路由器-针对不同的流量实现多种路由策略" aria-label="Permalink to &quot;05路由器：针对不同的流量实现多种路由策略&quot;">​</a></h1><p>今天我要和你分享的内容是：如何利用路由器模块，针对不同流量实现多种路由策略。</p><p>在微服务架构中，提到路由的概念多少会有点模糊。实际上路由这个概念，在各种场景中的解释都有差异，比如提到路由器这个词，你可能更多会想起硬件的路由器：在家庭的局域网中，一般我们都需要一个路由器将内外网的流量通过一定的规则联系起来，比如端口。</p><p>这里我们讲到的路由器更多是指微服务架构中的软路由，虽然和我们常听到的硬件路由器有很大的差别，但其目的都是一样的：<strong>根据不同规则进行流量控制和转发</strong>。</p><p>实际上路由这个抽象的概念被提及，甚至达到核心的位置，更多的是在 Service Mesh 架构中。在传统的微服务架构中，路由虽然也存在，但因为不需要进行主动配置，存在感并不是很强。</p><p>而在 Service Mesh 架构中，数据面都是<strong>通过控制面的配置</strong> 下发驱动的，也就是说<strong>必须强行声明路由配置，否则会导致调用出现 404 的错误</strong>。这种声明式的架构方式也许因为配置带来了一些不便，却提高了架构的可控性，不会出现传统微服务架构中无法知道调用了几个服务的问题。</p><p>下面我们从一个 Envoy 中的路由配置开始，进一步了解 Service Mesh 中具体的路由配置：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;version_info&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;2020-12-07T01:38:20Z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;route_config&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;name&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;9080&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;virtual_hosts&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;name&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;details.default.svc.cluster:9080&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;domains&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">				&quot;details.default.svc.cluster:9080&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;routes&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">				&quot;match&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">					&quot;prefix&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				},</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">				&quot;route&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">					&quot;cluster&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;outbound|9080||details.default.svc.cluster&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">					&quot;timeout&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;10s&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">					&quot;max_grpc_timeout&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;10s&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				},</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">				&quot;per_filter_config&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">					&quot;mixer&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			}]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>让我们从 route_config 的最顶层开始看起，解释下这些字段的含义。虽然各种数据面的路由配置有些差别，但实际上大同小异，<strong>除了字段名略有差异外，没有本质上的区别</strong>。</p><p><strong>name：<strong>主要是对应 listener（监听器，可以理解为 sidecar 的监听端口）的名称，这里用端口作为名字，已经确保了唯一性。通常我们的路由配置针对每种协议会有两份（Client 端路由和 Server 端路由），这一讲，我们主要讲解 Client 端，也就是</strong>调用方的路由配置</strong>。因为调用方的路由配置相对比较复杂，理解了调用方配置，被调用端就很容易理解了。</p><p><strong>domains：<strong>在 Envoy 中会先做一层初步的过滤，这层过滤就是服务域名（名称），这层匹配非常简单，基本上就是</strong>字符串的对比</strong>，所以速度会很快，这样就避免了直接遍历所有路由带来的不必要的性能消耗。</p><p><strong>routes：<strong>服务的路由配置，可以注意到这是一个</strong>数组</strong>，在这里我们可以针对要访问的服务设置多条路由配置。可以针对不同的路由规则，进行不同的 filter 配置。</p><p>下面我们看一下 routers 数组结构中的，几个字段的解释。</p><p><strong>match：</strong> 用于路由匹配，<strong>程序会遍历匹配此字段到对应的路由设置</strong>，可以配置 header、path、pathPrefix 等。</p><p><strong>route：</strong> 主要是匹配到这条路由的基本规则设置。比如 Cluster 字段是这条路由对应的服务名，<strong>这也是路由模块最核心的作用，通过路由规则匹配到合适的服务名，然后进行转发。</strong> 比如在此配置实例中&quot;details.default.svc.cluster:9080&quot;的服务会被转发到&quot;outbound|9080||details.default.svc.cluster&quot;对应的服务节点上面。另外两个字段则是服务转发的超时时间。</p><p><strong>per_filter_config：</strong> 路由对应的中间件配置，用于服务治理的限流、熔断等。</p><p>现在你已经了解了路由的基本知识，接下来我将带你具体分析精准流量的金丝雀发布这个具体的 case，帮助你更好地理解路由相关的配置。</p><h3 id="精准流量的金丝雀发布" tabindex="-1">精准流量的金丝雀发布 <a class="header-anchor" href="#精准流量的金丝雀发布" aria-label="Permalink to &quot;精准流量的金丝雀发布&quot;">​</a></h3><p>金丝雀发布也叫灰度发布，实际上就是<strong>将少量的生产流量路由到线上服务的新版本中，以验证新版本的准确性和稳定性</strong>。</p><blockquote><p>为什么叫金丝雀发布呢，是因为金丝雀对矿场中的毒气比较敏感，所以在矿场开工前工人们会放一只金丝雀进去，以验证矿场是否存在毒气。</p></blockquote><p>我们来看一下下面的配置，结合配置理解金丝雀发布。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;route_config&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;virtual_hosts&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;name&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;helloworld&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;domains&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;routes&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;prefix&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;weighted_clusters&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              &quot;clusters&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;helloworld|stage=canary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;weight&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;helloworld|stage=prod&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;weight&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 99</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>你可以看到，相对于前面的 Cluster 的配置，这里多出了 weighted_clusters 的配置，也就是说，<strong>Envoy 会按照权重将流量路由到 HelloWorld 这个服务不同的版本中</strong>，name 中的 stage=canary 可以理解为注册中心的针对不同节点的 tag，在 Pilot 中会被当作服务名的一部分拼在服务名中。</p><p>当然，和之前在负载均衡模块中讲到的染色一样，<strong>我们需要针对机器或者 Pod 打上标签</strong>，比如在进行 CD 发布的时候，将用于金丝雀的 Pod 打上 stage=canary 的标签，这样我们再更新客户端的路由配置，就会有 1% 的流量路由到金丝雀的 Pod 上了。</p><p>其实，相对于传统的 Kubernetes 或者 ECS 灰度发布只能进行节点维度的灰度，这里的金丝雀发布<strong>将流量变得更加精准可控</strong>。</p><p>我们对金丝雀发布做一些延展的思考吧，还记得我在负载均衡模块讲到染色功能吗？金丝雀发布是不是和染色有点像，都是对机器打标签，然后通过客户端的策略控制流量。</p><p>实际上利用负载均衡器的染色功能和这节讲到的路由流量分配功能，都可以更好地实现金丝雀发布。想象一下，金丝雀发布在每次 CD 的过程中，都需要更新所有调用端的配置，这是不是有些&quot;反人类&quot;，从工程化的角度来讲，这个改动是不是影响面太大了？</p><p>简单举个例子，一个服务有上百个调用方，那么这上百个服务调用端的路由配置都需要动态变更，这样是否合适呢，有没有更好的办法解决这个问题呢?</p><p>答案就是<strong>染色方案和路由流量分配方案相结合</strong>。我们在入口网关层，进行路由流量分配，这个时候划出一部分流量用作 canary 的灰度，剩余的更多流量用于正式版本，这样就无须在 CD 发布时做改变调用方配置的操作了，只需要启动一个带有金丝雀 stage=canary 标签的 Pod，就可以以最小化的代价完成灰度服务了。</p><p>当然这种策略适用于<strong>节点数量比较小的服务</strong>。如果节点数量超过 100 台，其实直接用单台节点进行灰度测试就可以了，此时的灰度测试不要打上金丝雀标签即可。</p><h3 id="路由中间件" tabindex="-1">路由中间件 <a class="header-anchor" href="#路由中间件" aria-label="Permalink to &quot;路由中间件&quot;">​</a></h3><p>为了配置的灵活性，一般我们会<strong>把各种中间件放在路由层，这样就能根据 path 或者 header 路由匹配后进行灵活的中间件配置</strong>。</p><p>比如我们需要对服务 A 的 &quot;/test&quot; 的 path 进行单独的限流配置，就可以建立一个 route 的match 设置为 path:/test，这样就做到针对某一个 path 进行限流，而这个配置不会影响其他的路由规则。</p><p>虽然这里只举例了限流，但其他的中间件，比如熔断、故障注入、日志，都是一样的道理。</p><h3 id="服务重写" tabindex="-1">服务重写 <a class="header-anchor" href="#服务重写" aria-label="Permalink to &quot;服务重写&quot;">​</a></h3><p>在前面的配置中，我们看到了 Cluster 的配置放在了路由里，也就是根据不同的路由可以配置不同的 Cluster，这样我们就能根据不同的 path 将流量路由到不同的 upstream 服务了。</p><p>也许这个功能看起来有点奇怪，不像前面的路由中间件那么好理解，下面我结合一个真实的场景带你进一步学习这个功能的应用场景。</p><p>在微服务架构中，我们会拆分出很多个微服务 A、B、C、D 等。在微服务拆分的初期，拆分出了一个巨大的用户服务 A，这个服务里面包含了各种用户相关的功能，比如登录、注册、金币、阅读历史、收藏夹等，但是随着业务的逐步演进，这个服务又变成了一个巨大的&quot;单体服务&quot;。</p><p>这个时候我们想要把用户金币相关的功能独立拆分成一个新的用户金币服务 B，此时你突然发现：服务 A 已经被十几个甚至上百个服务调用了，如果要拆解独立出用户金币服务 B，需要改动十几个甚至上百个服务的客户端代码，这简直是灾难，需要耗费大量的人力和时间，而且在具体的实践中几乎不可能完成。</p><p>这个时候就需要我们的服务重写功能登场了，只要我们在路由配置中，<strong>将用户金币相关功能对应的 path 建立路由，并将 Cluster 设置为新的用户金币服务 B</strong>就可以了。这样的方法解决了微服务演进中需要推动客户端服务改动的问题，这也是 Service Mesh 带给我们新的思考。</p><p>虽然在传统的 SDK 中也可以结合控制面做到这样的功能，但谁能保证一开始就想到这样业务需求呢？当微服务拆分中遇到这样的需求时，再去开发这样的功能又太晚了。而 Service Mesh 中 sidecar 这样的设计模式，可以<strong>保证基础设施和业务独立演进</strong>，在遇到类似的新需求时，可以随时更新数据面的代码，让基础设施更敏捷地为业务服务。</p><h3 id="rds-路由发现服务" tabindex="-1">RDS 路由发现服务 <a class="header-anchor" href="#rds-路由发现服务" aria-label="Permalink to &quot;RDS 路由发现服务&quot;">​</a></h3><p>结合上面提到的无论是路由中间件，还是服务重写，都会遇到更新客户端路由的问题，这种时候，我们肯定不能去更新所有这些调用端服务的配置。此时就需要和服务节点发现一样，引入路由发现的功能，<strong>通过动态发现路由的变化，做到动态更新调用端路由配置</strong>，以达到路由中间件等配置更新的功能。这种做法也让路由这个功能在 Service Mesh 架构中发挥更大的价值。</p><h3 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h3><p>这一讲我主要讲了路由在微服务架构中的作用，以及如何利用路由这个模块做到金丝雀发布、服务重写、精准流量限流等功能。</p>`,45),o=s("p",null,"本节内容到这里就结束了，下一小节我将和你分享微服务治理中的限流熔断，希望你学习完下一小节的内容，能够更好地理解路由器这个模块。",-1),E=s("p",null,"除了这节内容的讲解，你觉得路由器这个模块在实际的业务场景中还能发挥哪些作用呢？欢迎在留言区和我分享你的观点。我们下一讲再见。",-1);function d(g,u,F,c,y,q){const i=t("Image");return e(),n("div",null,[r,p(i,{alt:"Lark20210104-094422.png",src:"https://s0.lgstatic.com/i/image2/M01/04/7A/CgpVE1_ycxKAKLkoAAMmmtynjiU493.png"}),h(),o,E])}const B=a(k,[["render",d]]);export{C as __pageData,B as default};
