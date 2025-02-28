// let fn = (a,b,c) => (a + b + c)

function once (fn) {
    let flag = true;

    return function check (...args) {
        if (flag === true) {
            flag = false;
            return fn(...args);
        }
        return undefined
    }
}

/**
* let onceFn = once(fn)
* console.log(onceFn(1,2,3)); // 6
* console.log(onceFn(2,3,6)); // returns undefined without calling fn
*/
