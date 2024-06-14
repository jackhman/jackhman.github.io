import{_ as o,D as e,o as c,g as t,J as l,h as a,Q as p,m as s}from"./chunks/framework.f67d7268.js";const M=JSON.parse('{"title":"第03讲：如何通过Loader实现特殊资源加载？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/102-Webpack原理与实践文档/(2263) 第03讲：如何通过 Loader 实现特殊资源加载？.md","filePath":"posts/frontEnd/102-Webpack原理与实践文档/(2263) 第03讲：如何通过 Loader 实现特殊资源加载？.md","lastUpdated":1696682708000}'),r={name:"posts/frontEnd/102-Webpack原理与实践文档/(2263) 第03讲：如何通过 Loader 实现特殊资源加载？.md"},E=p("",15),y=p("",4),i=s("blockquote",null,[s("p",null,"注意：这里在 CSS 中编写 JS 代码只是为了证实我们的观点，并不是真的要这样使用。")],-1),d=s("p",null,"我们再次回到前面提到的错误描述中，如下所示：",-1),g=s("p",null,[a("这里有一个非常重要的提示："),s("em",null,"You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. （我们需要用适当的加载器来处理这种文件类型，而当前并没有配置一个可以用来处理此文件的加载器）。")],-1),u=s("p",null,"根据这个错误说明，我们发现 Webpack 是用 Loader（加载器）来处理每个模块的，而内部默认的 Loader 只能处理 JS 模块，如果需要加载其他类型的模块就需要配置不同的 Loader。这也就引出了我们今天的主角：Loader。",-1),F=p("",7),h=s("h4",{id:"样式模块加载的问题",tabindex:"-1"},[a("样式模块加载的问题 "),s("a",{class:"header-anchor",href:"#样式模块加载的问题","aria-label":'Permalink to "样式模块加载的问题"'},"​")],-1),m=s("p",null,"此时，如果你尝试在页面中使用这里输出的 bundle.js 文件，你会发现刚刚的这个 main.css 模块并没有工作。",-1),k=s("p",null,"如果你之前有些经验，可能知道这个问题的解法，其实很简单，只需要再额外添加一个 style-loader，样式就可以正常工作了。",-1),b=s("p",null,"不过只有解法没有原因不是我们的风格。下面我们来分析产生这个问题的真正原因，首先，我们找到刚刚生成的 bundle.js 文件，因为这个文件是 Webpack 打包后的结果，所有的模块都应该在这个文件中出现。",-1),C=s("p",null,"由于默认打包入口在 Webpack 输出的结果中就是第一个模块，所以我们只需要看第一个模块目前是什么样的，如下图所示：",-1),A=p("",11),_=p("",14),D=p("",11),v=s("p",null,"打包过程中命令行确实打印出来了我们所导入的 Markdown 文件内容，这就意味着 Loader 函数的参数确实是文件的内容。",-1),f=s("p",null,[a("但同时也报出了一个解析错误，说的是： "),s("em",null,"You may need an additional loader to handle the result of these loaders.（我们可能还需要一个额外的加载器来处理当前加载器的结果）。")],-1),S=s("p",null,"那这究竟是为什么呢？其实 Webpack 加载资源文件的过程类似于一个工作管道，你可以在这个过程中依次使用多个 Loader，但是最终这个管道结束过后的结果必须是一段标准的 JS 代码字符串。",-1),j=p("",5),B=p("",21);function w(T,L,x,J,W,q){const n=e("Image");return c(),t("div",null,[E,l(n,{alt:"w1.png",src:"https://s0.lgstatic.com/i/image3/M01/13/A7/Ciqah16f_9iAeIxHAAEyykeZNFk556.png"}),a(),y,l(n,{alt:"w2.png",src:"https://s0.lgstatic.com/i/image3/M01/13/A8/Ciqah16gAIuASNDtAACtn0stBcY488.png"}),a(),i,d,l(n,{alt:"w3.png",src:"https://s0.lgstatic.com/i/image3/M01/13/A7/Ciqah16gAHWAYR9SAAEyykeZNFk323.png"}),a(),g,u,l(n,{alt:"w5.png",src:"https://s0.lgstatic.com/i/image3/M01/13/A8/Ciqah16gAM2AVBOyAACbAmBWOWM473.png"}),a(),F,l(n,{alt:"w6.png",src:"https://s0.lgstatic.com/i/image3/M01/06/79/CgoCgV6gAQyAVv7XAAAyFU_9fDQ769.png"}),a(),h,m,k,b,C,l(n,{alt:"w7.png",src:"https://s0.lgstatic.com/i/image3/M01/06/79/CgoCgV6gARSAXyX_AAFkFP2Qek8997.png"}),a(),A,l(n,{alt:"w8.png",src:"https://s0.lgstatic.com/i/image3/M01/06/7A/CgoCgV6gAY2AMxjdAACTY2OYqEw950.png"}),a(),_,l(n,{alt:"w9.png",src:"https://s0.lgstatic.com/i/image3/M01/06/7C/CgoCgV6gAraALmckAAAtBxIjIX0476.png"}),a(),D,l(n,{alt:"w10.png",src:"https://s0.lgstatic.com/i/image3/M01/13/AC/Ciqah16gA5-AYUL-AAFjrdy2lKQ113.png"}),a(),v,f,S,l(n,{alt:"w11.png",src:"https://s0.lgstatic.com/i/image3/M01/06/7D/CgoCgV6gA8SAfv7-AAA9hfxlofw372.png"}),a(),j,l(n,{alt:"w12.png",src:"https://s0.lgstatic.com/i/image3/M01/06/7E/CgoCgV6gA_mAVyS1AADwR_o4vW0140.png"}),a(),B])}const V=o(r,[["render",w]]);export{M as __pageData,V as default};
