import{_ as l,F as k,g as t,K as n,h as i,ar as h,l as s,o as p}from"./chunks/framework.VlluEs-f.js";const Fs=JSON.parse('{"title":"16 如何利用DP与单调队列寻找最大矩形？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/数据结构与算法面试宝典_文档/(6705) 16  如何利用 DP 与单调队列寻找最大矩形？.md","filePath":"posts/backEnd/数据结构与算法面试宝典_文档/(6705) 16  如何利用 DP 与单调队列寻找最大矩形？.md","lastUpdated":1718371218000}'),e={name:"posts/backEnd/数据结构与算法面试宝典_文档/(6705) 16  如何利用 DP 与单调队列寻找最大矩形？.md"},E=h("",11),r=h("",13),g=h("",15),d=s("p",null,[i("【"),s("strong",null,"例 1"),i(" 】比如有一个区间 [10, 17]，长度为 8，那么可以拆分为 [10, 13], [14,17] 长度为 2^2^ 的两个区间。下图是拆分之后"),s("strong",null,"不存在重合"),i("的情况：")],-1),y=s("p",null,[i("【"),s("strong",null,"例 2"),i(" 】比如有一个区间 [10, 18]，长度为 9。那么可以拆分为 [10, 17] 和 [11, 18] 长度为 2^3^ 的两个区间。下图是拆分之后存在"),s("strong",null,"部分重合"),i("的情况：")],-1),A=h("",32),F=s("p",null,"那么查询的时候，就需要从根结点开始往下查。假设我们要基于这棵树查询区间 [1, 3] 的最小值信息。",-1),D=s("ul",null,[s("li",null,[s("strong",null,"第 1 步")])],-1),o=s("p",null,"首先，我们访问到根结点，可以发现 [0, 3] 区间与 [1, 3] 区间处于相交的情况，因此根结点的信息，对于我们要查询的结果是没有帮助的，所以需要将 [0, 3] 区间拆分为 [0, 1] 和 [2,3] 区间。",-1),c=s("p",null,[i("这里我们得到"),s("strong",null,"原则 1"),i("：")],-1),u=s("blockquote",null,[s("p",null,"区间相交的时候，需要拆分树结点区间，然后分别看左右子树。")],-1),C=s("ul",null,[s("li",null,[s("strong",null,"第 2 步")])],-1),B=s("p",null,"接下来，我们先看左子树，可以发现区间 [0, 1] 与区间 [1,3] 仍然是处于相交的状态。",-1),m=s("p",null,"因此还需要再次利用原则 1，分别观察它们的左右子树，如下图所示：",-1),_=h("",7),b=s("ul",null,[s("li",null,[s("strong",null,"第 4 步")])],-1),f=s("p",null,"那么最终，我们只选取两个树结点的信息，如下图所示：",-1),x=h("",10),j=s("p",null,"需要注意的是，当区间 [2,3] 已经包含查询区间的时候，其子树上的结点就没有必要保留了。最终，我们将灰色的树结点都去掉，只保留：",-1),q=s("p",null,'1） "包含"查询区间的叶结点；',-1),v=s("p",null,[i("2）根结点到这些叶结点的"),s("strong",null,"路径"),i("。")],-1),T=s("ul",null,[s("li",null,"第 2 步：收集叶子结点的信息")],-1),N=s("p",null,"当裁剪完成之后，只需要再查看存留的二叉树的叶结点信息就可以了。",-1),P=s("p",null,"不过我们这里并不真正地去裁剪这棵二叉树，而是在遍历的时候，只提取出相应的信息（区间上的最小值）即可。",-1),R=s("p",null,"下面是一道关于二叉树的裁剪的练习题，希望你可以尝试解决一下。",-1),S=s("p",null,[s("strong",null,"练习题 1"),i("： 给你二叉搜索树的根结点 root ，同时给定最小边界 low 和最大边界 high。通过修剪二叉搜索树，使所有结点的值在 [low, high] 中。修剪树不应该改变保留在树中的元素的相对结构（如果没有被移除，原有的父代子代关系都应当保留）。可以证明，存在唯一的答案。所以结果应当返回修剪好的二叉搜索树的新的根结点。注意，根结点可能会根据给定的边界发生改变。")],-1),M=s("p",null,"输入如下所示的二叉搜索树，并且 low = 1，high = 3。",-1),V=s("p",null,"输出：",-1),H=h("",5),I=s("h5",{id:"_4-线段树的存储",tabindex:"-1"},[i("4. 线段树的存储 "),s("a",{class:"header-anchor",href:"#_4-线段树的存储","aria-label":'Permalink to "4. 线段树的存储"'},"​")],-1),w=s("p",null,"可能现在你准备开始用包含左右指针的二叉树写线段树了，不过还有更高效的方式------用数组表示一棵二叉树。",-1),O=s("p",null,[i('你可以回忆一下，"'),s("a",{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=685#/detail/pc?id=6692&fileGuid=xxQTRXtVcqtHK6j8",target:"_blank",rel:"noreferrer"},"03 | 优先级队列：堆与优先级队列，筛选最优元素"),i('"学习堆的时候，我们已经用过一个数组来表示二叉树了，如下图所示：')],-1),K=h("",31),G=h("",58),X=s("p",null,[i("说明：在这个图中，左边是栈底，右边是栈增长的方向。栈中不同的矩形表示相应 A[] 数组中下标位置相应值的大小。那么，首先基于递增栈的定义，我们可以知道它有如下"),s("strong",null,"特性"),i("：")],-1),Q=s("blockquote",null,[s("p",null,"栈中存放的下标，如果 i 在 j 之前入栈，那么必然满足 A[i] <= A[j]。")],-1),W=s("p",null,[i('"'),s("strong",null,"削"),i(' "'),s("strong",null,"的定义"),i("：当需要把一个更小的元素入栈的时候，这个更小的元素就会把栈中大的元素出栈，直到栈为空，或者栈顶元素更小，再入栈。")],-1),J=s("p",null,"例如：当栈中已经有 <i, j>，现在需要将 A[k] 入栈，但是 A[i] < A[k] && A[k] < A[j]。那么 A[k] 就会把 A[j] 削出栈。如下图所示：",-1),U=s("p",null,"根据这个特性，我们肯定可以得到 A[i] <= A[k] < A[j]。基于这个特性，还可以得出 3 个有用的性质。",-1),L=s("p",null,[s("strong",null,"性质 1")],-1),z=s("p",null,"如下图所示：",-1),Y=s("blockquote",null,[s("p",null,"假设 i, j 这两个下标在单调栈中相邻，那么在原数组 A[] 中， (i, j) 这个开区间里面的数都大于 A[j]。")],-1),Z=s("p",null,"这里我们采用反证法来证明这个性质。首先给出反证法的条件：",-1),$=s("ul",null,[s("li",null,[s("p",null,"单调栈中连续存放着下标 i, j（但并不代表下标 i,j 是连续的，也就是说 i + 1 不一定等于j）；")]),s("li",null,[s("p",null,"假设 A[] 数组在 (i, j) 范围中存在 1 个下标 k，即 i < k < j，并且使得 A[k] < A[j] 成立。")])],-1),ss=s("p",null,"证明：如果 A[k] < A[j]，那么将 A[k] 放入单调队列之后，由于 (k, j) 范围里面的数组都大于 A[j]。那么当 A[j] 入栈之后，应该位于 A[k] 之后。于是栈中会形成 <i, k, j> 三个数。但实际上栈中只存放了 <i, j> 两个数，并且 i < k < j，这里存在矛盾。所以在 (i, j) 这个开区间范围里面的数，都必须大于 A[j]。",-1),is=s("p",null,"之所以这些大于 A[j] 的元素没有出现在栈中，是因为这些元素在 A[j] 入栈时可能都在栈中，但是立马都被 A[j] 削出栈了。",-1),as=s("p",null,[s("strong",null,"性质 2")],-1),ns=h("",7),hs=h("",6),ls=h("",9),ks=h("",16),ts=h("",4);function ps(es,Es,rs,gs,ds,ys){const a=k("Image");return p(),t("div",null,[E,n(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/90/Cgp9HWB__gKAfuSVAAJVGh0lZ7k739.png"}),i(),r,n(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/90/Cgp9HWB__hyAKNRHAADJi9Tt1Jc075.png"}),i(),g,n(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image6/M01/3A/90/Cgp9HWB__iqAUkNNAABpKQ8hpO8389.png"}),i(),d,n(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/99/CioPOWB__jGAJ-BPAAB07QZeoiU141.png"}),i(),y,n(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/99/CioPOWB__jiAOH3WAABwKY4dT9s988.png"}),i(),A,n(a,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/99/CioPOWB__nKANd_2AACTipb_MQs065.png"}),i(),F,D,o,n(a,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/99/CioPOWB__nyAG63XAACqx6B5uVU521.png"}),i(),c,u,C,B,n(a,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/99/CioPOWB__oKAY7Z0AACvIcu60-4225.png"}),i(),m,n(a,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image6/M01/3A/90/Cgp9HWB__oiAT5PpAACwh7u3Cyk265.png"}),i(),_,n(a,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/99/CioPOWB__piAASjRAACwfmU76M4079.png"}),i(),b,f,n(a,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image6/M01/3A/90/Cgp9HWB__p-AaesyAADICuyRzZ8398.png"}),i(),x,n(a,{alt:"Drawing 11.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/99/CioPOWB__q2APtnlAADfBsWCUTs679.png"}),i(),j,q,v,T,n(a,{alt:"Drawing 12.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/99/CioPOWB__rWAFHv2AACwSnQB1C4869.png"}),i(),N,P,R,S,M,n(a,{alt:"Drawing 13.png",src:"https://s0.lgstatic.com/i/image6/M01/3A/90/Cgp9HWB__r6AYsviAACOtqFSsXc299.png"}),i(),V,n(a,{alt:"Drawing 14.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/99/CioPOWB__sWAaVRCAABqvED48GE222.png"}),i(),H,n(a,{alt:"Drawing 15.png",src:"https://s0.lgstatic.com/i/image6/M01/3A/90/Cgp9HWB__tGALBeoAADYdvwyPEo939.png"}),i(),I,w,O,n(a,{alt:"Drawing 16.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/90/Cgp9HWB__t2AaDg8AADItUzBiIo402.png"}),i(),K,n(a,{alt:"Drawing 17.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/99/CioPOWB__vmAdDMGAAX2VnfI0w8074.png"}),i(),G,n(a,{alt:"Drawing 18.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/99/CioPOWB__xWAW9DWAAFqqPVJeyA651.png"}),i(),X,Q,W,J,n(a,{alt:"Drawing 19.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/91/Cgp9HWB__x2AMAmBAAGTLBc-_M4399.png"}),i(),U,L,z,n(a,{alt:"Drawing 20.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/91/Cgp9HWB__yOANThzAAFyvMYvHNg791.png"}),i(),Y,Z,$,ss,is,as,n(a,{alt:"Drawing 21.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/91/Cgp9HWB__yuAfVYwAAFqqPVJeyA829.png"}),i(),ns,n(a,{alt:"Drawing 22.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/99/CioPOWB__zSAIgpuAAGDndzxWPI670.png"}),i(),hs,n(a,{alt:"Drawing 23.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/99/CioPOWB__zuAUKHIAAGwv8-dDjM339.png"}),i(),ls,n(a,{alt:"Drawing 24.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/91/Cgp9HWB__0WATqoPAACmXg-WF6E452.png"}),i(),ks,n(a,{alt:"Drawing 25.png",src:"https://s0.lgstatic.com/i/image6/M00/3A/91/Cgp9HWB__1KAJ88RAAEz0wn26MU790.png"}),i(),ts])}const Ds=l(e,[["render",ps]]);export{Fs as __pageData,Ds as default};
