class Calculator {
    constructor(value) {
        this.result = value;
    }

    add(value){
        this.result += value;
        return this
    }
    
    subtract(value){
        this.result -= value;
        return this
    }
    
    multiply(value) {
        this.result *= value;
        return this
    }
    
    divide(value) {
        if (value !== 0) {
            this.result /= value;
        } else {
            throw Error("Division by zero is not allowed")
        }
        return this
    }
    
    power(value) {
        this.result **= value
        return this
    }
    
    getResult() {
        return this.result;
    }
}

/**
* const calc = new Calculator(10)
* calc.add(5)
* calc.subtract(7)
* calc.getResult() // 8
*/