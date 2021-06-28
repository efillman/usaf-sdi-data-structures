var Stack = function() {
  var stackData = {
  };

  // Use an object with numeric keys to store values
  stackData.stackStorage  = {}
  stackData.stackPointer = -1

  //`push(element)` - Add an element to the top of the stack
  stackData.push = function(value) {
    ++stackData.stackPointer;
    stackData.stackStorage[`${stackData.stackPointer}`] = value;
  };

  //`pop()` - Remove and return the element on the top of the stack
  stackData.pop = function() {
    if (stackData.stackPointer > -1) {
    let popPointer = stackData.stackPointer;
    let popValue =  stackData.stackStorage[popPointer]
    stackData.stackPointer--;
    delete stackData.stackStorage[popPointer];
    return popValue;
    }
  };

  //`size()` - Return the number of items on the stack
  stackData.size = function() {
    return stackData.stackPointer+1;
  };

  //`peek()` - Return the top element on the stack, but it won't remove it (the way `pop()` does)
  stackData.peek = function() {
    if (stackData.stackPointer > -1) {
      let popPointer = stackData.stackPointer;
      let popValue =  stackData.stackStorage[`${popPointer}`]
      return popValue;
    }
  };

  //`isEmpty()` - Returns whether or not the Stack is empty
  stackData.isEmpty = function() {
    if (stackData.stackPointer === -1) {
      return true;
    } else {
      return false;
    }
  };

  //`printStack()` - Prints all the elements of a queue
  stackData.printStack = function() {
    if (stackData.stackPointer > -1) {
    let result = '';
      for (let i = 0; i <= stackData.stackPointer; i++) {
        result = result + stackData.stackStorage[`${i} `]
    }
  }
  };
  return stackData;
};
