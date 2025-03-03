Array.prototype.groupBy = function(fn) {
    const output = {};

    for (let i = 0; i < this.length; i++) {
        const key = fn(this[i]);

        if (!output[key]) output[key] = [];

        output[key].push(this[i])
    }

    return output;
};

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/

