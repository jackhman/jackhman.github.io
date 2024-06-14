import{_ as e,D as t,o,g as i,J as l,h as n,Q as p,m as s}from"./chunks/framework.f67d7268.js";const ss=JSON.parse('{"title":"第08讲：高频真题解析I","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/037_300分钟搞定数据结构与算法/(36) 第08讲：高频真题解析 I.md","filePath":"posts/backEnd/037_300分钟搞定数据结构与算法/(36) 第08讲：高频真题解析 I.md","lastUpdated":1696682708000}'),c={name:"posts/backEnd/037_300分钟搞定数据结构与算法/(36) 第08讲：高频真题解析 I.md"},r=p("",21),E=p("",16),y=s("p",null,'要看当前的子串"abc"是否已经包含了字符 a。',-1),u=s("ol",null,[s("li",null,[s("p",null,'扫描一遍"abc"，当发现某个字符与 a 相同，可以得出结论。')]),s("li",null,[s("p",null,'把"abc"三个字符放入到一个哈希集合里，那么就能在 O(1) 的时间里作出判断，提高速度。')])],-1),h=s("br",null,null,-1),m=s("p",null,"使用定义一个哈希集合 set 的方法，从给定字符串的头开始，每次检查一下当前字符是不是在集合里边，如果不在，说明这个字符不会造成重复和冲突，把它加入到集合里，并统计一下当前集合的长度，可能它就是最长的那个子串。",-1),g=s("p",null,"例题 2：如果发现新的字符已经在集合里已经出现了，怎么办？",-1),d=s("p",null,'deabc 是目前为止没有重复字符的最长子串，当我们遇到下一个字符a的时候，以这个字符结尾的没有重复的子串是"bca"，而此时集合里的字符有：d，e，a，b，c。首先，必须把 a 删除，因为这样才能把新的 a 加入到集合里，那么如何判断要把 d 和 e 也都删除呢？',-1),k=p("",14),b=s("p",null,"注意：在运用这个算法的时候，不能去数哈希集合的元素个数来作为子串的长度，所以得额外维护一个变量来保存最后的结果。",-1),_=s("p",null,"但是在一些情况下，我们不能简单地将取出来的重复位置加 1，如下：快指针 j 指向的字符是 e，而 e 在哈希表里记录的位置是 1。",-1),f=p("",23),v=s("p",null,"假设 k = 5，k~1~= 3，k~2~ = 2，有下面几种情况。",-1),A=s("ol",null,[s("li",null,"当 a~2~ = b~1~时，可以肯定 a~2~ 和 b~1~ 就是第 5 小的数。")],-1),w=s("p",null,"因为当把 a~0~、a~1~、a~2~ 以及 b~0~、b~1~ 按照大小顺序合并在一起的时候， a~2~ 和 b~1~ 一定排在最后面，完全不需要考虑 a~0~、a~1~ 和 b~0~ 的大小关系。其中一种可能的排列如下。",-1),q=s("ol",{start:"2"},[s("li",null,"当 a~2~ < b~1~ 的时候，无法肯定 a~2~ 和 b~1~ 是不是第 5 小的数。举例如下。")],-1),C=s("p",null,"而最终第 5 小的数是 a~3~ 5 这个数。因此，在这种情况下，我们不能得出第 5 小的数是哪个。",-1),j=s("br",null,null,-1),x=s("p",null,"但是，在这种情况下，至少我们可以肯定的是，我们要找的结果肯定不会在 a~0~，a~1~，a~2~ 之间，即不会出现在 nums1 数组的前半段里。为什么呢？很简单，因为如果第 5 小的数是 a~0~，a~1~，a~2~ 其中一个的话，意味着 k~1~+k~2~ 必然大于 5，这就跟我们的假设不符了。",-1),T=s("p",null,"那么结果会不会在 nums2 的后半段呢？不可能，加入第 5 小的数在 nums2 的后半段，那么意味着，这个数要大于 b~1~（即 7），也会大于 a~2~（即 3），但是 k~1~ + k~2~ 已经等于 5了，所以就和假设冲突了。",-1),L=p("",12),D=p("",8),B=s("h6",{id:"解法-1-直观方法",tabindex:"-1"},[n("解法 1：直观方法 "),s("a",{class:"header-anchor",href:"#解法-1-直观方法","aria-label":'Permalink to "解法 1：直观方法"'},"​")],-1),S=s("p",null,"先将两个数组合并在一起，然后排序，再选出中位数。时间复杂度是：O((m+n)× og(m+n))。",-1),N=s("h6",{id:"解法-2-快速选择算法",tabindex:"-1"},[n("解法 2：快速选择算法 "),s("a",{class:"header-anchor",href:"#解法-2-快速选择算法","aria-label":'Permalink to "解法 2：快速选择算法"'},"​")],-1),I=s("p",null,"快速选择算法，可以在 O(n) 的时间内从长度为 n 的没有排序的数组中取出第 k 小的数，运用了快速排序的思想。",-1),P=s("p",null,"假如将 nums1[] 与 nums2[] 数组组合成一个数组变成 nums[]：{2, 5, 3, 1, 6, 8, 9, 7, 4}，那么如何在这个没有排好序的数组中找到第 k 小的数呢？",-1),O=s("ol",null,[s("li",null,"随机地从数组中选择一个数作为基准值，比如 7。一般而言，随机地选择基准值可以避免最坏的情况出现。")],-1),M=s("ol",{start:"2"},[s("li",null,"将数组排列成两个部分，以基准值作为分界点，左边的数都小于基准值，右边的都大于基准值。")],-1),V=s("ol",{start:"3"},[s("li",null,[s("p",null,"判断一下基准值所在位置 p：")]),s("li",null,[s("p",null,"如果 p 刚好等于 k，那么基准值就是所求数，直接返回。")]),s("li",null,[s("p",null,"如果 k < p，即基准值太大，搜索的范围应该缩小到基准值的左边。")]),s("li",null,[s("p",null,"如果 k > p，即基准值太小，搜索的范围应该缩小到基准值的右边。此时需要找的应该是第 k - p 小的数，因为前 p 个数被淘汰。")])],-1),K=p("",42),F=s("ol",{start:"2"},[s("li",null,"在主机上随机选择一个基准值，然后广播到其他各个服务器上。")],-1),R=s("ol",{start:"3"},[s("li",null,"每台服务器都必须记录下最后小于、等于或大于基准值数字的数量：less count，equal count，greater count。")],-1),H=p("",22),Q=p("",13),W=p("",12);function Y(U,G,z,J,X,Z){const a=t("Image");return o(),i("div",null,[r,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpGAXYErAIDbacLXGUw574.gif"}),n(),E,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2InpOAH6lGAE1uzx5xDe0090.gif"}),n(),y,u,h,m,g,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpOAdm0bAAA91_bKAZI920.png"}),n(),d,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpSAJ2NcAEb7BX-6f9k727.gif"}),n(),k,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2InpWAAnvyAFQgtLp9Xgg419.gif"}),n(),b,_,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpaABE_PAACvFYyHH4E185.png"}),n(),f,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2InpaAZ6lZAAC7LqjZWnU769.png"}),n(),v,A,w,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpaAAPVqAADiT5r6EoE952.png"}),n(),q,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2InpaAdWQTAACcO4jiikI797.png"}),n(),C,j,x,T,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpiANLV4AGB7zVnr6UQ076.gif"}),n(),L,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2InpmAHlttACt9vWodiQU791.gif"}),n(),D,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpmAMCH-AACt9UBVjdM117.png"}),n(),B,S,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2InpqADa6YACUXrW-nt7c325.gif"}),n(),N,I,P,O,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpuAQV-WAB7LzfFC6cc207.gif"}),n(),M,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpyAWKEsACyLx0hVqIg915.gif"}),n(),V,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2Inp-ANdNWAFfawadYn4g058.gif"}),n(),K,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2Inp-ADWduAACy1HlNYdU966.png"}),n(),F,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InqCADiJBADbDhpQ_g34352.gif"}),n(),R,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InqOAW68SAEJNyDb5D5o855.gif"}),n(),H,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2InqSAHLY0ACSlxIOkYh0731.gif"}),n(),Q,l(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InqWAExguACYe_inhacY345.gif"}),n(),W])}const ns=e(c,[["render",Y]]);export{ss as __pageData,ns as default};
