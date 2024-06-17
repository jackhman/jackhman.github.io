import{_ as a,F as n,g as r,K as s,h as p,ar as e,l as t,o as _}from"./chunks/framework.VlluEs-f.js";const I=JSON.parse('{"title":"课前必读1时代赋予测试开发的机遇与挑战","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/114-测试开发入门与实战文档/(4661) 课前必读 1  时代赋予测试开发的机遇与挑战.md","filePath":"posts/devops/114-测试开发入门与实战文档/(4661) 课前必读 1  时代赋予测试开发的机遇与挑战.md","lastUpdated":1718371218000}'),l={name:"posts/devops/114-测试开发入门与实战文档/(4661) 课前必读 1  时代赋予测试开发的机遇与挑战.md"},i=e('<h1 id="课前必读1时代赋予测试开发的机遇与挑战" tabindex="-1">课前必读1时代赋予测试开发的机遇与挑战 <a class="header-anchor" href="#课前必读1时代赋予测试开发的机遇与挑战" aria-label="Permalink to &quot;课前必读1时代赋予测试开发的机遇与挑战&quot;">​</a></h1><p>在正式进入测试开发课程学习前，我想先跟你聊一聊，当下测试开发所面临的机遇与挑战。</p><p>身处软件行业的人都知道，&quot;软件的质量不是测试出来的&quot;，既然质量不能被测试出来，那么测试工程师，乃至软件测试存在的意义是什么呢？</p><p>我认为，<strong>软件测试存在的意义</strong> 是：通过一系列测试活动，<strong>&quot;提前&quot;</strong> 发现和定位软件产品质量的薄弱环节，并倒逼开发人员修正，从而保证交付的软件质量满足客户需求。</p><p>有研究表明，越早发现软件中存在的问题，开发费用就越低，软件质量越高，软件发布后的维护费用越低。因此，提前发现和定位问题极为重要，而在软件开发的整个历程中，越是新兴的软件开发模型，越重视&quot;提前测试&quot;。提前测试可以使得在需求分析时期就可发现的错误，不必等到开发完成才被发现。</p><p>那么，具体是如何一步步 <strong>&quot;提前&quot;</strong> 发现软件产品中存在的质量问题的呢？那就不得不从软件开发模型的演变过程说起了。</p><h3 id="测试活动随着软件开发模型的演进被不断前置" tabindex="-1">测试活动随着软件开发模型的演进被不断前置 <a class="header-anchor" href="#测试活动随着软件开发模型的演进被不断前置" aria-label="Permalink to &quot;测试活动随着软件开发模型的演进被不断前置&quot;">​</a></h3><p>大型或专业软件的研发，通常会遵循一定的开发模型，从软件发展的历程来看，其中比较典型的有瀑布模型、V 模型和 W 模型、迭代模型，以及敏捷开发模型。</p><p><strong>这里值得说明的一点是，各种开发模型并没有明显的适用范围，即使现在也有项目用瀑布模型开发，开发模型的选择并不是越新越好的，而是要根据项目而变化。</strong></p><p><strong>1.瀑布模型</strong></p><p>我们知道，<strong>瀑布模型</strong>的主要特征在于项目完全按照阶段划分，只有前一阶段完成，才能开始下一阶段。具体到测试活动，则只能在全部编码完成后、发布之前执行，在这种开发模型中，测试活动被完全后置了，测试仅仅是编码后的一个活动阶段，测试的重要性没有被凸显出来。</p>',11),g=t("p",null,[t("strong",null,"2. V 模型")],-1),c=t("p",null,"基于此，V 模型出现了。V 模型在整个开发过程中，不仅相对清晰地划分了测试活动的不同级别，还将其不同级别的测试活动与软件开发各阶段清晰地对应起来，强调了测试在整个开发过程中的重要性。但在 V 模型中，测试依旧是编码之后才开始的，测试介入时间还是太晚。比如，需求分析阶段出现的问题，要等到系统测试阶段才能发现。",-1),u=t("p",null,[t("strong",null,"3. W 模型")],-1),h=t("p",null,[p("为了弥补这一缺点，V 模型的进一步深化版，即"),t("strong",null,"W 模型"),p(" 出现了。从 W 模型的示意图中，可以看到，W 模型是把 V 模型左边的每一个活动都加了一个测试设计活动，"),t("strong",null,'体现了"尽早和不断地进行测试"的原则'),p("。")],-1),d=e("<p>但是说到底，W 模型和 V 模型都把软件的开发视为需求、设计、编码、测试等一系列串行的活动，无法支持迭代、自发性及变更调整。例如，需要根据市场及监管要求，快速调整项目需求时（比如，今年春节期间各大平台线上抢口罩的活动），使用 W 模型或 V 模型不仅无法快速响应，而且还会影响软件质量，甚至公司声誉。于是迭代模型应运而生，它正好可以弥补 W 模型和 V 模型的不足。</p><p><strong>4.迭代模型</strong></p><p>迭代模型，常用于需求不甚明确、开发难度比较大的项目，比如互联网行业流行的先出 MVP 版本，然后再根据用户反馈进行调整的项目。</p><p>迭代模型将大型项目分为多个迭代，每个迭代本质上是一个小项目，每个小项目都包括了需求分析、设计、编码与测试等一系列项目活动。需要注意的一点是，迭代模型是增量的，它要求先完成部分系统功能或业务逻辑，然后依据客户反馈来进一步明确需求，最后通过一次次的迭代来给用户交付达标的产品。</p><p>以双 11 大促时的优惠会场项目为例，在一次迭代中，开发者会先实现会场的部分需求，然后在下一次迭代中，再根据用户的反馈，修正主会场的需求及完成剩余需求。</p><p>由于每次迭代都有测试，所以迭代模型客观上实现了测试的更早介入。</p><p>此外，作为一种以人为核心，强调迭代、循序渐进的开发方法，<strong>敏捷开发</strong>近几年非常流行。它有 Scrum、XP 等多种实现方式，当前 Scrum 模式采用较多。</p><p>虽然敏捷开发中的 Scrum 与上文提及的迭代模型（RUP）看起来很像，但两者概念完全不同，区别如下：</p>",8),q=e('<p>因此，从业务类型出发，如果有明确交付日（通常有合同约束），或者和外部公司合作的项目，比较适宜迭代模型；如果没有明确交付日，公司内部的产品，则更适用于敏捷开发。</p><p>综上所述可以看出，以上几种模型是随着技术与业务的变化逐渐演化的，软件测试从初始的瀑布模型的最后一道工序，逐渐被提前到敏捷开发模型（以 Scrum 为例）中的每一个 Sprint 中，测试在软件开发过程中发挥着越来越重要的作用。</p><h3 id="敏捷、devops、微服务等开发模型给测试带来的挑战" tabindex="-1">敏捷、DevOps、微服务等开发模型给测试带来的挑战 <a class="header-anchor" href="#敏捷、devops、微服务等开发模型给测试带来的挑战" aria-label="Permalink to &quot;敏捷、DevOps、微服务等开发模型给测试带来的挑战&quot;">​</a></h3><p>那前面我们说到了各自不同的软件开发模型，对于测试人员来说，在不同的开发模型下，保障质量所采用的方式也不尽相同。</p><p>在瀑布模型下，测试人员有大量时间去准备详尽的测试计划，step by step 的测试用例，但如果在敏捷、DevOps、微服务的模式下还采用相同的处理方式，就会导致工作流积压在测试一侧，无法及时向后进行，而持续集成也会因为测试迟迟不能结束而受到影响。</p><p>&quot;兵无常势、水无常形&quot;， 面对敏捷、DevOps、微服务这些开发模型时，我们要保障质量，就必须知道，它们各有什么特点？以及相比较传统开发模型，给我们带来了哪些挑战？</p><p><strong>1.敏捷开发</strong></p><p>由于敏捷开发模型每一个 Sprint 都是完整的，并且每一个 Sprint 结束时都会发布一个可工作的软件，所以在每一个 Sprint 内，测试工程师都要进行完备的测试，以确保发布出去的软件产品质量没问题。</p><p>而每个 Sprint 的周期比过去的瀑布模式开发缩短了很多，这意味着相同时间内，你发布的次数增多了。而每一次发布都意味着，你需要回归所有重要的测试场景（一般是 P0 和 P1 级别的测试必须回归，P2 和 P3 级别则视实际情况而定要不要回归）。那么可以想象一下，这里面的工作量有多大、多枯燥。</p><p>在敏捷开发模型中，测试不能仅仅关注测试本身，而且还要走出去。向左，要在项目立项阶段就介入进去，去寻找需求中可能存在的问题；向右，介入到发布后的流程中去，通过生产环境监控得来的各种数据去分析各种潜在的缺陷。在这过程当中&quot;牵一发而动全身&quot;，团队的每个角色（开发、质量保证人员、技术运维）都要对质量负责。</p><p><strong>2.DevOps</strong></p><p>这个时候，DevOps 和微服务便出现了。<strong>DevOps</strong>是开发、质量保证人员、技术运维三个角色的交集，它旨在通过自动化的&quot;软件交付&quot;和&quot;架构变更&quot;的流程，来解决不同角色之间合作的流畅度，以及把软件交付的构建、测试、发布变得更加快捷、频繁和可靠。</p>',12),m=t("p",null,"如果你所在公司采用了持续集成、持续部署流水线，它们一般都是 DevOps 的工作成果，DevOps 打破了部门墙，提升了研发效率。但这也给软件测试人员带来又一挑战：那就是如何在持续集成、持续部署的模式下保障质量？对于测试来说，如何把测试活动，特别是自动进行的测试活动无缝融合到公司的持续集成，持续部署的框架下，将是个很大的挑战，也是你在测试职业生涯上再走远些，将面对的问题。",-1),A=t("p",null,[t("strong",null,"3.微服务")],-1),D=t("p",null,[p("关于"),t("strong",null,"微服务"),p("，你只需知道微服务是相对于单体应用来说的，它将应用拆分成数个更小的独立服务，并使它们可以单独构建和部署。")],-1),S=e('<p>微服务的引进提升了开发效率，降低了发布时间，但也带来了新的挑战：由于各个微服务常由不同的团队负责，并且各个服务之间普遍依赖 API 完成通信和调用，那么这些 API 之间的&quot;契约&quot;就变得非常重要，&quot;契约测试&quot;也就相应产生了。</p><p>还有，相较于传统单体应用，微服务的测试也更加复杂。仅从代码打包部署这件事儿来说，在单体应用里，不太出现使用错测试包的情况，但是在微服务里，这个情况可能会发生。单体应用，一个版本就对应一个代码分支；而使用微服务，每个微服务通常对应不同的代码分支。这就意味着在测试微服务时，测试不仅要关注你测试的微服务是否版本部署正确，还要检查其依赖的其他微服务的部署分支，查看其他微服务的分支是不是也部署正确。</p><p>而且，微服务的采用，也让我们的技术栈更为繁多、复杂，比如：</p><ul><li><p>因为我解决微服务间复杂的通信和消息传递问题，引入了 RabbitMQ、RocketMQ、Kafka 各种消息中间件；</p></li><li><p>因为多个微服务的独立部署导致的环境依赖问题，引入了容器化技术 Docker；</p></li><li><p>容器越来越多，要解决其管理和维护问题而引入了 Kubernetes；</p></li><li><p>为简化故障定位问题，引入 ELK（Elasticsearch + Logstash + Kibana）；</p></li><li><p>上线后，要对系统运行情况进行监控，因而引入了 Prometheus 与 Grafana 等。</p></li></ul><p>以上&quot;新&quot;技术的引入，是为了不断应对软件开发演变中带来的各项需求和问题，解决了旧问题的同时，也带来了新挑战，例如：</p><ul><li><p>微服务独立部署、独立发布，那么微服务下的测试还能保持一成不变吗？以数据库举例，分库分表怎么来的？要怎么测试？</p></li><li><p>由于某些特殊情况（比如双十一）而导致服务雪崩，微服务会引发熔断、降级、限流等一系列保护措施，要怎么保证这些措施被正确实施了？</p></li><li><p>持续集成，持续部署流水线建立了，以往的测试框架如何最小成本嵌入变成流水线的一环？</p></li></ul><p>面对这些挑战，软件测试在快速演进的同时，也在裹挟前行，寻找破局之道。</p><h3 id="破局之道-测试开发" tabindex="-1">破局之道：测试开发 <a class="header-anchor" href="#破局之道-测试开发" aria-label="Permalink to &quot;破局之道：测试开发&quot;">​</a></h3><p>发布动作变得越来越频繁，以往靠大量手工功能测试 + 少量主流程自动化测试 + 部分回归测试来保障质量的做法，变得越来越不现实。自动化测试，特别是不同层次的自动化测试在整个测试活动中的占比，正逐渐成为影响软件发布质量的关键。这也就是测试开发在近年来越来越受追捧的原因。</p><p>这么多的自动化测试用例，需不需要维护？如何维护？如何将自动化测试融入公司的持续集成流程中并自动触发运行？这些都是测试开发首要关注的问题，可以预料的是，随着交付频率的加快，<strong>测试开发会变成软件测试人员的基本技能。</strong></p><p>也因此，作为功能测试的你，只有转型测试开发，才能测试道路上走得更远。至于功能测试如何转型测试开发，以及上文提及的挑战又该如何一一破解？且听下回分解。</p><p>好了，今天的分享就到这里，对于此课时，你有哪些困惑？或者你对测试开发有哪些见解？欢迎留言，我们可以互相探讨。</p><hr><p><a href="https://shenceyun.lagou.com/t/eka" target="_blank" rel="noreferrer">&quot;测试开发工程师名企直推营&quot; 入口，免费领取 50G 资料包</a></p>',14);function T(P,V,v,C,f,b){const o=n("Image");return _(),r("div",null,[i,s(o,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/4D/33/CgqCHl9ZvSGAKpmlAAA4o3sKd5Y462.png"}),p(),g,c,s(o,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/4D/33/CgqCHl9ZvSqAXEQcAABPrx_ZrLo979.png"}),p(),u,h,s(o,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/4D/28/Ciqc1F9ZvTOAQ6XyAACxG0F-NrM757.png"}),p(),d,s(o,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/4D/33/CgqCHl9ZvT2AVSYSAACo0SuDqsg373.png"}),p(),q,s(o,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image/M00/4D/33/CgqCHl9ZvVSAR1KWAABPvpTLCNk630.png"}),p(),m,A,D,s(o,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image/M00/4D/28/Ciqc1F9ZvWGAP7_DAACZKCm9RKE670.png"}),p(),S])}const N=a(l,[["render",T]]);export{I as __pageData,N as default};
