import{_ as l,F as p,g as n,K as t,h as a,ar as i,l as s,o}from"./chunks/framework.VlluEs-f.js";const D=JSON.parse('{"title":"第19讲：MySQL数据库搭建与操作","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/110-测试开发核心技术文档/(337) 第19讲：MySQL 数据库搭建与操作.md","filePath":"posts/devops/110-测试开发核心技术文档/(337) 第19讲：MySQL 数据库搭建与操作.md","lastUpdated":1718371218000}'),h={name:"posts/devops/110-测试开发核心技术文档/(337) 第19讲：MySQL 数据库搭建与操作.md"},r=i(`<h1 id="第19讲-mysql数据库搭建与操作" tabindex="-1">第19讲：MySQL数据库搭建与操作 <a class="header-anchor" href="#第19讲-mysql数据库搭建与操作" aria-label="Permalink to &quot;第19讲：MySQL数据库搭建与操作&quot;">​</a></h1><p>本课时我们开始进入 MySQL 数据库的学习，在正式进入学习之前，我们先来看下数据库目前在行业的使用情况，我们可以把它们分为这样几大类：</p><ul><li><p>关系型数据库（RDBMS）：MySQL、Oracle、Postgres、SQLLite、SQLServer；</p></li><li><p>NoSQL数据库：MongoDB、Redis、HBase；</p></li><li><p>图数据库：Neo4j；</p></li><li><p>NewSQL：RethinkDB。</p></li></ul><p>其中，关系型数据库也称为 RDBMS，用于关系型的数据库管理系统，比如 MySQL、Cracle 等在行业里知名度都是非常高的，而 MySQL 下又分了好几个分支。</p><br><p>除了关系型数据库还有一些为大数据存储单独设计的数据库，它们更多的是为了数据的存储和分析，并不强调关系的计算，所以它们并不是严格意义上的数据库，所以行业里把 MongoDB、Redis、HBase 等归纳为 NoSQL 型数据库。</p><br><p>还有就是图数据库，比如 Neo4j，它可以计算不同数据之间的关联关系；最后就是 NewSQL，这是一种新出现的叫作 RethinkDB 的数据库，它也有一些自己的特性。</p><h2 id="mysql简介" tabindex="-1">MySQL简介 <a class="header-anchor" href="#mysql简介" aria-label="Permalink to &quot;MySQL简介&quot;">​</a></h2><p>以上就是行业中经常会用到的数据库，本课时我们就以 MySQL 为例，来学习和使用数据库。</p><br><p>我们先看下 MySQL 的介绍，我们打开 MySQL 的官网，官网上对我们最有用的就是文档了，MySQL 的所有知识点都在文档内，你还可以看到 MySQL 下的所有产品，除了数据库、存储引擎外还有连接客户端程序、工作台等都可以在官网中下载。</p><br><p>然后打开文档，MySQL 的所有基础知识就都包含在内了，你可以课下学习它们的官方手册，现在 MySQL 的最新版本是 8.0，但是行业中使用最多的还是 5.0 版本。以上便是 MySQL 的官网信息，你可以在官网中查询想要的资料。</p><h2 id="mysql-搭建" tabindex="-1">MySQL 搭建 <a class="header-anchor" href="#mysql-搭建" aria-label="Permalink to &quot;MySQL 搭建&quot;">​</a></h2><p>接下来，我们进入 MySQL 的搭建，在行业中目前基本上都使用容器技术搭建数据库了，已经很少有直接使用数据库的二进制文件进行搭建的情况，这是为了能够实现持续交付，所以更多的使用容器技术进行搭建。</p><h3 id="第一种方法" tabindex="-1">第一种方法 <a class="header-anchor" href="#第一种方法" aria-label="Permalink to &quot;第一种方法&quot;">​</a></h3><p>其中，最经典的案例就是使用 Docker 技术，用 Docker 搭建 MySQL，只需要一行命令就可以实现，这里列举了实现的命令，你可以把它复制出来，然后找一台服务器直接运行。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker run \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--name mysql \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v $PWD/mysql:/var/lib/mysql \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-p 3306:3308 \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-e MYSQL_ROOT_PASSWORD=hogwarts \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-d mysql:5.7</span></span></code></pre></div><br><p>我们来分析下这行命令，命令中显示我们使用的是 Docker 技术并创建一个名字为 mysql 的容器，然后在容器中把数据关联到本地的 MySQL，并把 MySQL 的 3306 接口映射到外面，同时为用户设置一个账户密码。我们使用的 MySQL 版本是行业里使用最广泛的 5.7 版本。用这样的一行命令你就可以通过 Docker 创建一个属于自己的 MySQL 数据库了。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker run --name mysql_lagou -v $PWD/mysql:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=hogwarts -d mysql:5.7</span></span></code></pre></div><br><p>但是因为我的本地已经有一个 MySQL 数据库了，这里我需要给它改一个名字，比如mysql_lagou，它会在当前的目录下创建一个 mysql 目录用来存储 MySQL 数据，用这行 Docker 命令就可以启动该数据库，给你演示下效果，它的用户名是 ROOT 密码是 hogwarts，我们可以通过 3306 这个端口去连接数据库。</p><br><p>然后，我们再来看下 MySQL 官方给提供了哪些自带的工具。</p><br>`,29),d=i('<br><p>第一个工具是 MySQL 命令行，你可以通过它连接 MySQL 自身提供的服务。还有一个工具就是 mysqladmin，通过它可以管理 MySQL 服务，等等，其中使用最多的工具是 mysqldump，mysqldump 可以用来进行数据库的备份，备份之后你就可以通过 MySQL 命令行把备份文件导入自己的数据库中，所以工作中经常用到的是 mysql 和 mysqldump，这几个工具在官网中也有介绍文档，你可以自行去查看文档。</p><br><p>接下来，我给你演示下怎样连接 MySQL，我们想要连接数据库有很多办法，这里先演示第一种办法。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker ps| grep lagou</span></span></code></pre></div><br><p>我们使用 docker ps | grep lagou 命令，就可以看到这个容器已经存在了。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker exec -it mysql_lagou bash</span></span></code></pre></div><br><p>然后，输入docker exec...bash 命令就可以进入容器内部。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysql -h 127.0.0.1 -p</span></span></code></pre></div><br><p>进入容器内部之后，执行上面的命令，回车后会提示输入密码，输入 hogwarts 就可以通过 MySQL 命令进入到数据库内部了。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">show databases</span></span></code></pre></div><br><p>这个时候你可以使用 show databases 命令查看当前都有哪些数据库，这是第一种连接方法，它需要你登录到容器的内部。</p><h3 id="第二种方法" tabindex="-1">第二种方法 <a class="header-anchor" href="#第二种方法" aria-label="Permalink to &quot;第二种方法&quot;">​</a></h3><p>那么第二种方法是什么呢？第二种方法是独立创建一个容器然后去连接数据库，这样就不用再影响已有的容器了，我们来看下第二种方法怎样实现。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysql -h docker.testing-studio.com -u root -p</span></span></code></pre></div><br><p>你可以在远程服务器或本地创建一个新的容器，这里我在本地创建一个新的容器，这时使用的是 MySQL 的一个镜像，其中 mysql -h 表示连接一个远程服务，-u 表示连接的用户名，-p 表示需要输入的密码。我们执行一下，它其实就可以远程连接docker.testing</p><p>-studio.com下的数据库，这就是第二种方法，然后使用 show databases 也可以看到数据库。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysql -h docker.testing-studio.com -uroot -p</span></span></code></pre></div><br><p>还有一种方法就是我不利用容器，而是利用本地已经安装的各种mysql的工具直接去连接。这就是第三种方法，需要你提前预装一个mysql的客户端。</p><h3 id="第三种方法" tabindex="-1">第三种方法 <a class="header-anchor" href="#第三种方法" aria-label="Permalink to &quot;第三种方法&quot;">​</a></h3><p>还有一种方法是借助官网给我们提供的 workbench 工作台，MySQL 的 workbench 工作台是一个综合性的数据库管理工具，你可以用它建立一个连接公司服务器的客户端程序，举个例子，比如我要在 database 中连接一个数据库。</p><br>',34),c=s("br",null,null,-1),g=s("p",null,"这里我们新建一个名字叫 docker 的数据库，并输入连接地址，以及用户名和密码，通过这种方法我们就可以新建一个数据库了，接下来我们就可以通过它来进行连接了。",-1),y=s("br",null,null,-1),b=i('<br><p>我们连接到 MySQL 的客户端，这也是目前主流的使用方法，你可以在这里面执行对应的 SQL 命令，你还可以看到数据库中的所有的表，以及表的结构和表中包含的数据。</p><h3 id="第四种方法" tabindex="-1">第四种方法 <a class="header-anchor" href="#第四种方法" aria-label="Permalink to &quot;第四种方法&quot;">​</a></h3><p>但有的时候我们需要提供一个工具，以实现多人协同，这个时候就可以使用一个基于 Web 的第三方工具 phpmyadmin，这个工具也是一个比较流行的数据库管理平台，它支持在线搭建Web平台，以便实现多人协同。这个工具其实也是一个 Docker 的镜像，我们也可以使用一行命令就创建服务。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker run -d --name myadmin_lagou -e PMA_ARBITRARY=1 -p 3080:80 phpmyadmin/phpmyadmin</span></span></code></pre></div><br><p>通过这行命令就可以创建一个 Web 平台，然后别人就可以通过这个平台登录你的数据库管理系统，命令中名字为 myadmin_lagou，对外提供的端口是 3080。</p><br>',9),_=s("br",null,null,-1),u=s("p",null,"然后我们就可以通过 3080 端口进行连接，搭建完成之后是这样的一个界面，它允许输入一个远程地址和用户名、密码，然后就可以进行连接了。",-1),m=s("br",null,null,-1),k=s("br",null,null,-1),S=s("p",null,"输入账户密码登录之后便是一个 Web 平台，这时虽然你还没有装任何的工具，但也可以登录这个网址对数据库进行各种处理，还可以看到数据库下的各种库表结构，有了它之后就可以在里面执行各种各样的 SQL 命令了。",-1),M=s("br",null,null,-1),E=s("p",null,[a("数据库安装的内容就讲到这里了，在下一课时我将重点讲解 SQL 命令的使用，在进行 SQL 命令讲解之前，你需要安装测试数据以便我们后面的演练，MySQL 官方也给我们提供了一份测试数据库，你可以通过这个地址 "),s("a",{href:"https://github.com/datacharmer/test_db",target:"_blank",rel:"noreferrer"},"https://github.com/datacharmer/test_db"),a(" 进行下载。")],-1);function v(L,Q,q,C,A,x){const e=p("Image");return o(),n("div",null,[r,t(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/67/C8/Cgq2xl5Mpy6AdwMyAALheNq_MoQ101.png"}),a(),d,t(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/67/C8/CgpOIF5Mpy6AIKlOAAHP2hIYUzg445.png"}),a(),c,g,y,t(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/67/C8/Cgq2xl5Mpy6AXgzcAAGjDRX4DhU024.png"}),a(),b,t(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/67/C8/CgpOIF5Mpy6AMvgjAAGAn8OOEsw034.png"}),a(),_,u,m,t(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/67/C8/Cgq2xl5Mpy6AHGv0AASCR2J7NLQ223.png"}),a(),k,S,M,E])}const P=l(h,[["render",v]]);export{D as __pageData,P as default};
