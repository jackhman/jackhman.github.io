import{_ as o,D as r,o as n,g as s,J as t,h as i,Q as a,m as e}from"./chunks/framework.f67d7268.js";const T=JSON.parse('{"title":"12理论分析：Hybrid下的性能优化整体分析","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/前端性能优化方法与实战_文档/(6576) 12  理论分析：Hybrid 下的性能优化整体分析.md","filePath":"posts/frontEnd/前端性能优化方法与实战_文档/(6576) 12  理论分析：Hybrid 下的性能优化整体分析.md","lastUpdated":1696682708000}'),_={name:"posts/frontEnd/前端性能优化方法与实战_文档/(6576) 12  理论分析：Hybrid 下的性能优化整体分析.md"},l=a("",27),d=a("",9),b=e("p",null,"好了，我们以 App H5 的加载流程，介绍了 Hybrid 下的整体优化方案。除了以上所讲的，在实际过程中还有不少注意事项。",-1),c=e("ol",null,[e("li",null,[e("p",null,"离线包命中率的统计，因为离线包即便不命中也不影响页面效果，所以出现问题很难发现，为此，在业务上线的日常运行中要对命中率进行统计。")]),e("li",null,[e("p",null,"WebView 的优化，全局 WebView Pool 时一定要注意及时销毁，不然对 App 资源的占用会比较大。")]),e("li",null,[e("p",null,"很多公司在预加载数据的基础上发展出了预渲染，但在实施过程中我们发现，它对 App 内存占用过大。")])],-1),h=e("p",null,"最后给你留一个问题：",-1),S=e("blockquote",null,[e("p",null,"Hybrid下的优化方案，有哪些是你们在用的呢？")],-1),A=e("p",null,"欢迎大家在评论区和我沟通，接下来我们将进入具体优化方案------保证首次加载为秒开的离线包设计。",-1);function m(u,H,g,V,C,W){const p=r("Image");return n(),s("div",null,[l,t(p,{alt:"图片1.png",src:"https://s0.lgstatic.com/i/image6/M00/2A/C1/CioPOWBi4-iAW-kJAApGu5-f_qE181.png"}),i(),d,t(p,{alt:"溪风的思维导图12.png",src:"https://s0.lgstatic.com/i/image6/M00/2A/C1/CioPOWBi49yAQ9eCAAC96suKir8474.png"}),i(),b,c,h,S,A])}const y=o(_,[["render",m]]);export{T as __pageData,y as default};
