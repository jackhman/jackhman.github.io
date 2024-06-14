import{_ as o,D as e,o as p,g as r,J as t,h as s,Q as l,m as n}from"./chunks/framework.f67d7268.js";const B=JSON.parse('{"title":"11资源节点树：通过Sentinel无侵入实现流量链生成规则","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/应用性能分析实战_文档/(7060) 11  资源节点树：通过 Sentinel 无侵入实现流量链生成规则.md","filePath":"posts/backEnd/应用性能分析实战_文档/(7060) 11  资源节点树：通过 Sentinel 无侵入实现流量链生成规则.md","lastUpdated":1696682708000}'),c={name:"posts/backEnd/应用性能分析实战_文档/(7060) 11  资源节点树：通过 Sentinel 无侵入实现流量链生成规则.md"},i=l("",25),E=n("p",null,"通过 SkyWalking 的链路图，我们可以清晰看到聚合搜索的调用顺序。",-1),y=n("h4",{id:"_2-接入-sentinel",tabindex:"-1"},[s("2.接入 Sentinel "),n("a",{class:"header-anchor",href:"#_2-接入-sentinel","aria-label":'Permalink to "2.接入 Sentinel"'},"​")],-1),g=n("p",null,"通过在 pom 文件中，引入并配置 Sentinel 的 webmvc 和 okhttp 适配器的客户端 jar 包，将聚合服务接入 Sentinel 后，我们会得到如下的簇点链路图：",-1),d=n("p",null,"综上可以看到，两个 APM 产品虽然接入方式不同，但一线开发人员都不需要编写任何监控代码，且两个 APM 工具的链路形态基本一致。",-1),u=n("p",null,"它们织入的监控的流程，如图中红色标识所示：",-1),h=l("",6),_=l("",10),A=l("",4),S=n("p",null,"默认的机器节点关联着两个 EntranceNode 节点：Entrance 1 和 Entrance 2，Entrance 1 和 Entrance 2 节点又分别关联着自己的 DefaultNode 节点 nodeA。需要注意的是，DefaultNode 由资源 ID 和输入的名称来决定唯一性。",-1),q=n("p",null,"现在回到我们课程示例的聚合搜索的节点树构建过程。",-1),C=n("p",null,"当监控搜索工具接收到用户发来的请求时，在 Spring-MVC 适配器中通过 ContextUtil.enter 和 SphU.entry 方法，在内存中生成上下文对象，如下：",-1),F=n("p",null,"上下文存储的当前节点，关联的节点树只有一个搜索入口方法的节点，且当前节点的父节点和子节点都是空。",-1),k=n("p",null,"当请求流量在聚合搜索工具项目中准备搜索 baidu 资源时，在 OkHttp 拦截器会执行 SphU.entry 方法，此时在内存中生上下文对象，如下：",-1),m=n("p",null,"当接收到 baidu 搜索的响应后，请求流量在聚合搜索工具项目中准备搜索 google 资源时，在 OkHttp 拦截器会同样执行 SphU.entry 方法，此时在内存中生上下文对象，如下：",-1),b=l("",6);function x(D,P,M,f,v,T){const a=e("Image");return p(),r("div",null,[i,t(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image6/M00/3C/86/CioPOWCKhvSAA1Y4AAFSXRAbAPM344.png"}),s(),E,t(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M01/3C/7D/Cgp9HWCKhvuAerrVAAEERiqw56A771.png"}),s(),y,g,t(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image6/M01/3C/7D/Cgp9HWCKhwqAa6RgAAIjrJ0VPww951.png"}),s(),d,u,t(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image6/M00/3C/86/CioPOWCKhxKAbsJzAALa-MhIbU0965.png"}),s(),h,t(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image6/M01/3C/7D/Cgp9HWCKhx2AYh8QAAbUg8otm8U872.png"}),s(),_,t(a,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image6/M00/3C/86/CioPOWCKhyeAaqifAACbga2uEV4102.png"}),s(),A,t(a,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image6/M00/3C/86/CioPOWCKhy2ATLj3AADDp5GzECs155.png"}),s(),S,q,t(a,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image6/M01/3C/7D/Cgp9HWCKhzaAZSAzAAIVgLMIdH0640.png"}),s(),C,t(a,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image6/M00/3C/86/CioPOWCKh0CAZy3ZAADRJhoYYm4469.png"}),s(),F,k,t(a,{alt:"Drawing 9.png",src:"https://s0.lgstatic.com/i/image6/M01/3C/7D/Cgp9HWCKh0eALa6DAADn0KaM4g4144.png"}),s(),m,t(a,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image6/M01/3C/7D/Cgp9HWCKh0-AdllgAAFfk0vnIW4014.png"}),s(),b])}const N=o(c,[["render",x]]);export{B as __pageData,N as default};
