class Stack {
  constructor() {
    this.items = {};
    this.top = -1;
  }
  push(element) {
    //increment top pointer
    //add key:value to items object at that pointer
    this.top++
    this.items[`${this.top}`] = element
  }
  pop() {
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
  size() {
    if (this.top === -1) { return 0 }
    else { return this.top + 1 }
  }

  peek() {
    return this.items[`${this.top}`]
  }
  //Prints all the elements of a queue
  printStack() {
    let result = ''
    for(let i = 0; i <= this.top; i++){
      result += this.items[`${i}`]
      if(i !== this.top){result += ' '}
    }
    return result
  }

  isEmpty() {
    if (this.top > -1) {
      return true;
    } else {
      return false;
    }
  }
}



