class Queue {

    constructor() {
        this.node = [];
        this.next = null;
        this.head = null;
        this.tail = null;
    }

}

Queue.prototype.isEmpty = function() {
    return this.head === null
};

Queue.prototype.peek = function() {
    return this.node[this.head];
};

Queue.prototype.addToQueue = function(element) {
    if (this.isEmpty()) {
        this.head = 0;
        this.tail = 0;
    }
    this.node.push(element);
    this.tail = this.node.length;
};

Queue.prototype.deQueue = function() {
    let e = this.node[0];
	
    this.node.splice(0,1);

    this.tail = this.node.length;

    if (!this.node.length) {
        this.tail = null;
        this.head = null
    }

    return e;
};

module.exports = Queue;
/*
let q1 = new Queue();

console.log(q1.isEmpty())
q1.addToQueue(12)
q1.addToQueue(13)
q1.addToQueue(14)
q1.addToQueue(15)

let e = q1.deQueue();
console.log('Dequeued Element ---->',e)
console.log(q1.isEmpty())
console.log(q1.peek())*/
