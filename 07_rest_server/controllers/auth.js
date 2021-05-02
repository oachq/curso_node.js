const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generarJWT');

const login = async(req, res = response) => {

    const { correo, password } = req.body;
    try {
        // verificar si el email existe 
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos -> Correo'
            })
        }
        // verificar si el usuario esta activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos -> estado: false '
            })
        }
        // Verificar la password 
        const validarPassword = bcryptjs.compareSync(password, usuario.password)
        if (!validarPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos -> password '
            })
        }

        // Generera el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token,
            msg: 'login ok'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }


}

module.exports = {
    login
}