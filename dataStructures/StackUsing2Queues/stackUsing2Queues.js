const Queue = require('./Queue');

let q1 = new Queue();
let q2 = new Queue();

/*
console.log(q1.isEmpty())
q1.addToQueue(12)
q1.addToQueue(13)
q1.addToQueue(14)
q1.addToQueue(15)

let e = q1.deQueue();
console.log('Dequeued Element ---->',e);
console.log(q1.isEmpty())
console.log(q1.peek())*/

function pushToStack(element) {
    if(q1.isEmpty()){
        q1.addToQueue(element);
        while (!q2.isEmpty()){
            q1.addToQueue(q2.deQueue())
        }
    } else {
        q2.addToQueue(element);
        while (!q1.isEmpty()){
            q2.addToQueue(q1.deQueue())
        }
    }
}

function popFromStack() {
    let popedItems = ' <--  ';
    if(q1.isEmpty()){
        while (!q2.isEmpty()){
            popedItems +='<--'+q2.deQueue();
        }
    } else {
        while (!q1.isEmpty()){
            popedItems +='<--'+q1.deQueue();
        }
    }
    console.log(popedItems);
}

pushToStack(1);
pushToStack(2);
pushToStack(3);
popFromStack();
pushToStack(4);
pushToStack(7);
pushToStack(8);
popFromStack();
