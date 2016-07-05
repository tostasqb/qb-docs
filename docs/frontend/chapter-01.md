# Part I - Frontend bases

## Introduction

At the end of this part you will be able to build a website, know the tools and have the basic knowledge of what you will ever need to make it as a web developer.

Choose a folder in your PC/Mac where you will do all your web applications or websites. Think of that folder as the father of them all. Normally for me that's in `/opt/project/`.

Also, make yourself used to the Terminal, specially on Linux and Mac, don't get scared because with little time it will be your best friend.

The majority of these chapters you can revisit or randomize so, don't get stuck with one thing.

## 1. Atom

### Installation

1. Install Atom from https://atom.io/
2. Add plugins depending on your needs with `apm install [package-name]` in your terminal or by searching on Atom > Preferences > Install of the menu. If you don't know your needs yet, and chances are you don't, then wait until you have them. But be curious and search about these plugins. Some of them you'll see use in little time.

    - __editorconfig__ => Customize your editor.
    - **atom-beautify** => identation in html is important.
    - __autoclose-html__ => closes html tags automatically.
    - __linter__ => enables what comes ahead.
    - __linter-jshint__ => helps you write javascript.
    - __linter-ruby__ => helps you write ruby.
    - __linter-rubocop__ => helps you write ruby on rails.
    - __linter-scss-lint__ => helps you write scss.
    - __project-quick-open__ => jump easily from one project to another

### Editor configs

In your project add a `.editorconfig` file to your project root directory and it will help Atom in some useful configurations, these are the suggested configurations:

    root = true

    [*]
    indent_style = space
    indent_size = 2
    charset = utf-8
    trim_trailing_whitespace = true # doesn't work yet

    [*.{html,erb}]
    indent_size = 4

    [*.js.erb]
    indent_size = 2

### Linters

Atom and specifically linters are great to teach you to write better code. Take a look to see what is meant:
https://atom.io/packages/linter

<i class="fa fa-info-circle"></i> Getting a little lost too quickly? these [DevTips videos (3 videos)](https://www.youtube.com/playlist?list=PLqGj3iMvMa4J0MJhTSUwrb_6hJ5iMGWgf) will help you understand.

### Alternative

[Visual Studio Code](https://code.visualstudio.com) seems to be, at this time, a pretty decent alternative to Atom. If you feel like experimenting at some point, try this.

---

## 2. Web development basics

This could really be the first chapter...

- [How internet works (1 video)](https://youtu.be/XZIMEoUhOA8?list=PLqGj3iMvMa4IbNGS5shOx38KXtAtWEZsq)
- [Organize your project (1 video)](https://youtu.be/8b7wObfC8VM?list=PLqGj3iMvMa4IbNGS5shOx38KXtAtWEZsq)
- [How webpages are made (1 video)](https://youtu.be/caOIrCS3Nrw?list=PLqGj3iMvMa4IbNGS5shOx38KXtAtWEZsq)
- [HTML Basics (7 videos) ](https://www.youtube.com/playlist?list=PLqGj3iMvMa4KlJn1pMYPVV3eYzxJlWcON)
- [CSS Basics (8 Vídeos)](https://www.youtube.com/playlist?list=PLqGj3iMvMa4IOmy04kDxh_hqODMqoeeCy)
- [CSS Positioning (7 videos)](https://www.youtube.com/playlist?list=PLqGj3iMvMa4L731ispRfGAabXeRpM4RL6)

---

## 3. Javascript & Chrome's "Inspect element"

- [Javascript fundamentals (7 videos)](https://www.youtube.com/playlist?list=PLoYCgNOIyGACTDHuZtn0qoBdpzV9c327V)

---

## 4. Project

Make a single page website based on one of the templates below. Choose wisely, this project will accompany you in the next parts.
The level of interactiveness or responsiveness is not important, you will deal with those in later chapters. Do not import any external plugins or frameworks. Your knowledge of css/html should be enough to do this exercise.

  - **Option A**

<a href="./img/anhiora_high.jpg" class="img-preview" style="background-image: url(./img/anhiora.jpg)">&nbsp;</a>

  - **Option B**

<a href="./img/acrostia_high.jpg" class="img-preview" style="background-image: url(./img/acrostia.jpg)">&nbsp;</a>
