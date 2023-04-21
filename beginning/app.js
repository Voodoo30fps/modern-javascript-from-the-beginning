// // var, let, const
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting); //returns undefined
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Can not start with number

// // Multi word vars
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// // LET
// let name2 = 'John Doe';
// console.log(name2);
// name2 = 'Steve Smith';
// console.log(name2);

// // CONST
// const name3 = 'John';
// console.log(name3);
// // Can not reassing
// // name3 = 'Sara';
// // Have to assign a value
// // const greeting2;

// const person = {
//   name: 'John',
//   age: 30,
// };

// person.name = 'Sara';
// person.age = 32;
// //  ^ It works

// console.log(person);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// // ^ Also works

// // const numbers = [1, 2, 3, 4, 5, 6];
// // ^ This doesn't work!
// console.log(numbers);

// // ================================================
// // ================================================
// // ================================================

// // PRIMITIVE
// // String
// const name4 = 'John DOe';
// // Number
// const age = 45;
// // Boolean
// const hasKids = true;
// // Null
// const car = null;
// // Undefined
// let test;
// // Symbol
// const sym = Symbol();

// console.log(typeof name4);
// console.log(typeof age);
// console.log(typeof hasKids);
// console.log(typeof car);
// console.log(typeof test);
// console.log(typeof sym);

// // REFERENCE TYPES - Objects
// // Array
// const hobbies = ['movies', 'music'];
// // Object literal
// const address = {
//   city: 'Boston',
//   state: 'MA',
// };
// // Date
// const today = new Date();

// console.log(typeof hobbies);
// console.log(typeof address);
// console.log(today);
// console.log(typeof today);

// // ================================================
// // ================================================
// // ================================================

// // Type conversion
// let val;

// // Number to string
// val = 5;
// val = String(5);

// val = String(4 + 4);

// // Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// // Bool to string
// val = String(true);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// // Date to string
// val = String(new Date());
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// // Array to string
// val = String([1, 2, 3, 4]);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// // toString() --- alternative
// val = (5).toString();
// val = true.toString();

// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// // String to number
// val = Number('5');
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());

// val = Number(true);
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());

// val = Number(false);
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());

// val = Number(null);
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());

// val = Number('hello');
// console.log(val); // -> returns NaN (not a number)
// console.log(typeof val);
// console.log(val.toFixed());

// val = Number([1, 2, 3]);
// console.log(val); // -> returns NaN (not a number)
// console.log(typeof val);
// console.log(val.toFixed());

// val = parseInt('100');
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());

// val = parseInt('100.30');
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());

// val = parseFloat('100.30');
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());

// const val1 = 5;
// const val2 = 6;
// const sum = val1 + val2;
// console.log(sum);
// console.log(typeof sum);

// const val3 = String(5);
// const val4 = 6;
// const sum2 = val3 + val4;
// console.log(sum2); // string - 56
// console.log(typeof sum2); // string

// // ================================================
// // ================================================
// // ================================================

// // Simple math with numbers
// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple math with numbers
// val = num1 + num2;
// console.log(val);

// val = num1 * num2;
// console.log(val);

// val = num1 - num2;
// console.log(val);

// val = num1 / num2;
// console.log(val);

// val = num1 % num2;
// console.log(val);

// // Math Object
// val = Math.PI;
// console.log(val);

// val = Math.E;
// console.log(val);

// val = Math.round(2.8);
// console.log(val);

// // round up
// val = Math.ceil(2.4);
// console.log(val);

// // round down
// val = Math.floor(2.8);
// console.log(val);

// val = Math.sqrt(64);
// console.log(val);

// val = Math.abs(3);
// console.log(val);

// val = Math.pow(8, 2);
// console.log(val);

// val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
// console.log(val);

// val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
// console.log(val);

// // a number in the range 0 to less than 1 (inclusive of 0, but not 1)
// val = Math.random();
// console.log(val);

// // a number between 0 and 20
// val = Math.floor(Math.random() * 20 + 1);
// console.log(val);

// // ================================================
// // ================================================
// // ================================================

// // Strings and concatenation

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello there my name is Brad';
// const tags = 'web design,web develpoment,programming';

// let val;

// val = firstName + lastName;
// console.log(val);

// // Concatenation
// val = firstName + ' ' + lastName;
// console.log(val);

