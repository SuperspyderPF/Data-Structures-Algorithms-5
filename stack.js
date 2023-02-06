class Stack { 
    constructor() {
      this.items = [];
    }
  
    push(element) {
  
      this.items.push(element);
    }
  
    pop() {
  
      return this.items.pop();
    }
    
  
    size() {
  
      return this.items.length;
    }
  }
  
const STK= new Stack()
STK.push(1)
console.log(STK)
STK.push(2)
STK.push(3)
console.log(STK)
STK.pop()
console.log(STK)