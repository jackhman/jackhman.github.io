import{_ as l,D as e,o as t,g as r,J as n,h as o,m as s,Q as p}from"./chunks/framework.f67d7268.js";const w=JSON.parse('{"title":"23告别依赖，MockServer必杀技","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/114-测试开发入门与实战文档/(4694) 23  告别依赖，Mock Server 必杀技.md","filePath":"posts/devops/114-测试开发入门与实战文档/(4694) 23  告别依赖，Mock Server 必杀技.md","lastUpdated":1696682708000}'),c={name:"posts/devops/114-测试开发入门与实战文档/(4694) 23  告别依赖，Mock Server 必杀技.md"},y=s("h1",{id:"_23告别依赖-mockserver必杀技",tabindex:"-1"},[o("23告别依赖，MockServer必杀技 "),s("a",{class:"header-anchor",href:"#_23告别依赖-mockserver必杀技","aria-label":'Permalink to "23告别依赖，MockServer必杀技"'},"​")],-1),i=s("p",null,"在上一课时，我们详细了解了微服务下的测试分层实践，也讲解了微服务给测试带来的挑战。你会发现，其中最重要的一条挑战，便是微服务独立开发、独立部署这一特性。由于各个微服务都是独立开发和部署，增大了微服务联调测试时的难度。",-1),E=s("p",null,[o("在实践中，大部分微服务被拆分到不同的小型开发和测试团队。而各个团队由于各自的KPI导向不同，势必会产生对同一个Task， 两个团队设定有不同的优先级。这样就导致了"),s("strong",null,"开发节奏不一致， 联调测试变得更加困难了"),o("。")],-1),u=s("p",null,[o("那么，对于相互有依赖的微服务，当我方已经接近完成，而对方尚未开始或仍在进行的情况下，我方该如何进行测试就成了一个不得不解决的问题。"),s("strong",null,"这也是本讲我们要解决的问题：如何搭建 Mock Server 破除环境依赖。")],-1),k=s("p",null,"下图是本讲的知识脑图，可供你学习参考。",-1),h=p('<h3 id="什么是-mock" tabindex="-1">什么是 Mock？ <a class="header-anchor" href="#什么是-mock" aria-label="Permalink to &quot;什么是 Mock？&quot;">​</a></h3><p>Mock 是模拟的意思。在测试中，通常表述为：对测试过程中<strong>不容易构造</strong> 或者<strong>不容易获取</strong> 的对象，用一个<strong>虚拟</strong>的对象来进行模拟的一个过程。</p><p>那么哪些对象不容易构造？哪些对象不容易获取呢？</p><ul><li><p>拿微服务举例，在一个调用链条上，微服务 A 依赖 B 服务才能提供服务，而微服务 B 依赖 C 服务， 微服务 C 依赖 D 服务.....在这样的情况下，把每个依赖的服务都构造完毕再开始测试，就变得不太现实。这种情况我们称之为<strong>不容易构造</strong>。</p></li><li><p>又比如，假设我们的服务依赖银行的接口提供资金的查询。在测试中， 银行不可能无条件或者随意提供接口给我们调用。那么，在我们开发完毕但是要依赖对方才能开始测试时， 我们称这种情况为<strong>不容易获取</strong>。</p></li></ul><p>无论是哪种情况，使用 Mock 的一大前提条件是：我们仅关注测试对象自身内部逻辑是否正确，而<strong>不关心其依赖对象逻辑的正确性</strong>。</p><h3 id="mock-server-是什么" tabindex="-1">Mock Server 是什么 <a class="header-anchor" href="#mock-server-是什么" aria-label="Permalink to &quot;Mock Server 是什么&quot;">​</a></h3><p>了解了什么是 Mock，理解 Mock Server 就比较容易了。简而言之，能够提供 Mock 功能的服务就叫作 Mock Server。Mock Server 通过模仿真实的服务器，提供对来自客户端请求的真实响应。</p><p><strong>那么 Mock Serve 如何模仿真实的服务器呢？</strong></p><p>一般情况下，搭建 Mock Server 前，需要了解将要 Mock 的服务，都能提供哪些功能？对外提供功能时，又以哪种格式提供服务？例如，以接口方式提供服务，接口的种类、接口的定义，以及接口输出的参数等信息。</p><p>了解了这些，Mock Server 就可以根据请求的不同，直接静态地返回符合业务规范的接口，也可以在 Mock Server 内部经过简单计算，动态返回符合业务规范的接口。</p><p>在实际工作中，Mock Server 通常以 Mock API Server 的形式存在，也就是我们一般以接口的形式对外提供服务，Mock Server 搭建在本地或者远程均可以对外提供服务。</p><h3 id="mock-server-的常用场景" tabindex="-1">Mock Server 的常用场景 <a class="header-anchor" href="#mock-server-的常用场景" aria-label="Permalink to &quot;Mock Server 的常用场景&quot;">​</a></h3><p>最常见的 Mock Server 的使用场景如下：</p><ul><li><p>前后端联调使用，通过事先约定接口规范，使前端可以不依赖后端服务<strong>独立开展工作</strong>，这也是开发最常用的功能。</p></li><li><p>使用 Mock Server<strong>屏蔽无关的真实服务</strong>，从而专注于要测试的服务本身。仅仅测试需要测试的服务，其他不在我负责范围的服务使用 Mock。</p></li><li><p>供测试工程师使用，在测试环境<strong>避免调用第三方收费服务</strong>。比如，企查查等服务是收费的，在测试环境就可以不调用，以节省费用。</p></li><li><p><strong>破除第三方依赖</strong>。比如，本公司业务流程的某一个步骤需要获取第三方服务的正确返回才能继续进行，那么在测试中就可以用 Mock Server，直接模拟外部 API 的响应来断言系统的正确行为。</p></li></ul><p>以上四条基本可以概括 Mock Server 绝大多数的使用情况。</p><p>可以看到，前两条主要是开发之间在使用，那么这个 Mock Server 通常是开发之间协调提供；或者是前端开发根据 API 接口规范，直接写 Hard Code 的响应供自己调用；或者是后端直接提供一个返回值给前端调用，基于成本和时间考虑，这个返回值通常也是 Hard Code 的，这一块不在我们今天的讨论范畴。</p><p><strong>而后两条就都是跟测试密切相关了，也是我们今天需要关注的。</strong></p><h3 id="mock-server-搭建" tabindex="-1">Mock Server 搭建 <a class="header-anchor" href="#mock-server-搭建" aria-label="Permalink to &quot;Mock Server 搭建&quot;">​</a></h3><p>Mock Server 的搭建有两种方式，分别是借助第三方工具直接提供 Mock Server，以及自主编码实现 Mock Server。下面我来分别介绍下这两种方式。</p><h4 id="_1-借助第三方工具直接提供-mock-server" tabindex="-1">1.借助第三方工具直接提供 Mock Server <a class="header-anchor" href="#_1-借助第三方工具直接提供-mock-server" aria-label="Permalink to &quot;1.借助第三方工具直接提供 Mock Server&quot;">​</a></h4><p>可以直接提供 Mock Server 功能的第三方工具很多，这里我选择使用<strong>Postman</strong>的 Mock 功能。 Postman 提供了三种方式创建 Mock Server，我们直接选择第一种，并以Postman官方给的例子来看下如何不写代码创建 Mock Server。</p><p>（1）打开 Postman， 点击&quot;+New&quot; button。</p>',22),d=s("p",null,'（2）在弹出来的"Create New"选项中点击 Mock Server 。',-1),v=s("p",null,'（3）Postman支持"Create a new API"或者"Use collection from this workspace"两种方式来创建 Mock Server。',-1),g=s("p",null,'简单起见，我们选择"Create a new API"。在下图中我们选择请求方法，可以是 GET、POST、UPDATE，也可以是 DELETE，也就是我们常说的增删查改。然后输入请求路径，需要返回的 HTTP 响应码，以及响应的 Body，可以模拟多个 API 接口。全部设置好后点击下一步。',-1),F=s("p",null,"（4）然后，你将看到下图 4 个需要配置的地方。",-1),q=s("ul",null,[s("li",null,[s("p",null,"输入 Mock Server 的名称。")]),s("li",null,[s("p",null,"选择一个环境（可选），通常我们的测试环境有好几个，你可以配置使用不同的测试环境。")]),s("li",null,[s("p",null,"是否要将 Mock Server 设为私有。")]),s("li",null,[s("p",null,"是否将 Mock Server 的 URL 保存为环境变量。")])],-1),_=s("p",null,"等你都配置好后，单击下一步继续。",-1),m=s("p",null,"（5）当你看到如下界面，说明配置成功。此时你的简易版 Mock Server 就生成了。记录下生成的 URL，然后在你的测试中调用相应的 URL 地址即可。",-1),M=p('<p>在本例中，我在第（3）步设置了 echo 这个接口，它是个 GET 请求，你就可以直接在浏览器输入 <a href="http://mock-server-url/echo" target="_blank" rel="noreferrer">http://mock-server-url/echo</a> 这样的方式来访问，需要替换这里 mock-server-url 为图中的地址。</p><p>如果是 POST 请求，你也可以自定义参数，Request Body 等。</p><h4 id="_2-自主编码实现-mock-server-flask" tabindex="-1">2.自主编码实现 Mock Server（Flask） <a class="header-anchor" href="#_2-自主编码实现-mock-server-flask" aria-label="Permalink to &quot;2.自主编码实现 Mock Server（Flask）&quot;">​</a></h4><p>使用第三方工具创建 Mock Server 比较简单，但是由于严重依赖于第三方工具，在实际工作中，一般用作开发完成后的第一轮手工测试。而<strong>业务上线后，在测试框架中使用时</strong>，我们还是倾向于根据业务规则自主编码实现 Mock Server。</p><p>当前，Github 上有很多成熟的 Mock Server 可供我们使用，根据编程语言的不同，最常见的有如下几个：</p><ul><li><p><a href="https://github.com/mock-server" target="_blank" rel="noreferrer">Java - Mock Server</a></p></li><li><p><a href="https://github.com/getsentry/responses" target="_blank" rel="noreferrer">Python - responses</a></p></li><li><p><a href="https://github.com/easy-mock/easy-mock" target="_blank" rel="noreferrer">JavaScript - easy Mock</a></p></li></ul><p>这些 Mock Server 的搭建非常简单，按照步骤操作即可，我就不再赘述。</p><p>下面我讲下 Mock Server 的另外一个普遍搭建过程，即使用<strong>Flask</strong>来充当 Mock Server。</p><blockquote><p>Flask 是一个微 Web 框架，使用 Python 语言编写。使用它可以快速完成功能丰富的中小型网站或 Web 服务的实现。</p></blockquote><p>（1）首先你要保证系统已经安装好 Flask，并确保你的机器有 Python 运行环境。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">pip install flask</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">pip install flask</span></span></code></pre></div><p>（2）创建一个 Python 文件，比如叫 easyMock.py.，代码如下：</p>',12),S=p(`<p>这段代码实现了这一功能：访问 <a href="http://127.0.0.1:5000" target="_blank" rel="noreferrer">http://127.0.0.1:5000</a>，直接返回&quot;hello world&quot;。</p><p>直接使用 GET 方式访问**<a href="http://127.0.0.1:5000/mock**%EF%BC%8C%E4%BC%9A%E5%87%BA%E7%8E%B0" target="_blank" rel="noreferrer">http://127.0.0.1:5000/mock**，会出现</a> 404 错误。</p><p>如果使用 POST 方式，假设提交的数据中包括&quot;name=kevin&quot;这个键值对，则返回如下结果：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;status&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;message&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;True&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;response&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">&quot;orderID&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">}}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;status&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;message&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;True&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;response&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">&quot;orderID&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">}}</span></span></code></pre></div><p>如果你提交的数据中不包括&quot;name=kevin&quot;， 则返回如下结果：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;status&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;message&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;False&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;response&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {}}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;status&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">400</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;message&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;False&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;response&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {}}</span></span></code></pre></div><p>如果代码在运行过程中发生了错误，则返回如下结果：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;status&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;message&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Server Error&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;response&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {}}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;status&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;message&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Server Error&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;response&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {}}</span></span></code></pre></div><p>这其实就是一个最简单的Mock Server。</p><p>（3）启动这个 Flask 服务。</p><p>打开命令行工具，在你的 Terimal 里运行以下命令行，以启动这个 Mock Server。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">python easyMock.py</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">python easyMock.py</span></span></code></pre></div><p>（4）测试 Mock Server。</p><p>首先安装 curl。</p><blockquote><p>curl 是一个利用 URL 语法在命令行方式下工作的文件传输工具。由于它支持 HTTP 协议及其请求方法，故也可以用来发送 HTTP 请求。</p></blockquote><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># curl的安装和配置，根据操作系统的不同，步骤也不同。</span></span>
<span class="line"><span style="color:#6A737D;"># 如果你使用pip， 可以直接以如下方式安装。 </span></span>
<span class="line"><span style="color:#E1E4E8;">pip install curl</span></span>
<span class="line"><span style="color:#6A737D;"># 如果你发现在你的操作系统下，上述安装方式不起作用，你可以直接在搜索引擎中搜索相关的安装方式。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># curl的安装和配置，根据操作系统的不同，步骤也不同。</span></span>
<span class="line"><span style="color:#6A737D;"># 如果你使用pip， 可以直接以如下方式安装。 </span></span>
<span class="line"><span style="color:#24292E;">pip install curl</span></span>
<span class="line"><span style="color:#6A737D;"># 如果你发现在你的操作系统下，上述安装方式不起作用，你可以直接在搜索引擎中搜索相关的安装方式。</span></span></code></pre></div><p>curl 常用的语法如下：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 直接发送GET请求</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">$</span><span style="color:#E1E4E8;"> curl https:</span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">www.helloqa.com</span></span>
<span class="line"><span style="color:#6A737D;"># 添加HTTP请求头访问</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">$</span><span style="color:#E1E4E8;"> curl </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">H </span><span style="color:#9ECBFF;">&quot;Content-type: application/json&quot;</span><span style="color:#E1E4E8;"> https:</span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">www.helloqa.com</span></span>
<span class="line"><span style="color:#6A737D;"># 指定HTTP请求</span></span>
<span class="line"><span style="color:#6A737D;"># -X 表示请求方法</span></span>
<span class="line"><span style="color:#6A737D;"># -d 表示发送 POST 请求的数据体</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">$</span><span style="color:#E1E4E8;"> curl </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">X </span><span style="color:#79B8FF;">POST</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">d </span><span style="color:#9ECBFF;">&#39;iTesting=Good&#39;</span><span style="color:#E1E4E8;"> https:</span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;">www.helloqa.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 直接发送GET请求</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">$</span><span style="color:#24292E;"> curl https:</span><span style="color:#D73A49;">//</span><span style="color:#24292E;">www.helloqa.com</span></span>
<span class="line"><span style="color:#6A737D;"># 添加HTTP请求头访问</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">$</span><span style="color:#24292E;"> curl </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">H </span><span style="color:#032F62;">&quot;Content-type: application/json&quot;</span><span style="color:#24292E;"> https:</span><span style="color:#D73A49;">//</span><span style="color:#24292E;">www.helloqa.com</span></span>
<span class="line"><span style="color:#6A737D;"># 指定HTTP请求</span></span>
<span class="line"><span style="color:#6A737D;"># -X 表示请求方法</span></span>
<span class="line"><span style="color:#6A737D;"># -d 表示发送 POST 请求的数据体</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">$</span><span style="color:#24292E;"> curl </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">X </span><span style="color:#005CC5;">POST</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">d </span><span style="color:#032F62;">&#39;iTesting=Good&#39;</span><span style="color:#24292E;"> https:</span><span style="color:#D73A49;">//</span><span style="color:#24292E;">www.helloqa.com</span></span></code></pre></div><p>最后，我们通过 curl 发送 HTTP 请求，来验证下搭建的 Mock Server 是否功能正确：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 通过curl直接调用，返回500</span></span>
<span class="line"><span style="color:#E1E4E8;">curl </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">H </span><span style="color:#9ECBFF;">&quot;Content-type: application/json&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">X </span><span style="color:#79B8FF;">POST</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">d </span><span style="color:#9ECBFF;">&#39;{&quot;name&quot;:&quot;kevin&quot;}&#39;</span><span style="color:#E1E4E8;"> http:</span><span style="color:#F97583;">//</span><span style="color:#79B8FF;">127.0</span><span style="color:#E1E4E8;">.0.1:</span><span style="color:#79B8FF;">5000</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">mock</span></span>
<span class="line"><span style="color:#6A737D;"># 返回400</span></span>
<span class="line"><span style="color:#E1E4E8;">curl </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">d</span><span style="color:#9ECBFF;">&#39;name=kevin＆&#39;</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">X </span><span style="color:#79B8FF;">POST</span><span style="color:#E1E4E8;"> http:</span><span style="color:#F97583;">//</span><span style="color:#79B8FF;">127.0</span><span style="color:#E1E4E8;">.0.1:</span><span style="color:#79B8FF;">5000</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">mock</span></span>
<span class="line"><span style="color:#6A737D;"># 返回200</span></span>
<span class="line"><span style="color:#E1E4E8;">curl </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">d</span><span style="color:#9ECBFF;">&#39;name=kevin&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">X </span><span style="color:#79B8FF;">POST</span><span style="color:#E1E4E8;"> http:</span><span style="color:#F97583;">//</span><span style="color:#79B8FF;">127.0</span><span style="color:#E1E4E8;">.0.1:</span><span style="color:#79B8FF;">5000</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">mock</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 通过curl直接调用，返回500</span></span>
<span class="line"><span style="color:#24292E;">curl </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">H </span><span style="color:#032F62;">&quot;Content-type: application/json&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">X </span><span style="color:#005CC5;">POST</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">d </span><span style="color:#032F62;">&#39;{&quot;name&quot;:&quot;kevin&quot;}&#39;</span><span style="color:#24292E;"> http:</span><span style="color:#D73A49;">//</span><span style="color:#005CC5;">127.0</span><span style="color:#24292E;">.0.1:</span><span style="color:#005CC5;">5000</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">mock</span></span>
<span class="line"><span style="color:#6A737D;"># 返回400</span></span>
<span class="line"><span style="color:#24292E;">curl </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">d</span><span style="color:#032F62;">&#39;name=kevin＆&#39;</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">X </span><span style="color:#005CC5;">POST</span><span style="color:#24292E;"> http:</span><span style="color:#D73A49;">//</span><span style="color:#005CC5;">127.0</span><span style="color:#24292E;">.0.1:</span><span style="color:#005CC5;">5000</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">mock</span></span>
<span class="line"><span style="color:#6A737D;"># 返回200</span></span>
<span class="line"><span style="color:#24292E;">curl </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">d</span><span style="color:#032F62;">&#39;name=kevin&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">X </span><span style="color:#005CC5;">POST</span><span style="color:#24292E;"> http:</span><span style="color:#D73A49;">//</span><span style="color:#005CC5;">127.0</span><span style="color:#24292E;">.0.1:</span><span style="color:#005CC5;">5000</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">mock</span></span></code></pre></div><p>可以看到，根据我的输入不同，Mock Server 返回了期望的结果。</p><p>至此，你的 Mock Server 已经搭建完毕。之后在你的测试代码里，涉及调用第三方应用的情况，你就可以直接转而调用 Mock Server 来继续你的测试了。当然，你的 Mock Server 实现要考虑第三方应用的业务逻辑和输出结果的格式、参数以及数据等方面。</p><p>不知道你有没有注意到，Mock Server 无论是上述哪种方式的创建，都需要一点点工作量，而且都有如下弊端：</p><ul><li><p>你无法向真正的服务器发送请求，你的所有请求都发送至 Mock Server。</p></li><li><p>在真实服务器可以提供工作，或由 Mock Server 向真实服务器之间进行切换时，可能由于<strong>人为原因</strong>导致错误。比如，有的地方你替换了真实服务器，有点地方你仍调用 Mock Server。</p></li></ul><p>那么，有没有办法可以实现：我直接向真实的服务器发送请求，同时我要求真实的服务器根据我的需要，来返回 Mock 数据或者真实的服务器响应数据呢？</p><p>当然有了，利用新一代前端自动化测试框架 Cypress 可以不写代码便能完成如上请求。Cypress 是新一代端到端测试神器，被誉为 Selenium/WebDriver 杀手和 Web 端自动化测试技术的未来。</p><blockquote><p>关于如何利用 Cypress 搭建 MockServer，实现更高效的 Mock，大家可以参考下我今年出版的新书《前端自动化测试框架 -- Cypress 从入门到精通》。</p></blockquote><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>下面我来总结下本章学习的内容。本章我先是从 Mock 的定义出发，讲解了 Mock Server 的含义、常用场景，以及 Mock Server 在我们开发测试中的重要性，接着又采用两种方式实现了Mock Server，分别是：</p><ul><li><p>使用 API 接口工具 Postman。它的优点是无须编程，缺点是生成是 Server URL 地址无法更改。</p></li><li><p>使用 Python 的 Flask 框架编程。它的优点是可以把 Mock Server 集成至自己的测试框架中，缺点是需要一定的编程能力。</p></li></ul><p>Mock Server 作为破除环境依赖的利器，能够大大提升我们的测试效率，希望通过这些内容，让你彻底掌握 Mock Server。如果你希望掌握更前沿的 Mock 技术，也可以去了解 Cypress 框架，让自己更上一层楼。</p><p>我是蔡超，我们下节课再见。</p><p>更多关于测试框架、Mock Server、PostMan 使用的知识，请关注公众号 iTesting 查看。</p><hr><p><a href="https://wj.qq.com/s2/7506053/9b01" target="_blank" rel="noreferrer">课程评价入口，挑选 5 名小伙伴赠送小礼品～</a></p>`,35);function C(A,D,b,T,P,B){const a=e("Image");return t(),r("div",null,[y,i,E,u,k,n(a,{alt:"图片1.png",src:"https://s0.lgstatic.com/i/image/M00/71/5D/Ciqc1F--FzGAXZ6WAAMdoZK9qV4023.png"}),o(),h,n(a,{alt:"图片2.png",src:"https://s0.lgstatic.com/i/image/M00/71/68/CgqCHl--Fx6ARgtQAAJ9oo1jikM473.png"}),o(),d,n(a,{alt:"图片3.png",src:"https://s0.lgstatic.com/i/image/M00/71/5D/Ciqc1F--FzyAMKe3AAJtlj-EnM4677.png"}),o(),v,g,n(a,{alt:"图片4.png",src:"https://s0.lgstatic.com/i/image/M00/71/69/CgqCHl--F0WATe6SAAIT0U9K5xI725.png"}),o(),F,n(a,{alt:"图片5.png",src:"https://s0.lgstatic.com/i/image/M00/71/5D/Ciqc1F--F02AUHoXAAI1JkHHCBM654.png"}),o(),q,_,m,n(a,{alt:"图片6.png",src:"https://s0.lgstatic.com/i/image/M00/71/5D/Ciqc1F--F1WAG2HEAAIVgTJq3fU557.png"}),o(),M,n(a,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/70/B7/CgqCHl-7kfKAPZUaAAG9yxU5oGo024.png"}),o(),S])}const I=l(c,[["render",C]]);export{w as __pageData,I as default};
