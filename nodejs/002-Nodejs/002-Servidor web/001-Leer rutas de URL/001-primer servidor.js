var servidor = require('http');

servidor.createServer(function(req,res){
    fecha = new Date()
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("<h1>Hola mundo desde Nodejs</h1>");
    res.end(""+fecha.getFullYear()+"");
    console.log("Alguien ha cargado la web");
}).listen(8080)