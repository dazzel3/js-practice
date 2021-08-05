// function Animal(type, name, sound) {
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
//     this.say = function() {
//         console.log(this.sound);
//     }
// }

// const dog = new Animal('개', '설탕이', '멍멍');
// const cat = new Animal('고양이', '율무', '야옹');

// dog.say();
// cat.say();

function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

// prototype의 역할: 객체 생성자로 무언가를 만들었을 때, 그걸로 만든 객체들끼리 공유할 수 있는 함수나 상수 등을 설정
Animal.prototype.say = function() {
    console.log(this.sound);
}

function Dog(name, sound) {
  Animal.call(this, '개', name, sound);
}

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;


const dog = new Dog('설탕이', '멍멍');
const cat = new Cat('율무', '야옹');

// const dog = new Animal('개', '설탕이', '멍멍');
// const cat = new Animal('고양이', '율무', '야옹');

dog.say();
cat.say();


// class와 상속

class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super('개', name, sound);
  }
}

const sugar = new Dog('슈가', '멍멍');
console.log(sugar);