// // Append
// val = 'Brad ';
// val += 'Traversy';
// console.log(val);

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;
// console.log(val);

// // Escaping
// // val = 'That\'s awesome, I can\'t wait';
// // // Commented because of prettier :D
// // console.log(val);

// //Length
// val = firstName.length;
// console.log(val);

// // Concat
// val = firstName.concat(' ', lastName);
// console.log(val);

// // Change case
// val = firstName.toUpperCase();
// console.log(val);
// val = firstName.toLowerCase();
// console.log(val);

// val = firstName[0];
// console.log(val);

// // indexOf() - returns -1 if can't find what you are looking for
// val = firstName.indexOf('l');
// console.log(val);
// val = firstName.lastIndexOf('l');
// console.log(val);

// // charAt()
// val = firstName.charAt('4');
// console.log(val);

// // Get last character
// val = firstName.charAt(firstName.length - 1);
// console.log(val);

// // substring()
// val = firstName.substring(0, 4);
// console.log(val);

// // slice()
// val = firstName.slice(0, 4);
// console.log(val);
// val = firstName.slice(-3);
// console.log(val);

// // split()
// val = str.split(' ');
// console.log(val);
// val = tags.split(',');
// console.log(val);

// // replace()
// val = str.replace('Brad', 'Jack');
// console.log(val);

// // includes()
// val = str.includes('Hello');
// console.log(val);
// val = str.includes('hello');
// console.log(val);

// // ================================================
// // ================================================
// // ================================================

// // Template Literals
// const name = 'John';
// const age = 31;
// const job = 'Web Developer';
// const city = 'Miami';

// let html;

// // Without template strings (es5)
// html =
//   '<ul><li>Name: ' +
//   name +
//   '</li><li>Age: ' +
//   age +
//   '</li><li>Job: ' +
//   job +
//   '</li><li>City: ' +
//   city +
//   '</li></ul>';

// // html='<ul>' +
// //       '<li>Name: ' + name+'</li>' +
// //       '<li>Age: ' + age+'</li>' +
// //       '<li>Job: ' + job+'</li>' +
// //       '<li>City: ' + city+'</li>' +
// //       '</ul>';

// document.body.innerHTML = html;

// function hello() {
//   return 'hello';
// }

// // With template strings / template literals (es6)
// html = `
//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//   </ul>
//   `;
// document.body.innerHTML = html;

// // ================================================
// // ================================================
// // ================================================

// // Arrays and Array Methods

// // Create some arrays
// const numbers = [42, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45, 33, 76, 54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

// console.log(numbers);
// console.log(numbers2);
// console.log(fruit);
// console.log(mixed);

// let val;

// // Get array length
// val = numbers.length;
// console.log(val);

// // Check if is array
// val = Array.isArray(numbers);
// console.log(val);

// // Get single value
// val = numbers[3];
// console.log(val);
// val = numbers[0];
// console.log(val);

// // Insert into array (change a value from the array)
// numbers[2] = 100;
// console.log(numbers);

// // Find index of value
// val = numbers.indexOf(36);
// console.log(val);

// // MUTATING ARRAYS

// // Add on to end
// numbers.push(250);
// console.log(numbers);
// // Add on to front
// numbers.unshift(120);
// console.log(numbers);

// // Take off from end
// numbers.pop();
// console.log(numbers);

// // Take of from the front
// numbers.shift();
// console.log(numbers);

// // Splice values - remove from position 1 to position 3
// numbers.splice(1, 3);
// console.log(numbers);

// // Reverse
// numbers.reverse();
// console.log(numbers);

// // Concatenate arrays
// val = numbers.concat(numbers2);
// console.log(val);

// // Sorting arrays - sorts alphabetically (string like)
// val = fruit.sort();
// console.log(val);

// val = numbers.sort();
// console.log(val);

// // Use the "compare function"
// val = numbers.sort(function (x, y) {
//   return x - y;
// });
// console.log(val);

// // Reverse sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// });
// console.log(val);

// // Find
// // Find first number under 50
// function under50(num) {
//   return num < 50;
// }
// val = numbers.find(under50);
// console.log(val);

// function over50(num) {
//   return num < 50;
// }
// val = numbers.find(over50);
// console.log(val);

