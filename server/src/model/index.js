const mongoose = require("mongoose")

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

const productSchema = new mongoose.Schema({
  name: {
    type: String
  },
  username: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  type: {
    type: String
  },
  expiration_date: {
    type: String
  },
  price: {
    type: String
  },
  active: {
    type: Boolean
  },
  date: {
    type: Date
  }
})

module.exports = {
  Users: mongoose.model('user', userSchema),
  Product: mongoose.model('product', productSchema),
}