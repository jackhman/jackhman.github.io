import{_ as p,F as h,g as l,K as a,h as s,ar as t,l as n,o as e}from"./chunks/framework.VlluEs-f.js";const f=JSON.parse('{"title":"20从Redux中间件实现原理切入，理解“面向切面编程”","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/046_深入浅出搞定 React/(4867) 20  从 Redux 中间件实现原理切入，理解“面向切面编程”.md","filePath":"posts/frontEnd/046_深入浅出搞定 React/(4867) 20  从 Redux 中间件实现原理切入，理解“面向切面编程”.md","lastUpdated":1718371218000}'),k={name:"posts/frontEnd/046_深入浅出搞定 React/(4867) 20  从 Redux 中间件实现原理切入，理解“面向切面编程”.md"},r=t("",25),d=n("p",null,'若有多个中间件，那么 Redux 会结合它们被"安装"的先后顺序，依序调用这些中间件，这个过程如下图所示：',-1),E=t("",59),g=n("p",null,[s('此时考虑这样一个需求：要求在每个 Action 被派发之后，打出一个 console.log 记录"action 被派发了"这个动作，也就是我们常说的"日志追溯"。这个需求的'),n("strong",null,"通用性很强、业务属性很弱"),s(" ，因此不适合与任何的业务逻辑耦合在一起。那我们就可以以 "),n("strong",null,'"切面"这种形式，把它与业务逻辑剥离开来'),s('：扩展功能在工作流中的执行节点，可以视为一个单独"切点"；我们把扩展功能的逻辑放到这个"切点"上来，形成的就是一个可以拦截前序逻辑的"切面"，如下图所示：')],-1),c=t("",7);function o(y,u,F,A,D,m){const i=h("Image");return e(),l("div",null,[r,a(i,{alt:"图片2.png",src:"https://s0.lgstatic.com/i/image2/M01/01/67/Cip5yF_Yk0yAUFNqAABk6No-RiM734.png"}),s(),d,a(i,{alt:"图片4.png",src:"https://s0.lgstatic.com/i/image2/M01/01/68/CgpVE1_Yk1aAA-MbAACcWI3Jg2Q249.png"}),s(),E,a(i,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image2/M01/01/49/CgpVE1_YZC-AKwdJAACTdBArWEQ782.png"}),s(),g,a(i,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image2/M01/01/49/CgpVE1_YZEGAPHOaAACpc9ZgOG0409.png"}),s(),c])}const C=p(k,[["render",o]]);export{f as __pageData,C as default};
