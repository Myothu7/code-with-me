interface Person  {
    Pname: string;
    age: number;
    gender: string;
}


interface Profile extends Person {
    address : string;
}

let personOne: Profile = {
    Pname : "mmt",
    age : 20,
    gender : "male",
    address : "ygn"
}

console.log("hey");
console.log(personOne);