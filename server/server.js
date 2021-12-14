const express = require('express');

//express is a function
// that returns an 'app' object
const app = express();


app.get('/space-jams', () => {
    console.log('\'bout to get some space jams');
});



console.log('in server.js');

// listen on port 5000
const port = 5000;
app.listen(port, () => {
    console.log('I\'m listening');
});