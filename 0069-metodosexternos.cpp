#include <iostream>
using namespace std;

class Persona{
    public:
        string nombre;
        int edad;
    string saluda(){
        string cadena = "Yo me llamo " + nombre + " y te digo hola\n"; 
        return cadena;
    }
    string buenosDias();
};

string Persona::buenosDias(){
    return "Yo te digo buenos dias\n";
}

int main(){
    Persona persona1;
    persona1.nombre = "Jose Vicente";
    persona1.edad = 44;
    
    Persona persona2;
    persona2.nombre = "Camilo";
    persona2.edad = 34;
    
    cout << persona1.nombre << "\n";
    cout << persona2.nombre << "\n";
    
    cout << persona1.saluda();
    cout << persona1.saluda(); 
    cout << persona1.buenosDias();
    return 0;
}