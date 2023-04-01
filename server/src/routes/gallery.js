const express = require("express")
const { Gallery } = require("../model")
const { verifyJWT } = require("../utils")
const router = express.Router()

router.post("/createGallery", verifyJWT, async (req, res) => {
  const { name, image } = req.body

  const newGallery = new Gallery({
    name,
    image,
    date: Date.now()
  })

  const result = await newGallery.save()

  if(result) {
    res.status(200).send({ message: "Added Gallery Successfully", result })
  } else {
    res.status(500).send({ message: "Added Gallery Failed" })
  }
})

module.exports = router