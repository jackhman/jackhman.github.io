import{_ as t,F as p,g as h,K as a,h as n,ar as s,o as l}from"./chunks/framework.VlluEs-f.js";const A=JSON.parse('{"title":"11案例分析：如何用设计模式优化性能","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Java 性能优化实战 21 讲_文档/(4188) 11  案例分析：如何用设计模式优化性能.md","filePath":"posts/backEnd/Java 性能优化实战 21 讲_文档/(4188) 11  案例分析：如何用设计模式优化性能.md","lastUpdated":1718371218000}'),k={name:"posts/backEnd/Java 性能优化实战 21 讲_文档/(4188) 11  案例分析：如何用设计模式优化性能.md"},e=s(`<h1 id="_11案例分析-如何用设计模式优化性能" tabindex="-1">11案例分析：如何用设计模式优化性能 <a class="header-anchor" href="#_11案例分析-如何用设计模式优化性能" aria-label="Permalink to &quot;11案例分析：如何用设计模式优化性能&quot;">​</a></h1><p>代码的结构对应用的整体性能，有着重要的影响。结构优秀的代码，可以避免很多潜在的性能问题，在代码的扩展性上也有巨大的作用；结构清晰、层次分明的代码，也有助于帮你找到系统的瓶颈点，进行专项优化。</p><p><strong>设计模式</strong>就是对常用开发技巧进行的总结，它使得程序员之间交流问题，有了更专业、便捷的方式。比如，我们在《02 | 理论分析：性能优化有章可循，谈谈常用的切入点》中提到，I/O 模块使用的是装饰器模式，你就能很容易想到 I/O 模块的代码组织方式。</p><p>事实上，大多数设计模式并不能增加程序的性能，它只是代码的一种组织方式。本课时，我们将一一举例讲解和性能相关的几个设计模式，包括代理模式、单例模式、享元模式、原型模式等。</p><h3 id="如何找到动态代理慢逻辑的原因" tabindex="-1">如何找到动态代理慢逻辑的原因? <a class="header-anchor" href="#如何找到动态代理慢逻辑的原因" aria-label="Permalink to &quot;如何找到动态代理慢逻辑的原因?&quot;">​</a></h3><p>Spring 广泛使用了代理模式，它使用 CGLIB 对 Java 的字节码进行了增强。在复杂的项目中，会有非常多的 AOP 代码，比如权限、日志等切面。在方便了编码的同时，AOP 也给不熟悉项目代码的同学带来了很多困扰。</p><p>下面我将分析一个<strong>使用 arthas 找到动态代理慢逻辑的具体原因</strong>，这种方式在复杂项目中，非常有效，你不需要熟悉项目的代码，就可以定位到性能瓶颈点。</p><p>首先，我们创建一个最简单的 Bean（<a href="https://gitee.com/xjjdog/tuning-lagou-res/tree/master/tuning-011/design-pattern" target="_blank" rel="noreferrer">代码见仓库</a>）。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ABean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*******************&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>然后，我们使用 Aspect 注解，完成切面的书写，在前置方法里，我们让线程 sleep 了 1 秒钟。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@Aspect </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@Component </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyAspect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Pointcut</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;execution(* com.github.xjjdog.spring.ABean.*(..)))&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pointcut</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​ </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pointcut()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;before&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Thread.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(TimeUnit.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SECONDS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toMillis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (InterruptedException e) { </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IllegalStateException</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>创建一个 Controller，当访问 /aop 链接时，将会输出 Bean 的类名称，以及它的耗时。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Controller</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AopController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Autowired</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ABean aBean; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​ </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ResponseBody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GetMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/aop&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> begin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">currentTimeMillis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        aBean.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cost </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">currentTimeMillis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> begin; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String cls </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> aBean.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cls </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot; | &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cost; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>执行结果如下，可以看到 AOP 代理已经生效，内存里的 Bean 对象，已经变成了EnhancerBySpringCGLIB 类型，调用方法 method，耗时达到了1023ms。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> com</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.github.xjjdog.spring.ABean$$EnhancerBySpringCGLIB$$a5d91535 | 1023</span></span></code></pre></div><p>下面使用 arthas 分析这个执行过程，找出耗时最高的 AOP 方法。启动 arthas 后，可以从列表中看到我们的应用程序，在这里，输入 2 进入分析界面。</p>`,16),E=s('<p>在终端输入 trace 命令，然后访问 /aop 接口，终端将打印出一些 debug 信息，可以发现耗时操作就是 Spring 的代理类。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">trace com.github.xjjdog.spring.ABean method</span></span></code></pre></div>',2),r=s(`<h3 id="代理模式" tabindex="-1">代理模式 <a class="header-anchor" href="#代理模式" aria-label="Permalink to &quot;代理模式&quot;">​</a></h3><p>代理模式（Proxy）可以通过一个代理类，来控制对一个对象的访问。</p><p>Java 中实现动态代理主要有两种模式：一种是使用 JDK，另外一种是使用 CGLib。</p><ul><li><p>其中，JDK 方式是面向接口的，主 要的相关类是 InvocationHandler 和 Proxy；</p></li><li><p>CGLib 可以代理普通类，主要的相关类是 MethodInterceptor 和 Enhancer。</p></li></ul><p><strong>这个知识点面试频率非常高</strong>，仓库中有这两个实现的完整代码，这里就不贴出来了。</p><p>下面是 JDK 方式和 CGLib 方式代理速度的 JMH 测试结果：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Benchmark              Mode  Cnt      Score      Error   Units </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ProxyBenchmark.cglib  thrpt   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  78499.580</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ± </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1771.148</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ops</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ms </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ProxyBenchmark.jdk    thrpt   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  88948.858</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ±  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">814.360</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ops</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ms</span></span></code></pre></div><p>我现在用的 <strong>JDK</strong> 版本是 1.8，可以看到，CGLib 的速度并没有传得那么快（有传言高出10 倍），相比较而言，它的速度甚至略有下降。</p><p>我们再来看下<strong>代理</strong>的创建速度，结果如下所示。可以看到，在代理类初始化方面，JDK 的吞吐量要高出 CGLib 一倍。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Benchmark                    Mode  Cnt      Score      Error   Units </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ProxyCreateBenchmark.cglib  thrpt   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   7281.487</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ± </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1339.779</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ops</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ms </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ProxyCreateBenchmark.jdk    thrpt   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  15612.467</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ±  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">268.362</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ops</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ms</span></span></code></pre></div><p>综上所述，JDK 动态代理和 CGLib 代理的创建速度和执行速度，在新版本的 Java 中差别并不是很大，Spring 选用了 CGLib，主要是因为它能够代理普通类的缘故。</p><h3 id="单例模式" tabindex="-1">单例模式 <a class="header-anchor" href="#单例模式" aria-label="Permalink to &quot;单例模式&quot;">​</a></h3><p>Spring 在创建组件的时候，可以通过 scope 注解指定它的作用域，用来标示这是一个prototype（多例）还是 singleton（单例）。</p><p>当指定为单例时（默认行为），在 Spring 容器中，组件有且只有一份，当你注入相关组件的时候，获取的组件实例也是同一份。</p><p>如果是普通的单例类，我们通常将单例的构造方法设置成私有的，单例有懒汉加载和饿汉加载模式。</p><p>了解 JVM 类加载机制的同学都知道，一个类从加载到初始化，要经历 5 个步骤：加载、验证、准备、解析、初始化。</p>`,16),d=s('<p>其中，static 字段和 static 代码块，是属于类的，在类加载的初始化阶段就已经被执行。它在字节码中对应的是 方法，属于类的（构造方法）。因为类的初始化只有一次，所以它就能够保证这个加载动作是线程安全的。</p><p>根据以上原理，只要把单例的初始化动作，放在 方法里，就能够实现 <strong>饿汉模式</strong>。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Singleton instace </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>饿汉模式在代码里用的很少，它会造成资源的浪费，生成很多可能永远不会用到的对象。</p><p>而对象初始化就不一样了。通常，我们在 new 一个新对象的时候，都会调用它的构造方法，就是 ，用来初始化对象的属性。由于在同一时刻，多个线程可以同时调用 函数，我们就需要使用 synchronized 关键字对生成过程进行同步。</p><p>目前，<strong>公认的兼顾线程安全和效率的单例模式，就是 double check。很多面试官，会要求你手写，并分析 double check 的原理。</strong></p>',6),g=s(`<p>如上图，是 double check 的关键代码，我们介绍一下四个关键点：</p><ul><li><p>第一次检查，当 instance 为 null 的时候，进入对象实例化逻辑，否则直接返回。</p></li><li><p>加同步锁，这里是类锁。</p></li><li><p>第二次检查才是关键。如果不加这次判空动作，可能会有多个线程进入同步代码块，进而生成多个实例。</p></li><li><p>最后一个关键点是 volatile 关键字。在一些低版本的 Java 里，由于指令重排的缘故，可能会导致单例被 new 出来后，还没来得及执行构造函数，就被其他线程使用。 这个关键字，可以阻止字节码指令的重排序，在写 double check 代码时，习惯性会加上 volatile。</p></li></ul><p>可以看到，<strong>double check 的写法繁杂，注意点很多，它现在其实是一种反模式，已经不推荐使用了</strong>，我也不推荐你用在自己的代码里。但它能够考察面试者对并发的理解，所以这个问题经常被问到。</p><p>推荐使用 enum 实现懒加载的单例，代码片段如下：</p><blockquote><p><a href="https://book.douban.com/subject/1103015/" target="_blank" rel="noreferrer">《Effective Java》</a>这本书也同样推荐了该方式。</p></blockquote><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EnumSingleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EnumSingleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EnumSingleton </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Holder.HOLDER.instance; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Holder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        HOLDER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EnumSingleton instance; </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Holder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            instance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EnumSingleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="享元模式" tabindex="-1">享元模式 <a class="header-anchor" href="#享元模式" aria-label="Permalink to &quot;享元模式&quot;">​</a></h3><p>享元模式（Flyweight）是难得的，专门针对性能优化的设计模式，它通过共享技术，最大限度地复用对象。享元模式一般会使用唯一的标识码进行判断，然后返回对应的对象，使用 HashMap 一类的集合存储非常合适。</p><p>上面的描述，我们非常熟悉，因为在过去的一些课时中，我们就能看到很多享元模式的身影，比如《09 | 案例分析：池化对象的应用场景》里的池化对象和《10 | 案例分析：大对象复用的目标和注意点》里的对象复用等。</p><p>设计模式对这我们平常的编码进行了抽象，从不同的角度去解释设计模式，都会找到设计思想的一些共通点。比如，单例模式就是享元模式的一种特殊情况，它通过共享<strong>单个实例</strong>，达到对象的复用。</p><p>值得一提的是，同样的代码，不同的解释，会产生不同的效果。比如下面这段代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Map&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Strategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; strategys </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HashMap&lt;&gt;(); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">strategys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">put</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AStrategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">strategys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">put</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BStrategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span></code></pre></div><p>如果我们从对象复用的角度来说，它就是享元模式；如果我们从对象的功能角度来说，那它就是策略模式。所以大家在讨论设计模式的时候，一定要注意上下文语境的这些差别。</p><h3 id="原型模式" tabindex="-1">原型模式 <a class="header-anchor" href="#原型模式" aria-label="Permalink to &quot;原型模式&quot;">​</a></h3><p>原型模式（Prototype）比较类似于复制粘贴的思想，它可以首先创建一个实例，然后通过这个实例进行新对象的创建。在 Java 中，最典型的就是 <strong>Object 类的 clone 方法</strong>。</p><p>但编码中这个方法很少用，我们上面在代理模式提到的 prototype，并不是通过 clone 实现的，而是使用了更复杂的反射技术。</p><p>一个比较重要的原因就是 clone 如果只拷贝当前层次的对象，实现的只是浅拷贝。在现实情况下，对象往往会非常复杂，想要实现深拷贝的话，需要在 clone 方法里做大量的编码，远远不如调用 new 方法方便。</p><p>实现深拷贝，还有序列化等手段，比如实现 Serializable 接口，或者把对象转化成 JSON。</p><p>所以，在现实情况下，<strong>原型模式变成了一种思想，而不是加快对象创建速度的工具</strong>。</p><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><p>本课时，我们主要看了几个与性能相关的设计模式，包括一些高频的考点。我们了解到了 <strong>Java 实现动态代理</strong> 的两种方式，以及他们的区别，在现版本的 JVM 中，性能差异并不大；我们还了解到<strong>单例模式的三种创建方式</strong> ，并看了一个 double check 的反例，平常编码中，推荐使用枚举去实现单例；最后，我们学习了<strong>享元模式</strong> 和<strong>原型模式</strong>，它们概念性更强一些，并没有固定的编码模式。</p><p>我们还顺便学习了 arthas 使用 trace 命令，寻找耗时代码块的方法，最终将问题定位到 Spring 的 AOP 功能模块里，而这种场景在复杂项目中经常发生，需要你特别注意。</p><p>此外，在设计模式中，对性能帮助最大的是生产者消费者模式，比如异步消息、reactor 模型等，而这一部分内容，我们将在之后的《15 | 案例分析：从 BIO 到 NIO，再到 AIO》中详细讲解。</p><p>不过，想要了解这方面的内容，需要首先了解一些多线程编程的知识，所以下一课时，我将讲解并行计算的一些知识点，记得按时来听课。</p>`,24);function o(c,y,F,u,C,_){const i=p("Image");return l(),h("div",null,[e,a(i,{alt:"15956792012866.jpg",src:"https://s0.lgstatic.com/i/image/M00/42/D6/Ciqc1F86TXeAUqo-AADHJU0cEYI383.jpg"}),n(),E,a(i,{alt:"15956796510862.jpg",src:"https://s0.lgstatic.com/i/image/M00/42/D6/Ciqc1F86TX-Ad9lAAAEgaEWakik394.jpg"}),n(),r,a(i,{alt:"2.png",src:"https://s0.lgstatic.com/i/image/M00/42/D6/Ciqc1F86TV-AT0GiAABJVGTaUd8838.png"}),n(),d,a(i,{alt:"15957667011612.jpg",src:"https://s0.lgstatic.com/i/image/M00/42/D6/Ciqc1F86TauAd8scAAB4D1n3djc759.jpg"}),n(),g])}const v=t(k,[["render",o]]);export{A as __pageData,v as default};
