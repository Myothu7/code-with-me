"use strict";
console.log("I am app");
function callMe(str) {
    console.log("callMe" + str);
}
function sum(num1, num2) {
    console.log("sum", num1, num2);
    return num1 + num2;
}
callMe("string testing");
callMe(123);
let total = sum(12, 9);
console.log("total", total);
let numbers = [20, 23, 0, 12, 79];
let arr = [2, 3, 4, 5, 6];
let findByNumber = (arr, num) => arr.some(val => val == num);
console.log("Array => ", numbers);
console.log("findByNumber 22", findByNumber(numbers, 12));
console.log("findByNumber 122", findByNumber(numbers, 122));
let persons = ["alice", "bob", "clayer", "dlar"];
const CamelCase = (arr) => arr.map((str) => str.toUpperCase());
console.log("camelCase", CamelCase(persons));
