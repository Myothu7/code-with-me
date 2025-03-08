const fs = require("node:fs");
let output = fs.createWriteStream("numbers.txt");
for(let i = 0; i < 100; i++) {
    // console.log("starting loop");
    output.write(`${i}\n`);
}
output.end();


