import{_ as o,D as e,o as t,g as c,J as l,h as s,Q as p,m as a}from"./chunks/framework.f67d7268.js";const j=JSON.parse('{"title":"02安装部署：手把手教你玩转etcd搭建","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/etcd 原理与实践_文档/(6396) 02  安装部署：手把手教你玩转 etcd 搭建.md","filePath":"posts/backEnd/etcd 原理与实践_文档/(6396) 02  安装部署：手把手教你玩转 etcd 搭建.md","lastUpdated":1696682708000}'),r={name:"posts/backEnd/etcd 原理与实践_文档/(6396) 02  安装部署：手把手教你玩转 etcd 搭建.md"},y=p("",10),E=p("",20),i=p("",14),d=p("",30),F=p("",32),u=a("p",null,[s("Discovery Service 用于生成集群的发现令牌，需要注意的是，"),a("strong",null,"该令牌仅用于集群引导阶段，不能用于运行时重新配置或集群监视"),s("。一个发现令牌只能代表一个 etcd 集群，只要此令牌上的发现协议启动，即使它中途失败，也不能用于引导另一个 etcd 集群。我在这一讲最后也介绍了 etcd 集群通过 TLS 协议进行的加密通信，来保证 etcd 通信的安全。")],-1),D=a("p",null,"下一讲我们将学习如何使用 etcdctl 客户端与 etcd 服务端进行交互，以及操作 etcd 服务端。有任何疑问欢迎在留言区和我互动，我们下一讲再见！",-1),A=a("hr",null,null,-1),h=a("p",null,"[",-1),g=a("p",null,[s("]("),a("a",{href:"https://shenceyun.lagou.com/t/Mka",target:"_blank",rel:"noreferrer"},"https://shenceyun.lagou.com/t/Mka"),s(")")],-1),v=a("p",null,[a("a",{href:"https://shenceyun.lagou.com/t/Mka",target:"_blank",rel:"noreferrer"},"拉勾背书内推 + 硬核实战技术干货，帮助每位 Java 工程师达到阿里 P7 技术能力。点此链接，快来领取！")],-1);function f(m,q,_,C,k,b){const n=e("Image");return t(),c("div",null,[y,l(n,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/92/39/Ciqc1GARCpyAUXI0AAFxf5H1G0s496.png"}),s(),E,l(n,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/92/39/Ciqc1GARCqeAFsCeAABdZ1B5LLA739.png"}),s(),i,l(n,{alt:"image (1).png",src:"https://s0.lgstatic.com/i/image/M00/92/3A/Ciqc1GARCuKAalsHAABj2KBNcMc677.png"}),s(),d,l(n,{alt:"Lark20210127-174258.png",src:"https://s0.lgstatic.com/i/image/M00/92/49/Ciqc1GARNceAKjyVAABikQzRQNU984.png"}),s(),F,l(n,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/92/45/CgqCHmARCxWAYbu_AAFSH3KwqSA512.png"}),s(),u,D,A,h,l(n,{alt:"java_高薪训练营.png",src:"https://s0.lgstatic.com/i/image/M00/8B/BD/Ciqc1F_gEFiAcnCNAAhXSgFweBY589.png"}),s(),g,v])}const S=o(r,[["render",f]]);export{j as __pageData,S as default};
