function promiseAll (functions) {
    return new Promise((resolve, reject) => {
        let result = [];
        let counter = 0;

        functions.forEach((fn, index) => {
            fn()
                .then(res => {
                    result[index] = res;
                    counter++;

                    if (counter === functions.length) {
                        resolve(result)
                    }
                })
                .catch(error => {
                    reject(error)
                })
        });
    })
};


/**
* const promise = promiseAll([
*     () => new Promise(res => res(42)),
*     () => new Promise(res => res(55))
* ]);
* 
* promise.then(console.log); // [42, 55]
*/