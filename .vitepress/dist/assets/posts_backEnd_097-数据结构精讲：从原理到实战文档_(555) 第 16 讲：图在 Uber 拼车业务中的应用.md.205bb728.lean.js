import{_ as l,D as o,o as p,g as t,J as a,h as n,Q as r,m as s}from"./chunks/framework.f67d7268.js";const V=JSON.parse('{"title":"第16讲：图在Uber拼车业务中的应用","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/097-数据结构精讲：从原理到实战文档/(555) 第 16 讲：图在 Uber 拼车业务中的应用.md","filePath":"posts/backEnd/097-数据结构精讲：从原理到实战文档/(555) 第 16 讲：图在 Uber 拼车业务中的应用.md","lastUpdated":1696682708000}'),i={name:"posts/backEnd/097-数据结构精讲：从原理到实战文档/(555) 第 16 讲：图在 Uber 拼车业务中的应用.md"},c=r("",17),_=r("",25),d=s("br",null,null,-1),b=s("p",null,"如图中所示，如果我们用图来建模拼车系统的话，则可以把乘客的起点和终点都看作是图中的节点，这个图中边的权重可以被认为是开车的时间。一个最优的拼车订单，是找到一个连接至少 2 个乘客的起点和终点的几条边，并且这几条边的组合权重之和相比乘客的数量是图中最小的。这是一个经典的 NP 难题，只能用 n 的多项式时间来完成。",-1),h=s("br",null,null,-1),g=s("p",null,[n("Uber 的工程师在原先的贪心算法上加了一个改进的方案，称为"),s("strong",null,"路线切换"),n("。")],-1),E=s("br",null,null,-1),A=s("p",null,"其实路线切换很简单，可以说是一个讨巧的办法。它是利用上面的贪心算法找到局部最优，然后再利用司机去接驾的时间继续为乘客匹配拼车路线，一旦找到更优的匹配就把司机切换了。利用这样的时间差，Uber 把搜索最优匹配的时间从几十秒变成了几分钟。下图就是一个路线切换的示意图。",-1),u=s("br",null,null,-1),U=s("br",null,null,-1),m=s("p",null,"除了路线切换之外，在第三代拼车匹配系统中，Uber 工程师们还改进了称为滚雪球式匹配算法。它的意思是一旦通过前面的贪心算法，和路线切换确定了一条拼车路线以后，系统会利用这条路线去不断尝试接受新的拼车乘客，也就是说有可能在行程中不断有新的乘客被加入到这个拼车线路中。",-1),B=s("br",null,null,-1),f=s("p",null,"通过这些改进，Uber 工程师很好的去逼近 NP 难题的全局最优，并且这个全局最优在现实中很难解决，因为无法预测未来的乘车需求。Uber 的方案很好地利用了时间差，非常有效率的在拼车线路的不同阶段去尝试找到局部最优匹配。",-1),y=s("h3",{id:"总结",tabindex:"-1"},[s("strong",null,"总结"),n(),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "**总结**"'},"​")],-1),k=s("p",null,"这一课时我们分析了 Uber 的拼车系统案例，它属于图的最大匹配问题，可以看到 Uber 是怎样一步一步迭代技术方案，并最终逼近最优解的过程，同时对于我们技术团队的方案设计也很有启发。在早期业务比较小时千万不要过度优化，而是要用最简单的方案快速验证，收集更多用户和数据来不断改进系统。",-1),T=s("br",null,null,-1);function P(q,x,O,v,C,I){const e=o("Image");return p(),t("div",null,[c,a(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/69/E9/Cgq2xl5TsWOAcaMOAAAeX1n0fKE082.png"}),n(),_,a(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/69/E9/CgpOIF5TsWOABMunAAAUE_-pIzY993.png"}),n(),d,b,h,g,E,A,u,a(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/69/E9/Cgq2xl5TsWOAOOLVAAApUfp6KOI387.png"}),n(),U,m,B,f,y,k,T])}const S=l(i,[["render",P]]);export{V as __pageData,S as default};
