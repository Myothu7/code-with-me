const fs = require("node:fs");

function readConfigFile(path) {
    fs.readFile(path, "utf8", (err, data) => {
    if (err) {
        console.error(err);
        // callback(null);
        return;
    }
    let jsonData = null;
    try {
        console.log("data", data);
        jsonData = JSON.parse(data);
        console.log("json",typeof jsonData);
        // callback(text);
    } catch(e) { 
        console.error('Error case ==>',e);
    }
        
    });
}

readConfigFile('./text.json');