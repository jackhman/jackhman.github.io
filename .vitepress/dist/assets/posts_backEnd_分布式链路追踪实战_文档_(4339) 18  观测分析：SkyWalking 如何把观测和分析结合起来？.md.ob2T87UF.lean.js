import{_ as s,F as o,g as r,K as i,h as e,ar as n,l as a,o as l}from"./chunks/framework.VlluEs-f.js";const q=JSON.parse('{"title":"18观测分析：SkyWalking如何把观测和分析结合起来？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/分布式链路追踪实战_文档/(4339) 18  观测分析：SkyWalking 如何把观测和分析结合起来？.md","filePath":"posts/backEnd/分布式链路追踪实战_文档/(4339) 18  观测分析：SkyWalking 如何把观测和分析结合起来？.md","lastUpdated":1718371218000}'),p={name:"posts/backEnd/分布式链路追踪实战_文档/(4339) 18  观测分析：SkyWalking 如何把观测和分析结合起来？.md"},g=n("",9),k=n("",24),_=a("p",null,"在这张图中，从左到右代表服务从接入流量到服务处理中的完整拓扑信息。用户发起访问，首先经由 ProjectA 服务，然后引入 ProjectB、ProjectC 和其他的云服务，ProjectB、ProjectC 又分别调用了其余的组件和服务。服务依赖之间使用线进行连接，可以清楚地描绘出彼此的关系。",-1),c=a("p",null,"传统的拓扑检测，通常是利用时间窗口来推断服务之间的依赖关系。比如 RPC 中消费者发送请求给提供者，提供者会先完成请求，再将链路数据发送到链路收集器端。此时，由于收集器端并不清楚是谁调用了提供者，所以会将数据保留一段到内存中。消费者完成请求处理后，将链路信息再发送到链路收集器中，此时再进行数据匹配，才能得知提供者的消费者是哪一个。得知消费者之后，保存在内存中的数据就会被删掉。",-1),h=a("p",null,"在分布式系统中，RPC 的请求数量可能非常巨大，如果使用传统的拓扑检测，虽然也能完成，但是会导致高延迟和高内存使用。同时由于是基于时间窗口模式，如果提供者的数据上报事件超过了时间窗口规定的时间，就会出现无法匹配的问题。",-1),d=a("p",null,"SkyWalking 为了解决上面提到的延迟和内存问题，引入了一个新的分析方式来进行拓扑检测，这种方式叫作 STAM（Streaming Topology Analysis Method）。",-1),S=a("p",null,[a("strong",null,"STAM 通过在消息传递的内容中注入更多的链路上下文信息，解决了传统拓扑检测中高延迟和高内存的问题。")],-1),y=a("p",null,[e("Zipkin 和 SkyWalking 在 OkHttp 框架的消息传递时，都会将链路信息放置在请求头中。"),a("strong",null,"无论它们的采集器是如何实现的，在进行消息传递时，都会通过某种方式将链路信息设置到请求中"),e("。如下图所示：")],-1),u=n("",7);function m(P,A,b,T,W,f){const t=o("Image");return l(),r("div",null,[g,i(t,{alt:"1.png",src:"https://s0.lgstatic.com/i/image/M00/59/57/CgqCHl9xYUSAMdjMAAM5S7oWJck457.png"}),e(),k,i(t,{alt:"1.png",src:"https://s0.lgstatic.com/i/image/M00/59/4C/Ciqc1F9xYeSAGKOBAAC5r84ETek340.png"}),e(),_,c,h,d,S,y,i(t,{alt:"1.png",src:"https://s0.lgstatic.com/i/image/M00/59/4D/Ciqc1F9xYgmAfvCDAAEDn5gIMBo308.png"}),e(),u])}const v=s(p,[["render",m]]);export{q as __pageData,v as default};
