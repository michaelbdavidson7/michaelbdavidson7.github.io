(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{x7Ew:function(e){e.exports=[{id:1,type:"pureport_network",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"name",description:"<strong>(Required)</strong> The name used for the Network.\n",elementType:"li",listDepth:1},{name:"account_href",description:"<strong>(Required)</strong> HREF for the Account associated with the Network.\n",elementType:"li",listDepth:1},{name:"",description:"<hr/>",elementType:"hr"},{name:"description",description:"<strong>(Optional)</strong> The description for the Network.\n",elementType:"li",listDepth:1},{name:"tags",description:"<strong>(Optional)</strong> A dictionary of user defined key/value pairs to associate with this resource.\n",elementType:"li",listDepth:1},{name:"attributes",description:'<h2 id="attributes">\n<a class="anchor" href="#attributes" name="attributes">\xbb</a>\n  Attributes\n</h2>',elementType:"h2"},{name:"href",description:"The HREF to reference this Network.\n",elementType:"li",listDepth:1},{name:"",description:'<p>The Pureport Guide, <a href="#"></a></p>',elementType:"p"}],docsUrl:"https://www.terraform.io/docs/providers/pureport/r/network.html",docType:""},{id:2,type:"pureport_aws_connection",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"name",description:"<strong>(Required)</strong> The name for the connection\n",elementType:"li",listDepth:1},{name:"location_href",description:"<strong>(Required)</strong> HREF for the Pureport Location to attach the connection.\n",elementType:"li",listDepth:1},{name:"network_href",description:"<strong>(Required)</strong> HREF for the network to associate the connection.\n",elementType:"li",listDepth:1},{name:"speed",description:"<strong>(Required)</strong> The maximum QoS for this connection. Valid values are 50, 100, 200, 300, 400, 500, 1000, 10000 in Mbps.\n",elementType:"li",listDepth:1},{name:"aws_account_id",description:"<strong>(Required)</strong> Your AWS Account ID.\n",elementType:"li",listDepth:1},{name:"aws_region",description:"<strong>(Required)</strong> The AWS region to create your connection.\n",elementType:"li",listDepth:1},{name:"",description:"<hr/>",elementType:"hr"},{name:"description",description:"<strong>(Optional)</strong> The description for the connection.\n",elementType:"li",listDepth:1},{name:"list description",description:'<a name="customer_networks"></a>',elementType:"p"},{name:"name",description:"The name for the network.\n",elementType:"li",listDepth:2},{name:"address",description:"The CIDR block for the network\n",elementType:"li",listDepth:2},{name:"list description",description:'<a name="nat_config"></a>',elementType:"p"},{name:"enabled",description:"<strong>(Required)</strong> Is NAT enabled for this connection.\n",elementType:"li",listDepth:2},{name:"mappings",description:'<strong>(Optional)</strong> List of NAT mapped CIDR address\n\n<ul>\n<li><a name="native_cidr"></a><a href="#native_cidr"><code>native_cidr</code></a>',elementType:"li",listDepth:2},{name:"native_cidr",description:"<strong>(Required)</strong> The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"native_cidr",description:"<strong>(Required)</strong> The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"billing_term",description:"<strong>(Optional)</strong> The billing term for the connection: (Currently only HOURLY is supported.)\n",elementType:"li",listDepth:1},{name:"high_availability",description:"<strong>(Optional)</strong> Whether a redundant gateway is/should be provisioned for this connection.\n",elementType:"li",listDepth:1},{name:"list description",description:'<a name="peering_type"></a>',elementType:"p"},{name:"PRIVATE (Default)\n",description:"<li>PRIVATE (Default)\n</li>",elementType:"li",listDepth:2},{name:"PUBLIC\n",description:"<li>PUBLIC\n</li>",elementType:"li",listDepth:2},{name:"cloud_service_hrefs",description:"<strong>(Optional)</strong> When PUBLIC peering is configured, a list of HREFs for the Public peering services to which we want access.\n",elementType:"li",listDepth:1},{name:"tags",description:"<strong>(Optional)</strong> A dictionary of user defined key/value pairs to associate with this resource.\n",elementType:"li",listDepth:1},{name:"attributes",description:'<h2 id="attributes">\n<a class="anchor" href="#attributes" name="attributes">\xbb</a>\n  Attributes\n</h2>',elementType:"h2"},{name:"list description",description:'<p><a name="nat_config-1"></a><a href="#nat_config-1"><code>nat_config</code></a> - The Network Address Translation configuration for the connection.</p>',elementType:"p"},{name:"enabled",description:"Is NAT enabled for this connection.\n",elementType:"li",listDepth:2},{name:"mappings",description:'List of NAT mapped CIDR address\n\n<ul>\n<li><a name="native_cidr-1"></a><a href="#native_cidr-1"><code>native_cidr</code></a>',elementType:"li",listDepth:2},{name:"native_cidr",description:"The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"nat_cidr",description:"The CIDR block use for NAT to the associated subnet.\n",elementType:"li",listDepth:2},{name:"blocks",description:"List of reserved blocks for NAT.\n",elementType:"li",listDepth:2},{name:"pnat_cidr",description:"CIDR use for PNAT between connections.\n",elementType:"li",listDepth:2},{name:"native_cidr",description:"The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"nat_cidr",description:"The CIDR block use for NAT to the associated subnet.\n",elementType:"li",listDepth:2},{name:"list description",description:'<p><a name="gateways"></a><a href="#gateways"><code>gateways</code></a> - List of cloud gateways and their configurations.</p>',elementType:"p"},{name:"name",description:"The name of the cloud gateway.\n",elementType:"li",listDepth:2},{name:"description",description:"The description of the cloud gateway.\n",elementType:"li",listDepth:2},{name:"availability_domain",description:"The availability domain of the cloud gateway. The valid values are <code>PRIMARY</code>, <code>SECONDARY</code>.\n",elementType:"li",listDepth:2},{name:"customer_asn",description:"The customer ASN used for BGP Peering.\n",elementType:"li",listDepth:2},{name:"customer_ip",description:"The assigned IP address to the customer side of the BGP Config.\n",elementType:"li",listDepth:2},{name:"pureport_asn",description:"The Pureport ASN used for BGP Peering.\n",elementType:"li",listDepth:2},{name:"pureport_ip",description:" The assigned IP address to the Pureport side of the BGP Config.\n",elementType:"li",listDepth:2},{name:"bgp_password",description:"The autogenerated BGP password used for authentication.\n",elementType:"li",listDepth:2},{name:"peering_subnet",description:"The BGP Config subnet assigned to establish BGP peering.\n",elementType:"li",listDepth:2},{name:"public_nat_ip",description:"The public facing IP Address for NAT used by this connection.\n",elementType:"li",listDepth:2},{name:"remote_id",description:"The ID of the AWS Direct Connect Connection.\n",elementType:"li",listDepth:2},{name:"vlan",description:"The VLAN id for the connection to cloud services.\n",elementType:"li",listDepth:2},{name:"",description:'<p>The Pureport Guide, <a href="#"></a></p>',elementType:"p"}],docsUrl:"https://www.terraform.io/docs/providers/pureport/r/aws_connection.html",docType:""},{id:3,type:"pureport_azure_connection",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"name",description:"<strong>(Required)</strong> The name for the connection\n",elementType:"li",listDepth:1},{name:"location_href",description:"<strong>(Required)</strong> HREF for the Pureport Location to attach the connection.\n",elementType:"li",listDepth:1},{name:"network_href",description:"<strong>(Required)</strong> HREF for the network to associate the connection.\n",elementType:"li",listDepth:1},{name:"speed",description:"<strong>(Required)</strong> The maximum QoS for this connection. Valid values are 50, 100, 200, 300, 400, 500, 1000, 10000 in Mbps.\n",elementType:"li",listDepth:1},{name:"service_key",description:"<strong>(Required)</strong> The Azure service key for the Express Route Circuit.\n",elementType:"li",listDepth:1},{name:"",description:"<hr/>",elementType:"hr"},{name:"description",description:"<strong>(Optional)</strong> The description for the connection.\n",elementType:"li",listDepth:1},{name:"list description",description:'<a name="customer_networks"></a>',elementType:"p"},{name:"name",description:"The name for the network.\n",elementType:"li",listDepth:2},{name:"address",description:"The CIDR block for the network\n",elementType:"li",listDepth:2},{name:"list description",description:'<a name="nat_config"></a>',elementType:"p"},{name:"enabled",description:"<strong>(Required)</strong> Is NAT enabled for this connection.\n",elementType:"li",listDepth:2},{name:"mappings",description:'<strong>(Optional)</strong> List of NAT mapped CIDR address\n\n<ul>\n<li><a name="native_cidr"></a><a href="#native_cidr"><code>native_cidr</code></a>',elementType:"li",listDepth:2},{name:"native_cidr",description:"<strong>(Required)</strong> The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"native_cidr",description:"<strong>(Required)</strong> The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"billing_term",description:"<strong>(Optional)</strong> The billing term for the connection: (Currently only HOURLY is supported.)\n",elementType:"li",listDepth:1},{name:"high_availability",description:"<strong>(Optional)</strong> Whether a redundant gateway is/should be provisioned for this connection.\n",elementType:"li",listDepth:1},{name:"list description",description:'<a name="peering_type"></a>',elementType:"p"},{name:"PRIVATE (Default)\n",description:"<li>PRIVATE (Default)\n</li>",elementType:"li",listDepth:2},{name:"PUBLIC\n",description:"<li>PUBLIC\n</li>",elementType:"li",listDepth:2},{name:"tags",description:"<strong>(Optional)</strong> A dictionary of user defined key/value pairs to associate with this resource.\n",elementType:"li",listDepth:1},{name:"attributes",description:'<h2 id="attributes">\n<a class="anchor" href="#attributes" name="attributes">\xbb</a>\n  Attributes\n</h2>',elementType:"h2"},{name:"list description",description:'<p><a name="nat_config-1"></a><a href="#nat_config-1"><code>nat_config</code></a> - The Network Address Translation configuration for the connection.</p>',elementType:"p"},{name:"enabled",description:"Is NAT enabled for this connection.\n",elementType:"li",listDepth:2},{name:"mappings",description:'List of NAT mapped CIDR address\n\n<ul>\n<li><a name="native_cidr-1"></a><a href="#native_cidr-1"><code>native_cidr</code></a>',elementType:"li",listDepth:2},{name:"native_cidr",description:"<strong>(Required)</strong> The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"nat_cidr",description:"The CIDR block use for NAT to the associated subnet.\n",elementType:"li",listDepth:2},{name:"blocks",description:"List of reserved blocks for NAT.\n",elementType:"li",listDepth:2},{name:"pnat_cidr",description:"CIDR use for PNAT between connections.\n",elementType:"li",listDepth:2},{name:"native_cidr",description:"<strong>(Required)</strong> The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"nat_cidr",description:"The CIDR block use for NAT to the associated subnet.\n",elementType:"li",listDepth:2},{name:"list description",description:'<p><a name="gateways"></a><a href="#gateways"><code>gateways</code></a> - List of cloud gateways and their configurations.</p>',elementType:"p"},{name:"name",description:"The name of the cloud gateway.\n",elementType:"li",listDepth:2},{name:"description",description:"The description of the cloud gateway.\n",elementType:"li",listDepth:2},{name:"availability_domain",description:"The availability domain of the cloud gateway. The valid values are <code>PRIMARY</code>, <code>SECONDARY</code>.\n",elementType:"li",listDepth:2},{name:"customer_asn",description:"The customer ASN used for BGP Peering.\n",elementType:"li",listDepth:2},{name:"customer_ip",description:"The assigned IP address to the customer side of the BGP Config.\n",elementType:"li",listDepth:2},{name:"pureport_asn",description:"The Pureport ASN used for BGP Peering.\n",elementType:"li",listDepth:2},{name:"pureport_ip",description:" The assigned IP address to the Pureport side of the BGP Config.\n",elementType:"li",listDepth:2},{name:"bgp_password",description:"The autogenerated BGP password used for authentication.\n",elementType:"li",listDepth:2},{name:"peering_subnet",description:"The BGP Config subnet assigned to establish BGP peering.\n",elementType:"li",listDepth:2},{name:"public_nat_ip",description:"The public facing IP Address for NAT used by this connection.\n",elementType:"li",listDepth:2},{name:"remote_id",description:"The ID of the Azure Express Route.\n",elementType:"li",listDepth:2},{name:"vlan",description:"The VLAN id for the connection to cloud services.\n",elementType:"li",listDepth:2},{name:"",description:'<p>The Pureport Guide, <a href="#"></a></p>',elementType:"p"}],docsUrl:"https://www.terraform.io/docs/providers/pureport/r/azure_connection.html",docType:""},{id:4,type:"pureport_google_cloud_connection",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"name",description:"<strong>(Required)</strong> The name for the connection\n",elementType:"li",listDepth:1},{name:"location_href",description:"<strong>(Required)</strong> HREF for the Pureport Location to attach the connection.\n",elementType:"li",listDepth:1},{name:"network_href",description:"<strong>(Required)</strong> HREF for the network to associate the connection.\n",elementType:"li",listDepth:1},{name:"speed",description:"<strong>(Required)</strong> The maximum QoS for this connection. Valid values are 50, 100, 200, 300, 400, 500, 1000, 10000 in Mbps.\n",elementType:"li",listDepth:1},{name:"primary_pairing_key",description:"<strong>(Required)</strong> The pairing key for the primary Google Cloud Interconnect Attachment.\n",elementType:"li",listDepth:1},{name:"",description:"<hr/>",elementType:"hr"},{name:"description",description:"<strong>(Optional)</strong> The description for the connection.\n",elementType:"li",listDepth:1},{name:"list description",description:'<a name="customer_networks"></a>',elementType:"p"},{name:"name",description:"The name for the network.\n",elementType:"li",listDepth:2},{name:"address",description:"The CIDR block for the network\n",elementType:"li",listDepth:2},{name:"list description",description:'<a name="nat_config"></a>',elementType:"p"},{name:"enabled",description:"<strong>(Required)</strong> Is NAT enabled for this connection.\n",elementType:"li",listDepth:2},{name:"mappings",description:'<strong>(Optional)</strong> List of NAT mapped CIDR address\n\n<ul>\n<li><a name="native_cidr"></a><a href="#native_cidr"><code>native_cidr</code></a>',elementType:"li",listDepth:2},{name:"native_cidr",description:"<strong>(Required)</strong> The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"native_cidr",description:"<strong>(Required)</strong> The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"billing_term",description:"<strong>(Optional)</strong> The billing term for the connection: (Currently only HOURLY is supported.)\n",elementType:"li",listDepth:1},{name:"high_availability",description:"<strong>(Optional)</strong> Whether a redundant gateway is/should be provisioned for this connection.\n",elementType:"li",listDepth:1},{name:"secodary_pairing_key",description:"<strong>(Optional)</strong> If HA is enabled, the pairing key for the backup Google Cloud Interconnect Attachment.\n",elementType:"li",listDepth:1},{name:"tags",description:"<strong>(Optional)</strong> A dictionary of user defined key/value pairs to associate with this resource.\n",elementType:"li",listDepth:1},{name:"attributes",description:'<h2 id="attributes">\n<a class="anchor" href="#attributes" name="attributes">\xbb</a>\n  Attributes\n</h2>',elementType:"h2"},{name:"list description",description:'<p><a name="nat_config-1"></a><a href="#nat_config-1"><code>nat_config</code></a> - The Network Address Translation configuration for the connection.</p>',elementType:"p"},{name:"enabled",description:"Is NAT enabled for this connection.\n",elementType:"li",listDepth:2},{name:"mappings",description:'List of NAT mapped CIDR address\n\n<ul>\n<li><a name="native_cidr-1"></a><a href="#native_cidr-1"><code>native_cidr</code></a>',elementType:"li",listDepth:2},{name:"native_cidr",description:"<strong>(Required)</strong> The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"nat_cidr",description:"The CIDR block use for NAT to the associated subnet.\n",elementType:"li",listDepth:2},{name:"blocks",description:"List of reserved blocks for NAT.\n",elementType:"li",listDepth:2},{name:"pnat_cidr",description:"CIDR use for PNAT between connections.\n",elementType:"li",listDepth:2},{name:"native_cidr",description:"<strong>(Required)</strong> The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"nat_cidr",description:"The CIDR block use for NAT to the associated subnet.\n",elementType:"li",listDepth:2},{name:"list description",description:'<p><a name="gateways"></a><a href="#gateways"><code>gateways</code></a> - List of cloud gateways and their configurations.</p>',elementType:"p"},{name:"name",description:"The name of the cloud gateway.\n",elementType:"li",listDepth:2},{name:"description",description:"The description of the cloud gateway.\n",elementType:"li",listDepth:2},{name:"availability_domain",description:"The availability domain of the cloud gateway. The valid values are <code>PRIMARY</code>, <code>SECONDARY</code>.\n",elementType:"li",listDepth:2},{name:"customer_asn",description:"The customer ASN used for BGP Peering.\n",elementType:"li",listDepth:2},{name:"customer_ip",description:"The assigned IP address to the customer side of the BGP Config.\n",elementType:"li",listDepth:2},{name:"pureport_asn",description:"The Pureport ASN used for BGP Peering.\n",elementType:"li",listDepth:2},{name:"pureport_ip",description:" The assigned IP address to the Pureport side of the BGP Config.\n",elementType:"li",listDepth:2},{name:"bgp_password",description:"The autogenerated BGP password used for authentication.\n",elementType:"li",listDepth:2},{name:"peering_subnet",description:"The BGP Config subnet assigned to establish BGP peering.\n",elementType:"li",listDepth:2},{name:"public_nat_ip",description:"N/A\n",elementType:"li",listDepth:2},{name:"remote_id",description:"The ID of the Google Cloud Interconnect.\n",elementType:"li",listDepth:2},{name:"remote_id",description:"The ID of the Google Cloud Interconnect.\n",elementType:"li",listDepth:2},{name:"vlan",description:"The VLAN id for the connection to cloud services.\n",elementType:"li",listDepth:2},{name:"",description:'<p>The Pureport Guide, <a href="#"></a></p>',elementType:"p"}],docsUrl:"https://www.terraform.io/docs/providers/pureport/r/google_cloud_connection.html",docType:""},{id:5,type:"pureport_site_vpn_connection",properties:[{name:"",description:"<p>The following arguments are supported:</p>",elementType:"p"},{name:"auth_type",description:"<strong>(Optional)</strong> The Authentication Type to use. (Currently only <code>PSK</code> is supported.)\n",elementType:"li",listDepth:1},{name:"enable_bgp_password",description:"<strong>(Optional)</strong> Enable BGP password authentication. (Default:  false)\n",elementType:"li",listDepth:1},{name:"ike_version",description:'<li><p><a name="ike_version"></a><a href="#ike_version"><code>ike_version</code></a> - <strong>(Required)</strong> the IKE Version to use. Valid values are <code>V1</code>, <code>V2</code>.</p>\n</li>',elementType:"li",listDepth:1},{name:"list description",description:'<p><a name="ike_config"></a><a href="#ike_config"><code>ike_config</code></a> - (Optional) IKE Configuration to use:</p>',elementType:"p"},{name:"esp",description:'Encapsulating Security Payload\n\n<ul>\n<li><a name="dh_group"></a><a href="#dh_group"><code>dh_group</code></a>',elementType:"li",listDepth:2},{name:"dh_group",description:"Diffie-Hellman Group\n",elementType:"li",listDepth:2},{name:"encryption",description:"Encryption Algorithm\n",elementType:"li",listDepth:2},{name:"integrity",description:"Integrity Algorithm\n",elementType:"li",listDepth:2},{name:"ike",description:'Internet Key Exchange\n\n<ul>\n<li><a name="dh_group-1"></a><a href="#dh_group-1"><code>dh_group</code></a>',elementType:"li",listDepth:2},{name:"dh_group",description:"Diffie-Hellman Group\n",elementType:"li",listDepth:2},{name:"encryption",description:"Encryption Algorithm\n",elementType:"li",listDepth:2},{name:"integrity",description:"Integrity Algorithm\n",elementType:"li",listDepth:2},{name:"prf",description:"Pseudo Random Function\n",elementType:"li",listDepth:2},{name:"dh_group",description:"Diffie-Hellman Group\n",elementType:"li",listDepth:2},{name:"encryption",description:"Encryption Algorithm\n",elementType:"li",listDepth:2},{name:"integrity",description:"Integrity Algorithm\n",elementType:"li",listDepth:2},{name:"dh_group",description:"Diffie-Hellman Group\n",elementType:"li",listDepth:2},{name:"encryption",description:"Encryption Algorithm\n",elementType:"li",listDepth:2},{name:"integrity",description:"Integrity Algorithm\n",elementType:"li",listDepth:2},{name:"prf",description:"Pseudo Random Function\n",elementType:"li",listDepth:2},{name:"primary_customer_router_ip",description:'<li><p><a name="primary_customer_router_ip"></a><a href="#primary_customer_router_ip"><code>primary_customer_router_ip</code></a> - <strong>(Required)</strong></p>\n</li>',elementType:"li",listDepth:1},{name:"primary_key",description:'<li><p><a name="primary_key"></a><a href="#primary_key"><code>primary_key</code></a> - <strong>(Optional)</strong></p>\n</li>',elementType:"li",listDepth:1},{name:"routing_type",description:'<li><p><a name="routing_type"></a><a href="#routing_type"><code>routing_type</code></a> - <strong>(Required)</strong></p>\n</li>',elementType:"li",listDepth:1},{name:"secondary_customer_router_ip",description:'<li><p><a name="secondary_customer_router_ip"></a><a href="#secondary_customer_router_ip"><code>secondary_customer_router_ip</code></a> - <strong>(Optional)</strong></p>\n</li>',elementType:"li",listDepth:1},{name:"secondary_key",description:'<li><p><a name="secondary_key"></a><a href="#secondary_key"><code>secondary_key</code></a> - <strong>(Optional)</strong></p>\n</li>',elementType:"li",listDepth:1},{name:"list description",description:'<p><a name="traffic_selectors"></a><a href="#traffic_selectors"><code>traffic_selectors</code></a> - (Optional) List of Traffic Selectors for Route Based VPN</p>',elementType:"p"},{name:"customer_side",description:"The customer side CIDR block\n",elementType:"li",listDepth:2},{name:"pureport_side",description:"The Pureport side CIDR block\n",elementType:"li",listDepth:2},{name:"name",description:'<li><p><a name="name"></a><a href="#name"><code>name</code></a> - <strong>(Required)</strong> The name for the connection</p>\n</li>',elementType:"li",listDepth:1},{name:"location_href",description:'<li><p><a name="location_href"></a><a href="#location_href"><code>location_href</code></a> - <strong>(Required)</strong> HREF for the Pureport Location to attach the connection.</p>\n</li>',elementType:"li",listDepth:1},{name:"network_href",description:'<li><p><a name="network_href"></a><a href="#network_href"><code>network_href</code></a> - <strong>(Required)</strong> HREF for the network to associate the connection.</p>\n</li>',elementType:"li",listDepth:1},{name:"speed",description:'<li><p><a name="speed"></a><a href="#speed"><code>speed</code></a> - <strong>(Required)</strong> The maximum QoS for this connection. Valid values are 50, 100, 200, 300, 400, 500, 1000, 10000 in Mbps.</p>\n</li>',elementType:"li",listDepth:1},{name:"",description:"<hr/>",elementType:"hr"},{name:"description",description:"<strong>(Optional)</strong> The description for the connection.\n",elementType:"li",listDepth:1},{name:"list description",description:'<a name="customer_networks"></a>',elementType:"p"},{name:"name",description:"The name for the network.\n",elementType:"li",listDepth:2},{name:"address",description:"The CIDR block for the network\n",elementType:"li",listDepth:2},{name:"list description",description:'<a name="nat_config"></a>',elementType:"p"},{name:"enabled",description:"<strong>(Required)</strong> Is NAT enabled for this connection.\n",elementType:"li",listDepth:2},{name:"mappings",description:'<strong>(Optional)</strong> List of NAT mapped CIDR address\n\n<ul>\n<li><a name="native_cidr"></a><a href="#native_cidr"><code>native_cidr</code></a>',elementType:"li",listDepth:2},{name:"native_cidr",description:"<strong>(Required)</strong> The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"native_cidr",description:"<strong>(Required)</strong> The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"billing_term",description:"<strong>(Optional)</strong> The billing term for the connection: (Currently only HOURLY is supported.)\n",elementType:"li",listDepth:1},{name:"high_availability",description:"<strong>(Optional)</strong> Whether a redundant gateway is/should be provisioned for this connection.\n",elementType:"li",listDepth:1},{name:"tags",description:"<strong>(Optional)</strong> A dictionary of user defined key/value pairs to associate with this resource.\n",elementType:"li",listDepth:1},{name:"attributes",description:'<h2 id="attributes">\n<a class="anchor" href="#attributes" name="attributes">\xbb</a>\n  Attributes\n</h2>',elementType:"h2"},{name:"list description",description:'<p><a name="nat_config-1"></a><a href="#nat_config-1"><code>nat_config</code></a> - The Network Address Translation configuration for the connection.</p>',elementType:"p"},{name:"enabled",description:"Is NAT enabled for this connection.\n",elementType:"li",listDepth:2},{name:"mappings",description:'List of NAT mapped CIDR address\n\n<ul>\n<li><a name="native_cidr-1"></a><a href="#native_cidr-1"><code>native_cidr</code></a>',elementType:"li",listDepth:2},{name:"native_cidr",description:"<strong>(Required)</strong> The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"nat_cidr",description:"The CIDR block use for NAT to the associated subnet.\n",elementType:"li",listDepth:2},{name:"blocks",description:"List of reserved blocks for NAT.\n",elementType:"li",listDepth:2},{name:"pnat_cidr",description:"CIDR use for PNAT between connections.\n",elementType:"li",listDepth:2},{name:"native_cidr",description:"<strong>(Required)</strong> The native CIDR block to map.\n",elementType:"li",listDepth:2},{name:"nat_cidr",description:"The CIDR block use for NAT to the associated subnet.\n",elementType:"li",listDepth:2},{name:"list description",description:'<p><a name="gateways"></a><a href="#gateways"><code>gateways</code></a> - List of cloud gateways and their configurations.</p>',elementType:"p"},{name:"name",description:"The name of the cloud gateway.\n",elementType:"li",listDepth:2},{name:"description",description:"The description of the cloud gateway.\n",elementType:"li",listDepth:2},{name:"availability_domain",description:"The availability domain of the cloud gateway. The valid values are <code>PRIMARY</code>, <code>SECONDARY</code>.\n",elementType:"li",listDepth:2},{name:"customer_asn",description:"The customer ASN used for BGP Peering.\n",elementType:"li",listDepth:2},{name:"customer_ip",description:"The assigned IP address to the customer side of the BGP Config.\n",elementType:"li",listDepth:2},{name:"pureport_asn",description:"The Pureport ASN used for BGP Peering.\n",elementType:"li",listDepth:2},{name:"pureport_ip",description:" The assigned IP address to the Pureport side of the BGP Config.\n",elementType:"li",listDepth:2},{name:"bgp_password",description:"The autogenerated BGP password used for authentication.\n",elementType:"li",listDepth:2},{name:"peering_subnet",description:"The BGP Config subnet assigned to establish BGP peering.\n",elementType:"li",listDepth:2},{name:"public_nat_ip",description:"The public facing IP Address for NAT used by this connection.\n",elementType:"li",listDepth:2},{name:"customer_gateway_ip",description:"The public IP address of the customers VPN equipment.\n",elementType:"li",listDepth:2},{name:"customer_vti_ip",description:"The assigned IP address to the customer side of the VTI tunnel.\n",elementType:"li",listDepth:2},{name:"pureport_gateway_ip",description:"The public IP address of the Pureport VPN gateway.\n",elementType:"li",listDepth:2},{name:"pureport_vti_ip",description:"The assigned IP address to the Pureport side of the VPN VTI tunnel.\n",elementType:"li",listDepth:2},{name:"vpn_auth_type",description:"The type of authentication used for the VPN Connection.\n",elementType:"li",listDepth:2},{name:"vpn_auth_key",description:"The Authentication Key used for the VPN Connection.\n",elementType:"li",listDepth:2},{name:"",description:'<p>The Pureport Guide, <a href="#"></a></p>',elementType:"p"}],docsUrl:"https://www.terraform.io/docs/providers/pureport/r/site_vpn_connection.html",docType:""}]}}]);