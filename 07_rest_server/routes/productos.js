const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, validarCampos, esAdminRole } = require('../middlewares');
const {
    crearProducto,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto,
    borrarProducto
} = require('../controllers/productos');

const { existeCategoriaPorId, existeProductoPorId } = require('../helpers/db_validator');

const router = Router();


/*
    localhost:3000/api/categorias
*/

//servicio para obtener todas las categorias -publico
router.get('/', obtenerProductos);


//servicio para obtener categorias por id -publico
router.get('/:id', [
    check('id', 'No es un id de Mongo valido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos,
], obtenerProducto);

//servicio para crea categorias --privado  -cualquier persona con token valido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('categoria', 'No es un id de Mongo valido').isMongoId(),
    check('categoria').custom(existeCategoriaPorId),
    validarCampos
], crearProducto);

//servicio para actualiza categorias --privado  -cualquier token valido
router.put('/:id', [
    validarJWT,
    // check('categoria', 'No es un id de Mongo valido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], actualizarProducto);

//servicio para borrar categorias --privado  -Admin
router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo valido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], borrarProducto);
module.exports = router;