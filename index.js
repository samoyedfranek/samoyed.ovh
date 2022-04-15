const express = require("express");
const path = require("path")

const app = express()
const server = require("http").createServer(app);

const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname + "/strona")));

io.on("connection", function (socket) {
    socket.on("newuser", function (username) {
        socket.broadcast.emit("update", username + " joined the conversation")
    })
    socket.on("exiting", function (username) {
        socket.broadcast.emit("update", username + " exited the conversation")
    })
    socket.on("chat", function (message) {
        socket.broadcast.emit("chat", message)
    })
})

server.listen(5000)