const yup = require("yup")

exports.addAffiliateSchema = yup.object({
    name: yup.string().required()
})

exports.getAffiliateSchema = yup.object({
    affliateId: yup.string().required()
})