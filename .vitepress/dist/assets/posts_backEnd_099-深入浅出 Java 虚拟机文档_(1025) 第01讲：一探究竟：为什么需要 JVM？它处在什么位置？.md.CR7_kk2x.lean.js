import{_ as p,F as n,g as e,K as t,h as s,ar as l,l as a,o as h}from"./chunks/framework.VlluEs-f.js";const K=JSON.parse('{"title":"第01讲：一探究竟：为什么需要JVM？它处在什么位置？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1025) 第01讲：一探究竟：为什么需要 JVM？它处在什么位置？.md","filePath":"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1025) 第01讲：一探究竟：为什么需要 JVM？它处在什么位置？.md","lastUpdated":1718371218000}'),o={name:"posts/backEnd/099-深入浅出 Java 虚拟机文档/(1025) 第01讲：一探究竟：为什么需要 JVM？它处在什么位置？.md"},k=l("",7),c=l("",9),r=a("p",null,"从图中可以看到，有了 JVM 这个抽象层之后，Java 就可以实现跨平台了。JVM 只需要保证能够正确执行 .class 文件，就可以运行在诸如 Linux、Windows、MacOS 等平台上了。",-1),d=a("p",null,"而 Java 跨平台的意义在于一次编译，处处运行，能够做到这一点 JVM 功不可没。比如我们在 Maven 仓库下载同一版本的 jar 包就可以到处运行，不需要在每个平台上再编译一次。",-1),J=a("p",null,"现在的一些 JVM 的扩展语言，比如 Clojure、JRuby、Groovy 等，编译到最后都是 .class 文件，Java 语言的维护者，只需要控制好 JVM 这个解析器，就可以将这些扩展语言无缝的运行在 JVM 之上了。",-1),v=a("p",null,"我们用一句话概括 JVM 与操作系统之间的关系：JVM 上承开发语言，下接操作系统，它的中间接口就是字节码。",-1),g=a("p",null,"而 Java 程序和我们通常使用的 C++ 程序有什么不同呢？这里用两张图进行说明。",-1),_=a("p",null,"对比这两张图可以看到 C++ 程序是编译成操作系统能够识别的 .exe 文件，而 Java 程序是编译成 JVM 能够识别的 .class 文件，然后由 JVM 负责调用系统函数执行程序。",-1),E=a("h3",{id:"jvm、jre、jdk的关系",tabindex:"-1"},[s("JVM、JRE、JDK的关系 "),a("a",{class:"header-anchor",href:"#jvm、jre、jdk的关系","aria-label":'Permalink to "JVM、JRE、JDK的关系"'},"​")],-1),V=a("p",null,"通过上面的学习我们了解到 JVM 是 Java 程序能够运行的核心。但是需要注意，JVM 自己什么也干不了，你需要给它提供生产原料（.class 文件）。俗语说的好，巧妇难为无米之炊。它虽然功能强大，但仍需要为它提供 .class 文件。",-1),M=a("p",null,"仅仅是 JVM，是无法完成一次编译，处处运行的。它需要一个基本的类库，比如怎么操作文件、怎么连接网络等。而 Java 体系很慷慨，会一次性将 JVM 运行所需的类库都传递给它。JVM 标准加上实现的一大堆基础类库，就组成了 Java 的运行时环境，也就是我们常说的 JRE（Java Runtime Environment）。",-1),u=a("p",null,"有了 JRE 之后，我们的 Java 程序便可以在浏览器中运行了。大家可以看一下自己安装的 Java 目录，如果是只需要执行一些 Java 程序，只需要一个 JRE 就足够了。",-1),F=a("p",null,"对于 JDK 来说，就更庞大了一些。除了 JRE，JDK 还提供了一些非常好用的小工具，比如 javac、java、jar 等。它是 Java 开发的核心，让外行也可以炼剑！",-1),m=a("p",null,"我们也可以看下 JDK 的全拼，Java Development Kit。我非常怕 kit（装备）这个单词，它就像一个无底洞，预示着你永无休止的对它进行研究。JVM、JRE、JDK 它们三者之间的关系，可以用一个包含关系表示。",-1),y=a("ul",null,[a("li",null,"JDK>JRE>JVM")],-1),C=a("h3",{id:"java-虚拟机规范和-java-语言规范的关系",tabindex:"-1"},[s("Java 虚拟机规范和 Java 语言规范的关系 "),a("a",{class:"header-anchor",href:"#java-虚拟机规范和-java-语言规范的关系","aria-label":'Permalink to "Java 虚拟机规范和 Java 语言规范的关系"'},"​")],-1),A=a("p",null,"我们通常谈到 JVM，首先会想到它的垃圾回收器，其实它还有很多部分，比如对字节码进行解析的执行引擎等。广义上来讲，JVM 是一种规范，它是最为官方、最为准确的文档；狭义上来讲，由于我们使用 Hotspot 更多一些，我们一般在谈到这个概念时，会将它们等同起来。",-1),b=a("p",null,"如果再加上我们平常使用的 Java 语言的话，可以得出下面这样一张图。这是 Java 开发人员必须要搞懂的两个规范。",-1),j=l("",24),D=l("",19);function T(B,f,S,x,I,P){const i=n("Image");return h(),e("div",null,[k,t(i,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/5F/FF/CgpOIF4UXzOAEhBUAAGnAhohAII133.png"}),s(),c,t(i,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/5F/FF/Cgq2xl4UXzOAXlI_AAFpK7ghZGQ508.png"}),s(),r,d,J,v,g,t(i,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/60/4A/CgpOIF4VvV2AI0nOAAH7mA63_GA021.png"}),s(),t(i,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/60/4A/CgpOIF4VvWaASjTZAAKdf712E44111.png"}),s(),_,E,t(i,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/5F/FF/CgpOIF4UXzOAWjoYAAB_bUtfWsU572.png"}),s(),V,M,u,F,m,y,t(i,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/5F/FF/Cgq2xl4UXzOAWEn7AACdFd2H7HA713.png"}),s(),C,A,b,t(i,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/5F/FF/CgpOIF4UXzOAbzFUAAAhKnX7ea0980.png"}),s(),j,t(i,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/5F/FF/Cgq2xl4UXzSATBgMAAG_3NHMI_Y236.png"}),s(),D])}const R=p(o,[["render",T]]);export{K as __pageData,R as default};
