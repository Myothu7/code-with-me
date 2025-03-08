const fs = require("node:fs");
const net = require("node:net");

function pipeFileToSocket(filename, socket) {
    fs.createReadStream(filename).pipe(socket);
}
function pipe(readable, writable, callback) {
    // First, set up error handling
    function handleError(err) {
        readable.close();
        writable.close();
        callback(err);
    }
    // Next define the pipe and handle the normal termination case
    readable
        .on("error", handleError)
        .pipe(writable)
        .on("error", handleError)
        .on("finish", callback);
}
// pipeFileToSocket('text',server);

// const fs = require("node:fs");

// Create a server to demonstrate writable stream
const server = net.createServer((socket) => {
    console.log("Client connected");

    // Create a readable stream from a file
    const readable = fs.createReadStream("./text.txt");

    // Use the pipe function
    pipe(readable, socket, (err) => {
        if (err) {
            console.error("Error during piping:", err);
        } else {
            console.log("Piping completed successfully");
        }
        socket.end(); // Close the connection
    });
});

// Start the server
server.listen(8080, () => {
    console.log("Server listening on port 8080");

    // Simulate a client connection for demonstration
    const client = net.connect(8080, () => {
        console.log("Connected to server");

        client.on("data", (data) => {
            console.log("Received from server:", data.toString());
        });

        client.on("end", () => {
            console.log("Connection closed by server");
        });
    });
});
