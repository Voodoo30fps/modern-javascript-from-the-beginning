// SETS - Store unique values of any type
// SETS ARE NOT KEY VALUE PAIRS

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100);
// ^ has to be unique values (in our example it doesnt add 100 again)

const set2 = new Set([1, true, 'string']);

console.log(set1);
console.log(set2);

// Get count
console.log(set1.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({ name: 'John' }));
// ^ returns false because of the refference value of objects the same as:
console.log({ name: 'John' } === { name: 'John' });

// Selete from set
set1.delete(100);
console.log(set1);

// ITERATING THROUGH SETS

// For...of
for (let item of set1) {
  console.log(item);
}

// ForEach Loop
set1.forEach((value) => {
  console.log(value);
});

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);
