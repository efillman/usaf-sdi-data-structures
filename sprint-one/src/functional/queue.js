var Queue = function() {
  var queueData = {};

  // Use an object with numeric keys to store values
  queueData.queueStorage = {};
  queueData.queueFrontPointer = 0;
  queueData.queueBackPointer = -1;

  //`enqueue(element)` - Adds an element to the back of the queue
  queueData.enqueue = function(value) {
    queueData.queueBackPointer++
    queueData.queueStorage[`${queueData.queueBackPointer}`] = value;
  };

  //`dequeue()` - Remove and return the element at the front of the queue
  queueData.dequeue = function() {
    if (queueData.queueBackPointer > -1) {
      let dequeuePointer = queueData.queueFrontPointer;
      let dequeueValue =  queueData.queueStorage[dequeuePointer]
      queueData.queueFrontPointer++;
      delete queueData.queueStorage[dequeuePointer];
      return dequeueValue;
    }
  };

  //`size()` - Return the number of items in the queue
  queueData.size = function() {
    return queueData.queueBackPointer + 1;
  };

  //`front()` - Return the element at the front of the queue
  queueData.front = function() {
    return queueData.queueStorage[`${queueData.queueFrontPointer}`];
  };

  //`isEmpty()` - Returns true or false whether the queue has elements
  queueData.isEmpty = function() {
    if (queueData.queueBackPointer < 0) {
      return true;
    } else {
      return false;
    }
  };

  //`printQueue()` - Prints all the elements of the queue
  queueData.printQueue = function() {
  };

  //
  return queueData;
};
