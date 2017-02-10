# Part I - Ruby on Rails

## Introduction

Backend development is not essential to make a website, but it is to make a web application or deliver data from a database. A good starting point for learning backend development is to learn Ruby and the most famous Gem available for Ruby, Rails. Just a quick read before starting off with things.

- [What is Ruby on Rails](http://railsapps.github.io/what-is-ruby-rails.html)
- [Boring? Sure...here you go](http://skillcrush.com/2015/01/29/13-ruby-rails/)

Learning Ruby on Rails is great now because there are plenty (good) tutorials out there. Some alternatives to starting off here is to follow [edX](https://www.edx.org/) with [Agile Development Using Ruby on Rails - The Basics](https://www.edx.org/course/agile-development-using-ruby-rails-uc-berkeleyx-cs169-1x) or [Rails odin project](http://www.theodinproject.com/ruby-on-rails). The links are there, make your choice!

---

## 1. Start off with Ruby

To learn Ruby on Rails you may jump right in to Rails and learn the language as you need, I would suggest first getting used to write some code so I leave here some suggestions for that.

- [Learn ruby in one vídeo!](https://youtu.be/Dji9ALCgfpM)

  This is great to get started and to experiment the language before moving along RoR, if you have a schedule this is the way. If you consider yourself very newbie consider starting on the next tutorial, more complete and with more steps to make you take some time to interiorize the language.

- [CodeAcademy Ruby course (9 hours interactive course)](https://www.codecademy.com/learn/ruby)

  When learning Ruby keep a chrome tab with this link open. Are you learning about methods? search here too, It will tell you how to write better code.

- [Ruby style guide](https://github.com/bbatsov/ruby-style-guide)

---

## 2. MVC

Know about MVC right here, this is the structure followed by Rails.

<iframe width="100%" height="350px" src="https://www.youtube.com/embed/LiBdzE_DJn4" frameborder="0" allowfullscreen></iframe>

---

## 3. Rails

To keep things simple, here are the steps to get ruby and rails up and running on your machine. After that I'll leave you with the most [famous tutorial for rails](http://guides.rubyonrails.org/).

### Install RVM, Ruby and Rails

RVM (Ruby Version Manager) is a nice tool that will keep you from messing up your ruby installation. [This page](https://rvm.io/rvm/install) describes thoroughly how to install it but I'll go ahead an sum it up wit these two commands

    gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
    \curl -sSL https://get.rvm.io | bash -s stable --rails

The second command installed rvm, ruby and rails. The first is just to gain access to the sources. After this, chances are your terminal won't behave as well as you expect after restarting, but test it out by typing `ruby -v`. This should print something like

    ruby 2.3.1p112 (2016-04-26 revision 54768) [x86_64-darwin15]

If it didn't, then add to your `~/.bashrc` this line

    [[ -s "$HOME/.rvm/scripts/rvm" ]] && . "$HOME/.rvm/scripts/rvm"

Restart your terminal and see if it behaves now. So starting a new project would be now as simple as `rails new my_web_project` and then enter of course. But that I'll leave to the proper tutorials...

- [Tutorial and bible](http://guides.rubyonrails.org/), but go ahead and start [here](http://guides.rubyonrails.org/getting_started.html#creating-a-new-rails-project)! You already covered the basics.

- [Rails style guide](https://github.com/bbatsov/rails-style-guide). They really are helpful in avoiding common mistakes and writing code others can understand easily. Also, a great way to have this always present is to install [Atom's linter plugins](https://github.com/AtomLinter/linter-rubocop), that give you realtime tips and warnings based on these style guides.


---

## 4. Hosting on heroku

Hosting your app online can be a challenge with rails. Many versions of ruby, rails, gems, etc, etc. And free? Seems almost impossible. Thankfully there's heroku that simplifies all this and where you can be up and running in little time.

- Official guides from heroku for [getting started](https://devcenter.heroku.com/articles/getting-started-with-rails4), you don't need nothing more that this (yeih!).

What to publish? Just do the **final project**!

---

## 5. Final project

- Build a TO DO list application on ROR. You have one day!! What?! Yeah! [This guy did it!](https://www.youtube.com/watch?v=fd1Vn-Wvy2w) so follow along and get creative.

- Deploy it on heroku...come on!

- Host it on GitHub, don't know how? Checkout Part II, Chapter 5 of the Frontend Series.

<a href="/img/todo.png" class="img-preview" style="background-image: url(/img/todo.png)">&nbsp;</a>
