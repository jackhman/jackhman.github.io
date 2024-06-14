import{_ as s,D as i,o,g as r,J as l,h as a,m as e,Q as p}from"./chunks/framework.f67d7268.js";const S=JSON.parse('{"title":"第26讲：PageObject模式（Web端）","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/110-测试开发核心技术文档/(345) 第26讲：Page Object 模式（Web 端）.md","filePath":"posts/devops/110-测试开发核心技术文档/(345) 第26讲：Page Object 模式（Web 端）.md","lastUpdated":1696682708000}'),c={name:"posts/devops/110-测试开发核心技术文档/(345) 第26讲：Page Object 模式（Web 端）.md"},n=e("h1",{id:"第26讲-pageobject模式-web端",tabindex:"-1"},[a("第26讲：PageObject模式（Web端） "),e("a",{class:"header-anchor",href:"#第26讲-pageobject模式-web端","aria-label":'Permalink to "第26讲：PageObject模式（Web端）"'},"​")],-1),_=e("br",null,null,-1),P=e("p",null,"本课时我们进入 Page Object 模式的讲解，首先我们来了解 Page Object 模式的基础概念。",-1),d=e("h2",{id:"传统测试用例问题",tabindex:"-1"},[a("传统测试用例问题 "),e("a",{class:"header-anchor",href:"#传统测试用例问题","aria-label":'Permalink to "传统测试用例问题"'},"​")],-1),b=p("",11),h=e("br",null,null,-1),O=e("p",null,"这里举个示例，你可以看到示例中首先有一个面向应用的 API，这个 API 完成关键业务的描述，比如完成具体的业务，然后下面有一条 API 是关于 H5 操作的，也就是拆分了一层逻辑。我们通过抽象一个面向应用的 API，就可以让关于 H5 自动化的逻辑隐藏到底层，当页面发生变化的时，只需要修改底层的一个定义，上层的 case 则没有任何影响。",-1),g=e("h2",{id:"六-大原则",tabindex:"-1"},[a("六 大原则 "),e("a",{class:"header-anchor",href:"#六-大原则","aria-label":'Permalink to "六 大原则"'},"​")],-1),u=e("p",null,"那么封装的逻辑首先以页面为单位去建模，然后隐藏内部的实现细节，本质上是一个面向抽象的编程，优点是大量的 find、click 在测试用例里看不到了，提高了测试用例的易读性，因为修改对测试用例的影响非常小，通过 PO 封装就可以实现修改范围可控，只需要在底层修改一个地方，就可以保证原有测试用例本身没有什么变化，因为修改也是在 PO 层面进行的，测试用例基本是保持不变，这就是 PO 模式的一个优点。",-1),m=e("br",null,null,-1),f=p("",29);function A(I,T,v,j,x,k){const t=i("Image");return o(),r("div",null,[n,_,P,d,l(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6F/11/Cgq2xl5gs92AIuvBAAP8QZgz0qs996.png"}),a(),b,l(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6F/10/CgpOIF5gs92AGCGXAAGM0fHgeW4741.png"}),a(),h,O,g,u,m,l(t,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/6F/11/Cgq2xl5gs92ABdGpAAGvfSpvxmM165.png"}),a(),f])}const C=s(c,[["render",A]]);export{S as __pageData,C as default};
