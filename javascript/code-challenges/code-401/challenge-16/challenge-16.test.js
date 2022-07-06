'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('./trees');

describe('class BinaryTree()', () => {
  let binaryTree = new BinaryTree();
  it('can successfully instantiate an empty tree.', () => {
    expect(binaryTree.root).toEqual(null);
  });

  it('can successfully instantiate a tree with a single root node.', () => {
    binaryTree.root = new Node('root')
    expect(binaryTree.root.value).toEqual('root');
    expect(binaryTree.root.left).toEqual(null);
    expect(binaryTree.root.right).toEqual(null);
  })
});

describe('class BinarySearchTree()', () => {
  let binarySearchTree = new BinarySearchTree();
  it('can add a left child and right child properly to a node.', () => {
    binarySearchTree.add(5);
    expect(binarySearchTree.root.value).toEqual(5);
    binarySearchTree.add(1)
    expect(binarySearchTree.root.left.value).toEqual(1);
    binarySearchTree.add(10)
    expect(binarySearchTree.root.right.value).toEqual(10);
  });
});

describe('BinaryTree.preOrder()', () => {
  let arr = [1, 5, 3, 6, 9, 23, 56, 213, 657, 2, 20];
  let tree = new BinarySearchTree();
  arr.forEach(e => tree.add(e));
  it('can successfully return a collection from a preorder traversal.', () => {
    expect(tree.preOrder()).toEqual([1, 5, 3, 2, 6, 9, 23, 20, 56, 213, 657]);
  });
});

describe('BinaryTree.inOrder()', () => {
  let arr = [1, 5, 3, 6, 9, 23, 56, 213, 657, 2, 20];
  let tree = new BinarySearchTree();
  arr.forEach(e => tree.add(e));
  it('can successfully return a collection from an inorder traversal.', () => {
    expect(tree.inOrder()).toEqual([1, 2, 3, 5, 6, 9, 20, 23, 56, 213, 657]);
  });
});

describe('BinaryTree.postOrder()', () => {
  let arr = [1, 5, 3, 6, 9, 23, 56, 213, 657, 2, 20];
  let tree = new BinarySearchTree();
  arr.forEach(e => tree.add(e));
  it('can successfully return a collection from an postorder traversal.', () => {
    expect(tree.postOrder()).toEqual([2, 3, 20, 657, 213, 56, 23, 9, 6, 5, 1]);
  });
});

describe('BinaryTree.findMax()', () => {
  let tree = new BinaryTree();
  tree.root = new Node(2);
  tree.root.left = new Node(7);
  tree.root.left.left = new Node(2);
  tree.root.left.right = new Node(6);
  tree.root.left.right.left = new Node(5);
  tree.root.left.right.right = new Node(11);
  tree.root.right = new Node(5);
  tree.root.right.right = new Node(9);
  tree.root.right.right.left = new Node(4);
  it('can successfully find the maximum value stored in a Binary Tree', () => {
    expect(tree.findMax()).toEqual(11);
  });
});

describe('BinaryTree.contains()', () => {
  let arr = [1, 5, 3, 6, 9, 23, 56, 213, 657, 2, 20];
  let tree = new BinarySearchTree();
  arr.forEach(e => tree.add(e));
  it('returns true for a value in a binary tree.', () => {
    expect(tree.contains(1)).toEqual(true);
  });
  it('returns false for a value not in a binary tree.', () => {
    expect(tree.contains(999)).toEqual(false);
  });
});
