var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.items = {};
  this.front = 0;
  this.back = 1;
  this.length = -1;
};

Queue.prototype.enqueue = function (element) {
  this.back--;
  this.length++;
  this.items[`${this.back}`] = element;
}

//`dequeue()` - Remove and return the element at the front of the queue
//the only time we move front is at dequeue
Queue.prototype.dequeue = function () {
  if (this.length > -1) {
  let temp = this.items[`${this.front}`]
  delete this.items[`${this.front}`];
  this.front--;
  this.length--;
  return temp;
  }
}

//Return the number of items in the queue
Queue.prototype.size = function () {
  return this.length+1;
}

//`front()` - Return the element at the front of the queue
Queue.prototype.front = function () {
  return this.items[`${this.front}`];
}

//`isEmpty()` - Returns true or false whether the queue has elements
Queue.prototype.isEmpty = function () {
  if (this.front < 0) {
    return true;
  } else {
    return false;
  }

}

//`printQueue()` - Prints all the elements of the queue
Queue.prototype.printQueue = function () {
let result = ''
  for(let i = this.back; i <= this.front; i++){
    result += this.items[`${i}`]
    if(this.front !== i){result += ', '}
  }
return result
}




