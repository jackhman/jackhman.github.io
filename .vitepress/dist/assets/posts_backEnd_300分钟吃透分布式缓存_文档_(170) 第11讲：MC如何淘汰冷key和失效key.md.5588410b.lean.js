import{_ as t,D as c,o as k,g as o,J as s,h as l,m as e,Q as y}from"./chunks/framework.f67d7268.js";const I=JSON.parse('{"title":"第11讲：MC如何淘汰冷key和失效key","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/300分钟吃透分布式缓存_文档/(170) 第11讲：MC如何淘汰冷key和失效key.md","filePath":"posts/backEnd/300分钟吃透分布式缓存_文档/(170) 第11讲：MC如何淘汰冷key和失效key.md","lastUpdated":1696682708000}'),_={name:"posts/backEnd/300分钟吃透分布式缓存_文档/(170) 第11讲：MC如何淘汰冷key和失效key.md"},i=e("h1",{id:"第11讲-mc如何淘汰冷key和失效key",tabindex:"-1"},[l("第11讲：MC如何淘汰冷key和失效key "),e("a",{class:"header-anchor",href:"#第11讲-mc如何淘汰冷key和失效key","aria-label":'Permalink to "第11讲：MC如何淘汰冷key和失效key"'},"​")],-1),n=e("p",null,'你好，我是你的缓存课老师陈波，欢迎进入第 11 课时"Memcached 淘汰策略"的学习。',-1),r=e("h6",{id:"淘汰策略",tabindex:"-1"},[l("淘汰策略 "),e("a",{class:"header-anchor",href:"#淘汰策略","aria-label":'Permalink to "淘汰策略"'},"​")],-1),h=e("p",null,"Mc 作为缓存组件，意味着 Mc 中只能存储访问最频繁的热数据，一旦存入数据超过内存限制，就需要对 Mc 中的冷 key 进行淘汰工作。Mc 中的 key 基本都会有过期时间，在 key 过期后，出于性能考虑，Mc 并不会立即删除过期的 key，而是由维护线程逐步清理，同时，只有这个失效的 key 被访问时，才会进行删除，从而回收存储空间。所以 Mc 对 key 生命周期的管理，即 Mc 对 key 的淘汰，包括失效和删除回收两个纬度，知识结构如下图所示。",-1),p=y("",17),L=e("p",null,"如下图，MC 在新写入 key 时，如果 key 的过期时间超过 61s，就会直接插入到 HOT LRU。HOT LRU 会有内存限制，每个 HOT LRU 所占内存不得超过所在 slabclass 总实际使用内存的 20%。LRU 维护线程在执行日常维护工作时，首先对 TEMP LRU 进行清理，接下来就会对 HOT LRU 进行维护。HOT LRU 的维护，也是首先轮询 500 次，每次轮询进行 5 次小循环，小循环时，首先检查 key 是否过期失效，如果失效则进行回收淘汰，然后继续小循环。直到遇到没失效的 key。如果这个 key 的状态是 ACTIVE，则迁移到 WARM LRU。对于非 ACTIVE 状态的 key，如果 HOT LRU 内存占用超过限制，则迁移到 COLD LRU，否则进行纾困性清理掉该 key，注意这种纾困性清理操作一般不会发生，一旦发生时，虽然会清理掉该 key，但操作函数此时也认定本次操作回收和清理 keys 数仍然为 0。",-1),R=e("p",null,"如下图，如果 HOT LRU 中回收和迁移的 keys 数为 0，LRU 维护线程会对 WARM LRU 进行轮询。WARM LRU 也有内存限制，每个 WARM LRU 所占内存不得超过所在 slabclass 总实际使用内存的 40%。WARM LRU 的维护，也是首先轮询 500 次，每次轮询进行 5 次小循环，小循环时，首先检查 key 是否过期失效，如果失效则进行回收淘汰，然后继续小循环。直到遇到没失效的 key。如果这个 key 的状态是 ACTIVE，则内部搬运到 LRU 队列头部。对于非 ACTIVE 状态的 key，如果 WARM LRU 内存占用超过限制，则迁移到 COLD LRU，否则进行纾困性清理掉该 key。注意这种纾困性清理操作一般不会发生，一旦发生时，虽然会清理掉该 key，但操作函数此时也认定本次操作回收和清理 keys 数仍然为 0。",-1),M=e("p",null,"LRU 维护线程最后会对 COLD LRU 进行维护，如下图。与 TEMP LRU 相同，COLD LRU 也没有长度限制，可以持续存放数据。COLD LRU 的维护，也是首先轮询 500 次，每次轮询进行 5 次小循环，小循环时，首先检查 key 是否过期失效，如果失效则进行回收淘汰，然后继续小循环。直到遇到没失效的 key。如果这个 key 的状态是 ACTIVE，则会迁移到 WARM LRU 队列头部，否则不处理直接返回。",-1),d=e("p",null,"LRU 维护线程处理时，TEMP LRU 是在独立循环中进行，其他三个 LRU 在另外一个循环中进行，如果 HOT、WARM、COLD LRU 清理或移动的 keys 数为 0，则那个 500 次的大循环就立即停止。",-1),U=e("br",null,null,-1),u=e("p",null,'OK，这节课就讲到这里啦，下一课时我将分享"Memcached 内存管理 slab 机制"，记得按时来听课哈。好，下节课见，拜拜！',-1),m=e("br",null,null,-1),C=e("br",null,null,-1);function A(f,T,b,g,E,O){const a=c("Image");return k(),o("div",null,[i,n,r,h,s(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/99/C1/CgoB5l2lMr6ASGzEAACB7rAcaqU851.png"}),l(),p,s(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/99/E1/CgotOV2lMr-AaQVZAAC-AitDERU510.png"}),l(),L,s(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/99/C1/CgoB5l2lMr-Adai5AADecNLamqw346.png"}),l(),R,s(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/99/E1/CgotOV2lMr-AYNh7AAEBqGNruvU217.png"}),l(),M,s(a,{alt:"",src:"http://s0.lgstatic.com/i/image2/M01/99/C1/CgoB5l2lMr-AVx39AADL6FNQktQ690.png"}),l(),d,U,u,m,C])}const D=t(_,[["render",A]]);export{I as __pageData,D as default};
