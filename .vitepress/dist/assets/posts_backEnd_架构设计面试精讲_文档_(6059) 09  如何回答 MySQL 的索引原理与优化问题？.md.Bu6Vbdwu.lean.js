import{_ as n,F as l,g as h,K as p,h as s,ar as t,l as i,o as e}from"./chunks/framework.VlluEs-f.js";const Q=JSON.parse('{"title":"09如何回答MySQL的索引原理与优化问题？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/架构设计面试精讲_文档/(6059) 09  如何回答 MySQL 的索引原理与优化问题？.md","filePath":"posts/backEnd/架构设计面试精讲_文档/(6059) 09  如何回答 MySQL 的索引原理与优化问题？.md","lastUpdated":1718371218000}'),k={name:"posts/backEnd/架构设计面试精讲_文档/(6059) 09  如何回答 MySQL 的索引原理与优化问题？.md"},r=t("",19),d=t("",7),E=t("",6),g=t("",27),o=t("",7),y=t("",15),c=i("p",null,"区分度就是某个字段 column 不同值的个数除以表的总行数，比如性别的区分度就很小，不适合建立索引或不适合排在联合索引列的靠前的位置，而 uuid 这类字段就比较适合做索引或排在联合索引列的靠前的位置。",-1),_=i("h3",{id:"总结",tabindex:"-1"},[s("总结 "),i("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),F=i("p",null,"今天，我们讲了 MySQL 的索引原理，介绍了 InnoDB 为什么会采用 B+Tree 结构。因为 B+Tree 能够减少单次查询的磁盘访问次数，做到查询效率最大化。另外，我们还讲了如何查看 SQL 的执行计划，从而找到索引失效的问题，并有针对性的做索引优化。",-1),A=i("p",null,"最后，我总结一些你容易在面试中被问到的，索引的使用原则：",-1),u=i("p",null,"另外，你在了解索引优势的同时，也要了解索引存在的问题：索引会带来数据的写入延迟，引入额外的空间消耗；在海量数据下，想要通过索引提升查询效率也是有限的。",-1),T=i("p",null,"所以此时你还要考虑其他的方案，比如读写分离、分库分表等设计方案（这些内容我会在11、12讲带你了解）。",-1),B=i("p",null,"最后，感谢你的阅读，我们下一讲见。",-1);function D(C,m,L,S,b,M){const a=l("Image");return e(),h("div",null,[r,p(a,{alt:"1.png",src:"https://s0.lgstatic.com/i/image/M00/92/35/Ciqc1GARAb2AeSnCAAF73_MTZck998.png"}),s(),d,p(a,{alt:"2.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/2A/Cip5yGARAfSAAeR4AAJlafpM_D0118.png"}),s(),E,p(a,{alt:"3.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/2D/CgpVE2ARAp2AKn1rAAuwHY1j7B4280.png"}),s(),g,p(a,{alt:"4.png",src:"https://s0.lgstatic.com/i/image/M00/92/41/CgqCHmARAz-AEslxAAFQoCZRpY4822.png"}),s(),o,p(a,{alt:"5.png",src:"https://s0.lgstatic.com/i/image/M00/92/41/CgqCHmARBA-AQThqAAE5tk3towI139.png"}),s(),y,p(a,{alt:"6.png",src:"https://s0.lgstatic.com/i/image/M00/92/36/Ciqc1GARBC6AOagLAACKmpN6OcM499.png"}),s(),c,_,F,A,p(a,{alt:"7修改.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/8B/CgpVE2ASL8GAcyLgAAKaTC7eoBA481.png"}),s(),u,T,B])}const I=n(k,[["render",D]]);export{Q as __pageData,I as default};
