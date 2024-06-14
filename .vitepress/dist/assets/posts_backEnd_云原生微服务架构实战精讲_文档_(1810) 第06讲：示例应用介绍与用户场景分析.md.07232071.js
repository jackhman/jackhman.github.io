import{_ as r,D as t,o,g as p,J as h,h as i,Q as a}from"./chunks/framework.f67d7268.js";const f=JSON.parse('{"title":"第06讲：示例应用介绍与用户场景分析","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/云原生微服务架构实战精讲_文档/(1810) 第06讲：示例应用介绍与用户场景分析.md","filePath":"posts/backEnd/云原生微服务架构实战精讲_文档/(1810) 第06讲：示例应用介绍与用户场景分析.md","lastUpdated":1696682708000}'),n={name:"posts/backEnd/云原生微服务架构实战精讲_文档/(1810) 第06讲：示例应用介绍与用户场景分析.md"},l=a('<h1 id="第06讲-示例应用介绍与用户场景分析" tabindex="-1">第06讲：示例应用介绍与用户场景分析 <a class="header-anchor" href="#第06讲-示例应用介绍与用户场景分析" aria-label="Permalink to &quot;第06讲：示例应用介绍与用户场景分析&quot;">​</a></h1><p>本课时我将带你学习&quot;示例应用与用户场景分析&quot;。</p><br><p>作为云原生微服务应用开发的实战课程，其中最重要的就是课程中所使用的实战项目了。实战项目是贯穿整个课程的主轴，**一个好的实战项目应该是真实的、完备的和易懂的，**这也是本课程与其他课程的主要区别之一。</p><br><p><strong>项目的真实性</strong>是指项目来源于实际存在的需求，而不是虚构的，真实性意味着可以把实战项目中所学到的知识直接应用到实际的项目开发中。</p><br><p><strong>完备性</strong>意味着项目的实现是完整的，案例中涵盖主要的用户场景，并且不会对项目的场景和实现做过多的简化，过多的简化会使得项目的实现与实际相差太远，起不到实战的效果。实战项目并不是玩具项目（Toy Project），有些课程会使用多个小项目来作为示例，这种做法的问题在于每个小项目都只包含了完整项目的一部分，没办法得到项目的全貌。</p><br><p><strong>易懂</strong>意味着项目在实现中并不涉及复杂的业务逻辑，只需要常识就可以对应用的场景进行分析了。有些应用，比如银行和保险等，有着相对复杂的业务逻辑。如果选用这样的案例作为示例，则需要花费比较大的篇幅来解释相关的业务逻辑。因此，最好选择业务逻辑简单易懂的应用。</p><br><p>基于上述这三个原则，本专栏选择了叫车服务来作为案例，开发的是一个类似滴滴打车和优步的叫车服务，称为快乐出行，叫车服务的示例应用符合上述的三个原则。叫车服务是实际存在的应用，来源于真实的需求。大部分人都使用过叫车服务 App，对于其中的使用场景比较熟悉，并且该示例应用实现了叫车服务相关的重要用户场景。</p><br><p>下面对示例应用的重要用户场景进行介绍。</p><h2 id="用户场景" tabindex="-1">用户场景 <a class="header-anchor" href="#用户场景" aria-label="Permalink to &quot;用户场景&quot;">​</a></h2><p>快乐出行应用的用户场景是围绕叫车这一核心业务展开的，除了叫车这一核心业务之外，还包括其他相关的辅助业务。</p><h3 id="叫车服务" tabindex="-1">叫车服务 <a class="header-anchor" href="#叫车服务" aria-label="Permalink to &quot;叫车服务&quot;">​</a></h3><p>叫车动作由乘客发起，当乘客在叫车时，需要提供行程的起始地址和结束地址，地址以关键字搜索的方式提供。</p><br><p>在行程创建之后，系统会在起始地址附近的特定范围内，搜索当前可用车辆。当找到可用车辆时，系统会发送通知给司机。</p><br><p>司机接收到新行程创建的通知之后，可以选择接受行程，在司机发出接受行程的请求之后，系统会从所有愿意接受行程的司机中选择一个。选择司机的算法有很多，简单的选择算法是采用先到先得的策略，谁先接受行程，谁就被选中；复杂的算法可以设定一个等待的时间段，在这个时间段内应答的司机，选中距离最近的司机。</p><br><p>被选中的司机会获取到乘客的相关信息，以方便联系乘客。在接到乘客之后，司机开始行程；当达到目的地之后，行程结束。</p><h3 id="乘客管理" tabindex="-1">乘客管理 <a class="header-anchor" href="#乘客管理" aria-label="Permalink to &quot;乘客管理&quot;">​</a></h3><p>乘客管理负责维护乘客相关的信息，乘客的基本信息包括乘客的姓名、Email 地址、联系电话等。典型的场景包括乘客注册和乘客信息更新。</p><br><p>除了乘客的基本信息之外，乘客还可以添加常用的地址，比如家庭住址和工作单位地址等，这些地址可以帮助乘客快速选择行程的起始和结束位置。</p><br><p>乘客在系统中有自己的状态，有些乘客的账号可能因为不恰当的行为，暂时被系统封禁，或处于受限状态。被封禁的乘客账号无法创建行程，而受限的账号则限制了可以创建的行程长度和金额，比如，受限账号不能创建长度超过 20 公里，或是金额超过 100 元的行程。</p><h3 id="司机管理" tabindex="-1">司机管理 <a class="header-anchor" href="#司机管理" aria-label="Permalink to &quot;司机管理&quot;">​</a></h3><p>司机管理负责维护司机相关的信息，司机的基本信息包括司机的姓名、Email 地址、联系电话等。典型的场景包括司机注册和司机信息更新。</p><br><p>司机管理的另外一个重要功能是管理司机的车辆，车辆的基本信息包括车辆的厂商、型号、出厂日期和牌照号码等。正规的叫车服务对司机有严格的背景审核流程，这些审核流程是在线下进行的，在示例应用中，由于数据都是模拟的，并没有必要进行审核，因此这样的流程被省略了，而是改为直接在模拟数据中设置不同的状态。</p><br><p>另外，每个司机有不同的状态，没有开始运营的司机处于离线状态；已经运营且没有载客的司机处于可用状态；已经运营且已经载客的司机处于不可用状态。</p><h3 id="地址管理" tabindex="-1">地址管理 <a class="header-anchor" href="#地址管理" aria-label="Permalink to &quot;地址管理&quot;">​</a></h3><p>乘客通过输入地址关键字的方式来查询行程的起始位置和目标位置，这时就需要根据用户的输入进行地址查询，并返回对应的地理位置坐标，这个步骤通常需要使用已有的地址数据库或利用第三方提供的相关服务。示例应用使用从 GitHub 下载的中国五级地址数据库来进行简单的地址查询。</p><h3 id="行程管理" tabindex="-1">行程管理 <a class="header-anchor" href="#行程管理" aria-label="Permalink to &quot;行程管理&quot;">​</a></h3><p>乘客和司机都需要查询历史行程的信息，所有的历史行程都会被保存，行程所包含的信息包括起始位置、结束位置、乘客标识符、司机标识符和状态等。乘客和司机可以查看与他们相关的行程。</p><h3 id="支付服务" tabindex="-1">支付服务 <a class="header-anchor" href="#支付服务" aria-label="Permalink to &quot;支付服务&quot;">​</a></h3><p>在实际的叫车服务中，乘客需要使用第三方支付服务，比如支付宝和微信，来完成行程的费用支付。作为示例应用来说，如何与这些第三方支付服务集成，并不是需要关注的重点，因为这通常是乘客 App 需要完成的功能，对于示例应用的后台服务来说，只需要知道支付的结果即可。</p><h2 id="系统组件" tabindex="-1">系统组件 <a class="header-anchor" href="#系统组件" aria-label="Permalink to &quot;系统组件&quot;">​</a></h2><p>示例应用最重要的特征是真实和完备，本专栏的重点是使用微服务架构的后台服务。然而在实际的叫车服务中，除了后台服务之外，还需要有客户端和其他辅助工具的支持。为了保证真实性，同时又不偏离本专栏的主题，示例应用中包含了如下组件。</p><br>',45),s=a('<h3 id="后台服务" tabindex="-1">后台服务 <a class="header-anchor" href="#后台服务" aria-label="Permalink to &quot;后台服务&quot;">​</a></h3><p>后台服务是本专栏的核心内容，由一系列微服务组成，这些微服务有各自独立的业务能力，同时又互相协作来完成某些业务逻辑。不同微服务所使用的数据存储和支撑服务也不尽相同，比如，乘客管理相关的服务使用关系型数据库作为存储；而叫车相关的服务则使用 Redis 来存储司机的位置；服务则以 REST 或 gRPC 的方式对外提供开放 API。这些服务所提供的 API 可以通过 API 网关来访问。</p><h3 id="乘客管理界面" tabindex="-1">乘客管理界面 <a class="header-anchor" href="#乘客管理界面" aria-label="Permalink to &quot;乘客管理界面&quot;">​</a></h3><p>乘客管理界面提供了对乘客的基本管理功能，除了创建乘客之外，还可以为乘客创建行程。</p><br><p>乘客管理界面替代了叫车服务中乘客使用的 App，可以管理所有乘客。</p><h3 id="司机模拟器管理界面" tabindex="-1">司机模拟器管理界面 <a class="header-anchor" href="#司机模拟器管理界面" aria-label="Permalink to &quot;司机模拟器管理界面&quot;">​</a></h3><p>司机模拟器用来模拟司机的行为，其作用是替代叫车服务中司机使用的 App。每个模拟器都表示一个司机，模拟器表示的司机会从某个地理位置开始，以随机的速度行驶，并随机改变行驶方向，这个过程中模拟器会定期通知系统它的当前位置，通过管理界面还可以控制每个模拟器的状态。</p><br><p>当行程创建之后，可作为接受行程备选的模拟器都会接收到通知，可以在界面上选中某个模拟器接受行程，从而完成整个叫车的流程。</p><h2 id="简化的应用实现" tabindex="-1">简化的应用实现 <a class="header-anchor" href="#简化的应用实现" aria-label="Permalink to &quot;简化的应用实现&quot;">​</a></h2><p>一个完整的打车应用所涵盖的内容很广泛，除了后台服务之外，还包括乘客和司机使用的 App 等。在实现中，除了应用本身的服务之外，还需要集成一些第三方的服务，比如地理位置服务和支付服务等。示例应用不可能完全复刻一个滴滴打车或是优步，因此在实现的功能上必须有所取舍。</p><br><p>在一方面，由于有些组件与后台服务的具体实现无关（比如乘客和司机使用的 App），并且这些组件的实现超出了本专栏的内容范围。但是为了保证示例的完整性，在实现中我们将使用简化的 Web 应用来替代这两个 App。</p><br><p>最后，由于不同功能在实现方式上的重复性，很多功能在实现时的原理其实是相通的。在完成某个功能的实现之后，相关的经验可以应用在相似的功能实现上，并不需要重复介绍，比如，有几个服务都需要使用关系型数据库来存储数据，相关的实现技术只需要介绍一次就可以了。虽然对于相关实现方式的介绍不会重复出现，在示例代码中仍然包含了全部完整的实现。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>示例应用在本专栏中扮演了重要的角色，并会贯穿专栏的各个课时。本课时对示例应用的主要场景进行了介绍，这些场景是示例应用需要满足的需求；接着我们简要介绍了示例应用中的组件；最后介绍了示例应用在实现时的一些简化方式。</p><br>',19);function d(_,c,b,u,m,q){const e=t("Image");return o(),p("div",null,[l,h(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/82/1D/Cgq2xl6HCb2AKUlBAAA2K1-9QnM548.png"}),i(),s])}const A=r(n,[["render",d]]);export{f as __pageData,A as default};
