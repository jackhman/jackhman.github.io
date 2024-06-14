import{_ as s,D as n,o as a,g as p,J as c,h as e,m as o,Q as t}from"./chunks/framework.f67d7268.js";const P=JSON.parse('{"title":"29Linux下的各个目录有什么作用？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/重学操作系统_文档/(4639) 29  Linux 下的各个目录有什么作用？.md","filePath":"posts/backEnd/重学操作系统_文档/(4639) 29  Linux 下的各个目录有什么作用？.md","lastUpdated":1696682708000}'),i={name:"posts/backEnd/重学操作系统_文档/(4639) 29  Linux 下的各个目录有什么作用？.md"},r=o("h1",{id:"_29linux下的各个目录有什么作用",tabindex:"-1"},[e("29Linux下的各个目录有什么作用？ "),o("a",{class:"header-anchor",href:"#_29linux下的各个目录有什么作用","aria-label":'Permalink to "29Linux下的各个目录有什么作用？"'},"​")],-1),l=o("p",null,"今天我们开始学习模块六：文件系统。学习文件系统的意义在于文件系统有很多设计思路可以迁移到实际的工作场景中，比如：",-1),_=o("ul",null,[o("li",null,[o("p",null,"MySQL 的 binlog 和 Redis AOF 都像极了日志文件系统的设计；")]),o("li",null,[o("p",null,"B Tree 用于加速磁盘数据访问的设计，对于索引设计也有通用的意义。")])],-1),g=o("p",null,"特别是近年来分布式系统的普及，学习分布式文件系统，也是理解分布式架构最核心的一个环节。其实文件系统最精彩的还是虚拟文件系统的设计，比如 Linux 可以支持每个目录用不同的文件系统。这些文件看上去是一个个目录和文件，实际上可能是磁盘、内存、网络文件系统、远程磁盘、网卡、随机数产生器、输入输出设备等，这样虚拟文件系统就成了整合一切设备资源的平台。大量的操作都可以抽象成对文件的操作，程序的书写就会完整而统一，且扩展性强。",-1),u=o("p",null,"这一讲，我会从 Linux 的目录结构和用途开始，带你认识 Linux 的文件系统。Linux 所有的文件都建立在虚拟文件系统（Virtual File System ，VFS）之上，如下图所示：",-1),h=t('<p>当你访问一个目录或者文件，虽然用的是 Linux 标准的文件 API 对文件进行操作，但实际操作的可能是磁盘、内存、网络或者数据库等。<strong>因此，Linux 上不同的目录可能是不同的磁盘，不同的文件可能是不同的设备</strong>。</p><h3 id="分区结构" tabindex="-1">分区结构 <a class="header-anchor" href="#分区结构" aria-label="Permalink to &quot;分区结构&quot;">​</a></h3><p>在 Linux 中，<code>/</code>是根目录。之前我们在&quot;<strong>08 讲</strong> &quot;提到过，每个目录可以是不同的文件系统（不同的磁盘或者设备）。你可能会问我，<code>/</code>是对应一个磁盘还是多个磁盘呢？在<code>/</code>创建目录的时候，目录属于哪个磁盘呢？</p>',3),m=o("p",null,[e("你可以用"),o("code",null,"df -h"),e("查看上面两个问题的答案，在上图中我的"),o("code",null,"/"),e("挂载到了"),o("code",null,"/dev/sda5"),e("上。如果你想要看到更多信息，可以使用"),o("code",null,"df -T"),e("，如下图所示：")],-1),x=o("p",null,[o("code",null,"/"),e("的文件系统类型是"),o("code",null,"ext4"),e('。这是一种常用的日志文件系统。关于日志文件系统，我会在"**30 讲"**为你介绍。然后你可能还会有一个疑问，'),o("code",null,"/dev/sda5"),e("究竟是一块磁盘还是别的什么？这个时候你可以用"),o("code",null,"fdisk -l"),e("查看，结果如下图：")],-1),A=t('<p>你可以看到我的 Linux 虚拟机上，有一块 30G 的硬盘（当然是虚拟的）。然后这块硬盘下有 3 个设备（Device）：/dev/sda1, /dev/sda2 和 /dev/sda5。在 Linux 中，数字 1~4 结尾的是主分区，通常一块磁盘最多只能有 4 个主分区用于系统启动。主分区之下，还可以再分成若干个逻辑分区，4 以上的数字都是逻辑分区。因此<code>/dev/sda2</code>和<code>/dev/sda5</code>是主分区包含逻辑分区的关系。</p><h3 id="挂载" tabindex="-1">挂载 <a class="header-anchor" href="#挂载" aria-label="Permalink to &quot;挂载&quot;">​</a></h3><p>分区结构最终需要最终挂载到目录上。上面例子中<code>/dev/sda5</code>分区被挂载到了<code>/</code>下。 这样在<code>/</code>创建的文件都属于这个<code>/dev/sda5</code>分区。 另外，<code>/dev/sda5</code>采用<code>ext4</code>文件系统。可见<strong>不同的目录可以采用不同的文件系统</strong>。</p><p>将一个文件系统映射到某个目录的过程叫作挂载（Mount）。当然这里的文件系统可以是某个分区、某个 USB 设备，也可以是某个读卡器等。你可以用<code>mount -l</code>查看已经挂载的文件系统。</p>',4),v=t('<p>上图中的<code>sysfs``proc``devtmpfs``tmpfs``ext4</code>都是不同的文件系统，下面我们来说说它们的作用。</p><ul><li><p><code>sysfs</code>让用户通过文件访问和设置设备驱动信息。</p></li><li><p><code>proc</code>是一个虚拟文件系统，让用户可以通过文件访问内核中的进程信息。</p></li><li><p><code>devtmpfs</code>在内存中创造设备文件节点。</p></li><li><p><code>tmpfs</code>用内存模拟磁盘文件。</p></li><li><p><code>ext4</code>是一个通常意义上我们认为的文件系统，也是管理磁盘上文件用的系统。</p></li></ul><p>你可以看到挂载记录中不仅有文件系统类型，挂载的目录（on 后面部分），还有读写的权限等。你也可以用<code>mount</code>指令挂载一个文件系统到某个目录，比如说：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">mount /dev/sda6 /abc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">mount /dev/sda6 /abc</span></span></code></pre></div><p>上面这个命令将<code>/dev/sda6</code>挂载到目录<code>abc</code>。</p><h3 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h3><p>因为 Linux 内文件系统较多，用途繁杂，Linux 对文件系统中的目录进行了一定的归类，如下图所示：</p>',7),b=t('<p><strong>最顶层的目录称作根目录，</strong> 用<code>/</code>表示。<code>/</code>目录下用户可以再创建目录，但是有一些目录随着系统创建就已经存在，接下来我会和你一起讨论下它们的用途。</p><p><strong>/bin（二进制</strong> ）包含了许多所有用户都可以访问的可执行文件，如 ls, cp, cd 等。这里的大多数程序都是二进制格式的，因此称作<code>bin</code>目录。<code>bin</code>是一个命名习惯，比如说<code>nginx</code>中的可执行文件会在 Nginx 安装目录的 bin 文件夹下面。</p><p><strong>/dev（设备文件）</strong> 通常挂载在<code>devtmpfs</code>文件系统上，里面存放的是设备文件节点。通常直接和内存进行映射，而不是存在物理磁盘上。</p><p>值得一提的是其中有几个有趣的文件，它们是虚拟设备。</p><p><strong>/dev/null</strong> 是可以用来销毁任何输出的虚拟设备。你可以用<code>&gt;</code>重定向符号将任何输出流重定向到<code>/dev/null</code>来忽略输出的结果。</p><p><strong>/dev/zero</strong>是一个产生数字 0 的虚拟设备。无论你对它进行多少次读取，都会读到 0。</p><p><strong>/dev/ramdom</strong>是一个产生随机数的虚拟设备。读取这个文件中数据，你会得到一个随机数。你不停地读取这个文件，就会得到一个随机数的序列。</p><p><strong>/etc（配置文件），</strong> <code>/etc</code>名字的含义是<code>and so on......</code>，也就是&quot;等等及其他&quot;，Linux 用它来保管程序的配置。比如说<code>mysql</code>通常会在<code>/etc/mysql</code>下创建配置。再比如说<code>/etc/passwd</code>是系统的用户配置，存储了用户信息。</p><p><strong>/proc（进程和内核文件）</strong> 存储了执行中进程和内核的信息。比如你可以通过<code>/proc/1122</code>目录找到和进程<code>1122</code>关联的全部信息。还可以在<code>/proc/cpuinfo</code>下找到和 CPU 相关的全部信息。</p><p><strong>/sbin（系统二进制）</strong> 和<code>/bin</code>类似，通常是系统启动必需的指令，也可以包括管理员才会使用的指令。</p><p><strong>/tmp（临时文件）</strong> 用于存放应用的临时文件，通常用的是<code>tmpfs</code>文件系统。因为<code>tmpfs</code>是一个内存文件系统，系统重启的时候清除<code>/tmp</code>文件，所以这个目录不能放应用和重要的数据。</p><p><strong>/var （Variable data file,，可变数据文件）</strong> 用于存储运行时的数据，比如日志通常会存放在<code>/var/log</code>目录下面。再比如应用的缓存文件、用户的登录行为等，都可以放到<code>/var</code>目录下，<code>/var</code>下的文件会长期保存。</p><p><strong>/boot（启动）</strong> 目录下存放了 Linux 的内核文件和启动镜像，通常这个目录会写入磁盘最头部的分区，启动的时候需要加载目录内的文件。</p><p><strong>/opt（Optional Software，可选软件）</strong> 通常会把第三方软件安装到这个目录。以后你安装软件的时候，可以考虑在这个目录下创建。</p><p><strong>/root（root 用户家目录）</strong> 为了防止误操作，Linux 设计中 root 用户的家目录没有设计在<code>/home/root</code>下，而是放到了<code>/root</code>目录。</p><p><strong>/home（家目录）</strong> 用于存放用户的个人数据，比如用户<code>lagou</code>的个人数据会存放到<code>/home/lagou</code>下面。并且通常在用户登录，或者执行<code>cd</code>指令后，都会在家目录下工作。 用户通常会对自己的家目录拥有管理权限，而无法访问其他用户的家目录。</p><p><strong>/media（媒体）</strong> 自动挂载的设备通常会出现在<code>/media</code>目录下。比如你插入 U 盘，通常较新版本的 Linux 都会帮你自动完成挂载，也就是在<code>/media</code>下创建一个目录代表 U 盘。</p><p><strong>/mnt（Mount，挂载）</strong> 我们习惯把手动挂载的设备放到这个目录。比如你插入 U 盘后，如果 Linux 没有帮你完成自动挂载，可以用<code>mount</code>命令手动将 U 盘内容挂载到<code>/mnt</code>目录下。</p><p><strong>/svr（Service Data,，服务数据）</strong> 通常用来存放服务数据，比如说你开发的网站资源文件（脚本、网页等）。不过现在很多团队的习惯发生了变化， 有的团队会把网站相关的资源放到<code>/www</code>目录下，也有的团队会放到<code>/data</code>下。总之，在存放资源的角度，还是比较灵活的。</p><p><strong>/usr（Unix System Resource）</strong> 包含系统需要的资源文件，通常应用程序会把后来安装的可执行文件也放到这个目录下，比如说</p><ul><li><p><code>vim</code>编辑器的可执行文件通常会在<code>/usr/bin</code>目录下，区别于<code>ls</code>会在<code>/bin</code>目录下</p></li><li><p><code>/usr/sbin</code>中会包含有通常系统管理员才会使用的指令。</p></li><li><p><code>/usr/lib</code>目录中存放系统的库文件，比如一些重要的对象和动态链接库文件。</p></li><li><p><code>/usr/lib</code>目录下会有大量的<code>.so</code>文件，这些叫作<code>Shared Object</code>，类似<code>windows</code>下的<code>dll</code>文件。</p></li><li><p><code>/usr/share</code>目录下主要是文档，比如说 man 的文档都在<code>/usr/share/man</code>下面。</p></li></ul><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>这一讲我们了解了 Linux 虚拟文件系统的设计，并且熟悉了 Linux 的目录结构。我曾经看到不少程序员把程序装到了<code>/home</code>目录，也看到过不少程序员将数据放到了<code>/root</code>目录。这样做并不会带来致命性问题，但是会给其他和你一起工作的同事带来困扰。</p><p>今天我们讲到的这些规范是整个世界通用的，如果每个人都能遵循规范的原则，工作起来就会有很好的默契。登录一台<code>linux</code>服务器，你可以通过目录结构快速熟悉。你可以查阅<code>/etc</code>下的配置，看看<code>/opt</code>下装了什么软件，这就是规范的好处。</p><p><strong>那么通过这节课的学习，你现在可以尝试来回答本节标题中的试题目：Linux下各个目录有什么作用了吗</strong>？</p><p>【<strong>解析</strong>】通常面试官会挑选其中一部分对你进行抽查，如果你快要面试了，再 Review 一下本讲的内容吧。</p><h3 id="思考题" tabindex="-1">思考题 <a class="header-anchor" href="#思考题" aria-label="Permalink to &quot;思考题&quot;">​</a></h3><p><strong>最后我再给你出一道需要查资料的思考题：socket 文件都存在哪里</strong>？</p><p>你可以把你的答案、思路或者课后总结写在留言区，这样可以帮助你产生更多的思考，这也是构建知识体系的一部分。经过长期的积累，相信你会得到意想不到的收获。如果你觉得今天的内容对你有所启发，欢迎分享给身边的朋友。期待看到你的思考！</p>',29);function f(L,T,S,q,k,C){const d=n("Image");return a(),p("div",null,[r,l,_,g,u,c(d,{alt:"Lark20201223-163616.png",src:"https://s0.lgstatic.com/i/image2/M01/03/D3/Cip5yF_jAd-APzhvAADyJAEGLTc170.png"}),e(),h,c(d,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image2/M01/03/D5/CgpVE1_jAeqAern4AAH5hspmQ0Y638.png"}),e(),m,c(d,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image2/M01/03/D5/CgpVE1_jAfGAf6BqAAGJaAmhd0Q927.png"}),e(),x,c(d,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/8B/FC/CgqCHl_jAf-AGBtKAANDnVrYDh0934.png"}),e(),A,c(d,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image2/M01/03/D3/Cip5yF_jAfeAIaUWAANFrmAEXQM991.png"}),e(),v,c(d,{alt:"Lark20201223-163621.png",src:"https://s0.lgstatic.com/i/image/M00/8B/F1/Ciqc1F_jAhGADnWLAAFf1qd349k816.png"}),e(),b])}const V=s(i,[["render",f]]);export{P as __pageData,V as default};
