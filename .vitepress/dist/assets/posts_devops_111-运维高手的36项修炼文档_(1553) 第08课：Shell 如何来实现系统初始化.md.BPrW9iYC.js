import{_ as o,F as s,g as r,K as l,h as a,ar as i,l as e,o as n}from"./chunks/framework.VlluEs-f.js";const B=JSON.parse('{"title":"第08课：Shell如何来实现系统初始化","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/111-运维高手的36项修炼文档/(1553) 第08课：Shell 如何来实现系统初始化.md","filePath":"posts/devops/111-运维高手的36项修炼文档/(1553) 第08课：Shell 如何来实现系统初始化.md","lastUpdated":1718371218000}'),p={name:"posts/devops/111-运维高手的36项修炼文档/(1553) 第08课：Shell 如何来实现系统初始化.md"},h=i('<h1 id="第08课-shell如何来实现系统初始化" tabindex="-1">第08课：Shell如何来实现系统初始化 <a class="header-anchor" href="#第08课-shell如何来实现系统初始化" aria-label="Permalink to &quot;第08课：Shell如何来实现系统初始化&quot;">​</a></h1><br><p>本课时我们开始进入一个新的课程模块（部署），在这部分我将首先讲解 Shell 如何实现系统初始化，通过 Shell 脚本集成 Linux 操作命令对操作系统进行初始化。</p><h2 id="shell-脚本简介" tabindex="-1">Shell 脚本简介 <a class="header-anchor" href="#shell-脚本简介" aria-label="Permalink to &quot;Shell 脚本简介&quot;">​</a></h2><h3 id="shell-初始化脚本-jinit-介绍" tabindex="-1">Shell 初始化脚本 Jinit 介绍 <a class="header-anchor" href="#shell-初始化脚本-jinit-介绍" aria-label="Permalink to &quot;Shell 初始化脚本 Jinit 介绍&quot;">​</a></h3><p>首先，这里给你演示一个叫作&quot;Jinit&quot;的脚本，它是用 Shell 实现的系统初始化脚本，它实现了 OS 所需的系统参数优化、运维优化、安全优化、自动化任务等多方面的功能。接下来我会登录到刚装好的一台新的主机，在系统上执行演示这个脚本。</p><br><p>首先 cd 到程序代码目录下，在代码目录下有两个脚本，一个是 Jinit.sh，这是操作系统的初始化脚本，也是我们本课时所需要讲解的；另外一个是 autoconfigip.sh，用于自动配置 IP。</p><p>我们往往在安装完操作系统以后，IP 地址可能是动态获取或临时的，所以需要把操作系统临时获取的静态 IP 进行一个 IP 地址配置，autoconfigip.sh 就是用来完成这个工作的，Jinit.sh 会调用并执行脚本。</p><br><p>你可以看下执行效果，在执行过程中，首先输出一些命令所操作的记录。执行完之后，重启主机再次登录，这里需要补充一下，因为我的操作系统是 CentOS 7（这个脚本也是为Centos7准备的），如果你的操作系统不是 CentOS 7，需要根据系统差异对脚本内容进行一些修改。</p><br><p>接下来，重新登录主机，因为 Jinit.sh 脚本对 ssh 登录服务端口和登录方式进行了修改，所以需要用新的方式登录这台主机。这里执行 ssh root，新的主机端口改为 9922，我通过 9922 端口登录主机。</p><br><p>这时，旧密码不再能登录主机，所以需要输入重置后的新密码，接下来便可以登录主机了，你应该细心的 发现，登录主机后，展示的终端交互样式和之前有差异，原因是脚本修改了终端交互显示环境。</p><h3 id="shell-初始化脚本-jinit-框架" tabindex="-1">Shell 初始化脚本 Jinit 框架 <a class="header-anchor" href="#shell-初始化脚本-jinit-框架" aria-label="Permalink to &quot;Shell 初始化脚本 Jinit 框架&quot;">​</a></h3><p>刚才演示了 Jinit.sh 脚本的执行过程和执行结果，想必你想了解 Jinit.sh 脚本到底做了哪些系统的初始化，具体修改了哪些内容，接下来就给你详细讲解。</p><br>',18),c=e("br",null,null,-1),u=e("p",null,"首先，我们来看一下 Jinit.sh 脚本的整体结构。如果你了解 Shell 会发现，这是一种最基础的编写方式，Shell 会由上到下，依次执行每一段优化项。如果你想将脚本写得更好，建议你把优化项封装成函数，这样维护性更高。另外你也可以选择优先调用执行顺序.",-1),d=e("h3",{id:"学习基础",tabindex:"-1"},[a("学习基础 "),e("a",{class:"header-anchor",href:"#学习基础","aria-label":'Permalink to "学习基础"'},"​")],-1),_=e("p",null,"学习这个脚本之前，你需要有一定的 Linux 操作基础，同时需要了解基础的操作系统原理，接下来，给你画了一张思维导图。",-1),b=e("br",null,null,-1),m=i('<br><p>图中我列出了 Jinit.sh 脚本里面所具体执行的每一项优化内容，从大类来看，共分为三类，分别是优化操作系统性能、提高操作系统安全和便捷化管理。</p><br><p>所谓优化操作系统性能，主要是把不常用的服务关闭，把一些影响系统性能的安全设置忽略掉，比如关闭 Selinux。另外，也需要优化系统的内核参数，还需要优化启动项配置。</p><br><p>关于提高系统安全性，比如用户登录权限、修改登录方式，修改内核的安全机制等相关设置，都可以在操作系统初始化脚本中执行。</p><br><p>最后就是运维相关的便捷化管理，你可以选择优化 yum 设置、设置 history 记录、创建方便的别名、做一些自动化的任务集成。这些都是 Jinit 脚本所包含的功能，接下来我就给你讲解如何优化操作系统性能开始讲起。</p><h2 id="优化操作系统性能" tabindex="-1">优化操作系统性能 <a class="header-anchor" href="#优化操作系统性能" aria-label="Permalink to &quot;优化操作系统性能&quot;">​</a></h2><h3 id="关闭不常用服务" tabindex="-1">关闭不常用服务 <a class="header-anchor" href="#关闭不常用服务" aria-label="Permalink to &quot;关闭不常用服务&quot;">​</a></h3><p>首先，第一部分就是优化操作系统性能，关闭不常用服务。</p><br><p>在这个脚本里面是这样实现的，我会把一些不常用的服务关闭，比如邮件服务、网卡管理服务等平时做运维管理或者应用程序时不需要用的服务。那为什么需要关闭呢？原因很简单，因为不常用的服务长时间运行在操作系统上会对于操作系统的资源是一个占用，另外出于安全性考虑，不常用服务、对外服务，尽可能地将它关闭，以免暴露不需要的服务端口。</p><br><p>基于这些原因，我就通过在 CentOS 7 操作系统中的 systemctl 去管理服务，并且将这些服务在启动项里面进行关闭。</p><h3 id="关闭-selinux" tabindex="-1">关闭 Selinux <a class="header-anchor" href="#关闭-selinux" aria-label="Permalink to &quot;关闭 Selinux&quot;">​</a></h3><p>另外一个命令就是关闭 Selinux。Selinux是 内核的安全模组，其提供了访问控制安全策略机制，选择关闭 Selinux，对维护管理会更加方便。因为 Selinux 的安全机制实在是太强大了，而一般的场景又不太需要 Selinux 存在，反而会给实际管理服务运行带来很多干扰。</p><br><p>所以在这个脚本里面，一般企业都会直接在启动项里面把操作系统默认开启的 Selinux 关闭，关闭方式你可以看一下：</p><br><p>/bin/sed -i &#39;s/SELINUX=permissive/SELINUX=disabled/&#39; /etc/selinux/config</p><p>/bin/sed -i &#39;s/SELINUX=enforcing/SELINUX=disabled/&#39; /etc/selinux/config</p><br><p>这是通过 sed 命令去修改文件里面的配置，直接将 Selinux 关闭。</p><h3 id="优化操作系统内核参数" tabindex="-1">优化操作系统内核参数 <a class="header-anchor" href="#优化操作系统内核参数" aria-label="Permalink to &quot;优化操作系统内核参数&quot;">​</a></h3><p>另外值得注意的就是优化操作系统内核参数。这里重点给你讲解 Timestamps 配置，建议把它设置为 0。为什么呢？因为在部分极少数的场景中可能会导致网络上的抖动或者丢包，这里给你画一张图演示一下：</p><br>',27),f=e("br",null,null,-1),g=e("p",null,"如果我把 Timestamps 设为 1，当客户端往服务端发包的时候，它会判断源 IP 在上次通讯时的时间戳值会不会大于本次。如果不大于的话，也就是当时间戳比本地的时间戳更加小的时候，这时就会直接 drop 到这个包。这样会有一些影响，所以这个时候我们直接把它设为 0，就可以避这样的问题。",-1),q=e("br",null,null,-1),x=e("p",null,"另外就是操作系统内核的优化，除了文件句柄等我们常知道的优化内容以外，经常需要考虑网络的底层去优化。说到网络底层优化，你就需要先了解 TCP 的 3 次握手和 4 次挥手，这个是非常重要的，别看是非常简单的一个概念，这里我们来回顾一下这张图。",-1),k=e("br",null,null,-1),P=e("br",null,null,-1),S=e("p",null,"客户端主动连接，我们会看到 3 次握手时，客户端和服务端分别进入一个新的状态；同样，当客户端对服务端进行 4 次挥手断开这些连接时，客户端和服务端每次的状态也相应发生改变。",-1),y=e("br",null,null,-1),A=e("p",null,"为什么 3 次握手和 4 次挥手需要重点关注呢？因为我们在做操作系统内核优化时，很多的优化参数都是优化服务端的网卡队列相关信息，比如我们刚刚看到的客户端和服务端建立起 3 次握手，当客户端发送 SYN 包到服务端以后，服务端会进入到一个 SYN_RCVD 状态，这个状态里面的数值就需要保存在服务端的网卡队列中。",-1),I=e("br",null,null,-1),C=e("p",null,"那么网卡队列的长度设置为多少合适呢？如果你是一个高并发的服务，这个时候就需要优化本地的网卡队列的长度。所以对于网卡操作系统队列，我们需要优化一些参数：",-1),v=e("br",null,null,-1),T=e("p",null,"一个是本地设备的网卡队列的请求长度，这个我们可以适当的调大。另外一个，就是刚讲到的SYN 队列长度，默认为 1024，这里我们把它调到更大。还有一些 TIME_WAIT 的网卡队列的长度，我们也可以适当地调大，经验来看短连接服务往往在本地会产生大量的 TIME_WAIT，所以就需要把 TIME_WAIT 的 buff 值调得更高，这样的话就会减少 TIME_WAIT 报错信息。",-1),w=e("br",null,null,-1),N=e("p",null,"以上就是刚刚讲到的所有关于网卡队列的长度大小的优化。单独摘出来的一个参数配置，需要注意的就是 ip_local_port_range。这个参数表示从本地最多可以使用多少个 IP 和端口连接同一个目标 IP 及端口，所以这个值也可以适当的调整，在我的脚本里也会做优化。",-1),E=e("br",null,null,-1),O=i('<br><p>在操作系统内核优化方面，我们把配置net.ipv4.tcp_syncookies 设置为 1，为什么呢？syncookies 一般用来防范 SYN 的攻击，或者说释放对于 sync_backlog 的依赖，所以我们改为 syncookies 校验机制。接下来具体讲解下：</p><br><p>客户端向服务端发送 SYN 包，服务端正常是返回一个 SYN+ACK 包给客户端时候，sync_backlog队列需要记录信息。</p><br><p>刚才我们讲到了服务端有一个 sync_backlog 队列大小设置，我们知道这个队列大小再怎么样优化，它也是有一定的数值的。假设一个客户端发起了一个源地址伪造请求的 TCP 攻击，就有可能导致服务端收不到客户端的第 3 次握手，就会导致 sync_backlog 不断地推积，直到增加的数值满了以后，服务端就无法对外提供服务了，这样就会导致服务端遭受到 SYN 攻击。</p><br><p>怎么办呢？这个时候我们就可以设置 syncookies，设置了 syncookies 以后，backlog 满了以后，Linux 的内核会生成一个特定的 n 值，而并不会把客户的连接放入到这个 backlog 中，也就没有存储这个链接的相关信息，从而保证了新的、正常的 TCP 的 3 次握手能够正常进行。</p><br><p>以上就是这个脚本里面我摘取出来的几点优化项来给你重点讲的。</p><h2 id="shell-脚本逻辑" tabindex="-1">Shell 脚本逻辑 <a class="header-anchor" href="#shell-脚本逻辑" aria-label="Permalink to &quot;Shell 脚本逻辑&quot;">​</a></h2><p>在整个 Shell 初始化脚本中还有很多个优化项，接下来我们可以打开这个脚本自己看一下。我登录到控制台，连接服务器以后，用 vim 编辑器将脚本打开，从上给你一一讲解一下。</p><br><p>WORK_DIR=$(pwd)</p><p>#Only root</p><p>[[ $EUID -ne 0 ]] &amp;&amp; echo &#39;Error: This script must be run as root!&#39; &amp;&amp; exit 1</p><br><p>首先，最开始我会判断是不是 root 用户在运行？这里只能是 root 用户来执行这个初始化脚本。</p><br><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h3><h1 id="close-selinux-services" tabindex="-1">Close selinux services <a class="header-anchor" href="#close-selinux-services" aria-label="Permalink to &quot;Close selinux services&quot;">​</a></h1><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-label="Permalink to &quot;&quot;">​</a></h3><p>/bin/sed -i &#39;s/mingetty tty/mingetty --noclear tty/&#39; /etc/inittab</p><p>/bin/sed -i &#39;s/SELINUX=permissive/SELINUX=disabled/&#39; /etc/selinux/config</p><p>/bin/sed -i &#39;s/SELINUX=enforcing/SELINUX=disabled/&#39; /etc/selinux/config</p><br><p>/bin/cat&lt;&lt;EOF &gt;&gt; /etc/profile</p><br><p>export PS1=&#39;\\u@\\h:\\w\\n\\\\$ &#39;</p><br><p>EOF</p><br><p>上面这一段是用于关闭 selinux，并且把终端的交互的环境显示通过 ps1 变量设置成一个自定义模式。</p><br><h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-label="Permalink to &quot;&quot;">​</a></h3><h1 id="close-unuseful-services" tabindex="-1">Close unuseful services <a class="header-anchor" href="#close-unuseful-services" aria-label="Permalink to &quot;Close unuseful services&quot;">​</a></h1><h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-label="Permalink to &quot;&quot;">​</a></h3><p>systemctl disable &#39;postfix&#39;</p><p>systemctl disable &#39;NetworkManager&#39;</p><p>systemctl disable &#39;abrt-ccpp&#39;</p><br><p>同时，会关闭一些不常用到的服务，接下来会新建操作系统上的一个普通用户，并且配置这个普通用户的 sudoers 权限，控制它是不是可以去提取 root 权限。因为我们尽可能的在生产环境里把 root 账号关闭，让普通用户来进行登录。如果涉及需要 root 用户的话，可以给它开提权控制。</p><br><h3 id="-4" tabindex="-1"><a class="header-anchor" href="#-4" aria-label="Permalink to &quot;&quot;">​</a></h3><h1 id="change-intel-p-state" tabindex="-1">Change Intel P-state <a class="header-anchor" href="#change-intel-p-state" aria-label="Permalink to &quot;Change Intel P-state&quot;">​</a></h1><h3 id="-5" tabindex="-1"><a class="header-anchor" href="#-5" aria-label="Permalink to &quot;&quot;">​</a></h3><p>sed -i &#39;/GRUB_CMDLINE_LINUX/{s/&quot;$//g;s/$/ intel_pstate=disable intel_idle.max_cstate=0 processor.max_cstate=1 idle=poll&quot;/}&#39; /etc/default/grub</p><br><p>接下来就是调整我的CPU的能源管理模块优化，这里调整的是 pstate 和 cstate 数值。</p><br><h3 id="-6" tabindex="-1"><a class="header-anchor" href="#-6" aria-label="Permalink to &quot;&quot;">​</a></h3><p>#Bash Aliases</p><h3 id="-7" tabindex="-1"><a class="header-anchor" href="#-7" aria-label="Permalink to &quot;&quot;">​</a></h3><p>cat &gt; /etc/profile.d/Je.sh &lt;&lt;EOF</p><p>alias ls=&#39;ls -hAF --color=auto --time-style=long-iso&#39;</p><p>alias ll=&#39;ls -l&#39;</p><p>alias cp=&#39;cp -i&#39;</p><p>alias mv=&#39;mv -i&#39;</p><p>alias rm=&#39;rm -i&#39;</p><p>alias ds=&#39;ds -h&#39;</p><p>alias df=&#39;df -h&#39;</p><p>alias grep=&#39;egrep --color&#39;</p><br><p>EOF</p><br><p>再往下，就涉及运维管理操作的便捷性，我会把一些常用到的命令，通过 alias 命令做一个别名，这样更加容易进行管理和维护。后面还会添加一个公共的密钥，当我们通过客户端和服务端建立ssh连接时，当然不希望是通过用户密码的方式，通过密钥的方式更加常见，因为这样可以防止中间人被劫持，通过密钥的方式也会更加安全。</p><br><h3 id="-8" tabindex="-1"><a class="header-anchor" href="#-8" aria-label="Permalink to &quot;&quot;">​</a></h3><h1 id="public-key" tabindex="-1">Public key <a class="header-anchor" href="#public-key" aria-label="Permalink to &quot;Public key&quot;">​</a></h1><h3 id="-9" tabindex="-1"><a class="header-anchor" href="#-9" aria-label="Permalink to &quot;&quot;">​</a></h3><p>mkdir /root/.ssh</p><p>pub_key=&#39;ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEA4mvukv4f5seBuzrCnCCm1DpSgYw/kvq+XgsUP8mnzUpyaQ6D8BKfbOn6T20tUU/ksiJwSuUQHfw5v9JsnBACto3o/RmId0Ltn4DCq19sSwMP3YJb9dRb8SA/Pc5Xl7MPwPoSYyuY20ztMfo1GBx5N9dDuQ3j1MdKYTY9SdfFwPr0ZQvesKT1ozfQ9HHrcUi1CLJw+irYW9+jU39CsMrrZmCjb/n53gP87Do0lj9TkqXK2SYNdA88cmK2IQJP3LfFWWrwYH01FkImZbt7ODDQ21BqGccLY7xCbsNb1iBlT8Mpy4/Wlg1qqnNPxBbw1nrs9A+2MnAfGDHXYhkFC/n6wQ== <a href="mailto:root@linux.jesonc.net" target="_blank" rel="noreferrer">root@linux.jesonc.net</a>&#39;</p><p>echo $pub_key &gt;&gt; /root/.ssh/authorized_keys</p><p>chmod 700 /root/.ssh</p><p>chmod 600 /root/.ssh/authorized_keys</p><p>chown -R root:root /root/.ssh</p><br><p>所以在操作系统安全性的考虑方面，我会自动的给它生成一个密钥，这个密钥是公共密钥，可以直接在本地保存好对应的私钥，那么我就可以直接通过私钥来登录。</p><br><p>found=`grep -c net.ipv4.tcp_tw_recycle /etc/sysctl.conf`</p><p>if ! [ $found -gt &quot;0&quot; ]</p><p>then</p><p>cat &gt; /etc/sysctl.conf &lt;&lt; EOF</p><p>net.core.rmem_max = 16777216</p><p>net.core.wmem_max = 16777216</p><p>fs.file-max = 131072</p><p>kernel.panic=1</p><p>net.ipv4.tcp_rmem = 4096 87380 16777216</p><p>net.ipv4.tcp_wmem = 4096 65536 16777216</p><p>net.ipv4.tcp_timestamps = 0</p><p>net.ipv4.tcp_window_scaling = 1</p><p>net.ipv4.tcp_sack = 1</p><p>net.ipv4.tcp_no_metrics_save = 1</p><p>net.core.netdev_max_backlog = 3072</p><p>net.ipv4.tcp_max_syn_backlog = 4096</p><p>net.ipv4.tcp_max_tw_buckets = 720000</p><p>net.ipv4.ip_local_port_range = 1024 65000</p><p>net.ipv4.tcp_fin_timeout = 5</p><p>net.ipv4.tcp_tw_recycle = 1</p><p>net.ipv4.tcp_retries1 = 2</p><p>net.ipv4.tcp_retries2 = 10</p><p>net.ipv4.tcp_synack_retries = 2</p><p>net.ipv4.tcp_syn_retries = 2</p><p>net.ipv4.tcp_syncookies = 1</p><p>EOF</p><p>fi</p><br><p>我们知道文件句柄的大小，内存里面的空间分配的大小，还有刚讲到的网卡队列相关的大小，都是在这里一起来做优化，还有我们刚讲到的 syncookie，你也可以看到在这里做了相应的优化。</p><br><h3 id="-10" tabindex="-1"><a class="header-anchor" href="#-10" aria-label="Permalink to &quot;&quot;">​</a></h3><h1 id="max-open-files" tabindex="-1">Max open files <a class="header-anchor" href="#max-open-files" aria-label="Permalink to &quot;Max open files&quot;">​</a></h1><h3 id="-11" tabindex="-1"><a class="header-anchor" href="#-11" aria-label="Permalink to &quot;&quot;">​</a></h3><p>found=`grep -c &quot;^* soft nproc&quot; /etc/security/limits.conf`</p><p>if ! [ $found -gt &quot;0&quot; ]</p><p>then</p><p>cat &gt;&gt; /etc/security/limits.conf &lt;&lt; EOF</p><p>* soft nproc 2048</p><p>* hard nproc 16384</p><p>* soft nofile 8192</p><p>* hard nofile 65536</p><p>EOF</p><p>fi</p><br><p>这一段就是设置操作系统最大的文件打开数，这里你可以通过这种方式来优化。接下来，就是调整 ssh 的登录端口，我把默认的端口改成 9922 端口。再往下，就是 history 也就是保留的历史终端操作记录的长度，及它保留的历史记录的格式，一般会希望保留更多的历史记录。</p><br><h3 id="-12" tabindex="-1"><a class="header-anchor" href="#-12" aria-label="Permalink to &quot;&quot;">​</a></h3><h1 id="auto-configure-ip" tabindex="-1">Auto configure IP <a class="header-anchor" href="#auto-configure-ip" aria-label="Permalink to &quot;Auto configure IP&quot;">​</a></h1><h3 id="-13" tabindex="-1"><a class="header-anchor" href="#-13" aria-label="Permalink to &quot;&quot;">​</a></h3><br><p>cd ${WORK_DIR}</p><p>sh ./autoconfigip.sh</p><br><p>接下来这一段就比较特别，会调用执行 autoconfigip.sh 脚本。这个脚本是用于自动去配置 IP，你感兴趣可以把这个脚本打开，会发现我做到的就是把动态的 IP 通过配置文件的方式自动生成一个静态的网卡的 eth 设备的 IP，我们就不用手动去配置 IP 。</p><br><h3 id="-14" tabindex="-1"><a class="header-anchor" href="#-14" aria-label="Permalink to &quot;&quot;">​</a></h3><h1 id="configure-yum-repository" tabindex="-1">Configure yum repository <a class="header-anchor" href="#configure-yum-repository" aria-label="Permalink to &quot;Configure yum repository&quot;">​</a></h1><h3 id="-15" tabindex="-1"><a class="header-anchor" href="#-15" aria-label="Permalink to &quot;&quot;">​</a></h3><p>#cat &gt; /etc/yum.repos.d/Jjesonc.repo &lt;&lt; EOF</p><p>#-----------------</p><p>...</p><p>最后这部分我加了注释，这段配置 yum 源。一般的大公司都会需要有一个自己的 yum 源，yum 源可以去维护我们自己的软件包，还有我们定制的软件包，以及整体的相关依赖，所以有对应的公司的 yum 源，你可以把 yum 源的配置一并放入到你的初始化脚本里面，这样的话，在你一台新的机器启动以后，默认让它去执行这样的一个初始化脚本，就把你操作系统里面很多需要自己去维护的内容，通过脚本的方式执行了，对操作系统的运维管理而言，这个是非常方便且非常有效的。</p><br><p>本专栏课中的所有案例配置及源代码,你可以课后通过这个地址 <a href="http://www.jesonc.com/jeson/2020/02/07/ywgs36/" target="_blank" rel="noreferrer">http://www.jesonc.com/jeson/2020/02/07/ywgs36/</a> 自己下载，密码为：mukelaoshi。</p>',143);function J(M,U,L,D,F,Y){const t=s("Image");return n(),r("div",null,[h,l(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/73/7A/Cgq2xl5qC1-AJZ-eAAOMT2A6vD8550.png"}),a(),c,u,d,_,b,l(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/73/7A/CgpOIF5qC1-ATg7VAALizw8mvh4653.png"}),a(),m,l(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/73/7A/Cgq2xl5qC1-ABdFAAALgbr--nNA834.png"}),a(),f,g,q,x,k,l(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/73/7A/CgpOIF5qC1-AVlH_AAORTXwTB0A492.png"}),a(),P,S,y,A,I,C,v,T,w,N,E,l(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/73/7A/Cgq2xl5qC1-ARQjxAAHQtHHl1RA689.png"}),a(),O])}const R=o(p,[["render",J]]);export{B as __pageData,R as default};
