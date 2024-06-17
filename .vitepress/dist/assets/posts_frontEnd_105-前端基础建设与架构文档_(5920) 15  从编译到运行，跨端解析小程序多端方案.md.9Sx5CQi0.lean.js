import{_ as l,F as p,g as h,K as a,h as s,ar as t,l as n,o as e}from"./chunks/framework.VlluEs-f.js";const M=JSON.parse('{"title":"15从编译到运行，跨端解析小程序多端方案","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/105-前端基础建设与架构文档/(5920) 15  从编译到运行，跨端解析小程序多端方案.md","filePath":"posts/frontEnd/105-前端基础建设与架构文档/(5920) 15  从编译到运行，跨端解析小程序多端方案.md","lastUpdated":1718371218000}'),k={name:"posts/frontEnd/105-前端基础建设与架构文档/(5920) 15  从编译到运行，跨端解析小程序多端方案.md"},E=t("",6),r=t("",12),d=n("p",null,[s("其中，因为小程序基本都可以接受 H5 环境中的 CSS，因此"),n("strong",null,"style 部分基本可以直接平滑迁移"),s("。template 转换为 .wxml 文件，需要进行 HTML 标签、模版语法的转换。以微信小程序举例，转换目标如下图：")],-1),g=n("p",null,"编译过程图",-1),o=n("p",null,"那么上图表述的编译过程具体应该如何实现呢？可能你会想到正则，但正则的能力有限，复杂度也较高。更普遍的做法，如 mpvue、uni-app 等，都依赖了 AST（抽象语法树）技术。AST（抽象语法树）其实并不复杂，Babel 生态就为我们提供了很多开箱即用的 AST 分析和操作工具。下图是一个简单的 Vue 模版经过 AST 分析后的产出：",-1),c=t("",5),y=t("",8),C=n("p",null,"经过上述步骤，我们的多端方案内置了 Vue 运行时版，并实例化了一个 Vue 实例，同时在初始阶段调用了小程序平台的 Page() 方法，因此也就有了一个小程序实例。",-1),F=n("p",null,[s("下面的工作，就是"),n("strong",null,"在运行时将 Vue 实例和小程序实例进行关联"),s("，以做到：数据变动时，小程序实例能够调用 setData() 方法，进行渲染层更新。")],-1),A=n("p",null,[s("思想确立后，如何实施呢？首先这就需要你对 Vue 原理足够清楚了：Vue 基于响应式，对数据进行监听，在数据改动时，新生成一份虚拟节点 VNode。接下来"),n("strong",null,"对比新旧两份虚拟节点，找到 Diff，并进行 patch 操作，最终更新了真实的 DOM 节点"),s("。")],-1),u=n("p",null,"因为小程序架构中，并没有提供操作小程序节点的 API 方法，因此对于小程序多端方案，我们显然不需要进行 Vue 源码中的 patch 操作。又因为小程序隔离了渲染进程（渲染层）和逻辑进程（逻辑层），我们不需要处理渲染层，只需要调用 setData() 方法，更新一份最新的数据就可以了。",-1),D=n("p",null,'因此，借助 Vue 现有的能力，我们秉承"数据部分让 Vue 运行时版接手，渲染部分让小程序架构接手"的理念，就能实现一个类 Vue 风格的多端框架。框架原理如图：',-1),_=t("",12),m=t("",8),f=t("",6),T=n("p",null,"你可以类比出一套更好的 React 支持多端小程序的架构设计，如下图：",-1),b=t("",6),B=t("",9),v=t("",15),H=n("p",null,"从小程序发展元年开始，到 2018 微信小程序的起飞，再到后续各大厂商快速跟进、各大寡头平台自建小程序生态，小程序现象带给我们的不仅仅是业务价值方面的讨论和启迪，也应该是对相关技术架构的巡礼和探索。作为开发者，我认为对技术的深度挖掘和运用，是能够始终矗立在时代风口浪尖的重要根基。",-1),R=n("p",null,"下一讲，我将带你分析 Flutter 和原生跨平台技术栈，同时梳理当下相关技术热点。跨平台其实是一个老生常谈的话题，技术方案也是历经变迁，但始终热点不断。下一讲的内容和今天的内容也有着千丝万缕的联系，别走开，我们下一讲再见！",-1);function x(I,S,P,V,N,q){const i=p("Image");return e(),h("div",null,[E,a(i,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/91/75/Ciqc1GAOlPOADUxDAACGGDiNvBo264.png"}),s(),r,a(i,{alt:"Lark20210129-191128.png",src:"https://s0.lgstatic.com/i/image/M00/93/2E/CgqCHmAT7b2AYQJdAADnHNucgjE454.png"}),s(),d,a(i,{alt:"Lark20210129-191131.png",src:"https://s0.lgstatic.com/i/image/M00/93/23/Ciqc1GAT7auABbA4AAD1EDPUmAQ243.png"}),s(),g,o,a(i,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/91/75/Ciqc1GAOlROAPr2kAAK2OejCvBU840.png"}),s(),c,a(i,{alt:"Lark20210129-191134.png",src:"https://s0.lgstatic.com/i/image/M00/93/2E/CgqCHmAT7ceAKd6fAACYXlFC1nQ021.png"}),s(),y,a(i,{alt:"Lark20210129-191136.png",src:"https://s0.lgstatic.com/i/image/M00/93/2E/CgqCHmAT7dKAGSVzAAEawS6G6xY828.png"}),s(),C,F,A,u,D,a(i,{alt:"图片2.png",src:"https://s0.lgstatic.com/i/image/M00/94/37/CgqCHmAXmvKAEQr9AAErNUu9oi4120.png"}),s(),_,a(i,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image2/M01/09/65/Cip5yGAOlUeAEB4oAAO9Arzu18g785.png"}),s(),m,a(i,{alt:"Lark20210129-191112.png",src:"https://s0.lgstatic.com/i/image/M00/93/2E/CgqCHmAT7hyAENc8AAFoe_ttcg4719.png"}),s(),f,a(i,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image/M00/91/75/Ciqc1GAOlWyAV2OnAADz2iM_2mM698.png"}),s(),T,a(i,{alt:"Lark20210129-192321.png",src:"https://s0.lgstatic.com/i/image/M00/93/2E/CgqCHmAT8DSAGRn-AAJEN4yKmdI464.png"}),s(),b,a(i,{alt:"Lark20210129-192324.png",src:"https://s0.lgstatic.com/i/image/M00/93/23/Ciqc1GAT8D6ADrYMAAICYbpPasw785.png"}),s(),B,a(i,{alt:"图片3.png",src:"https://s0.lgstatic.com/i/image/M00/94/2C/Ciqc1GAXmzmACf4fAAVidO1Nf0U984.png"}),s(),v,a(i,{alt:"Drawing 13.png",src:"https://s0.lgstatic.com/i/image/M00/91/80/CgqCHmAOlbyATtP1AAHVogfDtTQ350.png"}),s(),H,R])}const O=l(k,[["render",x]]);export{M as __pageData,O as default};
