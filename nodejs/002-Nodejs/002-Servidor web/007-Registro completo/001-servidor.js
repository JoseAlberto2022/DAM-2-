var servidor = require('http');
var archivos = require('fs');
var ruta = require('url');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    var rutacompleta = ruta.parse(req.url,true)
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
        var fecha = new Date();
        archivos.appendFile("registro.txt",fecha.getFullYear()+","+fecha.getMonth()+","+fecha.getDate()+","+fecha.getHours()+","+fecha.getMinutes()+","+fecha.getSeconds()+","+rutacompleta.host+","+rutacompleta.pathname+","+rutacompleta.search+","+req.url+"\n",function(err){
        if(err) throw err;
        })
    }
    
}).listen(8080)