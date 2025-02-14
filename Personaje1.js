/* Creamos una plantilla para un personaje */
class Personaje{
    /* Dotamos al personaje de una serie de propiedades iniciales */
    constructor(x,y,z,direccion,direccionisometrica,color,tiemponacimiento,estadoanim,energia){
        /*Le proporciono unos valores de inicio a la instancia */
        this.tiemponacimiento = 0;
        this.x = Math.random()*(terrenox2-terrenox1)+terrenox1;
        this.y = Math.random()*(terrenoy2-terrenoy1)+terrenoy1;
        this.direccion = Math.PI*2*Math.random();
        this.direccionverdadera = Math.PI*2*Math.random();
        this.direccionisometrica = Math.floor(Math.random()*4);
        this.color = "#ff0000";
        this.estadoanim = Math.floor(Math.random()*7);
        this.energia = 100;
    }
    /* Creamos un metodo para gestionar el movimiento del personaje */
    mueve(){
        /* El personaje va envejeciendo*/
        this.tiemponacimiento += 1;
       
       if(this.tiemponacimiento % 100 == 0){
            this.cambiadireccion();
       }
        
        /*Actualizamos el ángulo de radianes según la nomenclatura de ángulos de cero a 3 */
        if(this.direccionisometrica == 0){
            this.direccion = 0;
        }else if(this.direccionisometrica == 1){
            this.direccion = Math.PI/2;
        }else if(this.direccionisometrica == 2){
            this.direccion = Math.PI;
        }else if(this.direccionisometrica == 3){
            this.direccion = Math.PI*1.5;
        }
        
        /*Esto actualiza la posición del personaje*/
        this.x -= Math.cos(this.direccion);
        this.y -= Math.sin(this.direccion);
        
        
        /*Va cambiando de Estado de animación para caminar pues */
        this.estadoanim++;
        if(this.estadoanim > 7){this.estadoanim = 0;}
        
        /*Cada 100 segundos pierde un punto de energía */
        if(this.tiemponacimiento % 100 == 0){this.pierdeenergia();}
        
        /*Calcula las colisiones */
        this.colisiona();
    }
    
    persigue(){
        this.estadoanim++;
        if(this.estadoanim > 7){this.estadoanim = 0;}
        
        this.x -= (this.x - posx)/100
        this.y -= (this.y - posy)/100

        
        this.x -= Math.cos(this.direccion);
        this.y -= Math.sin(this.direccion);
    }
    
    cambiadireccion(){
         /*Aqui le imdicamos al programa que el personaje cambia de direccion cada 100 unidades de vida*/
        if(this.tiemponacimiento % 100 == 0){ this.direccionisometrica = Math.floor(Math.random()*4);}
    }
    colisiona(){
        if(
        this.x > terrenox2
        || 
        this.x < terrenox1 
        || 
        this.y > terrenoy2 
        || this.y < terrenoy1
        ){
            if(this.direccionisometrica == 1){this.direccionisometrica = 3;}
            else if(this.direccionisometrica == 3){this.direccionisometrica = 1;}
            else if(this.direccionisometrica == 0){this.direccionisometrica = 2;}
            else if(this.direccionisometrica == 2){this.direccionisometrica = 0;}
        }
    }
    pierdeenergia(){
        this.energia -= 1;
    }
}