import{_ as n,D as l,o as p,g as t,J as a,h as e,Q as c,m as o}from"./chunks/framework.f67d7268.js";const S=JSON.parse('{"title":"11高级技巧之日志分析：利用Linux指令分析Web日志","description":"","frontmatter":{},"headers":[],"relativePath":"posts/backEnd/重学操作系统_文档/(4617) 11  高级技巧之日志分析：利用 Linux 指令分析 Web 日志.md","filePath":"posts/backEnd/重学操作系统_文档/(4617) 11  高级技巧之日志分析：利用 Linux 指令分析 Web 日志.md","lastUpdated":1696682708000}'),d={name:"posts/backEnd/重学操作系统_文档/(4617) 11  高级技巧之日志分析：利用 Linux 指令分析 Web 日志.md"},i=c("",6),r=c("",3),_=c("",3),h=c("",4),u=c("",5),g=o("p",null,[e("我们想要按天统计，可以利用 "),o("code",null,"awk"),e("提供的字符串截取的能力。")],-1),E=o("p",null,[e("上图中，我们使用"),o("code",null,"awk"),e("的"),o("code",null,"substr"),e("函数，数字"),o("code",null,"2"),e("代表从第 2 个字符开始，数字"),o("code",null,"11"),e("代表截取 11 个字符。")],-1),C=o("p",null,"接下来我们就可以分组统计每天的日志条数了。",-1),b=o("p",null,[e("上图中，使用"),o("code",null,"sort"),e("进行排序，然后使用"),o("code",null,"uniq -c"),e("进行统计。你可以看到从 2015 年 5 月 17 号一直到 6 月 4 号的日志，还可以看到每天的 PV 量大概是在 2000~3000 之间。")],-1),m=o("h3",{id:"第五步-分析-uv",tabindex:"-1"},[e("第五步：分析 UV "),o("a",{class:"header-anchor",href:"#第五步-分析-uv","aria-label":'Permalink to "第五步：分析 UV"'},"​")],-1),A=o("p",null,"接下来我们分析 UV。UV（Uniq Visitor），也就是统计访问人数。通常确定用户的身份是一个复杂的事情，但是我们可以用 IP 访问来近似统计 UV。",-1),y=c("",9),k=c("",8);function P(T,V,q,w,v,x){const s=l("Image");return p(),t("div",null,[i,a(s,{alt:"Drawing 0.png",src:"https://s0.lgstatic.com/i/image/M00/5C/7F/CgqCHl-BkJ6AcP32AAduMy8fcSw412.png"}),e(),r,a(s,{alt:"Drawing 1.png",src:"https://s0.lgstatic.com/i/image/M00/5C/74/Ciqc1F-BkKeAQDs9AACqJbZ2jCM025.png"}),e(),_,a(s,{alt:"Drawing 2.png",src:"https://s0.lgstatic.com/i/image/M00/5C/7F/CgqCHl-BkK6AcDGvAAjaPXe-Nbc605.png"}),e(),h,a(s,{alt:"Drawing 3.png",src:"https://s0.lgstatic.com/i/image/M00/5C/74/Ciqc1F-BkL6AGiY-AABQPMnGu40979.png"}),e(),u,a(s,{alt:"Drawing 4.png",src:"https://s0.lgstatic.com/i/image/M00/5C/7F/CgqCHl-BkMaAb421AAGUr-N08hM187.png"}),e(),g,a(s,{alt:"Drawing 5.png",src:"https://s0.lgstatic.com/i/image/M00/5C/7F/CgqCHl-BkMuAKo9UAAIcPR902XQ858.png"}),e(),E,C,a(s,{alt:"Drawing 6.png",src:"https://s0.lgstatic.com/i/image/M00/5C/7F/CgqCHl-BkNGAB-VgAASNmct9nQA628.png"}),e(),b,m,A,a(s,{alt:"Drawing 7.png",src:"https://s0.lgstatic.com/i/image/M00/5C/74/Ciqc1F-BkNeAam2YAACxCjlKsvc488.png"}),e(),y,a(s,{alt:"Drawing 8.png",src:"https://s0.lgstatic.com/i/image/M00/5C/7F/CgqCHl-BkOKAfpNwAAOFk0EhDjU183.png"}),e(),k])}const F=n(d,[["render",P]]);export{S as __pageData,F as default};
