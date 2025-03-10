
let x = -121
var isPalindrome = function(x) {
    let arr = x.toString();
    let reverse = "";
    let len = arr.length;
    for(let i = 1 ; i <= len ; i ++) {
        reverse += arr[len - i];
    }
    return arr == reverse ? true : false;
};

let result = isPalindrome(x)
console.log(result)