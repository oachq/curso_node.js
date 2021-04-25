//user contronlers es el controlador del tipo de peticion a realizar al servidor. 

const { request, response } = require('express');
const bcrptjs = require('bcryptjs');



const Usuario = require('../models/usuario'); //se importa el usuario.js de models 

const usuariosGet = async(req = request, res = response) => {

        const { limit = 10, desde = 0 } = req.query;
        const query = { estado: true };

        const [total, usuarios] = await Promise.all([
            Usuario.countDocuments(query),
            Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limit))
        ])
        res.json({
            total,
            usuarios
        });
    }
    // motodo post 
const usuariosPost = async(req = request, res = response) => {

    const { nombre, correo, password, role } = req.body;
    const usuario = new Usuario({ nombre, correo, password, role });

    //encriptar password! 
    const salt = bcrptjs.genSaltSync();
    usuario.password = bcrptjs.hashSync(password, salt);

    //guardar en db
    await usuario.save();


    res.json({
        // msg: 'post API - usuariosPost',
        nombre,
        correo,
        password,
        role
    });
}

const usuariosPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    // todo validar contra la base de datos
    if (password) {
        //encriptar password! 
        const salt = bcrptjs.genSaltSync();
        resto.password = bcrptjs.hashSync(password, salt);

    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json(usuario);
}

const usuariosPatch = (req, res = response) => {

}

const usuariosDelete = async(req, res = response) => {

    const { id } = req.params;
    //fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete(id);

    const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });
    res.json({
        usuario
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}