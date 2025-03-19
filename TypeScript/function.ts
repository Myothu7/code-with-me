
type para = string;
function success (msg: para) {
    console.log(msg);
}

success("success");


function liveDangerously(x?: number | null) {
    // No error
    console.log(x?.toFixed());
}

let data = null;
liveDangerously(data)

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

function returnType() : "hello" {
    return "hello";
}

let obj = {
    a: 1,
}

function fn(val: string): string {
    return val
}

function check(val: string): fn  {
    return val;
}

console.log("check", check("hello"));