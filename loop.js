for (let i=0;i<10;i++) {
    console.log(i);
}
  
const names = ['멍멍이','야옹이','악어'];
  
for (let i=0; i<names.length; i++) {
    console.log(names[i]);
}

let i = 0;
let isFun = false;

while (!isFun) {
  console.log(i);
  i++;
  if (i === 30) {
    isFun =true;
  }
}

const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
  console.log(number);
}

const doggy = {
  name: '강아지',
  sound: '멍멍',
  age: 2
};

console.log(Object.keys(doggy));
console.log(Object.values(doggy));
console.log(Object.entries(doggy));


for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}


for (let i = 0; i <10; i++) {
    if (i === 2) continue;
    console.log(i);
    if (i === 5) break;
}

function sumOf(numbers) {
    let sum = 0;
    for (let i = 0; i< numbers.length; i++){
      sum += numbers[i];
    }
    return sum;
}
  
const result = sumOf([1,2,3,4,5]);
console.log(result);


function biggerThanThree(numbers) {
    let array = [];
    for (let i=0;i<numbers.length; i++){
      if (numbers[i] >3) {
        array.push(numbers[i]);
      }
    } return array; 
} 
   
 
 const numbers = [1, 2, 3, 4, 5, 6, 7];
 console.log(biggerThanThree(numbers));