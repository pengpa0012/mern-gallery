const express = require("express")
const { Product } = require("../model")
const { verifyJWT } = require("../utils")
const router = express.Router()

router.post("/createProduct", verifyJWT, async (req, res) => {
  const { name, username, expiration_date, description, image, type, price } = req.body

  const newProduct = new Product({
    name,
    username,
    expiration_date,
    description,
    image,
    type,
    price,
    active: true,
    date: Date.now()
  })

  const result = await newProduct.save()

  if(result) {
    res.status(200).send({ message: "Added Product Successfully", result })
  } else {
    res.status(500).send({ message: "Added Product Failed" })
  }
})

router.post("/updateProduct", verifyJWT, async (req, res) => {
  const { _id, values } = req.body

  const result = await Product.findOneAndUpdate({_id}, {...values})

  if(result) {
    res.status(200).send({ message: "Update Product Successfully" })
  } else {
    res.status(500).send({ message: "Update Product Failed" })
  }
})

router.post("/deleteProduct", verifyJWT, async (req, res) => {
  const { _id } = req.body
  
  const result =  await Product.deleteOne({_id})

  if(result) {
    res.status(200).send({ message: "Remove Product Successfully", result })
  } else {
    res.status(500).send({ message: "Remove Product Failed" })
  }
})


router.get("/getAllProducts", verifyJWT, async (req, res) => {
  const { username } = req.query
  const result = await Product.find({username})

  if(result) {
    res.status(200).send({ result })
  } else {
    res.status(500).send({ message: "Error" })
  }
})

module.exports = router