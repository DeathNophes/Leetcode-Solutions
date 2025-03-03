function debounce (fn, t) {
    let timeoutId; // Stores the timeout reference
    
    return function(...args) {
        clearTimeout(timeoutId);
        // Clears any existing timeout
        timeoutId = setTimeout(() => fn(...args), t);
        // Sets a new timeout
    }
};

/**
* const log = debounce(console.log, 100);
* log('Hello'); // cancelled
* log('Hello'); // cancelled
* log('Hello'); // Logged at t=100ms
*/
