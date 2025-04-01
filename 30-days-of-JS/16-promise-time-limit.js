function timeLimit (fn, t) {
    
    return async function(...args) {
        // Returns Promise
        return new Promise ((resolve, reject) => {
            const timeoutId = setTimeout(() => reject("Time Limit Exceeded"), t);
            
            fn(...args)
                .then(res => resolve(res))
                .catch(err => reject(err))
                .finally(() => clearTimeout(timeoutId));
        })
    }
};


/**
* function fn (t) {
*     return new Promise (res => setTimeout(res, t))
* }
* 
* const limited = timeLimit(fn, 100)
* 
* limited(150).catch(console.log) // "Time Limit Exceeded"
*/