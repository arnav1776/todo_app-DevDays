var express = require("express");
 var app = express();
 app.set('view engine','ejs');
 app.get("/",function(req,res)
 {
    // res.send("<h1>Hey guys</h1>");
    res.render("list");
 })




 app.listen(3000, function()
 {
     console.log("Listening to port 3000");
 })