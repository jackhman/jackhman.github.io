import{_ as k,F as l,g as p,K as n,h as i,ar as h,l as s,o as t}from"./chunks/framework.VlluEs-f.js";const N=JSON.parse('{"title":"02代码基本功测试（下）：如何实现一个深浅拷贝？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/JavaScript 核心原理精讲_文档/(6175) 02  代码基本功测试（下）：如何实现一个深浅拷贝？.md","filePath":"posts/frontEnd/JavaScript 核心原理精讲_文档/(6175) 02  代码基本功测试（下）：如何实现一个深浅拷贝？.md","lastUpdated":1718371218000}'),e={name:"posts/frontEnd/JavaScript 核心原理精讲_文档/(6175) 02  代码基本功测试（下）：如何实现一个深浅拷贝？.md"},E=h("",25),r=h("",37),g=h("",17),d=s("p",null,"从这张截图的结果可以看出，改进版的 deepClone 函数已经对基础版的那几个问题进行了改进，也验证了我上面提到的那四点理论。",-1),y=s("p",null,"那么到这里，深拷贝的相关内容就介绍得差不多了。",-1),o=s("h3",{id:"总结",tabindex:"-1"},[i("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),F=s("p",null,"这一讲，我们探讨了如何实现一个深浅拷贝。在日常的开发中，由于开发者可以使用一些现成的库来实现深拷贝，所以很多人对如何实现深拷贝的细节问题并不清楚。但是如果仔细研究你就会发现，这部分内容对于你深入了解 JS 底层的原理有很大帮助。如果未来你需要自己实现一个前端相关的工具或者库，对 JS 理解的深度会决定你能把这个东西做得有多好。",-1),c=s("p",null,"其实到最后我们可以看到，自己完整实现一个深拷贝，还是考察了不少的知识点和编程能力，总结下来大致分为这几点，请看下图。",-1),C=s("p",null,"可以看到通过这一个问题能考察的能力有很多，因此千万不要用最低的标准来要求自己，应该用类似的方法去分析每个问题深入考察的究竟是什么，这样才能更好地去全面提升自己的基本功。",-1),b=s("p",null,"关于深浅拷贝如果你有不清楚的地方，欢迎在评论区留言，最好的建议还是要多动手，不清楚的地方自己敲一遍代码，这样才能加深印象，然后更容易地去消化这部分内容。",-1),A=s("p",null,"下一讲，我们将迎来继承方式的学习，这部分知识也是非常重要的，你需要熟练掌握并理解其原理。也欢迎你提前预习相关知识，这样才能在不同的角度有所收获。下一讲再见。",-1),D=s("hr",null,null,-1),B=s("p",null,"[",-1),u=s("p",null,[i("]("),s("a",{href:"https://shenceyun.lagou.com/t/mka",target:"_blank",rel:"noreferrer"},"https://shenceyun.lagou.com/t/mka"),i(")")],-1),j=s("p",null,[i("对标阿里P7技术需求 + 每月大厂内推，6 个月助你斩获名企高薪 Offer。"),s("a",{href:"https://shenceyun.lagou.com/t/mka",target:"_blank",rel:"noreferrer"},"点此链接，快来领取！")],-1);function _(v,m,f,O,S,q){const a=l("Image");return t(),p("div",null,[E,n(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image2/M01/04/DD/CgpVE1_23KWABxpDAAC0XN0mEv4915.png"}),i(),r,n(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/8D/03/CgqCHl_23LaAXa7jAAFYsb1e_kA876.png"}),i(),g,n(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/8D/03/CgqCHl_23NqAajeeAAIH4UWV0LE467.png"}),i(),d,y,o,F,c,n(a,{alt:"图片4.png",src:"https://s0.lgstatic.com/i/image2/M01/05/11/Cip5yF_7s86AOlltAAEet-x_UAc883.png"}),i(),C,b,A,D,B,n(a,{alt:"大前端引流.png",src:"https://s0.lgstatic.com/i/image2/M01/00/66/CgpVE1_W_x2AaW0rAAdqMM6w3z0145.png"}),i(),u,j])}const J=k(e,[["render",_]]);export{N as __pageData,J as default};
