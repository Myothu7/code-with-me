import  Invoice  from "./classDemo.js";

let invOne = new Invoice("Alice", "alice@gmail.com", true);
let invTwo = new Invoice("Bob", "bob@gmail.com", true);
let invThree = new Invoice("Mickle", "mickle@gmail.com", true);

let invoices: Array<Invoice> = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.push(invThree);

invoices.forEach(res => {
    res.format();
})

