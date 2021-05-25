export const userService = {
    getUser,
    getEmptyUser,
    updateUserMove
}

const loggedInUser = {
    name: "Ochoa Hyde",
    coins: 100,
    moves: []
}

function getUser() {
    return loggedInUser
}

function getEmptyUser(){
    return {
        fullname: '',
        username: '',
        password: '',
    }
}

function updateUserMove(move) {
    loggedInUser.moves.push(move)
    loggedInUser.coins -= move.amount
    // console.log('loggedInUser.move:', loggedInUser.moves)
}
