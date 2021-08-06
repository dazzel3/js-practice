function print(person) {
  // if (person === undefined || person === null) {
  //   return;
  // }
  if (!person){
    return;
  }
  console.log(person.name);
}

const person = {
  name: 'John'
}

print(person);


// falsy한 값
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
console.log(!false);


// truthy한 값 
console.log(!3);
console.log(!'hi');
console.log(!{});