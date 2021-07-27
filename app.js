const express = require("express")
const bodyParser = require("body-parser")
const { connection } = require("./db/connection")
const user = require("./routes/user")
const affiliate = require("./routes/affiliate")
const cors = require("cors")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get("/", async (req, res) => {
    res.json({ message: "Signup MERN Rest Api" })
})

app.use("/user", user)
app.use("/affiliate", affiliate)

module.exports = { app }