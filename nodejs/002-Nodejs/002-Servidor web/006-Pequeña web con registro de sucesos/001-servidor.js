var servidor = require('http');
var archivos = require('fs');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});

     switch(req.url){
            case "/":
                archivos.readFile('inicio.html',function(err,data){
                    res.write(data)
                    res.end("")
                });
                break;
            case "/sobremi":
                archivos.readFile('sobremi.html',function(err,data){
                    res.write(data)
                    res.end("")
                });
                break;
            case "/contacto":
                archivos.readFile('contacto.html',function(err,data){
                    res.write(data)
                    res.end("")
                });
                break;
        default:
            res.end("Pagina no encontrada");
    }
    if(req.url != "/favicon.ico"){
        archivos.appendFile("registro.txt",req.url+"\n",function(err){
        if(err) throw err;
        })
    }
    
}).listen(8080)