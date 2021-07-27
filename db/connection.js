const mongoose = require("mongoose")

exports.connection = mongoose.connect("mongodb+srv://muqeet_chaudhary:Abdul6890060@cluster0.bqu75.mongodb.net/SignupMERN", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})