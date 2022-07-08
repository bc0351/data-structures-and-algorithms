'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(queueNode) {
    if (this.front === null) {
      this.front = queueNode;
      return this.front;
    }

    if (this.back === null) {
      this.back = queueNode;
      return this.back;
    }

    this.back.next = queueNode;
    this.back = queueNode;
    return this.back;
  }

  dequeue() {
    if (this.front === null) return null;
    let front = this.front;
    this.front = front.next;
    return front;
  }

  peek() {
    if (this.front === null) throw new Error('Empty Queue!');
    return this.front;
  }

  isEmpty() {
    if (this.front === null) return true;
    return false;
  }

}
class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let results = [];
    const traverse = (node) => {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }
  
  postOrder() {
    let results = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }
}

function breadthFirst(tree) {
  let queue = new Queue();
  let results = [];
  let curr = tree.root;
  console.log(curr.value);
  console.log(curr.left.left.value);
  console.log(curr.left.right.value);
  queue.enqueue(curr);
  console.log(curr);

  while(!queue.isEmpty()) {
    curr = queue.dequeue();
    results.push(curr.value);
    console.log(results);
    if (curr.left) queue.enqueue(curr.left);
    if (curr.right) queue.enqueue(curr.right);
  }
  return results;
}

module.exports={
  Node,
  BinaryTree,
  breadthFirst
}
