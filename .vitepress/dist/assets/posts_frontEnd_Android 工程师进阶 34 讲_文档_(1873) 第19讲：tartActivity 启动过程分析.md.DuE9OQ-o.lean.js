import{_ as n,F as s,g as l,K as c,h as i,l as t,ar as e,o as r}from"./chunks/framework.VlluEs-f.js";const bt=JSON.parse('{"title":"第19讲：tartActivity启动过程分析","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/Android 工程师进阶 34 讲_文档/(1873) 第19讲：tartActivity 启动过程分析.md","filePath":"posts/frontEnd/Android 工程师进阶 34 讲_文档/(1873) 第19讲：tartActivity 启动过程分析.md","lastUpdated":1718371218000}'),o={name:"posts/frontEnd/Android 工程师进阶 34 讲_文档/(1873) 第19讲：tartActivity 启动过程分析.md"},A=t("h1",{id:"第19讲-tartactivity启动过程分析",tabindex:"-1"},[i("第19讲：tartActivity启动过程分析 "),t("a",{class:"header-anchor",href:"#第19讲-tartactivity启动过程分析","aria-label":'Permalink to "第19讲：tartActivity启动过程分析"'},"​")],-1),d=t("p",null,"在 13 课时中我介绍了几个与 Activity 交互相关的问题，包括不同 taskAffinity、不同 process 配置的情况。本课时我们来看一下 startActivity 过程的具体流程，课程中引用的源码版本是 android-28。",-1),v=t("p",null,"在手机桌面应用中点击某一个 icon 之后，实际上最终就是通过 startActivity 去打开某一个 Activity 页面。我们知道 Android 中的一个 App 就相当于一个进程，所以 startActivity 操作中还需要判断，目标 Activity 的进程是否已经创建，如果没有，则在显示 Activity 之前还需要将进程 Process 提前创建出来。",-1),p=t("p",null,"假设是从 ActivityA 跳转到另一个 App 中的 ActivityB，过程如下图所示：",-1),h=t("p",null,"整个 startActivity 的流程分为 3 大部分，也涉及 3 个进程之间的交互：",-1),y=t("ol",null,[t("li",null,"ActivityA --> ActivityManagerService（简称 AMS）"),t("li",null,"ActivityManagerService --> ApplicationThread"),t("li",null,"ApplicationThread --> Activity")],-1),g=t("h3",{id:"activitya-activitymanagerservice-阶段",tabindex:"-1"},[i("ActivityA --> ActivityManagerService 阶段 "),t("a",{class:"header-anchor",href:"#activitya-activitymanagerservice-阶段","aria-label":'Permalink to "ActivityA --\\> ActivityManagerService 阶段"'},"​")],-1),_=t("p",null,"这一过程并不复杂，用一张图表示具体过程如下：",-1),u=t("p",null,"接下来看下源码中做了哪些操作。",-1),m=t("h4",{id:"activity-的-startactivity",tabindex:"-1"},[t("strong",null,"Activity 的 startActivity"),i(),t("a",{class:"header-anchor",href:"#activity-的-startactivity","aria-label":'Permalink to "**Activity 的 startActivity**"'},"​")],-1),M=t("p",null,"最终调用了 startActivityForResult 方法，传入的 -1 表示不需要获取 startActivity 的结果。",-1),T=t("h4",{id:"activity-的-startactivityforresult",tabindex:"-1"},[t("strong",null,"Activity 的 startActivityForResult"),i(),t("a",{class:"header-anchor",href:"#activity-的-startactivityforresult","aria-label":'Permalink to "**Activity 的 startActivityForResult**"'},"​")],-1),S=t("p",null,"具体代码如下所示：",-1),k=t("p",null,"startActivityForResult 也很简单，调用 Instrumentation.execStartActivity 方法。剩下的交给 Instrumentation 类去处理。",-1),C=t("p",null,"解释说明：",-1),F=t("ul",null,[t("li",null,"Instrumentation 类主要用来监控应用程序与系统交互。"),t("li",null,"蓝框中的 mMainThread 是 ActivityThread 类型，ActivityThread 可以理解为一个进程，在这就是 A 所在的进程。"),t("li",null,"通过 mMainThread 获取一个 ApplicationThread 的引用，这个引用就是用来实现进程间通信的，具体来说就是 AMS 所在系统进程通知应用程序进程进行的一系列操作，稍后会再介绍。")],-1),f=t("h4",{id:"instrumentation-的-execstartactivity",tabindex:"-1"},[t("strong",null,"Instrumentation 的 execStartActivity"),i(),t("a",{class:"header-anchor",href:"#instrumentation-的-execstartactivity","aria-label":'Permalink to "**Instrumentation 的 execStartActivity**"'},"​")],-1),b=t("p",null,"方法如下：",-1),q=e("",8),x=t("p",null,"从上图可以看出，经过多个方法的调用，最终通过 obtainStarter 方法获取了 ActivityStarter 类型的对象，然后调用其 execute 方法。在 execute 方法中，会再次调用其内部的 startActivityMayWait 方法。",-1),I=t("h4",{id:"activitystarter-的-startactivitymaywait",tabindex:"-1"},[t("strong",null,"ActivityStarter 的 startActivityMayWait"),i(),t("a",{class:"header-anchor",href:"#activitystarter-的-startactivitymaywait","aria-label":'Permalink to "**ActivityStarter 的 startActivityMayWait**"'},"​")],-1),P=t("p",null,"ActivityStarter 这个类看名字就知道它专门负责一个 Activity 的启动操作。它的主要作用包括解析 Intent、创建 ActivityRecord、如果有可能还要创建 TaskRecord。startActivityMayWait 方法的部分实现如下：",-1),E=t("p",null,"从上图可以看出获取目标 Activity 信息的操作由 mSupervisor 来实现，它是 ActivityStackSupervisor 类型，从名字也能猜出它主要是负责 Activity 所处栈的管理类。",-1),H=t("blockquote",null,[t("p",null,"在上图中的 resolveIntent 中实际上是调用系统 PackageManagerService 来获取最佳 Activity。有时候我们通过隐式 Intent 启动 Activity 时，系统中可能存在多个 Activity 可以处理 Intent，此时会弹出一个选择框让用户选择具体需要打开哪一个 Activity 界面，就是此处的逻辑处理结果。")],-1),R=t("p",null,"在 startActivityMayWait 方法中调用了一个重载的 startActivity 方法，而最终会调用的 ActivityStarter 中的 startActivityUnchecked 方法来获取启动 Activity 的结果。",-1),L=t("h4",{id:"activitystarter-的-startactivityunchecked",tabindex:"-1"},[t("strong",null,"ActivityStarter 的 startActivityUnchecked"),i(),t("a",{class:"header-anchor",href:"#activitystarter-的-startactivityunchecked","aria-label":'Permalink to "**ActivityStarter 的 startActivityUnchecked**"'},"​")],-1),B=t("p",null,"解释说明：",-1),W=t("ul",null,[t("li",null,"图中 1 处计算启动 Activity 的 Flag 值。"),t("li",null,"注释 2 处处理 Task 和 Activity 的进栈操作。"),t("li",null,"注释 3 处启动栈中顶部的 Activity。")],-1),U=t("p",null,[t("strong",null,"computeLaunchingTaskFlags 方法具体如下：")],-1),V=t("p",null,"这个方法的主要作用是计算启动 Activity 的 Flag，不同的 Flag 决定了启动 Activity 最终会被放置到哪一个 Task 集合中。",-1),N=t("ul",null,[t("li",null,"图中 1 处 mInTask 是 TaskRecord 类型，此处为 null，代表 Activity 要加入的栈不存在，因此需要判断是否需要新建 Task。"),t("li",null,'图中 2 处的 mSourceRecord 的类型 ActivityRecord 类型，它是用来描述"初始 Activity"，什么是"初始 Activity"呢？比如 ActivityA 启动了ActivityB，ActivityA 就是初始 Activity。当我们使用 Context 或者 Application 启动 Activity 时，此 SourceRecord 为 null。'),t("li",null,"图中 3 处表示初始 Activity 如果是在 SingleInstance 栈中的 Activity，这种需要添加 NEW_TASK 的标识。因为 SingleInstance 栈只能允许保存一个 Activity。"),t("li",null,"图中 4 处表示如果 Launch Mode 设置了 singleTask 或 singleInstance，则也要创建一个新栈。")],-1),w=t("h4",{id:"activitystacksupervisor-的-startactivitylocked",tabindex:"-1"},[i("ActivityStackSupervisor 的 startActivityLocked "),t("a",{class:"header-anchor",href:"#activitystacksupervisor-的-startactivitylocked","aria-label":'Permalink to "ActivityStackSupervisor 的 startActivityLocked"'},"​")],-1),D=t("p",null,"方法中会调用 insertTaskAtTop 方法尝试将 Task 和 Activity 入栈。如果 Activity 是以 newTask 的模式启动或者 TASK 堆栈中不存在该 Task id，则 Task 会重新入栈，并且放在栈的顶部。需要注意的是：Task 先入栈，之后才是 Activity 入栈，它们是包含关系。",-1),Q=t("p",null,"这里一下子涌出了好几个概念 Stack、Task、Activity，其实它们都是在 AMS 内部维护的数据结构，可以用一张图来描述它们之间的关系。",-1),O=t("p",null,[i("关于它们之间实际操作过程可以参考 "),t("a",{href:"https://mp.weixin.qq.com/s/Z14PtsmQXgIuTrbC6VVLiw",target:"_blank",rel:"noreferrer"},"Android 8.0 Activity启动流程"),i(" 这篇文章，不过需要注意这篇文章中分析的是基于 android-27 版本。")],-1),Y=t("h4",{id:"activitystack-的-resumefocusedstacktopactivitylocked",tabindex:"-1"},[t("strong",null,"ActivityStack 的 resumeFocusedStackTopActivityLocked"),i(),t("a",{class:"header-anchor",href:"#activitystack-的-resumefocusedstacktopactivitylocked","aria-label":'Permalink to "**ActivityStack 的 resumeFocusedStackTopActivityLocked**"'},"​")],-1),G=t("p",null,"经过一系列调用，最终代码又回到了 ActivityStackSupervisor 中的 startSpecificActivityLocked 方法。",-1),K=t("p",null,[t("strong",null,"ActivityStackSupervisor 的 startSpecificActivityLocked")],-1),J=t("p",null,"解释说明：",-1),X=t("ul",null,[t("li",null,"图中 1 处根据进程名称和 Application 的 uid 来判断目标进程是否已经创建，如果没有则代表进程未创建。"),t("li",null,"图中 2 处调用 AMS 创建 Activity 所在进程。")],-1),Z=t("p",null,"不管是目标进程已经存在还是新建目标进程，最终都会调用图中红线标记的 realStartActivityLocked 方法来执行启动 Activity 的操作。",-1),$=t("h4",{id:"activitystacksupervisor-的-realstartactivitylocked",tabindex:"-1"},[i("ActivityStackSupervisor 的 realStartActivityLocked "),t("a",{class:"header-anchor",href:"#activitystacksupervisor-的-realstartactivitylocked","aria-label":'Permalink to "ActivityStackSupervisor 的 realStartActivityLocked"'},"​")],-1),z=t("p",null,"这个方法在 android-27 和 android-28 版本的区别很大，从 android-28 开始 Activity 的启动交给了事务（Transaction）来完成。",-1),j=t("ul",null,[t("li",null,"图中 1 处创建 Activity 启动事务，并传入 app.thread 参数，它是 ApplicationThread 类型。在上文 startActivity 阶段已经提过 ApplicationThread 是为了实现进程间通信的，是 ActivityThread 的一个内部类。"),t("li",null,"图中 2 处执行 Activity 启动事务。")],-1),tt=t("p",null,"Activity 启动事务的执行是由 ClientLifecycleManager 来完成的，具体代码如下：",-1),it=t("p",null,"可以看出实际上是调用了启动事务 ClientTransaction 的 schedule 方法，而这个 transaction 实际上是在创建 ClientTransaction 时传入的 app.thread 对象，也就是 ApplicationThread。如下所示：",-1),at=t("p",null,"解释说明：",-1),ct=t("ul",null,[t("li",null,"这里传入的 app.thread 会赋值给 ClientTransaction 的成员变量 mClient，ClientTransaction 会调用 mClient.scheduleTransaction(this) 来执行事务。"),t("li",null,"这个 app.thread 是 ActivityThread 的内部类 ApplicationThread，所以事务最终是调用 app.thread 的 scheduleTransaction 执行。")],-1),et=t("p",null,"到这为止 startActivity 操作就成功地从 AMS 转移到了另一个进程 B 中的 **ApplicationThread **中，剩下的就是 AMS 通过进程间通信机制通知 ApplicationThread 执行 ActivityB 的生命周期方法。",-1),nt=t("h3",{id:"applicationthread-activity",tabindex:"-1"},[i("ApplicationThread -> Activity "),t("a",{class:"header-anchor",href:"#applicationthread-activity","aria-label":'Permalink to "ApplicationThread -\\> Activity"'},"​")],-1),st=t("p",null,"刚才我们已近分析了 AMS 将启动 Activity 的任务作为一个事务 ClientTransaction 去完成，在 ClientLifecycleManager 中会调用 ClientTransaction的schedule() 方法，如下：",-1),lt=t("p",null,"而 mClient 是一个 IApplicationThread 接口类型，具体实现是 ActivityThread 的内部类 ApplicationThread。因此后续执行 Activity 生命周期的过程都是由 ApplicationThread 指导完成的，scheduleTransaction 方法如下：",-1),rt=t("p",null,"可以看出，这里还是调用了ActivityThread 的 scheduleTransaction 方法。但是这个方法实际上是在 ActivityThread 的父类 ClientTransactionHandler 中实现，具体如下：",-1),ot=t("p",null,[i("调用 sendMessage 方法，向 Handler 中发送了一个 EXECUTE_TRANSACTION 的消息，并且 Message 中的 obj 就是启动 Activity 的事务对象。而这个 Handler 的具体实现是 ActivityThread 中的 "),t("strong",null,"mH"),i(" 对象。具体如下：")],-1),At=t("p",null,"最终调用了事务的 execute 方法，execute 方法如下：",-1),dt=t("p",null,"在 executeCallback 方法中，会遍历事务中的 callback 并执行 execute 方法，这些 callbacks 是何时被添加的呢？",-1),vt=t("p",null,"还记得 ClientTransaction 是如何创建被创建的吗？重新再看一遍：",-1),pt=t("p",null,"在创建 ClientTransaction 时，通过 addCallback 方法传入了 Callback 参数，从图中可以看出其实是一个 LauncherActivityItem 类型的对象。",-1),ht=t("h4",{id:"launchactivityitem-的-execute",tabindex:"-1"},[i("LaunchActivityItem 的 execute() "),t("a",{class:"header-anchor",href:"#launchactivityitem-的-execute","aria-label":'Permalink to "LaunchActivityItem 的 execute()"'},"​")],-1),yt=t("p",null,"终于到了跟 Activity 生命周期相关的方法了，图中 client 是 ClientTransationHandler 类型，实际实现类就是 ActivityThread。因此最终方法又回到了 ActivityThread。",-1),gt=t("h4",{id:"activitythread-的-handlelaunchactivity",tabindex:"-1"},[i("ActivityThread 的 handleLaunchActivity "),t("a",{class:"header-anchor",href:"#activitythread-的-handlelaunchactivity","aria-label":'Permalink to "ActivityThread 的 handleLaunchActivity"'},"​")],-1),_t=t("p",null,"这是一个比较重要的方法，Activity 的生命周期方法就是在这个方法中有序执行，具体如下：",-1),ut=e("",6);function mt(Mt,Tt,St,kt,Ct,Ft){const a=s("Image");return r(),l("div",null,[A,d,v,p,c(a,{alt:"图片1.png",src:"https://s0.lgstatic.com/i/image/M00/11/F8/CgqCHl7M0DeAQyu5AAC-zBQ1yGY981.png"}),i(),h,y,g,_,c(a,{alt:"图片2.png",src:"https://s0.lgstatic.com/i/image/M00/11/F9/CgqCHl7M0D6APUSnAACBNzm-sQM664.png"}),i(),u,m,c(a,{alt:"image005.png",src:"https://s0.lgstatic.com/i/image/M00/11/EE/Ciqc1F7M0PGAcw9-AAE81TfpJpM106.png"}),i(),M,T,S,c(a,{alt:"image007.png",src:"https://s0.lgstatic.com/i/image/M00/11/FA/CgqCHl7M0P2ACMETAAIirdxF28c620.png"}),i(),k,C,F,f,b,c(a,{alt:"image009.png",src:"https://s0.lgstatic.com/i/image/M00/11/EE/Ciqc1F7M0QSAHomcAAIQnVgFPtE390.png"}),i(),q,c(a,{alt:"image011.png",src:"https://s0.lgstatic.com/i/image/M00/11/EE/Ciqc1F7M0Q6AMyfdAARpsDnCyTE397.png"}),i(),x,I,P,c(a,{alt:"image013.png",src:"https://s0.lgstatic.com/i/image/M00/11/FA/CgqCHl7M0RWAZHYRAAJHlEvv_wE375.png"}),i(),E,H,R,L,c(a,{alt:"image015.png",src:"https://s0.lgstatic.com/i/image/M00/11/EE/Ciqc1F7M0RyAFd6pAAQ31DVvONo737.png"}),i(),B,W,U,c(a,{alt:"image017.png",src:"https://s0.lgstatic.com/i/image/M00/11/FA/CgqCHl7M0SSAdSouAAW_3GUY-eQ064.png"}),i(),V,N,w,c(a,{alt:"image019.png",src:"https://s0.lgstatic.com/i/image/M00/11/FA/CgqCHl7M0SyAHThkAAGCqi7Itl4134.png"}),i(),D,Q,c(a,{alt:"图片3.png",src:"https://s0.lgstatic.com/i/image/M00/11/F9/CgqCHl7M0EuAVf_JAADSUISYTcg351.png"}),i(),O,Y,c(a,{alt:"image023.png",src:"https://s0.lgstatic.com/i/image/M00/11/FA/CgqCHl7M0TeAG9CxAAOqoKoCVs4175.png"}),i(),G,K,c(a,{alt:"image025.png",src:"https://s0.lgstatic.com/i/image/M00/11/FA/CgqCHl7M0USAePMwAAON3-KEv3k905.png"}),i(),J,X,Z,$,c(a,{alt:"image027.png",src:"https://s0.lgstatic.com/i/image/M00/11/EF/Ciqc1F7M0U2AAICUAAao-5K1pRk024.png"}),i(),z,j,tt,c(a,{alt:"image029.png",src:"https://s0.lgstatic.com/i/image/M00/11/EF/Ciqc1F7M0VSAXsYKAAFfrOR1IPg495.png"}),i(),it,c(a,{alt:"image031.png",src:"https://s0.lgstatic.com/i/image/M00/11/EF/Ciqc1F7M0V2ANz0ZAAFoMcrH_0s503.png"}),i(),at,ct,et,nt,st,c(a,{alt:"image033.png",src:"https://s0.lgstatic.com/i/image/M00/11/FA/CgqCHl7M0WSActGMAABPx89XqHk745.png"}),i(),lt,c(a,{alt:"image035.png",src:"https://s0.lgstatic.com/i/image/M00/11/EF/Ciqc1F7M0WuAa5IlAADUR_OeUoU094.png"}),i(),rt,c(a,{alt:"image037.png",src:"https://s0.lgstatic.com/i/image/M00/11/EF/Ciqc1F7M0XSAeFFqAAD7J6wlcMQ127.png"}),i(),ot,c(a,{alt:"image039.png",src:"https://s0.lgstatic.com/i/image/M00/11/FA/CgqCHl7M0XuAMKd9AAEjo1qJnfI037.png"}),i(),At,c(a,{alt:"image041.png",src:"https://s0.lgstatic.com/i/image/M00/11/FA/CgqCHl7M0YOAcmFnAAM8Nf303oA942.png"}),i(),dt,vt,c(a,{alt:"image043.png",src:"https://s0.lgstatic.com/i/image/M00/11/FA/CgqCHl7M0YqAGMs9AAH0LruWIOY446.png"}),i(),pt,ht,c(a,{alt:"image045.png",src:"https://s0.lgstatic.com/i/image/M00/11/EF/Ciqc1F7M0ZOACmIWAAHGPsshAdU987.png"}),i(),yt,gt,_t,c(a,{alt:"image047.png",src:"https://s0.lgstatic.com/i/image/M00/11/FB/CgqCHl7M0ZyAPWYRAAdkYWgxWUQ790.png"}),i(),ut])}const qt=n(o,[["render",mt]]);export{bt as __pageData,qt as default};
