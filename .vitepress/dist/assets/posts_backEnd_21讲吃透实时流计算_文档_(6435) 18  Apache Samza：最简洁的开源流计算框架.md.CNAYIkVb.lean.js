import{_ as p,F as h,g as k,K as t,h as s,ar as n,l as a,o as e}from"./chunks/framework.VlluEs-f.js";const K=JSON.parse('{"title":"18ApacheSamza：最简洁的开源流计算框架","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/21讲吃透实时流计算_文档/(6435) 18  Apache Samza：最简洁的开源流计算框架.md","filePath":"posts/backEnd/21讲吃透实时流计算_文档/(6435) 18  Apache Samza：最简洁的开源流计算框架.md","lastUpdated":1718371218000}'),l={name:"posts/backEnd/21讲吃透实时流计算_文档/(6435) 18  Apache Samza：最简洁的开源流计算框架.md"},r=n("",9),E=n("",7),o=a("p",null,"图 2 一个描述 join 操作的 Samza 作业",-1),g=a("p",null,[a("strong",null,"再然后是 Partition（分区）"),s("。Samza 的流和分区很明显是继承自 Kafka 的概念。当然 Sazma 也对这两个概念进行了抽象和泛化。Samza 的流被切分成了一个或多个分区，每个分区都是一个有序的消息序列。")],-1),d=a("p",null,[a("strong",null,"接下来是 Task（任务）"),s("。Samza 作业又被切分为一个或多个任务。任务是作业并行化执行的单元，就像分区是流的并行化单元一样。每个任务负责处理流的一个或多个分区。通过 YARN 等资源调度器，任务被分布到 YARN 集群中的多个节点上运行，并且所有的任务彼此之间都是完全独立运行的。如果某个任务在运行时发生故障退出了，它会被 YARN 在另外的地方重启，并继续处理与之前相同的分区。")],-1),c=a("p",null,[a("strong",null,"再接下来是"),s("Dataflow Graphs（数据流图）。将多个作业组合起来可以创建一个数据流图。数据流图描述了 Samza 流计算应用构成的整个系统的拓扑结构，它的边代表了数据流向，而节点代表了执行流转化操作的作业。")],-1),m=a("p",null,"与 Storm 中 Topology 不同的是，数据流图中包含的各个作业并不要求一定是在同一个 Samza 应用程序中，数据流图可以是由多个不同的 Samza 应用程序共同构成，并且不同的 Samza 应用程序之间不会彼此相互影响。",-1),S=a("p",null,"在后面我们还会介绍 StreamApplication，需要注意 StreamApplication 和数据流图的不同之处。图 3 就展示了同样的数据流图，使用不同 StreamApplication 组合实现的例子。",-1),y=n("",44);function F(A,u,_,z,D,C){const i=h("Image");return e(),k("div",null,[r,t(i,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image6/M01/20/56/Cgp9HWBTAICAQKcbAADaTiM90DM832.png"}),s(),E,t(i,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M01/20/56/Cgp9HWBTAJWAOCvNAAGd5xWqg8s797.png"}),s(),o,g,d,c,m,S,t(i,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image6/M01/20/53/CioPOWBTAJ6APec7AAW1YATqB_E870.png"}),s(),y,t(i,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image6/M00/20/56/Cgp9HWBTAM-Aak0MAA15MLW0GdY079.png"})])}const B=p(l,[["render",F]]);export{K as __pageData,B as default};
