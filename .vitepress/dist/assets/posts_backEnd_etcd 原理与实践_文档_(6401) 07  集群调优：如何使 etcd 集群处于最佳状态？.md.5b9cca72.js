import{_ as l,D as e,o as t,g as c,J as p,h as a,m as s,Q as o}from"./chunks/framework.f67d7268.js";const B=JSON.parse('{"title":"07集群调优：如何使etcd集群处于最佳状态？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/etcd 原理与实践_文档/(6401) 07  集群调优：如何使 etcd 集群处于最佳状态？.md","filePath":"posts/backEnd/etcd 原理与实践_文档/(6401) 07  集群调优：如何使 etcd 集群处于最佳状态？.md","lastUpdated":1696682708000}'),r={name:"posts/backEnd/etcd 原理与实践_文档/(6401) 07  集群调优：如何使 etcd 集群处于最佳状态？.md"},d=s("h1",{id:"_07集群调优-如何使etcd集群处于最佳状态",tabindex:"-1"},[a("07集群调优：如何使etcd集群处于最佳状态？ "),s("a",{class:"header-anchor",href:"#_07集群调优-如何使etcd集群处于最佳状态","aria-label":'Permalink to "07集群调优：如何使etcd集群处于最佳状态？"'},"​")],-1),i=s("p",null,"我们在日常工作中经常会遇到各种服务调优，同样，对于 etcd 集群来说，也需要对其进行调优，使其处于最佳的状态。",-1),E=s("p",null,"这一讲我将通过分析 etcd 的架构，结合其核心部分对 etcd 集群进行优化。",-1),y=s("h3",{id:"etcd-整体分析",tabindex:"-1"},[a("etcd 整体分析 "),s("a",{class:"header-anchor",href:"#etcd-整体分析","aria-label":'Permalink to "etcd 整体分析"'},"​")],-1),g=s("p",null,"在对 etcd 进行调优之前，我们先来看看 etcd 集群的架构图，如下图所示：",-1),h=o(`<p>etcd 集群架构图</p><p>上图是一个简化了的 etcd 集群。完整的 etcd 的架构中包括 API 通信层、Raft 算法层、业务逻辑层（包括鉴权、租约等）和 Storage 存储层。</p><p>我在图中只标识出了 Raft 层，<strong>Raft 层是实现 etcd 数据一致性的关键</strong>，etcd 节点之间通过 Raft 实现一致性通信。Raft 同步数据需要通过网络，因此网络延迟和网络带宽会影响 etcd 的性能。</p><p>还有 Storage 层，Storage 层依赖 BoltDB 作为底层，用以持久化键值对。Storage 层还有 WAL 日志、快照模块。当然，谈起存储势必要提到磁盘 IO 的性能，WAL 日志受到磁盘 IO 写入速度影响，fdatasync 延迟也会影响 etcd 性能。BoltDB Tx 的锁以及 BoltDB 本身的性能也将影响 etcd 的性能。上述这些因素都有可能造成 etcd 的性能损失。</p><h3 id="推荐的服务器配置" tabindex="-1">推荐的服务器配置 <a class="header-anchor" href="#推荐的服务器配置" aria-label="Permalink to &quot;推荐的服务器配置&quot;">​</a></h3><p>接下来，我们来看下部署 etcd 集群服务器的配置，这也是我们优化需要首先考虑的内容 。</p><p>etcd 在开发或测试的场景下，对硬件要求不高，而且也能运行良好。比如我们在笔记本电脑或低配置服务器上就可使用 etcd 进行开发测试。然而在实际生产环境中运行 etcd 集群时，对于性能等方面的要求就变得很高了，比如 etcd 集群对外提供服务时要求的高可用性和可靠性。因此，匹配的硬件环境是进行生产部署的良好开端。下面我就从 CPU 处理器、内存、磁盘和网络几个方面，具体介绍 etcd 官方推荐的生产环境配置。</p><p><strong>CPU 处理器</strong></p><p>大部分情况下，etcd 的部署对 CPU 处理器的要求不高。一般的集群只需要双核到四核的 CPU 就能平稳运行。如果 etcd 集群<strong>负载的客户端达到数千个，每秒的请求数可能是成千上万个</strong> ，这种情况就需要增加 CPU 的配置，通常需要<strong>八到十六个专用内核</strong>。</p><p><strong>内存大小</strong></p><p>etcd 对内存的需求同样也不是很高，etcd 服务端内存占用相对较小。当然，即使这样我们也得分配足够的内存给 etcd，通常 8GB 大小的内存就足够了。etcd 服务器会缓存键值数据，其余大部分内存用于跟踪 watch 监视器。因此，<strong>对于具有数千个 watch 监视器或者数百万键值对的大型部署，我们需要相应地将内存扩展到 16GB 以上</strong>。</p><p><strong>磁盘</strong></p><p>磁盘 IO 速度是影响 etcd 集群性能和稳定性的最关键因素。IO 速度慢的磁盘会增加 etcd 请求的延迟，并有可能影响集群的稳定性。etcd 的一致性共识算法 Raft 依赖元数据，持久存储在日志中，因此<strong>大多数 etcd 集群成员须将请求写入磁盘</strong>。</p><p>另外，etcd 还将以增量的方式将检查点写入磁盘中，以便截断该日志。如果这些写入花费的时间太长，心跳可能会超时并触发选举，进而破坏集群的稳定性。通常，可以<strong>使用基准测试工具判断磁盘的速度是否适合 etcd</strong>，为了测量实际的顺序 IOPS，建议使用磁盘基准测试工具，例如 DiskBench 或者 fio。</p><p>etcd 对磁盘写入延迟非常敏感，通常需要 7200 RPM 转速的磁盘。对于<strong>负载较重的集群，官方建议使用 SSD 固态硬盘</strong>。etcd 仅需要适度的磁盘带宽，但是当故障成员需要赶上集群时，更大的磁盘带宽可以缩短恢复时间。通常，10MB/s 的带宽可以在 15 秒内恢复 100MB 数据，对于大型集群，建议使用 100MB/s 或更高的速度在 15 秒内恢复 1GB 数据。</p><p>在条件允许的情况下，<strong>一般使用 SSD 作为 etcd 的存储</strong>。与机械硬盘相比，SSD 写入延迟较低，能够提高 etcd 的稳定性和可靠性。如果使用机械硬盘，尽量使用转速达到 15,000 RPM 的磁盘。对于机械磁盘和 SSD，使用 RAID 0 也是提高磁盘速度的有效方法。由于 etcd 的一致复制已经获得了高可用性，至少三个集群成员不需要 RAID 的镜像和磁盘阵列。</p><p><strong>网络</strong></p><p>多个成员的 etcd 集群部署得益于快速可靠的网络。为了使 etcd 既能实现一致性，又能够实现容忍分区性，<strong>需要网络保证低延迟和高带宽</strong>。低延迟使得 etcd 成员可以快速通信，高带宽可以减少恢复故障 etcd 成员的时间，具有分区中断的不可靠网络将导致 etcd 集群的可用性降低。1GbE 对于常见的 etcd 部署就足够了，对于大型 etcd 集群，10GbE 的网络可以缩短平均恢复时间。</p><p>我们还可以通过<strong>规避在多个数据中心部署 etcd 成员</strong>的方式来减少网络开销，单个数据中心内部署 etcd 成员可以避免延迟开销，提升 etcd 集群的可用性。</p><h3 id="etcd-调优" tabindex="-1">etcd 调优 <a class="header-anchor" href="#etcd-调优" aria-label="Permalink to &quot;etcd 调优&quot;">​</a></h3><p>上面我们介绍了部署 etcd 推荐的硬件配置，当硬件配置固定时，我们看看如何优化 etcd 服务。</p><p><strong>etcd 启动时的默认设置适用于网络低延迟的场景</strong>，网络延迟较高的场景下，如网络跨域数据中心，心跳间隔和选举超时的设置就需要优化。每一次超时时间应该包含一个请求从发出到响应成功的时间，当然网络慢不仅是延迟导致的，还可能受到 etcd 集群成员的低速磁盘 IO 影响。</p><p><strong>磁盘</strong></p><p>etcd 集群对磁盘的延迟非常敏感。因为 etcd 需要存储变更日志，多个进程同时操作磁盘可能引起更高的 fsync 延迟。IO 的延迟问题可能引起 etcd 丢失心跳、请求超时或者 Leader 临时丢失，可以通过提高 etcd 进程的磁盘优先级来解决磁盘延迟问题。</p><p>在 Linux 系统中，etcd 的磁盘优先级可以通过 Ionic 去配置，我们来看下 Ionice 的命令：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[root@</span><span style="color:#F97583;">etcd1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;">]# ionice </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">h</span></span>
<span class="line"><span style="color:#E1E4E8;">ionice - sets or gets process io scheduling </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">and</span><span style="color:#E1E4E8;"> priority.</span></span>
<span class="line"><span style="color:#E1E4E8;">Usage:</span></span>
<span class="line"><span style="color:#E1E4E8;">  ionice [OPTION] -p PID [PID...]</span></span>
<span class="line"><span style="color:#E1E4E8;">  ionice [OPTION] COMMAND</span></span>
<span class="line"><span style="color:#E1E4E8;">Options:</span></span>
<span class="line"><span style="color:#E1E4E8;">  -c, --class &lt;</span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;">&gt;   scheduling </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;"> or number</span></span>
<span class="line"><span style="color:#E1E4E8;">                           0: none, 1: realtime, 2: best-effort, 3: idle</span></span>
<span class="line"><span style="color:#E1E4E8;">  -n, --classdata &lt;</span><span style="color:#F97583;">num</span><span style="color:#E1E4E8;">&gt; scheduling </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data</span></span>
<span class="line"><span style="color:#E1E4E8;">                           0-7 for realtime and best-effort classes</span></span>
<span class="line"><span style="color:#E1E4E8;">  -p, --pid=PID         view or modify already running process</span></span>
<span class="line"><span style="color:#E1E4E8;">  -t, --ignore          ignore failures</span></span>
<span class="line"><span style="color:#E1E4E8;">  -V, --version         output version information and exit</span></span>
<span class="line"><span style="color:#E1E4E8;">  -h, --help            display this help and exit</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[root@</span><span style="color:#D73A49;">etcd1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~</span><span style="color:#24292E;">]# ionice </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">h</span></span>
<span class="line"><span style="color:#24292E;">ionice - sets or gets process io scheduling </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">and</span><span style="color:#24292E;"> priority.</span></span>
<span class="line"><span style="color:#24292E;">Usage:</span></span>
<span class="line"><span style="color:#24292E;">  ionice [OPTION] -p PID [PID...]</span></span>
<span class="line"><span style="color:#24292E;">  ionice [OPTION] COMMAND</span></span>
<span class="line"><span style="color:#24292E;">Options:</span></span>
<span class="line"><span style="color:#24292E;">  -c, --class &lt;</span><span style="color:#D73A49;">class</span><span style="color:#24292E;">&gt;   scheduling </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;"> or number</span></span>
<span class="line"><span style="color:#24292E;">                           0: none, 1: realtime, 2: best-effort, 3: idle</span></span>
<span class="line"><span style="color:#24292E;">  -n, --classdata &lt;</span><span style="color:#D73A49;">num</span><span style="color:#24292E;">&gt; scheduling </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data</span></span>
<span class="line"><span style="color:#24292E;">                           0-7 for realtime and best-effort classes</span></span>
<span class="line"><span style="color:#24292E;">  -p, --pid=PID         view or modify already running process</span></span>
<span class="line"><span style="color:#24292E;">  -t, --ignore          ignore failures</span></span>
<span class="line"><span style="color:#24292E;">  -V, --version         output version information and exit</span></span>
<span class="line"><span style="color:#24292E;">  -h, --help            display this help and exit</span></span></code></pre></div><p>根据 Ionice 的提示，我们知道 Ionice 用来获取或设置程序的 IO 调度与优先级。因此，我们可以执行如下的命令：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$ sudo ionice </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">c2 </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">n0 </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p \`pgrep etcd\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$ sudo ionice </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">c2 </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">n0 </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p \`pgrep etcd\`</span></span></code></pre></div><p>上述命令指定<code>-c2</code>尽最大努力的调度策略，即操作系统将会尽最大努力设置 etcd 进程为最高优先级。</p><p><strong>网络调优</strong></p><p>如果 etcd 集群的 Leader 实例拥有大量并发客户端连接，<strong>网络延迟可能会导致 Follower 成员与 Leader 之间通信的请求处理被延迟</strong>。在 Follower 的 Send Buffer 中能看到错误的列表，类似如下的错误：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dropped MsgProp to 917ad13ee8235c3a since streamMsg</span><span style="color:#9ECBFF;">&#39;s sending buffer is full</span></span>
<span class="line"><span style="color:#9ECBFF;">dropped MsgAppResp to 917ad13ee8235c3a since streamMsg&#39;</span><span style="color:#E1E4E8;">s sending buffer is full</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dropped MsgProp to 917ad13ee8235c3a since streamMsg</span><span style="color:#032F62;">&#39;s sending buffer is full</span></span>
<span class="line"><span style="color:#032F62;">dropped MsgAppResp to 917ad13ee8235c3a since streamMsg&#39;</span><span style="color:#24292E;">s sending buffer is full</span></span></code></pre></div><p>面对这种情况，你可以<strong>通过提高 Leader 的网络优先级来提高 Follower 的请求的响应</strong> 。在 Linux 系统中，你可以使用<strong>流量控制机制</strong>来确定对等流量的优先级。流量控制器 TC（Traffic Control）用于 Linux 内核的流量控制，其实现主要是通过在输出端口处建立一个队列来实现流量控制。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">tc qdisc add dev ens192 root handle </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> prio bands </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">tc filter add dev ens192 parent </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> protocol ip prio </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> u32 match ip sport </span><span style="color:#79B8FF;">2380</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0xffff</span><span style="color:#E1E4E8;"> flowid </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">tc filter add dev ens192 parent </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> protocol ip prio </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> u32 match ip dport </span><span style="color:#79B8FF;">2380</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0xffff</span><span style="color:#E1E4E8;"> flowid </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">tc filter add dev ens192 parent </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> protocol ip prio </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> u32 match ip sport </span><span style="color:#79B8FF;">2379</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0xffff</span><span style="color:#E1E4E8;"> flowid </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">tc filter add dev ens192 parent </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> protocol ip prio </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> u32 match ip dport </span><span style="color:#79B8FF;">2379</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0xffff</span><span style="color:#E1E4E8;"> flowid </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">tc qdisc add dev ens192 root handle </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> prio bands </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;">tc filter add dev ens192 parent </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> protocol ip prio </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> u32 match ip sport </span><span style="color:#005CC5;">2380</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0xffff</span><span style="color:#24292E;"> flowid </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">tc filter add dev ens192 parent </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> protocol ip prio </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> u32 match ip dport </span><span style="color:#005CC5;">2380</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0xffff</span><span style="color:#24292E;"> flowid </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">tc filter add dev ens192 parent </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> protocol ip prio </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> u32 match ip sport </span><span style="color:#005CC5;">2379</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0xffff</span><span style="color:#24292E;"> flowid </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">tc filter add dev ens192 parent </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> protocol ip prio </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> u32 match ip dport </span><span style="color:#005CC5;">2379</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0xffff</span><span style="color:#24292E;"> flowid </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">1</span></span></code></pre></div><p>如上的五条命令中，<code>protocol ip</code>表示该过滤器应该检查报文分组的协议字段。<code>prio 1</code>表示它们对报文处理的优先级，对于不同优先级的过滤器，系统将按照从小到大的优先级排序。其中第一条命令，建立一个优先级队列，并将该队列绑定到网络物理设备 ens192 上，其编号为 1:0。我们可以查看本地网卡的名称，以我的 Centos 7 为例，可以观察到本地的网卡名称为 ens192。</p>`,35),F=o(`<p>接着有四条过滤器的命令，过滤器主要服务于分类。通过上述代码，可以观察到：用于成员间通信的 2380 端口的命令优先级高于 2379 端口。每一个端口有两条命令，分别对应：sport 和 dport。依次执行过滤器，对于相同的优先级，系统将按照命令的先后顺序执行。这几个过滤器还用到了 u32 选择器(命令中 u32 后面的部分)来匹配不同的数据流。</p><p>第二条和第三条命令，判断的是 dport 和 sport 字段，表示出去或者进来的不同类数据包。如果该字段与<code>Oxffff</code>进行与操作的结果是 2380，则<code>flowid 1:1</code>表示将把该数据流分配给类别 1:1。通过 TC 命令你能够提高 Leader 与 etcd 集群成员之间的网络优先级，使得 etcd 集群处于一个可靠的状态。更加详细的有关 TC 的用法这里我就不再赘述了，你可以参考 <a href="https://wenku.baidu.com/view/d91bebbbfd0a79563c1e72dd.html" target="_blank" rel="noreferrer">TC 的手册页</a>。</p><p><strong>快照</strong></p><p>etcd 追加所有键值对的变更到日志中，这些日志每一行记录一个 key 的变更，日志规模在不断增长。当简单使用 etcd 时，这些日志增长不会有问题，但集群规模比较大的时候，问题就会显现，日志就会越来越多且数据量也会变得越来越大。</p><p>为了避免大量日志，etcd 会定期生成快照。这些快照通过将当前状态的修改保存到日志，并移除旧的日志，以实现日志的压缩。</p><p>创建快照对于 etcd v2 版本来说开销比较大，所以只有当更改记录操作达到一定数量后，才会制作快照。在 etcd 中，默认创建快照的配置是每 10000 次更改才会保存快照，如果 etcd 的内存和磁盘使用率过高，也可以降低这个阈值，命令如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$ etcd </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">snapshot</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">count</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">5000</span></span>
<span class="line"><span style="color:#E1E4E8;">#或者使用环境变量的方式</span></span>
<span class="line"><span style="color:#E1E4E8;">$ ETCD_SNAPSHOT_COUNT</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;"> etcd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$ etcd </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">snapshot</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">count</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">5000</span></span>
<span class="line"><span style="color:#24292E;">#或者使用环境变量的方式</span></span>
<span class="line"><span style="color:#24292E;">$ ETCD_SNAPSHOT_COUNT</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">5000</span><span style="color:#24292E;"> etcd</span></span></code></pre></div><p>使用如上两种方式，都可以实现 etcd 实例修改达到 5000 次就会保存快照。</p><p><strong>时间参数</strong></p><p>基本的分布式一致性协议依赖于两个单独的时间参数，分别是心跳间隔和选举超时：</p><ul><li><p>心跳间隔（Heartbeat Interval），该参数通常用来保活，代表 Leader 通知所有的 Follower，它还活着，仍然是 Leader，该参数被设置为节点之间网络往返时间，etcd 默认心跳间隔是 100ms；</p></li><li><p>选举超时（Election Timeout），它表示 Follower 在多久后还没有收到 Leader 的心跳，它就自己尝试重新发起选举变成 Leader，一般为了避免脑裂发生，这个时间会稍微长一点，etcd 的默认选举超时是 1000ms，当然如果时间太长也会导致数据一致性的问题。</p></li></ul><p>一个 etcd 集群中的所有节点应该设置一样的心跳间隔和选举超时。如果设置不一样可能导致集群不稳定。默认值可以通过命令行参数或环境参数覆盖，如下所示，单位是 ms。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"># 令行参数</span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">$ etcd </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">heartbeat</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">interval</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">election</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">timeout</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">500</span></span>
<span class="line"><span style="color:#E1E4E8;"># 环境参数</span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">$ ETCD_HEARTBEAT_INTERVAL</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;"> ETCD_ELECTION_TIMEOUT</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;"> etcd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"># 令行参数</span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">$ etcd </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">heartbeat</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">interval</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">100</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">election</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">timeout</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">500</span></span>
<span class="line"><span style="color:#24292E;"># 环境参数</span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">$ ETCD_HEARTBEAT_INTERVAL</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">100</span><span style="color:#24292E;"> ETCD_ELECTION_TIMEOUT</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">500</span><span style="color:#24292E;"> etcd</span></span></code></pre></div><p>我们在命令中设置了心跳间隔为 100ms，选举超时为 500ms。对应的环境变量设置在下方，较为方便。</p><p>当然，你在实际调整参数时需要做一些权衡，需要考虑网络、服务硬件、负载、集群的规模等因素。<strong>心跳间隔推荐设置为节点之间的最大 RTT，一般可设置为 RTT 的 0.5-1.5 倍</strong> 。如果心跳间隔太短，etcd 实例会频繁发送没必要的心跳，增加 CPU 和网络的使用率。另外，过长的心跳间隔也会延长选举超时时间，一旦选举超时过长，还会导致需要更长的时间才能发现 Leader 故障。测量 RTT 最简单方法就是用<strong>PING 工具</strong>。</p><p>对于选举超时的时间，应该<strong>基于心跳间隔和节点的平均 RTT 去设置</strong>。选举超时应该至少是 RTT 的 10 倍，这样才能视为在该网络中容错。例如，节点间的 RTT 是 10ms，那么超时时间至少应该是 100ms。</p><p>选举超时时间最大限制是 50000ms（即 50s），只有 etcd 被部署在全球范围内时，才应该使用这个值。如果出现不均匀的网络性能或者常规的网络延迟和丢失，会引起多次 etcd 网络重试，所以 5s 是一个安全的 RTT 最高值。只有心跳间隔为 5s 时，超时时间才应该设置为 50s。</p><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><p>这一讲我们主要介绍了 etcd 集群优化的几个方法，首先介绍了 etcd 的核心模块，其次 etcd 物理机的硬件参数也会影响 etcd 的性能，因此介绍了官方推荐的硬件配置，然后介绍了磁盘、网络、快照以及时间参数的调优。</p><p>本讲内容总结如下：</p>`,20),C=s("p",null,[a("除了服务端的优化，我们在日常使用过程中还要注意客户端的使用，正确的用法对于一个组件来说很重要。从实践角度来说，etcd 多用于"),s("strong",null,"读多写少"),a("的场景，读写的开销不一样，我们应该尽量避免频繁更新键值对数据。除此之外，我们还应该尽可能地复用 lease，避免重复创建 lease。对于相同 TTL 失效时间的键值对，绑定到相同的 lease 租约上也可以避免大量重复创建 lease。")],-1),f=s("p",null,"对于 etcd 集群调优，你还有哪些踩坑的经验，欢迎你在留言区和我分享。接下来，我们将开始第二模块------实现原理及关键技术的学习，下一讲就让我们从 etcd 的整体架构开始学习，从整体上了解 etcd 到底是一个什么样的架构。",-1);function u(_,v,m,A,D,T){const n=e("Image");return t(),c("div",null,[d,i,E,y,g,p(n,{alt:"2021214-133659.png",src:"https://s0.lgstatic.com/i/image6/M00/04/50/Cgp9HWAotx6AJs3YAADYPPDPLCY732.png"}),a(),h,p(n,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M00/02/FF/CioPOWAeXZOAZo74AAFZDxwMHG8511.png"}),a(),F,p(n,{alt:"2021214-13377.png",src:"https://s0.lgstatic.com/i/image6/M00/04/50/Cgp9HWAotzmACWkdAALDTMnuiwE899.png"}),a(),C,f])}const P=l(r,[["render",u]]);export{B as __pageData,P as default};
