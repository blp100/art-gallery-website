## What I learnt

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
    - Forget to change `src` attribute to `srcset` setting  in <picture> element cause display problem
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
         