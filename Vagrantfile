# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"

  # Access the site from localhost:5555
  config.vm.network "forwarded_port", guest: 8080, host: 5555

  config.vm.provision :shell, path: "bootstrap.sh"
end
