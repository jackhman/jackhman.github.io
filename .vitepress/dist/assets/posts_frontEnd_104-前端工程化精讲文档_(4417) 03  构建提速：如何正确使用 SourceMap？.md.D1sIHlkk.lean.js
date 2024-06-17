import{_ as n,F as p,g as t,K as e,h as i,l as s,ar as l,o as h}from"./chunks/framework.VlluEs-f.js";const B=JSON.parse('{"title":"03构建提速：如何正确使用SourceMap？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/104-前端工程化精讲文档/(4417) 03  构建提速：如何正确使用 SourceMap？.md","filePath":"posts/frontEnd/104-前端工程化精讲文档/(4417) 03  构建提速：如何正确使用 SourceMap？.md","lastUpdated":1718371218000}'),o={name:"posts/frontEnd/104-前端工程化精讲文档/(4417) 03  构建提速：如何正确使用 SourceMap？.md"},k=s("h1",{id:"_03构建提速-如何正确使用sourcemap",tabindex:"-1"},[i("03构建提速：如何正确使用SourceMap？ "),s("a",{class:"header-anchor",href:"#_03构建提速-如何正确使用sourcemap","aria-label":'Permalink to "03构建提速：如何正确使用SourceMap？"'},"​")],-1),r=s("p",null,"在上一课时中我们聊了开发时的热更新机制和其中的技术细节，热更新能帮助我们在开发时快速预览代码效果，免去了手动执行编译和刷新浏览器的操作。课后留的思考题是找一个实现了 HMR 的 Loader，查看其中用到哪些热替换的 API，希望通过这个题目能让你加深对相关知识点的印象。",-1),c=s("p",null,[i("那么除了热更新以外，项目的开发环境还有哪些在影响着我们的开发效率呢？在过去的工作中，公司同事就曾问过我一个问题：为什么我的项目在开发环境下每次构建还是很卡？每次保存完代码都要过 1~2 秒才能看到效果，这是怎么回事呢？其实这里面的原因主要是这位同事在开发时选择的 Source Map 设定不对。今天我们就来具体讨论下这个问题。首先，什么是 "),s("strong",null,"Source Map"),i(" 呢？")],-1),d=s("h3",{id:"什么是-source-map",tabindex:"-1"},[i("什么是 Source Map "),s("a",{class:"header-anchor",href:"#什么是-source-map","aria-label":'Permalink to "什么是 Source Map"'},"​")],-1),E=s("p",null,"在前端开发过程中，通常我们编写的源代码会经过多重处理（编译、封装、压缩等），最后形成产物代码。于是在浏览器中调试产物代码时，我们往往会发现代码变得面目全非，例如：",-1),u=l("",17),g=l("",6),m=s("ul",null,[s("li",null,"源码不包含列信息")],-1),y=s("ul",null,[s("li",null,"Loader转换后代码")],-1),F=s("ul",null,[s("li",null,"生成后的产物代码")],-1),v=l("",10),_=l("",5);function b(C,f,D,q,A,M){const a=p("Image");return h(),t("div",null,[k,r,c,d,E,e(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/42/93/Ciqc1F85_FmAA4UeAABWNiHqsWQ595.png"}),i(),u,e(a,{alt:"12.png",src:"https://s0.lgstatic.com/i/image/M00/43/5E/Ciqc1F87kyiAZvHdAAIGvohk2F4144.png"}),i(),g,e(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/42/9E/CgqCHl85_KuANSVfAADSE8VO7Qg572.png"}),i(),m,e(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/42/93/Ciqc1F85_LCAMTlgAADhqpZ4v9o628.png"}),i(),y,e(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/42/9E/CgqCHl85_LqAPrYzAADfmUwS_JE006.png"}),i(),F,e(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/42/9E/CgqCHl85_MGAHhmMAAKGwvDeXIM418.png"}),i(),v,e(a,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/42/9E/CgqCHl85_N2AUkcpAAEqvMKhgVQ549.png"}),i(),_])}const T=n(o,[["render",b]]);export{B as __pageData,T as default};
