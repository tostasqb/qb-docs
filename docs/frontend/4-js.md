# Part IV - Javascript frameworks

## Introduction

Javascript is special and needs it's special Part in this series. In the first chapter you learned the fundamentals of Javascript but now it's time to go beyond and be really proactive.

To begin with, read [this](http://www.sitepoint.com/top-javascript-frameworks-libraries-tools-use/) article about the top Javascript Frameworks. When you finish, read [this](https://www.codementor.io/javascript/tutorial/should-you-build-your-web-application-with-javascript-mvc-frameworks) and then take the rest of the day off and think about other stuff, you just went through a lot!

Tuesday already? alright!

Most certainly it will not be required that you learn all frameworks listed here, one will. Some of them have a steep learning curve so experiment with several but choose one in some point or you will ramble around and will not be efficient with none of them.

!!! special "About best practices"
    [Spaghetti code](https://sourcemaking.com/antipatterns/spaghetti-code) is normal at the beginning but be aware of best practices, guidelines and patterns to guide you better. Airbnb have done a great job at doing this, keep this link under your belt for the entire chapter.

      - [Airbnb javascript style guide](https://github.com/airbnb/javascript)

![](/img/spaghetti.jpg)

!!! special "About patterns"
    Knowing them all from the beginning is nearly impossible, but it is the the main goal of every (good) developer out there so embrace the journey and learn a new pattern everytime you feel confy with your current writing.

    - [Short version](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)
    - [Bible version](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)



Starting with frameworks in **popularity** order I guess.

---

## Framework 1: JQuery

You already checked out what the DOM is in the basics part of this series but take a further look in what you can o with it in pure javascript or JQuery. JQuery is one of those things that if you continue to use, you will visit [their site](https://jquery.com/) quite a lot to search the documentation.

- [DOM, the Document Object Model (12 page tutorial)](http://www.w3schools.com/js/js_htmldom.asp).
- [JQuery tutorial for beginners](https://www.youtube.com/playlist?list=PLoYCgNOIyGABdI2V8I_SWo22tFpgh2s6_)

---

## Framework 2: Angularjs 2

Angularjs 2.0 is out!! (hearing applause and cheers) This may be the most used/popular javascript framework out there. There are so many options here but let's not go crazy and select all of themmm!

- [Read kind of tutorial](http://learnangular2.com/)

With other techs

- Angular and meteor go great together, there's a whole site dedicated to the marriage of both [here](https://www.angular-meteor.com/) and [nice tutorials](https://www.angular-meteor.com/tutorials/socially/angular2/bootstrapping) (not videos).

---

## Framework 3: Reactjs

React can be confusing and overwhelming, the learning curve is a little steep, so take a time to be introduced to the framework with these articles

- [Confused about what is Reactjs? Here is an article about React for Stupid People](http://blog.andrewray.me/reactjs-for-stupid-people/)
- [React: Demystified](http://blog.reverberate.org/2014/02/react-demystified.html)

If you're building a website that deals with dynamic data, it is highly recommended you follow the Flux architectural design, which promotes a single directional dataflow. When React is used with Flux, it brings you the functionality of an MVC. However, according to Facebook, current MVCs don't scale well with building additional features to a large codebase, so React + Flux was their solution.

- [Confused about what Flux is? Here is a neat article on Flux for Stupid People](http://blog.andrewray.me/flux-for-stupid-people/)

Now, a proper tutorial

- [Reactjs tutorial](https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)

Chapter Source: https://www.codementor.io/learn-reactjs

---

## Framework 4: Ember.js

If you ask a developer's opinion about a particular js framework, chances are he's going to touch the _modular_ subject as a "Pro" ...or "Con". Think about `reactjs`.  React is the _View_ part of the MVC specter so you'll have to think about all the rest...this means **CHOICES**.
You'll be in touch with a series of other options like `jsx`, `redux`, `flux`, `webpack`, `babel`, and maybe other or additional ones. Are you ready to make those choices?

[Ember](http://emberjs.com/) offers a "rails kind of framework". It's all in the package and you don't have to worry about choices that are aggravating when you are learning! The choices are all made so just follow the steps and learn, later you'll be able to question the modular parts.

- [emberjs official guides](https://guides.emberjs.com/v2.10.0/) and maybe the best ones
- [Steps when you already have been in contact with RoR](https://spin.atomicobject.com/2015/08/24/learn-ember-js-quickly/)
- [Yoember fastrack](http://yoember.com/) is a nice alternative that looks like it will show everything about ember in one page so go ahead!

In terms of community and tutorials, ember is the least embraced of the above frameworks. Ember has been making good steps towards robustness and making the learning path less steep but you'll need to make your own research when coming to your difficult chapters.

---

## Honorable mention: Vue.js

[Vue.js](https://vuejs.org/) is new kid on the block, a self-proclaimed progressive framework, component oriented and apparently in the middle between `reactjs` and `emberjs` kind of framework as it's concerned with just the _View_ layer but it's self-contained with no need of additional and external libraries.

I won't be adding any links here for the recommended leaning path, that's for you to decide, just keep this `Vue.js` in mind when wanting to experiment.

---

## Writer's view

Depending on your project and learning motivation you may already chosen a framework. This input comes from my professional experience.

I began learning [vanilla javascript](http://stackoverflow.com/questions/20435653/what-is-vanillajs) and later on adopted jQuery which was really fast to learn and gave me a whole new perspective on javascript itself. Being that my starting point, when a new project is on my desk I consider the simplicity of it. I still use jQuery with Rails to make a ton of short term and simple projects and add [handlebars](http://handlebarsjs.com/) when I'm concerned about client server data transfer, and response time. Handlebars is also very easy to pick up and, in reality, does the job for my _View_ most of the times, you may have already been in touch with it in emberjs for example.

---

<center> And this concludes our frontend series </center>
