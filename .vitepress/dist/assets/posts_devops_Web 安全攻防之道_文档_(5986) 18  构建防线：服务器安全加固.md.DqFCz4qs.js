import{_ as t,F as p,g as l,K as n,h as s,ar as h,l as i,o as e}from"./chunks/framework.VlluEs-f.js";const f=JSON.parse('{"title":"18构建防线：服务器安全加固","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/Web 安全攻防之道_文档/(5986) 18  构建防线：服务器安全加固.md","filePath":"posts/devops/Web 安全攻防之道_文档/(5986) 18  构建防线：服务器安全加固.md","lastUpdated":1718371218000}'),k={name:"posts/devops/Web 安全攻防之道_文档/(5986) 18  构建防线：服务器安全加固.md"},E=h('<h1 id="_18构建防线-服务器安全加固" tabindex="-1">18构建防线：服务器安全加固 <a class="header-anchor" href="#_18构建防线-服务器安全加固" aria-label="Permalink to &quot;18构建防线：服务器安全加固&quot;">​</a></h1><p>关于&quot;模块二 漏洞攻防案例&quot;的内容我们已经讲完了，从本节课开始，将进入&quot;模块三 Web 安全建设&quot;内容，我将给你介绍企业内部的一些 Web 安全建设工作，如何更加全面地防御 Web 漏洞的攻击。</p><p>本节课主要向你介绍一些服务器安全加固的策略，以主流的 Apache 和 Nginx 服务器为例，有时即使存在漏洞，有安全加固策略存在，可以提高对方的攻击成本，防止被进一步攻击。PHP 本身也提供有一些安全配置功能可用于安全加固，本节课会一并介绍。</p><h3 id="apache-服务器加固" tabindex="-1">Apache 服务器加固 <a class="header-anchor" href="#apache-服务器加固" aria-label="Permalink to &quot;Apache 服务器加固&quot;">​</a></h3><p>Apache 是世界使用排名第一的 Web 服务器软件，由于其跨平台和安全性而被广泛使用，我们前面课程介绍过的靶场很多就使用到 Apache。</p><p>下面梳理下 Apache 上的安全配置建议，以帮助对服务器进行安全加固。</p><h4 id="_1-删除默认页面" tabindex="-1">1.删除默认页面 <a class="header-anchor" href="#_1-删除默认页面" aria-label="Permalink to &quot;1.删除默认页面&quot;">​</a></h4><p>Apache 安装后会有如下图所示的默认页面，安装后仅用于测试，用于生产环境中时需要删除，这里需要删除 icons 和 manual 两个目录文件，以避免不必要的信息泄露。</p>',8),d=i("p",null,"图 1 Apache 默认页面",-1),r=i("h4",{id:"_2-关闭目录浏览功能",tabindex:"-1"},[s("2.关闭目录浏览功能 "),i("a",{class:"header-anchor",href:"#_2-关闭目录浏览功能","aria-label":'Permalink to "2.关闭目录浏览功能"'},"​")],-1),o=i("p",null,"Apache 默认允许目录浏览，如果目录下找不到可浏览器的页面，就会出现目录浏览问题，造成信息泄露。",-1),c=i("p",null,"图 2 在线浏览目录",-1),g=i("p",null,'Ubuntu 是通过修改 Apache 配置文件 /etc/apache2/apache2.conf，其他平台大多是叫 httpd.conf 的配置文件名，修改"Indexes"为"－Indexes"：',-1),y=h(`<p>图 3 关闭目录浏览</p><h4 id="_3-开启访问日志" tabindex="-1">3.开启访问日志 <a class="header-anchor" href="#_3-开启访问日志" aria-label="Permalink to &quot;3.开启访问日志&quot;">​</a></h4><p>在浏览器被攻击时，通过日志可以帮助回溯整个安全事件的过程，有助于定位漏洞成因和攻击者。默认情况下，Apache 已开启访问日志记录，你需要确认下配置文件是否开启 CustomLog 的日志路径设置：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">etc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apache2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sites</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">available</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/default-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ssl.conf</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">etc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apache2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sites</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">available</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">000</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.conf</span></span></code></pre></div>`,4),u=i("p",null,"图 4 开启访问日志",-1),_=h(`<p>图 5 访问日志文件</p><p>上面是 Ubuntu 平台的情况，如果是存在 httpd.conf 配置文件的其他平台，则直接在 httpd.conf 查看是否有 CustomLog 配置。</p><h4 id="_4-禁止特定目录解析-php" tabindex="-1">4.禁止特定目录解析 PHP <a class="header-anchor" href="#_4-禁止特定目录解析-php" aria-label="Permalink to &quot;4.禁止特定目录解析 PHP&quot;">​</a></h4><p>对于不需要执行 PHP 脚本的目录，可禁止 PHP 解析，这种配置可有效防止上传漏洞的攻击，特别是上传目录的 PHP 解析限制。</p><p>通过 Apache 配置文件中对目录权限做如下修改，以禁止特定目录解析 PHP：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Directory </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/www/html/uploads&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  php_flag engine off</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Directory</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h4 id="_5-不以-root-启动-apache" tabindex="-1">5.不以 Root 启动 Apache <a class="header-anchor" href="#_5-不以-root-启动-apache" aria-label="Permalink to &quot;5.不以 Root 启动 Apache&quot;">​</a></h4><p>默认情况下，Apache 已禁止 Root 启动，你可以在 Apache 配置文件中再确认下 User 与 Group 的配置值。</p><p>下面是 apache2.conf 为配置文件时的情况，它通过 /etc/apache2/envars 指定变量名来设置 User 和 Group：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">etc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apache2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apache2.conf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User \${APACHE_RUN_USER}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Group \${APACHE_RUN_GROUP}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">etc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apache2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">envars</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export APACHE_RUN_USER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">www</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export APACHE_RUN_GROUP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">www</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data</span></span></code></pre></div><p>如果是 httpd.conf，一般就直接用 User 与 Group 来指定用户名和用户组：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User apache</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Group apache</span></span></code></pre></div><h4 id="_6-禁止访问外部文件" tabindex="-1">6.禁止访问外部文件 <a class="header-anchor" href="#_6-禁止访问外部文件" aria-label="Permalink to &quot;6.禁止访问外部文件&quot;">​</a></h4><p>当网站存在目录遍历漏洞时，攻击者可能通过 ../ 来访问系统上的任意目录，通过禁止 Apache 访问网站目录以外的目录和文件，可以有效地降低这种攻击带来的危害。</p><p>修改 Apache 配置文件，先禁止所有目录的访问，然后再开启可访问的目录。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 先禁止任何目录访问</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	Order Deny,Allow</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	Deny from all</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 设置可访问的目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	Order Allow,Deny</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	Allow from {网站根目录}</span></span></code></pre></div><h4 id="_7-错误页面重定向" tabindex="-1">7.错误页面重定向 <a class="header-anchor" href="#_7-错误页面重定向" aria-label="Permalink to &quot;7.错误页面重定向&quot;">​</a></h4><p>Apache 错误页面重定向功能可以防止敏感信息泄露，比如网站路径等信息。</p><p>修改 Apache 配置文件，指定不同响应号的返回页面文件：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ErrorDocument </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">custom400.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	ErrorDocument </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">401</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">custom401.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	ErrorDocument </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">403</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">custom403.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	ErrorDocument </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">custom404.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	ErrorDocument </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">405</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">custom405.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	ErrorDocument </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">custom500.html</span></span></code></pre></div><h3 id="nginx-服务器加固" tabindex="-1">Nginx 服务器加固 <a class="header-anchor" href="#nginx-服务器加固" aria-label="Permalink to &quot;Nginx 服务器加固&quot;">​</a></h3><p>Nginx 是一款著名且免费的网页服务器软件，在世界范围内应用非常广泛。Nginx 配置文件通常位于 /usr/local/etc/nginx/nginx.conf，如果没找到，你可以通过命令 locate nginx.conf 来搜索。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ locate nginx.conf</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">local</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">etc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx.conf</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">local</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">etc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx.conf.default</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span></code></pre></div><p>各种安全加固方式都可通过 nginx.conf 来完成。</p><h4 id="_1-关闭目录浏览" tabindex="-1">1.关闭目录浏览 <a class="header-anchor" href="#_1-关闭目录浏览" aria-label="Permalink to &quot;1.关闭目录浏览&quot;">​</a></h4><p>Nginx 默认不允许目录浏览，你可以再确认下配置文件中的 autoindex 是否配置为 off，以防止敏感信息泄露。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">autoindex off</span></span></code></pre></div><h4 id="_2-开启访问日志" tabindex="-1">2.开启访问日志 <a class="header-anchor" href="#_2-开启访问日志" aria-label="Permalink to &quot;2.开启访问日志&quot;">​</a></h4><p>开启日志有助追踪攻击途径，以及定位攻击者。默认情况下，Nginx 会开启访问日志，你可在配置文件中确认下是否已开启：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">access_log </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">backup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx_logs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">access.log combined;</span></span></code></pre></div><h4 id="_3-限制特定目录解析-php" tabindex="-1">3.限制特定目录解析 PHP <a class="header-anchor" href="#_3-限制特定目录解析-php" aria-label="Permalink to &quot;3.限制特定目录解析 PHP&quot;">​</a></h4><p>在 Apache 已介绍过，对于不需要执行 PHP 脚本的目录，可禁止 PHP 解析，这种配置可有效防止上传漏洞的攻击，特别是上传目录的 PHP 解析限制，通过 nginx.conf 配置文件使用 deny all 来限制特定目录被 PHP 解析：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ^/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cgisvr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\.(php</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">php5)$</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    deny all;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_4-删除默认页面" tabindex="-1">4.删除默认页面 <a class="header-anchor" href="#_4-删除默认页面" aria-label="Permalink to &quot;4.删除默认页面&quot;">​</a></h4><p>Nginx 也存在默认页面，上线后应该删除，防止不必要的信息泄露，可通过删除如下配置信息来解决。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">doc {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">root </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">share;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">autoindex on;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">allow </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">deny all;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">images {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">root </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">share;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">autoindex off;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,36),A=h(`<p>图 6 Nginx 默认页面</p><h3 id="php-安全配置" tabindex="-1">PHP 安全配置 <a class="header-anchor" href="#php-安全配置" aria-label="Permalink to &quot;PHP 安全配置&quot;">​</a></h3><p>PHP 是比较常用的网站开发语言，其对安全也很重视，提供了不少安全函数和配置功能。下面介绍一些常用的 PHP 安全配置方法，都是通过 php.ini 来配置，比如 PHP 7.4 的配置文件路径位于 /etc/php/7.4/apache2/php.ini。</p><h4 id="_1-限制脚本访问权限" tabindex="-1">1.限制脚本访问权限 <a class="header-anchor" href="#_1-限制脚本访问权限" aria-label="Permalink to &quot;1.限制脚本访问权限&quot;">​</a></h4><p>PHP 默认配置允许 php 脚本程序访问服务器上的任意文件，为避免 php 脚本访问不该访问的文件，从一定程度上限制了 php 木马的危害，一般设置为只能访问网站的目录：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">open_basedir </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">local</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apache2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">htdocs（网站根目录）</span></span></code></pre></div><h4 id="_2-禁止危险函数" tabindex="-1">2.禁止危险函数 <a class="header-anchor" href="#_2-禁止危险函数" aria-label="Permalink to &quot;2.禁止危险函数&quot;">​</a></h4><p>利用 php 的特殊函数可以执行系统命令，查询任意目录，增加修改删除文件等。php 木马程序常见使用的函数为 exec、popen、system、passthru、shell_exec 等，如下设置可禁止使用这些危险函数：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">disable_functions </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> exec,popen,system,passthru,shell_exec,escapeshellarg,escapeshellcmd,proc_close,proc_open</span></span></code></pre></div><h4 id="_3-关闭错误消息显示" tabindex="-1">3.关闭错误消息显示 <a class="header-anchor" href="#_3-关闭错误消息显示" aria-label="Permalink to &quot;3.关闭错误消息显示&quot;">​</a></h4><p>一般 PHP 错误信息可能会包含网站路径或 SQL 查询语句等敏感信息，这些信息为攻击者提供有价值的信息，因此应该禁止错误显示，配置方式如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">display_errors </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Off</span></span></code></pre></div><h4 id="_4-禁止访问远程文件" tabindex="-1">4.禁止访问远程文件 <a class="header-anchor" href="#_4-禁止访问远程文件" aria-label="Permalink to &quot;4.禁止访问远程文件&quot;">​</a></h4><p>允许访问 URL 远程资源使得 PHP 应用程序的漏洞利用变得更加容易，php 脚本若存在远程文件包含漏洞可以让攻击者直接获取网站权限及上传 web 木马，因此建议关闭远程文件访问功能，若需要访问可采用其他方式，比如 libcurl 库，配置如下:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">allow_url_fopen </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Off</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">allow_url_include </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Off</span></span></code></pre></div><p>PHP 在这几年提升了不少安全功能，很多功能都默认开启，甚至直接去掉一些原有一些可配置的安全功能，比如 magic_quotes_gpc。</p><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><p>本节课主要分享了 Apache、Nginx 和 PHP 的一些安全配置方案，帮助抵御漏洞的攻击，提高漏洞利用难度，即使被入侵后，仍有可回溯追踪的办法，这在后续的入侵排查过程中非常重要，这点在下一节课中介绍，我们下一节课中见。</p><hr><p><a href="https://wj.qq.com/s2/8059116/3881/" target="_blank" rel="noreferrer">课程评价入口，挑选 5 名小伙伴赠送小礼品～</a></p>`,20);function b(v,m,F,P,D,x){const a=p("Image");return e(),l("div",null,[E,n(a,{alt:"图片1.png",src:"https://s0.lgstatic.com/i/image6/M01/04/39/CioPOWAlYGWAN3nAAAZWrXa2TEg855.png"}),s(),d,r,o,n(a,{alt:"图片2.png",src:"https://s0.lgstatic.com/i/image6/M01/04/39/CioPOWAlYMCAcmboAAJy0sirrC8688.png"}),s(),c,g,n(a,{alt:"图片3.png",src:"https://s0.lgstatic.com/i/image6/M01/04/3C/Cgp9HWAlYPSACO-AAACZ1y8MML4168.png"}),s(),y,n(a,{alt:"图片4.png",src:"https://s0.lgstatic.com/i/image6/M00/04/39/CioPOWAlYQmAVimdAAB2Iy54tek342.png"}),s(),u,n(a,{alt:"图片5.png",src:"https://s0.lgstatic.com/i/image6/M00/04/3C/Cgp9HWAlYR-AM5-xAAFu4xQ1xyQ532.png"}),s(),_,n(a,{alt:"图片6.png",src:"https://s0.lgstatic.com/i/image6/M00/04/39/CioPOWAlYTWAQ7NXAAIwx06JbKw323.png"}),s(),A])}const q=t(k,[["render",b]]);export{f as __pageData,q as default};
