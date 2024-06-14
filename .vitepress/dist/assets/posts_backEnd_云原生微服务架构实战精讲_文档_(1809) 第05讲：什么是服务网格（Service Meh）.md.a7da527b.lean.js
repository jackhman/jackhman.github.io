import{_ as n,D as s,o as i,g as l,J as r,h as t,Q as o,m as e}from"./chunks/framework.f67d7268.js";const F=JSON.parse('{"title":"第05讲：什么是服务网格（ServiceMeh）","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/云原生微服务架构实战精讲_文档/(1809) 第05讲：什么是服务网格（Service Meh）.md","filePath":"posts/backEnd/云原生微服务架构实战精讲_文档/(1809) 第05讲：什么是服务网格（Service Meh）.md","lastUpdated":1696682708000}'),p={name:"posts/backEnd/云原生微服务架构实战精讲_文档/(1809) 第05讲：什么是服务网格（Service Meh）.md"},h=o("",13),d=e("br",null,null,-1),_=e("p",null,"日志收集是边车模式的一个常见应用，它利用了 Pod 中容器共享存储的特性：应用容器往某个持久卷中写入日志，而日志收集工具的边车容器则监控同一个持久卷中的文件来读取日志。",-1),c=e("br",null,null,-1),u=e("p",null,"边车容器在服务网格实现中至关重要。服务网格实现会在每个 Pod 上增加一个新的边车容器来作为其中应用服务的代理，这个容器的代理程序会作为外部调用者和实际服务提供者之间的桥梁。",-1),b=e("br",null,null,-1),m=e("p",null,"如下图所示，Pod 某个端口上的请求，首先会被服务代理处理，然后再转发给实际的应用服务；同样的，应用服务对外的请求，也会先被服务代理处理，然后再转发给实际的接收者。代理边车容器的出现，为解决服务调用相关的问题提供了一种新的方案：服务调用的自动重试和断路器模式的实现，都可以由服务代理来完成，从而简化应用服务的实现。",-1),g=e("br",null,null,-1),P=e("br",null,null,-1),A=e("p",null,"如果仅从最基本的实现方式上来说，服务网格技术并不复杂。打个比方，如果一个 Pod 提供某个应用服务，只需要在该 Pod 中部署一个服务代理的边车容器，由该代理来处理应用容器发送和接收的数据，就实现了服务网格。",-1),q=e("br",null,null,-1),k=e("p",null,"但是，服务网格实际上的解决方案非常复杂，我会在下面进行具体的介绍。",-1),x=e("br",null,null,-1),S=e("p",null,"值得一提的是，边车模式并不是服务代理的唯一部署方式。有些服务网格实现可以在Kubernetes的节点上部署服务代理来处理该节点上的全部请求。",-1),f=e("h2",{id:"服务代理",tabindex:"-1"},[t("服务代理 "),e("a",{class:"header-anchor",href:"#服务代理","aria-label":'Permalink to "服务代理"'},"​")],-1),I=e("p",null,"服务代理是服务网格技术实现的核心，可以说，服务代理决定了服务网格能力的上限。从作用上来说，服务代理与我们所熟悉的 Nginx 和 HAProxy 这类代理并没有太大区别。实际上， Nginx 和 HAProxy 同样可以作为服务代理来使用，但服务网格通常使用专门为服务间调用开发的服务代理实现。在下图所示的 OSI 七层模型中，服务代理一般工作在第 3/4 层和第 7 层。",-1),T=e("br",null,null,-1),C=e("br",null,null,-1),M=e("p",null,"下表列出了常见的服务代理，其中 Envoy、Traefix 和 Linkerd 2 都是新出现的服务代理实现。",-1),L=e("br",null,null,-1),E=e("br",null,null,-1),v=e("p",null,"服务发出和接收的所有调用都需要经过服务代理。服务代理的功能都与服务之间的调用相关，其主要方面如下表所示。",-1),K=e("br",null,null,-1),N=o("",11),y=o("",75);function B(V,D,R,z,H,W){const a=s("Image");return i(),l("div",null,[h,r(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/07/7C/Ciqah16EWzmAG8FwAAQIjFU18IM285.jpg"}),t(),d,_,c,u,b,m,g,r(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/80/92/Cgq2xl6EWzqAbHmNAAAnsVP83YI995.png"}),t(),P,A,q,k,x,S,f,I,T,r(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/80/92/Cgq2xl6EWzqAAeOxAAA7aLAJu78701.png"}),t(),C,M,L,r(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/80/92/Cgq2xl6EWzqAZaH-AABx1CEZm6Y181.png"}),t(),E,v,K,r(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/07/7C/Ciqah16EWzuAdQYKAABNHPHr3lY521.png"}),t(),N,r(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/07/7C/Ciqah16EWzuAVF1oAAA5gLyLSfk718.png"}),t(),y])}const J=n(p,[["render",B]]);export{F as __pageData,J as default};
