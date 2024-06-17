import{_ as p,F as l,g as h,K as t,h as i,ar as n,l as s,o as e}from"./chunks/framework.VlluEs-f.js";const H=JSON.parse('{"title":"13如何分析和调优性能瓶颈？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/107-前端面试宝典之 React篇文档/(5803) 13  如何分析和调优性能瓶颈？.md","filePath":"posts/frontEnd/107-前端面试宝典之 React篇文档/(5803) 13  如何分析和调优性能瓶颈？.md","lastUpdated":1718371218000}'),r={name:"posts/frontEnd/107-前端面试宝典之 React篇文档/(5803) 13  如何分析和调优性能瓶颈？.md"},o=n('<h1 id="_13如何分析和调优性能瓶颈" tabindex="-1">13如何分析和调优性能瓶颈？ <a class="header-anchor" href="#_13如何分析和调优性能瓶颈" aria-label="Permalink to &quot;13如何分析和调优性能瓶颈？&quot;">​</a></h1><p>如何做性能优化是一个老生常谈的问题了，但很多同学还是不能答到点儿上。所以这讲，我将为你讲解&quot;如何分析和调优性能瓶颈&quot;，这个面试题该如何回答。</p><h3 id="破题" tabindex="-1">破题 <a class="header-anchor" href="#破题" aria-label="Permalink to &quot;破题&quot;">​</a></h3><p>做优化应该是一个<strong>有指标</strong> 、<strong>有比较</strong> 、<strong>有数据</strong>的过程，就和上一讲我们提到的一样：做工程，应该有调研、有方案、有结果。而很多同学只是回答自己做了方案，比如说自己拆了包、做了懒加载等，对于为什么要这样做，做了有什么收益完全讲不清楚。</p><p>这主要是<strong>缺乏基准测试</strong>，即没能建立起衡量当前性能指标的基线。比如，一个前端页面从打开到完全可用需要耗费 3 秒：</p><ul><li><p>这对于 C 端而言是无法接受的；</p></li><li><p>而对于管理后台而言，这样的加载速度是可以接受的。</p></li></ul><p>所以在没有衡量标准的情况下，你很难解释清楚为什么要做优化，优化的收益在哪里。</p><p>其实一个问题的解决方案的逻辑应该是自洽的，方案也不是只有代码，并不能把代码等同于你的工作。一个完整的解决方案应该是<strong>说清楚标准</strong> ，<strong>讲清楚缘由</strong> ，<strong>理清楚过程</strong> ，<strong>算清楚结果</strong> ，最后用<strong>数据与收益来说明你的工作成果</strong>。</p>',8),k=n('<h3 id="审题" tabindex="-1">审题 <a class="header-anchor" href="#审题" aria-label="Permalink to &quot;审题&quot;">​</a></h3><p>整理以上的思路可以得到这样一个答题流程。</p><ul><li><p><strong>建立衡量标准</strong> ，这样可以为优化后计算收益提供指标。衡量标准应该是可量化的，所以要制定可量化的指标。在确认指标之后，还需要有<strong>量化基础</strong> ，有<strong>数据积累</strong>，那么就需要考虑如何进行数据采集。</p></li><li><p><strong>确认优化原因</strong>：有了数据基础后，还需要根据实际场景分析优化能转化多少价值，确认是否需要优化。</p></li><li><p><strong>实施方案</strong>：在有了优化点以后，需要制定具体的提升方案并实施。</p></li><li><p><strong>计算收益</strong>：在优化方案实施后，需要通过数据描述收益效果。</p></li></ul>',3),g=n('<p>那接下来我们就将&quot;衡量、排查、实施、收益&quot;四个过程展开聊一聊。</p><h3 id="入手" tabindex="-1">入手 <a class="header-anchor" href="#入手" aria-label="Permalink to &quot;入手&quot;">​</a></h3><h4 id="衡量" tabindex="-1">衡量 <a class="header-anchor" href="#衡量" aria-label="Permalink to &quot;衡量&quot;">​</a></h4><p><strong>理论基础</strong></p><p>分析调优的第一步是要知道问题出在哪儿？就好比看病得先找到病灶。找病灶就需要先体检，看指标，才能找到病因，然后对症下药。</p><p>在前端项目中，有开发经验的同学一定有过这样的经历：用户反馈页面慢、页面卡。但用户反馈的慢、卡与开发人员理解的慢、卡是不一样的。我就曾经遇到过这样的用户反馈，他认为每次操作时出现的 Loading 提示都是页面卡的表现，所以他认为整个系统完全没法用。还有的用户会把后端 API 响应慢，认为是网页慢，要求前端工程师去做优化。以上的例子说明，在没有对齐标准的情况下，你很难发现真正的问题在哪儿？那么怎么建立一个标准呢？不妨看看业界是怎么做的？</p><p>Google 的 DoubleClick 小组做过一个研究，证明了网页性能在一定程度上影响用户留存率。他们的研究显示，如果一个移动端页面加载时长超过 3 秒，用户就会放弃而离开。这很有意思，结论非常简单，却是可量化的。</p><p>显然，<strong>数字</strong>在沟通上具有降低理解成本、加强印象的魔力，可以说没有比这更好的表达方式了。在此基础上，Google 的 Chrome 小组进一步提出了以用户为核心的 RAIL 模型，用更多的数字维度去阐释网页性能。</p><p>RAIL 指响应（Response）、动画（Animation）、浏览器空闲时间（Idle）、加载（Load）四个方面。</p><ul><li><p>响应：应在 50 毫秒内完成事件处理并反馈给用户；</p></li><li><p>动画：10 毫秒内生成一帧；</p></li><li><p>浏览器空闲时间：最大化利用浏览器空闲时间；</p></li><li><p>加载：在 5 秒内完成页面资源加载且使页面可交互。</p></li></ul><p><strong>衡量工具</strong></p><p>有了标准就要有测量的工具，总不能用肉眼比对吧？Chrome 团队在理论基础上，又进一步提出了名为 Lighthouse 的测量工具。</p><p>Lighthouse 内置在 Chrome 中，开启<strong>开发者工具</strong>就可以找到它。如下图所示：</p>',13),E=s("p",null,[i("这个工具用起来也很简单，点击"),s("strong",null,"generate report"),i("，就可以直接生成一份网站性能报告。如下图所示：")],-1),d=s("p",null,"在报告中会对诸如初次内容渲染、可交互时间、加载等进行具体的数值量化并打分，最后还会为整体性能给出一个总体的分数，如下图所示，这里是 79 分。",-1),c=s("ul",null,[s("li",null,[s("p",null,"黄色代表当前处于一个用户尚可接受的状态；")]),s("li",null,[s("p",null,"绿色就代表了表现优异。")])],-1),_=s("p",null,"那么拉到最底部会有如何优化当前性能指标的指导意见。整份报告不仅包含了当前页面的性能数据，还囊括了最佳实践指南，对于前端开发是非常有指导意义的。如下图所示：",-1),y=n(`<p>那么既然有了 Lighthouse，照着工具去优化不就完事了吗？道理似乎是这样，但有一个问题需要回答，Lighthouse 是否能反应用户的真实情况呢？</p><p><strong>真实情况</strong></p><p>作为一个程序员，我们都经历过这样一种情况，QA 不断强调他的电脑打开页面很慢，而你在自己的电脑上通过不断刷新网页证明了加载速度很快。同一个页面在不同的环境下，是否存在性能差异？那么是否需要根据不同的网络环境、不同的浏览器单独衡量呢？</p><p>其次是开篇提到的一个问题，对于管理后台而言，需要对标 C 端的加载速度吗？那显然是不需要的。</p><p>从以上场景可以看出：</p><ul><li><p>Lighthouse 并不能真实地反映出每个用户的设备的实际性能数据；</p></li><li><p>Lighthouse 的分数反应的是业界的标准，而非项目实际需求的标准。</p></li></ul><p>基于以上原因，我们需要自行完成性能指标的采集。一般在大厂，公司相关基建比较成熟，有现成的工具可以直接使用。如果没有呢，你可以考虑使用网页 APM 工具：</p><ul><li><p>其中国际上比较老牌的就是 New Relic，做了很多年，实力十分强悍；</p></li><li><p>国内的话可以直接考虑使用阿里云的 ARMS，建议你可以看下它的<a href="https://help.aliyun.com/document_detail/170905.html?spm=a2c4g.11186623.6.633.281f29ddxOQN8g" target="_blank" rel="noreferrer">开发文档</a>，有个基本概念，或者用开源项目自建。</p></li></ul><p>但我个人并不太推荐使用开源项目自行搭建，因为数据的采集和处理都会消耗相当多的服务器资源，与成熟的产品服务相比，不管是投入的人力还是服务器运维成本都会更高。</p><p>无论是什么工具，它们都会对齐 Lighthouse 这样一个业界标准，所以完全不用担心指标会有差异，这是业界公认的一件事。所以在面试中，指标及指标的采集方式也会是一个考点。</p><p><strong>采集过程</strong></p><p>以阿里云的 ARMS 为例，采集通常是由一个 JavaScript SDK 完成的，就像下面这样一个在 script 标签中引入 bl.js 的示例一样：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(c,b,d,a){c[a]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(c[a]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{});c[a].config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{pid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,appType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">undefined,imgUrl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://arms-retcode.aliyuncs.com/r.png?&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, uid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;xxxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(body)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">insertBefore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),firstChild))</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;crossorigin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})(window,document,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://retcode.alicdn.com/retcode/bl.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;__bl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>接着就是做<strong>指标采集工作</strong>。指标需要根据业界发展与业务需求去增减或者修改，所以经常会有变化，常用的指标一般有以下几个。</p><ul><li><strong>FCP</strong> （First Contentful Paint），<strong>首次绘制内容的耗时</strong> 。首屏统计的方式一直在变，起初是通过记录 window.performance.timing 中的 domComplete 与 domLoading 的时间差来完成，但这并不具备交互意义，现在通常是记录<strong>初次加载</strong> 并<strong>绘制内容</strong>的时间。</li></ul>`,15),u=n(`<ul><li><p><strong>TTI</strong> （Time to Interact），<strong>是页面可交互的时间</strong>。通常通过记录 window.performance.timing 中的 domInteractive 与 fetchStart 的时间差来完成。</p></li><li><p><strong>Page Load</strong> ，<strong>页面完全加载时间</strong>。通常通过记录 window.performance.timing 中的 loadEventStart 与 fetchStart 的时间差来完成。</p></li><li><p><strong>FPS</strong> ，<strong>前端页面帧率</strong>。通常是在主线程打点完成记录。其原理是 requestAnimationFrame 会在页面重绘前被调用，而 FPS 就是计算两次之间的时间差。</p></li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">let lastTime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> performance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">let frame </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">let lastFameTime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> performance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> loop </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (time) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> now </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> performance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lastFameTime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> now</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    frame</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (now </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lastTime) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        let fps </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(frame </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (( now </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lastTime ) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        frame </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        lastTime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> now</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fps)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">requestAnimationFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(loop) </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><strong>静态资源</strong> 及<strong>API 请求成功率</strong>。通常是通过 window.performance.getEntries( ) 来获取相关信息。</li></ul>`,3),F=s("p",null,"以上就是衡量的理论基础、指标体系与采集方式，那么接下来看一下如何优化。",-1),m=s("h4",{id:"排查",tabindex:"-1"},[i("排查 "),s("a",{class:"header-anchor",href:"#排查","aria-label":'Permalink to "排查"'},"​")],-1),A=s("p",null,[i("优化最难的地方在于"),s("strong",null,"定目标"),i("。")],-1),C=s("p",null,"制定目标有一个前提，对象是谁？很多应聘者在描述优化的时候，喜欢讲页面在优化方案下，快了多少倍。正如前文所分析的，这是不准确的。如果我们要提升网页的加载速度，应该把关注点放在整个用户群，而不是只有自己。",-1),T=s("p",null,"我们不妨假设，现在已经收集到了用户页面的性能数据，比如 FCP 的数据是 1 秒，3 秒，4 秒，6 秒，7 秒，8 秒，65 秒。那提升性能就是去提升他的平均数值吗？平均数约 39 秒，并不能反映整体情况。如下图所示。",-1),P=n('<p>在性能监控中有一个概念叫<strong>TP</strong>（Top Percentile），比如 TP50、TP90、TP99 和 TP999 等指标，指高于 50%、90%、99% 等百分线的情况。如 TP50 就意味着，50% 的用户打开页面绘制内容的时间不超过 6 秒，90%的用户不超过 8 秒。如果要提升 FCP，那么就需要提升 TP 50、TP90、TP999 下的数据，这才是有正确方向的目标。</p><p>其次就是场景，如果是 2C 的页面，那么 FCP、TTI、FPS、Page Load、静态资源及 API 请求成功率等几个指标都很重要，会直接影响<strong>关键业务的转化率</strong>，而管理后台，更关注的是使用起来功能是否完整，运行是否流畅，对加载速度并没有很高的要求，所以通常只对 FPS 、静态资源及 API 请求成功率这三个指标更为关注。显然，指标的选择取决于你的业务形态。</p><p>这样对于优化大致就有一个落脚点了，接下来就可以探讨如何做实施工作了。</p><h4 id="实施" tabindex="-1">实施 <a class="header-anchor" href="#实施" aria-label="Permalink to &quot;实施&quot;">​</a></h4><p>这部分拿 FCP、TTI、Page Load、FPS、静态资源及 API 请求成功率这六个指标来进行讲解。</p><p><strong>FCP</strong></p><p>回到 React 的角度来看，加载一个 React 页面，通常是从白屏到直接显示内容。那么如果白屏时间很长，用户可能会流失，就需要在<strong>页面上绘制内容</strong>，给出一些反馈。</p><p>最早的优化方案是绘制一个<strong>Loading</strong>图标，写死在 HTML 的 CSS 里，等 JS 开始执行的时候再移除它。</p><p>后来有了<strong>骨架屏</strong>的概念，如下面 Facebook 的网页显示。在内容还没有就绪的时候，先通过渲染骨架填充页面，给予用户反馈。</p>',9),D=n('<p>还有一种解决方案是<strong>SSR</strong>，也就是走服务端渲染路线，常用的方案有 next.js 等。</p><p><strong>TTI</strong></p><p>TTI 在实现上，可以优先加载让用户关注的内容，让用户先用起来。策略上主要是将<strong>异步加载</strong> 与<strong>懒加载</strong>相结合。比如：</p><ul><li><p><strong>核心内容</strong>在 React 中同步加载；</p></li><li><p><strong>非核心内容</strong>采取异步加载的方式延迟加载</p></li><li><p><strong>内容中的图片</strong>采用懒加载的方式避免占用网络资源。</p></li></ul><p><strong>Page Load</strong></p><p><strong>页面完整加载时间</strong>同样可以通过异步加载的方式完成。异步加载主要由 Webpack 打包 common chunk 与异步组件的方式完成。</p><p><strong>FPS</strong></p><p>FPS 主要代表了卡顿的情况，在 React 中引起卡顿的主要原因有<strong>长列表</strong> 与<strong>重渲染</strong>。长列表的解决方案很成熟，直接使用 react-virtualized 或者 react-window 就可以，相关的原理你可以自行学习；重渲染的问题比较复杂，下一讲我会详细讲解。</p><p><strong>静态资源及 API 请求成功率</strong></p><p>静态资源及 API 请求成功率的统计是非常有意义的。两者都有可能出现在用户的机器上失败，但在自己的电脑上毫无问题的情况。导致这个问题的原因千奇百怪。</p><ul><li><p>你是直接从前端服务器拉取 JS 与 CSS 资源，还是从 CDN 拉取的？</p></li><li><p>解析 CDN 与 API 域名存在失败的情况。</p></li><li><p>运营商对静态资源及 API 请求做了篡改，导致请求失败。</p></li></ul><p>那怎么解决这些问题呢？</p><ul><li><p>对于静态资源而言，能用 CDN 就用 CDN，可以大幅提升静态资源的成功率。</p></li><li><p>如果域名解析失败，就可以采取静态资源域名自动切换的方案；还有一个简单的方案是直接寻求 SRE 的协助。</p></li><li><p>如果有运营商对内容做了篡改，我推荐使用 HTTPS。</p></li></ul><h4 id="收益" tabindex="-1">收益 <a class="header-anchor" href="#收益" aria-label="Permalink to &quot;收益&quot;">​</a></h4><p><strong>技术必须服务于业务</strong>，否则就只是技术团队的自嗨。</p><p>所以从技术角度讲收益，需要从业务实际效益出发。就像开篇所说的：&quot;如果一个移动端页面加载时长超过 3 秒，用户就会放弃而离开。&quot;那么将 TP999 从 5 秒优化到 3 秒以内，就可以得出具体的用户转化率数据。这样的技术优化才是对公司有帮助的。</p><h3 id="答题" tabindex="-1">答题 <a class="header-anchor" href="#答题" aria-label="Permalink to &quot;答题&quot;">​</a></h3><p>接下来我将用本文讲到的方案进行回答。</p><blockquote><p>我负责的业务是 CRM 管理后台，用户付费进入操作使用，有一套非常标准的业务流程。在我做完性能优化后，整个付费率一下提升了 17%，效果还可以。</p><p>前期管理后台的基础性能数据是没有的，我接手后接入了一套 APM 工具，才有了基础的性能数据。然后我对指标观察了一周多，思考了业务形态，发现其实用户对后台系统的加载速度要求并不高，但对系统的稳定性要求比较高。我也发现静态资源的加载成功率并不高，TP99 的成功率大约在 91%，这是因为静态资源直接从服务器拉取，服务器带宽形成了瓶颈，导致加载失败。我对 Webpack 的构建工作流做了改造，支持发布到 CDN，改造后 TP99 提升到了 99.9%。</p></blockquote>',19),S=s("h3",{id:"总结",tabindex:"-1"},[i("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),f=s("p",null,"本文中 React 相关的内容偏少，因为在做页面性能优化的工作时，无论你采用什么前端框架，工作流程都是一样的。需要结合业务形态与指标数据去思考要优化哪些指标，如果不优化是否可行。在实施部分，大致讲解了每个指标对应 React 的优化情况，因为方案都很成熟，所以你可以根据方案自行学习，了解下原理与使用方式。",-1),q=s("p",null,"其中重渲染是一个比较麻烦且容易出错的点，所以在下一讲中，将会着重为你介绍重渲染应该如何处理。",-1),b=s("hr",null,null,-1),w=s("p",null,"[",-1),I=s("p",null,[i("]("),s("a",{href:"https://shenceyun.lagou.com/t/mka",target:"_blank",rel:"noreferrer"},"https://shenceyun.lagou.com/t/mka"),i(")")],-1),B=s("p",null,"《大前端高薪训练营》",-1),R=s("p",null,[i("对标阿里 P7 技术需求 + 每月大厂内推，6 个月助你斩获名企高薪 Offer。"),s("a",{href:"https://shenceyun.lagou.com/t/mka",target:"_blank",rel:"noreferrer"},"点击链接"),i("，快来领取！")],-1);function x(V,v,M,N,L,K){const a=l("Image");return e(),h("div",null,[o,t(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/8D/1B/CgqCHl_4K1eAAyQ-AAVO-To5VrY635.png"}),i(),k,t(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image2/M01/04/F5/CgpVE1_4K3WAQsx2AABVF04Sf88136.png"}),i(),g,t(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image2/M01/04/F3/Cip5yF_4K36Ad8MHAAP1tzHogqo025.png"}),i(),E,t(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image2/M01/04/F3/Cip5yF_4K4aAD3mGAAIwDdtSdf8416.png"}),i(),d,c,t(a,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image2/M01/04/F3/Cip5yF_4K4yAS_SKAADzp2WYeSU530.png"}),i(),_,t(a,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image2/M01/04/F5/CgpVE1_4K5OAbK2ZAAG2eSCinqo569.png"}),i(),y,t(a,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image2/M01/04/F3/Cip5yF_4K6GARjEsAAuceJPXFwY692.png"}),i(),u,t(a,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image2/M01/04/F5/CgpVE1_4K6uASH1fAAZm3Bzlmfw212.png"}),i(),F,m,A,C,T,t(a,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image2/M01/04/F5/CgpVE1_4K7SAemzIAACEViAQCRo609.png"}),i(),P,t(a,{alt:"Drawing 11.png",src:"https://s0.lgstatic.com/i/image/M00/8D/10/Ciqc1F_4K7-AJ-lmAADn8menSCY047.png"}),i(),D,t(a,{alt:"Drawing 13.png",src:"https://s0.lgstatic.com/i/image/M00/8D/1B/CgqCHl_4K8yAe3vEAAFTO9lc9-k604.png"}),i(),S,f,q,b,w,t(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/72/94/Ciqc1F_EZ0eANc6tAASyC72ZqWw643.png"}),i(),I,B,R])}const J=p(r,[["render",x]]);export{H as __pageData,J as default};
