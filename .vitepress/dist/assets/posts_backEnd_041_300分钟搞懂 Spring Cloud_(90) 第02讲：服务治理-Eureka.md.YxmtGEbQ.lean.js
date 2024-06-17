import{_ as s,F as i,g as n,K as r,h as t,ar as l,l as e,o}from"./chunks/framework.VlluEs-f.js";const lt=JSON.parse('{"title":"第02讲：服务治理-Eureka","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/041_300分钟搞懂 Spring Cloud/(90) 第02讲：服务治理-Eureka.md","filePath":"posts/backEnd/041_300分钟搞懂 Spring Cloud/(90) 第02讲：服务治理-Eureka.md","lastUpdated":1718371218000}'),u={name:"posts/backEnd/041_300分钟搞懂 Spring Cloud/(90) 第02讲：服务治理-Eureka.md"},c=l("",6),_=e("p",null,"为了方便理解，可以将注册中心拆解成两个部分，分别是注册和中心。注册很好理解，比如用户注册，就是将自己的信息注册在某个平台上。再来看中心，可以理解成一个统一管理信息的平台。两个部分连起来就是注册中心，也就是统一管理所有注册信息的平台。",-1),h=e("p",null,"服务注册指的是服务在启动时将自身的信息注册到注册中心中，方便信息进行统一管理。服务注册是客户端向注册中心提交信息的动作。",-1),p=e("p",null,"如上图所示，\b就是服务注册的过程。图中上面的部分是注册中心，下面的客户端是应用程序，服务注册就是应用程序在启动之后将自身的信息向注册中心进行注册的过程，服务注册后注册中心就有了所有应用程序的信息。",-1),d=e("p",null,"服务注册的场景在我们日常工作中非常常见，以电商的业务场景为例，我们有订单和商品两个服务，创建订单时，订单服务会调用商品服务的接口来校验商品的价格等信息是否正确。订单服务需要与商品服务进行交互，就必须知道商品服务的地址信息，当商品服务只部署一个节点时，可以直接通过 IP + 端口的方式进行访问。",-1),k=e("p",null,"当商品服务部署三个节点时，可以通过域名进行访问，通过 Nginx 进行转发。当商品服务部署了上百个节点后，每增加一个节点都需要修改 Nginx 的配置文件。如果此时我们引入注册中心机制，就可以将应用程序的信息告诉注册中心，通过注册中心来全局管理服务的节点信息。",-1),g=e("h6",{id:"服务发现",tabindex:"-1"},[t("服务发现 "),e("a",{class:"header-anchor",href:"#服务发现","aria-label":'Permalink to "服务发现"'},"​")],-1),E=e("p",null,"了解了服务注册后，我们接下来学习服务发现，如下图所示。",-1),S=e("p",null,"服务发现指的是从注册中心获取对应服务的信息。服务发现是客户端向注册中心获取信息的动作。",-1),m=e("p",null,"如上图所示，\b就是服务发现的过程。每个客户端都会从注册中心拉取自己关注的信息到本地。",-1),A=e("p",null,"还是上面提到的那个场景，商品服务的信息注册到注册中心，订单服务该怎么获取商品服务的信息呢，就是从注册中心拉取商品服务的信息。",-1),f=e("p",null,"只有将商品服务的节点信息拉取过来，才可以跟商品服务进行交互，这就是服务发现的场景，简单的理解服务发现就是从注册中心获取对应的信息，获取之后需要做什么业务处理，跟注册中心无关，注册中心只负责提供信息。",-1),C=e("h6",{id:"服务注册与服务发现相关动作",tabindex:"-1"},[t("服务注册与服务发现相关动作 "),e("a",{class:"header-anchor",href:"#服务注册与服务发现相关动作","aria-label":'Permalink to "服务注册与服务发现相关动作"'},"​")],-1),v=e("p",null,"服务注册与服务发现并不仅仅只有注册和拉取这两个动作，还有一些其他相关的动作。我们现在对这些动作进行统一的讲解。",-1),b=e("p",null,"如下图所示，图中涉及了服务注册与服务发现，以及它们间的相关动作。",-1),M=e("h6",{id:"",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#","aria-label":'Permalink to ""'},"​")],-1),D=l("",19),I=e("p",null,"我们首先会在应用程序中依赖 Eureka Client，项目启动后 Eureka Client 会向 Eureka Server 发送请求，进行注册，并将自己的一些信息发送给 Eureka Server。",-1),P=e("p",null,"注册成功后，每隔一定的时间，Eureka Client 会向 Eureka Server 发送心跳来续约服务，也就是汇报健康状态。 如果客户端长时间没有续约，那么 Eureka Server 大约将在 90 秒内从服务器注册表中删除客户端的信息。",-1),x=e("p",null,"Eureka Client 还会定期从 Eureka Server 拉取注册表信息，然后根据负载均衡算法得到一个目标，并发起远程调用，关于负载均衡在后面的课时会详细介绍，也就是 Ribbon 组件。",-1),V=e("p",null,"应用停止时也会通知 Eureka Server 移除相关信息，信息成功移除后，对应的客户端会更新服务的信息，这样就不会调用已经下线的服务了，当然这个会有延迟，有可能会调用到已经失效的服务，所以在客户端会开启失败重试功能来避免这个问题。",-1),F=e("p",null,"Eureka Server 会有多个节点组成一个集群，保证高可用。Eureka Server 没有集成其他第三方存储，而是存储在内存中。所以 Eureka Server 之间会将注册信息复制到集群中的 Eureka Server 的所有节点。 这样数据才是共享状态，任何的 Eureka Client 都可以在任何一个 Eureka Server 节点查找注册表信息。",-1),O=e("h6",{id:"eureka-部署",tabindex:"-1"},[t("Eureka 部署 "),e("a",{class:"header-anchor",href:"#eureka-部署","aria-label":'Permalink to "Eureka 部署"'},"​")],-1),R=e("p",null,"我们来看下单机的 Eureka 如何部署。",-1),N=e("ol",null,[e("li",null,"打开开发工具，创建一个 Spring Cloud 的项目，然后在 pom 中增加 spring-cloud-starter-netflix-eureka-server 的依赖。")],-1),T=e("ol",{start:"2"},[e("li",null,"创建一个 EurekaServerApplication 的启动类，启动类上使用 @EnableEurekaServer 开启 EurekaServer 的自动装配功能。")],-1),B=e("br",null,null,-1),q=e("ol",{start:"3"},[e("li",null,"需要配置 Eureka Server 需要的信息，端口配置成 8761，添加一个 eureka.client.register-with-eureka=false 的配置，这个配置表示是否将自己的实例注册到 Eureka Server 中，这里配置成 false，本身是 Eureka Server 节点，不需要将自己进行注册。再添加一个 eureka.client.fetch-registry=false 的配置，这个配置表示是否应从 Eureka Server 中获取 Eureka 的注册表信息，这里也设置成 false，因为不需要消费其他服务信息，所以也不需要拉取注册表信息。")],-1),L=e("ol",{start:"4"},[e("li",null,"启动项目，然后访问 8761 端口，可以看到 Eureka 的管理页面，表示 Eureka 启动成功了。至于线上部署的环境是一样的，将这个项目打包成一个可执行的 jar 文件，部署到服务器上即可，跟普通项目的部署方式一致。")],-1),y=e("h6",{id:"eureka-使用",tabindex:"-1"},[t("Eureka 使用 "),e("a",{class:"header-anchor",href:"#eureka-使用","aria-label":'Permalink to "Eureka 使用"'},"​")],-1),w=e("p",null,"成功部署 Eureka Server 后，我们来学习如何使用 Eureka Client 进行注册。",-1),Q=e("ol",null,[e("li",null,"创建一个 eureka-client-provider 的 Spring Cloud 项目，加入 spring-cloud-starter-netflix-eureka-client 的依赖。")],-1),H=e("br",null,null,-1),K=e("ol",{start:"2"},[e("li",null,"在启动类上加 @EnableDiscoveryClient 来启用服务注册与服务发现，这步操作不是必需的，因为在 spring-cloud-starter-netflix-eureka-client 的 spring.factories 文件中已经指定了所有的自动装配类。")],-1),U=e("ol",{start:"3"},[e("li",null,"配置 eureka.client.serviceUrl.defaultZone 的地址，也就是刚刚启动的 Eureka Server 的地址，如下。")],-1),Y=e("p",null,[e("a",{href:"http://localhost:8761/eureka/",target:"_blank",rel:"noreferrer"},"http://localhost:8761/eureka/")],-1),G=e("p",null,"eureka.instance.instance-id 是自定义实例 ID 的格式，采用服务名 + IP + 端口的格式，比如在 Eureka 的管理页面中看到的实例信息，就是这种格式。",-1),Z=e("br",null,null,-1),J=e("ol",{start:"4"},[e("li",null,"启动项目，项目启动成功后，在 Eureka 的管理页面可以看到 eureka-client-provider 已经注册上去了。")],-1),z=e("p",null,"继续创建一个 eureka-client-consumer 的 Spring Cloud 项目，Maven 配置和 Eureka Server 的配置跟前面的 eureka-client-provider 一致即可。consumer 需要消费 provider，必要的条件是 consumer 得知道 provider 有哪些节点信息，刚刚已经将 provider 注册到 Eureka中，如何在 consumer 获取 provider 的信息呢？",-1),W=e("br",null,null,-1),X=e("p",null,"可以通过 DiscoveryClient 来获取 Eureka 注册表中的数据，通过 getServices 获取所有的服务列表，然后根据 serviceId 获取服务下对应的实例信息，通 getInstances 方法，最后进行合并处理得到一个最终的 ServiceInstance 的 List。访问 /instances 接口可以看到返回的数据跟 Eureka 管理页面中的一致。",-1),j=e("h6",{id:"eureka-集群部署",tabindex:"-1"},[t("Eureka 集群部署 "),e("a",{class:"header-anchor",href:"#eureka-集群部署","aria-label":'Permalink to "Eureka 集群部署"'},"​")],-1),$=e("p",null,"在学习集群部署前，大家需要知道 Eureka 集群的原理，在前面架构剖析时，我们有提到 Eureka Server 之间会将注册信息复制到集群中的 Eureka Server 的所有节点中，也就是说可以在任意一个 Eureka Server 的节点上进行注册，也可以在任意一个节点上进行读取。",-1),ee=e("p",null,"假设我们需要搭建一个由两个节点组成的集群，核心思想就是 A 节点会将自己的信息复制到 B 节点，B 节点会将自己的信息复制到 A 节点。那么 A 节点和 B 节点肯定得知道对方的地址才可以进行复制操作，这就是集群搭建的关键点所在，只需要在每个节点启动时指定集群中其他节点的地址信息即可。",-1),te=e("p",null,"可以为每个节点创建一个配置文件，通过 spring.profiles.active 的方式激活，这样就不用创建多个 Eureka Server 的项目了，代码本质上没有任何区别，只是配置内容不一样而已。",-1),ae=e("p",null,"创建一个 master 配置文件，defaultZone 指向 8762 端口，随后创建一个 slave 配置文件，defaultZone 指向 8761 的端口，先激活 master 配置，启动项目，然后再激活 slave 配置，启动项目。然后在浏览器中分别查看 8761 和 8762 的管理页面，可以看到两边的信息是一致的。",-1),re=e("h6",{id:"eureka-注册表",tabindex:"-1"},[t("Eureka 注册表 "),e("a",{class:"header-anchor",href:"#eureka-注册表","aria-label":'Permalink to "Eureka 注册表"'},"​")],-1),le=e("p",null,"Eureka 作为注册中心，统一管理服务实例的信息。但我们在部署时并没有配置任何数据库相关的信息，也就是说 Eureka 管理的信息不是存储在数据库中的。",-1),se=e("p",null,"还有一点就是前面讲的集群模式，会将注册的信息复制给其他节点，更加验证了不可能采用数据库来存储注册信息，通过复制的模式我们可以推断，注册信息肯定会在每个节点都存储一份，信息的变更通过复制的形式解决，那么信息肯定是存储在 Eureka Server 的节点内部的，通过源码可以验证答案，Eureka 的注册信息是存储在 ConcurrentHashMap 中的。",-1),ie=e("br",null,null,-1),ne=e("p",null,"注册表定义在 AbstractInstanceRegistry 类中，Map 的 key 是服务名称，也就是 MONKEY-ARTICLE-SERVICE 。value 是一个 Map。value 的 Map 的 key 是服务实例的 ID, 比如这里的monkey-article-service:192.168.31.244:2012 。value 的 Map 里的 value 是 Lease 类，Lease 中存储了实例的注册时间、上线时间等信息，还有具体的实例信息，比如 IP、端口、健康检查的地址等信息，对应的是 InstanceInfo。",-1),oe=e("p",null,"这是 Lease 类中的字段信息，第一个 holder 是实例信息 InstanceInfo。然后是取消注册时间，也就是实例下线的时间。接着是服务注册的时间和服务上线的时间，以及最后更新的时间。需要注意的是最后更新的时间，也就是 lastUpdateTimestamp，从字面上理解就是最后更新的时间，实际上它是最后一次续约的时间加上租约的时长。最后一个字段是租约的时长。",-1),ue=e("p",null,"那么 Eureka 将注册的服务信息存储在内存中原因是什么呢?",-1),ce=e("p",null,"通过我个人的分析，存在内存中的优势在于性能高。然后就是对使用者来说，部署简单，不需要依赖于第三方存储。",-1),_e=e("p",null,"有优势那么肯定也有劣势，内存存储的劣势在于对存储容量的扩容难度高，每个 Eureka Server 都是全量的存储一份注册表，假如存储空间不够了，需要扩容，那么所有的 Eureka Server 节点都必须扩容，必须采用相同的内存配置。",-1),he=e("p",null,"Eureka 核心操作主要有注册、续约、下线、移除，接口是com.netflix.eureka.lease.LeaseManager，说简单点这些操作都是针对注册表的操作，也就是对 Map 的操作，听上去好像很简单，实际上在每个操作背后，都有它自己的业务逻辑，不是简单的增、删、改、查。",-1),pe=e("p",null,"这里主要带大家分析下注册相关的逻辑和代码，其他的操作可以课后自己尝试分析。",-1),de=e("br",null,null,-1),ke=e("p",null,"打开 LeaseManager 接口，找到 register 的实现，进入 AbstractInstanceRegistry 这个类的 register 方法。看下具体的代码实现，刚开始会获取一把读锁，然后通过服务名称从注册表中获取对应的信息，如果不存在则创建一个，然后添加进去。",-1),ge=e("p",null,"再获取 Lease 信息，如果存在则用现有的 InstanceInfo，如果不存在，则认为是新的注册，会计算跟续约相关的值，该值在自我保护的逻辑中会用到。",-1),Ee=e("p",null,"后面就是往一些变更队列里添加数据，会有对应的消费者去消费，最后将注册表的缓存进行清空，Eureka Client 在获取服务信息时，Eureka Server 为了提高读取性能，增加了缓存操作。所以当实例信息发生变化时需要将之前的缓存移除掉，最后释放锁。",-1),Se=e("h6",{id:"eureka集群各节点的数据同步",tabindex:"-1"},[t("Eureka集群各节点的数据同步 "),e("a",{class:"header-anchor",href:"#eureka集群各节点的数据同步","aria-label":'Permalink to "Eureka集群各节点的数据同步"'},"​")],-1),me=e("p",null,"如上图所示，Eureka 集群采用相互注册的方式实现高可用集群，任何一台注册中心故障都不会影响服务的注册与发现。前面也介绍了 Eureka 的注册表是存储在内存中的，当服务 A 注册到 Eureka Server 2 的节点上后，会去 Eureka Server 1 的节点拉取信息，正常情况下是拉取不到信息的，为了能够正常的拉取信息，Eureka Server 内部采用了复制的方式向各个节点进行数据同步操作。",-1),Ae=e("p",null,"我们简单的来看下当服务注册后，信息是如何同步的，代码在com.netflix.eureka.registry.PeerAwareInstanceRegistryImpl.register(InstanceInfo, boolean)中，复制的方法是 replicateToPeers，主要参数是 Action，Action 表示操作的类型，有心跳、注册、取消等操作。还有服务名称和实例 ID。",-1),fe=e("br",null,null,-1),Ce=e("p",null,"通过 peerEurekaNodes.getPeerEurekaNodes() 得到 Eureka Server 的所有节点信息，在当前节点中循环进行复制操作，需要排除自己，不需要将信息同步给自己。复制操作会根据 Action 来进行对应的操作，通过 node 对象的方法构建复制的任务，任务本质还是通过调用 Eureka 的 Rest API 来进行操作的。",-1),ve=e("h6",{id:"eureka自我保护机制",tabindex:"-1"},[t("Eureka自我保护机制 "),e("a",{class:"header-anchor",href:"#eureka自我保护机制","aria-label":'Permalink to "Eureka自我保护机制"'},"​")],-1),be=e("p",null,"自我保护机制是为了避免因网络分区故障而导致服务不可用的问题。具体现象为当网络故障后，所有的服务与 Eureka Server 之间无法进行正常通信，一定时间后，Eureka Server 没有收到续约的信息，将会移除没有续约的实例，这个时候正常的服务也会被移除掉，所以需要引入自我保护机制来解决这种问题。",-1),Me=e("p",null,"如上图所示，当服务提供者出现网络故障，无法与 Eureka Server 进行续约，Eureka Server 会将该实例移除，此时服务消费者从 Eureka Server 拉取不到对应的信息，实际上服务提供者处于可用的状态，问题就是这样产生的。",-1),De=e("p",null,"如上图所示，再来看已开启自我保护，当服务提供者 A 出现网络故障，无法与 Eureka Server 进行续约时，虽然 Eureka Server 开启了自我保护模式，但没有将该实例移除，服务消费者还是可以正常拉取服务提供者的信息，正常发起调用。",-1),Ie=e("p",null,"这就是自我保护机制的作用，但是自我保护机制也有不好的地方，我们继续看上图，如果这个时候，服务提供者 B 真的下线了，由于 Eureka Server 自我保护还处于打开状态，不会移除任务信息，当服务消费者对服务提供者 B 进行调用时，就会出错。自我保护模式有利也有弊，但我们建议在生产环境中还是开启该功能，就算出现某些有问题的实例没能及时移除掉的情况，服务消费者也可以通过 Ribbon 来进行重试，保证调用能够成功。",-1),Pe=e("p",null,"自我保护不是某个实例没正常续约就会开启，它需要满足一定的条件才会开启，我们来详细的分析自我保护开启的条件。",-1),xe=e("p",null,"在 AbstractInstanceRegistry 中有两个字段。",-1),Ve=e("ul",null,[e("li",null,[e("p",null,"numberOfRenewsPerMinThreshold ：期望最小每分钟能够续租的次数；")]),e("li",null,[e("p",null,"expectedNumberOfClientsSendingRenews ：期望的服务实例数量。")])],-1),Fe=e("p",null,"numberOfRenewsPerMinThreshold = expectedNumberOfClientsSendingRenews * 每个实例每分钟续约的次数，默认是 60/30=2，也就是一个实例每分钟最多续约 2 次，然后就是续租的比例，默认是 0.85，假如有 10 个实例，每个实例每分钟续约 2 次，那么就是 10*2*0.85=17，也就是每分钟至少要有 17 次续约才是正常的，否则就是不正常的。",-1),Oe=e("p",null,"在 evict 方法的 isLeaseExpirationEnabled 判断中是否能够进行实例的移除，如果返回 true 表示可以进行移除操作，如果返回 false 则直接 return 返回，不进行移除操作。",-1),Re=e("br",null,null,-1),Ne=e("p",null,"isLeaseExpirationEnabled 方法里首先会判断是否关闭了自我保护，如果关闭了直接返回 true，如果开启了自我保护，那么需要进行下一步的处理。具体的处理逻辑是期望每分钟续约的次数至少有一次，并且小于实际最后一分钟续约的次数，如果满足这 2 个条件返回 true，表示续约正常。如果不满足，那么意味着续约不正常，返回 false，不移除实例操作。",-1),Te=e("p",null,"因为是按照每分钟来计算的，等到网络恢复，续约的次数正常后，自我保护模式就会自动关闭。",-1),Be=e("h6",{id:"eureka健康检查",tabindex:"-1"},[t("Eureka健康检查 "),e("a",{class:"header-anchor",href:"#eureka健康检查","aria-label":'Permalink to "Eureka健康检查"'},"​")],-1),qe=e("p",null,"在前面我们讲过 Eureka 的心跳机制，Eureka Client 会定时发送心跳给 Eureka Server 来证明自己处于健康的状态，如下图所示。",-1),Le=e("p",null,"但在某些场景下，服务仍处于存活状态，却已经不能对外提供服务了，比如数据库出问题了，这时，Eureka Client 还是会定时发送心跳，由于心跳正常，客户端在请求时还是会请求到这个出了问题的服务实例。",-1),ye=e("p",null,"在第一课时我们已经讲过 Spring Boot 应用的健康状态监控，通过 Actuator 来管理健康状态，同时支持使用者扩展 /health 端点，常用的框架中都扩展了 /health 端点，比如 Mongodb、ElasticSearch 等。",-1),we=e("p",null,"我们只要在项目中集成 Actuator，就可以统一管理应用的健康状态，那么我们可以将这个状态反馈给 Eureka Server，这样当应用处于不健康的状态，Eureka Server 就能知道这个应用不健康了，然后将其进行下线操作，这样客户端就不会调用这个不健康的服务实例了，这就是 Eureka 的健康检查。",-1),Qe=e("p",null,"首先在 pom 中增加 spring-boot-starter-actuator 的依赖，然后扩展一个 health 端点，通过一个 status 来模拟状态是健康还是不健康，然后定义一个 updateStatus 的接口，用于测试，然后启动项目，默认状态是健康的，然后手动调用 updateStatus 接口来模拟服务中途出现故障，这个时候 health 端点已经是 DOWN 状态了，但是在 Eureka Server 中还是正常的，这就是我们最开始描述的问题。",-1),He=e("br",null,null,-1),Ke=e("p",null,"解决这个问题只需要在配置文件中增加 eureka.client.healthcheck.enabled=true 的配置，这样就可以将 health 的状态传递给 Eureka Server。再次演示正确的效果，重启项目，默认还是健康状态，手动调用 updateStatus 接口，这个时候 health 端点已经是 DOWN 状态了，然后我们再看 Eureka Server 的状态，也变了 DOWN，健康检查生效了。然后我们将状态改回健康，对应的 Eureka Server 也会处于 Up 状态。",-1),Ue=e("br",null,null,-1),Ye=e("p",null,"下面来分析下原理，在 EurekaDiscoveryClientConfiguration 中根据 eureka.client.healthcheck.enabled 的值来决定是否要装配 EurekaHealthCheckHandler",-1),Ge=e("p",null,"，在 EurekaClientAutoConfiguration 中会注册 HealthCheck，注册后会有调用任务来进行状态的更新，在 com.netflix.discovery.InstanceInfoReplicator.run() 中会进行状态更新。",-1),Ze=e("p",null,"到这里本课时的全部内容就讲完啦，在这一课时我们主要学习了服务治理 Eureka 的相关知识，在学习 Eureka 之前，了解了服务注册、服务发现的概念、以及服务注册与服务发现相关工作和解决的问题，之后主要学习了服务治理 Eureka 的架构剖析、部署、使用、集群部署、注册表、集群节点间数据同步，以及自我保护机制和健康检查。",-1),Je=e("br",null,null,-1),ze=e("br",null,null,-1);function We(Xe,je,$e,et,tt,at){const a=i("Image");return o(),n("div",null,[c,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/65/CgotOV2DSRmAZljsAACz1-sz9Bc268.png"}),t(),_,h,p,d,k,g,E,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/45/CgoB5l2DSRmATTQnAACaxgMS0KY966.png"}),t(),S,m,A,f,C,v,b,M,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/65/CgotOV2DSRqAVLzAAACs7Nwq9Xc076.png"}),t(),D,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/45/CgoB5l2DSRqAB8rGAAERVQIV4S0708.png"}),t(),I,P,x,V,F,O,R,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/65/CgotOV2DSTeAf3-EALKO8fACinY443.gif"}),t(),N,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/65/CgotOV2DST-AKVAbAHMeI0J6fK0381.gif"}),t(),T,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/65/CgotOV2DSV2AKL6DAKy7JpEAISo131.gif"}),t(),B,q,r(a,{alt:"",src:"//s0.lgstatic.com/plat-home-fed/vue/scripts/libraries/UEditor/themes/default/images/spacer.gif"}),t(),L,y,w,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/45/CgoB5l2DSZ2AQJPsALFuuL-tIbc368.gif"}),t(),Q,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/65/CgotOV2DSaWAFJ1GAG1jcKHY1Vw958.gif"}),t(),H,K,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/45/CgoB5l2DSayAG4sHAC60ZI94Y-o252.gif"}),t(),U,Y,G,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/65/CgotOV2DScSAVvY_AM_y-nNqfzA573.gif"}),t(),Z,J,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/65/CgotOV2DSc2AZQLyAC_TGC4bwvc724.gif"}),t(),z,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/66/CgotOV2DSeOAfdi6AILsPXo79gw058.gif"}),t(),W,X,j,$,ee,te,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/46/CgoB5l2DSe-ASrCyAIY6NsQPVGM124.gif"}),t(),ae,re,le,se,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/46/CgoB5l2DSfaARAM_AEOS4CtN1mY566.gif"}),t(),ie,ne,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/66/CgotOV2DSgCAXSgcACxAMSY39ZE833.gif"}),t(),oe,ue,ce,_e,he,pe,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/46/CgoB5l2DSg-AHS6aAHDhrKrofOw866.gif"}),t(),de,ke,ge,Ee,Se,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/65/CgotOV2DSRqAJRMwAAB7Balh0cs135.png"}),t(),me,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/66/CgotOV2DShmAELiTADB7A1zPQzs891.gif"}),t(),Ae,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/66/CgotOV2DSiSAQqG4AD7Q8GOGXxk448.gif"}),t(),fe,Ce,ve,be,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/45/CgoB5l2DSRqAP1FMAACHP1JLl1g494.png"}),t(),Me,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/65/CgotOV2DSRqACgusAAB-W41DoEM379.png"}),t(),De,Ie,Pe,xe,Ve,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/46/CgoB5l2DSjqAEnLXAKUpD3wLJwU259.gif"}),t(),Fe,Oe,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/66/CgotOV2DSjmAU8PHAC1XuDwQZMQ630.gif"}),t(),Re,Ne,Te,Be,qe,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/45/CgoB5l2DSRqALpz-AADDQMq9ysI107.png"}),t(),Le,ye,we,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/46/CgoB5l2DSkmATe2YAEUUfso8HwQ005.gif"}),t(),Qe,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/66/CgotOV2DSoSAQogtAEgPG3L5yOk199.gif"}),t(),He,Ke,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/66/CgotOV2DSniAAsVsAKWzlP4d_Nk477.gif"}),t(),Ue,Ye,Ge,r(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/8F/65/CgotOV2DSRuAI2hZAADmCSYm54U160.png"}),t(),Ze,Je,ze])}const st=s(u,[["render",We]]);export{lt as __pageData,st as default};
