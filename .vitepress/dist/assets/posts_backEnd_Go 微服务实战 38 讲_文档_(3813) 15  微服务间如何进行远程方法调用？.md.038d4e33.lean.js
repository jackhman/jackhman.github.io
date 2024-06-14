import{_ as o,D as e,o as t,g as r,J as p,h as a,Q as l,m as s}from"./chunks/framework.f67d7268.js";const f=JSON.parse('{"title":"15微服务间如何进行远程方法调用？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Go 微服务实战 38 讲_文档/(3813) 15  微服务间如何进行远程方法调用？.md","filePath":"posts/backEnd/Go 微服务实战 38 讲_文档/(3813) 15  微服务间如何进行远程方法调用？.md","lastUpdated":1696682708000}'),c={name:"posts/backEnd/Go 微服务实战 38 讲_文档/(3813) 15  微服务间如何进行远程方法调用？.md"},E=l("",13),y=s("p",null,"RPC 示意图",-1),C=s("p",null,"当客户端发送请求的网络消息到达服务器时，服务器上的网络服务将其传递给服务器存根（server-stub）。服务器存根与客户端存根一一对应，是远程方法在服务端的体现，用来将网络请求传递来的数据转换为本地过程调用。服务器存根一般处于阻塞状态，等待消息输入。",-1),i=s("p",null,"当服务器存根收到网络消息后，服务器将方法参数从网络消息中提取出来，然后以常规方式调用服务器上对应的实现过程。从实现过程角度看，就好像是由客户端直接调用一样，参数和返回地址都位于调用堆栈中，一切都很正常。实现过程执行完相应的操作，随后用得到的结果设置到堆栈中的返回值，并根据返回地址执行方法结束操作。以 read 为例，实现过程读取本地文件数据后，将其填充到 read 函数返回值所指向的缓冲区。",-1),_=s("p",null,"read 过程调用完后，实现过程将控制权转移给服务器存根，它将结果（缓冲区的数据）打包为网络消息，最后通过网络响应将结果返回给客户端。网络响应发送结束后，服务器存根会再次进入阻塞状态，等待下一个输入的请求。",-1),P=s("p",null,"客户端接收到网络消息后，客户操作系统会将该消息转发给对应的客户端存根，随后解除对客户进程的阻塞。客户端存根从阻塞状态恢复过来，将接收到的网络消息转换为调用结果，并将结果复制到客户端调用堆栈的返回结果中。当调用者在远程方法调用 read 执行完毕后重新获得控制权时，它唯一知道的是 read 返回值已经包含了所需的数据，但并不知道该 read 操作到底是在本地操作系统读取的文件数据，还是通过远程过程调用远端服务读取文件数据。",-1),d=s("h3",{id:"rpc-框架的组成",tabindex:"-1"},[a("RPC 框架的组成 "),s("a",{class:"header-anchor",href:"#rpc-框架的组成","aria-label":'Permalink to "RPC 框架的组成"'},"​")],-1),T=s("p",null,"一个完整的 RPC 框架包含了服务注册发现、负载、容错、序列化、协议编码和网络传输等组件。不同的 RPC 框架包含的组件可能会有所不同，但是一定都包含 RPC 协议相关的组件，RPC 协议包括序列化、协议编解码器和网络传输栈，如下图所示：",-1),h=l("",10),g=l("",9),F=l("",8);function R(A,u,m,b,B,H){const n=e("Image");return t(),r("div",null,[E,p(n,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/43/EE/Ciqc1F887amAAUAAAABlfyr8G5Q880.png"}),a(),y,C,i,_,P,d,T,p(n,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/43/EE/Ciqc1F887bWAQUMOAACCOORZi64063.png"}),a(),h,p(n,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/43/F9/CgqCHl887caASe2qAABl7rQTtnA599.png"}),a(),g,p(n,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/43/EE/Ciqc1F887d6AYkrdAACqqdChrI0328.png"}),a(),F])}const S=o(c,[["render",R]]);export{f as __pageData,S as default};
