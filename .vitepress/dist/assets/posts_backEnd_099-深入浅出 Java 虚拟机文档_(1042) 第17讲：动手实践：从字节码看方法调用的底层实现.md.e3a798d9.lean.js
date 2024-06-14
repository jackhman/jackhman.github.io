import{_ as e,D as o,o as t,g as c,J as l,h as n,Q as p,m as s}from"./chunks/framework.f67d7268.js";const O=JSON.parse('{"title":"第17讲：动手实践：从字节码看方法调用的底层实现","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1042) 第17讲：动手实践：从字节码看方法调用的底层实现.md","filePath":"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1042) 第17讲：动手实践：从字节码看方法调用的底层实现.md","lastUpdated":1696682708000}'),i={name:"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1042) 第17讲：动手实践：从字节码看方法调用的底层实现.md"},r=p("",6),E=p("",33),d=p("",21),y=s("br",null,null,-1),h=s("p",null,[n("attach 启动 Java 进程后，可以在 "),s("strong",null,"Class Browser"),n(" 菜单中查看加载的所有类信息。我们在搜索框中输入 "),s("strong",null,"InvokeDemo"),n("，找到要查看的类。")],-1),g=s("br",null,null,-1),u=s("br",null,null,-1),v=s("p",null,[s("strong",null,"@"),n(" 符号后面的，就是具体的内存地址，我们可以复制一个，然后在 "),s("strong",null,"Inspector"),n(" 视图中查看具体的属性，可以"),s("strong",null,"大体"),n("认为这就是类在方法区的具体存储。")],-1),b=s("br",null,null,-1),m=s("br",null,null,-1),_=s("p",null,[n("在 Inspector 视图中，我们找到方法相关的属性 "),s("strong",null,"_methods"),n("，可惜它无法点开，也无法查看。")],-1),k=s("br",null,null,-1),M=p("",5),C=s("br",null,null,-1),A=s("p",null,"我们可以在 Inspect 视图中看到方法所对应的内存信息，这确实是一个 Method 方法的表示。",-1),f=s("br",null,null,-1),S=s("br",null,null,-1),T=s("p",null,"相比较起来，对象就简单了，它只需要保存一个到达 Class 对象的指针即可。我们需要先从对象视图中进入，然后找到它，一步步进入 Inspect 视图。",-1),j=s("br",null,null,-1),I=s("br",null,null,-1),q=s("p",null,"由以上的这些分析，可以得出下面这张图。执行引擎想要运行某个对象的方法，需要先在栈上找到这个对象的引用，然后再通过对象的指针，找到相应的方法字节码。",-1),V=s("br",null,null,-1),L=p("",46),D=p("",17);function w(P,x,H,B,J,F){const a=o("Image");return t(),c("div",null,[r,l(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6F/98/Cgq2xl5h7KeAAJqIAAC_nqBW9x8213.jpg"}),n(),E,l(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6F/98/CgpOIF5h7KeAKhUAAAFE99wUPW0675.jpg"}),n(),d,l(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6F/98/Cgq2xl5h7KeAVTC2AACpnNi6GE0282.jpg"}),n(),y,h,g,l(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6F/98/CgpOIF5h7KeAQIsAAACaFyeUVPI476.jpg"}),n(),u,v,b,l(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6F/98/Cgq2xl5h7KiAWuv-AAGcKB6dCE4406.jpg"}),n(),m,_,k,l(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6F/98/Cgq2xl5h7KiALPruAAD5Er51lCo505.jpg"}),n(),M,l(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6F/98/Cgq2xl5h7KiARdERAAGRPMESLnI388.jpg"}),n(),C,A,f,l(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6F/98/CgpOIF5h7KiAHHFPAAGXAWSStVA060.jpg"}),n(),S,T,j,l(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6F/98/Cgq2xl5h7KmAY-DPAAE7J_7eC4A001.jpg"}),n(),I,q,V,l(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6F/98/CgpOIF5h7KmAO0npAABUB89jbXE399.jpg"}),n(),L,l(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6F/98/Cgq2xl5h7KmAKs5YAADn6hIT-L8728.jpg"}),n(),D])}const N=e(i,[["render",w]]);export{O as __pageData,N as default};
