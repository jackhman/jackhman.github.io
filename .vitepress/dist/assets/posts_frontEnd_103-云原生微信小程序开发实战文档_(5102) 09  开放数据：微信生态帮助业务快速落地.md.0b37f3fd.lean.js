import{_ as n,D as c,o as p,g as _,J as s,h as t,Q as a,m as e}from"./chunks/framework.f67d7268.js";const w=JSON.parse('{"title":"09开放数据：微信生态帮助业务快速落地","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/103-云原生微信小程序开发实战文档/(5102) 09  开放数据：微信生态帮助业务快速落地.md","filePath":"posts/frontEnd/103-云原生微信小程序开发实战文档/(5102) 09  开放数据：微信生态帮助业务快速落地.md","lastUpdated":1696682708000}'),r={name:"posts/frontEnd/103-云原生微信小程序开发实战文档/(5102) 09  开放数据：微信生态帮助业务快速落地.md"},i=a("",17),l=a("",4),d=e("p",null,"这样就能够在 access_token 的有效期内复用，避免了每次调用微信开放接口都需要获取一次，缩短了请求的链路，解决了上面三个问题。",-1),h=e("p",null,"以上就是微信开放接口的传统调用方式，是不是有些麻烦？最起码要一台服务器以及必要的缓存管理逻辑，这对前端开发的你来说不是一件很容易的事儿。所以接下来，我就带你学习另外一种更效率的调用方式：免鉴权的云调用。",-1),g=e("h3",{id:"免鉴权的云调用方式",tabindex:"-1"},[t("免鉴权的云调用方式 "),e("a",{class:"header-anchor",href:"#免鉴权的云调用方式","aria-label":'Permalink to "免鉴权的云调用方式"'},"​")],-1),u=e("p",null,"在传统调用方式流程中，获取 access_token 的行为相当于得到微信的授权，然后才能使用这个 access_token。也就是授权凭证然后调用开放接口，这是一个典型的鉴权流程。",-1),k=e("p",null,"你也看到了，在这个流程中你要做的事情很多，而使用云调用你不需要关注鉴权的问题，不用开发者服务器以及维护 access_token 缓存。整个流程简化成了下面这张图：",-1),m=e("p",null,[t('从图中，我们发现了"云函数"这个词，'),e("strong",null,"那云调用和云函数到底是什么呢？")],-1),A=e("p",null,[e("strong",null,"用一句话概括云调用："),t(" 云调用是云开发提供的，基于云函数免鉴权调用小程序开放接口的能力。")],-1),q=e("p",null,"我会带你在模块四系统地学习云开发的知识，你可以暂时把云开发简单地将理解为一系列云端的服务，其中包括一些原子能力，比如云函数、云存储、云数据库，也包括一些与微信生态整合的能力，比如云调用。",-1),f=e("p",null,[e("strong",null,"你可以看到，云函数是云开发的原子能力之一，是运行在云端的一段服务器代码。"),t(" 它可以充当传统调用方式中，开发者服务器的角色。云函数的代码可以直接在微信IDE中编写，代码写完之后，使用微信 IDE 将云函数部署到云端，然后在小程序端侧调用这个函数，这就是小程序使用云函数的基本流程。")],-1),T=e("p",null,"我要强调的是，虽然云函数可以充当开发者服务器的角色，但是它的能力不只是一个普通的服务，而是能免鉴权调用微信的开放接口，请看下面这张图：",-1),C=a("",9);function b(S,I,P,x,D,V){const o=c("Image");return p(),_("div",null,[i,s(o,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/71/10/Ciqc1F-86tSAdW1nAABQ11fRork280.png"}),t(),l,s(o,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/71/1C/CgqCHl-86uGAVPLKAACC7hhOFL8438.png"}),t(),d,h,g,u,k,s(o,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/71/10/Ciqc1F-86uiAY4kxAAAf7K9QlVo322.png"}),t(),m,A,s(o,{alt:"9.png",src:"https://s0.lgstatic.com/i/image/M00/80/29/Ciqc1F_QgmKAc3gJAAB5cidAM5U409.png"}),t(),q,f,T,s(o,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/71/1C/CgqCHl-860SAQIS_AABAYsgou5Q665.png"}),t(),C])}const E=n(r,[["render",b]]);export{w as __pageData,E as default};
