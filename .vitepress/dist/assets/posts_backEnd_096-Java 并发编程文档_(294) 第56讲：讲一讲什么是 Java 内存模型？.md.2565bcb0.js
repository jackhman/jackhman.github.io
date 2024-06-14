import{_ as a,o as r,g as t,Q as o}from"./chunks/framework.f67d7268.js";const c=JSON.parse('{"title":"第56讲：讲一讲什么是Java内存模型？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/096-Java 并发编程文档/(294) 第56讲：讲一讲什么是 Java 内存模型？.md","filePath":"posts/backEnd/096-Java 并发编程文档/(294) 第56讲：讲一讲什么是 Java 内存模型？.md","lastUpdated":1696682708000}'),e={name:"posts/backEnd/096-Java 并发编程文档/(294) 第56讲：讲一讲什么是 Java 内存模型？.md"},s=o('<h1 id="第56讲-讲一讲什么是java内存模型" tabindex="-1">第56讲：讲一讲什么是Java内存模型？ <a class="header-anchor" href="#第56讲-讲一讲什么是java内存模型" aria-label="Permalink to &quot;第56讲：讲一讲什么是Java内存模型？&quot;">​</a></h1><p>本课时我们主要介绍什么是 Java 内存模型？</p><br><p>从本课时开始，我们会进入到 Java 内存模型的学习。如果你想了解 Java 并发的底层原理，那么 Java 内存模型的知识非常重要，同时也是一个分水岭，可以区分出我们是仅停留在如何使用并发工具，还是能更进一步，知其所以然。</p><h2 id="容易混淆-jvm-内存结构-vs-java-内存模型" tabindex="-1"><strong>容易混淆：JVM 内存结构 VS Java 内存模型</strong> <a class="header-anchor" href="#容易混淆-jvm-内存结构-vs-java-内存模型" aria-label="Permalink to &quot;**容易混淆：JVM 内存结构 VS Java 内存模型**&quot;">​</a></h2><p>Java 作为一种面向对象的语言，有很多概念，从名称上看起来比较相似，比如 JVM 内存结构、Java 内存模型，这是两个截然不同的概念，但是很容易混淆。网络上也有不少讲 Java 内存模型的文章，其实写的是 JVM 内存结构。</p><br><p>所以我们就先从整体上概括一下这两者的主要作用：</p><ul><li><p>JVM 内存结构和 Java 虚拟机的运行时区域有关；</p></li><li><p>Java 内存模型和 Java 的并发编程有关。</p></li></ul><br><p>所以可以看出，这两个概念其实是有很大区别的。下面我们先来简要介绍一下 JVM 内存结构。</p><h3 id="jvm-内存结构" tabindex="-1"><strong>JVM 内存结构</strong> <a class="header-anchor" href="#jvm-内存结构" aria-label="Permalink to &quot;**JVM 内存结构**&quot;">​</a></h3><p>我们都知道，Java 代码是要运行在虚拟机上的，而虚拟机在执行 Java 程序的过程中会把所管理的内存划分为若干个不同的数据区域，这些区域都有各自的用途。在《Java 虚拟机规范（Java SE 8）》中描述了 JVM 运行时内存区域结构可分为以下 6 个区。</p><br><p><strong>堆区（</strong> <strong>Heap</strong> <strong>）</strong> **：**堆是存储类实例和数组的，通常是内存中最大的一块。实例很好理解，比如 new Object() 就会生成一个实例；而数组也是保存在堆上面的，因为在 Java 中，数组也是对象。</p><br><p><strong>虚拟机栈（</strong> <strong>Java Virtual Machine Stacks</strong> <strong>）</strong> **：**它保存局部变量和部分结果，并在方法调用和返回中起作用。</p><br><p><strong>方法区（</strong> <strong>Method Area</strong> <strong>）</strong> **：**它存储每个类的结构，例如运行时的常量池、字段和方法数据，以及方法和构造函数的代码，包括用于类初始化以及接口初始化的特殊方法。</p><br><p><strong>本地方法栈（</strong> <strong>Native Method Stacks</strong> <strong>）</strong> **：**与虚拟机栈基本类似，区别在于虚拟机栈为虚拟机执行的 Java 方法服务，而本地方法栈则是为 Native 方法服务。</p><br><p><strong>程序计数器（</strong> <strong>The PC Register</strong> <strong>）</strong> **：**是最小的一块内存区域，它的作用通常是保存当前正在执行的 JVM 指令地址。</p><br><p><strong>运行时常量池</strong> **（Run-Time Constant Pool）：**是方法区的一部分，包含多种常量，范围从编译时已知的数字到必须在运行时解析的方法和字段引用。</p><br><p>注意，以上是 Java 虚拟机规范，不同的虚拟机实现会各有不同，一般会遵守规范。</p><br><p>这里总结一下，JVM 内存结构是由 Java 虚拟机规范定义的，描述的是在 Java 程序执行过程中，由 JVM 管理的不同数据区域，各个区域有其特定的功能。官方的<a href="https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html" target="_blank" rel="noreferrer">规范地址</a><a href="https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html" target="_blank" rel="noreferrer">请点击这里</a>查看。</p><h2 id="从-java-代码到-cpu-指令" tabindex="-1"><strong>从 Java 代码到 CPU 指令</strong> <a class="header-anchor" href="#从-java-代码到-cpu-指令" aria-label="Permalink to &quot;**从 Java 代码到 CPU 指令**&quot;">​</a></h2><p>看完了 JVM 内存结构，就让我们回到 Java 内存模型上来。我们都知道，编写的 Java 代码，最终还是要转化为 CPU 指令才能执行的。为了理解 Java 内存模型的作用，我们首先就来回顾一下从 Java 代码到最终执行的 CPU 指令的大致流程：</p><ul><li><p>最开始，我们编写的 Java 代码，是 *.java 文件；</p></li><li><p>在编译（包含词法分析、语义分析等步骤）后，在刚才的 *.java 文件之外，会多出一个新的 Java 字节码文件（*.class）；</p></li><li><p>JVM 会分析刚才生成的字节码文件（*.class），并根据平台等因素，把字节码文件转化为具体平台上的<strong>机器指令；</strong></p></li><li><p>机器指令则可以直接在 CPU 上运行，也就是最终的程序执行。</p></li></ul><h2 id="为什么需要-jmm-java-memory-model-java-内存模型" tabindex="-1"><strong>为什么需要 JMM</strong> （Java Memory Model，<strong>Java 内存模型）</strong> <a class="header-anchor" href="#为什么需要-jmm-java-memory-model-java-内存模型" aria-label="Permalink to &quot;**为什么需要 JMM** （Java Memory Model，**Java 内存模型）**&quot;">​</a></h2><p>在更早期的语言中，其实是不存在内存模型的概念的。</p><br><p>所以程序最终执行的效果会依赖于具体的处理器，而不同的处理器的规则又不一样，不同的处理器之间可能差异很大，因此同样的一段代码，可能在处理器 A 上运行正常，而在处理器 B 上运行的结果却不一致。同理，在没有 JMM 之前，不同的 JVM 的实现，也会带来不一样的&quot;翻译&quot;结果。</p><br><p>所以 Java 非常需要一个标准，来让 Java 开发者、编译器工程师和 JVM 工程师能够达成一致。达成一致后，我们就可以很清楚的知道什么样的代码最终可以达到什么样的运行效果，让多线程运行结果可以预期，这个标准就是 JMM**，**这就是需要 JMM 的原因。</p><br><p>我们本课时将突破 Java 代码的层次，开始往下钻研，研究从 Java 代码到 CPU 指令的这个转化过程要遵守哪些和并发相关的原则和规范，这就是 JMM 的重点内容。如果不加以规范，那么同样的 Java 代码，完全可能产生不一样的执行效果，那是不可接受的，这也违背了 Java &quot;书写一次、到处运行&quot;的特点。</p><h2 id="jmm-是什么" tabindex="-1"><strong>JMM</strong> <strong>是什么</strong> <a class="header-anchor" href="#jmm-是什么" aria-label="Permalink to &quot;**JMM** **是什么**&quot;">​</a></h2><p>有了上面的铺垫，下面我们就介绍一下究竟什么是 JMM。</p><h3 id="jmm-是规范" tabindex="-1"><strong>JMM 是规范</strong> <a class="header-anchor" href="#jmm-是规范" aria-label="Permalink to &quot;**JMM 是规范**&quot;">​</a></h3><p>JMM 是和多线程相关的<strong>一组规范</strong>，需要各个 JVM 的实现来遵守 JMM 规范，以便于开发者可以利用这些规范，更方便地开发多线程程序。这样一来，即便同一个程序在不同的虚拟机上运行，得到的程序结果也是一致的。</p><br><p>如果没有 JMM 内存模型来规范，那么很可能在经过了不同 JVM 的&quot;翻译&quot;之后，导致在不同的虚拟机上运行的结果不一样，那是很大的问题。</p><br><p>因此，JMM 与处理器、缓存、并发、编译器有关。它解决了 CPU 多级缓存、处理器优化、指令重排等导致的结果不可预期的问题。</p><h3 id="jmm-是工具类和关键字的原理" tabindex="-1"><strong>JMM 是工具类和关键字的原理</strong> <a class="header-anchor" href="#jmm-是工具类和关键字的原理" aria-label="Permalink to &quot;**JMM 是工具类和关键字的原理**&quot;">​</a></h3><p>之前我们使用了各种同步工具和关键字，包括 volatile、synchronized、Lock 等，其实它们的原理都涉及 JMM。正是 JMM 的参与和帮忙，才让各个同步工具和关键字能够发挥作用，帮我们开发出并发安全的程序。</p><br><p>比如我们写了关键字 synchronized，JVM 就会在 JMM 的规则下，&quot;翻译&quot;出合适的指令，包括限制指令之间的顺序，以便在即使发生了重排序的情况下，也能保证必要的&quot;可见性&quot;，这样一来，不同的 JVM 对于相同的代码的执行结果就变得可预期了，我们 Java 程序员就只需要用同步工具和关键字就可以开发出正确的并发程序了，这都要感谢 JMM。</p><br><p>JMM 里最重要 3 点内容，分别是：<strong>重排序、原子性、内存可见性</strong>。这三个部分的内容，后面我们会详细展开。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>以上就是本课时的内容了。本课时，我们先对 JVM 内存结构和 Java 内存模型这两个容易混淆的概念进行了辨析，然后从宏观层面讲解了什么是 Java 内存模型，接下来，我们的脚步从 Java 代码逐渐往下探索，解释了为什么需要 JMM 以及什么是 JMM。</p><br>',57),n=[s];function J(p,v,l,M,i,h){return r(),t("div",null,n)}const m=a(e,[["render",J]]);export{c as __pageData,m as default};
