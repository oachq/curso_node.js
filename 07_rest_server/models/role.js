// validacion de rol al momento de agregar al formulario. 

const { Schema, model } = require('mongoose');

const RoleSchema = Schema({
    role: {
        type: String,
        required: [true, "El role es obligatorio"]
    }
})

module.exports = model('Role', RoleSchema);