// const slime = {
//   name: '슬라임'
// };

// const cuteSlime = {
//   name: '슬라임',
//   attribute: 'cute'
// };

// const purpleCuteSlime = {
//   name: '슬라임',
//   attribute: 'cute',
//   color: 'purple'
// };

const slime = {
  name: '슬라임'
};

const cuteSlime = {
  ...slime,
  attribute: 'cute'
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

const numbers = [1,2,3,4,5];
const spreadNumbers = [...numbers, 6, ...numbers];

console.log(spreadNumbers);

const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);

function sum(...rest) {
  return rest.reduce((acc, current) => acc + current,0);
}

console.log(sum(1,2,3,4,5));

function max(...rest) {
  return rest.reduce((acc, current) => acc > current ? acc : current, 0);
}

const result = max(1,2,3,4,100,5,6,7);
console.log(result);