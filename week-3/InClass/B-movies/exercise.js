/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

/**
Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"
 */

// create showMovies function


function addMovieToScreen(movie) {
  // find the #all-movies div
  let allMovies = document.querySelector('div #all-movies')
  //    create a new <p> element
  let newElement = document.createElement('p')
  //    set the inner text to the movie title and director
  newElement.innerText = movie.title + ' - ' + movie.director
  //    append the new element to the all movies div
  allMovies.appendChild(newElement)

  // find the #movies-number element
  let moviesNumber = document.querySelector('#movies-number')
  // set its inner text to the length of the movie array
  moviesNumber.innerText = movies.length
}

// add each movie in the movie array as a p element ot the #all-movies div
// show the number of movies inside the #movies-number element
function showMovies(callbackFunc) {
// find the #all-movies div
  setTimeout(() => {
      // for each movie in the array:
    for (let movie of movies) {
      callbackFunc(movie)
    }
  }, 1000)
}

// create a new movie object for your favorite movie

/**
 * Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

 * 
 */
let myFavMovie = {
  title: "The Godfather",
  director: "Francis Ford Coppola",
  type: "drama",
  haveWatched: true,
}

// create addMovies function
function addMovies(newMovie, callbackFunc) {
  setTimeout(() => {
    movies.push(newMovie)
    callbackFunc(newMovie)
  }, 2000)
}

addMovies(myFavMovie, addMovieToScreen)
showMovies(addMovieToScreen)

