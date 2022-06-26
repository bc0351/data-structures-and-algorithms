# Stacks and Queues

Implementation of Stacks and Queues

## Challenge

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue.

## Approach & Efficiency

Singly linked list used for stacks to construct Stack and Queue classes. All methods defined insert into linked lists, no re-indexing required. Therefore, operations are O(1).

## API

### Stack
* push()

  * Arguments: value

  * adds a new node with that value to the top of the stack with an O(1) Time performance.

* pop()

  * Arguments: none

  * Returns: the value from node from the top of the stack

  * Removes the node from the top of the stack

* peek()

  * Arguments: none

  * Returns: Value of the node located at the top of the stack

* isEmpty()

  * Arguments: none

  * Returns: Boolean indicating whether or not the stack is empty.

### Queue

* enqueue()

  * Arguments: value

  * adds a new node with that value to the back of the queue with an O(1) Time performance.

* dequeue()

  * Arguments: none

  * Returns: the value from node from the front of the queue

  * Removes the node from the front of the queue

* peek()

  * Arguments: none

  * Returns: Value of the node located at the front of the queue

* isEmpty()

  * Arguments: none

  * Returns: Boolean indicating whether or not the queue is empty
