const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const Usuarios = require('../models/usuario');


const validarJWT = async(req = request, res = response, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: "no hay token en la query"
        });
    }
    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        //leer al user que corresponde al uid
        const usuario = await Usuarios.findById(uid);
        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe '
            })
        }

        // verificar si el uid tiene estado true
        if (!usuario.estado) {
            return res.status(401).json({
                msg: 'Token no válido - estado: false '
            })
        }
        req.usuario = usuario;
        next();

    } catch (error) {
        // console.log(error); //se usa para verificar el error en consola en producción 
        res.status(401).jason({
            msg: 'Token no valido'
        })
    }

}



module.exports = {
    validarJWT
}