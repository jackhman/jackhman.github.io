import{_ as r,F as o,g as t,K as s,h as e,l as a,ar as p,o as n}from"./chunks/framework.VlluEs-f.js";const q=JSON.parse('{"title":"07Docker安全：基于内核的弱隔离系统如何保障安全性？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/045_由浅入深吃透 Docker/(4578) 07  Docker 安全：基于内核的弱隔离系统如何保障安全性？.md","filePath":"posts/backEnd/045_由浅入深吃透 Docker/(4578) 07  Docker 安全：基于内核的弱隔离系统如何保障安全性？.md","lastUpdated":1718371218000}'),c={name:"posts/backEnd/045_由浅入深吃透 Docker/(4578) 07  Docker 安全：基于内核的弱隔离系统如何保障安全性？.md"},l=a("h1",{id:"_07docker安全-基于内核的弱隔离系统如何保障安全性",tabindex:"-1"},[e("07Docker安全：基于内核的弱隔离系统如何保障安全性？ "),a("a",{class:"header-anchor",href:"#_07docker安全-基于内核的弱隔离系统如何保障安全性","aria-label":'Permalink to "07Docker安全：基于内核的弱隔离系统如何保障安全性？"'},"​")],-1),h=a("p",null,'在第 01 课时"Docker 安装：入门案例带你了解容器技术原理"中，我有介绍到 Docker 是基于 Linux 内核的 Namespace 技术实现资源隔离的，所有的容器都共享主机的内核。其实这与以虚拟机为代表的云计算时代还是有很多区别的，比如虚拟机有着更好的隔离性和安全性，而容器的隔离性和安全性则相对较弱。',-1),d=a("p",null,"在讨论容器的安全性之前，我们先了解下容器与虚拟机的区别，这样可以帮助我们更好地了解容器的安全隐患以及如何加固容器安全。",-1),k=a("h3",{id:"docker-与虚拟机区别",tabindex:"-1"},[e("Docker 与虚拟机区别 "),a("a",{class:"header-anchor",href:"#docker-与虚拟机区别","aria-label":'Permalink to "Docker 与虚拟机区别"'},"​")],-1),_=p("",50),u=a("p",null,"到此，相信你已经了解了 Docker 与虚拟机的本质区别，也知道了容器目前存在的一些安全隐患以及如何在生产环境中尽量避免这些安全隐患。",-1),m=a("p",null,"目前除了 Kata Container 外，你还知道其他的安全容器解决方案吗？知道的同学，可以把你的想法写在留言区。",-1);function b(g,C,D,x,F,f){const i=o("Image");return n(),t("div",null,[l,h,d,k,s(i,{alt:"WechatIMG1632.jpeg",src:"https://s0.lgstatic.com/i/image/M00/56/B7/Ciqc1F9sDDSAQhNcAAD8rL1NLXc02.jpeg"}),e(),_,s(i,{alt:"Lark20200918-170906.png",src:"https://s0.lgstatic.com/i/image/M00/51/28/Ciqc1F9keVSAHuDTAADaB11MKbU710.png"}),e(),u,m])}const P=r(c,[["render",b]]);export{q as __pageData,P as default};
