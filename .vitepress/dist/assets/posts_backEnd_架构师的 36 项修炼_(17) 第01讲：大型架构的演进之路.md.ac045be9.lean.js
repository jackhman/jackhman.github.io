import{_ as i,D as s,o as n,g as h,J as o,h as t,Q as l,m as a}from"./chunks/framework.f67d7268.js";const K=JSON.parse('{"title":"第01讲：大型架构的演进之路","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/架构师的 36 项修炼/(17) 第01讲：大型架构的演进之路.md","filePath":"posts/backEnd/架构师的 36 项修炼/(17) 第01讲：大型架构的演进之路.md","lastUpdated":1696682708000}'),c={name:"posts/backEnd/架构师的 36 项修炼/(17) 第01讲：大型架构的演进之路.md"},r=l("",21),_=a("p",null,"所谓的垂直伸缩就是提升单台服务器的处理能力，比如说用更快频率、更多核的 CPU，用更大的内存，用更快的网卡，用更多的磁盘组成一台服务器，使单台服务器的处理能力得到提升，通过这种手段提升系统的处理能力。",-1),p=a("h6",{id:"水平伸缩",tabindex:"-1"},[t("水平伸缩 "),a("a",{class:"header-anchor",href:"#水平伸缩","aria-label":'Permalink to "水平伸缩"'},"​")],-1),d=a("p",null,"除了垂直伸缩，还有一种手段叫作水平伸缩，如下图所示。",-1),m=a("p",null,"所谓的水平伸缩，是说不提升单机的处理能力，并不使用更昂贵的、更快的、更厉害的硬件，而是使用更多的服务器，将这些服务器构成一个分布式集群。这个集群统一对外提供服务，来提高系统整体的处理能力。",-1),u=a("h6",{id:"垂直伸缩的局限",tabindex:"-1"},[t("垂直伸缩的局限 "),a("a",{class:"header-anchor",href:"#垂直伸缩的局限","aria-label":'Permalink to "垂直伸缩的局限"'},"​")],-1),A=a("p",null,"在大型互联网出现之前，传统的软件，比如银行、电信这些企业的软件系统，主要是使用垂直伸缩这种手段实现系统能力提升的，先是提升服务器的硬件水平，就像我们刚才说的，提升 CPU 的能力、提升网卡的能力、提升内存和磁盘的能力。当某种类型的服务器能力提升到了瓶颈以后，就会用更强大的服务器，比如说从服务器升级到小型机，从小型机提升到中型机，从中型机提升到大型机，服务器越来越强大，处理能力也越来越强大，当然价格也越来越昂贵，运维越来越复杂。",-1),g=a("p",null,"而在互联网行业中多采用水平伸缩的手段。这主要是因为垂直伸缩有一些缺点。",-1),b=l("",7),C=a("p",null,"最早的时候是单机系统，这时候可以满足少量用户的使用；随着数据量提升，需要进行应用服务器与数据库分离，这时候可以满足万级用户的使用；再然后需要通过分布式缓存和服务器集群提升系统性能，可以满足十万级的用户；之后需要进行反向代理，CDN 加速，还需要数据库读写分离，以满足百万用户级的访问；随着数据量爆发式增长，使用分布式文件系统和分布式数据库系统，以满足千万级用户的访问；最后使用搜索引擎、NoSQL、消息队列、分布式服务等更复杂的技术方案，以满足亿级用户的访问。",-1),P=a("h6",{id:"单机系统",tabindex:"-1"},[t("单机系统 "),a("a",{class:"header-anchor",href:"#单机系统","aria-label":'Permalink to "单机系统"'},"​")],-1),f=a("p",null,"先来看单机系统，在最早的时候，系统因为用户量比较少，可能只是有限的几个用户，这个阶段系统主要是用来验证技术以及业务模式是否可行，系统也不需要太复杂，只需要具备有限的几个主要功能。应用程序开发完以后，部署在应用服务器上，一个应用访问自己服务器上的数据库，访问自己服务器的文件系统，如下图所示，这就构成了一个单机系统，这个系统就可以满足少量用户使用了。",-1),q=a("p",null,"如果这个系统被证明是可行的、有价值的、好用的，比如 Google 的搜索引擎系统，会逐渐吸引其他用户，造成用户访问增长。Google 最早就是部署在斯坦福的实验室里面，给实验室的同学和老师使用的。这些同学和老师使用后发现 Google 的搜索引擎比以前的搜索引擎（比如说像 Yahoo 这样的搜索引擎）要好用的多，这个消息很快就扩散出去了，整个斯坦福大学的老师同学可能都会过来访问这个服务器。这时候服务器就不能够承受访问压力了，需要进行第一次升级------数据库与应用分离。数据库与应用分离如下图所示，而前面单机的时候，数据库和应用程序是部署在一起的。",-1),D=a("h6",{id:"缓存",tabindex:"-1"},[t("缓存 "),a("a",{class:"header-anchor",href:"#缓存","aria-label":'Permalink to "缓存"'},"​")],-1),k=a("p",null,"进行第一次分离的时候，应用程序、数据库、文件系统分别部署在不同的服务器上，从 1 台服务器变成了 3 台服务器，那么相应的处理能力就提升了 3 倍。这种分离几乎是不需要技术成本的，只需要把数据库文件系统进行远程部署和远程访问就可以了，这个时候的处理能力提升了 3 倍。",-1),N=a("p",null,"然而随着用户进一步的增加，更多的用户过来访，3 台服务器也不能够承受这样的压力了，那么就需要使用缓存改善性能，如下图所示。",-1),x=a("p",null,"通过这样一种手段，将一台数据库服务器水平伸缩成两台数据库服务器，可以提供更强大的数据处理能力。",-1),E=a("h6",{id:"反向代理和-cdn-加速",tabindex:"-1"},[t("反向代理和 CDN 加速 "),a("a",{class:"header-anchor",href:"#反向代理和-cdn-加速","aria-label":'Permalink to "反向代理和 CDN 加速"'},"​")],-1),T=a("p",null,"在对数据库做读写分离以后，要想更进一步增加系统的处理能力，需要使用反向代理和 CDN 加速，如下图所示。",-1),V=a("p",null,"所谓的 CDN 是指距离用户最近的一个服务器，当访问一个互联网应用的时候，我们的访问请求并不是直接到达互联网站的数据中心的，而是通过运营服务商进行数据转发的。那么在进行数据转发的时候，最好已经有我们想要访问的数据，这样就不需要访问互联网数据中心了。这个服务就叫作 CDN 服务。",-1),M=a("p",null,"CDN 服务就是部署在网络运营商机房里的离用户最近的一个服务器，用户请求先到这里查询有没有用户需要的数据，如果有，就从 CDN 直接返回，如果没有，再通过 CDN 进一步访问网站的数据中心，得到数据后再缓存到 CDN 供其他用户访问或下一次访问，所以 CDN 的本质还是一个缓存。",-1),S=a("p",null,"用户请求到达网站的数据中心后，也不是直接请求应用服务器，依然是查找一次缓存，这个缓存叫作反向代理服务器。",-1),B=a("p",null,"反向代理服务器是指通过反向代理的方式代理整个网站的请求服务，先在反向代理服务器中查找是否有用户请求的数据，如果有，就从反向代理服务器直接返回；如果没有，再去请求应用服务器。通过这样的 CDN 和反向代理两级缓存，可以返回绝大部分用户请求的网络数据，极大地减少应用服务器的负载压力，提升服务器数据中心的处理能力，响应更多的用户并发处理请求。",-1),I=a("h6",{id:"分布式文件系统和分布式数据库系统",tabindex:"-1"},[t("分布式文件系统和分布式数据库系统 "),a("a",{class:"header-anchor",href:"#分布式文件系统和分布式数据库系统","aria-label":'Permalink to "分布式文件系统和分布式数据库系统"'},"​")],-1),O=a("p",null,"更进一步思考，虽然 CDN 和反向代理已经缓存了大量的用户数据，返回了大量的用户请求，但是随着用户量的增加，还是有很多的用户请求会到达数据中心。这个时候文件系统和数据库系统依然会成为瓶颈点。",-1),F=a("p",null,"那么如何解决这个瓶颈点？解决方案主要是分布式的文件系统和分布式的数据库系统。如下图所示。",-1),L=a("p",null,"所谓的分布式文件系统就是通过一组服务器集群统一对外提供文件服务。像淘宝的商品图片服务以及 Facebook 这样的相册服务，每天都有大量的用户上传大量的图片，那么如何管理这些海量的文件图片？这就要使用一个分布式的文件服务器系统。",-1),R=a("p",null,"随着数据量逐渐增加，前面讲的主从数据库也不能够承受这么大的访问压力和存储容量要求，那么就需要对数据库做进一步水平伸缩，使用分布式的数据库。即通过数据分片的方式，将一张表的数据分布在多个物理服务器上，以减少单一数据库的服务器访问压力。通过这样的手段可以进一步提升系统的处理能力。",-1),U=a("h6",{id:"消息队列与分布式服务",tabindex:"-1"},[t("消息队列与分布式服务 "),a("a",{class:"header-anchor",href:"#消息队列与分布式服务","aria-label":'Permalink to "消息队列与分布式服务"'},"​")],-1),Q=a("p",null,"最后，随着用户量进一步增加，要想实现更强大的计算处理能力，可以使用的技术手段有分布式消息队列服务、搜索引擎和 NoSQL，以及通过分布式服务，将可复用的业务分离开来，部署在不同的服务器集群上。",-1),Y=a("p",null,"用户量增加，除了意味着用户对系统的访问压力增加，还伴随着业务复杂度增加。使用分布式消息队列和分布式的服务，主要解决的就是业务增加时系统的复杂度问题。如下图所示。",-1),G=l("",8);function H(J,W,Z,$,v,j){const e=s("Image");return n(),h("div",null,[r,o(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/A5/1E/CgotOV3CmD2AMacBAAA0oh5F6VU837.png"}),t(),_,p,d,o(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/A4/FE/CgoB5l3CmD2ABaWYAAEX_mftkMY948.png"}),t(),m,u,A,g,o(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/A4/FE/CgoB5l3CmD2AeSRpAABHO_bTqNE122.png"}),t(),b,o(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/A5/1E/CgotOV3CmD6AKRcaAACenjL209A164.png"}),t(),C,P,f,o(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/A4/FE/CgoB5l3CmD6AOEZVAABaeSGKaEA198.png"}),t(),q,o(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/A5/1E/CgotOV3CmD6AH38UAABbcygMlJ4802.png"}),t(),D,k,N,o(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/A4/FE/CgoB5l3CmD-AHQpjAARLZMw6qLA045.png"}),t(),x,E,T,o(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/A5/1E/CgotOV3CmD-AHLZiAATtWWZkrPg912.png"}),t(),V,M,S,B,I,O,F,o(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/A4/FE/CgoB5l3CmD-ANwLJAATrecWoQMY588.png"}),t(),L,R,U,Q,Y,o(e,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/A5/1E/CgotOV3CmECANzBPAAb6gRmDIYU050.png"}),t(),G])}const y=i(c,[["render",H]]);export{K as __pageData,y as default};
