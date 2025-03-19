export default class Invoice {
    constructor(name, email, status) {
        this.name = name;
        this.email = email;
        this.status = status;
    }
    format() {
        console.log(`Name is ${this.name}, email is ${this.email}, status is ${this.status}`);
    }
}
