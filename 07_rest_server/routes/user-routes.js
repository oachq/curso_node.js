const express = require('express');
//const { Router } = require('express');

const {
    usuariosGet,
    usuarisPut,
    usuariosPost,
    usuariosDelete,
    usuarioPatch
} = require('../controllers/user-controllers');

const router = express.Router();

// --------------------- este metodo no me funciono ---------------------//
/*
//metodo get 
router.get('/', usuariosGet);
//metodo put
router.put('/', usuarisPut);
//metodo post 
router.post('/', usuariosPost);
//metodo delete 
router.delete('/', usuariosDelete);
//metodo patch
router.patch('/', usuarioPatch);
*/


//metodo get 
router.get('/', (req, res) => {
        const query = req.query; //en la const query puedes desestructurarla para colocar segun tus variables deseas. 
        res.json({
            conexion: true,
            msg: 'metodo put',
            query,
        });
    })
    //metodo put
router.put('/:id', (req, res) => {

        const { id } = req.params;

        res.json({
            conexion: true,
            msg: 'metodo put',
            id,
        });
    })
    //metodo post 
router.post('/', (req, res) => {
        const { nombre, edad } = req.body; // aqui se colocan los parametros a enviar por los header-raw en formato json

        res.json({
            conexion: true,
            msg: 'metodo post',
            nombre,
            edad
        });
    })
    //metodo delete 
router.delete('/', (req, res) => {
        res.json({
            conexion: true,
            msg: 'metodo delete',
        });
    })
    //metodo patch
router.patch('/', (req, res) => {
    res.json({
        conexion: true,
        msg: 'metodo patch',
    });
})

module.exports = router;