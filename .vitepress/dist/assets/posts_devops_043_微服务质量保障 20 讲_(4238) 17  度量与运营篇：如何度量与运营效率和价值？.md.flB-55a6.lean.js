import{_ as s,F as l,g as n,K as e,h as a,ar as p,l as t,o as i}from"./chunks/framework.VlluEs-f.js";const M=JSON.parse('{"title":"17度量与运营篇：如何度量与运营效率和价值？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/043_微服务质量保障 20 讲/(4238) 17  度量与运营篇：如何度量与运营效率和价值？.md","filePath":"posts/devops/043_微服务质量保障 20 讲/(4238) 17  度量与运营篇：如何度量与运营效率和价值？.md","lastUpdated":1718371218000}'),_={name:"posts/devops/043_微服务质量保障 20 讲/(4238) 17  度量与运营篇：如何度量与运营效率和价值？.md"},r=p("",9),h=t("p",null,"如上图，需求阶段从想法提出、产出需求文档到完成需求评审共跨越了 10 天，因此周期为 10 天。而在这 10 天时间里，共投入了 15 PD。随后，研发人员开始进行技术设计和评审、编码、联调、自测等环节，共跨越 15 天，总投入 60 PD。与此同时，测试人员开始进行测试设计，投入 2 PD。研发人员提交测试后，测试人员开始测试执行，跨越了 5 天，投入 10 PD人力。需要特别注意的是，测试设计阶段的周期是 0 天，这是因为测试设计阶段的周期在开发阶段的周期内，从交付视角看，测试设计并没有占用额外的周期。",-1),c=t("p",null,"所以，对于这个需求来说，三个阶段的总周期是 10+15+5=30 天，工时投入是 15+60+2+10=87 PD。从周期上看，需求阶段、开发阶段、测试阶段的周期比为 10:15:5，从工时比维度看，需求阶段、开发阶段、测试阶段的人日比为 15:60:12。",-1),u=t("p",null,"通过上面的数据还可以知道，如果每个阶段只有 1 个人力投入到项目中，那么该阶段的周期数应等于工时数。周期数大于工时数时，意味着在项目交付过程中有挂起或等待的时候。工时数大于周期数，意味着利用周期内的节假日进行了赶工（也就是加班）。无论是等待还是加班，都属于非正常情况，需要深入分析，使项目交付过程正常化。同样，每个阶段有多人投入的情况也是如此，只不过涉及多人时，需要弄清楚在每个阶段，多个人是如何参与和协同的，分析复杂度也将有所提高。",-1),d=t("p",null,"上面是单个需求的效率基础数据，可以按上述逻辑记录和收集其他需求的数据，然后聚合分析，可以得出来整体的效率现状。通常来说，研发团队和测试团队更关注开发阶段和测试阶段的周期比和工时比。对于测试团队来说，一般会以此来定测试效率指标，先盘点清楚当前的开发测试工时比（比如为 3.5:1），再在该基础上提高一点要求（比如为 4:1 或 4.5:1）。",-1),q=t("p",null,"如果想查看大量需求的效率数据，用累积流量图更为直观。它按天统计出各个需求的状态，并绘制出来，形成累积流量图（横轴：日期，纵轴：需求数量）。",-1),g=t("blockquote",null,[t("p",null,"累积流量图由精益思想的创始人 Don Reinertsen 和 David Anderson 引入。它是一个综合的价值流度量方法，通过它可以得到不同维度的信息，反应 WIP 的状态、项目的步调、并且快速识别出交付时间存在的风险以及瓶颈。它是追踪和预测敏捷项目的重要工具。它从不同方面描述工作：总范围、进行中和已完成的。")],-1),m=p("",16),b=t("ul",null,[t("li",null,"测试人员视角")],-1),P=t("p",null,"测试人员视角主要查看测试人员本身的问题。",-1),A=t("h5",{id:"_3-项目组视角",tabindex:"-1"},[a("3. 项目组视角 "),t("a",{class:"header-anchor",href:"#_3-项目组视角","aria-label":'Permalink to "3. 项目组视角"'},"​")],-1),f=t("p",null,"分析了测试人员的效率瓶颈外，还可以扩大关注圈到产品交付过程视角，针对每个阶段进行区别分析。因为测试阶段之前的阶段出现问题，会导致测试团队花更多的力气去调整和适应，且更容易在过程中出现各种各样的非预期问题，遗患无穷。",-1),k=t("p",null,'这里说一下我自己的经历，我分析过比较多的反馈测试人员资源不足类的实例，最后发现根本问题有两个：一是测试人员的效率的确可以再提升，二是由于项目规划导致，项目规划时没有把测试人员当作是一种必备资源进行整体考虑和预排期，而是直接按顺序排时间，等到了测试人员排期时才发现不符合预期，于是想当然地产生了"测试人员人再多一些就好了""测试人员效率再高一些就好了"的诉求。当然，每个项目和团队的问题总是千差万别，建立起分析框架，遇到问题时多维度分析，以不变应万变。',-1),D=t("h3",{id:"价值度量与运营",tabindex:"-1"},[a("价值度量与运营 "),t("a",{class:"header-anchor",href:"#价值度量与运营","aria-label":'Permalink to "价值度量与运营"'},"​")],-1),C=t("p",null,'无论是保障质量还是提升交付效率，都是在"如何正确地进行产品交付"这个维度上，那么如何确保产品本身是正确的呢？即，产品本身传递了正确的价值，这就需要对价值进行度量。',-1),T=t("h4",{id:"价值度量指标",tabindex:"-1"},[a("价值度量指标 "),t("a",{class:"header-anchor",href:"#价值度量指标","aria-label":'Permalink to "价值度量指标"'},"​")],-1),x=t("p",null,"无论产品形态是怎样的，产品价值不外乎是业务层面的价值体现和技术方面的价值体现，如图所示：",-1),S=p("",12);function B(I,V,N,y,F,v){const o=l("Image");return i(),n("div",null,[r,e(o,{alt:"image (4).png",src:"https://s0.lgstatic.com/i/image/M00/4D/5E/Ciqc1F9aBdqAbxgcAAByrfGDeno440.png"}),a(),h,c,u,d,q,g,e(o,{alt:"image (5).png",src:"https://s0.lgstatic.com/i/image/M00/4D/6A/CgqCHl9aBeSAGULSAABY0WhIW08217.png"}),a(),m,e(o,{alt:"image (6).png",src:"https://s0.lgstatic.com/i/image/M00/4D/5E/Ciqc1F9aBfmACNNeAABebK14DKQ976.png"}),a(),b,P,e(o,{alt:"image (7).png",src:"https://s0.lgstatic.com/i/image/M00/4D/6A/CgqCHl9aBgOABXVLAACFQBPPpf4829.png"}),a(),A,f,e(o,{alt:"image (8).png",src:"https://s0.lgstatic.com/i/image/M00/4D/5E/Ciqc1F9aBg2AP2suAACqSl_5IF8597.png"}),a(),k,D,C,T,x,e(o,{alt:"image (9).png",src:"https://s0.lgstatic.com/i/image/M00/4D/6A/CgqCHl9aBhuAZAG1AAFF3SLG8Pg504.png"}),a(),S])}const W=s(_,[["render",B]]);export{M as __pageData,W as default};
