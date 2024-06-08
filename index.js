// const na = 24;
// console.log(na);

// // generate a random number
// let randomNum = Math.floor(Math.random() * 100) + 1;

// //randomNum = Math.round(randomNum);
// console.log(randomNum);

// to get random numbers from 50 to 100

// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNum);

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
let min = 1;
let max = 100;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function () {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  label1.innerHTML = randomNum1;
  label2.innerHTML = randomNum2;
  label3.innerHTML = randomNum3;
};
