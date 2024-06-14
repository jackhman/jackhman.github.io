import{_ as l,D as o,o as p,g as r,J as e,h as a,Q as n,m as t}from"./chunks/framework.f67d7268.js";const H=JSON.parse('{"title":"第43讲：优先实现面向接口的测试","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/112-高效敏捷测试文档/(1628) 第43讲：优先实现面向接口的测试.md","filePath":"posts/devops/112-高效敏捷测试文档/(1628) 第43讲：优先实现面向接口的测试.md","lastUpdated":1696682708000}'),c={name:"posts/devops/112-高效敏捷测试文档/(1628) 第43讲：优先实现面向接口的测试.md"},i=n('<h1 id="第43讲-优先实现面向接口的测试" tabindex="-1">第43讲：优先实现面向接口的测试 <a class="header-anchor" href="#第43讲-优先实现面向接口的测试" aria-label="Permalink to &quot;第43讲：优先实现面向接口的测试&quot;">​</a></h1><p>从原理上来说，接口测试是模拟客户端向服务器端发送请求，然后检查能否获得正确的返回信息。这里说的面向接口的自动化测试和 API 测试是一回事。在第 16 讲中介绍测试金字塔模型的时候已经说过，相对上层 UI 测试，自动化测试更适合进行 API 测试。这里的 API 测试是指面向接口的系统功能测试。<strong>接口测试越来越重要</strong>，不仅因为接口测试与 UI 测试相比性价比更高，还因为目前软件系统的开发模式和架构风格带来的必然需求。</p><h3 id="接口-api-测试越来越重要" tabindex="-1">接口（API）测试越来越重要 <a class="header-anchor" href="#接口-api-测试越来越重要" aria-label="Permalink to &quot;接口（API）测试越来越重要&quot;">​</a></h3><p>目前，前后端分离是业界主流的软件系统开发模式。前端设备种类越来越多，不同的前端与后端都是通过事先定义好的 API 进行交互，前后端分离当然也应该在开发过程中分别测试。前端测试可以搭建一个 Mock Server 模拟后端给出的响应；后端，即服务器端，就可以通过调用 API 直接对其进行接口测试。另外，后端系统的性能测试基本都要依赖接口进行测试，关注在各种并发情况下服务器端的响应时间、资源使用情况等。另外，需要通过接口测试对后端系统进行安全性测试，比如验证前后端传输信息是否加密等。</p><p>微服务架构是目前主流的软件系统架构的设计风格。一个软件系统的微服务之间通过 HTTP、RPC 等协议进行通信，通常是基于 HTTP 协议的 RESTful API，比如主流的 Spring Boot 开发框架等。这种架构带来的主要优点是每个微服务可以独立开发、独立部署，自然需要单独验证每个微服务的功能，而验证的方式就是 API 测试。</p><p>不仅软件系统自身正趋向于 API 化，软件产品也通过对外开放的 API 提供和外部系统的集成能力。现在人们更倾向于把 API 作为产品和服务，API 的消费者既包括外部合作伙伴，也包括企业内部的系统或开发人员。做好这类 API 的测试也是软件测试的目标之一。</p><h3 id="接口测试示例" tabindex="-1">接口测试示例 <a class="header-anchor" href="#接口测试示例" aria-label="Permalink to &quot;接口测试示例&quot;">​</a></h3><p>根据接口所遵循的协议，常见的接口包括 HTTP 接口、Web Services 接口、RPC 接口等。HTTP 接口支持 HTTP 应用传输协议，Web Services 接口一般采用 SOAP 协议；而 RESTful 既可以用于 HTTP 接口，也可以用于 Web Services 接口。</p><p>可以支持接口测试的开源工具有很多，第 19 讲已经介绍过。对于常用的 Postman、JMeter、REST-Assured 等，就不拿来做例子了。这里我介绍一款大家可能不太熟悉的，但是非常好用的接口测试工具 Karate，并且结合 Karate 来介绍 RESTful API 的接口测试。</p><p>Karate 是基于 Cucumber-JVM 构建的开源测试工具，目前已经位列 TOP10 最好用的 API 测试工具之一。和 Cucumber 一样，它也使用 Gherkin 语言以 Given-When-Then 格式来描述测试场景，因此也是 BDD 风格的工具。</p><p>另外，Karate 还具有以下特点：</p><ul><li>支持多线程并发测试；</li><li>不仅支持包括 Restful API 和 SOAP 不同风格的 Web Service 接口测试，也支持 UI 测试和性能测试；</li><li>可以像标准 Java 项目一样运行测试并生成界面友好的 HTML 报告；</li><li>可以在配置文件里添加全局的配置信息，作用于每个测试用例，比如可以设置全局变量、连接超时时间、retry 等。</li></ul><p>不过，相比其他测试工具，Karate 最显著的优点是不需要额外编写 Java、Python 等语言的测试代码，因此非常容易上手使用。Karate 的安装配置也非常简单，具体可以参考其官网上的介绍以及大量的代码示例： <a href="https://github.com/intuit/karate" target="_blank" rel="noreferrer">https://github.com/intuit/karate</a>。</p><p>现在我用 Karate 来开发一个接口测试的测试用例。假定需要对一个可以增、删、改、查用户信息的 RESTful API 进行测试。</p><p>第一个场景是请求所有用户信息，它返回的 Response 信息为 JSON 格式的用户列表，如图 1 所示。</p>',15),g=t("p",null,"图1 用户查询返回的 Response 信息",-1),_=t("p",null,"第二个场景是添加 3 个新的用户。第三个场景是更新用户 ID 为 1234 的用户信息。第四个测试场景是删除用户 ID 为 1233 的用户。测试用例代码 .feature 文件如图 2 所示。",-1),d=t("p",null,"图2 Karate 接口测试代码示例",-1),A=t("p",null,"上面是一个单接口测试的例子，并不足以展示 Karate 支持复杂场景的强大功能。在实际的测试中，一个业务场景往往是由多个接口的串行调用完成的。并且，一个业务操作会触发后端一系列 API 的级联调用，而后一个 API 需要使用前一个 API 返回结果中的某些信息才能进行测试。图 3 是 Karate 官网中的一段测试代码，在这段代码中，第二个 API 的调用地址就是第一个 API 返回结构中的 ID 信息。",-1),h=n(`<p>图3 Karate 接口调用链的测试</p><p>如果只是单接口的测试，使用 Postman 工具进行调试会更方便。在实际工作中，我建议你把 POSTMAN 和 Karate 结合起来使用。先用 Postman 进行单个接口的测试，验证返回的响应信息是否正确，等单个接口调试好了再用 Karate 编写测试脚本把多个 API 串联起来完成面向业务的接口测试。</p><h3 id="如何获取接口信息" tabindex="-1">如何获取接口信息 <a class="header-anchor" href="#如何获取接口信息" aria-label="Permalink to &quot;如何获取接口信息&quot;">​</a></h3><p>获得完整的接口信息是开展接口测试的基础，否则测试人员怎么知道系统定义了哪些 API 需要测试，每个 API 的请求信息怎么写，响应结果根据什么来验证？而接口文档是获取接口信息的重要途径。如果没有接口文档，测试人员只能通过抓包工具 （如 Fidder、WireShark 等）访问前端界面获取接口信息，费时费力不说，而且相当被动，对于接口的变动总是后知后觉。</p><p>接口文档的主要内容应该包括：调用地址 URL、调用方式（如 GET、PUT 等）、请求信息的格式、响应信息的格式及示例等。在前后端分离的系统中，因为前端和后端的交互只能通过接口来实现。良好的接口文档是加强前后端开发协作的基础，否则很容易发生接口不匹配，从而影响前后端的集成。而对于微服务架构的软件系统，微服务之间的调用关系往往非常复杂，需要定义的 API 也非常多，不同的微服务可能由不同的团队负责开发，接口信息的管理和维护更是一个挑战。</p><p>如果是开发人员手工编写接口文档，维护工作量比较大，很难做到实时更新。下面介绍两种比较好的接口文档管理方式。</p><p>第一种是利用 Swagger 工具动态生成接口文档。Swagger 是一套工具包，提供 API 文档编辑、生成、呈现及共享等功能，还可以执行 API 自动化测试。其中，Swagger UI 通过在产品代码中添加 swagger 相关的注释，生成 json 或 yaml 格式的 API 文件，然后通过 Web 界面呈现出来，供文档的用户访问查询。</p><p>Swagger UI 对 Spring Boot 的项目提供了很好的支持。由 Swagger 生成的接口文档如图 3 所示。我找了一个使用 Swagger 生成在线文档的开源项目作为例子（<a href="https://gitee.com/yidao620/springboot-bucket/tree/master/springboot-swagger2" target="_blank" rel="noreferrer">https://gitee.com/yidao620/springboot-bucket/tree/master/springboot-swagger2</a>），建议用 Intellij IDEA 打开，POM.xml 中需要添加一个依赖：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">dependency</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">groupId</span><span style="color:#E1E4E8;">&gt;javax.xml.bind&lt;/</span><span style="color:#FDAEB7;font-style:italic;">groupId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">artifactId</span><span style="color:#E1E4E8;">&gt;jaxb-api&lt;/</span><span style="color:#FDAEB7;font-style:italic;">artifactId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">version</span><span style="color:#E1E4E8;">&gt;2.3.0&lt;/</span><span style="color:#FDAEB7;font-style:italic;">version</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">dependency</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">dependency</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">groupId</span><span style="color:#24292E;">&gt;javax.xml.bind&lt;/</span><span style="color:#B31D28;font-style:italic;">groupId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">artifactId</span><span style="color:#24292E;">&gt;jaxb-api&lt;/</span><span style="color:#B31D28;font-style:italic;">artifactId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">version</span><span style="color:#24292E;">&gt;2.3.0&lt;/</span><span style="color:#B31D28;font-style:italic;">version</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">dependency</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>编译成功后启动 com.xncoding.jwt 目录下的 Application，然后访问 <a href="http://localhost:9095/swagger-ui.html3" target="_blank" rel="noreferrer">http://localhost:9095/swagger-ui.html</a> 就得到如图 4 所示的在线接口文档了。</p>`,10),y=t("p",null,"图 4 Swagger 生成的动态接口文档示例",-1),E=t("p",null,[a("另外一种方式是契约形式的接口文档，契约规定的是接口的调用者和被调用者之间约定的 Request 和 Response 数据交互格式。这里不得不提一下"),t("strong",null,"契约测试方法"),a(" ，又叫"),t("strong",null,"消费者驱动的契约测试（Consumer Driven Contract, CDC）"),a("，在契约测试里，接口的调用者被称为消费者，被调用者称为提供者。其核心思想在于从消费者业务实现的角度出发，由消费者自己定义需要的数据格式及交互细节，并驱动生成一份消费者契约。然后开发者根据契约分别实现自己的业务逻辑，并在服务提供者端进行测试，验证所调用的接口是否按照契约规定的内容返回正确的信息。主流的契约测试工具包括 PACT、Spring Cloud Contract。通过契约测试可以生成需要的契约文档，存放在代码仓库里。")],-1),I=t("p",null,"前端根据这份契约，可以搭建一个 Mock Server 模拟后端服务器的响应，在对前端的测试中所有需要和后端交互的场景下请求都发往这个 Mock Server，以此达到前后端调试的解耦。",-1),P=t("h3",{id:"契约测试和微服务的接口测试",tabindex:"-1"},[a("契约测试和微服务的接口测试 "),t("a",{class:"header-anchor",href:"#契约测试和微服务的接口测试","aria-label":'Permalink to "契约测试和微服务的接口测试"'},"​")],-1),u=t("p",null,"对于微服务来说，应用契约测试的方法进行接口测试比较高效，只要验证被调用的接口组合（已实现的业务逻辑），没有被调用的接口（用不到的逻辑）无须测试。另外，开展微服务的接口测试也需要根据契约，搭建 Mock Server 来实现微服务之间的解耦。一个大型软件系统由多个微服务组成，通常完成一个业务操作需要调用多个服务才能完成。但是，微服务之间的相互调用和依赖关系又比较复杂，如图 5 所示。",-1),m=t("p",null,"图5 微服务之间的依赖关系",-1),f=t("p",null,"当我们对 A 进行接口测试时，A 又会调用 B 和 C，C 又会调用 D，因为微服务都是独立开发的。当 B、C 或者 D 中的任何一个处于不可用状态时，针对 A 的接口测试无法进行。要想在测试中解除微服务 A 对其他服务的依赖，就要用到 Mock 技术。这里是指启动 Mock Service 代替 B 和 C 来响应服务 A 发出的请求，而这时服务 C 对 D 的调用也无须再关心，如图 6 所示。",-1),S=t("p",null,"图6 利用 Mock 技术解除微服务之间的依赖",-1),T=t("p",null,"像 WireMock 和第 15 讲介绍过的服务虚拟化工具 Hoverfly 都提供了在 API 层面 Mock 微服务的功能，另外还有不少 Mock 框架比如 Mokito、Moco 等。Mock Server 在搭建过程中，一个重要方面就是定义出需要模拟的请求和响应，上面说的契约文档在这里就发挥了作用。可以根据微服务 A 和 B、A 和 C 之间的契约文件很容易创建出 Json 格式的请求和响应信息文件，如图 7 所示。当 Mock Service 启动后，不必启动真实的应用，我们再执行如图 2 所示的测试 GET 的测试用例，Mock Service 就可以代替真实应用给出响应。",-1),b=t("p",null,"图7 Mock 请求和响应信息示例",-1),k=t("h3",{id:"ai-助力接口测试",tabindex:"-1"},[a("AI 助力接口测试 "),t("a",{class:"header-anchor",href:"#ai-助力接口测试","aria-label":'Permalink to "AI 助力接口测试"'},"​")],-1),v=t("p",null,"对于 UI 自动化测试来说，接口测试确实具备更大的优势，但同时，也需要负责接口测试的人员具备更高的技术能力，包括对系统架构和接口设计的了解，熟练使用各种工具和技术编写测试脚本、执行接口测试、分析接口信息及接口调用链信息等。",-1),C=t("p",null,"人们已经开始研究如何应用 AI 技术降低接口测试的复杂度。比如，当工程师在 UI 界面上进行操作，利用 AI 技术可以监控系统后台运行，通过分析获取的数据得到 API 调用序列，以及请求和响应信息，进而自动生成 API 测试用例。另外，还可以结合人工智能算法来完善接口测试需要的测试数据。相信在未来 AI 技术一定可以极大提高接口测试的效率。",-1),B=t("p",null,"今天这一讲到这里就结束了，主要结合 Karate 介绍了接口测试的开发、如何获取接口信息，以及微服务的接口测试如何实现服务之间的解耦，还有 AI 技术在接口测试中的应用前景。",-1),D=t("p",null,"今天给你出的思考题是：Karate 和你用过的其他接口测试工具相比，是否更有优势？",-1);function M(q,x,K,R,w,F){const s=o("Image");return p(),r("div",null,[i,e(s,{alt:"1.png",src:"https://s0.lgstatic.com/i/image/M00/14/83/CgqCHl7Q7LmABYj6AAAiP3IYvho647.png"}),a(),g,_,e(s,{alt:"2.png",src:"https://s0.lgstatic.com/i/image/M00/14/78/Ciqc1F7Q7L-AMqOfAACIaf5Sack444.png"}),a(),d,A,e(s,{alt:"3.png",src:"https://s0.lgstatic.com/i/image/M00/14/83/CgqCHl7Q7MiAfyW1AAOBKZnBmqk158.png"}),a(),h,e(s,{alt:"4.png",src:"https://s0.lgstatic.com/i/image/M00/14/78/Ciqc1F7Q7NWAT0veAAOjzoL_ysA572.png"}),a(),y,E,I,P,u,e(s,{alt:"5.png.png",src:"https://s0.lgstatic.com/i/image/M00/14/78/Ciqc1F7Q7N-AbdazAABxmTP1rXE409.png"}),a(),m,f,e(s,{alt:"6.png",src:"https://s0.lgstatic.com/i/image/M00/14/83/CgqCHl7Q7OeAa3QdAAB77wy7fUs059.png"}),a(),S,T,e(s,{alt:"7.png",src:"https://s0.lgstatic.com/i/image/M00/14/78/Ciqc1F7Q7O6AefpqAAApTOMESPA827.png"}),a(),b,k,v,C,B,D])}const N=l(c,[["render",M]]);export{H as __pageData,N as default};
