import{_ as t,F as h,g as p,K as i,h as a,ar as n,l,o as k}from"./chunks/framework.VlluEs-f.js";const q=JSON.parse('{"title":"第22讲：通过Ganglia实现对HDFS、Yarn、Spark运行状态监控","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/042_大数据运维实战/(3093) 第22讲：通过 Ganglia 实现对 HDFS、Yarn、Spark 运行状态监控.md","filePath":"posts/devops/042_大数据运维实战/(3093) 第22讲：通过 Ganglia 实现对 HDFS、Yarn、Spark 运行状态监控.md","lastUpdated":1718371218000}'),e={name:"posts/devops/042_大数据运维实战/(3093) 第22讲：通过 Ganglia 实现对 HDFS、Yarn、Spark 运行状态监控.md"},E=n("",9),g=l("p",null,"Ganglia 监控系统图 从图中可以看出，一个 Ganglia 监控系统由多个 Gmond 进程和一个主 Gmetad 进程组成，所有 Gmond 进程将收集到的监控数据汇总到 Gmetad 管理端，而 Gmetad 将数据存储到 RRD 数据库中，最后通过 PHP 程序在 Web 界面进行展示。",-1),r=l("p",null,"这是最简单的 Ganglia 运行结构图，在复杂的网络环境下，还有更复杂的 Ganglia 监控架构。下图是 Ganglia 的另一种分布式监控架构图。",-1),d=n("",45),o=n("",7),y=n("",16);function c(F,u,m,C,_,B){const s=h("Image");return k(),p("div",null,[E,i(s,{alt:"4.png",src:"https://s0.lgstatic.com/i/image/M00/30/13/CgqCHl8IQR2AK0dMAAFl7EwL5Ks931.png"}),a(),g,r,i(s,{alt:"5.png",src:"https://s0.lgstatic.com/i/image/M00/30/07/Ciqc1F8IQTSAHWc_AALo2flr8-U281.png"}),a(),d,i(s,{alt:"image3.png",src:"https://s0.lgstatic.com/i/image/M00/2F/F0/CgqCHl8IEhqAE47sAALnNEBdEJ0505.png"}),a(),o,i(s,{alt:"image4.png",src:"https://s0.lgstatic.com/i/image/M00/2F/E4/Ciqc1F8IEiuAM0NNAANjAM7xHtY497.png"}),a(),y])}const f=t(e,[["render",c]]);export{q as __pageData,f as default};
