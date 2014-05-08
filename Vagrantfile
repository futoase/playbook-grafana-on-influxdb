# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

$stop_iptables = <<EOF
  service iptables stop
EOF

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.define "centos" do |centos|

    centos.vm.box = "CentOS-6.5-x86_64-minimal"
    centos.vm.box_url = "./packer-template/CentOS-6.5-x86_64/builds/CentOS-6.5-x86_64-minimal.box"

    centos.vm.network "private_network", ip: "192.168.33.55"

    centos.ssh.forward_agent = true

    centos.vm.provider "virtualbox" do |vb|
      vb.gui = false
      vb.customize ["modifyvm", :id, "--memory", "384"]
      vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
      vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
    end

    centos.vm.provision :ansible do |ansible|
      ansible.playbook = "site.yml"
      ansible.inventory_path = "vagrant.box.centos"
      ansible.limit = "all"
      ansible.verbose = "vvvv"
    end

    centos.vm.provision :shell, inline: $stop_iptables
  end

  config.vm.define "ubuntu" do |ubuntu|
    
    ubuntu.vm.box = "Ubuntu-12.04-x86_64"
    ubuntu.vm.box_url = "./packer-template/Ubuntu-12.04-x86_64/builds/Ubuntu-12.04-x86_64.box"

    ubuntu.vm.network "private_network", ip: "192.168.33.56"

    ubuntu.ssh.forward_agent = true

    ubuntu.vm.provider "virtualbox" do |vb|
      vb.gui = false
      vb.customize ["modifyvm", :id, "--memory", "384"]
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
