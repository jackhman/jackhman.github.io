import{_ as l,F as c,g as n,K as i,h as e,ar as a,l as t,o as r}from"./chunks/framework.VlluEs-f.js";const Q=JSON.parse('{"title":"第14讲：彻底掌握Androidtouch事件分发时序","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/Android 工程师进阶 34 讲_文档/(1868) 第14讲：彻底掌握 Android touch 事件分发时序.md","filePath":"posts/frontEnd/Android 工程师进阶 34 讲_文档/(1868) 第14讲：彻底掌握 Android touch 事件分发时序.md","lastUpdated":1718371218000}'),h={name:"posts/frontEnd/Android 工程师进阶 34 讲_文档/(1868) 第14讲：彻底掌握 Android touch 事件分发时序.md"},u=a("",17),s=a("",3),p=t("p",null,"图中红框标出了是否需要拦截的条件：",-1),_=t("ul",null,[t("li",null,[t("p",null,"如果事件为 DOWN 事件，则调用 onInterceptTouchEvent 进行拦截判断；")]),t("li",null,[t("p",null,"或者 mFirstTouchTarget 不为 null，代表已经有子 View 捕获了这个事件，子 View 的 dispatchTouchEvent 返回 true 就是代表捕获 touch 事件。")])],-1),d=t("p",null,"如果在上面步骤 1 中，当前 ViewGroup 并没有对事件进行拦截，则执行步骤 2。",-1),g=t("h4",{id:"步骤-2-具体代码如下",tabindex:"-1"},[e("步骤 2 具体代码如下 "),t("a",{class:"header-anchor",href:"#步骤-2-具体代码如下","aria-label":'Permalink to "步骤 2 具体代码如下"'},"​")],-1),T=t("p",null,"仔细看上述的代码可以看出：",-1),V=t("ul",null,[t("li",null,[t("p",null,"图中 ① 处表明事件主动分发的前提是事件为 DOWN 事件；")]),t("li",null,[t("p",null,"图中 ② 处遍历所有子 View；")]),t("li",null,[t("p",null,"图中 ③ 处判断事件坐标是否在子 View 坐标范围内，并且子 View 并没有处在动画状态；")]),t("li",null,[t("p",null,"图中 ④ 处调用 dispatchTransformedTouchEvent 方法将事件分发给子 View，如果子 View 捕获事件成功，则将 mFirstTouchTarget 赋值给子 View。")])],-1),m=t("h4",{id:"步骤-3-具体代码如下",tabindex:"-1"},[e("步骤 3 具体代码如下 "),t("a",{class:"header-anchor",href:"#步骤-3-具体代码如下","aria-label":'Permalink to "步骤 3 具体代码如下"'},"​")],-1),w=t("p",null,"步骤 3 有 2 个分支判断。",-1),A=t("ul",null,[t("li",null,[t("p",null,[e("分支 1：如果此时 mFirstTouchTarget 为 null，说明在上述的事件分发中并没有子 View 对事件进行了捕获操作。这种情况下，直接调用 dispatchTransformedTouchEvent 方法，并传入 child 为 null，最终会调用 super.dispatchTouchEvent 方法。实际上最终会调用自身的 onTouchEvent 方法，进行处理 touch 事件。也就是说："),t("strong",null,"如果没有子 View 捕获处理 touch 事件，ViewGroup 会通过自身的 onTouchEvent 方法进行处理。")])]),t("li",null,[t("p",null,"分支 2：mFirstTouchTarget 不为 null，说明在上面步骤 2 中有子 View 对 touch 事件进行了捕获，则直接将当前以及后续的事件交给 mFirstTouchTarget 指向的 View 进行处理。")])],-1),C=t("h4",{id:"事件分发流程代码演示",tabindex:"-1"},[e("事件分发流程代码演示 "),t("a",{class:"header-anchor",href:"#事件分发流程代码演示","aria-label":'Permalink to "事件分发流程代码演示"'},"​")],-1),E=t("p",null,"定义如下布局文件：",-1),q=t("p",null,"DownInterceptedGroup 和 CaptureTouchView 是两个自定义 View，它们的源码分别如下：",-1),N=t("p",null,"手指触摸 CaptureTouchView 并滑动一段距离后抬起，最终打印 log 如下：",-1),v=a("",6),b=t("p",null,[e("可以看出其实 mFirstTouchTarget 是一个 TouchTarget 类型的"),t("strong",null,"链表"),e("结构。而这个 TouchTarget 的作用就是用来记录捕获了 DOWN 事件的 View，具体保存在上图中的 child 变量。可是为什么是链表类型的结构呢？因为 Android 设备是支持多指操作的，每一个手指的 DOWN 事件都可以当做一个 TouchTarget 保存起来。在步骤 3 中判断如果 mFirstTouchTarget 不为 null，则再次将事件分发给相应的 TouchTarget。")],-1),D=t("h3",{id:"容易被遗漏的-cancel-事件",tabindex:"-1"},[e("容易被遗漏的 CANCEL 事件 "),t("a",{class:"header-anchor",href:"#容易被遗漏的-cancel-事件","aria-label":'Permalink to "容易被遗漏的 CANCEL 事件"'},"​")],-1),f=t("p",null,"在上面的步骤 3 中，继续向子 View 分发事件的代码中，有一段比较有趣的逻辑：",-1),O=t("p",null,"上图红框中表明已经有子 View 捕获了 touch 事件，但是蓝色框中的 intercepted boolean 变量又是 true。这种情况下，事件主导权会重新回到父视图 ViewGroup 中，并传递给子 View 的分发事件中传入一个 cancelChild == true。",-1),F=t("p",null,"看一下 dispatchTransformedTouchEvent 方法的部分源码如下：",-1),I=t("p",null,[e("因为之前传入参数 cancel 为 true，并且 child 不为 null，"),t("strong",null,"最终这个事件会被包装为一个 ACTION_CANCEL 事件传给 child"),e("。")],-1),M=t("p",null,[t("strong",null,"什么情况下会触发这段逻辑呢？")],-1),P=t("blockquote",null,[t("p",null,"总结一下就是：当父视图的 onInterceptTouchEvent 先返回 false，然后在子 View 的 dispatchTouchEvent 中返回 true（表示子 View 捕获事件），关键步骤就是在接下来的 MOVE 的过程中，父视图的 onInterceptTouchEvent 又返回 true，intercepted 被重新置为 true，此时上述逻辑就会被触发，子控件就会收到 ACTION_CANCEL 的 touch 事件。")],-1),S=t("p",null,[t("strong",null,"实际上有个很经典的例子可以用来演示这种情况：")],-1),W=t("p",null,"当在 Scrollview 中添加自定义 View 时，ScrollView 默认在 DOWN 事件中并不会进行拦截，事件会被传递给 ScrollView 内的子控件。只有当手指进行滑动并到达一定的距离之后，onInterceptTouchEvent 方法返回 true，并触发 ScrollView 的滚动效果。当 ScrollView 进行滚动的瞬间，内部的子 View 会接收到一个 CANCEL 事件，并丢失touch焦点。",-1),k=t("p",null,"比如以下代码：",-1),x=t("p",null,"CaptureTouchView 是一个自定义的 View，其源码如下：",-1),G=t("p",null,"CaptureTouchView 的 onTouchEvent 返回 true，表示它会将接收到的 touch 事件进行捕获消费。",-1),L=t("p",null,"上述代码执行后，当手指点击屏幕时 DOWN 事件会被传递给 CaptureTouchView，手指滑动屏幕将 ScrollView 上下滚动，刚开始 MOVE 事件还是由 CaptureTouchView 来消费处理，但是当 ScrollView 开始滚动时，CaptureTouchView 会接收一个 CANCEL 事件，并不再接收后续的 touch 事件。具体打印 log 如下：",-1),z=a("",6);function B(U,H,K,j,R,y){const o=c("Image");return r(),n("div",null,[u,i(o,{alt:"image.png",src:"https://s0.lgstatic.com/i/image/M00/04/0D/Ciqc1F6zq76AYtJPAADS4BOo8VM039.png"}),e(),s,i(o,{alt:"image (1).png",src:"https://s0.lgstatic.com/i/image/M00/04/0D/Ciqc1F6zq86AZd-ZAAHnUYfq8iQ886.png"}),e(),p,_,d,g,i(o,{alt:"image (2).png",src:"https://s0.lgstatic.com/i/image/M00/04/0D/Ciqc1F6zq9mAMTcTAAdFapIjIMc616.png"}),e(),T,V,m,i(o,{alt:"image (3).png",src:"https://s0.lgstatic.com/i/image/M00/04/0E/Ciqc1F6zq-OAV7ZcAAbboCsB_8o465.png"}),e(),w,A,C,E,i(o,{alt:"image (4).png",src:"https://s0.lgstatic.com/i/image/M00/04/0E/Ciqc1F6zq_GANeaVAAKS6a5wrDA923.png"}),e(),q,i(o,{alt:"image (5).png",src:"https://s0.lgstatic.com/i/image/M00/04/0E/CgqCHl6zq_mAFXqUAAVCCMHCxbY587.png"}),e(),N,i(o,{alt:"image (6).png",src:"https://s0.lgstatic.com/i/image/M00/04/0E/CgqCHl6zrAGAWq9uAAWUXplsW3M487.png"}),e(),v,i(o,{alt:"image (7).png",src:"https://s0.lgstatic.com/i/image/M00/04/0E/Ciqc1F6zrAqAHqzwAAFLLP0HYng235.png"}),e(),b,D,f,i(o,{alt:"image (8).png",src:"https://s0.lgstatic.com/i/image/M00/04/0E/Ciqc1F6zrBKACMw7AAINKPG9H7g994.png"}),e(),O,F,i(o,{alt:"image (9).png",src:"https://s0.lgstatic.com/i/image/M00/04/0E/CgqCHl6zrBqAQOmTAAGn_cFIxaU530.png"}),e(),I,M,P,S,W,k,i(o,{alt:"image (10).png",src:"https://s0.lgstatic.com/i/image/M00/04/0E/Ciqc1F6zrCKAVemaAAQcKt0yEQc281.png"}),e(),x,i(o,{alt:"image (11).png",src:"https://s0.lgstatic.com/i/image/M00/04/0E/CgqCHl6zrCqAU5jRAAHMKJUl2y4204.png"}),e(),G,L,i(o,{alt:"image (12).png",src:"https://s0.lgstatic.com/i/image/M00/04/0E/CgqCHl6zrDGAW0S9AAKvCBLfnyM142.png"}),e(),z])}const Y=l(h,[["render",B]]);export{Q as __pageData,Y as default};
