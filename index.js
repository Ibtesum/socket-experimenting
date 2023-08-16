const express = require('express')
const app = express()
const http = require('http')
const { dirname } = require('path')
const server = http.createServer(app)


const {Server} = require('socket.io')

const io = new Server(server)

io.on("connection", function(socket){
    console.log("New User Connected")

    socket.send()

    // socket.on("disconnect", function(){
    //     console.log("User Disconnected")
    // })
})

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
})



server.listen(3000, function(){
    console.log("server is running on port 3000")
})