---
layout: post
title: 'Svelte and Sapper: First Impressions'
excerpt: ''
metakeywords: javascript, svelte, sapper framework, sveltejs, JAMstack, Web development, technology stacks
date: 2020-07-18 08:08:08
background: '/assets/images/post_17.png'
---

Till now my website, blog, URL shortener were distributed over different repositories as I had hosted everything on GitHub pages. The landing page was plain HTML, the blog was Jekyll and the URL shortener was built with React. I was in search of some framework or platform to port everything into one platform. After [@raalzz](https://raalzz.com) gave me a brief intro on how to setup Svelte and how it works, I was impressed! Since I wanted some opinionated framework and did not want to set up everything on my own, I chose to go with the Sapper framework which is powered by Svelte. Here are a few of the things I have discovered so far.

### Easy transition from other frameworks

Svelte has taken a lot of inspiration from the best parts of existing libraries and frameworks. So I did not have to change my thought process much. They have the [component structure](https://svelte.dev/docs#Component_format) similar to that of React and Vue and it supports all of HTML markup. In case if you use Sapper, the [routing](https://sapper.svelte.dev/docs#Routing) is built-in and it follows the same format as Nextjs/Gatsby where each of the file/folders created will be a route in your application.  
One of the things I found to be different was the [Logic Blocks](https://svelte.dev/docs#if) which are wrapped between `{}` and are used to display content blocks conditionally or in a loop. For Example,

```
{#if expression}...{:else if expression}...{/if}

{#each expression as name, index}...{/each}
```

The most useful feature I loved about Svelte was [`{#await}...{/await}`](https://svelte.dev/tutorial/await-blocks) which can be used to show loading states while a promise is being fulfilled.

### Built-in support for Reactivity and Store

State management is made easy in Svelte. We can tie any variable on the application to an event to make it reactive. For complex use cases that require global state management, Svelte has [stores](https://svelte.dev/tutorial/writable-stores). I was able to set up a global store and subscribe to it from a component with less than 10 lines of code and without installing any external NPM package.

### Automatic Code Splitting

The major characteristic of Svelte is that it is a Compiler, unlike a library or framework. All of your code gets compiled into Vanilla JavaScript. This brings the advantage of serving the code depending on what is needed by the client to render part of the application. This is not just limited to JS. If your component has unused CSS, it will not be included on the final bundle.

### Support for Transitions and Animation

I had always found transitions and animation in CSS to be a pain in the neck to implement due to my limited knowledge of CSS. Svelte has [transition directives](https://svelte.dev/tutorial/transition) that you can add to the HTML element or the component for some _graceful_ transitions.

### PWA and Offline Support

Sapper comes with the setup required for making your application into a Progressive Web App(PWA). All I had to do was to fill in the `manifest.json` and required icons to make my website installable.
<br/>
<br/>

## How to get started with Svelte/Sapper?

The best way to start learning Svelte would be to go through their [interactive tutorials](https://svelte.dev/tutorial/basics). I have also added links to respective documentation pages inline for a few of the topics I discussed above. Other ways to learn and ask help are:

1. [Svelte Discord Channel](https://svelte.dev/chat)
2. [Svelte Society YouTube](https://www.youtube.com/channel/UCZSr5B0l07JXK2FIeWA0-jw)
3. [Svelte Society Twitter](https://twitter.com/sveltesociety)
4. [Made with Svelte](https://madewithsvelte.com/)

I will soon be making the Sapper version of my site live. Visit [beta.vishwas.tech](https://beta.vishwas.tech) for a sneak peak.
