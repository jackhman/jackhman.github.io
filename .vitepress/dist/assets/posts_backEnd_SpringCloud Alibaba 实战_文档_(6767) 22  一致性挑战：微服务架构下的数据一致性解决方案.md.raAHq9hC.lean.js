import{_ as h,F as l,g as p,K as a,h as n,ar as t,l as s,o as k}from"./chunks/framework.VlluEs-f.js";const v=JSON.parse('{"title":"22一致性挑战：微服务架构下的数据一致性解决方案","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/SpringCloud Alibaba 实战_文档/(6767) 22  一致性挑战：微服务架构下的数据一致性解决方案.md","filePath":"posts/backEnd/SpringCloud Alibaba 实战_文档/(6767) 22  一致性挑战：微服务架构下的数据一致性解决方案.md","lastUpdated":1718371218000}'),e={name:"posts/backEnd/SpringCloud Alibaba 实战_文档/(6767) 22  一致性挑战：微服务架构下的数据一致性解决方案.md"},E=t("",7),r=s("p",null,"CAP 原则",-1),d=s("ul",null,[s("li",null,[s("p",null,"一致性 C 代表更新操作成功后，所有节点在同一时间的数据完全一致。")]),s("li",null,[s("p",null,"可用性 A 代表用户访问数据时，系统是否能在正常响应时间返回预期的结果。")]),s("li",null,[s("p",null,"分区容错性 P 代表分布式系统在遇到某节点或网络分区故障的时候，仍然能够对外提供满足一致性或可用性的服务。")])],-1),g=s("p",null,"CAP 是新人比较难理解的知识，我们通过实际案例进行说明。以订单系统与库存系统为例，",-1),o=t("",16),y=s("p",null,"Try 阶段",-1),c=s("p",null,"当两个系统所有资源都锁定完毕，便进入第二阶段执行 Confirm 操作。Confirm 操作用于提交数据，提交数据的过程非常简单，将订单表预增金额移动到订单金额中，订单状态变为完成，商品库存对应减少。",-1),F=s("p",null,"二阶段 Confirm 操作",-1),C=s("p",null,'如果 Try 阶段锁定资源出现异常，比如出现"库存不足"的情况，则进入第二阶段执行 Cancel 操作撤销之前锁定的资源。订单表预增金额重置为 0，订单状态变为取消，而库存表冻结库存也重置为 0。',-1),A=t("",11),u=t("",25);function B(D,m,_,T,b,S){const i=l("Image");return k(),p("div",null,[E,a(i,{alt:"图片1.png",src:"https://s0.lgstatic.com/i/image6/M00/39/E7/Cgp9HWB9O-qAebifAAXtieNHAz8084.png"}),n(),r,d,g,a(i,{alt:"图片2.png",src:"https://s0.lgstatic.com/i/image6/M00/39/E7/Cgp9HWB9O_WAbY3zAAKaSH-d4yo726.png"}),n(),o,a(i,{alt:"图片3.png",src:"https://s0.lgstatic.com/i/image6/M00/39/E7/Cgp9HWB9PAGAVyjTAAKnzSH8xiI436.png"}),n(),y,c,a(i,{alt:"图片4.png",src:"https://s0.lgstatic.com/i/image6/M00/39/F0/CioPOWB9PBeAY0amAALwskGowW0522.png"}),n(),F,C,a(i,{alt:"图片5.png",src:"https://s0.lgstatic.com/i/image6/M00/39/F0/CioPOWB9PCGAEXbZAAL9ujnrnC0066.png"}),n(),A,a(i,{alt:"图片6.png",src:"https://s0.lgstatic.com/i/image6/M00/39/F0/CioPOWB9PCuAR_vQAAL51gK-oj0587.png"}),n(),u])}const P=h(e,[["render",B]]);export{v as __pageData,P as default};
