class EventEmitter {
    constructor () {
        this.events = {};
    }

    subscribe (eventName, callback) {
        if (! this.events[eventName]) {
            this.events[eventName] = [];
        }

        let callbackArray = this.events[eventName];
        callbackArray.push(callback);

        return {
            unsubscribe: () => {
                let position = callbackArray.indexOf(callback);
                if (position >= 0) {
                    callbackArray.splice(position, 1);
                }
            }
        }
    }

    emit (eventName, args = []) {
        if (! this.events[eventName]) return []
        
        let callbackArray = this.events[eventName];
        let resultArray = [];

        for (let callback of callbackArray) {
            resultArray.push(callback(...args))
        }

        return resultArray;
    }

}

/**
* const emitter = new EventEmitter();
* 
* // Subscribe to the onClick event with onClickCallback
* function onClickCallback() { return 99 }
* const sub = emitter.subscribe('onClick', onClickCallback);
* 
* emitter.emit('onClick'); // [99]
* sub.unsubscribe(); // undefined
* emitter.emit('onClick'); // []
*/
