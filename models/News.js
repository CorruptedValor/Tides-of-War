const mongoose = require('mongoose')
const { Schema } = mongoose

const newsSchema = new Schema({
  title: String,
  body: String,
  postDate: Date
})

mongoose.model('players', newsSchema)
