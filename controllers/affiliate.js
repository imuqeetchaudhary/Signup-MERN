const { Affiliate } = require("../db/models/affiliate")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.addAffiliate = promise(async (req, res) => {
    const body = req.body

    if (req.user.userType == "admin") {
        const newAffiliate = new Affiliate({
            ...body
        })
        await newAffiliate.save()
        res.status(200).json({ message: "Successfully added new affliate" })
    }
    else {
        throw new Exceptions.BadRequset("Unauthorized! Only admin can add affiliate")
    }
})

exports.getAffiliate = promise(async (req, res) => {
    const body = req.body

    const affliate = await Affiliate.findOne({ _id: body.affliateId })
    if (!affliate) throw new Exceptions.NotFound("No affliate found")

    res.status(200).json({ affliate })
})

exports.getAllAffiliate = promise(async (req, res) => {
    const affliate = await Affiliate.find()
    if (!affliate) throw new Exceptions.NotFound("No affliate found")

    res.status(200).json({ affliate })
})