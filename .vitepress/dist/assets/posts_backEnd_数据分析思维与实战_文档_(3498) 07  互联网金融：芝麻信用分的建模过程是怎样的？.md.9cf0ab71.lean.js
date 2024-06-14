import{_ as e,D as o,o as _,g as s,J as i,h as p,Q as t,m as a}from"./chunks/framework.f67d7268.js";const N=JSON.parse('{"title":"07互联网金融：芝麻信用分的建模过程是怎样的？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/数据分析思维与实战_文档/(3498) 07  互联网金融：芝麻信用分的建模过程是怎样的？.md","filePath":"posts/backEnd/数据分析思维与实战_文档/(3498) 07  互联网金融：芝麻信用分的建模过程是怎样的？.md","lastUpdated":1696682708000}'),n={name:"posts/backEnd/数据分析思维与实战_文档/(3498) 07  互联网金融：芝麻信用分的建模过程是怎样的？.md"},r=t("",12),c=a("p",null,"关键词为数据源、信用评分卡模型、模型上线监控维护、其他数据挖掘。与其他行业数据分析师差异比较大的是数据源，因为互联网金融行业很多时候要规避风险，怎么去规避风险呢？基于大数据，所以数据源越多越好，因此数据建模师平时要与其他公司进行数据合作或数据采购。",-1),h=a("p",null,"总地来说，数据建模师偏算法，但要很懂业务，不是纯算法分析师。",-1),d=a("h3",{id:"授信模型",tabindex:"-1"},[p("授信模型 "),a("a",{class:"header-anchor",href:"#授信模型","aria-label":'Permalink to "授信模型"'},"​")],-1),g=a("p",null,"接下来我重点说一下授信模型。模型具体是什么呢？以芝麻信用分来为例，如下图所示。",-1),A=t("",5),u=t("",11),m=a("p",null,"可以看出它的相关性均在 0.7 以上，一般 0.7 以上是高度相关性，所以我们在后面建模的时候只保留一个（比如最近 1 年母婴消费金额）即可。其他三个变量先不要放在模型训练里，这就是相关性过滤。相关性过滤实非常简单，但确实很实用。",-1),T=a("p",null,"再看字符型字段的离散化例子。",-1),q=a("p",null,"问题：身份特质中你的学历是博士，请问如何处理这个字段？",-1),b=a("p",null,"一般对字符型字段都是采用专家打分法，如下图所示。",-1),C=t("",9),P=a("p",null,"以历史信用为例，假设该维度包含的字段有最近一个月主动查询金融机构信用次数 x1，最近一个月需还贷总额 x2，最近一个月逾期总额 x3。",-1),f=a("p",null,[a("strong",null,"那么其违约概率就是如下公式：")],-1),S=t("",12),k=t("",25);function x(I,V,w,D,M,B){const l=o("Image");return _(),s("div",null,[r,i(l,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/25/A3/Ciqc1F7wjUiAdbcSAAvVSpcfF_0181.png"}),p(),c,h,d,g,i(l,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/25/A3/Ciqc1F7wjVCANIyLAAEJMLWGA-0452.png"}),p(),A,i(l,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/25/AF/CgqCHl7wjVqAROg5AAIw2LeGk6s497.png"}),p(),u,i(l,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/25/A3/Ciqc1F7wjWmAQ1kIAAB3JdsLrjg936.png"}),p(),m,T,q,b,i(l,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/25/A4/Ciqc1F7wjXOAUHpMAAAueRy2vEM596.png"}),p(),C,i(l,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/25/AF/CgqCHl7wjX6AHKUbAAB00oIiiRo902.png"}),p(),P,f,i(l,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/25/A4/Ciqc1F7wjYaAdnK9AAAUAPSiLp8718.png"}),p(),S,i(l,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image/M00/25/B0/CgqCHl7wjbOAAItHAABYOBq-4sE977.png"}),p(),k])}const R=e(n,[["render",x]]);export{N as __pageData,R as default};
