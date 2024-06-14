import{_ as o,D as p,o as e,g as r,J as l,h as a,Q as t,m as s}from"./chunks/framework.f67d7268.js";const M=JSON.parse('{"title":"10与其他框架相比，React的diff算法有何不同？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/107-前端面试宝典之 React篇文档/(5800) 10  与其他框架相比，React 的 diff 算法有何不同？.md","filePath":"posts/frontEnd/107-前端面试宝典之 React篇文档/(5800) 10  与其他框架相比，React 的 diff 算法有何不同？.md","lastUpdated":1696682708000}'),c={name:"posts/frontEnd/107-前端面试宝典之 React篇文档/(5800) 10  与其他框架相比，React 的 diff 算法有何不同？.md"},i=t("",12),y=s("h3",{id:"入手",tabindex:"-1"},[a("入手 "),s("a",{class:"header-anchor",href:"#入手","aria-label":'Permalink to "入手"'},"​")],-1),d=s("h4",{id:"diff-算法",tabindex:"-1"},[a("Diff 算法 "),s("a",{class:"header-anchor",href:"#diff-算法","aria-label":'Permalink to "Diff 算法"'},"​")],-1),E=s("p",null,'首先主角当然是"diff 算法"，但讨论 diff 算法一定是建立在虚拟 DOM 的基础上的。第 09 讲"Virtual DOM 的工作原理是什么？"讲过，使用虚拟 DOM 而非直接操作真实 DOM 是现代前端框架的一个基本认知。',-1),g=s("p",null,"而 diff 算法探讨的就是虚拟 DOM 树发生变化后，生成 DOM 树更新补丁的方式。它通过对比新旧两株虚拟 DOM 树的变更差异，将更新补丁作用于真实 DOM，以最小成本完成视图更新。",-1),f=s("p",null,"具体的流程是这样的：",-1),u=s("ul",null,[s("li",null,[s("p",null,"真实 DOM 与虚拟 DOM 之间存在一个映射关系。这个映射关系依靠初始化时的 JSX 建立完成；")]),s("li",null,[s("p",null,"当虚拟 DOM 发生变化后，就会根据差距计算生成 patch，这个 patch 是一个结构化的数据，内容包含了增加、更新、移除等；")]),s("li",null,[s("p",null,"最后再根据 patch 去更新真实的 DOM，反馈到用户的界面上。")])],-1),_=t("",36),h=t("",5),D=t("",9),b=s("p",null,[a("]("),s("a",{href:"https://shenceyun.lagou.com/t/mka",target:"_blank",rel:"noreferrer"},"https://shenceyun.lagou.com/t/mka"),a(")")],-1),F=s("p",null,"《大前端高薪训练营》",-1),m=s("p",null,[a("对标阿里 P7 技术需求 + 每月大厂内推，6 个月助你斩获名企高薪 Offer。"),s("a",{href:"https://shenceyun.lagou.com/t/mka",target:"_blank",rel:"noreferrer"},"点击链接"),a("，快来领取！")],-1);function A(q,k,R,v,C,P){const n=p("Image");return e(),r("div",null,[i,l(n,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/8C/55/CgqCHl_qyoCARaC-AABHz3sJYwo329.png"}),a(),y,d,E,g,l(n,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/8C/55/CgqCHl_qyouAAkb9AAB_cmWuZhc920.png"}),a(),f,u,l(n,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/8C/55/CgqCHl_qypGAZPuGAADYrK9nkJY878.png"}),a(),_,l(n,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/8C/4A/Ciqc1F_qyqeAWvpYAAEVYxYrQis686.png"}),a(),h,l(n,{alt:"Diff 算法1.png",src:"https://s0.lgstatic.com/i/image2/M01/04/31/CgpVE1_q2zGAe9UzAACKAZViwbM237.png"}),a(),D,l(n,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/72/94/Ciqc1F_EZ0eANc6tAASyC72ZqWw643.png"}),a(),b,F,m])}const T=o(c,[["render",A]]);export{M as __pageData,T as default};
