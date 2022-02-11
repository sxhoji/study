const category = 'toys';

console.log(`https://someurl${category}/5`);

let num = 51;

switch (num) {
  case 50:
    console.log('You good?');
    break;
  case 100:
    console.log('Nah');
    break;
  case 51:
    console.log('yaaas');
    break;
  default:
    console.log('you are stupid');
    break;
}

let box = 50;

// while (box <= 55) {
//   console.log(box);
//   box++;
// }

do {
  console.log(box);
  box++;
} while (box < 55);

let oj = 7;

function showFirstMessage(text) {
  console.log(text);
  oj = 8;
}

showFirstMessage('lol');

function calc(a, b) {
  return a + b;
}

console.log(calc(4, 8));
console.log(calc(7, 9));
console.log(calc(2, 0));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

let something = function () {
  console.log('Hello');
};

something();

calc = (a, b) => {
  console.log('2');
  return a + b;
};
calc();

let str = 'test';
// console.log(str[0]);
console.log(str.toUpperCase());

const logg = 'Hello world';
console.log(logg.slice(6, 10));

const fruit = 'some fruit';
console.log(fruit.indexOf('t'));

let smthng = 2.5;
console.log(Math.round(smthng));

function first() {
  // do something
  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learn(lang, callback) {
  console.log(`I learn ${lang}`);
  callback();
}

function done() {
  console.log('I learnt that lesson');
}

learn('JS', done);

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colours: {
    border: 'black',
    background: 'red',
  },
  makeTest: function () {
    console.log('test');
  },
};

options.makeTest();

const { border, background } = options.colours;
console.log(border);

console.log(Object.keys(options['colours']).length);

// console.log(options.name);

// delete options.name;
// console.log(options);

for (let key in options) {
  if (typeof options[key] === 'object') {
    for (let i in options[key]) {
      console.log(`властивість ${key} має значення ${options[key][i]}`);
    }
  } else {
    console.log(`властивість ${key} має значення ${options[key]}`);
  }
}
