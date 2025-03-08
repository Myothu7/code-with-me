const EventEmitter = require("events");

const auth = new EventEmitter();

const home = () => {
    console.log("This is home page");
}
auth.on("login", home);

auth.emit("login");

// auth.removeListener("login", home)   // remove event
