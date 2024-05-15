const apiKey = '79fb7218276c08743ae3c62ec311f066';
const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=79fb7218276c08743ae3c62ec311f066';
const trailerBaseUrl = 'https://www.youtube.com/embed/';

function getPopularMovies() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const movies = data.results;
        const moviesContainer = document.getElementById('movies-container');

        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.innerHTML = `
            <section class="movie-container">
                                <a href="javascript:void(0);"onclick="getTrailer(${movie.id})">
                                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                                </a>
                                <p><a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank">${movie.title}</a></p>
                            </section>
                        `;
                        moviesContainer.appendChild(movieElement);
        });
    })
    .catch(error => {
        console.error('Error al obtener peliculas: ', error);
    });
}

function getTrailer(movieId) {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
            if (trailer) {
                ShowTrailer(trailer.key);
            } else {
                alert('No se encontro ningun trailer');
            }
        })
        .catch(error => {
            console.error('Error al obtener el trailer: ', error);
        });
}

function openTrailerModal(trailerUrl) {
    const modal = document.getElementById('trailer-modal');
    const iframe = document.getElementById('trailer-video');
    iframe.src = trailerUrl;
    modal.style.display = 'block';
}

function ShowTrailer(trailerKey) {
    const modal = document.getElementById('trailer-modal');
    const iframe= document.getElementById('trailer-video');
    iframe.src = `${trailerBaseUrl}${trailerKey}`;
    modal.style.display = 'block';
}

const modal = document.getElementById('trailer-modal');
const closeModal = document.getElementsByClassName('close')[0];
closeModal.onclick = function() {
    modal.style.display = 'none';
    const iframe = document.getElementById('trailer-video');
    iframe.src = '';
};
window.onload = getPopularMovies;


