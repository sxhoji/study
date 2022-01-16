let num = 50;

switch (num) {
  case 49: 
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

while (box <= 55) {
console.log (box);
box++;
}

do {
console.log(box);
box++;
}
while (box < 55);

let oj = 7;

function showFirstMessage(text) {
   console.log(text);
   oj = 8;
}

showFirstMessage('lol');

function calc(a, b) {
  return(a + b);
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

let something = function() {
  console.log("Hello");
};

something();

calc = (a, b) => {
  console.log('2');
  return (a + b);
};
calc();

let str = 'test';
// console.log(str[0]);
console.log(str.toUpperCase());

const logg = 'Hello world';
console.log(logg.slice(6, 10));

const fruit = "some fruit";
console.log(fruit.indexOf('t'));

let smthng = 2.5;
console.log(Math.round(smthng));