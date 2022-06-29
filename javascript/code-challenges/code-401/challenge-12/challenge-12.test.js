'use strict';

const {AnimalShelter} = require('./animal-shelter');

let animalShelter = new AnimalShelter();

describe('AnimalShelter.enqueue()', () => {

  animalShelter.enqueue('dog');
  animalShelter.enqueue('cat');
  let dog = animalShelter.dogs.peek().name;
  let cat = animalShelter.cats.peek().name;
  console.log(dog, cat);

  it('should successfully enqueue a dog and a cat into the animal shelter', () => {
    expect(animalShelter.dogs.tail.name).toEqual(dog);
    expect(animalShelter.cats.tail.name).toEqual(cat);
  });

  it('should successfully peek the first value in both queues', () => {
    expect(animalShelter.dogs.peek().name).toEqual(dog);
    expect(animalShelter.cats.peek().name).toEqual(cat);
  });

  it('should successfully enqueue multiple values onto a queue', () => {

    expect(animalShelter.dogs.tail.name).toEqual(dog);
    animalShelter.enqueue('dog');
    dog = animalShelter.dogs.tail.name;
    expect(animalShelter.dogs.tail.name).toEqual(dog);
    animalShelter.enqueue('dog');
    dog = animalShelter.dogs.tail.name;
    expect(animalShelter.dogs.tail.name).toEqual(dog);
    animalShelter.enqueue('dog');
    dog = animalShelter.dogs.tail.name;
    expect(animalShelter.dogs.tail.name).toEqual(dog);

    expect(animalShelter.cats.tail.name).toEqual(cat);
    animalShelter.enqueue('cat');
    cat = animalShelter.cats.tail.name;
    expect(animalShelter.cats.tail.name).toEqual(cat);
    animalShelter.enqueue('cat');
    cat = animalShelter.cats.tail.name;
    expect(animalShelter.cats.tail.name).toEqual(cat);
    animalShelter.enqueue('cat');
    cat = animalShelter.cats.tail.name;
    expect(animalShelter.cats.tail.name).toEqual(cat);
  });
});

describe('AnimalShelter.dequeue()', () => {
  let dog = animalShelter.dogs.peek().name;
  let cat = animalShelter.cats.peek().name;
  it('should successfully dequeue out of dogs and cats the expected value', () => {

    expect(animalShelter.dequeue('dog').name).toEqual(dog);
    expect(animalShelter.dequeue('cat').name).toEqual(cat);
  });

  it('successfully empty dogs and cats after multiple dequeues', () => {
    dog = animalShelter.dogs.peek().name;
    expect(animalShelter.dequeue('dog').name).toEqual(dog);
    dog = animalShelter.dogs.peek().name;
    expect(animalShelter.dequeue('dog').name).toEqual(dog);
    dog = animalShelter.dogs.peek().name;
    expect(animalShelter.dequeue('dog').name).toEqual(dog);
    expect(() => { animalShelter.dequeue('dog')}).toThrow('No animal to rescue!');


    cat = animalShelter.cats.peek().name;
    expect(animalShelter.dequeue('cat').name).toEqual(cat);
    cat = animalShelter.cats.peek().name;
    expect(animalShelter.dequeue('cat').name).toEqual(cat);
    cat = animalShelter.cats.peek().name;
    expect(animalShelter.dequeue('cat').name).toEqual(cat);
    expect(() => { animalShelter.dequeue('cat')}).toThrow('No animal to rescue!');

  });
})

describe('new AnimalShelter()', () => {
  it('should successfully instantiate an empty animal shelter', () => {
    let newAnimalShelter = new AnimalShelter();

    expect(newAnimalShelter.dogs.peek()).toEqual(null);
    expect(newAnimalShelter.cats.peek()).toEqual(null);
  });
});

describe('AnimalShelter.dequeue()', () => {
  it('should raise exception on empty queue', () => {
    let emptyAnimalShelter = new AnimalShelter();

    expect(() => { emptyAnimalShelter.dequeue('dog') }).toThrow('No animal to rescue!');
    expect(() => { emptyAnimalShelter.dequeue('cat') }).toThrow('No animal to rescue!');
  });
});

describe('AnimalShelter.dequeue()', () => {
  it('should rescue the first animal in when not given a preference', () => {
    let newAnimalShelter = new AnimalShelter();

    newAnimalShelter.enqueue('dog');
    let firstIn = newAnimalShelter.dogs.peek().name;
    console.log('dog', firstIn, newAnimalShelter.dogs.peek().intake_date)
    newAnimalShelter.enqueue('cat');
    console.log('cat',newAnimalShelter.cats.peek().name, newAnimalShelter.cats.peek().intake_date);
    expect(newAnimalShelter.dequeue().name).toEqual(firstIn);
    firstIn = newAnimalShelter.cats.peek().name;
    expect(newAnimalShelter.dequeue().name).toEqual(firstIn);

  });
});

describe('AnimalShelter.enqueue()', () => {
  it('should raise exception on queuing non-cat or non-dog', () => {
    let newAnimalShelter = new AnimalShelter();

    expect(() => { newAnimalShelter.enqueue() }).toThrow('Animal must be either a cat or a dog!');
  });
});
