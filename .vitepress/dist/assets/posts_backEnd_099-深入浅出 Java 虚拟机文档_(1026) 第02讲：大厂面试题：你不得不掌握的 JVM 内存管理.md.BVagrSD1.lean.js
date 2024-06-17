import{_,F as i,g as s,K as e,h as p,ar as l,l as a,o}from"./chunks/framework.VlluEs-f.js";const D=JSON.parse('{"title":"第02讲：大厂面试题：你不得不掌握的JVM内存管理","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1026) 第02讲：大厂面试题：你不得不掌握的 JVM 内存管理.md","filePath":"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1026) 第02讲：大厂面试题：你不得不掌握的 JVM 内存管理.md","lastUpdated":1718371218000}'),r={name:"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1026) 第02讲：大厂面试题：你不得不掌握的 JVM 内存管理.md"},n=l("",14),c=l("",4),h=l("",5),d=a("p",null,"本地方法栈是和虚拟机栈非常相似的一个区域，它服务的对象是 native 方法。你甚至可以认为虚拟机栈和本地方法栈是同一个区域，这并不影响我们对 JVM 的了解。",-1),V=a("p",null,"这里有一个比较特殊的数据类型叫作 returnAdress。因为这种类型只存在于字节码层面，所以我们平常打交道的比较少。对于 JVM 来说，程序就是存储在方法区的字节码指令，而 returnAddress 类型的值就是指向特定指令内存地址的指针。",-1),J=l("",8),u=a("p",null,"可以看到，程序计数器也是因为线程而产生的，与虚拟机栈配合完成计算操作。程序计数器还存储了当前正在运行的流程，包括正在执行的指令、跳转、分支、循环、异常处理等。",-1),M=a("p",null,"我们可以看一下程序计数器里面的具体内容。下面这张图，就是使用 javap 命令输出的字节码。大家可以看到在每个 opcode 前面，都有一个序号。就是图中红框中的偏移地址，你可以认为它们是程序计数器的内容。",-1),m=a("h3",{id:"堆",tabindex:"-1"},[p("堆 "),a("a",{class:"header-anchor",href:"#堆","aria-label":'Permalink to "堆"'},"​")],-1),A=l("",16),g=l("",8),T=a("p",null,"大家都知道，JVM 在运行时，会从操作系统申请大块的堆内内存，进行数据的存储。但是，堆外内存也就是申请后操作系统剩余的内存，也会有部分受到 JVM 的控制。比较典型的就是一些 native 关键词修饰的方法，以及对内存的申请和处理。",-1),v=a("p",null,"在 Linux 机器上，使用 top 或者 ps 命令，在大多数情况下，能够看到 RSS 段（实际的内存占用），是大于给 JVM 分配的堆内存的。",-1),C=a("p",null,"如果你申请了一台系统内存为 2GB 的主机，可能 JVM 能用的就只有 1GB，这便是一个限制。",-1),P=a("h3",{id:"总结",tabindex:"-1"},[p("总结 "),a("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),S=a("p",null,"JVM 的运行时区域是栈，而存储区域是堆。很多变量，其实在编译期就已经固定了。.class 文件的字节码，由于助记符的作用，理解起来并不是那么吃力，我们将在课程最后几个课时，从字节码层面看一下多线程的特性。",-1),b=a("p",null,"JVM 的运行时特性，以及字节码，是比较偏底层的知识。本课时属于初步介绍，有些部分并未深入讲解。希望你应该能够在脑海里建立一个 Java 程序怎么运行的概念，以便我们在后面的课时中，提到相应的内存区域时，有个整体的印象。",-1);function I(q,x,f,j,N,k){const t=i("Image");return o(),s("div",null,[n,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/60/47/Cgq2xl4VrjWAPqAuAARqnz6cigo666.png"}),p(),c,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/60/47/CgpOIF4VrjWAejcvABlLC2rtYrw357.gif"}),p(),h,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/60/47/Cgq2xl4VrjWABK2qAATDn4DQbvE629.png"}),p(),d,V,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/60/47/CgpOIF4VrjWAZvMCAAB9Uu8GKww546.png"}),p(),J,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/60/47/Cgq2xl4VrjaANruFAAQKxZvgfSs652.png"}),p(),u,M,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/60/47/CgpOIF4VrjaAQSVlAAB8U3OQQR8670.jpg"}),p(),m,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/60/47/Cgq2xl4VrjaAXnuQAANJIXDvNhI844.png"}),p(),A,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/60/47/Cgq2xl4VrjaAIlgaAAJKReuKXII670.png"}),p(),g,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/60/47/CgpOIF4VrjaAOSx2AAJgrvself8711.png"}),p(),T,v,C,P,S,b])}const R=_(r,[["render",I]]);export{D as __pageData,R as default};
