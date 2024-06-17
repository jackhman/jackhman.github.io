import{_ as n,F as l,g as c,K as o,h as e,ar as r,l as t,o as s}from"./chunks/framework.VlluEs-f.js";const F=JSON.parse('{"title":"09Netty入门，用它做网络编程都说好（上）","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Dubbo源码解读与实战_文档/(4263) 09  Netty 入门，用它做网络编程都说好（上）.md","filePath":"posts/backEnd/Dubbo源码解读与实战_文档/(4263) 09  Netty 入门，用它做网络编程都说好（上）.md","lastUpdated":1718371218000}'),i={name:"posts/backEnd/Dubbo源码解读与实战_文档/(4263) 09  Netty 入门，用它做网络编程都说好（上）.md"},p=r("",11),_=t("p",null,"一个线程在同一时刻只能与一个连接绑定，如下图所示，当请求的并发量较大时，就需要创建大量线程来处理连接，这就会导致系统浪费大量的资源进行线程切换，降低程序的性能。我们知道，网络数据的传输速度是远远慢于 CPU 的处理速度，连接建立后，并不总是有数据可读，连接也并不总是可写，那么线程就只能阻塞等待，CPU 的计算能力不能得到充分发挥，同时还会导致大量线程的切换，浪费资源。",-1),h=t("h4",{id:"_2-i-o-多路复用模型",tabindex:"-1"},[e("2. I/O 多路复用模型 "),t("a",{class:"header-anchor",href:"#_2-i-o-多路复用模型","aria-label":'Permalink to "2. I/O 多路复用模型"'},"​")],-1),d=t("p",null,"针对传统的阻塞 I/O 模型的缺点，I/O 复用的模型在性能方面有不小的提升。I/O 复用模型中的多个连接会共用一个 Selector 对象，由 Selector 感知连接的读写事件，而此时的线程数并不需要和连接数一致，只需要很少的线程定期从 Selector 上查询连接的读写状态即可，无须大量线程阻塞等待连接。当某个连接有新的数据可以处理时，操作系统会通知线程，线程从阻塞状态返回，开始进行读写操作以及后续的业务逻辑处理。I/O 复用的模型如下图所示：",-1),u=t("p",null,"Netty 就是采用了上述 I/O 复用的模型。由于多路复用器 Selector 的存在，可以同时并发处理成百上千个网络连接，大大增加了服务器的处理能力。另外，Selector 并不会阻塞线程，也就是说当一个连接不可读或不可写的时候，线程可以去处理其他可读或可写的连接，这就充分提升了 I/O 线程的运行效率，避免由于频繁 I/O 阻塞导致的线程切换。如下图所示：",-1),g=r("",7),N=t("p",null,"单 Reactor 单线程的优点就是：线程模型简单，没有引入多线程，自然也就没有多线程并发和竞争的问题。",-1),I=t("p",null,[e("但其缺点也非常明显，那就是"),t("strong",null,"性能瓶颈问题"),e(" ，一个线程只能跑在一个 CPU 上，能处理的连接数是有限的，无法完全发挥多核 CPU 的优势。一旦某个业务逻辑耗时较长，这唯一的线程就会卡在上面，无法处理其他连接的请求，程序进入假死的状态，可用性也就降低了。正是由于这种限制，一般只会在"),t("strong",null,"客户端"),e("使用这种线程模型。")],-1),A=t("h4",{id:"_2-单-reactor-多线程",tabindex:"-1"},[e("2. 单 Reactor 多线程 "),t("a",{class:"header-anchor",href:"#_2-单-reactor-多线程","aria-label":'Permalink to "2. 单 Reactor 多线程"'},"​")],-1),O=t("p",null,[e("在单 Reactor 多线程的架构中，Reactor 监控到客户端请求之后，如果连接建立的请求，则由Acceptor 通过 accept 处理，然后创建一个 Handler 对象处理连接建立之后的业务请求。如果不是连接建立请求，则 Reactor 会将事件分发给调用连接对应的 Handler 来处理。到此为止，该流程与单 Reactor 单线程的模型基本一致，"),t("strong",null,"唯一的区别就是执行 Handler 逻辑的线程隶属于一个线程池"),e("。")],-1),C=t("p",null,"单 Reactor 多线程模型",-1),R=t("br",null,null,-1),m=t("p",null,"很明显，单 Reactor 多线程的模型可以充分利用多核 CPU 的处理能力，提高整个系统的吞吐量，但引入多线程模型就要考虑线程并发、数据共享、线程调度等问题。在这个模型中，只有一个线程来处理 Reactor 监听到的所有 I/O 事件，其中就包括连接建立事件以及读写事件，当连接数不断增大的时候，这个唯一的 Reactor 线程也会遇到瓶颈。",-1),y=t("h4",{id:"_3-主从-reactor-多线程",tabindex:"-1"},[e("3. 主从 Reactor 多线程 "),t("a",{class:"header-anchor",href:"#_3-主从-reactor-多线程","aria-label":'Permalink to "3. 主从 Reactor 多线程"'},"​")],-1),P=t("p",null,"为了解决单 Reactor 多线程模型中的问题，我们可以引入多个 Reactor。其中，Reactor 主线程负责通过 Acceptor 对象处理 MainReactor 监听到的连接建立事件，当Acceptor 完成网络连接的建立之后，MainReactor 会将建立好的连接分配给 SubReactor 进行后续监听。",-1),b=t("p",null,"当一个连接被分配到一个 SubReactor 之上时，会由 SubReactor 负责监听该连接上的读写事件。当有新的读事件（OP_READ）发生时，Reactor 子线程就会调用对应的 Handler 读取数据，然后分发给 Worker 线程池中的线程进行处理并返回结果。待处理结束之后，Handler 会根据处理结果调用 send 将响应返回给客户端，当然此时连接要有可写事件（OP_WRITE）才能发送数据。",-1),S=t("p",null,"主从 Reactor 多线程模型",-1),f=t("p",null,[e("主从 Reactor 多线程的设计模式解决了单一 Reactor 的瓶颈。"),t("strong",null,[e("主从 Reactor 职责明确，主 Reactor 只负责监听连接建立事件，"),t("strong",null,[t("strong",null,"SubReactor")]),e("只负责监听读写事件")]),e("。整个主从 Reactor 多线程架构充分利用了多核 CPU 的优势，可以支持扩展，而且与具体的业务逻辑充分解耦，复用性高。但不足的地方是，在交互上略显复杂，需要一定的编程门槛。")],-1),k=t("h4",{id:"_4-netty-线程模型",tabindex:"-1"},[e("4. Netty 线程模型 "),t("a",{class:"header-anchor",href:"#_4-netty-线程模型","aria-label":'Permalink to "4. Netty 线程模型"'},"​")],-1),E=t("p",null,"Netty 同时支持上述几种线程模式，Netty 针对服务器端的设计是在主从 Reactor 多线程模型的基础上进行的修改，如下图所示：",-1),v=r("",8);function q(T,D,B,H,J,M){const a=l("Image");return s(),c("div",null,[p,o(a,{alt:"2.png",src:"https://s0.lgstatic.com/i/image/M00/46/4A/CgqCHl9EvKaAF18_AACJ4Y62QAY004.png"}),e(),_,o(a,{alt:"3.png",src:"https://s0.lgstatic.com/i/image/M00/46/4A/CgqCHl9EvLSAQzfFAACIPU0Pqkg586.png"}),e(),h,d,o(a,{alt:"4.png",src:"https://s0.lgstatic.com/i/image/M00/46/3F/Ciqc1F9EvNOACOC5AADhkXKnAFg681.png"}),e(),u,o(a,{alt:"6.png",src:"https://s0.lgstatic.com/i/image/M00/46/3F/Ciqc1F9EvOOADRMzAACeQMLGfbs278.png"}),e(),g,o(a,{alt:"7.png",src:"https://s0.lgstatic.com/i/image/M00/46/4A/CgqCHl9EvVGAPXATAAEj0pK8ONM000.png"}),e(),N,I,A,O,o(a,{alt:"8.png",src:"https://s0.lgstatic.com/i/image/M00/46/4A/CgqCHl9EvWqAJ5jpAAFbymUVJ8o272.png"}),e(),C,R,m,y,P,b,o(a,{alt:"9.png",src:"https://s0.lgstatic.com/i/image/M00/46/4B/CgqCHl9EvXuARvm7AAF3raiQza8716.png"}),e(),S,f,k,E,o(a,{alt:"1.png",src:"https://s0.lgstatic.com/i/image/M00/46/3F/Ciqc1F9EvZyAZsQlAAMdGh4CXMI139.png"}),e(),v])}const V=n(i,[["render",q]]);export{F as __pageData,V as default};
