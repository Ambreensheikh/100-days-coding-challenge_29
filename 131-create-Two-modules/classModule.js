"use strict";
// export class
class MyClass {
    constructor(name , id ){
        this.name=name;
        this.id=id;
    
    } greet(){
        console.log(`Welcome , ${this.name} and your id is ${this.id} !`);
         
    }   
}
  
  export { MyClass};