// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1);
console.log(sym2);
console.log(typeof sym1);

console.log(Symbol() === Symbol());
console.log(Symbol('123') === Symbol('123'));
// 2 symbols can never be the same

// console.log(`Hello ${sym1}`);
// ^ Uncaught TypeError: Cannot convert a Symbol value to a string
console.log(`Hello ${String(sym1)}`);
console.log(`Hello ${sym1.toString}`);

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';
// ^ key3 and key4 are not symbols, just regular properties

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stingify
console.log(JSON.stringify({ key: 'prop' }));
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' }));
