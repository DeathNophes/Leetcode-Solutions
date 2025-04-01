function chunk (arr, size) {
    let output = [];
    let subarr = [];

    for (let i = 0; i < arr.length; i++) {
        subarr.push(arr[i]);
        if (subarr.length === size) {
            output.push(subarr);
            subarr = [];
        }
    }

    if (subarr.length) output.push(subarr)

    return output;
};

/**
* let arr = [1,9,6,3,2];
* let size = 3;
* console.log(chunk(arr, size)) // [[1,9,6], [3,2]]
*/
