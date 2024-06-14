import{_ as a,D as s,o as p,g as h,J as i,h as e,Q as o,m as l}from"./chunks/framework.f67d7268.js";const G=JSON.parse('{"title":"第05讲：Shell编程核心技术（上）","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/110-测试开发核心技术文档/(322) 第05讲：Shell 编程核心技术（上）.md","filePath":"posts/devops/110-测试开发核心技术文档/(322) 第05讲：Shell 编程核心技术（上）.md","lastUpdated":1696682708000}'),c={name:"posts/devops/110-测试开发核心技术文档/(322) 第05讲：Shell 编程核心技术（上）.md"},n=o("",7),_=l("p",null,"举个例子，我们定义一个 x=1 的变量，然后输入 echo $x 指令，其中 $x 表示可以引用这个变量。",-1),r=l("p",null,"又比如输入 hello 字符串赋值给变量 x，然后再打印 echo $x。",-1),A=l("p",null,"如果输入 x=hello world 呢，这时系统运行会报错，因为 x=hello 会被认为是一个变量赋值，而 world 会被认为是另外一个独立的命令。",-1),d=l("p",null,"那我们应该怎么做呢？和 Python 一样，我们只需要对字符串加上单引号或双引号。然后再打印这个变量 echo $x 就可以了。",-1),g=o("",7),f=l("p",null,"其中，我们需要特别注意 PATH 变量，比如输入 echo $PATH 指令，你可以看到 PATH 变量定义了所有可执行程序，定义在 PATH 中的程序可以直接调用程序名执行而不必再输入程序的全部路径。",-1),m=o("",4),u=l("p",null,"其中，需要重点介绍整数扩展，你可以把数学表达式放到双括号中进行相应的计算，比如输入 echo $((10000/3))，它的计算结果是 3333，这里为什么没有小数位呢？是因为 Shell 中目前仅处理整数，如果你需要精确到小数位可以使用 awk 指令。Shell的整数计算不使用 $ 也是可以的，但如果你想引用具体的结果值，就需要使用 $。",-1),S=l("p",null,"比如输入 x=$(echo xxxx) 指令将字符串 xxxx 存入 x 变量中，这时输入 echo $x 指令，你会看到 $() 会把括号内的命令执行然后把输出结果作为值传递给变量。",-1),P=l("p",null,"还有一个需要注意的是序列，比如我们想从 1~10 获取一个序列，可以输入 echo {1..10} 指令来打印 1~10 的数字。",-1),x=l("p",null,"还可以使用 seq 1 10，它们是等价的。",-1),T=l("h3",{id:"变量类型",tabindex:"-1"},[e("变量类型 "),l("a",{class:"header-anchor",href:"#变量类型","aria-label":'Permalink to "变量类型"'},"​")],-1),C=l("p",null,"然后是变量类型，在 Shell 中是不区分变量类型的，这一点和 Python 很像，所有的变量都是基础类型，只在运行时做动态解析。其中字符串、数字、布尔是比较常用的。",-1),E=l("p",null,"首先是字符串，字符串常用于一些类似掐头、去尾、替换的操作，课后你可以自己去练习，这里不再具体演示。",-1),b=l("p",null,"然后是布尔类型，布尔的基本表示表现形式是 true 和 false，需要注意的是在 Shell 中有一个特殊的用法，如果是某个命令返回的是 0，则表示这个进程是正常工作的。",-1),q=l("p",null,"比如输入 ls /tmp/hello.txt ;echo $? 指令，你可以看到返回值是 0，表示该进程运行正确，如果返回其他值就表示进程运行错误。",-1),$=o("",16),k=l("p",null,"比如输入 for i in $(seq 1 3 10) 指令，然后在 do 语句块中打印 echo $i 的值，do 语句块以 done 结束。",-1),M=l("p",null,"你可以看到打印了 1、4、7、10，这个就是 for 循环的遍历用法。",-1),V=l("h3",{id:"while-循环",tabindex:"-1"},[e("while 循环 "),l("a",{class:"header-anchor",href:"#while-循环","aria-label":'Permalink to "while 循环"'},"​")],-1),O=l("p",null,"最后是 while 循环，和 for 循环很像，while 首先判断条件，条件成立则在 do 语句块中执行操作。",-1),I=l("p",null,"举个例子，定义 i=0，然后输入 while ((i<3));do((i=i+1));sleep 1;echo $i;done 指令。",-1),w=l("p",null,"你可以看到，输出结果每隔 1 秒打印一个 i 的值，而 i 的值逐渐增加，直到等于 3 时不再满足条件，退出循环。",-1),N=l("p",null,"而 while 还有一个很常用的功能，就是通过 while read line 循环读取文件的每一行。",-1),B=l("p",null,"比如输入 while read line；do echo $line;done< /tmp/hello.txt 指令，它就会打印出文件的每一行信息。",-1),H=o("",5);function D(R,y,v,J,U,W){const t=s("Image");return p(),h("div",null,[n,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/59/CgotOV3fosGAOY1tAANwPox6f7I970.png"}),e(),_,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/39/CgoB5l3fosKAcC0AAANOqJ5Rmsk957.png"}),e(),r,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/59/CgotOV3fosKAVC89AAOEgykUuPg498.png"}),e(),A,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/39/CgoB5l3fosKAdqgFAAOGtJpRb8Q155.png"}),e(),d,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/59/CgotOV3fosKAcDsaAAN5G0JEAsA725.png"}),e(),g,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/39/CgoB5l3fosOAVQSoAAUa3CT95gI876.png"}),e(),f,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/59/CgotOV3fosSATo1pAASkBuOkl-M111.png"}),e(),m,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/39/CgoB5l3fosSAeiWNAAN3mkLaCuI573.png"}),e(),u,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/59/CgotOV3fosWAUtBiAAMX01YRWG0720.png"}),e(),S,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/39/CgoB5l3fosWAKUt6AAMqCZTcpAk900.png"}),e(),P,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/59/CgotOV3fosWAUSepAAJPWmR_Pm8293.png"}),e(),x,T,C,E,b,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/39/CgoB5l3fosWADT10AAIM0bYzP1o997.png"}),e(),q,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/59/CgotOV3fosaAaPu1AAJ8n7xBAno779.png"}),e(),$,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/39/CgoB5l3fosaAOw4CAAHflNfAfkU288.png"}),e(),k,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/59/CgotOV3fosaALQ6mAAHflNfAfkU836.png"}),e(),M,V,O,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/39/CgoB5l3foseAOrrnAAHk4lHDC9s130.png"}),e(),I,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/59/CgotOV3foseAE0eoAAHk4lHDC9s600.png"}),e(),w,N,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/39/CgoB5l3foseADrLRAAIeM1hcmns056.png"}),e(),B,i(t,{alt:"",src:"https://s0.lgstatic.com/i/image2/M01/AE/59/CgotOV3fosiAdS1TAAIysEIC3Y0290.png"}),e(),H])}const Q=a(c,[["render",D]]);export{G as __pageData,Q as default};
