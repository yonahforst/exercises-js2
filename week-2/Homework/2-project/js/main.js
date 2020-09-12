// find each button on page
let blueBtn = document.querySelector('#blueBtn')
let orangeBtn = document.querySelector('#orangeBtn')
let greenBtn = document.querySelector('#greenBtn')



function setTheme(color) {
  // find the jumbotron element
  let jumbotron = document.querySelector('.jumbotron')
  // find the donate element
  let donateBtn = document.querySelector('.jumbotron .btn-primary')
  // find the volunteer element
  let volunteerBtn = document.querySelector('.jumbotron .btn-secondary')
  
  if (color == 'blue') {
    jumbotron.style.backgroundColor = '#588fbd'
    donateBtn.style.backgroundColor = '#ffa500'
    volunteerBtn.style.backgroundColor = 'black'
    volunteerBtn.style.color = 'white'
  } else if (color == 'orange') {
    jumbotron.style.backgroundColor = '#f0ad4e'
    donateBtn.style.backgroundColor = '#5751fd'
    volunteerBtn.style.backgroundColor = '31b0d5'
    volunteerBtn.style.color = 'white'
  } else if (color == 'green') {
    jumbotron.style.backgroundColor = '#87ca8a'
    donateBtn.style.backgroundColor = '#black'
    volunteerBtn.style.backgroundColor = '8c9c08'  
  }
}

// attach event listener to each button
  // on click change the color of the elments to the colors given

blueBtn.addEventListener('click', () => setTheme('blue'))
orangeBtn.addEventListener('click', () => setTheme('orange'))
greenBtn.addEventListener('click', () => setTheme('green'))

// orangeBtn.addEventListener('click', () => {
//   jumbotron.style.backgroundColor = '#f0ad4e'
//   donateBtn.style.backgroundColor = '#5751fd'
//   volunteerBtn.style.backgroundColor = '31b0d5'
//   volunteerBtn.style.color = 'white'
// })

// greenBtn.addEventListener('click', () => {
//   jumbotron.style.backgroundColor = '#87ca8a'
//   donateBtn.style.backgroundColor = '#black'
//   volunteerBtn.style.backgroundColor = '8c9c08'
// })

