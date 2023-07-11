const express = require("express");

const path = require('path')

const app = express();
const requests = require("requests");

const port = process.env.PORT || 8000



app.use(express.static(path.join(__dirname,"./Public")));


const viewPath = path.join(__dirname,"./Public/views")

app.set("view engine","hbs")

app.set("views",viewPath)
console.log();



app.get("/",(req,res)=>{
    res.render("index")
    

    
    requests(`https://api.openweathermap.org/data/2.5/weather?q=Kanpur&appid=205840f6a1a83c01cdd670813d779326`)
    .on('data', (chunk) => {
        console.log("data displayed successfully")
        
    })
    .on('end', (err) => {
        if (err) return console.log('connection closed due to errors', err);
        res.end();
    });





})



app.listen(port,()=>{
    console.log(`listening at ${port}`);    
})