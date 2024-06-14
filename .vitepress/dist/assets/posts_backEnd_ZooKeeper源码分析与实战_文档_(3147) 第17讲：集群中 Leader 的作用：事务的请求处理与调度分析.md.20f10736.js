import{_ as p,D as l,o as t,g as r,J as n,h as e,Q as o,m as s}from"./chunks/framework.f67d7268.js";const P=JSON.parse('{"title":"第17讲：集群中Leader的作用：事务的请求处理与调度分析","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/ZooKeeper源码分析与实战_文档/(3147) 第17讲：集群中 Leader 的作用：事务的请求处理与调度分析.md","filePath":"posts/backEnd/ZooKeeper源码分析与实战_文档/(3147) 第17讲：集群中 Leader 的作用：事务的请求处理与调度分析.md","lastUpdated":1696682708000}'),c={name:"posts/backEnd/ZooKeeper源码分析与实战_文档/(3147) 第17讲：集群中 Leader 的作用：事务的请求处理与调度分析.md"},E=o('<h1 id="第17讲-集群中leader的作用-事务的请求处理与调度分析" tabindex="-1">第17讲：集群中Leader的作用：事务的请求处理与调度分析 <a class="header-anchor" href="#第17讲-集群中leader的作用-事务的请求处理与调度分析" aria-label="Permalink to &quot;第17讲：集群中Leader的作用：事务的请求处理与调度分析&quot;">​</a></h1><p>本课时主要学习 Leader 在集群中的作用以及实现原理，在前面的课程中我们一直围绕 ZooKeeper 集群的功能来研究其底层实现原理，今天这节课我们还是围绕这个主题来进一步探究 Leader 服务器在 ZooKeeper 中的作用，即处理事务性的会话请求以及管理 ZooKeeper 集群中的其他角色服务器。而在接收到来自客户端的事务性会话请求后，ZooKeeper 集群内部又</p><p>是如何判断会话的请求类型，以及转发处理事务性请求的呢？带着这些问题我们继续本节课的学习。</p><h3 id="事务性请求处理" tabindex="-1">事务性请求处理 <a class="header-anchor" href="#事务性请求处理" aria-label="Permalink to &quot;事务性请求处理&quot;">​</a></h3><p>在 ZooKeeper 集群接收到来自客户端的会话请求操作后，首先会判断该条请求是否是事务性的会话请求。对于事务性的会话请求，ZooKeeper 集群服务端会将该请求统一转发给 Leader 服务器进行操作。通过前面我们讲过的，Leader 服务器内部执行该条事务性的会话请求后，再将数据同步给其他角色服务器，从而保证事务性会话请求的执行顺序，进而保证整个 ZooKeeper 集群的数据一致性。</p><p>在 ZooKeeper 集群的内部实现中，是通过什么方法保证所有 ZooKeeper 集群接收到的事务性会话请求都能交给 Leader 服务器进行处理的呢？下面我们就带着这个问题继续学习。</p><p>在 ZooKeeper 集群内部，集群中除 Leader 服务器外的其他角色服务器接收到来自客户端的事务性会话请求后，必须将该条会话请求转发给 Leader 服务器进行处理。 ZooKeeper 集群中的 Follow 和 Observer 服务器，都会检查当前接收到的会话请求是否是事务性的请求，如果是事务性的请求，那么就将该请求以 REQUEST 消息类型转发给 Leader 服务器。</p><p>在 ZooKeeper集群中的服务器接收到该条消息后，会对该条消息进行解析。分析出该条消息所包含的原始客户端会话请求。之后将该条消息提交到自己的 Leader 服务器请求处理链中，开始进行事务性的会话请求操作。如果不是事务性请求，ZooKeeper 集群则交由 Follow 和 Observer 角色服务器处理该条会话请求，如查询数据节点信息。</p><h3 id="leader-事务处理分析" tabindex="-1">Leader 事务处理分析 <a class="header-anchor" href="#leader-事务处理分析" aria-label="Permalink to &quot;Leader 事务处理分析&quot;">​</a></h3><p>上面我们介绍了 ZooKeeper 集群在处理事务性会话请求时的内部原理。接下来我们就以客户端发起的创建节点请求 setData 为例，具体看看 ZooKeeper 集群的底层处理过程。</p><p>在 ZooKeeper 集群接收到来自客户端的一个 setData 会话请求后，其内部的处理逻辑基本可以分成四个部分。如下图所示，分别是预处理阶段、事务处理阶段、事务执行阶段、响应客户端。</p>',11),y=s("h4",{id:"预处理阶段",tabindex:"-1"},[e("预处理阶段： "),s("a",{class:"header-anchor",href:"#预处理阶段","aria-label":'Permalink to "预处理阶段："'},"​")],-1),i=s("p",null,"在预处理阶段，主要工作是通过网络 I/O 接收来自客户端的会话请求。判断该条会话请求的类型是否是事务性的会话请求，之后将该请求提交给",-1),d=s("p",null,"PrepRequestProcessor 处理器进行处理。封装请求事务头并检查会话是否过期，最后反序列化事务请求信息创建 setDataRequest 请求，在 setDataRequest 记录中包含了要创建数据的节点的路径、数据节点的内容信息以及数据节点的版本信息。最后将该请求存放在 outstandingChanges 队列中等待之后的处理。",-1),u=s("h4",{id:"事务处理阶段",tabindex:"-1"},[e("事务处理阶段： "),s("a",{class:"header-anchor",href:"#事务处理阶段","aria-label":'Permalink to "事务处理阶段："'},"​")],-1),h=s("p",null,"在事务处理阶段，ZooKeeper 集群内部会将该条会话请求提交给 ProposalRequestProcessor 处理器进行处理。本阶段内部又分为提交、同步、统计三个步骤。其具体的处理过程我们在之前的课程中已经介绍过了，这里不再赘述。",-1),_=s("h4",{id:"事务执行阶段",tabindex:"-1"},[e("事务执行阶段： "),s("a",{class:"header-anchor",href:"#事务执行阶段","aria-label":'Permalink to "事务执行阶段："'},"​")],-1),q=s("p",null,"在经过预处理阶段和事务会话的投票发起等操作后，一个事务性的会话请求都已经准备好了，接下来就是在 ZooKeeper 的数据库中执行该条会话的数据变更操作。",-1),F=s("p",null,"在处理数据变更的过程中，ZooKeeper 内部会将该请求会话的事务头和事务体信息直接交给内存数据库 ZKDatabase 进行事务性的持久化操作。之后返回 ProcessTxnResult 对象表明操作结果是否成功。",-1),g=s("h4",{id:"响应客户端",tabindex:"-1"},[e("响应客户端： "),s("a",{class:"header-anchor",href:"#响应客户端","aria-label":'Permalink to "响应客户端："'},"​")],-1),D=s("p",null,"在 ZooKeeper 集群处理完客户端 setData 方法发送的数据节点创建请求后，会将处理结果发送给客户端。而在响应客户端的过程中，ZooKeeper 内部首先会创建一个 setDataResponse 响应体类型，该对象主要包括当前会话请求所创建的数据节点，以及其最新状态字段信息 stat。之后创建请求响应头信息，响应头作为客户端请求响应的重要信息，客户端在接收到 ZooKeeper 集群的响应后，通过解析响应头信息中的事务 ZXID 和请求结果标识符 err 来判断该条会话请求是否成功执行。",-1),R=o(`<h3 id="事务处理底层实现" tabindex="-1">事务处理底层实现 <a class="header-anchor" href="#事务处理底层实现" aria-label="Permalink to &quot;事务处理底层实现&quot;">​</a></h3><p>介绍完 ZooKeeper 集群处理事务性会话请求的理论方法和内部过程后。接下来我们从代码层面来进一步分析 ZooKeeper 在处理事务性请求时的底层核心代码实现。</p><p>首先，ZooKeeper 集群在收到客户端发送的事务性会话请求后，会对该请求进行预处理。在代码层面，ZooKeeper 通过调用 PrepRequestProcessor 类来实现预处理阶段的全部逻辑。可以这样理解：<strong>在处理客户端会话请求的时候，首先调用的就是 PrepRequestProcessor 类</strong>。而在 PrepRequestProcessor 内部，是通过 pRequest 方法判断客户端发送的会话请求类型。如果是诸如 setData 数据节点创建等事务性的会话请求，就调用 pRequest2Txn 方法进一步处理。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pRequest</span><span style="color:#E1E4E8;">(Request request){</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (request.type) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> OpCode.setData</span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    SetDataRequest setDataRequest </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SetDataRequest</span><span style="color:#E1E4E8;">();                </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pRequest2Txn</span><span style="color:#E1E4E8;">(request.type, zks.</span><span style="color:#B392F0;">getNextZxid</span><span style="color:#E1E4E8;">(), request, setDataRequest, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pRequest</span><span style="color:#24292E;">(Request request){</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (request.type) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> OpCode.setData</span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">    SetDataRequest setDataRequest </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SetDataRequest</span><span style="color:#24292E;">();                </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pRequest2Txn</span><span style="color:#24292E;">(request.type, zks.</span><span style="color:#6F42C1;">getNextZxid</span><span style="color:#24292E;">(), request, setDataRequest, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>而在 pRequest2Txn 方法的内部，就实现了预处理阶段的主要逻辑。如下面的代码所示，首先通过 checkSession 方法检查该条会话请求是否有效（比如会话是否过期等），之后调用 checkACL 检查发起会话操作的客户端在 ZooKeeper 服务端是否具有相关操作的权限。最后将该条会话创建的相关信息，诸如 path 节点路径、data 节点数据信息、version 节点版本信息等字段封装成</p><p>setDataRequest 类型并传入到 setTxn 方法中，最后加入处理链中进行处理。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> OpCode.setData</span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    zks.sessionTracker.</span><span style="color:#B392F0;">checkSession</span><span style="color:#E1E4E8;">(request.sessionId, request.</span><span style="color:#B392F0;">getOwner</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    SetDataRequest setDataRequest </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (SetDataRequest)record;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(deserialize)</span></span>
<span class="line"><span style="color:#E1E4E8;">        ByteBufferInputStream.</span><span style="color:#B392F0;">byteBuffer2Record</span><span style="color:#E1E4E8;">(request.request, setDataRequest);</span></span>
<span class="line"><span style="color:#E1E4E8;">    path </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> setDataRequest.</span><span style="color:#B392F0;">getPath</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">validatePath</span><span style="color:#E1E4E8;">(path, request.sessionId);</span></span>
<span class="line"><span style="color:#E1E4E8;">    nodeRecord </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getRecordForPath</span><span style="color:#E1E4E8;">(path);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">checkACL</span><span style="color:#E1E4E8;">(zks, request.cnxn, nodeRecord.acl, ZooDefs.Perms.WRITE, request.authInfo, path, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> newVersion </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">checkAndIncVersion</span><span style="color:#E1E4E8;">(nodeRecord.stat.</span><span style="color:#B392F0;">getVersion</span><span style="color:#E1E4E8;">(), setDataRequest.</span><span style="color:#B392F0;">getVersion</span><span style="color:#E1E4E8;">(), path);</span></span>
<span class="line"><span style="color:#E1E4E8;">    request.</span><span style="color:#B392F0;">setTxn</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SetDataTxn</span><span style="color:#E1E4E8;">(path, setDataRequest.</span><span style="color:#B392F0;">getData</span><span style="color:#E1E4E8;">(), newVersion));</span></span>
<span class="line"><span style="color:#E1E4E8;">    nodeRecord </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nodeRecord.</span><span style="color:#B392F0;">duplicate</span><span style="color:#E1E4E8;">(request.</span><span style="color:#B392F0;">getHdr</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getZxid</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    nodeRecord.stat.</span><span style="color:#B392F0;">setVersion</span><span style="color:#E1E4E8;">(newVersion);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">addChangeRecord</span><span style="color:#E1E4E8;">(nodeRecord);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">case</span><span style="color:#24292E;"> OpCode.setData</span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">    zks.sessionTracker.</span><span style="color:#6F42C1;">checkSession</span><span style="color:#24292E;">(request.sessionId, request.</span><span style="color:#6F42C1;">getOwner</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">    SetDataRequest setDataRequest </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (SetDataRequest)record;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(deserialize)</span></span>
<span class="line"><span style="color:#24292E;">        ByteBufferInputStream.</span><span style="color:#6F42C1;">byteBuffer2Record</span><span style="color:#24292E;">(request.request, setDataRequest);</span></span>
<span class="line"><span style="color:#24292E;">    path </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> setDataRequest.</span><span style="color:#6F42C1;">getPath</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">validatePath</span><span style="color:#24292E;">(path, request.sessionId);</span></span>
<span class="line"><span style="color:#24292E;">    nodeRecord </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getRecordForPath</span><span style="color:#24292E;">(path);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">checkACL</span><span style="color:#24292E;">(zks, request.cnxn, nodeRecord.acl, ZooDefs.Perms.WRITE, request.authInfo, path, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> newVersion </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">checkAndIncVersion</span><span style="color:#24292E;">(nodeRecord.stat.</span><span style="color:#6F42C1;">getVersion</span><span style="color:#24292E;">(), setDataRequest.</span><span style="color:#6F42C1;">getVersion</span><span style="color:#24292E;">(), path);</span></span>
<span class="line"><span style="color:#24292E;">    request.</span><span style="color:#6F42C1;">setTxn</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SetDataTxn</span><span style="color:#24292E;">(path, setDataRequest.</span><span style="color:#6F42C1;">getData</span><span style="color:#24292E;">(), newVersion));</span></span>
<span class="line"><span style="color:#24292E;">    nodeRecord </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nodeRecord.</span><span style="color:#6F42C1;">duplicate</span><span style="color:#24292E;">(request.</span><span style="color:#6F42C1;">getHdr</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getZxid</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">    nodeRecord.stat.</span><span style="color:#6F42C1;">setVersion</span><span style="color:#24292E;">(newVersion);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">addChangeRecord</span><span style="color:#24292E;">(nodeRecord);</span></span></code></pre></div><h3 id="结束" tabindex="-1">结束 <a class="header-anchor" href="#结束" aria-label="Permalink to &quot;结束&quot;">​</a></h3><p>在本课时中，我们主要学习了 ZooKeeper 集群中 Leader 服务器是如何处理事务性的会话请求的，并且在处理完事务性的会话请求后，是如何通知其他角色服务器进行同步操作的。</p><p>可以说在 ZooKeeper 集群处理事务性的请过程中，Follow 和 Observer 服务器主要负责接收客户端的会话请求，并转发给 Leader 服务器。而真正处理该条会话请求的是 Leader 服务器。</p><p>这就会引发一个问题：当一个业务场景在查询操作多而创建删除等事务性操作少的情况下，ZooKeeper 集群的性能表现的就会很好。而如果是在极端情况下，ZooKeeper 集群只有事务性的会话请求而没有查询操作，那么 Follow 和 Observer 服务器就只能充当一个请求转发服务器的角色， 所有的会话的处理压力都在 Leader 服务器。在处理性能上整个集群服务器的瓶颈取决于 Leader 服务器的性能。ZooKeeper 集群的作用只能保证在 Leader 节点崩溃的时候，重新选举出 Leader 服务器保证系统的稳定性。这也是 ZooKeeper 设计的一个缺点。</p>`,11);function C(A,Z,k,m,K,b){const a=l("Image");return t(),r("div",null,[E,n(a,{alt:"image.png",src:"https://s0.lgstatic.com/i/image/M00/2A/68/CgqCHl78TTKAVHIcAABFlvJZKxw198.png"}),e(),y,i,d,n(a,{alt:"1.png",src:"https://s0.lgstatic.com/i/image/M00/2A/68/CgqCHl78TUKAfJjuAAB5F0dP0Yk087.png"}),e(),u,h,n(a,{alt:"2.png",src:"https://s0.lgstatic.com/i/image/M00/2A/68/CgqCHl78TVGAK4VLAACDtg8BUbg363.png"}),e(),_,q,F,n(a,{alt:"3.png",src:"https://s0.lgstatic.com/i/image/M00/2A/68/CgqCHl78TWOAcPwoAABCnE5qDAc777.png"}),e(),g,D,n(a,{alt:"4.png",src:"https://s0.lgstatic.com/i/image/M00/2A/68/CgqCHl78TXCAM65nAAB2mZDf_jw385.png"}),e(),R])}const T=p(c,[["render",C]]);export{P as __pageData,T as default};
