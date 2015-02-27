# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

$stop_iptables = <<EOF
  service iptables stop
EOF

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.define "ubuntu" do |ubuntu|
    
    ubuntu.vm.box = "ubuntu/trusty64"

    ubuntu.vm.network "private_network", ip: "192.168.33.56"

    ubuntu.ssh.forward_agent = true

    ubuntu.vm.provider "virtualbox" do |vb|
      vb.gui = false
      vb.customize ["modifyvm", :id, "--memory", "512"]
      vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
      vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
    end

    ubuntu.vm.provision :ansible do |ansible|
      ansible.playbook = "site.yml"
      ansible.inventory_path = "vagrant.box.ubuntu"
      ansible.limit = "all"
      ansible.verbose = "vvvv"
    end
  end
end
