import{_ as p,D as e,o as t,g as c,J as o,h as a,Q as l,m as s}from"./chunks/framework.f67d7268.js";const w=JSON.parse('{"title":"02背压机制：响应式流为什么能够提高系统的弹性？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Spring 响应式编程实战_文档/(6984) 02  背压机制：响应式流为什么能够提高系统的弹性？.md","filePath":"posts/backEnd/Spring 响应式编程实战_文档/(6984) 02  背压机制：响应式流为什么能够提高系统的弹性？.md","lastUpdated":1696682708000}'),r={name:"posts/backEnd/Spring 响应式编程实战_文档/(6984) 02  背压机制：响应式流为什么能够提高系统的弹性？.md"},i=l('<h1 id="_02背压机制-响应式流为什么能够提高系统的弹性" tabindex="-1">02背压机制：响应式流为什么能够提高系统的弹性？ <a class="header-anchor" href="#_02背压机制-响应式流为什么能够提高系统的弹性" aria-label="Permalink to &quot;02背压机制：响应式流为什么能够提高系统的弹性？&quot;">​</a></h1><p>上一讲，我们通过分析传统开发模式和响应式编程实现方法之间的差别，引出了数据流的概念。我们知道响应式系统都是通过对数据流中每个事件进行处理，来提高系统的即时响应性的。</p><p>那么今天这一讲，我们就先从&quot;流&quot;的概念出发，并引入响应式流程规范，从而分析响应式编程中所包含的各个核心组件。希望通过这一讲的学习，你可以掌握通过背压机制对流量进行高效控制的系统方法，并基于响应式流规范来实现背压机制。</p><h3 id="流的概念" tabindex="-1">流的概念 <a class="header-anchor" href="#流的概念" aria-label="Permalink to &quot;流的概念&quot;">​</a></h3><p>简单来讲，所谓的流就是由生产者生产并由一个或多个消费者消费的元素序列。这种生产者/消费者模型也可以被称为发布者/订阅者模型，我在上一讲中已经介绍过这个模型。而关于流的介绍，我将从两方面入手，首先明确流的分类，然后再来讨论如何进行流量控制，流量控制是讨论数据流的核心话题。</p><h4 id="流的处理模型" tabindex="-1">流的处理模型 <a class="header-anchor" href="#流的处理模型" aria-label="Permalink to &quot;流的处理模型&quot;">​</a></h4><p>关于流的处理，存在两种基本的实现机制。一种就是传统开发模式下的&quot;拉&quot;模式，即消费者主动从生产者拉取元素；而另一种就是上一讲中分析的&quot;推&quot;模式，在这种模式下，生产者将元素推送给消费者。相较于&quot;拉&quot;模式，&quot;推&quot;模式下的数据处理的资源利用率更好，下图所示的就是一种典型的推模式处理流程。</p>',7),E=s("p",null,"图 1 推模式下的数据流处理方式示意图",-1),y=s("p",null,"上图中，数据流的生产者会持续地生成数据并推送给消费者。这里就引出了流量控制问题，即如果数据的生产者和消费者处理数据的速度是不一致的，我们应该如何确保系统的稳定性呢？",-1),u=s("h4",{id:"流量控制",tabindex:"-1"},[a("流量控制 "),s("a",{class:"header-anchor",href:"#流量控制","aria-label":'Permalink to "流量控制"'},"​")],-1),d=s("p",null,"先来看第一种场景，即生产者生产数据的速率小于消费者的场景。在这种情况下，因为消费者消费数据没有任何压力，也就不需要进行流量的控制。",-1),_=s("p",null,"现实中，更多的是生产者生产数据的速率大于消费者消费数据的场景。这种情况比较复杂，因为消费者可能因为无法处理过多的数据而发生崩溃。针对这种情况的一种常见解决方案是在生产者和消费者之间添加一种类似于消息队列的机制。我们知道队列具有存储并转发的功能，所以可以由它来进行一定的流量控制，效果如下图所示。",-1),b=s("p",null,"图 2 添加队列机制之后的生产者/消费者场景示意图",-1),h=s("p",null,[a("现在，问题的关键就转变为"),s("strong",null,"如何设计一种合适的队列"),a("。通常，我们可以选择三种不同类型的队列来分别支持不同的功能特性。")],-1),g=s("p",null,[s("strong",null,"无界队列")],-1),A=s("p",null,"第一种最容易想到的队列就是无界队列（Unbounded Queue），这种队列原则上拥有无限大小的容量，可以存放所有生产者所生产的消息，如下图所示。",-1),F=s("p",null,"图 3 无界队列结构示意图",-1),q=s("p",null,"显然，无界队列的优势就是确保了所有消息都能得到消费，但显然会降低系统的回弹性，因为没有一个系统拥有无限的资源。一旦内存等资源被耗尽，系统可能就崩溃了。",-1),S=s("p",null,[s("strong",null,"有界丢弃队列")],-1),m=s("p",null,"与无界队列相对的，更合适的方案是选择一种有界队列。为了避免内存溢出，我们可以使用这样一个队列，一般队列的容量满了，就忽略后续传入的消息，如下图所示。",-1),v=s("p",null,"图 4 有界丢弃队列结构示意图",-1),C=s("p",null,"上图中，可以看出这个有界队列的容量为 6，所以第 7 和第 8 个元素被丢弃了。然后当消费者消费了一部分消息之后，队列出现了新的空闲位置，后续的消息就又被填充到队列中。当然，这里可以设置一些丢弃元素的策略，比方说按照优先级或先进先出等。",-1),T=s("p",null,"有界丢弃队列考虑了资源的限制，比较适合用于允许丢消息的业务场景，但在消息重要性很高的场景显然不可能采取这种队列。",-1),D=s("p",null,[s("strong",null,"有界阻塞队列")],-1),k=s("p",null,"如果需要确保消息不丢失，则需要引入有界阻塞队列。在这种队列中，我们会在队列消息数量达到上限后阻塞生产者，而不是直接丢弃消息，如下图所示。",-1),P=l(`<p>图 5 有界阻塞队列结构示意图</p><p>上图中，队列的容量同样是 6，所以当第 7 个元素到来时，发现队列已经满了，那么生产者就会一直等到队列空间的释放而产生阻塞行为。显然，这种阻塞行为是不可能实现异步操作的，所以结合上一讲中的讨论结果，无论从回弹性、弹性还是即时响应性出发，有界阻塞队列都不是我们想要的解决方案。</p><h3 id="背压机制" tabindex="-1">背压机制 <a class="header-anchor" href="#背压机制" aria-label="Permalink to &quot;背压机制&quot;">​</a></h3><p>讲到这里，我们已经明确，纯&quot;推&quot;模式下的数据流量会有很多不可控制的因素，并不能直接应用，而是需要在&quot;推&quot;模式和&quot;拉&quot;模式之间考虑一定的平衡性，从而优雅地实现流量控制。这就需要引出响应式系统中非常重要的一个概念------背压机制（Backpressure）。</p><p>什么是背压？简单来说就是下游能够向上游反馈流量请求的机制。通过前面的分析，我们知道如果消费者消费数据的速度赶不上生产者生产数据的速度时，它就会持续消耗系统的资源，直到这些资源被消耗殆尽。</p><p>这个时候，就需要有一种机制使得消费者可以根据自身当前的处理能力通知生产者来调整生产数据的速度，这种机制就是背压。采用背压机制，消费者会根据自身的处理能力来请求数据，而生产者也会根据消费者的能力来生产数据，从而在两者之间达成一种动态的平衡，确保系统的即时响应性。</p><h3 id="响应式流规范" tabindex="-1">响应式流规范 <a class="header-anchor" href="#响应式流规范" aria-label="Permalink to &quot;响应式流规范&quot;">​</a></h3><p>关于流量控制我们已经讨论了很多，而针对流量控制的解决方案以及背压机制都包含在响应式流规范中，其中包含了响应式编程的各个核心组件，让我们一起来看一下。</p><h4 id="响应式流的核心接口" tabindex="-1">响应式流的核心接口 <a class="header-anchor" href="#响应式流的核心接口" aria-label="Permalink to &quot;响应式流的核心接口&quot;">​</a></h4><p>在 Java 的世界中，响应式流规范只定义了四个核心接口，即 Publisher<code>&lt;T&gt;</code>、Subscriber<code>&lt;T&gt;</code>、Subscription 和 Processor&lt;T,R&gt;。</p><ul><li>Publisher<code>&lt;T&gt;</code></li></ul><p>Publisher 代表的就是一种可以生产无限数据的发布者，该接口定义如下所示。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Publisher</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">T</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">subscribe</span><span style="color:#E1E4E8;">(Subscriber&lt;</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">super</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">T</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Publisher</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">T</span><span style="color:#24292E;">&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">subscribe</span><span style="color:#24292E;">(Subscriber&lt;</span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">super</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">T</span><span style="color:#24292E;">&gt; </span><span style="color:#E36209;">s</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>可以看到，Publisher 根据收到的请求向当前订阅者 Subscriber 发送元素。</p><ul><li>Subscriber <code>&lt;T&gt;</code></li></ul><p>对应的，Subscriber 代表的是一种可以从发布者那里订阅并接收元素的订阅者。Subscriber <code>&lt;T&gt;</code> 接口定义如下所示。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Subscriber</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">T</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onSubscribe</span><span style="color:#E1E4E8;">(Subscription </span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onNext</span><span style="color:#E1E4E8;">(T </span><span style="color:#FFAB70;">t</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onError</span><span style="color:#E1E4E8;">(Throwable </span><span style="color:#FFAB70;">t</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onComplete</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Subscriber</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">T</span><span style="color:#24292E;">&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onSubscribe</span><span style="color:#24292E;">(Subscription </span><span style="color:#E36209;">s</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onNext</span><span style="color:#24292E;">(T </span><span style="color:#E36209;">t</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onError</span><span style="color:#24292E;">(Throwable </span><span style="color:#E36209;">t</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onComplete</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>我们注意到 Subscriber 接口包含了一组有用的方法，这组方法构成了数据流请求和处理的基本流程，我们一一来看一下。</p><p>其中，onSubscribe() 从命名上看就是一个回调方法，当发布者的 subscribe() 方法被调用时就会触发这个回调。而在该方法中有一个参数 Subscription，可以把这个 Subscription 看作是一种用于订阅的上下文对象。Subscription 对象中包含了这次回调中订阅者想要向发布者请求的数据个数。</p><p>当订阅关系已经建立，那么发布者就可以调用订阅者的 onNext() 方法向订阅者发送一个数据。这个过程是持续不断的，直到所发送的数据已经达到 Subscription 对象中所请求的数据个数。这时候 onComplete() 方法就会被触发，代表这个数据流已经全部发送结束。而一旦在这个过程中出现了异常，那么就会触发 onError() 方法，我们可以通过这个方法捕获到具体的异常信息进行处理，而数据流也就自动终止了。</p><ul><li>Subscription</li></ul><p>Subscription 代表的就是一种订阅上下文对象，它在订阅者和发布者之间进行传输，从而在两者之间形成一种契约关系。Subscription 接口定义如下所示。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Subscription</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">long</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cancel</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Subscription</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">request</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">long</span><span style="color:#24292E;"> </span><span style="color:#E36209;">n</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cancel</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这里的 request() 方法用于请求 n 个元素，订阅者可以通过不断调用该方法来向发布者请求数据；而 cancel() 方法显然是用来取消这次订阅。请注意，<strong>Subscription 对象是确保生产者和消费者针对数据处理速度达成一种动态平衡的基础，也是流量控制中实现背压机制的关键所在</strong>，我们可以通过下图来进一步理解整个数据请求和处理过程。</p>`,24),f=l('<p>图 6 Subscription 与背压机制示意图</p><p>Publisher、Subscriber 和 Subscription 接口是响应式编程的核心组件，响应式流规范也只包含了这些接口，因此是一个非常抽象且精简的接口规范。结合前面的讨论结果，我们可以明确，响应式流规范实际上提供了一种&quot;推-拉&quot;结合的混合数据流模型。</p><p>当然，响应式流规范非常灵活，还可以提供独立的&quot;推&quot;模型和&quot;拉&quot;模型。如果为了实现纯&quot;推&quot;模型，我们可以考虑一次请求足够多的元素；而对于纯&quot;拉&quot;模型，相当于就是在每次调用 Subscriber 的 onNext() 方法时只请求一个新元素。</p><h4 id="响应式流的技术生态圈" tabindex="-1">响应式流的技术生态圈 <a class="header-anchor" href="#响应式流的技术生态圈" aria-label="Permalink to &quot;响应式流的技术生态圈&quot;">​</a></h4><p>响应式流是一种规范，而该规范的核心价值就在于为业界提供了一种非阻塞式背压的异步流处理标准。各个供应商都可以基于该规范实现自己的响应式开发库，而这些开发库之间则可以做到互相兼容、相互交互。</p><p>目前，业界主流响应式开发库包括 RxJava、Akka、Vert.x 以及 Project Reactor。在本课程中，我们将重点介绍 Project Reactor，它是 Spring 5 中所默认集成的响应式开发库。</p><h3 id="小结与预告" tabindex="-1">小结与预告 <a class="header-anchor" href="#小结与预告" aria-label="Permalink to &quot;小结与预告&quot;">​</a></h3><p>承接上一讲内容，本讲进一步分析了数据流的概念的分类，以及&quot;推&quot;流模式下的流量控制问题，从而引出了响应式系统中的背压机制。而流量控制的解决方案都包含在响应式流规范中，我们对这一规范中的核心组件展开了详细的说明。</p><p>响应式流规范是对响应式编程思想精髓的呈现，对于开发人员而言，理解这一规范有助于更好地掌握开发库的使用方法和基本原理。</p><p>这里给你留一道思考题：你能简要描述响应式流规范中数据的生产者和消费者之间的交互关系吗？</p><p>下一讲，我们来聊聊响应式编程的应用场景，相信这也是你最关心的内容，到时见。</p><blockquote><p>点击链接，获取课程相关代码↓↓↓<br><a href="https://github.com/lagoueduCol/ReactiveProgramming-jianxiang.git?fileGuid=xxQTRXtVcqtHK6j8" target="_blank" rel="noreferrer">https://github.com/lagoueduCol/ReactiveProgramming-jianxiang.git</a></p></blockquote>',12);function B(x,I,R,V,N,j){const n=e("Image");return t(),c("div",null,[i,o(n,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M01/21/38/Cgp9HWBUIRCAHSoEAACQmzpsJME739.png"}),a(),E,y,u,d,_,o(n,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image6/M00/21/35/CioPOWBUIRiAedZZAACVgTxgC80957.png"}),a(),b,h,g,A,o(n,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image6/M01/21/38/Cgp9HWBUISGAJrh5AACOo3oalK8601.png"}),a(),F,q,S,m,o(n,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image6/M00/21/35/CioPOWBUISqAal3JAACp2GTWvZM658.png"}),a(),v,C,T,D,k,o(n,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image6/M01/21/38/Cgp9HWBUIUOAChJ1AACq6l5LR5Y136.png"}),a(),P,o(n,{alt:"Drawing 11.png",src:"https://s0.lgstatic.com/i/image6/M00/21/38/Cgp9HWBUIZqASTpVAADEEHREqvE168.png"}),a(),f])}const J=p(r,[["render",B]]);export{w as __pageData,J as default};
