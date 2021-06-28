var Queue = function() {
  var queueData = {};

  // Use an object with numeric keys to store values
<<<<<<< HEAD
  queueData.queueStorage = {};
  queueData.queueFrontPointer = 0;
  queueData.queueBackPointer = -1;
=======
  var queue = {};
>>>>>>> 2adc6bb0ed5c538a138d77833de9638dfa905041

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

<<<<<<< HEAD
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
=======
  someInstance.enqueue = function(value) {
    Object.defineProperty(this.value, numericKey, {numericKey: value})
    return queue
  };

  someInstance.dequeue = function(value?) {
>>>>>>> 2adc6bb0ed5c538a138d77833de9638dfa905041
  };

  //`printQueue()` - Prints all the elements of the queue
  queueData.printQueue = function() {
  };

<<<<<<< HEAD
  //
  return queueData;
};
=======
  return someInstance;
};
>>>>>>> 2adc6bb0ed5c538a138d77833de9638dfa905041
