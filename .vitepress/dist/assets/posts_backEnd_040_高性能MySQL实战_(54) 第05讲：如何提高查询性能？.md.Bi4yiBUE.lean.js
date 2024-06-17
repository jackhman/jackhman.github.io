import{_ as a,F as s,g as r,K as t,h as i,l,ar as o,o as p}from"./chunks/framework.VlluEs-f.js";const al=JSON.parse('{"title":"第05讲：如何提高查询性能？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/040_高性能MySQL实战/(54) 第05讲：如何提高查询性能？.md","filePath":"posts/backEnd/040_高性能MySQL实战/(54) 第05讲：如何提高查询性能？.md","lastUpdated":1718371218000}'),n={name:"posts/backEnd/040_高性能MySQL实战/(54) 第05讲：如何提高查询性能？.md"},_=l("h1",{id:"第05讲-如何提高查询性能",tabindex:"-1"},[i("第05讲：如何提高查询性能？ "),l("a",{class:"header-anchor",href:"#第05讲-如何提高查询性能","aria-label":'Permalink to "第05讲：如何提高查询性能？"'},"​")],-1),c=l("p",null,"本课时将分享 MySQL 数据库的查询优化器、查询缓存的原理和实际使用，慢查询和 SQL 优化的方法，互联网公司常用的 SQL 编写规范，以及在实际情况中如何优化数据库访问等内容，知识脑图如下所示。",-1),S=l("p",null,"MySQL 查询优化器",-1),d=l("h2",{id:"select-执行过程",tabindex:"-1"},[i("SELECT 执行过程 "),l("a",{class:"header-anchor",href:"#select-执行过程","aria-label":'Permalink to "SELECT 执行过程"'},"​")],-1),L=l("p",null,"那么如何提高 MySQL 的查询性能呢？首先你需要了解查询优化器处理 SQL 的全过程。以 SELECT 的 SQL 的执行过程为例，如下图所示。",-1),h=o("",8),u=l("p",null,"再来看看这个例子，这样的一个表结构（优化后的），优化前有一个索引 idx_global_id。图中的这条 SQL 语句的 where 条件包括一个 sub_id 的等值查询和一个 global_id 的范围查询。执行一次需要 2.37 秒。从下一页的执行计划中，我们可以看到虽然查询优化器使用了唯一索引 uniq_subid_globalid，但是由于 idx_global_id 的干扰，实际只使用了前面的 4 个长度就 access，剩余 8 个长度都被 filter 了。",-1),Q=o("",32),g=o("",36),y=l("h2",{id:"根据-rows-列优化",tabindex:"-1"},[i("根据 ROWS 列优化 "),l("a",{class:"header-anchor",href:"#根据-rows-列优化","aria-label":'Permalink to "根据 ROWS 列优化"'},"​")],-1),b=l("p",null,"在这里列举一个根据 ROWS 列的输出内容来进行优化的案例，如下图，看看优化前的 SQL 执行计划中 ROWS 是 181899 行，耗时 0.51 秒。咋一看来，还挺满意的，但是放在具体的业务场景中，尤其是业务并发量大，但机器性能一般的情况下，业务高峰期是一个巨大的坑，随着业务并发量的增长，性能呈现急剧恶化，这种情况依然需要优化。",-1),m=l("br",null,null,-1),A=l("p",null,'在这个例子中，是通过添加 endtime 索引来达到优化效果的，优化后，执行计划中的ROWS 变成了 134 行，基本上是"秒回"。优化后效果见下图。这个案例中使用的优化思路是结合业务模式和数据分布来优化具体的 SQL 语句；这里重点分析 ROWS 列的输出，对各查询条件扫描行数进行对比，找出最优的索引策略。',-1),M=l("br",null,null,-1),E=l("h2",{id:"group-by-和-order-by-的优化",tabindex:"-1"},[i("group by 和 order by 的优化 "),l("a",{class:"header-anchor",href:"#group-by-和-order-by-的优化","aria-label":'Permalink to "group by 和 order by 的优化"'},"​")],-1),q=l("p",null,'在前面"如何优化 SQL"部分中，描述了对 group by 和 order by 的优化，这里举个例子，说明一下二者的区别，帮助大家更好的理解，以及方便进行优化。',-1),f=l("p",null,"从下面的图中，可以看出：分组 GROUP BY 实质为排序和去重（distinct）的组合，通常它会结合一些聚合函数如 sum、count、avg、max、min 等来使用，根据一个或多个列对结果集进行分组，查看执行计划中的 Extra 列的输出内容，可以看到有 Using temporary; Using filesort。而 SQL 中有 ORDER BY 对结果集进行排序时，查看执行计划中的 Extra 列的输出内容，也可以看到有 Using temporary; Using filesort。分组和排序都涉及排序，故尽量在索引中包含排序字段，并让排序字段的排序顺序与索引列中的顺序相同，这样可以避免排序或减少排序次数。比如 where a=? order by b,c，就可以创建一个索引 (a,b,c)。如果执行计划中出现 using filesort，这时就要重点关注索引字段和顺序了。",-1),C=l("p",null,[l("strong",null,"Limit 分页优化")],-1),x=l("p",null,'对于分页问题，这是一个面试中经常会被问到的问题，看 SQL 语句是"SELECT * FROM TABLE ORDER BY col2 limit 80000,20;"的例子，如下图所示。Limit 有 start、offset 两个值，分页 SQL 的耗时随着 start 的增大而增加。原始分页查询的耗时是 2.87 秒，然后用子查询和表连接两种方式进行 SQL 改写后，查询的耗时都只有 0.5 秒左右。优化思路就是：让 SQL 尽量走索引避免排序，减少不必要的物理 IO；同时，每页展示数据确定起始范围，取符合条件取 N 条记录即可；由于传递的是主键（具有唯一特性），可以快速定位，获取数据。',-1),I=l("br",null,null,-1),R=l("h2",{id:"count-优化",tabindex:"-1"},[i("count 优化 "),l("a",{class:"header-anchor",href:"#count-优化","aria-label":'Permalink to "count 优化"'},"​")],-1),P=l("p",null,"这也是一个被面试中经常会问到的问题，对于下面的四条 SELECT 语句：",-1),k=l("p",null,"select count(*) from table ... ;",-1),B=l("p",null,"select count(1) from table ... ;",-1),T=l("p",null,"select count(primary key) from table ... ;",-1),O=l("p",null,"select count(index key) from table ...;",-1),w=l("br",null,null,-1),N=l("p",null,"哪一条的执行效率最高呢？这个问题需要具体问题具体分析，不能一概而论。这里举 SELECT count(1) 这条 SQL 为例。",-1),K=l("br",null,null,-1),V=l("p",null,"优化前和优化后，执行效率相差2倍。就添加了一个索引。优化思路是选择索引 key_len 最短的二级索引效率高，不要使用全表扫描（PK 聚族索引会全表扫描），因为索引 key_len 越短，读取页面越少，进而 IO_COST 越小。",-1),D=l("h1",{id:"bad-sql-案例",tabindex:"-1"},[i("Bad SQL 案例 "),l("a",{class:"header-anchor",href:"#bad-sql-案例","aria-label":'Permalink to "Bad SQL 案例"'},"​")],-1),v=l("p",null,"下面我们来看一些 Bad SQL 的案例，如图中所示。",-1),U=o("",17),W=l("p",null,[l("strong",null,"总结回顾")],-1),j=l("p",null,"下面，我们来回顾一下今天学习到的知识。",-1),F=l("br",null,null,-1),z=l("p",null,"首先了解了 SQL 在查询优化器中的执行过程，然后学习了怎么查询 SQL 的执行计划和内容，还有慢查询相关的知识。还学习了如何优化 SQL，这里包括 MySQL 自身做的优化；Bad SQL 的一些案例和常见的问题等。",-1),Y=l("p",null,"通过本次课程，你需要对 SQL 优化有总体的认识，优化是一种包罗数据库和操作系统知识的技能，需要不断的积累经验和实践，实践出真知。",-1),G=l("p",null,"建议你课后去尝试一下 pt-query-digest 工具的使用，以及对自己企业内的慢查询SQL进行尝试优化，在实践中学习和提高，一定要多总结，多记笔记，好记性不如烂笔头。",-1),H=l("p",null,"重点总结一下：SQL 的执行过程->查询优化器的工作原理->SQL 执行计划的解读->MySQL 慢查询日志和分析->SQL 常用的优化手段->SQL 编写规范->深入实际业务对数据库访问进行优化。",-1),X=l("p",null,'以上就是课时 5 的内容，下一课时，将分享"如何实现企业级高性能数据库架构，突破单库性能瓶颈"。',-1);function $(J,Z,ll,il,el,tl){const e=s("Image");return p(),r("div",null,[_,c,t(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/E4/CgotOV14pKWAbwCbAAKuS88W788249.png"}),i(),S,d,L,t(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/E4/CgotOV14pK-AaxzuAAIBs5v7g0Y535.png"}),i(),h,t(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/3E/CgotOV13WxyAeLshAAFowcTUaZg867.png"}),i(),u,t(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/3E/CgotOV13WxyAFgyyAAGPNEHrqk0124.png"}),i(),Q,t(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/1E/CgoB5l13Wx2Afiz1AAGF-ELFcIU636.png"}),i(),g,t(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/E4/CgotOV14pMqABAQgAARFR66zJoo992.png"}),i(),y,b,m,t(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/C4/CgoB5l14pL2AIpP0AANNlRlw_ig874.png"}),i(),A,M,t(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/C5/CgoB5l14pMOAXsuyAAMiT0_WKIg585.png"}),i(),E,q,f,t(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/1E/CgoB5l13Wx6AF_K8AAIY18JcnBA383.png"}),i(),C,x,I,t(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/85/9C/Cgq2xl6OmVOAeZH5AAAAK9URceg445.gif"}),i(),R,P,k,B,T,O,w,N,K,t(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/3E/CgotOV13Wx6AQDEOAAGzBZtSXy0900.png"}),i(),V,D,v,t(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/1E/CgoB5l13Wx6AIKfuAACA-Gnszv0713.png"}),i(),U,t(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/E5/CgotOV14pO6AK5fhAAIDdls4vUg221.png"}),i(),W,j,t(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8A/C5/CgoB5l14pPSAfy8SAAEAturhTSo699.png"}),i(),F,z,Y,G,H,X])}const sl=a(n,[["render",$]]);export{al as __pageData,sl as default};
