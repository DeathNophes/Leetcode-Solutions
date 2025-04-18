class ArrayWrapper {
    constructor (nums) {
        this.nums = nums;
    }
}

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((acc, current) => acc + current, 0);
}

ArrayWrapper.prototype.toString = function() {
    return `[${String(this.nums)}]`
}

/**
* const obj1 = new ArrayWrapper([1,2]);
* const obj2 = new ArrayWrapper([3,4]);
* obj1 + obj2; // 10
* String(obj1); // "[1,2]"
* String(obj2); // "[3,4]"
*/