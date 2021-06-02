'use strict'
export default {
    getRandomInt,
    arraysAreEqual,
    sortArrayByValue,
    sortByValue,
    enableEnter
}

//Random number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + 1 + min)
}

//Compare arrays
function arraysAreEqual(a, b) {
    for (var i = 0; i < a.length; i++)
        if (a[i] != b[i])
            return false;
    return true;
}

//Sort array by value
function sortArrayByValue(arr) {
    arr.sort((a, b) => (a.value > b.value) ? 1 : -1)
}

//Sort object by value
function sortByValue(object) {
    sortByValue = object.sort(function (a, b) {
        return a.value - b.value;
    })
    return sortByValue
}

//enaable enter key in form
function enableEnter() {
    var input = document.getElementById('text');
    input.addEventListener("keyup", function (event) {
        if (event.key === 13) {
            event.preventDefault();
            document.getElementById('submit-btn').click();
        }
    });
}