const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/", (req,res)=>{
    // https requests
    const query = req.body.cityName;
    const apiKey = "dd6452a734eda34a23bcbbfc182d6c2d";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&APPID="+apiKey+"&units="+unit;
    https.get(url, (response)=>{
        
        // data
        response.on("data", (data)=>{
            const weatherData = JSON.parse(data);  
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<p>The weather is currently "+desc+"</p>");
            res.write("<h1>The Temperature in "+query+" is "+temp+" degrees celsius</h1>");
            res.write("<img src="+imageUrl+">");
            res.send();
        });
    });
});

app.listen(4000, ()=>{
    console.log("Weather is running");
});