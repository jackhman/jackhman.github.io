import{_ as r,F as d,g as i,K as p,h as o,ar as t,l as a,o as s}from"./chunks/framework.VlluEs-f.js";const D=JSON.parse('{"title":"第01讲：大话Hadoop生态圈","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/042_大数据运维实战/(3076) 第01讲：大话 Hadoop 生态圈.md","filePath":"posts/devops/042_大数据运维实战/(3076) 第01讲：大话 Hadoop 生态圈.md","lastUpdated":1718371218000}'),n={name:"posts/devops/042_大数据运维实战/(3076) 第01讲：大话 Hadoop 生态圈.md"},l=t("",36),u=a("p",null,"可以看出，Hadoop 的基础是 HDFS 和 Yarn，在此基础上有各种计算模型，如 MapReduce、Spark、HBase 等；而在计算模型上层，对应的是各种分布式计算辅助工具，如 Hive、Pig、Sqoop 等。此外，还有分布式协作工作 ZooKeeper 以及日志收集工具 Flume，这么多工具如何协作使用呢？这就是任务调度层 Oozie 的存在价值，它负责协调任务的有序执行。最顶层是 Hadoop 整个生态圈的统一管理工具，Ambari 可以为 Hadoop 以及相关大数据软件使用提供更多便利。",-1),h=a("p",null,"下面我来依次介绍图中的技术点。",-1),c=a("h4",{id:"_1-hdfs-hadoop-分布式文件系统",tabindex:"-1"},[o("1. HDFS（Hadoop 分布式文件系统） "),a("a",{class:"header-anchor",href:"#_1-hdfs-hadoop-分布式文件系统","aria-label":'Permalink to "1. HDFS（Hadoop 分布式文件系统）"'},"​")],-1),H=a("p",null,"HDFS 是 Hadoop 生态圈中提供分布式存储支持的系统，上层的很多计算框架（Hbase、Spark 等）都依赖于 HDFS 存储。",-1),_=a("p",null,"若要构建 HDFS 文件系统，不需要特有的服务器，普通 PC 即可实现，它对硬件和磁盘没有任何特殊要求，也就是说，HDFS 可在低成本的通用硬件上运行。前面的介绍中，我们也看到了，它不但解决了海量数据存储问题，还解决了数据安全问题。",-1),q=a("p",null,"为了更好的理解它的作用，我们来看一个 HDFS 分布式文件系统的实现原理图：",-1),S=t("",62);function g(m,b,M,k,P,f){const e=d("Image");return s(),i("div",null,[l,p(e,{alt:"1.png",src:"https://s0.lgstatic.com/i/image3/M01/17/0F/Ciqah16mvyuACRYUAACAnEWgFL4136.png"}),o(),u,h,c,H,_,q,p(e,{alt:"2.png",src:"https://s0.lgstatic.com/i/image3/M01/0A/26/CgoCgV6nkPCAaVr2AAECSNxf0RQ072.png"}),o(),S])}const F=r(n,[["render",g]]);export{D as __pageData,F as default};
