const message : string = "hello ts";

type obj = {
    name:string,
    age:number,
}

const human :obj = {
    name : "Alice",
    age : 20,
}

console.log('Human',human)

const student :Array<number | string > =[1,2,3, "hello"];
console.log("student",student)