import{_ as e,F as o,g as n,K as s,h as t,l as a,ar as l,o as p}from"./chunks/framework.VlluEs-f.js";const P=JSON.parse('{"title":"16测试框架如何做好数据持久化？（一）","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/114-测试开发入门与实战文档/(4688) 16  测试框架如何做好数据持久化？（一）.md","filePath":"posts/devops/114-测试开发入门与实战文档/(4688) 16  测试框架如何做好数据持久化？（一）.md","lastUpdated":1718371218000}'),i={name:"posts/devops/114-测试开发入门与实战文档/(4688) 16  测试框架如何做好数据持久化？（一）.md"},h=a("h1",{id:"_16测试框架如何做好数据持久化-一",tabindex:"-1"},[t("16测试框架如何做好数据持久化？（一） "),a("a",{class:"header-anchor",href:"#_16测试框架如何做好数据持久化-一","aria-label":'Permalink to "16测试框架如何做好数据持久化？（一）"'},"​")],-1),d=a("p",null,'你好，我是蔡超，欢迎来到第 16 课时，本课时的主题是"测试框架如何做好数据持久化"。',-1),_=a("p",null,"由于内容较多，我将分为两次讲解。今天这一课时我先讲解测试数据本身，下一课时我再向你讲解如何借助工具完成数据持久化工作。下面是这个课时内容框架， 可供你参考。",-1),c=l('<p>在前面几节课中，我们花费了大量篇幅来讲解数据驱动，原因无它，因为测试数据是你的业务，乃至你的公司最重要的资产之一。有了数据，你就可以知道：</p><ul><li><p>在历次版本变更中，质量的变化曲线是怎么样的？</p></li><li><p>在一个长的时间段内，哪个模块的问题比较多，哪个模块的性能不够好？</p></li><li><p>哪个开发的 bug 最少，哪个 QA 提的 bug 最多？</p></li><li><p>哪个项目经理从不延期，哪个项目经理经常变需求？</p></li></ul><p>测试数据如此重要，但在很多公司内，并没有引起足够多的重视，所以今天我将分享下我关于测试数据的一些思考，尤其是其存在的一些问题和解决方法。</p><h3 id="测试数据简述" tabindex="-1">测试数据简述 <a class="header-anchor" href="#测试数据简述" aria-label="Permalink to &quot;测试数据简述&quot;">​</a></h3><p>什么是测试数据呢？提出这个问题，我想大家都觉得有点莫名其妙。测试数据不就是我们天天用来做测试的数据吗？其实不然，从我的角度看， 测试数据指的是跟测试有关的数据，它可以分为以下几类。</p><h4 id="_1-测试请求数据" tabindex="-1">1. 测试请求数据 <a class="header-anchor" href="#_1-测试请求数据" aria-label="Permalink to &quot;1. 测试请求数据&quot;">​</a></h4><p>测试请求数据，就是我们常常理解的测试数据。这部分数据是<strong>测试用例执行</strong> 的必要输入（这里的测试用例是指自动化测试用例，通常以<strong>测试脚本</strong>的形式存在）。</p><p>它可以是直接耦合在测试用例里的，也可以是放在外部文件。放在外部文件的情况，即我们前几个章节讲的，测试数据可以存储在 JSON、YAML、TXT、Excel File(xlsx)、CSV、SQL 文件，甚至 .py 文件中。这部分测试数据的使用，通过前面的学习，我们已经非常熟练了。对于测试请求数据，也分为以下两种情况。</p><ul><li><strong>强制数据</strong></li></ul><p>发送请求时必须携带的数据即强制数据，例如：</p><p>在 UI 自动化测试中提交表单，那些你不填写就无法提交表单的数据；</p><p>在 API 自动化测试中，那些你在请求时<strong>必须携带</strong> 的参数和数据，<strong>否则发送请求就会报错</strong>。</p><ul><li><strong>非强制数据</strong></li></ul><p>发送请求时非强制携带的数据即非强制数据，例如：</p><p>在 UI 自动化测试中提交表单，那些不填写也可以提交表单的数据；</p><p>在 API 自动化测试中，那些你在请求时<strong>不携带，发送请求也不会报错</strong>的参数和数据。</p><h4 id="_2-测试期望数据" tabindex="-1">2. 测试期望数据 <a class="header-anchor" href="#_2-测试期望数据" aria-label="Permalink to &quot;2. 测试期望数据&quot;">​</a></h4><p>测试期望数据，通常用作跟测试后产生的结果数据进行比较的数据。这部分数据，常常是伴随着断言函数存在。</p><p>用于判定根据测试请求数据生成的<strong>测试结果数据，是否跟测试期望数据相同</strong>。如果相同，则说明业务行为符合预期；不相同，则说明业务行为跟需求不一致，可能存在Bug。</p><h4 id="_3-测试结果数据" tabindex="-1">3. 测试结果数据 <a class="header-anchor" href="#_3-测试结果数据" aria-label="Permalink to &quot;3. 测试结果数据&quot;">​</a></h4><p>即经过测试请求数据的输入，系统产生的结果数据，这部分数据也分为两种情况：</p><ul><li><strong>单纯的结果数据</strong></li></ul><p>指<strong>未经分析</strong> 、聚合的数据。例如某一个测试用例的结果数据。它们的作用常常是用来与用户提供的<strong>测试期望数据进行比较</strong>，来验证业务的正确性。</p><ul><li><strong>聚合的结果数据</strong></li></ul><p>聚合的结果数据，通常指<strong>测试报告</strong>。 通过把单纯的结果数据聚合，可以使聚合的结果数据告诉我们更多关于系统质量的信息。例如在一次测试后，测试报告可以告诉我们，有多少条测试用例成功，有多少条测试用例失败， 测试失败的用例属于哪个模块等问题。 通过多次测试报告的对比，我们可以看出哪个测试模块经常出问题，哪个模块基本稳定，哪个模块的性能又下降了等问题，通过分析聚合数据有助于完善我们的测试策略。</p><h3 id="测试请求数据的准备方式" tabindex="-1">测试请求数据的准备方式 <a class="header-anchor" href="#测试请求数据的准备方式" aria-label="Permalink to &quot;测试请求数据的准备方式&quot;">​</a></h3><p>测试请求数据准备在自动化测试中常常会耗费较多的时间，如何有效地准备测试数据，甚至是一个独立的话题。这里我根据自身经验，列出常用的几种数据准备方式供你参考。</p><h4 id="_1-根据业务规则手工创建" tabindex="-1">1.根据业务规则手工创建 <a class="header-anchor" href="#_1-根据业务规则手工创建" aria-label="Permalink to &quot;1.根据业务规则手工创建&quot;">​</a></h4><p>这个是目前最简单的一种方式，由测试人员<strong>直接提供</strong>测试请求数据，包括强制数据和非强制数据。通过直接提供给测试方法或者使用外部文件保存测试请求数据。外部文件保存的测试请求数据在测试进行时，通过数据驱动逐个读取并应用到测试用例（测试脚本）。</p><p>手工创建的测试请求数据有一个<strong>缺点</strong> ，即测试请求数据<strong>永远不会变化</strong>，这个不符合正常的用户使用情况。</p><h4 id="_2-使用第三方-fake-data-库自动生成" tabindex="-1">2. 使用第三方 fake data 库自动生成 <a class="header-anchor" href="#_2-使用第三方-fake-data-库自动生成" aria-label="Permalink to &quot;2. 使用第三方 fake data 库自动生成&quot;">​</a></h4><p>为了更好地模拟正常用户的使用情况，可以使用第三方 fake data，例如 python 中常用的 faker库。通过调用这些 fake data 的库，可以生成更接近正常用户使用的测试数据。</p><p>但这种数据一般<strong>仅限创建数据时使用</strong>。比如注册，填写反馈表单的情况。对于查询型数据，则不适用，因为查询型数据，通常要求数据已经存在系统数据库中。</p><h4 id="_3-通过-sql-查询得出的数据文件" tabindex="-1">3. 通过 SQL 查询得出的数据文件 <a class="header-anchor" href="#_3-通过-sql-查询得出的数据文件" aria-label="Permalink to &quot;3. 通过 SQL 查询得出的数据文件&quot;">​</a></h4><p>通过 SQL 查询获取测试请求数据的方式是<strong>比较常用</strong> 的方式。一般这种方式<strong>适用于一个请求数据的请求本身，来自不同业务的输出的情况</strong>。比如测试商品扣款接口，那么这个接口的输入必须要有用户 id、商品 id、商品价格、用户余额等参数，而这些参数由一个或多个服务提供。所以使用 SQL 语句组合查询是比较快捷的一种方式。</p><p>通过SQL语句查询得出测试数据，如果join的表过多，存在数据生成效率问题。</p><h4 id="_4-根据测试平台自动生成数据" tabindex="-1">4. 根据测试平台自动生成数据 <a class="header-anchor" href="#_4-根据测试平台自动生成数据" aria-label="Permalink to &quot;4. 根据测试平台自动生成数据&quot;">​</a></h4><p>数据构造平台（Data platform）是最近几年比较流行的一个数据生成解决方法，它综合了以上几种数据生产的方式，通过提供统一的接口，使用户可以方便地生成测试数据，而不必关心数据是如何生成的，但数据构造平台的构建<strong>需要测试团队有一定的架构能力。</strong></p><h4 id="_5-拷贝自生产环境" tabindex="-1">5. 拷贝自生产环境 <a class="header-anchor" href="#_5-拷贝自生产环境" aria-label="Permalink to &quot;5. 拷贝自生产环境&quot;">​</a></h4><p>通过拷贝生产环境的流量，用于测试环境测试。这个方式<strong>常见于性能测试中</strong>，通过拷贝线上流量到测试环境的方式来构造测试数据。</p><p>常见的解决方案有 TcpCopy、goreplay 等。此方式对测试团队的架构能力、代码开发能力有比较高的要求，往往还需要开发团队的配合甚至主导，一般通过公司内部专门组建攻坚项目的方式实行。</p><h3 id="测试请求数据的准备时机" tabindex="-1">测试请求数据的准备时机 <a class="header-anchor" href="#测试请求数据的准备时机" aria-label="Permalink to &quot;测试请求数据的准备时机&quot;">​</a></h3><p>关于在测试的哪个阶段去创建测试请求数据，目前业界有以下两种方式。</p><h4 id="_1-在测试运行前准备" tabindex="-1">1. 在测试运行前准备 <a class="header-anchor" href="#_1-在测试运行前准备" aria-label="Permalink to &quot;1. 在测试运行前准备&quot;">​</a></h4><p>在测试运行前准备，即测试数据是 hard code 的形式存在。可以直接 hard code 在测试方法里，也可以是写在各种格式的数据文件中。像上文中提及的<strong>根据业务规则手工创建测试数据</strong>，就是测试运行前准备的最好示例。</p><h4 id="_2-在测试运行时准备" tabindex="-1">2. 在测试运行时准备 <a class="header-anchor" href="#_2-在测试运行时准备" aria-label="Permalink to &quot;2. 在测试运行时准备&quot;">​</a></h4><p>在测试运行时准备，指不事先指定测试数据，即测试代码中无测试数据文件。 测试数据是通过在测试运行时， 先行通过调用数据构造平台或者通过组合查询 DB 的方式，直接生成测试用例要求的测试数据，然后再开始测试。</p><p>关于测试数据要在何时准备，目前业界没有统一的结论，你可以根据自身情况自由选择。</p><h3 id="测试请求数据存在的问题及应对方法" tabindex="-1">测试请求数据存在的问题及应对方法 <a class="header-anchor" href="#测试请求数据存在的问题及应对方法" aria-label="Permalink to &quot;测试请求数据存在的问题及应对方法&quot;">​</a></h3><p>当前，无论是以什么方式准备数据，无论采用何种时机生成测试请求数据，测试请求数据都可能会有如下的问题。</p><h4 id="_1-测试数据过期" tabindex="-1">1. 测试数据过期 <a class="header-anchor" href="#_1-测试数据过期" aria-label="Permalink to &quot;1. 测试数据过期&quot;">​</a></h4><p>这种情况常见于测试请求数据事先准备的情况。例如有一组数据是用于优惠券的扣除，但通常优惠券都有有效期。在优惠券过期之后，使用这组数据进行测试，必然导致测试失败。所以对于事先准备的测试请求数据，必须要<strong>定期维护</strong>。</p><h4 id="_2-多次运行导致测试结果不同" tabindex="-1">2. 多次运行导致测试结果不同 <a class="header-anchor" href="#_2-多次运行导致测试结果不同" aria-label="Permalink to &quot;2. 多次运行导致测试结果不同&quot;">​</a></h4><p>这种情况也常因为数据是提前准备的而发生。例如提供了一组测试数据用于用户注册，当第一次测试运行时，测试会正常通过，但是第二次测试会由于用户已存在而导致测试失败。</p><p>对于测试的过程中需要进行写 DB 操作的情况，最好<strong>在测试结束后做 tear down 操作</strong>，使系统恢复测试前的状态。</p><h4 id="_3-环境切换导致测试数据不可用" tabindex="-1">3. 环境切换导致测试数据不可用 <a class="header-anchor" href="#_3-环境切换导致测试数据不可用" aria-label="Permalink to &quot;3. 环境切换导致测试数据不可用&quot;">​</a></h4><p>通常情况下，一个产品的发布，必然要经过几个测试环境的测试。例如，开发环境、集成测试环境、预生产环境、生产环境等。每个环境的测试数据可能不尽相同，切换环境必须保证测试数据可用。</p><p>对于环境切换导致测试数据不可用的问题，可通过如下两个方式解决：</p><ul><li>保证每个测试环境用同一套数据</li></ul><p>此种方式比较烦琐，适用于新项目。给每一个测试环境创建相同的测试数据，避免因测试环境切换导致测试错误。</p><ul><li>测试框架具备切换测试环境，自动化查找相应环境数据的能力</li></ul><p>这个方式比较常见，不同的测试环境可以有不同的测试数据。测试框架具备切换测试环境后，自动挂载相应测试环境的测试数据的能力。</p><h4 id="_4-测试数据在测试运行中被更改" tabindex="-1">4. 测试数据在测试运行中被更改 <a class="header-anchor" href="#_4-测试数据在测试运行中被更改" aria-label="Permalink to &quot;4. 测试数据在测试运行中被更改&quot;">​</a></h4><p>测试数据可能在测试中被动态更改。比如用户的余额存在数据库中，而测试数据是在测试运行时候生成的。即测试运行时去查询获取用户余额才发现用户余额不足。</p><p>对于这种情况，通常需要<strong>更改测试数据生成的条件</strong>，即把查询语句写得更健壮，确保获取到的用户一定是有余额的。或者加条件判断，如果发现没有余额，则调用另外的服务给用户充值。</p><h4 id="_5-并发运行导致测试数据不可用" tabindex="-1">5. 并发运行导致测试数据不可用 <a class="header-anchor" href="#_5-并发运行导致测试数据不可用" aria-label="Permalink to &quot;5. 并发运行导致测试数据不可用&quot;">​</a></h4><p>并发运行测试用例，或者多个人同时运行同一条测试用例，可能会导致多个测试用例共同操作同一组数据。这样可能导致测试失败（例如不同的人拿同一条测试数据进行注册操作）。</p><p>对于这种情况，可以编码允许测试框架支持并发运行时使用同一个数据文件，但是这样通常投入较多。 为了避免投入太多开发精力，大多数情况会<strong>采用多个类支持并发</strong> ，一个类下面的测试用例<strong>顺序执行</strong>的方式来避免同一个测试类下的测试用例，同时访问同一个测试数据。</p><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><p>以上便是是测试请求数据在测试运行中的常见问题。可能你会发现，这些问题虽然各有各的解决方法，但都有一个共性，那就是这些问题的出现，都是由于<strong>缺乏测试数据管理</strong>才出现的。</p><p>那么测试数据应该如何管理呢？那首先就要进行数据持久化，也就是将测试数据有组织的永久存储的过程，下一课时我将向你讲解《17 | 测试框架如何做好数据持久化？（二）》，教你如何使用数据持久化工具。</p><hr><p><a href="https://wj.qq.com/s2/7506053/9b01" target="_blank" rel="noreferrer">课程评价入口，挑选 5 名小伙伴赠送小礼品～</a></p>',73);function g(u,b,q,f,m,k){const r=o("Image");return p(),n("div",null,[h,d,_,s(r,{alt:"Lark20201102-182703.png",src:"https://s0.lgstatic.com/i/image/M00/66/DB/CgqCHl-f3wWAXc66AAOrWTvVruw589.png"}),t(),c])}const S=e(i,[["render",g]]);export{P as __pageData,S as default};
