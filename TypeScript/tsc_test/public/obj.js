"use strict";
const store = ({ user_name, email, password }) => {
    console.log("user", user_name);
};
const data = {
    user_name: "mmt",
    email: "mmt@gmail.com",
    password: "2379Password",
};
store(data);
let greet, logout;
greet = () => console.log("I am gree");
logout = () => console.log("I am logout");
greet();
logout();
