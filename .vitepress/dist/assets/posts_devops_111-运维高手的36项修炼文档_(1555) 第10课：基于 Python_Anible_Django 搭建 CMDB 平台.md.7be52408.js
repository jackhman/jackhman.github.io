import{_ as e,D as a,o as i,g as _,J as n,h as l,Q as o,m as t}from"./chunks/framework.f67d7268.js";const $t=JSON.parse('{"title":"第10课：基于Python+Anible+Django搭建CMDB平台","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/111-运维高手的36项修炼文档/(1555) 第10课：基于 Python+Anible+Django 搭建 CMDB 平台.md","filePath":"posts/devops/111-运维高手的36项修炼文档/(1555) 第10课：基于 Python+Anible+Django 搭建 CMDB 平台.md","lastUpdated":1696682708000}'),r={name:"posts/devops/111-运维高手的36项修炼文档/(1555) 第10课：基于 Python+Anible+Django 搭建 CMDB 平台.md"},c=o('<h1 id="第10课-基于python-anible-django搭建cmdb平台" tabindex="-1">第10课：基于Python+Anible+Django搭建CMDB平台 <a class="header-anchor" href="#第10课-基于python-anible-django搭建cmdb平台" aria-label="Permalink to &quot;第10课：基于Python+Anible+Django搭建CMDB平台&quot;">​</a></h1><p>本课时我们主要讲解如何基于 Python、Django、Ansible 开发一套具备 Devops 理念的自动化任务执行和资产管理(CMDB)系统。</p><h2 id="工程简介" tabindex="-1"><strong>工程简介</strong> <a class="header-anchor" href="#工程简介" aria-label="Permalink to &quot;**工程简介**&quot;">​</a></h2><p>这个可以实现自动化任务执行和资产管理的系统取名为 Imoocc，它是基于 Python、Django、Ansible 实现的，共有两个版本，一个是 Python 2.7 版本（你可以在这个 GitHub 地址上 <a href="https://github.com/iopsgroup/imoocc" target="_blank" rel="noreferrer">https://github.com/iopsgroup/imoocc</a> 直接下载），另外一个是 Python 3.6 版本（你可以在本课时末尾的链接中通过附件下载）。</p><br><p>Imoocc 工程可以做到自动化资产收集和自动化任务执行，资产管理的部分会自动把服务器上所有的系统、硬件信息和宿主机子机关联信息收集起来，并做平台化展示。</p><br><p>然后打通自动化任务执行，客户端通过调用 API 接口的方式对搜集的资产信息对象执行自动化任务，对应关系如图所示。</p><br>',9),h=t("br",null,null,-1),p=o('<h3 id="自动化资产管理" tabindex="-1"><strong>自动化资产管理</strong> <a class="header-anchor" href="#自动化资产管理" aria-label="Permalink to &quot;**自动化资产管理**&quot;">​</a></h3><p>想要了解自动化资产管理系统，首先需要理解一个概念，什么是运维自动化系统中的资产？我认为它一共分为三种类型：物理资产、虚拟资产和信息资产。</p><ul><li><p>物理资产：如我们看得到的机房、机柜、网络设备、硬件服务器等相关硬件模块都属于物理资产。</p></li><li><p>虚拟资产：我们看不见的，但是它实际上又是很重要的个体。比如，我们可以在虚拟机上通过虚拟化的方式虚拟出 KVM、Vmware、Docker 等相关的虚拟化个体。</p></li><li><p>信息资产：所谓信息资产是一些基本标示信息和个体中的属性，比如说服务器上装的系统，系统上运行的服务，以及每个服务器配置的 IP，还有它的登录等相关信息，等等。</p></li></ul><p>运维资产管理系统就是要把所有的这些资产做整体的管理和收集。我们讲到 CMDB 也是 Devops 设计里面最基础的一个环节，可以通过这样的一张图示来形象的衡量资产管理的重要性。</p><br>',5),u=t("br",null,null,-1),d=t("p",null,"在企业里面，Devops 功能包括了监控、配置管理、资产弹性、自动化任务等相关功能。这些功能大多依赖于资产管理的功能。所以搜集资产是 Devops 工程设计里面非常重要、非常基础的一个环节。",-1),g=t("h3",{id:"自动化资产搜集",tabindex:"-1"},[l("自动化资产搜集 "),t("a",{class:"header-anchor",href:"#自动化资产搜集","aria-label":'Permalink to "自动化资产搜集"'},"​")],-1),b=t("p",null,"如果资产作到自动化搜集怎么实现呢？接下来我把这个工程的第一个版本及部分代码给你来演示一下。",-1),m=t("br",null,null,-1),A=t("br",null,null,-1),C=t("p",null,"首先，用 PyCharm 工具打开工程代码，左侧是目录结构，底部是一个 terminal 控制终端，上面是代码内容，如果你了解 PyCharm 就比较清楚了。",-1),P=t("br",null,null,-1),M=t("p",null,"我本地已经准备好一个演示环境，因为需要收集资产信息，本地环境的资产除了包括演示的这台主机以外，还包括另外一台单独的装了 VMware 的虚拟机，在虚拟机上还运行了一个 Docker 的容器（这些就是我本地收集的目标资产对象）。",-1),D=t("br",null,null,-1),y=t("br",null,null,-1),I=t("p",null,"登录到这台虚拟机后，可以发现启动的容器开放了 ssh 端口并进行了端口的映射（22022->22），所以整体的环境是这样的。我通过客户端一台机器去扫描目标资源，由于环境的限制，这里我把这台虚拟机当成了一台物理设备来进行扫描，正常结果中会把这台设备与容器两个对象中相关的资产信息进行整体的扫描，并且会把它们的关系罗列出来。",-1),k=t("p",null,"回到工程代码，我们来具体演示一下：",-1),T=t("br",null,null,-1),q=t("br",null,null,-1),x=t("p",null,"回到工程代码，首先需要运行一个脚本，把目标资产信息扫描出来。这里通过 Python 直接执行 main.py 文件，就可以开启对局域网的扫描。我们可以看到这个时候，在终端会输出相关的日志及扫描到的信息。",-1),f=t("br",null,null,-1),B=t("br",null,null,-1),J=t("p",null,"在脚本执行完成以后，我们会看到打印在终端的信息，这里打印出了登录的主机相关信息，我们还可以看到它的 IP 信息和端口信息。这个 ssh 端口就是容器所映射出来的端口，还会看到把相关的主机容器上的主机信息也做了相关的打印，也就是信息收集。",-1),S=t("br",null,null,-1),z=t("p",null,"通过这种方式展示还不够清晰，这就需要有一套前台的展示页面，能够非常清晰的展示所收集的系统信息，并且展示它们的关联关系，所以这里我继续演示前台界面是什么效果。",-1),F=t("br",null,null,-1),V=t("br",null,null,-1),O=t("p",null,"使用 Python manage.py runserver 的方式，在本地监听 5555 端口，并把这个服务运行起来。然后打开浏览器，输入 127.0.0.1:5555 端口的 url地址，这时就可以登录后台系统。在后台系统中你可以看到整个界面会展示几类信息：物理设备信息、虚拟设备信息、网络设备信息。",-1),j=t("br",null,null,-1),E=t("br",null,null,-1),v=t("p",null,"我们重点看下物理设备和虚拟设备信息。在物理设备信息栏里会看到这里已经扫描到了一台物理机，它是一台承载 Docker 类型的物理机。",-1),L=t("br",null,null,-1),K=t("br",null,null,-1),N=t("p",null,"点击子链接会进入新的界面，新界面会展示这台物理设备上的机器相关属性，比如 IP 地址、服务器品牌、操作系统等（备注：你可以看到这里的服务器品牌是 VMware，因为本地资源有限，所以没有物理设备，这里稍微改动了代码，把 VM 当成物理设备来处理，所以这里实际上是一台虚拟机）。",-1),w=t("br",null,null,-1),R=t("br",null,null,-1),G=t("p",null,"然后，可以看到它的上线状态，类型、连接用户、登录方式等，我们可以点击子链接，这时会跳到一个新的页面，新页面会展示出登录的用户名、密码等信息，登录方式也做了相关信息资产的保存。",-1),Q=t("br",null,null,-1),X=o('<br><p>然后，我们再回到这个页面，这里可以点击宿主机的类型链接，这样会跳到一个新的页面，这里显示内容表示在宿主机上有多少个子的虚拟机。由于这台宿主机运行的容器，点击新的页面就会展示出这台宿主机上面有容器运行，并且还会展示系统版本，以及连接用户的相关信息，我们也可以点击查看。</p><br><p>这就是我的这一套 CMDB 系统中自动化资产收集的效果演示。</p><h2 id="课程学习重点、基础" tabindex="-1"><strong>课程学习重点、基础</strong> <a class="header-anchor" href="#课程学习重点、基础" aria-label="Permalink to &quot;**课程学习重点、基础**&quot;">​</a></h2><p>接下来，我们具体介绍一下这套系统。首先，本课并不是要手把手的带你来敲一遍代码，而是希望你可以获得一些自动化运维研发的思路和相关经验，并运用在自己的项目中。</p><ol><li><p>设计工程逻辑、工程功能及相关思路。</p></li><li><p>运维自动化的技术选型思路。</p></li><li><p>技术栈的实现思路。</p></li></ol><p>了解了这些以后，我们来看一下学习本课时所需要掌握的基础。首先就是需要了解 Python 语言，具备一定的 Python 开发基础；同时，你还要了解 Django 基础，包括它的模型、视图、URL 等；还要掌握一些前端的基础知识，如 Bootstrap、JS、HTML 等，这里对于前端的知识要求并不高，只需要能看懂即可。</p><h2 id="工程设计理念" tabindex="-1"><strong>工程设计理念</strong> <a class="header-anchor" href="#工程设计理念" aria-label="Permalink to &quot;**工程设计理念**&quot;">​</a></h2><p>接下来，我们来重点讲解工程的设计理念。</p><br><p><strong>一、资产信息采集</strong></p><p>工程设计的第一部分是资产信息采集。我在服务端会运行一套脚本，它采用的是主动探测的方式，也就是服务端主动去探测在同一个局域网内部的客户端的资源。扫描方式则通过一些通用的协议，比如我会通过 ICMP 协议去扫描内部的存活设备，通过 ssh 端口协议去登录获取主机上的信息，等等。采用通用协议的好处是开发、运维实现会更加的简单、通用。</p><br><p><strong>二、优势</strong></p><p>传统的 CMDB 系统需要手动录入方式，相比手动录入方式，该系统效率得到了提升。另外，对比被动探测的实现方式，采用主动探测方式会更加方便维护和管理，被动探测往往需要在客户端安装 agent，而 agent 的管理维护其实相对比较复杂。</p><br><p><strong>三 、信息展示</strong></p><p>第三块内容就是信息展示了。</p><br><ul><li>整体展示顺序</li></ul><p>这个工程的信息展示，你可以看到，在左侧的菜单栏里面，我会把整个 Devops 里与工程相关的功能做一个罗列。</p><br>',23),H=t("br",null,null,-1),W=t("ul",null,[t("li",null,"按照某一个类型展示")],-1),Z=t("p",null,"另外，在中间的大窗口，我会按资源类型做一个全局的统计。",-1),$=t("br",null,null,-1),U=t("br",null,null,-1),Y=t("ul",null,[t("li",null,"类型关系关联")],-1),tt=t("p",null,"最后，我会把相关的类型进行关联，比如在一台宿主机机的操作系统上关联了多少台虚拟机，对这样的关系进行梳理和展示。",-1),lt=t("br",null,null,-1),st=t("p",null,"以上就是这个系统的一些功能设计。",-1),nt=t("h3",{id:"资产信息内容",tabindex:"-1"},[t("strong",null,"资产信息内容"),l(),t("a",{class:"header-anchor",href:"#资产信息内容","aria-label":'Permalink to "**资产信息内容**"'},"​")],-1),ot=t("p",null,"第二个块就是资产信息内容。这里我截了一张图：",-1),et=t("br",null,null,-1),at=t("br",null,null,-1),it=t("p",null,"在资产信息内容中，会收集服务器 IP、服务器品牌、主机名、系统版本、设备的 sn 号、MAC 地址、宿主机的类型、相关的编号，以及 ssh 登录所需信息。有了登录的连接信息就为自动化任务执行奠定了一个重要信息基础。",-1),_t=t("h3",{id:"资产登录信息内容",tabindex:"-1"},[t("strong",null,"资产登录信息内容"),l(),t("a",{class:"header-anchor",href:"#资产登录信息内容","aria-label":'Permalink to "**资产登录信息内容**"'},"​")],-1),rt=t("br",null,null,-1),ct=o('<br><p>接下来这个页面展示的是与登录的连接相关的信息内容，包含：登录的用户名、ssh 登录密码、ssh 的登录端口和 IP 信息，同时也可以支持 key 的登录信息记录，因为前面讲过，key 的登录方式会比密码登录的方式更加安全。</p><h2 id="cmdb-技术栈介绍" tabindex="-1"><strong>CMDB 技术栈介绍</strong> <a class="header-anchor" href="#cmdb-技术栈介绍" aria-label="Permalink to &quot;**CMDB 技术栈介绍**&quot;">​</a></h2><h3 id="技术栈" tabindex="-1"><strong>技术栈</strong> <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;**技术栈**&quot;">​</a></h3><p>最后一部分我们来介绍一下 CMDB 的技术栈。</p><br><p>首先，这套工程用到了 Python3.6、Django1.8、MySQL5.7 ，前台用到 Bootstrap3.0。</p><br><p>第一，在使用这套工程时，你需要先把 MySQL 搭建完毕，同时修改对应的字符集，并创建数据库密码等，这些是对数据库相关的配置。</p><br><p>第二，工程所需要的模块，同样是在 requirements.txt 里面安装 Python 必备的工程模块。</p><br><p>另外，就是在工程里面修改对应的 settings 文配置信息，并通过 manage.py makemigrations 和 manage.py migrate 来建立数据库模型，这是工程搭建的几个步骤。</p><br><p>同时，在前台管理系统里面，我们用到了 admin 方式登录用户密码，这个时候需要为你的前台登录创建一个登录的用户密码信息，我们可以通过 manage.py 进入它的 Shell 交互环境，通过这样的方式来创建登录前台的管理员的用户密码，最后，就是启动工程。</p><br><p>这就是对于这套工程的基础环境和启动方式。</p><h3 id="探测环境" tabindex="-1"><strong>探测环境</strong> <a class="header-anchor" href="#探测环境" aria-label="Permalink to &quot;**探测环境**&quot;">​</a></h3><p>接下来介绍如何使用这套工程，以及它所探测目标资源环境。</p><br>',20),ht=t("br",null,null,-1),pt=t("p",null,"图中右侧是所需要探测的客户端，左侧为服务端，服务端这里通过一些对应的通用协议，比如 ssh、ping、telnet 等相关命令来探测客户端目标服务器。在目标的服务器上，装有对应的虚拟化内容的虚拟机，比如 KVM、Docker、ESX 等。",-1),ut=t("h3",{id:"探测器逻辑",tabindex:"-1"},[t("strong",null,"探测器逻辑"),l(),t("a",{class:"header-anchor",href:"#探测器逻辑","aria-label":'Permalink to "**探测器逻辑**"'},"​")],-1),dt=t("p",null,"接下来，我们来介绍这一套工程对于它的目标主机、虚拟机及信息资产的探测逻辑。",-1),gt=t("br",null,null,-1),bt=t("p",null,"我们会看到，通过 main.py 文件实际上执行的三个大的方面，第一个是做存活探测，第二个是做主机探测，第三个是做主机关系探测。",-1),mt=t("br",null,null,-1),At=t("br",null,null,-1),Ct=t("p",null,"存活探测会扫描在一个局域网内部存活的 IP 地址列表。主机探测会获取对应存活的主机上面的系统信息，如 sn 号、版本、MAC 等相关的主机资产信息。主机关系探测会识别宿主机和它对应安装的虚拟子机的映射关系。这就是整体的探测逻辑和顺序。如图所示：",-1),Pt=t("br",null,null,-1),Mt=t("br",null,null,-1),Dt=t("p",null,"首先，我会做主机存活的探测，扫描出对应的存活的主机 IP 列表，有了这份 IP 列表后，就可以做 ssh 的端口探测。ssh 端口探测先判断局域网内部的 ssh 端口是不是开放的，如果开放了 ssh 端口，就可以认为它是 Linux 主机，可以进一步做 ssh 登录测试；如果不开放 ssh 端口，可以认为它是非 Linux 主机，然后会把它放到到另外一个列表中。接下来我会模拟 ssh 的用户登录，判断它的登录方式，分别是通过用户的密码登录方式和 key 的登录方式。登录完成以后，就可以去获取这台主机上的主机信息，并提取出来了。",-1),yt=t("br",null,null,-1),It=t("p",null,"这就是整个探测的实现逻辑。",-1),kt=t("h3",{id:"启动探测器演示",tabindex:"-1"},[t("strong",null,"启动探测器演示"),l(),t("a",{class:"header-anchor",href:"#启动探测器演示","aria-label":'Permalink to "**启动探测器演示**"'},"​")],-1),Tt=t("p",null,"最后给你来展示一下，探测启动所需要做的配置：",-1),qt=t("br",null,null,-1),xt=t("p",null,"前提是：安装了相关程序代码的服务环境，并且本地也有对应的目标主机可以供你去探测。",-1),ft=t("br",null,null,-1),Bt=t("p",null,"接下来讲一下启动探测器所需要具备的一些配置。",-1),Jt=t("br",null,null,-1),St=t("p",null,"首先，我们需要修改 scanhosts.yaml 的相关配置，这里会配置几段信息。第一个，是配置服务器的主机段，我本地的主机段是 192.168.1，表示扫描的主机段。第二个，就是 ssh 所需要探测端口，因为 ssh 端口往往是固定的，默认端口是 22，也有可能会因为你企业的差异性来调整，会把固定端口放到里面。另外，就是配置 ssh 用 key 登录的方式，这里会为私钥配置一个列表。",-1),zt=t("br",null,null,-1),Ft=t("p",null,"以下这些配置是固定的，你可以不用去改动，因为这里会去执行我主机上的信息获取命令，比如获取主机版本、主机名、MAC 地址、sn 号等，都是通过命令去获取的。",-1),Vt=t("br",null,null,-1),Ot=t("br",null,null,-1),jt=t("p",null,"最后，这里单独列出一个 dockerinfo 配置项目，它为 Docker 的登录方式单独独立出一个用户密码，是因环境的差异性而做的，我的环境会把 Docker 映射出来做 ssh 端口，并且有独立的一套密码，所以我单独做了配置。",-1),Et=t("br",null,null,-1),vt=t("p",null,"最后，在配置完对应的环境信息以后，就可以启动探测脚本。这里可以通过 Python3.6 执行 main.py 文件，这样就开启你的探测任务。",-1),Lt=t("br",null,null,-1),Kt=t("p",null,[l("本专栏课中的所有案例配置及源代码,你可以课后通过这个地址"),t("a",{href:"http://www.jesonc.com/jeson/2020/02/07/ywgs36/%E8%87%AA%E5%B7%B1%E4%B8%8B%E8%BD%BD",target:"_blank",rel:"noreferrer"},"http://www.jesonc.com/jeson/2020/02/07/ywgs36/自己下载"),l("，密码为：mukelaoshi。")],-1),Nt=t("br",null,null,-1);function wt(Rt,Gt,Qt,Xt,Ht,Wt){const s=a("Image");return i(),_("div",null,[c,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/05/CgpOIF5zJpGAOh_3AAETRSBrz8A133.png"}),l(),h,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/06/Cgq2xl5zJpGALtEVAAELyQFSaoY556.png"}),l(),p,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/06/Cgq2xl5zJpGAMNBTAAF2XF3qyck100.png"}),l(),u,d,g,b,m,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/06/Cgq2xl5zJpKAXQ3uAAVfaDFT2hc238.png"}),l(),A,C,P,M,D,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/05/CgpOIF5zJpKAM5HDAARNAa2lrTA683.png"}),l(),y,I,k,T,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/06/Cgq2xl5zJpKALeVmAAJNcMymoDg695.png"}),l(),q,x,f,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/05/CgpOIF5zJpKALpfAAAKrgiK7cBE082.png"}),l(),B,J,S,z,F,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/06/Cgq2xl5zJpOAfJ37AAKKZIal5Ks938.png"}),l(),V,O,j,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/05/CgpOIF5zJpOALuvRAACLq9bGI6I552.png"}),l(),E,v,L,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/06/Cgq2xl5zJpOAcCmiAAKjQ3sBmI8075.png"}),l(),K,N,w,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/05/CgpOIF5zJpOAGCFGAALdX5_qU6o957.png"}),l(),R,G,Q,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/06/Cgq2xl5zJpSAMOZhAAJZ02uIxOg018.png"}),l(),X,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/05/CgpOIF5zJpSACdzWAAA33Ac2y-E712.png"}),l(),H,W,Z,$,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/06/Cgq2xl5zJpSAVWPTAAAhVhvmLRc779.png"}),l(),U,Y,tt,lt,st,nt,ot,et,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/05/CgpOIF5zJpSAZH84AAFt9Oq8nFg989.png"}),l(),at,it,_t,rt,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/06/Cgq2xl5zJpWAEFtEAAEk9jyLdTM009.png"}),l(),ct,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/05/CgpOIF5zJpWADyboAAF-Fvz6tC0285.png"}),l(),ht,pt,ut,dt,gt,bt,mt,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/05/CgpOIF5zJpWAcd3dAAFKPqRX0rA372.png"}),l(),At,Ct,Pt,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/05/CgpOIF5zJpaAd0ofAAGTHivpKic910.png"}),l(),Mt,Dt,yt,It,kt,Tt,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/06/Cgq2xl5zJpaAE_NvAADuJPpNISA959.png"}),l(),qt,xt,ft,Bt,Jt,St,zt,Ft,Vt,n(s,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/05/CgpOIF5zJpeAcDksAABCkXF4kb0332.png"}),l(),Ot,jt,Et,vt,Lt,Kt,Nt])}const Ut=e(r,[["render",wt]]);export{$t as __pageData,Ut as default};
