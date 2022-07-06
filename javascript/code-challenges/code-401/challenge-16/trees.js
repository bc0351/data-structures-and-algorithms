'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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

findMax() {
  let values = this.postOrder();
  let max = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > max) max = values[i];
  }
  return max;
}
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    if (!this.root || this.root === null) this.root = new Node(value);
    let currNode = this.root;
    while (true) {
      if (value === currNode.value) return;
      if (value < currNode.value) {
        if (currNode.left === null) {
          currNode.left = new Node(value);
          return;
        }
        currNode = currNode.left;
      } else {
        if (currNode.right === null) {
          currNode.right = new Node(value);
          return;
        }
        currNode = currNode.right;
      }
    }
  }

  contains(value) {
    if (!this.root || this.root === null) return false;
    let currNode = this.root;
    let booContains = false;
    while (currNode && !booContains) {
      if (value < currNode.value) {
        currNode = currNode.left;
      } else if (value > currNode.value) {
        currNode = currNode.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
}
