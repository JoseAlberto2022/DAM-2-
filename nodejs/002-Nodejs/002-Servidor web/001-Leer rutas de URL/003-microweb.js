var servidor = require('http');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("<h1>Hola mundo desde Nodejs</h1>");
    switch(req.url){
            case "/":
                res.end("Estas en la pagina principal");
                break;
            case "/sobremi":
                res.end("Estas en la pagina sobre mi");
                break;
            case "/contacto":
                res.end("Estas en la pagina de contacto");
                break;
        default:
            res.end("Pagina no encontrada");
    }
    console.log("Alguien ha cargado la web");
}).listen(8080)