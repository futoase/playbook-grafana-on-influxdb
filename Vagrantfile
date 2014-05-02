# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

BOX_SAVE_DIR = File.expand_path("~/.box")

BOX_NAMES = {
  "centos" => "CentOS-6.5-x86_64-minimal",
  "ubuntu" => "Ubuntu-12.04-x86_64"
}

def build_box(name)

  box_name = BOX_NAMES[name]
  box_path = File.expand_path("~/.box/#{box_name}.box")

  if !FileTest.exists?("packer/#{name}/builds")
    Dir.mkdir("packer/#{name}/builds")
  end
  
  if !FileTest.exists?(box_path)
    system(%W(
      cd packer/#{name} && 
      packer build template.json && 
      mkdir -p #{BOX_SAVE_DIR} && 
      mv builds/#{box_name}.box #{box_path} 
    ).join(' '))
  end

end

$stop_iptables = <<EOF
  service iptables stop
EOF

  
Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.define "centos" do |centos|

    box_name = BOX_NAMES["centos"]
    box_path = File.expand_path("~/.box/#{box_name}.box")

    build_box("centos")

    centos.vm.box = box_name
    centos.vm.box_url = box_path

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

    box_name = BOX_NAMES["ubuntu"]
    box_path = File.expand_path("~/.box/#{box_name}.box")

    build_box("ubuntu")

    ubuntu.vm.box = box_name
    ubuntu.vm.box_url = box_path

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
