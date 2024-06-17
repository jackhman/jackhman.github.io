import{_ as l,F as p,g as n,K as t,h as e,l as s,ar as i,o}from"./chunks/framework.VlluEs-f.js";const N=JSON.parse('{"title":"第20讲：SQL语法与关键知识点","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/110-测试开发核心技术文档/(338) 第20讲：SQL 语法与关键知识点.md","filePath":"posts/devops/110-测试开发核心技术文档/(338) 第20讲：SQL 语法与关键知识点.md","lastUpdated":1718371218000}'),d={name:"posts/devops/110-测试开发核心技术文档/(338) 第20讲：SQL 语法与关键知识点.md"},r=s("h1",{id:"第20讲-sql语法与关键知识点",tabindex:"-1"},[e("第20讲：SQL语法与关键知识点 "),s("a",{class:"header-anchor",href:"#第20讲-sql语法与关键知识点","aria-label":'Permalink to "第20讲：SQL语法与关键知识点"'},"​")],-1),h=s("p",null,"本课时我们开始讲解 SQL 的语法和关键知识点，首先我们先来看下 SQL 的用途，SQL 的全称为 Structured Query Language 结构化查询语言，它是一个数据领域的 DSL，也就是说它是一种特殊的构建语法，可以用来支持对数据领域的各种通用操作。",-1),c=s("br",null,null,-1),b=s("p",null,"其中，SQL 即是关系型数据库的核心，同时 NoSQL 类型数据库也对其有一定的支持，或是支持一些定制的 SQL，所以学习 SQL 对处理所有类型的数据都有一定的帮助。",-1),g=s("br",null,null,-1),u=i('<br><p>接下来，我们看下 SQL 的分类，SQL 按照用途的不同可以分为四大类。</p><ol><li><p>DDL，DDL 是一种数据定义语句，里面主要包含库表创建的语句；</p></li><li><p>DML，DML 是数据操作的语法，里面包含增删改查的基本操作语句；</p></li><li><p>DCL，DCL 是数据库的控制语句，主要用于对一些权限的设定；</p></li><li><p>TCL，TCL 包含一些关于树的相关处理语句。</p></li></ol><br><p>我们今天主要给你介绍一些 DML 相关的常用语句，当我们遇到一个数据库时，首先需要了解该数据库中都有哪些库表结构，MySQL 数据库给我们提供了一些支持的命令，你可以使用 show databases 和 show tables 查看当前有几个数据库、有多少个表结构，你还可以通过 help show 来查看 show 命令支持的所有功能。</p><h2 id="增删改查操作" tabindex="-1">增删改查操作 <a class="header-anchor" href="#增删改查操作" aria-label="Permalink to &quot;增删改查操作&quot;">​</a></h2><p>然后 DML 的核心功能主要是增删改查，我们首先来学习查询语句。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SELEST *FROM Customers；</span></span></code></pre></div><br><p>查询使用的是 SELECT *FROM + 库表的结构，你也可以把 * 换成你想要的字段，举个例子，我们回到 phpMyAdmin 工具中，比如我们选择 employees 员工信息表，然后点击里面的 SQL，SQL下允许我们对当前数据库进行相关的查询操作。</p><br>',12),E=i(`<br><p>然后使用 SELECT * from titles 语句，点击执行，就可以获取公司所有的职位信息，你也可以设定一些筛选条件，比如我只选 title，就可以将 * 改成 title 字段，点击执行后只会列举出 title 的信息。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">INSERT INTO Customers(CustomerName,City,Country)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">values(&#39;Cardinal&#39;,&#39;Stavanger&#39;,&#39;Norway&#39;);</span></span></code></pre></div><br><p>我们再来看第二个 Create 增加命令，当我们需要创建一个新的数据时，在 SQL 里面是通过 INSERT 实现的，比如 INSERT INTO 一个表结构，表结构里面 会给出部分的字段，然后通过 values 就可以往里面追加我们想要的内容，这其实就是数据库的添加操作。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">UPDATA Customers SET ContactName=&#39;Alfred Schmidt&#39;,City=&#39;Frankfurt&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WHERECustomerID =1;</span></span></code></pre></div><br><p>在添加完数据后，如果我们需要修改，就可以使用 Updata，Updata 通过 SET 对特定字段进行赋值。注意：赋值之后还需要设置一个条件，这个条件是非常关键的，如果不设置这个条件整个数据的这个字段都会被修改，所以通常情况下需要添加一个 WHERE 条件，比如我们改写的那条数据，就可以通过它的 ID 或是内容进行限定。一旦限定了数据的子集，然后再使用Updata 更新数据。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DELETE FROM table_name WHERE condition;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DELETE FROM Customers WHERE CustomerName=&#39;Alfreds&#39;;</span></span></code></pre></div><br><p>然后是 DELETE 删除操作，DELETE 操作的语法是 DELETE FROM + 表，然后同样也需要给定一个条件，这个条件也很关键，如果你忘记了这个条件，整个表就会被你删除，所以使用 Updata 和 Delete 时，你需要特别小心。</p><br><p>平时工作中我们使用最多仍然是查询，作为测试工程师更多的情况下是对已有的数据进行各种查询操作。有时候我们需要构建一些数据，这个时候就需要使用 INSERT，当然有的时候也会少量的用到 Updata 和 Delete。</p><h2 id="基本查询语句" tabindex="-1">基本查询语句 <a class="header-anchor" href="#基本查询语句" aria-label="Permalink to &quot;基本查询语句&quot;">​</a></h2><p>增删改查之后就是我们的基本查询语句，基本查询语句是我们日常工作中使用最多的，平时我们使用 SQL 时 80% 以上的场景是查询，那查询到底有多少种语法呢？</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">select * from table_name</span></span></code></pre></div><br><p>第一种是基本的查询，通过这个命令我们可以查询一个表中的数据到底是什么。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">select fileds from table_name</span></span></code></pre></div><br><p>我们还可以对单独的字段进行查询，比如查询某个字段的内容，可以通过 selest filed 查询，如果有多个字段，你还可以使用逗号进行隔开。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">select * from table_name where a=1</span></span></code></pre></div><br><p>再一个是条件查询，比如 select * from table，你可以指定条件比如 where a=1，这里注意 where 条件是很关键的。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">select * from table_name order by b desc</span></span></code></pre></div><br><p>还有就是排序，查询出来的数据可以根据年龄和入职时间进行排序，通常可以使用 order 语句，by 后面可以添加排序的字段和升降序。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">select * from table_name order limit 10 offset 0</span></span></code></pre></div><br><p>然后是分页，很多网站在查询数据时都涉及分页，分页其实就是使用了一个 limit，我们可以使用 offset 指定分页的偏移量是多少。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">select distinct gender from employees</span></span></code></pre></div><br><p>最后是去重，如果表中的数据是有重复，就可以使用 distinct 来完成对数据的去重操作，以上便是基本的查询语句。</p><h2 id="条件查询语句" tabindex="-1">条件查询语句 <a class="header-anchor" href="#条件查询语句" aria-label="Permalink to &quot;条件查询语句&quot;">​</a></h2><p>在查询出结果之后，有的时候我们就需要在结果中筛选一个特定条件的子集，这个时候就需要使用条件查询，条件查询语句就是在 select 语句之后，甚至是 updata、delete 语句之后，添加上一个至关重要的 where 语句，它可以限定一些你想要的条件，那么条件都包含哪些呢？</p><br><p>比如比较查询的值是大于多少、小于多少等等，或者说我的条件是一个字符串，那么我们可以使用一些通配符对字符串进行通配。</p><br><p>除此之外，还可以使用一个范围的限定，比如说筛选某个价格在 10 元到 20 元之间产品，就可以使用 between and 语句来完成。再有一个就是对子集的限定，可以使用 in 结构，将某一个字段包含在一个特定的子集内，子集里面即可以是一个单列的数据项，也可以是另外的一个数据结构。</p><br><p>最后就是逻辑关系，当我们需要多个条件匹配到一起的时候，就需要使用 and、or 或者是 not 语句来完成条件的各种复杂的关系判断。</p><h2 id="聚合查询语句" tabindex="-1">聚合查询语句 <a class="header-anchor" href="#聚合查询语句" aria-label="Permalink to &quot;聚合查询语句&quot;">​</a></h2><p>除此之外，最后我们来学习一个聚合查询，聚合查询在我们的工作中也非常有用，通常它用来统计一些特定数据，比如说统计员工表中男女员工的人数，你就可以使用 group by 来对某一个字段进行分类，从而计算表中的一些相关数据。</p><br><p>在这里举一个简单的例子，我们去查询员工信息表，你可以看到在表中有性别项、我们根据性别统计这家公司里男女员工到底有多少人。</p><br><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SELECT COUNT(gender),gender FROM &#39;employees&#39; GROUP BY gender</span></span></code></pre></div><br><p>我们可以使用这个语句来查询男女员工并统计相关的数据。</p><br>`,59),k=s("br",null,null,-1),_=s("p",null,"执行完之后你可以看到这家公司男女员工总共有多少人，当然我们还可以限定一定的条件，这个时候就不能再使用 where了，因为它是限定 group by 的，所以为了区分就有了一个新的关键词 having，having 可以指定到底是哪一个子分类获取数据，以上聚合查询。",-1),m=s("br",null,null,-1),v=s("p",null,"到这里基本的 DML 语法就讲完了，你可以在我们搭建好的系统里面进行相关的演练。",-1);function C(y,S,L,T,f,D){const a=p("Image");return o(),n("div",null,[r,h,c,b,g,t(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/68/4F/Cgq2xl5ONZeAU5QOAABVY1ruRA4303.png"}),e(),u,t(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/68/4F/CgpOIF5ONZiALyk3AAXgSHgI7CE357.png"}),e(),E,t(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/68/4F/Cgq2xl5ONZiAPzM6AAGN49C24FQ274.png"}),e(),k,_,m,v])}const x=l(d,[["render",C]]);export{N as __pageData,x as default};
