import{_ as p,F as h,g as l,K as a,h as s,ar as t,l as n,o as k}from"./chunks/framework.VlluEs-f.js";const Q=JSON.parse('{"title":"01栈：从简单栈到单调栈，解决经典栈问题","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/数据结构与算法面试宝典_文档/(6690) 01  栈：从简单栈到单调栈，解决经典栈问题.md","filePath":"posts/backEnd/数据结构与算法面试宝典_文档/(6690) 01  栈：从简单栈到单调栈，解决经典栈问题.md","lastUpdated":1718371218000}'),e={name:"posts/backEnd/数据结构与算法面试宝典_文档/(6690) 01  栈：从简单栈到单调栈，解决经典栈问题.md"},r=t("",10),E=n("p",null,[s('那么如何深度利用栈的"'),n("strong",null,"先进后出"),s('"特点来解决实际工作和面试中的问题呢？是否可以总结出什么有用的知识技巧？现在你的大脑里可能已经有了一个栈的"萌芽"，如下图所示：')],-1),g=t("",14),d=t("",13),o=t("",9),y=t("",5),A=t("",9),c=t("",9),F=t("",5),_=t("",11),D=t("",13),u=t("",4),C=n("p",null,[s("降序排列的栈称为"),n("strong",null,"递减栈"),s("，如下图所示：")],-1),b=n("p",null,[n("em",null,"注意：示意图所展示的这两种栈是横向排列的。栈中元素的值，分别用不同高度的矩形来表示，值越大，矩形越高。")],-1),m=n("p",null,[s('接下来我们介绍一下递增栈的有序性，一句话："'),n("strong",null,"任何时候都需要保证栈的有序性"),s('"。')],-1),B=n("p",null,"递增栈的特性可以演示如下（上方数组是要依次入栈的元素）：",-1),f=n("p",null,"递减栈的特性可以演示如下：",-1),S=n("p",null,"通过这两个动图，我们可以总结出单调栈的特点，如下图所示：",-1),T=t("",10),v=t("",9),q=t("",21),P=t("",10),x=t("",8),I=t("",4),N=n("p",null,[n("strong",null,"解决办法"),s("：只需要把栈中的多出来的数字弹出来即可。")],-1),V=n("p",null,[s("【"),n("strong",null,"画图"),s("】假定输入为[9, 2, 4, 5, 1, 2, 3, 0], k = 3.输出能构成的最小的序列。")],-1),j=t("",21),M=n("p",null,[s('除了带你学习知识本身，我还介绍了题目的变形和演进，希望能够帮助你建立深度分析的能力。在学习算法与数据结构的过程中，作为"刷题过来人"，我非常建议你加强总结和归纳 ，建立自己的'),n("strong",null,"学习方法论"),s("。")],-1),W=n("p",null,"虽然栈很有趣，不过我们的介绍就要到这里了，我对于栈的总结和归纳只是个开头，期待你还能发现更多栈的特点和巧妙用法，并且将它们总结下来。也欢迎在评论区和我交流，期待看到你的奇思妙想。",-1),O=n("h3",{id:"思考题",tabindex:"-1"},[s("思考题 "),n("a",{class:"header-anchor",href:"#思考题","aria-label":'Permalink to "思考题"'},"​")],-1),R=n("p",null,[s("我再给你留一道"),n("strong",null,"思考题"),s(" ：给定一个数组，数组中的元素代表木板的高度。请你求出"),n("strong",null,"相邻木板"),s("能剪出的最大矩形面积。")],-1),w=t("",3);function H(z,J,Y,U,G,L){const i=h("Image");return k(),l("div",null,[r,a(i,{alt:"1.gif",src:"https://s0.lgstatic.com/i/image6/M00/0B/63/Cgp9HWA4jJaAMKH7ADCb3Og8L1Q358.gif"}),s(),E,a(i,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image6/M00/0B/64/Cgp9HWA4jLCAYaYWAAAXKWOZhe8052.png"}),s(),g,a(i,{alt:"2.gif",src:"https://s0.lgstatic.com/i/image6/M00/0B/61/CioPOWA4jh2AHCJwACmFB7AcuZA768.gif"}),s(),d,a(i,{alt:"3.gif",src:"https://s0.lgstatic.com/i/image6/M01/0B/68/Cgp9HWA4kDOANTojAGASkY8p8QQ593.gif"}),s(),o,a(i,{alt:"4.gif",src:"https://s0.lgstatic.com/i/image6/M00/0B/65/CioPOWA4kG2AWiD2AAJ2CaCcwJY807.gif"}),s(),y,a(i,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image6/M00/0B/77/Cgp9HWA4ny2ASkpXAABGeRYQOyU298.png"}),s(),A,a(i,{alt:"Drawing 12.png",src:"https://s0.lgstatic.com/i/image6/M00/0B/74/CioPOWA4nzyAJYfYAABDA_sAa3Q037.png"}),s(),c,a(i,{alt:"Stack01.大鱼吃小鱼.gif",src:"https://s0.lgstatic.com/i/image6/M00/0B/74/CioPOWA4n3uAM9nhAACmI5boRa0503.gif"}),s(),F,a(i,{alt:"5.gif",src:"https://s0.lgstatic.com/i/image6/M01/0B/74/CioPOWA4n5yAIhjtAAXAzjrqmCE807.gif"}),s(),_,a(i,{alt:"7.gif",src:"https://s0.lgstatic.com/i/image6/M01/0B/74/CioPOWA4n7eAEu-UAAY8UjR-F74828.gif"}),s(),D,a(i,{alt:"Drawing 19.png",src:"https://s0.lgstatic.com/i/image6/M01/0B/77/Cgp9HWA4n9WAA59XAACgLfhWcGY098.png"}),s(),u,a(i,{alt:"8.gif",src:"https://s0.lgstatic.com/i/image6/M01/0B/7B/CioPOWA4qWKAWwxXAAClLMMoPFk436.gif"}),s(),C,a(i,{alt:"9.gif",src:"https://s0.lgstatic.com/i/image6/M01/0B/7F/Cgp9HWA4qXCAM4-PAADnGTexjMk160.gif"}),s(),b,m,B,a(i,{alt:"13.gif",src:"https://s0.lgstatic.com/i/image6/M00/0B/7B/CioPOWA4qXmAUt2VAANQuRNAR14194.gif"}),s(),f,a(i,{alt:"14.gif",src:"https://s0.lgstatic.com/i/image6/M00/0B/7B/CioPOWA4qYCABi8aAAUfrNnOGUY452.gif"}),s(),S,a(i,{alt:"Drawing 29.png",src:"https://s0.lgstatic.com/i/image6/M01/0B/7C/CioPOWA4qiiAEfpbAABn_-GStTI565.png"}),s(),T,a(i,{alt:"15.gif",src:"https://s0.lgstatic.com/i/image6/M00/0B/7F/Cgp9HWA4qYqASCuDAArtP3-ZB0A448.gif"}),s(),v,a(i,{alt:"16.gif",src:"https://s0.lgstatic.com/i/image6/M00/0B/7F/Cgp9HWA4qkaALlpRAHsvPijzTIg101.gif"}),s(),q,a(i,{alt:"Drawing 45.png",src:"https://s0.lgstatic.com/i/image6/M01/0B/7F/Cgp9HWA4qrWAR4cuAADTLTA3i8c099.png"}),s(),P,a(i,{alt:"12.gif",src:"https://s0.lgstatic.com/i/image6/M01/0B/80/Cgp9HWA4qsyASrO1AAMU43HNuI4415.gif"}),s(),x,a(i,{alt:"10.gif",src:"https://s0.lgstatic.com/i/image6/M01/0B/80/Cgp9HWA4quuAMBDzAALrKCGW33s184.gif"}),s(),I,a(i,{alt:"11.gif",src:"https://s0.lgstatic.com/i/image6/M00/0B/80/Cgp9HWA4qxqAFbVgAAH8B7oHgJo512.gif"}),s(),N,V,a(i,{alt:"17.gif",src:"https://s0.lgstatic.com/i/image6/M01/0B/81/Cgp9HWA4qzaAHEjwAGccHgMTVOU699.gif"}),s(),j,a(i,{alt:"Drawing 65.png",src:"https://s0.lgstatic.com/i/image6/M01/0B/7F/CioPOWA4q6qASB-UAADhj7uzOwg933.png"}),s(),M,W,O,R,a(i,{alt:"尾图.png",src:"https://s0.lgstatic.com/i/image6/M00/0B/83/Cgp9HWA4q--AZmcbAABdc5tNqDI318.png"}),s(),w])}const K=p(e,[["render",H]]);export{Q as __pageData,K as default};
