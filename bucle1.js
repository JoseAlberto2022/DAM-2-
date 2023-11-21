
/* Aqui cargamos todo lo que se va a ir repitiendo una y otra vez durante el juego */
function bucle(){
    /* Al principio de cada bucle, borramos el lienzo anterior */
    contexto.clearRect(0,0,anchuranavegador,alturanavegador);

    /* iteramos en todos los elementos del array uno a uno y realizamos las operaciones */
        for(var i = 0;i<numeropersonajes;i++){
            
                var a = posx - arraypersonajes[i].x;
                var b = posy - arraypersonajes[i].y;
                var distancia = Math.sqrt( a*a + b*b );
            /*muevo al personaje */
            if(distancia < 400){
                arraypersonajes[i].persigue();
                //arraypersonajes[i].mueve();
            }else{
                arraypersonajes[i].mueve();
            }
            
            if(distancia < 20){
                energia--;
            }
                  var ytemp;  
            
                  if(arraypersonajes[i].direccionisometrica == 0){ytemp = 0;}
                  if(arraypersonajes[i].direccionisometrica == 1){ytemp = 512;}
                  if(arraypersonajes[i].direccionisometrica == 2){ytemp = 1024;}
                  if(arraypersonajes[i].direccionisometrica == 3){ytemp = 1536;}
             /*Dibujo al personaje */
             contexto.drawImage(  
                 imagennpc1,
                 arraypersonajes[i].estadoanim*256,
                 ytemp+256,
                 256,
                 256,
                 isox(arraypersonajes[i].x,arraypersonajes[i].y),
                 isoy(arraypersonajes[i].x,arraypersonajes[i].y),
                 128,
                 128
             );
            /*Dibujo la barra de energia */
            contexto.fillStyle = "black";
            contexto.fillRect(
                 isox(arraypersonajes[i].x,arraypersonajes[i].y)+32,
                 isoy(arraypersonajes[i].x,arraypersonajes[i].y),
                 64,10
            )
            contexto.fillStyle = "green"
            contexto.fillRect(
                 isox(arraypersonajes[i].x,arraypersonajes[i].y)+32+2,
                 isoy(arraypersonajes[i].x,arraypersonajes[i].y+2),
                 60*(arraypersonajes[i].energia/100)
                 ,6
            )
        }
    //////////////////////////////////////////////* Vamos con el personaje protagonista *//////////////////////////////////////////////////
    estadoanimacion++;
    if(estadoanimacion > 7){estadoanimacion = 0;}
     contexto.drawImage(  
                 imagenpersonaje,
                 estadoanimacion*256,
                 angulo+256,
                 256,
                 256,
                 isox(posx,posy),
                 isoy(posx,posy),
                 128,
                 128
             );
    
    /*Dibujo la barra de energia */
        contexto.fillStyle = "black";
        contexto.fillRect(
             isox(posx,posy)+32,
             isoy(posx,posy),
             64,10
        )
        contexto.fillStyle = "green"
            contexto.fillRect(
                 isox(posx,posy)+32+2,
                 isoy(posx,posy+2),
                 60*(energia/100)
                 ,6
        )
    
    if(direccion == 1){posy-= velocidad;angulo=512;}
    if(direccion == 2){posy+= velocidad;angulo=1536;}
    if(direccion == 3){posx-= velocidad;angulo=0;}
    if(direccion == 4){posx+= velocidad;angulo=1024;}
    
    contexto.drawImage(imagenpremio,isox(premiox,premioy),isoy(premiox,premioy));
     var a = posx - premiox;
     var b = posy - premioy;
     var distancia = Math.sqrt( a*a + b*b );
    if(distancia < 50 ){
        console.log("premio")
        subirnivel();
    }
    
    if(energia < 0){
        
        $("#pantallainicial").fadeIn("slow")
        reiniciar();
        contexto.clearRect(0,0,anchuranavegador,alturanavegador);
        pausa = true;
    }

    clearTimeout(temporizador); /* Esta linea elimina el temporizador actual */
    if(pausa == false)
    temporizador = setTimeout("bucle()",33); /* Creamos un nuevo temporizador para volver a ejecutar el bucle */
}