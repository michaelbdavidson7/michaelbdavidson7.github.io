(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{hgHw:function(e){e.exports=[{id:1,type:"  cobbler_distro",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"arch",description:'<li><p><a name="arch"></a><a href="#arch"><code>arch</code></a> - <strong>(Required)</strong> The architecture of the distro. Valid options\nare: i386, x86_64, ia64, ppc, ppc64, s390, arm.</p>\n</li>',elementType:"li",listDepth:1},{name:"breed",description:'<li><p><a name="breed"></a><a href="#breed"><code>breed</code></a> - <strong>(Required)</strong> The "breed" of distribution. Valid options\nare: redhat, fedora, centos, scientific linux, suse, debian, and\nubuntu. These choices may vary depending on the version of Cobbler\nin use.</p>\n</li>',elementType:"li",listDepth:1},{name:"boot_files",description:'<li><p><a name="boot_files"></a><a href="#boot_files"><code>boot_files</code></a> - <strong>(Optional)</strong> Files copied into tftpboot beyond the\nkernel/initrd.</p>\n</li>',elementType:"li",listDepth:1},{name:"comment",description:'<li><p><a name="comment"></a><a href="#comment"><code>comment</code></a> - <strong>(Optional)</strong> Free form text description.</p>\n</li>',elementType:"li",listDepth:1},{name:"fetchable_files",description:'<li><p><a name="fetchable_files"></a><a href="#fetchable_files"><code>fetchable_files</code></a> - <strong>(Optional)</strong> Templates for tftp or wget.</p>\n</li>',elementType:"li",listDepth:1},{name:"kernel",description:'<li><p><a name="kernel"></a><a href="#kernel"><code>kernel</code></a> - <strong>(Required)</strong> Absolute path to kernel on filesystem. This\nmust already exist prior to creating the distro.</p>\n</li>',elementType:"li",listDepth:1},{name:"kernel_options",description:'<li><p><a name="kernel_options"></a><a href="#kernel_options"><code>kernel_options</code></a> - <strong>(Optional)</strong> Kernel options to use with the\nkernel.</p>\n</li>',elementType:"li",listDepth:1},{name:"kernel_options_post",description:'<li><p><a name="kernel_options_post"></a><a href="#kernel_options_post"><code>kernel_options_post</code></a> - <strong>(Optional)</strong> Post install Kernel options to\nuse with the kernel after installation.</p>\n</li>',elementType:"li",listDepth:1},{name:"initrd",description:'<li><p><a name="initrd"></a><a href="#initrd"><code>initrd</code></a> - <strong>(Required)</strong> Absolute path to initrd on filesystem. This\nmust already exist prior to creating the distro.</p>\n</li>',elementType:"li",listDepth:1},{name:"mgmt_classes",description:'<li><p><a name="mgmt_classes"></a><a href="#mgmt_classes"><code>mgmt_classes</code></a> - <strong>(Optional)</strong> Management classes for external config\nmanagement.</p>\n</li>',elementType:"li",listDepth:1},{name:"name",description:'<li><p><a name="name"></a><a href="#name"><code>name</code></a> - <strong>(Required)</strong> A name for the distro.</p>\n</li>',elementType:"li",listDepth:1},{name:"os_version",description:'<li><p><a name="os_version"></a><a href="#os_version"><code>os_version</code></a> - <strong>(Required)</strong> The version of the distro you are\ncreating. This varies with the version of Cobbler you are using.\nAn updated signature list may need to be obtained in order to\nsupport a newer version. Example: <code>trusty</code>.</p>\n</li>',elementType:"li",listDepth:1},{name:"owners",description:'<li><p><a name="owners"></a><a href="#owners"><code>owners</code></a> - <strong>(Optional)</strong> Owners list for authz_ownership.</p>\n</li>',elementType:"li",listDepth:1},{name:"redhat_management_key",description:'<li><p><a name="redhat_management_key"></a><a href="#redhat_management_key"><code>redhat_management_key</code></a> - <strong>(Optional)</strong> Red Hat Management key.</p>\n</li>',elementType:"li",listDepth:1},{name:"redhat_management_server",description:'<li><p><a name="redhat_management_server"></a><a href="#redhat_management_server"><code>redhat_management_server</code></a> - <strong>(Optional)</strong> Red Hat Management server.</p>\n</li>',elementType:"li",listDepth:1},{name:"template_files",description:'<li><p><a name="template_files"></a><a href="#template_files"><code>template_files</code></a> - <strong>(Optional)</strong> File mappings for built-in config\nmanagement.</p>\n</li>',elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/cobbler/r/distro.html",docType:""},{id:2,type:"  cobbler_kickstart_file",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"body",description:'<li><p><a name="body"></a><a href="#body"><code>body</code></a> - <strong>(Required)</strong> The body of the kickstart file.</p>\n</li>',elementType:"li",listDepth:1},{name:"name",description:'<li><p><a name="name"></a><a href="#name"><code>name</code></a> - <strong>(Required)</strong> The name of the kickstart file. This must be\nthe full path, including <code>/var/lib/cobbler/kickstarts</code>.</p>\n</li>',elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/cobbler/r/kickstart_file.html",docType:""},{id:3,type:"  cobbler_repo",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"apt_components",description:'<li><p><a name="apt_components"></a><a href="#apt_components"><code>apt_components</code></a> - <strong>(Optional)</strong> List of Apt components such as main,\nrestricted, universe. Applicable to apt breeds only.</p>\n</li>',elementType:"li",listDepth:1},{name:"apt_dists",description:'<li><p><a name="apt_dists"></a><a href="#apt_dists"><code>apt_dists</code></a> - <strong>(Optional)</strong> List of Apt distribution names such as trusty,\ntrusty-updates. Applicable to apt breeds only.</p>\n</li>',elementType:"li",listDepth:1},{name:"arch",description:'<li><p><a name="arch"></a><a href="#arch"><code>arch</code></a> - <strong>(Optional)</strong> The architecture of the repo. Valid options\nare: i386, x86_64, ia64, ppc, ppc64, s390, arm.</p>\n</li>',elementType:"li",listDepth:1},{name:"breed",description:'<li><p><a name="breed"></a><a href="#breed"><code>breed</code></a> - <strong>(Required)</strong> The "breed" of distribution. Valid options\nare: rsync, rhn, yum, apt, and wget. These choices may vary depending on the\nversion of Cobbler in use.</p>\n</li>',elementType:"li",listDepth:1},{name:"comment",description:'<li><p><a name="comment"></a><a href="#comment"><code>comment</code></a> - <strong>(Optional)</strong> Free form text description.</p>\n</li>',elementType:"li",listDepth:1},{name:"createrepo_flags",description:'<li><p><a name="createrepo_flags"></a><a href="#createrepo_flags"><code>createrepo_flags</code></a> - <strong>(Optional)</strong> Flags to use with <code>createrepo</code>.</p>\n</li>',elementType:"li",listDepth:1},{name:"environment",description:'<li><p><a name="environment"></a><a href="#environment"><code>environment</code></a> - <strong>(Optional)</strong> Environment variables to use during repo command\nexecution.</p>\n</li>',elementType:"li",listDepth:1},{name:"keep_updated",description:'<li><p><a name="keep_updated"></a><a href="#keep_updated"><code>keep_updated</code></a> - <strong>(Optional)</strong> Update the repo upon Cobbler sync. Valid values\nare true or false.</p>\n</li>',elementType:"li",listDepth:1},{name:"mirror",description:'<li><p><a name="mirror"></a><a href="#mirror"><code>mirror</code></a> - <strong>(Required)</strong> Address of the repo to mirror.</p>\n</li>',elementType:"li",listDepth:1},{name:"mirror_locally",description:'<li><p><a name="mirror_locally"></a><a href="#mirror_locally"><code>mirror_locally</code></a> - <strong>(Required)</strong> Whether to copy the files locally or just\nreferences to the external files. Valid values are true or false.</p>\n</li>',elementType:"li",listDepth:1},{name:"name",description:'<li><p><a name="name"></a><a href="#name"><code>name</code></a> - <strong>(Required)</strong> A name for the repo.</p>\n</li>',elementType:"li",listDepth:1},{name:"owners",description:'<li><p><a name="owners"></a><a href="#owners"><code>owners</code></a> - <strong>(Optional)</strong> List of Owners for authz_ownership.</p>\n</li>',elementType:"li",listDepth:1},{name:"proxy",description:'<li><p><a name="proxy"></a><a href="#proxy"><code>proxy</code></a> - <strong>(Optional)</strong> Proxy to use for downloading the repo. This argument does\nnot work on older versions of Cobbler.</p>\n</li>',elementType:"li",listDepth:1},{name:"rpm_list",description:'<li><p><a name="rpm_list"></a><a href="#rpm_list"><code>rpm_list</code></a> - <strong>(Optional)</strong> List of specific RPMs to mirror.</p>\n</li>',elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/cobbler/r/repo.html",docType:""},{id:4,type:"  cobbler_profile",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"boot_files",description:'<li><p><a name="boot_files"></a><a href="#boot_files"><code>boot_files</code></a> - <strong>(Optional)</strong> Files copied into tftpboot beyond the\nkernel/initrd.</p>\n</li>',elementType:"li",listDepth:1},{name:"comment",description:'<li><p><a name="comment"></a><a href="#comment"><code>comment</code></a> - <strong>(Optional)</strong> Free form text description.</p>\n</li>',elementType:"li",listDepth:1},{name:"parent",description:'<li><p><a name="parent"></a><a href="#parent"><code>parent</code></a> - <strong>(Optional)</strong> The parent this profile inherits settings from.</p>\n</li>',elementType:"li",listDepth:1},{name:"server",description:'<li><p><a name="server"></a><a href="#server"><code>server</code></a> - <strong>(Optional)</strong> The server-override for the profile.</p>\n</li>',elementType:"li",listDepth:1},{name:"distro",description:'<li><p><a name="distro"></a><a href="#distro"><code>distro</code></a> - <strong>(Optional)</strong> Parent distribution.</p>\n</li>',elementType:"li",listDepth:1},{name:"enable_gpxe",description:'<li><p><a name="enable_gpxe"></a><a href="#enable_gpxe"><code>enable_gpxe</code></a> - <strong>(Optional)</strong> Use gPXE instead of PXELINUX for\nadvanced booting options.</p>\n</li>',elementType:"li",listDepth:1},{name:"enable_menu",description:'<li><p><a name="enable_menu"></a><a href="#enable_menu"><code>enable_menu</code></a> - <strong>(Optional)</strong> Enable a boot menu.</p>\n</li>',elementType:"li",listDepth:1},{name:"fetchable_files",description:'<li><p><a name="fetchable_files"></a><a href="#fetchable_files"><code>fetchable_files</code></a> - <strong>(Optional)</strong> Templates for tftp or wget.</p>\n</li>',elementType:"li",listDepth:1},{name:"kernel_options",description:'<li><p><a name="kernel_options"></a><a href="#kernel_options"><code>kernel_options</code></a> - <strong>(Optional)</strong> Kernel options for the profile.</p>\n</li>',elementType:"li",listDepth:1},{name:"kernel_options_post",description:'<li><p><a name="kernel_options_post"></a><a href="#kernel_options_post"><code>kernel_options_post</code></a> - <strong>(Optional)</strong> Post install kernel options.</p>\n</li>',elementType:"li",listDepth:1},{name:"kickstart",description:'<li><p><a name="kickstart"></a><a href="#kickstart"><code>kickstart</code></a> - <strong>(Optional)</strong> The kickstart file to use.</p>\n</li>',elementType:"li",listDepth:1},{name:"ks_meta",description:'<li><p><a name="ks_meta"></a><a href="#ks_meta"><code>ks_meta</code></a> - <strong>(Optional)</strong> Kickstart metadata.</p>\n</li>',elementType:"li",listDepth:1},{name:"mgmt_classes",description:'<li><p><a name="mgmt_classes"></a><a href="#mgmt_classes"><code>mgmt_classes</code></a> - <strong>(Optional)</strong> For external configuration management.</p>\n</li>',elementType:"li",listDepth:1},{name:"mgmt_parameters",description:'<li><p><a name="mgmt_parameters"></a><a href="#mgmt_parameters"><code>mgmt_parameters</code></a> - <strong>(Optional)</strong> Parameters which will be handed to\nyour management application (Must be a valid YAML dictionary).</p>\n</li>',elementType:"li",listDepth:1},{name:"name_servers_search",description:'<li><p><a name="name_servers_search"></a><a href="#name_servers_search"><code>name_servers_search</code></a> - <strong>(Optional)</strong> Name server search settings.</p>\n</li>',elementType:"li",listDepth:1},{name:"name_servers",description:'<li><p><a name="name_servers"></a><a href="#name_servers"><code>name_servers</code></a> - <strong>(Optional)</strong> Name servers.</p>\n</li>',elementType:"li",listDepth:1},{name:"name",description:'<li><p><a name="name"></a><a href="#name"><code>name</code></a> - <strong>(Required)</strong> The name of the profile.</p>\n</li>',elementType:"li",listDepth:1},{name:"owners",description:'<li><p><a name="owners"></a><a href="#owners"><code>owners</code></a> - <strong>(Optional)</strong> Owners list for authz_ownership.</p>\n</li>',elementType:"li",listDepth:1},{name:"proxy",description:'<li><p><a name="proxy"></a><a href="#proxy"><code>proxy</code></a> - <strong>(Optional)</strong> Proxy URL.</p>\n</li>',elementType:"li",listDepth:1},{name:"redhat_management_key",description:'<li><p><a name="redhat_management_key"></a><a href="#redhat_management_key"><code>redhat_management_key</code></a> - <strong>(Optional)</strong> Red Hat Management Key.</p>\n</li>',elementType:"li",listDepth:1},{name:"redhat_management_server",description:'<li><p><a name="redhat_management_server"></a><a href="#redhat_management_server"><code>redhat_management_server</code></a> - <strong>(Optional)</strong> RedHat Management Server.</p>\n</li>',elementType:"li",listDepth:1},{name:"repos",description:'<li><p><a name="repos"></a><a href="#repos"><code>repos</code></a> - <strong>(Optional)</strong> Repos to auto-assign to this profile.</p>\n</li>',elementType:"li",listDepth:1},{name:"template_files",description:'<li><p><a name="template_files"></a><a href="#template_files"><code>template_files</code></a> - <strong>(Optional)</strong> File mappings for built-in config\nmanagement.</p>\n</li>',elementType:"li",listDepth:1},{name:"template_remote_kickstarts",description:'<li><p><a name="template_remote_kickstarts"></a><a href="#template_remote_kickstarts"><code>template_remote_kickstarts</code></a> - <strong>(Optional)</strong> remote kickstart\ntemplates.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_auto_boot",description:'<li><p><a name="virt_auto_boot"></a><a href="#virt_auto_boot"><code>virt_auto_boot</code></a> - <strong>(Optional)</strong> Auto boot virtual machines.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_bridge",description:'<li><p><a name="virt_bridge"></a><a href="#virt_bridge"><code>virt_bridge</code></a> - <strong>(Optional)</strong> The bridge for virtual machines.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_cpus",description:'<li><p><a name="virt_cpus"></a><a href="#virt_cpus"><code>virt_cpus</code></a> - <strong>(Optional)</strong> The number of virtual CPUs.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_file_size",description:'<li><p><a name="virt_file_size"></a><a href="#virt_file_size"><code>virt_file_size</code></a> - <strong>(Optional)</strong> The virtual machine file size.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_path",description:'<li><p><a name="virt_path"></a><a href="#virt_path"><code>virt_path</code></a> - <strong>(Optional)</strong> The virtual machine path.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_ram",description:'<li><p><a name="virt_ram"></a><a href="#virt_ram"><code>virt_ram</code></a> - <strong>(Optional)</strong> The amount of RAM for the virtual machine.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_type",description:'<li><p><a name="virt_type"></a><a href="#virt_type"><code>virt_type</code></a> - <strong>(Optional)</strong> The type of virtual machine. Valid options\nare: xenpv, xenfv, qemu, kvm, vmware, openvz.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_disk_driver",description:'<li><p><a name="virt_disk_driver"></a><a href="#virt_disk_driver"><code>virt_disk_driver</code></a> - <strong>(Optional)</strong> The virtual machine disk driver.</p>\n</li>',elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/cobbler/r/profile.html",docType:""},{id:5,type:"  cobbler_snippet",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"body",description:'<li><p><a name="body"></a><a href="#body"><code>body</code></a> - <strong>(Required)</strong> The body of the snippet.</p>\n</li>',elementType:"li",listDepth:1},{name:"name",description:'<li><p><a name="name"></a><a href="#name"><code>name</code></a> - <strong>(Required)</strong> The name of the snippet. This must be the full\npath, including <code>/var/lib/cobbler/snippets</code>.</p>\n</li>',elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/cobbler/r/snippet.html",docType:""},{id:6,type:"  cobbler_system",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"boot_files",description:'<li><p><a name="boot_files"></a><a href="#boot_files"><code>boot_files</code></a> - <strong>(Optional)</strong> TFTP boot files copied into tftpboot.</p>\n</li>',elementType:"li",listDepth:1},{name:"comment",description:'<li><p><a name="comment"></a><a href="#comment"><code>comment</code></a> - <strong>(Optional)</strong> Free form text description</p>\n</li>',elementType:"li",listDepth:1},{name:"enable_gpxe",description:'<li><p><a name="enable_gpxe"></a><a href="#enable_gpxe"><code>enable_gpxe</code></a> - <strong>(Optional)</strong> Use gPXE instead of PXELINUX.</p>\n</li>',elementType:"li",listDepth:1},{name:"fetchable_files",description:'<li><p><a name="fetchable_files"></a><a href="#fetchable_files"><code>fetchable_files</code></a> - <strong>(Optional)</strong> Templates for tftp or wget.</p>\n</li>',elementType:"li",listDepth:1},{name:"gateway",description:'<li><p><a name="gateway"></a><a href="#gateway"><code>gateway</code></a> - <strong>(Optional)</strong> Network gateway.</p>\n</li>',elementType:"li",listDepth:1},{name:"hostname",description:'<li><p><a name="hostname"></a><a href="#hostname"><code>hostname</code></a> - <strong>(Optional)</strong> Hostname of the system.</p>\n</li>',elementType:"li",listDepth:1},{name:"image",description:'<li><p><a name="image"></a><a href="#image"><code>image</code></a> - <strong>(Optional)</strong> Parent image (if no profile is used).</p>\n</li>',elementType:"li",listDepth:1},{name:"interface",description:'<li><p><a name="interface"></a><a href="#interface"><code>interface</code></a> - <strong>(Optional)</strong></p>\n</li>',elementType:"li",listDepth:1},{name:"ipv6_default_device",description:'<li><p><a name="ipv6_default_device"></a><a href="#ipv6_default_device"><code>ipv6_default_device</code></a> - <strong>(Optional)</strong> IPv6 default device.</p>\n</li>',elementType:"li",listDepth:1},{name:"kernel_options",description:'<li><p><a name="kernel_options"></a><a href="#kernel_options"><code>kernel_options</code></a> - <strong>(Optional)</strong> Kernel options.\nex: selinux=permissive.</p>\n</li>',elementType:"li",listDepth:1},{name:"kernel_options_post",description:'<li><p><a name="kernel_options_post"></a><a href="#kernel_options_post"><code>kernel_options_post</code></a> - <strong>(Optional)</strong> Kernel options (post install).</p>\n</li>',elementType:"li",listDepth:1},{name:"kickstart",description:'<li><p><a name="kickstart"></a><a href="#kickstart"><code>kickstart</code></a> - <strong>(Optional)</strong> Path to kickstart template.</p>\n</li>',elementType:"li",listDepth:1},{name:"ks_meta",description:'<li><p><a name="ks_meta"></a><a href="#ks_meta"><code>ks_meta</code></a> - <strong>(Optional)</strong> Kickstart metadata.</p>\n</li>',elementType:"li",listDepth:1},{name:"ldap_enabled",description:'<li><p><a name="ldap_enabled"></a><a href="#ldap_enabled"><code>ldap_enabled</code></a> - <strong>(Optional)</strong> Configure LDAP at next config update.</p>\n</li>',elementType:"li",listDepth:1},{name:"ldap_type",description:'<li><p><a name="ldap_type"></a><a href="#ldap_type"><code>ldap_type</code></a> - <strong>(Optional)</strong> LDAP management type.</p>\n</li>',elementType:"li",listDepth:1},{name:"mgmt_classes",description:'<li><p><a name="mgmt_classes"></a><a href="#mgmt_classes"><code>mgmt_classes</code></a> - <strong>(Optional)</strong> Management classes for external config\nmanagement.</p>\n</li>',elementType:"li",listDepth:1},{name:"mgmt_parameters",description:'<li><p><a name="mgmt_parameters"></a><a href="#mgmt_parameters"><code>mgmt_parameters</code></a> - <strong>(Optional)</strong> Parameters which will be handed to\nyour management application. Must be a valid YAML dictionary.</p>\n</li>',elementType:"li",listDepth:1},{name:"monit_enabled",description:'<li><p><a name="monit_enabled"></a><a href="#monit_enabled"><code>monit_enabled</code></a> - <strong>(Optional)</strong> Configure monit on this machine at\nnext config update.</p>\n</li>',elementType:"li",listDepth:1},{name:"name_servers_search",description:'<li><p><a name="name_servers_search"></a><a href="#name_servers_search"><code>name_servers_search</code></a> - <strong>(Optional)</strong> Name servers search path.</p>\n</li>',elementType:"li",listDepth:1},{name:"name_servers",description:'<li><p><a name="name_servers"></a><a href="#name_servers"><code>name_servers</code></a> - <strong>(Optional)</strong> Name servers.</p>\n</li>',elementType:"li",listDepth:1},{name:"name",description:'<li><p><a name="name"></a><a href="#name"><code>name</code></a> - <strong>(Required)</strong> The name of the system.</p>\n</li>',elementType:"li",listDepth:1},{name:"netboot_enabled",description:'<li><p><a name="netboot_enabled"></a><a href="#netboot_enabled"><code>netboot_enabled</code></a> - <strong>(Optional)</strong> (re)Install this machine at next\nboot.</p>\n</li>',elementType:"li",listDepth:1},{name:"owners",description:'<li><p><a name="owners"></a><a href="#owners"><code>owners</code></a> - <strong>(Optional)</strong> Owners list for authz_ownership.</p>\n</li>',elementType:"li",listDepth:1},{name:"power_address",description:'<li><p><a name="power_address"></a><a href="#power_address"><code>power_address</code></a> - <strong>(Optional)</strong> Power management address.</p>\n</li>',elementType:"li",listDepth:1},{name:"power_id",description:'<li><p><a name="power_id"></a><a href="#power_id"><code>power_id</code></a> - <strong>(Optional)</strong> Usually a plug number or blade name if\npower type requires it.</p>\n</li>',elementType:"li",listDepth:1},{name:"power_pass",description:'<li><p><a name="power_pass"></a><a href="#power_pass"><code>power_pass</code></a> - <strong>(Optional)</strong> Power management password.</p>\n</li>',elementType:"li",listDepth:1},{name:"power_type",description:'<li><p><a name="power_type"></a><a href="#power_type"><code>power_type</code></a> - <strong>(Optional)</strong> Power management type.</p>\n</li>',elementType:"li",listDepth:1},{name:"power_user",description:'<li><p><a name="power_user"></a><a href="#power_user"><code>power_user</code></a> - <strong>(Optional)</strong> Power management user.</p>\n</li>',elementType:"li",listDepth:1},{name:"profile",description:'<li><p><a name="profile"></a><a href="#profile"><code>profile</code></a> - <strong>(Required)</strong> Parent profile.</p>\n</li>',elementType:"li",listDepth:1},{name:"proxy",description:'<li><p><a name="proxy"></a><a href="#proxy"><code>proxy</code></a> - <strong>(Optional)</strong> Proxy URL.</p>\n</li>',elementType:"li",listDepth:1},{name:"redhat_management_key",description:'<li><p><a name="redhat_management_key"></a><a href="#redhat_management_key"><code>redhat_management_key</code></a> - <strong>(Optional)</strong> Red Hat management key.</p>\n</li>',elementType:"li",listDepth:1},{name:"redhat_management_server",description:'<li><p><a name="redhat_management_server"></a><a href="#redhat_management_server"><code>redhat_management_server</code></a> - <strong>(Optional)</strong> Red Hat management server.</p>\n</li>',elementType:"li",listDepth:1},{name:"status",description:'<li><p><a name="status"></a><a href="#status"><code>status</code></a> - <strong>(Optional)</strong> System status (development, testing,\nacceptance, production).</p>\n</li>',elementType:"li",listDepth:1},{name:"template_files",description:'<li><p><a name="template_files"></a><a href="#template_files"><code>template_files</code></a> - <strong>(Optional)</strong> File mappings for built-in\nconfiguration management.</p>\n</li>',elementType:"li",listDepth:1},{name:"template_remote_kickstarts",description:'<li><p><a name="template_remote_kickstarts"></a><a href="#template_remote_kickstarts"><code>template_remote_kickstarts</code></a> - <strong>(Optional)</strong> template remote\nkickstarts.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_auto_boot",description:'<li><p><a name="virt_auto_boot"></a><a href="#virt_auto_boot"><code>virt_auto_boot</code></a> - <strong>(Optional)</strong> Auto boot the VM.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_cpus",description:'<li><p><a name="virt_cpus"></a><a href="#virt_cpus"><code>virt_cpus</code></a> - <strong>(Optional)</strong> Number of virtual CPUs in the VM.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_disk_driver",description:'<li><p><a name="virt_disk_driver"></a><a href="#virt_disk_driver"><code>virt_disk_driver</code></a> - <strong>(Optional)</strong> The on-disk format for the\nvirtualization disk.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_file_size",description:'<li><p><a name="virt_file_size"></a><a href="#virt_file_size"><code>virt_file_size</code></a> - <strong>(Optional)</strong> Virt file size.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_path",description:'<li><p><a name="virt_path"></a><a href="#virt_path"><code>virt_path</code></a> - <strong>(Optional)</strong> Path to the VM.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_pxe_boot",description:'<li><p><a name="virt_pxe_boot"></a><a href="#virt_pxe_boot"><code>virt_pxe_boot</code></a> - <strong>(Optional)</strong> Use PXE to build this VM?</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_ram",description:'<li><p><a name="virt_ram"></a><a href="#virt_ram"><code>virt_ram</code></a> - <strong>(Optional)</strong> The amount of RAM for the VM.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_type",description:'<li><p><a name="virt_type"></a><a href="#virt_type"><code>virt_type</code></a> - <strong>(Optional)</strong> Virtualization technology to use: xenpv,\nxenfv, qemu, kvm, vmware, openvz.</p>\n</li>',elementType:"li",listDepth:1},{name:"",description:"<p>The <code>interface</code> block supports:</p>",elementType:"p"},{name:"name",description:'<li><p><a name="name-1"></a><a href="#name-1"><code>name</code></a> - <strong>(Required)</strong> The device name of the interface. ex: eth0.</p>\n</li>',elementType:"li",listDepth:1},{name:"cnames",description:'<li><p><a name="cnames"></a><a href="#cnames"><code>cnames</code></a> - <strong>(Optional)</strong> Canonical name records.</p>\n</li>',elementType:"li",listDepth:1},{name:"dhcp_tag",description:'<li><p><a name="dhcp_tag"></a><a href="#dhcp_tag"><code>dhcp_tag</code></a> - <strong>(Optional)</strong> DHCP tag.</p>\n</li>',elementType:"li",listDepth:1},{name:"dns_name",description:'<li><p><a name="dns_name"></a><a href="#dns_name"><code>dns_name</code></a> - <strong>(Optional)</strong> DNS name.</p>\n</li>',elementType:"li",listDepth:1},{name:"bonding_opts",description:'<li><p><a name="bonding_opts"></a><a href="#bonding_opts"><code>bonding_opts</code></a> - <strong>(Optional)</strong> Options for bonded interfaces.</p>\n</li>',elementType:"li",listDepth:1},{name:"bridge_opts",description:'<li><p><a name="bridge_opts"></a><a href="#bridge_opts"><code>bridge_opts</code></a> - <strong>(Optional)</strong> Options for bridge interfaces.</p>\n</li>',elementType:"li",listDepth:1},{name:"gateway",description:'<li><p><a name="gateway-1"></a><a href="#gateway-1"><code>gateway</code></a> - <strong>(Optional)</strong> Per-interface gateway.</p>\n</li>',elementType:"li",listDepth:1},{name:"interface_type",description:'<li><p><a name="interface_type"></a><a href="#interface_type"><code>interface_type</code></a> - <strong>(Optional)</strong> The type of interface: na, master,\nslave, bond, bond_slave, bridge, bridge_slave, bonded_bridge_slave.</p>\n</li>',elementType:"li",listDepth:1},{name:"interface_master",description:'<li><p><a name="interface_master"></a><a href="#interface_master"><code>interface_master</code></a> - <strong>(Optional)</strong> The master interface when slave.</p>\n</li>',elementType:"li",listDepth:1},{name:"ip_address",description:'<li><p><a name="ip_address"></a><a href="#ip_address"><code>ip_address</code></a> - <strong>(Optional)</strong> The IP address of the interface.</p>\n</li>',elementType:"li",listDepth:1},{name:"ipv6_address",description:'<li><p><a name="ipv6_address"></a><a href="#ipv6_address"><code>ipv6_address</code></a> - <strong>(Optional)</strong> The IPv6 address of the interface.</p>\n</li>',elementType:"li",listDepth:1},{name:"ipv6_mtu",description:'<li><p><a name="ipv6_mtu"></a><a href="#ipv6_mtu"><code>ipv6_mtu</code></a> - <strong>(Optional)</strong> The MTU of the IPv6 address.</p>\n</li>',elementType:"li",listDepth:1},{name:"ipv6_static_routes",description:'<li><p><a name="ipv6_static_routes"></a><a href="#ipv6_static_routes"><code>ipv6_static_routes</code></a> - <strong>(Optional)</strong> Static routes for the IPv6\ninterface.</p>\n</li>',elementType:"li",listDepth:1},{name:"ipv6_default_gateway",description:'<li><p><a name="ipv6_default_gateway"></a><a href="#ipv6_default_gateway"><code>ipv6_default_gateway</code></a> - <strong>(Optional)</strong> The default gateawy for the\nIPv6 address / interface.</p>\n</li>',elementType:"li",listDepth:1},{name:"mac_address",description:'<li><p><a name="mac_address"></a><a href="#mac_address"><code>mac_address</code></a> - <strong>(Optional)</strong> The MAC address of the interface.</p>\n</li>',elementType:"li",listDepth:1},{name:"management",description:'<li><p><a name="management"></a><a href="#management"><code>management</code></a> - <strong>(Optional)</strong> Whether this interface is a management\ninterface.</p>\n</li>',elementType:"li",listDepth:1},{name:"netmask",description:'<li><p><a name="netmask"></a><a href="#netmask"><code>netmask</code></a> - <strong>(Optional)</strong> The IPv4 netmask of the interface.</p>\n</li>',elementType:"li",listDepth:1},{name:"static",description:'<li><p><a name="static"></a><a href="#static"><code>static</code></a> - <strong>(Optional)</strong> Whether the interface should be static or\nDHCP.</p>\n</li>',elementType:"li",listDepth:1},{name:"static_routes",description:'<li><p><a name="static_routes"></a><a href="#static_routes"><code>static_routes</code></a> - <strong>(Optional)</strong> Static routes for the interface.</p>\n</li>',elementType:"li",listDepth:1},{name:"virt_bridge",description:'<li><p><a name="virt_bridge"></a><a href="#virt_bridge"><code>virt_bridge</code></a> - <strong>(Optional)</strong> The virtual bridge to attach to.</p>\n</li>',elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/cobbler/r/system.html",docType:""}]}}]);