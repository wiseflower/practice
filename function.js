// 1. Function delacration
// function name(param1, param2) {body... return;}
// one function === one thing
// naming : doSomething, command, verb
// function is object in JS

function printHello(){
    console.log('Hello');
}

printHello();

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    } else{
        printNo();
    }
}
const printYes = function (){
    console.log('yes!');
}
const printNo = function print(){
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow Function
const simplePrint = () => console.log('simplePrint!');