// EXAMINING THE DOCUMENT OBJECT
// let val;

// val = document;
// console.log(val);

// // Get a collection
// val = document.all;
// console.log(val);

// val = document.all[1];
// // It works like an array
// console.log(val);

// val = document.all.length;
// // Counts all the elements in the DOM
// console.log(val);

// val = document.head;
// console.log(val);
// val = document.body;
// console.log(val);
// val = document.doctype;
// console.log(val);
// val = document.domain;
// console.log(val);
// val = document.URL;
// console.log(val);
// val = document.characterSet;
// console.log(val);
// val = document.contentType;
// console.log(val);

// val = document.forms;
// console.log(val);
// val = document.forms[0];
// console.log(val);

// val = document.forms[0].id;
// console.log(val);
// val = document.forms[0].method;
// console.log(val);
// val = document.forms[0].action;
// console.log(val);

// val = document.links;
// console.log(val);
// val = document.links[0];
// console.log(val);
// val = document.links[0].id;
// console.log(val);
// val = document.links[0].className;
// console.log(val);
// val = document.links[0].classList;
// console.log(val);
// val = document.links[0].classList[0];
// console.log(val);

// val = document.images;
// console.log(val);

// val = document.scripts;
// console.log(val);
// val = document.scripts[2].getAttribute('src');
// console.log(val);

// let scripts = document.scripts;
// // scripts.forEach((script) => {
// //   console.log(script);
// // });
// // // FOREACH IS FOR ARRAYS ONLY

// let scriptsArr = Array.from(scripts);
// scriptsArr.forEach((script) => {
//   console.log(script.getAttribute('src'));
// });

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////
// ////////////////////////////////////////////////

// // DOM SELECTORS FOR SINGLE ELEMENTS

// let val;

// val = document.getElementById('task-title');
// console.log(val);

// // Get things from the element
// val = document.getElementById('task-title').id;
// console.log(val);
// val = document.getElementById('task-title').className;
// console.log(val);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color: red">Task List</span>';

// // Query selector - it gives only the first one
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';

// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
// // ^ only works for the first one because query selector is a first element selector

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////
// ////////////////////////////////////////////////

// // DOM SELECTORS FOR MULTIPLE ELEMENTS

// // Get elements by classname
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document
//   .querySelector('ul')
//   .getElementsByClassName('collection-item');
// console.log(listItems);

// // Get elements by tagname
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// console.log(lis[3]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Convert HTML Collection into array
// // lis.reverse();
// lis = Array.from(lis);
// lis.reverse();
// console.log(lis);

// lis.forEach((li, index) => {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// // Query selector all
// const items = document.querySelectorAll('ul.collection li.collection-item');
// console.log(items);

// items.forEach((item, index) => {
//   item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd');
// const liEven = document.querySelectorAll('li:nth-child(even');

// liOdd.forEach((li) => {
//   li.style.background = '#ccc';
// });

// for (let i = 0; i < liEven.length; i++) {
//   liEven[i].style.background = '#f4f4f4';
// }

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////
// ////////////////////////////////////////////////

// // TRAVERSING THE DOM

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// console.log(list);
// console.log(listItem);

// // Get child notes
// val = list.childNodes;
// console.log(val);
// val = list.childNodes[0];
// console.log(val);
// val = list.childNodes[0].nodeName;
// console.log(val);
// val = list.childNodes[1].nodeType;
// console.log(val);
// // Node type values + meaning
// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text Node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype

// // Get children element nodes
// val = list.children;
// console.log(val);
// val = list.children[1];
// console.log(val);
// list.children[1].textContent = 'Hello';

// // Children of children
// val = list.children[3].children;
// console.log(val);
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];
// console.log(val);

// // First child
// val = list.firstChild;
// console.log(val);
// val = list.firstElementChild;
// console.log(val);

// // Last child
// val = list.lastChild;
// console.log(val);
// val = list.lastElementChild;
// console.log(val);

// // Count child elements
// val = list.childElementCount;
// console.log(val);

// // Get parent node
// val = listItem.parentNode;
// console.log(val);
// val = listItem.parentElement;
// console.log(val);

// val = listItem.parentElement.parentElement;
// console.log(val);

// // Get next sibling
// val = listItem.nextSibling;
// console.log(val);
// val = listItem.nextElementSibling;
// console.log(val);
// val = listItem.nextElementSibling.nextElementSibling;
// console.log(val);

// // Get previous sibling
// val = listItem.previousSibling;
// console.log(val);
// val = listItem.previousElementSibling;
// console.log(val);

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////
// ////////////////////////////////////////////////

// // CREATING ELEMENTS

// // Create element
// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title', 'New Item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// // Create new link element
// const link = document.createElement('a');
// // Add classes
// link.className = 'delete-item secondary-content';
// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';
// console.log(link);

// // Append link into li
// li.appendChild(link);

// console.log(li);

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////
// ////////////////////////////////////////////////

