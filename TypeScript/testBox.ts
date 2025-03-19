let age: string | number;
age = 21;
age = "23";

let arr : Array<number> = [];
arr.push(23);
arr.push(27);

let arr2 : Array<string> = [];
arr2.push("hello");
arr2.push("typeScript");

let mixed : Array<number | string> = [];
mixed.push(23);
mixed.push("mmt");

let mixedTwo : Array<number & string> = [];
mixedTwo.push(23);
mixedTwo.push("hello");

console.log(mixedTwo);
