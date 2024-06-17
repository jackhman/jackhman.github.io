import{_ as l,F as p,g as e,K as n,h as i,ar as t,l as s,o as h}from"./chunks/framework.VlluEs-f.js";const H=JSON.parse('{"title":"10订阅消息：提高小程序用户留存","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/103-云原生微信小程序开发实战文档/(5103) 10  订阅消息：提高小程序用户留存.md","filePath":"posts/frontEnd/103-云原生微信小程序开发实战文档/(5103) 10  订阅消息：提高小程序用户留存.md","lastUpdated":1718371218000}'),k={name:"posts/frontEnd/103-云原生微信小程序开发实战文档/(5103) 10  订阅消息：提高小程序用户留存.md"},r=t('<h1 id="_10订阅消息-提高小程序用户留存" tabindex="-1">10订阅消息：提高小程序用户留存 <a class="header-anchor" href="#_10订阅消息-提高小程序用户留存" aria-label="Permalink to &quot;10订阅消息：提高小程序用户留存&quot;">​</a></h1><p>你好，我是俊鹏，今天这一讲，我来带你学习怎么使用微信小程序的订阅消息功能。</p><p>你能发现，我在标题里强调了订阅消息能提高小程序的留存率，<strong>为什么强调这一点呢？</strong> 站在小程序的角度上，订阅消息最普遍的应用场景有两种，一种是被动的，一种是主动的。</p><p><strong>被动的订阅消息指：</strong> 消息的发送需要用户的某些行为作为触发，然后小程序再针对性地向用户发送消息反馈。以电商类小程序为例，当用户支付成功之后，小程序会向用户推送一条消息，用户可以通过这条消息跟踪订单进度。</p><p><strong>主动的订阅消息是指：</strong> 小程序可以定期或不定期地向用户发送消息通知，不需要用户的某些行为作为触发点。比如学习类小程序在每天的固定时间向用户发送消息，通知用户打卡。</p><p>在被动场景下，小程序会对用户的行为及时反馈，从而提升用户的产品体验，以及对小程序的认可度、依赖度。在主动场景下，小程序可以通过定期或不定期地发送通知，把离开的用户拉回来继续使用小程序。所以，这两种场景下的订阅消息都能帮小程序提高用户的留存率，<strong>这就是我们学习订阅消息的目的。</strong></p><p>我希望学完今天的内容，你能把订阅消息应用到工作中，让自己的小程序获得更多稳定的用户。</p><p>现在，我们已经明确了学习的目的，接下来就一起学习怎么使用小程序的订阅消息功能。订阅消息属于微信提供的开放接口之一，所以跟 09 讲调用微信开放接口一样，我会介绍两种方法：</p><ul><li><p>传统的调用方式，掌握这种方式后，你会明白订阅消息完整链路的基本原理；</p></li><li><p>云调用方式，教你用免鉴权的方式快速实现订阅消息的调用，提高研发效率。</p></li></ul><p>这两种方式有一些内容是相同的，包括消息模板配置和获取用户授权，所以我先带你学习这些内容，然后再掌握它们的差异点，也就是发送消息的逻辑。</p><p>订阅消息完整的流程可以简单概况成下面这张图：</p>',11),E=s("ol",null,[s("li",null,[s("p",null,"在发送消息之前必须获得用户授权，这是第一步也最基本的一步。")]),s("li",null,[s("p",null,"用户授权之后，你需要把授权信息记录下来，因为小程序的订阅消息能定义多种类型，每种都需要得到用户的授权后才可以发送。")]),s("li",null,[s("p",null,"消息的发送需要一个触发点，根据订阅消息的两种应用场景，触发点可以是用户的某个行为比如支付订单，也可以是小程序主动触发，比如定时发送。")])],-1),d=s("p",null,"这三个步骤是小程序订阅消息的基本流程，我讲这个流程是希望你能先对整体的轮廓有所了解，然后再深入完整架构和实现细节。在这个流程中，有一个没有覆盖的必要步骤：先配置订阅消息的模板。",-1),g=s("h3",{id:"配置消息模板",tabindex:"-1"},[i("配置消息模板 "),s("a",{class:"header-anchor",href:"#配置消息模板","aria-label":'Permalink to "配置消息模板"'},"​")],-1),c=s("p",null,'登录微信公众平台之后，消息模板的配置入口在小程序管理后台中的"功能"-"订阅消息"里，你会看到下面这张图展示的内容：',-1),o=s("p",null,'点击"添加"就可以配置消息模板了，微信官方提供了一些常用的模板类型，你可以自行选择：',-1),_=t(`<p>你可以看到，上图中有一个&quot;一次性订阅&quot;的提醒，说明这些模板库提供的都是一次性订阅消息。而小程序的订阅消息分为：一次性订阅消息和长期订阅消息。</p><ul><li><p>一次性你可以简单理解成得到用户的授权之后只能发送一条消息，如果再有发送需求还要再次申请用户的授权。</p></li><li><p>长期订阅消息可以得到用户授权后发送多条消息。不过目前长期订阅消息只向政务民生、医疗、交通、金融、教育等线下公共服务开放（后面也许会开放出更多领域）。</p></li></ul><p><strong>所以，我们今天的学习是围绕一次性订阅消息展开的。</strong></p><p>按照上述流程配置完消息模板后，你会拿到一个模板 ID，请记住这个名词，后续所有步骤都会用到它，而第一步就是用模板 ID 获取用户的授权。</p><h3 id="获取用户授权" tabindex="-1">获取用户授权 <a class="header-anchor" href="#获取用户授权" aria-label="Permalink to &quot;获取用户授权&quot;">​</a></h3><p>小程序SDK提供了一个用来获取用户授权的API：<a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html" target="_blank" rel="noreferrer">wx.requestSubscribeMessage</a>。你要用这个 API 为每一个模板 ID 授权，调用方式如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">requestSubscribeMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  tmplIds: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;tmplId_1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;tmplId_2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;tmplId_3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    /</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      errMsg： </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;requestSubscribeMessage:ok&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      tmplId_1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;accept&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      tmplId_2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;reject&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      tmplId_3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ban&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>其中参数 tmplIds 是一个数组，数组中的每个元素就是前面配置的消息模板 ID ，如果你需要一次性获取多个模板的用户授权就在 tmplIds 数组里写入多个元素。调用wx.requestSubscribeMessage 之后，用户会在小程序端收到一个弹窗：</p>`,8),y=s("p",null,'用户可以对列表中的每个消息模板分别授权，也可以全部勾选（也就是全部授权）。用户点击"允许"按钮之后，将会触发 wx.requestSubscribeMessage 的 success 回调函数，返回的数据结构可以参考上面的示例代码，每个模板 ID 都有一个状态标识，accept 代表得到授权、reject 代表未获得授权、ban 代表被后台封禁。当然，正常情况下是不会出现 ban 状态的，除非你的订阅消息涉嫌骚扰用户或内容违禁。',-1),u=s("p",null,[i("既然学习的是一次性订阅消息，那么你要在每次得到用户授权后都要把信息记录下来。但不能把这些信息保存在前端，而是同步到服务端保存（因为发送消息是在服务端执行的），"),s("strong",null,"那怎么把这些信息与用户一一对应起来呢？")],-1),F=s("p",null,"还记得我们在 02 讲学习的小程序登录功能吗？登录成功后服务端会拿到用户的 openId，然后用openId 创建自定义登录态返回给小程序的前端，后续小程序的每次请求都需要携带这个自定义登录态，服务端在接收到请求后可以从自定义登录态反解析出用户的 openId，这样就可以将请求的数据与用户一一对应起来了。整个过程如图所示：",-1),m=s("p",null,"这样我们就获取到了用户的授权，接下来就是向用户发送一条订阅消息，我们先学习传统的调用方式（这里会用到 09 讲中提到的使用缓存管理 access_token 的知识）。",-1),A=s("h3",{id:"发送消息的传统调用方式",tabindex:"-1"},[i("发送消息的传统调用方式 "),s("a",{class:"header-anchor",href:"#发送消息的传统调用方式","aria-label":'Permalink to "发送消息的传统调用方式"'},"​")],-1),b=s("p",null,"学完 09 讲后我们知道了，调用微信开放接口需要临时凭证 access_token，发送订阅消息的接口作为微信开放接口的一员同样要遵循这条规则。",-1),C=s("p",null,[i("服务端需要调用微信提供的"),s("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.send.html#method-cloud",target:"_blank",rel:"noreferrer"},"subscribeMessage.send"),i("接口向用户发送订阅消息，"),s("strong",null,"这个接口有几个请求参数需要你特别关注：")],-1),D=s("p",null,"其中 template_id 是上一步得到用户授权的几个模板 ID 中的一个，请注意，你每次调用 subscribeMessage.send 接口只能发送一条消息给用户，而不能同时发送多条，这是微信的限制。touser 参数的值是接收消息的用户 openId，access_token 是临时凭证。",-1),q=s("p",null,[i("而且我刚刚提到了，发送消息需要一个触发点（可以是用户的某个行为触发，也可以是服务端的定时任务，具体采用哪种方式需要根据业务场景来决定），"),s("strong",null,"我会以定时任务这种场景为例，对照下图讲解一下完整的发送消息流程：")],-1),B=t(`<ol><li><p>首先，服务器需要设定一个定时任务，比如每天 9 点触发一次，发送消息。</p></li><li><p>触发之后，第一步先检查本地缓存中是否存在有效期之内的 access_token ，如果不存在就需要重新请求微信的服务获取一个新的。</p></li><li><p>拿到有效的 access_token 之后，第二步是通过 subscribeMessage.send 接口向微信服务器发送一个请求。</p></li><li><p>微信服务器收到请求之后，发送一条订阅消息给指定的 openId 对应的用户，便完成了整个发送消息的流程。</p></li></ol><p>以上就是发送订阅消息的传统调用方式。你也看到了，在这套流程中，需要比较繁重的服务端开发工作，比如设定定时任务、缓存管理等，如果你具备这些知识和能力的话当然是件很容易完成的事，但对于大多数小程序前端开发者来说，相对欠缺这部分知识，<strong>所以接下来我们就来学习效率更高的云调用方式。</strong></p><h3 id="发送消息的云调用方式" tabindex="-1">发送消息的云调用方式 <a class="header-anchor" href="#发送消息的云调用方式" aria-label="Permalink to &quot;发送消息的云调用方式&quot;">​</a></h3><p>09 讲中我已经讲了云调用是什么，就不再重复了，如果你忘了记得复习一下。微信小程序的订阅消息功能提供了云调用的支持，你可以不用关注鉴权，也就是不需要关注 access_token，直接在云函数里调用微信 SDK 提供的<a href="https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.send.html#method-cloud" target="_blank" rel="noreferrer">openapi.subscribeMessage.send</a>API 就行，参数跟 subscribeMessage.send 接口一样，只是不再需要 access_token 了。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cloud</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wx-server-sdk&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cloud.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cloud.openapi.subscribeMessage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        touser: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;OPENID&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        templateId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;TEMPLATE_ID&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // ...其他参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      })</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> err</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>除了避免管理 access_token 的麻烦以外，在前面传统调用方式中还用到了一项能力：定时任务。这项需求云函数同样可以满足，你可以给云函数配置一个定时触发器，使用简单的 JSON 配置文件就可以设定一个定时任务。比如我刚刚说的每天 9 点触发一次就可以写成下面这种格式的云函数定时触发器：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // triggers 字段是触发器数组，目前仅支持一个触发器，即数组只能填写一个，不可添加多个</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;triggers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // name: 触发器的名字，规则见下方说明</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myTrigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // type: 触发器类型，目前仅支持 timer (即 定时触发器)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;timer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // config: 触发器配置，在定时触发器下，config 格式为 cron 表达式，规则见下方说明</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0 0 9/23 1/1 * * *&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>通过上面两个步骤就完成了跟传统调用方式一样的功能，而整个发送消息的流程也得到了简化：</p>`,8),I=s("p",null,"对比这两种调用方式，你应该能够明显感受到不同。当然，这并不是说我们只学会用云调用而不用学习传统方式了。云调用的底层也是类似传统的调用方式，只不过帮你完成了定时任务、缓存管理这些服务端的开发工作，而且我们通过学习传统的调用方式能够明白底层的工作原理，也许有一天你能够成为一名架构师，那时候你就需要这些底层知识作为搭建复杂架构的基础了。",-1),f=s("h3",{id:"总结",tabindex:"-1"},[i("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),v=s("p",null,"今天这节课，我之所以带你了解小程序的订阅消息，是因为它能帮助小程序提高用户的留存率。通过这节课，我希望你能够将以下知识融会贯通：",-1),M=s("ol",null,[s("li",null,[s("p",null,"小程序订阅消息的基本流程，包括模板配置、用户授权和发送消息；")]),s("li",null,[s("p",null,"知晓发送消息的传统调用方式，并且能够充分理解每一个步骤的作用；")]),s("li",null,[s("p",null,"学会并能够使用通过云调用实现订阅消息的发送，并且能够体会到云调用带来的效率提升。")])],-1),x=s("p",null,"如果你能够完成上面三点要求，那么今天就交给你一个需要动动手的课后作业：使用云调用完成小程序的订阅消息功能。我相信在成功完成这个作业之后，你能够对今天这节课的知识有更深的理解和记忆。",-1);function T(S,w,P,j,V,N){const a=p("Image");return h(),e("div",null,[r,n(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/73/98/CgqCHl_GE3qAF_7RAABLEPfMmqI643.png"}),i(),E,d,g,c,n(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/73/98/CgqCHl_GE4WAYOoDAAL0XcqrBbQ218.png"}),i(),o,n(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/73/8C/Ciqc1F_GE4uACShwAAEtUi3fSp4383.png"}),i(),_,n(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/73/8C/Ciqc1F_GE5yAbToLAAGY_A8yTg0382.png"}),i(),y,u,F,n(a,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/73/8C/Ciqc1F_GE6WAfMkcAABjm8w8YaY782.png"}),i(),m,A,b,C,n(a,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image/M00/73/98/CgqCHl_GE6yAAFfIAACKHu0E_lM563.png"}),i(),D,q,n(a,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image/M00/73/8C/Ciqc1F_GE7KAYExWAAB5fzAQH8U667.png"}),i(),B,n(a,{alt:"Drawing 11.png",src:"https://s0.lgstatic.com/i/image/M00/73/98/CgqCHl_GE76Afz1OAAA6mxKIJag728.png"}),i(),I,n(a,{alt:"10.png",src:"https://s0.lgstatic.com/i/image/M00/80/29/Ciqc1F_Qgn-AYMQVAACCFjfe-jA097.png"}),i(),f,v,M,x])}const K=l(k,[["render",T]]);export{H as __pageData,K as default};
