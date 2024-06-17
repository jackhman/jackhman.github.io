import{_ as n,F as h,g as p,K as t,h as i,ar as k,l as s,o as l}from"./chunks/framework.VlluEs-f.js";const m=JSON.parse('{"title":"第70讲：有哪些解决死锁问题的策略？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/096-Java 并发编程文档/(308) 第70讲：有哪些解决死锁问题的策略？.md","filePath":"posts/backEnd/096-Java 并发编程文档/(308) 第70讲：有哪些解决死锁问题的策略？.md","lastUpdated":1718371218000}'),E={name:"posts/backEnd/096-Java 并发编程文档/(308) 第70讲：有哪些解决死锁问题的策略？.md"},e=k("",57),r=s("p",null,[i("鸵鸟策略的意思就是，如果我们的系统发生死锁的概率不高，并且一旦发生其后果不是特别严重的话，我们就可以选择先忽略它。直到死锁发生的时候，我们再人工修复，比如重启服务，这并不是不可以的。如果我们的系统用的人比较少，比如是"),s("strong",null,"内部的系统，那么在并发量极低的情况下，它可能几年都不会发生死锁"),i("。对此我们考虑到投入产出比，自然也没有必要去对死锁问题进行特殊的处理，这是需要根据我们的业务场景进行合理选择的。")],-1),d=s("h3",{id:"总结",tabindex:"-1"},[i("总结** "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结\\*\\*"'},"​")],-1),g=s("p",null,"本课时我们主要介绍了有哪些解决死锁的策略。首先介绍了在线上发生死锁的时候，应该在保存了重要数据后，优先恢复线上服务；然后介绍了三种具体的修复策略：一是避免策略，其主要思路就是去改变锁的获取顺序，防止相反顺序获取锁这种情况的发生；二是检测与恢复策略，它是允许死锁发生，但是一旦发生之后它有解决方案；三是鸵鸟策略。",-1);function y(o,c,F,u,A,D){const a=h("Image");return l(),p("div",null,[e,t(a,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/89/2D/Cgq2xl6W5rCAROoJAADk8eh9NZU999.png"}),i(),r,d,g])}const b=n(E,[["render",y]]);export{m as __pageData,b as default};
