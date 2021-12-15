// SETUP
// terminal command: npm init --yes
// terminal command: npm install express --save
// add .gitignore file
// in .gitignore file "node_modules/"
// in .json file under "test" write "start": "node server/server.js"
// terminal command: npm start
// create variable to call expess and then a variable to run express
// terminal command: npm install nodemon (will have to do for each prodject)
//comand , auto import turn off

const express = require('express');

//express is a function
// that returns an 'app' object
const app = express();


// has it look at every file and if it has a request for html
// it will send back server/public folder

// shortcut to setup endpoints for
// GET /index.html
// GET /anotherOne.html
// ... and any other files inside of /server/public
app.use(express.static('server/public'));

// handle requests for GET /space-jams
// http://localhost:5000/space-jams
// setup a GET / space-jams endpoint
// endpoint === method + url
app.get('/space-jams', (req, res) => {
    console.log('\'bout to get some space jams');

    // send back a response
    res.send('<h1>Ready to Space Jam?</h1><button>Jam Times</button>');
});

// GET / comments endpoints
// localhost:5000/comments
app.get('/comments', (req, res) => {
    console.log('in GET /comments');
    res.send([
        // this is an array of objects!!!
        {
            author: 'Dez',
            message: 'New Space Jams sux, 1996 ftw'
        }
    ])
})


console.log('in server.js');

// listen on port 5000
const port = 5000;
app.listen(port, () => {
    console.log('I\'m listening');
});