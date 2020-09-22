// Write your code here


// create an array of 4 images
let imageArray = [
  'images/kitten1.jpg',
  'images/kitten2.jpg',
  'images/kitten3.jpg',
  'images/kitten4.jpg',
]
let currentImageIndex = 0

let currentTimer

function clearTimers() {
  console.log('will clear timers')
  if(currentTimer) {
    clearInterval(currentTimer)
  }
}

function updateCurrentImage() {
  // find the image element
  let imageElement = document.querySelector('#image')
  // update the image element with the current image
  imageElement.src = imageArray[currentImageIndex]

  let indexElement = document.querySelector('#currentImageIndex')
  indexElement.innerText = currentImageIndex
}

function showNextImage() {
    // set the currentImageIndex to the next one (going back to 0 if necessary)
    currentImageIndex++
    if (currentImageIndex >= imageArray.length) {
      currentImageIndex = 0
    }

    updateCurrentImage()
}

function showPrevImage() {
    //    show the previous image in the array
    currentImageIndex--
    if (currentImageIndex < 0) {
      currentImageIndex = imageArray.length -1
    }

    updateCurrentImage()
}

function setup() {
  // show the first image
  updateCurrentImage()

  // find the forward button
  let forwardButton = document.querySelector('#forwardButton')
  // add click event listener:
  forwardButton.addEventListener('click', showNextImage)

  // find the back button
  let backButton = document.querySelector('#backButton')
  // add click event listener:
  backButton.addEventListener('click', showPrevImage)

  // find the autoforward button
  let autoForwardButton = document.querySelector('#autoForwardButton')
  // attach click event listener:
  autoForwardButton.addEventListener('click', () => {
    //    clears any existing timers
    clearTimers()
    //    every 5 seconds:
    //      move to the next image
    currentTimer = setInterval(showNextImage, 5000)
  })

  // find the autoback button
  let autoBackButton = document.querySelector('#autoBackButton')
  // attach click event listener:
  autoBackButton.addEventListener('click', () => {
    //    clears any existing timers
    clearTimers()
    //    every 5 seconds:
    //      move to the previous image
    currentTimer = setInterval(showPrevImage, 5000)
  })
    
  // find the stop button
  let stopButton = document.querySelector('#stopButton')
  // attach click event listener:
  //    clears any existing timers
  stopButton.addEventListener('click', clearTimers)
}

window.onload = setup