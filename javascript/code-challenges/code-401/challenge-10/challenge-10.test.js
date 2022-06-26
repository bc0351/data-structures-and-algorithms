'use strict';


class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    return this;
  }

  pop() {
    if (!this.top) throw new Error('Nothing to remove!');
    let top = this.top.value;
    this.top = this.top.next;
    return top;
  }

  peek() {
    if (!this.top) throw new Error('Nothing to see here!');
    return this.top.value;
  }

  isEmpty() {
    if (!this.top) return true;
    return false;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.front && !this.back) {
      this.front = node;
      this.back = node;
      return this.back.value;
    }

    if (!this.back) {
      this.back = node;
      return this.back.value;
    }

    this.back.next = node;
    this.back = node;
    return this.back.value;
  }

  dequeue() {
    if (!this.front) throw new Error('Empty Queue!');
    let frontValue = this.front.value;
    this.front = this.front.next;
    return frontValue;
  }

  peek() {
    if (!this.front) throw new Error('Empty Queue!');
    return this.front.value;
  }

  isEmpty() {
    if (!this.front) return true;
    return false;
  }

}

let stack = new Stack();
let queue = new Queue();

describe('Stack.push()', () => {
  it('should successfully push onto a stack', () => {
    stack.push('a');

    expect(stack.top.value).toEqual('a');
  });

  it('should successfully push multiple values onto a stack', () => {
    stack.push('b');
    stack.push('c');
    stack.push('d');

    expect(stack.top.value).toEqual('d');
    expect(stack.top.next.value).toEqual('c');
    expect(stack.top.next.next.value).toEqual('b');
    expect(stack.top.next.next.next.value).toEqual('a');
  });
});

describe('Stack.pop()', () => {
  it('should successfully pop off the stack', () => {
    let topValue = stack.pop();

    expect(topValue).toEqual('d');
    expect(stack.top.value).toEqual('c');
    expect(stack.top.next.value).toEqual('b');
    expect(stack.top.next.next.value).toEqual('a');
  });

  it('should successfully empty a stack after multiple pops', () => {

    expect(stack.pop()).toEqual('c');
    expect(stack.pop()).toEqual('b');
    expect(stack.pop()).toEqual('a');
    expect(() => {stack.pop()}).toThrow('Nothing to remove!');
  });
});

describe('Stack.peek()', () => {
  it('should successfully peek the next item on the stack', () => {
    stack.push('d');
    stack.push('c');
    stack.push('d');
    stack.push('a');

    expect(stack.peek()).toEqual('a');
  });
});

describe('new Stack()', () => {
  it('should successfully instantiate an empty stack', () => {
    let newStack = new Stack();

    expect(newStack.top).toEqual(null);
  });
});

describe('Stack.pop()', () => {
  it('should raise exception on empty stack', () => {
    let emptyStack = new Stack();

    expect(()=>{emptyStack.pop()}).toThrow('Nothing to remove!');
  });
});

describe('Stack.peek()', () => {
  it('should raise exception on empty stack', () => {
    let emptyStack = new Stack();

    expect(()=>{emptyStack.peek()}).toThrow('Nothing to see here!');
  });
});

describe('Queue.enqueue()', () => {
  it('should successfully enqueue into a queue', () => {

    expect(queue.enqueue('a')).toEqual('a');
  });

  it('should successfully enqueue multiple values into a queue', ()=> {

    expect(queue.enqueue('b')).toEqual('b');
    expect(queue.enqueue('c')).toEqual('c');
    expect(queue.enqueue('d')).toEqual('d');
  });
});

describe('Queue.dequeue()', ()=> {
  it('should successfully dequeue out of a queue the expected value', ()=> {

  expect(queue.dequeue()).toEqual('a');
  })
})

describe('Queue.peek()', ()=> {
  it('should successfully peek into a queue, seeing the expected value', ()=> {

  expect(queue.peek()).toEqual('b');
  })
})

describe('Queue.dequeue()', ()=> {
  it('successfully empty a queue after multiple dequeues', ()=> {

  expect(queue.dequeue()).toEqual('b');
  expect(queue.dequeue()).toEqual('c');
  expect(queue.dequeue()).toEqual('d');
  expect(()=>{queue.dequeue()}).toThrow('Empty Queue!');
  })
})

describe('new Queue()', () => {
  it('should successfully instantiate an empty queue', () => {
    let newQueue = new Queue();

    expect(()=>{newQueue.peek()}).toThrow('Empty Queue!');
  });
});

describe('Queue.dequeue()', () => {
  it('should raise exception on empty queue', () => {
    let emptyQueue = new Queue();

    expect(()=>{emptyQueue.dequeue()}).toThrow('Empty Queue!');
  });
});

describe('Queue.peek()', () => {
  it('should raise exception on empty queue', () => {
    let emptyQueue = new Queue();

    expect(()=>{emptyQueue.peek()}).toThrow('Empty Queue!');
  });
});
