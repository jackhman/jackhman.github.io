import{_ as a,g as e,o as r,ar as o}from"./chunks/framework.VlluEs-f.js";const _=JSON.parse('{"title":"第22讲：数据库面试题剖析","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/110-测试开发核心技术文档/(340) 第22讲：数据库面试题剖析.md","filePath":"posts/devops/110-测试开发核心技术文档/(340) 第22讲：数据库面试题剖析.md","lastUpdated":1718371218000}'),t={name:"posts/devops/110-测试开发核心技术文档/(340) 第22讲：数据库面试题剖析.md"},p=o('<h1 id="第22讲-数据库面试题剖析" tabindex="-1">第22讲：数据库面试题剖析 <a class="header-anchor" href="#第22讲-数据库面试题剖析" aria-label="Permalink to &quot;第22讲：数据库面试题剖析&quot;">​</a></h1><p>本课时我们进入数据库面试知识点结构的剖析，并带你了解目前国内主流大厂在面试中到底会考察哪些数据库相关的知识点。</p><h2 id="数据库知识点结构" tabindex="-1">数据库知识点结构 <a class="header-anchor" href="#数据库知识点结构" aria-label="Permalink to &quot;数据库知识点结构&quot;">​</a></h2><p>首先，我们来看下数据库面试的知识点结构，我们经常把数据库面试的知识点分为四个维度。</p><br><p>第一个维度是数据定义，也就是我们前面课时讲到过的 DDL，当然在 MySQL 的官方文档中称为 DDS，但本质是一样的，DDL 数据定义主要考察你对数据的常见类型的掌握程度，比如库、表的场景以及结构的掌握。</p><br><p>第二个维度是 SQL 基本查询相关的知识点，这个是在开发中应用比较多的，同时也是面试中肯定会被问到的内容，但对于测试工程师或测试开发工程师而言，很少有人能够成为 SQL 领域的高手，对于我们测试工程师而言对 SQL 知识点的掌握程度大都聚焦在初中级阶段，所以 DML 常见数据库查询是数据库面试中必考的一道题，只要问到数据库一定会涉及基本查询的考试。</p><br><p>然后就是 SQL 的进阶知识，对于这部分内容主要是在一些比较高级别的面试中会被问到，有时候会考察一些运维相关的知识，还会更深入的考察你对 DML 的使用。除此之外，在高级别的面试中还会涉及一些数据库实操经验的考察，比如如何去安装部署数据库，以及数据库自身性能指标如何获取，又会遇到哪些常见的性能问题等。</p><h2 id="数据定义" tabindex="-1">数据定义 <a class="header-anchor" href="#数据定义" aria-label="Permalink to &quot;数据定义&quot;">​</a></h2><p>接下来，我们具体看下上面提到的四个维度，首先我们来看下数据定义。数据库中常见的数据类型包括了 int、float、、double、decimal 等大概 7~8 种类型，你可以在 MySQL 的官方文档中查看它们的具体使用说明.</p><br><p>数据类型中需要注意的是字符串，MySQL 中常见的字符串类型是 varchar 类型， 比如数据库里经常存入一个网址或邮箱地址等，这些都需要使用 varchar 来进行定义，通常情况下还会限制一个长度。字符串还包括普通的 char 类型。</p><br><p>再一个就是关系定义，用于定义表结构之间的关系，比如主键、外键、索引。</p><br><p>在数据定义中有时还会要求你写入一个表结构，然后修改这个表，比如把原来的某一个 int 或 varchar 类型进行格式的转换，类似这样的考题就会使用到 alter。</p><br><p>关于 DDL 的内容在面试中不会考察太多，更常见的考题是关于 SQL 的基本查询，</p><h2 id="sql-基本查询" tabindex="-1">SQL 基本查询 <a class="header-anchor" href="#sql-基本查询" aria-label="Permalink to &quot;SQL 基本查询&quot;">​</a></h2><p>关于 SQL 的基本查询，我们前面课时也讲过，比如说条件查询、分页查询、聚合查询，然后还包括新增、更新和删除一些符合条件的数据。这几个经典的考题经常会被问到，因为它们是测试工程师的基本功。</p><p>其中，使用最多的是查询数据，其次是筛选数据、新增数据、删除数据、更新数据。其中涉及条件更新和删除的问题被问到的概率比较大，尤其是更新，比如更新某一个满足条件的字段，所以更新和查询是需要你牢牢掌握的。</p><h2 id="sql-进阶" tabindex="-1">SQL 进阶 <a class="header-anchor" href="#sql-进阶" aria-label="Permalink to &quot;SQL 进阶&quot;">​</a></h2><p>我们再来看 SQL 进阶相关的知识，SQL 进阶知识就会涉及一些相对复杂的查询，比如连接查询。连接查询主要分为 5 种：inner join、left join、right join、full join、cross join。这几个知识点你只需要掌握前两个就可以了。</p><br><p>inner join 用于在两个表里面获取交集，left join 则只关注一个表，需要把另外一个表的部分字段提取连接过来，这两个知识点是相对而言使用比较多的，你只需要掌握这两种连接查询方式就可以了。</p><br><p>然后是事务，包括事务是如何定义的，以及它的语法是什么，其次是索引，包括索引的价值和用途，最后是存储过程，很多公司在使用数据库的过程中，经常会自定义一些存储过程，来把一些 SQL 拼装到一起以定义一些复杂的任务，甚至有些公司会要求你对存储过程专门进行测试，所以存储过程你也需要掌握。</p><h2 id="数据库使用经验" tabindex="-1">数据库使用经验 <a class="header-anchor" href="#数据库使用经验" aria-label="Permalink to &quot;数据库使用经验&quot;">​</a></h2><p>在数据库面试中，一般最后还会考察你对数据库的使用经验，比如你是否了解常见的数据库的使用，像 MySQL、Oracle、MongDB、Redis 等这些数据库你都需要了解下，其中 MySQL 是最重要的，而 Oracle 因为部署非常重而且是付费的所以个人难接触，只有一些金融企业使用，所以不会有要求，而 Redis 这类内存存储，因其高效的性能使用的也比较多，尤其是一些重要的数据缓存，这个时候就需要你有针对性的进行一些测试工作，也是一个面试点。</p><br><p>当然数据库的种类还有很多，我建议你先把 MySQL 学好，其他的数据库根据你公司的使用情况和职业规划再额外进行针对性的学习。</p><br><p>第二点是数据库的部署，这个比较简单，目前大部分基本上都是使用 Docker 进行部署，我在前面的课时也演示了如何使用 Docker 部署数据库。除 Docker 部署外，现在原生的部署方式已经比较少见了。部署之后开放的端口是多少，有几种连接方法，是使用 socket 连接还是端口连接，这些都是基本的考察点。</p><br><p>还有就是数据库的备份和恢复，如何备份和恢复数据也是实际工作中用的比较多的一些技术。然后是与性能相关的两个指标，第一个是性能的统计，这在做压测时经常会用到，我们需要测试性能瓶颈是发生在网站应用部分还是数据库连接部分等，所以性能统计及常见性能问题你需要了解掌握，这些如果你都能够回答在面试中是很好的加分项。</p><h2 id="推荐书籍和学习建议" tabindex="-1">推荐书籍和学习建议 <a class="header-anchor" href="#推荐书籍和学习建议" aria-label="Permalink to &quot;推荐书籍和学习建议&quot;">​</a></h2><p>既然数据库相关知识这么多而且这么重要，那么我们如何着手进行学习呢？这里我给你几点建议。</p><br><p>第一点，如果想要入门 MySQL，最好先掌握 MySQL 的官方文档，因为文档中会教会你如何使用 MySQL。</p><br><p>第二点，在掌握了 MySQL 基础知识的基础上，可以通过学习《高性能MySQL》这本书进行拔高，同时书中还介绍了使用 MySQL 时的一些常见问题以及解决方案，是不错的经验结晶。</p><br><p>然后是关于数据库的学习顺序的问题，建议你主学 MySQL，而避开像 SQL Server 这类比较边缘的数据库，因为 SQL Server 是微软开发的，微软体系在国内的正式开发环境中应用比较少。</p><br><p>再一点是学好 SQL，虽然 SQL 诞生于 RDBMS 是关系型数据库，但它的用途却不局限于此，因为 SQL 是用来描述数据关系的，所以很多 NoSQL 型数据库也支持 SQL，比如 MongoDB、ElasticSearch 都支持 SQL，然后像 Hadoop、Spark 这类的大数据引擎也支持 SQL 或 SQL 的一些子集，所以 SQL 在你的工作中也是很重要的基础。</p><br><p>学会 SQL 你便可以很快掌握一些大数据或搜索引擎，NoSQL 型数据库大多数情况下都用于大数据计算分析，这部分内容可以用来拔高自己的知识脉络。</p><br><p>最后，也建议你使用最简单的 Python Flask 技术编写一个小型网站熟悉 SQL 的使用场景，加深对应用场景的理解。</p><br>',52),i=[p];function s(n,l,S,h,c,L){return r(),e("div",null,i)}const Q=a(t,[["render",s]]);export{_ as __pageData,Q as default};
