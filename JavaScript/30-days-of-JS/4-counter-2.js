function createCounter (init) {
    let currentValue = init;
   
    function increment () {
        currentValue += 1;
        return currentValue;
    }

    function decrement () {
        currentValue -= 1;
        return currentValue;
    }

    function reset () {
        currentValue = init;
        return currentValue;
    }

    return {increment, decrement, reset}
}

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/