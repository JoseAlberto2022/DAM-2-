#include <iostream>
using namespace std;

class Persona{
    public:
        string nombre;
        int edad;
        Persona(string minombre, int edad){
            nombre = minombre;
            edad = miedad;
        }
};

int main(){
    
    Persona persona1("Jose Vicente",44);
    cout << persona1.nombre << "\n";

    return 0;
}