const movies = [
    {title: "Los buenos profesores", link:"https://www.youtube.com/watch?v=ke5f9cm9Occ", poster:"images/buenosProfesores.jpg" },
    {title: "Amigos Imaginarios", link: "https://www.youtube.com/watch?v=_uc_BFDBUII", poster: "images/amigosImaginarios.jpg"},
    {title: "Caida libre", link: "https://www.youtube.com/watch?v=AhrOksKAxxY", poster: "images/CaidaLibre.jpg"},
    {title: "La Caja de cristal", link:"https://www.youtube.com/watch?v=98Wgi2TiR40", poster: "images/CajadeCristal.jpg"},
    {title: "Calladita", link:"https://www.youtube.com/watch?v=akrlWJF15cY", poster: "images/Calladita.jpg"},
    {title: "Un sol radiant", link:"https://youtu.be/jLpBcULDmNQ?si=M7FlmnVvvGYQSv5i", poster: "images/solRadiant.jpg"},
    {title: "Disco, Ibiza, Locomía", link:"https://www.youtube.com/watch?v=v4U3_7UPVig", poster: "images/discoIbiza.jpg"},
    {title: "Lo que sucede despues", link:"https://www.youtube.com/watch?v=ecFsECgN7XE", poster:"images/LoqueSucedeDespues.jpg"},
    {title: "Manolo Kabezabolo", link:"https://www.youtube.com/watch?v=WzAUdyjD2EM", poster: "images/ManoloKabezaBolo.jpg"},
    {title: "Victima Imperfecta", link:"https://www.youtube.com/watch?v=qpdIMz7yckE", poster: "images/troughtTheNight.jpg"},
    {title: "3 dias maximo", link:"https://www.youtube.com/watch?v=zD0TF0HFz8o", poster: "images/3DiasMaximo.jpg"},
    {title: "Mars Express", link:"https://www.youtube.com/watch?v=dqIJD9cP5Tc", poster: "images/mars-Express.jpg"},
];

document.addEventListener('DOMContentLoaded', function() {
function searchMovies() {
    const searchInput = document.getElementById('search-input').value.trim();
    const searchResults = movies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()));
    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = '';
    searchResults.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `
        <section class="movie-container">
        <a href="${movie.link}" target="_blank">
            <img src="${movie.poster}" alt="${movie.title}
            ">
        </a>
        <p><a href="${movie.link}" target="_blank">${movie.title}</a></p>
            </section>
        `;
        searchResultsContainer.appendChild(movieElement);
    });
};

document.getElementById('search-button').addEventListener('click', searchMovies);
document.getElementById('search-input').addEventListener('keypress', function(event){
    if(event.key === 'Enter') {
        event.preventDefault();
        searchMovies();
    }
})
window.addEventListener('scroll', function(){
    document.getElementById('search-input').value = '';
    document.getElementById('search-results').innerHTML = '';
});
});