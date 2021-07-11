export const userService = {
    getUser,
    getEmptyUser,
    toggleFavMovie,
    checkIfMovieFav
}

const loggedInUser = {
    name: "Dor Shaul",
    favMovies: [508943, 337404]
}

function getUser() {
    return loggedInUser
}

function getEmptyUser() {
    return {
        fullname: '',
        username: '',
        password: '',
    }
}

function toggleFavMovie(movieId) {
    const movieIdx = loggedInUser.favMovies.findIndex(id => id === movieId)
    movieIdx === -1 ? loggedInUser.favMovies.unshift(movieId) : loggedInUser.favMovies.splice(movieIdx, 1);
}

function checkIfMovieFav(movieId) {
    return loggedInUser.favMovies.includes(movieId)
}