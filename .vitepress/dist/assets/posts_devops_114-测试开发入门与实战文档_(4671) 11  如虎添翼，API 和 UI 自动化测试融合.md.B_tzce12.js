import{_ as t,F as p,g as h,K as a,h as n,ar as s,o as k}from"./chunks/framework.VlluEs-f.js";const A=JSON.parse('{"title":"11如虎添翼，API和UI自动化测试融合","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/114-测试开发入门与实战文档/(4671) 11  如虎添翼，API 和 UI 自动化测试融合.md","filePath":"posts/devops/114-测试开发入门与实战文档/(4671) 11  如虎添翼，API 和 UI 自动化测试融合.md","lastUpdated":1718371218000}'),l={name:"posts/devops/114-测试开发入门与实战文档/(4671) 11  如虎添翼，API 和 UI 自动化测试融合.md"},e=s('<h1 id="_11如虎添翼-api和ui自动化测试融合" tabindex="-1">11如虎添翼，API和UI自动化测试融合 <a class="header-anchor" href="#_11如虎添翼-api和ui自动化测试融合" aria-label="Permalink to &quot;11如虎添翼，API和UI自动化测试融合&quot;">​</a></h1><p>经过从第一节课迄今为止的学习，我们已经具备了测试开发的初级能力------ 搭建你的第一个 Web 端自动化测试框架，以及 API 端自动化测试框架。</p><p>从今天开始，我们要开启我们这一专栏的第三个模块 &quot;能力修炼，全面掌握多项技能&quot;，在这个模块里，我们将继续深入学习测试框架的各种高级技能。</p><h3 id="为什么要融合-api-测试和-ui-测试" tabindex="-1">为什么要融合 API 测试和 UI 测试？ <a class="header-anchor" href="#为什么要融合-api-测试和-ui-测试" aria-label="Permalink to &quot;为什么要融合 API 测试和 UI 测试？&quot;">​</a></h3><p>当你完成了第一个 Web 自动化测试框架和 API 自动化测试框架的搭建后，你会考虑这样一个问题：&quot;这两个框架能融合吗？&quot;</p><p>我们在分层测试那个章节讲过，在测试中，应该不断地去调整我们的测试用例，把测试的能力下沉，也就是<strong>多做底层的测试</strong> 。那么如果我们能够实现 Web 自动化测试框架和 API 自动化测试框架的融合，这就意味着<strong>针对同一个功能， 不必 API 层覆盖一次，UI 层再覆盖一次</strong>。</p><p>还有自动化测试在日常工作中，除去用于日常的功能回归外，还有一部分核心业务对应的测试用例是用作 Smoke Test。特别是自动化测试集成到 CI/CD 平台后，开发人员的每一次代码提交，都将会触发这个测试，如果这个测试不通过，那么开发的代码是无法提交到 develop 分支的。</p><p><strong>这就带来了以下显而易见的需求。</strong></p><ul><li>确保构建失败一定不是由自动化测试代码本身引起的。</li></ul><p>当开发人员提交新代码时，构建系统依据最新的代码打包进行环境部署，之后将在这个环境上调用自动化测试来确保新的代码没有问题。</p><p>当测试失败，开发的代码必然不能提交，于是开发将会仔细检查出错的位置来寻找出错的 root cause。如果有多次发现错误的原因是由测试代码本身引起的，那么必然会招致开发人员反感，进而影响自动化测试跟 CI/CD 系统进一步集成。</p><ul><li>如何缩短自动化测试代码的整体运行时长？</li></ul><p>自动化测试代码的整体运行时间越短越好，开发等待测试验证的时间越短，越认可测试这一工种；反之，测试人员的产出不仅得不到认可，还会客观上拖慢发布速度，降低开发效率。整体来说，这部分验证以 5~10 分钟最好，最好不要超过 30 分钟。</p><p><strong>那么怎么让自动化测试脚本的运行既稳定又耗时短呢？</strong></p><ul><li>尽可能多地把核心业务放到 API 层进行功能验收。</li></ul><p>这个容易理解，即多个接口请求串连，以达到验证业务功能的目的。</p><ul><li>端到端自动化测试， &quot;非测试部分&quot;尽量用 API 请求代替。</li></ul><p>日常测试，特别是在 UI 自动化测试中，非测试部分往往占据了比测试部分还要多的时间，我们知道链条越长，越容易出问题，故必须把&quot;非测试部分&quot;简化。</p><blockquote><p>什么是&quot;非测试部分&quot;？一切自动化测试都遵循如下顺序：各种操作使应用程序到达待测试状态 --- 开始测试 --- 测试验证。 在这个顺序中，&quot;开始测试&quot;前的所有操作都属于非测试部分，这部分最好用 API 代替。</p><p>举个例子，我们要测试下单功能，只有下单这个操作本身才是我们的测试范围， 在下单之前的所有操作，例如用户注册---用户登录---用户绑卡---选定商品，这一系列操作都属于&quot;非测试部分&quot;。</p></blockquote><h3 id="api-测试和-ui-测试融合的关键点" tabindex="-1">API 测试和 UI 测试融合的关键点 <a class="header-anchor" href="#api-测试和-ui-测试融合的关键点" aria-label="Permalink to &quot;API 测试和 UI 测试融合的关键点&quot;">​</a></h3><p>我们来看下阻挠这两个框架融合的关键点在哪里？仍然以下单为例， 我们的步骤是：<strong>用户注册 --- 用户登录 --- 用户绑卡 --- 选定商品</strong>---下单 --- 验证下单成功。黑色粗体部分应该简化，尽可能少的占用我们的测试时间，因为它们不是本次测试的目标。</p><p>我们可以直接操作 DB 或者通过 API 接口请求来简化，那么这两种方式孰优孰劣呢？</p><p>先看下直接操作 DB，创建一个账户并绑定银行卡，选定好商品。这个速度很快，但直接 DB 操作通常比较麻烦，特别是数据表的关联太多，还容易出错。</p><p>那么就剩下 API 接口请求了，假设我们 API 接口请求全部操作成功了，现在应用程序已经到达待测试状态，我们需要通过 UI 自动化测试来继续后续的操作。</p><p>那么问题来了，如何才能直接操作浏览器继续下单呢？服务器允许我直接访问下单页面吗？下单时服务器知道是我在下单吗？</p><p>我们来逐一解答。要下单，我必须知道我买了哪些商品，下单的 URL 链接要有。假设我有下单的 URL 链接，我可以直接通过浏览器直接访问这个链接，但是通常应用程序必须要求我登录才行；假设我登录了，我下单但同时别人也在下单， 服务器能区分哪个订单是我下的，哪个订单是别人下的吗？</p><p><strong>于是所有这些问题都指向：如何在会话（Session）中保持登录态？</strong></p><h3 id="在会话中保持登录态" tabindex="-1">在会话中保持登录态 <a class="header-anchor" href="#在会话中保持登录态" aria-label="Permalink to &quot;在会话中保持登录态&quot;">​</a></h3><p>我们都知道 HTTP 协议是无状态的协议，多个 HTTP 请求之间，是不会保存状态信息的。也就说，你发一个请求过来，服务器不知道是你发的还是别人发的，要想保持这个登录的状态，必须有 Cookie、Session 甚至 Token 的支持才行。</p><ul><li><p><strong>Cookie</strong>：为了辨别用户身份进行 Session 跟踪，而储存在用户本地终端上的数据（通常经过加密），由用户客户端计算机暂时或永久保存。</p></li><li><p><strong>Session</strong>：称为&quot;会话控制&quot;。</p></li></ul><p>Session 对象存储特定用户会话所需的属性及配置信息。当用户在应用程序的 Web 页之间跳转时，存储在 Session 对象中的变量将不会丢失，而是在整个用户会话中一直存在下去。当用户请求来自应用程序的 Web 页时，如果该用户还没有会话，则 Web 服务器将自动创建一个 Session 对象。当会话过期或被放弃后，服务器将终止该会话。</p><ul><li><strong>Token</strong>：是服务端生成的一串字符串，作为客户端进行请求的一个标识。</li></ul><p>当用户第一次登录后，服务器生成一个token并将此token返回给客户端，以后客户端只需带上这个token前来请求数据即可，无须再次带上用户名和密码。</p><blockquote><p>你可进入我的公众号 iTesting 查看文章<a href="https://mp.weixin.qq.com/s/i-xmWec09MCIK_AOBzHZdw" target="_blank" rel="noreferrer">《Cookie, Session, Token，WebStorage你懂多少?》</a>，了解更多关于它们的区别、侧重点，以及使用范围，</p></blockquote><h3 id="融合-api-测试和-ui-自动化测试-代码实践" tabindex="-1">融合 API 测试和 UI 自动化测试 --- 代码实践 <a class="header-anchor" href="#融合-api-测试和-ui-自动化测试-代码实践" aria-label="Permalink to &quot;融合 API 测试和 UI 自动化测试 --- 代码实践&quot;">​</a></h3><p>通过上面小节的学习，我们已经知道关键点在于登录态的保持。而把 API 测试和 UI 测试融合， 我们还需要：</p><ul><li><p>各个接口请求之间保持登录态；</p></li><li><p>各个 UI 请求中保持登录态；</p></li><li><p>当从 API 请求切换到 UI 操作时，登录态应该从接口请求中带过来。</p></li></ul><p>第一点，各个接口请求之间保持登录态，可以通过 requests.Session() 完成。</p><blockquote><p>这部分我在 <strong>&quot;09 | 你的第一个API测试框架&quot;</strong> 中的 <strong>&quot;Requests 保存 session&quot;</strong> 小节中详细讲过，你可以回顾复习一下。</p></blockquote><p>第二点，假设我们操作浏览器登录，那么登录后，浏览器的 Cookies 里会保存维持登录状态的 cookie。那么唯一的问题就出现了------如何不通过浏览器登录，而把 API 登录后的状态保存到浏览器 cookie 里？</p><p>下面我们来看一个真实的例子：假设我要访问 <a href="https://ones.ai/project/" target="_blank" rel="noreferrer">https://ones.ai/project/</a> 这个网站，我的需求是登录后检查我的项目 VIPTEST 是否存在，如下图所示：</p>',41),r=s(`<p>下面直接上代码，看下我是如何融合 API 和 UI 测试的。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># test_ones.py</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -*- coding: utf-8 -*- </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> json</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requests</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pytest</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> selenium </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> webdriver</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> selenium.webdriver.common.by </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> By</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> selenium.webdriver.support.ui </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WebDriverWait</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> selenium.webdriver.support </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> expected_conditions </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> EC</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 把获取的cookie转换成Selenium/WebDriver能识别的格式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cookie_to_selenium_format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cookie):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cookie_selenium_mapping </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;path&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;secure&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;value&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;expires&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cookie_dict </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> getattr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cookie, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;domain_initial_dot&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        cookie_dict[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;domain&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;.&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> getattr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cookie, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;domain&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        cookie_dict[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;domain&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> getattr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cookie, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;domain&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> k </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cookie_selenium_mapping.keys()):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> k</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> getattr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cookie, k)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        cookie_dict[key] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cookie_dict</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestOneAI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在pytest里，针对一个类方法的setup为setup_method,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # setup_method作用同unittest里的setUp()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup_method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, method):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requests.Session()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.login_url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://ones.ai/project/api/project/auth/login&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.home_page </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://ones.ai/project/#/home/project&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.header </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;user-agent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user-agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;content-type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.driver </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> webdriver.Chrome()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 使用了pytest里的参数化</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @pytest.mark.parametrize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;login_data, project_name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [({</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;password&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;iTestingIsGood&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pleasefollowiTesting@outlook.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;project_name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;VIPTEST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test_merge_api_ui</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, login_data, project_name):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 接口登录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.s.post(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.login_url, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">json.dumps(login_data), </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">headers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.header)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 断言登录成功</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result.status_code </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> json.loads(result.text)[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].lower() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> login_data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 根据实际情况解析cookies，此处需结合业务场景</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        all_cookies </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.s.cookies._cookies[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.ones.ai&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 删除所有cookies</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.driver.get(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.home_page)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.driver.delete_all_cookies()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 把接口登录后的cookie塞到Selenium driver里去，传递登录状态</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> k, v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> all_cookies.items():</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.driver.add_cookie(cookie_to_selenium_format(v))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 再次访问目标页面，此时登录状态已经传递过来了</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.driver.get(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.home_page)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 查找项目元素，获取元素的值，并进行断言</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 注意，此时我浏览器操作就不需再登录了</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            element </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WebDriverWait(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.driver, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).until(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                EC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.presence_of_element_located((By.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CSS_SELECTOR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;[class=&quot;company-title-text&quot;]&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 断言我的项目存在</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.get_attribute(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;innerHTML&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> project_name[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;project_name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        except</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TimeoutError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            raise</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TimeoutError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Run time out&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在pytest里，针对一个类方法的teardown为teardown_method,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # teardown_method作用同unittest里的dearDown()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> teardown_method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, method):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.s.close()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.driver.quit()</span></span></code></pre></div><p>直接在命令行执行：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pytest test_ones.py</span></span></code></pre></div><p>结果如下：</p>`,5),E=s('<h3 id="融合-api-测试和-ui-自动化测试-代码解析" tabindex="-1">融合 API 测试和 UI 自动化测试 --- 代码解析 <a class="header-anchor" href="#融合-api-测试和-ui-自动化测试-代码解析" aria-label="Permalink to &quot;融合 API 测试和 UI 自动化测试 --- 代码解析&quot;">​</a></h3><p>上面这段代码不算复杂，我来逐一解释下：</p><p>1.<strong>首先，我创建了一个 .py 文件在 lagouAPITest 下的 tests 文件夹中，名为 test_ones.py.</strong></p><p>2.<strong>接着，我定义了一个方法 cookie_to_selenium_format 用来进行 cookie 解析和转换。</strong></p><p>为什么要定义这个方法？ 因为通过接口 requests.Session() 发送请求拿到的 cookies 格式，与通过浏览器（self.driver.get_cookies()）拿到的 cookies 格式是不一样的。接口请求拿到的 cookie 要想在浏览器里使用，必须转换成浏览器支持的格式。</p><blockquote><p>cookie_to_selenium_format 是一个通用的方法，你同样可以将其用到其他网站。</p></blockquote><p>3.<strong>其次，我创建了一个测试类 TestOneAI，并设置了 setup 和 teardown 操作。</strong></p><p>setup_method 用于测试开始前初始化 requests.Session() 实例，以及 WebDriver 实例，并且指定了接口请求使用的接口地址和通过 UI 直接访问的页面地址。teardown_method 用于测试结束后关闭 Session，以及 WebDriver 实例。</p><p>4.<strong>然后，我创建了我们的测试方法 test_merge_api_ui。</strong></p><p>在这个测试方法里，我首先是要 self.s，即 requests.Session() 进行<strong>接口登录；<strong>登录成功后，我</strong> 解析获取到的 cookies，<strong>并通过刚刚提到的函数 cookie_to_selenium_format 转换为 Selenium/webDriver 可以识别的 cookie 格式；然后把拿到的每一个 cookie，使用 Selenium 里的 add_cookie 方法</strong>塞到浏览器的 Driver 里</strong>。因为这些 cookies 中保留了登录的信息，所以当此操作完成后，我再使用浏览器进行页面操作，就无须登录了。</p><p>由此，API 测试和 UI 测试就融合了。在后续测试中，我可以按照需要或者直接发送接口请求，或者通过 UI 访问，就都不会出错了。因为登录信息已经在 self.s.cookies 和 self.driver 里保存了。</p><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><p>在自动化测试过程中，进行 API 测试和 UI 测试的融合非常必要，它可以提高测试的稳定性，并减少测试时间。</p><p>API 测试和 UI 测试融合的关键点在于<strong>保持登录态</strong>。 在我们真正的工作场景中，像我介绍的这个例子一样，在生产环境直接请求登录接口就可以完成登录的情况是非常稀有的。</p><p><strong>真正的接口请求常常被隐藏，并且你的参数会经过多次加密，加盐（SALT）才能请求到真正的登录接口。所以你需要与开发紧密合作，去详细了解登录的实现逻辑，这样才能实现 API 测试和 UI 测试的融合。</strong></p><p>好了，本节课就到这里。下节课，我将把我们之前的所有项目按照 Page Object 模型重新梳理，让你的框架组织看起来更清晰，更改起来更容易。</p><p>想要了解更多关于测试开发的介绍，可关注我的公众号 iTesting。</p><hr><p><a href="https://wj.qq.com/s2/7506053/9b01" target="_blank" rel="noreferrer">课程评价入口，挑选 5 名小伙伴赠送小礼品～</a></p>',19);function o(d,g,y,F,c,u){const i=p("Image");return k(),h("div",null,[e,a(i,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/5E/8A/CgqCHl-GzHaACZmsAAAzhyODqqU451.png"}),n(),r,a(i,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/5E/7F/Ciqc1F-GzK-AQwtcAACFI2rwjO0294.png"}),n(),E])}const C=t(l,[["render",o]]);export{A as __pageData,C as default};
