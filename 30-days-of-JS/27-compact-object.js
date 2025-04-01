function compactObject (obj) {
    if (obj === null) return null

    if (Array.isArray(obj)) {
        return obj.reduce((acc, currentValue) => {
            let result = compactObject(currentValue);
            if (result) acc.push(result)
            return acc
        }, [])
    }

    if (typeof obj === 'object') {
        return Object.keys(obj).reduce((acc, currentKey) => {
            let result = compactObject(obj[currentKey]);
            if (result) acc[currentKey] = result
            return acc
        }, {})
    }

    return obj; // Primitive case
}

/**
* let obj1 = [null, 0, false, 1]; // [1]
* let obj2 = {"a": null, "b": [false, 1]}; // { b: [1] }
* let obj3 = [null, 0, 5, [0], [false, 16]]; // [ 5, [], [ 16 ] ]
*/