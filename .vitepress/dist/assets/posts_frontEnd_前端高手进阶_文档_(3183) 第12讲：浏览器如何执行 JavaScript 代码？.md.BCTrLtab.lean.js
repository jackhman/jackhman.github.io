import{_ as h,F as p,g as l,K as n,h as i,ar as t,l as s,o as k}from"./chunks/framework.VlluEs-f.js";const I=JSON.parse('{"title":"第12讲：浏览器如何执行JavaScript代码？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/前端高手进阶_文档/(3183) 第12讲：浏览器如何执行 JavaScript 代码？.md","filePath":"posts/frontEnd/前端高手进阶_文档/(3183) 第12讲：浏览器如何执行 JavaScript 代码？.md","lastUpdated":1718371218000}'),e={name:"posts/frontEnd/前端高手进阶_文档/(3183) 第12讲：浏览器如何执行 JavaScript 代码？.md"},r=t("",12),E=t("",10),d=t("",12),g=s("p",null,"示例效果图",-1),c=t("",4),o=t("",18),y=t("",5),F=s("p",null,"标记清除回收过程",-1),C=s("p",null,"由于标记清除不会对内存一分为二，所以不会浪费空间。但是进行过标记清除之后的内存空间会产生很多不连续的碎片空间，这种不连续的碎片空间中，在遇到较大对象时可能会由于空间不足而导致无法存储的情况。",-1),_=s("p",null,[i("为了解决内存碎片的问题，提高对内存的利用，还需要使用到"),s("strong",null,"标记整理（Mark-Compact）"),i(" 算法。标记整理算法相对于标记清除算法在回收阶段进行了改进，标记整理对待未标记的对象并不是立即进行回收，而是将存活的对象移动到一边，然后再清理。当然这种移动对象的操作相对而言是比较耗时的，所以执行速度上，比标记清除要慢。")],-1),u=s("p",null,"标记整理回收过程",-1),A=s("h3",{id:"总结",tabindex:"-1"},[i("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),b=s("p",null,"本课时的内容偏于底层和抽象，重点在于理解和记忆。",-1),B=s("p",null,"首先讲解了 JavaScript 引擎的执行过程，包括解析、解释和优化，这一部分可以结合加餐 1 中提到的编译器知识进行理解。",-1),v=s("p",null,'然后讲到了 JavaScript 引擎的内存分为栈和堆两个部分，栈可以保存函数调用信息以及局部变量，特点是"先进后出"以及"用完立即销毁"。堆区存储的数据对象通常比较大，需要采用一定的回收算法来处理，包括用于新生代的 Scanvage 算法，以及用于老生代的标记清除和标记整理算法。',-1),m=s("p",null,"最后布置一道思考题：你还了解过哪些内存回收算法，它们有什么优缺点？",-1);function D(f,S,T,q,x,P){const a=p("Image");return k(),l("div",null,[r,n(a,{alt:"1.png",src:"https://s0.lgstatic.com/i/image/M00/27/1E/Ciqc1F70ZQSAGf1cAAEehLtbbTk491.png"}),i(),E,n(a,{alt:"3.png",src:"https://s0.lgstatic.com/i/image/M00/27/29/CgqCHl70ZTqAR9m6AAEz8M57qjs116.png"}),i(),d,n(a,{alt:"image (31).png",src:"https://s0.lgstatic.com/i/image/M00/27/16/Ciqc1F70SjGAI_8JAAANLDVx3V0087.png"}),i(),g,n(a,{alt:"image (32).png",src:"https://s0.lgstatic.com/i/image/M00/27/16/Ciqc1F70SjmAfUtiAAAkCGWd2MI629.png"}),i(),c,n(a,{alt:"image (33).png",src:"https://s0.lgstatic.com/i/image/M00/27/16/Ciqc1F70Sk6ANM__AAAQ-wQno2Q416.png"}),i(),o,n(a,{alt:"1.png",src:"https://s0.lgstatic.com/i/image6/M00/25/15/Cgp9HWBZVYuADfmqAACqB-v2Dq0515.png"}),i(),y,n(a,{alt:"5.png",src:"https://s0.lgstatic.com/i/image/M00/27/1E/Ciqc1F70ZZWAeo71AABOQKZ828k489.png"}),i(),F,C,_,n(a,{alt:"6.png",src:"https://s0.lgstatic.com/i/image/M00/27/21/Ciqc1F70cS2AU5w_AABOiU6R39g235.png"}),i(),u,A,b,B,v,m])}const V=h(e,[["render",D]]);export{I as __pageData,V as default};
