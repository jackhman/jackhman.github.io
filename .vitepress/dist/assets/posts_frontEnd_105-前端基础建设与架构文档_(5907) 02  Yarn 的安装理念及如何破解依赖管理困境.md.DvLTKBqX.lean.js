import{_ as p,F as l,g as e,K as a,h as n,ar as t,l as s,o as h}from"./chunks/framework.VlluEs-f.js";const es=JSON.parse('{"title":"02Yarn的安装理念及如何破解依赖管理困境","description":"","frontmatter":{},"headers":[],"relativePath":"posts/frontEnd/105-前端基础建设与架构文档/(5907) 02  Yarn 的安装理念及如何破解依赖管理困境.md","filePath":"posts/frontEnd/105-前端基础建设与架构文档/(5907) 02  Yarn 的安装理念及如何破解依赖管理困境.md","lastUpdated":1718371218000}'),o={name:"posts/frontEnd/105-前端基础建设与架构文档/(5907) 02  Yarn 的安装理念及如何破解依赖管理困境.md"},r=t("",13),k=t("",8),c=t("",9),d=s("p",null,"解析包获取流程图",-1),g=s("p",null,[s("strong",null,"获取包（Fetching Packages）")],-1),_=s("p",null,"这一步我们首先需要检查缓存中是否存在当前的依赖包，同时将缓存中不存在的依赖包下载到缓存目录。说起来简单，但是还是有些问题值得思考。",-1),E=s("p",null,[n("比如：如何判断缓存中是否存在当前的依赖包？"),s("strong",null,"其实 Yarn 会根据 cacheFolder+slug+node_modules+pkg.name 生成一个 path，判断系统中是否存在该 path，如果存在证明已经有缓存，不用重新下载。这个 path 也就是依赖包缓存的具体路径"),n("。")],-1),u=s("p",null,"对于没有命中缓存的包，Yarn 会维护一个 fetch 队列，按照规则进行网络请求。如果下载包地址是一个 file 协议，或者是相对路径，就说明其指向一个本地目录，此时调用 Fetch From Local 从离线缓存中获取包；否则调用 Fetch From External 获取包。最终获取结果使用 fs.createWriteStream 写入到缓存目录下。",-1),m=s("p",null,"获取包流程图",-1),y=s("p",null,[s("strong",null,"链接包（Linking Packages）")],-1),A=s("p",null,"上一步是将依赖下载到缓存目录，这一步是将项目中的依赖复制到项目 node_modules 下，同时遵循扁平化原则。在复制依赖前，Yarn 会先解析 peerDependencies，如果找不到符合 peerDependencies 的包，则进行 warning 提示，并最终拷贝依赖到项目中。",-1),F=s("p",null,"这里提到的扁平化原则是核心原则，我也会在后面内容进行详细的讲解。",-1),v=t("",11),C=s("p",null,"npm 不同版本的安装结构图 ①",-1),q=s("p",null,"当项目新添加了 C 依赖，而它依赖另一个版本的 B v2.0。这时候版本要求不一致导致冲突，B v2.0 没办法放在项目平铺目录下的 node_moduls 文件当中，npm v3 会把 C 依赖的 B v2.0 安装在 C 的 node_modules 下：",-1),b=s("p",null,"npm 不同版本的安装结构图 ②",-1),D=s("p",null,"接下来，在 npm v3 中，假如我们的 App 现在还需要依赖一个 D，而 D 也依赖 B v2.0 ，我们会得到如下结构：",-1),B=s("p",null,"npm 安装结构图 ①",-1),f=s("p",null,[n("这里我想请你思考一个问题："),s("strong",null,"为什么 B v1.0 出现在项目顶层 node_modules，而不是 B v2.0 出现在 node_modules 顶层呢"),n("？")],-1),T=s("p",null,[n("其实这取决于模块 A 和 C 的安装顺序。因为 A 先安装，所以 A 的依赖 B v1.0 率先被安装在顶层 node_modules 中，接着 C 和 D 依次被安装，C 和 D 的依赖 B v2.0 就不得不安装在 C 和 D 的 node_modules 当中了。因此，"),s("strong",null,"模块的安装顺序可能影响 node_modules 内的文件结构"),n("。")],-1),Y=s("p",null,"我们继续依赖工程化之旅。假设这时候项目又添加了一个依赖 E ，E 依赖了 B v1.0 ，安装 E 之后，我们会得到这样一个结构：",-1),P=t("",7),S=s("p",null,"npm 安装结构图 ③",-1),j=s("p",null,"这时模块 B v2.0 分别出现在了 A、C、D 模块下------重复存在了。",-1),V=s("p",null,[n("通过这一系列操作我们可以看到："),s("strong",null,"npm 包的安装顺序对于依赖树的影响很大。模块安装顺序可能影响 node_modules 内的文件数量"),n("。")],-1),I=s("p",null,"这里一个更理想的依赖结构理应是：",-1),M=s("p",null,"npm 安装结构图 ④",-1),x=s("p",null,"过了一段时间，模块 E v2.0 发布了，并且 E v2.0 也依赖了模块 B v2.0 ，npm v3 更新 E 时会怎么做呢？",-1),w=s("ul",null,[s("li",null,[s("p",null,"删除 E v1.0；")]),s("li",null,[s("p",null,"安装 E v2.0；")]),s("li",null,[s("p",null,"删除 B v1.0；")]),s("li",null,[s("p",null,"安装 B v2.0 在顶层 node_modules 中，因为现在顶层没有任何版本的 B 了。")])],-1),N=s("p",null,"此时得到图：",-1),Z=s("p",null,"npm 安装结构图 ⑤",-1),H=s("p",null,"这时候，你可以明显看到出现了较多重复的依赖模块 B v2.0。我们可以删除 node_modules，重新安装，利用 npm 的依赖分析能力，得到一个更清爽的结构。",-1),W=s("p",null,"实际上，更优雅的方式是使用 npm dedupe 命令，得到：",-1),O=s("p",null,"npm 安装结构图 ⑥",-1),R=s("p",null,[n("实际上，Yarn 在安装依赖时会自动执行 dedupe 命令。"),s("strong",null,"整个优化的安装过程，就是上一讲提到的扁平化安装模式，也是需要你掌握的关键内容"),n("。")],-1),J=s("h3",{id:"结语",tabindex:"-1"},[n("结语 "),s("a",{class:"header-anchor",href:"#结语","aria-label":'Permalink to "结语"'},"​")],-1),U=s("p",null,"这一讲我们解析了 Yarn 安装原理。",-1),z=s("p",null,"通过本讲内容，你可以发现包安装并不只是从远程下载文件那么简单，这其中涉及缓存、系统文件路径，更重要的是还涉及了安装依赖树的解析、安装结构算法等。",-1),L=s("p",null,[n("最后，给大家布置一个思考题，"),s("a",{href:"https://github.blog/2020-10-13-presenting-v7-0-0-of-the-npm-cli/",target:"_blank",rel:"noreferrer"},"npm v7"),n(" 在 2020 年 10 月刚刚发布，请你总结一下它的新特性，并思考一下为什么要引入这些新的特性？这些新特性背后是如何实现的？欢迎在留言区分享你的观点。")],-1),G=s("hr",null,null,-1),K=s("p",null,"[",-1),$=s("p",null,[n("]("),s("a",{href:"https://shenceyun.lagou.com/t/mka",target:"_blank",rel:"noreferrer"},"https://shenceyun.lagou.com/t/mka"),n(")")],-1),Q=s("p",null,[n("对标阿里P7技术需求 + 每月大厂内推，6 个月助你斩获名企高薪 Offer。"),s("a",{href:"https://shenceyun.lagou.com/t/mka",target:"_blank",rel:"noreferrer"},"点此链接，快来领取！")],-1);function X(ss,ns,is,as,ts,ps){const i=l("Image");return h(),e("div",null,[r,a(i,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/84/9F/CgqCHl_TbhOAEFfxAAFJ2o762gM476.png"}),n(),k,a(i,{alt:"图片14.png",src:"https://s0.lgstatic.com/i/image/M00/8A/17/CgqCHl_ZflCANVu8AAJJZZYzwhs026.png"}),n(),c,a(i,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/84/9F/CgqCHl_TbimACnDOAAFMC14gP8I289.png"}),n(),d,g,_,E,u,a(i,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/84/94/Ciqc1F_TbjKAThkOAAEsp0sOHUc622.png"}),n(),m,y,A,F,a(i,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/84/94/Ciqc1F_Tbj2AWiPOAADyaZB-wGw502.png"}),n(),v,a(i,{alt:"图片10.png",src:"https://s0.lgstatic.com/i/image/M00/8A/0C/Ciqc1F_ZfoKACluCAADJ2SvodGg411.png"}),n(),C,q,a(i,{alt:"图片9.png",src:"https://s0.lgstatic.com/i/image/M00/8A/0D/Ciqc1F_Zf1eAWVhcAADO_4H0sjA082.png"}),n(),b,D,a(i,{alt:"图片17.png",src:"https://s0.lgstatic.com/i/image2/M01/01/EB/Cip5yF_Zf2mABSwEAAC-YH5jkcQ965.png"}),n(),B,f,T,Y,a(i,{alt:"图片6.png",src:"https://s0.lgstatic.com/i/image2/M01/01/EC/CgpVE1_Zf4aADdDJAADNnUsWnlc423.png"}),n(),P,a(i,{alt:"图片5.png",src:"https://s0.lgstatic.com/i/image2/M01/01/EB/Cip5yF_Zf6iAClRIAADSW-XFvzA495.png"}),n(),S,j,V,I,a(i,{alt:"图片4.png",src:"https://s0.lgstatic.com/i/image2/M01/01/EC/CgpVE1_Zf76ADk3NAADVWLHAHTo908.png"}),n(),M,x,w,N,a(i,{alt:"图片3.png",src:"https://s0.lgstatic.com/i/image/M00/8A/0D/Ciqc1F_Zf82Abr7LAADYStAX7VU318.png"}),n(),Z,H,W,a(i,{alt:"图片2.png",src:"https://s0.lgstatic.com/i/image/M00/8A/19/CgqCHl_Zf-WAb-BnAADAe1GD0YY021.png"}),n(),O,R,J,U,a(i,{alt:"前端基建 金句.png",src:"https://s0.lgstatic.com/i/image/M00/8A/19/CgqCHl_ZgAuAIfWbAAc_D0oluIE175.png"}),n(),z,L,G,K,a(i,{alt:"大前端引流.png",src:"https://s0.lgstatic.com/i/image2/M01/00/66/CgpVE1_W_x2AaW0rAAdqMM6w3z0145.png"}),n(),$,Q])}const hs=p(o,[["render",X]]);export{es as __pageData,hs as default};
