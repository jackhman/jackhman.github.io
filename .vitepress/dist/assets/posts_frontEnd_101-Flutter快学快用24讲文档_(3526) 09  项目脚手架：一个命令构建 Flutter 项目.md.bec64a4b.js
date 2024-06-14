import{_ as e,D as o,o as t,g as c,J as a,h as n,Q as l,m as p}from"./chunks/framework.f67d7268.js";const C=JSON.parse('{"title":"09项目脚手架：一个命令构建Flutter项目","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/101-Flutter快学快用24讲文档/(3526) 09  项目脚手架：一个命令构建 Flutter 项目.md","filePath":"posts/frontEnd/101-Flutter快学快用24讲文档/(3526) 09  项目脚手架：一个命令构建 Flutter 项目.md","lastUpdated":1696682708000}'),r={name:"posts/frontEnd/101-Flutter快学快用24讲文档/(3526) 09  项目脚手架：一个命令构建 Flutter 项目.md"},i=l('<h1 id="_09项目脚手架-一个命令构建flutter项目" tabindex="-1">09项目脚手架：一个命令构建Flutter项目 <a class="header-anchor" href="#_09项目脚手架-一个命令构建flutter项目" aria-label="Permalink to &quot;09项目脚手架：一个命令构建Flutter项目&quot;">​</a></h1><p>在基础功能部分，我已经讲解了从基础到规范的应用，接下来我们进入项目实战部分。本课时将介绍项目基础框架，并且应用脚手架功能实现轻松的初始化项目。</p><h3 id="项目基础框架" tabindex="-1">项目基础框架 <a class="header-anchor" href="#项目基础框架" aria-label="Permalink to &quot;项目基础框架&quot;">​</a></h3><p>先看项目基础框架，我们将项目基础框架分为三个部分：核心代码部分、基础工具以及单元测试。</p><h4 id="核心代码" tabindex="-1">核心代码 <a class="header-anchor" href="#核心代码" aria-label="Permalink to &quot;核心代码&quot;">​</a></h4><p>核心代码主要是在 lib 目录下，我们将 lib 下的各个功能进行了整理，可以用图 1 来表示各个模块之间的关系。</p>',6),E=l("<p>图 1 lib 核心目录结构</p><ul><li><p>入口文件，main.dart 核心入口文件；</p></li><li><p>pages 作为具体的页面结构，可以通过 main.dart 直接加载，大部分还是通过 router.dart 进行跳转，pages 可以按照业务功能划分文件夹；</p></li><li><p>pages 下是各个组件组建而成，组件部分可以按照通用、基础和业务来划分；</p></li><li><p>组件中包含了样式、交互和数据三个部分，因此分别需要 styles 和 model 文件夹；</p></li><li><p>model 大部分数据来自服务端，因此需要一个 api 文件夹来与服务端交互；</p></li><li><p>类型校验部分贯穿整个项目，在 pages 、widgets 、 model 和 api 中都可能会被应用到。</p></li></ul><p>按照上面的划分，唯一需要注意的是，各个目录下的二级目录需要根据你们自身的业务功能去设计。因为业务模块不一定是一个页面，在项目初期就应该按照业务模块规划好目录结构，后期维护成本会降低很多，同时提升可扩展性。</p><p>例如 pages 需要三个页面，一个是首页内容，一个是用户个人信息页面，另外一个则是用户信息修改页面，那么我们可以按照表格 1 这样命名文件以及类。</p>",4),y=p("p",null,"表格 1 pages 业务划分目录结构",-1),d=p("p",null,"widgets 下则与 pages 目录结构保持一致即可，model 、api 以及 struct 则需要根据的服务端协议的业务功能来定义目录结构。使用上面的目录方式，我们创建出了如图 2 所示的一个结构，提供大家参考。",-1),h=l(`<p>图 2 项目目录结构示例</p><h4 id="基础工具" tabindex="-1">基础工具 <a class="header-anchor" href="#基础工具" aria-label="Permalink to &quot;基础工具&quot;">​</a></h4><p>按照我们前面课时所设计的一些基础规范，这里需要两个基础的工具 dartfmt 和 dartanalyzer。将这两个工具整合在一起，一个为 shell 脚本和一个为 bat 脚本，整合后的文件叫作 format_check.sh 和 format_check.bat，里面包含以下代码。</p><p>format_check.sh，该脚本主要适用于 Mac 系统和 Linux 系统。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="color:#6A737D;"># 代码美化</span></span>
<span class="line"><span style="color:#B392F0;">dartfmt</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-w</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--fix</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lib/</span></span>
<span class="line"><span style="color:#6A737D;"># 代码规范检查</span></span>
<span class="line"><span style="color:#B392F0;">dartanalyzer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lib</span></span>
<span class="line"><span style="color:#6A737D;"># 单元测试通过</span></span>
<span class="line"><span style="color:#B392F0;">flutter</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="color:#6A737D;"># 代码美化</span></span>
<span class="line"><span style="color:#6F42C1;">dartfmt</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-w</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--fix</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lib/</span></span>
<span class="line"><span style="color:#6A737D;"># 代码规范检查</span></span>
<span class="line"><span style="color:#6F42C1;">dartanalyzer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lib</span></span>
<span class="line"><span style="color:#6A737D;"># 单元测试通过</span></span>
<span class="line"><span style="color:#6F42C1;">flutter</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span></code></pre></div><p>format_check.bat，该脚本主要适用于 Windows 系统。</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dartfmt </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">w </span><span style="color:#6A737D;">--fix lib/</span></span>
<span class="line"><span style="color:#E1E4E8;">dartanalyzer lib</span></span>
<span class="line"><span style="color:#E1E4E8;">flutter test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dartfmt </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">w </span><span style="color:#6A737D;">--fix lib/</span></span>
<span class="line"><span style="color:#24292E;">dartanalyzer lib</span></span>
<span class="line"><span style="color:#24292E;">flutter test</span></span></code></pre></div><p>在项目开发阶段只需要通过该命令来运行，就可以确保我们的一些基础规范是满足的，其他逻辑部分还是需要各个团队自身的 Code Review。</p><h4 id="单元测试" tabindex="-1">单元测试 <a class="header-anchor" href="#单元测试" aria-label="Permalink to &quot;单元测试&quot;">​</a></h4><p>为了保证代码的健壮性，还需要生成对应的单元测试目录。针对上面的 lib 结构，我们生成对应的目录结构即可，唯一需要去掉的就是 styles 目录，例如，初始化的时候，我们对应生成下图 3 的目录层级结构。</p>`,10),g=l(`<p>图 3 单元测试目录结构</p><p>以上部分就是整个项目框架的基础结构，接下来我们将这个基础的项目结构做成一个框架模版，使用脚手架的方式统一来创建和运行。</p><h3 id="脚手架应用" tabindex="-1">脚手架应用 <a class="header-anchor" href="#脚手架应用" aria-label="Permalink to &quot;脚手架应用&quot;">​</a></h3><p>为了能够更好地体验，我们可以封装好这些一样的功能，开发出一个脚手架方式。前端同学会比较熟悉，将大部分初始化或者脚本化的功能统一封装成一个脚手架，通过脚手架执行项目的初始化。</p><h4 id="环境要求" tabindex="-1">环境要求 <a class="header-anchor" href="#环境要求" aria-label="Permalink to &quot;环境要求&quot;">​</a></h4><p>这里需要使用到 Node.js 和 npm 环境，如果是前端开发，应该已具备。如果是非前端开发或者未安装相应 Node.js 和 npm 环境的可以前往<a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer">官网下载安装</a>最新的版本即可。</p><h4 id="flutter-pro-cli" tabindex="-1">flutter-pro-cli <a class="header-anchor" href="#flutter-pro-cli" aria-label="Permalink to &quot;flutter-pro-cli&quot;">​</a></h4><p>flutter-pro-cli，该工具可以轻松帮你完成项目框架结构的初始化，在安装完成上面的运行环境后，在命令运行窗口，运行下面的命令。</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm install </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">g flutter</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">pro</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">cli</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm install </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">g flutter</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">pro</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">cli</span></span></code></pre></div><p>安装完成后，运行如下命令查看具体包含的功能。</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">flutter</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">pro</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">cli </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">h</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">flutter</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">pro</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">cli </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">h</span></span></code></pre></div><p>可以看到如下的窗口提示信息。</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Usage: flutter</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">pro</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">cli [options] [command]</span></span>
<span class="line"><span style="color:#E1E4E8;">Options:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">h, </span><span style="color:#6A737D;">--help      display help for command</span></span>
<span class="line"><span style="color:#E1E4E8;">Commands:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">init</span><span style="color:#E1E4E8;">|i          Generates new flutter project</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">check</span><span style="color:#E1E4E8;">|c         </span><span style="color:#F97583;">Check</span><span style="color:#E1E4E8;"> the project lib format</span></span>
<span class="line"><span style="color:#E1E4E8;">  run|r [check]   </span><span style="color:#F97583;">Check</span><span style="color:#E1E4E8;"> the project lib format </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> run</span></span>
<span class="line"><span style="color:#E1E4E8;">  sync</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">test|st    Generates new test </span><span style="color:#F97583;">path</span><span style="color:#E1E4E8;"> base </span><span style="color:#F97583;">on</span><span style="color:#E1E4E8;"> lib </span><span style="color:#F97583;">path</span></span>
<span class="line"><span style="color:#E1E4E8;">  help [command]  display help </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> command</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Usage: flutter</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">pro</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">cli [options] [command]</span></span>
<span class="line"><span style="color:#24292E;">Options:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">h, </span><span style="color:#6A737D;">--help      display help for command</span></span>
<span class="line"><span style="color:#24292E;">Commands:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">init</span><span style="color:#24292E;">|i          Generates new flutter project</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">check</span><span style="color:#24292E;">|c         </span><span style="color:#D73A49;">Check</span><span style="color:#24292E;"> the project lib format</span></span>
<span class="line"><span style="color:#24292E;">  run|r [check]   </span><span style="color:#D73A49;">Check</span><span style="color:#24292E;"> the project lib format </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> run</span></span>
<span class="line"><span style="color:#24292E;">  sync</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">test|st    Generates new test </span><span style="color:#D73A49;">path</span><span style="color:#24292E;"> base </span><span style="color:#D73A49;">on</span><span style="color:#24292E;"> lib </span><span style="color:#D73A49;">path</span></span>
<span class="line"><span style="color:#24292E;">  help [command]  display help </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> command</span></span></code></pre></div><ul><li><p><strong>init</strong>，该操作会初始化好目录结构，包含 lib 和 test 目录下，其次会生成一个比较简单的 main.dart 和 router.dart 文件，并将我们需要的 check_format.sh 、 check_format.bat 以及 analysis_options.yaml 这三个文件放在项目根目录下。</p></li><li><p><strong>check</strong>，该操作执行 check_format.sh 或者 check_format.bat 文件来美化代码结构，并检查当前项目的代码是否符合我们规范。</p></li><li><p><strong>run</strong>，启动运行项目，可以带 check 参数执行 check_format.sh 先校验是否符合规范，符合则启动，否则不启动项目。这里的 run 要注意，需要优先打开手机模拟器，不然无法启动。</p></li><li><p><strong>sync-test</strong>，同步测试代码结构，为了减少大家写单元测试的时间，脚手架提供了方法，可以读取你项目代码文件，并且添加了一个最基础的测试，其他部分则需要自己补充。</p></li></ul><p>我在实际项目开发过程中发现写测试用例确实挺麻烦，为了节省时间，可以针对性生成一些基础的测试代码用例，例如上面的 sync-test 会为我们创建好相应的目录结构，以及相应的测试代码文件。</p><h4 id="脚手架实现" tabindex="-1">脚手架实现 <a class="header-anchor" href="#脚手架实现" aria-label="Permalink to &quot;脚手架实现&quot;">​</a></h4><p>脚手架使用的是 Node.js 来实现的，大家可以参考 <a href="https://github.com/love-flutter/flutter-pro-cli" target="_blank" rel="noreferrer">gtihub 源码</a>，并在这基础上进行协同开发。由于使用的是 Node.js 来实现，这里就不过多介绍其实现原理，如果大家有兴趣可以进一步在 github 进行交流，希望共同完善这个脚手架。</p><h3 id="实战初始化" tabindex="-1">实战初始化 <a class="header-anchor" href="#实战初始化" aria-label="Permalink to &quot;实战初始化&quot;">​</a></h3><p>现在我们使用以上脚手架来初始化一个 Flutter 项目。首先第一步是创建项目 two you friend ，需要在 Android Studio 中创建好 Flutter 项目，项目创建完成后，在项目根目录打开命令行窗口，执行以下命令进行初始化。</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">flutter</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">pro</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">cli </span><span style="color:#F97583;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">flutter</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">pro</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">cli </span><span style="color:#D73A49;">init</span></span></code></pre></div><p>执行完该初始化成功后，打开手机模拟器运行下面的命令检查代码规范，并且启动项目。</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">flutter</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">pro</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">cli run </span><span style="color:#F97583;">check</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">flutter</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">pro</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">cli run </span><span style="color:#D73A49;">check</span></span></code></pre></div><p>为了尝试自动化生成测试代码，我们可以在项目中的 lib/pages/home_page/ 目录下创建一个 index.dart 。然后再运行下面的命令。</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">flutter</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">pro</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">cli st</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">flutter</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">pro</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">cli st</span></span></code></pre></div><p>运行完后，在相应的 test/pages/home_page 目录下你将看到 index_test.dart 文件，里面将包含下面的测试代码。</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;package:flutter/material.dart&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;package:flutter_test/flutter_test.dart&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;package:two_you_friend/pages/home_page/index.dart&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// @todo</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">testWidgets</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;test two_you_friend/pages/home_page/index.dart&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#79B8FF;">WidgetTester</span><span style="color:#E1E4E8;"> tester) </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Widget</span><span style="color:#E1E4E8;"> testWidgets </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">HomePageIndex</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> tester.</span><span style="color:#B392F0;">pumpWidget</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MaterialApp</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">              home</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> testWidgets</span></span>
<span class="line"><span style="color:#E1E4E8;">          )</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(find.</span><span style="color:#B392F0;">byWidget</span><span style="color:#E1E4E8;">(testWidgets), findsOneWidget);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;package:flutter/material.dart&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;package:flutter_test/flutter_test.dart&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;package:two_you_friend/pages/home_page/index.dart&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// @todo</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">testWidgets</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;test two_you_friend/pages/home_page/index.dart&#39;</span><span style="color:#24292E;">, (</span><span style="color:#005CC5;">WidgetTester</span><span style="color:#24292E;"> tester) </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Widget</span><span style="color:#24292E;"> testWidgets </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">HomePageIndex</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> tester.</span><span style="color:#6F42C1;">pumpWidget</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MaterialApp</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">              home</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> testWidgets</span></span>
<span class="line"><span style="color:#24292E;">          )</span></span>
<span class="line"><span style="color:#24292E;">      );</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(find.</span><span style="color:#6F42C1;">byWidget</span><span style="color:#24292E;">(testWidgets), findsOneWidget);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>以上就完成了一个项目的初始化，比较简单的三个步骤。后期开发过程中可以使用 run 和 st 命令来提升研发效率。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>以上就是本课时的主要内容，本课时通过工具化的方式来初始化项目，学完本课时你需要掌握 Flutter 项目基础结构，需要了解 flutter-pro-cli 的一个简单应用，最后希望你使用本课时的工具（或者手动的方式）创建一个 two you friend 项目，后面的课时我会逐步在该项目基础上完善功能。</p>`,29);function u(_,m,F,f,b,A){const s=o("Image");return t(),c("div",null,[i,a(s,{alt:"image.png",src:"https://s0.lgstatic.com/i/image/M00/2E/C3/Ciqc1F8Flb-AGmmvAADAcKsYMc8004.png"}),n(),E,a(s,{alt:"image (1).png",src:"https://s0.lgstatic.com/i/image/M00/2E/C3/Ciqc1F8FldOAPQ-gAABVfTIEj5I407.png"}),n(),y,d,a(s,{alt:"image2.png",src:"https://s0.lgstatic.com/i/image/M00/2E/CF/CgqCHl8FleuAcV39AABWvTrY5U8584.png"}),n(),h,a(s,{alt:"image (2).png",src:"https://s0.lgstatic.com/i/image/M00/2E/C3/Ciqc1F8Flg2AZvgFAABbTxGj0PU912.png"}),n(),g])}const v=e(r,[["render",u]]);export{C as __pageData,v as default};
