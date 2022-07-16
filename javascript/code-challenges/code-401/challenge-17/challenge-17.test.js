'use strict';
const { Node, BinaryTree } = require('./challenge-17');
const tree = new BinaryTree();
const emptyTree = new BinaryTree();

beforeAll(() => {
  tree.root = new Node(2);
  tree.root.left = new Node(7);
  tree.root.right = new Node(5);
  tree.root.left.left = new Node(2);
  tree.root.left.right = new Node(6);
  tree.root.right.right = new Node(9);
  tree.root.left.right.left = new Node(5);
  tree.root.left.right.right = new Node(11);
  tree.root.right.right.left = new Node(4);
});

describe('BinaryTree.prototype.breadthFirst()', () => {
  it('should successfully return an array when given a binary tree in breadth first traversal order.', () => {

    expect(tree.breadthFirst()).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });
  it('should throw an error when given an empty binary tree.', () => {

    expect(() => { emptyTree.breadthFirst() }).toThrowError('Error: empty tree.');
  });
});
