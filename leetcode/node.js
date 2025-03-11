head = [1,2,3,4];

console.log("Infinity", typeof Infinity);
console.log("Number.MAX_SAFE", Number.MAX_SAFE_INTEGER);

console.log("Number", Number(23));

let num = new Number("hello")

console.log("num",num.valueOf());

console.log("btoa",btoa("hellojs"));
console.log("atob",atob("aGVsbG9qcw"))

function hanoi(i) 
{
    let flag = 0;
    if(flag < 10) {
        console.log("i", i);
        hanoi(i)
        i = flag;
        flag ++;
    }
}

// console.log("Function",Function)

var Mammal = function (name) {
    this.name = name;
    };
    Mammal.prototype.get_name = function ( ) {
    return this.name;
    };

    // Mammal.set_name("mmt")
    // console.log("Ma", Mammal.get_name());

    // let a = new Mammal("MMT");
    // console.log(a.get_name());


console.log("OR Logic", true || false);