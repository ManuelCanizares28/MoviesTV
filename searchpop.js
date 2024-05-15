document.addEventListener('DOMContentLoaded', function() {
const apiKey = '79fb7218276c08743ae3c62ec311f066';
const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=79fb7218276c08743ae3c62ec311f066';
const searchInput = document.getElementById('search-input');
const moviesContainer = document.getElementById('movies-container');

function fetchMovies() {
    return fetch(apiUrl)
    .then(response => {
        if(!response.ok) {
            throw new Error('Error al obtener peliculas');
        }
        return response.json();
    })
    .then(data => {
        return data.results;
})
    .catch(error => console.error('Error al obtener peliculas: ', error));
}

function displayMovies(movies) {
    console.log('Peliculas a mostar: ',movies);
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <p>${movie.title}</p>
        `;
        moviesContainer.appendChild(movieElement);
    });
}

function searchMovies(query) {
    fetchMovies()
    .then(movies => {
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
        displayMovies(filteredMovies);
        registerMovieClickEvents(filteredMovies);
    });
}

document.getElementById('search-button').addEventListener('click', function (){
    const query = searchInput.value.trim();
    searchMovies(query);
});

searchInput.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        const query = searchInput.value.trim();
        searchMovies(query);
    }
});

searchInput.addEventListener('keyup', function(event) {
    const query = event.target.value.trim();
    searchMovies(query);
});

fetchMovies().then(displayMovies);
});