const mongoose = require("mongoose")
const schema = mongoose.Schema

const affiliateSchema = new schema({
    name: {
        type: String,
        require: true
    }
})

exports.Affiliate = mongoose.model("Affiliate", affiliateSchema)