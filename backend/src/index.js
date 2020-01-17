const express = require ('express') 
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
const routes = require('./routes')


const app = express()
const { setupWebSocket } = require('./websocket')
const server = http.Server(app)

setupWebSocket(server)

mongoose.connect('mongodb+srv://rilton:rilton@cluster0-rpmyl.mongodb.net/week10?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
app.use(cors())
app.use(express.json())
app.use(routes)


server.listen(3333)