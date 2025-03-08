const fs = require("node:fs");

function readConfigFile(path, callback) {
    console.time("time");
    fs.readFile(path, "utf8", (err, text) => {
    if (err) {
        console.error(err);
        callback(null);
        return;
    }
    let data = null;
    try {
        // console.log("data", text);
        // console.log(data)
        // data = JSON.parse(text);
    } catch(e) { 
        console.error('Error case ==>',e);
    }
        callback(text);
    });
    console.timeLog("time");
}

readConfigFile('./text', (data)=> {
    console.log("I am callback data",typeof data);
});

console.log("I am read after write line");

setTimeout(()=>{
    console.log("I am setTimeout");
},1);