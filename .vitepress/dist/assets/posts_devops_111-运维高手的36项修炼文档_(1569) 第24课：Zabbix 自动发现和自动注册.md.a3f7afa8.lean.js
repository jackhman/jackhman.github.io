import{_ as o,D as i,o as l,g as p,J as t,h as e,Q as n,m as a}from"./chunks/framework.f67d7268.js";const F=JSON.parse('{"title":"第24课：Zabbix自动发现和自动注册","description":"","frontmatter":{},"headers":[],"relativePath":"posts/devops/111-运维高手的36项修炼文档/(1569) 第24课：Zabbix 自动发现和自动注册.md","filePath":"posts/devops/111-运维高手的36项修炼文档/(1569) 第24课：Zabbix 自动发现和自动注册.md","lastUpdated":1696682708000}'),c={name:"posts/devops/111-运维高手的36项修炼文档/(1569) 第24课：Zabbix 自动发现和自动注册.md"},r=n("",15),b=a("p",null,"我们来看一下，这里有几个框，一个是配置规则的名称（Name），由于我们没有用到代理模式，所以 Discovery by proxy 是 no proxy，下面定义的 IP range 就是规定的扫描主机段范围，如果 Zabbix_server 在多个主机段，我只想扫描一个子网段或者是某一个主机段中的主机，就需要定义好它针对的主机段信息，可以按照这样的格式去填入。",-1),_=a("p",null,'下面的 Update interval 就是扫描的周期，也就是上次扫描完成以后间隔多久再次扫描。下面的 Checks，zabbix agent "system.uname"表示检查主机的原数据，可以调用 Zabbix_agent 的 system.uname 函数来获取客户端主机的元数据。再往下的 Device uniqueness 就是定义设备的唯一性要求，这个单选框选到了 IP address 这里，代表以 IP 作为唯一的标识来做一台主机。如果我们选择 Zabbix_agent 的 system.uname，就是以主机的元数据来标识这是一台唯一性的主机。',-1),g=a("p",null,"我们在刚刚的选项框里面能看到需要填入的具体信息选项的说明，你可以具体来看一下：",-1),x=a("p",null,"在配置好相应的录入规则以后，接下来我们需要做的就是配置它的执行动作，我们同样在 Zabbix 控制台，点击 Configuration 按钮，然后点击 Actions，在下面我们来新建一个 Discovery 类型的 action。",-1),d=a("p",null,"接下来就会进入这个动作的具体配置界面。",-1),y=a("p",null,'Action 标签栏内最上面是 action 的名称（Name），我们可以自定义来书写。中间（Type of calculation）是配置它的条件等等,好了我们先看到这里，如果选择右边的标签" Operations"，就是来定义具体执行动作。',-1),u=a("p",null,"回到 Actions 这一栏，继续详细讲解，这里添加的动作需要设置条件（供包含 3 大块），我们先来看下面的 New condition（就是添加新的条件），我们可以下拉对应的选项框，选择好对应的条件，比如这里规定了主机 IP 的范围。如果列好了这个条件以后，点击 add 按钮就会增加到 Conditions 这个选项框里面去，也就是说，新加的这些条件都会放入到这个选项框里面。",-1),h=a("p",null,"接下来我们可以具体看一下这个事例新加的这些条件在选项框中有哪些，service type equals Zabbix agentt 表示扫描的主机中需要安装了 Zabbix_agent（Zabbix 的 agent 程序），所以添加这个动作的条件是扫描到的这一台主机必须装有 Zabbix_agent。Host IP equals 172.21.64.1-254 表示主机 IP 等于这个范围段，也就是说它必须要是某一个范围段的主机 IP。",-1),m=a("p",null,"Type of calculation中的设置表示 Conditions 这个选项框里给它添加了两个条件（分别对应是条件 A 和条件 B）。它们必须满足什么关系（如：and 或者是 or），我这里是设置的是 A and B，也就是说添加的条件中需要同时成立，才能够满足整体的条件。",-1),A=a("p",null,"整体的条件满足以后，我们就会继续配置 actions 里面的另外一大块 Operations。我们点击 Operations 会看到，它负责具体设置执行动作，我们可以在这里定义它的主题，还有它的 message（信息），这些都是用于我们发送这些文字提醒。",-1),E=n("",11),Z=a("p",null,"在这个规则里面配置 Action 动作，第 1 块是动作的名称（Name），下面是满足什么样的条件，这里我设置的条件为 Host metadata contains linux 表示是主机的元数据包含了 Linux 的条件，只要满足了是Linux类型的主机一个条件，然后配置执行步骤 Operation，如图：",-1),v=a("p",null,"Add host 这个动作是添加主机到某一个主机组，这里演示中的这些设置和主动发现模式中 Actions 设置关联主机模板等等，我们会看到这里配置前面（模式一）配置是相同的",-1),C=a("p",null,"接下来就是调整我们的 agent 配置，在 agent 配置里面，我们重点需要加入的一行是 ServerActive，表示主动上报到 Server 端的地址信息，那么我们就要配置好对应的 Zabbix_server 所在的 IP 地址，从而去做主动上报。同样的，配置完成以后启用 agent这个进程，那么接下来我们要在服务端进行检查。",-1),D=a("p",null,"以上就是我们讲解的 Zabbix 对于主机动态发现的两种模式：第 1 个是服务端主动扫描发现。第 2 个是 agent 主动上报。如果自动发现了主机，我们可以点击 Monitoring -> Discovery，然后进入自动发现的列表，可以控制台看到已添加了一台 agent主机，其中有一台主机就是表示我已经发现了一台主机，看到主机相关信息。",-1),f=a("p",null,"另外，也可以在通过 Zabbix 控制台中的资产和主机列表，对应查找新的主机有没有录入到主机信息中。",-1),I=a("p",null,"本课时我们所讲解的 Zabbix 对于主机的自动发现和 agent 主动上报的配置就是这些。可以说使用 Zabbix 作为企业的监控软件，自动发现&主动上报方式是我们对海量的资产主机信息进行录入和监控管理非常高效方式。",-1);function P(B,q,j,z,M,S){const s=i("Image");return l(),p("div",null,[r,t(s,{alt:"1.jpg",src:"https://s0.lgstatic.com/i/image/M00/09/E3/CgqCHl68_HmAbetTAAClb6f9nPQ911.jpg"}),e(),b,_,g,t(s,{alt:"2.jpg",src:"https://s0.lgstatic.com/i/image/M00/09/E3/Ciqc1F68_IWACLmRAAA5Dtpkssg217.jpg"}),e(),x,t(s,{alt:"3.jpg",src:"https://s0.lgstatic.com/i/image/M00/09/E3/Ciqc1F68_IuAMgiIAAB-YdH43CY334.jpg"}),e(),d,y,t(s,{alt:"4.jpg",src:"https://s0.lgstatic.com/i/image/M00/09/E3/CgqCHl68_JOAIENYAADdSo5DXj4465.jpg"}),e(),u,h,m,A,t(s,{alt:"5.jpg",src:"https://s0.lgstatic.com/i/image/M00/09/E4/CgqCHl68_JyABJdqAAC4yAEr8K4251.jpg"}),e(),E,t(s,{alt:"6.jpg",src:"https://s0.lgstatic.com/i/image/M00/09/E4/CgqCHl68_KeAWF1gAAAn8mXN_z8660.jpg"}),e(),Z,t(s,{alt:"7.jpg",src:"https://s0.lgstatic.com/i/image/M00/09/E4/Ciqc1F68_LCADryJAACKuB-Bv8Y577.jpg"}),e(),v,C,t(s,{alt:"8.jpg",src:"https://s0.lgstatic.com/i/image/M00/09/E4/Ciqc1F68_LqADz5LAABmKUChNkM384.jpg"}),e(),D,f,I])}const k=o(c,[["render",P]]);export{F as __pageData,k as default};
