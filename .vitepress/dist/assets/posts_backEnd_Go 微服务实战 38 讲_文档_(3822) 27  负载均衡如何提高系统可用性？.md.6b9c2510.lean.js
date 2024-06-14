import{_ as o,D as e,o as t,g as c,J as l,h as n,m as s,Q as p}from"./chunks/framework.f67d7268.js";const f=JSON.parse('{"title":"27负载均衡如何提高系统可用性？","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/Go 微服务实战 38 讲_文档/(3822) 27  负载均衡如何提高系统可用性？.md","filePath":"posts/backEnd/Go 微服务实战 38 讲_文档/(3822) 27  负载均衡如何提高系统可用性？.md","lastUpdated":1696682708000}'),r={name:"posts/backEnd/Go 微服务实战 38 讲_文档/(3822) 27  负载均衡如何提高系统可用性？.md"},E=s("h1",{id:"_27负载均衡如何提高系统可用性",tabindex:"-1"},[n("27负载均衡如何提高系统可用性？ "),s("a",{class:"header-anchor",href:"#_27负载均衡如何提高系统可用性","aria-label":'Permalink to "27负载均衡如何提高系统可用性？"'},"​")],-1),i=s("p",null,"负载均衡能够将大量的请求，根据负载均衡算法，分发到多台服务器上进行处理，使得所有服务器负载都维持在高效稳定的状态，以提高系统的吞吐量。此外，多个服务实例组成的服务集群，消除了单点问题，当某一个服务实例宕机时，负载均衡就不会将请求分发给它，而是转发给其他正常的服务实例，以此提高整个系统的可用性。",-1),y=s("p",null,"下面，我们就来具体了解一下负载均衡相关的概念和几种常见负载均衡算法的实现。",-1),_=s("h3",{id:"负载均衡概念",tabindex:"-1"},[n("负载均衡概念 "),s("a",{class:"header-anchor",href:"#负载均衡概念","aria-label":'Permalink to "负载均衡概念"'},"​")],-1),g=s("p",null,"一般来说，互联网应用在其发展初期，往往采用单实例部署，用户通过网络请求某个固定IP地址的服务实例，这在用户量不大时是可行的。随着用户量的提升，单机单实例的服务已经无法应对用户的请求，并且单机单实例存在单点错误问题，一旦该实例出现问题，就会导致系统不可用，影响应用可用性。",-1),h=s("p",null,"所以，如下图所示，服务会进行多实例部署，由负载均衡集群将用户请求分发给不同的服务实例，既提高了系统整体的吞吐量，也避免了因为单一服务实例宕机导致整个系统不可用的情况。",-1),d=p("",8),u=p("",5),F=p("",16),A=p("",6);function C(v,D,m,b,S,B){const a=e("Image");return t(),c("div",null,[E,i,y,_,g,h,l(a,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/58/E0/Ciqc1F9wVFyAJJttAAD0rEz8Whs604.png"}),n(),d,l(a,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/58/E0/Ciqc1F9wVHqAbgVGAADqjKkTPpk445.png"}),n(),u,l(a,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/58/EB/CgqCHl9wVJOAId0fAACD0X9m3Ho281.png"}),n(),F,l(a,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/58/E0/Ciqc1F9wVNqAKzxwAACld-lZDOI988.png"}),n(),A])}const I=o(r,[["render",C]]);export{f as __pageData,I as default};
