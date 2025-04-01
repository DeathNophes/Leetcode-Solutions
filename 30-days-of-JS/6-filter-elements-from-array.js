// let arr = [-2, -1, 0, 1, 2];
// let fn = function plusOne (n) {return n + 1}

function filter (arr, fn) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) newArr.push(arr[i])
    }

    // JS treats nonzero numbers as truthy, and 0 (zero) as falsy

    console.log(newArr);
    return newArr
}

/**
* filter(arr, fn); // [-2, 0, 1, 2]
*/