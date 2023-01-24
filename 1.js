"use strict";

const value = 234;

const firstNum = Math.floor(value / 100)
const secondNum = Math.floor(value / 10 % 10);
const thirdNum = value % 10;

console.log("Произведение цифр числа:", firstNum * secondNum * thirdNum);
console.log("Сумма цифр числа:", firstNum + secondNum + thirdNum);

