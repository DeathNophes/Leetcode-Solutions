function expect (val) {

    function toBe (n) {
        if (val === n) return true
        else throw Error("Not Equal")
    }
    
    function notToBe (n) {
        if (val !== n) return true
        else throw Error("Equal")
    }

    return {toBe, notToBe}
}

/**
* expect(5).toBe(5) // true
* expect(5).toBe(null) // {"error": "Not Equal"}
*/