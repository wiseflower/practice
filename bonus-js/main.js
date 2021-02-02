//인자는 내가 지정한 것
function add(num1, num2){
    return num1 + num2;
}


function divide(num1, num2){
    return num1 / num2;
}

//전달된 함수를 수행해서 어떤 결과값이든 수행하는 함수
function surprise(operator) {
    const result = operator(2, 3); //add 호출한것과 동일, operator로 지정된 인자를 호출하겠다는 의미
    console.log(result);
}

surprise(divide);


// if (true)이면 실행, false면 실행X
// else 는 if가 시랭되지 않을 때 실행
// false : 0, -0, null, '', undefined, NaN... 값이 없으면 false
// true : -1, 'hello', object .. 값이 있으면 true
//&& : 앞이 true여야 뒷문장을 실행한다.