import{_ as l,F as h,g as t,K as a,h as s,ar as n,l as p,o as k}from"./chunks/framework.VlluEs-f.js";const ss=JSON.parse('{"title":"02队列：FIFO队列与单调队列的深挖与扩展","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/数据结构与算法面试宝典_文档/(6691) 02  队列：FIFO 队列与单调队列的深挖与扩展.md","filePath":"posts/backEnd/数据结构与算法面试宝典_文档/(6691) 02  队列：FIFO 队列与单调队列的深挖与扩展.md","lastUpdated":1718371218000}'),e={name:"posts/backEnd/数据结构与算法面试宝典_文档/(6691) 02  队列：FIFO 队列与单调队列的深挖与扩展.md"},E=n("",3),r=n("",5),g=n("",6),d=n("",5),y=n("",13),A=n("",17),o=n("",5),F=n("",11),c=n("",4),D=p("p",null,[s("【"),p("strong",null,"题目扩展"),s(' 】切忌盲目刷题，其实只要吃透一道题，就可以解决很多类似的题目。只要掌握分层遍历的技巧，以后再碰到类似的题目，就再也难不住你了。这里我为你总结了一张关于"'),p("strong",null,"二叉树的层次遍历"),s('"的解题技巧，如下图所示：')],-1),u=n("",7),_=n("",15),C=n("",20),b=n("",5),m=p("p",null,"FIFO 队列",-1),B=n("",8),v=n("",12),f=n("",11),T=p("p",null,"Step 1. 元素 3 入队，此时队首元素为 3，表示着区间[3]最大值为 3。",-1),S=p("p",null,"Step 2. 元素 2 入队，此时队列首元素为 3，表示区间[3,2]最大值为 3。",-1),Q=p("p",null,[s("Step 3. 元素 5 入队，此时队首元素为 5，此时队列覆盖范围长度为 3，可以得到"),p("strong",null,"区间 [3,2,5] 最大值为 5。")],-1),I=p("p",null,"继续执行入队，想必你也能得出结论了：在没有出队的情况下，黄色覆盖范围会一直增加，队首元素就表示这个黄色覆盖范围的最大值。",-1),P=p("p",null,"下面我们再来看出队与入队混合的情况。在上图 Step3 的基础上，如果再把 A[3] = 6 入队，这个时候，队列的覆盖范围长度为 4，假设我们想控制这个覆盖范围长度为 3，应该怎么办？",-1),q=p("p",null,"此时，我们只需要将 A[0] 出队即可。如下图所示：",-1),x=n("",12),O=p("p",null,[s("【"),p("strong",null,"分析"),s(" 】这是一道来自 "),p("strong",null,"eBay"),s(" 的面试题。拿到时题目之后，可以发现，题目要求还是比较赤裸裸的，不妨先模拟一下，看看能不能想到比较好的解决办法。")],-1),L=p("p",null,[p("strong",null,"1. 模拟")],-1),N=p("p",null,[s("首先我们发现窗口在滑动的时候，有元素不停地进出。因此，可以采用"),p("strong",null,"队列"),s(" 来试一下。由于窗口长度为 3，所以将队列的长度固定为 3。")],-1),V=n("",20),w=p("p",null,[s("假设执行到 A[2] = 3 时，采用"),p("strong",null,"严格单调递减（队列中相等的元素也会被踢出去）"),s("，入队时，A[2] 将会把所有的元素都踢出队列，队列变成 [3]，那么可以得到 [3,2,3] 的最大值为 3。")],-1),R=p("p",null,"但是由于窗口滑动的时候，接着需要把 A[0] = 3 出队，出队之后，队列为空。然后再将 A[3] = 1 入队得到。",-1),M=n("",23),j=n("",4),W=n("",8),H=n("",24),J=n("",8);function z(K,U,Y,X,Z,G){const i=h("Image");return k(),t("div",null,[E,a(i,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M00/11/0A/Cgp9HWA_RiuASOCMAACEYQ4Rhu8096.png"}),s(),r,a(i,{alt:"1.gif",src:"https://s0.lgstatic.com/i/image6/M00/11/0B/Cgp9HWA_RuiAYzgpAADIHD6hfoY449.gif"}),s(),g,a(i,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image6/M00/11/08/CioPOWA_RwyAWm07AACF5LV9ej0062.png"}),s(),d,a(i,{alt:"2.gif",src:"https://s0.lgstatic.com/i/image6/M00/11/08/CioPOWA_RyiAQ0IkAAbQTq2M1V8935.gif"}),s(),y,a(i,{alt:"3.gif",src:"https://s0.lgstatic.com/i/image6/M01/11/0C/Cgp9HWA_R4WADJ8eACXiUG8cfgY721.gif"}),s(),A,a(i,{alt:"Drawing 22.png",src:"https://s0.lgstatic.com/i/image6/M01/11/09/CioPOWA_R6aAdoJvAACnbi7IL-c504.png"}),s(),o,a(i,{alt:"4.gif",src:"https://s0.lgstatic.com/i/image6/M00/11/09/CioPOWA_R9eAb3DqAA5cp3pt5r8391.gif"}),s(),F,a(i,{alt:"Drawing 30.png",src:"https://s0.lgstatic.com/i/image6/M00/11/09/CioPOWA_SB2AMn_VAACXDtKnvt4099.png"}),s(),c,a(i,{alt:"Drawing 33.png",src:"https://s0.lgstatic.com/i/image6/M00/11/0C/Cgp9HWA_SC2AdwWAAADBBGybQP0811.png"}),s(),D,a(i,{alt:"Drawing 35.png",src:"https://s0.lgstatic.com/i/image6/M01/11/0C/Cgp9HWA_SEGALU-UAADmDhvBE6M451.png"}),s(),u,a(i,{alt:"Drawing 36.png",src:"https://s0.lgstatic.com/i/image6/M01/11/0C/Cgp9HWA_SF2AEV3pAADK0cYKmv8794.png"}),s(),_,a(i,{alt:"Drawing 38.png",src:"https://s0.lgstatic.com/i/image6/M01/11/09/CioPOWA_SHeAP85DAADKwUx6Fio771.png"}),s(),C,a(i,{alt:"Drawing 41.png",src:"https://s0.lgstatic.com/i/image6/M01/11/09/CioPOWA_SIqAG7qhAADoVzWnab0092.png"}),s(),b,a(i,{alt:"Drawing 42.png",src:"https://s0.lgstatic.com/i/image6/M01/11/09/CioPOWA_SJeAYvJTAAB3ffWmPoY742.png"}),s(),m,a(i,{alt:"Drawing 44.png",src:"https://s0.lgstatic.com/i/image6/M01/11/09/CioPOWA_SKmAJflUAACNz8oT0A8471.png"}),s(),B,a(i,{alt:"5.gif",src:"https://s0.lgstatic.com/i/image6/M01/11/0D/Cgp9HWA_SLyAEHB2AEJPbY2MLoE581.gif"}),s(),v,a(i,{alt:"6.gif",src:"https://s0.lgstatic.com/i/image6/M00/11/0A/CioPOWA_SQOAZRMRABqVn-_iVoo720.gif"}),s(),f,a(i,{alt:"7.gif",src:"https://s0.lgstatic.com/i/image6/M01/11/0D/Cgp9HWA_STiAcHJnAAmEZ9koVKA128.gif"}),s(),T,S,Q,I,P,q,a(i,{alt:"8.gif",src:"https://s0.lgstatic.com/i/image6/M01/11/0E/Cgp9HWA_SX6ADn1yAAlfQannP2I331.gif"}),s(),x,a(i,{alt:"Drawing 68.png",src:"https://s0.lgstatic.com/i/image6/M00/11/12/Cgp9HWA_S1aAJXv9AABKF_TFCN8607.png"}),s(),O,L,N,a(i,{alt:"9.gif",src:"https://s0.lgstatic.com/i/image6/M00/11/0C/CioPOWA_ScmAQ8ZYAAoV9uo-AJQ439.gif"}),s(),V,a(i,{alt:"Drawing 76.png",src:"https://s0.lgstatic.com/i/image6/M00/11/13/Cgp9HWA_TDqAU-urAADUKwAZCHk961.png"}),s(),w,R,a(i,{alt:"Drawing 78.png",src:"https://s0.lgstatic.com/i/image6/M00/11/13/Cgp9HWA_TEyAfSBRAADZkvnyEtw271.png"}),s(),M,a(i,{alt:"Drawing 80.png",src:"https://s0.lgstatic.com/i/image6/M00/11/13/Cgp9HWA_S4SAXevyAABpi3LNISI737.png"}),s(),j,a(i,{alt:"10.gif",src:"https://s0.lgstatic.com/i/image6/M01/11/13/Cgp9HWA_TACALWYlAB5Uh_D8ZdQ298.gif"}),s(),W,a(i,{alt:"11.gif",src:"https://s0.lgstatic.com/i/image6/M00/11/13/Cgp9HWA_TH6AUMlAAB3Xvu5uEzw814.gif"}),s(),H,a(i,{alt:"Drawing 98.png",src:"https://s0.lgstatic.com/i/image6/M00/11/10/CioPOWA_TLCATeR6AAFTfMBlaiw858.png"}),s(),J])}const is=l(e,[["render",z]]);export{ss as __pageData,is as default};