// // REMOVING AND REPLACING ELEMENTS

// // Replace element
// // Create element
// const newHeading = document.createElement('h2');
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('Task List'));
// console.log(newHeading);

// // Get the old heading
// const oldHeading = document.getElementById('task-title');

// // Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // Remove element
// const lis = document.querySelectorAll('li');
// console.log(lis);

// const list = document.querySelector('ul');
// console.log(list);

// // Remove list item
// lis[0].remove();

// // Remove child element
// list.removeChild(lis[3]);

// // Classes and attributes
// const firstLi = document.querySelector('li:first-child');
// console.log(firstLi);
// const link = firstLi.children[0];

// let val;

// // Classes
// val = link.className;
// console.log(val);
// val = link.classList;
// console.log(val);
// val = link.classList[0];
// console.log(val);

// link.classList.add('test');
// val = link;
// console.log(val);

// link.classList.remove('test');
// val = link;
// console.log(val);

// // Attributes
// val = link.getAttribute('href');
// console.log(val);

// val = link.setAttribute('href', 'http://google.com');
// console.log(val);

// val = link.hasAttribute('href');
// console.log(val);

// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// val = link;
// console.log(val);

// link.removeAttribute('title');
// console.log(val);

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////
// ////////////////////////////////////////////////

// // EVENT LISTENERS AND THE EVENT OBJECTS

// // document.querySelector('.clear-tasks').addEventListener('click', function (e) {
// //   //   e.preventDefault();
// //   console.log('hello world');
// // });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);
// function onClick(e) {
//   //   console.log('Clicked');

//   let val;

//   val = e;
//   console.log(val);

//   // Event target element
//   val = e.target;
//   console.log(val);
//   val = e.target.id;
//   console.log(val);
//   val = e.target.className;
//   console.log(val);
//   val = e.target.classList;
//   console.log(val);

//   e.target.innerText = 'Hello World';

//   // Event type
//   val = e.type;
//   console.log(val);

//   // Timestamp
//   val = e.timeStamp;
//   console.log(val);

//   // Coords event relative to the window
//   val = e.clientY;
//   console.log(val);
//   val = e.clientX;
//   console.log(val);

//   // Coords event relative to the element
//   val = e.offsetY;
//   console.log(val);
//   val = e.offsetX;
//   console.log(val);
// }

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////
// ////////////////////////////////////////////////

// // MOUSE EVENTS

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // Click
// clearBtn.addEventListener('click', runEvent);

// // Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);

// // Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// // Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// // Mouseunter
// card.addEventListener('mouseenter', runEvent);

// // Mouseleave
// card.addEventListener('mouseleave', runEvent);

// // Mousover
// card.addEventListener('mouseover', runEvent);

// // Mouseout
// card.addEventListener('mouseout', runEvent);

// // Mousemove
// card.addEventListener('mousemove', runEvent);

// // Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX},  ${e.offsetY}, 40)`;
// }

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////
// ////////////////////////////////////////////////

// // KEYBOARD AND INPUT EVENTS

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// // Clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// // Keydown
// taskInput.addEventListener('keydown', runEvent);
// // Keyup
// taskInput.addEventListener('keyup', runEvent);
// // Keypress
// taskInput.addEventListener('keypress', runEvent);

// // Focus
// taskInput.addEventListener('focus', runEvent);
// // Blur
// taskInput.addEventListener('blur', runEvent);

// // Cut
// taskInput.addEventListener('cut', runEvent);
// // Paste
// taskInput.addEventListener('paste', runEvent);

// // Input
// taskInput.addEventListener('input', runEvent);

// // Change
// select.addEventListener('change', runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   console.log(e.target.value);
//   heading.innerText = e.target.value;

//   // Get input value
//   console.log(taskInput);

//   //   e.preventDefault();
// }

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////
// ////////////////////////////////////////////////

// // EVENT BUBBLING & DELEGATION

// // EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click', function () {
//   console.log('card title');
// });
// document.querySelector('.card-content').addEventListener('click', function () {
//   console.log('card content');
// });
// document.querySelector('.card').addEventListener('click', function () {
//   console.log('card');
// });
// document.querySelector('.col').addEventListener('click', function () {
//   console.log('col');
// });

// // EVENT DELEGATION
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//   console.log(e.target);
//   //   if (e.target.parentElement.className === 'delete-item secondary-content') {
//   //     console.log('delete item');
//   //   }

//   if (e.target.parentElement.classList.contains('delete-item')) {
//     console.log('delete item');
//     e.target.parentElement.parentElement.remove();
//   }
// }

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////
// ////////////////////////////////////////////////

// // LOCAL & SESSION STORAGE

// // set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// // remove from local storage
// localStorage.removeItem('name');

// // remove from session storage
// sessionStorage.removeItem('name');

// // get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// // clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function (e) {
  const task = document.getElementById('task').value;

  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach((task, id) => {
  console.log(`${id}: ${task}`);
});
