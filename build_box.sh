#!/bin/bash

centos_packer_path="./packer-template/CentOS-6.5-x86_64";
ubuntu_packer_path="./packer-template/Ubuntu-12.04-x86_64";

function create_vagrant_box() {
  case $1 in
    "centos" ) create_box_centos ;;
    "ubuntu" ) create_box_ubuntu ;;
    * ) echo "Require parameter of centos or ubuntu." ;;
  esac;
}

function build() {
  rm -rf output-virtualbox-iso;
  packer build template.json;
  echo "FINISHED: for $1";
}

function create_box_centos() {
  cd $centos_packer_path;
  build "centos"
}

function create_box_ubuntu() {
  cd $ubuntu_packer_path;
  build "ubuntu"
}

create_vagrant_box $1;
