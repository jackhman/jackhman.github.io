import{_ as l,D as o,o as e,g as t,J as a,h as n,Q as p,m as c}from"./chunks/framework.f67d7268.js";const A=JSON.parse('{"title":"第13讲：区分浏览器中的进程与线程","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/前端高手进阶_文档/(3184) 第13讲：区分浏览器中的进程与线程.md","filePath":"posts/frontEnd/前端高手进阶_文档/(3184) 第13讲：区分浏览器中的进程与线程.md","lastUpdated":1696682708000}'),r={name:"posts/frontEnd/前端高手进阶_文档/(3184) 第13讲：区分浏览器中的进程与线程.md"},i=p('<h1 id="第13讲-区分浏览器中的进程与线程" tabindex="-1">第13讲：区分浏览器中的进程与线程 <a class="header-anchor" href="#第13讲-区分浏览器中的进程与线程" aria-label="Permalink to &quot;第13讲：区分浏览器中的进程与线程&quot;">​</a></h1><p>浏览器作为前端代码运行的环境，也作为前端工程师的底层知识，熟悉它的结构及工作方式，无论是对于开发高性能 Web 应用，还是对于建立完善的前端知识框架，都起着至关重要的作用。这一课时我们就通过学习浏览器中的进程和线程来掌握它的整体架构。</p><h3 id="进程-process-与线程-thread" tabindex="-1">进程（Process）与线程（Thread） <a class="header-anchor" href="#进程-process-与线程-thread" aria-label="Permalink to &quot;进程（Process）与线程（Thread）&quot;">​</a></h3><p>我们先来好好梳理一下关于进程和线程的相关概念。<strong>进程</strong> 是操作系统进行<strong>资源分配</strong> 和调度的基本单位，<strong>线程</strong> 是操作系统<strong>进行运算</strong>的最小单位。一个程序至少有一个进程，一个进程至少有一个线程。线程需要由进程来启动和管理。</p>',4),E=c("p",null,"Windows 下的进程信息",-1),y=p('<p>Linux 下的进程信息</p><p>通常程序需要执行多个任务，比如浏览器需要一边渲染页面一边请求后端数据同时还要响应用户事件，而单线程的进程在同一时间内只能执行一个任务，无法满足多个任务并行执行的需求。要解决这个问题，可以通过 3 种方式来实现：</p><ul><li><p>多进程</p></li><li><p>多线程（同一进程）</p></li><li><p>多进程和多线程</p></li></ul><p>由于第 3 种方式是前两种方式的结合，所以这里只比较多进程和多线程的特点。</p><p>前面提到进程是操作系统资源分配的基本单位，这里隐含的意思就是，不同进程之间的资源是独享的，不可以相互访问。这种特性带来的最大好处就是建立了进程之间的隔离性，避免了多个进程同时操作同一份数据而产生问题。</p><p>而多线程没有分配独立的资源，线程之间数据都是共享的，也就意味着创建线程的成本更小，因为不需要分配额外的存储空间。但线程的数据共享也带来了很多问题：首先是稳定性，进程中任意线程崩溃都会导致整个进程的崩溃，也就是说会&quot;牵连&quot;到进程中的其他线程。安全隐患就更容易理解了，如果有恶意线程启动，可以随意访问进程中的任意资源。</p><p>总而言之，<strong>多线程更轻量，多进程更安全更稳定</strong>。</p><p>有了关于进程和线程的了解，下面以使用率最高的 Chrome 浏览器为例来进行分析，看看浏览器中用到了哪些进程和线程。</p><h3 id="浏览器架构" tabindex="-1">浏览器架构 <a class="header-anchor" href="#浏览器架构" aria-label="Permalink to &quot;浏览器架构&quot;">​</a></h3><p>通过浏览器的任务管理器（快捷键 Shift + ESC）可以看到，当浏览器打开一个标签页时，启动了下面几个进程。</p>',10),d=p(`<p>浏览器进程启动图</p><h4 id="浏览器进程" tabindex="-1">浏览器进程 <a class="header-anchor" href="#浏览器进程" aria-label="Permalink to &quot;浏览器进程&quot;">​</a></h4><p>浏览器的主进程负责界⾯显⽰（地址栏、导航栏、书签等）、处理用户事件、管理⼦进程等。</p><h4 id="gpu-进程" tabindex="-1">GPU 进程 <a class="header-anchor" href="#gpu-进程" aria-label="Permalink to &quot;GPU 进程&quot;">​</a></h4><p>处理来自其他进程的 GPU 任务，比如来自渲染进程或扩展程序进程的 CSS3 动画效果，来自浏览器进程的界面绘制等。</p><p>在第 06 课时中提到过浏览器渲染页面的过程，在最后一个步骤&quot;绘制&quot;中我们提到了图层的合成，而这个图层的合成操作其实就是交给 GPU 进程来完成的。</p><p>它还有一个重要的特性，那就是可以利用 GPU 硬件来加速渲染，包括 Canvas 绘制、CSS3 转换（Transitions）、CSS3 变换（Transforms）、WebGL 等。具体原理就是如果 DOM 元素使用了这些属性，GPU 进程就会在合成层的时候对它进行单独处理，提升到一个独立的层进行绘制，这样就能避免重新布局和重新绘制。</p><p>下面一段代码利用了 keyframes 来实现一个绕正方形运动的动画效果。</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;gpu&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  .gpu {</span></span>
<span class="line"><span style="color:#E1E4E8;">    background-color: darkgreen;</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: 50px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: 50px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    transform: translate(0, 0);</span></span>
<span class="line"><span style="color:#E1E4E8;">    animation: slide 3.7s ease-in-out infinite;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  @keyframes slide {</span></span>
<span class="line"><span style="color:#E1E4E8;">    25% {</span></span>
<span class="line"><span style="color:#E1E4E8;">      transform: translate(250px, 0);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    50% {</span></span>
<span class="line"><span style="color:#E1E4E8;">      transform: translate(250px, 250px);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    75% {</span></span>
<span class="line"><span style="color:#E1E4E8;">      transform: translate(0, 250px);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;gpu&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  .gpu {</span></span>
<span class="line"><span style="color:#24292E;">    background-color: darkgreen;</span></span>
<span class="line"><span style="color:#24292E;">    width: 50px;</span></span>
<span class="line"><span style="color:#24292E;">    height: 50px;</span></span>
<span class="line"><span style="color:#24292E;">    transform: translate(0, 0);</span></span>
<span class="line"><span style="color:#24292E;">    animation: slide 3.7s ease-in-out infinite;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  @keyframes slide {</span></span>
<span class="line"><span style="color:#24292E;">    25% {</span></span>
<span class="line"><span style="color:#24292E;">      transform: translate(250px, 0);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    50% {</span></span>
<span class="line"><span style="color:#24292E;">      transform: translate(250px, 250px);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    75% {</span></span>
<span class="line"><span style="color:#24292E;">      transform: translate(0, 250px);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>通过浏览器性能分析工具来记录整个页面绘制过程，可以看到页面绘制完成后，浏览器没有再进行布局或绘制相关的操作。因此此时元素的绘制工作已经脱离了渲染引擎，交由 GPU 进程来维护。</p>`,10),h=p(`<p>使用 GPU 加速进行渲染图</p><p>为了进行对比，我们再将代码稍稍修改，通过固定定位来修改元素位置。</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;cpu&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  .cpu {</span></span>
<span class="line"><span style="color:#E1E4E8;">    background-color: darkgreen;</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: 50px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: 50px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    left: 0;</span></span>
<span class="line"><span style="color:#E1E4E8;">    top: 0;</span></span>
<span class="line"><span style="color:#E1E4E8;">    position: fixed;</span></span>
<span class="line"><span style="color:#E1E4E8;">    animation: move 3.7s ease-in-out infinite;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  @keyframes move {</span></span>
<span class="line"><span style="color:#E1E4E8;">    25% {</span></span>
<span class="line"><span style="color:#E1E4E8;">      left: 250px;</span></span>
<span class="line"><span style="color:#E1E4E8;">      top: 0;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    50% {</span></span>
<span class="line"><span style="color:#E1E4E8;">      left: 250px;</span></span>
<span class="line"><span style="color:#E1E4E8;">      top: 250px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    75% {</span></span>
<span class="line"><span style="color:#E1E4E8;">      left: 0;</span></span>
<span class="line"><span style="color:#E1E4E8;">      top: 250px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;cpu&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  .cpu {</span></span>
<span class="line"><span style="color:#24292E;">    background-color: darkgreen;</span></span>
<span class="line"><span style="color:#24292E;">    width: 50px;</span></span>
<span class="line"><span style="color:#24292E;">    height: 50px;</span></span>
<span class="line"><span style="color:#24292E;">    left: 0;</span></span>
<span class="line"><span style="color:#24292E;">    top: 0;</span></span>
<span class="line"><span style="color:#24292E;">    position: fixed;</span></span>
<span class="line"><span style="color:#24292E;">    animation: move 3.7s ease-in-out infinite;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  @keyframes move {</span></span>
<span class="line"><span style="color:#24292E;">    25% {</span></span>
<span class="line"><span style="color:#24292E;">      left: 250px;</span></span>
<span class="line"><span style="color:#24292E;">      top: 0;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    50% {</span></span>
<span class="line"><span style="color:#24292E;">      left: 250px;</span></span>
<span class="line"><span style="color:#24292E;">      top: 250px;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    75% {</span></span>
<span class="line"><span style="color:#24292E;">      left: 0;</span></span>
<span class="line"><span style="color:#24292E;">      top: 250px;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>发现页面在循环进行布局和绘制操作。</p>`,4),_=p('<p>不使用 GPU 加速进行渲染图</p><p><strong>Network Service 进程</strong></p><p>负责⻚⾯的⽹络资源加载，比如在地址栏输入一个网页地址，网络进程会将请求后得到的资源交给渲染进程处理。本来只是浏览器主进程的一个模块，现在为了将浏览器进程进行&quot;服务化&quot;，被抽取出来，成了一个单独的进程。</p><h4 id="v8-代理解析工具进程" tabindex="-1"><strong>V8 代理解析工具进程</strong> <a class="header-anchor" href="#v8-代理解析工具进程" aria-label="Permalink to &quot;**V8 代理解析工具进程**&quot;">​</a></h4><p>Chrome 支持使用 JavaScript 来写连接代理服务器脚本，称为 pac 代理脚本。</p><p>由于 pac 代理脚本是用 JavaScript 编写的，要能够解析 pac 代理脚本就必须要用到 JavaScript 脚本引擎，直接在浏览器主进程中引入 JavaScript 引擎并不符合进程&quot;服务化&quot;的设计理念，所以就把这个解析功能独立成一个进程。</p><h4 id="渲染进程" tabindex="-1">渲染进程 <a class="header-anchor" href="#渲染进程" aria-label="Permalink to &quot;渲染进程&quot;">​</a></h4><p>浏览器会为每个标签页单独启动一个渲染进程，所以它和上述进程不同，并不是唯一的。</p><p>渲染进程的任务是将 HTML、CSS 和 JavaScript 转化为⽤户可以与之交互的网页，每个渲染进程都会启动单独的渲染引擎线程和 JavaScript 引擎线程。关于渲染引擎的工作细节我们在第 06 课时中已经详细讨论过了，JavaScript 引擎线程也在第 12 课时中详细讨论过，这里就不重复讨论了。</p><p>除此之外还包括事件触发线程，负责接收事件，并将回调函数放入 JavaScript 引擎线程的事件队列中，以及负责处理定时任务的定时器线程。</p><p>这种设计保障了程序与系统的安全性，可以通过操作系统提供的权限机制来为每个渲染进程建立一个沙箱运行环境，从而防止恶意破坏用户系统或影响其他标签页的行为。</p><p>同时也保障了渲染进程的稳定性，因为如果某个标签页失去响应，用户可以关掉这个标签页，此时其他标签页依然运行着，可以正常使用。如果所有标签页都运行在同一进程上，那么当某个失去响应，所有标签页都会失去响应。</p><h4 id="扩展程序进程" tabindex="-1">扩展程序进程 <a class="header-anchor" href="#扩展程序进程" aria-label="Permalink to &quot;扩展程序进程&quot;">​</a></h4><p>主要是负责插件的运⾏，和渲染进程一样，也不是唯一的，浏览器会为每个插件都启动一个进程。这样的设计也是从安全性和稳定性考虑。</p><h4 id="进程的服务化" tabindex="-1">进程的服务化 <a class="header-anchor" href="#进程的服务化" aria-label="Permalink to &quot;进程的服务化&quot;">​</a></h4><p>Chrome 官方团队在 2016年 提出了<a href="https://docs.google.com/document/d/15I7sQyQo6zsqXVNAlVd520tdGaS8FCicZHrN0yRu-oU/edit#heading=h.cyhu8vkfrzar" target="_blank" rel="noreferrer">面向服务的设计模型</a>，在系统资源允许的情况下，将浏览器主进程的各种模块拆分成独⽴的服务，每个服务在独立的进程中运行。通过高内聚、低耦合的结构让 Chrome 变得更稳定更安全。</p><p>同时这种设计也具有一定的伸缩性，当运行在资源有限的设备上时，会将这些服务聚合到浏览器主进程中，从而减少内存占用。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>这一课时我们分析了 Chrome 浏览器的架构，至少可以得到以下 3 个启示：</p><ul><li><p>多进程在稳定性和安全性上有优势，但是资源占用较多；</p></li><li><p>对于复杂的应用我们可以采取服务化的设计方式，将功能模块单独拆分成进程来提供服务；</p></li><li><p>合理利用 GPU 进程可以加速渲染。</p></li></ul><p>最后布置一道思考题：说一说你还了解过哪些多进程与多线程设计的应用，它们的结构又是什么样的呢？</p>',21);function g(u,m,f,x,q,v){const s=o("Image");return e(),t("div",null,[i,a(s,{alt:"image (7).png",src:"https://s0.lgstatic.com/i/image/M00/29/11/CgqCHl75yNOASzO5AABzFfz1nN0731.png"}),n(),E,a(s,{alt:"image (8).png",src:"https://s0.lgstatic.com/i/image/M00/29/06/Ciqc1F75yOeAKk_WAABFeE0vWT8953.png"}),n(),y,a(s,{alt:"image (9).png",src:"https://s0.lgstatic.com/i/image/M00/29/06/Ciqc1F75yPWAcTNpAABoToqDfx4887.png"}),n(),d,a(s,{alt:"image (10).png",src:"https://s0.lgstatic.com/i/image/M00/29/12/CgqCHl75yP6AZbcnAABVpE0iXCY958.png"}),n(),h,a(s,{alt:"image (11).png",src:"https://s0.lgstatic.com/i/image/M00/29/06/Ciqc1F75yQmAeLhpAABTOiBQjDo080.png"}),n(),_])}const C=l(r,[["render",g]]);export{A as __pageData,C as default};
