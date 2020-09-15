/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).



Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

// find the page element
let page = document.querySelector('#main')
// after 5 seconds:
setTimeout(() => {
  //   set the backgroundColor of the page to red
  page.style.backgroundColor = 'red'
}, 5000)


// create an array of colors
let colorArray = ["blue","yellow","green","red"]
let currentColorIndex = 0
// every 5 seconds:
setInterval(() => {
//   get a new color
  let newColor = colorArray[currentColorIndex]
//   set the backgroundColor to the new color
  page.style.backgroundColor = newColor
  if (currentColorIndex >= 3) {
    currentColorIndex = 0
  } else {
   currentColorIndex = currentColorIndex + 1
  }
}, 5000)