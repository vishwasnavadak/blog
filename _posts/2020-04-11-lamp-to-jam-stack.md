---
layout: post
title: 'Transition from LAMP to JAMStack'
excerpt: 'Look back at how web development technology stacks have evolved in the last decade.'
metakeywords: javascript, LAMP, MEAN, MERN, JAMstack, Web development, technology stacks
date: 2020-04-11 08:08:08
background: '/assets/images/post_16.jpg'
---

Recently I came across this [website](https://andreasbm.github.io/web-skills/) which had the complete guide on web development. That made me realize how the web development stack had evolved over the last decade. From generating HTML on the server to running JS on the client and back to rendering on the server we had multiple popular stacks that changed the outlook of web dev. Here is a small list of stacks put together with their basic history and details.

### LAMP

When enterprises were struggling to choose between JSP and ASP, PHP gained popularity as it was open source and easy to learn. Since there was no licensing cost involved for using the language, PHP found its place with other free to use tools like Linux, Apache, and MySQL. It soon became one of the most used stack for a lot of websites and web applications at the time. Many of the hosting providers still make money out of selling shared Linux server spaces with LAMP stack. This also made WordPress and Laravel be the goto technologies for several years.

### MEAN / MERN

Use cases for more client-side Javascript began to increase when web applications started demanding more functionalities and interactions. This led to the development of JavaScript libraries like jQuery, Ember, and Backbone which helped in making web development easy and fast. At the same time, developers decided to take JS to the next level by making it run on servers instead of depending on a different language for the backend. This might have been the first step at having the JavaScript only technology stack for all kinds of web applications. When Google open sourced AngularJS, people started loving it (even though it got hell load of hatred after they re-wrote it as Angular). Since Angular was the complete package that came with everything people wanted to do with their app as it is, it was the first choice for most front-end developers. The combination of MongoDB, Express, Angular and Node soon became the gold standard.

The advantage of Angular being all in one framework for web dev also seemed like a disadvantage when React started to see the limelight as a simple customizable library. Due to Facebook's backing & community support, it royally replaced A in MEAN to R.

### JAM

LAMP, MEAN and MERN stacks had the database layer with it, but for certain use cases like personal blogs, the database layer seemed overkill. With that thought, JAMstack (JavaScript, API, Markdown) started to take shape. This concept is not exactly new, Jekyll - a static site generator written in Ruby was released in early 2008 which later was made popular by Github had the same principle of generating the pages during build time and serve them when requested. For the React side of the world, Gatsby, a React framework pretty much is the reason JAMstack got popular. The main advantages of using JAM include almost free server cost, easy to maintain and customize. This stack has the power to end the WordPress era eventually.

#### Further reading on how to use JAMstack

- [JAMstack.org](https://jamstack.org/)
- [What is the JAMstack and how do I get started?](https://www.freecodecamp.org/news/what-is-the-jamstack-and-how-do-i-host-my-website-on-it/)
- [Welcome to the JAMstack](https://www.netlify.com/jamstack/)

This post is part one of the series of posts I **might** write about modern web development. Consider subscribing 🙃
