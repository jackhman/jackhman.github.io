import{_ as n,F as t,g as p,K as e,h as i,l as s,ar as l,o as h}from"./chunks/framework.VlluEs-f.js";const K=JSON.parse('{"title":"第09讲：创建会话：避开日常开发的那些“坑”","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/ZooKeeper源码分析与实战_文档/(3139) 第09讲：创建会话：避开日常开发的那些“坑”.md","filePath":"posts/backEnd/ZooKeeper源码分析与实战_文档/(3139) 第09讲：创建会话：避开日常开发的那些“坑”.md","lastUpdated":1718371218000}'),o={name:"posts/backEnd/ZooKeeper源码分析与实战_文档/(3139) 第09讲：创建会话：避开日常开发的那些“坑”.md"},k=s("h1",{id:"第09讲-创建会话-避开日常开发的那些-坑",tabindex:"-1"},[i("第09讲：创建会话：避开日常开发的那些“坑” "),s("a",{class:"header-anchor",href:"#第09讲-创建会话-避开日常开发的那些-坑","aria-label":'Permalink to "第09讲：创建会话：避开日常开发的那些“坑”"'},"​")],-1),r=s("p",null,"会话是 ZooKeeper 中最核心的概念之一。客户端与服务端的交互操作中都离不开会话的相关的操作。在前几节课中我们学到的临时节点、Watch 通知机制等都和客户端会话有密不可分的关系。比如一次会话关闭时，服务端会自动删除该会话所创建的临时节点，或者当客户端会话退出时，通过 Watch 监控机制就可以向订阅了该事件的客户端发送响应的通知。接下来我们就从会话的应用层使用，到 ZooKeeper 底层的实现原理，一步步学习会话的相关知识。",-1),d=s("h3",{id:"会话的创建",tabindex:"-1"},[i("会话的创建 "),s("a",{class:"header-anchor",href:"#会话的创建","aria-label":'Permalink to "会话的创建"'},"​")],-1),E=s("p",null,"ZooKeeper 的工作方式一般是通过客户端向服务端发送请求而实现的。而在一个请求的发送过程中，首先，客户端要与服务端进行连接，而一个连接就是一个会话。在 ZooKeeper 中，一个会话可以看作是一个用于表示客户端与服务器端连接的数据结构 Session。而这个数据结构由三个部分组成：分别是会话 ID（sessionID）、会话超时时间（TimeOut）、会话关闭状态（isClosing），如下图所示。",-1),c=s("p",null,"下面我们来分别介绍一下这三个部分：",-1),g=s("ul",null,[s("li",null,"会话 ID：会话 ID 作为一个会话的标识符，当我们创建一次会话的时候，ZooKeeper 会自动为其分配一个唯一的 ID 编码。"),s("li",null,"会话超时时间：会话超时时间在我们之前的课程中也有涉及，一般来说，一个会话的超时时间就是指一次会话从发起后到被服务器关闭的时长。而设置会话超时时间后，服务器会参考设置的超时时间，最终计算一个服务端自己的超时时间。而这个超时时间则是最终真正用于 ZooKeeper 中服务端用户会话管理的超时时间。"),s("li",null,"会话关闭状态：会话关闭 isClosing 状态属性字段表示一个会话是否已经关闭。如果服务器检查到一个会话已经因为超时等原因失效时， ZooKeeper 会在该会话的 isClosing 属性值标记为关闭，再之后就不对该会话进行操作了。")],-1),_=s("h3",{id:"会话状态",tabindex:"-1"},[i("会话状态 "),s("a",{class:"header-anchor",href:"#会话状态","aria-label":'Permalink to "会话状态"'},"​")],-1),y=s("p",null,"通过上面的学习，我们知道了 ZooKeeper 中一次会话的内部结构。下面我们就从系统运行的角度去分析，一次会话从创建到关闭的生命周期中都经历了哪些阶段。",-1),C=l("",23);function m(u,D,I,F,N,T){const a=t("Image");return h(),p("div",null,[k,r,d,E,e(a,{alt:"image (4).png",src:"https://s0.lgstatic.com/i/image/M00/17/A3/CgqCHl7XUbeAH4RvAABLmAD-zt0526.png"}),i(),c,g,_,y,e(a,{alt:"11.png",src:"https://s0.lgstatic.com/i/image/M00/17/A4/CgqCHl7XUcSAAoGmAAO6qmEJCC4477.png"}),i(),C])}const b=n(o,[["render",m]]);export{K as __pageData,b as default};
