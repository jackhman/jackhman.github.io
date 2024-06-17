import{_ as k,F as n,g as l,K as t,h as i,ar as e,l as a,o as p}from"./chunks/framework.VlluEs-f.js";const U=JSON.parse('{"title":"第19讲：Kafka应用场景、集群容量规划、架构设计应用案例","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/042_大数据运维实战/(3090) 第19讲：Kafka 应用场景、集群容量规划、架构设计应用案例.md","filePath":"posts/devops/042_大数据运维实战/(3090) 第19讲：Kafka 应用场景、集群容量规划、架构设计应用案例.md","lastUpdated":1718371218000}'),r={name:"posts/devops/042_大数据运维实战/(3090) 第19讲：Kafka 应用场景、集群容量规划、架构设计应用案例.md"},h=e("",10),o=e("",28),d=e("",11),c=a("p",null,"（2）创建一个 topic，并指定 topic 属性（副本数、分区数等）",-1),g=a("p",null,"命令执行方式如下图所示：",-1),f=a("p",null,"其中：",-1),E=a("ul",null,[a("li",null,[a("p",null,"--create 表示创建一个 topic；")]),a("li",null,[a("p",null,"--replication-factor 表示这个 topic 的副本数，这里设置为 1 个；")]),a("li",null,[a("p",null,"--partitions 指定 topic 的分区数，一般设置为小于或等于 Kafka 集群节点数即可；")]),a("li",null,[a("p",null,"--topic 指定要创建的 topic 名称。")])],-1),u=a("p",null,"（3）查看某个 topic 的状态",-1),_=a("p",null,"命令执行方式如下图所示：",-1),y=a("p",null,'这里通过"--describe"选项查看刚刚创建好的 testtopic 状态，其中：',-1),K=a("ul",null,[a("li",null,[a("p",null,"Partition 表示分区 ID，通过输出可以看到 testtopic 有三个分区、一个副本，这刚好和我们创建 testtopic 时指定的配置吻合；")]),a("li",null,[a("p",null,"Leader 表示当前负责读写的 Leader broker；")]),a("li",null,[a("p",null,"Replicas 表示当前分区所有副本对应的 broker列表；")]),a("li",null,[a("p",null,"Isr 表示处于活动状态的 broker。")])],-1),C=a("p",null,"（4）生产消息",-1),m=a("p",null,"命令执行方式如下图所示：",-1),b=a("p",null,'这里需要注意，"--broker-list"后面跟的内容是 Kafka 集群的 IP 和端口，当输入这条命令后，光标处于可写状态，接着就可以写入一些测试数据，每行一条。这里输入的内容如上图红框所示。',-1),P=a("p",null,"（5）消费消息",-1),F=a("p",null,"在生产消息的同时，再登录任意一台 Kafka 集群节点，执行消费消息的命令，结果如下图所示：",-1),A=a("p",null,"可以看到，在第四步中，输入的消息在这里原样输出了，这样就完成了消息的消费。",-1),B=a("p",null,"（6）删除 topic",-1),D=a("p",null,"命令执行方式如下图所示：",-1),q=a("p",null,'注意这里的"--delete"选项，用来删除一个指定的 topic。然后通过"--list"查看发现这个 topic 确实已经被删除了。',-1),v=a("h3",{id:"总结",tabindex:"-1"},[i("总结 "),a("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),x=a("p",null,"本课时主要讲解了 Kafka 的概念、术语及 Kafka 分布式集群的构建，最后介绍了 Kafka 的基本操作指令，要熟练使用 Kafka，重要的是了解其内部实现机制及运行原理。Kafka 作为一个消息中间件，在集群架构环境中经常使用，特别是在大数据架构环境中。因此，对于本课时介绍的 Kafka 知识点要求熟练掌握。",-1);function T(z,I,S,Z,V,M){const s=n("Image");return p(),l("div",null,[h,t(s,{alt:"2.png",src:"https://s0.lgstatic.com/i/image/M00/29/9F/CgqCHl767x6AXxk3AAKplkX7pcA534.png"}),i(),o,t(s,{alt:"1.png",src:"https://s0.lgstatic.com/i/image/M00/29/93/Ciqc1F767vWAd94AAAPqcj_UCiU303.png"}),i(),d,t(s,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/29/09/Ciqc1F75zUGAYfoiAABCAUEAIlY280.png"}),i(),c,g,t(s,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/29/09/Ciqc1F75zUqAKe83AABSjfkpAhc990.png"}),i(),f,E,u,_,t(s,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/29/14/CgqCHl75zVOAEBvZAABcNUxHq34583.png"}),i(),y,K,C,m,t(s,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/29/09/Ciqc1F75zWCALnmeAABJGSilU-I224.png"}),i(),b,P,F,t(s,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/29/14/CgqCHl75zWmAYn6KAABJjpXJyzc277.png"}),i(),A,B,D,t(s,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/29/09/Ciqc1F75zW-ABZUcAABRh9IDyZQ707.png"}),i(),q,v,x])}const j=k(r,[["render",T]]);export{U as __pageData,j as default};
