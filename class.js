'use strict';

//class : template (ex_붕어빵틀)
//object : instance of a class (ex_붕어빵)

// 1. class 선언
class person {
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //method
    speak (){
        console.log (`${this.name}:hello!`);
    }
}

const ellie = new person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter & Setter

