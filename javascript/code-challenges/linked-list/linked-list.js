'use strict';

class ListNode {
  constructor(val=0, next=null) {
    this.val = val,
    this.next = next
  }
}

class LinkedList {
  constructor(node=null, next=null) {
    this.head = null,
    this.node = node,
    this.next = next,
    this.tail = null
  }

  insert(val) {
    if (this.head === null) {
     this.head = node;
     return this.head;
    }
    let node = new ListNode(val);
    let tempNode = this.head;
    tempNode.next = this.head.next;
    this.head = node;
    this.head.next = tempNode;
    return this.head;
  }
  
  includes(val) {
    let node = this.head;
    while (node.next) {
      node = node.next;
      if (node.val === val) return true;
    }
    return node.val === val ? true : false;
  }

  toString() {
    let s = '';
    let node = new ListNode();
    node = this.head;
    while (node.next) {
      s += `{ ${node.val} } -> `;
      node = node.next;
    }
    return s += 'NULL';
  }
}

function testEmptyList() {
  let testList = new LinkedList();
  if (testList.head === null && testList.node === null && testList.next === null && testList.tail === null) return true;
  return false;
}

function testInsertNode(n=10) {
  let list = new LinkedList();
  let headNode = new ListNode(0);
  list.head = headNode;
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      list.insert(1);
      return (list.head.val === 1) ? true : false;
    }
    list.insert(i);
  }
  return (list.head.val === n - 1) ? true : false;
}

function testInsertMultipleNodes(n=10) {
  let list = new LinkedList();
  let headNode = list.head
  let node = list;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i)
    let tempNode = new ListNode(i);
    tempNode.next = list.head;
    list.head = tempNode;
  }
  return arr;
}

function testIncludes(n=10, k=null) {
  if (k === null) {
    k = Math.floor(Math.random() * 12);
  }
  let ll = new LinkedList();
  ll.head = testInsertMultipleNodes(n);
  console.log(`   k: ${k}; list includes k? ${ll.includes(k)}`)
  return ll.includes(k);
}

function testCollectionReturn(n) {
  let ll = new LinkedList();
  let headNode = new ListNode(0);
  ll.head = headNode;
  let node = new ListNode(1);
  ll.head.next = node;
  let arr = [0,1];
  for (let i = 2; i < n; i++) {
    let temp = new ListNode(i);
    node.next = temp;
    node = node.next;
    arr.push(i);
  }
  let res = [];
  node = ll.head;
  while (node.next) {
    res.push(node.val);
    node = node.next;
  }
  res.push(node.val);
  return `input: [${arr}]; output: [${res}]`;
}

console.log('1. Can successfully instantiate an empty linked list');
console.log(`   ${testEmptyList()}\n`);
console.log('2. Can properly insert into the linked list');
console.log(`   ${testInsertNode(10)}\n`);

console.log('3. The head property will properly point to the first node in the linked list');
console.log(`   ${testInsertNode(10)}\n`);

console.log('4. Can properly insert multiple nodes into the linked list');
console.log(`   ${testInsertMultipleNodes(10)}\n`);

console.log('5. Will return true when finding a value within the linked list that exists');
console.log(`   ${testIncludes(10, 5)}\n`);

console.log('6. Will return false when searching for a value in the linked list that does not exist');
console.log(`   ${testIncludes(10, 900)=== false}\n`);

console.log('7. Can properly return a collection of all the values that exist in the linked list');
console.log(`   ${testCollectionReturn(10)}\n`);
