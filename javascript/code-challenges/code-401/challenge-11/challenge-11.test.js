'use strict';

const { Node, Stack, PseudoQueue } = require('./pseudo-queue');

let pseudoQueue = new PseudoQueue();

describe('PseudoQueue.enqueue()', () => {
  it('should successfully enqueue a value onto a queue', () => {
    pseudoQueue.enqueue('a');

    expect(pseudoQueue.queue.top.value).toEqual('a');
  });

  it('should successfully peek the first value in queue', () => {
    expect(pseudoQueue.queue.peek()).toEqual('a');
  });

  it('should successfully enqueue multiple values onto a queue', () => {
    pseudoQueue.enqueue('b');
    pseudoQueue.enqueue('c');
    pseudoQueue.enqueue('d');

    expect(pseudoQueue.queue.top.value).toEqual('a');
    expect(pseudoQueue.queue.top.next.value).toEqual('b');
    expect(pseudoQueue.queue.top.next.next.value).toEqual('c');
    expect(pseudoQueue.queue.top.next.next.next.value).toEqual('d');
  });
});

describe('PseudoQueue.dequeue()', () => {
  it('should successfully dequeue out of a queue the expected value', () => {

    expect(pseudoQueue.dequeue()).toEqual('a');
  });

  it('successfully empty a queue after multiple dequeues', () => {

    expect(pseudoQueue.dequeue()).toEqual('b');
    expect(pseudoQueue.dequeue()).toEqual('c');
    expect(pseudoQueue.dequeue()).toEqual('d');
    expect(() => { pseudoQueue.dequeue() }).toThrow('Nothing to remove!');
  });
})

describe('new PseudoQueue()', () => {
  it('should successfully instantiate an empty pseudoQueue', () => {
    let newPseudoQueue = new PseudoQueue();

    expect(() => { newPseudoQueue.queue.peek() }).toThrow('Nothing to see here!');
  });
});

describe('PseudoQueue.dequeue()', () => {
  it('should raise exception on empty queue', () => {
    let emptyPseudoQueue = new PseudoQueue();

    expect(() => { emptyPseudoQueue.dequeue() }).toThrow('Nothing to remove!');
  });
});

describe('PseudoQueue.queue.peek()', () => {
  it('should raise exception on empty queue', () => {
    let emptyPseudoQueue = new PseudoQueue();

    expect(() => { emptyPseudoQueue.queue.peek() }).toThrow('Nothing to see here!');
  });
});
