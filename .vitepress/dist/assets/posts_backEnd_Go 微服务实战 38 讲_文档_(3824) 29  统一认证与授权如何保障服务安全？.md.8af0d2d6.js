import{_ as o,D as e,o as t,g as c,J as p,h as a,Q as l,m as s}from"./chunks/framework.f67d7268.js";const v=JSON.parse('{"title":"29统一认证与授权如何保障服务安全？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Go 微服务实战 38 讲_文档/(3824) 29  统一认证与授权如何保障服务安全？.md","filePath":"posts/backEnd/Go 微服务实战 38 讲_文档/(3824) 29  统一认证与授权如何保障服务安全？.md","lastUpdated":1696682708000}'),r={name:"posts/backEnd/Go 微服务实战 38 讲_文档/(3824) 29  统一认证与授权如何保障服务安全？.md"},E=l(`<h1 id="_29统一认证与授权如何保障服务安全" tabindex="-1">29统一认证与授权如何保障服务安全？ <a class="header-anchor" href="#_29统一认证与授权如何保障服务安全" aria-label="Permalink to &quot;29统一认证与授权如何保障服务安全？&quot;">​</a></h1><p>认证与授权对于当前的互联网应用是非常重要的基础功能：<strong>认证</strong> 用于验证当前用户的身份，而<strong>授权</strong>意味着用户在认证成功后，会被系统授予访问系统资源的权限。只有具备相应身份和权限的人才能访问系统中的相应资源，比如在购物网站中你只能支付你自己购物车内的商品，这就保护了用户和系统的信息安全。</p><p>微服务架构不同于单体应用的架构，单体应用的认证和授权非常集中，但是当服务被拆分之后，对各个微服务的认证与授权就会变得非常分散，因此，在微服务架构中，就将集成统一认证与授权的功能作为横切关注点，为应用服务提供信息安全保障。</p><h3 id="微服务安全的挑战和现状" tabindex="-1">微服务安全的挑战和现状 <a class="header-anchor" href="#微服务安全的挑战和现状" aria-label="Permalink to &quot;微服务安全的挑战和现状&quot;">​</a></h3><p>在单体应用中，开发者可以通过简单的拦截器以及 Session 机制对用户的访问进行控制和记录。但是，在目前微服务盛行的架构体系下，服务的数量在业务分解后急剧增加，其中每个微服务都需要对用户的行为进行认证和许可，明确当前访问用户的身份与权限级别。与此同时，整个系统可能还需对外提供一定的服务，比如第三方登录授权等。</p><p>在这种情况下，如果要求每个微服务都实现各自的用户信息管理系统，那不仅增加了开发的工作量，而且出错的概率也会大大增加。对此而言，统一的认证与授权就显得尤为必要和有效了。</p><p><strong>目前主流的统一认证和授权方式有 OAuth2、分布式 Session 和 JWT 等，其中又以 OAuth2 方案使用最为广泛，已经成为当前授权的行业标准。</strong></p><p>由于统一认证与授权方案会将用户信息进行统一管理和使用，这就很可能出现系统性能瓶颈的问题，甚至在认证和授权服务宕机后，整个系统将无法正常运行。与此同时，整合当前系统中各个服务的用户信息管理系统也存在一定的难度，所以在实践时需要根据项目的现状理智选择统一认证与授权方案。</p><p>常见的认证与授权方案有 OAuth2、分布式 Session 和 JWT 等，下面我们就来分别介绍这 3 种方案，看看这些方案是如何保障微服务安全的。</p><h3 id="当前行业授权标准-oauth2" tabindex="-1">当前行业授权标准 OAuth2 <a class="header-anchor" href="#当前行业授权标准-oauth2" aria-label="Permalink to &quot;当前行业授权标准 OAuth2&quot;">​</a></h3><p>OAuth 协议目前已经发展到 OAuth2 版本，之前的 OAuth1 由于不被 OAuth2 兼容，且签名逻辑过于复杂和授权流程过于单一，所以这里我们就不过多讨论它。</p><p>下面我们重点关注的是 OAuth2 认证流程，它是当前 Web 应用中的主流授权流程。</p><p>OAuth2 是当前授权的行业标准，其重点在于为 Web 应用程序、桌面应用程序、移动设备以及室内设备的授权流程提供简单的客户端开发方式。它为第三方应用提供对 HTTP 服务的有限访问，既可以是资源拥有者通过授权允许第三方应用获取 HTTP 服务，也可以是第三方应用以自己的名义获取访问权限。</p><p>接下来我们会首先介绍 OAuth2 协议的参与角色，然后阐述 OAuth2 协议认证授权的基本流程，最后再对 OAuth2 中客户端授权类型进行讲解。</p><h4 id="_1-角色" tabindex="-1">1. 角色 <a class="header-anchor" href="#_1-角色" aria-label="Permalink to &quot;1. 角色&quot;">​</a></h4><p>OAuth2 中主要分为了 4 种角色，如下表所示：</p><table><thead><tr><th><strong>角色</strong></th><th><strong>中文名称</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>resource owner</td><td>资源所有者</td><td>是能够对受保护的资源授予访问权限的实体。可以是一个用户，这时被称为 end-user。</td></tr><tr><td>client</td><td>客户端</td><td>持有资源所有者的授权，代表资源所有者对受保护资源进行访问。</td></tr><tr><td>resource server</td><td>资源服务器</td><td>持有受保护的资源，允许持有访问令牌的请求访问受保护资源。</td></tr><tr><td>authorization server</td><td>授权服务器</td><td>对资源所有者的授权进行认证，成功后向客户端发送访问令牌。</td></tr></tbody></table><p>在多数情况下，资源服务器和授权服务器是合二为一的：在授权交互时是授权服务器，在请求资源交互时是资源服务器。当授权服务器是单独的实体时，它可以发出被多个资源服务器接受的访问令牌。</p><h4 id="_2-协议流程" tabindex="-1">2. 协议流程 <a class="header-anchor" href="#_2-协议流程" aria-label="Permalink to &quot;2. 协议流程&quot;">​</a></h4><p>我们来看一张 OAuth2 的流程图，如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  	 </span><span style="color:#F97583;">+--------+</span><span style="color:#E1E4E8;">                               </span><span style="color:#F97583;">+---------------+</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> Authorization Request </span><span style="color:#F97583;">-&gt;|</span><span style="color:#E1E4E8;">   Resource    </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">                               </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">     Owner     </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|&lt;-</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> Authorization Grant </span><span style="color:#F97583;">---|</span><span style="color:#E1E4E8;">               </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">                               </span><span style="color:#F97583;">+---------------+</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">                               </span><span style="color:#F97583;">+---------------+</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> Authorization Grant </span><span style="color:#F97583;">--&gt;|</span><span style="color:#E1E4E8;"> Authorization </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> Client </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">                               </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">     Server    </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|&lt;-</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">-----</span><span style="color:#E1E4E8;"> Access Token </span><span style="color:#F97583;">-------|</span><span style="color:#E1E4E8;">               </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">                               </span><span style="color:#F97583;">+---------------+</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">                               </span><span style="color:#F97583;">+---------------+</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|--</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">-----</span><span style="color:#E1E4E8;"> Access Token </span><span style="color:#F97583;">------&gt;|</span><span style="color:#E1E4E8;">    Resource   </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">                               </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">     Server    </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|&lt;-</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">---</span><span style="color:#E1E4E8;"> Protected Resource </span><span style="color:#F97583;">---|</span><span style="color:#E1E4E8;">               </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">+--------+</span><span style="color:#E1E4E8;">                               </span><span style="color:#F97583;">+---------------+</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  	 </span><span style="color:#D73A49;">+--------+</span><span style="color:#24292E;">                               </span><span style="color:#D73A49;">+---------------+</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> Authorization Request </span><span style="color:#D73A49;">-&gt;|</span><span style="color:#24292E;">   Resource    </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">                               </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">     Owner     </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|&lt;-</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> Authorization Grant </span><span style="color:#D73A49;">---|</span><span style="color:#24292E;">               </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">                               </span><span style="color:#D73A49;">+---------------+</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">                               </span><span style="color:#D73A49;">+---------------+</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> Authorization Grant </span><span style="color:#D73A49;">--&gt;|</span><span style="color:#24292E;"> Authorization </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> Client </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">                               </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">     Server    </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|&lt;-</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">-----</span><span style="color:#24292E;"> Access Token </span><span style="color:#D73A49;">-------|</span><span style="color:#24292E;">               </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">                               </span><span style="color:#D73A49;">+---------------+</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">                               </span><span style="color:#D73A49;">+---------------+</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|--</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">-----</span><span style="color:#24292E;"> Access Token </span><span style="color:#D73A49;">------&gt;|</span><span style="color:#24292E;">    Resource   </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">                               </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">     Server    </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|&lt;-</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">---</span><span style="color:#24292E;"> Protected Resource </span><span style="color:#D73A49;">---|</span><span style="color:#24292E;">               </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">+--------+</span><span style="color:#24292E;">                               </span><span style="color:#D73A49;">+---------------+</span></span></code></pre></div><p>OAuth2 角色的抽象交互流程图</p><p>这是一张关于 OAuth2 角色的抽象交互流程图，主要包含以下 6 个步骤。</p><ul><li><p>①客户端请求资源所有者的授权。</p></li><li><p>②资源所有者同意授权，返回授权许可（Authorization Grant），这代表了资源所有者的授权凭证。</p></li><li><p>③客户端携带授权许可要求授权服务器进行认证，请求访问令牌。</p></li><li><p>④授权服务器会同时验证客户端身份和认证客户端携带的授权许可的有效性，如果有效，则返回访问令牌。</p></li><li><p>⑤客户端获取到授权服务器颁发的访问令牌后，就可以携带访问令牌访问资源服务器中受保护的资源。</p></li><li><p>⑥资源服务器验证访问令牌，如果有效，则接受访问请求，返回受保护资源。</p></li></ul><h4 id="_3-客户端授权类型" tabindex="-1">3. 客户端授权类型 <a class="header-anchor" href="#_3-客户端授权类型" aria-label="Permalink to &quot;3. 客户端授权类型&quot;">​</a></h4><p>客户端只有在获取到资源所有者的授权许可后，才能向授权服务器请求访问令牌。OAuth2 默认定义了 4 种授权类型，当然也提供了用于定义额外的授权类型的扩展机制。默认的 4 种授权类型如下表所示：</p>`,26),y=s("p",null,[a("其中"),s("strong",null,"经常使用的授权类型为授权码类型和密码类型"),a('。简化类型是由于省略了授权码类型流程中的"授权码"步骤而得名；而客户端类型是客户端以自己的名义直接向授权服务器请求访问令牌，不需要用户授权即可请求访问令牌。')],-1),i=s("p",null,"我们接下来就只对常用的授权码类型和密码类型的流程做详细的介绍。",-1),d=s("p",null,[s("strong",null,"（1）授权码类型")],-1),h=s("p",null,"授权码类型是 OAuth2 默认授权类型中功能最完整、流程最严密的授权类型。授权码类型要求客户端能够与资源所有者的代理（如 Web 浏览器等）进行交互，它通过重定向资源所有者的代理，让资源所有者与授权服务器直接交互授权，避免资源所有者的信息被泄漏，并将授权通过后生成的授权码以重定向的方式返回给客户端。",-1),u=s("p",null,"其授权流程图如下图所示：",-1),A=l("<p>授权码类型流程图</p><p>结合该流程图，我们来分析一下授权码类型的整个工作流程。</p><ul><li><p>①客户端将资源所有者的代理重定向到授权服务器的端点，客户端会在重定向的地址中提交自身的客户端标识、请求范围、本地状态和用于接收授权码的重定向地址等信息。</p></li><li><p>②资源所有者通过代理与授权服务器直接交互，授权服务器认证资源所有者的身份，并确认资源所有者同意还是拒绝访问授权。</p></li><li><p>③在资源所有者同意授予客户端访问权限后，授权服务器会回调客户端在第一步中提交的重定向地址，并在重定向地址中携带生成的授权码和原先提交的本地状态。否则直接返回资源所有者拒绝授权。</p></li><li><p>④获取到授权码的客户端可以携带授权码和用于获取授权码的重定向地址，向授权服务器请求访问令牌。授权服务器会对客户端身份和授权码同时进行认证。</p></li><li><p>⑤授权服务器认证客户端身份和授权码，并对客户端提交的重定向地址和获取授权码的重定向地址进行匹配。如果信息一致，则返回访问令牌，并有可能同时返回刷新令牌。</p></li></ul><p><strong>（2）密码类型</strong></p><p>在密码类型中，资源所有者会将自身的密码凭证直接交予客户端，客户端通过自己持有的信息直接从授权服务器获取授权。在这种情况下，需要资源所有者对客户端高度信任，同时客户端不允许保存密码凭证。这种授权类型适用于能够获取资源所有者凭证（如用户名和密码）的客户端。授权流程图如下所示：</p>",5),g=l('<p>密码类型授权流程图</p><p>同样，我们还结合授权流程图来分析一下密码类型的授权流程。</p><ul><li><p>①资源所有者向客户端提供其用户名和密码等凭证。</p></li><li><p>②客户端携带资源所有者的凭证（用户名和密码），向授权服务器请求访问令牌。</p></li><li><p>③授权服务器认证客户端身份和携带的资源所有者凭证，如果有效，则返回访问令牌，并可能同时返回刷新令牌。</p></li></ul><p><strong>（3）刷新令牌</strong></p><p>以上两种类型中，你可能也注意到了，响应结果中可能会同时返回刷新令牌。那什么是刷新令牌呢？刷新令牌是授权服务器提供给客户端在访问令牌失效时重新向授权服务器申请访问令牌的凭证。</p><p>客户端从授权服务器中获取的访问令牌一般是具备时效性的，在访问令牌过期的情况下，持有有效用户凭证的客户端可以再次向授权服务器请求访问令牌，而持有刷新令牌的客户端也可以向授权服务器请求新的访问令牌，也就是令牌刷新操作。</p><h3 id="数据共享的分布式-session" tabindex="-1">数据共享的分布式 Session <a class="header-anchor" href="#数据共享的分布式-session" aria-label="Permalink to &quot;数据共享的分布式 Session&quot;">​</a></h3><p>在 Web 服务盛行的当下，我们一般会通过 Session 和 Cookie 来维护访问用户的登录状态。同时，随着分布式系统的快速发展，原本在单个服务器上的 Session 管理也逐渐发展为分布式 Session 管理。</p><p>接下来我们就来介绍会话跟踪技术 Session 和 Cookie，以及分布式 Session 的作用和相关实现方案。</p><h4 id="_1-会话跟踪技术-session-和-cookie" tabindex="-1">1. 会话跟踪技术 Session 和 Cookie <a class="header-anchor" href="#_1-会话跟踪技术-session-和-cookie" aria-label="Permalink to &quot;1. 会话跟踪技术 Session 和 Cookie&quot;">​</a></h4><p>会话是指用户登录网站后的一系列操作，比如查看列表、收藏商品和购买商品等。一次会话中一般会存在多次的 HTTP 请求。而 HTTP 协议作为一种无状态协议，在连接关闭之后，服务器就无法继续跟踪用户的会话，从而丢失了用户操作的上下文信息。</p><p>对此，我们需要会话跟踪技术管理和跟踪用户的整个会话，在多次 HTTP 操作中将用户与用户关联起来。而<strong>Session 和 Cookie 就是最常用的会话跟踪技术</strong>。</p><p>Session 和 Cookie 是一种记录用户状态信息的机制，它们分别被保存在服务器端和客户端浏览器中。当客户端浏览器访问服务器的时候，服务器会把当前的用户信息以某种形式记录在服务器上，这就是 Session。客户端浏览器在访问时可以通过 Session 查找该用户的状态。</p><p>Cookie 实际上是在客户端浏览器请求服务器时，如果服务器需要记录当前用户的状态，就会在响应中向客户端浏览器颁发一小段的文本信息用于标记当前的用户状态，这段文本信息与服务器中的 Session 一一对应，被称为 Cookie。当浏览器再次请求该网站时，会把请求的网址连同该 Cookie 提交给服务器。服务器根据 Cookie 中的信息查找 Session，从 Session 中获取用户信息，以此来辨认用户状态。服务器还可以根据需要修改 Cookie 中的内容。</p><p>简单来说，<strong>Cookie 被用在客户端中记录用户身份信息，而 Session 被用在服务器端中记录用户身份信息</strong>。</p><h4 id="_2-分布式-session-的作用" tabindex="-1">2. 分布式 Session 的作用 <a class="header-anchor" href="#_2-分布式-session-的作用" aria-label="Permalink to &quot;2. 分布式 Session 的作用&quot;">​</a></h4><p>在单体应用时代，应用部署在同一个 Web 服务器上，可以使用同一个 Web 服务器对 Session 进行管理。随着系统架构的演进，在分布式架构或者微服务架构中，会存在多个 Web 服务器，用户的请求根据负载均衡转发到不同的机器上，这就有可能导致 Session 丢失的情况出现。</p><p>比如，一开始用户在 A 机器上登录并发起请求，后来由于负载均衡请求被转发到 B 机器上，那这时会出现什么问题呢？因为用户的 Session 保存在 A 机器的 Web 服务器上，在 B 机器的 Web 服务器上是无法查找到的，所以导致 B 机器认为用户没有登录，返回了用户未登录的异常，引起了用户的费解。</p><p>因此，在分布式架构或微服务架构下，就需要保证在一个 Web 服务器上保存 Session 后，其他 Web 服务器可以同步或共享这个 Session，达到用户一次登录、多处可访问的效果。这就是分布式 Session 要做的事。</p><h4 id="_3-分布式-session-的实现方案" tabindex="-1">3. 分布式 Session 的实现方案 <a class="header-anchor" href="#_3-分布式-session-的实现方案" aria-label="Permalink to &quot;3. 分布式 Session 的实现方案&quot;">​</a></h4><p>分布式 Session 有如下几种实现方式，如下表所示：</p>',21),_=l(`<p>综合对比这 4 种方式，相对来说，<strong>集中式管理更加可靠，也是应用最广泛的。</strong></p><h3 id="安全传输对象-jwt" tabindex="-1">安全传输对象 JWT <a class="header-anchor" href="#安全传输对象-jwt" aria-label="Permalink to &quot;安全传输对象 JWT&quot;">​</a></h3><p>JWT（JSON Web Token）作为一个开放的标准，通过<strong>紧凑</strong> （快速传输，体积小）并且<strong>自包含</strong>（有效负载中包含用户所需的所有信息，避免了对数据库的多次查询）的方式，定义了用于在各方之间发送的安全 JSON 对象。</p><p>JWT 可以很好地充当 OAuth2 的访问令牌和刷新令牌的载体，这是 Web 双方之间进行安全传输信息的良好方式。当只有授权服务器持有签发和验证 JWT 的 secret 时，也就只有授权服务器能验证 JWT 的有效性以及签发带有签名的 JWT，这就保证了以 JWT 为载体的 Token 的有效性和安全性。</p><p>JWT 格式一般如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2FuZyB3dSIsImV4cCI6MTUxODA1MTE1NywidXNlcklkIjoiMTIzNDU2In0.IV4XZ0y0nMpmMX9orv0gqsEMOxXXNQOE680CKkkPQcs</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2FuZyB3dSIsImV4cCI6MTUxODA1MTE1NywidXNlcklkIjoiMTIzNDU2In0.IV4XZ0y0nMpmMX9orv0gqsEMOxXXNQOE680CKkkPQcs</span></span></code></pre></div><p>它由 3 部分组成，每部分通过&quot;.&quot;分隔开，分别是：Header（头部）、Payload（有效负载）和</p><p>Signature（签名）。</p><p>接下来我们就对每一部分进行详细的介绍。</p><h4 id="_1-header-头部" tabindex="-1">1. Header（头部） <a class="header-anchor" href="#_1-header-头部" aria-label="Permalink to &quot;1. Header（头部）&quot;">​</a></h4><p>头部通常由两部分组成。</p><ul><li><p>typ：类型，一般为 JWT。</p></li><li><p>alg：加密算法，通常是 HMAC SHA256 或者 RSA。</p></li></ul><p>一个简单的头部例子如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;alg&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;HS256&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;typ&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;JWT&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;alg&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;HS256&quot;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;typ&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;JWT&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这部分 JSON 数据会使用 Base64Url 编码后，用于构成 JWT 的第一部分，如下所示：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span></span></code></pre></div><h4 id="_2-playload-有效负载" tabindex="-1">2. Playload（有效负载） <a class="header-anchor" href="#_2-playload-有效负载" aria-label="Permalink to &quot;2. Playload（有效负载）&quot;">​</a></h4><p>有效负载是 JWT 的第二部分，是用来携带有效信息的载体，主要是关于用户实体和附加元数据的声明，由以下 3 部分组成。</p><ul><li><p>Registered claims：注册声明。它是 JWT 预定的声明，但通常不要求强制使用。主要包含 iss（JWT 签发者）、exp（JWT 过期时间）、sub（JWT 面向的用户）、aud（接受 JWT 的一方）等属性信息。</p></li><li><p>Public claims：公开声明。在公开声明中可以添加任何信息，一般是用户信息或者业务扩展信息等。</p></li><li><p>Private claims：私有声明。它是由 JWT 提供者和消费者共同定义的声明，既不属于注册声明也不属于公开声明。</p></li></ul><p>Base64 对称解密的方式很容易使得加密信息被还原，所以一般不建议在 Payload 中添加任何的敏感信息。</p><p>一个简单的有效负载例子，如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;sub&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;1234567890&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  	</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;xuan&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  	</span><span style="color:#9ECBFF;">&quot;exp&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1518051157</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;sub&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;1234567890&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  	</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;xuan&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  	</span><span style="color:#032F62;">&quot;exp&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1518051157</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这部分 JSON 会使用 Base64Url 编码后，用于构成 JWT 的第二部分，如下所示：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Inh1YW4iLCJleHAiOjE1MTgwNTExNTd9</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Inh1YW4iLCJleHAiOjE1MTgwNTExNTd9</span></span></code></pre></div><h4 id="_3-signature-签名" tabindex="-1">3. Signature（签名） <a class="header-anchor" href="#_3-signature-签名" aria-label="Permalink to &quot;3. Signature（签名）&quot;">​</a></h4><p>要创建签名，就必须要有被编码后的头部、被编码后的有效负载以及一个 secret，最后通过在头部定义的加密算法 alg 加密生成签名。生成签名的伪代码如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">HMACSHA256</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">base64UrlEncode</span><span style="color:#E1E4E8;">(header) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;.&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">base64UrlEncode</span><span style="color:#E1E4E8;">(payload),</span></span>
<span class="line"><span style="color:#E1E4E8;">  secret)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">HMACSHA256</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">base64UrlEncode</span><span style="color:#24292E;">(header) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;.&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">base64UrlEncode</span><span style="color:#24292E;">(payload),</span></span>
<span class="line"><span style="color:#24292E;">  secret)</span></span></code></pre></div><p>上述伪代码中使用的加密算法为 HMACSHA256。Secret 作为签发密钥，用于验证 JWT 以及签发 JWT，所以只能由服务端持有，不该泄漏出去。</p><p>一个简单的签名如下，这就是 JWT 的第三部分。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">X36pDQoYydHv7KDCiltTBKcQbt</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">iIT</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">jFgmUjkTSCxE</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">X36pDQoYydHv7KDCiltTBKcQbt</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">iIT</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">jFgmUjkTSCxE</span></span></code></pre></div><p>如上所述的三个部分通过&quot;.&quot;分割，就组成最终的 JWT。</p><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><p>在本课时中，我们围绕统一认证与授权如何去保障服务安全，依次介绍了 OAuth2、分布式 Session 和 JWT 等认证与授权方案，这其中以 OAuth2 方案最为标准和完备。希望通过本课时的学习，能够帮助你建立对微服务架构下统一认证和授权方案的宏观认知。</p><p>在接下来的课时中，我们将采用 Go 语言，并基于OAuth2 协议和 JWT实现一个简单的认证和授权系统，让你熟练掌握如何在微服务架构中对用户的资源进行保护。</p><p>关于微服务的认证与授权，你还有什么其他选型的方案？欢迎你在留言区和我分享。</p>`,35);function F(b,C,T,k,D,q){const n=e("Image");return t(),c("div",null,[E,p(n,{alt:"1.png",src:"https://s0.lgstatic.com/i/image/M00/5B/A5/CgqCHl9_zxuAKzwlAACE5_eVSis959.png"}),a(),y,i,d,h,u,p(n,{alt:"2.png",src:"https://s0.lgstatic.com/i/image/M00/5B/A5/CgqCHl9_z1qAO1lbAACN7fUBGB4934.png"}),a(),A,p(n,{alt:"3.png",src:"https://s0.lgstatic.com/i/image/M00/5B/A6/CgqCHl9_z2aANQVaAACfSJf6Wpc520.png"}),a(),g,p(n,{alt:"4.png",src:"https://s0.lgstatic.com/i/image/M00/5B/A5/CgqCHl9_zyaAXi9uAAMQlnqNtDg368.png"}),a(),_])}const I=o(r,[["render",F]]);export{v as __pageData,I as default};
