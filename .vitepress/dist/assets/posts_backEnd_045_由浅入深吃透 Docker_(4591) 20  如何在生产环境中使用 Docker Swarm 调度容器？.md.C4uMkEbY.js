import{_ as h,F as k,g as l,K as a,h as n,ar as s,o as p}from"./chunks/framework.VlluEs-f.js";const w=JSON.parse('{"title":"20如何在生产环境中使用DockerSwarm调度容器？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/045_由浅入深吃透 Docker/(4591) 20  如何在生产环境中使用 Docker Swarm 调度容器？.md","filePath":"posts/backEnd/045_由浅入深吃透 Docker/(4591) 20  如何在生产环境中使用 Docker Swarm 调度容器？.md","lastUpdated":1718371218000}'),t={name:"posts/backEnd/045_由浅入深吃透 Docker/(4591) 20  如何在生产环境中使用 Docker Swarm 调度容器？.md"},e=s('<h1 id="_20如何在生产环境中使用dockerswarm调度容器" tabindex="-1">20如何在生产环境中使用DockerSwarm调度容器？ <a class="header-anchor" href="#_20如何在生产环境中使用dockerswarm调度容器" aria-label="Permalink to &quot;20如何在生产环境中使用DockerSwarm调度容器？&quot;">​</a></h1><p>上一课时，我介绍了 Docker 的单节点引擎工具 Docker Compose，它能够在单一节点上管理和编排多个容器，当我们的服务和容器数量较小时可以使用 Docker Compose 来管理容器。</p><p>然而随着我们的业务规模越来越大，我们的容器规模也逐渐增大时，数量庞大的容器管理将给我们带来许多挑战。Docker 官方为了解决多容器管理的问题推出了 Docker Swarm ，我们可以用它来管理规模更大的容器集群。</p><h3 id="swarm-的前生今世" tabindex="-1">Swarm 的前生今世 <a class="header-anchor" href="#swarm-的前生今世" aria-label="Permalink to &quot;Swarm 的前生今世&quot;">​</a></h3><p>2014 年 Docker 在容器界越来越火，这时容器的编排工具 Mesos 和 Kubernetes 也开始崭露头角。此时，Docker 公司也开始筹划容器的编排和集群管理工具，推出了自己的通信协议项目 Beam。后来，通过改进 Beam，Beam 成为一个允许使用 Docker API 来控制的一种分布式系统，之后项目被重命名为 libswarm。然而在 2014 年 11 月，Docker 公司又对 libswarm 进行了重新设计，支持了远程调用 API，并且被重新命名为 Swarm。到此我们称之为 Swarm V1。</p><p>在 2016 年，为了解决中央服务可扩展性的问题，Docker 团队重新设计了 Swarm，并称之为 Swarm V2。此时的 Docker Swarm 已经可以支持超过 1000 多个节点的集群规模，并且 Docker 团队在发布 Docker 1.12 版本时，将 Docker Swarm 默认集成到了 Docker 引擎中。</p><p>由于 Swarm 是 Docker 官方推出的容器集群管理工具，因此 Swarm 最大的优势之一就是原生支持 Docker API，给用户带来了极大的便利，原来的 Docker 用户可以很方便地将服务迁移到 Swarm 中来。</p><p>与此同时，Swarm 还内置了对 Docker 网络插件的支持，因此用户可以很方便地部署需要跨主机通信的容器集群。其实 Swarm 的优点远远不止这些，还有很多，例如以下优点。</p><ul><li><p><strong>分布式：</strong> Swarm 使用<a href="https://raft.github.io/" target="_blank" rel="noreferrer">Raft</a>（一种分布式一致性协议）协议来做集群间数据一致性保障，使用多个容器节点组成管理集群，从而避免单点故障。</p></li><li><p><strong>安全：</strong> Swarm 使用 TLS 双向认证来确保节点之间通信的安全，它可以利用双向 TLS 进行节点之间的身份认证，角色授权和加密传输，并且可以自动执行证书的颁发和更换。</p></li><li><p><strong>简单：</strong> Swarm 的操作非常简单，并且除 Docker 外基本无其他外部依赖，而且从 Docker 1.12 版本后， Swarm 直接被内置到了 Docker 中，可以说真正做到了开箱即用。</p></li></ul><p>Swarm 的这些优点得益于它优美的架构设计，下面我们来了解一下 Swarm 的架构。</p><h3 id="swarm-的架构" tabindex="-1">Swarm 的架构 <a class="header-anchor" href="#swarm-的架构" aria-label="Permalink to &quot;Swarm 的架构&quot;">​</a></h3><p>Swarm 的架构整体分为<strong>管理节点</strong> （Manager Nodes）和<strong>工作节点</strong>（Worker Nodes），整体架构如下图：</p>',12),r=s('<p>图 1 Swarm 架构图</p><p><strong>管理节点：</strong> 管理节点负责接受用户的请求，用户的请求中包含用户定义的容器运行状态描述，然后 Swarm 负责调度和管理容器，并且努力达到用户所期望的状态。</p><p><strong>工作节点：</strong> 工作节点运行执行器（Executor）负责执行具体的容器管理任务（Task），例如容器的启动、停止、删除等操作。</p><blockquote><p>管理节点和工作节点的角色并不是一成不变的，你可以手动将工作节点转换为管理节点，也可以将管理节点转换为工作节点。</p></blockquote><h3 id="swarm-核心概念" tabindex="-1">Swarm 核心概念 <a class="header-anchor" href="#swarm-核心概念" aria-label="Permalink to &quot;Swarm 核心概念&quot;">​</a></h3><p>在真正使用 Swarm 之前，我们需要了解几个 Swarm 的核心概念，这些核心概念可以帮助我们更好地学习和理解 Swarm 的设计理念。</p><h4 id="swarm-集群" tabindex="-1">Swarm 集群 <a class="header-anchor" href="#swarm-集群" aria-label="Permalink to &quot;Swarm 集群&quot;">​</a></h4><p>Swarm 集群是一组被 Swarm 统一管理和调度的节点，被 Swarm纳管的节点可以是物理机或者虚拟机。其中一部分节点作为管理节点，负责集群状态的管理和协调，另一部分作为工作节点，负责执行具体的任务来管理容器，实现用户服务的启停等功能。</p><h4 id="节点" tabindex="-1">节点 <a class="header-anchor" href="#节点" aria-label="Permalink to &quot;节点&quot;">​</a></h4><p>Swarm 集群中的每一台物理机或者虚拟机称为节点。节点按照工作职责分为<strong>管理节点</strong> 和<strong>工作节点</strong>，管理节点由于需要使用 Raft 协议来协商节点状态，生产环境中通常建议将管理节点的数量设置为奇数个，一般为 3 个、5 个或 7 个。</p><h4 id="服务" tabindex="-1">服务 <a class="header-anchor" href="#服务" aria-label="Permalink to &quot;服务&quot;">​</a></h4><p>服务是为了支持容器编排所提出的概念，它是一系列复杂容器环境互相协作的统称。一个服务的声明通常包含容器的启动方式、启动的副本数、环境变量、存储、配置、网络等一系列配置，用户通过声明一个服务，将它交给 Swarm，Swarm 负责将用户声明的服务实现。</p><p>服务分为全局服务（global services）和副本服务（replicated services）。</p><ul><li><p>全局服务：每个工作节点上都会运行一个任务，类似于 Kubernetes 中的 <a href="https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/" target="_blank" rel="noreferrer">Daemonset</a>。</p></li><li><p>副本服务：按照指定的副本数在整个集群中调度运行。</p></li></ul><h4 id="任务" tabindex="-1">任务 <a class="header-anchor" href="#任务" aria-label="Permalink to &quot;任务&quot;">​</a></h4><p>任务是集群中的最小调度单位，它包含一个真正运行中的 Docker 容器。当管理节点根据服务中声明的副本数将任务调度到节点时，任务则开始在该节点启动和运行，当节点出现异常时，任务会运行失败。此时调度器会把失败的任务重新调度到其他正常的节点上正常运行，以确保运行中的容器副本数满足用户所期望的副本数。</p><h4 id="服务外部访问" tabindex="-1">服务外部访问 <a class="header-anchor" href="#服务外部访问" aria-label="Permalink to &quot;服务外部访问&quot;">​</a></h4><p>由于容器的 IP 只能在集群内部访问到，而且容器又是用后马上销毁，这样容器的 IP 也会动态变化，因此容器集群内部的服务想要被集群外部的用户访问到，服务必须要映射到主机上的固定端口。Swarm 使用入口负载均衡（ingress load balancing）的模式将服务暴露在主机上，该模式下，每一个服务会被分配一个公开端口（PublishedPort），你可以指定使用某个未被占用的公开端口，也可以让 Swarm 自动分配一个。</p><p>Swarm 集群的公开端口可以从集群内的任意节点上访问到，当请求达到集群中的一个节点时，如果该节点没有要请求的服务，则会将请求转发到实际运行该服务的节点上，从而响应用户的请求。公有云的云负载均衡器（cloud load balancers）可以利用这一特性将流量导入到集群中的一个或多个节点，从而实现利用公有云的云负载均衡器将流量导入到集群中的服务。</p><h3 id="搭建-swarm-集群" tabindex="-1">搭建 Swarm 集群 <a class="header-anchor" href="#搭建-swarm-集群" aria-label="Permalink to &quot;搭建 Swarm 集群&quot;">​</a></h3><p>要想使用 Swarm 集群有如下一些要求：</p><ul><li><p>Docker 版本大于 1.12，推荐使用最新稳定版 Docker；</p></li><li><p>主机需要开放一些端口（TCP：2377 UDP:4789 TCP 和 UDP:7946）。</p></li></ul><p>下面我通过四台机器来搭建一个 Swarm 集群，演示的节点规划如下：</p>',23),d=s(`<blockquote><p>生产环境中推荐使用至少三个 manager 作为管理节点。</p></blockquote><ul><li>第一步：初始化集群</li></ul><p>Docker 1.12 版本后， Swarm 已经默认集成到了 Docker 中，因此我们可以直接使用 Docker 命令来初始化 Swarm，集群初始化的命令格式如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker swarm init </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">advertise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">addr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">YOUR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">IP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><blockquote><p>advertise-addr 一般用于主机有多块网卡的情况，如果你的主机只有一块网卡，可以忽略此参数。</p></blockquote><p>在管理节点上，通过以下命令初始化集群：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ docker swarm init</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Swarm </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initialized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: current </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (1ehtnlcf3emncktgjzpoux5ga) is now a manager.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">To add a worker to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> swarm, run the following </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    docker swarm join </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">token </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SWMTKN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1kal5b1iozbfmnnhx3kjfd3y6yqcjjjpcftrlg69pm2g8hw5vx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">8j4l0t2is9ok9jwwc3tovtxbp </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">192.168</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">31.100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2377</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">To add a manager to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> swarm, run </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;docker swarm join-token manager&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> and follow the instructions.</span></span></code></pre></div><p>集群初始化后， Swarm 会提示我们当前节点已经作为一个管理节点了，并且提示了如何把一台主机加入集群成为工作节点。</p><ul><li>第二步：加入工作节点</li></ul><p>按照第一步集群初始化后输出的提示，只需要复制其中的命令即可，然后在剩余的三台工作节点上分别执行如下命令：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ docker swarm join </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">token </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SWMTKN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1kal5b1iozbfmnnhx3kjfd3y6yqcjjjpcftrlg69pm2g8hw5vx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">8j4l0t2is9ok9jwwc3tovtxbp </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">192.168</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">31.100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2377</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This node joined a swarm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> worker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span></code></pre></div><p>默认加入的节点为工作节点，如果是生产环境，我们可以使用<code>docker swarm join-token manager</code>命令来查看如何加入管理节点：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ docker swarm join</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">to ken manager</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">To add a manager to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> swarm, run the following </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    docker swarm join </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">token </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SWMTKN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1kal5b1iozbfmnnhx3kjfd3y6yqcjjjpcftrlg69pm2g8hw5vx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">8fq89jxo2axwggryvom5a337t </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">192.168</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">31.100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2377</span></span></code></pre></div><p>复制 Swarm 输出的结果即可加入管理节点到集群中。</p><blockquote><p>注意：管理节点的数量必须为奇数，生产环境推荐使用3个、5个或7个管理节点来管理 Swarm 集群。</p></blockquote><ul><li>第三步：节点查看</li></ul><p>节点添加完成后，我们使用以下命令可以查看当前节点的状态：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ ]# docker node ls</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ID</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                            HOSTNAME</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            STATUS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">              AVAILABILITY</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        MANAGER</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> STATUS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      ENGINE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> VERSION</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1ehtnlcf3emncktgjzpoux5ga </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   swarm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manager       </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Ready</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">               Active</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">              Leader</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">              19.03</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pn7gdm847sfzydqhcv3vma97y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   swarm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">node1         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Ready</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">               Active</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                                        19.03</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4dtc9pw5quyjs5yf25ccgr8uh </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   swarm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">node2         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Ready</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">               Active</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                                        19.03</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">est7ww3gngna4u7td22g9m2k5 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   swarm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">node3         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Ready</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">               Active</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                                        19.03</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span></span></code></pre></div><p>到此，一个包含 1 个管理节点，3 个工作节点的 Swarm 集群已经搭建完成。</p><h3 id="使用-swarm" tabindex="-1">使用 Swarm <a class="header-anchor" href="#使用-swarm" aria-label="Permalink to &quot;使用 Swarm&quot;">​</a></h3><p>集群搭建完成后，我们就可以在 Swarm 集群中创建服务了，Swarm 集群中常用的服务部署方式有以下两种。</p><h4 id="_1-通过-docker-service-命令创建服务" tabindex="-1">（1）通过 docker service 命令创建服务 <a class="header-anchor" href="#_1-通过-docker-service-命令创建服务" aria-label="Permalink to &quot;（1）通过 docker service 命令创建服务&quot;">​</a></h4><p>使用<code>docker service create</code>命令可以创建服务，创建服务的命令如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ docker service create </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">replicas </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name hello</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">world nginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">24f9ng83m9sq4ml3e92k4g5by</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">overall </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">progress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> out </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">of</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tasks</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: running   [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==================================================&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">verify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Service converged</span></span></code></pre></div><p>此时我们已经创建好了一个服务，使用<code>docker service ls</code>命令可以查看已经启动的服务：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ docker service ls</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ID</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                  NAME</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                  MODE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                REPLICAS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            IMAGE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">               PORTS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">24f9ng83m9sq        hello</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">world           replicated          </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                 nginx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:latest</span></span></code></pre></div><p>当我们不再需要这个服务了，可以使用<code>docker service rm</code>命令来删除服务：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ docker service rm hello</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">world</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hello</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">world</span></span></code></pre></div><p>此时 hello-world 这个服务已经成功地从集群中删除。</p><p>想要了解更多的<code>docker service</code>命令的相关操作，可以参考<a href="https://docs.docker.com/engine/swarm/swarm-tutorial/deploy-service/" target="_blank" rel="noreferrer">这里</a>。</p><p>生产环境中，我们推荐使用 docker-compose 模板文件来部署服务，这样服务的管理会更加方便并且可追踪，而且可以同时创建和管理多个服务，更加适合生产环境中依赖关系较复杂的部署模式。</p><h4 id="_2-通过-docker-stack-命令创建服务" tabindex="-1">（2）通过 docker stack 命令创建服务 <a class="header-anchor" href="#_2-通过-docker-stack-命令创建服务" aria-label="Permalink to &quot;（2）通过 docker stack 命令创建服务&quot;">​</a></h4><p>我们在 19 课时中创建了 docker-compose 的模板文件，成功的使用该模板文件创建并启动了 MySQL 服务和 WordPress 两个服务。这里我们将 19 讲中的 docker-compose 模板文件略微改造一下：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">   mysql</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">     image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mysql:5.7</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">     volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mysql_data:/var/lib/mysql</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">     restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">     environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">       MYSQL_ROOT_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">root</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">       MYSQL_DATABASE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mywordpress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">       MYSQL_USER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mywordpress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">       MYSQL_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mywordpress</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">   wordpress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">     depends_on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mysql</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">     image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">wordpress:php7.4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">     deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">       mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">replicated</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">       replicas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">     ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;8080:80&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">     restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">     environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">       WORDPRESS_DB_HOST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mysql:3306</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">       WORDPRESS_DB_USER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mywordpress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">       WORDPRESS_DB_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mywordpress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">       WORDPRESS_DB_NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mywordpress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    mysql_data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}</span></span></code></pre></div><p>我在服务模板文件中添加了 deploy 指令，并且指定使用副本服务（replicated）的方式启动两个 WordPress 实例。</p><p>准备好启动 WordPress 服务的配置后，我们在 /tmp 目下新建 docker-compose.yml 文件，并且写入以上的内容，然后我们使用以下命令启动服务：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ docker stack deploy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c docker</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">compose.yml wordpress</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Ignoring unsupported options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> restart</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Creating network wordpress_default</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Creating service wordpress_mysql</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Creating service wordpress_wordpress</span></span></code></pre></div><p>执行完以上命令后，我们成功启动了两个服务：</p><ol><li><p>MySQL 服务，默认启动了一个副本。</p></li><li><p>WordPress 服务，根据我们 docker-compose 模板的定义启动了两个副本。</p></li></ol><p>下面我们用<code>docker service ls</code>命令查看一下当前启动的服务。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ docker service ls</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ID                  NAME                  MODE                REPLICAS            IMAGE               PORTS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v8i0pzb4e3tc        wordpress_mysql       replicated          </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                 mysql</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.7</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">96m8xfyeqzr5        wordpress_wordpress   replicated          </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                 wordpress</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">php7.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    *:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8080</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tcp</span></span></code></pre></div><p>可以看到，Swarm 已经为我们成功启动了一个 MySQL 服务，并且启动了两个 WordPress 实例。WordPress 实例通过 8080 端口暴露在了主机上，我们通过访问集群中的任意节点的 IP 加 8080 端口即可访问到 WordPress 服务。例如，我们访问<a href="http://192.168.31.101:8080" target="_blank" rel="noreferrer">http://192.168.31.101:8080</a>即可成功访问到我们搭建的 WordPress 服务。</p><h3 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h3><p>Docker Swarm 是一个用来定义复杂应用的集群编排工具，可以帮我们把多台主机组成一个 Swarm 集群，并且帮助我们管理和调度复杂的容器服务。由于 Swarm 已经被内置于 Docker 中，因此 Swarm 的安装和使用也变得非常简单，只要你有 Docker 的使用经验，就可以很快地将你的应用迁移到 Swarm 集群中。</p><p>那么，学完本课时内容，你可以试着构建一个高可用（管理节点扩展为 3 个或 5 个）的 Swarm 集群吗？</p><p>下一课时，我将为你讲解目前使用最多的容器编排系统Kubernetes，再会。</p>`,46);function E(o,g,c,y,F,m){const i=k("Image");return p(),l("div",null,[e,a(i,{alt:"image.png",src:"https://s0.lgstatic.com/i/image/M00/67/E1/CgqCHl-iZxSAbYhzAABiA3_fQM8971.png"}),n(),r,a(i,{alt:"Lark20201104-162431.png",src:"https://s0.lgstatic.com/i/image/M00/67/D6/Ciqc1F-iZ0KAdrQoAABINXCXUv0846.png"}),n(),d])}const D=h(t,[["render",E]]);export{w as __pageData,D as default};
