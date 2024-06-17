import{_ as p,F as n,g as r,K as i,h as s,ar as e,l as t,o as l}from"./chunks/framework.VlluEs-f.js";const R=JSON.parse('{"title":"第19课：网络故障分析（ping、mtr、traceroute）与抓包分析（tcpdump）诊断","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/111-运维高手的36项修炼文档/(1564) 第19课：网络故障分析（ping、mtr、traceroute）与抓包分析（tcpdump）诊断.md","filePath":"posts/devops/111-运维高手的36项修炼文档/(1564) 第19课：网络故障分析（ping、mtr、traceroute）与抓包分析（tcpdump）诊断.md","lastUpdated":1718371218000}'),h={name:"posts/devops/111-运维高手的36项修炼文档/(1564) 第19课：网络故障分析（ping、mtr、traceroute）与抓包分析（tcpdump）诊断.md"},c=e('<h1 id="第19课-网络故障分析-ping、mtr、traceroute-与抓包分析-tcpdump-诊断" tabindex="-1">第19课：网络故障分析（ping、mtr、traceroute）与抓包分析（tcpdump）诊断 <a class="header-anchor" href="#第19课-网络故障分析-ping、mtr、traceroute-与抓包分析-tcpdump-诊断" aria-label="Permalink to &quot;第19课：网络故障分析（ping、mtr、traceroute）与抓包分析（tcpdump）诊断&quot;">​</a></h1><p>本课时我们来学习：&quot;网络故障分析与抓包分析&quot;，了解一些运维工作所必须要掌握的网络命令（MTR、traceroute 等）的原理和使用，并进行演示。</p><h4 id="常见网络故障" tabindex="-1">常见网络故障 <a class="header-anchor" href="#常见网络故障" aria-label="Permalink to &quot;常见网络故障&quot;">​</a></h4><p>首先讲一讲常见的网络故障，粗略分为两种：骨干网络故障和内部网络故障。骨干网络故障表示连接多个区域（地区）的高速网络故障（通常是运营商网络），常见的原因有光缆被挖断、网络设备故障等。</p><p>另外一块就是内部（IDC、局域）的网络故障，我们需要对内部网络故障的原因进行更加细致和深刻的了解。导致内部网络故障的原因通常有 4 个：</p><ol><li>网络设备故障（模块、板卡等） ；</li><li>网络带宽的瓶颈；</li><li>黑客对内网的一些攻击；</li><li>配置和网络管理上面出的一些问题。</li></ol><p>运维工程师虽然不是专职一线网络技术，但还是需要懂得定位及反馈网络问题。所以我们需要能够定位网络问题，掌握问题所属故障范围（是主机的网络配置问题，还是服务本身的问题，或是某一段路由出现故障等) 。</p><p>对于网络故障的诊断，我要给你重点讲解的是 traceroute 和 MTR 命令的使用场景。通常我们在进行网络故障分析时，最常用到就是 ping 命令了。比如我们想要去判断网络对目的端是否可达，就可以通过 ping 命令去发 ICMP 的包，但是这里存在一个问题，如果我们需要去 ping 多台主机或是一个主机段的主机，在操作时，可能就需要有一个命令能够帮批量的 ping 指定的主机段内的主机，这时仅通过 ping 命令是不可行的，这里建议你使用 fping 命令。</p><p>另外一种情况是， ping 命令发送的是 ICMP 的协议，而服务端通常有可能因为安全的考虑关闭了 ICMP 协议的请求导致 ping 命令无法得到结果，如果想通过网络数据诊断，我们就可以换成别的协议去进行 ping 检测，这里推荐你使用 TCP 的包去做检测，因为一般服务端都会开放一些 TCP 的公共服务端口，我们可以基于 TCP 的协议去 ping 服务端，而这个时候推荐你使用 tcpping 命令工具来作分析。</p><p>这两个命令在前面的内容里我们都有讲过。无论是 fping 还有 tcpping ，它们都可以获取一个点到另外一个点的网络数据延迟情况。但是假如我们想要追踪具体的问题，比如当一个点到另外一个点它的网络不可达时，我们想知道是中间哪一段（路由）出现问题，这个时候需要追踪网络数据包路由途径、查看网络故障节点。但是通过 ping 无法解决这个问题，这个时候就要用到 traceroute 和 MTR 命令了。</p><h4 id="traceroute-和-mtr-命令" tabindex="-1">traceroute 和 MTR 命令 <a class="header-anchor" href="#traceroute-和-mtr-命令" aria-label="Permalink to &quot;traceroute 和 MTR 命令&quot;">​</a></h4><p>traceroute 常被用来检测一个点到目的端的所有路由器，它的原理是：traceroute 默认基于 UDP 协议发送数据包到目的端（默认：UDP 端口大于 30000 的数据包）。所以它首先会发送一个 TTL 值等于 1 的数据包，TTL 值等于 1 代表发送的是第 1 次的数据包，发送给路由器并接受以后，会将 TTL 的值减 1，然后再发一个 ICMP 超时的数据包给客户端。</p>',12),o=e('<p>发起 traceroute 的客户端继续进入第 2 次侦测，客户端会发一个 TTL 为 2 的数据包，这样它就可以经过两个路由，等到等于 0 的时候就是到了第 2 个路由，同样路由 2 再返回一个 ICMP TTL 超时的数据包给到客户端，等最终的目标端收到以后，目的端就不会再发 TTL 超时了，而是会发一个 ICMP 目标端口不可达的响应给到客户端。</p><p>这时，只要客户端收到了最后一次目的地址返回的 ICMP 目标不可达的错误请求，就会认为已经把数据包发到了最终目的地址（目标服务器），这样就完成了整个 traceroute 的过程。这就是traceroute 可以做到逐级侦测，并且能拿到每一级路由的地址及延迟状态原理。</p><p>刚讲到了 traceroute 默认以 UDP 的方式发送，那么有可能在目的地址，防火墙做了安全限制，这样就会造成客户端向服务端不断地发送 UDP 数据包，但是服务端始终无法返回 ICMP 不可达的错误响应，这样就会造成不一致的循环。</p><p>为了避免出现这样的情况，我们可以采取这种方式：客户端改为使用 ICMP 协议去给服务端发送数据包，而不是基于 UDP 的方式。这样到了目标地址的服务端后，由于发送的是 ICMP 协议， ICMP 协议回复会改为&quot; ICMP echo replay&quot; 的数据包给到客户端，这个场景中我们可以通过 traceroute -I 的选项（使用发送 ICMP 的协议数据包来避免这样的问题）。</p><p>那么刚刚讲到的这些原理，在真正使用 traceroute 命令的时候，该怎么去做呢？我把我所了解的最常用的一些方式介绍给大家。</p><h4 id="traceroute-命令使用方法" tabindex="-1">traceroute 命令使用方法 <a class="header-anchor" href="#traceroute-命令使用方法" aria-label="Permalink to &quot;traceroute 命令使用方法&quot;">​</a></h4><p>首先，traceroute 命令后面加的是我的目的地址，比如说我这里的 traceroute --n www.jesoncc.com 。</p><p>--n 表示不做主机名解析，而直接拿到它的 IP 地址。这是一个最常用的方式，它默认发送的是 UDP 大于30000 端口的数据给到目标地址服务端。</p><p>如果想要发送 ICMP 协议该怎么做呢？这个时候就可以用 traceroute -I -n 的方式去发送 ICMP 的数据包。</p><p>接下来进入控制台来为你演示一下 traceroute 的命令使用，刚讲到通过加入一个 -n 的参数，可以直接看到 IP 地址，而不去显示主机名和名字字符的名称。所以这里安装完 traceroute 命令后，直接在后面加一个 -n 的选项，后面加目标地址或是域名，我这里加的是 www.jesonc.com，这样从客户端向服务端发起 traceroute 请求后，我们会看到每一级的路由地址，以及每一次发送数据包的过程。还可以看到每到一条路由的一些延迟情况。</p>',10),d=t("p",null,[s('我们会看到在第七跳的时候，会一直是 "'),t("em",null,"."),s(" ."),t("em",null,'"、"'),s(" ."),t("em",null,"."),s('"，没有新的数据在客户端显示。这种情况就可能是服务端因为一些安全策略关闭了对 UDP 数据包返回数据（ICMP 不可达的错误响应），所以我的客户端会不断向服务端去发送 UDP 数据包。')],-1),k=t("p",null,"这时我在 -n 的选项之前再加一个 -I，表示客户端向目标服务端发送 ICMP 的数据包，我们再来看一下效果，发现在发送到第 12 条的时候，就到了目标服务器端，然后直接给出了一个反馈，完成了整个 traceroute 过程。",-1),g=e('<p>讲到了 traceroute 命令以后，我们再来讲一讲为什么需要使用 MTR 工具？MTR 工具集成了 ping 和 traceroute 两种工具的优点，可以看成是两者的结合体。我们可以通过 MTR 工具来得出每一条路由器的地址，然后通过 ping 命令去循环得出每一跳的延时和丢包率，所以它（MTR）结合了两个命令的优势。</p><p>MTR 的使用方式是这样的：在 MTR 命令后加一个 -n，同样也是只展示它的 IP 地址和目标地址，这样就结果会展示路由情况，及每一跳丢包率。以上就是 traceroute 和 MTR 命令的使用方式。</p><p>值得注意的是，用这两个命令反馈网络问题的时候，你需要特别注意一点，如果 A 到 B 的网络不可达，那么处理网络的工程师会让我们提供一些截图和数据，这时我们很有必要使用traceroute 和 MTR ，给出它的结果。</p><p>这里，建议你需要做双向的 traceroute 和 MTR，比如说 A 到 B 不通，那么我需要从 A 上面执行 traceroute 和 MTR，同时也需要从 B 上面再执行一次 traceroute 给到 A。这样两份结果才更加全面（原因是一些网络架构，有可能从 A 到 B 的路由和 B 到 A 的路由可能会出现一些不一致，给到双向截图的话，能够方便工程师更为准确的判断）。</p><h4 id="服务端端口检测" tabindex="-1">服务端端口检测 <a class="header-anchor" href="#服务端端口检测" aria-label="Permalink to &quot;服务端端口检测&quot;">​</a></h4><p>刚刚讲到了是 traceroute 和 MTR 命令，接下来我们来讲在服务端端口如何检测命令，我们知道端口检测客户端工具是 telnet 命令，服务端我们可以通过 netstat --auntp 或者 ss -s 去检测服务端的端口监听情况。这里我为你推荐 NetCat 这个工具，它号称是瑞士军刀，是一个简单可靠的网络工具，可以用于分析 TCP 或者 UDP 的数据传输的情况。</p><p>这里我们看一下它对应的一些参数：</p><ul><li>-v 显示指令执行过程。</li><li>-w（超时秒数）表示设置等待连线的时间。</li><li>-u 表示使用 UDP 协议发送数据包。</li><li>-z 是一个 0 传输输入模式，只在扫描服务端口时使用。</li></ul><p>下面我列出了一个使用方式，</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">z www.jesonc.com </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">88</span></span></code></pre></div><p>这里加入 -w 和 -z，它的作用是去检查服务端 80~88 的端口是否开放，相当于做了一个端口的扫描。</p><p>如果我们想去检查 UDP 协议的话，可以这样做：我们知道 UDP 协议和 TCP 协议的区别是，UDP 不保证可靠性，是一个单向性的传输。所以我们可以在服务端也安装上 nc 命令，就是 NetCat 这个工具。客户端也安装一个 NC 工具。在服务端执行 nc -ul 1080（1080 是它的端口号），通过 NC 模拟一个服务端 1080 的 UDP 接收端口，然后通过客户端向服务端 1080 端口发送数据包，方式如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test data&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">u 服务端ip </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1080</span></span></code></pre></div><p>我这里通过 echo &quot;test data&quot;，也就是发送数据&quot;test data&quot; 到目标服务端，然后通过管道服务，nc 后加服务端的 IP，对应的是 1080 端口。</p><p>这样只需要通过nc就可以模拟一个客户端+服务端完整来作检测了，检查服务端否收到客户端发送过来的 &quot;test data&quot; 数据，即可判断这条UDP通道是否可达。</p><p>相比之前的命令，我们会看到 nc 命令的使用功能更加广泛，它可以做端口范围扫描，并可以基于 UDP 协议来做端口侦测。</p><h4 id="抓包工具" tabindex="-1">抓包工具 <a class="header-anchor" href="#抓包工具" aria-label="Permalink to &quot;抓包工具&quot;">​</a></h4><p>最后的一部分我将为你讲解数据的抓包工具。抓包工具的使用场景通常是这样的：客户端和服务端的双方都认为，网络都可达，通过端口检测也没有问题，但无法判断服务上数据传送、建连情况。</p><p>这个时候想去分析一下，在网络上底层的一些连接是否正常，我们可以用到 tcpdump 这种数据抓包工具来帮助我们做抓包分析。</p><p>通常来说我们会在客户端和服务端进行双向数据包抓包。我这里有一个使用案例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tcpdump tcp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i eth0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dst port </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6060</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> and src net </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">192.168</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w  test.cap</span></span></code></pre></div><p>tcpdump 后面加 TCP 的协议，-i 表示监听抓服务器上哪个网卡；-t 表示不显示时间戳；-s 可以抓到完整的数据包 ，如果不加的话，可能就只抓部分字节；-c 表示一共抓取多少次数据包；dst port 6060 表示抓取目标端口是 6060 的数据包；后面加了一个 src net + 网段，表示数据包的来源网络地址为 192.168.1.104 。</p><p>接下来以 tcpdump 方式进行演示。首先登录到我的服务器上，然后输入了 tcpdump 命令及这一串选项，加入了一个 -w test.pcap ，表示把抓取的数据包存放到文件里面，因为我们一会可以拿 WireShark 工具来做数据包分析。</p>',23),u=t("p",null,"接下来直接在服务端执行这样的命令，抓取的数据包改为 5 个，然后我在客户端执行 curl 命令，请求服务端目标地址是 6060 的端口，发送一个 HTTP 协议。",-1),_=t("p",null,"这个时候我们可以在服务端看到抓包结果，客户端 7 个数据包，采集了 5 个数据包。所以在本地 执行ls命令 会生成一个 test.cap 的文件。打开这个数据包，看到的是一些二进制的格式，这个是无法通过文本来查看的，我们需要通过一些其他分析工具分析（如：WireShark）。",-1),C=t("p",null,"tcpdump使用样例，这里介绍另外一种方式，就是 tcpdump 后面加了一个 -vv，vv 表示展示结果的详细程度，一个 v 的级别更为简单，两个 v 就更为详细，这种方式 tcpdump 可以通过加入 v 的个数来设置抓取结果详细程度。",-1),m=t("p",null,"区别于上面这个命令，我这里加了一个 host，表示只抓取发送的原地址和发送的地址，都是 IP 为 192.168.1.104 的数据包。",-1),T=t("p",null,"这两种演示方式都是在数据包中加入 -w，也就是采集到一个文件里，如果我们不加 -w，在终端里就可以直接看到它整个抓包的。当然这些数据不是非常的方便进行分析，所以我们可以通过采集到 cap 文件的方式（-w 选项），然后通过一些专业的分析工具得到更加详细的或者更加方便的查看。",-1),E=t("p",null,"接下来我们就可以把刚刚采集下来的文件，通过一些专业的工具进行分析。这里推荐你使用 WireShark，我们可以在客户端先安装好 WireShark 工具，然后在里面打开采集好的问天，我们会看到在这样的一个界面，它包含整个客户端和服务端发送数据包连接情况。",-1),P=t("p",null,"另外， WireShark 也是一个很好的客户端抓包工具，因为它是一个图形化的展示，所以在客户端我们可以用 WireShark 直接抓取数据包。",-1),A=t("p",null,"比如我们想要去了解 HTTP 的长连接和 TCP 连接的关系，在这种场景下可能就需要通过抓包，去整体分析 TCP 的建连以及 HTTP 的长连接的数据包发包过程，来判断长连接在这种业务场景下是否能够完整的执行每一次请求，这就是一个典型需要用到抓包工具分析的场景。",-1),y=t("p",null,"对于 tcpdump\\WireShark 的具体使用，课时中就不做过多的讲解了，如果感兴趣的话，你可以在网上搜索更多的资料。",-1),M=t("p",null,"课时最后再给你提及一个专业性更强的抓包分析工具 charles，charles 是 Mac下非常好用的一款分析 HTTP 和 HTTPS 协议数据包的工具，相对于 WireShark 而言，它更加偏重于对 HTTP 和 HTTPS 的数据包协议包的分析。所以如果你是一个网站类的技术工程师，希望帮助分析 HTTP 和 HTTPS 协议数据包的请求、响应情况，那么这里十分推荐你 charles。",-1);function D(F,I,q,v,b,S){const a=n("Image");return l(),r("div",null,[c,i(a,{alt:"1.png",src:"https://s0.lgstatic.com/i/image3/M01/05/AD/CgoCgV6esyWAGx1tAAGuPOyHnUo585.png"}),s(),o,i(a,{alt:"2.png",src:"https://s0.lgstatic.com/i/image3/M01/05/AD/CgoCgV6es2GADVtdAAHGVu-elhg712.png"}),s(),d,i(a,{alt:"3.png",src:"https://s0.lgstatic.com/i/image3/M01/12/DC/Ciqah16es26ACqVnAAHPywKy70k381.png"}),s(),k,i(a,{alt:"4.png",src:"https://s0.lgstatic.com/i/image3/M01/05/AD/CgoCgV6es36AaTLIAAI7PnT0K7I888.png"}),s(),g,i(a,{alt:"5.png",src:"https://s0.lgstatic.com/i/image3/M01/05/AF/CgoCgV6etK2AfgBEAAEfyWiBW5E145.png"}),s(),u,i(a,{alt:"6.png",src:"https://s0.lgstatic.com/i/image3/M01/12/DE/Ciqah16etLWAcs2dAAC3nOSs2iU257.png"}),s(),_,i(a,{alt:"7.png",src:"https://s0.lgstatic.com/i/image3/M01/12/DE/Ciqah16etMCAKir4AAGFAKrq2qs530.png"}),s(),C,m,T,i(a,{alt:"8.png",src:"https://s0.lgstatic.com/i/image3/M01/05/AF/CgoCgV6etMyAcMDhAAchCFSUgLE411.png"}),s(),E,i(a,{alt:"9.png",src:"https://s0.lgstatic.com/i/image3/M01/12/DE/Ciqah16etNSAWvR2AAj7TMGILF4299.png"}),s(),P,A,y,M])}const U=p(h,[["render",D]]);export{R as __pageData,U as default};
