// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const result =  movies.map(movie => movie.director)
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const directorMovies = movies.filter(movie => movie.director === director)
  return directorMovies;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  
  const directorMovies = getMoviesFromDirector(movies, director); 
  
  //total es el acumulador, movie el objeto a recorrer
  const sumaScore = directorMovies.reduce((total, movie)=> total + movie.score, 0); 
  const directorAverage = sumaScore / directorMovies.length;
  
  //con parseFloat nos aseguramos de que devuelva un number y no un string, y con toFixed delimitamos a dos decimales. 
  return parseFloat(directorAverage.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const moviesList = movies.map(movie => movie.title).sort((a,b)=> a.localeCompare(b));
  return moviesList.slice(0, 20);
}


// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const moviesYear = [...movies];

  moviesYear.sort((a, b) =>{
    if(a.year != b.year){
      return a.year - b.year;
    }else{
      return a.title.localeCompare(b.title);
    }
  });

  return moviesYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  
  const genreMovies = movies.filter(movie => movie.genre.includes(category));
  const sumaScore = genreMovies.reduce((total, movie) => total + movie.score,0);
  const genreAverage = sumaScore / genreMovies.length;
  // Usamos parseFloat para asegurarnos de que el resultado sea un número, y toFixed para limitar a dos decimales.
  return parseFloat(genreAverage.toFixed(2));
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  const movieMinuts = movies.map(movie => {
    const matx = movie.duration.match(/(\d+)h(?:\s*(\d+)min)?/);
    
    if(matx){
      const h = parseInt(matx[1], 10);
      const m = matx[2] ? parseInt(matx[2], 10) : 0; //Si duration solo esta en formato hora, le asigna 0 a los minutos!
      const newDuration = h * 60 + m;
      return {
        ...movie,
        duration: newDuration
      };
    } else {
      return movie;
    }

  })
  console.log(movieMinuts);
  return movieMinuts;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies,year) {
  const moviesOfYear = movies.filter(movie => movie.year === year);
  const bestMovie = moviesOfYear.reduce((maxMovie, movie) => {
    return movie.score > maxMovie.score ? movie : maxMovie;
  });

  return [bestMovie];
}


  


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