// // ================================================
// // ================================================
// // ================================================

// // Object Literals
// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 30,
//   email: 'steve@aol.com',
//   hobbies: ['music', 'sports'],
//   address: {
//     city: 'Miami',
//     state: 'FL',
//   },
//   getBirthYear: function () {
//     return 2017 - this.age;
//   },
// };

// let val;

// val = person;
// console.log(val);

// // Get specific value
// val = person.firstName;
// console.log(val);
// val = person['firstName'];
// console.log(val);

// val = person.age;
// console.log(val);

// val = person.hobbies;
// console.log(val);
// val = person.hobbies[1];
// console.log(val);

// val = person.address;
// console.log(val);
// val = person.address.state;
// console.log(val);
// val = person.address['city'];
// console.log(val);

// val = person.getBirthYear();
// console.log(val);

// const people = [
//   { name: 'John', age: 30 },
//   { name: 'Mike', age: 23 },
//   { name: 'Nancy', age: 40 },
// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }

// // ================================================
// // ================================================
// // ================================================

// // Dates and Times
// let val;

// const today = new Date();
// console.log(today);
// console.log(typeof today);

// val = today.toString();
// console.log(val);
// console.log(typeof val);

// let birthday = new Date('9-10-1981 11:25:00');
// val = birthday;
// console.log(val);
// birthday = new Date('September 10 1981');
// val = birthday;
// console.log(val);
// birthday = new Date('9/10/1981');
// val = birthday;
// console.log(val);

// // getMonth (starts from 0)
// val = today.getMonth();
// console.log(val);

// val = today.getDate();
// console.log(val);

// // starts from sunday (0)
// val = today.getDay();
// console.log(val);

// val = today.getFullYear();
// console.log(val);

// val = today.getHours();
// console.log(val);

// val = today.getMinutes();
// console.log(val);

// val = today.getSeconds();
// console.log(val);

// val = today.getMilliseconds();
// console.log(val);

// // returns the number of milliseconds since the ECMAScript epoch (January 1, 1970, UTC).
// val = today.getTime();
// console.log(val);

// birthday.setMonth(2);
// console.log(birthday);

// birthday.setDate(12);
// console.log(birthday);

// birthday.setFullYear(1985);
// console.log(birthday);

// birthday.setHours(3);
// console.log(birthday);

// birthday.setMinutes(30);
// console.log(birthday);

// birthday.setSeconds(25);
// console.log(birthday);

// // ================================================
// // ================================================
// // ================================================

// // If statements & Comparison Operators

// const id = 100;

// // Equal to
// if (id == 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Not equal to
// if (id != 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// const stringid = '100';
// // Equal to
// if (id == 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }
// if (id != 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE
// if (id === 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }
// if (stringid === 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// if (id !== 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }
// if (stringid !== 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// let undefinedid;
// // Check if is defined
// if (typeof undefinedid !== 'undefined') {
//   console.log(`The ID is ${undefinedid}`);
// } else {
//   console.log('NO ID');
// }

// // GREATER OF LESS THAN > >= < <=
// if (id > 200) {
//   console.log('Greated than 200');
// } else {
//   console.log('Less than 200');
// }

// // IF ELSE
// const color = 'yellow';

// if (color === 'red') {
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// // LOGICAL OPERATORS
// const name = 'Steve';
// age = 20;

// // AND &&
// if (age > 0 && age < 12) {
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }

// // OR ||
// if (age < 16 || age > 65) {
//   console.log(`${name} can not run in race`);
// } else {
//   console.log(`${name} is registered for the race`);
// }

// // TERNARY OPERATOR
// // id is 100
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// // ================================================
// // ================================================
// // ================================================

// // Switches

// const color = 'red';

// switch (color) {
//   case 'red':
//     console.log('Color is red');
//     break;
//   case 'blue':
//     console.log('Color is blue');
//     break;
//   default:
//     console.log('Color is not red of blue');
//     break;
// }

// switch (new Date().getDay()) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
// }

// console.log(`Today is ${day}`);

// // ================================================
// // ================================================
// // ================================================

// // Function declarations & Expressions

