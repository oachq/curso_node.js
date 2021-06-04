const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, validarCampos, esAdminRole } = require('../middlewares');
const {
    crearCategoria,
    obtenerCategorias,
    obtenerCategoria,
    actualizarCategoria,
    borrarCategoria
} = require('../controllers/categorias');
const { existeCategoriaPorId } = require('../helpers/db_validator');

const router = Router();


/*
    localhost:3000/api/categorias
*/

//servicio para obtener todas las categorias -publico
router.get('/', obtenerCategorias);


//servicio para obtener categorias por id -publico
router.get('/:id', [
    check('id', 'No es un id de Mongo valido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos,
], obtenerCategoria);

//servicio para crea categorias --privado  -cualquier persona con token valido
router.post('/', [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearCategoria);

//servicio para actualiza categorias --privado  -cualquier token valido
router.put('/:id', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
], actualizarCategoria);

//servicio para borrar categorias --privado  -Admin
router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo valido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
], borrarCategoria);
module.exports = router;