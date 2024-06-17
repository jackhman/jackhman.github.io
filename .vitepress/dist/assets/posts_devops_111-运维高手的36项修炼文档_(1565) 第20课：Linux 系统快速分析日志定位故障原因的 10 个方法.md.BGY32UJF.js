import{_ as l,F as h,g as p,K as t,h as i,l as s,ar as n,o as e}from"./chunks/framework.VlluEs-f.js";const S=JSON.parse('{"title":"第20课：Linux系统快速分析日志定位故障原因的10个方法","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/111-运维高手的36项修炼文档/(1565) 第20课：Linux 系统快速分析日志定位故障原因的 10 个方法.md","filePath":"posts/devops/111-运维高手的36项修炼文档/(1565) 第20课：Linux 系统快速分析日志定位故障原因的 10 个方法.md","lastUpdated":1718371218000}'),k={name:"posts/devops/111-运维高手的36项修炼文档/(1565) 第20课：Linux 系统快速分析日志定位故障原因的 10 个方法.md"},r=s("h1",{id:"第20课-linux系统快速分析日志定位故障原因的10个方法",tabindex:"-1"},[i("第20课：Linux系统快速分析日志定位故障原因的10个方法 "),s("a",{class:"header-anchor",href:"#第20课-linux系统快速分析日志定位故障原因的10个方法","aria-label":'Permalink to "第20课：Linux系统快速分析日志定位故障原因的10个方法"'},"​")],-1),g=s("p",null,"本课时我们主要是学习如何通过 Linux 组合命令来做日志的快速定位和分析，它的使用场景主要是：",-1),d=s("ol",null,[s("li",null,"企业在没有可用的日志检索分析系统（如：EFK、ELK 等），需要通过 Shell 或 Linux 组合命令去进行日志分析；"),s("li",null,"企业可能已有日志分析和检索系统，但还是避免不了临时性日志分析问题，如处理紧急的故障场景，就需要用到 Linux 组合命令来进行细致的排查。")],-1),o=s("h4",{id:"网站架构图示",tabindex:"-1"},[i("网站架构图示 "),s("a",{class:"header-anchor",href:"#网站架构图示","aria-label":'Permalink to "网站架构图示"'},"​")],-1),E=s("p",null,"可以说， Linux 系统上存储的日志类型非常多：",-1),c=n(`<p>从入口层、逻辑层、数据层到基础建设和公共组建层，基本上所有的日志都可以存储在 Linux 操作系统上。</p><p>即使是基建部分，通过收集抓取系统硬件底层的控制器信息或者网络上的设备信息，并存储在操作系统上的。</p><p>日志的分析类型、种类非常多，本课时我提取出两个应用来进行详细介绍，一个是入口层（常用的代理服务 Nginx），第二个是数据层（如常用 MySQL 数据库） 。</p><h4 id="学习基础" tabindex="-1">学习基础 <a class="header-anchor" href="#学习基础" aria-label="Permalink to &quot;学习基础&quot;">​</a></h4><p>学习本课时，你只需要了解 Nginx 操作基础，并且了解 MySQL 的使用基础。</p><h3 id="解析-nginx-日志" tabindex="-1">解析 Nginx 日志 <a class="header-anchor" href="#解析-nginx-日志" aria-label="Permalink to &quot;解析 Nginx 日志&quot;">​</a></h3><p>在本课时的内容里，首先给你介绍的就是 Nginx 的日志。</p><h4 id="nginx-的日志类型" tabindex="-1">Nginx 的日志类型 <a class="header-anchor" href="#nginx-的日志类型" aria-label="Permalink to &quot;Nginx 的日志类型&quot;">​</a></h4><p>说到 Nginx 日志，我们必须要了解 Nginx 的日志类型，主要分为两个类型：</p><p><strong>第一个是处理请求的日志，记录了用户相关的访问信息</strong>。它的配置模块叫作 access_log，配置格式如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Syntax</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">access_log path [format [buffer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">size] [gzip[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">level]] [flush</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time] [if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">condition]];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">access_log off;</span></span></code></pre></div><p>access_log 后面加 path （日志路径）和相关的选项。如果我们想关闭这个请求日志，配置为：access_log off，通过这个配置把请求日志关闭。</p><p>默认配置格式如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: access_log logs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">access.log combined;</span></span></code></pre></div><p>access_log 后面加了默认日志路径（logs/access.log），然后加上日志类型的名称（combined）。什么是日志类型的名称呢？接下来我会给你做一个详细的介绍。</p><p>然后是，下面的 Context 段落信息，它代表 access_log 这个配置模块可以在 Nginx。conf 配置的哪一层级进行配置。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: http, server, location, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> location, limit_except</span></span></code></pre></div><p>我们会看到 access_log 配置允许配置的层级，在 Nginx conf 里配置到 http、server、location 等层级中。</p><p>如果需要自定义配置access_log， 需要具体配置相关的选项，如下：</p><ul><li>path：指定路径，即日志的存放位置。</li><li>format：定义日志的格式。默认使用预定义的 combined（combined 就是一个默认的预定义格式的名称），如果想要修改 Nginx 的 access_log 记录的内容及格式，就需要通过 log_format （另外一个配置项来进行格式的预定义，并通过 access_log这个选项引用 log_format 的预定义格式的名称）。</li><li>buffer：用来指定日志写入时的缓存区大小。默认是 64k。</li><li>gzip：设置日志写入前先进行压缩，压缩比越高，消耗也越大；压缩比越小，占用的空间就会越多。</li><li>flush：设置日志缓存的有效时间。</li><li>if：条件判断。也就是需要满足什么条件才记录访问日志，比如我们可以只把请求等于 200 的条件的日志来做记录。</li></ul><p>这就是 access_log 在 Nginx 服务里面的定义规则， access_log 是 Nginx 里面一个非常重要的日志，它记录了用户请求的相关内容。</p><p><strong>第二个重要的日志类型就是 Nginx 错误日志</strong> 。它主要用于分析 Nginx 的配置、Nginx 本身服务的问题，所以它记录的是 Nginx 进程启动、停止、重启及处理请求过程中发生的所有错误信息。它的配置方式是这样的：</p><p>Syntax: error_log file [level];</p><p>在 Nginx conf 里面，我们只需要将 error_log 加具体的文件路径，再加上日志级别，就可以进行错误日志的配置并打印输出。</p><p>它默认的配置样例是这样的：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> error_log logs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error.log error;</span></span></code></pre></div><p>表示错误日志统一记录到 logs/error.log，并且日志级别是 error 级别，所有满足这个错误日志级别的都会输出到 error.log 里。</p><h4 id="nginx-的日志内容" tabindex="-1">Nginx 的日志内容 <a class="header-anchor" href="#nginx-的日志内容" aria-label="Permalink to &quot;Nginx 的日志内容&quot;">​</a></h4><p>接下来我重点围绕 access_log 给你做介绍和分析。</p><p>我们刚讲到了，access_log 需要定义好日志内容和日志内容的格式，是通过 log_format 选项来提前定义的。log_format 也有对应的配置选项，比如：</p><ul><li>name：格式名称。格式名称是在 access 刚刚讲到的配置语法里面所需要引用的。</li><li>escape：主要是用来定义字符的编码方式，可以是 JSON 格式，它默认使用的是 default 编码方式。</li><li>string：十分重要，主要定义日志格式和对应内容，它是通过 Nginx 变量来做具体定义。</li></ul><p>我们看看具体的配置：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">og_format  main  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>示例中通过 log_format 定义了一个名称&quot; main&quot;，在 access_log 的配置选项里面，如果引用mian，日志的内容就会按照 main 的定义方式来打印具体内容。</p><p>具体看下这里的配置，整体上最大的外层是通过一个单引号，我们会看到第一段单引号归纳的内容，一个是 remote_addr，它是 Nginx 的内置变量，记录的是直接请求客户端的ip地址。然后通过一个 &quot;-&quot; 符号，和 remote_user 也就是请求客户端的用户做了分隔，然后加入了一个括号，括号里面记录用户请求到 Nginx 上面的时间，request 就是用户请求的内容。</p><p>$status 主要记录的是 Nginx 返回给客户端的状态码，我们看到有 200、300、400、500 等相关的 HTTP 状态码。body_bytes_sent 是服务端向客户端发送的 body 的字节大小。$http_referer 主要记录客户端请求地址的上一跳的地址。</p><p>$http_user_agent 它记录用户请求时用的是哪个客户端。$http_x_forwarded_for 之前也讲过，记录的是用户的 IP 和 Proxy 的 IP 头信息。</p><p>所有的格式内容默认以空格来进行分隔，除非我们自定义加入一些分隔符，比如&quot; / &quot;和&quot; [] &quot;都会在打印的格式里面进行打印。最终打印的内容会是这样的：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">47.105</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">45.235</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">01</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Apr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2020</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">03</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;GET /jeson/ HTTP/1.1&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 17460</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;-&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Chrome/57&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;-&quot;</span></span></code></pre></div><p>这里我列出了一个具体的内容，前面我们会看到 IP 地址（47.105.45.235），对应的是 $remote_addr，在后面有两个横杠，其中一个横杠&quot;-&quot;表示获取的内容为空（它是$remote_user）另外一个横杠就是我们刚刚加入的自定义的分隔符。后面就是具体的请求时间、方法、路径和协议，然后就是请求返回的状态发送的字节数。后面我们会同样看到 http_referer 内容为空，它说明用户是直接请求路径 /jeson，所以它没有携带 referer 信息。后面的 Chrome/57 说的是客户端的 Agent 版本是用的 Chrome 浏览器。</p><p>这个内容就是我们刚刚定义好的日志格式(&quot;main&quot;)所打印出来的一一对应的内容。</p><h3 id="分析-nginx-日志常见场景" tabindex="-1">分析 Nginx 日志常见场景 <a class="header-anchor" href="#分析-nginx-日志常见场景" aria-label="Permalink to &quot;分析 Nginx 日志常见场景&quot;">​</a></h3><p>Nginx access_log 内容，我们常常要去做对应的分析，主要的场景如下：。</p><h4 id="访问量统计" tabindex="-1">访问量统计 <a class="header-anchor" href="#访问量统计" aria-label="Permalink to &quot;访问量统计&quot;">​</a></h4><p>首先，就是需要我们去了解 Nginx 服务的访问量，通常我们对于访问量统计有这么几大类：</p><p><strong>1、总访问量频繁的 IP</strong></p><p>第一大类就是对于最频繁访问的 IP，了解哪一个 IP 可能频繁访问并对服务端造成的请求压力比较大，所以我们就需要分析 Nginx 打印出来的 access 日志基于 IP 的统计排名。这时我们可以通过这样的一段命令来进行分析：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cat access.log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">awk </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{print $1}&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uniq </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">k </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">more</span></span></code></pre></div><p>通过 cat 读取整体的 access.log，然后通过 awk 进切割，只打印第一列的内容（就是 IP 的信息），后面加一个排序，这个排序的作用就是把所有的 IP 进行排序，u niq -c 就是整体地按照同样的 IP 来进行统计，并且分析出同一个 IP 请求的个数，最后按照个数进行由大到小的排序 sort -n -k 1 ，-k 1 表示第一列按照请求的个数来进行排序。就能够完整地分析出请求的 Nginx 服务端里面哪一些 IP 排在最高，从上往下的排序结果如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">342</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 221.219</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">98</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">129</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">138</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 120.26</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">213</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">206</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">69</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 221.220</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">172</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">233</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">46</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 47.94</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">196</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">61</span></span></code></pre></div><p>最上面的是请求最多的，第一列就是这个 IP 请求的个数。</p><p><strong>2、查看某个 IP 访问量频繁 URL</strong></p><p>第二个常常要做的就是 Nginx 访问量统计，既然知道哪个 IP 访问比较多，就想继续了解某一个 IP 的行为，比如查看某个 IP 访问最频繁的 url。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cat access.log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">grep </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;221.219.98.129&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">awk </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{print $7}&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uniq </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">k </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">more</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    114</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">videotech</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">getip</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    114</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">videotech</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">getpages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    114</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jeson</span></span></code></pre></div><p>这时我们就可以通过 grep 把 access.log 按照某一个 IP 做一个筛选，然后把第 7 列 $reques（也就是请求路径等情况）打印出来。然后再进行一个同样的排序，我们会看到这个 IP 主要请求的是哪些地址，和它们对应的请求次数。</p><p><strong>3、更多场景</strong></p><p>当然还有更多的场景：</p><p><strong>（1）查看爬虫、机器人访问</strong></p><p>比如我们想要去分析这个 IP 或者某一些请求是否可能有爬虫，或者有一些通过脚本类似机器人的行为，因为通常这种行为对于服务端可能会造成请求流量的影响，所以需要通过 access.log 来进行分析来排查这些行为。</p><p>通常第一类可以通过组合命令的方式来做：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cat access.log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">grep </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iv </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MSIE|Firefox|Chrome|Opera|Safari|Gecko|Mozilla|wordpress&quot;</span></span></code></pre></div><p>cat 一个日志以后分析 grep -iv，i 表示查看的内容，里面是不区分大小写的；-v 是做一个反向的排查，也就是把正常浏览器通过 Agent (MSIE|Firefox|Chrome|Opera|Safari|Gecko|Mozilla|wordpress)端进行访问全部做一个反向的排查（看到通过非正常的 Agent 所转发的请求）。这样就可以判断有没有可能是机器人或爬虫的请求，以及大概的占比以及它们的行为。</p><p><strong>（2）过滤没有 Agent 的请求</strong></p><p>后面介绍的组合命令就是分析没有带 Agent 的请求。有可能一些请求是没有把 Agent 带过来的，我们需要关注并分析。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cat access.log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">awk </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{if($11~&quot;-&quot;){print $0}}&#39;</span></span></code></pre></div><p>我们可以通过 awk 分析指定的列，然后看是否拿到了字符横杠，因为横杠&quot;-&quot;代表 access log 没有拿到对应内容，所以可以判断 Agent对应的一列进行判断，看它的内容是否为&quot;-&quot;，如果是就通过 print $0，把没有 Agent 的每一条请求打印出来。</p><h4 id="错误性能统计" tabindex="-1">错误性能统计 <a class="header-anchor" href="#错误性能统计" aria-label="Permalink to &quot;错误性能统计&quot;">​</a></h4><p>作为运维工程师，我们还要分析的第二大类型，就是 Nginx 的错误日志请求。</p><p><strong>（1）状态码响应统计</strong></p><p>比如状态码的错误，我们知道 200 是正常状态码，300 主要是重定向类型的状态码，400/500 说明对客户的请求可能存在问题，通常需要进行整体的分析。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cat access.log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">awk </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{print $9}&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sort</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uniq </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">more</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    922</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    235</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 301</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   404</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     10</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  500</span></span></code></pre></div><p>这样的组合命令通过 cat access.log，然后 awk 处理，并把 $9（第九列） 打印出来，$9 在 Nginx 配置的 log_format 中代表服务端所返回的状态码，并且基于状态码做了排序。</p><p>可以看到，访问网站的大部分状态码是 200，以及 301 有多少个，404 有多少个，500 有多少个，然后就了解整体的用户对网站的请求和中间的错误率大概是什么样子的。</p><p><strong>（2）请求延时分析</strong></p><p>除了对错误码的分析，我们也需要去关注性能上的问题，比如请求的延时分析。在 Nginx 的 access.log 里面主要有两个变量，一个是 request_time，还有一个是 upstream_response_time。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$request_time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span></code></pre></div><p>指的就是从接受用户请求的第一个字节到发送完响应数据的时间，即包括接收请求数据时间、程序响应时间、输出响应数据时间。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$upstream_response_time</span></span></code></pre></div><p>是指 Nginx 发出以后，到接到后端 real server 后端的服务，再给到 Nginx 的时间，upstream_response_time 主要用于反向代理模式里面所需要记录的时间，记录的是反向代理发出请求到拿到后端(Real server)给到反向代理的数据的时间。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log_format  main  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot; $upstream_response_time&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>所以在整个过程中，如果想要了解每一个请求的延迟情况，可以看到通过 log_forma t 来定义&quot;main&quot; 预定格式，这里可以在 main 的配置里最后加入一个 $upstream_response_time 变量，然后 reload(重启) Nginx，Nginx 的 access.log 里就可以把 upstream_response_time 时间记录下来了。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tail </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f access.log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">awk </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{if($(NF)&gt;6){print $0}}&#39;</span></span></code></pre></div><p>当用户请求 Nginx时，通过如上这个命令我来判断后端服务的响应延迟情况，通过这样的组合命令保持对文件的实时监听，了解每一行最新请求情况，并通过 awk 进行过滤，awk 语句中做一个条件判断，判断最后一行 upstream_response_time 数值的内容大于 6 秒时进行打印（表示打印后端响应整体大于 6 秒的请求），这个方式有助于运维和开发人员去分析每一个请求的具体请求延迟上的一些问题。这就是对于性能错误上的分析。</p><h4 id="安全分析统计" tabindex="-1">安全分析统计 <a class="header-anchor" href="#安全分析统计" aria-label="Permalink to &quot;安全分析统计&quot;">​</a></h4><p>还有就是对于安全的统计分析了，安全统计分析在 Nginx log 里面也是非常重要的，这里我列出了如下内容：</p><p><strong>（1）分析请求中存在的敏感 SQL 语句</strong></p><p>首先，就是对敏感词的 SQL 语句进行分析，我们知道 SQL 攻击是一种常见的攻击手段，关注这一类的攻击，我们在 Nginx access 请求日志里面需要去关心客户端的请求里面有没有携带敏感词，包括 MySQL 里常用的查询敏感的语句（具体可以关注 27 课时），如&quot;selete&quot;&quot;and&quot;&quot;+and+&quot;&quot; and &quot;这些关键词，我们需要对 access.log 进行分析，所以可以基于这些关键词来进行筛选，我们会看到这里有三条组合命令：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cat access.log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">awk </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/select/{print $1}&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uniq </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nr</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cat access.log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">awk </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">and</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/||/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">and</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/||/%20and%20and/{print $1}&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uniq </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nr</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cat access.log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">awk </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/sleep/{print $1}&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uniq </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nr</span></span></code></pre></div><p>第一个是通过 awk 来做敏感词的筛选，这里只筛选 select 敏感词，把这个请求打印出来并且进行排序。</p><p>第二个关注的是&quot;and&quot;敏感词，然后把这些请求打印出来。</p><p>第三个是 sleep，sleep 是黑客经常用到的一个攻击手段。比如在注入成功以后，用户就会进行一个 sleep，使得后面的 MySQL 响应延迟变得更长。我们就可以通过 awk 命令在 access.log 里面直接进行关键词的筛选，并且把这个请求打印出来，看有没有这样的攻击行为。</p><p><strong>（2）分析请求中存在的敏感 Shell 命令</strong></p><p>第二类关注的是请求里面有没有携带敏感的 Shell 危险命令，比如这里我列出的 &quot;cat /etc/passwd&quot; 文件。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cat access.log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">awk </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">etc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">passwd/{print $1}&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uniq </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nr</span></span></code></pre></div><p>我们知道操作系统如果在请求里面有带&quot;etc passwd&quot;关键词，说明这个请求十分不正常。这类请求我们通常也是需要去进行关注和分析的。</p><p>这就是 Nginx 中我们通常需要分析的几大块内容，一个是性能，一个是统计访问情况，还有就是安全类别。</p><h3 id="解析-mysql-日志" tabindex="-1">解析 MySQL 日志 <a class="header-anchor" href="#解析-mysql-日志" aria-label="Permalink to &quot;解析 MySQL 日志&quot;">​</a></h3><p>接下来给你介绍的就是 MySQL 的日志。</p><h4 id="mysql-日志类型" tabindex="-1">MySQL 日志类型 <a class="header-anchor" href="#mysql-日志类型" aria-label="Permalink to &quot;MySQL 日志类型&quot;">​</a></h4><p>MySQL 日志相对来说更加简单，它只有几个类型，分别是 error_log、slow_log、binlog 和查询日志。</p>`,100),y=s("p",null,"我们接触到的更多是错误日志，通常在进行 MySQL 管理的时候必须关注的。",-1),F=s("p",null,"慢日志（slow_log）主要记录的是查询 SQL 比较长的语句，通常是在程序性能需要进行优化的时候关注的，所以这个需要手动开启（开启方式具体可以关注课时 22），如果你的程序性能和 MySQL 性能都比较合理，正常情况下不需要开启，以免损耗 MySQL 性能。",-1),u=s("p",null,"二进制日志也需要手动开启，它可以实现 MySQL 的主从数据复制，还有对于数据的误删找回也能够起到帮助。但是这个需要我们手动来进行开启。",-1),_=s("p",null,"查询日志通常建议关闭，因为我们不需要去记录每一条 SQL 的查询和记录、更新还有具体的情况，因为它确实会消耗 MySQL 服务器的性能，所以通常是建议关闭的。",-1),C=s("h4",{id:"mysql-日志分析工具",tabindex:"-1"},[i("MySQL 日志分析工具 "),s("a",{class:"header-anchor",href:"#mysql-日志分析工具","aria-label":'Permalink to "MySQL 日志分析工具"'},"​")],-1),m=s("p",null,"对于这几块日志的分析，我们有对应的工具去进行操作，我这里列了一张表格：",-1),b=n(`<h4 id="mysql-慢日志分析" tabindex="-1">MySQL 慢日志分析 <a class="header-anchor" href="#mysql-慢日志分析" aria-label="Permalink to &quot;MySQL 慢日志分析&quot;">​</a></h4><p>具体来看以下两个命令：</p><p><strong>（1）mysqldumpslow</strong></p><p>这个命令是 MySQL 下的工具集里的一个默认工具。它来帮助我们分析 slow query log，我们可以看到它的优势是 MySQL 官方自带的。</p><p><strong>（2）pt-query-digest</strong></p><p>第二个给你介绍的工具就是 pt-query-digest 命令，它是第三方的比较强大的工具集，它能够分析的程度相对 mysqldumpslow 会更加高。分析日志类型也会非常全面，而不限于 mysql slow log，可以分析 MySQL 的所有日志。</p><p>课时的最后，我再摘取 MySQL 的这两个命令来给你做一个大体的介绍。</p><p>mysqldumpslow 是 MySQL 自带的用来分析慢查询的工具，所以通常分析 MySQL 的慢查询时会用到这个的工具，它主要可以用到这样的一些选项，比如说：</p><ul><li><h1 id="s-排序方式。c-、t-、l-、r-表示记录次数、时间、查询时间的多少、返回的记录数排序-ac、at、al、ar-表示相应的倒叙" tabindex="-1">-s：排序方式。c 、t 、l 、r 表示记录次数、时间、查询时间的多少、返回的记录数排序；ac、at、al、ar 表示相应的倒叙； <a class="header-anchor" href="#s-排序方式。c-、t-、l-、r-表示记录次数、时间、查询时间的多少、返回的记录数排序-ac、at、al、ar-表示相应的倒叙" aria-label="Permalink to &quot;-s：排序方式。c 、t 、l 、r 表示记录次数、时间、查询时间的多少、返回的记录数排序；ac、at、al、ar 表示相应的倒叙；&quot;">​</a></h1></li><li><h1 id="t-返回前面多少条的数据" tabindex="-1">-t：返回前面多少条的数据； <a class="header-anchor" href="#t-返回前面多少条的数据" aria-label="Permalink to &quot;-t：返回前面多少条的数据；&quot;">​</a></h1></li><li><h1 id="g-包含大小写等的信息" tabindex="-1">-g：包含大小写等的信息； <a class="header-anchor" href="#g-包含大小写等的信息" aria-label="Permalink to &quot;-g：包含大小写等的信息；&quot;">​</a></h1></li></ul><p>使用案例如下：</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysqldumpslow </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">slowquery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #slow记录最多的10个语句 </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysqldumpslow </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;left join&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">slowquery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">log</span></span></code></pre></div><p>mysqldumpslow 添加了一个 -s 排序方式，-t 表示返回的是10 行的数据，后面加的就是 SQL 的 慢日志路径，这样的话就可以进行 slowquery.log 的分析，并且把所有查询记录最多的 10 行语句打印出来，我们可以拿这个工具来进行慢查询的分析。</p><p>后面还有一个加了一个 -g 的使用方式，也就是做筛选和排查，主要分析 slowquery.log 排序语句里面包含 left join 关键词的语句并打印出来。</p><p>这就是 mysqldumpslow 的使用方式。</p><p><strong>pt-query-digest</strong> 命令是 percona-toolkit 工具集里面的，常用于作 MySQL 普通日志、慢查询日志以及二进制日志的一个分析查询工具。</p><p>（1）直接分析慢查询文件: pt-query-digest [参数] /var/lib/mysql/log/slow.log &gt; slow.report</p><p>如果我们直接分析慢查询，同样是以这样的方式，命令后面加慢查询的日志路径，然后把结果做重定向导入 slow.report 文件里保存，然后对结果进行分析。</p><p>（2）分析最近 12 小时内的查询： pt-query-digest --since=12h /var/lib/mysql/log/slow.log &gt; slow_report2.log</p><p>如果我们想分析在最近 12 个小时里面的查询，可以加入一个 --since 选项，也就是只查询最近 12 个小时里发生的慢日志请求，并且同样做结果的重定向。</p><p>对于 MySQL 的日志分析的工具，本课时给你介绍的就是这些，在后面的内容里面，我们还会来讲解一套更加强大的日志分析和检索系统（如 EFK 来进行收集），本课时的内容就是这些，谢谢。</p>`,20);function v(q,A,x,D,B,f){const a=h("Image");return e(),p("div",null,[r,g,d,o,E,t(a,{alt:"1.png",src:"https://s0.lgstatic.com/i/image3/M01/15/20/Ciqah16ipEeAGWevAAbzAGpV_r4743.png"}),i(),c,t(a,{alt:"2.png",src:"https://s0.lgstatic.com/i/image3/M01/15/21/Ciqah16ipcmAR_TTAAKv0YH9EQw405.png"}),i(),y,F,u,_,C,m,t(a,{alt:"3.png",src:"https://s0.lgstatic.com/i/image3/M01/15/21/Ciqah16ipeCAF8MsAARCYvAZPyo620.png"}),i(),b])}const L=l(k,[["render",v]]);export{S as __pageData,L as default};
