import{_ as n,F as e,g as h,K as i,h as a,ar as t,l as k,o as l}from"./chunks/framework.VlluEs-f.js";const u=JSON.parse('{"title":"加餐4：trace-receiver插件番外篇——慢查询的处理","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(3679) 加餐4：trace-receiver 插件番外篇——慢查询的处理.md","filePath":"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(3679) 加餐4：trace-receiver 插件番外篇——慢查询的处理.md","lastUpdated":1718371218000}'),p={name:"posts/backEnd/098-讲带你搞懂 SkyWalking文档/(3679) 加餐4：trace-receiver 插件番外篇——慢查询的处理.md"},r=t("",8),E=t("",6),d=k("p",null,"在 TopNWorker.onWorker() 方法中会将 TopNDatabaseStatement 暂存到 LimitedSizeDataCache 中进行排序。LimitedSizeDataCache 使用双队列模式，继承了 Windows 抽象类，与前文介绍的 MergeDataCache 类似。LimitedSizeDataCache 底层的队列实现是 LimitedSizeDataCollection，其 data 字段（Map 类型）中维护了每个存储服务的慢查询（即 TopNDatabaseStatement）列表，每个列表都是定长的（由 limitedSize 字段指定，默认 50），在调用 limitedSizeDataCollection.put() 方法写入的时候会按照 latency 从大到小排列，并只保留最多 50 个元素，如下图所示：",-1),g=t("",12);function c(y,o,F,D,A,m){const s=e("Image");return l(),h("div",null,[r,i(s,{alt:"image",src:"https://s0.lgstatic.com/i/image/M00/20/59/CgqCHl7oY-2AXRtrAAFtUKJ2T34195.png"}),a(),E,i(s,{alt:"image",src:"https://s0.lgstatic.com/i/image/M00/20/4D/Ciqc1F7oZASAZ822AAEjgROFXtk196.png"}),a(),d,i(s,{alt:"image",src:"https://s0.lgstatic.com/i/image/M00/20/4D/Ciqc1F7oZCCAdh83AAKfFxpviaQ344.png"}),a(),g])}const S=n(p,[["render",c]]);export{u as __pageData,S as default};
