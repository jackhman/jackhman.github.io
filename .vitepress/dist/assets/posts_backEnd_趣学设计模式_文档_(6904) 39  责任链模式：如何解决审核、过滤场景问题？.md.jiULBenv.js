import{_ as n,F as a,g as l,K as p,h as t,ar as s,o as e}from"./chunks/framework.VlluEs-f.js";const m=JSON.parse('{"title":"39责任链模式：如何解决审核、过滤场景问题？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/趣学设计模式_文档/(6904) 39  责任链模式：如何解决审核、过滤场景问题？.md","filePath":"posts/backEnd/趣学设计模式_文档/(6904) 39  责任链模式：如何解决审核、过滤场景问题？.md","lastUpdated":1718371218000}'),E={name:"posts/backEnd/趣学设计模式_文档/(6904) 39  责任链模式：如何解决审核、过滤场景问题？.md"},h=s('<h1 id="_39责任链模式-如何解决审核、过滤场景问题" tabindex="-1">39责任链模式：如何解决审核、过滤场景问题？ <a class="header-anchor" href="#_39责任链模式-如何解决审核、过滤场景问题" aria-label="Permalink to &quot;39责任链模式：如何解决审核、过滤场景问题？&quot;">​</a></h1><p>相较而言，责任链模式是一个使用频率很高的模式，它是我们所讲的最后一个行为型设计模式了，并且这也是整个课程的最后一讲。今天，我除了会带你搞清楚责任链模式的原理和实现外，还会对行为型设计模式做一次整体的总结。</p><p>话不多说，让我们开始今天的学习吧。</p><h3 id="模式原理分析" tabindex="-1">模式原理分析 <a class="header-anchor" href="#模式原理分析" aria-label="Permalink to &quot;模式原理分析&quot;">​</a></h3><p>责任链模式的原始定义是：通过为多个对象提供处理请求的机会，避免将请求的发送者与其接收者耦合。链接接收对象并沿着链传递请求，直到对象处理它。</p><p>这个定义读起来还是有点抽象难懂，实际上它只说了一个关键点：<strong>通过构建一个处理流水线来对一次请求进行多次的处理</strong>。</p><p>这里我们结合购物的例子来解释下：当你收到了购买的商品后，发现商品有质量问题，于是你打电话询问客服关于退货的流程，客服接到你的电话后，会先打开订单系统查询你提供的订单信息并确认是否正确，确认后再使用物流系统通知快递小哥上门取件，快递小哥取件后会返回商品让仓储系统进行确认，并通知商品系统......这样的一个过程就是责任链模式的真实应用。</p><p>那么，我们先来看看责任链模式的 UML 图：</p>',8),k=s(`<p>责任链模式的 UML 图</p><p>从该 UML 图中，我们能看出责任链模式其实只有两个关键角色。</p><ul><li><p><strong>处理类（Handler）</strong>：可以是一个接口，用于接收请求并将请求分派到处理程序链条中（实际上就是一个数组链表），其中，会先将链中的第一个处理程序放入开头来处理。</p></li><li><p><strong>具体处理类（HandlerA、B、C）</strong>：按照链条顺序对请求进行具体处理。</p></li></ul><p>下面我们再来看看该 UML 对应的代码实现：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public interface Handler {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    void setNext(Handler handler);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    void handle(Request request);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public class Request {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    private String data;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public String getData() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        return data;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public void setData(String data) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        this.data = data;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public class HandlerA implements Handler{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    private Handler next;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public HandlerA() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @Override</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public void setNext(Handler handler) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        this.next = handler;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @Override</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public void handle(Request request) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.println(&quot;HandlerA 执行 代码逻辑，处理：&quot;+request.getData());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        request.setData(request.getData().replace(&quot;AB&quot;,&quot;&quot;));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        if (null != next) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            next.handle(request);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } else {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            System.out.println(&quot;执行中止！&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public class HandlerB implements Handler {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    private Handler next;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public HandlerB() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @Override</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public void setNext(Handler handler) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        this.next = handler;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @Override</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public void handle(Request request) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.println(&quot;HandlerB 执行 代码逻辑，处理：&quot;+request.getData());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        request.setData(request.getData().replace(&quot;CD&quot;,&quot;&quot;));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        if (null != next) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            next.handle(request);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } else {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            System.out.println(&quot;执行中止！&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public class HandlerC implements Handler{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    private Handler next;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public HandlerC() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @Override</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public void setNext(Handler handler) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        this.next = handler;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @Override</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public void handle(Request request) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.println(&quot;HandlerC 执行 代码逻辑，处理：&quot;+request.getData());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        if (null != next) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            next.handle(request);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } else {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            System.out.println(&quot;执行中止！&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public class Demo {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Handler h1 = new HandlerA();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Handler h2 = new HandlerB();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Handler h3 = new HandlerC();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        h1.setNext(h2);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        h2.setNext(h3);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Request request = new Request();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        request.setData(&quot;请求数据ABCDE&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        h1.handle(request);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">//输出结果</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HandlerA 执行 代码逻辑，处理：请求数据ABCDE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HandlerB 执行 代码逻辑，处理：请求数据CDE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HandlerC 执行 代码逻辑，处理：请求数据E</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">执行中止！</span></span></code></pre></div><p>从这段代码实现可以看出，责任链模式的实现非常简单，每一个具体的处理类都会保存在它之后的下一个处理类。当处理完成后，就会调用设置好的下一个处理类，直到最后一个处理类不再设置下一个处理类，这时处理链条全部完成。在代码示例中，HandlerA 删除掉字符串 ABCDE 中的 AB，并交给 HandlerB 处理；HandlerB 删除掉 CDE 中的 CD，并交给 HandlerC；HandlerC 处理完后，整个执行过程中止。</p><h3 id="使用场景分析" tabindex="-1">使用场景分析 <a class="header-anchor" href="#使用场景分析" aria-label="Permalink to &quot;使用场景分析&quot;">​</a></h3><p>责任链模式常见的使用场景有以下几种情况。</p><ul><li><p><strong>在运行时需要动态使用多个关联对象来处理同一次请求时</strong>。比如，请假流程、员工入职流程、编译打包发布上线流程等。</p></li><li><p><strong>不想让使用者知道具体的处理逻辑时</strong>。比如，做权限校验的登录拦截器。</p></li><li><p><strong>需要动态更换处理对象时</strong>。比如，工单处理系统、网关 API 过滤规则系统等。</p></li></ul><p>为了帮助你更好地理解责任链模式的使用场景，下面我们通过一个简单的例子来为你演示。</p><p>这里我们要创建一个获取数字并判断正负或零的程序，程序接收一个数字的请求，在链条上进行处理并打印对应的处理结果。</p><p>我们先创建一个链条 Chain，并设置起始的处理类，如下代码所示：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public class Chain {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Excutor chain;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public Chain(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        buildChain();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    private void buildChain(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Excutor e1 = new NegativeExcutor();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Excutor e2 = new ZeroExcutor();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Excutor e3 = new PositiveExcutor();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        e1.setNext(e2);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        e2.setNext(e3);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        this.chain = e1;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public void process(Integer num) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        chain.handle(num);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>接下来我们创建抽象的处理类 Excutor，声明两个方法：setNext 用于设置下一个处理类，handle 是具体的业务逻辑。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public interface Excutor {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    void setNext(Excutor excutor);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    void handle(Integer num);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>NegativeExcutor、PositiveExcutor 和 ZeroExcutor 分别代表处理负数、正数和零。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public class NegativeExcutor implements Excutor {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    private Excutor next;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @Override</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public void setNext(Excutor excutor) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        this.next = excutor;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @Override</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public void handle(Integer num) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        if (null!= num &amp;&amp; num </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 0) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            System.out.println(&quot;NegativeExcutor获取数字：&quot;+num+&quot; ,处理完成！&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } else {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            if (null != next) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                System.out.println(&quot;===经过NegativeExcutor&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                next.handle(num);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            } else {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                System.out.println(&quot;处理中止！-NegativeExcutor&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public class PositiveExcutor implements Excutor{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    private Excutor next;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @Override</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public void setNext(Excutor excutor) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        this.next = excutor;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @Override</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public void handle(Integer num) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        if (null!= num &amp;&amp; num &gt; 0) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            System.out.println(&quot;PositiveExcutor获取数字：&quot;+num+&quot; ,处理完成！&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } else {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            if (null != next) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                System.out.println(&quot;===经过PositiveExcutor&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                next.handle(num);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            } else {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                System.out.println(&quot;处理中止！-PositiveExcutor&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public class ZeroExcutor implements Excutor{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    private Excutor next;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @Override</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public void setNext(Excutor excutor) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        this.next = excutor;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @Override</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public void handle(Integer num) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        if (null!= num &amp;&amp; num == 0) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            System.out.println(&quot;ZeroExcutor获取数字：&quot;+num+&quot; ,处理完成！&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } else {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            if (null != next) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                System.out.println(&quot;===经过ZeroExcutor&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                next.handle(num);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            } else {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                System.out.println(&quot;处理中止！- ZeroExcutor&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>最后，运行一个单元测试：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public class Client {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Chain chain = new Chain();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        chain.process(99);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.println(&quot;------&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        chain.process(-11);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.println(&quot;------&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        chain.process(0);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.println(&quot;------&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        chain.process(null);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">//输出结果</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">===经过NegativeExcutor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">===经过ZeroExcutor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PositiveExcutor获取数字：99 ,处理完成！</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">------</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NegativeExcutor获取数字：-11 ,处理完成！</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">------</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">===经过NegativeExcutor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ZeroExcutor获取数字：0 ,处理完成！</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">------</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">===经过NegativeExcutor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">===经过ZeroExcutor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">处理中止！-PositiveExcutor</span></span></code></pre></div><p>从最后的结果可以看到，当我们输入不同的数时，都会经过一整个链条的流转，直到最终的处理对象完成处理。</p><p>所以说，责任链模式就像工厂的流水线作业一样，按照某一个标准化的流程来执行，用于规则过滤、Web 请求协议解析等具备链条式的场景中，通过拆分不同的处理节点来完成整个流程的处理。</p><h3 id="为什么使用责任链模式" tabindex="-1">为什么使用责任链模式？ <a class="header-anchor" href="#为什么使用责任链模式" aria-label="Permalink to &quot;为什么使用责任链模式？&quot;">​</a></h3><p>分析完责任链模式的原理和使用场景后，我们再来说说使用责任链模式的原因，可总结为以下三个。</p><p><strong>第一个，解耦使用者和后台庞大的流程化处理</strong>。我们都知道，在线购物订单里包含了物流、商品、支付、会员等多个系统的处理逻辑，如果让使用者一一和它们对接，势必会造成使用困难、系统之间调用混乱的情况发生，而通过订单建立一个订单的状态变更流程，就能将这些系统很好地串联在一起，这不仅能够让使用者只需要关注订单流程这一个入口，同时还能够让不同的系统按照各自的职责来发挥作用。比如，订单在未完成支付前，商品系统是不会通知物流系统进行商品发货的。</p><p><strong>第二个，为了动态更换流程处理中的处理对象</strong>。比如，在请假流程中，申请人一般会提交申请给直接领导审批，但有时直接领导可能无法进行审批操作，这时系统就可以更换审批人到其他审批人，这样就不会阻塞请假流程的审批。</p><p><strong>第三个，为了处理一些需要递归遍历的对象列表</strong>。比如，权限的规则过滤。对于不同部门不同级别人员的权限，就可以采用一个过滤链条来进行权限的管控。</p><h3 id="收益什么-损失什么" tabindex="-1">收益什么？损失什么？ <a class="header-anchor" href="#收益什么-损失什么" aria-label="Permalink to &quot;收益什么？损失什么？&quot;">​</a></h3><p>通过上述分析，我们就可以总结出使用责任链模式的优点。</p><ul><li><p><strong>降低客户端对象与处理链条上对象之间的耦合度</strong>。比如，提交上线审核，提交人只知道最开始申请的处理人是谁，而后续是否需要别的审核人其实是由处理链条来控制的。</p></li><li><p><strong>提升系统扩展性</strong>。对于需要多次处理的同一个请求，可以在链条上增加新的具体处理类，满足开闭原则，能极大地提升系统扩展性。</p></li><li><p><strong>增强了具体处理类的职责独立性</strong>。即便链条上的工作流程发生了变化，也可以动态地改变具体处理类的调用次序和增加类的新的职责。每个类只需要处理自己该处理的工作，不该处理的就传递给下一个对象完成，明确各类的责任范围，同时也符合类的单一职责原则。</p></li><li><p><strong>简化了对象之间前后关联处理的复杂性</strong>。每个对象只需存储一个指向后继者的引用，不需保持其他所有处理者的引用，这避免了使用众多的 if 或者 if···else 语句。</p></li></ul><p>同样，责任链模式也有一些缺点。</p><ul><li><p><strong>降低性能</strong>。由于每一个请求都需要经历一次完整的链条上具体处理类的处理，系统性能势必会受到一定影响，比如，依赖更多的代码行或依赖更复杂的代码逻辑。</p></li><li><p><strong>调试难度增大</strong>。调试代码需要验证每个具体处理者是否都能接收到请求，一旦出现错误，排查与修改也变得更加麻烦。</p></li><li><p><strong>容易出现死锁异常</strong>。一旦某一个对象设置后继者出现错误，就会出现循环调用，进而导致堆栈溢出的错误。</p></li></ul><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>在实际的软件开发中，责任链模式的应用非常广泛，可以说只要是与流程相关的软件系统都能够使用责任链模式来构建，一方面可以用在代码中实现松散耦合，另一方面可以动态增删子处理流程。</p><p>责任链模式的原理和实现虽然都非常简单，但是在实际使用中还需要<strong>注意维护上下文关系的正确性</strong>，一旦出现循环调用，很容易死锁而导致程序崩溃。</p><p>另外，要<strong>注意控制责任链中的处理对象数量</strong>。如果处理对象的数量过多，比如超过 20 个，容易让代码变得难以维护，这时还是应该尽可能减少处理对象的数量，将其合并到相类似的处理对象中去。</p><p>到此，我们的行为型设计模式的课程就学习完了。最后，我再总结一下行为型设计模式的要点。</p><p>行为型设计模式共有 11 种，每一种的要点可简单提炼和总结为如下，你可以对比理解和记忆。</p><ul><li><p><strong>访问者模式</strong>，在对象级别中实际为树型结构，与抽象工厂模式类似。它给使用者提供了一种统一访问树结构中数据节点的方式，因此具备灵活扩展的特性。</p></li><li><p><strong>模板方法模式</strong>，定义一个算法模板，并将具体的执行步骤延迟到子类中实现。</p></li><li><p><strong>策略模式</strong>，将多个不同的算法封装成策略，让它们可以互相替换，适合应用于对计算效率有一定要求的系统。策略模式通常会和工厂方法模式配合使用，为使用者提供一组使用策略。</p></li><li><p><strong>状态模式</strong>，最常用的实现方式是状态机，大量应用于需要控制状态流转的系统中。常用在游戏、工作流引擎、购物流程等系统开发中。</p></li><li><p><strong>观察者模式</strong>，是经典 MVC 模式的变形，与中介者模式的结构很类似，在结构上都是星形结构，但侧重点不同。观察者模式侧重于将观察者和被观察者代码解耦，中介者则侧重于充当两个对象之间的新媒介。观察者模式的应用场景非常广泛，比如，邮件订阅、公众号推送、RSS、消息中间件等。</p></li><li><p><strong>备忘录模式</strong>，也叫快照模式，通常用于捕获一个对象的内部状态，比如保存、打开、关闭等状态，并在执行对象之外保存一个副本状态，方便用于之后恢复对象到某一个时间状态。</p></li><li><p><strong>中介者模式</strong>，最大的作用在于解耦对象之间的直接引用，在结构上体现为将网状的结构变成以中介者为中心的星形结构，从而保证了对象行为上的稳定性，即不会因为新对象的引入造成大量类之间引用的修改。它的设计思想和分层思想很像，通过引入一个中间层，将层与层之间的多对多关系变为一对多关系。不过要注意，中间层不能设计得过于复杂而变成另一种过度依赖的层。</p></li><li><p><strong>迭代器模式</strong>，大量应用于基础类库中，对重复遍历操作进行封装。现在大部分编程语言都提供了现成的迭代器可以使用，我们不需要从零开始开发。</p></li><li><p><strong>解释器模式</strong>，为某个语言（编程语言也是语言）定义它的语法表示，比如 if-else 语法，并定义一个解释器用来处理这个语法。</p></li><li><p><strong>命令模式</strong>，将某个命令（函数方法）封装成对象进行传递，关注的维度是命令，比如，打开、关闭文件的命令。用于处理多个命令调用和使用远程服务的场景。另外，它还会与备忘录模式结合在一起用于撤销和重做等场景。</p></li><li><p><strong>责任链模式</strong>，用于链条状结构，将处理请求沿链条进行传递，动态指定职责的承担对象，由各自对象实现对应职责。比如，一个请求先经过 A 拦截器处理，然后再把请求传递给 B 拦截器，B 拦截器处理完后再传递给 C 拦截器，以此类推，形成一个链条，因此也叫拦截器模式。</p></li></ul><h3 id="课后思考" tabindex="-1">课后思考 <a class="header-anchor" href="#课后思考" aria-label="Permalink to &quot;课后思考&quot;">​</a></h3><p>学完这 23 种设计模式后，你能第一时间使用的模式有哪些？还有哪些关于课程的疑问？欢迎你在留言区与我分享。</p>`,40);function r(c,d,o,g,u,y){const i=a("Image");return e(),l("div",null,[h,p(i,{alt:"设计模式 39 插图 01.jpg",src:"https://s0.lgstatic.com/i/image6/M01/4F/B4/Cgp9HWD6qceAZgzWAAFnVYgF1Ak441.jpg"}),t(),k])}const q=n(E,[["render",r]]);export{m as __pageData,q as default};
