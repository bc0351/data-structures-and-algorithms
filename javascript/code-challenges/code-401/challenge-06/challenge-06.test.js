'use strict';

const { LinkedList, Node } = require('./challenge-06');
const testList = new LinkedList();

beforeEach(() => {
  testList.head = null;
  testList.head = new Node(1);
  testList.head.next = new Node(2);
  testList.head.next.next = new Node(3);
  testList.head.next.next.next = new Node(4);
  testList.head.next.next.next.next = new Node(5);
});

describe('LinkedList.prototype.append()', () => {

  it('should successfully add a node to the end of the linked list', () => {
    expect(testList.append(6).printLinkedList()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });

  it('should successfully add multiple nodes to the end of the linked list', () => {
    expect(testList.append(6).append(7).append(8).append(9).printLinkedList()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> { 8 } -> { 9 } -> NULL');
  });
})

describe('LinkedList.prototype.insertBefore()', () => {
  it('should successfully insert a node before a node located in the middle of a linked list', () => {
    expect(testList.insertBefore(3, 2.5).printLinkedList()).toEqual('{ 1 } -> { 2 } -> { 2.5 } -> { 3 } -> { 4 } -> { 5 } -> NULL');
  });
  it('should successfully insert a node before the first node of a linked list', () => {
    expect(testList.insertBefore(1, 0).printLinkedList()).toEqual('{ 0 } -> { 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> NULL');
  });
});

describe('LinkedList.prototype.insertAfter()', () => {
  it('should successfully insert a node after a node located in the middle of a linked list', () => {
    expect(testList.insertAfter(3, 3.5).printLinkedList()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 3.5 } -> { 4 } -> { 5 } -> NULL');
  });
  it('should successfully insert a node after the last node of a linked list', () => {
    expect(testList.insertAfter(5, 6).printLinkedList()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });
});
