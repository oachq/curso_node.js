//creacion del servidor con express y creacion de sus middlewares rutas y conexion a un puerto. 

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config-db');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.usuariosPath = '/api/user'; // cte. del path de los usuarioss url 
        this.authPath = '/api/auth'; //ruta para autenticacion JWT

        //conectar  a base de datos 
        this.conectarDB();

        //middlewares son funciones que se ejecutan en el servidor cada ves que se necesiten. 
        this.middlewares();

        //rutas de mi app
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //Directorio público 
        this.app.use(express.static('public'));
    }

    routes() {

        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usuariosPath, require('../routes/user-routes'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo por el puerto: ', this.port);
        });
    }

}

module.exports = Server;