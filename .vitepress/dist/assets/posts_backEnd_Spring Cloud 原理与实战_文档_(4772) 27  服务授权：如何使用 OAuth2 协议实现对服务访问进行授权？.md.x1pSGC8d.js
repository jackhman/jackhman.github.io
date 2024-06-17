import{_ as t,F as e,g as h,K as a,h as n,ar as s,o as p}from"./chunks/framework.VlluEs-f.js";const C=JSON.parse('{"title":"27服务授权：如何使用OAuth2协议实现对服务访问进行授权？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Spring Cloud 原理与实战_文档/(4772) 27  服务授权：如何使用 OAuth2 协议实现对服务访问进行授权？.md","filePath":"posts/backEnd/Spring Cloud 原理与实战_文档/(4772) 27  服务授权：如何使用 OAuth2 协议实现对服务访问进行授权？.md","lastUpdated":1718371218000}'),l={name:"posts/backEnd/Spring Cloud 原理与实战_文档/(4772) 27  服务授权：如何使用 OAuth2 协议实现对服务访问进行授权？.md"},k=s(`<h1 id="_27服务授权-如何使用oauth2协议实现对服务访问进行授权" tabindex="-1">27服务授权：如何使用OAuth2协议实现对服务访问进行授权？ <a class="header-anchor" href="#_27服务授权-如何使用oauth2协议实现对服务访问进行授权" aria-label="Permalink to &quot;27服务授权：如何使用OAuth2协议实现对服务访问进行授权？&quot;">​</a></h1><p>上一课时，我们构建了 OAuth2 授权服务器，并掌握了如何生成 Token 的系统方法。今天，我们关注如何使用 Token 来实现对服务访问的具体授权。在日常开发过程中，我们需要对每个服务的不同功能进行不同粒度的权限控制，并且希望这种控制方法足够灵活。同时，在微服务架构中，我们还需要考虑如何在多个服务中对 Token 进行有效的传播，确保整个服务访问的链路都能够得到授权管理。借助于 Spring Cloud 框架，实现这些需求都很简单，让我们一起来看一下。</p><h3 id="在微服务中集成-oauth2-授权机制" tabindex="-1">在微服务中集成 OAuth2 授权机制 <a class="header-anchor" href="#在微服务中集成-oauth2-授权机制" aria-label="Permalink to &quot;在微服务中集成 OAuth2 授权机制&quot;">​</a></h3><p>现在让我们回到 SpringHealth 案例，看看如何基于上一课时构建的 OAuth2 授权服务来完成对单个微服务访问的有效授权。同样，我们还是先关注于 user-service 这个微服务。</p><p>我们知道在 OAuth2 协议中，单个微服务的定位就是资源服务器。Spring Cloud Security 框架为此提供了专门的 @EnableResourceServer 注解。通过在 Bootstrap 类中添加 @EnableResourceServer 注解，相当于就是声明了该服务中的所有内容都是受保护的资源。以 user-service 类为例，示例代码如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SpringCloudApplication</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EnableResourceServer</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserApplication</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        SpringApplication.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(UserApplication.class, args);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>一旦我们在 user-service 中添加了 @EnableResourceServer 注解之后，user-service 会对所有的 HTTP 请求进行验证以确定 Header 部分中是否包含 Token 信息，如果没有 Token 信息，则会直接限制访问。如果有 Token 信息，就会通过访问 OAuth2 服务器并进行 Token 的验证。那么问题就来了，user-service 是如何与 OAuth2 服务器进行通信并获取所传入 Token 的验证结果呢？</p><p>要想回答这个问题，我们要明确将 Token 传递给 OAuth2 授权服务器的目的就是获取该 Token 中包含的用户和授权信息。这样，势必需要在 user-service 和 OAuth2 授权服务器之间建立起一种交互关系，我们可以在 user-service 中添加如下所示的 security.oauth2.resource.userInfoUri 配置项来实现这一目标：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">security:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  oauth2:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    resource:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	  userInfoUri: http://localhost:8080/userinfo</span></span></code></pre></div><p>这里的<a href="http://localhost:8080/user%E6%8C%87%E5%90%91OAuth2" target="_blank" rel="noreferrer">http://localhost:8080/user 指向 OAuth2</a>服务中的一个端点，我们需要进行构建。相关代码如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/userinfo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">produces</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Map</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String, Object</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(OAuth2Authentication user) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Map&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; userInfo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HashMap&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        userInfo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">put</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUserAuthentication</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPrincipal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        userInfo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">put</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;authorities&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, AuthorityUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">authorityListToSet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUserAuthentication</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAuthorities</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()));</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userInfo;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这个端点的作用就是为了获取可访问那些受保护服务的用户信息。这里用到了 OAuth2Authentication 类，该类保存着用户的身份（Principal）和权限（Authority）信息。</p><p>当使用 Postman 访问<a href="http://localhost:8080/user" target="_blank" rel="noreferrer">http://localhost:8080/user</a>info 端点时，我们就需要传入一个有效的 Token。这里以上一课时生成的 Token&quot;868adf52-f524-4be8-a9e7-24c1c41aa7d6&quot;为例，在 HTTP 请求中添加一个&quot;Authorization&quot;请求头。请注意，因为我们使用的是 bearer 类型的 Token，所以需要在 access_token 的具体值之前加上&quot;bearer&quot;前缀。当然，我们也可以直接在&quot;Authorization&quot;业中选择协议类型为 OAuth 2.0，然后输入 Access Token，这样相当于就是添加了请求头信息，如下图所示：</p>`,13),E=s(`<p>通过 Token 发起 HTTP 请求示意图</p><p>在后续的 HTTP 请求中，我们都将以这种方式发起对微服务的调用。该请求的结果如下所示：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     &quot;user&quot;:{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &quot;password&quot;:null,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &quot;username&quot;:&quot;springhealth_user&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &quot;authorities&quot;:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                 &quot;autority&quot;:&quot;ROLE_USER&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &quot;accountNonExpired&quot;:true,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &quot;accountNonLocker&quot;:true,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &quot;credentialsNonExpired&quot;:true,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &quot;enabled&quot;:true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     &quot;authorities&quot;:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &quot;ROLE_USER&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><p>我们知道&quot;868adf52-f524-4be8-a9e7-24c1c41aa7d6&quot;这个 Token 是由&quot;springhealth_user&quot;这个用户生成的，可以看到该结果中包含了用户的用户名、密码以及该用户名所拥有的角色，这些信息与我们在上一课时中所初始化的&quot;springhealth_user&quot;用户信息保持一致。我们也可以尝试使用&quot;springhealth_admin&quot;这个用户来重复上述过程。</p><h3 id="在微服务中嵌入访问授权控制" tabindex="-1">在微服务中嵌入访问授权控制 <a class="header-anchor" href="#在微服务中嵌入访问授权控制" aria-label="Permalink to &quot;在微服务中嵌入访问授权控制&quot;">​</a></h3><p>在《服务安全：如何理解微服务访问的安全需求和实现方案？》课时中，我们讨论了作为资源服务器，每个微服务对于自身资源的保护粒度并不是固定的，而是可以根据需求对访问权限进行精细化控制。在 Spring Cloud Security 中对访问的不同控制层级进行了抽象，形成了用户、角色和请求方法这三种粒度，如下图所示：</p>`,6),r=s(`<p>用户、角色和请求方法三种控制粒度示意图</p><p>基于上图，我们可以对这三种粒度进行排列组合，形成用户、用户+角色以及用户+角色+请求方法这三种层级，这三种层级所能访问的资源范围逐一递减。所谓的用户层级是指只要是认证用户就可能访问服务内的各种资源。而用户+角色层级在用户层级的基础上，还要求用户属于某一个或多个特定角色。最后的用户+角色+请求方法层级要求最高，能够对某些HTTP操作进行访问限制。接下来我们分别对这三种层级展开讨论。</p><h4 id="用户层级的权限访问控制" tabindex="-1">用户层级的权限访问控制 <a class="header-anchor" href="#用户层级的权限访问控制" aria-label="Permalink to &quot;用户层级的权限访问控制&quot;">​</a></h4><p>在上一课时中，我们已经熟悉了通过扩展各种 ConfigurerAdapter 类来实现自定义配置信息的方法。对于资源服务器而言，也存在一个 ResourceServerConfigurerAdapter 类。在 SpringHealth 案例系统中，为了实现用户层级的控制，我们的做法同样是在 user-service 中创建一个继承了该类的 SpringHealthResourceServerConfiguration 类并覆写它的 configure 方法，如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Configuration</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SpringHealthResourceServerConfiguration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ResourceServerConfigurerAdapter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> configure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HttpSecurity </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">httpSecurity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">throws</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Exception{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        httpSecurity.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">authorizeRequests</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">anyRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">authenticated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>注意到这个方法的入参是一个 HttpSecurity 对象，而上述配置中的 anyRequest().authenticated() 方法指定了访问该服务的任何请求都需要进行验证。因此，当我们使用普通的 HTTP 请求来访问 user-service 中的任何 URL 时，将会得到一个&quot;unauthorized&quot;的 401 错误信息。解决办法就是在 HTTP 请求中设置&quot;Authorization&quot;请求头并传入一个有效的 Token 信息，你可以模仿前面的示例做一些练习。</p><h4 id="用户-角色层级的权限访问控制" tabindex="-1">用户+角色层级的权限访问控制 <a class="header-anchor" href="#用户-角色层级的权限访问控制" aria-label="Permalink to &quot;用户+角色层级的权限访问控制&quot;">​</a></h4><p>对于某些安全性要求比较高的资源，我们不应该开放资源访问入口给所有的认证用户，而是需要限定访问资源的角色。就 SpringHealth 案例系统而言，显然，我们认为 intervention-service 服务涉及健康干预这一核心业务流程，会对用户的健康管理产生直接的影响，所以不应该开放给普通用户，而是应该限定只有角色为&quot;ADMIN&quot;的管理员才能访问该服务。要想达到这种效果，实现方式也比较简单，就是在 HttpSecurity 中通过 antMatchers() 和 hasRole() 方法指定想要限制的资源和角色。我们在 intervention-service 中创建一个新的 SpringHealthResourceServerConfiguration 类并覆写它的 configure 方法，如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Configuration</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SpringHealthResourceServerConfiguration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	ResourceServerConfigurerAdapter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> configure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HttpSecurity </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">httpSecurity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">throws</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Exception {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        httpSecurity.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">authorizeRequests</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">antMatchers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/interventions/**&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasRole</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ADMIN&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">anyRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">authenticated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>现在，如果我们使用角色为&quot;User&quot;的 Token 访问 invervention-service，就会得到一个&quot;access_denied&quot;的错误信息。然后，我们使用在上一课时中初始化的一个具有&quot;ADMIN&quot;角色的用户&quot;springhealth_admin&quot;来创建新的 Token，并再次访问 intervention-service 服务就能得到正常的返回结果。</p><h4 id="用户-角色-操作层级的权限访问控制" tabindex="-1">用户+角色+操作层级的权限访问控制 <a class="header-anchor" href="#用户-角色-操作层级的权限访问控制" aria-label="Permalink to &quot;用户+角色+操作层级的权限访问控制&quot;">​</a></h4><p>更进一步，我们还可以针对某个端点的某个具体 HTTP 方法进行控制。假设在 SpringHealth 案例系统中，我们认为对 device-service 中的&quot;/devices/&quot;端点下的资源进行更新的风险很高，那么就可以在 HttpSecurity 的 antMatchers() 中添加 HttpMethod.PUT 限定。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Configuration</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SpringHealthResourceServerConfiguration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ResourceServerConfigurerAdapter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> configure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HttpSecurity </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">httpSecurity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">throws</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Exception{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        httpSecurity.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">authorizeRequests</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">antMatchers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HttpMethod.PUT, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/devices/**&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasRole</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ADMIN&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">anyRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">authenticated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>现在，我们使用普通&quot;USER&quot;角色生成的 Token，并调用 device-service 中&quot;/devices/&quot;端点中的 Update 操作，同样会得到&quot;access_denied&quot;错误信息。而尝试使用&quot;ADMIN&quot;角色生成的 Token 进行访问，就可以得到正常响应。</p><h3 id="在微服务中传播-token" tabindex="-1">在微服务中传播 Token <a class="header-anchor" href="#在微服务中传播-token" aria-label="Permalink to &quot;在微服务中传播 Token&quot;">​</a></h3><p>让我们再次回到 SpringHealth 案例系统，以添加健康干预这一业务场景为例，就涉及 intervention-service 同时调用 user-service 和 device-service 的实现过程，我们来回顾一下这一场景下的代码结构，如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Intervention </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generateIntervention</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String userName, String deviceCode) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Intervention intervention </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Intervention</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //获取远程 User 信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        UserMapper user </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(userName);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //获取远程 Device 信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        DeviceMapper device </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getDevice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(deviceCode);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //创建并保存 Intervention 信息      </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        interventionRepository.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">save</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(intervention);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> intervention;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这样在控制单个微服务访问授权的基础上，就需要确保 Token 在这三个微服务之间进行有效的传播，如下图所示：</p>`,18),d=s(`<p>微服务中 Token 传播示意图</p><p>持有 Token 的客户端访问 intervention-service 提供的 HTTP 端点进行下单操作，该服务会验证所传入 Token 的有效性。intervention-service 会再通过网关访问 user-service 和 device-service，这两个服务同样分别对所传入 Token 进行验证并返回相应的结果。</p><p>如何实现上图中的 Token 传播效果？Spring Security 基于 RestTemplate 进行了封装，专门提供了一个用于在 HTTP 请求中传播 Token 的 OAuth2RestTemplate 工具类。想要在业务代码中构建一个 OAuth2RestTemplate 对象，可以使用如下所示的示例代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Bean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OAuth2RestTemplate </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oauth2RestTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	OAuth2ClientContext oauth2ClientContext,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        OAuth2ProtectedResourceDetails details) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OAuth2RestTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(details, oauth2ClientContext);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>可以看到，通过传入 OAuth2ClientContext 和 OAuth2ProtectedResourceDetails，我们就可以创建一下 OAuth2RestTemplate 类。OAuth2RestTemplate 会把从 HTTP 请求头中获取的 Token 保存到一个 OAuth2ClientContext 上下文对象中，而 OAuth2ClientContext 会把每个用户的请求信息控制在会话范围内，以确保不同用户的状态分离。另一方面，OAuth2RestTemplate 还依赖于 OAuth2ProtectedResourceDetails 类，该类封装了上一课时中介绍过的 clientId、客户端安全码 clientSecret、访问范围 scope 等属性。</p><p>一旦 OAuth2RestTemplate 创建成功，我们就可以使用它来对 SpringHealth 原有的服务交互流程进行重构。我们来到 intervention-service 中的 UserServiceClient 类中，重构之后的代码如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Component</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserServiceClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Autowired</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	OAuth2RestTemplate restTemplate;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UserMapper </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUserByUserName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">userName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ResponseEntity&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UserMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; restExchange </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                restTemplate.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exchange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                        &quot;http://userservice/users/{userName}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        HttpMethod.GET,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                        null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, UserMapper.class, userName);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        UserMapper user </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> restExchange.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>显然，对于原有的实现方式而言，我们唯一要做的就是使用 OAuth2RestTemplate 来替换原有的 RestTemplate，所有关于 Token 传播的细节已经被完整得封装在每次请求中。对于 DeviceServiceClient 类而言，重构方式完全一样。</p><p>最后，我们通过 Postman 来验证以上流程的正确性。通过访问 Zuul 中配置的 intervention-service 端点，并传入角色为&quot;ADMIN&quot;的用户对应的 Token 信息，可以看到健康干预记录已经被成功创建。你可以尝试通过生成不同的 Token 来执行这一流程，并验证授权效果。</p><h3 id="小结与预告" tabindex="-1">小结与预告 <a class="header-anchor" href="#小结与预告" aria-label="Permalink to &quot;小结与预告&quot;">​</a></h3><p>本课时关注于对服务访问进行授权。通过今天课程的学习，我们明确了基于 Token 在微服务中嵌入访问授权控制的三种粒度，并基于 SpringHealth 案例给出了这三种粒度之下的控制实现方式。同时，在微服务系统中，因为涉及多个服务之间进行交互，所以也需要将 Token 在这些服务之间进行有效的传播。借助于 Spring Cloud Security 为我们提供的工具类，我们可以很轻松地实现这些需求。</p><p>这里给你留一道思考题：你能描述对服务访问进行授权的三种层级，以及每个层级对应的实现方法吗？</p><p>介绍完授权机制之后，接下来要讨论的是认证问题。在下一课时中，我们将详细介绍 JWT 机制的实现过程以及它提供的扩展性。</p>`,13);function o(g,c,u,y,F,A){const i=e("Image");return p(),h("div",null,[k,a(i,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/89/6F/Ciqc1F_YaASASJl8AABW-5attyY705.png"}),n(),E,a(i,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/89/7A/CgqCHl_YaBCAAfgqAAAmFvCTcpI745.png"}),n(),r,a(i,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/89/6F/Ciqc1F_YaB2AIia3AABOnfqhLUo283.png"}),n(),d])}const _=t(l,[["render",o]]);export{C as __pageData,_ as default};
