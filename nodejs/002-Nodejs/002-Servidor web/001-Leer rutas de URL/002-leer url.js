var servidor = require('http');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("<h1>Hola mundo desde Nodejs</h1>");
    res.end(req.url);
    console.log("Alguien ha cargado la web");
}).listen(8080)