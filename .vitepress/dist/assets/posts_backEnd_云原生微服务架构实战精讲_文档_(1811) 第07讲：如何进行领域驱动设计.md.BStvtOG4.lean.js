import{_ as r,F as n,g as s,K as o,h as t,l as a,ar as l,o as i}from"./chunks/framework.VlluEs-f.js";const aa=JSON.parse('{"title":"第07讲：如何进行领域驱动设计","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/云原生微服务架构实战精讲_文档/(1811) 第07讲：如何进行领域驱动设计.md","filePath":"posts/backEnd/云原生微服务架构实战精讲_文档/(1811) 第07讲：如何进行领域驱动设计.md","lastUpdated":1718371218000}'),h={name:"posts/backEnd/云原生微服务架构实战精讲_文档/(1811) 第07讲：如何进行领域驱动设计.md"},_=a("h1",{id:"第07讲-如何进行领域驱动设计",tabindex:"-1"},[t("第07讲：如何进行领域驱动设计 "),a("a",{class:"header-anchor",href:"#第07讲-如何进行领域驱动设计","aria-label":'Permalink to "第07讲：如何进行领域驱动设计"'},"​")],-1),c=a("p",null,"领域驱动设计（Domain-Driven Design，DDD）这个词，可能一部分人听说过，也有一部分人觉得比较陌生。自从 Eric Evans 在其著名的《领域驱动设计 - 软件核心复杂性应对之道》一书中，提出了领域驱动设计的概念之后，领域驱动设计的思想在开发社区得到了广泛的流行和应用，很多软件开发的布道者开始推广领域驱动设计的思想。",-1),d=a("br",null,null,-1),p=a("p",null,"之所以会在本专栏中提到领域驱动设计，是因为领域驱动设计在微服务架构中有着它独特的应用，尤其是在划分微服务和定义微服务的交互方式时。要在一个课时中完整的介绍领域驱动设计，显然是不现实的，本课时将着重介绍领域驱动设计中的基本概念，下一课时将介绍领域驱动设计在微服务架构中的应用。",-1),u=a("br",null,null,-1),b=l("",7),g=l("",21),m=a("h2",{id:"模型中的元素",tabindex:"-1"},[t("模型中的元素 "),a("a",{class:"header-anchor",href:"#模型中的元素","aria-label":'Permalink to "模型中的元素"'},"​")],-1),A=a("p",null,"领域驱动设计中说明了模型中可能存在的不同元素。",-1),q=a("h3",{id:"分层架构",tabindex:"-1"},[t("分层架构 "),a("a",{class:"header-anchor",href:"#分层架构","aria-label":'Permalink to "分层架构"'},"​")],-1),P=a("p",null,"为了防止领域相关的逻辑散落在应用的不同部分，应该使用分层架构，每个层次都是高内聚的。下表给出了领域驱动设计推荐的 4 个层次，按照从上到下的方式出现。",-1),C=a("br",null,null,-1),x=a("br",null,null,-1),f=a("p",null,"严格来说，每个层次都应该只与直接在它下面的那一层进行交互，不过，这样的限制在具体的实现中可能过于严格，可以适当放松。",-1),k=a("br",null,null,-1),S=a("p",null,"下图给出了这 4 个层次之间的交互关系，在上面的层次可以访问下面的所有层次。",-1),T=a("br",null,null,-1),N=l("",34),I=a("h3",{id:"客户-供应商",tabindex:"-1"},[t("客户---供应商 "),a("a",{class:"header-anchor",href:"#客户-供应商","aria-label":'Permalink to "客户---供应商"'},"​")],-1),M=a("p",null,"客户---供应商（Customer - Supplier）指的是两个界定的上下文之间存在生产者和消费者的关系，供应商是上游的提供者，客户是下游的消费者。客户可以对供应商提出要求，而供应商要尽可能满足客户的要求，但最终的决定权在供应商手中。",-1),V=a("br",null,null,-1),D=a("p",null,"下图给出了客户---供应商的示例。",-1),E=a("br",null,null,-1),H=a("h3",{id:"顺从者",tabindex:"-1"},[t("顺从者 "),a("a",{class:"header-anchor",href:"#顺从者","aria-label":'Permalink to "顺从者"'},"​")],-1),B=a("p",null,[t("顺从者（Conformist）可以看成是客户---供应商的一种特殊情况，也同样分为上游的生产者和下游的消费者。不同之处在于，作为上游的供应商完全可以不考虑客户的需求，客户只能选择全盘接受供应商提供的模型，这也是"),a("strong",null,"顺从者"),t("这个名称的含义。从另一个角度来看，顺从者模式又像是共享内核，只不过客户并不能对这个共享内核做出任何修改。")],-1),v=a("h3",{id:"防腐蚀层",tabindex:"-1"},[t("防腐蚀层 "),a("a",{class:"header-anchor",href:"#防腐蚀层","aria-label":'Permalink to "防腐蚀层"'},"​")],-1),R=a("p",null,"防腐蚀层（Anticorruption Layer）指的是作为下游的团队，当与上游的模型进行集成时，在两个模型之间创建一个独立的隔离层，这个层次称为防腐蚀层，防腐蚀层的存在，使得下游的团队可以根据其自身的实际业务来定义模型。与上游模型的转换工作，由防腐蚀层来完成，这就保证了下游模型的稳定性，避免受到外部模型的侵蚀。防腐蚀层有着自己不小的代价，不过这样的代价所带来的好处也是值得的。",-1),y=a("br",null,null,-1),J=a("p",null,"下图给出了防腐蚀层的示例。",-1),U=a("br",null,null,-1),Y=a("h3",{id:"开放主机服务",tabindex:"-1"},[t("开放主机服务 "),a("a",{class:"header-anchor",href:"#开放主机服务","aria-label":'Permalink to "开放主机服务"'},"​")],-1),K=a("p",null,"开放主机服务（Open Host Service）指的是界定的上下文以开放服务的方式对外提供访问，所开放的服务有设计良好的 API，这使得其他团队可以更容易的进行集成。",-1),L=a("br",null,null,-1),O=a("p",null,"下图给出了开放主机服务的示例。",-1),$=a("br",null,null,-1),j=l("",8);function F(G,Q,W,w,X,Z){const e=n("Image");return i(),s("div",null,[_,c,d,p,u,o(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/85/20/Cgq2xl6NoH6AL_taAABXaOR7skw235.jpg"}),t(),b,o(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0C/0A/Ciqah16NoH6ADTPjAAHuYoq0YMU365.png"}),t(),g,o(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0C/0A/Ciqah16NoH-ASKCJAAAqc96nsaI393.png"}),t(),m,A,q,P,C,o(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/85/20/Cgq2xl6NoH-AASaUAABWcus8PZs461.png"}),t(),x,f,k,S,T,o(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0C/0A/Ciqah16NoH-AYYi4AACGbPhl2MQ829.png"}),t(),N,o(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0C/0A/Ciqah16NoH-AYMkPAACScPd_CmU621.png"}),t(),I,M,V,D,E,o(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/85/20/Cgq2xl6NoICAJot5AACun34sV3k024.png"}),t(),H,B,v,R,y,J,U,o(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/85/20/Cgq2xl6NoICAQpeIAAC1-kP-KdE293.png"}),t(),Y,K,L,O,$,o(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/85/20/Cgq2xl6NoICAJ-mMAAC5dqCxNaU132.png"}),t(),j])}const ta=r(h,[["render",F]]);export{aa as __pageData,ta as default};
