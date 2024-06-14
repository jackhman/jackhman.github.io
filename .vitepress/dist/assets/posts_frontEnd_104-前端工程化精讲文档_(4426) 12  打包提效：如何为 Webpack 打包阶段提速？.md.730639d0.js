import{_ as o,D as e,o as t,g as r,J as a,h as s,Q as l,m as p}from"./chunks/framework.f67d7268.js";const T=JSON.parse('{"title":"12打包提效：如何为Webpack打包阶段提速？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/104-前端工程化精讲文档/(4426) 12  打包提效：如何为 Webpack 打包阶段提速？.md","filePath":"posts/frontEnd/104-前端工程化精讲文档/(4426) 12  打包提效：如何为 Webpack 打包阶段提速？.md","lastUpdated":1696682708000}'),c={name:"posts/frontEnd/104-前端工程化精讲文档/(4426) 12  打包提效：如何为 Webpack 打包阶段提速？.md"},E=l(`<h1 id="_12打包提效-如何为webpack打包阶段提速" tabindex="-1">12打包提效：如何为Webpack打包阶段提速？ <a class="header-anchor" href="#_12打包提效-如何为webpack打包阶段提速" aria-label="Permalink to &quot;12打包提效：如何为Webpack打包阶段提速？&quot;">​</a></h1><p>上节课我们聊了 Webpack 构建流程中第一阶段，也就是编译模块阶段的提效方案，这些方案可以归为三个不同的优化方向。不知道大家课后有没有对照分析自己在项目里用到了其中的哪些方案呢？</p><p>今天我们就来继续聊聊 Webpack 构建流程中的第二个阶段，也就是从代码优化到生成产物阶段的效率提升问题（这节课的示例代码参照 <a href="https://github.com/fe-efficiency/lessons_fe_efficiency/tree/master/12_optimize_efficiency" target="_blank" rel="noreferrer">[12_optimize_efficiency]</a>）。</p><h3 id="准备分析工具" tabindex="-1">准备分析工具 <a class="header-anchor" href="#准备分析工具" aria-label="Permalink to &quot;准备分析工具&quot;">​</a></h3><p>同上节课一样，在分析优化阶段的提效方案之前，我们还是需要先来准备一个分析统计时间的工具。但不同的是，在优化阶段对应的生命周期 Hooks 有很多（参照第 10 讲中的内容）。因此在编写统计插件时，我们要将需要统计的 Hooks 划分为不同区间，如下面的代码所示：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">WebpackTimingPlugin.js:</span></span>
<span class="line"><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">lifeHooks</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;optimizeDependencies&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    start: </span><span style="color:#9ECBFF;">&#39;optimizeDependencies&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    end: </span><span style="color:#9ECBFF;">&#39;afterOptimizeDependencies&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;createChunks&#39;</span><span style="color:#E1E4E8;">, start: </span><span style="color:#9ECBFF;">&#39;beforeChunks&#39;</span><span style="color:#E1E4E8;">, end: </span><span style="color:#9ECBFF;">&#39;afterChunks&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> startTime</span></span>
<span class="line"><span style="color:#E1E4E8;">compilation.hooks[start].</span><span style="color:#B392F0;">tap</span><span style="color:#E1E4E8;">(PluginName, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  startTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">compilation.hooks[end].</span><span style="color:#B392F0;">tap</span><span style="color:#E1E4E8;">(PluginName, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">cost</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`[Step \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}] costs: \${</span><span style="color:#E1E4E8;">chalk</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">red</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">cost</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">WebpackTimingPlugin.js:</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">lifeHooks</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;optimizeDependencies&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    start: </span><span style="color:#032F62;">&#39;optimizeDependencies&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    end: </span><span style="color:#032F62;">&#39;afterOptimizeDependencies&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  { name: </span><span style="color:#032F62;">&#39;createChunks&#39;</span><span style="color:#24292E;">, start: </span><span style="color:#032F62;">&#39;beforeChunks&#39;</span><span style="color:#24292E;">, end: </span><span style="color:#032F62;">&#39;afterChunks&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> startTime</span></span>
<span class="line"><span style="color:#24292E;">compilation.hooks[start].</span><span style="color:#6F42C1;">tap</span><span style="color:#24292E;">(PluginName, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  startTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Date.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">compilation.hooks[end].</span><span style="color:#6F42C1;">tap</span><span style="color:#24292E;">(PluginName, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">cost</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Date.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> startTime</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`[Step \${</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}] costs: \${</span><span style="color:#24292E;">chalk</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">red</span><span style="color:#032F62;">(</span><span style="color:#24292E;">cost</span><span style="color:#032F62;">)</span><span style="color:#032F62;">}ms\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span></code></pre></div><p>使用后的效果如下图所示：</p>`,7),i=p("p",null,"通过这样的插件，我们可以分析目前项目中的效率瓶颈，从而进一步为选取优化方案及评估方案效果提供依据。",-1),y=p("h3",{id:"优化阶段效率提升的整体分析",tabindex:"-1"},[s("优化阶段效率提升的整体分析 "),p("a",{class:"header-anchor",href:"#优化阶段效率提升的整体分析","aria-label":'Permalink to "优化阶段效率提升的整体分析"'},"​")],-1),g=p("p",null,'在"第 10 课时|流程分解：Webpack 的完整构建流程"中，我们提到了下面的这张图。如图所示，整个优化阶段可以细分为 12 个子任务，每个任务依次对数据进行一定的处理，并将结果传递给下一任务：',-1),h=l('<p>因此，这一阶段的优化也可以分为两个不同的方向：</p><ol><li><p>针对某些任务，使用效率更高的工具或配置项，从而<strong>提升当前任务的工作效率</strong>。</p></li><li><p>提升特定任务的优化效果，以减少传递给下一任务的数据量，从而<strong>提升后续环节的工作效率</strong>。</p></li></ol><h3 id="以提升当前任务工作效率为目标的方案" tabindex="-1">以提升当前任务工作效率为目标的方案 <a class="header-anchor" href="#以提升当前任务工作效率为目标的方案" aria-label="Permalink to &quot;以提升当前任务工作效率为目标的方案&quot;">​</a></h3><p>一般在项目的优化阶段，主要耗时的任务有两个：一个是生成 ChunkAssets，即根据 Chunk 信息<strong>生成 Chunk 的产物代码</strong> ；另一个是优化 Assets，即<strong>压缩 Chunk 产物代码</strong>。</p><p>第一个任务主要在 Webpack 引擎内部的模块中处理，相对而言优化手段较少，主要集中在利用缓存方面，具体将在下节课中讨论。而在压缩 Chunk 产物代码的过程中会用到一些第三方插件，选择不同的插件，以及插件中的不同配置都可能会对其中的效率产生影响。</p><p>这节课我们重点来看压缩代码的优化方案。</p><h4 id="面向-js-的压缩工具" tabindex="-1">面向 JS 的压缩工具 <a class="header-anchor" href="#面向-js-的压缩工具" aria-label="Permalink to &quot;面向 JS 的压缩工具&quot;">​</a></h4><p>Webpack 4 中内置了 <a href="https://www.npmjs.com/package/terser-webpack-plugin" target="_blank" rel="noreferrer">TerserWebpackPlugin</a> 作为默认的 JS 压缩工具，之前的版本则需要在项目配置中单独引入，早期主要使用的是 <a href="https://www.npmjs.com/package/uglifyjs-webpack-plugin" target="_blank" rel="noreferrer">UglifyJSWebpackPlugin</a>。这两个 Webpack 插件内部的压缩功能分别基于 <a href="https://www.npmjs.com/package/terser" target="_blank" rel="noreferrer">Terser</a> 和 <a href="https://github.com/mishoo/UglifyJS2" target="_blank" rel="noreferrer">UglifyJS</a>。</p><p>从<a href="https://github.com/babel/minify#benchmarks" target="_blank" rel="noreferrer">第三方的测试结果</a>看，两者在压缩效率与质量方面差别不大，但 Terser 整体上略胜一筹。</p><p>从本节课示例代码的运行结果（npm run build:jscomp）来看，如下面的表格所示，在不带任何优化配置的情况下，3 个测试文件的构建结果都是 Terser 效果更好。</p>',10),F=l(`<p><strong>Terser 和 UglifyJS 插件中的效率优化</strong></p><p><a href="https://github.com/terser/terser" target="_blank" rel="noreferrer">Terser</a> 原本是 Fork 自 uglify-es 的项目（Fork 指从开源项目的某一版本分离出来成为独立的项目），其绝大部分的 API 和参数都与 uglify-es 和 uglify-js@3 兼容。因此，两者对应参数的作用与优化方式也基本相同，这里就以 Terser 为例来分析其中的优化方向。</p><p>在作为 Webpack 插件的 TerserWebpackPlugin 中，对执行效率产生影响的配置主要分为 3 个方面：</p><ol><li><p><strong>Cache 选项</strong>：默认开启，使用缓存能够极大程度上提升再次构建时的工作效率，这方面的细节我们将在下节课中展开讨论。</p></li><li><p><strong>Parallel 选项</strong>：默认开启，并发选项在大多数情况下能够提升该插件的工作效率，但具体提升的程度则因项目而异。在小型项目中，多进程通信的额外消耗可能会抵消其带来的益处。</p></li><li><p><strong>terserOptions 选项</strong> ：即 Terser 工具中的 <a href="https://github.com/terser/terser#minify-options" target="_blank" rel="noreferrer">minify 选项集合</a>。这些选项是对具体压缩处理过程产生影响的配置项。我们主要来看其中的<strong>compress</strong> 和<strong>mangle</strong>选项，不同选项的压缩结果如下面的代码所示：</p></li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//源代码./src/example-terser-opts.js</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HelloWorld</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">foo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;1234&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(HelloWorld, foo)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">HelloWorld</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">//默认配置项compress={}, mangle=true的压缩后代码</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">t</span><span style="color:#E1E4E8;">){</span><span style="color:#F97583;">!function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">e</span><span style="color:#E1E4E8;">(){console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(e,</span><span style="color:#9ECBFF;">&quot;1234&quot;</span><span style="color:#E1E4E8;">)}()}});</span></span>
<span class="line"><span style="color:#6A737D;">//compress=false的压缩后代码</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;">){</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">(){</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> e</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;1234&quot;</span><span style="color:#E1E4E8;">;console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(t,e)}</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;">()}});</span></span>
<span class="line"><span style="color:#6A737D;">//mangle=false的压缩代码</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">module</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">exports</span><span style="color:#E1E4E8;">){</span><span style="color:#F97583;">!function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HelloWorld</span><span style="color:#E1E4E8;">(){console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(HelloWorld,</span><span style="color:#9ECBFF;">&quot;1234&quot;</span><span style="color:#E1E4E8;">)}()}});</span></span>
<span class="line"><span style="color:#6A737D;">//compress=false，mangle=false的压缩后代码</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">module</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">exports</span><span style="color:#E1E4E8;">){</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HelloWorld</span><span style="color:#E1E4E8;">(){</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> foo</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;1234&quot;</span><span style="color:#E1E4E8;">;console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(HelloWorld,foo)}</span><span style="color:#B392F0;">HelloWorld</span><span style="color:#E1E4E8;">()}});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//源代码./src/example-terser-opts.js</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HelloWorld</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">foo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;1234&#39;</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(HelloWorld, foo)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">HelloWorld</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">//默认配置项compress={}, mangle=true的压缩后代码</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">,</span><span style="color:#E36209;">t</span><span style="color:#24292E;">){</span><span style="color:#D73A49;">!function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">e</span><span style="color:#24292E;">(){console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(e,</span><span style="color:#032F62;">&quot;1234&quot;</span><span style="color:#24292E;">)}()}});</span></span>
<span class="line"><span style="color:#6A737D;">//compress=false的压缩后代码</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">,</span><span style="color:#E36209;">r</span><span style="color:#24292E;">){</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">(){</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> e</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;1234&quot;</span><span style="color:#24292E;">;console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(t,e)}</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;">()}});</span></span>
<span class="line"><span style="color:#6A737D;">//mangle=false的压缩代码</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">module</span><span style="color:#24292E;">,</span><span style="color:#E36209;">exports</span><span style="color:#24292E;">){</span><span style="color:#D73A49;">!function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HelloWorld</span><span style="color:#24292E;">(){console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(HelloWorld,</span><span style="color:#032F62;">&quot;1234&quot;</span><span style="color:#24292E;">)}()}});</span></span>
<span class="line"><span style="color:#6A737D;">//compress=false，mangle=false的压缩后代码</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">module</span><span style="color:#24292E;">,</span><span style="color:#E36209;">exports</span><span style="color:#24292E;">){</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HelloWorld</span><span style="color:#24292E;">(){</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> foo</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;1234&quot;</span><span style="color:#24292E;">;console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(HelloWorld,foo)}</span><span style="color:#6F42C1;">HelloWorld</span><span style="color:#24292E;">()}});</span></span></code></pre></div><p>从上面的例子中可以看到：</p><ol><li><p><strong>compress 参数的作用</strong>是执行特定的压缩策略，例如省略变量赋值的语句，从而将变量的值直接替换到引入变量的位置上，减小代码体积。而当 compress 参数为 false 时，这类压缩策略不再生效，示例代码压缩后的体积从 1.16KB 增加到 1.2KB，对压缩质量的影响有限。</p></li><li><p><strong>mangle 参数的作用</strong>是对源代码中的变量与函数名称进行压缩，当参数为 false 时，示例代码压缩后的体积从 1.16KB 增加到 1.84KB，对代码压缩的效果影响非常大。</p></li></ol><p>在了解了两个参数对压缩质量的影响之后，我们再来看下它们对效率的影响。以上面表格中的 example-antd 为例，我制作了下面的表格进行对比：</p>`,8),m=l('<p>从结果中可以看到，当<strong>compress</strong> 参数为 false 时，压缩阶段的效率有明显提升，同时对压缩的质量影响较小。在需要对压缩阶段的效率进行优化的情况下，<strong>可以优先选择设置该参数</strong>。</p><h4 id="面向-css-的压缩工具" tabindex="-1">面向 CSS 的压缩工具 <a class="header-anchor" href="#面向-css-的压缩工具" aria-label="Permalink to &quot;面向 CSS 的压缩工具&quot;">​</a></h4><p>CSS 同样有几种压缩工具可供选择：<a href="https://www.npmjs.com/package/optimize-css-assets-webpack-plugin" target="_blank" rel="noreferrer">OptimizeCSSAssetsPlugin</a>（在 Create-React-App 中使用）、<a href="https://www.npmjs.com/package/@intervolga/optimize-cssnano-plugin" target="_blank" rel="noreferrer">OptimizeCSSNanoPlugin</a>（在 VUE-CLI 中使用），以及<a href="https://www.npmjs.com/package/css-minimizer-webpack-plugin" target="_blank" rel="noreferrer">CSSMinimizerWebpackPlugin</a>（2020 年 Webpack 社区新发布的 CSS 压缩插件）。</p><p>这三个插件在压缩 CSS 代码功能方面，都默认基于 <a href="https://cssnano.co/" target="_blank" rel="noreferrer">cssnano</a> 实现，因此在压缩质量方面没有什么差别。</p><p>在压缩效率方面，首先值得一提的是最新发布的 CSSMinimizerWebpackPlugin，它<strong>支持缓存和多进程</strong>，这是另外两个工具不具备的。而在非缓存的普通压缩过程方面，整体上 3 个工具相差不大，不同的参数结果略有不同，如下面的表格所示（下面结果为示例代码中 example-css 的执行构建结果）。</p>',5),d=l(`<blockquote><p>注：CSSMinimizerWebpackPlugin 中默认开启多进程选项 parallel，但是在测试示例较小的情况下，多进程的通信时间反而可能导致效率的降低。测试中关闭多进程选项后，构建时间明显缩短。</p></blockquote><p>从上面的表格中可以看到，三个插件的构建时间基本相近，在开启 sourceMap 的情况下 CSSMinimizerWebpackPlugin 的构建时间相对较长。但考虑到<strong>只有这一新发布的插件支持缓存和多进程</strong> 等对项目构建效率影响明显的功能，即使在压缩 CSS 的时间较长的情况下，还是<strong>推荐使用它</strong>。</p><h3 id="以提升后续环节工作效率为目标的方案" tabindex="-1">以提升后续环节工作效率为目标的方案 <a class="header-anchor" href="#以提升后续环节工作效率为目标的方案" aria-label="Permalink to &quot;以提升后续环节工作效率为目标的方案&quot;">​</a></h3><p>优化阶段的另一类优化方向是通过对本环节的处理减少后续环节处理内容，以便提升后续环节的工作效率。我们列举两个案例：Split Chunks（分包） 和 Tree Shaking（摇树）。</p><h4 id="split-chunks" tabindex="-1">Split Chunks <a class="header-anchor" href="#split-chunks" aria-label="Permalink to &quot;Split Chunks&quot;">​</a></h4><p><a href="https://webpack.js.org/guides/code-splitting/" target="_blank" rel="noreferrer">Split Chunks（分包）</a>是指在 Chunk 生成之后，将原先以入口点来划分的 Chunks 根据一定的规则（例如异步引入或分离公共依赖等原则），分离出子 Chunk 的过程。</p><p>Split Chunks 有诸多优点，例如有利于缓存命中（下节课中会提到）、有利于运行时的持久化文件缓存等。其中有一类情况能提升后续环节的工作效率，即通过分包来抽离多个入口点引用的公共依赖。我们通过下面的代码示例（npm run build:split）来看一下。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">.</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">src</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">example</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">split1.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { slice } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;lodash&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;slice&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]))</span></span>
<span class="line"><span style="color:#E1E4E8;">.</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">src</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">example</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">split2.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { join } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;lodash&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;join&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">], [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">]))</span></span>
<span class="line"><span style="color:#E1E4E8;">.</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">webpack.split.config.js</span></span>
<span class="line"><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#B392F0;">optimization</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">splitChunks</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">chunks</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;all&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">.</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">src</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">example</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">split1.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { slice } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;lodash&#39;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;slice&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]))</span></span>
<span class="line"><span style="color:#24292E;">.</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">src</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">example</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">split2.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { join } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;lodash&#39;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;join&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">], [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">]))</span></span>
<span class="line"><span style="color:#24292E;">.</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">webpack.split.config.js</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#6F42C1;">optimization</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">splitChunks</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">chunks</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;all&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span></code></pre></div><p>在这个示例中，有两个入口文件引入了相同的依赖包 lodash，在没有额外设置分包的情况下， lodash 被同时打入到两个产物文件中，在后续的压缩代码阶段耗时 1740ms。<strong>而在设置分包规则为 chunks:&#39;all&#39; 的情况下</strong>，通过分离公共依赖到单独的 Chunk，使得在后续压缩代码阶段，只需要压缩一次 lodash 的依赖包代码，从而减少了压缩时长，总耗时为 1036ms。通过下面两张图片也可以看出这样的变化。</p>`,9),k=l('<p>这里起作用的是 Webpack 4 中内置的 SplitChunksPlugin，该插件在 production 模式下默认启用。其默认的分包规则为 chunks: &#39;<strong>async</strong>&#39;，作用是分离动态引入的模块 (import(&#39;...&#39;))，在处理动态引入的模块时能够自动分离其中的公共依赖。</p><p>但是对于示例中多入口静态引用相同依赖包的情况，则<strong>不会处理分包。<strong>而设置为 chunks: &#39;<strong>all</strong>&#39;，则能够将所有的依赖情况都进行分包处理，从而减少了重复引入相同模块代码的情况。SplitChunksPlugin 的工作阶段是在</strong>optimizeChunks</strong>阶段（Webpack 4 中是在 optimizeChunksAdvanced，在 Webpack 5 中去掉了 basic 和 advanced，合并为 optimizeChunks），而压缩代码是在 optimizeChunkAssets 阶段，从而起到提升后续环节工作效率的作用。</p><h4 id="tree-shaking" tabindex="-1">Tree Shaking <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;Tree Shaking&quot;">​</a></h4><p><a href="https://webpack.js.org/guides/tree-shaking/" target="_blank" rel="noreferrer">Tree Shaking（摇树）</a>是指在构建打包过程中，移除那些引入但未被使用的无效代码（Dead-code elimination）。这种优化手段最早应用于在 Rollup 工具中，而在 Webpack 2 之后的版本中， Webpack 开始内置这一功能。下面我们先来看一下 Tree Shaking 的例子，如下面的表格所示：</p>',4),u=l('<p>可以看到，引入不同的依赖包（lodash vs lodash-es）、不同的引入方式，以及是否使用 babel 等，都会对 Tree Shaking 的效果产生影响。下面我们就来分析具体原因。</p><ol><li><p><strong>ES6 模块</strong> ： 首先，只有 ES6 类型的模块才能进行Tree Shaking。因为 ES6 模块的依赖关系是确定的，因此可以进行不依赖运行时的<strong>静态分析</strong>，而 CommonJS 类型的模块则不能。因此，CommonJS 类型的模块 lodash，在无论哪种引入方式下都不能实现 Tree Shaking，而需要依赖第三方提供的插件（例如 babel-plugin-lodash 等）才能实现动态删除无效代码。而 ES6 风格的模块 lodash-es，则可以进行 Tree Shaking 优化。</p></li><li><p><strong>引入方式</strong>：以 default 方式引入的模块，无法被 Tree Shaking；而引入单个导出对象的方式，无论是使用 import * as xxx 的语法，还是 import {xxx} 的语法，都可以进行 Tree Shaking。</p></li><li><p><strong>sideEffects</strong>：在 Webpack 4 中，会根据依赖模块 package.json 中的 sideEffects 属性来确认对应的依赖包代码是否会产生副作用。只有 sideEffects 为 false 的依赖包（或不在 sideEffects 对应数组中的文件），才可以实现安全移除未使用代码的功能。在上面的例子中，如果我们查看 lodash-es 的 package.json 文件，可以看到其中包含了 &quot;sideEffects&quot;:false 的描述。此外，在 Webpack 配置的加载器规则和优化配置项中，分别有 rule.sideEffects（默认为 false）和 optimization.sideEffects（默认为 true）选项，前者指代在要处理的模块中是否有副作用，后者指代在优化过程中是否遵循依赖模块的副作用描述。尤其前者，常用于对 CSS 文件模块开启副作用模式，以防止被移除。</p></li><li><p><strong>Babel</strong> ：在 Babel 7 之前的<strong>babel-preset-env</strong> 中，modules 的默认选项为 &#39;<strong>commonjs</strong> &#39;，因此在使用 babel 处理模块时，即使模块本身是 ES6 风格的，也会在转换过程中，因为被转换而导致无法在后续优化阶段应用 Tree Shaking。而在 Babel 7 之后的 @babel/preset-env 中，modules 选项默认为 &#39;<strong>auto</strong>&#39;，它的含义是对 ES6 风格的模块不做转换（等同于 modules: false），而将其他类型的模块默认转换为 CommonJS 风格。因此我们会看到，后者即使经过 babel 处理，也能应用 Tree Shaking。</p></li></ol><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>这节课我们主要讨论了代码优化阶段效率提升的方向和方法。这一阶段的优化方向大致可分为两类：一类是以提升当前任务工作效率为目标的方案，这部分我们讨论了压缩 JS 时选择合适的压缩工具与配置优化项，以及压缩 CSS 时对优化工具的选择。另一类是以提升后续环节工作效率为目标的方案，这部分我们讨论了 splitChunks 的作用和配置项，以及应用 Tree Shaking 的一些注意事项。希望通过本节课的学习，帮助你加深对这一阶段 Webpack 处理逻辑的理解，也能够对其中的一些优化方式有更清晰的理解。</p><p>今天的<strong>课后思考题是</strong>：回忆 Tree Shaking 的触发条件有哪些？在自己所在的项目里观察试验一下，看看哪些依赖代码在构建时应用了 Tree Shaking 优化，是否存在应该生效但在打包结果中没有被正确移除的代码？</p>',5);function _(C,f,b,A,S,B){const n=e("Image");return t(),r("div",null,[E,a(n,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/51/1A/CgqCHl9kV6KAd5qDAACDxSy2vds191.png"}),s(),i,y,g,a(n,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/51/1A/CgqCHl9kV6qAUBvfAABnYGwsyYs441.png"}),s(),h,a(n,{alt:"Lark20200918-161929.png",src:"https://s0.lgstatic.com/i/image/M00/51/20/Ciqc1F9kbd6AZL4AAAA8akSVxH8499.png"}),s(),F,a(n,{alt:"Lark20200918-161934.png",src:"https://s0.lgstatic.com/i/image/M00/51/20/Ciqc1F9kbdCALcuwAABCdtCwxuY965.png"}),s(),m,a(n,{alt:"Lark20200918-161938.png",src:"https://s0.lgstatic.com/i/image/M00/51/2B/CgqCHl9kbb6AI7F5AABRRdbprbU989.png"}),s(),d,a(n,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/51/0F/Ciqc1F9kWAWANNLZAAGM4v1icLA197.png"}),s(),a(n,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/51/1B/CgqCHl9kWAqAELXZAAG5xisRryc225.png"}),s(),k,a(n,{alt:"Lark20200918-161943.png",src:"https://s0.lgstatic.com/i/image/M00/51/20/Ciqc1F9kbaqAUkjGAACmMR1PvL4711.png"}),s(),u])}const W=o(c,[["render",_]]);export{T as __pageData,W as default};
