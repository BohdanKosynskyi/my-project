const API_KEY = 'c500ea51'

async function searchMovie(search, type = '', year = '') {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${type}&y=${year}`)
    const data = await response.json()

    if (data.Response === 'False') {
        toast.error(data.Error)
        return
    }

    showMoviesList(data.Search)
}

function showMoviesList(movies) {
    let list = '';
    movies.forEach(movie => {
        list += `
            <div class="card mb-3">
                <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}" onerror="this.src='assets/movie/assets/images/no-img_720.png'">
                <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text"><b>Year: </b>${movie.Year}</p>
                    <button class="btn btn-primary detailed-btn" data-id="${movie.imdbID}">Detailed</button>
                    <button class="btn btn-warning favorite-btn" data-id="${movie.imdbID}">★</button>
                </div>
            </div>
        `;
    });

    document.getElementById('movies-list').innerHTML = list;
    document.querySelectorAll('.detailed-btn').forEach(button => {
        button.addEventListener('click', async (e) => {
            const movieId = e.target.getAttribute('data-id');
            await showMovieDetails(movieId);
        });
    });
    document.querySelectorAll('.favorite-btn').forEach(button =>{
    const movieId = button.getAttribute('data-id')
    
    if (isFavorite(movieId)){
        button.classList.add('active')
    }

    button.addEventListener('click', () =>{
        toggleFavorite(movieId)
        button.classList.toggle('active')
    })
})
}

async function showMovieDetails(id) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
    const data = await response.json();

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="text-center">
            <img src="${data.Poster}" alt="${data.Title}" class="img-fluid mb-3" style="max-height: 300px;" onerror="this.src='assets/movie/assets/images/no-img_720.png'">
        </div>
        <h5>${data.Title} (${data.Year})</h5>
        <p><b>Genre:</b> ${data.Genre}</p>
        <p><b>Director:</b> ${data.Director}</p>
        <p><b>Plot:</b> ${data.Plot}</p>
        <p><b>IMDb Rating:</b> ${data.imdbRating}</p>
    `;

    const modal = new bootstrap.Modal(document.getElementById('movieModal'));
    modal.show();
}

const form = document.getElementById('search-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const search = document.getElementById('search-inp').value.trim();
    const type = document.getElementById('type').value;
    const year = document.getElementById('year').value;

    if (search === '') {
        return toast.info('Enter movie name for search');
    }

    searchMovie(search, type, year);
});

document.getElementById('year').setAttribute('max', new Date().getFullYear());

function isFavorite(id){
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    return favorites.includes(id)
}

function toggleFavorite(id){
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []

    if (favorites.includes(id)){
        favorites = favorites.filter(favId => favId !== id)
    } else {
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}
