import{_ as e,g as t,o as a,ar as r}from"./chunks/framework.VlluEs-f.js";const g=JSON.parse('{"title":"结束语以终为始：响应式编程是一种银弹吗？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Spring 响应式编程实战_文档/(7005) 结束语  以终为始：响应式编程是一种银弹吗？.md","filePath":"posts/backEnd/Spring 响应式编程实战_文档/(7005) 结束语  以终为始：响应式编程是一种银弹吗？.md","lastUpdated":1718371218000}'),p={name:"posts/backEnd/Spring 响应式编程实战_文档/(7005) 结束语  以终为始：响应式编程是一种银弹吗？.md"},o=r('<h1 id="结束语以终为始-响应式编程是一种银弹吗" tabindex="-1">结束语以终为始：响应式编程是一种银弹吗？ <a class="header-anchor" href="#结束语以终为始-响应式编程是一种银弹吗" aria-label="Permalink to &quot;结束语以终为始：响应式编程是一种银弹吗？&quot;">​</a></h1><p>课程已经接近尾声了，不知道这 22 讲的内容对你帮助如何？最后这一节结束语，我将结合课程的内容，和你一起展望响应式编程未来的发展趋势，它到底能否成为一种&quot;银弹&quot;呢？</p><h3 id="响应式编程是未来趋势" tabindex="-1">响应式编程是未来趋势 <a class="header-anchor" href="#响应式编程是未来趋势" aria-label="Permalink to &quot;响应式编程是未来趋势&quot;">​</a></h3><p>在现代互联网应用系统开发过程中，即时响应性是可用性和实用性的基石。如何使得系统在出现失败时依然能够保持即时响应性是一项挑战。分布式系统具有的服务容错、限流和降级等传统技术体系是应对这一挑战的主要手段，但这些更多是从系统的架构和部署方面入手，而不是在于编程的模型和技术。而响应式编程代表的就是一种全新的编程模型，开发者可以在编程工具和代码实现层面就考虑到服务的弹性问题。</p><p>2017 年 Spring 5 正式发布，响应式编程是其中引入的最大变革，也是 Spring 目前重点推广的技术体系。同时，响应式编程也是 Spring 家族内部所采用的核心技术体系，在 Spring 家族的 Spring Webflux、Spring Cloud Gateway 等诸多框架中都得到了广泛应用。虽然，业界也存在其他响应式编程的技术体系，但 Spring 为我们提供的是最新、最全的解决方案，值得我们深入进行学习和应用。</p><p>我们知道，Spring 中各个响应式组件背后使用的都是 Project Reactor 框架，而该框架在当下是最符合响应式流规范的一种实现方案，预计未来一段时间内将会在这一领域中处于技术领先位置。同样的，越来越多的不属于 Spring 家族中的开发框架也在使用 Project Reactor 构建其底层的响应式运行环境。</p><p>此外，Spring 中提供的响应式编程组件非常全面，涵盖了响应式 Web 服务、响应式数据访问、响应式消息通信等分布式系统开发所涉及的各个领域。这使得开发人员可以非常方便地基于这些组件构建完整的全栈式响应式系统。尤其是，Spring 在努力推进的 R2DBC 组件在很大程度上弥补了针对关系型数据库访问的响应式编程模型的缺失，具有很高的创新型。更不要说，Spring 中集成了 RSocket 等这种目前非常主流的基于响应式流的网络通信协议了。</p><p>毫无疑问，响应式编程代表着未来的一种技术趋势。但是，在理论和实践的结合下，我们也应该清醒地认识到响应式编程并非新鲜事物，而是一种新型的编程模型，它既不局限于其实现框架，更加不是解决所有问题的&quot;银弹&quot;。在具有很多优势的同时，它也存在着一些开发人员所不得不面对的问题，还有待我们挖掘。</p><h3 id="期待响应式编程成为-银弹" tabindex="-1">期待响应式编程成为&quot;银弹&quot; <a class="header-anchor" href="#期待响应式编程成为-银弹" aria-label="Permalink to &quot;期待响应式编程成为&quot;银弹&quot;&quot;">​</a></h3><p>在本课程中，我们通过对 Web MVC 和 WebFlux 的对比发现，其中包含了一些定性和定量指标。其实，我们还应该考虑的一项核心定性指标就是学习曲线。Web MVC 是一个众所周知的框架，在全世界有超过十年以上的广泛应用。它依赖于命令式编程这一最简单的编程范式。对于业务系统而言，这意味着如果我们基于简单的 Spring 5 和 Web MVC 构建一个新项目，那么找到熟练的开发人员会容易得多，而培养新的开发人员成本也要低很多。</p><p>相比之下，基于 WebFlux 情况将会有很大不同。一方面，WebFlux 是一项新技术，尚未充分证明自己，可能存在很多 bug 和漏洞；另一方面，响应式编程底层的异步、非阻塞编程范例也可能是一个问题。</p><p>基于此，我们要明确的一点是，对异步、非阻塞代码的调试是一件很困难的事情。因为异步编程是基于回调的，由一个事件循环驱动。在尝试跟踪请求时，事件循环的堆栈跟踪毫无意义。这是因为处理的是事件和回调，并且很少有工具可以帮助调试。边界情况、未处理的异常以及错误处理的状态更改会创建悬空资源，从而导致内存泄漏、文件描述符泄漏或丢失响应等。</p><p>业界中，也有一些案例论证了这一观点，比方说 Netflix 尝试将 Zuul 迁移到新的响应式编程模型以失败而告终。事实证明，这些类型的问题很难调试，因为你很难知道哪个事件没有得到正确处理或者没有得到适当的清理。</p><p>此外，从业务角度来看，招募具有异步和非阻塞编程知识的开发工程师也是很困难的。从头开始指导新的开发人员需要花费大量的时间和金钱，而且无法保证他们会完全理解。幸运的是，通过使用 Project Reactor 和 Spring 框架可以解决这一问题的某些部分，因为 Project Reactor 和 Spring 框架使得构建有意义的响应式转换流更简单，并且隐藏了异步编程中最难的部分。不幸的是，这些框架并没有解决所有问题，响应式编程本身的复杂度需要我们考虑投入产出比，以及系统架构过程中的平衡性。</p><p>既然如此，我们在探索的过程中，也请期待响应式编程技术以及以 Spring 为代表的开发框架能够有更好的发展，为开发人员提供更友好的开发体验。</p><p>至此，整个《Spring 响应式编程实战》课程就全部介绍完毕了。最后，邀请你填写这份<a href="https://wj.qq.com/s2/8346181/a001/?fileGuid=xxQTRXtVcqtHK6j8" target="_blank" rel="noreferrer">调查问卷</a>，给我你最真实的反馈。同时也祝愿你能在自己的岗位上更上一层楼，我们后会有期！</p>',16),_=[o];function n(i,c,s,l,d,u){return a(),t("div",null,_)}const h=e(p,[["render",n]]);export{g as __pageData,h as default};
