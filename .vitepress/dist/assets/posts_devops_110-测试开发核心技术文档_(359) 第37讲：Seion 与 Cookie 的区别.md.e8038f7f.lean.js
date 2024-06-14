import{_ as n,D as t,o as c,g as a,J as i,h as e,m as o,Q as k}from"./chunks/framework.f67d7268.js";const R=JSON.parse('{"title":"第37讲：Seion与Cookie的区别","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/110-测试开发核心技术文档/(359) 第37讲：Seion 与 Cookie 的区别.md","filePath":"posts/devops/110-测试开发核心技术文档/(359) 第37讲：Seion 与 Cookie 的区别.md","lastUpdated":1696682708000}'),l={name:"posts/devops/110-测试开发核心技术文档/(359) 第37讲：Seion 与 Cookie 的区别.md"},p=o("h1",{id:"第37讲-seion与cookie的区别",tabindex:"-1"},[e("第37讲：Seion与Cookie的区别 "),o("a",{class:"header-anchor",href:"#第37讲-seion与cookie的区别","aria-label":'Permalink to "第37讲：Seion与Cookie的区别"'},"​")],-1),_=o("h4",{id:"背景",tabindex:"-1"},[e("背景 "),o("a",{class:"header-anchor",href:"#背景","aria-label":'Permalink to "背景"'},"​")],-1),r=o("p",null,"先来看几个常见的概念：",-1),d=o("p",null,'上面写了一个 flask demo，这段代码定义了一个 session_handle 方法，我们给它一个 url，即"/session"。首先读取请求，比如我们请求会发一个参数，先通过一个 get 请求发过来，服务器收到之后，然后把几个 session 写进去，之后创建一个服务器的响应，把 session 的内容全都打印出来；接着我们再写一段代码，去给服务器设置一个 cookie，为了表示这是个 cookie，在 cookie 前面加了一个标记 "cookie_"，加上我传的一个参数的名字，这样就可以通过一个 get 请求让服务器既设置 session 又设置 cookie。',-1),h=o("p",null,"我们来看一下对于这样的一个代码，它的响应是什么？完整的代码在这个地方，也就是在服务器里面：",-1),g=o("p",null,"有这样的代码，我们只要请求 session 就可以了，基于这个情况，继续进行对比。",-1),u=o("p",null,"首先，我们发起 session 请求，来看看 session 请求是怎么做的，先发起一个命令，在脚本里面以刚才的请求为例，把 get 变成 session，即 session 那段代码的意思是说如果传入一个 a 等于 1、b 等于 2，当服务器收到请求之后，那么它会在 session 里面加入 a 等于 1、b 等于 2，cookie 里面加入 cookie a=1、cookie b=2，我们通过一个内容改出来两个 session。所以，根据 route 可设置对应的 session 和 cookie，为了区分这两个文件，我们在所有的 cookie 后面加了 _ 作为后缀，同样以 curl 命令发起一个请求把它存到 session 里面，然后把它复制到项目里，此时我们再拿到这个文件，去使用 get 与 session。",-1),A=o("h4",{id:"cookie-与-session-的区别",tabindex:"-1"},[e("cookie 与 session 的区别 "),o("a",{class:"header-anchor",href:"#cookie-与-session-的区别","aria-label":'Permalink to "cookie 与 session 的区别"'},"​")],-1),m=o("p",null,"我们看下这两个文件的区别：",-1),b=o("p",null,"可以看到，首先都是 get，但 url 不一样，第二个 url 是带有 session 处理功能的；再就是返回的内容不一样，内容长度也不一样，这都是正常的，什么时候出现变化呢？从 set-cookie 开始，可以看到当传入 a=1、b=2 时，服务器设置了 cookie a=1、cookie b =2，设置完后，服务器在响应头里面会增加 set-cookie 的字段；还有一个 Vary Cookie，这是另外一个字段，我们可以先忽略它；再往下还有一个 set-cookie 叫 session，这是一个复杂的字符串标记，从这里可以看到，当设置了 session 存储之后，如果设置了 cookie，那么会通过浏览器原样将 set-cookie 值发给你的浏览器，为什么会出现这样的机制呢？",-1),C=o("p",null,'是因为浏览器遵从一个约定，一个功能完备的浏览器它支持 cookie，就是说，服务器如果写一个 set-cookie，浏览器就会被 cookie 存下来，那么只需要告诉我 cookie 的格式和属性就可以了；然后再看 session，我们刚才设置了一堆数据，session 也设置了，session 传过来之后会发现，它没有 cookie 的前缀，因为刚才加的是 cookie 特有的，所以它也是个 cookie，只不过是服务端自动生成的一个指令，从而指定的 cookie，它不是我们手工设置的，是写死的一个东西，即 session="......"后面是它的执行内容。',-1),f=o("p",null,"你可以看到它们的区别，cookie 的核心是它会通过一个独立 cookie 字段传下来，而无论我们设置多少 session，它只会传下来一个 cookie，用一个类似于加密串的东西，来代表存储了它的数据。",-1),P=o("p",null,"那么数据到底存哪了？是加密串里还是服务端？你可以用命令再次执行，比如我们把数据存的非常长，那这个数据会不会发生变化？",-1),I=o("p",null,"现在我写了一个 session2，然后把它复制过来，去服务器中看看它与 session 的区别，可以看到，首先由于 cookie 已经设置了，所以这个时候它会发生变化。",-1),S=o("p",null,"再看这个字段，可以看到它设置的 session 大小并没有发生变化，这说明不同的用户访问的时候，session 是不一样的。但是它的数据并没有存到加密串里，是因为它的长度不一样，存的大小东西也不一样，但现在是一模一样，说明数据都存到了服务区，它只不过是把一个加密的关联数据放到这儿了，用来代表关联关系而已。",-1),T=o("p",null,[e("那么经过这两个体系，我们已经知道了，session 的数据全存到了服务端，它会通过 cookie 把它关联的加密内容都存进去，这种通常也叫"),o("strong",null,"基于 cookie 的 session"),e("。这种 session 是数据的一套管理机制，它可以用 cookie 或者其他形式进行通讯，所以说我们这次使用中央基金访问的时候，很多的网站开发框架就会默认使用 cookie 存储 session 的关联数据。有了这个实例，你可能已经了解 cookie 与 session 的区别，cookie 就是你写什么它就存到你的浏览器里面；session 是把所有的数据都存到服务端，把 session 关联的一个字符串，以 cookie 的形式传达到浏览器。")],-1),D=o("h4",{id:"cookie-机制是什么",tabindex:"-1"},[e("cookie 机制是什么 "),o("a",{class:"header-anchor",href:"#cookie-机制是什么","aria-label":'Permalink to "cookie 机制是什么"'},"​")],-1),q=o("p",null,"由于无痕模式的浏览器没有历史记录，所以它是没有 cookie 的。我们换一种方式，把请求换成一次 session，再发一次请求。浏览器跟 curl 命令不太一样，浏览器支持 cookie，可以看到，服务器会返回 cookie_a、cookie_b，以及 session 字段。当拿到消息之后，浏览器里其实就多了两个 cookie、一个 session（一共有 3 个 cookie）。当我们下一次再去访问服务器的时候，哪怕不输入这个网址了，只输入一个首页，甚至首页报错了，在 Headers 信息里面，只要是发送给网站的，浏览器都会自动追加一个 cookie 字段，里面包含了所有的 cookie。我们回到 request，点开这个链接，会发现 cookie 全被带上了，这样其实也很浪费带宽。",-1),H=o("p",null,"所以根据用户的数据，我们通常都会存到 session 里面，只把一个标记放到客户端，而 session 唯一的 ID 其实是存在 cookie 内的，只要 cookie 带着，那么在服务端根据 cookie 的值，再去取 session 里面存在的数据就可以了。",-1),x=o("p",null,"这是两套机制，session 的 ID 只不过是以 cookie 的形态存到了客户端，cookie 里面的数据可以发送给服务端，服务端也可以正常接受。",-1),V=o("p",null,"所以大多数服务器更多的是存 session 的 ID，或者是存储一些本地离线也能访问的资料，通常不会放太多敏感信息。因为数据库给的数据也是可以篡改的，只是 session ID 无法更改，一旦改了就会失效，是因为它有一个加密机制。",-1),M=o("p",null,"我们了解了 cookie 的作用，就知道 session 是依托在 cookie 机制上的，但并不只是依托于 cookie，就算没有了cookie 机制，它仍然可以有其他办法来运行。",-1),B=o("p",null,"接下来我们做一个总结，首先浏览器接受服务端的 Set-Cookie 指令，会把 cookie 放到浏览器里面，每一个网站所保存的 cookie 值，基本上只作用于自己的网站，当然也有个例。session 会把数据都会存储到服务端，只是把关联数据的加密串或者关联的 ID，放到 cookie 中来进行了解。",-1),G=o("h4",{id:"token-是什么",tabindex:"-1"},[e("token 是什么 "),o("a",{class:"header-anchor",href:"#token-是什么","aria-label":'Permalink to "token 是什么"'},"​")],-1),w=o("p",null,[e("token 的应用场景比如有开放认证协议、企业微信、GitHub、GitLab 等相关认证。下面以企业微信为例，打开"),o("a",{href:"https://work.weixin.qq.com/api/doc/90000/90135/91039",target:"_blank",rel:"noreferrer"},"官网"),e("，找到服务端的 API，它里面有个内容，即获取 token。接下来展示如何获取 token？")],-1),N=o("p",null,"获取 token 是调用企业微信 API 接口的第 1 步，调查接口都需要使用 token，这相当于创立了一个登录的凭证。从这个意义上看，token 有点类似于我们古代出城用的令牌，要想获取 token，需要你拿到企业 ID 的加密内容，也就是有个认证，然后可以在后台进行配置。拿着 corpid 和 corpsecret 这两个去申请，发起请求之后，服务器就会生成一个 token，不过它会过期，比如两小时之后，此时我会加一个标记，过期后再次申请就可以了，这样就避免了 cookie 长期被使用。",-1),v=o("p",null,"所以当需要过期机制的时候，通常先要申请 token，申请之后，接下来你所有的网络请求，比如创建成员、企业微信的接口、读取成员等，大量的接口创建部门都用到了 token。",-1),J=o("h4",{id:"token-的应用场景和机制",tabindex:"-1"},[e("token 的应用场景和机制 "),o("a",{class:"header-anchor",href:"#token-的应用场景和机制","aria-label":'Permalink to "token 的应用场景和机制"'},"​")],-1),y=o("p",null,"回到服务端 API 的上一页，可以看到 token 的应用场景，即利用你自身的信息获取 token，获取之后，你可以在后续的相关请求中，使用它来获得系统的一些认证，从而进行各种请求。这个 token 是放在 query 里的，可以看到它 get 的是 query 参数的形态提供，这是需要过期机制的 token，所以 token 需要有一个申请过程。",-1),E=o("p",null,"还有一些是不太需要过期的，以 GitHub 为例，当我们访问该网站的时候，在 GitHub 后台有一个 Settings，它里面有一个开发者设置，该设置里面有一个 Personal access token，它也会有一个 token 机制，那么 token 是用来做什么的？当你要以 API 的形式进行访问时，需要有一个认证，也就是需要知道你是谁，在生成认证的时候，会发现它这儿需要你填一个东西，比如我们这次填的是 hogwards2020。",-1),Y=k("",13);function L(O,Q,$,F,K,W){const s=t("Image");return c(),a("div",null,[p,_,r,i(s,{alt:"测试1.png",src:"https://s0.lgstatic.com/i/image3/M01/13/7B/Ciqah16f29OAE86BAAEmniG3sQE414.png"}),e(),d,h,i(s,{alt:"测试2.png",src:"https://s0.lgstatic.com/i/image3/M01/06/4C/CgoCgV6f2-eADKSNAAI7pBcLbbY475.png"}),e(),g,u,A,m,i(s,{alt:"测试3.png",src:"https://s0.lgstatic.com/i/image3/M01/13/7B/Ciqah16f2_6Aa4YEAAbbYYDnx6g884.png"}),e(),b,C,f,i(s,{alt:"测试4.png",src:"https://s0.lgstatic.com/i/image3/M01/13/7B/Ciqah16f3A6AKYweAAY8z01smgA390.png"}),e(),P,i(s,{alt:"测试5.png",src:"https://s0.lgstatic.com/i/image3/M01/06/4C/CgoCgV6f3BaAATJPAAMf80atzeA754.png"}),e(),I,i(s,{alt:"测试6.png",src:"https://s0.lgstatic.com/i/image3/M01/13/7B/Ciqah16f3COAStenAAbwnGtoVp8331.png"}),e(),S,T,D,q,i(s,{alt:"测试7.png",src:"https://s0.lgstatic.com/i/image3/M01/06/4D/CgoCgV6f3FCAJOhrAALJLghJNSc769.png"}),e(),H,x,V,M,B,G,w,i(s,{alt:"测试8.png",src:"https://s0.lgstatic.com/i/image3/M01/06/4D/CgoCgV6f3HWAFMFwAAQTS6oVITo864.png"}),e(),N,v,J,y,E,i(s,{alt:"测试9.png",src:"https://s0.lgstatic.com/i/image3/M01/13/7C/Ciqah16f3IWAJW4RAAL-uCQbX4g904.png"}),e(),Y])}const U=n(l,[["render",L]]);export{R as __pageData,U as default};
