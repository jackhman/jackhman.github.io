import{_ as p,D as n,o as l,g as s,J as o,h as t,m as a,Q as i}from"./chunks/framework.f67d7268.js";const M=JSON.parse('{"title":"01实时流计算的通用架构","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/21讲吃透实时流计算_文档/(6418) 01  实时流计算的通用架构.md","filePath":"posts/backEnd/21讲吃透实时流计算_文档/(6418) 01  实时流计算的通用架构.md","lastUpdated":1696682708000}'),r={name:"posts/backEnd/21讲吃透实时流计算_文档/(6418) 01  实时流计算的通用架构.md"},c=a("h1",{id:"_01实时流计算的通用架构",tabindex:"-1"},[t("01实时流计算的通用架构 "),a("a",{class:"header-anchor",href:"#_01实时流计算的通用架构","aria-label":'Permalink to "01实时流计算的通用架构"'},"​")],-1),_=a("p",null,"为什么把本课时作为第一课时呢？因为通过本课时，你将构建起对流计算技术和系统的整体认识，这样既可以为后面的课时打下基础，又可以对设计和开发实时流计算应用有所启发。",-1),h=a("p",null,"任何一个系统的产生，都是为了解决一个具体的问题。实时流计算技术的诞生，就是为了更快更完整地获取数据，更快更充分地挖掘出数据价值。",-1),u=a("p",null,"我们不妨先来看看几个实时流计算技术的应用场景。根据这些场景，我们可以大体上知道它的通用架构。",-1),g=a("h3",{id:"实时流计算技术应用场景",tabindex:"-1"},[t("实时流计算技术应用场景 "),a("a",{class:"header-anchor",href:"#实时流计算技术应用场景","aria-label":'Permalink to "实时流计算技术应用场景"'},"​")],-1),d=a("p",null,"图 1 是某打车软件公司交通热点路段分析及可视化系统的示意图。",-1),m=a("p",null,"在这个系统中，从车载设备上发出的数据，被一个基于 Kafka API 的数据采集模块接收，然后发送到 Spark Streaming 模块进行处理，并且还使用机器学习模型进行分析，然后分析的结果以 JSON 的形式存储到数据库中，并提供给可视化模块进行展示和分析。",-1),A=a("p",null,"我们再来看另一个金融风控的例子。图 2 是一个基于 Flink 的实时欺诈检测平台。",-1),E=a("p",null,"在这个平台中，从手机等各种支付渠道产生的交易数据，被数据采集服务器收集起来，并发送到Kafka。然后 Flink 从 Kafka 中将交易数据取出来，采用基于机器学习的风控模型，进行风险分析和评估。然后分析的结果再次发送到 Kafka，后续支付网关就可以根据这些交易的欺诈风险等级，来允许或阻止交易进行。",-1),k=a("h3",{id:"实时流计算系统通用架构",tabindex:"-1"},[t("实时流计算系统通用架构 "),a("a",{class:"header-anchor",href:"#实时流计算系统通用架构","aria-label":'Permalink to "实时流计算系统通用架构"'},"​")],-1),b=a("p",null,[t("比较上面两个场景的流计算系统组成，我们不难发现这些系统，都包含了五个部分："),a("strong",null,"数据采集、数据传输、数据处理、数据存储和数据展现"),t("。")],-1),f=a("p",null,"事实上，也正是这五个部分，构成了一般通用的实时流计算系统，它们之间的组成关系如下图 3 所示。",-1),S=i("",49),q=a("hr",null,null,-1),P=a("p",null,"[",-1),I=a("p",null,[t("]("),a("a",{href:"https://kaiwu.lagou.com/data_enhancement.html?utm_source=lagouedu&utm_medium=zhuanlan&utm_campaign=%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%BC%80%E5%8F%91%E9%AB%98%E8%96%AA%E8%AE%AD%E7%BB%83%E8%90%A5#/index",target:"_blank",rel:"noreferrer"},"https://kaiwu.lagou.com/data_enhancement.html?utm_source=lagouedu&utm_medium=zhuanlan&utm_campaign=大数据开发高薪训练营#/index"),t(")"),a("br"),a("a",{href:"https://kaiwu.lagou.com/data_enhancement.html?utm_source=lagouedu&utm_medium=zhuanlan&utm_campaign=%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%BC%80%E5%8F%91%E9%AB%98%E8%96%AA%E8%AE%AD%E7%BB%83%E8%90%A5#/index",target:"_blank",rel:"noreferrer"},"PB 级企业大数据项目实战 + 拉勾硬核内推，5 个月全面掌握大数据核心技能。点击链接，全面赋能！")],-1);function B(C,T,K,N,O,x){const e=n("Image");return l(),s("div",null,[c,_,h,u,g,d,o(e,{alt:"image (1).png",src:"https://s0.lgstatic.com/i/image/M00/92/A7/Ciqc1GASZq-AFoOhAALuTepPkhc746.png"}),t(),m,A,o(e,{alt:"image (2).png",src:"https://s0.lgstatic.com/i/image/M00/92/B2/CgqCHmASZriATTpgAAKiBqlq-aA125.png"}),t(),E,k,b,f,o(e,{alt:"image (3).png",src:"https://s0.lgstatic.com/i/image/M00/92/B2/CgqCHmASZsOAUvzHAADH5ndi2QM282.png"}),t(),S,o(e,{alt:"image (1).png",src:"https://s0.lgstatic.com/i/image/M00/92/A7/Ciqc1GASZwKAezT8AA7DKwS19R4652.png"}),t(),q,P,o(e,{alt:"image (3).png",src:"https://s0.lgstatic.com/i/image2/M01/0C/98/CgpVE2AZCKKAa8TbAAUCrlmIuEw611.png"}),t(),I])}const R=p(r,[["render",B]]);export{M as __pageData,R as default};
