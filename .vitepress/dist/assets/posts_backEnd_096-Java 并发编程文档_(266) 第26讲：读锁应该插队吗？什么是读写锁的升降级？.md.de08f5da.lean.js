import{_ as o,D as e,o as t,g as c,J as l,h as a,Q as p,m as s}from"./chunks/framework.f67d7268.js";const _=JSON.parse('{"title":"第26讲：读锁应该插队吗？什么是读写锁的升降级？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/096-Java 并发编程文档/(266) 第26讲：读锁应该插队吗？什么是读写锁的升降级？.md","filePath":"posts/backEnd/096-Java 并发编程文档/(266) 第26讲：读锁应该插队吗？什么是读写锁的升降级？.md","lastUpdated":1696682708000}'),r={name:"posts/backEnd/096-Java 并发编程文档/(266) 第26讲：读锁应该插队吗？什么是读写锁的升降级？.md"},E=p("",17),y=s("p",null,"面对这种情况有两种应对策略：",-1),i=s("h3",{id:"第一种策略-允许插队",tabindex:"-1"},[a("第一种策略：允许插队 "),s("a",{class:"header-anchor",href:"#第一种策略-允许插队","aria-label":'Permalink to "第一种策略：允许插队"'},"​")],-1),d=s("p",null,"由于现在有线程在读，而线程 5 又不会特别增加它们读的负担，因为线程们可以共用这把锁，所以第一种策略就是让线程 5 直接加入到线程 2 和线程 4 一起去读取。",-1),F=s("p",null,'这种策略看上去增加了效率，但是有一个严重的问题，那就是如果想要读取的线程不停地增加，比如线程 6，那么线程 6 也可以插队，这就会导致读锁长时间内不会被释放，导致线程 3 长时间内拿不到写锁，也就是那个需要拿到写锁的线程会陷入"饥饿"状态，它将在长时间内得不到执行。',-1),u=s("h3",{id:"第二种策略-不允许插队",tabindex:"-1"},[a("第二种策略：不允许插队 "),s("a",{class:"header-anchor",href:"#第二种策略-不允许插队","aria-label":'Permalink to "第二种策略：不允许插队"'},"​")],-1),h=s("p",null,"这种策略认为由于线程 3 已经提前等待了，所以虽然线程 5 如果直接插队成功，可以提高效率，但是我们依然让线程 5 去排队等待：",-1),k=s("p",null,'按照这种策略线程 5 会被放入等待队列中，并且排在线程 3 的后面，让线程 3 优先于线程 5 执行，这样可以避免"饥饿"状态，这对于程序的健壮性是很有好处的，直到线程 3 运行完毕，线程 5 才有机会运行，这样谁都不会等待太久的时间。',-1),A=p("",35);function C(D,B,g,v,b,L){const n=e("Image");return t(),c("div",null,[E,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/5E/F7/Cgq2xl4O9CeAAEoOAAB1ZPyf3Ow995.png"}),a(),y,i,d,F,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/5E/F7/Cgq2xl4O9F2AR8XVAACUtGWSKRc535.png"}),a(),u,h,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/5E/F7/Cgq2xl4O9HuAXiW4AAB6t9JMFr0558.png"}),a(),k,l(n,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/5E/F7/CgpOIF4O9KGALnpFAABNXz5a77Q914.png"}),a(),A])}const w=o(r,[["render",C]]);export{_ as __pageData,w as default};
