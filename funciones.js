
function isox(x,y){
    return(x-y);
}
function isoy(x,y){
    return((x+y)/2);
}

function reiniciar(){
    /*Introduzco la lista de los personajes */
    nivel = 1;
    numeropersonajes = 5;
    arraypersonajes = new Array();

    // Propiedades protagonista
    posx = 1000;
    posy = 200;
    estadoanimacion = 0;
    angulo = 0;
    velocidad = 5;
    direccion = 0;
    energia = 100;

    /*Aquí introducimos las coordenadas mínimas y máximas del terreno en el cual se va a moverle el NPC */
    terrenox1 = 600;
    terrenoy1 = -200;
    terrenox2 = 1400;
    terrenoy2 = 600;

    pausa = false;
    
    for(var i = 0;i<numeropersonajes;i++){
    arraypersonajes[i] = new Personaje;
    }
}

function subirnivel(){
    pausa = true;
    
    nivel++;
    
    $("#dimenivel").html(nivel)
    $("#pantallanivel").fadeIn("slow")
    contexto.clearRect(0,0,anchuranavegador,alturanavegador);
    setTimeout(function(){
        $("#pantallanivel").fadeOut("slow")
        pausa = false;
        bucle();
    },5000)
    /*Introduzco la lista de los personajes */
    numeropersonajes += 5;
    arraypersonajes = new Array();

    // Propiedades protagonista
    posx = 1000;
    posy = 200;
    estadoanimacion = 0;
    angulo = 0;
    velocidad = 5;
    direccion = 0;
    energia = 100;

    /*Aquí introducimos las coordenadas mínimas y máximas del terreno en el cual se va a moverle el NPC */
    terrenox1 = 600;
    terrenoy1 = -200;
    terrenox2 = 1400;
    terrenoy2 = 600;

    //pausa = false;
    
    
    for(var i = 0;i<numeropersonajes;i++){
    arraypersonajes[i] = new Personaje;
    }
    
    premiox = Math.random()*(terrenox2-terrenox1)+terrenox1;
    premioy = Math.random()*(terrenoy2-terrenoy1)+terrenoy1;;

}