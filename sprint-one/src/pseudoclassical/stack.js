

function Stack() {
    this.items = {};
    this.top = -1;
  }

  Stack.prototype.push = function(element) {
    //increment top pointer
    //add key:value to items object at that pointer
    this.top++
    this.items[`${this.top}`] = element
  }
  Stack.prototype.pop = function() {
    //take the item at from the top pointer return it
    //remove the item from the stack at the top pointer
    //decrement top pointer
    if (this.top !== -1) {
      const temp = this.items[`${this.top}`]
      delete this.items[`${this.top}`]
      this.top = this.top - 1;
      return temp;
    }
  };
  Stack.prototype.size = function() {
    if (this.top === -1) { return 0 }
    else { return this.top + 1 }
  }

  Stack.prototype.peek = function() {
    return this.items[`${this.top}`]
  }
  //Prints all the elements of a queue
  Stack.prototype.printStack = function() {
    let result = ''
    for(let i = 0; i <= this.top; i++){
      result += this.items[`${i}`]
      if(i !== this.top){result += ' '}
    }
    return result
  }

  Stack.prototype.isEmpty = function() {
    if (this.top > -1) {
      return true;
    } else {
      return false;
    }
  }




