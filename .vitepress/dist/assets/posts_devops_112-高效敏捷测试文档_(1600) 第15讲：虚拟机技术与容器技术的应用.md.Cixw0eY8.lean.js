import{_ as r,F as n,g as i,K as o,h as l,ar as s,l as e,o as a}from"./chunks/framework.VlluEs-f.js";const J=JSON.parse('{"title":"第15讲：虚拟机技术与容器技术的应用","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/112-高效敏捷测试文档/(1600) 第15讲：虚拟机技术与容器技术的应用.md","filePath":"posts/devops/112-高效敏捷测试文档/(1600) 第15讲：虚拟机技术与容器技术的应用.md","lastUpdated":1718371218000}'),p={name:"posts/devops/112-高效敏捷测试文档/(1600) 第15讲：虚拟机技术与容器技术的应用.md"},_=s("",27),c=s("",12),u=s("",8),d=e("p",null,"图3 NUMA 工作示意图",-1),h=e("br",null,null,-1),b=e("p",null,'在虚拟机环境下可以实现同一个虚拟机的所有虚拟 CPU（vCPU）尽可能调度到同一个物理 CPU 上，并且将这个虚拟机的所有"物理内存"尽可能分配给和物理 CPU 属于同一节点的内存，从而有助于提高虚拟机的性能。Linux 提供了一个用于性能调优的工具 Numactl，通过它可以查看系统的 NUMA 状态，可以将一个进程绑定在某个节点上执行。',-1),A=e("br",null,null,-1),g=e("p",null,"下面是一些 numactl 常用的命令：",-1),m=e("br",null,null,-1),D=e("br",null,null,-1),P=e("p",null,"如果是 Linux 系统上的 Docker 环境，默认情况下，容器可以使用的主机 CPU 资源是不受限制的，但是一旦发生容器内程序异常使用 CPU 的情况，很可能把整个主机或虚拟机的 CPU 资源耗尽。可通过 Docker 命令来限制某个容器使用 CPU 的个数，以及使用哪个节点的 CPU 或内存。",-1),C=e("br",null,null,-1),T=s("",12),k=e("p",null,"图4 Hoverfly 捕获模式和模拟模式",-1),U=e("br",null,null,-1),M=e("p",null,"当 Hoverfly 处于捕获模式，它可以捕获到服务的请求和响应，并随后导出到一个 .json 文件。把 Hoeverfly 切换到模拟模式，就可以模拟刚才的服务做出响应，如图 4 所示，相关命令如下所示：",-1),S=e("br",null,null,-1),f=e("h3",{id:"molecule-虚拟化技术的自动化测试工具",tabindex:"-1"},[e("strong",null,"Molecule------虚拟化技术的自动化测试工具"),l(),e("a",{class:"header-anchor",href:"#molecule-虚拟化技术的自动化测试工具","aria-label":'Permalink to "**Molecule------虚拟化技术的自动化测试工具**"'},"​")],-1),q=e("p",null,"Molecule 是一个开源的软件工具，可以帮助开发和测试 Ansible 在部署中用到的配置脚本。Ansible 在 Devops 工具链里是一个自动化的部署工具，主 playbook 文件通过调用 roles 目录下的 role，来实现各种灵活多变的部署需求。你可以为每一个微服务的容器创建一个 role，部署的具体任务在 role 里进行定义。Molecule 在虚拟机或容器上为正在运行的 Ansible Role 测试构建脚手架，无需再手工创建这些测试环境。",-1),v=e("br",null,null,-1),x=e("p",null,"图5 Molecule 工作流程",-1),I=e("br",null,null,-1),N=e("p",null,"Molecule 利用 Vagrant、Docker 和 OpenStack 来管理虚拟机或容器，并支持 Serverspec、Testinfra 或 Goss 来运行测试，如图 5 所示。在 sequence facility model 中的默认步骤包括：虚拟机管理、Ansible 语法静态检查、幂等性测试和收敛性测试。",-1),V=e("br",null,null,-1),K=e("p",null,"运行 molecule 的脚本如下所示：",-1),L=e("br",null,null,-1),y=e("br",null,null,-1),H=e("p",null,"运行的测试脚本如下所示：",-1),E=e("br",null,null,-1),R=e("h3",{id:"kubernetes-与测试环境",tabindex:"-1"},[e("strong",null,"Kubernetes 与测试环境"),l(),e("a",{class:"header-anchor",href:"#kubernetes-与测试环境","aria-label":'Permalink to "**Kubernetes 与测试环境**"'},"​")],-1),z=e("p",null,"为了支持大规模的并发业务，企业一般都需要把服务部署到容器集群。Kubernetes（简称 K8s）是目前最具影响力的容器集群管理工具，为容器化的应用提供部署运行、资源调度、服务发现和动态伸缩等一系列完整功能，提高了大规模容器集群管理的便捷性，所以，它可用于部署和管理容器化的测试环境，尤其是性能测试环境和准生产环境。",-1),O=e("br",null,null,-1),F=e("p",null,"Kubernetes 提供的管理能力能够很好的支持业务的可伸缩性（Scalability）。伸缩性是指：如果系统的工作负载增加，只需生成更多容器或者在容器集群中增加更多的节点就可以提高整个集群的处理能力。",-1),X=e("br",null,null,-1),B=s("",10);function w(G,Q,$,W,Y,Z){const t=n("Image");return a(),i("div",null,[_,o(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/4D/Cgq2xl5ziLmAXVD_AAR2SXmy_Lg464.png"}),l(),c,o(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/4D/Cgq2xl5ziLmAXQlPAACe6B3-Kg0159.png"}),l(),u,o(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/4D/Cgq2xl5ziLmAbmF-AABhqE68RKk310.png"}),l(),d,h,b,A,g,m,o(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/4D/Cgq2xl5ziLqAQfXHAAEmwXU3n98841.png"}),l(),D,P,C,o(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/4D/Cgq2xl5ziLqATeYlAAGRtugwqus985.png"}),l(),T,o(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/4D/CgpOIF5ziLqAeAT4AAFUtEcDKpk241.png"}),l(),k,U,M,S,o(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/4D/CgpOIF5ziLqAAcw_AAEDM6Shcl8178.png"}),l(),f,q,v,o(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/4D/CgpOIF5ziLuAEcwkAAEHbiMUDBA190.png"}),l(),x,I,N,V,K,L,o(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/4D/CgpOIF5ziLuAfYddAAAQmZ9UdiA332.png"}),l(),y,H,E,o(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/4D/CgpOIF5ziLuAVQNcAAH2YU8A0R4613.png"}),l(),R,z,O,F,X,o(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/78/4D/CgpOIF5ziLuAE6VXAARbNZRIUic898.png"}),l(),B])}const ee=r(p,[["render",w]]);export{J as __pageData,ee as default};
