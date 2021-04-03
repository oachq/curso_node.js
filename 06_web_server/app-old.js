const http = require('http');

http.createServer((req, res) => {
        //res.writeHead(200, {'Content-Type': 'application/json'})
        //res.setHeader('comtemt-Disposition', 'attachment; filena,e=lista.csv');
        //res.writeHead(200, {'Content-Type': 'application/csv'});


        res.write('Bienvendio a mi first server con node.js');
        res.end();
    })
    .listen(80)

console.log('trasmitiendo por el puerto', 8);