//creador de tablas de multiplicar//

//importando archivo del archivo multiplicar.js
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('../config/yargs');

console.clear();

//console.log(process.argv);
console.log(argv)

//console.log('base: yargs', argv.base)


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, "creado"))
    .catch(err => console.log(err));