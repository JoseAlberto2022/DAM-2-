var servidor = require('http');
var ruta = require('url');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    var parametros = ruta.parse(req.url,true).query;
    res.write("Tu nombre es:"+parametros.nombre)
    res.end("")
}).listen(8080)