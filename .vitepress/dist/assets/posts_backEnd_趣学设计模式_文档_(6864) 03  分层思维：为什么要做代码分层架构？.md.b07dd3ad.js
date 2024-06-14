import{_ as o,D as t,o as e,g as c,J as l,h as n,Q as p,m as s}from"./chunks/framework.f67d7268.js";const W=JSON.parse('{"title":"03分层思维：为什么要做代码分层架构？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/趣学设计模式_文档/(6864) 03  分层思维：为什么要做代码分层架构？.md","filePath":"posts/backEnd/趣学设计模式_文档/(6864) 03  分层思维：为什么要做代码分层架构？.md","lastUpdated":1696682708000}'),r={name:"posts/backEnd/趣学设计模式_文档/(6864) 03  分层思维：为什么要做代码分层架构？.md"},i=p('<h1 id="_03分层思维-为什么要做代码分层架构" tabindex="-1">03分层思维：为什么要做代码分层架构？ <a class="header-anchor" href="#_03分层思维-为什么要做代码分层架构" aria-label="Permalink to &quot;03分层思维：为什么要做代码分层架构？&quot;">​</a></h1><p>软件程序通常有两个层面的需求：</p><ul><li><p><strong>功能性需求</strong>，简单来说，就是一个程序能为用户做些什么，比如，文件上传、查询数据等；</p></li><li><p><strong>非功能性需求</strong>，这个是指除功能性需求以外的其他必要需求，比如，性能、安全性、容错与恢复、本地化、国际化等。</p></li></ul><p>事实上，<strong>非功能性需求所构建起来的正是我们所熟知的软件架构</strong>。什么是软件架构？简单来说，就是软件的基本结构，包括三要素：代码、代码之间的关系和两者各自的属性。</p><p>我们都知道，软件架构非常重要，为什么重要呢？如果把软件比作一座高楼，那么软件架构就是那个钢筋混凝土的框架，代码就是那个框架里的砖石，正是因为有了那个框架，才能让每一个代码都能很好地运行起来。</p>',5),E=s("p",null,"其中，最为经典的软件架构就是分层架构，也就是将软件系统进行分层，现在几乎已经成为每个程序员最熟悉的思考模式之一。不过，分层架构越是流行，我们的设计越容易僵化。这背后到底有哪些值得我们深思的地方呢？",-1),y=s("p",null,"所以，今天我就从架构角度来聊聊为什么代码要做分层、主要用于解决什么问题，以及存在优势和劣势有哪些。",-1),_=s("h3",{id:"代码分层架构是什么",tabindex:"-1"},[n("代码分层架构是什么 "),s("a",{class:"header-anchor",href:"#代码分层架构是什么","aria-label":'Permalink to "代码分层架构是什么"'},"​")],-1),u=s("p",null,[n("要想彻底理解"),s("strong",null,"代码分层架构"),n(" ，就得从"),s("strong",null,"软件部署分层架构"),n("说起。首先我们来看一下常见的互联网软件部署分层架构，如下图所示：")],-1),d=p("<p>由图可以看到，软件部署分层架构主要包括以下四个核心部分。</p><ul><li><p>客户端层（Client）：调用方，比如浏览器或 App。</p></li><li><p>应用服务层的网页服务器（Web Server）：实现程序的运行逻辑，并从下层获取数据，返回给上层的客户端层。</p></li><li><p>应用服务层的缓存（Cache）：加速访问存储的数据。</p></li><li><p>数据层（DB）：存储数据。</p></li></ul><p>通过上面的分析，现在你应该知道什么是软件分层架构了吧？<strong>软件分层架构是通过层来隔离不同的关注点（变化相似的地方）</strong>，以此来解决不同需求变化的问题，使得这种变化可以被控制在一个层里。</p><p>作为软件开发者，我们更关心的其实是应用程序里的分层架构。比如，下图展示的现在流行的一种 MVC 分层架构：</p>",4),g=s("p",null,"我们能明显看到，MVC 分层架构是作用于程序本身的，程序作为一个整体被发布在服务器上运行使用。而类似 DB 里也有自己的分层架构，这里我们重点介绍应用程序中的代码分层架构，其他架构就不展开讨论了。",-1),h=s("p",null,"那么问题来了，什么是代码分层架构呢？",-1),T=s("p",null,[s("strong",null,'代码分层架构就是将软件"元素"（代码）按照"层"（代码关系）的方式组织起来的一种结构。')],-1),A=s("p",null,[s("strong",null,"分层架构核心的原则是：当请求或数据从外部传递过来后，必须是从上一层传递给下一层"),n("。如下图，一个来自 View 层的数据，必须先通过 Controller 层、Model 层后，才能最终到达数据库层。")],-1),m=s("p",null,[n('那么你可能会问："为什么不让 View 层的请求直接到达数据库呢？"这是因为会造成'),s("strong",null,"新的代码耦合，增加代码的复杂度"),n("。比如说，View 层直接调用 Model 层的组件，当 Model 层上的组件有变化时（比如， SQL 或逻辑修改），既会影响 Controller 层组件的使用，也会影响 View 层组件的使用（可参考下面的示意图）。")],-1),C=p(`<p>所以，分层的本质就是为了让相似变化在各自的层内变化，而不造成层与层之间的相互影响。</p><h3 id="代码分层架构解决什么问题" tabindex="-1">代码分层架构解决什么问题 <a class="header-anchor" href="#代码分层架构解决什么问题" aria-label="Permalink to &quot;代码分层架构解决什么问题&quot;">​</a></h3><p>代码分层架构主要是为了解决两个问题：</p><ul><li><p>如何快速拆解功能问题？</p></li><li><p>如何提升代码的可扩展性？</p></li></ul><p>下面我们就来分别解释下。</p><h4 id="_1-通过分层来拆解问题" tabindex="-1">1. 通过分层来拆解问题 <a class="header-anchor" href="#_1-通过分层来拆解问题" aria-label="Permalink to &quot;1. 通过分层来拆解问题&quot;">​</a></h4><p>在软件开发中，一个功能需求问题通常都是笼统的复杂问题，我们一般都会将这个笼统的复杂问题拆分为多个层次的子问题来解决。</p><p>这里来看一个简单的例子，假定你正在编写一段&quot;通过 HTTP 向服务器发送字符串&quot;的代码，如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//创建HTTP连接</span></span>
<span class="line"><span style="color:#E1E4E8;">URL url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">URL</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http://xxx.test.com/sayHello&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">HttpURLConnection connection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (HttpURLConnection) url.</span><span style="color:#B392F0;">openConnection</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">connection.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">//发送数据</span></span>
<span class="line"><span style="color:#E1E4E8;">OutputStream os </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> connection.</span><span style="color:#B392F0;">getOutputStream</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">os.</span><span style="color:#B392F0;">write</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Hello World!&quot;</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getBytes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#6A737D;">//接收响应</span></span>
<span class="line"><span style="color:#E1E4E8;">InputStream is </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> connection.</span><span style="color:#B392F0;">getInputStream</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">BufferedReader br </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BufferedReader</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">InputStreamReader</span><span style="color:#E1E4E8;">(is, </span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#6A737D;">//......</span></span>
<span class="line"><span style="color:#E1E4E8;">br.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">is.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">os.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">//关闭连接</span></span>
<span class="line"><span style="color:#E1E4E8;">connection.</span><span style="color:#B392F0;">disconnect</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//创建HTTP连接</span></span>
<span class="line"><span style="color:#24292E;">URL url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">URL</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http://xxx.test.com/sayHello&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">HttpURLConnection connection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (HttpURLConnection) url.</span><span style="color:#6F42C1;">openConnection</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">connection.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">//发送数据</span></span>
<span class="line"><span style="color:#24292E;">OutputStream os </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> connection.</span><span style="color:#6F42C1;">getOutputStream</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">os.</span><span style="color:#6F42C1;">write</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hello World!&quot;</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getBytes</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#6A737D;">//接收响应</span></span>
<span class="line"><span style="color:#24292E;">InputStream is </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> connection.</span><span style="color:#6F42C1;">getInputStream</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">BufferedReader br </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BufferedReader</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">InputStreamReader</span><span style="color:#24292E;">(is, </span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#6A737D;">//......</span></span>
<span class="line"><span style="color:#24292E;">br.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">is.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">os.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">//关闭连接</span></span>
<span class="line"><span style="color:#24292E;">connection.</span><span style="color:#6F42C1;">disconnect</span><span style="color:#24292E;">();</span></span></code></pre></div><p>我们将这段代码简单地抽象成一个流程图，如下所示：</p>`,10),F=s("p",null,"这个流程图代表了我们对最初始问题的分层拆分：先创建 HTTP 连接，然后向服务器发送一串字符串，最后关闭 HTTP 连接。",-1),P=s("p",null,'于是，原先的"如何通过 HTTP 向服务器发送字符串"的问题就变成了三个新层次的子问题：',-1),B=s("ul",null,[s("li",null,[s("p",null,"如何创建 HTTP 连接？")]),s("li",null,[s("p",null,"如何发送字符串？")]),s("li",null,[s("p",null,"如何关闭连接？")])],-1),D=s("p",null,"首先，在思考如何创建 HTTP 连接这个问题的过程中，你会发现，要想通过 HTTP 发送消息，至少得打开 HTTP 连接，建立 HTTP 会话，并使用 TCP 协议，这样才能通过网络发送数据。",-1),b=s("p",null,"接着，你又发现，当成功解决了这个问题后，发送字符串和关闭 HTTP 连接还有更多的问题需要解决，于是，你开始一步一步地去分解......最后的分解结果如下图所示：",-1),q=p('<p>当所有子问题都被成功解决以后，最初通过 HTTP 向服务器发送字符串的总问题也就得以解决了。</p><p>你发现没有，在不知不觉中你就通过分层将一个复杂的大问题分解为多个容易解决的子层问题。而实际上，有的子层问题已经被前人解决过了，比如，如何使用 HTTP 协议来进行网络数据的通信。也就是说，<strong>最后真正需要关注的问题其实变少了</strong>。</p><p>所以说，从功能性需求角度来看，代码分层本身就是一种拆解复杂问题的好方法。</p><h4 id="_2-通过分层来提升代码可扩展性" tabindex="-1">2. 通过分层来提升代码可扩展性 <a class="header-anchor" href="#_2-通过分层来提升代码可扩展性" aria-label="Permalink to &quot;2. 通过分层来提升代码可扩展性&quot;">​</a></h4><p>分层架构的出现，除了解决拆分复杂问题的困境外，还解决了代码可扩展性的问题。</p><p>为什么要提升代码可扩展性？因为真实的系统数据一直在不断增加。比如说，一个电商网站的用户访问数会从一万个并发增长到十万个并发，或者从一百万增长到一千万。过去的单体架构之所以很难承载，是因为当我们需要扩展服务器和数据库功能时，一处的代码修改就会影响所有的功能。</p><p>分层架构可以将复杂的逻辑切分为多个层，这样大问题就变成了多个小问题，而我们可以很方便地解决每个小问题。每个小问题更容易被抽象为一个组件，当组件功能需要扩充或替换时，修改代码的影响也被有效地控制在有限的范围内，这样<strong>组件自身的复用性也就提高了</strong>。</p><p>除了提高代码组件之间的复用性外，分层架构还让我们<strong>更容易做服务的横向扩展</strong>。</p><p>什么是横向扩展？简单来说，就是用多台配置较低的服务器共同提供服务，也就是我们熟知的集群部署服务方式。比如说，将 Model 层抽取出来作为通用的数据服务部署，这样既不影响其他业务层，也能在负载增加时，快速扩展服务的承载能力。</p><h3 id="代码分层架构的优势和劣势" tabindex="-1">代码分层架构的优势和劣势 <a class="header-anchor" href="#代码分层架构的优势和劣势" aria-label="Permalink to &quot;代码分层架构的优势和劣势&quot;">​</a></h3><p>到这里，代码分层结构的优势体现在哪儿就很清楚了，大致可总结为如下：</p><ul><li><p>只用关注整个结构中的其中某一层的具体实现；</p></li><li><p>降低层与层之间的依赖；</p></li><li><p>很容易用新的实现来替换原有层次的实现；</p></li><li><p>有利于标准化的统一；</p></li><li><p>各层逻辑方便复用。</p></li></ul><p>总结来说，代码分层架构设计主要为了<strong>实现责任分离、解耦、组件复用和标准制定</strong>。</p><p>如果不使用分层架构的话，我们的代码逻辑一定会紧紧依赖在一起，修改某一处必定影响其他很多处。从软件项目的角度看，这样会造成非常严重的影响。比如，一个上传功能需要存入下载链接到数据库，如果没有分层，那么当修改存储的路径或类型时，还得修改存储数据库的业务逻辑，想想就很麻烦。</p><p>另外，层与层之间进行划分后，也提高了组件之间的复用性，层本身就是一种组件形式，通过统一的接口来与外界进行交互，而不再是按照功能上的依赖来进行交互。而统一的接口是模块之间相互约定的统一标准，只要按照标准来进行代码实现，就不会因为代码改动而影响接口的使用。</p><p>虽然代码分层有很多好处，但不可避免地也会有一些劣势。</p><ul><li><p><strong>开发成本变高</strong>：因为不同层分别承担各自的责任，如果是高层次新增功能，则需要多个低层增加代码，这样难免会增加开发成本。</p></li><li><p><strong>性能降低</strong>：请求数据因为经过多层代码的处理，执行时长加长，性能会有所消耗。</p></li><li><p><strong>代码复杂度增加</strong>：因为层与层之间存在强耦合，所以对于一些组合功能的调用，则需要增加很多层之间的调用。</p></li></ul><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>软件分层架构是通过层来隔离不同的关注点（变化相似的地方），以此来解决不同需求变化的问题，使得这种变化可以被控制在一个层里。</p><p>代码分层架构的核心作用有两个：</p><ul><li><p><strong>对于功能性需求，将复杂问题分解为多个容易解决的子层问题；</strong></p></li><li><p><strong>对于非功能性需求，可以提升代码可扩展性。</strong></p></li></ul><p>总结来说，代码分层架构是一种软件架构设计方法。</p><ul><li><p>从软件的功能性需求角度看，分层是为了把较大的复杂问题拆分为多个较小的问题，在分散问题风险的同时，让问题更容易被解决，也就是我们常说的解耦。</p></li><li><p>从架构（非功能性需求）角度看，分层能提升代码可扩展性，帮助开发人员在相似的变化中修改代码。</p></li></ul><p>其实，<strong>复杂的设计概念和简单的代码之间存在一种平衡</strong>，这就是分层架构。</p><ul><li><p>代码分层架构设计的思维模型是简化思维，本质是抽象与拆解。</p></li><li><p>代码分层架构设计的目的是将复杂问题拆分为更容易解决的小问题，降低实现难度。</p></li><li><p>代码分层架构设计的原则和方法是通用方法，可以应用到其他需要分层设计的地方。</p></li></ul><p>所以，分层架构从来不是目的，只是让我们的软件变得更好的其中一种思维方法而已。</p>',26),S=s("h3",{id:"课后思考",tabindex:"-1"},[n("课后思考 "),s("a",{class:"header-anchor",href:"#课后思考","aria-label":'Permalink to "课后思考"'},"​")],-1),H=s("p",null,"除了分层架构外，你还熟悉哪些其他架构设计模式？有哪些优势和劣势？欢迎你在留言区与我分享。",-1),f=s("p",null,"在下一讲，我会接着和你分享如何用软件工程方法解决开发难题的相关内容，这用到了工程思维，在开发中也很是重要，记得按时来听课。",-1);function R(V,w,k,x,I,M){const a=t("Image");return e(),c("div",null,[i,l(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image6/M00/20/53/CioPOWBTAR6AE5_TAAYR2DR14T8759.png"}),n(),E,y,_,u,l(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image6/M00/20/53/CioPOWBTAS2ACFHmAAJr8ZVP6AQ135.png"}),n(),d,l(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image6/M00/20/53/CioPOWBTATWAVRQtAAMPRgLdi1U528.png"}),n(),g,h,T,A,l(a,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image6/M00/20/53/CioPOWBTAT2ALtPrAAcIY76Nrg8579.png"}),n(),m,l(a,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image6/M00/20/57/Cgp9HWBTAUWAAkVpAAZvbMiI5k8828.png"}),n(),C,l(a,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image6/M00/20/57/Cgp9HWBTAWCAQs0-AAC9nZ19hIM259.png"}),n(),F,P,B,D,b,l(a,{alt:"Drawing 12.png",src:"https://s0.lgstatic.com/i/image6/M00/20/53/CioPOWBTAVeAe3_iAALi7XlJ35Y011.png"}),n(),q,l(a,{alt:"Drawing 13.png",src:"https://s0.lgstatic.com/i/image6/M01/20/57/Cgp9HWBTAYOAd887AAXbJxXr52U705.png"}),n(),S,H,f])}const v=o(r,[["render",R]]);export{W as __pageData,v as default};
