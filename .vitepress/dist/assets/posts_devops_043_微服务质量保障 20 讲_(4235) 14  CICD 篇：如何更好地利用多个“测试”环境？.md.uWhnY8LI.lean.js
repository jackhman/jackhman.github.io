import{_ as s,F as n,g as i,K as a,h as p,ar as e,l as t,o as l}from"./chunks/framework.VlluEs-f.js";const F=JSON.parse('{"title":"14CICD篇：如何更好地利用多个“测试”环境？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/043_微服务质量保障 20 讲/(4235) 14  CICD 篇：如何更好地利用多个“测试”环境？.md","filePath":"posts/devops/043_微服务质量保障 20 讲/(4235) 14  CICD 篇：如何更好地利用多个“测试”环境？.md","lastUpdated":1718371218000}'),r={name:"posts/devops/043_微服务质量保障 20 讲/(4235) 14  CICD 篇：如何更好地利用多个“测试”环境？.md"},_=e("",5),g=t("p",null,"持续集成示意图",-1),c=t("p",null,[p('而"CD"的含义却有两种：持续交付（Continuous Delivery）、持续部署（Continuous Deployment）。持续部署和持续交付是两个特别容易混淆的概念，它们之间最为本质的区别是：'),t("strong",null,"持续部署是一个技术操作，而持续交付则是一个业务行为。")],-1),u=t("p",null,"我这边具体展开来说下它们两者的区别。",-1),h=t("ul",null,[t("li",null,"持续交付")],-1),d=t("p",null,"持续交付是指所有开发人员始终让 Master 分支（也叫做主干分支或发布分支）保持可随时发布的状态，根据实际需要来判断是否进行一键式地发布。",-1),C=t("p",null,"持续交付主要通过如下方式来实现：开发人员在特性分支（Feature分支）上工作，这些分支存在比较短暂的时间，进行过相应的功能测试后，则可以合并到 Master 分支。如果发现引入了其他错误类型（包括缺陷、性能问题、安全问题、可用性问题等）则将测试结果反馈给开发人员，开发人员立即对问题进行解决，使主干始终处于可部署状态，如下图所示。",-1),q=t("p",null,"持续交付示意图",-1),m=t("ul",null,[t("li",null,"持续部署")],-1),T=t("p",null,[p("持续部署是指，在持续交付的基础上，由开发人员或运维人员自助式地向生产环境部署优质的构建版本，甚至每当开发人员提交代码变更时，就触发自动化部署到生产环境。"),t("strong",null,"可见，持续交付是持续部署的前提，就像持续集成是持续交付的前提条件一样。"),p(" 如下图所示。")],-1),A=e("",6),D=e("",12),I=t("ul",null,[t("li",null,[t("strong",null,"每个测试人员一套完整的测试环境"),p("：这种情况下虽然可以解决环境依赖问题，但软硬件成本高，环境维护成本比较高，服务器资源利用率比较低。比如，业务系统包含 40 个微服务，测试团队有 10 人，那么就需要 40*10=400 台服务器来管理测试环境。现如今，虚拟化技术盛行，虽然可以从一定程度上减少资源成本，但维护成本依然不容忽视。")])],-1),S=t("ul",null,[t("li",null,[t("strong",null,"服务级复用的虚拟化技术，基于消息路由的控制，实现集群中部分服务的复用。"),p(' 像阿里的"公共基础环境+特性环境"，美团的"骨干链路+泳道链路"、有赞的"基础环境（Default Service Chain）+SC 环境（Service-Chain）"都是在此方向上的有效尝试。')])],-1),P=e("",11),f=e("",7),b=e("",25),k=e("",8);function w(B,v,V,O,x,E){const o=n("Image");return l(),i("div",null,[_,a(o,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/49/00/CgqCHl9OBxOAOKByAAPwRmhK4Dg635.png"}),p(),g,c,u,h,d,C,a(o,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/48/F5/Ciqc1F9OByCADkrgAAd1WJT6DX0767.png"}),p(),q,m,T,a(o,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/49/00/CgqCHl9OByaAPz2NAAFRgHQ4La4072.png"}),p(),A,a(o,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/48/F5/Ciqc1F9OBzOABTF9AATo-qaOITQ554.png"}),p(),D,a(o,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/49/00/CgqCHl9OB0OAMuxiAABf6EuumI0144.png"}),p(),I,a(o,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/48/F5/Ciqc1F9OB1SARKn1AACBPT1nKJM083.png"}),p(),S,a(o,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image/M00/49/00/CgqCHl9OB1-AJu65AACHP4QdVqU442.png"}),p(),P,a(o,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image/M00/49/00/CgqCHl9OB2-AcVl6AAB34w7trfU945.png"}),p(),f,a(o,{alt:"Drawing 12.png",src:"https://s0.lgstatic.com/i/image/M00/49/00/CgqCHl9OB3-AFaigAACcuc533fA687.png"}),p(),b,a(o,{alt:"11.png",src:"https://s0.lgstatic.com/i/image/M00/48/F6/Ciqc1F9OCA-AJ3ldAACj9CaQBck366.png"}),p(),k])}const N=s(r,[["render",w]]);export{F as __pageData,N as default};
