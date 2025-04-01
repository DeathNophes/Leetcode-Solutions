// let n = 10

function createCounter (n) {
    increment = -1
    return function () {
        increment += 1
        return n + increment
    }
}

/**
* const counter = createCounter(n);
* console.log(counter()) // 10
* console.log(counter()) // 11
* console.log(counter()) // 12
*/