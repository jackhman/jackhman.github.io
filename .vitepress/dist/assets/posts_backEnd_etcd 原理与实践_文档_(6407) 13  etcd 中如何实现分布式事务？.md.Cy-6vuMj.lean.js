import{_ as t,F as k,g as p,K as n,h as s,ar as h,l as i,o as l}from"./chunks/framework.VlluEs-f.js";const B=JSON.parse('{"title":"13etcd中如何实现分布式事务？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/etcd 原理与实践_文档/(6407) 13  etcd 中如何实现分布式事务？.md","filePath":"posts/backEnd/etcd 原理与实践_文档/(6407) 13  etcd 中如何实现分布式事务？.md","lastUpdated":1718371218000}'),e={name:"posts/backEnd/etcd 原理与实践_文档/(6407) 13  etcd 中如何实现分布式事务？.md"},E=h("",14),r=h("",66),d=i("p",null,[s("通过上面的分析，我们清楚了如何使用 etcd 的 txn 事务构建符合 ACID 语义的事务框架。需要强调的是， etcd 的 STM 事务是 CAS 重试模式，在发生冲突时会多次重试，这就要"),i("strong",null,"保证业务代码是可重试的"),s("，因此不同于数据库事务的加锁模式。")],-1),g=i("p",null,"学习完这一讲，我要给大家留一个问题，你知道乐观锁适用于哪些场景吗？欢迎在留言区写下你的答案。下一讲，我们将继续介绍 etcd watch 机制的实现原理。",-1);function y(F,c,o,C,A,u){const a=k("Image");return l(),p("div",null,[E,n(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image6/M01/16/07/CioPOWBF7_KAN6nXAAArzi47oUU475.png"}),s(),r,n(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M00/16/0B/Cgp9HWBF8RqAEKc1AAIFtf2bepo790.png"}),s(),d,g])}const m=t(e,[["render",y]]);export{B as __pageData,m as default};
