////////////////////////////////////////////////
// // PART 1
////////////////////////////////////////////////

// let re;

// re = /hello/; //case sensitive
// re = /hello/i; // i = case insnsitive
// // re = /hello/g; // Global search

// console.log(re);
// console.log(re.source);

// // exec() - Return result in an array or null
// const result = re.exec('hello world');
// console.log(result);

// const result2 = re.exec('brad hello world');
// console.log(result2);

// const result3 = re.exec('hi world');
// console.log(result3);

// const result4 = re.exec('helloooooo world');
// console.log(result4);

// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

////////////////////////////////////////////////

// // test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

////////////////////////////////////////////////

// // match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);

// console.log(result);

// const str2 = 'Hell There';
// const result2 = str2.match(re);

// console.log(result2);

////////////////////////////////////////////////

// // seach() - Returns index of the first match. if not found returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

// const str2 = 'Bra Hello There';
// const result2 = str2.search(re);
// console.log(result2);

// const str3 = 'Hell There';
// const result3 = str3.search(re);
// console.log(result3);

////////////////////////////////////////////////

// // replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

////////////////////////////////////////////////
// // PART 2
////////////////////////////////////////////////

let re;

// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with (+ i for case insensitive)
re = /d$/i; // Must end with (+ i for case insensitive)
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; //Matches any ONE character - . is like an wild card (only for 1 character)
re = /h*llo/i; //Matches any character 0 or more times
re = /gre?a?y/i; // Optional character (in our example 'e' is optional and 'a' is optional)
re = /gray\?/i; // Escape character

////////////////////////////////////////////////
// // PART 3
////////////////////////////////////////////////

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an 'a' on an 'e'
re = /[GF]ray/; // Must be a 'G' or a 'F'
re = /[^GF]ray/; // Match anything except a 'G' or an 'F'
re = /[A-Z]ray/; //Match any uppercase letter
re = /[a-z]ray/; //Match any lowercase letter
// re = /[A-Za-z]ray/; //Match any letter
// re = /[0-9]ray/; //Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times (must have ll in our case)
re = /Hel{2,4}o/i; // Must occur between the amounts of times (must have between 2 and 4 'l' in our case)
re = /Hel{2,}o/i; // Must have at least x amount of times (must have at least 2 'l' in our case)

// Parentheses () - Grouping
re = /([0-9]x){3}/; // Must have digit followed by 'x' 3 times

////////////////////////////////////////////////
// // PART 4
////////////////////////////////////////////////

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + means one or more
re = /\W/; // Non-Word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any Non-digit character
re = /\s/; // Match whitespace character
re = /\S/; // Match non-whitespace character
re = /Hell/i; // Word boundary (can be word inside another word)
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match 'x' only if folloed by 'y'
re = /x(?!y)/; // Match 'x' only if NOT folloed by 'y'

// // String to match
// const str = 'Hello World';
// const str = 'Gray';
// const str = 'Hello';
// const str = 'adasd';
// const str = 'Hello, welcome to Hell';
const str = 'xysadasy';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
