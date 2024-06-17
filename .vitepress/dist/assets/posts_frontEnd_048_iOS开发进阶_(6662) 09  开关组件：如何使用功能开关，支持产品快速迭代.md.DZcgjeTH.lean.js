import{_ as l,F as e,g as p,K as n,h as s,l as i,ar as t,o as h}from"./chunks/framework.VlluEs-f.js";const S=JSON.parse('{"title":"09开关组件：如何使用功能开关，支持产品快速迭代","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/048_iOS开发进阶/(6662) 09  开关组件：如何使用功能开关，支持产品快速迭代.md","filePath":"posts/frontEnd/048_iOS开发进阶/(6662) 09  开关组件：如何使用功能开关，支持产品快速迭代.md","lastUpdated":1718371218000}'),k={name:"posts/frontEnd/048_iOS开发进阶/(6662) 09  开关组件：如何使用功能开关，支持产品快速迭代.md"},E=i("h1",{id:"_09开关组件-如何使用功能开关-支持产品快速迭代",tabindex:"-1"},[s("09开关组件：如何使用功能开关，支持产品快速迭代 "),i("a",{class:"header-anchor",href:"#_09开关组件-如何使用功能开关-支持产品快速迭代","aria-label":'Permalink to "09开关组件：如何使用功能开关，支持产品快速迭代"'},"​")],-1),d=i("p",null,"代码管理规范一讲我提到过，开发功能的时候要新建功能分支。在实际工作当中，有一种功能分支我把它叫作长命功能分支（Long lived feature branch），因为有些大功能需要我们花几周甚至几个月来开发，相对应地它的功能分支也会非常庞大。",-1),g=i("p",null,"当整个功能开发完毕后，我们需要把它合并到主分支里面，因为里面代码实在太多了，不可避免地就会出现许多合并冲突。哪怕勉强修正并编译通过，App 里面也很可能隐藏一些不容易发现的 Bug。",-1),r=i("p",null,"怎样解决这种难题呢？",-1),o=i("p",null,"通常的办法是我们会把一个庞大的功能分拆成多个小任务，每个任务都建一个独立的功能分支，当一个任务完成后马上合并到主分支里面。",-1),c=t("",6),y=t("",8),F=i("p",null,[s("有了这些功能开关的定义以后，接着我们定义这些开关的 DataStore。首先建立了一个名叫 "),i("code",null,"TogglesDataStoreType"),s("的协议，它只定义了两个方法，其中"),i("code",null,"isToggleOn(_ toggle: ToggleType) -> Bool"),s(" 用于读取某个开关的值，而 "),i("code",null,"update(toggle: ToggleType, value: Bool)"),s(" 用于更新某个开关的值。")],-1),u=t("",7),C=t("",20),A=t("",8);function _(T,D,B,f,I,b){const a=e("Image");return h(),p("div",null,[E,d,g,r,o,n(a,{alt:"图片8.png",src:"https://s0.lgstatic.com/i/image6/M01/24/4D/CioPOWBYUUeARJ5qAAjTjIXDSJA208.png"}),s(),c,n(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image6/M01/1F/4A/CioPOWBRvmeAGcsiAAHzX6EpRRU507.png"}),s(),y,n(a,{alt:"图片1.png",src:"https://s0.lgstatic.com/i/image6/M00/25/6C/CioPOWBZrCOACNxtAAKd2755Bx0933.png"}),s(),F,n(a,{alt:"图片6.png",src:"https://s0.lgstatic.com/i/image6/M00/24/4D/CioPOWBYURiAff7BAALmppeDy9I518.png"}),s(),u,n(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image6/M01/1F/53/CioPOWBRxW6AV4TlAAI7l4yPlhE343.png"}),s(),C,n(a,{alt:"2021322-144332.gif",src:"https://s0.lgstatic.com/i/image6/M00/24/37/Cgp9HWBYPLeAW1FfAKgkEsZ8QtE822.gif"}),s(),A])}const v=l(k,[["render",_]]);export{S as __pageData,v as default};
