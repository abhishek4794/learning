class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    addNodeToHead(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    append(data) {
        let newNode = new Node(data);
        if (this.head) {
            let tmpNode = this.head;
            while (tmpNode.next) {
                tmpNode = tmpNode.next;
            }
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
            prevNode.next = newNode;
        }
        else {
            console.log("Element not found");
        }
    }

    deleteNode(nodeToBeDeleted) {
        let tmpNode = this.head;
        if (nodeToBeDeleted === this.head) {
            this.head = this.head.next;
        }
        else if(nodeToBeDeleted){
            while (tmpNode !== nodeToBeDeleted) {
                tmpNode = tmpNode.next;
            }
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
        listToPrint += " --> null";
        console.log(listToPrint);
    }
}

let s1 = new SinglyLinkedList();
s1.traverse("");
s1.addNodeToHead(5);
s1.traverse('Adding node to head');

s1.append(8);
s1.append(9);
s1.traverse('Appending node at the end');

s1.insertAfter(s1.head.next, 10);
s1.traverse('Inserting node after particular node');

s1.deleteNode(s1.head.next);
s1.traverse('Deleting node after particular node');

s1.deleteNode(s1.head);
s1.traverse('Deleting node after particular node');
