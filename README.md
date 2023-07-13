# Frontend Mentor Challenge 5 - Art Gallery Website

This is a solution to the [Art Gallery Website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/art-gallery-website-yVdrZlxyA). 
## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [New Stuff for me](#new-stuff-for-me)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Development Dairy](#development-dairy)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
## Overview
This challenge is truly inspiring to me. The styles, colors, and spacing, everything is absolutely perfect, which fuels my passion for becoming a frontend developer. I love creating beautiful things and bringing them to life.

Taking on this challenge is also a great opportunity for me to explore map development, an area where I have little experience.

And... Here I am, ready to take on the challenge and make it happen! 

### The challenge
Users should be able to:
- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Bonus: Use Leaflet JS to create an interactive location map with custom location pin

### Links
- Source Code: [Gihub Source](https://github.com/blp100/art-gallery-website)
- Live Site: [Vercel Link](https://blp100.github.io/art-gallery-website/location.html)
---
## My process
### Built with
- Setup tailwindcss environment
- Import Image and Default Setting from challenge package
- Semantic HTML5 markup
- Mobile-first workflow
- `Bonus:` Leaflet JS custom location pin [leaflet.js](https://leafletjs.com/)
- [tailwindcss](https://tailwindcss.com//)

## New Stuff for me
- Learned about the `<picture>` and `<srcset>` HTML tags for responsive images.
- Explored the combination of Tailwind CSS with pure HTML for styling.
- Made animation with tailwindcss
- Utilized the Leaflet.js library for incorporating interactive maps into the project.

### Continued development
After completing this challenge, I realized how fascinating it is to create custom CSS animations from scratch. Additionally, I discovered that importing and implementing a map is not as difficult as I initially thought, but customizing the map styles presents another challenge.

I would like to refine the map styles later. And it's to take on the **Boss level**. 
### Useful resources
- setup resposive image with Html tag
    - REF: https://web.dev/learn/design/picture-element/
    - https://web.dev/learn/design/responsive-images/
    - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes

- Grid system
    - REF: https://css-tricks.com/snippets/css/complete-guide-grid/

- Gradient webtool
    - REF: https://hypercolor.dev/
    - REF: https://cssgradient.io/

- Pure CSS Button animation
    -REF: https://codepen.io/kjbrum/pen/wBBLXx

## Development Dairy

07.02 tailwind css can install in dev dependencies with prettier
07.03 figure out how to setup resposive image with Html tag
    - REF: https://web.dev/learn/design/picture-element/
           https://web.dev/learn/design/responsive-images/
           https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes
07.04 setting up mobile index.html
    - <span styles="display: inline-block"></span> replace <br /> for Responsive setting
07.05 study grid system
    - REF: https://css-tricks.com/snippets/css/complete-guide-grid/
    - thinking about iOS scorlling down will reveal background
    - can solve with body background color setting
07.06
    - Forget to change `src` attribute to `srcset` setting in <picture> element cause display problem
    - Attempt: first try, it work to change text color by background, but the result it's not I want to.
        - REF: https://css-tricks.com/methods-contrasting-text-backgrounds/
    - Find good gradient webtool
        - REF: https://hypercolor.dev/
        - REF: https://cssgradient.io/
    - To access a parameter that you have set in the `tailwind.config.js` file using the syntax `${theme("colors.white")}`. This will retrieve the value of the `colors.white` parameter defined in your Tailwind CSS configuration.
07.07
    - Fixed text problem, I did the two things wrong.
        - Attempted using absolute positioning to fix the logo placement but encountered a limitation where CSS cannot combine percentage and numeric values simultaneously.
        - Implemented an alternative approach but forgot to include `position: relative` when using `position: absolute`.
    - Made an attempt to implement CSS button animation.
        - Explored the code for button animation, drawing inspiration from a CodePen example.
            -REF: https://codepen.io/kjbrum/pen/wBBLXx
        - Learned about the :before CSS pseudo-element and the usage of aria- HTML attributes.
        - Became more familiar with the transform property and its capabilities. 
07.08
    - Attempt to css animation on a button, but still face z-index problem(old enemy?)
07.09
    - Implemented CSS hover animation using ::before and ::after pseudo-elements. Initially unsure if it would work for button animation, but the end result turned out to be impressive. 
07.10 
    - Successfully resolved the z-index issue, which turned out to be a familiar challenge. 
    - Completed all pages without integrating a real map. 
07.11
    - Overslept today, but managed to do some research on the map API provided by http://leafletjs.com. It's quite interesting.
07.12
    - Attempt to customize the color settings on the map
    - Changed the map tile layer using the leaflet-providers library.
        - REF: https://leaflet-extras.github.io/leaflet-providers/preview/
    - Found a helpful resource for implementing SVG icons with Leaflet. 
        - REF: https://onestepcode.com/leaflet-markers-svg-icons/
07.13
    - add the land marker. 
    - Finish challenge.

## Author
- Website - [Personal site](https://po-cheng-yeh.vercel.app/)
- Frontend Mentor - [@blp100](https://www.frontendmentor.io/profile/blp100)
## Acknowledgments
I am grateful to my friends who have supported me, even though they prefer to remain anonymous.

