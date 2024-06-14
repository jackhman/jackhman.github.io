import{_ as l,D as i,o as c,g as o,J as n,h as a,Q as s,m as e}from"./chunks/framework.f67d7268.js";const de=JSON.parse('{"title":"第26讲：面对内存泄漏，如何进行优化？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/Android 工程师进阶 34 讲_文档/(1880) 第26讲：面对内存泄漏，如何进行优化？.md","filePath":"posts/frontEnd/Android 工程师进阶 34 讲_文档/(1880) 第26讲：面对内存泄漏，如何进行优化？.md","lastUpdated":1696682708000}'),r={name:"posts/frontEnd/Android 工程师进阶 34 讲_文档/(1880) 第26讲：面对内存泄漏，如何进行优化？.md"},p=s("",7),d=e("p",null,"图中的 imageView 会造成 ActivityB 无法被 GC 回收。",-1),g=e("h4",{id:"_2-未解注册各种-listener",tabindex:"-1"},[a("2. 未解注册各种 Listener "),e("a",{class:"header-anchor",href:"#_2-未解注册各种-listener","aria-label":'Permalink to "2. 未解注册各种 Listener"'},"​")],-1),_=e("p",null,"在 Activity 中可能会注册各种系统监听器，比如广播。",-1),h=e("p",null,"运行上述 ActivityC，然后按下返回键。控制台将会显示如下 log，提示有内存泄漏发生：",-1),u=e("h4",{id:"_3-非静态-handler-导致-activity-泄漏",tabindex:"-1"},[a("3. 非静态 Handler 导致 Activity 泄漏 "),e("a",{class:"header-anchor",href:"#_3-非静态-handler-导致-activity-泄漏","aria-label":'Permalink to "3. 非静态 Handler 导致 Activity 泄漏"'},"​")],-1),A=e("p",null,"上述代码中的Handler也会造成ActivityD内存泄漏，一般需要将其置为static，然后内部持有一个Activity的弱引用来避免内存泄漏。如下所示：",-1),y=e("h4",{id:"_4-三方库使用-context",tabindex:"-1"},[a("4. 三方库使用 Context "),e("a",{class:"header-anchor",href:"#_4-三方库使用-context","aria-label":'Permalink to "4. 三方库使用 Context"'},"​")],-1),f=e("p",null,"在项目中经常会使用各种三方库，有些三方库的初始化需要我们传入一个 Context 对象。但是三方库中很有可能一直持有此 Context 引用，比如以下代码：",-1),m=e("p",null,"上述代码中将 ActivityE 本身当作一个 Context 传递给了一个模拟的三方库 ThirdParty 中，但是在三方库中将传入的 context 重新置为一个静态 static 类型。这种情况是一种隐形的 Activity 泄漏，在我们自己的项目中很难察觉出，所以平时开发过程中，尽量使用 Context.getApplicationContext，不要直接将 Activity 传递给其他组件。",-1),C=e("p",null,[e("strong",null,"提示"),a("：这也提醒我们自己在实现 SDK 时，也尽量避免造成外部 Context 的泄漏。比如下图是 JPush 中初始化的部分混淆代码：")],-1),k=s("",10),b=s("",3),v=s("",4),q=s("",10),E=e("p",null,"lifecycleCallbacks 的具体代码如下：",-1),R=e("p",null,"可以看出当监听到 Activity 的 onDestroy 方法后，会将其传给 RefWatcher 的 watch 方法。",-1),D=e("p",null,[e("strong",null,"RefWatcher")],-1),x=e("p",null,"它是 LeakCanary 的一个核心类，用来检测一个对象是否会发生内存泄漏。主要实现是在 watch 方法中，如下所示：",-1),T=e("p",null,"解释说明：",-1),M=e("ol",null,[e("li",null,[e("p",null,"图中 1 处生成一个随机的字符串 key，这个 key 就是用来标识 WeakReference 的，就相当于给 WeakReference 打了个标签；")]),e("li",null,[e("p",null,"图中 2 处将被检测对象包装到一个 WeakReference 中，并将其标识为步骤 1 中生成 key；")]),e("li",null,[e("p",null,"图中 3 处调用 ensureGoneAsync 开始执行检测操作。")])],-1),w=e("p",null,"因此关键代码就是在 ensureGoneAsync 方法中，代码如下：",-1),W=e("p",null,"通过 WatchExecutor 执行了一个重载的方法 ensureGone。",-1),F=e("p",null,"ensureGone 中实现了内存泄漏的检测，方法具体实现如下：",-1),B=e("p",null,"解释说明：",-1),P=e("ol",null,[e("li",null,[e("p",null,"图中 1 处会遍历 ReferenceQueue 中所有的元素，并根据每个元素中的 key，相应的将集合 retainedKeys 中的元素也删除。")]),e("li",null,[e("p",null,"图中 2 处判断集合 retainedKeys 是否还包含被检测对象的弱引用，如果包含说明被检测对象并没有被回收，也就是发生了内存泄漏。")]),e("li",null,[e("p",null,'图中 3 处生成 Heap "堆"信息，并生成内存泄漏的分析报告，上报给程序开发人员。')])],-1),S=e("p",null,"removeWeaklyReachableReferences() 方法如下：",-1),j=e("p",null,"可以看出这个方法的主要目的就是从 retainedKeys 中移除已经被回收的 WeakReference 的标志。",-1),I=e("p",null,"gone(reference) 方法判断 reference 是否被回收了，如下：",-1),L=e("p",null,"实现很简单，只要在 retainedKeys 中不包含此 reference，就说明 WeakReference 引用的对象已经被回收。",-1),H=e("p",null,"LeakCanary 的实现原理其实比较简单，但是内部实现还有一些其他的细节值得我们注意。",-1),V=e("h4",{id:"内存泄漏的检测时机",tabindex:"-1"},[a("内存泄漏的检测时机 "),e("a",{class:"header-anchor",href:"#内存泄漏的检测时机","aria-label":'Permalink to "内存泄漏的检测时机"'},"​")],-1),G=e("p",null,"很显然这种内存泄漏的检测与分析是比较消耗性能的，因此为了尽量不影响 UI 线程的渲染，LeakCanary 也做了些优化操作。在 ensureGoneAsync 方法中调用了 WatchExecutor 的 execute 方法来执行检测操作，如下：",-1),Q=e("p",null,"可以看出实际是向主线程 MessageQueue 中插入了一个 IdleHandler，IdleHandler 只会在主线程空闲时才会被 Looper 从队列中取出并执行。因此能够有效避免内存检测工作占用 UI 渲染时间。",-1),O=e("blockquote",null,[e("p",null,"通过 addIdleHandler 也经常用来做 App 的启动优化，比如在 Application 的 onCreate 方法中经常做 3 方库的初始化工作。可以将优先级较低、暂时使用不到的 3 方库的初始化操作放到 IdleHandler 中，从而加快 Application 的启动过程。不过个人感觉方法名叫 addIdleMessage 更合适一些，因为向 MessageQueue 插入的都是 Message 对象。")],-1),K=e("h4",{id:"特殊机型适配",tabindex:"-1"},[a("特殊机型适配 "),e("a",{class:"header-anchor",href:"#特殊机型适配","aria-label":'Permalink to "特殊机型适配"'},"​")],-1),N=e("p",null,"因为有些特殊机型的系统本身就存在一些内存泄漏的情况，导致 Activity 不被回收，所以在检测内存泄漏时，需要将这些情况排除在外。在 LeakCanary 的初始化方法 install 中，通过 excludedRefs 方法指定了一系列需要忽略的场景。",-1),J=e("p",null,"这些场景都被枚举在 AndroidExcludedRefs 中，这种统一规避特殊机型的方式，也值得我们借鉴，因为国内的手机厂商实在是太多了。",-1),Y=e("h4",{id:"leakcanary-如何检测其他类",tabindex:"-1"},[a("LeakCanary 如何检测其他类 "),e("a",{class:"header-anchor",href:"#leakcanary-如何检测其他类","aria-label":'Permalink to "LeakCanary 如何检测其他类"'},"​")],-1),$=e("p",null,"LeakCanary 默认只能机检测 Activity 的泄漏，但是 RefWatcher 的 watch 方法传入的参数实际是 Object，所以理论上是可以检测任何类的。LeakCanary 的 install 方法会返回一个 RefWatcher 对象，我们只需要在 Application 中保存此 RefWatch 对象，然后将需要被检测的对象传给 watch 方法即可，具体如下所示：",-1),U=e("p",null,"testedObj 就是一个需要被检测内存泄漏的对象。",-1),z=e("h3",{id:"总结",tabindex:"-1"},[a("总结 "),e("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),X=e("p",null,"这节课主要介绍了 Android 内存泄漏优化的相关知识。主要分两部分：",-1),Z=e("ul",null,[e("li",null,"内存泄漏预防")],-1),ee=e("p",null,"这需要我们了解 JVM 发生内存泄漏的原因，并在平时开发阶段养成良好的编码规范，避免引入会发生内存泄漏的代码。针对编码规范 Android Studio 可以安装一个阿里代码规范的插件，能够起到一定的代码检查效果。",-1),ae=e("ul",null,[e("li",null,"内存泄漏检测")],-1),te=e("p",null,"内存泄漏检测工具有很多 Android Studio 自带的 Profiler，以及 MAT 都是不错的选择。但是相比较而言，使用这些工具排查内存泄漏门槛稍高，并且全部是手动操作，略显麻烦。除了这两个工具之外，我还介绍了一个自动检测内存泄漏的开源库---LeakCanary。主要包括它的实现原理以及部分源码实现细节。",-1);function ne(se,le,ie,ce,oe,re){const t=i("Image");return c(),o("div",null,[p,n(t,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/21/A4/Ciqc1F7q-AeAW1DuAAEU-btiq_4137.png"}),a(),d,g,_,n(t,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/21/A4/Ciqc1F7q-BqAQJwzAAEKzbmcRsk474.png"}),a(),h,n(t,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/21/A4/Ciqc1F7q-CKARkMfAAQf5KSMfZ0416.png"}),a(),u,n(t,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/21/B0/CgqCHl7q-CmAJe0TAAHNGFL_fGo077.png"}),a(),A,n(t,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/21/A4/Ciqc1F7q-DCADVRvAAEX7QAgZig118.png"}),a(),y,f,n(t,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/21/B0/CgqCHl7q-DqANobFAAFyQv82cXY107.png"}),a(),m,C,n(t,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/21/B0/CgqCHl7q-EGAJXT4AAG1hIiL-oE217.png"}),a(),k,n(t,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image/M00/21/A4/Ciqc1F7q-E6AZYScAAFDBbiT1Qs185.png"}),a(),b,n(t,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image/M00/21/B0/CgqCHl7q-FaALtZAAAHb88CXUyU145.png"}),a(),v,n(t,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image/M00/21/A4/Ciqc1F7q-F6AGajHAAHieLiKxNY440.png"}),a(),q,n(t,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image/M00/21/B0/CgqCHl7q-GuATz1TAAE7ND9LfAM521.png"}),a(),E,n(t,{alt:"Drawing 11.png",src:"https://s0.lgstatic.com/i/image/M00/21/B0/CgqCHl7q-HKAdIfGAAK6YBMaPFw755.png"}),a(),R,D,x,n(t,{alt:"Drawing 12.png",src:"https://s0.lgstatic.com/i/image/M00/21/A5/Ciqc1F7q-HmAQ8C0AAM1sPQKj5c487.png"}),a(),T,M,w,n(t,{alt:"Drawing 13.png",src:"https://s0.lgstatic.com/i/image/M00/21/B0/CgqCHl7q-ICARe2lAADh9zoN-iw411.png"}),a(),W,F,n(t,{alt:"Drawing 14.png",src:"https://s0.lgstatic.com/i/image/M00/21/A5/Ciqc1F7q-IiAYMAsAAOfsoh4Y5o988.png"}),a(),B,P,S,n(t,{alt:"Drawing 15.png",src:"https://s0.lgstatic.com/i/image/M00/21/B0/CgqCHl7q-JGAS-pYAAEMx5gRfiE489.png"}),a(),j,I,n(t,{alt:"Drawing 16.png",src:"https://s0.lgstatic.com/i/image/M00/21/A5/Ciqc1F7q-JiAeRleAABYtwk75Yc836.png"}),a(),L,H,V,G,n(t,{alt:"Drawing 17.png",src:"https://s0.lgstatic.com/i/image/M00/21/A5/Ciqc1F7q-KOAY6ufAAIa3rnUqDw450.png"}),a(),Q,O,K,N,n(t,{alt:"Drawing 18.png",src:"https://s0.lgstatic.com/i/image/M00/21/A5/Ciqc1F7q-K6AY9s4AAC2bI9Us9g129.png"}),a(),J,Y,$,n(t,{alt:"Drawing 19.png",src:"https://s0.lgstatic.com/i/image/M00/21/B0/CgqCHl7q-LWAErYEAAGkjQ6px2A747.png"}),a(),U,z,X,Z,ee,ae,te])}const ge=l(r,[["render",ne]]);export{de as __pageData,ge as default};
