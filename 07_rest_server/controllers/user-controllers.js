/*
    archivo que se usa para controlar las respuestas de las peticiones get, put, post etc..
    este se debe comunicar con user-router.js pero no se usara debido a que no se puede exportar a
    user-routes.js

    //TODO: Nota queda pendiente de revision para que quede todo arreglado.
*/
const express = require('express');
const { reques, response } = require('express');


const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'api get - controlador ',
    })
}

const usuarisPut = (req, res = response) => {
    res.json({
        conexion: true,
        msg: 'metodo put - controlador',
    });
}

const usuariosPost = (req, res = response) => {
    res.json({
        conexion: true,
        msg: 'metodo post - controlador',
    });
}

const usuariosDelete = (req, resp = response) => {
    res.json({
        conexion: true,
        msg: 'metodo delete - controlador',
    });
}

const usuarioPatch = (req, resp = response) => {
    res.json({
        conexion: true,
        msg: 'metodo patch - controlador',
    });
}

module.exports = {
    usuariosGet,
    usuarisPut,
    usuariosPost,
    usuariosDelete,
    usuarioPatch,
}