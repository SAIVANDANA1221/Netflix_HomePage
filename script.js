const moviesData = [
    { title: 'Inception', image: 'inception.jpeg' },
    { title: 'The Matrix', image: 'matrix.jpeg' },
    { title: 'The Shawshank Redemption', image: 'shawshank.jpeg' },

];
function generateMovieCards() {
    const moviesSection = document.querySelector('.movies');

    moviesData.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const movieImage = document.createElement('img');
        movieImage.src = movie.image;
        movieImage.alt = movie.title;

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;

        movieCard.appendChild(movieImage);
        movieCard.appendChild(movieTitle);
        moviesSection.appendChild(movieCard);
    });
}
generateMovieCards();
