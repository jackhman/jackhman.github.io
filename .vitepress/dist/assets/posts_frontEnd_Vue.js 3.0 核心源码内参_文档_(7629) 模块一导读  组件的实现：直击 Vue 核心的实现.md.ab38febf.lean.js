import{_ as a,D as o,o as n,g as c,J as _,h as t,m as e}from"./chunks/framework.f67d7268.js";const x=JSON.parse('{"title":"模块一导读组件的实现：直击Vue核心的实现","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/Vue.js 3.0 核心源码内参_文档/(7629) 模块一导读  组件的实现：直击 Vue 核心的实现.md","filePath":"posts/frontEnd/Vue.js 3.0 核心源码内参_文档/(7629) 模块一导读  组件的实现：直击 Vue 核心的实现.md","lastUpdated":1696682708000}'),r={name:"posts/frontEnd/Vue.js 3.0 核心源码内参_文档/(7629) 模块一导读  组件的实现：直击 Vue 核心的实现.md"},l=e("h1",{id:"模块一导读组件的实现-直击vue核心的实现",tabindex:"-1"},[t("模块一导读组件的实现：直击Vue核心的实现 "),e("a",{class:"header-anchor",href:"#模块一导读组件的实现-直击vue核心的实现","aria-label":'Permalink to "模块一导读组件的实现：直击Vue核心的实现"'},"​")],-1),p=e("p",null,"相信作为一个 Vue.js 的开发者，最熟悉的应该就是组件了，我们开发 Vue.js 的项目，大部分时间都是在写组件，组件系统是 Vue.js 的一个重要概念，它是一种对 DOM 结构的抽象，我们可以使用小型、独立和通常可复用的组件构建大型应用。仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树，如下：",-1),u=e("p",null,"组件化也是 Vue.js 的核心思想之一，它允许我们用模板加对象描述的方式去创建一个组件，再加上我们给组件注入不同的数据，就可以完整地渲染出组件：",-1),d=e("p",null,"当数据更新后，组件可以自动重新渲染，因此用户只需要专注于数据逻辑的处理，而无须关心 DOM 的操作，无论是开发体验和开发效率都得到了很大的提升。",-1),i=e("p",null,"短短几行代码，就可以构建庞大的组件结构，这一切都是 Vue.js 框架的功劳。那它究竟是怎么做到的呢，这一部分我就带你去探究组件内部实现的奥秘，看看它是如何渲染到 DOM 上并且在数据变化后又是如何重新渲染的。",-1);function m(V,h,g,f,j,C){const s=o("Image");return n(),c("div",null,[l,p,_(s,{alt:"components.png",src:"https://s0.lgstatic.com/i/image/M00/2D/00/CgqCHl8CumKAR7ayAABTdicCgXc349.png"}),t(),u,_(s,{alt:"5.png",src:"https://s0.lgstatic.com/i/image/M00/2D/00/CgqCHl8CulaAe5o1AABk5y8xUSI791.png"}),t(),d,i])}const A=a(r,[["render",m]]);export{x as __pageData,A as default};
