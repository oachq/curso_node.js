//creador de tablas de multiplicar//
const fs = require('fs');
const colors = require('colors');

//al momento de crear una funcion async atuomaticamente decmos que regresa una promise
const crearArchivo = async(base, listar = false, hasta = 10) => {

    try {
        let salida = "";
        let consola = "";
        for (i = 1; i < hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.red} ${i} ${'='.red} ${base*i}\n`;
        }
        if (listar) {
            console.log("=============".green);
            console.log("Tabla del: ".rainbow, colors.red(base));
            console.log("=============".green);
            console.log(consola);
        }

        fs.writeFileSync(`../salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}