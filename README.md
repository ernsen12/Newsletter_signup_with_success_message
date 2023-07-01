# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here]
- Live Site URL: [Add live site URL here]
## My process

### Built with

- HTML5
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
  Learned onvalid and oninput attributes and reload(); function.

```html
<button type="button" class="dismiss" onclick="window.location.reload();">

<input  type="email" name="email" id="email" placeholder="email@company.com" required 
                  oninvalid="errorMessage()"  oninput="setCustomValidity('')" >
```
```js
form.addEventListener("submit", (e) => {
    e.preventDefault();
});
```
### Useful resources

- https://css-tricks.com/snippets/css/a-guide-to-flexbox/ - Flexbox cheatsheet.
- https://www.w3schools.com/html/html_forms.asp - all about html forms.

## Author

- Frontend Mentor - [@ernsen12](https://www.frontendmentor.io/profile/ernsen12)

## Acknowledgments

https://www.youtube.com/watch?v=0twwOH_Utmk (Coding Shiksha) - this video helped me to prevent the page from refreshing on submit.


