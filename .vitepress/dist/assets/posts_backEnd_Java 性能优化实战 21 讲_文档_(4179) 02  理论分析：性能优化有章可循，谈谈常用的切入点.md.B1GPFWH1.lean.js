import{_ as s,F as n,g as p,K as o,h as t,ar as _,l as a,o as r}from"./chunks/framework.VlluEs-f.js";const E=JSON.parse('{"title":"02理论分析：性能优化有章可循，谈谈常用的切入点","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Java 性能优化实战 21 讲_文档/(4179) 02  理论分析：性能优化有章可循，谈谈常用的切入点.md","filePath":"posts/backEnd/Java 性能优化实战 21 讲_文档/(4179) 02  理论分析：性能优化有章可循，谈谈常用的切入点.md","lastUpdated":1718371218000}'),i={name:"posts/backEnd/Java 性能优化实战 21 讲_文档/(4179) 02  理论分析：性能优化有章可循，谈谈常用的切入点.md"},l=_("",6),c=_("",8),h=_("",12),d=a("h4",{id:"_3-结果集优化",tabindex:"-1"},[t("3. 结果集优化 "),a("a",{class:"header-anchor",href:"#_3-结果集优化","aria-label":'Permalink to "3. 结果集优化"'},"​")],-1),g=a("p",null,"接下来介绍一下对结果集的优化。举个比较直观的例子，我们都知道 XML 的表现形式是非常好的，那为什么还有 JSON 呢？除了书写要简单一些，一个重要的原因就是它的体积变小了，传输效率和解析效率变高了，像 Google 的 Protobuf，体积就更小了一些。虽然可读性降低，但在一些高并发场景下（如 RPC），能够显著提高效率，这是典型的对结果集的优化。",-1),m=a("p",null,"这是由于我们目前的 Web 服务，都是 C/S 模式。数据从服务器传输到客户端，需要分发多份，这个数据量是急剧膨胀的，每减少一小部分存储，都会有比较大的传输性能和成本提升。",-1),A=a("p",null,"像 Nginx，一般都会开启 GZIP 压缩，使得传输的内容保持紧凑。客户端只需要一小部分计算能力，就可以方便解压。由于这个操作是分散的，所以性能损失是固定的。",-1),u=a("p",null,"了解了这个道理，我们就能看到对于结果集优化的一般思路，你要尽量保持返回数据的精简。一些客户端不需要的字段，那就在代码中，或者直接在 SQL 查询中，就把它去掉。",-1),P=a("p",null,"对于一些对时效性要求不高，但对处理能力有高要求的业务。我们要吸取缓冲区的经验，尽量减少网络连接的交互，采用批量处理的方式，增加处理速度。",-1),C=a("p",null,"结果集合很可能会有二次使用，你可能会把它加入缓存中，但依然在速度上有所欠缺。这个时候，就需要对数据集合进行处理优化，采用索引或者 Bitmap 位图等方式，加快数据访问速度。",-1),b=a("h4",{id:"_4-资源冲突优化",tabindex:"-1"},[t("4. 资源冲突优化 "),a("a",{class:"header-anchor",href:"#_4-资源冲突优化","aria-label":'Permalink to "4. 资源冲突优化"'},"​")],-1),T=a("p",null,"我们在平常的开发中，会涉及很多共享资源。这些共享资源，有的是单机的，比如一个 HashMap；有的是外部存储，比如一个数据库行；有的是单个资源，比如 Redis 某个 key 的Setnx；有的是多个资源的协调，比如事务、分布式事务等。",-1),J=a("p",null,"现实中的性能问题，和锁相关的问题是非常多的。大多数我们会想到数据库的行锁、表锁、Java 中的各种锁等。在更底层，比如 CPU 命令级别的锁、JVM 指令级别的锁、操作系统内部锁等，可以说无处不在。",-1),k=a("p",null,"只有并发，才能产生资源冲突。也就是在同一时刻，只能有一个处理请求能够获取到共享资源。解决资源冲突的方式，就是加锁。再比如事务，在本质上也是一种锁。",-1),f=a("p",null,"按照锁级别，锁可分为乐观锁和悲观锁，乐观锁在效率上肯定是更高一些；按照锁类型，锁又分为公平锁和非公平锁，在对任务的调度上，有一些细微的差别。",-1),S=a("p",null,"对资源的争用，会造成严重的性能问题，所以会有一些针对无锁队列之类的研究，对性能的提升也是巨大的。",-1),V=_("",15);function q(M,v,x,N,I,R){const e=n("Image");return r(),p("div",null,[l,o(e,{alt:"image (16).png",src:"https://s0.lgstatic.com/i/image/M00/34/0A/CgqCHl8RPjKAXfRcAABjINYVRzo486.png"}),t(),c,o(e,{alt:"image (17).png",src:"https://s0.lgstatic.com/i/image/M00/34/0A/CgqCHl8RPjyAAIEGAABE6kBab04139.png"}),t(),h,o(e,{alt:"Lark20200717-142148.jpeg",src:"https://s0.lgstatic.com/i/image/M00/34/05/Ciqc1F8RQ6mACAPJAACrAhiYBdY56.jpeg"}),t(),d,g,m,A,u,P,C,o(e,{alt:"image (19).png",src:"https://s0.lgstatic.com/i/image/M00/34/0A/CgqCHl8RPkyAUD8cAAAz42owPXs398.png"}),t(),b,T,J,k,f,S,o(e,{alt:"image (20).png",src:"https://s0.lgstatic.com/i/image/M00/33/FF/Ciqc1F8RPlSAMb5AAABe184UTQ0081.png"}),t(),V])}const L=s(i,[["render",q]]);export{E as __pageData,L as default};
