import{_ as h,F as t,g as p,K as a,h as n,ar as s,o as l}from"./chunks/framework.VlluEs-f.js";const D=JSON.parse('{"title":"13网络安全：常见网络攻击以及防护策略","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/Node.js 应用开发实战_文档/(6795) 13  网络安全：常见网络攻击以及防护策略.md","filePath":"posts/frontEnd/Node.js 应用开发实战_文档/(6795) 13  网络安全：常见网络攻击以及防护策略.md","lastUpdated":1718371218000}'),k={name:"posts/frontEnd/Node.js 应用开发实战_文档/(6795) 13  网络安全：常见网络攻击以及防护策略.md"},e=s(`<h1 id="_13网络安全-常见网络攻击以及防护策略" tabindex="-1">13网络安全：常见网络攻击以及防护策略 <a class="header-anchor" href="#_13网络安全-常见网络攻击以及防护策略" aria-label="Permalink to &quot;13网络安全：常见网络攻击以及防护策略&quot;">​</a></h1><p>Node.js 作为后台服务，网络相关的安全措施也非常重要，<strong>互联网一些常见的网络攻击策略，我们都应该在框架层面去杜绝</strong>。本讲就介绍一些常见的网络攻击方式，并介绍如何在框架中增加这类问题的防护措施。我会着重介绍 Node.js 作为后台服务，自身所需要注意的安全问题，为后续我们在线上的应用提供一个参考。</p><h3 id="常见的网络攻击" tabindex="-1">常见的网络攻击 <a class="header-anchor" href="#常见的网络攻击" aria-label="Permalink to &quot;常见的网络攻击&quot;">​</a></h3><p>这些网络攻击有<strong>XSS、CSRF、SQL 注入以及 Dos</strong>，在 Node.js 作为后台服务时，同样存在这些问题，这里简单演示下可能出现问题的场景，以及如何去防御。</p><h4 id="xss" tabindex="-1">XSS <a class="header-anchor" href="#xss" aria-label="Permalink to &quot;XSS&quot;">​</a></h4><p>这里就不对概念进行阐述，我们看下下面这段代码。这里尽量不要直接吐出数据，而是统一经过处理层进行转化。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Xss</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Controller</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> querystring.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ctx.request.querystring);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> decodeURI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ctx.response.body </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //return this.resApi(true, &#39;good&#39;, a);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Xss;</span></span></code></pre></div><p>在上面代码中，<strong>没有对 name 进行任何处理，就直接返回给接口，并且没有经过我们的 resApi 服务，而是使用 body 直接设置返回</strong> 。这样就会导致，<strong>当 name 为一个 HTML 或者 JS 都会被浏览器执行</strong>。当我们启动服务后，访问以下地址，都会出现一些异常问题。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:3000/v1/xss/index?name=%3Cscript%3Ealert(%27nodejs%27)%3C/script%3E</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:3000/v1/xss/index?name=%3Chtml%3E%3Ch1%3E%E6%88%91%E6%83%B3%E6%89%93%E5%8D%B0%E4%BB%80%E4%B9%88%EF%BC%8C%E5%B0%B1%E6%89%93%E5%8D%B0%E4%BB%80%E4%B9%88%EF%BC%8C%E4%BD%A0%E7%BD%91%E7%AB%99%E8%A2%AB%E6%94%BB%E5%87%BB%E4%BA%86%3C/h1%3E%3C/html%3E</span></span></code></pre></div><p>这里<strong>最简单的防御方式就是使用我们统一的 resApi 处理响应数据</strong>，因为在 resApi 中固定了返回结果，进行了 JSON.stringify 处理，所有的返回都会封装为一个 json 字符串，因此不会存在 XSS 的问题。</p><h4 id="csrf" tabindex="-1">CSRF <a class="header-anchor" href="#csrf" aria-label="Permalink to &quot;CSRF&quot;">​</a></h4><p><strong>跨站攻击</strong>，举个简单的例子，在前端一般会将登录态相关的信息保存在 Cookie 中，假设我们已经在 A 站点登录了，接下来我在 B 域名站点，诱骗在 A 站登录的用户，发起一个 A 站点的接口请求，而这时候 A 站请求会携带 Cookie 给到服务端，服务端会正常的响应，从而我在 B 站可以诱骗各种支付或者扣款请求。</p><p>这种安全问题对后台服务的影响还是非常大的，而 Node.js 作为后台服务也需要做一定的安全校验，其中一个是<strong>对 referer 的校验通用做法</strong> ，也就是只允许我们制定的域名发送的请求，其他站点则认为是非法请求，比如下面我们的中间件，只要存在 referer，并且 referer 不在我们的域名白名单下，那么则<strong>直接返回 403 拒绝访问</strong>。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> baseFun</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;../lib/baseFun&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> whiteList</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;127.0.0.1:3000&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ( </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx.request.headers.referer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">whiteList.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx.request.headers.referer)){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            baseFun.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setResInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;access have been forbidden&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">403</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>另外一个是<strong>后台服务在写操作时，使用 token 校验方式</strong>，这里我们应用的是 JWT，也就是在用户打开页面时，将 token 写入页面的隐藏元素中，当请求接口时从页面元素中获取 token，再传递到接口参数中，这样第三方站点因为没有打开页面是无法获取到这个 token 的。</p><h4 id="sql-注入" tabindex="-1">SQL 注入 <a class="header-anchor" href="#sql-注入" aria-label="Permalink to &quot;SQL 注入&quot;">​</a></h4><p>在 Node.js 中应用 MySQL 时要特别注意这点，<strong>因为 SQL 语句中包含了外部的参数，如果参数没有做任何处理，将导致用户可以根据自己的意愿拼装 SQL 语句在数据库中执行，从而影响业务服务的正常运行</strong>。</p><p>假设我们需要查询一个名字为 &#39;Node.js&#39; 的学生，在 Node.js 中，假设我们这样去拼装并执行语句。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Sql</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Controller</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> querystring.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ctx.request.querystring);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> decodeURI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /// connection 是 mysql 的链接句柄</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> queryStr    </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;SELECT * FROM student WHERE name = &quot;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&quot;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //connection.query(queryStr, function(err, results) {});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(queryStr);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resApi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;good&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, queryStr);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Sql;</span></span></code></pre></div><p>在上面代码例子中，获取参数 name 的值，然后拼接到 queryStr 中，组装成一个 SQL 语句，这里如果 name 传递正常的值当然是没有问题的，比如下面这样：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:3000/v1/sql/index?name=Node.js</span></span></code></pre></div><p>但是如果我们传递的是下面这样的 name：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:3000/v1/sql/index?name=自定义&quot;;DELETE FROM student;&quot;</span></span></code></pre></div><p>你就会发现其实<strong>SQL 语句不仅仅是执行了一条 SELECT 语句，还执行了一个 DELETE student 表的操作</strong>。</p><p>以上是非常危险的行为，<strong>通过这个漏洞可以直接对 SQL 的数据库进行攻击</strong> 。那么如何去防御呢？在 Node.js 中有最常见的方法是<strong>使用占位符的方式</strong>，也就是使用下面的方式替代拼装 SQL 语法的方法：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">connection.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SELECT * FROM student WHERE name = ?&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [name], </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err, results) {})</span></span></code></pre></div><p><strong>使用这种方式会自动将 name 进行转译，以防止其他 SQL 语法的混入</strong>。</p><h4 id="dos" tabindex="-1">Dos <a class="header-anchor" href="#dos" aria-label="Permalink to &quot;Dos&quot;">​</a></h4><p><strong>这种网络攻击的主要原理就是通过模拟无效的海量用户请求，来导致后台服务的崩溃现象</strong> 。一般这种在后台服务中不需要考虑，可以直接在网关层进行处理，如果真的没有网关层的话，可以考虑使用 NPM 中的一个<a href="https://www.npmjs.com/package/ddos?fileGuid=xxQTRXtVcqtHK6j8" target="_blank" rel="noreferrer">ddos 库</a>。</p><p>以上就是常见的互联网的攻击方式，但是在 Node.js 中还存在一些特别的情况，下面我们就来看下这些特殊情况的例子，以及如何去应对。</p><h3 id="node-js-中特有的一些问题" tabindex="-1">Node.js 中特有的一些问题 <a class="header-anchor" href="#node-js-中特有的一些问题" aria-label="Permalink to &quot;Node.js 中特有的一些问题&quot;">​</a></h3><p>在应用 Node.js 作为后台服务时，以下 3 种情况是非常要注意的，不注意的话会严重导致线上安全问题，从而导致公司、企业的严重损失。</p><h4 id="eval-函数" tabindex="-1">eval 函数 <a class="header-anchor" href="#eval-函数" aria-label="Permalink to &quot;eval 函数&quot;">​</a></h4><p><strong>在任何情况下，都应杜绝使用该函数，因为该函数存在非常不可控的因素，这点和 SQL 注入相似，相当于 JS 代码注入</strong>，比如下面这段代码：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> querystring</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;querystring&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Controller</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;../../core/controller&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Eval</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Controller</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> querystring.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ctx.request.querystring);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 获取参数 r</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> decodeURI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;r&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 根据参数 r 动态调用 this._p() 获取执行结果</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ret </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`this._q() + \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resApi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;good&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ret);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    _q</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    _p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Eval;</span></span></code></pre></div><p>代码比较简单，假设我们希望用 eval 来动态调用内部的一些函数，因此我们使用了 r 这个参数，正常情况下是可以调用，但是如果我们调用下面的地址：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:3000/v1/eval/index?r=this._p();console.log(&#39;d&#39;);const fs=require(&#39;fs&#39;);fs.readFileSync(__filename, &#39;utf8&#39;)</span></span></code></pre></div><p>访问后，你会发现很恐怖的一幕，源代码直接被返回了，如图 1 所示。</p>`,38),r=s(`<p>图 1 eval 泄漏源代码例子</p><p>因此<strong>无论任何情况下，代码中都不允许 eval 的使用，因为不可控因素太大</strong>。</p><h4 id="文件读写" tabindex="-1">文件读写 <a class="header-anchor" href="#文件读写" aria-label="Permalink to &quot;文件读写&quot;">​</a></h4><p>在我们之前设计路由的时候，有讲解过这个路径的问题，就像下面这段代码：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 去除非常规请求路径，将-转化为大写</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pathname </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pathname.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;..&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\-</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\w</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">letter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">letter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toUpperCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span></code></pre></div><p>第一个 replace 的两个点是非常重要的，这样我们才能控制 require 的文件仅仅只在 controller 文件夹下。</p><p>接下来我们看一个没有控制好目录路径导致的问题，比如下面这段代码：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Controller</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> querystring.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ctx.request.querystring);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 根据产品名称获取产品的配置信息</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> product </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> decodeURI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;product&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> productInfo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/../../config/products/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">product</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}.json\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resApi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;good&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, productInfo);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resApi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;can not find the product&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>正常访问以下两个链接都可以拿到我们具体需要的正常逻辑。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:3000/v1/fs/index?product=c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:3000/v1/fs/index?product=d</span></span></code></pre></div><p>如图 2 所示的是一个正常的响应结果。</p>`,11),E=s('<p>图 2 fs 正常响应</p><p>但是<strong>如果我们访问了以下地址，就直接导致了配置文件泄漏，从而引发了数据库账号和密码被泄漏的安全问题</strong>。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:3000/v1/fs/index?product=../b</span></span></code></pre></div><p>访问以后，你就可以通过上面代码访问到我们项目中的所有配置文件了，而配置文件中包含了非常多敏感信息，如图 3 所示。</p>',4),d=s(`<p>图 3 泄漏配置文件响应</p><p>解决方案的话，就是将访问的配置文件，<strong>控制在当前配置文件目录下</strong>，因此你需要将这种 .. 路径进行替换，比如使用下面代码修复后，就解决了该问题。你再次启动服务，访问上面路径后，将会提示访问路径异常的信息。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 去掉上层目录访问</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">product </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> product.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;..&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>但是这里要注意，这样还是可以访问同目录下的文件的，因此最好的方式是，<strong>将配置文件归类，并且做好校验，非范围内的配置文件不允许读取</strong>。</p><p>其次在写文件时，更加要注意风险问题，一般情况下，<strong>分开写目录和源代码目录</strong> ，例如可以将上传的文件或者日志文件放到另外一个单独目录，并控制权限即可。<strong>以防代码写漏洞，导致本地文件被篡改，或者写入一些脚本文件从而控制服务器</strong>。</p><p>为了更清晰了解写带来的风险，我们同样写了一个测试代码，你可以看下 Fs 类中的 writeTest 方法，也可以自行地去测试一下，这部分就交给你去实践了。测试时，你需要使用 Postman 来发送数据，例如图 4 所示。</p>`,6),g=s(`<p>图 4 测试文件写风险</p><h4 id="非-root-用户权限" tabindex="-1">非 root 用户权限 <a class="header-anchor" href="#非-root-用户权限" aria-label="Permalink to &quot;非 root 用户权限&quot;">​</a></h4><p><strong>在大部分情况下 Node.js 的进程是无须太多权限的，只需要一些固定目录的读写权限，因此我们只需要赋予 Node.js 服务最低的用户权限，一定不要设置为 root 权限</strong>。比如上面我们的 eval 函数导致的问题，如果你是使用 root 权限，那么就可以通过 Node.js fs 获取主机的登录密码，从而直接控制这台机器。而在大部分公司，主机和主机都是内网互通，如果单台内网机器被攻克后，就相当于整个公司的内网系统沦陷了。</p><p>为了解决这个问题，<strong>我们可以新建一个独立的用户，然后创建 Node.js 所需要读写的日志以及其他目录权限赋予读写权限</strong>，如下所示：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adduser</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> username</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path</span></span></code></pre></div><p><strong>第一步创建用户，第二步为用户归属权限</strong>，一般情况下只需要归属当前源代码路径和需要写日志的目录。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>本讲介绍了常见的一些网络攻击方案，其次着重介绍了在 Node.js 中要注意的安全风险问题。网络攻击一般是面试中常被问及的题目，因此我们需要着重学习其原理，其次针对 Node.js 的安全问题则是你在编码过程中非常要注重的，避免在应用 Node.js 的过程中导致企业受到损失。</p><p>如果你还有其他的一些安全性问题，也可以在本讲下面进行留言，我将和你一起探讨如何解决这些线上安全问题。</p><p>下一讲我们将介绍一个可以轻松地协助我们来做各种性能提前校验的工具，其次会实践应用该工具融合到我们的框架中。</p>`,10);function o(y,F,c,C,u,A){const i=t("Image");return l(),p("div",null,[e,a(i,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image6/M00/37/20/CioPOWB1u9iAa6CoAAEyQ6iErU8829.png"}),n(),r,a(i,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M01/37/18/Cgp9HWB1u-eAICCOAAAyzg3koIs578.png"}),n(),E,a(i,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image6/M00/37/20/CioPOWB1u--ARC0iAABHYTevEBU886.png"}),n(),d,a(i,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image6/M01/37/18/Cgp9HWB1u_eAPII6AAEJsYGMP54262.png"}),n(),g])}const v=h(k,[["render",o]]);export{D as __pageData,v as default};
