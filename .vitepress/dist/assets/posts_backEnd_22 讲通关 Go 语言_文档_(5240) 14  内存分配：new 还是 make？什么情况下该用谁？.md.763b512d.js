import{_ as s,o as a,g as n,Q as p}from"./chunks/framework.f67d7268.js";const g=JSON.parse('{"title":"14内存分配：new还是make？什么情况下该用谁？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/22 讲通关 Go 语言_文档/(5240) 14  内存分配：new 还是 make？什么情况下该用谁？.md","filePath":"posts/backEnd/22 讲通关 Go 语言_文档/(5240) 14  内存分配：new 还是 make？什么情况下该用谁？.md","lastUpdated":1696682708000}'),l={name:"posts/backEnd/22 讲通关 Go 语言_文档/(5240) 14  内存分配：new 还是 make？什么情况下该用谁？.md"},o=p(`<h1 id="_14内存分配-new还是make-什么情况下该用谁" tabindex="-1">14内存分配：new还是make？什么情况下该用谁？ <a class="header-anchor" href="#_14内存分配-new还是make-什么情况下该用谁" aria-label="Permalink to &quot;14内存分配：new还是make？什么情况下该用谁？&quot;">​</a></h1><p>程序的运行都需要内存，比如像变量的创建、函数的调用、数据的计算等。所以在需要内存的时候就要申请内存，进行内存分配。在 C/C++ 这类语言中，内存是由开发者自己管理的，需要主动申请和释放，而在 Go 语言中则是由该语言自己管理的，开发者不用做太多干涉，只需要声明变量，Go 语言就会根据变量的类型自动分配相应的内存。</p><p>Go 语言程序所管理的虚拟内存空间会被分为两部分：堆内存和栈内存。栈内存主要由 Go 语言来管理，开发者无法干涉太多，堆内存才是我们开发者发挥能力的舞台，因为程序的数据大部分分配在堆内存上，一个程序的大部分内存占用也是在堆内存上。</p><blockquote><p>小提示：我们常说的 Go 语言的内存垃圾回收是针对堆内存的垃圾回收。</p></blockquote><p>变量的声明、初始化就涉及内存的分配，比如声明变量会用到 var 关键字，如果要对变量初始化，就会用到 = 赋值运算符。除此之外还可以使用内置函数 new 和 make，这两个函数你在前面的课程中已经见过，它们的功能非常相似，但你可能还是比较迷惑，所以这节课我会基于内存分配，进而引出内置函数 new 和 make，为你讲解他们的不同，以及使用场景。</p><h3 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h3><p>一个数据类型，在声明初始化后都会赋值给一个变量，变量存储了程序运行所需的数据。</p><h4 id="变量的声明" tabindex="-1">变量的声明 <a class="header-anchor" href="#变量的声明" aria-label="Permalink to &quot;变量的声明&quot;">​</a></h4><p>和前面课程讲的一样，如果要单纯声明一个变量，可以通过 var 关键字，如下所示：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">string</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> s </span><span style="color:#D73A49;">string</span></span></code></pre></div><p>该示例只是声明了一个变量 s，类型为 string，并没有对它进行初始化，所以它的值为 string 的零值，也就是 &quot;&quot;（空字符串）。</p><p>上节课你已经知道 string 其实是个值类型，现在我们来声明一个指针类型的变量试试，如下所示：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sp </span><span style="color:#F97583;">*</span><span style="color:#F97583;">string</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sp </span><span style="color:#D73A49;">*</span><span style="color:#D73A49;">string</span></span></code></pre></div><p>发现也是可以的，但是它同样没有被初始化，所以它的值是 *string 类型的零值，也就是 nil。</p><h4 id="变量的赋值" tabindex="-1">变量的赋值 <a class="header-anchor" href="#变量的赋值" aria-label="Permalink to &quot;变量的赋值&quot;">​</a></h4><p>变量可以通过 = 运算符赋值，也就是修改变量的值。如果在声明一个变量的时候就给这个变量赋值，这种操作就称为变量的初始化。如果要对一个变量初始化，可以有三种办法。</p><ol><li><p>声明时直接初始化，比如 var s string = &quot;飞雪无情&quot;。</p></li><li><p>声明后再进行初始化，比如 s=&quot;飞雪无情&quot;（假设已经声明变量 s）。</p></li><li><p>使用 := 简单声明，比如 s:=&quot;飞雪无情&quot;。</p></li></ol><blockquote><p>小提示：变量的初始化也是一种赋值，只不过它发生在变量声明的时候，时机最靠前。也就是说，当你获得这个变量时，它就已经被赋值了。</p></blockquote><p>现在我们就对上面示例中的变量 s 进行赋值，示例代码如下：</p><p><em><strong>ch14/main.go</strong></em></p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">   s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;张三&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">   fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(s)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> s </span><span style="color:#D73A49;">string</span></span>
<span class="line"><span style="color:#24292E;">   s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;张三&quot;</span></span>
<span class="line"><span style="color:#24292E;">   fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(s)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>运行以上代码，可以正常打印出张三，说明值类型的变量没有初始化时，直接赋值是没有问题的。那么对于指针类型的变量呢？</p><p>在下面的示例代码中，我声明了一个指针类型的变量 sp，然后把该变量的值修改为&quot;飞雪无情&quot;。</p><p><em><strong>ch14/main.go</strong></em></p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sp </span><span style="color:#F97583;">*</span><span style="color:#F97583;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">sp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;飞雪无情&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">   fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">sp)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sp </span><span style="color:#D73A49;">*</span><span style="color:#D73A49;">string</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">sp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;飞雪无情&quot;</span></span>
<span class="line"><span style="color:#24292E;">   fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">sp)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>运行这些代码，你会看到如下错误信息：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">panic</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> runtime error</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> invalid memory address or nil pointer dereference</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">panic</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> runtime error</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> invalid memory address or nil pointer dereference</span></span></code></pre></div><p>这是因为指针类型的变量如果没有分配内存，就默认是零值 nil，它没有指向的内存，所以无法使用，强行使用就会得到以上 nil 指针错误。</p><p>而对于值类型来说，即使只声明一个变量，没有对其初始化，该变量也会有分配好的内存。</p><p>在下面的示例中，我声明了一个变量 s，并没有对其初始化，但是可以通过 &amp;s 获取它的内存地址。这其实是 Go 语言帮我们做的，可以直接使用。</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">   fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%p\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">s)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> s </span><span style="color:#D73A49;">string</span></span>
<span class="line"><span style="color:#24292E;">   fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%p\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">s)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>还记得我们在讲并发的时候，使用 var wg sync.WaitGroup 声明的变量 wg 吗？现在你应该知道为什么不进行初始化也可以直接使用了吧？因为 sync.WaitGroup 是一个 struct 结构体，是一个值类型，Go 语言自动分配了内存，所以可以直接使用，不会报 nil 异常。</p><p>于是可以得到结论：<strong>如果要对一个变量赋值，这个变量必须有对应的分配好的内存，这样才可以对这块内存操作，完成赋值的目的</strong>。</p><blockquote><p>小提示：其实不止赋值操作，对于指针变量，如果没有分配内存，取值操作一样会报 nil 异常，因为没有可以操作的内存。</p></blockquote><p>所以一个变量必须要经过声明、内存分配才能赋值，才可以在声明的时候进行初始化。指针类型在声明的时候，Go 语言并没有自动分配内存，所以不能对其进行赋值操作，这和值类型不一样。</p><blockquote><p>小提示：map 和 chan 也一样，因为它们本质上也是指针类型。</p></blockquote><h3 id="new-函数" tabindex="-1">new 函数 <a class="header-anchor" href="#new-函数" aria-label="Permalink to &quot;new 函数&quot;">​</a></h3><p>既然我们已经知道了声明的指针变量默认是没有分配内存的，那么给它分配一块就可以了。于是就需要今天的主角之一 new 函数出场了，对于上面的例子，可以使用 new 函数进行如下改造：</p><p><em><strong>ch14/main.go</strong></em></p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sp </span><span style="color:#F97583;">*</span><span style="color:#F97583;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">   sp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;">//关键点</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">sp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;飞雪无情&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">   fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">sp)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sp </span><span style="color:#D73A49;">*</span><span style="color:#D73A49;">string</span></span>
<span class="line"><span style="color:#24292E;">   sp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">new</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//关键点</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">sp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;飞雪无情&quot;</span></span>
<span class="line"><span style="color:#24292E;">   fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">sp)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>以上代码的关键点在于通过内置的 new 函数生成了一个 *string，并赋值给了变量 sp。现在再运行程序就正常了。</p><p>内置函数 new 的作用是什么呢？可以通过它的源代码定义分析，如下所示：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// The new built-in function allocates memory. The first argument is a type,</span></span>
<span class="line"><span style="color:#6A737D;">// not a value, and the value returned is a pointer to a newly</span></span>
<span class="line"><span style="color:#6A737D;">// allocated zero value of that type.</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">new</span><span style="color:#E1E4E8;">(Type) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Type</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// The new built-in function allocates memory. The first argument is a type,</span></span>
<span class="line"><span style="color:#6A737D;">// not a value, and the value returned is a pointer to a newly</span></span>
<span class="line"><span style="color:#6A737D;">// allocated zero value of that type.</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">new</span><span style="color:#24292E;">(Type) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Type</span></span></code></pre></div><p>它的作用就是根据传入的类型申请一块内存，然后返回指向这块内存的指针，指针指向的数据就是该类型的零值。</p><p>比如传入的类型是 string，那么返回的就是 string 指针，这个 string 指针指向的数据就是空字符串，如下所示：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">   sp1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">   fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">sp1)</span><span style="color:#6A737D;">//打印空字符串,也就是string的零值。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">   sp1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">new</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">   fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">sp1)</span><span style="color:#6A737D;">//打印空字符串,也就是string的零值。</span></span></code></pre></div><p>通过 new 函数分配内存并返回指向该内存的指针后，就可以通过该指针对这块内存进行赋值、取值等操作。</p><h3 id="变量初始化" tabindex="-1">变量初始化 <a class="header-anchor" href="#变量初始化" aria-label="Permalink to &quot;变量初始化&quot;">​</a></h3><p>当声明了一些类型的变量时，这些变量的零值并不能满足我们的要求，这时就需要在变量声明的同时进行赋值（修改变量的值），这个过程称为变量的初始化。</p><p>下面的示例就是 string 类型的变量初始化，因为它的零值（空字符串）不能满足需要，所以需要在声明的时候就初始化为&quot;飞雪无情&quot;。</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;飞雪无情&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">s1</span><span style="color:#F97583;">:=</span><span style="color:#9ECBFF;">&quot;飞雪无情&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> s </span><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;飞雪无情&quot;</span></span>
<span class="line"><span style="color:#24292E;">s1</span><span style="color:#D73A49;">:=</span><span style="color:#032F62;">&quot;飞雪无情&quot;</span></span></code></pre></div><p>不止基础类型可以通过以上这种字面量的方式进行初始化，复合类型也可以，比如之前课程示例中的 person 结构体，如下所示：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">person</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   name </span><span style="color:#F97583;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">   age </span><span style="color:#F97583;">int</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">//字面量初始化</span></span>
<span class="line"><span style="color:#E1E4E8;">   p</span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;">person{name: </span><span style="color:#9ECBFF;">&quot;张三&quot;</span><span style="color:#E1E4E8;">,age: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">person</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   name </span><span style="color:#D73A49;">string</span></span>
<span class="line"><span style="color:#24292E;">   age </span><span style="color:#D73A49;">int</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">//字面量初始化</span></span>
<span class="line"><span style="color:#24292E;">   p</span><span style="color:#D73A49;">:=</span><span style="color:#24292E;">person{name: </span><span style="color:#032F62;">&quot;张三&quot;</span><span style="color:#24292E;">,age: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>该示例代码就是在声明这个 p 变量的时候，把它的 name 初始化为张三，age 初始化为 18。</p><h4 id="指针变量初始化" tabindex="-1">指针变量初始化 <a class="header-anchor" href="#指针变量初始化" aria-label="Permalink to &quot;指针变量初始化&quot;">​</a></h4><p>在上个小节中，你已经知道了 new 函数可以申请内存并返回一个指向该内存的指针，但是这块内存中数据的值默认是该类型的零值，在一些情况下并不满足业务需求。比如我想得到一个 *person 类型的指针，并且它的 name 是飞雪无情、age 是 20，但是 new 函数只有一个类型参数，并没有初始化值的参数，此时该怎么办呢？</p><p>要达到这个目的，你可以自定义一个函数，对指针变量进行初始化，如下所示：</p><p><em><strong>ch14/main.go</strong></em></p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NewPerson</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">person{</span></span>
<span class="line"><span style="color:#E1E4E8;">   p</span><span style="color:#F97583;">:=</span><span style="color:#79B8FF;">new</span><span style="color:#E1E4E8;">(person)</span></span>
<span class="line"><span style="color:#E1E4E8;">   p.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;飞雪无情&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">   p.age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> p</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NewPerson</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">person{</span></span>
<span class="line"><span style="color:#24292E;">   p</span><span style="color:#D73A49;">:=</span><span style="color:#005CC5;">new</span><span style="color:#24292E;">(person)</span></span>
<span class="line"><span style="color:#24292E;">   p.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;飞雪无情&quot;</span></span>
<span class="line"><span style="color:#24292E;">   p.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> p</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>还记得前面课程讲的工厂函数吗？这个代码示例中的 NewPerson 函数就是工厂函数，除了使用 new 函数创建一个 person 指针外，还对它进行了赋值，也就是初始化。这样 NewPerson 函数的使用者就会得到一个 name 为飞雪无情、age 为 20 的 *person 类型的指针，通过 NewPerson 函数做一层包装，把内存分配（new 函数）和初始化（赋值）都完成了。</p><p>下面的代码就是使用 NewPerson 函数的示例，它通过打印 *pp 指向的数据值，来验证 name 是否是飞雪无情，age 是否是 20。</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">pp</span><span style="color:#F97583;">:=</span><span style="color:#79B8FF;">NewPerson</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;name为&quot;</span><span style="color:#E1E4E8;">,pp.name,</span><span style="color:#9ECBFF;">&quot;,age为&quot;</span><span style="color:#E1E4E8;">,pp.age)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">pp</span><span style="color:#D73A49;">:=</span><span style="color:#005CC5;">NewPerson</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name为&quot;</span><span style="color:#24292E;">,pp.name,</span><span style="color:#032F62;">&quot;,age为&quot;</span><span style="color:#24292E;">,pp.age)</span></span></code></pre></div><p>为了让自定义的工厂函数 NewPerson 更加通用，我把它改造一下，让它可以接受 name 和 age 参数，如下所示：</p><p><em><strong>ch14/main.go</strong></em></p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">pp</span><span style="color:#F97583;">:=</span><span style="color:#79B8FF;">NewPerson</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;飞雪无情&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NewPerson</span><span style="color:#E1E4E8;">(name </span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">,age </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">person{</span></span>
<span class="line"><span style="color:#E1E4E8;">   p</span><span style="color:#F97583;">:=</span><span style="color:#79B8FF;">new</span><span style="color:#E1E4E8;">(person)</span></span>
<span class="line"><span style="color:#E1E4E8;">   p.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name</span></span>
<span class="line"><span style="color:#E1E4E8;">   p.age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> age</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> p</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">pp</span><span style="color:#D73A49;">:=</span><span style="color:#005CC5;">NewPerson</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;飞雪无情&quot;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NewPerson</span><span style="color:#24292E;">(name </span><span style="color:#D73A49;">string</span><span style="color:#24292E;">,age </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">person{</span></span>
<span class="line"><span style="color:#24292E;">   p</span><span style="color:#D73A49;">:=</span><span style="color:#005CC5;">new</span><span style="color:#24292E;">(person)</span></span>
<span class="line"><span style="color:#24292E;">   p.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name</span></span>
<span class="line"><span style="color:#24292E;">   p.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> age</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> p</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这些代码的效果和刚刚的示例一样，但是 NewPerson 函数更通用，因为你可以传递不同的参数，构建出不同的 *person 变量。</p><h4 id="make-函数" tabindex="-1">make 函数 <a class="header-anchor" href="#make-函数" aria-label="Permalink to &quot;make 函数&quot;">​</a></h4><p>铺垫了这么多，终于讲到今天的第二个主角 make 函数了。在上节课中你已经知道，在使用 make 函数创建 map 的时候，其实调用的是 makemap 函数，如下所示：</p><p><em><strong>src/runtime/map.go</strong></em></p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// makemap implements Go map creation for make(map[k]v, hint).</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">makemap</span><span style="color:#E1E4E8;">(t </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">maptype, hint </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">, h </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">hmap) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">hmap{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//省略无关代码</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// makemap implements Go map creation for make(map[k]v, hint).</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">makemap</span><span style="color:#24292E;">(t </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">maptype, hint </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">, h </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">hmap) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">hmap{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//省略无关代码</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>makemap 函数返回的是 *hmap 类型，而 hmap 是一个结构体，它的定义如下面的代码所示：</p><p><em><strong>src/runtime/map.go</strong></em></p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// A header for a Go map.</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">hmap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// Note: the format of the hmap is also encoded in cmd/compile/internal/gc/reflect.go.</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// Make sure this stays in sync with the compiler&#39;s definition.</span></span>
<span class="line"><span style="color:#E1E4E8;">   count     </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// # live cells == size of map.  Must be first (used by len() builtin)</span></span>
<span class="line"><span style="color:#E1E4E8;">   flags     </span><span style="color:#F97583;">uint8</span></span>
<span class="line"><span style="color:#E1E4E8;">   B         </span><span style="color:#F97583;">uint8</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// log_2 of # of buckets (can hold up to loadFactor * 2^B items)</span></span>
<span class="line"><span style="color:#E1E4E8;">   noverflow </span><span style="color:#F97583;">uint16</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// approximate number of overflow buckets; see incrnoverflow for details</span></span>
<span class="line"><span style="color:#E1E4E8;">   hash0     </span><span style="color:#F97583;">uint32</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// hash seed</span></span>
<span class="line"><span style="color:#E1E4E8;">   buckets    unsafe.Pointer </span><span style="color:#6A737D;">// array of 2^B Buckets. may be nil if count==0.</span></span>
<span class="line"><span style="color:#E1E4E8;">   oldbuckets unsafe.Pointer </span><span style="color:#6A737D;">// previous bucket array of half the size, non-nil only when growing</span></span>
<span class="line"><span style="color:#E1E4E8;">   nevacuate  </span><span style="color:#F97583;">uintptr</span><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// progress counter for evacuation (buckets less than this have been evacuated)</span></span>
<span class="line"><span style="color:#E1E4E8;">   extra </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">mapextra </span><span style="color:#6A737D;">// optional fields</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// A header for a Go map.</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hmap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// Note: the format of the hmap is also encoded in cmd/compile/internal/gc/reflect.go.</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// Make sure this stays in sync with the compiler&#39;s definition.</span></span>
<span class="line"><span style="color:#24292E;">   count     </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// # live cells == size of map.  Must be first (used by len() builtin)</span></span>
<span class="line"><span style="color:#24292E;">   flags     </span><span style="color:#D73A49;">uint8</span></span>
<span class="line"><span style="color:#24292E;">   B         </span><span style="color:#D73A49;">uint8</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// log_2 of # of buckets (can hold up to loadFactor * 2^B items)</span></span>
<span class="line"><span style="color:#24292E;">   noverflow </span><span style="color:#D73A49;">uint16</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// approximate number of overflow buckets; see incrnoverflow for details</span></span>
<span class="line"><span style="color:#24292E;">   hash0     </span><span style="color:#D73A49;">uint32</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// hash seed</span></span>
<span class="line"><span style="color:#24292E;">   buckets    unsafe.Pointer </span><span style="color:#6A737D;">// array of 2^B Buckets. may be nil if count==0.</span></span>
<span class="line"><span style="color:#24292E;">   oldbuckets unsafe.Pointer </span><span style="color:#6A737D;">// previous bucket array of half the size, non-nil only when growing</span></span>
<span class="line"><span style="color:#24292E;">   nevacuate  </span><span style="color:#D73A49;">uintptr</span><span style="color:#24292E;">        </span><span style="color:#6A737D;">// progress counter for evacuation (buckets less than this have been evacuated)</span></span>
<span class="line"><span style="color:#24292E;">   extra </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">mapextra </span><span style="color:#6A737D;">// optional fields</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>可以看到，我们平时使用的 map 关键字其实非常复杂，它包含 map 的大小 count、存储桶 buckets 等。要想使用这样的 hmap，不是简单地通过 new 函数返回一个 *hmap 就可以，还需要对其进行初始化，这就是 make 函数要做的事情，如下所示：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">m</span><span style="color:#F97583;">:=</span><span style="color:#79B8FF;">make</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">map</span><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">m</span><span style="color:#D73A49;">:=</span><span style="color:#005CC5;">make</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">map</span><span style="color:#24292E;">[</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">)</span></span></code></pre></div><p>是不是发现 make 函数和上一小节中自定义的 NewPerson 函数很像？其实 make 函数就是 map 类型的工厂函数，它可以根据传递它的 K-V 键值对类型，创建不同类型的 map，同时可以初始化 map 的大小。</p><blockquote><p>小提示：make 函数不只是 map 类型的工厂函数，还是 chan、slice 的工厂函数。它同时可以用于 slice、chan 和 map 这三种类型的初始化。</p></blockquote><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>通过这节课的讲解，相信你已经理解了函数 new 和 make 的区别，现在我再来总结一下。</p><p>new 函数只用于分配内存，并且把内存清零，也就是返回一个指向对应类型零值的指针。new 函数一般用于需要显式地返回指针的情况，不是太常用。</p><p>make 函数只用于 slice、chan 和 map 这三种内置类型的创建和初始化，因为这三种类型的结构比较复杂，比如 slice 要提前初始化好内部元素的类型，slice 的长度和容量等，这样才可以更好地使用它们。</p><p>在这节课的最后，给你留一个练习题：使用 make 函数创建 slice，并且使用不同的长度和容量作为参数，看看它们的效果。</p><p>下节课我将介绍&quot;运行时反射：字符串和结构体之间如何转换？&quot;记得来听课！</p>`,83),e=[o];function t(c,r,y,E,i,d){return a(),n("div",null,e)}const h=s(l,[["render",t]]);export{g as __pageData,h as default};
