# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"

  # Access the site from localhost:8080
  config.vm.network "forwarded_port", guest: 80, host_ip: '127.0.0.1', host: 8080,
  auto_correct: true

  # Access the site from 192.168.10.20
  config.vm.network :private_network, ip: "192.168.10.20"

  #Inital Shell Commands
  config.vm.provision :shell, path: "bootstrap.sh"
end
