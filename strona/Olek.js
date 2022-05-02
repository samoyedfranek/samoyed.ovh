const express = require("express"),
    http = require('http');
const path = require('path');
const cors = require('cors')
const app = express()
const server = http.createServer(app);

app.use(express.static(path.join(__dirname + "/strona")))
app.use(cors());

server.listen(process.env.PORT || 3000, () => console.log("Server działa..."))