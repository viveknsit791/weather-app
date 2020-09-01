const express = require("express");
const path = require("path");

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');



app.set('view engine', 'hbs');

app.use(express.static(publicDirectoryPath));

app.get('/weather',( req, res ) => { 
    res.send({
        forecast : "60% chance of Rain today.",
        location : "New Delhi"
    });
});

app.listen(3000, () => {
    console.log("Hello server is up and running");
})