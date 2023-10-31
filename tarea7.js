onmessage = function(datos){
    //console.log(datos)
    
                var destino = 0;
                for(var i = 0;i<datos.data.px.data.length-8;i+=4){                                           //Recorro los pixeles 1 a 1 
                    
                    var borde = false;                                                                 //En principio supongo que no hay un borde en el Píxel que estoy registrando 
                    //Para cada 1 de los píxeles compruebo si hay mucha diferencia de color o no la hay 
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i-(datos.data.mianchurabucket*4)-4]) > datos.data.miumbral){borde = true;} //Pixel de arriba a la izquierda 
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i-(datos.data.mianchurabucket*4)]) > datos.data.miumbral){borde = true;}   //Pixel de arriba 
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i-(datos.data.mianchurabucket*4)+4]) > datos.data.miumbral){borde = true;} //Pixel de arriba a la derecha 
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i-4]) > datos.data.miumbral){borde = true;}          //Pixel de la izquierda 
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i+4]) > datos.data.miumbral){borde = true;}          //Píxel de la derecha 
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i+(datos.data.mianchurabucket*4)-4]) > datos.data.miumbral){borde = true;} //Píxel de abajo A la izquierda 
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i+(datos.data.mianchurabucket*4)]) > datos.data.miumbral){borde = true;}   //Pixel de abajo
                    if(Math.abs(datos.data.px.data[i] - datos.data.px.data[i-(datos.data.mianchurabucket*4)+4]) > datos.data.miumbral){borde = true;} //Píxel de abajo a la derecha 
                    if (borde == true){                                                                //En el caso de que si haya un borde pinto negro 
                        datos.data.pxdst.data[i] = 0;
                        datos.data.pxdst.data[i+1] = 0;
                        datos.data.pxdst.data[i+2] = 0;
                        datos.data.pxdst.data[i+3] = 255;
                    }else{                              //Y en el caso de que no haya un borde en ese caso pinto de Blanco 
                        datos.data.pxdst.data[i] = 255;
                        datos.data.pxdst.data[i+1] = 255;
                        datos.data.pxdst.data[i+2] = 255;
                        datos.data.pxdst.data[i+3] = 255;
                    }   
                }
    json = {mix:datos.data.mix,miy:datos.data.miy,resultado:datos.data.pxdst,miidworker:datos.data.idworker}
      postMessage(json)          
                
}