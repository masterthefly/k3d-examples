// app.js
const express = require('express')

// Create Express app
const app = express()

var randomString = function (len, bits)
{
    bits = bits || 36;
    var outStr = "", newStr;
    while (outStr.length < len)
    {
        newStr = Math.random().toString(bits).slice(2);
        outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
    }
    return outStr.toUpperCase();
};

const startHash = randomString(36,32)


// A sample route
app.get('/', (req, res) => res.send(`Responding with ${randomString(36,32)}`))

// Start the Express server
app.listen(3000, () => console.log(`Server started with ${startHash}`))