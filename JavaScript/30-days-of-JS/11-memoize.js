// const sum = (a, b) => a + b;

function memoize(fn) {
    let cache = {};

    return function(...args) {
        const key = args.join(',')

        if (cache[key] !== undefined) {
            return cache[key]
        }

        result = fn(...args)
        cache[key] = result
        return result
    }
}

/**
* const memoizedSum = memoize(sum);
* console.log(memoizedSum(2, 2))
* console.log(memoizedSum(2, 2))
* console.log(memoizedSum())
* console.log(memoizedSum(1, 2))
* console.log(memoizedSum())
*/
