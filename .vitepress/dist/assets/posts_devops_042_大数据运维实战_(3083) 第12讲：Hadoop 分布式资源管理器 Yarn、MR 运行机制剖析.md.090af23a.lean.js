import{_ as o,D as e,o as t,g as r,J as p,h as a,m as s,Q as l}from"./chunks/framework.f67d7268.js";const b=JSON.parse('{"title":"第12讲：Hadoop分布式资源管理器Yarn、MR运行机制剖析","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/042_大数据运维实战/(3083) 第12讲：Hadoop 分布式资源管理器 Yarn、MR 运行机制剖析.md","filePath":"posts/devops/042_大数据运维实战/(3083) 第12讲：Hadoop 分布式资源管理器 Yarn、MR 运行机制剖析.md","lastUpdated":1696682708000}'),c={name:"posts/devops/042_大数据运维实战/(3083) 第12讲：Hadoop 分布式资源管理器 Yarn、MR 运行机制剖析.md"},y=s("h1",{id:"第12讲-hadoop分布式资源管理器yarn、mr运行机制剖析",tabindex:"-1"},[a("第12讲：Hadoop分布式资源管理器Yarn、MR运行机制剖析 "),s("a",{class:"header-anchor",href:"#第12讲-hadoop分布式资源管理器yarn、mr运行机制剖析","aria-label":'Permalink to "第12讲：Hadoop分布式资源管理器Yarn、MR运行机制剖析"'},"​")],-1),E=s("p",null,"本课时主要剖析 Hadoop 分布式资源管理器 Yarn 和 MR 运行机制。",-1),i=s("h3",{id:"yarn-的整体架构",tabindex:"-1"},[a("Yarn 的整体架构 "),s("a",{class:"header-anchor",href:"#yarn-的整体架构","aria-label":'Permalink to "Yarn 的整体架构"'},"​")],-1),d=s("p",null,"Yarn 是 Hadoop2.x 版本提出的一种全新的资源管理架构，此架构不仅支持 MapReduce 计算，还方便管理，比如 HBase、Spark、Storm、Tez/Impala 等应用。这种新的架构设计能够使各种类型的计算引擎运行在 Hadoop 上面，并通过 Yarn 从系统层面进行统一的管理。也就是说，通过 Yarn 资源管理器，各种应用就可以互不干扰地运行在同一个 Hadoop 系统中了，来共享整个集群资源。",-1),F=s("p",null,[a("Yarn 的架构设计基于"),s("strong",null,"主从（Master-Slave）模式"),a("，主要由 ResourceManager（RM）和NodeManager（NM）两大部分组成。除此之外，还有 ApplicationMaster（AM）、Application Manager、Scheduler 及 Container 等组件辅助实现所有功能。")],-1),A=s("p",null,"Yarn 的基本架构如下图所示：",-1),C=l("",30),D=l("",13),h=l("",8),u=l("",26);function g(_,M,v,m,N,Y){const n=e("Image");return t(),r("div",null,[y,E,i,d,F,A,p(n,{alt:"1.png",src:"https://s0.lgstatic.com/i/image/M00/19/3A/CgqCHl7aDLOAbvmyAAEkxIivjh4535.png"}),a(),C,p(n,{alt:"2.png",src:"https://s0.lgstatic.com/i/image/M00/19/3A/CgqCHl7aDMKADJ7yAANXiOOOkUE459.png"}),a(),D,p(n,{alt:"image3.png",src:"https://s0.lgstatic.com/i/image/M00/19/04/Ciqc1F7Z5AeARCrmAAF9NAhxDlw904.png"}),a(),h,p(n,{alt:"image3.png",src:"https://s0.lgstatic.com/i/image/M00/19/10/CgqCHl7Z5DWAXBPTAAF9NAhxDlw433.png"}),a(),u])}const R=o(c,[["render",g]]);export{b as __pageData,R as default};
