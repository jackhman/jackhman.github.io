import{_ as l,D as s,o as p,g as a,J as i,h as o,m as t,Q as r}from"./chunks/framework.f67d7268.js";const N=JSON.parse('{"title":"开篇词为什么你要学习微服务架构？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Spring Cloud 原理与实战_文档/(4745) 开篇词  为什么你要学习微服务架构？.md","filePath":"posts/backEnd/Spring Cloud 原理与实战_文档/(4745) 开篇词  为什么你要学习微服务架构？.md","lastUpdated":1696682708000}'),e={name:"posts/backEnd/Spring Cloud 原理与实战_文档/(4745) 开篇词  为什么你要学习微服务架构？.md"},_=t("h1",{id:"开篇词为什么你要学习微服务架构",tabindex:"-1"},[o("开篇词为什么你要学习微服务架构？ "),t("a",{class:"header-anchor",href:"#开篇词为什么你要学习微服务架构","aria-label":'Permalink to "开篇词为什么你要学习微服务架构？"'},"​")],-1),g=t("p",null,"你好，我是萧然，长期从事分布式系统的构建和优化工作，负责过大型电商以及健康类系统的设计和开发，曾带领团队完成大规模微服务架构建设，在基于 Spring Cloud 进行微服务开发和治理方面积累了丰富的实践经验。",-1),d=t("p",null,"在当下的互联网应用中，业务体系不断发展变化，用户体量和性能要求远非传统行业所能比拟。以我所经历的电商、健康类应用为例，它们背后所承载的业务功能的复杂度、用户访问的并发量，以及快速迭代的开发要求，已远远超出了传统单体系统的设计和开发要求。如何高效地实现系统扩展性、伸缩性，以及维护性，成为一个非常现实且亟待解决的难题。",-1),c=t("p",null,[o("面对这样的挑战，业界普遍做法是引入服务拆分和集成的设计理念。而"),t("strong",null,"微服务架构"),o("通过将传统的单体应用按照业务边界划分为小型的、可以独立部署的服务单元，然后通过遵循轻量级的交互协议进行集成，成为这一理念下事实上的标准开发模式和最佳实践。")],-1),h=t("h3",{id:"如何让微服务架构真正落地",tabindex:"-1"},[o("如何让微服务架构真正落地？ "),t("a",{class:"header-anchor",href:"#如何让微服务架构真正落地","aria-label":'Permalink to "如何让微服务架构真正落地？"'},"​")],-1),u=t("p",null,"我们知道，服务拆分和集成的理念比较简单，但要真正实现却十分困难。因为一旦将一个单体系统拆分成多个服务，这时候我们面对的就是一个分布式系统。以电商系统为例，分布式系统构建方式的结构图如下所示：",-1),S=r('<p>分布式系统构建方式结构图</p><p>可以看到，在分布式系统中，我们可以根据业务边界拆分出一批独立的服务，这些独立的服务就相当于一个个单体系统。但这在缓解系统<strong>扩展性</strong> 、<strong>伸缩性</strong> 和<strong>维护性</strong>上的一系列问题的同时，也引入了系统的复杂性。除了跨进程通信所带来的网络传输三态性和异构性等固有特性，我们还不得不考虑如下所示的种种典型问题。</p><ul><li><p><strong>服务实例太多怎么办</strong>：当系统中存在大量独立服务时，如何有效识别和管理这些服务的实例？这将成为一大挑战！分布式系统，一定要能够实时对这些服务实例进行治理。</p></li><li><p><strong>服务调用关系太杂乱怎么办</strong>：服务数量所衍生的另一个问题，是服务调用之间的关系会变得混乱，客户端与各个服务之间也会存在较高的耦合度，分布式系统需要提供简洁而明确的入口供客户端访问。</p></li><li><p><strong>服务访问出错了怎么办</strong>：分布式环境下的调用，与单体系统中的方法级调用不同。服务间的跨进程调用可能出现各种意想不到的问题，这就需要在服务访问出错时进行合理的容错处理。</p></li><li><p><strong>配置信息散落在各个服务中怎么办</strong>：一旦系统被拆分成多个独立服务，分布式系统就需要确保分散在每个服务中的配置信息，以及所有服务在开发、测试和生产等环境中的配置信息得到统一管理。</p></li><li><p><strong>服务调用链路太长怎么办</strong>：服务远程调用的另一个问题是调用链路可能会很长，需要对整个调用链路进行监控和跟踪，从而高效发现服务调用过程中的异常场景和性能问题。</p></li></ul><p>微服务架构本质上也是一种分布式系统，但它在具备通用分布式系统的功能特性之外，还包含了一些特有组件，这些特有组件能够解决分布式系统所面临的上述问题。典型的微服务组件以及解决的问题如下所示。</p><ul><li><p><strong>服务治理</strong>：为了有效管理分布式系统中存在的大量服务实例，微服务架构引入了服务发现和服务注册机制，使得服务实例的管理变得自动化、透明化。</p></li><li><p><strong>API 网关</strong>：为了降低服务客户端与服务提供者之间的耦合度，更好地简化调用过程，微服务架构专门提供了一个 API 网关，用来优化面向客户端的 API 设计。</p></li><li><p><strong>服务容错</strong>：为了解决服务访问出错问题，微服务架构中提供了服务隔离、服务熔断和服务回退等面向服务调用端的有效容错机制。</p></li><li><p><strong>配置中心</strong>：为了更好地组织和管理散落在各个服务中的配置信息，微服务架构提供了一个配置中心来集中化管理。</p></li><li><p><strong>链路跟踪</strong>：为了高效监控服务调用的健康状态以及全链路的数据流转，微服务架构提供了链路跟踪机制，来对各个服务之间的调用过程进行统一管理。</p></li></ul><p>微服务架构的真正落地需要对应的框架和工具，而基于 Spring Boot 的 Spring Cloud 框架就内置了上述这些组件。自 2017 年后，Spring Cloud 在国内开始走红，越来越多的企业选择 Spring Cloud 作为微服务系统开发框架，Spring Cloud 俨然已经成为当下 Java 工程师所必须熟练掌握的技能。</p><h3 id="你为什么需要学习这门课" tabindex="-1">你为什么需要学习这门课？ <a class="header-anchor" href="#你为什么需要学习这门课" aria-label="Permalink to &quot;你为什么需要学习这门课？&quot;">​</a></h3><p>虽然 Spring Cloud 框架提供了开发友好性，但要真正落地却不容易。一方面，Spring Cloud 包含的技术组件非常多，每个组件又都有自己的应用场景和使用方式，组件与组件之间还存在着关联关系，需要有系统化、案例驱动的学习过程，才能有效地应用到工作中。另一方面，Spring Cloud 的底层实现机制也比较复杂，内部集成了很多第三方框架，只有通过由浅入深、源码级别的理解，才能避免在使用过程中踩坑。</p><p>无论公司基于何种业务，无论公司规模和人员如何，但凡涉及服务化拆分和集成场景，就需要使用微服务架构。如何根据业务边界对系统进行合理地拆分？如何基于 Spring Cloud， 从零开始构建一个完整的微服务系统？如何高效地掌握 Spring Cloud 中这些技术组件的使用方法以及实现原理？</p><p>以上种种已经成为很多架构师和开发人员需要规划和落实的一大课题，这也是各大互联网公司高薪诚聘的岗位需求。下面这些职位，都需要使用到 Spring Cloud 框架工具，既是我们应聘时重要的实力条件，也从侧面上拉开了入职薪资水平。</p>',10),m=r('<p>（以上职位信息来源：拉勾网）</p><p>我们从拉勾网的岗位信息可以看出，行业的高端人才需求量非常大，而市面上掌握 Spring Cloud 技术体系的开发人才却非常短缺。想要从事微服务系统的开发，就需要对微服务架构的设计和开发对应的应用场景有所了解，普通的开发人员对微服务架构的设计理念和相关实现技术了解不够全面，缺乏市场竞争力。</p><p>更为重要的是，大多数开发人员对用于构建微服务架构的 Spring Cloud 理解不够深入，只停留在应用层面而没有掌握其内部运行机制。一旦系统出现问题，无法从根本上分析问题和解决问题，无法往架构设计等高层次的优质人才发展。</p><h3 id="课程设计" tabindex="-1">课程设计 <a class="header-anchor" href="#课程设计" aria-label="Permalink to &quot;课程设计&quot;">​</a></h3><p>为了帮助更多的开发人员解决学习和实践问题，我总结过往经验，和拉勾教育一起输出了这次课程。</p><p>本课程整体分两大部分来讲解微服务架构设计：</p><ul><li><p><strong>基础篇</strong>。这部分介绍微服务架构的基本要素和技术体系，并正式引入 Spring Cloud 开源框架和介绍其功能特性，最后提供一个精简但足够完整的案例系统 SpringHealth，后续课程中所需要用到的 Spring Cloud 技术案例都会在其中有所体现。</p></li><li><p><strong>实践篇</strong>。合计 8 个模块，全面介绍如何基于 Spring Cloud 实现注册中心、API 网关、服务容错、配置中心、事件驱动架构、服务访问安全、链路跟踪等各大微服务技术体系。这些技术体系构成了一套完整的微服务解决方案，方便你基于这套解决方案思考如何构建主流的微服务系统。</p></li></ul>',7),C=t("p",null,"通过这个课程，我希望你不仅能够通过完整的案例了解各个组件的应用方式和方法，以及能够直接应用于日常开发的实战技巧，而且能够深入理解微服务组件的实现原理，做到知其然而知其所以然，打牢在工作中不断精进的地基。",-1),A=t("p",null,[o("此外，课程中涉及的各个 Spring Cloud 核心组件，都会基于完整的案例分析给出详细的代码实现方案，方便你学习、改造，课程配套代码可在 "),t("a",{href:"https://github.com/tianyilan12/springcloud-demo",target:"_blank",rel:"noreferrer"},"https://github.com/tianyilan12/springcloud-demo"),o(" 下载。")],-1),b=t("h3",{id:"讲师寄语",tabindex:"-1"},[o("讲师寄语 "),t("a",{class:"header-anchor",href:"#讲师寄语","aria-label":'Permalink to "讲师寄语"'},"​")],-1),P=t("p",null,"技术的发展日新月异，随着中台架构等设计理念的普及，合理构建微服务架构将是大部分软件系统面临的一大挑战，类似 Spring Cloud 的微服务系统开发框架也将迈向一个新的发展时期，并在更多企业中得到应用。希望这个课程能够让你学好 Spring Cloud 框架，并且能够更好地应用到日常开发过程中。",-1),T=t("p",null,"最后，欢迎你在留言区分享微服务系统和架构设计方面的经历和经验，或者不妨在留言区给自己立个 Flag，学完整个课程后再来回顾你的收获。",-1);function f(k,E,x,I,V,q){const n=s("Image");return p(),a("div",null,[_,g,d,c,h,u,i(n,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/52/F4/Ciqc1F9oE1iAThnmAABVN3yiPnc370.png"}),o(),S,i(n,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/52/F4/Ciqc1F9oE32AESUVAAAwxFt7k0k985.png"}),o(),i(n,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/52/F4/Ciqc1F9oE4KASKEZAAB7jk-eRaE755.png"}),o(),m,i(n,{alt:"1.png",src:"https://s0.lgstatic.com/i/image/M00/53/88/CgqCHl9oT1SAT4Y8AAZ03RXZXnk814.png"}),o(),C,A,b,P,T])}const D=l(e,[["render",f]]);export{N as __pageData,D as default};
