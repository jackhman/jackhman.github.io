import{_ as s,F as p,g as n,K as i,h as t,ar as e,l as a,o}from"./chunks/framework.VlluEs-f.js";const $=JSON.parse('{"title":"17数据获取与分析：常见的SQL技巧和分析方法","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/数据分析思维与实战_文档/(3508) 17  数据获取与分析：常见的 SQL 技巧和分析方法.md","filePath":"posts/backEnd/数据分析思维与实战_文档/(3508) 17  数据获取与分析：常见的 SQL 技巧和分析方法.md","lastUpdated":1718371218000}'),_={name:"posts/backEnd/数据分析思维与实战_文档/(3508) 17  数据获取与分析：常见的 SQL 技巧和分析方法.md"},c=e('<h1 id="_17数据获取与分析-常见的sql技巧和分析方法" tabindex="-1">17数据获取与分析：常见的SQL技巧和分析方法 <a class="header-anchor" href="#_17数据获取与分析-常见的sql技巧和分析方法" aria-label="Permalink to &quot;17数据获取与分析：常见的SQL技巧和分析方法&quot;">​</a></h1><p>今天我主要讲解如何用 SQL 提数和分析。</p><p>本课时分为三部分：</p><ul><li><p>数据获取前期准备；</p></li><li><p>SQL 提数常见问题；</p></li><li><p>常用的分析方法。</p></li></ul><h3 id="数据获取前期准备" tabindex="-1">数据获取前期准备 <a class="header-anchor" href="#数据获取前期准备" aria-label="Permalink to &quot;数据获取前期准备&quot;">​</a></h3><p>一般来说，在正式写 SQL 之前，要花 1 天时间去做以下几件事：</p><ul><li><p>了解清楚业务方和研发说的是哪张表、哪份日志；</p></li><li><p>了解这些表和日志的筛选条件是什么，为什么要这么筛选；</p></li><li><p>了解这些表和日志之前有什么坑，是不是哪天数据有缺失；</p></li><li><p>验证现在是否有坑，select * ，先跑一个核心数据看下。</p></li></ul><p>一旦你做了这几件事之后，你对表和数据就会有一定的感觉。在此基础上，再把问题的拆解模块构思一次，哪些点不好做，心理上要有个预期。前期准备非常重要，很多同学在提数这块花了大量时间，原因就是前期工作做得不到位，太相信我们的埋点。</p><h3 id="sql-提数常见问题" tabindex="-1">SQL 提数常见问题 <a class="header-anchor" href="#sql-提数常见问题" aria-label="Permalink to &quot;SQL 提数常见问题&quot;">​</a></h3><p>提数的最终目的就是为了分析，SQL 提数看似很简单，但往往会因为其他事项而比较花时间。比如：</p><ul><li><p>被各种各样的其他事情打扰；</p></li><li><p>遇到一些坑需要思考；</p></li><li><p>突然找到一个新的点，就一直往下深挖；</p></li><li><p>自己本身不会提数和分析，不知道如何看数据。</p></li></ul><p>这些都比较耽误时间，我们逐一来看。</p><p>如果经常被各种各样的事情打扰，你首先一定要有集中时间管理的意识，其次你要认识到当前最重要的事情就是 SQL 提数和分析，也就是说你目前所有的事情当中，优先级最高的就是这件事。 时间管理上具体可以给你以下建议：</p><ul><li><p>早上时间一定要利用好，早点到公司，因为下午大部分都有会，会议的时间也不太好控制，所以早上时间一定要利用好；</p></li><li><p>提前了解好会议主题，不要别人拉你去参加一个会，你傻乎乎就直接去了，到了之后发现这个会议好像跟你没啥关系，然后走也不太好走，所以一定要先确定是否必须参加；</p></li><li><p>中间所有进来的插队需求，先靠边站；</p></li><li><p>利用晚上回家时间、周末时间在这件事上多下功夫，专注去做事，一旦你专注之后，其实别人也不太好意思打扰你。</p></li></ul><p>在&quot;坑&quot;这件事上， 踩坑是必然的，不过我们可以通过这件事来观人阅事 。比如，某个团队中，谁比较靠谱，谁比较好说话，谁尽量不要接触。遇到坑之后，一定要用文档详细记下来，这样做有两个好处：一是可以让团队中的其他人知道，节省团队时间；二是每月总结的时候，知道自己在哪块花了大量时间，可以为后续做分析节省时间。</p><p>如果突然找到一个新的点，或者说突然很纠结某个点 。比如在分析不同年龄段的用户上网时段分布后，突然发现未满 18 周岁的群体分布很奇怪，觉得终于找到一个亮点，然后就持续往下研究这部分人为何这样？最后花了大量时间在这块的分析上，最后往往也没什么结论。所以一定要跳出小的圈子，我们最重要的事情是先把问题的拆解模块做完 。</p><p>如果你不会 SQL 提数，就要学如何提数。我在前面或多或少也说了一些方法，比如看同事是怎么写 SQL 的。如果你真的不会，可以参考同事。前期你可以多接需求多帮别人提数，这样可以熟能生巧。这里我再贴下 SQL 常见问题，如下图所示。</p>',17),h=a("h3",{id:"常用的分析方法",tabindex:"-1"},[t("常用的分析方法 "),a("a",{class:"header-anchor",href:"#常用的分析方法","aria-label":'Permalink to "常用的分析方法"'},"​")],-1),r=a("p",null,"提数完成之后，如何分析呢？实际上就是以下这几种常见的分析方法，我们逐一来看。",-1),d=a("h4",{id:"结构分析",tabindex:"-1"},[t("结构分析 "),a("a",{class:"header-anchor",href:"#结构分析","aria-label":'Permalink to "结构分析"'},"​")],-1),g=a("p",null,"第一个就是结构分析，比如，渠道新增用户数，五个渠道 A、B、C、D、E，相对应的新增用户分别是 1w、2w、3w、4w、5w，然后合计一共是 15w，如图所示。",-1),m=a("p",null,"那结构分析就是说我们渠道的构成是什么样子。 D 和 E 渠道的新增用户数总和占全渠道新增用户数的 60%，这就是结构分析。这是最基础的数据结构分析，而且管理层一定会问目前渠道分布是什么样子，所以拿到数据之后都要做结构分析。",-1),u=a("h4",{id:"对比分析",tabindex:"-1"},[t("对比分析 "),a("a",{class:"header-anchor",href:"#对比分析","aria-label":'Permalink to "对比分析"'},"​")],-1),A=a("p",null,"对比分析我们前面也提到过，我们再加强一次，这个时候你听起来可能会更有感觉。",-1),S=a("p",null,"所有的数据只有对比才有意义，每年的双 11 都会与之前的双 11 进行消费额对比。实际工作中，最常见的对比对象就是大盘，比如新上线一个功能，怎么样评估这个功能效果，除了看功能使用人数，更加要做的是这个功能的留存和大盘的留存对比 。",-1),C=a("p",null,"举个例子：我们需要看自身 App 跟竞品的重合用户，与自身 App 的所有用户在客户端内的消费差异，从而针对这些重合用户，做针对性运营，这个时候就要用到对比分析。因为我们的目的是想看竞品用户到底喜欢什么。",-1),q=a("p",null,"以微视这款 App 为例，你会看到第一列微视与抖音的重合用户消费分类和第三列微视大盘消费分类的消费 CTR 数据（如下图所示）。",-1),b=a("p",null,"利用对比分析可以算出微视与抖音的重合用户更加偏爱哪些分类（如下图所示）。",-1),f=a("p",null,"这里的相对值 diff ，它的计算方式是第二列的消费 CTR 除以第四列的消费 CTR 再减 1 ，然后你会发现搞笑、舞蹈、明星、美食分类，它的相对值是很明显的正向。因此，我们会针对这部分重合用户多推这些内容，减少其他内容权重，这就是对比分析最直接的效果。",-1),D=a("h4",{id:"时间序列分析",tabindex:"-1"},[t("时间序列分析 "),a("a",{class:"header-anchor",href:"#时间序列分析","aria-label":'Permalink to "时间序列分析"'},"​")],-1),w=a("p",null,"第三个分析方法就是时间序列分析， 一般看某指标时，都会把时序周期拉长，看数据趋势，而数据都是波动的，所以都会进行拆解分析，寻找具体波动项 。",-1),L=a("p",null,"举个例子：新增用户的次日留存近半年出现下降，需要进行渠道维度拆解分析，看整体下降是因为所有的渠道下降还是某个别的渠道下降导致的。",-1),P=a("p",null,"这是一个模拟数据（如下图所示）：",-1),Q=a("p",null,"这是原始数据（如下图所示）：",-1),T=a("p",null,"根据原始数据利用透视图功能插入透视图（如下图所示）：",-1),k=a("p",null,"然后就得到这样一个横列的二维数据（如下图所示）：",-1),B=a("p",null,"基于这个二维数据，我们再利用插入图表功能得到（如下图所示）：",-1),E=a("p",null,"从图表发现 A 渠道变化不大，C 渠道是上升，只有 B 渠道是下降。因此是 B 渠道出现问题，需要对 B 渠道进行优化，这就是时间序列分析的效果。",-1),x=a("h3",{id:"相关性分析",tabindex:"-1"},[t("相关性分析 "),a("a",{class:"header-anchor",href:"#相关性分析","aria-label":'Permalink to "相关性分析"'},"​")],-1),M=a("p",null,"第四个分析方法就是相关性分析，我们前面也说过，比如在第 09 课时，传统行业数据分析那节课里面，产品单价和销售额之间有没有一种明显的正相关性？我们是要进行相关性分析的。",-1),V=a("p",null,"之前你在每节课里面看到的思维导图有很多模块，最后都是变量，那么这些变量之间有没有相关性呢？这也可以去做分析。这个例子我就不说了，你可以去把相关性知识补习下。因为当你分析有很多变量，很多因子的时候，就要去分析因子之间相关性怎么样？",-1),H=a("h4",{id:"机器学习",tabindex:"-1"},[t("机器学习 "),a("a",{class:"header-anchor",href:"#机器学习","aria-label":'Permalink to "机器学习"'},"​")],-1),I=a("p",null,"第五个分析方法就是机器学习，之前我们也讲过这个例子，如下图所示。",-1),W=e('<p>我们发现有很多变量，有很多因子。最后从结果发现开通月数和电子支付这两个变量是目前最能够影响用户，那就针对这两个变量去搞事情。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>最后我总结一下，实际上所有的分析都是基于用户的基础属性和行为属性。如果你还是不会，那就从 5W1H 出发，每次分析时都以这个为模板展开即可。</p><ul><li><p>Who：指用户基础属性、用户画像。</p></li><li><p>Where：渠道分析，渠道入口，用户从哪里来。</p></li><li><p>When：时间上的特征。</p></li><li><p>What：用户使用了什么功能，哪些行为更加重要。</p></li><li><p>Why：为什么要这么做，用户是主动还是被动做的。</p></li><li><p>How：怎么做的，行为路径是什么。</p></li></ul><p>每次遇到问题时，如果你前面的点都没记住，那你可以从这 5W1H 去想。</p><p>提数和分析完成之后，先不要急着写报告，要先把一些关键数据和初步结论同步给业务方核心人员，约个时间一起看下。这样做有两个目的，一是看他们怎么理解这个数据，有无明显问题。二是他们基于这些数据结论，准备怎么落地，需要他们提前想方案。在这个基础上，再去撰写报告 。</p><p>今天的课程就到这里，你做 SQL 提数时经常遇到哪些问题？可以在下方留言与我交流。同时欢迎你关注我本人的公众号（微信搜索：数据分析学习之道），之后会定期更新原创高质量的数据分析文章，下节课见，谢谢。</p>',7);function F(N,R,y,Z,v,G){const l=p("Image");return o(),n("div",null,[c,i(l,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/38/E6/CgqCHl8ehjaAJVcSAACk5p0P1V0330.png"}),t(),h,r,d,g,i(l,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/38/E6/CgqCHl8ehkaAaI8VAAEZ9iIGwXc606.png"}),t(),m,u,A,S,C,q,i(l,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/38/DB/Ciqc1F8ehlSASlrzAAB0fPpGWBM118.png"}),t(),b,i(l,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/38/E6/CgqCHl8ehl-AZIlLAACcvaG4hys460.png"}),t(),f,D,w,L,P,i(l,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image/M00/38/DB/Ciqc1F8ehmaAZWF6AABYesH2eVY376.png"}),t(),Q,i(l,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image/M00/38/DB/Ciqc1F8ehm2ARhdAAABfiKswGO4134.png"}),t(),T,i(l,{alt:"Drawing 10.png",src:"https://s0.lgstatic.com/i/image/M00/38/E6/CgqCHl8ehn-APTTAAADFIELwQjk288.png"}),t(),k,i(l,{alt:"Drawing 11.png",src:"https://s0.lgstatic.com/i/image/M00/38/DB/Ciqc1F8ehoyAZyo9AAEHqyfZ1s8288.png"}),t(),B,i(l,{alt:"Drawing 13.png",src:"https://s0.lgstatic.com/i/image/M00/38/DB/Ciqc1F8ehpqAM8HCAAD8MLh6S88072.png"}),t(),E,x,M,V,H,I,i(l,{alt:"Drawing 15.png",src:"https://s0.lgstatic.com/i/image/M00/38/E6/CgqCHl8ehsSAXK6TAARNB9wtKnE357.png"}),t(),W])}const j=s(_,[["render",F]]);export{$ as __pageData,j as default};
