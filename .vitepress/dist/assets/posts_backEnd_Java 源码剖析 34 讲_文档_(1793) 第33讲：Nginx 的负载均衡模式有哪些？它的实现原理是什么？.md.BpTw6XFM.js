import{_ as p,F as h,g as l,K as i,h as a,ar as n,l as t,o as e}from"./chunks/framework.VlluEs-f.js";const u=JSON.parse('{"title":"第33讲：Nginx的负载均衡模式有哪些？它的实现原理是什么？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Java 源码剖析 34 讲_文档/(1793) 第33讲：Nginx 的负载均衡模式有哪些？它的实现原理是什么？.md","filePath":"posts/backEnd/Java 源码剖析 34 讲_文档/(1793) 第33讲：Nginx 的负载均衡模式有哪些？它的实现原理是什么？.md","lastUpdated":1718371218000}'),k={name:"posts/backEnd/Java 源码剖析 34 讲_文档/(1793) 第33讲：Nginx 的负载均衡模式有哪些？它的实现原理是什么？.md"},E=n('<h1 id="第33讲-nginx的负载均衡模式有哪些-它的实现原理是什么" tabindex="-1">第33讲：Nginx的负载均衡模式有哪些？它的实现原理是什么？ <a class="header-anchor" href="#第33讲-nginx的负载均衡模式有哪些-它的实现原理是什么" aria-label="Permalink to &quot;第33讲：Nginx的负载均衡模式有哪些？它的实现原理是什么？&quot;">​</a></h1><p>Nginx 是后端工程师和运维工程师，以及前端工程师必须要掌握的必备技能，尤其在分布式系统应用越来越广泛的今天，Nginx 已经占据了 Web 服务器的大壁江山，并且还在不断地增长，比如国内的 BATJ、网易、新浪等公司都可以看到它的身影。</p><p>我们本课时的面试题是，Nginx 的负载均衡模式有哪些？它的实现原理是什么？</p><h3 id="典型回答" tabindex="-1">典型回答 <a class="header-anchor" href="#典型回答" aria-label="Permalink to &quot;典型回答&quot;">​</a></h3><p>在正式开始之前，我们先来了解一下什么是 Nginx？</p><p>Nginx 是一款开源的高性能轻量级 <strong>Web 服务器</strong> （也叫 <strong>HTTP 服务器</strong> ），它主要提供的功能是：<strong>反向代理、负载均衡</strong> 和<strong>HTTP 缓存</strong>。它于 2004 年首次公开发布，2011 年成立同名公司以提供支持，2019 年 3 月被 F5 Networks 以 6.7 亿美元收购。</p><p>之所以需要使用负载均衡是因为，如果我们使用的是一台服务器，那么在高峰期时很多用户就需要排队等待系统响应，因为一台服务器能处理的并发数是固定的。例如，一个 Tomcat 在默认情况下只能开启 150 个线程（Tomcat 8.5.x 版本）来处理并发任务，如果并发数超过了最大线程数，那么新来的请求就只能排队等待处理了，如下图所示：</p>',7),r=t("p",null,"然而如果有负载均衡的话，我们就可以将所有的请求分配到不同的服务器上。假如 1 台服务器可以处理 2000 个请求，那么 5 台服务器就可以处理 10000 个请求了，这样就大大提高了系统处理业务的能力，如下图所示：",-1),d=n(`<p>知道了负载均衡的好处之后，我们来看下 Nginx 负载均衡的功能。</p><p>Nginx 主要的负载均衡策略（内置的负载均衡）有以下四种：</p><ul><li><p>轮询策略（默认负载均衡策略）</p></li><li><p>最少连接数负载均衡策略</p></li><li><p>ip-hash 负载均衡策略</p></li><li><p>权重负载均衡策略</p></li></ul><h4 id="_1-轮询策略" tabindex="-1">1. 轮询策略 <a class="header-anchor" href="#_1-轮询策略" aria-label="Permalink to &quot;1. 轮询策略&quot;">​</a></h4><p>轮询负载策略是指每次将请求按顺序轮流发送至相应的服务器上，它的配置示例如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    upstream myapp1 {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        server srv1.example.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        server srv2.example.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        server srv3.example.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_pass http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//myapp1;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在以上实例中，当我们使用&quot;ip:80/&quot;访问时，请求就会轮询的发送至上面配置的三台服务器上。</p><p>Nginx 可以实现 HTTP、HTTPS、FastCGI、uwsgi、SCGI、memcached 和 gRPC 的负载均衡。</p><h4 id="_2-最少连接数负载均衡" tabindex="-1">2. 最少连接数负载均衡 <a class="header-anchor" href="#_2-最少连接数负载均衡" aria-label="Permalink to &quot;2. 最少连接数负载均衡&quot;">​</a></h4><p>此策略是指每次将请求分发到当前连接数最少的服务器上，也就是 Nginx 会将请求试图转发给相对空闲的服务器以实现负载平衡，它的配置示例如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upstream myapp1 {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    least_conn;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server srv1.example.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server srv2.example.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server srv3.example.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_3-加权负载均衡" tabindex="-1">3. 加权负载均衡 <a class="header-anchor" href="#_3-加权负载均衡" aria-label="Permalink to &quot;3. 加权负载均衡&quot;">​</a></h4><p>此配置方式是指每次会按照服务器配置的权重进行请求分发，权重高的服务器会收到更多的请求，这就相当于给 Nginx 在请求分发时加了一个参考的权重选项，并且这个权重值是可以人工配置的。因此我们就可以将硬件配置高，以及并发能力强的服务器的权重设置高一点，以更合理地利用服务器的资源，它配置示例如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upstream myapp1 {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server srv1.example.com weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server srv2.example.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server srv3.example.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>以上配置表示，5 次请求中有 3 次请求会分发给 srv1，1 次请求会分发给 srv2，另外 1 次请求会分发给 srv3。</p><h4 id="_4-ip-hash-负载均衡" tabindex="-1">4. ip-hash 负载均衡 <a class="header-anchor" href="#_4-ip-hash-负载均衡" aria-label="Permalink to &quot;4. ip-hash 负载均衡&quot;">​</a></h4><p>以上三种负载均衡的配置策略都不能保证将每个客户端的请求固定的分配到一台服务器上。假如用户的登录信息是保存在单台服务器上的，而不是保存在类似于 Redis 这样的第三方中间件上时，如果不能将每个客户端的请求固定的分配到一台服务器上，就会导致用户的登录信息丢失。因此用户在每次请求服务器时都需要进行登录验证，这样显然是不合理的，也是不能被用户所接受的，所以在特殊情况下我们就需要使用 ip-hash 的负载均衡策略。</p><p>ip-hash 负载均衡策略可以根据客户端的 IP，将其固定的分配到相应的服务器上，它的配置示例如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upstream myapp1 {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ip_hash;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server srv1.example.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server srv2.example.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server srv3.example.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Nginx 的实现原理是，首先客户端通过访问域名地址发出 HTTP 请求，访问的域名会被 DNS 服务器解析为 Nginx 的 IP 地址，然后将请求转发至 Nginx 服务器，Nginx 接收到请求之后会通过 URL 地址和负载均衡的配置，匹配到配置的代理服务器，然后将请求转发给代理服务器，代理服务器拿到请求之后将处理结果返回给 Nginx，Nginx 再将结果返回给客户端，这样就完成了一次正常的 HTTP 交互。</p><h3 id="考点分析" tabindex="-1">考点分析 <a class="header-anchor" href="#考点分析" aria-label="Permalink to &quot;考点分析&quot;">​</a></h3><p>负载均衡和缓存功能是 Nginx 最常用的两个功能，这两个功能都属于高性能的调优手段，也和后端人员的关系比较密切，只有了解并会使用它们才能更好地调试和运行自己的项目，因此 Nginx 的相关知识几乎是面试中都会出现。</p><p>和此知识点相关的面试题还有以下这些：</p><ul><li><p>如果代理的服务器宕机了 Nginx 会如何处理？</p></li><li><p>Nginx 的缓存功能是如何使用的？</p></li></ul><h3 id="知识扩展" tabindex="-1">知识扩展 <a class="header-anchor" href="#知识扩展" aria-label="Permalink to &quot;知识扩展&quot;">​</a></h3><h4 id="健康检测" tabindex="-1">健康检测 <a class="header-anchor" href="#健康检测" aria-label="Permalink to &quot;健康检测&quot;">​</a></h4><p>被代理的服务器出现宕机的情况，如果被 Nginx 发现，那么 Nginx 就会将其自动标识为不可用，并且在一段时间内会禁止入站的请求访问到该服务器上。</p><p>而这个发现服务器宕机的过程就是健康检测的功能了。Nginx 的健康检测分为两种类型，<strong>主动检测和被动检测</strong>，默认的非商用 Nginx 采用的是被动检测。</p><p>所谓的被动检测是指只有访问了该服务器之后发现服务器不可用了，才会将其标识为不可用，并且在一定时间内禁止请求分发到该服务器上，而不是主动以一定的频率去检查服务器是否可用。</p><p>健康检测有两个重要参数 <strong>max_fails</strong> 和 <strong>fail_timeout</strong>。</p><p>fail_timeout 定义了健康检查的执行时长，而 max_fails 表示服务不可用的最大尝试次数，当一定时间内（此时间由 fail_timeout 定义），发生了一定次数的服务器不响应的事件（此次数由 max_fails 定义），那么 Nginx 就会将该服务器标识为不可用的服务器，并且在一定时间内禁止请求分发到该服务器。默认情况下 max_fails 设置为 1，当它设置为 0 时表示禁用此服务器的运行状况检查，它的配置示例如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upstream cluster{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server srv1.example.com max_fails</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fail_timeout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10s;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server srv2.example.com max_fails</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fail_timeout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10s;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>以上配置表示，如果 10s 内发生了两次服务不可用的情况就会将该服务器标识为不可用的状态。</p><p>当服务器被标识为不可用时，只有达到了 fail_timeout 定义的时间后，才会进行再一次的健康请求检测。</p><p>而主动健康检测的实现方案有两种，一种是使用商用的 Nginx Plus 来配置主动健康检测，另一种是使用开源的第三方模块 nginx_upstream_check_module 来实现主动健康检测。</p><p>Nginx Plus 和 nginx_upstream_check_module 模块的主动健康检查配置大体都是一样的，它的配置示例如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upstream backend {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server srv1.example.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server srv2.example.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    check interval</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fall</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timeout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    check_http_send </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HEAD /status HTTP/1.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\r\\n\\r\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    check_http_expect_alive http_2xx http_3xx;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>其中，check_http_send 表示发送请求的内容，而 check_http_expect_alive 是服务器正常情况下的响应状态码，如果后端服务器的响应状态包含在此配置中，则说明是健康的状态。</p><h4 id="nginx-缓存" tabindex="-1">Nginx 缓存 <a class="header-anchor" href="#nginx-缓存" aria-label="Permalink to &quot;Nginx 缓存&quot;">​</a></h4><p>我们可以开启 Nginx 的静态资源缓存，将一些不变的静态文件，比如图片、CSS、JS 等文件进行缓存，这样在客户端访问这些资源时就不用去访问服务器了，因此响应的速度就可以大幅提升，并且节省了宝贵的服务器资源。</p><p>Nginx 开启缓存需要在 http 节点中配置 proxy_cache_path 信息，以及 server 节点中配置要缓存资源的后缀名，它的配置示例如下：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 忽略其他的配置信息......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  proxy_cache_path  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cache levels</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> keys_zone</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nuget</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cache</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">20m max_size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">50g inactive</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1d;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  include nginx_proxy.conf;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    listen  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server_name  srv1.example.com;    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\.(gif</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jpg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">png</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">css</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">js)(.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { # 要缓存的文件的后缀</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      access_log off;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      add_header </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Cache</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Control</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;public,max-age=24*3600&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      proxy_pass http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//localhost:8080;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>其中，proxy_cache_path 配置的是缓存的目录信息，以及缓存的保存时间 inactive，还有缓存的大小等信息；而&quot;access_log off&quot;表示关闭日志功能，proxy_pass 表示当第一次没有缓存时的请求地址，之后便会将访问到的资源缓存起来。</p><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><p>本课时我们介绍了 Nginx，并讲了 Nginx 的四种内置负载均衡的执行策略：轮询策略（默认负载均衡策略）、最少连接数负载均衡策略、ip-hash 负载均衡策略和权重负载均衡策略，其中 ip-hash 的负载均衡策略会将客户端的请求固定分发到一台服务器上。</p><p>后面我们还介绍了 Nginx 的健康检测：主动健康检测和被动健康检测；最后我们还讲了 Nginx 的缓存功能，它可以帮我们更快的访问到静态资源。</p><p>学完本课时后，相信你对 Nginx 已经有了一个大体的认识，其中面试中被问到最多的知识点是 Nginx 的四种负载均衡以及健康检查的相关内容。</p>`,47);function g(c,o,y,_,m,x){const s=h("Image");return e(),l("div",null,[E,i(s,{alt:"image (1).png",src:"https://s0.lgstatic.com/i/image/M00/2A/5F/Ciqc1F78TvOALCJrAABv_aXOv8c313.png"}),a(),r,i(s,{alt:"5.png",src:"https://s0.lgstatic.com/i/image/M00/2A/5F/Ciqc1F78TvuAMPOiAAHBUceQ_F8585.png"}),a(),d])}const F=p(k,[["render",g]]);export{u as __pageData,F as default};
