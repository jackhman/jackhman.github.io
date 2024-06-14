import{_ as p,D as l,o as e,g as r,J as a,h as n,Q as s}from"./chunks/framework.f67d7268.js";const B=JSON.parse('{"title":"02核心概念：镜像、容器、仓库，彻底掌握Docker架构核心设计理念","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/045_由浅入深吃透 Docker/(4573) 02  核心概念：镜像、容器、仓库，彻底掌握 Docker 架构核心设计理念.md","filePath":"posts/backEnd/045_由浅入深吃透 Docker/(4573) 02  核心概念：镜像、容器、仓库，彻底掌握 Docker 架构核心设计理念.md","lastUpdated":1696682708000}'),c={name:"posts/backEnd/045_由浅入深吃透 Docker/(4573) 02  核心概念：镜像、容器、仓库，彻底掌握 Docker 架构核心设计理念.md"},t=s('<h1 id="_02核心概念-镜像、容器、仓库-彻底掌握docker架构核心设计理念" tabindex="-1">02核心概念：镜像、容器、仓库，彻底掌握Docker架构核心设计理念 <a class="header-anchor" href="#_02核心概念-镜像、容器、仓库-彻底掌握docker架构核心设计理念" aria-label="Permalink to &quot;02核心概念：镜像、容器、仓库，彻底掌握Docker架构核心设计理念&quot;">​</a></h1><p>Docker 的操作围绕镜像、容器、仓库三大核心概念。在学架构设计之前，我们需要先了解 Docker 的三个核心概念。</p><h3 id="docker-核心概念" tabindex="-1">Docker 核心概念 <a class="header-anchor" href="#docker-核心概念" aria-label="Permalink to &quot;Docker 核心概念&quot;">​</a></h3><h4 id="镜像" tabindex="-1">镜像 <a class="header-anchor" href="#镜像" aria-label="Permalink to &quot;镜像&quot;">​</a></h4><p>镜像是什么呢？通俗地讲，它是一个只读的文件和文件夹组合。它包含了容器运行时所需要的所有基础文件和配置信息，是容器启动的基础。所以你想启动一个容器，那首先必须要有一个镜像。<strong>镜像是 Docker 容器启动的先决条件。</strong></p><p>如果你想要使用一个镜像，你可以用这两种方式：</p><ol><li><p>自己创建镜像。通常情况下，一个镜像是基于一个基础镜像构建的，你可以在基础镜像上添加一些用户自定义的内容。例如你可以基于<code>centos</code>镜像制作你自己的业务镜像，首先安装<code>nginx</code>服务，然后部署你的应用程序，最后做一些自定义配置，这样一个业务镜像就做好了。</p></li><li><p>从功能镜像仓库拉取别人制作好的镜像。一些常用的软件或者系统都会有官方已经制作好的镜像，例如<code>nginx</code>、<code>ubuntu</code>、<code>centos</code>、<code>mysql</code>等，你可以到 <a href="https://hub.docker.com/" target="_blank" rel="noreferrer">Docker Hub</a> 搜索并下载它们。</p></li></ol><h4 id="容器" tabindex="-1">容器 <a class="header-anchor" href="#容器" aria-label="Permalink to &quot;容器&quot;">​</a></h4><p>容器是什么呢？容器是 Docker 的另一个核心概念。通俗地讲，容器是镜像的运行实体。镜像是静态的只读文件，而容器带有运行时需要的可写文件层，并且容器中的进程属于运行状态。即<strong>容器运行着真正的应用进程。容器有初建、运行、停止、暂停和删除五种状态。</strong></p><p>虽然容器的本质是主机上运行的一个进程，但是容器有自己独立的命名空间隔离和资源限制。也就是说，在容器内部，无法看到主机上的进程、环境变量、网络等信息，这是容器与直接运行在主机上进程的本质区别。</p><h4 id="仓库" tabindex="-1">仓库 <a class="header-anchor" href="#仓库" aria-label="Permalink to &quot;仓库&quot;">​</a></h4><p>Docker 的镜像仓库类似于代码仓库，用来存储和分发 Docker 镜像。镜像仓库分为公共镜像仓库和私有镜像仓库。</p><p>目前，<a href="https://hub.docker.com/" target="_blank" rel="noreferrer">Docker Hub</a> 是 Docker 官方的公开镜像仓库，它不仅有很多应用或者操作系统的官方镜像，还有很多组织或者个人开发的镜像供我们免费存放、下载、研究和使用。除了公开镜像仓库，你也可以构建自己的私有镜像仓库，在第 5 课时，我会带你搭建一个私有的镜像仓库。</p><h4 id="镜像、容器、仓库-三者之间的联系" tabindex="-1">镜像、容器、仓库，三者之间的联系 <a class="header-anchor" href="#镜像、容器、仓库-三者之间的联系" aria-label="Permalink to &quot;镜像、容器、仓库，三者之间的联系&quot;">​</a></h4>',14),y=s('<p>从图 1 可以看到，镜像是容器的基石，容器是由镜像创建的。一个镜像可以创建多个容器，容器是镜像运行的实体。仓库就非常好理解了，就是用来存放和分发镜像的。</p><p>了解了 Docker 的三大核心概念，接下来认识下 Docker 的核心架构和一些重要的组件。</p><h3 id="docker-架构" tabindex="-1">Docker 架构 <a class="header-anchor" href="#docker-架构" aria-label="Permalink to &quot;Docker 架构&quot;">​</a></h3><p>在了解 Docker 架构前，我先说下相关的背景知识------容器的发展史。</p><p>容器技术随着 Docker 的出现变得炙手可热，所有公司都在积极拥抱容器技术。此时市场上除了有 Docker 容器，还有很多其他的容器技术，比如 CoreOS 的 rkt、lxc 等。容器技术百花齐放是好事，但也出现了很多问题。比如容器技术的标准到底是什么？容器标准应该由谁来制定？</p><p>也许你可能会说， Docker 已经成为了事实标准，把 Docker 作为容器技术的标准不就好了？事实并没有想象的那么简单。因为那时候不仅有容器标准之争，编排技术之争也十分激烈。当时的编排技术有三大主力，分别是 Docker Swarm、Kubernetes 和 Mesos 。Swarm 毋庸置疑，肯定愿意把 Docker 作为唯一的容器运行时，但是 Kubernetes 和 Mesos 就不同意了，因为它们不希望调度的形式过度单一。</p><p>在这样的背景下，最终爆发了容器大战，<code>OCI</code>也正是在这样的背景下应运而生。</p><p><code>OCI</code>全称为开放容器标准（Open Container Initiative），它是一个轻量级、开放的治理结构。<code>OCI</code>组织在 Linux 基金会的大力支持下，于 2015 年 6 月份正式注册成立。基金会旨在为用户围绕工业化容器的格式和镜像运行时，制定一个开放的容器标准。目前主要有两个标准文档：<strong>容器运行时标准 （runtime spec）<strong>和</strong>容器镜像标准（image spec）</strong>。</p><p>正是由于容器的战争，才导致 Docker 不得不在战争中改变一些技术架构。最终形成了下图所示的技术架构。</p>',9),E=s(`<p>图2 Docker 架构图</p><p>我们可以看到，Docker 整体架构采用 C/S（客户端 / 服务器）模式，主要由客户端和服务端两大部分组成。客户端负责发送操作指令，服务端负责接收和处理指令。客户端和服务端通信有多种方式，既可以在同一台机器上通过<code>UNIX</code>套接字通信，也可以通过网络连接远程通信。</p><p>下面我逐一介绍客户端和服务端。</p><h4 id="docker-客户端" tabindex="-1">Docker 客户端 <a class="header-anchor" href="#docker-客户端" aria-label="Permalink to &quot;Docker 客户端&quot;">​</a></h4><p>Docker 客户端其实是一种泛称。其中 docker 命令是 Docker 用户与 Docker 服务端交互的主要方式。除了使用 docker 命令的方式，还可以使用直接请求 REST API 的方式与 Docker 服务端交互，甚至还可以使用各种语言的 SDK 与 Docker 服务端交互。目前社区维护着 Go、Java、Python、PHP 等数十种语言的 SDK，足以满足你的日常需求。</p><h4 id="docker-服务端" tabindex="-1">Docker 服务端 <a class="header-anchor" href="#docker-服务端" aria-label="Permalink to &quot;Docker 服务端&quot;">​</a></h4><p>Docker 服务端是 Docker 所有后台服务的统称。其中 dockerd 是一个非常重要的后台管理进程，它负责响应和处理来自 Docker 客户端的请求，然后将客户端的请求转化为 Docker 的具体操作。例如镜像、容器、网络和挂载卷等具体对象的操作和管理。</p><p>Docker 从诞生到现在，服务端经历了多次架构重构。起初，服务端的组件是全部集成在 docker 二进制里。但是从 1.11 版本开始， dockerd 已经成了独立的二进制，此时的容器也不是直接由 dockerd 来启动了，而是集成了 containerd、runC 等多个组件。</p><p>虽然 Docker 的架构在不停重构，但是各个模块的基本功能和定位并没有变化。它和一般的 C/S 架构系统一样，Docker 服务端模块负责和 Docker 客户端交互，并管理 Docker 的容器、镜像、网络等资源。</p><h4 id="docker-重要组件" tabindex="-1">Docker 重要组件 <a class="header-anchor" href="#docker-重要组件" aria-label="Permalink to &quot;Docker 重要组件&quot;">​</a></h4><p>下面，我以 Docker 的 18.09.2 版本为例，看下 Docker 都有哪些工具和组件。在 Docker 安装路径下执行 ls 命令可以看到以下与 docker 有关的二进制文件。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">rwxr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">xr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">x </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> root root </span><span style="color:#79B8FF;">27941976</span><span style="color:#E1E4E8;"> Dec </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">2019</span><span style="color:#E1E4E8;"> containerd</span></span>
<span class="line"><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">rwxr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">xr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">x </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> root root  </span><span style="color:#79B8FF;">4964704</span><span style="color:#E1E4E8;"> Dec </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">2019</span><span style="color:#E1E4E8;"> containerd</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">shim</span></span>
<span class="line"><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">rwxr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">xr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">x </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> root root </span><span style="color:#79B8FF;">15678392</span><span style="color:#E1E4E8;"> Dec </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">2019</span><span style="color:#E1E4E8;"> ctr</span></span>
<span class="line"><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">rwxr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">xr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">x </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> root root </span><span style="color:#79B8FF;">50683148</span><span style="color:#E1E4E8;"> Dec </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">2019</span><span style="color:#E1E4E8;"> docker</span></span>
<span class="line"><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">rwxr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">xr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">x </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> root root   </span><span style="color:#79B8FF;">764144</span><span style="color:#E1E4E8;"> Dec </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">2019</span><span style="color:#E1E4E8;"> docker</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">init</span></span>
<span class="line"><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">rwxr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">xr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">x </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> root root  </span><span style="color:#79B8FF;">2837280</span><span style="color:#E1E4E8;"> Dec </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">2019</span><span style="color:#E1E4E8;"> docker</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">proxy</span></span>
<span class="line"><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">rwxr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">xr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">x </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> root root </span><span style="color:#79B8FF;">54320560</span><span style="color:#E1E4E8;"> Dec </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">2019</span><span style="color:#E1E4E8;"> dockerd</span></span>
<span class="line"><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">rwxr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">xr</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">x </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> root root  </span><span style="color:#79B8FF;">7522464</span><span style="color:#E1E4E8;"> Dec </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">2019</span><span style="color:#E1E4E8;"> runc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">-</span><span style="color:#24292E;">rwxr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">xr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">x </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> root root </span><span style="color:#005CC5;">27941976</span><span style="color:#24292E;"> Dec </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">2019</span><span style="color:#24292E;"> containerd</span></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#24292E;">rwxr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">xr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">x </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> root root  </span><span style="color:#005CC5;">4964704</span><span style="color:#24292E;"> Dec </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">2019</span><span style="color:#24292E;"> containerd</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">shim</span></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#24292E;">rwxr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">xr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">x </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> root root </span><span style="color:#005CC5;">15678392</span><span style="color:#24292E;"> Dec </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">2019</span><span style="color:#24292E;"> ctr</span></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#24292E;">rwxr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">xr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">x </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> root root </span><span style="color:#005CC5;">50683148</span><span style="color:#24292E;"> Dec </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">2019</span><span style="color:#24292E;"> docker</span></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#24292E;">rwxr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">xr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">x </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> root root   </span><span style="color:#005CC5;">764144</span><span style="color:#24292E;"> Dec </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">2019</span><span style="color:#24292E;"> docker</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">init</span></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#24292E;">rwxr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">xr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">x </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> root root  </span><span style="color:#005CC5;">2837280</span><span style="color:#24292E;"> Dec </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">2019</span><span style="color:#24292E;"> docker</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">proxy</span></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#24292E;">rwxr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">xr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">x </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> root root </span><span style="color:#005CC5;">54320560</span><span style="color:#24292E;"> Dec </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">2019</span><span style="color:#24292E;"> dockerd</span></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#24292E;">rwxr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">xr</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">x </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> root root  </span><span style="color:#005CC5;">7522464</span><span style="color:#24292E;"> Dec </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">2019</span><span style="color:#24292E;"> runc</span></span></code></pre></div><p>可以看到，Docker 目前已经有了非常多的组件和工具。这里我不对它们逐一介绍，因为在第 11 课时，我会带你深入剖析每一个组件和工具。</p><p>这里我先介绍一下 Docker 的两个至关重要的组件：<code>runC</code>和<code>containerd</code>。</p><ul><li><p><code>runC</code>是 Docker 官方按照 OCI 容器运行时标准的一个实现。通俗地讲，runC 是一个用来运行容器的轻量级工具，是真正用来运行容器的。</p></li><li><p><code>containerd</code>是 Docker 服务端的一个核心组件，它是从<code>dockerd</code>中剥离出来的 ，它的诞生完全遵循 OCI 标准，是容器标准化后的产物。<code>containerd</code>通过 containerd-shim 启动并管理 runC，可以说<code>containerd</code>真正管理了容器的生命周期。</p></li></ul>`,15),d=s(`<p>图3 Docker 服务端组件调用关系图</p><p>通过上图，可以看到，<code>dockerd</code>通过 gRPC 与<code>containerd</code>通信，由于<code>dockerd</code>与真正的容器运行时，<code>runC</code>中间有了<code>containerd</code>这一 OCI 标准层，使得<code>dockerd</code>可以确保接口向下兼容。</p><blockquote><p><a href="https://grpc.io" target="_blank" rel="noreferrer">gRPC</a> 是一种远程服务调用。想了解更多信息可以参考<a href="https://grpc.io/" target="_blank" rel="noreferrer">https://grpc.io</a></p><p>containerd-shim 的意思是垫片，类似于拧螺丝时夹在螺丝和螺母之间的垫片。containerd-shim 的主要作用是将 containerd 和真正的容器进程解耦，使用 containerd-shim 作为容器进程的父进程，从而实现重启 dockerd 不影响已经启动的容器进程。</p></blockquote><p>了解了 dockerd、containerd 和 runC 之间的关系，下面可以通过启动一个 Docker 容器，来验证它们进程之间的关系。</p><h4 id="docker-各组件之间的关系" tabindex="-1">Docker 各组件之间的关系 <a class="header-anchor" href="#docker-各组件之间的关系" aria-label="Permalink to &quot;Docker 各组件之间的关系&quot;">​</a></h4><p>首先通过以下命令来启动一个 busybox 容器：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">busybox</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sleep</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3600</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">busybox</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sleep</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3600</span></span></code></pre></div><p>容器启动后，通过以下命令查看一下 dockerd 的 PID：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ps</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">aux</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dockerd</span></span>
<span class="line"><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">4147</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">0.3</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1447892</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">83236</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">?</span><span style="color:#E1E4E8;">       </span><span style="color:#9ECBFF;">Ssl</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Jul09</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">245</span><span style="color:#9ECBFF;">:59</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/bin/dockerd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ps</span><span style="color:#24292E;"> </span><span style="color:#032F62;">aux</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dockerd</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;">      </span><span style="color:#005CC5;">4147</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">0.3</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">0.2</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1447892</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">83236</span><span style="color:#24292E;"> </span><span style="color:#032F62;">?</span><span style="color:#24292E;">       </span><span style="color:#032F62;">Ssl</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Jul09</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">245</span><span style="color:#032F62;">:59</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/bin/dockerd</span></span></code></pre></div><p>通过上面的输出结果可以得知 dockerd 的 PID 为 4147。为了验证图 3 中 Docker 各组件之间的调用关系，下面使用 pstree 命令查看一下进程父子关系：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pstree</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-l</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-A</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4147</span></span>
<span class="line"><span style="color:#B392F0;">dockerd</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#B392F0;">-containerd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/var/run/docker/containerd/containerd.toml</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--log-level</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">|</span><span style="color:#B392F0;">-containerd-shim</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">moby</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-workdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/var/lib/docker/containerd/daemon/io.containerd.runtime.v1.linux/moby/d14d20507073e5743e607efd616571c834f1a914f903db6279b8de4b5ba3a45a</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-address</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/var/run/docker/containerd/containerd.sock</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-containerd-binary</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/bin/containerd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-runtime-root</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/var/run/docker/runtime-runc</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">|</span><span style="color:#B392F0;">-sleep</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3600</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pstree</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-l</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-A</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4147</span></span>
<span class="line"><span style="color:#6F42C1;">dockerd</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">-containerd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/var/run/docker/containerd/containerd.toml</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--log-level</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">   </span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">-containerd-shim</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-namespace</span><span style="color:#24292E;"> </span><span style="color:#032F62;">moby</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-workdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/var/lib/docker/containerd/daemon/io.containerd.runtime.v1.linux/moby/d14d20507073e5743e607efd616571c834f1a914f903db6279b8de4b5ba3a45a</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-address</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/var/run/docker/containerd/containerd.sock</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-containerd-binary</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/bin/containerd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-runtime-root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/var/run/docker/runtime-runc</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">   </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">   </span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">-sleep</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3600</span></span></code></pre></div><p>事实上，dockerd 启动的时候， containerd 就随之启动了，dockerd 与 containerd 一直存在。当执行 docker run 命令（通过 busybox 镜像创建并启动容器）时，containerd 会创建 containerd-shim 充当 &quot;垫片&quot;进程，然后启动容器的真正进程 sleep 3600 。这个过程和架构图是完全一致的。</p><h4 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h4><p>本课时有基础、有架构，是一篇为后续打基础的文章。如果你有什么知识点没理解到位，有疑问，可写在留言处，我回复置顶，给他人参考。</p><p>如果你理解到位，相信你对 Docker 的三大核心概念镜像、容器、仓库有了一个清楚的认识，并对 Dokcer 的架构有了一定的了解。那么你知道为什么 Docker 公司要把<code>containerd</code>拆分并捐献给社区吗？思考后，也可以把你的想法写在留言区。</p>`,15);function i(F,C,k,D,h,u){const o=l("Image");return e(),r("div",null,[t,a(o,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/49/93/Ciqc1F9PYryALHVmAABihjRzo4c527.png"}),n(),y,a(o,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/49/93/Ciqc1F9PYtCAC1GSAADIK4E6wrc368.png"}),n(),E,a(o,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/49/93/Ciqc1F9PYuuAQINxAAA236heaL0459.png"}),n(),d])}const b=p(c,[["render",i]]);export{B as __pageData,b as default};
