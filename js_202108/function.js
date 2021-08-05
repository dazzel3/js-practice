function add(a, b) {
  return a + b;
}

const sum = add(1, 2);
console.log(sum);

function Hello(name) {
  // console.log('hello, '+name+'!');
  console.log(`hello, ${name}!`);
}

Hello("dazzel");

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } //...
}

const grade = getGrade(100);
console.log(grade);

// const calc = (a,b) => {
//   return a*b;
// }

const calc = (a,b) => a*b;

console.log(calc(4,2));

const hi = (name) => {
  console.log(`Hi, ${name}`);
}

console.log(hi('Nav'));