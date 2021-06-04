//Validar correo y rol con la base de datos en mongodb

const Role = require('../models/role');
const { Usuario, Categoria, Producto } = require('../models');

const esRolValido = async(role = '') => {
    const existeRol = await Role.findOne({ role })
    if (!existeRol) {
        throw new Error(`El rol ${ role } no esta registrado en la BD`);
    }
}


//verificar si el corre existe! 
const emailExiste = async(correo = '') => {
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo con id: ${correo}, ya esta registrado`);
    }
}
const existeUsuarioPorId = async(id) => { // tomando id de mongodb verificacion 
        const existeUsuario = await Usuario.findById(id);
        if (!existeUsuario) {
            throw new Error(`El id : ${id} no existe o lo escribio mal`);
        } else {
            throw new Error(`El id ${id} no es válido`);

        }
    }
    //verificacion de categoria si existe. 
const existeCategoriaPorId = async(id) => {
    //verificar si existe categoria 
    const existeCategoria = await Categoria.findById(id);
    if (!existeCategoria) {
        throw new Error(`El id : ${id} no existe o lo escribio mal`);
    }
}

//verificacion de producto si existe. 
const existeProductoPorId = async(id) => {
    //verificar si existe categoria 
    const existeProducto = await Producto.findById(id);
    if (!existeProducto) {
        throw new Error(`El id : ${id} no existe o lo escribio mal`);
    }
}


module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId
}