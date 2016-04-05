# Part I - Frontend bases

## Introduction

At the end of this part you will be able to build a website, know the tools and have the basic knowledge of what you will ever need to make it as a web developer.

## 1. Atom

### Installation
1. Install Atom from https://atom.io/
2. Add plugins depending on your needs with `apm install [package-name]`
  - editorconfig
  - atom-beautify
  - autoclose-html
  - linter
  - linter-jshint
  - linter-ruby
  - linter-rubocop
  - linter-scss-lint
  - project-quick-open

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

<i class="fa fa-info-circle"></i> More about Atom in these [DevTips videos (3 videos)](https://www.youtube.com/playlist?list=PLqGj3iMvMa4J0MJhTSUwrb_6hJ5iMGWgf)

---

## 2. Web development basics

- [How internet works (1 video)](https://youtu.be/XZIMEoUhOA8?list=PLqGj3iMvMa4IbNGS5shOx38KXtAtWEZsq)
- [Organize your project (1 video)](https://youtu.be/8b7wObfC8VM?list=PLqGj3iMvMa4IbNGS5shOx38KXtAtWEZsq)
- [How webpages are made (1 video)](https://youtu.be/caOIrCS3Nrw?list=PLqGj3iMvMa4IbNGS5shOx38KXtAtWEZsq)
- [HTML Basics (7 videos) ](https://www.youtube.com/playlist?list=PLqGj3iMvMa4KlJn1pMYPVV3eYzxJlWcON)
- [CSS Basics (8 Vídeos)](https://www.youtube.com/playlist?list=PLqGj3iMvMa4IOmy04kDxh_hqODMqoeeCy)
- [CSS Positioning (7 videos)](https://www.youtube.com/playlist?list=PLqGj3iMvMa4L731ispRfGAabXeRpM4RL6)

## 3. Javascript & Chrome's "Inspect element"

- [Javascript fundamentals (7 videos)](https://www.youtube.com/playlist?list=PLoYCgNOIyGACTDHuZtn0qoBdpzV9c327V)

## 4. Project

Make a single page website based on the template below.
The level of interactiveness or responsiveness is not important, you will deal with those in later chapters. Do not import any external plugins or frameworks. Your knowledge of css/html should be enough to do this exercise.

![Exercise-1][exercise-1]

[exercise-1]: /img/exercise-1.png "Exercise 1"
