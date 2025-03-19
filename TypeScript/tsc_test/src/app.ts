console.log("I am app");

function callMe(str: string | number) :void {
    console.log("callMe" + str);
}


function sum(num1: number, num2: number) :number {
    console.log("sum", num1, num2);
    return num1 + num2;
}

callMe("string testing")
callMe(123)

let total:number = sum(12,9)
console.log("total", total)

let numbers: number[] = [20, 23, 0, 12, 79]

let arr : Array<number> = [2, 3, 4, 5, 6];
let arrObj : Array<object> = [{
    name: "test",
    age: 21
}];

let findByNumber = (arr: Array<number>, num : number): boolean => arr.some(val=> val == num);

console.log("Array => ", numbers)
console.log("findByNumber 22", findByNumber(numbers, 12));
console.log("findByNumber 122", findByNumber(numbers, 122));

let persons = ["alice", "bob", "clayer", "dlar"];

const CamelCase = (arr : Array<string>): Array<string> => arr.map((str) => str.toUpperCase());

console.log("camelCase", CamelCase(persons));

