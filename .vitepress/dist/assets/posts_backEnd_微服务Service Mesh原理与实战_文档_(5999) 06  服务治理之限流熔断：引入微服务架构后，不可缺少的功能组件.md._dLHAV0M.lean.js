import{_ as p,F as a,g as n,K as e,h as s,ar as r,l as t,o as _}from"./chunks/framework.VlluEs-f.js";const B=JSON.parse('{"title":"06服务治理之限流熔断：引入微服务架构后，不可缺少的功能组件","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/微服务Service Mesh原理与实战_文档/(5999) 06  服务治理之限流熔断：引入微服务架构后，不可缺少的功能组件.md","filePath":"posts/backEnd/微服务Service Mesh原理与实战_文档/(5999) 06  服务治理之限流熔断：引入微服务架构后，不可缺少的功能组件.md","lastUpdated":1718371218000}'),l={name:"posts/backEnd/微服务Service Mesh原理与实战_文档/(5999) 06  服务治理之限流熔断：引入微服务架构后，不可缺少的功能组件.md"},i=r("",16),g=t("p",null,"漏桶效果图",-1),c=t("p",null,[t("strong",null,"令牌桶")],-1),u=t("p",null,[t("strong",null,"令牌桶（Token Bucket）是漏桶限流的一种优化方案"),s(" 。在微服务场景中，基本上都选择了此种方法，因为这种方式限流比较平滑，也不会产生漏桶错杀请求的问题。"),t("strong",null,"令牌桶允许一定的突发流量，所以非常适合微服务场景"),s("。")],-1),h=t("p",null,[s("令牌桶和漏桶在基本实现原理上差不多，最大的区别是限制角度不同，"),t("strong",null,"漏桶是限制流出的速度，而令牌桶是限制令牌流入的速度"),s("。令牌桶会单独维护一个令牌的存储桶，这个桶会持续放入令牌，并且配合设置一个 burst 的参数，作为令牌的存储上限；而放入令牌的每秒速度为每秒 limit 个，用户请求会源源不断地消耗桶中的令牌。当令牌桶内的令牌耗光，就会触发限流。")],-1),d=r("",23),m=r("",6),T=t("p",null,"本节内容到这里就结束了，下一讲我们一同来学习连接池，包括 TCP 连接的基础知识以及 HTTP 和 HTTP/2 协议连接层的详细知识。",-1),A=t("p",null,"经过这节内容的讲解，你觉得在你心目中哪种限流算法更适合微服务场景呢？欢迎在留言区和我分享你的观点。我们下一讲再见！",-1);function C(b,q,P,S,k,f){const o=a("Image");return _(),n("div",null,[i,e(o,{alt:"Lark20210105-141453.png",src:"https://s0.lgstatic.com/i/image2/M01/04/9B/Cip5yF_0A_WAZQgVAAAtmIjDVxI778.png"}),s(),g,c,u,h,e(o,{alt:"Lark20210105-120618.png",src:"https://s0.lgstatic.com/i/image/M00/8C/C2/CgqCHl_z5qSAT55BAABz-SY91_c773.png"}),s(),d,e(o,{alt:"Lark20210105-120624.png",src:"https://s0.lgstatic.com/i/image/M00/8C/C2/CgqCHl_z5rSAaZDdAACuiABilNk301.png"}),s(),m,e(o,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/8C/C2/CgqCHl_z5sKAAQ-6AAGFBeHo7q8634.png"}),s(),e(o,{alt:"Lark20210105-120626.png",src:"https://s0.lgstatic.com/i/image/M00/8C/B7/Ciqc1F_z5tmAU6aIAAFSXKvkjl0518.png"}),s(),T,A])}const I=p(l,[["render",C]]);export{B as __pageData,I as default};
