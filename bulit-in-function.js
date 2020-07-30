const superheroes = ['아이언맨', '캡틴아메리카','토르', '닥터스트레인지'];

// function print(hero) {
//   console.log(hero);
// }

// superheroes.forEach(print);

// superheroes.forEach(function(hero) {
//   console.log(hero);
// });

superheroes.forEach(hero => {
  console.log(hero);
});

const index = superheroes.indexOf('토르');
console.log(index);

const array = [1,2,3,4,5,6,7,8];

const square = n => n * n;
const squared = array.map(square);

console.log(squared);

const items = [
  {
    id: 1,
    text: 'hello'
  },
  {
    id: 2,
    text: 'bye'
  }
];

const texts = items.map(item => item.text);
console.log(texts);

const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

const todo = todos.findIndex(todo => todo.id === 3);
console.log(todo);

const todoObject = todos.find(todoObject => todoObject.id === 3);
console.log(todoObject);

const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);

const numbers = [10,20,30,40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 2);
console.log(numbers);
console.log(spliced);

const number = [50,60,70,80];
const sliced = number.slice(0,2);
console.log(sliced);
console.log(number);



//shift()와 unshift()
const arrayNumbers = [10,20,30,40];

const arrayValue = arrayNumbers.shift(); //배열의 맨 앞 요소 빼내기
console.log(arrayValue);
console.log(arrayNumbers);

arrayNumbers.unshift(50); //배열의 맨 앞 요소 추가하기


//pop()과 push()
const arrayNumbers2 = [10,20,30,40];

const arrayValue2 = arrayNumbers2.pop(); //배열의 맨 뒤 요소 빼내기
console.log(arrayValue2);
console.log(arrayNumbers2);

arrayNumbers2.push(50); //배열의 맨 뒤 요소 추가하기

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const concated = arr1.concat(arr2); //concat()은 기존 배열 변형시키지 않음
//const concated = [...arr1, ...arr2];
console.log(concated);
console.log(arr1);
console.log(arr2);


const array = [1,2,3,4,5];
console.log(array.join());
console.log(array.join(' '));
console.log(array.join(', '));

const num = [1,2,3,4,5];

const sum = num.reduce((accumulator, current) => accumulator + current, 0);
//0은 accumulator의 초기값, current는 배열의 원소 순서대로 들어옴
console.log(sum);

const avg = num.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);
console.log(avg);

const alphabets =['a','a','a','b','c','c','d','e'];
const counts = alphabets.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {})

console.log(counts);


//예제문제: 10보다 큰 값의 개수 세기
function countBiggerThanTen(numbers) {
 
  return numbers.reduce((acc, current) => {
    if (current > 10) {
      return acc+1;
    } else {
      return acc;
    }
  },0)
  
}

/*
function countBiggerThanTen(numbers) {
  return numbers.fillter(n => n > 10).length;
}

function countBiggerThanTen(numbers) {
  let count = 0;
  numbers.forEach(n => {
    if(n>10){
      count++;
    } 
  });
  return count;
}
*/

const count = countBiggerThanTen([1,2,3,5,10,20,30,40,50,60]);
console.log(count);
