import{_ as s,F as _,g as r,K as l,h as n,ar as o,l as t,o as i}from"./chunks/framework.VlluEs-f.js";const pt=JSON.parse('{"title":"第17课：磁盘数据恢复：rm-rf误删数据，如何进行数据恢复","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/111-运维高手的36项修炼文档/(1562) 第17课：磁盘数据恢复：rm -rf 误删数据，如何进行数据恢复.md","filePath":"posts/devops/111-运维高手的36项修炼文档/(1562) 第17课：磁盘数据恢复：rm -rf 误删数据，如何进行数据恢复.md","lastUpdated":1718371218000}'),c={name:"posts/devops/111-运维高手的36项修炼文档/(1562) 第17课：磁盘数据恢复：rm -rf 误删数据，如何进行数据恢复.md"},d=o("",24),a=t("br",null,null,-1),u=t("p",null,"这里我使用 tail 命令，持续地查看并且保持监听并使用这个文件。",-1),p=t("br",null,null,-1),h=t("p",null,'接下来在另一个窗口，我同样到/test 目录下，而此时我要执行的是 rm -rf ./deletefile.txt，这样就"彻底"把这个文件删除。接下来我们通过 ls，可以看到本地已经没有这个文件了。',-1),b=t("br",null,null,-1),m=t("br",null,null,-1),f=t("br",null,null,-1),g=t("p",null,"现在我们已经模拟出文件在进程使用过程中被删除的场景，那么接下来我们来演示恢复该文件。",-1),x=t("br",null,null,-1),A=t("p",null,"首先需要找到是哪个进程在使用这个文件，我们可以通过 lsof 命令，grep 刚刚删除的文件名称（deltefile.txt），会列出当前使用文件的进程。我们会看到tail 命令正在使用，它（进程）的 pid 是 4701。",-1),k=t("br",null,null,-1),q=t("br",null,null,-1),v=t("p",null,"接下来我们要根据这条线索去恢复数据。我们知道该进程会有使用的文件句柄，那么我们对该进程的文件句柄目录进行查找，cd 到 /proc/{pid}/fd 目录下（这里 pid 为4701），我们到这个目录下，输入 ls -l 命令，这个时候我们会看到，使用这个文件（/test/deletefile.txt）并且它的文件句柄为 3。",-1),V=t("br",null,null,-1),C=t("br",null,null,-1),F=t("p",null,"接下来我们要想办法把这个文件进行恢复，输入cp 3 /opt/recovertest/deletefile.txt_bak，这时我就把这 3 个文件做了一个拷贝，实现将数据恢复到 /opt/recovertest/deletefile.txt_bak 文件。",-1),S=t("br",null,null,-1),T=t("p",null,"这个时候cd /opt/recovertest/，cat deletefile.txt_bak 看一下里面的内容，可以发现这个文件的内容与刚刚生成的的测试文件内容一致，所以刚刚删除的文件恢复完毕。",-1),E=t("br",null,null,-1),M=t("br",null,null,-1),P=t("br",null,null,-1),D=t("br",null,null,-1),I=t("br",null,null,-1),L=t("p",null,"接下来我来演示误删数据场景2（在没有进程使用文件的情况下，如何恢复误删的文件）。演示这种场景，保险起见我在本地多挂载了一块 SDB 的独立硬盘设备。",-1),N=t("br",null,null,-1),O=t("p",null,`这种情况要如何恢复数据呢？我们需要安装 extundelete 这个工具。登录到我的测试机上，在这个演示场景里，挂载一块独立硬盘设备 /dev/sdb 并作数据格式化。完成格式化后。把单独的 sdb 设备，挂载到 test 目录下（mount /dev/sdb /test），接下来在 test 目录下生成一个内容为"deletetest "的测试文件file(echo 'deletetest'>file),这个时候本地目录会生成一个测试的文件：file，再新建一个叫 testdir 的目录（mkdir /test/testdir），那么这时本地既有文件又有目录，也就是我接下来要演示删除的这些文件。`,-1),R=t("br",null,null,-1),w=t("br",null,null,-1),z=t("p",null,"我们可以通过 rm -rf ./*，直接把当前目录下的文件整体删除。然后我需要恢复这个文件，原理就是：通过分析它的 block 块，来恢复 inode 链接，要分析并恢复已删除文件的链接，我们要用到一些工具，这里推荐你使用一个叫 extundelete 的命令，它是在 Linux 下基于 ext3\\ext4 的文件分析工具，可以对文件系统已删除的文件进行分析，并进行数据恢复。",-1),B=t("br",null,null,-1),j=o("",14),y=t("br",null,null,-1),K=t("br",null,null,-1),H=t("p",null,"我们也可以选择恢复单独文件类型文件，执行：extundelete /dev/sdb --restore-file file",-1),U=t("br",null,null,-1),$=t("p",null,"加入的选项是 --restore-file，后面加你想恢复的文件名称。",-1),G=t("br",null,null,-1),Z=t("p",null,"在执行以上恢复操作之前，我先要确保数据恢复的目录 /opt/recovertest 下，cd /opt/recovertest 目录下，执行想恢复的文件 extundelete /dev/sdb --restore-file file。",-1),J=t("br",null,null,-1),Q=t("br",null,null,-1),W=t("p",null,"执行完命令后，会有一个成功的提示。此时在当前目录的 RECOVERED_FILES 目录，有对应恢复好的文件，一个是 file，一个是 file.v1（这个为刚恢复的文件），为什么是 file.v1 呢？因为我在做操作的时候有操作过两遍，所以它恢复了两个文件。第 1 个 file 是我之前写入的内容，第 2 个 file 则是由于我执行了第 2 次恢复，恢复的文件虽然也是 file，所以会自动命名成一个新的版本，叫作 file.v1（这个文件就是我们想要恢复的文件名称）。",-1),X=t("br",null,null,-1),Y=t("br",null,null,-1),tt=t("p",null,'刚刚讲到的选项是恢复单个文件，假设我们要恢复所有文件的话，就把选项改为 --restore-all，这样就把分析出来的已删除文件进行了恢复。如果件，只想恢复某一个目录，就可以把 "all" 改成 directory，然后用 restore-directory 这种方式恢复单个已删除的文件目录。',-1),et=t("br",null,null,-1),lt=t("p",null,"以上就是通过 extundelete 作场景 2 恢复演示。",-1),nt=t("br",null,null,-1),ot=t("p",null,"平时工作中，你还是需要谨慎进行操作系统指令，以避免产生文件系统误删的情况，毕竟恢复起来对我们的业务影响，还有数据风险都是存在的。",-1);function st(_t,rt,it,ct,dt,at){const e=_("Image");return i(),r("div",null,[d,l(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/88/70/Cgq2xl6VdFKAISawAAFE37oeL_w498.png"}),n(),a,u,p,h,b,l(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/88/70/Cgq2xl6VdIqAWXFLAADmb9zygRM543.png"}),n(),m,f,g,x,A,k,l(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0F/5A/Ciqah16VdFKAC0qqAADFpBm8jCA754.png"}),n(),q,v,V,l(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/88/70/Cgq2xl6VdFKAHdwFAAEiLPkGCz8212.png"}),n(),C,F,S,T,E,M,l(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0F/5A/Ciqah16VdL6ATGvHAAEkok5hmU0511.png"}),n(),P,D,I,L,N,O,R,l(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0F/5A/Ciqah16VdFOAZFR6AAGnNj1Lipk925.png"}),n(),w,z,B,l(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/88/70/Cgq2xl6VdFOAPrHcAAEVDgSoHww503.png"}),n(),j,l(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0F/5A/Ciqah16VdOeAOn_dAAB14_xLtZU663.png"}),n(),y,K,H,U,$,G,Z,J,l(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/0F/5A/Ciqah16VdFOACsNKAAF1sVuVggU217.png"}),n(),Q,W,X,l(e,{alt:"",src:"https://s0.lgstatic.com/i/image3/M01/88/70/Cgq2xl6VdFOASIv2AAEQM7CcbS4528.png"}),n(),Y,tt,et,lt,nt,ot])}const ht=s(c,[["render",st]]);export{pt as __pageData,ht as default};
