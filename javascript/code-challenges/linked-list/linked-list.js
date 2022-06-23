'use strict';

class ListNode {
  constructor(val=0, next=null) {
    this.val = val,
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
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
  add(val){
    const node = new ListNode(val);
    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;

    while(current.next){ 
      current = current.next; 
    }
    current.next = node;  
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

function zipLists(list1, list2) {
  let node1 = list1.head,
      node2 = list2.head;
  let list3 = new LinkedList();

  let listMarker = 1;

  while (true) {
    if (node1 === null && node2 === null) break;
    if (listMarker === 1) {
      list3.add(node1.val)
      listMarker = 2;
      node1 = node1.next;
    } else {
      list3.add(node2.val)
      listMarker = 1;
      node2 = node2.next;
      }
    console.log(list3.toString());
  }
  return list3.head;
}

module.exports={
  LinkedList,
  ListNode
};
