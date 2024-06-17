import{_ as t,F as l,g as p,K as e,h as i,ar as n,l as s,o as h}from"./chunks/framework.VlluEs-f.js";const j=JSON.parse('{"title":"19Serverle的实践：进一步提升系统的稳定性","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/Node.js 应用开发实战_文档/(6801) 19  Serverle 的实践：进一步提升系统的稳定性.md","filePath":"posts/frontEnd/Node.js 应用开发实战_文档/(6801) 19  Serverle 的实践：进一步提升系统的稳定性.md","lastUpdated":1718371218000}'),r={name:"posts/frontEnd/Node.js 应用开发实战_文档/(6801) 19  Serverle 的实践：进一步提升系统的稳定性.md"},k=n(`<h1 id="_19serverle的实践-进一步提升系统的稳定性" tabindex="-1">19Serverle的实践：进一步提升系统的稳定性 <a class="header-anchor" href="#_19serverle的实践-进一步提升系统的稳定性" aria-label="Permalink to &quot;19Serverle的实践：进一步提升系统的稳定性&quot;">​</a></h1><p>上一讲我们学习了机器部署的一些方案和策略，比如当你要将一个服务部署到多台（2台以上）机时，你会发现为了尽可能地利用资源、避免浪费，更不能在高并发时引起现网问题，每次都要精细地分析每台机器的部署方案，那有没有可以弹性地根据当前负载情况进行自动化的方案呢？</p><p>当然有，就是我们这一讲要学习的 Serverless 技术，目前市面上 Serverless 技术的资料非常多（拉勾教育也有一门课 《 玩转 Serverless 架构》，感兴趣可以看一下）。而我们这一讲主要学习的是，Serverless 是怎么帮我们解决 Node.js 的问题点的；以及怎么将课程中的 KOA 框架应用接入到 Serverless 服务中去。</p><p>作为 Node.js 后台开发人员，因为一定会涉及服务器资源、服务器的部署分配或者自动化扩容等问题，所以你有必要去仔细学习今天的内容，希望学完这一讲之后，你能从 Serverless 的角度去解决这些问题，为你的企业节省一大笔费用。</p><h3 id="什么是-serverless" tabindex="-1">什么是 Serverless <a class="header-anchor" href="#什么是-serverless" aria-label="Permalink to &quot;什么是 Serverless&quot;">​</a></h3><p>Serverless 的英文转换过来就是无服务器，简单理解是&quot;摒弃服务器&quot;。但是无服务器不是说真的没有服务器，而是说云服务厂商来帮你动态地规划服务器资源，你只提供源代码给云厂商，云厂商就按照你服务所调度的资源来计费，而不是最原始的租借服务器的方式。</p><h4 id="实际场景" tabindex="-1">实际场景 <a class="header-anchor" href="#实际场景" aria-label="Permalink to &quot;实际场景&quot;">​</a></h4><p>按照 18 讲中的多服务部署经验，你要严格地根据服务并发情况分配服务器，并且要按照服务的并发上限来分配服务器。</p><p>比如你经过压测分析后，得到结论是需要 4 台 16 核的服务器，那么你在每台服务器上还只能启动 14 或者 15 个进程（避免内核占满，服务器异常无法使用的情况）。我们来计算成本，假设 1 台机器 1 万元/年， 那么 4 台就是 4 万元/年。</p><p>也就说不管你用多或者用少，服务器已经分配给你了，这 4 万元/年没法避免，但其实你是无法充分利用服务器资源的，因为我们都是按照最大并发来配置的，所以一定存在服务资源的浪费（极端地说，如果今年的业绩没有达到预期，并没有用到多出来的 4 台机器，就全浪费了）。</p><h4 id="解决的问题" tabindex="-1">解决的问题 <a class="header-anchor" href="#解决的问题" aria-label="Permalink to &quot;解决的问题&quot;">​</a></h4><p>在上面的例子中，如果没有 Serverless ，会一直存在这样的问题，没有一个很好的解决方案，所以多少存在资源浪费的问题，那么 Serverless 解决了 Node.js 服务的哪些问题呢？</p><ul><li><p><strong>费用问题：</strong> 假设我还是给你 4 台最大并发的服务器，但是不让你按月缴费，而是根据你调用的次数和流量来计费，这种计费方式下，可以在没有服务调用时不计费，所以大部分情况下都是 Serverless 价格优势更大。</p></li><li><p><strong>扩容更加简单：</strong> 如果你遇到公司大促，只用临时扩容当前的内存占用即可，不用再一步步地去部署服务器环境，再部署 Node.js 服务，最后经过测试验证后才可使用。</p></li><li><p><strong>减少了并发校验的问题：</strong> 根据课程的内容，我们每次都要预估上线后的服务承载能力，并且需要非常细致地规划服务器部署情况，但有了 Serverless 以后，可以不用关心这种情况，专注避免性能问题就行。</p></li><li><p><strong>环境依赖兼容问题更少：</strong> Node.js 对各种库版本都是有要求的，而如果服务器共用，就务必会导致各种 so 库版本不兼容问题，但是 Serverless 是独立的环境运行空间，所以不用担心这类问题，这些都由云服务厂商帮你解决。</p></li></ul><p>既然 Severless 可以帮你解决上述问题，那么我们就来尝试将 KOA 框架应用接入到 Serverless 云服务上。</p><h3 id="如何应用" tabindex="-1">如何应用 <a class="header-anchor" href="#如何应用" aria-label="Permalink to &quot;如何应用&quot;">​</a></h3><p>因为 Serverless 是从线下转到线上的云计算的技术应用，所以我们要依托一家云计算服务来分析演示，比如 AWS 、腾讯云或者阿里云都有一定的免费调用次数。在选择一家免费云测试服务以后，接下来就将现有的业务进行改造，以满足接入要求。</p><h4 id="koa-接入" tabindex="-1">KOA 接入 <a class="header-anchor" href="#koa-接入" aria-label="Permalink to &quot;KOA 接入&quot;">​</a></h4><p>目前各大云计算服务都支持 Node.js 的各种框架接入，比如我们所使用的 KOA ，这里我们选了一家免费的云计算服务来演示接入过程，其中有一个接入指引，你可以去 <a href="https://github.com/serverless-components/tencent-koa/tree/master?fileGuid=xxQTRXtVcqtHK6j8" target="_blank" rel="noreferrer">GitHub</a> 上了解其接入方案（这里不涉及任何推荐云平台，在测试阶段根据自己的喜好接入，接入方法比较简单）。</p><p><strong>设置配置文件</strong></p><p>无论是哪家云计算服务，一般都会包含一个 Serverless 配置文件，用于保存当前服务的相关启动配置，比如下面我们的一个 Serverless 配置。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">koa</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # (required) name of the component. In that case, it&#39;s koa.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">koa-tst-4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # (optional) Serverless dashboard app. default is the same as the name property.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">koa-tst-4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # (required) name of your koa component instance.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">inputs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # (optional) path to the source folder. default is a hello world app.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    exclude</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.env</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  region</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ap-guangzhou</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  runtime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Nodejs10.15</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  apigatewayConf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    protocols</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">test</span></span></code></pre></div><p>首先在 component 中申明了框架类型，其次 app 说明了项目名称，name 则为启动的项目实例名称。inputs 就是项目相关的配置，比如 src 表明项目所处的根目录位置，详细的字段说明n你可以参考<a href="https://github.com/serverless-components/tencent-koa/blob/master/docs/configure.md?fileGuid=xxQTRXtVcqtHK6j8" target="_blank" rel="noreferrer">GitHub 这个项目</a>说明。</p><p><strong>修改 APP 入口文件</strong></p><p>默认情况下 Serverless 的入口文件名为 sls.js ，因此我们将项目中的 app.js 修改为 sls.js ，同时将 sls.js 中的最后一行代码进行修改如下。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(process.env.Serverless) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//app.listen(3000, () =&gt; console.log(\`Example app listening on port 3000!\`));</span></span></code></pre></div><p>首先判断环境类型，如果是 Serverless 的运行环境，就使用 module.exports 导出相应的 app 对象，如果非 Serverless 环境，也就是我们自身环境就使用 listen 来启动服务。</p><p>以上就完成了接入，接下来只需要将代码上传到平台即可，上传平台有多种方式，比如命令行的方式。还可以使用代码文件夹上传的方式，或者 GitHub 地址授权引入的方式。</p><h4 id="实践测试" tabindex="-1">实践测试 <a class="header-anchor" href="#实践测试" aria-label="Permalink to &quot;实践测试&quot;">​</a></h4><p>在代码上传完成以后，我们可以看到类似图 1 所示的结果。</p>`,29),d=s("p",null,"图 1 Serverless 服务",-1),o=s("p",null,"接下来我们只需要访问图 1 的 API 网关的 URL 。",-1),E=s("p",null,"打开地址后，我们就可以看到我们熟悉的框架响应数据了，如下图 2 所示。",-1),g=n(`<p>图 2 KOA 框架响应</p><p>接下来我们访问一个我们正确的路径地址，如下 URL：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//service-bnike5yc-1251046496.gz.apigw.tencentcs.com/release/page/index?name=lagou-nodejs</span></span></code></pre></div><p>这个 URL 访问的就是我们 GitHub 源码中 Page 类的 index 方法，代码如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Controller</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;../core/controller&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Page</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Controller</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getParams</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resApi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;success&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {name} );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Page;</span></span></code></pre></div><p>代码逻辑比较简单，获取 name 字段，然后将 name 返回给到 API 调用方。因此当访问 page/index?name=lagou-nodejs 后，会响应如下数据，如图 3 示。</p>`,6),c=s("p",null,"图 3 KOA 正常响应数据",-1),y=s("p",null,[i("由于需要独立部署项目，所以我们本讲的"),s("a",{href:"https://github.com/love-flutter/serverless?fileGuid=xxQTRXtVcqtHK6j8",target:"_blank",rel:"noreferrer"},"GitHub 源码"),i("做了一定的调整，单独启用了一个新项目，你在实践时，可以直接 fork 该项目，然后去尝试接。")],-1),u=s("p",null,"以上就完成了接入，后续只需要正常开发提交到自己的 GitHub 项目中，然后在应用平台的自动化工具从 GitHub 直接部署到 Serverless 服务上，部署应用都将非常快捷。",-1),F=s("h3",{id:"总结",tabindex:"-1"},[i("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),v=s("p",null,"本讲核心是介绍了什么是 Serverless 、解决了我们当前 Node.js 服务的问题以及如何接入应用，学完本讲后能够了解 Serverless 的优势，并且可以进行一些简单云服务接入尝试。",-1),m=s("p",null,"由于项目迁移成本不大，因此主要是在项目应用前可以先和团队进行价格分析，从价格入手让团队尝试 Serverless 的应用，帮助团队/老板减少费用占用问题。Serverless 在多方面是可以减少我们项目的维护成本，我们只需要关注服务开发即可，因此是能够大大的节省人力和资源，在小型公司更建议你尝试应用。",-1),_=s("p",null,"到此为止，本专栏的知识点部分已经全部介绍完了，今天给你留的作业是：应用本框架开发一个新的接口，并按照本课时的内容部署到 Serverless 云服务上。",-1);function A(C,b,D,S,f,B){const a=l("Image");return h(),p("div",null,[k,e(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image6/M01/3B/F6/Cgp9HWCHw--AIb5jAAEa4Dzd7Bs282.png"}),i(),d,o,E,e(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M01/3B/F6/Cgp9HWCHw_aAEDyzAAAmkVZjuso799.png"}),i(),g,e(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image6/M00/3B/F6/Cgp9HWCHw_6AX42UAAAzwZkU7Fc325.png"}),i(),c,y,u,F,v,m,_])}const q=t(r,[["render",A]]);export{j as __pageData,q as default};
