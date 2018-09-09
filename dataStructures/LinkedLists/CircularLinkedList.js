class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    addNodeToHead(data) {
        let newNode = new Node(data);
        if(this.head){
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        else{
            this.head = newNode;
            this.head.next = this.head;
        }
    }

    append(data) {
        let newNode = new Node(data);
        if (this.head) {
            let tmpNode = this.head;
            while (tmpNode.next) {
                tmpNode = tmpNode.next;
            }
            newNode.prev = tmpNode;
            tmpNode.next = newNode;
        }
        else {
            this.head = newNode;
            this.head.next = this.head;
        }
    }

    insertAfter(prevNode, data) {
        let newNode = new Node(data);
        if (prevNode) {
            newNode.next = prevNode.next;
            newNode.prev = prevNode;
            prevNode.next = newNode;
        }
        else {
            console.log("Element not found");
        }
    }

    deleteNode(nodeToBeDeleted) {
        let tmpNode = this.head;
        if (nodeToBeDeleted === this.head) {
            this.head.next.prev = null;
            this.head = this.head.next;
        }
        else if (nodeToBeDeleted) {
            while (tmpNode.next !== nodeToBeDeleted) {
                tmpNode = tmpNode.next;
            }
            nodeToBeDeleted.next.prev = tmpNode;
            tmpNode.next = nodeToBeDeleted.next;
        }
        else {
            console.log("Element not found");
        }
    }

    traverse(message) {
        console.log("---- Traversal: " + message + " ----");
        let listToPrint = "Head ";
        let tmpNode = this.head;
        while (tmpNode.next !== this.head) {
            listToPrint += " --> " + tmpNode.data;
            tmpNode = tmpNode.next;
        }
        console.log(listToPrint);
    }

    reverseTraversal(message) {
        console.log("---- Traversal: " + message + " ----");
        let listToPrint = "Tail ";
        let tmpNode = this.head;
        while (tmpNode.next) {
            tmpNode = tmpNode.next;
        }
        while (tmpNode) {
            listToPrint += " --> " + tmpNode.data;
            tmpNode = tmpNode.prev;
        }
        console.log(listToPrint);
    }
}

let c1 = new CircularLinkedList();
c1.addNodeToHead(5);
c1.traverse('Adding node to head');

c1.append(8);
c1.traverse('Appending node at the end');

c1.insertAfter(c1.head.next, 10);
//c1.traverse('Inserting node after particular node');

c1.deleteNode(c1.head.next);
//c1.traverse('Deleting node after particular node');

c1.deleteNode(c1.head);
//c1.traverse('Deleting node after particular node');

//c1.reverseTraversal("Reverse");
