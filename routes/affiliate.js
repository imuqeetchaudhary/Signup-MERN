const express = require("express")
const router = express.Router()
const affiliate = require("../controllers/affiliate")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { addAffiliateSchema, getAffiliateSchema } = require("../validation/affiliate")

router
    .post("/add", authentication, validation(addAffiliateSchema), affiliate.addAffiliate)
    .post("/get", authentication, validation(getAffiliateSchema), affiliate.getAffiliate)
    .get("/get-all", authentication, affiliate.getAllAffiliate)

module.exports = router