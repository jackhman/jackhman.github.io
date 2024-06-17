import{_ as a,F as _,g as s,K as i,h as l,ar as o,l as p,o as e}from"./chunks/framework.VlluEs-f.js";const R=JSON.parse('{"title":"06电商数据分析：京东App的详细产品分析","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/数据分析思维与实战_文档/(3497) 06  电商数据分析：京东 App 的详细产品分析.md","filePath":"posts/backEnd/数据分析思维与实战_文档/(3497) 06  电商数据分析：京东 App 的详细产品分析.md","lastUpdated":1718371218000}'),n={name:"posts/backEnd/数据分析思维与实战_文档/(3497) 06  电商数据分析：京东 App 的详细产品分析.md"},u=o("",7),c=o("",17),A=p("p",null,'从上图可看出人均访问页面数在 6 月 18 日峰值非常明显，可以理解为京东 "618" 活动导致。基于这个发现，我们按照功能维度（搜索、十宫格、个性化推荐）进行拆解，拆解之后的数据如下图所示。',-1),r=o("",7),q=o("",5),h=p("p",null,"这是京东收银台，我们可以发现支付方式比较齐全，支持主流的银行卡、微信支付（这里没有支付宝，因为竞品关系），所以说在支付方式上问题不大。但是基于埋点数据发现有很多用户去点击右上角的订单中心，点击后如下图所示。",-1),g=p("p",null,"我们通过热力图模型发现有很多用户在点击地址这个位置，其实地址这个地方是点不了的，但是用户以为能点，因此就猜测很多用户因为地址错误又无法直接修改，没有耐心直接放弃支付。进一步就可以通过数据去验证，比如说用户研究或者直接在这里做一些地址修改的小版本上线。",-1),d=p("p",null,'我整个分析逻辑虽然简单，但在实际过程中非常考验分析师，除了各种底层数据表之间的关联之外，还有很多时候"基础建设"不一定允许。比如说这里热力图模型不一定有，这个时候就要去看用户行为数据。后来我专门去竞品淘宝 App 的订单中心看了一下，在它的订单详情页左下角有一个"更多"修改地址（如下图所示）。这代表淘宝之前必然是发现了有这样一个优化点，然后进行了全版本上线。',-1),m=p("p",null,"其实电商的大部分数据分析都会跟漏斗有关，除了经验之外，更加重要的是对产品本身的多体验。因为电商 App 页面太多，各种入口也非常多，而你作为一个用户，往往习惯已经固化，所以会造成思维固化。只有多去体验 App 的各种入口、各种页面、各个 Top ，你才能对用户数据有更好的了解。平时也要多向竞品学习，保持好奇心和敬畏心，只有这样，你才能慢慢关注到其他同学关注不到的点，而这些是培养良好微观体感的重要一步。",-1),C=p("h3",{id:"新用户分析",tabindex:"-1"},[l("新用户分析 "),p("a",{class:"header-anchor",href:"#新用户分析","aria-label":'Permalink to "新用户分析"'},"​")],-1),T=p("p",null,"京东作为一款非常成熟，在一线城市有很多忠实用户的 App，当前在用户体量上还是与淘宝 App 相差较大，因此我们会看到京东与各方 App （微信、爱奇艺等） 战略性合作，共同拉新。",-1),V=p("p",null,"拉新必然就要衡量拉新效果和拉新优化，京东实际活动拉新效果内部数据我们肯定不太清楚，但是作为一名分析师，可以去看整个 App 在拉新上可以优化的点。拉新如果做得好，比老用户分析更容易出成绩。",-1),b=p("p",null,"同样以新用户产品体验为切入点，因为新用户跟老用户实际上最大的差异点，是新用户有一个新人大礼包，所以我们就看这个点目前有哪些优化空间。",-1),P=p("p",null,"新用户打开 App 时，会出现这样一个弹窗新人大礼包，如下图所示。",-1),U=p("p",null,'可以看到有一个 6 元的京东支付无门槛券，还有一个 35 元的京东全品类券，同时下面有"注册领取"按钮。在这个界面，用户除了点击右上角的"X"之外，只能点击"注册领取"，当点击"注册领取"之后就进入到第二个界面，如下图所示。',-1),S=o("",17);function k(I,f,D,x,B,N){const t=_("Image");return e(),s("div",null,[u,i(t,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/22/C3/CgqCHl7sa-GAb9beABw1i3p5JkA761.png"}),l(),c,i(t,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/22/B8/Ciqc1F7sbAOAU6OkAACrnl0aC4A011.png"}),l(),A,i(t,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/22/B8/Ciqc1F7sbAqAWlmNAACHoCjI4sg221.png"}),l(),r,i(t,{alt:"图片1.png",src:"https://s0.lgstatic.com/i/image/M00/23/0B/Ciqc1F7ssG2AeR01AADunisV1SQ829.png"}),l(),q,i(t,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/22/B8/Ciqc1F7sbCSAcGmzAAInY1QAB7g952.png"}),l(),h,i(t,{alt:"图片3.png",src:"https://s0.lgstatic.com/i/image/M00/23/16/CgqCHl7ssJ6AGvQ2AAM2gLkS9bY915.png"}),l(),g,d,i(t,{alt:"图片2.png",src:"https://s0.lgstatic.com/i/image/M00/23/16/CgqCHl7ssIuAdLxIAAGu6NfMvis347.png"}),l(),m,C,T,V,b,P,i(t,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image/M00/22/C3/CgqCHl7sbD-AFkjUAAWdP7eoV2k525.png"}),l(),U,i(t,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image/M00/22/C3/CgqCHl7sbEeAJnaBAAV3GSx8UkY283.png"}),l(),S])}const E=a(n,[["render",k]]);export{R as __pageData,E as default};
