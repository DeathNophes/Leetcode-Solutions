// let nums = [1, 2, 3, 4];
// let fn = function sum (acc, curr) {return acc + curr};
// const init = 0

function reduce (nums, fn, init) {
    if (nums.length === 0) return init

    let value = init;

    for (let i = 0; i < nums.length; i++) {
        value = fn(value, nums[i])
    }

    return value
}

/**
* reduce(nums, fn, init) // 10
*/