const empleados = [{
        id: 1,
        nombre: 'Oscar'
    },
    {
        id: 2,
        nombre: 'Alan'
    },
    {
        id: 3,
        nombre: 'Abimva'
    },
];

const salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
];

// funcion para empleados esta es una forma y retornando la promesa al final de todo esta comentado
const getEmpleado = (id) => {
        const promesa = new Promise((resolve, reject) => {
            const empleado = empleados.find((e => e.id === id))

            if (empleado) {
                resolve(empleado.nombre);
            } else {
                reject(`No existe empleado con id ${id}`);
            }
        });

        return promesa;
    }
    //funcion para gestionar salarios con un metodo diferente usando menos codigo
const getSalario = (id) => {
        return promesa = new Promise((resolve, reject) => {
            const salario = salarios.find((s => s.id === id))

            if (salario) {
                resolve(salario.salario);
            } else {
                reject(`No existe salario con id ${id}`);
            }
        });
    }
    // variable constante 
const id = 2;
/* metodo a pata 
//mandando a llamar la funcion para imprimir el resul de empleados.
getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));


//mandando a llamar la funcion para imprimir el resul de salarios.
getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));



// metodo sintetizado
getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(salario => {
                console.log("el empleado: ", empleado, "tiene un salario de: ", salario);
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err));
    */

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log("El empleado: ", nombre, "tiene un salario de: ", salario))
    .catch(err => console.log(err));