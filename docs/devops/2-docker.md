# Part II - Docker and Containers

## Introduction

So now you know how to have multiple operating systems and not having to buy multiple computers, a Virtual Machine is a nice thing. But VMs are not new stuff, they've been around for quite some time and for the last couple of years a new trend has risen that seems to explore some disadvantages of the VM world. Just bear in mind that Docker and containers are not something to compare to a VM, both can be of use depending on your needs.  

- Watch a [LearnCode.academy video](https://www.youtube.com/watch?v=pGYAg7TMmp0) to start off by understanding the basic concept about docker.

So, basically you have a nice PC or Mac (or something else) and depending on your project you end up installing multiple softwares. You work on a Ruby project so you install ruby, you then go to a Visual Studio project so you install that on your computer and so on and on. As a developer, these two alternatives gives you the chance to keep your computer clean by making a VM or modularize your apps/softwares in containers and get rid of those (optionally) when the project comes to an end without having to format your computer because is getting slow and sluggish.

## Docker basics

Keep these basic commands in mind:

- docker run <image>
- docker start <name|id>
- docker stop <name|id>
- docker ps [-a]
- docker rm <name|id>

Oh wait! You can see a video that explains each one of them!

- [Docker in terminal usage](https://youtu.be/JBtWxj9l7zM?list=PLoYCgNOIyGAAzevEST2qm2Xbe3aeLFvLc)

Other useful commands

- docker exec <name|id> [command to execute] if the container is running
- docker run -it -d <name|id> [command to execute] if the container is not running

If you already have docker installed on your computer, forget about Digital Ocean, you can go ahead and start using docker. If not, step into the project below and complete the first 2 steps before going into this tutorial.

- [Install docker on ubuntu](https://docs.docker.com/engine/installation/linux/ubuntulinux/)

## Managing Containers with Rancher

[Rancher](http://rancher.com/) is an interface or manager to deal with hosts, containers and services. It's pretty friendly, specially compared to a CLI and you can separate concerns by creating [environments](http://docs.rancher.com/rancher/v1.2/en/environments/), let's say `development`, `quality` and `production`.

To install rancher we're going to run

    docker run -d --restart=unless-stopped -p 8080:8080 rancher/server

aaaannnndddd that's it.....whhaaaaaaat?! Yes, that easy! You already had docker installed so we limited ourselves to run a container on top of docker that runs Rancher. Let's explain some more...remember [github](https://github.com/)? well docker has a hub too, it's called [Docker hub](https://hub.docker.com/), no need to be creative on the name because now you now the objective of this hub too. So calling the docker command made you search on docker hub for a `rancher/server` repository, downloaded, installed and ran. All in one command, yay!

### So how does rancher work

In small talk, [read the docs](http://docs.rancher.com/rancher/v1.2/en/quick-start-guide/)

In not so small talk...

- Install a host, normally it would be the machine where you just installed rancher
- Go into the _Infrastructure_ menu link and begin by seeing how the hosts and containers are going
- It's normal to have multiple roles and users, so do that too
- Click the _Catalog_ menu link and behold the wonders of little effort where you manage and install most of things by **clicking**, isn't life wonderful?

The answer is YES, but not because of rancher, it has flaws so don't expect everything will work from that "One-click" install button, but it can be a useful tool to start, stop containers and see how resources going on the machines. But be prepared to investigate why things are not working, that's the job!


## Project

Let's split this neat project into parts:

1) Install a new [Virtualbox Ubuntu](http://releases.ubuntu.com/16.04/) machine.

Preferably install an Ubuntu server since it doesn't have and graphical interface and it will run smoother as a guest. Also, you wont need it since you can then connect to Ubuntu through [ssh](https://duckduckgo.com/?q=ssh+cheat+sheet&ia=cheatsheet) on your host computer and continue using your terminal as always. One more thing, Docker installation in Ubuntu is fairly easy.

  <span class="highlight">Refresher</span> [Nice to know commands when using a command line and ssh](http://www.dreamcreative.net/how-tos/guides-server-maintenance/linux-ssh-cheat-sheet-basics/)

2) [Install Docker in it](https://docs.docker.com/engine/installation/linux/ubuntulinux/).

3) [Install Rancher](https://docs.rancher.com/rancher/v1.2/en/installing-rancher/installing-server/)

4) See all of this working on your host machine.

This will give you the basics to be able to administrate a full set of dev/quality/prod environments for an entire company. This is a big thing, trust me, if you completed this successfully, good job mate! I'm proud of you!
