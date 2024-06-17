import{_ as p,F as s,g as n,K as o,h as e,ar as r,l as t,o as l}from"./chunks/framework.VlluEs-f.js";const v=JSON.parse('{"title":"20React中你常用的工具库有哪些？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/107-前端面试宝典之 React篇文档/(5810) 20  React 中你常用的工具库有哪些？.md","filePath":"posts/frontEnd/107-前端面试宝典之 React篇文档/(5810) 20  React 中你常用的工具库有哪些？.md","lastUpdated":1718371218000}'),i={name:"posts/frontEnd/107-前端面试宝典之 React篇文档/(5810) 20  React 中你常用的工具库有哪些？.md"},c=r('<h1 id="_20react中你常用的工具库有哪些" tabindex="-1">20React中你常用的工具库有哪些？ <a class="header-anchor" href="#_20react中你常用的工具库有哪些" aria-label="Permalink to &quot;20React中你常用的工具库有哪些？&quot;">​</a></h1><p>&quot;React 中你常用的工具库有哪些&quot;，一般这个问题一出，基本就宣告 React 的面试接近尾声了。这一讲我们就一起来探讨下这个问题。</p><h3 id="审题" tabindex="-1">审题 <a class="header-anchor" href="#审题" aria-label="Permalink to &quot;审题&quot;">​</a></h3><p>提这个问题的意图非常明确，为了了解应聘者在 React 生态中的知识广度。这样的广度有什么作用呢？要知道 React 的一大优势就是<strong>生态的丰富性</strong>，有众多可以满足各式各样需求的轮子。即便当前的轮子不能满足我们的需求，在对生态足够了解的情况下，我们依然可以根据已有的轮子，站在巨人的肩膀上去改造它，而非从零开始。从零开始对于国内快节奏的交付迭代而言意味着人力与时间的双重成本，所以生态的效益不言而喻。</p><p>这个问题从结果上来看是考验应聘者的综合能力，从形式上更像是考察书籍的阅读量，是一个不设限的开放式问题。对于这样的问题，本专栏一直在强调需要用结构化思维的方式去回答，那该如何去规划呢？</p><p>正如上一讲所说如果你找不到合适的策略去结构化，那不妨就<strong>分类</strong>，分类是最简单易懂的结构化思路。所以从答题的角度，我们可以从&quot;有哪些&quot;转换到&quot;有几类&quot;，再为每一类列举两三个常用库即可。此时，即便面试官没有使用过你提到的库，但也能从你的分类中了解到你的涉猎范围，对你的回答快速建立一个基本认知。</p><h3 id="承题" tabindex="-1">承题 <a class="header-anchor" href="#承题" aria-label="Permalink to &quot;承题&quot;">​</a></h3><p>那现在我们就可以得出一个基本的解题思路了。</p><ol><li><p>分类。基于应用场景对 React 生态进行分类，然后对常用库类比。</p></li><li><p>列举。除了名字外，还需要阐述适用场景与主要功能。如果准备充分的话，可以再描述下核心原理。</p></li></ol>',9),_=r('<h3 id="入手" tabindex="-1">入手 <a class="header-anchor" href="#入手" aria-label="Permalink to &quot;入手&quot;">​</a></h3><h4 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类&quot;">​</a></h4><p>分类不是随意分，它同样需要遵循一定的规律。通常而言，分类的基本要求是&quot;<strong>不重不漏，相互独立，完全穷尽</strong>&quot;。怎么理解呢？举个例子，如果把人类分成男人、女人和老人，就不满足相互独立，因为老人包含男人，也包含女人。</p><p>常见的分类方法有这样五种：</p><ul><li><p>二分法</p></li><li><p>矩阵法</p></li><li><p>公式法</p></li><li><p>过程法</p></li><li><p>要素法</p></li></ul><p><strong>二分法</strong>比较简单，就是将事物分成两类，正如上面的案例，人类分为男人与女人。</p><p><strong>矩阵法</strong>，如果我们把二分法的结果再次二分，就可以得到矩阵法。矩阵法有一个非常经典的案例，就是将工作按重要程度与紧急程度划分为四类，分别是：重要紧急、重要不紧急、不重要但紧急、不重要也不紧急。这样可以形成如下图的时间管理矩阵。</p>',7),d=t("p",null,[t("strong",null,"公式分类法"),e('就是通过公式将几个不太相关的内容放在一起，加强联系。常见的案例就是"天才 = 99% 的汗水 + 1% 的天赋"。你看汗水与天赋本无关联，但一写在公式上就非常有记忆特征了。')],-1),g=t("p",null,[t("strong",null,"过程法"),e("是通过梳理流程的方式完成分类。比如前端的开发流程包含了初始化、开发、构建、检查、发布等。")],-1),u=r('<p>最后是要素法，<strong>要素法</strong>需要对事物进行高屋建瓴的抽象，比如营销包含产品、品牌、价格、渠道、推广、促销六大要素。总结要素往往是最难的，对认知水平的要求非常高。</p><p>在梳理完以上的分类方法后，你会发现过程法是一个相对容易入手的方案。所以下面将以前端开发工作流的角度来进行梳理。</p><h4 id="梳理" tabindex="-1">梳理 <a class="header-anchor" href="#梳理" aria-label="Permalink to &quot;梳理&quot;">​</a></h4><p><strong>初始化</strong></p><p>就初始化新项目工程而言， React 官方推荐使用<strong>create-react-app</strong>。这个库在生成项目时配置足够简单，但拓展极其麻烦。所以由第三方的 react-app-rewired 库对 create-react-app 提供拓展能力。</p><p>这是官方的解决方案，国内还有类似 umi 和 dva 这样一站式的解决方案，更适合国内的场景。</p><p>但如果要初始化一个组件项目，更推荐<strong>create-react-library</strong> 。它针对组件的场景有优化，更适合发布组件。对于维护大规模组件库的场景，更推荐使用<strong>Storybook</strong>，它支持大规模组件开发。</p><p><strong>开发</strong></p><p>初始化之后，就需要开发了。在开发过程中需要使用到的库，有路由、样式、基础组件、功能组件、状态管理等。</p><p><strong>路由</strong>的话当属 React Router，毫无争议的路由王者，具体内容可以查阅上一讲。</p><p><strong>样式</strong> 的解决方案比较多样化，基础的做法是<strong>CSS 模块化</strong>，比如 import css、 import scss 或者 import less 文件到组件里。在 18 年兴起的 CSS in JS 方案将传统的 css Props 的思路转换到了样式组件上去，这一波兴起的方案有 styled-components 和 emotion：</p><ul><li><p>emotion 的思路是通过提供 props 接口消灭内联样式；</p></li><li><p>styled-component 是通过模板字符串提供基础的样式组件。</p></li></ul><p>国内最流行的<strong>基础组件</strong>的解决方案是 Antd。Antd 在管理后台领域几乎处于统治地位了。Antd 团队倾注了非常多的心血，在最新的 4.0 版本中甚至大量引入虚拟滚动来提升性能。他们真的是将开源做到极致了。</p><p>接下来是<strong>功能组件</strong>：</p><ul><li><p>react-dnd 和 react-draggable 用于实现拖拽；</p></li><li><p>react-pdf-viewer 用于预览 PDF；</p></li><li><p>Video-React 用于播放视频；</p></li><li><p>react-window 和 react-virtualized 用于长列表问题的解决。</p></li></ul><p>在功能组件上你应该尽可能地多列举来展示自己的涉猎范围。</p><p>最后就是<strong>状态管理</strong> 了，相关的内容可以看一下第 08 讲<a href="https://kaiwu.lagou.com/course/courseInfo.htm?courseId=566#/detail/pc?id=5798" target="_blank" rel="noreferrer">&quot;列举一种你了解的 React 状态管理框架&quot;</a>。</p><p><strong>构建</strong></p><p>支持构建 React 的工具有 Webpack、Rollup 以及 esbuild。</p><p>从生态上来讲，webpack 的用户最多，支撑了众多的大型前端项目，其实践验证更完备，插件也最为丰富。</p><p>而 Rollup 瞄准的市场更小，专注于<strong>交付库</strong>，而非大型工程。Rollup 在交付场景下的打包更具备优势，支持多种模块类型输出，比如 commonjs、es module 等等。</p><p>esBuild 将自身定位于打包及压缩工具，其特点是性能足够强。它的核心代码由 Go 语言编写，相比传统 JavaScript 构建工具有 10 到 100 倍性能优势。由 esbuild 独立完成的构建项目并不多，处于将火不火的边缘，但是已经有不少大型项目开始实践，将 webpack 与 esbuild 相结合使用，解决打包时的性能问题。</p><p><strong>检查</strong></p><p>检查主要包含两方面内容，一方面是代码规范检查，另一方面是编写代码测试。</p><p>代码规范检查主要使用<strong>ESLint</strong>，加上相关插件的配合，即可完成对 React 代码的一个静态检测。</p><p>其次是编写代码测试。通常的选择有 jest、enzyme、react-testing-library、react-hooks-testing-library。它们之间是什么关系呢？</p><ul><li><p>jest 是一个测试框架，你可以想象成一个测试基座，负责跑具体的用例。</p></li><li><p>enzyme 是一个测试工具库，自带了大量的测试工具函数，简化编写测试用例的过程。</p></li><li><p>react-testing-library 是针对 React DOM 的测试工具库。</p></li><li><p>react-hooks-testing-library 则是针对 hooks 的。</p></li></ul><p><strong>发布</strong></p><p>在发布环节通常由<strong>构建器</strong>完成打包，再丢到服务器上运行。此时静态文件可以通过 CDN 服务商的回源服务加速静态资源，这个过程中不需要做任何代码改动。而另一种方式是自行手动上传静态资源文件到 CDN，那么这里就需要 s3-plugin-webpack 一类的插件处理静态资源上传。</p><h3 id="答题" tabindex="-1">答题 <a class="header-anchor" href="#答题" aria-label="Permalink to &quot;答题&quot;">​</a></h3><blockquote><p>常用的工具库都融入了前端开发工作流中，所以接下来我以初始化、开发、构建、检查及发布的顺序进行描述。</p><p>首先是初始化。初始化工程项目一般用官方维护的 create-react-app，这个工具使用起来简单便捷，但 create-react-app 的配置隐藏比较深，修改配置时搭配 react-app-rewired 更为合适。国内的话通常还会用 dva 或者 umi 初始化项目，它们提供了一站式解决方案。dva 更关心数据流领域的问题，而 umi 更关心前端工程化。其次是初始化库，一般会用到 create-react-library，也基本是零配置开始开发，底层用 rollup 进行构建。如果是维护大规模组件的话，通常会使用 StoryBook，它的交互式开发体验可以降低组件库的维护成本。</p><p>再者是开发，开发通常会有路由、样式、基础组件、功能组件、状态管理等五个方面需要处理。路由方面使用 React Router 解决，它底层封装了 HTML5 的 history API 实现前端路由，也支持内存路由。样式方面主要有两个解决方案，分别是 CSS 模块化和 CSS in JS。CSS 模块化主要由 css-loader 完成，而 CSS in JS 比较流行的方案有 emotion 和 styled-components。emotion 提供 props 接口消灭内联样式；styled-components 通过模板字符串提供基础的样式组件。基础组件库方面，一般管理后台使用 Antd，因为用户基数庞大，稳定性好；面向 C 端的话，主要靠团队内部封装组件。功能组件就比较杂了，比如用于实现拖拽的有 react-dnd 和 react-draggable，react-dnd 相对于 react-draggable，在拖放能力的抽象与封装上做得更好，下层差异屏蔽更完善，更适合做跨平台适配；PDF 预览用过 react-pdf-viewer；视频播放用过 Video-React；长列表用过 react-window 与 react-virtualized，两者的作者是同一个人，react-window 相对于 react-virtualized 体积更小，也被作者推荐。最后是状态管理，主要是 Redux 与 Mobx，这两者的区别就很大了，Redux 主要基于全局单一状态的思路，Mobx 主要是基于响应式的思路，更像 Vue。</p><p>然后是构建，构建主要是 webpack、Rollup 与 esBuild。webpack 久经考验，更适合做大型项目的交付；Rollup 常用于打包小型的库，更干净便捷；esBuild 作为新起之秀，性能十分优异，与传统构建器相比，性能最大可以跑出 100 倍的差距，值得长期关注，尤其是与 webpack 结合使用这点，便于优化 webpack 构建性能。</p><p>其次是检查。检查主要是代码规范与代码测试编写。代码规范检查一般是 ESLint，再装插件，属于常规操作。编写代码测试会用到 jest、enzyme、react-testing-library、react-hooks-testing-library：jest 是 Facebook 大力推广的测试框架；enzyme 是 Aribnb 大力推广的测试工具库，基本完整包含了大部分测试场景；react-testing-library 与 react-hooks-testing-library 是由社区主推的测试框架，功能上与 enzyme 部分有所重合。</p><p>最后是发布，我所管理的工程静态资源主要托管在 CDN 上，所以需要在 webpack 中引入上传插件。这里我使用的是 s3-plugin-webpack，主要是识别构建后的静态文件进行上传。</p></blockquote>',31),h=t("h3",{id:"总结",tabindex:"-1"},[e("总结 "),t("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),m=t("p",null,"在学习完以上内容后，我还是得强调下，本讲中提到的梳理方法并不是唯一正确的答案。最佳的实践方式是你按照自己的分类，自己的经验从头到尾梳理一遍，欢迎你将答案留在下面的留言区，我将和你一起探讨。",-1),b=t("p",null,"那么到这里，面试宝典之 React 篇的全部内容就算完成了，感谢相伴，接下来还有一篇关于简历编写的彩蛋送给你。",-1),R=t("hr",null,null,-1),A=t("p",null,"[",-1),k=t("p",null,[e("]("),t("a",{href:"https://shenceyun.lagou.com/t/mka",target:"_blank",rel:"noreferrer"},"https://shenceyun.lagou.com/t/mka"),e(")")],-1),S=t("p",null,"《大前端高薪训练营》",-1),q=t("p",null,[e("对标阿里 P7 技术需求 + 每月大厂内推，6 个月助你斩获名企高薪 Offer。"),t("a",{href:"https://shenceyun.lagou.com/t/mka",target:"_blank",rel:"noreferrer"},"点击链接"),e("，快来领取！")],-1);function f(y,w,C,P,T,x){const a=s("Image");return l(),n("div",null,[c,o(a,{alt:"React常用工具库.png",src:"https://s0.lgstatic.com/i/image/M00/94/A0/CgqCHmAY66SABB_yAAA_NJ_CYps419.png"}),e(),_,o(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/92/AA/Ciqc1GASbqGALxc0AAFaK9fpR4M657.png"}),e(),d,g,o(a,{alt:"图片1.png",src:"https://s0.lgstatic.com/i/image/M00/94/95/Ciqc1GAY65SAQHDoAAHG7lF5DwU625.png"}),e(),u,o(a,{alt:"React常用工具库总.png",src:"https://s0.lgstatic.com/i/image2/M01/0C/8B/Cip5yGAY60GAP1egAAJaMhvwhrw934.png"}),e(),h,m,b,R,A,o(a,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/72/94/Ciqc1F_EZ0eANc6tAASyC72ZqWw643.png"}),e(),k,S,q])}const N=p(i,[["render",f]]);export{v as __pageData,N as default};
