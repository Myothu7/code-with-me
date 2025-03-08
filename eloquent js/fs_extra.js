const fs = require('fs-extra')

fs.remove("./text", (err) => {
    console.error('error',err)
    }
)