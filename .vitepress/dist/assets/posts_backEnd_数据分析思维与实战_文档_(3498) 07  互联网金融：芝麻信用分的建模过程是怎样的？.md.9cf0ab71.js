import{_ as e,D as o,o as _,g as s,J as i,h as p,Q as t,m as a}from"./chunks/framework.f67d7268.js";const N=JSON.parse('{"title":"07互联网金融：芝麻信用分的建模过程是怎样的？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/数据分析思维与实战_文档/(3498) 07  互联网金融：芝麻信用分的建模过程是怎样的？.md","filePath":"posts/backEnd/数据分析思维与实战_文档/(3498) 07  互联网金融：芝麻信用分的建模过程是怎样的？.md","lastUpdated":1696682708000}'),n={name:"posts/backEnd/数据分析思维与实战_文档/(3498) 07  互联网金融：芝麻信用分的建模过程是怎样的？.md"},r=t('<h1 id="_07互联网金融-芝麻信用分的建模过程是怎样的" tabindex="-1">07互联网金融：芝麻信用分的建模过程是怎样的？ <a class="header-anchor" href="#_07互联网金融-芝麻信用分的建模过程是怎样的" aria-label="Permalink to &quot;07互联网金融：芝麻信用分的建模过程是怎样的？&quot;">​</a></h1><p>今天我以芝麻信用为例介绍一下互联网金融行业的数据模型。</p><p>本节课内容分为三部分：</p><ul><li><p>背景；</p></li><li><p>授信模型；</p></li><li><p>模型落地。</p></li></ul><h3 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h3><p>互联网金融的本质是风控，数据分析师在金融行业基本上有两种角色：</p><ul><li><p>数据建模师，要求对算法的理解较深，相对来说对行业经验要求不是很高；</p></li><li><p>风控分析师，除了一定的模型理解能力，还需要大量的行业和法律法规经验。</p></li></ul><p>互联网金融与其他行业不太一样，互联网金融在产品对象上分为 to B 和 to C。</p><ul><li><p>to B：对企业整体的信用进行评估做整体授信。</p></li><li><p>to C：对个人的个人信用分。</p></li></ul><p>而无论是 to B 还是 to C，在决策上都是依赖央行征信报告（数据最全）。</p><h4 id="数据建模师工作内容" tabindex="-1">数据建模师工作内容 <a class="header-anchor" href="#数据建模师工作内容" aria-label="Permalink to &quot;数据建模师工作内容&quot;">​</a></h4><p>数据建模师平时工作的主要内容是什么呢？我找了一家国内大型的互联网金融公司的职位描述，如下图所示。</p>',12),c=a("p",null,"关键词为数据源、信用评分卡模型、模型上线监控维护、其他数据挖掘。与其他行业数据分析师差异比较大的是数据源，因为互联网金融行业很多时候要规避风险，怎么去规避风险呢？基于大数据，所以数据源越多越好，因此数据建模师平时要与其他公司进行数据合作或数据采购。",-1),h=a("p",null,"总地来说，数据建模师偏算法，但要很懂业务，不是纯算法分析师。",-1),d=a("h3",{id:"授信模型",tabindex:"-1"},[p("授信模型 "),a("a",{class:"header-anchor",href:"#授信模型","aria-label":'Permalink to "授信模型"'},"​")],-1),g=a("p",null,"接下来我重点说一下授信模型。模型具体是什么呢？以芝麻信用分来为例，如下图所示。",-1),A=t('<p>芝麻信用分是由五大维度构成。</p><ol><li><p>身份特质：你的学历（高中毕业还是博士毕业），表示人本身的稳定性，长时间改变不了的特质。</p></li><li><p>履约能力：看你消费后按时还款的能力（是否有房有车），表示人消费的兜底性。</p></li><li><p>信用历史：看你历史的信用（信用卡有无逾期），表示人本身的诚信。</p></li><li><p>人脉关系：看你支付宝好友的信用分是不是都很高，表示个人身份的稳定性及弱价值性。</p></li><li><p>行为偏好：看你是喜欢买价格高的还是低的，这部分数据最重要，表示人本身的当前信息,对产品后续决策有非常大的价值。</p></li></ol><p>芝麻信用能够很好地判断一个人的信用到底好不好，另外一个潜在的价值是可以结合人的行为偏好来做更精准的推荐。</p><h4 id="数据源" tabindex="-1">数据源 <a class="header-anchor" href="#数据源" aria-label="Permalink to &quot;数据源&quot;">​</a></h4><p>数据建模授信模型的第一步是数据源，同样以芝麻信用为例（如下图所示）。</p>',5),u=t('<p>从图中可以看出这里有一级分类：身份特质、行为偏好、履约能力、信用历史、人脉关系。这五大维度实际上有很多字段的中文名，每一个维度大概用了哪些字段，这些就是数据源。</p><p>这里真实的数据变量有上千个，为什么会有这么多变量呢？实际上数据变量分为原始变量和衍生变量。</p><ol><li><p>原始变量：是直接存储在数据库里的最基础变量，如每天的交易额（你今天花了多少钱）。</p></li><li><p>衍生变量：衍生变量是在基础变量的基础之上进行的，因为金融的本质是风险，所以都要对原始变量进行加工转化，一般是三种。</p></li></ol><ul><li><p>时间维度衍生，最近 1 个月交易额、最近 3 个月交易额。</p></li><li><p>函数衍生，最大交易额、最小交易额、交易额方差。</p></li><li><p>比率衍生，最近 1 个月交易额/最近 3 个月交易额。</p></li></ul><p>基于这三种变换就可以对原始变量进行扩充，所以最终的数据模型里的数据变量非常多。在选择变量的时候，基于 RFM 原则，即最近、频次、钱，所有跟这三个属性相关的变量都要先保留，因为金融行业本身就是在和钱打交道。</p><p>基于原始变量，我们做了一些衍生变量，有了数据源之后，第二步就是数据处理。</p><h4 id="数据处理" tabindex="-1">数据处理 <a class="header-anchor" href="#数据处理" aria-label="Permalink to &quot;数据处理&quot;">​</a></h4><p>所有的数据处理、数据建模都是为业务服务。真实工作中，数据处理和数据建模会慢慢迭代、优化，所以在前期的数据处理不会很复杂，一般分为三种。</p><ol><li><p>数值型和字符串型字段的缺失性和合理性检验，剔除无效字段（50% 以上即可去掉）。</p></li><li><p>数值型字段的相关性验证，因为在前期，所有的字段都会拿出来，有很多的变量相关性非常强，但这个对于模型训练没有帮助，因此把相关性强的先过滤掉。后面我会单独讲相关性规律怎么做。</p></li><li><p>对字符串型字段的离散化处理。比如前面的身份特质，你的学历是高中还是博士，这样的字段不是数字型字段而是字符串型字段。</p></li></ol><p><strong>所以在数据处理时的要把数值型和字符串型分开，数值型往往是做相关<strong><strong>性检验</strong></strong> ，<strong><strong>而</strong></strong> 字符串形式，<strong><strong>是</strong></strong>做一些离散化处理。</strong></p><p>以相关性过滤举例，比如我们发现芝麻信用的数据源当中，最近 1 年的母婴消费金额与其他三个变量有很高的相关性，如下图所示。</p>',11),m=a("p",null,"可以看出它的相关性均在 0.7 以上，一般 0.7 以上是高度相关性，所以我们在后面建模的时候只保留一个（比如最近 1 年母婴消费金额）即可。其他三个变量先不要放在模型训练里，这就是相关性过滤。相关性过滤实非常简单，但确实很实用。",-1),T=a("p",null,"再看字符型字段的离散化例子。",-1),q=a("p",null,"问题：身份特质中你的学历是博士，请问如何处理这个字段？",-1),b=a("p",null,"一般对字符型字段都是采用专家打分法，如下图所示。",-1),C=t('<p>比如小学是 0～20，初中是 20～40，以此类推。专家打分法是按照常识理解，直接分段取值。在模型前期，只要大的逻辑没有问题即可，比如，你这里小学是 90～100，这肯定就不行。经过这一步，所有的变量都转化为了数值，这样就具备了操作空间。</p><h4 id="数据标准化" tabindex="-1">数据标准化 <a class="header-anchor" href="#数据标准化" aria-label="Permalink to &quot;数据标准化&quot;">​</a></h4><p>接下来是数据的标准化，虽然所有的变量都已经数值化，但是在量级和量刚上相差很大，如交易额和交易次数，这就没有可比性，所以要对所有的字段进行标准化。标准化的方法很多，选择合适的就行（比如，MAX-MIN 、 Z-score），这对后面的模型效果没有影响。</p><p>数据标准化之后（假设用 MAX-MIN），所有的变量取值区间都会在 [0,1] 范围内，这个时候就可以进行数据建模。</p><h4 id="数据建模" tabindex="-1">数据建模 <a class="header-anchor" href="#数据建模" aria-label="Permalink to &quot;数据建模&quot;">​</a></h4><p>在建模前我们需要进行一些思考，芝麻信用分有 5 个维度：身份特质、履约能力、信用历史、人脉关系、行为偏好。5 个纬度在不同时期的权重也不一样，所以每个维度都要单独建模。</p><p>在建模之前，一定要把业务目标先理一理，这样才能知道用什么模型。就芝麻信用来说，我们的目的是希望根据用户在这 5 个维度的综合芝麻分来给用户提供其他额外服务，比如花呗、借呗、免押金，同时保证用户不违约。</p><p>因此逻辑上就是：根据用户的数据，算出用户违约的概率，而这个概率也可以转化为用户的分数，所以逻辑回归模型比较适合。一是简单，二是非线性。你在数据建模前一定要想好用什么模型，即使你觉得应该用逻辑回归，也要先说服自己。</p><p>这里我反推一个具体方案。综合芝麻分是一个综合概率，而这个综合概率实际上是 5 个维度的概率加权，而 5 个维度各自的概率是每个维度的逻辑回归模型，而每个维度的逻辑回归模型是每个维度的训练集和测试集（如下图所示）。</p>',9),P=a("p",null,"以历史信用为例，假设该维度包含的字段有最近一个月主动查询金融机构信用次数 x1，最近一个月需还贷总额 x2，最近一个月逾期总额 x3。",-1),f=a("p",null,[a("strong",null,"那么其违约概率就是如下公式：")],-1),S=t("<p>这里 P 为用户违约的概率，a、b、c 为拟合系数。</p><p>举个具体例子：</p><p>A 用户，身份特质、履约能力、信用历史、人脉关系、行为偏好分别算出的概率是 0.1，0.2，0.3，0.4，0.5。根据当前产品所处阶段，觉得信用历史和履约能力两个模块最重要，那么这两个模块的影响权重就是 0.35，其他都是 0.1。</p><p>那么小 A 的违约概率计算如下：</p><p>P=0.1<em>0.1+0.35</em> 0.2+0.35<em>0.3+0.1</em>0.4+0.1*0.5=0.275</p><p>我们往往需要将 P 转化为实际数值，比如某个具体分数，这样才显得很直观，一般用以下方式转化：</p><p>分数公式：score=(1-P)*A+B，区间为 [300,900]，可以算出 A=600，B=300</p><p>所以 A 的芝麻综合分=0.725*600+300=735</p><p>芝麻分由此得出，当然真实的肯定更复杂，但是它的核心思想是这样，先给出一些数据源，然后进行数据处理，再然后进行数据标准化。实际上芝麻信用分数就是概率，概率这一块可能用的模型稍微不太一样，但是在前期一定是用比较简单的模型。</p><p>我们再来看模型的离线效果，因为在所有的建模初期肯定都是离线（不可能直接给你上开发环境或生产环境），所以先抽样进行评估，对机器学习稍微熟一点的同学应该清楚这里有两个重要指标：混淆矩阵和 ROC 曲线。</p><ul><li>混淆矩阵：查准率和查全率</li></ul><p>什么是查准率？比如这是模型预测和历史数据（如下图所示）。</p>",12),k=t('<p>它的矩阵构成是这样，未还款有 100 和 80，已还款有 20 和 400。</p><p>模型的查准率是对角线 100+400 除以所有样本量 600（100+20+80+400），查准率结果为 83%。本身是已还款，模型查后也是已还款。本身是未还款，模型后也是未还款，这就是你模型准确度，这个准确度 83%，看结果还不错。</p><p>但是在查全率上，因为本身是金融模型，而金融模型目标为还款，未还款用户一共是 180 人（100+80），查全率是 100 除以 180 ，结果为 56%。从查全率维度看结果不是特别好，而查全和查准就构成混淆矩阵，一般实际工作过程中，这两个指标都会去看。</p><ul><li>ROC 曲线：根据混淆矩阵做出的一个可视化分析，一般都是取 ROC 下面的面积 AUC，来衡量模型效果，越大越好，一般至少 0.6 以上。</li></ul><p>离线模型看这两个参数即可，这块本身会有点难理解，特别是 ROC 曲线不太好举例。如果你实在不理解参数意义，记住即可，因为真实工作中，最重要的评估指标是坏账率。</p><h4 id="数据模型的运行周期" tabindex="-1">数据模型的运行周期 <a class="header-anchor" href="#数据模型的运行周期" aria-label="Permalink to &quot;数据模型的运行周期&quot;">​</a></h4><p>在产品初期，因为模型的变量太多，所以模型的迭代速度比较快。基本上每个月都要跑一次分数，这个时候会出现某个用户的分数提高，这些都比较正常。而这些都需要不断地调整权重和系数，慢慢优化才行，不过最重要的还是模型落地效果。如果坏账率比较高，再调参数。</p><h3 id="模型落地" tabindex="-1">模型落地 <a class="header-anchor" href="#模型落地" aria-label="Permalink to &quot;模型落地&quot;">​</a></h3><h4 id="落地前" tabindex="-1">落地前 <a class="header-anchor" href="#落地前" aria-label="Permalink to &quot;落地前&quot;">​</a></h4><p>有了这样一套模型之后，你需要找落地场景，我们看到芝麻信用围绕吃喝玩乐进行各种产品服务。比如，根据芝麻信用分就可以申请招联金融信用额度，这涉及两个公司的产品合作。金融行业的合作都是非常小心的，所以在正式合作前：</p><ul><li><p>招联金融会提供一批用户样本给芝麻信用，芝麻信用的数据建模师根据模型给出这批用户的违约概率；</p></li><li><p>招联金融根据芝麻给出的用户违约概率，来估算模型的准确度（用户群覆盖度和模型准确度）；</p></li><li><p>如果模型准确度在 90% 以上，双方才会正式展开合作。</p></li></ul><h4 id="落地中" tabindex="-1">落地中 <a class="header-anchor" href="#落地中" aria-label="Permalink to &quot;落地中&quot;">​</a></h4><p>正式落地时，招联在评估每个用户信用时，会参考芝麻信用分。</p><p>一般都是这样：</p><ul><li><p>用机器调用该用户的央行征信报告评估值 X，这个是最重要的因素；</p></li><li><p>接口调用该用户的芝麻信用分 Y；</p></li><li><p>该用户在招联的信用评估情况 Z（金融公司本身就有用户数据）；</p></li></ul><p>基于 X、Y、Z，招联内部会根据专家规则法出一套授信方案，到这一步，模型就正式落地使用。这里我简单解释下专家规则，比如你的央行征信报告很好，然后芝麻信用分大于 750，然后在招联的信用评估也是 A ，这个时候会给你开 10000 元的高额度（存在拍脑袋可能性）。可能是类似这样一套授信方案，这种方案在每个公司都是保密的，灵活处理即可。所以很多时候不是定量的，而是定性的。</p><h4 id="落地后" tabindex="-1">落地后 <a class="header-anchor" href="#落地后" aria-label="Permalink to &quot;落地后&quot;">​</a></h4><p>在落地后的前期，每一周招联金融都会和芝麻对一次坏账情况，只有到这个时候，模型的参数调整才是最有意义的，这也是最考验数据建模师的时候。</p><p>调参方法：</p><ul><li><p>先找出是因为某个子模型引起还是所有模型引起的。因为一个完整的产品都是很多模型来构成。</p></li><li><p>如果是子模型引起，直接调整该模型的参数即可，如果是整体模型都有问题，那就要重新进行数据处理了，如 WOE 分组，更换衍生变量，字符型字段重新打分等等。</p></li></ul><p>在前期，数据建模师是最忙的一个人，一旦模型稳定之后，数据建模师更多时候会兼职数据挖掘师。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>最后总结一下，我们本节课最主要就是讲了以下几点：</p><ul><li><p>授信模型：数据源、数据处理、数据标准化、数据建模、模型落地、模型优化，这一套跟数据分析标准化流程非常像，模型最终的评估指标是坏账率。</p></li><li><p>数据建模师：数据源在前期决定了模型的效果，要具备良好的沟通能力和快速反馈能力，金融行业本身比较成熟，比模型更加重要的是分析师自身的想法和验证。在前期重点是围绕数据源和数据处理，模型可以用逻辑回归、决策树、GBDT、随机森林、神经网络等。</p></li><li><p>与纯互联网行业对比，金融行业数据建模师的价值更容易得到体现，而且相对更有趣。</p></li></ul><p>今天的课程就到这里，你有什么问题可以在下方留言。同时欢迎你关注我本人的公众号（微信搜索：数据分析学习之道），之后会定期更新原创高质量的数据分析文章。</p>',25);function x(I,V,w,D,M,B){const l=o("Image");return _(),s("div",null,[r,i(l,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/25/A3/Ciqc1F7wjUiAdbcSAAvVSpcfF_0181.png"}),p(),c,h,d,g,i(l,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/25/A3/Ciqc1F7wjVCANIyLAAEJMLWGA-0452.png"}),p(),A,i(l,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/25/AF/CgqCHl7wjVqAROg5AAIw2LeGk6s497.png"}),p(),u,i(l,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/25/A3/Ciqc1F7wjWmAQ1kIAAB3JdsLrjg936.png"}),p(),m,T,q,b,i(l,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/25/A4/Ciqc1F7wjXOAUHpMAAAueRy2vEM596.png"}),p(),C,i(l,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/25/AF/CgqCHl7wjX6AHKUbAAB00oIiiRo902.png"}),p(),P,f,i(l,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/25/A4/Ciqc1F7wjYaAdnK9AAAUAPSiLp8718.png"}),p(),S,i(l,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image/M00/25/B0/CgqCHl7wjbOAAItHAABYOBq-4sE977.png"}),p(),k])}const R=e(n,[["render",x]]);export{N as __pageData,R as default};
