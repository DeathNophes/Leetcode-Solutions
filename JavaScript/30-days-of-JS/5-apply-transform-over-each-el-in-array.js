// let arr = [1, 2, 3];
// let fn = function plusone (n) {return n + 1};

function map (arr, fn) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i))
    }

    // If there are more arguments passed to a function is JS than required, they are ignored

    return newArr;
}

// map(arr, fn);