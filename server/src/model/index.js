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
  }
})

const gallerySchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  collectionImages: [{
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now()
    }
  }]
})

module.exports = {
  User: mongoose.model('User', userSchema),
  Gallery: mongoose.model('Gallery', gallerySchema),
}