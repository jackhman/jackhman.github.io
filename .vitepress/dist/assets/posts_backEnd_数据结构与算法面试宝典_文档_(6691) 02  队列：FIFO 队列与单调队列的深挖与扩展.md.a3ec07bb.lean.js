import{_ as o,D as e,o as t,g as c,J as a,h as s,Q as p,m as l}from"./chunks/framework.f67d7268.js";const ss=JSON.parse('{"title":"02队列：FIFO队列与单调队列的深挖与扩展","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/数据结构与算法面试宝典_文档/(6691) 02  队列：FIFO 队列与单调队列的深挖与扩展.md","filePath":"posts/backEnd/数据结构与算法面试宝典_文档/(6691) 02  队列：FIFO 队列与单调队列的深挖与扩展.md","lastUpdated":1696682708000}'),r={name:"posts/backEnd/数据结构与算法面试宝典_文档/(6691) 02  队列：FIFO 队列与单调队列的深挖与扩展.md"},E=p("",3),y=p("",5),i=p("",6),A=p("",5),F=p("",13),g=p("",17),u=p("",5),D=p("",11),d=p("",4),_=l("p",null,[s("【"),l("strong",null,"题目扩展"),s(' 】切忌盲目刷题，其实只要吃透一道题，就可以解决很多类似的题目。只要掌握分层遍历的技巧，以后再碰到类似的题目，就再也难不住你了。这里我为你总结了一张关于"'),l("strong",null,"二叉树的层次遍历"),s('"的解题技巧，如下图所示：')],-1),C=p("",7),h=p("",15),m=p("",20),b=p("",5),v=l("p",null,"FIFO 队列",-1),B=p("",8),f=p("",12),k=p("",11),T=l("p",null,"Step 1. 元素 3 入队，此时队首元素为 3，表示着区间[3]最大值为 3。",-1),Q=l("p",null,"Step 2. 元素 2 入队，此时队列首元素为 3，表示区间[3,2]最大值为 3。",-1),S=l("p",null,[s("Step 3. 元素 5 入队，此时队首元素为 5，此时队列覆盖范围长度为 3，可以得到"),l("strong",null,"区间 [3,2,5] 最大值为 5。")],-1),I=l("p",null,"继续执行入队，想必你也能得出结论了：在没有出队的情况下，黄色覆盖范围会一直增加，队首元素就表示这个黄色覆盖范围的最大值。",-1),L=l("p",null,"下面我们再来看出队与入队混合的情况。在上图 Step3 的基础上，如果再把 A[3] = 6 入队，这个时候，队列的覆盖范围长度为 4，假设我们想控制这个覆盖范围长度为 3，应该怎么办？",-1),q=l("p",null,"此时，我们只需要将 A[0] 出队即可。如下图所示：",-1),P=p("",12),x=l("p",null,[s("【"),l("strong",null,"分析"),s(" 】这是一道来自 "),l("strong",null,"eBay"),s(" 的面试题。拿到时题目之后，可以发现，题目要求还是比较赤裸裸的，不妨先模拟一下，看看能不能想到比较好的解决办法。")],-1),N=l("p",null,[l("strong",null,"1. 模拟")],-1),O=l("p",null,[s("首先我们发现窗口在滑动的时候，有元素不停地进出。因此，可以采用"),l("strong",null,"队列"),s(" 来试一下。由于窗口长度为 3，所以将队列的长度固定为 3。")],-1),w=p("",20),V=l("p",null,[s("假设执行到 A[2] = 3 时，采用"),l("strong",null,"严格单调递减（队列中相等的元素也会被踢出去）"),s("，入队时，A[2] 将会把所有的元素都踢出队列，队列变成 [3]，那么可以得到 [3,2,3] 的最大值为 3。")],-1),R=l("p",null,"但是由于窗口滑动的时候，接着需要把 A[0] = 3 出队，出队之后，队列为空。然后再将 A[3] = 1 入队得到。",-1),M=p("",23),j=p("",4),W=p("",8),z=p("",24),H=p("",8);function J(U,Y,K,X,Z,G){const n=e("Image");return t(),c("div",null,[E,a(n,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M00/11/0A/Cgp9HWA_RiuASOCMAACEYQ4Rhu8096.png"}),s(),y,a(n,{alt:"1.gif",src:"https://s0.lgstatic.com/i/image6/M00/11/0B/Cgp9HWA_RuiAYzgpAADIHD6hfoY449.gif"}),s(),i,a(n,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image6/M00/11/08/CioPOWA_RwyAWm07AACF5LV9ej0062.png"}),s(),A,a(n,{alt:"2.gif",src:"https://s0.lgstatic.com/i/image6/M00/11/08/CioPOWA_RyiAQ0IkAAbQTq2M1V8935.gif"}),s(),F,a(n,{alt:"3.gif",src:"https://s0.lgstatic.com/i/image6/M01/11/0C/Cgp9HWA_R4WADJ8eACXiUG8cfgY721.gif"}),s(),g,a(n,{alt:"Drawing 22.png",src:"https://s0.lgstatic.com/i/image6/M01/11/09/CioPOWA_R6aAdoJvAACnbi7IL-c504.png"}),s(),u,a(n,{alt:"4.gif",src:"https://s0.lgstatic.com/i/image6/M00/11/09/CioPOWA_R9eAb3DqAA5cp3pt5r8391.gif"}),s(),D,a(n,{alt:"Drawing 30.png",src:"https://s0.lgstatic.com/i/image6/M00/11/09/CioPOWA_SB2AMn_VAACXDtKnvt4099.png"}),s(),d,a(n,{alt:"Drawing 33.png",src:"https://s0.lgstatic.com/i/image6/M00/11/0C/Cgp9HWA_SC2AdwWAAADBBGybQP0811.png"}),s(),_,a(n,{alt:"Drawing 35.png",src:"https://s0.lgstatic.com/i/image6/M01/11/0C/Cgp9HWA_SEGALU-UAADmDhvBE6M451.png"}),s(),C,a(n,{alt:"Drawing 36.png",src:"https://s0.lgstatic.com/i/image6/M01/11/0C/Cgp9HWA_SF2AEV3pAADK0cYKmv8794.png"}),s(),h,a(n,{alt:"Drawing 38.png",src:"https://s0.lgstatic.com/i/image6/M01/11/09/CioPOWA_SHeAP85DAADKwUx6Fio771.png"}),s(),m,a(n,{alt:"Drawing 41.png",src:"https://s0.lgstatic.com/i/image6/M01/11/09/CioPOWA_SIqAG7qhAADoVzWnab0092.png"}),s(),b,a(n,{alt:"Drawing 42.png",src:"https://s0.lgstatic.com/i/image6/M01/11/09/CioPOWA_SJeAYvJTAAB3ffWmPoY742.png"}),s(),v,a(n,{alt:"Drawing 44.png",src:"https://s0.lgstatic.com/i/image6/M01/11/09/CioPOWA_SKmAJflUAACNz8oT0A8471.png"}),s(),B,a(n,{alt:"5.gif",src:"https://s0.lgstatic.com/i/image6/M01/11/0D/Cgp9HWA_SLyAEHB2AEJPbY2MLoE581.gif"}),s(),f,a(n,{alt:"6.gif",src:"https://s0.lgstatic.com/i/image6/M00/11/0A/CioPOWA_SQOAZRMRABqVn-_iVoo720.gif"}),s(),k,a(n,{alt:"7.gif",src:"https://s0.lgstatic.com/i/image6/M01/11/0D/Cgp9HWA_STiAcHJnAAmEZ9koVKA128.gif"}),s(),T,Q,S,I,L,q,a(n,{alt:"8.gif",src:"https://s0.lgstatic.com/i/image6/M01/11/0E/Cgp9HWA_SX6ADn1yAAlfQannP2I331.gif"}),s(),P,a(n,{alt:"Drawing 68.png",src:"https://s0.lgstatic.com/i/image6/M00/11/12/Cgp9HWA_S1aAJXv9AABKF_TFCN8607.png"}),s(),x,N,O,a(n,{alt:"9.gif",src:"https://s0.lgstatic.com/i/image6/M00/11/0C/CioPOWA_ScmAQ8ZYAAoV9uo-AJQ439.gif"}),s(),w,a(n,{alt:"Drawing 76.png",src:"https://s0.lgstatic.com/i/image6/M00/11/13/Cgp9HWA_TDqAU-urAADUKwAZCHk961.png"}),s(),V,R,a(n,{alt:"Drawing 78.png",src:"https://s0.lgstatic.com/i/image6/M00/11/13/Cgp9HWA_TEyAfSBRAADZkvnyEtw271.png"}),s(),M,a(n,{alt:"Drawing 80.png",src:"https://s0.lgstatic.com/i/image6/M00/11/13/Cgp9HWA_S4SAXevyAABpi3LNISI737.png"}),s(),j,a(n,{alt:"10.gif",src:"https://s0.lgstatic.com/i/image6/M01/11/13/Cgp9HWA_TACALWYlAB5Uh_D8ZdQ298.gif"}),s(),W,a(n,{alt:"11.gif",src:"https://s0.lgstatic.com/i/image6/M00/11/13/Cgp9HWA_TH6AUMlAAB3Xvu5uEzw814.gif"}),s(),z,a(n,{alt:"Drawing 98.png",src:"https://s0.lgstatic.com/i/image6/M00/11/10/CioPOWA_TLCATeR6AAFTfMBlaiw858.png"}),s(),H])}const ns=o(r,[["render",J]]);export{ss as __pageData,ns as default};
