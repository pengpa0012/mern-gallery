const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  collection: {
    type: Schema.Types.ObjectId,
    ref: "Gallery"
  }
})

const gallerySchema = new mongoose.Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  date: {
    type: Date
  }
})

module.exports = {
  User: mongoose.model('User', userSchema),
  Gallery: mongoose.model('Gallery', gallerySchema),
}