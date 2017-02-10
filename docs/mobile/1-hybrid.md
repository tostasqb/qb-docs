# Part I - Mobile Apps

## Introduction

From where I'm standing, the natural learning path for someone that comes from a web world and into mobile development is not to learn [Titanium Appcelerator](http://www.appcelerator.com/) or [React Native](https://facebook.github.io/react-native/) although both of those can and really are great tools to build mobile applications and the latter is still part of a React ecosystem that we've seen on Chapter 4 of the Frontend series.

Here we will cover the best tools that provide you an interesting learning and quickest way to produce good/great work. In this case the learning curve I hope will be fast.

You will begin by understanding how can you produce code that meets all platforms, so that you don't have to make one app for android, another for iOS and another one for windows phone. For that, we'll cover [Apache Cordova](https://cordova.apache.org/), or what is essentially the same, [PhoneGap](http://phonegap.com/).

After that you will apply a Framework on top of Cordova for styling so that it looks an Android, Windows or a iOS app without having too much work. This will be covered by [Onsen Ui](https://onsen.io/).

Let's get started!

## Phonegap

- Start by installing phonegap. You can use phonegap either by terminal commands (CLI) or using a Desktop App. The best _Getting started_ guides are the ones on the [phonegap website](http://docs.phonegap.com/getting-started/1-install-phonegap/desktop/). Begin with those and choose your way between the two, I'll go ahead and choose the CLI path.
- To create an app, I'll go by the [CLI guide](http://docs.phonegap.com/getting-started/3-create-your-app/cli/) and type `phonegap create myApp`
- So now you can open that folder with Atom and edit the www folder like it were a website
- To start seeing what your making install the phonegap app in your smartphone and `phonegap serve` in your terminal. You will be given an IP so that you can see how your project is going both on your computer's browser and on your phone, inside the phonegap app.
- When your app is ready, you'll have to `build` it. I would suggest going to into [phonegap build site](https://build.phonegap.com) for the time being, it's really easy to set up and buid your app there. An alternative would be to instal Android SDK and yada yada yada yada...which is not so straightforward...so we'll stick by the first method for now.

## Onsen ui

Ok, so you now you know how to begin building an app, but how are you going to add components and styling to really look like an Android or iOS app? That's the job for Onsen ui.

- If you have npm and nodejs installed your ready to go, if you don't, [do it already](https://docs.npmjs.com/getting-started/installing-node).
- On your project folder run `npm install onsenui`. This will add a new `onsenui` folder inside a `node_modules`.
- Rename `node_modules` to `lib` and `onsenui` to `onsen`.
- Move that `lib` folder inside `www`
- Insert this code inside the `head` tag of `index.html` file

        <link rel="stylesheet" href="lib/onsen/css/onsenui.css"/>
        <link rel="stylesheet" href="lib/onsen/css/onsen-css-components.css"/>
        <script src="lib/onsen/js/onsenui.js"></script>

- With that in place, run `phonegap serve` and open your browser with the IP the terminal tells you to.
- Check the[ tutorials in Onsen.ui](https://tutorial.onsen.io/?framework=vanilla&category=Reference&module=page) website to begin adding stuff to your page.

## Project

Make a "to do" app with Phonegap and Onsen just like when learning Ruby On Rails...but Android style!

<a href="/img/android.png" class="img-preview" style="background-image: url(/img/android.png)">&nbsp;</a>
