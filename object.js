const dog = {
    name: "멍멍이",
    age: 2,
    cute: true
  };
  
  console.log(dog);
  console.log(dog.name);
  console.log(dog.age);
  
  const ironMan = {
    name: "토니 스타크",
    actor: "로버트 다우니 주니어",
    alias: "아이언맨"
  };
  
const captainAmerica = {
    name: "스티븐 로저스",
    actor: "크리스 에반스",
    alias: "캡틴 아메리카"
};
  
function print(hero) {
    const {alias, name, actor } = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text); 
};
  
print(ironMan);
print(captainAmerica);


const cat = {
    name: '고양이',
    sound: '야옹~',
    say: function() {
      console.log(this.sound);
    }
};
  
cat.say();


const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
      console.log('calculate');
      this.sum = this._a + this._b;
    },
    get a() {
      return this._a;
    },
    get b() {
      return this._b;
    },
    set a(value) {
      this._a = value;
      this.calculate();
    },
    set b(value) {
      this._b = value;
      this.calculate();
    }
  
  };
  
  console.log(numbers.sum);
  numbers.a = 5;
  console.log(numbers.sum);
  numbers.b = 10;
  console.log(numbers.sum);

