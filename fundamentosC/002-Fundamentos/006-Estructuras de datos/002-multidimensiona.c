#include <stdio.h>

int main(int arg, char *argv[]){
    char* agenda[10][4];
    
    agenda[0][0] = "Jose Vicente";
    agenda[0][1] = "Carratala Sanchis";
    agenda[0][2] = "45678912";
    agenda[0][3] = "Jose@vicente";
    
    agenda[1][0] = "Juan";
    agenda[1][1] = "Lopez Garcia";
    agenda[1][2] = "66587852";
    agenda[1][3] = "juan@correo";
    
    printf("El correo del segundo registro de la agenda es : %s \n",agenda[1][3]);
    return 0;
}