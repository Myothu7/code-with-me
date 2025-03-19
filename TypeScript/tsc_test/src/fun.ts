let log : (...text: any) => void;
let calc : (num1: number, num2: number) => number | string;


log = (...text:any) => console.log(...text);

calc = (num1 , num2) => "Result is " + num1 + num2;

log(calc(9,3));

let obj2 : object = {
    name : "mmt",
    email : "mmt@gmail.com"
}
let result = obj2!;

console.log(result);


let mmt= {
    name : {
        0 : "m",
        1 : "t",
    },
    skill : "nothing",
}

let ex = mmt!;

console.log(mmt);    