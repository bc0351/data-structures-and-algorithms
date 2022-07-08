'use strict';
const { Node, BinaryTree, breadthFirst} = require('./trees-bft');

describe('breadthFirst(tree)', () => {
  it('should successfully return an array when given a binary tree in breadth first traversal order.', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.left = new Node(6);
    tree.root.right.right = new Node(7);

    expect(breadthFirst(tree)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
