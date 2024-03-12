#include <stdio.h>

int main(int arg, char *argv[]){
    printf("Elige un numero entre 0 y 9:\n");
    char numero = getchar();
    printf("El numero que has seleccionado es: %c",numero);
    return 0;
}