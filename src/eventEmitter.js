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

function printTitle(data) {
    console.log("Video uploaded: " + data.title);
}

function printDescription(data) {
    console.log("Video uploaded: " + data.description);
}

function printDuration(data) {
    console.log("Video duration: " + data.duration);
}

const videoData = {
    title: 'Event Emitter in JavaScript',
    description: 'Learn how to implement an event emitter in JavaScript.',
    duration: '5 minutes'
};

const eventEmitter = new EventEmitter();

eventEmitter.on("videoUploaded", printTitle);
eventEmitter.on("videoUploaded", printDescription);
eventEmitter.on("videoUploaded", printDuration);

eventEmitter.off("videoUploaded", printTitle);

eventEmitter.emit("videoUploaded", videoData);