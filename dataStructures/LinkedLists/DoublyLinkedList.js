class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    addNodeToHead(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        (this.head) ? this.head.prev = newNode : null;
        this.head = newNode;
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
        while (tmpNode) {
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

let d1 = new DoublyLinkedList();
d1.addNodeToHead(5);
d1.traverse('Adding node to head');

d1.append(8);
d1.traverse('Appending node at the end');

d1.insertAfter(d1.head.next, 10);
d1.traverse('Inserting node after particular node');

d1.deleteNode(d1.head.next);
d1.traverse('Deleting node after particular node');

d1.deleteNode(d1.head);
d1.traverse('Deleting node after particular node');

d1.reverseTraversal("Reverse");
