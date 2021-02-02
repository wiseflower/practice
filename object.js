//Object
// object = {key(변수): value(값)}; 의 집합체다

//  1. Literals and properties 
const obj1 = {};
const obj2 = new Object();

// 2. Computed properties(계산된 프로퍼티)
console.log(ellie.name); //코딩하는 순간 받아오고 싶을때 
console.log(ellie['name']); // Runtime(실시간)에서 결정될 때. / properties는 string타입으로 지정해야함

// 3. Property value shorthand
const person1 = {name : 'bob', age: 2};
const person2 = {name : 'steve', age: 3};
const person3 = {name : 'dave', age: 4};
const person4 = new Person('ellie', 30);
console.log(person4);

//4. Constructor Function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

//5. in Operator (해당 object안에 key가 있는지 확인하는 것);
console.log ('name' in ellie);

//6. for..in vs for..of
//for(key in obj)
//ellie 안에 key 종류 출력
for (key in ellie){
    console.log(key);
};


//for (value of iterable)
const array = [1,2,3,4,5];
for (value of array){
    console.log(value);
}

//7. Fun cloning
const user = {name :'ellie', age: 20};
const user4 = {};
Object.assign(user4, user);
