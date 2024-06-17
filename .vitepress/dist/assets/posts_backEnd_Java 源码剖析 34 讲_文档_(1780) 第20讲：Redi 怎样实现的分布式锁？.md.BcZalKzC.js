import{_ as n,F as l,g as h,K as a,h as t,ar as s,o as e}from"./chunks/framework.VlluEs-f.js";const A=JSON.parse('{"title":"第20讲：Redi怎样实现的分布式锁？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Java 源码剖析 34 讲_文档/(1780) 第20讲：Redi 怎样实现的分布式锁？.md","filePath":"posts/backEnd/Java 源码剖析 34 讲_文档/(1780) 第20讲：Redi 怎样实现的分布式锁？.md","lastUpdated":1718371218000}'),k={name:"posts/backEnd/Java 源码剖析 34 讲_文档/(1780) 第20讲：Redi 怎样实现的分布式锁？.md"},p=s('<h1 id="第20讲-redi怎样实现的分布式锁" tabindex="-1">第20讲：Redi怎样实现的分布式锁？ <a class="header-anchor" href="#第20讲-redi怎样实现的分布式锁" aria-label="Permalink to &quot;第20讲：Redi怎样实现的分布式锁？&quot;">​</a></h1><p>&quot;锁&quot;是我们实际工作和面试中无法避开的话题之一，正确使用锁可以保证高并发环境下程序的正确执行，也就是说只有使用锁才能保证多人同时访问时程序不会出现问题。</p><p>我们本课时的面试题是，什么是分布式锁？如何实现分布式锁？</p><h3 id="典型回答" tabindex="-1">典型回答 <a class="header-anchor" href="#典型回答" aria-label="Permalink to &quot;典型回答&quot;">​</a></h3><p>第 06 课时讲了单机锁的一些知识，包括悲观锁、乐观锁、可重入锁、共享锁和独占锁等内容，但它们都属于单机锁也就是程序级别的锁，如果在分布式环境下使用就会出现锁不生效的问题，因此我们需要使用<strong>分布式锁</strong>来解决这个问题。</p><p><strong>分布式锁</strong>是控制分布式系统之间同步访问共享资源的一种方式。是为了解决分布式系统中，不同的系统或是同一个系统的不同主机共享同一个资源的问题，它通常会采用互斥来保证程序的一致性，这就是分布式锁的用途以及执行原理。</p><p>分布式锁示意图，如下图所示：</p>',7),r=s(`<p>分布式锁的常见实现方式有四种：</p><ul><li>基于 MySQL 的悲观锁来实现分布式锁，这种方式使用的最少，因为这种实现方式的性能不好，且容易造成死锁；</li><li>基于 Memcached 实现分布式锁，可使用 add 方法来实现，如果添加成功了则表示分布式锁创建成功；</li><li>基于 Redis 实现分布式锁，这也是本课时要介绍的重点，可以使用 setnx 方法来实现；</li><li>基于 ZooKeeper 实现分布式锁，利用 ZooKeeper 顺序临时节点来实现。</li></ul><p>由于 MySQL 的执行效率问题和死锁问题，所以这种实现方式会被我们先排除掉，而 Memcached 和 Redis 的实现方式比较类似，但因为 Redis 技术比较普及，所以会优先使用 Redis 来实现分布式锁，而 ZooKeeper 确实可以很好的实现分布式锁。但此技术在中小型公司的普及率不高，尤其是非 Java 技术栈的公司使用的较少，如果只是为了实现分布式锁而重新搭建一套 ZooKeeper 集群，显然实现成本和维护成本太高，所以综合以上因素，我们本文会采用 Redis 来实现分布式锁。</p><p>之所以可以使用以上四种方式来实现分布式锁，是因为以上四种方式都属于程序调用的&quot;外部系统&quot;，而分布式的程序是需要共享&quot;外部系统&quot;的，这就是<strong>分布式锁得以实现的基本前提</strong>。</p><h3 id="考点分析" tabindex="-1">考点分析 <a class="header-anchor" href="#考点分析" aria-label="Permalink to &quot;考点分析&quot;">​</a></h3><p>分布式锁的问题看似简单，但却有很多细节需要注意，比如，需要考虑分布式锁的超时问题，如果不设置超时时间的话，可能会导致死锁的产生，所以在对待这个&quot;锁&quot;的问题上，一定不能马虎。和此知识点相关的面试还有以下这些：</p><ul><li>单机锁有哪些？它为什么不能在分布式环境下使用？</li><li>Redis 是如何实现分布式锁的？可能会遇到什么问题？</li><li>分布式锁超时的话会有什么问题？如何解决？</li></ul><h3 id="知识扩展" tabindex="-1">知识扩展 <a class="header-anchor" href="#知识扩展" aria-label="Permalink to &quot;知识扩展&quot;">​</a></h3><h4 id="单机锁" tabindex="-1">单机锁 <a class="header-anchor" href="#单机锁" aria-label="Permalink to &quot;单机锁&quot;">​</a></h4><p>程序中使用的锁叫单机锁，我们日常中所说的&quot;锁&quot;都泛指<strong>单机锁</strong>，其分类有很多，大体可分为以下几类：</p><ul><li><strong>悲观锁</strong>，是数据对外界的修改采取保守策略，它认为线程很容易把数据修改掉，因此在整个数据被修改的过程中都会采取锁定状态，直到一个线程使用完，其他线程才可以继续使用，典型应用是 synchronized；</li><li><strong>乐观锁</strong>，和悲观锁的概念恰好相反，乐观锁认为一般情况下数据在修改时不会出现冲突，所以在数据访问之前不会加锁，只是在数据提交更改时，才会对数据进行检测，典型应用是 ReadWriteLock 读写锁；</li><li><strong>可重入锁</strong>，也叫递归锁，指的是同一个线程在外面的函数获取了锁之后，那么内层的函数也可以继续获得此锁，在 Java 语言中 ReentrantLock 和 synchronized 都是可重入锁；</li><li><strong>独占锁和共享锁</strong>，只能被单线程持有的锁叫做独占锁，可以被多线程持有的锁叫共享锁，独占锁指的是在任何时候最多只能有一个线程持有该锁，比如 ReentrantLock 就是独占锁；而 ReadWriteLock 读写锁允许同一时间内有多个线程进行读操作，它就属于共享锁。</li></ul><p>单机锁之所以不能应用在分布式系统中是因为，在分布式系统中，每次请求可能会被分配在不同的服务器上，而单机锁是在单台服务器上生效的。如果是多台服务器就会导致请求分发到不同的服务器，从而导致锁代码不能生效，因此会造成很多异常的问题，那么单机锁就不能应用在分布式系统中了。</p><h4 id="使用-redis-实现分布式锁" tabindex="-1">使用 Redis 实现分布式锁 <a class="header-anchor" href="#使用-redis-实现分布式锁" aria-label="Permalink to &quot;使用 Redis 实现分布式锁&quot;">​</a></h4><p>使用 Redis 实现分布式锁主要需要使用 setnx 方法，也就是 set if not exists（不存在则创建），具体的实现代码如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> setnx lock </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(integer) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #创建锁成功</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#逻辑业务处理...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> del lock</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(integer) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #释放锁</span></span></code></pre></div><p>当执行 setnx 命令之后返回值为 1 的话，则表示创建锁成功，否则就是失败。释放锁使用 del 删除即可，当其他程序 setnx 失败时，则表示此锁正在使用中，这样就可以实现简单的分布式锁了。</p><p>但是以上代码有一个问题，就是没有设置锁的超时时间，因此如果出现异常情况，会导致锁未被释放，而其他线程又在排队等待此锁就会导致程序不可用。</p><p>有人可能会想到使用 expire 来设置键值的过期时间来解决这个问题，例如以下代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> setnx lock </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(integer) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #创建锁成功</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> expire lock </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #设置锁的(过期)超时时间为 30s</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(integer) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#逻辑业务处理...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> del lock</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(integer) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #释放锁</span></span></code></pre></div><p>但这样执行仍然会有问题，因为 setnx lock true 和 expire lock 30 命令是非原子的，也就是一个执行完另一个才能执行。但如果在 setnx 命令执行完之后，发生了异常情况，那么就会导致 expire 命令不会执行，因此依然没有解决死锁的问题。</p><p>这个问题在 Redis 2.6.12 之前一直没有得到有效的处理，当时的解决方案是在客户端进行原子合并操作，于是就诞生了很多客户端类库来解决此原子问题，不过这样就增加了使用的成本。因为你不但要添加 Redis 的客户端，还要为了解决锁的超时问题，需额外的增加新的类库，这样就增加了使用成本，但这个问题在 Redis 2.6.12 版本中得到了有效的处理。</p><p>在 Redis 2.6.12 中我们可以使用一条 set 命令来执行键值存储，并且可以判断键是否存在以及设置超时时间了，如下代码所示：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> set lock </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ex </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nx</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OK</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #创建锁成功</span></span></code></pre></div><p>其中，ex 是用来设置超时时间的，而 nx 是 not exists 的意思，用来判断键是否存在。如果返回的结果为&quot;OK&quot;则表示创建锁成功，否则表示此锁有人在使用。</p><h4 id="锁超时" tabindex="-1">锁超时 <a class="header-anchor" href="#锁超时" aria-label="Permalink to &quot;锁超时&quot;">​</a></h4><p>从上面的内容可以看出，使用 set 命令之后好像一切问题都解决了，但在这里我要告诉你，其实并没有。例如，我们给锁设置了超时时间为 10s，但程序的执行需要使用 15s，那么在第 10s 时此锁因为超时就会被释放，这时候线程二在执行 set 命令时正常获取到了锁，于是在很短的时间内 2s 之后删除了此锁，这就造成了锁被误删的情况，如下图所示：</p>`,26),d=s(`<p>锁被误删的解决方案是在使用 set 命令创建锁时，给 value 值设置一个归属标识。例如，在 value 中插入一个 UUID，每次在删除之前先要判断 UUID 是不是属于当前的线程，如果属于再删除，这样就避免了锁被误删的问题。</p><p>注意：在锁的归属判断和删除的过程中，不能先判断锁再删除锁，如下代码所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(uuid.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">equals</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(uuid)){ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 判断是否是自己的锁</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	del</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(luck); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 删除锁</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>应该把判断和删除放到一个原子单元中去执行，因此需要借助 Lua 脚本来执行，在 Redis 中执行 Lua 脚本可以保证这批命令的原子性，它的实现代码如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 释放分布式锁</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> jedis</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Redis客户端</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> lockKey</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 锁的 key</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> flagId</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 锁归属标识</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@return</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否释放成功</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> unLock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Jedis jedis, String lockKey, String flagId) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    String script </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;if redis.call(&#39;get&#39;, KEYS[1]) == ARGV[1] then return redis.call(&#39;del&#39;, KEYS[1]) else return 0 end&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Object result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> jedis.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(script, Collections.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">singletonList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lockKey), Collections.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">singletonList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(flagId));</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1L&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">equals</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result)) { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 判断执行结果</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>其中，Collections.singletonList() 方法是将 String 转成 List，因为 jedis.eval() 最后两个参数要求必须是 List 类型。</p><p>锁超时可以通过两种方案来解决：</p><ul><li>把执行耗时的方法从锁中剔除，减少锁中代码的执行时间，保证锁在超时之前，代码一定可以执行完；</li><li>把锁的超时时间设置的长一些，正常情况下我们在使用完锁之后，会调用删除的方法手动删除锁，因此可以把超时时间设置的稍微长一些。</li></ul><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><p>本课时我们讲了分布式锁的四种实现方式，即 MySQL、Memcached、Redis 和 ZooKeeper，因为 Redis 的普及率比较高，因此对于很多公司来说使用 Redis 实现分布式锁是最优的选择。本课时我们还讲了使用 Redis 实现分布式锁的具体步骤以及实现代码，还讲了在实现过程中可能会遇到的一些问题以及解决方案。</p>`,10);function E(g,o,c,y,F,u){const i=l("Image");return e(),h("div",null,[p,a(i,{alt:"image.png",src:"https://s0.lgstatic.com/i/image/M00/0A/9B/Ciqc1F6-RROAUcMEAAL3Ow-bgjQ999.png"}),t(),r,a(i,{alt:"image (1).png",src:"https://s0.lgstatic.com/i/image/M00/0A/9C/Ciqc1F6-RbWAVBh6AACDXMnJ8iE037.png"}),t(),d])}const D=n(k,[["render",E]]);export{A as __pageData,D as default};
