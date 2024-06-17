import{_ as r,F as p,g as o,K as e,h as i,ar as t,l,o as n}from"./chunks/framework.VlluEs-f.js";const Y=JSON.parse('{"title":"第09讲：如何做到MySQL高扩展性？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/040_高性能MySQL实战/(58) 第09讲：如何做到MySQL高扩展性？.md","filePath":"posts/backEnd/040_高性能MySQL实战/(58) 第09讲：如何做到MySQL高扩展性？.md","lastUpdated":1718371218000}'),s={name:"posts/backEnd/040_高性能MySQL实战/(58) 第09讲：如何做到MySQL高扩展性？.md"},h=t('<h1 id="第09讲-如何做到mysql高扩展性" tabindex="-1">第09讲：如何做到MySQL高扩展性？ <a class="header-anchor" href="#第09讲-如何做到mysql高扩展性" aria-label="Permalink to &quot;第09讲：如何做到MySQL高扩展性？&quot;">​</a></h1><p>课时的内容主要包含 MySQL 架构设计方法论、MySQL 高并发及其关注要点、MySQL 扩展的原因及其基本方法、万亿级数据量的应对技巧等内容。</p><h6 id="高并发及其关注要点" tabindex="-1">高并发及其关注要点 <a class="header-anchor" href="#高并发及其关注要点" aria-label="Permalink to &quot;高并发及其关注要点&quot;">​</a></h6><p>近年来，随着互联网、移动互联网的飞速发展，业务系统的互动性日益增强，用户规模不断攀升，电商、游戏、直播、在线教育、短视频等一系列新兴移动端应用如雨后春笋般涌现出来，这些应用 &quot;高并发、低延迟&quot; 的需求对传统数据库的性能提出了新的要求和挑战，并且数据规模也井喷式增长。高并发是互联网分布式系统架构设计中必须考虑的因素之一，通常是指通过合理的设计保证系统能够同时并行处理更多的请求，并且要满足业务的稳定可靠运行。它需要关注一些重要指标，如响应时间、吞吐量、TPS、QPS、并发用户数等。为了方便大家对后面知识的理解，简单解释一下这些概念：</p><ul><li><p>响应时间：系统对请求做出响应的时间，一般取平均响应时间。</p></li><li><p>吞吐量：单位时间内处理的请求数量。</p></li><li><p>QPS：每秒处理的查询次数。</p></li><li><p>TPS：每秒处理的事务数。</p></li><li><p>并发用户数：同时承载正常使用系统功能的用户数量。</p></li></ul><br><p>了解了基本概念，下面我们一起学习下高并发和海量数据场景下的高扩展性的相关知识。</p><h6 id="扩展及其基本方法" tabindex="-1">扩展及其基本方法 <a class="header-anchor" href="#扩展及其基本方法" aria-label="Permalink to &quot;扩展及其基本方法&quot;">​</a></h6><p>首先，我们会问为什么需要扩展呢？一方面是由于互联网和移动互联网领域的商业模式和产品日新月异，业务发展迅猛。另一方面是由于硬件性能的限制。作为有&quot;读多写少&quot;显著特点的互联网产品来说，随着用户规模、数据量、并发请求的急剧增大，对数据库读写性能的要求往往成为很大的挑战，具体体现在容量不足、性能瓶颈、架构不合理等方面。在这种情况下我们需要考虑用更先进的数据库架构设计来对数据库进行优化。当然这就需要掌握必要的基本方法，灵活的运用来提高数据库读写性能，从而满足业务需求。</p>',9),_=t('<p>在数据库的架构设计中主要有三种方法论，分别是：Shared Everything、Shared Nothing和 Shared Disk。</p><ul><li><p>Shared Everything：一般是针对单个系统，完全透明共享 CPU/MEMORY/IO，并行处理能力是最差的，典型的代表 SQL Server。</p></li><li><p>Shared Nothing：系统中的各个处理单元都有私有的 CPU/MEMORY/IO 等，不存在共享资源，类似于 MPP（大规模并行处理）模式，各处理单元之间相互独立，各自处理自己的数据，它们之间通过协议通信，处理后的结果或向上层汇总或在节点间流转。这种方式的并行处理和扩展能力更好。典型的代表 DB2 DPF、Hadoop、GreenPlum 等。</p></li><li><p>Shared Disk：系统中的各个处理单元使用私有 CPU 和 MEMORY，共享磁盘系统。典型的代表 Oracle Rac、AWS Aurora 和极数云舟自主研发的 ArkDB 等，它们都是数据共享，可通过增加节点来提高并行处理的能力，做到了计算与存储分离，扩展能力较好。</p></li></ul><br><p>了解了各种方法论后，我们还需要掌握一些常用的基本方法，在海量数据架构设计中，主要有三种基本方法：垂直扩展、水平扩展（数据分片）、分布式。那么，我们猜想一下，sharding 属于上述哪种方法论呢？其实，它是 Shared Nothing 的架构，它把数据按照某种规则从物理存储上水平分割，并分配给多台服务器或实例，每台服务器可以独立工作，具备相同的 schema，比如 MySQL Proxy，只需增加服务器数就可以增加处理能力和容量。下面逐一讲解上述的这些方法。</p><h6 id="一、垂直扩展-scale-up" tabindex="-1">一、垂直扩展 Scale-Up <a class="header-anchor" href="#一、垂直扩展-scale-up" aria-label="Permalink to &quot;一、垂直扩展 Scale-Up&quot;">​</a></h6><p>纵向扩展：也叫垂直扩展，扩展一个点的能力以支撑更多的请求。这种方法可以形象的记忆为&quot;螳臂当车&quot;，通常有两种方式：增强单机硬件性能和提升单机架构性能。</p>',6),d=l("h3",{id:"_1、增强单机硬件性能",tabindex:"-1"},[i("1、增强单机硬件性能 "),l("a",{class:"header-anchor",href:"#_1、增强单机硬件性能","aria-label":'Permalink to "1、增强单机硬件性能"'},"​")],-1),c=l("p",null,"增强单机硬件性能，无外乎增加 CPU 核数提升并发处理能力、选购主频较高的 CPU 来提高运算能力；增加内存大小，缓存更多的数据，减少物理 IO；提升网卡为万兆网卡，当然交换机也需匹配万兆交换机，如 InfiniBand；扩展性能更好的存储介质，如 PCIe 或 NVME SSD 等，提升 IOPS。",-1),S=l("h3",{id:"_2、提升单机架构性能",tabindex:"-1"},[i("2、提升单机架构性能 "),l("a",{class:"header-anchor",href:"#_2、提升单机架构性能","aria-label":'Permalink to "2、提升单机架构性能"'},"​")],-1),u=l("p",null,"提升单机架构性能，主要是通过外部的架构优化来提升单机的处理性能或者是扩展单机的处理能力。",-1),g=l("ul",null,[l("li",null,[l("p",null,"针对读多写少的场景，我们可以在数据库和应用的中间增加一层缓存 Cache，数据持久化在 DB 中，用 Memcached、Redis 等缓存热数据。")]),l("li",null,[l("p",null,"针对读少写多的场景，我们可以在数据库和应用的中间增加一层消息队列，应用先写队列，然后用异步的方式更新到数据库中，消息队列可以是 Kafka、RabbitMQ、RocketMQ 等。")])],-1),A=l("h3",{id:"_3、无锁数据结构",tabindex:"-1"},[i("3、无锁数据结构 "),l("a",{class:"header-anchor",href:"#_3、无锁数据结构","aria-label":'Permalink to "3、无锁数据结构"'},"​")],-1),M=l("p",null,'无锁数据结构，首先需要了解什么是"非阻塞算法"？这个在维基百科中有个漂亮的解释，那就是：非阻塞算法保证为共享资源竞争的线程，不会通过互斥让它们的执行无限期暂停。',-1),P=l("p",null,"如果有不负责调度的系统级进程，非阻塞算法是无锁的。而无锁数据结构也就是通过非阻塞算法保护共享数据的结构。它的实现主要基于两个方面：原子性操作和内存访问控制方法。",-1),b=l("p",null,"而原子性操作又可以简单地分为读写（Read And Write）、原子性交换操作（Read-Modify-Write，RMW）两部分。原子操作可认为是一个不可分的操作；要么发生，要么不发生，我们看不到任何执行的中间过程，不存在部分结果（Partial Effects），就像 MySQL 中的事务。在构建无锁数据结构时需要用到 RMW 操作，其包括：Compare-And-Swap (CAS)、Fetch-And-Add (FAA)、Test-And-Set (TAS) 等。",-1),m=l("p",null,"关于无锁数据结构这个不打算过多的讲解，这个要求 DBA 对业务要足够的了解，在架构设计的过程中要做到业务解偶。",-1),T=l("h3",{id:"_4、分区",tabindex:"-1"},[i("4、分区 "),l("a",{class:"header-anchor",href:"#_4、分区","aria-label":'Permalink to "4、分区"'},"​")],-1),D=l("p",null,"分区（Partitioning），分区是指按照一定的规则，把数据库中的一个表分解成多个更小的、更容易管理的部分，分区有利于管理非常大的表。MySQL 5.5 分区主要有 RANGE 分区、LIST 分区、HASH 分区和 KEY 分区 4 种，在 MySQL 5.6 后，引入了 COLUMNS 分区类型，COLUMNS 分区解决了 RANGE 分区和 LIST 分区只支持整数型分区键的问题，COLUMNS 分区可细分为 RANGE COLUMNS 分区和 LIST COLUMNS 分区，都支持整数、日期时间、字符串三大数据类型，但不支持 text、blob 类型。COLUMNS 分区的另一大亮点是支持多列分区。",-1),C=t('<p>子分区（Subpartitioning）是对分区表中每个分区再次分割，又称为复合分区。子分区可以使用 HASH 分区和 KEY 分区。</p><p>使用分区有 4 个优点：</p><ol><li><p>分区可以把数据打散存储到不同的文件系统上，和单个磁盘或者文件系统相比，可以存储更多的数据。</p></li><li><p>优化查询。where 子句包含分区条件时，可以只扫描对应分区，缩小了查询范围。同时在涉及 count() 和 sum() 等聚合函数时，可以在多个分区上并行处理。</p></li><li><p>对于已经过期或不需要的数据，可以通过删除分区快速删除。</p></li><li><p>跨多个磁盘来分散数据查询，以获得更大的查询吞吐量。</p></li></ol><br><p>使用分区也有一些限制：</p><ol><li><p>一个表最多只能有 1024 个分区，MySQL 5.6 之后支持 8192 个分区。</p></li><li><p>如果分区字段中有主键或者唯一索引列，那么所有主键列和唯一索引列都必须包含进来，如果表中有主键或唯一索引，那么分区键必须是主键或唯一索引。</p></li><li><p>MySQL 分区适用于一个表的所有数据和索引，不能只对表数据分区而不对索引分区，也不能只对一个表的部分数据进行分区。</p></li><li><p>无论使用何种分区类型，不能使用主键/唯一键之外的其他字段进行分区。</p></li><li><p>分区表中无法使用外键约束。</p></li><li><p>MySQL 数据库支持的分区类型为水平分区，并不支持垂直分区，因此，MySQL 数据库的分区中索引是局部分区索引，一个分区中既存放了数据又存放了索引，而全局分区是指数据库放在各个分区中，但是所有的数据的索引放在另外一个对象中。</p></li><li><p>目前 MySQL 不支持对空间类型和临时表类型进行分区。不支持全文索引。</p></li></ol><h6 id="二、水平扩展-scale-out" tabindex="-1">二、水平扩展 Scale-Out <a class="header-anchor" href="#二、水平扩展-scale-out" aria-label="Permalink to &quot;二、水平扩展 Scale-Out&quot;">​</a></h6><p>横向扩展：也叫水平扩展，用更多的节点支撑更大量的请求，达到线性扩充系统的能力，其对系统架构设计有着更高的要求。这种方法可以形象的记忆为&quot;蚂蚁搬家&quot;，通常有 4 种方式：</p>',8),L=l("ul",null,[l("li",null,[l("p",null,"主从复制。通过主从复制来扩展从库，从而提升读性能。")]),l("li",null,[l("p",null,'分库分表。这个又可以称之为"数据分片（Sharding）"。例如：拆分实例、分库、分表，达到线性扩展的目的。')]),l("li",null,[l("p",null,"数据库中间件。例如：使用中间件来达到读写分离的目的。")]),l("li",null,[l("p",null,"集群。例如：使用 PXC 或者 MGR 集群来弥补单机性能的不足。")])],-1),y=l("h3",{id:"_1、主从复制",tabindex:"-1"},[i("1、主从复制 "),l("a",{class:"header-anchor",href:"#_1、主从复制","aria-label":'Permalink to "1、主从复制"'},"​")],-1),k=l("p",null,"复制是 MySQL 数据库最常用的技术，简单易配置，对应用改动最小，并且通过复制扩展出很多从库可以减轻主库的负担，主库可以读写，从库只读。最常用的场景就是实现读写分离，或业务分离，即运行报表、备份、数据仓库等应用场景。",-1),B=l("p",null,"在互联网应用中，数据库是最常用的数据存储载体。随着业务的发展，负载的增大，对数据库读写性能的要求往往成为很大的挑战。在这种情况下我们可以考虑数据库相关的 replication 机制提高读写性能。但是 replication 一般采用一写多读机制（写 master 同步到多个 slaves），往往会有缺陷。首先它依赖于读写的比例，如果写的操作过多，导致 master 往往成为性能的瓶颈，从而使得 slaves 的数据同步延迟也变大，进而大大消耗 CPU 的资源，并导致数据的不一致从而影响用户的体验。这个时候我们就要考虑使用数据库的 Sharding（分片）机制。当然，主从复制还有其他的应用场景，当业务对主从延迟不那么敏感时，利用一些实时复制工具（如 GoldenGate、Arkgate），可以实现异地多活或者异地容灾，从而达到横向扩展的目的。这也算是主从复制的一个新趋势。",-1),Q=l("h3",{id:"_2、数据分片sharding",tabindex:"-1"},[i("2、数据分片Sharding "),l("a",{class:"header-anchor",href:"#_2、数据分片sharding","aria-label":'Permalink to "2、数据分片Sharding"'},"​")],-1),V=l("p",null,"上面我们所说的 Sharding 机制并不是一个数据库软件的附属功能，而是一种相对朴实的软件理论。一般我们把 Sharding 机制分成水平分片和垂直分片两种方式。具体什么是数据库的水平分片和垂直分片呢？",-1),R=l("ul",null,[l("li",null,[l("p",null,"垂直拆分的方案：将库/表和库/表分离，或者修改表结构，按照访问的差异将某些列拆分出去。比如可以按照产品的不同、业务线的不同或者功能的不同进行拆分。")]),l("li",null,[l("p",null,"水平拆分的方案：即不修改数据库表结构，通过对数据按照某种纬度（如：按照范围、对 UUID/ID 按某种算法、按时间）进行拆分，或者按照 Hash 的方式拆分而达到分片的目的。")])],-1),q=l("br",null,null,-1),f=l("p",null,"下面举例说明。在业务发展的初期阶段，会员、订单、物流、商品、库存、采购等功能的数据都放在同一个数据库中，随着业务的发展，数据库已经无法承载所有功能的请求，故按照功能对各个库进行拆分，分成了 6 个不同的库。",-1),E=l("p",null,"如微博博文内容，在微博早期的时候，将博文内容按照用户的 UID 除 8 均匀的将数据存储在一组 8 个实例的数据库中。随着业务的快速发展和时间的推移，数据有了翻天覆地的变化，规模在百 T 级别，这时主要是在业务层上将数据做路由，按照时间范围的不同，将数据路由存储到不同的数据库分组中。",-1),v=l("p",null,"Sharding 其实应用的非常广泛，如应用在 Google、Bay、Facebook、微博、滴滴等公司的业务中，在这些公司所经营的领域中，常常涉及用户的信息存储，就经常会选择 Sharding 的方式。",-1),I=t('<p>听上去 Sharding 非常完美，那么它有什么不足吗？主要有以下几点：</p><ul><li><p>加大了应用代码的复杂性，需要路由到正确的 shard。</p></li><li><p>后期增加 shard 需要修改应用逻辑，并需要迁移数据，工作量比较大。</p></li><li><p>查询和聚集（aggregation）不再简单，需要跨库联合操作。</p></li><li><p>主数据和参照数据需要复制到所有 shard，以避免跨库操作。主数据和参照数据虽然偏静态，但一旦修改，可能会存在数据不一致性问题。</p></li><li><p>跨库修改需要分布式交易处理，会限制可扩展性。因此应尽量避免。</p></li><li><p>单个 shard 的失效可能会使整个系统不可用（其实也不一定）。因此通常需要为每个 shard再配置 HA 方案，如主从复制。</p></li></ul><br><p>这里再提个问题，分区和分片是一回事么？答案显然不是，用一句话说明二者的区别：分区（Partitioning）是库内的，分片（Sharding）是库外的。</p><h3 id="_3、数据库中间件" tabindex="-1">3、数据库中间件 <a class="header-anchor" href="#_3、数据库中间件" aria-label="Permalink to &quot;3、数据库中间件&quot;">​</a></h3><p>数据库中间件业界有很多的产品，它的作用是使上层业务对下层数据库的架构更加透明，解决数据库耦合问题，同时起着承前启后的作用，前端业务发起对数据库的请求通过中间件的处理，转发到后端数据库。</p>',6),O=t('<ul><li><p>按源码开放性：分为开源的和商业的。比如：MyCAT、Cobar、MySQL Fabric、ProxySQL、Atlas 等开源产品，也有极数云舟自主研发的新一代中间件 Arkproxy。</p></li><li><p>按工作方式：可以分为代理模式和非代理模式。其中非代理方式是 library 为主，library 负责 SQL 解析，路由计算等，位于 driver 层，实现难度较大，一般仅支持少数几种语言，比如：MySQL Fabric/TDDL，它们直接提供语言层面的支持，优点是性能会很好，劣势是支持的语言很受限制，TDDL 支持支 Java，MySQL Fabric 支持 Java/PHP/Python，想实现其他语言支持，相当于再次实现一次；代理方式相当于一个透明代理，应用程序连接的是代理服务器，由代理服务器负责路由计算并发送 SQL 到目的 DB，再将 DB 返回的结果发送给客户端，多一层网络，因此在性能上代理方式比非代理方式性能稍低，它就是用性能来换取灵活性。</p></li><li><p>按功能：分支持分库分表和不支持分库分表，支持读写分离和不支持读写分离等。</p></li></ul><h3 id="_4、集群" tabindex="-1">4、集群 <a class="header-anchor" href="#_4、集群" aria-label="Permalink to &quot;4、集群&quot;">​</a></h3><p>集群（clustering）也称为 shared everything 或 shared disk 架构。MySQL 领域开源的主流集群解决方案有：MNC（MySQL NDB Cluster）、MGR（MySQL Group Replication）、PXC（Percona XtraDB Cluster）、MGC（MySQL Galera Cluster）。</p><h6 id="三、分布式-distributed" tabindex="-1">三、分布式 Distributed <a class="header-anchor" href="#三、分布式-distributed" aria-label="Permalink to &quot;三、分布式 Distributed&quot;">​</a></h6><p>分布式关系型数据库发展到今天，主要分为两个阵营：</p><ol><li><p>基于分布式事务的数据库，以 Google Cloud Spanner 和 PingCAP 的 TiDB 为代表。</p></li><li><p>基于分布式存储的数据库，以 AWS 的 Aurora 和极数云舟的 ArkDB 为代表。</p></li></ol><br><p>下面分别以 TiDB 和 ArkDB 为例来介绍这两个不同方向的数据库的基本功能和实现。</p><h3 id="_1、tidb" tabindex="-1">1、TiDB <a class="header-anchor" href="#_1、tidb" aria-label="Permalink to &quot;1、TiDB&quot;">​</a></h3><p>TiDB 集群主要分为三个组件：</p>',10),x=t('<ul><li>TiDB Server</li></ul><p>TiDB Server 负责接收 SQL 请求，处理 SQL 相关的逻辑，并通过 PD 找到存储计算所需数据的 TiKV 地址，与 TiKV 交互获取数据，最终返回结果。 TiDB Server 是无状态的，其本身并不存储数据，只负责计算，可以无限水平扩展，可以通过负载均衡组件（如 LVS、HAProxy 或 F5）对外提供统一的接入地址。</p><ul><li>PD Server</li></ul><p>Placement Driver （简称 PD）是整个集群的管理模块，其主要工作有三个： 一是存储集群的元信息（某个 Key 存储在哪个 TiKV 节点）；二是对 TiKV 集群进行调度和负载均衡（如数据的迁移、Raft group leader 的迁移等）；三是分配全局唯一且递增的事务 ID。</p><p>PD 是一个集群，需要部署奇数个节点，一般线上推荐至少部署 3 个节点。</p><ul><li>TiKV Server</li></ul><p>TiKV Server 负责存储数据，从外部看 TiKV 是一个分布式的提供事务的 Key-Value 存储引擎。存储数据的基本单位是 Region，每个 Region 负责存储一个 Key Range （从 StartKey 到EndKey 的左闭右开区间）的数据，每个 TiKV 节点会负责多个 Region 。TiKV 使用 Raft 协议做复制，保持数据的一致性和容灾。副本以 Region 为单位进行管理，不同节点上的多个 Region 构成一个 RaftGroup，互为副本。数据在多个 TiKV 之间的负载均衡由 PD 调度，这里也是以 Region 为单位进行调度。</p><h3 id="_2、arkdb" tabindex="-1">2、ArkDB <a class="header-anchor" href="#_2、arkdb" aria-label="Permalink to &quot;2、ArkDB&quot;">​</a></h3><p>ArkDB 源自 AWS 的 Aurora 思想，这样的架构是云数据库实践经验的结晶，也是数据库最实用最可靠的适应现代云技术而生的云数据库，适用于公有云和私有云不能的场合。ArkDB 主要包括两大核心组件 ArkDB Server 和 ArkDB Engine。</p><ul><li>ArkDB Server</li></ul><p>ArkDB Server 为数据库接入层，负责响应客户端链接和权限验证，接收并处理 SQL 请求，包含连接管理、权限验证、分析器、优化器和执行器等，所以也叫计算节点。ArkDB Server 为无状态节点，其自身不存储数据，可以快速无限水平扩展，各个计算节点之间通过物理日志同步，同时通过操作 ArkDB Server 节点，实现整个数据库机器的高可用切换。在 ArkDB Server 层处理 SQL 请求的时候，需要分配合适的内存和 CPU 资源，对存储则无要求，可以做针对性的硬件优化。</p><ul><li>ArkDB Engine</li></ul><p>ArkDB Engine 负责数据存储和读取，底层采用分布式存储。每个数据存储单位默认存储 3 副本，副本间的数据保持强一致性和容灾。ArkDB Engine 负责存储数据并实现数据共享。上层ArkDB Server 节点访问 ArkDB Engine 同一份数据。ArkDB Engine 支持根据业务访问策略对数据存储分级，用户可以根据预算、性能指标、容量请求、访问场景按需使用不同的存储硬件，同时针对闪存卡进行软硬件结合优化。</p><p>未来，数据库的发展方向是分布式数据库，可能会出现场景化数据库，解决某种业务场景痛点的数据库。上述 TiDB 和 ArkDB 就是解决了 MySQL 不能线性扩展的缺陷，做到了计算和存储分离、弹性伸缩、分钟级备份与恢复等功能。</p><h6 id="万亿级数据量应对技巧" tabindex="-1">万亿级数据量应对技巧 <a class="header-anchor" href="#万亿级数据量应对技巧" aria-label="Permalink to &quot;万亿级数据量应对技巧&quot;">​</a></h6><p>万亿级数据量应对技巧，这个话题其实比较大，这里简单做一些讲解，可能覆盖并不全面，仅供参考。</p><ul><li><p>从业务视角：需要去了解业务、深入业务的流程，包括数据的流转，找出瓶颈和痛点，应用今天学习的知识，各个击破。</p></li><li><p>从资源视角：需要去进行资源梳理，掌握资源，针对存在的不足，加大并持续投入。</p></li><li><p>从运营视角：化繁为简，大行其道，利用优势资源和条件去优化，去实践。</p></li></ul><br><p>比如去了解一个业务，我们可以从以下几个方面去尝试：</p><ul><li><p>了解业务的特点</p></li><li><p>了解业务架构和访问模型</p></li><li><p>了解业务数据流向</p></li><li><p>了解业务技术栈</p></li><li><p>了解业务数据规模、QPS、TPS、并发情况</p></li><li><p>了解业务的关联依赖</p></li><li><p>了解业务对资源的使用方式等</p></li></ul><br><p>再比如对资源进行梳理（当然这里的资源主要是指 MySQL）：</p><ul><li><p>了解资源的内部工作原理</p></li><li><p>了解资源的优缺点和性能</p></li><li><p>了解资源的应用场景</p></li><li><p>了解不同资源的不同特性</p></li><li><p>掌握快速定位问题，快速恢复的技能，需要持续总结和积累</p></li><li><p>给开发提供技术支持和内部培训</p></li><li><p>参与项目技术选型和提供架构设计建议，有条件从项目立项时就参与进去</p></li><li><p>新技术调研</p></li></ul><br><p>对于数据运营建议要做到&quot;八化&quot;，即：平台化、自动化、工具化、服务化、流程化、可视化、容器化、智能化。此外还需要掌握一定的方法和工具。比如：扩容、降级、切流量、限流、过载保护、链路压测、故障演练和故障复盘等，做到事前有预案，事后有总结。</p><p>希望你能够掌握这些知识，并能够根据实际情况举一反三。</p><h6 id="重点总结回顾" tabindex="-1">重点总结回顾 <a class="header-anchor" href="#重点总结回顾" aria-label="Permalink to &quot;重点总结回顾&quot;">​</a></h6><p>下面我们来回顾一下本课时学习到的知识，首先我们介绍了 MySQL 高并发及其重点关注指标，然后引入架构设计的方法论和进行可扩展架构设计的原因，再详细介绍了可扩展架构设计的基本方法，在垂直扩展部分重点介绍了分区及其注意事项；在水平扩展部分重点介绍了分片的基本策略以及数据库中间件相关的知识，随后讲解了数据库集群；然后介绍了当前分布式数据库领域的两大阵营并举例说明。最后讲解了万亿级数据量应对技巧等相关知识。</p><p>通过本次课程的学习，你至少需要了解可扩展数据库架构设计的基本方法。在今后的工作中要逐步提高，能独立完成万亿级数据量的数据库架构设计，需要多思考多总结，同时还需要不断进行理论与实践相结合的历练。</p><br><br>',31);function N(U,G,K,F,H,J){const a=p("Image");return n(),o("div",null,[h,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/67/CgoB5l2hgdyAWFj9AAFtekF-MVc452.png"}),i(),_,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/87/CgotOV2hgdyARJFJAAJWoRSupdg854.png"}),i(),d,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/67/CgoB5l2hgdyAVI24AAFn3V5y3X0958.png"}),i(),c,S,u,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/87/CgotOV2hgdyAMOOOAAEU1C3ia8A098.png"}),i(),g,A,M,P,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/67/CgoB5l2hgd2AMQvCAAFDBRvbmGw842.png"}),i(),b,m,T,D,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/87/CgotOV2hgd2ARCdrAABrnaV2BLA691.png"}),i(),C,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/67/CgoB5l2hgd2ASHsEAAMP3VoGWU0687.png"}),i(),L,y,k,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/87/CgotOV2hgd2ADPQ1AAGnEihYF-4607.png"}),i(),B,Q,V,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/67/CgoB5l2hgd2AYjfJAADtSCmlTc8351.png"}),i(),R,q,f,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/87/CgotOV2hgd2ANjEHAAGXLpjg79g377.png"}),i(),E,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/67/CgoB5l2hgd2ALgAMAAI5jUM1LTs831.png"}),i(),v,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/87/CgotOV2hgd2AYu20AAEpZD9_GQQ802.png"}),i(),I,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/67/CgoB5l2hgd2AL-T7AAJ8pL41gOo502.png"}),i(),O,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/87/CgotOV2hgd2AAJMdAAHRE-JvZJU298.png"}),i(),x])}const j=r(s,[["render",N]]);export{Y as __pageData,j as default};
