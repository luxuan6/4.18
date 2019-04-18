var str = [1, 2, 3, 4]

function require(arr) {

    define(arr)
}

function define(arr) {
    console.log(arr)
    return arr
}
require(str)