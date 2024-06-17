import{_ as p,F as l,g as n,K as t,h as a,ar as e,l as s,o as _}from"./chunks/framework.VlluEs-f.js";const D=JSON.parse('{"title":"15KISS：怎么设计简单易用的云开发函数？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/103-云原生微信小程序开发实战文档/(5108) 15  KISS：怎么设计简单易用的云开发函数？.md","filePath":"posts/frontEnd/103-云原生微信小程序开发实战文档/(5108) 15  KISS：怎么设计简单易用的云开发函数？.md","lastUpdated":1718371218000}'),o={name:"posts/frontEnd/103-云原生微信小程序开发实战文档/(5108) 15  KISS：怎么设计简单易用的云开发函数？.md"},c=e("",7),h=s("p",null,"可是我们在开发一个完整的产品应用时，会让多个云函数同时存在并独立运作，以支撑应用运行时各种业务请求。比如，一个简单的应用登录页面，就需要登录、注册、忘记密码三个云函数进行支持。但云函数相对独立的特性，会让很多开发者在写业务逻辑时，无意将云函数写得特别臃肿，最终降低云函数的执行效率，从而增加产品操作的延迟、后期维护的负担。",-1),r=s("p",null,"所以为了提高云函数执行效率，让后期维护变得有效，我们推崇 KISS 原则，也就是 Keep It Simple & Stupid。所以这一讲，我从提升云函数效率角度出发，通过剖析云函数运行机制来讲解优化点（让云函数保持热启动状态、缩小云函数文件的大小等）让你更好地把握云函数的特性，从而合理使用云函数。",-1),d=e("",5),g=e("",5),u=s("p",null,"从图中可以看到，函数的执行时间从第一次（冷启动）的 1.2s 降低到了 200ms左右，性能提升了 80%，我们仅仅提升了函数的调用频次（由十几分钟 1 次提升到 1 秒 1 次），就可以提升函数的调用性能，这就是热启动带给我们的价值。",-1),k=s("p",null,"所以，如果你希望业务应用中，后端服务的云函数需要保持较高的响应速度，以支撑一些特殊的业务场景（抽奖、抢购），则可以使用此方法（预热云函数使其热启动）来提升云函数响应速度。具体操作是：借助云函数提供的定时触发器，定期唤起你的容器，从而为你的云函数容器保活，确保函数时刻被热启动。",-1),m=s("h3",{id:"缩小云函数文件的大小",tabindex:"-1"},[a("缩小云函数文件的大小 "),s("a",{class:"header-anchor",href:"#缩小云函数文件的大小","aria-label":'Permalink to "缩小云函数文件的大小"'},"​")],-1),S=s("p",null,"我刚刚提到，云函数的启动流程中，第三步是创建容器和下载代码，我们无法优化创建容器和下载代码的过程，但我们可以控制和优化代码本身，因为代码是我们自己编写的。",-1),A=s("p",null,[a("在下载部署速度相同的情况下，代码的体积越大，所耗费的时间就越长。所以你可以通过缩小代码来提升代码的下载部署速度，进而整体提升云函数的执行速度。"),s("strong",null,"来做个测试："),a(" 创建两个函数，两个函数的代码完全一致，不同的是，在实验组的函数中，加入了一个 temp 变量的声明，这个变量的值是一个非常长的字符串，会让两个函数的大小分别是 68K 和 4K。")],-1),E=s("p",null,"接下来，我们看看二者的执行时间。",-1),T=s("p",null,"我们发现，在前几次执行中，大体积函数运行时间要大于小体积函数，也就是说在性能上会略慢几毫秒，而后续不断重复调用，在多次执行之后，云函数变成热启动状态，所以并没有下载部署代码这个步骤了，函数之间的差距也越来越小，几乎可以忽视。",-1),f=s("p",null,[s("strong",null,"由此我们可以得出结论"),a("：函数文件的大小，从一定程度上决定了云函数的执行速度。")],-1),I=s("p",null,"所以，在编写云函数过程中，你要尽量避免出现无意义的冗余代码，有代码注释也尽量将注释去掉，压缩函数体积。这个原理和浏览器加载 js 等资源文件的情况特别相似，都是通过减少文件体积来降低加载的时间从而提升性能。",-1),C=s("h3",{id:"削减不需要的-package",tabindex:"-1"},[a("削减不需要的 Package "),s("a",{class:"header-anchor",href:"#削减不需要的-package","aria-label":'Permalink to "削减不需要的 Package"'},"​")],-1),P=s("p",null,[a("除了缩减业务代码之外，通常为了业务代码编写而引入的各种 npm 包也是需要重点改进的对象。很多开发者都会使用 npm 包提升开发速度和开发便捷性。云开发云函数虽然也会针对 Node Modules 做一些缓存机制的优化，但依然存在下载时间差。"),s("strong",null,"我们来做一个实验"),a("：一个云函数中没有安装任何依赖，另外一个云函数安装了很多依赖，两者逻辑都一样，都是直接返回同一个字符串。")],-1),b=s("p",null,"实验结果如下：",-1),q=e("",15);function B(K,x,F,y,V,v){const i=l("Image");return _(),n("div",null,[c,t(i,{alt:"image (5).png",src:"https://s0.lgstatic.com/i/image2/M01/03/9C/CgpVE1_fibiAB8UAAABWcKo7iuc145.png"}),a(),h,r,t(i,{alt:"小程序15-金句.png",src:"https://s0.lgstatic.com/i/image/M00/8B/DE/CgqCHl_hcqyAFwF2AADslRrjIDQ601.png"}),a(),d,t(i,{alt:"image (6).png",src:"https://s0.lgstatic.com/i/image2/M01/03/9A/Cip5yF_ficGAfz0oAAB0418U21I249.png"}),a(),g,t(i,{alt:"image (7).png",src:"https://s0.lgstatic.com/i/image/M00/8B/B9/Ciqc1F_ficmANfYTAAGpbbH212I351.png"}),a(),u,k,m,S,A,E,t(i,{alt:"image (8).png",src:"https://s0.lgstatic.com/i/image/M00/8B/B9/Ciqc1F_fic-AMPjeAAG2W-NRJYg068.png"}),a(),T,f,I,C,P,b,t(i,{alt:"image (9).png",src:"https://s0.lgstatic.com/i/image/M00/8B/C4/CgqCHl_fieiAO7HuAAFCQJQSnqs650.png"}),a(),q])}const M=p(o,[["render",B]]);export{D as __pageData,M as default};
