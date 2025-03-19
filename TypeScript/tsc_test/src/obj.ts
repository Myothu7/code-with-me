interface Users {
    user_name?: string;
    email: string;
    password: string  
}

const store = ({user_name, email, password} : Users) => {
    console.log("user", user_name);
};

const data: Users= {
    user_name: "mmt",
    email: "mmt@gmail.com",
    password: "2379Password",
}
store(data)


let greet, logout: Function;

greet = (): void => console.log("I am gree")

logout = (): void => console.log("I am logout")

greet(); logout();

