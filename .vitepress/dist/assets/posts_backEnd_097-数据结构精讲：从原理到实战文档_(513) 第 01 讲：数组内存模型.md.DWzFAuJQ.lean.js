import{_ as n,F as p,g as l,K as e,h as a,ar as i,l as s,o}from"./chunks/framework.VlluEs-f.js";const w=JSON.parse('{"title":"第01讲：数组内存模型","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/097-数据结构精讲：从原理到实战文档/(513) 第 01 讲：数组内存模型.md","filePath":"posts/backEnd/097-数据结构精讲：从原理到实战文档/(513) 第 01 讲：数组内存模型.md","lastUpdated":1718371218000}'),d={name:"posts/backEnd/097-数据结构精讲：从原理到实战文档/(513) 第 01 讲：数组内存模型.md"},r=i("",12),h=i("",10),c=i("",9),g=s("p",null,"下面我们来一起看看行优先或列优先的内存模型会造成什么样的区别。",-1),_=s("p",null,"（1）行优先",-1),k=s("p",null,"行优先的内存模型保证了每一行的每个相邻元素都保存在了相邻的连续内存空间中，对于上面的例子，这个二维数组的内存模型如下图所示，假设起始地址是 0x80000000：",-1),E=i("",7),u=s("p",null,"（2）列优先",-1),b=s("p",null,"列优先的内存模型保证了每一列的每个相邻元素都保存在了相邻的连续内存中，对于上面的例子，这个二维数组的内存模型如下图所示，我们同样假设起始地址是 0x80000000：",-1),m=s("br",null,null,-1),v=i("",7),y=i("",28),A=s("p",null,"如果我们调用了 add(1, 4) 函数，也就是在 index 为 1 的地方插入 4 这个元素，在 add 的函数中则会执行 System.arraycopy(elementData, 1, elementData, 2, 6 - 1) 语句，它的意思是将从 elementData 数组 index 为 1 的地址开始，复制往后的 5 个元素到 elementData 数组 index 为 2 的地址位置，如下图所示：",-1),C=s("p",null,"红色的部分代表着执行完 System.arraycopy 函数的结果，最后执行 elementData[1] = 4; 这条语句：",-1),x=i("",6),T=s("br",null,null,-1),S=s("p",null,"如果我们调用了 remove(1) 函数，也就是删除在 index 为 1 这个地方的元素，在 remove 的函数中则会执行 System.arraycopy(elementData, 1 + 1, elementData, 1, 2) 语句，它的意思是将从 elementData 数组 index 为 2 的地址开始，复制后面的 2 个元素到 elementData 数组 index 为 1 的地址位置，如下图所示：",-1),D=s("p",null,"因为这里同样涉及到了每个元素的复制，平均下来时间复杂度相当于 O(n)。",-1),q=s("h3",{id:"小结",tabindex:"-1"},[a("小结 "),s("a",{class:"header-anchor",href:"#小结","aria-label":'Permalink to "小结"'},"​")],-1),I=s("p",null,"今天我们一起探讨了数组这个数据结构的内存模型，知道了读取数组的时间复杂度为 O(1)，也一起通过分析 Java Openjdk-jdk11，知道了插入和删除数组元素的时间复杂度为 O(n)。",-1),P=s("p",null,'OK，这节课就讲到这里啦，下一课时我将分享"位图数组在 Redis 中的应用"，记得按时来听课哈。',-1);function O(j,M,f,V,R,F){const t=p("Image");return o(),l("div",null,[r,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/58/04/CgpOIF329g2AIhWoAAFlTMFBxyw356.png"}),a(),h,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/58/04/CgpOIF329g2AIhWoAAFlTMFBxyw356.png"}),a(),c,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/58/04/CgpOIF329g2APk5pAAB2ugtuaDk157.png"}),a(),g,_,k,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/58/05/Cgq2xl329g6ATN9WAADD1_gRTG8279.png"}),a(),E,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/58/04/CgpOIF329g6AdyS1AAET8uQRA84189.png"}),a(),u,b,m,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image6/M00/48/16/CioPOWDTIM2AEkzBAAA_9amcdj8615.png"}),a(),v,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/58/04/CgpOIF329g-ABI2RAAEUG5XyUrM082.png"}),a(),y,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/58/05/Cgq2xl329g-Adz0uAACwgSFkMho326.png"}),a(),A,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/58/04/CgpOIF329hCAeNOkAAEvRtO2Pnc799.png"}),a(),C,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/58/05/Cgq2xl329hCAAKY6AAEkcmvJCew309.png"}),a(),x,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/58/04/CgpOIF329hCAByRzAACwgSFkMho165.png"}),a(),T,S,e(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/58/05/Cgq2xl329hCAIGqNAAEIP9vnEWM398.png"}),a(),D,q,I,P])}const z=n(d,[["render",O]]);export{w as __pageData,z as default};
