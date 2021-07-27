const mongoose = require("mongoose")
const schema = mongoose.Schema

const userSchema = new schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    userType: {
        type: String,
        require: true
    },
    affiliateId: {
        type: String,
        ref: "Affiliate"
    }
})

exports.User = mongoose.model("User", userSchema)