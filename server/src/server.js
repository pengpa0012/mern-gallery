const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const http = require('http')
const server = http.createServer(app)

const cors = require("cors")
const connectDB = require("./config/db")
const accountRoutes = require("./routes/account")
const galleryRoutes = require("./routes/gallery")

connectDB()

// Middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

app.use("/", accountRoutes)
app.use("/", galleryRoutes)

const PORT = 3000

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
