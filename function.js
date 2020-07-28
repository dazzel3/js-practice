function add(a,b) {
    return a+b;
}

const sum = add(1,2);
console.log(sum);

function hello(name) {
    console.log('Hello, '+name+'!');
}
  
hello('dayeon');
  
function hi(name) {
    return `Hi, ${name}!`;
}
  
const result = hi('dayeon');
console.log(result);

function getGrade(score) {
    if (score === 100) {
      return "A+";
    } else if (score >= 90) {
      return "A";
    } else if (score === 89) {
      return "B+";
    } else if (score >= 80) {
      return "B";
    } else if (score === 79) {
      return "C+";
    } else if (score >= 70) {
      return "C";
    } else {
      return "F";
    }
  }
  const grade = getGrade(92);
  console.log(grade);

//화살표 함수
const numAdd = (a,b) => a+b;
const sayHello = (name) => console.log(`Hello, ${name}!`);
sayHello('dayeon');