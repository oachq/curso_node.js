const getUsuarioByID = (id, callback) => {
    const user = {
        id: 10,
        nombre: 'Oscar'
    }

    setTimeout(() => {
        callback(user)
    }, 1500)
}

getUsuarioByID(10, (usuario) => {
    console.log(usuario);
    // console.log(usuario.id);
    // console.log(usuario.nombre);
});