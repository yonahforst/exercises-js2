/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
var pElements = document.querySelectorAll('p')
console.log(pElements)

var firstDiv = document.querySelector('div')
console.log(firstDiv)

var jumboElement = document.querySelector('#jumbotron-text')
console.log(jumboElement)

var pElementsInsidePrimary = document.querySelectorAll('.primary-content p')
console.log(pElementsInsidePrimary)
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var alertButton = document.querySelector('#alertBtn')
alertButton.addEventListener('click', function() {
    alert("Thanks for visiting Bikes for Refugees!")
})

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

/////THIS CODE IS DISABLED BECAUSE IT CONFLICTS WITH TASK 7
// // get change color button element
// var changeColorButton = document.querySelector('#bgrChangeBtn')

// // add event listener that:
// //   gets page element
// //   sets page's backgroundColor to 'red'
// changeColorButton.addEventListener('click', function() {
//     var pageElement = document.querySelector('body')
//     pageElement.style.backgroundColor = 'red'
// })


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

// find 'add some text' button'
var addTextButton = document.querySelector('#addTextBtn')
// add click event listener that:
addTextButton.addEventListener('click', function() {
    //   find section that says 'LEARN MORE'
    var learnMoreSection = document.querySelector('.primary-content > .heading-underline')
    //   create a new p element
    var newParagraph = document.createElement('p')
    //   append it to the section
    learnMoreSection.appendChild(newParagraph)
})

let paragraphs = document.querySelectorAll("p");
let paragraphsArray = Array.from(paragraphs)
paragraphsArray.forEach(function (p) {
    // p.style.backgroundColor = 'blue'
    p.className = p.className + ' blueBackground'
})

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
//find the larger links button
let largerLinksBtn = document.querySelector('#largerLinksBtn')
//attach a click event listener that:
largerLinksBtn.addEventListener('click', (event) => {
    event.preventDefault()

    //  finds all links on the page
    let allLinks = document.querySelectorAll('a')
    
    //  for each link, change the fontsize to fontsize + 1
    allLinks.forEach(link => {
        //// if we want links to keep growing...
        // let currentSizeInt = parseInt(link.style.fontSize)
        // link.style.fontSize = currentSizeInt + 1 + 'em'

        // if the link should only grow once
        link.style.fontSize = '2em'
    })
})

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
//find the add button on the page
let addButton = document.querySelector('#addArticleBtn')
//add an click event listener that:
addButton.addEventListener('click', (event) => {
    event.preventDefault()
//  find the input field on the page
    let inputField = document.querySelector('input.addArticle')
//  get the text from that field
    let inputText = inputField.value
//  create a new paragraph element
    let newElement = document.createElement('p')
//  set the text of the new element to be the input field text
    newElement.innerText = inputText
//  find the learn more section
    var learnMoreSection = document.querySelector('.primary-content > .heading-underline')
//  append the new paragraph element
    learnMoreSection.appendChild(newElement)
//  clear the input field
    inputField.value = ''
})


/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

let colors = [ 'red', 'blue', 'green', 'yellow', 'orange']

//find the change color button
let changeColorBtn = document.querySelector('#bgrChangeBtn')
//attach click event listener that:
changeColorBtn.addEventListener('click', (event) => {
    event.preventDefault()
    //  find the page element
    let pageElement = document.querySelector('body')
    //  calculate the next color
        // get the current background color
        let currentColor = pageElement.style.backgroundColor
        // find the index of that color in the colors array
        let colorIndex = colors.findIndex(color => color === currentColor)
        // get the color in the next position (index + 1)
        let nextColor = colors[colorIndex + 1] || colors[0]

    //  set the page background to the next color
    pageElement.style.backgroundColor = nextColor

    console.log(
        'current color is: ' + currentColor,
        'colorIndex is: ' + colorIndex,
        'nextColor is: ' + nextColor,
        'backgroundColor is: ' + pageElement.style.backgroundColor,
    )
})