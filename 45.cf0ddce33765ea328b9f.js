(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{j4eZ:function(e){e.exports=[{id:1,type:"  gridscale_ipv4",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"name",description:'<li><p><a name="name"></a><a href="#name"><code>name</code></a> - <strong>(Optional)</strong> The human-readable name of the object. It supports the full UTF-8 charset, with a maximum of 64 characters.</p>\n</li>',elementType:"li",listDepth:1},{name:"location_uuid",description:'<li><p><a name="location_uuid"></a><a href="#location_uuid"><code>location_uuid</code></a> - <strong>(Optional)</strong> Helps to identify which datacenter an object belongs to. Frankfurt is the default.</p>\n</li>',elementType:"li",listDepth:1},{name:"failover",description:'<li><p><a name="failover"></a><a href="#failover"><code>failover</code></a> - <strong>(Optional)</strong> Sets failover mode for this IP. If true, then this IP is no longer available for DHCP and can no longer be related to any server.</p>\n</li>',elementType:"li",listDepth:1},{name:"reverse_dns",description:'<li><p><a name="reverse_dns"></a><a href="#reverse_dns"><code>reverse_dns</code></a> - <strong>(Optional)</strong> Defines the reverse DNS entry for the IP Address (PTR Resource Record).</p>\n</li>',elementType:"li",listDepth:1},{name:"labels",description:'<li><p><a name="labels"></a><a href="#labels"><code>labels</code></a> - <strong>(Optional)</strong> List of labels in the format [ "label1", "label2" ].</p>\n</li>',elementType:"li",listDepth:1},{name:"attributes",description:'<h2 id="attributes">\n<a class="anchor" href="#attributes" name="attributes">\xbb</a>\n  Attributes\n</h2>',elementType:"h2"},{name:"",description:"<p>This resource exports the following attributes:</p>",elementType:"p"},{name:"name",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"location_uuid",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"failover",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"reverse_dns",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"labels",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"ip",description:"Defines the IP Address.\n",elementType:"li",listDepth:1},{name:"prefix",description:"The network address and the subnet.\n",elementType:"li",listDepth:1},{name:"status",description:"status indicates the status of the object.\n",elementType:"li",listDepth:1},{name:"create_time",description:"The time the object was created.\n",elementType:"li",listDepth:1},{name:"change_time",description:"Defines the date and time of the last object change.\n",elementType:"li",listDepth:1},{name:"location_country",description:"Formatted by the 2 digit country code (ISO 3166-2) of the host country.\n",elementType:"li",listDepth:1},{name:"location_iata",description:"Uses IATA airport code, which works as a location identifier.\n",elementType:"li",listDepth:1},{name:"location_name",description:"The location name.\n",elementType:"li",listDepth:1},{name:"delete_block",description:"Defines if the object is administratively blocked. If true, it can not be deleted by the user.\n",elementType:"li",listDepth:1},{name:"usage_in_minutes",description:"The amount of minutes the IP address has been in use.\n",elementType:"li",listDepth:1},{name:"current_price",description:"The price for the current period since the last bill.\n",elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/gridscale/r/ipv4.html",docType:""},{id:2,type:"  gridscale_ipv6",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"name",description:'<li><p><a name="name"></a><a href="#name"><code>name</code></a> - <strong>(Optional)</strong> The human-readable name of the object. It supports the full UTF-8 charset, with a maximum of 66 characters.</p>\n</li>',elementType:"li",listDepth:1},{name:"location_uuid",description:'<li><p><a name="location_uuid"></a><a href="#location_uuid"><code>location_uuid</code></a> - <strong>(Optional)</strong> Helps to identify which datacenter an object belongs to. Frankfurt is the default.</p>\n</li>',elementType:"li",listDepth:1},{name:"failover",description:'<li><p><a name="failover"></a><a href="#failover"><code>failover</code></a> - <strong>(Optional)</strong> Sets failover mode for this IP. If true, then this IP is no longer available for DHCP and can no longer be related to any server.</p>\n</li>',elementType:"li",listDepth:1},{name:"reverse_dns",description:'<li><p><a name="reverse_dns"></a><a href="#reverse_dns"><code>reverse_dns</code></a> - <strong>(Optional)</strong> Defines the reverse DNS entry for the IP Address (PTR Resource Record).</p>\n</li>',elementType:"li",listDepth:1},{name:"labels",description:'<li><p><a name="labels"></a><a href="#labels"><code>labels</code></a> - <strong>(Optional)</strong> List of labels in the format [ "label1", "label2" ].</p>\n</li>',elementType:"li",listDepth:1},{name:"attributes",description:'<h2 id="attributes">\n<a class="anchor" href="#attributes" name="attributes">\xbb</a>\n  Attributes\n</h2>',elementType:"h2"},{name:"",description:"<p>This resource exports the following attributes:</p>",elementType:"p"},{name:"name",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"location_uuid",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"failover",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"reverse_dns",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"labels",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"ip",description:"Defines the IP Address.\n",elementType:"li",listDepth:1},{name:"prefix",description:"The network address and the subnet.\n",elementType:"li",listDepth:1},{name:"status",description:"status indicates the status of the object.\n",elementType:"li",listDepth:1},{name:"create_time",description:"The time the object was created.\n",elementType:"li",listDepth:1},{name:"change_time",description:"Defines the date and time of the last object change.\n",elementType:"li",listDepth:1},{name:"location_country",description:"Formatted by the 2 digit country code (ISO 3166-2) of the host country.\n",elementType:"li",listDepth:1},{name:"location_iata",description:"Uses IATA airport code, which works as a location identifier.\n",elementType:"li",listDepth:1},{name:"location_name",description:"The location name.\n",elementType:"li",listDepth:1},{name:"delete_block",description:"Defines if the object is administratively blocked. If true, it can not be deleted by the user.\n",elementType:"li",listDepth:1},{name:"usage_in_minutes",description:"The amount of minutes the IP address has been in use.\n",elementType:"li",listDepth:1},{name:"current_price",description:"The price for the current period since the last bill.\n",elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/gridscale/r/ipv6.html",docType:""},{id:3,type:"  gridscale_network",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"name",description:'<li><p><a name="name"></a><a href="#name"><code>name</code></a> - <strong>(Required)</strong> The human-readable name of the object. It supports the full UTF-8 charset, with a maximum of 64 characters.</p>\n</li>',elementType:"li",listDepth:1},{name:"location_uuid",description:'<li><p><a name="location_uuid"></a><a href="#location_uuid"><code>location_uuid</code></a> - <strong>(Optional)</strong> Helps to identify which datacenter an object belongs to. Frankfurt is the default.</p>\n</li>',elementType:"li",listDepth:1},{name:"l2security",description:'<li><p><a name="l2security"></a><a href="#l2security"><code>l2security</code></a> - <strong>(Optional)</strong> Defines information about MAC spoofing protection (filters layer2 and ARP traffic based on MAC source). It can only be (de-)activated on a private network - the public network always has l2security enabled. It will be true if the network is public, and false if the network is private.</p>\n</li>',elementType:"li",listDepth:1},{name:"labels",description:'<li><p><a name="labels"></a><a href="#labels"><code>labels</code></a> - <strong>(Optional)</strong> List of labels in the format [ "label1", "label2" ].</p>\n</li>',elementType:"li",listDepth:1},{name:"attributes",description:'<h2 id="attributes">\n<a class="anchor" href="#attributes" name="attributes">\xbb</a>\n  Attributes\n</h2>',elementType:"h2"},{name:"",description:"<p>This resource exports the following attributes:</p>",elementType:"p"},{name:"name",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"location_uuid",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"l2security",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"labels",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"status",description:"status indicates the status of the object.\n",elementType:"li",listDepth:1},{name:"create_time",description:"The time the object was created.\n",elementType:"li",listDepth:1},{name:"change_time",description:"Defines the date and time of the last object change.\n",elementType:"li",listDepth:1},{name:"network_type",description:"The type of this network, can be mpls, breakout or network.\n",elementType:"li",listDepth:1},{name:"location_country",description:"Formatted by the 2 digit country code (ISO 3166-2) of the host country.\n",elementType:"li",listDepth:1},{name:"location_iata",description:"Uses IATA airport code, which works as a location identifier.\n",elementType:"li",listDepth:1},{name:"location_name",description:"The location name.\n",elementType:"li",listDepth:1},{name:"public_net",description:"Is the network public or not.\n",elementType:"li",listDepth:1},{name:"delete_block",description:"If deleting this network is allowed.\n",elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/gridscale/r/network.html",docType:""},{id:4,type:"  gridscale_server",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"name",description:'<li><p><a name="name"></a><a href="#name"><code>name</code></a> - <strong>(Required)</strong> The human-readable name of the object. It supports the full UTF-8 charset, with a maximum of 64 characters.</p>\n</li>',elementType:"li",listDepth:1},{name:"cores",description:'<li><p><a name="cores"></a><a href="#cores"><code>cores</code></a> - <strong>(Required)</strong> The number of server cores.</p>\n</li>',elementType:"li",listDepth:1},{name:"memory",description:'<li><p><a name="memory"></a><a href="#memory"><code>memory</code></a> - <strong>(Required)</strong> The amount of server memory in GB.</p>\n</li>',elementType:"li",listDepth:1},{name:"location_uuid",description:'<li><p><a name="location_uuid"></a><a href="#location_uuid"><code>location_uuid</code></a> - <strong>(Optional)</strong> Helps to identify which datacenter an object belongs to. Frankfurt is the default.</p>\n</li>',elementType:"li",listDepth:1},{name:"labels",description:'<li><p><a name="labels"></a><a href="#labels"><code>labels</code></a> - <strong>(Optional)</strong> List of labels in the format [ "label1", "label2" ].</p>\n</li>',elementType:"li",listDepth:1},{name:"hardware_profile",description:'<li><p><a name="hardware_profile"></a><a href="#hardware_profile"><code>hardware_profile</code></a> - <strong>(Optional)</strong> The hardware profile of the Server. Options are default, legacy, nested, cisco_csr, sophos_utm, f5_bigip and q35 at the moment of writing. Check the</p>\n</li>',elementType:"li",listDepth:1},{name:"ipv4",description:'<li><p><a name="ipv4"></a><a href="#ipv4"><code>ipv4</code></a> - <strong>(Optional)</strong> The UUID of the IPv4 address of the server. When this option is set, the server will automatically be connected to the public network, giving it access to the internet.</p>\n</li>',elementType:"li",listDepth:1},{name:"ipv6",description:'<li><p><a name="ipv6"></a><a href="#ipv6"><code>ipv6</code></a> - <strong>(Optional)</strong> The UUID of the IPv6 address of the server. When this option is set, the server will automatically be connected to the public network, giving it access to the internet.</p>\n</li>',elementType:"li",listDepth:1},{name:"isoimage",description:'<li><p><a name="isoimage"></a><a href="#isoimage"><code>isoimage</code></a> - <strong>(Optional)</strong> The UUID of an ISO image in gridscale. The server will automatically boot from the ISO if one was added. The UUIDs of ISO images can be found in <a href="https://my.gridscale.io/Expert/ISOImage">the expert panel</a>.</p>\n</li>',elementType:"li",listDepth:1},{name:"power",description:'<li><p><a name="power"></a><a href="#power"><code>power</code></a> - <strong>(Optional)</strong> The power state of the server. Set this to true to will boot the server, false will shut it down.</p>\n</li>',elementType:"li",listDepth:1},{name:"availability_zone",description:'<li><p><a name="availability_zone"></a><a href="#availability_zone"><code>availability_zone</code></a> - <strong>(Optional)</strong> Defines which Availability-Zone the Server is placed.</p>\n</li>',elementType:"li",listDepth:1},{name:"list description",description:'<p><a name="storage"></a><a href="#storage"><code>storage</code></a> - (Optional) Connects a storage to the server.</p>',elementType:"p"},{name:"object_uuid",description:"<strong>(Required)</strong> The object UUID or id of the storage.\n",elementType:"li",listDepth:2},{name:"bootdevice",description:"<strong>(Optional)</strong> Make this storage the boot device. <strong>This can only be set for one storage per server!</strong>\n",elementType:"li",listDepth:2},{name:"list description",description:'<p><a name="storage-1"></a><a href="#storage-1"><code>storage</code></a> - (Optional) Connects a storage to the server.</p>',elementType:"p"},{name:"object_uuid",description:"<strong>(Required)</strong> The object UUID or id of the network.\n",elementType:"li",listDepth:2},{name:"bootdevice",description:"<strong>(Optional)</strong> Make this network the boot device. This can only be set for one network.\n",elementType:"li",listDepth:2},{name:"attributes",description:'<h2 id="attributes">\n<a class="anchor" href="#attributes" name="attributes">\xbb</a>\n  Attributes\n</h2>',elementType:"h2"},{name:"",description:"<p>This resource exports the following attributes:</p>",elementType:"p"},{name:"name",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"cores",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"memory",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"location_uuid",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"labels",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"hardware_profile",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"storages",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"networks",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"ipv4",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"ipv6",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"power",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"availability_zone",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"status",description:"status indicates the status of the object.\n",elementType:"li",listDepth:1},{name:"create_time",description:"The time the object was created.\n",elementType:"li",listDepth:1},{name:"change_time",description:"Defines the date and time of the last object change.\n",elementType:"li",listDepth:1},{name:"location_country",description:"Formatted by the 2 digit country code (ISO 3166-2) of the host country.\n",elementType:"li",listDepth:1},{name:"location_iata",description:"Uses IATA airport code, which works as a location identifier.\n",elementType:"li",listDepth:1},{name:"location_name",description:"The location name.\n",elementType:"li",listDepth:1},{name:"current_price",description:"The price for the current period since the last bill.\n",elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/gridscale/r/server.html",docType:""},{id:5,type:"  gridscale_sshkey",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"name",description:'<li><p><a name="name"></a><a href="#name"><code>name</code></a> - <strong>(Required)</strong> The human-readable name of the object. It supports the full UTF-8 charset, with a maximum of 64 characters.</p>\n</li>',elementType:"li",listDepth:1},{name:"sshkey",description:'<li><p><a name="sshkey"></a><a href="#sshkey"><code>sshkey</code></a> - <strong>(Required)</strong> This is the OpenSSH public key string (all key types are supported =&gt; ed25519, ecdsa, dsa, rsa, rsa1).</p>\n</li>',elementType:"li",listDepth:1},{name:"labels",description:'<li><p><a name="labels"></a><a href="#labels"><code>labels</code></a> - <strong>(Optional)</strong> List of labels in the format [ "label1", "label2" ].</p>\n</li>',elementType:"li",listDepth:1},{name:"attributes",description:'<h2 id="attributes">\n<a class="anchor" href="#attributes" name="attributes">\xbb</a>\n  Attributes\n</h2>',elementType:"h2"},{name:"",description:"<p>This resource exports the following attributes:</p>",elementType:"p"},{name:"name",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"sshkey",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"labels",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"status",description:"status indicates the status of the object.\n",elementType:"li",listDepth:1},{name:"create_time",description:"The time the object was created.\n",elementType:"li",listDepth:1},{name:"change_time",description:"Defines the date and time of the last object change.\n",elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/gridscale/r/sshkey.html",docType:""},{id:6,type:"  gridscale_storage",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"name",description:'<li><p><a name="name"></a><a href="#name"><code>name</code></a> - <strong>(Required)</strong> The human-readable name of the object. It supports the full UTF-8 charset, with a maximum of 64 characters.</p>\n</li>',elementType:"li",listDepth:1},{name:"capacity",description:'<li><p><a name="capacity"></a><a href="#capacity"><code>capacity</code></a> - <strong>(Required)</strong> required (integer - minimum: 1 - maximum: 4096).</p>\n</li>',elementType:"li",listDepth:1},{name:"storage_type",description:'<li><p><a name="storage_type"></a><a href="#storage_type"><code>storage_type</code></a> - <strong>(Optional)</strong> (one of storage, storage_high, storage_insane).</p>\n</li>',elementType:"li",listDepth:1},{name:"location_uuid",description:'<li><p><a name="location_uuid"></a><a href="#location_uuid"><code>location_uuid</code></a> - <strong>(Optional)</strong> Helps to identify which datacenter an object belongs to. Frankfurt is the default.</p>\n</li>',elementType:"li",listDepth:1},{name:"labels",description:'<li><p><a name="labels"></a><a href="#labels"><code>labels</code></a> - <strong>(Optional)</strong> List of labels in the format [ "label1", "label2" ].</p>\n</li>',elementType:"li",listDepth:1},{name:"list description",description:'<p><a name="template"></a><a href="#template"><code>template</code></a> - (Optional) List of labels in the format [ "label1", "label2" ].</p>',elementType:"p"},{name:"template_uuid",description:'<strong>(Required)</strong> The UUID of a template. This can be found in the <a href="https://my.gridscale.io/Expert/Template">expert panel</a> by clicking more on the template or by using a gridscale_tempalte datasource.\n',elementType:"li",listDepth:2},{name:"password",description:"<strong>(Optional)</strong> The root (Linux) or Administrator (Windows) password to set for the installed storage. Valid only for public templates. The password has to be either plaintext or a crypt string (modular crypt format",elementType:"li",listDepth:2},{name:"password_type",description:"<strong>(Optional)</strong> (one of plain, crypt) Required if password is set (ignored for private templates and public Windows templates).\n",elementType:"li",listDepth:2},{name:"sshkeys",description:"<strong>(Optional)</strong> (array of any",elementType:"li",listDepth:2},{name:"hostname",description:"<strong>(Optional)</strong> The hostname of the installed server (ignored for private templates and public windows templates).\n",elementType:"li",listDepth:2},{name:"",description:'<div class="alert alert-warning" role="alert">\n<p><strong>Note</strong> When using official templates using either a password and password_type or at least one SSH public key is required. This is not the case when using custom templates. For official templates password authentication for SSH is enabled by default, so be sure to pick a strong password.</p>\n</div>',elementType:"div"},{name:"attributes",description:'<h2 id="attributes">\n<a class="anchor" href="#attributes" name="attributes">\xbb</a>\n  Attributes\n</h2>',elementType:"h2"},{name:"",description:"<p>This resource exports the following attributes:</p>",elementType:"p"},{name:"name",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"capacity",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"storage_type",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"location_uuid",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"labels",description:"See Argument Reference above.\n",elementType:"li",listDepth:1},{name:"status",description:"status indicates the status of the object.\n",elementType:"li",listDepth:1},{name:"create_time",description:"The time the object was created.\n",elementType:"li",listDepth:1},{name:"change_time",description:"Defines the date and time of the last object change.\n",elementType:"li",listDepth:1},{name:"location_country",description:"Formatted by the 2 digit country code (ISO 3166-2) of the host country.\n",elementType:"li",listDepth:1},{name:"location_iata",description:"Uses IATA airport code, which works as a location identifier.\n",elementType:"li",listDepth:1},{name:"location_name",description:"The location name.\n",elementType:"li",listDepth:1},{name:"license_product_no",description:"If a template has been used that requires a license key (e.g. Windows Servers) this shows the product_no of the license (see the /prices endpoint for more details).\n",elementType:"li",listDepth:1},{name:"last_used_template",description:"Indicates the UUID of the last used template on this storage (inherited from snapshots).\n",elementType:"li",listDepth:1},{name:"usage_in_minutes",description:"The amount of minutes the IP address has been in use.\n",elementType:"li",listDepth:1},{name:"current_price",description:"The price for the current period since the last bill.\n",elementType:"li",listDepth:1}],docsUrl:"https://www.terraform.io/docs/providers/gridscale/r/storage.html",docType:""}]}}]);