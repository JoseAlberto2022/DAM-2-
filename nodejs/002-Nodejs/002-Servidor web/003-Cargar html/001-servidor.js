var servidor = require('http');
var archivos = require('fs');

servidor.createServer(function(req,res){
    archivos.readFile('inicio.html',function(err,data){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data)
        res.end("")
    })
    
}).listen(8080)