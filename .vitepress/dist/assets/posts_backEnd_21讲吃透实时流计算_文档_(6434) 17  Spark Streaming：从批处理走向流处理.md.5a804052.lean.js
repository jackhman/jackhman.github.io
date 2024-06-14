import{_ as o,D as e,o as r,g as l,J as n,h as s,Q as t,m as a}from"./chunks/framework.f67d7268.js";const C=JSON.parse('{"title":"17SparkStreaming：从批处理走向流处理","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/21讲吃透实时流计算_文档/(6434) 17  Spark Streaming：从批处理走向流处理.md","filePath":"posts/backEnd/21讲吃透实时流计算_文档/(6434) 17  Spark Streaming：从批处理走向流处理.md","lastUpdated":1696682708000}'),c={name:"posts/backEnd/21讲吃透实时流计算_文档/(6434) 17  Spark Streaming：从批处理走向流处理.md"},i=t("",8),S=a("p",null,"从上面的图 1 可以看出，当 Spark Streaming 接收到流数据时，先是将其切分成一个个的 RDD（Resilient Distributed Datasets，弹性分布式数据集），每个 RDD 实际是一个小的块数据。然后，这些 RDD 块数据再由 Spark 引擎进行各种处理。最后，处理完的结果同样是以一个个的 RDD 块数据依次输出。",-1),E=a("p",null,[s("所以，"),a("strong",null,"Spark Streaming 本质上是将流数据分成一段段块数据后，进行连续不断地批处理"),s("。")],-1),y=a("h3",{id:"流的描述",tabindex:"-1"},[s("流的描述 "),a("a",{class:"header-anchor",href:"#流的描述","aria-label":'Permalink to "流的描述"'},"​")],-1),g=a("p",null,"接下来，我们就来看看在 Spark Streaming 中如何描述一个流计算过程。",-1),m=a("p",null,'由于 Spark Streaming 是构建在 Spark 之上，而 Spark 的核心是一个针对 RDD 块数据做批处理的执行引擎。所以 Spark Streaming 在描述流时，采用了"模版"的概念。具体如下图 2 所示。',-1),u=t("",39);function d(D,k,h,_,F,A){const p=e("Image");return r(),l("div",null,[i,n(p,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M01/20/52/CioPOWBS_7eAXRqXAAGiz_WNEU8237.png"}),s(),S,E,y,g,m,n(p,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image6/M00/20/52/CioPOWBS_-6Aa4RJAAJLOFofOxM909.png"}),s(),u,n(p,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image6/M00/20/52/CioPOWBTABeAf-AEABKJEPt9vJE024.png"})])}const v=o(c,[["render",d]]);export{C as __pageData,v as default};
