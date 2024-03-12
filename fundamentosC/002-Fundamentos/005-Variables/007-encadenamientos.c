#include <stdio.h>
#include <string.h>

int main(int arg, char *argv[]){
    char nombre[] = "Jose Alberto ";
    char apellidos[] = "Martinez Garcia";
    
    strcat(nombre,apellidos);
    printf("Mi nombre completo es: %s",nombre);
    return 0;
}