// const EventEmitter = require("node:events"); // Module name does not match class name
// const net = require("net");
// let server = new net.Server();
// // create a Server object
// console.log("server instanceof EventEmitter", server instanceof EventEmitter);


const net = require("node:net");
let server = new net.Server();
// create a Server object
server.on("connection", socket => {
    console.log("socket");
// Listen for "connection" events
// Server "connection" events are passed a socket object
// for the client that just connected. Here we send some data
// to the client and disconnect.
socket.end("Hello World", "utf8");
});