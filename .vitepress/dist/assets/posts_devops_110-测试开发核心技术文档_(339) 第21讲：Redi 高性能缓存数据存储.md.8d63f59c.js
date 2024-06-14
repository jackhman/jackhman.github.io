import{_ as t,D as n,o as l,g as o,J as p,h as s,m as e,Q as i}from"./chunks/framework.f67d7268.js";const T=JSON.parse('{"title":"第21讲：Redi高性能缓存数据存储","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/110-测试开发核心技术文档/(339) 第21讲：Redi 高性能缓存数据存储.md","filePath":"posts/devops/110-测试开发核心技术文档/(339) 第21讲：Redi 高性能缓存数据存储.md","lastUpdated":1696682708000}'),d={name:"posts/devops/110-测试开发核心技术文档/(339) 第21讲：Redi 高性能缓存数据存储.md"},c=e("h1",{id:"第21讲-redi高性能缓存数据存储",tabindex:"-1"},[s("第21讲：Redi高性能缓存数据存储 "),e("a",{class:"header-anchor",href:"#第21讲-redi高性能缓存数据存储","aria-label":'Permalink to "第21讲：Redi高性能缓存数据存储"'},"​")],-1),r=e("p",null,"本课时我们主要讲解数据存储 Redis 的知识，我们先来看下 Redis 到底是什么。",-1),h=e("h2",{id:"redis-基础知识",tabindex:"-1"},[s("Redis 基础知识 "),e("a",{class:"header-anchor",href:"#redis-基础知识","aria-label":'Permalink to "Redis 基础知识"'},"​")],-1),g=i('<br><p>在 redis 官网上会有这样一句话，翻译过来就是 Redis 是开源的内存数据结构存储，也就是它是一种高效的存储数据结构的存储，可以用来作数据库，也可以用来作缓存。</p><br><p>和其他数据库相比，Redis 最大的特点就是 in-memory 所以性能会非常的高，它的数据都是在内存中进行处理，基于这一点很多公司都会用它做一些高性能的数据存储，Redis 通常情况下都是一个数据中转，数据存储到一定阶段就会从 Redis 中提取数据再存入到其他的关系型数据库进行长期保存，所以 Redis 是一个很好的用来存储中间数据的产品，了解了 Redis 的基本概念，我们接下来看 Redis 怎么去用。</p><br><p>首先，Redis 在官网上有一个演练环境叫 try.redis.io，通过这个网址可以利用它的在线环境进行演练，并了解如何使用 Redis 的一些基础指令，我们可以打开官网，里面有一个叫 Try it 的交互式教程，这个教程可以带你了解整个 Redis 的基础指令。</p><br><p>还有 Redis 支持很多的数据结构，比如字符串、列表、词典，也包括一些集合和排序等各种各样的数据结构。</p><h2 id="部署-redis" tabindex="-1">部署 Redis <a class="header-anchor" href="#部署-redis" aria-label="Permalink to &quot;部署 Redis&quot;">​</a></h2><p>我们接下来看如何部署自己的 Redis，通常情况下部署 Redis 都是使用 Docker，现在基本上所有主流的产品都是使用 Docker 来进行部署的，用 Docker 部署 Redis 也非常简单。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">docker run --name redis -p 6379:6379 -d redis</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">docker run --name redis -p 6379:6379 -d redis</span></span></code></pre></div><br><p>使用 docker run 命令就可轻松部署 Redis，其中 --name 是命名，-p 后面是开放的端口，它默认在 docker 内开放 6379 端口，然后就可以启动一个最简单的 Redis 服务了。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">docker run -it --net=host --rm redis redis-cli</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">docker run -it --net=host --rm redis redis-cli</span></span></code></pre></div><br><p>然后是客户端连接，我们可以使用 Docker 或是原生的 Redis 搭建客户端，除了使用 Docker 部署之外，Python、Shell 也有一些对应的客户端，你可以使用这些客户端工具去连接，接下来我们具体来看怎么去搭建 Redis。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">docker pull redis</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">docker pull redis</span></span></code></pre></div><br><p>首先，我们使用 docker pull 命令拉取 Redis 的最新版本。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">docker run --name redis -p 6379:6379 redis</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">docker run --name redis -p 6379:6379 redis</span></span></code></pre></div><br><p>然后，我们使用 run 命令来启动一个 Redis，-p 后面是默认开放的端口，最后加一个 Redis 的镜像。</p><br>',27),u=i('<br><p>这样它就会创建一个 Redis 服务了，通过这样的方式我们就创建了一个 Redis 服务，你可以看到前台已经开启了 6379 这个端口。这里我们没有把它放到后台而是放到了前台，你可以使用 docker的-d 参数实现后台启动。</p><h2 id="连接-redis" tabindex="-1">连接 Redis <a class="header-anchor" href="#连接-redis" aria-label="Permalink to &quot;连接 Redis&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">docker run -it --net=host --rm redis redis-cli</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">docker run -it --net=host --rm redis redis-cli</span></span></code></pre></div><br><p>那么怎么去连接 Redis 呢，我们可以使用一行 Docker 命令，和前面一样需要使用 redis-cli 客户端程序进行连接，因为我们要连接 6379 端口，你可以使用 --net=host，或者说你可以使用本地原生的客户端，还可以使用一些其他的第三方的工具，或是使用 link 命令，Docker 支持 link 命令把另外一个容器进行连接。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">docker exec -it redis bash</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">docker exec -it redis bash</span></span></code></pre></div><br><p>假如你已经连接了服务器，可以使用第一种方法连接到 Redis 的内部，这个时候使用 redis-cli 就可以连接 Redis。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">set name seveniruby</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">set name seveniruby</span></span></code></pre></div><br><p>比如说我们使用 set 为 name 进行赋值。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">get name</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">get name</span></span></code></pre></div><br><p>然后使用 get 命令获取 name，还可以使用 type 或 del 对 name 进行操作。</p><br><p>除了这个方法之外，还有一个方法是我们的 Redis Python 客户端，在 Redis 官网上可以看到提供了很多的客户端连接工具，我们现在已经完成了部署，那么怎么去连接呢，你可以从官网的 Clients 里面查找各个语言的客户端，比如 Python语言，Python 语言下有很多的库，你可以自行查找自己想要使用的库，比如它推荐使用 redis-py，我们就可以直接使用 redis-py 来进行连接。</p><br><p>我们可以使用 pip 命名了来安装它，安装完成之后使用 import 导入就可以了，接下来我们使用一个简单的方法来快速的进行安装。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">pip install redis</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">pip install redis</span></span></code></pre></div><br><p>我们现在来简单的安装客户端，使用 pip install redis 命令来对其进行安装。</p><br><p>如果你想使用 Python 客户端可以直接使用 Python 的 API，为了更好地去使用它，我们打开我们的 PyCharm。</p><br><p>我们借助 PyCharm 里面的 Python Console 去连接它，这样写代码会更方便一些。</p><br>',31),b=i('<br><p>这里面有一个 Python 的客户端，然后我们使用 import 导入 Redis，它提示我们还没有安装，那么我们需要从当前的环境里面去安装它，还是使用 pip install redis 命令，再去 import 的时候就已经可以了。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">r=redis.Redis</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">r=redis.Redis</span></span></code></pre></div><br><p>它的命令是这样的，我们以 r=redis.Redis 为例，然后在这里你可以填写 host 和 port 的两个默认值，因为它默认连接本地，所以什么都不加也是可以的，这样就创建出来一个 Redis 实例，接下来我们就可以使用 r 来完成所有的命令，举个例子：</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">r.get(&quot;name&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">r.get(&quot;name&quot;)</span></span></code></pre></div><br><p>你可以使用 ge t命令获取内容。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">r.set(&quot;name&quot;,&quot;seveniruby&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">r.set(&quot;name&quot;,&quot;seveniruby&quot;)</span></span></code></pre></div><br><p>也可以使用 set 命令将 seveniruby 赋值给 name，然后我们再次 get 就可以获取到 seveniruby，之前因为没有赋值所以获取的 name 为空，这就是一个 Python 的客户端，你可以通过 Python 或是 Java 的客户端连接 Redis，实现编程上的一些数据存储。</p><h2 id="redis-数据结构" tabindex="-1">Redis 数据结构 <a class="header-anchor" href="#redis-数据结构" aria-label="Permalink to &quot;Redis 数据结构&quot;">​</a></h2><p>了解了几个经典的连接 Redis 的方法之后，我们接下来看 Redis 的数据结构，它有 String、Sets、Sorted Sets、List、Hashs、Bitmap 这几种数据结构，这里给你介绍几个常用的类型，比如 String、List、Hashs。</p><br><p>和 Python 的数据结构整体上是一致的，比如 String，前面我们已经演示过了，通过 set 命令可以给名字一个赋值，也可以通过 get 命令获取这个值。</p><br><p>还有一个是列表，列表你可以使用 push 命令，push 命令又分为两种，一种是 rpush 从尾部进行追加，还有一种是 lpush 从头部进行追加，接下来给你演示下怎么使用它。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">rpush name-list a</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">rpush name-list a</span></span></code></pre></div><br><p>首先我们使用 Docker 的 redis-cli，我们 rpush 一个 name-list 并追加一个字符 a，然后再追加一个 b，这个时候其实名字就已经有了。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">type name-list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">type name-list</span></span></code></pre></div><br><p>然后，我们使用 type name-list，你可以发现列表的类型是 list。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">lpush name-list 1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">lpush name-list 1</span></span></code></pre></div><br><p>然后我们使用 lpush 从头部追加一个 1。</p><br>',33),v=i('<br><p>然后使用 LRANGE 命令，LRANGE 命令可以给出一个列表的范围，这样就可以看到 1 是第一个数据，因为我们使用 lpush 从头部进行的追加，剩下的两个是按照尾部追加的顺序，这就是列表的简单使用。</p><br><p>还有一个在 Python 中经常使用的是词典，在 Redis 中叫作 HashMap，HashMap 可以给定一个变量的名字，然后指定它的具体的值，以 key-valve 的形式进行存储，创建完 HashMap 后你可以使用 HGET 命令获取里面的数据内容，如果你想取出所有数据使用 HGETALL 命令，这个用法也非常简单，我们给你演示下。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">HMSET name:age name seveniruby age 18</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">HMSET name:age name seveniruby age 18</span></span></code></pre></div><br><p>你可以输入这样的命令，前面是 key 和 valve 的名字，后面是具体的值。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">HGET name:age age</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">HGET name:age age</span></span></code></pre></div><br><p>然后你就可以使用 HGET 命令获取该值。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">HGETALL name:age</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">HGETALL name:age</span></span></code></pre></div><br><p>还可以使用 HGETALL 命令获取所有的值，这就是简单的 HashMap 的使用。</p><br>',17);function k(y,m,E,_,R,C){const a=n("Image");return l(),o("div",null,[c,r,h,p(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6A/29/Cgq2xl5UnhSALuEgAAGhh83dqzA844.png"}),s(),g,p(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6A/28/CgpOIF5UnhSAfn2gAANOKAd0lR8332.png"}),s(),u,p(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6A/29/Cgq2xl5UnhSAEgQJAAPoZVxUnQg142.png"}),s(),b,p(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6A/28/CgpOIF5UnhSAcT-VAABlspQ2uHA749.png"}),s(),v])}const P=t(d,[["render",k]]);export{T as __pageData,P as default};
