import{_ as t,D as l,o as e,g as c,J as n,h as s,Q as p,m as o}from"./chunks/framework.f67d7268.js";const S=JSON.parse('{"title":"09真正理解虚拟DOM：React选它，真的是为了性能吗？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/046_深入浅出搞定 React/(4858) 09  真正理解虚拟 DOM：React 选它，真的是为了性能吗？.md","filePath":"posts/frontEnd/046_深入浅出搞定 React/(4858) 09  真正理解虚拟 DOM：React 选它，真的是为了性能吗？.md","lastUpdated":1696682708000}'),r={name:"posts/frontEnd/046_深入浅出搞定 React/(4858) 09  真正理解虚拟 DOM：React 选它，真的是为了性能吗？.md"},E=p("",8),i=p("",43),y=o("p",null,"而在虚拟 DOM 的加持下，事情变成了这样：",-1),D=o("p",null,'注意图中的"模板"二字加了引号，这是因为虚拟 DOM 在实现上并不总是借助模板。比如 React 就使用了 JSX，前面咱们着重讲过，JSX 本质不是模板，而是一种使用体验和模板相似的 JS 语法糖。',-1),M=o("p",null,[s('区别就在于多出了一层虚拟 DOM 作为缓冲层。这个缓冲层带来的利好是：当 DOM 操作（渲染更新）比较频繁时，它会先将前后两次的虚拟 DOM 树进行对比，定位出具体需要更新的部分，生成一个"补丁集"，最后只把"补丁"打在需要更新的那部分真实 DOM 上，实现精准的"'),o("strong",null,"差量更新"),s('"。这个过程对应的虚拟 DOM 工作流如下图所示：')],-1),u=p("",8),O=p("",11),d=p("",7);function q(g,_,h,m,b,A){const a=l("Image");return e(),c("div",null,[E,n(a,{alt:"Lark20201106-192037.png",src:"https://s0.lgstatic.com/i/image/M00/68/F3/Ciqc1F-lMbGAZJopAAJVEWRSZj4098.png"}),s(),i,n(a,{alt:"Lark20201106-192050.png",src:"https://s0.lgstatic.com/i/image/M00/68/F3/Ciqc1F-lMciARJRWAABf3Qw2zLE639.png"}),s(),y,n(a,{alt:"Lark20201106-192053.png",src:"https://s0.lgstatic.com/i/image/M00/68/FE/CgqCHl-lMdaAD-COAAB2DeSedec916.png"}),s(),D,M,n(a,{alt:"Lark20201106-192055.png",src:"https://s0.lgstatic.com/i/image/M00/68/FE/CgqCHl-lMeWADhSdAABuVFS6_bo480.png"}),s(),u,n(a,{alt:"Lark20201106-192058.png",src:"https://s0.lgstatic.com/i/image/M00/68/FE/CgqCHl-lMhKAbHiXAACFes1Uw30648.png"}),s(),n(a,{alt:"Lark20201106-192100.png",src:"https://s0.lgstatic.com/i/image/M00/68/FE/CgqCHl-lMheAZqbEAACP9ZvpCP8374.png"}),s(),O,n(a,{alt:"Lark20201109-110626.png",src:"https://s0.lgstatic.com/i/image/M00/69/AE/CgqCHl-otLSAT1ivAACwY9bVkZQ836.png"}),s(),d])}const F=t(r,[["render",q]]);export{S as __pageData,F as default};
