import{_ as h,F as e,g as n,K as t,h as i,l as s,ar as p,o as l}from"./chunks/framework.VlluEs-f.js";const ss=JSON.parse('{"title":"16逻辑漏洞：你的订单信息是如何泄露的？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/Web 安全攻防之道_文档/(5984) 16  逻辑漏洞：你的订单信息是如何泄露的？.md","filePath":"posts/devops/Web 安全攻防之道_文档/(5984) 16  逻辑漏洞：你的订单信息是如何泄露的？.md","lastUpdated":1718371218000}'),k={name:"posts/devops/Web 安全攻防之道_文档/(5984) 16  逻辑漏洞：你的订单信息是如何泄露的？.md"},r=s("h1",{id:"_16逻辑漏洞-你的订单信息是如何泄露的",tabindex:"-1"},[i("16逻辑漏洞：你的订单信息是如何泄露的？ "),s("a",{class:"header-anchor",href:"#_16逻辑漏洞-你的订单信息是如何泄露的","aria-label":'Permalink to "16逻辑漏洞：你的订单信息是如何泄露的？"'},"​")],-1),o=s("p",null,"本节课开始介绍越权漏洞，这是一种偏业务逻辑处理缺陷的漏洞，不仅是 Web 应用，许多应用场景中会可能会遇到。",-1),d=s("p",null,'比如去年 12 月底，因北京健康宝网站存在越权漏洞，导致了"明星健康宝照片泄露"事件，大量用户的个人信息被窃取，其中不乏明星的姓名、身份证、素颜照等个人隐私信息。',-1),g=p(`<p>图 1 记者获得的 1000 多位明星身份证号等信息</p><p>越权漏洞是很多应用中比较常见的漏洞类型，它是在授权逻辑上存在安全缺陷导致的问题。在基于用户提供的输入对象直接访问，而未进行有效鉴权，导致一些超出预期的操作行为，可能导致信息泄露或者提权，具体危害的大小取决于业务场景，所以对越权漏洞的理解依赖于你对业务逻辑的理解深度。</p><p>当前国际上习惯将越权漏洞称为 IDOR（Insecure Direct Object Reference，不安全的对象引用），在 HackerOne 上公开的漏洞案例中，你以关键词 IDOR 去搜索，就可以找到不少真实的企业漏洞案例。</p><h3 id="越权漏洞的分类" tabindex="-1">越权漏洞的分类 <a class="header-anchor" href="#越权漏洞的分类" aria-label="Permalink to &quot;越权漏洞的分类&quot;">​</a></h3><p>根据越权对象的差异，可以分析水平越权和垂直越权。</p><h4 id="_1-水平越权" tabindex="-1">1.水平越权 <a class="header-anchor" href="#_1-水平越权" aria-label="Permalink to &quot;1.水平越权&quot;">​</a></h4><p>假设用户 A 与用户 B 属于相同权限等级的用户，当用户 A 能够访问用户 B 的私有数据时，就称为水平越权。</p><p>以 Pikachu 靶场的水平越权题目为例，下图是个登录界面，先点击下&quot;点一下提示&quot;获得 3 个账号及其密码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lucy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123456</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lili</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123456</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kobe</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123456</span></span></code></pre></div>`,9),c=s("p",null,"图 2 水平越权题目",-1),_=s("p",null,'先用 lucy 的账号密码登录，点击"点击查看个人信息"，页面返回 lucy 的个人信息：',-1),E=p('<p>图 3 查看个人信息</p><p>同时用 Chrome Network 抓包，得到查看个人信息的 GET 请求地址和参数：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:8080/vul/overpermission/op1/op1_mem.php?username=lucy&amp;submit=%E7%82%B9%E5%87%BB%E6%9F%A5%E7%9C%8B%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF</span></span></code></pre></div><p>前面已经密码验证过了，如果此时修改 username 为其他账号，是否会获得其他用户的个人信息呢？</p><p>下面修改 username 为 lili，发起请求：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:8080/vul/overpermission/op1/op1_mem.php?username=lili&amp;submit=点击查看个人信息</span></span></code></pre></div>',6),A=p(`<p>图 4 水平越权获取他人隐私信息</p><p>如上图所示，成功获取 lili 的个人信息，说明这里存在越权漏洞，且属于水平越权，因为从原定权限看，两者的权限等级是相同的。</p><p>你可以自己动手尝试下，看能否获取用户 kobe 的个人信息。</p><h4 id="_2-垂直越权" tabindex="-1">2.垂直越权 <a class="header-anchor" href="#_2-垂直越权" aria-label="Permalink to &quot;2.垂直越权&quot;">​</a></h4><p>假设用户 A 是普通用户，用户 B 是管理员，当用户 A 能够访问用户 B 的私有数据时，就称为垂直越权，又称为权限提升。</p><p>以 Pikachu 靶场的垂直越权题目为例，如下图所示，它也是个登录界面，先点击下&quot;点一下提示&quot;获得 2 个账号及其密码，其中 admin 是管理员账号：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">admin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123456</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pikachu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">000000</span></span></code></pre></div>`,7),u=s("p",null,"图 5 Pikachu 靶场垂直越权题目",-1),y=s("p",null,"分别登录这 2 个账号看下有啥区别，下图是 admin 登录后返回的信息，可以看它拥有添加和删除用户的权限：",-1),m=p('<p>图 6 admin 管理界面</p><p>为方便后面测试，先记录添加与删除用户的请求数据。</p><p>先点击用户 vince 一行所在的&quot;删除&quot;按钮，删除用户 vince 并抓包，得到请求数据：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:8080/vul/overpermission/op2/op2_admin.php?id=1</span></span></code></pre></div><p>再点击&quot;添加用户&quot;，然后填写信息并点击&quot;创建&quot;：</p>',5),D=p(`<p>图 7 添加用户</p><p>同时抓包获得请求数据：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">POST http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:8080/vul/overpermission/op2/op2_admin_edit.php</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">username</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">test</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">test</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">94</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">B7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">phonenum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">13666666666</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">email</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">test</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">40gmail.com</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">address</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">test</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">submit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">88</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">9B</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BB</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BA</span></span></code></pre></div><p>我们再回头登录看下普通用户 pikachu 登录后的情况。</p>`,4),C=p('<p>图 8 pikachu 的查看页面</p><p>试想下，普通用户 pikachu 如何才能拥有 admin 一样的增加与删除用户的权限呢？</p><p>在当前用户为 pikachu 的情况下，尝试删除用户，构造如下请求去删除 id=2 的用户：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:8080/vul/overpermission/op2/op2_admin.php?id=2</span></span></code></pre></div><p>访问后 302 跳转到登录界面，且并没有删除成功，说明这里没有越权漏洞。</p>',5),F=p(`<p>图 9 构造删除用户的请求后，被重定向到登录界面</p><p>接下来看看添加用户的接口是否存在越权，在当前用户为 pikachu 的情况下，构建如下请求，添加一个用户名密码均为 hacker 的账号：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">POST http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:8080/vul/overpermission/op2/op2_admin_edit.php</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">username</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hacker</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hacker</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">94</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">B7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">phonenum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">13666666666</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">email</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">test</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">40gmail.com</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">address</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">test</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">submit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">88</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">9B</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BB</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">B</span></span></code></pre></div><p>这里我使用 HackBar 去构造 POST 请求，请求后会跳转到登录界面，重新用 pikachu 登录可以看到 hacker 账号已经创建成功，说明我们已经越权成功，这里属于提升权限，所以它属于垂直越权漏洞。</p>`,4),b=p('<p>图 10 越权添加用户</p><h3 id="越权漏洞的检测与利用" tabindex="-1">越权漏洞的检测与利用 <a class="header-anchor" href="#越权漏洞的检测与利用" aria-label="Permalink to &quot;越权漏洞的检测与利用&quot;">​</a></h3><p>对于越权漏洞的检测与利用基本是一回事，因为它偏于业务逻辑缺陷，当你检测到的时候，基本等同于利用了，所以此处我把它们放在一块儿谈。</p><p>越权漏洞的检测与利用，长期以来大多是以手工测试或半自动测试为主，因为背后涉及一些业务逻辑功能的理解。对于自己公司内部业务做一些定制化的全自动检测也是可行的，比如掌握各类用户权限情况、涉及权限验证的敏感操作请求等等情况，就可以尝试自动切换用户或删除登录态去执行敏感操作，以此判断是否存在越权漏洞，再进行人工最终确认。</p><blockquote><p>关于自动化扫描越权漏洞，推荐<a href="https://mp.weixin.qq.com/s/yMpAiue7OT1I8E3C5Dkngw" target="_blank" rel="noreferrer">《越权扫描器碎碎念》</a>一文。</p></blockquote><p>下面我会介绍一些用来检测越权漏洞的常用工具，主要是一些 BurpSuite 插件，都可以通过 BurpSuite 插件库 BApp Store 找到并安装，不过安装速度可能很慢，甚至是多尝试几次才能安装成功。</p><p>这种情况可以尝试手工安装，先从 <a href="https://portswigger.net/bappstore/f9bbac8c4acf4aefa4d7dc92a991af2f" target="_blank" rel="noreferrer">BApp Store 官网</a>下载插件的 bapp 文件到本地，然后点击&quot;Manual install ...&quot;选择下载的文件进行安装。</p>',7),v=s("p",null,"图 11 Manual install",-1),S=s("p",null,"下面介绍的这些工具都是刷漏洞奖励平台的利器，而且越权漏洞跟别人撞洞的概率也会相对低些，有些奖金也不低。",-1),T=s("h4",{id:"_1-authz",tabindex:"-1"},[i("1.Authz "),s("a",{class:"header-anchor",href:"#_1-authz","aria-label":'Permalink to "1.Authz"'},"​")],-1),B=s("p",null,"Authz 的使用比较简单，在 BurpSuite 中将需要测试的请求发送到 Authz：",-1),P=s("p",null,"图 12 发送请求到 Authz",-1),q=s("p",null,'之后修改 Cookie 值为其他用户，也可以是其他请求头信息，待准备测试的请求收集完后，点击"Run"按钮即可。如果原响应内容长度、状态码和被修改请求后的响应内容长度、状态码一致，则会被标为绿色，表示可能存在越权漏洞。',-1),f=s("p",null,"图 13 Authz",-1),I=s("p",null,'以普通用户 pikachu 直接访问绿色的 URL，可以直接打开"添加用户"的界面进行操作，这原来是管理员 admin 才拥有的权限，非常明显的越权行为。',-1),w=s("p",null,'图 14 普通用户越权访问"添加用户"管理页面',-1),V=s("h4",{id:"_2-autorize",tabindex:"-1"},[i("2.Autorize "),s("a",{class:"header-anchor",href:"#_2-autorize","aria-label":'Permalink to "2.Autorize"'},"​")],-1),x=s("p",null,"Autorize 会对客户端发送的所有请求数据进行修改后重放，主要是将其他用户的 Cookie 替换当前用户的 Cookie，或者其他授权验证相关的请求头。",-1),M=s("p",null,"Autorize 不用像 Authz 那样挑选请求并发送到插件，它可以直接配置要替换的头信息，包括 Cookie 或者其他验证头信息，同时支持作用域过滤器，用来筛选我们感兴趣的请求，避免收到大量的无用结果。",-1),R=s("p",null,"图 15 将其他用户的 Cookie 配置到 Autorize 进行替换",-1),j=s("p",null,"之后也是通过对比修改前后的响应结果来判断越权漏洞是否存在，若响应长度和状态码一样，那就有可能存在越权漏洞。不过，有时候也需要人工难证下，有可能一些页面本身就是允许任意用户访问的，需要分析下原设定的正常业务逻辑。",-1),z=s("h4",{id:"_3-auto-repeater",tabindex:"-1"},[i("3.Auto Repeater "),s("a",{class:"header-anchor",href:"#_3-auto-repeater","aria-label":'Permalink to "3.Auto Repeater"'},"​")],-1),Y=s("p",null,"像 Authz 这种挑选请求并发送到插件的方式，测试效率会低一些，没有 Auto Repeater 高效。",-1),N=s("p",null,"Auto Repeater 功能相对 Autorize 更多更复杂一些，可以理解为是它的扩展版，是基于自动请求重放与响应比对的方式进行检测的，它可以对更加具体的请求参数进行测试，比如 PHPSESSID、SID、UID 等涉及用户身份的参数，支持正则匹配与替换。",-1),G=s("p",null,'点击"Active AutoRepeater"开启，再添加替换规则。比如，我想替换 Cookie 中的 PHPSESSID 参数值，可以在 Replacements 中添加替换规则，然后在 Base Replacements 下为 cookie 配置一个规则，Type 选择"Match Cookie Name, Replace Value"Match 设置为 Cookie 名称 PHPSESSID，替换为权限较低的用户的 Cookie 值。',-1),H=s("p",null,"图 16 设置替换规则",-1),O=s("p",null,"在之后的捕获的请求中，若满足匹配条件就会自动修改数据并重新发送请求，用户再根据响应结果是否有差异来判断是否存在越权漏洞，可以通过 Logs 设置颜色标记来区分，避免请求过多时，浪费过多时间排查验证。",-1),W=p('<p>图 17 Auto Repeater Logs</p><h3 id="防御越权漏洞" tabindex="-1">防御越权漏洞 <a class="header-anchor" href="#防御越权漏洞" aria-label="Permalink to &quot;防御越权漏洞&quot;">​</a></h3><p>由于越权漏洞涉及业务逻辑，靠 WAF、RASP 那些安全系统是没有用的，更重要的是在开发设计时提前考虑好权限控制与校验问题，可以尝试从以下几方面入手：</p><ol><li><p><strong>整体的权限调节</strong>：每次访问一个对象时，都要检查访问是否授权，特别是对于安全很关键的对象。不要像前面的靶场题目那样，密码验证过后，后续的敏感对象操作都不再验证，这样很容易导致漏洞。</p></li><li><p><strong>最低权限原则</strong>：只授予执行操作所必需的最小访问权限，并且对于该访问权只准许使用所需的最少时间。</p></li><li><p><strong>前后端双重验证</strong>：在涉及敏感操作行为时，前端与后端同时对用户输入数据进行权限校验，尤其是前端校验特别容易被改包绕过。</p></li><li><p><strong>对于特别敏感的操作增设密码或安全问题等验证方式</strong>：比如修改密码要求输入原密码。</p></li></ol><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><p>越权漏洞属于业务逻辑型漏洞，常见一些业务功能场景，比如查看和修改个人信息、账号登录等功能。但它又不是一种固定漏洞场景的漏洞，依赖于业务处理逻辑，所以手工测试和半自动化测试是主要的检测手段。当前的一些全自动化检测越权，主要是替换用户凭证相关信息来重放请求，根据响应结果的比对判断，思路与在越权漏洞的检测与利用一小节中介绍的工具检测原理类似。</p><p>越权漏洞常被分为水平越权和垂直越权两种，根据越权对象的权限等级来划分的，同级的就是水平越权，由低向高权限越权就是垂直越权。你还记得开篇提到的&quot;明星健康宝照片被泄露&quot;事件吗？你认为它属于水平越权还是垂直越权呢？欢迎在评论区留言讨论。</p><hr><p><a href="https://wj.qq.com/s2/8059116/3881/" target="_blank" rel="noreferrer">课程评价入口，挑选 5 名小伙伴赠送小礼品～</a></p>',9);function U(J,L,Q,$,X,Z){const a=e("Image");return l(),n("div",null,[r,o,d,t(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/92/A6/Ciqc1GASYk-ASivfAAPyqJojcO8233.png"}),i(),g,t(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/92/B2/CgqCHmASYl-ALlPQAADSntiMgeU273.png"}),i(),c,_,t(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/92/A7/Ciqc1GASYmWAedkmAABNDwsDWvI235.png"}),i(),E,t(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/92/B2/CgqCHmASYm2Ab2EyAABOWImk5eg862.png"}),i(),A,t(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/92/B2/CgqCHmASYneAdXuCAADff3i9-q4853.png"}),i(),u,y,t(a,{alt:"图片6.png",src:"https://s0.lgstatic.com/i/image6/M00/01/31/CioPOWAbYS6AYutqAAEgV7cor_U446.png"}),i(),m,t(a,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/92/B2/CgqCHmASYoWAMqv3AABGLZP_sT8238.png"}),i(),D,t(a,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image/M00/92/A7/Ciqc1GASYo2AdHCIAACXy3twnlg665.png"}),i(),C,t(a,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/9B/Cip5yGASYpmAeunBAAFp0VO-lcU355.png"}),i(),F,t(a,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/9B/Cip5yGASYqSAFf6HAAGb6JILlBg819.png"}),i(),b,t(a,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/9D/CgpVE2ASYrCAQc0UAAFN0G_SETY095.png"}),i(),v,S,T,B,t(a,{alt:"Drawing 11.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/9B/Cip5yGASYrmAJhs1AACr4L3wFK8509.png"}),i(),P,q,t(a,{alt:"Drawing 12.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/9B/Cip5yGASYsSAf32BAAFo4WeYkHI407.png"}),i(),f,I,t(a,{alt:"Drawing 13.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/9D/CgpVE2ASYs6AJzZgAAB88FDAhz8507.png"}),i(),w,V,x,M,t(a,{alt:"图片15.png",src:"https://s0.lgstatic.com/i/image6/M00/01/33/Cgp9HWAbYU-AUaN3AAJjCrZ0Gu0927.png"}),i(),R,j,z,Y,N,G,t(a,{alt:"Drawing 15.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/9B/Cip5yGASYt-AJi6UAACfduv_yr0494.png"}),i(),H,O,t(a,{alt:"Drawing 16.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/9B/Cip5yGASYuiAAHGlAAEQwQoXtvw776.png"}),i(),W])}const is=h(k,[["render",U]]);export{ss as __pageData,is as default};
