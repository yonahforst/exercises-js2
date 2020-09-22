/*
================

1. Create an HTML file that uses this javascript file.
2. The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
3. When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=45 with 
user latitude and longitude.
4. When you get the response from the server, print the current temperature in an <h3> marker.
5. Validate the form when you click on the button, if the inputs are empty or are not numeric, show a warning message

================
*/


// calls the fcc weather api with the longitude and latitude from the form
// dont fetch the weather if the fields are invalid
function fetchWeather() {
  // find the latitude field
  let latField = document.querySelector('#latitude')
  // find the longitude field
  let longField = document.querySelector('#longitude')

  // check if the fields are valid
  let areFieldsFilled = latField.value.length > 0 && longField.value.length > 0
  let areFieldsNumbers = !isNaN(latField.value) && !isNaN(longField.value)

  // if they are: 
  if (areFieldsFilled && areFieldsNumbers) {
    // create a new url string using the values from those fields
    let url = 'https://fcc-weather-api.glitch.me/api/current?lat=' + latField.value + '&lon=' + longField.value
    // call the url and log the response
    let promise = fetch(url)

    promise
    .then(response => response.json())
    .then(result => printWeather(result))
  } else {  // if they are not:
    // show an error
    let currentWeatherElement = document.querySelector('#currentWeather')
    currentWeatherElement.innerText = 'Fields are not valid'
  }
}

// parses the weather info from the object and updates the current weather h3 element
function printWeather(weatherObj) {
// get the weather and location from the weather object
  let currentTemp = weatherObj.main.temp
  let currentLocation = weatherObj.name + ', ' + weatherObj.sys.country
// find the currentWeather element on the page
  let currentWeatherElement = document.querySelector('#currentWeather')
// update the element with the current weather
  currentWeatherElement.innerText = 'The current temperature in ' + currentLocation + ' is ' + currentTemp
}

// find the button on the page
let getButton = document.querySelector('#submitButton')
// attach an event listener to the button which call the fetchWeather function
getButton.addEventListener('click', fetchWeather)