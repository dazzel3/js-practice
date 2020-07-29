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
