import{_ as e,D as o,o as t,g as c,J as a,h as p,Q as l,m as s}from"./chunks/framework.f67d7268.js";const T=JSON.parse('{"title":"15跨平台架构：如何设计BFF架构系统？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/048_iOS开发进阶/(6668) 15  跨平台架构：如何设计 BFF 架构系统？.md","filePath":"posts/frontEnd/048_iOS开发进阶/(6668) 15  跨平台架构：如何设计 BFF 架构系统？.md","lastUpdated":1696682708000}'),r={name:"posts/frontEnd/048_iOS开发进阶/(6668) 15  跨平台架构：如何设计 BFF 架构系统？.md"},i=l("",10),E=s("p",null,"当我们需要呈现朋友圈界面时，App 需要给各个微服务发送请求，然后把返回的信息整理，合并和转换成我们所需要的信息进行呈现。",-1),y=s("p",null,"这些网络请求的顺序和逻辑非常复杂。有些请求需要串行处理，例如只有完成了用户服务的请求以后，才能继续其他请求；而有些请求却可以并行发送，比如在得到信息服务的返回结果以后，可以同时向头像服务和点赞服务发送请求。",-1),d=s("p",null,"接着，在得到了所有结果以后，App 需要整理和合并数据的逻辑也非常复杂，如果请求返回结果的顺序不一致，往往会导致程序出错。于是，为了解决这一系列的问题，我们引入了 BFF 服务。",-1),m=s("p",null,"BFF 是一个服务于不同前端的后台服务，所有的前端（比如 iOS， Android 和 Web） 都依赖它。而且 BFF 是一个整合服务，它负责把前端的请求统一分发到各个具体的微服务上，然后把返回数据整合在一起统一返回给前端。",-1),D=s("p",null,"可以说，有了 BFF，我们的 App 就不再需要往多个微服务发送请求，也不再需要处理复杂的并发请求，这样就有效减低了复杂度，避免竞态条件等非预期情况发生。除此以外， 使用BFF 还有以下好处。",-1),F=s("p",null,"首先，App 仅需依赖一个 BFF微服务，就能有效地管理 App 对微服务的依赖。众所周知，当 App 版本发布以后，我们没有办法强迫用户更新他们设备上的 App，如果我们需要变动某个微服务的地址，原有的 App 将无法访问新的微服务地址，但是有了 BFF 以后，我们可以通过 BFF 统一路由到新的微服务去。",-1),h=s("p",null,"第二，不同的微服务可能提供不一样的数据传输方式，例如有的提供 RESI API，有的提供 gRPC，而有的提供 GraphQL。在没有 BFF 的情况下，App 端必须实现各个技术栈来访问各个微服务。一旦有了 BFF 以后，App 只需要支持一种传输方式，极大减轻移动端开发和维护成本。",-1),u=s("p",null,"第三，由于 BFF 统一处理所有的数据，iOS 和 Android 两端都可以得到由 BFF 清理并转换好的数据，无须在各端重复开发一样的数据处理代码。这极大减少了工作量，让我们可以把重心放在提高用户体验上。",-1),A=s("p",null,"第四，BFF 在提升整套系统安全性的同时，提高整体性能。",-1),_=s("p",null,"具体来说，因为我们的 App 是通过公网连接到后台微服务的，所有微服务都需要公开给所有外部系统进行访问。这就会面临隐私信息暴露等安全问题，比如用户会通过 App 获得本来不应该公开的黑名单信息。",-1),g=s("p",null,"但我们引入 BFF 以后，可以为微服务配置安全规则（如 AWS 上的 Security Group）只允许 BFF 能访问，例如上述的黑名单管理服务，就可以设置除了 BFF 以外不允许任何其他外部系统（包括我们的 App）直接访问，从而有效保证了隐私信息与公网的隔离。",-1),B=s("p",null,"与此同时， BFF 还可以同步访问多个不同的数据源，统一管理数据缓存，这无疑能有效提升整套系统的性能。",-1),k=l("",6),M=l("",31);function b(I,S,L,f,v,Q){const n=o("Image");return t(),c("div",null,[i,a(n,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image6/M00/36/5D/CioPOWBzrh-AFb9xAAoKvFaZKJU686.png"}),p(),E,y,d,a(n,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M00/36/54/Cgp9HWBzrieAVW9VAApF2Xu_P4M715.png"}),p(),m,D,F,h,u,a(n,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image6/M00/36/54/Cgp9HWBzrjCALKwqAABbDn2yVs4507.png"}),p(),A,_,g,B,a(n,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image6/M00/36/5D/CioPOWBzrjeAPTzGAAp_52nZbQQ085.png"}),p(),k,a(n,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image6/M00/36/5D/CioPOWBzrkGALUcIAAF_IygeIJY591.png"}),p(),M])}const P=e(r,[["render",b]]);export{T as __pageData,P as default};
