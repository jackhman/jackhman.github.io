import{_ as o,D as e,o as c,g as t,J as p,h as n,Q as l,m as s}from"./chunks/framework.f67d7268.js";const J=JSON.parse('{"title":"20升级改造：老项目升级到微服务的重构策略","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/SpringCloud Alibaba 实战_文档/(6765) 20  升级改造：老项目升级到微服务的重构策略.md","filePath":"posts/backEnd/SpringCloud Alibaba 实战_文档/(6765) 20  升级改造：老项目升级到微服务的重构策略.md","lastUpdated":1696682708000}'),r={name:"posts/backEnd/SpringCloud Alibaba 实战_文档/(6765) 20  升级改造：老项目升级到微服务的重构策略.md"},i=l("",5),E=l("",6),y=l("",11),d=s("p",null,"前后端分离策略",-1),_=s("h3",{id:"新功能构建成微服务",tabindex:"-1"},[n("新功能构建成微服务 "),s("a",{class:"header-anchor",href:"#新功能构建成微服务","aria-label":'Permalink to "新功能构建成微服务"'},"​")],-1),g=s("p",null,"在系统改造的过程中，业务部门也会提出许多全新的需求，对于这些新需求我们首先要做的是将其剥离成新的微服务，以此遏制老系统的野蛮生长。我们举例说明：业务部门提出新要求，希望参考京东商城提供多维度、条件丰富的商品查询系统，来替代原本简陋的关键字查询。",-1),u=s("p",null,"京东商城商品检索页",-1),A=s("p",null,'对于这种新功能，在改造过程中首先要将其构建为新的"产品检索"微服务，而不应再为单体应用添加代码。如图所示：',-1),h=s("p",null,"新功能构建成微服务",-1),S=s("p",null,"在原本服务后端不变的前提下，额外引入 Spring Cloud 微服务体系，我们在前端向后端访问时增加了 API Gateway 网关，该网关对前端访问的 URL 进行路由。如果前端访问 search 接口，则请求被重定向到新创建的商品检索微服务，通过 ElasticSearch 这种专用的全文检索引擎提供更高级的查询功能；而访问其他 URL 时则将请求转发到原本的服务后端进行处理。",-1),v=s("p",null,[n("在这个过程中，还有一个重要原则："),s("strong",null,"数据源不允许混用"),n("。商品数据保存在 MySQL 数据库，但绝不允许让微服务直接访问 MySQL 的数据，因为在未来的很长时间，单体应用与微服务是混合运行的，如果出现数据源的交叉访问，稍有不注意便会出现数据问题，因此两端的数据源应完全隔离。正确的做法是引入 Alibaba Canal 做数据源同步，Canal 是阿里巴巴旗下的开源项目，纯 Java 开发。基于数据库增量日志解析，提供增量数据订阅&消费，可自动实现从 MySQL 数据源向其他数据源同步数据的任务。")],-1),C=s("p",null,"Alibaba Canal",-1),F=s("p",null,"前面我们将全新功能单独构建为微服务，在网关层面进行 URL 的转发，但这种情况太过理想，毕竟更多的情况是在原有单体代码中，剥离一部分成为独立的微服务，在这个过程中既要减少对原始代码的修改，又要实现微服务的远程调用。",-1),P=s("p",null,"在以前项目中我们运用 Spring AOP 技术良好地解决了这个问题。Spring AOP 称为面向切面编程，Spring 框架底层通过 Java 动态代理或者 CGLib 技术，允许 Java 程序在运行时自动生成代理类，实现在不修改源码的前提下对应用进行动态拦截与扩展。",-1),b=s("p",null,"为了方便理解，我们还是通过案例讲解。",-1),m=l("",6),B=l("",8),D=s("p",null,"粗粒度切分策略",-1),q=s("h3",{id:"基于-mq-构建反腐层",tabindex:"-1"},[n("基于 MQ 构建反腐层 "),s("a",{class:"header-anchor",href:"#基于-mq-构建反腐层","aria-label":'Permalink to "基于 MQ 构建反腐层"'},"​")],-1),I=s("p",null,"构建反腐层实现应用隔离",-1),T=s("p",null,'随着改造的持续进行，我们在单体应用中额外增加了大量 Spring AOP 切面类，这样做虽然对原始代码改动较小，但基于 OpenFeign 直接面向微服务调用本身就破坏了单体应用与微服务间的隔离原则，这也是需要极力避免的。因此我们可以再进一步，将 OpenFeign 的 RESTful 调用改为利用 MQ 实现消息的"发布/订阅"，让单体应用与微服务持续解耦。这个引入 MQ 中间层的解耦策略，在微服务改造中被称为"反腐层"。通过反腐层，服务后端无须关注具体是哪个微服务实例消费数据，OpenFeign 也不再越界访问微服务，同时因为 MQ 自带特性，还赋予了应用消息追溯、流控等额外特性，可谓一举多得。',-1),f=s("h3",{id:"小结与预告",tabindex:"-1"},[n("小结与预告 "),s("a",{class:"header-anchor",href:"#小结与预告","aria-label":'Permalink to "小结与预告"'},"​")],-1),M=s("p",null,"本讲我为你分享了了微服务重构改造的六条改造策略，分别是：严禁 Big Bang、尽早且频繁的体现价值、优先分离做前后端、新功能构建成微服务、利用 Spring AOP 开发低侵入的胶水代码、基于 MQ 构建反腐层，希望你在认真思考后可以把这些策略运用在项目中。",-1),k=s("p",null,"下一讲，我们将学习在微服务架构下构建统一的用户认证与授权方案。",-1);function G(R,O,V,j,Q,x){const a=e("Image");return c(),t("div",null,[i,p(a,{alt:"图片1.png",src:"https://s0.lgstatic.com/i/image6/M00/37/93/Cgp9HWB39feAdlNiAAIp2aSa9g0359.png"}),n(),E,p(a,{alt:"图片2.png",src:"https://s0.lgstatic.com/i/image6/M01/37/94/Cgp9HWB39gKAczsuAAGd5m0vEdU064.png"}),n(),y,p(a,{alt:"图片3.png",src:"https://s0.lgstatic.com/i/image6/M01/37/9C/CioPOWB39g6AY7B5AAG9fyjusXo878.png"}),n(),d,_,g,p(a,{alt:"图片4.png",src:"https://s0.lgstatic.com/i/image6/M01/37/94/Cgp9HWB39hqAJ2KGAAzmjL7gLTI408.png"}),n(),u,A,p(a,{alt:"图片5.png",src:"https://s0.lgstatic.com/i/image6/M01/37/94/Cgp9HWB39iSASdBQAAKM5Xy28YM076.png"}),n(),h,S,v,p(a,{alt:"图片6.png",src:"https://s0.lgstatic.com/i/image6/M01/37/94/Cgp9HWB39i6AX9z9AANA-aFaAl8976.png"}),n(),C,F,P,b,p(a,{alt:"图片7.png",src:"https://s0.lgstatic.com/i/image6/M01/37/9C/CioPOWB39jmAJG5AAA7C62vvthc690.png"}),n(),m,p(a,{alt:"图片8.png",src:"https://s0.lgstatic.com/i/image6/M01/37/94/Cgp9HWB39kaAahWJAAM5QR3NV-I669.png"}),n(),B,p(a,{alt:"图片9.png",src:"https://s0.lgstatic.com/i/image6/M01/37/94/Cgp9HWB39liAKIV_AAKjF5cQ3KA462.png"}),n(),D,q,p(a,{alt:"图片10.png",src:"https://s0.lgstatic.com/i/image6/M01/37/9C/CioPOWB39mCAMrMRAAIqG54rPHQ175.png"}),n(),I,T,f,M,k])}const N=o(r,[["render",G]]);export{J as __pageData,N as default};
