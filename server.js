//implementation serveur
const express = require("express");
const path = require("path");
const socketio = require("socket.io");
const app = express();
const server = app.listen(4001);

app.use(express.static(__dirname, {index: false}));

app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, "index.html"))
});

//mise en place serveur

 const ios = socketio(server, {
    
        serveClient: true
    
    })

