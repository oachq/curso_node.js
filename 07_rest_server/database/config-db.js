//conecxion a base de datos con mongodb

const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log('Data Base connecting');

    } catch (error) {
        console.log(error)
        throw new Error('Error al iniciar la data base');
    }
}

module.exports = {
    dbConnection,
}