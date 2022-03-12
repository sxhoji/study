const arr = [5, 20, 33, 61, 58];
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
// console.log(newNumbers);
// console.log(numbers);

const add = {
  d: 17,
  e: 20,
};

const clone = Object.assign({}, add);
clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'ahahah';
console.log(newArray);
console.log(oldArray);

const media = ['twitter', 'instagram', 'facebook'],
  music = ['soundcloud', 'spotify', 'itunes'],
  internet = [...media, ...music, 'vk', 'telegram'];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

let s = [2, 4, 6];

log(...s);

const q = {
  one: 1,
  two: 2,
};
const w = { ...q };
console.log(w);

let array = ['Vika', 'Sofa', 'Anya', 'Oleg'];
// array.sort();
// console.log(array);

function getNameByLetter(letters, names) {
  const newNames = [];

  names.forEach((name) => {
    const isIncludes = name
      .toLocaleLowerCase()
      .includes(letters.toLocaleLowerCase());

    if (isIncludes) {
      newNames.push(name);
    }
  });

  return newNames;
}

console.log(getNameByLetter('o', array));
