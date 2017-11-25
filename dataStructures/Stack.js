class Stack {

    constructor() {
        this.node = [];
        this.next = null;
        this.top = null;
    }

}

Stack.prototype.isEmpty = function() {
    return this.top === null
}

Stack.prototype.peek = function() {
    return this.node[this.top];
}

Stack.prototype.push = function(element) {
    if (this.isEmpty()) {
        this.top = 0;
    }
    this.node.push(element)
    this.top = this.node.length - 1
    return;
}

Stack.prototype.pop = function() {
    let e = this.node[this.node.length - 1]
	console.log(e,this.node)
    this.node.pop()

    this.top = this.node.length - 1

    if (!this.node.length) {
        this.top = null;
    }

    return e;
}



let q1 = new Stack();

console.log(q1.isEmpty())
q1.push(12)
q1.push(13)
q1.push(14)
q1.push(15)

let e = q1.pop();
console.log('Poped Element ---->',e)

q1.push(16)

console.log(q1.isEmpty())
console.log(q1.peek())
