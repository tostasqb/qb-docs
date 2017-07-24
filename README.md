[![Build Status](https://travis-ci.org/tostasqb/qb-docs.svg?branch=master)](https://travis-ci.org/tostasqb/qb-docs)
# qb-docs

Markdown documentation project

---

## Overview

QB documentation project is based on [MkDocs](http://www.mkdocs.org/) and written in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). It is configured in a single YAML
configuration file.

---

## Getting started

Getting started is super easy.


### Install Python

In order to install QB Docs you'll need `Python` installed on your system, as
well as the Python package manager, `pip`. You can check if you have these
already installed like so:

```bash
$ python --version
Python 2.7.2
$ pip --version
pip 1.5.2
```

### Installing MkDocs

Install the mkdocs package using `pip install mkdocs`

You should now have the mkdocs command installed on your system. Run `mkdocs --version` to check that everything worked okay.


### Install qb-docs

```bash
git clone git@gitlab.com:tostasqb/qb-docs.git
cd qb-docs
```

There's a single configuration file named `mkdocs.yml`, and a folder named
`docs` that will contain our documentation source files.

QB Docs comes with a built-in webserver that lets you preview your documentation
as you work on it. We start the webserver by making sure we're in the same
directory as the `mkdocs.yml` config file, and then running the `mkdocs serve`
command:

```bash
$ mkdocs serve
Running at: http://127.0.0.1:8000/
```

Open up [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser, and
you'll see the index page being displayed.

The webserver also supports auto-reloading, and will rebuild your documentation
whenever anything in the configuration file, documentation directory or theme
directory changes.

## Adding pages

Add a page into de `docs` folder with an `.md`
Add the link into the `mkdocs.yml`

## Building the site (HTML Output)

```bash
mkdocs build
```

This will create a new directory, named `site`.

After some time, files may be removed from the documentation but they will still
reside in the `site` directory. To remove those stale files, just run mkdocs
with the `--clean` switch.

```bash
mkdocs build --clean
```

## Online documentation

When ready, submit a pull request and once accepted it will be 'automagically' published on [docs.tostasqb.com](http://docs.tostasqb.com)

## Credits

- [mkdocs](http://www.mkdocs.org/)
- [devtips](https://www.youtube.com/user/DevTipsForDesigners/playlists)
- [Tuts+](http://tutsplus.com/courses?filter=free&page=1)
- [Udacity](https://www.udacity.com/)
- [devcamp.com](https://devcamp.com)
- Remind me to put some more here...
