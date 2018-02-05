/*  CREATE AN EXPRESS APP - mcnut   */

//  ==================================
    //  IMPORTS AND DECLARATIONS
//  ==================================

    //  Import express
var express = require("express");
    //  Create an instance of express
var app = express();

//  ==================================
    //  ROUTES
//  ==================================

    //  Set up a test route
app.get("/", function(req, res) {
    res.send("Hello World");
});

//  ==================================
    //  SERVER
//  ==================================

    //  Set server to listen on localhost:3000
app.listen(3000, function() {
    console.log("Server has started");
}); 