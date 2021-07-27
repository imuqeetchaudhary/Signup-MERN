const yup = require("yup")

exports.registerSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    // password: yup
    //     .string()
    //     .required()
    //     .matches(
    //         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
    //         "Password Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    //     ),
    userType: yup.string().required(),
    affiliateId: yup.string().required()
})

exports.createPassword = yup.object({
    email: yup.string().email().required(),
    password: yup
        .string()
        .required()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
            "Password Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
})

exports.loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
})