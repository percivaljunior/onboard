const express = require('express')
const mongo = require('mongoose')
const app = express()

const mongoaddr = 'mongodb://db:27017/message'
mongo.connect(mongoaddr)

const message = mongo.Schema({
	message : { type: String }
})

const Model = mongo.model('message', message)

app.get("/info", function (req, res) {
  Model.find().then(data => res.send(data))
})

app.listen(8080, function() {
  Model.create({ message: 'world' })
})