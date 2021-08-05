const dog = {
    name: '설탕이',
    age: 1,
    gender: 'female',
    sound: '멍멍',
    say() {
        console.log(this.sound);
    }
}

console.log(dog);
console.log(dog.name);
console.log(dog.age);

const {gender} = dog;
console.log(gender);

dog.say();

// function print(animal) {
//     const {name, age} = animal;
//     const text = `${name}, ${age}`;
//     console.log(text);
// }

function print({name, age}) {
    const text = `${name}, ${age}`;
    console.log(text);
}

print(dog);

const numbers = {
  a: 1,
  b: 3,
  get sum() {
    console.log('sum');
    return this.a + this.b;
  },
  set change(value) {
      console.log('change');
      this.a = value;
  }
};

numbers.a = 5;
console.log(numbers.sum);
numbers.b = 30;
console.log(numbers.sum);

numbers.change = 20;
console.log(numbers.a);

