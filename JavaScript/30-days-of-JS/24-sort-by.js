function sortBy (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b))
};

/**
* let arr = [{"x": 1}, {"x": 0}, {"x": -1}]
* let fn = (d) => d.x
* console.log(sortBy(arr, fn))
*/