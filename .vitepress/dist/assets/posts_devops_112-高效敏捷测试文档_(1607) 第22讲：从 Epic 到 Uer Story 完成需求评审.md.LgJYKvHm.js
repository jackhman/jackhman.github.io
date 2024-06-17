import{_ as l,F as r,g as a,K as e,h as i,ar as p,l as o,o as s}from"./chunks/framework.VlluEs-f.js";const N=JSON.parse('{"title":"第22讲：从Epic到UerStory完成需求评审","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/112-高效敏捷测试文档/(1607) 第22讲：从 Epic 到 Uer Story 完成需求评审.md","filePath":"posts/devops/112-高效敏捷测试文档/(1607) 第22讲：从 Epic 到 Uer Story 完成需求评审.md","lastUpdated":1718371218000}'),n={name:"posts/devops/112-高效敏捷测试文档/(1607) 第22讲：从 Epic 到 Uer Story 完成需求评审.md"},c=p('<h1 id="第22讲-从epic到uerstory完成需求评审" tabindex="-1">第22讲：从Epic到UerStory完成需求评审 <a class="header-anchor" href="#第22讲-从epic到uerstory完成需求评审" aria-label="Permalink to &quot;第22讲：从Epic到UerStory完成需求评审&quot;">​</a></h1><br><p>传统的需求评审是通过评审会议，产品、开发、测试等各路人马坐在一起来完成市场需求文档（Market Requirements Document，MRD）或产品需求文档（Product Requirements Document，PRD）的评审，以发现如需求缺失、无意义的需求、模棱两可的描述等问题。</p><h3 id="通用的评审标准" tabindex="-1"><strong>通用的评审标准</strong> <a class="header-anchor" href="#通用的评审标准" aria-label="Permalink to &quot;**通用的评审标准**&quot;">​</a></h3><p>一般在评审前，需要明确评审标准，使评审有据可依。在一定程度上看，无论是传统的需求评审，还是敏捷需求评审，有些标准是通用的，具有普适性，例如在第 20 讲中所提到的需求可测试性，就是通用且必要的。需求评审标准还包含可行性（能够实现）、易修改性（文档容易维护）、正确性、易理解性、一致性等，有些要求，比如正确性、易理解性，看似简单，要做到也是不容易的，我们针对其中一个可以提出一系列的问题，想一想我们平时的需求文档是否都能给出明确、正确的回答？恐怕很难吧？</p><br><p><strong>1. 正确性：</strong></p><ul><li><p>需求定义是否符合软件标准、规范的要求？</p></li><li><p>每个需求定义是否都合理，经得起推敲？</p></li><li><p>是否所有的功能都有明确的目的？</p></li><li><p>是否存在对用户无意义的功能？</p></li><li><p>所采用的算法和规则是否科学、成熟和可靠？</p></li><li><p>有哪些证据说明用户提供的规则是正确的？</p></li></ul><br><p><strong>2. 一致性：</strong></p><ul><li><p>所定义的需求内容前后是否存在冲突和矛盾？</p></li><li><p>是否使用了标准术语和统一形式？</p></li><li><p>使用的术语是否是唯一的？</p></li><li><p>所规定的操作模式、算法和数据格式等是否相互兼容？</p></li></ul><br><p>除了正确性、易理解性、一致性、可测试性、可行性和易修改性之外，还需要考虑需求的完备性和可追溯性，这两点更有挑战，要做到完备几乎是不可能的，在敏捷中也不追求功能特性的完备性，而且是先交付高价值的特性，再交付中等价值、低价值的特性。但是，就第 20 讲提到的用户故事的验收标准，就需要考虑其完备性，尽量考虑或挖掘出各种输入 / 输出、条件限制、应用场景或操作模式，不仅包括正常的输入 / 输出、应用场景和操作模式，而且还要包括非法的输入 / 输出、异常的应用场景和操作模式等。针对数据项，甚至需要考虑其来源、类型、值域、精度、单位和格式等。</p><br><p>需求的可追溯性主要指每一项需求定义是否可以确定其来源，比如：</p><ul><li><p>是来自哪项具体的业务？</p></li><li><p>由哪个用户提出来的？</p></li><li><p>是否可以根据上下文找到所需要的依据或支持数据？</p></li><li><p>后续的功能变更是否都能找到其最初定义的功能？</p></li><li><p>功能的限制条件是否可以找到其存在的理由？</p></li></ul><h3 id="epic-的评审" tabindex="-1"><strong>Epic 的评审</strong> <a class="header-anchor" href="#epic-的评审" aria-label="Permalink to &quot;**Epic 的评审**&quot;">​</a></h3><p>对于敏捷项目，需求如何评审呢？一般敏捷的用户故事也是由特性拆解出来的，一个特性可以拆出很多个用户故事。从具体评审来看，就是要评审特性的描述和用户故事的描述，但在敏捷中，可能没有具体的特性描述，或者说，特性的评审属于传统的范围，可以按照上面讨论的通用标准来进行评审。而在敏捷中，面对的两个具体评审对象是用户故事和 Epic。我们可以先从宏观的------Epic 开始，再到微观------具体的每一个用户故事。</p><br><p>Epic 在敏捷中应用还是比较普遍的，但不同的人对 Epic 理解是不一样的，容易引起一些争议和混乱。<a href="https://www.agilealliance.org/glossary/epic/" target="_blank" rel="noreferrer">Epic</a> 最早由 Mike Cohn 在其《用户故事与敏捷开发》（User Stories Applied to Agile Software Development）一书中提出来，即&quot;When a story is too large, it is sometimes referred to as an epic&quot;。这里，Epic 是史诗般的大用户故事，也符合 Epic 这个词的本意。例如，说一部&quot;动作冒险电影&quot;，自然少不了一场汽车追逐、一场格斗或一场枪战等；上一讲提到的在线教育 App 的案例，自然也会有发现课程、购买课程、分销课程等这样的大故事。</p><br><p>但也有人（如 Atlassian 公司）认为 Epic 是一种与用户故事分开但包含用户故事的积压项目：Epic 是大块头的工作项，它可以分解为许多较小的用户故事（An epic is a large body of work that can be broken down into a number of smaller stories），可以看作图 1（即上一讲所描述的用户故事地图------图 5）的一列，即一组用户故事。</p><br>',23),_=o("p",null,"图1 用户故事地图示例",-1),u=o("br",null,null,-1),h=o("p",null,"总而言之，把 Epic 看成更大的故事，这没错，可以用图 2 来区分特性、Epic、用户故事和任务（task）之间的关系。",-1),q=o("br",null,null,-1),b=p("<p>图2 特性、Epic、用户故事和任务之间的关系</p><br><p>下面就来讨论 Epic 的评审，还是以在线教育 App 为例，从购买课程的用户角色出发，按照课程购买发生的活动顺序从左到右排列，从账户管理开始，到课程搜索、课程购买、课程管理，最后以课程分销结束。评审时，我们会提出以下一些问题：</p><ul><li><p>这个过程合理吗？符合时间顺序吗？</p></li><li><p>Epic 名称是否合理？</p></li><li><p>Epic 每个特性下面的用户故事（列）设置合理吗？</p></li><li><p>优先级设置是否合理？</p></li></ul><br><p>例如，比如 图 1，从购买课程的用户角色来看，是否能发现这些问题：</p><ul><li><p>账户管理是不是可以往后排一排？</p></li><li><p>&quot;课程搜索&quot;后是否要增加&quot;试读&quot;内容？取&quot;课程发现&quot;名称是不是更贴近用户？</p></li><li><p>&quot;综合查询&quot;比较模糊，也没必要，是不是可以改为&quot;关键词查询&quot;更明确些？</p></li><li><p>&quot;课程管理&quot;是否改完&quot;课程学习&quot;更为合理？</p></li><li><p>&quot;收益管理&quot;也偏大，是不是可以拆成两个故事&quot;收益提现&quot;和&quot;收益详情&quot;？</p></li><li><p>拼团购买，目前比较流行，也能吸引更多新用户参与。</p></li><li><p>课程分享再增加一个&quot;影响力榜&quot;，会吸引更多用户参与。</p></li><li><p>课程学习后是不是要做学习笔记，发现某一讲很好，是否要收藏？</p></li><li><p>如果要&quot;管理课程&quot;，是否要分为&quot;已购课程&quot;和&quot;未购课程&quot;或&quot;已购课程&quot;和&quot;所有课程&quot;。</p></li><li><p>.....</p></li></ul><br><p>经过评审之后，修改评审中所提出的问题，就形成了新的、更合理的用户故事地图，如图 3 所示。</p>",9),d=p('<p>图3 评审通过的用户故事地图示例</p><h3 id="用户故事的评审" tabindex="-1"><strong>用户故事的评审</strong> <a class="header-anchor" href="#用户故事的评审" aria-label="Permalink to &quot;**用户故事的评审**&quot;">​</a></h3><p>完成 Epic 的评审，就可以进入用户故事的评审。用户故事的评审相对具体、有标准，最常用的标准就是 INVEST：</p><blockquote><p>INVEST 原则：<br> Independent(独立的),Negotiable(可协商的),Valuable(有价值的),Estimable(可估算的),Sized Appropriately or Small(大小合适的),Testable(可测试的)</p></blockquote><p>这个 INVEST 清单最早起源于 Bill Wake 在 2003 年写的文章 INVEST in Good Stories, and SMART Tasks，该文章也将首字母缩写为 SMART（特定的、可衡量的、可实现的、相关的、限时），重新用于用户故事的技术分解所产生的任务。他还在 2012 年，写了 6 篇系列文章：</p><ul><li><p><a href="http://xp123.com/articles/independent-stories-in-the-invest-model/" target="_blank" rel="noreferrer"><strong>I</strong> ndependent Stories in the INVEST Model</a></p></li><li><p><a href="http://xp123.com/articles/negotiable-stories-in-the-invest-model/" target="_blank" rel="noreferrer"><strong>N</strong> egotiable Stories in the INVEST Model</a></p></li><li><p><a href="http://xp123.com/articles/valuable-stories-in-the-invest-model/" target="_blank" rel="noreferrer"><strong>V</strong> aluable Stories in the INVEST Model</a></p></li><li><p><a href="http://xp123.com/articles/estimable-stories-in-the-invest-model/" target="_blank" rel="noreferrer"><strong>E</strong> stimable Stories in the INVEST Model</a></p></li><li><p><a href="http://xp123.com/articles/small-scalable-stories-in-the-invest-model/" target="_blank" rel="noreferrer"><strong>S</strong> mall -- Scalable -- Stories in the INVEST Model</a></p></li><li><p><a href="http://xp123.com/articles/testable-stories-in-the-invest-model/" target="_blank" rel="noreferrer"><strong>T</strong> estable Stories in the INVEST Model</a></p></li></ul><br><p>其中以独立性这篇文章为例，他举了一个极端的例子，想象一组功能，具有 6 个能力：{A, B, C, D, E, F}。</p><br><p>如果我们也写了 6 个用户故事，分别覆盖了其中一些功能，比如：</p><ul><li><p>{A, B}</p></li><li><p>{A, B, F}</p></li><li><p>{B, C, D}</p></li><li><p>{B, C, F}</p></li><li><p>{B, E}</p></li><li><p>{E, F}</p></li></ul><br><p>这种重叠（耦合）是不是很痛苦？所以一定要让每个用户故事相对独立，这样不仅有利于实现，也有利于理解和沟通。</p><br><p>当初是为了整成一个容易记住的单词，所以 INVEST 由每个单词的首字母组成。从评审的过程看，先看这个用户故事有没有价值，这种价值是指对客户 / 用户的价值，而不关心对开发人员或测试人员有没有价值；如果没有价值，其他的 INEST 就不用看了。所以，评审的过程是从是否有价值开始，再检查其独立性、可协商性、可测试性、可估算等，如图 4 所示。</p><br>',16),g=p("<p>图4 用户故事评审过程示意图</p><br><p>一个用户故事越大，其估算的误差就越大，而可测试性在第 20 讲中已介绍，所以可估算、可测试性等比较容易理解，这里就不再说明了。</p><br><p>不容易理解的是&quot;可协商的（Negotiable）&quot;，因为我们之前说，需求越明确越好，不希望出现&quot;快&quot;、&quot;大概&quot;、&quot;可能&quot;、&quot;几乎&quot;等这样的词，越模糊就越不可测。可协商，是否意味着不明确呢？其实不是，只是说，用户故事不是功能的约定，将来是可以调整的，即用户故事的细节在未来开发过程中可以由客户和开发人员去协商，包括测试思路。</p><br><p>&quot;可协商的&quot;要求和可测试性是矛盾的，而且和我们之前说的 ATDD 也是有冲突的。如果在设计、编程之前就把用户故事的验收标准等明确下来，在未来开发过程中协商的空间就很小了。</p><br><p>再者，如果用户故事越明确，不仅有利于可测试性，也有利于估算。规模小，有时具有迷惑性或欺骗性，搞清楚更为重要；太小，也不一定是好事情，Mike Cohn 和 Kent Beck 合著的《用户故事与敏捷方法》提到了故事太小是第一个不良征兆，还举了一个例子，即下面的两个用户故事：</p><blockquote><p>搜索结果可以保存为XML文件<br> 搜索结果可以保存为HTML文件</p></blockquote><p>就应该合并为一个用户故事。用户故事的大小可以控制在几个人天的工作量，甚至 Bill Wake 认为故事通常最多只能代表几个人周的工作量。图 2 描述的场景算是通常情况，或者系统规模不大的情况，用户故事的工作量是几个人天；如果是大规模系统，用户故事的工作量可以达到几个人周。</p><br><p>至于说，用户故事需要满足 3C 原则：Card（卡片）、Conversation（会话）和 Confirmation（确认）等，即：</p><ul><li><p>卡片：卡片的空间很有限，促进用户故事简洁，捕获需求的精髓或目的。</p></li><li><p>会话：类似前面&quot;可协商的&quot;，强调需求的细节是在开发团队、产品负责人及利益相关人之间的会话中暴露和沟通的，用户故事仅仅作为建立这个会话的一个承诺。</p></li><li><p>确认：用户故事还要包含满足条件形式的确认信息，这些就是之前所说的、用于澄清期望行为的验收标准。</p></li></ul><br><p>从用户故事需求评审来看，还有一点要注意，它是表达客户的真实需求还是表达客户给出的解决方案。我们需要的是客户的真实需求，而不是解决方案，解决方案倒是我们开发团队所要做的事情。</p><br><p>我经常会举一个简单的例子，你去食堂吃饭，你的同事在路上碰到你，说：帮我买几个馒头回来，我就不去食堂了。&quot;买几个馒头&quot;是用户的需求，还是用户基于某个需求给出的解决方案呢？他的真实需求可能会是哪些呢？这算是留给你的思考题，欢迎留言讨论。</p>",18);function m(S,E,T,A,k,f){const t=r("Image");return s(),a("div",null,[c,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0B/4C/Ciqah16MkFuAa3XkAAUpaiyTZ7k375.png"}),i(),_,u,h,q,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0B/4C/Ciqah16MkFyALNRXAAHVTmmD7_U363.png"}),i(),b,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0B/4C/Ciqah16MkFyAFXDkAAFoeNHP4bo595.png"}),i(),d,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0B/4C/Ciqah16MkF2AQsP7AAG3hCtxZXY244.png"}),i(),g])}const V=l(n,[["render",m]]);export{N as __pageData,V as default};
