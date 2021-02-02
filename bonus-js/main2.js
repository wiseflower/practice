class Counter {
    constructor(){
        this.counter = 0;
    }

    //class에서 함수 선언할때는 function 안써도 무방
    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter %5 === 0){
            console.log('yo!');
        }
    }
}

//new 로 Counter를 만들어서 constructor를 실행
const coolCounter = new Counter();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();