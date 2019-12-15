// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // Creates a new Node from argument 'data' and assigns the resulting node to the 'head' property. Make sure to handle the case in which the
  //  linked list already has a node assigned to the 'head' property.
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    // 	Returns the number of nodes in the linked list.
    
  }
}

module.exports = { Node, LinkedList };
