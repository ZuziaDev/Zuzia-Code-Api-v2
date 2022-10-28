// ------ PACKAGE IMPORTS ------ //
const express = require("express")
const app = express()
const monitor = require("express-status-monitor")
var fs = require('fs');

// ------ ROUTES HANDLER ------ // 
require("./routes")(app)
// ------ HOME PAGE ------ //
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/home.html')
})

app.get('/*', (req, res) => {
  res.send({ rick: "Bilinmeyen bir hata meydana geldi." })
})


        
// ------ API CONFIGS AND SHIT ------ // 
app.listen(0002, () => {
  console.log("Mükemmel API")
})
app.set('html spaces', 1); // clean look 
app.use(monitor()) // logs an stuff