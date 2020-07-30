function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    // this.say = function() {
    //   console.log(this.sound);
    // }
  }
  
  //객체들끼리 공유할 수 있는 것은 프로토타입으로 생성
  Animal.prototype.say = function() {
    console.log(this.sound);
  }
  
  const dog = new Animal('개','초코','멍멍');
  const cat = new Animal('고양이','아미','야옹');
  
  dog.say();
  cat.say();

  function Grade(subject, score) {
  this.subject = subject;
  this.score = score;
}

Grade.prototype.print = function() {
  console.log(this.score);
}

function Math(score) {
  Grade.call(this,'수학',score);
}

function English(score) {
  Grade.call(this,'영어',score);
}


Math.prototype = Grade.prototype;
English.prototype = Grade.prototype;

const math = new Math(90);
const english = new English(80);

math.print();
english.print();

function Grade(subject, score) {
  this.subject = subject;
  this.score = score;
}

Grade.prototype.print = function() {
  console.log(this.score);
}

function Math(score) {
  Grade.call(this,'수학',score);
}

function English(score) {
  Grade.call(this,'영어',score);
}


Math.prototype = Grade.prototype;
English.prototype = Grade.prototype;

const math = new Math(90);
const english = new English(80);

math.print();
english.print();

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
      super('개',name,sound);
    } 
}
  
class Cat extends Animal {
    constructor(name, sound) {
      super('고양이',name,sound);
    } 
}
  
const dog2 = new Dog('멍멍이','멍멍');
const cat2 = new Dog('야옹이','야옹');
  
dog2.say();
cat2.say();

class Food {
    constructor(name) {
      this.name = name;
      this.brands = [];
}
  
addBrand(brand) {
    this.brands.push(brand);
}
  
print() {
    console.log(`${this.name}을(를) 파는 음식점들: `);
    console.log(this.brands.join(', '));
    }
}
  
const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노피자');
  
const chicken = new Food('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('BBQ');
chicken.addBrand('BHC');
  
pizza.print();
chicken.print();