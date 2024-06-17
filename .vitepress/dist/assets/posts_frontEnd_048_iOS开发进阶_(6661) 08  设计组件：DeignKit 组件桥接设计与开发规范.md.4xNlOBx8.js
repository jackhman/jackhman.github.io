import{_ as p,F as l,g as e,K as a,h as s,ar as n,l as t,o as h}from"./chunks/framework.VlluEs-f.js";const v=JSON.parse('{"title":"08设计组件：DeignKit组件桥接设计与开发规范","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/048_iOS开发进阶/(6661) 08  设计组件：DeignKit 组件桥接设计与开发规范.md","filePath":"posts/frontEnd/048_iOS开发进阶/(6661) 08  设计组件：DeignKit 组件桥接设计与开发规范.md","lastUpdated":1718371218000}'),k={name:"posts/frontEnd/048_iOS开发进阶/(6661) 08  设计组件：DeignKit 组件桥接设计与开发规范.md"},d=n(`<h1 id="_08设计组件-deignkit组件桥接设计与开发规范" tabindex="-1">08设计组件：DeignKit组件桥接设计与开发规范 <a class="header-anchor" href="#_08设计组件-deignkit组件桥接设计与开发规范" aria-label="Permalink to &quot;08设计组件：DeignKit组件桥接设计与开发规范&quot;">​</a></h1><p>在上一模块&quot;配置与规范&quot;中，我主要介绍了如何统一项目的配置，以及如何制定统一开发和设计规范。</p><p>接下来我们将进入基础组件设计模块，我会为你介绍一些在 iOS 开发过程中，工程化实践需要用的组件，比如设计组件、路由组件。除此之外，我还会聊聊在开发中如何支持多语言、动态字体和深色模式等辅助功能，让你的 App 既有国际范，获取更多用户，还能提升用户体验，获得更多好评。</p><p>这一讲，我们就先来聊聊公共组件库，以及如何封装基础设计组件。</p><h3 id="封装公共功能组件库" tabindex="-1">封装公共功能组件库 <a class="header-anchor" href="#封装公共功能组件库" aria-label="Permalink to &quot;封装公共功能组件库&quot;">​</a></h3><p>随着产品不断发展，我们会发现，越来越多的公共功能可以封装成组件库，从而被各个模块甚至多个 App 共同使用，比如字体、调色板、间距和头像可以封装成 UI 设计组件库，登录会话和权限管理可以封装成登录与鉴权组件库。</p><p>通过利用这些公共功能组件库，不仅能节省大量开发时间，不需要我们再为每个模块重复实现类似的功能；还能减少编译时间，因为如果没有独立的组件库，一点代码的改动都会导致整个 App 重新编译与链接。</p><p>那么，怎样才能创建和使用公共功能组件库呢？下面我们以一个设计组件库 DesignKit 为例子介绍下具体怎么做。</p><h4 id="创建内部公共功能组件库" tabindex="-1">创建内部公共功能组件库 <a class="header-anchor" href="#创建内部公共功能组件库" aria-label="Permalink to &quot;创建内部公共功能组件库&quot;">​</a></h4><p>公共功能组件库根据使用范围可以分为三大类：内部库、私有库和开源库。</p><ul><li><p>内部库是指该库和主项目共享一个 Repo ，它可以共享到主项目的所有模块中。</p></li><li><p>私有库是指该库使用独立的私有 Repo ，它可以共享到公司多个 App 中。</p></li><li><p>开源库是指该库发布到 GitHub 等开源社区提供给其他开发者使用。</p></li></ul><p>这三类库的创建和使用方式都是一致的。<strong>在实际操作中，我们一般先创建内部库，如果今后有必要，可以再升级为私有库乃至开源库</strong>。下面咱们一起看看怎样创建内部库。</p><p>为了方便管理各个内部公共功能组件库，首先我们新建一个叫作<strong>Frameworks 的文件夹</strong>来保存所有的内部库。这个文件夹和主项目文件夹（在我们例子中是 Moments）以及 Workplace 文档（Moments.xcworkspace）平衡。例如下面的文件结构：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Frameworks          Moments             Pods            Moments.xcworkspace</span></span></code></pre></div><p>然后我们通过 CocoaPods 创建和管理这个内部库。</p><p>怎么做呢？有两种办法可以完成这项工作，<strong>一种是使用</strong> <code>pod lib create [pod name]</code>命令。比如在这个案例当中，我们可以在 Frameworks 文件夹下执行<code>bundle exec pod lib create DesignKit</code>命令，然后输入邮箱、语言和平台等信息，让 CocoaPods 创建一个 DesignKit.podspec 以及例子项目等一堆文件。具体如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DesignKit         Example           README.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DesignKit.podspec LICENSE           _Pods.xcodeproj</span></span></code></pre></div><p>DesignKit.podspec 是 DesignKit 库的 Pod 描述文件，用于描述该 Pod 库的一个特定版本信息。它存放在 CocoaPods 的中心 Repo 供使用者查找和使用。</p><p>随着这个 Pod 库的迭代，CocoaPods 的中心 Repo 会为每个特定的 Pod 版本存放一个对应的 podspec 文件。每个 podspec 文件都包括 Pod 对应 Repo 的 URL、源码存放的位置、所支持的系统平台及其系统最低版本号、Swift 语言版本，以及 Pod 的名字、版本号和描述等信息。</p><p>DesignKit 组件库的 podspec 文件你可以在<a href="https://github.com/lagoueduCol/iOS-linyongjian/blob/main/Frameworks/DesignKit/DesignKit.podspec?fileGuid=xxQTRXtVcqtHK6j8" target="_blank" rel="noreferrer">拉勾教育的仓库中</a>找到。下面是该 podspec 文件的一些重要配置：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  s.name             </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;DesignKit&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  s.version          </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1.0.0&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  s.ios.deployment_target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;14.0&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  s.swift_versions </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;5.3&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  s.source_files </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;src/**/*&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  s.resources </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;assets/**/*&#39;</span></span></code></pre></div><p><code>name</code>是该组件的名字，<code>version</code>是组件的版本号，当我们更新组件的时候同时需要使用 Semantic Versioning（语义化版本号）更新该版本号。</p><p><code>ios.deployment_target</code>为该库所支持的平台和所支持平台的最低版本号。<code>swift_versions</code>是支持 Swift 语言的版本号。<code>source_files</code>是该库的源代码所在的文件夹，在我们例子中是 src。<code>resources</code>是该库资源文件所在的文件夹。</p><p><strong>另外一种是手工创建 DesignKit.podspec 文件。我偏向于这一种，因为手工创建出来的项目更简练</strong>。</p><p>比如在这里，我们只需要在 Frameworks 新建一个叫作 DesignKit 的文件夹，然后在它下面建立 src 和 assets 这两个文件夹，以及 LICENSE 和 DesignKit.podspec 这两个文件即可。</p><p>如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DesignKit.podspec LICENSE           assets            src</span></span></code></pre></div><p>以后所有源代码文件都存放在 src 文件夹下面，而图片、Xib 和 Storyboard 等资源文件存放在 assets 文件夹下。</p><p>LICENSE 是许可证文件，如果是开源库，我们必须严格选择一个许可证，这样才能方便其他开发者使用我们的库。</p><h4 id="检测内部公共功能组件库" tabindex="-1">检测内部公共功能组件库 <a class="header-anchor" href="#检测内部公共功能组件库" aria-label="Permalink to &quot;检测内部公共功能组件库&quot;">​</a></h4><p>为了保证组件库的使用者能顺利安装和使用我们的库，当我们配置好 DesignKit.podspec 文件后，需要执行<code>bundle exec pod spec lint</code>命令来检测该 podspec 文件是否正确。如果我们维护的是一个开源库，这一步尤为重要。因为它会影响到使用者的第一印象，因此我们在发布该 Pod 之前需要把每个错误或者警告都修复好。</p><p>不过需要注意的是， CocoaPods 对内部库的检测存在一个 Bug， 会显示下面的警告以及错误信息：</p><pre><code>WARN | Missing primary key for source attribute 
ERROR | unknown: Encountered an unknown error (Unsupported download strategy \`{:path=&gt;&quot;.&quot;}\`.) during validation
</code></pre><p>由于我们创建的是内部库，所以可以忽略这个警告和错误，只要没有其他错误信息就可以了。</p><h4 id="使用内部公共功能组件库" tabindex="-1">使用内部公共功能组件库 <a class="header-anchor" href="#使用内部公共功能组件库" aria-label="Permalink to &quot;使用内部公共功能组件库&quot;">​</a></h4><p>使用内部公共功能组件库非常简单，只要在主项目的 Podfile 里面使用<code>:path</code>来指定该内部库的路径即可。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pod </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;DesignKit&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">path </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./Frameworks/DesignKit&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">inhibit_warnings </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span></code></pre></div><p>当执行<code>bundle exec pod install</code>命令以后，CocoaPods 会在 Pods 项目下建立一个<strong>Development Pods</strong> 文件夹来存放所有内部库的相关文件。</p>`,38),r=t("p",null,"有了 CocoaPods，我们新建、管理和使用公共组件库就会变得非常简单。下面我们介绍下如何开发设计组件 DesignKit。",-1),o=t("h3",{id:"designkit-设计组件",tabindex:"-1"},[s("DesignKit 设计组件 "),t("a",{class:"header-anchor",href:"#designkit-设计组件","aria-label":'Permalink to "DesignKit 设计组件"'},"​")],-1),E=t("p",null,"DesignKit 是一个设计组件，用于封装与 UI 相关的公共组件。为了方便维护，每次新增一个组件，我们最好都建立一个独立的文件夹，例如把 Spacing.swift 放在新建的 Spacing 文件夹中。",-1),g=n(`<p>下面以几乎每个 App 都会使用到的三个组件：间距（Spacing）、头像（Avatar）和点赞按钮（Favorite Button）为例子，介绍下如何封装基础设计组件。</p><h4 id="间距" tabindex="-1">间距 <a class="header-anchor" href="#间距" aria-label="Permalink to &quot;间距&quot;">​</a></h4><p>为了呈现信息分组并体现信息的主次关系，所有 App 的所有页面都会使用到间距来添加留白效果。</p><p>间距看起来这么简单，为什么我们还需要为其独立封装为一个公共组件呢？主要原因有这么几条。</p><ol><li><p>可以为整个 App 提供一致的体验，因为我们统一定义了所有间距，各个功能模块的 UI 呈现都保持一致。</p></li><li><p>可以减低设计师和开发者的沟通成本，不会再为某些像素值的多与少而争论不休。设计师只使用预先定义的间距，而开发者也只使用在代码中定义好的间距就行了。</p></li><li><p>可以减低设计师的工作量，很多 UI 界面可以只提供一个设计稿来同时支持 iOS、Android 以及移动 Web。因为设计师只提供预先定义的间距名，而不是 hardcoded （硬编码）的像素值。不同设备上像素值有可能不一样，但间距名却能保持一致。</p></li><li><p>在支持响应式设计的时候，这些间距定义可以根据设备的宽度而自动调整。这远比硬编码的像素值灵活很多，例如在 iPhone 中 twoExtraSmall 是 4 points，而在 iPad 中是 6 points。</p></li></ol><p>别看间距公共组件有那么多优点，但实现起来并不难，一个<strong>struct</strong>就搞定了，简直是一本万利的投入。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> struct Spacing {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> let twoExtraSmall</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CGFloat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> let extraSmall</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CGFloat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> let small</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CGFloat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 12</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> let medium</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CGFloat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> let large</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CGFloat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 24</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> let extraLarge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CGFloat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> let twoExtraLarge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CGFloat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 40</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> let threeExtraLarge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CGFloat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 48</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>有了上述的定义以后，使用这些间距变得很简单。请看：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DesignKit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> let likesStakeView: UIStackView = configure(.init()) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.spacing = Spacing.twoExtraSmall</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.directionalLayoutMargins = NSDirectionalEdgeInsets(top: Spacing.twoExtraSmall, leading: Spacing.twoExtraSmall, bottom: Spacing.twoExtraSmall, trailing: Spacing.twoExtraSmall)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>我们可以先 import (引入) DesignKit 库，然后通过<code>Spacing</code>结构体直接访问预定义的间距，例如<code>Spacing.twoExtraSmall</code>。</p><h4 id="头像组件" tabindex="-1">头像组件 <a class="header-anchor" href="#头像组件" aria-label="Permalink to &quot;头像组件&quot;">​</a></h4><p>iOS 开发者都知道，头像组件应用广泛，例如在房产 App 中显示中介的头像，在我们例子 Moments App 中显示自己和好友头像，在短视频 App 中显示视频博主头像等。</p><p>也许你会问，头像那么简单，为什么需要独立封装为一个组件？原因主要是方便以后改变其 UI 的呈现方式，例如从圆角方形改成圆形，添加边界线（border），添加阴影效果（shadow）等。有了独立的组件以后，我们只需要修改一个地方就能把这个 App 的所有头像一次性地修改呈现效果。</p><p>下面是头像组件的实现方式：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> extension UIImageView {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    func </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asAvatar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cornerRadius</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CGFloat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        clipsToBounds </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        layer.cornerRadius </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cornerRadius</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>我们为 UIKit 所提供的<code>UIImageView</code>实现了一个扩展方法<code>asAvatar(cornerRadius:)</code>，该方法接收<code>cornerRadius</code>作为参数来配置圆角的角度，默认值是<code>4</code>。</p><p>使用也是非常简单，只有创建一个<code>UIImageView</code>的实例，然后调用<code>asAvatar(cornerRadius:)</code>方法即可。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> let userAvatarImageView</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UIImageView </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> configure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $0.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asAvatar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cornerRadius</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><p>这是人像组件的显示效果，可以在内部菜单查看。</p>`,19),c=n(`<h4 id="点赞按钮" tabindex="-1">点赞按钮 <a class="header-anchor" href="#点赞按钮" aria-label="Permalink to &quot;点赞按钮&quot;">​</a></h4><p>可以说，每个具有社交属性的 App 都会用到点赞功能，所以在开发当中，点赞按钮也是必不可少的功能组件。</p><p>那么，点赞按钮该如何封装呢？和人像组件十分类似，我们可以通过扩展<code>UIButton</code>来实现。示例代码如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> extension UIButton {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    func </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asStarFavoriteButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pointSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CGFloat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UIImage.SymbolWeight </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .semibold, scale</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UIImage.SymbolScale </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .default, fillColor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UIColor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UIColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0xf1c40f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        let symbolConfiguration </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UIImage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SymbolConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pointSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pointSize, weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> weight, scale</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> scale)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        let starImage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UIImage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(systemName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;star&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, withConfiguration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> symbolConfiguration)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        setImage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(starImage, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .normal)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        let starFillImage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UIImage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(systemName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;star.fill&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, withConfiguration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> symbolConfiguration)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        setImage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(starFillImage, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .selected)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tintColor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fillColor</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        addTarget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, action</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">selector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(touchUpInside), </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .touchUpInside)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> extension UIButton {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">objc</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> func </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touchUpInside</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sender</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UIButton) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        isSelected </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">isSelected</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>其核心逻辑把当前 UIButton 对象的普通 (<code>.normal</code>) 状态和选中 (<code>.selected</code>) 状态设置不同的图标。比如在这里我就把星星按钮的普通状态设置成了名叫 &quot;Star&quot; 的图标，并把它的选中状态设置成了名叫 &quot;tar.fill&quot;&quot; 的图标。</p><p>注意，这些图标来自苹果公司的 SF Symbols 不需要额外安装，iOS 14 系统本身就自带了。而且它们的使用也非常灵活，支持字号、字重、填充色等配置。</p><p>使用点赞按钮组件也非常简单，只需要建立一个<code>UIButton</code>的实例，然后调用<code>asStarFavoriteButton</code>方法就可以了。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> let favoriteButton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UIButton </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> configure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $0.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asStarFavoriteButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><p>点赞按钮的运行效果，也可以在内部菜单查看。</p><p>以上我们以间距、头像、点赞按钮为例介绍了如何使用 DesignKit 封装与 UI 相关的公共组件。以我多年的开发经验来说，在封装 UI 组件的时候，可以遵循下面几个原则。</p><ol><li><p>尽量使用扩展方法而不是子类来扩展组件，这样做可以使其他开发者在使用这些组件时，仅需要调用扩展方法，而不必使用特定的类。</p></li><li><p>尽量使用代码而不要使用 Xib 或者 Storyboard，因为有些 App 完全不使用 Interface Builder。</p></li><li><p>如果可以，要为组件加上<code>@IBDesignable</code>和<code>@IBInspectable</code>支持，这样能使得开发者在使用 Interface Builder 的时候预览我们的组件。</p></li><li><p>尽量只使用 UIkit 而不要依赖任何第三方库，否则我们可能会引入一个不可控的依赖库。</p></li></ol><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>前面我介绍了如何封装公共功能组件库，以及以怎样封装基础设计组件，希望对你有所帮助。合理使用功能组件可以让你的开发事半功倍。</p>`,13),y=n('<p>不过，在封装组件的时候，我还需要提醒你注意这么几点。</p><p>首先，为了减低组件之间的耦合性，提高组件的健壮性，组件的设计需要符合单一功能原则 。也就是说，一个组件只做一件事情，一个组件库只做一类相关的事情。每个组件库都要相对独立且功能单一。</p><p>比如，我们可以分别封装网络库、UI 库、蓝牙处理库等底层库，但不能把所有库合并在一个单独的库里面，这样可以方便上层应用按需使用这些依赖库。例如，广告 SDK 可以依赖于网络库、UI 库，但并不依赖蓝牙处理库。这样做一方面可以减少循环依赖的可能性，另一方面可以加快编译和链接的速度，方便使用。</p><p>其次，每次发布新增和更新组件的时候，都需要严格按照 Semantic Versioning 来更新版本号，这样有效防止因为版本的问题而引入 Bug。</p><p>最后，组件的开发并不是一蹴而就，很多时候可以根据业务需求把公共模块一点点地移入公共组件库中，一步步地完善组件库的功能。不要为了开发组件而开发组件，很多时候当我们充分理解了使用者的需求后，才能为组件定义完善的接口和完整的功能。</p><p>思考题：</p><blockquote><p>上面我们讲述了如何使用 CocoaPods 来封装内部组件，请问怎样把内部组件升级成为私有组件和开源组件呢？</p></blockquote><p>可以把回答写到下面的留言区哦，我们下一讲将介绍如何使用功能开关支持产品快速迭代。</p><p>源码地址：</p><blockquote><p>DesignKit 源代码：<a href="https://github.com/lagoueduCol/iOS-linyongjian/tree/main/Frameworks/DesignKit?fileGuid=xxQTRXtVcqtHK6j8" target="_blank" rel="noreferrer">https://github.com/lagoueduCol/iOS-linyongjian/tree/main/Frameworks/DesignKit</a></p></blockquote>',10);function F(u,D,A,m,C,b){const i=l("Image");return h(),e("div",null,[d,a(i,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image6/M00/1F/4C/Cgp9HWBRveSAYt47AASIGxbwB9s124.png"}),s(),r,o,E,a(i,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M00/1F/4C/Cgp9HWBRve-AVJZSAACVtoXExgU145.png"}),s(),g,a(i,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image6/M00/1F/49/CioPOWBRvgqAL1THABqNofQMQ_4461.png"}),s(),c,a(i,{alt:"思维导图+二维码.png",src:"https://s0.lgstatic.com/i/image6/M00/1F/73/Cgp9HWBR3wyAAnwjAAcCv2pASBs854.png"}),s(),y])}const S=p(k,[["render",F]]);export{v as __pageData,S as default};
