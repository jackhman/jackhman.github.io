import{_ as l,D as p,o,g as e,J as c,h as n,m as s,Q as t}from"./chunks/framework.f67d7268.js";const m=JSON.parse('{"title":"第05讲：有哪几种实现生产者消费者模式的方法？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/096-Java 并发编程文档/(243) 第05讲：有哪几种实现生产者消费者模式的方法？.md","filePath":"posts/backEnd/096-Java 并发编程文档/(243) 第05讲：有哪几种实现生产者消费者模式的方法？.md","lastUpdated":1696682708000}'),r={name:"posts/backEnd/096-Java 并发编程文档/(243) 第05讲：有哪几种实现生产者消费者模式的方法？.md"},E=s("h1",{id:"第05讲-有哪几种实现生产者消费者模式的方法",tabindex:"-1"},[n("第05讲：有哪几种实现生产者消费者模式的方法？ "),s("a",{class:"header-anchor",href:"#第05讲-有哪几种实现生产者消费者模式的方法","aria-label":'Permalink to "第05讲：有哪几种实现生产者消费者模式的方法？"'},"​")],-1),y=s("p",null,"本课时我们主要学习如何用 wait/notify/Condition/BlockingQueue 实现生产者消费者模式。",-1),i=s("h3",{id:"生产者消费者模式",tabindex:"-1"},[n("生产者消费者模式 "),s("a",{class:"header-anchor",href:"#生产者消费者模式","aria-label":'Permalink to "生产者消费者模式"'},"​")],-1),u=s("p",null,'我们先来看看什么是生产者消费者模式，生产者消费者模式是程序设计中非常常见的一种设计模式，被广泛运用在解耦、消息队列等场景。在现实世界中，我们把生产商品的一方称为生产者，把消费商品的一方称为消费者，有时生产者的生产速度特别快，但消费者的消费速度跟不上，俗称"产能过剩"，又或是多个生产者对应多个消费者时，大家可能会手忙脚乱。如何才能让大家更好地配合呢？这时在生产者和消费者之间就需要一个中介来进行调度，于是便诞生了生产者消费者模式。',-1),F=t("",20);function d(A,g,B,C,k,D){const a=p("Image");return o(),e("div",null,[E,y,i,u,c(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/A9/03/CgotOV3OJ3iAGcaiAAFrcv5xk9U160.png"}),n(),F])}const v=l(r,[["render",d]]);export{m as __pageData,v as default};
