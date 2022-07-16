'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return true;
    }

    let nodes = this.head;
    while (nodes !== null) {
      if (nodes.next === null) {
        nodes.next = newNode;
        break;
      }
      nodes = nodes.next;
    }

    return this;
  }

  insertBefore(value, newValue) {
    if (this.head === null) this.head = new Node(value);
    let nodes = this.head;

    while (nodes !== null) {
      if (nodes.value === value) {
        let newNode = new Node(value);
        newNode.next = nodes.next;
        nodes.value = newValue;
        nodes.next = newNode;
        break;
      }
      nodes = nodes.next;
    }
    return this;
  }

  insertAfter(value, newValue) {
    if (this.head === null) this.head = new Node(value);
    let nodes = this.head;

    while (nodes !== null) {
      if (nodes.value === value) {
        let newNode = new Node(newValue);
        newNode.next = nodes.next;
        nodes.next = newNode;
        break;
      }
      nodes = nodes.next;
    }
    return this;
  }

  printLinkedList() {
    if (this.head === null) {
      console.log('Linked list is empty!');
      return;
    }

    let nodes = this.head;
    let printString = '';

    while (nodes !== null) {
      printString += `{ ${nodes.value} } -> `;
      nodes = nodes.next;
    }
    printString += 'NULL';
    console.log(printString);
    return printString;
  }
}

module.exports = {
  Node,
  LinkedList
}
