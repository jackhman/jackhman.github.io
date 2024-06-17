import{_ as n,F as p,g as h,K as l,h as i,ar as t,l as s,o as k}from"./chunks/framework.VlluEs-f.js";const C=JSON.parse('{"title":"第11讲：使用SpringDataJPA实现数据库驱动微服务","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/云原生微服务架构实战精讲_文档/(1815) 第11讲：使用 Spring Data JPA 实现数据库驱动微服务.md","filePath":"posts/backEnd/云原生微服务架构实战精讲_文档/(1815) 第11讲：使用 Spring Data JPA 实现数据库驱动微服务.md","lastUpdated":1718371218000}'),e={name:"posts/backEnd/云原生微服务架构实战精讲_文档/(1815) 第11讲：使用 Spring Data JPA 实现数据库驱动微服务.md"},r=t(`<h1 id="第11讲-使用springdatajpa实现数据库驱动微服务" tabindex="-1">第11讲：使用SpringDataJPA实现数据库驱动微服务 <a class="header-anchor" href="#第11讲-使用springdatajpa实现数据库驱动微服务" aria-label="Permalink to &quot;第11讲：使用SpringDataJPA实现数据库驱动微服务&quot;">​</a></h1><p>在确定了微服务的 API 之后，我们就可以开始微服务的具体实现，微服务在实现时，并不限制所使用的编程语言或框架。虽然微服务的功能各有不同，但大部分微服务都是以数据库来驱动的。也就是说，这些微服务有一个后台数据库，可能是关系型数据库或 NoSQL 数据库。很多开发人员应该都有过开发数据库驱动的应用的经验，数据库驱动的微服务实现，与一般的数据库驱动的应用并没有太大的区别。</p><p>因为数据库驱动的应用十分流行，市面上相关的参考资料也非常多，本课时不打算对很多实现细节进行介绍，而是侧重于一些与微服务相关的内容，以及需要特别注意的内容。本课时以乘客管理微服务作为示例进行说明，数据库相关的实现使用 Spring Data JPA 访问 PostgreSQL 数据库。完整的实现请参考示例应用的源代码。</p><h4 id="聚合、实体和值对象" tabindex="-1">聚合、实体和值对象 <a class="header-anchor" href="#聚合、实体和值对象" aria-label="Permalink to &quot;聚合、实体和值对象&quot;">​</a></h4><p>随着对象关系映射（Object-Relational Mapping，ORM）以及 Hibernate 这样的框架的流行，数据库驱动的应用的实现变得简单了很多。<strong>对象关系映射</strong>指的是对象模型和数据库关系模型之间的映射。对象模型由类声明和类之间的引用关系组成，数据库的关系模型指的是数据库中的表和表之间的关系。这两种模型存在阻抗不匹配（Impedance Mismatch）的情况，对象模型可以使用继承和多态，而关系模型则要求对数据进行归一化处理。对象之间的引用方式很简单，而关系模型中则需要定义表的外键。如何在两个模型之间进行映射，这也是 ORM 技术的复杂性所在。</p><p>当然，ORM 技术本身并不是很难掌握的技术，Hibernate 这样的框架已经为我们屏蔽了很多底层实现细节。我们需要掌握的只是一些使用模式。比如，对象之间的引用关系，在一对多的映射中，什么时候使用单向关系，什么时候使用双向关系。这些都是有模式可以遵循的。</p><p>ORM 技术中最常使用的概念是<strong>实体</strong> （Entity）。在领域驱动设计中，与模型相关的有 3 个概念，分别是聚合、实体和值对象。<strong>聚合</strong>是一个抽象的概念，不需要对应到具体的实体。实体需要映射成 ORM 中的实体。值对象通常不会被映射成单一实体，而是作为其他实体的一部分，实体的标识符被映射成数据库的主键。</p><p>在乘客管理微服务中，聚合乘客的根实体是乘客，用户地址实体表示乘客所保存的地址，乘客实体中包含对用户地址实体的引用。区分实体和值对象的关键在于，对象是否有各自独立的生命周期。以用户地址为例，每个用户地址都可以被用户创建、更新和删除，因此它们有各自独立的生命周期，也就是说用户地址属于实体。用户地址实体属于聚合乘客的一部分。</p><h4 id="领域对象" tabindex="-1">领域对象 <a class="header-anchor" href="#领域对象" aria-label="Permalink to &quot;领域对象&quot;">​</a></h4><p>在创建实体类时，一个需要注意的问题是避免反模式贫血对象，<strong>贫血对象</strong>指的是对象类中只有属性声明以及属性的 getter 和 setter 方法。贫血对象实际上退化成为属性的数据容器，并没有其他的行为。贫血对象不符合我们对领域对象的期望，领域对象的行为应该是完备的。以乘客对象为例，与用户地址相关的管理功能，都应该添加在乘客对象中。这一点对聚合的根实体尤为重要，聚合的根实体需要负责维护业务逻辑中的不变量。与维护不变量相关的代码都应该直接被添加到实体类中。</p><p>当用 JPA 实现数据访问时，我们可以用领域对象类来作为 JPA 的实体类，只需要添加 JPA 的相关注解即可。下面代码中的 Passenger 类是领域对象类，同时也是 JPA 的实体类。Passenger 类中字段都添加了 JPA 的相关注解。Lombok 的注解用来生成 getter、setter、构造器和 toString 方法。Passenger 实体和 UserAddress 实体之间存在一对多关系，使用注解 @OneToMany 来表示。管理 UserAddress 对象的方法都添加在 Passenger 类中了，这体现了 Passenger 类是聚合的根。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Entity</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;passengers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Getter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Setter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NoArgsConstructor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ToString</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Passenger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseEntityWithGeneratedId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">max</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NonNull</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String name;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Email</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">max</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String email;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;mobile_phone_number&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">max</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NonNull</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String mobilePhoneNumber;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OneToMany</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cascade</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CascadeType.ALL, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">orphanRemoval</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">JoinColumn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;passenger_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">referencedColumnName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      nullable</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NonNull</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UserAddress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; userAddresses </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ArrayList&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> addUserAddress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(UserAddress </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">userAddress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (userAddress </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      userAddresses.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(userAddress);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> removeUserAddress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(UserAddress </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">userAddress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    userAddresses.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remove</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(userAddress);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> removeUserAddress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">addressId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getUserAddress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(addressId).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ifPresent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">removeUserAddress);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Optional&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UserAddress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUserAddress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">addressId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userAddresses.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(address </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Objects.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">equals</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(address.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), addressId))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findFirst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="数据访问" tabindex="-1">数据访问 <a class="header-anchor" href="#数据访问" aria-label="Permalink to &quot;数据访问&quot;">​</a></h4><p>对于一个聚合来说，只有聚合的根实体可以被外部对象所访问，因此只需要对聚合的根实体创建资源库即可。在乘客管理微服务中，我们只需要为乘客实体创建对应的资源库即可。下面代码中的 PassengerRepository 接口是乘客实体对应的资源库。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Repository</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PassengerRepository</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CrudRepository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Passenger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>一个需要考虑的问题是数据库表模式的生成。Hibernate 这样的 ORM 框架都支持从实体声明中自动生成和更新数据库表模式。这种做法看起来很简单方便，但是存在很多问题。</p><p>第一个问题是数据库表模式的优化问题。为了优化数据库的查询性能，数据库表模式通常需要由专业的人员进行设计。由 Hibernate 这样的框架所生成的数据库表模式只是通用的实现，并没有对特定应用进行优化。</p><p>第二个问题是数据库表模式的更新问题。在更新代码时，如果涉及到对数据库表模式的修改，直接使用 Hibernate 提供的更新功能并不是一个好选择。最主要的原因是自动更新的结果并不可控，尤其是需要对已有的数据进行更新时。</p><p>更好的做法是手动维护数据库表模式，并使用数据库迁移工具来更新模式。示例应用使用的迁移工具是 Flyway。在乘客管理微服务中，目录 src/main/resources/db/migration 中包含了数据库的迁移脚本。迁移脚本的文件名称类似 V1__init_schema.sql ，其中的前缀 V1 表示的是脚本的版本号。Flyway 会根据当前数据库中记录的版本信息来确定哪些脚本需要运行，并把数据库表模式升级到最新版本。</p><h4 id="领域层" tabindex="-1">领域层 <a class="header-anchor" href="#领域层" aria-label="Permalink to &quot;领域层&quot;">​</a></h4><p>领域层包括领域对象和服务实现，服务实现直接使用资源库来对实体进行操作。在设计服务实现的接口时，一个常见的做法是使用领域对象作为参数和返回值。在下面的代码中，PassengerService 类中的 getPassenger 方法的返回值是 Optional 类型，直接引用了领域类 Passenger。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Optional</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Passenger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getPassenger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String passengerId) {}</span></span></code></pre></div><p>这种做法既简单又直接，不过却有两个不足之处。</p><p>第一个不足之处在于对外部对象暴露了聚合的实体及其引用的对象。外部对象获取到实体的引用之后，是可以通过该对象来修改状态的，可能会产生意想不到的结果。</p><p>第二个不足之处是在 Hibernate 的实现上，乘客实体引用了一个用户地址实体的列表。从性能的角度考虑，对于一个乘客对象来说，它的用户地址列表是延迟获取的。也就是说，只有在第一次获取用户地址列表中的元素时，才会从数据库中读取。而读取数据库需要一个打开的 Hibernate 会话。当在 REST API 的控制器中访问 Passenger 对象中的用户地址列表时，为了操作可以成功，就要求 Hibernate 会话仍然处于打开状态，这带来的结果就是 Hibernate 会话的打开时间过长，影响性能。更合理的做法应该是在服务对象的方法退出时，就关闭会话。</p><p>综合上面两个原因，直接使用领域对象作为服务对象方法的返回值，并不是一个好的选择，更好的做法是使用值对象作为返回值。值对象作为领域对象中所包含的数据的复制，去掉了领域对象中包含的业务逻辑，只是单纯的作为数据容器。这使得使用者在获取数据的同时，又无法改变内部实体对象的状态。由于转换成值对象的逻辑发生在服务方法内部，并不会影响 Hibernate 会话的关闭。这种做法同时解决了上述两个问题，应该是值得推荐的做法。Spring Data JPA中的配置属性 spring.jpa.open-in-view 可以控制会话是否在控制器中打开，该属性的默认值为 true。在应用了这种模式之后，该属性的值应该被设置为 false 。</p><p>下面代码中的 PassengerVO 类是 Passenger 实体对应的值对象。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AllArgsConstructor</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PassengerVO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NonNull</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String id;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NonNull</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String name;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String email;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NonNull</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String mobilePhoneNumber;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UserAddressVO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; userAddresses;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>下面的代码给出了服务实现 PassengerService 类的部分代码，PassengerVO 类作为返回值的类型。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Service</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Transactional</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PassengerService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Autowired</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  PassengerRepository passengerRepository;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PassengerVO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Streams.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(passengerRepository.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PassengerUtils</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">createPassengerVO)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">collect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Collectors.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="展示层" tabindex="-1">展示层 <a class="header-anchor" href="#展示层" aria-label="Permalink to &quot;展示层&quot;">​</a></h4><p>对于微服务来说，其展示层就是它们对外提供的 API，这个 API 可以被其他微服务、Web 界面和移动客户端来使用。示例应用使用 JSON 表示的 REST API。对于使用 Spring Boot 和 Spring 框架的微服务实现来说，暴露 REST API 是非常简单的事情，可以 Spring MVC 或 Spring WebFlux。</p><p>下面代码给出了乘客服务的 REST API 控制器的部分代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RestController</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/api/v1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PassengerController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Autowired</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  PassengerService passengerService;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GetMapping</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PassengerVO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> passengerService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在第 10 课时中，我提到了 Swagger 的代码生成工具可以生成服务器存根代码，这其中就包括了对 Spring 框架的支持。在采用了 API 优先的策略之后，我们可以从 OpenAPI 文档中生成 API 服务端代码的骨架，并以此作为实际实现的基础。通过这种方式，可以快速创建一个可工作的 API 服务器。</p><p>不过需要注意两个问题。首先是 Swagger 代码生成工具创建的项目是基于 Spring Boot 1.5 的。如果你期望使用 Spring Boot 2，那么需要先自己进行升级；其次是通过工具生成的代码并不一定符合你的团队的开发规范，代码生成过程是单向不可逆的。如果 OpenAPI 文档发生了改变，再次生成会覆盖掉之前所做的手动修改。因此，建议的做法是仅在测试中使用自动生成的服务器实现。实际的产品代码应该手动创建和维护。</p><p>在开发中的一个常见需求是发送 HTTP 请求来测试 REST API ，如果使用 Postman 或其他工具，可以直接导入 OpenAPI 文档来生成 HTTP 请求的模板，如下图所示，Postman 自动生成了 POST 请求的内容。</p>`,37),E=s("h4",{id:"总结",tabindex:"-1"},[i("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),d=s("p",null,"数据库驱动的微服务代表了一大类的微服务。通过 Spring Boot 和 Spring 框架，我们可以很容易的创建出暴露 REST API 的数据库驱动的微服务。本课时对数据库驱动的微服务中的重点内容进行了说明，可以帮助掌握重要的知识点。",-1);function g(y,c,F,o,A,u){const a=p("Image");return k(),h("div",null,[r,l(a,{alt:"微服务11.png",src:"https://s0.lgstatic.com/i/image3/M01/13/79/Ciqah16f2byAMICiAADnG6dPSdw777.png"}),i(),E,d])}const b=n(e,[["render",g]]);export{C as __pageData,b as default};
