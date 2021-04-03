const deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'regeneracion',

    getName: function() {
        return `${this.nombre } ${this.apellido} "esto es la 1"`;
    }
}
console.log(deadpool.getName());

//desestructuarando el la consante deadpool. 
function imprimeHerue({ nombre, apellido, poder }) {
    console.log(nombre, apellido, poder, "esto es la 2");
}