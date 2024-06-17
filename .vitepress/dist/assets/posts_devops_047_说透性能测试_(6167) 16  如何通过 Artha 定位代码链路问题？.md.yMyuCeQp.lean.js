import{_ as n,F as l,g as p,K as a,h as s,ar as h,l as t,o as e}from"./chunks/framework.VlluEs-f.js";const q=JSON.parse('{"title":"16如何通过Artha定位代码链路问题？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/047_说透性能测试/(6167) 16  如何通过 Artha 定位代码链路问题？.md","filePath":"posts/devops/047_说透性能测试/(6167) 16  如何通过 Artha 定位代码链路问题？.md","lastUpdated":1718371218000}'),k={name:"posts/devops/047_说透性能测试/(6167) 16  如何通过 Artha 定位代码链路问题？.md"},r=h("",27),E=t("p",null,"图 1：死锁示意图",-1),d=t("p",null,"接下来我们输入 thread -b 命令查看当前阻塞其他线程的线程，然后我们可以看到 Lock 1 被阻塞了，访问的资源被 Lock 2 占用，如图 2 所示，根据提示的行数我们便能找到死锁位置，对代码进行优化。",-1),g=h("",7),o=h("",13),c=h("",6),y=h("",12),A=t("p",null,"图 6：Web 方式 Arthas 启动",-1),F=t("p",null,"然后我们输入 ip、port 和 agentid 就可以连上被测程序，并且可以开始对被测程序输入 Arthas 命令。接下来的 Arthas 的使用和命令行方式是一样的，不再赘述。",-1),u=t("h4",{id:"_2-arthas-tunnel-server-的操作原理",tabindex:"-1"},[s("2.Arthas Tunnel Server 的操作原理 "),t("a",{class:"header-anchor",href:"#_2-arthas-tunnel-server-的操作原理","aria-label":'Permalink to "2.Arthas Tunnel Server 的操作原理"'},"​")],-1),_=t("p",null,"通过 Arthas Tunnel Server 的操作步骤，我们可以总结出它实现 Web 访问的原理：所有节点的 Arthas 服务启动都会向注册中心（Arthas Tunnel Server）注册，注册中心维护了一个节点列表，当客户端发起访问某个节点，Arthas Tunnel Server 便会从维护的节点列表找到与请求的 ip 和端口号对应的节点进行访问，然后把访问结果返回给客户端。具体流程如图 7 所示：",-1),C=h("",8);function v(b,D,m,B,j,T){const i=l("Image");return e(),p("div",null,[r,a(i,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image6/M01/0F/0C/Cgp9HWA9DKuAMzKWAABTDaKlSO0241.png"}),s(),E,d,a(i,{alt:"image (8).png",src:"https://s0.lgstatic.com/i/image6/M01/0F/4D/CioPOWA9fFWAHUHaAAApcGDj53c885.png"}),s(),g,a(i,{alt:"image (9).png",src:"https://s0.lgstatic.com/i/image6/M01/0F/4D/CioPOWA9fHeACowAAABtN4Cdlac932.png"}),s(),o,a(i,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image6/M00/0F/09/CioPOWA9DNqARGyPAAA2hv8N8DA381.png"}),s(),c,a(i,{alt:"image (11).png",src:"https://s0.lgstatic.com/i/image6/M01/0F/50/Cgp9HWA9fMiAXBhHAABdFH1m-Fk917.png"}),s(),y,a(i,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image6/M00/0F/0D/Cgp9HWA9DPOARvDFAAHh5zegLvs919.png"}),s(),A,F,u,_,a(i,{alt:"流程图.png",src:"https://s0.lgstatic.com/i/image6/M01/0F/4D/CioPOWA9e4SAde4xAABGrtYvn5I356.png"}),s(),C])}const f=n(k,[["render",v]]);export{q as __pageData,f as default};
