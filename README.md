# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./public/images/final-build-desktop.png)
![](./public/images/final-build-mobile.png)

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/interactive-rating-component-5lr_Cg7ETs)
- Live Site URL: [Live](https://interactive-rating-component-kohl.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [CSS Modules](https://github.com/css-modules/css-modules) - CSS Modules are a styling library that scopes CSS to the component.
- [classnames](https://www.npmjs.com/package/classnames/) - A simple JavaScript utility for conditionally joining classNames together.

### What I learned

I learned a copule of things in this project, at first , i wasn't sure what is a good approch for the rating element - which html element is the best option? i went with button .

I used useState quite a bit in this project,
I used it for formSubmitted state and the selected rating.

I rendered the form conditionally based on the formSubmitted state:

```React
   {!formSubmitted && (
        <Form
          submitForm={submitFormHandler}
          selectRating={selectRatingHandler}
          selectedRating={selectedRating}
        />
      )}
      {formSubmitted && <FormSubmitted selectedRating={selectedRating} />}
```

I have also used vars for colors in the project, it makes it easy to set styles when it comes to colors.

## Author

- Frontend Mentor - [@comebackist](https://www.frontendmentor.io/profile/comebackist)
- Linkedin - [@Omer Ben Yosef](https://www.linkedin.com/in/oby-se/)
