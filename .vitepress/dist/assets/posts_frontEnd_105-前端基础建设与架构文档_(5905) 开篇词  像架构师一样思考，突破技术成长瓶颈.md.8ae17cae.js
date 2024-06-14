import{_ as a,D as s,o as n,g as r,J as p,h as o,m as t,Q as l}from"./chunks/framework.f67d7268.js";const x=JSON.parse('{"title":"开篇词像架构师一样思考，突破技术成长瓶颈","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/105-前端基础建设与架构文档/(5905) 开篇词  像架构师一样思考，突破技术成长瓶颈.md","filePath":"posts/frontEnd/105-前端基础建设与架构文档/(5905) 开篇词  像架构师一样思考，突破技术成长瓶颈.md","lastUpdated":1696682708000}'),i={name:"posts/frontEnd/105-前端基础建设与架构文档/(5905) 开篇词  像架构师一样思考，突破技术成长瓶颈.md"},u=t("h1",{id:"开篇词像架构师一样思考-突破技术成长瓶颈",tabindex:"-1"},[o("开篇词像架构师一样思考，突破技术成长瓶颈 "),t("a",{class:"header-anchor",href:"#开篇词像架构师一样思考-突破技术成长瓶颈","aria-label":'Permalink to "开篇词像架构师一样思考，突破技术成长瓶颈"'},"​")],-1),_=t("p",null,[t("strong",null,"透过工程基建，架构有迹可循"),o(" 。你好，我是"),t("a",{href:"https://www.zhihu.com/people/lucas-hc/answers",target:"_blank",rel:"noreferrer"},"侯策（LucasHC）"),o("，目前任职于某互联网独角兽公司，带领 6 条业务线前端团队，负责架构设计和核心开发、工程方案调研和选型，以及团队管理、人才梯队建设等工作。")],-1),c=t("p",null,"从海外开启职业生涯、浸淫工匠般的 Coding 规范打磨，到深入国内一线大厂接受亿级流量的洗礼，我的工作方向始终没有离开前端开发。",-1),d=t("p",null,'前端开发是一个庞大的体系，纷杂的知识点铸成了一张信息密度极高的图谱。通过下面这张选自《Front-end Developer Handbook 2019》中的"前端技术学习路线图"，你可以清楚地看见前端开发的全貌。',-1),g=l('<p>前端技术学习路线图（来源：<a href="https://github.com/kamranahmedse/developer-roadmap" target="_blank" rel="noreferrer">https://github.com/kamranahmedse/developer-roadmap</a>）</p><p>在开发中，一行代码就可能触发宿主引擎的性能瓶颈；团队中的代码量几何级数式增长，可能就愈发尾大不掉，掣肘业务的发展。这些技术环节，或宏观或微观，都与工程化基建、架构设计息息相关。</p><p><strong>如何打造一个顺滑的工程化流程，为研发效率不断助力？如何建设一个稳定可靠的基础设施，为业务产出保驾护航</strong>？这些问题我在多年的工作中反复思考，不断结合实践，如今也有一些经验和感悟。</p><p>但事实上，让我将这些积累幻化成文字是需要一个契机的，我先从做这个专栏的初心，以及专栏内容涉及的技术谈起。</p><h3 id="求贤若渴的伯乐和凤毛麟角的人才" tabindex="-1">求贤若渴的伯乐和凤毛麟角的人才 <a class="header-anchor" href="#求贤若渴的伯乐和凤毛麟角的人才" aria-label="Permalink to &quot;求贤若渴的伯乐和凤毛麟角的人才&quot;">​</a></h3><p>作为团队管理者，一直以来我都被人才招聘所困扰。经历了数百场面试，我看到了太多千篇一律的&quot;皮囊&quot;：</p><ul><li><p>「我精通 Vue.js，看过 Vue.js 源码」=== 「我能熟记<code>Object.defineProperty</code>/ Proxy，也知道发布订阅模式」</p></li><li><p>「我精通 AST」===「我知道 AST 是抽象语法树，知道能用它做些什么」</p></li><li><p>「我熟练使用并了解 Babel」===「我能记清楚很多 Babel 配置项，甚至默写出 Babel Plugin 模板代码」</p></li></ul><p><strong>当知识技术成为应试八股文，人才招聘就沦为&quot;面试造火箭，工作拧螺丝&quot;的逢场作戏</strong>。对于上述问题，我不禁多问：</p><ul><li>「你知道 Vue.js 完整版和运行时版本的区别吗？」</li></ul><p>如果你不理解「Vue.runtime.js 运行时版本不包含模板编译器」，就大概率无法说清 Vue 在模板编译环节具体做了什么。如果只知道几个 APIs 实现数据劫持和发布订阅模式，又何谈精通原理？</p><ul><li>「请你手写一个&quot;匹配有效括号&quot;算法？」</li></ul><p>如果连 LeetCode 上 easy 难度的编译原理相关算法题都无法做出，那么何谈分词、AST 这些概念？</p><ul><li>「如何设计一个 C 端 Polyfill 方案？」</li></ul><p>如果不清楚<code>@babel/preset-env</code>的<code>useBuiltIns</code>不同配置背后的设计理念，又何谈了解 Babel，更别说设计一个性能更好的降级方案。</p><p>另一方面，<strong>我很理解求职者也面临困惑</strong>：</p><ul><li><p>我该如何避免相似的工作做三年，而不是具备了三年的工作经验？</p></li><li><p>我该如何从繁杂且千篇一律的业务需求中抽身出来，有时间总结提高自己？</p></li><li><p>我该如何为团队带来更大的价值，体现经验能力？</p></li></ul><p>为了破局，焦虑的开发者渐渐成为&quot;短期速成知识&quot;的收集者。你以为收藏的是知识，其实收藏的是&quot;知道&quot;，你以为掌握了知识，其实只是囤积了一堆&quot;知道&quot;。</p>',17),h=l('<p>于是，近些年我也一直在思考：&quot;如何抽象出真正有价值的开发知识&quot;，&quot;如何发现并解决技术成长瓶颈，培养人才&quot;。因此，<strong>我将自己在海外和 BAT 服务多年积累的经验分享给大家，把长时间以来我认为最有价值的信息系统性整理输出------这正是我做这个专栏的初心</strong>。</p><h3 id="从前端工程化基建和架构设计的价值谈起" tabindex="-1">从前端工程化基建和架构设计的价值谈起 <a class="header-anchor" href="#从前端工程化基建和架构设计的价值谈起" aria-label="Permalink to &quot;从前端工程化基建和架构设计的价值谈起&quot;">​</a></h3><p>从当前招聘情况和开发社区的现象上看，短平快、碎片化的内容（比如快速搞定&quot;面经题目&quot;）很容易演变成跳槽加薪的兴奋剂，但是在某种程度上它只能成为缓解焦虑的精神鸦片。</p><p>试想，如果你资质平平，又缺少团队中&quot;大牛&quot;的指点，工作内容就是在已有项目中写几个页面或运营活动，如此往复技术无法提高，三四年后和应届校招生也许并无差别。</p><p>这种情况出现的主要原因还是大部分开发者无法接触到好项目。这里的&quot;好项目&quot;是指：<strong>从 0 到 1 打造应用的基础建设、制定应用的工程化方案、实现应用的构建和发布流程、设计应用中公共方法和底层架构。系统性地研究这些知识，才能真正打通开发者&quot;任督二脉&quot;，实现个人和团队更大的价值</strong>。</p><p><strong>我把这样的内容总结定义为：前端工程化基建和架构设计</strong>。</p><p>它是每位开发者成长道路上的稀缺资源。一轮又一轮的业务需求是烦琐而机械的，工程化基建和架构设计却是万丈高楼的根基，是巨型航母的引擎和发动机，是区分一般开发者和一流架构师的分水岭。因此，前端工程化基建和架构设计的价值对于个人、对于业务，更是不言而喻。</p><h3 id="我理解的-前端工程化基建和架构设计" tabindex="-1">我理解的&quot;前端工程化基建和架构设计&quot; <a class="header-anchor" href="#我理解的-前端工程化基建和架构设计" aria-label="Permalink to &quot;我理解的&quot;前端工程化基建和架构设计&quot;&quot;">​</a></h3><p>我们知道，前端目前处在前所未有的地位高度：前端职位既收获着快速发展，也迎接着批量劣汰；前端技术有着与生俱来的混乱，也有着与之抗衡的规范。这都对前端工程化和基础建设提出了更高的挑战，对技术架构设计能力提出了更高的要求。</p><p>对于业务来说，在工程化基建当中：</p><ul><li><p>团队并非一个人单打独斗，那么如何设计工作流程，如何打造一个众人皆赞的项目根基？</p></li><li><p>项目依赖纷繁复杂，如何做好依赖管理和公共库管理？</p></li><li><p>如何深入理解框架，真正做到框架的精通和技术选型的准确拿捏？</p></li><li><p>从最基本的网络请求库说起，如何设计一个稳定灵活的多端 Fetch 库？</p></li><li><p>如何借力 Low Code / No Code 技术，实现越来越智能的应用搭建方案？</p></li><li><p>如何统一中后台项目架构，实现跨业务线的产研效率提升？</p></li><li><p>如何开发设计一套适合业务的组件库，封装分层样式，最大限度做到复用，提升开发效率？</p></li><li><p>如何制定跨端方案，Write Once，Run Everywhere 是否真的可行？</p></li><li><p>如何处理各种模块化规范，以及精确做到代码拆分的最佳实践？</p></li><li><p>如何区分开发边界，比如前端如何更好地利用 Node.js 方案开疆扩土？</p></li></ul><p>这都直接决定了前端的业务价值，体现了前端团队的技术能力。</p><p><strong>那具体什么是我心中的&quot;前端架构设计和工程化建设&quot;呢？</strong></p><p>我以身边常见的一些小细节作为例子：不管是菜鸟还是经验丰富的开发者，都有过被配置文件搞到焦头烂额的时候，一不小心就引起了命令行报错，编译不通过，终端上几行英文字母铺满 warning / error。</p><p>也许你可以通过搜索引擎找到临时解决方案，匆匆忙忙又重新回到业务开发中追赶工期。但报错的本源到底是什么，究竟什么是真正高效的解决方案？如果不深入探究，你很快还会因为类似的情况浪费大把时间，同时技术能力毫无提升。</p><p>再试想，对于开发时遇见的一些诡异问题，你也许删除一次<code>node_moudles</code>，并重新执行<code>npm install</code>，然后发现&quot;重启大法&quot;有时候真能奇迹般地解决问题。可是你对其中原理却鲜有探究，也不清楚这是否是一种优雅的解决方案。</p><p>又或者，为了实现一个通用功能（也许就是为了找到一个函数的参数用法），你不得不翻看项目中&quot;屎山代码&quot;，浪费了大把时间。可是面对历史代码，你却完全不敢重构，日积月累&quot;历史&quot;逐渐成为&quot;天坑&quot;，&quot;屎山代码&quot;成为业务桎梏。</p><p>基于多年对一线开发的观察，以及对人才成长的思考，我心中的&quot;前端工程化基建和架构设计&quot;不是简单的思维模式输出，不是纯粹阳春白雪的理论，也不是社区搜索即得的 Webpack 配置罗列和原理复述。而是<strong>从项目中的痛点提取基础建设的意义，从个人发展瓶颈总结工程化架构和底层设计</strong>，于是这门课程的内容呼之欲出。</p><h3 id="如何学习前端工程化基建和架构设计" tabindex="-1">如何学习前端工程化基建和架构设计？ <a class="header-anchor" href="#如何学习前端工程化基建和架构设计" aria-label="Permalink to &quot;如何学习前端工程化基建和架构设计？&quot;">​</a></h3><p>事实上，前端工程化基建和架构设计相关话题在网上的内容少之又少。我几乎翻遍社区上所有的相关联课程，它们更多是对 Webpack 的配置讲解、相关源码的复制粘贴，或 npm 基础用法的列举等。</p><p>我一直在思考，什么样的内容能够帮助读者<strong>突破&quot;会用&quot;的层面，能从更高的角度看待问题</strong>。在本课程中，我主要从以下几个方向展开讲解：</p><ul><li><p>前端工程化管理工具</p></li><li><p>现代化前端开发和架构生态</p></li><li><p>核心框架原理与代码设计模式</p></li><li><p>前端架构设计实战</p></li><li><p>前端全链路------Node.js 全栈开发</p></li></ul><p>在第一部分前端工程化管理工具中，我会以 npm 和 Yarn 包管理工具切入工程化主题，以 Webpack 和 Vite 构建工具加深读者对工程化的理解。事实上，工具的背后是原理，因此<strong>我并不会枯燥地枚举某项工具的优缺点和基本使用方式，而是深入几项极具代表性的技术原理和演变</strong>，我认为只有吃透这些内容，才能真正理解工程化架构和工具选型。希望通过第一部分，你能够感知到如何刨根问底地学习，如何像一名架构师一样思考。</p><p>在第二部分现代化前端开发和架构生态中，我将<strong>一网打尽那些大部分开发者每天都会接触到，但很少真正理解的知识点</strong> 。希望通过第二部分，你能够真正意识到：<strong>Webpack 工程师并不是写写配置文件那么简单，Babel 生态体系也不是使用 AST 技术玩转编译原理而已</strong>。这部分内容能够帮助你培养前端工程化和基础建设的整体思想，这些知识也是设计一个公共库、主导一项技术方案的基础。</p><p>第三部分我们一起来体验经典代码，设计模式和数据结构的艺术。<strong>通过再学习经典思想和剖析源码内容，相信你能够有新的收获</strong>。</p><p>在第四部分架构实战搭建中，我会<strong>一步一步带领大家从 0 到 1 实现一个完整的应用项目或公共库。这些工程实践并不是社区上泛滥的 Todo MVC，而是代表先进设计理念的现代化工程架构项目（比如设计实现前端 + 移动端离线包方案等）</strong>。同时在这个环节，我也会对编译和构建、部署和发布这一热门话题进行重点讨论。</p><p>最后一部分，我们以实战的方式，灵活运用并实践 Node.js。这一部分不会讲解 Node.js 的基础内容，这也就需要你先储备相关知识。我们的重点会放在 Node.js 的应用层面和建设发展话题上，比如我会<strong>带你设计并完成一个真正意义上的企业级网关，其中涉及网络知识、Node.js 理论知识、权限和代理知识等</strong> ，这会是对前端开发能力的综合培养；<strong>再比如我会带你研究并实现一个完善可靠的 Node.js 服务系统，它可能涉及异步消息队列、数据存储，以及相关微服务等传统后端知识，</strong> 让你能够真正在团队中落地 Node.js 技术，不断开疆扩土。</p>',27),q=t("p",null,"总之，这门课程内容很多，干货满满。",-1),m=t("p",null,'客观来说，我绝不相信一本"武功秘籍"就能让每个人一路打怪升级、一步登天。但我更想把这个专栏当作一个和你交流的机会，输出自己经验积累的同时，能帮助到每一个人。你准备好了吗？来和我一起，像架构师一样思考。',-1),b=t("hr",null,null,-1),f=t("p",null,"[",-1),A=t("p",null,[o("]("),t("a",{href:"https://shenceyun.lagou.com/t/mka",target:"_blank",rel:"noreferrer"},"https://shenceyun.lagou.com/t/mka"),o(")")],-1),k=t("p",null,[o("对标阿里P7技术需求 + 每月大厂内推，6 个月助你斩获名企高薪 Offer。"),t("a",{href:"https://shenceyun.lagou.com/t/mka",target:"_blank",rel:"noreferrer"},"点此链接，快来领取！")],-1);function T(C,P,V,N,j,S){const e=s("Image");return n(),r("div",null,[u,_,c,d,p(e,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/84/91/Ciqc1F_Ta9WAPisbAAmzmwMyqjc451.png"}),o(),g,p(e,{alt:"开篇词.png",src:"https://s0.lgstatic.com/i/image2/M01/00/66/CgpVE1_W_quAIgvfAAVY2hr10oY343.png"}),o(),h,p(e,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/84/9C/CgqCHl_Ta_mAZ4gNAAS5D-Wgai8936.png"}),o(),q,m,b,f,p(e,{alt:"大前端引流.png",src:"https://s0.lgstatic.com/i/image2/M01/00/66/CgpVE1_W_x2AaW0rAAdqMM6w3z0145.png"}),o(),A,k])}const B=a(i,[["render",T]]);export{x as __pageData,B as default};
