const fs = require("node:fs");// An asynchronous but nonstreaming (and therefore inefficient) function.
function copyFile(sourceFilename, destinationFilename, callback) {
    fs.readFile(sourceFilename, (err, buffer) => {
        if (err) {
            callback(err);
        } else {
            callback('done');
            fs.writeFile(destinationFilename, buffer, callback);
        }
    });
}

copyFile("./textd", "./textCopy", (callback)=> {
    console.log("I am callback", callback);
}); 