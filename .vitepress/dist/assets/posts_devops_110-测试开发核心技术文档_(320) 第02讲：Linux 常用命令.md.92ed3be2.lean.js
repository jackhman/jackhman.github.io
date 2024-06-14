import{_ as n,D as a,o,g as i,J as e,h as s,Q as c,m as t}from"./chunks/framework.f67d7268.js";const rt=JSON.parse('{"title":"第02讲：Linux常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/110-测试开发核心技术文档/(320) 第02讲：Linux 常用命令.md","filePath":"posts/devops/110-测试开发核心技术文档/(320) 第02讲：Linux 常用命令.md","lastUpdated":1696682708000}'),p={name:"posts/devops/110-测试开发核心技术文档/(320) 第02讲：Linux 常用命令.md"},h=c("",7),_=t("p",null,"第一类，磁盘与目录，我们可以通过 df 或 df-h 命令，打印设备上挂载了多少个磁盘设备，以及磁盘里还有多少可用空间。比如我的机器总容量是 40G，已用 34G，使用率已达 91%。",-1),r=t("p",null,"第二个命令叫 ls，ls 可以打印当前目录下的所有文件和目录，你可以通过 ls 命令，把当前所有的目录和文件都打印出来了。",-1),d=t("p",null,"ls 有一个常用的参数叫 -l，-l 可以打印出每个文件的基本信息，比如第一个文件，这里打印出了它的文件权限 -rw-r--r--、文件归属 root、文件大小，以及何时被创建等信息。ls-l 在我们的日常工作中使用频率比较高。那如果我们想进入 battery-historian 这个移动端做电量分析的专用工具的子目录，该怎么做呢？",-1),A=t("p",null,"可以通过 cd 命令进入 battery-historian 的目录，进入目录后，通过 ls 查看目录下所有文件。",-1),u=t("p",null,"使用 ls、cd 命令可以让我们在不同目录之间进行切换，切换之后还可以通过 pwd 命令获取当前目录所在的路径。",-1),g=t("h3",{id:"文件编辑",tabindex:"-1"},[s("文件编辑 "),t("a",{class:"header-anchor",href:"#文件编辑","aria-label":'Permalink to "文件编辑"'},"​")],-1),m=t("p",null,"以上就是磁盘与目录进行切换、读取、获取信息的一些常用命令，接下来，我们进入一个文件并对文件进行编辑。",-1),x=t("p",null,"我们通过 ls-l 获取文件列表后，你可以看到 README.md 文件，在文件列表中，有些文件权限以 d 开头的表示该文件是一个目录，没有 d 则表示它是一个文件。我们接下来进入 README.md，来看看 README.md 里面到底有什么？",-1),C=t("br",null,null,-1),T=t("p",null,"我们可以使用三种方法阅读文件：",-1),P=t("ol",null,[t("li",null,[t("p",null,"cat，它可以阅读文件并查找文件内容，但缺点就是一页的内容非常长；")]),t("li",null,[t("p",null,"more，可以实现翻页阅读，缺点就是不够灵活；")]),t("li",null,[t("p",null,"less，它既可以实现上下滑动，还可以实现左右移动，可以实现交互式阅读，是三种阅读方法中最强大的。")])],-1),M=t("p",null,'但往往只能阅读文件是不能够满足需求的，我们需要有对文件有进行编辑的能力。我们可以通过 vi 或 vim 实现这样的能力，vi 是最早的一个编辑器，vim 是后期的一个变种，在很多系统上 vi 与 vim 是等价的。比如 vi README.md，打开之后你会发现有光标，可以随意移动，也可以对内容进行修改。关于 vi 中的一些常用快捷键课后你可以自己搜索掌握。阅读完文件后通过 :q 进行退出，还有一个流式修改命令 sed，我会在下一课时"Linux 三剑客"中重点介绍。',-1),f=t("h3",{id:"文件权限",tabindex:"-1"},[s("文件权限 "),t("a",{class:"header-anchor",href:"#文件权限","aria-label":'Permalink to "文件权限"'},"​")],-1),b=t("p",null,"虽然我们掌握了如何编辑一个文件，但在编辑文件之前仍然需要管理文件的权限。那么如何对一个文件的权限进行管理呢？",-1),q=t("p",null,"我们通过 ls-l 进入文件目录，仍以 README.md 文件为例，它的权限是什么呢？我们看到文件权限中有三组内容，第一组内容（rw）表示该文件在当前用户下的权限，第二组内容（r）表示在同组下的权限，第三组内容（r）表示不在同组下其他方的权限。而 r 表示可读，w 表示可写，x 表示文件可执行。",-1),E=t("p",null,"你可以通过 chmod 命令修改一个文件的权限，也可以通过 chown 修改一个文件所归属的用户或组。",-1),k=t("p",null,"这里需要重点注意，ls-l 可以查看文件权限，我们以 README.md 为例，这个文件是当前用户可读可写，但其他用户能读不能写的。",-1),L=t("p",null,"那如果我们现在不想让任何用户看到文件该怎么办呢？可以通过 chmod o-r readme.md 命令进行权限的修改。重新进入该文件的权限后，我们发现第三组权限没有状态了，也就是其他用户不能看到该文件了。",-1),O=t("p",null,"关于 chmod 命令的更多用法，你通过 Linux 下的 man 查看它的命令帮助，你可以看到该命令的属性、参数，以及具体描述。如果你不了解 Linux 某些命令的用法，就可以通过 man 来查看使用方法。",-1),v=t("p",null,"关于文件，你还可以通过 find 命令搜索当前的目录并列出所有文件，也可以通过 find + name 的方式查找具体文件。对于特殊文件，比如软链、socket、管道等内容，你可以课下自己搜索知识，这里不再详细介绍。",-1),V=t("h2",{id:"进程",tabindex:"-1"},[s("进程 "),t("a",{class:"header-anchor",href:"#进程","aria-label":'Permalink to "进程"'},"​")],-1),B=t("p",null,"第二个方面是进程，进程是一个文件的运行形态。如果一个文件是可执行文件，比如setup.go，系统就可以通过 CPU 去调度它，通过解析器完成相应的操作。那我们如何知道到底有多少文件是可以被调度的呢？",-1),D=t("p",null,"通过 ls-l 查看所有文件权限，通过权限位 x，可以看到哪些文件是可以执行的或该文件下有哪些文件是可以执行的，所以权限位 x 并不完全准确。比如 setup.go，即使没有权限位 x，也可以通过解析器来运行它。",-1),S=t("p",null,"那么用什么命令可以查看当前有多少个进程呢？通常我们使用 top 或 ps 命令查看当前进程。",-1),U=t("h3",{id:"ps",tabindex:"-1"},[s("ps "),t("a",{class:"header-anchor",href:"#ps","aria-label":'Permalink to "ps"'},"​")],-1),I=t("p",null,"我们先从简单的 ps 学起，使用 ps 会列举当前用户下的所执行的命令。",-1),N=t("p",null,"接下来，输入另外一个命令 sleep，比如 sleep 3，它可以让当前进程窗口休眠 3 秒钟，你可以看到它是一个非常典型的进程。",-1),R=t("p",null,"我们在课时开始时说 Linux 下有一个基本的设计原则就是 Everything is file，所以这里的 sleep 也是一个文件，我们可以通过 which 命令查看它所在的目录，当我们需要调度它的时候，就可以通过路径或名字直接调度它。",-1),w=t("p",null,"输入 sleep 300 命令后运行，然后我们打开一个新的窗口，并登录服务器，然后使用 ps 查看到当前的进程。",-1),G=t("p",null,"如果我们想要找到当前执行的 sleep 300 这个命令，可以通过 ps-ef 列举出所有的进程，你可以看到刚才所写的 sleep 300 命令，系统对它进行了调度，并最终形成了一个进程。",-1),K=t("p",null,"我们可以通过 ps -ef | less 命令查看一个进程的状态，| 符号是一个管道，这里先记住怎么用，后面的课时会进行详细讲解，你可以看到用户的 UID，进程的 PID，父进程的PPID，以及进程开始的时间，运行参数等信息。",-1),y=t("h3",{id:"top",tabindex:"-1"},[s("top "),t("a",{class:"header-anchor",href:"#top","aria-label":'Permalink to "top"'},"​")],-1),Q=t("p",null,"ps 是获取当前进程列表的重要命令，接下来我们学习另外一个命令 top，当执行 top后，我们可以看到动态的交互界面上显示了整个机器的一个状态，包括了负载情况，当前用户，启动时间，相关的任务树，以及内存，进程的一些数据等，同样也包含 PID、USER、内存、共享内存，CPU 占比等全部信息。还可以对进程进行排序和查询，所以top 是一个非常实用的查看进程的命令，如果某台机器出现问题时，第一个输入的命令通常就是 top，查看哪个进程内存、CPU 占比高来排查问题原因。",-1),Y=t("p",null,'以前，在阿里巴巴的时候，我的导师就建议我说"如果你想真正了解 Linux，了解 Shell，那么推荐你把 ps 和 top 的帮助文档直接打印出来，全部看一遍。"看完之后的确学到了非常多的知识，所以我也建议你也把 ps 和 top 的帮助文档打印出来，全部看一遍。',-1),J=t("h2",{id:"网络",tabindex:"-1"},[s("网络 "),t("a",{class:"header-anchor",href:"#网络","aria-label":'Permalink to "网络"'},"​")],-1),z=t("p",null,"最后，我们来学习网络，当一个文件加载到 CPU 中被执行的过程中它就变成了一个进程，有的时候进程之间需要通信，这个时候就会开启一个 socket，socket 就是对外建立连接的一个窗口，然后借助 TCP 协议进行通信。但进行通信之前首先需要进程开启一个端口，那我们如何查看本地开启了多少端口？这些端口又是由哪些进程开启的呢？",-1),W=t("h3",{id:"netstat-tlnp",tabindex:"-1"},[s("netstat -tlnp "),t("a",{class:"header-anchor",href:"#netstat-tlnp","aria-label":'Permalink to "netstat -tlnp"'},"​")],-1),j=t("p",null,"我们可以通过 netstat -tlnp 命令查看 TCP 协议进程端口，-t 指的是 TCP 协议，-l （listen）指哪几个进程开启了对外的链接，负责监听端口，-n 指不需要解析远程服务器的名字，以加快运行速度，-p 指打印进程，我们看下执行效果，可以看到当前机器的第一条端口信息开放了 22 端口，这时我就可以通过 ssh 登录这个服务器，如果系统没有开放任何端口，外部是无法进行任何操作的，也就是此时机器对外是完全封闭的。",-1),F=t("p",null,"第二条端口信息，开放了 25 端口并监听到了 127.0.0.1，监听到的这个端口外部是访问不了的，只用于本地进程间进行通信。",-1),$=t("h3",{id:"netstat-tnp",tabindex:"-1"},[s("netstat -tnp "),t("a",{class:"header-anchor",href:"#netstat-tnp","aria-label":'Permalink to "netstat -tnp"'},"​")],-1),H=t("p",null,"l 是 listen，监听的意思，它可以列举目前在当前机器上有多少进程在与外部进行通信，那如果我们去掉 l 直接使用 netstat -tnp 命令会怎么样？",-1),X=t("p",null,"我们来看第一条信息，它首先访问了一个远程服务器的 80 端口，在看第二条信息，本地某个进程在访问外部服务，第三条信息是本地与远程的 3128 建立起一个链接。",-1),Z=t("p",null,"通过 netstat -tnp 获取了本地机器上有多少个链接正在与外部进行通信，属于哪个进程你也可以看到，比如这条是阿里云上的性能监控的一个服务，它链接了某个远程的 IP。",-1),tt=t("p",null,"还有个需要你注意的点，Mac 系统与 Linux系统并不完全一致，因为历史原因，它们两个的参数并不一致，比如 Mac 系统中，要实现与 netstat -tlnp 相同的效果你需要使用不同的语法 netstat -p tcp -n -a，它也可以列举出当前开放的端口情况。",-1),st=t("br",null,null,-1),lt=t("p",null,"关于进程你可以通过 ps 或 top 命令进行获取。进程需要对外进行通信时，首先需要开启端口，你可以通过 netstat 进行查询。很多公司在面试时，都会提问关于进程、网络、文件相关的知识点，需要你牢牢地掌握本课的内容。",-1),et=t("br",null,null,-1);function nt(at,ot,it,ct,pt,ht){const l=a("Image");return o(),i("div",null,[h,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/96/CgotOV3Tup-AG_EQAAL0lCLE7zk733.png"}),s(),_,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/77/CgoB5l3Tup-ADQLAAANXFk643ts803.png"}),s(),r,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/96/CgotOV3Tup-ADf9JAANefM9Rhwg364.png"}),s(),d,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/77/CgoB5l3TuqCAQUV2AAQ_154z-Wg836.png"}),s(),A,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/96/CgotOV3TuqCAP51TAASKn8MrnI4613.png"}),s(),u,g,m,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/96/CgotOV3TuqCABKJ0AAQY3Jgn3f0892.png"}),s(),x,C,T,P,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/77/CgoB5l3TuqCAO6hXAAKyh5ta58k652.png"}),s(),M,f,b,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/77/CgoB5l3TuqGAPlkYAAP4ne07kvY351.png"}),s(),q,E,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/77/CgoB5l3TuqGAZVizAAO7_xP36EU749.png"}),s(),k,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/97/CgotOV3TuqGAPdkpAAQUyxFIc9Y577.png"}),s(),L,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/77/CgoB5l3TuqGAeDD9AALMW8rpxEk407.png"}),s(),O,v,V,B,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/97/CgotOV3TuqKAYGE6AAPva3zSUbM410.png"}),s(),D,S,U,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/97/CgotOV3TuqKAeyHXAAPRfiGYfJY753.png"}),s(),I,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/77/CgoB5l3TuqKAVAhKAAPxiio6rRE747.png"}),s(),N,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/97/CgotOV3TuqOAENLvAAOxjUP1BaI416.png"}),s(),R,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/77/CgoB5l3TuqOASCW9AAHZdh_W3zw797.png"}),s(),w,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/97/CgotOV3TuqOAaeFiAAP-k8Nx3_A936.png"}),s(),G,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/77/CgoB5l3TuqOAThrUAAMsmWp53T4049.png"}),s(),K,y,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/97/CgotOV3TuqOAQjM-AAOq1_Cacl8811.png"}),s(),Q,Y,J,z,W,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/97/CgotOV3TuqSAHmqEAAKpSLNTtFk275.png"}),s(),j,F,$,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/77/CgoB5l3TuqSABUdlAAK853I3wT0740.png"}),s(),H,X,e(l,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/AA/77/CgoB5l3TuqSAE4j0AANj2e5UcTc766.png"}),s(),Z,tt,st,lt,et])}const dt=n(p,[["render",nt]]);export{rt as __pageData,dt as default};
