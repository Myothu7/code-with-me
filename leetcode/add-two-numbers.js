let l1 = [9,9,9,9,9,9,9];
let l2 = [9,9,9,9];

console.time("test");

const  arrayToString = (arr) => arr.reverse().toString();

const strToNum = (str) => {
    let temp ="" ;
    for(let a of str){
        if(a != ',') {
            temp += a
        }
    }
    return JSON.parse(temp);
}

const numberToArr = (num) => {
    let temp = [];
    for(let val of num.toString()){
        temp.push(val)
    }
    return temp;
}

let sum = strToNum(arrayToString(l1)) + strToNum(arrayToString(l2))
console.log(sum)
console.log(numberToArr(sum));

console.timeEnd("test");