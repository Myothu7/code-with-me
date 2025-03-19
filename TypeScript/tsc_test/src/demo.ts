interface User {
    name ?: string;  // ?: not valid
    email: string;
    password : string;
}

interface Address {
    country: string;
    city: string;
    location : string;
}

const test: User & Address = {
    name: "mmt",
    email: "mmt@gmail.com",
    password : "@78jf",
    country: "Myanmar",
    city: "Yangon",
    location : "kyeemyintine",
}
interface Information extends User, Address {
    // info : string;
}
const obj = {
    // name: "mmt",
    email: "mmt@gmail.com",
    password : "@78jf",
    country: "Myanmar",
    city: "Yangon",
    location : "kyeemyintine",

}

const showIF  = (obj : Information) => console.log(obj)

type Name = {
    name : string;
}

type Age = {
    age : number;
}

const user: Name & Age = {
    name: "myo min thu",
    age : 23
}

console.log(user)