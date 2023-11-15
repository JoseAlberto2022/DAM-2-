var id;                                     //Originalmente le asigno un identificador a este objeto 
var otros;                         //Le asigno una variable que recibirá la colección de datos que le corresponde a los otros objetos      
var comida;                                 // Le asigno una variable que corresponderá a la colección de datos que corresponde a la comida 
onmessage = function(datos){                // Esta función se ejecuta cuando recibe un mensaje 
    id = datos.data.id;                     // Mi identificador es el que le pasa la función principal 
    otros = datos.data.otros;               //Recojo Datos de los otros objetos y los pongo en la variable 
    comida = datos.data.comida;             //Recojo los datos de la comida y los pongo en la variable
    //console.log(otros)
}

var temporizador;                           //Como en un momento dado voy a tener un bucle arranco una variable temporizador 
inicio();                                   //Llamo a la función inicio que se ejecuta una vez 
var posx = Math.random()*512                //Cuando el personaje nace le aplicó una posición X aleatoria 
var posy = Math.random()*512                //Cuando el personaje nace le aplicó una posición Y aleatoria 
var cr = Math.round(Math.random()*256);     //Le pongo un color rojo aleatorio 
var cg = Math.round(Math.random()*256);     //Le pongo un color verde aleatorio 
var cb = Math.round(Math.random()*256);     //Le pongo un color azul aleatorio 
var tam = 2;                                //Le pongo un tamaño inicial de 2 que luego ya cambiaremos 
var direccion = Math.random()*Math.PI*2     //Le doy una dirección inicial aleatoria Entre 0 y 360 
var velocidad = Math.random()/2             // Le doy una velocidad inicial aleatoria 
var energia = Math.random()*50+50;          //Le doy una energía inicial aleatoria 
var hambre = 100-Math.random()*50+50;       //Le doy una cantidad inicial de hambre aleatoria 
var muerto = false;                         //Cuando el personaje arranca por defecto no está muerto 
var dormido = false;                        //Cuando el personaje arranca por defecto no está dormido 
var hambriento = false;                     //Cuando el personaje arranca por defecto no tiene hambre 
function inicio(){                          //ejecuto la funcion de inicio
    temporizador = setTimeout("bucle()",1000)//La funcion de inicio de momento lo unico que hace es llamar al bucle
}

function colisionabordes(){                  //Esta función busca los bordes y conecta colisiones 
    if(posx < 0 || posx > 512 || posy < 0 || posy > 512){//Si es cierto que el personaje está fuera de los rangos de la imagen 
        direccion += Math.PI;                //en este caso pega la vuelta 
    }
}
 
function mueve(){                            //Esta función se encarga de gestionar el movimiento del personaje
    posx += Math.cos(direccion)*velocidad    //Actualizamos la posición X en base al coseno trigonométrico de la dirección por la velocidad 
    posy += Math.sin(direccion)*velocidad    //Actualizamos la posición y en base al seno de trigonométrico 
    energia-=0.1;                            //Cuando el personaje se está moviendo inevitablemente pierde un poco de energía 
    hambre += 0.1;                           //cuando el personaje se está moviendo gana un poco de hambre 
}
function cambiadireccion(){                  //Esta función control que el personaje vaya cambiando poco a poco de dirección 
    direccion += (Math.random()-0.5)/4       // Le añadimos una pequeña componente aleatoria al ángulo dirección del personaje 
    //posx += Math.cos(direccion)+velocidad*3
    //posy += Math.sin(direccion)+velocidad*3
}

