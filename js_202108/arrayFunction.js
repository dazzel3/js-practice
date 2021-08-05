const fruits = ['복숭아', '바나나', '딸기'];

//forEach()

//1
// function print(fruit) {
//   console.log(fruit);
// }

// fruits.forEach(print);


//2
// fruits.forEach(function(fruit) {
//   console.log(fruit);
// })

//3
fruits.forEach(fruit => {
  console.log(fruit);
})


const numbers = [1,2,3,4,5,6,7,8];

// map() 배열의 모든 값을 바꾸고 싶을때

//1
// const squared = [];
// numbers.forEach(n => {
//   squared.push(n*n);
// })

// console.log(squared);


//2
// const square = n => n*n;
// const squared = numbers.map(square);

// console.log(squared);

//3
const squared = numbers.map(n => n*n);
console.log(squared);

const index = squared.indexOf(9);
console.log(index);

const todos = [
  {
    id: 1,
    text: 'javascript',
    done: true,
  },
  {
    id: 2,
    text: 'typescript',
    done: false,
  },
  {
    id: 3,
    text: 'java',
    done: true,
  },
  {
    id: 4,
    text: 'swift',
    done: false
  }
]

// findIndex(): index 찾기
const num = todos.findIndex(todo => todo.done === false);
console.log(num);

// find(): 해당 객체 찾기
const value = todos.find(todo => todo.text === 'java');
console.log(value);

// filter(): 조건에 맞는 객체를 가지고 새로운 배열 생성하기
const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);



// splice(): 기존의 배열을 건들여서 잘라냄

const study = ['hard', 'normal', 'easy'];

const spliced = study.splice(1, 2);
console.log(spliced); // 잘려서 사라진 부분
console.log(study); // 잘리고 남은 부분 (실제 결과)



// slice(): 기존의 배열을 건들이지 않고 원하는 부분 자름

const cube = [1,2,3,4,5,6];

const sliced = cube.slice(0,2);
console.log(sliced);
console.log(cube);



const choco = ['dark', 'milk', 'mild'];

// pop(): 배열의 맨 마지막 원소를 꺼냄, 기존 배열 바뀜
console.log(choco.pop());
console.log(choco);

// push(): 배열의 맨 마지막에 원소를 추가, 기존 배열 바뀜
choco.push('mild');
console.log(choco);

// shift(): 배열의 맨 앞 원소를 꺼냄, 기존 배열 바뀜
console.log(choco.shift());
console.log(choco);

// unshift(): 배열의 맨 앞에 원소를 추가, 기존 배열 바뀜
choco.unshift('dark');
console.log(choco);

// concat(): 두 개의 배열을 합쳐서 새로운 배열 만듬, 기존 배열 건들이지 않음

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const concated = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(concated);


// join(): 배열의 원소들을 하나의 string으로 바꿔줌, 하나 이상의 구분자를 사용할 수 있음

const arr3 = [1,2,3,4,5];

console.log(arr3.join());
console.log(arr3.join(', '));

// reduce(): accumulator의 초기값 0으로 둔 상태, current는 배열의 처음 값부터 가져옴
// 0+1=1 1+2=3 ... 10+5=15

const hit = [1, 2, 3, 4, 5];
const hitSum = hit.reduce((accumulator, current) => accumulator + current, 0);
console.log(hitSum);

const hitAvg = hit.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);
console.log(hitAvg);

const alphabets = ['a','a','a','b','c','c','d','e'];

const counts = alphabets.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {})

console.log(counts);