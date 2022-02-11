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
