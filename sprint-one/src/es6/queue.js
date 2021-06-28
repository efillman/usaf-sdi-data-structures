class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.items = {};
    this.front = 0;
    this.back = 1;
    this.length = -1;
  }

  //`enqueue(element)` - Adds an element to the back of the queue
//the only time we move back is at enqueue
  enqueue(element) {
    this.back--;
    this.length++;
    this.items[`${this.back}`] = element;
  }

  //`dequeue()` - Remove and return the element at the front of the queue
  //the only time we move front is at dequeue
  dequeue() {
    if (this.length > -1) {
    let temp = this.items[`${this.front}`]
    delete this.items[`${this.front}`];
    this.front--;
    this.length--;
    return temp;
    }
  }

  //Return the number of items in the queue
  size() {
    return this.length+1;
  }

  //`front()` - Return the element at the front of the queue
  front() {
    return this.items[`${this.front}`];
  }

  //`isEmpty()` - Returns true or false whether the queue has elements
  isEmpty() {
    if (this.front < 0) {
      return true;
    } else {
      return false;
    }

  }

  //`printQueue()` - Prints all the elements of the queue
  printQueue() {
let result = ''
    for(let i = this.back; i <= this.front; i++){
      result += this.items[`${i}`]
      if(this.front !== i){result += ', '}
    }
return result
  }
}
