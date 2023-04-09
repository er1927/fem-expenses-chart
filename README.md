# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![](/images/solution.jpg)

### Links

- Solution URL: https://github.com/er1927/fem-expenses-chart
- Live Site URL: https://er1927.github.io/fem-expenses-chart/ (gh-pages doesn't show the bar chart- working on moving this site to Vercel/Netlify)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow


### What I learned

```html
<h5>My balance <br><span>$921.48</span></h5>
```

```css
.white-circle {
    border-radius: 50%;
    border: solid 2px white;
    height:44px;
    width:44px;
    position: relative;
    right: -20px;
}
  
```

```js
mon.addEventListener("mouseover", () => document.getElementById("mon-num").innerHTML= (data[0]["amount"]))
mon.addEventListener("mouseleave", () => document.getElementById("mon-num").innerHTML= "")

    &&

columnMon.style.height = (parseInt(data[0]["amount"]) + "px");

```

### Continued development

Vanilla JS.

## Author

- Website - [Elizabeth Roberts](https://er1927.github.io/personal-portfolio/)
- Frontend Mentor - [@er1927 ](https://www.frontendmentor.io/profile/er1927)
- Github - [@er1927](https://github.com/er1927)
