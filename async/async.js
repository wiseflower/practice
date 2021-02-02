// async & await
// clear style of using promise 

//1. async
// function fetchUser(){
//     return new Promise((resolve, reject) => {
//         resolve ('ellie');
//     });
// }

// const user = fetchUser();
// user.then(console.log);
// console.log(user);

// async function fetchUser(){
//     return 'ellie';
// }
// async를 앞에 붙여주면, promise로 바로 변환해줌

// const user = fetchUser();
// user.then(console.log);
// console.log(user);

async function fetchUser(){
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);





// 2. await ✨
// async가 붙은 함수에서만 쓸 수 있음

// function delay(ms){
//     return new Promise(resolve=> setTimeout(resolve, ms));
// }

// async function getApple(){
//     await delay(2000);
//     return '🍎';
// }

// awiat : 딜레이 끝날때까지 기다려줌

// async function getBanana(){
//     await delay(1000);
//     return '🍌';
// }

function delay(ms){
    return new Promise(resolve =>setTimeout(resolve,ms));
}

async function getApple(){
    await delay(3000);
    return '🍎';
}

async function getBanana(){
    await delay(1000);
    return '🍌';
}

// function pickFruits(){
//     return getApple().then (apple => {
//         return getBanana().then (banana => `${apple}+${banana}`);
//     })
// }

// pickFruits().then(console.log);

// async function pickFruits(){
//     const applePromise = getApple();
//     const bananaPromise = getBanana();
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple}+${banana}`;
// }

// pickFruits().then(console.log);

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);



//3. useful Promise APIs
// function pickAllFruits(){
//     return Promise.all([getApple(), getBanana()]).then (fruits => fruits.join('+'));
// }

// pickAllFruits().then(console.log);

// function pickOnlyOne(){
//     return Promise.race([getApple(), getBanana()]);
// }

// pickOnlyOne().then(console.log);

function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]).then(fruits=>fruits.join(` + `));
}

pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);



//homework