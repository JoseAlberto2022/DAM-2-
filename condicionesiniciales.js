 /* Capturamos el lienzo y lo introducimos dentro de  una variable contexto */
var contexto = document.getElementById("lienzo").getContext("2d");

/* Aqui voy a declarar las variables globales a todo el programa */
var temporizador;
var anchuranavegador = window.innerWidth;
var alturanavegador = window.innerHeight;
document.getElementById("lienzo").height = alturanavegador;
document.getElementById("lienzo").width = anchuranavegador;
document.getElementById("fondo").height = alturanavegador;
document.getElementById("fondo").width = anchuranavegador;
document.getElementById("contenedor").height = alturanavegador;
document.getElementById("contenedor").width = anchuranavegador;

/* Cargamos imagenes del videojuego */
var imagennpc1 = new Image();
imagennpc1.src = "img/personajerojo.png";
var imagenpersonaje = new Image();
imagenpersonaje.src = "img/personajeverde.png";

/*Introduzco la lista de los personajes */
var numeropersonajes = 100;
var arraypersonajes = new Array();

// Propiedades protagonista
var posx = 0;
var posy = 0;
var estadoanimacion = 0;
var angulo = 0;
var velocidad = 5;
var direccion = 0;
/*Aquí introducimos las coordenadas mínimas y máximas del terreno en el cual se va a moverle el NPC */
terrenox1 = 600;
terrenoy1 = -200;
terrenox2 = 1400;
terrenoy2 = 600;