import{_ as l,F as h,g as p,K as n,h as s,ar as t,l as i,o as k}from"./chunks/framework.VlluEs-f.js";const M=JSON.parse('{"title":"09案例分析：池化对象的应用场景","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Java 性能优化实战 21 讲_文档/(4186) 09  案例分析：池化对象的应用场景.md","filePath":"posts/backEnd/Java 性能优化实战 21 讲_文档/(4186) 09  案例分析：池化对象的应用场景.md","lastUpdated":1718371218000}'),e={name:"posts/backEnd/Java 性能优化实战 21 讲_文档/(4186) 09  案例分析：池化对象的应用场景.md"},E=t(`<h1 id="_09案例分析-池化对象的应用场景" tabindex="-1">09案例分析：池化对象的应用场景 <a class="header-anchor" href="#_09案例分析-池化对象的应用场景" aria-label="Permalink to &quot;09案例分析：池化对象的应用场景&quot;">​</a></h1><p>在我们平常的编码中，通常会将一些对象保存起来，这主要考虑的是对象的创建成本。比如像线程资源、数据库连接资源或者 TCP 连接等，这类对象的初始化通常要花费比较长的时间，如果频繁地申请和销毁，就会耗费大量的系统资源，造成不必要的性能损失。</p><p>并且这些对象都有一个显著的特征，就是通过轻量级的重置工作，可以循环、重复地使用。这个时候，我们就可以<strong>使用一个虚拟的池子，将这些资源保存起来，当使用的时候，我们就从池子里快速获取一个即可</strong>。</p><p>在 Java 中，<strong>池化技术</strong>应用非常广泛，常见的就有数据库连接池、线程池等，本节课主讲连接池，线程池我们将在 12 课时进行介绍。</p><h3 id="公用池化包-commons-pool-2-0" tabindex="-1">公用池化包 Commons Pool 2.0 <a class="header-anchor" href="#公用池化包-commons-pool-2-0" aria-label="Permalink to &quot;公用池化包 Commons Pool 2.0&quot;">​</a></h3><p>我们首先来看一下 Java 中公用的池化包 Commons Pool 2.0，来了解一下对象池的一般结构。根据我们的业务需求，使用这套 API 能够很容易实现对象的池化管理。</p><p>GenericObjectPool 是对象池的核心类，通过传入一个对象池的配置和一个对象的工厂，即可快速创建对象池。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GenericObjectPool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PooledObjectFactory</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> factory, </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GenericObjectPoolConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config)</span></span></code></pre></div><p><strong>Redis 的常用客户端 Jedis</strong> ，就是使用 Commons Pool 管理连接池的，可以说是一个最佳实践。下图是 Jedis 使用工厂<strong>创建对象</strong>的主要代码块。对象工厂类最主要的方法就是makeObject，它的返回值是 PooledObject 类型，可以将对象使用 new DefaultPooledObject&lt;&gt;(obj) 进行简单包装返回。</p>`,9),r=i("p",null,[s("我们再来介绍一下对象的生成过程，如下图，对象在进行"),i("strong",null,"获取"),s("时，将首先尝试从对象池里拿出一个，如果对象池中没有空闲的对象，就使用工厂类提供的方法，生成一个新的。")],-1),g=t(`<p>那对象是存在什么地方的呢？这个存储的职责，就是由一个叫作 LinkedBlockingDeque的结构来承担的，它是一个双向的队列。</p><p>接下来看一下 GenericObjectPoolConfig 的主要属性：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> maxTotal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DEFAULT_MAX_TOTAL; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> maxIdle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DEFAULT_MAX_IDLE; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> minIdle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DEFAULT_MIN_IDLE; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lifo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DEFAULT_LIFO; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fairness </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DEFAULT_FAIRNESS; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> maxWaitMillis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DEFAULT_MAX_WAIT_MILLIS; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> minEvictableIdleTimeMillis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          DEFAULT_MIN_EVICTABLE_IDLE_TIME_MILLIS; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> evictorShutdownTimeoutMillis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          DEFAULT_EVICTOR_SHUTDOWN_TIMEOUT_MILLIS; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> softMinEvictableIdleTimeMillis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         DEFAULT_SOFT_MIN_EVICTABLE_IDLE_TIME_MILLIS; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> numTestsPerEvictionRun </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">           DEFAULT_NUM_TESTS_PER_EVICTION_RUN; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EvictionPolicy&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; evictionPolicy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Only 2.6.0 applications set this </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String evictionPolicyClassName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DEFAULT_EVICTION_POLICY_CLASS_NAME; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> testOnCreate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DEFAULT_TEST_ON_CREATE; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> testOnBorrow </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DEFAULT_TEST_ON_BORROW; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> testOnReturn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DEFAULT_TEST_ON_RETURN; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> testWhileIdle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DEFAULT_TEST_WHILE_IDLE; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timeBetweenEvictionRunsMillis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DEFAULT_TIME_BETWEEN_EVICTION_RUNS_MILLIS; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> blockWhenExhausted </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DEFAULT_BLOCK_WHEN_EXHAUSTED;</span></span></code></pre></div><p>参数很多，要想了解参数的意义，我们首先来看一下一个池化对象在整个池子中的生命周期。如下图所示，池子的操作主要有两个：一个是<strong>业务线程</strong> ，一个是<strong>检测线程</strong>。</p>`,4),o=t("<p>对象池在进行初始化时，要指定三个主要的参数：</p><ul><li><p><strong>maxTotal</strong> 对象池中管理的对象上限</p></li><li><p><strong>maxIdle</strong> 最大空闲数</p></li><li><p><strong>minIdle</strong> 最小空闲数</p></li></ul><p>其中 <strong>maxTotal</strong> 和业务线程有关，当业务线程想要获取对象时，会首先检测是否有空闲的对象。如果有，则返回一个；否则进入创建逻辑。此时，如果池中个数已经达到了最大值，就会创建失败，返回空对象。</p><p>对象在获取的时候，有一个非常重要的参数，那就是<strong>最大等待时间（maxWaitMillis）</strong>，这个参数对应用方的性能影响是比较大的。该参数默认为 -1，表示永不超时，直到有对象空闲。</p><p>如下图，如果对象创建非常缓慢或者使用非常繁忙，业务线程会持续阻塞 （blockWhenExhausted 默认为 true），进而导致正常服务也不能运行。</p>",5),d=t(`<p>一般面试官会问：你会把超时参数设置成多大呢？</p><p>我一般都会把最大等待时间，设置成接口可以忍受的最大延迟。比如，一个正常服务响应时间 10ms 左右，达到 1 秒钟就会感觉到卡顿，那么这个参数设置成 500~1000ms 都是可以的。超时之后，会抛出 NoSuchElementException 异常，请求<strong>会快速失败</strong>，不会影响其他业务线程，这种 Fail Fast 的思想，在互联网应用非常广泛。</p><p>带有<strong>evcit</strong> 字样的参数，主要是处理对象逐出的。池化对象除了初始化和销毁的时候比较昂贵，在运行时也会占用系统资源。比如，<strong>连接池</strong> 会占用多条连接，<strong>线程池</strong>会增加调度开销等。业务在突发流量下，会申请到超出正常情况的对象资源，放在池子中。等这些对象不再被使用，我们就需要把它清理掉。</p><p>超出 <strong>minEvictableIdleTimeMillis</strong> 参数指定值的对象，就会被强制回收掉，这个值默认是 30 分钟；<strong>softMinEvictableIdleTimeMillis</strong> 参数类似，但它只有在当前对象数量大于 minIdle 的时候才会执行移除，所以前者的动作要更暴力一些。</p><p>还有 4 个 test 参数：<strong>testOnCreate</strong> 、<strong>testOnBorrow</strong> 、<strong>testOnReturn</strong> 、<strong>testWhileIdle</strong>，分别指定了在创建、获取、归还、空闲检测的时候，是否对池化对象进行有效性检测。</p><p>开启这些检测，能保证资源的有效性，但它会耗费性能，所以默认为 false。生产环境上，建议只将 <strong>testWhileIdle</strong> 设置为 true，并通过调整<strong>空闲检测时间间隔（timeBetweenEvictionRunsMillis）</strong>，比如 1 分钟，来保证资源的可用性，同时也保证效率。</p><h3 id="jedis-jmh-测试" tabindex="-1">Jedis JMH 测试 <a class="header-anchor" href="#jedis-jmh-测试" aria-label="Permalink to &quot;Jedis JMH 测试&quot;">​</a></h3><p>使用连接池和不使用连接池，它们之间的性能差距到底有多大呢？下面是一个简单的 JMH 测试例子（见仓库），进行一个简单的 set 操作，为 redis 的 key 设置一个随机值。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Fork</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">State</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Scope.Benchmark) </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Warmup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">iterations</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">time</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Measurement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">iterations</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">time</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BenchmarkMode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Mode.Throughput) </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JedisPoolVSJedisBenchmark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    JedisPool pool </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JedisPool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;localhost&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Benchmark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> testPool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Jedis jedis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getResource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        jedis.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, UUID.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">randomUUID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        jedis.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Benchmark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> testJedis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Jedis jedis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Jedis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;localhost&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        jedis.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, UUID.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">randomUUID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        jedis.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span></code></pre></div><p>将测试结果使用 meta-chart 作图，展示结果如下图所示，可以看到使用了连接池的方式，它的吞吐量是未使用连接池方式的 5 倍！</p>`,10),y=i("h3",{id:"数据库连接池-hikaricp",tabindex:"-1"},[s("数据库连接池 HikariCP "),i("a",{class:"header-anchor",href:"#数据库连接池-hikaricp","aria-label":'Permalink to "数据库连接池 HikariCP"'},"​")],-1),c=i("p",null,[i("strong",null,"HikariCP"),s(' 源于日语"光"的意思（和光速一样快），它是 SpringBoot 中默认的数据库连接池。数据库是我们工作中经常使用到的组件，针对数据库设计的客户端连接池是非常多的，它的设计原理与我们在本课时开头提到的基本一致，可以有效地减少数据库连接创建、销毁的资源消耗。')],-1),_=i("p",null,[s("同是连接池，它们的性能也是有差别的，下图是 HikariCP 官方的一张测试图，可以看到它优异的性能，官方的 JMH 测试代码见 "),i("a",{href:"https://github.com/brettwooldridge/HikariCP-benchmark",target:"_blank",rel:"noreferrer"},"Github"),s("，我也已经拷贝了一份到仓库中。")],-1),F=t("<p><strong>一般面试题是这么问的： HikariCP 为什么快呢？主要有三个方面：</strong></p><ul><li><p>它使用 FastList 替代 ArrayList，通过初始化的默认值，减少了越界检查的操作；</p></li><li><p>优化并精简了字节码，通过使用 Javassist，减少了动态代理的性能损耗，比如使用 invokestatic 指令代替 invokevirtual 指令；</p></li><li><p>实现了无锁的 ConcurrentBag，减少了并发场景下的锁竞争。</p></li></ul><p>HikariCP 对性能的一些优化操作，是非常值得我们借鉴的，在之后的 16 课时，我们将详细分析几个优化场景。</p><p>数据库连接池同样面临一个最大值（maximumPoolSize）和最小值（minimumIdle）的问题。<strong>这里同样有一个非常高频的面试题：你平常会把连接池设置成多大呢？</strong></p><p>很多同学认为，<strong>连接池的大小设置得越大越好，有的同学甚至把这个值设置成 1000 以上，这是一种误解</strong>。根据经验，数据库连接，只需要 20~50 个就够用了。具体的大小，要根据业务属性进行调整，但大得离谱肯定是不合适的。</p><p>HikariCP 官方是不推荐设置 minimumIdle 这个值的，它将被默认设置成和 maximumPoolSize 一样的大小。如果你的数据库Server端连接资源空闲较大，不妨也可以去掉连接池的动态调整功能。</p><p>另外，根据数据库查询和事务类型，一个应用中是可以配置多个数据库连接池的，这个优化技巧很少有人知道，在此简要描述一下。</p><p>业务类型通常有两种：一种需要快速的响应时间，把数据尽快返回给用户；另外一种是可以在后台慢慢执行，耗时比较长，对时效性要求不高。如果这两种业务类型，共用一个数据库连接池，就容易发生资源争抢，进而影响接口响应速度。虽然微服务能够解决这种情况，但大多数服务是没有这种条件的，这时就可以对连接池进行拆分。</p><p>如图，在同一个业务中，根据业务的属性，我们分了两个连接池，就是来处理这种情况的。</p>",9),A=t('<p>HikariCP 还提到了另外一个知识点，在 JDBC4 的协议中，通过 Connection.isValid() 就可以检测连接的有效性。这样，我们就不用设置一大堆的 test 参数了，HikariCP 也没有提供这样的参数。</p><h3 id="结果缓存池" tabindex="-1">结果缓存池 <a class="header-anchor" href="#结果缓存池" aria-label="Permalink to &quot;结果缓存池&quot;">​</a></h3><p>到了这里你可能会发现池（Pool）与缓存（Cache）有许多相似之处。</p><p>它们之间的一个共同点，就是将对象加工后，存储在相对高速的区域。我习惯性将<strong>缓存</strong> 看作是<strong>数据对象</strong> ，而把<strong>池中的对象</strong> 看作是<strong>执行对象</strong>。缓存中的数据有一个命中率问题，而池中的对象一般都是对等的。</p><p>考虑下面一个场景，jsp 提供了网页的动态功能，它可以在执行后，编译成 class 文件，加快执行速度；再或者，一些媒体平台，会将热门文章，定时转化成静态的 html 页面，仅靠 nginx 的负载均衡即可应对高并发请求（动静分离）。</p><p>这些时候，你很难说清楚，<strong>这是针对缓存的优化，还是针对对象进行了池化，<strong>它们在</strong>本质</strong> 上只是保存了某个执行步骤的结果，使得下次访问时不需要从头再来。我通常把这种技术叫作<strong>结果缓存池</strong>（Result Cache Pool），属于多种优化手段的综合。</p><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><p>下面我来简单总结一下该课时的内容重点：</p><p>我们从 Java 中最通用的公用池化包 <strong>Commons Pool 2.0</strong> 说起，介绍了它的一些实现细节，并对一些重要参数的应用做了讲解；<strong>Jedis</strong> 就是在 Commons Pool 2.0 的基础上封装的，通过 JMH 测试，我们发现对象池化之后，有了接近 5 倍的性能提升；接下来介绍了数据库连接池中速度速快的 <strong>HikariCP</strong> ，它在池化技术之上，又通过编码技巧进行了进一步的性能提升，HikariCP 是我重点研究的类库之一，我也建议你加入自己的任务清单中。</p><p><strong>总体来说，当你遇到下面的场景，就可以考虑使用池化来增加系统性能：</strong></p><ul><li><p>对象的创建或者销毁，需要耗费较多的系统资源；</p></li><li><p>对象的创建或者销毁，耗时长，需要繁杂的操作和较长时间的等待；</p></li><li><p>对象创建后，通过一些状态重置，可被反复使用。</p></li></ul><p>将对象池化之后，只是开启了第一步优化。要想达到最优性能，就不得不调整池的一些关键参数，合理的池大小加上合理的超时时间，就可以让池发挥更大的价值。和缓存的命中率类似，对池的监控也是非常重要的。</p><p>如下图，可以看到数据库连接池连接数长时间保持在高位不释放，同时等待的线程数急剧增加，这就能帮我们快速定位到数据库的事务问题。</p>',13),D=i("p",null,"平常的编码中，有很多类似的场景。比如 Http 连接池，Okhttp 和 Httpclient 就都提供了连接池的概念，你可以类比着去分析一下，关注点也是在连接大小和超时时间上；在底层的中间件，比如 RPC，也通常使用连接池技术加速资源获取，比如 Dubbo 连接池、 Feign 切换成 httppclient 的实现等技术。",-1),C=i("p",null,[s("你会发现，在不同资源层面的池化设计也是类似的。比如"),i("strong",null,"线程池"),s("，通过队列对任务进行了二层缓冲，提供了多样的拒绝策略等，线程池我们将在 12 课时进行介绍。线程池的这些特性，你同样可以借鉴到连接池技术中，用来缓解请求溢出，创建一些溢出策略。现实情况中，我们也会这么做。那么具体怎么做？有哪些做法？这部分内容就留给大家思考了，欢迎你在下方留言，与大家一起分享讨论，我也会针对你的思考进行一一点评。")],-1),m=i("p",null,"但无论以何种方式处理对象，让对象保持精简，提高它的复用度，都是我们的目标，所以下一课时，我将系统讲解大对象的复用和注意点。",-1);function T(u,I,v,b,P,B){const a=h("Image");return k(),p("div",null,[E,n(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/3F/D1/CgqCHl8xKV-AHSvoAAX4BkEi8aQ783.png"}),s(),r,n(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/3F/C6/Ciqc1F8xKWWAfETQAAXjITHnnyY877.png"}),s(),g,n(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/3F/D1/CgqCHl8xKYKAdvm7AADGC-6LsfE257.png"}),s(),o,n(a,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/3F/D1/CgqCHl8xKZGAbtiiAABfuEZ8gwQ793.png"}),s(),d,n(a,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/3F/C6/Ciqc1F8xKaCAP0c2AADCCnpuRd0416.png"}),s(),y,c,_,n(a,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image/M00/3F/C6/Ciqc1F8xKamACdt4AAG6dLqMUDo898.png"}),s(),F,n(a,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image/M00/3F/D1/CgqCHl8xKb-AaPAfAABFiMwiWmM309.png"}),s(),A,n(a,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image/M00/3F/D1/CgqCHl8xKcyAVb5-AAHduSa-zPY995.png"}),s(),D,C,m])}const L=l(e,[["render",T]]);export{M as __pageData,L as default};
