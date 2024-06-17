import{_ as e,F as _,g as i,K as a,h as s,ar as o,l as t,o as l}from"./chunks/framework.VlluEs-f.js";const M=JSON.parse('{"title":"第21讲：产品价值分析：商业画布、影响地图、故事地图","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/112-高效敏捷测试文档/(1606) 第21讲：产品价值分析：商业画布、影响地图、故事地图.md","filePath":"posts/devops/112-高效敏捷测试文档/(1606) 第21讲：产品价值分析：商业画布、影响地图、故事地图.md","lastUpdated":1718371218000}'),n={name:"posts/devops/112-高效敏捷测试文档/(1606) 第21讲：产品价值分析：商业画布、影响地图、故事地图.md"},r=o('<h1 id="第21讲-产品价值分析-商业画布、影响地图、故事地图" tabindex="-1">第21讲：产品价值分析：商业画布、影响地图、故事地图 <a class="header-anchor" href="#第21讲-产品价值分析-商业画布、影响地图、故事地图" aria-label="Permalink to &quot;第21讲：产品价值分析：商业画布、影响地图、故事地图&quot;">​</a></h1><br><p>上一讲介绍了用户故事的可测试性及 ATDD。这一讲为什么不继续讲测试，而要讲解产品价值分析呢？首要原因是由于我们提倡业务驱动测试，希望从业务的角度出发来进行测试分析与设计，然后再回归业务。</p><br><p>其次，当一个项目开始进行测试时，要清楚项目的上下文，这是第 3 讲提到的敏捷测试&quot;上下文驱动&quot;的思维方式，我们应该基于上下文进行测试需求分析、设计并制定测试计划。其中，产品和业务是最重要的测试上下文之一。</p><br><p>再者，敏捷特别强调交付&quot;价值&quot;给客户，团队必须做对客户有价值的事情。所以，无论是开发还是测试，都需要关注产品的价值。测试具有保证质量的责任，之前谈质量，更多是从质量模型所定义的质量特性（比如功能、性能、安全性等）出发；而在敏捷中，从客户价值出发更有意义，所以这一讲，我们就来讨论产品价值分析。</p><h3 id="产品价值是基础" tabindex="-1">产品价值是基础 <a class="header-anchor" href="#产品价值是基础" aria-label="Permalink to &quot;产品价值是基础&quot;">​</a></h3><p>产品价值是软件研发的基础，用户只有认可产品的价值才会购买并使用它。敏捷团队首先需要了解的是产品可以带给用户什么样的价值，以及谁才是目标用户；其次才是需求分析和功能特性的实现。然而在实际工作中，研发团队往往不太关心公司要做一个产品的目的是什么，只知道是由产品经理给出的建议，由高层领导来做决定，最后落实到研发团队。</p><br><p>根据 PMI（Project Management Institute）发布的年度报告，在 2017 年有 14% 的 IT 项目宣告失败，其中有 39% 是因为不正确的产品需求导致的，需求问题是项目失败的首要原因。为什么会这样呢？我们可以看看图 1，它用漫画的形式形象地描述了客户的需求是如何一步步走样的，最后改的面目全非。参与项目的每个角色对需求的理解都不一样，需求文档又很简单，客户的需求主要靠角色之间的沟通和交流来传递，挺像敏捷开发的场景，所以往往最后做出来的东西和客户想要的结果有很大偏差。</p><br>',12),c=o(`<p>图 1 被误解的用户需求（图片来源：维基百科）</p><br><p>有意思的是，第一张图里客户描述的需求和最后一张图里所揭示的客户真正的需求也不一样，正如乔布斯所说，客户其实不知道自己真正需要什么。但根本的原因在于一开始就没有挖掘出客户真正的需求，福特汽车公司的创始人亨利福特曾经说过：&quot;如果我当年去问顾客他们想要什么，他们肯定会告诉我需要一匹更快的马。&quot;客户真实的需求是一匹马吗？不，他们真正的需求是&quot;更快的交通工具&quot;。</p><br><p>由此可见，理解用户真正想要什么进而交付满足需要的产品，并不是一件容易的事，也不要假设产品经理要求你实现的功能一定是客户真正想要的。在做产品之前，多问问用户为什么需要这个产品或者某个功能特性，也许可以帮助纠正需求的偏差或者发现被忽略的隐性需求。</p><br><p>今天我来介绍三款工具，可以帮助我们了解产品价值和产品定位，以便更好地进行需求分析和管理。它们都有一个共同的特点，那就是一页纸可以包含所有的内容，特别适合敏捷开发模式，也特别适合敏捷团队进行需求方面的沟通和澄清，是非常有效的沟通工具。</p><h3 id="商业画布" tabindex="-1">商业画布 <a class="header-anchor" href="#商业画布" aria-label="Permalink to &quot;商业画布&quot;">​</a></h3><p>商业画布的概念来自《商业模式新生代》这本书，全称应该是商业模式画布（Business Model Canvas）。它是一个适合敏捷的商业模式分析工具，可以帮助研发团队快速地对产品的价值和市场定位，有一个整体的认识。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">商业模式定义：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">商业模式描述了企业如何创造价值、传递价值和获取价值的基本原理。------《商业模式新生代》</span></span></code></pre></div><br><p>商业画布由 9 个模块组成，如图 2 所示。我们通常用它来做企业的商业模式分析，每个模块其实有很多种可能性和替代方案，分析的过程就是从这些可能的方案里找到最佳的组合。好的商业模式往往不是一蹴而就的，需要在经营过程中不断调整，比如阿里巴巴最早的业务是 B2B 形式的，但今天更有价值的是淘宝天猫、蚂蚁金服等。一旦企业形成极具业务价值的商业模式，即使企业在短期甚至长期都不能盈利，但仍然也能受到追捧，比如亚马逊，因为我们相信好的商业模式下，赚钱是迟早的事。</p><br><p>研发团队可以用商业画布去收集相关信息来做为需求分析的输入。如果能邀请产品经理坐下来一起完成一个产品的商业画布，一边制作，一边沟通、澄清，效果更好。</p>`,14),h=t("p",null,"图 2 商业画布构造图",-1),d=t("br",null,null,-1),u=t("p",null,"用商业画布进行商业模式分析的过程基本如下。",-1),b=t("br",null,null,-1),A=t("p",null,"找到产品的目标用户群**（客户细分）** → 分析用户的需求**（价值主张）** 是什么→ 探讨怎样才能获取到用户**（渠道通路）** → 怎样建立和维持客户关系留住客户**（客户关系）** → 该用什么样的方式实现盈利**（收入来源）** → 发掘产品目前拥有什么样的核心资源，比如资金、技术、人力等**（核心资源）** → 列出必须要交付的业务功能**（关键业务）** → 找出重要的合作伙伴都有哪些**（关键合作伙伴）** → 分析投入产出比是怎样的**（成本结构）**。",-1),g=t("br",null,null,-1),T=t("p",null,'图 3 就是一个在线教育 App 产品的商业画布示例。从测试角度来看，我们应该重点关注其中的"客户细分、价值主张、客户关系、关键业务、渠道"等五项内容。',-1),q=t("br",null,null,-1),m=o('<p>图 3 在线教育 App 商业画布示例</p><h3 id="影响地图" tabindex="-1">影响地图 <a class="header-anchor" href="#影响地图" aria-label="Permalink to &quot;影响地图&quot;">​</a></h3><p>影响地图（Impact Mapping）是《影响地图：让你的软件产生真正的影响力》这本书提出的一个用于业务分析的可视化工具，它从 Why-Who-How-What 这四个方面，按照&quot;目标------角色------角色的影响方式------具体方案&quot;的顺序进行讨论，逐步提取出达成业务目标的解决方案。</p><br><p>利用这个工具，研发团队从&quot;为什么要做这个产品或者功能&quot;出发，和业务负责人一起讨论并制定一个产品或功能要实现的业务目标，然后识别出哪些角色会影响这个目标的实现，影响方式是什么，每种方式具体要做什么。研发团队可以从中识别出产品需要做哪些功能特性，同时帮助实现业务目标。</p><br><p>我以上面的在线教育 App 产品为例来讲解影响地图的使用。假设产品经理希望添加一个课程分销的功能，App 用户可通过这个功能把课程推广出去，并获得收益。</p><br><p>它的 Why-Who-How-What 四个方面内容如下：</p><ul><li><p>Why：包含两个方面的内容，第一，作为研发团队要了解为什么需要这个功能？比如&quot;分销功能&quot;是为了实现课程推广的裂变效应，从而提高销售额；第二，通过这个功能可以实现什么样的业务目标？设定的业务目标应该是明确、清晰、可衡量的，并且是可以实现的，比如在三个月内课程销售额通过分销功能增加 20%。</p></li><li><p>Who：为了达成目标需要影响到哪些角色？这些角色既可以帮助我们实现业务目标，也可能是阻碍目标的实现。在此案例里，识别出影响目标的角色包括：App 用户、市场推广人员、课程审核人员、课程讲师等。</p></li><li><p>How：表示需要用什么样的方式影响上述角色的行为来达成目标，既包含产生促进目标实现的正面行为，也包含消除阻碍目标实现的负面行为。</p></li><li><p>What：对于每一种影响方式，需要采取哪些具体方案。</p></li></ul><br><p>图 4 就是为这个分销功能制作的一个影响地图的示例。</p><br>',13),P=o('<p>图 4 影响地图示例</p><br><p>从这个例子的具体方案中，是不是可以识别出不少需要研发团队实现的功能特性？比如推广海报的制作、收益查看、提现和微信链接等。如果分析出来的功能特性比较多，团队需要对它们进行优先级排序，按照功能特性对业务目标的影响大小来决定哪些功能必须要有、哪些功能无关紧要，哪些功能要先做、哪些可以后做等。</p><br><p>同时，通过影响地图，研发团队可以清晰的知道产品或功能如何帮助企业实现业务目标，这样就会对自己做的产品更有信心，工作也会更有动力。</p><h3 id="用户-故事地图" tabindex="-1">（用户）故事地图 <a class="header-anchor" href="#用户-故事地图" aria-label="Permalink to &quot;（用户）故事地图&quot;">​</a></h3><p>使用商业画布和影响地图可以帮助团队明确产品的价值、目标、用户、主要功能特性等问题，这些问题解决之后，接下来研发团队就可以开始编写用户故事。一般情况下，先编写史诗级的用户故事（Epic），然后将每个 Epic 拆分成若干个用户故事。下一讲将会详细介绍如何进行用户故事的拆分和评审。这些不同的用户故事组成要实现的软件功能特性的待办事项（Backlog）。但这样形成的 Backlog 所呈现的用户故事是零散的，因此呈现的需求也是零散的，缺乏系统性。这时就需要引入用户故事地图（User Story Mapping）------一种生成用户故事的团队协作沟通的新方法。</p><br><p>用户故事地图的概念来自 Jeff Patton 创作的一本书，书名就叫《用户故事地图》，敏捷团队可以用它来协作产生用户故事，也可以用来进行需求分析管理。用户故事地图可以为敏捷团队解决下列问题：</p><ul><li><p>团队协作产生用户故事；</p></li><li><p>系统化地呈现软件要提供的全部功能；</p></li><li><p>识别出要交付软件的 MVP（Minimum Viable Product，最小化可用产品），目的是以最小的投入快速交付对用户最有价值的软件，这一点对于敏捷开发尤其重要，可以很好地服务于迭代增量开发；</p></li><li><p>呈现不同粒度的用户故事之间的关系（Epic 和用户故事）；</p></li><li><p>识别用户故事的优先级。</p></li></ul><br><p>用户故事地图需要敏捷团队成员共同完成，可以采用大家坐在一起进行头脑风暴的方式。我还是以在线教育 App 这个案例来设计一个用户故事地图，如图 5 所示，它从购买课程的用户角色出发，按照课程购买发生的活动顺序从左到右排列。最上面一行是 Epic 级别的用户故事，下面是每个 Epic 拆分出来的细粒度的用户故事，从上到下显示了用户故事的优先级，按照轻重缓急把用户故事分成三批进行交付，最有价值的用户故事放在第一批，次要的放在第二批，其他的放在第三批。这样，第一个可交付软件的 MVP （第一批用户故事）就出来了。</p><br><p>在一个软件产品中，不同用户类型对应不同的用户故事地图，对于在线教育 App，比如也可以给&quot;专栏讲师&quot;这个角色制作一个用户故事地图。</p><br>',15),E=o("<p>图 5 用户故事地图示例</p><br><p>今天的课程就讲到这里了，我来对所讲的内容做一个总结。这一讲主要介绍了三个工具，从价值和商业模式分析、如何对产品的某个功能深入分析，以及如何就功能特性及其优先级等进行有效沟通这三个方面进行了讲解。我把其中的重点总结如下。</p><ul><li><p>了解&quot;为什么要做一个产品&quot;是做出具有价值的软件产品的基础，研发团队可以用<strong>商业画布</strong>来对产品进行价值分析。</p></li><li><p><strong>影响地图</strong>可以帮助团队进行产品或某个功能的业务分析。从要实现的业务目标开始，按照 Why-Who-How-What 的顺序分解出要实现的具体功能特性，同时也能帮助我们整体了解实现业务目标的方式和途径。</p></li><li><p><strong>用户故事地图</strong>是一个团队协作和需求管理的工具，研发团队用来生成用户故事的同时，对要交付软件的功能特性以及用户故事的优先级也有了一个清晰、完整的理解和共识。</p></li></ul><br><p>最后给你留一个动手的练习：针对你所参与的软件产品，整理出一个用户故事地图，并思考是否需要增加新的用户故事？</p>",6);function S(k,C,V,I,D,f){const p=_("Image");return l(),i("div",null,[r,a(p,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/09/D5/Ciqah16J2pSAUt3bAAGOd9qz3j4361.jpg"}),s(),c,a(p,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/09/D5/Ciqah16J2pSAUasvAADYAQDCI70690.png"}),s(),h,d,u,b,A,g,T,q,a(p,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/09/D5/Ciqah16J2pWAHG2VAAGcLFilTeM857.png"}),s(),m,a(p,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/09/D5/Ciqah16J2pWAOs5kAAVOIbsDYTA245.png"}),s(),P,a(p,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/09/D5/Ciqah16J2pWAS2qEAATPX62PrkE180.png"}),s(),E])}const v=e(n,[["render",S]]);export{M as __pageData,v as default};
