async function addTwoPromises (promise1, promise2) {
    let result = await promise1 + await promise2;
    return result;
};

/**
* addTwoPromises(Promise.resolve(2), Promise.resolve(2))
*     .then(console.log); // 4
*/