const express = require("express")
const { Gallery } = require("../model")
const { verifyJWT } = require("../utils")
const router = express.Router()

router.get('/getImages', verifyJWT, async (req, res) => {
  const { _id } = req.query 

  const result = await Gallery.findOne({user:_id}).populate({path: "user", select: "-password"})

  if(result) {
    res.status(200).send({ result })
  } else {
    res.status(200).send({ message: "Error Get Image" })
  }
})

router.post("/addImage", verifyJWT, async (req, res) => {
  const { _id, collectionImages } = req.body 
  try {
    const result = await Gallery.findOneAndUpdate(
      { user: _id },
      { $set: { collectionImages } },
      { upsert: true, new: true, runValidators: true }
    );
    res.status(200).send({ message: "Added Gallery Successfully", result });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to add Gallery" });
  }
})

router.post("/deleteImage", verifyJWT, async (req, res) => {
  const { _id } = req.body
    
  const result = await Gallery.deleteOne({_id})

  if(result) {
    res.status(200).send({ message: result })
  } else {
    res.status(200).send({ message: "Error Delete Image" })
  }
})

module.exports = router