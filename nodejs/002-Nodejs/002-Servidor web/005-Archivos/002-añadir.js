var archivos = require('fs');
archivos.appendFile("nuevo.txt",'Este es mi contenido\n',function(err){
    if(err) throw err;
    console.log("Mision cumplida")
})