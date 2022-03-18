// #1 Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

// #2 Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

// #3 Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  frontValue(value) {
    var newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }
  removeFront() {
    if (this.head == null) {
      return this.head;
    }
    var temp = this.head; // Temp will capture the head value
    this.head = temp.next; // Moving head to the next one in line
    temp.next = null; // Breaks and gets rid of the temp
    return this.head;
  }
  front() {
    if (this.head == null) {
      return null;
    } else {
      return this.head.value;
    }
  }
}

let sll1 = new LinkedList();

console.log(sll1.front());
sll1.frontValue(10);
sll1.frontValue(1);
sll1.frontValue(4);
sll1.frontValue(49);
sll1.removeFront();
console.log(sll1);

// console.log(sll1);
