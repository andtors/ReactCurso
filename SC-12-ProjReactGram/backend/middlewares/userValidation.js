const {body} = require("express-validator")

const userCreateValidation = () => {
    return [
        body("name")
        .isString()
        .withMessage("O nome é obrigatorio.")
        .isLength({min: 3})
        .withMessage("O nome precisa ter no minimo 3 caracteres."),
        body("email")
        .isString()
        .withMessage("O email é obrigatorio.")
        .isEmail()
        .withMessage("Insira um e-mail valido."),
        body("password")
        .isString()
        .withMessage("A senha é obrigatoria.")
        .isLength({min: 5})
        .withMessage("A senha precisa ter no minimo 3 caracteres."),
        body("confirmPassword")
        .isString()
        .withMessage("A confirmação de senha é obrigatoria.")
        .custom((value, {req}) => {
            if(value != req.body.password){
                throw new Error("As senhas não são iguais.")
            }
            return true
        })

    ]
}

module.exports = {
    userCreateValidation
}