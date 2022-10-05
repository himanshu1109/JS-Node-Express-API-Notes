// importing express
const express = require("express");
// body-parser package
const bodyParser = require("body-parser");

// creating its(express) app
const app = express();
// Using bodyParser to get the data posted
app.use(bodyParser.urlencoded({extended:true}));

// get requests("route", function(requests, response))
app.get("/", function(req, res){
    // send data -- it can be html code
    res.send("<h1>Hello</h1>");
    // __dirname hold the current file location
    // sendFile to send file to the app
    res.sendFile(__dirname+"/index.html");
});

// post request
app.post("/", (req, res)=>{
    console.log(req.body.num1); // to get num1 data of posted data
    res.send("Thanks for posting that!");
});

app.get("/contact", function(req, res){
    res.send("Contact Me at: #mobile");
});

app.get("/about", function(req, res){
    res.send("The Justice of the World -- Himanshu Goyal");
});

app.get("/hobbies", function(req,res){
    res.send("Namaste");
});

// listen method (port, function)
app.listen(4000, function(){
    console.log('Server started at port 4000');
});

