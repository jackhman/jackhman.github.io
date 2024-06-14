import{_ as o,D as e,o as t,g as c,J as l,h as a,Q as p,m as s}from"./chunks/framework.f67d7268.js";const L=JSON.parse('{"title":"第03讲：大厂面试题：从覆盖JDK的类开始掌握类的加载机制","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1027) 第03讲：大厂面试题：从覆盖 JDK 的类开始掌握类的加载机制.md","filePath":"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1027) 第03讲：大厂面试题：从覆盖 JDK 的类开始掌握类的加载机制.md","lastUpdated":1696682708000}'),r={name:"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1027) 第03讲：大厂面试题：从覆盖 JDK 的类开始掌握类的加载机制.md"},E=p("",8),y=p("",38),i=p("",23),d=s("p",null,"我们可以翻阅 JDK 代码的 ClassLoader#loadClass 方法，来看一下具体的加载过程。和我们描述的一样，它首先使用 parent 尝试进行类加载，parent 失败后才轮到自己。同时，我们也注意到，这个方法是可以被覆盖的，也就是双亲委派机制并不一定生效。",-1),F=s("p",null,"这个模型的好处在于 Java 类有了一种优先级的层次划分关系。比如 Object 类，这个毫无疑问应该交给最上层的加载器进行加载，即使是你覆盖了它，最终也是由系统默认的加载器进行加载的。",-1),h=s("p",null,"如果没有双亲委派模型，就会出现很多个不同的 Object 类，应用程序会一片混乱。",-1),u=s("h3",{id:"一些自定义加载器",tabindex:"-1"},[a("一些自定义加载器 "),s("a",{class:"header-anchor",href:"#一些自定义加载器","aria-label":'Permalink to "一些自定义加载器"'},"​")],-1),v=s("p",null,"下面我们就来聊一聊可以打破双亲委派机制的一些案例。为了支持一些自定义加载类多功能的需求，Java 设计者其实已经作出了一些妥协。",-1),A=s("h4",{id:"案例一-tomcat",tabindex:"-1"},[a("案例一：tomcat "),s("a",{class:"header-anchor",href:"#案例一-tomcat","aria-label":'Permalink to "案例一：tomcat"'},"​")],-1),g=s("p",null,"tomcat 通过 war 包进行应用的发布，它其实是违反了双亲委派机制原则的。简单看一下 tomcat 类加载器的层次结构。",-1),C=p("",17),D=p("",25);function b(_,m,B,S,q,j){const n=e("Image");return t(),c("div",null,[E,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/61/3F/Cgq2xl4cQNeAO_j6AABZKdVbw1w802.png"}),a(),y,l(n,{alt:"Lark20200910-102602.jpeg",src:"https://s0.lgstatic.com/i/image/M00/4D/13/CgqCHl9ZjveAemjoAAB4J1dCVDo17.jpeg"}),a(),i,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/61/3F/Cgq2xl4cQNeAG0ECAAA_CbVCY1M014.png"}),a(),d,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/61/3E/CgpOIF4cQNeACEs8AACe317zgN8195.jpg"}),a(),F,h,u,v,A,g,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/61/3F/Cgq2xl4cQNeAZ4FuAABzsqSozok762.png"}),a(),C,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/61/3E/CgpOIF4cQNeARP3IAAA2VH9MXoY723.jpg"}),a(),D])}const J=o(r,[["render",b]]);export{L as __pageData,J as default};
