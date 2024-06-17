import{_ as n,F as p,g as e,K as t,h as i,l as s,ar as l,o as h}from"./chunks/framework.VlluEs-f.js";const T=JSON.parse('{"title":"13高级进阶：保证首次加载为秒开的离线包设计","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/前端性能优化方法与实战_文档/(6577) 13  高级进阶：保证首次加载为秒开的离线包设计.md","filePath":"posts/frontEnd/前端性能优化方法与实战_文档/(6577) 13  高级进阶：保证首次加载为秒开的离线包设计.md","lastUpdated":1718371218000}'),o={name:"posts/frontEnd/前端性能优化方法与实战_文档/(6577) 13  高级进阶：保证首次加载为秒开的离线包设计.md"},k=s("h1",{id:"_13高级进阶-保证首次加载为秒开的离线包设计",tabindex:"-1"},[i("13高级进阶：保证首次加载为秒开的离线包设计 "),s("a",{class:"header-anchor",href:"#_13高级进阶-保证首次加载为秒开的离线包设计","aria-label":'Permalink to "13高级进阶：保证首次加载为秒开的离线包设计"'},"​")],-1),d=s("p",null,"上一讲我整体介绍了 Hybrid 的性能优化整体分析，简单介绍了离线包、Webview、骨架屏、SSR 及接口预加载等优化方案，这一讲我就来专门介绍下其中的离线包。",-1),r=s("p",null,"离线包的作用我在上一讲已经提到过了，它可以最大程度地摆脱网络环境对 H5 页面的影响。有关利用它来保证页面秒开，我也是 2018 年才真正有过实践。",-1),c=s("p",null,"记得那是我们业务 App 2.0 升级的时侯，技术 VP 报了一个手机首页访问时间长的问题，我们详细定位性能平台后给出了一个回复是，弱网环境下导致白屏时间过长。因为之前常规的优化手段已经做了，但效果还是不明显，技术 VP 就问，如果是弱网的问题，为啥淘宝首页还可以打开？我们仔细验证了一下，发现原来淘宝使用了离线包。于是我们开始了离线包实现之路。",-1),g=s("p",null,"我们先看一下离线包的整体实现方案。",-1),_=l("",32),E=s("p",null,"前端工程师也就是图中的 FE，将前端工程打包，生成离线包的入口页面 index_sonic.html （支持离线包的index.html），然后通过前端的静态资源发布系统（我们公司使用的是 beetle，类似jerkens 上线，增加了 web 界面）上线到 CDN。",-1),u=s("p",null,"接下来，FE 将静态资源（如 index.js、home.css、banner.jpg）打包成全量离线包到 CDN，然后同步增加离线管理后台的配置，离线管理后台会根据基础包生成差分包上传到 CDN。",-1),y=s("p",null,"这就是整体的部署流程。如果离线包功能异常（如出现无法访问），该怎么快速解决？",-1),F=s("p",null,"我建议一定要做好离线包的开关功能。在出现问题时，通过在离线包后台操作，及时关掉离线包功能，就可以及时确保用户功能恢复正常。",-1),b=s("p",null,"比如，我们在某一次详情页升级项目中，发现用户客户端在下载离线包时出现网络问题，导致无法解压，进而页面内容无法展示，当时我们的做法就是立即关闭离线包功能，保证了用户正常访问。",-1),f=s("h3",{id:"小结",tabindex:"-1"},[i("小结 "),s("a",{class:"header-anchor",href:"#小结","aria-label":'Permalink to "小结"'},"​")],-1),m=s("p",null,"好了，以上就是离线包的实现方案，这里面有两个注意事项。",-1),A=s("p",null,"第一，在 iOS 系统，我们经常会用到 WKWebView ，此时如果要实现离线包，必须解决 WKWebView 下面的请求拦截难题，这时可以借助私有 API 方案来实现。",-1),D=s("p",null,"第二，问题的诊断定位流程和原来不一样了。平常的定位问题只需要抓包，查看 source 即可，而在离线包的问题诊断，需要我们先抓包getofflineconfig 接口，找到对应的 bid，然后根据 bid 找到正确的配置项，点击配置项进入详情下载离线包，最后解压离线包确认代码是否正确。",-1),C=s("p",null,"下面为你留一个思考题：",-1),q=s("blockquote",null,[s("p",null,"使用离线包功能的页面，前端工程师上线操作过程中遇到问题时如何回滚?")],-1),v=s("p",null,"欢迎在评论区和我交流，下一讲我讲介绍瞒天过海的骨架屏及 SSR 优化手段。",-1);function B(x,j,S,P,w,N){const a=p("Image");return h(),e("div",null,[k,d,r,c,g,t(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M01/2D/9E/Cgp9HWBmyBiAV-yrAAF0q2SMdCc055.png"}),i(),_,t(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image6/M01/2D/A7/CioPOWBmyDKAGruqAADLBwkfFi8988.png"}),i(),E,u,y,F,b,f,t(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image6/M01/2D/A7/CioPOWBmyEaAKTtaAAK-S84bC4c735.png"}),i(),m,A,D,C,q,v])}const K=n(o,[["render",B]]);export{T as __pageData,K as default};
