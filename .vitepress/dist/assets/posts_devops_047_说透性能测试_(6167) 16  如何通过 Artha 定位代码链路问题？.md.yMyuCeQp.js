import{_ as n,F as l,g as p,K as a,h as s,ar as h,l as t,o as e}from"./chunks/framework.VlluEs-f.js";const q=JSON.parse('{"title":"16如何通过Artha定位代码链路问题？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/047_说透性能测试/(6167) 16  如何通过 Artha 定位代码链路问题？.md","filePath":"posts/devops/047_说透性能测试/(6167) 16  如何通过 Artha 定位代码链路问题？.md","lastUpdated":1718371218000}'),k={name:"posts/devops/047_说透性能测试/(6167) 16  如何通过 Artha 定位代码链路问题？.md"},r=h(`<h1 id="_16如何通过artha定位代码链路问题" tabindex="-1">16如何通过Artha定位代码链路问题？ <a class="header-anchor" href="#_16如何通过artha定位代码链路问题" aria-label="Permalink to &quot;16如何通过Artha定位代码链路问题？&quot;">​</a></h1><p>前两讲我分别讲述了 JVM 线程分析和内存分析的实操技巧及注意点，让你可以从表象的硬件瓶颈逐渐深入到定位代码问题。类似于这样的定位方式，有一个共同点是会呈现出硬件层或者表象的一些异常。</p><p>然而并不是所有的性能问题都可以通过这样的方式去定位，有时候接口的 TPS 很低，但是各项资源占用也很低，你很难通过资源的异常去找到诊断的切入口。这样的情况也是很常见的，除了可以用<a href="https://kaiwu.lagou.com/course/courseInfo.htm?courseId=600#/detail/pc?id=6162" target="_blank" rel="noreferrer">《11 | 分布式服务链路监控以及报警方案》</a>中讲到的链路监控工具定位外，这一讲我还会带来一个代码级定位工具------Arthas，Arthas 不仅仅能够让你看到 JVM 的运行状态去定位性能问题，对于很多线上代码异常问题的排查，Arthas 也是手到擒来。</p><p>下面的场景你一定很熟悉：</p><ul><li><p>如果线上出现了偶发性问题，我们需要花费大量时间一步步排查，日志里的每个细节都不能错过，如果线上不能直接得出结论，还需要线下再去复现，很消耗时间和精力；</p></li><li><p>某行代码没有被执行，也没有出现报错信息，按照传统的方法可能会去加一些判断日志，这就涉及再次上线的问题，很多公司上线流程需要审批，这增加了内耗。</p></li></ul><p>而熟练使用 Arthas 这个工具便可以很好地解决以上问题，接下来我将介绍下 Arthas 以及实战中怎么用 Arthas 定位问题。</p><h3 id="arthas-是什么" tabindex="-1">Arthas 是什么 <a class="header-anchor" href="#arthas-是什么" aria-label="Permalink to &quot;Arthas 是什么&quot;">​</a></h3><p>Arthas 是阿里提供的<strong>一款 Java 开源诊断工具</strong>。能够查看应用的线程状态、JVM 信息等；并能够在线对业务问题诊断，比如查看方法调用的出入参、执行过程、抛出的异常、输出方法执行耗时等，大大提升了线上问题的排查效率。</p><h3 id="arthas-的使用方法" tabindex="-1">Arthas 的使用方法 <a class="header-anchor" href="#arthas-的使用方法" aria-label="Permalink to &quot;Arthas 的使用方法&quot;">​</a></h3><p>首先我们用以下命令下载 Arthas：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wget https</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//alibaba.github.io/arthas/arthas-boot.jar</span></span></code></pre></div><p>Arthas 提供的程序包是以 jar 的形式给出，因此我们可以看出 Arthas 本质也是个 Java 应用。</p><p>然后使用 java -jar 命令启动，如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">java </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jar arthas</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">boot.jar</span></span></code></pre></div><p>输入启动命令后会跳出选项让你选择要监控的后台 Java 进程，如下代码所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">JD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]# java </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jar arthas</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">boot.jar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] arthas</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">boot version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] Found existing java process, please choose one and input the serial number of the process, eg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Then hit ENTER.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 689</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cctestplatform.jar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 31953</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> unimall.jar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 14643</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sentinel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dashboard</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.jar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20421</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.apache.zookeeper.server.quorum.QuorumPeerMain</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10694</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> demo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SNAPSHOT.jar</span></span></code></pre></div><p>其中序号表示的就是 Arthas 自动识别的所在服务器的 Java 进程，然后输入要监控的进程的序号并回车，Arthas 便会接着启动，出现 Arthas Logo 之后便可以使用 Arthas 了，如下代码所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] arthas home</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">root</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.arthas</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lib</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">arthas</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] Try to attach process </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10694</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] Attach process </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10694</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> success.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] arthas</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">client connect </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3658</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wiki https</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//arthas.aliyun.com/doc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tutorials https</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//arthas.aliyun.com/doc/arthas-tutorials.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pid </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10694</span></span></code></pre></div><p>另外如果你想要打印帮助信息可以在启动命令后面加 -h 来完成，如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">java </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jar arthas</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">boot.jar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span></span></code></pre></div><h3 id="arthas-实操演示" tabindex="-1">Arthas 实操演示 <a class="header-anchor" href="#arthas-实操演示" aria-label="Permalink to &quot;Arthas 实操演示&quot;">​</a></h3><h4 id="_1-利用-arthas-线程相关命令定位死锁问题" tabindex="-1">1.利用 Arthas 线程相关命令定位死锁问题 <a class="header-anchor" href="#_1-利用-arthas-线程相关命令定位死锁问题" aria-label="Permalink to &quot;1.利用 Arthas 线程相关命令定位死锁问题&quot;">​</a></h4><p>在排查问题前我们先了解下<strong>死锁</strong>，死锁是指由于两个或者多个线程互相持有对方所需要的资源，导致这些线程处于等待状态，无法前往执行。如果没有外力的作用，那么死锁涉及的各个线程都将永久处于循环等待状态，导致业务无法预期运行，所以我们的代码要避免死锁的情况。</p><p>死锁就好比打游戏排位的时候， A 和 B 不能选相同的英雄，A 选了诸葛亮，但是突然间后悔了，想重新选貂蝉，但是貂蝉已经被 B 选了，但是 B 选择之后也后悔了，想重新选诸葛亮，但是诸葛亮已经被 A 选了。这个时候 A 和 B 都不让步，结果是谁都无法选到想要的英雄。</p><p>死锁的代码演示如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //线程Lock1代码示意</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        synchronized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;obj1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Thread.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//获取obj1后先等一会儿，让Lock2有足够的时间锁住obj2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            synchronized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;obj2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Lock1 lock obj2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //线程Lock2代码示意</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        synchronized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;obj2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Thread.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//获取obj2后先等一会儿，让Lock1有足够的时间锁住obj1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            synchronized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;obj1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Lock2 lock obj1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><p>把以上代码放到服务器中执行，然后我们可以使用 Arthas 的 jvm 命令查看到线程死锁数目为 2，说明程序发生了死锁，如下图所示：</p>`,27),E=t("p",null,"图 1：死锁示意图",-1),d=t("p",null,"接下来我们输入 thread -b 命令查看当前阻塞其他线程的线程，然后我们可以看到 Lock 1 被阻塞了，访问的资源被 Lock 2 占用，如图 2 所示，根据提示的行数我们便能找到死锁位置，对代码进行优化。",-1),g=h(`<p>图 2：thread 演示死锁详情图</p><h4 id="_2-使用-trace-命令查看耗时" tabindex="-1">2.使用 trace 命令查看耗时 <a class="header-anchor" href="#_2-使用-trace-命令查看耗时" aria-label="Permalink to &quot;2.使用 trace 命令查看耗时&quot;">​</a></h4><p>我们写几个不同循环次数的方法，分别代表方法耗时不同，代码如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//示例代码,timeCost是个接口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timeCost</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    cost1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    cost2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    cost3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cost3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//进行200万次循环......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cost2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //进行10万次循环......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cost1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //进行10次循环...... </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>部署之后我们使用 trace 来查找最耗时的方法，在此过程中需要知道<strong>包名</strong> 、<strong>类名</strong> ，以及<strong>方法的名字</strong>。上述代码方法所在包名为 com.cctest.arthas_demo.controller，类名为 StressSceneController，所以我们需要输入如下 trace 命令：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">trace</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">com.cctest.arthas_demo.controller.StressSceneController timeCost</span></span></code></pre></div><p>输完命令后回车，然后 arthas 程序就进入了等待访问状态。这时候访问接口 /timeCost，我们就可以看到被测程序台在疯狂打印日志，等结束之后，arthas 命令窗口便输出了各方法耗时时间，如图 3 所示：</p>`,7),o=h(`<p>图 3：方法耗时详情</p><p>我们可以看到 timeCost 方法总耗时 258391ms：</p><ul><li><p>cost 1 调用耗时 9 ms；</p></li><li><p>cost 2 调用耗时 13909 ms；</p></li><li><p>cost 3 调用耗时 244472 ms。</p></li></ul><p>cost 2 和 cost 3 方法耗时都比较长，当你能够定位到方法级别的消耗时长时，基本已经能够找到问题的根因了。</p><h4 id="_3-使用-watch-命令观察被测方法的参数和返回值" tabindex="-1">3.使用 watch 命令观察被测方法的参数和返回值 <a class="header-anchor" href="#_3-使用-watch-命令观察被测方法的参数和返回值" aria-label="Permalink to &quot;3.使用 watch 命令观察被测方法的参数和返回值&quot;">​</a></h4><p>当遇到线上数据问题时，我们一般有两种查找问题的途径：</p><ul><li><p>在开发环境中模拟线上数据来<strong>复现问题</strong>，不过因为环境等各方面的不同，很多情况下模拟数据复现都有难度；</p></li><li><p>在<strong>生产日志里查找线索</strong>，如果没有相关方法的入参，以及没打印返回值的话，就难以找到有效的信息。</p></li></ul><p>这两种传统查找问题的方式都存在一定的局限性，而使用 Arthas 的 watch 命令可以很方便地根据观察方法入参和出参来判断是否正确定位了代码问题。</p><p>为了能够让你更清楚地看到方法名和出参入参，我写了一段示例代码，如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GetMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/login&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">login</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;userName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) String userName, @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pwd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)String pwd){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;OK&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>然后我们输入 watch 命令，其中 login 后面指定了<strong>需要控制台输出的内容</strong>，params[0] 代表第一个参数，如果参数有多个，只要 params 加上下标即可，returnObj 代表返回值，示意代码如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watch com.cctest.arthas_demo.controller.StressSceneController login </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{params[0],params[1],returnObj}&quot;</span></span></code></pre></div><p>你可以看到输入上述命令后的返回信息如下：</p>`,13),c=h('<p>图 4：watch 返回信息</p><h4 id="_4-使用-tt-命令定位异常调用" tabindex="-1">4.使用 tt 命令定位异常调用 <a class="header-anchor" href="#_4-使用-tt-命令定位异常调用" aria-label="Permalink to &quot;4.使用 tt 命令定位异常调用&quot;">​</a></h4><p>tt 与上面的 watch 的命令有些类似，都可以排查函数的调用情况。但是对于函数调用 n 次中有几次是异常情况，用 watch 就没有那么方便，使用 tt 命令就可以很方便地查看异常的调用及其信息。</p><p>使用 tt 命令示意如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t com.cctest.arthas_demo.controller.StressSceneController login</span></span></code></pre></div><p>然后我们访问接口，每次访问的状态和结果显示如图 5 所示：</p>',6),y=h('<p>图 5：tt 的返回信息</p><p>从图中可以看出，tt 显示的信息比 watch 全面。其中 IS-RET 项如果为 false，即为错误的调用。</p><p>以上部分介绍了 Arthas 命令在实际例子中的使用，我是通过命令行的方式来演示的，所以你需要登上服务器。之前有提到过，并不是所有的同学都有权限直接进行服务器的操作，那面对这样的情况如何使用 Arthas 呢？其实也是有解决方法的，接下来我们将介绍通过 Web 的方式操作 Arthas。</p><h3 id="通过-web-的方式操作-arthas" tabindex="-1">通过 Web 的方式操作 Arthas <a class="header-anchor" href="#通过-web-的方式操作-arthas" aria-label="Permalink to &quot;通过 Web 的方式操作 Arthas&quot;">​</a></h3><p>Arthas 提供了客户端访问程序 Arthas Tunnel Server，这样我们便可以操作 Arthas 了，接下来我介绍下 Arthas Tunnel Server 的操作步骤以及操作原理。</p><h4 id="_1-arthas-tunnel-server-的操作步骤" tabindex="-1">1.Arthas Tunnel Server 的操作步骤 <a class="header-anchor" href="#_1-arthas-tunnel-server-的操作步骤" aria-label="Permalink to &quot;1.Arthas Tunnel Server 的操作步骤&quot;">​</a></h4><p>（1）下载 arthas-tunnel-server.jar，<a href="https://github.com/alibaba/arthas/releases" target="_blank" rel="noreferrer">点击下载地址</a>；</p><p>（2）把 Arthas Tunnel Server 部署到能和线上服务器通信的目标服务器；</p><p>（3）确保线上服务器启动了 Arthas，线上启动 Arthas 的操作命令，如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">java </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jar arthas</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">boot.jar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tunnel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ws://目标服务器ip:目标服务器port/ws&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ip</span></span></code></pre></div><ul><li><p>这里说的 target-ip 是指被测程序所在服务器的 IP；</p></li><li><p>目标服务器即 Arthas Tunnel Server 启动的服务器，端口号默认是 8080。</p></li></ul><p>（4）在浏览器中输入 <a href="http://%E7%9B%AE%E6%A0%87%E6%9C%8D%E5%8A%A1%E5%99%A8ip:%E7%9B%AE%E6%A0%87%E6%9C%8D%E5%8A%A1%E5%99%A8port%E5%B0%B1%E5%8F%AF%E4%BB%A5%E8%AE%BF%E9%97%AE%E5%88%B0WebConsole" target="_blank" rel="noreferrer">http://目标服务器ip:目标服务器port</a>，就可以访问 WebConsole，如图 6 所示：</p>',12),A=t("p",null,"图 6：Web 方式 Arthas 启动",-1),F=t("p",null,"然后我们输入 ip、port 和 agentid 就可以连上被测程序，并且可以开始对被测程序输入 Arthas 命令。接下来的 Arthas 的使用和命令行方式是一样的，不再赘述。",-1),u=t("h4",{id:"_2-arthas-tunnel-server-的操作原理",tabindex:"-1"},[s("2.Arthas Tunnel Server 的操作原理 "),t("a",{class:"header-anchor",href:"#_2-arthas-tunnel-server-的操作原理","aria-label":'Permalink to "2.Arthas Tunnel Server 的操作原理"'},"​")],-1),_=t("p",null,"通过 Arthas Tunnel Server 的操作步骤，我们可以总结出它实现 Web 访问的原理：所有节点的 Arthas 服务启动都会向注册中心（Arthas Tunnel Server）注册，注册中心维护了一个节点列表，当客户端发起访问某个节点，Arthas Tunnel Server 便会从维护的节点列表找到与请求的 ip 和端口号对应的节点进行访问，然后把访问结果返回给客户端。具体流程如图 7 所示：",-1),C=h('<p>图 7：Arthas Tunnel Server 原理图</p><p>通过 Web 方式使用 Arthas 与我们上面所说的非 Web 的方式最大的不同：</p><ul><li><p>Web 方式可以授权连接之后通过浏览器输入 Arthas 命令；</p></li><li><p>非 Web 方式则是直接 ssh 连接服务器输入命令。</p></li></ul><p>两者比较起来 Web 方式虽然操作麻烦些，不过在权限管控比较严格的情况下提供了使用 Arthas 的可行性。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>这一讲我主要介绍了 Arthas 是什么、为什么使用 Arthas，以及通过实际操作演示 Arthas 是怎么实时定位代码问题的，并且为你介绍了 Arthas Tunnel Server 的操作步骤以及原理。上面第三部分的 4 个操作实例都是比较典型的排查线上问题的方式，通过实例的演示也能看出来 Arthas 的强大和便捷性。</p><p>希望这一讲能够对你在实际项目中定位代码问题有所帮助，也能对 Arthas 有一个更深刻的了解。有任何问题，都欢迎在留言区与我交流。</p><p>下一讲我带你学习互联网架构中常用的中间件 Redis，从性能的层面来看 Redis 应当如何使用，到时见。</p>',8);function v(b,D,m,B,j,T){const i=l("Image");return e(),p("div",null,[r,a(i,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image6/M01/0F/0C/Cgp9HWA9DKuAMzKWAABTDaKlSO0241.png"}),s(),E,d,a(i,{alt:"image (8).png",src:"https://s0.lgstatic.com/i/image6/M01/0F/4D/CioPOWA9fFWAHUHaAAApcGDj53c885.png"}),s(),g,a(i,{alt:"image (9).png",src:"https://s0.lgstatic.com/i/image6/M01/0F/4D/CioPOWA9fHeACowAAABtN4Cdlac932.png"}),s(),o,a(i,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image6/M00/0F/09/CioPOWA9DNqARGyPAAA2hv8N8DA381.png"}),s(),c,a(i,{alt:"image (11).png",src:"https://s0.lgstatic.com/i/image6/M01/0F/50/Cgp9HWA9fMiAXBhHAABdFH1m-Fk917.png"}),s(),y,a(i,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image6/M00/0F/0D/Cgp9HWA9DPOARvDFAAHh5zegLvs919.png"}),s(),A,F,u,_,a(i,{alt:"流程图.png",src:"https://s0.lgstatic.com/i/image6/M01/0F/4D/CioPOWA9e4SAde4xAABGrtYvn5I356.png"}),s(),C])}const f=n(k,[["render",v]]);export{q as __pageData,f as default};
