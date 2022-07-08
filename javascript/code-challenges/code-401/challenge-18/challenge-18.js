'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor() {
    this.root = null;
  }

  treeToArray() {
    let result = [];
    let queue = [];
    let parent;
    queue.push(this.root);
    let n = queue.length;
    while (n > 0) {
      n = queue.length;
      for (let i = 0; i < n; i++) {
        parent = queue.shift();
        result.push(parent.value); 
        for (let child of parent.children) {
          queue.push(child)
          result.push(child.value); 
        }
      }
    }
    return result;
  }

  fizzBuzzNode(value) {
    let str = '';
    if (typeof value === 'string') return value;
    if (value % 3 === 0) str += 'Fizz';
    if (value % 5 === 0) str += 'Buzz';
    if (value % 3 !== 0 && value % 5 !== 0) str += String(value);
    return str;
  }

  fizzBuzzTree() {
    if (!this.root) return null;

    let tree = this;
    let root = tree.root;

    let queue = [];
    let parent;

    queue.push(root);

    let n = queue.length;

    while (n > 0) {

      n = queue.length;

      for (let i = 0; i < n; i++) {

        parent = queue.shift();        
        parent.value = this.fizzBuzzNode(parent.value);

        for (let child of parent.children) {

          queue.push(child)
          child.value = this.fizzBuzzNode(child.value);

        }
      }
    }
    return tree;
  }

}

module.exports = { Node, KaryTree };
