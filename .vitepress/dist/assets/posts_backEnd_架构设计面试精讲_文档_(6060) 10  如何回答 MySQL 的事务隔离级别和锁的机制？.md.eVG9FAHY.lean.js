import{_ as a,F as i,g as p,K as s,h as o,l as t,ar as n,o as e}from"./chunks/framework.VlluEs-f.js";const R=JSON.parse('{"title":"10如何回答MySQL的事务隔离级别和锁的机制？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/架构设计面试精讲_文档/(6060) 10  如何回答 MySQL 的事务隔离级别和锁的机制？.md","filePath":"posts/backEnd/架构设计面试精讲_文档/(6060) 10  如何回答 MySQL 的事务隔离级别和锁的机制？.md","lastUpdated":1718371218000}'),_={name:"posts/backEnd/架构设计面试精讲_文档/(6060) 10  如何回答 MySQL 的事务隔离级别和锁的机制？.md"},r=t("h1",{id:"_10如何回答mysql的事务隔离级别和锁的机制",tabindex:"-1"},[o("10如何回答MySQL的事务隔离级别和锁的机制？ "),t("a",{class:"header-anchor",href:"#_10如何回答mysql的事务隔离级别和锁的机制","aria-label":'Permalink to "10如何回答MySQL的事务隔离级别和锁的机制？"'},"​")],-1),c=t("p",null,"上一讲，我讲了 MySQL 的索引原理与优化问题，今天我带你继续学习 MySQL 的事务隔离级别和锁的机制，MySQL 的事务和锁是并发控制最基本的手段，在面试中，它们与 09 讲的索引一样，同样是 MySQL 重要的考察点。",-1),u=t("h3",{id:"案例背景",tabindex:"-1"},[o("案例背景 "),t("a",{class:"header-anchor",href:"#案例背景","aria-label":'Permalink to "案例背景"'},"​")],-1),g=t("p",null,[o("MySQL 的事务隔离级别（Isolation Level），是指：当多个线程操作数据库时，数据库要负责隔离操作，来保证各个线程在获取数据时的准确性。它分为四个不同的层次，按隔离水平高低排序，"),t("strong",null,"读未提交 < 读已提交 < 可重复度 < 串行化"),o("。")],-1),A=n("",10),h=n("",6),d=t("p",null,'事务并发时的"不可重复读"现象',-1),S=t("p",null,[t("strong",null,'"不可重复读"面试关注点：')],-1),m=t("ol",null,[t("li",null,[t("p",null,'简单理解是两次读取的数据中间被修改，对应的隔离级别是"读未提交"或"读已提交"。')]),t("li",null,[t("p",null,'不可重复读的解决办法就是升级事务隔离级别，比如"可重复度"。')])],-1),q=t("p",null,[t("strong",null,"幻读："),o(" 在一个事务内，同一条查询语句在不同时间段执行，得到不同的结果集。")],-1),P=n("",8),C=t("p",null,"线程死锁",-1),B=t("p",null,"比如你有资源 1 和 2，以及线程 A 和 B，当线程 A 在已经获取到资源 1 的情况下，期望获取线程 B 持有的资源 2。与此同时，线程 B 在已经获取到资源 2 的情况下，期望获取现场 A 持有的资源 1。",-1),L=t("p",null,"那么线程 A 和线程 B 就处理了相互等待的死锁状态，在没有外力干预的情况下，线程 A 和线程 B 就会一直处于相互等待的状态，从而不能处理其他的请求。",-1),M=t("p",null,[t("strong",null,"死锁产生的四个必要条件"),o("。")],-1),N=t("p",null,"互斥条件",-1),y=t("p",null,[t("strong",null,"互斥："),o(" 多个线程不能同时使用一个资源。比如线程 A 已经持有的资源，不能再同时被线程 B 持有。如果线程 B 请求获取线程 A 已经占有的资源，那线程 B 只能等待这个资源被线程 A 释放。")],-1),Q=t("p",null,"持有并等待",-1),T=t("p",null,[t("strong",null,"持有并等待："),o(" 当线程 A 已经持有了资源 1，又提出申请资源 2，但是资源 2 已经被线程 C 占用，所以线程 A 就会处于等待状态，但它在等待资源 2 的同时并不会释放自己已经获取的资源 1。")],-1),G=t("p",null,"不可剥夺条件",-1),E=t("p",null,[t("strong",null,"不可剥夺："),o(" 线程 A 获取到资源 1 之后，在自己使用完之前不能被其他线程（比如线程 B）抢占使用。如果线程 B 也想使用资源 1，只能在线程 A 使用完后，主动释放后再获取。")],-1),I=n("",8);function V(b,k,D,f,X,x){const l=i("Image");return e(),p("div",null,[r,c,u,g,s(l,{alt:"幻灯片1.PNG",src:"https://s0.lgstatic.com/i/image2/M01/0C/06/CgpVE2AXOh2AEXQqAACGXaq3WXI045.PNG"}),o(),A,s(l,{alt:"幻灯片2.PNG",src:"https://s0.lgstatic.com/i/image2/M01/0C/06/CgpVE2AXOj6AUNXEAABi4cEeRxY560.PNG"}),o(),h,s(l,{alt:"幻灯片3.PNG",src:"https://s0.lgstatic.com/i/image2/M01/0C/04/Cip5yGAXOmGAcCNlAABpFaU7YQ8179.PNG"}),o(),d,S,m,q,s(l,{alt:"幻灯片4.PNG",src:"https://s0.lgstatic.com/i/image2/M01/0C/04/Cip5yGAXOnSASsgQAABza2XSHV0638.PNG"}),o(),P,s(l,{alt:"幻灯片5.PNG",src:"https://s0.lgstatic.com/i/image2/M01/0C/06/CgpVE2AXOoeAIPuHAABkdI2Blp4721.PNG"}),o(),C,B,L,M,s(l,{alt:"幻灯片6.PNG",src:"https://s0.lgstatic.com/i/image2/M01/0C/06/CgpVE2AXOpyAODwtAABTGjPzh6k531.PNG"}),o(),N,y,s(l,{alt:"幻灯片7.PNG",src:"https://s0.lgstatic.com/i/image2/M01/0C/04/Cip5yGAXOq-AF8jDAABSSEnH3dk920.PNG"}),o(),Q,T,s(l,{alt:"幻灯片8.PNG",src:"https://s0.lgstatic.com/i/image2/M01/0C/04/Cip5yGAXOsCAA25rAABO_a-VNXU420.PNG"}),o(),G,E,s(l,{alt:"幻灯片9.PNG",src:"https://s0.lgstatic.com/i/image2/M01/0C/06/CgpVE2AXOtuAdm_UAABSLZeUVA0081.PNG"}),o(),I])}const U=a(_,[["render",V]]);export{R as __pageData,U as default};
