import{_ as p,D as l,o as e,g as r,J as n,h as o,Q as t,m as s}from"./chunks/framework.f67d7268.js";const P=JSON.parse('{"title":"02JMeter参数化策略","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/047_说透性能测试/(6153) 02  JMeter 参数化策略.md","filePath":"posts/devops/047_说透性能测试/(6153) 02  JMeter 参数化策略.md","lastUpdated":1696682708000}'),c={name:"posts/devops/047_说透性能测试/(6153) 02  JMeter 参数化策略.md"},u=t('<h1 id="_02jmeter参数化策略" tabindex="-1">02JMeter参数化策略 <a class="header-anchor" href="#_02jmeter参数化策略" aria-label="Permalink to &quot;02JMeter参数化策略&quot;">​</a></h1><p>上一讲我梳理了 JMeter 的核心概念，希望你能够通过课程去理解并灵活的应用到实际工作中。这一讲我会带你学习一个重要的知识点：参数化。无论是从使用频率还是从参数化对性能测试结果的影响，它都是你做性能测试必须要掌握的。</p><h3 id="参数化是什么" tabindex="-1">参数化是什么 <a class="header-anchor" href="#参数化是什么" aria-label="Permalink to &quot;参数化是什么&quot;">​</a></h3><p>简单来说，参数化就是选取不同的参数作为请求内容输入。使用 JMeter 测试时，测试数据的准备是一项重要的 工作。若要求每次传入的数据不一样，就需要进行参数化了。</p><h3 id="为什么要进行参数化" tabindex="-1">为什么要进行参数化 <a class="header-anchor" href="#为什么要进行参数化" aria-label="Permalink to &quot;为什么要进行参数化&quot;">​</a></h3><p>刚才说到，若要求每次传入的数据不一样，就需要进行参数化。那为什么会有这种要求呢？我们来看两个场景。</p><ul><li><strong>数据被缓存导致测试结果不准确</strong></li></ul><p>缓存原本是为了让数据访问的速度接近 CPU 的处理速度而设置的临时存储区域，比如 cache。如今缓存的概念变得更广了，很多空间都可以设置客户端缓存、CDN 缓存等等。</p><p>当你频繁地请求某一条固定的数据时，这条数据就很容易被缓存，而不是每次都从数据库中去获取，这就可能导致和真实的场景有差别。</p><p>比如大促有 10w 用户会从获取不同的商品信息，而你的压测中并没有进行充分的参数化，此时用大量线程反复请求同一件商品，极有可能访问的是缓存数据。从业务逻辑看接口返回并没有问题，但这样的场景几乎不会发生，这就会导致无效压测，测试的结果并没有多少意义。</p><ul><li><strong>流程不能正常执行</strong></li></ul><p>数据被缓存可能会导致测试结果不准确，但至少业务能够走通。还有的情况是，在没有参数化的情况下，会产生大量的业务报错。</p><p>打个比方，你在测试限购商品抢购，如果用多线程模拟同一个用户操作可能会直接报错，因为在生成订单接口（支付等）都会判断是否是同一个用户。</p><p>在要求每次传入的数据不一样时，如果不进行参数化会造成很多问题，以上我列举的两个场景基本概括了没有参数化时会发生的问题，希望你能在性能测试时多加注意。下面我们就来看如何实现 JMeter 参数化。</p><h3 id="jmeter-参数化的实现方式" tabindex="-1">JMeter 参数化的实现方式 <a class="header-anchor" href="#jmeter-参数化的实现方式" aria-label="Permalink to &quot;JMeter 参数化的实现方式&quot;">​</a></h3><p>我列举了 3 种比较常见的 JMeter 参数化的实现方式，你可以根据自己的需要进行选择。</p><ul><li><p><strong>CSV Data Set Config</strong> ：将参数化的数据放入文件中，参数化读取依赖于文件操作。这样的参数化方式很常用，<strong>尤其适用于参数化数据量较多的场景</strong>，而且维护比较简单灵活。</p></li><li><p><strong>User Defined Variables</strong> ：一般来说可以配置脚本中的公共参数，如域名，端口号，不需要随着压测进行动态改变，<strong>比较方便环境切换</strong>。</p></li><li><p><strong>Function Helper 中的函数</strong>：使用函数的方式生成参数，如果你需要随机数、uuid 等都可以使用函数生成。JMeter 还提供了相应的接口给你二次开发，自定义需要的功能。</p></li></ul><h4 id="csv-data-set-config" tabindex="-1">CSV Data Set Config <a class="header-anchor" href="#csv-data-set-config" aria-label="Permalink to &quot;CSV Data Set Config&quot;">​</a></h4><p>CSV Data Set Config 的可配置选项较多，也是目前性能测试参数化时使用最多的插件，这里我就重点介绍一下 CSV Data Set Config。</p><p>在配置组件中添加元件 CSV Data Set Config，如下图所示：</p>',20),y=t("<p>图 1：CSV Data Set Config</p><p>我们来看一下 CSV Data Set Config 各项的含义。</p><p><strong>文件名</strong>：顾名思义，这里填写文件的名字即可。</p><p>保存参数化数据的文件目录，我这边是将 user.csv 和脚本放置在同一路径下。在这里我要推荐一个小技巧，就是&quot;<strong>相对路径</strong>&quot;。使用绝对路径，在做脚本迁移时大部分情况下都需要修改。如果你是先在 Windows 或 Mac 机器上修改脚本，再将脚本上传到 Linux 服务器上执行测试的，那你就可以用相对路径，这样就不用频繁修改该选项了。</p><p><strong>文件编码</strong>：指定文件的编码格式，设置的格式一般需要和文件编码格式一致，大部分情况下保存编码格式为 UTF-8 即可。</p><p><strong>变量名称</strong>：对应参数文件每列的变量名，类似 Excel 文件的文件头，主要是作为后续引用的标识符，一般使用英文。如下图所示：</p>",6),q=s("p",null,"图 2：user.csv",-1),F=s("p",null,"图中我标示了 name 和 password，相对应 user.csv 中的第一列和第二列。",-1),E=s("p",null,'那如何引用需要的文件数据？通过"${变量名称}"就可以了，如下图所示：',-1),i=t('<p>图 3：引用演示图</p><p><strong>忽略首行</strong>： 第一行不读取。比如图 2 的第一行我只是标示这一列是什么类型的数据，实际上并不是需要读取的业务数据，此时就可以采用忽略首行。</p><p><strong>分隔符</strong>：用来标示参数文件中的分隔符号，与参数文件中的分隔符保持一致即可。</p><p><strong>遇到文件结束符再次循环</strong>：是否循环读取参数文件内容。因为 CSV Data Set Config 一次读入一行，如果设置的循环次数超过文本的行数，标示为 True 就是继续再从头开始读入。</p><p><strong>遇到文件结束符停止线程</strong>：读取到参数文件末尾时，是否停止读取线程，默认为 False。如果&quot;遇到文件结束符再次循环&quot;已经设置为 True 了，这个选项就没有意义了。</p><p><strong>线程共享模式</strong>：这个适用范围是一个脚本里多线程组的情况。所有线程是默认选项，代表当前测试计划中的所有线程中的所有的线程都有效；当前线程组代表当前线程组中的线程有效；当前线程则表示当前线程有效。一般情况下，我们选择默认选项&quot;所有线程&quot;就好，&quot;当前线程组&quot;和&quot;当前线程&quot;很少会用到。</p><p>上面我介绍了参数化的意义以及常见用法，参数化对于性能测试是基础且必需的，因为在性能场景中，很多时候不进行参数化，脚本也是可以跑通的，所以有一些测试同学在这方面就会&quot;偷工减料&quot;，但这会造成性能数据不准确。下面，我们就来看一种特殊的参数化：关联。</p><h3 id="特殊的参数化-关联" tabindex="-1">特殊的参数化：关联 <a class="header-anchor" href="#特殊的参数化-关联" aria-label="Permalink to &quot;特殊的参数化：关联&quot;">​</a></h3><p>关联是将上个请求的数据提取需要的部分放到下个请求中，通过关联我们可以获取到满足业务特性的不同数据，因此可以认为是一种特殊的参数化。</p><h4 id="关联的使用场景" tabindex="-1">关联的使用场景 <a class="header-anchor" href="#关联的使用场景" aria-label="Permalink to &quot;关联的使用场景&quot;">​</a></h4><p>我们来看一个例子，从例子中了解关联解决了什么问题。</p><p>我编写了一个查看订单接口，运行完成没有问题，并且返回正确的结果，如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;data&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;code&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;count&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;items&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;">[{</span><span style="color:#9ECBFF;">&quot;actualPrice&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">8900</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;gmtCreate&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">1601448530000</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">357</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;orderNo&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;1012020091448501002&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;skuList&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;">[{</span><span style="color:#9ECBFF;">&quot;barCode&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;150004&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;gmtCreate&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">1601448530000</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;gmtUpdate&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">1601448530000</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">389</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;img&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;https://demo.oss-cn-shenzhen.aliyuncs.com/bg/86338c9e576342baa0d079bc1caef9cc.jpg&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;num&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;orderId&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">357</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;orderNo&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;1012020091448501002&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;originalPrice&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">10690</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;price&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">8900</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;skuId&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">2777</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;spuId&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">1236771</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;spuTitle&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;昵趣 NaTruse 山羊奶配方狗狗洁齿骨 盒装 20g*40 支&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;山羊奶&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;unit&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;盒&quot;</span><span style="color:#E1E4E8;">}],</span><span style="color:#9ECBFF;">&quot;status&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">},</span><span style="color:#9ECBFF;">&quot;msg&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;第 1 页,共 1 条&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;pageNo&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;pageSize&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">，</span><span style="color:#9ECBFF;">&quot;total&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">，</span><span style="color:#9ECBFF;">&quot;totalPageNo&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">},</span><span style="color:#9ECBFF;">&quot;errmsg&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;成功&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;errno&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;timestamp&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">1609219480400</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;data&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;code&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;count&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">16</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;items&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;">[{</span><span style="color:#032F62;">&quot;actualPrice&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">8900</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;gmtCreate&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">1601448530000</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">357</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;orderNo&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;1012020091448501002&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;skuList&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;">[{</span><span style="color:#032F62;">&quot;barCode&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;150004&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;gmtCreate&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">1601448530000</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;gmtUpdate&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">1601448530000</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">389</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;img&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;https://demo.oss-cn-shenzhen.aliyuncs.com/bg/86338c9e576342baa0d079bc1caef9cc.jpg&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;num&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;orderId&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">357</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;orderNo&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;1012020091448501002&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;originalPrice&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">10690</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;price&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">8900</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;skuId&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">2777</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;spuId&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">1236771</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;spuTitle&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;昵趣 NaTruse 山羊奶配方狗狗洁齿骨 盒装 20g*40 支&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;山羊奶&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;unit&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;盒&quot;</span><span style="color:#24292E;">}],</span><span style="color:#032F62;">&quot;status&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">},</span><span style="color:#032F62;">&quot;msg&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;第 1 页,共 1 条&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;pageNo&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;pageSize&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">，</span><span style="color:#032F62;">&quot;total&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">，</span><span style="color:#032F62;">&quot;totalPageNo&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">},</span><span style="color:#032F62;">&quot;errmsg&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;成功&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;errno&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;timestamp&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">1609219480400</span><span style="color:#24292E;">}</span></span></code></pre></div><p>一个小时之后，我再来运行这个接口时，却发现返回用户未登录：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">&quot;errmsg&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;用户尚未登录&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;errno&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">10001</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;timestamp&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">1609220170295</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> {</span><span style="color:#032F62;">&quot;errmsg&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;用户尚未登录&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;errno&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">10001</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;timestamp&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">1609220170295</span><span style="color:#24292E;">}</span></span></code></pre></div><p>在所有入参都没有修改的情况下为什么会出现这样的情况呢？因为你看到返回的信息是用户未登录，也就是说用户信息是无效的。</p><p>这个接口使用 Token 验证用户，Token 有效期为 15 分钟，刚刚问题产生的原因就是 Token 过期了。</p><p>那如何保证查看订单接口信息中需要的 Token 都是有效的呢？其中一个方法就是查看订单接口之前调用登录接口获取 Token，把登录接口的 Token 传入查看订单接口中。这个过程其实就是&quot;关联&quot;。</p><h4 id="jmeter-如何实现关联" tabindex="-1">JMeter 如何实现关联 <a class="header-anchor" href="#jmeter-如何实现关联" aria-label="Permalink to &quot;JMeter 如何实现关联&quot;">​</a></h4><p>JMeter实现关联有 3 种方式：边界提取器，通过左右边界的方式关联需要的数据；Json Extractor提取器，针对返回的 json 数据类型；正则表达式提取器，通过正则表达式去提取数据，实现关联。</p><p>正则表达式提取器是最为常用，也是这里我要向你介绍的关联方式。我们来看下面的例子：</p>',21),C=t('<p>图 4：正则表达式提取器</p><p>我们来看一下正则表达式提取器中每一项的含义。</p><ul><li><p><strong>引用名称</strong>：自己定义的变量名称以及后续请求将要引用到的变量名。在图中我填写的是&quot;token&quot;，则引用方式是&quot;${token}&quot;。</p></li><li><p><strong>正则表达式</strong>：提取内容的正则表达式。&quot;( )&quot;括起来的部分就是需要提取的，&quot;.&quot;点号表示匹配任何字符串，&quot;+&quot;表示一次或多次，&quot;？&quot;表示找到第一个匹配项后停止。</p></li><li><p><strong>模板</strong>：用&quot;$ $&quot;引用，表示解析到的第几个值给 token，图 4 中的正则表达式如下：</p></li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;accesstoken&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;">(.</span><span style="color:#F97583;">+?</span><span style="color:#E1E4E8;">),</span><span style="color:#9ECBFF;">&quot;gender&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;">(.</span><span style="color:#F97583;">+?</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;accesstoken&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;">(.</span><span style="color:#D73A49;">+?</span><span style="color:#24292E;">),</span><span style="color:#032F62;">&quot;gender&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;">(.</span><span style="color:#D73A49;">+?</span><span style="color:#24292E;">)</span></span></code></pre></div><p>$1$ 表示匹配的第一个值，即 accesstoken 后匹配后的值，模板 $2$ 则匹配 gender 后的值。图 4 演示的实例中只有 1 个 token 值，所以使用的 $1$。</p><ul><li><strong>匹配数字</strong>：0 代表随机取值，1 代表第一个值。假设我返回数据的结构是：</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[{</span><span style="color:#9ECBFF;">&quot;accesstoken&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;ABDS88WDWHJEHJSHWJW&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;gender&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">},{ {</span><span style="color:#9ECBFF;">&quot;accesstoken&quot;</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;">&quot;NDJNW3U98SJWKISXIWN&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;gender&quot;</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">}]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[{</span><span style="color:#032F62;">&quot;accesstoken&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;ABDS88WDWHJEHJSHWJW&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;gender&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">},{ {</span><span style="color:#032F62;">&quot;accesstoken&quot;</span><span style="color:#D73A49;">:</span><span style="color:#032F62;">&quot;NDJNW3U98SJWKISXIWN&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;gender&quot;</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">}]</span></span></code></pre></div><p>此时提取结果是一个数组，accesstoken 对应了多个值相当于数组，1 代表匹配第一个 accsstoken 的值&quot;ABDS88WDWHJEHJSHWJW&quot;。</p><ul><li><strong>缺省值</strong>：正则匹配失败时的取值。比如这里我设置的是 null（token 值取不到时就会用 null 代替）。上面我们已经匹配了 token 值，在被测接口传参处直接用&quot;${token}&quot;就可以了。</li></ul>',9),g=s("p",null,"图 5：关联 Token",-1),d=s("p",null,"关联后就可以看到，每次都能进行正常的业务返回了。",-1),_=s("p",null,"图 6：关联后正常业务返回",-1),h=s("h3",{id:"总结",tabindex:"-1"},[o("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),B=s("p",null,"这一讲我介绍了参数化策略以及使用场景。作为性能测试中最常用到的操作，你不仅要学会基本操作，还需要思考参数化策略适合的场景以及参数化数据对性能测试的影响。说到这里，我就要问一个问题了：不同的参数对性能结果会不会有影响？",-1),D=s("p",null,"举个例子，在电商系统中，你准备了不同的用户数据，用户又分为不同的等级，不同的等级可能有不一样的优惠规则和对应的优惠券，每个会员的优惠券数量可能也不一样，那这些不同的会员信息分布会对性能测试的结果有什么样的的影响？欢迎在评论区给出你的思考。",-1),A=s("p",null,"下一讲，我将带你了解如何执行有效的性能测试脚本，和你聊聊在脚本构建与执行过程当中可能存在的不规范的地方以及它们的解决方案。",-1);function m(k,S,b,v,T,J){const a=l("Image");return e(),r("div",null,[u,n(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/8D/2C/Ciqc1F_7uM2AMFOoAAFcsKt5GDc012.png"}),o(),y,n(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/8D/37/CgqCHl_7uN-ALfhLAADCt_4kBrI773.png"}),o(),q,F,E,n(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/8D/2C/Ciqc1F_7uOaACU7pAACyoK2kugg837.png"}),o(),i,n(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image2/M01/05/12/Cip5yF_7uPGATVcpAABwbh3j2xc538.png"}),o(),C,n(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image2/M01/05/14/CgpVE1_7uPyAFTS7AAAim7aU0H8431.png"}),o(),g,d,n(a,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image2/M01/05/14/CgpVE1_7uQWAYQQjAAIhTkpdTuc704.png"}),o(),_,h,B,D,A])}const N=p(c,[["render",m]]);export{P as __pageData,N as default};
