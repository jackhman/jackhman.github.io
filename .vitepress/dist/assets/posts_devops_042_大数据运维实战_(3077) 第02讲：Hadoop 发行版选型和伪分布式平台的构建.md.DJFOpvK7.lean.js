import{_ as t,F as n,g as k,K as a,h as s,ar as h,l as p,o as l}from"./chunks/framework.VlluEs-f.js";const S=JSON.parse('{"title":"第02讲：Hadoop发行版选型和伪分布式平台的构建","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/042_大数据运维实战/(3077) 第02讲：Hadoop 发行版选型和伪分布式平台的构建.md","filePath":"posts/devops/042_大数据运维实战/(3077) 第02讲：Hadoop 发行版选型和伪分布式平台的构建.md","lastUpdated":1718371218000}'),e={name:"posts/devops/042_大数据运维实战/(3077) 第02讲：Hadoop 发行版选型和伪分布式平台的构建.md"},E=h("",12),d=h("",7),r=h("",29),o=h("",7),g=h("",8),y=h("",13),c=h("",7),F=h("",9),D=h("",49),A=p("p",null,'从图中可以清晰的看出，执行任务的 ID 名、执行任务的用户、程序名、任务类型、队列、优先级、启动时间、完成时间、最终状态等信息。从运维角度来说，这个页面有很多信息都需要引起关注，比如任务最终状态是否有失败的，如果有，可以点击倒数第二列"Tracking UI"下面的 History 链接查看日志进行排查问题。',-1),u=p("p",null,"Namenode 的 Web 页面和 ResourceManager 的 Web 页面在进行大数据运维工作中，经常会用到，这些 Web 界面主要用来状态监控、故障排查，更多使用细节和技巧，后面课时会做更加详细的介绍。",-1),v=p("h3",{id:"小结",tabindex:"-1"},[s("小结 "),p("a",{class:"header-anchor",href:"#小结","aria-label":'Permalink to "小结"'},"​")],-1),C=p("p",null,"怎么样，现在可以感受到 Hadoop 集群的应用场景了吧！虽然本课时介绍的是伪分别式环境，但与真实的完全分布式 Hadoop 环境实现的功能完全一样。上面的例子中我只是统计了一个小文本中单词的数量，你可能会说，这么点数据，手动几秒钟就算出来了，真没看到分布式计算有什么优势。没错，在小量数据环境中，使用 Yarn 分析是没有意义的，而如果你有上百 GB 甚至 TB 级别的数据时，就能深刻感受到分布式计算的威力了。但有一点请注意，不管数据量大小，分析的方法都是一样的，所以，你可以按照上面执行 wordcount 的方法去读取 GB 甚至 TB 级别的数据。",-1);function m(H,_,b,f,B,x){const i=n("Image");return l(),k("div",null,[E,a(i,{alt:"1.png",src:"https://s0.lgstatic.com/i/image/M00/00/F4/CgqCHl6qvImAddQkAADd9uJZm7c786.png"}),s(),d,a(i,{alt:"2.png",src:"https://s0.lgstatic.com/i/image/M00/00/F4/CgqCHl6qvLqAFucIAADw0F70qQU286.png"}),s(),r,a(i,{alt:"3.png",src:"https://s0.lgstatic.com/i/image/M00/00/F4/CgqCHl6qvUmABT4CAAEJKFoZOco427.png"}),s(),o,a(i,{alt:"4.png",src:"https://s0.lgstatic.com/i/image/M00/00/F4/CgqCHl6qvYyAO4ovAAEVE9kN8xY217.png"}),s(),g,a(i,{alt:"image1.png",src:"https://s0.lgstatic.com/i/image/M00/00/F4/CgqCHl6qvauAJDJBAAEI3H31odc585.png"}),s(),y,a(i,{alt:"image2.png",src:"https://s0.lgstatic.com/i/image/M00/00/F4/Ciqc1F6qvdiAcx1fAAEELGkVn3g251.png"}),s(),c,a(i,{alt:"image3.png",src:"https://s0.lgstatic.com/i/image/M00/00/F5/Ciqc1F6qvfKAGW9fAAGSrA9yJ0s930.png"}),s(),F,a(i,{alt:"image4.png",src:"https://s0.lgstatic.com/i/image/M00/00/F5/CgqCHl6qvhSAZhOZAAEaRsNStmg076.png"}),s(),D,a(i,{alt:"image5.png",src:"https://s0.lgstatic.com/i/image/M00/00/F5/Ciqc1F6qvuSAdk0yAAGEDVAOIY0370.png"}),s(),A,u,v,C])}const M=t(e,[["render",m]]);export{S as __pageData,M as default};
