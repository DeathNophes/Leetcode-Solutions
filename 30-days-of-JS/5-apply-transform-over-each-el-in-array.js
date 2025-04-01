// let arr = [1, 2, 3];
// let fn = function plusOne (n) {return n + 1};

function map (arr, fn) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i))
    }

    // If there are more arguments than required,  passed to a function in JS, they are ignored

    return newArr;
}

/**
* map(arr, fn); // [2, 3, 4]
*/