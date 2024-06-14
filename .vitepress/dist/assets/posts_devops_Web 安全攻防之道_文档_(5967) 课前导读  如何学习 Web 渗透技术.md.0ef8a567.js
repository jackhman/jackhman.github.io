import{_ as p,D as l,o as s,g as i,J as a,h as e,m as t,Q as o}from"./chunks/framework.f67d7268.js";const M=JSON.parse('{"title":"课前导读如何学习Web渗透技术","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/Web 安全攻防之道_文档/(5967) 课前导读  如何学习 Web 渗透技术.md","filePath":"posts/devops/Web 安全攻防之道_文档/(5967) 课前导读  如何学习 Web 渗透技术.md","lastUpdated":1696682708000}'),n={name:"posts/devops/Web 安全攻防之道_文档/(5967) 课前导读  如何学习 Web 渗透技术.md"},h=t("h1",{id:"课前导读如何学习web渗透技术",tabindex:"-1"},[e("课前导读如何学习Web渗透技术 "),t("a",{class:"header-anchor",href:"#课前导读如何学习web渗透技术","aria-label":'Permalink to "课前导读如何学习Web渗透技术"'},"​")],-1),c=t("p",null,"你好，我是赢少良。从这一讲开始，我们就进入了 Web 安全相关的攻防技术的学习，希望这个课程能对你有所帮助。",-1),_=t("p",null,"在课前导读部分，我想讲一下我个人在学习历程中总结的心得。",-1),m=t("h3",{id:"web-安全学习路线",tabindex:"-1"},[e("Web 安全学习路线 "),t("a",{class:"header-anchor",href:"#web-安全学习路线","aria-label":'Permalink to "Web 安全学习路线"'},"​")],-1),u=t("p",null,"我们先来看下 Web 所涉及的内容。",-1),b=t("p",null,"一般来说，我们常说的 Web 是指网站，其本义是万维网。这个实际涵盖的内容就很多了，涉及浏览器、服务器运行环境等常出现内存破坏漏洞的应用和系统。但是在安全行业内，我们通常所说的 Web 安全，是指 Web 应用安全，即网站安全，也包含仅提供后端 CGI 服务的应用（供移动 App 调用的，无直接的前端网页），可以简单地分为前端和后端，如下图所示：",-1),g=o('<p>图 1：Web 相关知识结构</p><p>平常行业内所说的二进制安全，通常是指内存破坏漏洞、逆向工程、病毒对抗等涉及二进制数据分析的技术领域。虽然浏览器、Linux 系统等也是 Web 领域中的一个环节，但本课程不涉及二进制安全内容，仍以狭义上的网站安全为主要内容。</p><p>在学习 Web 安全的过程中，有 3 个阶段。</p><h4 id="阶段一-前端知识学习" tabindex="-1">阶段一：前端知识学习 <a class="header-anchor" href="#阶段一-前端知识学习" aria-label="Permalink to &quot;阶段一：前端知识学习&quot;">​</a></h4><p>前端开发主要就是 HTML、CSS、JavaScript 这 3 门语言的学习。在学习前，<strong>建议你先了解下 HTTP 相关的知识</strong>，掌握它的工作原理、请求方法、响应头、状态码、内容类型等等。</p><p>行业内有一本很厚的《HTTP 权威指南》，共 694 页，如果从这本书入手其实是很打击人的，不太推荐，建议你上&quot;<a href="https://www.runoob.com/http/http-tutorial.html" target="_blank" rel="noreferrer">菜鸟教程</a>&quot;学习 HTTP 课程（所有本课程中提及的书或教程，在文末都会整理一份清单给到你）。</p><p>学完之后，直接用 Chrome 浏览器的检查器（快捷键 F12 或 Ctrl+Shift+I）里的&quot;Network&quot;标签查看 HTTP 请求与响应包数据，如下图所示：</p>',7),d=o('<p>图 2：Chrome 浏览器的 HTTP 请求与响应包数据</p><p>它可以帮助你快速理解 HTTP 的交互原理，并使你有一个直观的认识。个人觉得这是快速学习 HTTP 的方法，花 30~60 分钟就足够了。</p><p><strong>接下来就是学习 HTML+CSS</strong> 。学习前端的最好资料就是&quot;<a href="https://www.quanzhanketang.com/default.html" target="_blank" rel="noreferrer">W3school</a>&quot;网站。</p><p>关于 HTML 与 CSS 的教程链接也在文末附上了。</p><p><strong>最后就是学习 JavaScript</strong>。这是前端开发最精髓的部分，在&quot;菜鸟教程&quot;上也有免费的教程，你可以边学习边实践。之后，你可以再学习下当前最流行的前端开发框架 Vue.js（有精力也可以学习下 React、Angular 等开发框架），它是一套构建用户界面的渐进式框架，其自带的和第三方的丰富组件可以帮你快速开发出漂亮的网页，不用从头开始写代码。</p><p>关于 Vue.js 的学习资料，推荐&quot;<a href="https://vuejs.bootcss.com/guide" target="_blank" rel="noreferrer">Vue.js 中文文档</a>&quot;。&quot;菜鸟教程&quot;上也有，个人比较喜欢上面的&quot;尝试一下&quot;功能，两套教程均在文末附上链接，记得查看。</p><p>&quot;菜鸟教程&quot;更适合入门学习，如果你想进一步地学习，尤其是 JavaScript，最好是找两本书进修下。这里推荐《<strong>JavaScript DOM 编程艺术</strong> 》和《<strong>JavaScript 高级程序设计</strong>》，记得先看第一本，再看第二本。</p><h4 id="阶段二-后端知识学习" tabindex="-1">阶段二：后端知识学习 <a class="header-anchor" href="#阶段二-后端知识学习" aria-label="Permalink to &quot;阶段二：后端知识学习&quot;">​</a></h4><p>学完前端，就要来学习后端的知识了。</p><p>随着 Node.js 的崛起，很多后端也开始用前端语言 JavaScript 来开发后端功能。Node.js 基于 Chrome V8 提供的 JavaScript 运行环境，非常适合前端工程师作为进军后端开发的阶梯。关于 Node.js 教程的链接在文末的&quot;其他资料&quot;一节中已附上。</p><p>更为传统的后端开发经常是搭配 PHP+MySQL 数据库。以下是 2020 年 W3Tech 对当前 Web 开发技术的调查情况，其结果表明全球 78.8% 的网站使用 PHP 作为服务器后端开发语言。</p>',11),f=o('<p>图 3：2020 年 W3Tech 对当前 Web 开发技术的调查情况</p><p>鉴于上图，本课程涉及的主要语言是 PHP，很多漏洞示例也是以 PHP 为例，掌握 PHP 基础也是学习本课程的预备知识要求。</p><p>我在这里推荐《<strong>PHP 和 MySQL Web 开发</strong>》一书，里面讲解了 PHP 的方方面面，而且在第 2 篇中还专门讲解了 MySQL，以及如何用 PHP 与 MySQL 交互。</p><p>现在 Go 以高性能的优势发展得相当快，已经有不少后台开发采用 Go，这也是未来后台开发技术的一大发展趋势。本课程主要以引导入门为主，为了避免课程内容变得太过复杂，关于 Go 的教程就暂不推荐了。</p><p>学完这一阶段，咱们就可以进入最后一个学习的阶段，也就是本课程的主题：Web 漏洞攻防技术。</p><h4 id="阶段三-漏洞攻防学习" tabindex="-1">阶段三：漏洞攻防学习 <a class="header-anchor" href="#阶段三-漏洞攻防学习" aria-label="Permalink to &quot;阶段三：漏洞攻防学习&quot;">​</a></h4><p>Web 漏洞包含哪一些主流的漏洞类型，最佳的参考就是 OWASP Top 10，不过它在 2017 年之后就停止更新维护了。以下是当前的官方统计结果，按顺序排名。</p><ol><li><p><strong>注入</strong>：SQL、NoSQL 数据库注入，还有命令注入和 LDAP 注入等。</p></li><li><p><strong>失效的身份认证和会话管理</strong>：比如攻击者破解密码、窃取密钥、会话令牌或其他漏洞去冒充他人的身份。</p></li><li><p><strong>跨站脚本（XSS）</strong>：XSS 允许攻击者在受害者的浏览器上执行恶意脚本，从而劫持用户会话、钓鱼欺骗等等。</p></li><li><p><strong>失效的访问控制</strong>：比如越权访问其他用户的个人资料、查看敏感文件、篡改数据等。</p></li><li><p><strong>安全配置错误</strong>：比如服务器的不安全配置，导致敏感信息泄露。</p></li><li><p><strong>敏感信息泄露</strong>：比如账号密码未加密存储、敏感数据传输时未加密保护，最终造成数据泄露。</p></li><li><p><strong>攻击检测与防护不足</strong>：比如 WAF、主机入侵检测等防御系统部署不全，这块偏向漏洞防御本身。</p></li><li><p><strong>跨站请求伪造（CSRF）</strong>：攻击者诱使其他登录用户访问恶意站点，以冒用对方的身份执行一些敏感操作。</p></li><li><p><strong>使用含有已知漏洞的组件</strong>：比如一些第三方的开源库、框架等，尤其是已公开漏洞的旧版本，比如名燥一声的 Struts2 漏洞，因频繁出现漏洞被许多开发者弃用。</p></li><li><p><strong>未受有效保护的 API</strong>：比如浏览器和移动 App 中的 JavaScript API，常常因其提供的特殊功能未受有效保护而被滥用，造成不同等级的危害程度。</p></li></ol><p>OWASP Top 10 也不完全属于具体的 Web 漏洞类型，比如第 7、9 点，但其他涉及的主流漏洞类型，我在本课程中大多会讲到，比如 SQL 注入、XSS、CSRF。</p><p>只有真正掌握了这些 Web 漏洞相关的安全技术，才能算是入门了 Web 安全领域，为你将来求职、刷榜漏洞奖励计划奠定基础。</p><p>关于这阶段的学习，除了本课程的内容外，还可以系统地学习下这两本书：《<strong>黑客攻防技术宝典：Web 实战篇</strong> 》和《<strong>白帽子讲 Web 安全</strong> 》。这是个人认为在深度和广度上都有所兼顾的书籍，非常适合 Web 安全的入门。另外也有一本叫《<strong>Web 安全测试</strong>》的书籍，这本更偏向实战，里面介绍了不少渗透测试的技巧和工具，在你理解了常见 Web 漏洞类型后，可以将其作为实战参考手册。</p><h3 id="学习技巧" tabindex="-1">学习技巧 <a class="header-anchor" href="#学习技巧" aria-label="Permalink to &quot;学习技巧&quot;">​</a></h3><p>了解了 Web 安全学习的路线后，你也就知道了学习的方向，那我们应该怎样去学习呢？</p><p>常言道&quot;学以致用&quot;，但在注重实践的计算机科学领域，有时&quot;<strong>用以致学</strong>&quot;可能效果更佳。换句话说，就是带着实际的应用目的去学习。我列举了以下 6 个场景，你可以带着这些目的去学习。</p><h4 id="面向岗位学习" tabindex="-1">面向岗位学习 <a class="header-anchor" href="#面向岗位学习" aria-label="Permalink to &quot;面向岗位学习&quot;">​</a></h4><p>你毕业后肯定得找工作，如果你想从事安全工作，这关是免不了，除非你家里有矿，那当我没说。</p><p>对于面向岗位的学习，你可以直接上招聘网站查找相关岗位的招聘要求，比如在拉勾网搜索&quot;Web 安全&quot;，然后挑选自己感兴趣的公司，比如腾讯或 360，然后查看其岗位描述：</p>',17),k=o('<p>图 4：招聘信息来源拉勾网</p><p>关键在于&quot;<strong>任职要求</strong> &quot;，一般招聘信息里面都会有&quot;职位描述&quot;和&quot;任职要求&quot;或&quot;岗位要求&quot;的信息，&quot;任职要求&quot;里面与技术相关要求就是你要学习的方向。比如上图 360 的招聘信息，总结下技术要求就是：<strong>熟悉 Web 漏洞攻防</strong> 、<strong>工具实战</strong> 、<strong>开发能力</strong>。</p><p>这几块能力要求在本课程中都会涉及，但主要还是集中在 Web 漏洞攻防的部分。这是最主要的要求。其他工具实战在靶场介绍中会涉及，后面也会有一些常见的渗透测试工具的集合介绍。</p><p>带着这种求职岗位的要求就可以很容易地找到学习的方向，对未来找工作也有直接的帮助。</p><h4 id="面向赏金学习" tabindex="-1">面向赏金学习 <a class="header-anchor" href="#面向赏金学习" aria-label="Permalink to &quot;面向赏金学习&quot;">​</a></h4><p>当前国内 SRC（安全响应中心）平台早已是企业标配，各家各户有能力的都在自建，没能力没条件的就寄托在第三方漏洞平台上。无论是自建的还是寄托在第三方漏洞平台上的，它们的目的只有一个，那就是收集自家产品漏洞，提高产品安全性，完善自身检测与防御系统，同时避免被公关炒作。</p><p>SRC 平台会给报告者提供奖品或现金奖励，因此长期吸引着大批白帽子为其测试网站。国外比较著名的漏洞奖励平台有 HackerOne，像微软 Google、Apple 也都有自己的漏洞奖励计划，但因后者都是美金奖励，在汇率的优势下，奖金换算成人民币，常常价值不低。这也是一些老白帽子更喜欢混迹于国外漏洞奖励平台的原因。</p><p><strong>Web 漏洞常常都能够直观地危害到网站的安全性</strong>。它们整体上相比二进制漏洞更容易被利用，危害也就更大。除了像微软、Google、Apple 这种集中在二进制漏洞为主的奖励计划，很多赏金其实都是分给了 Web 漏洞，比如 SRC、HackerOne。</p><p>你可以根据漏洞奖励计划中提供的网站范围，有针对性地进行安全测试，然后将发现的漏洞报给平台换取赏金。这种以赏金为驱动力的学习方式，对于在校生特别有诱惑力。他们可以通过赏金购买书籍、电子产品进一步学习，然后挖掘更多漏洞，赚取更多赏金，将学习转变为主动学习，构造出良性特征的学习动力。</p><p>采用面向赏金的学习方法，不仅可以提高自身的漏洞实战能力，而且还可以赚取赏金，何乐而不为？</p><h4 id="面向工具学习" tabindex="-1">面向工具学习 <a class="header-anchor" href="#面向工具学习" aria-label="Permalink to &quot;面向工具学习&quot;">​</a></h4><p>GitHub 上经常开源一些优秀的安全工具，在 Web 安全领域，以 sqlmap 最为著名。整个项目非常工程化，表现能力也非常优秀。它采用 Python 开发，通过阅读 sqlmap 源码，对研究 SQL 注入漏洞有很大的帮助。</p><p>其他的还有一些漏洞靶场，除了实战测试，也可以通过源码了解是什么样的代码导致的漏洞，避免自己在未来开发中遇到。</p><p>一些优秀的开源工具，常会提供一些不错的漏洞检测和利用的方向，及时掌握相关技术，有助于自身技术的与时俱进，避免落后于技术发展。</p><h4 id="面向漏洞学习" tabindex="-1">面向漏洞学习 <a class="header-anchor" href="#面向漏洞学习" aria-label="Permalink to &quot;面向漏洞学习&quot;">​</a></h4><p>在国外有词叫 Variant Analysis，直译过来叫&quot;<strong>变异分析</strong>&quot;，意思是通过历史漏洞学习和研究，从而挖掘出类似产品中更多相似的漏洞。尤其是同一款产品下，如果开发写出了一个漏洞，那么在其他地方出现同一类漏洞的概率就比较大。</p><p>乌云网已经成为历史，但其遗留下的漏洞案例是一笔不错的财富。网上也有人搭建了乌云镜像提供相关的漏洞、知识库的检索，你可以点击<a href="https://wooyun.x10sec.org/" target="_blank" rel="noreferrer">链接</a>查看。</p><p>HackerOne 通常在漏洞修复后的 3 个月会公开漏洞细节，栏目名叫&quot;<a href="https://hackerone.com/hacktivity" target="_blank" rel="noreferrer">Hacktivity</a>&quot;，它提供 RSS 订阅，可以非常方便地关注。</p>',18),w=t("p",null,"图 5：Hacktivity",-1),S=t("p",null,"说到漏洞库就不得不提 Exploit-db，其中有着丰富的漏洞细节和利用代码。2014 年那时还是一个叫 milw00rm 的漏洞库为主流，milw00rm 不再维护后，所有漏洞信息都被并入了 Exploit-db。至今，Exploit-db 还在正常运营，其背后的团队正是打造了著名黑客系统 Kali 的 Offensive-Security 安全公司，是一家专门从事安全培训和渗透测试服务的提供商。",-1),q=o('<p>图 6：Exploit-db</p><p>这种通过漏洞学习漏洞的方式，除了加深对漏洞的理解，还可以提高漏洞挖掘的产出，是一种十分有效地学习方式。</p><h4 id="面向大牛学习" tabindex="-1">面向大牛学习 <a class="header-anchor" href="#面向大牛学习" aria-label="Permalink to &quot;面向大牛学习&quot;">​</a></h4><p>在你感兴趣的安全领域里，通常都有一些大牛，你可以去收集他们发表的论文、文章、大会议题，关注他们的微博、公众号、Twitter、GitHub、博客等社交平台账号，去了解他们的技术成长路线。</p><p>这种学习方法，前期以模仿为主，参考他们的学习方法、技术文章，把握行业技术趋势；后期是在入门之后，有了一定的技术积累，就可以开始在前人的基础上自主研究技术、创新技术，这是比较难的一个阶段，但突破后，你在技术上将会有质的飞跃。</p><h4 id="关注安全动态" tabindex="-1">关注安全动态 <a class="header-anchor" href="#关注安全动态" aria-label="Permalink to &quot;关注安全动态&quot;">​</a></h4><p>技术发展非常迅速，一不留眼你就落后了，所以要避免闭门造车，比如诺基亚的塞班、微软的 Windows Mobile，现在都退出了历史舞台，如果你之前不关注这些，还在埋头研究它们的安全性，那就有点浪费时间了。</p><p>你可以关注一些技术资讯网站、公众号、Twitter、Github、博客、RSS 订阅集合，国内外安全大会（工业界顶会：BlackHat、Defcon、CanSecWest、OffensiveCon，学术界顶会：CCS、NDSS、Oakland S&amp;P、USENIX Security），以及 CTF 比赛等。这些都可以帮你了解安全动态的途径。</p><p>在文末的&quot;网站推荐&quot;中，我已经整理一份清单，建议你采用 RSS 订阅的方式关注，手机上装个 RSS 订阅客户端，比如 Inoreader、Feedly、深蓝阅读，一有更新就可以立马感知到，非常方便。</p><h3 id="学习资料清单" tabindex="-1">学习资料清单 <a class="header-anchor" href="#学习资料清单" aria-label="Permalink to &quot;学习资料清单&quot;">​</a></h3><p>除了上面提到的书籍和相关资料，此处还做了一些补充，供你学习参考。</p><h4 id="书籍清单" tabindex="-1">书籍清单 <a class="header-anchor" href="#书籍清单" aria-label="Permalink to &quot;书籍清单&quot;">​</a></h4><ol><li><p>《JavaScript DOM 编程艺术》：<a href="https://item.jd.com/10603153.html" target="_blank" rel="noreferrer">https://item.jd.com/10603153.html</a></p></li><li><p>《JavaScript 高级程序设计》：<a href="https://item.jd.com/12958580.html" target="_blank" rel="noreferrer">https://item.jd.com/12958580.html</a></p></li><li><p>《PHP 和 MySQL Web 开发》：<a href="https://item.jd.com/10059047.html?" target="_blank" rel="noreferrer">https://item.jd.com/10059047.html</a></p></li><li><p>《黑客攻防技术宝典：Web 实战篇》：<a href="https://item.jd.com/11020022.html" target="_blank" rel="noreferrer">https://item.jd.com/11020022.html</a></p></li><li><p>《白帽子讲 Web 安全》：<a href="https://item.jd.com/11483966.html" target="_blank" rel="noreferrer">https://item.jd.com/11483966.html</a></p></li><li><p>《Web 安全测试》：<a href="https://item.jd.com/10021008335997.html" target="_blank" rel="noreferrer">https://item.jd.com/10021008335997.html</a></p></li><li><p>《Web 前端黑客技术揭秘》：<a href="https://item.jd.com/11181832.html" target="_blank" rel="noreferrer">https://item.jd.com/11181832.html</a></p></li><li><p>《SQL 注入攻击与防御》：<a href="https://item.jd.com/12369984.html" target="_blank" rel="noreferrer">https://item.jd.com/12369984.html</a></p></li><li><p>网络安全从业者书单推荐：<a href="https://github.com/riusksk/secbook" target="_blank" rel="noreferrer">https://github.com/riusksk/secbook</a></p></li></ol><h4 id="网站推荐" tabindex="-1">网站推荐 <a class="header-anchor" href="#网站推荐" aria-label="Permalink to &quot;网站推荐&quot;">​</a></h4><ol><li><p>FreeBuf：<a href="https://www.freebuf.com/" target="_blank" rel="noreferrer">https://www.freebuf.com</a></p></li><li><p>安全客：<a href="https://www.anquanke.com/" target="_blank" rel="noreferrer">https://www.anquanke.com</a></p></li><li><p>Seebug Paper：<a href="https://paper.seebug.org/" target="_blank" rel="noreferrer">https://paper.seebug.org</a></p></li><li><p>安全 RSS 订阅：<a href="http://riusksk.me/media/riusksk_RSS_20190330.xml" target="_blank" rel="noreferrer">http://riusksk.me/media/riusksk_RSS_20190330.xml</a></p></li><li><p>CTFTime Writeups：<a href="https://ctftime.org/writeups" target="_blank" rel="noreferrer">https://ctftime.org/writeups</a></p></li><li><p>安全脉搏：<a href="https://www.secpulse.com/" target="_blank" rel="noreferrer">https://www.secpulse.com</a></p></li><li><p>SecWiki：<a href="https://www.sec-wiki.com/" target="_blank" rel="noreferrer">https://www.sec-wiki.com</a></p></li><li><p>玄武每日安全：<a href="https://sec.today/pulses/" target="_blank" rel="noreferrer">https://sec.today/pulses</a></p></li><li><p>学术论文检索：<a href="https://arxiv.org/search/cs" target="_blank" rel="noreferrer">https://arxiv.org/search/cs</a></p></li><li><p>Exploit-db：<a href="https://www.exploit-db.com/" target="_blank" rel="noreferrer">https://www.exploit-db.com</a></p></li><li><p>Github：<a href="https://github.com/" target="_blank" rel="noreferrer">https://github.com</a></p></li><li><p>信息安全知识库：<a href="https://vipread.com/" target="_blank" rel="noreferrer">https://vipread.com</a></p></li><li><p>先知社区：<a href="https://xz.aliyun.com/" target="_blank" rel="noreferrer">https://xz.aliyun.com</a></p></li></ol><h4 id="其他资料" tabindex="-1">其他资料 <a class="header-anchor" href="#其他资料" aria-label="Permalink to &quot;其他资料&quot;">​</a></h4><ol><li><p>HTTP 教程：<a href="https://www.runoob.com/http/http-tutorial.html" target="_blank" rel="noreferrer">https://www.runoob.com/http/http-tutorial.html</a></p></li><li><p>HTML 教程：<a href="https://www.quanzhanketang.com/default.html" target="_blank" rel="noreferrer">https://www.quanzhanketang.com/default.html</a></p></li><li><p>CSS 教程：<a href="https://www.runoob.com/css/css-tutorial.html" target="_blank" rel="noreferrer">https://www.runoob.com/css/css-tutorial.html</a></p></li><li><p>JavaScript 教程：<a href="https://www.runoob.com/js/js-tutorial.html" target="_blank" rel="noreferrer">https://www.runoob.com/js/js-tutorial.html</a></p></li><li><p>Vue.js 教程：<a href="https://www.runoob.com/vue2/vue-tutorial.html" target="_blank" rel="noreferrer">https://www.runoob.com/vue2/vue-tutorial.html</a></p></li><li><p>Vue.js 中文文档：<a href="https://vuejs.bootcss.com/guide/" target="_blank" rel="noreferrer">https://vuejs.bootcss.com/guide</a></p></li><li><p>Node.js 教程：<a href="https://www.runoob.com/nodejs/nodejs-tutorial.html" target="_blank" rel="noreferrer">https://www.runoob.com/nodejs/nodejs-tutorial.html</a></p></li><li><p>HackerOne Hacktivity：<a href="https://hackerone.com/hacktivity" target="_blank" rel="noreferrer">https://hackerone.com/hacktivity</a></p></li><li><p>乌云公开漏洞、知识库搜索：<a href="https://wooyun.x10sec.org/" target="_blank" rel="noreferrer">https://wooyun.x10sec.org</a></p></li><li><p>1000 个 PHP 代码审计案例：<a href="https://github.com/Xyntax/1000php" target="_blank" rel="noreferrer">https://github.com/Xyntax/1000php</a></p></li><li><p>知道创宇研发技能表：<a href="https://blog.knownsec.com/Knownsec_RD_Checklist/index.html" target="_blank" rel="noreferrer">https://blog.knownsec.com/Knownsec_RD_Checklist/index.html</a></p></li></ol><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>这一讲主要学习的是 Web 安全的初衷：未知攻，焉知防。如果不能掌握黑客常用的攻击手法，又如何做好防御呢？在 Web 安全的学习路线上，你可以按照前端、后端、漏洞的顺序进行。前后端的开发基础已在文中附上相关的学习资料，你可以按顺序学习。</p>',19),P=t("p",null,"除了学习路线、学习资料，我还给你介绍几种比较实用的学习技巧，目的是想引导你用以致学，带着目标，以主动的心态来学习本课程。主动学习比被动学习的收益效果高，你可以多与人交流讨论、实践，甚至可以传授他人。",-1),T=t("p",null,"如果你在学习方法和资料上有其他更好的推荐，欢迎在留言区分享。",-1),W=t("p",null,"最后附上一张学习金字塔给你：",-1),A=t("p",null,"图 7：学习金字塔",-1);function C(x,j,v,H,y,N){const r=l("Image");return s(),i("div",null,[h,c,_,m,u,b,a(r,{alt:"图片1.png",src:"https://s0.lgstatic.com/i/image/M00/8A/39/CgqCHl_Zr5-ATUhRAAMpS6Rf1Ck851.png"}),e(),g,a(r,{alt:"图片2.png",src:"https://s0.lgstatic.com/i/image2/M01/02/0C/Cip5yF_Zr76AWiNtAAQSZ-8_J_I002.png"}),e(),d,a(r,{alt:"图片3.png",src:"https://s0.lgstatic.com/i/image2/M01/02/0D/CgpVE1_Zr9CANWyzAAU-P_qrIcA458.png"}),e(),f,a(r,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image2/M01/02/0D/CgpVE1_Zr-WAMAhNAAFcqtWjIv0666.png"}),e(),k,a(r,{alt:"图片5.png",src:"https://s0.lgstatic.com/i/image/M00/8A/2E/Ciqc1F_ZsIyAXEQjAANXYn70e8c897.png"}),e(),w,S,a(r,{alt:"图片6.png",src:"https://s0.lgstatic.com/i/image2/M01/02/0C/Cip5yF_ZsJiAAv-dAASNGdT-lWY809.png"}),e(),q,a(r,{alt:"Lark20201216-153511.png",src:"https://s0.lgstatic.com/i/image/M00/8A/34/Ciqc1F_ZuQGAS7JWAAT7AnN4Trc001.png"}),e(),P,T,W,a(r,{alt:"图片7.png",src:"https://s0.lgstatic.com/i/image/M00/8A/2E/Ciqc1F_ZsMGAWgtqAAGy-RVd1fc687.png"}),e(),A])}const R=p(n,[["render",C]]);export{M as __pageData,R as default};
