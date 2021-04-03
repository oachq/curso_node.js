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
        nombre: 1500
    },
];
// funcion para empleados 
const getEmpleado = (id, callback) => {
        const empleado = empleados.find((e => e.id === id))
        if (empleado) {
            //return empleado;
            callback(null, empleado.nombre);
        } else {
            //return `empleado con id ${id} no existe`;
            callback(`empleado con id ${id} no existe`)
        }
    }
    //console.log(getEmpleado(5));

// funcion para salarios 
const getSalario = (id, callback) => {
    const salario = salarios.find((s => s.id === id))
    if (salario) {
        callback(null, salario.salario);
    } else {
        callback(`salario con ${id} no existe`);
    }

}

// constante para determinar el id 
const id = 1;

/// funcion para los empleados 
getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log("ERROR!!!!");
        return console.log(err);
    }
    // funcion para salarios
    getSalario(id, (err, salario) => {
        if (err) {
            console.log("ERROR!!!");
            return console.log(err);
        }
        console.log("el empleado: ", empleado, "tiene un salario de: ", salario);
    })
})