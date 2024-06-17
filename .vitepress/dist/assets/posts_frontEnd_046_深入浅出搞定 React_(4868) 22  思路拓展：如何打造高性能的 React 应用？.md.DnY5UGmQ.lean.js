import{_ as p,F as h,g as l,K as n,h as i,ar as t,l as s,o as k}from"./chunks/framework.VlluEs-f.js";const j=JSON.parse('{"title":"22思路拓展：如何打造高性能的React应用？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/046_深入浅出搞定 React/(4868) 22  思路拓展：如何打造高性能的 React 应用？.md","filePath":"posts/frontEnd/046_深入浅出搞定 React/(4868) 22  思路拓展：如何打造高性能的 React 应用？.md","lastUpdated":1718371218000}'),e={name:"posts/frontEnd/046_深入浅出搞定 React/(4868) 22  思路拓展：如何打造高性能的 React 应用？.md"},E=t("",20),r=s("p",null,"通过点击左右两个按钮，我们可以分别对 ChildA 和 ChildB 中的文案进行修改。",-1),d=s("p",null,"由于初次渲染时，两个组件的 render 函数都必然会被触发，因此控制台在挂载完成后的输出内容如下图所示：",-1),g=s("p",null,"接下来我点击左侧的按钮，尝试对 A 处的文本进行修改。我们可以看到界面上只有 A 处的渲染效果发生了改变，如下图箭头处所示：",-1),o=s("p",null,"但是如果我们打开控制台，会发现输出的内容如下图所示：",-1),y=t("",9),c=t("",11),F=t("",34),u=s("p",null,"点击右边按钮，对 count 进行修改，修改后的界面会发生如下的变化：",-1),C=s("p",null,"可以看出，由于 count 发生了变化，因此 useMemo 针对 renderCount 的逻辑进行了重计算。而 text 没有发生变化，因此 renderText 的逻辑压根没有执行。",-1),m=s("p",null,"使用 useMemo，我们可以对函数组件的执行逻辑进行更加细粒度的管控（尤其是定向规避掉一些高开销的计算），同时也弥补了 React.memo 无法感知函数内部状态的遗憾，这对我们整体的性能提升是大有裨益的。",-1),A=s("h3",{id:"总结",tabindex:"-1"},[i("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),D=s("p",null,"本讲，我们学习了 React 组件性能优化中最重要的 3 个思路。",-1),B=s("p",null,'这 3 个思路不仅可以作为大家日常实战的知识储备，更能够帮助你在面试场景下做到言之有物。事实上，在"React 性能优化"这个问题下，许多候选人的回答犹如隔靴搔痒，总在一些无关紧要的细节上使劲儿。若你能把握好本讲的内容，择其中一个或多个方向深入探究，相信你已经超越了大部分的同行。',-1),q=s("p",null,'下一讲，我们将学习 React 组件的设计模式，为打造"高质量应用"做知识储备。',-1);function _(b,x,v,f,R,P){const a=h("Image");return k(),l("div",null,[E,n(a,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/8B/D3/CgqCHl_ga3-ADPKZAACHTPJhWNw299.png"}),i(),r,d,n(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image2/M01/03/AA/CgpVE1_ga4qAdOlsAAAzU_bU8eQ279.png"}),i(),g,n(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image2/M01/03/A9/Cip5yF_ga5KALnO1AABLrDrgDGM452.png"}),i(),o,n(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image2/M01/03/A9/Cip5yF_ga5qABE7ZAABs-adr_7k107.png"}),i(),y,n(a,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image2/M01/03/AA/CgpVE1_ga6yAVvq5AABmBay34YA804.png"}),i(),c,n(a,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image2/M01/03/A9/Cip5yF_ga8qADhf9AACUfTqE0ag890.png"}),i(),F,n(a,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/8B/D3/CgqCHl_ga_SAeZvVAACbMQxPKsc444.png"}),i(),u,n(a,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image2/M01/03/AA/CgpVE1_ga_yAZ5u-AADTkxhPMO8352.png"}),i(),C,m,A,D,B,q])}const U=p(e,[["render",_]]);export{j as __pageData,U as default};
