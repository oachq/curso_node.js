const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/user'; // cte. del path de los usuarioss url 

        //middlewares son funciones que se ejecutan en el servidor cada ves que se necesiten. 
        this.middlewares();

        //rutas de mi app
        this.routes();
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

        this.app.use(this.usuariosPath, require('../routes/user-routes'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo por el puerto: ', this.port);
        });
    }

}

module.exports = Server;