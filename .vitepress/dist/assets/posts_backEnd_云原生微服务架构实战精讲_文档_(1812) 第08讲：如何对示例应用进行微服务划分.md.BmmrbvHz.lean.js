import{_ as n,F as s,g as l,K as o,h as t,ar as r,l as a,o as i}from"./chunks/framework.VlluEs-f.js";const G=JSON.parse('{"title":"第08讲：如何对示例应用进行微服务划分","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/云原生微服务架构实战精讲_文档/(1812) 第08讲：如何对示例应用进行微服务划分.md","filePath":"posts/backEnd/云原生微服务架构实战精讲_文档/(1812) 第08讲：如何对示例应用进行微服务划分.md","lastUpdated":1718371218000}'),h={name:"posts/backEnd/云原生微服务架构实战精讲_文档/(1812) 第08讲：如何对示例应用进行微服务划分.md"},p=r("",37),_=a("h2",{id:"界定的上下文",tabindex:"-1"},[t("界定的上下文 "),a("a",{class:"header-anchor",href:"#界定的上下文","aria-label":'Permalink to "界定的上下文"'},"​")],-1),c=a("p",null,"在确定了核心领域和其他子领域之后，下一步可以从问题空间转移到解决空间。首先把子领域都映射成界定的上下文，界定的上下文与子领域的名称相同；接着对界定的上下文进行建模，建模的主要任务是对相关的概念进行具体化。",-1),d=a("h3",{id:"行程派发",tabindex:"-1"},[t("行程派发 "),a("a",{class:"header-anchor",href:"#行程派发","aria-label":'Permalink to "行程派发"'},"​")],-1),b=a("p",null,"行程派发模型中的重要实体是行程，也是行程所在的聚合的根。行程有它的起始位置和结束位置，以值对象地址来表示。行程由乘客发起，因此行程实体需要有乘客的引用，当系统选中一个司机接受行程之后，行程实体有对司机的引用。在整个生命周期过程中，行程可能处于不同的状态，有一个属性及其对应的枚举类型来描述行程的状态。",-1),u=a("br",null,null,-1),g=a("p",null,"下图给出了模型中的实体和值对象。",-1),m=a("br",null,null,-1),q=a("h3",{id:"乘客管理",tabindex:"-1"},[t("乘客管理 "),a("a",{class:"header-anchor",href:"#乘客管理","aria-label":'Permalink to "乘客管理"'},"​")],-1),f=a("p",null,"乘客管理模型中的重要实体是乘客，也是乘客所在的聚合的根。乘客实体的属性包括姓名、Email 地址、联系电话等，乘客实体有与之关联的已保存的地址列表，地址是一个实体。",-1),P=a("br",null,null,-1),k=a("p",null,"下图给出了模型中的实体。",-1),A=a("br",null,null,-1),x=a("h3",{id:"司机管理",tabindex:"-1"},[t("司机管理 "),a("a",{class:"header-anchor",href:"#司机管理","aria-label":'Permalink to "司机管理"'},"​")],-1),C=a("p",null,"司机管理模型中的重要实体是司机，也是司机所在的聚合的根。司机实体的属性包括姓名、Email 地址、联系电话等，除了司机实体之外，聚合中还包含了车辆实体，车辆实体的属性包括生产厂商、型号、出厂日期和牌照号等。",-1),I=a("br",null,null,-1),S=a("p",null,"下图给出了模型中的实体。",-1),T=a("br",null,null,-1),E=r("",20);function D(N,V,v,B,M,Q){const e=s("Image");return i(),l("div",null,[p,o(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0D/66/Ciqah16QE7eAOBcNAAK6WjFz5LI941.png"}),t(),_,c,d,b,u,g,m,o(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/00/38/CgoCgV6QE7eAbZTTAAA1DxD5XGE513.png"}),t(),q,f,P,k,A,o(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/86/7D/Cgq2xl6QE7eAEzyCAAAppuXa84s515.png"}),t(),x,C,I,S,T,o(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0D/66/Ciqah16QE7iAOlNoAAAveUrki8E910.png"}),t(),E])}const O=n(h,[["render",D]]);export{G as __pageData,O as default};