// // FUNCTION DECLARATIONS
// function greet(firstName = 'John', lastName = 'Doe') {
//   // ^ ES6 default values
//   //   if (typeof firstName === 'undefined') {
//   //     firstName = 'John';
//   //   }
//   //   if (typeof lastName === 'undefined') {
//   //     lastName = 'Doe';
//   //   }

//   //   console.log('Hello');
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// // greet();
// console.log(greet());
// // console.log(greet('John', 'Doe'));
// console.log(greet('Steve', 'Smith'));

// // FUNCTION EXPRESSIONS
// const square = function (x = 3) {
//   // ^ x=3 default value
//   return x * x;
// };

// // console.log(square(8));

// // IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// (function () {
//   console.log('IIFE Ran..');
// })();

// (function (name) {
//   console.log('Hello ' + name);
// })('Brad');

// // PROPERTY METHODS
// const todo = {
//   add: function () {
//     console.log('Add todo..');
//   },
//   edit: function (id) {
//     console.log(`Edit todo ${id}`);
//   },
// };

// todo.delete = function () {
//   console.log('Delete todo...');
// };

// todo.add();
// todo.edit(22);
// todo.delete();

// // ================================================
// // ================================================
// // ================================================

// // General Loops

// // FOR LOOP
// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log('2 is my favorite number');
//     continue;
//     // ^ continue stops the loop and goes to the next iteration
//   }

//   if (i === 5) {
//     console.log('Stop the loop');
//     break;
//   }

//   console.log('Number ' + i);
// }

// // WHILE LOOP
// let i = 0;

// while (i < 10) {
//   console.log('Number ' + i);
//   i++;
// }

// // DO WHILE
// let ii = 0;

// do {
//   console.log('Number ' + ii);
//   ii++;
// } while (ii < 10);

// // LOOP THROUGH ARRAY
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// // FOREACH
// cars.forEach(function (car, index) {
//   console.log(`${index} : ${car}`);
// });

// // MAP
// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Sara' },
//   { id: 3, name: 'Karen' },
//   { id: 4, name: 'Steve' },
// ];

// const ids = users.map(function (user) {
//   return user.id;
// });
// console.log(ids);

// // FOR IN LOOP
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 40,
// };

// for (let x in user) {
//   console.log(`${x} : ${user[x]}`);
// }

// // ================================================
// // ================================================
// // ================================================

// // Window object

// // WINDOW METHODS / OBJECTS / PROPERTIES
// window.console.log(123);

// // Alert
// window.alert('Hello world');
// alert('Hello world');

// // Prompt
// const input = prompt();
// alert(input);

// // Confirm
// if (confirm('Are you sure')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// // Outter height and width
// let height = window.outerHeight;
// console.log(height);
// let width = window.outerWidth;
// console.log(width);

// // Inner height and width
// let height2 = window.innerHeight;
// console.log(height2);
// let width2 = window.innerWidth;
// console.log(width2);

// // Scroll points
// let scrollX = window.scrollX;
// let scrollY = window.scrollY;
// console.log(scrollX);
// console.log(scrollY);

// // Location Object
// let loc = window.location;
// console.log(loc);

// let hostname = window.location.hostname;
// console.log(hostname);

// let port = window.location.port;
// console.log(port);

// let href = window.location.href;
// console.log(href);

// // http://127.0.0.1:5500/js_sandbox/?id=1&name=Brad&member=standard
// let search = window.location.search;
// console.log(search);

// // Redirect
// window.location.href = 'http://google.com';

// // Reload
// window.location.reload();

// // History object
// window.history.go(-2);
// val = window.history.length;
// console.log(val);

// // Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;
// console.log(val);

// // ================================================
// // ================================================
// // ================================================

// // Global Scope
// var a = 1;
// let b = 2;
// const c = 3;

// // function test() {
// //   var a = 4;
// //   let b = 5;
// //   const c = 6;
// //   console.log('Function Scope: ', a, b, c);
// // }
// // test();
// // console.log('Global Scope: ', a, b, c);

// // if (true) {
// //   // Block Scope
// //   var a = 4;
// //   let b = 5;
// //   const c = 6;
// //   console.log('If (Block) Scope: ', a, b, c);
// // }
// // console.log('Global Scope: ', a, b, c);

// for (var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }
// for (let b = 0; b < 10; b++) {
//   console.log(`Loop: ${b}`);
// }
// console.log('Global Scope: ', a, b, c);
