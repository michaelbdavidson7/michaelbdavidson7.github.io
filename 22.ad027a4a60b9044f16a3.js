(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{D2Fe:function(e){e.exports=[{id:1,type:"  clc_server",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"name_template",description:"(Required, string) The basename of the server. A unique name will be generated by the platform.\n",elementType:"li",listDepth:1},{name:"source_server_id",description:'(Required, string) The name or ID of the base OS image.\nExamples: "ubuntu-14-64-template", "rhel-7-64-template", "win2012r2dtc-64"\n',elementType:"li",listDepth:1},{name:"group_id",description:"(Required, string) The name or ID of the server group to spawn server into.\n",elementType:"li",listDepth:1},{name:"cpu",description:"(Required, int) The number of virtual cores\n",elementType:"li",listDepth:1},{name:"memory_mb",description:"(Required, int) Provisioned RAM\n",elementType:"li",listDepth:1},{name:"type",description:'(Required, string) The virtualization type\nOne of "standard", "hyperscale", "bareMetal"\n',elementType:"li",listDepth:1},{name:"password",description:"(Optional, string) The root/administrator password. Will be generated by platform if not provided.\n",elementType:"li",listDepth:1},{name:"description",description:"(Optional, string) Description for server (visible in control portal only)\n",elementType:"li",listDepth:1},{name:"power_state",description:'(Optional, string) See <a href="#power_states">PowerStates</a> below for details.\nIf absent, defaults to <code>started</code>.\n',elementType:"li",listDepth:1},{name:"private_ip_address",description:"(Optional, string) Set internal IP address. If absent, allocated and assigned from pool.\n",elementType:"li",listDepth:1},{name:"network_id",description:"(Optional, string) GUID of network to use. (Must be set up in advance from control portal.)\nWhen absent, the default network will be used.\n",elementType:"li",listDepth:1},{name:"storage_type",description:'(Optional, string) Backup and replication strategy for disks.\nOne of "standard", "premium"\n',elementType:"li",listDepth:1},{name:"aa_policy_id",description:"(Optional, string | hyperscale) Anti-Affinity policy ID\n",elementType:"li",listDepth:1},{name:"configuration_id",description:"(Optional, string | bareMetal) Hardware configuration ID\n",elementType:"li",listDepth:1},{name:"os_type",description:"(Optional, string | bareMetal) Operating system to install.\n",elementType:"li",listDepth:1},{name:"additional_disks",description:'<strong>(Optional)</strong> See <a href="#disks">Disks</a> below for details.\n',elementType:"li",listDepth:1},{name:"custom_fields",description:'<strong>(Optional)</strong> See <a href="#custom_fields">CustomFields</a> below for details.\n',elementType:"li",listDepth:1},{name:"metadata",description:"<strong>(Optional)</strong> Misc state storage for non-CLC metadata.\n",elementType:"li",listDepth:1},{name:"",description:'<p><a id="server-types"></a></p>',elementType:"p"},{name:"server-types",description:'<h2 id="server-types">\n<a class="anchor" href="#server-types" name="server-types">\xbb</a>\n  Server Types\n</h2>',elementType:"h2"},{name:"standard",description:'<h4 id="standard">\n<a class="anchor" href="#standard" name="standard">\xbb</a>\n  standard\n</h4>',elementType:"h4"},{name:"",description:"<p>Cloud servers <code>standard</code> offer basic, commodity level\nperformance with mixed spindle/SSD storage profiles. Additional\nfeatures storage backups, snapshot/clone/archive, and widespread\navailability.</p>",elementType:"p"},{name:"hyperscale",description:'<h4 id="hyperscale">\n<a class="anchor" href="#hyperscale" name="hyperscale">\xbb</a>\n  hyperscale\n</h4>',elementType:"h4"},{name:"",description:'<p>Hyperscale <code>hyperscale</code> servers offer significantly higher IOPS than standard\nservers for CPU and IO intensive servers. See the\n<a href="https://www.ctl.io/knowledge-base/servers/hyperscale-server-faq/">FAQ</a>\nfor more details.</p>',elementType:"p"},{name:"",description:'<p>Physical host redundancy can be managed via\n<a href="https://www.ctl.io/knowledge-base/servers/centurylink-cloud-anti-affinity-policies/">Anti-Affinity policies</a>.</p>',elementType:"p"},{name:"baremetal",description:'<h4 id="baremetal">\n<a class="anchor" href="#baremetal" name="baremetal">\xbb</a>\n  bareMetal\n</h4>',elementType:"h4"},{name:"",description:'<p>Bare metal <code>bareMetal</code> offers optimal compute performance and is\navailable in select datacenters in CLC for approved customers. For\nmore info see the\n<a href="https://www.ctl.io/knowledge-base/servers/bare-metal-faq/">FAQ</a>.</p>',elementType:"p"},{name:"",description:"<p>For <code>bareMetal</code>, the required fields <code>source_server_id</code>, <code>cpu</code>, and\n<code>memory_mb</code> are ignored and instead the following fields are required:</p>",elementType:"p"},{name:"configuration_id\n",description:"<li>configuration_id\n</li>",elementType:"li",listDepth:1},{name:"os_type\n",description:"<li>os_type\n</li>",elementType:"li",listDepth:1},{name:"",description:'<p>Values for <code>configuration_id</code> and <code>os_type</code> are specific to each\ndatacenter and are available via the API endpoints\n<a href="https://www.ctl.io/api-docs/v2/#data-centers-get-data-center-bare-metal-capabilities">here</a>.</p>',elementType:"p"},{name:"",description:'<p><a id="power_states"></a></p>',elementType:"p"},{name:"powerstates",description:'<h2 id="powerstates">\n<a class="anchor" href="#powerstates" name="powerstates">\xbb</a>\n  PowerStates\n</h2>',elementType:"h2"},{name:"",description:"<p><code>power_state</code> may be used to set initial power state or modify existing instances.</p>",elementType:"p"},{name:"on",description:" | <code>started</code> - machine powered on\n",elementType:"li",listDepth:1},{name:"off",description:" | <code>stopped</code> - machine powered off forcefully\n",elementType:"li",listDepth:1},{name:"paused",description:"freeze machine: memory, processes, billing, monitoring.\n",elementType:"li",listDepth:1},{name:"shutdown",description:"shutdown gracefully\n",elementType:"li",listDepth:1},{name:"reboot",description:"restart gracefully\n",elementType:"li",listDepth:1},{name:"reset",description:"restart forcefully\n",elementType:"li",listDepth:1},{name:"",description:'<p><a id="disks"></a></p>',elementType:"p"},{name:"disks",description:'<h2 id="disks">\n<a class="anchor" href="#disks" name="disks">\xbb</a>\n  Disks\n</h2>',elementType:"h2"},{name:"",description:"<p><code>additional_disks</code> is a block within the configuration that may be\nrepeated to specify the attached disks on a server. Each\n<code>additional_disks</code> block supports the following:</p>",elementType:"p"},{name:"type",description:'(Required, string) Either "raw" or "partitioned".\n',elementType:"li",listDepth:1},{name:"size_gb",description:"(Required, int) Size of allocated disk.\n",elementType:"li",listDepth:1},{name:"path",description:"(Required, string, type:<code>partitioned</code>) The mountpoint for the disk.\n",elementType:"li",listDepth:1},{name:"",description:'<p><a id="custom_fields"></a></p>',elementType:"p"},{name:"customfields",description:'<h2 id="customfields">\n<a class="anchor" href="#customfields" name="customfields">\xbb</a>\n  CustomFields\n</h2>',elementType:"h2"},{name:"",description:"<p><code>custom_fields</code> is a block within the configuration that may be\nrepeated to bind custom fields for a server. CustomFields need be set\nup in advance. Each <code>custom_fields</code> block supports the following:</p>",elementType:"p"},{name:"id",description:"(Required, string) The ID of the custom field to set.\n",elementType:"li",listDepth:1},{name:"value",description:"(Required, string) The value for the specified field.\n",elementType:"li",listDepth:1},{name:"",description:'<p><a id="packages"></a></p>',elementType:"p"},{name:"packages",description:'<h2 id="packages">\n<a class="anchor" href="#packages" name="packages">\xbb</a>\n  Packages\n</h2>',elementType:"h2"},{name:"",description:"<p><code>packages</code> is a block within the configuration that may be repeated to\nspecify packages and their associated parameters to be run at\ninstantiation. Packages facilitate various tasks like ssh key\ninstallation, kernel upgrades, etc. Package ID as well as parameters\nare configured via this block.</p>",elementType:"p"},{name:"",description:"<p>Example:</p>",elementType:"p"},{name:"",description:'<div class="highlight"><pre class="highlight hcl"><code><span class="c1"># Configure the CLC Provider</span>\n<span class="n">provider</span> <span class="s2">"clc_server"</span> <span class="s2">"ubuntu"</span> <span class="p">{</span>\n  <span class="c1"># ...</span>\n  <span class="n">packages</span> <span class="p">{</span>\n    <span class="nb">id</span>     <span class="o">=</span> <span class="s2">"77abb844-579d-478d-3955-c69ab4a7ba1a"</span>\n    <span class="no">SshKey</span> <span class="o">=</span> <span class="s2">"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAA..."</span>\n  <span class="p">}</span>\n<span class="p">}</span>\n</code></pre></div>',elementType:"div"}],docsUrl:"https://www.terraform.io/docs/providers/clc/r/server.html",docType:""},{id:2,type:"  clc_group",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"name",description:"(Required, string) The name (or GUID) of this server group. Will resolve to existing if present.\n",elementType:"li",listDepth:1},{name:"parent",description:"(Required, string) The name or ID of the parent group. Will error if absent or unable to resolve.\n",elementType:"li",listDepth:1},{name:"location_id",description:'(Required, string) The datacenter location of both parent group and this group.\nExamples: "WA1", "VA1"\n',elementType:"li",listDepth:1},{name:"description",description:"(Optional, string) Description for server group (visible in control portal only)\n",elementType:"li",listDepth:1},{name:"custom_fields",description:'<strong>(Optional)</strong> See <a href="#custom_fields">CustomFields</a> below for details.\n',elementType:"li",listDepth:1},{name:"",description:'<p><a id="custom_fields"></a></p>',elementType:"p"},{name:"customfields",description:'<h2 id="customfields">\n<a class="anchor" href="#customfields" name="customfields">\xbb</a>\n  CustomFields\n</h2>',elementType:"h2"},{name:"",description:"<p><code>custom_fields</code> is a block within the configuration that may be\nrepeated to bind custom fields for a server. CustomFields need be set\nup in advance. Each <code>custom_fields</code> block supports the following:</p>",elementType:"p"},{name:"id",description:"(Required, string) The ID of the custom field to set.\n",elementType:"li",listDepth:1},{name:"value",description:"(Required, string) The value for the specified field.\n",elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/clc/r/group.html",docType:""},{id:3,type:"  clc_public_ip",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"server_id",description:"(Required, string) The name or ID of the server to bind IP to.\n",elementType:"li",listDepth:1},{name:"internal_ip_address",description:"(Required, string) The internal IP of the\nNIC to attach to. If not provided, a new internal NIC will be\nprovisioned and used.\n",elementType:"li",listDepth:1},{name:"ports",description:'<strong>(Optional)</strong> See <a href="#ports">Ports</a> below for details.\n',elementType:"li",listDepth:1},{name:"source_restrictions",description:'<strong>(Optional)</strong> See\n<a href="#source_restrictions">SourceRestrictions</a> below for details.\n',elementType:"li",listDepth:1},{name:"",description:'<p><a id="ports"></a></p>',elementType:"p"},{name:"ports-1",description:'<h2 id="ports-1">\n<a class="anchor" href="#ports-1" name="ports-1">\xbb</a>\n  Ports\n</h2>',elementType:"h2"},{name:"",description:"<p><code>ports</code> is a block within the configuration that may be\nrepeated to specify open ports on the target IP. Each\n<code>ports</code> block supports the following:</p>",elementType:"p"},{name:"protocol",description:' (Required, string) One of "tcp", "udp", "icmp".\n',elementType:"li",listDepth:1},{name:"port",description:" (Required, int) The port to open. If defining a range, demarks starting port\n",elementType:"li",listDepth:1},{name:"portTo",description:" (Optional, int) Given a port range, demarks the ending port.\n",elementType:"li",listDepth:1},{name:"",description:'<p><a id="source_restrictions"></a></p>',elementType:"p"},{name:"sourcerestrictions",description:'<h2 id="sourcerestrictions">\n<a class="anchor" href="#sourcerestrictions" name="sourcerestrictions">\xbb</a>\n  SourceRestrictions\n</h2>',elementType:"h2"},{name:"",description:"<p><code>source_restrictions</code> is a block within the configuration that may be\nrepeated to restrict ingress traffic on specified CIDR blocks. Each\n<code>source_restrictions</code> block supports the following:</p>",elementType:"p"},{name:"cidr",description:" (Required, string) The IP or range of IPs in CIDR notation.\n",elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/clc/r/public_ip.html",docType:""},{id:4,type:"  clc_load_balancer",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"name",description:"(Required, string) The name of the load balancer.\n",elementType:"li",listDepth:1},{name:"data_center",description:"(Required, string) The datacenter location of both parent group and this group.\n",elementType:"li",listDepth:1},{name:"status",description:'(Required, string) Either "enabled" or "disabled"\n',elementType:"li",listDepth:1},{name:"description",description:"(Optional, string) Description for server group (visible in control portal only)\n",elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/clc/r/load_balancer.html",docType:""},{id:5,type:"  clc_load_balancer_pool",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"load_balancer",description:"(Required, string) The id of the load balancer.\n",elementType:"li",listDepth:1},{name:"data_center",description:"(Required, string) The datacenter location for this pool.\n",elementType:"li",listDepth:1},{name:"port",description:"(Required, int) Either 80 or 443\n",elementType:"li",listDepth:1},{name:"method",description:'(Optional, string) The configured balancing method. Either\n"roundRobin" (default) or "leastConnection".\n',elementType:"li",listDepth:1},{name:"persistence",description:'(Optional, string) The configured persistence\nmethod. Either "standard" (default) or "sticky".\n',elementType:"li",listDepth:1},{name:null,description:'<li>nodes - <strong>(Optional)</strong> See <a href="#nodes">Nodes</a> below for details.\n</li>',elementType:"li",listDepth:1},{name:"",description:'<p><a id="nodes"></a></p>',elementType:"p"},{name:"nodes",description:'<h2 id="nodes">\n<a class="anchor" href="#nodes" name="nodes">\xbb</a>\n  Nodes\n</h2>',elementType:"h2"},{name:"",description:"<p><code>nodes</code> is a block within the configuration that may be repeated to\nspecify connected nodes on this pool. Each <code>nodes</code> block supports the\nfollowing:</p>",elementType:"p"},{name:"ipAddress",description:" (Required, string) The destination internal ip of pool node.\n",elementType:"li",listDepth:1},{name:"privatePort",description:" (Required, int) The destination port on the pool node.\n",elementType:"li",listDepth:1},{name:"status",description:' (Optional, string) Either "enabled" or "disabled".\n',elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/clc/r/load_balancer_pool.html",docType:""}]}}]);