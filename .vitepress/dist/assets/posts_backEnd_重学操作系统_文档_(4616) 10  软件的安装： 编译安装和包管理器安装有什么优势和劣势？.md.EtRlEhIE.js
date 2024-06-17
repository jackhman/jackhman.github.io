import{_ as c,F as n,g as d,K as a,h as e,ar as o,l as i,o as t}from"./chunks/framework.VlluEs-f.js";const Y=JSON.parse('{"title":"10软件的安装：编译安装和包管理器安装有什么优势和劣势？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/重学操作系统_文档/(4616) 10  软件的安装： 编译安装和包管理器安装有什么优势和劣势？.md","filePath":"posts/backEnd/重学操作系统_文档/(4616) 10  软件的安装： 编译安装和包管理器安装有什么优势和劣势？.md","lastUpdated":1718371218000}'),l={name:"posts/backEnd/重学操作系统_文档/(4616) 10  软件的安装： 编译安装和包管理器安装有什么优势和劣势？.md"},p=o('<h1 id="_10软件的安装-编译安装和包管理器安装有什么优势和劣势" tabindex="-1">10软件的安装：编译安装和包管理器安装有什么优势和劣势？ <a class="header-anchor" href="#_10软件的安装-编译安装和包管理器安装有什么优势和劣势" aria-label="Permalink to &quot;10软件的安装：编译安装和包管理器安装有什么优势和劣势？&quot;">​</a></h1><p><strong>今天给你带来的面试题是：编译安装和包管理器安装有什么优势和劣势</strong>？为了搞清楚这个问题，就引出了今天的话题，在 Linux 上如何安装程序。</p><p>在 Linux 上安装程序大概有 2 种思路：</p><ol><li><p>直接编译源代码；</p></li><li><p>使用包管理器。</p></li></ol><p>受开源运动影响，Linux 上很多软件都可以拿到源代码，这也是 Linux 能取得成功的一个重要原因。接下来我们先尝试用包管理器安装应用，然后再用一个实战的例子，教你如何编译安装<code>nginx</code>。</p><h3 id="包管理器使用" tabindex="-1">包管理器使用 <a class="header-anchor" href="#包管理器使用" aria-label="Permalink to &quot;包管理器使用&quot;">​</a></h3><p>Linux 下的应用程序多数以软件包的形式发布，用户拿到对应的包之后，使用包管理器进行安装。说到包管理器，就要提到<code>dpkg</code>和<code>rpm</code>。</p><p>我们先说说包。 Linux 下两大主流的包就是<code>rpm</code>和<code>dpkg</code>。</p><p><code>dpkg</code>（debian package），是<code>linux</code>一个主流的社区分支开发出来的。社区就是开源社区，有很多世界顶级的程序员会在社区贡献代码，比如 github。一般衍生于<code>debian</code>的 Linux 版本都支持<code>dpkg</code>，比如<code>ubuntu</code>。</p><p><code>rpm</code>（redhatpackage manager）。在正式讲解之前，我们先来聊聊 RedHat 这家公司。</p><p>RedHat 是一个做 Linux 的公司，你可以把它理解成一家&quot;保险公司&quot;。 很多公司购买红帽的服务，是为了给自己的业务上一个保险。以防万一哪天公司内部搞不定 Linux 底层，或者底层有 Bug，再或者底层不适合当下的业务发展，需要修改等问题，红帽的工程师都可以帮企业解决。</p><p>再比如，RedHat 收购了JBoss，把 JBoss 改名为 WildFly。 像 WildFly 这种工具更多是面向企业级，比如没有大量研发团队的企业会更倾向使用成熟的技术。RedHat 公司也有自己的 Linux，就叫作 RedHat。RedHat 系比较重要的 Linux 有 RedHat/Fedora 等。</p><p>无论是<code>dpkg</code>还是<code>rpm</code>都抽象了自己的包格式，就是以<code>.dpkg</code>或者<code>.rpm</code>结尾的文件。</p><p><code>dpkg</code>和<code>rpm</code>也都提供了类似的能力：</p><ul><li><p>查询是否已经安装了某个软件包；</p></li><li><p>查询目前安装了什么软件包；</p></li><li><p>给定一个软件包，进行安装；</p></li><li><p>删除一个安装好的软件包。</p></li></ul><p>关于<code>dpkg</code>和<code>rpm</code>的具体用法，你可以用<code>man</code>进行学习。接下来我们聊聊<code>yum</code>和<code>apt</code>。</p><h4 id="自动依赖管理" tabindex="-1">自动依赖管理 <a class="header-anchor" href="#自动依赖管理" aria-label="Permalink to &quot;自动依赖管理&quot;">​</a></h4><p>Linux 是一个开源生态，因此工具非常多。工具在给用户使用之前，需要先打成<code>dpkg</code>或者<code>rpm</code>包。 有的时候一个包会依赖很多其他的包，而<code>dpkg</code>和<code>rpm</code>不会对这种情况进行管理，有时候为了装一个包需要先装十几个依赖的包，过程非常艰辛！因此现在多数情况都在用<code>yum</code>和<code>apt</code>。</p><p><strong>yum</strong></p><p>你可能会说，我不用<code>yum</code>也不用<code>apt</code>，我只用<code>docker</code>。首先给你一个连击 666，然后我还是要告诉你，如果你做<code>docker</code>镜像，那么还是要用到<code>yum</code>和<code>apt</code>，因此还是有必要学一下。</p><p><code>yum</code>的全名是 Yellodog Updator，Modified。 看名字就知道它是基于<code>Yellodog Updator</code>这款软件修改而来的一个工具。<code>yum</code>是 Python 开发的，提供的是<code>rpm</code>包，因此只有<code>redhat</code>系的 Linux，比如 Fedora，Centos 支持<code>yum</code>。<code>yum</code>的主要能力就是帮你解决下载和依赖两个问题。</p><p>下载之所以是问题，是因为 Linux 生态非常庞大，有时候用户不知道该去哪里下载一款工具。比如用户想安装<code>vim</code>，只需要输入<code>sudo yum install vim</code>就可以安装了。<code>yum</code>的服务器收集了很多<code>linux</code>软件，因此<code>yum</code>会帮助用户找到<code>vim</code>的包。</p><p>另一方面，<code>yum</code>帮助用户解决了很多依赖，比如用户安装一个软件依赖了 10 个其他的软件，<code>yum</code>会把这 11 个软件一次性的装好。</p><p>关于<code>yum</code>的具体用法，你可以使用man工具进行学习。</p><p><strong>apt</strong></p><p>接下来我们来重点说说<code>apt</code>，然后再一起尝试使用。因为我这次是用<code>ubuntu</code>Linux 给你教学，所以我以 apt 为例子，yum 的用法是差不多的，你可以自己 man 一下。</p><p><code>apt</code>全名是 Advanced Packaging Tools，是一个<code>debian</code>及其衍生 Linux 系统下的包管理器。由于<code>advanced</code>（先进）是相对于<code>dpkg</code>而言的，因此它也能够提供和<code>yum</code>类似的下载和依赖管理能力。比如在没有<code>vim</code>的机器上，我们可以用下面的指令安装<code>vim</code>。如下图所示：</p>',27),r=o("<p>然后用<code>dpkg</code>指令查看 vim 的状态是<code>ii</code>。第一个<code>i</code>代表期望状态是已安装，第二个<code>i</code>代表实际状态是已安装。</p><p>下面我们卸载<code>vim</code>，再通过<code>dpkg</code>查看，如下图所示：</p>",2),h=i("p",null,[e("我们看到 vim 的状态从"),i("code",null,"ii"),e("变成了"),i("code",null,"rc"),e("，"),i("code",null,"r"),e("是期望删除，"),i("code",null,"c"),e("是实际上还有配置文件遗留。 如果我们想彻底删除配置文件，可以使用"),i("code",null,"apt purge"),e("，就是彻底清除的意思，如下图所示：")],-1),g=i("p",null,[e("再使用"),i("code",null,"dpkg -l"),e("时，"),i("code",null,"vim"),e("已经清除了。")],-1),k=i("p",null,[e("期待结果是"),i("code",null,"u"),e("就是 unkonw（未知）说明已经没有了。实际结果是"),i("code",null,"n"),e("，就是 not-installed（未安装）。")],-1),u=i("p",null,[e("如果想查询"),i("code",null,"mysql"),e("相关的包，可以使用"),i("code",null,"apt serach mysql"),e("，这样会看到很多和"),i("code",null,"mysql"),e("相关的包，如下图所示：")],-1),_=i("p",null,[e("如果我们想精确查找一个叫作"),i("code",null,"mysql-server"),e("的包，可以用"),i("code",null,"apt list"),e("。")],-1),m=o(`<p>这里我们找到了<code>mysql-server</code>包。</p><p>另外有时候国内的<code>apt</code>服务器速度比较慢，你可以尝试使用阿里云的镜像服务器。具体可参考我下面的操作：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">etc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sources.list</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">以下是文件内容</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">deb http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">deb http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">deb http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">deb http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">deb http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">deb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">src http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">deb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">src http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">deb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">src http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">deb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">src http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">deb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">src http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse</span></span></code></pre></div><p>镜像地址可以通过<code>/etc/apt/sources.list</code>配置，注意<code>focal</code>是我用的<code>ubuntu</code>版本，你可以使用<code>sudo lsb_release</code>查看自己的 Ubuntu 版本。如果你想用我上面给出的内容覆盖你的<code>sources.list</code>，只需把版本号改成你自己的。注意，每个<code>ubuntu</code>版本都有自己的代号。</p>`,4),A=o('<p>通过上面的学习，相信你已经逐渐了解了包管理器的基本概念和使用。如果你是<code>centos</code>或者<code>fedora</code>，需要自己<code>man</code>一下<code>yum</code>。</p><h3 id="编译安装-nginx" tabindex="-1">编译安装 Nginx <a class="header-anchor" href="#编译安装-nginx" aria-label="Permalink to &quot;编译安装 Nginx&quot;">​</a></h3><p>接下来我们说说编译安装 Nginx（发音是 engine X），是一个家喻户晓的 Web 服务器。 它的发明者是俄国的伊戈尔·赛索耶夫。赛索耶夫 2002 年开始写 Nginx，主要目的是解决同一个互联网节点同时进入大量并发请求的问题。注意，大量并发请求不是大量 QPS 的意思，QPS 是吞吐量大，需要快速响应，而高并发时则需要合理安排任务调度。</p><p>后来塞索耶夫成立了 Nginx 公司， 2018 年估值到达到 4.3 亿美金。现在基本上国内大厂的 Web 服务器都是基于 Nginx，只不过进行了特殊的修改，比如淘宝用 Tengine。</p><p>下面我们再来看看源码安装，在 Linux 上获取<code>nginx</code>源码，可以去搜索 <a href="http://nginx.org/en/docs/" target="_blank" rel="noreferrer">Nginx 官方网站</a>，一般都会提供源码包。</p>',5),E=o('<p>如上图所示，可以看到 nginx-1.18.0 的网址是：<a href="http://nginx.org/download/nginx-1.19.2.tar.gz" target="_blank" rel="noreferrer">http://nginx.org/download/nginx-1.19.2.tar.gz</a>。然后我们用 wget 去下载这个包。 wget 是 GNU 项目下的下载工具，GNU 是早期<code>unix</code>项目的一个变种。<code>linux</code>下很多工具都是从<code>unix</code>继承来的，这就是开源的好处，很多工具不用再次开发了。你可能很难想象<code>windows</code>下的命令工具可以在<code>linux</code>下用，但是<code>linux</code>下的工具却可以在任何系统中用。 因此，<code>linux</code>下面的工具发展速度很快，如今已成为最受欢迎的服务器操作系统。</p><p>当然也有同学的机器上没有<code>wget</code>，那么你可以用<code>apt</code>安装一下。</p><ul><li>第一步：下载源码。我们使用<code>wget</code>下载<code>nginx</code>源码包：</li></ul>',3),y=i("p",null,[e("可以像我这样使用"),i("code",null,"cd"),e("先切换到家目录。")],-1),D=i("ul",null,[i("li",null,[e("第二步：解压。我们解压下载好的"),i("code",null,"nginx"),e("源码包。")])],-1),x=o("<p>用<code>ls</code>发现包已经存在了，然后使用<code>tar</code>命令解压。</p><p><code>tar</code>是用来打包和解压用的。之所以叫作<code>tar</code>是有一些历史原因：<code>t</code>代表<code>tape</code>（磁带）；<code>ar</code>是 archive（档案）。因为早期的存储介质很小，人们习惯把文件打包然后存储到磁带上，那时候<code>unix</code>用的命令就是<code>tar</code>。因为<code>linux</code>是个开源生态，所以就沿袭下来继续使用<code>tar</code>。</p><p><code>-x</code>代表 extract（提取）。-z代表<code>gzip</code>，也就是解压<code>gz</code>类型的文件。<code>-v</code>代表 verbose（显示细节），如果你不输入<code>-v</code>，就不会打印解压过程了。<code>-f</code>代表 file，这里指的是要操作文件，而不是磁带。 所以<code>tar</code>解压通常带有<code>x</code>和<code>f</code>，打包通常是<code>c</code>就是 create 的意思。</p><ul><li>第三步：配置和解决依赖。解压完，我们进入<code>nginx</code>的目录看一看。 如下图所示：</li></ul>",4),C=i("p",null,[e("可以看到一个叫作"),i("code",null,"configure"),e("的文件是绿色的，也就是可执行文件。然后我们执行 configure 文件进行配置，这个配置文件来自一款叫作"),i("code",null,"autoconf"),e("的工具，也是 GNU 项目下的，说白了就是"),i("code",null,"bash"),e("（Bourne Shell）下的安装打包工具（就是个安装程序）。这个安装程序支持很多配置，你可以用"),i("code",null,"./configure --help"),e("看到所有的配置项，如下图所示：")],-1),b=o("<p>这里有几个非常重要的配置项，叫作<code>prefix</code>。<code>prefix</code>配置项决定了软件的安装目录。如果不配置这个配置项，就会使用默认的安装目录。<code>sbin-path</code>决定了<code>nginx</code>的可执行文件的位置。<code>conf-path</code>决定了<code>nginx</code>配置文件的位置。我们都使用默认，然后执行<code>./configure</code>，如下图所示：</p>",1),T=i("p",null,[i("code",null,"autoconf"),e("进行依赖检查的时候，报了一个错误，cc 没有找到。这是因为机器上没有安装"),i("code",null,"gcc"),e("工具，gcc 是家喻户晓的工具套件，全名是 GNU Compiler Collection------里面涵盖了包括 c/c++ 在内的多门语言的编译器。")],-1),v=i("p",null,[e("我们用包管理器，安装"),i("code",null,"gcc"),e("，如下图所示。安装"),i("code",null,"gcc"),e("通常是安装"),i("code",null,"build-essential"),e("这个包。")],-1),f=i("p",null,[e("安装完成之后，再执行"),i("code",null,"./configure"),e("，如下图所示：")],-1),q=i("p",null,"我们看到配置程序开始执行。但是最终报了一个错误，如下图所示：",-1),F=o("<p>报错的内容是，<code>nginx</code>的<code>HTTP rewrite</code>模块，需要<code>PCRE</code>库。 PCRE 是<code>perl</code>语言的兼容正则表达式库。<code>perl</code>语言一直以支持原生正则表达式，而受到广大编程爱好者的喜爱。我曾经看到过一个 IBM 的朋友用<code>perl</code>加上<code>wget</code>就实现了一个简单的爬虫。接下来，我们开始安装<code>PCRE</code>。</p><p>一般这种依赖库，会叫<code>pcre-dev</code>或者<code>libpcre</code>。用<code>apt</code>查询了一下，然后<code>grep</code>。</p>",2),P=i("p",null,[e("我们看到有"),i("code",null,"pcre2"),e("也有"),i("code",null,"pcre3"),e("。这个时候可以考虑试试"),i("code",null,"pcre3"),e("。")],-1),S=i("p",null,[e("安装完成之后再试试"),i("code",null,"./configure"),e("，提示还需要"),i("code",null,"zlib"),e("。然后我们用类似的方法解决"),i("code",null,"zlib"),e("依赖。")],-1),w=i("p",null,[i("code",null,"zlib"),e("包的名字叫"),i("code",null,"zlib1g"),e("不太好找，需要查资料才能确定是这个名字。")],-1),B=i("p",null,"我们再尝试配置，终于配置成功了。",-1),M=o("<ul><li>第四步：编译和安装。</li></ul><p>通常配置完之后，我们输入<code>make &amp;&amp; sudo make install</code>进行编译和安装。<code>make</code>是<code>linux</code>下面一个强大的构建工具。<code>autoconf</code>也就是<code>./configure</code>会在当前目录下生成一个 MakeFile 文件。<code>make</code>会根据<code>MakeFile</code>文件编译整个项目。编译完成后，能够形成和当前操作系统以及 CPU 指令集兼容的二进制可执行文件。然后再用<code>make install</code>安装。<code>&amp;&amp;</code>符号代表执行完<code>make</code>再去执行<code>make installl</code>。</p>",2),V=o('<p>你可以看到编译是个非常慢的活。等待了差不多 1 分钟，终于结束了。<code>nginx</code>被安装到了<code>/usr/local/nginx</code>中，如果需要让<code>nginx</code>全局执行，可以设置一个软连接到<code>/usr/local/bin</code>，具体如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ln </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sf </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">local</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sbin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">local</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sbin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx</span></span></code></pre></div><h4 id="为什么会有编译安装" tabindex="-1">为什么会有编译安装？ <a class="header-anchor" href="#为什么会有编译安装" aria-label="Permalink to &quot;为什么会有编译安装？&quot;">​</a></h4><p>学完整个编译安装 Ngnix 过程后，你可能会问，为什么会有编译安装这么复杂的事情。</p><p>原来使用 C/C++ 写的程序存在一个交叉编译的问题。就是写一次程序，在很多个平台执行。而不同指令集的 CPU 指令，还有操作系统的可执行文件格式是不同的。因此，这里有非常多的现实问题需要解决。一般是由操作系统的提供方，比如 RedHat 来牵头解决这些问题。你可以用<code>apt</code>等工具提供给用户已经编译好的包。<code>apt</code>会自动根据用户的平台类型选择不同的包。</p><p>但如果某个包没有在平台侧注册，也没有提供某个 Linux 平台的软件包，我们就需要回退到编译安装，通过源代码直接在某个平台安装。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>这节课我们学习了在 Linux 上安装软件，简要介绍了<code>dpkg</code>和<code>rpm</code>，然后介绍了能够解决依赖和帮助用户下载的<code>yum</code>和<code>apt</code>。重点带你使用了<code>apt</code>，在这个过程中看到了强大的包管理机制，今天的<code>maven</code>、<code>npm</code>、<code>pip</code>都继承了这样一个特性。最后我们还尝试了一件高难度的事情，就是编译安装<code>nginx</code>。</p><p><strong>那么通过这节课的学习，你现在可以来回答本节关联的面试题目：编译安装和包管理安装有什么优势和劣势了吗？</strong></p><p>老规矩，请你先在脑海里构思下给面试官的表述，并把你的思考写在留言区，然后再来看我接下来的分析。</p><p><strong>【解析】</strong> 包管理安装很方便，但是有两点劣势。</p><p>第一点是需要提前将包编译好，因此有一个发布的过程，如果某个包没有发布版本，或者在某个平台上找不到对应的发布版本，就需要编译安装。</p><p>第二点就是如果一个软件的定制程度很高，可能会在编译阶段传入参数，比如利用<code>configure</code>传入配置参数，这种时候就需要编译安装。</p><h3 id="思考题" tabindex="-1">思考题 <a class="header-anchor" href="#思考题" aria-label="Permalink to &quot;思考题&quot;">​</a></h3><p><strong>最后我再给你出一道思考题：如果你在编译安装 MySQL 时，发现找不到 libcrypt.so，应该如何处理</strong>？</p><p>你可以把你的答案、思路或者课后总结写在留言区，这样可以帮助你产生更多的思考，这也是构建知识体系的一部分。经过长期的积累，相信你会得到意想不到的收获。如果你觉得今天的内容对你有所启发，欢迎分享给身边的朋友。期待看到你的思考！</p>',16);function N(I,H,R,L,U,z){const s=n("Image");return t(),d("div",null,[p,a(s,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/5B/29/CgqCHl99kUCAc2xOAAHulKDtr4U742.png"}),e(),r,a(s,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/5B/29/CgqCHl99kUuAJZSuAAW-FE-CgIY627.png"}),e(),a(s,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/5B/29/CgqCHl99kVCAT9-sAAJPZUhXt9k401.png"}),e(),h,a(s,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/5B/1E/Ciqc1F99kViANbVLAAPQJy3qAX8926.png"}),e(),g,a(s,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/5B/1E/Ciqc1F99kV-ACJvxAAIopnvusfs472.png"}),e(),k,u,a(s,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/5B/2A/CgqCHl99kWeANmD6AAUugWzWDUE531.png"}),e(),_,a(s,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/5B/1E/Ciqc1F99kWyAf1pzAAFI7ot6YSY175.png"}),e(),m,a(s,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image/M00/5B/2A/CgqCHl99kYCARaKvAAGzk1pe8DY132.png"}),e(),A,a(s,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image/M00/5B/2A/CgqCHl99kYmAXQUyAADGX8gwStA669.png"}),e(),E,a(s,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image/M00/5B/1E/Ciqc1F99kZWABdtDAAPejhy3vW4914.png"}),e(),y,D,a(s,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image/M00/5B/2A/CgqCHl99kZ2AaXuiAAH8DdruTtI020.png"}),e(),x,a(s,{alt:"Drawing 11.png",src:"https://s0.lgstatic.com/i/image/M00/5B/2A/CgqCHl99kaWALMdgAAD3nrZGCkk000.png"}),e(),C,a(s,{alt:"Drawing 12.png",src:"https://s0.lgstatic.com/i/image/M00/5B/1E/Ciqc1F99kayAZu1TAAJeaol9wiw800.png"}),e(),b,a(s,{alt:"Drawing 13.png",src:"https://s0.lgstatic.com/i/image/M00/5B/1E/Ciqc1F99kbKAYqiXAAEc3ZFDVtE635.png"}),e(),T,v,a(s,{alt:"Drawing 14.png",src:"https://s0.lgstatic.com/i/image/M00/5B/2A/CgqCHl99kbqAG6m9AARoq2Xsv_8899.png"}),e(),f,a(s,{alt:"Drawing 15.png",src:"https://s0.lgstatic.com/i/image/M00/5B/2A/CgqCHl99kcOAAUTtAAS2nlzDoGk494.png"}),e(),q,a(s,{alt:"Drawing 16.png",src:"https://s0.lgstatic.com/i/image/M00/5B/2A/CgqCHl99kcqAGqIuAAHKhlCMtYs244.png"}),e(),F,a(s,{alt:"Drawing 17.png",src:"https://s0.lgstatic.com/i/image/M00/5B/2A/CgqCHl99kdKATX0xAAgMkowaX1E974.png"}),e(),P,a(s,{alt:"Drawing 18.png",src:"https://s0.lgstatic.com/i/image/M00/5B/2A/CgqCHl99kdqACqo1AAfnaBqjC1Y752.png"}),e(),S,a(s,{alt:"Drawing 19.png",src:"https://s0.lgstatic.com/i/image/M00/5B/2A/CgqCHl99keKACHklAAVMkWAY8Es203.png"}),e(),w,B,a(s,{alt:"Drawing 20.png",src:"https://s0.lgstatic.com/i/image/M00/5B/1E/Ciqc1F99ke2AFl_pAAcxoAUgdw0867.png"}),e(),M,a(s,{alt:"Drawing 21.png",src:"https://s0.lgstatic.com/i/image/M00/5B/1E/Ciqc1F99kfaAFXguAAr_SGo4e8E213.png"}),e(),V])}const G=c(l,[["render",N]]);export{Y as __pageData,G as default};
