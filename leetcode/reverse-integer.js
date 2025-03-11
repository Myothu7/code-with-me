const numberToArr = (num) => {
    let temp = [];
    for(let val of num.toString()){
        temp.push(val)
    }
    return temp;
}
const reverse = function(x) {

    let input = x < 0 ? x * -1 : x; 
    let data = numberToArr(input);

    if(data[0] == 0) {
        data.shift();
    }
    let result = "";

    let len = data.length;

    for(let i = 1; i <= len ; i++) {
            result += data[len -i];
    }
    let num = parseInt(result,10);  
    if (isNaN(num) ||  !(2**-31 <= num) || !(num <= (2**31 -1))) {
        num = 0;
    }
   return (x < 0 ? -num : num );
};
console.time("test");

console.log(reverse(0));
console.timeEnd("test");

// console.log(2**31 -1);