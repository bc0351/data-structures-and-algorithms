'use strict';

const {Node, KaryTree} = require('./challenge-18');

function buildKaryTree() {
  let tree = new KaryTree();
  let root = new Node(1);
  let parent, child, subchild;
  for (let i = 1; i <= 5; i++) {
    parent = new Node(i * Math.floor(Math.random() * (10 - 5)) + 5);
    for (let j = 1; j <= 5; j++) {
      child = new Node(j * Math.floor(Math.random() * (10 - 5)) + 5);
      for (let k = 1; k <= 5; k++) {
        subchild = new Node(k * Math.floor(Math.random() * (10 - 5)) + 5);
        child.children.push(subchild);
      }
      parent.children.push(child);
    }
    root.children.push(parent);
  }
  tree.root = root;
  return tree;
}

describe('KaryTree.fizzBuzzTree()', () => {
  it('should replace values divisible by 3 with "Fizz"', ()=> {

    let tree = buildKaryTree();
    console.log(tree.treeToArray());
    let fizzBuzzTree = tree.fizzBuzzTree();
    console.log(fizzBuzzTree.treeToArray());

    // expect(tree.fizzBuzzTree)
  })
})
