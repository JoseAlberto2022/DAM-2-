var servidor = require('http');
var ruta = require('url');
var formularios = require('formidable');
//npm install formidable
servidor.createServer(function(req,res){
    
        res.writeHead(200,{'Content-type':'text/html'});
        
        switch(req.url){
            case "/":
                res.write(`
                    <form action="/procesa" method="POST">
                        <input type="text" name="nombre">
                        <input type="submit">
                    </form>
                `)
                break;
            case "/procesa":
                console.log("Voy a procesar el formulario")
                var formulario = new formularios.IncomingForm();
                break;
        }
        res.end("")
}).listen(8080)