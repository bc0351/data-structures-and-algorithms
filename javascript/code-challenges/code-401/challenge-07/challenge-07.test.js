'use strict';

const { LinkedList, Node } = require('./challenge-07');
const testList = new LinkedList();

beforeEach(() => {
  testList.head = null;
  testList.head = new Node(1);
  testList.head.next = new Node(2);
  testList.head.next.next = new Node(3);
  testList.head.next.next.next = new Node(4);
  testList.head.next.next.next.next = new Node(5);
});

describe('LinkedList.prototype.kthFromEnd()', () => {

  it('should throw an error when k is greater than the length of a linked list', () => {
    expect(()=>{testList.kthFromEnd(6)}).toThrowError('k argument is greater than linked list length');
  });

  it('should throw an error when k is equal to the length of a linked list', () => {
    expect(()=>{testList.kthFromEnd(5)}).toThrowError('k argument is equal to linked list length');
  });

  it('should throw an error when k is equal to the length of a linked list', () => {
    expect(()=>{testList.kthFromEnd(-1)}).toThrowError('k argument must be positive');
  });
});

describe('LinkedList.prototype.kthFromEnd()', () => {
  let sizeOneList = new LinkedList()
  sizeOneList.head = new Node(3);
  it('should throw an error when the length of a linked list is 1', () => {

    expect(()=>{sizeOneList.kthFromEnd(3)}).toThrowError('linked list length is 1');
  });
});

describe('LinkedList.prototype.kthFromEnd()', () => {

  it('should successfully return the value of the kth node from the end of a linked list', () => {
    expect(testList.kthFromEnd(3)).toEqual(2);
  });
});
