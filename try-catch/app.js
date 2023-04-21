const user = { email: 'jdoe@gmail.com' };

try {
  //   // Produce a RefferenceError
  //   myFunction();
  //   // Produce a TypeError
  //   null.myFunction();
  //   // Produce SyntaxError
  //   console.log(eval('Hello World'));
  //   // Produce URIError
  //   decodeURIComponent('%');

  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch (e) {
  console.log(e);
  console.log(e.message);
  console.log(e.name);
  console.log(e instanceof ReferenceError);
  console.log(e instanceof TypeError);

  console.log(`${e.name}: ITS NULL STUPID!!!!`);

  console.log(`User Error: ${e.message}`);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');
