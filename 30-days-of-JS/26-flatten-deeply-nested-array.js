function flat (arr, n) {
    const res = [];

    function helper (arr, depth) {
        for (const item of arr) {
            if (Array.isArray(item) && depth < n) {
                helper(item, depth + 1)
            } else {
                res.push(item)
            }
        }
        return res
    }
    return helper(arr, 0); // We start with depth = 0
}

/**
* let arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]]
* let n = 1;
* console.log(flat(arr, n)) // [1,2,3,4,5,6,7,8,[9,10,11],12,13,14,15]
*/