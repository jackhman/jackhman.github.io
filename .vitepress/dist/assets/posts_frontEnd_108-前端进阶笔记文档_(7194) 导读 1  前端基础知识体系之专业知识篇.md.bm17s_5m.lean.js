import{_ as c,F as i,g as l,K as a,h as t,ar as s,l as e,o as n}from"./chunks/framework.VlluEs-f.js";const ee=JSON.parse('{"title":"导读1前端基础知识体系之专业知识篇","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/108-前端进阶笔记文档/(7194) 导读 1  前端基础知识体系之专业知识篇.md","filePath":"posts/frontEnd/108-前端进阶笔记文档/(7194) 导读 1  前端基础知识体系之专业知识篇.md","lastUpdated":1718371218000}'),r={name:"posts/frontEnd/108-前端进阶笔记文档/(7194) 导读 1  前端基础知识体系之专业知识篇.md"},p=s("",9),d=e("p",null,[t("其中，DOM 操作与性能问题、事件委托以及浏览器中对"),e("code",null,"<script>"),t("和"),e("code",null,"<style>"),t('标签的处理过程，我将在01讲中进行讲解，其中也会稍微提到虚拟 DOM 的内容。但对于虚拟 DOM 设计存在的问题和各个框架是怎样进行优化的，我将在"17 | Angular/React/Vue 三大前端框架的设计特色"中介绍。')],-1),_=e("p",null,"接下来是 CSS，对于 CSS 的熟练程度会因人而异，面试官在面试 1~3 年经验的前端岗位候选人时会更多倾向于考察对页面布局原理的掌握，包括盒子模型、文档流、浮动布局等，以及常见页面布局的技巧，包括传统布局、Flex 布局和 Grid 布局。",-1),h=e("p",null,"同时，页面布局涉及浏览器的渲染过程，因此同样需要注意一些性能问题。",-1),g=s("",6),u=s("",9),S=e("p",null,"关于浏览器的结构和运行机制，我将在 08 课时进行讲解。其中涉及网络请求和 HTTP 相关的部分内容，则会在第 7 ~ 8 讲中介绍，同时我会带你了解浏览器的架构、线程和进程间的协作。在学习完这几讲的内容之后，你也可以整合其中的各个流程，梳理出根据自身理解而调整的最终流程和步骤。",-1),m=e("h3",{id:"node-js-相关",tabindex:"-1"},[t("Node.js 相关 "),e("a",{class:"header-anchor",href:"#node-js-相关","aria-label":'Permalink to "Node.js 相关"'},"​")],-1),C=e("p",null,"Node.js 和浏览器除了全局对象不一致以外，它们的 Event Loop 机制也有所区别。",-1),T=e("p",null,[t("很多时候，我们会使用 Node.js 去做一些脚本工程或是服务端接入层等工作。由于大部分前端的工作主要围绕网页、小程序、客户端这些内容，需要深度使用 Node.js 的场景较少，因此我们不会这个课程中过多地介绍它，你也可以通过"),e("a",{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=694&sid=20-h5Url-0#/sale&fileGuid=xxQTRXtVcqtHK6j8",target:"_blank",rel:"noreferrer"},"《Node.js 应用开发实战》"),t("专栏来进行深入地学习。")],-1),A=e("h3",{id:"网络相关",tabindex:"-1"},[t("网络相关 "),e("a",{class:"header-anchor",href:"#网络相关","aria-label":'Permalink to "网络相关"'},"​")],-1),f=e("p",null,"不管是网页、小程序，还是依赖 JavaScript 移植到客户端进行的原生应用开发（比如 React Native、Weex、Electron 等），我们基本上都离不开与服务端的通信。因此，我们还需要掌握网络相关的专业知识。",-1),P=e("p",null,'很多面试官都喜欢问"一个完整的 HTTP 请求过程"这个问题。通过这样一个问题，面试官可以了解到候选人对网络请求过程到浏览器渲染过程的掌握情况，其中网络相关的知识点会涉及以下知识点。',-1),v=e("p",null,'这些内容我会在" 06 | 一个网络请求是怎么进行的"中围绕核心内容进行介绍。',-1),b=e("p",null,"其次，网络请求存在各式各样的情况，比如使用缓存、建立 Websocket、短轮询与长轮询、获取用户登录状态等，这些内容都会直接与 HTTP 协议相关。因此，HTTP 协议相关的知识点也经常会被考察到，包括以下知识点。",-1),M=e("p",null,"其中，HTTP 消息体结构属于很基础的内容，我们的课程中并不会大范围介绍，在 07 课时中，主要围绕场景的 HTTP 协议应用场景来让你更好地理解 HTTP 协议相关内容。",-1),H=e("p",null,"除此之外，关于网络请求的性能优化也常常会被关注到。一般来说，网络请求的优化方案可能涉及缓存的使用、减少资源大小（分片、压缩、懒加载、预加载）、减少每个环节的耗时（DNS 查询、使用 CDN）、使用 HTTP/2 等各种应用场景，这些内容我将在第 21 ~ 22 讲中进行介绍。",-1),D=e("h3",{id:"安全相关",tabindex:"-1"},[t("安全相关 "),e("a",{class:"header-anchor",href:"#安全相关","aria-label":'Permalink to "安全相关"'},"​")],-1),x=e("p",null,"Web 安全是所有系统设计中都会关注的问题，对于前端开发来说，我们也需要时刻考虑是否存在安全风险。一般来说，常见的安全问题包括前端安全和其他 Web 安全。",-1),w=e("p",null,'其中，XSS 和 CSRF 是前端最容易遇到的问题，也是我们在开发过程中都要考虑的风险。我们不仅需要了解它们的攻击手段，更要掌握对其防范方案，这些分别在" 07 | HTTP 协议和前端开发有什么关系"和" 10 | 掌握前端框架模板引擎的实现原理"中进行介绍。学习了这些内容以后，或许你也会知道如何使用前端框架可以避免 XSS 漏洞。而当你在学习" 11 | 为什么说小程序比较特殊"之后，也能明白为什么在小程序中不存在 XSS 和 CSRF 安全风险。',-1),W=e("p",null,[t("除了与前端密切相关的 XSS 和 CSRF 以外，如果你对其他 Web 安全相关的知识也感兴趣，可以继续学习"),e("a",{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=585#/sale&fileGuid=xxQTRXtVcqtHK6j8",target:"_blank",rel:"noreferrer"},"《Web 安全攻防之道》专栏"),t("，或者推荐阅读《白帽子讲 Web 安全》一书。")],-1),j=e("h3",{id:"算法与数据结构",tabindex:"-1"},[t("算法与数据结构 "),e("a",{class:"header-anchor",href:"#算法与数据结构","aria-label":'Permalink to "算法与数据结构"'},"​")],-1),k=e("p",null,"大公司会考察算法基础，很多同学在准备找工作的时候也经常会去 Leetcode 上刷题。对于前端来说，大多数工作中都不会涉及算法相关，但在一些场景下我们可以使用它们设计出更好的数据结构和计算方式。",-1),N=e("p",null,"在面试过程中，容易被面试官考察到的内容包括这些内容。",-1),q=e("p",null,"很多人会觉得，对前端开发来说，算法好像并不那么重要，实际上大多数的日常开发中也用不到。但如果你关注较大型的前端应用领域，你就会发现它们的确会用到一些算法和数据结构。比如 VSCode 中对于文本缓冲区的性能优化过程中，重构了数据结构，其中就有用到红黑树。",-1),E=e("p",null,[t("合适的数据结构能从根本上大规模提升应用的性能，不管是前端开发也好，还是后台开发、大数据开发等，软件设计很多都是相通的。这部分的内容我们课程中也基本上不会涉及，因此建议你购买"),e("a",{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=185&sid=20-h5Url-0#/content&fileGuid=xxQTRXtVcqtHK6j8",target:"_blank",rel:"noreferrer"},"《重学数据结构与算法》"),t("专栏继续学习，或是去"),e("a",{href:"https://leetcode-cn.com/problemset/all/?fileGuid=xxQTRXtVcqtHK6j8",target:"_blank",rel:"noreferrer"},"Leetcode"),t("平台学习和研究。")],-1),J=e("h3",{id:"计算机通用知识",tabindex:"-1"},[t("计算机通用知识 "),e("a",{class:"header-anchor",href:"#计算机通用知识","aria-label":'Permalink to "计算机通用知识"'},"​")],-1),O=e("p",null,"除了算法和数据结构以外，计算机通用知识同样在前端开发的日常工作中接触不多。这些内容其实是开发必备的基础，不管是打算发展成为大前端也好、全栈开发也好，还是只希望涉及纯前端的开发内容，我们都需要理解和掌握。比如计算机资源和编程与设计模式。",-1),V=e("p",null,"这些内容你可以作为自身前端知识体系的补充进行学习。提醒一下，我们在日常工作中，可以更多地关注其他配合方（客户端、后台等）的实现和能力，除了可以更好地配合和理解他们的工作外，还可以提升自己对编程和语言设计、通用技术方案的理解。",-1),B=e("p",null,"很多时候，前端由于门槛较低，很多的前端开发都不是计算机专业出身。我们对于计算机基础、网络基础、算法和数据结构等内容掌握很少，更多时候是这些知识的缺乏阻碍了我们在程序员这一职业的发展，这也是为什么很多前端开发苦恼自己到达天花板，想着转型全栈或者后台就能走得更远。",-1),I=e("h3",{id:"总结",tabindex:"-1"},[t("总结 "),e("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),L=e("p",null,"今天，我主要结合面试角度，梳理了前端专业领域相关知识，这些知识常见于应届生或者工作年限较短（1 ~ 3 年）的前端开发在面试过程中会被考察到。",-1),z=e("p",null,'其中计算机基础、网络基础、算法和数据结构等内容与前端岗位的关联性并不大，属于通用的开发工程师素养，这些内容在我们课程中会较少体现。除此之外的其他内容，我们会在"专业知识篇：核心基础"中，围绕核心知识点进行详细介绍。',-1),R=e("p",null,"对于已有较多工作经历（3 ~ 5 年）的前端来说，更多时候会被考察到项目经验和解决方案的设计，我会在下一篇文章中进行介绍。",-1),y=e("p",null,"最后，我也帮你整理了本讲内容的知识体系，便于你复习保存。",-1),K=e("p",null,"除了上面提到的这些内容，你觉得前端专业的知识体系还包括哪些？可以在留言区说说你的想法。",-1);function X(F,G,Q,U,Y,$){const o=i("Image");return n(),l("div",null,[p,a(o,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image6/M00/33/CC/CioPOWBvzl2AHqsCAACewh4zyOA873.png"}),t(),d,_,h,a(o,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M00/33/CC/CioPOWBvzmSAS5bvAACJzOs2jdU476.png"}),t(),g,a(o,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image6/M00/33/CC/CioPOWBvzmyAKrVwAAF5woU2E9Y296.png"}),t(),u,a(o,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image6/M00/33/CC/CioPOWBvznWAfmHLAAFj-29C_Iw491.png"}),t(),S,m,C,a(o,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image6/M00/33/C4/Cgp9HWBvznuAPTG_AACeynoph4s355.png"}),t(),T,A,f,P,a(o,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image6/M00/33/CC/CioPOWBvzoSAKSjTAABzfdV6svQ146.png"}),t(),v,b,a(o,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image6/M00/33/CC/CioPOWBvzouAH5ZDAACvg3Io-sY893.png"}),t(),M,H,D,x,a(o,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image6/M00/33/C4/Cgp9HWBvzpOAQsqoAADw4wMLzAA014.png"}),t(),w,W,j,k,N,a(o,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image6/M00/33/C4/Cgp9HWBvzpyAcL5HAADoKl-aSNM121.png"}),t(),q,E,J,O,a(o,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image6/M00/33/C4/Cgp9HWBvzqWAWfgjAAE7PYMKF9o243.png"}),t(),V,B,I,L,z,R,y,a(o,{alt:"Drawing 11.png",src:"https://s0.lgstatic.com/i/image6/M00/33/CC/CioPOWBvzrmADsYtABXPdM5MJOs342.png"}),t(),K])}const te=c(r,[["render",X]]);export{ee as __pageData,te as default};
