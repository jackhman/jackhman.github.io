import{_ as r,D as p,o,g as n,J as e,h as i,Q as t,m as l}from"./chunks/framework.f67d7268.js";const Y=JSON.parse('{"title":"第09讲：如何做到MySQL高扩展性？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/040_高性能MySQL实战/(58) 第09讲：如何做到MySQL高扩展性？.md","filePath":"posts/backEnd/040_高性能MySQL实战/(58) 第09讲：如何做到MySQL高扩展性？.md","lastUpdated":1696682708000}'),s={name:"posts/backEnd/040_高性能MySQL实战/(58) 第09讲：如何做到MySQL高扩展性？.md"},h=t("",9),_=t("",6),d=l("h3",{id:"_1、增强单机硬件性能",tabindex:"-1"},[i("1、增强单机硬件性能 "),l("a",{class:"header-anchor",href:"#_1、增强单机硬件性能","aria-label":'Permalink to "1、增强单机硬件性能"'},"​")],-1),c=l("p",null,"增强单机硬件性能，无外乎增加 CPU 核数提升并发处理能力、选购主频较高的 CPU 来提高运算能力；增加内存大小，缓存更多的数据，减少物理 IO；提升网卡为万兆网卡，当然交换机也需匹配万兆交换机，如 InfiniBand；扩展性能更好的存储介质，如 PCIe 或 NVME SSD 等，提升 IOPS。",-1),S=l("h3",{id:"_2、提升单机架构性能",tabindex:"-1"},[i("2、提升单机架构性能 "),l("a",{class:"header-anchor",href:"#_2、提升单机架构性能","aria-label":'Permalink to "2、提升单机架构性能"'},"​")],-1),u=l("p",null,"提升单机架构性能，主要是通过外部的架构优化来提升单机的处理性能或者是扩展单机的处理能力。",-1),g=l("ul",null,[l("li",null,[l("p",null,"针对读多写少的场景，我们可以在数据库和应用的中间增加一层缓存 Cache，数据持久化在 DB 中，用 Memcached、Redis 等缓存热数据。")]),l("li",null,[l("p",null,"针对读少写多的场景，我们可以在数据库和应用的中间增加一层消息队列，应用先写队列，然后用异步的方式更新到数据库中，消息队列可以是 Kafka、RabbitMQ、RocketMQ 等。")])],-1),A=l("h3",{id:"_3、无锁数据结构",tabindex:"-1"},[i("3、无锁数据结构 "),l("a",{class:"header-anchor",href:"#_3、无锁数据结构","aria-label":'Permalink to "3、无锁数据结构"'},"​")],-1),M=l("p",null,'无锁数据结构，首先需要了解什么是"非阻塞算法"？这个在维基百科中有个漂亮的解释，那就是：非阻塞算法保证为共享资源竞争的线程，不会通过互斥让它们的执行无限期暂停。',-1),P=l("p",null,"如果有不负责调度的系统级进程，非阻塞算法是无锁的。而无锁数据结构也就是通过非阻塞算法保护共享数据的结构。它的实现主要基于两个方面：原子性操作和内存访问控制方法。",-1),m=l("p",null,"而原子性操作又可以简单地分为读写（Read And Write）、原子性交换操作（Read-Modify-Write，RMW）两部分。原子操作可认为是一个不可分的操作；要么发生，要么不发生，我们看不到任何执行的中间过程，不存在部分结果（Partial Effects），就像 MySQL 中的事务。在构建无锁数据结构时需要用到 RMW 操作，其包括：Compare-And-Swap (CAS)、Fetch-And-Add (FAA)、Test-And-Set (TAS) 等。",-1),b=l("p",null,"关于无锁数据结构这个不打算过多的讲解，这个要求 DBA 对业务要足够的了解，在架构设计的过程中要做到业务解偶。",-1),T=l("h3",{id:"_4、分区",tabindex:"-1"},[i("4、分区 "),l("a",{class:"header-anchor",href:"#_4、分区","aria-label":'Permalink to "4、分区"'},"​")],-1),D=l("p",null,"分区（Partitioning），分区是指按照一定的规则，把数据库中的一个表分解成多个更小的、更容易管理的部分，分区有利于管理非常大的表。MySQL 5.5 分区主要有 RANGE 分区、LIST 分区、HASH 分区和 KEY 分区 4 种，在 MySQL 5.6 后，引入了 COLUMNS 分区类型，COLUMNS 分区解决了 RANGE 分区和 LIST 分区只支持整数型分区键的问题，COLUMNS 分区可细分为 RANGE COLUMNS 分区和 LIST COLUMNS 分区，都支持整数、日期时间、字符串三大数据类型，但不支持 text、blob 类型。COLUMNS 分区的另一大亮点是支持多列分区。",-1),C=t("",8),L=l("ul",null,[l("li",null,[l("p",null,"主从复制。通过主从复制来扩展从库，从而提升读性能。")]),l("li",null,[l("p",null,'分库分表。这个又可以称之为"数据分片（Sharding）"。例如：拆分实例、分库、分表，达到线性扩展的目的。')]),l("li",null,[l("p",null,"数据库中间件。例如：使用中间件来达到读写分离的目的。")]),l("li",null,[l("p",null,"集群。例如：使用 PXC 或者 MGR 集群来弥补单机性能的不足。")])],-1),y=l("h3",{id:"_1、主从复制",tabindex:"-1"},[i("1、主从复制 "),l("a",{class:"header-anchor",href:"#_1、主从复制","aria-label":'Permalink to "1、主从复制"'},"​")],-1),k=l("p",null,"复制是 MySQL 数据库最常用的技术，简单易配置，对应用改动最小，并且通过复制扩展出很多从库可以减轻主库的负担，主库可以读写，从库只读。最常用的场景就是实现读写分离，或业务分离，即运行报表、备份、数据仓库等应用场景。",-1),B=l("p",null,"在互联网应用中，数据库是最常用的数据存储载体。随着业务的发展，负载的增大，对数据库读写性能的要求往往成为很大的挑战。在这种情况下我们可以考虑数据库相关的 replication 机制提高读写性能。但是 replication 一般采用一写多读机制（写 master 同步到多个 slaves），往往会有缺陷。首先它依赖于读写的比例，如果写的操作过多，导致 master 往往成为性能的瓶颈，从而使得 slaves 的数据同步延迟也变大，进而大大消耗 CPU 的资源，并导致数据的不一致从而影响用户的体验。这个时候我们就要考虑使用数据库的 Sharding（分片）机制。当然，主从复制还有其他的应用场景，当业务对主从延迟不那么敏感时，利用一些实时复制工具（如 GoldenGate、Arkgate），可以实现异地多活或者异地容灾，从而达到横向扩展的目的。这也算是主从复制的一个新趋势。",-1),Q=l("h3",{id:"_2、数据分片sharding",tabindex:"-1"},[i("2、数据分片Sharding "),l("a",{class:"header-anchor",href:"#_2、数据分片sharding","aria-label":'Permalink to "2、数据分片Sharding"'},"​")],-1),V=l("p",null,"上面我们所说的 Sharding 机制并不是一个数据库软件的附属功能，而是一种相对朴实的软件理论。一般我们把 Sharding 机制分成水平分片和垂直分片两种方式。具体什么是数据库的水平分片和垂直分片呢？",-1),R=l("ul",null,[l("li",null,[l("p",null,"垂直拆分的方案：将库/表和库/表分离，或者修改表结构，按照访问的差异将某些列拆分出去。比如可以按照产品的不同、业务线的不同或者功能的不同进行拆分。")]),l("li",null,[l("p",null,"水平拆分的方案：即不修改数据库表结构，通过对数据按照某种纬度（如：按照范围、对 UUID/ID 按某种算法、按时间）进行拆分，或者按照 Hash 的方式拆分而达到分片的目的。")])],-1),q=l("br",null,null,-1),f=l("p",null,"下面举例说明。在业务发展的初期阶段，会员、订单、物流、商品、库存、采购等功能的数据都放在同一个数据库中，随着业务的发展，数据库已经无法承载所有功能的请求，故按照功能对各个库进行拆分，分成了 6 个不同的库。",-1),E=l("p",null,"如微博博文内容，在微博早期的时候，将博文内容按照用户的 UID 除 8 均匀的将数据存储在一组 8 个实例的数据库中。随着业务的快速发展和时间的推移，数据有了翻天覆地的变化，规模在百 T 级别，这时主要是在业务层上将数据做路由，按照时间范围的不同，将数据路由存储到不同的数据库分组中。",-1),v=l("p",null,"Sharding 其实应用的非常广泛，如应用在 Google、Bay、Facebook、微博、滴滴等公司的业务中，在这些公司所经营的领域中，常常涉及用户的信息存储，就经常会选择 Sharding 的方式。",-1),I=t("",6),O=t("",10),x=t("",31);function N(U,G,K,F,H,J){const a=p("Image");return o(),n("div",null,[h,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/67/CgoB5l2hgdyAWFj9AAFtekF-MVc452.png"}),i(),_,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/87/CgotOV2hgdyARJFJAAJWoRSupdg854.png"}),i(),d,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/67/CgoB5l2hgdyAVI24AAFn3V5y3X0958.png"}),i(),c,S,u,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/87/CgotOV2hgdyAMOOOAAEU1C3ia8A098.png"}),i(),g,A,M,P,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/67/CgoB5l2hgd2AMQvCAAFDBRvbmGw842.png"}),i(),m,b,T,D,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/87/CgotOV2hgd2ARCdrAABrnaV2BLA691.png"}),i(),C,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/67/CgoB5l2hgd2ASHsEAAMP3VoGWU0687.png"}),i(),L,y,k,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/87/CgotOV2hgd2ADPQ1AAGnEihYF-4607.png"}),i(),B,Q,V,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/67/CgoB5l2hgd2AYjfJAADtSCmlTc8351.png"}),i(),R,q,f,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/87/CgotOV2hgd2ANjEHAAGXLpjg79g377.png"}),i(),E,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/67/CgoB5l2hgd2ALgAMAAI5jUM1LTs831.png"}),i(),v,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/87/CgotOV2hgd2AYu20AAEpZD9_GQQ802.png"}),i(),I,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/67/CgoB5l2hgd2AL-T7AAJ8pL41gOo502.png"}),i(),O,e(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/98/87/CgotOV2hgd2AAJMdAAHRE-JvZJU298.png"}),i(),x])}const j=r(s,[["render",N]]);export{Y as __pageData,j as default};
