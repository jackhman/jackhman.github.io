import{_ as n,D as _,o as r,g as p,J as s,h as o,Q as e,m as t}from"./chunks/framework.f67d7268.js";const S=JSON.parse('{"title":"结束语云原生不是服务端架构的终点","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Go 微服务实战 38 讲_文档/(3834) 结束语  云原生不是服务端架构的终点.md","filePath":"posts/backEnd/Go 微服务实战 38 讲_文档/(3834) 结束语  云原生不是服务端架构的终点.md","lastUpdated":1696682708000}'),c={name:"posts/backEnd/Go 微服务实战 38 讲_文档/(3834) 结束语  云原生不是服务端架构的终点.md"},i=e('<h1 id="结束语云原生不是服务端架构的终点" tabindex="-1">结束语云原生不是服务端架构的终点 <a class="header-anchor" href="#结束语云原生不是服务端架构的终点" aria-label="Permalink to &quot;结束语云原生不是服务端架构的终点&quot;">​</a></h1><p>你好，我是 aoho，感谢大家的陪伴，课程到这里已经临近尾声。</p><p>十分感谢读到这里的你，感谢你一路坚持，最终来到了课程的结尾。在课程刚开始时，我曾建议你给自己定个目标，然后将目标进行拆分，每天进步一点点，并多在课程下方留言和大家一起交流。不清楚看到我的这段建议后，认可这种学习方式并且真正坚持下来的人有多少。世间的路和道理就是如此，一万个人读到我的建议，一千人被启发，一百人去执行，最后可能只有一人坚持下来。</p><p>所以，再次感谢你的坚持，最终能陪伴课程一起走到这里，想必你一定是一个对学习有着充分的热爱、有恒心和毅力的人。我希望你能继续坚持，继续成长。</p><h3 id="如何深入学习一门技术" tabindex="-1">如何深入学习一门技术 <a class="header-anchor" href="#如何深入学习一门技术" aria-label="Permalink to &quot;如何深入学习一门技术&quot;">​</a></h3><p><strong>要想学好一门技术，并不能单单去了解如何使用它，还需要更加深入，学习并掌握与它相关的方方面面。</strong></p><p>技术并不是凭空产生的，必然有其出现的背景、初衷和需要解决的问题。作为云原生代表技术的微服务架构和 Go 语言也是如此，所以你需要了解微服务架构和 Go 语言的成因和目标，也就是它们这项技术的&quot;<strong>灵魂</strong>&quot;。</p><p>技术没有银弹，只要是技术就会有其优势和劣势。那云原生和 Go 语言有什么优势或者劣势呢？学习了本次课程的你是否已经了解了呢？</p><p>除此之外，你还需要了解技术的适用场景、组成部分和关键点，这是技术的核心思想和核心组件，也是这个技术的&quot;灵魂&quot;所在。<strong>学习技术的核心部分是快速掌握的关键。</strong></p><p>如果你每次学习一项技术时都能思考如上这些问题，相信你一定会最终深入了解到这项技术的精髓，而且在学习的深度和高度上也会超越很多人。如果你能保持这种状态三四年，你一定会对技术的演化有更加准确的判断和思考，甚至可以引领某个专精的技术领域。</p>',10),l=t("h3",{id:"云原生的未来",tabindex:"-1"},[o("云原生的未来 "),t("a",{class:"header-anchor",href:"#云原生的未来","aria-label":'Permalink to "云原生的未来"'},"​")],-1),g=t("p",null,"关于学习的技巧以及坚持的重要性，我就不说太多了。这里，我想和你更加深入地聊一聊云原生的发展和未来，这个可能是很多开发人员都很关心的话题。",-1),d=e("<p>云原生的 4 个要点</p><p>从早期单体应用开发时代，到分层架构，到 SOA，再到微服务和云原生，后端架构技术都是随着时代的需求而不断演化，不同的时代需要不同的系统架构。而<strong>云原生则有成为后端主流基础架构的趋势</strong>，其最底层是基础操作系统环境，中间层是存储系统、运算系统和网络系统，再上层是服务发现、远程调用、消息队列、配置中心和分布式数据库等中间件，这些系统共同向上为用户的业务系统提供支持，减少业务开发和服务运维的工作量，提高开发效率。</p><p>由上可以看出云原生架构有很多的优势，但是它目前又有什么缺点呢？它会像单体应用一样被逐渐淘汰，还是像 SOA 一样还未流行就日渐衰微？</p><p><strong>云原生应用的最大问题在于迁移成本</strong> ，当你需要迁移部分或者全部应用程序时，就不得不考虑你所涉及的云原生 API 是不是跨云平台的，就像是 C++ 程序在迁移不同操作系统时需要调用不同的系统调用一样。某种意义上，云平台成了更为上层的操作系统，而依赖云平台的云原生应用也面临着跟 C++ 等无法跨平台语言开发程序一样的问题，也就是所谓的<strong>历史重演</strong>。</p><p><strong>后续是否会有跨云平台的开发技术的出现</strong>，类似于 Java 程序一样，一处编译，处处运行，这将影响到云原生架构能否真正流行，也关系着云原生技术的未来。</p><p>另外，当云原生架构的微服务实例数量急剧扩大时，对于整个庞大的微服务架构集群的监控，运维和管理将变得极其复杂和困难，稍有不慎，将导致连锁反应，影响整个集群。所以，<strong>自动化或者智能化运维也是云原生技术后续发展的一个方向</strong>。</p><p>无论如何，<strong>新技术的产生必然是为了解决旧的问题，也必然会引入新的问题，技术的演进一方面在螺旋上升，一方面又是在不断重复</strong>。当云平台成为类似操作系统一样的基础底层后，之前在操作系统层面上出现的问题也会在云平台上一一重现。</p>",7),h=t("p",null,[t("strong",null,"因此，你更需要关注技术的本质，掌握更为基础、更为深层次的原理和知识，了解其优缺点，让自己能更好、更快地适应不断演化的技术，永远成为技术潮流的弄潮儿。")],-1),m=t("p",null,"再次感谢你一路陪伴，祝你在代码的世界幸福徜徉。当然如果你觉得我这门课程不错的话，也欢迎你推荐给身边的朋友。",-1),A=t("p",null,[o("最后，我邀请你参与对本课程的评价，你的每一个意见或建议对我来说都是很重要的。"),t("a",{href:"https://wj.qq.com/s2/7505482/de2a/",target:"_blank",rel:"noreferrer"},"点击链接，即可参与评价"),o("，还有机会获得惊喜奖品哦！")],-1);function u(C,T,f,q,b,k){const a=_("Image");return r(),p("div",null,[i,s(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/6C/C3/CgqCHl-riNyAXn32AAO4jKTwApk904.png"}),o(),l,g,s(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/6C/B8/Ciqc1F-riOWAY6AEAAKEtDAGnM8802.png"}),o(),d,s(a,{alt:"1.png",src:"https://s0.lgstatic.com/i/image/M00/6C/B9/Ciqc1F-riViAJLHnACUBeIGIpaU547.png"}),o(),h,m,A])}const I=n(c,[["render",u]]);export{S as __pageData,I as default};
