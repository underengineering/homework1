"use strict";

const value1 = 1;
const value2 = 2;
const value3 = 3;

const average = (Math.abs(value1 ** 3) +
    Math.abs(value2 ** 3) +
    Math.abs(value3 ** 3)) / 3;
console.log("Среднее арифметическое:", average);

const geometricMean = (value1 ** 2 * value2 ** 2 * value3 ** 2) ** (1 / 3);
console.log("Среднее геометрическое:", geometricMean);

