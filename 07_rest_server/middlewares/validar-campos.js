//valicacion de campos correctos en el formulario.

const { validationResult } = require('express-validator')
    // codigo para validar campos 
const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
}

module.exports = {
    validarCampos,
}