function buscocomida(){                      //Esta función se encarga de la búsqueda de comida 
    if(hambriento == true){                  //solo se ejecuta en el caso de que el personaje esté hambriento 
        for(var i = 0;i<comida.length;i++){  //miramos dónde están todos los comederos 
            var a = posx - comida[i].x;      //Para cada 1 de los comederos sacamos la distancia en horizontal 
            var b = posy - comida[i].y;      //Sacamos a continuación la distancia vertical 
            var distancia = Math.sqrt( a*a + b*b );//Mediante esta fórmula calculamos el módulo de la distancia 
         if(distancia < 60){                 //en el caso que la distancia sea menor que 60 
             var angleRadians = Math.atan2(comida[i].y - posy, comida[i].x - posx);//me dirijo hacia ese comedero  
             direccion = angleRadians        // Actualizo mi ángulo 
            if(distancia < 50){              //y en el caso de que dé distancia sea poco 
                hambre -= 0.5                //Rebajo mi cantidad de hambre lo que quiere decir es que estoy comiendo 
            }
         }
        }
    }
}


function evitarse(){                         //Esta función gestiona que los personajes se eviten entre sí 
    for(var i = 0;i<otros.length;i++){       //mira dónde están todos y cada 1 del resto de personajes 
        var a = posx - otros[i].x;           //Sacamos la distancia horizontal 
        var b = posy - otros[i].y;           //sacamos la distancia en vertical 
        var distancia = Math.sqrt( a*a + b*b ); //para cada 1 de los personajes miro mi distancia con respecto a ellos 
        if(distancia < 5 && otros.id != id && distancia > 3 && hambriento == false){  //y en el caso de que el personaje esté cerca 
            var angleRadians = Math.atan2(posy - comida[i].y, posx - comida[i].x);    //busco el ángulo de escape 
            direccion = angleRadians+Math.PI/2  //y lo aplico a mi ángulo 
            posx += Math.cos(direccion)*velocidad //actualixzo mi posición X con respecto a ese nuevo ángulo 
            posy += Math.sin(direccion)*velocidad //Actualizo mi posición Y con respecto a ese nuevo ángulo
            tam = 5;                              // Y temporalmente cambio mi tamaño para que sepa que he colisionado
        }
    }
}

function duerme(){                            //Esto es lo que ocurre cuando el personaje duerme 
    energia+=0.3;                             //su energía se recupera 
    hambre += 0.1;                            //pero cuidado porque su hombre también sube 
}
function muerte(){                            //eso es lo que ocurre cuando el personaje muere 
    if(hambre > 100){                         //
        muerto = true;                        //por defecto la variable muerte se ponen verdadero 
        cr = 0;                               //su color se vuelve negro 
        cg = 0;                               
        cb = 0;                               
    }
}

function bucle(){                             //Esta es la función de bucle que se ejecuta constantemente 
    if(hambre < 0){hambre = 0}                //no es posible tener hambre negativa 
    if(energia > 100){energia = 100}          //No es posible tener más de 100 puntos de energía 
    if(muerto == false){                      //Si el personaje está vivo 
    tam = energia/10;                         //su tamaño está en función de su energía 
    colisionabordes();                        //Activamos la función de colisión a bordes 
    cambiadireccion();                        //activamos la función de cambio de dirección 
    buscocomida();                            //activamos la función de búsqueda de comida 
    if(energia < 20){dormido = true;}         //si el personaje tiene poco energía se queda dormido 
    if(dormido == true){duerme();}            // si el personaje está dormido se ejecuta la función de dormir 
    if(energia > 80){dormido = false;}        //si la energía del personaje está por encima de 80 deja de dormir 
    if(dormido == false){mueve();}            //si el personaje ya no está dormido se puede mover 
    if(hambre > 80){hambriento = true;}       //Si el hambre está por encima de 80 quiere decir que está hambriento 
    if(hambre < 20){hambriento = false;}      //Si el hambre está por debajo de 20 deja de estar hambriento 
    evitarse();                               //activamos la función evitarse 
    }
    postMessage({id:id,x:posx,y:posy,mir:cr,mig:cg,mib:cb,tam:tam}) //pasamos a la función principal los datos del personaje 
    clearTimeout(temporizador)                //limpiamos el temporizador anterior 
    temporizador = setTimeout("bucle()",33)   //
}