const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generarJWT');
const { googleVerify } = require('../helpers/google-verify')

///login normal con data personal 
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


//login con google 
const googleSignin = async(req, res = response) => {

    const { id_token } = req.body;

    try {
        const { correo, nombre, img } = await googleVerify(id_token);
        let usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            //tengo que crearlo
            const data = {
                nombre,
                correo,
                password: ':P',
                img,
                google: true
            }
            usuario = new Usuario(data)
            await usuario.save();
        }

        // si el usuario en mongoDB
        if (!usuario.estado) {
            return res.status(401).json({
                msg: 'Hable con el admin, usuario Bloquado'
            })
        }

        // generar el JWT 
        const token = await generarJWT(usuario.id);


        res.json({
            usuario,
            token
        });

    } catch (error) {
        res.status(400).json({
            msg: 'Token de google no es valido'
        })
    }
}

module.exports = {
    login,
    googleSignin
}