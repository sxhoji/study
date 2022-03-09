const arr = [108, 20, 33, 61, 58];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}

arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// or

for (let i of arr) {
  console.log(i);
}

arr.forEach(console.log);

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} всередині масиву ${arr}`);
});

let str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));

// let a = 5,
//     b = a;

// b = b = 5;

// console.log(b);
// console.log(a);

// const poop = {
//   a: 5,
//   b: 1
// };

// const copy = poop;
// copy.a = 10;

// console.log(copy);
// console.log(poop);

function double(mainObj) {
  let copyObj = {};

  let key;
  for (key in mainObj) {
    copyObj[key] = mainObj[key];
  }

  return copyObj;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = double(numbers);

newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
  d: 17,
  e: 20,
};

console.log(Object.assign(numbers, add));
