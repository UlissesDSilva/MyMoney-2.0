const bodyParser = require('body-parser')
const queryParse = require('express-query-int')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const port = 3003;

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParse())

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}`)
})

module.exports = server
