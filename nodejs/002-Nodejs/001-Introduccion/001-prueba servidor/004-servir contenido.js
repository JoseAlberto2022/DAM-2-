var servidor = require('http');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'})
    res.end("Hola muundo desde Nodejs")
}).listen(80)