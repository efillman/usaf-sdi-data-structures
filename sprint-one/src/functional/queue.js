var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var queue = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    Object.defineProperty(this.value, numericKey, {numericKey: value})
    return queue
  };

  someInstance.dequeue = function(value?) {
  };

  someInstance.size = function() {
  };

  return someInstance;
};