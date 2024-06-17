import{_ as l,F as e,g as p,K as n,h as i,ar as t,l as s,o as h}from"./chunks/framework.VlluEs-f.js";const ps=JSON.parse('{"title":"10系统保护：微服务架构雪崩效应与服务限流","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/SpringCloud Alibaba 实战_文档/(6755) 10  系统保护：微服务架构雪崩效应与服务限流.md","filePath":"posts/backEnd/SpringCloud Alibaba 实战_文档/(6755) 10  系统保护：微服务架构雪崩效应与服务限流.md","lastUpdated":1718371218000}'),k={name:"posts/backEnd/SpringCloud Alibaba 实战_文档/(6755) 10  系统保护：微服务架构雪崩效应与服务限流.md"},r=t('<h1 id="_10系统保护-微服务架构雪崩效应与服务限流" tabindex="-1">10系统保护：微服务架构雪崩效应与服务限流 <a class="header-anchor" href="#_10系统保护-微服务架构雪崩效应与服务限流" aria-label="Permalink to &quot;10系统保护：微服务架构雪崩效应与服务限流&quot;">​</a></h1><p>前面我们介绍了 OpenFeign 微服务间通信与 Spring Cloud Gateway 网关通信，这些是日常业务中的正常处理情况，但是在微服务环境下受制于网络、机器性能、算法、程序各方面影响，运行异常的情况也在显著提升，如果不做好异常保护，微服务架构就像空中楼阁一样随时可能会崩溃，从本节我们开始一个新话题：<strong>微服务的系统保护</strong>。通过这个话题，我们就可以了解在 Spring Cloud Alibaba 生态下解决雪崩等一系列危机整体架构安全的方法。</p><p>这一讲我们先来对 Alibaba Sentinel 做入门讲解，涉及三方面内容：</p><ul><li><p>通过真实的生产案例讲解微服务的雪崩效应；</p></li><li><p>Alibaba Sentinel 的部署与配置；</p></li><li><p>配置的接口限流规则。</p></li></ul><h3 id="微服务的雪崩效应" tabindex="-1">微服务的雪崩效应 <a class="header-anchor" href="#微服务的雪崩效应" aria-label="Permalink to &quot;微服务的雪崩效应&quot;">​</a></h3><h4 id="一次线上的服务雪崩事故" tabindex="-1">一次线上的服务雪崩事故 <a class="header-anchor" href="#一次线上的服务雪崩事故" aria-label="Permalink to &quot;一次线上的服务雪崩事故&quot;">​</a></h4><p>&quot;雪崩&quot;一词指的是山地积雪由于底部溶解等原因造成的突然大块塌落的现象，具有很强的破坏力。在微服务项目中指由于突发流量导致某个服务不可用，从而导致上游服务不可用，并产生级联效应，最终导致整个系统不可用，使用雪崩这个词来形容这一现象最合适不过。</p><p>之前我在国内一家著名的金融服务机构负责架构设计与维护，经历过不止一次服务雪崩，这也给我造成了一些心理阴影。在日后的架构设计中，我总是情不自禁地从最坏的情况考虑，尽我所能规避最差的情况发生。</p><p>下面我跟大家分享一次险些给公司带来重大损失的雪崩事故，希望各位能引以为戒。</p><p>在 2015 年 &quot;618&quot; 前几天，当时我负责公司普惠金融业务线架构。</p>',10),o=t('<p>普惠金融业务流程</p><p>平时从借款人门户的订单接口的访问峰值约为 100 TPS，因为并发压力不大，我对系统性能与可用性考虑不足，为节约成本也只为每一个子系统部署了单台高性能服务器。没想到在 6 月 16 日上午 10 点 30 分，技术部接到紧急通知，除催收系统外，各节点服务全线崩溃。崩溃前借款人门户订单接口 TPS 峰值高达 2000，出现大量请求积压，之后运维迅速重启服务，但没过5分钟，系统再次崩溃。技术部大佬和架构师们都发觉情况不妙，迅速启用 Nginx 限流，设置最多放行 200 TPS，多余请求直接拒绝，并且总部电话远程调度各区域客户经理分时间段录入借款数据，这才度过了本次难关。</p><p>事后，架构组对本次问题进行复盘，发现 2015 年 618 是某东大促，客户购物热情激增，此时公司为配合 618 大促，推出了优惠力度最大的借款活动，这导致在这几天的业务量是平时的几十倍。而分散在全国的 20000 多名客户经理的工作习惯是在上午十点多集中录入昨日客户借款单据，如此庞大的短时并发让&quot;贷后系统&quot;不堪重负，出现长时未响应。同时上游的&quot;借款人门户&quot;与&quot;信审风控&quot;也处于阻塞等待的状态。而在客户经理这边看到表单提交无响应，便会 F5 刷新页面重发请求，这无疑又为&quot;贷后系统&quot;雪上加霜，之后便是贷后系统崩溃、信审系统崩溃、借款人门户网站崩溃这一连锁反应。</p><p>发现了问题根源，解决也就简单了，经过多方权衡在以下几方面作出应对：</p><ul><li><p>提高可用性，将单台设备转为多台负载均衡集群。</p></li><li><p>提高性能，检查慢 SQL、优化算法、引入缓存来缩短单笔业务的处理时间。</p></li><li><p>预防瞬时 TPS 激增，将系统限流作为常态加入系统架构。</p></li><li><p>完善事后处理，遇到长响应，一旦超过规定窗口时间，服务立即返回异常，中断当前处理。</p></li><li><p>加强预警与监控，引入 ELK，进行流量实时监控与风险评估，及时发现系统风险。</p></li><li><p>完善制度，要求客户单据当日录入系统。</p></li></ul><p>刚才所描述的是一次典型的雪崩效应，下面我们来梳理下分布式架构为什么会产生雪崩？</p><h4 id="为什么微服务会产生雪崩效应" tabindex="-1">为什么微服务会产生雪崩效应 <a class="header-anchor" href="#为什么微服务会产生雪崩效应" aria-label="Permalink to &quot;为什么微服务会产生雪崩效应&quot;">​</a></h4><p>如下图所示，假如我们开发了一套分布式应用系统，前端应用分别向 A/H/I/P 四个服务发起调用请求：</p>',8),d=s("p",null,"前端应用需要四个服务",-1),g=s("p",null,"但随着时间推移，假如服务 I 因为优化问题，导致需要 20 秒才能返回响应，这就必然会导致 20 秒内该请求线程会一直处于阻塞状态。",-1),E=s("p",null,"其中一个出现长延时，会导致前端应用线程阻塞",-1),c=s("p",null,'但是，如果这种状况放在高并发场景下，就绝对不允许出现，假如在 20 秒内有 10 万个请求通过应用访问到后端微服务。容器会因为大量请求阻塞积压导致连接池爆满，而这种情况后果极其严重！轻则"服务无响应"，重则前端应用直接崩溃。',-1),_=s("p",null,'以上这种因为某一个节点长时间处理导致应用请求积压崩溃的现象被称为微服务的"雪崩效应"。',-1),y=t('<p>当大量线程积压后，前端应用崩溃，雪崩效应产生</p><h4 id="如何有效避免雪崩效应" tabindex="-1">如何有效避免雪崩效应？ <a class="header-anchor" href="#如何有效避免雪崩效应" aria-label="Permalink to &quot;如何有效避免雪崩效应？&quot;">​</a></h4><p>刚才我们分析了雪崩效应是因为<strong>出现瞬间大流量+微服务响应慢</strong>造成的。针对这两点在架构设计时要采用不同方案。</p><ul><li><p><strong>采用限流方式进行预防</strong>：可以采用限流方案，控制请求的流入，让流量有序的进入应用，保证流量在一个可控的范围内。</p></li><li><p><strong>采用服务降级与熔断进行补救</strong>：针对响应慢问题，可以采用服务降级与熔断进行补救。服务降级是指当应用处理时间超过规定上限后，无论服务是否处理完成，便立即触发服务降级，响应返回预先设置的异常信息。</p></li></ul><p>这么说有些晦涩，以下图为例。在用户支付完成后，通过消息通知服务向用户邮箱发送&quot;订单已确认&quot;的邮件。假设消息通知服务出现异常，需要 10 秒钟才能完成发送请求， 这是不能接受的。为了预防雪崩，我们可以在微服务体系中增加服务降级的功能，预设 2 秒钟有效期，如遇延迟便最多允许 2 秒，2 秒内服务未处理完成则直接降级并返回响应，此时支付服务会收到&quot;邮件发送超时&quot;的错误信息。这也就意味着消息通知服务最多只有两秒钟的处理时间。处理结果，要么发送成功，要么超时降级。 因此阻塞时间缩短，产生雪崩的概率会大大降低。</p>',5),A=s("p",null,"通过服务降级减少阻塞时间",-1),u=s("h4",{id:"alibaba-sentinel",tabindex:"-1"},[i("Alibaba Sentinel "),s("a",{class:"header-anchor",href:"#alibaba-sentinel","aria-label":'Permalink to "Alibaba Sentinel"'},"​")],-1),b=s("p",null,[i("有了解决问题的方案，下面咱们就可以聊聊落地实现的事情。在 Spring Cloud Alibaba 生态中有一个重要的流控组件 Sentinel。Sentinel 以流量为切入点，从"),s("strong",null,"流量控制"),i(" 、"),s("strong",null,"熔断降级"),i(" 、"),s("strong",null,"系统负载保护"),i("等多个维度保护服务的稳定性。")],-1),D=t("<p>Alibaba Sentinel</p><p>Sentinel 具有以下特征。</p><ul><li><p><strong>丰富的应用场景</strong>：Sentinel 承接了阿里巴巴近 10 年的双十一大促流量的核心场景，例如秒杀（即突发流量控制在系统容量可以承受的范围）、消息削峰填谷、集群流量控制、实时熔断下游不可用应用等。</p></li><li><p><strong>完备的实时监控</strong>：Sentinel 同时提供实时的监控功能。您可以在控制台中看到接入应用的单台机器秒级数据，甚至 500 台以下规模的集群的汇总运行情况。</p></li><li><p><strong>广泛的开源生态</strong>：Sentinel 提供开箱即用的与其他开源框架/库的整合模块，例如与 Spring Cloud、Dubbo、gRPC 整合只需要引入相应的依赖并进行简单的配置即可快速地接入 Sentinel。</p></li><li><p><strong>完善的 SPI 扩展点</strong>：Sentinel 提供简单易用、完善的 SPI 扩展接口。您可以通过实现扩展接口来快速地定制逻辑。例如定制规则管理、适配动态数据源等。</p></li></ul>",3),S=s("p",null,"Alibaba Sentinel特性图",-1),m=s("h3",{id:"sentinel-配置入门",tabindex:"-1"},[i("Sentinel 配置入门 "),s("a",{class:"header-anchor",href:"#sentinel-配置入门","aria-label":'Permalink to "Sentinel 配置入门"'},"​")],-1),C=s("p",null,[i("Sentinel 分为两个部分："),s("strong",null,"Sentinel Dashboard"),i(" 和"),s("strong",null,"Sentinel 客户端"),i("。")],-1),P=s("ul",null,[s("li",null,[s("strong",null,"Sentinel Dashboard"),i("：Sentinel Dashboard 是 Sentinel 配套的可视化控制台与监控仪表盘套件，它支持节点发现，以及健康情况管理、监控（单机和集群）、规则管理和推送的功能。Sentinel Dashboard 是基于 Spring Boot 开发的 WEB 应用，打包后可以直接运行，目前最新版本为 1.8.0。")])],-1),F=s("p",null,"Sentinel Dashboard",-1),T=s("ul",null,[s("li",null,[s("strong",null,"Sentinel 客户端"),i("：Sentinel 客户端需要集成在 Spring Boot 微服务应用中，用于接收来自 Dashboard 配置的各种规则，并通过 Spring MVC Interceptor 拦截器技术实现应用限流、熔断保护。")])],-1),B=s("h4",{id:"部署-sentinel-dashboard-仪表盘",tabindex:"-1"},[i("部署 Sentinel Dashboard（仪表盘） "),s("a",{class:"header-anchor",href:"#部署-sentinel-dashboard-仪表盘","aria-label":'Permalink to "部署 Sentinel Dashboard（仪表盘）"'},"​")],-1),f=s("p",null,[s("strong",null,"1"),i(" . 访问："),s("a",{href:"https://github.com/alibaba/Sentinel/releases?fileGuid=xxQTRXtVcqtHK6j8",target:"_blank",rel:"noreferrer"},"https://github.com/alibaba/Sentinel/releases"),i("，下载最新版 Sentinel Dashboard。")],-1),q=t('<p>Sentinel Dashboard GitHub 下载页</p><p><strong>2</strong>. 利用下面的命令启动 Dashboard。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">java </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Dserver.port</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sentinel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dashboard</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.jar</span></span></code></pre></div><p>这个命令的含义是启动 Sentinel Dashboard 应用，Sentinel Dashboard 会监听9100端口实现与微服务的通信。同时我们可以访问下面的网址查看 Sentinel Dashboard 的UI界面。<br><a href="http://192.168.31.10:9100?fileGuid=xxQTRXtVcqtHK6j8" target="_blank" rel="noreferrer">http://192.168.31.10:9100</a></p><p>在用户名、密码处输入 sentinel/sentinel，便可进入 Dashboard。</p>',5),I=s("p",null,"Sentinel Dashboard 登录页",-1),v=t(`<p>Sentinel Dashboard 首页</p><h4 id="微服务内置-sentinel-客户端" tabindex="-1">微服务内置 Sentinel 客户端 <a class="header-anchor" href="#微服务内置-sentinel-客户端" aria-label="Permalink to &quot;微服务内置 Sentinel 客户端&quot;">​</a></h4><p>第一步，利用 Spring Initializr 向导创建 sentinel-sample 工程，pom.xml 增加以下三项依赖。</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- Nacos客户端Starter--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;com.alibaba.cloud&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- Sentinel客户端Starter--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;com.alibaba.cloud&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;spring-cloud-starter-alibaba-sentinel&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 对外暴露Spring Boot监控指标--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;org.springframework.boot&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;spring-boot-starter-actuator&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>第二步，配置 Nacos 与 Sentinel 客户端。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  application</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sentinel-sample</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #应用名&amp;微服务id</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  cloud</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sentinel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#Sentinel Dashboard通信地址</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      transport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        dashboard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">192.168.31.10:9100</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      eager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #取消控制台懒加载</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    nacos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#Nacos通信地址</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      server-addr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">192.168.31.10:8848</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nacos</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nacos</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">management</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  endpoints</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    web</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#将所有可用的监控指标项对外暴露</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      exposure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#可以访问 /actuator/sentinel进行查看Sentinel监控项</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        include</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;*&#39;</span></span></code></pre></div><p>第三步，验证配置。</p><p>访问下面网址，在 Sentinel Dashboard 左侧看到 sentinel-sample 服务出现，则代表 Sentinel 客户端与 Dashboard 已经完成通信。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//192.168.31.10:9100/</span></span></code></pre></div>`,9),w=t(`<p>确认 sentinel-sampl e与 Dashboard 通信成功</p><p>下面咱们通过 Dashboard 配置应用的限流规则，来体验下 Sentinel 的用法。</p><h3 id="配置限流规则" tabindex="-1">配置限流规则 <a class="header-anchor" href="#配置限流规则" aria-label="Permalink to &quot;配置限流规则&quot;">​</a></h3><p>第一步，在 sentinel-sample 服务中，增加 SentinelSampleController 类，用于演示 Sentinel 限流规则。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.lagou.sentinelsample.controller;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.GetMapping;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.RestController;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RestController</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SentinelSampleController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GetMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/test_flow_rule&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">testFlowRule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;SUCCESS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>启动 sentinel-sample，访问<a href="http://localhost/test_flow_rule?fileGuid=xxQTRXtVcqtHK6j8" target="_blank" rel="noreferrer">http://localhost/test_flow_rule</a>，无论刷新多少次，都会看到&quot;SUCCESS&quot;。</p>`,6),x=s("p",null,"正常访问结果",-1),W=s("p",null,"第二步，访问 Sentinel Dashboard 配置限流规则。",-1),M=s("p",null,'在左侧找到簇点链路，右侧定位到 /test_flow_rule，点击后面的"流控"按钮。',-1),V=s("p",null,"设置接口流控规则",-1),Y=s("p",null,'在弹出界面，按下图配置，其含义为 /test_flow_rule 接口每秒钟只允许 1QPS 访问，超出的请求直接服务降级返回异常。最后点击"新增"完成规则设置。',-1),H=s("p",null,"设置流控规则",-1),O=s("p",null,'此时针对 /test_flow_rule 接口的流控规则已生效，可以在"流控规则"面板看到。',-1),N=s("p",null,"现有流控规则列表",-1),R=s("p",null,"第三步，验证流控效果。",-1),j=s("p",null,[i("重新访问"),s("a",{href:"http://localhost/test_flow_rule?fileGuid=xxQTRXtVcqtHK6j8",target:"_blank",rel:"noreferrer"},"http://localhost/test_flow_rule"),i("，浏览器反复刷新。")],-1),G=s("p",null,'第一次刷新时会出现"SUCCESS"文本代表处理成功。',-1),K=s("p",null,"第一次执行成功",-1),Q=s("p",null,'同一秒内再次刷新便会出现 "Blocked by Sentinel (flow limiting)"，代表服务已被限流降级。',-1),U=s("p",null,"第二次限流降级",-1),L=s("p",null,"到这里，我们已经利用 Sentinel 对微服务接口实施了初步的限流降级控制，Sentinel 还有很多高级的用法，我们在后面继续深入讲解。",-1),J=s("h3",{id:"小结与预告",tabindex:"-1"},[i("小结与预告 "),s("a",{class:"header-anchor",href:"#小结与预告","aria-label":'Permalink to "小结与预告"'},"​")],-1),X=s("p",null,"这一讲我们主要对 Sentinel 进行入门学习，让你有个感性认识。本节讲解三方面内容，首先通过在工作中真实的案例分析了雪崩效应的产生与预防办法，其次介绍 Alibaba Sentinel Dashboard 与客户端的配置过程，最后演示了如何对微服务接口进行限流降级。",-1),$=s("p",null,"这里我预留一道讨论题：在架构设计时，你是如何预估某个接口线上运行时的 QPS 范围呢？你可以把自己的经验写在评论中，我们一起探讨。",-1),Z=s("p",null,"下一讲，我们继续深入 Sentinel，了解 Sentinel 的高级特性与执行原理。",-1);function z(ss,is,as,ns,ts,ls){const a=e("Image");return h(),p("div",null,[r,n(a,{alt:"图片1.png",src:"https://s0.lgstatic.com/i/image6/M00/24/6B/CioPOWBYa2mAG_xqAAEcWlAHvHE745.png"}),i(),o,n(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M00/24/36/Cgp9HWBYO_-AeVq4AAGEBeCSUp0830.png"}),i(),d,g,n(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image6/M00/24/33/CioPOWBYPAqAc518AAGeUBhPTuo873.png"}),i(),E,c,_,n(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image6/M00/24/36/Cgp9HWBYPBKAJ0khAAHuArA1CLM030.png"}),i(),y,n(a,{alt:"图片2.png",src:"https://s0.lgstatic.com/i/image6/M00/24/6B/CioPOWBYa4yAHas6AAH74uOpAws537.png"}),i(),A,u,b,n(a,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image6/M00/24/36/Cgp9HWBYPCyADtVHAABb2bfo-5c381.png"}),i(),D,n(a,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image6/M00/24/33/CioPOWBYPDWAWiZhAAF09c_FEsk726.png"}),i(),S,m,C,P,n(a,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image6/M00/24/37/Cgp9HWBYPESACt_8AAF1oDZWLSE169.png"}),i(),F,T,B,f,n(a,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image6/M00/24/33/CioPOWBYPFmAe2VjAAA_BKIoDHc533.png"}),i(),q,n(a,{alt:"Drawing 11.png",src:"https://s0.lgstatic.com/i/image6/M00/24/33/CioPOWBYPG2AMCU3AABouR6oraI157.png"}),i(),I,n(a,{alt:"Drawing 12.png",src:"https://s0.lgstatic.com/i/image6/M00/24/33/CioPOWBYPHSAMIMFAAF1oDZWLSE503.png"}),i(),v,n(a,{alt:"Drawing 13.png",src:"https://s0.lgstatic.com/i/image6/M00/24/33/CioPOWBYPIOAHDJJAAE0B0o7THQ348.png"}),i(),w,n(a,{alt:"Drawing 14.png",src:"https://s0.lgstatic.com/i/image6/M00/24/34/CioPOWBYPJOAeYQWAAAYWt6cblE822.png"}),i(),x,W,M,n(a,{alt:"Drawing 15.png",src:"https://s0.lgstatic.com/i/image6/M00/24/34/CioPOWBYPJuACPqNAAFg_BIMsCQ263.png"}),i(),V,Y,n(a,{alt:"Drawing 16.png",src:"https://s0.lgstatic.com/i/image6/M00/24/34/CioPOWBYPKOAGKnkAACOQCgt64c070.png"}),i(),H,O,n(a,{alt:"Drawing 17.png",src:"https://s0.lgstatic.com/i/image6/M00/24/34/CioPOWBYPKuAAHhBAACITC3GUbc531.png"}),i(),N,R,j,G,n(a,{alt:"Drawing 18.png",src:"https://s0.lgstatic.com/i/image6/M00/24/34/CioPOWBYPLOAbA0WAAAYWt6cblE876.png"}),i(),K,Q,n(a,{alt:"Drawing 20.png",src:"https://s0.lgstatic.com/i/image6/M00/24/37/Cgp9HWBYPL2AECwYAAAsR0YXbSY107.png"}),i(),U,L,J,X,$,Z])}const hs=l(k,[["render",z]]);export{ps as __pageData,hs as default};
