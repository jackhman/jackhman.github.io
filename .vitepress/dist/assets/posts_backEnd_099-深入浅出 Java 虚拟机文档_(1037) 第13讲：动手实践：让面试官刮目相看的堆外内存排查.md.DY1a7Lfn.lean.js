import{_ as l,F as e,g as t,K as n,h as i,ar as p,l as s,o as E}from"./chunks/framework.VlluEs-f.js";const K=JSON.parse('{"title":"第13讲：动手实践：让面试官刮目相看的堆外内存排查","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1037) 第13讲：动手实践：让面试官刮目相看的堆外内存排查.md","filePath":"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1037) 第13讲：动手实践：让面试官刮目相看的堆外内存排查.md","lastUpdated":1718371218000}'),h={name:"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1037) 第13讲：动手实践：让面试官刮目相看的堆外内存排查.md"},r=p("",26),k=p("",33),c=p("",25),d=p("",29),o=s("br",null,null,-1),g=s("p",null,"如图，一般第三方 JNI 程序，或者 JDK 内的模块，都会调用相应的本地函数，在 Linux 上，这些函数库的后缀都是 so。",-1),y=s("br",null,null,-1),m=s("p",null,'我们依次浏览用的可疑资源，发现了"libzip.so"，还发现了不少相关的调用。搜索 zip（输入 / 进入搜索模式），结果如下：',-1),u=s("br",null,null,-1),b=s("br",null,null,-1),_=s("p",null,"查看 JDK 代码，发现 bzip 大量使用了 native 方法。也就是说，有大量内存的申请和销毁，是在堆外发生的。",-1),v=s("br",null,null,-1),f=p("",11),B=p("",34);function S(x,C,M,A,w,I){const a=e("Image");return E(),t("div",null,[r,n(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/68/C0/CgpOIF5Pj3SAcUN4AAoiqH1w81U087.png"}),i(),k,n(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/68/C0/Cgq2xl5Pj3WAFE7iAAHAqUmrvpI493.png"}),i(),c,n(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/68/C0/CgpOIF5Pj3WARpCEAAL6h0zOFuE422.png"}),i(),d,n(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/68/C0/Cgq2xl5Pj3aAKZfFAA-9bP5LmvM029.png"}),i(),o,g,y,m,u,n(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/68/C0/CgpOIF5Pj3aAQju0AAHW7pHtD6w371.png"}),i(),b,_,v,n(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/68/C1/Cgq2xl5Pj3aAc73qAAbsH6BJyJw405.png"}),i(),f,n(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/68/C0/CgpOIF5Pj3aAf-BFABBp-0oVTMo956.png"}),i(),B])}const P=l(h,[["render",S]]);export{K as __pageData,P as default};
