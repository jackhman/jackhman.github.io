import{_ as s,o as a,g as n,Q as p}from"./chunks/framework.f67d7268.js";const u=JSON.parse('{"title":"第28讲：你都了解过哪些编程方式？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/前端高手进阶_文档/(3200) 第28讲：你都了解过哪些编程方式？.md","filePath":"posts/frontEnd/前端高手进阶_文档/(3200) 第28讲：你都了解过哪些编程方式？.md","lastUpdated":1696682708000}'),l={name:"posts/frontEnd/前端高手进阶_文档/(3200) 第28讲：你都了解过哪些编程方式？.md"},o=p(`<h1 id="第28讲-你都了解过哪些编程方式" tabindex="-1">第28讲：你都了解过哪些编程方式？ <a class="header-anchor" href="#第28讲-你都了解过哪些编程方式" aria-label="Permalink to &quot;第28讲：你都了解过哪些编程方式？&quot;">​</a></h1><p>程序代码虽然在机器上运行，但终究是由人来编写和维护的，因此代码的可读性、可维护性在软件开发中尤为重要。所以我们在编写代码的时候通常会遵循一些编码规范或风格，比如 Google 提出了最著名的关于主流语言的<a href="https://zh-google-styleguide.readthedocs.io/en/latest/" target="_blank" rel="noreferrer">风格指南</a>，但这些都比较微观和具体，如果宏观且抽象地来看，编码风格可以上升为<strong>编程范式</strong>。</p><p>编程范式（Programming Paradigm）也称&quot;编程泛型&quot;或&quot;程序设计法&quot;，是对代码编写方式的一种抽象，体现出了开发者对程序执行的看法。例如，在面向对象编程中，开发者认为程序是一系列相互作用的对象，而在函数式编程中一个程序会被看作是一个无状态的函数计算的序列。常见的编程范式有 2 种：命令式编程和声明式编程。</p><h3 id="命令式编程-imperative-programming" tabindex="-1">命令式编程（Imperative Programming） <a class="header-anchor" href="#命令式编程-imperative-programming" aria-label="Permalink to &quot;命令式编程（Imperative Programming）&quot;">​</a></h3><p>命令式编程是一种古老的编程范式，它的出现与冯·诺依曼架构（现代计算机的基础，一种将程序指令存储器和数据存储器合并在一起的电脑设计结构）有紧密关系。冯·诺依曼架构的基本工作原理是通过赋值语句来更改程序状态，然后根据这些状态来逐步执行任务。而命令式编程方式就是对这个工作过程的抽象，主要关注点是如何通过具体步骤得到计算结果。</p><p>命令式编程比较重要的子类有 2 个：面向过程、面向对象。</p><h4 id="面向过程-procedural-programming" tabindex="-1">面向过程（Procedural Programming） <a class="header-anchor" href="#面向过程-procedural-programming" aria-label="Permalink to &quot;面向过程（Procedural Programming）&quot;">​</a></h4><p>面向过程是一种以过程为中心的编程思想，在编程过程中分析出解决问题所需要的步骤，然后再按照执行过程编写代码。 这种编程范式比较具象，很符合人的直觉思维，我们在入门学习 JavaScript 的时候就已经学会了。比如，下面的代码就是一个面向过程的例子，calc() 函数接收两个参数，第一个是待遍历的数组 arr，第二个是计算类型 type：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">arr</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;">(type) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;add&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> arr.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">acc</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cur</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> acc </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> cur, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;multiple&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> arr.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">acc</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cur</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> acc </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> cur, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">calc</span><span style="color:#24292E;">(</span><span style="color:#E36209;">arr</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;">(type) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;add&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> arr.</span><span style="color:#6F42C1;">reduce</span><span style="color:#24292E;">((</span><span style="color:#E36209;">acc</span><span style="color:#24292E;">, </span><span style="color:#E36209;">cur</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> acc </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> cur, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;multiple&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> arr.</span><span style="color:#6F42C1;">reduce</span><span style="color:#24292E;">((</span><span style="color:#E36209;">acc</span><span style="color:#24292E;">, </span><span style="color:#E36209;">cur</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> acc </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> cur, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这种编程范式流程明确，也不需要像面向对象那样生成实例，占用额外的存储空间，但它有个问题，就是代码的可扩展性不够。比如现在要加一个操作类型，那么又要修改 calc() 函数，添加一个逻辑分支。</p><h4 id="面向对象-object-oriented-programming" tabindex="-1">面向对象（Object-oriented Programming） <a class="header-anchor" href="#面向对象-object-oriented-programming" aria-label="Permalink to &quot;面向对象（Object-oriented Programming）&quot;">​</a></h4><p>面向过程的编程范式要求按照流程步骤逐个地分析每个问题。很显然，并不是所有问题都适合这种过程化的思维方式，这也就导致了其他编程范式的出现，比如面向对象。</p><p>面向对象的核心是对象，它不是把问题抽象成流程步骤，而是抽象成对象，对象是程序代码中的基本单位，对应代码中的类或类的实例，对象内部封装了数据和方法。这种编程范式主要包含 3 个特性：封装、继承、多态。</p><h5 id="_1-封装-encapsulation" tabindex="-1">1. 封装（Encapsulation） <a class="header-anchor" href="#_1-封装-encapsulation" aria-label="Permalink to &quot;1. 封装（Encapsulation）&quot;">​</a></h5><p>封装是通过限制只有特定类的对象可以访问这一特定类的成员，而它们通常利用接口实现消息的传入传出。简单说，就是给类的属性设定&quot;权限&quot;，将类的属性分为 3 类：公有成员、私有成员和受保护成员。公有成员可以由外部调用，私有成员只能在类内部访问，受保护的成员也只能在类内部或由子类访问。</p><p>下面两段代码分别是使用 JavaScript （ES5）和 TypeScript 实现封装特性的例子。在 JavaScript 中需要通过函数作用域来实现私有变量，在 TypeScript中则和面向对象语言 Java 的写法比较相近，通过关键字 private 和 public 声明即可。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// ES5 写法</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Animal</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> name</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// TypeScript 写法</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Animal</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setName</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getName</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// ES5 写法</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">setName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> a</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> name</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// TypeScript 写法</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setName</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">void</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getName</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h5 id="_2-继承-inheritance" tabindex="-1">2. 继承（Inheritance） <a class="header-anchor" href="#_2-继承-inheritance" aria-label="Permalink to &quot;2. 继承（Inheritance）&quot;">​</a></h5><p>继承这个概念和生物学中的遗传有些类似，在创建子类的时候，会默认获得父类的一些非私有属性和方法。</p><p>下面两段代码分别是使用 JavaScript （ES5）和 TypeScript 实现继承特性的例子。</p><p>在 JavaScript 中需要通过原型对象 prototype 来实现继承，在 TypeScript中则和面向对象语言 Java 的写法比较相近，通过 extends 来继承父类。虽然在 JavaScript/TypeScript 都能实现基础的继承，但对于继承自多个父类的情况，实现起来会比较复杂。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// ES5 写法</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Dog</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">bark</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;wang wang wang!!!&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#79B8FF;">Dog</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Animal</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">// TypeScript 写法</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Dog</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Animal</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bark</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;wang wang wang!!!&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// ES5 写法</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Dog</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">bark</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;wang wang wang!!!&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#005CC5;">Dog</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">// TypeScript 写法</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Dog</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Animal</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bark</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;wang wang wang!!!&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h5 id="_3-多态-polymorphism" tabindex="-1">3. 多态（Polymorphism） <a class="header-anchor" href="#_3-多态-polymorphism" aria-label="Permalink to &quot;3. 多态（Polymorphism）&quot;">​</a></h5><p>多态是指由继承而产生的相关的不同的类，其对象对同一消息会作出不同的响应。JavaScript/TypeScript 对多态的支持是不友好的，只能在函数内部通过判断参数类型来实现。</p><p>下面是一个简单的例子：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Cat</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">bark</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sound</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> sound </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> sound) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> sound</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;...&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Cat</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">bark</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">sound</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> sound </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> sound) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> sound</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;...&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="声明式编程-declarative-programming" tabindex="-1">声明式编程（Declarative Programming） <a class="header-anchor" href="#声明式编程-declarative-programming" aria-label="Permalink to &quot;声明式编程（Declarative Programming）&quot;">​</a></h3><p>在计算机科学中，声明式编程是一种构建程序的样式，该表达式表示计算逻辑而无须谈论其控制流程。它通常将程序视为某种逻辑理论，可以简化编写并行程序的过程。重点是需要完成的工作，而不是应该如何完成。它只是声明我们想要的结果，而并不关注这个结果如何产生，这是命令式（如何做）和声明式（做什么）编程范式之间的唯一区别。</p><p>声明式编程也有一些子类，常见的包括：逻辑式编程、数据驱动编程和函数式编程。</p><h4 id="逻辑式编程-logic-programming" tabindex="-1">逻辑式编程（Logic Programming） <a class="header-anchor" href="#逻辑式编程-logic-programming" aria-label="Permalink to &quot;逻辑式编程（Logic Programming）&quot;">​</a></h4><p>逻辑式编程通过设置答案须符合的规则来解决问题，而非设置步骤来解决问题。</p><p>这种风格很符合数学家和哲学家分析问题的方式，当我们需要解答一个新的问题时，先提出一个新的假设，然后再证明它跟现在的理论无冲突。逻辑提供了一个证明问题是真还是假的方法，创建证明的方法是人所皆知的，故逻辑是解答问题的可靠方法。逻辑式编程系统则自动化了这个程序，人工智能在逻辑式编程的发展中发挥了重要的影响。</p><p>逻辑式编程在 Web 开发中并不常见，<a href="https://www.ruanyifeng.com/blog/2019/01/prolog.html" target="_blank" rel="noreferrer">有兴趣的同学可以查阅阮一峰老师介绍逻辑编程语言 Prolog 的文章</a>。</p><h4 id="数据驱动编程-data-driven-programming" tabindex="-1">数据驱动编程（Data-driven Programming） <a class="header-anchor" href="#数据驱动编程-data-driven-programming" aria-label="Permalink to &quot;数据驱动编程（Data-driven Programming）&quot;">​</a></h4><p>这种编程方法基于数​​据，程序语句由数据定义而非执行步骤。</p><p>数据库程序是业务信息系统的核心，并提供文件创建、数据输入、更新、查询和报告功能。有几种主要针对数据库应用程序开发的编程语言，比如 SQL，它应用于结构化数据流，以进行过滤、转换、聚合（如计算统计信息）或调用其他程序。</p><h4 id="函数式编程-functional-programming" tabindex="-1">函数式编程（Functional Programming） <a class="header-anchor" href="#函数式编程-functional-programming" aria-label="Permalink to &quot;函数式编程（Functional Programming）&quot;">​</a></h4><p>函数式编程范式来源于数学而非编程语言，它的关键原理是通过执行一系列的数学函数来得到结果。核心依赖是用于某些特定计算的功能，而非数据结构，也就是说，数据与函数是松散耦合的，甚至严格说，数据应该是不可见的，因为它隐藏在函数的实现内部。</p><p>它主要有下面几个核心概念。</p><h5 id="_1-纯函数" tabindex="-1">1. 纯函数 <a class="header-anchor" href="#_1-纯函数" aria-label="Permalink to &quot;1. 纯函数&quot;">​</a></h5><p>若一个函数符合幂等性且无副作用那么就可以称为<strong>纯函数</strong>。幂等性是指在相同的输入值时，需产生相同的输出，与函数的输出和输入值以外的其他隐藏信息或状态无关。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 非幂等</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">rand</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 幂等</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">zero</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 非幂等</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">rand</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 幂等</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">zero</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>副作用是指除了返回函数值之外，还对调用函数产生附加的影响。例如，修改全局变量（函数外的变量）、修改参数或改变外部存储。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 无副作用</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 有副作用</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setAddition</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  localstorage.</span><span style="color:#B392F0;">setItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sum&#39;</span><span style="color:#E1E4E8;">, a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 无副作用</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> b</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 有副作用</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setAddition</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  localstorage.</span><span style="color:#6F42C1;">setItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;sum&#39;</span><span style="color:#24292E;">, a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> b)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>从上面的例子我们还可以看出纯函数的输出可以不用和所有的输入值有关，甚至可以与所有的输入值都无关。</p><p>纯函数会带来很多优点。首先它是无状态的，这也就意味着函数内部不需要额外的存储空间来保存数据；其次具有高度的可测试性，在前端框架中体现比较明显，之前用 jQuery 这类库来开发项目时，代码测试非常困难，因为很多函数是不纯的，内部可能涉及 DOM 操作、AJAX 请求、浏览器存储等各种副作用操作。</p><p>纯函数的使用也比较广泛，JavaScript 一些原生函数，例如 JSON.stringify() 就是纯函数，React 中也有与之对应的函数式组件。</p><h5 id="_2-高阶函数" tabindex="-1">2. 高阶函数 <a class="header-anchor" href="#_2-高阶函数" aria-label="Permalink to &quot;2. 高阶函数&quot;">​</a></h5><p>高阶函数是指接收一个函数作为参数，然后返回另一个函数的函数。它体现的是一种高级的抽象思维，使用场景也比较多，例如 TypeScript 提供的装饰器功能来扩展函数，以及 React 中使用高阶组件来扩展组件行为。</p><h5 id="_3-柯里化" tabindex="-1">3. 柯里化 <a class="header-anchor" href="#_3-柯里化" aria-label="Permalink to &quot;3. 柯里化&quot;">​</a></h5><p>柯里化可以翻译成卡瑞化或加里化，是指把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下的参数且返回结果的新函数。这种处理函数的方式由克里斯托弗·斯特雷奇以逻辑学家哈斯凯尔·加里命名。</p><p>简单来说，就是在一个函数中预先填充几个参数，这个函数返回另一个函数，这个返回的新函数将其参数和预先填充的参数进行合并，再执行函数逻辑。</p><p>具体例子在&quot;<a href="https://kaiwu.lagou.com/course/courseInfo.htm?courseId=180#/detail/pc?id=3179" target="_blank" rel="noreferrer">第 08 讲：为什么说函数是 JavaScript 的一等公民？</a>&quot;中已经提到了，这里就不再重复举例了。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>编程范式指的是编程风格，使用合理的编程范式能提升代码的可维护性。</p><p>编程范式可分为声明式和命令式。声明式更关注结果而非具体实现，在其子类中，前端工程师最需要关注的是函数式编程及其重要概念：纯函数、高阶函数、柯里化，这种编程方式和 JavaScript 最为贴合。命令式编程更关注具体实现，比较常用的有面向过程和面向对象，其中面向对象有 3 个重要特性：封装、继承、多态。</p><p>大家平常在编写代码时应该多思考，通过合理地使用各种编程范式来提升代码质量。</p><p>最后布置一道思考题：你还用过哪些编程范式？</p>`,58),e=[o];function c(r,t,E,y,i,d){return a(),n("div",null,e)}const g=s(l,[["render",c]]);export{u as __pageData,g as default};
