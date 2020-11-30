
function MyEvent(){
    this.handle = {};
}

MyEvent.prototype.addEvent = function(eventName, fn){
    if (typeof this.handle[eventName] == "undefined") {
        this.handle[eventName] = [];
    }
    this.handle[eventName].push(fn);
}

MyEvent.prototype.trigger = function(eventName){
    this.handle[eventName].forEach(v => {
        v();
    })
}
MyEvent.prototype.removeEvent = function(eventName, fn){
    if (!fn in this.handle[eventName]) {
        return;
    }
    for (let i = 0; i < this.handle[eventName].length; i++) {
        if (this.handle[eventName][i] === fn) {
            this.handle[eventName].splice(i, 1);
            break;
        }
    }
}

module.exports = MyEvent;