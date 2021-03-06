//creacion del servidor con express y creacion de sus middlewares rutas y conexion a un puerto. 

const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { dbConnection } = require('../database/config-db');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth', //ruta para autenticacion JWT
            buscar: '/api/buscar',
            categorias: '/api/categorias', // consulta categorias 
            productos: '/api/productos', // productos
            uploads: '/api/uploads', // url para uploads
            usuario: '/api/user', // cte. del path de los usuarioss url 

        }


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

        // Note that this option available for versions 1.0.0 and newer. 
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));
    }

    routes() {

        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.buscar, require('../routes/buscar'));
        this.app.use(this.paths.categorias, require('../routes/categorias'));
        this.app.use(this.paths.productos, require('../routes/productos'));
        this.app.use(this.paths.usuario, require('../routes/user-routes'));
        this.app.use(this.paths.uploads, require('../routes/uploads'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo por el puerto: ', this.port);
        });
    }

}

module.exports = Server;