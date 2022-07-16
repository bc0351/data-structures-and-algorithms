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

  breadthFirst() {
    if (this.root === null) throw new Error('Error: empty tree.');
    
    let queue = [];
    let results = [];

    let root = this.root;
    let parent, children;
    queue.push(root);
    results.push(root.value);
    while (queue.length > 0) {
    
      parent = queue.splice(0, 1)[0];

      children = [];
      if (parent.left !== null) children.push(parent.left);
      if (parent.right !== null) children.push(parent.right);

      for (let child of children) {
        queue.push(child);
        results.push(child.value);
      };
    }
    
    return results;
  }
}

module.exports = {
  Node,
  BinaryTree
}
