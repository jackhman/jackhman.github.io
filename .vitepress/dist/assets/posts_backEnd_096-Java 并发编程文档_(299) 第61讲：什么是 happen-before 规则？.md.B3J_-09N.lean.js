import{_ as i,F as t,g as h,K as p,h as s,ar as n,l as e,o as l}from"./chunks/framework.VlluEs-f.js";const j=JSON.parse('{"title":"第61讲：什么是happen-before规则？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/096-Java 并发编程文档/(299) 第61讲：什么是 happen-before 规则？.md","filePath":"posts/backEnd/096-Java 并发编程文档/(299) 第61讲：什么是 happen-before 规则？.md","lastUpdated":1718371218000}'),r={name:"posts/backEnd/096-Java 并发编程文档/(299) 第61讲：什么是 happen-before 规则？.md"},o=n("",15),d=e("p",null,"这一个 happens-before 的规则非常重要，因为如果对于同一个线程内部而言，后面语句都不能保证可以看见前面的语句的执行结果的话，那会造成非常严重的后果，程序的逻辑性就无法保证了。",-1),k=e("p",null,"这里有一个注意点，我们之前讲过重排序，那是不是意味着 happens-before 关系的规则和重排序冲突，为了满足 happens-before 关系，就不能重排序了？",-1),c=e("p",null,'答案是否定的。其实只要重排序后的结果依然符合 happens-before 关系，也就是能保证可见性的话，那么就不会因此限制重排序的发生。比如，单线程内，语句 1 在语句 2 的前面，所以根据"单线程规则"，语句 1 happens-before 语句 2，但是并不是说语句 1 一定要在语句 2 之前被执行，例如语句 1 修改的是变量 a 的值，而语句 2 的内容和变量 a 无关，那么语句 1 和语句 2 依然有可能被重排序。当然，如果语句 1 修改的是变量 a，而语句 2 正好是去读取变量 a 的值，那么语句 1 就一定会在语句 2 之前执行了。',-1),b=e("p",null,[e("strong",null,"（2）锁操作规则（synchronized 和 Lock 接口等）"),s(" ：")],-1),_=e("p",null,"如果操作 A 是解锁，而操作 B 是对同一个锁的加锁，那么 hb(A, B) 。正如下图所示：",-1),f=e("p",null,"从上图中可以看到，有线程 A 和线程 B 这两个线程。线程 A 在解锁之前的所有操作，对于线程 B 的对同一个锁的加锁之后的所有操作而言，都是可见的。这就是锁操作的 happens-before 关系的规则。",-1),g=e("p",null,[e("strong",null,"（3）volatile 变量规则"),s(" ：")],-1),u=e("p",null,"对一个 volatile 变量的写操作 happen-before 后面对该变量的读操作。",-1),E=e("p",null,"这就代表了如果变量被 volatile 修饰，那么每次修改之后，其他线程在读取这个变量的时候一定能读取到该变量最新的值。我们之前介绍过 volatile 关键字，知道它能保证可见性，而这正是由本条规则所规定的。",-1),y=e("p",null,[e("strong",null,"（4）线程启动规则"),s(" ：")],-1),A=e("p",null,"Thread 对象的 start 方法 happen-before 此线程 run 方法中的每一个操作。如下图所示：",-1),x=e("p",null,"在图中的例子中，左侧区域是线程 A 启动了一个子线程 B，而右侧区域是子线程 B，那么子线程 B 在执行 run 方法里面的语句的时候，它一定能看到父线程在执行 threadB.start() 前的所有操作的结果。",-1),m=e("p",null,[e("strong",null,"（5）线程 join 规则"),s("：")],-1),F=e("p",null,"我们知道 join 可以让线程之间等待，假设线程 A 通过调用 threadB.start() 启动了一个新线程 B，然后调用 threadB.join() ，那么线程 A 将一直等待到线程 B 的 run 方法结束（不考虑中断等特殊情况），然后 join 方法才返回。在 join 方法返回后，线程 A 中的所有后续操作都可以看到线程 B 的 run 方法中执行的所有操作的结果，也就是线程 B 的 run 方法里面的操作 happens-before 线程 A 的 join 之后的语句。如下图所示：",-1),B=n("",7);function v(D,C,T,q,P,w){const a=t("Image");return l(),h("div",null,[o,p(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/02/81/Ciqah157Dw6AfJVGAABiifLhJkU236.png"}),s(),d,k,c,b,_,p(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/02/81/Ciqah157Dw6Aeo7EAAA0bxPJeKw538.png"}),s(),f,g,u,E,y,A,p(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/7B/97/Cgq2xl57Dw6AdKyOAADBt-00qXo349.png"}),s(),x,m,F,p(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/7B/97/Cgq2xl57Dw6ADE7rAADRJKFrbWE816.png"}),s(),B])}const S=i(r,[["render",v]]);export{j as __pageData,S as default};
