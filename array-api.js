// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(' | '); //(sperator) 구분자 넣어도, 안넣어도 됨. 안넣으면 컴마 디폴트
  console.log(result);
}


// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(','); //구분자(필수), 배열 전달 갯수(optional)
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);//배열 자체를 reverse(반전)시킴
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2,5); //배열의 원하는 부분 return, start-end 설정가능, end는 제외하고 노출
  console.log(array);
  console.log(result);

  // const result = array.splice(0,2);//배열 자체에서 삭제
  // console.log(array);
  // console.log(result);

  // const newArray = array.concat();
  // newArray.pop();
  // newArray.pop();
  // console.log(newArray);

}



class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90) //첫번째로 true가 나오면 api종료
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((students) => students.score); //배열안에 있는 요소를 원하는 데이터로 만들고 싶을때 사용
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50); //배열 중 콜백함수의 True가 잇는지 없는지 확인
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50); //모든 요소가 true여야 true로 출력, !쓰면 true가 false로, false는 true로!
  console.log(result2);
}


// Q9. compute students' average score
{
  console.clear();
  const result = students.reduce();
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
