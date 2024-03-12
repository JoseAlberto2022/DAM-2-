#include <iostream>
#include <string>
using namespace std;

int main(){
    string nombre = "Jose Vicente";
    string apellidos = "Carratala Sanchis";
    string retorno = "\n";
    string nombrecompleto = nombre+" "+apellidos+retorno;
    
    cout << nombrecompleto;
    return 0;
}