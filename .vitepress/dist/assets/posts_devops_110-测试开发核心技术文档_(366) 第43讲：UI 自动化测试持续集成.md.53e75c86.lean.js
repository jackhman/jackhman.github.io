import{_ as p,D as t,o as e,g as o,J as a,h as n,Q as c,m as l}from"./chunks/framework.f67d7268.js";const I=JSON.parse('{"title":"第43讲：UI自动化测试持续集成","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/110-测试开发核心技术文档/(366) 第43讲：UI 自动化测试持续集成.md","filePath":"posts/devops/110-测试开发核心技术文档/(366) 第43讲：UI 自动化测试持续集成.md","lastUpdated":1696682708000}'),i={name:"posts/devops/110-测试开发核心技术文档/(366) 第43讲：UI 自动化测试持续集成.md"},r=c("",21),E=l("p",null,"Git 地址就是我们在线的 Git 地址，如图所示：",-1),y=l("p",null,"job 的周期性构建，设置 10 分钟周期性构建一次，每隔 5 分钟执行poll build，如图所示：",-1),u=l("p",null,"接下来是 Build 构建过程，也就是执行我们前面讲到的相关命令，如图所示：",-1),g=l("p",null,"接着是 Post-build Action ，里面是填了 allure_results，如图所示：",-1),d=l("p",null,"再接下来是 Publish JUnit test result report，这里填的是 junit_xml ，如图所示：",-1),m=l("p",null,"如果你需要更多的分析结果，可以点开左下角的 Add post-build action 按钮，就能找到更多的功能，比如，测试完成的结果要不要自动发一封邮件提醒，测试完成之后要不要自动提交到 GitHub，你都可以通过这些内容来完成更多功能的配置。",-1),h=l("p",null,"项目配置完成后运行。点击 Build Now 可以进行调度，它会调度我们的远程节点，你可以看到，它会开始启动测试用例对应的 Web 测试，也就是我们之前所写过的一个 case 。等 case 执行完成，你可以看到它就多了一层任务，如图所示：",-1),_=l("p",null,"刷新一下，就可以看到整个测试的结果，JUnit 下面存的是所有的测试结果，你可以点击进去，就会看到所有正在跑的测试用例。",-1),A=l("p",null,"然后打开 Allure ，在这里可以查看全部 case 数量以及每个 case 的状态，你也可以点进来查看每个子节点的基本情况，可以看到你有 4 个测试用例。",-1),v=l("p",null,"以上，就是整个结果的展示，只要按照我刚才说的流程配置好，就可以完成 UI 自动化测试持续集成。",-1),b=l("p",null,"App 跟这个流程是类似的，如果设备众多，需要使用一些类似STF、selenium grid的测试平台解决方案，因为比较复杂，就不再小课中讲解了。如果有感兴趣学习的同学，可以关注拉勾与霍格沃兹测试学院合作的测试开发大课。",-1),C=l("p",null,"通过本课时，你已经知道了 UI 自动化测试如何持续集成。下节课我将会讲解接口测试怎么完成，我们下节课再见。",-1);function F(q,D,x,P,j,k){const s=t("Image");return e(),o("div",null,[r,a(s,{alt:"image001.png",src:"https://s0.lgstatic.com/i/image/M00/13/B8/Ciqc1F7Pi2yAS6TYAAFk9oROVHE328.png"}),n(),E,a(s,{alt:"image003.png",src:"https://s0.lgstatic.com/i/image/M00/13/B8/Ciqc1F7Pi3SAYbthAAEpID2p-GM827.png"}),n(),y,a(s,{alt:"image005.png",src:"https://s0.lgstatic.com/i/image/M00/13/C4/CgqCHl7Pi36ATlVwAAEVT5YofTI913.png"}),n(),u,a(s,{alt:"image007.png",src:"https://s0.lgstatic.com/i/image/M00/13/B8/Ciqc1F7Pi4WAC1w6AAFCuLvR1f4100.png"}),n(),g,a(s,{alt:"image009.png",src:"https://s0.lgstatic.com/i/image/M00/13/B9/Ciqc1F7Pi4uAfZNiAACQtmL-_pA173.png"}),n(),d,a(s,{alt:"image011.png",src:"https://s0.lgstatic.com/i/image/M00/13/C4/CgqCHl7Pi5KAJt3rAAD80r8f5Sw405.png"}),n(),m,a(s,{alt:"image013.png",src:"https://s0.lgstatic.com/i/image/M00/13/B9/Ciqc1F7Pi5mARPZyAAHakJHJY2A669.png"}),n(),h,a(s,{alt:"image015.png",src:"https://s0.lgstatic.com/i/image/M00/13/B9/Ciqc1F7Pi6CAB-ePAADig76NE3U696.png"}),n(),_,a(s,{alt:"image017.png",src:"https://s0.lgstatic.com/i/image/M00/13/B9/Ciqc1F7Pi6yAFLJnAAICnidwOeg549.png"}),n(),a(s,{alt:"image019.png",src:"https://s0.lgstatic.com/i/image/M00/13/B9/Ciqc1F7Pi7KARRxEAACyqN0MnhI284.png"}),n(),a(s,{alt:"image021.png",src:"https://s0.lgstatic.com/i/image/M00/13/B9/Ciqc1F7Pi7iAWX7ZAADKXMwC0-I428.png"}),n(),A,a(s,{alt:"image023.png",src:"https://s0.lgstatic.com/i/image/M00/13/C4/CgqCHl7Pi8GAVqs-AAC8LoEU3NQ852.png"}),n(),a(s,{alt:"image025.png",src:"https://s0.lgstatic.com/i/image/M00/13/B9/Ciqc1F7Pi8eAWX16AAGtc_LHHas101.png"}),n(),a(s,{alt:"image027.png",src:"https://s0.lgstatic.com/i/image/M00/13/C4/CgqCHl7Pi8yAM8y9AAHPZBpGzCY544.png"}),n(),v,b,C])}const f=p(i,[["render",F]]);export{I as __pageData,f as default};
