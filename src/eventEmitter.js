class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, fn) {
        if(!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(fn);
    }

    emit(eventName, data) {
        if(!this.events[eventName]) return;
            for(let i = 0, len = this.events[eventName].length; i < len; i++) {
                this.events[eventName][i](data);
            }
        }

    off(eventName, unsubscribe) {
        if(!this.events[eventName]) return;
        for(let i = 0, len = this.events[eventName].length; i < len; i++) {
            if(this.events[eventName][i] === unsubscribe) {
                this.events[eventName].splice(i, 1);
                break;
            }
        }
    }
}
