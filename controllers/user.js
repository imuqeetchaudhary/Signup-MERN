const { User } = require("../db/models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")
const { sendMail } = require("../middlewares/sendMail")

exports.profile = promise(async (req, res) => {
    const user = await User.findOne({ email: req.user.email })
    res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        affiliate: user.affiliate
    })
})

// exports.register = promise(async (req, res) => {
//     const emailExists = await User.findOne({ email: req.body.email })
//     if (emailExists) throw new Exceptions.EmailExist

//     const hash = bcrypt.hashSync(req.body.password, 10)
//     const newUser = new User({
//         ...req.body,
//         password: hash
//     })

//     const saveUser = await newUser.save()
//     res.status(200).json({
//         message: "Successfully register a new user",
//         user: newUser
//     })
// })

exports.register = promise(async (req, res) => {
    const body = req.body
    if (req.user.userType == "admin") {
        const emailExists = await User.findOne({ email: body.email })
        if (emailExists) throw new Exceptions.EmailExist()

        const newUser = new User({
            ...req.body
        })

        await newUser.save()
        res.status(200).json({ message: "Successfully added new user" })
        const message = `Hey ${body.name}! You're successfully registered with email ${body.email}. Kindly create your password using this link ${"http://localhost:3000/create-password"}`
        sendMail(body.email, message)
    }
    else {
        throw new Exceptions.BadRequset("Unauthorized! Only admin can add new user")
    }
})

exports.createPassword = promise(async (req, res) => {
    const body = req.body

    const user = await User.findOne({ email: body.email })
    if (!user) throw new Exceptions.NotFound("Email not exists")

    const hash = bcrypt.hashSync(req.body.password, 10)

    await User.updateOne({ email: body.email },
        {
            $set: {
                password: hash
            }
        })
    res.status(200).json({ message: "Succesfully added password" })
})

exports.login = promise(async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) throw new Exceptions.CredentialsNotMatched

    const matchedPassword = await bcrypt.compareSync(req.body.password, user.password)
    if (!matchedPassword) throw new Exceptions.CredentialsNotMatched

    const token = await jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        affiliate: user.affiliate
    }, process.env.ACCESS_TOKEN_SECRET)

    res.status(200).json({
        token: token,
        _id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        affiliate: user.affiliate
    })
})