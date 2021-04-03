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
        nombre: 'Carlos'
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

const getInfoUser = async(id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${empleado} es de: ${salario}`;
    } catch (err) {
        throw err;
    }
}

getInfoUser(id)
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.log(err)
    })