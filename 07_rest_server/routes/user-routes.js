//gestionador de rutas del usuario, y tipo de peticiones. 


//const express = require('express');
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRolValido, emailExiste, existeUsuarioPorId } = require('../helpers/db_validator');

const {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
} = require('../controllers/user-controllers');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    // check('id').custom(existeUsuarioPorId), // TODO hay que checar este pedo marca error en postman rasteado desde db_validators. 
    check('role').custom(esRolValido),
    validarCampos
], usuariosPut);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser de mas de 6 letras').isLength({ min: 6 }),
    check('correo').custom(emailExiste),
    //check('role', 'No es un role valido ').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom(esRolValido),
    validarCampos
], usuariosPost);

router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos
], usuariosDelete);

router.patch('/', usuariosPatch);
module.exports = router;