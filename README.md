playbook-grafana-on-influxdb
----------------------------

Will be install of the grafana and influxdb on CentOS or Ubuntu.

# Prerequired

- [ansible](http://www.ansible.com/)
- [packer](http://www.packer.io/)
- [vagrant](http://www.vagrantup.com/)
- [virtualbox](https://www.virtualbox.org/)

How to setup?
-------------

# On Vagrant 

## Setup of required package on the Mac OS X

```
> brew bundle
```

## Download Vagrant-box of Ubuntu 14.04 LTS from Hashcorp.

```
> vagrant box add ubuntu/trusty64
```

## Deploy on vagrant box

```
> vagrant up --provision
```

# Deploy on self 

## On CentOS

```
> sudo rpm -Uvh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
> sudo yum -y update
> sudo yum install ansible python-setuptools
> git clone git@github.com:futoase/playbook-grafana-on-influxdb-for-centos.git
> cd playbook-grafana-on-influxdb-for-centos
> ansible-playbook -c local -i localhost site.yml
```

# Connecting on Vagrant box

## Grafana on browser

```
> open http://192.168.33.56/
```

## influxDB on browser

- username:password is ```root:root```

```
> open http://192.168.33.56:8083/
```

# A list of references.

- [Grafana on InfluxDB をちょっとだけ触ってみた](http://qiita.com/sonots/items/8fbc92ff1c3e57ee7de7)
- [InfluxDB と fluentd を組み合わせを試してみた](http://qiita.com/hakobera/items/fbe7669a1c2b763bcd8d)
- [InfluxDBとGrafanaとfluentdで、twitterデータのリアルタイム集計・可視化](http://qiita.com/ixixi/items/a56ea15b582c7f014a57)
- [InfluxDB試してみた](http://qiita.com/chobie@github/items/c8220d9352df90963862)

# License

MIT.

# Author

2015 (c) Keiji Matsuzaki.
