//Object는 서로 연관된 특징과 행동들을 묶어두는 것
//자료구조 : 비슷한 타입의 Object를 묶어두는 것.  보통 동일한 타입의 Data만 담을 수 있다. But JS는 다양한 종류의 Data를 담을 수 있으나, 좋은 방향은 아님
//알고리즘 : 자료구조 중, 어떤 알고리즘을 써서 검색/삽입/정렬/삭제 할 수 있는지 알면 좋음
//배열의 포인트는 index. index는 0부터 시작

'use strict';

// Array
// 1. 배열 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); //배열의 마지막 index를 받아올 수 있음

console.clear();
// 3. Looping over and array

//print all fruits
//a. for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//b.for of
for (let fruit of fruits){
    console.log(fruit);
}

//c. forEach (callback함수를 받아옴)
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, Delete, Copy (배열에 넣고, 지우고, 복사하고)
// push : 맨 뒤로 추가 (recommand)
fruits.push('straberry', 'peach');
console.log(fruits);

// pop : 맨 뒤부터 지움 (recommand)
fruits.pop();
console.log(fruits);

// unshift: 앞에 아이템 추가
fruits.unshift('straberry', 'lemon');
console.log(fruits);

// shift: 앞에서 부터 데이터 삭제
fruits.shift();
console.log(fruits);

//note!! shift, unshift are slower than pop, push

//splice : 지정된 포지션의 인덱스를 삭제 remove an item by index position
fruits.unshift('straberry');
console.log(fruits);
//원하는 인덱스 지정, 몇개를 지울지 지정
fruits.splice(1, 1);
console.log(fruits);
//지우고 나서, 지운 자리에 대체 데이터를 추가할 수 있다.
fruits.splice(1, 1, 'lime', 'watermelon');
console.log(fruits);

//combine two arrays (두가지 배열을 묶을수도 있다)
const fruits2 = ['pear', 'coconut'];
console.log(fruits2);

const newFruits = fruits.concat(fruits2);
console.log(newFruits); 

//5. Searching

console.clear();
console.log(fruits);

//indexOf: 어떤 값이 몇번재 인덱스에 있는지 찾을 때 사용 (동일 값 있을 때는, 첫번째에 있는 값을 출력)
console.log(fruits.indexOf('lime')); 

//includes: 인덱스에 있는지 찾을때 사용
console.log(fruits.includes('lime')); 


//lastIndexOf (동일 값이 있을 때, 마지막에 있는 값을 출력)
console.clear();
fruits.push('lime');
console.log(fruits);
console.log(fruits.lastIndexOf('lime'));